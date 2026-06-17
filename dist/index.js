"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var o=l(function(c,u){
var m=require('@stdlib/array-base-assert-contains/dist').factory,v=require('@stdlib/array-dtype/dist'),g=require('@stdlib/array-zeros/dist'),y=require('@stdlib/array-dtypes/dist'),i=require('@stdlib/array-base-join/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist'),t=y("numeric_and_generic"),n=m(t);function d(e){var r=v(e);if(r===null)throw new TypeError(a('02X2f',e));if(arguments.length>1){if(r=arguments[1],!n(r))throw new TypeError(a('02XDQ',i(t,'", "'),r))}else if(!n(r))throw new TypeError(a('02XKD',i(t,'", "'),r));return g(e.length,r)}u.exports=d
});var p=o();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
