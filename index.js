// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).zerosLike=e()}(this,(function(){"use strict";function r(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,f=i.__lookupGetter__,l=i.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(r,e)||l.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,e,t.get),s&&u&&u.call(r,e,t.set),r};var c=t;function y(r,e,t){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var w=h()?function(r){var e,t,n;if(null==r)return m.call(r);t=r[b],e=g(r,b);try{r[b]=void 0}catch(e){return m.call(r)}return n=m.call(r),e?r[b]=t:delete r[b],n}:function(r){return m.call(r)};var v=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};function d(r){return null!==r&&"object"==typeof r}function E(r){return d(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function A(){return/^\s*function\s*([^(]*)/i}y(d,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!v(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(d));var _=/^\s*function\s*([^(]*)/i;function T(r){var e,t,n;if(("Object"===(t=w(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=_.exec(n.toString()))return e[1]}return E(r)?"Buffer":t}y(A,"REGEXP",_);var j={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},x="function"==typeof Float64Array;var L="function"==typeof Float64Array?Float64Array:null;var B="function"==typeof Float64Array?Float64Array:void 0;var V=function(){var r,e,t;if("function"!=typeof L)return!1;try{e=new L([1,3.14,-3.14,NaN]),t=e,r=(x&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")},S="function"==typeof Float32Array;var R=Number.POSITIVE_INFINITY,k="function"==typeof Float32Array?Float32Array:null;var I="function"==typeof Float32Array?Float32Array:void 0;var C=function(){var r,e,t;if("function"!=typeof k)return!1;try{e=new k([1,3.14,-3.14,5e40]),t=e,r=(S&&t instanceof Float32Array||"[object Float32Array]"===w(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===R}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")},O="function"==typeof Uint32Array;var M="function"==typeof Uint32Array?Uint32Array:null;var U="function"==typeof Uint32Array?Uint32Array:void 0;var F=function(){var r,e,t;if("function"!=typeof M)return!1;try{e=new M(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(O&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")},N="function"==typeof Int32Array;var P="function"==typeof Int32Array?Int32Array:null;var Y="function"==typeof Int32Array?Int32Array:void 0;var W=function(){var r,e,t;if("function"!=typeof P)return!1;try{e=new P([1,3.14,-3.14,2147483648]),t=e,r=(N&&t instanceof Int32Array||"[object Int32Array]"===w(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Y:function(){throw new Error("not implemented")},G="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null;var J="function"==typeof Uint16Array?Uint16Array:void 0;var X=function(){var r,e,t;if("function"!=typeof z)return!1;try{e=new z(e=[1,3.14,-3.14,65536,65537]),t=e,r=(G&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")},q="function"==typeof Int16Array;var D="function"==typeof Int16Array?Int16Array:null;var H="function"==typeof Int16Array?Int16Array:void 0;var K=function(){var r,e,t;if("function"!=typeof D)return!1;try{e=new D([1,3.14,-3.14,32768]),t=e,r=(q&&t instanceof Int16Array||"[object Int16Array]"===w(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?H:function(){throw new Error("not implemented")},Q="function"==typeof Uint8Array;var Z="function"==typeof Uint8Array?Uint8Array:null;var $="function"==typeof Uint8Array?Uint8Array:void 0;var rr=function(){var r,e,t;if("function"!=typeof Z)return!1;try{e=new Z(e=[1,3.14,-3.14,256,257]),t=e,r=(Q&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$:function(){throw new Error("not implemented")},er="function"==typeof Uint8ClampedArray;var tr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var nr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ir=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr([-1,0,1,3.14,4.99,255,256]),t=e,r=(er&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===w(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")},or="function"==typeof Int8Array;var ar="function"==typeof Int8Array?Int8Array:null;var ur="function"==typeof Int8Array?Int8Array:void 0;var fr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,128]),t=e,r=(or&&t instanceof Int8Array||"[object Int8Array]"===w(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};function lr(r){return"number"==typeof r}var cr=Number,yr=cr.prototype.toString;var sr=h();function hr(r){return"object"==typeof r&&(r instanceof cr||(sr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function mr(r){return lr(r)||hr(r)}y(mr,"isPrimitive",lr),y(mr,"isObject",hr);var pr=cr.NEGATIVE_INFINITY,gr=Math.floor;function br(r){return gr(r)===r}function wr(r){return r<R&&r>pr&&br(r)}function vr(r){return lr(r)&&wr(r)}function dr(r){return hr(r)&&wr(r.valueOf())}function Er(r){return vr(r)||dr(r)}function Ar(r){return vr(r)&&r>=0}function _r(r){return dr(r)&&r.valueOf()>=0}function Tr(r){return Ar(r)||_r(r)}y(Er,"isPrimitive",vr),y(Er,"isObject",dr),y(Tr,"isPrimitive",Ar),y(Tr,"isObject",_r);function jr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&br(r.length)&&r.length>=0&&r.length<=4294967295}function xr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&br(r.length)&&r.length>=0&&r.length<=9007199254740991}var Lr="function"==typeof ArrayBuffer;function Br(r){return Lr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===w(r)}function Vr(r){return"object"==typeof r&&null!==r&&!v(r)}var Sr=/./;function Rr(r){return"boolean"==typeof r}var kr=Boolean.prototype.toString;var Ir=h();function Cr(r){return"object"==typeof r&&(r instanceof Boolean||(Ir?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function Or(r){return Rr(r)||Cr(r)}function Mr(){return new Function("return this;")()}y(Or,"isPrimitive",Rr),y(Or,"isObject",Cr);var Ur="object"==typeof self?self:null,Fr="object"==typeof window?window:null,Nr="object"==typeof global?global:null;var Pr=function(r){if(arguments.length){if(!Rr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Mr()}if(Ur)return Ur;if(Fr)return Fr;if(Nr)return Nr;throw new Error("unexpected error. Unable to resolve global object.")}(),Yr=Pr.document&&Pr.document.childNodes,Wr=Int8Array;var Gr="function"==typeof Sr||"object"==typeof Wr||"function"==typeof Yr?function(r){return T(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?T(r).toLowerCase():e};function zr(r){return"function"===Gr(r)}function Jr(r,e){if(!(this instanceof Jr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!lr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!lr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}y(Jr,"BYTES_PER_ELEMENT",8),y(Jr.prototype,"BYTES_PER_ELEMENT",8),y(Jr.prototype,"byteLength",16),y(Jr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),y(Jr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Xr="function"==typeof Math.fround?Math.fround:null,qr=new C(1);var Dr="function"==typeof Xr?Xr:function(r){return qr[0]=r,qr[0]};function Hr(r,e){if(!(this instanceof Hr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!lr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!lr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Dr(r)}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Dr(e)}),this}function Kr(r){return r instanceof Jr||r instanceof Hr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Qr(r){return br(r/2)}function Zr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}y(Hr,"BYTES_PER_ELEMENT",4),y(Hr.prototype,"BYTES_PER_ELEMENT",4),y(Hr.prototype,"byteLength",8),y(Hr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),y(Hr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var $r=Zr()?Symbol.iterator:null;function re(r,e,t){c(r,e,{configurable:!1,enumerable:!1,get:t})}function ee(r){return r.re}function te(r){return r.im}function ne(r,e){return new C(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ie(r,e){return new V(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function oe(r,e){return r[e]}function ae(r,e){return r.get(e)}function ue(r,e,t){r[e]=t}function fe(r,e,t){r.set(t,e)}function le(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?ae:oe,setter:e?fe:ue}}function ce(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(jr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Kr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(ee(n),te(n))}return e}function ye(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,jr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Kr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(ee(o),te(o))}return n}function se(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Kr(n=e[i]))return null;r[o]=ee(n),r[o+1]=te(n),o+=2}return r}var he=2*C.BYTES_PER_ELEMENT,me=Zr();function pe(r){return r instanceof ve||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ge(r){return r===ve||"Complex128Array"===r.name}function be(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===he}function we(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*he}function ve(){var r,e,t,n;if(e=arguments.length,!(this instanceof ve))return 0===e?new ve:1===e?new ve(arguments[0]):2===e?new ve(arguments[0],arguments[1]):new ve(arguments[0],arguments[1],arguments[2]);if(0===e)t=new C(0);else if(1===e)if(Ar(arguments[0]))t=new C(2*arguments[0]);else if(xr(arguments[0]))if((n=(t=arguments[0]).length)&&v(t)&&Kr(t[0])){if(null===(t=se(new C(2*n),t))){if(!Qr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new C(arguments[0])}}else{if(be(t))t=ne(t,0);else if(we(t))t=ie(t,0);else if(!Qr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new C(t)}else if(Br(arguments[0])){if(!br((t=arguments[0]).byteLength/he))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+he+". Byte length: `"+t.byteLength+"`.");t=new C(t)}else{if(!Vr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===me)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!zr(t[$r]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!zr((t=t[$r]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ce(t))instanceof Error)throw t;t=new C(t)}else{if(!Br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ar(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!br(r/he))throw new RangeError("invalid argument. Byte offset must be a multiple of "+he+". Value: `"+r+"`.");if(2===e){if(!br((n=t.byteLength-r)/he))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+he+". View byte length: `"+n+"`.");t=new C(t,r)}else{if(!Ar(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*he>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*he+"`.");t=new C(t,r,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}function de(r){return r.re}function Ee(r){return r.im}function Ae(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(jr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Kr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(de(n),Ee(n))}return e}function _e(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,jr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Kr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(de(o),Ee(o))}return n}function Te(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Kr(n=e[i]))return null;r[o]=de(n),r[o+1]=Ee(n),o+=2}return r}y(ve,"BYTES_PER_ELEMENT",he),y(ve,"name","Complex64Array"),y(ve,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y;if(!zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!zr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(pe(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Kr(l=n.call(e,r.get(c),c)))o[y]=ee(l),o[y+1]=te(l);else{if(!(jr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(xr(r)){if(n){for(u=r.length,a=le(r),c=0;c<u;c++)if(!Kr(a.getter(r,c))){f=!0;break}if(f){if(!Qr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Kr(l=n.call(e,a.getter(r,c),c)))o[y]=ee(l),o[y+1]=te(l);else{if(!(jr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(Vr(r)&&me&&zr(r[$r])){if(!zr((o=r[$r]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?ye(o,n,e):ce(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),y(ve,"of",(function(){var r,e;if(!zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),re(ve.prototype,"buffer",(function(){return this._buffer.buffer})),re(ve.prototype,"byteLength",(function(){return this._buffer.byteLength})),re(ve.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(ve.prototype,"BYTES_PER_ELEMENT",ve.BYTES_PER_ELEMENT),y(ve.prototype,"copyWithin",(function(r,e){if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),y(ve.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Hr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),$r&&y(t,$r,(function(){return e.entries()})),t})),y(ve.prototype,"get",(function(r){var e;if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ar(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Hr((e=this._buffer)[r*=2],e[r+1])})),re(ve.prototype,"length",(function(){return this._length})),y(ve.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!pe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ar(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Kr(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ee(r),void(n[t+1]=te(r))}if(pe(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*he,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new C(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!xr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!Kr(r[f])){o=!0;break}if(o){if(!Qr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*he,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new C(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ee(u),n[t+1]=te(u),t+=2}}));var je=2*V.BYTES_PER_ELEMENT,xe=Zr();function Le(r){return r instanceof Re||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Be(r){return r===Re||"Complex64Array"===r.name}function Ve(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===je/2}function Se(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===je}function Re(){var r,e,t,n;if(e=arguments.length,!(this instanceof Re))return 0===e?new Re:1===e?new Re(arguments[0]):2===e?new Re(arguments[0],arguments[1]):new Re(arguments[0],arguments[1],arguments[2]);if(0===e)t=new V(0);else if(1===e)if(Ar(arguments[0]))t=new V(2*arguments[0]);else if(xr(arguments[0]))if((n=(t=arguments[0]).length)&&v(t)&&Kr(t[0])){if(null===(t=Te(new V(2*n),t))){if(!Qr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new V(arguments[0])}}else{if(Ve(t))t=ne(t,0);else if(Se(t))t=ie(t,0);else if(!Qr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new V(t)}else if(Br(arguments[0])){if(!br((t=arguments[0]).byteLength/je))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+je+". Byte length: `"+t.byteLength+"`.");t=new V(t)}else{if(!Vr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===xe)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!zr(t[$r]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!zr((t=t[$r]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ae(t))instanceof Error)throw t;t=new V(t)}else{if(!Br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ar(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!br(r/je))throw new RangeError("invalid argument. Byte offset must be a multiple of "+je+". Value: `"+r+"`.");if(2===e){if(!br((n=t.byteLength-r)/je))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+je+". View byte length: `"+n+"`.");t=new V(t,r)}else{if(!Ar(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*je>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*je+"`.");t=new V(t,r,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}y(Re,"BYTES_PER_ELEMENT",je),y(Re,"name","Complex128Array"),y(Re,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y;if(!zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!zr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Le(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Kr(l=n.call(e,r.get(c),c)))o[y]=de(l),o[y+1]=Ee(l);else{if(!(jr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(xr(r)){if(n){for(u=r.length,a=le(r),c=0;c<u;c++)if(!Kr(a.getter(r,c))){f=!0;break}if(f){if(!Qr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Kr(l=n.call(e,a.getter(r,c),c)))o[y]=de(l),o[y+1]=Ee(l);else{if(!(jr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(Vr(r)&&xe&&zr(r[$r])){if(!zr((o=r[$r]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?_e(o,n,e):Ae(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),y(Re,"of",(function(){var r,e;if(!zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),re(Re.prototype,"buffer",(function(){return this._buffer.buffer})),re(Re.prototype,"byteLength",(function(){return this._buffer.byteLength})),re(Re.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(Re.prototype,"BYTES_PER_ELEMENT",Re.BYTES_PER_ELEMENT),y(Re.prototype,"copyWithin",(function(r,e){if(!Le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),y(Re.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Jr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),$r&&y(t,$r,(function(){return e.entries()})),t})),y(Re.prototype,"get",(function(r){var e;if(!Le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ar(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Jr((e=this._buffer)[r*=2],e[r+1])})),re(Re.prototype,"length",(function(){return this._length})),y(Re.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Le(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ar(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Kr(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=de(r),void(n[t+1]=Ee(r))}if(Le(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new V(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!xr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!Kr(r[f])){o=!0;break}if(o){if(!Qr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new V(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=de(u),n[t+1]=Ee(u),t+=2}}));var ke=[V,C,W,F,K,X,fr,rr,ir,ve,Re],Ie=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Ce=Ie.length;function Oe(r){var e;if(v(r))return"generic";if(E(r))return null;for(e=0;e<Ce;e++)if(r instanceof ke[e])return Ie[e];return j[T(r)]||null}var Me={float64:V,float32:C,generic:Array,int16:K,int32:W,int8:fr,uint16:X,uint32:F,uint8:rr,uint8c:ir,complex64:ve,complex128:Re};function Ue(r){return Me[r]||null}function Fe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}function Ne(r){var e,t;if(!Ar(r))throw new TypeError("invalid argument. First argument must be a nonnegative integer. Value: `"+r+"`.");if("generic"===(e=arguments.length>1?arguments[1]:"float64"))return Fe(r);if(null===(t=Ue(e)))throw new TypeError("invalid argument. Second argument must be a recognized data type. Value: `"+e+"`.");return new t(r)}return function(e){var t=Oe(e);if(null===t)throw new TypeError(r("01G2r",e));return arguments.length>1&&(t=arguments[1]),Ne(e.length,t)}}));
//# sourceMappingURL=index.js.map
