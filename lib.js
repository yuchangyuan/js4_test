var h$ghcjsbn_zero_i = (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (0)));;
var h$ghcjsbn_one_i = (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (1)));;
var h$ghcjsbn_negOne_i = (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (-1)));;
var h$ghcjsbn_null_b = [-1];
var h$ghcjsbn_zero_b = [0];
var h$ghcjsbn_one_b = [1, 1];
var h$ghcjsbn_two31_b = [2, 0, 8];
var h$ghcjsbn_czero_b = [2, 268435455, 15];
var h$ghcjsbn_two31_i = (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJpzh_con_e, (h$ghcjsbn_two31_b)));;
var h$ghcjsbn_negTwo31_i = (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (-2147483648)));;
var h$ghcjsbn_smallPrimes =
 [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
 , 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113
 , 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197
 , 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281
 , 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379
 , 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463
 , 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571
 , 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659
 , 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761
 , 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863
 , 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977
 , 983, 991, 997
 ];
var h$ghcjsbn_smallPrimesM = null;
function h$ghcjsbn_getSmallPrimesM() {
  var a, i;
  if(h$ghcjsbn_smallPrimesM === null) {
    a = [];
    for(i = 0; i < 1008; i++) {
      a[i] = false;
    }
    for(i = h$ghcjsbn_smallPrimes.length - 1; i >= 0; i--) {
      a[h$ghcjsbn_smallPrimes[i]] = true;
    }
    h$ghcjsbn_smallPrimesM = a;
  }
  return h$ghcjsbn_smallPrimesM;
}
function h$ghcjsbn_isPrime_s(s, rounds) {
  if(s < 2 || (s > 2 && ((s&1) === 1))) return false;
  if(s <= 1008) {
    return h$ghcjsbn_getSmallPrimesM()[s];
  }
  throw new Error("isPrime_s");
}
function h$ghcjsbn_isPrime_b(b, rounds) {
  ;
  throw new Error("isPrime_b");
}
function h$ghcjsbn_cmp_bb(b1, b2) {
  ;
  ;
  var l1 = b1[0], l2 = b2[0], d1, d2;
  if(l1 === l2) {
    while(--l1 >= 0) {
      d1 = b1[l1+1];
      d2 = b2[l1+1];
      if(d1 !== d2) return d1 < d2 ? 0 : 2;
    }
    return 1;
  } else {
    return l1 > l2 ? 2 : 0;
  }
}
var h$ghcjsbn_tmp_2a = [0, 0, 0];
var h$ghcjsbn_tmp_2b = [0, 0, 0];
var h$ghcjsbn_tmp_a = [0, 0, 0, 0, 0, 0, 0, 0];
var h$ghcjsbn_tmp_b = [0, 0, 0, 0, 0, 0, 0, 0];
function h$ghcjsbn_sub_bw(b, w) {
  var a = h$ghcjsbn_tmp_2a;
  h$ghcjsbn_toBigNat_w(a, w);
  return h$ghcjsbn_sub_bb(b, a);
}
function h$ghcjsbn_sub_bs(b, s) {
  ;
  ;
  var a, ms, r;
  if(s < 0) {
    if(s === -2147483648) {
      r = h$ghcjsbn_add_bb(b, h$ghcjsbn_two31_b);
    } else {
      a = h$ghcjsn_tmp_2a;
      h$ghcjsbn_toBigNat_s(a, -s);
      r = h$ghcjsbn_add_bb(b, a);
    }
  } else {
    a = h$ghcjsn_tmp_2a;
    h$ghcjsbn_toBigNat_s(a, s);
    r = h$ghcjsbn_sub_bb(b, a);
  }
  ;
  return r;
}
function h$ghcjsbn_add_bw(b, w) {
  ;
  ;
  var a = h$ghcjsbn_tmp_2a;
  h$ghcjsbn_toBigNat_w(a, w);
  return h$ghcjsbn_add_bb(b, a);
}
function h$ghcjsbn_add_bs(b, s) {
  ;
  ;
  var a, ms, r;
  if(s < 0) {
    if(s === -2147483648) {
      r = h$ghcjsbn_sub_bb(b, h$ghcjsbn_two31_r);
    } else {
      ms = -s;
      a = h$ghcjsbn_tmp_2a;
      h$ghcjsbn_toBigNat_s(a, ms);
      r = h$ghcjsbn_sub(b, a);
    }
  } else {
    a = h$ghcjsbn_tmp_2a;
    h$ghcjsbn_toBigNat_s(a, s);
    r = h$ghcjsbn_add_bb(b, a);
  }
  ;
  return r;
}
function h$ghcjsbn_add_bb(b1, b2) {
  ;
  ;
  var i, c = 0, l1 = b1[0], l2 = b2[0], t = [0];
  var bl, lmin, lmax;
  if(l1 <= l2) {
    lmin = l1;
    lmax = l2;
    bl = b2;
  } else {
    lmin = l2;
    lmax = l1;
    bl = b1;
  }
  for(i=1;i<=lmin;i++) {
    c += b1[i] + b2[i];
    t[i] = c & 0xfffffff;
    c >>= 28;
  }
  for(i=lmin+1;i<=lmax;i++) {
    c += bl[i];
    t[i] = c & 0xfffffff;
    c >>= 28;
  }
  if(c !== 0) t[++lmax] = c;
  t[0] = lmax;
  ;
  return t;
}
function h$ghcjsbn_addTo_bb(b1, b2) {
  ;
  ;
  var i, c = 0, l1 = b1[0], l2 = b2[0];
  if(l2 > l1) {
    for(i = l1 + 1; i <= l2; i++) {
      b1[i] = 0;
    }
    l1 = l2;
  }
  for(i = 1; i <= l2; i++) {
    c += b1[i] + b2[i];
    b1[i] = c & 0xfffffff;
    c >>= 28;
  }
  for(i = l2 + 1; c !== 0 && i <= l1; i++) {
    c += b1[i];
    b1[i] = c & 0xfffffff;
    c >>= 28;
  }
  if(c !== 0) {
    b1[l1] = c;
    b1[0] = l1+1;
  } else {
    b1[0] = l1;
  }
  ;
}
function h$ghcjsbn_sub_bb(b1, b2) {
  ;
  ;
  if(h$ghcjsbn_cmp_bb(b1,b2) === 0) {
    return [];
  } else {
    var i, c = 0, l1 = b1[0], l2 = b2[0], t = [0];
    for(i = 1; i <= l2; i++) {
      c += b1[i] - b2[i];
      t[i] = c & 0xfffffff;
      c >>= 28;
    }
    for(i = l2 + 1; i <= l1; i++) {
      c += b1[i];
      t[i] = c & 0xfffffff;
      c >>= 28;
    }
    while(l1 > 0 && t[l1] === 0) l1--;
    t[0] = l1;
    ;
    return t;
  }
}
function h$ghcjsbn_subTo_bb(b1, b2) {
  ;
  ;
  var i, c = 0, l1 = b1[0], l2 = b2[0];
  for(i = 1; i <= l2; i++) {
    c += b1[i] - b2[i];
    b1[i] = c & 0xfffffff;
    c >>= 28;
  }
  for(i = l2 + 1; c !== 0 && i <= l1; i++) {
    c += b1[i];
    b1[i] = c & 0xfffffff;
    c >>= 28;
  }
  while(l1 > 0 && b1[l1] === 0) l1--;
  b1[0] = l1;
  ;
}
function h$ghcjsbn_wrap_p(b) {
  var l = b[0];
  if(l === 0) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (0)));;
  } else if(l === 1) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (b[1])));;
  } else if(l === 2 && (b[2] >> (31 - 28)) === 0) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, ((b[2] << 28)|b[1])));;
  } else {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJpzh_con_e, (b)));;
  }
}
function h$ghcjsbn_wrap_n(b) {
  var l = b[0];
  if(l === 0) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (0)));;
  } else if(l === 1) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (-b[1])));;
  } else if(l === 2 &&
            ((b[2] >> (31 - GHCJSN_BITS)) === 0 ||
             (b[2] === (1 << (31 - 28)) && b[1] === 0))) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, ((-b[2]-b[1])|0)));;
  } else {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJnzh_con_e, (b)));;
  }
}
function h$ghcjsbn_mulTo_bb(b1, b2) {
  ;
  ;
  var t = h$ghcjsbn_mul_bb(b1, b2);
  h$ghcjsbn_copy(b1, t);
  ;
}
function h$ghcjsbn_mul_bb(b1, b2) {
  ;
  ;
  var l1 = b1[0], l2 = b2[0];
  var n = l1 + l2, i, t = [0];
  for(i = 1; i <= n; i++) t[i] = 0;
  if(l1 > l2) {
    for(i = 0; i < l2; i++) {
      t[i + l1 + 1] = h$ghcjsbn_mul_limb(0, b1, b2[i+1], t, i, 0, l1);
    }
  } else {
    for(i = 0; i < l1; i++) {
      t[i + l2 + 1] = h$ghcjsbn_mul_limb(0, b2, b1[i+1], t, i, 0, l2);
    }
  }
  for(i = l1 + l2; i > 0 && t[i] === 0; i--);
  t[0] = i;
  ;
  return t;
}
function h$ghcjsbn_mul_bw(b, w) {
  ;
  ;
  var a = h$ghcjsbn_tmp_2a;
  h$ghcjsbn_toBigNat_w(a, w);
  var t = h$ghcjsbn_mul_bb(b, a);
  ;
  return t;
}
function h$ghcjsbn_mul_karatsuba_bb(t, b1, b2) {
  throw new Error("not yet updated");
  var l1 = b1.length, l2 = b2.length;
  var i, b = (l1 < l2 ? l1 : l2) >> 1;
  var x0 = [b], x1 = [l1-b], y0 = [b], y1 = [l2-b];
  for(i = 1; i <= b; i++) {
    x0[i] = b1[i];
    y0[i] = b2[i];
  }
  for(i = b + 1; i <= l1; i++) x1[i - b] = b1[i];
  for(i = b + 1; i <= l2; i++) y1[i - b] = b2[i];
  var z0 = h$ghcjsbn_mul_bb(x0, y0), z1, z2 = h$ghcjsbn_mul_bb(x1, y1);
  h$ghcjsbn_addTo_bb(x0, x1);
  h$ghcjsbn_addTo_bb(y0, x1);
  z1 = h$ghcjsbn_mul_bb(x0, y0);
  h$ghcjsbn_subTo_bb(z1, z2);
  h$ghcjsbn_subTo_bb(z1, z0);
  for(i = 0; i < 2*b; i++) t[i] = 0;
  l2 = z2.length;
  for(i = 0; i < l2; i++) t[i+2*b] = z2[i];
  var z1s = [];
  l1 = z1.length;
  for(i = 0; i < b; i++) z1s[i] = 0;
  for(i = 0; i < l1; i++) z1s[i+b] = z1[i];
  h$ghcjsbn_addTo_bb(t, z1s);
  h$ghcjsbn_addTo_bb(t, z0);
  return t;
}
function h$ghcjsbn_mul_limb(i,b,x,w,j,c,n) {
  var xl = x & 0x3fff, xh = x >> 14;
  while(--n >= 0) {
    var l = b[++i] & 0x3fff;
    var h = b[i] >> 14;
    var m = xh * l + h * xl;
    l = xl *l + ((m & 0x3fff) << 14) + w[++j] + c;
    c = (l >> 28) + (m >> 14) + xh * h;
    w[j] = l & 0xfffffff;
  }
  return c;
}
function h$ghcjsbn_quotRem_bb(q, r, b1, b2) {
  ;
  ;
  if(q === null) q = h$ghcjsbn_tmp_a;
  if(r === null) r = h$ghcjsbn_tmp_b;
  var l1 = b1[0], l2 = b2[0], nsh, y = [];
  if(l1 === 0) {
    q[0] = 0;
    r[0] = 0;
    return;
  }
  if(h$ghcjsbn_cmp_bb(b1,b2) === 0) {
    q[0] = 0;
    h$ghcjsbn_copy(r, b1);
    return;
  }
  nsh = 28 -h$ghcjsbn_nbits_s(b2[l2]);
  ;
  if(nsh !== 0) {
    h$ghcjsbn_shlTo_b(y, b2, nsh);
    h$ghcjsbn_shlTo_b(r, b1, nsh);
  } else {
    h$ghcjsbn_copy(y, b2);
    h$ghcjsbn_copy(r, b1);
  }
  ;
  ;
  var ys = y[0], y0 = y[ys];
  var yt = y0*(1<<24)+((ys>1)?y[ys-1]>>4:0);
  var d1 = 4503599627370496/yt, d2 = (1<<24)/yt, e = 1 << 4;
  var i = r[0], j = i-ys, t = q;
  h$ghcjsbn_shlTo_limbs_b(t,y,j);
  if(h$ghcjsbn_cmp_bb(r, t) !== 0) {
    r[r[0]+1] = 1;
    r[0] += 1;
    h$ghcjsbn_subTo_bb(r, t);
  }
  h$ghcjsbn_shlTo_limbs_b(t, h$ghcjsbn_one_b, ys);
  y = h$ghcjsbn_sub_bb(t, y);
  while(y.length <= ys) y[y.length] = 0;
  while(--j >= 0) {
    var qd = (r[(--i)+1]===y0)?0xfffffff:Math.floor(r[i+1]*d1+(r[i]+e)*d2);
    var am = h$ghcjsbn_mul_limb(0, y, qd, r, j, 0, ys);
    if((r[i+1] += am) < qd) {
      h$ghcjsbn_shlTo_limbs_b(t, y, j);
      h$ghcjsbn_subTo_bb(r, t);
      while(r[i+1] < --qd) {
        h$ghcjsbn_subTo_bb(r, t);
      }
    }
  }
  ;
  h$ghcjsbn_shrTo_limbs_b(q, r, ys);
  r[0] = ys;
  while(r[r[0]] === 0 && r[0] > 0 && r[0]--);
  if(nsh !== 0) {
    var r0 = [];
    h$ghcjsbn_copy(r0, r);
    h$ghcjsbn_shrTo_b(r, r0, nsh);
  }
  ;
  ;
}
function h$ghcjsbn_quotRem_bw(q, b, w) {
  ;
  ;
  var a = h$ghcjsbn_tmp_2a;
  h$ghcjsbn_toBigNat_w(a, w);
  var r = [];
  h$ghcjsbn_quotRem_bb(q, r, b, a);
  return h$ghcjsbn_toWord_b(r);
}
function h$ghcjsbn_tmp_toJSBN(b) {
  var j = new BigInteger(), bl = b[0], i;
  for(i = 0; i < bl; i++) j.data[i] = b[i+1];
  j.s = 0;
  j.t = bl;
  return j;
}
function h$ghcjsbn_tmp_fromJSBN(b, j) {
  var bl = j.t, i;
  for(i = 0; i < bl; i++) {
    b[i] = j.data[i];
  }
  return bl;
}
function h$ghcjsbn_rem_bb(b1, b2) {
  ;
  ;
  var t1 = [], t2 = [];
  h$ghcjsbn_quotRem_bb(t1, t2, b1, b2);
  ;
  return t2;
}
function h$ghcjsbn_rem_bw(b, w) {
  ;
  ;
  var r = h$ghcjsbn_quotRem_bw([] , b, w);
  ;
  return r;
}
function h$ghcjsbn_quot_bb(b1, b2) {
  ;
  ;
  var t1 = [], t2 = [];
  h$ghcjsbn_quotRem_bb(t1, t2, b1, b2);
  ;
  return t1;
}
function h$ghcjsbn_sqr_b(b) {
  ;
  var l = b[0], n = 2 * l, i, c, t = [0];
  for(i = 1; i <= n; i++) t[i] = 0;
  for(i = 0; i < l - 1; i++) {
    c = h$ghcjsbn_mul_limb(i, b, b[i+1],t,2*i,0,1);
    if((t[i + l + 1] += h$ghcjsbn_mul_limb(i+1, b, 2*b[i+1], t, 2*i+1, c, l - i - 1)) >= 0x10000000) {
      t[i + l + 1] -= 0x10000000;
      t[i + l + 2] = 1;
    }
  }
  if(n > 0) t[n] += h$ghcjsbn_mul_limb(i, b, b[i+1], t, 2*i, 0, 1);
  if(t[n] === 0) n--;
  t[0] = n;
  ;
  return t;
}
function h$ghcjsbn_pow_bb(b1, b2) {
  ;
  ;
  var i, sq = b1, t = [1,1];
  var bits = h$ghcjsbn_nbits_b(b2);
  for(i = 0; i < bits; i++) {
    if(h$ghcjsbn_testBit_b(b2, i)) {
      h$ghcjsbn_mulTo_bb(t, sq);
    }
    sq = h$ghcjsbn_sqr_b(sq);
  }
  return t;
}
function h$ghcjsbn_pow_bw(b, w) {
  ;
  ;
  var i, sq = b, t = [1,1];
  while(w) {
    if(w&1) h$ghcjsbn_mulTo_bb(t, sq);
    w >>>= 1;
    if(w) {
      sq = h$ghcjsbn_sqr_b(sq);
    }
  }
  ;
  return t;
}
function h$ghcjsbn_pow_ww(w1, w2) {
  ;
  ;
  var b = h$ghcjsbn_tmp_2a;
  h$ghcjsbn_toBigNat_w(b, w1);
  var t = h$ghcjsbn_pow_bw(b, w2);
  ;
  return t;
}
function h$ghcjsbn_modPow_bbb(b, s1, s2) {
  throw new Error("modPow_bbb");
}
function h$ghcjsbn_modPow_bss(b, s1, s2) {
  throw new Error("modPow_bss");
}
function h$ghcjsbn_modPow_sss(s1, s2, s3) {
  throw new Error("modPow_sss");
}
function h$ghcjsbn_gcd_bb(b1, b2) {
  ;
  ;
  var r;
  if(h$ghcjsbn_cmp_bb(b1, b2) === 2) {
    r = b1;
    b1 = b2;
    b2 = r;
  }
  while(b1[0] > 0) {
    r = h$ghcjsbn_rem_bb(b2, b1);
    b2 = b1;
    b1 = r;
  }
  ;
  return b2;
}
function h$ghcjsbn_gcd_bs(b, s) {
  throw new Error("h$ghcjsbn_gcd_bs not implemented");
}
function h$ghcjsbn_gcd_ss(s1, s2) {
  ;
  ;
  var a, b, r;
  a = s1 < 0 ? -s1 : s1;
  b = s2 < 0 ? -s2 : s2;
  if(b < a) {
    r = a;
    a = b;
    b = r;
  }
  while(a !== 0) {
    r = b % a;
    b = a;
    a = r;
  }
  ;
  return b;
}
function h$ghcjsbn_gcd_ww(w1, w2) {
  ;
  ;
  var a, b, r;
  a = w1 < 0 ? (w1 + 4294967296) : w1;
  b = w2 < 0 ? (w2 + 4294967296) : w2;
  if(b < a) {
    r = a;
    a = b;
    b = r;
  }
  while(a !== 0) {
    r = b % a;
    b = a;
    a = r;
  }
  b = b|0;
  ;
  return b;
}
function h$ghcjsbn_gcd_bw(b, w) {
  ;
  ;
  var q = [], r = h$ghcjsbn_quotRem_bw(q, b, w);
  ;
  if(r === 0) {
    return b[0] === 0 ? 0 : w;
  } else {
    return h$ghcjsbn_gcd_ww(r, w);
  }
}
function h$ghcjsbn_shr_b(b, s) {
  ;
  ;
  var i, v1, v2, l = b[0], sl = (s / 28)|0, t = [0];
  l -= sl;
  if(l <= 0) {
    t[0] = 0;
  } else {
    var sb1 = s % 28, sb2 = 28 - sb1, m = (1<<sb1)-1;
    var c = b[sl + 1] >> sb1, v;
    for(i = 1; i < l; i++) {
      v = b[i + sl + 1];
      t[i] = ((v&m) << sb2)|c;
      c = v >> sb1;
    }
    if(c !== 0) {
      t[l] = c;
      t[0] = l;
    } else {
      t[0] = l - 1;
    }
  }
  ;
  return t;
}
function h$ghcjsbn_shrTo_b(t, b, s) {
  ;
  ;
  var i, v1, v2, l = b[0], sl = (s / 28)|0;
  t[0] = 0;
  l -= sl;
  if(l <= 0) {
    t[0] = 0;
  } else {
    var sb1 = s % 28, sb2 = 28 - sb1, m = (1<<sb1)-1;
    var c = b[sl + 1] >> sb1, v;
    for(i = 1; i < l; i++) {
      v = b[i + sl + 1];
      t[i] = ((v&m) << sb2)|c;
      c = v >> sb1;
    }
    if(c !== 0) {
      t[l] = c;
      t[0] = l;
    } else {
      t[0] = l - 1;
    }
  }
  ;
}
function h$ghcjsbn_shr_neg_b(b, s) {
  if(s === 0) return b;
  if(h$ghcjsbn_cmp_bb(b, h$ghcjsbn_zero_b) === 1) return b;
  var t = h$ghcjsbn_sub_bw(b, 1);
  t = h$ghcjsbn_shr_b(t, s);
  return h$ghcjsbn_add_bw(t, 1);
}
function h$ghcjsbn_shl_b(b, s) {
  ;
  ;
  var sl = (s / 28)|0;
  var sb1 = s % 28, sb2 = 28 - sb1;
  var l = b[0];
  if(l === 0) return h$ghcjsbn_zero_b;
  var c = 0, i, v, m = (1 <<sb1) - 1, t = [0];
  for(i = 1; i <= sl; i++) {
    t[i] = 0;
  }
  for(i = 1; i <= l; i++) {
    v = b[i];
    t[i + sl] = ((v << sb1) & 0xfffffff) | c;
    c = v >> sb2;
  }
  if(c !== 0) {
    t[l+sl+1] = c;
    t[0] = l + sl + 1;
  } else {
    t[0] = l + sl;
  }
  ;
  return t;
}
function h$ghcjsbn_shlTo_b(t, b, s) {
  ;
  ;
  var sl = (s / 28)|0;
  var sb1 = s % 28, sb2 = 28 - sb1;
  var l = b[0], c = 0, i, v, m = (1 <<sb1) - 1;
  t[0] = 0;
  for(i = 1; i <= sl; i++) {
    t[i] = 0;
  }
  for(i = 1; i <= l; i++) {
    v = b[i];
    t[i + sl] = ((v << sb1) & 0xfffffff) | c;
    c = v >> sb2;
  }
  if(c !== 0) {
    t[l+sl+1] = c;
    t[0] = l + sl + 1;
  } else {
    t[0] = l + sl;
  }
  ;
}
function h$ghcjsbn_shrTo_limbs_b(t, b, s) {
  ;
  ;
  var l = b[0], l1 = l - s, i;
  if(l1 < 1) {
    t[0] = 0;
  } else {
    t[0] = l1;
    for(i = 1; i <= l1; i++) t[i] = b[i+s];
  }
  ;
}
function h$ghcjsbn_shlTo_limbs_b(t, b, s) {
  ;
  ;
  var l = b[0], l1 = l + s, i;
  if(l === 0) {
    t[0] = 0;
  } else {
    t[0] = l1;
    for(i = 1; i <= s; i++) t[i] = 0;
    for(i = s+1; i <= l1; i++) t[i] = b[i-s];
  }
  ;
}
function h$ghcjsbn_nbits_b(b) {
  ;
  var l = b[0], c = 0, s, t;
  if(l === 0) {
    return 0;
  } else {
    var r = ((l-1)*28) + h$ghcjsbn_nbits_s(b[l]);
    ;
    return r;
  }
}
function h$ghcjsbn_nbits_s(s) {
  ;
  var c = 1, t;
  if((t = s >>> 16) != 0) { s = t; c += 16; }
  if((t = s >> 8) != 0) { s = t; c += 8; }
  if((t = s >> 4) != 0) { s = t; c += 4; }
  if((t = s >> 2) != 0) { s = t; c += 2; }
  if((t = s >> 1) != 0) { s = t; c += 1; }
  ;
  return c;
}
function h$ghcjsbn_showBase(b, base) {
  ;
  ;
  if(h$ghcjsbn_cmp_bb(b, h$ghcjsbn_zero_b) === 1) {
    return "0";
  } else {
    return h$ghcjsbn_showBase_rec(b, base, Math.log(base), 0);
  }
}
function h$ghcjsbn_showBase_rec(b, base, logBase, pad) {
  var bits = h$ghcjsbn_nbits_b(b), r;
  if(h$ghcjsbn_cmp_bb(b, h$ghcjsbn_two31_b) === 0) {
    var ti = h$ghcjsbn_toInt_b(b);
    r = ti === 0 ? "" : ti.toString(base);
  } else {
    var digits = Math.floor(bits * 0.6931471805599453 / logBase);
    var d2 = Math.round(digits/2), p, q = [], r = [];
    p = h$ghcjsbn_pow_ww(base, d2);
    h$ghcjsbn_quotRem_bb(q, r, b, p);
    r = h$ghcjsbn_showBase_rec(q, base, logBase, 0) +
        h$ghcjsbn_showBase_rec(r, base, logBase, d2);
  }
  var rl = r.length;
  if(rl < pad) {
    while(rl <= pad-8) { r = "00000000" + r; rl += 8; }
    switch(pad-rl) {
    case 1: r = "0" + r; break;
    case 2: r = "00" + r; break;
    case 3: r = "000" + r; break;
    case 4: r = "0000" + r; break;
    case 5: r = "00000" + r; break;
    case 6: r = "000000" + r; break;
    case 7: r = "0000000" + r; break;
    }
  }
  return r;
}
function h$ghcjsbn_show(b) {
  throw new Error("show not implemented");
}
function h$ghcjsbn_showHex(b) {
  throw new Error("showHex not implemented");
}
function h$ghcjsbn_copy(t, b) {
  ;
  var l = b[0];
  for(var i = 0; i <= l; i++) {
    t[i] = b[i];
  }
  return l;
}
function h$ghcjsbn_testBit_b(b, n) {
  ;
  ;
  var limb = (n / 28)|0;
  if(limb >= b[0]) {
    return false;
  } else {
    var d = b[limb];
    var bit = n - (28 * limb);
    return (b[limb] & (1 << bit)) !== 0;
  }
}
function h$ghcjsbn_popCount_b(b) {
  ;
  var c = 0, l = b[0];
  while(l > 0) {
    c += h$popCnt32(b[l--]);
  }
  return c;
}
function h$ghcjsbn_xor_bb(b1, b2) {
  ;
  ;
  var i, lmin, lmax, blmax, l1 = b1[0], l2 = b2[0], t = [0];
  if(l1 <= l2) {
    lmin = l1;
    lmax = l2;
    blmax = b2;
  } else {
    lmin = l2;
    lmax = l1;
    blmax = b1;
  }
  for(i = 1; i <= lmin; i++) {
    t[i] = b1[i] ^ b2[i];
  }
  for(i = lmin + 1; i <= lmax; i++) {
    t[i] = blmax[i];
  }
  while(lmax > 0 && t[lmax] === 0) lmax--;
  t[0] = lmax;
  ;
  return t;
}
function h$ghcjsbn_or_bb(b1, b2) {
  ;
  ;
  var i, lmin, lmax, blmax, l1 = b1[0], l2 = b2[0], t = [0];
  if(l1 <= l2) {
    lmin = l1;
    lmax = l2;
    blmax = b2;
  } else {
    lmin = l2;
    lmax = l1;
    blmax = b1;
  }
  for(i = 1; i <= lmin; i++) {
    t[i] = b1[i] | b2[i];
  }
  for(i = lmin + 1; i <= lmax; i++) {
    t[i] = blmax[i];
  }
  t[0] = lmax;
  ;
  return t;
}
function h$ghcjsbn_and_bb(b1, b2) {
  ;
  ;
  var i, lmin, l1 = b1[0], l2 = b2[0], t = [0];
  lmin = l1 <= l2 ? l1 : l2;
  for(i = 1; i <= lmin; i++) {
    t[i] = b1[i] & b2[i];
  }
  while(lmin > 0 && t[lmin] === 0) lmin--;
  t[0] = lmin;
  ;
  return t;
}
function h$ghcjsbn_andn_bb(b1, b2) {
  ;
  ;
  var i, lmin, l1 = b1[0], l2 = b2[0], t = [0];
  if(l1 <= l2) {
    for(i = 0; i <= l1; i++) t[i] = b1[i] & (~b2[i]);
  } else {
    for(i = 0; i <= l2; i++) t[i] = b1[i] & (~b2[i]);
    for(i = l2+1; i <= l1; i++) t[i] = b1[i];
  }
  while(l1 > 0 && t[l1] === 0) l1--;
  t[0] = l1;
  ;
  return t;
}
function h$ghcjsbn_toInt_b(b) {
  ;
  var bl = b[0], r;
  if(bl >= 2) {
    r = (b[2] << 28) | b[1];
  } else if(bl === 1) {
    r = b[1];
  } else {
    r = 0;
  }
  ;
  return r;
}
function h$ghcjsbn_toWord_b(b) {
  ;
  var bl = b[0], w;
  if(bl >= 2) {
    w = (b[2] << 28) | b[1];
  } else if(bl === 1) {
    w = b[1];
  } else {
    w = 0;
  }
  ;
  return w;
}
var h$integer_bigNatToWord64 = h$ghcjsbn_toWord64_b;
var h$integer_word64ToBigNat = h$ghcjsbn_mkBigNat_ww;
function h$ghcjsbn_toWord64_b(b) {
  ;
  var len = b[0], w1, w2;
  if(len < 2) {
    w2 = 0;
    w1 = (len === 1) ? b[1] : 0;
  } else {
    w1 = b[1] | (b[2] << 28);
    if(len === 2) {
      w2 = b[2] >>> 4;
    } else {
      w2 = (b[2] >>> 4) | (b[3] << 24);
    }
  }
  ;
  ;
  { h$ret1 = (w1); return (w2); };
}
function h$ghcjsbn_toBigNat_s(b, s) {
  ;
  if(s === 0) {
    b[0] = 0;
  } else if(s <= 0xfffffff) {
    b[0] = 1;
    b[1] = s;
  } else {
    b[0] = 2;
    b[1] = s & 0xfffffff;
    b[2] = s >> 0xfffffff;
  }
  ;
}
function h$ghcjsbn_toBigNat_w(b, w) {
  ;
  if(w === 0) {
    b[0] = 0;
  } else if(w > 0 && w <= 0xfffffff) {
    b[0] = 1;
    b[1] = w;
  } else {
    b[0] = 2;
    b[1] = w & 0xfffffff;
    b[2] = w >>> 28;
  }
  ;
}
function h$ghcjsbn_mkBigNat_w(w) {
  ;
  var r;
  if(w === 0) r = h$ghcjsbn_zero_b;
  else if(w === 1) r = h$ghcjsbn_one_b;
  else if(w > 0 && w <= 0xfffffff) r = [1,w];
  else r = [2, w & 0xfffffff, w >>> 28];
  ;
  return r;
}
function h$ghcjsbn_mkBigNat_ww(hw, lw) {
  ;
  ;
  var r;
  if(hw === 0) r = h$ghcjsbn_mkBigNat_w(lw);
  else {
    var w1 = lw & 0xfffffff;
    var w2 = (lw >>> 28) | ((hw << 4) & 0xfffffff);
    var w3 = hw >>> 24;
    if(w3 === 0) {
      r = [2, w1, w2];
    } else {
      r = [3, w1, w2, w3];
    }
  }
  ;
  return r;
}
var h$ghcjsbn_toBigNat_ww = h$ghcjsbn_mkBigNat_ww;
var h$integer_mkInteger = h$ghcjsbn_mkInteger;
function h$ghcjsbn_mkInteger(nonNeg, xs) {
  var r = [0], s = 0, t;
  while(((xs).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
    t = h$ghcjsbn_shl_b(h$ghcjsbn_mkBigNat_w(((typeof(((xs).d1)) === 'number')?(((xs).d1)):(((xs).d1)).d1)), s);
    h$ghcjsbn_addTo_bb(r, t);
    s += 31;
    xs = ((xs).d2);
  }
  if(nonNeg) {
    if(h$ghcjsbn_cmp_bb(r, h$ghcjsbn_two31_b) === 0) {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (h$ghcjsbn_toInt_b(r))));;
    } else {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJpzh_con_e, (r)));;
    }
  } else {
    var c = h$ghcjsbn_cmp_bb(r, h$ghcjsbn_two31_b);
    if(c === 2) {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJnzh_con_e, (r)));;
    } else if(c === 1) {
      return h$ghcjsbn_negTwo31_i;
    } else {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (-h$ghcjsbn_toInt_b(r))));;
    }
  }
}
function h$ghcjsbn_indexBigNat(b, i) {
  ;
  ;
  var bl = b[0];
  return i >= bl ? 0 : b[i+1];
}
function h$ghcjsbn_cmp_bw(b, w) {
  ;
  ;
  var w1 = w & 0xfffffff, w2 = w >>> 28, bl = b[0];
  if(w2 === 0) {
    if(bl === 0) {
      return w1 > 0 ? 0 : 1;
    } else if(bl === 1) {
      var bw = b[1];
      return bw > w1 ? 2 : (bw === w1 ? 1 : 0);
    } else {
      return 2;
    }
  } else {
    if(bl < 2) {
      return 0;
    } else if(bl > 2) {
      return 2;
    } else {
      var bw1 = b[1], bw2 = b[2];
      return (bw2 > w2) ? 2
                        : (bw2 < w2 ? 0
                                    : (bw1 > w1 ? 2
                                                : (bw1 < w1 ? 0
                                                            : 1)));
    }
  }
}
function h$ghcjsbn_gt_bw(b, w) {
  ;
  ;
  var bl = b[0];
  if(bl > 2) return true;
  else if(bl === 0) return false;
  else if(bl === 1) return w >= 0 && b[1] > w;
  else {
    var wh = w >>> 28, wl = w & 0xfffffff, b2 = b[2];
    return (b2 > wh || ((wh === b2) && b[1] > wl));
  }
}
function h$ghcjsbn_eq_bb(b1, b2) {
  ;
  ;
  var bl1 = b1[0], bl2 = b2[0];
  if(bl1 !== bl2) {
    return false;
  } else {
    for(var i = bl1; i >= 1; i--) {
      var bw1 = b1[i], bw2 = b2[i];
      if(bw1 !== bw2) return false;
    }
  }
  return true;
}
function h$ghcjsbn_neq_bb(b1, b2) {
  ;
  ;
  var bl1 = b1[0], bl2 = b2[0];
  if(bl1 !== bl2) {
    return true;
  } else {
    for(var i = bl1; i >= 1; i--) {
      var bw1 = b1[i], bw2 = b2[i];
      if(bw1 !== bw2) return true;
    }
  }
  return false;
}
function h$ghcjsbn_eq_bw(b, w) {
  ;
  ;
  var w1 = w & 0xfffffff, w2 = w >>> 28, bl = b[0];
  if(w2 === 0) {
    if(w1 === 0) {
      return bl === 0;
    } else {
      return bl === 1 && b[1] === w;
    }
  } else {
    return bl === 2 && b[1] === w1 && b[2] === w2;
  }
}
function h$ghcjsbn_isZero_b(b) {
  ;
  return b[0] === 0;
}
function h$ghcjsbn_isNull_b(b) {
  return b[0] === -1;
}
function h$ghcjsbn_bitBigNat(n) {
  if(n === 0) {
    r = h$ghcjsbn_one_b;
  } else if(n < 28) {
    r = [1, 1 << n];
  } else {
    var l = (n / 28)|0;
    var r = [l+1];
    for(var i = 1; i<= l; i++) r[i] = 0;
    r[l+1] = 1 << (n - (28 * l));
  }
  ;
  return r;
}
function h$ghcjsbn_integerLog2(i) {
  ;
  if(((i).f === h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e)) {
    return h$ghcjsbn_nbits_s(((i).d1));
  } else {
    return h$ghcjsbn_nbits_b(((i).d1));
  }
}
function h$ghcjsbn_integerLog2IsPowerOf2(i) {
  ;
  var nb;
  if(((i).f === h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e)) {
    var sd = ((i).d1);
    ;
    nb = h$ghcjsbn_nbits_s(sd);
    return ((sd === 1 << nb) ? -nb : nb);
  } else {
    var bd = ((i).d1);
    ;
    nb = h$ghcjsbn_nbits_b(bd);
    var i, bl = (nb / 28) | 0, lb = nb - 28 * bl, l = bd[bl+1];
    if(l !== (1 << lb)) return nb;
    for(i = bl; i >= 1; i--) {
      if(bd[i] !== 0) return nb;
    }
    return -nb;
  }
}
function h$ghcjsbn_isValid_b(b) {
  if(!Array.isArray(b)) return 0;
  if(b.length < 1) return 0;
  var bl = b[0], w;
  if(b.length < (bl+1)) return 0;
  for(var i = 0; i <= bl; i++) {
    w = b[i];
    if(typeof w !== 'number' || (w & 0xfffffff) !== w) return 0;
  }
  return 1;
}
function h$ghcjsbn_toInteger_b(b) {
  ;
  if(h$ghcjsbn_cmp_bb(b, h$ghcjsbn_two31_b) === 0) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (h$ghcjsbn_toInt_b(b))));;
  } else {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJpzh_con_e, (b)));;
  }
}
function h$ghcjsbn_toNegInteger_b(b) {
  ;
  var c = h$ghcjsbn_cmp_bb(b, h$ghcjsbn_two31_b);
  if(c === 0) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (-h$ghcjsbn_toInt_b(b))));;
  } else if(c === 1) {
    return h$ghcjsbn_negTwo31_i;
  } else {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJnzh_con_e, (b)));;
  }
}
function h$ghcjsbn_sizeof_b(b) {
  if(b.length < 1) return 0;
  var bl = b[0];
  return Math.ceil((bl * 28) / 32);
}
function h$ghcjsbn_index_b(b, w) {
  throw new Error("index_b");
  ;
  ;
  var wbit = 32*w, len = b[0], limb = (wbit / 28) | 0, lb = wbit - (limb * 28);
  var r = b[limb+1] >>> lb;
  ;
}
function h$ghcjsbn_toDouble_b(nonNeg, b) {
  throw new Error("toDouble_b");
}
function h$ghcjsbn_byteArrayToBigNat(ba, len) {
  throw new Error("h$ghcjsbn_byteArrayToBigNat not yet implemented");
}
function h$ghcjsbn_importBigNatFromAddr(a_d, a_o, len, msbf) {
  throw new Error("h$ghcjsbn_importBigNatFromAddr not yet implemented");
}
function h$ghcjsbn_importBigNatFromByteArray(ba, ofs, len, msbf) {
  throw new Error("h$ghcjsbn_importBigNatFromByteArray not yet implemented");
}
var h$integer_int64ToInteger = h$ghcjsbn_toInteger_s64;
function h$ghcjsbn_toInteger_s64(s_a, s_b) {
  ;
  ;
  if(s_a === 0) {
    if(s_b >= 0) {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (s_b)));;
    } else {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJpzh_con_e, (h$ghcjsbn_mkBigNat_w(s_b))));;
    }
  } else if(s_a === -1) {
    if(s_b < 0) {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (s_b)));;
    } else if(s_b === 0) {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJnzh_con_e, (h$ghcjsbn_mkBigNat_ww(1,0))));;
    } else {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJnzh_con_e, (h$ghcjsbn_mkBigNat_w(((~s_b)+1)|0))));;
    }
  } else if(s_a > 0) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJpzh_con_e, (h$ghcjsbn_mkBigNat_ww(s_a, s_b))));;
  } else {
    if(s_b === 0) {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJnzh_con_e, (h$ghcjsbn_mkBigNat_ww(((~s_a)+1)|0, 0))));;
    } else {
      return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziJnzh_con_e, (h$ghcjsbn_mkBigNat_ww((~s_a)|0, ((~s_b)+1)|0))));;
    }
  }
}
function h$decodeDoubleInt64(d) {
  ;
  if(isNaN(d)) {
    { h$ret1 = (-1572864); h$ret2 = (0); return (972); };
  }
  h$convertDouble[0] = d;
  var i0 = h$convertInt[0], i1 = h$convertInt[1];
  var exp = (i1&2146435072)>>>20;
  var ret1, ret2 = i0, ret3;
  if(exp === 0) {
    if((i1&2147483647) === 0 && ret2 === 0) {
      ret1 = 0;
      ret3 = 0;
    } else {
      h$convertDouble[0] = d*9007199254740992;
      i1 = h$convertInt[1];
      ret1 = (i1&1048575)|1048576;
      ret2 = h$convertInt[0];
      ret3 = ((i1&2146435072)>>>20)-1128;
    }
  } else {
    ret3 = exp-1075;
    ret1 = (i1&1048575)|1048576;
  }
  if(d < 0) {
    if(ret2 === 0) {
      ret1 = ((~ret1) + 1) | 0;
    } else {
      ret1 = ~ret1;
      ret2 = ((~ret2) + 1) | 0;
    }
  }
  { h$ret1 = (ret1); h$ret2 = (ret2); return (ret3); };
}
function h$primop_DoubleDecode_Int64Op(d) {
  ;
  if(isNaN(d)) {
    { h$ret1 = (-1572864); h$ret2 = (0); h$ret3 = (972); return (null); };
  }
  h$convertDouble[0] = d;
  var i0 = h$convertInt[0], i1 = h$convertInt[1];
  var exp = (i1&2146435072)>>>20;
  var ret1, ret2 = i0, ret3;
  if(exp === 0) {
    if((i1&2147483647) === 0 && ret2 === 0) {
      ret1 = 0;
      ret3 = 0;
    } else {
      h$convertDouble[0] = d*9007199254740992;
      i1 = h$convertInt[1];
      ret1 = (i1&1048575)|1048576;
      ret2 = h$convertInt[0];
      ret3 = ((i1&2146435072)>>>20)-1128;
    }
  } else {
    ret3 = exp-1075;
    ret1 = (i1&1048575)|1048576;
  }
  if(d < 0) {
    if(ret2 === 0) {
      ret1 = ((~ret1) + 1) | 0;
    } else {
      ret1 = ~ret1;
      ret2 = ((~ret2) + 1) | 0;
    }
  }
  { h$ret1 = (ret1); h$ret2 = (ret2); h$ret3 = (ret3); return (null); };
}
function h$ghcjsbn_encodeDouble_b(pos, b, e) {
  ;
  ;
  if(e >= 972) {
    return pos ? Infinity : -Infinity;
  }
  var ls = 1, bl = b[0], i, r = b[bl], mul = 1 << 28, rmul = 1/mul, s = 1;
  for(i = bl-1; i >= 1; i--) {
      r = r * mul + s * b[i];
  }
  if(e > 600) {
    r = r * Math.pow(2, e-600) * Math.pow(2,600);
  } else if(e < -600) {
    r = r * Math.pow(2, e+600) * Math.pow(2,-600);
  } else {
    r = r * Math.pow(2, e);
  }
  ;
  return pos ? r : -r;
}
function h$ghcjsbn_toDouble_b(nonNeg, b) {
  return h$ghcjsbn_encodeDouble_b(nonNeg, b, 0);
}
var h$ghcjsbn_encodeDouble_i = h$ghcjsbn_encodeDouble_s;
function h$ghcjsbn_encodeDouble_s(m, e) {
  ;
  ;
  var r = m * Math.pow(2, e);
  ;
  return r;
}
function h$dom$sendXHR(xhr, d, cont) {
    var clear;
    var error = function () {
        clear(); cont(2);
    };
    var abort = function () {
        clear(); cont(1);
    };
    var load = function () {
        clear(); cont(0);
    };
    clear = function () {
        xhr.removeEventListener('error', error);
        xhr.removeEventListener('abort', abort);
        xhr.removeEventListener('load', load);
    }
    xhr.addEventListener('error', error);
    xhr.addEventListener('abort', abort);
    xhr.addEventListener('load', load);
    if(d) {
 xhr.send(d);
    } else {
 xhr.send();
    }
}
function h$fromArray(a) {
    var r = h$ghczmprimZCGHCziTypesziZMZN;
    for(var i=a.length-1;i>=0;i--) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (a[i])))), (r)));
    return a;
}
function h$fromArrayNoWrap(a) {
    var r = h$ghczmprimZCGHCziTypesziZMZN;
    for(var i=a.length-1;i>=0;i--) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, (a[i]), (r)));
    return a;
}
function h$listToArray(xs) {
    var a = [], i = 0;
    while(((xs).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
 a[i++] = ((((xs).d1)).d1);
 xs = ((xs).d2);
    }
    return a;
}
function h$listToArrayWrap(xs) {
    return (h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (h$listToArray(xs))));
}
function h$animationFrameCancel(h) {
    if(h.handle) window.cancelAnimationFrame(h.handle);
    if(h.callback) {
        h$release(h.callback)
        h.callback = null;
    }
}
function h$animationFrameRequest(h) {
    h.handle = window.requestAnimationFrame(function(ts) {
        var cb = h.callback;
        if(cb) {
         h$release(cb);
         h.callback = null;
         cb(ts);
        }
    });
}
function h$exportValue(fp1a,fp1b,fp2a,fp2b,o) {
  var e = { fp1a: fp1a
          , fp1b: fp1b
          , fp2a: fp2a
          , fp2b: fp2b
          , released: false
          , root: o
          , _key: -1
          };
  h$retain(e);
  return e;
}
function h$derefExport(fp1a,fp1b,fp2a,fp2b,e) {
  if(!e || typeof e !== 'object') return null;
  if(e.released) return null;
  if(fp1a !== e.fp1a || fp1b !== e.fp1b ||
     fp2a !== e.fp2a || fp2b !== e.fp2b) return null;
  return e.root;
}
function h$releaseExport(e) {
  h$release(e);
  e.released = true;
  e.root = null;
}
var h$jsstringEmpty = (h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, ('')));
var h$jsstringHead, h$jsstringTail, h$jsstringCons,
    h$jsstringSingleton, h$jsstringSnoc, h$jsstringUncons,
    h$jsstringIndex, h$jsstringUncheckedIndex;
