!function(e){function t(t){for(var s,i,c=t[0],a=t[1],l=t[2],d=0,h=[];d<c.length;d++)i=c[d],o[i]&&h.push(o[i][0]),o[i]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);for(u&&u(t);h.length;)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},o={main:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;r.push([0,"vendor"]),n()}({"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){},"./resources/js/RelatedEntryTypesField.ts":
/*!************************************************!*\
  !*** ./resources/js/RelatedEntryTypesField.ts ***!
  \************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var s=n(/*! ./components/ChannelGroup */"./resources/js/components/ChannelGroup.ts"),o=function(){function e(){var e=this;this.activeSections=[],this.fieldContainer=document.querySelector("#types-unionco-relatedentrytypes-fields-RelatedEntryType-sources-field");var t=document.querySelector("[data-related-entry-types-channels]");if(t){this.channelGroup=new s.default(t);var n=JSON.parse(t.dataset.relatedEntryTypesChannels);this.sectionMap=n}this.updateActiveSections=this.updateActiveSections.bind(this),this.fieldContainer.addEventListener("channelChange",function(t){var n=t.detail,s=n.sectionUid,o=n.active;console.log(n),e.updateActiveSections(s,o)}),console.log(this)}return e.prototype.updateActiveSections=function(e,t){t?this.activeSections.includes(e)||this.activeSections.push(e):this.activeSections.includes(e)&&this.activeSections.remove(e)},e.fetchTemplates=function(e,t){var n={credentials:"same-origin",headers:{"X-Requested-With":"XMLHttpRequest"},method:"post",body:JSON.stringify({sectionUids:e,entryTypes:t})};return console.log(n),fetch("/admin/related-entry-types/types",n)},e}();t.default=o,new o},"./resources/js/components/Channel.ts":
/*!********************************************!*\
  !*** ./resources/js/components/Channel.ts ***!
  \********************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var s=function(){function e(e){this.checkbox=e;var t=e.value.match(/section\:(.*)/);t&&t.length&&(this.uid=t[0]),this.name=this.checkbox.value;var n=document.querySelector('label[for="'+this.checkbox.id+'"]');n&&(this.label=n.innerText),this.checkboxChangeHandler=this.checkboxChangeHandler.bind(this),this.checkbox.addEventListener("change",this.checkboxChangeHandler)}return e.prototype.checkboxChangeHandler=function(e){var t=e.target,n=new CustomEvent("channelChange",{detail:{sectionUid:this.uid,active:t.checked},bubbles:!0});return this.checkbox.dispatchEvent(n)},e}();t.default=s},"./resources/js/components/ChannelGroup.ts":
/*!*************************************************!*\
  !*** ./resources/js/components/ChannelGroup.ts ***!
  \*************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var s=n(/*! ./Channel */"./resources/js/components/Channel.ts"),o=function(){function e(e){this.node=e;var t=e.querySelectorAll('input[type="checkbox"]');this.channels=Array.from(t).map(function(e){return new s.default(e)}),console.log(this)}return e.prototype.getChannels=function(){return[]},e}();t.default=o},"./resources/scss/field.scss":
/*!***********************************!*\
  !*** ./resources/scss/field.scss ***!
  \***********************************/
