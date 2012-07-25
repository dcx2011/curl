/*
 MIT License (c) copyright B Cavalier & J Hann */
var h=!0,k=!1,l=this.window||global;function m(){}function o(a,b){return 0==aa.call(a).indexOf("[object "+b)}function p(a){return a&&"/"==a.charAt(a.length-1)?a.substr(0,a.length-1):a}function r(a,b){var c,e,d;e=1;a=a.replace(ca,function(a,b,c,j){c&&e++;d=h;return j||""});return d?(c=b.split("/"),c.splice(c.length-e,e),c.concat(a||[]).join("/")):a}function s(a){var b=a.indexOf("!");return{I:a.substr(b+1),j:0<=b&&a.substr(0,b)}}function t(){}
function u(a,b){t.prototype=a||v;var c=new t;t.prototype=v;for(var e in b)c[e]=b[e];return c}function x(){function a(a,b,d){e.push([a,b,d])}function b(a,b){for(var d,c=0;d=e[c++];)(d=d[a])&&d(b)}var c,e,d;c=this;e=[];d=function(c,f){a=c?function(a){a&&a(f)}:function(a,b){b&&b(f)};d=m;b(c?0:1,f);b=m;e=y};this.X=function(b,d,c){a(b,d,c)};this.h=function(a){c.da=a;d(h,a)};this.e=function(a){c.ca=a;d(k,a)};this.p=function(a){b(2,a)}}function z(a,b,c,e){a instanceof x?a.X(b,c,e):b(a)}
function A(a,b,c){var e;return function(){0<=--a&&b&&(e=b.apply(y,arguments));0==a&&c&&c(e);return e}}function B(){function a(b,d,c){var f;f=D.c(E,y,[].concat(b));this.then=b=function(a,b){z(f,function(b){a&&a.apply(y,b)},function(a){if(b)b(a);else throw a;});return this};this.next=function(b,d){return new a(b,d,f)};d&&b(d);z(c,function(){D.i(f)})}var b=[].slice.call(arguments),c;o(b[0],"Object")&&(c=b.shift(),E=D.b(c,E),D.s(c));return new a(b[0],b[1])}
function F(a){var b=a.id;if(b==y)if(G!==y)G={z:"Multiple anonymous defines in url"};else if(!(b=D.S()))G=a;if(b!=y){var c=H[b];b in H||(c=D.l(b,E).b,c=H[b]=D.u(c,b));if(!(c instanceof x))throw Error("duplicate define: "+b);c.Z=k;D.v(c,a)}}
var E=l.curl,I,K,L=l.document,M=L&&(L.head||L.getElementsByTagName("head")[0]),N={},O={},P={},Q={},v={},aa=v.toString,y,R={loaded:1,interactive:P,complete:1},H={},S=k,G,da=/\?/,ea=/^\/|^[^:]+:\/\//,ca=/(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g,fa=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,ga=/require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g,T,D;
D={c:function(a,b,c,e){function d(a){return r(a,f.f)}function g(b,c){var g,n,J,ba;g=c&&function(a){c.apply(y,a)};if(o(b,"String")){n=d(b);J=H[n];ba=J instanceof x&&J.a;if(!(n in H))throw Error("Module not resolved: "+n);if(g)throw Error("require(id, callback) not allowed");return ba||J}z(D.i(D.c(a,f.f,b,e)),g)}var f;f=new x;f.f=f.id=b||"";f.T=e;f.w=c;f.k=g;g.toUrl=function(b){return D.l(d(b),a).url};f.Y=d;return f},u:function(a,b,c,e){var d,g,f;d=D.c(a,b,y,c);d.f=e==y?b:e;g=d.h;f=A(1,function(a){d.n=
a;try{return D.L(d)}catch(b){d.e(b)}});d.h=function(a){z(c||S,function(){g(H[d.id]=f(a))})};d.A=function(a){z(c||S,function(){d.a&&(f(a),d.p(O))})};return d},K:function(a,b,c,e){a=D.c(a,b,y,c);a.f=e;return a},R:function(a){return a.k},B:function(a){return a.a||(a.a={})},Q:function(a){var b=a.o;b||(b=a.o={id:a.id,uri:D.C(a),exports:D.B(a)},b.a=b.exports);return b},C:function(a){return a.url||(a.url=D.t(a.k.toUrl(a.id)))},b:function(a){var b,c,e;(b=a)||(a={});c=a.apiName||"curl";e=a.apiContext||l;if(e!=
l||"curl"!=c?e[c]:I&&b)throw Error(c+" already exists");e[c]=B;I&&b&&(l.curl=I);c=a.defineName||"define";e=a.defineContext||l;if(e!=l||"define"!=c?e[c]:K&&b)throw Error(c+" already exists");e[c]=c=function(){var a=D.P(arguments);F(a)};K&&b&&(l.define=K);c.amd={plugins:h,jQuery:h,$:"0.6.6"};b&&(D.b=D.F);return D.F(a)},F:function(a,b){function c(a,b){var c,e,f,i,C;for(C in a){f=a[C];f.name=f.id||f.name||C;i=d;e=s(p(f.name||C));c=e.I;if(e=e.j)i=g[e],i||(i=g[e]=u(d),i.g=u(d.g),i.d=[]),delete a[C];if(b){e=
f;var w=void 0;e.path=p(e.path||e.location||"");w=p(e.main)||"main";"."!=w.charAt(0)&&(w="./"+w);e.D=r(w,e.name+"/");e.V=r(w,e.path+"/");e.b=e.config}else e={path:p(f)};e.J=c.split("/").length;c?(i.g[c]=e,i.d.push(c)):i.r=D.H(f,d)}}function e(a){var b=a.g;a.W=RegExp("^("+a.d.sort(function(a,c){return b[a].J<b[c].J}).join("|").replace(/\/|\./g,"\\$&")+")(?=\\/|$)");delete a.d}var d,g;b||(b={});d=u(b,a);d.r=d.baseUrl||"";d.G=d.pluginPath||"curl/plugin";d.g=u(b.g);g=d.plugins=u(b.plugins,a.plugins);
d.d=[];c(a.paths,k);c(a.packages,h);for(var f in g){var i=g[f].d;i&&(g[f].d=i.concat(d.d),e(g[f]))}e(d);return d},s:function(a){var b;(b=a&&a.preloads)&&0<b.length&&z(S,function(){S=D.i(D.c(E,y,b,h))})},l:function(a,b,c){var e,d,g,f;e=b.g;c&&(b.G&&0>a.indexOf("/")&&!(a in e))&&(g=a=p(b.G)+"/"+a);c=ea.test(a)?a:a.replace(b.W,function(b){d=e[b]||{};f=d.b;return d.D&&b==a?(g=d.D,d.V):d.path||""});return{f:g||a,b:f||E,url:D.H(c,b)}},H:function(a,b){var c=b.r;return c&&!ea.test(a)?p(c)+"/"+a:a},t:function(a){return a+
(da.test(a)?"":".js")},U:function(a,b,c){var e=L.createElement("script");e.onload=e.onreadystatechange=function(c){c=c||l.event;if("load"==c.type||R[e.readyState])delete Q[a.id],e.onload=e.onreadystatechange=e.onerror="",b()};e.onerror=function(){c(Error("Syntax or http error: "+a.url))};e.type=a.aa||"text/javascript";e.charset="utf-8";e.async=!a.ba;e.src=a.url;Q[a.id]=e;M.insertBefore(e,M.firstChild);return e},M:function(a){var b=[],c;("string"==typeof a?a:a.toSource?a.toSource():a.toString()).replace(fa,
"").replace(ga,function(a,d,g){g?c=c==g?y:c:c||b.push(d);return a});return b},P:function(a){var b,c,e,d,g,f;g=a.length;e=a[g-1];d=o(e,"Function")?e.length:-1;2==g?o(a[0],"Array")?c=a[0]:b=a[0]:3==g&&(b=a[0],c=a[1]);!c&&0<d&&(f=h,c=["require","exports","module"].slice(0,d).concat(D.M(e)));return{id:b,n:c||[],q:0<=d?e:function(){return e},m:f}},L:function(a){var b;b=a.q.apply(a.m?a.a:y,a.n);b===y&&a.a&&(b=a.o?a.a=a.o.a:a.a);return b},v:function(a,b){a.q=b.q;a.m=b.m;a.w=b.n;D.i(a)},i:function(a){function b(a,
b,c){f[b]=a;c&&q(a,b)}function c(b,c){var e,d,f,g;e=A(1,function(a){d(a);n(a,c)});d=A(1,function(a){q(a,c)});f=D.N(b,a);(g=f instanceof x&&f.a)&&d(g);z(f,e,a.e,a.a&&function(a){f.a&&(a==N?d(f.a):a==O&&e(f.a))})}function e(){a.h(f)}var d,g,f,i,j,q,n;f=[];g=a.w;i=g.length;0==g.length&&e();q=A(i,b,function(){a.A&&a.A(f)});n=A(i,b,e);for(d=0;d<i;d++)j=g[d],j in T?(n(T[j](a),d,h),a.a&&a.p(N)):j?c(j,d):n(y,d,h);return a},O:function(a){D.C(a);D.U(a,function(){var b=G;G=y;a.Z!==k&&(!b||b.z?a.e(Error(b&&b.z||
"define() missing or duplicated: "+a.url)):D.v(a,b))},a.e);return a},N:function(a,b){var c,e,d,g,f,i,j,q,n;c=b.Y;e=b.T;d=s(a);i=d.I;g=c(d.j||i);j=D.l(g,E,!!d.j);if(d.j)f=g;else if(f=j.b.moduleLoader)i=g,g=f,j=D.l(f,E);d=H[g];g in H||(d=H[g]=D.u(j.b,g,e,j.f),d.url=D.t(j.url),D.O(d));g==f&&(q=new x,n=E.plugins[f]||E,z(d,function(a){var b,d,g;g=a.dynamic;i="normalize"in a?a.normalize(i,c,n)||"":c(i);d=f+"!"+i;b=H[d];if(!(d in H)){b=D.K(n,d,e,i);g||(H[d]=b);var j=function(a){b.h(a);g||(H[d]=a)};j.resolve=
j;j.reject=b.e;a.load(i,b.k,j,n)}q!=b&&z(b,q.h,q.e,q.p)},q.e));return q||d},S:function(){var a;if(!o(l.opera,"Opera"))for(var b in Q)if(R[Q[b].readyState]==P){a=b;break}return a}};T={require:D.R,exports:D.B,module:D.Q};B.version="0.6.6";"function"==typeof define&&(K=define);"function"==typeof E&&(I=E,E=k);E=D.b(E);D.s(E);H.curl=B;H["curl/_privileged"]={core:D,cache:H,cfg:E,_define:F,_curl:B,Promise:x};var U=this.document;
function ha(){if(!U.body)return k;V||(V=U.createTextNode(""));try{U.body.removeChild(U.body.appendChild(V));V=ia;return h}catch(a){return k}}function W(){var a;a=ja[U[X]]&&ha();if(!Y&&a){Y=h;for(clearTimeout(Z);ka=la.pop();)ka();ma&&(U[X]="complete");for(var b;b=na.shift();)b()}return a}function oa(){W();Y||(Z=setTimeout(oa,pa))}var X="readyState",ja={loaded:1,interactive:1,complete:1},na=[],ma=U&&"string"!=typeof U[X],Y=k,pa=10,$,ka,la=[],Z,ia,V;
$="addEventListener"in this?function(a,b){a.addEventListener(b,W,k);return function(){a.removeEventListener(b,W,k)}}:function(a,b){a.attachEvent("on"+b,W);return function(){a.detachEvent(b,W)}};U&&!W()&&(la=[$(this,"load"),$(U,"readystatechange"),$(this,"DOMContentLoaded")],Z=setTimeout(oa,pa));define("curl/domReady",function(){function a(a){Y?a():na.push(a)}a.then=a;a.amd=h;return a});var qa;
define("curl/shim/dojo16",["curl/_privileged","curl/domReady"],function(a,b){function c(a){a.ready||(a.ready=function(a){b(a)});a.nameToUrl||(a.nameToUrl=function(b,c){return a.toUrl(b+(c||""))});a.cache||(a.cache={})}var e=a._curl,d=a.core.c;c(e);typeof qa=="undefined"&&(qa=e);a.core.c=function(){var a=d.apply(this,arguments);c(a.k);return a};return h});define("domReady",["curl/domReady"],function(a){return{load:function(b,c,e){a(e)}}});