var h$fromCodePoint;
if(String.prototype.fromCodePoint) {
    h$fromCodePoint = String.fromCodePoint;
} else {
    h$fromCodePoint =
      (function() {
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          return function(_) {
              var MAX_SIZE = 0x4000;
              var codeUnits = [];
              var highSurrogate;
              var lowSurrogate;
              var index = -1;
              var length = arguments.length;
              if (!length) {
                  return '';
              }
              var result = '';
              while (++index < length) {
                  var codePoint = Number(arguments[index]);
                  if (
                      !isFinite(codePoint) ||
                      codePoint < 0 ||
                      codePoint > 0x10FFFF ||
                      floor(codePoint) != codePoint
                  ) {
                      throw RangeError('Invalid code point: ' + codePoint);
                  }
                  if (codePoint <= 0xFFFF) {
                      codeUnits.push(codePoint);
                  } else {
                      codePoint -= 0x10000;
                      highSurrogate = (codePoint >> 10) + 0xD800;
                      lowSurrogate = (codePoint % 0x400) + 0xDC00;
                      codeUnits.push(highSurrogate, lowSurrogate);
                  }
                  if (index + 1 == length || codeUnits.length > MAX_SIZE) {
                      result += stringFromCharCode.apply(null, codeUnits);
                      codeUnits.length = 0;
                  }
              }
              return result;
          }
      })();
}
if(String.prototype.codePointAt) {
    h$jsstringSingleton = function(ch) {
        ;
 return String.fromCodePoint(ch);
    }
    h$jsstringHead = function(str) {
        ;
 var cp = str.codePointAt(0);
 return (cp === undefined) ? -1 : (cp|0);
    }
    h$jsstringTail = function(str) {
        ;
 var l = str.length;
 if(l===0) return null;
 var ch = str.codePointAt(0);
 if(ch === undefined) return null;
 return str.substr(((ch)>=0x10000)?2:1);
    }
    h$jsstringCons = function(ch, str) {
        ;
 return String.fromCodePoint(ch)+str;
    }
    h$jsstringSnoc = function(str, ch) {
        ;
 return str+String.fromCodePoint(ch);
    }
    h$jsstringUncons = function(str) {
        ;
 var l = str.length;
 if(l===0) {
          { h$ret1 = (null); return (-1); };
        }
 var ch = str.codePointAt(0);
        if(ch === undefined) {
     { h$ret1 = (null); return (-1); };
        }
        { h$ret1 = (str.substr(((ch)>=0x10000)?2:1)); return (ch); };
    }
    h$jsstringIndex = function(i, str) {
        ;
 var ch = str.codePointAt(i);
 if(ch === undefined) return -1;
 return ch;
    }
    h$jsstringUncheckedIndex = function(i, str) {
        ;
 return str.codePointAt(i);
    }
} else {
    h$jsstringSingleton = function(ch) {
        ;
 return (((ch)>=0x10000)) ? String.fromCharCode(((((ch)-0x10000)>>>10)+0xDC00), (((ch)&0x3FF)+0xD800))
                               : String.fromCharCode(ch);
    }
    h$jsstringHead = function(str) {
        ;
 var l = str.length;
 if(l===0) return -1;
 var ch = str.charCodeAt(0);
 if(((ch|1023)===0xDBFF)) {
     return (l>1) ? ((((ch)-0xD800)<<10)+(str.charCodeAt(1))-9216) : -1;
 } else {
     return ch;
 }
    }
    h$jsstringTail = function(str) {
        ;
 var l = str.length;
 if(l===0) return null;
 var ch = str.charCodeAt(0);
 if(((ch|1023)===0xDBFF)) {
     return (l>1)?str.substr(2):null;
 } else return str.substr(1);
    }
    h$jsstringCons = function(ch, str) {
        ;
 return ((((ch)>=0x10000)) ? String.fromCharCode(((((ch)-0x10000)>>>10)+0xDC00), (((ch)&0x3FF)+0xD800))
                                : String.fromCharCode(ch))
                                + str;
    }
    h$jsstringSnoc = function(str, ch) {
        ;
 return str + ((((ch)>=0x10000)) ? String.fromCharCode(((((ch)-0x10000)>>>10)+0xDC00), (((ch)&0x3FF)+0xD800))
                                      : String.fromCharCode(ch));
    }
    h$jsstringUncons = function(str) {
        ;
 var l = str.length;
 if(l===0) {
          { h$ret1 = (null); return (-1); };
        }
 var ch = str.charCodeAt(0);
 if(((ch|1023)===0xDBFF)) {
   if(l > 1) {
        { h$ret1 = (str.substr(2)); return (((((ch)-0xD800)<<10)+(str.charCodeAt(1))-9216)); };
   } else {
       { h$ret1 = (null); return (-1); };
   }
 } else {
      { h$ret1 = (str.substr(1)); return (ch); };
 }
    }
    h$jsstringIndex = function(i, str) {
 var ch = str.charCodeAt(i);
 if(ch != ch) return -1;
 return (((ch|1023)===0xDBFF)) ? ((((ch)-0xD800)<<10)+(str.charCodeAt(i+1))-9216) : ch;
    }
    h$jsstringUncheckedIndex = function(i, str) {
        ;
 var ch = str.charCodeAt(i);
 return (((ch|1023)===0xDBFF)) ? ((((ch)-0xD800)<<10)+(str.charCodeAt(i+1))-9216) : ch;
    }
}
function h$jsstringUnsnoc(str) {
  ;
  var l = str.length;
  if(l===0) {
    { h$ret1 = (null); return (-1); };
  }
  var ch = str.charCodeAt(l-1);
  if(((ch|1023)===0xDFFF)) {
    if(l !== 1) {
      { h$ret1 = (str.substr(0,l-2)); return (((((str.charCodeAt(l-2))-0xD800)<<10)+(ch)-9216)); };
    } else {
      { h$ret1 = (null); return (-1); };
    }
  } else {
    { h$ret1 = (str.substr(0,l-1)); return (ch); };
  }
}
function h$jsstringPack(xs) {
    var r = '', i = 0, a = [], c;
    while(((xs).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
 c = ((xs).d1);
 a[i++] = ((typeof(c) === 'number')?(c):(c).d1);
 if(i >= 60000) {
     r += h$fromCodePoint.apply(null, a);
     a = [];
     i = 0;
 }
 xs = ((xs).d2);
    }
    if(i > 0) r += h$fromCodePoint.apply(null, a);
    ;
    return r;
}
function h$jsstringPackReverse(xs) {
    var a = [], i = 0, c;
    while(((xs).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
 c = ((xs).d1);
 a[i++] = ((typeof(c) === 'number')?(c):(c).d1);
 xs = ((xs).d2);
    }
    if(i===0) return '';
    var r = h$jsstringConvertArray(a.reverse());
    ;
    return r;
}
function h$jsstringPackArray(arr) {
    ;
    return h$jsstringConvertArray(arr);
}
function h$jsstringPackArrayReverse(arr) {
    ;
    return h$jsstringConvertArray(arr.reverse());
}
function h$jsstringConvertArray(arr) {
    if(arr.length < 60000) {
 return h$fromCodePoint.apply(null, arr);
    } else {
 var r = '';
 for(var i=0; i<arr.length; i+=60000) {
     r += h$fromCodePoint.apply(null, arr.slice(i, i+60000));
 }
 return r;
    }
}
function h$jsstringInit(str) {
    ;
    var l = str.length;
    if(l===0) return null;
    var ch = str.charCodeAt(l-1);
    var o = ((ch|1023)===0xDFFF)?2:1;
    var r = str.substr(0, l-o);
    return r;
}
function h$jsstringLast(str) {
    ;
    var l = str.length;
    if(l===0) return -1;
    var ch = str.charCodeAt(l-1);
    if(((ch|1023)===0xDFFF)) {
 return (l>1) ? ((((str.charCodeAt(l-2))-0xD800)<<10)+(ch)-9216) : -1;
    } else return ch;
}
function h$jsstringIndexR(i, str) {
    ;
    if(i < 0 || i > str.length) return -1;
    var ch = str.charCodeAt(i);
    return (((ch|1023)===0xDFFF)) ? ((((str.charCodeAt(i-1))-0xD800)<<10)+(ch)-9216) : ch;
}
function h$jsstringNextIndex(i, str) {
    ;
    return i + (((str.charCodeAt(i)|1023)===0xDBFF)?2:1);
}
function h$jsstringTake(n, str) {
    ;
    if(n <= 0) return '';
    var i = 0, l = str.length, ch;
    if(n >= l) return str;
    while(n--) {
 ch = str.charCodeAt(i++);
 if(((ch|1023)===0xDBFF)) i++;
 if(i >= l) return str;
    }
    return str.substr(0,i);
}
function h$jsstringDrop(n, str) {
    ;
    if(n <= 0) return str;
    var i = 0, l = str.length, ch;
    if(n >= l) return '';
    while(n--) {
 ch = str.charCodeAt(i++);
 if(((ch|1023)===0xDBFF)) i++;
 if(i >= l) return str;
    }
    return str.substr(i);
}
function h$jsstringSplitAt(n, str) {
  ;
  if(n <= 0) {
    { h$ret1 = (str); return (""); };
  } else if(n >= str.length) {
    { h$ret1 = (""); return (str); };
  }
  var i = 0, l = str.length, ch;
  while(n--) {
    ch = str.charCodeAt(i++);
    if(((ch|1023)===0xDBFF)) i++;
    if(i >= l) {
      { h$ret1 = (""); return (str); };
    }
  }
  { h$ret1 = (str.substr(i)); return (str.substr(0,i)); };
}
function h$jsstringTakeEnd(n, str) {
    ;
    if(n <= 0) return '';
    var l = str.length, i = l-1, ch;
    if(n >= l) return str;
    while(n-- && i > 0) {
 ch = str.charCodeAt(i--);
 if(((ch|1023)===0xDFFF)) i--;
    }
    return (i<0) ? str : str.substr(i+1);
}
function h$jsstringDropEnd(n, str) {
    ;
    if(n <= 0) return str;
    var l = str.length, i = l-1, ch;
    if(n >= l) return '';
    while(n-- && i > 0) {
 ch = str.charCodeAt(i--);
 if(((ch|1023)===0xDFFF)) i--;
    }
    return (i<0) ? '' : str.substr(0,i+1);
}
function h$jsstringIntercalate(x, ys) {
    ;
    var a = [], i = 0;
    while(((ys).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
 if(i) a[i++] = x;
 a[i++] = ((((ys).d1)).d1);
 ys = ((ys).d2);
    }
    return a.join('');
}
function h$jsstringIntersperse(ch, ys) {
    ;
    var i = 0, l = ys.length, j = 0, a = [], ych;
    if(((ch)>=0x10000)) {
 var ch1 = ((((ch)-0x10000)>>>10)+0xDC00), ch2 = (((ch)&0x3FF)+0xD800);
 while(j < l) {
     if(i) {
  a[i++] = ch1;
  a[i++] = ch2;
     }
     ych = ys.charCodeAt(j++);
     a[i++] = ych;
     if(((ych|1023)===0xDBFF)) a[i++] = ys.charCodeAt(j++);
 }
    } else {
 while(j < l) {
     if(i) a[i++] = ch;
     ych = ys.charCodeAt(j++);
     a[i++] = ych;
     if(((ych|1023)===0xDBFF)) a[i++] = ys.charCodeAt(j++);
 }
    }
    return h$jsstringConvertArray(a);
}
function h$jsstringConcat(xs) {
    ;
    var a = [], i = 0;
    while(((xs).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
 a[i++] = ((((xs).d1)).d1);
 xs = ((xs).d2);
    }
    return a.join('');
}
var h$jsstringStripPrefix, h$jsstringStripSuffix,
    h$jsstringIsPrefixOf, h$jsstringIsSuffixOf,
    h$jsstringIsInfixOf;
if(String.prototype.startsWith) {
    h$jsstringStripPrefix = function(p, x) {
 ;
 if(x.startsWith(p)) {
     return (h$c1(h$baseZCGHCziBaseziJust_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(p.length)))))));
 } else {
     return h$baseZCGHCziBaseziNothing;
 }
    }
    h$jsstringIsPrefixOf = function(p, x) {
 ;
 return x.startsWith(p);
    }
} else {
    h$jsstringStripPrefix = function(p, x) {
 ;
 if(x.indexOf(p) === 0) {
     return (h$c1(h$baseZCGHCziBaseziJust_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(p.length)))))));
 } else {
   return h$baseZCGHCziBaseziNothing;
 }
    }
    h$jsstringIsPrefixOf = function(p, x) {
 ;
 return x.indexOf(p) === 0;
    }
}
if(String.prototype.endsWith) {
    h$jsstringStripSuffix = function(s, x) {
 ;
 if(x.endsWith(s)) {
     return (h$c1(h$baseZCGHCziBaseziJust_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(0,x.length-s.length)))))));
 } else {
   return h$baseZCGHCziBaseziNothing;
 }
    }
    h$jsstringIsSuffixOf = function(s, x) {
 ;
 return x.endsWith(s);
    }
} else {
    h$jsstringStripSuffix = function(s, x) {
 ;
 var i = x.lastIndexOf(s);
 var l = x.length - s.length;
 if(i !== -1 && i === l) {
     return (h$c1(h$baseZCGHCziBaseziJust_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(0,l)))))));
 } else {
   return h$baseZCGHCziBaseziNothing;
 }
    }
      h$jsstringIsSuffixOf = function(s, x) {
 ;
        var i = x.lastIndexOf(s);
 return i !== -1 && i === x.length - s.length;
    }
}
if(String.prototype.includes) {
    h$jsstringIsInfixOf = function(i, x) {
        ;
 return x.includes(i);
    }
} else {
    h$jsstringIsInfixOf = function(i, x) {
        ;
 return x.indexOf(i) !== -1;
    }
}
function h$jsstringCommonPrefixes(x, y) {
    ;
    var lx = x.length, ly = y.length, i = 0, cx;
    var l = lx <= ly ? lx : ly;
    if(lx === 0 || ly === 0 || x.charCodeAt(0) !== y.charCodeAt(0)) {
      return h$baseZCGHCziBaseziNothing;
    }
    while(++i<l) {
 cx = x.charCodeAt(i);
 if(cx !== y.charCodeAt(i)) {
     if(((cx|1023)===0xDFFF)) i--;
     break;
 }
    }
  if(i===0) return h$baseZCGHCziBaseziNothing;
    return (h$c1(h$baseZCGHCziBaseziJust_con_e, ((h$c3(h$ghczmprimZCGHCziTupleziZLz2cUz2cUZR_con_e,((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, ((i===lx)?x:((i===ly)?y:x.substr(0,i)))))),((i===lx) ? h$jsstringEmpty : (h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(i))))),((i===ly) ? h$jsstringEmpty : (h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (y.substr(i))))))))));
}
function h$jsstringBreakOn(b, x) {
    ;
    var i = x.indexOf(b);
    if(i===-1) {
        { h$ret1 = (""); return (x); };
    }
    if(i===0) {
        { h$ret1 = (x); return (""); };
    }
    { h$ret1 = (x.substr(i)); return (x.substr(0,i)); };
}
function h$jsstringBreakOnEnd(b, x) {
    ;
    var i = x.lastIndexOf(b);
  if(i===-1) {
    { h$ret1 = (x); return (""); };
    }
  i += b.length;
    { h$ret1 = (x.substr(i)); return (x.substr(0,i)); };
}
function h$jsstringBreakOnAll1(n, b, x) {
    ;
    var i = x.indexOf(b, n);
    if(i===0) {
       { h$ret1 = (""); h$ret2 = (x); return (b.length); };
    }
    if(i===-1) {
       { h$ret1 = (null); h$ret2 = (null); return (-1); };
    }
    { h$ret1 = (x.substr(0,i)); h$ret2 = (x.substr(i)); return (i+b.length); };
}
function h$jsstringBreakOnAll(pat, src) {
    ;
    var a = [], i = 0, n = 0, r = h$ghczmprimZCGHCziTypesziZMZN, pl = pat.length;
    while(true) {
 var x = src.indexOf(pat, n);
 if(x === -1) break;
 a[i++] = (h$c2(h$ghczmprimZCGHCziTupleziZLz2cUZR_con_e,((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (src.substr(0,x))))),((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (src.substr(x)))))));
 n = x + pl;
    }
    while(--i >= 0) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, (a[i]), (r)));
    return r;
}
function h$jsstringSplitOn1(n, p, x) {
    ;
    var i = x.indexOf(p, n);
    if(i === -1) {
        { h$ret1 = (null); return (-1); };
    }
    var r1 = (i==n) ? "" : x.substr(n, i-n);
    { h$ret1 = (r1); return (i + p.length); };
}
function h$jsstringSplitOn(p, x) {
    ;
    var a = x.split(p);
    var r = h$ghczmprimZCGHCziTypesziZMZN, i = a.length;
    while(--i>=0) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (a[i])))), (r)));
    return r;
}
function h$jsstringWords1(n, x) {
    ;
    var m = n, s = n, l = x.length;
    if(m >= l) return -1;
    do {
 if(m >= l) return -1;
    } while(h$isSpace(x.charCodeAt(m++)));
    s = m - 1;
    while(m < l) {
 if(h$isSpace(x.charCodeAt(m++))) {
            var r1 = (m-s<=1) ? "" : x.substr(s,m-s-1);
            { h$ret1 = (r1); return (m); };
 }
    }
    if(s < l) {
        var r1 = s === 0 ? x : x.substr(s);
        { h$ret1 = (r1); return (m); };
    }
    { h$ret1 = (null); return (-1); };
}
function h$jsstringWords(x) {
    ;
    var a = null, i = 0, n, s = -1, m = 0, w, l = x.length, r = h$ghczmprimZCGHCziTypesziZMZN;
    outer:
    while(m < l) {
 do {
     if(m >= l) { s = m; break outer; }
 } while(h$isSpace(x.charCodeAt(m++)));
 s = m - 1;
 while(m < l) {
     if(h$isSpace(x.charCodeAt(m++))) {
  w = (m-s<=1) ? h$jsstringEmpty
                             : (h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(s,m-s-1))));
  if(i) a[i++] = w; else { a = [w]; i = 1; }
  s = m;
  break;
     }
 }
    }
    if(s !== -1 && s < l) {
 w = (h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (s === 0 ? x : x.substr(s))));
 if(i) a[i++] = w; else { a = [w]; i = 1; }
    }
    while(--i>=0) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, (a[i]), (r)));
    return r;
}
function h$jsstringLines1(n, x) {
    ;
    var m = n, l = x.length;
    if(n >= l) return -1;
    while(m < l) {
 if(x.charCodeAt(m++) === 10) {
     if(n > 0 && n === l-1) return -1;
            var r1 = (m-n<=1) ? "" : x.substr(n,m-n-1);
            { h$ret1 = (r1); return (m); };
 }
    }
    { h$ret1 = (x.substr(n)); return (m); };
}
function h$jsstringLines(x) {
    ;
    var a = null, m = 0, i = 0, l = x.length, s = 0, r = h$ghczmprimZCGHCziTypesziZMZN, w;
    if(l === 0) return h$ghczmprimZCGHCziTypesziZMZN;
    outer:
    while(true) {
 s = m;
 do {
     if(m >= l) break outer;
 } while(x.charCodeAt(m++) !== 10);
 w = (m-s<=1) ? h$jsstringEmpty : (h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(s,m-s-1))));
 if(i) a[i++] = w; else { a = [w]; i = 1; }
    }
    if(s < l) {
 w = (h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(s))));
 if(i) a[i++] = w; else { a = [w]; i = 1; }
    }
    while(--i>=0) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, (a[i]), (r)));
    return r;
}
function h$jsstringGroup(x) {
    ;
    var xl = x.length;
    if(xl === 0) return h$ghczmprimZCGHCziTypesziZMZN;
    var i = xl-1, si, ch, s=xl, r=h$ghczmprimZCGHCziTypesziZMZN;
    var tch = x.charCodeAt(i--);
    if(((tch|1023)===0xDFFF)) tch = ((((x.charCodeAt(i--))-0xD800)<<10)+(tch)-9216);
    while(i >= 0) {
 si = i;
 ch = x.charCodeAt(i--);
 if(((ch|1023)===0xDFFF)) {
     ch = ((((x.charCodeAt(i--))-0xD800)<<10)+(ch)-9216);
 }
 if(ch != tch) {
     tch = ch;
     r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(si+1,s-si))))), (r)));
     s = si;
 }
    }
    return (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(0,s+1))))), (r)));
}
function h$jsstringChunksOf1(n, s, x) {
    ;
    var m = s, c = 0, l = x.length, ch;
    if(n <= 0 || l === 0 || s >= l) return -1
    while(++m < l && ++c < n) {
 ch = x.charCodeAt(m);
 if(((ch|1023)===0xDBFF)) ++m;
    }
    var r1 = (m >= l && s === c) ? x : x.substr(s,m-s);
    { h$ret1 = (r1); return (m); };
}
function h$jsstringChunksOf(n, x) {
    ;
    var l = x.length;
    if(l===0 || n <= 0) return h$ghczmprimZCGHCziTypesziZMZN;
    if(l <= n) return (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x)))), (h$ghczmprimZCGHCziTypesziZMZN)));
    var a = [], i = 0, s = 0, ch, m = 0, c, r = h$ghczmprimZCGHCziTypesziZMZN;
    while(m < l) {
 s = m;
 c = 0;
 while(m < l && ++c <= n) {
     ch = x.charCodeAt(m++);
     if(((ch|1023)===0xDBFF)) ++m;
 }
 if(c) a[i++] = x.substr(s, m-s);
    }
    while(--i>=0) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (a[i])))), (r)));
    return r;
}
function h$jsstringCount(pat, src) {
    ;
    var i = 0, n = 0, pl = pat.length, sl = src.length;
    while(i<sl) {
 i = src.indexOf(pat, i);
 if(i===-1) break;
 n++;
 i += pl;
    }
    return n;
}
function h$jsstringReplicate(n, str) {
    ;
    if(n === 0 || str == '') return '';
    if(n === 1) return str;
    var r = '';
    do {
 if(n&1) r+=str;
        str+=str;
        n >>= 1;
    } while(n > 1);
    return r+str;
}
var h$jsstringReverse;
if(Array.from) {
    h$jsstringReverse = function(str) {
 ;
 return Array.from(str).reverse().join('');
    }
} else {
    h$jsstringReverse = function(str) {
 ;
 var l = str.length, a = [], o = 0, i = 0, c, c1, s = '';
 while(i < l) {
     c = str.charCodeAt(i);
     if(((c|1023)===0xDBFF)) {
  a[i] = str.charCodeAt(i+1);
  a[i+1] = c;
  i += 2;
     } else a[i++] = c;
     if(i-o > 60000) {
  s = String.fromCharCode.apply(null, a.reverse()) + s;
  o = -i;
  a = [];
     }
 }
 return (i===0) ? s : String.fromCharCode.apply(null,a.reverse()) + s;
    }
}
function h$jsstringUnpack(str) {
    ;
    var r = h$ghczmprimZCGHCziTypesziZMZN, i = str.length-1, c;
    while(i >= 0) {
 c = str.charCodeAt(i--);
 if(((c|1023)===0xDFFF)) c = ((((str.charCodeAt(i--))-0xD800)<<10)+(c)-9216)
 r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, (c), (r)));
    }
    return r;
}
function h$jsstringDecInteger(val) {
  ;
  if(((val).f === h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e)) {
    return '' + ((val).d1);
  } else if(((val).f === h$integerzmgmpZCGHCziIntegerziTypeziJpzh_con_e)) {
    return h$ghcjsbn_showBase(((val).d1), 10);
  } else {
    return '-' + h$ghcjsbn_showBase(((val).d1), 10);
  }
}
function h$jsstringDecI64(hi,lo) {
    ;
    var lo0 = (lo < 0) ? lo+4294967296:lo;
    if(hi < 0) {
 if(hi === -1) return ''+(lo0-4294967296);
 lo0 = 4294967296 - lo0;
 var hi0 = -1 - hi;
 var x0 = hi0 * 967296;
 var x1 = (lo0 + x0) % 1000000;
 var x2 = hi0*4294+Math.floor((x0+lo0-x1)/1000000);
 return '-' + x2 + h$jsstringDecIPadded6(x1);
    } else {
 if(hi === 0) return ''+lo0;
 var x0 = hi * 967296;
 var x1 = (lo0 + x0) % 1000000;
 var x2 = hi*4294+Math.floor((x0+lo0-x1)/1000000);
 return '' + x2 + h$jsstringDecIPadded6(x1);
    }
}
function h$jsstringDecW64(hi,lo) {
    ;
    var lo0 = (lo < 0) ? lo+4294967296 : lo;
    if(hi === 0) return ''+lo0;
    var hi0 = (hi < 0) ? hi+4294967296 : hi;
    var x0 = hi0 * 967296;
    var x1 = (lo0 + x0) % 1000000;
    var x2 = hi0*4294+Math.floor((x0+lo0-x1)/1000000);
    return '' + x2 + h$jsstringDecIPadded6(x1);
}
function h$jsstringHexInteger(val) {
  ;
  if(((val).f === h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e)) {
    return '' + ((val).d1);
  } else {
    return h$ghcjsbn_showBase(((val).d1), 16);
  }
}
function h$jsstringHexI64(hi,lo) {
    var lo0 = lo<0 ? lo+4294967296 : lo;
    if(hi === 0) return lo0.toString(16);
    return ((hi<0)?hi+4294967296:hi).toString(16) + h$jsstringHexIPadded8(lo0);
}
function h$jsstringHexW64(hi,lo) {
    var lo0 = lo<0 ? lo+4294967296 : lo;
    if(hi === 0) return lo0.toString(16);
    return ((hi<0)?hi+4294967296:hi).toString(16) + h$jsstringHexIPadded8(lo0);
}
function h$jsstringDecIPadded9(n) {
    ;
    if(n === 0) return '000000000';
    var pad = (n>=100000000)?'':
              (n>=10000000)?'0':
              (n>=1000000)?'00':
              (n>=100000)?'000':
              (n>=10000)?'0000':
              (n>=1000)?'00000':
              (n>=100)?'000000':
              (n>=10)?'0000000':
                     '00000000';
    return pad+n;
}
function h$jsstringDecIPadded6(n) {
    ;
    if(n === 0) return '000000';
    var pad = (n>=100000)?'':
              (n>=10000)?'0':
              (n>=1000)?'00':
              (n>=100)?'000':
              (n>=10)?'0000':
                     '00000';
    return pad+n;
}
function h$jsstringHexIPadded8(n) {
    ;
   if(n === 0) return '00000000';
   var pad = (n>=0x10000000)?'':
             (n>=0x1000000)?'0':
             (n>=0x100000)?'00':
             (n>=0x10000)?'000':
             (n>=0x1000)?'0000':
             (n>=0x100)?'00000':
             (n>=0x10)?'000000':
                      '0000000';
    return pad+n.toString(16);
}
function h$jsstringZeroes(n) {
    var r;
    switch(n&7) {
 case 0: r = ''; break;
 case 1: r = '0'; break;
 case 2: r = '00'; break;
 case 3: r = '000'; break;
 case 4: r = '0000'; break;
 case 5: r = '00000'; break;
 case 6: r = '000000'; break;
 case 7: r = '0000000';
    }
    for(var i=n>>3;i>0;i--) r = r + '00000000';
    return r;
}
function h$jsstringDoubleToFixed(decs, d) {
    if(decs >= 0) {
 if(Math.abs(d) < 1e21) {
     var r = d.toFixed(Math.min(20,decs));
     if(decs > 20) r = r + h$jsstringZeroes(decs-20);
     return r;
 } else {
     var r = d.toExponential();
     var ei = r.indexOf('e');
     var di = r.indexOf('.');
     var e = parseInt(r.substr(ei+1));
     return r.substring(0,di) + r.substring(di,ei) + h$jsstringZeroes(di-ei+e) +
                   ((decs > 0) ? ('.' + h$jsstringZeroes(decs)) : '');
 }
    }
    var r = Math.abs(d).toExponential();
    var ei = r.indexOf('e');
    var e = parseInt(r.substr(ei+1));
    var m = d < 0 ? '-' : '';
    r = r.substr(0,1) + r.substring(2,ei);
    if(e >= 0) {
 return (e > r.length) ? m + r + h$jsstringZeroes(r.length-e-1) + '.0'
                       : m + r.substr(0,e+1) + '.' + r.substr(e+1);
    } else {
 return m + '0.' + h$jsstringZeroes(-e-1) + r;
    }
}
function h$jsstringDoubleToExponent(decs, d) {
    var r;
    if(decs ===-1) {
 r = d.toExponential().replace('+','');
    } else {
 r = d.toExponential(Math.max(1, Math.min(20,decs))).replace('+','');
    }
    if(r.indexOf('.') === -1) {
 r = r.replace('e', '.0e');
    }
    if(decs > 20) r = r.replace('e', h$jsstringZeroes(decs-20)+'e');
    return r;
}
function h$jsstringDoubleGeneric(decs, d) {
    var r;
    if(decs === -1) {
 r = d.toString(10).replace('+','');
    } else {
 r = d.toPrecision(Math.max(decs+1,1)).replace('+','');
    }
    if(decs !== 0 && r.indexOf('.') === -1) {
 if(r.indexOf('e') !== -1) {
     r = r.replace('e', '.0e');
 } else {
     r = r + '.0';
 }
    }
    return r;
}
function h$jsstringAppend(x, y) {
    ;
    return x+y;
}
function h$jsstringCompare(x, y) {
    ;
    return (x<y)?-1:((x>y)?1:0);
}
function h$jsstringUnlines(xs) {
    var r = '';
    while(((xs).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
 r = r + ((((xs).d1)).d1) + '\n';
 xs = ((xs).d2);
    }
    return r;
}
function h$jsstringUnwords(xs) {
    if(((xs).f === h$ghczmprimZCGHCziTypesziZMZN_con_e)) return '';
    var r = ((((xs).d1)).d1);
    xs = ((xs).d2);
    while(((xs).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
 r = r + ' ' + ((((xs).d1)).d1);
 xs = ((xs).d2);
    }
    return r;
}
function h$jsstringReplace(pat, rep, src) {
    ;
    var r = src.replace(pat, rep, 'g');
    if(r.indexOf(pat) !== -1) {
 r = src.split(pat).join(rep);
    }
    return r;
}
function h$jsstringReplicateChar(n, ch) {
    ;
    return h$jsstringReplicate(n, h$jsstringSingleton(ch));
}
function h$jsstringIsInteger(str) {
    return /^-?\d+$/.test(str);
}
function h$jsstringIsNatural(str) {
    return /^\d+$/.test(str);
}
function h$jsstringReadInt(str) {
    if(!/^-?\d+/.test(str)) return null;
    var x = parseInt(str, 10);
    var x0 = x|0;
    return (x===x0) ? x0 : null;
}
function h$jsstringLenientReadInt(str) {
    var x = parseInt(str, 10);
    var x0 = x|0;
    return (x===x0) ? x0 : null;
}
function h$jsstringReadWord(str) {
  if(!/^\d+/.test(str)) return null;
  var x = parseInt(str, 10);
  var x0 = x|0;
  if(x0<0) return (x===x0+2147483648) ? x0 : null;
  else return (x===x0) ? x0 : null;
}
function h$jsstringReadDouble(str) {
    return parseFloat(str, 10);
}
function h$jsstringLenientReadDouble(str) {
    return parseFloat(str, 10);
}
function h$jsstringReadInteger(str) {
  ;
  if(!/^(-)?\d+$/.test(str)) {
    return null;
  } else if(str.length <= 9) {
    return (h$c1(h$integerzmgmpZCGHCziIntegerziTypeziSzh_con_e, (parseInt(str, 10))));;
  } else {
    return h$ghcjsbn_readInteger(str);
  }
}
function h$jsstringReadInt64(str) {
  if(!/^(-)?\d+$/.test(str)) {
      { h$ret1 = (0); h$ret2 = (0); return (0); };
  }
  if(str.charCodeAt(0) === 45) {
    return h$jsstringReadValue64(str, 1, true);
  } else {
    return h$jsstringReadValue64(str, 0, false);
  }
}
function h$jsstringReadWord64(str) {
  if(!/^\d+$/.test(str)) {
    { h$ret1 = (0); h$ret2 = (0); return (0); };
  }
  return h$jsstringReadValue64(str, 0, false);
}
var h$jsstringLongs = null;
function h$jsstringReadValue64(str, start, negate) {
  var l = str.length, i = start;
  while(i < l) {
    if(str.charCodeAt(i) !== 48) break;
    i++;
  }
  if(i >= l) { h$ret1 = (0); h$ret2 = (0); return (1); };
  if(h$jsstringLongs === null) {
    h$jsstringLongs = [];
    for(var t=10; t<=1000000000; t*=10) {
      h$jsstringLongs.push(goog.math.Long.fromInt(t));
    }
  }
  var li = l-i;
  if(li < 10 && !negate) {
    { h$ret1 = (0); h$ret2 = (parseInt(str.substr(i), 10)); return (1); };
  }
  var r = goog.math.Long.fromInt(parseInt(str.substr(li,9),10));
  li += 9;
  while(li < l) {
    r = r.multiply(h$jsstringLongs[Math.min(l-li-1,8)])
         .add(goog.math.Long.fromInt(parseInt(str.substr(li,9), 10)));
    li += 9;
  }
  if(negate) {
    r = r.negate();
  }
  { h$ret1 = (r.getHighBits()); h$ret2 = (r.getLowBits()); return (1); };
}
function h$jsstringExecRE(i, str, re) {
    re.lastIndex = i;
    var m = re.exec(str);
    if(m === null) return -1;
    var a = [], x, j = 1, r = h$ghczmprimZCGHCziTypesziZMZN;
    while(true) {
 x = m[j];
 if(typeof x === 'undefined') break;
 a[j-1] = x;
 j++;
    }
    j-=1;
    while(--j>=0) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (a[j])))), (r)));
    { h$ret1 = (m[0]); h$ret2 = (r); return (m.index); };
}
function h$jsstringReplaceRE(pat, replacement, str) {
    return str.replace(pat, replacement);
}
function h$jsstringSplitRE(limit, re, str) {
    re.lastIndex = i;
    var s = (limit < 0) ? str.split(re) : str.split(re, limit);
    var i = s.length, r = h$ghczmprimZCGHCziTypesziZMZN;
    while(--i>=0) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (a[i])))), (r)));
    return r;
}
function h$jsstringRawChunksOf(k, x) {
    var l = x.length;
    if(l === 0) return h$ghczmprimZCGHCziTypesziZMZN;
    if(l <= k) return (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x)))), (h$ghczmprimZCGHCziTypesziZMZN)));
    var r=h$ghczmprimZCGHCziTypesziZMZN;
    for(var i=ls-k;i>=0;i-=k) r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(i,i+k))))), (r)));
    return r;
}
function h$jsstringRawSplitAt(k, x) {
    if(k === 0) return (h$c2(h$ghczmprimZCGHCziTupleziZLz2cUZR_con_e,(h$jsstringEmpty),((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x))))));
    if(k >= x.length) return (h$c2(h$ghczmprimZCGHCziTupleziZLz2cUZR_con_e,((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x)))),(h$jsstringEmpty)));
    return (h$c2(h$ghczmprimZCGHCziTupleziZLz2cUZR_con_e,((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(0,k))))),((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (x.substr(k)))))));
}
function h$foreignListProps(o) {
    var r = HS_NIL;
    if(typeof o === 'undefined' || o === null) return null;
    throw "h$foreignListProps";
}
function h$textToString(arr, off, len) {
    var a = [];
    var end = off+len;
    var k = 0;
    var u1 = arr.u1;
    var s = '';
    for(var i=off;i<end;i++) {
 var cc = u1[i];
 a[k++] = cc;
 if(k === 60000) {
     s += String.fromCharCode.apply(this, a);
     k = 0;
     a = [];
 }
    }
    return s + String.fromCharCode.apply(this, a);
}
function h$textFromString(s) {
    var l = s.length;
    var b = h$newByteArray(l * 2);
    var u1 = b.u1;
    for(var i=l-1;i>=0;i--) u1[i] = s.charCodeAt(i);
    { h$ret1 = (l); return (b); };
}
function h$lazyTextToString(txt) {
    var s = '';
    while(((txt).f.a === 2)) {
        var head = ((txt));
        s += h$textToString(((head).d1), ((head).d2.d1), ((head).d2.d2));
        txt = ((txt).d2.d3);
    }
    return s;
}
function h$safeTextFromString(x) {
    if(typeof x !== 'string') {
 { h$ret1 = (0); return (null); };
    }
    return h$textFromString(x);
}
function h$allProps(o) {
    var a = [], i = 0;
    for(var p in o) a[i++] = p;
    return a;
}
function h$listProps(o) {
    var r = h$ghczmprimZCGHCziTypesziZMZN;
    for(var p in o) { r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (p)))), (r))); }
    return r;
}
function h$listAssocs(o) {
    var r = h$ghczmprimZCGHCziTypesziZMZN;
    for(var p in o) { r = (h$c2(h$ghczmprimZCGHCziTypesziZC_con_e, ((h$c2(h$ghczmprimZCGHCziTupleziZLz2cUZR_con_e,((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (p)))),((h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, (o[p]))))))), (r))); }
    return r;
}
function h$isNumber(o) {
    return typeof(o) === 'number';
}
function h$isObject(o) {
    return typeof(o) === 'object';
}
function h$isString(o) {
    return typeof(o) === 'string';
}
function h$isSymbol(o) {
    return typeof(o) === 'symbol';
}
function h$isBoolean(o) {
    return typeof(o) === 'boolean';
}
function h$isFunction(o) {
    return typeof(o) === 'function';
}
function h$jsTypeOf(o) {
    var t = typeof(o);
    if(t === 'undefined') return 0;
    if(t === 'object') return 1;
    if(t === 'boolean') return 2;
    if(t === 'number') return 3;
    if(t === 'string') return 4;
    if(t === 'symbol') return 5;
    if(t === 'function') return 6;
    return 7;
}
function h$jsonTypeOf(o) {
    if (!(o instanceof Object)) {
        if (o == null) {
            return 0;
        } else if (typeof o == 'number') {
            if (h$isInteger(o)) {
                return 1;
            } else {
                return 2;
            }
        } else if (typeof o == 'boolean') {
            return 3;
        } else {
            return 4;
        }
    } else {
        if (Object.prototype.toString.call(o) == '[object Array]') {
            return 5;
        } else if (!o) {
            return 0;
        } else {
            return 6;
        }
    }
}
function h$sendXHR(xhr, d, cont) {
    xhr.addEventListener('error', function () {
 cont(2);
    });
    xhr.addEventListener('abort', function() {
 cont(1);
    });
    xhr.addEventListener('load', function() {
 cont(0);
    });
    if(d) {
 xhr.send(d);
    } else {
 xhr.send();
    }
}
function h$createWebSocket(url, protocols) {
  return new WebSocket(url, protocols);
}
function h$openWebSocket(ws, mcb, ccb, c) {
  if(ws.readyState !== 0) {
    throw new Error("h$openWebSocket: unexpected readyState, socket must be CONNECTING");
  }
  ws.lastError = null;
  ws.onopen = function() {
    if(mcb) {
      ws.onmessage = mcb;
    }
    if(ccb || mcb) {
      ws.onclose = function(ce) {
        if(ws.onmessage) {
          h$release(ws.onmessage);
          ws.onmessage = null;
        }
        if(ccb) {
          h$release(ccb);
          ccb(ce);
        }
      };
    };
    ws.onerror = function(err) {
      ws.lastError = err;
      if(ws.onmessage) {
        h$release(ws.onmessage);
        ws.onmessage = null;
      }
      ws.close();
    };
    c(null);
  };
  ws.onerror = function(err) {
    if(ccb) h$release(ccb);
    if(mcb) h$release(mcb);
    ws.onmessage = null;
    ws.close();
    c(err);
  };
}
function h$closeWebSocket(status, reason, ws) {
  ws.onerror = null;
  if(ws.onmessage) {
    h$release(ws.onmessage);
    ws.onmessage = null;
  }
  ws.close(status, reason);
}
goog.provide('goog.crypt.Hash');
goog.crypt.Hash = function() {
  this.blockSize = -1;
};
goog.crypt.Hash.prototype.reset = goog.abstractMethod;
goog.crypt.Hash.prototype.update = goog.abstractMethod;
goog.crypt.Hash.prototype.digest = goog.abstractMethod;
goog.provide('goog.crypt.Md5');
goog.require('goog.crypt.Hash');
goog.crypt.Md5 = function() {
  goog.crypt.Md5.base(this, 'constructor');
  this.blockSize = 512 / 8;
  this.chain_ = new Array(4);
  this.block_ = new Array(this.blockSize);
  this.blockLength_ = 0;
  this.totalLength_ = 0;
  this.reset();
};
goog.inherits(goog.crypt.Md5, goog.crypt.Hash);
goog.crypt.Md5.prototype.reset = function() {
  this.chain_[0] = 0x67452301;
  this.chain_[1] = 0xefcdab89;
  this.chain_[2] = 0x98badcfe;
  this.chain_[3] = 0x10325476;
  this.blockLength_ = 0;
  this.totalLength_ = 0;
};
goog.crypt.Md5.prototype.compress_ = function(buf, opt_offset) {
  if (!opt_offset) {
    opt_offset = 0;
  }
  var X = new Array(16);
  if (goog.isString(buf)) {
    for (var i = 0; i < 16; ++i) {
      X[i] = (buf.charCodeAt(opt_offset++)) |
             (buf.charCodeAt(opt_offset++) << 8) |
             (buf.charCodeAt(opt_offset++) << 16) |
             (buf.charCodeAt(opt_offset++) << 24);
    }
  } else {
    for (var i = 0; i < 16; ++i) {
      X[i] = (buf[opt_offset++]) |
             (buf[opt_offset++] << 8) |
             (buf[opt_offset++] << 16) |
             (buf[opt_offset++] << 24);
    }
  }
  var A = this.chain_[0];
  var B = this.chain_[1];
  var C = this.chain_[2];
  var D = this.chain_[3];
  var sum = 0;
  sum = (A + (D ^ (B & (C ^ D))) + X[0] + 0xd76aa478) & 0xffffffff;
  A = B + (((sum << 7) & 0xffffffff) | (sum >>> 25));
  sum = (D + (C ^ (A & (B ^ C))) + X[1] + 0xe8c7b756) & 0xffffffff;
  D = A + (((sum << 12) & 0xffffffff) | (sum >>> 20));
  sum = (C + (B ^ (D & (A ^ B))) + X[2] + 0x242070db) & 0xffffffff;
  C = D + (((sum << 17) & 0xffffffff) | (sum >>> 15));
  sum = (B + (A ^ (C & (D ^ A))) + X[3] + 0xc1bdceee) & 0xffffffff;
  B = C + (((sum << 22) & 0xffffffff) | (sum >>> 10));
  sum = (A + (D ^ (B & (C ^ D))) + X[4] + 0xf57c0faf) & 0xffffffff;
  A = B + (((sum << 7) & 0xffffffff) | (sum >>> 25));
  sum = (D + (C ^ (A & (B ^ C))) + X[5] + 0x4787c62a) & 0xffffffff;
  D = A + (((sum << 12) & 0xffffffff) | (sum >>> 20));
  sum = (C + (B ^ (D & (A ^ B))) + X[6] + 0xa8304613) & 0xffffffff;
  C = D + (((sum << 17) & 0xffffffff) | (sum >>> 15));
  sum = (B + (A ^ (C & (D ^ A))) + X[7] + 0xfd469501) & 0xffffffff;
  B = C + (((sum << 22) & 0xffffffff) | (sum >>> 10));
  sum = (A + (D ^ (B & (C ^ D))) + X[8] + 0x698098d8) & 0xffffffff;
  A = B + (((sum << 7) & 0xffffffff) | (sum >>> 25));
  sum = (D + (C ^ (A & (B ^ C))) + X[9] + 0x8b44f7af) & 0xffffffff;
  D = A + (((sum << 12) & 0xffffffff) | (sum >>> 20));
  sum = (C + (B ^ (D & (A ^ B))) + X[10] + 0xffff5bb1) & 0xffffffff;
  C = D + (((sum << 17) & 0xffffffff) | (sum >>> 15));
  sum = (B + (A ^ (C & (D ^ A))) + X[11] + 0x895cd7be) & 0xffffffff;
  B = C + (((sum << 22) & 0xffffffff) | (sum >>> 10));
  sum = (A + (D ^ (B & (C ^ D))) + X[12] + 0x6b901122) & 0xffffffff;
  A = B + (((sum << 7) & 0xffffffff) | (sum >>> 25));
  sum = (D + (C ^ (A & (B ^ C))) + X[13] + 0xfd987193) & 0xffffffff;
  D = A + (((sum << 12) & 0xffffffff) | (sum >>> 20));
  sum = (C + (B ^ (D & (A ^ B))) + X[14] + 0xa679438e) & 0xffffffff;
  C = D + (((sum << 17) & 0xffffffff) | (sum >>> 15));
  sum = (B + (A ^ (C & (D ^ A))) + X[15] + 0x49b40821) & 0xffffffff;
  B = C + (((sum << 22) & 0xffffffff) | (sum >>> 10));
  sum = (A + (C ^ (D & (B ^ C))) + X[1] + 0xf61e2562) & 0xffffffff;
  A = B + (((sum << 5) & 0xffffffff) | (sum >>> 27));
  sum = (D + (B ^ (C & (A ^ B))) + X[6] + 0xc040b340) & 0xffffffff;
  D = A + (((sum << 9) & 0xffffffff) | (sum >>> 23));
  sum = (C + (A ^ (B & (D ^ A))) + X[11] + 0x265e5a51) & 0xffffffff;
  C = D + (((sum << 14) & 0xffffffff) | (sum >>> 18));
  sum = (B + (D ^ (A & (C ^ D))) + X[0] + 0xe9b6c7aa) & 0xffffffff;
  B = C + (((sum << 20) & 0xffffffff) | (sum >>> 12));
  sum = (A + (C ^ (D & (B ^ C))) + X[5] + 0xd62f105d) & 0xffffffff;
  A = B + (((sum << 5) & 0xffffffff) | (sum >>> 27));
  sum = (D + (B ^ (C & (A ^ B))) + X[10] + 0x02441453) & 0xffffffff;
  D = A + (((sum << 9) & 0xffffffff) | (sum >>> 23));
  sum = (C + (A ^ (B & (D ^ A))) + X[15] + 0xd8a1e681) & 0xffffffff;
  C = D + (((sum << 14) & 0xffffffff) | (sum >>> 18));
  sum = (B + (D ^ (A & (C ^ D))) + X[4] + 0xe7d3fbc8) & 0xffffffff;
  B = C + (((sum << 20) & 0xffffffff) | (sum >>> 12));
  sum = (A + (C ^ (D & (B ^ C))) + X[9] + 0x21e1cde6) & 0xffffffff;
  A = B + (((sum << 5) & 0xffffffff) | (sum >>> 27));
  sum = (D + (B ^ (C & (A ^ B))) + X[14] + 0xc33707d6) & 0xffffffff;
  D = A + (((sum << 9) & 0xffffffff) | (sum >>> 23));
  sum = (C + (A ^ (B & (D ^ A))) + X[3] + 0xf4d50d87) & 0xffffffff;
  C = D + (((sum << 14) & 0xffffffff) | (sum >>> 18));
  sum = (B + (D ^ (A & (C ^ D))) + X[8] + 0x455a14ed) & 0xffffffff;
  B = C + (((sum << 20) & 0xffffffff) | (sum >>> 12));
  sum = (A + (C ^ (D & (B ^ C))) + X[13] + 0xa9e3e905) & 0xffffffff;
  A = B + (((sum << 5) & 0xffffffff) | (sum >>> 27));
  sum = (D + (B ^ (C & (A ^ B))) + X[2] + 0xfcefa3f8) & 0xffffffff;
  D = A + (((sum << 9) & 0xffffffff) | (sum >>> 23));
  sum = (C + (A ^ (B & (D ^ A))) + X[7] + 0x676f02d9) & 0xffffffff;
  C = D + (((sum << 14) & 0xffffffff) | (sum >>> 18));
  sum = (B + (D ^ (A & (C ^ D))) + X[12] + 0x8d2a4c8a) & 0xffffffff;
  B = C + (((sum << 20) & 0xffffffff) | (sum >>> 12));
  sum = (A + (B ^ C ^ D) + X[5] + 0xfffa3942) & 0xffffffff;
  A = B + (((sum << 4) & 0xffffffff) | (sum >>> 28));
  sum = (D + (A ^ B ^ C) + X[8] + 0x8771f681) & 0xffffffff;
  D = A + (((sum << 11) & 0xffffffff) | (sum >>> 21));
  sum = (C + (D ^ A ^ B) + X[11] + 0x6d9d6122) & 0xffffffff;
  C = D + (((sum << 16) & 0xffffffff) | (sum >>> 16));
  sum = (B + (C ^ D ^ A) + X[14] + 0xfde5380c) & 0xffffffff;
  B = C + (((sum << 23) & 0xffffffff) | (sum >>> 9));
  sum = (A + (B ^ C ^ D) + X[1] + 0xa4beea44) & 0xffffffff;
  A = B + (((sum << 4) & 0xffffffff) | (sum >>> 28));
  sum = (D + (A ^ B ^ C) + X[4] + 0x4bdecfa9) & 0xffffffff;
  D = A + (((sum << 11) & 0xffffffff) | (sum >>> 21));
  sum = (C + (D ^ A ^ B) + X[7] + 0xf6bb4b60) & 0xffffffff;
  C = D + (((sum << 16) & 0xffffffff) | (sum >>> 16));
  sum = (B + (C ^ D ^ A) + X[10] + 0xbebfbc70) & 0xffffffff;
  B = C + (((sum << 23) & 0xffffffff) | (sum >>> 9));
  sum = (A + (B ^ C ^ D) + X[13] + 0x289b7ec6) & 0xffffffff;
  A = B + (((sum << 4) & 0xffffffff) | (sum >>> 28));
  sum = (D + (A ^ B ^ C) + X[0] + 0xeaa127fa) & 0xffffffff;
  D = A + (((sum << 11) & 0xffffffff) | (sum >>> 21));
  sum = (C + (D ^ A ^ B) + X[3] + 0xd4ef3085) & 0xffffffff;
  C = D + (((sum << 16) & 0xffffffff) | (sum >>> 16));
  sum = (B + (C ^ D ^ A) + X[6] + 0x04881d05) & 0xffffffff;
  B = C + (((sum << 23) & 0xffffffff) | (sum >>> 9));
  sum = (A + (B ^ C ^ D) + X[9] + 0xd9d4d039) & 0xffffffff;
  A = B + (((sum << 4) & 0xffffffff) | (sum >>> 28));
  sum = (D + (A ^ B ^ C) + X[12] + 0xe6db99e5) & 0xffffffff;
  D = A + (((sum << 11) & 0xffffffff) | (sum >>> 21));
  sum = (C + (D ^ A ^ B) + X[15] + 0x1fa27cf8) & 0xffffffff;
  C = D + (((sum << 16) & 0xffffffff) | (sum >>> 16));
  sum = (B + (C ^ D ^ A) + X[2] + 0xc4ac5665) & 0xffffffff;
  B = C + (((sum << 23) & 0xffffffff) | (sum >>> 9));
  sum = (A + (C ^ (B | (~D))) + X[0] + 0xf4292244) & 0xffffffff;
  A = B + (((sum << 6) & 0xffffffff) | (sum >>> 26));
  sum = (D + (B ^ (A | (~C))) + X[7] + 0x432aff97) & 0xffffffff;
  D = A + (((sum << 10) & 0xffffffff) | (sum >>> 22));
  sum = (C + (A ^ (D | (~B))) + X[14] + 0xab9423a7) & 0xffffffff;
  C = D + (((sum << 15) & 0xffffffff) | (sum >>> 17));
  sum = (B + (D ^ (C | (~A))) + X[5] + 0xfc93a039) & 0xffffffff;
  B = C + (((sum << 21) & 0xffffffff) | (sum >>> 11));
  sum = (A + (C ^ (B | (~D))) + X[12] + 0x655b59c3) & 0xffffffff;
  A = B + (((sum << 6) & 0xffffffff) | (sum >>> 26));
  sum = (D + (B ^ (A | (~C))) + X[3] + 0x8f0ccc92) & 0xffffffff;
  D = A + (((sum << 10) & 0xffffffff) | (sum >>> 22));
  sum = (C + (A ^ (D | (~B))) + X[10] + 0xffeff47d) & 0xffffffff;
  C = D + (((sum << 15) & 0xffffffff) | (sum >>> 17));
  sum = (B + (D ^ (C | (~A))) + X[1] + 0x85845dd1) & 0xffffffff;
  B = C + (((sum << 21) & 0xffffffff) | (sum >>> 11));
  sum = (A + (C ^ (B | (~D))) + X[8] + 0x6fa87e4f) & 0xffffffff;
  A = B + (((sum << 6) & 0xffffffff) | (sum >>> 26));
  sum = (D + (B ^ (A | (~C))) + X[15] + 0xfe2ce6e0) & 0xffffffff;
  D = A + (((sum << 10) & 0xffffffff) | (sum >>> 22));
  sum = (C + (A ^ (D | (~B))) + X[6] + 0xa3014314) & 0xffffffff;
  C = D + (((sum << 15) & 0xffffffff) | (sum >>> 17));
  sum = (B + (D ^ (C | (~A))) + X[13] + 0x4e0811a1) & 0xffffffff;
  B = C + (((sum << 21) & 0xffffffff) | (sum >>> 11));
  sum = (A + (C ^ (B | (~D))) + X[4] + 0xf7537e82) & 0xffffffff;
  A = B + (((sum << 6) & 0xffffffff) | (sum >>> 26));
  sum = (D + (B ^ (A | (~C))) + X[11] + 0xbd3af235) & 0xffffffff;
  D = A + (((sum << 10) & 0xffffffff) | (sum >>> 22));
  sum = (C + (A ^ (D | (~B))) + X[2] + 0x2ad7d2bb) & 0xffffffff;
  C = D + (((sum << 15) & 0xffffffff) | (sum >>> 17));
  sum = (B + (D ^ (C | (~A))) + X[9] + 0xeb86d391) & 0xffffffff;
  B = C + (((sum << 21) & 0xffffffff) | (sum >>> 11));
  this.chain_[0] = (this.chain_[0] + A) & 0xffffffff;
  this.chain_[1] = (this.chain_[1] + B) & 0xffffffff;
  this.chain_[2] = (this.chain_[2] + C) & 0xffffffff;
  this.chain_[3] = (this.chain_[3] + D) & 0xffffffff;
};
goog.crypt.Md5.prototype.update = function(bytes, opt_length) {
  if (!goog.isDef(opt_length)) {
    opt_length = bytes.length;
  }
  var lengthMinusBlock = opt_length - this.blockSize;
  var block = this.block_;
  var blockLength = this.blockLength_;
  var i = 0;
  while (i < opt_length) {
    if (blockLength == 0) {
      while (i <= lengthMinusBlock) {
        this.compress_(bytes, i);
        i += this.blockSize;
      }
    }
    if (goog.isString(bytes)) {
      while (i < opt_length) {
        block[blockLength++] = bytes.charCodeAt(i++);
        if (blockLength == this.blockSize) {
          this.compress_(block);
          blockLength = 0;
          break;
        }
      }
    } else {
      while (i < opt_length) {
        block[blockLength++] = bytes[i++];
        if (blockLength == this.blockSize) {
          this.compress_(block);
          blockLength = 0;
          break;
        }
      }
    }
  }
  this.blockLength_ = blockLength;
  this.totalLength_ += opt_length;
};
goog.crypt.Md5.prototype.digest = function() {
  var pad = new Array((this.blockLength_ < 56 ?
                       this.blockSize :
                       this.blockSize * 2) - this.blockLength_);
  pad[0] = 0x80;
  for (var i = 1; i < pad.length - 8; ++i) {
    pad[i] = 0;
  }
  var totalBits = this.totalLength_ * 8;
  for (var i = pad.length - 8; i < pad.length; ++i) {
    pad[i] = totalBits & 0xff;
    totalBits /= 0x100;
  }
  this.update(pad);
  var digest = new Array(16);
  var n = 0;
  for (var i = 0; i < 4; ++i) {
    for (var j = 0; j < 32; j += 8) {
      digest[n++] = (this.chain_[i] >>> j) & 0xff;
    }
  }
  return digest;
};
function h$base_access(file, file_off, mode, c) {
    ;
    if(h$isNode) {
        h$fs.stat(fd, function(err, fs) {
            if(err) {
                h$handleErrnoC(err, -1, 0, c);
            } else {
                c(mode & fs.mode);
            }
        });
    } else
        h$unsupported(-1, c);
}
function h$base_chmod(file, file_off, mode, c) {
    ;
    if(h$isNode) {
        h$fs.chmod(h$decodeUtf8z(file, file_off), mode, function(err) {
            h$handleErrnoC(err, -1, 0, c);
        });
    } else
        h$unsupported(-1, c);
}
function h$base_close(fd, c) {
    ;
    var fdo = h$base_fds[fd];
    if(fdo) {
        delete h$base_fds[fd];
        if(--fdo.refs < 1) {
          ;
          if(fdo.close) {
            fdo.close(fd, fdo, c);
          } else {
            c(0);
          }
        } else {
          ;
          c(0);
        }
    } else {
        ;
        h$errno = 22;
        c(-1);
    }
}
function h$base_dup(fd, c) {
    h$base_dup2(fd, h$base_fdN--, c);
}
function h$base_dup2(fd, new_fd, c) {
   ;
    var fdo = h$base_fds[fd];
    if(!fdo) {
      ;
      h$errno = 22;
      c(-1);
    } else {
      var new_fdo = h$base_fds[new_fd];
      function f() {
        h$base_fds[new_fd] = fdo;
        fdo.refs++;
        c(new_fd);
      }
      if(new_fdo) {
        ;
        h$base_close(new_fd, f);
      } else {
        f();
      }
    }
}
function h$base_fstat(fd, stat, stat_off, c) {
    ;
    if(h$isNode) {
        h$fs.fstat(fd, function(err, fs) {
            if(err) {
                h$handlErrnoC(err, -1, 0, c);
            } else {
                h$base_fillStat(fs, stat, stat_off);
                c(0);
            }
        });
    } else
        h$unsupported(-1, c);
}
function h$base_isatty(fd) {
    ;
    var fdo = h$base_fds[fd];
    if(fdo && typeof fdo.isatty !== 'undefined') {
      if(typeof fdo.isatty === 'function') return fdo.isatty() ? 1 : 0;
      return fdo.isatty ? 1 : 0;
    }
    return 0;
}
function h$base_lseek(fd, pos_1, pos_2, whence, c) {
    ;
    if(h$isNode) {
        var p = goog.math.Long.fromBits(pos_2, pos_1), p1;
        var o = h$base_fds[fd];
        if(!o) {
            h$errno = CONST_BADF;
            c(-1,-1);
        } else {
            switch(whence) {
            case 0:
                o.pos = p.toNumber();
                c(p.getHighBits(), p.getLowBits());
                break;
            case 1:
                o.pos += p.toNumber();
                p1 = goog.math.Long.fromNumber(o.pos);
                c(p1.getHighBits(), p1.getLowBits());
                break;
            case 2:
                h$fs.fstat(fd, function(err, fs) {
                    if(err) {
                        h$setErrno(err);
                        c(-1,-1);
                    } else {
                        o.pos = fs.size + p.toNumber();
                        p1 = goog.math.Long.fromNumber(o.pos);
                        c(p1.getHighBits(), p1.getLowBits());
                    }
                });
                break;
            default:
                h$errno = 22;
                c(-1,-1);
            }
        }
    } else {
        h$unsupported();
        c(-1, -1);
    }
}
function h$base_lstat(file, file_off, stat, stat_off, c) {
    ;
    if(h$isNode) {
        h$fs.lstat(h$decodeUtf8z(file, file_off), function(err, fs) {
            if(err) {
                h$handleErrnoC(err, -1, 0, c);
            } else {
                h$base_fillStat(fs, stat, stat_off);
                c(0);
            }
        });
    } else
        h$unsupported(-1, c);
}
function h$base_open(file, file_off, how, mode, c) {
    if(h$isNode) {
        var flags, off;
        var fp = h$decodeUtf8z(file, file_off);
        ;
        var acc = how & h$base_o_accmode;
        if(acc === h$base_o_rdonly) {
            flags = h$processConstants['fs']['O_RDONLY'];
        } else if(acc === h$base_o_wronly) {
            flags = h$processConstants['fs']['O_WRONLY'];
        } else {
            flags = h$processConstants['fs']['O_RDWR'];
        }
        off = (how & h$base_o_append) ? -1 : 0;
        flags = flags | ((how & h$base_o_trunc) ? h$processConstants['fs']['O_TRUNC'] : 0)
                      | ((how & h$base_o_creat) ? h$processConstants['fs']['O_CREAT'] : 0)
                      | ((how & h$base_o_excl) ? h$processConstants['fs']['O_EXCL'] : 0)
                      | ((how & h$base_o_append) ? h$processConstants['fs']['O_APPEND'] : 0);
        h$fs.open(fp, flags, mode, function(err, fd) {
            if(err) {
                h$handleErrnoC(err, -1, 0, c);
            } else {
                var f = function(p) {
                    h$base_fds[fd] = { read: h$base_readFile
                                     , write: h$base_writeFile
                                     , close: h$base_closeFile
                                     , fd: fd
                                     , pos: p
                                     , refs: 1
                                     };
                    ;
                    c(fd);
                }
                if(off === -1) {
                    h$fs.stat(fp, function(err, fs) {
                        if(err) h$handleErrnoC(err, -1, 0, c); else f(fs.size);
                    });
                } else {
                    f(0);
                }
            }
        });
    } else
        h$unsupported(-1, c);
}
function h$base_read(fd, buf, buf_off, n, c) {
    ;
    var fdo = h$base_fds[fd];
    if(fdo && fdo.read) {
        fdo.read(fd, fdo, buf, buf_off, n, c);
    } else {
        h$fs.read(fd, buf.u8, buf_off, n, null, function(err, bytesRead, buf0) {
            h$handleErrnoC(err, -1, bytesRead, c);
        });
    }
}
function h$base_stat(file, file_off, stat, stat_off, c) {
    ;
    if(h$isNode) {
        h$fs.stat(h$decodeUtf8z(file, file_off), function(err, fs) {
            if(err) {
                h$handlErrnoC(err, -1, 0, c);
            } else {
                h$base_fillStat(fs, stat, stat_off);
                c(0);
            }
        });
    } else
        h$unsupported(-1, c);
}
function h$base_umask(mode) {
    ;
    if(h$isNode) return process.umask(mode);
    return 0;
}
function h$base_write(fd, buf, buf_off, n, c) {
    ;
    var fdo = h$base_fds[fd];
    if(fdo && fdo.write) {
        fdo.write(fd, fdo, buf, buf_off, n, c);
    } else {
        h$fs.write(fd, buf.u8, buf_off, n, function(err, bytesWritten, buf0) {
            h$handleErrnoC(err, -1, bytesWritten, c);
        });
    }
}
function h$base_ftruncate(fd, pos_1, pos_2, c) {
    ;
    if(h$isNode) {
        h$fs.ftruncate(fd, goog.math.Long.fromBits(pos_2, pos_1).toNumber(), function(err) {
            h$handleErrnoC(err, -1, 0, c);
        });
    } else
        h$unsupported(-1, c);
}
function h$base_unlink(file, file_off, c) {
    ;
    if(h$isNode) {
        h$fs.unlink(h$decodeUtf8z(file, file_off), function(err) {
            h$handleErrnoC(err, -1, 0, c);
        });
    } else
        h$unsupported(-1, c);
}
function h$base_getpid() {
    ;
    if(h$isNode) return process.pid;
    return 0;
}
function h$base_link(file1, file1_off, file2, file2_off, c) {
    ;
    if(h$isNode) {
        h$fs.link(h$decodeUtf8z(file1, file1_off), h$decodeUtf8z(file2, file2_off), function(err) {
            h$handleErrnoC(err, -1, 0, c);
        });
    } else
        h$unsupported(-1, c);
}
function h$base_mkfifo(file, file_off, mode, c) {
    throw "h$base_mkfifo";
}
function h$base_sigemptyset(sigset, sigset_off) {
    return 0;
}
function h$base_sigaddset(sigset, sigset_off, sig) {
    return 0;
}
function h$base_sigprocmask(sig, sigset1, sigset1_off, sigset2, sigset2_off) {
    return 0;
}
function h$base_tcgetattr(attr, termios, termios_off) {
    return 0;
}
function h$base_tcsetattr(attr, val, termios, termios_off) {
    return 0;
}
function h$base_utime(file, file_off, timbuf, timbuf_off, c) {
    ;
    if(h$isNode) {
        h$fs.fstat(h$decodeUtf8z(file, file_off), function(err, fs) {
            if(err) {
                h$handleErrnoC(err, 0, -1, c);
            } else {
                var atime = goog.math.Long.fromNumber(fs.atime.getTime());
                var mtime = goog.math.Long.fromNumber(fs.mtime.getTime());
                var ctime = goog.math.Long.fromNumber(fs.ctime.getTime());
                timbuf.i3[0] = atime.getHighBits();
                timbuf.i3[1] = atime.getLowBits();
                timbuf.i3[2] = mtime.getHighBits();
                timbuf.i3[3] = mtime.getLowBits();
                timbuf.i3[4] = ctime.getHighBits();
                timbuf.i3[5] = ctime.getLowBits();
                c(0);
            }
        });
    } else
        h$unsupported(-1, c);
}
function h$base_waitpid(pid, stat, stat_off, options, c) {
    throw "h$base_waitpid";
}
              var h$base_o_rdonly = 0x00000;
              var h$base_o_wronly = 0x00001;
              var h$base_o_rdwr = 0x00002;
              var h$base_o_accmode = 0x00003;
              var h$base_o_append = 0x00008;
              var h$base_o_creat = 0x00200;
              var h$base_o_trunc = 0x00400;
              var h$base_o_excl = 0x00800;
              var h$base_o_noctty = 0x20000;
              var h$base_o_nonblock = 0x00004;
              var h$base_o_binary = 0x00000;
