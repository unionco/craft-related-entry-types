!function(x){function t(t,e,n){n=l(e,n);var a=function(t){var e=n;e.container||((e=x.extend({history:!0},n)).container=x(this).attr("data-pjax")),r(t,e)};return x(t).removeClass("data-pjax"),this.off("click.pjax",t,a).on("click.pjax",t,a)}function r(t,e,n){n=l(e,n);var a=t.currentTarget,r=x(a);if(0!==parseInt(r.data("pjax"))){if("A"!==a.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";if(!(1<t.which||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||location.protocol!==a.protocol||location.hostname!==a.hostname||-1<a.href.indexOf("#")&&c(a)==c(location)||t.isDefaultPrevented())){var i={url:a.href,container:r.attr("data-pjax"),target:a},o=x.extend({},i,n),s=x.Event("pjax:click");r.trigger(s,[o]),s.isDefaultPrevented()||(g(o),t.preventDefault(),r.trigger("pjax:clicked",[o]))}}}function e(t,e,n){if(!1===t.result)return!1;n=l(e,n);var a=t.currentTarget,r=x(a);if("FORM"!==a.tagName.toUpperCase())throw"$.pjax.submit requires a form element";var i={type:(r.attr("method")||"GET").toUpperCase(),url:r.attr("action"),container:r.attr("data-pjax"),target:a};if("GET"!==i.type&&void 0!==window.FormData)i.data=new FormData(a),i.processData=!1,i.contentType=!1;else{if(r.find(":file").length)return;i.data=r.serializeArray()}g(x.extend({},i,n)),t.preventDefault()}function g(d){d=x.extend(!0,{},x.ajaxSettings,g.defaults,d),x.isFunction(d.url)&&(d.url=d.url());var h=T(d.url).hash,t=x.type(d.container);if("string"!==t)throw"expected string value for 'container' option; got "+t;var r,m=d.context=x(d.container);if(!m.length)throw"the container selector '"+d.container+"' did not match anything";function v(t,e,n){n||(n={}),n.relatedTarget=d.target;var a=x.Event(t,n);return m.trigger(a,e),!a.isDefaultPrevented()}if(d.data||(d.data={}),x.isArray(d.data)?(d.data=x.grep(d.data,function(t){return"_pjax"!==t.name}),d.data.push({name:"_pjax",value:d.container})):d.data._pjax=d.container,d.beforeSend=function(t,e){if("GET"!==e.type&&(e.timeout=0),t.setRequestHeader("X-PJAX","true"),t.setRequestHeader("X-PJAX-Container",d.container),e.ieRedirectCompatibility){var n=window.navigator.userAgent;(0<n.indexOf("MSIE ")||0<n.indexOf("Trident/")||0<n.indexOf("Edge/"))&&t.setRequestHeader("X-Ie-Redirect-Compatibility","true")}if(!v("pjax:beforeSend",[t,e]))return!1;0<e.timeout&&(r=setTimeout(function(){v("pjax:timeout",[t,d])&&t.abort("timeout")},e.timeout),e.timeout=0);var a=T(e.url);h&&(a.hash=h),d.requestUrl=u(a)},d.complete=function(t,e){r&&clearTimeout(r),v("pjax:complete",[t,e,d]),v("pjax:end",[t,d])},d.error=function(t,e,n){var a=E("",t,d),r=301<=t.status&&t.status<=303,i=r||v("pjax:error",[t,e,n,d]);(r||"GET"==d.type&&"abort"!==e&&i)&&(d.replaceRedirect?y(a.url):d.pushRedirect&&(window.history.pushState(null,"",a.url),window.location.replace(a.url)))},d.success=function(t,e,n){var a=g.state,r="function"==typeof x.pjax.defaults.version?x.pjax.defaults.version():x.pjax.defaults.version,i=n.getResponseHeader("X-PJAX-Version"),o=E(t,n,d),s=T(o.url);if(h&&(s.hash=h,o.url=s.href),r&&i&&r!==i)y(o.url);else if(o.contents){if(g.state={id:d.id||w(),url:o.url,title:o.title,container:d.container,fragment:d.fragment,timeout:d.timeout,cache:d.cache},d.history&&(d.push||d.replace)&&window.history.replaceState(g.state,o.title,o.url),x.contains(m,document.activeElement))try{document.activeElement.blur()}catch(t){}o.title&&(document.title=o.title),v("pjax:beforeReplace",[o.contents,d],{state:g.state,previousState:a}),m.html(o.contents);var c=m.find("input[autofocus], textarea[autofocus]").last()[0];if(c&&document.activeElement!==c&&c.focus(),function(e,n){if(!e)return;var a=x("script[src]"),r=0,i=function(){if(!(r>=e.length)){var t=e[r];r++,function(t){var e=this.src;if(a.filter(function(){return this.src===e}).length)return void t();e?(x.getScript(e).done(t).fail(t),document.head.appendChild(this)):(n.append(this),t())}.call(t,i)}};i()}(o.scripts,m),function(t){if(!t)return;var n=x("link[href]");t.each(function(){var t=this.href,e=n.filter(function(){return this.href===t});e.length||document.head.appendChild(this)})}(o.links),"function"==typeof d.scrollTo)var l=d.scrollTo(m,h);else{l=d.scrollTo;if(h||!0===l){var u=decodeURIComponent(h.slice(1)),p=!0===l?m:document.getElementById(u)||document.getElementsByName(u)[0];p&&(l=x(p).offset().top)}}if("function"==typeof d.scrollOffset)var f=d.scrollOffset(l);else f=d.scrollOffset;"number"==typeof l&&((l+=f)<0&&(l=0),x(window).scrollTop(l)),v("pjax:success",[t,e,n,d])}else y(o.url)},g.state||(g.state={id:w(),url:window.location.href,title:document.title,container:d.container,fragment:d.fragment,timeout:d.timeout,cache:d.cache},d.history&&window.history.replaceState(g.state,document.title)),!(g.xhr&&g.xhr.readyState<4&&g.options.skipOuterContainers)){j(g.xhr),g.options=d;var e=g.xhr=x.ajax(d);return 0<e.readyState&&(d.history&&d.push&&!d.replace&&(!function(t,e){if(!g.options.cache)return;S[t]=e,R.push(t),k(C,0),k(R,g.defaults.maxCacheLength)}(g.state.id,[d.container,b(m)]),window.history.pushState(null,"",d.requestUrl)),v("pjax:start",[e,d]),v("pjax:send",[e,d])),g.xhr}}function n(t,e){var n={url:window.location.href,push:!1,replace:!0,scrollTo:!1};return g(x.extend(n,l(t,e)))}function y(t){g.options.history&&(window.history.replaceState(null,"",g.state.url),window.location.replace(t))}var p=!0,f=window.location.href,a=window.history.state;function i(t){p||j(g.xhr);var e,n=g.state,a=t.state;if(a&&a.container){if(p&&f==a.url)return;if(n){if(n.id===a.id)return;e=n.id<a.id?"forward":"back"}var r=S[a.id]||[],i=r[0]||a.container,o=x(i),s=r[1];if(o.length){var c={id:a.id,url:a.url,container:i,push:!1,fragment:a.fragment,timeout:a.timeout,cache:a.cache,scrollTo:!1};n&&c.cache&&function(t,e,n){var a,r;S[e]=n,r="forward"===t?(a=R,C):(a=C,R);a.push(e),(e=r.pop())&&delete S[e];k(a,g.defaults.maxCacheLength)}(e,n.id,[i,b(o)]);var l=x.Event("pjax:popstate",{state:a,direction:e});if(o.trigger(l),s){o.trigger("pjax:start",[null,c]),(g.state=a).title&&(document.title=a.title);var u=x.Event("pjax:beforeReplace",{state:a,previousState:n});o.trigger(u,[s,c]),o.html(s),o.trigger("pjax:end",[null,c])}else g(c);o[0].offsetHeight}else y(location.href)}p=!1}function o(t){var e=x.isFunction(t.url)?t.url():t.url,n=t.type?t.type.toUpperCase():"GET",a=x("<form>",{method:"GET"===n?"GET":"POST",action:e,style:"display:none"});"GET"!==n&&"POST"!==n&&a.append(x("<input>",{type:"hidden",name:"_method",value:n.toLowerCase()}));var r=t.data;if("string"==typeof r)x.each(r.split("&"),function(t,e){var n=e.split("=");a.append(x("<input>",{type:"hidden",name:n[0],value:n[1]}))});else if(x.isArray(r))x.each(r,function(t,e){a.append(x("<input>",{type:"hidden",name:e.name,value:e.value}))});else if("object"==typeof r){var i;for(i in r)a.append(x("<input>",{type:"hidden",name:i,value:r[i]}))}x(document.body).append(a),a.submit()}function j(t){t&&t.readyState<4&&(t.onreadystatechange=x.noop,t.abort())}function w(){return(new Date).getTime()}function b(t){var e=t.clone();return e.find("script").each(function(){this.src||x._data(this,"globalEval",!1)}),e.contents()}function u(t){return t.search=t.search.replace(/([?&])(_pjax|_)=[^&]*/g,"").replace(/^&/,""),t.href.replace(/\?($|#)/,"$1")}function T(t){var e=document.createElement("a");return e.href=t,e}function c(t){return t.href.replace(/#.*/,"")}function l(t,e){return t&&e?((e=x.extend({},e)).container=t,e):x.isPlainObject(t)?t:{container:t}}function d(t,e){return t.filter(e).add(t.find(e))}function h(t){return x.parseHTML(t,document,!0)}function E(t,e,n){var a,r,i={},o=/<html/i.test(t),s=e.getResponseHeader("X-PJAX-URL");if(i.url=s?u(T(s)):n.requestUrl,o){r=x(h(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));var c=t.match(/<head[^>]*>([\s\S.]*)<\/head>/i);a=null!=c?x(h(c[0])):r}else a=r=x(h(t));if(0===r.length)return i;if(i.title=d(a,"title").last().text(),n.fragment){var l=r;"body"!==n.fragment&&(l=d(l,n.fragment).first()),l.length&&(i.contents="body"===n.fragment?l:l.contents(),i.title||(i.title=l.attr("title")||l.data("title")))}else o||(i.contents=r);return i.contents&&(i.contents=i.contents.not(function(){return x(this).is("title")}),i.contents.find("title").remove(),i.scripts=d(i.contents,"script").remove(),i.contents=i.contents.not(i.scripts),i.links=d(i.contents,"link[href]").remove(),i.contents=i.contents.not(i.links)),i.title&&(i.title=x.trim(i.title)),i}a&&a.container&&(g.state=a),"state"in window.history&&(p=!1);var S={},C=[],R=[];function k(t,e){for(;t.length>e;)delete S[t.shift()]}function s(){return x("meta").filter(function(){var t=x(this).attr("http-equiv");return t&&"X-PJAX-VERSION"===t.toUpperCase()}).attr("content")}function m(){x.fn.pjax=t,x.pjax=g,x.pjax.enable=x.noop,x.pjax.disable=v,x.pjax.click=r,x.pjax.submit=e,x.pjax.reload=n,x.pjax.defaults={history:!0,cache:!0,timeout:650,push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,scrollOffset:0,maxCacheLength:20,version:s,pushRedirect:!1,replaceRedirect:!0,skipOuterContainers:!1,ieRedirectCompatibility:!0},x(window).on("popstate.pjax",i)}function v(){x.fn.pjax=function(){return this},x.pjax=o,x.pjax.enable=m,x.pjax.disable=x.noop,x.pjax.click=x.noop,x.pjax.submit=x.noop,x.pjax.reload=function(){window.location.reload()},x(window).off("popstate.pjax",i)}x.event.props&&x.inArray("state",x.event.props)<0?x.event.props.push("state"):"state"in x.Event.prototype||x.event.addProp("state"),x.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),x.support.pjax?m():v()}(jQuery);
//# sourceMappingURL=jquery.pjax.js.map
