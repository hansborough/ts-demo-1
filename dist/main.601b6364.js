parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZCfc":[function(require,module,exports) {
var e=document.createElement("div");e.style.border="1px solid red",e.style.height="100px",e.style.width="100px",e.id="demo",document.body.appendChild(e);var t=!1,n=[0,0];e.onmousedown=function(e){t=!0,n=[e.clientX,e.clientY]},document.onmousemove=function(o){if(!0===t){var l=o.clientX-n[0],i=o.clientY-n[1],d=parseInt(e.style.top)||0,c=parseInt(e.style.left)||0;e.style.top=d+i+"px",e.style.left=c+l+"px",n=[o.clientX,o.clientY]}},document.onmouseup=function(){t=!1};
},{}]},{},["ZCfc"], null)
//# sourceMappingURL=/ts-demo-1/dist/main.601b6364.js.map