function h$base_c_s_isreg(mode) {
    return 1;
}
function h$base_c_s_ischr(mode) {
    return 0;
}
function h$base_c_s_isblk(mode) {
    return 0;
}
function h$base_c_s_isdir(mode) {
    return 0;
}
function h$base_c_s_isfifo(mode) {
    return 0;
}
function h$base_fillStat(fs, b, off) {
    if(off%4) throw "h$base_fillStat: not aligned";
    var o = off>>2;
    b.i3[o+0] = fs.mode;
    var s = goog.math.Long.fromNumber(fs.size);
    b.i3[o+1] = s.getHighBits();
    b.i3[o+2] = s.getLowBits();
    b.i3[o+3] = 0;
    b.i3[o+4] = 0;
    b.i3[o+5] = fs.dev;
    var i = goog.math.Long.fromNumber(fs.ino);
    b.i3[o+6] = i.getHighBits();
    b.i3[o+7] = i.getLowBits();
    b.i3[o+8] = fs.uid;
    b.i3[o+9] = fs.gid;
}
              var h$base_sizeof_stat = 40;
function h$base_st_mtime(stat, stat_off) {
    { h$ret1 = (stat.i3[(stat_off>>2)+4]); return (stat.i3[(stat_off>>2)+3]); };
}
function h$base_st_size(stat, stat_off) {
    { h$ret1 = (stat.i3[(stat_off>>2)+2]); return (stat.i3[(stat_off>>2)+1]); };
}
function h$base_st_mode(stat, stat_off) {
    return stat.i3[stat_off>>2];
}
function h$base_st_dev(stat, stat_off) {
    return stat.i3[(stat_off>>2)+5];
}
function h$base_st_ino(stat, stat_off) {
    { h$ret1 = (stat.i3[(stat_off>>2)+7]); return (stat.i3[(stat_off>>2)+6]); };
}
              var h$base_echo = 1;
              var h$base_tcsanow = 2;
              var h$base_icanon = 4;
              var h$base_vmin = 8;
              var h$base_vtime = 16;
              var h$base_sigttou = 0;
              var h$base_sig_block = 0;
              var h$base_sig_setmask = 0;
              var h$base_f_getfl = 0;
              var h$base_f_setfl = 0;
              var h$base_f_setfd = 0;
              var h$base_fd_cloexec = 0;
              var h$base_sizeof_termios = 4;
              var h$base_sizeof_sigset_t = 4;