/*! no static exports found */function(e,t,n){var s=n(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js!./field.scss */"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(s,o);s.locals&&(e.exports=s.locals)},0:
/*!**********************************************************************************!*\
  !*** multi ./resources/js/RelatedEntryTypesField.ts ./resources/scss/field.scss ***!
  \**********************************************************************************/
/*! no static exports found */function(e,t,n){n(/*! /Users/abryrath/Union/Library/relatedentrytypes/resources/js/RelatedEntryTypesField.ts */"./resources/js/RelatedEntryTypesField.ts"),e.exports=n(/*! /Users/abryrath/Union/Library/relatedentrytypes/resources/scss/field.scss */"./resources/scss/field.scss")}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL1JlbGF0ZWRFbnRyeVR5cGVzRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ2hhbm5lbC50cyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9DaGFubmVsR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Njc3MvZmllbGQuc2NzcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIm1haW4iLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfY29tcG9uZW50c19DaGFubmVsR3JvdXBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIlJlbGF0ZWRFbnRyeVR5cGVzRmllbGQiLCJfdGhpcyIsInRoaXMiLCJhY3RpdmVTZWN0aW9ucyIsImZpZWxkQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hhbm5lbEdyb3VwQ29udGFpbmVyIiwiY2hhbm5lbEdyb3VwIiwic2VjdGlvbk1hcERhdGEiLCJKU09OIiwicGFyc2UiLCJkYXRhc2V0IiwicmVsYXRlZEVudHJ5VHlwZXNDaGFubmVscyIsInNlY3Rpb25NYXAiLCJ1cGRhdGVBY3RpdmVTZWN0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZXZlbnREZXRhaWwiLCJkZXRhaWwiLCJzZWN0aW9uVWlkIiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwicmVtb3ZlIiwiZmV0Y2hUZW1wbGF0ZXMiLCJzZWN0aW9uVWlkcyIsImVudHJ5VHlwZXMiLCJvcHRzIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiWC1SZXF1ZXN0ZWQtV2l0aCIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJmZXRjaCIsIkNoYW5uZWwiLCJub2RlIiwiY2hlY2tib3giLCJ1aWRNYXRjaCIsIm1hdGNoIiwidWlkIiwibGFiZWwiLCJpZCIsImlubmVyVGV4dCIsImNoZWNrYm94Q2hhbmdlSGFuZGxlciIsImNoYW5nZUV2ZW50IiwidGFyZ2V0IiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImNoZWNrZWQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsIl9DaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJDaGFubmVsR3JvdXAiLCJjaGVja2JveGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoYW5uZWxzIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiZ2V0Q2hhbm5lbHMiLCJjb250ZW50Iiwib3B0aW9ucyIs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R0FDUnBDLEtBQUtvQyxLQUFPQSxFQUNaLElBQU1rQixFQUEyQ2xCLEVBQUttQixpQkFBaUIsMEJBQ3ZFdkQsS0FBS3dELFNBQVdDLE1BQU1DLEtBQUtKLEdBQVlLLElBQUksU0FBQ3RCLEdBQStCLFdBQUllLEVBQUEsUUFBUWYsS0FDdkZqQixRQUFRQyxJQUFJckIsTUFNcEIsT0FIV3FELEVBQUEzRyxVQUFBa0gsWUFBUCxXQUNJLE1BQU8sSUFFZlAsRUFkQTs7Ozs4Q0NIQSxJQUFBUSxFQUFjcEcsMk1BQVEsNk1BRXRCLGlCQUFBb0csTUFBQSxFQUE0Qy9GLEVBQUExQixFQUFTeUgsRUFBQSxNQU9yRCxJQUFBQyxFQUFBLENBQWVDLEtBQUEsRUFFZkMsZUFQQUEsRUFRQUMsZ0JBQUFDLEdBRWF6Ryx5REFBUSwrQ0FBUkEsQ0FBMkRvRyxFQUFBQyxHQUV4RUQsRUFBQU0sU0FBQXJHLEVBQUFELFFBQUFnRyxFQUFBTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgSUNoYW5uZWxHcm91cCBmcm9tICcuL2ludGVyZmFjZXMvSUNoYW5uZWxHcm91cCc7XG5pbXBvcnQgQ2hhbm5lbEdyb3VwIGZyb20gJy4vY29tcG9uZW50cy9DaGFubmVsR3JvdXAnO1xuaW1wb3J0IElTZWN0aW9uTWFwIGZyb20gJy4vaW50ZXJmYWNlcy9JU2VjdGlvbk1hcCc7XG5pbXBvcnQgSUNoYW5uZWwgZnJvbSAnLi9pbnRlcmZhY2VzL0lDaGFubmVsJztcbmltcG9ydCBTZWN0aW9uTWFwIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9uTWFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsYXRlZEVudHJ5VHlwZXNGaWVsZCB7XG4gICAgcHVibGljIGNoYW5uZWxHcm91cDogSUNoYW5uZWxHcm91cDtcbiAgICBwdWJsaWMgZmllbGRDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIC8vIHB1YmxpYyBlbnRyeVR5cGVHcm91cDogSUVudHJ5VHlwZUdyb3VwO1xuICAgIHByaXZhdGUgc2VjdGlvbk1hcDogSVNlY3Rpb25NYXA7XG4gICAgcHVibGljIGFjdGl2ZVNlY3Rpb25zOiBzdHJpbmdbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTZWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVzLXVuaW9uY28tcmVsYXRlZGVudHJ5dHlwZXMtZmllbGRzLVJlbGF0ZWRFbnRyeVR5cGUtc291cmNlcy1maWVsZCcpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGNoYW5uZWxzIHNlbGVjdCBhcmVhXG4gICAgICAgIGNvbnN0IGNoYW5uZWxHcm91cENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yZWxhdGVkLWVudHJ5LXR5cGVzLWNoYW5uZWxzXScpO1xuICAgICAgICBpZiAoY2hhbm5lbEdyb3VwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxHcm91cCA9IG5ldyBDaGFubmVsR3JvdXAoY2hhbm5lbEdyb3VwQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbk1hcERhdGE6IElTZWN0aW9uTWFwID0gSlNPTi5wYXJzZShjaGFubmVsR3JvdXBDb250YWluZXIuZGF0YXNldC5yZWxhdGVkRW50cnlUeXBlc0NoYW5uZWxzKTtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbk1hcCA9IHNlY3Rpb25NYXBEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3QgZW50cnlUeXBlR3JvdXBDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5maWVsZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbnRyeS10eXBlcy1zZWxlY3QtYXJlYV0nKTtcbiAgICAgICAgLy8gaWYgKGVudHJ5VHlwZXNHcm91cENvbnRhaW5lcikge1xuICAgICAgICAvLyAgICAgdGhpcy5lbnR5VHlwZUdyb3VwID0gbmV3IEVudHlUeXBlR3JvdXBcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIE1ldGhvZCBiaW5kaW5nXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZlU2VjdGlvbnMgPSB0aGlzLnVwZGF0ZUFjdGl2ZVNlY3Rpb25zLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXJzXG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbm5lbENoYW5nZScsIChlOiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnREZXRhaWwgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIGNvbnN0IHsgc2VjdGlvblVpZCwgYWN0aXZlIH0gPSBldmVudERldGFpbDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50RGV0YWlsKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlU2VjdGlvbnMoc2VjdGlvblVpZCwgYWN0aXZlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQWN0aXZlU2VjdGlvbnMoc2VjdGlvblVpZDogc3RyaW5nLCBhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZVNlY3Rpb25zLmluY2x1ZGVzKHNlY3Rpb25VaWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWN0aW9ucy5wdXNoKHNlY3Rpb25VaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2VjdGlvbnMuaW5jbHVkZXMoc2VjdGlvblVpZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNlY3Rpb25zLnJlbW92ZShzZWN0aW9uVWlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZmV0Y2hUZW1wbGF0ZXMoc2VjdGlvblVpZHM6IHN0cmluZ1tdLCBlbnRyeVR5cGVzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3Qgb3B0czogUmVxdWVzdEluaXQgPSB7XG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgXCJzZWN0aW9uVWlkc1wiOiBzZWN0aW9uVWlkcyxcbiAgICAgICAgICAgICAgICBcImVudHJ5VHlwZXNcIjogZW50cnlUeXBlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cob3B0cyk7XG4gICAgICAgIHJldHVybiBmZXRjaCgnL2FkbWluL3JlbGF0ZWQtZW50cnktdHlwZXMvdHlwZXMnLCBvcHRzKTtcbiAgICAgICAgLy8gLnRoZW4ocmVzcCA9PnogcmVzcC50ZXh0KCkpXG4gICAgICAgIC8vIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSk7XG4gICAgfVxufVxuXG5uZXcgUmVsYXRlZEVudHJ5VHlwZXNGaWVsZCgpO1xuXG4vLyBjb25zdCBhamF4T3B0cyA9IHtcbi8vICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbi8vICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0Jyxcbi8vICAgICB9XG4vLyB9O1xuXG4vLyBjbGFzcyBFbnRyeVR5cGUge1xuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVzLXVuaW9uY28tcmVsYXRlZGVudHJ5dHlwZXMtZmllbGRzLUVudHJ5VHlwZS1zb3VyY2VzLWZpZWxkJyk7XG4vLyAgICAgICAgIGlmICh0aGlzLmZpZWxkQ29udGFpbmVyKSB7XG4vLyAgICAgICAgICAgICB0aGlzLnNlY3Rpb25DaGVja2JveGVzID0gdGhpcy5maWVsZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMpO1xuLy8gICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMpIHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25DaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4gY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVTb3VyY2VzQ2hhbmdlLmJpbmQodGhpcykpKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIHRoaXMuZW50cnlUeXBlc1NlbGVjdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbnRyeS10eXBlcy1zZWxlY3QtYXJlYV0nKTtcbi8vICAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFNlY3Rpb25zID0gdGhpcy5nZXRTZWxlY3RlZFNlY3Rpb25zLmJpbmQodGhpcyk7XG4vLyAgICAgfVxuXG4vLyAgICAgZ2V0U2VsZWN0ZWRTZWN0aW9ucygpIHtcbi8vICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0aGlzLnNlY3Rpb25DaGVja2JveGVzLCBjaGVja2JveCA9PiB7XG4vLyAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoZWNrYm94KTtcbi8vICAgICAgICAgICAgIHJldHVybiBjaGVja2JveC5jaGVja2VkIHx8IGZhbHNlO1xuLy8gICAgICAgICB9KS5tYXAoY2hlY2tib3ggPT4ge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LnZhbHVlO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG5cbi8vICAgICBnZXRTZWxlY3RlZEVudHJ5VHlwZXMoKSB7XG4vLyAgICAgICAgIGNvbnN0IGVudHJ5VHlwZXNTZWN0aW9uID0gdGhpcy5lbnRyeVR5cGVzU2VsZWN0QXJlYS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbi8vICAgICAgICAgaWYgKGVudHJ5VHlwZXNTZWN0aW9uKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBlbnRyeVR5cGVDaGVja2JveGVzID0gZW50cnlUeXBlc1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbnRyeVR5cGVDaGVja2JveGVzKTtcbi8vICAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZW50cnlUeXBlQ2hlY2tib3hlcywgY2hlY2tib3ggPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2JveC5jaGVja2VkO1xuLy8gICAgICAgICAgICAgfSkubWFwKGNoZWNrYm94ID0+IHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3gudmFsdWU7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIHJldHVybiBudWxsO1xuLy8gICAgIH1cblxuLy8gICAgIGhhbmRsZVNvdXJjZXNDaGFuZ2UoZSkge1xuLy8gICAgICAgICBjb25zdCBzZWxlY3RlZFNlY3Rpb25zID0gdGhpcy5nZXRTZWxlY3RlZFNlY3Rpb25zKCk7XG4vLyAgICAgICAgIGNvbnN0IHNlbGVjdGVkRW50cnlUeXBlcyA9IHRoaXMuZ2V0U2VsZWN0ZWRFbnRyeVR5cGVzKCk7XG5cbi8vICAgICAgICAgaWYgKHNlbGVjdGVkU2VjdGlvbnMubGVuZ3RoIDwgMSkge1xuLy8gICAgICAgICAgICAgdGhpcy5lbnRyeVR5cGVzU2VsZWN0QXJlYS5pbm5lckhUTUwgPSAnJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBBcGlDbGllbnQuZ2V0VGVtcGxhdGUoc2VsZWN0ZWRTZWN0aW9ucywgc2VsZWN0ZWRFbnRyeVR5cGVzKVxuLy8gICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5lbnRyeVR5cGVzU2VsZWN0QXJlYS5pbm5lckhUTUwgPSBkYXRhO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjbGFzcyBBcGlDbGllbnQge1xuLy8gICAgIHN0YXRpYyBnZXRUZW1wbGF0ZShzZWN0aW9uVWlkcywgZW50cnlUeXBlcykge1xuLy8gICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgICAgICAgICAgbGV0IG9wdHMgPSB7XG4vLyAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgICAgICAgICAgIFwic2VjdGlvblVpZHNcIjogc2VjdGlvblVpZHMsXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiZW50cnlUeXBlc1wiOiBlbnRyeVR5cGVzXG4vLyAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIH07XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRzKTtcbi8vICAgICAgICAgICAgIGZldGNoKCcvYWRtaW4vcmVsYXRlZC1lbnRyeS10eXBlcy90eXBlcycsIG9wdHMpXG4vLyAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLnRleHQoKSlcbi8vICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHJlc29sdmUoZGF0YSkpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIChmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbi8vICAgICB2YXIgcGx1Z2luTmFtZSA9IFwiUmVsYXRlZEVudHJ5VHlwZXNcIixcbi8vICAgICAgICAgZGVmYXVsdHMgPSB7fTtcblxuLy8gICAgIC8vIFBsdWdpbiBjb25zdHJ1Y3RvclxuLy8gICAgIGZ1bmN0aW9uIFBsdWdpbihlbGVtZW50LCBvcHRpb25zKSB7XG4vLyAgICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbi8vICAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuLy8gICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuLy8gICAgICAgICB0aGlzLl9uYW1lID0gcGx1Z2luTmFtZTtcblxuLy8gICAgICAgICB0aGlzLmluaXQoKTtcbi8vICAgICB9XG5cbi8vICAgICBQbHVnaW4ucHJvdG90eXBlID0ge1xuXG4vLyAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChpZCkge1xuLy8gICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuLy8gICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XG5cbi8vICAgICAgICAgICAgICAgICAvKiAtLSBfdGhpcy5vcHRpb25zIGdpdmVzIHVzIGFjY2VzcyB0byB0aGUgJGpzb25WYXJzIHRoYXQgb3VyIEZpZWxkVHlwZSBwYXNzZWQgZG93biB0byB1cyAqL1xuXG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH07XG5cbi8vICAgICAvLyBBIHJlYWxseSBsaWdodHdlaWdodCBwbHVnaW4gd3JhcHBlciBhcm91bmQgdGhlIGNvbnN0cnVjdG9yLFxuLy8gICAgIC8vIHByZXZlbnRpbmcgYWdhaW5zdCBtdWx0aXBsZSBpbnN0YW50aWF0aW9uc1xuLy8gICAgICQuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuLy8gICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgICAgIGlmICghJC5kYXRhKHRoaXMsIFwicGx1Z2luX1wiICsgcGx1Z2luTmFtZSkpIHtcbi8vICAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgXCJwbHVnaW5fXCIgKyBwbHVnaW5OYW1lLFxuLy8gICAgICAgICAgICAgICAgICAgICBuZXcgUGx1Z2luKHRoaXMsIG9wdGlvbnMpKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSk7XG4vLyAgICAgfTtcblxuLy8gfSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLy8gd2luZG93LlJlbGF0ZWRFbnRyeVR5cGVzRmllbGQgPSBSZWxhdGVkRW50cnlUeXBlc0ZpZWxkOyIsImltcG9ydCBJQ2hhbm5lbCBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JQ2hhbm5lbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFubmVsIGltcGxlbWVudHMgSUNoYW5uZWwge1xuICAgIHByaXZhdGUgY2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgdWlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSBub2RlO1xuICAgICAgICBjb25zdCB1aWRNYXRjaCA9IG5vZGUudmFsdWUubWF0Y2goL3NlY3Rpb25cXDooLiopLyk7XG4gICAgICAgIFxuICAgICAgICBpZiAodWlkTWF0Y2ggJiYgdWlkTWF0Y2gubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnVpZCA9IHVpZE1hdGNoWzBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuY2hlY2tib3gudmFsdWU7XG4gICAgICAgIGNvbnN0IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHt0aGlzLmNoZWNrYm94LmlkfVwiXWApO1xuICAgICAgICBcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWwuaW5uZXJUZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja2JveENoYW5nZUhhbmRsZXIgPSB0aGlzLmNoZWNrYm94Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hlY2tib3hDaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBjaGVja2JveENoYW5nZUhhbmRsZXIoY2hhbmdlRXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRhcmdldDogSFRNTElucHV0RWxlbWVudCA9IGNoYW5nZUV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5uZWxDaGFuZ2UnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uVWlkOiB0aGlzLnVpZCxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2JveC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IElDaGFubmVsR3JvdXAgZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ2hhbm5lbEdyb3VwJztcbmltcG9ydCBJQ2hhbm5lbCBmcm9tICcuLi9pbnRlcmZhY2VzL0lDaGFubmVsJztcbmltcG9ydCBDaGFubmVsIGZyb20gJy4vQ2hhbm5lbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWxHcm91cCBpbXBsZW1lbnRzIElDaGFubmVsR3JvdXAge1xuICAgIHByaXZhdGUgY2hhbm5lbHM6IElDaGFubmVsW107XG4gICAgcHJpdmF0ZSBub2RlOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXM6IE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD4gPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0gQXJyYXkuZnJvbShjaGVja2JveGVzKS5tYXAoKGNoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50KSA9PiBuZXcgQ2hhbm5lbChjaGVja2JveCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2hhbm5lbHMoKTogSUNoYW5uZWxbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ZpZWxkLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ZpZWxkLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/ZW1iZWRkZWQhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9maWVsZC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==