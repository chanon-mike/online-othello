(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(4788),o=r(8754),i=r(1757),l=r(224),a=i._(r(7294)),u=o._(r(2636)),c=r(7757),s=r(3735),f=r(3341);r(4210);let d=o._(r(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/online-othello/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,i,l,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&l(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;o.current(n._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}function b(e){let[t,r]=a.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let y=(0,a.forwardRef)((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:i,qualityInt:u,className:c,imgStyle:s,blurStyle:f,isLazy:d,fetchPriority:p,fill:g,placeholder:h,loading:y,srcString:v,config:_,unoptimized:w,loader:C,onLoadRef:E,onLoadingCompleteRef:j,setBlurComplete:S,setShowAltText:P,onLoad:x,onError:M}=e,O=l._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return y=d?"lazy":y,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",n._({},O,b(p),{loading:y,width:i,height:o,decoding:"async","data-nimg":g?"fill":"1",className:c,style:n._({},s,f)},r,{ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(M&&(e.src=e.src),e.complete&&m(e,v,h,E,j,S,w))},[v,h,E,j,S,M,w,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,E,j,S,w)},onError:e=>{P(!0),"blur"===h&&S(!0),M&&M(e)}})))}),v=(0,a.forwardRef)((e,t)=>{let r,o;var i,{src:m,sizes:v,unoptimized:_=!1,priority:w=!1,loading:C,className:E,quality:j,width:S,height:P,fill:x,style:M,onLoad:O,onLoadingComplete:k,placeholder:R="empty",blurDataURL:I,fetchPriority:z,layout:L,objectFit:A,objectPosition:T,lazyBoundary:D,lazyRoot:N}=e,B=l._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let U=(0,a.useContext)(f.ImageConfigContext),F=(0,a.useMemo)(()=>{let e=p||U||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n._({},e,{allSizes:t,deviceSizes:r})},[U]),W=B,q=W.loader||d.default;delete W.loader;let G="__next_img_default"in q;if(G){if("custom"===F.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=q;q=t=>{let{config:r}=t,n=l._(t,["config"]);return e(n)}}if(L){"fill"===L&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(M=n._({},M,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!v&&(v=t)}let H="",K=h(S),V=h(P);if("object"==typeof(i=m)&&(g(i)||void 0!==i.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,I=I||e.blurDataURL,H=e.src,!x){if(K||V){if(K&&!V){let t=K/e.width;V=Math.round(e.height*t)}else if(!K&&V){let t=V/e.height;K=Math.round(e.width*t)}}else K=e.width,V=e.height}}let J=!w&&("lazy"===C||void 0===C);(!(m="string"==typeof m?m:H)||m.startsWith("data:")||m.startsWith("blob:"))&&(_=!0,J=!1),F.unoptimized&&(_=!0),G&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(_=!0),w&&(z="high");let[Y,$]=(0,a.useState)(!1),[Q,X]=(0,a.useState)(!1),Z=h(j),ee=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:T}:{},Q?{}:{color:"transparent"},M),et="blur"===R&&I&&!Y?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:K,heightInt:V,blurWidth:r,blurHeight:o,blurDataURL:I,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),s=u.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:u.map((e,n)=>"".concat(a({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:a({config:t,src:r,quality:i,width:u[s]})}}({config:F,src:m,unoptimized:_,width:K,quality:Z,sizes:v,loader:q}),en=m,eo=(0,a.useRef)(O);(0,a.useEffect)(()=>{eo.current=O},[O]);let ei=(0,a.useRef)(k);(0,a.useEffect)(()=>{ei.current=k},[k]);let el=n._({isLazy:J,imgAttributes:er,heightInt:V,widthInt:K,qualityInt:Z,className:E,imgStyle:ee,blurStyle:et,loading:C,config:F,fetchPriority:z,fill:x,unoptimized:_,placeholder:R,loader:q,srcString:en,onLoadRef:eo,onLoadingCompleteRef:ei,setBlurComplete:$,setShowAltText:X},W);return a.default.createElement(a.default.Fragment,null,a.default.createElement(y,n._({},el,{ref:t})),w?a.default.createElement(u.default,null,a.default.createElement("link",n._({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:W.crossOrigin},b(z)))):null)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let n=r(4788),o=r(8754),i=r(224),l=o._(r(7294)),a=r(4532),u=r(3353),c=r(1410),s=r(9064),f=r(370),d=r(9955),p=r(4224),g=r(508),h=r(1516),m=r(4266),b=new Set;function y(e,t,r,n,o){if(o||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(b.has(i))return;b.add(i)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let _=l.default.forwardRef(function(e,t){let r,o;let{href:c,as:b,children:_,prefetch:w,passHref:C,replace:E,shallow:j,scroll:S,locale:P,onClick:x,onMouseEnter:M,onTouchStart:O,legacyBehavior:k=!1}=e,R=i._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=_,k&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let I=!1!==w,z=l.default.useContext(d.RouterContext),L=l.default.useContext(p.AppRouterContext),A=null!=z?z:L,T=!z,{href:D,as:N}=l.default.useMemo(()=>{if(!z){let e=v(c);return{href:e,as:b?v(b):e}}let[e,t]=(0,a.resolveHref)(z,c,!0);return{href:e,as:b?(0,a.resolveHref)(z,b):t||e}},[z,c,b]),B=l.default.useRef(D),U=l.default.useRef(N);k&&(o=l.default.Children.only(r));let F=k?o&&"object"==typeof o&&o.ref:t,[W,q,G]=(0,g.useIntersection)({rootMargin:"200px"}),H=l.default.useCallback(e=>{(U.current!==N||B.current!==D)&&(G(),U.current=N,B.current=D),W(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[N,F,D,G,W]);l.default.useEffect(()=>{A&&q&&I&&y(A,D,N,{locale:P},T)},[N,D,q,P,I,null==z?void 0:z.locale,A,T]);let K={ref:H,onClick(e){k||"function"!=typeof x||x(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,o,i,a,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:a}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?l.default.startTransition(g):g()}(e,A,D,N,E,j,S,P,T,I)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),A&&(I||!T)&&y(A,D,N,{locale:P,priority:!0,bypassPrefetchedCheck:!0},T)},onTouchStart(e){k||"function"!=typeof O||O(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),A&&(I||!T)&&y(A,D,N,{locale:P,priority:!0,bypassPrefetchedCheck:!0},T)}};if((0,s.isAbsoluteUrl)(N))K.href=N;else if(!k||C||"a"===o.type&&!("href"in o.props)){let e=void 0!==P?P:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&(0,h.getDomainLocale)(N,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);K.href=t||(0,m.addBasePath)((0,f.addLocale)(N,e,null==z?void 0:z.defaultLocale))}return k?l.default.cloneElement(o,K):l.default.createElement("a",n._({},R,K),r)}),w=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,l=new Map,a=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,c=u||!i,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(c||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,s,d.current]);let g=(0,n.useCallback)(()=>{f(!1)},[]);return[p,s,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=n||t,u=o||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(u,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)}}]);