function h$base_lflag(termios, termios_off) {
    return 0;
}
function h$base_poke_lflag(termios, termios_off, flag) {
    return 0;
}
function h$base_ptr_c_cc(termios, termios_off) {
    { h$ret1 = (0); return (h$newByteArray(8)); };
}
              var h$base_default_buffer_size = 32768;
function h$base_c_s_issock(mode) {
    return 0;
}
              var h$base_SEEK_SET = 0;
              var h$base_SEEK_CUR = 1;
              var h$base_SEEK_END = 2;
function h$base_set_saved_termios(a, b, c) {
    { h$ret1 = (0); return (null); };
}
function h$base_get_saved_termios(r) {
    { h$ret1 = (0); return (null); };
}
function h$lockFile(fd, dev, ino, for_writing) {
    ;
    return 0;
}
function h$unlockFile(fd) {
    ;
    return 0;
}
var h$base_readStdin , h$base_writeStderr, h$base_writeStdout;
var h$base_isattyStdin = false, h$base_isattyStdout = false, h$base_isattyStderr = false;
var h$base_closeStdin = null, h$base_closeStderr = null, h$base_closeStdout = null;
var h$base_readFile, h$base_writeFile, h$base_closeFile;
var h$base_stdin_waiting = new h$Queue();
var h$base_stdin_chunk = { buf: null
                           , pos: 0
                           , processing: false
                           };
var h$base_stdin_eof = false;
var h$base_process_stdin = function() {
    var c = h$base_stdin_chunk;
    var q = h$base_stdin_waiting;
    if(!q.length() || c.processing) return;
    c.processing = true;
    if(!c.buf) { c.pos = 0; c.buf = process.stdin.read(); }
    while(c.buf && q.length()) {
        var x = q.dequeue();
        var n = Math.min(c.buf.length - c.pos, x.n);
        for(var i=0;i<n;i++) {
            x.buf.u8[i+x.off] = c.buf[c.pos+i];
        }
        c.pos += n;
        x.c(n);
        if(c.pos >= c.buf.length) c.buf = null;
        if(!c.buf && q.length()) { c.pos = 0; c.buf = process.stdin.read(); }
    }
    while(h$base_stdin_eof && q.length()) q.dequeue().c(0);
    c.processing = false;
}
if(h$isNode) {
    h$base_closeFile = function(fd, fdo, c) {
        ;
        var real_fd = typeof fdo.fd === 'number' ? fdo.fd : fd;
        h$fs.close(real_fd, function(err) {
            delete h$base_fds[fd];
            h$handleErrnoC(err, -1, 0, c);
        });
    }
    h$base_readFile = function(fd, fdo, buf, buf_offset, n, c) {
        var pos = typeof fdo.pos === 'number' ? fdo.pos : null;
        ;
        var real_fd = typeof fdo.fd === 'number' ? fdo.fd : fd;
        h$fs.read(real_fd, Buffer.alloc(n), 0, n, pos, function(err, bytesRead, nbuf) {
            if(err) {
                h$setErrno(err);
                c(-1);
            } else {
                for(var i=bytesRead-1;i>=0;i--) buf.u8[buf_offset+i] = nbuf[i];
                if(typeof fdo.pos === 'number') fdo.pos += bytesRead;
                c(bytesRead);
            }
        });
    }
    h$base_readStdin = function(fd, fdo, buf, buf_offset, n, c) {
        ;
        h$base_stdin_waiting.enqueue({buf: buf, off: buf_offset, n: n, c: c});
        h$base_process_stdin();
    }
    h$base_closeStdin = function(fd, fdo, c) {
        ;
        c(0);
    }
    h$base_writeFile = function(fd, fdo, buf, buf_offset, n, c) {
        var pos = typeof fdo.pos === 'number' ? fdo.pos : null;
        ;
        var nbuf = Buffer.alloc(n);
        for(var i=0;i<n;i++) nbuf[i] = buf.u8[i+buf_offset];
        var real_fd = typeof fdo.fd === 'number' ? fdo.fd : fd;
        if(typeof fdo.pos === 'number') fdo.pos += n;
        h$fs.write(real_fd, nbuf, 0, n, pos, function(err, bytesWritten) {
            ;
            if(err) {
                h$setErrno(err);
                if(typeof fdo.pos === 'number') fdo.pos -= n;
                if(h$errno === 35)
                    setTimeout(function() { h$base_writeFile(fd, fdo, buf, buf_offset, n, c); }, 20);
                else c(-1);
            } else {
                if(typeof fdo.pos === 'number') fdo.pos += bytesWritten - n;
                c(bytesWritten);
            }
        });
    }
    h$base_writeStdout = function(fd, fdo, buf, buf_offset, n, c) {
        ;
        h$base_writeFile(1, fdo, buf, buf_offset, n, c);
    }
    h$base_closeStdout = function(fd, fdo, c) {
        ;
        c(0);
    }
    h$base_writeStderr = function(fd, fdo, buf, buf_offset, n, c) {
        ;
        h$base_writeFile(2, fdo, buf, buf_offset, n, c);
    }
    h$base_closeStderr = function(fd, fdo, c) {
        ;
        c(0);
    }
    process.stdin.on('readable', h$base_process_stdin);
    process.stdin.on('end', function() { h$base_stdin_eof = true; h$base_process_stdin(); });
    h$base_isattyStdin = function() { return process.stdin.isTTY; };
    h$base_isattyStdout = function() { return process.stdout.isTTY; };
    h$base_isattyStderr = function() { return process.stderr.isTTY; };
} else if (h$isJsShell) {
    h$base_readStdin = function(fd, fdo, buf, buf_offset, n, c) {
        c(0);
    }
    h$base_writeStdout = function(fd, fdo, buf, buf_offset, n, c) {
        putstr(h$decodeUtf8(buf, n, buf_offset));
        c(n);
    }
    h$base_writeStderr = function(fd, fdo, buf, buf_offset, n, c) {
        printErr(h$decodeUtf8(buf, n, buf_offset));
        c(n);
    }
} else if(h$isJsCore) {
    h$base_readStdin = function(fd, fdo, buf, buf_offset, n, c) {
 c(0);
    }
    var h$base_stdoutLeftover = { f: print, val: null };
    var h$base_stderrLeftover = { f: debug, val: null };
    var h$base_writeWithLeftover = function(buf, n, buf_offset, c, lo) {
 var lines = h$decodeUtf8(buf, n, buf_offset).split(/\r?\n/);
 if(lines.length === 1) {
     if(lines[0].length) {
  if(lo.val !== null) lo.val += lines[0];
  else lo.val = lines[0];
     }
 } else {
            lo.f(((lo.val !== null) ? lo.val : '') + lines[0]);
     for(var i=1;i<lines.length-1;i++) lo.f(lines[i]);
     if(lines[lines.length-1].length) lo.val = lines[lines.length-1];
     else lo.val = null;
 }
 c(n);
    }
    h$base_writeStdout = function(fd, fdo, buf, buf_offset, n, c) {
 h$base_writeWithLeftover(buf, n, buf_offset, c, h$base_stdoutLeftover);
    }
    h$base_writeStderr = function(fd, fdo, buf, buf_offset, n, c) {
 h$base_writeWithLeftover(buf, n, buf_offset, c, h$base_stderrLeftover);
    }
} else {
    h$base_readStdin = function(fd, fdo, buf, buf_offset, n, c) {
        c(0);
    }
    h$base_writeStdout = function(fd, fdo, buf, buf_offset, n, c) {
        console.log(h$decodeUtf8(buf, n, buf_offset));
        c(n);
    }
    h$base_writeStderr = function(fd, fdo, buf, buf_offset, n, c) {
        console.log(h$decodeUtf8(buf, n, buf_offset));
        c(n);
    }
}
var h$base_stdin_fd =
  { read: h$base_readStdin
  , close: h$base_closeStdin
  , isatty: h$base_isattyStdin
  , refs: 1
  };
var h$base_stdout_fd =
  { write: h$base_writeStdout
  , close: h$base_closeStdout
  , isatty: h$base_isattyStdout
  , refs: 1
  };
var h$base_stderr_fd =
  { write: h$base_writeStderr
  , close: h$base_closeStderr
  , isatty: h$base_isattyStderr
  , refs: 1
  };
