// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).zerosLike=r()}(this,(function(){"use strict";function e(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,f=i.__lookupGetter__,l=i.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=i,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(e,r,t.get),s&&u&&u.call(e,r,t.set),e};var c=t;function y(e,r,t){c(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(e,r){return null!=e&&p.call(e,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var b=h()?function(e){var r,t,n;if(null==e)return m.call(e);t=e[w],r=g(e,w);try{e[w]=void 0}catch(r){return m.call(e)}return n=m.call(e),r?e[w]=t:delete e[w],n}:function(e){return m.call(e)};var v=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};function d(e){return null!==e&&"object"==typeof e}function E(e){return d(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function A(){return/^\s*function\s*([^(]*)/i}y(d,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!v(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(d));var _=/^\s*function\s*([^(]*)/i;function T(e){var r,t,n;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=_.exec(n.toString()))return r[1]}return E(e)?"Buffer":t}y(A,"REGEXP",_);var j={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},x="function"==typeof Float64Array;var L="function"==typeof Float64Array?Float64Array:null;var B="function"==typeof Float64Array?Float64Array:void 0;var V=function(){var e,r,t;if("function"!=typeof L)return!1;try{r=new L([1,3.14,-3.14,NaN]),t=r,e=(x&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?B:function(){throw new Error("not implemented")},S="function"==typeof Float32Array;var R=Number.POSITIVE_INFINITY,k="function"==typeof Float32Array?Float32Array:null;var I="function"==typeof Float32Array?Float32Array:void 0;var C=function(){var e,r,t;if("function"!=typeof k)return!1;try{r=new k([1,3.14,-3.14,5e40]),t=r,e=(S&&t instanceof Float32Array||"[object Float32Array]"===b(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===R}catch(r){e=!1}return e}()?I:function(){throw new Error("not implemented")},O="function"==typeof Uint32Array;var M="function"==typeof Uint32Array?Uint32Array:null;var U="function"==typeof Uint32Array?Uint32Array:void 0;var F=function(){var e,r,t;if("function"!=typeof M)return!1;try{r=new M(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(O&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?U:function(){throw new Error("not implemented")},N="function"==typeof Int32Array;var P="function"==typeof Int32Array?Int32Array:null;var Y="function"==typeof Int32Array?Int32Array:void 0;var W=function(){var e,r,t;if("function"!=typeof P)return!1;try{r=new P([1,3.14,-3.14,2147483648]),t=r,e=(N&&t instanceof Int32Array||"[object Int32Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Y:function(){throw new Error("not implemented")},G="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null;var J="function"==typeof Uint16Array?Uint16Array:void 0;var X=function(){var e,r,t;if("function"!=typeof z)return!1;try{r=new z(r=[1,3.14,-3.14,65536,65537]),t=r,e=(G&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?J:function(){throw new Error("not implemented")},q="function"==typeof Int16Array;var D="function"==typeof Int16Array?Int16Array:null;var H="function"==typeof Int16Array?Int16Array:void 0;var K=function(){var e,r,t;if("function"!=typeof D)return!1;try{r=new D([1,3.14,-3.14,32768]),t=r,e=(q&&t instanceof Int16Array||"[object Int16Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?H:function(){throw new Error("not implemented")},Q="function"==typeof Uint8Array;var Z="function"==typeof Uint8Array?Uint8Array:null;var $="function"==typeof Uint8Array?Uint8Array:void 0;var ee=function(){var e,r,t;if("function"!=typeof Z)return!1;try{r=new Z(r=[1,3.14,-3.14,256,257]),t=r,e=(Q&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?$:function(){throw new Error("not implemented")},re="function"==typeof Uint8ClampedArray;var te="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ne="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ie=function(){var e,r,t;if("function"!=typeof te)return!1;try{r=new te([-1,0,1,3.14,4.99,255,256]),t=r,e=(re&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===b(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?ne:function(){throw new Error("not implemented")},oe="function"==typeof Int8Array;var ae="function"==typeof Int8Array?Int8Array:null;var ue="function"==typeof Int8Array?Int8Array:void 0;var fe=function(){var e,r,t;if("function"!=typeof ae)return!1;try{r=new ae([1,3.14,-3.14,128]),t=r,e=(oe&&t instanceof Int8Array||"[object Int8Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?ue:function(){throw new Error("not implemented")};function le(e){return"number"==typeof e}var ce=Number,ye=ce.prototype.toString;var se=h();function he(e){return"object"==typeof e&&(e instanceof ce||(se?function(e){try{return ye.call(e),!0}catch(e){return!1}}(e):"[object Number]"===b(e)))}function me(e){return le(e)||he(e)}y(me,"isPrimitive",le),y(me,"isObject",he);var pe=ce.NEGATIVE_INFINITY,ge=Math.floor;function we(e){return ge(e)===e}function be(e){return e<R&&e>pe&&we(e)}function ve(e){return le(e)&&be(e)}function de(e){return he(e)&&be(e.valueOf())}function Ee(e){return ve(e)||de(e)}function Ae(e){return ve(e)&&e>=0}function _e(e){return de(e)&&e.valueOf()>=0}function Te(e){return Ae(e)||_e(e)}y(Ee,"isPrimitive",ve),y(Ee,"isObject",de),y(Te,"isPrimitive",Ae),y(Te,"isObject",_e);function je(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&we(e.length)&&e.length>=0&&e.length<=4294967295}function xe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&we(e.length)&&e.length>=0&&e.length<=9007199254740991}var Le="function"==typeof ArrayBuffer;function Be(e){return Le&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===b(e)}function Ve(e){return"object"==typeof e&&null!==e&&!v(e)}var Se=/./;function Re(e){return"boolean"==typeof e}var ke=Boolean.prototype.toString;var Ie=h();function Ce(e){return"object"==typeof e&&(e instanceof Boolean||(Ie?function(e){try{return ke.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function Oe(e){return Re(e)||Ce(e)}function Me(){return new Function("return this;")()}y(Oe,"isPrimitive",Re),y(Oe,"isObject",Ce);var Ue="object"==typeof self?self:null,Fe="object"==typeof window?window:null,Ne="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Pe="object"==typeof Ne?Ne:null;var Ye=function(e){if(arguments.length){if(!Re(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Me()}if(Ue)return Ue;if(Fe)return Fe;if(Pe)return Pe;throw new Error("unexpected error. Unable to resolve global object.")}(),We=Ye.document&&Ye.document.childNodes,Ge=Int8Array;var ze="function"==typeof Se||"object"==typeof Ge||"function"==typeof We?function(e){return T(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?T(e).toLowerCase():r};function Je(e){return"function"===ze(e)}function Xe(e,r){if(!(this instanceof Xe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!le(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!le(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}y(Xe,"BYTES_PER_ELEMENT",8),y(Xe.prototype,"BYTES_PER_ELEMENT",8),y(Xe.prototype,"byteLength",16),y(Xe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),y(Xe.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var qe="function"==typeof Math.fround?Math.fround:null,De=new C(1);var He="function"==typeof qe?qe:function(e){return De[0]=e,De[0]};function Ke(e,r){if(!(this instanceof Ke))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!le(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!le(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:He(e)}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:He(r)}),this}function Qe(e){return e instanceof Xe||e instanceof Ke||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Ze(e){return we(e/2)}function $e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}y(Ke,"BYTES_PER_ELEMENT",4),y(Ke.prototype,"BYTES_PER_ELEMENT",4),y(Ke.prototype,"byteLength",8),y(Ke.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),y(Ke.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var er=$e()?Symbol.iterator:null;function rr(e,r,t){c(e,r,{configurable:!1,enumerable:!1,get:t})}function tr(e){return e.re}function nr(e){return e.im}function ir(e,r){return new C(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function or(e,r){return new V(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function ar(e,r){return e[r]}function ur(e,r){return e.get(r)}function fr(e,r,t){e[r]=t}function lr(e,r,t){e.set(t,r)}function cr(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?ur:ar,setter:r?lr:fr}}function yr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(je(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Qe(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(tr(n),nr(n))}return r}function sr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,je(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Qe(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(tr(o),nr(o))}return n}function hr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Qe(n=r[i]))return null;e[o]=tr(n),e[o+1]=nr(n),o+=2}return e}var mr=2*C.BYTES_PER_ELEMENT,pr=$e();function gr(e){return e instanceof dr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function wr(e){return e===dr||"Complex128Array"===e.name}function br(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===mr}function vr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*mr}function dr(){var e,r,t,n;if(r=arguments.length,!(this instanceof dr))return 0===r?new dr:1===r?new dr(arguments[0]):2===r?new dr(arguments[0],arguments[1]):new dr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new C(0);else if(1===r)if(Ae(arguments[0]))t=new C(2*arguments[0]);else if(xe(arguments[0]))if((n=(t=arguments[0]).length)&&v(t)&&Qe(t[0])){if(null===(t=hr(new C(2*n),t))){if(!Ze(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new C(arguments[0])}}else{if(br(t))t=ir(t,0);else if(vr(t))t=or(t,0);else if(!Ze(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new C(t)}else if(Be(arguments[0])){if(!we((t=arguments[0]).byteLength/mr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+mr+". Byte length: `"+t.byteLength+"`.");t=new C(t)}else{if(!Ve(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===pr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Je(t[er]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Je((t=t[er]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=yr(t))instanceof Error)throw t;t=new C(t)}else{if(!Be(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ae(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!we(e/mr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+mr+". Value: `"+e+"`.");if(2===r){if(!we((n=t.byteLength-e)/mr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+mr+". View byte length: `"+n+"`.");t=new C(t,e)}else{if(!Ae(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*mr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*mr+"`.");t=new C(t,e,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}function Er(e){return e.re}function Ar(e){return e.im}function _r(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(je(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Qe(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Er(n),Ar(n))}return r}function Tr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,je(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Qe(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(Er(o),Ar(o))}return n}function jr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Qe(n=r[i]))return null;e[o]=Er(n),e[o+1]=Ar(n),o+=2}return e}y(dr,"BYTES_PER_ELEMENT",mr),y(dr,"name","Complex64Array"),y(dr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!wr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Je(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(gr(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Qe(l=n.call(r,e.get(c),c)))o[y]=tr(l),o[y+1]=nr(l);else{if(!(je(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(xe(e)){if(n){for(u=e.length,a=cr(e),c=0;c<u;c++)if(!Qe(a.getter(e,c))){f=!0;break}if(f){if(!Ze(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Qe(l=n.call(r,a.getter(e,c),c)))o[y]=tr(l),o[y+1]=nr(l);else{if(!(je(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Ve(e)&&pr&&Je(e[er])){if(!Je((o=e[er]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?sr(o,n,r):yr(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),y(dr,"of",(function(){var e,r;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!wr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),rr(dr.prototype,"buffer",(function(){return this._buffer.buffer})),rr(dr.prototype,"byteLength",(function(){return this._buffer.byteLength})),rr(dr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(dr.prototype,"BYTES_PER_ELEMENT",dr.BYTES_PER_ELEMENT),y(dr.prototype,"copyWithin",(function(e,r){if(!gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),y(dr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Ke(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),er&&y(t,er,(function(){return r.entries()})),t})),y(dr.prototype,"get",(function(e){var r;if(!gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ae(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Ke((r=this._buffer)[e*=2],r[e+1])})),rr(dr.prototype,"length",(function(){return this._length})),y(dr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ae(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Qe(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=tr(e),void(n[t+1]=nr(e))}if(gr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*mr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new C(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!xe(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!Qe(e[f])){o=!0;break}if(o){if(!Ze(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*mr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new C(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=tr(u),n[t+1]=nr(u),t+=2}}));var xr=2*V.BYTES_PER_ELEMENT,Lr=$e();function Br(e){return e instanceof kr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Vr(e){return e===kr||"Complex64Array"===e.name}function Sr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===xr/2}function Rr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===xr}function kr(){var e,r,t,n;if(r=arguments.length,!(this instanceof kr))return 0===r?new kr:1===r?new kr(arguments[0]):2===r?new kr(arguments[0],arguments[1]):new kr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new V(0);else if(1===r)if(Ae(arguments[0]))t=new V(2*arguments[0]);else if(xe(arguments[0]))if((n=(t=arguments[0]).length)&&v(t)&&Qe(t[0])){if(null===(t=jr(new V(2*n),t))){if(!Ze(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new V(arguments[0])}}else{if(Sr(t))t=ir(t,0);else if(Rr(t))t=or(t,0);else if(!Ze(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new V(t)}else if(Be(arguments[0])){if(!we((t=arguments[0]).byteLength/xr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+xr+". Byte length: `"+t.byteLength+"`.");t=new V(t)}else{if(!Ve(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Lr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Je(t[er]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Je((t=t[er]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=_r(t))instanceof Error)throw t;t=new V(t)}else{if(!Be(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ae(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!we(e/xr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+xr+". Value: `"+e+"`.");if(2===r){if(!we((n=t.byteLength-e)/xr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+xr+". View byte length: `"+n+"`.");t=new V(t,e)}else{if(!Ae(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*xr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*xr+"`.");t=new V(t,e,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}y(kr,"BYTES_PER_ELEMENT",xr),y(kr,"name","Complex128Array"),y(kr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Je(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Br(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Qe(l=n.call(r,e.get(c),c)))o[y]=Er(l),o[y+1]=Ar(l);else{if(!(je(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(xe(e)){if(n){for(u=e.length,a=cr(e),c=0;c<u;c++)if(!Qe(a.getter(e,c))){f=!0;break}if(f){if(!Ze(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Qe(l=n.call(r,a.getter(e,c),c)))o[y]=Er(l),o[y+1]=Ar(l);else{if(!(je(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Ve(e)&&Lr&&Je(e[er])){if(!Je((o=e[er]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Tr(o,n,r):_r(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),y(kr,"of",(function(){var e,r;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),rr(kr.prototype,"buffer",(function(){return this._buffer.buffer})),rr(kr.prototype,"byteLength",(function(){return this._buffer.byteLength})),rr(kr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(kr.prototype,"BYTES_PER_ELEMENT",kr.BYTES_PER_ELEMENT),y(kr.prototype,"copyWithin",(function(e,r){if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),y(kr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Xe(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),er&&y(t,er,(function(){return r.entries()})),t})),y(kr.prototype,"get",(function(e){var r;if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ae(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Xe((r=this._buffer)[e*=2],r[e+1])})),rr(kr.prototype,"length",(function(){return this._length})),y(kr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ae(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Qe(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Er(e),void(n[t+1]=Ar(e))}if(Br(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*xr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new V(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!xe(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!Qe(e[f])){o=!0;break}if(o){if(!Ze(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*xr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new V(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Er(u),n[t+1]=Ar(u),t+=2}}));var Ir=[V,C,W,F,K,X,fe,ee,ie,dr,kr],Cr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Or=Cr.length;function Mr(e){var r;if(v(e))return"generic";if(E(e))return null;for(r=0;r<Or;r++)if(e instanceof Ir[r])return Cr[r];return j[T(e)]||null}var Ur={float64:V,float32:C,generic:Array,int16:K,int32:W,int8:fe,uint16:X,uint32:F,uint8:ee,uint8c:ie,complex64:dr,complex128:kr};function Fr(e){return Ur[e]||null}function Nr(e){return function(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}(0,e)}function Pr(e){var r,t;if(!Ae(e))throw new TypeError("invalid argument. First argument must be a nonnegative integer. Value: `"+e+"`.");if("generic"===(r=arguments.length>1?arguments[1]:"float64"))return Nr(e);if(null===(t=Fr(r)))throw new TypeError("invalid argument. Second argument must be a recognized data type. Value: `"+r+"`.");return new t(e)}return function(r){var t=Mr(r);if(null===t)throw new TypeError(e("01G2r",r));return arguments.length>1&&(t=arguments[1]),Pr(r.length,t)}}));
//# sourceMappingURL=index.js.map