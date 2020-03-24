!function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var _=n[o]={exports:{}};t[o][0].call(_.exports,(function(e){return i(t[o][1][e]||e)}),_,_.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(require,module,exports){"use strict";var angular=require("angular"),toJsonTable=require("json-to-table"),toMarkdownTable=require("markdown-table"),marked=require("marked"),jsonFormat=require("json-format"),pluralize=require("pluralize"),addLink=!1,descriptionColumn=!1;class ObjectType{constructor(e,t){this.objectName=e,this.object=t}}function capitalizeFirstLetter(e){return e[0].toUpperCase()+e.slice(1)}function isArray(e){return e&&"object"==typeof e&&e.constructor===Array}function isObject(e){return e&&"object"==typeof e&&e.constructor===Object}function addLinkedToStringType(e){return addLink?"["+e+"](#"+e.toLowerCase()+")":e}function objToDocType(e,t){var n=[];let r=[];for(let e in t){let i=e,a="";const o=capitalizeFirstLetter(pluralize.singular(e));isArray(t[e])?isObject(t[e][0])?(a="["+addLinkedToStringType(o)+"]",n=[...n,...objToDocType(o,t[e][0])]):a="["+typeof t[e][0]+"]":isObject(t[e])?(a=addLinkedToStringType(o),n=[...n,...objToDocType(o,t[e])]):a=typeof t[e],descriptionColumn?r.push({field_name:i,type:a,description:""}):r.push({field_name:i,type:a})}const i=new ObjectType(e,r);return n.push(i),n}angular.module("app",[require("angular-sanitize"),require("angular-highlightjs"),require("angular-clipboard").name]).controller("appController",(function($scope,$document,clipboard){$scope.jsonInputVisible=!0,$scope.jsonToMarkdownTable=function(){var inputObject;if($scope.error=null,$scope.processed=!1,$scope.jsonOutput="",$scope.markdownOutput="",$scope.htmlOutput="",addLink=$scope.addLink,descriptionColumn=$scope.descriptionColumn,$scope.jsonInput.trim())try{try{inputObject=eval("("+$scope.jsonInput+")")}catch(e){inputObject=JSON.parse($scope.jsonInput)}let listObjectType=objToDocType(capitalizeFirstLetter($scope.objName||"MainObject"),inputObject);listObjectType.reverse(),console.log(listObjectType);let jsonTextAll=[],markdownTextAll=[],htmlOutputTextAll=[];for(let e in listObjectType){const t=toJsonTable(listObjectType[e].object),n=jsonFormat(listObjectType[e]);let r=toMarkdownTable(t);r="### "+listObjectType[e].objectName+"\n\n"+r;const i=marked(r);jsonTextAll.push(n),markdownTextAll.push(r),htmlOutputTextAll.push(i),console.log(listObjectType[e])}$scope.jsonOutput=jsonTextAll.join("\n\n"),$scope.markdownOutput=markdownTextAll.join("\n\n"),$scope.htmlOutput=htmlOutputTextAll.join("<br>"),$scope.processed=!0}catch(e){throw $scope.error=e,e}},$scope.copyJson=function(){clipboard.copyText($scope.jsonOutput)},$scope.copyMarkdown=function(){clipboard.copyText($scope.markdownOutput)},$scope.copyHtml=function(){clipboard.copyText($scope.htmlOutput)},$scope.loadExample=function(){$scope.jsonInput='{\n  "id": 0,\n  "category": {\n    "id": 0,\n    "name": "string"\n  },\n  "name": "doggie",\n  "photoUrls": [\n    "string"\n  ],\n  "tags": [\n    {\n      "id": 0,\n      "name": "string"\n    }\n  ],\n  "status": "available"\n}',$scope.jsonToMarkdownTable()}}))},{angular:7,"angular-clipboard":2,"angular-highlightjs":3,"angular-sanitize":5,"json-format":195,"json-to-table":196,"markdown-table":198,marked:199,pluralize:200}],2:[function(e,t,n){var r,i;r=this,i=function(e){return e.module("angular-clipboard",[]).factory("clipboard",["$document","$window",function(e,t){return{copyText:function(n,r){var i=t.pageXOffset||e[0].documentElement.scrollLeft,a=t.pageYOffset||e[0].documentElement.scrollTop,o=r&&r.container||e[0].body,s=function(n,r){var i=e[0].createElement("textarea");return i.style.position="absolute",i.style.fontSize="12pt",i.style.border="0",i.style.padding="0",i.style.margin="0",i.style.left="-10000px",i.style.top=(t.pageYOffset||e[0].documentElement.scrollTop)+"px",i.textContent=n,i}(n);o.appendChild(s),function(t){try{e[0].body.style.webkitUserSelect="initial";var n=e[0].getSelection();n.removeAllRanges();var r=document.createRange();r.selectNodeContents(t),n.addRange(r),t.select(),t.setSelectionRange(0,999999);try{if(!e[0].execCommand("copy"))throw"failure copy"}finally{n.removeAllRanges()}}finally{e[0].body.style.webkitUserSelect=""}}(s),t.scrollTo(i,a),o.removeChild(s)},supported:"queryCommandSupported"in e[0]&&e[0].queryCommandSupported("copy")}}]).directive("clipboard",["clipboard",function(t){return{restrict:"A",scope:{onCopied:"&",onError:"&",text:"=",supported:"=?"},link:function(n,r){n.supported=t.supported,r.on("click",(function(i){try{t.copyText(n.text,r[0]),e.isFunction(n.onCopied)&&n.$evalAsync(n.onCopied())}catch(t){e.isFunction(n.onError)&&n.$evalAsync(n.onError({err:t}))}}))}}}])},"function"==typeof define&&define.amd?define(["angular"],i):"object"==typeof t&&t.exports?t.exports=i(e("angular")):r.angularClipboard=i(r.angular)},{angular:7}],3:[function(e,t,n){
/*! angular-highlightjs
version: 0.6.3
build date: 2017-01-04
author: Chih-Hsuan Fan
https://github.com/pc035860/angular-highlightjs.git */var r,i;r=this,i=function(e,t){var n,r,i,a,o,s=e.module("hljs",[]);return s.provider("hljsService",(function(){var n={};return{setOptions:function(t){e.extend(n,t)},getOptions:function(){return e.copy(n)},$get:function(){return(t.configure||e.noop)(n),t}}})),s.factory("hljsCache",["$cacheFactory",function(e){return e("hljsCache")}]),s.controller("HljsCtrl",["hljsCache","hljsService","$interpolate","$window",function(t,n,r,i){var a,o,s,l,c=this,_=null,u=null,d=null,p=!1,m=null,g=null,E=f(r.startSymbol())+"((.|\\s)+?)"+f(r.endSymbol());function f(e,t){var n=t?"\\\\$&":"\\$&";return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,n)}c.init=function(e){_=e},c.setInterpolateScope=function(e){p=e,d&&c.highlight(d)},c.setLanguage=function(e){u=e,d&&c.highlight(d)},c.highlightCallback=function(e){g=e},c._highlight=function(i){if(_){var a,o,s;if(d=i,p&&(s=function(e){for(var t,n=[],r=new RegExp(E,"g"),i="",a=0;null!==(t=r.exec(e));)i+=e.substring(a,t.index)+"∫",a=t.index+t[0].length,n.push(t[0]);return{code:i+=e.substr(a),tokens:n}}(i),i=s.code),u?(o=c._cacheKey(u,!!p,i),(a=t.get(o))||(a=n.highlight(u,n.fixMarkup(i),!0),t.put(o,a))):(o=c._cacheKey(!!p,i),(a=t.get(o))||(a=n.highlightAuto(n.fixMarkup(i)),t.put(o,a))),i=a.value,p){(m||e.noop)(),s&&(i=function(e,t){for(var n,r=new RegExp("∫","g"),i="",a=0;null!==(n=r.exec(e));)i+=e.substring(a,n.index)+t.shift(),a=n.index+n[0].length;return i+=e.substr(a)}(i,s.tokens));var l=r(i);m=p.$watch(l,(function(e,t){e!==t&&_.html(e)})),p.$apply(),_.html(l(p))}else _.html(i);_.addClass(a.language),null!==g&&e.isFunction(g)&&g()}},c.highlight=(a=c._highlight,o=17,function(){var e=this,t=arguments,n=function(){l=null,s||a.apply(e,t)},r=s&&!l;i.clearTimeout(l),l=i.setTimeout(n,o),r&&a.apply(e,t)}),c.clear=function(){_&&(d=null,_.text(""))},c.release=function(){_=null,p=null,(m||e.noop)(),m=null},c._cacheKey=function(){var e=Array.prototype.slice.call(arguments),t="!angular-highlightjs!";return e.join(t)}}]),n=["$parse",function(t){return{restrict:"EA",controller:"HljsCtrl",compile:function(n,r,i){var a=n[0].innerHTML.replace(/^(\r\n|\r|\n)/m,""),o=n[0].textContent.replace(/^(\r\n|\r|\n)/m,"");return n.html('<pre><code class="hljs"></code></pre>'),function(n,r,i,s){var l,c,_=function(t){return function(n){switch(n){case"escape":return e.isDefined(t.hljsEscape)?t.hljsEscape:t.escape;case"no-escape":return e.isDefined(t.hljsNoEscape)?t.hljsNoEscape:t.noEscape;case"onhighlight":return e.isDefined(t.hljsOnhighlight)?t.hljsOnhighlight:t.onhighlight}}}(i);e.isDefined(_("escape"))?l=t(_("escape")):e.isDefined(_("no-escape"))&&(l=t("false")),s.init(r.find("code")),_("onhighlight")&&s.highlightCallback((function(){n.$eval(_("onhighlight"))})),(a||o)&&function(t){var n=!0;return e.forEach(["source","include"],(function(e){t[e]&&(n=!1)})),n}(i)&&(c=l&&!l(n)?o:a,s.highlight(c)),n.$on("$destroy",(function(){s.release()}))}}}}],i=function(t){return function(){return{require:"?hljs",restrict:"A",link:function(n,r,i,a){a&&i.$observe(t,(function(t){e.isDefined(t)&&a.setLanguage(t)}))}}}},r=function(e){return function(){return{require:"?hljs",restrict:"A",link:function(t,n,r,i){i&&t.$watch(r[e],(function(e,n){(e||e!==n)&&i.setInterpolateScope(e?t:null)}))}}}},a=function(e){return function(){return{require:"?hljs",restrict:"A",link:function(t,n,r,i){i&&t.$watch(r[e],(function(e,t){e?i.highlight(e):i.clear()}))}}}},o=function(t){return["$http","$templateCache","$q",function(n,r,i){return{require:"?hljs",restrict:"A",compile:function(a,o,s){var l=o[t];return function(t,a,o,s){var c=0;s&&t.$watch(l,(function(t){var a,o,l=++c;t&&e.isString(t)?((a=r.get(t))||(o=i.defer(),n.get(t,{cache:r,transformResponse:function(e,t){return e}}).then((function(e){l===c&&o.resolve(e)})).catch((function(){l===c&&s.clear(),o.resolve()})),a=o.promise),i.when(a).then((function(t){t&&(e.isArray(t)?t=t[1]:e.isObject(t)&&(t=t.data),t=t.replace(/^(\r\n|\r|\n)/m,""),s.highlight(t))}))):s.clear()}))}}}}]},function(t){t.directive("hljs",n),e.forEach(["interpolate","hljsInterpolate","compile","hljsCompile"],(function(e){t.directive(e,r(e))})),e.forEach(["language","hljsLanguage"],(function(e){t.directive(e,i(e))})),e.forEach(["source","hljsSource"],(function(e){t.directive(e,a(e))})),e.forEach(["include","hljsInclude"],(function(e){t.directive(e,o(e))}))}(s),"hljs"},"object"==typeof n||"object"==typeof t&&t.exports?t.exports=i(e("angular"),e("highlight.js")):"function"==typeof define&&define.amd?define(["angular","hljs"],i):r.returnExports=i(r.angular,r.hljs)},{angular:7,"highlight.js":9}],4:[function(e,t,n){
/**
 * @license AngularJS v1.7.9
 * (c) 2010-2018 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function(e,t){"use strict";var n,r,i,a,o,s,l,c,_,u,d=t.$$minErr("$sanitize");t.module("ngSanitize",[]).provider("$sanitize",(function(){var p=!1,m=!1;this.$get=["$$sanitizeUri",function(e){return p=!0,m&&r(R,C),function(t){var n=[];return _(t,u(n,(function(t,n){return!/^unsafe:/.test(e(t,n))}))),n.join("")}}],this.enableSvg=function(e){return o(e)?(m=e,this):m},this.addValidElements=function(e){return p||(a(e)&&(e={htmlElements:e}),w(C,e.svgElements),w(f,e.htmlVoidElements),w(R,e.htmlVoidElements),w(R,e.htmlElements)),this},this.addValidAttrs=function(e){return p||r(I,x(e,!0)),this},n=t.bind,r=t.extend,i=t.forEach,a=t.isArray,o=t.isDefined,s=t.$$lowercase,l=t.noop,_=function(e,t){null==e?e="":"string"!=typeof e&&(e=""+e);var n=M(e);if(!n)return"";var r=5;do{if(0===r)throw d("uinput","Failed to sanitize html because the input is unstable");r--,e=n.innerHTML,n=M(e)}while(e!==n.innerHTML);var i=n.firstChild;for(;i;){switch(i.nodeType){case 1:t.start(i.nodeName.toLowerCase(),L(i.attributes));break;case 3:t.chars(i.textContent)}var a;if(!((a=i.firstChild)||(1===i.nodeType&&t.end(i.nodeName.toLowerCase()),a=$("nextSibling",i))))for(;null==a&&(i=$("parentNode",i))!==n;)a=$("nextSibling",i),1===i.nodeType&&t.end(i.nodeName.toLowerCase());i=a}for(;i=n.firstChild;)n.removeChild(i)},u=function(e,t){var r=!1,a=n(e,e.push);return{start:function(e,n){e=s(e),!r&&O[e]&&(r=e),r||!0!==R[e]||(a("<"),a(e),i(n,(function(n,r){var i=s(r),o="img"===e&&"src"===i||"background"===i;!0!==I[i]||!0===N[i]&&!t(n,o)||(a(" "),a(r),a('="'),a(P(n)),a('"'))})),a(">"))},end:function(e){e=s(e),r||!0!==R[e]||!0===f[e]||(a("</"),a(e),a(">")),e==r&&(r=!1)},chars:function(e){r||a(P(e))}}},c=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))};var g=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,E=/([^#-~ |!])/g,f=D("area,br,col,hr,img,wbr"),S=D("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),h=D("rp,rt"),b=r({},h,S),T=r({},S,D("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),v=r({},h,D("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),C=D("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),O=D("script,style"),R=r({},f,T,v,b),N=D("background,cite,href,longdesc,src,xlink:href,xml:base"),y=D("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),A=D("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),I=r({},N,A,y);function D(e,t){return x(e.split(","),t)}function x(e,t){var n,r={};for(n=0;n<e.length;n++)r[t?s(e[n]):e[n]]=!0;return r}function w(e,t){t&&t.length&&r(e,x(t))}var M=function(e,t){var n;if(!t||!t.implementation)throw d("noinert","Can't create an inert html document");var r=((n=t.implementation.createHTMLDocument("inert")).documentElement||n.getDocumentElement()).querySelector("body");return r.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',r.querySelector("svg")?(r.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',r.querySelector("svg img")?function(t){t="<remove></remove>"+t;try{var n=(new e.DOMParser).parseFromString(t,"text/html").body;return n.firstChild.remove(),n}catch(e){return}}:function(e){r.innerHTML=e,t.documentMode&&k(r);return r}):function(t){t="<remove></remove>"+t;try{t=encodeURI(t)}catch(e){return}var n=new e.XMLHttpRequest;n.responseType="document",n.open("GET","data:text/html;charset=utf-8,"+t,!1),n.send(null);var r=n.response.body;return r.firstChild.remove(),r}}(e,e.document);function L(e){for(var t={},n=0,r=e.length;n<r;n++){var i=e[n];t[i.name]=i.value}return t}function P(e){return e.replace(/&/g,"&amp;").replace(g,(function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"})).replace(E,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function k(t){for(;t;){if(t.nodeType===e.Node.ELEMENT_NODE)for(var n=t.attributes,r=0,i=n.length;r<i;r++){var a=n[r],o=a.name.toLowerCase();"xmlns:ns1"!==o&&0!==o.lastIndexOf("ns1:",0)||(t.removeAttributeNode(a),r--,i--)}var s=t.firstChild;s&&k(s),t=$("nextSibling",t)}}function $(e,t){var n=t[e];if(n&&c.call(t,n))throw d("elclob","Failed to sanitize html because the element is clobbered: {0}",t.outerHTML||t.outerText);return n}})).info({angularVersion:"1.7.9"}),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var n=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,r=/^mailto:/i,i=t.$$minErr("linky"),a=t.isDefined,o=t.isFunction,s=t.isObject,c=t.isString;return function(t,_,d){if(null==t||""===t)return t;if(!c(t))throw i("notstring","Expected string but received: {0}",t);for(var p,m,g,E=o(d)?d:s(d)?function(){return d}:function(){return{}},f=t,S=[];p=f.match(n);)m=p[0],p[2]||p[4]||(m=(p[3]?"http://":"mailto:")+m),g=p.index,h(f.substr(0,g)),b(m,p[0].replace(r,"")),f=f.substring(g+p[0].length);return h(f),e(S.join(""));function h(e){var t,n;e&&S.push((t=e,u(n=[],l).chars(t),n.join("")))}function b(e,t){var n,r=E(e);for(n in S.push("<a "),r)S.push(n+'="'+r[n]+'" ');a(_)&&!("target"in r)&&S.push('target="',_,'" '),S.push('href="',e.replace(/"/g,"&quot;"),'">'),h(t),S.push("</a>")}}}])}(window,window.angular)},{}],5:[function(e,t,n){e("./angular-sanitize"),t.exports="ngSanitize"},{"./angular-sanitize":4}],6:[function(e,t,n){
/**
 * @license AngularJS v1.7.9
 * (c) 2010-2018 Google, Inc. http://angularjs.org
 * License: MIT
 */