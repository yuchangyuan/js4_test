
function add_script(txt)
{
    var script = document.createElement("script");
    script.setAttribute("language", "javascript");
    script.append(txt);
    document.body.appendChild(script);
}

function load_script(db)
{
    var req;

    var xhr = new window.XMLHttpRequest();

    var script_list = ["rts.js", "lib.js", "out.js", "runmain.js"];

    function run () {
        if (script_list.length == 0) return;

        var path = script_list.shift();

        var tx = db.transaction(["js"], "readwrite");
        req = tx.objectStore("js").get(path);

        req.onsuccess = function() {
            if (req.result == null) {
                xhr.open("GET", path);
                xhr.responseType = 'text';
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var txt = xhr.responseText;

                        var tx = db.transaction(["js"], "readwrite");
                        req = tx.objectStore("js")
                            .add({path: path, content: txt});

                        add_script(txt);
                        run();
                    }
                }

                xhr.send()
            }
            else {
                console.log("load from local: " + path)
                add_script(req.result.content);
                run();
            }
        }
    }

    run();
}


function load()
{
    var db;
    var request = window.indexedDB.open("res", 1);

    request.onerror = function(event) {
        console.log("indexeddb open fail");
        window.indexedDB.deleteDatabase("res");
    };

    request.onupgradeneeded = function(event) {
        //console.log("on upgraded");

        var db = event.target.result;
        var objectStore = db.createObjectStore("js", { keyPath: "path" } );
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        //console.log("on success");

        load_script(db);
    };

}


load();