var h$base_fdN = -2;
var h$base_fds = [h$base_stdin_fd, h$base_stdout_fd, h$base_stderr_fd];
function h$shutdownHaskellAndExit(code, fast) {
    h$exitProcess(code);
}
function h$rand() {
  return (32768 * Math.random()) & 32767;
}
function h$stg_sig_install(sigNo, actionCode, sigSet_d, sigSet_o) {
  return 0;
}
function h$get_current_timezone_seconds(t, pdst_v, pdst_o, pname_v, pname_o) {
    var d = new Date(t * 1000);
    var now = new Date();
    var jan = new Date(now.getFullYear(),0,1);
    var jul = new Date(now.getFullYear(),6,1);
    var stdOff = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    var isDst = d.getTimezoneOffset() < stdOff;
    var tzo = d.getTimezoneOffset();
    pdst_v.dv.setInt32(pdst_o, isDst ? 1 : 0, true);
    if(!pname_v.arr) pname_v.arr = [];
    var offstr = tzo < 0 ? ('+' + (tzo/-60)) : ('' + (tzo/-60));
    pname_v.arr[pname_o] = [h$encodeUtf8("UTC" + offstr), 0];
    return (-60*tzo)|0;
}
function h$clock_gettime(when, p_d, p_o) {
  var is64 = p_d.i3.length == 4 && p_o == 0;
  var o = p_o >> 2,
      t = Date.now ? Date.now() : new Date().getTime(),
      tf = Math.floor(t / 1000),
      tn = 1000000 * (t - (1000 * tf));
  if(is64) {
    p_d.i3[o] = tf|0;
    p_d.i3[o+1] = 0;
    p_d.i3[o+2] = tn|0;
    p_d.i3[o+3] = 0;
  } else {
    p_d.i3[o] = tf|0;
    p_d.i3[o+1] = tn|0;
  }
  return 0;
}
function h$clock_getres(when, p_d, p_o) {
  return 0;
}
var h$Threefish_256_Process_Block;
h$Threefish_256_Process_Block=function(n,r,p,t,y,u,v){var m=n.i3;var a=p.i3;y=y.i3;p=m[0];n=m[1];r=m[2];t=m[3];u=m[4];v=m[5];var q=m[6];m=m[7];var w=p^r^u^q^2851871266;var x=n^t^v^m^466688986;var b=a[0];var g=a[1];var c=a[2];var d=a[3];var h=a[4];var k=a[5];var e=a[6];var f=a[7];a=(b&16777215)+(p&16777215);b=(a>>>24)+(b>>>24)+(p>>>24)+((g&65535)<<8)+((n&65535)<<8);var l=((b>>>24)+(g>>>16)+(n>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(r&16777215);b=(a>>>24)+(c>>>24)+(r>>>24)+((d&65535)<<
8)+((t&65535)<<8);d=((b>>>24)+(d>>>16)+(t>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(u&16777215);b=(a>>>24)+(h>>>24)+(u>>>24)+((k&65535)<<8)+((v&65535)<<8);k=((b>>>24)+(k>>>16)+(v>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(q&16777215);b=(a>>>24)+(e>>>24)+(q>>>24)+((f&65535)<<8)+((m&65535)<<8);f=((b>>>24)+(f>>>16)+(m>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+
(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<14|c>>>18)^l;c=(c<<14|a>>>18)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<16|e>>>16)^k;e=(e<<16|a>>>16)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<20|f>>>12)^l;e=(a<<20|e>>>12)^g;a=(h&16777215)+(c&16777215);
b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<25|d>>>7)^k;c=(a<<25|c>>>7)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<23|c>>>9)^l;c=(c<<23|a>>>9)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|
a&16777215;a=f;f=(e<<8|f>>>24)^k;e=(a<<8|e>>>24)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(f<<5|e>>>27)^l;e=(e<<5|a>>>27)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<5|d>>>27)^k;c=(a<<5|c>>>27)^h;a=(g&16777215)+(r&16777215);b=(a>>>24)+(g>>>24)+(r>>>24)+((l&65535)<<
8)+((t&65535)<<8);l=((b>>>24)+(l>>>16)+(t>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(u&16777215);b=(a>>>24)+(c>>>24)+(u>>>24)+((d&65535)<<8)+((v&65535)<<8);d=((b>>>24)+(d>>>16)+(v>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(q&16777215);b=(a>>>24)+(h>>>24)+(q>>>24)+((k&65535)<<8)+((m&65535)<<8);k=((b>>>24)+(k>>>16)+(m>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(w&16777215)+1;b=(a>>>24)+(e>>>24)+(w>>>24)+((f&65535)<<8)+((x&65535)<<8);f=((b>>>24)+(f>>>16)+
(x>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<25|c>>>7)^l;c=(c<<25|a>>>7)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<1|f>>>31)^k;e=(a<<1|e>>>31)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<
8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<14|f>>>18)^l;e=(a<<14|e>>>18)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(d<<12|c>>>20)^k;c=(c<<12|a>>>20)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(c<<26|d>>>6)^l;c=
(a<<26|c>>>6)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<22|e>>>10)^k;e=(e<<22|a>>>10)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=e^l;e=a^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+
(b>>8&65535);h=b<<24|a&16777215;a=d;d=c^k;c=a^h;a=(g&16777215)+(u&16777215);b=(a>>>24)+(g>>>24)+(u>>>24)+((l&65535)<<8)+((v&65535)<<8);l=((b>>>24)+(l>>>16)+(v>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(q&16777215);b=(a>>>24)+(c>>>24)+(q>>>24)+((d&65535)<<8)+((m&65535)<<8);d=((b>>>24)+(d>>>16)+(m>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(w&16777215);b=(a>>>24)+(h>>>24)+(w>>>24)+((k&65535)<<8)+((x&65535)<<8);k=((b>>>24)+(k>>>16)+(x>>>16)<<16)+(b>>8&65535);h=b<<24|a&
16777215;a=(e&16777215)+(p&16777215)+2;b=(a>>>24)+(e>>>24)+(p>>>24)+((f&65535)<<8)+((n&65535)<<8);f=((b>>>24)+(f>>>16)+(n>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<14|c>>>18)^l;c=(c<<14|a>>>18)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<
24|a&16777215;a=f;f=(f<<16|e>>>16)^k;e=(e<<16|a>>>16)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<20|f>>>12)^l;e=(a<<20|e>>>12)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<25|d>>>7)^k;c=(a<<25|c>>>7)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+
((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<23|c>>>9)^l;c=(c<<23|a>>>9)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<8|f>>>24)^k;e=(a<<8|e>>>24)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(f<<5|e>>>
27)^l;e=(e<<5|a>>>27)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<5|d>>>27)^k;c=(a<<5|c>>>27)^h;a=(g&16777215)+(q&16777215);b=(a>>>24)+(g>>>24)+(q>>>24)+((l&65535)<<8)+((m&65535)<<8);l=((b>>>24)+(l>>>16)+(m>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(w&16777215);b=(a>>>24)+(c>>>24)+(w>>>24)+((d&65535)<<8)+((x&65535)<<8);d=((b>>>24)+(d>>>16)+(x>>>16)<<16)+(b>>8&65535);
c=b<<24|a&16777215;a=(h&16777215)+(p&16777215);b=(a>>>24)+(h>>>24)+(p>>>24)+((k&65535)<<8)+((n&65535)<<8);k=((b>>>24)+(k>>>16)+(n>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(r&16777215)+3;b=(a>>>24)+(e>>>24)+(r>>>24)+((f&65535)<<8)+((t&65535)<<8);f=((b>>>24)+(f>>>16)+(t>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<25|c>>>7)^
l;c=(c<<25|a>>>7)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<1|f>>>31)^k;e=(a<<1|e>>>31)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<14|f>>>18)^l;e=(a<<14|e>>>18)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>
24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(d<<12|c>>>20)^k;c=(c<<12|a>>>20)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(c<<26|d>>>6)^l;c=(a<<26|c>>>6)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<22|e>>>10)^k;e=(e<<22|a>>>10)^h;a=(g&16777215)+
(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=e^l;e=a^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=c^k;c=a^h;a=(g&16777215)+(w&16777215);b=(a>>>24)+(g>>>24)+(w>>>24)+((l&65535)<<8)+((x&65535)<<8);l=((b>>>24)+(l>>>16)+(x>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(p&16777215);
b=(a>>>24)+(c>>>24)+(p>>>24)+((d&65535)<<8)+((n&65535)<<8);d=((b>>>24)+(d>>>16)+(n>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(r&16777215);b=(a>>>24)+(h>>>24)+(r>>>24)+((k&65535)<<8)+((t&65535)<<8);k=((b>>>24)+(k>>>16)+(t>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(u&16777215)+4;b=(a>>>24)+(e>>>24)+(u>>>24)+((f&65535)<<8)+((v&65535)<<8);f=((b>>>24)+(f>>>16)+(v>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<
8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<14|c>>>18)^l;c=(c<<14|a>>>18)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<16|e>>>16)^k;e=(e<<16|a>>>16)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<20|f>>>12)^l;e=
(a<<20|e>>>12)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<25|d>>>7)^k;c=(a<<25|c>>>7)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<23|c>>>9)^l;c=(c<<23|a>>>9)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+
(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<8|f>>>24)^k;e=(a<<8|e>>>24)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(f<<5|e>>>27)^l;e=(e<<5|a>>>27)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<5|d>>>27)^k;c=(a<<5|c>>>27)^h;a=(g&16777215)+(p&
16777215);b=(a>>>24)+(g>>>24)+(p>>>24)+((l&65535)<<8)+((n&65535)<<8);l=((b>>>24)+(l>>>16)+(n>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(r&16777215);b=(a>>>24)+(c>>>24)+(r>>>24)+((d&65535)<<8)+((t&65535)<<8);d=((b>>>24)+(d>>>16)+(t>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(u&16777215);b=(a>>>24)+(h>>>24)+(u>>>24)+((k&65535)<<8)+((v&65535)<<8);k=((b>>>24)+(k>>>16)+(v>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(q&16777215)+5;b=(a>>>24)+(e>>>24)+(q>>>24)+
((f&65535)<<8)+((m&65535)<<8);f=((b>>>24)+(f>>>16)+(m>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<25|c>>>7)^l;c=(c<<25|a>>>7)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<1|f>>>31)^k;e=(a<<1|e>>>31)^h;a=(g&16777215)+(e&
16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<14|f>>>18)^l;e=(a<<14|e>>>18)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(d<<12|c>>>20)^k;c=(c<<12|a>>>20)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&
65535);g=b<<24|a&16777215;a=d;d=(c<<26|d>>>6)^l;c=(a<<26|c>>>6)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<22|e>>>10)^k;e=(e<<22|a>>>10)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=e^l;e=a^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<
8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=c^k;c=a^h;a=(g&16777215)+(r&16777215);b=(a>>>24)+(g>>>24)+(r>>>24)+((l&65535)<<8)+((t&65535)<<8);l=((b>>>24)+(l>>>16)+(t>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(u&16777215);b=(a>>>24)+(c>>>24)+(u>>>24)+((d&65535)<<8)+((v&65535)<<8);d=((b>>>24)+(d>>>16)+(v>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(q&16777215);b=(a>>>24)+(h>>>24)+(q>>>24)+((k&65535)<<8)+((m&65535)<<8);k=((b>>>
24)+(k>>>16)+(m>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(w&16777215)+6;b=(a>>>24)+(e>>>24)+(w>>>24)+((f&65535)<<8)+((x&65535)<<8);f=((b>>>24)+(f>>>16)+(x>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<14|c>>>18)^l;c=(c<<14|a>>>18)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>
24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<16|e>>>16)^k;e=(e<<16|a>>>16)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<20|f>>>12)^l;e=(a<<20|e>>>12)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<25|d>>>7)^k;c=(a<<25|c>>>7)^h;a=(g&16777215)+
(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<23|c>>>9)^l;c=(c<<23|a>>>9)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<8|f>>>24)^k;e=(a<<8|e>>>24)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&
65535);g=b<<24|a&16777215;a=f;f=(f<<5|e>>>27)^l;e=(e<<5|a>>>27)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<5|d>>>27)^k;c=(a<<5|c>>>27)^h;a=(g&16777215)+(u&16777215);b=(a>>>24)+(g>>>24)+(u>>>24)+((l&65535)<<8)+((v&65535)<<8);l=((b>>>24)+(l>>>16)+(v>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(q&16777215);b=(a>>>24)+(c>>>24)+(q>>>24)+((d&65535)<<8)+((m&65535)<<8);
d=((b>>>24)+(d>>>16)+(m>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(w&16777215);b=(a>>>24)+(h>>>24)+(w>>>24)+((k&65535)<<8)+((x&65535)<<8);k=((b>>>24)+(k>>>16)+(x>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(p&16777215)+7;b=(a>>>24)+(e>>>24)+(p>>>24)+((f&65535)<<8)+((n&65535)<<8);f=((b>>>24)+(f>>>16)+(n>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>
8&65535);g=b<<24|a&16777215;a=d;d=(d<<25|c>>>7)^l;c=(c<<25|a>>>7)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<1|f>>>31)^k;e=(a<<1|e>>>31)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<14|f>>>18)^l;e=(a<<14|e>>>18)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>
24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(d<<12|c>>>20)^k;c=(c<<12|a>>>20)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(c<<26|d>>>6)^l;c=(a<<26|c>>>6)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=
f;f=(f<<22|e>>>10)^k;e=(e<<22|a>>>10)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=e^l;e=a^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=c^k;c=a^h;a=(g&16777215)+(q&16777215);b=(a>>>24)+(g>>>24)+(q>>>24)+((l&65535)<<8)+((m&65535)<<8);l=((b>>>24)+(l>>>16)+(m>>>16)<<16)+
(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(w&16777215);b=(a>>>24)+(c>>>24)+(w>>>24)+((d&65535)<<8)+((x&65535)<<8);d=((b>>>24)+(d>>>16)+(x>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(p&16777215);b=(a>>>24)+(h>>>24)+(p>>>24)+((k&65535)<<8)+((n&65535)<<8);k=((b>>>24)+(k>>>16)+(n>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(r&16777215)+8;b=(a>>>24)+(e>>>24)+(r>>>24)+((f&65535)<<8)+((t&65535)<<8);f=((b>>>24)+(f>>>16)+(t>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&
16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<14|c>>>18)^l;c=(c<<14|a>>>18)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<16|e>>>16)^k;e=(e<<16|a>>>16)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<
16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<20|f>>>12)^l;e=(a<<20|e>>>12)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<25|d>>>7)^k;c=(a<<25|c>>>7)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<23|c>>>9)^l;c=(c<<23|a>>>9)^g;a=(h&16777215)+(e&16777215);b=(a>>>
24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<8|f>>>24)^k;e=(a<<8|e>>>24)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(f<<5|e>>>27)^l;e=(e<<5|a>>>27)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;
a=d;d=(c<<5|d>>>27)^k;c=(a<<5|c>>>27)^h;a=(g&16777215)+(w&16777215);b=(a>>>24)+(g>>>24)+(w>>>24)+((l&65535)<<8)+((x&65535)<<8);l=((b>>>24)+(l>>>16)+(x>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(p&16777215);b=(a>>>24)+(c>>>24)+(p>>>24)+((d&65535)<<8)+((n&65535)<<8);d=((b>>>24)+(d>>>16)+(n>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(r&16777215);b=(a>>>24)+(h>>>24)+(r>>>24)+((k&65535)<<8)+((t&65535)<<8);k=((b>>>24)+(k>>>16)+(t>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;
a=(e&16777215)+(u&16777215)+9;b=(a>>>24)+(e>>>24)+(u>>>24)+((f&65535)<<8)+((v&65535)<<8);f=((b>>>24)+(f>>>16)+(v>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<25|c>>>7)^l;c=(c<<25|a>>>7)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;
a=f;f=(e<<1|f>>>31)^k;e=(a<<1|e>>>31)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<14|f>>>18)^l;e=(a<<14|e>>>18)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(d<<12|c>>>20)^k;c=(c<<12|a>>>20)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<
8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(c<<26|d>>>6)^l;c=(a<<26|c>>>6)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<22|e>>>10)^k;e=(e<<22|a>>>10)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=e^l;e=a^g;a=(h&16777215)+
(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=c^k;c=a^h;a=(g&16777215)+(p&16777215);b=(a>>>24)+(g>>>24)+(p>>>24)+((l&65535)<<8)+((n&65535)<<8);l=((b>>>24)+(l>>>16)+(n>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(r&16777215);b=(a>>>24)+(c>>>24)+(r>>>24)+((d&65535)<<8)+((t&65535)<<8);d=((b>>>24)+(d>>>16)+(t>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(u&16777215);b=(a>>>24)+
(h>>>24)+(u>>>24)+((k&65535)<<8)+((v&65535)<<8);k=((b>>>24)+(k>>>16)+(v>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(q&16777215)+10;b=(a>>>24)+(e>>>24)+(q>>>24)+((f&65535)<<8)+((m&65535)<<8);f=((b>>>24)+(f>>>16)+(m>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<14|c>>>18)^l;c=(c<<14|a>>>18)^g;a=(h&16777215)+(e&16777215);b=(a>>>
24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<16|e>>>16)^k;e=(e<<16|a>>>16)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<20|f>>>12)^l;e=(a<<20|e>>>12)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&
16777215;a=d;d=(c<<25|d>>>7)^k;c=(a<<25|c>>>7)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<23|c>>>9)^l;c=(c<<23|a>>>9)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<8|f>>>24)^k;e=(a<<8|e>>>24)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<
8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(f<<5|e>>>27)^l;e=(e<<5|a>>>27)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<5|d>>>27)^k;c=(a<<5|c>>>27)^h;a=(g&16777215)+(r&16777215);b=(a>>>24)+(g>>>24)+(r>>>24)+((l&65535)<<8)+((t&65535)<<8);l=((b>>>24)+(l>>>16)+(t>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(u&16777215);
b=(a>>>24)+(c>>>24)+(u>>>24)+((d&65535)<<8)+((v&65535)<<8);d=((b>>>24)+(d>>>16)+(v>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(q&16777215);b=(a>>>24)+(h>>>24)+(q>>>24)+((k&65535)<<8)+((m&65535)<<8);k=((b>>>24)+(k>>>16)+(m>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(w&16777215)+11;b=(a>>>24)+(e>>>24)+(w>>>24)+((f&65535)<<8)+((x&65535)<<8);f=((b>>>24)+(f>>>16)+(x>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<
8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<25|c>>>7)^l;c=(c<<25|a>>>7)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<1|f>>>31)^k;e=(a<<1|e>>>31)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<14|f>>>18)^l;e=(a<<
14|e>>>18)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(d<<12|c>>>20)^k;c=(c<<12|a>>>20)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(c<<26|d>>>6)^l;c=(a<<26|c>>>6)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+
(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<22|e>>>10)^k;e=(e<<22|a>>>10)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=e^l;e=a^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=c^k;c=a^h;a=(g&16777215)+(u&16777215);b=(a>>>24)+(g>>>24)+(u>>>24)+((l&65535)<<
8)+((v&65535)<<8);l=((b>>>24)+(l>>>16)+(v>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(q&16777215);b=(a>>>24)+(c>>>24)+(q>>>24)+((d&65535)<<8)+((m&65535)<<8);d=((b>>>24)+(d>>>16)+(m>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(w&16777215);b=(a>>>24)+(h>>>24)+(w>>>24)+((k&65535)<<8)+((x&65535)<<8);k=((b>>>24)+(k>>>16)+(x>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(p&16777215)+12;b=(a>>>24)+(e>>>24)+(p>>>24)+((f&65535)<<8)+((n&65535)<<8);f=((b>>>24)+(f>>>16)+
(n>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<14|c>>>18)^l;c=(c<<14|a>>>18)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<16|e>>>16)^k;e=(e<<16|a>>>16)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<
8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<20|f>>>12)^l;e=(a<<20|e>>>12)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<25|d>>>7)^k;c=(a<<25|c>>>7)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<23|c>>>9)^l;c=(c<<
23|a>>>9)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<8|f>>>24)^k;e=(a<<8|e>>>24)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(f<<5|e>>>27)^l;e=(e<<5|a>>>27)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>
16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<5|d>>>27)^k;c=(a<<5|c>>>27)^h;a=(g&16777215)+(q&16777215);b=(a>>>24)+(g>>>24)+(q>>>24)+((l&65535)<<8)+((m&65535)<<8);l=((b>>>24)+(l>>>16)+(m>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(w&16777215);b=(a>>>24)+(c>>>24)+(w>>>24)+((d&65535)<<8)+((x&65535)<<8);d=((b>>>24)+(d>>>16)+(x>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(p&16777215);b=(a>>>24)+(h>>>24)+(p>>>24)+((k&65535)<<8)+((n&65535)<<8);k=((b>>>24)+(k>>>
16)+(n>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(r&16777215)+13;b=(a>>>24)+(e>>>24)+(r>>>24)+((f&65535)<<8)+((t&65535)<<8);f=((b>>>24)+(f>>>16)+(t>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<25|c>>>7)^l;c=(c<<25|a>>>7)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>
16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<1|f>>>31)^k;e=(a<<1|e>>>31)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<14|f>>>18)^l;e=(a<<14|e>>>18)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(d<<12|c>>>20)^k;c=(c<<12|a>>>20)^h;a=(g&16777215)+(c&16777215);
b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(c<<26|d>>>6)^l;c=(a<<26|c>>>6)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<22|e>>>10)^k;e=(e<<22|a>>>10)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<
24|a&16777215;a=f;f=e^l;e=a^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=c^k;c=a^h;a=(g&16777215)+(w&16777215);b=(a>>>24)+(g>>>24)+(w>>>24)+((l&65535)<<8)+((x&65535)<<8);l=((b>>>24)+(l>>>16)+(x>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(p&16777215);b=(a>>>24)+(c>>>24)+(p>>>24)+((d&65535)<<8)+((n&65535)<<8);d=((b>>>24)+(d>>>16)+(n>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;
a=(h&16777215)+(r&16777215);b=(a>>>24)+(h>>>24)+(r>>>24)+((k&65535)<<8)+((t&65535)<<8);k=((b>>>24)+(k>>>16)+(t>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(u&16777215)+14;b=(a>>>24)+(e>>>24)+(u>>>24)+((f&65535)<<8)+((v&65535)<<8);f=((b>>>24)+(f>>>16)+(v>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<14|c>>>18)^l;c=(c<<14|a>>>
18)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<16|e>>>16)^k;e=(e<<16|a>>>16)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<20|f>>>12)^l;e=(a<<20|e>>>12)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>
16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<25|d>>>7)^k;c=(a<<25|c>>>7)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<23|c>>>9)^l;c=(c<<23|a>>>9)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<8|f>>>24)^k;e=(a<<8|e>>>24)^h;a=(g&16777215)+(e&16777215);
b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(f<<5|e>>>27)^l;e=(e<<5|a>>>27)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<5|d>>>27)^k;c=(a<<5|c>>>27)^h;a=(g&16777215)+(p&16777215);b=(a>>>24)+(g>>>24)+(p>>>24)+((l&65535)<<8)+((n&65535)<<8);l=((b>>>24)+(l>>>16)+(n>>>16)<<16)+(b>>8&65535);g=b<<24|
a&16777215;a=(c&16777215)+(r&16777215);b=(a>>>24)+(c>>>24)+(r>>>24)+((d&65535)<<8)+((t&65535)<<8);d=((b>>>24)+(d>>>16)+(t>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(u&16777215);b=(a>>>24)+(h>>>24)+(u>>>24)+((k&65535)<<8)+((v&65535)<<8);k=((b>>>24)+(k>>>16)+(v>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(q&16777215)+15;b=(a>>>24)+(e>>>24)+(q>>>24)+((f&65535)<<8)+((m&65535)<<8);f=((b>>>24)+(f>>>16)+(m>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);
b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<25|c>>>7)^l;c=(c<<25|a>>>7)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<1|f>>>31)^k;e=(a<<1|e>>>31)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|
a&16777215;a=f;f=(e<<14|f>>>18)^l;e=(a<<14|e>>>18)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(d<<12|c>>>20)^k;c=(c<<12|a>>>20)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(c<<26|d>>>6)^l;c=(a<<26|c>>>6)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&
65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<22|e>>>10)^k;e=(e<<22|a>>>10)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=e^l;e=a^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=c^k;c=a^h;a=(g&16777215)+(r&16777215);
b=(a>>>24)+(g>>>24)+(r>>>24)+((l&65535)<<8)+((t&65535)<<8);l=((b>>>24)+(l>>>16)+(t>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(u&16777215);b=(a>>>24)+(c>>>24)+(u>>>24)+((d&65535)<<8)+((v&65535)<<8);d=((b>>>24)+(d>>>16)+(v>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(q&16777215);b=(a>>>24)+(h>>>24)+(q>>>24)+((k&65535)<<8)+((m&65535)<<8);k=((b>>>24)+(k>>>16)+(m>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(w&16777215)+16;b=(a>>>24)+(e>>>24)+(w>>>24)+((f&65535)<<
8)+((x&65535)<<8);f=((b>>>24)+(f>>>16)+(x>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<14|c>>>18)^l;c=(c<<14|a>>>18)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<16|e>>>16)^k;e=(e<<16|a>>>16)^h;a=(g&16777215)+(e&16777215);
b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<20|f>>>12)^l;e=(a<<20|e>>>12)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<25|d>>>7)^k;c=(a<<25|c>>>7)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<
24|a&16777215;a=d;d=(d<<23|c>>>9)^l;c=(c<<23|a>>>9)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<8|f>>>24)^k;e=(a<<8|e>>>24)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(f<<5|e>>>27)^l;e=(e<<5|a>>>27)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&
65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(c<<5|d>>>27)^k;c=(a<<5|c>>>27)^h;a=(g&16777215)+(u&16777215);b=(a>>>24)+(g>>>24)+(u>>>24)+((l&65535)<<8)+((v&65535)<<8);l=((b>>>24)+(l>>>16)+(v>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(q&16777215);b=(a>>>24)+(c>>>24)+(q>>>24)+((d&65535)<<8)+((m&65535)<<8);d=((b>>>24)+(d>>>16)+(m>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(w&16777215);b=(a>>>24)+(h>>>24)+(w>>>24)+((k&
65535)<<8)+((x&65535)<<8);k=((b>>>24)+(k>>>16)+(x>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(p&16777215)+17;b=(a>>>24)+(e>>>24)+(p>>>24)+((f&65535)<<8)+((n&65535)<<8);f=((b>>>24)+(f>>>16)+(n>>>16)<<16)+(b>>8&65535);e=b<<24|a&16777215;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(d<<25|c>>>7)^l;c=(c<<25|a>>>7)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+
((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(e<<1|f>>>31)^k;e=(a<<1|e>>>31)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=(e<<14|f>>>18)^l;e=(a<<14|e>>>18)^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=(d<<12|c>>>
20)^k;c=(c<<12|a>>>20)^h;a=(g&16777215)+(c&16777215);b=(a>>>24)+(g>>>24)+(c>>>24)+((l&65535)<<8)+((d&65535)<<8);l=((b>>>24)+(l>>>16)+(d>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=d;d=(c<<26|d>>>6)^l;c=(a<<26|c>>>6)^g;a=(h&16777215)+(e&16777215);b=(a>>>24)+(h>>>24)+(e>>>24)+((k&65535)<<8)+((f&65535)<<8);k=((b>>>24)+(k>>>16)+(f>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=f;f=(f<<22|e>>>10)^k;e=(e<<22|a>>>10)^h;a=(g&16777215)+(e&16777215);b=(a>>>24)+(g>>>24)+(e>>>24)+((l&65535)<<8)+((f&65535)<<8);
l=((b>>>24)+(l>>>16)+(f>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=f;f=e^l;e=a^g;a=(h&16777215)+(c&16777215);b=(a>>>24)+(h>>>24)+(c>>>24)+((k&65535)<<8)+((d&65535)<<8);k=((b>>>24)+(k>>>16)+(d>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=d;d=c^k;c=a^h;a=(g&16777215)+(q&16777215);b=(a>>>24)+(g>>>24)+(q>>>24)+((l&65535)<<8)+((m&65535)<<8);l=((b>>>24)+(l>>>16)+(m>>>16)<<16)+(b>>8&65535);g=b<<24|a&16777215;a=(c&16777215)+(w&16777215);b=(a>>>24)+(c>>>24)+(w>>>24)+((d&65535)<<8)+((x&65535)<<8);d=((b>>>
24)+(d>>>16)+(x>>>16)<<16)+(b>>8&65535);c=b<<24|a&16777215;a=(h&16777215)+(p&16777215);b=(a>>>24)+(h>>>24)+(p>>>24)+((k&65535)<<8)+((n&65535)<<8);k=((b>>>24)+(k>>>16)+(n>>>16)<<16)+(b>>8&65535);h=b<<24|a&16777215;a=(e&16777215)+(r&16777215)+18;b=(a>>>24)+(e>>>24)+(r>>>24)+((f&65535)<<8)+((t&65535)<<8);y[0]=g;y[1]=l;y[2]=c;y[3]=d;y[4]=h;y[5]=k;y[6]=b<<24|a&16777215;y[7]=((b>>>24)+(f>>>16)+(t>>>16)<<16)+(b>>8&65535)};"undefined"!==typeof exports&&(exports.h$Threefish_256_Process_Block=h$Threefish_256_Process_Block);
function h$_hs_text_memcpy(dst_v,dst_v_zero,dst_o2,src_v,src_o_zero,src_o2,n) {
  return h$memcpy(dst_v,2*dst_o2,src_v,2*src_o2,2*n);
}
function h$_hs_text_memcmp(a_v,a_o_zero,a_o2,b_v,b_o_zero,b_o2,n) {
  return h$memcmp(a_v,2*a_o2,b_v,2*b_o2,2*n);
}
var h$_text_utf8d =
   [
   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
   7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7, 7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
   8,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2, 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
  10,3,3,3,3,3,3,3,3,3,3,3,3,4,3,3, 11,6,6,6,5,8,8,8,8,8,8,8,8,8,8,8,
   0,12,24,36,60,96,84,12,12,12,48,72, 12,12,12,12,12,12,12,12,12,12,12,12,
  12, 0,12,12,12,12,12, 0,12, 0,12,12, 12,24,12,12,12,12,12,24,12,24,12,12,
  12,12,12,12,12,12,12,24,12,12,12,12, 12,24,12,12,12,12,12,12,12,24,12,12,
  12,12,12,12,12,12,12,36,12,36,12,12, 12,36,12,12,12,12,12,36,12,36,12,12,
  12,36,12,12,12,12,12,12,12,12,12,12];
function h$_hs_text_decode_utf8_internal ( dest_v, dest_o_zero
                                         , destoff_v, destoff_o
                                         , src_v, src_o
                                         , src_end_v, src_end_o
                                         , s
                                         ) {
  if(src_v === null || src_end_v === null) {
    { h$ret1 = (src_end_o); return (null); };
  }
  var dsto = destoff_v.dv.getUint32(destoff_o,true) << 1;
  var srco = src_o;
  var state = s.state;
  var codepoint = s.codepoint;
  var ddv = dest_v.dv;
  var sdv = src_v.dv;
  function decode(b) {
    var type = h$_text_utf8d[b];
    codepoint = (state !== 0) ?
      (b & 0x3f) | (codepoint << 6) :
      (0xff >>> type) & b;
    state = h$_text_utf8d[256 + state + type];
    return state;
  }
  while (srco < src_end_o) {
    if(decode(sdv.getUint8(srco++)) !== 0) {
      if(state !== 12) {
        continue;
      } else {
        break;
      }
    }
    if (codepoint <= 0xffff) {
      ddv.setUint16(dsto,codepoint,true);
      dsto += 2;
    } else {
      ddv.setUint16(dsto,(0xD7C0 + (codepoint >>> 10)),true);
      ddv.setUint16(dsto+2,(0xDC00 + (codepoint & 0x3FF)),true);
      dsto += 4;
    }
    s.last = srco;
  }
  s.state = state;
  s.codepoint = codepoint;
  destoff_v.dv.setUint32(destoff_o,dsto>>1,true);
  { h$ret1 = (s.last); return (src_v); };
}
function h$_hs_text_decode_utf8_state( dest_v, dest_o_zero
                                     , destoff_v, destoff_o
                                     , src_v, src_o
                                     , srcend_v, srcend_o
                                     , codepoint0_v, codepoint0_o
                                     , state0_v, state0_o
                                     ) {
  var s = { state: state0_v.dv.getUint32(state0_o, true)
          , codepoint: codepoint0_v.dv.getUint32(codepoint0_o, true)
          , last: src_o
          };
  var ret, ret1;
  { (ret) = (h$_hs_text_decode_utf8_internal ( dest_v, dest_o_zero , destoff_v, destoff_o , src_v.arr[src_o][0], src_v.arr[src_o][1] , srcend_v, srcend_o , s )); (ret1) = h$ret1; };
  src_v.arr[src_o][1] = s.last;
  state0_v.dv.setUint32(state0_o, s.state, true);
  codepoint0_v.dv.setUint32(codepoint0_o, s.codepoint, true);
  { h$ret1 = (ret1); return (ret); };
}
function h$_hs_text_decode_utf8( dest_v, dest_o_zero
                               , destoff_v, destoff_o
                               , src_v, src_o
                               , srcend_v, srcend_o
                               ) {
  var s = { state: 0
          , codepoint: 0
          , last: src_o
          };
  var ret, ret1;
  { (ret) = (h$_hs_text_decode_utf8_internal ( dest_v, dest_o_zero , destoff_v, destoff_o , src_v, src_o , srcend_v, srcend_o , s )); (ret1) = h$ret1; };
  { h$ret1 = (ret1); return (ret); };
}
function h$_hs_text_decode_latin1(dest_d, dest_o_zero, src_d, src_o, srcend_d, srcend_o) {
  var p = src_o;
  var d = 0;
  var su8 = src_d.u8;
  var su3 = src_d.u3;
  var du1 = dest_d.u1;
  while(p != srcend_o && p & 3) {
    du1[d++] = su8[p++];
  }
  if(su3) {
    while (p < srcend_o - 3) {
      var w = su3[p>>2];
      du1[d++] = w & 0xff;
      du1[d++] = (w >>> 8) & 0xff;
      du1[d++] = (w >>> 16) & 0xff;
      du1[d++] = (w >>> 32) & 0xff;
      p += 4;
    }
  }
  while (p != srcend_o)
    du1[d++] = su8[p++];
}
function h$_hs_text_encode_utf8(destp_v, destp_o, src_v, src_o_zero, srcoff, srclen) {
  var dest_v = destp_v.arr[destp_o][0];
  var dest_o = destp_v.arr[destp_o][1];
  var src = srcoff;
  var dest = dest_o;
  var srcend = src + srclen;
  var srcu1 = src_v.u1;
  if(!srcu1) throw "h$_hs_text_encode_utf8: invalid alignment for source";
  var srcu3 = src_v.u3;
  var destu8 = dest_v.u8;
  while(src < srcend) {
    while(srcu3 && !(src & 1) && srcend - src >= 2) {
      var w = srcu3[src>>1];
      if(w & 0xFF80FF80) break;
      destu8[dest++] = w & 0xFFFF;
      destu8[dest++] = w >>> 16;
      src += 2;
    }
    while(src < srcend) {
      var w = srcu1[src++];
      if(w <= 0x7F) {
        destu8[dest++] = w;
        break;
      } else if(w <= 0x7FF) {
        destu8[dest++] = (w >> 6) | 0xC0;
        destu8[dest++] = (w & 0x3f) | 0x80;
      } else if(w < 0xD800 || w > 0xDBFF) {
        destu8[dest++] = (w >>> 12) | 0xE0;
        destu8[dest++] = ((w >> 6) & 0x3F) | 0x80;
        destu8[dest++] = (w & 0x3F) | 0x80;
      } else {
        var c = ((w - 0xD800) << 10) + (srcu1[src++] - 0xDC00) + 0x10000;
        destu8[dest++] = (c >>> 18) | 0xF0;
        destu8[dest++] = ((c >> 12) & 0x3F) | 0x80;
        destu8[dest++] = ((c >> 6) & 0x3F) | 0x80;
        destu8[dest++] = (c & 0x3F) | 0x80;
      }
    }
  }
  destp_v.arr[destp_o][1] = dest;
}
function h$hsprimitive_memcpy(dst_d, dst_o, doff, src_d, src_o, soff, len) {
  return h$primitive_memmove(dst_d, dst_o, doff, src_d, src_o, len);
}
function h$hsprimitive_memmove(dst_d, dst_o, doff, src_d, src_o, soff, len) {
  if(len === 0) return;
  var du8 = dst_d.u8, su8 = src_d.u8;
  for(var i=len-1;i>=0;i--) {
    du8[dst_o+i] = su8[src_o+i];
  }
}
function h$hsprimitive_memsetba_Word8 (p_d, off, n, x) { if(n > 0) { if(p_d.u8.fill) p_d.u8.fill(x, off, off + n); else for(var i=off; i<off+n; i++) p_d.u8[i] = x; } }
function h$hsprimitive_memsetba_Word16 (p_d, off, n, x) { if(n > 0) { if(p_d.u1.fill) p_d.u1.fill(x, off, off + n); else for(var i=off; i<off+n; i++) p_d.u1[i] = x; } }
function h$hsprimitive_memsetba_Word32 (p_d, off, n, x) { if(n > 0) { if(p_d.i3.fill) p_d.i3.fill(x, off, off + n); else for(var i=off; i<off+n; i++) p_d.i3[i] = x; } }
function h$hsprimitive_memsetba_Word (p_d, off, n, x) { if(n > 0) { if(p_d.i3.fill) p_d.i3.fill(x, off, off + n); else for(var i=off; i<off+n; i++) p_d.i3[i] = x; } }
function h$hsprimitive_memsetba_Float (p_d, off, n, x) { if(n > 0) { if(p_d.f3.fill) p_d.f3.fill(x, off, off + n); else for(var i=off; i<off+n; i++) p_d.f3[i] = x; } }
function h$hsprimitive_memsetba_Double (p_d, off, n, x) { if(n > 0) { if(p_d.f6.fill) p_d.f6.fill(x, off, off + n); else for(var i=off; i<off+n; i++) p_d.f6[i] = x; } }
function h$hsprimitive_memsetba_Char (p_d, off, n, x) { if(n > 0) { if(p_d.i3.fill) p_d.i3.fill(x, off, off + n); else for(var i=off; i<off+n; i++) p_d.i3[i] = x; } }
function h$hsprimitive_memset_Word8 (p_d, p_o, off, n, x) { var start = (p_o >> 0) + off; if(n > 0) { if(p_d.u8.fill) p_d.u8.fill(x, start, start + n); else for(var i=start; i<start+n; i++) p_d.u8[i] = x; } }
function h$hsprimitive_memset_Word16 (p_d, p_o, off, n, x) { var start = (p_o >> 1) + off; if(n > 0) { if(p_d.u1.fill) p_d.u1.fill(x, start, start + n); else for(var i=start; i<start+n; i++) p_d.u1[i] = x; } }
function h$hsprimitive_memset_Word32 (p_d, p_o, off, n, x) { var start = (p_o >> 2) + off; if(n > 0) { if(p_d.i3.fill) p_d.i3.fill(x, start, start + n); else for(var i=start; i<start+n; i++) p_d.i3[i] = x; } }
function h$hsprimitive_memset_Word (p_d, p_o, off, n, x) { var start = (p_o >> 2) + off; if(n > 0) { if(p_d.i3.fill) p_d.i3.fill(x, start, start + n); else for(var i=start; i<start+n; i++) p_d.i3[i] = x; } }
function h$hsprimitive_memset_Float (p_d, p_o, off, n, x) { var start = (p_o >> 2) + off; if(n > 0) { if(p_d.f3.fill) p_d.f3.fill(x, start, start + n); else for(var i=start; i<start+n; i++) p_d.f3[i] = x; } }
function h$hsprimitive_memset_Double (p_d, p_o, off, n, x) { var start = (p_o >> 3) + off; if(n > 0) { if(p_d.f6.fill) p_d.f6.fill(x, start, start + n); else for(var i=start; i<start+n; i++) p_d.f6[i] = x; } }
function h$hsprimitive_memset_Char (p_d, p_o, off, n, x) { var start = (p_o >> 2) + off; if(n > 0) { if(p_d.i3.fill) p_d.i3.fill(x, start, start + n); else for(var i=start; i<start+n; i++) p_d.i3[i] = x; } }
function h$hsprimitive_memsetba_Word64(p_d, off, n, x_1, x_2) {
  h$hsprimitive_memset_Word64(p_d, 0, off, n, x_1, x_2);
}
function h$hsprimitive_memset_Word64(p_d, p_o, off, n, x_1, x_2) {
  var start = (p_o >> 3) + off;
  if(n > 0) {
    var pi3 = p_d.i3;
    for(var i = 0; i < n; i++) {
      var o = (start + i) << 1;
      pi3[o] = x_1;
      pi3[o+1] = x_2;
    }
  }
}
function h$hsprimitive_memset_Ptr(p_d, p_o, off, n, x_1, x_2) {
  if(n > 0) {
    if(!p_d.arr) p_d.arr = [];
    var a = p_d.arr;
    for(var i = 0; i < n; i++) {
      a[p_o + ((off + i) << 2)] = [x_1, x_2];
    }
  }
}
function h$hashable_fnv_hash_offset(str_a, str_o_zero, o, len, hash) {
  return h$hashable_fnv_hash(str_a, o, len, hash);
}
function h$hashable_fnv_hash(str_d, str_o, len, hash) {
  if(len > 0) {
    var d = str_d.u8;
    for(var i=0;i<len;i++) {
      hash = h$mulInt32(hash, 16777619) ^ d[str_o+i];
    }
  }
  return hash;
}
function h$hashable_getRandomBytes(dest_d, dest_o, len) {
  if(len > 0) {
    var d = dest_d.u8;
    for(var i=0;i<len;i++) {
      d[dest_o+i] = Math.floor(Math.random() * 256);
    }
  }
  return len;
}
function h$isFloat (n) {
  return n===+n && n!==(n|0);
}
function h$isInteger (n) {
  return n===+n && n===(n|0);
}
function h$typeOf(o) {
    if (!(o instanceof Object)) {
        if (o == null) {
            return 0;
        } else if (typeof o == 'number') {
            if (h$isInteger(o)) {
                return 1;
            } else {
                return 2;
            }
        } else if (typeof o == 'boolean') {
            return 3;
        } else {
            return 4;
        }
    } else {
        if (Object.prototype.toString.call(o) == '[object Array]') {
            return 5;
        } else if (!o) {
            return 0;
        } else {
            return 6;
        }
    }
}
function h$flattenObj(o) {
    var l = [], i = 0;
    for (var prop in o) {
        l[i++] = [prop, o[prop]];
    }
    return l;
}
function h$buildObject() {
    var r = {}, l = arguments.length;
    for(var i = 0; i < l; i += 2) {
        var k = arguments[i], v = arguments[i+1];
        r[k] = v;
    }
    return r;
}
function h$buildObjectFromList(xs) {
    var r = {}, k, v, t;
    while(((xs).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
        xs = ((xs).d2);
        t = ((xs).d2);
        if(((t).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
            k = ((xs).d1);
            v = ((t).d1);
            xs = ((t).d2);
            r[k] = v;
        } else {
            return r;
        }
    }
    return r;
}
function h$buildObjectFromTupList(xs) {
    var r = {};
    while(((xs).f === h$ghczmprimZCGHCziTypesziZC_con_e)) {
 var h = ((xs).d1);
 xs = ((xs).d2);
 r[((((h).d1)).d1)] = ((((h).d2)).d1);
    }
    return r;
}
function h$fps_reverse(a_v, a_o, b_v, b_o, n) {
    if(n > 0) {
        var au8 = a_v.u8, bu8 = b_v.u8;
        for(var i=0;i<n;i++) {
            au8[a_o+n-i-1] = bu8[b_o+i];
        }
    }
}
function h$fps_intersperse(a_v,a_o,b_v,b_o,n,c) {
    if(n > 0) {
        var au8 = a_v.u8, bu8 = b_v.u8, dst_o = a_o;
        for(var i=0;i<n-1;i++) {
            au8[dst_o] = bu8[b_o+i];
            au8[dst_o+1] = c;
            dst_o += 2;
        }
        au8[dst_o] = bu8[b_o+n-1];
    }
}
function h$fps_maximum(a_v,a_o,n) {
    if(n > 0) {
        var au8 = a_v.u8, max = au8[a_o];
        for(var i=1;i<n;i++) {
            var c = au8[a_o+i];
            if(c > max) { max = c; }
        }
        return max;
    }
    return 0;
}
function h$fps_minimum(a_v,a_o,n) {
    if(n > 0) {
        var au8 = a_v.u8, min = a_v.u8[a_o];
        for(var i=1;i<n;i++) {
            var c = au8[a_o+i];
            if(c < min) { min = c; }
        }
        return min;
    }
    return 255;
}
function h$fps_count(a_v,a_o,n,c) {
    if(n > 0) {
        var au8 = a_v.u8, count = 0;
        for(var i=0;i<n;i++) {
            if(au8[a_o+i] === c) { count++; }
        }
        return count|0;
    }
    return 0;
}
function h$fps_memcpy_offsets(dst_d, dst_o, dst_off
                              , src_d, src_o, src_off, n) {
    return memcpy(dst_d, dst_o + dst_off, src_d, src_o + src_off, n);
}
var h$_hs_bytestring_digits = [48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102];
var h$_hs_bytestring_l10 = goog.math.Long.fromBits(10, 0);
function h$_hs_bytestring_int_dec(x, buf_d, buf_o) {
    var c, ptr = buf_o, next_free, x_tmp;
    var bu8 = buf_d.u8;
    if(x < 0) {
        bu8[ptr++] = 45;
        buf_o++;
        x_tmp = x;
        x = (x / 10) | 0;
        bu8[ptr++] = h$_hs_bytestring_digits[x * 10 - x_tmp];
        if(x === 0) {
            { h$ret1 = (ptr); return (buf_d); };
        } else {
            x = -x;
        }
    }
    do {
        x_tmp = x;
        x = (x / 10) | 0;
        bu8[ptr++] = h$_hs_bytestring_digits[x_tmp - x * 10];
    } while (x);
    next_free = ptr--;
    while(buf_o < ptr) {
        c = bu8[ptr];
        bu8[ptr--] = bu8[buf_o];
        bu8[buf_o++] = c;
    }
    { h$ret1 = (next_free); return (buf_d); };
}
function h$_hs_bytestring_long_long_int_dec(x_a, x_b, buf_d, buf_o) {
    var l10 = h$_hs_bytestring_l10;
    var x = goog.math.Long.fromBits(x_b, x_a);
    var c, ptr = buf_o, next_free;
    var bu8 = buf_d.u8;
    if(x.isNegative()) {
        bu8[ptr++] = 45;
        buf_o++;
        x_tmp = x;
        x = x.div(l10);
        bu8[ptr++] = h$_hs_bytestring_digits[x.multiply(l10).subtract(x_tmp).getLowBits()];
        if(x.isZero()) {
            { h$ret1 = (ptr); return (buf_d); };
        } else {
            x = x.negate();
        }
    }
    do {
        x_tmp = x;
        x = x.div(l10);
        bu8[ptr++] = h$_hs_bytestring_digits[x_tmp.subtract(x.multiply(l10))];
    } while (!x.isZero());
    next_free = ptr--;
    while(buf_o < ptr) {
        c = bu8[ptr];
        bu8[ptr--] = bu8[buf_o];
        bu8[buf_o++] = c;
    }
    { h$ret1 = (next_free); return (buf_d); };
}
function h$_hs_bytestring_uint_dec(x, buf_d, buf_o) {
    var c, ptr = buf_o, next_free;
    var bu8 = buf_d.u8;
    var x_tmp;
    if(x < 0) x += 4294967296;
    do {
        x_tmp = x;
        x = (x / 10) | 0;
        bu8[ptr++] = h$_hs_bytestring_digits[x_tmp - x * 10];
    } while(x);
    next_free = ptr--;
    while(buf_o < ptr) {
        c = bu8[ptr];
        bu8[ptr--] = bu8[buf_o];
        bu8[buf_o++] = c;
    }
    { h$ret1 = (next_free); return (buf_d); };
}
function h$_hs_bytestring_long_long_uint_dec(x_a, x_b, buf_d, buf_o) {
    var c, ptr = buf_o, next_free;
    var bu8 = buf_d.u8;
    var x = h$ghcjsbn_mkBigNat_ww(x_a, x_b), q = [], r;
    do {
        r = h$ghcjsbn_quotRem_bw(q, x, 10);
        x = q;
        q = [];
        bu8[ptr++] = h$_hs_bytestring_digits[r];
    } while(!h$ghcjsbn_isZero_b(x));
    next_free = ptr--;
    while(buf_o < ptr) {
        c = bu8[ptr];
        bu8[ptr--] = bu8[buf_o];
        bu8[buf_o++] = c;
    }
    { h$ret1 = (next_free); return (buf_d); };
}
function h$_hs_bytestring_int_dec_padded9(x, buf_d, buf_o) {
    var max_width_int32_dec = 9;
    var ptr = buf_o + max_width_int32_dec;
    var bu8 = buf_d.u8;
    var x_tmp;
    do {
        x_tmp = x;
        x = (x / 10) | 0;
        bu8[--ptr] = h$_hs_bytestring_digits[x_tmp - x * 10];
    } while(x);
    while (buf_o < ptr) { bu8[--ptr] = 48; }
}
function h$_hs_bytestring_long_long_int_dec_padded18(x_a, x_b, buf_d, buf_o) {
    var l10 = h$_hs_bytestring_l10;
    var max_width_int64_dec = 18;
    var ptr = buf_o + max_width_int64_dec;
    var bu8 = buf_d.u8;
    var x = goog.math.Long.fromBits(x_b, x_a);
    do {
        x_tmp = x;
        x = x.div(l10);
        bu8[--ptr] = h$_hs_bytestring_digits[x_tmp.subtract(x.multiply(l10))];
    } while (!x.isZero());
    while (buf_o < ptr) { bu8[--ptr] = 48; }
}
function h$_hs_bytestring_uint_hex(x, buf_d, buf_o) {
    var c, ptr = buf_o, next_free;
    var bu8 = buf_d.u8;
    do {
        bu8[ptr++] = h$_hs_bytestring_digits[x & 0xf];
        x >>>= 4;
    } while(x);
    next_free = ptr--;
    while(buf_o < ptr) {
        c = bu8[ptr];
        bu8[ptr--] = bu8[buf_o];
        bu8[buf_o++] = c;
    }
    { h$ret1 = (next_free); return (buf_d); };
}
function h$_hs_bytestring_long_long_uint_hex(x_a, x_b, buf_d, buf_o) {
    var c, i, ptr = buf_o, next_free;
    var bu8 = buf_d.u8;
    if(x_a === 0 && x_b === 0) {
        bu8[ptr++] = 48;
    } else if(x_a === 0) {
      while(x_b !== 0) {
          bu8[ptr++] = h$_hs_bytestring_digits[x_b & 0xf];
          x_b >>>= 4;
      }
    } else {
        for(i=0;i<8;i++) {
            bu8[ptr++] = h$_hs_bytestring_digits[x_b & 0xf];
            x_b >>>= 4;
        }
        while(x_a !== 0) {
            bu8[ptr++] = h$_hs_bytestring_digits[x_a & 0xf];
            x_a >>>= 4;
        }
    }
    next_free = ptr--;
    while(buf_o < ptr) {
        c = bu8[ptr];
        bu8[ptr--] = bu8[buf_o];
        bu8[buf_o++] = c;
    }
    { h$ret1 = (next_free); return (buf_d); };
}
var Module = function(Module) {
  Module = Module || {};
var Module=typeof Module!=="undefined"?Module:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}Module["arguments"]=[];Module["thisProgram"]="./this.program";Module["quit"]=(function(status,toThrow){throw toThrow});Module["preRun"]=[];Module["postRun"]=[];var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;if(Module["ENVIRONMENT"]){if(Module["ENVIRONMENT"]==="WEB"){ENVIRONMENT_IS_WEB=true}else if(Module["ENVIRONMENT"]==="WORKER"){ENVIRONMENT_IS_WORKER=true}else if(Module["ENVIRONMENT"]==="NODE"){ENVIRONMENT_IS_NODE=true}else if(Module["ENVIRONMENT"]==="SHELL"){ENVIRONMENT_IS_SHELL=true}else{throw new Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.")}}else{ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof require==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER}if(ENVIRONMENT_IS_NODE){var nodeFS;var nodePath;Module["read"]=function shell_read(filename,binary){var ret;ret=tryParseAsDataURI(filename);if(!ret){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);ret=nodeFS["readFileSync"](filename)}return binary?ret:ret.toString()};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}Module["arguments"]=process["argv"].slice(2);process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));process["on"]("unhandledRejection",(function(reason,p){process["exit"](1)}));Module["inspect"]=(function(){return"[Emscripten Module object]"})}else if(ENVIRONMENT_IS_SHELL){if(typeof read!="undefined"){Module["read"]=function shell_read(f){var data=tryParseAsDataURI(f);if(data){return intArrayToString(data)}return read(f)}}Module["readBinary"]=function readBinary(f){var data;data=tryParseAsDataURI(f);if(data){return data}if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){Module["arguments"]=scriptArgs}else if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof quit==="function"){Module["quit"]=(function(status,toThrow){quit(status)})}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){Module["read"]=function shell_read(url){try{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText}catch(err){var data=tryParseAsDataURI(url);if(data){return intArrayToString(data)}throw err}};if(ENVIRONMENT_IS_WORKER){Module["readBinary"]=function readBinary(url){try{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}catch(err){var data=tryParseAsDataURI(url);if(data){return data}throw err}}}Module["readAsync"]=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}var data=tryParseAsDataURI(url);if(data){onload(data.buffer);return}onerror()};xhr.onerror=onerror;xhr.send(null)};if(typeof arguments!="undefined"){Module["arguments"]=arguments}Module["setWindowTitle"]=(function(title){document.title=title})}Module["print"]=typeof console!=="undefined"?console.log.bind(console):typeof print!=="undefined"?print:null;Module["printErr"]=typeof printErr!=="undefined"?printErr:typeof console!=="undefined"&&console.warn.bind(console)||Module["print"];Module.print=Module["print"];Module.printErr=Module["printErr"];for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=undefined;var STACK_ALIGN=16;function staticAlloc(size){assert(!staticSealed);var ret=STATICTOP;STATICTOP=STATICTOP+size+15&-16;return ret}function dynamicAlloc(size){assert(DYNAMICTOP_PTR);var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=ret+size+15&-16;HEAP32[DYNAMICTOP_PTR>>2]=end;if(end>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){HEAP32[DYNAMICTOP_PTR>>2]=ret;return 0}}return ret}function alignMemory(size,factor){if(!factor)factor=STACK_ALIGN;var ret=size=Math.ceil(size/factor)*factor;return ret}function getNativeTypeSize(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return 4}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0);return bits/8}else{return 0}}}}function warnOnce(text){if(!warnOnce.shown)warnOnce.shown={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;Module.printErr(text)}}var jsCallStartIndex=1;var functionPointers=new Array(0);var funcWrappers={};function dynCall(sig,ptr,args){if(args&&args.length){return Module["dynCall_"+sig].apply(null,[ptr].concat(args))}else{return Module["dynCall_"+sig].call(null,ptr)}}var GLOBAL_BASE=8;var ABORT=0;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];assert(func,"Cannot call unknown function "+ident+", make sure it is exported");return func}var JSfuncs={"stackSave":(function(){stackSave()}),"stackRestore":(function(){stackRestore()}),"arrayToC":(function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}),"stringToC":(function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret})};var toC={"string":JSfuncs["stringToC"],"array":JSfuncs["arrayToC"]};function ccall(ident,returnType,argTypes,args,opts){var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);if(returnType==="string")ret=Pointer_stringify(ret);if(stack!==0){stackRestore(stack)}return ret}function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=+1?tempDouble>+0?(Math_min(+Math_floor(tempDouble/+4294967296),+4294967295)|0)>>>0:~~+Math_ceil((tempDouble- +(~~tempDouble>>>0))/+4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}function getValue(ptr,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];default:abort("invalid type for getValue: "+type)}return null}var ALLOC_STATIC=2;var ALLOC_NONE=4;function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return UTF8ToString(ptr)}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx){var endPtr=idx;while(u8Array[endPtr])++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}}function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function demangle(func){return func}function demangleAll(text){var regex=/__Z[\w\d_]+/g;return text.replace(regex,(function(x){var y=demangle(x);return x===y?x:x+" ["+y+"]"}))}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferViews(){Module["HEAP8"]=HEAP8=new Int8Array(buffer);Module["HEAP16"]=HEAP16=new Int16Array(buffer);Module["HEAP32"]=HEAP32=new Int32Array(buffer);Module["HEAPU8"]=HEAPU8=new Uint8Array(buffer);Module["HEAPU16"]=HEAPU16=new Uint16Array(buffer);Module["HEAPU32"]=HEAPU32=new Uint32Array(buffer);Module["HEAPF32"]=HEAPF32=new Float32Array(buffer);Module["HEAPF64"]=HEAPF64=new Float64Array(buffer)}var STATIC_BASE,STATICTOP,staticSealed;var STACK_BASE,STACKTOP,STACK_MAX;var DYNAMIC_BASE,DYNAMICTOP_PTR;STATIC_BASE=STATICTOP=STACK_BASE=STACKTOP=STACK_MAX=DYNAMIC_BASE=DYNAMICTOP_PTR=0;staticSealed=false;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function enlargeMemory(){abortOnCannotGrowMemory()}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||16777216;if(TOTAL_MEMORY<TOTAL_STACK)Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+TOTAL_MEMORY+"! (TOTAL_STACK="+TOTAL_STACK+")");if(Module["buffer"]){buffer=Module["buffer"]}else{{buffer=new ArrayBuffer(TOTAL_MEMORY)}Module["buffer"]=buffer}updateGlobalBufferViews();function getTotalMemory(){return TOTAL_MEMORY}HEAP32[0]=1668509029;HEAP16[1]=25459;if(HEAPU8[2]!==115||HEAPU8[3]!==99)throw"Runtime error: expected the system to be little-endian!";function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var Math_abs=Math.abs;var Math_cos=Math.cos;var Math_sin=Math.sin;var Math_tan=Math.tan;var Math_acos=Math.acos;var Math_asin=Math.asin;var Math_atan=Math.atan;var Math_atan2=Math.atan2;var Math_exp=Math.exp;var Math_log=Math.log;var Math_sqrt=Math.sqrt;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_pow=Math.pow;var Math_imul=Math.imul;var Math_fround=Math.fround;var Math_round=Math.round;var Math_min=Math.min;var Math_max=Math.max;var Math_clz32=Math.clz32;var Math_trunc=Math.trunc;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};var memoryInitializer=null;var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return String.prototype.startsWith?filename.startsWith(dataURIPrefix):filename.indexOf(dataURIPrefix)===0}STATIC_BASE=GLOBAL_BASE;STATICTOP=STATIC_BASE+1280;__ATINIT__.push();memoryInitializer="data:application/octet-stream;base64,Iq4o15gvikLNZe8jkUQ3cS87TezP+8C1vNuJgaXbtek4tUjzW8JWORnQBbbxEfFZm08Zr6SCP5IYgW3a1V4cq0ICA6OYqgfYvm9wRQFbgxKMsuROvoUxJOK0/9XDfQxVb4l78nRdvnKxlhY7/rHegDUSxyWnBtyblCZpz3Txm8HSSvGewWmb5OMlTziGR77vtdWMi8adwQ9lnKx3zKEMJHUCK1lvLOktg+SmbqqEdErU+0G93KmwXLVTEYPaiPl2q99m7lJRPpgQMrQtbcYxqD8h+5jIJwOw5A7vvsd/Wb/Cj6g98wvgxiWnCpNHkafVb4ID4FFjygZwbg4KZykpFPwv0kaFCrcnJskmXDghGy7tKsRa/G0sTd+zlZ0TDThT3mOvi1RzCmWosnc8uwpqduau7UcuycKBOzWCFIUscpJkA/FMoei/ogEwQrxLZhqokZf40HCLS8IwvlQGo1FsxxhS79YZ6JLREKllVSQGmdYqIHFXhTUO9LjRuzJwoGoQyNDSuBbBpBlTq0FRCGw3Hpnrjt9Md0gnqEib4bW8sDRjWsnFswwcOcuKQeNKqthOc+Njd0/KnFujuLLW828uaPyy713ugo90YC8XQ29jpXhyq/ChFHjIhOw5ZBoIAseMKB5jI/r/vpDpvYLe62xQpBV5xrL3o/m+K1Ny4/J4ccacYSbqzj4nygfCwCHHuIbRHuvgzdZ92up40W7uf0999bpvF3KqZ/AGppjIosV9YwquDfm+BJg/ERtHHBM1C3EbhH0EI/V32yiTJMdAe6vKMry+yRUKvp48TA0QnMRnHUO2Qj7LvtTFTCp+ZfycKX9Z7PrWOqtvy18XWEdKjBlEbIA=";var tempDoublePtr=STATICTOP;STATICTOP+=16;function _llvm_bswap_i64(l,h){var retl=_llvm_bswap_i32(h)>>>0;var reth=_llvm_bswap_i32(l)>>>0;return(setTempRet0(reth),retl)|0}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}DYNAMICTOP_PTR=staticAlloc(4);STACK_BASE=STACKTOP=alignMemory(STATICTOP);STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=alignMemory(STACK_MAX);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;staticSealed=true;var ASSERTIONS=false;function intArrayToString(array){var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){if(ASSERTIONS){assert(false,"Character code "+chr+" ("+String.fromCharCode(chr)+")  at offset "+i+" not in 0x00-0xFF.")}chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")}var decodeBase64=typeof atob==="function"?atob:(function(input){var keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{enc1=keyStr.indexOf(input.charAt(i++));enc2=keyStr.indexOf(input.charAt(i++));enc3=keyStr.indexOf(input.charAt(i++));enc4=keyStr.indexOf(input.charAt(i++));chr1=enc1<<2|enc2>>4;chr2=(enc2&15)<<4|enc3>>2;chr3=(enc3&3)<<6|enc4;output=output+String.fromCharCode(chr1);if(enc3!==64){output=output+String.fromCharCode(chr2)}if(enc4!==64){output=output+String.fromCharCode(chr3)}}while(i<input.length);return output});function intArrayFromBase64(s){if(typeof ENVIRONMENT_IS_NODE==="boolean"&&ENVIRONMENT_IS_NODE){var buf;try{buf=Buffer.from(s,"base64")}catch(_){buf=new Buffer(s,"base64")}return new Uint8Array(buf.buffer,buf.byteOffset,buf.byteLength)}try{var decoded=decodeBase64(s);var bytes=new Uint8Array(decoded.length);for(var i=0;i<decoded.length;++i){bytes[i]=decoded.charCodeAt(i)}return bytes}catch(_){throw new Error("Converting base64 string to bytes failed.")}}function tryParseAsDataURI(filename){if(!isDataURI(filename)){return}return intArrayFromBase64(filename.slice(dataURIPrefix.length))}Module.asmGlobalArg={"Math":Math,"Int8Array":Int8Array,"Int16Array":Int16Array,"Int32Array":Int32Array,"Uint8Array":Uint8Array,"Uint16Array":Uint16Array,"Uint32Array":Uint32Array,"Float32Array":Float32Array,"Float64Array":Float64Array,"NaN":NaN,"Infinity":Infinity};Module.asmLibraryArg={"abort":abort,"assert":assert,"enlargeMemory":enlargeMemory,"getTotalMemory":getTotalMemory,"abortOnCannotGrowMemory":abortOnCannotGrowMemory,"___setErrNo":___setErrNo,"_emscripten_memcpy_big":_emscripten_memcpy_big,"_llvm_bswap_i64":_llvm_bswap_i64,"DYNAMICTOP_PTR":DYNAMICTOP_PTR,"tempDoublePtr":tempDoublePtr,"ABORT":ABORT,"STACKTOP":STACKTOP,"STACK_MAX":STACK_MAX};
var asm=( function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.DYNAMICTOP_PTR|0;var j=env.tempDoublePtr|0;var k=env.ABORT|0;var l=env.STACKTOP|0;var m=env.STACK_MAX|0;var n=0;var o=0;var p=0;var q=0;var r=global.NaN,s=global.Infinity;var t=0,u=0,v=0,w=0,x=0.0;var y=0;var z=global.Math.floor;var A=global.Math.abs;var B=global.Math.sqrt;var C=global.Math.pow;var D=global.Math.cos;var E=global.Math.sin;var F=global.Math.tan;var G=global.Math.acos;var H=global.Math.asin;var I=global.Math.atan;var J=global.Math.atan2;var K=global.Math.exp;var L=global.Math.log;var M=global.Math.ceil;var N=global.Math.imul;var O=global.Math.min;var P=global.Math.max;var Q=global.Math.clz32;var R=env.abort;var S=env.assert;var T=env.enlargeMemory;var U=env.getTotalMemory;var V=env.abortOnCannotGrowMemory;var W=env.___setErrNo;var X=env._emscripten_memcpy_big;var Y=env._llvm_bswap_i64;var Z=0.0;
function _(a){a=a|0;var b=0;b=l;l=l+a|0;l=l+15&-16;return b|0}function $(){return l|0}function aa(a){a=a|0;l=a}function ba(a,b){a=a|0;b=b|0;l=a;m=b}function ca(a,b){a=a|0;b=b|0;if(!n){n=a;o=b}}function da(a){a=a|0;y=a}function ea(){return y|0}function fa(a){a=a|0;var b=0;wa(a|0,0,144)|0;b=a+144|0;c[b>>2]=-205731576;c[b+4>>2]=1779033703;b=a+152|0;c[b>>2]=-2067093701;c[b+4>>2]=-1150833019;b=a+160|0;c[b>>2]=-23791573;c[b+4>>2]=1013904242;b=a+168|0;c[b>>2]=1595750129;c[b+4>>2]=-1521486534;b=a+176|0;c[b>>2]=-1377402159;c[b+4>>2]=1359893119;b=a+184|0;c[b>>2]=725511199;c[b+4>>2]=-1694144372;b=a+192|0;c[b>>2]=-79577749;c[b+4>>2]=528734635;a=a+200|0;c[a>>2]=327033209;c[a+4>>2]=1541459225;return}function ga(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;i=a;h=c[i>>2]|0;e=h&127;f=128-e|0;i=ta(h|0,c[i+4>>2]|0,d|0,0)|0;h=y;g=a;c[g>>2]=i;c[g+4>>2]=h;if(h>>>0<0|(h|0)==0&i>>>0<d>>>0){i=a+8|0;h=i;h=ta(c[h>>2]|0,c[h+4>>2]|0,1,0)|0;c[i>>2]=h;c[i+4>>2]=y}if(!((e|0)==0|f>>>0>d>>>0)){va(a+16+e|0,b|0,f|0)|0;ha(a,a+16|0);b=b+f|0;e=0;d=d-f|0}if(d>>>0>127){h=d+-128|0;i=h&-128;g=i+128|0;f=b;while(1){ha(a,f);d=d+-128|0;if(d>>>0<=127)break;else f=f+128|0}b=b+g|0;d=h-i|0}if(d|0)va(a+16+e|0,b|0,d|0)|0;return}function ha(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0;g=l;l=l+640|0;e=g;if(!(c&7))ka(e,c,16);else{f=e;d=f+128|0;do{a[f>>0]=a[c>>0]|0;f=f+1|0;c=c+1|0}while((f|0)<(d|0));ka(e,e,16)}la(b,e);l=g;return}function ia(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;d=l;l=l+16|0;e=d;g=a+8|0;g=sa(c[g>>2]|0,c[g+4>>2]|0,3)|0;i=y;h=a;f=c[h>>2]|0;h=c[h+4>>2]|0;j=ra(f|0,h|0,61)|0;i=ja(j|g,y|i)|0;g=e;c[g>>2]=i;c[g+4>>2]=y;h=sa(f|0,h|0,3)|0;h=ja(h,y)|0;g=e+8|0;c[g>>2]=h;c[g+4>>2]=y;f=f&127;ga(a,648,(f>>>0<112?112:240)-f|0);ga(a,e,16);ka(b,a+144|0,8);l=d;return}function ja(a,b){a=a|0;b=b|0;b=Y(a|0,b|0)|0;return b|0}function ka(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;if(d|0)while(1){d=d+-1|0;f=b;f=ja(c[f>>2]|0,c[f+4>>2]|0)|0;e=a;c[e>>2]=f;c[e+4>>2]=y;if(!d)break;else{b=b+8|0;a=a+8|0}}return}function la(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0;f=b;d=16;e=c[f>>2]|0;f=c[f+4>>2]|0;do{s=b+(d+-2<<3)|0;t=c[s>>2]|0;s=c[s+4>>2]|0;w=ma(t,s,19)|0;z=y;v=ma(t,s,61)|0;u=y;s=ra(t|0,s|0,6)|0;t=b+(d+-7<<3)|0;t=ta(s^w^v|0,y^z^u|0,c[t>>2]|0,c[t+4>>2]|0)|0;u=y;z=b+(d+-15<<3)|0;v=e;e=c[z>>2]|0;w=f;f=c[z+4>>2]|0;z=ma(e,f,1)|0;s=y;B=ma(e,f,8)|0;A=y;x=ra(e|0,f|0,7)|0;A=y^s^A;w=ta(t|0,u|0,v|0,w|0)|0;A=ta(w|0,y|0,x^z^B|0,A|0)|0;B=b+(d<<3)|0;c[B>>2]=A;c[B+4>>2]=y;d=d+1|0}while((d|0)!=80);w=a+144|0;n=w;x=a+152|0;p=x;z=a+160|0;r=z;A=a+168|0;t=A;B=a+176|0;g=B;u=a+184|0;j=u;v=a+192|0;i=v;e=a+200|0;l=e;d=0;f=c[g>>2]|0;a=c[g+4>>2]|0;g=c[i>>2]|0;h=c[j>>2]|0;i=c[i+4>>2]|0;j=c[j+4>>2]|0;k=c[l>>2]|0;l=c[l+4>>2]|0;m=c[n>>2]|0;n=c[n+4>>2]|0;o=c[p>>2]|0;p=c[p+4>>2]|0;q=c[r>>2]|0;r=c[r+4>>2]|0;s=c[t>>2]|0;t=c[t+4>>2]|0;while(1){Z=ma(f,a,14)|0;D=y;Y=ma(f,a,18)|0;D=y^D;O=ma(f,a,41)|0;D=D^y;V=8+(d<<3)|0;E=c[V>>2]|0;V=c[V+4>>2]|0;K=b+(d<<3)|0;U=c[K>>2]|0;K=c[K+4>>2]|0;C=ta((g^h)&f^g|0,(i^j)&a^i|0,k|0,l|0)|0;D=ta(C|0,y|0,Y^Z^O|0,D|0)|0;V=ta(D|0,y|0,E|0,V|0)|0;K=ta(V|0,y|0,U|0,K|0)|0;U=y;V=ma(m,n,28)|0;E=y;D=ma(m,n,34)|0;E=y^E;O=ma(m,n,39)|0;E=E^y;Z=ta(K|0,U|0,s|0,t|0)|0;Y=y;U=ta(K|0,U|0,(m|o)&q|m&o|0,(n|p)&r|n&p|0)|0;E=ta(U|0,y|0,D^V^O|0,E|0)|0;O=y;V=ma(Z,Y,14)|0;D=y;U=ma(Z,Y,18)|0;D=y^D;K=ma(Z,Y,41)|0;D=D^y;C=d|1;R=8+(C<<3)|0;H=c[R>>2]|0;R=c[R+4>>2]|0;C=b+(C<<3)|0;Q=c[C>>2]|0;C=c[C+4>>2]|0;I=ta(Z&(h^f)^h|0,Y&(j^a)^j|0,g|0,i|0)|0;D=ta(I|0,y|0,U^V^K|0,D|0)|0;R=ta(D|0,y|0,H|0,R|0)|0;C=ta(R|0,y|0,Q|0,C|0)|0;Q=y;R=ma(E,O,28)|0;H=y;D=ma(E,O,34)|0;H=y^H;K=ma(E,O,39)|0;H=H^y;V=ta(C|0,Q|0,q|0,r|0)|0;U=y;Q=ta(C|0,Q|0,(E|m)&o|E&m|0,(O|n)&p|O&n|0)|0;H=ta(Q|0,y|0,D^R^K|0,H|0)|0;K=y;R=ma(V,U,14)|0;D=y;Q=ma(V,U,18)|0;D=y^D;C=ma(V,U,41)|0;D=D^y;I=d|2;N=8+(I<<3)|0;G=c[N>>2]|0;N=c[N+4>>2]|0;I=b+(I<<3)|0;M=c[I>>2]|0;I=c[I+4>>2]|0;F=ta(V&(Z^f)^f|0,U&(Y^a)^a|0,h|0,j|0)|0;D=ta(F|0,y|0,Q^R^C|0,D|0)|0;N=ta(D|0,y|0,G|0,N|0)|0;I=ta(N|0,y|0,M|0,I|0)|0;M=y;N=ma(H,K,28)|0;G=y;D=ma(H,K,34)|0;G=y^G;C=ma(H,K,39)|0;G=G^y;R=ta(I|0,M|0,o|0,p|0)|0;Q=y;M=ta(I|0,M|0,(H|E)&m|H&E|0,(K|O)&n|K&O|0)|0;G=ta(M|0,y|0,D^N^C|0,G|0)|0;C=y;N=ma(R,Q,14)|0;D=y;M=ma(R,Q,18)|0;D=y^D;I=ma(R,Q,41)|0;D=D^y;F=d|3;W=8+(F<<3)|0;J=c[W>>2]|0;W=c[W+4>>2]|0;F=b+(F<<3)|0;X=c[F>>2]|0;F=c[F+4>>2]|0;P=ta(R&(V^Z)^Z|0,Q&(U^Y)^Y|0,f|0,a|0)|0;D=ta(P|0,y|0,M^N^I|0,D|0)|0;W=ta(D|0,y|0,J|0,W|0)|0;F=ta(W|0,y|0,X|0,F|0)|0;X=y;W=ma(G,C,28)|0;J=y;D=ma(G,C,34)|0;J=y^J;I=ma(G,C,39)|0;J=J^y;N=ta(F|0,X|0,m|0,n|0)|0;M=y;X=ta(F|0,X|0,(G|H)&E|G&H|0,(C|K)&O|C&K|0)|0;J=ta(X|0,y|0,D^W^I|0,J|0)|0;I=y;W=ma(N,M,14)|0;D=y;X=ma(N,M,18)|0;D=y^D;F=ma(N,M,41)|0;D=D^y;P=d|4;T=8+(P<<3)|0;S=c[T>>2]|0;T=c[T+4>>2]|0;P=b+(P<<3)|0;L=c[P>>2]|0;P=c[P+4>>2]|0;Y=ta(N&(R^V)^V|0,M&(Q^U)^U|0,Z|0,Y|0)|0;D=ta(Y|0,y|0,X^W^F|0,D|0)|0;T=ta(D|0,y|0,S|0,T|0)|0;P=ta(T|0,y|0,L|0,P|0)|0;L=y;T=ma(J,I,28)|0;S=y;D=ma(J,I,34)|0;S=y^S;F=ma(J,I,39)|0;S=S^y;k=ta(P|0,L|0,E|0,O|0)|0;l=y;L=ta(P|0,L|0,(J|G)&H|J&G|0,(I|C)&K|I&C|0)|0;s=ta(L|0,y|0,D^T^F|0,S|0)|0;t=y;S=ma(k,l,14)|0;F=y;T=ma(k,l,18)|0;F=y^F;D=ma(k,l,41)|0;F=F^y;L=d|5;P=8+(L<<3)|0;O=c[P>>2]|0;P=c[P+4>>2]|0;L=b+(L<<3)|0;E=c[L>>2]|0;L=c[L+4>>2]|0;U=ta(k&(N^R)^R|0,l&(M^Q)^Q|0,V|0,U|0)|0;F=ta(U|0,y|0,T^S^D|0,F|0)|0;P=ta(F|0,y|0,O|0,P|0)|0;L=ta(P|0,y|0,E|0,L|0)|0;E=y;P=ma(s,t,28)|0;O=y;F=ma(s,t,34)|0;O=y^O;D=ma(s,t,39)|0;O=O^y;g=ta(L|0,E|0,H|0,K|0)|0;i=y;E=ta(L|0,E|0,(s|J)&G|s&J|0,(t|I)&C|t&I|0)|0;q=ta(E|0,y|0,F^P^D|0,O|0)|0;r=y;O=ma(g,i,14)|0;D=y;P=ma(g,i,18)|0;D=y^D;F=ma(g,i,41)|0;D=D^y;E=d|6;L=8+(E<<3)|0;K=c[L>>2]|0;L=c[L+4>>2]|0;E=b+(E<<3)|0;H=c[E>>2]|0;E=c[E+4>>2]|0;Q=ta(g&(k^N)^N|0,i&(l^M)^M|0,R|0,Q|0)|0;D=ta(Q|0,y|0,P^O^F|0,D|0)|0;L=ta(D|0,y|0,K|0,L|0)|0;E=ta(L|0,y|0,H|0,E|0)|0;H=y;L=ma(q,r,28)|0;K=y;D=ma(q,r,34)|0;K=y^K;F=ma(q,r,39)|0;K=K^y;h=ta(E|0,H|0,G|0,C|0)|0;j=y;H=ta(E|0,H|0,(q|s)&J|q&s|0,(r|t)&I|r&t|0)|0;o=ta(H|0,y|0,D^L^F|0,K|0)|0;p=y;K=ma(h,j,14)|0;F=y;L=ma(h,j,18)|0;F=y^F;D=ma(h,j,41)|0;F=F^y;H=d|7;E=8+(H<<3)|0;C=c[E>>2]|0;E=c[E+4>>2]|0;H=b+(H<<3)|0;G=c[H>>2]|0;H=c[H+4>>2]|0;M=ta(h&(g^k)^k|0,j&(i^l)^l|0,N|0,M|0)|0;F=ta(M|0,y|0,L^K^D|0,F|0)|0;E=ta(F|0,y|0,C|0,E|0)|0;H=ta(E|0,y|0,G|0,H|0)|0;G=y;E=ma(o,p,28)|0;C=y;F=ma(o,p,34)|0;C=y^C;D=ma(o,p,39)|0;C=C^y;f=ta(H|0,G|0,J|0,I|0)|0;a=y;G=ta(H|0,G|0,(o|q)&s|o&q|0,(p|r)&t|p&r|0)|0;m=ta(G|0,y|0,F^E^D|0,C|0)|0;n=y;if((d|0)>=72)break;else d=d+8|0}Z=w;Z=ta(c[Z>>2]|0,c[Z+4>>2]|0,m|0,n|0)|0;Y=w;c[Y>>2]=Z;c[Y+4>>2]=y;Y=x;Y=ta(c[Y>>2]|0,c[Y+4>>2]|0,o|0,p|0)|0;Z=x;c[Z>>2]=Y;c[Z+4>>2]=y;Z=z;Z=ta(c[Z>>2]|0,c[Z+4>>2]|0,q|0,r|0)|0;Y=z;c[Y>>2]=Z;c[Y+4>>2]=y;Y=A;Y=ta(c[Y>>2]|0,c[Y+4>>2]|0,s|0,t|0)|0;Z=A;c[Z>>2]=Y;c[Z+4>>2]=y;Z=B;Z=ta(c[Z>>2]|0,c[Z+4>>2]|0,f|0,a|0)|0;Y=B;c[Y>>2]=Z;c[Y+4>>2]=y;Y=u;Y=ta(c[Y>>2]|0,c[Y+4>>2]|0,h|0,j|0)|0;Z=u;c[Z>>2]=Y;c[Z+4>>2]=y;Z=v;Z=ta(c[Z>>2]|0,c[Z+4>>2]|0,g|0,i|0)|0;Y=v;c[Y>>2]=Z;c[Y+4>>2]=y;Y=e;Y=ta(c[Y>>2]|0,c[Y+4>>2]|0,k|0,l|0)|0;Z=e;c[Z>>2]=Y;c[Z+4>>2]=y;return}function ma(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=ra(a|0,b|0,c|0)|0;e=y;c=sa(a|0,b|0,64-c|0)|0;y=y|e;return c|d|0}function na(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;x=l;l=l+16|0;p=x;do if(a>>>0<245){m=a>>>0<11?16:a+11&-8;a=m>>>3;o=c[194]|0;d=o>>>a;if(d&3|0){b=(d&1^1)+a|0;a=816+(b<<1<<2)|0;d=a+8|0;e=c[d>>2]|0;f=e+8|0;g=c[f>>2]|0;if((g|0)==(a|0))c[194]=o&~(1<<b);else{c[g+12>>2]=a;c[d>>2]=g}w=b<<3;c[e+4>>2]=w|3;w=e+w+4|0;c[w>>2]=c[w>>2]|1;w=f;l=x;return w|0}n=c[196]|0;if(m>>>0>n>>>0){if(d|0){b=2<<a;b=d<<a&(b|0-b);b=(b&0-b)+-1|0;i=b>>>12&16;b=b>>>i;d=b>>>5&8;b=b>>>d;g=b>>>2&4;b=b>>>g;a=b>>>1&2;b=b>>>a;e=b>>>1&1;e=(d|i|g|a|e)+(b>>>e)|0;b=816+(e<<1<<2)|0;a=b+8|0;g=c[a>>2]|0;i=g+8|0;d=c[i>>2]|0;if((d|0)==(b|0)){a=o&~(1<<e);c[194]=a}else{c[d+12>>2]=b;c[a>>2]=d;a=o}w=e<<3;h=w-m|0;c[g+4>>2]=m|3;f=g+m|0;c[f+4>>2]=h|1;c[g+w>>2]=h;if(n|0){e=c[199]|0;b=n>>>3;d=816+(b<<1<<2)|0;b=1<<b;if(!(a&b)){c[194]=a|b;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=e;c[b+12>>2]=e;c[e+8>>2]=b;c[e+12>>2]=d}c[196]=h;c[199]=f;w=i;l=x;return w|0}j=c[195]|0;if(j){d=(j&0-j)+-1|0;i=d>>>12&16;d=d>>>i;h=d>>>5&8;d=d>>>h;k=d>>>2&4;d=d>>>k;e=d>>>1&2;d=d>>>e;a=d>>>1&1;a=c[1080+((h|i|k|e|a)+(d>>>a)<<2)>>2]|0;d=(c[a+4>>2]&-8)-m|0;e=c[a+16+(((c[a+16>>2]|0)==0&1)<<2)>>2]|0;if(!e){k=a;h=d}else{do{i=(c[e+4>>2]&-8)-m|0;k=i>>>0<d>>>0;d=k?i:d;a=k?e:a;e=c[e+16+(((c[e+16>>2]|0)==0&1)<<2)>>2]|0}while((e|0)!=0);k=a;h=d}i=k+m|0;if(i>>>0>k>>>0){f=c[k+24>>2]|0;b=c[k+12>>2]|0;do if((b|0)==(k|0)){a=k+20|0;b=c[a>>2]|0;if(!b){a=k+16|0;b=c[a>>2]|0;if(!b){d=0;break}}while(1){d=b+20|0;e=c[d>>2]|0;if(e|0){b=e;a=d;continue}d=b+16|0;e=c[d>>2]|0;if(!e)break;else{b=e;a=d}}c[a>>2]=0;d=b}else{d=c[k+8>>2]|0;c[d+12>>2]=b;c[b+8>>2]=d;d=b}while(0);do if(f|0){b=c[k+28>>2]|0;a=1080+(b<<2)|0;if((k|0)==(c[a>>2]|0)){c[a>>2]=d;if(!d){c[195]=j&~(1<<b);break}}else{c[f+16+(((c[f+16>>2]|0)!=(k|0)&1)<<2)>>2]=d;if(!d)break}c[d+24>>2]=f;b=c[k+16>>2]|0;if(b|0){c[d+16>>2]=b;c[b+24>>2]=d}b=c[k+20>>2]|0;if(b|0){c[d+20>>2]=b;c[b+24>>2]=d}}while(0);if(h>>>0<16){w=h+m|0;c[k+4>>2]=w|3;w=k+w+4|0;c[w>>2]=c[w>>2]|1}else{c[k+4>>2]=m|3;c[i+4>>2]=h|1;c[i+h>>2]=h;if(n|0){e=c[199]|0;b=n>>>3;d=816+(b<<1<<2)|0;b=1<<b;if(!(o&b)){c[194]=o|b;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=e;c[b+12>>2]=e;c[e+8>>2]=b;c[e+12>>2]=d}c[196]=h;c[199]=i}w=k+8|0;l=x;return w|0}else n=m}else n=m}else n=m}else if(a>>>0<=4294967231){a=a+11|0;m=a&-8;k=c[195]|0;if(k){e=0-m|0;a=a>>>8;if(a)if(m>>>0>16777215)j=31;else{o=(a+1048320|0)>>>16&8;v=a<<o;n=(v+520192|0)>>>16&4;v=v<<n;j=(v+245760|0)>>>16&2;j=14-(n|o|j)+(v<<j>>>15)|0;j=m>>>(j+7|0)&1|j<<1}else j=0;d=c[1080+(j<<2)>>2]|0;a:do if(!d){d=0;a=0;v=57}else{a=0;i=d;h=m<<((j|0)==31?0:25-(j>>>1)|0);d=0;while(1){f=(c[i+4>>2]&-8)-m|0;if(f>>>0<e>>>0)if(!f){e=0;d=i;a=i;v=61;break a}else{a=i;e=f}f=c[i+20>>2]|0;i=c[i+16+(h>>>31<<2)>>2]|0;d=(f|0)==0|(f|0)==(i|0)?d:f;f=(i|0)==0;if(f){v=57;break}else h=h<<((f^1)&1)}}while(0);if((v|0)==57){if((d|0)==0&(a|0)==0){a=2<<j;a=k&(a|0-a);if(!a){n=m;break}o=(a&0-a)+-1|0;i=o>>>12&16;o=o>>>i;h=o>>>5&8;o=o>>>h;j=o>>>2&4;o=o>>>j;n=o>>>1&2;o=o>>>n;d=o>>>1&1;a=0;d=c[1080+((h|i|j|n|d)+(o>>>d)<<2)>>2]|0}if(!d){i=a;h=e}else v=61}if((v|0)==61)while(1){v=0;n=(c[d+4>>2]&-8)-m|0;o=n>>>0<e>>>0;e=o?n:e;a=o?d:a;d=c[d+16+(((c[d+16>>2]|0)==0&1)<<2)>>2]|0;if(!d){i=a;h=e;break}else v=61}if((i|0)!=0?h>>>0<((c[196]|0)-m|0)>>>0:0){g=i+m|0;if(g>>>0<=i>>>0){w=0;l=x;return w|0}f=c[i+24>>2]|0;b=c[i+12>>2]|0;do if((b|0)==(i|0)){a=i+20|0;b=c[a>>2]|0;if(!b){a=i+16|0;b=c[a>>2]|0;if(!b){b=0;break}}while(1){d=b+20|0;e=c[d>>2]|0;if(e|0){b=e;a=d;continue}d=b+16|0;e=c[d>>2]|0;if(!e)break;else{b=e;a=d}}c[a>>2]=0}else{w=c[i+8>>2]|0;c[w+12>>2]=b;c[b+8>>2]=w}while(0);do if(f){a=c[i+28>>2]|0;d=1080+(a<<2)|0;if((i|0)==(c[d>>2]|0)){c[d>>2]=b;if(!b){e=k&~(1<<a);c[195]=e;break}}else{c[f+16+(((c[f+16>>2]|0)!=(i|0)&1)<<2)>>2]=b;if(!b){e=k;break}}c[b+24>>2]=f;a=c[i+16>>2]|0;if(a|0){c[b+16>>2]=a;c[a+24>>2]=b}a=c[i+20>>2]|0;if(a){c[b+20>>2]=a;c[a+24>>2]=b;e=k}else e=k}else e=k;while(0);do if(h>>>0>=16){c[i+4>>2]=m|3;c[g+4>>2]=h|1;c[g+h>>2]=h;b=h>>>3;if(h>>>0<256){d=816+(b<<1<<2)|0;a=c[194]|0;b=1<<b;if(!(a&b)){c[194]=a|b;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=g;c[b+12>>2]=g;c[g+8>>2]=b;c[g+12>>2]=d;break}b=h>>>8;if(b)if(h>>>0>16777215)b=31;else{v=(b+1048320|0)>>>16&8;w=b<<v;u=(w+520192|0)>>>16&4;w=w<<u;b=(w+245760|0)>>>16&2;b=14-(u|v|b)+(w<<b>>>15)|0;b=h>>>(b+7|0)&1|b<<1}else b=0;d=1080+(b<<2)|0;c[g+28>>2]=b;a=g+16|0;c[a+4>>2]=0;c[a>>2]=0;a=1<<b;if(!(e&a)){c[195]=e|a;c[d>>2]=g;c[g+24>>2]=d;c[g+12>>2]=g;c[g+8>>2]=g;break}a=h<<((b|0)==31?0:25-(b>>>1)|0);d=c[d>>2]|0;while(1){if((c[d+4>>2]&-8|0)==(h|0)){v=97;break}e=d+16+(a>>>31<<2)|0;b=c[e>>2]|0;if(!b){v=96;break}else{a=a<<1;d=b}}if((v|0)==96){c[e>>2]=g;c[g+24>>2]=d;c[g+12>>2]=g;c[g+8>>2]=g;break}else if((v|0)==97){v=d+8|0;w=c[v>>2]|0;c[w+12>>2]=g;c[v>>2]=g;c[g+8>>2]=w;c[g+12>>2]=d;c[g+24>>2]=0;break}}else{w=h+m|0;c[i+4>>2]=w|3;w=i+w+4|0;c[w>>2]=c[w>>2]|1}while(0);w=i+8|0;l=x;return w|0}else n=m}else n=m}else n=-1;while(0);d=c[196]|0;if(d>>>0>=n>>>0){b=d-n|0;a=c[199]|0;if(b>>>0>15){w=a+n|0;c[199]=w;c[196]=b;c[w+4>>2]=b|1;c[a+d>>2]=b;c[a+4>>2]=n|3}else{c[196]=0;c[199]=0;c[a+4>>2]=d|3;w=a+d+4|0;c[w>>2]=c[w>>2]|1}w=a+8|0;l=x;return w|0}i=c[197]|0;if(i>>>0>n>>>0){u=i-n|0;c[197]=u;w=c[200]|0;v=w+n|0;c[200]=v;c[v+4>>2]=u|1;c[w+4>>2]=n|3;w=w+8|0;l=x;return w|0}if(!(c[312]|0)){c[314]=4096;c[313]=4096;c[315]=-1;c[316]=-1;c[317]=0;c[305]=0;c[312]=p&-16^1431655768;a=4096}else a=c[314]|0;j=n+48|0;k=n+47|0;h=a+k|0;f=0-a|0;m=h&f;if(m>>>0<=n>>>0){w=0;l=x;return w|0}a=c[304]|0;if(a|0?(o=c[302]|0,p=o+m|0,p>>>0<=o>>>0|p>>>0>a>>>0):0){w=0;l=x;return w|0}b:do if(!(c[305]&4)){d=c[200]|0;c:do if(d){e=1224;while(1){a=c[e>>2]|0;if(a>>>0<=d>>>0?(s=e+4|0,(a+(c[s>>2]|0)|0)>>>0>d>>>0):0)break;a=c[e+8>>2]|0;if(!a){v=118;break c}else e=a}b=h-i&f;if(b>>>0<2147483647){a=xa(b|0)|0;if((a|0)==((c[e>>2]|0)+(c[s>>2]|0)|0)){if((a|0)!=(-1|0)){h=b;g=a;v=135;break b}}else{e=a;v=126}}else b=0}else v=118;while(0);do if((v|0)==118){d=xa(0)|0;if((d|0)!=(-1|0)?(b=d,q=c[313]|0,r=q+-1|0,b=((r&b|0)==0?0:(r+b&0-q)-b|0)+m|0,q=c[302]|0,r=b+q|0,b>>>0>n>>>0&b>>>0<2147483647):0){s=c[304]|0;if(s|0?r>>>0<=q>>>0|r>>>0>s>>>0:0){b=0;break}a=xa(b|0)|0;if((a|0)==(d|0)){h=b;g=d;v=135;break b}else{e=a;v=126}}else b=0}while(0);do if((v|0)==126){d=0-b|0;if(!(j>>>0>b>>>0&(b>>>0<2147483647&(e|0)!=(-1|0))))if((e|0)==(-1|0)){b=0;break}else{h=b;g=e;v=135;break b}a=c[314]|0;a=k-b+a&0-a;if(a>>>0>=2147483647){h=b;g=e;v=135;break b}if((xa(a|0)|0)==(-1|0)){xa(d|0)|0;b=0;break}else{h=a+b|0;g=e;v=135;break b}}while(0);c[305]=c[305]|4;v=133}else{b=0;v=133}while(0);if(((v|0)==133?m>>>0<2147483647:0)?(g=xa(m|0)|0,s=xa(0)|0,t=s-g|0,u=t>>>0>(n+40|0)>>>0,!((g|0)==(-1|0)|u^1|g>>>0<s>>>0&((g|0)!=(-1|0)&(s|0)!=(-1|0))^1)):0){h=u?t:b;v=135}if((v|0)==135){b=(c[302]|0)+h|0;c[302]=b;if(b>>>0>(c[303]|0)>>>0)c[303]=b;j=c[200]|0;do if(j){b=1224;while(1){a=c[b>>2]|0;d=b+4|0;e=c[d>>2]|0;if((g|0)==(a+e|0)){v=143;break}f=c[b+8>>2]|0;if(!f)break;else b=f}if(((v|0)==143?(c[b+12>>2]&8|0)==0:0)?g>>>0>j>>>0&a>>>0<=j>>>0:0){c[d>>2]=e+h;w=(c[197]|0)+h|0;u=j+8|0;u=(u&7|0)==0?0:0-u&7;v=j+u|0;u=w-u|0;c[200]=v;c[197]=u;c[v+4>>2]=u|1;c[j+w+4>>2]=40;c[201]=c[316];break}if(g>>>0<(c[198]|0)>>>0)c[198]=g;a=g+h|0;b=1224;while(1){if((c[b>>2]|0)==(a|0)){v=151;break}b=c[b+8>>2]|0;if(!b){a=1224;break}}if((v|0)==151)if(!(c[b+12>>2]&8)){c[b>>2]=g;m=b+4|0;c[m>>2]=(c[m>>2]|0)+h;m=g+8|0;m=g+((m&7|0)==0?0:0-m&7)|0;b=a+8|0;b=a+((b&7|0)==0?0:0-b&7)|0;k=m+n|0;i=b-m-n|0;c[m+4>>2]=n|3;do if((j|0)!=(b|0)){if((c[199]|0)==(b|0)){w=(c[196]|0)+i|0;c[196]=w;c[199]=k;c[k+4>>2]=w|1;c[k+w>>2]=w;break}a=c[b+4>>2]|0;if((a&3|0)==1){h=a&-8;e=a>>>3;d:do if(a>>>0<256){a=c[b+8>>2]|0;d=c[b+12>>2]|0;if((d|0)==(a|0)){c[194]=c[194]&~(1<<e);break}else{c[a+12>>2]=d;c[d+8>>2]=a;break}}else{g=c[b+24>>2]|0;a=c[b+12>>2]|0;do if((a|0)==(b|0)){e=b+16|0;d=e+4|0;a=c[d>>2]|0;if(!a){a=c[e>>2]|0;if(!a){a=0;break}else d=e}while(1){e=a+20|0;f=c[e>>2]|0;if(f|0){a=f;d=e;continue}e=a+16|0;f=c[e>>2]|0;if(!f)break;else{a=f;d=e}}c[d>>2]=0}else{w=c[b+8>>2]|0;c[w+12>>2]=a;c[a+8>>2]=w}while(0);if(!g)break;d=c[b+28>>2]|0;e=1080+(d<<2)|0;do if((c[e>>2]|0)!=(b|0)){c[g+16+(((c[g+16>>2]|0)!=(b|0)&1)<<2)>>2]=a;if(!a)break d}else{c[e>>2]=a;if(a|0)break;c[195]=c[195]&~(1<<d);break d}while(0);c[a+24>>2]=g;d=b+16|0;e=c[d>>2]|0;if(e|0){c[a+16>>2]=e;c[e+24>>2]=a}d=c[d+4>>2]|0;if(!d)break;c[a+20>>2]=d;c[d+24>>2]=a}while(0);b=b+h|0;f=h+i|0}else f=i;b=b+4|0;c[b>>2]=c[b>>2]&-2;c[k+4>>2]=f|1;c[k+f>>2]=f;b=f>>>3;if(f>>>0<256){d=816+(b<<1<<2)|0;a=c[194]|0;b=1<<b;if(!(a&b)){c[194]=a|b;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=k;c[b+12>>2]=k;c[k+8>>2]=b;c[k+12>>2]=d;break}b=f>>>8;do if(!b)b=0;else{if(f>>>0>16777215){b=31;break}v=(b+1048320|0)>>>16&8;w=b<<v;u=(w+520192|0)>>>16&4;w=w<<u;b=(w+245760|0)>>>16&2;b=14-(u|v|b)+(w<<b>>>15)|0;b=f>>>(b+7|0)&1|b<<1}while(0);e=1080+(b<<2)|0;c[k+28>>2]=b;a=k+16|0;c[a+4>>2]=0;c[a>>2]=0;a=c[195]|0;d=1<<b;if(!(a&d)){c[195]=a|d;c[e>>2]=k;c[k+24>>2]=e;c[k+12>>2]=k;c[k+8>>2]=k;break}a=f<<((b|0)==31?0:25-(b>>>1)|0);d=c[e>>2]|0;while(1){if((c[d+4>>2]&-8|0)==(f|0)){v=192;break}e=d+16+(a>>>31<<2)|0;b=c[e>>2]|0;if(!b){v=191;break}else{a=a<<1;d=b}}if((v|0)==191){c[e>>2]=k;c[k+24>>2]=d;c[k+12>>2]=k;c[k+8>>2]=k;break}else if((v|0)==192){v=d+8|0;w=c[v>>2]|0;c[w+12>>2]=k;c[v>>2]=k;c[k+8>>2]=w;c[k+12>>2]=d;c[k+24>>2]=0;break}}else{w=(c[197]|0)+i|0;c[197]=w;c[200]=k;c[k+4>>2]=w|1}while(0);w=m+8|0;l=x;return w|0}else a=1224;while(1){b=c[a>>2]|0;if(b>>>0<=j>>>0?(w=b+(c[a+4>>2]|0)|0,w>>>0>j>>>0):0)break;a=c[a+8>>2]|0}f=w+-47|0;a=f+8|0;a=f+((a&7|0)==0?0:0-a&7)|0;f=j+16|0;a=a>>>0<f>>>0?j:a;b=a+8|0;d=h+-40|0;u=g+8|0;u=(u&7|0)==0?0:0-u&7;v=g+u|0;u=d-u|0;c[200]=v;c[197]=u;c[v+4>>2]=u|1;c[g+d+4>>2]=40;c[201]=c[316];d=a+4|0;c[d>>2]=27;c[b>>2]=c[306];c[b+4>>2]=c[307];c[b+8>>2]=c[308];c[b+12>>2]=c[309];c[306]=g;c[307]=h;c[309]=0;c[308]=b;b=a+24|0;do{v=b;b=b+4|0;c[b>>2]=7}while((v+8|0)>>>0<w>>>0);if((a|0)!=(j|0)){g=a-j|0;c[d>>2]=c[d>>2]&-2;c[j+4>>2]=g|1;c[a>>2]=g;b=g>>>3;if(g>>>0<256){d=816+(b<<1<<2)|0;a=c[194]|0;b=1<<b;if(!(a&b)){c[194]=a|b;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=j;c[b+12>>2]=j;c[j+8>>2]=b;c[j+12>>2]=d;break}b=g>>>8;if(b)if(g>>>0>16777215)d=31;else{v=(b+1048320|0)>>>16&8;w=b<<v;u=(w+520192|0)>>>16&4;w=w<<u;d=(w+245760|0)>>>16&2;d=14-(u|v|d)+(w<<d>>>15)|0;d=g>>>(d+7|0)&1|d<<1}else d=0;e=1080+(d<<2)|0;c[j+28>>2]=d;c[j+20>>2]=0;c[f>>2]=0;b=c[195]|0;a=1<<d;if(!(b&a)){c[195]=b|a;c[e>>2]=j;c[j+24>>2]=e;c[j+12>>2]=j;c[j+8>>2]=j;break}a=g<<((d|0)==31?0:25-(d>>>1)|0);d=c[e>>2]|0;while(1){if((c[d+4>>2]&-8|0)==(g|0)){v=213;break}e=d+16+(a>>>31<<2)|0;b=c[e>>2]|0;if(!b){v=212;break}else{a=a<<1;d=b}}if((v|0)==212){c[e>>2]=j;c[j+24>>2]=d;c[j+12>>2]=j;c[j+8>>2]=j;break}else if((v|0)==213){v=d+8|0;w=c[v>>2]|0;c[w+12>>2]=j;c[v>>2]=j;c[j+8>>2]=w;c[j+12>>2]=d;c[j+24>>2]=0;break}}}else{w=c[198]|0;if((w|0)==0|g>>>0<w>>>0)c[198]=g;c[306]=g;c[307]=h;c[309]=0;c[203]=c[312];c[202]=-1;c[207]=816;c[206]=816;c[209]=824;c[208]=824;c[211]=832;c[210]=832;c[213]=840;c[212]=840;c[215]=848;c[214]=848;c[217]=856;c[216]=856;c[219]=864;c[218]=864;c[221]=872;c[220]=872;c[223]=880;c[222]=880;c[225]=888;c[224]=888;c[227]=896;c[226]=896;c[229]=904;c[228]=904;c[231]=912;c[230]=912;c[233]=920;c[232]=920;c[235]=928;c[234]=928;c[237]=936;c[236]=936;c[239]=944;c[238]=944;c[241]=952;c[240]=952;c[243]=960;c[242]=960;c[245]=968;c[244]=968;c[247]=976;c[246]=976;c[249]=984;c[248]=984;c[251]=992;c[250]=992;c[253]=1e3;c[252]=1e3;c[255]=1008;c[254]=1008;c[257]=1016;c[256]=1016;c[259]=1024;c[258]=1024;c[261]=1032;c[260]=1032;c[263]=1040;c[262]=1040;c[265]=1048;c[264]=1048;c[267]=1056;c[266]=1056;c[269]=1064;c[268]=1064;w=h+-40|0;u=g+8|0;u=(u&7|0)==0?0:0-u&7;v=g+u|0;u=w-u|0;c[200]=v;c[197]=u;c[v+4>>2]=u|1;c[g+w+4>>2]=40;c[201]=c[316]}while(0);b=c[197]|0;if(b>>>0>n>>>0){u=b-n|0;c[197]=u;w=c[200]|0;v=w+n|0;c[200]=v;c[v+4>>2]=u|1;c[w+4>>2]=n|3;w=w+8|0;l=x;return w|0}}c[(pa()|0)>>2]=12;w=0;l=x;return w|0}function oa(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;if(!a)return;d=a+-8|0;f=c[198]|0;a=c[a+-4>>2]|0;b=a&-8;j=d+b|0;do if(!(a&1)){e=c[d>>2]|0;if(!(a&3))return;h=d+(0-e)|0;g=e+b|0;if(h>>>0<f>>>0)return;if((c[199]|0)==(h|0)){a=j+4|0;b=c[a>>2]|0;if((b&3|0)!=3){i=h;b=g;break}c[196]=g;c[a>>2]=b&-2;c[h+4>>2]=g|1;c[h+g>>2]=g;return}d=e>>>3;if(e>>>0<256){a=c[h+8>>2]|0;b=c[h+12>>2]|0;if((b|0)==(a|0)){c[194]=c[194]&~(1<<d);i=h;b=g;break}else{c[a+12>>2]=b;c[b+8>>2]=a;i=h;b=g;break}}f=c[h+24>>2]|0;a=c[h+12>>2]|0;do if((a|0)==(h|0)){d=h+16|0;b=d+4|0;a=c[b>>2]|0;if(!a){a=c[d>>2]|0;if(!a){a=0;break}else b=d}while(1){d=a+20|0;e=c[d>>2]|0;if(e|0){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}c[b>>2]=0}else{i=c[h+8>>2]|0;c[i+12>>2]=a;c[a+8>>2]=i}while(0);if(f){b=c[h+28>>2]|0;d=1080+(b<<2)|0;if((c[d>>2]|0)==(h|0)){c[d>>2]=a;if(!a){c[195]=c[195]&~(1<<b);i=h;b=g;break}}else{c[f+16+(((c[f+16>>2]|0)!=(h|0)&1)<<2)>>2]=a;if(!a){i=h;b=g;break}}c[a+24>>2]=f;b=h+16|0;d=c[b>>2]|0;if(d|0){c[a+16>>2]=d;c[d+24>>2]=a}b=c[b+4>>2]|0;if(b){c[a+20>>2]=b;c[b+24>>2]=a;i=h;b=g}else{i=h;b=g}}else{i=h;b=g}}else{i=d;h=d}while(0);if(h>>>0>=j>>>0)return;a=j+4|0;e=c[a>>2]|0;if(!(e&1))return;if(!(e&2)){if((c[200]|0)==(j|0)){j=(c[197]|0)+b|0;c[197]=j;c[200]=i;c[i+4>>2]=j|1;if((i|0)!=(c[199]|0))return;c[199]=0;c[196]=0;return}if((c[199]|0)==(j|0)){j=(c[196]|0)+b|0;c[196]=j;c[199]=h;c[i+4>>2]=j|1;c[h+j>>2]=j;return}f=(e&-8)+b|0;d=e>>>3;do if(e>>>0<256){b=c[j+8>>2]|0;a=c[j+12>>2]|0;if((a|0)==(b|0)){c[194]=c[194]&~(1<<d);break}else{c[b+12>>2]=a;c[a+8>>2]=b;break}}else{g=c[j+24>>2]|0;a=c[j+12>>2]|0;do if((a|0)==(j|0)){d=j+16|0;b=d+4|0;a=c[b>>2]|0;if(!a){a=c[d>>2]|0;if(!a){d=0;break}else b=d}while(1){d=a+20|0;e=c[d>>2]|0;if(e|0){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}c[b>>2]=0;d=a}else{d=c[j+8>>2]|0;c[d+12>>2]=a;c[a+8>>2]=d;d=a}while(0);if(g|0){a=c[j+28>>2]|0;b=1080+(a<<2)|0;if((c[b>>2]|0)==(j|0)){c[b>>2]=d;if(!d){c[195]=c[195]&~(1<<a);break}}else{c[g+16+(((c[g+16>>2]|0)!=(j|0)&1)<<2)>>2]=d;if(!d)break}c[d+24>>2]=g;a=j+16|0;b=c[a>>2]|0;if(b|0){c[d+16>>2]=b;c[b+24>>2]=d}a=c[a+4>>2]|0;if(a|0){c[d+20>>2]=a;c[a+24>>2]=d}}}while(0);c[i+4>>2]=f|1;c[h+f>>2]=f;if((i|0)==(c[199]|0)){c[196]=f;return}}else{c[a>>2]=e&-2;c[i+4>>2]=b|1;c[h+b>>2]=b;f=b}a=f>>>3;if(f>>>0<256){d=816+(a<<1<<2)|0;b=c[194]|0;a=1<<a;if(!(b&a)){c[194]=b|a;a=d;b=d+8|0}else{b=d+8|0;a=c[b>>2]|0}c[b>>2]=i;c[a+12>>2]=i;c[i+8>>2]=a;c[i+12>>2]=d;return}a=f>>>8;if(a)if(f>>>0>16777215)a=31;else{h=(a+1048320|0)>>>16&8;j=a<<h;g=(j+520192|0)>>>16&4;j=j<<g;a=(j+245760|0)>>>16&2;a=14-(g|h|a)+(j<<a>>>15)|0;a=f>>>(a+7|0)&1|a<<1}else a=0;e=1080+(a<<2)|0;c[i+28>>2]=a;c[i+20>>2]=0;c[i+16>>2]=0;b=c[195]|0;d=1<<a;do if(b&d){b=f<<((a|0)==31?0:25-(a>>>1)|0);d=c[e>>2]|0;while(1){if((c[d+4>>2]&-8|0)==(f|0)){a=73;break}e=d+16+(b>>>31<<2)|0;a=c[e>>2]|0;if(!a){a=72;break}else{b=b<<1;d=a}}if((a|0)==72){c[e>>2]=i;c[i+24>>2]=d;c[i+12>>2]=i;c[i+8>>2]=i;break}else if((a|0)==73){h=d+8|0;j=c[h>>2]|0;c[j+12>>2]=i;c[h>>2]=i;c[i+8>>2]=j;c[i+12>>2]=d;c[i+24>>2]=0;break}}else{c[195]=b|d;c[e>>2]=i;c[i+24>>2]=e;c[i+12>>2]=i;c[i+8>>2]=i}while(0);j=(c[202]|0)+-1|0;c[202]=j;if(!j)a=1232;else return;while(1){a=c[a>>2]|0;if(!a)break;else a=a+8|0}c[202]=-1;return}function pa(){return 1272}function qa(){}function ra(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){y=b>>>c;return a>>>c|(b&(1<<c)-1)<<32-c}y=0;return b>>>c-32|0}function sa(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){y=b<<c|(a&(1<<c)-1<<32-c)>>>32-c;return a<<c}y=a<<c-32;return 0}function ta(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;c=a+c>>>0;return (y=b+d+(c>>>0<a>>>0|0)>>>0,c|0)|0}function ua(a){a=a|0;return (a&255)<<24|(a>>8&255)<<16|(a>>16&255)<<8|a>>>24|0}function va(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;if((e|0)>=8192)return X(b|0,d|0,e|0)|0;h=b|0;g=b+e|0;if((b&3)==(d&3)){while(b&3){if(!e)return h|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}e=g&-4|0;f=e-64|0;while((b|0)<=(f|0)){c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];c[b+16>>2]=c[d+16>>2];c[b+20>>2]=c[d+20>>2];c[b+24>>2]=c[d+24>>2];c[b+28>>2]=c[d+28>>2];c[b+32>>2]=c[d+32>>2];c[b+36>>2]=c[d+36>>2];c[b+40>>2]=c[d+40>>2];c[b+44>>2]=c[d+44>>2];c[b+48>>2]=c[d+48>>2];c[b+52>>2]=c[d+52>>2];c[b+56>>2]=c[d+56>>2];c[b+60>>2]=c[d+60>>2];b=b+64|0;d=d+64|0}while((b|0)<(e|0)){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0}}else{e=g-4|0;while((b|0)<(e|0)){a[b>>0]=a[d>>0]|0;a[b+1>>0]=a[d+1>>0]|0;a[b+2>>0]=a[d+2>>0]|0;a[b+3>>0]=a[d+3>>0]|0;b=b+4|0;d=d+4|0}}while((b|0)<(g|0)){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0}return h|0}function wa(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;h=b+e|0;d=d&255;if((e|0)>=67){while(b&3){a[b>>0]=d;b=b+1|0}f=h&-4|0;g=f-64|0;i=d|d<<8|d<<16|d<<24;while((b|0)<=(g|0)){c[b>>2]=i;c[b+4>>2]=i;c[b+8>>2]=i;c[b+12>>2]=i;c[b+16>>2]=i;c[b+20>>2]=i;c[b+24>>2]=i;c[b+28>>2]=i;c[b+32>>2]=i;c[b+36>>2]=i;c[b+40>>2]=i;c[b+44>>2]=i;c[b+48>>2]=i;c[b+52>>2]=i;c[b+56>>2]=i;c[b+60>>2]=i;b=b+64|0}while((b|0)<(f|0)){c[b>>2]=i;b=b+4|0}}while((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}return h-e|0}function xa(a){a=a|0;var b=0,d=0;d=c[i>>2]|0;b=d+a|0;if((a|0)>0&(b|0)<(d|0)|(b|0)<0){V()|0;W(12);return -1}c[i>>2]=b;if((b|0)>(U()|0)?(T()|0)==0:0){c[i>>2]=d;W(12);return -1}return d|0}
return{___errno_location:pa,_bitshift64Lshr:ra,_bitshift64Shl:sa,_free:oa,_hs_cryptohash_sha512_finalize:ia,_hs_cryptohash_sha512_init:fa,_hs_cryptohash_sha512_update:ga,_i64Add:ta,_llvm_bswap_i32:ua,_malloc:na,_memcpy:va,_memset:wa,_sbrk:xa,establishStackSpace:ba,getTempRet0:ea,runPostSets:qa,setTempRet0:da,setThrew:ca,stackAlloc:_,stackRestore:aa,stackSave:$}})
(Module.asmGlobalArg,Module.asmLibraryArg,buffer);var ___errno_location=Module["___errno_location"]=asm["___errno_location"];var _bitshift64Lshr=Module["_bitshift64Lshr"]=asm["_bitshift64Lshr"];var _bitshift64Shl=Module["_bitshift64Shl"]=asm["_bitshift64Shl"];var _free=Module["_free"]=asm["_free"];var _hs_cryptohash_sha512_finalize=Module["_hs_cryptohash_sha512_finalize"]=asm["_hs_cryptohash_sha512_finalize"];var _hs_cryptohash_sha512_init=Module["_hs_cryptohash_sha512_init"]=asm["_hs_cryptohash_sha512_init"];var _hs_cryptohash_sha512_update=Module["_hs_cryptohash_sha512_update"]=asm["_hs_cryptohash_sha512_update"];var _i64Add=Module["_i64Add"]=asm["_i64Add"];var _llvm_bswap_i32=Module["_llvm_bswap_i32"]=asm["_llvm_bswap_i32"];var _malloc=Module["_malloc"]=asm["_malloc"];var _memcpy=Module["_memcpy"]=asm["_memcpy"];var _memset=Module["_memset"]=asm["_memset"];var _sbrk=Module["_sbrk"]=asm["_sbrk"];var establishStackSpace=Module["establishStackSpace"]=asm["establishStackSpace"];var getTempRet0=Module["getTempRet0"]=asm["getTempRet0"];var runPostSets=Module["runPostSets"]=asm["runPostSets"];var setTempRet0=Module["setTempRet0"]=asm["setTempRet0"];var setThrew=Module["setThrew"]=asm["setThrew"];var stackAlloc=Module["stackAlloc"]=asm["stackAlloc"];var stackRestore=Module["stackRestore"]=asm["stackRestore"];var stackSave=Module["stackSave"]=asm["stackSave"];Module["asm"]=asm;Module["setValue"]=setValue;Module["getValue"]=getValue;if(memoryInitializer){if(!isDataURI(memoryInitializer)){if(typeof Module["locateFile"]==="function"){memoryInitializer=Module["locateFile"](memoryInitializer)}else if(Module["memoryInitializerPrefixURL"]){memoryInitializer=Module["memoryInitializerPrefixURL"]+memoryInitializer}}if(ENVIRONMENT_IS_NODE||ENVIRONMENT_IS_SHELL){var data=Module["readBinary"](memoryInitializer);HEAPU8.set(data,GLOBAL_BASE)}else{addRunDependency("memory initializer");var applyMemoryInitializer=(function(data){if(data.byteLength)data=new Uint8Array(data);HEAPU8.set(data,GLOBAL_BASE);if(Module["memoryInitializerRequest"])delete Module["memoryInitializerRequest"].response;removeRunDependency("memory initializer")});function doBrowserLoad(){Module["readAsync"](memoryInitializer,applyMemoryInitializer,(function(){throw"could not load memory initializer "+memoryInitializer}))}var memoryInitializerBytes=tryParseAsDataURI(memoryInitializer);if(memoryInitializerBytes){applyMemoryInitializer(memoryInitializerBytes.buffer)}else if(Module["memoryInitializerRequest"]){function useRequest(){var request=Module["memoryInitializerRequest"];var response=request.response;if(request.status!==200&&request.status!==0){var data=tryParseAsDataURI(Module["memoryInitializerRequestURL"]);if(data){response=data.buffer}else{console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+request.status+", retrying "+memoryInitializer);doBrowserLoad();return}}applyMemoryInitializer(response)}if(Module["memoryInitializerRequest"].response){setTimeout(useRequest,0)}else{Module["memoryInitializerRequest"].addEventListener("load",useRequest)}}else{doBrowserLoad()}}}Module["then"]=(function(func){if(Module["calledRun"]){func(Module)}else{var old=Module["onRuntimeInitialized"];Module["onRuntimeInitialized"]=(function(){if(old)old();func(Module)})}return Module});function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};function run(args){args=args||Module["arguments"];if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]&&status===0){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["exit"](status)}Module["quit"](status,new ExitStatus(status))}Module["exit"]=exit;function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;throw"abort("+what+"). Build with -s ASSERTIONS=1 for more info."}Module["abort"]=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}Module["noExitRuntime"]=true;run()
  return Module;
};
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Module;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Module; });
else if (typeof exports === 'object')
  exports["Module"] = Module;
var sha512 = Module();
const CTX_SIZE = 208;
const OUT_SIZE = 64;
function h$hs_cryptohash_sha512_init(ctx_p, ctx_o) {
    var ctx = sha512.stackAlloc(CTX_SIZE);
    sha512._hs_cryptohash_sha512_init(ctx);
    for (var i = 0; i < CTX_SIZE; ++i) {
        ctx_p.u8[ctx_o + i] = sha512.getValue(ctx + i);
    }
}
function h$hs_cryptohash_sha512_update(ctx_p, ctx_o, dat_p, dat_o, len) {
    var ctx = sha512.stackAlloc(CTX_SIZE);
    var dat = sha512._malloc(len);
    for (var i = 0; i < CTX_SIZE; ++i) {
        sha512.setValue(ctx + i, ctx_p.u8[ctx_o + i]);
    }
    for (var i = 0; i < len; ++i) {
        sha512.setValue(dat + i, dat_p.u8[dat_o + i]);
    }
    sha512._hs_cryptohash_sha512_update(ctx, dat, len);
    for (var i = 0; i < CTX_SIZE; ++i) {
        ctx_p.u8[ctx_o + i] = sha512.getValue(ctx + i);
    }
    sha512._free(dat);
}
function h$hs_cryptohash_sha512_finalize(ctx_p, ctx_o, out_p, out_o) {
    var ctx = sha512.stackAlloc(CTX_SIZE);
    var out = sha512.stackAlloc(OUT_SIZE);
    for (var i = 0; i < CTX_SIZE; ++i) {
        sha512.setValue(ctx + i, ctx_p.u8[ctx_o + i]);
    }
    for (var i = 0; i < OUT_SIZE; ++i) {
        sha512.setValue(out + i, out_p.u8[out_o + i]);
    }
    sha512._hs_cryptohash_sha512_finalize(ctx, out);
    for (var i = 0; i < CTX_SIZE; ++i) {
        ctx_p.u8[ctx_o + i] = sha512.getValue(ctx + i);
    }
    for (var i = 0; i < OUT_SIZE; ++i) {
        out_p.u8[out_o + i] = sha512.getValue(out + i);
    }
}
function h$c_init(obj, off) {
    console.log(obj);
    console.log(off);
    for (var i = 0; i < obj.len / 4; i += 1) {
        obj.i3[i] = 0xffffffff - i;
    }
    console.log(obj);
}
(function(p,s){"object"===typeof exports&&"object"===typeof module?module.exports=s():"function"===typeof define&&define.amd?define(s):"object"===typeof exports?exports=s():("undefined"===typeof p.Paho&&(p.Paho={}),p.Paho.MQTT=s())})(this,function(){return function(p){function s(a,b,c){b[c++]=a>>8;b[c++]=a%256;return c}function u(a,b,c,k){k=s(b,c,k);D(a,c,k);return k+b}function n(a){for(var b=0,c=0;c<a.length;c++){var k=a.charCodeAt(c);2047<k?(55296<=k&&56319>=k&&(c++,b++),b+=3):127<k?b+=2:b++}return b}
function D(a,b,c){for(var k=0;k<a.length;k++){var e=a.charCodeAt(k);if(55296<=e&&56319>=e){var g=a.charCodeAt(++k);if(isNaN(g))throw Error(f(h.MALFORMED_UNICODE,[e,g]));e=(e-55296<<10)+(g-56320)+65536}127>=e?b[c++]=e:(2047>=e?b[c++]=e>>6&31|192:(65535>=e?b[c++]=e>>12&15|224:(b[c++]=e>>18&7|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function E(a,b,c){for(var k="",e,g=b;g<b+c;){e=a[g++];if(!(128>e)){var m=a[g++]-128;if(0>m)throw Error(f(h.MALFORMED_UTF,[e.toString(16),m.toString(16),
""]));if(224>e)e=64*(e-192)+m;else{var d=a[g++]-128;if(0>d)throw Error(f(h.MALFORMED_UTF,[e.toString(16),m.toString(16),d.toString(16)]));if(240>e)e=4096*(e-224)+64*m+d;else{var l=a[g++]-128;if(0>l)throw Error(f(h.MALFORMED_UTF,[e.toString(16),m.toString(16),d.toString(16),l.toString(16)]));if(248>e)e=262144*(e-240)+4096*m+64*d+l;else throw Error(f(h.MALFORMED_UTF,[e.toString(16),m.toString(16),d.toString(16),l.toString(16)]));}}}65535<e&&(e-=65536,k+=String.fromCharCode(55296+(e>>10)),e=56320+(e&
1023));k+=String.fromCharCode(e)}return k}var z=function(a,b){for(var c in a)if(a.hasOwnProperty(c))if(b.hasOwnProperty(c)){if(typeof a[c]!==b[c])throw Error(f(h.INVALID_TYPE,[typeof a[c],c]));}else{c="Unknown property, "+c+". Valid properties are:";for(var k in b)b.hasOwnProperty(k)&&(c=c+" "+k);throw Error(c);}},v=function(a,b){return function(){return a.apply(b,arguments)}},h={OK:{code:0,text:"AMQJSC0000I OK."},CONNECT_TIMEOUT:{code:1,text:"AMQJSC0001E Connect timed out."},SUBSCRIBE_TIMEOUT:{code:2,
text:"AMQJS0002E Subscribe timed out."},UNSUBSCRIBE_TIMEOUT:{code:3,text:"AMQJS0003E Unsubscribe timed out."},PING_TIMEOUT:{code:4,text:"AMQJS0004E Ping timed out."},INTERNAL_ERROR:{code:5,text:"AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"},CONNACK_RETURNCODE:{code:6,text:"AMQJS0006E Bad Connack return code:{0} {1}."},SOCKET_ERROR:{code:7,text:"AMQJS0007E Socket error:{0}."},SOCKET_CLOSE:{code:8,text:"AMQJS0008I Socket closed."},MALFORMED_UTF:{code:9,text:"AMQJS0009E Malformed UTF data:{0} {1} {2}."},
UNSUPPORTED:{code:10,text:"AMQJS0010E {0} is not supported by this browser."},INVALID_STATE:{code:11,text:"AMQJS0011E Invalid state {0}."},INVALID_TYPE:{code:12,text:"AMQJS0012E Invalid type {0} for {1}."},INVALID_ARGUMENT:{code:13,text:"AMQJS0013E Invalid argument {0} for {1}."},UNSUPPORTED_OPERATION:{code:14,text:"AMQJS0014E Unsupported operation."},INVALID_STORED_DATA:{code:15,text:"AMQJS0015E Invalid data in local storage key\x3d{0} value\x3d{1}."},INVALID_MQTT_MESSAGE_TYPE:{code:16,text:"AMQJS0016E Invalid MQTT message type {0}."},
MALFORMED_UNICODE:{code:17,text:"AMQJS0017E Malformed Unicode string:{0} {1}."},BUFFER_FULL:{code:18,text:"AMQJS0018E Message buffer is full, maximum buffer size: {0}."}},H={0:"Connection Accepted",1:"Connection Refused: unacceptable protocol version",2:"Connection Refused: identifier rejected",3:"Connection Refused: server unavailable",4:"Connection Refused: bad user name or password",5:"Connection Refused: not authorized"},f=function(a,b){var c=a.text;if(b)for(var k,e,g=0;g<b.length;g++)if(k="{"+
g+"}",e=c.indexOf(k),0<e)var h=c.substring(0,e),c=c.substring(e+k.length),c=h+b[g]+c;return c},A=[0,6,77,81,73,115,100,112,3],B=[0,4,77,81,84,84,4],q=function(a,b){this.type=a;for(var c in b)b.hasOwnProperty(c)&&(this[c]=b[c])};q.prototype.encode=function(){var a=(this.type&15)<<4,b=0,c=[],k=0,e;void 0!==this.messageIdentifier&&(b+=2);switch(this.type){case 1:switch(this.mqttVersion){case 3:b+=A.length+3;break;case 4:b+=B.length+3}b+=n(this.clientId)+2;void 0!==this.willMessage&&(b+=n(this.willMessage.destinationName)+
2,e=this.willMessage.payloadBytes,e instanceof Uint8Array||(e=new Uint8Array(h)),b+=e.byteLength+2);void 0!==this.userName&&(b+=n(this.userName)+2);void 0!==this.password&&(b+=n(this.password)+2);break;case 8:for(var a=a|2,g=0;g<this.topics.length;g++)c[g]=n(this.topics[g]),b+=c[g]+2;b+=this.requestedQos.length;break;case 10:a|=2;for(g=0;g<this.topics.length;g++)c[g]=n(this.topics[g]),b+=c[g]+2;break;case 6:a|=2;break;case 3:this.payloadMessage.duplicate&&(a|=8);a=a|=this.payloadMessage.qos<<1;this.payloadMessage.retained&&
(a|=1);var k=n(this.payloadMessage.destinationName),h=this.payloadMessage.payloadBytes,b=b+(k+2)+h.byteLength;h instanceof ArrayBuffer?h=new Uint8Array(h):h instanceof Uint8Array||(h=new Uint8Array(h.buffer))}var f=b,g=Array(1),d=0;do{var t=f%128,f=f>>7;0<f&&(t|=128);g[d++]=t}while(0<f&&4>d);f=g.length+1;b=new ArrayBuffer(b+f);d=new Uint8Array(b);d[0]=a;d.set(g,1);if(3==this.type)f=u(this.payloadMessage.destinationName,k,d,f);else if(1==this.type){switch(this.mqttVersion){case 3:d.set(A,f);f+=A.length;
break;case 4:d.set(B,f),f+=B.length}a=0;this.cleanSession&&(a=2);void 0!==this.willMessage&&(a=a|4|this.willMessage.qos<<3,this.willMessage.retained&&(a|=32));void 0!==this.userName&&(a|=128);void 0!==this.password&&(a|=64);d[f++]=a;f=s(this.keepAliveInterval,d,f)}void 0!==this.messageIdentifier&&(f=s(this.messageIdentifier,d,f));switch(this.type){case 1:f=u(this.clientId,n(this.clientId),d,f);void 0!==this.willMessage&&(f=u(this.willMessage.destinationName,n(this.willMessage.destinationName),d,f),
f=s(e.byteLength,d,f),d.set(e,f),f+=e.byteLength);void 0!==this.userName&&(f=u(this.userName,n(this.userName),d,f));void 0!==this.password&&u(this.password,n(this.password),d,f);break;case 3:d.set(h,f);break;case 8:for(g=0;g<this.topics.length;g++)f=u(this.topics[g],c[g],d,f),d[f++]=this.requestedQos[g];break;case 10:for(g=0;g<this.topics.length;g++)f=u(this.topics[g],c[g],d,f)}return b};var F=function(a,b,c){this._client=a;this._window=b;this._keepAliveInterval=1E3*c;this.isReset=!1;var k=(new q(12)).encode(),
e=function(a){return function(){return g.apply(a)}},g=function(){this.isReset?(this.isReset=!1,this._client._trace("Pinger.doPing","send PINGREQ"),this._client.socket.send(k),this.timeout=this._window.setTimeout(e(this),this._keepAliveInterval)):(this._client._trace("Pinger.doPing","Timed out"),this._client._disconnected(h.PING_TIMEOUT.code,f(h.PING_TIMEOUT)))};this.reset=function(){this.isReset=!0;this._window.clearTimeout(this.timeout);0<this._keepAliveInterval&&(this.timeout=setTimeout(e(this),
this._keepAliveInterval))};this.cancel=function(){this._window.clearTimeout(this.timeout)}},w=function(a,b,c,f,e){this._window=b;c||(c=30);this.timeout=setTimeout(function(a,b,c){return function(){return a.apply(b,c)}}(f,a,e),1E3*c);this.cancel=function(){this._window.clearTimeout(this.timeout)}},d=function(a,b,c,d,e){if(!("WebSocket"in p&&null!==p.WebSocket))throw Error(f(h.UNSUPPORTED,["WebSocket"]));if(!("localStorage"in p&&null!==p.localStorage))throw Error(f(h.UNSUPPORTED,["localStorage"]));
if(!("ArrayBuffer"in p&&null!==p.ArrayBuffer))throw Error(f(h.UNSUPPORTED,["ArrayBuffer"]));this._trace("Paho.MQTT.Client",a,b,c,d,e);this.host=b;this.port=c;this.path=d;this.uri=a;this.clientId=e;this._wsuri=null;this._localKey=b+":"+c+("/mqtt"!=d?":"+d:"")+":"+e+":";this._msg_queue=[];this._buffered_msg_queue=[];this._sentMessages={};this._receivedMessages={};this._notify_msg_sent={};this._message_identifier=1;this._sequence=0;for(var g in localStorage)0!==g.indexOf("Sent:"+this._localKey)&&0!==
g.indexOf("Received:"+this._localKey)||this.restore(g)};d.prototype.host=null;d.prototype.port=null;d.prototype.path=null;d.prototype.uri=null;d.prototype.clientId=null;d.prototype.socket=null;d.prototype.connected=!1;d.prototype.maxMessageIdentifier=65536;d.prototype.connectOptions=null;d.prototype.hostIndex=null;d.prototype.onConnected=null;d.prototype.onConnectionLost=null;d.prototype.onMessageDelivered=null;d.prototype.onMessageArrived=null;d.prototype.traceFunction=null;d.prototype._msg_queue=
null;d.prototype._buffered_msg_queue=null;d.prototype._connectTimeout=null;d.prototype.sendPinger=null;d.prototype.receivePinger=null;d.prototype._reconnectInterval=1;d.prototype._reconnecting=!1;d.prototype._reconnectTimeout=null;d.prototype.disconnectedPublishing=!1;d.prototype.disconnectedBufferSize=5E3;d.prototype.receiveBuffer=null;d.prototype._traceBuffer=null;d.prototype._MAX_TRACE_ENTRIES=100;d.prototype.connect=function(a){var b=this._traceMask(a,"password");this._trace("Client.connect",
b,this.socket,this.connected);if(this.connected)throw Error(f(h.INVALID_STATE,["already connected"]));if(this.socket)throw Error(f(h.INVALID_STATE,["already connected"]));this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1);this.connectOptions=a;this._reconnectInterval=1;this._reconnecting=!1;a.uris?(this.hostIndex=0,this._doConnect(a.uris[0])):this._doConnect(this.uri)};d.prototype.subscribe=function(a,b){this._trace("Client.subscribe",a,b);if(!this.connected)throw Error(f(h.INVALID_STATE,
["not connected"]));var c=new q(8);c.topics=[a];c.requestedQos=void 0!==b.qos?[b.qos]:[0];b.onSuccess&&(c.onSuccess=function(a){b.onSuccess({invocationContext:b.invocationContext,grantedQos:a})});b.onFailure&&(c.onFailure=function(a){b.onFailure({invocationContext:b.invocationContext,errorCode:a,errorMessage:f(a)})});b.timeout&&(c.timeOut=new w(this,window,b.timeout,b.onFailure,[{invocationContext:b.invocationContext,errorCode:h.SUBSCRIBE_TIMEOUT.code,errorMessage:f(h.SUBSCRIBE_TIMEOUT)}]));this._requires_ack(c);
this._schedule_message(c)};d.prototype.unsubscribe=function(a,b){this._trace("Client.unsubscribe",a,b);if(!this.connected)throw Error(f(h.INVALID_STATE,["not connected"]));var c=new q(10);c.topics=[a];b.onSuccess&&(c.callback=function(){b.onSuccess({invocationContext:b.invocationContext})});b.timeout&&(c.timeOut=new w(this,window,b.timeout,b.onFailure,[{invocationContext:b.invocationContext,errorCode:h.UNSUBSCRIBE_TIMEOUT.code,errorMessage:f(h.UNSUBSCRIBE_TIMEOUT)}]));this._requires_ack(c);this._schedule_message(c)};
d.prototype.send=function(a){this._trace("Client.send",a);wireMessage=new q(3);wireMessage.payloadMessage=a;if(this.connected)0<a.qos?this._requires_ack(wireMessage):this.onMessageDelivered&&(this._notify_msg_sent[wireMessage]=this.onMessageDelivered(wireMessage.payloadMessage)),this._schedule_message(wireMessage);else if(this._reconnecting&&this.disconnectedPublishing){if(Object.keys(this._sentMessages).length+this._buffered_msg_queue.length>this.disconnectedBufferSize)throw Error(f(h.BUFFER_FULL,
[this.disconnectedBufferSize]));0<a.qos?this._requires_ack(wireMessage):(wireMessage.sequence=++this._sequence,this._buffered_msg_queue.push(wireMessage))}else throw Error(f(h.INVALID_STATE,["not connected"]));};d.prototype.disconnect=function(){this._trace("Client.disconnect");this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1);if(!this.socket)throw Error(f(h.INVALID_STATE,["not connecting or connected"]));wireMessage=new q(14);this._notify_msg_sent[wireMessage]=
v(this._disconnected,this);this._schedule_message(wireMessage)};d.prototype.getTraceLog=function(){if(null!==this._traceBuffer){this._trace("Client.getTraceLog",new Date);this._trace("Client.getTraceLog in flight messages",this._sentMessages.length);for(var a in this._sentMessages)this._trace("_sentMessages ",a,this._sentMessages[a]);for(a in this._receivedMessages)this._trace("_receivedMessages ",a,this._receivedMessages[a]);return this._traceBuffer}};d.prototype.startTrace=function(){null===this._traceBuffer&&
(this._traceBuffer=[]);this._trace("Client.startTrace",new Date,"1.0.3")};d.prototype.stopTrace=function(){delete this._traceBuffer};d.prototype._doConnect=function(a){this.connectOptions.useSSL&&(a=a.split(":"),a[0]="wss",a=a.join(":"));this._wsuri=a;this.connected=!1;this.socket=4>this.connectOptions.mqttVersion?new WebSocket(a,["mqttv3.1"]):new WebSocket(a,["mqtt"]);this.socket.binaryType="arraybuffer";this.socket.onopen=v(this._on_socket_open,this);this.socket.onmessage=v(this._on_socket_message,
this);this.socket.onerror=v(this._on_socket_error,this);this.socket.onclose=v(this._on_socket_close,this);this.sendPinger=new F(this,window,this.connectOptions.keepAliveInterval);this.receivePinger=new F(this,window,this.connectOptions.keepAliveInterval);this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null);this._connectTimeout=new w(this,window,this.connectOptions.timeout,this._disconnected,[h.CONNECT_TIMEOUT.code,f(h.CONNECT_TIMEOUT)])};d.prototype._schedule_message=function(a){this._msg_queue.push(a);
this.connected&&this._process_queue()};d.prototype.store=function(a,b){var c={type:b.type,messageIdentifier:b.messageIdentifier,version:1};switch(b.type){case 3:b.pubRecReceived&&(c.pubRecReceived=!0);c.payloadMessage={};for(var d="",e=b.payloadMessage.payloadBytes,g=0;g<e.length;g++)d=15>=e[g]?d+"0"+e[g].toString(16):d+e[g].toString(16);c.payloadMessage.payloadHex=d;c.payloadMessage.qos=b.payloadMessage.qos;c.payloadMessage.destinationName=b.payloadMessage.destinationName;b.payloadMessage.duplicate&&
(c.payloadMessage.duplicate=!0);b.payloadMessage.retained&&(c.payloadMessage.retained=!0);0===a.indexOf("Sent:")&&(void 0===b.sequence&&(b.sequence=++this._sequence),c.sequence=b.sequence);break;default:throw Error(f(h.INVALID_STORED_DATA,[key,c]));}localStorage.setItem(a+this._localKey+b.messageIdentifier,JSON.stringify(c))};d.prototype.restore=function(a){var b=localStorage.getItem(a),c=JSON.parse(b),d=new q(c.type,c);switch(c.type){case 3:for(var b=c.payloadMessage.payloadHex,e=new ArrayBuffer(b.length/
2),e=new Uint8Array(e),g=0;2<=b.length;){var m=parseInt(b.substring(0,2),16),b=b.substring(2,b.length);e[g++]=m}b=new Paho.MQTT.Message(e);b.qos=c.payloadMessage.qos;b.destinationName=c.payloadMessage.destinationName;c.payloadMessage.duplicate&&(b.duplicate=!0);c.payloadMessage.retained&&(b.retained=!0);d.payloadMessage=b;break;default:throw Error(f(h.INVALID_STORED_DATA,[a,b]));}0===a.indexOf("Sent:"+this._localKey)?(d.payloadMessage.duplicate=!0,this._sentMessages[d.messageIdentifier]=d):0===a.indexOf("Received:"+
this._localKey)&&(this._receivedMessages[d.messageIdentifier]=d)};d.prototype._process_queue=function(){for(var a=null,b=this._msg_queue.reverse();a=b.pop();)this._socket_send(a),this._notify_msg_sent[a]&&(this._notify_msg_sent[a](),delete this._notify_msg_sent[a])};d.prototype._requires_ack=function(a){var b=Object.keys(this._sentMessages).length;if(b>this.maxMessageIdentifier)throw Error("Too many messages:"+b);for(;void 0!==this._sentMessages[this._message_identifier];)this._message_identifier++;
a.messageIdentifier=this._message_identifier;this._sentMessages[a.messageIdentifier]=a;3===a.type&&this.store("Sent:",a);this._message_identifier===this.maxMessageIdentifier&&(this._message_identifier=1)};d.prototype._on_socket_open=function(){var a=new q(1,this.connectOptions);a.clientId=this.clientId;this._socket_send(a)};d.prototype._on_socket_message=function(a){this._trace("Client._on_socket_message",a.data);a=this._deframeMessages(a.data);for(var b=0;b<a.length;b+=1)this._handleMessage(a[b])};
d.prototype._deframeMessages=function(a){a=new Uint8Array(a);var b=[];if(this.receiveBuffer){var c=new Uint8Array(this.receiveBuffer.length+a.length);c.set(this.receiveBuffer);c.set(a,this.receiveBuffer.length);a=c;delete this.receiveBuffer}try{for(c=0;c<a.length;){var d;a:{var e=a,g=c,m=g,n=e[g],l=n>>4,t=n&15,g=g+1,x=void 0,C=0,p=1;do{if(g==e.length){d=[null,m];break a}x=e[g++];C+=(x&127)*p;p*=128}while(0!==(x&128));x=g+C;if(x>e.length)d=[null,m];else{var y=new q(l);switch(l){case 2:e[g++]&1&&(y.sessionPresent=
!0);y.returnCode=e[g++];break;case 3:var m=t>>1&3,s=256*e[g]+e[g+1],g=g+2,u=E(e,g,s),g=g+s;0<m&&(y.messageIdentifier=256*e[g]+e[g+1],g+=2);var r=new Paho.MQTT.Message(e.subarray(g,x));1==(t&1)&&(r.retained=!0);8==(t&8)&&(r.duplicate=!0);r.qos=m;r.destinationName=u;y.payloadMessage=r;break;case 4:case 5:case 6:case 7:case 11:y.messageIdentifier=256*e[g]+e[g+1];break;case 9:y.messageIdentifier=256*e[g]+e[g+1],g+=2,y.returnCode=e.subarray(g,x)}d=[y,x]}}var v=d[0],c=d[1];if(null!==v)b.push(v);else break}c<
a.length&&(this.receiveBuffer=a.subarray(c))}catch(w){d="undefined"==w.hasOwnProperty("stack")?w.stack.toString():"No Error Stack Available";this._disconnected(h.INTERNAL_ERROR.code,f(h.INTERNAL_ERROR,[w.message,d]));return}return b};d.prototype._handleMessage=function(a){this._trace("Client._handleMessage",a);try{switch(a.type){case 2:this._connectTimeout.cancel();this._reconnectTimeout&&this._reconnectTimeout.cancel();if(this.connectOptions.cleanSession){for(var b in this._sentMessages){var c=this._sentMessages[b];
localStorage.removeItem("Sent:"+this._localKey+c.messageIdentifier)}this._sentMessages={};for(b in this._receivedMessages){var d=this._receivedMessages[b];localStorage.removeItem("Received:"+this._localKey+d.messageIdentifier)}this._receivedMessages={}}if(0===a.returnCode)this.connected=!0,this.connectOptions.uris&&(this.hostIndex=this.connectOptions.uris.length);else{this._disconnected(h.CONNACK_RETURNCODE.code,f(h.CONNACK_RETURNCODE,[a.returnCode,H[a.returnCode]]));break}a=[];for(var e in this._sentMessages)this._sentMessages.hasOwnProperty(e)&&
a.push(this._sentMessages[e]);if(0<this._buffered_msg_queue.length){e=null;for(var g=this._buffered_msg_queue.reverse();e=g.pop();)a.push(e),this.onMessageDelivered&&(this._notify_msg_sent[e]=this.onMessageDelivered(e.payloadMessage))}a=a.sort(function(a,b){return a.sequence-b.sequence});for(var g=0,m=a.length;g<m;g++)if(c=a[g],3==c.type&&c.pubRecReceived){var n=new q(6,{messageIdentifier:c.messageIdentifier});this._schedule_message(n)}else this._schedule_message(c);if(this.connectOptions.onSuccess)this.connectOptions.onSuccess({invocationContext:this.connectOptions.invocationContext});
c=!1;this._reconnecting&&(c=!0,this._reconnectInterval=1,this._reconnecting=!1);this._connected(c,this._wsuri);this._process_queue();break;case 3:this._receivePublish(a);break;case 4:if(c=this._sentMessages[a.messageIdentifier])if(delete this._sentMessages[a.messageIdentifier],localStorage.removeItem("Sent:"+this._localKey+a.messageIdentifier),this.onMessageDelivered)this.onMessageDelivered(c.payloadMessage);break;case 5:if(c=this._sentMessages[a.messageIdentifier])c.pubRecReceived=!0,n=new q(6,{messageIdentifier:a.messageIdentifier}),
this.store("Sent:",c),this._schedule_message(n);break;case 6:d=this._receivedMessages[a.messageIdentifier];localStorage.removeItem("Received:"+this._localKey+a.messageIdentifier);d&&(this._receiveMessage(d),delete this._receivedMessages[a.messageIdentifier]);var l=new q(7,{messageIdentifier:a.messageIdentifier});this._schedule_message(l);break;case 7:c=this._sentMessages[a.messageIdentifier];delete this._sentMessages[a.messageIdentifier];localStorage.removeItem("Sent:"+this._localKey+a.messageIdentifier);
if(this.onMessageDelivered)this.onMessageDelivered(c.payloadMessage);break;case 9:if(c=this._sentMessages[a.messageIdentifier]){c.timeOut&&c.timeOut.cancel();if(128===a.returnCode[0]){if(c.onFailure)c.onFailure(a.returnCode)}else if(c.onSuccess)c.onSuccess(a.returnCode);delete this._sentMessages[a.messageIdentifier]}break;case 11:if(c=this._sentMessages[a.messageIdentifier])c.timeOut&&c.timeOut.cancel(),c.callback&&c.callback(),delete this._sentMessages[a.messageIdentifier];break;case 13:this.sendPinger.reset();
break;case 14:this._disconnected(h.INVALID_MQTT_MESSAGE_TYPE.code,f(h.INVALID_MQTT_MESSAGE_TYPE,[a.type]));break;default:this._disconnected(h.INVALID_MQTT_MESSAGE_TYPE.code,f(h.INVALID_MQTT_MESSAGE_TYPE,[a.type]))}}catch(t){c="undefined"==t.hasOwnProperty("stack")?t.stack.toString():"No Error Stack Available",this._disconnected(h.INTERNAL_ERROR.code,f(h.INTERNAL_ERROR,[t.message,c]))}};d.prototype._on_socket_error=function(a){this._reconnecting||this._disconnected(h.SOCKET_ERROR.code,f(h.SOCKET_ERROR,
[a.data]))};d.prototype._on_socket_close=function(){this._reconnecting||this._disconnected(h.SOCKET_CLOSE.code,f(h.SOCKET_CLOSE))};d.prototype._socket_send=function(a){if(1==a.type){var b=this._traceMask(a,"password");this._trace("Client._socket_send",b)}else this._trace("Client._socket_send",a);this.socket.send(a.encode());this.sendPinger.reset()};d.prototype._receivePublish=function(a){switch(a.payloadMessage.qos){case "undefined":case 0:this._receiveMessage(a);break;case 1:var b=new q(4,{messageIdentifier:a.messageIdentifier});
this._schedule_message(b);this._receiveMessage(a);break;case 2:this._receivedMessages[a.messageIdentifier]=a;this.store("Received:",a);a=new q(5,{messageIdentifier:a.messageIdentifier});this._schedule_message(a);break;default:throw Error("Invaild qos\x3d"+wireMmessage.payloadMessage.qos);}};d.prototype._receiveMessage=function(a){if(this.onMessageArrived)this.onMessageArrived(a.payloadMessage)};d.prototype._connected=function(a,b){if(this.onConnected)this.onConnected(a,b)};d.prototype._reconnect=
function(){this._trace("Client._reconnect");this.connected||(this._reconnecting=!0,this.sendPinger.cancel(),this.receivePinger.cancel(),128>this._reconnectInterval&&(this._reconnectInterval*=2),this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri))};d.prototype._disconnected=function(a,b){this._trace("Client._disconnected",a,b);if(void 0!==a&&this._reconnecting)this._reconnectTimeout=new w(this,window,this._reconnectInterval,this._reconnect);
else if(this.sendPinger.cancel(),this.receivePinger.cancel(),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._msg_queue=[],this._buffered_msg_queue=[],this._notify_msg_sent={},this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,1===this.socket.readyState&&this.socket.close(),delete this.socket),this.connectOptions.uris&&this.hostIndex<this.connectOptions.uris.length-1)this.hostIndex++,this._doConnect(this.connectOptions.uris[this.hostIndex]);
else if(void 0===a&&(a=h.OK.code,b=f(h.OK)),this.connected){this.connected=!1;if(this.onConnectionLost)this.onConnectionLost({errorCode:a,errorMessage:b,reconnect:this.connectOptions.reconnect,uri:this._wsuri});a!==h.OK.code&&this.connectOptions.reconnect&&(this._reconnectInterval=1,this._reconnect())}else if(4===this.connectOptions.mqttVersion&&!1===this.connectOptions.mqttVersionExplicit)this._trace("Failed to connect V4, dropping back to V3"),this.connectOptions.mqttVersion=3,this.connectOptions.uris?
(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri);else if(this.connectOptions.onFailure)this.connectOptions.onFailure({invocationContext:this.connectOptions.invocationContext,errorCode:a,errorMessage:b})};d.prototype._trace=function(){if(this.traceFunction){for(var a in arguments)"undefined"!==typeof arguments[a]&&arguments.splice(a,1,JSON.stringify(arguments[a]));a=Array.prototype.slice.call(arguments).join("");this.traceFunction({severity:"Debug",message:a})}if(null!==
this._traceBuffer){a=0;for(var b=arguments.length;a<b;a++)this._traceBuffer.length==this._MAX_TRACE_ENTRIES&&this._traceBuffer.shift(),0===a?this._traceBuffer.push(arguments[a]):"undefined"===typeof arguments[a]?this._traceBuffer.push(arguments[a]):this._traceBuffer.push("  "+JSON.stringify(arguments[a]))}};d.prototype._traceMask=function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=d==b?"******":a[d]);return c};var G=function(a,b,c,k){var e;if("string"!==typeof a)throw Error(f(h.INVALID_TYPE,
[typeof a,"host"]));if(2==arguments.length){k=b;e=a;var g=e.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);if(g)a=g[4]||g[2],b=parseInt(g[7]),c=g[8];else throw Error(f(h.INVALID_ARGUMENT,[a,"host"]));}else{3==arguments.length&&(k=c,c="/mqtt");if("number"!==typeof b||0>b)throw Error(f(h.INVALID_TYPE,[typeof b,"port"]));if("string"!==typeof c)throw Error(f(h.INVALID_TYPE,[typeof c,"path"]));e="ws://"+(-1!==a.indexOf(":")&&"["!==a.slice(0,1)&&"]"!==a.slice(-1)?"["+a+"]":a)+":"+b+c}for(var m=
g=0;m<k.length;m++){var n=k.charCodeAt(m);55296<=n&&56319>=n&&m++;g++}if("string"!==typeof k||65535<g)throw Error(f(h.INVALID_ARGUMENT,[k,"clientId"]));var l=new d(e,a,b,c,k);this._getHost=function(){return a};this._setHost=function(){throw Error(f(h.UNSUPPORTED_OPERATION));};this._getPort=function(){return b};this._setPort=function(){throw Error(f(h.UNSUPPORTED_OPERATION));};this._getPath=function(){return c};this._setPath=function(){throw Error(f(h.UNSUPPORTED_OPERATION));};this._getURI=function(){return e};
this._setURI=function(){throw Error(f(h.UNSUPPORTED_OPERATION));};this._getClientId=function(){return l.clientId};this._setClientId=function(){throw Error(f(h.UNSUPPORTED_OPERATION));};this._getOnConnected=function(){return l.onConnected};this._setOnConnected=function(a){if("function"===typeof a)l.onConnected=a;else throw Error(f(h.INVALID_TYPE,[typeof a,"onConnected"]));};this._getDisconnectedPublishing=function(){return l.disconnectedPublishing};this._setDisconnectedPublishing=function(a){l.disconnectedPublishing=
a};this._getDisconnectedBufferSize=function(){return l.disconnectedBufferSize};this._setDisconnectedBufferSize=function(a){l.disconnectedBufferSize=a};this._getOnConnectionLost=function(){return l.onConnectionLost};this._setOnConnectionLost=function(a){if("function"===typeof a)l.onConnectionLost=a;else throw Error(f(h.INVALID_TYPE,[typeof a,"onConnectionLost"]));};this._getOnMessageDelivered=function(){return l.onMessageDelivered};this._setOnMessageDelivered=function(a){if("function"===typeof a)l.onMessageDelivered=
a;else throw Error(f(h.INVALID_TYPE,[typeof a,"onMessageDelivered"]));};this._getOnMessageArrived=function(){return l.onMessageArrived};this._setOnMessageArrived=function(a){if("function"===typeof a)l.onMessageArrived=a;else throw Error(f(h.INVALID_TYPE,[typeof a,"onMessageArrived"]));};this._getTrace=function(){return l.traceFunction};this._setTrace=function(a){if("function"===typeof a)l.traceFunction=a;else throw Error(f(h.INVALID_TYPE,[typeof a,"onTrace"]));};this.connect=function(a){a=a||{};z(a,
{timeout:"number",userName:"string",password:"string",willMessage:"object",keepAliveInterval:"number",cleanSession:"boolean",useSSL:"boolean",invocationContext:"object",onSuccess:"function",onFailure:"function",hosts:"object",ports:"object",reconnect:"boolean",mqttVersion:"number",mqttVersionExplicit:"boolean",uris:"object"});void 0===a.keepAliveInterval&&(a.keepAliveInterval=60);if(4<a.mqttVersion||3>a.mqttVersion)throw Error(f(h.INVALID_ARGUMENT,[a.mqttVersion,"connectOptions.mqttVersion"]));void 0===
a.mqttVersion?(a.mqttVersionExplicit=!1,a.mqttVersion=4):a.mqttVersionExplicit=!0;if(void 0!==a.password&&void 0===a.userName)throw Error(f(h.INVALID_ARGUMENT,[a.password,"connectOptions.password"]));if(a.willMessage){if(!(a.willMessage instanceof r))throw Error(f(h.INVALID_TYPE,[a.willMessage,"connectOptions.willMessage"]));a.willMessage.stringPayload=null;if("undefined"===typeof a.willMessage.destinationName)throw Error(f(h.INVALID_TYPE,[typeof a.willMessage.destinationName,"connectOptions.willMessage.destinationName"]));
}"undefined"===typeof a.cleanSession&&(a.cleanSession=!0);if(a.hosts){if(!(a.hosts instanceof Array))throw Error(f(h.INVALID_ARGUMENT,[a.hosts,"connectOptions.hosts"]));if(1>a.hosts.length)throw Error(f(h.INVALID_ARGUMENT,[a.hosts,"connectOptions.hosts"]));for(var b=!1,d=0;d<a.hosts.length;d++){if("string"!==typeof a.hosts[d])throw Error(f(h.INVALID_TYPE,[typeof a.hosts[d],"connectOptions.hosts["+d+"]"]));if(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(a.hosts[d]))if(0===d)b=!0;else{if(!b)throw Error(f(h.INVALID_ARGUMENT,
[a.hosts[d],"connectOptions.hosts["+d+"]"]));}else if(b)throw Error(f(h.INVALID_ARGUMENT,[a.hosts[d],"connectOptions.hosts["+d+"]"]));}if(b)a.uris=a.hosts;else{if(!a.ports)throw Error(f(h.INVALID_ARGUMENT,[a.ports,"connectOptions.ports"]));if(!(a.ports instanceof Array))throw Error(f(h.INVALID_ARGUMENT,[a.ports,"connectOptions.ports"]));if(a.hosts.length!==a.ports.length)throw Error(f(h.INVALID_ARGUMENT,[a.ports,"connectOptions.ports"]));a.uris=[];for(d=0;d<a.hosts.length;d++){if("number"!==typeof a.ports[d]||
0>a.ports[d])throw Error(f(h.INVALID_TYPE,[typeof a.ports[d],"connectOptions.ports["+d+"]"]));var b=a.hosts[d],g=a.ports[d];e="ws://"+(-1!==b.indexOf(":")?"["+b+"]":b)+":"+g+c;a.uris.push(e)}}}l.connect(a)};this.subscribe=function(a,b){if("string"!==typeof a)throw Error("Invalid argument:"+a);b=b||{};z(b,{qos:"number",invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"});if(b.timeout&&!b.onFailure)throw Error("subscribeOptions.timeout specified with no onFailure callback.");
if("undefined"!==typeof b.qos&&0!==b.qos&&1!==b.qos&&2!==b.qos)throw Error(f(h.INVALID_ARGUMENT,[b.qos,"subscribeOptions.qos"]));l.subscribe(a,b)};this.unsubscribe=function(a,b){if("string"!==typeof a)throw Error("Invalid argument:"+a);b=b||{};z(b,{invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"});if(b.timeout&&!b.onFailure)throw Error("unsubscribeOptions.timeout specified with no onFailure callback.");l.unsubscribe(a,b)};this.send=function(a,b,c,d){var e;if(0===
arguments.length)throw Error("Invalid argument.length");if(1==arguments.length){if(!(a instanceof r)&&"string"!==typeof a)throw Error("Invalid argument:"+typeof a);e=a;if("undefined"===typeof e.destinationName)throw Error(f(h.INVALID_ARGUMENT,[e.destinationName,"Message.destinationName"]));}else e=new r(b),e.destinationName=a,3<=arguments.length&&(e.qos=c),4<=arguments.length&&(e.retained=d);l.send(e)};this.publish=function(a,b,c,d){console.log("Publising message to: ",a);var e;if(0===arguments.length)throw Error("Invalid argument.length");
if(1==arguments.length){if(!(a instanceof r)&&"string"!==typeof a)throw Error("Invalid argument:"+typeof a);e=a;if("undefined"===typeof e.destinationName)throw Error(f(h.INVALID_ARGUMENT,[e.destinationName,"Message.destinationName"]));}else e=new r(b),e.destinationName=a,3<=arguments.length&&(e.qos=c),4<=arguments.length&&(e.retained=d);l.send(e)};this.disconnect=function(){l.disconnect()};this.getTraceLog=function(){return l.getTraceLog()};this.startTrace=function(){l.startTrace()};this.stopTrace=
function(){l.stopTrace()};this.isConnected=function(){return l.connected}};G.prototype={get host(){return this._getHost()},set host(a){this._setHost(a)},get port(){return this._getPort()},set port(a){this._setPort(a)},get path(){return this._getPath()},set path(a){this._setPath(a)},get clientId(){return this._getClientId()},set clientId(a){this._setClientId(a)},get onConnected(){return this._getOnConnected()},set onConnected(a){this._setOnConnected(a)},get disconnectedPublishing(){return this._getDisconnectedPublishing()},
set disconnectedPublishing(a){this._setDisconnectedPublishing(a)},get disconnectedBufferSize(){return this._getDisconnectedBufferSize()},set disconnectedBufferSize(a){this._setDisconnectedBufferSize(a)},get onConnectionLost(){return this._getOnConnectionLost()},set onConnectionLost(a){this._setOnConnectionLost(a)},get onMessageDelivered(){return this._getOnMessageDelivered()},set onMessageDelivered(a){this._setOnMessageDelivered(a)},get onMessageArrived(){return this._getOnMessageArrived()},set onMessageArrived(a){this._setOnMessageArrived(a)},
get trace(){return this._getTrace()},set trace(a){this._setTrace(a)}};var r=function(a){var b;if("string"===typeof a||a instanceof ArrayBuffer||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array)b=a;else throw f(h.INVALID_ARGUMENT,[a,"newPayload"]);this._getPayloadString=function(){return"string"===typeof b?b:E(b,0,b.length)};this._getPayloadBytes=
function(){if("string"===typeof b){var a=new ArrayBuffer(n(b)),a=new Uint8Array(a);D(b,a,0);return a}return b};var c;this._getDestinationName=function(){return c};this._setDestinationName=function(a){if("string"===typeof a)c=a;else throw Error(f(h.INVALID_ARGUMENT,[a,"newDestinationName"]));};var d=0;this._getQos=function(){return d};this._setQos=function(a){if(0===a||1===a||2===a)d=a;else throw Error("Invalid argument:"+a);};var e=!1;this._getRetained=function(){return e};this._setRetained=function(a){if("boolean"===
typeof a)e=a;else throw Error(f(h.INVALID_ARGUMENT,[a,"newRetained"]));};var g=!1;this._getDuplicate=function(){return g};this._setDuplicate=function(a){g=a}};r.prototype={get payloadString(){return this._getPayloadString()},get payloadBytes(){return this._getPayloadBytes()},get destinationName(){return this._getDestinationName()},set destinationName(a){this._setDestinationName(a)},get topic(){return this._getDestinationName()},set topic(a){this._setDestinationName(a)},get qos(){return this._getQos()},
set qos(a){this._setQos(a)},get retained(){return this._getRetained()},set retained(a){this._setRetained(a)},get duplicate(){return this._getDuplicate()},set duplicate(a){this._setDuplicate(a)}};return{Client:G,Message:r}}(window)});
