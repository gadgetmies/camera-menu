(function(){const X=document.createElement("link").relList;if(X&&X.supports&&X.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))f(b);new MutationObserver(b=>{for(const h of b)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&f(g)}).observe(document,{childList:!0,subtree:!0});function u(b){const h={};return b.integrity&&(h.integrity=b.integrity),b.referrerPolicy&&(h.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?h.credentials="include":b.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function f(b){if(b.ep)return;b.ep=!0;const h=u(b);fetch(b.href,h)}})();var xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bm(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var jl={exports:{}},va={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Kg(){if(Am)return va;Am=1;var x=Symbol.for("react.transitional.element"),X=Symbol.for("react.fragment");function u(f,b,h){var g=null;if(h!==void 0&&(g=""+h),b.key!==void 0&&(g=""+b.key),"key"in b){h={};for(var c in b)c!=="key"&&(h[c]=b[c])}else h=b;return b=h.ref,{$$typeof:x,type:f,key:g,ref:b!==void 0?b:null,props:h}}return va.Fragment=X,va.jsx=u,va.jsxs=u,va}var wm;function $g(){return wm||(wm=1,jl.exports=Kg()),jl.exports}var le=$g(),Ul={exports:{}},Ze={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function ef(){if(Fm)return Ze;Fm=1;var x=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),g=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.iterator;function R(w){return w===null||typeof w!="object"?null:(w=O&&w[O]||w["@@iterator"],typeof w=="function"?w:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,d={};function C(w,D,L){this.props=w,this.context=D,this.refs=d,this.updater=L||y}C.prototype.isReactComponent={},C.prototype.setState=function(w,D){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,D,"setState")},C.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function v(){}v.prototype=C.prototype;function k(w,D,L){this.props=w,this.context=D,this.refs=d,this.updater=L||y}var N=k.prototype=new v;N.constructor=k,A(N,C.prototype),N.isPureReactComponent=!0;var _=Array.isArray,I={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function J(w,D,L,ne,Q,ce){return L=ce.ref,{$$typeof:x,type:w,key:D,ref:L!==void 0?L:null,props:ce}}function ge(w,D){return J(w.type,D,void 0,void 0,void 0,w.props)}function B(w){return typeof w=="object"&&w!==null&&w.$$typeof===x}function re(w){var D={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(L){return D[L]})}var we=/\/+/g;function E(w,D){return typeof w=="object"&&w!==null&&w.key!=null?re(""+w.key):D.toString(36)}function K(){}function l(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(K,K):(w.status="pending",w.then(function(D){w.status==="pending"&&(w.status="fulfilled",w.value=D)},function(D){w.status==="pending"&&(w.status="rejected",w.reason=D)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function te(w,D,L,ne,Q){var ce=typeof w;(ce==="undefined"||ce==="boolean")&&(w=null);var Me=!1;if(w===null)Me=!0;else switch(ce){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(w.$$typeof){case x:case X:Me=!0;break;case T:return Me=w._init,te(Me(w._payload),D,L,ne,Q)}}if(Me)return Q=Q(w),Me=ne===""?"."+E(w,0):ne,_(Q)?(L="",Me!=null&&(L=Me.replace(we,"$&/")+"/"),te(Q,D,L,"",function(Ee){return Ee})):Q!=null&&(B(Q)&&(Q=ge(Q,L+(Q.key==null||w&&w.key===Q.key?"":(""+Q.key).replace(we,"$&/")+"/")+Me)),D.push(Q)),1;Me=0;var Ue=ne===""?".":ne+":";if(_(w))for(var Ae=0;Ae<w.length;Ae++)ne=w[Ae],ce=Ue+E(ne,Ae),Me+=te(ne,D,L,ce,Q);else if(Ae=R(w),typeof Ae=="function")for(w=Ae.call(w),Ae=0;!(ne=w.next()).done;)ne=ne.value,ce=Ue+E(ne,Ae++),Me+=te(ne,D,L,ce,Q);else if(ce==="object"){if(typeof w.then=="function")return te(l(w),D,L,ne,Q);throw D=String(w),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return Me}function ie(w,D,L){if(w==null)return w;var ne=[],Q=0;return te(w,ne,"","",function(ce){return D.call(L,ce,Q++)}),ne}function q(w){if(w._status===-1){var D=w._result;D=D(),D.then(function(L){(w._status===0||w._status===-1)&&(w._status=1,w._result=L)},function(L){(w._status===0||w._status===-1)&&(w._status=2,w._result=L)}),w._status===-1&&(w._status=0,w._result=D)}if(w._status===1)return w._result.default;throw w._result}var pe=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ue(){}return Ze.Children={map:ie,forEach:function(w,D,L){ie(w,function(){D.apply(this,arguments)},L)},count:function(w){var D=0;return ie(w,function(){D++}),D},toArray:function(w){return ie(w,function(D){return D})||[]},only:function(w){if(!B(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Ze.Component=C,Ze.Fragment=u,Ze.Profiler=b,Ze.PureComponent=k,Ze.StrictMode=f,Ze.Suspense=m,Ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,Ze.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ze.cache=function(w){return function(){return w.apply(null,arguments)}},Ze.cloneElement=function(w,D,L){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ne=A({},w.props),Q=w.key,ce=void 0;if(D!=null)for(Me in D.ref!==void 0&&(ce=void 0),D.key!==void 0&&(Q=""+D.key),D)!$.call(D,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&D.ref===void 0||(ne[Me]=D[Me]);var Me=arguments.length-2;if(Me===1)ne.children=L;else if(1<Me){for(var Ue=Array(Me),Ae=0;Ae<Me;Ae++)Ue[Ae]=arguments[Ae+2];ne.children=Ue}return J(w.type,Q,void 0,void 0,ce,ne)},Ze.createContext=function(w){return w={$$typeof:g,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},Ze.createElement=function(w,D,L){var ne,Q={},ce=null;if(D!=null)for(ne in D.key!==void 0&&(ce=""+D.key),D)$.call(D,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(Q[ne]=D[ne]);var Me=arguments.length-2;if(Me===1)Q.children=L;else if(1<Me){for(var Ue=Array(Me),Ae=0;Ae<Me;Ae++)Ue[Ae]=arguments[Ae+2];Q.children=Ue}if(w&&w.defaultProps)for(ne in Me=w.defaultProps,Me)Q[ne]===void 0&&(Q[ne]=Me[ne]);return J(w,ce,void 0,void 0,null,Q)},Ze.createRef=function(){return{current:null}},Ze.forwardRef=function(w){return{$$typeof:c,render:w}},Ze.isValidElement=B,Ze.lazy=function(w){return{$$typeof:T,_payload:{_status:-1,_result:w},_init:q}},Ze.memo=function(w,D){return{$$typeof:p,type:w,compare:D===void 0?null:D}},Ze.startTransition=function(w){var D=I.T,L={};I.T=L;try{var ne=w(),Q=I.S;Q!==null&&Q(L,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(ue,pe)}catch(ce){pe(ce)}finally{I.T=D}},Ze.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},Ze.use=function(w){return I.H.use(w)},Ze.useActionState=function(w,D,L){return I.H.useActionState(w,D,L)},Ze.useCallback=function(w,D){return I.H.useCallback(w,D)},Ze.useContext=function(w){return I.H.useContext(w)},Ze.useDebugValue=function(){},Ze.useDeferredValue=function(w,D){return I.H.useDeferredValue(w,D)},Ze.useEffect=function(w,D){return I.H.useEffect(w,D)},Ze.useId=function(){return I.H.useId()},Ze.useImperativeHandle=function(w,D,L){return I.H.useImperativeHandle(w,D,L)},Ze.useInsertionEffect=function(w,D){return I.H.useInsertionEffect(w,D)},Ze.useLayoutEffect=function(w,D){return I.H.useLayoutEffect(w,D)},Ze.useMemo=function(w,D){return I.H.useMemo(w,D)},Ze.useOptimistic=function(w,D){return I.H.useOptimistic(w,D)},Ze.useReducer=function(w,D,L){return I.H.useReducer(w,D,L)},Ze.useRef=function(w){return I.H.useRef(w)},Ze.useState=function(w){return I.H.useState(w)},Ze.useSyncExternalStore=function(w,D,L){return I.H.useSyncExternalStore(w,D,L)},Ze.useTransition=function(){return I.H.useTransition()},Ze.version="19.0.0",Ze}var Om;function Xl(){return Om||(Om=1,Ul.exports=ef()),Ul.exports}var rt=Xl();const Go=Bm(rt);var Wl={exports:{}},ba={},Zl={exports:{}},Gl={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function tf(){return Mm||(Mm=1,function(x){function X(ie,q){var pe=ie.length;ie.push(q);e:for(;0<pe;){var ue=pe-1>>>1,w=ie[ue];if(0<b(w,q))ie[ue]=q,ie[pe]=w,pe=ue;else break e}}function u(ie){return ie.length===0?null:ie[0]}function f(ie){if(ie.length===0)return null;var q=ie[0],pe=ie.pop();if(pe!==q){ie[0]=pe;e:for(var ue=0,w=ie.length,D=w>>>1;ue<D;){var L=2*(ue+1)-1,ne=ie[L],Q=L+1,ce=ie[Q];if(0>b(ne,pe))Q<w&&0>b(ce,ne)?(ie[ue]=ce,ie[Q]=pe,ue=Q):(ie[ue]=ne,ie[L]=pe,ue=L);else if(Q<w&&0>b(ce,pe))ie[ue]=ce,ie[Q]=pe,ue=Q;else break e}}return q}function b(ie,q){var pe=ie.sortIndex-q.sortIndex;return pe!==0?pe:ie.id-q.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;x.unstable_now=function(){return h.now()}}else{var g=Date,c=g.now();x.unstable_now=function(){return g.now()-c}}var m=[],p=[],T=1,O=null,R=3,y=!1,A=!1,d=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function N(ie){for(var q=u(p);q!==null;){if(q.callback===null)f(p);else if(q.startTime<=ie)f(p),q.sortIndex=q.expirationTime,X(m,q);else break;q=u(p)}}function _(ie){if(d=!1,N(ie),!A)if(u(m)!==null)A=!0,l();else{var q=u(p);q!==null&&te(_,q.startTime-ie)}}var I=!1,$=-1,J=5,ge=-1;function B(){return!(x.unstable_now()-ge<J)}function re(){if(I){var ie=x.unstable_now();ge=ie;var q=!0;try{e:{A=!1,d&&(d=!1,v($),$=-1),y=!0;var pe=R;try{t:{for(N(ie),O=u(m);O!==null&&!(O.expirationTime>ie&&B());){var ue=O.callback;if(typeof ue=="function"){O.callback=null,R=O.priorityLevel;var w=ue(O.expirationTime<=ie);if(ie=x.unstable_now(),typeof w=="function"){O.callback=w,N(ie),q=!0;break t}O===u(m)&&f(m),N(ie)}else f(m);O=u(m)}if(O!==null)q=!0;else{var D=u(p);D!==null&&te(_,D.startTime-ie),q=!1}}break e}finally{O=null,R=pe,y=!1}q=void 0}}finally{q?we():I=!1}}}var we;if(typeof k=="function")we=function(){k(re)};else if(typeof MessageChannel<"u"){var E=new MessageChannel,K=E.port2;E.port1.onmessage=re,we=function(){K.postMessage(null)}}else we=function(){C(re,0)};function l(){I||(I=!0,we())}function te(ie,q){$=C(function(){ie(x.unstable_now())},q)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(ie){ie.callback=null},x.unstable_continueExecution=function(){A||y||(A=!0,l())},x.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<ie?Math.floor(1e3/ie):5},x.unstable_getCurrentPriorityLevel=function(){return R},x.unstable_getFirstCallbackNode=function(){return u(m)},x.unstable_next=function(ie){switch(R){case 1:case 2:case 3:var q=3;break;default:q=R}var pe=R;R=q;try{return ie()}finally{R=pe}},x.unstable_pauseExecution=function(){},x.unstable_requestPaint=function(){},x.unstable_runWithPriority=function(ie,q){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var pe=R;R=ie;try{return q()}finally{R=pe}},x.unstable_scheduleCallback=function(ie,q,pe){var ue=x.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?ue+pe:ue):pe=ue,ie){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=pe+w,ie={id:T++,callback:q,priorityLevel:ie,startTime:pe,expirationTime:w,sortIndex:-1},pe>ue?(ie.sortIndex=pe,X(p,ie),u(m)===null&&ie===u(p)&&(d?(v($),$=-1):d=!0,te(_,pe-ue))):(ie.sortIndex=w,X(m,ie),A||y||(A=!0,l())),ie},x.unstable_shouldYield=B,x.unstable_wrapCallback=function(ie){var q=R;return function(){var pe=R;R=q;try{return ie.apply(this,arguments)}finally{R=pe}}}}(Gl)),Gl}var km;function nf(){return km||(km=1,Zl.exports=tf()),Zl.exports}var Ql={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function of(){if(Pm)return Gt;Pm=1;var x=Xl();function X(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var f={d:{f:u,r:function(){throw Error(X(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},b=Symbol.for("react.portal");function h(m,p,T){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:O==null?null:""+O,children:m,containerInfo:p,implementation:T}}var g=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Gt.createPortal=function(m,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(X(299));return h(m,p,null,T)},Gt.flushSync=function(m){var p=g.T,T=f.p;try{if(g.T=null,f.p=2,m)return m()}finally{g.T=p,f.p=T,f.d.f()}},Gt.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,f.d.C(m,p))},Gt.prefetchDNS=function(m){typeof m=="string"&&f.d.D(m)},Gt.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var T=p.as,O=c(T,p.crossOrigin),R=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?f.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:O,integrity:R,fetchPriority:y}):T==="script"&&f.d.X(m,{crossOrigin:O,integrity:R,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gt.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=c(p.as,p.crossOrigin);f.d.M(m,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&f.d.M(m)},Gt.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,O=c(T,p.crossOrigin);f.d.L(m,T,{crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gt.preloadModule=function(m,p){if(typeof m=="string")if(p){var T=c(p.as,p.crossOrigin);f.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else f.d.m(m)},Gt.requestFormReset=function(m){f.d.r(m)},Gt.unstable_batchedUpdates=function(m,p){return m(p)},Gt.useFormState=function(m,p,T){return g.H.useFormState(m,p,T)},Gt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Gt.version="19.0.0",Gt}var Rm;function af(){if(Rm)return Ql.exports;Rm=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(X){console.error(X)}}return x(),Ql.exports=of(),Ql.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function rf(){if(Tm)return ba;Tm=1;var x=nf(),X=Xl(),u=af();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var h=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),y=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),_=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case c:return"Portal";case T:return"Profiler";case p:return"StrictMode";case d:return"Suspense";case C:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case R:return(e._context.displayName||"Context")+".Consumer";case A:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case v:return t=e.displayName||null,t!==null?t:ge(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}var B=X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=Object.assign,we,E;function K(e){if(we===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||"",E=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+we+e+E}var l=!1;function te(e,t){if(!e||l)return"";l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var fe=function(){throw Error()};if(Object.defineProperty(fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(fe,[])}catch(oe){var G=oe}Reflect.construct(e,[],fe)}else{try{fe.call()}catch(oe){G=oe}e.call(fe.prototype)}}else{try{throw Error()}catch(oe){G=oe}(fe=e())&&typeof fe.catch=="function"&&fe.catch(function(){})}}catch(oe){if(oe&&G&&typeof oe.stack=="string")return[oe.stack,G.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=o.DetermineComponentFrameRoot(),r=a[0],S=a[1];if(r&&S){var P=r.split(`
`),V=S.split(`
`);for(i=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;i<V.length&&!V[i].includes("DetermineComponentFrameRoot");)i++;if(o===P.length||i===V.length)for(o=P.length-1,i=V.length-1;1<=o&&0<=i&&P[o]!==V[i];)i--;for(;1<=o&&0<=i;o--,i--)if(P[o]!==V[i]){if(o!==1||i!==1)do if(o--,i--,0>i||P[o]!==V[i]){var ae=`
`+P[o].replace(" at new "," at ");return e.displayName&&ae.includes("<anonymous>")&&(ae=ae.replace("<anonymous>",e.displayName)),ae}while(1<=o&&0<=i);break}}}finally{l=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?K(n):""}function ie(e){switch(e.tag){case 26:case 27:case 5:return K(e.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function q(e){try{var t="";do t+=ie(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function pe(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ue(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(pe(e)!==e)throw Error(f(188))}function D(e){var t=e.alternate;if(!t){if(t=pe(e),t===null)throw Error(f(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return w(i),e;if(a===o)return w(i),t;a=a.sibling}throw Error(f(188))}if(n.return!==o.return)n=i,o=a;else{for(var r=!1,S=i.child;S;){if(S===n){r=!0,n=i,o=a;break}if(S===o){r=!0,o=i,n=a;break}S=S.sibling}if(!r){for(S=a.child;S;){if(S===n){r=!0,n=a,o=i;break}if(S===o){r=!0,o=a,n=i;break}S=S.sibling}if(!r)throw Error(f(189))}}if(n.alternate!==o)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var ne=Array.isArray,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Me=[],Ue=-1;function Ae(e){return{current:e}}function Ee(e){0>Ue||(e.current=Me[Ue],Me[Ue]=null,Ue--)}function Ve(e,t){Ue++,Me[Ue]=e.current,e.current=t}var Xe=Ae(null),xt=Ae(null),St=Ae(null),s=Ae(null);function se(e,t){switch(Ve(St,t),Ve(xt,e),Ve(Xe,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Jh(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Jh(e),t=Kh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ee(Xe),Ve(Xe,t)}function Y(){Ee(Xe),Ee(xt),Ee(St)}function M(e){e.memoizedState!==null&&Ve(s,e);var t=Xe.current,n=Kh(t,e.type);t!==n&&(Ve(xt,e),Ve(Xe,n))}function F(e){xt.current===e&&(Ee(Xe),Ee(xt)),s.current===e&&(Ee(s),ga._currentValue=ce)}var H=Object.prototype.hasOwnProperty,he=x.unstable_scheduleCallback,de=x.unstable_cancelCallback,Z=x.unstable_shouldYield,ye=x.unstable_requestPaint,be=x.unstable_now,Se=x.unstable_getCurrentPriorityLevel,Re=x.unstable_ImmediatePriority,Ie=x.unstable_UserBlockingPriority,He=x.unstable_NormalPriority,_t=x.unstable_LowPriority,on=x.unstable_IdlePriority,Xt=x.log,An=x.unstable_setDisableYieldValue,lt=null,kt=null;function Fo(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(lt,e,void 0,(e.current.flags&128)===128)}catch{}}function Pt(e){if(typeof Xt=="function"&&An(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(lt,e)}catch{}}var Rt=Math.clz32?Math.clz32:Mi,Kn=Math.log,Oi=Math.LN2;function Mi(e){return e>>>=0,e===0?32:31-(Kn(e)/Oi|0)|0}var Nn=128,It=4194304;function Jt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,r=e.warmLanes;e=e.finishedLanes!==0;var S=n&134217727;return S!==0?(n=S&~i,n!==0?o=Jt(n):(a&=S,a!==0?o=Jt(a):e||(r=S&~r,r!==0&&(o=Jt(r))))):(S=n&~i,S!==0?o=Jt(S):a!==0?o=Jt(a):e||(r=n&~r,r!==0&&(o=Jt(r)))),o===0?0:t!==0&&t!==o&&!(t&i)&&(i=o&-o,r=t&-t,i>=r||i===32&&(r&4194176)!==0)?t:o}function Oo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hr(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Aa(){var e=Nn;return Nn<<=1,!(Nn&4194176)&&(Nn=128),e}function wa(){var e=It;return It<<=1,!(It&62914560)&&(It=4194304),e}function ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fa(e,t,n,o,i,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var S=e.entanglements,P=e.expirationTimes,V=e.hiddenUpdates;for(n=r&~n;0<n;){var ae=31-Rt(n),fe=1<<ae;S[ae]=0,P[ae]=-1;var G=V[ae];if(G!==null)for(V[ae]=null,ae=0;ae<G.length;ae++){var oe=G[ae];oe!==null&&(oe.lane&=-536870913)}n&=~fe}o!==0&&U(e,o,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function U(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Rt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&4194218}function ee(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Rt(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}function ve(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Fe(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:pm(e.type))}function Be(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var Ce=Math.random().toString(36).slice(2),Pe="__reactFiber$"+Ce,Ne="__reactProps$"+Ce,nt="__reactContainer$"+Ce,ze="__reactEvents$"+Ce,ot="__reactListeners$"+Ce,$e="__reactHandles$"+Ce,_e="__reactResources$"+Ce,yt="__reactMarker$"+Ce;function We(e){delete e[Pe],delete e[Ne],delete e[ze],delete e[ot],delete e[$e]}function Je(e){var t=e[Pe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Pe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tm(e);e!==null;){if(n=e[Pe])return n;e=tm(e)}return t}e=n,n=e.parentNode}return null}function Wt(e){if(e=e[Pe]||e[nt]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Oe(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function Ge(e){var t=e[_e];return t||(t=e[_e]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Te(e){e[yt]=!0}var st=new Set,mt={};function vt(e,t){et(e,t),et(e+"Capture",t)}function et(e,t){for(mt[e]=t,e=0;e<t.length;e++)st.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kt={},Oa={};function Gm(e){return H.call(Oa,e)?!0:H.call(Kt,e)?!1:Rn.test(e)?Oa[e]=!0:(Kt[e]=!0,!1)}function Ma(e,t,n){if(Gm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ka(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ln(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}function cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qm(e){var t=eu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){o=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(r){o=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pa(e){e._valueTracker||(e._valueTracker=Qm(e))}function tu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=eu(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ym=/[\n"\\]/g;function hn(e){return e.replace(Ym,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _r(e,t,n,o,i,a,r,S){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+cn(t)):e.value!==""+cn(t)&&(e.value=""+cn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Br(e,r,cn(t)):n!=null?Br(e,r,cn(n)):o!=null&&e.removeAttribute("value"),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+cn(S):e.removeAttribute("name")}function nu(e,t,n,o,i,a,r,S){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null))return;n=n!=null?""+cn(n):"",t=t!=null?""+cn(t):n,S||t===e.value||(e.value=t),e.defaultValue=t}o=o??i,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=S?e.checked:!!o,e.defaultChecked=!!o,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function Br(e,t,n){t==="number"&&Ra(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Yo(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ou(e,t,n){if(t!=null&&(t=""+cn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+cn(n):""}function iu(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(f(92));if(ne(o)){if(1<o.length)throw Error(f(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=cn(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o)}function qo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function au(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||qm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ru(e,t,n){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var i in t)o=t[i],t.hasOwnProperty(i)&&n[i]!==o&&au(e,i,o)}else for(var a in t)t.hasOwnProperty(a)&&au(e,a,t[a])}function jr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ta(e){return Jm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ur=null;function Wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,Jo=null;function su(e){var t=Wt(e);if(t&&(e=t.stateNode)){var n=e[Ne]||null;e:switch(e=t.stateNode,t.type){case"input":if(_r(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+hn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=o[Ne]||null;if(!i)throw Error(f(90));_r(o,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&tu(o)}break e;case"textarea":ou(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Yo(e,!!n.multiple,t,!1)}}}var Zr=!1;function lu(e,t,n){if(Zr)return e(t,n);Zr=!0;try{var o=e(t);return o}finally{if(Zr=!1,(Xo!==null||Jo!==null)&&(dr(),Xo&&(t=Xo,e=Jo,Jo=Xo=null,su(t),e)))for(t=0;t<e.length;t++)su(e[t])}}function Pi(e,t){var n=e.stateNode;if(n===null)return null;var o=n[Ne]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(f(231,t,typeof n));return n}var Gr=!1;if(bt)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){Gr=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{Gr=!1}var $n=null,Qr=null,Da=null;function uu(){if(Da)return Da;var e,t=Qr,n=t.length,o,i="value"in $n?$n.value:$n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var r=n-e;for(o=1;o<=r&&t[n-o]===i[a-o];o++);return Da=i.slice(e,1<o?1-o:void 0)}function Ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xa(){return!0}function cu(){return!1}function $t(e){function t(n,o,i,a,r){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(n=e[S],this[S]=n?n(a):a[S]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?xa:cu,this.isPropagationStopped=cu,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),t}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=$t(ko),Ti=re({},ko,{view:0,detail:0}),Km=$t(Ti),Yr,qr,Di,Na=re({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Di&&(Di&&e.type==="mousemove"?(Yr=e.screenX-Di.screenX,qr=e.screenY-Di.screenY):qr=Yr=0,Di=e),Yr)},movementY:function(e){return"movementY"in e?e.movementY:qr}}),hu=$t(Na),$m=re({},Na,{dataTransfer:0}),ed=$t($m),td=re({},Ti,{relatedTarget:0}),Xr=$t(td),nd=re({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),od=$t(nd),id=re({},ko,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ad=$t(id),rd=re({},ko,{data:0}),mu=$t(rd),sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ud={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ud[e])?!!t[e]:!1}function Jr(){return cd}var hd=re({},Ti,{key:function(e){if(e.key){var t=sd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jr,charCode:function(e){return e.type==="keypress"?Ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),md=$t(hd),dd=re({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=$t(dd),gd=re({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jr}),fd=$t(gd),pd=re({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=$t(pd),yd=re({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vd=$t(yd),bd=re({},ko,{newState:0,oldState:0}),Cd=$t(bd),Ad=[9,13,27,32],Kr=bt&&"CompositionEvent"in window,Ei=null;bt&&"documentMode"in document&&(Ei=document.documentMode);var wd=bt&&"TextEvent"in window&&!Ei,gu=bt&&(!Kr||Ei&&8<Ei&&11>=Ei),fu=" ",pu=!1;function Su(e,t){switch(e){case"keyup":return Ad.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ko=!1;function Fd(e,t){switch(e){case"compositionend":return yu(t);case"keypress":return t.which!==32?null:(pu=!0,fu);case"textInput":return e=t.data,e===fu&&pu?null:e;default:return null}}function Od(e,t){if(Ko)return e==="compositionend"||!Kr&&Su(e,t)?(e=uu(),Da=Qr=$n=null,Ko=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gu&&t.locale!=="ko"?null:t.data;default:return null}}var Md={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Md[e.type]:t==="textarea"}function bu(e,t,n,o){Xo?Jo?Jo.push(o):Jo=[o]:Xo=o,t=yr(t,"onChange"),0<t.length&&(n=new Ia("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var xi=null,Ii=null;function kd(e){Gh(e,0)}function La(e){var t=Oe(e);if(tu(t))return e}function Cu(e,t){if(e==="change")return t}var Au=!1;if(bt){var $r;if(bt){var es="oninput"in document;if(!es){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),es=typeof wu.oninput=="function"}$r=es}else $r=!1;Au=$r&&(!document.documentMode||9<document.documentMode)}function Fu(){xi&&(xi.detachEvent("onpropertychange",Ou),Ii=xi=null)}function Ou(e){if(e.propertyName==="value"&&La(Ii)){var t=[];bu(t,Ii,e,Wr(e)),lu(kd,t)}}function Pd(e,t,n){e==="focusin"?(Fu(),xi=t,Ii=n,xi.attachEvent("onpropertychange",Ou)):e==="focusout"&&Fu()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return La(Ii)}function Td(e,t){if(e==="click")return La(t)}function Dd(e,t){if(e==="input"||e==="change")return La(t)}function Ed(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var an=typeof Object.is=="function"?Object.is:Ed;function Ni(e,t){if(an(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!H.call(t,i)||!an(e[i],t[i]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=Mu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function Pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ru(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ra(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ra(e.document)}return t}function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xd(e,t){var n=Ru(t);t=e.focusedElem;var o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Pu(t.ownerDocument.documentElement,t)){if(o!==null&&ts(t)){if(e=o.start,n=o.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!n.extend&&a>o&&(i=o,o=a,a=i),i=ku(t,a);var r=ku(t,o);i&&r&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==r.node||n.focusOffset!==r.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),a>o?(n.addRange(e),n.extend(r.node,r.offset)):(e.setEnd(r.node,r.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Id=bt&&"documentMode"in document&&11>=document.documentMode,$o=null,ns=null,Li=null,os=!1;function Tu(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||$o==null||$o!==Ra(o)||(o=$o,"selectionStart"in o&&ts(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Li&&Ni(Li,o)||(Li=o,o=yr(ns,"onSelect"),0<o.length&&(t=new Ia("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=$o)))}function Po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionrun:Po("Transition","TransitionRun"),transitionstart:Po("Transition","TransitionStart"),transitioncancel:Po("Transition","TransitionCancel"),transitionend:Po("Transition","TransitionEnd")},is={},Du={};bt&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Ro(e){if(is[e])return is[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Du)return is[e]=t[n];return e}var Eu=Ro("animationend"),xu=Ro("animationiteration"),Iu=Ro("animationstart"),Nd=Ro("transitionrun"),Ld=Ro("transitionstart"),zd=Ro("transitioncancel"),Nu=Ro("transitionend"),Lu=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function wn(e,t){Lu.set(e,t),vt(t,[e])}var mn=[],ti=0,as=0;function za(){for(var e=ti,t=as=ti=0;t<e;){var n=mn[t];mn[t++]=null;var o=mn[t];mn[t++]=null;var i=mn[t];mn[t++]=null;var a=mn[t];if(mn[t++]=null,o!==null&&i!==null){var r=o.pending;r===null?i.next=i:(i.next=r.next,r.next=i),o.pending=i}a!==0&&Vu(n,i,a)}}function Va(e,t,n,o){mn[ti++]=e,mn[ti++]=t,mn[ti++]=n,mn[ti++]=o,as|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function rs(e,t,n,o){return Va(e,t,n,o),Ha(e)}function eo(e,t){return Va(e,null,null,t),Ha(e)}function Vu(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,o=a.alternate,o!==null&&(o.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;i&&t!==null&&e.tag===3&&(a=e.stateNode,i=31-Rt(n),a=a.hiddenUpdates,e=a[i],e===null?a[i]=[t]:e.push(t),t.lane=n|536870912)}function Ha(e){if(50<sa)throw sa=0,ml=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={},Hu=new WeakMap;function dn(e,t){if(typeof e=="object"&&e!==null){var n=Hu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:q(t)},Hu.set(e,t),t)}return{value:e,source:t,stack:q(t)}}var oi=[],ii=0,_a=null,Ba=0,gn=[],fn=0,To=null,zn=1,Vn="";function Do(e,t){oi[ii++]=Ba,oi[ii++]=_a,_a=e,Ba=t}function _u(e,t,n){gn[fn++]=zn,gn[fn++]=Vn,gn[fn++]=To,To=e;var o=zn;e=Vn;var i=32-Rt(o)-1;o&=~(1<<i),n+=1;var a=32-Rt(t)+i;if(30<a){var r=i-i%5;a=(o&(1<<r)-1).toString(32),o>>=r,i-=r,zn=1<<32-Rt(t)+i|n<<i|o,Vn=a+e}else zn=1<<a|n<<i|o,Vn=e}function ss(e){e.return!==null&&(Do(e,1),_u(e,1,0))}function ls(e){for(;e===_a;)_a=oi[--ii],oi[ii]=null,Ba=oi[--ii],oi[ii]=null;for(;e===To;)To=gn[--fn],gn[fn]=null,Vn=gn[--fn],gn[fn]=null,zn=gn[--fn],gn[fn]=null}var Qt=null,Bt=null,it=!1,Fn=null,Tn=!1,us=Error(f(519));function Eo(e){var t=Error(f(418,""));throw Hi(dn(t,e)),us}function Bu(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[Pe]=e,t[Ne]=o,n){case"dialog":Ke("cancel",t),Ke("close",t);break;case"iframe":case"object":case"embed":Ke("load",t);break;case"video":case"audio":for(n=0;n<ua.length;n++)Ke(ua[n],t);break;case"source":Ke("error",t);break;case"img":case"image":case"link":Ke("error",t),Ke("load",t);break;case"details":Ke("toggle",t);break;case"input":Ke("invalid",t),nu(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Pa(t);break;case"select":Ke("invalid",t);break;case"textarea":Ke("invalid",t),iu(t,o.value,o.defaultValue,o.children),Pa(t)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||Xh(t.textContent,n)?(o.popover!=null&&(Ke("beforetoggle",t),Ke("toggle",t)),o.onScroll!=null&&Ke("scroll",t),o.onScrollEnd!=null&&Ke("scrollend",t),o.onClick!=null&&(t.onclick=vr),t=!0):t=!1,t||Eo(e)}function ju(e){for(Qt=e.return;Qt;)switch(Qt.tag){case 3:case 27:Tn=!0;return;case 5:case 13:Tn=!1;return;default:Qt=Qt.return}}function zi(e){if(e!==Qt)return!1;if(!it)return ju(e),it=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Rl(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&Bt&&Eo(e),ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Bt=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Bt=null}}else Bt=Qt?Mn(e.stateNode.nextSibling):null;return!0}function Vi(){Bt=Qt=null,it=!1}function Hi(e){Fn===null?Fn=[e]:Fn.push(e)}var _i=Error(f(460)),Uu=Error(f(474)),cs={then:function(){}};function Wu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ja(){}function Zu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ja,ja),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===_i?Error(f(483)):e;default:if(typeof t.status=="string")t.then(ja,ja);else{if(e=dt,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=o}},function(o){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===_i?Error(f(483)):e}throw Bi=t,_i}}var Bi=null;function Gu(){if(Bi===null)throw Error(f(459));var e=Bi;return Bi=null,e}var ai=null,ji=0;function Ua(e){var t=ji;return ji+=1,ai===null&&(ai=[]),Zu(ai,e,t)}function Ui(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wa(e,t){throw t.$$typeof===h?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Qu(e){var t=e._init;return t(e._payload)}function Yu(e){function t(j,z){if(e){var W=j.deletions;W===null?(j.deletions=[z],j.flags|=16):W.push(z)}}function n(j,z){if(!e)return null;for(;z!==null;)t(j,z),z=z.sibling;return null}function o(j){for(var z=new Map;j!==null;)j.key!==null?z.set(j.key,j):z.set(j.index,j),j=j.sibling;return z}function i(j,z){return j=mo(j,z),j.index=0,j.sibling=null,j}function a(j,z,W){return j.index=W,e?(W=j.alternate,W!==null?(W=W.index,W<z?(j.flags|=33554434,z):W):(j.flags|=33554434,z)):(j.flags|=1048576,z)}function r(j){return e&&j.alternate===null&&(j.flags|=33554434),j}function S(j,z,W,me){return z===null||z.tag!==6?(z=il(W,j.mode,me),z.return=j,z):(z=i(z,W),z.return=j,z)}function P(j,z,W,me){var ke=W.type;return ke===m?ae(j,z,W.props.children,me,W.key):z!==null&&(z.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===k&&Qu(ke)===z.type)?(z=i(z,W.props),Ui(z,W),z.return=j,z):(z=lr(W.type,W.key,W.props,null,j.mode,me),Ui(z,W),z.return=j,z)}function V(j,z,W,me){return z===null||z.tag!==4||z.stateNode.containerInfo!==W.containerInfo||z.stateNode.implementation!==W.implementation?(z=al(W,j.mode,me),z.return=j,z):(z=i(z,W.children||[]),z.return=j,z)}function ae(j,z,W,me,ke){return z===null||z.tag!==7?(z=jo(W,j.mode,me,ke),z.return=j,z):(z=i(z,W),z.return=j,z)}function fe(j,z,W){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=il(""+z,j.mode,W),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case g:return W=lr(z.type,z.key,z.props,null,j.mode,W),Ui(W,z),W.return=j,W;case c:return z=al(z,j.mode,W),z.return=j,z;case k:var me=z._init;return z=me(z._payload),fe(j,z,W)}if(ne(z)||$(z))return z=jo(z,j.mode,W,null),z.return=j,z;if(typeof z.then=="function")return fe(j,Ua(z),W);if(z.$$typeof===y)return fe(j,ar(j,z),W);Wa(j,z)}return null}function G(j,z,W,me){var ke=z!==null?z.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return ke!==null?null:S(j,z,""+W,me);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case g:return W.key===ke?P(j,z,W,me):null;case c:return W.key===ke?V(j,z,W,me):null;case k:return ke=W._init,W=ke(W._payload),G(j,z,W,me)}if(ne(W)||$(W))return ke!==null?null:ae(j,z,W,me,null);if(typeof W.then=="function")return G(j,z,Ua(W),me);if(W.$$typeof===y)return G(j,z,ar(j,W),me);Wa(j,W)}return null}function oe(j,z,W,me,ke){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return j=j.get(W)||null,S(z,j,""+me,ke);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case g:return j=j.get(me.key===null?W:me.key)||null,P(z,j,me,ke);case c:return j=j.get(me.key===null?W:me.key)||null,V(z,j,me,ke);case k:var Ye=me._init;return me=Ye(me._payload),oe(j,z,W,me,ke)}if(ne(me)||$(me))return j=j.get(W)||null,ae(z,j,me,ke,null);if(typeof me.then=="function")return oe(j,z,W,Ua(me),ke);if(me.$$typeof===y)return oe(j,z,W,ar(z,me),ke);Wa(z,me)}return null}function De(j,z,W,me){for(var ke=null,Ye=null,xe=z,Le=z=0,Ht=null;xe!==null&&Le<W.length;Le++){xe.index>Le?(Ht=xe,xe=null):Ht=xe.sibling;var at=G(j,xe,W[Le],me);if(at===null){xe===null&&(xe=Ht);break}e&&xe&&at.alternate===null&&t(j,xe),z=a(at,z,Le),Ye===null?ke=at:Ye.sibling=at,Ye=at,xe=Ht}if(Le===W.length)return n(j,xe),it&&Do(j,Le),ke;if(xe===null){for(;Le<W.length;Le++)xe=fe(j,W[Le],me),xe!==null&&(z=a(xe,z,Le),Ye===null?ke=xe:Ye.sibling=xe,Ye=xe);return it&&Do(j,Le),ke}for(xe=o(xe);Le<W.length;Le++)Ht=oe(xe,j,Le,W[Le],me),Ht!==null&&(e&&Ht.alternate!==null&&xe.delete(Ht.key===null?Le:Ht.key),z=a(Ht,z,Le),Ye===null?ke=Ht:Ye.sibling=Ht,Ye=Ht);return e&&xe.forEach(function(bo){return t(j,bo)}),it&&Do(j,Le),ke}function je(j,z,W,me){if(W==null)throw Error(f(151));for(var ke=null,Ye=null,xe=z,Le=z=0,Ht=null,at=W.next();xe!==null&&!at.done;Le++,at=W.next()){xe.index>Le?(Ht=xe,xe=null):Ht=xe.sibling;var bo=G(j,xe,at.value,me);if(bo===null){xe===null&&(xe=Ht);break}e&&xe&&bo.alternate===null&&t(j,xe),z=a(bo,z,Le),Ye===null?ke=bo:Ye.sibling=bo,Ye=bo,xe=Ht}if(at.done)return n(j,xe),it&&Do(j,Le),ke;if(xe===null){for(;!at.done;Le++,at=W.next())at=fe(j,at.value,me),at!==null&&(z=a(at,z,Le),Ye===null?ke=at:Ye.sibling=at,Ye=at);return it&&Do(j,Le),ke}for(xe=o(xe);!at.done;Le++,at=W.next())at=oe(xe,j,Le,at.value,me),at!==null&&(e&&at.alternate!==null&&xe.delete(at.key===null?Le:at.key),z=a(at,z,Le),Ye===null?ke=at:Ye.sibling=at,Ye=at);return e&&xe.forEach(function(Jg){return t(j,Jg)}),it&&Do(j,Le),ke}function Ot(j,z,W,me){if(typeof W=="object"&&W!==null&&W.type===m&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case g:e:{for(var ke=W.key;z!==null;){if(z.key===ke){if(ke=W.type,ke===m){if(z.tag===7){n(j,z.sibling),me=i(z,W.props.children),me.return=j,j=me;break e}}else if(z.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===k&&Qu(ke)===z.type){n(j,z.sibling),me=i(z,W.props),Ui(me,W),me.return=j,j=me;break e}n(j,z);break}else t(j,z);z=z.sibling}W.type===m?(me=jo(W.props.children,j.mode,me,W.key),me.return=j,j=me):(me=lr(W.type,W.key,W.props,null,j.mode,me),Ui(me,W),me.return=j,j=me)}return r(j);case c:e:{for(ke=W.key;z!==null;){if(z.key===ke)if(z.tag===4&&z.stateNode.containerInfo===W.containerInfo&&z.stateNode.implementation===W.implementation){n(j,z.sibling),me=i(z,W.children||[]),me.return=j,j=me;break e}else{n(j,z);break}else t(j,z);z=z.sibling}me=al(W,j.mode,me),me.return=j,j=me}return r(j);case k:return ke=W._init,W=ke(W._payload),Ot(j,z,W,me)}if(ne(W))return De(j,z,W,me);if($(W)){if(ke=$(W),typeof ke!="function")throw Error(f(150));return W=ke.call(W),je(j,z,W,me)}if(typeof W.then=="function")return Ot(j,z,Ua(W),me);if(W.$$typeof===y)return Ot(j,z,ar(j,W),me);Wa(j,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,z!==null&&z.tag===6?(n(j,z.sibling),me=i(z,W),me.return=j,j=me):(n(j,z),me=il(W,j.mode,me),me.return=j,j=me),r(j)):n(j,z)}return function(j,z,W,me){try{ji=0;var ke=Ot(j,z,W,me);return ai=null,ke}catch(xe){if(xe===_i)throw xe;var Ye=vn(29,xe,null,j.mode);return Ye.lanes=me,Ye.return=j,Ye}finally{}}}var xo=Yu(!0),qu=Yu(!1),ri=Ae(null),Za=Ae(0);function Xu(e,t){e=qn,Ve(Za,e),Ve(ri,t),qn=e|t.baseLanes}function hs(){Ve(Za,qn),Ve(ri,ri.current)}function ms(){qn=Za.current,Ee(ri),Ee(Za)}var pn=Ae(null),Dn=null;function to(e){var t=e.alternate;Ve(Nt,Nt.current&1),Ve(pn,e),Dn===null&&(t===null||ri.current!==null||t.memoizedState!==null)&&(Dn=e)}function Ju(e){if(e.tag===22){if(Ve(Nt,Nt.current),Ve(pn,e),Dn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Dn=e)}}else no()}function no(){Ve(Nt,Nt.current),Ve(pn,pn.current)}function Hn(e){Ee(pn),Dn===e&&(Dn=null),Ee(Nt)}var Nt=Ae(0);function Ga(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Hd=x.unstable_scheduleCallback,_d=x.unstable_NormalPriority,Lt={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ds(){return{controller:new Vd,data:new Map,refCount:0}}function Wi(e){e.refCount--,e.refCount===0&&Hd(_d,function(){e.controller.abort()})}var Zi=null,gs=0,si=0,li=null;function Bd(e,t){if(Zi===null){var n=Zi=[];gs=0,si=bl(),li={status:"pending",value:void 0,then:function(o){n.push(o)}}}return gs++,t.then(Ku,Ku),t}function Ku(){if(--gs===0&&Zi!==null){li!==null&&(li.status="fulfilled");var e=Zi;Zi=null,si=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jd(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(o.status="rejected",o.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),o}var $u=B.S;B.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bd(e,t),$u!==null&&$u(e,t)};var Io=Ae(null);function fs(){var e=Io.current;return e!==null?e:dt.pooledCache}function Qa(e,t){t===null?Ve(Io,Io.current):Ve(Io,t.pool)}function ec(){var e=fs();return e===null?null:{parent:Lt._currentValue,pool:e}}var oo=0,Qe=null,ut=null,Tt=null,Ya=!1,ui=!1,No=!1,qa=0,Gi=0,ci=null,Ud=0;function Mt(){throw Error(f(321))}function ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!an(e[n],t[n]))return!1;return!0}function Ss(e,t,n,o,i,a){return oo=a,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?Lo:io,No=!1,a=n(o,i),No=!1,ui&&(a=nc(t,n,o,i)),tc(e),a}function tc(e){B.H=En;var t=ut!==null&&ut.next!==null;if(oo=0,Tt=ut=Qe=null,Ya=!1,Gi=0,ci=null,t)throw Error(f(300));e===null||zt||(e=e.dependencies,e!==null&&ir(e)&&(zt=!0))}function nc(e,t,n,o){Qe=e;var i=0;do{if(ui&&(ci=null),Gi=0,ui=!1,25<=i)throw Error(f(301));if(i+=1,Tt=ut=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}B.H=zo,a=t(n,o)}while(ui);return a}function Wd(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Qi(t):t,e=e.useState()[0],(ut!==null?ut.memoizedState:null)!==e&&(Qe.flags|=1024),t}function ys(){var e=qa!==0;return qa=0,e}function vs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bs(e){if(Ya){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ya=!1}oo=0,Tt=ut=Qe=null,ui=!1,Gi=qa=0,ci=null}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Qe.memoizedState=Tt=e:Tt=Tt.next=e,Tt}function Dt(){if(ut===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var t=Tt===null?Qe.memoizedState:Tt.next;if(t!==null)Tt=t,ut=e;else{if(e===null)throw Qe.alternate===null?Error(f(467)):Error(f(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Tt===null?Qe.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}var Xa;Xa=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Qi(e){var t=Gi;return Gi+=1,ci===null&&(ci=[]),e=Zu(ci,e,t),t=Qe,(Tt===null?t.memoizedState:Tt.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?Lo:io),e}function Ja(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qi(e);if(e.$$typeof===y)return Zt(e)}throw Error(f(438,String(e)))}function Cs(e){var t=null,n=Qe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=Qe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Xa(),Qe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=_;return t.index++,n}function _n(e,t){return typeof t=="function"?t(e):t}function Ka(e){var t=Dt();return As(t,ut,e)}function As(e,t,n){var o=e.queue;if(o===null)throw Error(f(311));o.lastRenderedReducer=n;var i=e.baseQueue,a=o.pending;if(a!==null){if(i!==null){var r=i.next;i.next=a.next,a.next=r}t.baseQueue=i=a,o.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var S=r=null,P=null,V=t,ae=!1;do{var fe=V.lane&-536870913;if(fe!==V.lane?(tt&fe)===fe:(oo&fe)===fe){var G=V.revertLane;if(G===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),fe===si&&(ae=!0);else if((oo&G)===G){V=V.next,G===si&&(ae=!0);continue}else fe={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(S=P=fe,r=a):P=P.next=fe,Qe.lanes|=G,go|=G;fe=V.action,No&&n(a,fe),a=V.hasEagerState?V.eagerState:n(a,fe)}else G={lane:fe,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(S=P=G,r=a):P=P.next=G,Qe.lanes|=fe,go|=fe;V=V.next}while(V!==null&&V!==t);if(P===null?r=a:P.next=S,!an(a,e.memoizedState)&&(zt=!0,ae&&(n=li,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=P,o.lastRenderedState=a}return i===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ws(e){var t=Dt(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var r=i=i.next;do a=e(a,r.action),r=r.next;while(r!==i);an(a,t.memoizedState)||(zt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function oc(e,t,n){var o=Qe,i=Dt(),a=it;if(a){if(n===void 0)throw Error(f(407));n=n()}else n=t();var r=!an((ut||i).memoizedState,n);if(r&&(i.memoizedState=n,zt=!0),i=i.queue,Ms(rc.bind(null,o,i,e),[e]),i.getSnapshot!==t||r||Tt!==null&&Tt.memoizedState.tag&1){if(o.flags|=2048,hi(9,ac.bind(null,o,i,n,t),{destroy:void 0},null),dt===null)throw Error(f(349));a||oo&60||ic(o,t,n)}return n}function ic(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Qe.updateQueue,t===null?(t=Xa(),Qe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ac(e,t,n,o){t.value=n,t.getSnapshot=o,sc(t)&&lc(e)}function rc(e,t,n){return n(function(){sc(t)&&lc(e)})}function sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!an(e,n)}catch{return!0}}function lc(e){var t=eo(e,2);t!==null&&Yt(t,e,2)}function Fs(e){var t=en();if(typeof e=="function"){var n=e;if(e=n(),No){Pt(!0);try{n()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:e},t}function uc(e,t,n,o){return e.baseState=n,As(e,ut,typeof o=="function"?o:_n)}function Zd(e,t,n,o,i){if(tr(e))throw Error(f(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};B.T!==null?n(!0):a.isTransition=!1,o(a),n=t.pending,n===null?(a.next=t.pending=a,cc(t,a)):(a.next=n.next,t.pending=n.next=a)}}function cc(e,t){var n=t.action,o=t.payload,i=e.state;if(t.isTransition){var a=B.T,r={};B.T=r;try{var S=n(i,o),P=B.S;P!==null&&P(r,S),hc(e,t,S)}catch(V){Os(e,t,V)}finally{B.T=a}}else try{a=n(i,o),hc(e,t,a)}catch(V){Os(e,t,V)}}function hc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){mc(e,t,o)},function(o){return Os(e,t,o)}):mc(e,t,n)}function mc(e,t,n){t.status="fulfilled",t.value=n,dc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,cc(e,n)))}function Os(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,dc(t),t=t.next;while(t!==o)}e.action=null}function dc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gc(e,t){return t}function fc(e,t){if(it){var n=dt.formState;if(n!==null){e:{var o=Qe;if(it){if(Bt){t:{for(var i=Bt,a=Tn;i.nodeType!==8;){if(!a){i=null;break t}if(i=Mn(i.nextSibling),i===null){i=null;break t}}a=i.data,i=a==="F!"||a==="F"?i:null}if(i){Bt=Mn(i.nextSibling),o=i.data==="F!";break e}}Eo(o)}o=!1}o&&(t=n[0])}}return n=en(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gc,lastRenderedState:t},n.queue=o,n=xc.bind(null,Qe,o),o.dispatch=n,o=Fs(!1),a=Ds.bind(null,Qe,!1,o.queue),o=en(),i={state:t,dispatch:null,action:e,pending:null},o.queue=i,n=Zd.bind(null,Qe,i,a,n),i.dispatch=n,o.memoizedState=e,[t,n,!1]}function pc(e){var t=Dt();return Sc(t,ut,e)}function Sc(e,t,n){t=As(e,t,gc)[0],e=Ka(_n)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Qi(t):t;var o=Dt(),i=o.queue,a=i.dispatch;return n!==o.memoizedState&&(Qe.flags|=2048,hi(9,Gd.bind(null,i,n),{destroy:void 0},null)),[t,a,e]}function Gd(e,t){e.action=t}function yc(e){var t=Dt(),n=ut;if(n!==null)return Sc(t,n,e);Dt(),t=t.memoizedState,n=Dt();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function hi(e,t,n,o){return e={tag:e,create:t,inst:n,deps:o,next:null},t=Qe.updateQueue,t===null&&(t=Xa(),Qe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function vc(){return Dt().memoizedState}function $a(e,t,n,o){var i=en();Qe.flags|=e,i.memoizedState=hi(1|t,n,{destroy:void 0},o===void 0?null:o)}function er(e,t,n,o){var i=Dt();o=o===void 0?null:o;var a=i.memoizedState.inst;ut!==null&&o!==null&&ps(o,ut.memoizedState.deps)?i.memoizedState=hi(t,n,a,o):(Qe.flags|=e,i.memoizedState=hi(1|t,n,a,o))}function bc(e,t){$a(8390656,8,e,t)}function Ms(e,t){er(2048,8,e,t)}function Cc(e,t){return er(4,2,e,t)}function Ac(e,t){return er(4,4,e,t)}function wc(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fc(e,t,n){n=n!=null?n.concat([e]):null,er(4,4,wc.bind(null,t,e),n)}function ks(){}function Oc(e,t){var n=Dt();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&ps(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Mc(e,t){var n=Dt();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&ps(t,o[1]))return o[0];if(o=e(),No){Pt(!0);try{e()}finally{Pt(!1)}}return n.memoizedState=[o,t],o}function Ps(e,t,n){return n===void 0||oo&1073741824?e.memoizedState=t:(e.memoizedState=n,e=Ph(),Qe.lanes|=e,go|=e,n)}function kc(e,t,n,o){return an(n,t)?n:ri.current!==null?(e=Ps(e,n,o),an(e,t)||(zt=!0),e):oo&42?(e=Ph(),Qe.lanes|=e,go|=e,t):(zt=!0,e.memoizedState=n)}function Pc(e,t,n,o,i){var a=Q.p;Q.p=a!==0&&8>a?a:8;var r=B.T,S={};B.T=S,Ds(e,!1,t,n);try{var P=i(),V=B.S;if(V!==null&&V(S,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ae=jd(P,o);Yi(e,t,ae,un(e))}else Yi(e,t,o,un(e))}catch(fe){Yi(e,t,{then:function(){},status:"rejected",reason:fe},un())}finally{Q.p=a,B.T=r}}function Qd(){}function Rs(e,t,n,o){if(e.tag!==5)throw Error(f(476));var i=Rc(e).queue;Pc(e,i,t,ce,n===null?Qd:function(){return Tc(e),n(o)})}function Rc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Tc(e){var t=Rc(e).next.queue;Yi(e,t,{},un())}function Ts(){return Zt(ga)}function Dc(){return Dt().memoizedState}function Ec(){return Dt().memoizedState}function Yd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=un();e=so(n);var o=lo(t,e,n);o!==null&&(Yt(o,t,n),Ji(o,t,n)),t={cache:ds()},e.payload=t;return}t=t.return}}function qd(e,t,n){var o=un();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},tr(e)?Ic(t,n):(n=rs(e,t,n,o),n!==null&&(Yt(n,e,o),Nc(n,t,o)))}function xc(e,t,n){var o=un();Yi(e,t,n,o)}function Yi(e,t,n,o){var i={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(tr(e))Ic(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,S=a(r,n);if(i.hasEagerState=!0,i.eagerState=S,an(S,r))return Va(e,t,i,0),dt===null&&za(),!1}catch{}finally{}if(n=rs(e,t,i,o),n!==null)return Yt(n,e,o),Nc(n,t,o),!0}return!1}function Ds(e,t,n,o){if(o={lane:2,revertLane:bl(),action:o,hasEagerState:!1,eagerState:null,next:null},tr(e)){if(t)throw Error(f(479))}else t=rs(e,n,o,2),t!==null&&Yt(t,e,2)}function tr(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function Ic(e,t){ui=Ya=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nc(e,t,n){if(n&4194176){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ee(e,n)}}var En={readContext:Zt,use:Ja,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt};En.useCacheRefresh=Mt,En.useMemoCache=Mt,En.useHostTransitionStatus=Mt,En.useFormState=Mt,En.useActionState=Mt,En.useOptimistic=Mt;var Lo={readContext:Zt,use:Ja,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:Zt,useEffect:bc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,$a(4194308,4,wc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $a(4194308,4,e,t)},useInsertionEffect:function(e,t){$a(4,2,e,t)},useMemo:function(e,t){var n=en();t=t===void 0?null:t;var o=e();if(No){Pt(!0);try{e()}finally{Pt(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=en();if(n!==void 0){var i=n(t);if(No){Pt(!0);try{n(t)}finally{Pt(!1)}}}else i=t;return o.memoizedState=o.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},o.queue=e,e=e.dispatch=qd.bind(null,Qe,e),[o.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:function(e){e=Fs(e);var t=e.queue,n=xc.bind(null,Qe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ks,useDeferredValue:function(e,t){var n=en();return Ps(n,e,t)},useTransition:function(){var e=Fs(!1);return e=Pc.bind(null,Qe,e.queue,!0,!1),en().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=Qe,i=en();if(it){if(n===void 0)throw Error(f(407));n=n()}else{if(n=t(),dt===null)throw Error(f(349));tt&60||ic(o,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,bc(rc.bind(null,o,a,e),[e]),o.flags|=2048,hi(9,ac.bind(null,o,a,n,t),{destroy:void 0},null),n},useId:function(){var e=en(),t=dt.identifierPrefix;if(it){var n=Vn,o=zn;n=(o&~(1<<32-Rt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=qa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ud++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return en().memoizedState=Yd.bind(null,Qe)}};Lo.useMemoCache=Cs,Lo.useHostTransitionStatus=Ts,Lo.useFormState=fc,Lo.useActionState=fc,Lo.useOptimistic=function(e){var t=en();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ds.bind(null,Qe,!0,n),n.dispatch=t,[e,t]};var io={readContext:Zt,use:Ja,useCallback:Oc,useContext:Zt,useEffect:Ms,useImperativeHandle:Fc,useInsertionEffect:Cc,useLayoutEffect:Ac,useMemo:Mc,useReducer:Ka,useRef:vc,useState:function(){return Ka(_n)},useDebugValue:ks,useDeferredValue:function(e,t){var n=Dt();return kc(n,ut.memoizedState,e,t)},useTransition:function(){var e=Ka(_n)[0],t=Dt().memoizedState;return[typeof e=="boolean"?e:Qi(e),t]},useSyncExternalStore:oc,useId:Dc};io.useCacheRefresh=Ec,io.useMemoCache=Cs,io.useHostTransitionStatus=Ts,io.useFormState=pc,io.useActionState=pc,io.useOptimistic=function(e,t){var n=Dt();return uc(n,ut,e,t)};var zo={readContext:Zt,use:Ja,useCallback:Oc,useContext:Zt,useEffect:Ms,useImperativeHandle:Fc,useInsertionEffect:Cc,useLayoutEffect:Ac,useMemo:Mc,useReducer:ws,useRef:vc,useState:function(){return ws(_n)},useDebugValue:ks,useDeferredValue:function(e,t){var n=Dt();return ut===null?Ps(n,e,t):kc(n,ut.memoizedState,e,t)},useTransition:function(){var e=ws(_n)[0],t=Dt().memoizedState;return[typeof e=="boolean"?e:Qi(e),t]},useSyncExternalStore:oc,useId:Dc};zo.useCacheRefresh=Ec,zo.useMemoCache=Cs,zo.useHostTransitionStatus=Ts,zo.useFormState=yc,zo.useActionState=yc,zo.useOptimistic=function(e,t){var n=Dt();return ut!==null?uc(n,ut,e,t):(n.baseState=e,[e,n.queue.dispatch])};function Es(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xs={isMounted:function(e){return(e=e._reactInternals)?pe(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=un(),i=so(o);i.payload=t,n!=null&&(i.callback=n),t=lo(e,i,o),t!==null&&(Yt(t,e,o),Ji(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=un(),i=so(o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=lo(e,i,o),t!==null&&(Yt(t,e,o),Ji(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=un(),o=so(n);o.tag=2,t!=null&&(o.callback=t),t=lo(e,o,n),t!==null&&(Yt(t,e,n),Ji(t,e,n))}};function Lc(e,t,n,o,i,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ni(n,o)||!Ni(i,a):!0}function zc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&xs.enqueueReplaceState(t,t.state,null)}function Vo(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=re({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var nr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vc(e){nr(e)}function Hc(e){console.error(e)}function _c(e){nr(e)}function or(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Bc(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Is(e,t,n){return n=so(n),n.tag=3,n.payload={element:null},n.callback=function(){or(e,t)},n}function jc(e){return e=so(e),e.tag=3,e}function Uc(e,t,n,o){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var a=o.value;e.payload=function(){return i(a)},e.callback=function(){Bc(t,n,o)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Bc(t,n,o),typeof i!="function"&&(fo===null?fo=new Set([this]):fo.add(this));var S=o.stack;this.componentDidCatch(o.value,{componentStack:S!==null?S:""})})}function Xd(e,t,n,o,i){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&Xi(t,n,i,!0),n=pn.current,n!==null){switch(n.tag){case 13:return Dn===null?fl():n.alternate===null&&Ft===0&&(Ft=3),n.flags&=-257,n.flags|=65536,n.lanes=i,o===cs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),Sl(e,o,i)),!1;case 22:return n.flags|=65536,o===cs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),Sl(e,o,i)),!1}throw Error(f(435,n.tag))}return Sl(e,o,i),fl(),!1}if(it)return t=pn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,o!==us&&(e=Error(f(422),{cause:o}),Hi(dn(e,n)))):(o!==us&&(t=Error(f(423),{cause:o}),Hi(dn(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,o=dn(o,n),i=Is(e.stateNode,o,i),qs(e,i),Ft!==4&&(Ft=2)),!1;var a=Error(f(520),{cause:o});if(a=dn(a,n),aa===null?aa=[a]:aa.push(a),Ft!==4&&(Ft=2),t===null)return!0;o=dn(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Is(n.stateNode,o,e),qs(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(fo===null||!fo.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=jc(i),Uc(i,e,n,o),qs(n,i),!1}n=n.return}while(n!==null);return!1}var Wc=Error(f(461)),zt=!1;function jt(e,t,n,o){t.child=e===null?qu(t,null,n,o):xo(t,e.child,n,o)}function Zc(e,t,n,o,i){n=n.render;var a=t.ref;if("ref"in o){var r={};for(var S in o)S!=="ref"&&(r[S]=o[S])}else r=o;return _o(t),o=Ss(e,t,n,r,a,i),S=ys(),e!==null&&!zt?(vs(e,t,i),Bn(e,t,i)):(it&&S&&ss(t),t.flags|=1,jt(e,t,o,i),t.child)}function Gc(e,t,n,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!ol(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Qc(e,t,a,o,i)):(e=lr(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Us(e,i)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(r,o)&&e.ref===t.ref)return Bn(e,t,i)}return t.flags|=1,e=mo(a,o),e.ref=t.ref,e.return=t,t.child=e}function Qc(e,t,n,o,i){if(e!==null){var a=e.memoizedProps;if(Ni(a,o)&&e.ref===t.ref)if(zt=!1,t.pendingProps=o=a,Us(e,i))e.flags&131072&&(zt=!0);else return t.lanes=e.lanes,Bn(e,t,i)}return Ns(e,t,n,o,i)}function Yc(e,t,n){var o=t.pendingProps,i=o.children,a=(t.stateNode._pendingVisibility&2)!==0,r=e!==null?e.memoizedState:null;if(qi(e,t),o.mode==="hidden"||a){if(t.flags&128){if(o=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~o}else t.childLanes=0,t.child=null;return qc(e,t,o,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qa(t,r!==null?r.cachePool:null),r!==null?Xu(t,r):hs(),Ju(t);else return t.lanes=t.childLanes=536870912,qc(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Qa(t,r.cachePool),Xu(t,r),no(),t.memoizedState=null):(e!==null&&Qa(t,null),hs(),no());return jt(e,t,i,n),t.child}function qc(e,t,n,o){var i=fs();return i=i===null?null:{parent:Lt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Qa(t,null),hs(),Ju(t),e!==null&&Xi(e,t,o,!0),null}function qi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(f(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Ns(e,t,n,o,i){return _o(t),n=Ss(e,t,n,o,void 0,i),o=ys(),e!==null&&!zt?(vs(e,t,i),Bn(e,t,i)):(it&&o&&ss(t),t.flags|=1,jt(e,t,n,i),t.child)}function Xc(e,t,n,o,i,a){return _o(t),t.updateQueue=null,n=nc(t,o,n,i),tc(e),o=ys(),e!==null&&!zt?(vs(e,t,a),Bn(e,t,a)):(it&&o&&ss(t),t.flags|=1,jt(e,t,n,a),t.child)}function Jc(e,t,n,o,i){if(_o(t),t.stateNode===null){var a=ni,r=n.contextType;typeof r=="object"&&r!==null&&(a=Zt(r)),a=new n(o,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=xs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=o,a.state=t.memoizedState,a.refs={},Qs(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?Zt(r):ni,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Es(t,n,r,o),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&xs.enqueueReplaceState(a,a.state,null),$i(t,o,a,i),Ki(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){a=t.stateNode;var S=t.memoizedProps,P=Vo(n,S);a.props=P;var V=a.context,ae=n.contextType;r=ni,typeof ae=="object"&&ae!==null&&(r=Zt(ae));var fe=n.getDerivedStateFromProps;ae=typeof fe=="function"||typeof a.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,ae||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(S||V!==r)&&zc(t,a,o,r),ro=!1;var G=t.memoizedState;a.state=G,$i(t,o,a,i),Ki(),V=t.memoizedState,S||G!==V||ro?(typeof fe=="function"&&(Es(t,n,fe,o),V=t.memoizedState),(P=ro||Lc(t,n,P,o,G,V,r))?(ae||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=V),a.props=o,a.state=V,a.context=r,o=P):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{a=t.stateNode,Ys(e,t),r=t.memoizedProps,ae=Vo(n,r),a.props=ae,fe=t.pendingProps,G=a.context,V=n.contextType,P=ni,typeof V=="object"&&V!==null&&(P=Zt(V)),S=n.getDerivedStateFromProps,(V=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==fe||G!==P)&&zc(t,a,o,P),ro=!1,G=t.memoizedState,a.state=G,$i(t,o,a,i),Ki();var oe=t.memoizedState;r!==fe||G!==oe||ro||e!==null&&e.dependencies!==null&&ir(e.dependencies)?(typeof S=="function"&&(Es(t,n,S,o),oe=t.memoizedState),(ae=ro||Lc(t,n,ae,o,G,oe,P)||e!==null&&e.dependencies!==null&&ir(e.dependencies))?(V||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,oe,P),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,oe,P)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=oe),a.props=o,a.state=oe,a.context=P,o=ae):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),o=!1)}return a=o,qi(e,t),o=(t.flags&128)!==0,a||o?(a=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&o?(t.child=xo(t,e.child,null,i),t.child=xo(t,null,n,i)):jt(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Bn(e,t,i),e}function Kc(e,t,n,o){return Vi(),t.flags|=256,jt(e,t,n,o),t.child}var Ls={dehydrated:null,treeContext:null,retryLane:0};function zs(e){return{baseLanes:e,cachePool:ec()}}function Vs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=bn),e}function $c(e,t,n){var o=t.pendingProps,i=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Nt.current&2)!==0),r&&(i=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(it){if(i?to(t):no(),it){var S=Bt,P;if(P=S){e:{for(P=S,S=Tn;P.nodeType!==8;){if(!S){S=null;break e}if(P=Mn(P.nextSibling),P===null){S=null;break e}}S=P}S!==null?(t.memoizedState={dehydrated:S,treeContext:To!==null?{id:zn,overflow:Vn}:null,retryLane:536870912},P=vn(18,null,null,0),P.stateNode=S,P.return=t,t.child=P,Qt=t,Bt=null,P=!0):P=!1}P||Eo(t)}if(S=t.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return S.data==="$!"?t.lanes=16:t.lanes=536870912,null;Hn(t)}return S=o.children,o=o.fallback,i?(no(),i=t.mode,S=_s({mode:"hidden",children:S},i),o=jo(o,i,n,null),S.return=t,o.return=t,S.sibling=o,t.child=S,i=t.child,i.memoizedState=zs(n),i.childLanes=Vs(e,r,n),t.memoizedState=Ls,o):(to(t),Hs(t,S))}if(P=e.memoizedState,P!==null&&(S=P.dehydrated,S!==null)){if(a)t.flags&256?(to(t),t.flags&=-257,t=Bs(e,t,n)):t.memoizedState!==null?(no(),t.child=e.child,t.flags|=128,t=null):(no(),i=o.fallback,S=t.mode,o=_s({mode:"visible",children:o.children},S),i=jo(i,S,n,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,xo(t,e.child,null,n),o=t.child,o.memoizedState=zs(n),o.childLanes=Vs(e,r,n),t.memoizedState=Ls,t=i);else if(to(t),S.data==="$!"){if(r=S.nextSibling&&S.nextSibling.dataset,r)var V=r.dgst;r=V,o=Error(f(419)),o.stack="",o.digest=r,Hi({value:o,source:null,stack:null}),t=Bs(e,t,n)}else if(zt||Xi(e,t,n,!1),r=(n&e.childLanes)!==0,zt||r){if(r=dt,r!==null){if(o=n&-n,o&42)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=o&(r.suspendedLanes|n)?0:o,o!==0&&o!==P.retryLane)throw P.retryLane=o,eo(e,o),Yt(r,e,o),Wc}S.data==="$?"||fl(),t=Bs(e,t,n)}else S.data==="$?"?(t.flags|=128,t.child=e.child,t=hg.bind(null,e),S._reactRetry=t,t=null):(e=P.treeContext,Bt=Mn(S.nextSibling),Qt=t,it=!0,Fn=null,Tn=!1,e!==null&&(gn[fn++]=zn,gn[fn++]=Vn,gn[fn++]=To,zn=e.id,Vn=e.overflow,To=t),t=Hs(t,o.children),t.flags|=4096);return t}return i?(no(),i=o.fallback,S=t.mode,P=e.child,V=P.sibling,o=mo(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&31457280,V!==null?i=mo(V,i):(i=jo(i,S,n,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,S=e.child.memoizedState,S===null?S=zs(n):(P=S.cachePool,P!==null?(V=Lt._currentValue,P=P.parent!==V?{parent:V,pool:V}:P):P=ec(),S={baseLanes:S.baseLanes|n,cachePool:P}),i.memoizedState=S,i.childLanes=Vs(e,r,n),t.memoizedState=Ls,o):(to(t),n=e.child,e=n.sibling,n=mo(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Hs(e,t){return t=_s({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function _s(e,t){return Oh(e,t,0,null)}function Bs(e,t,n){return xo(t,e.child,null,n),e=Hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eh(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Zs(e.return,t,n)}function js(e,t,n,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=i)}function th(e,t,n){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(jt(e,t,o.children,n),o=Nt.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eh(e,n,t);else if(e.tag===19)eh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Ve(Nt,o),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ga(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),js(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ga(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}js(t,!0,n,null,a);break;case"together":js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),go|=t.lanes,!(n&t.childLanes))if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,n=mo(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mo(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Us(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&ir(e)))}function Jd(e,t,n){switch(t.tag){case 3:se(t,t.stateNode.containerInfo),ao(t,Lt,e.memoizedState.cache),Vi();break;case 27:case 5:M(t);break;case 4:se(t,t.stateNode.containerInfo);break;case 10:ao(t,t.type,t.memoizedProps.value);break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(to(t),t.flags|=128,null):n&t.child.childLanes?$c(e,t,n):(to(t),e=Bn(e,t,n),e!==null?e.sibling:null);to(t);break;case 19:var i=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(Xi(e,t,n,!1),o=(n&t.childLanes)!==0),i){if(o)return th(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ve(Nt,Nt.current),o)break;return null;case 22:case 23:return t.lanes=0,Yc(e,t,n);case 24:ao(t,Lt,e.memoizedState.cache)}return Bn(e,t,n)}function nh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)zt=!0;else{if(!Us(e,n)&&!(t.flags&128))return zt=!1,Jd(e,t,n);zt=!!(e.flags&131072)}else zt=!1,it&&t.flags&1048576&&_u(t,Ba,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var o=t.elementType,i=o._init;if(o=i(o._payload),t.type=o,typeof o=="function")ol(o)?(e=Vo(o,e),t.tag=1,t=Jc(null,t,o,e,n)):(t.tag=0,t=Ns(null,t,o,e,n));else{if(o!=null){if(i=o.$$typeof,i===A){t.tag=11,t=Zc(null,t,o,e,n);break e}else if(i===v){t.tag=14,t=Gc(null,t,o,e,n);break e}}throw t=ge(o)||o,Error(f(306,t,""))}}return t;case 0:return Ns(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,i=Vo(o,t.pendingProps),Jc(e,t,o,i,n);case 3:e:{if(se(t,t.stateNode.containerInfo),e===null)throw Error(f(387));var a=t.pendingProps;i=t.memoizedState,o=i.element,Ys(e,t),$i(t,a,null,n);var r=t.memoizedState;if(a=r.cache,ao(t,Lt,a),a!==i.cache&&Gs(t,[Lt],n,!0),Ki(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Kc(e,t,a,n);break e}else if(a!==o){o=dn(Error(f(424)),t),Hi(o),t=Kc(e,t,a,n);break e}else for(Bt=Mn(t.stateNode.containerInfo.firstChild),Qt=t,it=!0,Fn=null,Tn=!0,n=qu(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),a===o){t=Bn(e,t,n);break e}jt(e,t,a,n)}t=t.child}return t;case 26:return qi(e,t),e===null?(n=am(t.type,null,t.pendingProps,null))?t.memoizedState=n:it||(n=t.type,e=t.pendingProps,o=br(St.current).createElement(n),o[Pe]=t,o[Ne]=e,Ut(o,n,e),Te(o),t.stateNode=o):t.memoizedState=am(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return M(t),e===null&&it&&(o=t.stateNode=nm(t.type,t.pendingProps,St.current),Qt=t,Tn=!0,Bt=Mn(o.firstChild)),o=t.pendingProps.children,e!==null||it?jt(e,t,o,n):t.child=xo(t,null,o,n),qi(e,t),t.child;case 5:return e===null&&it&&((i=o=Bt)&&(o=kg(o,t.type,t.pendingProps,Tn),o!==null?(t.stateNode=o,Qt=t,Bt=Mn(o.firstChild),Tn=!1,i=!0):i=!1),i||Eo(t)),M(t),i=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,o=a.children,Rl(i,a)?o=null:r!==null&&Rl(i,r)&&(t.flags|=32),t.memoizedState!==null&&(i=Ss(e,t,Wd,null,null,n),ga._currentValue=i),qi(e,t),jt(e,t,o,n),t.child;case 6:return e===null&&it&&((e=n=Bt)&&(n=Pg(n,t.pendingProps,Tn),n!==null?(t.stateNode=n,Qt=t,Bt=null,e=!0):e=!1),e||Eo(t)),null;case 13:return $c(e,t,n);case 4:return se(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=xo(t,null,o,n):jt(e,t,o,n),t.child;case 11:return Zc(e,t,t.type,t.pendingProps,n);case 7:return jt(e,t,t.pendingProps,n),t.child;case 8:return jt(e,t,t.pendingProps.children,n),t.child;case 12:return jt(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,ao(t,t.type,o.value),jt(e,t,o.children,n),t.child;case 9:return i=t.type._context,o=t.pendingProps.children,_o(t),i=Zt(i),o=o(i),t.flags|=1,jt(e,t,o,n),t.child;case 14:return Gc(e,t,t.type,t.pendingProps,n);case 15:return Qc(e,t,t.type,t.pendingProps,n);case 19:return th(e,t,n);case 22:return Yc(e,t,n);case 24:return _o(t),o=Zt(Lt),e===null?(i=fs(),i===null&&(i=dt,a=ds(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:o,cache:i},Qs(t),ao(t,Lt,i)):(e.lanes&n&&(Ys(e,t),$i(t,null,null,n),Ki()),i=e.memoizedState,a=t.memoizedState,i.parent!==o?(i={parent:o,cache:o},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ao(t,Lt,o)):(o=a.cache,ao(t,Lt,o),o!==i.cache&&Gs(t,[Lt],n,!0))),jt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}var Ws=Ae(null),Ho=null,jn=null;function ao(e,t,n){Ve(Ws,t._currentValue),t._currentValue=n}function Un(e){e._currentValue=Ws.current,Ee(Ws)}function Zs(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Gs(e,t,n,o){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var r=i.child;a=a.firstContext;e:for(;a!==null;){var S=a;a=i;for(var P=0;P<t.length;P++)if(S.context===t[P]){a.lanes|=n,S=a.alternate,S!==null&&(S.lanes|=n),Zs(a.return,n,e),o||(r=null);break e}a=S.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(f(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Zs(r,n,e),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Xi(e,t,n,o){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(f(387));if(r=r.memoizedProps,r!==null){var S=i.type;an(i.pendingProps.value,r.value)||(e!==null?e.push(S):e=[S])}}else if(i===s.current){if(r=i.alternate,r===null)throw Error(f(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ga):e=[ga])}i=i.return}e!==null&&Gs(t,e,n,o),t.flags|=262144}function ir(e){for(e=e.firstContext;e!==null;){if(!an(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _o(e){Ho=e,jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zt(e){return oh(Ho,e)}function ar(e,t){return Ho===null&&_o(e),oh(e,t)}function oh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},jn===null){if(e===null)throw Error(f(308));jn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jn=jn.next=t;return n}var ro=!1;function Qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ys(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function so(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function lo(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,At&2){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,t=Ha(e),Vu(e,null,n),t}return Va(e,o,t,n),Ha(e)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ee(e,n)}}function qs(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xs=!1;function Ki(){if(Xs){var e=li;if(e!==null)throw e}}function $i(e,t,n,o){Xs=!1;var i=e.updateQueue;ro=!1;var a=i.firstBaseUpdate,r=i.lastBaseUpdate,S=i.shared.pending;if(S!==null){i.shared.pending=null;var P=S,V=P.next;P.next=null,r===null?a=V:r.next=V,r=P;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,S=ae.lastBaseUpdate,S!==r&&(S===null?ae.firstBaseUpdate=V:S.next=V,ae.lastBaseUpdate=P))}if(a!==null){var fe=i.baseState;r=0,ae=V=P=null,S=a;do{var G=S.lane&-536870913,oe=G!==S.lane;if(oe?(tt&G)===G:(o&G)===G){G!==0&&G===si&&(Xs=!0),ae!==null&&(ae=ae.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var De=e,je=S;G=t;var Ot=n;switch(je.tag){case 1:if(De=je.payload,typeof De=="function"){fe=De.call(Ot,fe,G);break e}fe=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=je.payload,G=typeof De=="function"?De.call(Ot,fe,G):De,G==null)break e;fe=re({},fe,G);break e;case 2:ro=!0}}G=S.callback,G!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=i.callbacks,oe===null?i.callbacks=[G]:oe.push(G))}else oe={lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ae===null?(V=ae=oe,P=fe):ae=ae.next=oe,r|=G;if(S=S.next,S===null){if(S=i.shared.pending,S===null)break;oe=S,S=oe.next,oe.next=null,i.lastBaseUpdate=oe,i.shared.pending=null}}while(!0);ae===null&&(P=fe),i.baseState=P,i.firstBaseUpdate=V,i.lastBaseUpdate=ae,a===null&&(i.shared.lanes=0),go|=r,e.lanes=r,e.memoizedState=fe}}function ih(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function ah(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ih(n[e],t)}function ea(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var i=o.next;n=i;do{if((n.tag&e)===e){o=void 0;var a=n.create,r=n.inst;o=a(),r.destroy=o}n=n.next}while(n!==i)}}catch(S){ht(t,t.return,S)}}function uo(e,t,n){try{var o=t.updateQueue,i=o!==null?o.lastEffect:null;if(i!==null){var a=i.next;o=a;do{if((o.tag&e)===e){var r=o.inst,S=r.destroy;if(S!==void 0){r.destroy=void 0,i=t;var P=n;try{S()}catch(V){ht(i,P,V)}}}o=o.next}while(o!==a)}}catch(V){ht(t,t.return,V)}}function rh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ah(t,n)}catch(o){ht(e,e.return,o)}}}function sh(e,t,n){n.props=Vo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){ht(e,t,o)}}function Bo(e,t){try{var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=o;break;default:i=o}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ht(e,t,a)}}function rn(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(i){ht(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ht(e,t,i)}else n.current=null}function lh(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(i){ht(e,e.return,i)}}function uh(e,t,n){try{var o=e.stateNode;Ag(o,e.type,n,t),o[Ne]=t}catch(i){ht(e,e.return,i)}}function ch(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Js(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ch(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ks(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vr));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Ks(e,t,n),e=e.sibling;e!==null;)Ks(e,t,n),e=e.sibling}function rr(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(rr(e,t,n),e=e.sibling;e!==null;)rr(e,t,n),e=e.sibling}var Wn=!1,wt=!1,$s=!1,hh=typeof WeakSet=="function"?WeakSet:Set,Vt=null,mh=!1;function Kd(e,t){if(e=e.containerInfo,kl=Mr,e=Ru(e),ts(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,S=-1,P=-1,V=0,ae=0,fe=e,G=null;t:for(;;){for(var oe;fe!==n||i!==0&&fe.nodeType!==3||(S=r+i),fe!==a||o!==0&&fe.nodeType!==3||(P=r+o),fe.nodeType===3&&(r+=fe.nodeValue.length),(oe=fe.firstChild)!==null;)G=fe,fe=oe;for(;;){if(fe===e)break t;if(G===n&&++V===i&&(S=r),G===a&&++ae===o&&(P=r),(oe=fe.nextSibling)!==null)break;fe=G,G=fe.parentNode}fe=oe}n=S===-1||P===-1?null:{start:S,end:P}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pl={focusedElem:e,selectionRange:n},Mr=!1,Vt=t;Vt!==null;)if(t=Vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Vt=e;else for(;Vt!==null;){switch(t=Vt,a=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,o=n.stateNode;try{var De=Vo(n.type,i,n.elementType===n.type);e=o.getSnapshotBeforeUpdate(De,a),o.__reactInternalSnapshotBeforeUpdate=e}catch(je){ht(n,n.return,je)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)El(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":El(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,Vt=e;break}Vt=t.return}return De=mh,mh=!1,De}function dh(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Gn(e,n),o&4&&ea(5,n);break;case 1:if(Gn(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(S){ht(n,n.return,S)}else{var i=Vo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(S){ht(n,n.return,S)}}o&64&&rh(n),o&512&&Bo(n,n.return);break;case 3:if(Gn(e,n),o&64&&(o=n.updateQueue,o!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{ah(o,e)}catch(S){ht(n,n.return,S)}}break;case 26:Gn(e,n),o&512&&Bo(n,n.return);break;case 27:case 5:Gn(e,n),t===null&&o&4&&lh(n),o&512&&Bo(n,n.return);break;case 12:Gn(e,n);break;case 13:Gn(e,n),o&4&&ph(e,n);break;case 22:if(i=n.memoizedState!==null||Wn,!i){t=t!==null&&t.memoizedState!==null||wt;var a=Wn,r=wt;Wn=i,(wt=t)&&!r?co(e,n,(n.subtreeFlags&8772)!==0):Gn(e,n),Wn=a,wt=r}o&512&&(n.memoizedProps.mode==="manual"?Bo(n,n.return):rn(n,n.return));break;default:Gn(e,n)}}function gh(e){var t=e.alternate;t!==null&&(e.alternate=null,gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&We(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Et=null,sn=!1;function Zn(e,t,n){for(n=n.child;n!==null;)fh(e,t,n),n=n.sibling}function fh(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(lt,n)}catch{}switch(n.tag){case 26:wt||rn(n,t),Zn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:wt||rn(n,t);var o=Et,i=sn;for(Et=n.stateNode,Zn(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);We(n),Et=o,sn=i;break;case 5:wt||rn(n,t);case 6:i=Et;var a=sn;if(Et=null,Zn(e,t,n),Et=i,sn=a,Et!==null)if(sn)try{e=Et,o=n.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(r){ht(n,t,r)}else try{Et.removeChild(n.stateNode)}catch(r){ht(n,t,r)}break;case 18:Et!==null&&(sn?(t=Et,n=n.stateNode,t.nodeType===8?Dl(t.parentNode,n):t.nodeType===1&&Dl(t,n),ya(t)):Dl(Et,n.stateNode));break;case 4:o=Et,i=sn,Et=n.stateNode.containerInfo,sn=!0,Zn(e,t,n),Et=o,sn=i;break;case 0:case 11:case 14:case 15:wt||uo(2,n,t),wt||uo(4,n,t),Zn(e,t,n);break;case 1:wt||(rn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&sh(n,t,o)),Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:wt||rn(n,t),wt=(o=wt)||n.memoizedState!==null,Zn(e,t,n),wt=o;break;default:Zn(e,t,n)}}function ph(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ya(e)}catch(n){ht(t,t.return,n)}}function $d(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hh),t;default:throw Error(f(435,e.tag))}}function el(e,t){var n=$d(e);t.forEach(function(o){var i=mg.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}function Sn(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o],a=e,r=t,S=r;e:for(;S!==null;){switch(S.tag){case 27:case 5:Et=S.stateNode,sn=!1;break e;case 3:Et=S.stateNode.containerInfo,sn=!0;break e;case 4:Et=S.stateNode.containerInfo,sn=!0;break e}S=S.return}if(Et===null)throw Error(f(160));fh(a,r,i),Et=null,sn=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Sh(t,e),t=t.sibling}var On=null;function Sh(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Sn(t,e),yn(e),o&4&&(uo(3,e,e.return),ea(3,e),uo(5,e,e.return));break;case 1:Sn(t,e),yn(e),o&512&&(wt||n===null||rn(n,n.return)),o&64&&Wn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var i=On;if(Sn(t,e),yn(e),o&512&&(wt||n===null||rn(n,n.return)),o&4){var a=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(o){case"title":a=i.getElementsByTagName("title")[0],(!a||a[yt]||a[Pe]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=i.createElement(o),i.head.insertBefore(a,i.querySelector("head > title"))),Ut(a,o,n),a[Pe]=e,Te(a),o=a;break e;case"link":var r=lm("link","href",i).get(o+(n.href||""));if(r){for(var S=0;S<r.length;S++)if(a=r[S],a.getAttribute("href")===(n.href==null?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(S,1);break t}}a=i.createElement(o),Ut(a,o,n),i.head.appendChild(a);break;case"meta":if(r=lm("meta","content",i).get(o+(n.content||""))){for(S=0;S<r.length;S++)if(a=r[S],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(S,1);break t}}a=i.createElement(o),Ut(a,o,n),i.head.appendChild(a);break;default:throw Error(f(468,o))}a[Pe]=e,Te(a),o=a}e.stateNode=o}else um(i,e.type,e.stateNode);else e.stateNode=sm(i,o,e.memoizedProps);else a!==o?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,o===null?um(i,e.type,e.stateNode):sm(i,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uh(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){i=e.stateNode,a=e.memoizedProps;try{for(var P=i.firstChild;P;){var V=P.nextSibling,ae=P.nodeName;P[yt]||ae==="HEAD"||ae==="BODY"||ae==="SCRIPT"||ae==="STYLE"||ae==="LINK"&&P.rel.toLowerCase()==="stylesheet"||i.removeChild(P),P=V}for(var fe=e.type,G=i.attributes;G.length;)i.removeAttributeNode(G[0]);Ut(i,fe,a),i[Pe]=e,i[Ne]=a}catch(De){ht(e,e.return,De)}}case 5:if(Sn(t,e),yn(e),o&512&&(wt||n===null||rn(n,n.return)),e.flags&32){i=e.stateNode;try{qo(i,"")}catch(De){ht(e,e.return,De)}}o&4&&e.stateNode!=null&&(i=e.memoizedProps,uh(e,i,n!==null?n.memoizedProps:i)),o&1024&&($s=!0);break;case 6:if(Sn(t,e),yn(e),o&4){if(e.stateNode===null)throw Error(f(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(De){ht(e,e.return,De)}}break;case 3:if(wr=null,i=On,On=Cr(t.containerInfo),Sn(t,e),On=i,yn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(t.containerInfo)}catch(De){ht(e,e.return,De)}$s&&($s=!1,yh(e));break;case 4:o=On,On=Cr(e.stateNode.containerInfo),Sn(t,e),yn(e),On=o;break;case 12:Sn(t,e),yn(e);break;case 13:Sn(t,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ul=be()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,el(e,o)));break;case 22:if(o&512&&(wt||n===null||rn(n,n.return)),P=e.memoizedState!==null,V=n!==null&&n.memoizedState!==null,ae=Wn,fe=wt,Wn=ae||P,wt=fe||V,Sn(t,e),wt=fe,Wn=ae,yn(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,o&8192&&(t._visibility=P?t._visibility&-2:t._visibility|1,P&&(t=Wn||wt,n===null||V||t||mi(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){V=n=t;try{if(i=V.stateNode,P)a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{r=V.stateNode,S=V.memoizedProps.style;var oe=S!=null&&S.hasOwnProperty("display")?S.display:null;r.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(De){ht(V,V.return,De)}}}else if(t.tag===6){if(n===null){V=t;try{V.stateNode.nodeValue=P?"":V.memoizedProps}catch(De){ht(V,V.return,De)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,el(e,n))));break;case 19:Sn(t,e),yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,el(e,o)));break;case 21:break;default:Sn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(ch(n)){var o=n;break e}n=n.return}throw Error(f(160))}switch(o.tag){case 27:var i=o.stateNode,a=Js(e);rr(e,a,i);break;case 5:var r=o.stateNode;o.flags&32&&(qo(r,""),o.flags&=-33);var S=Js(e);rr(e,S,r);break;case 3:case 4:var P=o.stateNode.containerInfo,V=Js(e);Ks(e,V,P);break;default:throw Error(f(161))}}}catch(ae){ht(e,e.return,ae)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dh(e,t.alternate,t),t=t.sibling}function mi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:uo(4,t,t.return),mi(t);break;case 1:rn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&sh(t,t.return,n),mi(t);break;case 26:case 27:case 5:rn(t,t.return),mi(t);break;case 22:rn(t,t.return),t.memoizedState===null&&mi(t);break;default:mi(t)}e=e.sibling}}function co(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,i=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:co(i,a,n),ea(4,a);break;case 1:if(co(i,a,n),o=a,i=o.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(V){ht(o,o.return,V)}if(o=a,i=o.updateQueue,i!==null){var S=o.stateNode;try{var P=i.shared.hiddenCallbacks;if(P!==null)for(i.shared.hiddenCallbacks=null,i=0;i<P.length;i++)ih(P[i],S)}catch(V){ht(o,o.return,V)}}n&&r&64&&rh(a),Bo(a,a.return);break;case 26:case 27:case 5:co(i,a,n),n&&o===null&&r&4&&lh(a),Bo(a,a.return);break;case 12:co(i,a,n);break;case 13:co(i,a,n),n&&r&4&&ph(i,a);break;case 22:a.memoizedState===null&&co(i,a,n),Bo(a,a.return);break;default:co(i,a,n)}t=t.sibling}}function tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Wi(n))}function nl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wi(e))}function ho(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vh(e,t,n,o),t=t.sibling}function vh(e,t,n,o){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ho(e,t,n,o),i&2048&&ea(9,t);break;case 3:ho(e,t,n,o),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wi(e)));break;case 12:if(i&2048){ho(e,t,n,o),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,S=a.onPostCommit;typeof S=="function"&&S(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){ht(t,t.return,P)}}else ho(e,t,n,o);break;case 23:break;case 22:a=t.stateNode,t.memoizedState!==null?a._visibility&4?ho(e,t,n,o):ta(e,t):a._visibility&4?ho(e,t,n,o):(a._visibility|=4,di(e,t,n,o,(t.subtreeFlags&10256)!==0)),i&2048&&tl(t.alternate,t);break;case 24:ho(e,t,n,o),i&2048&&nl(t.alternate,t);break;default:ho(e,t,n,o)}}function di(e,t,n,o,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var a=e,r=t,S=n,P=o,V=r.flags;switch(r.tag){case 0:case 11:case 15:di(a,r,S,P,i),ea(8,r);break;case 23:break;case 22:var ae=r.stateNode;r.memoizedState!==null?ae._visibility&4?di(a,r,S,P,i):ta(a,r):(ae._visibility|=4,di(a,r,S,P,i)),i&&V&2048&&tl(r.alternate,r);break;case 24:di(a,r,S,P,i),i&&V&2048&&nl(r.alternate,r);break;default:di(a,r,S,P,i)}t=t.sibling}}function ta(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,i=o.flags;switch(o.tag){case 22:ta(n,o),i&2048&&tl(o.alternate,o);break;case 24:ta(n,o),i&2048&&nl(o.alternate,o);break;default:ta(n,o)}t=t.sibling}}var na=8192;function gi(e){if(e.subtreeFlags&na)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 26:gi(e),e.flags&na&&e.memoizedState!==null&&Bg(On,e.memoizedState,e.memoizedProps);break;case 5:gi(e);break;case 3:case 4:var t=On;On=Cr(e.stateNode.containerInfo),gi(e),On=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=na,na=16777216,gi(e),na=t):gi(e));break;default:gi(e)}}function Ch(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function oa(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Vt=o,wh(o,e)}Ch(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ah(e),e=e.sibling}function Ah(e){switch(e.tag){case 0:case 11:case 15:oa(e),e.flags&2048&&uo(9,e,e.return);break;case 3:oa(e);break;case 12:oa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,sr(e)):oa(e);break;default:oa(e)}}function sr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Vt=o,wh(o,e)}Ch(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:uo(8,t,t.return),sr(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,sr(t));break;default:sr(t)}e=e.sibling}}function wh(e,t){for(;Vt!==null;){var n=Vt;switch(n.tag){case 0:case 11:case 15:uo(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Wi(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Vt=o;else e:for(n=e;Vt!==null;){o=Vt;var i=o.sibling,a=o.return;if(gh(o),o===n){Vt=null;break e}if(i!==null){i.return=a,Vt=i;break e}Vt=a}}}function eg(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,t,n,o){return new eg(e,t,n,o)}function ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mo(e,t){var n=e.alternate;return n===null?(n=vn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fh(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function lr(e,t,n,o,i,a){var r=0;if(o=e,typeof e=="function")ol(e)&&(r=1);else if(typeof e=="string")r=Hg(e,n,Xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case m:return jo(n.children,i,a,t);case p:r=8,i|=24;break;case T:return e=vn(12,n,t,i|2),e.elementType=T,e.lanes=a,e;case d:return e=vn(13,n,t,i),e.elementType=d,e.lanes=a,e;case C:return e=vn(19,n,t,i),e.elementType=C,e.lanes=a,e;case N:return Oh(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:case y:r=10;break e;case R:r=9;break e;case A:r=11;break e;case v:r=14;break e;case k:r=16,o=null;break e}r=29,n=Error(f(130,e===null?"null":typeof e,"")),o=null}return t=vn(r,n,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function jo(e,t,n,o){return e=vn(7,e,o,t),e.lanes=n,e}function Oh(e,t,n,o){e=vn(22,e,o,t),e.elementType=N,e.lanes=n;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var a=i._current;if(a===null)throw Error(f(456));if(!(i._pendingVisibility&2)){var r=eo(a,2);r!==null&&(i._pendingVisibility|=2,Yt(r,a,2))}},attach:function(){var a=i._current;if(a===null)throw Error(f(456));if(i._pendingVisibility&2){var r=eo(a,2);r!==null&&(i._pendingVisibility&=-3,Yt(r,a,2))}}};return e.stateNode=i,e}function il(e,t,n){return e=vn(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=vn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qn(e){e.flags|=4}function Mh(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!cm(t)){if(t=pn.current,t!==null&&((tt&4194176)===tt?Dn!==null:(tt&62914560)!==tt&&!(tt&536870912)||t!==Dn))throw Bi=cs,Uu;e.flags|=8192}}function ur(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?wa():536870912,e.lanes|=t,pi|=t)}function ia(e,t){if(!it)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&31457280,o|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function tg(e,t,n){var o=t.pendingProps;switch(ls(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(t),null;case 1:return Ct(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Un(Lt),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Qn(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fn!==null&&(dl(Fn),Fn=null))),Ct(t),null;case 26:return n=t.memoizedState,e===null?(Qn(t),n!==null?(Ct(t),Mh(t,n)):(Ct(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Qn(t),Ct(t),Mh(t,n)):(Ct(t),t.flags&=-16777217):(e.memoizedProps!==o&&Qn(t),Ct(t),t.flags&=-16777217),null;case 27:F(t),n=St.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Qn(t);else{if(!o){if(t.stateNode===null)throw Error(f(166));return Ct(t),null}e=Xe.current,zi(t)?Bu(t):(e=nm(i,o,n),t.stateNode=e,Qn(t))}return Ct(t),null;case 5:if(F(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Qn(t);else{if(!o){if(t.stateNode===null)throw Error(f(166));return Ct(t),null}if(e=Xe.current,zi(t))Bu(t);else{switch(i=br(St.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?i.createElement(n,{is:o.is}):i.createElement(n)}}e[Pe]=t,e[Ne]=o;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ut(e,n,o),n){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Qn(t)}}return Ct(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Qn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(f(166));if(e=St.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,i=Qt,i!==null)switch(i.tag){case 27:case 5:o=i.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||Xh(e.nodeValue,n)),e||Eo(t)}else e=br(e).createTextNode(o),e[Pe]=t,t.stateNode=e}return Ct(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=zi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(f(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[Pe]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ct(t),i=!1}else Fn!==null&&(dl(Fn),Fn=null),i=!0;if(!i)return t.flags&256?(Hn(t),t):(Hn(t),null)}if(Hn(t),t.flags&128)return t.lanes=n,t;if(n=o!==null,e=e!==null&&e.memoizedState!==null,n){o=t.child,i=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(i=o.alternate.memoizedState.cachePool.pool);var a=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(a=o.memoizedState.cachePool.pool),a!==i&&(o.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ur(t,t.updateQueue),Ct(t),null;case 4:return Y(),e===null&&Fl(t.stateNode.containerInfo),Ct(t),null;case 10:return Un(t.type),Ct(t),null;case 19:if(Ee(Nt),i=t.memoizedState,i===null)return Ct(t),null;if(o=(t.flags&128)!==0,a=i.rendering,a===null)if(o)ia(i,!1);else{if(Ft!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ga(e),a!==null){for(t.flags|=128,ia(i,!1),e=a.updateQueue,t.updateQueue=e,ur(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Fh(n,e),n=n.sibling;return Ve(Nt,Nt.current&1|2),t.child}e=e.sibling}i.tail!==null&&be()>cr&&(t.flags|=128,o=!0,ia(i,!1),t.lanes=4194304)}else{if(!o)if(e=Ga(a),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,ur(t,e),ia(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!it)return Ct(t),null}else 2*be()-i.renderingStartTime>cr&&n!==536870912&&(t.flags|=128,o=!0,ia(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=be(),t.sibling=null,e=Nt.current,Ve(Nt,o?e&1|2:e&1),t):(Ct(t),null);case 22:case 23:return Hn(t),ms(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?n&536870912&&!(t.flags&128)&&(Ct(t),t.subtreeFlags&6&&(t.flags|=8192)):Ct(t),n=t.updateQueue,n!==null&&ur(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&Ee(Io),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Un(Lt),Ct(t),null;case 25:return null}throw Error(f(156,t.tag))}function ng(e,t){switch(ls(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(Lt),Y(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return F(t),null;case 13:if(Hn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Nt),null;case 4:return Y(),null;case 10:return Un(t.type),null;case 22:case 23:return Hn(t),ms(),e!==null&&Ee(Io),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Un(Lt),null;case 25:return null;default:return null}}function kh(e,t){switch(ls(t),t.tag){case 3:Un(Lt),Y();break;case 26:case 27:case 5:F(t);break;case 4:Y();break;case 13:Hn(t);break;case 19:Ee(Nt);break;case 10:Un(t.type);break;case 22:case 23:Hn(t),ms(),e!==null&&Ee(Io);break;case 24:Un(Lt)}}var og={getCacheForType:function(e){var t=Zt(Lt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},ig=typeof WeakMap=="function"?WeakMap:Map,At=0,dt=null,qe=null,tt=0,gt=0,ln=null,Yn=!1,fi=!1,rl=!1,qn=0,Ft=0,go=0,Uo=0,sl=0,bn=0,pi=0,aa=null,xn=null,ll=!1,ul=0,cr=1/0,hr=null,fo=null,mr=!1,Wo=null,ra=0,cl=0,hl=null,sa=0,ml=null;function un(){if(At&2&&tt!==0)return tt&-tt;if(B.T!==null){var e=si;return e!==0?e:bl()}return Fe()}function Ph(){bn===0&&(bn=!(tt&536870912)||it?Aa():536870912);var e=pn.current;return e!==null&&(e.flags|=32),bn}function Yt(e,t,n){(e===dt&&gt===2||e.cancelPendingCommit!==null)&&(Si(e,0),Xn(e,tt,bn,!1)),Mo(e,n),(!(At&2)||e!==dt)&&(e===dt&&(!(At&2)&&(Uo|=n),Ft===4&&Xn(e,tt,bn,!1)),In(e))}function Rh(e,t,n){if(At&6)throw Error(f(327));var o=!n&&(t&60)===0&&(t&e.expiredLanes)===0||Oo(e,t),i=o?sg(e,t):pl(e,t,!0),a=o;do{if(i===0){fi&&!o&&Xn(e,t,0,!1);break}else if(i===6)Xn(e,t,0,!Yn);else{if(n=e.current.alternate,a&&!ag(n)){i=pl(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var S=e;i=aa;var P=S.current.memoizedState.isDehydrated;if(P&&(Si(S,r).flags|=256),r=pl(S,r,!1),r!==2){if(rl&&!P){S.errorRecoveryDisabledLanes|=a,Uo|=a,i=4;break e}a=xn,xn=i,a!==null&&dl(a)}i=r}if(a=!1,i!==2)continue}}if(i===1){Si(e,0),Xn(e,t,0,!0);break}e:{switch(o=e,i){case 0:case 1:throw Error(f(345));case 4:if((t&4194176)===t){Xn(o,t,bn,!Yn);break e}break;case 2:xn=null;break;case 3:case 5:break;default:throw Error(f(329))}if(o.finishedWork=n,o.finishedLanes=t,(t&62914560)===t&&(a=ul+300-be(),10<a)){if(Xn(o,t,bn,!Yn),Qo(o,0)!==0)break e;o.timeoutHandle=$h(Th.bind(null,o,n,xn,hr,ll,t,bn,Uo,pi,Yn,2,-0,0),a);break e}Th(o,n,xn,hr,ll,t,bn,Uo,pi,Yn,0,-0,0)}}break}while(!0);In(e)}function dl(e){xn===null?xn=e:xn.push.apply(xn,e)}function Th(e,t,n,o,i,a,r,S,P,V,ae,fe,G){var oe=t.subtreeFlags;if((oe&8192||(oe&16785408)===16785408)&&(da={stylesheets:null,count:0,unsuspend:_g},bh(t),t=jg(),t!==null)){e.cancelPendingCommit=t(zh.bind(null,e,n,o,i,r,S,P,1,fe,G)),Xn(e,a,r,!V);return}zh(e,n,o,i,r,S,P,ae,fe,G)}function ag(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var i=n[o],a=i.getSnapshot;i=i.value;try{if(!an(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xn(e,t,n,o){t&=~sl,t&=~Uo,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var i=t;0<i;){var a=31-Rt(i),r=1<<a;o[a]=-1,i&=~r}n!==0&&U(e,n,t)}function dr(){return At&6?!0:(la(0),!1)}function gl(){if(qe!==null){if(gt===0)var e=qe.return;else e=qe,jn=Ho=null,bs(e),ai=null,ji=0,e=qe;for(;e!==null;)kh(e.alternate,e),e=e.return;qe=null}}function Si(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Fg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),gl(),dt=e,qe=n=mo(e.current,null),tt=t,gt=0,ln=null,Yn=!1,fi=Oo(e,t),rl=!1,pi=bn=sl=Uo=go=Ft=0,xn=aa=null,ll=!1,t&8&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var i=31-Rt(o),a=1<<i;t|=e[i],o&=~a}return qn=t,za(),n}function Dh(e,t){Qe=null,B.H=En,t===_i?(t=Gu(),gt=3):t===Uu?(t=Gu(),gt=4):gt=t===Wc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ln=t,qe===null&&(Ft=1,or(e,dn(t,e.current)))}function Eh(){var e=B.H;return B.H=En,e===null?En:e}function xh(){var e=B.A;return B.A=og,e}function fl(){Ft=4,Yn||(tt&4194176)!==tt&&pn.current!==null||(fi=!0),!(go&134217727)&&!(Uo&134217727)||dt===null||Xn(dt,tt,bn,!1)}function pl(e,t,n){var o=At;At|=2;var i=Eh(),a=xh();(dt!==e||tt!==t)&&(hr=null,Si(e,t)),t=!1;var r=Ft;e:do try{if(gt!==0&&qe!==null){var S=qe,P=ln;switch(gt){case 8:gl(),r=6;break e;case 3:case 2:case 6:pn.current===null&&(t=!0);var V=gt;if(gt=0,ln=null,yi(e,S,P,V),n&&fi){r=0;break e}break;default:V=gt,gt=0,ln=null,yi(e,S,P,V)}}rg(),r=Ft;break}catch(ae){Dh(e,ae)}while(!0);return t&&e.shellSuspendCounter++,jn=Ho=null,At=o,B.H=i,B.A=a,qe===null&&(dt=null,tt=0,za()),r}function rg(){for(;qe!==null;)Ih(qe)}function sg(e,t){var n=At;At|=2;var o=Eh(),i=xh();dt!==e||tt!==t?(hr=null,cr=be()+500,Si(e,t)):fi=Oo(e,t);e:do try{if(gt!==0&&qe!==null){t=qe;var a=ln;t:switch(gt){case 1:gt=0,ln=null,yi(e,t,a,1);break;case 2:if(Wu(a)){gt=0,ln=null,Nh(t);break}t=function(){gt===2&&dt===e&&(gt=7),In(e)},a.then(t,t);break e;case 3:gt=7;break e;case 4:gt=5;break e;case 7:Wu(a)?(gt=0,ln=null,Nh(t)):(gt=0,ln=null,yi(e,t,a,7));break;case 5:var r=null;switch(qe.tag){case 26:r=qe.memoizedState;case 5:case 27:var S=qe;if(!r||cm(r)){gt=0,ln=null;var P=S.sibling;if(P!==null)qe=P;else{var V=S.return;V!==null?(qe=V,gr(V)):qe=null}break t}}gt=0,ln=null,yi(e,t,a,5);break;case 6:gt=0,ln=null,yi(e,t,a,6);break;case 8:gl(),Ft=6;break e;default:throw Error(f(462))}}lg();break}catch(ae){Dh(e,ae)}while(!0);return jn=Ho=null,B.H=o,B.A=i,At=n,qe!==null?0:(dt=null,tt=0,za(),Ft)}function lg(){for(;qe!==null&&!Z();)Ih(qe)}function Ih(e){var t=nh(e.alternate,e,qn);e.memoizedProps=e.pendingProps,t===null?gr(e):qe=t}function Nh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Xc(n,t,t.pendingProps,t.type,void 0,tt);break;case 11:t=Xc(n,t,t.pendingProps,t.type.render,t.ref,tt);break;case 5:bs(t);default:kh(n,t),t=qe=Fh(t,qn),t=nh(n,t,qn)}e.memoizedProps=e.pendingProps,t===null?gr(e):qe=t}function yi(e,t,n,o){jn=Ho=null,bs(t),ai=null,ji=0;var i=t.return;try{if(Xd(e,i,t,n,tt)){Ft=1,or(e,dn(n,e.current)),qe=null;return}}catch(a){if(i!==null)throw qe=i,a;Ft=1,or(e,dn(n,e.current)),qe=null;return}t.flags&32768?(it||o===1?e=!0:fi||tt&536870912?e=!1:(Yn=e=!0,(o===2||o===3||o===6)&&(o=pn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Lh(t,e)):gr(t)}function gr(e){var t=e;do{if(t.flags&32768){Lh(t,Yn);return}e=t.return;var n=tg(t.alternate,t,qn);if(n!==null){qe=n;return}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Ft===0&&(Ft=5)}function Lh(e,t){do{var n=ng(e.alternate,e);if(n!==null){n.flags&=32767,qe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){qe=e;return}qe=e=n}while(e!==null);Ft=6,qe=null}function zh(e,t,n,o,i,a,r,S,P,V){var ae=B.T,fe=Q.p;try{Q.p=2,B.T=null,ug(e,t,n,o,fe,i,a,r,S,P,V)}finally{B.T=ae,Q.p=fe}}function ug(e,t,n,o,i,a,r,S){do vi();while(Wo!==null);if(At&6)throw Error(f(327));var P=e.finishedWork;if(o=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=P.lanes|P.childLanes;if(V|=as,Fa(e,o,V,a,r,S),e===dt&&(qe=dt=null,tt=0),!(P.subtreeFlags&10256)&&!(P.flags&10256)||mr||(mr=!0,cl=V,hl=n,dg(He,function(){return vi(),null})),n=(P.flags&15990)!==0,P.subtreeFlags&15990||n?(n=B.T,B.T=null,a=Q.p,Q.p=2,r=At,At|=4,Kd(e,P),Sh(P,e),xd(Pl,e.containerInfo),Mr=!!kl,Pl=kl=null,e.current=P,dh(e,P.alternate,P),ye(),At=r,Q.p=a,B.T=n):e.current=P,mr?(mr=!1,Wo=e,ra=o):Vh(e,V),V=e.pendingLanes,V===0&&(fo=null),Fo(P.stateNode),In(e),t!==null)for(i=e.onRecoverableError,P=0;P<t.length;P++)V=t[P],i(V.value,{componentStack:V.stack});return ra&3&&vi(),V=e.pendingLanes,o&4194218&&V&42?e===ml?sa++:(sa=0,ml=e):sa=0,la(0),null}function Vh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wi(t)))}function vi(){if(Wo!==null){var e=Wo,t=cl;cl=0;var n=ve(ra),o=B.T,i=Q.p;try{if(Q.p=32>n?32:n,B.T=null,Wo===null)var a=!1;else{n=hl,hl=null;var r=Wo,S=ra;if(Wo=null,ra=0,At&6)throw Error(f(331));var P=At;if(At|=4,Ah(r.current),vh(r,r.current,S,n),At=P,la(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(lt,r)}catch{}a=!0}return a}finally{Q.p=i,B.T=o,Vh(e,t)}}return!1}function Hh(e,t,n){t=dn(n,t),t=Is(e.stateNode,t,2),e=lo(e,t,2),e!==null&&(Mo(e,2),In(e))}function ht(e,t,n){if(e.tag===3)Hh(e,e,n);else for(;t!==null;){if(t.tag===3){Hh(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(fo===null||!fo.has(o))){e=dn(n,e),n=jc(2),o=lo(t,n,2),o!==null&&(Uc(n,o,t,e),Mo(o,2),In(o));break}}t=t.return}}function Sl(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new ig;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(rl=!0,i.add(n),e=cg.bind(null,e,t,n),t.then(e,e))}function cg(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,dt===e&&(tt&n)===n&&(Ft===4||Ft===3&&(tt&62914560)===tt&&300>be()-ul?!(At&2)&&Si(e,0):sl|=n,pi===tt&&(pi=0)),In(e)}function _h(e,t){t===0&&(t=wa()),e=eo(e,t),e!==null&&(Mo(e,t),In(e))}function hg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_h(e,n)}function mg(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(f(314))}o!==null&&o.delete(t),_h(e,n)}function dg(e,t){return he(e,t)}var fr=null,bi=null,yl=!1,pr=!1,vl=!1,Zo=0;function In(e){e!==bi&&e.next===null&&(bi===null?fr=bi=e:bi=bi.next=e),pr=!0,yl||(yl=!0,fg(gg))}function la(e,t){if(!vl&&pr){vl=!0;do for(var n=!1,o=fr;o!==null;){if(e!==0){var i=o.pendingLanes;if(i===0)var a=0;else{var r=o.suspendedLanes,S=o.pingedLanes;a=(1<<31-Rt(42|e)+1)-1,a&=i&~(r&~S),a=a&201326677?a&201326677|1:a?a|2:0}a!==0&&(n=!0,Uh(o,a))}else a=tt,a=Qo(o,o===dt?a:0),!(a&3)||Oo(o,a)||(n=!0,Uh(o,a));o=o.next}while(n);vl=!1}}function gg(){pr=yl=!1;var e=0;Zo!==0&&(wg()&&(e=Zo),Zo=0);for(var t=be(),n=null,o=fr;o!==null;){var i=o.next,a=Bh(o,t);a===0?(o.next=null,n===null?fr=i:n.next=i,i===null&&(bi=n)):(n=o,(e!==0||a&3)&&(pr=!0)),o=i}la(e)}function Bh(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Rt(a),S=1<<r,P=i[r];P===-1?(!(S&n)||S&o)&&(i[r]=Hr(S,t)):P<=t&&(e.expiredLanes|=S),a&=~S}if(t=dt,n=tt,n=Qo(e,e===t?n:0),o=e.callbackNode,n===0||e===t&&gt===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&de(o),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Oo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&de(o),ve(n)){case 2:case 8:n=Ie;break;case 32:n=He;break;case 268435456:n=on;break;default:n=He}return o=jh.bind(null,e),n=he(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&de(o),e.callbackPriority=2,e.callbackNode=null,2}function jh(e,t){var n=e.callbackNode;if(vi()&&e.callbackNode!==n)return null;var o=tt;return o=Qo(e,e===dt?o:0),o===0?null:(Rh(e,o,t),Bh(e,be()),e.callbackNode!=null&&e.callbackNode===n?jh.bind(null,e):null)}function Uh(e,t){if(vi())return null;Rh(e,t,!0)}function fg(e){Og(function(){At&6?he(Re,e):e()})}function bl(){return Zo===0&&(Zo=Aa()),Zo}function Wh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ta(""+e)}function Zh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pg(e,t,n,o,i){if(t==="submit"&&n&&n.stateNode===i){var a=Wh((i[Ne]||null).action),r=o.submitter;r&&(t=(t=r[Ne]||null)?Wh(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var S=new Ia("action","action",null,o,i);e.push({event:S,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Zo!==0){var P=r?Zh(i,r):new FormData(i);Rs(n,{pending:!0,data:P,method:i.method,action:a},null,P)}}else typeof a=="function"&&(S.preventDefault(),P=r?Zh(i,r):new FormData(i),Rs(n,{pending:!0,data:P,method:i.method,action:a},a,P))},currentTarget:i}]})}}for(var Cl=0;Cl<zu.length;Cl++){var Al=zu[Cl],Sg=Al.toLowerCase(),yg=Al[0].toUpperCase()+Al.slice(1);wn(Sg,"on"+yg)}wn(Eu,"onAnimationEnd"),wn(xu,"onAnimationIteration"),wn(Iu,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(Nd,"onTransitionRun"),wn(Ld,"onTransitionStart"),wn(zd,"onTransitionCancel"),wn(Nu,"onTransitionEnd"),et("onMouseEnter",["mouseout","mouseover"]),et("onMouseLeave",["mouseout","mouseover"]),et("onPointerEnter",["pointerout","pointerover"]),et("onPointerLeave",["pointerout","pointerover"]),vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vt("onBeforeInput",["compositionend","keypress","textInput","paste"]),vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ua));function Gh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var r=o.length-1;0<=r;r--){var S=o[r],P=S.instance,V=S.currentTarget;if(S=S.listener,P!==a&&i.isPropagationStopped())break e;a=S,i.currentTarget=V;try{a(i)}catch(ae){nr(ae)}i.currentTarget=null,a=P}else for(r=0;r<o.length;r++){if(S=o[r],P=S.instance,V=S.currentTarget,S=S.listener,P!==a&&i.isPropagationStopped())break e;a=S,i.currentTarget=V;try{a(i)}catch(ae){nr(ae)}i.currentTarget=null,a=P}}}}function Ke(e,t){var n=t[ze];n===void 0&&(n=t[ze]=new Set);var o=e+"__bubble";n.has(o)||(Qh(t,e,2,!1),n.add(o))}function wl(e,t,n){var o=0;t&&(o|=4),Qh(n,e,o,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Fl(e){if(!e[Sr]){e[Sr]=!0,st.forEach(function(n){n!=="selectionchange"&&(vg.has(n)||wl(n,!1,e),wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,wl("selectionchange",!1,t))}}function Qh(e,t,n,o){switch(pm(t)){case 2:var i=Zg;break;case 8:i=Gg;break;default:i=zl}n=i.bind(null,t,n,e),i=void 0,!Gr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ol(e,t,n,o,i){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var r=o.tag;if(r===3||r===4){var S=o.stateNode.containerInfo;if(S===i||S.nodeType===8&&S.parentNode===i)break;if(r===4)for(r=o.return;r!==null;){var P=r.tag;if((P===3||P===4)&&(P=r.stateNode.containerInfo,P===i||P.nodeType===8&&P.parentNode===i))return;r=r.return}for(;S!==null;){if(r=Je(S),r===null)return;if(P=r.tag,P===5||P===6||P===26||P===27){o=a=r;continue e}S=S.parentNode}}o=o.return}lu(function(){var V=a,ae=Wr(n),fe=[];e:{var G=Lu.get(e);if(G!==void 0){var oe=Ia,De=e;switch(e){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":oe=md;break;case"focusin":De="focus",oe=Xr;break;case"focusout":De="blur",oe=Xr;break;case"beforeblur":case"afterblur":oe=Xr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=fd;break;case Eu:case xu:case Iu:oe=od;break;case Nu:oe=Sd;break;case"scroll":case"scrollend":oe=Km;break;case"wheel":oe=vd;break;case"copy":case"cut":case"paste":oe=ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=du;break;case"toggle":case"beforetoggle":oe=Cd}var je=(t&4)!==0,Ot=!je&&(e==="scroll"||e==="scrollend"),j=je?G!==null?G+"Capture":null:G;je=[];for(var z=V,W;z!==null;){var me=z;if(W=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||W===null||j===null||(me=Pi(z,j),me!=null&&je.push(ca(z,me,W))),Ot)break;z=z.return}0<je.length&&(G=new oe(G,De,null,n,ae),fe.push({event:G,listeners:je}))}}if(!(t&7)){e:{if(G=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",G&&n!==Ur&&(De=n.relatedTarget||n.fromElement)&&(Je(De)||De[nt]))break e;if((oe||G)&&(G=ae.window===ae?ae:(G=ae.ownerDocument)?G.defaultView||G.parentWindow:window,oe?(De=n.relatedTarget||n.toElement,oe=V,De=De?Je(De):null,De!==null&&(Ot=pe(De),je=De.tag,De!==Ot||je!==5&&je!==27&&je!==6)&&(De=null)):(oe=null,De=V),oe!==De)){if(je=hu,me="onMouseLeave",j="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(je=du,me="onPointerLeave",j="onPointerEnter",z="pointer"),Ot=oe==null?G:Oe(oe),W=De==null?G:Oe(De),G=new je(me,z+"leave",oe,n,ae),G.target=Ot,G.relatedTarget=W,me=null,Je(ae)===V&&(je=new je(j,z+"enter",De,n,ae),je.target=W,je.relatedTarget=Ot,me=je),Ot=me,oe&&De)t:{for(je=oe,j=De,z=0,W=je;W;W=Ci(W))z++;for(W=0,me=j;me;me=Ci(me))W++;for(;0<z-W;)je=Ci(je),z--;for(;0<W-z;)j=Ci(j),W--;for(;z--;){if(je===j||j!==null&&je===j.alternate)break t;je=Ci(je),j=Ci(j)}je=null}else je=null;oe!==null&&Yh(fe,G,oe,je,!1),De!==null&&Ot!==null&&Yh(fe,Ot,De,je,!0)}}e:{if(G=V?Oe(V):window,oe=G.nodeName&&G.nodeName.toLowerCase(),oe==="select"||oe==="input"&&G.type==="file")var ke=Cu;else if(vu(G))if(Au)ke=Dd;else{ke=Rd;var Ye=Pd}else oe=G.nodeName,!oe||oe.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?V&&jr(V.elementType)&&(ke=Cu):ke=Td;if(ke&&(ke=ke(e,V))){bu(fe,ke,n,ae);break e}Ye&&Ye(e,G,V),e==="focusout"&&V&&G.type==="number"&&V.memoizedProps.value!=null&&Br(G,"number",G.value)}switch(Ye=V?Oe(V):window,e){case"focusin":(vu(Ye)||Ye.contentEditable==="true")&&($o=Ye,ns=V,Li=null);break;case"focusout":Li=ns=$o=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,Tu(fe,n,ae);break;case"selectionchange":if(Id)break;case"keydown":case"keyup":Tu(fe,n,ae)}var xe;if(Kr)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Ko?Su(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(gu&&n.locale!=="ko"&&(Ko||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Ko&&(xe=uu()):($n=ae,Qr="value"in $n?$n.value:$n.textContent,Ko=!0)),Ye=yr(V,Le),0<Ye.length&&(Le=new mu(Le,e,null,n,ae),fe.push({event:Le,listeners:Ye}),xe?Le.data=xe:(xe=yu(n),xe!==null&&(Le.data=xe)))),(xe=wd?Fd(e,n):Od(e,n))&&(Le=yr(V,"onBeforeInput"),0<Le.length&&(Ye=new mu("onBeforeInput","beforeinput",null,n,ae),fe.push({event:Ye,listeners:Le}),Ye.data=xe)),pg(fe,e,V,n,ae)}Gh(fe,t)})}function ca(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yr(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Pi(e,n),i!=null&&o.unshift(ca(e,i,a)),i=Pi(e,t),i!=null&&o.push(ca(e,i,a))),e=e.return}return o}function Ci(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yh(e,t,n,o,i){for(var a=t._reactName,r=[];n!==null&&n!==o;){var S=n,P=S.alternate,V=S.stateNode;if(S=S.tag,P!==null&&P===o)break;S!==5&&S!==26&&S!==27||V===null||(P=V,i?(V=Pi(n,a),V!=null&&r.unshift(ca(n,V,P))):i||(V=Pi(n,a),V!=null&&r.push(ca(n,V,P)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var bg=/\r\n?/g,Cg=/\u0000|\uFFFD/g;function qh(e){return(typeof e=="string"?e:""+e).replace(bg,`
`).replace(Cg,"")}function Xh(e,t){return t=qh(t),qh(e)===t}function vr(){}function ct(e,t,n,o,i,a){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||qo(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&qo(e,""+o);break;case"className":ka(e,"class",o);break;case"tabIndex":ka(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ka(e,n,o);break;case"style":ru(e,o,a);break;case"data":if(t!=="object"){ka(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=Ta(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ct(e,t,"name",i.name,i,null),ct(e,t,"formEncType",i.formEncType,i,null),ct(e,t,"formMethod",i.formMethod,i,null),ct(e,t,"formTarget",i.formTarget,i,null)):(ct(e,t,"encType",i.encType,i,null),ct(e,t,"method",i.method,i,null),ct(e,t,"target",i.target,i,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=Ta(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=vr);break;case"onScroll":o!=null&&Ke("scroll",e);break;case"onScrollEnd":o!=null&&Ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(f(61));if(n=o.__html,n!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=Ta(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":Ke("beforetoggle",e),Ke("toggle",e),Ma(e,"popover",o);break;case"xlinkActuate":Ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ln(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ln(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ln(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ln(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ma(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Xm.get(n)||n,Ma(e,n,o))}}function Ml(e,t,n,o,i,a){switch(n){case"style":ru(e,o,a);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(f(61));if(n=o.__html,n!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=n}}break;case"children":typeof o=="string"?qo(e,o):(typeof o=="number"||typeof o=="bigint")&&qo(e,""+o);break;case"onScroll":o!=null&&Ke("scroll",e);break;case"onScrollEnd":o!=null&&Ke("scrollend",e);break;case"onClick":o!=null&&(e.onclick=vr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mt.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),a=e[Ne]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,i),typeof o=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,i);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):Ma(e,n,o)}}}function Ut(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ke("error",e),Ke("load",e);var o=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ct(e,t,a,r,n,null)}}i&&ct(e,t,"srcSet",n.srcSet,n,null),o&&ct(e,t,"src",n.src,n,null);return;case"input":Ke("invalid",e);var S=a=r=i=null,P=null,V=null;for(o in n)if(n.hasOwnProperty(o)){var ae=n[o];if(ae!=null)switch(o){case"name":i=ae;break;case"type":r=ae;break;case"checked":P=ae;break;case"defaultChecked":V=ae;break;case"value":a=ae;break;case"defaultValue":S=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(f(137,t));break;default:ct(e,t,o,ae,n,null)}}nu(e,a,S,P,V,r,i,!1),Pa(e);return;case"select":Ke("invalid",e),o=r=a=null;for(i in n)if(n.hasOwnProperty(i)&&(S=n[i],S!=null))switch(i){case"value":a=S;break;case"defaultValue":r=S;break;case"multiple":o=S;default:ct(e,t,i,S,n,null)}t=a,n=r,e.multiple=!!o,t!=null?Yo(e,!!o,t,!1):n!=null&&Yo(e,!!o,n,!0);return;case"textarea":Ke("invalid",e),a=i=o=null;for(r in n)if(n.hasOwnProperty(r)&&(S=n[r],S!=null))switch(r){case"value":o=S;break;case"defaultValue":i=S;break;case"children":a=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(f(91));break;default:ct(e,t,r,S,n,null)}iu(e,o,i,a),Pa(e);return;case"option":for(P in n)if(n.hasOwnProperty(P)&&(o=n[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ct(e,t,P,o,n,null)}return;case"dialog":Ke("cancel",e),Ke("close",e);break;case"iframe":case"object":Ke("load",e);break;case"video":case"audio":for(o=0;o<ua.length;o++)Ke(ua[o],e);break;case"image":Ke("error",e),Ke("load",e);break;case"details":Ke("toggle",e);break;case"embed":case"source":case"link":Ke("error",e),Ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in n)if(n.hasOwnProperty(V)&&(o=n[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ct(e,t,V,o,n,null)}return;default:if(jr(t)){for(ae in n)n.hasOwnProperty(ae)&&(o=n[ae],o!==void 0&&Ml(e,t,ae,o,n,void 0));return}}for(S in n)n.hasOwnProperty(S)&&(o=n[S],o!=null&&ct(e,t,S,o,n,null))}function Ag(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,r=null,S=null,P=null,V=null,ae=null;for(oe in n){var fe=n[oe];if(n.hasOwnProperty(oe)&&fe!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":P=fe;default:o.hasOwnProperty(oe)||ct(e,t,oe,null,o,fe)}}for(var G in o){var oe=o[G];if(fe=n[G],o.hasOwnProperty(G)&&(oe!=null||fe!=null))switch(G){case"type":a=oe;break;case"name":i=oe;break;case"checked":V=oe;break;case"defaultChecked":ae=oe;break;case"value":r=oe;break;case"defaultValue":S=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(f(137,t));break;default:oe!==fe&&ct(e,t,G,oe,o,fe)}}_r(e,r,S,P,V,ae,a,i);return;case"select":oe=r=S=G=null;for(a in n)if(P=n[a],n.hasOwnProperty(a)&&P!=null)switch(a){case"value":break;case"multiple":oe=P;default:o.hasOwnProperty(a)||ct(e,t,a,null,o,P)}for(i in o)if(a=o[i],P=n[i],o.hasOwnProperty(i)&&(a!=null||P!=null))switch(i){case"value":G=a;break;case"defaultValue":S=a;break;case"multiple":r=a;default:a!==P&&ct(e,t,i,a,o,P)}t=S,n=r,o=oe,G!=null?Yo(e,!!n,G,!1):!!o!=!!n&&(t!=null?Yo(e,!!n,t,!0):Yo(e,!!n,n?[]:"",!1));return;case"textarea":oe=G=null;for(S in n)if(i=n[S],n.hasOwnProperty(S)&&i!=null&&!o.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ct(e,t,S,null,o,i)}for(r in o)if(i=o[r],a=n[r],o.hasOwnProperty(r)&&(i!=null||a!=null))switch(r){case"value":G=i;break;case"defaultValue":oe=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==a&&ct(e,t,r,i,o,a)}ou(e,G,oe);return;case"option":for(var De in n)if(G=n[De],n.hasOwnProperty(De)&&G!=null&&!o.hasOwnProperty(De))switch(De){case"selected":e.selected=!1;break;default:ct(e,t,De,null,o,G)}for(P in o)if(G=o[P],oe=n[P],o.hasOwnProperty(P)&&G!==oe&&(G!=null||oe!=null))switch(P){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:ct(e,t,P,G,o,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in n)G=n[je],n.hasOwnProperty(je)&&G!=null&&!o.hasOwnProperty(je)&&ct(e,t,je,null,o,G);for(V in o)if(G=o[V],oe=n[V],o.hasOwnProperty(V)&&G!==oe&&(G!=null||oe!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(f(137,t));break;default:ct(e,t,V,G,o,oe)}return;default:if(jr(t)){for(var Ot in n)G=n[Ot],n.hasOwnProperty(Ot)&&G!==void 0&&!o.hasOwnProperty(Ot)&&Ml(e,t,Ot,void 0,o,G);for(ae in o)G=o[ae],oe=n[ae],!o.hasOwnProperty(ae)||G===oe||G===void 0&&oe===void 0||Ml(e,t,ae,G,o,oe);return}}for(var j in n)G=n[j],n.hasOwnProperty(j)&&G!=null&&!o.hasOwnProperty(j)&&ct(e,t,j,null,o,G);for(fe in o)G=o[fe],oe=n[fe],!o.hasOwnProperty(fe)||G===oe||G==null&&oe==null||ct(e,t,fe,G,o,oe)}var kl=null,Pl=null;function br(e){return e.nodeType===9?e:e.ownerDocument}function Jh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tl=null;function wg(){var e=window.event;return e&&e.type==="popstate"?e===Tl?!1:(Tl=e,!0):(Tl=null,!1)}var $h=typeof setTimeout=="function"?setTimeout:void 0,Fg=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,Og=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(e){return em.resolve(null).then(e).catch(Mg)}:$h;function Mg(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),ya(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);ya(t)}function El(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":El(n),We(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function kg(e,t,n,o){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[yt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Mn(e.nextSibling),e===null)break}return null}function Pg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mn(e.nextSibling),e===null))return null;return e}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function tm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function nm(e,t,n){switch(t=br(n),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}var Cn=new Map,om=new Set;function Cr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Jn=Q.d;Q.d={f:Rg,r:Tg,D:Dg,C:Eg,L:xg,m:Ig,X:Lg,S:Ng,M:zg};function Rg(){var e=Jn.f(),t=dr();return e||t}function Tg(e){var t=Wt(e);t!==null&&t.tag===5&&t.type==="form"?Tc(t):Jn.r(e)}var Ai=typeof document>"u"?null:document;function im(e,t,n){var o=Ai;if(o&&typeof t=="string"&&t){var i=hn(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),om.has(i)||(om.add(i),e={rel:e,crossOrigin:n,href:t},o.querySelector(i)===null&&(t=o.createElement("link"),Ut(t,"link",e),Te(t),o.head.appendChild(t)))}}function Dg(e){Jn.D(e),im("dns-prefetch",e,null)}function Eg(e,t){Jn.C(e,t),im("preconnect",e,t)}function xg(e,t,n){Jn.L(e,t,n);var o=Ai;if(o&&e&&t){var i='link[rel="preload"][as="'+hn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+hn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+hn(n.imageSizes)+'"]')):i+='[href="'+hn(e)+'"]';var a=i;switch(t){case"style":a=wi(e);break;case"script":a=Fi(e)}Cn.has(a)||(e=re({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Cn.set(a,e),o.querySelector(i)!==null||t==="style"&&o.querySelector(ha(a))||t==="script"&&o.querySelector(ma(a))||(t=o.createElement("link"),Ut(t,"link",e),Te(t),o.head.appendChild(t)))}}function Ig(e,t){Jn.m(e,t);var n=Ai;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+hn(o)+'"][href="'+hn(e)+'"]',a=i;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Fi(e)}if(!Cn.has(a)&&(e=re({rel:"modulepreload",href:e},t),Cn.set(a,e),n.querySelector(i)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ma(a)))return}o=n.createElement("link"),Ut(o,"link",e),Te(o),n.head.appendChild(o)}}}function Ng(e,t,n){Jn.S(e,t,n);var o=Ai;if(o&&e){var i=Ge(o).hoistableStyles,a=wi(e);t=t||"default";var r=i.get(a);if(!r){var S={loading:0,preload:null};if(r=o.querySelector(ha(a)))S.loading=5;else{e=re({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Cn.get(a))&&xl(e,n);var P=r=o.createElement("link");Te(P),Ut(P,"link",e),P._p=new Promise(function(V,ae){P.onload=V,P.onerror=ae}),P.addEventListener("load",function(){S.loading|=1}),P.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Ar(r,t,o)}r={type:"stylesheet",instance:r,count:1,state:S},i.set(a,r)}}}function Lg(e,t){Jn.X(e,t);var n=Ai;if(n&&e){var o=Ge(n).hoistableScripts,i=Fi(e),a=o.get(i);a||(a=n.querySelector(ma(i)),a||(e=re({src:e,async:!0},t),(t=Cn.get(i))&&Il(e,t),a=n.createElement("script"),Te(a),Ut(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},o.set(i,a))}}function zg(e,t){Jn.M(e,t);var n=Ai;if(n&&e){var o=Ge(n).hoistableScripts,i=Fi(e),a=o.get(i);a||(a=n.querySelector(ma(i)),a||(e=re({src:e,async:!0,type:"module"},t),(t=Cn.get(i))&&Il(e,t),a=n.createElement("script"),Te(a),Ut(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},o.set(i,a))}}function am(e,t,n,o){var i=(i=St.current)?Cr(i):null;if(!i)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=wi(n.href),n=Ge(i).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wi(n.href);var a=Ge(i).hoistableStyles,r=a.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=i.querySelector(ha(e)))&&!a._p&&(r.instance=a,r.state.loading=5),Cn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Cn.set(e,n),a||Vg(i,e,n,r.state))),t&&o===null)throw Error(f(528,""));return r}if(t&&o!==null)throw Error(f(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fi(n),n=Ge(i).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function wi(e){return'href="'+hn(e)+'"'}function ha(e){return'link[rel="stylesheet"]['+e+"]"}function rm(e){return re({},e,{"data-precedence":e.precedence,precedence:null})}function Vg(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Ut(t,"link",n),Te(t),e.head.appendChild(t))}function Fi(e){return'[src="'+hn(e)+'"]'}function ma(e){return"script[async]"+e}function sm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+hn(n.href)+'"]');if(o)return t.instance=o,Te(o),o;var i=re({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Te(o),Ut(o,"style",i),Ar(o,n.precedence,e),t.instance=o;case"stylesheet":i=wi(n.href);var a=e.querySelector(ha(i));if(a)return t.state.loading|=4,t.instance=a,Te(a),a;o=rm(n),(i=Cn.get(i))&&xl(o,i),a=(e.ownerDocument||e).createElement("link"),Te(a);var r=a;return r._p=new Promise(function(S,P){r.onload=S,r.onerror=P}),Ut(a,"link",o),t.state.loading|=4,Ar(a,n.precedence,e),t.instance=a;case"script":return a=Fi(n.src),(i=e.querySelector(ma(a)))?(t.instance=i,Te(i),i):(o=n,(i=Cn.get(a))&&(o=re({},n),Il(o,i)),e=e.ownerDocument||e,i=e.createElement("script"),Te(i),Ut(i,"link",o),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(o=t.instance,t.state.loading|=4,Ar(o,n.precedence,e));return t.instance}function Ar(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=o.length?o[o.length-1]:null,a=i,r=0;r<o.length;r++){var S=o[r];if(S.dataset.precedence===t)a=S;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xl(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Il(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var wr=null;function lm(e,t,n){if(wr===null){var o=new Map,i=wr=new Map;i.set(n,o)}else i=wr,o=i.get(n),o||(o=new Map,i.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[Pe]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var S=o.get(r);S?S.push(a):o.set(r,[a])}}return o}function um(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Hg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cm(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var da=null;function _g(){}function Bg(e,t,n){if(da===null)throw Error(f(475));var o=da;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var i=wi(n.href),a=e.querySelector(ha(i));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Fr.bind(o),e.then(o,o)),t.state.loading|=4,t.instance=a,Te(a);return}a=e.ownerDocument||e,n=rm(n),(i=Cn.get(i))&&xl(n,i),a=a.createElement("link"),Te(a);var r=a;r._p=new Promise(function(S,P){r.onload=S,r.onerror=P}),Ut(a,"link",n),t.instance=a}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(o.count++,t=Fr.bind(o),e.addEventListener("load",t),e.addEventListener("error",t))}}function jg(){if(da===null)throw Error(f(475));var e=da;return e.stylesheets&&e.count===0&&Nl(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Nl(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Fr(){if(this.count--,this.count===0){if(this.stylesheets)Nl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Or=null;function Nl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Or=new Map,t.forEach(Ug,e),Or=null,Fr.call(e))}function Ug(e,t){if(!(t.state.loading&4)){var n=Or.get(e);if(n)var o=n.get(null);else{n=new Map,Or.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var r=i[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),o=r)}o&&n.set(null,o)}i=t.instance,r=i.getAttribute("data-precedence"),a=n.get(r)||o,a===o&&n.set(null,i),n.set(r,i),this.count++,o=Fr.bind(this),i.addEventListener("load",o),i.addEventListener("error",o),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ga={$$typeof:y,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function Wg(e,t,n,o,i,a,r,S){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.hiddenUpdates=ki(null),this.identifierPrefix=o,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function hm(e,t,n,o,i,a,r,S,P,V,ae,fe){return e=new Wg(e,t,n,r,S,P,V,fe),t=1,a===!0&&(t|=24),a=vn(3,null,null,t),e.current=a,a.stateNode=e,t=ds(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:o,isDehydrated:n,cache:t},Qs(a),e}function mm(e){return e?(e=ni,e):ni}function dm(e,t,n,o,i,a){i=mm(i),o.context===null?o.context=i:o.pendingContext=i,o=so(t),o.payload={element:n},a=a===void 0?null:a,a!==null&&(o.callback=a),n=lo(e,o,t),n!==null&&(Yt(n,e,t),Ji(n,e,t))}function gm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ll(e,t){gm(e,t),(e=e.alternate)&&gm(e,t)}function fm(e){if(e.tag===13){var t=eo(e,67108864);t!==null&&Yt(t,e,67108864),Ll(e,67108864)}}var Mr=!0;function Zg(e,t,n,o){var i=B.T;B.T=null;var a=Q.p;try{Q.p=2,zl(e,t,n,o)}finally{Q.p=a,B.T=i}}function Gg(e,t,n,o){var i=B.T;B.T=null;var a=Q.p;try{Q.p=8,zl(e,t,n,o)}finally{Q.p=a,B.T=i}}function zl(e,t,n,o){if(Mr){var i=Vl(o);if(i===null)Ol(e,t,o,kr,n),Sm(e,o);else if(Yg(i,e,t,n,o))o.stopPropagation();else if(Sm(e,o),t&4&&-1<Qg.indexOf(e)){for(;i!==null;){var a=Wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Jt(a.pendingLanes);if(r!==0){var S=a;for(S.pendingLanes|=2,S.entangledLanes|=2;r;){var P=1<<31-Rt(r);S.entanglements[1]|=P,r&=~P}In(a),!(At&6)&&(cr=be()+500,la(0))}}break;case 13:S=eo(a,2),S!==null&&Yt(S,a,2),dr(),Ll(a,2)}if(a=Vl(o),a===null&&Ol(e,t,o,kr,n),a===i)break;i=a}i!==null&&o.stopPropagation()}else Ol(e,t,o,null,n)}}function Vl(e){return e=Wr(e),Hl(e)}var kr=null;function Hl(e){if(kr=null,e=Je(e),e!==null){var t=pe(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ue(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return kr=e,null}function pm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Se()){case Re:return 2;case Ie:return 8;case He:case _t:return 32;case on:return 268435456;default:return 32}default:return 32}}var _l=!1,po=null,So=null,yo=null,fa=new Map,pa=new Map,vo=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sm(e,t){switch(e){case"focusin":case"focusout":po=null;break;case"dragenter":case"dragleave":So=null;break;case"mouseover":case"mouseout":yo=null;break;case"pointerover":case"pointerout":fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(t.pointerId)}}function Sa(e,t,n,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Wt(t),t!==null&&fm(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yg(e,t,n,o,i){switch(t){case"focusin":return po=Sa(po,e,t,n,o,i),!0;case"dragenter":return So=Sa(So,e,t,n,o,i),!0;case"mouseover":return yo=Sa(yo,e,t,n,o,i),!0;case"pointerover":var a=i.pointerId;return fa.set(a,Sa(fa.get(a)||null,e,t,n,o,i)),!0;case"gotpointercapture":return a=i.pointerId,pa.set(a,Sa(pa.get(a)||null,e,t,n,o,i)),!0}return!1}function ym(e){var t=Je(e.target);if(t!==null){var n=pe(t);if(n!==null){if(t=n.tag,t===13){if(t=ue(n),t!==null){e.blockedOn=t,Be(e.priority,function(){if(n.tag===13){var o=un(),i=eo(n,o);i!==null&&Yt(i,n,o),Ll(n,o)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vl(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Ur=o,n.target.dispatchEvent(o),Ur=null}else return t=Wt(n),t!==null&&fm(t),e.blockedOn=n,!1;t.shift()}return!0}function vm(e,t,n){Pr(e)&&n.delete(t)}function qg(){_l=!1,po!==null&&Pr(po)&&(po=null),So!==null&&Pr(So)&&(So=null),yo!==null&&Pr(yo)&&(yo=null),fa.forEach(vm),pa.forEach(vm)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,qg)))}var Tr=null;function bm(e){Tr!==e&&(Tr=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Tr===e&&(Tr=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],i=e[t+2];if(typeof o!="function"){if(Hl(o||n)===null)continue;break}var a=Wt(n);a!==null&&(e.splice(t,3),t-=3,Rs(a,{pending:!0,data:i,method:n.method,action:o},o,i))}}))}function ya(e){function t(P){return Rr(P,e)}po!==null&&Rr(po,e),So!==null&&Rr(So,e),yo!==null&&Rr(yo,e),fa.forEach(t),pa.forEach(t);for(var n=0;n<vo.length;n++){var o=vo[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<vo.length&&(n=vo[0],n.blockedOn===null);)ym(n),n.blockedOn===null&&vo.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var i=n[o],a=n[o+1],r=i[Ne]||null;if(typeof a=="function")r||bm(n);else if(r){var S=null;if(a&&a.hasAttribute("formAction")){if(i=a,r=a[Ne]||null)S=r.formAction;else if(Hl(i)!==null)continue}else S=r.action;typeof S=="function"?n[o+1]=S:(n.splice(o,3),o-=3),bm(n)}}}function Bl(e){this._internalRoot=e}Dr.prototype.render=Bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var n=t.current,o=un();dm(n,o,e,t,null,null)},Dr.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&vi(),dm(e.current,2,null,e,null,null),dr(),t[nt]=null}};function Dr(e){this._internalRoot=e}Dr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fe();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vo.length&&t!==0&&t<vo[n].priority;n++);vo.splice(n,0,e),n===0&&ym(e)}};var Cm=X.version;if(Cm!=="19.0.0")throw Error(f(527,Cm,"19.0.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=D(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var Xg={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:B,findFiberByHostInstance:Je,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{lt=Er.inject(Xg),kt=Er}catch{}}return ba.createRoot=function(e,t){if(!b(e))throw Error(f(299));var n=!1,o="",i=Vc,a=Hc,r=_c,S=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(S=t.unstable_transitionCallbacks)),t=hm(e,1,!1,null,null,n,o,i,a,r,S,null),e[nt]=t.current,Fl(e.nodeType===8?e.parentNode:e),new Bl(t)},ba.hydrateRoot=function(e,t,n){if(!b(e))throw Error(f(299));var o=!1,i="",a=Vc,r=Hc,S=_c,P=null,V=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(P=n.unstable_transitionCallbacks),n.formState!==void 0&&(V=n.formState)),t=hm(e,1,!0,t,n??null,o,i,a,r,S,P,V),t.context=mm(null),n=t.current,o=un(),i=so(o),i.callback=null,lo(n,i,o),t.current.lanes=o,Mo(t,o),In(t),e[nt]=t.current,Fl(e),new Dr(t)},ba.version="19.0.0",ba}var Dm;function sf(){if(Dm)return Wl.exports;Dm=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(X){console.error(X)}}return x(),Wl.exports=rf(),Wl.exports}var lf=sf();const uf=`First Level,Page,Second Level,Third Level,Option
SHOOT,1,Image Quality,RAW,-
SHOOT,1,Image Quality,RAW,RAW
SHOOT,1,Image Quality,RAW,M-RAW
SHOOT,1,Image Quality,RAW,S-RAW
SHOOT,1,Image Quality,JPEG,-
SHOOT,1,Image Quality,JPEG,L Fine
SHOOT,1,Image Quality,JPEG,L
SHOOT,1,Image Quality,JPEG,M Fine
SHOOT,1,Image Quality,JPEG,M
SHOOT,1,Image Quality,JPEG,S1 Fine
SHOOT,1,Image Quality,JPEG,S1
SHOOT,1,Image Quality,JPEG,S2
SHOOT,1,Image Quality,JPEG,S3
SHOOT,1,Dual Pixel RAW,Disable
SHOOT,1,Dual Pixel RAW,Enable
SHOOT,1,Image Review,Off
SHOOT,1,Image Review,2 sec.
SHOOT,1,Image Review,4 sec.
SHOOT,1,Image Review,8 sec.
SHOOT,1,Image Review,Hold
SHOOT,1,Beep,Enable
SHOOT,1,Beep,Touch to (mute)
SHOOT,1,Beep,Disable
SHOOT,1,Release Shutter Without Card,Enable
SHOOT,1,Release Shutter Without Card,Disable
SHOOT,1,Lens aberration correction,Peripheral illum corr,Enable
SHOOT,1,Lens aberration correction,Peripheral illum corr,Disable
SHOOT,1,Lens aberration correction,Distortion correction,Enable
SHOOT,1,Lens aberration correction,Distortion correction,Disable
SHOOT,1,Lens aberration correction,Digital Lens Optimizer,Enable
SHOOT,1,Lens aberration correction,Digital Lens Optimizer,Disable
SHOOT,1,Lens aberration correction,Chromatic aberr corr,Enable
SHOOT,1,Lens aberration correction,Chromatic aberr corr,Disable
SHOOT,1,Lens aberration correction,Diffraction correction,Enable
SHOOT,1,Lens aberration correction,Diffraction correction,Disable
SHOOT,1,External Speedlite control,Flash firing,Enable
SHOOT,1,External Speedlite control,Flash firing,Disable
SHOOT,1,External Speedlite control,E-TTL II meter.,Evaluative
SHOOT,1,External Speedlite control,E-TTL II meter.,Average
SHOOT,1,External Speedlite control,Flash sync. speed in Av mode,AUTO
SHOOT,1,External Speedlite control,Flash sync. speed in Av mode,1/200-1/60sec. auto
SHOOT,1,External Speedlite control,Flash sync. speed in Av mode,1/200sec. (fixed)
SHOOT,1,External Speedlite control,Flash function settings,?
SHOOT,1,External Speedlite control,Flash C.Fn settings,?
SHOOT,2,Exposure Compensation/AEB,±5 stops
SHOOT,2,ISO Speed Settings,ISO speed,Auto
SHOOT,2,ISO Speed Settings,ISO speed,100-32000
SHOOT,2,ISO Speed Settings,Range for stills,1000-32000
SHOOT,2,ISO Speed Settings,Auto range,1000-32000
SHOOT,2,ISO Speed Settings,Min. shutter spd.,1/8000-1""
SHOOT,2,Auto Lighting Optimizer,Disable
SHOOT,2,Auto Lighting Optimizer,Low
SHOOT,2,Auto Lighting Optimizer,Standard
SHOOT,2,Auto Lighting Optimizer,High
SHOOT,2,White Balance,Auto: Ambience priority
SHOOT,2,White Balance,Auto: White priority
SHOOT,2,White Balance,Daylight (Approx. 5200K)
SHOOT,2,White Balance,Shade (Approx. 7000K)
SHOOT,2,White Balance,Cloudy (Approx. 6000K)
SHOOT,2,White Balance,Tungsten (Approx. 3200K)
SHOOT,2,White Balance,Fluorescent (Approx. 4000K)
SHOOT,2,White Balance,Flash
SHOOT,2,White Balance,Custom
SHOOT,2,White Balance,Color temp.,2500-10000
SHOOT,2,Custom White Balance
SHOOT,2,WB Shift/Bkt.,MG,+-3
SHOOT,2,WB Shift/Bkt.,BA,+-3
SHOOT,2,Color Space,sRGB
SHOOT,2,Color Space,Adobe RGB
SHOOT,3,Picture Style,Auto
SHOOT,3,Picture Style,Standard
SHOOT,3,Picture Style,Portrait
SHOOT,3,Picture Style,Landscape
SHOOT,3,Picture Style,Fine Detail
SHOOT,3,Picture Style,Neutral
SHOOT,3,Picture Style,Faithful
SHOOT,3,Picture Style,Monochrome
SHOOT,3,Picture Style,User Def. 1
SHOOT,3,Picture Style,User Def. 2
SHOOT,3,Picture Style,User Def. 3
SHOOT,3,Long Exposure Noise Reduction,Disable
SHOOT,3,Long Exposure Noise Reduction,Auto
SHOOT,3,Long Exposure Noise Reduction,Enable
SHOOT,3,High ISO Speed Noise Reduction,Disable
SHOOT,3,High ISO Speed Noise Reduction,Low
SHOOT,3,High ISO Speed Noise Reduction,Standard
SHOOT,3,High ISO Speed Noise Reduction,High
SHOOT,3,High ISO Speed Noise Reduction,Multi Shot Noise Reduction
SHOOT,3,Highlight tone priority,Disable
SHOOT,3,Highlight tone priority,Enable (D+)
SHOOT,3,Dust Delete Data
SHOOT,3,Multiple exposure,Multiple exposure,Disable
SHOOT,3,Multiple exposure,Multiple exposure,On:Func/Ctrl
SHOOT,3,Multiple exposure,Multiple exposure,On:ContShtng
SHOOT,3,Multiple exposure,Multi-expos ctrl,Additive
SHOOT,3,Multiple exposure,Multi-expos ctrl,Average
SHOOT,3,Multiple exposure,Multi-expos ctrl,Bright
SHOOT,3,Multiple exposure,Multi-expos ctrl,Dark
SHOOT,3,Multiple exposure,No. of exposures,2-9
SHOOT,3,Multiple exposure,Save sourec imgs,All images
SHOOT,3,Multiple exposure,Save sourec imgs,Result only
SHOOT,3,Multiple exposure,Continue Mult-exp, 1 shot only
SHOOT,3,Multiple exposure,Continue Mult-exp, Continuously
SHOOT,3,HDR Mode,Adjust dyn range,Disable HDR
SHOOT,3,HDR Mode,Adjust dyn range,Auto
SHOOT,3,HDR Mode,Adjust dyn range,+-1 EV
SHOOT,3,HDR Mode,Adjust dyn range,+-2 EV
SHOOT,3,HDR Mode,Adjust dyn range,+-3 EV
SHOOT,3,HDR Mode,Effect,Natural
SHOOT,3,HDR Mode,Effect,Art standard
SHOOT,3,HDR Mode,Effect,Art vivid
SHOOT,3,HDR Mode,Effect,Art bold
SHOOT,3,HDR Mode,Effect,Art embossed
SHOOT,3,HDR Mode,Continuous HDR,1 shot only
SHOOT,3,HDR Mode,Continuous HDR,Every shot
SHOOT,3,HDR Mode,Auto Image Align,Enable
SHOOT,3,HDR Mode,Auto Image Align,Disable
SHOOT,3,HDR Mode,Save source imgs,All images
SHOOT,3,HDR Mode,Save source imgs,HDR img only
SHOOT,4,Interval timer,Disable
SHOOT,4,Interval timer,Enable
SHOOT,4,Interval timer,Interval,1s-99h 59m 59s
SHOOT,4,Interval timer,No. of shots,0-99
SHOOT,4,Bulb timer,Disable
SHOOT,4,Bulb timer,Enable
SHOOT,4,Bulb timer,Expo. time,1s-99h 59m 59s
SHOOT,4,Anti-flicker shoot.,Disable
SHOOT,4,Anti-flicker shoot.,Enable
SHOOT,4,Mirror lockup,Disable
SHOOT,4,Mirror lockup,Enable
SHOOT,5,Live View shoot.,Enable
SHOOT,5,Live View shoot.,Disable
SHOOT,5,AF method,Face+Tracking,?
SHOOT,5,AF method,FlexiZoneAF()
SHOOT,5,AF method,FlexiZoneAF[]
SHOOT,5,Touch Shutter,Disable
SHOOT,5,Touch Shutter,Enable
SHOOT,5,Grid display,Off
SHOOT,5,Grid display,3x3
SHOOT,5,Grid display,6x4
SHOOT,5,Grid display,3x3+diag
SHOOT,5,Aspect ratio,3:2
SHOOT,5,Aspect ratio,4:3
SHOOT,5,Aspect ratio,16:9
SHOOT,5,Aspect ratio,1:1
SHOOT,5,Expo. simulation,Enable
SHOOT,5,Expo. simulation,During shooting?
SHOOT,5,Expo. simulation,Disable
SHOOT,6,Silent LV shoot.,Mode 1
SHOOT,6,Silent LV shoot.,Mode 2
SHOOT,6,Silent LV shoot.,Disable
SHOOT,6,Metering timer,4 sec.
SHOOT,6,Metering timer,8 sec.
SHOOT,6,Metering timer,16 sec.
SHOOT,6,Metering timer,30 sec.
SHOOT,6,Metering timer,1 min.
SHOOT,6,Metering timer,10 min.
SHOOT,6,Metering timer,30 min.
AF,1,Case 1 (Versatile multi purpose setting),Tracking sensitivity,-2 (Locked on)
AF,1,Case 1 (Versatile multi purpose setting),Tracking sensitivity,-1
AF,1,Case 1 (Versatile multi purpose setting),Tracking sensitivity,0
AF,1,Case 1 (Versatile multi purpose setting),Tracking sensitivity,1
AF,1,Case 1 (Versatile multi purpose setting),Tracking sensitivity,2 (Responsive)
AF,1,Case 1 (Versatile multi purpose setting),Accel./decel. tracking,-2
AF,1,Case 1 (Versatile multi purpose setting),Accel./decel. tracking,-1
AF,1,Case 1 (Versatile multi purpose setting),Accel./decel. tracking,0
AF,1,Case 1 (Versatile multi purpose setting),Accel./decel. tracking,1
AF,1,Case 1 (Versatile multi purpose setting),Accel./decel. tracking,2
AF,1,Case 1 (Versatile multi purpose setting),AF pt auto switching,0
AF,1,Case 1 (Versatile multi purpose setting),AF pt auto switching,1
AF,1,Case 1 (Versatile multi purpose setting),AF pt auto switching,2
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Tracking sensitivity,-2 (Locked on)
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Tracking sensitivity,-1
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Tracking sensitivity,0
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Tracking sensitivity,1
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Tracking sensitivity,2 (Responsive)
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Accel./decel. tracking,-2
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Accel./decel. tracking,-1
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Accel./decel. tracking,0
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Accel./decel. tracking,1
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),Accel./decel. tracking,2
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),AF pt auto switching,0
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),AF pt auto switching,1
AF,1,Case 2 (Continue to track subjects, ignoring possible obstacles),AF pt auto switching,2
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Tracking sensitivity,-2 (Locked on)
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Tracking sensitivity,-1
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Tracking sensitivity,0
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Tracking sensitivity,1
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Tracking sensitivity,2 (Responsive)
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Accel./decel. tracking,-2
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Accel./decel. tracking,-1
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Accel./decel. tracking,0
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Accel./decel. tracking,1
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),Accel./decel. tracking,2
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),AF pt auto switching,0
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),AF pt auto switching,1
AF,1,Case 3 (Instantly focus on subjects suddenly entering AF points),AF pt auto switching,2
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Tracking sensitivity,-2 (Locked on)
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Tracking sensitivity,-1
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Tracking sensitivity,0
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Tracking sensitivity,1
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Tracking sensitivity,2 (Responsive)
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Accel./decel. tracking,-2
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Accel./decel. tracking,-1
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Accel./decel. tracking,0
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Accel./decel. tracking,1
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),Accel./decel. tracking,2
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),AF pt auto switching,0
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),AF pt auto switching,1
AF,1,Case 4 (For subjects that accelerate or decelerate quickly),AF pt auto switching,2
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Tracking sensitivity,-2 (Locked on)
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Tracking sensitivity,-1
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Tracking sensitivity,0
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Tracking sensitivity,1
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Tracking sensitivity,2 (Responsive)
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Accel./decel. tracking,-2
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Accel./decel. tracking,-1
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Accel./decel. tracking,0
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Accel./decel. tracking,1
AF,1,Case 5 (For erratic subjects moving quickly in any direction),Accel./decel. tracking,2
AF,1,Case 5 (For erratic subjects moving quickly in any direction),AF pt auto switching,0
AF,1,Case 5 (For erratic subjects moving quickly in any direction),AF pt auto switching,1
AF,1,Case 5 (For erratic subjects moving quickly in any direction),AF pt auto switching,2
AF,1,Case 6 (For subjects that change speed and move erratically),Tracking sensitivity,-2 (Locked on)
AF,1,Case 6 (For subjects that change speed and move erratically),Tracking sensitivity,-1
AF,1,Case 6 (For subjects that change speed and move erratically),Tracking sensitivity,0
AF,1,Case 6 (For subjects that change speed and move erratically),Tracking sensitivity,1
AF,1,Case 6 (For subjects that change speed and move erratically),Tracking sensitivity,2 (Responsive)
AF,1,Case 6 (For subjects that change speed and move erratically),Accel./decel. tracking,-2
AF,1,Case 6 (For subjects that change speed and move erratically),Accel./decel. tracking,-1
AF,1,Case 6 (For subjects that change speed and move erratically),Accel./decel. tracking,0
AF,1,Case 6 (For subjects that change speed and move erratically),Accel./decel. tracking,1
AF,1,Case 6 (For subjects that change speed and move erratically),Accel./decel. tracking,2
AF,1,Case 6 (For subjects that change speed and move erratically),AF pt auto switching,0
AF,1,Case 6 (For subjects that change speed and move erratically),AF pt auto switching,1
AF,1,Case 6 (For subjects that change speed and move erratically),AF pt auto switching,2
AF,2,AI Servo 1st image priority,Release priority
AF,2,AI Servo 1st image priority,Equal priority
AF,2,AI Servo 1st image priority,Focus priority
AF,2,AI Servo 2nd image priority,-2 (Shooting speed priority)
AF,2,AI Servo 2nd image priority,-1
AF,2,AI Servo 2nd image priority,0 (Equal priority)
AF,2,AI Servo 2nd image priority,1
AF,2,AI Servo 2nd image priority,2 (Focus priority)
AF,3,Lens electronic MF,Enable after One-Shot AF
AF,3,Lens electronic MF,Disable after One-Shot AF
AF,3,Lens electronic MF,Disable in AF mode
AF,3,AF-assist beam firing,Enable
AF,3,AF-assist beam firing,Disable
AF,3,AF-assist beam firing,IR AF assist beam only
AF,3,One-Shot AF release prior,Release priority
AF,3,One-Shot AF release prior,Focus priority
AF,4,Lens drive when AF impossible,Continue focus search
AF,4,Lens drive when AF impossible,Stop focus search
AF,4,Selectable AF point,All points
AF,4,Selectable AF point,Only cross-type AF points
AF,4,Selectable AF point,15 points
AF,4,Selectable AF point,9 points
AF,4,Select AF area selec. mode,Manual select.:Spot AF
AF,4,Select AF area selec. mode,Manual selection: 1pt AF
AF,4,Select AF area selec. mode,Expand AF area
AF,4,Select AF area selec. mode,Expand AF area:Surround
AF,4,Select AF area selec. mode,Manual select.:Zone AF
AF,4,Select AF area selec. mode,Manual select.:Large Zone AF
AF,4,Select AF area selec. mode,Auto selection AF
AF,4,AF area selection method,?->M-Fn button
AF,4,AF area selection method,?->Main Dial
AF,4,Orientation linked AF point,Same for both vert/horiz
AF,4,Orientation linked AF point,Separate AF pts: Area+pt
AF,4,Orientation linked AF point,Separate AF pts: Pt only
AF,4,'Initial AFpt, AI Servo AF',Initial ? AF pt select
AF,4,'Initial AFpt, AI Servo AF',Manual ? AF pt
AF,4,'Initial AFpt, AI Servo AF',Auto
AF,4,Auto AF pt sel.:EOS iTR AF,EOS iTR AF (Face priority)
AF,4,Auto AF pt sel.:EOS iTR AF,EOS iTR AF
AF,4,Auto AF pt sel.:EOS iTR AF,Disable
AF,5,AF point selection movement,Stops at AF area edges
AF,5,AF point selection movement,Continuous
AF,5,VF display illumination,Auto
AF,5,VF display illumination,Enable
AF,5,VF display illumination,Disable
AF,5,AF status in viewfinder,Show in field of view
AF,5,AF status in viewfinder,Show outside view
AF,5,AF Microadjustment,Disable
AF,5,AF Microadjustment,All by same amount,-20 - +20
AF,5,AF Microadjustment,Adjust by lens,-20 - +20?
PLAY,1,Protect images
PLAY,1,Rotate images
PLAY,1,Erase images
PLAY,1,Print order
PLAY,1,Photobook Set-up
PLAY,1,Image copy
PLAY,1,RAW image processing
PLAY,2,Cropping
PLAY,2,Resize
PLAY,2,Rating
PLAY,2,Slide show
PLAY,2,Image transfer
PLAY,2,Image jump w/wheel
PLAY,3,Highlight alert,Disable
PLAY,3,Highlight alert,Enable
PLAY,3,AF point disp.,Disable
PLAY,3,AF point disp.,Enable
PLAY,3,Playback grid,Off
PLAY,3,Playback grid,3x3
PLAY,3,Playback grid,6x4
PLAY,3,Playback grid,3x3+diag
PLAY,3,Histogram disp,Brightness
PLAY,3,Histogram disp,RGB
PLAY,3,Movie play count,Rec time
PLAY,3,Movie play count,Time code
PLAY,3,Magnificatn (apx),1x (no magnification)
PLAY,3,Magnificatn (apx),2x (magnify from center)
PLAY,3,Magnificatn (apx),4x (magnify from center)
PLAY,3,Magnificatn (apx),8x (magnify from center)
PLAY,3,Magnificatn (apx),10x (magnify from center)
PLAY,3,Magnificatn (apx),Actual size (from selected pt)
PLAY,3,Magnificatn (apx),Same as last magnif. (from ctr)
PLAY,3,Ctrl over HDMI,Disable
PLAY,3,Ctrl over HDMI,Enable
SET UP1,Record func+card/folder sel.,Record func,Standard
SET UP1,Record func+card/folder sel.,Record func,Auto switch card
SET UP1,Record func+card/folder sel.,Record func,Rec. separately
SET UP1,Record func+card/folder sel.,Record func,Rec. to multiple
SET UP1,Record func+card/folder sel.,Record/play,1 (?)
SET UP1,Record func+card/folder sel.,Record/play,2 (SD card)
SET UP1,File numbering,Continuous
SET UP1,File numbering,Auto reset
SET UP1,File numbering,Manual reset
camera_menu_config,
brand,Canon 
model,5Div
css_file,canon5Div`,cf=`level0,level1,level2,level3,level4,level5,level6,level7,Comment/help\r
Still Photo Shooting,<i name="camera"/>Camera,Image quality/size,JPEG/HEIF quality,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Image quality/size,Img type/size,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Image quality/size,Cropping/aspect ratio,,,,,,Select how the shooting area is displayed. When is set or an RF-S or EF-S lens is used\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,Expo.comp./AEB,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,ISO speed settings,,,,,,Select [: ISO speed settings] (). Set the desired minimum shutter speed.\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,Anti-flicker shoot.,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,HF anti-flicker shooting,,,,,,"Select [: HF anti-flicker shooting] (, ). Switch to the indicated shutter speed."\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,External Speedlite control,,,,,,"You can select the flash mode to suit your desired flash photography. With Speedlites having a zooming flash head, you can set the flash coverage. Select the settings to be cleared."\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,External Speedlite control,Elec. 1st-curtain,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,External Speedlite control,*,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,External Speedlite control,Shutter mode,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,External Speedlite control,Mechanical,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,External Speedlite control,Electronic,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,Metering mode,,,,,,"You can select how the camera determines subject brightness. Effective where there are much brighter lights around the subject due to backlight, etc."\r
Still Photo Shooting,<i name="camera"/>Camera,Exposure,Detect priority AE while AF,,,,,,"Select [: Detect priority AE while AF] (, )."\r
Still Photo Shooting,<i name="camera"/>Camera,Color/tone/Dynamic range,Picture Style Selection,,,,,,"For vivid blues and greens, and very sharp and crisp images. Effective for impressive landscapes."\r
Still Photo Shooting,<i name="camera"/>Camera,Color/tone/Dynamic range,Color space,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Color/tone/Dynamic range,Clarity,,,,,,Set toward the negative end to make images look softer or toward the positive end for a sharper appearance.\r
Still Photo Shooting,<i name="camera"/>Camera,Color/tone/Dynamic range,HDR shooting (PQ),,,,,,"Select [: HDR shooting (PQ)] (, )."\r
Still Photo Shooting,<i name="camera"/>Camera,Color/tone/Dynamic range,Auto Lighting Optimizer,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Color/tone/Dynamic range,Highlight tone priority,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,White balance/Quality correction,White balance,,,,,,"With [] (Ambience priority), you can slightly increase the intensity of the image's warm color cast when shooting a tungsten-light scene. If you select [] (White priority), you can reduce the intensity of the image's warm color cast. A value can be set representing the white balance color temperature."\r
Still Photo Shooting,<i name="camera"/>Camera,White balance/Quality correction,White balance,Display,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,White balance/Quality correction,Set Custom WB,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,White balance/Quality correction,WB Shift/Bkt.,,,,,,"Set the white balance bracketing amount. Sample setting: B/A bias, ±3 levels"\r
Still Photo Shooting,<i name="camera"/>Camera,White balance/Quality correction,Lens aberration correction,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,White balance/Quality correction,Long exp. noise reduction,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,White balance/Quality correction,High ISO speed NR,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,White balance/Quality correction,Dust Delete Data,,,,,,Select [: Dust Delete Data] (). File size is essentially unaffected by Dust Delete Data appended to images.\r
Still Photo Shooting,<i name="camera"/>Camera,Various shooting,Multiple exposure,,,,,,"As you shoot multiple exposures (2–9), you can see how the images will be merged into a single image. Select [Select image for multi. expo.]. You can select a JPEG image shot at the same angle of view as the first selected JPEG."\r
Still Photo Shooting,<i name="camera"/>Camera,Various shooting,Multiple exposure,Save and exit,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Various shooting,Multiple exposure,Return to previous screen,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Various shooting,Multiple exposure,Exit without saving,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Various shooting,Multiple exposure,Undo last image,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Various shooting,Focus bracketing,,,,,,Larger aperture values increase the focus shift and make focus bracketing cover a wider range under the same focus increment and number of shots. Depth compositing image quality setting and images saved\r
Still Photo Shooting,<i name="camera"/>Camera,Shutter control,Drive mode,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Shutter control,Pre-cont. shooting,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Shutter control,Interval timer,,,,,,"With the interval timer, you can set the shooting interval and number of shots, so that the camera takes individual shots repeatedly according to your interval until your specified number of shots are taken. Set the shooting interval and number of shots. Can be set in a range of [00:00:01]–[99:59:59]."\r
Still Photo Shooting,<i name="camera"/>Camera,Shutter control,Bulb timer,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Shutter control,Silent shutter function,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Shutter control,Shutter mode,,,,,,You can choose the method of shutter release. Shooting activates the mechanical shutter. Recommended when shooting with the aperture of a bright lens wide open. Recommended when shooting with the aperture of a bright lens wide open.\r
Still Photo Shooting,<i name="camera"/>Camera,Shutter control,Release shutter without card,,,,,,Select [: Release shutter without card] ().\r
Still Photo Shooting,<i name="camera"/>Camera,Assist shooting,IS (Image Stabilizer) mode,,,,,,Select [: IS (Image Stabilizer) mode] ().\r
Still Photo Shooting,<i name="camera"/>Camera,Assist shooting,Customize Quick Controls,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Assist shooting,Metering timer,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Assist shooting,Image review,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Assist shooting,High speed display,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Assist shooting,Blackout-free display,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Assist shooting,Display simulation,,,,,,\r
Still Photo Shooting,<i name="camera"/>Camera,Assist shooting,OVF sim. view assist,,,,,,Select [: OVF sim. view assist] ().\r
Still Photo Shooting,<i name="camera"/>Camera,Assist shooting,HDR/C.Log View Assist.,,,,,,"Select [: HDR/C.Log View Assist.] (, )."\r
Still Photo Shooting,AF,AF operation/area,AF operation,,,,,,Set the lens's focus mode switch to .\r
Still Photo Shooting,AF,AF operation/area,AF area,,,,,,"The camera focuses in a narrower area than 1-point AF. The camera focuses using a single AF point []. When Servo AF is used, first you will focus using an AF point []."\r
Still Photo Shooting,AF,AF operation/area,Whole area tracking Servo AF,,,,,,\r
Still Photo Shooting,AF,AF operation/area,Focus mode,,,,,,"Set the lens's focus mode switch to . Select [: MF peaking settings] (, )."\r
Still Photo Shooting,AF,Subject detection,Subject to detect,,,,,,\r
Still Photo Shooting,AF,Subject detection,Eye detection,,,,,,\r
Still Photo Shooting,AF,Subject detection,Register people priority,,,,,,"Select [: Register people priority] (, ). JPEG or HEIF images can be used. Process any RAW images you will use into JPEGs or HEIFs before saving them to the card. Display when registered faces are detected"\r
Still Photo Shooting,AF,Subject detection,Action Priority,,,,,,\r
Still Photo Shooting,AF,Servo AF character.,Case Auto,,,,,,\r
Still Photo Shooting,AF,Servo AF character.,Case Auto character.,,,,,,\r
Still Photo Shooting,AF,Servo AF character.,Case Manual,,,,,,\r
Still Photo Shooting,AF,Servo AF character.,Tracking sensitivity,,,,,,\r
Still Photo Shooting,AF,Servo AF character.,Accel./decel. tracking,,,,,,\r
Still Photo Shooting,AF,Servo AF character.,Case Special,,,,,,\r
Still Photo Shooting,AF,Customize AF operation,Servo 1st image priority,,,,,,\r
Still Photo Shooting,AF,Customize AF operation,One-Shot AF release prior.,,,,,,\r
Still Photo Shooting,AF,Customize AF operation,Preview AF,,,,,,\r
Still Photo Shooting,AF,Customize AF operation,Lens drive when AF impossible,,,,,,\r
Still Photo Shooting,AF,Customize AF operation,AF-assist beam firing,,,,,,\r
Still Photo Shooting,AF,Customized controls,Limit AF areas,,,,,,\r
Still Photo Shooting,AF,Customized controls,Orientation linked AF point,,,,,,\r
Still Photo Shooting,AF,Customized controls,Limit subject to detect,,,,,,\r
Still Photo Shooting,AF,Customized controls,L/R eye detection,,,,,,\r
Still Photo Shooting,AF,MF related,MF peaking settings,,,,,,\r
Still Photo Shooting,AF,MF related,Focus guide,,,,,,\r
Still Photo Shooting,AF,MF related,Lens electronic MF,,,,,,\r
Still Photo Shooting,AF,Various settings/Various settings,Register/recall AF-related settings,,,,,,\r
Still Photo Shooting,AF,Various settings/Various settings,AF Setting Guide URL,,,,,,\r
Still Photo Shooting,Playback,File operation,Protect images,,,,,,\r
Still Photo Shooting,Playback,File operation,Erase images,,,,,,\r
Still Photo Shooting,Playback,File operation,Rotate stills,,,,,,\r
Still Photo Shooting,Playback,File operation,Change mov rotate info,,,,,,Select [: Change mov rotate info] ().\r
Still Photo Shooting,Playback,File operation,Rating,,,,,,"Next, select the last image (end point). A checkmark [] will be appended to all the images within the range between first and last images. Turn the dial to select a rating mark, then select [OK]."\r
Still Photo Shooting,Playback,File operation,Protect when setting the rating,,,,,,Select [: Protect when setting the rating] (). Select the rating levels to protect.\r
Still Photo Shooting,Playback,File operation,Image copy,,,,,,\r
Still Photo Shooting,Playback,File operation,Print order,,,,,,"Select and specify the images individually. Press to print a copy of the displayed image. By turning the dial, you can set a print quantity of up to 99 copies. Press to add a checkmark [] to the box. The image will be included in the index print."\r
Still Photo Shooting,Playback,File operation,Print order,File No.,,,,,\r
Still Photo Shooting,Playback,File operation,Print order,Date,,,,,\r
Still Photo Shooting,Playback,File operation,Print order,Off,,,,,\r
Still Photo Shooting,Playback,Image processing,RAW image processing,,,,,,"Select [: RAW image processing] (). JPEG or HEIF images at the specified aspect ratio are created when you process RAW images shot with [: Cropping/aspect ratio] () set to [1:1 (aspect ratio)], [4:3 (aspect ratio)], or [16:9 (aspect ratio)]. You can adjust the image brightness up to ±1 stop in 1/3-stop increments."\r
Still Photo Shooting,Playback,Image processing,In-Camera Upscaling,,,,,,\r
Still Photo Shooting,Playback,Image processing,Resize,,,,,,\r
Still Photo Shooting,Playback,Image processing,Cropping,,,,,,"Turn the dial to resize the cropping frame size. The smaller the cropping frame, the more magnified the cropped image will look. Check the image area to be cropped."\r
Still Photo Shooting,Playback,Image processing,HEIF→JPEG conversion,,,,,,\r
Still Photo Shooting,Playback,Playback method,Slide show,,,,,,Specify the images to be played back.\r
Still Photo Shooting,Playback,Playback method,VR preview,,,,,,\r
Still Photo Shooting,Playback,Playback method,VR preview,Play,,,,,\r
Still Photo Shooting,Playback,Playback method,VR preview,Previous frame,,,,,\r
Still Photo Shooting,Playback,Playback method,VR preview,Next frame,,,,,\r
Still Photo Shooting,Playback,Playback method,VR preview,Skip forward,,,,,\r
Still Photo Shooting,Playback,Playback method,VR preview,Skip backward,,,,,\r
Still Photo Shooting,Playback,Playback method,Set image search conditions,,,,,,"Read the message displayed, then select [OK]. For movies, searches apply to files in the XFVC or CRM folder."\r
Still Photo Shooting,Playback,Playback method,Set image search conditions,Folder,,,,,\r
Still Photo Shooting,Playback,Playback method,Set image search conditions,Type of file (2),,,,,\r
Still Photo Shooting,Playback,Playback method,Set image search conditions,Rating,,,,,\r
Still Photo Shooting,Playback,Playback method,Set image search conditions,Date,,,,,\r
Still Photo Shooting,Playback,Playback method,Set image search conditions,Type of file (1),,,,,\r
Still Photo Shooting,Playback,Playback method,Set image search conditions,Protect,,,,,\r
Still Photo Shooting,Playback,Playback method,View from last seen,,,,,,Select [: View from last seen] ().\r
Still Photo Shooting,Playback,Playback method,Magnification,,,,,,You can magnify display of your captured images. Magnified view starts from the center of the screen.\r
Still Photo Shooting,Playback,Playback method,Blur/Out-of-Focus image detection,,,,,,[] (little blurring/lack of focus) is displayed for images that are fairly clear and in focus when viewed with the naked eye at actual size.\r
Still Photo Shooting,Playback,Various settings,Playback information display,,,,,,Add a checkmark [] next to the number of screens to display.\r
Still Photo Shooting,Playback,Various settings,Highlight alert,,,,,,\r
Still Photo Shooting,Playback,Various settings,AF point disp.,,,,,,\r
Still Photo Shooting,Playback,Various settings,Playback grid,,,,,,\r
Still Photo Shooting,Playback,Various settings,Movie play count,,,,,,Select [: Movie play count] ().\r
Still Photo Shooting,Playback,Various settings,Memo audio quality,,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,,,,,,"Select to name sets of settings. Use the virtual keyboard () to enter text. Change, delete, or check the settings as needed. Change, delete, or check the settings as needed."\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,8021X_R.CRT,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,8021X_C.CRT,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,8021X_C.PEM,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,EAP-TTLS,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,8021X_C.P12,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,Private key,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,8021X_C.PFX,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,PEAP,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,Client certificate,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,Root certificate,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,EAP-TLS,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Network settings,8021X_R.PEM,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Airplane mode,,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Bluetooth settings,,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Camera name,,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,Error details,,,,,,\r
Still Photo Shooting,Communication Functions,Network settings,MAC address,,,,,,\r
Still Photo Shooting,Communication Functions,Network function,Transfer images to FTP server,,,,,,"For secure FTP transfer using a root certificate, import a root certificate (). Select [: Transfer images to FTP server] (). If you have selected [Login password], enter the name and password."\r
Still Photo Shooting,Communication Functions,Network function,Connect to EOS Utility,,,,,,"You can use the camera to transfer images to a computer (). You can specify the format of images to transfer to a computer (). For RAW+JPEG or RAW+HEIF images, you can specify which image to transfer."\r
Still Photo Shooting,Communication Functions,Network function,Upload to image.canon,,,,,,Use the app to scan the QR code. You can select the type of movies uploaded. You can select the type of still photos uploaded.\r
Still Photo Shooting,Communication Functions,Network function,Sync time between cameras,,,,,,"First, set up the camera to use as a sender. Select [: Sync time between cameras] (). Set up cameras to use as receivers."\r
Still Photo Shooting,Communication Functions,Network function,Connect to smartphone(tablet),,,,,,"In [Size to send], you can select the size of images to send."\r
Still Photo Shooting,Communication Functions,Network function,Live streaming,,,,,,\r
Still Photo Shooting,Communication Functions,Network function,Connect to Wireless Remote,,,,,,Set up the camera for remote shooting.\r
Still Photo Shooting,Communication Functions,Network function,Camera Control API,,,,,,Select items to check or change. You can change the TCP/IPv4 settings. You can change the TCP/IPv6 settings.\r
Still Photo Shooting,Communication Functions,Various settings,GPS device settings,,,,,,Select [: GPS device settings] (). Update the GP-E2 firmware to Ver. 2.0.0 or later. Select [: GPS device settings] ().\r
Still Photo Shooting,Communication Functions,Various settings,Choose USB connection app,,,,,,"Audio output is LPCM/16bit/2CH (channels 1 and 2), even with [: Audio format] set to [LPCM/24bit/4CH]. Select if you will use an iOS app."\r
Still Photo Shooting,Communication Functions,Various settings,Save/load comm. settings on card,,,,,,\r
Still Photo Shooting,Communication Functions,Various settings,Reset communication settings,,,,,,\r
Still Photo Shooting,Set-up,File/card setting,Selecting Cards for Recording/Playback,,,,,,Select [: Record func+card/folder sel.] (). Set the recording method for still photos. Records still photos to the card selected in [ Record/play].\r
Still Photo Shooting,Set-up,File/card setting,File numbering,,,,,,"Captured still photos saved in a folder are assigned a file number from 0001 to 9999. You can change how the image files are numbered. File numbering is reset to 0001 if you replace a card, create a folder, or switch the target card (as in →). This is useful if you want to organize images by cards or folders."\r
Still Photo Shooting,Set-up,File/card setting,Clip Number,,,,,,Recorded movies saved in a folder are assigned a clip number from 001 to 999. You can change how clips are numbered. Clip numbering is reset to 001 if you replace a card or switch the target card (as in →). This is useful if you want to organize movies by cards.\r
Still Photo Shooting,Set-up,File/card setting,File name,,,,,,"You can set how movie files (clips) are named. A 3-digit number from 001 to 999 preceded by C, as in C001–C999. After C999, D is used at the beginning."\r
Still Photo Shooting,Set-up,File/card setting,File name,(5),,,,,\r
Still Photo Shooting,Set-up,File/card setting,File name,(6),,,,,\r
Still Photo Shooting,Set-up,File/card setting,File name,(2),,,,,\r
Still Photo Shooting,Set-up,File/card setting,File name,(3),,,,,\r
Still Photo Shooting,Set-up,File/card setting,File name,(8),,,,,\r
Still Photo Shooting,Set-up,File/card setting,File name,(4),,,,,\r
Still Photo Shooting,Set-up,File/card setting,File name,(9),,,,,\r
Still Photo Shooting,Set-up,File/card setting,File name,(7),,,,,\r
Still Photo Shooting,Set-up,File/card setting,File name,(1),,,,,\r
Still Photo Shooting,Set-up,File/card setting,Format card,,,,,,\r
Still Photo Shooting,Set-up,File/card setting,Auto rotate,,,,,,\r
Still Photo Shooting,Set-up,File/card setting,Add  rotate info,,,,,,Select [: Add rotate info] ().\r
Still Photo Shooting,Set-up,Country/Area/Guidance/Audio settings,Date/Time/Zone,,,,,,\r
Still Photo Shooting,Set-up,Country/Area/Guidance/Audio settings,Language,,,,,,\r
Still Photo Shooting,Set-up,Country/Area/Guidance/Audio settings,System frequency,,,,,,\r
Still Photo Shooting,Set-up,Country/Area/Guidance/Audio settings,Help text size,,,,,,\r
Still Photo Shooting,Set-up,Country/Area/Guidance/Audio settings,Beep,,,,,,\r
Still Photo Shooting,Set-up,Country/Area/Guidance/Audio settings,Volume,,,,,,\r
Still Photo Shooting,Set-up,Country/Area/Guidance/Audio settings,Audio monitor,,,,,,\r
Still Photo Shooting,Set-up,Customize display,Screen brightness,,,,,,\r
Still Photo Shooting,Set-up,Customize display,Viewfinder brightness,,,,,,\r
Still Photo Shooting,Set-up,Customize display,Screen/viewfinder color tone,,,,,,\r
Still Photo Shooting,Set-up,Customize display,Fine-tune VF color tone,,,,,,\r
Still Photo Shooting,Set-up,Customize display,Screen/viewfinder display,,,,,,"You can specify to use the screen or viewfinder for display, to avoid accidentally activating the viewfinder sensor when the screen is open. Always use the screen for display when it is open. Use the screen for display when it is closed and facing you, and switch to the viewfinder when you look through it."\r
Still Photo Shooting,Set-up,Customize display,UI magnification,,,,,,You can magnify menu screens by double-tapping with two fingers. Double-tap again to restore the original display size.\r
Still Photo Shooting,Set-up,Customize display,HDMI resolution,,,,,,\r
Still Photo Shooting,Set-up,Various settings,Cooling fan settings,,,,,,Select [: Cooling fan settings] ().\r
Still Photo Shooting,Set-up,Various settings,Shutter at shutdown,,,,,,You can set whether to leave the shutter open or close it when the camera's power switch is set to . Select [: Shutter at shutdown] (). Leaves the shutter open. This keeps camera quieter when the power switch is set to or . Useful when you want to shoot quietly.\r
Still Photo Shooting,Set-up,Various settings,Sensor cleaning,,,,,,Always use a fully charged battery.\r
Still Photo Shooting,Set-up,Various settings,Manage password,,,,,,"Reenter the password, then select [OK]."\r
Still Photo Shooting,Set-up,Various settings,Power saving,,,,,,\r
Still Photo Shooting,Set-up,Reset/All settings,Reset camera,,,,,,\r
Still Photo Shooting,Set-up,Reset/All settings,Custom shooting mode (C1-C3),,,,,,\r
Still Photo Shooting,Set-up,Reset/All settings,Save/load cam settings on card,,,,,,\r
Still Photo Shooting,Set-up,Various settings,Battery info.,,,,,,\r
Still Photo Shooting,Set-up,Various settings,Copyright information,,,,,,\r
Still Photo Shooting,Set-up,Various settings,Show log,,,,,,\r
Still Photo Shooting,Set-up,Various settings,Manual/software URL,,,,,,\r
Still Photo Shooting,Set-up,Various settings,Certification Logo Display,,,,,,\r
Still Photo Shooting,Set-up,Various settings,Firmware,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (still photo shooting),Customize buttons for shooting,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (still photo shooting),Customize dials/control ring,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (still photo shooting),direction to set Tv/Av,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (still photo shooting),direction to set Tv/Av,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (still photo shooting),Switch / when shooting,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (still photo shooting),Touch Shutter,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (still photo shooting),Multi function lock,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (movie recording),Customize buttons for shooting,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (movie recording),Shutter btn function for movies,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (movie recording),Customize dials/control ring,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (movie recording),direction to set Tv/Av,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (movie recording),direction to set Tv/Av,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (movie recording),Switch / when shooting,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting (movie recording),Multi function lock,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting,Touch & drag AF settings,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting,AF area selection control,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting,sensitivity- AF pt select,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting,Focus/control ring,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting,Focus ring rotation,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when shooting,RF lens MF focus ring sensitivity,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when playback,Customize buttons for playback,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when playback,Image jump w/,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when playback,Img jump w/+,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls when playback,Switch / during playback,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls/Reset,Eye control,,,,,,"With [: AF area] set to [Whole area AF], the camera focuses in the area near the pointer. Choose [Orange], [Purple], or [White] as the pointer color. Choose [] or [] as the style of pointer displayed."\r
Still Photo Shooting,Control Customization,Customized controls/Reset,Touch control,,,,,,\r
Still Photo Shooting,Control Customization,Customized controls/Reset,Clear all customized controls,,,,,,\r
Still Photo Shooting,Custom Functions,Shooting mode/Exposure,Restrict shooting modes,,,,,,\r
Still Photo Shooting,Custom Functions,Shooting mode/Exposure,Exposure level increments,,,,,,\r
Still Photo Shooting,Custom Functions,Shooting mode/Exposure,ISO speed setting increments,,,,,,\r
Still Photo Shooting,Custom Functions,Shooting mode/Exposure,Speed from metering/ISO Auto,,,,,,\r
Still Photo Shooting,Custom Functions,Shooting mode/Exposure,Bracketing auto cancel,,,,,,\r
Still Photo Shooting,Custom Functions,Shooting mode/Exposure,Bracketing sequence,,,,,,\r
Still Photo Shooting,Custom Functions,Shooting mode/Exposure,Number of bracketed shots,,,,,,\r
Still Photo Shooting,Custom Functions,Exposure,Safety shift,,,,,,\r
Still Photo Shooting,Custom Functions,Exposure,Same expo. for new aperture,,,,,,\r
Still Photo Shooting,Custom Functions,Exposure,AE lock meter. mode after focus,,,,,,\r
Still Photo Shooting,Custom Functions,Exposure,Set shutter speed range,,,,,,\r
Still Photo Shooting,Custom Functions,Exposure,Set aperture range,,,,,,\r
Still Photo Shooting,Custom Functions,Exposure,AE Microadjustment,,,,,,\r
Still Photo Shooting,Custom Functions,Exposure,FE Microadjustment,,,,,,\r
Still Photo Shooting,Custom Functions,Drive,Continuous shooting speed,,,,,,\r
Still Photo Shooting,Custom Functions,Drive,Limit continuous shot count,,,,,,\r
Still Photo Shooting,Custom Functions,Various settings/Reset,Add cropping information,,,,,,\r
Still Photo Shooting,Custom Functions,Various settings/Reset,Default Erase option,,,,,,\r
Still Photo Shooting,Custom Functions,Various settings/Reset,Av setting without lens,,,,,,\r
Still Photo Shooting,Custom Functions,Various settings/Reset,Release shutter w/o lens,,,,,,\r
Still Photo Shooting,Custom Functions,Various settings/Reset,Retract lens on power off,,,,,,\r
Still Photo Shooting,Custom Functions,Various settings/Reset,Add IPTC information,,,,,,\r
Still Photo Shooting,Custom Functions,Various settings/Reset,Clear all Custom Func. (C.Fn),,,,,,\r
Still Photo Shooting,<i name="star"/>My Menu,My Menu management,Add My Menu tab,,,,,,\r
Still Photo Shooting,<i name="star"/>My Menu,My Menu management,Delete all My Menu tabs,,,,,,\r
Still Photo Shooting,<i name="star"/>My Menu,My Menu management,Delete all items,,,,,,\r
Still Photo Shooting,<i name="star"/>My Menu,My Menu management,Menu display,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Movie rec. size,,,,,,With [: Main rec. format] set to [RAW] () Mainly for cinematic purposes. (23.98 fps) is available when [: System frequency] is set to [59.94Hz:NTSC]. Test cards by recording a few movies to make sure they can record correctly at your specified size ().\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Movie rec. size,50.00 Hz: PAL,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Movie rec. size,/,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Movie rec. size,59.94Hz: NTSC,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,High Frame Rate,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,,,,,,You can specify the format of movie files recorded. Select [: Main rec. format] (). XF-HEVC S can be used to record 10-bit YCC 4:2:2 signals.\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,XF-AVC S YCC420 8bit,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,"XF-AVC S YCC420 8bit XF-AVC S YCC422 10bit",,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,XF-AVC S YCC422 10bit,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,Recording Format,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,"3840×2160 1920×1080",,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,RAW,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,XF-HEVC S YCC422 10bit,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,XF-HEVC S YCC420 10bit,,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Main rec. format,"XF-HEVC S YCC422 10bit XF-HEVC S YCC420 10bit",,,,,\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Movie cropping,,,,,,"With RF or EF lenses, you can record movies cropped around the center of the image area, as if captured with a telephoto lens."\r
Movie Recording,<i name="camera"/>Camera,Image quality/size,Dual shooting (still&movie),,,,,,Select [: Dual shooting (still&movie)] ().\r
Movie Recording,<i name="camera"/>Camera,Sound-rec. settings,Sound recording,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Sound-rec. settings,Audio format,,,,,,You can choose the audio format used for sound in movie recording.\r
Movie Recording,<i name="camera"/>Camera,Sound-rec. settings,Audio settings,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Sound-rec. settings,Audio Status,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Exposure,Exposure comp.,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Exposure,ISO speed settings,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Exposure,HF anti-flicker shooting,,,,,,"Select [: HF anti-flicker shooting] (, ). Switch to the indicated shutter speed."\r
Movie Recording,<i name="camera"/>Camera,Exposure,Av 1/8-stop incr.,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Exposure,Auto slow shutter,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Exposure,Detect priority AE while AF,,,,,,"Select [: Detect priority AE while AF] (, )."\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,,,,,,Available when the [Gamma/Color Space] gamma is set to [HLG] and color space is [BT.2020] Sets the center frequency for edge enhancement Settings to correct image areas with certain color characteristics\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Area B Revision Phase,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,"Color Matrix Tuning Fine-tuning of image color tones",,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Coring Level,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Detail Frequency,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,BT.709 Standard,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Chroma,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Canon Log 2,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Y Level,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Gain,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Off,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,C3: Canon Log 3,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Delete,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Over 100%,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,C1: Canon 709,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Custom Picture,Canon 709,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Picture Style Selection,,,,,,"For vivid blues and greens, and very sharp and crisp images. Effective for impressive landscapes."\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Clarity,,,,,,Set toward the negative end to make images look softer or toward the positive end for a sharper appearance.\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,HDR shooting (PQ),,,,,,"Select [: HDR shooting (PQ)] (, )."\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,HDR Movie Mode,,,,,,This setting is available when [: HDR shooting (PQ)] is set to [HDR PQ].\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Auto Lighting Optimizer,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Color/tone/Dynamic range,Highlight tone priority,,,,,,\r
Movie Recording,<i name="camera"/>Camera,White balance/Quality correction,White balance,,,,,,"With [] (Ambience priority), you can slightly increase the intensity of the image's warm color cast when shooting a tungsten-light scene. If you select [] (White priority), you can reduce the intensity of the image's warm color cast. A value can be set representing the white balance color temperature."\r
Movie Recording,<i name="camera"/>Camera,White balance/Quality correction,White balance,Display,,,,,\r
Movie Recording,<i name="camera"/>Camera,White balance/Quality correction,Set Custom WB,,,,,,\r
Movie Recording,<i name="camera"/>Camera,White balance/Quality correction,WB correction,,,,,,"Set the white balance bracketing amount. Sample setting: B/A bias, ±3 levels"\r
Movie Recording,<i name="camera"/>Camera,White balance/Quality correction,Lens aberration correction,,,,,,\r
Movie Recording,<i name="camera"/>Camera,White balance/Quality correction,High ISO speed NR,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Various shooting,Pre-recording set.,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Various shooting,Time-lapse movie,,,,,,"With [Main rec. format] set to [XF-HEVC S YCC422 10bit] With [Main rec. format] set to [XF-AVC S YCC422 10bit] or [XF-AVC S YCC420 8bit] Indicates the time required to shoot the set number of shots with the set interval. If it exceeds 24 hours, “*** days” will be displayed."\r
Movie Recording,<i name="camera"/>Camera,Various shooting,Time-lapse movie,Test-recording screen,,,,,\r
Movie Recording,<i name="camera"/>Camera,Various shooting,Time-lapse movie,Recording standby,,,,,\r
Movie Recording,<i name="camera"/>Camera,Various shooting,Time-lapse movie,During time-lapse Movie Recording,<i name="camera"/>Camera,,,,,\r
Movie Recording,<i name="camera"/>Camera,Shutter control/Assist shooting,Movie self-timer,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Shutter control/Assist shooting,Tally lamp,,,,,,The tally lamp lights up or blinks to indicate camera status.\r
Movie Recording,<i name="camera"/>Camera,Shutter control/Assist shooting,Tally lamp,Blinking slowly,,,,,\r
Movie Recording,<i name="camera"/>Camera,Shutter control/Assist shooting,Tally lamp,Blinking rapidly,,,,,\r
Movie Recording,<i name="camera"/>Camera,Shutter control/Assist shooting,IS (Image Stabilizer) mode,,,,,,Select [: IS (Image Stabilizer) mode] (). Select [: IS (Image Stabilizer) mode] (). Camera shake will be corrected. The image will be slightly magnified.\r
Movie Recording,<i name="camera"/>Camera,Shutter control/Assist shooting,Auto level,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Shutter control/Assist shooting,Customize Quick Controls,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Shutter control/Assist shooting,Metering timer,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,Metadata,,,,,,You can clear (delete) metadata registered to the camera. You can review details of the metadata registered to the camera.\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,Time code,,,,,,"To set up the time code, use [: Time code]. You can set the initial time of the time code. Time codes can be added to movies as you record them to an external device via HDMI."\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,Time code,Disable,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,HDR/C.Log View Assist.,,,,,,"Select [: HDR/C.Log View Assist.] (, )."\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,False color set.,,,,,,Select [: False color set.] ().\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,False color set.,Blue,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,False color set.,Green,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,False color set.,Red,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,False color set.,Neutral color,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,False color set.,Yellow,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,False color set.,Pink,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,False color set.,Purple,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,Zebra settings,,,,,,"To simplify exposure adjustment before or during Movie Recording,<i name="camera"/>Camera, you can display a striped pattern over or around image areas of a specified brightness."\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,Shooting info. disp.,,,,,,Select [: Shooting info. disp.] (). Select [: Shooting info. disp.] (). Select [: Shooting info. disp.] ().\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,Quick Ctrl screen,,,,,,Select [: Quick Ctrl screen] ().\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,VF display format,,,,,,"Select [: VF display format] (, )."\r
Movie Recording,<i name="camera"/>Camera,Assist shooting,Reverse display,,,,,,"Select [: Reverse display] (, )."\r
Movie Recording,<i name="camera"/>Camera,Assist shooting/HDMI,Auto pwr off temp.,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting/HDMI,Standby: Low res.,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting/HDMI,Shutdown warning guidance,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting/HDMI,HDMI display,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting/HDMI,HDMI RAW output,,,,,,\r
Movie Recording,<i name="camera"/>Camera,Assist shooting/HDMI,HDMI output range for C. Log,,,,,,Select [: HDMI output range for C. Log] (). Narrow-range (video range) output is used.\r
Movie Recording,AF,AF operation/area,Movie Servo AF,,,,,,Set the still photo shooting/movie recording switch to .\r
Movie Recording,AF,AF operation/area,AF area,,,,,,\r
Movie Recording,AF,AF operation/area,Focus mode,,,,,,"Set the lens's focus mode switch to . Select [: MF peaking settings] (, )."\r
Movie Recording,AF,Subject detection,Subject to detect,,,,,,\r
Movie Recording,AF,Subject detection,Eye detection,,,,,,\r
Movie Recording,AF,Subject detection,Register people priority,,,,,,"Select [: Register people priority] (, ). JPEG or HEIF images can be used. Process any RAW images you will use into JPEGs or HEIFs before saving them to the card. Display when registered faces are detected"\r
Movie Recording,AF,Subject detection,Switching tracked subjects,,,,,,\r
Movie Recording,AF,Servo AF character.,Movie Servo AF speed,,,,,,\r
Movie Recording,AF,Servo AF character.,Movie Servo AF track sens.,,,,,,\r
Movie Recording,AF,Customize AF operation/Customized controls,Lens drive when AF impossible,,,,,,\r
Movie Recording,AF,Customize AF operation/Customized controls,Limit AF areas,,,,,,\r
Movie Recording,AF,Customize AF operation/Customized controls,Limit subject to detect,,,,,,\r
Movie Recording,AF,Customize AF operation/Customized controls,L/R eye detection,,,,,,\r
Movie Recording,AF,MF related,MF peaking settings,,,,,,\r
Movie Recording,AF,MF related,Focus guide,,,,,,\r
Movie Recording,AF,MF related,Lens electronic MF,,,,,,\r
Movie Recording,Playback,File operation,Protect images,,,,,,\r
Movie Recording,Playback,File operation,Erase images,,,,,,\r
Movie Recording,Playback,File operation,Rotate stills,,,,,,\r
Movie Recording,Playback,File operation,Change mov rotate info,,,,,,Select [: Change mov rotate info] ().\r
Movie Recording,Playback,File operation,Rating,,,,,,"Next, select the last image (end point). A checkmark [] will be appended to all the images within the range between first and last images. Turn the dial to select a rating mark, then select [OK]."\r
Movie Recording,Playback,File operation,Protect when setting the rating,,,,,,Select [: Protect when setting the rating] (). Select the rating levels to protect.\r
Movie Recording,Playback,File operation,Image copy,,,,,,\r
Movie Recording,Playback,File operation,Print order,,,,,,"Select and specify the images individually. Press to print a copy of the displayed image. By turning the dial, you can set a print quantity of up to 99 copies. Press to add a checkmark [] to the box. The image will be included in the index print."\r
Movie Recording,Playback,File operation,Print order,File No.,,,,,\r
Movie Recording,Playback,File operation,Print order,Date,,,,,\r
Movie Recording,Playback,File operation,Print order,Off,,,,,\r
Movie Recording,Playback,Image processing,RAW image processing,,,,,,"Select [: RAW image processing] (). JPEG or HEIF images at the specified aspect ratio are created when you process RAW images shot with [: Cropping/aspect ratio] () set to [1:1 (aspect ratio)], [4:3 (aspect ratio)], or [16:9 (aspect ratio)]. You can adjust the image brightness up to ±1 stop in 1/3-stop increments."\r
Movie Recording,Playback,Image processing,In-Camera Upscaling,,,,,,\r
Movie Recording,Playback,Image processing,Resize,,,,,,\r
Movie Recording,Playback,Image processing,Cropping,,,,,,"Turn the dial to resize the cropping frame size. The smaller the cropping frame, the more magnified the cropped image will look. Check the image area to be cropped."\r
Movie Recording,Playback,Image processing,HEIF→JPEG conversion,,,,,,\r
Movie Recording,Playback,Playback method,Slide show,,,,,,Specify the images to be played back.\r
Movie Recording,Playback,Playback method,VR preview,,,,,,\r
Movie Recording,Playback,Playback method,VR preview,Play,,,,,\r
Movie Recording,Playback,Playback method,VR preview,Previous frame,,,,,\r
Movie Recording,Playback,Playback method,VR preview,Next frame,,,,,\r
Movie Recording,Playback,Playback method,VR preview,Skip forward,,,,,\r
Movie Recording,Playback,Playback method,VR preview,Skip backward,,,,,\r
Movie Recording,Playback,Playback method,Set image search conditions,,,,,,"Read the message displayed, then select [OK]. For movies, searches apply to files in the XFVC or CRM folder."\r
Movie Recording,Playback,Playback method,Set image search conditions,Folder,,,,,\r
Movie Recording,Playback,Playback method,Set image search conditions,Type of file (2),,,,,\r
Movie Recording,Playback,Playback method,Set image search conditions,Rating,,,,,\r
Movie Recording,Playback,Playback method,Set image search conditions,Date,,,,,\r
Movie Recording,Playback,Playback method,Set image search conditions,Type of file (1),,,,,\r
Movie Recording,Playback,Playback method,Set image search conditions,Protect,,,,,\r
Movie Recording,Playback,Playback method,View from last seen,,,,,,Select [: View from last seen] ().\r
Movie Recording,Playback,Playback method,Magnification,,,,,,You can magnify display of your captured images. Magnified view starts from the center of the screen.\r
Movie Recording,Playback,Playback method,Blur/Out-of-Focus image detection,,,,,,[] (little blurring/lack of focus) is displayed for images that are fairly clear and in focus when viewed with the naked eye at actual size.\r
Movie Recording,Playback,Various settings,Playback information display,,,,,,Add a checkmark [] next to the number of screens to display.\r
Movie Recording,Playback,Various settings,Highlight alert,,,,,,\r
Movie Recording,Playback,Various settings,AF point disp.,,,,,,\r
Movie Recording,Playback,Various settings,Playback grid,,,,,,\r
Movie Recording,Playback,Various settings,Movie play count,,,,,,Select [: Movie play count] ().\r
Movie Recording,Playback,Various settings,Memo audio quality,,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,,,,,,"Select to name sets of settings. Use the virtual keyboard () to enter text. Change, delete, or check the settings as needed. Change, delete, or check the settings as needed."\r
Movie Recording,Communication Functions,Network settings,Network settings,8021X_R.CRT,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,8021X_C.CRT,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,8021X_C.PEM,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,EAP-TTLS,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,8021X_C.P12,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,Private key,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,8021X_C.PFX,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,PEAP,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,Client certificate,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,Root certificate,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,EAP-TLS,,,,,\r
Movie Recording,Communication Functions,Network settings,Network settings,8021X_R.PEM,,,,,\r
Movie Recording,Communication Functions,Network settings,Airplane mode,,,,,,\r
Movie Recording,Communication Functions,Network settings,Bluetooth settings,,,,,,\r
Movie Recording,Communication Functions,Network settings,Camera name,,,,,,\r
Movie Recording,Communication Functions,Network settings,Error details,,,,,,\r
Movie Recording,Communication Functions,Network settings,MAC address,,,,,,\r
Movie Recording,Communication Functions,Network function,Transfer images to FTP server,,,,,,"For secure FTP transfer using a root certificate, import a root certificate (). Select [: Transfer images to FTP server] (). If you have selected [Login password], enter the name and password."\r
Movie Recording,Communication Functions,Network function,Connect to EOS Utility,,,,,,"You can use the camera to transfer images to a computer (). You can specify the format of images to transfer to a computer (). For RAW+JPEG or RAW+HEIF images, you can specify which image to transfer."\r
Movie Recording,Communication Functions,Network function,Upload to image.canon,,,,,,Use the app to scan the QR code. You can select the type of movies uploaded. You can select the type of still photos uploaded.\r
Movie Recording,Communication Functions,Network function,Sync time between cameras,,,,,,"First, set up the camera to use as a sender. Select [: Sync time between cameras] (). Set up cameras to use as receivers."\r
Movie Recording,Communication Functions,Network function,Connect to smartphone(tablet),,,,,,"In [Size to send], you can select the size of images to send."\r
Movie Recording,Communication Functions,Network function,Live streaming,,,,,,\r
Movie Recording,Communication Functions,Network function,Connect to Wireless Remote,,,,,,Set up the camera for remote shooting.\r
Movie Recording,Communication Functions,Network function,Camera Control API,,,,,,Select items to check or change. You can change the TCP/IPv4 settings. You can change the TCP/IPv6 settings.\r
Movie Recording,Communication Functions,Various settings,GPS device settings,,,,,,Select [: GPS device settings] (). Update the GP-E2 firmware to Ver. 2.0.0 or later. Select [: GPS device settings] ().\r
Movie Recording,Communication Functions,Various settings,Choose USB connection app,,,,,,"Audio output is LPCM/16bit/2CH (channels 1 and 2), even with [: Audio format] set to [LPCM/24bit/4CH]. Select if you will use an iOS app."\r
Movie Recording,Communication Functions,Various settings,Save/load comm. settings on card,,,,,,\r
Movie Recording,Communication Functions,Various settings,Reset communication settings,,,,,,\r
Movie Recording,Set-up,File/card setting,Selecting Cards for Recording/Playback,,,,,,Select [: Record func+card/folder sel.] (). Set the recording method for still photos. Records still photos to the card selected in [ Record/play].\r
Movie Recording,Set-up,File/card setting,File numbering,,,,,,"Captured still photos saved in a folder are assigned a file number from 0001 to 9999. You can change how the image files are numbered. File numbering is reset to 0001 if you replace a card, create a folder, or switch the target card (as in →). This is useful if you want to organize images by cards or folders."\r
Movie Recording,Set-up,File/card setting,Clip Number,,,,,,Recorded movies saved in a folder are assigned a clip number from 001 to 999. You can change how clips are numbered. Clip numbering is reset to 001 if you replace a card or switch the target card (as in →). This is useful if you want to organize movies by cards.\r
Movie Recording,Set-up,File/card setting,File name,,,,,,"You can set how movie files (clips) are named. A 3-digit number from 001 to 999 preceded by C, as in C001–C999. After C999, D is used at the beginning."\r
Movie Recording,Set-up,File/card setting,File name,(5),,,,,\r
Movie Recording,Set-up,File/card setting,File name,(6),,,,,\r
Movie Recording,Set-up,File/card setting,File name,(2),,,,,\r
Movie Recording,Set-up,File/card setting,File name,(3),,,,,\r
Movie Recording,Set-up,File/card setting,File name,(8),,,,,\r
Movie Recording,Set-up,File/card setting,File name,(4),,,,,\r
Movie Recording,Set-up,File/card setting,File name,(9),,,,,\r
Movie Recording,Set-up,File/card setting,File name,(7),,,,,\r
Movie Recording,Set-up,File/card setting,File name,(1),,,,,\r
Movie Recording,Set-up,File/card setting,Format card,,,,,,\r
Movie Recording,Set-up,File/card setting,Auto rotate,,,,,,\r
Movie Recording,Set-up,File/card setting,Add  rotate info,,,,,,Select [: Add rotate info] ().\r
Movie Recording,Set-up,Country/Area/Guidance/Audio settings,Date/Time/Zone,,,,,,\r
Movie Recording,Set-up,Country/Area/Guidance/Audio settings,Language,,,,,,\r
Movie Recording,Set-up,Country/Area/Guidance/Audio settings,System frequency,,,,,,\r
Movie Recording,Set-up,Country/Area/Guidance/Audio settings,Help text size,,,,,,\r
Movie Recording,Set-up,Country/Area/Guidance/Audio settings,Beep,,,,,,\r
Movie Recording,Set-up,Country/Area/Guidance/Audio settings,Volume,,,,,,\r
Movie Recording,Set-up,Country/Area/Guidance/Audio settings,Audio monitor,,,,,,\r
Movie Recording,Set-up,Customize display,Screen brightness,,,,,,\r
Movie Recording,Set-up,Customize display,Viewfinder brightness,,,,,,\r
Movie Recording,Set-up,Customize display,Screen/viewfinder color tone,,,,,,\r
Movie Recording,Set-up,Customize display,Fine-tune VF color tone,,,,,,\r
Movie Recording,Set-up,Customize display,Screen/viewfinder display,,,,,,"You can specify to use the screen or viewfinder for display, to avoid accidentally activating the viewfinder sensor when the screen is open. Always use the screen for display when it is open. Use the screen for display when it is closed and facing you, and switch to the viewfinder when you look through it."\r
Movie Recording,Set-up,Customize display,UI magnification,,,,,,You can magnify menu screens by double-tapping with two fingers. Double-tap again to restore the original display size.\r
Movie Recording,Set-up,Customize display,HDMI resolution,,,,,,\r
Movie Recording,Set-up,Various settings,Cooling fan settings,,,,,,Select [: Cooling fan settings] ().\r
Movie Recording,Set-up,Various settings,Shutter at shutdown,,,,,,You can set whether to leave the shutter open or close it when the camera's power switch is set to . Select [: Shutter at shutdown] (). Leaves the shutter open. This keeps camera quieter when the power switch is set to or . Useful when you want to shoot quietly.\r
Movie Recording,Set-up,Various settings,Sensor cleaning,,,,,,Always use a fully charged battery.\r
Movie Recording,Set-up,Various settings,Manage password,,,,,,"Reenter the password, then select [OK]."\r
Movie Recording,Set-up,Various settings,Power saving,,,,,,\r
Movie Recording,Set-up,Reset/All settings,Reset camera,,,,,,\r
Movie Recording,Set-up,Reset/All settings,Custom shooting mode (C1-C3),,,,,,\r
Movie Recording,Set-up,Reset/All settings,Save/load cam settings on card,,,,,,\r
Movie Recording,Set-up,Various settings,Battery info.,,,,,,\r
Movie Recording,Set-up,Various settings,Copyright information,,,,,,\r
Movie Recording,Set-up,Various settings,Show log,,,,,,\r
Movie Recording,Set-up,Various settings,Manual/software URL,,,,,,\r
Movie Recording,Set-up,Various settings,Certification Logo Display,,,,,,\r
Movie Recording,Set-up,Various settings,Firmware,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (still photo shooting),Customize buttons for shooting,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (still photo shooting),Customize dials/control ring,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (still photo shooting),direction to set Tv/Av,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (still photo shooting),direction to set Tv/Av,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (still photo shooting),Switch / when shooting,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (still photo shooting),Touch Shutter,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (still photo shooting),Multi function lock,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (movie recording),Customize buttons for shooting,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (movie recording),Shutter btn function for movies,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (movie recording),Customize dials/control ring,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (movie recording),direction to set Tv/Av,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (movie recording),direction to set Tv/Av,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (movie recording),Switch / when shooting,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting (movie recording),Multi function lock,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting,Touch & drag AF settings,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting,AF area selection control,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting,sensitivity- AF pt select,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting,Focus/control ring,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting,Focus ring rotation,,,,,,\r
Movie Recording,Control Customization,Customized controls when shooting,RF lens MF focus ring sensitivity,,,,,,\r
Movie Recording,Control Customization,Customized controls when playback,Customize buttons for playback,,,,,,\r
Movie Recording,Control Customization,Customized controls when playback,Image jump w/,,,,,,\r
Movie Recording,Control Customization,Customized controls when playback,Img jump w/+,,,,,,\r
Movie Recording,Control Customization,Customized controls when playback,Switch / during playback,,,,,,\r
Movie Recording,Control Customization,Customized controls/Reset,Eye control,,,,,,"With [: AF area] set to [Whole area AF], the camera focuses in the area near the pointer. Choose [Orange], [Purple], or [White] as the pointer color. Choose [] or [] as the style of pointer displayed."\r
Movie Recording,Control Customization,Customized controls/Reset,Touch control,,,,,,\r
Movie Recording,Control Customization,Customized controls/Reset,Clear all customized controls,,,,,,\r
Movie Recording,Custom Functions,Shooting mode/Exposure,Restrict shooting modes,,,,,,\r
Movie Recording,Custom Functions,Shooting mode/Exposure,Exposure level increments,,,,,,\r
Movie Recording,Custom Functions,Shooting mode/Exposure,ISO speed setting increments,,,,,,\r
Movie Recording,Custom Functions,Shooting mode/Exposure,Speed from metering/ISO Auto,,,,,,\r
Movie Recording,Custom Functions,Shooting mode/Exposure,Bracketing auto cancel,,,,,,\r
Movie Recording,Custom Functions,Shooting mode/Exposure,Bracketing sequence,,,,,,\r
Movie Recording,Custom Functions,Shooting mode/Exposure,Number of bracketed shots,,,,,,\r
Movie Recording,Custom Functions,Exposure,Safety shift,,,,,,\r
Movie Recording,Custom Functions,Exposure,Same expo. for new aperture,,,,,,\r
Movie Recording,Custom Functions,Exposure,AE lock meter. mode after focus,,,,,,\r
Movie Recording,Custom Functions,Exposure,Set shutter speed range,,,,,,\r
Movie Recording,Custom Functions,Exposure,Set aperture range,,,,,,\r
Movie Recording,Custom Functions,Exposure,AE Microadjustment,,,,,,\r
Movie Recording,Custom Functions,Exposure,FE Microadjustment,,,,,,\r
Movie Recording,Custom Functions,Drive,Continuous shooting speed,,,,,,\r
Movie Recording,Custom Functions,Drive,Limit continuous shot count,,,,,,\r
Movie Recording,Custom Functions,Various settings/Reset,Add cropping information,,,,,,\r
Movie Recording,Custom Functions,Various settings/Reset,Default Erase option,,,,,,\r
Movie Recording,Custom Functions,Various settings/Reset,Av setting without lens,,,,,,\r
Movie Recording,Custom Functions,Various settings/Reset,Release shutter w/o lens,,,,,,\r
Movie Recording,Custom Functions,Various settings/Reset,Retract lens on power off,,,,,,\r
Movie Recording,Custom Functions,Various settings/Reset,Add IPTC information,,,,,,\r
Movie Recording,Custom Functions,Various settings/Reset,Clear all Custom Func. (C.Fn),,,,,,\r
Movie Recording,<i name="star"/>My Menu,My Menu management,Add My Menu tab,,,,,,\r
Movie Recording,<i name="star"/>My Menu,My Menu management,Delete all My Menu tabs,,,,,,\r
Movie Recording,<i name="star"/>My Menu,My Menu management,Delete all items,,,,,,\r
Movie Recording,<i name="star"/>My Menu,My Menu management,Menu display,,,,,,\r
camera_menu_config\r
display_name,Canon EOS R5 Mark II\r
css_file,canonR5ii\r
\r
`,hf=`level0,level1,level2,level3,level4,level5,level6,level7,Comment/help\r
Playback menu,,Delete,,,,,,"Delete multiple images. For more information, see “Deleting Multiple Pictures” (Deleting Multiple Pictures)"\r
Playback menu,,Delete,Selected images,,,,,Delete selected pictures\r
Playback menu,,Delete,Images shot on selected dates,,,,,"Delete multiple images. For more information, see “Deleting Multiple Pictures” (Deleting Multiple Pictures). Delete selected pictures."\r
Playback menu,,Delete,All images,,,,,"Delete multiple images. For more information, see “Deleting Multiple Pictures” (Deleting Multiple Pictures). Delete selected pictures."\r
Playback menu,,Playback menu, folder,,,,,",,Choose a folder for Playback menu,. Pictures in all folders with the selected name will be visible during Playback menu,. Folders can be renamed using the [Storage folder] > [Rename] option in the photo shooting menu."\r
Playback menu,,Playback menu, folder,Storage folder,,,,",,Choose a folder for Playback menu,. Pictures in all folders with the selected name will be visible during Playback menu,. Folders can be renamed using the [Storage folder] > [Rename] option in the photo shooting menu."\r
Playback menu,,Playback menu, folder,All,,,,",,Pictures in all folders will be visible during Playback menu,."\r
Playback menu,,Playback menu, folder,Current,,,,",,Only pictures in the current folder will be visible during Playback menu,."\r
Playback menu,,Playback menu, display options,,,,,",,Choose whether the focus points used when the photograph was taken are displayed during full-frame Playback menu,. You can also choose the types of photo information that can be viewed during full-frame Playback menu,."\r
Playback menu,,Dual-format recording PB slot,,,,,,"Choose the slot from which dual-format pictures recorded with [RAW primary - JPEG secondary] selected for [Secondary slot function] in the photo shooting menu are played back. D The Playback menu, Menu: Managing Images."\r
Playback menu,,Image review,,,,,,Choose whether pictures are automatically displayed in the monitor immediately after shooting.\r
Playback menu,,Image review,On,,,,,Pictures appear in the currently-selected display (monitor or viewfinder) as they are taken.\r
Playback menu,,Image review,On (monitor only),,,,,Pictures are displayed after shooting only when the monitor is used to frame shots. Pictures are not displayed in the viewfinder when [Viewfinder only] is selected for monitor mode.\r
Playback menu,,Image review,Off,,,,,Pictures can only be viewed by pressing the K button.\r
Playback menu,,After delete,,,,,,Choose the picture displayed after an image is deleted.\r
Playback menu,,After delete,Show next,,,,,Choose the picture displayed after an image is deleted. The following picture is displayed.\r
Playback menu,,After delete,Show previous,,,,,Choose the picture displayed after an image is deleted. The following picture is displayed.\r
Playback menu,,After delete,Continue as before,,,,,"If you were scrolling through pictures in the order recorded, the following picture will be displayed as described for [Show next]. If you were scrolling through pictures in reverse order, the next picture will be displayed as described for [Show previous]"\r
Playback menu,,"After burst, show",,,,,,Choose whether the photo displayed immediately after a burst of shots is taken in continuous mode is the first or last shot in the burst.\r
Playback menu,,Rotate tall,,,,,,"When [On] is selected, “tall” (portrait-orientation) pictures will be automatically rotated for display during Playback menu,. Images are not rotated automatically during image review even when [On] is selected for [Rotate tall]."\r
Playback menu,,Copy image(s),,,,,,Copy pictures from one memory card to another when two memory cards are inserted. Choose the card from which pictures will be copied.\r
Playback menu,,Copy image(s),Select source,,,,,Choose the card from which pictures will be copied.\r
Playback menu,,Copy image(s),Select image(s),,,,,Select pictures to be copied.\r
Playback menu,,Copy image(s),Select destination folder,,,,,Select the destination folder on the remaining card (the card not selected for [Select source])\r
Playback menu,,Copy image(s),Copy image(s)?,,,,,Copy the pictures.\r
Playback menu,,Slide show,,,,,,"View a slide show; pictures are displayed in the order recorded. The pictures in the folder currently selected for [Playback menu, folder] (Playback menu, Folder) will be displayed one-by-one in the order recorded."\r
Playback menu,,Slide show,Start,,,,,Start the slide show.\r
Playback menu,,Slide show,Image type,,,,,Choose the type of picture displayed. Select to view only pictures with selected ratings. Highlight ratings and press 2 to select (M) or deselect (U)\r
Playback menu,,Slide show,Frame interval,,,,,Choose how long each picture will be displayed.\r
Playback menu,,Rating,,,,,,Highlight pictures using the multi selector 4 or 2\r
Photo shooting menu,Reset photo shooting menu,,,,,,,Restore photo shooting menu options to their default values. Photo shooting menu reset is not available while a multiple exposure is in progress.\r
Photo shooting menu,Storage folder,,,,,,,Choose the folder in which subsequent pictures will be stored.\r
Photo shooting menu,Storage folder,Select folder by number,,,,,,","\r
Photo shooting menu,Storage folder,Select folder from list,,,,,,","\r
Photo shooting menu,File naming,,,,,,,Pictures are saved using file names consisting of “DSC_” followed by a four-digit number and a three-letter extension. [File naming] is used to select three letters to replace the “DSC” portion of the file name.\r
Photo shooting menu,Primary slot selection,,,,,,,Choose the slot that serves as the primary slot when memory cards are inserted in both the CFexpress/XQD and SD memory card slots\r
Photo shooting menu,Primary slot selection,The CFexpress/XQD memory card slot serves as the primary slot.,,,,,,\r
Photo shooting menu,Primary slot selection,The SD memory card slot serves as the primary slot.,,,,,,\r
Photo shooting menu,Secondary slot function,,,,,,,Video Tutorial: Dual Card Slots Choose the role played by the card in the secondary slot when two memory cards are inserted in the camera.\r
Photo shooting menu,Secondary slot function,Overflow,,,,,,Video Tutorial: Dual Card Slots Choose the role played by the card in the secondary slot when two memory cards are inserted in the camera.\r
Photo shooting menu,Secondary slot function,Backup,,,,,,Video Tutorial: Dual Card Slots Choose the role played by the card in the secondary slot when two memory cards are inserted in the camera.\r
Photo shooting menu,Secondary slot function,RAW primary - JPEG secondary,,,,,,"NEF (RAW) copies of photos taken at settings of NEF (RAW) + JPEG are recorded only to the card in the primary slot, JPEG copies only to the card in the secondary slot. Pictures taken at other image quality settings are recorded twice at the same setting, once to the card in the primary slot and again to the card in the secondary slot"\r
Photo shooting menu,Choose image area,,,,,,,Record pictures in FX format with an angle of view equivalent to a 35 mm format camera. Use this option when taking photographs with NIKKOR lenses for 35 mm format cameras\r
Photo shooting menu,Choose image area,FX (36×24),,,,,,Record pictures in FX format with an angle of view equivalent to a 35 mm format camera. Use this option when taking photographs with NIKKOR lenses for 35 mm format cameras\r
Photo shooting menu,Choose image area,DX (24×16),,,,,,"Images are recorded in DX format. To calculate the approximate focal length of the lens in 35 mm format, multiply by 1.5. Image-area selection is fixed at [DX (24×16)] when a DX lens is attached"\r
Photo shooting menu,Choose image area,5:4 (30×24),,,,,,Pictures are recorded with an aspect ratio of 5:4. Available only with Z 7II\r
Photo shooting menu,Choose image area,1:1 (24×24),,,,,,Pictures are recorded with an aspect ratio of 1:1\r
Photo shooting menu,Choose image area,16:9 (36×20),,,,,,Pictures are recorded with an aspect ratio of 16:9\r
Photo shooting menu,Image quality,,,,,,,"Choose a file format for photographs. For more information, see “The i Menu” under “Image Quality” (Image Quality)"\r
Photo shooting menu,Image size,,,,,,,"Choose the size, in pixels, of pictures recorded with the camera. Select [JPEG] to choose the size of JPEG images, [NEF (RAW)] to choose the size of NEF (RAW) images. Note that image size varies with the option selected for image area."\r
Photo shooting menu,NEF (RAW) recording,,,,,,,NEF (RAW) images are recorded at a bit depth of 12 bits. NEF (RAW) images are recorded at a bit depth of 14 bits. Files recorded at a bit depth of 14 bits contain more color data than pictures recorded using [12-bit]. Files recorded at a bit depth of 14 bits are also larger than pictures recorded using [12-bit].\r
Photo shooting menu,NEF (RAW) recording,Lossless compressed,,,,,,NEF pictures are compressed using a reversible algorithm. The resulting files are about 60% to 80% the size of pictures recorded using [Uncompressed]. Image quality is the same as pictures recorded using [Uncompressed]\r
Photo shooting menu,NEF (RAW) recording,Compressed,,,,,,NEF images are compressed using a non-reversible algorithm. The resulting files are about 45% to 65% the size of pictures recorded using [Uncompressed]. Image quality is nearly the same as pictures recorded using [Uncompressed]\r
Photo shooting menu,NEF (RAW) recording,Lossless compressed,,,,,,NEF pictures are not compressed; the resulting files are larger than those for pictures recorded using or [Compressed]\r
Photo shooting menu,NEF (RAW) recording,12-bit,,,,,,NEF (RAW) images are recorded at a bit depth of 12 bits. NEF (RAW) images are recorded at a bit depth of 14 bits. Files recorded at a bit depth of 14 bits contain more color data than pictures recorded using [12-bit]. Files recorded at a bit depth of 14 bits are also larger than pictures recorded using [12-bit].\r
Photo shooting menu,NEF (RAW) recording,14-bit,,,,,,NEF (RAW) images are recorded at a bit depth of 14 bits. Files recorded at a bit depth of 14 bits contain more color data than pictures recorded using [12-bit]. Files recorded at a bit depth of 14 bits are also larger than pictures recorded using [12-bit]\r
Photo shooting menu,ISO sensitivity settings,,,,,,,"Choose from the following settings.Z 7II: Choose from settings of ISO 64 to 25600; the camera also supports settings below ISO 64 by about 0.3, 0.5, 0.7, and 1 EV (ISO 32 equivalent) and above ISO 25600 by"\r
Photo shooting menu,ISO sensitivity settings,ISO sensitivity,,,,,,"Choose from settings of ISO 100 to 51200; the camera also supports settings below ISO 100 by about 0.3, 0.5, 0.7, and 1 EV (ISO 50 equivalent) and above ISO 51200 by about 0.3, 0.5, 0.7, 1, and 2 EV (ISO 204800 equivalent).Auto offers an ISO AUTO option."\r
Photo shooting menu,ISO sensitivity settings,Auto ISO sensitivity control,,,,,,"Highlight [On] and press J to enable auto ISO sensitivity control. If [Off] is selected, [ISO sensitivity] will remain fixed at the value selected by the user."\r
Photo shooting menu,ISO sensitivity settings,Auto ISO sensitivity control,On,,,,,","\r
Photo shooting menu,ISO sensitivity settings,Auto ISO sensitivity control,Off,,,,,","\r
Photo shooting menu,ISO sensitivity settings,Auto ISO sensitivity control,Maximum sensitivity,,,,,Choose an upper limit for ISO sensitivity to prevent it being raised too high.\r
Photo shooting menu,ISO sensitivity settings,Auto ISO sensitivity control,Maximum sensitivity with flash,,,,,Choose the upper ISO sensitivity limit for photos taken using an optional flash unit.\r
Photo shooting menu,ISO sensitivity settings,Auto ISO sensitivity control,Minimum shutter speed,,,,,"Choose the shutter speed below which auto ISO sensitivity control will kick in to prevent underexposure in modes P and A. If [Auto] is selected, the camera will choose the minimum shutter speed based on lens focal length. For example, the camera will automatically choose faster minimum shutter speeds to prevent blur caused by camera shake when a long lens is attached.
To view auto shutter-speed selection options, highlight [Auto] and press 2. Auto shutter-speed selection can be fine-tuned by choosing faster or slower minimums. Faster settings can be used to reduce blur when photographing fast-moving subjects.
Shutter speeds may drop below the selected minimum if optimal exposure cannot be achieved at the ISO sensitivity chosen for [Maximum sensitivity]."\r
Photo shooting menu,White balance,,,,,,,"Adjust white balance to match the color of the light source. For more information, see “Basic Settings” under “White Balance” (White Balance) and “The i Menu” under “White Balance” (White Balance)"\r
Photo shooting menu,Set Picture Control,,,,,,,"Choose image processing (“Picture Control”) options for new photos according to the scene or your creative intent. For more information, see “The i Menu” under “Set Picture Control” (Set Picture Control)"\r
Photo shooting menu,Manage Picture Control,,,,,,,Save modified Picture Controls as custom Picture Controls (Manage Picture Control). 1 The Movie shooting menu: Movie Shooting Options.\r
Photo shooting menu,Manage Picture Control,"Create a new custom Picture Control based on an existing preset or custom Picture Control, or edit existing custom Picture Controls.",,,,,,\r
Photo shooting menu,Manage Picture Control,Rename custom Picture Controls.,,,,,,\r
Photo shooting menu,Manage Picture Control,Delete custom Picture Controls.,,,,,,\r
Photo shooting menu,Manage Picture Control,Copy custom Picture Controls to and from the memory card.,,,,,,\r
Photo shooting menu,Color space,,,,,,,"The color space determines the gamut of colors available for color reproduction. [sRGB] is recommended for general-purpose printing and display. With a broader gamut of colors than [sRGB], [Adobe RGB] is a better choice for professional publication and commercial printing. The selected color space may be overwritten when pictures are opened in third-party software. NX Studio can open pictures in the color space selected on the camera."\r
Photo shooting menu,Active D-Lighting,,,,,,,"Note that if [Same as photo settings] is selected for Active D-Lighting in the Movie shooting menu and [Auto] is selected in the photo shooting menu, movies will be shot at a setting equivalent to [Normal]. 1 The Movie shooting menu: Movie Shooting Options."\r
Photo shooting menu,Active D-Lighting,Auto,,,,,,"Note that if [Same as photo settings] is selected for Active D-Lighting in the Movie shooting menu and [Auto] is selected in the photo shooting menu, movies will be shot at a setting equivalent to [Normal]. 1 The Movie shooting menu: Movie Shooting Options."\r
Photo shooting menu,Active D-Lighting,Extra high,,,,,,"Choose the amount of Active D-Lighting performed from [Extra high], [High], [Normal], and [Low]"\r
Photo shooting menu,Active D-Lighting,High,,,,,,\r
Photo shooting menu,Active D-Lighting,Normal,,,,,,\r
Photo shooting menu,Active D-Lighting,Low,,,,,,\r
Photo shooting menu,Active D-Lighting,Off,,,,,,Active D-Lighting off\r
Photo shooting menu,Long exposure NR,,,,,,,"Long-exposure noise reduction is performed after the photo is taken. During processing, the message, “[Performing noise reduction]” will appear in the shooting display and “Job NR” will flash in the control panel. Pictures cannot be taken until the message has"\r
Photo shooting menu,Long exposure NR,Reduce noise in photographs taken at shutter speeds slower than 1 s.,,,,,,\r
Photo shooting menu,Long exposure NR,Long-exposure noise reduction disabled.,,,,,,\r
Photo shooting menu,High ISO NR,,,,,,,Photographs taken at high ISO sensitivities can be processed to reduce “noise” (randomly-spaced bright pixels)\r
Photo shooting menu,High ISO NR,High,,,,,,"Reduce noise in photographs taken at all ISO sensitivities. The higher the sensitivity, the greater the effect. Choose the amount of noise reduction performed from , [Normal], and [Low]"\r
Photo shooting menu,High ISO NR,Low,,,,,,Reduce “noise” (randomly-spaced bright pixels) in movies recorded at high ISO sensitivities (High ISO NR). 1 The Movie shooting menu: Movie Shooting Options.\r
Photo shooting menu,Vignette control,,,,,,,Reduce vignetting in movies. Select [Same as photo settings] to use the option currently selected for photos (Vignette Control). 1 The Movie shooting menu: Movie Shooting Options.\r
Photo shooting menu,Vignette control,High,,,,,,"Choose the amount of vignette control performed from (in order from high to low) [High], [Normal], and [Low]"\r
Photo shooting menu,Vignette control,Normal,,,,,,\r
Photo shooting menu,Vignette control,Low,,,,,,\r
Photo shooting menu,Vignette control,Vignette control disabled.,,,,,,\r
Photo shooting menu,Diffraction compensation,,,,,,,Select [On] to reduce diffraction at small apertures (high f-numbers)\r
Photo shooting menu,Auto distortion control,,,,,,,"Select [On] as required to reduce barrel distortion when shooting with wide-angle lenses and to reduce pin-cushion distortion when shooting with long lenses. Note that [On] may be selected automatically with some lenses, in which case this item will be"\r
Photo shooting menu,Flicker reduction shooting,,,,,,,"When [On] is selected, reduce the effects of flicker from such light sources as fluorescent or mercury-vapor lamps. Flicker can cause uneven exposure or (in photographs taken in continuous release modes) inconsistent exposure or coloration."\r
Photo shooting menu,Metering,,,,,,,"Metering determines how the camera sets exposure. For more information, see “The i Menu” under “Metering” (Metering)"\r
Photo shooting menu,Flash control,,,,,,,"Adjust settings for wireless remote flash units or optional flash units mounted on the camera accessory shoe. For information on adjusting settings for optional flash units mounted on the camera accessory shoe, see “On-Camera Flash Photography” (On-Camera Flash Photography)."\r
Photo shooting menu,Flash control,Flash output is adjusted automatically in response to shooting conditions.,,,,,,\r
Photo shooting menu,Flash control,Light from the flash is reflected from the subject to an auto external flash sensor and flash output adjusted automatically.,,,,,,\r
Photo shooting menu,Flash control,Choose the distance to the subject; flash output will be adjusted automatically.,,,,,,\r
Photo shooting menu,Flash control,Choose the flash level manually.,,,,,,\r
Photo shooting menu,Flash control,"The flash fires repeatedly while the shutter is open, producing a multiple-exposure effect.",,,,,,\r
Photo shooting menu,Flash control,Optical AWL,,,,,,The remote flash units are controlled using low-intensity flashes emitted by the master flash (Optical AWL)\r
Photo shooting menu,Flash control,Optical/radio AWL,,,,,,Choose this option when using both optically- and radio-controlled flash units (Optical/Radio AWL)\r
Photo shooting menu,Flash control,Radio AWL,,,,,,The remote flash units are controlled by radio signals from a WR-R10 attached to the camera (Radio AWL)\r
Photo shooting menu,Flash control,Remote flash photography disabled.,,,,,,\r
Photo shooting menu,Flash control,"Choose a separate flash control mode for each group of remote flash units (Group Flash, Group Flash).",,,,,,\r
Photo shooting menu,Flash control,"Choose the balance between groups A and B and adjust output for group C manually (Quick Wireless Control, Quick Wireless Control (SB-5000 Only)).",,,,,,\r
Photo shooting menu,Flash control,"The flash units fire repeatedly while the shutter is open, producing a multiple-exposure effect (Remote Repeating, Remote Repeating (SB-5000 Only)).",,,,,,\r
Photo shooting menu,Flash mode,,,,,,,"Choose a flash mode for optional flash units. For more information, see “On-Camera Flash Photography” under “Flash Modes” (Flash Modes)"\r
Photo shooting menu,Flash compensation,,,,,,,"Adjust flash output to control the brightness of the main subject relative to the background. Flash output can be increased to make the main subject appear brighter, reduced to prevent glare, or otherwise fine-tuned to produce the desired result (Flash Compensation). C The Photo Shooting Menu: Shooting Options."\r
Photo shooting menu,Focus mode,,,,,,,"Focus mode controls how the camera focuses. For more information, see “Focus” under “Focus Mode” in “Basic Settings” (Focus Mode)"\r
Photo shooting menu,AF-area mode,,,,,,,"Choose how the camera selects the focus point for autofocus. For more information, see “Focus” under “AF-Area Mode” in “Basic Settings” (AF-Area Mode)"\r
Photo shooting menu,Vibration reduction,,,,,,,"Choose whether to enable vibration reduction. For more information, see “The i Menu” under “Vibration Reduction” (Vibration Reduction)"\r
Photo shooting menu,Auto bracketing,,,,,,,"Vary exposure, flash level, Active D-Lighting (ADL), or white balance slightly with each shot, “bracketing” the current value. Bracketing can be used in situations in which getting the right settings is difficult and there is not time to check results and adjust settings with each shot, or to experiment with different settings for the same subject. [Auto bracketing set]."\r
Photo shooting menu,Auto bracketing,AE & flash bracketing,,,,,,"Vary exposure, flash level, Active D-Lighting (ADL), or white balance slightly with each shot, “bracketing” the current value. Bracketing can be used in situations in which getting the right settings is difficult and there is not time to check results and adjust settings with each shot, or to experiment with different settings for the same subject. [Auto bracketing set]."\r
Photo shooting menu,Auto bracketing,Choose the number of shots in the bracketing sequence.,,,,,,\r
Photo shooting menu,Auto bracketing,ADL bracketing,,,,,,Choose the amount the selected settings vary with each shot when an option other than is selected for [Auto bracketing set]\r
Photo shooting menu,Auto bracketing,ADL bracketing,,,,,,Choose how Active D-Lighting varies with each shot when is selected for [Auto bracketing set]\r
Photo shooting menu,Multiple exposure,,,,,,,Record two to ten NEF (RAW) exposures as a single photograph. [Multiple exposure mode].\r
Photo shooting menu,Multiple exposure,On (series),,,,,,": Take a series of multiple exposures. To end multiple exposure photography, select [Multiple exposure mode] again and choose [Off]. [On (single photo)]: Create one multiple exposure. [Off]: End multiple exposure photography"\r
Photo shooting menu,Multiple exposure,Choose the number of exposures that will be combined to form a single photograph.,,,,,,\r
Photo shooting menu,Multiple exposure,Add,,,,,,": The exposures are overlaid without modification; gain is not adjusted. [Average]: Gain is adjusted before the exposures are overlaid. The gain for each exposure is equal to 1 divided by the total number of exposures taken. For example, in a photo made by combining two exposures, the gain for each exposure will be set to 1/2, while in a photo combining three exposures, gain will be set to 1/3. [Lighten]: The camera compares the pixels in each exposure and uses only the brightest. [Darken]: The camera compares the pixels in each exposure and uses only the darkest"\r
Photo shooting menu,Multiple exposure,On,,,,,,: Save both the multiple exposure and the shots that make it up; the pictures are saved in NEF (RAW) format. [Off]: Discard the individual shots and save only the multiple exposure\r
Photo shooting menu,Multiple exposure,On,,,,,,: Earlier exposures are superimposed on the view through the lens. The earlier exposures aid composition of the next shot. [Off]: Earlier exposures are not displayed while shooting is in progress\r
Photo shooting menu,Multiple exposure,Choose the first exposure from the NEF (RAW) images on the memory card.,,,,,,\r
Photo shooting menu,Multiple exposure,View a preview created from the exposures recorded to the current point.,,,,,,\r
Photo shooting menu,Multiple exposure,Retake the most recent exposure.,,,,,,\r
Photo shooting menu,Multiple exposure,Create a multiple exposure from the exposures taken to current point.,,,,,,\r
Photo shooting menu,Multiple exposure,On,,,,,,"Exit without recording a multiple exposure. If is selected for [Save individual images (NEF)], the individual exposures will be saved separately"\r
Photo shooting menu,HDR (high dynamic range),,,,,,,"Used with high contrast subjects, High Dynamic Range (HDR) preserves details in highlights and shadows by combining two shots taken at different exposures. Use with high-contrast scenes and other subjects to preserve a wide range of detail"\r
Photo shooting menu,HDR (high dynamic range),On (series),,,,,,"[On (series)]: Take a series of HDR photographs. To end HDR photography, select [HDR mode] again and choose [Off]. [On (single photo)]: Take a single HDR photograph."\r
Photo shooting menu,HDR (high dynamic range),Auto,,,,,,"[On (series)]: Take a series of HDR photographs. To end HDR photography, select [HDR mode] again and choose [Off]. [On (single photo)]: Take a single HDR photograph."\r
Photo shooting menu,HDR (high dynamic range),Choose how much the boundaries between the two images are smoothed.,,,,,,\r
Photo shooting menu,HDR (high dynamic range),On,,,,,,"Choose to save each of the individual shots used to create the HDR image; the shots are saved in NEF (RAW) format. The shots are saved at an image size of [Large], regardless of the option selected for [Image size] > [NEF (RAW)] in the photo shooting menu"\r
Photo shooting menu,HDR (high dynamic range),On (series),,,,,,Take a series of HDR photographs. HDR shooting will continue until you select [Off] for [HDR mode]\r
Photo shooting menu,HDR (high dynamic range),Normal shooting will resume after you have taken a single HDR photograph.,,,,,,\r
Photo shooting menu,HDR (high dynamic range),Proceed without taking additional HDR photographs.,,,,,,\r
Photo shooting menu,Interval timer shooting,,,,,,,"Take photographs at the selected interval until the specified number of shots has been recorded. When using the interval timer, select a release mode other than E"\r
Photo shooting menu,Interval timer shooting,Now,,,,,,"Take photographs at the selected interval until the specified number of shots has been recorded. When using the interval timer, select a release mode other than E. Start interval timer shooting. Shooting will begin either after 3 s ([Now] selected for [Choose start day/time]) or at a selected date and time ([Choose day/time]). Shooting will continue at the selected interval until all shots have been taken."\r
Photo shooting menu,Interval timer shooting,Now,,,,,,"Take photographs at the selected interval until the specified number of shots has been recorded. When using the interval timer, select a release mode other than E. Start interval timer shooting. Shooting will begin either after 3 s ([Now] selected for [Choose start day/time]) or at a selected date and time ([Choose day/time]). Shooting will continue at the selected interval until all shots have been taken."\r
Photo shooting menu,Interval timer shooting,"Specify the interval between shots in hours, minutes, and seconds.",,,,,,\r
Photo shooting menu,Interval timer shooting,Choose the number of intervals and the number of shots per interval.,,,,,,\r
Photo shooting menu,Interval timer shooting,On,,,,,,"Take photographs at the selected interval until the specified number of shots has been recorded. When using the interval timer, select a release mode other than E. Start interval timer shooting. Shooting will begin either after 3 s ([Now] selected for [Choose start day/time]) or at a selected date and time ([Choose day/time]). Shooting will continue at the selected interval until all shots have been taken."\r
Photo shooting menu,Interval timer shooting,On,,,,,,"Select to silence the shutter and eliminate the vibrations it produces during shooting. Selecting does not completely silence the camera. Camera sounds may still be audible, for example during autofocus or aperture adjustment, in the latter case most noticeably at apertures smaller (i.e., at f-numbers higher) than f/5.6"\r
Photo shooting menu,Interval timer shooting,On,,,,,,": Enable interval priority to ensure that frames shot in modes P and A are taken at the chosen interval. Flash photography is disabled. The number of shots per interval is set to 1, even if the number of shots chosen for [Intervals×shots/interval] is 2 or more. If AF-S is selected for focus mode, select [Release] for Custom Setting a2 [AF-S priority selection]. If AF-C is selected, select [Release] for Custom Setting a1 [AF-C priority selection]. If is selected for [ISO sensitivity settings] > [Auto ISO sensitivity control] and the time chosen for [Minimum shutter speed] is longer than the interval, the time selected for the interval will take priority over the selected shutter speed. [Off]: Disable interval priority to ensure that photos are correctly exposed"\r
Photo shooting menu,Interval timer shooting,On,,,,,,"Take photographs at the selected interval until the specified number of shots has been recorded. When using the interval timer, select a release mode other than E. Start interval timer shooting. Shooting will begin either after 3 s ([Now] selected for [Choose start day/time]) or at a selected date and time ([Choose day/time]). Shooting will continue at the selected interval until all shots have been taken."\r
Photo shooting menu,Interval timer shooting,AE bracketing,,,,,,"Combine interval-timer photography with other options. : Perform exposure bracketing during interval-timer photography. [Time-lapse movie]: Use the photos taken during interval-timer photography to create a time-lapse movie with an aspect ratio of 16:9. The camera saves both the photos and the time-lapse movie. Selecting [5:4 (30×24)] (Z 7II only) or [1:1 (24×24)] for [Choose image area] in the photo shooting menu disables the shutter release. Movies created using [Time-lapse movie] are recorded in the [sRGB] color space, regardless of the option selected for [Color space] in the photo shooting menu. [Off]: Do not perform additional operations during interval-timer photography"\r
Photo shooting menu,Interval timer shooting,New folder,,,,,,"Take photographs at the selected interval until the specified number of shots has been recorded. When using the interval timer, select a release mode other than E. Start interval timer shooting. Shooting will begin either after 3 s ([Now] selected for [Choose start day/time]) or at a selected date and time ([Choose day/time]). Shooting will continue at the selected interval until all shots have been taken."\r
Photo shooting menu,Time-lapse movie,,,,,,,The camera automatically takes photos at selected intervals to create a time-lapse movie. Start time-lapse recording. Shooting starts after about 3 s and continues at the interval selected for [Interval] for the time selected for [Shooting time].\r
Photo shooting menu,Time-lapse movie,Interval,,,,,,Start time-lapse recording. Shooting starts after about 3 s and continues at the interval selected for for the time selected for [Shooting time]\r
Photo shooting menu,Time-lapse movie,"Choose the interval between shots, in minutes and seconds.",,,,,,\r
Photo shooting menu,Time-lapse movie,"Choose how long the camera will continue to take pictures, in hours and minutes.",,,,,,\r
Photo shooting menu,Time-lapse movie,On,,,,,,Selecting smooths abrupt changes in exposure. Large changes in subject brightness during shooting may result in apparent variations in exposure. This can be addressed by shortening the interval between shots. Exposure smoothing will not take effect in mode M if [Off] is selected for [ISO sensitivity settings] > [Auto ISO sensitivity control] in the photo shooting menu\r
Photo shooting menu,Time-lapse movie,On,,,,,,"Select to silence the shutter and eliminate the vibrations it produces during shooting. Selecting does not completely silence the camera. Camera sounds may still be audible, for example during autofocus or aperture adjustment, in the latter case most noticeably at apertures smaller (i.e., at f-numbers higher) than f/5.6"\r
Photo shooting menu,Time-lapse movie,FX,,,,,,Choose the image area for time-lapse movies from and [DX]\r
Photo shooting menu,Time-lapse movie,Choose the frame size and rate for the final movie.,,,,,,\r
Photo shooting menu,Time-lapse movie,On,,,,,,": Enable interval priority to ensure that frames shot in modes P and A are taken at the chosen interval. Select [Release] for Custom Setting a2 [AF-S priority selection] when AF-S is selected for focus mode and for Custom Setting a1 [AF-C priority selection] when AF-C is selected. If is selected for [ISO sensitivity settings] > [Auto ISO sensitivity control] and the time chosen for [Minimum shutter speed] is longer than the interval, the time selected for the interval will take priority over the selected shutter speed. [Off]: Disable interval priority to ensure that photos are correctly exposed"\r
Photo shooting menu,Time-lapse movie,On,,,,,,The camera automatically takes photos at selected intervals to create a time-lapse movie. Start time-lapse recording. Shooting starts after about 3 s and continues at the interval selected for [Interval] for the time selected for [Shooting time].\r
Photo shooting menu,Time-lapse movie,Choose the slot used to record time-lapse movies when two memory cards are inserted.,,,,,,\r
Photo shooting menu,Focus shift shooting,,,,,,,Focus shift automatically varies focus over a series of shots. Use it to take photos that will later be combined using focus stacking to create a single image with increased depth of field.\r
Photo shooting menu,Focus shift shooting,"Start shooting. The camera will take the selected number of shots, changing the focus distance by the selected amount with each shot.",,,,,,\r
Photo shooting menu,Focus shift shooting,Choose the number of shots (maximum 300).,,,,,,\r
Photo shooting menu,Focus shift shooting,Focus shift varies the focus distance over a series of photographs. Choose the amount the focus distance changes with each shot.,,,,,,\r
Photo shooting menu,Focus shift shooting,00,,,,,,"Focus shift automatically varies focus over a series of shots. Use it to take photos that will later be combined using focus stacking to create a single image with increased depth of field. Before using focus shift, choose a focus mode of AF-S or AF-C and a release mode other than E. Start shooting. The camera will take the selected number of shots, changing the focus distance by the selected amount with each shot."\r
Photo shooting menu,Focus shift shooting,On,,,,,,"Focus shift automatically varies focus over a series of shots. Use it to take photos that will later be combined using focus stacking to create a single image with increased depth of field. Before using focus shift, choose a focus mode of AF-S or AF-C and a release mode other than E. Start shooting. The camera will take the selected number of shots, changing the focus distance by the selected amount with each shot."\r
Photo shooting menu,Focus shift shooting,On,,,,,,"Select to eliminate shutter sounds during shooting. Selecting does not completely silence the camera. Camera sounds may still be audible, for example during autofocus or aperture adjustment, in the latter case most noticeably at apertures smaller (i.e., at f-numbers higher) than f/5.6"\r
Photo shooting menu,Focus shift shooting,New folder,,,,,,"Focus shift automatically varies focus over a series of shots. Use it to take photos that will later be combined using focus stacking to create a single image with increased depth of field. Before using focus shift, choose a focus mode of AF-S or AF-C and a release mode other than E. Start shooting. The camera will take the selected number of shots, changing the focus distance by the selected amount with each shot."\r
Photo shooting menu,Silent photography,,,,,,,"Eliminate shutter sounds during shooting (Silent Photography). Eliminate vibrations produced by the shutter. Use for landscapes, still lifes, and other static subjects. Use of a tripod is recommended."\r
Photo shooting menu,Silent photography,On,,,,,,"Eliminate vibrations produced by the shutter. Use for landscapes, still lifes, and other static subjects. Use of a tripod is recommended. Selecting for [Silent photography] does not completely silence the camera. Camera sounds may still be audible, for example during autofocus or aperture adjustment, in the latter case most noticeably at apertures smaller (i.e., at f-numbers higher) than f/5.6. Flash photography is disabled. Long-exposure noise reduction is disabled. There is no limit to the number of photos that can be taken in a single burst, regardless of the option chosen for Custom Setting d2 [Max. continuous release]. The electronic shutter is used, regardless of the option selected for Custom Setting d5 [Shutter type]. Regardless of the settings selected for [Beep options] in the setup menu, beeps will not sound when the camera focuses or while the self-timer is in operation. Enabling silent photography changes the frame advance rates for continuous release modes (Frame Advance Rate)"\r
Photo shooting menu,Silent photography,Disable silent photography.,,,,,,\r
Movie shooting menu,Reset Movie shooting menu,,,,,,,Highlight [Yes] and press J to restore Movie shooting menu options to their default values (Movie shooting menu Defaults)\r
Movie shooting menu,File naming,,,,,,,Choose the three-letter prefix used in naming the image files in which movies are stored; the default prefix is “DSC” (File Naming)\r
Movie shooting menu,Destination,,,,,,,Video Tutorial: Dual Card Slots Choose the slot to which movies are recorded when two memory cards are inserted.\r
Movie shooting menu,Choose image area,,,,,,,\r
Movie shooting menu,Frame size/frame rate,,,,,,,"Choose the movie frame size (in pixels) and frame rate. For more information, see “The i Menu” under “Frame Size and Rate/Image Quality” (Frame Size and Rate/Image Quality)"\r
Movie shooting menu,Movie quality,,,,,,,"Choose from [High quality] and [Normal]. For more information, see “The i Menu” under “Frame Size and Rate/Image Quality” (Frame Size and Rate/Image Quality)"\r
Movie shooting menu,Movie file type,,,,,,,Record movies in MOV or MP4 format. The audio recording format varies with movie file format. Linear PCM is used for MOV files and AAC for MP4 files.\r
Movie shooting menu,ISO sensitivity settings,,,,,,,Adjust the following ISO sensitivity settings for use in movie mode. [Maximum sensitivity].\r
Movie shooting menu,ISO sensitivity settings,On,,,,,,"Choose the upper limit for auto ISO sensitivity control from values between ISO 200 and Hi 2.0. The selected value serves as the upper limit for ISO sensitivity in modes P, S, and A and when is selected for [Auto ISO control (mode M)] in mode M"\r
Movie shooting menu,ISO sensitivity settings,On,,,,,,": Enable auto ISO sensitivity control in mode M. [Off]: Use the value selected for [ISO sensitivity (mode M)]. Regardless of the option selected, auto ISO sensitivity control is used in modes other than M"\r
Movie shooting menu,ISO sensitivity settings,Choose the ISO sensitivity for mode M from values between ISO 64 (Z 7II) or 100 (Z 6II) and Hi 2.0.,,,,,,\r
Movie shooting menu,White balance,,,,,,,Choose the white balance for movies. Select [Same as photo settings] to use the option currently selected for photos (White Balance)\r
Movie shooting menu,Set Picture Control,,,,,,,Choose a Picture Control for movies. Select [Same as photo settings] to use the option currently selected for photos (Set Picture Control)\r
Movie shooting menu,Manage Picture Control,,,,,,,Save modified Picture Controls as custom Picture Controls (Manage Picture Control)\r
Movie shooting menu,Active D-Lighting,,,,,,,"Preserve details in highlights and shadows, creating movies with natural contrast. Select [Same as photo settings] to use the option currently selected for photos (Active D-Lighting)"\r
Movie shooting menu,High ISO NR,,,,,,,\r
Movie shooting menu,Vignette control,,,,,,,Reduce vignetting in movies. Select [Same as photo settings] to use the option currently selected for photos (Vignette Control)\r
Movie shooting menu,Diffraction compensation,,,,,,,\r
Movie shooting menu,Auto distortion control,,,,,,,Reduce barrel and pin-cushion distortion in movies (Auto Distortion Control)\r
Movie shooting menu,Flicker reduction,,,,,,,"Reduce flicker and banding when shooting under fluorescent or mercury-vapor lighting during movie recording. Choose [Auto] to allow the camera to automatically choose the correct frequency. If [Auto] fails to produce the desired results, select [50 Hz] or [60 Hz] according to the frequency of the local power supply. Choose [50 Hz] for areas with a 50 Hz power supply, [60 Hz] for areas with a 60 Hz power supply. If [Auto] fails to produce the desired results and you are unsure as to the frequency of the local power supply, test both the 50 and 60 Hz options and choose the one that produces the best results."\r
Movie shooting menu,Metering,,,,,,,Choose how the camera meters exposure in movie mode. [Spot metering] is not available in the Movie shooting menu (Metering)\r
Movie shooting menu,Focus mode,,,,,,,Choose a focus mode for movie recording (Focus Mode)\r
Movie shooting menu,AF-area mode,,,,,,,Choose how the camera focuses in movie mode (AF-Area Mode)\r
Movie shooting menu,Vibration reduction,,,,,,,Adjust vibration reduction settings for movie mode. Select [Same as photo settings] to use the option currently selected for photos (Vibration Reduction)\r
Movie shooting menu,Electronic VR,,,,,,,Choose whether to enable electronic vibration reduction in movie mode (Electronic VR)\r
Movie shooting menu,Microphone sensitivity,,,,,,,Turn built-in or external microphones on or off or adjust microphone sensitivity. Adjust microphone sensitivity automatically.\r
Movie shooting menu,Microphone sensitivity,Adjust microphone sensitivity automatically.,,,,,,\r
Movie shooting menu,Microphone sensitivity,1,,,,,,Turn built-in or external microphones on or off or adjust microphone sensitivity. Adjust microphone sensitivity automatically.\r
Movie shooting menu,Microphone sensitivity,Turn sound recording off.,,,,,,\r
Movie shooting menu,Attenuator,,,,,,,Select [Enable] to reduce microphone gain and prevent audio distortion when recording movies in loud environments. 1 The Movie shooting menu: Movie Shooting Options.\r
Movie shooting menu,Frequency response,,,,,,,Choose the range of frequencies to which built-in and external microphones respond. Record a wide range of frequencies. Choose for everything from music to the bustling hum of a city street.\r
Movie shooting menu,Frequency response,Wide range,,,,,,Choose the range of frequencies to which built-in and external microphones respond. Record a wide range of frequencies. Choose for everything from music to the bustling hum of a city street.\r
Movie shooting menu,Frequency response,Vocal range,,,,,,Choose for human voices\r
Movie shooting menu,Wind noise reduction,,,,,,,"Select [On] to enable the low-cut filter, reducing noise produced by wind blowing over the built-in microphone. Note that other sounds may also be affected. Selecting [On] for [Wind noise reduction] has no effect on optional stereo microphones. Wind-noise reduction for optional stereo microphones that support this feature can be enabled or disabled using microphone controls."\r
Movie shooting menu,Headphone volume,,,,,,,\r
Movie shooting menu,Timecode,,,,,,,"Choose whether to record time codes giving the hour, minute, second, and frame number for each frame when shooting movies. Time codes are available only with movies recorded in MOV format. [On]: Record time codes. The time code appears in the shooting display."\r
Movie shooting menu,Timecode,On,,,,,,"Choose whether to record time codes giving the hour, minute, second, and frame number for each frame when shooting movies. Time codes are available only with movies recorded in MOV format. [On]: Record time codes. The time code appears in the shooting display."\r
Movie shooting menu,Timecode,Record run,,,,,,"Choose whether to record time codes giving the hour, minute, second, and frame number for each frame when shooting movies. Time codes are available only with movies recorded in MOV format. [On]: Record time codes. The time code appears in the shooting display."\r
Movie shooting menu,Timecode,Reset,,,,,,"Choose whether to record time codes giving the hour, minute, second, and frame number for each frame when shooting movies. Time codes are available only with movies recorded in MOV format. [On]: Record time codes. The time code appears in the shooting display."\r
Movie shooting menu,Timecode,On,,,,,,"Choose whether to record time codes giving the hour, minute, second, and frame number for each frame when shooting movies. Time codes are available only with movies recorded in MOV format. [On]: Record time codes. The time code appears in the shooting display."\r
Custom settings menu,Reset Custom settings menu,,,,,,,\r
Custom settings menu,AF-C priority selection,,,,,,,Choose whether photos can be taken before the camera focuses when AF-C is selected. Photos can be taken only when the camera is in focus (focus priority).\r
Custom settings menu,AF-C priority selection,Release,,,,,,Photos can be taken whenever the shutter-release button is pressed (release priority)\r
Custom settings menu,AF-C priority selection,Focus,,,,,,Photos can be taken only when the camera is in focus (focus priority)\r
Custom settings menu,AF-S priority selection,,,,,,,Choose whether photos can be taken before the camera focuses when AF-S is selected. Photos can be taken only when the camera is in focus (focus priority).\r
Custom settings menu,AF-S priority selection,Release,,,,,,Photos can be taken whenever the shutter-release button is pressed (release priority)\r
Custom settings menu,AF-S priority selection,Focus,,,,,,Photos can be taken only when the camera is in focus (focus priority)\r
Custom settings menu,Focus tracking with lock-on,,,,,,,Choose how quickly focus responds if something passes between the subject and the camera when AF-C is selected for the focus mode. Choose [5 (Delayed)] to help maintain focus on your original subject.\r
Custom settings menu,Focus points used,,,,,,,"Choose the number of focus points available for manual focus-point selection when an option other than [Auto-area AF], [Auto-area AF (people)], and [Auto-area AF (animals)] is selected for AF-area mode. Every focus point available in the current AF-area mode can be selected. The number of points available varies with the AF-area mode."\r
Custom settings menu,Focus points used,All points,,,,,,"Choose the number of focus points available for manual focus-point selection when an option other than [Auto-area AF], [Auto-area AF (people)], and [Auto-area AF (animals)] is selected for AF-area mode. Every focus point available in the current AF-area mode can be selected. The number of points available varies with the AF-area mode."\r
Custom settings menu,Focus points used,Every other point,,,,,,"Choose the number of focus points available for manual focus-point selection when an option other than [Auto-area AF], [Auto-area AF (people)], and [Auto-area AF (animals)] is selected for AF-area mode. Every focus point available in the current AF-area mode can be selected. The number of points available varies with the AF-area mode."\r
Custom settings menu,Store points by orientation,,,,,,,"Choose whether separate focus points can be selected for “wide” (landscape) orientation, for “tall” (portrait) orientation with the camera rotated 90° clockwise, and for “tall” orientation with the camera rotated 90° counterclockwise. Select [No] to use the same focus point regardless of camera orientation."\r
Custom settings menu,AF activation,,,,,,,"Choose whether the shutter-release button can be used to focus. If [AF-ON only] is selected, the camera will not focus when the shutter-release button is pressed halfway. Focus can only be adjusted using the AF-ON button or other controls to which AF‑ON has been assigned using"\r
Custom settings menu,AF activation,Shutter-release enabled.,,,,,,\r
Custom settings menu,AF activation,Shutter-release disabled.,,,,,,\r
Custom settings menu,Limit AF-area mode selection,,,,,,,Choose the AF-area modes that can be selected using the i menu or custom controls. A Custom settings menu: Fine-Tuning Camera Settings.\r
Custom settings menu,Focus point wrap-around,,,,,,,"Choose whether focus-point selection “wraps around” from one edge of the display to another. If [Wrap] is selected, focus-point selection will “wrap around” from top to bottom, bottom to top, right to left, and left to right, so that"\r
Custom settings menu,Focus point options,,,,,,,Choose from the focus point display options below. The focus point is displayed at all times in manual focus mode.\r
Custom settings menu,Focus point options,The focus point is displayed at all times in manual focus mode.,,,,,,\r
Custom settings menu,Focus point options,The focus point is displayed only during focus point selection.,,,,,,\r
Custom settings menu,Focus point options,Display both the selected focus point and surrounding focus points.,,,,,,\r
Custom settings menu,Focus point options,Display only the selected focus point.,,,,,,\r
Custom settings menu,Low-light AF,,,,,,,"Choose [On] for more accurate focus under low-light conditions when AF-S is selected for focus mode. In photo mode, this option takes effect only in modes P, S, A, and M."\r
Custom settings menu,Built-in AF-assist illuminator,,,,,,,"Choose whether the built-in AF-assist illuminator lights to assist the focus operation in photo mode when lighting is poor. In photo mode, the illuminator will light as required when AF-S is selected for focus mode."\r
Custom settings menu,Built-in AF-assist illuminator,"In photo mode, the illuminator will light as required when AF-S is selected for focus mode.",,,,,,\r
Custom settings menu,Built-in AF-assist illuminator,The illuminator does not light to assist the focus operation. The camera may not be able to focus when lighting is poor.,,,,,,\r
Custom settings menu,Manual focus ring in AF mode,,,,,,,Choose whether the lens focus ring can be used for manual focus in autofocus mode. The lens focus ring cannot be used for manual focus while autofocus mode is selected.\r
Custom settings menu,Manual focus ring in AF mode,"Autofocus can be over-ridden by rotating the lens focus ring (autofocus with manual override). The focus ring can be used for manual focus while the shutter-release button is pressed halfway. To refocus using autofocus, lift your finger from the shutter-release button and then press it halfway again.",,,,,,\r
Custom settings menu,Manual focus ring in AF mode,The lens focus ring cannot be used for manual focus while autofocus mode is selected.,,,,,,\r
Custom settings menu,EV steps for exposure cntrl,,,,,,,"Select the increments used for adjustments to shutter speed, aperture, ISO sensitivity, bracketing, and exposure and flash compensation. A Custom settings menu: Fine-Tuning Camera Settings."\r
Custom settings menu,Easy exposure compensation,,,,,,,Exposure compensation can be adjusted using only a command dial. The setting selected with the command dial is reset when the camera turns off or the standby timer expires. Exposure compensation can be adjusted using only a command dial. Exposure compensation is not reset when the camera turns off or the standby timer expires.\r
Custom settings menu,Easy exposure compensation,Exposure compensation can be adjusted using only a command dial. The setting selected with the command dial is reset when the camera turns off or the standby timer expires.,,,,,,\r
Custom settings menu,Easy exposure compensation,Exposure compensation can be adjusted using only a command dial. Exposure compensation is not reset when the camera turns off or the standby timer expires.,,,,,,\r
Custom settings menu,Easy exposure compensation,Exposure compensation is set by pressing the E button and rotating the main command dial.,,,,,,\r
Custom settings menu,Center-weighted area,,,,,,,"When [Center-weighted metering] is selected, the camera assigns the greatest weight to an area in the center of the shooting display when setting exposure. Custom Setting b3 [Center-weighted area] is used to choose the size of the area given the greatest weight when [Center-weighted metering] is selected. A Custom settings menu: Fine-Tuning Camera Settings."\r
Custom settings menu,Fine-tune optimal exposure,,,,,,,"Use this option to fine-tune the exposure value selected by the camera; exposure can be fine-tuned separately for each metering method. Exposure can be adjusted up for brighter exposures or down for darker exposures in the range +1 to –1 EV in steps of 1/6 EV. The default is 0. Regardless of the option selected for Custom Setting b4 [Fine-tune optimal exposure], the exposure compensation icon (E) will not be displayed. The only way to determine how much exposure has been altered is to view the amount in the fine-tuning menu for Custom Setting b4."\r
Custom settings menu,Shutter-release button AE-L,,,,,,,Choose whether exposure locks when the shutter-release button is pressed\r
Custom settings menu,Shutter-release button AE-L,On (half press),,,,,,A Custom settings menu: Fine-Tuning Camera Settings.\r
Custom settings menu,Shutter-release button AE-L,On (burst mode),,,,,,Exposure only locks while the shutter-release button is pressed all the way down\r
Custom settings menu,Shutter-release button AE-L,Pressing the shutter-release button does not lock exposure.,,,,,,\r
Playback menu,,Delete,All images,,,,,"Delete all pictures in the folder currently selected for [Playback menu, folder] in the Playback menu, menu. If two memory cards are inserted, you can select the card from which pictures will be deleted."\r
Playback menu,,Delete,Images shot on selected dates,,,,,Delete all pictures taken on selected dates (Images Shot on Selected Dates).\r
Playback menu,,Delete,Selected images,,,,,Delete selected pictures.\r
Custom settings menu,Self-timer,,,,,,,"Choose the length of the shutter release delay, the number of shots taken, and the interval between shots in self-timer mode. Choose the length of the shutter-release delay."\r
Custom settings menu,Self-timer,Choose the length of the shutter-release delay.,,,,,,\r
Custom settings menu,Self-timer,Press 1 and 3 to choose the number of shots taken each time the shutter-release button is pressed; choose from values of from 1 to 9.,,,,,,\r
Custom settings menu,Self-timer,Number of shots,,,,,,Choose the interval between shots when is more than 1\r
Custom settings menu,Power off delay,,,,,,,"Choose how long the monitor or viewfinder remains on when no operations are performed. Different settings can be chosen for [Playback menu,], [Menus], [Image review], and [Standby timer]."\r
Custom settings menu,CL mode shooting speed,,,,,,,Choose the frame advance rate for low-speed continuous release mode; options range from [5 fps] to [1 fps]\r
Custom settings menu,Max. continuous release,,,,,,,The maximum number of shots that can be taken in a single burst in continuous release modes can be set to any value between 1 and 200\r
Custom settings menu,Sync. release mode options,,,,,,,Choose whether the shutters on the remote cameras are synchronized with the shutter on the master camera when using an optional wireless remote controller. A Custom settings menu: Fine-Tuning Camera Settings.\r
Custom settings menu,Exposure delay mode,,,,,,,"In situations where the slightest camera movement can blur pictures, shutter release can be delayed by from about 0.2 to 3 seconds after the shutter-release button is pressed"\r
Custom settings menu,Shutter type,,,,,,,Choose the type of shutter used for photographs. The camera chooses the shutter type automatically according to shutter speed. The electronic front-curtain shutter is used to reduce blur caused by camera shake at slow shutter speeds.\r
Custom settings menu,Shutter type,Auto,,,,,,Choose the type of shutter used for photographs. The camera chooses the shutter type automatically according to shutter speed. The electronic front-curtain shutter is used to reduce blur caused by camera shake at slow shutter speeds.\r
Custom settings menu,Shutter type,Mechanical shutter,,,,,,Choose the type of shutter used for photographs. The camera chooses the shutter type automatically according to shutter speed. The electronic front-curtain shutter is used to reduce blur caused by camera shake at slow shutter speeds.\r
Custom settings menu,Shutter type,Electronic front-curtain shutter,,,,,,Choose the type of shutter used for photographs. The camera chooses the shutter type automatically according to shutter speed. The electronic front-curtain shutter is used to reduce blur caused by camera shake at slow shutter speeds.\r
Custom settings menu,Extended shutter speeds (M),,,,,,,"Extend the range of shutter speeds available in mode M; the slowest shutter speed available when [On] is selected is 900 s (15 minutes). Extended shutter speeds can be used for pictures of the night sky and other long exposures. To use extended shutter speeds, choose [On] and select a shutter speed of 60 s or slower."\r
Custom settings menu,Limit selectable image area,,,,,,,Choose the options that can be accessed by rotating a command dial in the i menu or while pressing a control to which image area has been assigned\r
Custom settings menu,File number sequence,,,,,,,"Choose a file numbering option. When a new folder is created or a new memory card is inserted in the camera, file numbering will continue from the last number used. This simplifies file management by minimizing the occurrence of duplicate file names when multiple cards are used."\r
Custom settings menu,File number sequence,"When a new folder is created or a new memory card is inserted in the camera, file numbering will continue from the last number used. This simplifies file management by minimizing the occurrence of duplicate file names when multiple cards are used.",,,,,,\r
Custom settings menu,File number sequence,Off,,,,,,"When a new folder is created or a new memory card is inserted, file numbering restarts from 0001. If the current folder already contains images, file numbering will instead continue from the highest file number in the current folder. If you select after selecting [On], the camera will store the current file number. File numbering will resume from the previously-stored value the next time [On] is selected"\r
Custom settings menu,File number sequence,On,,,,,,"Choose a file numbering option. When a new folder is created or a new memory card is inserted in the camera, file numbering will continue from the last number used. This simplifies file management by minimizing the occurrence of duplicate file names when multiple cards are used."\r
Custom settings menu,Apply settings to live view,,,,,,,Choose whether the camera adjusts the preview in the viewfinder or monitor to reflect how shooting settings will affect the hue and brightness of the final picture.\r
Custom settings menu,Apply settings to live view,"The effects of changes to settings such as white balance, Picture Controls, and exposure compensation are visible in the shooting display.",,,,,,\r
Custom settings menu,Apply settings to live view,"The effects of changes to settings such as white balance, Picture Controls, and exposure compensation are not visible in the shooting display. The hue and brightness of the display can be adjusted for ease of viewing during extended photo shoots. A g icon appears in the shooting display.",,,,,,\r
Custom settings menu,Framing grid display,,,,,,,Choose whether to display a grid for reference when framing shots. A Custom settings menu: Fine-Tuning Camera Settings.\r
Photo shooting menu,Image quality,"Record photos in JPEG format. ”Fine” produces higher quality pictures than ”normal”
and ”normal” higher quality pictures than “basic”.

Choose options with a star (“m”) to maximize image quality. Choose options without a star (“m”) to ensure that the JPEG copies all have more or less the same file size.",,,,,,Record photos in JPEG format. ”Fine” produces higher quality pictures than ”normal” and ”normal” higher quality pictures than “basic”. Choose options with a star (“m”) to maximize image quality. Choose options without a star (“m”) to ensure that the JPEG copies all have more or less the same file size.\r
Photo shooting menu,Image quality,Record photos in NEF (RAW) format.,,,,,,Record photos in NEF (RAW) format.\r
Photo shooting menu,Image quality,"Record two copies of each photo: an NEF (RAW) image and a JPEG copy.


For the JPEG copy, you can choose from options prioritizing image quality or file
size. Choose options with a star (“m”) to maximize image quality. Choose options without a star (“m”) to ensure that the JPEG copies all have more or less the same file size.


Only the JPEG copy is displayed during Playback menu,. The NEF (RAW) copies can only be
viewed using a computer.


Deleting the JPEG copies on the camera also deletes the NEF (RAW) images.",,,,,,"Record two copies of each photo: an NEF (RAW) image and a JPEG copy. For the JPEG copy, you can choose from options prioritizing image quality or file size. Choose options with a star (“m”) to maximize image quality. Choose options without a star (“m”) to ensure that the JPEG copies all have more or less the same file size. Only the JPEG copy is displayed during Playback menu,. The NEF (RAW) copies can only be viewed using a computer. Deleting the JPEG copies on the camera also deletes the NEF (RAW) images."\r
Custom settings menu,Focus peaking,,,,,,,"When focus peaking is enabled in manual focus mode, objects that are in focus are indicated by colored outlines in the display. You can choose the color. Choose from [3 (high sensitivity)], [2 (standard)], [1 (low sensitivity)], and [Off]. The higher the value, the greater the depth that will be shown as being in focus."\r
Custom settings menu,View all in continuous mode,,,,,,,"If [Off] is selected, the display will go blank during burst photography. A Custom settings menu: Fine-Tuning Camera Settings."\r
Custom settings menu,Flash sync speed,,,,,,,\r
Custom settings menu,Flash shutter speed,,,,,,,Choose the slowest shutter speed available with a flash in mode P or A\r
Custom settings menu,Exposure comp. for flash,,,,,,,Choose how the camera adjusts flash level when exposure compensation is used. The camera adjusts both the flash level and exposure. This changes the exposure for the entire frame.\r
Custom settings menu,Exposure comp. for flash,Entire frame,,,,,,Choose how the camera adjusts flash level when exposure compensation is used. The camera adjusts both the flash level and exposure. This changes the exposure for the entire frame.\r
Custom settings menu,Exposure comp. for flash,Background only,,,,,,Choose how the camera adjusts flash level when exposure compensation is used. The camera adjusts both the flash level and exposure. This changes the exposure for the entire frame.\r
Custom settings menu,Auto c ISO sensitivity control,,,,,,,Choose how the camera adjusts flash level when auto ISO sensitivity control is enabled. [Subject and background].\r
Custom settings menu,Auto c ISO sensitivity control,Subject and background,,,,,,Choose how the camera adjusts flash level when auto ISO sensitivity control is enabled. [Subject and background].\r
Photo shooting menu,Manage Picture Control,Copy custom Picture Controls to and from the memory card.,,,,,,Copy custom Picture Controls to and from the memory card.\r
Photo shooting menu,Manage Picture Control,Delete custom Picture Controls.,,,,,,Delete custom Picture Controls.\r
Photo shooting menu,Manage Picture Control,Rename custom Picture Controls.,,,,,,Rename custom Picture Controls.\r
Photo shooting menu,Manage Picture Control,"Create a new custom Picture Control based on an existing preset or custom Picture
                                                         Control, or edit existing custom Picture Controls.",,,,,,"Create a new custom Picture Control based on an existing preset or custom Picture Control, or edit existing custom Picture Controls."\r
Custom settings menu,Auto c ISO sensitivity control,Subject only,,,,,,Choose how the camera adjusts flash level when auto ISO sensitivity control is enabled. [Subject and background].\r
Custom settings menu,Modeling flash,,,,,,,"If [On] is selected when the camera is used with an optional flash unit that supports the Nikon Creative Lighting system, pressing a control to which [Preview] has been assigned using Custom Setting f2 [Custom controls] will emit a modeling flash"\r
Custom settings menu,Auto bracketing (mode M),,,,,,,The settings affected when bracketing is enabled in mode M are determined by the options selected for [Auto bracketing] > [Auto bracketing set] in the photo shooting menu and the option chosen for Custom Setting e6 [Auto bracketing (mode M)]\r
Custom settings menu,Bracketing order,,,,,,,"Choose the order in which the shots in the bracketing program are taken. The unmodified shot is taken first, followed by the shot with the lowest value, followed by the shot with the highest value."\r
Custom settings menu,Bracketing order,MTR > under > over,,,,,,"Choose the order in which the shots in the bracketing program are taken. The unmodified shot is taken first, followed by the shot with the lowest value, followed by the shot with the highest value."\r
Custom settings menu,Bracketing order,Under > MTR > over,,,,,,"Choose the order in which the shots in the bracketing program are taken. The unmodified shot is taken first, followed by the shot with the lowest value, followed by the shot with the highest value."\r
Photo shooting menu,Active D-Lighting,Off,,,,,,Active D-Lighting off.\r
Photo shooting menu,Active D-Lighting,Low,,,,,,\r
Photo shooting menu,Active D-Lighting,Normal,,,,,,\r
Photo shooting menu,Active D-Lighting,High,,,,,,\r
Photo shooting menu,Active D-Lighting,Extra high,,,,,,"Choose the amount of Active D-Lighting performed from [Extra high], [High], [Normal], and [Low]."\r
Photo shooting menu,Active D-Lighting,Auto,,,,,,The camera automatically adjusts Active D-Lighting in response to shooting conditions.\r
Custom settings menu,Customize i menu,,,,,,,The following items can be assigned to the i menu. [Frame size and rate/Image quality].\r
Custom settings menu,Custom controls,,,,,,,Choose the operations performed in photo mode using camera or lens controls or by pressing camera controls and rotating command dials\r
Custom settings menu,OK button,,,,,,,[Select center focus point] A Custom settings menu: Fine-Tuning Camera Settings.\r
Custom settings menu,Shutter spd & aperture lock,,,,,,,Selecting [On] for [Shutter speed lock] locks shutter speed at the value currently selected in mode S or M. Selecting [On] for [Aperture lock] locks aperture at the value currently selected in mode A or M\r
Custom settings menu,Customize command dials,,,,,,,Customize the operation of the main and sub-command dials. The selected settings also apply to the command dials on optional MB-N11 power battery packs.\r
Custom settings menu,Customize command dials,On,,,,,,Customize the operation of the main and sub-command dials. The selected settings also apply to the command dials on optional MB-N11 power battery packs.\r
Custom settings menu,Customize command dials,On,,,,,,"If is selected and [Focus mode/AF-area mode] has been assigned to a control using Custom Setting f2 [Custom controls], you can choose the AF-area mode by holding the control and rotating the main command dial and focus mode by holding the control and rotating the sub-command dial"\r
Custom settings menu,Customize command dials,Sub-dial frame advance,,,,,,"Playback menu,: The main command dial can be used to choose the picture displayed during full-frame Playback menu,. The sub-command dial can be used to skip forward or back according to the option selected for . During thumbnail Playback menu,, the main command dial can be used to highlight thumbnails and the sub-command dial to page up or down. Menus*:Use the main command dial to highlight menu items. Rotating the sub-command dial right displays the sub-menu for the highlighted option. Rotating it left displays the previous menu"\r
Photo shooting menu,High ISO NR,Low,,,,,,Noise reduction is performed only as required. The amount of noise reduction performed is always lower than when is selected.\r
Photo shooting menu,High ISO NR,High,,,,,,"Reduce noise in photographs taken at all ISO sensitivities. The higher the sensitivity, the greater the effect. Choose the amount of noise reduction performed from , [Normal], and [Low]."\r
Custom settings menu,Customize command dials,On (image review excluded),,,,,,Customize the operation of the main and sub-command dials. The selected settings also apply to the command dials on optional MB-N11 power battery packs.\r
Custom settings menu,Customize command dials,Use the multi selector to choose the picture displayed during full-frame Playback menu, or to highlight pictures or menu items.,,,,,","\r
Custom settings menu,Customize command dials,Skip forward or back 10 frames at a time.,,,,,,\r
Photo shooting menu,Vignette control,Vignette control disabled.,,,,,,Vignette control disabled.\r
Photo shooting menu,Vignette control,Low,,,,,,\r
Photo shooting menu,Vignette control,Normal,,,,,,\r
Photo shooting menu,Vignette control,High,,,,,,"Choose the amount of vignette control performed from (in order from high to low) [High], [Normal], and [Low]."\r
Custom settings menu,Customize command dials,Skip forward or back 50 frames at a time.,,,,,,\r
Custom settings menu,Customize command dials,Rating,,,,,,"Skip to the next or previous pictures with the selected rating. To choose the rating, highlight [Rating] and press 2"\r
Custom settings menu,Customize command dials,Protect,,,,,,Customize the operation of the main and sub-command dials. The selected settings also apply to the command dials on optional MB-N11 power battery packs.\r
Custom settings menu,Customize command dials,Still images only,,,,,,Customize the operation of the main and sub-command dials. The selected settings also apply to the command dials on optional MB-N11 power battery packs.\r
Custom settings menu,Customize command dials,Movies only,,,,,,Customize the operation of the main and sub-command dials. The selected settings also apply to the command dials on optional MB-N11 power battery packs.\r
Custom settings menu,Customize command dials,Folder,,,,,,Customize the operation of the main and sub-command dials. The selected settings also apply to the command dials on optional MB-N11 power battery packs.\r
Custom settings menu,Release button to use dial,,,,,,,"Selecting [Yes] allows adjustments that are normally made by holding a button and rotating a command dial to be made by rotating the command dial after the button is released. This ends when the button is pressed again, the shutter-r"\r
Custom settings menu,Reverse indicators,,,,,,,"Choose whether the exposure indicator is displayed with negative values on the left and positive values on the right, or with positive values on the left and negative values on the right. The indicator is displayed with positive values on the left and negative values on the right."\r
Photo shooting menu,Metering,Highlight-weighted metering,,,,,,"The camera assigns the greatest weight to highlights. Use this option to reduce loss of detail in highlights, for example when photographing spotlit performers on stage."\r
Photo shooting menu,Metering,Spot metering,,,,,,"The camera meters a circle with a diameter of 4 mm/0.16 in. (equivalent to approximately 1.5% of the frame). This ensures that the subject will be correctly exposed even when the background is much brighter or darker. The metered area is centered on the current focus point. If [Auto-area AF], [Auto-area AF (people)], or [Auto-area AF (animals)] is selected for AF-area mode (AF-Area Mode), the camera will instead meter the center focus point."\r
Photo shooting menu,Metering,Center-weighted metering,,,,,,"The camera assigns the greatest weight to the center of the frame. It can be used with subjects that dominate the composition, for example. Center-weighted metering is also recommended when using filters with an exposure factor (filter factor) over 1×. The size of the area assigned the greatest weight can be selected using Custom Setting b3 [Center-weighted area]."\r
Photo shooting menu,Metering,Matrix metering,,,,,,"The camera meters a wide area of the frame and sets exposure according to tone distribution, color, composition, and distance for results close to those seen by the naked eye."\r
Custom settings menu,Reverse ring for focus,,,,,,,Select [On] to reverse the direction of rotation for focus or control rings on Z mount lenses during manual focus. This option does not support:.\r
Custom settings menu,Assign MB-N11 buttons,,,,,,,"Choose the roles played by the controls on optional MB-N11 power battery packs in movie mode. The roles that can be assigned to these controls are listed below. For information on the listed roles, see the section on Custom Setting g2 [Custom controls]."\r
Custom settings menu,Customize i menu,,,,,,,The following items can be assigned to the i menu. [Frame size and rate/Image quality].\r
Custom settings menu,Custom controls,,,,,,,Choose the operations performed in movie mode using camera or lens controls or by pressing camera controls and rotating command dials\r
Custom settings menu,OK button,,,,,,,"Choose the role assigned to the J button in movie mode. Regardless of the option selected, the J button can be used for focus tracking (Subject-Tracking AF) when [Auto-area AF], [Auto-area AF (people)], or [Auto-area AF (animals)] is selected for AF-area mode"\r
Custom settings menu,AF speed,,,,,,,Choose the focus speed for movie mode. Use [When to apply] to choose when the selected option applies.\r
Photo shooting menu,Flash mode,Flash off,,,,,,The flash does not fire.\r
Photo shooting menu,Flash mode,Rear-curtain sync,,,,,,"The flash fires just before the shutter closes, creating the effect of a stream of light behind moving light sources. Selecting P or A after choosing this option sets the flash mode to slow sync. Note that photos may be prone to blurring due to camera shake at slow shutter speeds. Use of a tripod is recommended."\r
Photo shooting menu,Flash mode,Slow sync + red-eye,,,,,,Use to include background lighting in portraits. Red-eye reduction is combined with slow shutter speeds to capture background lighting at night or under low light. Note that photos may be prone to blurring due to camera shake at slow shutter speeds. Use of a tripod is recommended.\r
Photo shooting menu,Flash mode,Slow sync,,,,,,"As for “fill flash”, except that shutter speed slows automatically to capture background lighting at night or under low light. Note that photos may be prone to blurring due to camera shake at slow shutter speeds. Use of a tripod is recommended."\r
Photo shooting menu,Flash mode,Red-eye reduction,,,,,,"Use for portraits. The red-eye reduction lamp on the camera or flash unit lights before the flash fires, reducing “red-eye”. A flash unit with red-eye reduction is required. The desired results may not be achieved if the subject or camera moves before the shutter is released (this setting is not recommended with moving subjects or in other situations requiring a quick shutter response)."\r
Photo shooting menu,Flash mode,Fill flash,,,,,,"This mode is recommended in most situations. In modes P and A, shutter speed will automatically be set to values between 1/200 s (or 1/8000 s with auto FP high-speed sync) and 1/60 s."\r
Custom settings menu,AF speed,Always,,,,,,Choose the focus speed for movie mode. Use [When to apply] to choose when the selected option applies.\r
Custom settings menu,AF speed,Only while recording,,,,,,Choose the focus speed for movie mode. Use [When to apply] to choose when the selected option applies.\r
Custom settings menu,AF tracking sensitivity,,,,,,,The AF tracking sensitivity for movie mode can be set to values of from 1 to 7\r
Custom settings menu,Highlight display,,,,,,,Choose whether shading is used to indicate highlights (bright areas of the frame) during movie recording\r
Custom settings menu,Assign MB-N11 buttons,,,,,,,"Choose the roles played by the controls on optional MB-N11 power battery packs in movie mode. The roles that can be assigned to these controls are listed below. For information on the listed roles, see the section on Custom Setting g2 [Custom controls]."\r
Setup menu,Format memory card,,,,,,,"Format memory cards. To begin formatting, choose a memory card slot and select [Yes]. Note that formatting permanently deletes all pictures and other data on the card. Before formatting, be sure to make backup copies as required. Do not turn the camera off or remove memory cards until the message [Formatting memory card] clears from the display."\r
Setup menu,Save user settings,,,,,,,Frequently-used combinations of settings can be assigned to the U1 to U3 positions on the mode dial (Save User Settings)\r
Setup menu,Reset user settings,,,,,,,Reset settings for U1 to U3 to default values (Resetting User Settings)\r
Photo shooting menu,Focus mode,Manual focus,,,,,,Focus manually (Manual Focus). The shutter can be released whether or not the subject is in focus.\r
Photo shooting menu,Focus mode,Full-time AF,,,,,,"The camera adjusts focus continuously in response to subject movement or changes in composition. When the shutter-release button is pressed halfway, the focus point will turn from red to green and focus will lock. This option is only available in movie mode."\r
Photo shooting menu,Focus mode,Continuous AF,,,,,,"For moving subjects. The camera adjusts focus continuously in response to changes in the distance to the subject while the shutter-release button is pressed halfway. At default settings, the shutter can be released whether or not the subject is in focus (release priority)."\r
Photo shooting menu,Focus mode,Single AF,,,,,,"Use with stationary subjects. When you press the shutter-release button halfway to focus, the focus point will turn from red to green and focus will lock. If the camera fails to focus, the focus point will flash red and the shutter release will be disabled. At default settings, the shutter can only be released if the camera is able to focus (focus priority)."\r
Setup menu,Language,,,,,,,Choose a language for camera menus and messages. The languages available vary with the country or region in which the camera was originally purchased. B The Setup Menu: Camera Setup.\r
Setup menu,Time zone and date,,,,,,,Change time zones and set the camera clock. We recommend that the camera clock be adjusted regularly. Choose a time zone. [Date and time] is automatically set to the time in the new time zone.\r
Setup menu,Time zone and date,Date and time,,,,,,Change time zones and set the camera clock. We recommend that the camera clock be adjusted regularly. Choose a time zone. [Date and time] is automatically set to the time in the new time zone.\r
Setup menu,Time zone and date,Time zone,,,,,,Change time zones and set the camera clock. We recommend that the camera clock be adjusted regularly. Choose a time zone. [Date and time] is automatically set to the time in the new time zone.\r
Setup menu,Time zone and date,"Choose the order in which the day, month, and year are displayed.",,,,,,\r
Photo shooting menu,AF-area mode,Auto-area AF (animals),,,,,,\r
Photo shooting menu,AF-area mode,Auto-area AF (people),,,,,,\r
Photo shooting menu,AF-area mode,Auto-area AF,,,,,,"The camera automatically detects the subject and selects the focus area. Use on occasions when you don’t have time to select the focus point yourself, for portraits, or for snapshots and other spur-of-the-moment photos. If [Auto-area AF (people)] is selected, the camera will detect and focus on the faces or eyes of human portrait subjects (face/eye-detection AF, Focusing on the Faces or Eyes of Portrait Subjects (Face/Eye-Detection AF)). If [Auto-area AF (animals)] is selected, the camera will detect and focus on the faces or eyes of dogs and cats (animal-detection AF, Focusing on the Faces or Eyes of Animals (Animal-Detection AF)). Subject tracking (Subject-Tracking AF) can be initiated by pressing the J button. Custom Setting f2 or g2 [Custom controls] can be used to configure the Fn1 or Fn2 button to start subject-tracking AF (f2: Custom Controls, g2: Custom Controls). Subject-tracking AF can also be assigned to the lens Fn or Fn2 button using Custom Setting f2 [Custom controls]."\r
Photo shooting menu,AF-area mode,Wide-area AF (L‑animals),,,,,,\r
Photo shooting menu,AF-area mode,Wide-area AF (L‑people),,,,,,\r
Photo shooting menu,AF-area mode,Wide-area AF (L),,,,,,\r
Photo shooting menu,AF-area mode,Wide-area AF (S),,,,,,"As for single-point AF except that the camera focuses on a wider area. Choose for snapshots, subjects that are in motion, and other subjects that are difficult to photograph using single-point AF. During movie recording, wide-area AF can be used for smooth focus when making panning or tilting shots or filming moving subjects. If the selected focus area contains subjects at different distances from the camera, the camera will assign priority to the closest subject. The focus areas for [Wide-area AF (L)] are larger than those for [Wide-area AF (S)]. If [Wide-area AF (L-people)] is selected, the camera will detect and focus on the faces or eyes of human portrait subjects (face/eye-detection AF, Focusing on the Faces or Eyes of Portrait Subjects (Face/Eye-Detection AF)). If [Wide-area AF (L-animals)] is selected, the camera will detect and focus on the faces or eyes of dogs and cats (animal-detection AF, Focusing on the Faces or Eyes of Animals (Animal-Detection AF))."\r
Photo shooting menu,AF-area mode,Dynamic-area AF,,,,,,"The camera focuses on a point selected by the user. If the subject briefly leaves the selected point, the camera will focus based on information from surrounding focus points. Use for photographs of athletes and other active subjects that are hard to frame using single-point AF. This option is only available when photo mode is selected and [Continuous AF] is chosen for focus mode."\r
Photo shooting menu,AF-area mode,Single-point AF,,,,,,The camera focuses on a point selected by the user. Use with stationary subjects.\r
Photo shooting menu,AF-area mode,Pinpoint AF,,,,,,"With a focus area smaller than that employed for single-point AF, pinpoint AF is used for pinpoint focus on a selected spot in the frame. Focusing may be slower than with single-point AF. Recommended for shots involving static subjects, such as buildings, in-studio product photography, or close-ups. This option is only available when photo mode is selected and [Single AF] is chosen for focus mode."\r
Setup menu,Time zone and date,On,,,,,,"Select to turn daylight saving time on, [Off] to turn it off. Selecting automatically advances the clock one hour. The default setting is [Off]"\r
Setup menu,Monitor brightness,,,,,,,[Monitor brightness] can only be adjusted when the monitor is the active display. It cannot be adjusted when [Viewfinder only] is selected for monitor mode or when your eye is to the viewfinder. Higher values increase the drain on the battery.\r
Setup menu,Monitor color balance,,,,,,,Adjust monitor color balance to your taste. [Monitor color balance] can only be adjusted when the monitor is the active display. It cannot be adjusted when [Viewfinder only] is selected for monitor mode or when your eye is to the viewfinder.\r
Setup menu,Viewfinder brightness,,,,,,,Adjust viewfinder brightness. [Viewfinder brightness] can only be adjusted when the viewfinder is the active display. It cannot be adjusted when the monitor is on or when [Monitor only] is selected for monitor mode. Higher values increase the drain on the battery.\r
Setup menu,Viewfinder brightness,Viewfinder brightness is adjusted automatically in response to lighting conditions.,,,,,,\r
Setup menu,Viewfinder brightness,"Press 1 or 3 to adjust brightness manually. Choose higher values for increased brightness, lower values for reduced brightness.",,,,,,\r
Setup menu,Viewfinder color balance,,,,,,,Adjust viewfinder color balance to your taste. [Viewfinder color balance] can only be adjusted when the viewfinder is the active display. It cannot be adjusted in the monitor or when [Monitor only] is selected for monitor mode.\r
Setup menu,Control panel brightness,,,,,,,Adjust the brightness of the control panel. Raising control panel brightness increases the drain on the battery.\r
Setup menu,Control panel brightness,Control panel brightness is adjusted automatically in response to ambient lighting.,,,,,,\r
Setup menu,Control panel brightness,Press 1 or 3 to adjust control panel brightness.,,,,,,\r
Setup menu,Control panel brightness,Turn the control panel off.,,,,,,\r
Photo shooting menu,Vibration reduction,Off,,,,,,Vibration reduction is disabled.\r
Photo shooting menu,Vibration reduction,Sport,,,,,,Choose when photographing athletes and other subjects that are moving rapidly and unpredictably.\r
Photo shooting menu,Vibration reduction,On,,,,,,Choose for enhanced vibration reduction when photographing static subjects.\r
Setup menu,Limit monitor mode selection,,,,,,,Choose the monitor modes that can be selected using the M button\r
Setup menu,Information display,,,,,,,"Adjust the appearance of the information display according to lighting conditions. To make the display easier to read in bright locations, the monitor lights and the lettering is displayed in black."\r
Setup menu,Information display,Dark on light,,,,,,"Adjust the appearance of the information display according to lighting conditions. To make the display easier to read in bright locations, the monitor lights and the lettering is displayed in black."\r
Setup menu,Information display,Light on dark,,,,,,"Adjust the appearance of the information display according to lighting conditions. To make the display easier to read in bright locations, the monitor lights and the lettering is displayed in black."\r
Setup menu,AF fine-tuning options,,,,,,,"We recommend that you perform fine-tuning at a focus distance you use frequently. If you perform focus-tuning at a short focus distance, for example, you may find it less effective at longer distances"\r
Setup menu,AF fine-tuning options,On,,,,,,Fine-tune focus for the current lens. Use only as required.\r
Setup menu,AF fine-tuning options,"Fine-tune focus for the current lens. Press 1 or 3 to highlight items and press 4 or 2 to choose from values between +20 and –20. The larger the fine-tuning value, the farther the focal point is from the lens; the smaller the value, the closer the focal point. The display shows the current and previous values. The camera can store values for up to 40 lens types. New values overwrite existing values.",,,,,,\r
Setup menu,AF fine-tuning options,Fine-tune and save lens,,,,,,Choose the fine-tuning values for lenses for which no values have previously been saved using . Press 4 or 2 to choose from values between +20 and –20\r
Setup menu,AF fine-tuning options,Fine-tune and save lens,,,,,,"List values saved using . Highlighting a lens in the list and pressing 2 displays a [Choose lens number] dialog. The [Choose lens number] dialog is used to enter the lens identifier. In the case of Z mount lenses and some F mount lenses, the lens serial number is entered automatically"\r
Setup menu,Non-CPU lens data,,,,,,,"Record data for non-CPU lenses attached using an optional mount adapter. Recording the focal length and maximum aperture of non-CPU lenses allows them to be used with some camera features normally reserved for CPU lenses, such as on-board vibration reduction. Choose a lens identifier."\r
Setup menu,Non-CPU lens data,Choose a lens identifier.,,,,,,\r
Setup menu,Non-CPU lens data,Enter the focal length.,,,,,,\r
Setup menu,Non-CPU lens data,Enter the maximum aperture.,,,,,,\r
Setup menu,Save focus position,,,,,,,"If [On] is selected, the camera will save the focus position in effect when the camera is turned off and restore it when the camera is turned on"\r
Setup menu,Clean image sensor,,,,,,,Dirt or dust entering the camera when lenses are exchanged or the body cap is removed may adhere to the image sensor and affect your photographs. The “clean image sensor” option vibrates the sensor to remove dust. Perform image sensor cleaning immediately.\r
Setup menu,Clean image sensor,Perform image sensor cleaning immediately.,,,,,,\r
Setup menu,Clean image sensor,Clean at shutdown,,,,,,Dirt or dust entering the camera when lenses are exchanged or the body cap is removed may adhere to the image sensor and affect your photographs. The “clean image sensor” option vibrates the sensor to remove dust. Perform image sensor cleaning immediately.\r
Setup menu,Image Dust Off ref photo,,,,,,,"Acquire reference data for the Image Dust Off option in NX Studio. Image Dust Off processes NEF (RAW) pictures to mitigate effects caused by dust adhering in front of the camera image sensor. For more information, refer to NX Studio’s online help. Choose a start option."\r
Setup menu,Pixel mapping,,,,,,,"Pixel mapping checks and optimizes the camera image sensor. If you notice unexpected bright spots appearing in pictures taken with the camera, perform pixel mapping as described below. Pixel mapping is available only when a Z mount lens or an optional FTZ mount adapter is attached."\r
Setup menu,Image comment,,,,,,,Add a comment to new photographs as they are taken. Comments can be viewed in the NX Studio [Info] tab. Comments can be viewed on the shooting data page in the photo information display.\r
Setup menu,Copyright information,,,,,,,"Add copyright information to new photographs as they are taken. Copyright information can be viewed in the NX Studio [Info] tab. To prevent unauthorized use of the artist or copyright holder names, make sure that [Attach copyright information] is not selected before lending or transferring the camera to another person. You will also need to make sure that the artist and copyright fields are blank."\r
Movie shooting menu,Manage Picture Control,Copy custom Picture Controls to and from the memory card.,,,,,,Copy custom Picture Controls to and from the memory card.\r
Movie shooting menu,Manage Picture Control,Delete custom Picture Controls.,,,,,,Delete custom Picture Controls.\r
Movie shooting menu,Manage Picture Control,Rename custom Picture Controls.,,,,,,Rename custom Picture Controls.\r
Movie shooting menu,Manage Picture Control,"Create a new custom Picture Control based on an existing preset or custom Picture
                                                         Control, or edit existing custom Picture Controls.",,,,,,"Create a new custom Picture Control based on an existing preset or custom Picture Control, or edit existing custom Picture Controls."\r
Setup menu,Beep options,,,,,,,"If [On] is selected for [Beep on/off], beeps sound when:"\r
Setup menu,Touch controls,,,,,,,"Adjust settings for monitor touch controls. Enable or disable touch controls. Select [Playback menu, only] to enable touch controls in Playback menu, mode only."\r
Setup menu,Touch controls,LeftURight,,,,,,"Adjust settings for monitor touch controls. Enable or disable touch controls. Select [Playback menu, only] to enable touch controls in Playback menu, mode only."\r
Setup menu,Touch controls,LeftVRight,,,,,,"Adjust settings for monitor touch controls. Enable or disable touch controls. Select [Playback menu, only] to enable touch controls in Playback menu, mode only."\r
Setup menu,HDMI,,,,,,,\r
Movie shooting menu,Active D-Lighting,Off,,,,,,Active D-Lighting off.\r
Movie shooting menu,Active D-Lighting,Low,,,,,,\r
Movie shooting menu,Active D-Lighting,Normal,,,,,,\r
Movie shooting menu,Active D-Lighting,High,,,,,,\r
Movie shooting menu,Active D-Lighting,Extra high,,,,,,"Choose the amount of Active D-Lighting performed from [Extra high], [High], [Normal], and [Low]."\r
Movie shooting menu,Active D-Lighting,Auto,,,,,,The camera automatically adjusts Active D-Lighting in response to shooting conditions.\r
Setup menu,Location data,,,,,,,"Adjust settings for use when the camera is connected to a GPS receiver. If [Enable] is selected when a GPS receiver is connected, the standby timer will expire if no operations are performed for the time selected for Custom Setting c3 [Power off delay] > [Standby timer]. Choose this option to reduce the drain on the battery."\r
Setup menu,Location data,Enable,,,,,,"Adjust settings for use when the camera is connected to a GPS receiver. If [Enable] is selected when a GPS receiver is connected, the standby timer will expire if no operations are performed for the time selected for Custom Setting c3 [Power off delay] > [Standby timer]. Choose this option to reduce the drain on the battery."\r
Setup menu,Location data,View the location data supplied by the GPS receiver. The items displayed vary with the source.,,,,,,\r
Setup menu,Location data,Yes,,,,,,"Adjust settings for use when the camera is connected to a GPS receiver. If [Enable] is selected when a GPS receiver is connected, the standby timer will expire if no operations are performed for the time selected for Custom Setting c3 [Power off delay] > [Standby timer]. Choose this option to reduce the drain on the battery."\r
Setup menu,Wireless remote (WR) options,,,,,,,"Adjust status LED and link mode settings for optional WR-R10 wireless remote controllers. You can also choose a link mode for connection to optional radio-controlled flash units that support Advanced Wireless Lighting. Enable or disable the status LEDs on a WR-R10 wireless remote controller mounted on the camera. For more information, see the documentation supplied with the wireless remote controller."\r
Setup menu,Wireless remote (WR) options,"The camera connects only to devices with which it has previously been paired. Press the pairing button on the wireless remote controller connected to the camera to pair it with other devices. As camera will not communicate with devices with which it has not been paired, this option can be used to prevent signal interference from other devices in the vicinity. Given that each device must be paired separately, however, PIN is recommended when connecting to a large number of devices.",,,,,,\r
Setup menu,Wireless remote (WR) options,"Communication is shared among all devices with the same four-digit PIN. Connect using a four-digit PIN. Press 4 or 2 to highlight digits and press 1 or 3 to change. Press J to enter and display the selected PIN. This option is a good choice for photography featuring a large number of remote devices. If there are multiple cameras present that share the same PIN, the flash units will be under the sole control of the camera that connects first, preventing all other cameras from connecting (the LEDs on the wireless remote controllers connected to the affected cameras will blink).",,,,,,\r
Movie shooting menu,High ISO NR,Low,,,,,,Noise reduction is performed only as required. The amount of noise reduction performed is always lower than when is selected.\r
Movie shooting menu,High ISO NR,High,,,,,,"Reduce noise in photographs taken at all ISO sensitivities. The higher the sensitivity, the greater the effect. Choose the amount of noise reduction performed from , [Normal], and [Low]."\r
Setup menu,Assign remote (WR) Fn button,,,,,,,Choose the role played by the Fn button on optional wireless remote controllers equipped with an Fn button. See Custom Setting f2 [Custom controls] for more information\r
Setup menu,Airplane mode,,,,,,,Select [Enable] to disable the camera’s built-in Bluetooth and Wi-Fi functions. The wireless functions of optional peripheral devices connected to the camera can only be disabled by disconnecting the devices.\r
Setup menu,Connect to smart device,,,,,,,Connect to smartphones or tablets (smart devices) via Bluetooth or Wi-Fi. Pair with or connect to smart devices using Bluetooth.\r
Movie shooting menu,Vignette control,Vignette control disabled.,,,,,,Vignette control disabled.\r
Movie shooting menu,Vignette control,Low,,,,,,\r
Movie shooting menu,Vignette control,Normal,,,,,,\r
Movie shooting menu,Vignette control,High,,,,,,"Choose the amount of vignette control performed from (in order from high to low) [High], [Normal], and [Low]."\r
Setup menu,Connect to smart device,Pair the camera with a smart device (Connecting via Bluetooth).,,,,,,\r
Setup menu,Connect to smart device,"List paired smart devices. To connect, select a device from the list.",,,,,,\r
Setup menu,Connect to smart device,Enable,,,,,,Select to enable Bluetooth\r
Setup menu,Connect to smart device,On,,,,,,"Select to mark pictures for upload as they are taken. Photos are uploaded in JPEG format at a size of 2 megapixels, even if other upload size and format options are selected with the camera. Photos taken in movie mode will not be uploaded. They must be uploaded manually"\r
Setup menu,Connect to smart device,Upload selected pictures. Transfer marking appears on the selected pictures.,,,,,,\r
Setup menu,Connect to smart device,Remove transfer marking from all pictures.,,,,,,\r
Setup menu,Connect to smart device,Choose the camera SSID.,,,,,,\r
Setup menu,Connect to smart device,OPEN,,,,,,Choose or [WPA2-PSK-AES]\r
Movie shooting menu,Metering,Highlight-weighted metering,,,,,,"The camera assigns the greatest weight to highlights. Use this option to reduce loss of detail in highlights, for example when photographing spotlit performers on stage."\r
Movie shooting menu,Metering,Spot metering,,,,,,"The camera meters a circle with a diameter of 4 mm/0.16 in. (equivalent to approximately 1.5% of the frame). This ensures that the subject will be correctly exposed even when the background is much brighter or darker. The metered area is centered on the current focus point. If [Auto-area AF], [Auto-area AF (people)], or [Auto-area AF (animals)] is selected for AF-area mode (AF-Area Mode), the camera will instead meter the center focus point."\r
Movie shooting menu,Metering,Center-weighted metering,,,,,,"The camera assigns the greatest weight to the center of the frame. It can be used with subjects that dominate the composition, for example. Center-weighted metering is also recommended when using filters with an exposure factor (filter factor) over 1×. The size of the area assigned the greatest weight can be selected using Custom Setting b3 [Center-weighted area]."\r
Movie shooting menu,Metering,Matrix metering,,,,,,"The camera meters a wide area of the frame and sets exposure according to tone distribution, color, composition, and distance for results close to those seen by the naked eye."\r
Setup menu,Connect to smart device,Choose the camera password.,,,,,,\r
Setup menu,Connect to smart device,Auto,,,,,,Connect to smartphones or tablets (smart devices) via Bluetooth or Wi-Fi. Pair with or connect to smart devices using Bluetooth.\r
Setup menu,Connect to smart device,View current Wi-Fi settings.,,,,,,\r
Setup menu,Connect to smart device,Yes,,,,,,Connect to smartphones or tablets (smart devices) via Bluetooth or Wi-Fi. Pair with or connect to smart devices using Bluetooth.\r
Setup menu,Connect to PC,,,,,,,Select [Enable] to connect using the settings currently selected for [Network settings]\r
Movie shooting menu,Focus mode,Manual focus,,,,,,Focus manually (Manual Focus). The shutter can be released whether or not the subject is in focus.\r
Movie shooting menu,Focus mode,Full-time AF,,,,,,"The camera adjusts focus continuously in response to subject movement or changes in composition. When the shutter-release button is pressed halfway, the focus point will turn from red to green and focus will lock. This option is only available in movie mode."\r
Movie shooting menu,Focus mode,Continuous AF,,,,,,"For moving subjects. The camera adjusts focus continuously in response to changes in the distance to the subject while the shutter-release button is pressed halfway. At default settings, the shutter can be released whether or not the subject is in focus (release priority)."\r
Movie shooting menu,Focus mode,Single AF,,,,,,"Use with stationary subjects. When you press the shutter-release button halfway to focus, the focus point will turn from red to green and focus will lock. If the camera fails to focus, the focus point will flash red and the shutter release will be disabled. At default settings, the shutter can only be released if the camera is able to focus (focus priority)."\r
Setup menu,Connect to PC,Profile name,,,,,,": Rename the profile. The default profile name is the same as the network SSID. [Password protection]: Select [On] to require that a password be entered before the profile can be changed. To change the password, highlight [On] and press 2"\r
Setup menu,Connect to PC,SSID,,,,,,"Infrastructure mode: Adjust settings for connection to a network via a router. : Enter the network SSID. [Channel]: Selected automatically. [Authentication/encryption]: Choose [OPEN] or [WPA2-PSK-AES]. [Password]: Enter the network password. Access-point mode: Adjust settings for direct wireless connection to the camera. : Choose the camera SSID. [Channel]: Choose [Auto] or [Manual]. [Authentication/encryption]: Choose [OPEN] or [WPA2-PSK-AES]. [Password]: If [WPA2-PSK-AES] is selected for [Authentication/encryption], you can choose the camera password"\r
Setup menu,Connect to PC,Enable,,,,,,"Adjust TCP/IP settings for infrastructure connections. An IP address is required. If is selected for [Obtain automatically], the IP address and sub-net mask for infrastructure mode connections will be acquired via a DHCP server or automatic IP addressing. Select [Disable] to enter the IP address ([Address]) and sub-net mask ([Mask]) manually"\r
Setup menu,Wireless transmitter (WT‑7),,,,,,,Adjust settings for connection to computers or ftp servers via wireless or Ethernet networks using an optional WT-7 wireless transmitter. This item is available only when an optional WT-7 wireless transmitter is connected. The options selected for [Connect to smart device] and [Connect to PC] are automatically disabled when the WT-7 is connected and turned on.\r
Setup menu,Conformity marking,,,,,,,\r
Movie shooting menu,AF-area mode,Auto-area AF (animals),,,,,,\r
Movie shooting menu,AF-area mode,Auto-area AF (people),,,,,,\r
Movie shooting menu,AF-area mode,Auto-area AF,,,,,,"The camera automatically detects the subject and selects the focus area. Use on occasions when you don’t have time to select the focus point yourself, for portraits, or for snapshots and other spur-of-the-moment photos. If [Auto-area AF (people)] is selected, the camera will detect and focus on the faces or eyes of human portrait subjects (face/eye-detection AF, Focusing on the Faces or Eyes of Portrait Subjects (Face/Eye-Detection AF)). If [Auto-area AF (animals)] is selected, the camera will detect and focus on the faces or eyes of dogs and cats (animal-detection AF, Focusing on the Faces or Eyes of Animals (Animal-Detection AF)). Subject tracking (Subject-Tracking AF) can be initiated by pressing the J button. Custom Setting f2 or g2 [Custom controls] can be used to configure the Fn1 or Fn2 button to start subject-tracking AF (f2: Custom Controls, g2: Custom Controls). Subject-tracking AF can also be assigned to the lens Fn or Fn2 button using Custom Setting f2 [Custom controls]."\r
Movie shooting menu,AF-area mode,Wide-area AF (L‑animals),,,,,,\r
Movie shooting menu,AF-area mode,Wide-area AF (L‑people),,,,,,\r
Movie shooting menu,AF-area mode,Wide-area AF (L),,,,,,\r
Movie shooting menu,AF-area mode,Wide-area AF (S),,,,,,"As for single-point AF except that the camera focuses on a wider area. Choose for snapshots, subjects that are in motion, and other subjects that are difficult to photograph using single-point AF. During movie recording, wide-area AF can be used for smooth focus when making panning or tilting shots or filming moving subjects. If the selected focus area contains subjects at different distances from the camera, the camera will assign priority to the closest subject. The focus areas for [Wide-area AF (L)] are larger than those for [Wide-area AF (S)]. If [Wide-area AF (L-people)] is selected, the camera will detect and focus on the faces or eyes of human portrait subjects (face/eye-detection AF, Focusing on the Faces or Eyes of Portrait Subjects (Face/Eye-Detection AF)). If [Wide-area AF (L-animals)] is selected, the camera will detect and focus on the faces or eyes of dogs and cats (animal-detection AF, Focusing on the Faces or Eyes of Animals (Animal-Detection AF))."\r
Movie shooting menu,AF-area mode,Dynamic-area AF,,,,,,"The camera focuses on a point selected by the user. If the subject briefly leaves the selected point, the camera will focus based on information from surrounding focus points. Use for photographs of athletes and other active subjects that are hard to frame using single-point AF. This option is only available when photo mode is selected and [Continuous AF] is chosen for focus mode."\r
Movie shooting menu,AF-area mode,Single-point AF,,,,,,The camera focuses on a point selected by the user. Use with stationary subjects.\r
Movie shooting menu,AF-area mode,Pinpoint AF,,,,,,"With a focus area smaller than that employed for single-point AF, pinpoint AF is used for pinpoint focus on a selected spot in the frame. Focusing may be slower than with single-point AF. Recommended for shots involving static subjects, such as buildings, in-studio product photography, or close-ups. This option is only available when photo mode is selected and [Single AF] is chosen for focus mode."\r
Setup menu,Battery info,,,,,,,View information on the battery currently inserted in the camera. The number of times the shutter has been released since the battery was last charged.\r
Setup menu,Battery info,"The current battery level, expressed as a percentage.",,,,,,\r
Setup menu,Battery info,The number of times the shutter has been released since the battery was last charged.,,,,,,\r
Setup menu,Battery info,A five-level display showing battery age. A value of “0” (k) indicates that battery performance is unimpaired. A value of “4” (l) indicates that the battery has reached the end of its charging life. Replace the battery.,,,,,,\r
Setup menu,USB power delivery,,,,,,,Choose whether optional charging AC adapters or computers connected via USB can be used to power the camera (USB power delivery). USB power delivery allows the camera to be used while limiting the drain on the battery. The camera draws power from connected devices while on. Connected devices will also supply power when the camera is off if Bluetooth upload is in progress or the memory card access lamp is lit.\r
Setup menu,USB power delivery,The camera draws power from connected devices while on. Connected devices will also supply power when the camera is off if Bluetooth upload is in progress or the memory card access lamp is lit.,,,,,,\r
Setup menu,USB power delivery,The camera does not draw power from connected devices at any time.,,,,,,\r
Setup menu,Energy saving (photo mode),,,,,,,"In photo mode, the shooting display will dim to save power approximately 15 seconds before the standby timer expires. Enable energy saving. The display refresh rate may drop."\r
Setup menu,Energy saving (photo mode),Enable energy saving. The display refresh rate may drop.,,,,,,\r
Setup menu,Energy saving (photo mode),Disable,,,,,,"In photo mode, the shooting display will dim to save power approximately 15 seconds before the standby timer expires. Enable energy saving. The display refresh rate may drop."\r
Setup menu,Slot empty release lock,,,,,,,Choose whether the shutter can be released when no memory card is inserted in the camera. The shutter cannot be released when no memory card is inserted.\r
Movie shooting menu,Vibration reduction,Off,,,,,,Vibration reduction is disabled.\r
Movie shooting menu,Vibration reduction,Sport,,,,,,Choose when photographing athletes and other subjects that are moving rapidly and unpredictably.\r
Movie shooting menu,Vibration reduction,On,,,,,,Choose for enhanced vibration reduction when photographing static subjects.\r
Setup menu,Slot empty release lock,Release locked,,,,,,Choose whether the shutter can be released when no memory card is inserted in the camera. The shutter cannot be released when no memory card is inserted.\r
Setup menu,Slot empty release lock,Enable release,,,,,,"The shutter can be released with no memory card inserted. No pictures will be recorded; during Playback menu,, the camera displays [Demo]"\r
Setup menu,Save/load menu settings,,,,,,,"Save current camera menu settings to a memory card. You can also load saved settings, allowing menu settings to be shared among cameras of the same model. If two memory cards are inserted, the settings will be saved to the card in the slot selected using [Primary slot selection] in the photo shooting menu."\r
Setup menu,Reset all settings,,,,,,,"Reset all settings except [Language] and [Time zone and date] to their default values. Copyright information and other user-generated entries are also reset. Once reset, settings cannot be restored. We recommend that you save settings using the [Save/load menu settings] item in the setup menu before performing a reset."\r
Movie shooting menu,Electronic VR,Electronic vibration reduction is disabled.,,,,,,Electronic vibration reduction is disabled.\r
Movie shooting menu,Electronic VR,On,,,,,,"Enable electronic vibration reduction during movie recording. Note that when is selected, the angle of view will be reduced, slightly increasing the apparent focal length."\r
Setup menu,Firmware version,,,,,,,View the current camera firmware version. Firmware updates can be performed if the memory card contains a new version of the camera firmware. Firmware updates can be performed whenever the memory card contains a new version of the camera firmware. Updates can be performed using a computer or smart device.\r
Retouch menu,NEF (RAW) processing,,,,,,,The process of converting NEF (RAW) images to other formats such as JPEG is referred to as “NEF (RAW) processing”. JPEG copies of NEF (RAW) pictures can be created on the camera as described below. Choose a destination.\r
Retouch menu,NEF (RAW) processing,Create JPEG copies of selected NEF (RAW) images. Multiple NEF (RAW) images can be selected.,,,,,,\r
Retouch menu,NEF (RAW) processing,Create JPEG copies of all NEF (RAW) pictures taken on selected dates.,,,,,,\r
Retouch menu,NEF (RAW) processing,Create JPEG copies of all NEF (RAW) pictures in a selected folder.,,,,,,\r
Retouch menu,Trim,,,,,,,Create a cropped copy of the selected photograph. The photograph is displayed with the selected crop shown in yellow; create a cropped copy as described below. Change the crop aspect ratio.\r
Retouch menu,Resize,,,,,,,"Create small copies of selected photographs. If two memory cards are inserted, you can choose the card used to store the resized copies. Choose a destination."\r
Retouch menu,Resize,Resize selected pictures. Multiple pictures can be selected.,,,,,,\r
Retouch menu,Resize,Resize all pictures taken on selected dates.,,,,,,\r
Retouch menu,Resize,Resize all pictures in a selected folder.,,,,,,\r
Retouch menu,D-Lighting,,,,,,,D-Lighting brightens shadows. It is ideal for dark or backlit photographs. The edit display shows before and after images.\r
Retouch menu,Red-eye correction,,,,,,,Correct “red-eye” caused by light from the flash reflecting from the retinas of portrait subjects. Red-eye correction is available only with photographs taken using a flash.\r
Retouch menu,Straighten,,,,,,,Rotate pictures by up to ±5° in increments of approximately 0.25°\r
Retouch menu,Distortion control,,,,,,,Create copies with reduced peripheral distortion; this can reduce barrel distortion in pictures taken with wide-angle lenses or pin-cushion distortion in pictures taken with telephoto lenses. Select [Auto] to let the camera correct distortion automatically and then make fine adjustments using the multi selector. Select [Manual] to reduce distortion manually. The effect can be previewed in the edit display.\r
Retouch menu,Perspective control,,,,,,,Create copies that reduce the effects of perspective in photos taken looking up from the base of a tall object. The effect can be previewed in the edit display.\r
Retouch menu,Monochrome,,,,,,,\r
Retouch menu,Image overlay,,,,,,,"Image overlay combines existing photographs to create a single picture that is saved separately from the originals. One NEF (RAW) image can be overlaid on another using additive blending ([Add]), or multiple images can be combined using [L"\r
Retouch menu,Image overlay,Select pictures for the overlay one-by-one.,,,,,,\r
Retouch menu,Image overlay,Select two pictures; the overlay will include the two pictures and all images between them.,,,,,,\r
Retouch menu,Image overlay,The overlay will include all pictures in the selected folder.,,,,,,\r
Retouch menu,Trim movie,,,,,,,Create a copy from which unwanted footage has been removed (Choose Start/End Point)\r
Setup menu,HDMI,Auto,,,,,,"The RGB video signal input range varies with the HDMI device. , which matches the output range to the HDMI device, is recommended in most situations. If the camera is unable to determine the correct RGB video signal output range for the HDMI device, you can choose from the following options: [Limited range]: For devices with an RGB video signal input range of 16 to 235. Choose this option if you notice a loss of detail in shadows. [Full range]: For devices with an RGB video signal input range of 0 to 255. Choose this option if you notice that shadows are “washed out” or too bright."\r
Setup menu,HDMI,On,,,,,,"Choosing allows camera controls to be used to start and stop recording when the camera is connected via HDMI to a third-party recorder that supports the Atomos Open Protocol. External recording control is available with Atomos SHOGUN, NINJA, and SUMO-series Monitor recorders. For more information on device features and operation, contact the manufacturer or refer to the documentation provided with the recorder. The camera display will turn off automatically when the time selected for Custom Setting c3 [Power off delay] > [Standby timer] expires, ending HDMI output. When recording movies to an external device, select [Standby timer] and choose [No limit] or a time longer than the anticipated recording time. An icon will be displayed in the camera monitor when is selected: A is displayed during filming, B while movies are being recorded. During recording, check the recorder and recorder display to ensure that footage is being saved to the device. Note that selecting may disrupt the footage output to the device."\r
Setup menu,HDMI,Choose a bit depth for HDMI output.,,,,,,Choose a bit depth for HDMI output.\r
Setup menu,HDMI,N-Log,,,,,,Preserve details in highlights and shadows and avoid over-saturated colors when recording movies. is intended for footage that will be color graded during post-production. [HDR (HLG)] is used to record footage in HLG format for such applications as HDR broadcasting. The selected options appear in the shooting display. The footage will be recorded directly to the external device. It cannot be saved to the camera memory card. This option is available only when [10 bit] is selected for [Output data depth]. The minimum values available for the [ISO sensitivity settings] > [Maximum sensitivity] and [ISO sensitivity (Mode M)] items in the Movie shooting menu are respectively ISO 1600 and ISO 800; the maximum for both is ISO 25600 (Z 7II) or 51200 (Z 6II).\r
Setup menu,HDMI,On,,,,,,"Choose for a live preview of video footage recorded with [N-Log] or [HDR (HLG)] selected for [N-Log/HDR (HLG) output options], but note that the colors in the preview are simplified for enhanced contrast. This has no effect on the footage actually recorded."\r
My Menu,Add items,,,,,,,\r
My Menu,Remove items,,,,,,,\r
My Menu,Rank items,,,,,,,\r
My Menu,Choose tab,MY MENU,,,,,,\r
My Menu,Choose tab,RECENT SETTINGS,,,,,,\r
Recent settings,Choose tab,MY MENU,,,,,,\r
Recent settings,Choose tab,RECENT SETTINGS,,,,,,\r
camera_menu_config,,,,,,,,\r
brand,Nikon,,,,,,,\r
model,Z6II,,,,,,,\r
css_file,nikonZ6ii,,,,,,,\r
`,mf=`"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Standard,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Vivid,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Natural,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Flat,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Landscape,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Portrait,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Monochrome,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,L.Monochrome,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,L.Monochrome D,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Cinelike D,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Cinelike V,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Like709,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Standard(HLG),,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,Monochrome(HLG),,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 1,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 2,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 3,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 4,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 5,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 6,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 7,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 8,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 9,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Photo Style,MY PHOTO STYLE 10,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Metering Mode,Multiple,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Metering Mode,Center Weighted,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Metering Mode,Spot,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Metering Mode,Highlight Weighted,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Aspect Ratio,4:3,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Aspect Ratio,3:2,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Aspect Ratio,16:9,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Aspect Ratio,1:1,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Aspect Ratio,65:24,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Aspect Ratio,2:1,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Picture Quality,FINE,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Picture Quality,STD.,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Picture Quality,RAW+FINE,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Picture Quality,RAW+STD.,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Picture Quality,RAW,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Picture Size,L,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Picture Size,M,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Picture Size,S,,,,,
"<i name=""camera""/>Photo",Image Quality 1,HLG Photo,Full-Res.,,,,,
"<i name=""camera""/>Photo",Image Quality 1,HLG Photo,4K-Res.,,,,,
"<i name=""camera""/>Photo",Image Quality 1,HLG Photo,OFF,,,,,
"<i name=""camera""/>Photo",Image Quality 1,HLG Photo,Simul Record Normal Shot,ON,,,,
"<i name=""camera""/>Photo",Image Quality 1,HLG Photo,Simul Record Normal Shot,OFF,,,,
"<i name=""camera""/>Photo",Image Quality 1,High Resolution Mode,Start,,,,,
"<i name=""camera""/>Photo",Image Quality 1,High Resolution Mode,Shutter Delay,30 SEC,,,,
"<i name=""camera""/>Photo",Image Quality 1,High Resolution Mode,Shutter Delay,1/8 SEC,,,,
"<i name=""camera""/>Photo",Image Quality 1,High Resolution Mode,Shutter Delay,2 SEC,,,,
"<i name=""camera""/>Photo",Image Quality 1,High Resolution Mode,Shutter Delay,OFF,,,,
"<i name=""camera""/>Photo",Image Quality 1,High Resolution Mode,Motion Blur Processing,MODE1,,,,
"<i name=""camera""/>Photo",Image Quality 1,High Resolution Mode,Motion Blur Processing,MODE2,,,,
"<i name=""camera""/>Photo",Image Quality 1,Long Exposure NR,ON,,,,,
"<i name=""camera""/>Photo",Image Quality 1,Long Exposure NR,OFF,,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,100,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,125,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,160,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,200,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,250,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,320,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,400,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,500,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,640,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,800,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,1000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,1250,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,1600,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,2000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,2500,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,3200,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,4000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,5000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,6400,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,8000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,10000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,12800,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,16000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,20000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Lower Limit Setting,25600,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,AUTO,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,200,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,250,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,320,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,400,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,500,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,640,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,800,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,1000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,1250,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,1600,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,2000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,2500,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,3200,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,4000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,5000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,6400,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,8000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,10000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,12800,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,16000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,20000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,25600,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,32000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,40000,,,,
"<i name=""camera""/>Photo",Image Quality 2,ISO Sensitivity (photo),ISO Auto Upper Limit Setting,51200,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,AUTO,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/8000,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/4000,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/2000,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/1000,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/500,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/250,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/125,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/60,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/30,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/15,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/8,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/4,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/2,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Min. Shutter Speed,1/1,,,,,
"<i name=""camera""/>Photo",Image Quality 2,i.Dynamic Range,AUTO,,,,,
"<i name=""camera""/>Photo",Image Quality 2,i.Dynamic Range,HIGH,,,,,
"<i name=""camera""/>Photo",Image Quality 2,i.Dynamic Range,STANDARD,,,,,
"<i name=""camera""/>Photo",Image Quality 2,i.Dynamic Range,LOW,,,,,
"<i name=""camera""/>Photo",Image Quality 2,i.Dynamic Range,OFF,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Vignetting Comp.,ON,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Vignetting Comp.,OFF,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Diffraction Compensation,AUTO,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Diffraction Compensation,OFF,,,,,
"<i name=""camera""/>Photo",Image Quality 2,Filter Settings,Filter Effect,ON,,,,
"<i name=""camera""/>Photo",Image Quality 2,Filter Settings,Filter Effect,OFF,,,,
"<i name=""camera""/>Photo",Image Quality 2,Filter Settings,Filter Effect,SET,,,,
"<i name=""camera""/>Photo",Image Quality 2,Filter Settings,Simultaneous Record w/o Filter,ON,,,,
"<i name=""camera""/>Photo",Image Quality 2,Filter Settings,Simultaneous Record w/o Filter,OFF,,,,
"<i name=""camera""/>Photo",Focus,AF Custom Setting(Photo),Set 1,,,,,
"<i name=""camera""/>Photo",Focus,AF Custom Setting(Photo),Set 2,,,,,
"<i name=""camera""/>Photo",Focus,AF Custom Setting(Photo),Set 3,,,,,
"<i name=""camera""/>Photo",Focus,AF Custom Setting(Photo),Set 4,,,,,
"<i name=""camera""/>Photo",Focus,AF Assist Light,ON,,,,,
"<i name=""camera""/>Photo",Focus,AF Assist Light,OFF,,,,,
"<i name=""camera""/>Photo",Focus,Focus Peaking,ON,,,,,
"<i name=""camera""/>Photo",Focus,Focus Peaking,OFF,,,,,
"<i name=""camera""/>Photo",Focus,Focus Peaking,SET,Focus Peaking Sensitivity,,,
"<i name=""camera""/>Photo",Focus,Focus Peaking,SET,Display Color,,,
"<i name=""camera""/>Photo",Focus,Focus Peaking,SET,Display While AFS,,,
"<i name=""camera""/>Photo",Focus,1-Area AF Moving Speed,FAST,,,,,
"<i name=""camera""/>Photo",Focus,1-Area AF Moving Speed,NORMAL,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Mode,Flash Off,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Mode,Forced Flash On,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Mode,Slow Sync.,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Mode,Red-Eye Reduction,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Mode,Flash Synchro,,,,,
"<i name=""camera""/>Photo",Flash 1,Firing Mode,TTL,,,,,
"<i name=""camera""/>Photo",Flash 1,Firing Mode,MANUAL,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,-3 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,-2.67 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,-2.33 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,-2 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,-1.67 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,-1.33 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,-1 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,-0.67 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,-0.33 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,±0 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,+0.33 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,+0.67 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,+1 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,+1.33 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,+1.67 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,+2 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,+2.33 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,+2.67 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Adjust.,+3 EV,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Synchro,1ST,,,,,
"<i name=""camera""/>Photo",Flash 1,Flash Synchro,2ND,,,,,
"<i name=""camera""/>Photo",Flash 1,Manual Flash Adjust.,1/1,,,,,
"<i name=""camera""/>Photo",Flash 1,Manual Flash Adjust.,1/2,,,,,
"<i name=""camera""/>Photo",Flash 1,Manual Flash Adjust.,1/4,,,,,
"<i name=""camera""/>Photo",Flash 1,Manual Flash Adjust.,1/8,,,,,
"<i name=""camera""/>Photo",Flash 1,Manual Flash Adjust.,1/16,,,,,
"<i name=""camera""/>Photo",Flash 1,Manual Flash Adjust.,1/32,,,,,
"<i name=""camera""/>Photo",Flash 1,Manual Flash Adjust.,1/64,,,,,
"<i name=""camera""/>Photo",Flash 1,Manual Flash Adjust.,1/128,,,,,
"<i name=""camera""/>Photo",Flash 1,Auto Exposure Comp.,ON,,,,,
"<i name=""camera""/>Photo",Flash 1,Auto Exposure Comp.,OFF,,,,,
"<i name=""camera""/>Photo",Flash 1,Red-Eye Removal,ON,,,,,
"<i name=""camera""/>Photo",Flash 1,Red-Eye Removal,OFF,,,,,
"<i name=""camera""/>Photo",Flash 1,Wireless,ON,,,,,
"<i name=""camera""/>Photo",Flash 1,Wireless,OFF,,,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Channel,1CH,,,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Channel,2CH,,,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Channel,3CH,,,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Channel,4CH,,,,,
"<i name=""camera""/>Photo",Flash 2,Wireless FP,ON,,,,,
"<i name=""camera""/>Photo",Flash 2,Wireless FP,OFF,,,,,
"<i name=""camera""/>Photo",Flash 2,Communication Light,HIGH,,,,,
"<i name=""camera""/>Photo",Flash 2,Communication Light,STANDARD,,,,,
"<i name=""camera""/>Photo",Flash 2,Communication Light,LOW,,,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,External Flash,Firing Mode,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,External Flash,Flash Adjust.,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,External Flash,Manual Flash Adjust.,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,A Group,Firing Mode,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,A Group,Flash Adjust.,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,A Group,Manual Flash Adjust.,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,B Group,Firing Mode,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,B Group,Flash Adjust.,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,B Group,Manual Flash Adjust.,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,C Group,Firing Mode,,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,C Group,Flash Adjust.,,,
"<i name=""camera""/>Photo",Flash 2,Wireless Setup,C Group,Manual Flash Adjust.,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Bracketing,Bracketing Type,Exposure,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Bracketing,Bracketing Type,ISO,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Bracketing,Bracketing Type,White Balance,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Bracketing,Bracketing Type,Aperture,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Bracketing,Bracketing Type,Focus,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Bracketing,Bracketing Type,OFF,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Bracketing,More Settings,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Silent Mode,ON,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Silent Mode,OFF,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,Operation Mode,OFF,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,Body(B.I.S.) / Lens(O.I.S.),OFF,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,When to Activate,ALWAYS,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,When to Activate,HALF-SHUTTER,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,E-Stabilization (Video),ON,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,E-Stabilization (Video),OFF,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,Boost I.S. (Video),ON,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,Boost I.S. (Video),OFF,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,Focal Length Set,0.1mm,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,Focal Length Set,35.0mm,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Image Stabilizer,Focal Length Set,1000.0mm,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Burst Shot 1 Setting,H,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Burst Shot 1 Setting,M,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Burst Shot 1 Setting,L,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Burst Shot 2 Setting,H,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Burst Shot 2 Setting,M,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Burst Shot 2 Setting,L,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Type,AUTO,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Type,MECH.,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Type,EFC,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Type,ELEC.,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Type,ELEC.+NR,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Delay,8SEC,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Delay,4SEC,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Delay,2SEC,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Delay,1SEC,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Shutter Delay,OFF,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Ex. Tele Conv.,ZOOM,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Ex. Tele Conv.,TELE CONV.,,,,,
"<i name=""camera""/>Photo",Others (Photo) 1,Ex. Tele Conv.,OFF,,,,,
"<i name=""camera""/>Photo",Others (Photo),Time Lapse/Animation,Mode,Time Lapse Shot,,,
"<i name=""camera""/>Photo",Others (Photo),Time Lapse/Animation,Mode,Stop Motion Animation,,,
"<i name=""camera""/>Photo",Others (Photo),Self Timer,10sec,,,,,
"<i name=""camera""/>Photo",Others (Photo),Self Timer,10sec/3 images,,,,,
"<i name=""camera""/>Photo",Others (Photo),Self Timer,2sec,,,,,
"<i name=""camera""/>Photo",Others (Photo),Flicker Decrease (Photo),ON,,,,,
"<i name=""camera""/>Photo",Others (Photo),Flicker Decrease (Photo),OFF,,,,,
"<i name=""camera""/>Photo",Others (Photo),6K/4K PHOTO,Picture Size / Burst Speed,6K18M,,,,
"<i name=""camera""/>Photo",Others (Photo),6K/4K PHOTO,Picture Size / Burst Speed,4KH8M,,,,
"<i name=""camera""/>Photo",Others (Photo),6K/4K PHOTO,Picture Size / Burst Speed,4K8M,,,,
"<i name=""camera""/>Photo",Others (Photo),6K/4K PHOTO,Rec Method,6K/4K Burst,,,,
"<i name=""camera""/>Photo",Others (Photo),6K/4K PHOTO,Rec Method,6K/4K Burst(S/S),,,,
"<i name=""camera""/>Photo",Others (Photo),6K/4K PHOTO,Rec Method,6K/4K Pre-Burst,,,,
"<i name=""camera""/>Photo",Others (Photo),6K/4K PHOTO,Pre-Burst Recording,ON,,,,
"<i name=""camera""/>Photo",Others (Photo),6K/4K PHOTO,Pre-Burst Recording,OFF,,,,
"<i name=""camera""/>Photo",Others (Photo),Post-Focus,6K 18M,,,,,
"<i name=""camera""/>Photo",Others (Photo),Post-Focus,4K 8M,,,,,
"<i name=""camera""/>Photo",Others (Photo),Post-Focus,OFF,,,,,
"<i name=""camera""/>Photo",Others (Photo),Multiple Exposure,Start,,,,,
"<i name=""camera""/>Photo",Others (Photo),Multiple Exposure,Auto Gain,ON,,,,
"<i name=""camera""/>Photo",Others (Photo),Multiple Exposure,Auto Gain,OFF,,,,
"<i name=""camera""/>Photo",Others (Photo),Multiple Exposure,Overlay,ON,,,,
"<i name=""camera""/>Photo",Others (Photo),Multiple Exposure,Overlay,OFF,,,,
"Video",Image Quality 1,Exposure Mode,P,,,,
"Video",Image Quality 1,Exposure Mode,A,,,,
"Video",Image Quality 1,Exposure Mode,S,,,,
"Video",Image Quality 1,Exposure Mode,M,,,,
"Video",Image Quality 1,Photo Style,Standard,,,,
"Video",Image Quality 1,Photo Style,Vivid,,,,
"Video",Image Quality 1,Photo Style,Natural,,,,
"Video",Image Quality 1,Photo Style,Flat,,,,
"Video",Image Quality 1,Photo Style,Landscape,,,,
"Video",Image Quality 1,Photo Style,Portrait,,,,
"Video",Image Quality 1,Photo Style,Monochrome,,,,
"Video",Image Quality 1,Photo Style,L.Monochrome,,,,
"Video",Image Quality 1,Photo Style,L.Monochrome D,,,,
"Video",Image Quality 1,Photo Style,Cinelike D,,,,
"Video",Image Quality 1,Photo Style,Cinelike V,,,,
"Video",Image Quality 1,Photo Style,Like709,,,,
"Video",Image Quality 1,Photo Style,Standard(HLG),,,,
"Video",Image Quality 1,Photo Style,Monochrome(HLG),,,,
"Video",Image Quality 1,Photo Style,Like2100(HLG),,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 1,,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 2,,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 3,,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 4,,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 5,,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 6,,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 7,,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 8,,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 9,,,,
"Video",Image Quality 1,Photo Style,MY PHOTO STYLE 10,,,,
"Video",Image Quality 1,Metering Mode,Multiple,,,,
"Video",Image Quality 1,Metering Mode,Center Weighted,,,,
"Video",Image Quality 1,Metering Mode,Spot,,,,
"Video",Image Quality 1,Metering Mode,Highlight Weighted,,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,100,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,125,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,160,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,200,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,250,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,320,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,400,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,500,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,640,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,800,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,1000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,1250,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,1600,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,2000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,2500,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,3200,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,4000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,5000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,6400,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,8000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,10000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,12800,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,16000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,20000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Lower Limit Setting,25600,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,AUTO,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,200,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,250,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,320,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,400,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,500,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,640,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,800,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,1000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,1250,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,1600,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,2000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,2500,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,3200,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,4000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,5000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,6400,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,8000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,10000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,12800,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,16000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,20000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,25600,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,32000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,40000,,,
"Video",Image Quality 1,ISO Sensitivity (video),ISO Auto Upper Limit Setting,51200,,,
"Video",Image Quality 1,Flicker Decrease (Video),1/50,,,,
"Video",Image Quality 1,Flicker Decrease (Video),1/60,,,,
"Video",Image Quality 1,Flicker Decrease (Video),1/100,,,,
"Video",Image Quality 1,Flicker Decrease (Video),1/120,,,,
"Video",Image Quality 1,Flicker Decrease (Video),OFF,,,,
"Video",Image Quality 1,i.Dynamic Range,AUTO,,,,
"Video",Image Quality 1,i.Dynamic Range,HIGH,,,,
"Video",Image Quality 1,i.Dynamic Range,STANDARD,,,,
"Video",Image Quality 1,i.Dynamic Range,LOW,,,,
"Video",Image Quality 1,i.Dynamic Range,OFF,,,,
"Video",Image Quality 1,Vignetting Comp.,ON,,,,
"Video",Image Quality 1,Vignetting Comp.,OFF,,,,
"Video",Image Quality 1,Diffraction Compensation,AUTO,,,,
"Video",Image Quality 1,Diffraction Compensation,OFF,,,,
"Video",Image Quality 2,Filter Settings,Filter Effect,ON,,,
"Video",Image Quality 2,Filter Settings,Filter Effect,OFF,,,
"Video",Image Quality 2,Filter Settings,Filter Effect,SET,,,
"Video",Image Quality 2,Filter Settings,Simultaneous Record w/o Filter,ON,,,
"Video",Image Quality 2,Filter Settings,Simultaneous Record w/o Filter,OFF,,,
"Video",Image Quality 2,Auto Exposure in P/A/S/M,ON,,,,
"Video",Image Quality 2,Auto Exposure in P/A/S/M,OFF,,,,
"Video",Image Format,Rec Quality,180/30p FHD,,,,
"Video",Image Format,Rec Quality,150/30p FHD,,,,
"Video",Image Format,Rec Quality,60/30p 4K,,,,
"Video",Image Format,Rec Quality,48/23.98p 4K,,,,
"Video",Image Format,Rec Quality,OFF,,,,
"Video",Image Format,High Speed Video,180/30p FHD,,,,
"Video",Image Format,High Speed Video,150/30p FHD,,,,
"Video",Image Format,High Speed Video,60/30p 4K,,,,
"Video",Image Format,High Speed Video,48/23.98p 4K,,,,
"Video",Image Format,High Speed Video,OFF,,,,
"Video",Image Format,Rec. File Format,AVCHD,,,,
"Video",Image Format,Rec. File Format,MP4,,,,
"Video",Image Format,Rec. File Format,MP4 HEVC,,,,
"Video",Image Format,Luminance Level,0-255,,,,
"Video",Image Format,Luminance Level,16-255,,,,
"Video",Focus,AF Custom Setting(Video),Set 1,,,,
"Video",Focus,AF Custom Setting(Video),Set 2,,,,
"Video",Focus,AF Custom Setting(Video),Set 3,,,,
"Video",Focus,AF Custom Setting(Video),Set 4,,,,
"Video",Focus,AF Custom Setting(Video),SET,AF Speed,,,
"Video",Focus,AF Custom Setting(Video),SET,AF Sensitivity,,,
"Video",Focus,Continuous AF,ON,,,,
"Video",Focus,Continuous AF,OFF,,,,
"Video",Focus,Focus Peaking,ON,,,,
"Video",Focus,Focus Peaking,OFF,,,,
"Video",Focus,Focus Peaking,SET,Focus Peaking Sensitivity,,,
"Video",Focus,Focus Peaking,SET,Display Color,,,
"Video",Focus,Focus Peaking,SET,Display While AFS,,,
"Video",Focus,1-Area AF Moving Speed,FAST,,,,
"Video",Focus,1-Area AF Moving Speed,NORMAL,,,,
"Video",Audio 1,Sound Rec Level Disp.,ON,,,,
"Video",Audio 1,Sound Rec Level Disp.,OFF,,,,
"Video",Audio 1,Sound Rec Level Adj.,-12dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-11dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-10dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-9dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-8dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-7dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-6dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-5dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-4dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-3dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-2dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,-1dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,0dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,1dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,2dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,3dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,4dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,5dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,6dB,,,,
"Video",Audio 1,Sound Rec Level Adj.,6dB,,,,
"Video",Audio 1,Sound Rec Level Limiter,ON,,,,
"Video",Audio 1,Sound Rec Level Limiter,OFF,,,,
"Video",Audio 1,Wind Noise Canceller,HIGH,,,,
"Video",Audio 1,Wind Noise Canceller,STANDARD,,,,
"Video",Audio 1,Wind Noise Canceller,OFF,,,,
"Video",Audio 1,Wind Cut,HIGH,,,,
"Video",Audio 1,Wind Cut,STANDARD,,,,
"Video",Audio 1,Wind Cut,LOW,,,,
"Video",Audio 1,Wind Cut,OFF,,,,
"Video",Audio 1,Mic Socket,STEREO,,,,
"Video",Audio 1,Mic Socket,LENS AUTO,,,,
"Video",Audio 1,Mic Socket,SHOTGUN,,,,
"Video",Audio 1,Mic Socket,S. SHOTGUN,,,,
"Video",Audio 1,Mic Socket,MANUAL,,,,
"Video",Audio 1,Special Mic.,STEREO,,,,
"Video",Audio 1,Special Mic.,LENS AUTO,,,,
"Video",Audio 1,Special Mic.,SHOTGUN,,,,
"Video",Audio 1,Special Mic.,S. SHOTGUN,,,,
"Video",Audio 1,Special Mic.,MANUAL,,,,
"Video",Audio 1,XLR Mic Adaptor Setting,ON,,,,
"Video",Audio 1,XLR Mic Adaptor Setting,OFF,,,,
"Video",Audio 2,Sound Output,REALTIME,,,,
"Video",Audio 2,Sound Output,REC SOUND,,,,
"Video",Monitor / Display,HDMI Rec Output,Info Display,ON,,,
"Video",Monitor / Display,HDMI Rec Output,Info Display,OFF,,,
"Video",Others (Video),Image Stabilizer,Operation Mode,OFF,,,
"Video",Others (Video),Image Stabilizer,Body(B.I.S.) / Lens(O.I.S.),OFF,,,
"Video",Others (Video),Image Stabilizer,When to Activate,ALWAYS,,,
"Video",Others (Video),Image Stabilizer,When to Activate,HALF-SHUTTER,,,
"Video",Others (Video),Image Stabilizer,E-Stabilization (Video),ON,,,
"Video",Others (Video),Image Stabilizer,E-Stabilization (Video),OFF,,,
"Video",Others (Video),Image Stabilizer,Boost I.S. (Video),ON,,,
"Video",Others (Video),Image Stabilizer,Boost I.S. (Video),OFF,,,
"Video",Others (Video),Image Stabilizer,Focal Length Set,0.1mm,,,
"Video",Others (Video),Image Stabilizer,Focal Length Set,35.0mm,,,
"Video",Others (Video),Image Stabilizer,Focal Length Set,1000.0mm,,,
"Video",Others (Video),Image Area of Video,FULL,,,,
"Video",Others (Video),Image Area of Video,APS-C,,,,
"Video",Others (Video),Image Area of Video,PIXEL/PIXEL,,,,
"Custom",Image Quality,Show/Hide Photo Style,Vivid,,,,
"Custom",Image Quality,Show/Hide Photo Style,Natural,,,,
"Custom",Image Quality,Show/Hide Photo Style,Flat,,,,
"Custom",Image Quality,Show/Hide Photo Style,Landscape,,,,
"Custom",Image Quality,Show/Hide Photo Style,Portrait,,,,
"Custom",Image Quality,Show/Hide Photo Style,L.Monochrome,,,,
"Custom",Image Quality,Show/Hide Photo Style,L.Monochrome D,,,,
"Custom",Image Quality,Show/Hide Photo Style,Cinelike D,,,,
"Custom",Image Quality,Show/Hide Photo Style,Cinelike V,,,,
"Custom",Image Quality,Show/Hide Photo Style,Like709,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 1,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 2,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 3,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 4,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 5,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 6,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 7,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 8,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 9,,,,
"Custom",Image Quality,Show/Hide Photo Style,MY PHOTO STYLE 10,,,,
"Custom",Image Quality,Photo Style Settings,Add Effects,,,,
"Custom",Image Quality,Photo Style Settings,Load Preset Setting,,,,
"Custom",Image Quality,Reset Photo Style,,,,,
"Custom",Image Quality,ISO Increments,1/3EV,,,,
"Custom",Image Quality,ISO Increments,1EV,,,,
"Custom",Image Quality,Extended ISO,ON,,,,
"Custom",Image Quality,Extended ISO,OFF,,,,
"Custom",Image Quality,Exposure Offset Adjust.,Multi Metering,-1EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Multi Metering,±0EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Multi Metering,+1EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Center Weighted,-1EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Center Weighted,±0EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Center Weighted,+1EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Spot,-1EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Spot,±0EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Spot,+1EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Highlight Weighted,-1EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Highlight Weighted,±0EV,,,
"Custom",Image Quality,Exposure Offset Adjust.,Highlight Weighted,+1EV,,,
"Custom",Image Quality,Color Space,sRGB,,,,
"Custom",Image Quality,Color Space,AdobeRGB,,,,
"Custom",Image Quality,Exposure Comp. Reset,ON,,,,
"Custom",Image Quality,Exposure Comp. Reset,OFF,,,,
"Custom",Focus/Shutter 1,Focus/Shutter Priority,AFS,FOCUS,,,
"Custom",Focus/Shutter 1,Focus/Shutter Priority,AFS,BALANCE,,,
"Custom",Focus/Shutter 1,Focus/Shutter Priority,AFS,RELEASE,,,
"Custom",Focus/Shutter 1,Focus/Shutter Priority,AFC,FOCUS,,,
"Custom",Focus/Shutter 1,Focus/Shutter Priority,AFC,BALANCE,,,
"Custom",Focus/Shutter 1,Focus/Shutter Priority,AFC,RELEASE,,,
"Custom",Focus/Shutter 1,Focus Switching for Vert / Hor,ON,,,,
"Custom",Focus/Shutter 1,Focus Switching for Vert / Hor,OFF,,,,
"Custom",Focus/Shutter 1,AF/AE Lock Hold,ON,,,,
"Custom",Focus/Shutter 1,AF/AE Lock Hold,OFF,,,,
"Custom",Focus/Shutter 1,AF+MF,ON,,,,
"Custom",Focus/Shutter 1,AF+MF,OFF,,,,
"Custom",Focus/Shutter 1,MF Assist,Focus Ring,ON,,,
"Custom",Focus/Shutter 1,MF Assist,Focus Ring,OFF,,,
"Custom",Focus/Shutter 1,MF Assist,AF Mode/MF,ON,,,
"Custom",Focus/Shutter 1,MF Assist,AF Mode/MF,OFF,,,
"Custom",Focus/Shutter 1,MF Assist,Press Joystick,ON,,,
"Custom",Focus/Shutter 1,MF Assist,Press Joystick,OFF,,,
"Custom",Focus/Shutter 1,MF Assist,MF Assist Display,FULL,,,
"Custom",Focus/Shutter 1,MF Assist,MF Assist Display,PIP,,,
"Custom",Focus/Shutter 1,MF Guide,Meters,,,,
"Custom",Focus/Shutter 1,MF Guide,Feet,,,,
"Custom",Focus/Shutter 1,MF Guide,OFF,,,,
"Custom",Focus/Shutter 1,Focus Ring Lock,ON,,,,
"Custom",Focus/Shutter 1,Focus Ring Lock,OFF,,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Face/Eye/Body/Animal Detect.,ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Face/Eye/Body/Animal Detect.,OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Tracking,ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Tracking,OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,225-Area,ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,225-Area,OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Zone (Vert./ Horz.),ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Zone (Vert./ Horz.),OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Zone (Square),ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Zone (Square),OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Zone (Oval),ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Zone (Oval),OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,1-Area+,ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,1-Area+,OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Pinpoint,ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Pinpoint,OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Custom1,ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Custom1,OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Custom2,ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Custom2,OFF,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Custom3,ON,,,
"Custom",Focus/Shutter 1,Show/Hide AF Mode,Custom3,OFF,,,
"Custom",Focus/Shutter 2,Pinpoint AF Setting,Pinpoint AF Time,LONG,,,
"Custom",Focus/Shutter 2,Pinpoint AF Setting,Pinpoint AF Time,MID,,,
"Custom",Focus/Shutter 2,Pinpoint AF Setting,Pinpoint AF Time,SHORT,,,
"Custom",Focus/Shutter 2,Pinpoint AF Setting,Pinpoint AF Display,FULL,,,
"Custom",Focus/Shutter 2,Pinpoint AF Setting,Pinpoint AF Display,PIP,,,
"Custom",Focus/Shutter 2,AF-Point Scope Setting,Keep Enlarged Display,ON,,,
"Custom",Focus/Shutter 2,AF-Point Scope Setting,Keep Enlarged Display,OFF,,,
"Custom",Focus/Shutter 2,AF-Point Scope Setting,PIP Display,FULL,,,
"Custom",Focus/Shutter 2,AF-Point Scope Setting,PIP Display,PIP,,,
"Custom",Focus/Shutter 2,Shutter AF,ON,,,,
"Custom",Focus/Shutter 2,Shutter AF,OFF,,,,
"Custom",Focus/Shutter 2,Half-Press Shutter,ON,,,,
"Custom",Focus/Shutter 2,Half-Press Shutter,OFF,,,,
"Custom",Focus/Shutter 2,Quick AF,ON,,,,
"Custom",Focus/Shutter 2,Quick AF,OFF,,,,
"Custom",Focus/Shutter 2,Eye Sensor AF,ON,,,,
"Custom",Focus/Shutter 2,Eye Sensor AF,OFF,,,,
"Custom",Focus/Shutter 2,Looped Focus Frame,ON,,,,
"Custom",Focus/Shutter 2,Looped Focus Frame,OFF,,,,
"Custom",Focus/Shutter 2,AFC Start Point (225-Area),ON,,,,
"Custom",Focus/Shutter 2,AFC Start Point (225-Area),OFF,,,,
"Custom",Operation 1,Layout Style,MODE1,,,,
"Custom",Operation 1,Layout Style,MODE2,,,,
"Custom",Operation 1,Front Dial Assignment,Item,,,,
"Custom",Operation 1,Front Dial Assignment,Value,,,,
"Custom",Operation 1,Q.MENU Settings,Item Customize (Photo),,,,
"Custom",Operation 1,Q.MENU Settings,Item Customize (Video),,,,
"Custom",Operation 1,Touch Settings,Touch Screen,ON,,,
"Custom",Operation 1,Touch Settings,Touch Screen,OFF,,,
"Custom",Operation 1,Touch Settings,Touch Tab,ON,,,
"Custom",Operation 1,Touch Settings,Touch Tab,OFF,,,
"Custom",Operation 1,Touch Settings,Touch AF,AF,,,
"Custom",Operation 1,Touch Settings,Touch AF,AF+AE,,,
"Custom",Operation 1,Touch Settings,Touch AF,OFF,,,
"Custom",Operation 1,Touch Settings,Touch Pad AF,EXACT,,,
"Custom",Operation 1,Touch Settings,Touch Pad AF,OFFSET,,,
"Custom",Operation 1,Touch Settings,Touch Pad AF,OFF,,,
"Custom",Operation 1,Lock Lever Setting,Cursor,,,,
"Custom",Operation 1,Lock Lever Setting,Joystick,,,,
"Custom",Operation 1,Lock Lever Setting,Touch Screen,,,,
"Custom",Operation 1,Lock Lever Setting,Dial,,,,
"Custom",Operation 1,Lock Lever Setting,DISP. Button,,,,
"Custom",Operation 1,Lock Lever Setting,Setting in REC mode,,,,
"Custom",Operation 1,Lock Lever Setting,Setting in PLAY mode,,,,
"Custom",Operation 1,Fn Button Set,,,,,
"Custom",Operation 1,Fn Lever Setting,Function of Fn Lever,,,,
"Custom",Operation 1,Fn Lever Setting,MODE 2 Setting,,,,
"Custom",Operation 1,WB/ISO/Expo. Button,WHILE PRESSING,,,,
"Custom",Operation 1,WB/ISO/Expo. Button,AFTER PRESSING1,,,,
"Custom",Operation 1,WB/ISO/Expo. Button,AFTER PRESSING2,,,,
"Custom",Operation 2,ISO Displayed Setting,Front/Rear Dials,,,,
"Custom",Operation 2,ISO Displayed Setting,OFF,,,,
"Custom",Operation 2,Exposure Comp. Disp. Setting,Cursor Buttons (Up/Down),,,,
"Custom",Operation 2,Exposure Comp. Disp. Setting,Cursor Buttons (Up/Down),OFF,,,
"Custom",Operation 2,Exposure Comp. Disp. Setting,Front/Rear Dials,,,,
"Custom",Operation 2,Exposure Comp. Disp. Setting,OFF,,,,
"Custom",Operation 2,Dial Set.,Assign Dial (F/SS),SET1,,,
"Custom",Operation 2,Dial Set.,Assign Dial (F/SS),SET2,,,
"Custom",Operation 2,Dial Set.,Assign Dial (F/SS),SET3,,,
"Custom",Operation 2,Dial Set.,Assign Dial (F/SS),SET4,,,
"Custom",Operation 2,Dial Set.,Assign Dial (F/SS),SET5,,,
"Custom",Operation 2,Dial Set.,Rotation (F/SS),,,,
"Custom",Operation 2,Dial Set.,Control Dial Assignment,,,,
"Custom",Operation 2,Dial Set.,Dial Operation Switch Setup,,,,
"Custom",Operation 2,Dial Set.,Rotation (Menu Operation),,,,
"Custom",Operation 2,Joystick Setting,D.FOCUS Movement,,,,
"Custom",Operation 2,Joystick Setting,Fn,,,,
"Custom",Operation 2,Joystick Setting,MENU,,,,
"Custom",Operation 2,Joystick Setting,OFF,,,,
"Custom",Operation 2,Illuminated Button,ON1,,,,
"Custom",Operation 2,Illuminated Button,ON2,,,,
"Custom",Operation 2,Illuminated Button,OFF,,,,
"Custom",Operation 2,Video Rec. Button (Remote),ON,,,,
"Custom",Operation 2,Video Rec. Button (Remote),OFF,,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (photo),HOLD,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (photo),5SEC,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (photo),4SEC,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (photo),3SEC,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (photo),2SEC,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (photo),1SEC,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (photo),OFF,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (6K/4K PHOTO),HOLD,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (6K/4K PHOTO),OFF,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (Post-Focus),HOLD,,,
"Custom",Monitor / Display 1,Auto Review,Duration Time (Post-Focus),OFF,,,
"Custom",Monitor / Display 1,Auto Review,Playback Operation Priority,ON,,,
"Custom",Monitor / Display 1,Auto Review,Playback Operation Priority,OFF,,,
"Custom",Monitor / Display 1,Constant Preview,ON,,,,
"Custom",Monitor / Display 1,Constant Preview,OFF,,,,
"Custom",Monitor / Display 1,Constant Preview,SET,Preview While MF Assist,,,
"Custom",Monitor / Display 1,Level Gauge,ON,,,,
"Custom",Monitor / Display 1,Level Gauge,OFF,,,,
"Custom",Monitor / Display 1,Histogram,ON,,,,
"Custom",Monitor / Display 1,Histogram,OFF,,,,
"Custom",Monitor / Display 1,Photo Grid Line,,,,,
"Custom",Monitor / Display 1,Photo Grid Line,OFF,,,,
"Custom",Monitor / Display 1,Framing Outline,ON,,,,
"Custom",Monitor / Display 1,Framing Outline,OFF,,,,
"Custom",Monitor / Display 1,Center Marker,ON,,,,
"Custom",Monitor / Display 1,Center Marker,OFF,,,,
"Custom",Monitor / Display 1,AF Area Display,ON,,,,
"Custom",Monitor / Display 1,AF Area Display,OFF,,,,
"Custom",Monitor / Display 2,Live View Boost,MODE1,,,,
"Custom",Monitor / Display 2,Live View Boost,MODE2,,,,
"Custom",Monitor / Display 2,Live View Boost,OFF,,,,
"Custom",Monitor / Display 2,Live View Boost,SET,P/A/S/M,,,
"Custom",Monitor / Display 2,Live View Boost,SET,M,,,
"Custom",Monitor / Display 2,Monochrome Live View,ON,,,,
"Custom",Monitor / Display 2,Monochrome Live View,OFF,,,,
"Custom",Monitor / Display 2,Night Mode,Monitor,ON,,,
"Custom",Monitor / Display 2,Night Mode,Monitor,OFF,,,
"Custom",Monitor / Display 2,Night Mode,LVF,ON,,,
"Custom",Monitor / Display 2,Night Mode,LVF,OFF,,,
"Custom",Monitor / Display 2,LVF/Monitor Disp. Set,LVF Disp. Set,,,,
"Custom",Monitor / Display 2,LVF/Monitor Disp. Set,LVF Disp. Set,OFF,,,
"Custom",Monitor / Display 2,LVF/Monitor Disp. Set,Monitor Disp. Set,,,,
"Custom",Monitor / Display 2,LVF/Monitor Disp. Set,Monitor Disp. Set,OFF,,,
"Custom",Monitor / Display 2,Expo.Meter,ON,,,,
"Custom",Monitor / Display 2,Expo.Meter,OFF,,,,
"Custom",Monitor / Display 2,Focal Length,ON,,,,
"Custom",Monitor / Display 2,Focal Length,OFF,,,,
"Custom",Monitor / Display 2,Photo/Video Preview,Photo,,,,
"Custom",Monitor / Display 2,Photo/Video Preview,Video,,,,
"Custom",Monitor / Display 2,Photos/Videos Remaining,ON,,,,
"Custom",Monitor / Display 2,Photos/Videos Remaining,OFF,,,,
"Custom",Monitor / Display 3,Show/Hide Monitor Layout,ON,,,,
"Custom",Monitor / Display 3,Show/Hide Monitor Layout,OFF,,,,
"Custom",Monitor / Display 3,Blinking Highlights,ON,,,,
"Custom",Monitor / Display 3,Blinking Highlights,OFF,,,,
"Custom",Monitor / Display 3,Zebra Pattern,ON,,,,
"Custom",Monitor / Display 3,Zebra Pattern,OFF,,,,
"Custom",Monitor / Display 3,HLG View Assist,ON,,,,
"Custom",Monitor / Display 3,HLG View Assist,OFF,,,,
"Custom",Monitor / Display 3,Sheer Overlay,ON,,,,
"Custom",Monitor / Display 3,Sheer Overlay,OFF,,,,
"Custom",Monitor / Display 3,I.S. Status Scope,ON,,,,
"Custom",Monitor / Display 3,I.S. Status Scope,OFF,,,,
"Custom",Lens / Others,Lens Focus Resume,ON,,,,
"Custom",Lens / Others,Lens Focus Resume,OFF,,,,
"Custom",Lens / Others,Focus Ring Control,NON-LINEAR,,,,
"Custom",Lens / Others,Focus Ring Control,LINEAR,,,,
"Custom",Lens / Others,Focus Ring Control,SET,90°,,,
"Custom",Lens / Others,Focus Ring Control,SET,120°,,,
"Custom",Lens / Others,Focus Ring Control,SET,150°,,,
"Custom",Lens / Others,Focus Ring Control,SET,180°,,,
"Custom",Lens / Others,Focus Ring Control,SET,210°,,,
"Custom",Lens / Others,Focus Ring Control,SET,240°,,,
"Custom",Lens / Others,Focus Ring Control,SET,270°,,,
"Custom",Lens / Others,Focus Ring Control,SET,300°,,,
"Custom",Lens / Others,Focus Ring Control,SET,330°,,,
"Custom",Lens / Others,Focus Ring Control,SET,360°,,,
"Custom",Lens / Others,Focus Ring Control,SET,Maximum,,,
"Setup",Card/File,Card Format,Card Slot 1(XQD),,,,
"Setup",Card/File,Card Format,Card Slot 2(SD),,,,
"Setup",Card/File,Double Card Slot Function,Recording Method,,,,
"Setup",Card/File,Folder / File Settings,Select Folder,,,,
"Setup",Card/File,Folder / File Settings,Create a New Folder,,,,
"Setup",Card/File,Folder / File Settings,File Name Setting,,,,
"Setup",Card/File,File Number Reset,Card Slot 1(XQD),,,,
"Setup",Card/File,File Number Reset,Card Slot 2(SD),,,,
"Setup",Card/File,Copyright Information,Artist,ON,,,
"Setup",Card/File,Copyright Information,Artist,OFF,,,
"Setup",Card/File,Copyright Information,Artist,SET,,,
"Setup",Card/File,Copyright Information,Copyright Holder,ON,,,
"Setup",Card/File,Copyright Information,Copyright Holder,OFF,,,
"Setup",Card/File,Copyright Information,Copyright Holder,SET,,,
"Setup",Card/File,Copyright Information,Display Copyright Info.,,,,
"Setup",Monitor / Display 1,Power Save Mode,Sleep Mode,10MIN.,,,
"Setup",Monitor / Display 1,Power Save Mode,Sleep Mode,5MIN.,,,
"Setup",Monitor / Display 1,Power Save Mode,Sleep Mode,2MIN.,,,
"Setup",Monitor / Display 1,Power Save Mode,Sleep Mode,1MIN.,,,
"Setup",Monitor / Display 1,Power Save Mode,Sleep Mode,OFF,,,
"Setup",Monitor / Display 1,Power Save Mode,Sleep Mode(Wi-Fi),ON,,,
"Setup",Monitor / Display 1,Power Save Mode,Sleep Mode(Wi-Fi),OFF,,,
"Setup",Monitor / Display 1,Power Save Mode,Auto LVF/Monitor Off,5MIN.,,,
"Setup",Monitor / Display 1,Power Save Mode,Auto LVF/Monitor Off,2MIN.,,,
"Setup",Monitor / Display 1,Power Save Mode,Auto LVF/Monitor Off,1MIN.,,,
"Setup",Monitor / Display 1,Power Save Mode,Auto LVF/Monitor Off,OFF,,,
"Setup",Monitor / Display 1,Power Save Mode,Power Save LVF Shooting,Time to Sleep,,,
"Setup",Monitor / Display 1,Power Save Mode,Power Save LVF Shooting,Method of Activation,,,
"Setup",Monitor / Display 1,Monitor Frame Rate,30fps,,,,
"Setup",Monitor / Display 1,Monitor Frame Rate,60fps,,,,
"Setup",Monitor / Display 1,LVF Frame Rate,60fps,,,,
"Setup",Monitor / Display 1,LVF Frame Rate,120fps,,,,
"Setup",Monitor / Display 1,Monitor Settings,Brightness,,,,
"Setup",Monitor / Display 1,Monitor Settings,Contrast,,,,
"Setup",Monitor / Display 1,Monitor Settings,Saturation,,,,
"Setup",Monitor / Display 1,Monitor Settings,Red Tint,,,,
"Setup",Monitor / Display 1,Monitor Settings,Blue Tint,,,,
"Setup",Monitor / Display 1,Viewfinder,Brightness,,,,
"Setup",Monitor / Display 1,Viewfinder,Contrast,,,,
"Setup",Monitor / Display 1,Viewfinder,Saturation,,,,
"Setup",Monitor / Display 1,Viewfinder,Red Tint,,,,
"Setup",Monitor / Display 1,Viewfinder,Blue Tint,,,,
"Setup",Monitor / Display 1,Monitor Backlight,AUTO,,,,
"Setup",Monitor / Display 1,Monitor Backlight,-3,,,,
"Setup",Monitor / Display 1,Monitor Backlight,-2,,,,
"Setup",Monitor / Display 1,Monitor Backlight,-1,,,,
"Setup",Monitor / Display 1,Monitor Backlight,+1,,,,
"Setup",Monitor / Display 1,Monitor Backlight,+2,,,,
"Setup",Monitor / Display 1,Monitor Backlight,+3,,,,
"Setup",Monitor / Display 1,LVF Luminance,AUTO,,,,
"Setup",Monitor / Display 1,LVF Luminance,-3,,,,
"Setup",Monitor / Display 1,LVF Luminance,-2,,,,
"Setup",Monitor / Display 1,LVF Luminance,-1,,,,
"Setup",Monitor / Display 1,LVF Luminance,+1,,,,
"Setup",Monitor / Display 1,LVF Luminance,+2,,,,
"Setup",Monitor / Display 1,LVF Luminance,+3,,,,
"Setup",Monitor / Display 1,Remaining Battery Level,,,,,
"Setup",Monitor / Display 1,Remaining Battery Level,%,,,,
"Setup",Monitor / Display 2,Status-LCD,Backlight,H,,,
"Setup",Monitor / Display 2,Status-LCD,Backlight,L,,,
"Setup",Monitor / Display 2,Status-LCD,Backlight,OFF,,,
"Setup",Monitor / Display 2,Status-LCD,Display While Power Off,ON,,,
"Setup",Monitor / Display 2,Status-LCD,Display While Power Off,OFF,,,
"Setup",Monitor / Display 2,Eye Sensor,Sensitivity,HIGH,,,
"Setup",Monitor / Display 2,Eye Sensor,Sensitivity,LOW,,,
"Setup",Monitor / Display 2,Eye Sensor,LVF/Monitor Switch,LVF/MON AUTO,,,
"Setup",Monitor / Display 2,Eye Sensor,LVF/Monitor Switch,LVF,,,
"Setup",Monitor / Display 2,Eye Sensor,LVF/Monitor Switch,MON,,,
"Setup",Monitor / Display 2,Level Gauge Adjust.,Adjust.,,,,
"Setup",Monitor / Display 2,Level Gauge Adjust.,Level Gauge Value Reset,,,,
"Setup",IN/OUT,Beep,Beep Volume,High,,,
"Setup",IN/OUT,Beep,Beep Volume,Low,,,
"Setup",IN/OUT,Beep,Beep Volume,Off,,,
"Setup",IN/OUT,Beep,AF Beep Volume,High,,,
"Setup",IN/OUT,Beep,AF Beep Volume,Low,,,
"Setup",IN/OUT,Beep,AF Beep Volume,Off,,,
"Setup",IN/OUT,Beep,AF Beep Tone,Pattern 1,,,
"Setup",IN/OUT,Beep,AF Beep Tone,Pattern 2,,,
"Setup",IN/OUT,Beep,AF Beep Tone,Pattern 3,,,
"Setup",IN/OUT,Beep,E-Shutter Vol,High,,,
"Setup",IN/OUT,Beep,E-Shutter Vol,Low,,,
"Setup",IN/OUT,Beep,E-Shutter Vol,Off,,,
"Setup",IN/OUT,Beep,E-Shutter Tone,Pattern 1,,,
"Setup",IN/OUT,Beep,E-Shutter Tone,Pattern 2,,,
"Setup",IN/OUT,Beep,E-Shutter Tone,Pattern 3,,,
"Setup",IN/OUT,Headphone Volume,0,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL1,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL2,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL3,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL4,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL5,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL6,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL7,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL8,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL9,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL10,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL11,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL12,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL13,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL14,,,,
"Setup",IN/OUT,Headphone Volume,LEVEL15,,,,
"Setup",IN/OUT,Wi-Fi,Wi-Fi Function,,,,
"Setup",IN/OUT,Wi-Fi,Wi-Fi Setup,,,,
"Setup",IN/OUT,Wi-Fi,Send Image (Smartphone),,,,
"Setup",IN/OUT,Wi-Fi,Remote Wakeup,,,,
"Setup",IN/OUT,Wi-Fi,Returning from Sleep Mode,,,,
"Setup",IN/OUT,Wi-Fi,Auto Transfer,,,,
"Setup",IN/OUT,Wi-Fi,Location Logging,,,,
"Setup",IN/OUT,Wi-Fi,Auto Clock Set,,,,
"Setup",IN/OUT,Wi-Fi,Wi-Fi network settings,,,,
"Setup",IN/OUT,Bluetooth,,,,,
"Setup",IN/OUT,USB,USB Mode,Select on connection,,,
"Setup",IN/OUT,USB,USB Mode,PC(Storage),,,
"Setup",IN/OUT,USB,USB Mode,PC(Tether),,,
"Setup",IN/OUT,USB,USB Mode,PictBridge(PTP),,,
"Setup",IN/OUT,USB,USB Power Supply,ON,,,
"Setup",IN/OUT,USB,USB Power Supply,OFF,,,
"Setup",IN/OUT,Battery Information,Remaining Level,,,,
"Setup",IN/OUT,Battery Information,Battery Health,,,,
"Setup",IN/OUT,Battery Use Priority,BODY,,,,
"Setup",IN/OUT,Battery Use Priority,BG,,,,
"Setup",IN/OUT,TV Connection,HDMI Mode (Playback),AUTO,,,
"Setup",IN/OUT,TV Connection,HDMI Mode (Playback),4K/60p,,,
"Setup",IN/OUT,TV Connection,HDMI Mode (Playback),4K/30p,,,
"Setup",IN/OUT,TV Connection,HDMI Mode (Playback),1080p,,,
"Setup",IN/OUT,TV Connection,HDMI Mode (Playback),1080i,,,
"Setup",IN/OUT,TV Connection,HDMI Mode (Playback),720p,,,
"Setup",IN/OUT,TV Connection,HDMI Mode (Playback),480p,,,
"Setup",IN/OUT,TV Connection,HLG View Assist (HDMI),AUTO,,,
"Setup",IN/OUT,TV Connection,HLG View Assist (HDMI),MODE1,,,
"Setup",IN/OUT,TV Connection,HLG View Assist (HDMI),MODE2,,,
"Setup",IN/OUT,TV Connection,HLG View Assist (HDMI),OFF,,,
"Setup",IN/OUT,TV Connection,VIERA Link (CEC),ON,,,
"Setup",IN/OUT,TV Connection,VIERA Link (CEC),OFF,,,
"Setup",IN/OUT,TV Connection,Background Color(Playback),,,,
"Setup",Setting,TV Connection,Background Color(Playback),,,,
"Setup",Setting,Save to Custom Mode,C1,,,,
"Setup",Setting,Save to Custom Mode,C2,,,,
"Setup",Setting,Save to Custom Mode,C3-1,,,,
"Setup",Setting,Save to Custom Mode,C3-2,,,,
"Setup",Setting,Save to Custom Mode,C3-3,,,,
"Setup",Setting,Save to Custom Mode,C3-4,,,,
"Setup",Setting,Save to Custom Mode,C3-5,,,,
"Setup",Setting,Save to Custom Mode,C3-6,,,,
"Setup",Setting,Save to Custom Mode,C3-7,,,,
"Setup",Setting,Save to Custom Mode,C3-8,,,,
"Setup",Setting,Save to Custom Mode,C3-9,,,,
"Setup",Setting,Save to Custom Mode,C3-10,,,,
"Setup",Setting,Load Custom Mode,C1,,,,
"Setup",Setting,Load Custom Mode,C2,,,,
"Setup",Setting,Load Custom Mode,C3-1,,,,
"Setup",Setting,Load Custom Mode,C3-2,,,,
"Setup",Setting,Load Custom Mode,C3-3,,,,
"Setup",Setting,Load Custom Mode,C3-4,,,,
"Setup",Setting,Load Custom Mode,C3-5,,,,
"Setup",Setting,Load Custom Mode,C3-6,,,,
"Setup",Setting,Load Custom Mode,C3-7,,,,
"Setup",Setting,Load Custom Mode,C3-8,,,,
"Setup",Setting,Load Custom Mode,C3-9,,,,
"Setup",Setting,Load Custom Mode,C3-10,,,,
"Setup",Setting,Custom Mode Settings,Limit No. of Custom Mode,,,,
"Setup",Setting,Custom Mode Settings,Edit Title,,,,
"Setup",Setting,Custom Mode Settings,How to Reload Custom Mode,,,,
"Setup",Setting,Custom Mode Settings,Select Loading Details,,,,
"Setup",Setting,Save/Restore Camera Setting,Card Slot 1(XQD),Save,,,
"Setup",Setting,Save/Restore Camera Setting,Card Slot 1(XQD),Load,,,
"Setup",Setting,Save/Restore Camera Setting,Card Slot 1(XQD),Delete,,,
"Setup",Setting,Save/Restore Camera Setting,Card Slot 2(SD),Save,,,
"Setup",Setting,Save/Restore Camera Setting,Card Slot 2(SD),Load,,,
"Setup",Setting,Save/Restore Camera Setting,Card Slot 2(SD),Delete,,,
"Setup",Setting,Reset,,,,,
"Setup",Others,Clock Set,,,,,
"Setup",Others,Time Zone,,,,,
"Setup",Others,Pixel Refresh,,,,,
"Setup",Others,Sensor Cleaning,,,,,
"Setup",Others,Language,,,,,
"Setup",Others,Firmware Version,Firmware Update,,,,
"Setup",Others,Firmware Version,Software info,,,,
"Setup",Others,Online Manual,URL display,,,,
"Setup",Others,Online Manual,QR Code display,,,,
"Setup",Others,Approved Regulations,,,,,
"My Menu",Add
"My Menu",Sorting
"My Menu",Delete,Delete Item
"My Menu",Delete,Delete All
"My Menu",Display from My Menu,ON
"My Menu",Display from My Menu,OFF
"Playback",Playback Mode,Rotate Disp.,ON,,,,
"Playback",Playback Mode,Rotate Disp.,OFF,,,,
"Playback",Playback Mode,Picture Sort,FILE NAME,,,,
"Playback",Playback Mode,Picture Sort,DATE/TIME,,,,
"Playback",Playback Mode,Magnify from AF Point,ON,,,,
"Playback",Playback Mode,Magnify from AF Point,OFF,,,,
"Playback",Playback Mode,HLG View Assist (Monitor),MODE1,,,,
"Playback",Playback Mode,HLG View Assist (Monitor),MODE2,,,,
"Playback",Playback Mode,HLG View Assist (Monitor),OFF,,,,
"Playback",Process Images,RAW Processing,,,,,
"Playback",Process Images,6K/4K PHOTO Bulk Saving,,,,,
"Playback",Process Images,6K/4K PHOTO Noise Reduction,AUTO,,,,
"Playback",Process Images,6K/4K PHOTO Noise Reduction,OFF,,,,
"Playback",Process Images,Time Lapse Video,,,,,
"Playback",Process Images,Stop Motion Video,,,,,
"Playback",Add/Delete Info.,Protect,Single,,,,
"Playback",Add/Delete Info.,Protect,Multi,,,,
"Playback",Add/Delete Info.,Protect,Cancel,,,,
"Playback",Add/Delete Info.,Rating,Single,,,,
"Playback",Add/Delete Info.,Rating,Multi,,,,
"Playback",Add/Delete Info.,Rating,Cancel,,,,
"Playback",Add/Delete Info.,Rating,1,,,,
"Playback",Add/Delete Info.,Rating,2,,,,
"Playback",Add/Delete Info.,Rating,3,,,,
"Playback",Add/Delete Info.,Rating,4,,,,
"Playback",Add/Delete Info.,Rating,5,,,,
"Playback",Add/Delete Info.,Rating,OFF,,,,
"Playback",Edit Image,Resize,Single,,,,
"Playback",Edit Image,Resize,Multi,,,,
"Playback",Edit Image,Rotate,Clockwise,,,,
"Playback",Edit Image,Rotate,Counter-clockwise,,,,
"Playback",Edit Image,Video Divide,,,,,
"Playback",Edit Image,Copy,Copy Direction,,,,
"Playback",Edit Image,Copy,Copy Direction,,,,
"Playback",Edit Image,Copy,Select Copy,,,,
"Playback",Edit Image,Copy,Copy All in Folder,,,,
"Playback",Edit Image,Copy,Copy All in Card,,,,
"Playback",Edit Image,Copy,Same Folder Number as Source,,,,
"Playback",Edit Image,Copy,Create a New Folder,,,,
"Playback",Edit Image,Copy,Select Folder,,,,
"Playback",Others,Delete Confirmation,"""Yes"" first",,,,
"Playback",Others,Delete Confirmation,"""No"" first",,,,
"Playback",Playback Mode,Rotate Disp.,ON,,,,
"Playback",Playback Mode,Rotate Disp.,OFF,,,,
"Playback",Playback Mode,Picture Sort,FILE NAME,,,,
"Playback",Playback Mode,Picture Sort,DATE/TIME,,,,
"Playback",Playback Mode,Magnify from AF Point,ON,,,,
"Playback",Playback Mode,Magnify from AF Point,OFF,,,,
"Playback",Playback Mode,HLG View Assist (Monitor),MODE1,,,,
"Playback",Playback Mode,HLG View Assist (Monitor),MODE2,,,,
"Playback",Playback Mode,HLG View Assist (Monitor),OFF,,,,
"Playback",Process Images,RAW Processing,,,,,
"Playback",Process Images,6K/4K PHOTO Bulk Saving,,,,,
"Playback",Process Images,6K/4K PHOTO Noise Reduction,AUTO,,,,
"Playback",Process Images,6K/4K PHOTO Noise Reduction,OFF,,,,
"Playback",Process Images,Time Lapse Video,,,,,
"Playback",Process Images,Stop Motion Video,,,,,
"Playback",Add/Delete Info.,Protect,Single,,,,
"Playback",Add/Delete Info.,Protect,Multi,,,,
"Playback",Add/Delete Info.,Protect,Cancel,,,,
"Playback",Add/Delete Info.,Rating,Single,,,,
"Playback",Add/Delete Info.,Rating,Multi,,,,
"Playback",Add/Delete Info.,Rating,Cancel,,,,
"Playback",Add/Delete Info.,Rating,1,,,,
"Playback",Add/Delete Info.,Rating,2,,,,
"Playback",Add/Delete Info.,Rating,3,,,,
"Playback",Add/Delete Info.,Rating,4,,,,
"Playback",Add/Delete Info.,Rating,5,,,,
"Playback",Add/Delete Info.,Rating,OFF,,,,
"Playback",Edit Image,Resize,Single,,,,
"Playback",Edit Image,Resize,Multi,,,,
"Playback",Edit Image,Rotate,Clockwise,,,,
"Playback",Edit Image,Rotate,Counter-clockwise,,,,
"Playback",Edit Image,Video Divide,,,,,
"Playback",Edit Image,Copy,Copy Direction,,,,
"Playback",Edit Image,Copy,Select Copy,,,,
"Playback",Edit Image,Copy,Copy All in Folder,,,,
"Playback",Edit Image,Copy,Copy All in Card,,,,
"Playback",Edit Image,Copy,Same Folder Number as Source,,,,
"Playback",Edit Image,Copy,Create a New Folder,,,,
"Playback",Edit Image,Copy,Select Folder,,,,
"Playback",Others,Delete Confirmation,"""Yes"" first",,,,
"Playback",Others,Delete Confirmation,"""No"" first",,,,
camera_menu_config,
brand,Panasonic
model,S1
css_file,panasonicS1
icon:camera,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAXCAYAAAD3CERpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGPGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NjhhLCAyMDI0LzAzLzA2LTExOjUyOjA1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuMTIgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI1LTAyLTI1VDEyOjA3OjI3KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNS0wMi0yNlQwOTowNjo0MiswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNS0wMi0yNlQwOTowNjo0MiswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2Y3ZjE5N2YtYTQyZS00OWQzLThlMmQtMjRjZjIyMTgxNTExIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzAzMGVmZWMtYzZiOC1hODRlLThjM2QtYmVmNDMzNDkxYjVlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2Y2YWQ1NzktZDE5Yi00OGY5LTg4YjctNDllOWJhYTc5NzkwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjZhZDU3OS1kMTliLTQ4ZjktODhiNy00OWU5YmFhNzk3OTAiIHN0RXZ0OndoZW49IjIwMjUtMDItMjVUMTI6MDc6MjcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjdmMTk3Zi1hNDJlLTQ5ZDMtOGUyZC0yNGNmMjIxODE1MTEiIHN0RXZ0OndoZW49IjIwMjUtMDItMjZUMDk6MDY6NDIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6694MmAAACqUlEQVRIia2WvWtUURDFf/dtsvlCBEU0hYIRJIWdsbBRsFaCYCMoWggq2lj4j9haiYVoCgsRNFUsLbWwsdG0IpKv3cTd947Fndkdn6t5AQce9+29754zc+7M3E2SaGiTwDxwANgABFS2VgIfmgIhqemzLOmHpK6kjqSepJ+StiVtSLrRFKsp4SUj6EjaUbZSUt/GrqTvkg7/L9IpSZuSKv3bupIeNyEtdlF/HLgFjAHJ5qpwln1g255x4BpwZrcjTZZIi8BDSw4BBbAGLACHDHTK9pRAz5xo2yibr4AOsAps2vy4ff8eeAR8TZIWgBUj8miSRdcKjni29mxMATSSuwN1K8yR4wVw2cDbBuBk6yZfFZ5XwEXgJHCUXEJ3DawP7ARH3FqGWQITwBySHoQsrEJW+ntP0pak65LSX5JjUtJLK59S0rrtq+N0Jc0XFrZLGqVMtlYAd4CnNj/KtoErwOcQnR+Xq+SYKmpARRg3yef3Alj6C1m0Erhge6ZrQUT8ViyZGKGAGQN4YpE0sW/Aa6AbsNwGSVnUFlN479jal4aEbksMExCGR+QSV657JHY5Jmzc2iPpGjlbqzDnmCUWaapt8mhb9vvIHklPMUykiDkgH9UGo1eJ3K2aWgLuB9xYDQO+erlEr0pykd8DTjQkXQRmGUYan4GNksCtTU6I/cAz4OAuhOeA5+aoBxG7mXMkz9560dfP9TS58M+S/0FE2wfcBN6R1SnJyZT4vRr8ImGMP3WPWefR9oxshVxCy8An4DxZ0tK+m7BxhmFFVEY2uAictBcWPVIv5op8rfVtbg64XYskRtSuKRG7XB9oJ0nHgI/ks4g918fK1srgZBmUiTXeMmC3+nX3Brjql/gsuWG7vA7kIDPkDjUdVBll0+QrMTZ8x1wF3gLdX9+0RtkZdOa+AAAAAElFTkSuQmCC
`,df=`Tab,Category,Menu Item (click link for Sony Help Guide),Sub Menu Item,Comments/Defaults
My Menu,My Menu 1,,,
My Menu,My Menu 2,,,
My Menu,My Menu 3,,,
My Menu,My Menu Setting,Add Item,,
My Menu,My Menu Setting,Sort Item,,
My Menu,My Menu Setting,Delete Item,,
My Menu,My Menu Setting,Delete Page,,
My Menu,My Menu Setting,Delete All,,
My Menu,My Menu Setting,Display From My Menu,,
Camera 1,Quality / Image Size1,APS-C/Super 35mm,APS-C S35 Shooting,
Camera 1,Quality / Image Size1,APS-C/Super 35mm,APS-C S35 Shooting:Manual,
Camera 1,Quality / Image Size1,Aspect Ratio (still image),3:2,
Camera 1,Quality / Image Size1,Aspect Ratio (still image),16:9,
Camera 1,Quality / Image Size1,File Format (still image),,
Camera 1,Quality / Image Size1,JPEG Image Size (still image),,
Camera 1,Quality / Image Size1,JPEG Quality (still image),,
Camera 1,Quality / Image Size1,RAW File Type (still image),,
Camera 1,Quality / Image Size2,Color Space (still image),,
Camera 1,Quality / Image Size2,High ISO NR (still image),,
Camera 1,Quality / Image Size2,Lens Comp.,Lens Comp. -Shading,
Camera 1,Quality / Image Size2,Lens Comp.,Lens Comp. CA,
Camera 1,Quality / Image Size2,Lens Comp.,Lens Comp. Dist,
Camera 1,Quality / Image Size2,Long Exposure NR (still image),,
Camera 1,Shoot Mode/Drive1,Bracket Settings,Selftimer during Bracketing,
Camera 1,Shoot Mode/Drive1,Bracket Settings,Bracket Order,
Camera 1,Shoot Mode/Drive1,Memory (Camera Settings 1 & 2),,"Save Settings to Dial C1,2,3 or Card M1,2,3,4 "
Camera 1,Shoot Mode/Drive1,Px. Shift Multi Shoot,,
Camera 1,Shoot Mode/Drive1,Px. Shift Multi Shoot,Pixel Shift Options,
Camera 1,Shoot Mode/Drive1,Recall (Camera Settings 1 & 2),,
Camera 1,Shoot Mode/Drive1,Select Media(Memory recall),,
Camera 1,Shoot Mode/Drive2,Registering shooting settings to a custom key (Reg Cust Shoot Set),,
Camera 1,AF1,Focus Area,Focus Area Options,
Camera 1,AF1,Focus Mode,,
Camera 1,AF1,Focus Settings,,
Camera 1,AF1,Priority Set in AF-C,,
Camera 1,AF1,Priority Set in AF-S,,
Camera 1,AF1,Swt. V/H AF Area,,
Camera 1,AF2,AF Illuminator (still image),,
Camera 1,AF2,AF System(still image),,
Camera 1,AF2,AF Track Sens(still image),,
Camera 1,AF2,AF w/ shutter (still image),,
Camera 1,AF2,Center Lock-on AF,,
Camera 1,AF2,Set. Face Prty in AF,Face Priority in AF,
Camera 1,AF2,Set. Face Prty in AF,Face Dtct Frame Dsp,
Camera 1,AF3,AF Area Auto Clear,,
Camera 1,AF3,AF Area Regist,,
Camera 1,AF3,Del. Reg. AF Area,,
Camera 1,AF3,Disp. cont. AF area,,
Camera 1,AF3,Eye-Start AF (still image),,
Camera 1,AF3,Pre-AF (still image),,
Camera 1,AF4,AF Micro Adj.,,
Camera 1,AF4,Aperture Drive in AF,,
Camera 1,AF4,Phase Detect. Area,,
Camera 1,Exposure1,Exposure Comp.,,
Camera 1,Exposure1,Face Prty in Mlti Mtr,,
Camera 1,Exposure1,ISO,ISO options,
Camera 1,Exposure1,ISO AUTO Min. SS,ISO Auto Opt.,
Camera 1,Exposure1,Metering Mode,Metering Mode Spot Option,
Camera 1,Exposure1,Reset EV Comp.,,
Camera 1,Exposure2,AEL w/ shutter (still image),,
Camera 1,Exposure2,Exposure Std. Adjust,,
Camera 1,Exposure2,Exposure step,,
Camera 1,Exposure2,Spot Metering Point,,
Camera 1,FLASH,Exp.comp.set,,
Camera 1,FLASH,Flash Comp.,,
Camera 1,FLASH,Flash Mode,,
Camera 1,FLASH,Red Eye Reduction,,
Camera 1,FLASH,Wireless Flash,,
Camera 1,Color/WB/Img Processing,Creative Style,Contrast,
Camera 1,Color/WB/Img Processing,Creative Style,Saturation,
Camera 1,Color/WB/Img Processing,Creative Style,Sharpness,
Camera 1,Color/WB/Img Processing,DRO / Auto/HDR ,D-Range Opt.(DRO),
Camera 1,Color/WB/Img Processing,DRO / Auto/HDR ,Auto HDR,
Camera 1,Color/WB/Img Processing,Picture Effect,[set as desired],
Camera 1,Color/WB/Img Processing,Picture Profile,Options,
Camera 1,Color/WB/Img Processing,Priority Set in AWB,,
Camera 1,Color/WB/Img Processing,White Balance,,
Camera 1,Focus Assist,AF in Focus Mag. (still image),,
Camera 1,Focus Assist,Focus Magnif. Time,,
Camera 1,Focus Assist,Focus Magnifier,,
Camera 1,Focus Assist,Initial Focus Mag.(still image),,
Camera 1,Focus Assist,MF Assist (still image),,
Camera 1,Focus Assist,Peaking Setting,Peaking Display,
Camera 1,Focus Assist,Peaking Setting,Peaking Level,
Camera 1,Focus Assist,Peaking Setting,Peaking Color,
Camera 1,Shooting Assist,Anti-flicker Shoot. (still image),,
Camera 1,Shooting Assist,Face Registration,,
Camera 1,Shooting Assist,Regist. Faces Priority,,
Camera 2,Movie 1,File Format (movie),,
Camera 2,Movie 1,Movie:Exposure Mode,RAW & JPEG,
Camera 2,Movie 1,Proxy Recording,Off,
Camera 2,Movie 1,Record Setting (movie),,
Camera 2,Movie 1,S&Q Motion: Exposure Mode,Uncompressed,
Camera 2,Movie 1,S&Q Settings,,Record Setting
Camera 2,Movie 1,S&Q Settings,,Frame Rate
Camera 2,Movie 2,AF drive speed (movie),On,
Camera 2,Movie 2,AF Track Sens (movie),,
Camera 2,Movie 2,Audio Level Display,Off,
Camera 2,Movie 2,Audio Rec Level,Off,
Camera 2,Movie 2,Audio Recording,Off,
Camera 2,Movie 2,Auto Slow Shut. (movie),,
Camera 2,Movie 3,Audio Out Timing,SingleShooting,
Camera 2,Movie 3,Marker Display(movie),Off,
Camera 2,Movie 3,Marker Settings(movie),0→ - → +,Center
Camera 2,Movie 3,Marker Settings(movie),OFF,Aspect
Camera 2,Movie 3,Marker Settings(movie),,Safety Zone
Camera 2,Movie 3,Marker Settings(movie),[set as desired],Guideframe
Camera 2,Movie 3,Movie w/ shutter,Slot 1,
Camera 2,Movie 3,Video Light Mode,[set as desired],
Camera 2,Movie 3,Wind Noise Reduct.,--,
Camera 2,Shutter/Steady Shot,e-Front Curtain Shut.,,
Camera 2,Shutter/Steady Shot,Release w/o Card,Balanced Emphasis,
Camera 2,Shutter/Steady Shot,Release w/o Lens,AF-S,
Camera 2,Shutter/Steady Shot,Silent Shooting(still image),Refer to TAB Reg Cust Shoot Set,
Camera 2,Shutter/Steady Shot,SteadyShot,Balanced Emphasis,
Camera 2,Shutter/Steady Shot,SteadyShot Settings,Wide,SteadyShotAdjust
Camera 2,Shutter/Steady Shot,SteadyShot Settings,,SteadyS.FocalLen
Camera 2,Zoom,Clear Image Zoom/Digital Zoom (Zoom),,
Camera 2,Zoom,Zoom Ring Rotate,Off ,
Camera 2,Zoom,Zoom Setting,Auto,
Camera 2,Display/Auto Review 1,DISP Button(Monitor/Finder),Off ,
Camera 2,Display/Auto Review 1,Exposure Set. Guide,,
Camera 2,Display/Auto Review 1,Finder Frame Rate (still image),,
Camera 2,Display/Auto Review 1,FINDER/MONITOR,3 Std,
Camera 2,Display/Auto Review 1,Grid Line,Off,
Camera 2,Display/Auto Review 1,Zebra Setting,On,Display
Camera 2,Display/Auto Review 1,Zebra Setting,100,Level
Camera 2,Display/Auto Review 2,Auto Review,On,
Camera 2,Display/Auto Review 2,Displaying continuous shooting remaining time indicator (Cont. Shoot. Length),Off,
Camera 2,Display/Auto Review 2,Live View Display,[set as desired],
Camera 2,Custom Operation 1,Av/Tv Rotate,,
Camera 2,Custom Operation 1,Custom Key Movie Page 1,Auto,Control Wheel
Camera 2,Custom Operation 1,Custom Key Movie Page 2,Off,Multi-Slc Center Button
Camera 2,Custom Operation 1,Custom Key Movie Page 3,Auto,AEL Button
Camera 2,Custom Operation 1,Custom Key Playbac Page 1,[set as desired],Custom Button 1
Camera 2,Custom Operation 1,Custom Key Still Page 1,Off,Control Wheel
Camera 2,Custom Operation 1,Custom Key Still Page 2,ISO Auto,Multi-Slc Center Button
Camera 2,Custom Operation 1,Custom Key Still Page 3,On,AEL Button
Camera 2,Custom Operation 1,Dial Setup,,
Camera 2,Custom Operation 1,Function Menu Set.- Lower,Function Lower 1,
Camera 2,Custom Operation 2,Audio signals,,
Camera 2,Custom Operation 2,Dial Ev Comp,,
Camera 2,Custom Operation 2,Function Ring(Lens),,
Camera 2,Custom Operation 2,Lock Operation Parts,,
Camera 2,Custom Operation 2,MOVIE Button,,
Network,Network 1,Airplane Mode,,
Network,Network 1,Ctrl w/ Smartphone,,
Network,Network 1,FTP Transfer Func.,,
Network,Network 1,Send to Computer,,
Network,Network 1,Send to Smartphone,Send to Smartphone,
Network,Network 1,Send to Smartphone, Sending Target (proxy movies),
Network,Network 1,View on TV,,
Network,Network 2,Bluetooth Settings,,
Network,Network 2,Edit Device Name,,
Network,Network 2,Importing root certification to the camera ,,
Network,Network 2,Loc. Info. Link Set.,,GPS
Network,Network 2,Reset Network Set.,,
Network,Network 2,WPS Push,,WiFi Settings
Network,Network 2,Access Point Set.,,WiFi Settings
Network,Network 2,Disp MAC Address,,WiFi Settings
Network,Network 2,SSID/PW Reset,,WiFi Settings
Network,Network 3,Bluetooth Rmt Ctrl,,
Playback,Playback 1,Deleting multiple selected images (Delete),,
Playback,Playback 1,Protecting images (Protect),,
Playback,Playback 1,Rating,,
Playback,Playback 1,Rating Set(Cust Key),,
Playback,Playback 1,Rotating an image (Rotate),,
Playback,Playback 1,Specifying images to be printed (Specify Printing),,
Playback,Playback 2,Copying images from one memory card to another (Copy),,
Playback,Playback 2,Enlarge Init. Mag.,,
Playback,Playback 2,Enlarge Initial Pos.,,
Playback,Playback 2,Enlarging an image being played back (Enlarge Image),,
Playback,Playback 2,Photo Capture,,
Playback,Playback 2,Playing back images using slideshow (Slide Show),,
Playback,Playback 3,Disp Cont Shoot Grp,,
Playback,Playback 3,Playing back images on the image index screen (Image Index),,
Playback,Playback 3,Rotating recorded images automatically (Display Rotation),,
Playback,Playback 3,Selecting which memory card to play back (Select PB Media),,
Playback,Playback 3,Setting the method for jumping between images (Image Jump Setting),,
Playback,Playback 3,Switching between still images and movies (View Mode),,
Playback,Playback 4,Cont. PB for Intvl.,,
Playback,Playback 4,PB Speed for Intvl,,
Setup,Setup 1,Delete confirm.,Cancel first,
Setup,Setup 1,Finder Color Temp.,[set as desired],
Setup,Setup 1,Gamma Disp. Assist,Off,
Setup,Setup 1,Monitor Brightness,[set as desired],
Setup,Setup 1,Viewfinder Bright.,Auto,
Setup,Setup 1,Volume Settings,[set as desired],
Setup,Setup 2,Auto Pwr OFF Temp.,Std. ,
Setup,Setup 2,Cleaning Mode,[set as desired],
Setup,Setup 2,Display Quality,Std. ,
Setup,Setup 2,NTSC/PAL Selector,[set as desired],
Setup,Setup 2,Pwr Save Start Time,1min,
Setup,Setup 2,Touch Operation,On,
Setup,Setup 3,Demo Mode,,
Setup,Setup 3,HDMI Settings,HDMI Resolution,
Setup,Setup 3,HDMI Settings,24p/60p Output (movie)(Only for 1080 60i compatible models),
Setup,Setup 3,HDMI Settings,HDMI Info. Display,
Setup,Setup 3,HDMI Settings,TC Output (movie),
Setup,Setup 3,HDMI Settings,REC Control (movie),
Setup,Setup 3,HDMI Settings,CTRL FOR HDMI,
Setup,Setup 3,Remote Ctrl,,
Setup,Setup 3,TC/UB Settings,,TC/UB Disp Setting
Setup,Setup 3,TC/UB Settings,,TC Preset
Setup,Setup 3,TC/UB Settings,,UB Preset
Setup,Setup 3,TC/UB Settings,,TC Format
Setup,Setup 3,TC/UB Settings,,TC Run
Setup,Setup 3,TC/UB Settings,,TC Make
Setup,Setup 3,TC/UB Settings,,UB Time Rec
Setup,Setup 3,Touch Pad Settings,,Operation in V Orientation
Setup,Setup 3,Touch Pad Settings,,Touch Position Mode
Setup,Setup 3,Touch Pad Settings,,Operation Area
Setup,Setup 3,Touch Panel/Pad,,
Setup,Setup 4,Language,English,
Setup,Setup 4,PC Remote Settings,,Still Img. Save Dest.
Setup,Setup 4,PC Remote Settings,,RAW+J PC Save Img
Setup,Setup 4,USB Connection,,
Setup,Setup 4,USB LUN Setting,,
Setup,Setup 4,USB Power Supply,,
Setup,Setup 4,4K Output Sel. (movie),,
Setup,Setup 5,Area Setting,[set as desired],
Setup,Setup 5,Copyright Info,[set as desired],
Setup,Setup 5,Date/Time Setup,[set as desired],
Setup,Setup 5,File Number,[set as desired],
Setup,Setup 5,Format,[set as desired],
Setup,Setup 5,Set File Name,[set as desired],
Setup,Setup 6,Display Media Info.,[set as desired],
Setup,Setup 6,Folder Name,[set as desired],
Setup,Setup 6,New Folder,[set as desired],
Setup,Setup 6,Rec. Media Settings,Slot 1,Prioritize Rec. Media
Setup,Setup 6,Rec. Media Settings,,Recording Mode
Setup,Setup 6,Rec. Media Settings,,Auto Switch Media
Setup,Setup 6,Recover Image DB,[set as desired],
Setup,Setup 6,Select REC Folder,[set as desired],
Setup,Setup 7,Setting Reset,,[set as desired]
Setup,Setup 7,Version,,[set as desired]
camera_menu_config,
brand,Sony
model,A7RIII
css_file,sonyA7Riii`,gf=`Tab,Category,Menu Item,Sub Menu Item,Comments/Defaults\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,,,\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,File Format,,Sets the file format for still images.\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,File Format,RAW,Images before processing are recorded in this file format. Select this format to process images on a computer for professional purposes.\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,File Format,RAW & JPEG,"A RAW image and a JPEG image are created at the same time. This is suitable when you need two image files, a JPEG for viewing, and a RAW for editing."\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,File Format,JPEG,The image is recorded in the JPEG format.\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,RAW File Type,,Selects the file type for RAW images.\r
,,,Compressed,Records images in compressed RAW format.\r
,,,Uncompressed,"Records images in uncompressed RAW format. When [Uncompressed] is selected for [RAW File Type], the file size of the image will be larger than if it were recorded in compressed RAW format."\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,JPEG Quality,,"Since the compression rate increases from [Extra fine] to [Fine] to [Standard], the file size decreases in the same order. This allows more files to be recorded on one memory card, but the image quality is lower. Selects the JPEG image quality for [RAW & JPEG] or [JPEG] under [File Format]."\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,JPEG Quality,Extra fine\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,JPEG Quality,Fine\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,JPEG Quality,Standard\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,JPEG Image Size,,"Selects the size of still images. The larger the image size, the more detail will be reproduced when the image is printed on large-format paper. The smaller the image size, the more images can be recorded."\r
,,,L,24M (6000×4000) at 3:2 / 20M (6000×3376) at 16:9. In APS-C size: 10M (3:2) / 8.7M (16:9).\r
,,,M,10M (3936×2624) at 3:2 / 8.7M (3936×2216) at 16:9. In APS-C size: 6.0M (3:2) / 5.1M (16:9).\r
,,,S,6.0M (3008×2000) at 3:2 / 5.1M (3008×1688) at 16:9. In APS-C size: 2.6M (3:2) / 2.2M (16:9).\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,Aspect Ratio,3:2,Same aspect ratio as 35 mm plate film Selects the aspect ratio for still images.\r
,,,16:9,An aspect ratio suitable for viewing on a TV that supports high definition\r
"<i name=""camera""/>Camera 1",Quality/Image Size1,APS-C/Super 35mm,Shooting,"Sets whether the camera automatically determines the capture range based on the lens. (Auto/Manual) Sets whether to record in APS-C-equivalent size for still images and in Super 35mm-equivalent size for movies."\r
,,,Shoot.: Manual,Sets whether to record in either an APS-C-equivalent size or Super 35mm-equivalent size when [Shooting] is set to [Manual]. (Off/On)\r
"<i name=""camera""/>Camera 1",Quality/Image Size2,,,\r
"<i name=""camera""/>Camera 1",Quality/Image Size2,Long Exposure NR,On,"Activates noise reduction for the same duration that the shutter is open. When noise reduction is in progress, a message appears and you cannot take another picture. Select this to prioritize the image quality. Sets noise reduction processing for shots with a shutter speed of 1 second or longer."\r
,,,Off,Does not activate noise reduction. Select this to prioritize the timing of shooting.\r
"<i name=""camera""/>Camera 1",Quality/Image Size2,High ISO NR,Normal,Activates high ISO noise reduction normally. Sets noise reduction processing for high-sensitivity shooting.\r
,,,Low,Activates high ISO noise reduction moderately.\r
,,,Off,Does not activate high ISO noise reduction. Select this to prioritize the timing of shooting.\r
"<i name=""camera""/>Camera 1",Quality/Image Size2,Color Space,sRGB,"This is the standard color space of the digital camera. Use [sRGB] in normal shooting, such as when you intend to print out the images without any modification. Changes the color space (range of reproducible colors)."\r
,,,AdobeRGB,"This color space has a wide range of color reproduction. When a large part of the subject is vivid green or red, Adobe RGB is effective. The file name of the recorded image starts with “_.”"\r
"<i name=""camera""/>Camera 1",Quality/Image Size2,Lens Comp,Shading Comp.,Sets whether to automatically compensate for darkness in the corners of the screen. ([Auto]/[Off]) Selects the type of lens compensation.\r
,,,Chro. Aber. Comp.,Sets whether to automatically reduce  color deviation at the corners of the screen. ([Auto]/[Off])\r
,,,Distortion Comp.,Sets whether to automatically compensate for distortion of the screen. ([Auto]/[Off])\r
"<i name=""camera""/>Camera 1",Shoot Mode/Drive1,Scene Selection,Portrait,Blurs background and sharpens the subject. Accentuates the skin tones softly. Selects pre-set settings to match various scene conditions.\r
,,,Sports Action,Shoots a moving subject at a fast shutter speed so that the subject looks as if it is standing still. The product shoots images continuously while the shutter button is pressed.\r
,,,Macro,"Shoots close-ups of the subjects, such as flowers, insects, food, or small items."\r
,,,Landscape,Shoots the entire range of a scenery in sharp focus with vivid colors.\r
,,,Sunset,Shoots the red of the sunset beautifully.\r
,,,Night Scene,Shoots night scenes without losing the dark atmosphere.\r
,,,Night Portrait,Shoots night scene portraits using the flash (sold separately).\r
"<i name=""camera""/>Camera 1",Shoot Mode/Drive1,Drive Mode,Single Shooting,"Normal shooting mode. Sets the drive mode, such as for continuous shooting. ([Self-timer] / [Cont. Bracket], etc.)"\r
,,,Cont. Shooting,Shoots images continuously while you press and hold down the shutter button.\r
,,,Self-timer,Shoots an image using the self-timer after a designated number of seconds have elapsed since the shutter button was pressed.\r
,,,Self-timer(Cont),Shoots a designated number of images using the self-timer after a designated number of seconds have elapsed since the shutter button was pressed.\r
,,,Cont. Bracket,"Shoots images while holding the shutter button down, each with different degrees of exposure."\r
,,,Single Bracket,"Shoots a specified number of images, one by one, each with a different degrees of exposure."\r
,,,WB bracket,"Shoots a total of three images, each with different color tones according to the selected settings for white balance, color temperature and color filter."\r
,,,DRO Bracket,"Shoots a total of three images, each at a different degree of D-Range Optimizer."\r
"<i name=""camera""/>Camera 1",Shoot Mode/Drive1,Bracket Settings,Selftimer during Brkt,"Sets whether to use the self-timer during bracket shooting. Also sets the number of seconds until the shutter is released if using the self-timer. (OFF/2 Sec/5 Sec/10 Sec) Sets self-timer shooting in bracket mode, shooting order for exposure"\r
,,,Bracket order,Sets the order of exposure bracketing and white balance bracketing. (0→-→+/-→0→+)\r
"<i name=""camera""/>Camera 1",Shoot Mode/Drive1,MR Recall,,\r
"<i name=""camera""/>Camera 1",Shoot Mode/Drive1,MR Memory,,\r
"<i name=""camera""/>Camera 1",Shoot Mode/Drive1,Select Media,Slot 1,Selects the slot 1. Selects the memory card slot from which settings are recalled or to which\r
,,,Slot 2,Selects the slot 2.\r
"<i name=""camera""/>Camera 1",Shoot Mode/Drive2,Reg Cust Shoot Set,,\r
"<i name=""camera""/>Camera 1",Shoot Mode/Drive2,Intvl. Shoot. Func.,Interval Shooting,Sets whether to perform interval shooting. ([On]/[Off])\r
,,,Shooting Start Time,Sets the time from when you press the shutter button to when interval shooting starts. (1 second to 99 minutes 59 seconds)\r
,,,Shooting Interval,Sets the shooting interval (time from when one exposure starts to when the exposure for the next shot starts). (1 second to 60 seconds)\r
,,,Number of Shots,Sets the number of shots for interval shooting. (1 shot to 9999 shots)\r
,,,AE Tracking Sens.,"Sets the tracking sensitivity of the auto exposure against the change in luminance during interval shooting. If you select [Low], exposure changes during interval shooting will be smoother. ([High]/[Mid]/[Low])"\r
,,,Silent Shoot. in Intvl.,Sets whether or not to perform silent shooting during interval shooting. ([On]/[Off])\r
,,,Shoot. Intvl. Priority,Sets whether or not to prioritize the shooting interval when the exposure mode is [Program Auto] or [Aperture Priority] and the shutter speed becomes longer than the time set for [Shooting Interval]. ([On]/[Off])\r
"<i name=""camera""/>Camera 1",AF1,Focus Mode,,"Selects the focus mode. ([Single-shot AF] / [Continuous AF], etc.)"\r
,,,Single-shot AF,The product locks the focus once focusing is complete. Use this when the subject is motionless.\r
,,,Automatic AF,[Single-shot AF] and [Continuous AF] are switched according to the movement of the subject.\r
,,,Continuous AF,The product continues to focus while the shutter button is pressed and held halfway down. Use this when the subject is in motion.\r
,,,DMF,"You can make fine adjustments manually after performing auto focusing, letting you focus on a subject more quickly than when using the manual focus from the beginning."\r
,,,Manual Focus,"Adjusts the focus manually. If you cannot focus on the intended subject using auto focus, use manual focus."\r
"<i name=""camera""/>Camera 1",AF1,Priority Set in AF-S,AF,Prioritizes focusing. The shutter will not be released until the subject is in focus. Sets the timing of the shutter release when [Focus Mode] is\r
,,,Release,Prioritizes the shutter's release. The shutter will be released even if the subject is out of focus.\r
,,,Balanced Emphasis,Shoots with a balanced emphasis on both focusing and shutter release.\r
"<i name=""camera""/>Camera 1",AF1,Priority Set in AF-C,AF,Prioritizes focusing. The shutter will not be released until the subject is in focus. Sets the timing of the shutter release when [Focus Mode] is set to\r
,,,Release,Prioritizes the shutter's release. The shutter will be released even if the subject is out of focus.\r
,,,Balanced Emphasis,Shoots with a balanced emphasis on both focusing and shutter release.\r
"<i name=""camera""/>Camera 1",AF1,Focus Area,Wide,"Focuses on a subject covering the whole range of the screen automatically.  When you press the shutter button halfway down in the still image shooting mode, a green frame is displayed around the area that is in focus. Selects the area of focus."\r
,,,Zone,"Select a zone on the monitor on which to focus, and the product will automatically select a focus area."\r
,,,Center,Focuses automatically on a subject in the center of the image. Use together with the focus-lock function to create the composition you want.\r
,,,Flexible Spot,Allows you to move the focusing frame to a desired point on the screen and focus on an extremely small subject in a narrow area.\r
,,,Expand Flexible Spot,"If the product cannot focus on a single selected point, it uses focus points around the flexible spot as a secondary priority area for focusing."\r
,,,Lock-on AF,"When the shutter button is pressed and held halfway down, the product tracks the subject within the selected autofocus area.  This setting is available only when the [Focus Mode] is set to [Continuous AF]. Point the cursor at [Lock-on AF] on the [Focus Area] setting screen, and then select the desired area to start tracking using the left/right sides of the control wheel. You can also move the tracking start area to the desired point by designating the area as a zone, flexible spot or expand flexible spot."\r
"<i name=""camera""/>Camera 1",AF1,Focus Settings,,"Allows you to focus using the front dial, rear dial or control wheel."\r
"<i name=""camera""/>Camera 1",AF1,Swt. V/H AF Area,Off,Does not switch the [Focus Area] and the position of the focusing frame according to the orientation of the camera (horizontal/vertical). Sets whether to adjust the [Focus Area] and the position of the\r
,,,AF Point Only,Switches the position of the focusing frame according to the orientation of the camera (horizontal/vertical). The [Focus Area] is fixed.\r
,,,AF Point + AF Area,Switches both the [Focus Area] and the position of the focusing frame according to the orientation of the camera (horizontal/vertical).\r
"<i name=""camera""/>Camera 1",AF2,AF Illuminator,Auto,"The AF illuminator lights up automatically in dark surroundings. Sets the AF illuminator, which provides light to aid focusing in dark"\r
,,,Off,Does not use the AF illuminator.\r
"<i name=""camera""/>Camera 1",AF2,Center Lock-on AF,,Sets the function to track a subject and continue focusing when pressing\r
"<i name=""camera""/>Camera 1",AF2,Face/Eye AF Set.,,Sets whether or not the camera will focus with priority on faces or eyes.\r
,,,Face/Eye Prty in AF,Sets whether or not to detect faces or eyes inside the focusing area and focus on the eyes (Eye AF) when autofocus is activated. ([On]/[Off])\r
,,,Subject Detection,Selects the target to be detected. ([Human]/[Animal])\r
,,,Face Dtct Frame Dsp,Sets whether or not to display the face detection frame when a human face is detected. ([On]/[Off])\r
,,,Animal Eye Display,Sets whether or not to display the eye detection frame when the eye of an animal is detected. ([On]/[Off])\r
"<i name=""camera""/>Camera 1",AF2,AF Track Sens,,Select [5(Responsive)] to focus responsively on subjects at different distances.  Select [1(Locked on)] to keep the focus on a specific subject when other things are crossing in front of the subject. Sets the AF tracking sensitivity for the still image mode.\r
"<i name=""camera""/>Camera 1",AF2,AF Track Sens,5(Responsive),\r
"<i name=""camera""/>Camera 1",AF2,AF Track Sens,4,\r
"<i name=""camera""/>Camera 1",AF2,AF Track Sens,3(Standard),\r
"<i name=""camera""/>Camera 1",AF2,AF Track Sens,2,\r
"<i name=""camera""/>Camera 1",AF2,AF Track Sens,1(Locked on),\r
"<i name=""camera""/>Camera 1",AF2,AF System,Phase Detection AF,Focuses with Phase Detection AF. The focusing speed is very fast. Sets the auto focus method when an LA-EA1/LA-EA3 Mount Adaptor\r
,,,Contrast AF,Always focuses with Contrast AF. The focusing speed is slower. Use when you cannot focus with [Phase Detection AF].\r
"<i name=""camera""/>Camera 1",AF2,AF w/ shutter,On,The auto focus operates when you press the shutter button halfway down. Sets whether to perform auto focusing when the shutter button is\r
,,,Off,The auto focus does not operate even if you press the shutter button halfway down.\r
"<i name=""camera""/>Camera 1",AF3,Pre-AF,On,Adjusts focus before you press the shutter button halfway down. Sets whether or not to perform auto focus before the shutter button is half\r
,,,Off,Does not adjust focus before you press the shutter button halfway down.\r
"<i name=""camera""/>Camera 1",AF3,Eye-Start AF,,Sets whether to use auto focus when you look through the viewfinder if\r
"<i name=""camera""/>Camera 1",AF3,AF Area Regist,,Sets whether to move the focusing frame to a preassigned position when\r
"<i name=""camera""/>Camera 1",AF3,Del. Reg. AF Area,,Deletes the focusing frame position information that was registered using\r
"<i name=""camera""/>Camera 1",AF3,AF Area Auto Clear,On,The focus area disappears automatically shortly after focus is achieved. Sets whether the focus area is displayed all the time or disappears\r
,,,Off,The focus area is displayed all the time.\r
"<i name=""camera""/>Camera 1",AF3,Disp. cont. AF area,On,Displays the focus area that is in focus. Sets whether or not to display the focus area in [Continuous AF] mode.\r
,,,Off,Does not display the focus area that is in focus.\r
"<i name=""camera""/>Camera 1",AF4,AF Micro Adj,,"adjusts the autofocused position, when using the LA-EA2"\r
"<i name=""camera""/>Camera 1",AF4,Aperture Drive in AF,Standard,Uses the standard aperture drive system.\r
,,,Silent Priority,Changes the aperture drive system to prioritize silence so that the sound from the aperture drive is quieter than in [Standard].\r
"<i name=""camera""/>Camera 1",Exposure1,Exposure Comp,,Compensates for the brightness of the entire image.\r
"<i name=""camera""/>Camera 1",Exposure1,Reset EV Comp,Maintain,Maintains the settings. Sets whether to maintain the exposure value set using\r
,,,Reset,Resets the settings.\r
"<i name=""camera""/>Camera 1",Exposure1,ISO,ISO AUTO,"Sets the ISO sensitivity automatically. Sets the ISO sensitivity. ([ISO AUTO], etc.)"\r
,,,ISO 50 – ISO 204800,Sets the ISO sensitivity manually. Selecting a larger number increases the ISO sensitivity.\r
"<i name=""camera""/>Camera 1",Exposure1,ISO AUTO Min. SS,FASTER (Faster)/FAST (Fast),"The ISO sensitivity will start to change at shutter speeds faster than [Standard], so you can prevent camera shake and subject blurring. Sets the slowest shutter speed at which ISO sensitivity will start to"\r
,,,STD (Standard),The camera automatically sets the shutter speed based on the focal length of the lens.\r
,,,SLOW (Slow)/SLOWER (Slower),"The ISO sensitivity will start to change at shutter speeds slower than [Standard], so you can shoot images with less noise."\r
,,,"1/8000 ― 30""",The ISO sensitivity starts to change at the shutter speed you have set.\r
"<i name=""camera""/>Camera 1",Exposure1,Metering Mode,Multi,Measures light on each area after dividing the total area into multiple areas and determines the proper exposure of the entire screen (Multi-pattern metering). Selects the method for measuring brightness.\r
,,,Center,"Measures the average brightness of the entire screen, while emphasizing the central area of the screen (Center-weighted metering)."\r
,,,Spot,Measures only the central area (Spot metering). This mode is suitable for measuring light on a specified part of the entire screen. The size of the metering circle can be selected from [Spot: Standard] and [Spot: Large]. The position of the metering circle depends the setting for [Spot Metering Point].\r
,,,Entire Screen Avg.,Measures the average brightness of the entire screen. The exposure will be stable even if the composition or the position of the subject changes.\r
,,,Highlight,Measures the brightness while emphasizing the highlighted area on the screen. This mode is suitable for shooting the subject while avoiding overexposure.\r
"<i name=""camera""/>Camera 1",Exposure1,Face Prty in Mlti Mtr,On,The camera measures brightness based on detected faces. Sets whether the camera measures brightness based on detected faces\r
,,,Off,"The camera measures brightness using the [Multi] setting, without detecting faces."\r
"<i name=""camera""/>Camera 1",Exposure2,Spot Metering Point,Center,"The spot metering position does not coordinate with the focus area, but always meters brightness at the center. Sets whether to coordinate the spot metering point with the"\r
,,,Focus Point Link,The spot metering position coordinates with the focus area.\r
"<i name=""camera""/>Camera 1",Exposure2,Exposure step,,"Selects the size of the increment step for shutter speed, aperture, and"\r
"<i name=""camera""/>Camera 1",Exposure2,AEL w/ shutter,Auto,"Fixes the exposure after adjusting the focus automatically when you press the shutter button halfway down when [Focus Mode] is set to [Single-shot AF]. When [Focus Mode] is set to [Automatic AF], and the product determines that the subject is moving, or you shoot burst images, the fixed exposure is cancelled. Sets whether to lock the exposure when the shutter button is pressed"\r
,,,On,Fixes the exposure when you press the shutter button halfway down.\r
,,,Off,Does not fix the exposure when you press the shutter button halfway down. Use this mode when you want to adjust focus and exposure separately.  The product keeps adjusting the exposure while shooting in [Cont. Shooting] mode.\r
"<i name=""camera""/>Camera 1",Exposure2,Exposure Std. Adjust,,Adjusts the standard for the correct exposure value for each metering\r
"<i name=""camera""/>Camera 1",Flash,Flash Mode,Flash Off,The flash does not operate. Sets the flash settings.\r
,,,Autoflash,The flash works in dark environments or when shooting towards bright light.\r
,,,Fill-flash,The flash works every time you trigger the shutter.\r
,,,Slow Sync.,The flash works every time you trigger the shutter. Slow sync shooting allows you to shoot a clear image of both the subject and the background by slowing the shutter speed.\r
,,,Rear Sync.,The flash works right before the exposure is completed every time you trigger the shutter. Rear sync shooting allows you to shoot a natural image of the trail of a moving subject such as a moving car or a walking person.\r
"<i name=""camera""/>Camera 1",Flash,Flash Comp,,Adjusts the intensity of flash output.\r
"<i name=""camera""/>Camera 1",Flash,Exp. comp. set,,Sets whether to reflect exposure compensation value to flash\r
"<i name=""camera""/>Camera 1",Flash,Wireless Flash,Off,Does not use the wireless flash function. Sets whether to shoot with the wireless flash.\r
,,,On,Uses the wireless flash function to make an external flash or flashes emit light at a distance from the camera.\r
"<i name=""camera""/>Camera 1",Flash,Red Eye Reduction,On,The flash is always fired to reduce the red-eye phenomenon. Reduces the red-eye phenomenon when using flash.\r
,,,Off,Does not use Red Eye Reduction.\r
"<i name=""camera""/>Camera 1",Flash,External Flash Set.,Ext. Flash Firing Set.,"Allows you to configure settings related to the firing of the flash, such as the flash mode, flash level, etc."\r
,,,Ext. Flash Cust. Set.,"Allows you to configure other flash settings, wireless settings, and flash unit settings."\r
"<i name=""camera""/>Camera 1",Color/WB/Img. Processing,White Balance,,Corrects the tone effect of the ambient light condition to record a neutral white subject in white.\r
,,,Auto,The product automatically adjusts the color tones.\r
,,,Daylight,\r
,,,Shade,\r
,,,Cloudy,\r
,,,Incandescent,\r
,,,Fluor.: Warm White,\r
,,,Fluor.: Cool White,\r
,,,Fluor.: Day White,\r
,,,Fluor.: Daylight,\r
,,,Flash,\r
,,,Underwater Auto,\r
,,,C.Temp./Filter,Adjusts the color tones depending on the light source. Achieves the effect of CC (Color Compensation) filters for photography.\r
,,,Custom 1/Custom 2/Custom 3,Uses the white balance setting saved in [Custom Setup].\r
,,,Custom Setup,Memorizes the basic white color under the light conditions for the shooting environment.\r
"<i name=""camera""/>Camera 1",Color/WB/Img. Processing,Priority Set in AWB,Standard,Shoots with standard auto white balance. The camera automatically adjusts the color tones. Selects which tone to prioritize when shooting under lighting conditions\r
,,,Ambience,Prioritizes the color tone of the light source. This is suitable when you want to produce a warm atmosphere.\r
,,,White,Prioritizes a reproduction of white color when the color temperature of the light source is low.\r
"<i name=""camera""/>Camera 1",Color/WB/Img. Processing,DRO/Auto HDR,Off,Does not use [DRO/Auto HDR]. Analyzes the contrast of light and shadow between the subject and the background and creates an image with the optimal brightness and gradation.\r
,,,D-Range Optimizer: Auto,Corrects the brightness automatically.\r
,,,D-Range Optimizer: Lv1 ― D-Range Optimizer: Lv5,Optimizes the gradation of a recorded image for each divided area. Select the optimization level from Lv1 (weak) to Lv5 (strong).\r
,,,Auto HDR: Exposure Diff. Auto,Corrects the brightness automatically.\r
,,,Auto HDR: Exposure Diff. 1.0EV ― Auto HDR: Exposure Diff. 6.0EV,"Sets the exposure difference, based on the contrast of the subject. Select the optimization level from 1.0EV (weak) to 6.0EV (strong).  For example, if you set the exposure value to 2.0 EV, three images will be composed with the following exposure levels: -1.0 EV, correct exposure and +1.0 EV."\r
"<i name=""camera""/>Camera 1",Color/WB/Img. Processing,Creative Style,Standard,For shooting various scenes with rich gradation and beautiful colors. Selects the desired image processing.\r
,,,Vivid,"The saturation and contrast are heightened for shooting striking images of colorful scenes and subjects such as flowers, spring greenery, blue sky, or ocean views."\r
,,,Neutral,The saturation and sharpness are lowered for shooting images in subdued tones. This is also suitable for capturing image material to be modified with a computer.\r
,,,Clear,"For shooting images in clear tones with limpid colors in highlight, suitable for capturing radiant light."\r
,,,Deep,"For shooting images with deep and dense colors, suitable for capturing the solid presence of the subject."\r
,,,Light,"For shooting images with bright and simple colors, suitable for capturing a refreshingly light ambience."\r
,,,Portrait,"For capturing skin in a soft tone, ideally suited for shooting portraits."\r
,,,Landscape,"The saturation, contrast, and sharpness are heightened for shooting vivid and crisp scenery. Distant landscapes also stand out more."\r
,,,Sunset,For shooting the beautiful red of the setting sun.\r
,,,Night Scene,The contrast is lowered for reproducing night scenes.\r
,,,Autumn leaves,"For shooting autumn scenes, vividly highlighting the reds and yellows of changing leaves."\r
,,,Black & White,For shooting images in black and white monotone.\r
,,,Sepia,For shooting images in sepia monotone.\r
,,,Registering preferred settings (Style Box),Select the six style box (the boxes with numbers on the left side ()) to register preferred settings. Then select the desired settings using the right button.  You can call up the same style with slightly different settings.\r
,,,Contrast,"The higher the value selected, the more the difference of light and shadow is accentuated, and the bigger the effect on the image."\r
,,,Saturation,"The higher the value selected, the more vivid the color. When a lower value is selected, the color of the image is restrained and subdued."\r
,,,Sharpness,"Adjusts the sharpness. The higher the value selected, the more the contours are accentuated, and the lower the value selected, the more the contours are softened."\r
"<i name=""camera""/>Camera 1",Color/WB/Img. Processing,Picture Effect,Off,Disables the [Picture Effect] function. Shoots images with a texture unique to the selected effect.\r
,,,Toy Camera,Creates a soft image with shaded corners and reduced sharpness.\r
,,,Pop Color,Creates a vivid look by emphasizing color tones.\r
,,,Posterization,"Creates a high contrast, abstract look by heavily emphasizing primary colors, or in black and white."\r
,,,Retro Photo,Creates the look of an aged photo with sepia color tones and faded contrast.\r
,,,Soft High-key,"Creates an image with the indicated atmosphere: bright, transparent, ethereal, tender, soft."\r
,,,Partial Color,"Creates an image which retains a specific color, but converts others to black and white."\r
,,,High Contrast Mono.,Creates a high-contrast image in black and white.\r
,,,Rich-tone Mono.,Creates an image in black and white with rich gradation and reproduction of details.\r
"<i name=""camera""/>Camera 1",Color/WB/Img. Processing,Picture Profile,PP1,Example setting using [Movie] gamma. Changes settings such as color and tone when recording images.\r
,,,PP2,Example setting using [Still] gamma.\r
,,,PP3,Example setting of natural color tone using the [ITU709] gamma.\r
,,,PP4,Example setting of a color tone faithful to the ITU709 standard.\r
,,,PP5,Example setting using [Cine1] gamma.\r
,,,PP6,Example setting using [Cine2] gamma.\r
,,,PP7,Example setting using [S-Log2] gamma.\r
,,,PP8,Example setting using the [S-Log3] gamma and the [S-Gamut3.Cine] under [Color Mode].\r
,,,PP9,Example setting using the [S-Log3] gamma and the [S-Gamut3] under [Color Mode].\r
,,,PP10,Example setting for recording HDR movies using [HLG2] gamma.\r
,,,Black Level,Sets the black level. (–15 to +15)\r
,,,Gamma,Selects a gamma curve.\r
,,,Black Gamma,Corrects gamma in low intensity areas.\r
,,,Knee,"Sets knee point and slope for video signal compression to prevent over-exposure by limiting signals in high intensity areas of the subject to the dynamic range of your camera. [Knee] is disabled if [Mode] is set to [Auto] when [Gamma] is set to [Still], [Cine1], [Cine2], [Cine3], [Cine4], [ITU709(800%)], [S-Log2], [S-Log3], [HLG], [HLG1], [HLG2], or [HLG3]. To enable [Knee], set [Mode] to [Manual]."\r
,,,Color Mode,"Sets type and level of colors. In [Color Mode], only [BT.2020] and [709] are available when [Gamma] is set to [HLG], [HLG1], [HLG2], or [HLG3]."\r
,,,Saturation,Sets the color saturation. (-32 to +32)\r
,,,Color Phase,Sets the color phase. (-7 to +7)\r
,,,Color Depth,"Sets the color depth for each color phase. This function is more effective for chromatic colors and less effective for achromatic colors.  The color looks deeper as you increase the setting value towards the positive side, and lighter as you decrease the value towards the negative side. This function is effective even if you set [Color Mode] to [Black & White]."\r
,,,Detail,Sets items for [Detail].\r
,,,To copy the settings to another picture profile number,You can copy the settings of the picture profile to another picture profile number.\r
,,,To Reset the picture profile to the default setting,You can reset the picture profile to the default setting. You cannot reset all picture profile settings at once.\r
"<i name=""camera""/>Camera 1",Focus Assist,Focus Magnifier,,Enlarges the image before shooting so that you can check the focus.\r
"<i name=""camera""/>Camera 1",Focus Assist,Focus Magnif. Time,2 Sec,Magnifies the images for 2 seconds. Sets the length of time the image will be shown in an enlarged form.\r
,,,5 Sec,Magnifies the images for 5 seconds.\r
,,,No Limit,Magnifies the images until you press the shutter button.\r
"<i name=""camera""/>Camera 1",Focus Assist,Initial Focus Mag,x1.0,Displays the image with the same magnification as the shooting screen. Sets the initial magnification scale when using [Focus Magnifier].\r
,,,x5.9,Displays a 5.9-times enlarged image.\r
,,,x1.0,Displays the image with the same magnification as the shooting screen.\r
,,,x3.8,Displays a 3.8-times enlarged image.\r
"<i name=""camera""/>Camera 1",Focus Assist,AF in Focus Mag,,Sets whether or not to autofocus when an enlarged image is being\r
"<i name=""camera""/>Camera 1",Focus Assist,MF Assist,,Displays an enlarged image when focusing manually.\r
"<i name=""camera""/>Camera 1",Focus Assist,Peaking Setting,Peaking Display,"Sets whether to display peaking. Sets the peaking function, which enhances the outline of in-focus areas"\r
,,,Peaking Level,Sets the level of enhancement of in-focus areas.\r
,,,Peaking Color,Sets the color used to enhance in-focus areas.\r
"<i name=""camera""/>Camera 1",Face Detection/Shoot Assist,Anti-flicker Shoot,Off,Does not reduce influences caused by flickering. Detects flickering/blinking from artificial light sources such as\r
,,,On,"Reduces influences caused by flickering. When the camera detects flickering while the shutter button is pressed halfway down,  (flicker icon) will be displayed."\r
"<i name=""camera""/>Camera 1",Face Detection/Shoot Assist,Face Registration,,changes the person to be given priority when focusing.\r
"<i name=""camera""/>Camera 1",Face Detection/Shoot Assist,Regist. Faces Priority,On,Focuses with higher priority on faces registered using [Face Registration]. Detects the registered face with higher priority using\r
,,,Off,Focuses without giving higher priority to  registered faces.\r
"<i name=""camera""/>Camera 2",Movie1,Exposure Mode,Program Auto,Allows you to shoot with the exposure adjusted automatically (both the shutter speed and the aperture value). Sets the exposure mode when shooting movies.\r
,,,Aperture Priority,Allows you to shoot after adjusting the aperture value manually.\r
,,,Shutter Priority,Allows you to shoot after adjusting the shutter speed manually.\r
,,,Manual Exposure,Allows you to shoot after adjusting the exposure (both the shutter speed and the aperture value) manually.\r
"<i name=""camera""/>Camera 2",Movie1,S&Q Exposure Mode,,Sets the exposure mode when shooting slow-motion/quick-motion movies. ([Program Auto]/[Aperture Priority]/[Shutter Priority]/[Manual Exposure])\r
"<i name=""camera""/>Camera 2",Movie1,File Format,,Selects the movie file format.\r
,,,XAVC S 4K,Records movies in 4K resolution (3840×2160).\r
,,,XAVC S HD,Records movies in crisper quality than AVCHD with larger amounts of data.\r
,,,AVCHD,The AVCHD format has a high degree of compatibility with storage devices other than computers.\r
"<i name=""camera""/>Camera 2",Movie1,Record Setting,,Selects the frame rate and bit-rate for movie recording. The available settings depend on [File Format].\r
"<i name=""camera""/>Camera 2",Movie1,S&Q Settings,Record Setting,Selects the frame rate of the movie. Changes the settings for slow-motion and quick-motion movie shooting.\r
,,,Frame Rate,Selects the shooting frame rate.\r
"<i name=""camera""/>Camera 2",Movie1,Proxy Recording,On,Proxy movies are simultaneously recorded. Records low-bit-rate proxy files simultaneously when recording\r
,,,Off,Proxy movies are not recorded.\r
"<i name=""camera""/>Camera 2",Movie2,AF drive speed,Fast,"Sets the AF drive speed to fast. This mode is suitable for shooting active scenes, such as sports. Switches focusing speed when using autofocus in movie mode."\r
,,,Normal,Sets the AF drive speed to normal.\r
,,,Slow,"Sets the AF drive speed to slow. With this mode, the focus switches smoothly when the subject to be focused is changed."\r
"<i name=""camera""/>Camera 2",Movie2,AF Track Sens,,Sets the AF sensitivity in movie mode.\r
,,,Responsive,Sets the AF sensitivity to high. This mode is useful when recording movies in which the subject is moving quickly.\r
,,,Standard,Sets the AF sensitivity to normal. This mode is useful when there are obstacles in front of the subject or in crowded places.\r
"<i name=""camera""/>Camera 2",Movie2,Auto Slow Shut,On,Uses Auto Slow Shutter. The shutter speed automatically slows when recording in dark locations. You can reduce noise in the movie by using a slow shutter speed when recording in dark locations. Sets the function that automatically adjusts the shutter speed following\r
,,,Off,"Does not use Auto Slow Shutter. The recorded movie will be darker than when [On] is selected, but you can record movies with smoother motion and less object blur."\r
"<i name=""camera""/>Camera 2",Movie2,Audio Recording,On,Records sound (stereo). Sets whether to record audio when shooting a movie.\r
,,,Off,Does not record sound.\r
"<i name=""camera""/>Camera 2",Movie2,Audio Rec Level,+,Turns up the audio recording level. Adjusts the audio recording level during movie recording.\r
,,,-,Turns down the audio recording level.\r
,,,Reset,Resets the audio recording level to the default setting.\r
"<i name=""camera""/>Camera 2",Movie2,Audio Level Display,On,Displays the audio level. Sets whether to display the audio level.\r
,,,Off,Does not display the audio level.\r
"<i name=""camera""/>Camera 2",Movie3,Audio Out Timing,Live,Outputs audio without delay. Select this setting when audio deviation is a problem during audio monitoring. Sets the timing of audio output during the movie recording.\r
,,,Lip Sync,Outputs audio and video in sync. Select this setting to prevent undesirable deviations between video and audio.\r
"<i name=""camera""/>Camera 2",Movie3,Wind Noise Reduct,On,Reduces wind noise. Reduces wind noise during movie recording.\r
,,,Off,Does not reduce wind noise.\r
"<i name=""camera""/>Camera 2",Movie3,Marker Display,On,Markers are displayed. The markers are not recorded. Sets whether to display markers on the monitor when recording movies.\r
,,,Off,No marker is displayed.\r
"<i name=""camera""/>Camera 2",Movie3,Marker Settings,Center,Sets whether or not to display the center marker in the center of the shooting screen.   [Off]/[On] Sets which markers to display on the monitor when recording movies.\r
,,,Aspect,Sets the aspect marker display.   [Off]/[4:3]/[13:9]/[14:9]/[15:9]/[1.66:1]/[1.85:1]/[2.35:1]\r
,,,Safety Zone,Sets the safety zone display. This becomes the standard range that can be received by a general household TV. [Off]/[80%]/[90%]\r
,,,Guideframe,Sets whether or not to display the guide frame. You can verify whether the subject is level or perpendicular to the ground. [Off]/[On]\r
"<i name=""camera""/>Camera 2",Movie3,Video Light Mode,Power Link,The video light turns on/off in sync with the ON/OFF operation of this camera. Sets the illumination setting for the\r
,,,REC Link,The video light turns on/off in sync with movie recording start/stop.\r
,,,REC Link&STBY,The video light turns on when movie recording starts and dims when not recording (STBY).\r
,,,Auto,The video light automatically turns on when it is dark.\r
"<i name=""camera""/>Camera 2",Movie3,Movie w/ shutter,On,Enables movie recording using the shutter button when the shooting mode is set to [Movie] or [S&Q Motion]. Records movies using the shutter button.\r
,,,Off,Disables movie recording using the shutter button.\r
"<i name=""camera""/>Camera 2",Shutter/SteadyShot,Silent Shooting,On,You can shoot images without the shutter sound. Shoots images without the shutter sound.\r
,,,Off,[Silent Shooting] is deactivated.\r
"<i name=""camera""/>Camera 2",Shutter/SteadyShot,e-Front Curtain Shut.,On,Uses the electronic front curtain shutter function.\r
,,,Off,Does not use the electronic front curtain shutter function.\r
"<i name=""camera""/>Camera 2",Shutter/SteadyShot,Release w/o Lens,Enable,"Releases the shutter when no lens is attached. Select [Enable] when attaching the product to an astronomical telescope, etc. Sets whether to release the shutter when the lens is not attached."\r
,,,Disable,Does not release the shutter when a lens is not attached.\r
"<i name=""camera""/>Camera 2",Shutter/SteadyShot,Release w/o Card,Enable,Releases the shutter even if no memory card has been inserted. Sets whether to release the shutter when a memory card is not inserted.\r
,,,Disable,Does not release the shutter when no memory card has been inserted.\r
"<i name=""camera""/>Camera 2",Shutter/SteadyShot,SteadyShot,On,Uses [SteadyShot]. Sets whether to activate SteadyShot for shooting.\r
,,,Off,"Does not use [SteadyShot].  We recommend that you set [Off] when using a tripod, etc."\r
"<i name=""camera""/>Camera 2",Shutter/SteadyShot,SteadyShot Settings,Auto,Performs the SteadyShot function automatically according to the information obtained from the attached lens. Sets SteadyShot settings.\r
,,,Manual,Performs the SteadyShot function according to the focal-length set using [SteadyS. Focal Len.]. (8mm-1000mm) Check the focal-length index (A) and set the focal-length.\r
"<i name=""camera""/>Camera 2",Zoom,Zoom,,Sets the zoom scale for zoom functions other than the optical zoom.\r
"<i name=""camera""/>Camera 2",Zoom,Zoom Setting,Optical zoom only,Limits the zoom range to the optical zoom. You can use the Smart Zoom function if you set [JPEG Image Size] to [M] or [S]. Sets whether to use the Clear Image\r
,,,On:ClearImage Zoom,"Select this setting to use Clear Image Zoom. Even if the zoom range exceeds the optical zoom, the product magnifies images within the range in which image quality does not deteriorate significantly."\r
,,,On:Digital Zoom,"When the zoom range of the Clear Image Zoom is exceeded, the product magnifies images to the largest scale. However, the image quality will deteriorate."\r
"<i name=""camera""/>Camera 2",Zoom,Zoom Ring Rotate,Left(W)/Right(T),Assigns zoom out (W) function to left-handed rotation and zoom-in (T) function to right-handed rotation. Assigns the zoom in/out to the rotational direction of the zoom lens.\r
,,,Right(W)/Left(T),Assigns zoom in (T) function to left-handed rotation and zoom-out (W) function to right-handed rotation.\r
"<i name=""camera""/>Camera 2",Display/Auto Review1,DISP Button,,Sets the type of information to be displayed on the monitor or in the\r
"<i name=""camera""/>Camera 2",Display/Auto Review1,FINDER/MONITOR,Auto,"When you look into the Electronic Viewfinder, the eye sensor reacts and the display is switched to the Electronic Viewfinder automatically. Sets the method for switching the display between the electronic"\r
,,,Viewfinder(Manual),The screen is turned off and the image is displayed only in the Electronic Viewfinder.\r
,,,Monitor(Manual),The Electronic Viewfinder is turned off and the image is always displayed on the screen.\r
"<i name=""camera""/>Camera 2",Display/Auto Review1,Zebra Setting,Zebra Display,Sets whether to display the zebra pattern. Sets the stripes displayed to adjust brightness.\r
,,,Zebra Level,Adjusts the brightness level of the zebra pattern.\r
"<i name=""camera""/>Camera 2",Display/Auto Review1,Grid Line,Rule of 3rds Grid,Place main subjects close to one of the grid lines that divide the image into thirds for a well-balanced composition. Displays grid lines for adjusting the image composition.\r
,,,Square Grid,"Square grids make it easier to confirm the horizontal level of your composition. This is suitable to determine the quality of the composition when shooting landscape, close-up, or duplicated images."\r
,,,Diag. + Square Grid,Place a subject on the diagonal line to express an uplifting and powerful feeling.\r
,,,Off,Does not display the grid line.\r
"<i name=""camera""/>Camera 2",Display/Auto Review1,Exposure Set. Guide,Off,Does not display the guide. Sets the guide displayed when exposure settings are changed in the\r
,,,On,Displays the guide.\r
"<i name=""camera""/>Camera 2",Display/Auto Review1,Live View Display,Setting Effect ON,Displays Live View in conditions close to what your picture will look like as a result of applying all your settings.  This setting is useful when you want to shoot pictures while checking the results of the shot on the Live View screen. Sets whether to reflect settings such as exposure compensation in screen\r
,,,Setting Effect OFF,"Displays Live View without the effects of exposure compensation, white balance, [Creative Style], or [Picture Effect].  When this setting is used, you can easily check the image composition.  Live View is always displayed with the appropriate brightness even in [Manual Exposure] mode. When [Setting Effect OFF] is selected, the  icon is displayed on the Live View screen."\r
"<i name=""camera""/>Camera 2",Display/Auto Review2,Cont. Shoot. Length,Always Display,Always displays the indicator when the drive mode is set to [Cont. Shooting]. Sets whether to display an indicator continuous shooting can be performed at the same shooting speed.\r
,,,Shoot.-Only Display,Displays the indicator only while continuous shooting is performed.\r
,,,Not Displayed,Does not display the indicator.\r
"<i name=""camera""/>Camera 2",Display/Auto Review2,Auto Review,10 Sec/5 Sec/2 Sec,"Displays the recorded image on the screen right after shooting for the selected duration of time.  If you perform a magnifying operation during Auto Review, you can check that image using the magnified scale. Sets auto review to display the captured image after shooting."\r
,,,Off,Does not display the Auto Review.\r
"<i name=""camera""/>Camera 2",Custom Operation1,Custom Key,Custom Key,Sets the custom key function to use when shooting still images. Assigns functions to the various keys so that you can perform operations\r
,,,Custom Key,Sets the custom key function to use when recording movies. You can assign a different function from the one used when shooting still images.\r
,,,Custom Key,Sets the custom key function to use when playing back images.\r
"<i name=""camera""/>Camera 2",Custom Operation1,Custom Key,,Assigns functions to the various keys so that you can perform operations\r
"<i name=""camera""/>Camera 2",Custom Operation1,Custom Key,,Assigns functions to the various keys so that you can perform operations\r
"<i name=""camera""/>Camera 2",Custom Operation1,Function Menu Set,,Customizes the functions displayed when the Fn (Function) button is\r
"<i name=""camera""/>Camera 2",Custom Operation1,Dial Setup,Tv Av,The front dial is used to change the shutter speed and the rear dial to change the aperture value. Sets the functions of the front and rear dials when the exposure mode\r
,,,Av Tv,The front dial is used to change the aperture value and the rear dial to change the shutter speed.\r
"<i name=""camera""/>Camera 2",Custom Operation1,Av/Tv Rotate,Normal,"Does not change the direction of rotation for the front dial, rear dial, or control wheel. Sets the direction of turning the front or rear dial or the control wheel to"\r
,,,Reverse,"Reverses the direction of rotation for the front dial, rear dial, or control wheel."\r
"<i name=""camera""/>Camera 2",Custom Operation2,Dial Ev Comp,Off,Does not enable exposure compensation with the front or rear dial. Sets whether to compensate the exposure with the front or rear dial.\r
,,,Front dial/ Rear dial,Enables exposure compensation with the front or rear dial.\r
"<i name=""camera""/>Camera 2",Custom Operation2,MOVIE Button,Always,Starts movie recording when you press the MOVIE button in any mode. Enables or disables for the MOVIE button.\r
,,,Movie Mode Only,Starts movie recording when you press the MOVIE button only if the shooting mode is set to [Movie] or [S&Q Motion] mode.\r
"<i name=""camera""/>Camera 2",Custom Operation2,Lock Operation Parts,Off,"Does not lock the multi-selector, front dial, rear dial, or control wheel even if you press and hold down the Fn (Function) button. Sets whether to disable the multi- selector, control wheel, or front and"\r
,,,Multi-Selector Only,Locks the multi-selector.\r
,,,Dial + Wheel,"Locks the front dial, rear dial, and control wheel."\r
,,,All,"Locks the multi-selector, front dial, rear dial, and control wheel."\r
"<i name=""camera""/>Camera 2",Custom Operation2,Audio signals,On,Sounds are produced for example when the focus is achieved by pressing the shutter button halfway down. Selects whether the camera beeps during auto focus and self-timer\r
,,,Off,Sounds are not produced.\r
"<i name=""camera""/>Camera 2",Custom Operation2,Function Ring(Lens),Power Focus,The focusing position moves toward infinity when you turn the function ring to the right. The focusing position moves to the closer range when you turn the function ring to the left.\r
,,,/Full Frm Sel.,The angle of view switches between full frame and APS-C/Super 35 mm when the function ring is turned. The angle of view switches regardless of the direction in which you turn the function ring.\r
Network,Network1,Snd to Smrtphn Func,,"Sets movies to be transferred to a smartphone, or transfers images to a smartphone"\r
,,,Send to Smartphone,Transfers images to a smartphone. ([Select on This Device]/[Select on Smartphone])\r
,,,Sending Target,Sets whether to transfer low-bit-rate proxy movies or high-bit-rate original movies. ([Proxy Only]/[Original Only]/[Proxy & Original])\r
Network,Network1,Send to Computer,,Backs up images by transferring them to a computer connected to a network\r
Network,Network1,FTP Transfer Func,,Sets image transfer using FTP and executes it. * Basic knowledge of FTP servers is required.\r
Network,Network1,View on TV,,Allows you to view images on a network-enabled TV.\r
Network,Network1,Ctrl w/ Smartphone,Ctrl w/ Smartphone,Sets whether to connect the camera and a smartphone using Wi-Fi. ([On]/[Off]) Sets the condition for connecting the camera to a smartphone.\r
,,,Connection,Displays the QR code or SSID used to connect the camera to a smartphone.\r
,,,Always Connected,"Sets whether to keep the camera connected to a smartphone. If this item is set to [On], once you connect the camera to a smartphone, it will remain connected to the smartphone at all times. If it is set to [Off], the camera will connect to a smartphone only when the connection procedure is performed."\r
Network,Network1,Airplane Mode,,"Disables wireless communications from the device such as Wi-Fi, NFC,"\r
Network,Network2,Wi-Fi Settings,,Allows you to register your access point and check or change the Wi-Fi connection information.\r
,,,WPS Push,Registers an access point that has a Wi-Fi Protected Setup (WPS) button.\r
,,,Access Point Set.,Registers an access point manually.\r
,,,Disp MAC Address,Displays the MAC address of this product.\r
,,,SSID/PW Reset,Resets the connection information shared with smartphones.\r
Network,Network2,Bluetooth Settings,Bluetooth Function (On/Off),Sets whether to activate or not the Bluetooth function of the camera. Controls the settings for connecting the camera with a smartphone via a\r
,,,Pairing,Displays the screen for pairing the camera and smartphone or Bluetooth remote commander.\r
,,,Disp Device Address,Displays the BD address of the camera.\r
Network,Network2,Loc. Info. Link Set,Location Info. Link,Sets whether to obtain the location information by linking with a smartphone. Obtains location information from the\r
,,,Auto Time Correct.,Sets whether to automatically correct the date setting of the camera using information from a linked smartphone.\r
,,,Auto Area Adjust.,Sets whether to automatically correct the area setting of the camera using information from a linked smartphone.\r
Network,Network2,Edit Device Name,,Changes the device name under Wi-Fi\r
Network,Network2,Imp Root Certificate,,Imports a root certificate to the camera.\r
Network,Network2,Reset Network Set,,Resets all the network settings.\r
Network,Network3,Bluetooth Rmt Ctrl,On,Enables Bluetooth remote commander operation.\r
,,,Off,Disables Bluetooth remote commander operation.\r
Playback,Playback1,Protect,Multiple Img.,"Applies or cancels the protection of the selected multiple images. \r
(1) Select the image to be protected, then press the center of the control wheel. The  mark is displayed in the check box. To cancel the selection, press the center again to remove the  mark. \r
(2) To protect other images, repeat step (1). \r
(3) MENU → [OK]. Protects recorded images against accidental erasure."\r
,,,All in this Folder,Protects all images in the selected folder.\r
,,,All with this date,Protects all images in the selected date range.\r
,,,Cancel All in this Folder,Cancels the protection of all images in the selected folder.\r
,,,Cancel All with this date,Cancels the protection of all images in the selected date range.\r
,,,All Images in This Group,Protects all the images in the selected group.\r
,,,Cancel All in This Group,Cancels the protection of all the images in the selected group.\r
Playback,Playback1,Rotate,,Rotates the image.\r
Playback,Playback1,Delete,,Deletes images.\r
,,,Multiple Img.,Deletes the selected images.\r
,,,All in this Folder,Deletes all images in the selected folder.\r
,,,All with this date,Deletes all images in the selected date range.\r
,,,All Other Than This Img.,Deletes all images in the group except the selection.\r
,,,All Images in This Group,Deletes all images in the selected group.\r
Playback,Playback1,Rating,,Assigns rating to recorded images on a scale from ★ to ★★★★★.\r
Playback,Playback1,Rating Set(Cust Key),,Assigns rating to recorded images on a scale from ★ to ★★★★★.\r
Playback,Playback1,Specify Printing,Multiple Img.,"Selects images to order printing. (1) Select an image and press the center of the control wheel. The  mark is displayed in the check box. To cancel the selection, press the center again and delete the  mark. (2) Repeat step (1) to print other images. To select all the images from a certain date or in a certain folder, select the check box for the date or folder. (3) MENU → [OK]. Specifies in advance on the memory card which still images to print out"\r
,,,Cancel All,Clears all DPOF marks.\r
,,,Print Setting,Sets whether to print the date on images registered with DPOF marks. The position or size of the date (inside or outside of the image) may differ depending on the printer.\r
Playback,Playback2,Copy,,Copies images from the memory card in the memory card slot designated in\r
Playback,Playback2,Photo Capture,,Captures a chosen scene in a movie to save as a still image.\r
Playback,Playback2,Enlarge Image,,Enlarges the playback images.\r
Playback,Playback2,Enlarge Init. Mag,Standard. Mag.,Displays an image with the standard magnification. Sets the initial magnification scale when playing back enlarged images.\r
,,,Previous Mag.,Displays an image with the previous magnification. The previous magnification is stored even after exiting the playback zoom mode.\r
Playback,Playback2,Enlarge Initial Pos,,Sets the initial position when enlarging an image in playback.\r
,,,Focused Position,Enlarges the image from the point of focus during shooting.\r
,,,Center,Enlarges the image from the center of the screen.\r
Playback,Playback2,Slide Show,Repeat,"Select [On], in which images are played back in a continuous loop, or [Off], in which the product exits the slideshow when all the images are played back once. Plays a slide show."\r
,,,Interval,"Select the display interval for images from among [1 Sec], [3 Sec], [5 Sec], [10 Sec] or [30 Sec]."\r
Playback,Playback3,Select PB Media,Slot 1,Selects the slot 1. Selects the memory card slot of the memory card to be played back.\r
,,,Slot 2,Selects the slot 2.\r
Playback,Playback3,View Mode,Date View,Displays the images by date. Plays back images from a specified date or specified folder of still images\r
,,,Folder View(Still),Displays only still images.\r
,,,AVCHD View,Displays only AVCHD-format movies.\r
,,,XAVC S HD View,Displays only XAVC S HD-format movies.\r
,,,XAVC S 4K View,Displays only XAVC S 4K-format movies.\r
Playback,Playback3,Image Index,9 Images/25 Images,Displays multiple images at the same time.\r
Playback,Playback3,Display as Group,On,Displays images as a group.\r
,,,Off,Does not display images as a group.\r
Playback,Playback3,Display Rotation,Auto,"When you rotate the camera, the displayed image rotates automatically by detecting the orientation of the camera. Sets the playback orientation for images shot vertically."\r
,,,Manual,"Images shot vertically are displayed vertically. If you have set the image orientation using the [Rotate] function, the image will be displayed accordingly."\r
,,,Off,Images are always displayed horizontally.\r
Playback,Playback3,Image Jump Setting,Select Dial,Selects the dial to use for jumping between images. Sets which dial and method to use for jumping between images during\r
,,,Image Jump Method,Sets the type of images to be played back with Image Jump.\r
Playback,Playback4,Cont. PB for Intvl.,,\r
Playback,Playback4,PB Speed for Intvl,,\r
Setup,Setup1,Monitor Brightness,Manual,Adjusts the brightness within the range of –2 to +2. Adjusts the brightness of the screen.\r
,,,Sunny Weather,Sets the brightness appropriately for shooting outdoors.\r
Setup,Setup1,Viewfinder Bright,Auto,Adjusts the brightness automatically. Sets the brightness of the electronic viewfinder.\r
,,,Manual,\r
Setup,Setup1,Finder Color Temp,-2 to +2,"When you select “-,” the viewfinder screen changes to a warmer color, and when you select “+,” it changes to a colder color. Sets the color temperature of the viewfinder."\r
Setup,Setup1,Gamma Disp. Assist,Off,Does not apply [Gamma Disp. Assist]. Adjusts the screen to make monitoring easier when displaying an\r
,,,Auto,"Displays movies with an [S-Log2→709(800%)] effect when the gamma set in [Picture Profile] is [S-Log2], and with an [S-Log3→709(800%)] effect when the gamma is set to [S-Log3]. Displays movies with an [HLG(BT.2020)] effect when the gamma set in [Picture Profile] is [HLG], [HLG1], [HLG2] or [HLG3], and [Color Mode] is set to [BT.2020].  Displays movies with an [HLG(709)] effect when the gamma set in [Picture Profile] is [HLG], [HLG1], [HLG2] or [HLG3], and [Color Mode] is set to [709]."\r
,,,S-Log2→709(800%),Displays movies with an S-Log2 gamma reproducing contrast equivalent to ITU709 (800%).\r
,,,S-Log3→709(800%),Displays movies with an S-Log3 gamma reproducing contrast equivalent to ITU709 (800%).\r
,,,HLG(BT.2020),Displays movies after adjusting the image quality of the monitor or viewfinder to a quality that is almost the same as when movies are displayed on an [HLG(BT.2020)] compatible monitor.\r
,,,HLG(709),Displays movies after adjusting the image quality of the monitor or viewfinder to a quality that is almost the same as when movies are displayed on an [HLG(709)] compatible monitor.\r
Setup,Setup1,Volume Settings,,Sets the volume for movie playback.\r
Setup,Setup1,Delete confirm,,Sets whether [Delete] or [Cancel] is preselected in the delete confirmation screen.\r
,,,"""Delete"" first",[Delete] is selected as the default setting.\r
,,,"""Cancel"" first",[Cancel] is selected as the default setting.\r
Setup,Setup2,Display Quality,,"Sets the display quality. When [High] is set, battery consumption will be higher than when [Standard] is set."\r
,,,High,Displays in high quality.\r
,,,Standard,Displays in standard quality.\r
Setup,Setup2,Pwr Save Start Time,,Sets the time intervals to automatically switch to power save\r
Setup,Setup2,Auto Pwr OFF Temp,Standard,Sets the standard temperature for the camera to turn off. Sets the camera temperature at which the camera turns off automatically\r
,,,High,Sets the temperature at which the camera turns off to higher than [Standard].\r
Setup,Setup2,NTSC/PAL Selector,,\r
Setup,Setup2,Cleaning Mode,,Starts the cleaning mode to clean the image sensor.\r
Setup,Setup2,Touch Operation,On,"Activates the touch operation. Sets whether or not to activate the touch operation of the monitor. 72 73 Touch Panel/Pad Selects whether to activate touch panel operation when shooting with the monitor, or touch pad operation when shooting with the viewfinder."\r
,,,Off,Deactivates the touch operation.\r
Setup,Setup3,Touch Panel/Pad,Touch Panel+Pad,"Activates both the touch panel operations when shooting with the monitor and touch pad operations when shooting with the viewfinder. Selects whether to activate touch panel operation when shooting with the monitor, or touch pad operation when shooting with the viewfinder."\r
,,,Touch Panel Only,Activates only the touch panel operations when shooting with the monitor.\r
,,,Touch Pad Only,Activates only the touch pad operations when shooting with the viewfinder.\r
Setup,Setup3,Touch Pad Settings,Operation in V Orien.,"Sets whether to enable touch pad operations during  vertically oriented viewfinder shooting. You can prevent erroneous operations during vertically oriented shooting caused by your nose, etc. touching the monitor. Adjusts settings related to touch pad operation."\r
,,,Touch Pos. Mode,"Sets whether to move the focusing frame to the position touched on the screen ([Absolute Position]), or move the focusing frame to the desired position based on the direction of dragging and the amount of movement ([Relative Position])."\r
,,,Operation Area,"Sets the area to be used for touch pad operations. Restricting the operational area can prevent erroneous operations caused by your nose, etc. touching the monitor."\r
Setup,Setup3,Demo Mode,On,"The movie playback demonstration starts automatically if the product is not operated for about one minute. Only protected AVCHD movies can be played back.  Set the view mode to [AVCHD View], and protect the movie file with the oldest recorded date and time. Sets demonstration playback of movies to on or off."\r
,,,Off,Does not show the demonstration.\r
Setup,Setup3,TC/UB Settings,TC/UB Disp. Setting,"Sets the display for the counter, time code, and user bit. Sets the time code (TC) and user bit (UB)."\r
,,,TC Preset,Sets the time code.\r
,,,UB Preset,Sets the user bit.\r
,,,TC Format,Sets the recording method for the time code. (Only when [NTSC/PAL Selector] is set to NTSC.)\r
,,,TC Run,Sets the count up format for the time code.\r
,,,TC Make,Sets the recording format for the time code on the recording medium.\r
,,,UB Time Rec,Sets whether or not to record the time as a user bit.\r
,,,DF,Records the time code in Drop Frame*2 format.\r
,,,NDF,Records the time code in Non-Drop Frame format.\r
,,,Rec Run,Sets the stepping mode for the time code to advance only while recording. The time code is recorded sequentially from the last time code of the previous recording.\r
,,,Free Run,"Sets the stepping mode for the time code to advance anytime, regardless of the camera operation."\r
,,,Preset,Records the newly set time code on the recording medium.\r
,,,Regenerate,"Reads the last time code for the previous recording from the recording medium and records the new time code consecutively from the last time code. The time code is read from the memory card in the slot 1 when [Recording Mode] under [Rec. Media Settings] is set to [Simult. ()] or [Simult. (/)]. The time code is read from the memory card to which the movies will be recorded when [Recording Mode] is set to [Standard], [Simult. ()], [Sort(RAW/JPEG)], [Sort(JPEG/RAW)] or [Sort(/)]. The time code advances in [Rec Run] mode regardless of the [TC Run] setting."\r
Setup,Setup3,IR Remote Ctrl,On,Allows infrared remote commander operation. Sets whether to use the infrared remote control.\r
,,,Off,Does not allow infrared remote commander operation.\r
Setup,Setup3,HDMI Settings,,Sets the HDMI settings.\r
,,,HDMI Resolution,Selects the output resolution when the product is connected to an HDMI TV. ([Auto]/[2160p/1080p]/[1080p]/[1080i])\r
,,,24p/60p Output,Selects 1080/24p or 1080/60p as the HDMI output format when [HDMI Resolution] is [1080p]. ([60p]/[24p])\r
,,,HDMI Info. Display,Selects whether to display the shooting information on the connected TV. ([On]/[Off])\r
,,,TC Output,Sets whether to layer time code information on the HDMI output signal. ([On]/[Off])\r
,,,REC Control,Sets whether the camera sends start/stop recording commands to an external recorder/player. ([On]/[Off])\r
,,,CTRL FOR HDMI,Sets whether the product can be operated with the remote control of a “BRAVIA” Sync-compatible TV. ([On]/[Off])\r
Setup,Setup4,4K Output Sel.,Memory Card+HDMI,Simultaneously outputs to the external recording/playback device and records on the camera’s memory card.\r
,,,HDMI Only(30p),Outputs a 4K movie in 30p to the external recording/playback device without recording on the camera’s memory card.\r
,,,HDMI Only(24p),Outputs a 4K movie in 24p to the external recording/playback device without recording on the camera’s memory card.\r
,,,HDMI Only(25p) *,Outputs a 4K movie in 25p to the external recording/playback device without recording on the camera’s memory card.\r
Setup,Setup4,USB Connection,Auto,"Establishes a Mass Storage or MTP connection automatically, depending on the computer or other USB devices to be connected. Sets the USB connection method."\r
,,,Mass Storage,"Establishes a Mass Storage connection between this product, a computer, and other USB devices."\r
,,,MTP,"Establishes an MTP connection between this product, a computer, and other USB devices. The memory card in memory card slot 1 is the connection target."\r
,,,PC Remote,"Uses Imaging Edge to control the product from a computer, including such functions as shooting and storing images on the computer."\r
Setup,Setup4,USB LUN Setting,,Enhances compatibility by limiting USB connection functions.\r
,,,Multi,"Normally, use [Multi]."\r
,,,Single,Set [USB LUN Setting] to [Single] only if you cannot make a connection.\r
Setup,Setup4,USB Power Supply,On,"Power is supplied to the product via a USB cable when the product is connected to a computer, etc. Sets whether to supply power via"\r
,,,Off,"Power is not supplied to the product via a USB cable when the product is connected to a computer, etc. If you use an AC adaptor, power will be supplied even when [Off] is selected."\r
Setup,Setup4,PC Remote Settings,,Controls the PC remote shooting settings.\r
,,,Still Img. Save Dest.,Sets whether to save still images on the computer only or on both the computer and the camera during PC Remote shooting. ([PC Only]/[PC+Camera])\r
,,,RAW+J PC Save Img,Selects the file type for images to be transferred to the computer in PC Remote shooting. ([RAW & JPEG]/[JPEG Only]/[RAW Only])\r
Setup,Setup4,Language,,Selects the language.\r
Setup,Setup5,Date/Time Setup,,"Sets the date, time, and daylight savings."\r
Setup,Setup5,Area Setting,,Sets the location of use.\r
Setup,Setup5,Copyright Info,Write Copyright Info,Sets whether to write copyright information. ([On]/[Off]) Sets copyright information for still images.\r
,,,Set Photographer,Sets the photographer name.\r
,,,Set Copyright,Sets the copyright holder name.\r
,,,Disp. Copyright Info,Displays the current copyright information.\r
Setup,Setup5,Format,,Formats the memory card.\r
Setup,Setup5,File Number,Series,"The product will assign numbers to files sequentially up to 9999"" without resetting."" Sets the method used to assign file numbers."\r
,,,Reset,"The product resets numbers when a file is recorded in a new folder and assigns numbers to files starting with 0001"".  (When the recording folder contains a file a number one higher than the largest number is assigned.)"""\r
Setup,Setup5,Set File Name,,Changes the first 3 characters of the file names for still images.\r
Setup,Setup6,Rec. Media Settings,,Sets the method for recording images to two memory card slots.\r
,,,Prioritize Rec. Media,Selects the memory card slot on which to record. ([Slot 1]/[Slot 2])\r
,,,Recording Mode,"Selects the method for recording an image, such as recording the same image simultaneously to two memory cards or sorting images by type onto the two cards. ([Standard]/[Simult.]/[Sort])"\r
,,,Auto Switch Media,Sets whether the camera automatically starts recording on the other memory card when the card in use becomes full or is missing. ([On]/[Off])\r
Setup,Setup6,Select REC Folder,,Changes the folder selected for storing still images.\r
Setup,Setup6,New Folder,,Creates a new folder for storing still images.\r
Setup,Setup6,Folder Name,Standard Form,The folder name form is as follows: folder number + MSDCF.  Example: 100MSDCF Sets the folder format for still images.\r
,,,Date Form,"The folder name form is as follows: folder number + Y (the last digit)/MM/DD.  Example: 10070405(Folder number: 100, date: 04/05/2017)"\r
Setup,Setup6,Recover Image DB,,\r
Setup,Setup6,Display Media Info,,Displays the remaining recording time\r
Setup,Setup7,Version,,Displays the camera software version.\r
Setup,Setup7,Setting Reset,Camera Settings Reset,Initializes the main shooting settings to the default settings.\r
,,,Initialize,Initializes all the settings to the default settings.\r
Setup,Setup7,Privacy Notice,,Displays the privacy notification screen. (Firmware Ver. 4.02 or later)\r
"<i name=""star""/>My Menu",My Menu1,,,\r
"<i name=""star""/>My Menu",My Setting,Add Item,,\r
"<i name=""star""/>My Menu",My Setting,Sort Item,,\r
"<i name=""star""/>My Menu",My Setting,Delete Item,,Deletes MENU items added to\r
"<i name=""star""/>My Menu",My Setting,Delete Page,,Deletes all the MENU items on a page\r
"<i name=""star""/>My Menu",My Setting,Delete All,,Deletes all the MENU items added to\r
camera_menu_config\r
brand,Sony\r
model,A7III\r
css_file,sonyA7iii\r
icon:camera,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAXCAYAAAD3CERpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGPGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NjhhLCAyMDI0LzAzLzA2LTExOjUyOjA1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuMTIgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI1LTAyLTI1VDEyOjA3OjI3KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNS0wMi0yNlQwOTowNjo0MiswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNS0wMi0yNlQwOTowNjo0MiswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2Y3ZjE5N2YtYTQyZS00OWQzLThlMmQtMjRjZjIyMTgxNTExIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzAzMGVmZWMtYzZiOC1hODRlLThjM2QtYmVmNDMzNDkxYjVlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2Y2YWQ1NzktZDE5Yi00OGY5LTg4YjctNDllOWJhYTc5NzkwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjZhZDU3OS1kMTliLTQ4ZjktODhiNy00OWU5YmFhNzk3OTAiIHN0RXZ0OndoZW49IjIwMjUtMDItMjVUMTI6MDc6MjcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjdmMTk3Zi1hNDJlLTQ5ZDMtOGUyZC0yNGNmMjIxODE1MTEiIHN0RXZ0OndoZW49IjIwMjUtMDItMjZUMDk6MDY6NDIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6694MmAAACqUlEQVRIia2WvWtUURDFf/dtsvlCBEU0hYIRJIWdsbBRsFaCYCMoWggq2lj4j9haiYVoCgsRNFUsLbWwsdG0IpKv3cTd947Fndkdn6t5AQce9+29754zc+7M3E2SaGiTwDxwANgABFS2VgIfmgIhqemzLOmHpK6kjqSepJ+StiVtSLrRFKsp4SUj6EjaUbZSUt/GrqTvkg7/L9IpSZuSKv3bupIeNyEtdlF/HLgFjAHJ5qpwln1g255x4BpwZrcjTZZIi8BDSw4BBbAGLACHDHTK9pRAz5xo2yibr4AOsAps2vy4ff8eeAR8TZIWgBUj8miSRdcKjni29mxMATSSuwN1K8yR4wVw2cDbBuBk6yZfFZ5XwEXgJHCUXEJ3DawP7ARH3FqGWQITwBySHoQsrEJW+ntP0pak65LSX5JjUtJLK59S0rrtq+N0Jc0XFrZLGqVMtlYAd4CnNj/KtoErwOcQnR+Xq+SYKmpARRg3yef3Alj6C1m0Erhge6ZrQUT8ViyZGKGAGQN4YpE0sW/Aa6AbsNwGSVnUFlN479jal4aEbksMExCGR+QSV657JHY5Jmzc2iPpGjlbqzDnmCUWaapt8mhb9vvIHklPMUykiDkgH9UGo1eJ3K2aWgLuB9xYDQO+erlEr0pykd8DTjQkXQRmGUYan4GNksCtTU6I/cAz4OAuhOeA5+aoBxG7mXMkz9560dfP9TS58M+S/0FE2wfcBN6R1SnJyZT4vRr8ImGMP3WPWefR9oxshVxCy8An4DxZ0tK+m7BxhmFFVEY2uAictBcWPVIv5op8rfVtbg64XYskRtSuKRG7XB9oJ0nHgI/ks4g918fK1srgZBmUiTXeMmC3+nX3Brjql/gsuWG7vA7kIDPkDjUdVBll0+QrMTZ8x1wF3gLdX9+0RtkZdOa+AAAAAElFTkSuQmCC\r
icon:star,iVBORw0KGgoAAAANSUhEUgAAAKYAAACfCAYAAABz/aISAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGPGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NjhhLCAyMDI0LzAzLzA2LTExOjUyOjA1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuMTIgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI1LTAyLTI1VDEyOjA3OjI3KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNS0wMi0yNlQwOTozMDowMyswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNS0wMi0yNlQwOTozMDowMyswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjUwZGRlMzktNGYyMy00YjRlLWE0MjMtOWQ2NDMwYzVkODk3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NWQzYzRlMjctYWFlOC0xZjQwLTg0NWEtMzY3YjcxZmU0MDliIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NGE2NWU2MjEtMjVjOC00YzZmLTkzNDctYWNhZmYyNjVlYTdlIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0YTY1ZTYyMS0yNWM4LTRjNmYtOTM0Ny1hY2FmZjI2NWVhN2UiIHN0RXZ0OndoZW49IjIwMjUtMDItMjVUMTI6MDc6MjcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNTBkZGUzOS00ZjIzLTRiNGUtYTQyMy05ZDY0MzBjNWQ4OTciIHN0RXZ0OndoZW49IjIwMjUtMDItMjZUMDk6MzA6MDMrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7alw0ZAAA3AElEQVR4nN19/YtcR5bl6a5EBTIlJKhGogU2bdowyxgadmD/+v19YYYdmGGGNniwaYGMhAskVFhQIgvvD5Gn4ryT5973siTPtn0hyZfx4jtu3O+I/N3PP/98BmCHAfvD8x4T9Hd6h5W09HvfpCvs5NnL7FD3N5VJdXSQ+pnaTPVvmaNqrKmd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\r
`,ff=`level0,level1,level2,level3,level4,level5,level6,level7,Comment/help
<i name="star"/>My Menu,My Menu 1,,,,,,,Foo
<i name="star"/>My Menu,My Menu 2,,,,,,
<i name="star"/>My Menu,My Menu 3,,,,,,
<i name="star"/>My Menu,My Menu Setting,Add Item,,,,,
<i name="star"/>My Menu,My Menu Setting,Sort Item,,,,,
<i name="star"/>My Menu,My Menu Setting,Delete Item,,,,,
<i name="star"/>My Menu,My Menu Setting,Delete Page,,,,,
<i name="star"/>My Menu,My Menu Setting,Delete All,,,,,
<i name="star"/>My Menu,My Menu Setting,Display From My Menu,On,,,,
<i name="star"/>My Menu,My Menu Setting,Display From My Menu,Off,,,,
<i name="camera"/>Shooting,Image Quality,JPEG/HEIF Switch,JPEG,,,,
,,,HEIF(4:2:0),,,,
,,,HEIF(4:2:2),,,,
,,Image Quality Settings,File Format,RAW,,,
,,,,RAW & HEIF,,,
,,,,HEIF,,,
,,,RAW File Type,Uncompressed,,,
,,,,Lossless Comp (L),,,
,,,,Lossless Comp (M),,,
,,,,Lossless Comp (S),,,
<i name="camera"/>Shooting,Image Quality,Image Quality Settings,RAW File Type,Compressed,,,
<i name="camera"/>Shooting,Image Quality,Image Quality Settings,HEIF Quality,?,,,
<i name="camera"/>Shooting,Image Quality,Image Quality Settings,HEIG Image Size,?,,,
<i name="camera"/>Shooting,Image Quality,Image Quality Settings,Rec. Media Settings,[link to rec media settings?],,,
<i name="camera"/>Shooting,Image Quality,Aspect Ratio,3:2,,,,
<i name="camera"/>Shooting,Image Quality,Aspect Ratio,4:3,,,,
<i name="camera"/>Shooting,Image Quality,Aspect Ratio,16:9,,,,
<i name="camera"/>Shooting,Image Quality,Aspect Ratio,1:1,,,,
<i name="camera"/>Shooting,Image Quality,File Format,XVAC HS 4K,,,,
<i name="camera"/>Shooting,Image Quality,File Format,XVAC S 4K,,,,
<i name="camera"/>Shooting,Image Quality,File Format,XVAC S HD,,,,
<i name="camera"/>Shooting,Image Quality,File Format,XVAC S-I 4K,,,,
<i name="camera"/>Shooting,Image Quality,File Format,XVAC S-I HD,,,,
<i name="camera"/>Shooting,Image Quality,Movie Settings,Rec Frame Rate,60p,,,
<i name="camera"/>Shooting,Image Quality,Movie Settings,Rec Frame Rate,30p,,,
<i name="camera"/>Shooting,Image Quality,Movie Settings,Rec Frame Rate,24p,,,
<i name="camera"/>Shooting,Image Quality,Movie Settings,Rec Frame Rate,120p,,,
<i name="camera"/>Shooting,Image Quality,Movie Settings,Recording Setting,50M 4:2:2 10bit,,,
<i name="camera"/>Shooting,Image Quality,Movie Settings,Recording Setting,50M 4:2:0 8bit,,,
<i name="camera"/>Shooting,Image Quality,Movie Settings,Recording Setting,25M 4:2:0 8bit,,,
<i name="camera"/>Shooting,Image Quality,APS-C S35 <i name="camera"/>Shooting,On,,,,
<i name="camera"/>Shooting,Image Quality,APS-C S35 <i name="camera"/>Shooting,Auto,,,,
<i name="camera"/>Shooting,Image Quality,APS-C S35 <i name="camera"/>Shooting,Off,,,,
<i name="camera"/>Shooting,Image Quality,Long Exposure NR,On,,,,
<i name="camera"/>Shooting,Image Quality,Long Exposure NR,Off,,,,
<i name="camera"/>Shooting,Image Quality,High ISO NR,Normal,,,,
<i name="camera"/>Shooting,Image Quality,High ISO NR,Low,,,,
<i name="camera"/>Shooting,Image Quality,High ISO NR,Off,,,,
<i name="camera"/>Shooting,Image Quality,HLG Still Image,On,,,,
<i name="camera"/>Shooting,Image Quality,HLG Still Image,Off,,,,
<i name="camera"/>Shooting,Image Quality,Color Space,sRGB,,,,
<i name="camera"/>Shooting,Image Quality,Color Space,AdobeRGB,,,,
<i name="camera"/>Shooting,Image Quality,Lens Compensation,Shading Comp.,Auto,,,
<i name="camera"/>Shooting,Image Quality,Lens Compensation,Shading Comp.,Off,,,
<i name="camera"/>Shooting,Image Quality,Lens Compensation,Chromatic Aberration Comp.,Auto,,,
<i name="camera"/>Shooting,Image Quality,Lens Compensation,Chromatic Aberration Comp.,Off,,,
<i name="camera"/>Shooting,Image Quality,Lens Compensation,Distortion Comp.,Auto,,,
<i name="camera"/>Shooting,Image Quality,Lens Compensation,Distortion Comp.,Off,,,
<i name="camera"/>Shooting,Media,Format,Slot 1,,,,,Foo
<i name="camera"/>Shooting,Media,Format,Slot 2,,,,
<i name="camera"/>Shooting,Media,Rec. Media Settings,(still) Recording Media,Slot 1,,,
<i name="camera"/>Shooting,Media,Rec. Media Settings,(still) Recording Media,Slot 2,,,
<i name="camera"/>Shooting,Media,Rec. Media Settings,(still) Recording Media,Simult. Recording,,,
<i name="camera"/>Shooting,Media,Rec. Media Settings,(still) Recording Media,Sort Recording,,,
<i name="camera"/>Shooting,Media,Rec. Media Settings,(video) Recording Media,Slot 1,,,
<i name="camera"/>Shooting,Media,Rec. Media Settings,(video) Recording Media,Slot 2,,,
<i name="camera"/>Shooting,Media,Rec. Media Settings,(video) Recording Media,Simult. Recording,,,
<i name="camera"/>Shooting,Media,Rec. Media Settings,Auto Switch Media,On,,,
<i name="camera"/>Shooting,Media,Rec. Media Settings,Auto Switch Media,Off,,,
<i name="camera"/>Shooting,Media,Recover Image DB,Slot 1,,,,
<i name="camera"/>Shooting,Media,Recover Image DB,Slot 2,,,,
<i name="camera"/>Shooting,Media,Display Media Info.,Slot 1,,,,
<i name="camera"/>Shooting,Media,Display Media Info.,Slot 2,,,,
<i name="camera"/>Shooting,File,File/Folder Settings,File Number,Series,,,
<i name="camera"/>Shooting,File,File/Folder Settings,File Number,Reset,,,
<i name="camera"/>Shooting,File,File/Folder Settings,Forced File Number Reset,,,,
<i name="camera"/>Shooting,File,File/Folder Settings,Set File Name,,,,
<i name="camera"/>Shooting,File,File/Folder Settings,Folder Name,Standard Form,,,
<i name="camera"/>Shooting,File,File/Folder Settings,Folder Name,Date Form,,,
<i name="camera"/>Shooting,File,Select REC Folder,,,,,
<i name="camera"/>Shooting,File,Create New Folder,,,,,
<i name="camera"/>Shooting,File,IPTC Information,Write IPTC Info,Off,?,,
<i name="camera"/>Shooting,File,IPTC Information,Register IPTC Info,Slot 1,,,
<i name="camera"/>Shooting,File,IPTC Information,Register IPTC Info,Slot 2,,,
<i name="camera"/>Shooting,File,Copyright Info,Write Copyright Info,On,,,
<i name="camera"/>Shooting,File,Copyright Info,Write Copyright Info,Off,,,
<i name="camera"/>Shooting,File,Copyright Info,Set Photographer,,,,
<i name="camera"/>Shooting,File,Copyright Info,Set Copyright,,,,
<i name="camera"/>Shooting,File,Copyright Info,Disp. Copyright Info,Copyright Holder Name,,,
<i name="camera"/>Shooting,File,Copyright Info,Disp. Copyright Info,Photographer Name,,,
<i name="camera"/>Shooting,File,Write Serial Number,On,,,,
<i name="camera"/>Shooting,File,Write Serial Number,Off,,,,
<i name="camera"/>Shooting,Shooting Mode,Recall Camera Setting,?,,,,
<i name="camera"/>Shooting,Shooting Mode,Camera Set. Memory,?,,,,
<i name="camera"/>Shooting,Shooting Mode,Memory/Recall Media,Slot 1,,,,
<i name="camera"/>Shooting,Shooting Mode,Memory/Recall Media,Slot 2,,,,
<i name="camera"/>Shooting,Shooting Mode,Reg. Custom Shoot Set,Recall Custom hold 1,,,,
<i name="camera"/>Shooting,Shooting Mode,Reg. Custom Shoot Set,Recall Custom hold 2,,,,
<i name="camera"/>Shooting,Shooting Mode,Reg. Custom Shoot Set,Recall Custom hold 3,,,,
<i name="camera"/>Shooting,USB Streaming,Res/Frame Rate,4K(2160p) 15,,,,
<i name="camera"/>Shooting,USB Streaming,Res/Frame Rate,HD(1080p) 60p,,,,
<i name="camera"/>Shooting,USB Streaming,Res/Frame Rate,HD(1080p) 30p,,,,
<i name="camera"/>Shooting,USB Streaming,Res/Frame Rate,HD(720p) 30p,,,,
<i name="camera"/>Shooting,USB Streaming,Movie Recording,Enable,,,,
<i name="camera"/>Shooting,USB Streaming,Movie Recording,Disable,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single <i name="camera"/>Shooting,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Continuous Shooting: Lo,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Continuous Shooting: Mid,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Continuous Shooting: Hi,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Continuous Shooting: Hi+,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Self-timer(Single): 2 Sec,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Self-timer(Single): 5 Sec,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Self-timer(Single): 10 Sec,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Self-timer(Cont.): 2 Sec. 5 Img.,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Self-timer(Cont.): 2 Sec. 3 Img.,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Self-timer(Cont.): 5 Sec. 5 Img.,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Self-timer(Cont.): 5 Sec. 3 Img.,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Self-timer(Cont.): 10 Sec. 5 Img.,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Self-timer(Cont.): 10 Sec. 3 Img.,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 3.0EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 3.0EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 2.0EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 2.0EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 1.0EV 9 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 1.0EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 1.0EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 0.7EV 9 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 0.7EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 0.7EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 0.5EV 9 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 0.5EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 0.5EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 0.3EV 9 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 0.3EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Cont. Bracket: 0.3EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 3.0EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 3.0EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 2.0EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 2.0EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 1.0EV 9 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 1.0EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 1.0EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 0.7EV 9 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 0.7EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 0.7EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 0.5EV 9 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 0.5EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 0.5EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 0.3EV 9 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 0.3EV 5 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,Single Bracket: 0.3EV 3 Image,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,White Balance Bracket: Hi,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,White Balance Bracket: Lo,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,DRO Bracket: Hi,,,,
<i name="camera"/>Shooting,Drive Mode,Drive Mode,DRO Bracket: Lo,,,,
<i name="camera"/>Shooting,Drive Mode,Bracket Settings,Selftimer during Bracket,Off,,,
<i name="camera"/>Shooting,Drive Mode,Bracket Settings,Selftimer during Bracket,2 Sec,,,
<i name="camera"/>Shooting,Drive Mode,Bracket Settings,Selftimer during Bracket,5 Sec,,,
<i name="camera"/>Shooting,Drive Mode,Bracket Settings,Selftimer during Bracket,10 Sec,,,
<i name="camera"/>Shooting,Drive Mode,Bracket Settings,Bracket order,0 -> - -> +,,,
<i name="camera"/>Shooting,Drive Mode,Bracket Settings,Bracket order,- -> 0 -> +,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,Interval <i name="camera"/>Shooting,Off,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,Interval <i name="camera"/>Shooting,On,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,Shooting Start Time,0s - 99min 59s,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,Shooting Interval,1 - 60,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,Number of Shots,0 - 9999,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,AE Tracking Sensitivity,High,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,AE Tracking Sensitivity,Mid,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,AE Tracking Sensitivity,Low,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,Shutter Type in Interval,Mechanical Shutter,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,Shutter Type in Interval,Electronic Shutter,,,
<i name="camera"/>Shooting,Drive Mode,Interval Shoot Func.,Shoot Interval Priority,Off,?,,
<i name="camera"/>Shooting,Shutter / Silent,Silent Mode Settings,Silent Mode,On,,,
<i name="camera"/>Shooting,Shutter / Silent,Silent Mode Settings,Silent Mode,Off,,,
<i name="camera"/>Shooting,Shutter / Silent,Silent Mode Settings,Target Function Settings,Aperture Drive in AF,Not Target,,
<i name="camera"/>Shooting,Shutter / Silent,Silent Mode Settings,Target Function Settings,Aperture Drive in AF,Standard,,
<i name="camera"/>Shooting,Shutter / Silent,Silent Mode Settings,Target Function Settings,Aperture Drive in AF,Silent Priority,,
<i name="camera"/>Shooting,Shutter / Silent,Silent Mode Settings,Target Function Settings,Shutter When Pwr OFF,Not Target,,
<i name="camera"/>Shooting,Shutter / Silent,Silent Mode Settings,Target Function Settings,Shutter When Pwr OFF,Off,,
<i name="camera"/>Shooting,Shutter / Silent,Silent Mode Settings,Target Function Settings,Auto Pixel Mapping,Not Target,,
<i name="camera"/>Shooting,Shutter / Silent,Silent Mode Settings,Target Function Settings,Auto Pixel Mapping,Off,,
<i name="camera"/>Shooting,Shutter / Silent,Shutter Type,Mechanical Shutter,,,,
<i name="camera"/>Shooting,Shutter / Silent,Shutter Type,Electronic Shutter,,,,
<i name="camera"/>Shooting,Shutter / Silent,e-Front Curtain Shut.,?,,,,
<i name="camera"/>Shooting,Shutter / Silent,Release w/o Lens,Enable,,,,
<i name="camera"/>Shooting,Shutter / Silent,Release w/o Lens,Disable,,,,
<i name="camera"/>Shooting,Shutter / Silent,Release w/o Card,Enable,,,,
<i name="camera"/>Shooting,Shutter / Silent,Release w/o Card,Disable,,,,
<i name="camera"/>Shooting,Shutter / Silent,Anti-flicker Set.,Anti-flicker Shoot.,Off,?,,
<i name="camera"/>Shooting,Shutter / Silent,Anti-flicker Set.,Var. Shutter,On,,,
<i name="camera"/>Shooting,Shutter / Silent,Anti-flicker Set.,Var. Shutter,Off,,,
<i name="camera"/>Shooting,Shutter / Silent,Anti-flicker Set.,Var. Shutter Set.,?,,,
<i name="camera"/>Shooting,Image Stabilization,SteadyShot,On,,,,
<i name="camera"/>Shooting,Image Stabilization,SteadyShot,Off,,,,
<i name="camera"/>Shooting,Image Stabilization,SteadyShot Adjust,Manual,?,,,
<i name="camera"/>Shooting,Image Stabilization,Focal Length,8-1000mm,,,,
<i name="camera"/>Shooting,Zoom,Zoom,?,,,,
<i name="camera"/>Shooting,Zoom,Zoom Range,Optical zoom only,?,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed STBY,1 (Slow),,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed STBY,2,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed STBY,3,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed STBY,4,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed STBY,5,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed STBY,6,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed STBY,7,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed STBY,8 (Fast),,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed REC,1 (Slow),,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed REC,2,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed REC,3,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed REC,4,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed REC,5,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed REC,6,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed REC,7,,,
<i name="camera"/>Shooting,Zoom,Custom Key Z. Speed,Fixed Speed REC,8 (Fast),,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Speed Type,Variable,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Speed Type,Fix,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed STBY,1 (Slow),,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed STBY,2,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed STBY,3,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed STBY,4,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed STBY,5,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed STBY,6,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed STBY,7,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed STBY,8 (Fast),,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed REC,1 (Slow),,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed REC,2,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed REC,3,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed REC,4,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed REC,5,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed REC,6,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed REC,7,,,
<i name="camera"/>Shooting,Zoom,Remote Zoom Speed,Fixed Speed REC,8 (Fast),,,
<i name="camera"/>Shooting,Shooting Display,Grid Line Display,On,,,,
<i name="camera"/>Shooting,Shooting Display,Grid Line Display,Off,,,,
<i name="camera"/>Shooting,Shooting Display,Grid Line Type,Rule of 3rds Grid,,,,
<i name="camera"/>Shooting,Shooting Display,Grid Line Type,Square Grid,,,,
<i name="camera"/>Shooting,Shooting Display,Grid Line Type,Diag. + Square Grid,,,,
<i name="camera"/>Shooting,Shooting Display,Live View Display Set.,Live View Display,Setting Effect ON,,,
<i name="camera"/>Shooting,Shooting Display,Live View Display Set.,Live View Display,Setting Effect OFF,,,
<i name="camera"/>Shooting,Shooting Display,Live View Display Set.,Exposure Effect,Exposure Set. & flash,,,
<i name="camera"/>Shooting,Shooting Display,Live View Display Set.,Exposure Effect,Exposure Setting Only,,,
<i name="camera"/>Shooting,Shooting Display,Live View Display Set.,Frame Rate Low Limit,On,,,
<i name="camera"/>Shooting,Shooting Display,Live View Display Set.,Frame Rate Low Limit,Off,,,
Exposure/Color,Exposure,ISO,ISO 50,,,,
Exposure/Color,Exposure,ISO,ISO 64,,,,
Exposure/Color,Exposure,ISO,ISO 80,,,,
Exposure/Color,Exposure,ISO,ISO 100,,,,
Exposure/Color,Exposure,ISO,ISO 125,,,,
Exposure/Color,Exposure,ISO,ISO 160,,,,
Exposure/Color,Exposure,ISO,ISO 200,,,,
Exposure/Color,Exposure,ISO,ISO 250,,,,
Exposure/Color,Exposure,ISO,ISO 400,,,,
Exposure/Color,Exposure,ISO,ISO 500,,,,
Exposure/Color,Exposure,ISO,ISO 640,,,,
Exposure/Color,Exposure,ISO,ISO 1000,,,,
Exposure/Color,Exposure,ISO,ISO 1250,,,,
Exposure/Color,Exposure,ISO,ISO 1600,,,,
Exposure/Color,Exposure,ISO,ISO 2500,,,,
Exposure/Color,Exposure,ISO,ISO 3200,,,,
Exposure/Color,Exposure,ISO,ISO 4000,,,,
Exposure/Color,Exposure,ISO,ISO 5000,,,,
Exposure/Color,Exposure,ISO,ISO 6400,,,,
Exposure/Color,Exposure,ISO,ISO 8000,,,,
Exposure/Color,Exposure,ISO,ISO 10000,,,,
Exposure/Color,Exposure,ISO,ISO 12800,,,,
Exposure/Color,Exposure,ISO Range Limit,50 - 20480,,,,
Exposure/Color,Exposure,ISO AUTO Min. SS,?,,,,
Exposure/Color,Exposure Comp.,Exposure Comp.,-3 - +3,,,,
Exposure/Color,Exposure Comp.,Exposure step,0.5EV,,,,
Exposure/Color,Exposure Comp.,Exposure step,0.3EV,,,,
Exposure/Color,Exposure Comp.,Exposure Std. Adjust,,,,,
Exposure/Color,Metering,Metering Mode,Multi,,,,
Exposure/Color,Metering,Metering Mode,Center,,,,
Exposure/Color,Metering,Metering Mode,Spot: Standard,,,,
Exposure/Color,Metering,Metering Mode,Entire Screen Avg.,,,,
Exposure/Color,Metering,Metering Mode,Highlight,,,,
Exposure/Color,Metering,Face Priority in Multi Metering,Off,?,,,
Exposure/Color,Metering,Spot Metering Point,Center,,,,
Exposure/Color,Metering,Spot Metering Point,Focus Point Link,,,,
Exposure/Color,Metering,AEL w/ Shutter,Auto,,,,
Exposure/Color,Metering,AEL w/ Shutter,On,,,,
Exposure/Color,Metering,AEL w/ Shutter,Off,,,,
Exposure/Color,Flash,Flash Mode,Flash Off,?,,,
Exposure/Color,Flash,Flash Comp.,-3 - +3,,,,
Exposure/Color,Flash,Exp.comp.set,Ambient&flash,,,,
Exposure/Color,Flash,Exp.comp.set,Ambient only,,,,
Exposure/Color,Flash,Wireless Flash,On,,,,
Exposure/Color,Flash,Wireless Flash,Off,?,,,
Exposure/Color,Flash,Red Eye Reduction,On,,,,
Exposure/Color,Flash,Red Eye Reduction,Off,,,,
Exposure/Color,Flash,External Flash Set.,Ext. Flash Firing Set.,?,,,
Exposure/Color,Flash,External Flash Set.,Ext. Flash Cust. Set,?,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,Shutter Speed Range,Maximum Speed,"Sync Speed-1/8000-30""",,
Exposure/Color,Flash,Reg. Flash Shooting Set,Shutter Speed Range,Minimum Speed,"Sync Speed-1/8000-30""",,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO Auto,?,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 50,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 64,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 80,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 125,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 160,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 200,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 250,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 320,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 400,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 500,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 640,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 800,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 1000,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 1250,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 1600,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 2000,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 2500,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 3200,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 4000,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 5000,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 6400,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 8000,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 10000,,,
Exposure/Color,Flash,Reg. Flash Shooting Set,ISO,ISO 12800,,,
Exposure/Color,White Balance,White Balance,Auto,,,,
Exposure/Color,White Balance,White Balance,Daylight,,,,
Exposure/Color,White Balance,White Balance,Shade,,,,
Exposure/Color,White Balance,White Balance,Cloudy,,,,
Exposure/Color,White Balance,White Balance,Incandescent,,,,
Exposure/Color,White Balance,White Balance,"Fluor., Warm White",,,,
Exposure/Color,White Balance,White Balance,"Fluor., Cool White",,,,
Exposure/Color,White Balance,White Balance,"Fluor., Day White",,,,
Exposure/Color,White Balance,White Balance,"Fluor., Daylight",,,,
Exposure/Color,White Balance,White Balance,Flash,,,,
Exposure/Color,White Balance,White Balance,Underwater Auto,,,,
Exposure/Color,White Balance,White Balance,C.Temp./Filter,,,,
Exposure/Color,White Balance,White Balance,Custom 1,,,,
Exposure/Color,White Balance,White Balance,Custom 2,,,,
Exposure/Color,White Balance,White Balance,Custom 3,,,,
Exposure/Color,White Balance,Priority Set in AWB,Standard,,,,
Exposure/Color,White Balance,Priority Set in AWB,Ambience,,,,
Exposure/Color,White Balance,Priority Set in AWB,White,,,,
Exposure/Color,White Balance,Shutter AWB Lock,Shutter Half Press,,,,
Exposure/Color,White Balance,Shutter AWB Lock,Cont. <i name="camera"/>Shooting,,,,
Exposure/Color,White Balance,Shutter AWB Lock,Off,,,,
Exposure/Color,Color/Tone,D-Range Optimizer,Off,,,,
Exposure/Color,Color/Tone,D-Range Optimizer,Auto,,,,
Exposure/Color,Color/Tone,D-Range Optimizer,Lv1,,,,
Exposure/Color,Color/Tone,D-Range Optimizer,Lv2,,,,
Exposure/Color,Color/Tone,D-Range Optimizer,Lv3,,,,
Exposure/Color,Color/Tone,D-Range Optimizer,Lv4,,,,
Exposure/Color,Color/Tone,D-Range Optimizer,Lv5,,,,
Exposure/Color,Color/Tone,Creative Look,ST,,,,
Exposure/Color,Color/Tone,Creative Look,PT,,,,
Exposure/Color,Color/Tone,Creative Look,NT,,,,
Exposure/Color,Color/Tone,Creative Look,VV,,,,
Exposure/Color,Color/Tone,Creative Look,VV2,,,,
Exposure/Color,Color/Tone,Creative Look,FL,,,,
Exposure/Color,Color/Tone,Creative Look,IN,,,,
Exposure/Color,Color/Tone,Creative Look,SH,,,,
Exposure/Color,Color/Tone,Creative Look,BW,,,,
Exposure/Color,Color/Tone,Creative Look,SE,,,,
Exposure/Color,Color/Tone,Creative Look,ST,,,,
Exposure/Color,Color/Tone,Creative Look,FL,,,,
Exposure/Color,Color/Tone,Creative Look,IN,,,,
Exposure/Color,Color/Tone,Creative Look,SH,,,,
Exposure/Color,Color/Tone,Creative Look,VV2,,,,
Exposure/Color,Color/Tone,Creative Look,BW,,,,
Exposure/Color,Color/Tone,Picture Profile,Off,,,,
Exposure/Color,Color/Tone,Picture Profile,PP1,,,,
Exposure/Color,Color/Tone,Picture Profile,PP2,,,,
Exposure/Color,Color/Tone,Picture Profile,PP3,,,,
Exposure/Color,Color/Tone,Picture Profile,PP4,,,,
Exposure/Color,Color/Tone,Picture Profile,PP5,,,,
Exposure/Color,Color/Tone,Picture Profile,PP6,,,,
Exposure/Color,Color/Tone,Picture Profile,PP7,,,,
Exposure/Color,Color/Tone,Picture Profile,PP8,,,,
Exposure/Color,Color/Tone,Picture Profile,PP9,,,,
Exposure/Color,Color/Tone,Picture Profile,PP10,,,,
Exposure/Color,Color/Tone,Picture Profile,PP11,,,,
Exposure/Color,Color/Tone,Soft Skin Effect,On,,,,
Exposure/Color,Color/Tone,Soft Skin Effect,Off,,,,
Exposure/Color,Zebra Display,Zebra Display,On,,,,
Exposure/Color,Zebra Display,Zebra Display,Off,,,,
Exposure/Color,Zebra Display,Zebra Level,70,,,,
Exposure/Color,Zebra Display,Zebra Level,80,,,,
Exposure/Color,Zebra Display,Zebra Level,85,,,,
Exposure/Color,Zebra Display,Zebra Level,90,,,,
Exposure/Color,Zebra Display,Zebra Level,95,,,,
Exposure/Color,Zebra Display,Zebra Level,100,,,,
Exposure/Color,Zebra Display,Zebra Level,100+,,,,
Exposure/Color,Zebra Display,Zebra Level,Custom 1,,,,
Exposure/Color,Zebra Display,Zebra Level,Custom 2,,,,
Focus,AF/MF,Focus Mode,?,,,,
Focus,AF/MF,Priority Set in AF-S,AF,,,,
Focus,AF/MF,Priority Set in AF-S,Release,,,,
Focus,AF/MF,Priority Set in AF-S,Balanced Emphasis,,,,
Focus,AF/MF,Priority Set in AF-C,AF,,,,
Focus,AF/MF,Priority Set in AF-C,Release,,,,
Focus,AF/MF,Priority Set in AF-C,Balanced Emphasis,,,,
Focus,AF/MF,AF Tracking Sensitivity,?,,,,
Focus,AF/MF,AF Illuminator,On,,,,
Focus,AF/MF,AF Illuminator,Off,,,,
Focus,AF/MF,Aperture Drive in AF,Focus Priority,,,,
Focus,AF/MF,Aperture Drive in AF,Standard,,,,
Focus,AF/MF,Aperture Drive in AF,Silent Priority,,,,
Focus,AF/MF,AF w/ Shutter,On,,,,
Focus,AF/MF,AF w/ Shutter,Off,,,,
Focus,AF/MF,Pre-AF,?,,,,
Focus,Focus Area,Focus Area,Wide,,,,
Focus,Focus Area,Focus Area,Zone,,,,
Focus,Focus Area,Focus Area,Center Fix,,,,
Focus,Focus Area,Focus Area,Spot: S,,,,
Focus,Focus Area,Focus Area,Spot: M,,,,
Focus,Focus Area,Focus Area,Spot: L,,,,
Focus,Focus Area,Focus Area,Expand Spot,,,,
Focus,Focus Area,Focus Area,Tracking: Wide,,,,
Focus,Focus Area,Focus Area,Tracking: Zone,,,,
Focus,Focus Area,Focus Area,Tracking: Center Fix,,,,
Focus,Focus Area,Focus Area,Tracking: Spot S,,,,
Focus,Focus Area,Focus Area,Tracking: Spot M,,,,
Focus,Focus Area,Focus Area,Tracking: Spot L,,,,
Focus,Focus Area,Focus Area,Tracking: Expand Spot,,,,
Focus,Focus Area,Focus Area Limit,Wide,,,,
Focus,Focus Area,Focus Area Limit,Zone,,,,
Focus,Focus Area,Focus Area Limit,Center Fix,,,,
Focus,Focus Area,Focus Area Limit,Spot: S,,,,
Focus,Focus Area,Focus Area Limit,Spot: M,,,,
Focus,Focus Area,Focus Area Limit,Spot: L,,,,
Focus,Focus Area,Focus Area Limit,Expand Spot,,,,
Focus,Focus Area,Focus Area Limit,Tracking: Wide,,,,
Focus,Focus Area,Focus Area Limit,Tracking: Zone,,,,
Focus,Focus Area,Focus Area Limit,Tracking: Center Fix,,,,
Focus,Focus Area,Focus Area Limit,Tracking: Spot S,,,,
Focus,Focus Area,Focus Area Limit,Tracking: Spot M,,,,
Focus,Focus Area,Focus Area Limit,Tracking: Spot L,,,,
Focus,Focus Area,Focus Area Limit,Tracking: Expand Slot,,,,
Focus,Focus Area,Switch V/H AF Area,Off,,,,
Focus,Focus Area,Switch V/H AF Area,AF Point Only,,,,
Focus,Focus Area,Switch V/H AF Area,AF Point + AF Area,,,,
Focus,Focus Area,Focus Area Color,White,,,,
Focus,Focus Area,Focus Area Color,Red,,,,
Focus,Focus Area,AF Area Registration,On,,,,
Focus,Focus Area,AF Area Registration,Off,,,,
Focus,Focus Area,Del. Regist. AF Area,,,,,
Focus,Focus Area,AF Area Auto Clear,On,,,,
Focus,Focus Area,AF Area Auto Clear,Off,,,,
Focus,Focus Area,Area Disp. dur Tracking,On,,,,
Focus,Focus Area,Area Disp. dur Tracking,Off,,,,
Focus,Focus Area,AF-C Area Display,On,,,,
Focus,Focus Area,AF-C Area Display,Off,,,,
Focus,Focus Area,Phase Detect Area,On,?,,,
Focus,Focus Area,Phase Detect Area,Off,,,,
Focus,Focus Area,Circ. of Focus Point,Does Not Circulate,,,,
Focus,Focus Area,Circ. of Focus Point,Circulate,,,,
Focus,Focus Area,AF Frame Move Amt,Standard,,,,
Focus,Focus Area,AF Frame Move Amt,Large,,,,
Focus,Face/Eye AF,Face/Eye Prior. in AF,On,,,,
Focus,Face/Eye AF,Face/Eye Prior. in AF,Off,,,,
Focus,Face/Eye AF,Face/Eye Subject,Human,,,,
Focus,Face/Eye AF,Face/Eye Subject,Animal,,,,
Focus,Face/Eye AF,Face/Eye Subject,Bird,,,,
Focus,Face/Eye AF,Subject Sel. Setting,Human,,,,
Focus,Face/Eye AF,Subject Sel. Setting,Animal,,,,
Focus,Face/Eye AF,Subject Sel. Setting,Bird,,,,
Focus,Face/Eye AF,Right/Left Eye Select,Auto,,,,
Focus,Face/Eye AF,Right/Left Eye Select,Right,,,,
Focus,Face/Eye AF,Right/Left Eye Select,Left,,,,
Focus,Face/Eye AF,Face/Eye Frame Disp.,On,,,,
Focus,Face/Eye AF,Face/Eye Frame Disp.,Off,,,,
Focus,Face/Eye AF,Face Memory,New Registration,,,,
Focus,Face/Eye AF,Face Memory,Order Exchanging,,,,
Focus,Face/Eye AF,Face Memory,Delete,,,,
Focus,Face/Eye AF,Face Memory,Delete All,,,,
Focus,Face/Eye AF,Regist. Faces Priority,On,,,,
Focus,Face/Eye AF,Regist. Faces Priority,Off,,,,
Focus,Focus Assistant,Auto Magnifier in MF,On,,,,
Focus,Focus Assistant,Auto Magnifier in MF,Off,,,,
Focus,Focus Assistant,Focus Magnifier,,,,,
Focus,Focus Assistant,Focus Magnif. Time,2 Sec,,,,
Focus,Focus Assistant,Focus Magnif. Time,5 Sec,,,,
Focus,Focus Assistant,Focus Magnif. Time,No Limit,,,,
Focus,Focus Assistant,Initial Focus Mag.,x1.0,,,,
Focus,Focus Assistant,Initial Focus Mag.,x5.5,,,,
Focus,Focus Assistant,AF in Focus Mag.,On,,,,
Focus,Focus Assistant,AF in Focus Mag.,Off,,,,
Focus,Peaking Display,Peaking Display,On,,,,
Focus,Peaking Display,Peaking Display,Off,,,,
Focus,Peaking Display,Peaking Level,High,,,,
Focus,Peaking Display,Peaking Level,Mid,,,,
Focus,Peaking Display,Peaking Level,Low,,,,
Focus,Peaking Display,Peaking Color,Red,,,,
Focus,Peaking Display,Peaking Color,Yellow,,,,
Focus,Peaking Display,Peaking Color,Blue,,,,
Focus,Peaking Display,Peaking Color,White,,,,
Playback,Playback Target,Select Playback Media,Slot 1,,,,
Playback,Playback Target,Select Playback Media,Slot 2,,,,
Playback,Playback Target,View Mode,Date View,,,,
Playback,Playback Target,View Mode,Folder View(Still),,,,
Playback,Playback Target,View Mode,Movie View,,,,
Playback,Magnification,Enlarge Image,,,,,
Playback,Magnification,Enlarge Initial Mag.,Standard. Mag.,,,,
Playback,Magnification,Enlarge Initial Mag.,Previous Mag.,,,,
Playback,Magnification,Enlarge Initial Position,Focused Position,,,,
Playback,Magnification,Enlarge Initial Position,Center,,,,
Playback,Selection/Memo,Protect,,,,,
Playback,Selection/Memo,Rating,,,,,
Playback,Selection/Memo,Rating Set(Custom Key),1*,,,,
Playback,Selection/Memo,Rating Set(Custom Key),2*,,,,
Playback,Selection/Memo,Rating Set(Custom Key),3*,,,,
Playback,Selection/Memo,Rating Set(Custom Key),4*,,,,
Playback,Selection/Memo,Rating Set(Custom Key),5*,,,,
Playback,Delete,Delete,Multiple Img.,,,,
Playback,Delete,Delete,All with this date,,,,
Playback,Delete,Delete pressing twice,On,,,,
Playback,Delete,Delete pressing twice,Off,,,,
Playback,Delete,Delete confirm.,"""Delete"" first",,,,
Playback,Delete,Delete confirm.,"""Cancel"" first",,,,
Playback,Edit,Crop,,,,,
Playback,Edit,Rotate,,,,,
Playback,Edit,Copy,,,,,
Playback,Edit,Photo Capture,,,,,
Playback,Edit,JPEG/HEIF Switch,JPEG,,,,
Playback,Edit,JPEG/HEIF Switch,HEIF(4:2:0),,,,
Playback,Edit,JPEG/HEIF Switch,HEIF(4:2:2),,,,
Playback,Viewing,Cont. Play for Interval,,,,,
Playback,Viewing,Play Speed For Interval,9 (Fast),,,,
Playback,Viewing,Play Speed For Interval,8,,,,
Playback,Viewing,Play Speed For Interval,7,,,,
Playback,Viewing,Play Speed For Interval,6,,,,
Playback,Viewing,Play Speed For Interval,5,,,,
Playback,Viewing,Play Speed For Interval,4,,,,
Playback,Viewing,Play Speed For Interval,3,,,,
Playback,Viewing,Play Speed For Interval,2,,,,
Playback,Viewing,Play Speed For Interval,1 (Slow),,,,
Playback,Viewing,Slide Show,Repeat,On,,,
Playback,Viewing,Slide Show,Repeat,Off,,,
Playback,Viewing,Slide Show,Interval,1 Sec,,,
Playback,Viewing,Slide Show,Interval,3 Sec,,,
Playback,Viewing,Slide Show,Interval,5 Sec,,,
Playback,Viewing,Slide Show,Interval,10 Sec,,,
Playback,Viewing,Slide Show,Interval,30 Sec,,,
Playback,Playback Option,Image Index,9 Images,,,,
Playback,Playback Option,Image Index,30 Images,,,,
Playback,Playback Option,Display as Group,On,,,,
Playback,Playback Option,Display as Group,Off,,,,
Playback,Playback Option,Display Rotation,Auto,,,,
Playback,Playback Option,Display Rotation,Manual,,,,
Playback,Playback Option,Display Rotation,Off,,,,
Playback,Playback Option,Focus Frame Display,On,,,,
Playback,Playback Option,Focus Frame Display,Off,,,,
Playback,Playback Option,Disp Specified Time Img.,[Date selector],,,,
Playback,Playback Option,Image Jump Setting,Front dial,One by one,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 10 images,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 100 images,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 3 minutes,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 5 minutes,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 10 minutes,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 30 minutes,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 1 hour,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 3 hours,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 6 hours,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 12 hours,,,
Playback,Playback Option,Image Jump Setting,Front dial,By 24 hours,,,
Playback,Playback Option,Image Jump Setting,Front dial,Protect Only,,,
Playback,Playback Option,Image Jump Setting,Front dial,Rating Only,,,
Playback,Playback Option,Image Jump Setting,Front dial,Rating Only (1*),,,
Playback,Playback Option,Image Jump Setting,Front dial,Rating Only (2*),,,
Playback,Playback Option,Image Jump Setting,Front dial,Rating Only (3*),,,
Playback,Playback Option,Image Jump Setting,Front dial,Rating Only (4*),,,
Playback,Playback Option,Image Jump Setting,Front dial,Rating Only (5*),,,
Playback,Playback Option,Image Jump Setting,Front dial,W/O Raring Only,,,
Playback,Playback Option,Image Jump Setting,Front dial,Shot Mark Only,,,
Playback,Playback Option,Image Jump Setting,Front dial,Shot Mark1 Only,,,
Playback,Playback Option,Image Jump Setting,Front dial,Shot Mark2 Only,,,
Playback,Playback Option,Image Jump Setting,Front dial,No Shot Mark,,,
Playback,Playback Option,Image Jump Setting,Front dial,Divider Frame Only,,,
Playback,Playback Option,Image Jump Setting,Front dial,Image After Divider,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,One by one,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 10 images,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 100 images,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 3 minutes,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 5 minutes,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 10 minutes,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 30 minutes,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 1 hour,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 3 hours,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 6 hours,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 12 hours,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,By 24 hours,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Protect Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Rating Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Rating Only (1*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Rating Only (2*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Rating Only (3*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Rating Only (4*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Rating Only (5*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,W/O Raring Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Shot Mark Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Shot Mark1 Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Shot Mark2 Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,No Shot Mark,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Divider Frame Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial L,Image After Divider,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,One by one,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 10 images,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 100 images,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 3 minutes,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 5 minutes,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 10 minutes,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 30 minutes,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 1 hour,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 3 hours,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 6 hours,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 12 hours,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,By 24 hours,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Protect Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Rating Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Rating Only (1*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Rating Only (2*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Rating Only (3*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Rating Only (4*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Rating Only (5*),,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,W/O Raring Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Shot Mark Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Shot Mark1 Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Shot Mark2 Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,No Shot Mark,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Divider Frame Only,,,
Playback,Playback Option,Image Jump Setting,Rear Dial R,Image After Divider,,,
Network,Cnct./PC Remote,Smartphone Connection,[QR Code],,,,
Network,Cnct./PC Remote,PC Remote Function,PC Remote,?,,,
Network,Cnct./PC Remote,PC Remote Function,Pairing,?,,,
Network,Cnct./PC Remote,PC Remote Function,Wi-Fi Direct Info.,,,,
Network,Cnct./PC Remote,Select on Cam & Send,Send,This Image,,,
Network,Cnct./PC Remote,Select on Cam & Send,Send,All with this date,,,
Network,Cnct./PC Remote,Select on Cam & Send,Send,Filtered Images,,,
Network,Cnct./PC Remote,Select on Cam & Send,Send,Multiple Images,,,
Network,Cnct./PC Remote,Select on Cam & Send,Size of Sending Image,Original,,,
Network,Cnct./PC Remote,Select on Cam & Send,Size of Sending Image,2M,,,
Network,Cnct./PC Remote,Select on Cam & Send,RAM+J/H Send Target,JPEG & HEIF,,,
Network,Cnct./PC Remote,Select on Cam & Send,RAM+J/H Send Target,RAW,,,
Network,Cnct./PC Remote,Select on Cam & Send,RAM+J/H Send Target,RAW+J & RAW+H,,,
Network,Cnct./PC Remote,Select on Cam & Send,Sending Target,Proxy Only,,,
Network,Cnct./PC Remote,Select on Cam & Send,Sending Target,Original Only,,,
Network,Cnct./PC Remote,Select on Cam & Send,Sending Target,Proxy & Original,,,
Network,Cnct./PC Remote,Reset Transfer Status,Slot 1,,,,
Network,Cnct./PC Remote,Reset Transfer Status,Slot 2,,,,
Network,Cnct./PC Remote,Cnct. while Power OFF,On,,,,
Network,Cnct./PC Remote,Cnct. while Power OFF,Off,,,,
Network,Cnct./PC Remote,Remote Shoot Setting,Still Img. Save Dest.,Destination Only,,,
Network,Cnct./PC Remote,Remote Shoot Setting,Still Img. Save Dest.,Dest.+Camera,,,
Network,Cnct./PC Remote,Remote Shoot Setting,Still Img. Save Dest.,Camera Only,,,
Network,Cnct./PC Remote,Remote Shoot Setting,Save Image Size,Original,,,
Network,Cnct./PC Remote,Remote Shoot Setting,Save Image Size,2M,,,
Network,Cnct./PC Remote,Remote Shoot Setting,RAW+H Save Image,?,,,
Network,Cnct./PC Remote,Remote Shoot Setting,Save HEIF Size,Large Size,,,
Network,Cnct./PC Remote,Remote Shoot Setting,Save HEIF Size,Small Size,,,
Network,FTP Transfer,FTP Transfer Func.,FTP Function,On,,,
Network,FTP Transfer,FTP Transfer Func.,FTP Function,Off,,,
Network,FTP Transfer,FTP Transfer Func.,Server Setting,Server 1,,,
Network,FTP Transfer,FTP Transfer Func.,Server Setting,Server 2,,,
Network,FTP Transfer,FTP Transfer Func.,Server Setting,Server 3,,,
Network,FTP Transfer,FTP Transfer Func.,Server Setting,Server 4,,,
Network,FTP Transfer,FTP Transfer Func.,Server Setting,Server 5,,,
Network,FTP Transfer,FTP Transfer Func.,Server Setting,Server 6,,,
Network,FTP Transfer,FTP Transfer Func.,Server Setting,Server 7,,,
Network,FTP Transfer,FTP Transfer Func.,Server Setting,Server 8,,,
Network,FTP Transfer,FTP Transfer Func.,Server Setting,Server 9,,,
Network,FTP Transfer,FTP Transfer Func.,Save/Load FTP Settings,Load,,,
Network,FTP Transfer,FTP Transfer Func.,Save/Load FTP Settings,Save,,,
Network,FTP Transfer,FTP Transfer Func.,Save/Load FTP Settings,Delete,,,
Network,FTP Transfer,FTP Transfer Func.,FTP Transfer,?,,,
Network,FTP Transfer,FTP Transfer Func.,Display FTP Error Info.,,,,
Network,FTP Transfer,FTP Transfer Func.,Display FTP Result,Slot 1,,,
Network,FTP Transfer,FTP Transfer Func.,Display FTP Result,Slot 2,,,
Network,FTP Transfer,FTP Transfer Func.,Auto FTP Transfer,On,,,
Network,FTP Transfer,FTP Transfer Func.,Auto FTP Transfer,Off,,,
Network,FTP Transfer,FTP Transfer Func.,Auto FTP Target,Still Image,,,
Network,FTP Transfer,FTP Transfer Func.,Auto FTP Target,Movie,All,,
Network,FTP Transfer,FTP Transfer Func.,Auto FTP Target,Movie,Only Shot Mark,,
Network,FTP Transfer,FTP Transfer Func.,RAW+J/H Transfer Target,JPEG & HEIF,,,
Network,FTP Transfer,FTP Transfer Func.,RAW+J/H Transfer Target,RAW,,,
Network,FTP Transfer,FTP Transfer Func.,RAW+J/H Transfer Target,RAW+J & RAW+H,,,
Network,FTP Transfer,FTP Transfer Func.,Transfer JPEG Size,Large Size,,,
Network,FTP Transfer,FTP Transfer Func.,Transfer JPEG Size,Small Size,,,
Network,FTP Transfer,FTP Transfer Func.,Transfer HEIF Size,Large Size,,,
Network,FTP Transfer,FTP Transfer Func.,Transfer HEIF Size,Small Size,,,
Network,FTP Transfer,FTP Transfer Func.,Transfer Target,Proxy Only,,,
Network,FTP Transfer,FTP Transfer Func.,Transfer Target,Original Only,,,
Network,FTP Transfer,FTP Transfer Func.,Transfer Target,Proxy & Original,,,
Network,FTP Transfer,FTP Transfer Func.,FTP Power Save,On,,,
Network,FTP Transfer,FTP Transfer Func.,FTP Power Save,Off,,,
Network,Streaming,Network Streaming,Streaming,On,,,
Network,Streaming,Network Streaming,Streaming,Off,,,
Network,Streaming,Network Streaming,Stream Connect Error Display,,,,
Network,Streaming,Network Streaming,Output Img. Quality Set,Quality,High,,
Network,Streaming,Network Streaming,Output Img. Quality Set,Quality,Standard,,
Network,Streaming,Network Streaming,Output Img. Quality Set,Quality,Low,,
Network,Streaming,Network Streaming,Output Img. Quality Set,Quality,Custom,,
Network,Streaming,Network Streaming,Output Img. Quality Set,Resolution,4K (2160p),,
Network,Streaming,Network Streaming,Output Img. Quality Set,Resolution,2K (1440p),,
Network,Streaming,Network Streaming,Output Img. Quality Set,Resolution,HD (1080p),,
Network,Streaming,Network Streaming,Output Img. Quality Set,Resolution,HD (720p),,
Network,Streaming,Network Streaming,Output Img. Quality Set,Frame Rate,60p,,
Network,Streaming,Network Streaming,Output Img. Quality Set,Frame Rate,30p,,
Network,Streaming,Network Streaming,Output Img. Quality Set,Bit Rate,4.5-27.0Mbps,,
Network,Streaming,Network Streaming,Output Information Display,?,,,
Network,Streaming,Network Streaming,Movie Rec During Streaming,Enable,,,
Network,Streaming,Network Streaming,Movie Rec During Streaming,Disable,,,
Network,Streaming,Network Streaming,Emphasized Output Display,On,,,
Network,Streaming,Network Streaming,Emphasized Output Display,Off,,,
Network,Streaming,Network Streaming,Root Certificate Error,Connect,,,
Network,Streaming,Network Streaming,Root Certificate Error,Does Not Connect,,,
Network,Creators' Cloud,Cloud Connection,On,,,,
Network,Creators' Cloud,Cloud Connection,Off,,,,
Network,Creators' Cloud,Cloud Information,Account Info,,,,
Network,Creators' Cloud,Cloud Information,Error Info.,,,,
Network,Creators' Cloud,Cloud Information,SSID,,,,
Network,Wi-Fi,Wi-Fi Connect,On,,,,
Network,Wi-Fi,Wi-Fi Connect,Off,,,,
Network,Wi-Fi,WPS Push,,,,,
Network,Wi-Fi,Access Point Set.,,,,,
Network,Wi-Fi,Wi-Fi Frequency Band,2.4GHz,,,,
Network,Wi-Fi,Wi-Fi Frequency Band,5GHz,,,,
Network,Wi-Fi,Display Wi-Fi Info.,IP Address Setting,,,,
Network,Wi-Fi,Display Wi-Fi Info.,IP Address,,,,
Network,Wi-Fi,Display Wi-Fi Info.,Subnet Mask,,,,
Network,Wi-Fi,Display Wi-Fi Info.,Default Gateway,,,,
Network,Wi-Fi,Display Wi-Fi Info.,Primary DNS Server,,,,
Network,Wi-Fi,Display Wi-Fi Info.,Second DNS Server,,,,
Network,Wi-Fi,Display Wi-Fi Info.,MAC Address,,,,
Network,Wi-Fi,Display Wi-Fi Info.,Import MAC Address,,,,
Network,Wi-Fi,SSID/PW Reset,,,,,
Network,Bluetooth,Bluetooth Function,On,,,,
Network,Bluetooth,Bluetooth Function,Off,,,,
Network,Bluetooth,Pairing,,,,,
Network,Bluetooth,Manage Paired Device,Select device to delete.,,,,
Network,Bluetooth,Bluetooth Rmt Ctrl,On,,,,
Network,Bluetooth,Bluetooth Rmt Ctrl,Off,,,,
Network,Bluetooth,Disp Device Address,,,,,
Network,Wired LAN,IP Address Setting,Manual,Default Gateway,,,
Network,Wired LAN,IP Address Setting,Manual,Subnet Mask,,,
Network,Wired LAN,IP Address Setting,Manual,IP Address,,,
Network,Wired LAN,IP Address Setting,Auto,,,,
Network,Wired LAN,Display Wired LAN Info.,IP Address Setting,,,,
Network,Wired LAN,Display Wired LAN Info.,IP Address,,,,
Network,Wired LAN,Display Wired LAN Info.,Subnet Mask,,,,
Network,Wired LAN,Display Wired LAN Info.,Default Gateway,,,,
Network,Wired LAN,Display Wired LAN Info.,Primary DNS Server,,,,
Network,Wired LAN,Display Wired LAN Info.,Second DNS Server,,,,
Network,Wired LAN,Display Wired LAN Info.,MAC Address,,,,
Network,Wired LAN,Display Wired LAN Info.,Import MAC Address,,,,
Network,USB-LAN/Tethering,USB-LAN Connection,,,,,
Network,USB-LAN/Tethering,Tethering Connection,,,,,
Network,Network Option,Airplane Mode,On,,,,
Network,Network Option,Airplane Mode,Off,,,,
Network,Network Option,Edit Device Name,,,,,
Network,Network Option,Import Root Certificate,FTP Function,,,,
Network,Network Option,Import Root Certificate,Streaming,,,,
Network,Network Option,Access Authen. Settings,Access Authen.,On,,,
Network,Network Option,Access Authen. Settings,Access Authen.,Off,,,
Network,Network Option,Access Authen. Settings,User,,,,
Network,Network Option,Access Authen. Settings,Password (Reset),,,,
Network,Network Option,Access Authen. Settings,Genrate Password,,,,
Network,Network Option,Access Authen. Info,,,,,
Network,Network Option,Security(IPsec),,,,,
Network,Network Option,Reset Network Set.,,,,,
Setup,Area/Date,Language,English,,,,
Setup,Area/Date,Language,Français,,,,
Setup,Area/Date,Language,Nederlands,,,,
Setup,Area/Date,Language,Svenska,,,,
Setup,Area/Date,Language,Dansk,,,,
Setup,Area/Date,Language,Norsk,,,,
Setup,Area/Date,Language,Suomi,,,,
Setup,Area/Date,Language,Русский,,,,
Setup,Area/Date,Language,Українська,,,,
Setup,Area/Date,Language,Polski,,,,
Setup,Area/Date,Language,Česky,,,,
Setup,Area/Date,Language,Magyar,,,,
Setup,Area/Date,Language,Ελληνικά,,,,
Setup,Area/Date,Language,Türkçe,,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Berlin/Paris,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Lisbon/London,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Azores/Cape Verde Is.,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Fernando de Noronha,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Brasilia/Montevideo,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,St.John's,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Santiago,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,New York/Bogota,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Chicago/MexicoCity,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Denver/Arizona,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,San Francisco/Tijuana,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Alaska,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Hawaii,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Midway Island,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Fiji/Wellington,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Solomon Is,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Melbourne/Sydney,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Adelaide/Darwin,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Tokyo/Seoul,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,HongKong/Singapore/Beijing,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Bangkok/Jakarta,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Yangon,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Almaty/Dhaka,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Kolkata/New Delhi,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Karachi/Islamabad,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Kabul,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Abu Dhabi/Baku,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Tehran,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Moscow/Nairobi,,,
Setup,Area/Date,Area/Date/Time Setting,Area Setting,Helsinki/Cairo/Istanbul,,,
Setup,Area/Date,Area/Date/Time Setting,Daylight Savings,On,,,
Setup,Area/Date,Area/Date/Time Setting,Daylight Savings,Off,,,
Setup,Area/Date,Area/Date/Time Setting,Date/Time,,,,
Setup,Area/Date,Area/Date/Time Setting,Date Format,Y-M-D,,,
Setup,Area/Date,Area/Date/Time Setting,Date Format,M (English)-D-Y,,,
Setup,Area/Date,Area/Date/Time Setting,Date Format,M-D-Y,,,
Setup,Area/Date,Area/Date/Time Setting,Date Format,D-M-Y,,,
Setup,Area/Date,NTSC/PAL Selector,PAL (reboot),,,,
Setup,Area/Date,NTSC/PAL Selector,NTSC (reboot),,,,
Setup,Reset/Save Settings,Setting Reset,Camera Settings Reset,,,,
Setup,Reset/Save Settings,Setting Reset,Initialize,,,,
Setup,Reset/Save Settings,Save/Load Settings,Load,,,,
Setup,Reset/Save Settings,Save/Load Settings,Save,,,,
Setup,Reset/Save Settings,Save/Load Settings,Delete,,,,
Setup,Operation Customize,Zoom Ring Rotate,,,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear5,1,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear4,2,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear3,3,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear2,4,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear1,5,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear2,1,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear2,2,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear2,3,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear2,4,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Rear2,5,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Top,1,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Top,2,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Lens,1,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Dial/Wheel,1,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Dial/Wheel,2,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Dial/Wheel,3,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Dial/Wheel,4,,,
Setup,Dial Customize,(still) Custom Key/Dial Set.,Dial/Wheel,Separate M mode and other modes,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear5,1,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear4,2,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear3,3,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear2,4,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear1,5,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear2,1,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear2,2,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear2,3,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear2,4,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Rear2,5,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Top,1,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Top,1,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Lens,2,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Dial/Wheel,1,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Dial/Wheel,2,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Dial/Wheel,3,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Dial/Wheel,4,,,
Setup,Dial Customize,(video) Custom Key/Dial Set.,Dial/Wheel,Separate M mode and other modes,,,
Setup,Dial Customize,My Dial Settings,Front dial,,,,
Setup,Dial Customize,My Dial Settings,Rear Dial L,,,,
Setup,Dial Customize,My Dial Settings,Rear Dial R,,,,
Setup,Dial Customize,My Dial Settings,Control Wheel,,,,
Setup,Dial Customize,Av/Tv Rotate,Normal,,,,
Setup,Dial Customize,Av/Tv Rotate,Reverse,,,,
Setup,Dial Customize,Function Ring(Lens),Power Focus,,,,
Setup,Dial Customize,Function Ring(Lens),APS-C S35 / Full Frame,,,,
Setup,Dial Customize,Lock Operation Parts,Off,,,,
Setup,Dial Customize,Lock Operation Parts,Multi-Selector Only,,,,
Setup,Dial Customize,Lock Operation Parts,Dial + Wheel,,,,
Setup,Dial Customize,Lock Operation Parts,All,,,,
Setup,Touch Operation,Touch Operation,On,,,,
Setup,Touch Operation,Touch Operation,On: Playback Only,,,,
Setup,Touch Operation,Touch Operation,Off,,,,
Setup,Touch Operation,Touch Panel/Pad,Both Valid,,,,
Setup,Touch Operation,Touch Panel/Pad,Touch Panel Only,,,,
Setup,Touch Operation,Touch Panel/Pad,Touch Pad Only,,,,
Setup,Touch Operation,Touch Pad Settings,Operation in Vertical Orientation,On,,,
Setup,Touch Operation,Touch Pad Settings,Operation in Vertical Orientation,Off,,,
Setup,Touch Operation,Touch Pad Settings,Touch Position Mode,Absolute Position,,,
Setup,Touch Operation,Touch Pad Settings,Touch Position Mode,Relative Position,,,
Setup,Touch Operation,Touch Pad Settings,Operation Area,Whole Screen,,,
Setup,Touch Operation,Touch Pad Settings,Operation Area,Right 1/2,,,
Setup,Touch Operation,Touch Pad Settings,Operation Area,Right 1/4,,,
Setup,Touch Operation,Touch Pad Settings,Operation Area,Upper Right,,,
Setup,Touch Operation,Touch Pad Settings,Operation Area,Lower Right,,,
Setup,Touch Operation,Touch Pad Settings,Operation Area,Left 1/2,,,
Setup,Touch Operation,Touch Pad Settings,Operation Area,Left 1/4,,,
Setup,Touch Operation,Touch Pad Settings,Operation Area,Upper Left,,,
Setup,Touch Operation,Touch Pad Settings,Operation Area,Lower Left,,,
Setup,Touch Operation,Touch Func. in <i name="camera"/>Shooting,Touch Focus,,,,
Setup,Touch Operation,Touch Func. in <i name="camera"/>Shooting,Touch Tracking,,,,
Setup,Touch Operation,Touch Func. in <i name="camera"/>Shooting,Touch Shutter,,,,
Setup,Touch Operation,Touch Func. in <i name="camera"/>Shooting,Off,,,,
Setup,Finder/Monitor,Select Finder/Monitor,Auto,,,,
Setup,Finder/Monitor,Select Finder/Monitor,VF(Manual),,,,
Setup,Finder/Monitor,Select Finder/Monitor,Monitor(Manual),,,,
Setup,Finder/Monitor,Monitor Brightness,Auto,,,,
Setup,Finder/Monitor,Monitor Brightness,Manual,-2-+2,,,
Setup,Finder/Monitor,Viewfinder Bright.,Auto,,,,
Setup,Finder/Monitor,Viewfinder Bright.,Manual,-2-+2,,,
Setup,Finder/Monitor,Finder Color Temp.,-2-+2,,,,
Setup,Finder/Monitor,Display Quality,High,,,,
Setup,Finder/Monitor,Display Quality,Standard,,,,
Setup,Finder/Monitor,Finder Frame Rate,Standard,,,,
Setup,Finder/Monitor,Finder Frame Rate,High,,,,
Setup,Display Option,TC/UB Disp. Setting,Counter,,,,
Setup,Display Option,TC/UB Disp. Setting,TC,,,,
Setup,Display Option,TC/UB Disp. Setting,U-Bit,,,,
Setup,Display Option,Gamma Display Assist,On,,,,
Setup,Display Option,Gamma Display Assist,Off,,,,
Setup,Display Option,Gamma Disp. Assist Typ.,Auto,,,,
Setup,Display Option,Gamma Disp. Assist Typ.,S-Log2->709(800%),,,,
Setup,Display Option,Gamma Disp. Assist Typ.,S-Log3->709(800%),,,,
Setup,Display Option,Gamma Disp. Assist Typ.,HLG(BT.2020),,,,
Setup,Display Option,Gamma Disp. Assist Typ.,HLG(709),,,,
Setup,Display Option,Remain Shoot Display,Always Display,,,,
Setup,Display Option,Remain Shoot Display,Shoot-Only Display,,,,
Setup,Display Option,Remain Shoot Display,Not Displayed,,,,
Setup,Display Option,Auto Review,10 Sec,,,,
Setup,Display Option,Auto Review,5 Sec,,,,
Setup,Display Option,Auto Review,2 Sec,,,,
Setup,Display Option,Auto Review,Off,,,,
Setup,Power Setting Option,Auto Monitor OFF,Does not turn OFF,,,,
Setup,Power Setting Option,Auto Monitor OFF,2 Sec,,,,
Setup,Power Setting Option,Auto Monitor OFF,5 Sec,,,,
Setup,Power Setting Option,Auto Monitor OFF,10 Sec,,,,
Setup,Power Setting Option,Auto Monitor OFF,1 Min,,,,
Setup,Power Setting Option,Power Save Start Time,Off,,,,
Setup,Power Setting Option,Power Save Start Time,30 Min,,,,
Setup,Power Setting Option,Power Save Start Time,5 Min,,,,
Setup,Power Setting Option,Power Save Start Time,2 Min,,,,
Setup,Power Setting Option,Power Save Start Time,1 Min,,,,
Setup,Power Setting Option,Power Save Start Time,10 Sec,,,,
Setup,Power Setting Option,Power Save by Monitor,Both Linked,,,,
Setup,Power Setting Option,Power Save by Monitor,Open: Return,,,,
Setup,Power Setting Option,Power Save by Monitor,Close: Power Save,,,,
Setup,Power Setting Option,Power Save by Monitor,Does Not Link,,,,
Setup,Power Setting Option,Auto Power OFF Temp.,Standard,,,,
Setup,Power Setting Option,Auto Power OFF Temp.,High,,,,
Setup,Sound Option,Volume Settings,0-15,,,,
Setup,Sound Option,4ch Audio Monitoring,CH1/CH2,,,,
Setup,Sound Option,4ch Audio Monitoring,CH3/CH4,,,,
Setup,Sound Option,4ch Audio Monitoring,CH1+3/CH2+4,,,,
Setup,Sound Option,4ch Audio Monitoring,CH1/CH1,,,,
Setup,Sound Option,4ch Audio Monitoring,CH2/CH2,,,,
Setup,Sound Option,Audio Signals,On,,,,
Setup,Sound Option,Audio Signals,Off,,,,
Setup,USB,USB Connection Mode,Sel. When Connect,,,,
Setup,USB,USB Connection Mode,USB Streaming,,,,
Setup,USB,USB Connection Mode,MassStorage(MSC),,,,
Setup,USB,USB Connection Mode,MTP,,,,
Setup,USB,USB Connection Mode,PC Remote,,,,
Setup,USB,USB LUN Setting,Multi,,,,
Setup,USB,USB LUN Setting,Single,,,,
Setup,USB,USB Power Supply,On,,,,
Setup,USB,USB Power Supply,Off,,,,
Setup,External Output,HDMI Resolution,Auto,,,,
Setup,External Output,HDMI Resolution,2160p,,,,
Setup,External Output,HDMI Resolution,1080p,,,,
Setup,External Output,HDMI Resolution,1080i,,,,
Setup,External Output,HDMI Output Settings,Rec. Media dur HDMI Output,Off(HDMI Only),,,
Setup,External Output,HDMI Output Settings,Rec. Media dur HDMI Output,On,,,
Setup,External Output,HDMI Output Settings,Output Resolution,Auto,,,
Setup,External Output,HDMI Output Settings,Output Resolution,2160p,,,
Setup,External Output,HDMI Output Settings,Output Resolution,1080p,,,
Setup,External Output,HDMI Output Settings,Output Resolution,1080i,,,
Setup,External Output,HDMI Output Settings,4K Output Set (HDMI Only),60p 10bit,,,
Setup,External Output,HDMI Output Settings,4K Output Set (HDMI Only),30p 10bit,,,
Setup,External Output,HDMI Output Settings,4K Output Set (HDMI Only),24p 10bit,,,
Setup,External Output,HDMI Output Settings,Time Code Output,On,,,
Setup,External Output,HDMI Output Settings,Time Code Output,Off,,,
Setup,External Output,HDMI Output Settings,REC Control,On,,,
Setup,External Output,HDMI Output Settings,REC Control,Off,,,
Setup,External Output,HDMI Output Settings,4ch Audio Output,CH1/CH2,,,
Setup,External Output,HDMI Output Settings,4ch Audio Output,CH3/CH4,,,
Setup,External Output,HDMI Info. Display,On,,,,
Setup,External Output,HDMI Info. Display,Off,,,,
Setup,External Output,CTRL FOR HDMI,On,,,,
Setup,External Output,CTRL FOR HDMI,Off,,,,
Setup,Setup Option,Video Light Mode,Auto,,,,
Setup,Setup Option,Video Light Mode,REC Link&STBY,,,,
Setup,Setup Option,Video Light Mode,REC Link,,,,
Setup,Setup Option,Video Light Mode,Power Link,,,,
Setup,Setup Option,Anti-dust Function,Shutter When Pwr OFF,On,,,
Setup,Setup Option,Anti-dust Function,Shutter When Pwr OFF,Off,,,
Setup,Setup Option,Anti-dust Function,Sensor Cleaning,,,,
Setup,Setup Option,Auto Pixel Mapping,Execute,,,,
Setup,Setup Option,Pixel Mapping,On,,,,
Setup,Setup Option,Pixel Mapping,Off,,,,
Setup,Setup Option,Version,,,,,
Setup,Setup Option,Display Serial Number,,,,,
camera_menu_config
brand,Sony
model,A7IV
icon:camera,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAXCAYAAAD3CERpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGPGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NjhhLCAyMDI0LzAzLzA2LTExOjUyOjA1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuMTIgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI1LTAyLTI1VDEyOjA3OjI3KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNS0wMi0yNlQwOTowNjo0MiswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNS0wMi0yNlQwOTowNjo0MiswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2Y3ZjE5N2YtYTQyZS00OWQzLThlMmQtMjRjZjIyMTgxNTExIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzAzMGVmZWMtYzZiOC1hODRlLThjM2QtYmVmNDMzNDkxYjVlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2Y2YWQ1NzktZDE5Yi00OGY5LTg4YjctNDllOWJhYTc5NzkwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjZhZDU3OS1kMTliLTQ4ZjktODhiNy00OWU5YmFhNzk3OTAiIHN0RXZ0OndoZW49IjIwMjUtMDItMjVUMTI6MDc6MjcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjdmMTk3Zi1hNDJlLTQ5ZDMtOGUyZC0yNGNmMjIxODE1MTEiIHN0RXZ0OndoZW49IjIwMjUtMDItMjZUMDk6MDY6NDIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6694MmAAACqUlEQVRIia2WvWtUURDFf/dtsvlCBEU0hYIRJIWdsbBRsFaCYCMoWggq2lj4j9haiYVoCgsRNFUsLbWwsdG0IpKv3cTd947Fndkdn6t5AQce9+29754zc+7M3E2SaGiTwDxwANgABFS2VgIfmgIhqemzLOmHpK6kjqSepJ+StiVtSLrRFKsp4SUj6EjaUbZSUt/GrqTvkg7/L9IpSZuSKv3bupIeNyEtdlF/HLgFjAHJ5qpwln1g255x4BpwZrcjTZZIi8BDSw4BBbAGLACHDHTK9pRAz5xo2yibr4AOsAps2vy4ff8eeAR8TZIWgBUj8miSRdcKjni29mxMATSSuwN1K8yR4wVw2cDbBuBk6yZfFZ5XwEXgJHCUXEJ3DawP7ARH3FqGWQITwBySHoQsrEJW+ntP0pak65LSX5JjUtJLK59S0rrtq+N0Jc0XFrZLGqVMtlYAd4CnNj/KtoErwOcQnR+Xq+SYKmpARRg3yef3Alj6C1m0Erhge6ZrQUT8ViyZGKGAGQN4YpE0sW/Aa6AbsNwGSVnUFlN479jal4aEbksMExCGR+QSV657JHY5Jmzc2iPpGjlbqzDnmCUWaapt8mhb9vvIHklPMUykiDkgH9UGo1eJ3K2aWgLuB9xYDQO+erlEr0pykd8DTjQkXQRmGUYan4GNksCtTU6I/cAz4OAuhOeA5+aoBxG7mXMkz9560dfP9TS58M+S/0FE2wfcBN6R1SnJyZT4vRr8ImGMP3WPWefR9oxshVxCy8An4DxZ0tK+m7BxhmFFVEY2uAictBcWPVIv5op8rfVtbg64XYskRtSuKRG7XB9oJ0nHgI/ks4g918fK1srgZBmUiTXeMmC3+nX3Brjql/gsuWG7vA7kIDPkDjUdVBll0+QrMTZ8x1wF3gLdX9+0RtkZdOa+AAAAAElFTkSuQmCC
icon:star,iVBORw0KGgoAAAANSUhEUgAAAKYAAACfCAYAAABz/aISAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGPGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NjhhLCAyMDI0LzAzLzA2LTExOjUyOjA1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuMTIgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI1LTAyLTI1VDEyOjA3OjI3KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNS0wMi0yNlQwOTozMDowMyswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNS0wMi0yNlQwOTozMDowMyswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjUwZGRlMzktNGYyMy00YjRlLWE0MjMtOWQ2NDMwYzVkODk3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NWQzYzRlMjctYWFlOC0xZjQwLTg0NWEtMzY3YjcxZmU0MDliIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NGE2NWU2MjEtMjVjOC00YzZmLTkzNDctYWNhZmYyNjVlYTdlIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0YTY1ZTYyMS0yNWM4LTRjNmYtOTM0Ny1hY2FmZjI2NWVhN2UiIHN0RXZ0OndoZW49IjIwMjUtMDItMjVUMTI6MDc6MjcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNTBkZGUzOS00ZjIzLTRiNGUtYTQyMy05ZDY0MzBjNWQ4OTciIHN0RXZ0OndoZW49IjIwMjUtMDItMjZUMDk6MzA6MDMrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7alw0ZAAA3AElEQVR4nN19/YtcR5bl6a5EBTIlJKhGogU2bdowyxgadmD/+v19YYYdmGGGNniwaYGMhAskVFhQIgvvD5Gn4ryT5973siTPtn0hyZfx4jtu3O+I/N3PP/98BmCHAfvD8x4T9Hd6h5W09HvfpCvs5NnL7FD3N5VJdXSQ+pnaTPVvmaNqrKmd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
`,pf="/camera-menu/pr-preview/pr-1/assets/canon5Div-CUnLUR_P.css",Sf="/camera-menu/pr-preview/pr-1/assets/canonR5ii-Cu0BGiQR.css",yf="/camera-menu/pr-preview/pr-1/assets/default-D_968CFm.css",vf="/camera-menu/pr-preview/pr-1/assets/nikonZ6ii-Bepb42n9.css",bf="/camera-menu/pr-preview/pr-1/assets/panasonicS1-CMfIocAY.css",Cf="/camera-menu/pr-preview/pr-1/assets/sonyA7Riii-CC2y0szv.css",Af="/camera-menu/pr-preview/pr-1/assets/sonyA7iii-D75EPLGH.css",wf="/camera-menu/pr-preview/pr-1/assets/sonyA7iv-fRzHvw_M.css",Ff=`#root {
  max-width: 1280px;
}

* {
  box-sizing: border-box;
}

.root {
  display: flex;
  flex-direction: column;
  position: relative;
}

.scroll-container {
  overflow-y: auto;
  max-width: 100vw;
}

.container {
  display: flex;
}

.level-0.container {
  flex-direction: row;
}

.level-1.container,
.level-2.container,
.level-3.container,
.level-4.container,
.level-5.container,
.level-6.container {
  width: 100%;
}

.level-2.container,
.level-3.container,
.level-4.container,
.level-5.container,
.level-6.container {
  flex-direction: column;
}

.level-0.container {
  flex-direction: row;
}

.level-1.scroll-container {
  overflow: hidden;
}

.wrapper {
  background-color: black;
  color: white;
  font-weight: 500;
}

.menu > .container {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  display: flex;
  cursor: pointer;
  align-items: center;
}

.index {
  display: none;
}

.label {
  padding: 4px;
  display: inline-block;
  border-radius: 2px;
  flex: 1;
  margin-right: 4px;
}

:root {
  --item-0-color: 255, 0, 0;
  --item-1-color: 232, 0, 232;
  --item-2-color: 0, 100, 255;
  --item-3-color: 219, 207, 0;
  --item-4-color: 255, 165, 0;
  --item-5-color: 0, 128, 0;
  --selected-item-line-width: 2px;
}

.level-0 .item {
  width: 80px;
  text-align: center;
  overflow: hidden;
  height: 40px;
  font-size: 12px;
}

.level-0 .item-0.selected,
.level-2.category-0 .selected,
.level-3.category-0 .item.selected {
  background-color: rgba(var(--item-0-color), 1);
}

.level-1.category-0 .selected .index {
  background-color: rgba(var(--item-0-color), 0.8);
}

.level-0:has(.item-0.selected),
.crumb-path:has(~ .level-3.category-0) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-0-color), 1);
}

.level-0 .item-1.selected,
.level-2.category-1 .selected,
.level-3.category-1 .item.selected {
  background-color: rgba(var(--item-1-color), 1);
}

.level-1.category-1 .selected .index {
  background-color: rgba(var(--item-1-color), 0.8);
}

.level-0:has(.item-1.selected),
.crumb-path:has(~ .level-3.category-1) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-1-color), 1);
}

.level-0 .item-2.selected,
.level-2.category-2 .selected,
.level-3.category-2 .item.selected {
  background-color: rgba(var(--item-2-color), 1);
}

.level-1.category-2 .selected .index {
  background-color: rgba(var(--item-2-color), 0.8);
}

.level-0:has(.item-2.selected),
.crumb-path:has(~ .level-3.category-2) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-2-color), 1);
}

.level-0 .item-3.selected,
.level-2.category-3 .selected,
.level-3.category-3 .item.selected {
  background-color: rgba(var(--item-3-color), 1);
}

.level-1.category-3 .selected .index {
  background-color: rgba(var(--item-3-color), 0.8);
}

.level-0:has(.item-3.selected),
.crumb-path:has(~ .level-3.category-3) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-3-color), 1);
}

.level-0 .item-4.selected,
.level-2.category-4 .selected,
.level-3.category-4 .item.selected {
  background-color: rgba(var(--item-4-color), 1);
}

.level-1.category-4 .selected .index {
  background-color: rgba(var(--item-4-color), 0.8);
}

.level-0:has(.item-4.selected),
.crumb-path:has(~ .level-3.category-4) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-4-color), 1);
}

.level-0 .item-5.selected,
.level-2.category-5 .selected,
.level-3.category-5 .item.selected {
  background-color: rgba(var(--item-5-color), 1);
}

.level-1.category-5 .selected .index {
  background-color: rgba(var(--item-5-color), 0.8);
}

.level-0:has(.item-5.selected),
.crumb-path:has(~ .level-3.category-5) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-5-color), 1);
}

.level-0 .item {
  opacity: 0.5;
}

.level-0 .item.selected {
  opacity: 1;
}

.level-1 {
  display: flex;
  flex-direction: row;
  padding-left: 16px;
}

.level-1 .index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  width: 40px;
  height: 100%;
}

.level-1 .label {
  display: none;
}

.level-2 .label,
.level-3 .label {
  margin: 0 12px;
}

.level-2 .selected .label,
.level-3 .selected .label {
  background-color: black;
}

.level-2 .item {
  background: #292929;
}

.level-2 .item,
.level-3 .item {
  padding: 4px;
}

.level-2 .item:not(:first-child) {
  border-top: 1px solid black;
}

.level-heading {
  display: none;
}

.crumb-path {
  order: 3;
  display: flex;
  margin-right: 8px;
  align-items: center;
  margin-left: 4px;
  flex: 1;
  justify-content: flex-end;
}

.crumb-path .container {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.crumb-path.scroll-container {
  overflow: hidden;
}

.crumb-path .crumb {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.level-0 {
  order: 1;
  flex-basis: 100%;
}

.level-1 {
  order: 2;
  flex-shrink: 0;
}

.level-2 {
  order: 4;
  flex: 1 1 100%;
  margin-top: 4px;
}

.level-3 {
  order: 5;
  width: 100%;
  background: black;
  margin-top: 8px;
}

.crumb-path:has(~ .level-3) {
  order: 1;
  width: 100%;
  margin: 0 16px;
}

.crumb-path:has(~ .level-3) .crumb {
  margin: 0 16px;
}

.crumb-path:has(~ .level-3) .crumb:nth-child(-n + 2),
.crumb-path:has(~ .level-3) .crumb:nth-child(4) {
  display: none;
}

.level-0:has(~ .level-3),
.level-1:has(~ .level-3),
.level-2:has(~ .level-3) {
  display: none;
}

.level-3 {
  display: flex;
}

.level-3 .item {
  background-color: #292929;
}

.level-3 ~ .nav-buttons {
  display: flex;
  justify-items: flex-end;
  order: 6;
  flex: 1 1 100%;
  justify-content: flex-end;
}

.level-3 ~ .nav-buttons .back-button {
  border: 1px solid #444444;
  background: #292929;
  padding: 4px 2px;
  margin: 8px;
  border-radius: 4px;
}

.level-3 ~ .nav-buttons .back-button:before {
  content: 'SET OK';
}

.level-4 {
  order: 6;
}

.has-help {
  display: none;
}

.container > :nth-last-child(1 of .level) .has-help {
  display: block;
}
`,Of=`#root {
  max-width: 1280px;
}

* {
  box-sizing: border-box;
}

.root {
  display: flex;
  flex-direction: column;
  position: relative;
}

.scroll-container {
  overflow-y: auto;
  max-width: 100vw;
}

.container {
  display: flex;
}

.level-2.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--border-color);
  min-height: 30px;
  counter-reset: item-counter;
  position: relative;
}

.level-2 .item {
  text-align: center;
  counter-increment: item-counter;
}

.level-2 .item.selected .label {
  display: flex;
}

.level-2 .item.selected::after {
  content: counter(item-counter);
  display: block;
  position: absolute;
  top: 12px;
  right: 3.3ch;
}

.level-2.container::after {
  content: '/ ' counter(item-counter);
  display: block;
  position: absolute;
  top: 12px;
  right: 4px;
}

.level-2 .item.selected {
  order: 2;
  flex-basis: 100%;
  padding: 0 10px;
}

.level-2 .item.selected .label {
  padding: 0;
}

.level-2 .item:not(.selected) {
  order: 1;
  align-items: flex-start;
}

.level-2 .item.selected + .item::before {
  content: '';
  display: block;
  width: 32px;
  height: 6px;
  flex-grow: 0;
  margin: 4px;
}

.level-2 .item:not(.selected)::after {
  content: '';
  display: block;
  width: 32px;
  height: 4px;
  background: hsl(22, 0%, 36%);
  flex-grow: 0;
  margin: 4px;
}

.level-2 .label {
  display: none;
}

.level-2.container,
.level-3.container,
.level-4.container,
.level-5.container,
.level-6.container,
.level-7.container {
  width: 100%;
}

.level-3.container,
.level-4.container,
.level-5.container,
.level-6.container,
.level-7.container {
  flex-direction: column;
}

.level-1.container {
  flex-direction: row;
}

.level-2.scroll-container {
  overflow: hidden;
  flex-grow: 1;
}

.wrapper {
  background-color: black;
  color: white;
  font-weight: 500;
}

.menu > .container {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  display: flex;
  cursor: pointer;
  align-items: center;
}

.index {
  display: none;
}

.label {
  padding: 4px;
  display: inline-block;
  border-radius: 2px;
  flex: 1;
  margin-right: 4px;
}

:root {
  --item-0-color: 255, 0, 0;
  --item-1-color: 232, 0, 232;
  --item-2-color: 0, 100, 255;
  --item-3-color: 219, 207, 0;
  --item-4-color: 255, 165, 0;
  --item-5-color: 0, 128, 0;
  --selected-item-line-width: 1px;
}

.level-0 .item {
  font-size: 75%;
}

.level-0 .item.selected {
  background-color: rgba(var(--item-0-color), 1);
}

.level-0.scroll-container {
  margin-bottom: 8px;
}
.level-1 .item {
  width: 80px;
  text-align: center;
  overflow: hidden;
  height: 40px;
  font-size: 8px;
}

.level-1 .item-0.selected,
.level-1:has(.item-0.selected) + .level-2 .item.selected + .item::before,
.level-3.category-0 .selected,
.level-4.category-0 .item.selected {
  background-color: rgba(var(--item-0-color), 1);
}

.level-1:has(.item-0.selected),
.crumb-path:has(~ .level-4.category-0) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-0-color), 1);
}

.level-1 .item-1.selected,
.level-1:has(.item-1.selected) + .level-2 .item.selected + .item::before,
.level-3.category-1 .selected,
.level-4.category-1 .item.selected {
  background-color: rgba(var(--item-1-color), 1);
}

.level-1:has(.item-1.selected),
.crumb-path:has(~ .level-4.category-1) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-1-color), 1);
}

.level-1 .item-2.selected,
.level-1:has(.item-2.selected) + .level-2 .item.selected + .item::before,
.level-3.category-2 .selected,
.level-4.category-2 .item.selected {
  background-color: rgba(var(--item-2-color), 1);
}

.level-1:has(.item-2.selected),
.crumb-path:has(~ .level-4.category-2) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-2-color), 1);
}

.level-1 .item-3.selected,
.level-1:has(.item-3.selected) + .level-2 .item.selected + .item::before,
.level-3.category-3 .selected,
.level-4.category-3 .item.selected {
  background-color: rgba(var(--item-3-color), 1);
}

.level-1:has(.item-3.selected),
.crumb-path:has(~ .level-4.category-3) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-3-color), 1);
}

.level-1 .item-4.selected,
.level-1:has(.item-4.selected) + .level-2 .item.selected + .item::before,
.level-3.category-4 .selected,
.level-4.category-4 .item.selected {
  background-color: rgba(var(--item-4-color), 1);
}

.level-1:has(.item-4.selected),
.crumb-path:has(~ .level-4.category-4) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-4-color), 1);
}

.level-1 .item-5.selected,
.level-1:has(.item-5.selected) + .level-2 .item.selected + .item::before,
.level-3.category-5 .selected,
.level-4.category-5 .item.selected {
  background-color: rgba(var(--item-5-color), 1);
}

.level-1:has(.item-5.selected),
.crumb-path:has(~ .level-4.category-5) {
  border-bottom: var(--selected-item-line-width) solid rgba(var(--item-5-color), 1);
}

.level-1 .item {
  opacity: 0.5;
}

.level-1 .item.selected {
  opacity: 1;
}

.level-1 .icon img {
  height: 25px;
  width: auto;
}

.level-2 {
  display: flex;
  flex-direction: row;
}

.level-2 .index {
  display: none;
}

.level-2 .crumb-path {
  display: none;
}

.level-2 .label {
  display: none;
}

.level-3 .label,
.level-4 .label {
  margin: 0 12px;
}

.level-3 .selected .label,
.level-4 .selected .label {
  background-color: black;
}

.level-3 .item {
  background: #292929;
}

.level-3 .item,
.level-4 .item {
  padding: 4px;
}

.level-3 .item:not(:first-child) {
  border-top: 1px solid black;
}

.level-heading {
  display: none;
}

.crumb-path {
  display: none;
}

.level-1 {
  order: 1;
  flex-basis: 100%;
}

.level-2 {
  order: 2;
  flex-shrink: 0;
}

.level-3 {
  order: 4;
  flex: 1 1 100%;
  margin-top: 4px;
}

.level-4 {
  order: 5;
  width: 100%;
  background: black;
  margin-top: 8px;
}

.crumb-path:has(~ .level-4) {
  order: 1;
  width: 100%;
  margin: 0 16px;
}

.crumb-path:has(~ .level-4) .crumb {
  margin: 0 16px;
}

.crumb-path:has(~ .level-4) .crumb:nth-child(-n + 2),
.crumb-path:has(~ .level-4) .crumb:nth-child(4) {
  display: none;
}

.level-1:has(~ .level-4),
.level-2:has(~ .level-4),
.level-3:has(~ .level-4) {
  display: none;
}

.level-4 {
  display: flex;
}

.level-4 .item {
  background-color: #292929;
}

.level-4 ~ .nav-buttons {
  display: flex;
  justify-items: flex-end;
  order: 6;
  flex: 1 1 100%;
  justify-content: flex-end;
}

.level-4 ~ .nav-buttons .back-button {
  border: 1px solid #444444;
  background: #292929;
  padding: 4px 2px;
  margin: 8px;
  border-radius: 4px;
}

.level-4 ~ .nav-buttons .back-button:before {
  content: 'SET OK';
}

.level-5 {
  order: 6;
}

.has-help {
  display: none;
}

.container > :nth-last-child(1 of .level) .has-help {
  display: block;
}
`,Mf=`#root {
  max-width: 1280px;
  --border-color: rgb(197, 197, 197);
  display: flex;
}

* {
  box-sizing: border-box;
}

.root {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  max-height: 500px;
  width: 100vw;
}

.crumb-path .container {
  display: flex;
  gap: 4px;
  flex-direction: row;
  width: max-content;
}

.crumb-path .scroll-container {
  height: 1lh;
  overflow-x: auto;
}

.crumb-separator:after {
  content: '>';
  margin: 0 5px;
}

.crumb-separator:first-of-type,
.crumb-separator:last-of-type {
  display: none;
}

.crumb {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.level .container {
  display: flex;
  flex-direction: column;
}

.wrapper {
  background-color: black;
  color: white;
  font-weight: 500;
  flex: 1;
  display: flex;
  overflow-x: auto;
}

.menu {
  flex: 1;
  display: flex;
  width: 100%;
}

.menu.scroll-container {
  width: max-content;
}

.menu > .container {
  display: flex;
  width: max-content;
  flex-direction: row;
  flex-wrap: wrap;
}

.crumb-path.scroll-container {
  flex-basis: 100%;
  padding: 4px;
}

.crumb-path .container {
  display: flex;
  flex-direction: row;
}

.level.scroll-container {
  padding: 4px;
}

.level .item {
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 4px;
  gap: 4px;
  background-color: #444444;
}

.level .item .index {
  width: 1lh;
  padding: 2px;
  display: block;
  background-color: black;
  text-align: center;
}

.level .item.selected {
  background-color: #cd2701;
}

.level .level-heading {
  display: none;
}
`,kf=`#root {
  max-width: 1280px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  --item-0-color: 215deg, 100%, 50%;
  --item-1-color: 120deg, 100%, 30%;
  --item-2-color: 80deg, 70%, 30%;
  --item-3-color: 0deg, 100%, 40%;
  --item-4-color: 20deg, 100%, 50%;
  --item-5-color: 50deg, 100%, 50%;
  --item-6-color: 25deg, 20%, 60%;
}

* {
  box-sizing: border-box;
}

.root {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
}

.wrapper {
  background-color: black;
  color: white;
  font-weight: 500;
  display: flex;
  overflow: hidden;
}

.menu {
  flex: 1;
  display: flex;
}

.menu > .container {
  display: flex;
  width: max-content;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
}

.menu.scroll-container {
  width: 100%;
  overflow-x: auto;
}

.item {
  display: flex;
  cursor: pointer;
}

.index {
  display: none;
  margin: 4px;
}

.label, .level-heading {
  padding: 4px;
}

.level-0 .item-0.selected {
  background-color: hsl(var(--item-0-color));
}

.level-0.container:has(.item-0.selected) {
  border-right: 2px solid hsl(var(--item-0-color));
}

.level-0 .item-1.selected {
  background-color: hsl(var(--item-1-color));
}

.level-0.container:has(.item-1.selected) {
  border-right: 2px solid hsl(var(--item-1-color));
}

.level-0 .item-2.selected {
  background-color: hsl(var(--item-2-color));
}

.level-0.container:has(.item-2.selected) {
  border-right: 2px solid hsl(var(--item-2-color));
}

.level-0 .item-3.selected {
  background-color: hsl(var(--item-3-color));
}

.level-0.container:has(.item-3.selected) {
  border-right: 2px solid hsl(var(--item-3-color));
}

.level-0 .item-4.selected {
  background-color: hsl(var(--item-4-color));
}

.level-0.container:has(.item-4.selected) {
  border-right: 2px solid hsl(var(--item-4-color));
}

.level-0 .item-5.selected {
  background-color: hsl(var(--item-5-color));
}

.level-0.container:has(.item-5.selected) {
  border-right: 2px solid hsl(var(--item-5-color));
}

.level-0 .item-6.selected, .level-0 .item-7.selected {
  background-color: hsl(var(--item-6-color));
}

.level-0.container:has(.item-6.selected), .level-0.container:has(.item-7.selected) {
  border-right: 2px solid hsl(var(--item-6-color));
}

.level-0 .item .label {
  display: flex;
  font-size: 8px;
}

.level-0 > .level-heading {
  display: none;
}

.level-0 {
  flex: 0;
  font-size: 8px;
  position: absolute;
  background: black;
  height: 100%;
}

.level-0 .item {
  height: 40px;
  width: 40px;
  overflow: hidden;
}

.level-0 .icon {
  display: flex;
  width: 100%;
  justify-content: center;
}

.level-0 .icon img {
  width: 30px;
  height: auto;
}

.level:not(.level-0):not(:nth-last-child(1 of .level)) {
  display: none;
}

.level:not(.level-0) .container {
  position: relative;
  padding-top: 1.3lh;
}

.level:not(.level-0).scroll-container {
  flex: 1;
  margin-left: 46px;
  height: 100%;
  overflow-y: scroll;
}

.level:not(.level-0) .level-heading {
  text-align: center;
  border-bottom: 1px solid #464646;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.3lh;
}

.level-1 .level-heading {
  text-transform: uppercase;
}

.level:not(.level-0) .selected .label {
  background-color: #ffc800;
  color: black;
  flex: 1;
}

.level:not(.level-0) .item {
  margin-top: 4px;
  background-color: #111;
}

.nav-buttons {
  display: none;
}

.level:not(.level-0, .level-1) + .nav-buttons {
  display: flex;
  width: 50px;
  margin-left: -50px;
  margin-top: 2px;
  align-items: flex-start;
}

.back-button {
  cursor: pointer;
  z-index: 1;
  border: 1px solid #464646;
  padding: 0 2px;
  border: 1px solid #464646;
  border-radius: 4px;
}

.back-button::after {
  content: 'Back';
}

.crumb-path.scroll-container {
  display: none;
}

.level {
  display: flex;
  flex-direction: column;
}

.has-help {
  display: none;
}

.container > :nth-last-child(1 of .level) .has-help {
  display: block;
}
`,Pf=`#root {
  max-width: 1280px;

  --selected-color: rgb(243, 198, 67);
  --item-0-border-color: hsl(23, 100%, 34%);
  --item-1-border-color: hsl(23, 100%, 34%);
  --item-2-border-color: hsl(210, 100%, 50%);
  --item-3-border-color: hsl(210, 100%, 50%);
  --item-4-border-color: hsl(292, 100%, 50%);
  --item-5-border-color: hsl(105, 100%, 31%);
}

* {
  box-sizing: border-box;
}

.root {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.container {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.wrapper {
  background-color: black;
  color: white;
  font-weight: 500;
  flex: 1;
  display: flex;
}

.menu {
  display: flex;
  flex: 1;
  position: relative;
}

.menu > .container {
  flex-direction: row;
}

.menu.scroll-container {
  overflow-x: auto;
}

.item {
  display: flex;
  cursor: pointer;
  align-items: center;
}

.scroll-container.level-0 {
  margin-left: 4px;
}

.index:not(.level-0) {
  display: none;
}

.label {
  padding: 4px;
  display: inline-block;
  flex: 1;
}

.level-0.scroll-container {
  display: flex;
}

.level-0.container:after,
.level-0.container:before {
  border-right-width: 2px;
  border-right-style: solid;
  content: '';
  width: 100%;
  display: block;
  right: 2px;
  box-sizing: border-box;
}

.level-0:has(.item-0.selected) .container::before,
.level-0:has(.item-0.selected) .container::after,
.level-0:has(.item-0.selected) .item:not(.selected) {
  border-color: var(--item-0-border-color);
}

.level-0:has(.item-1.selected) .container::before,
.level-0:has(.item-1.selected) .container::after,
.level-0:has(.item-1.selected) .item:not(.selected) {
  border-color: var(--item-1-border-color);
}

.level-0:has(.item-2.selected) .container::before,
.level-0:has(.item-2.selected) .container::after,
.level-0:has(.item-2.selected) .item:not(.selected) {
  border-color: var(--item-2-border-color);
}

.level-0:has(.item-3.selected) .container::before,
.level-0:has(.item-3.selected) .container::after,
.level-0:has(.item-3.selected) .item:not(.selected) {
  border-color: var(--item-3-border-color);
}

.level-0:has(.item-4.selected) .container::before,
.level-0:has(.item-4.selected) .container::after,
.level-0:has(.item-4.selected) .item:not(.selected) {
  border-color: var(--item-4-border-color);
}

.level-0:has(.item-5.selected) .container::before,
.level-0:has(.item-5.selected) .container::after,
.level-0:has(.item-5.selected) .item:not(.selected) {
  border-color: var(--item-5-border-color);
}

.level-0.container:after {
  flex: 1;
}

.level-0.container:before {
  height: 50px;
}

.level-0 .item.selected {
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-style: solid;
  border-right: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.level-0 .item:not(.selected) {
  border-right-width: 2px;
  border-right-style: solid;
}

.level-0 {
  flex: 0;
  font-size: 8px;
}

.level-0 .item {
  height: 40px;
  width: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.level-0 .item .label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.level-0 .item:not(.selected) .label {
  opacity: 0.5;
}

.level-0 .icon {
  display: flex;
  width: 100%;
  justify-content: center;
}

.level-0 .item-0.selected .icon img,
.level-0 .item-1.selected .icon img {
  filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(320deg) brightness(100%) contrast(200%);
}

.level-0 .item-2.selected .icon img,
.level-0 .item-3.selected .icon img {
  filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(190deg) brightness(100%) contrast(200%);
}

.level-0 .item-4.selected .icon img {
  filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(215deg) brightness(85%) contrast(200%);
}

.level-0 .item-5.selected .icon img {
  filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(105deg) brightness(75%) contrast(200%);
}

.level-0 .item-0.selected,
.menu:has(.level-0 .item-0.selected) .level-2 .container {
  border-color: var(--item-0-border-color);
}

.level-0 .item-1.selected,
.menu:has(.level-0 .item-1.selected) .level-2 .container {
  border-color: var(--item-1-border-color);
}

.level-0 .item-2.selected,
.menu:has(.level-0 .item-2.selected) .level-2 .container {
  border-color: var(--item-2-border-color);
}

.level-0 .item-3.selected,
.menu:has(.level-0 .item-3.selected) .level-2 .container {
  border-color: var(--item-3-border-color);
}

.level-0 .item-4.selected,
.menu:has(.level-0 .item-4.selected) .level-2 .container {
  border-color: var(--item-4-border-color);
}

.level-0 .item-5.selected,
.menu:has(.level-0 .item-5.selected) .level-2 .container {
  border-color: var(--item-5-border-color);
}

.level-0 .icon img {
  width: 30px;
  height: auto;
}

.level-1 {
  flex: 0;
  padding: 4px;
}

.level-1 .item {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: stretch;
}

.level-1 .label {
  font-size: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.level-2 {
  flex: 1;
}

.level-2 .item {
  padding: 4px;
}

.level-2 .container {
  border-color: var(--selected-color);
  border-left-width: 2px;
  border-left-style: solid;
  border-top-left-radius: 2px;
  border-top-width: 2px;
  border-top-style: solid;
  width: 20ch;
}

.level-2.scroll-container {
  margin-top: 1lh;
  position: relative;
  display: flex;
}

.level:not(.level-0, .level-1, .level-2) + .nav-buttons .back-button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  content: '';
}

.level:not(.level-0, .level-1) .container {
  padding: 4px;
}

.level:not(.level-0, .level-1, .level-2) .container {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: black;
  border-left: 2px solid gray;
  width: 20ch;
  overflow: auto;
}

.level:not(.level-0) .selected .label {
  background-color: rgb(243, 198, 67);
  color: black;
}

.level:not(.level-0, .level-1) .item:not(.selected):nth-child(even) {
  background-color: rgb(57, 57, 57);
}

.level-2 .level-heading {
  display: block;
  position: absolute;
  height: 1lh;
  top: -1lh;
  text-align: center;
  left: 0;
  right: 0;
  font-size: 90%;
}

.crumb-path {
  display: none;
}

.level-heading {
  display: none;
}

.has-help {
  display: none;
}

.container > :nth-last-child(1 of .level) .has-help {
  display: block;
}
`,Rf=`#root {
  max-width: 1280px;
}

* {
  box-sizing: border-box;
}

.root {
  display: flex;
  flex-direction: column;
  position: relative;
}

.container {
  display: flex;
  flex-direction: column;
}

.wrapper {
  background-color: black;
  color: white;
  font-weight: 500;
}

.menu {
  display: flex;
  flex-wrap: wrap;
}

.item {
  display: flex;
  cursor: pointer;
  align-items: center;
}

.index {
  display: none;
  margin: 4px;
}

.label {
  padding: 4px;
  display: inline-block;
  border-radius: 2px;
  flex: 1;
  margin-right: 4px;
}

.level-0 .item-0, .level-1.category-0 .index {
  background-color: #444444;
}

.level-0 .item-1, .level-1.category-1 .index {
  background-color: #de0937;
}

.level-0 .item-2, .level-1.category-2 .index {
  background-color: #de21a5;
}

.level-0 .item-3, .level-1.category-3 .index {
  background-color: #a324de;
}

.level-0 .item-4, .level-1.category-4 .index {
  background-color: #0b7cde;
}

.level-0 .item-5, .level-1.category-5 .index {
  background-color: #43de3e;
}
.level-0 .item-6, .level-1.category-6 .index {
  background-color: #dea300;
}

.level-0 {
  flex: 0;
  font-size: 8px;
}

.level-0 .item {
  opacity: 0.5;
  height: 40px;
  width: 40px;
  overflow: hidden;
}

.level-0 .label {
  display: none;
}

.level-0 .item.selected {
  opacity: 1;
}

.level-0 .icon {
  display: flex;
  width: 100%;
  justify-content: center;
}

.level-0 .icon img {
  width: 30px;
  height: auto;
}

.level-1 {
  background-color: #181818;
  flex: 1;
  padding-left: 4px;
}

.level-1 .index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.level-1 .selected .label, .level-2 .selected .label {
  background-color: #cd2701;
}

.level-2 {
  background: #292929;
  flex: 1;
}

.level-2 .item {
  padding: 4px;
}

.level-2 .item:not(:first-child) {
  border-top: 1px solid #464646;
}

.level-3 {
}

.crumb-path {
  display: flex;
  flex-direction: row;
  flex: 1 1 100%;
}

.crumb-path > .crumb:not(:last-child):after {
  content: '>';
  margin: 0 5px;
}

.crumb {
  display: flex;
  flex-wrap: nowrap;
}

.has-help {
  display: none;
}

.container > :nth-last-child(1 of .level) .has-help {
  display: block;
}`,Tf=`#root {
  max-width: 1280px;
  --border-color: rgb(197, 197, 197);
  display: flex;
}

* {
  box-sizing: border-box;
}

.root {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  max-height: 500px;
}

.container {
  display: flex;
  flex-direction: column;
}

.wrapper {
  background-color: black;
  color: white;
  font-weight: 500;
  flex: 1;
  display: flex;
}

.menu {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.menu > .container {
  width: 100%;
  position: relative;
}

.item {
  display: flex;
  cursor: pointer;
  align-items: center;
}

.index {
  display: none;
  margin: 4px;
}

.label {
  padding: 4px;
  display: inline-block;
  flex: 1;
}

.level-0.scroll-container {
  width: 100%;
}

.level-0.container {
  display: flex;
  flex-direction: row;
}

.level-0.container::before {
  width: 10px;
}

.level-0.container::after {
  flex: 1;
}
.level-0 .item-0 {
  background: linear-gradient(0deg, hsl(0, 100%, 18%), black);
}

.level-0 .item-0.selected {
  background: linear-gradient(180deg, hsl(0, 100%, 27%), black);
}

.level-0 .item-1 {
  background: linear-gradient(0deg, hsl(277, 100%, 18%), black);
}

.level-0 .item-1.selected {
  background: linear-gradient(180deg, hsl(277, 100%, 27%), black);
}

.level-0 .item-2 {
  background: linear-gradient(0deg, hsl(154, 100%, 18%), black);
}

.level-0 .item-2.selected {
  background: linear-gradient(180deg, hsl(154, 100%, 27%), black);
}

.level-0 .item-3 {
  background: linear-gradient(0deg, hsl(198, 100%, 18%), black);
}

.level-0 .item-3.selected {
  background: linear-gradient(180deg, hsl(198, 100%, 27%), black);
}

.level-0 .item-4 {
  background: linear-gradient(0deg, hsl(50, 100%, 18%), black);
}

.level-0 .item-4.selected {
  background: linear-gradient(180deg, hsl(50, 100%, 35%), black);
}

.level-0 .item-5 {
  background: linear-gradient(0deg, hsl(50, 0%, 18%), black);
}

.level-0 .item-5.selected {
  background: linear-gradient(180deg, hsl(50, 0%, 35%), black);
}

.level-0 {
  flex: 0;
  font-size: 8px;
}

.level-0.container::before, .level-0.container::after {
  border-bottom: 1px solid var(--border-color);
  content: '';
}

.level-0 .item {
  height: 40px;
  width: 50px;
  overflow: hidden;
}

.level-0 .item {
  border-bottom: 1px solid var(--border-color);
}

.level-0 .label {
  font-size: 0;
}

.level-0 .item.selected {
  opacity: 1;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-top: 1px solid var(--border-color);
  border-bottom: none;
}

.level-0 .icon {
  display: flex;
  width: 100%;
  justify-content: center;
}

.level-0 .icon img {
  width: 30px;
  height: auto;
}

.level-1 {
  flex: 1;
}

.level-1.scroll-container {
  flex-grow: 0;
}

.level-1.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  border-bottom: 1px solid var(--border-color);
  justify-content: center;
  padding-bottom: 4px;
  min-height: 62px;
  counter-reset: item-counter;
  position: relative;
}

.level-1 .item {
  text-align: center;
  counter-increment: item-counter;
}

.level-1 .item.selected::after {
  content: counter(item-counter);
  display: block;
  order: 2;
  position: absolute;
  top: 4px;
  right: 3.3ch;
}

.level-1.container::after {
  content: "/ " counter(item-counter);
  display: block;
  position: absolute;
  top: 4px;
  right: 4px;
}

.level-1 .item.selected {
  order: 0;
  flex-basis: 100%;
  padding: 0 10px;
}

.level-1 .item.selected + .item::before {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  background: linear-gradient(180deg, hsl(22, 100%, 36%), hsl(22, 100%, 22%));
  flex-grow: 0;
  margin: 4px;
}

.level-1 .item:not(.selected) {
  order: 3;
}

.level-1 .item:not(.selected)::after {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  background: linear-gradient(180deg, hsl(22, 0%, 36%), hsl(22, 0%, 22%));
  flex-grow: 0;
  margin: 4px;
}

.level-1 .item:not(.selected) .label {
  display: none;
}

.level-1 .level-heading, .level-2 .level-heading {
  display: none;
}

.level-1 .index {
  display: none;
}

.level-2.scroll-container {
  margin-top: 1px;
}

.level-2 .selected .label, .level-3 .selected .label  {
  border: 1px solid #ff7300;
  background: linear-gradient(180deg, hsl(22, 100%, 36%), hsl(22, 100%, 22%));
}

.level-2 .item {
  margin: 0 10px;
}

.level-3.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 10px 40px;
  background-color: #101010;
  border: 1px solid white;
}

.level-3.scroll-container::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #101010;
  opacity: 0.5;
  pointer-events: none;
}

.level-3 .level-heading  {
  border-bottom: 1px solid gray;
  padding: 4px 8px;
}

.level-3 .item {
  padding: 4px;
  margin: 0 10px;
}

.level-3 .label {
  display: flex;
  align-items: center;
  gap: 6px;
}

.level-3 .label::before {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  background-color: rgb(137, 137, 137);
  border: 1px solid black;
  border-radius: 50%;
}

.level-3 .selected .label::before {
  background: linear-gradient(180deg, #cd6001, #8a2501);
}

.level-3 .item {
  border-bottom: 1px solid #2a2a2a;
}

.nav-buttons {
  display: none;
}

.level-3 ~ .nav-buttons {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid gray;
  position: absolute;
  bottom: 10px;
  right: 40px;
  left: 40px;
  padding: 4px;
}

.back-button::after {
  content: 'Back';
  padding: 4px 8px;
  cursor: pointer;
}

.crumb-path {
  display: none;
}


.has-help {
  display: none;
}

.container > :nth-last-child(1 of .level) .has-help {
  display: block;
}`,Df=`#root {
  max-width: 1280px;
}

* {
  box-sizing: border-box;
}

.root {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  min-height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
}

.wrapper {
  background-color: black;
  color: white;
  font-weight: 500;
}

.menu {
  width: 100%;
  min-height: 100%;
}

.menu > .container {
  display: flex;
  width: max-content;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
}

.menu.scroll-container {
  width: 100%;
  overflow-x: auto;
}

.item {
  display: flex;
  cursor: pointer;
  align-items: center;
}

.index {
  display: none;
  margin: 4px;
}

.label {
  padding: 4px;
  display: inline-block;
  border-radius: 2px;
  flex: 1;
  display: flex;
  gap: 4px;
}

.level-0 .item-0,
.level-1.category-0 .index {
  background-color: #444444;
}

.level-0 .item-1,
.level-1.category-1 .index {
  background-color: #de0937;
}

.level-0 .item-2,
.level-1.category-2 .index {
  background-color: #de21a5;
}

.level-0 .item-3,
.level-1.category-3 .index {
  background-color: #a324de;
}

.level-0 .item-4,
.level-1.category-4 .index {
  background-color: #0b7cde;
}

.level-0 .item-5,
.level-1.category-5 .index {
  background-color: #43de3e;
}
.level-0 .item-6,
.level-1.category-6 .index {
  background-color: #dea300;
}

.level-0 > .level-heading,
.level-1 > .level-heading, 
.level-2 > .level-heading {
  display: none;
}

.level-1.container,
.level-2.container,
.level-3.container,
.level-4.container,
.level-5.container,
.level-6.container {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 20ch;
}

.level-1.scroll-container,
.level-2.scroll-container,
.level-3.scroll-container,
.level-4.scroll-container,
.level-5.scroll-container,
.level-6.scroll-container {
  margin-top: 1lh;
}

.level-3.container,
.level-4.container,
.level-5.container {
  margin-left: 2px;
  margin-right: 2px;
  border: 1px solid gray;
  background-color: gray;
  color: white;
}

.level-3 > .level-heading,
.level-4 > .level-heading,
.level-5 > .level-heading {
  background-color: black;
  border: 1px solid gray;
  margin-left: 2px;
  margin-right: 2px;
  padding: 4px;
}

.level-1.scroll-container {
  margin-left: 40px;
}

.level-0 {
  flex: 0;
  font-size: 8px;
  position: absolute;
  background: black;
  height: 100%;
  margin-top: 1lh;
}

.level-0 .item {
  opacity: 0.5;
  height: 40px;
  width: 40px;
  overflow: hidden;
}

.level-0 .label {
  font-size: 0;
}

.level-0 .item.selected {
  opacity: 1;
}

.level-0 .icon {
  display: flex;
  width: 100%;
  justify-content: center;
}

.level-0 .icon img {
  width: 30px;
  height: auto;
}

.level-1 {
  background-color: #181818;
}

.level-1 .scroll-container {
  padding-left: 40px;
}

.level-1 .index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.level-1 .selected .label,
.level-2 .selected .label,
.level-3 .selected .label,
.level-4 .selected .label,
.level-5 .selected .label,
.level-6 .selected .label {
  background-color: #cd2701;
}

.level-2 {
  background: #292929;
  flex: 1;
}

.level-1 .item {
  padding-right: 4px;
}

.level-2 .item,
.level-3 .item,
.level-4 .item,
.level-5 .item,
.level-6 .item {
  padding: 4px;
}

.level-2 .item:not(:first-child) {
  border-top: 1px solid #464646;
}

.crumb-path {
  display: flex;
  flex-direction: row;
  flex: 1 1 100%;
  height: 1lh;
  position: absolute;
  z-index: 1;
}

.crumb-path .container {
  display: flex;
  flex-direction: row;
}

.crumb-separator:after {
  content: '>';
  margin: 0 5px;
}

.crumb-separator:first-of-type,
.crumb-separator:last-of-type {
  display: none;
}

.crumb {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.scroll-container.crumb-path {
  overflow-x: auto;
  width: 100%;
}

.level {
  display: flex;
  flex-direction: column;
  background-color: black;
}

.level:not(.level-0, .level-1) {
  overflow: hidden;
  filter: drop-shadow(0px -5px 10px #000000);
}

.level:not(.level-0, .level-1):not(:nth-last-child(1 of .level)),
.level:not(.level-0):has(+ .level + .level) {
  width: 50px;
}

.has-help {
  display: none;
}

.container > :nth-last-child(1 of .level) .has-help {
  display: block;
}`,Ef="camera-menu-db",Ao="custom-cameras",xf=1,Jl=()=>new Promise((x,X)=>{const u=indexedDB.open(Ef,xf);u.onerror=()=>X(u.error),u.onsuccess=()=>x(u.result),u.onupgradeneeded=f=>{const b=f.target.result;b.objectStoreNames.contains(Ao)||b.createObjectStore(Ao,{keyPath:"id"})}}),Ir=async x=>{const X=await Jl();return new Promise((u,f)=>{const g=X.transaction([Ao],"readwrite").objectStore(Ao).put(x);g.onsuccess=()=>u(),g.onerror=()=>f(g.error)})},If=async()=>{const x=await Jl();return new Promise((X,u)=>{const h=x.transaction([Ao],"readonly").objectStore(Ao).getAll();h.onsuccess=()=>X(h.result||[]),h.onerror=()=>u(h.error)})},Nf=async x=>{const X=await Jl();return new Promise((u,f)=>{const g=X.transaction([Ao],"readwrite").objectStore(Ao).delete(x);g.onsuccess=()=>u(),g.onerror=()=>f(g.error)})};function Nr(x){throw new Error('Could not dynamically require "'+x+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Yl={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Em;function Lf(){return Em||(Em=1,function(x,X){(function(u){x.exports=u()})(function(){return function u(f,b,h){function g(p,T){if(!b[p]){if(!f[p]){var O=typeof Nr=="function"&&Nr;if(!T&&O)return O(p,!0);if(c)return c(p,!0);var R=new Error("Cannot find module '"+p+"'");throw R.code="MODULE_NOT_FOUND",R}var y=b[p]={exports:{}};f[p][0].call(y.exports,function(A){var d=f[p][1][A];return g(d||A)},y,y.exports,u,f,b,h)}return b[p].exports}for(var c=typeof Nr=="function"&&Nr,m=0;m<h.length;m++)g(h[m]);return g}({1:[function(u,f,b){var h=u("./utils"),g=u("./support"),c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";b.encode=function(m){for(var p,T,O,R,y,A,d,C=[],v=0,k=m.length,N=k,_=h.getTypeOf(m)!=="string";v<m.length;)N=k-v,O=_?(p=m[v++],T=v<k?m[v++]:0,v<k?m[v++]:0):(p=m.charCodeAt(v++),T=v<k?m.charCodeAt(v++):0,v<k?m.charCodeAt(v++):0),R=p>>2,y=(3&p)<<4|T>>4,A=1<N?(15&T)<<2|O>>6:64,d=2<N?63&O:64,C.push(c.charAt(R)+c.charAt(y)+c.charAt(A)+c.charAt(d));return C.join("")},b.decode=function(m){var p,T,O,R,y,A,d=0,C=0,v="data:";if(m.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var k,N=3*(m=m.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(m.charAt(m.length-1)===c.charAt(64)&&N--,m.charAt(m.length-2)===c.charAt(64)&&N--,N%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=g.uint8array?new Uint8Array(0|N):new Array(0|N);d<m.length;)p=c.indexOf(m.charAt(d++))<<2|(R=c.indexOf(m.charAt(d++)))>>4,T=(15&R)<<4|(y=c.indexOf(m.charAt(d++)))>>2,O=(3&y)<<6|(A=c.indexOf(m.charAt(d++))),k[C++]=p,y!==64&&(k[C++]=T),A!==64&&(k[C++]=O);return k}},{"./support":30,"./utils":32}],2:[function(u,f,b){var h=u("./external"),g=u("./stream/DataWorker"),c=u("./stream/Crc32Probe"),m=u("./stream/DataLengthProbe");function p(T,O,R,y,A){this.compressedSize=T,this.uncompressedSize=O,this.crc32=R,this.compression=y,this.compressedContent=A}p.prototype={getContentWorker:function(){var T=new g(h.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new m("data_length")),O=this;return T.on("end",function(){if(this.streamInfo.data_length!==O.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),T},getCompressedWorker:function(){return new g(h.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},p.createWorkerFrom=function(T,O,R){return T.pipe(new c).pipe(new m("uncompressedSize")).pipe(O.compressWorker(R)).pipe(new m("compressedSize")).withStreamInfo("compression",O)},f.exports=p},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(u,f,b){var h=u("./stream/GenericWorker");b.STORE={magic:"\0\0",compressWorker:function(){return new h("STORE compression")},uncompressWorker:function(){return new h("STORE decompression")}},b.DEFLATE=u("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(u,f,b){var h=u("./utils"),g=function(){for(var c,m=[],p=0;p<256;p++){c=p;for(var T=0;T<8;T++)c=1&c?3988292384^c>>>1:c>>>1;m[p]=c}return m}();f.exports=function(c,m){return c!==void 0&&c.length?h.getTypeOf(c)!=="string"?function(p,T,O,R){var y=g,A=R+O;p^=-1;for(var d=R;d<A;d++)p=p>>>8^y[255&(p^T[d])];return-1^p}(0|m,c,c.length,0):function(p,T,O,R){var y=g,A=R+O;p^=-1;for(var d=R;d<A;d++)p=p>>>8^y[255&(p^T.charCodeAt(d))];return-1^p}(0|m,c,c.length,0):0}},{"./utils":32}],5:[function(u,f,b){b.base64=!1,b.binary=!1,b.dir=!1,b.createFolders=!0,b.date=null,b.compression=null,b.compressionOptions=null,b.comment=null,b.unixPermissions=null,b.dosPermissions=null},{}],6:[function(u,f,b){var h=null;h=typeof Promise<"u"?Promise:u("lie"),f.exports={Promise:h}},{lie:37}],7:[function(u,f,b){var h=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",g=u("pako"),c=u("./utils"),m=u("./stream/GenericWorker"),p=h?"uint8array":"array";function T(O,R){m.call(this,"FlateWorker/"+O),this._pako=null,this._pakoAction=O,this._pakoOptions=R,this.meta={}}b.magic="\b\0",c.inherits(T,m),T.prototype.processChunk=function(O){this.meta=O.meta,this._pako===null&&this._createPako(),this._pako.push(c.transformTo(p,O.data),!1)},T.prototype.flush=function(){m.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},T.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this._pako=null},T.prototype._createPako=function(){this._pako=new g[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var O=this;this._pako.onData=function(R){O.push({data:R,meta:O.meta})}},b.compressWorker=function(O){return new T("Deflate",O)},b.uncompressWorker=function(){return new T("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(u,f,b){function h(y,A){var d,C="";for(d=0;d<A;d++)C+=String.fromCharCode(255&y),y>>>=8;return C}function g(y,A,d,C,v,k){var N,_,I=y.file,$=y.compression,J=k!==p.utf8encode,ge=c.transformTo("string",k(I.name)),B=c.transformTo("string",p.utf8encode(I.name)),re=I.comment,we=c.transformTo("string",k(re)),E=c.transformTo("string",p.utf8encode(re)),K=B.length!==I.name.length,l=E.length!==re.length,te="",ie="",q="",pe=I.dir,ue=I.date,w={crc32:0,compressedSize:0,uncompressedSize:0};A&&!d||(w.crc32=y.crc32,w.compressedSize=y.compressedSize,w.uncompressedSize=y.uncompressedSize);var D=0;A&&(D|=8),J||!K&&!l||(D|=2048);var L=0,ne=0;pe&&(L|=16),v==="UNIX"?(ne=798,L|=function(ce,Me){var Ue=ce;return ce||(Ue=Me?16893:33204),(65535&Ue)<<16}(I.unixPermissions,pe)):(ne=20,L|=function(ce){return 63&(ce||0)}(I.dosPermissions)),N=ue.getUTCHours(),N<<=6,N|=ue.getUTCMinutes(),N<<=5,N|=ue.getUTCSeconds()/2,_=ue.getUTCFullYear()-1980,_<<=4,_|=ue.getUTCMonth()+1,_<<=5,_|=ue.getUTCDate(),K&&(ie=h(1,1)+h(T(ge),4)+B,te+="up"+h(ie.length,2)+ie),l&&(q=h(1,1)+h(T(we),4)+E,te+="uc"+h(q.length,2)+q);var Q="";return Q+=`
\0`,Q+=h(D,2),Q+=$.magic,Q+=h(N,2),Q+=h(_,2),Q+=h(w.crc32,4),Q+=h(w.compressedSize,4),Q+=h(w.uncompressedSize,4),Q+=h(ge.length,2),Q+=h(te.length,2),{fileRecord:O.LOCAL_FILE_HEADER+Q+ge+te,dirRecord:O.CENTRAL_FILE_HEADER+h(ne,2)+Q+h(we.length,2)+"\0\0\0\0"+h(L,4)+h(C,4)+ge+te+we}}var c=u("../utils"),m=u("../stream/GenericWorker"),p=u("../utf8"),T=u("../crc32"),O=u("../signature");function R(y,A,d,C){m.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=A,this.zipPlatform=d,this.encodeFileName=C,this.streamFiles=y,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}c.inherits(R,m),R.prototype.push=function(y){var A=y.meta.percent||0,d=this.entriesCount,C=this._sources.length;this.accumulate?this.contentBuffer.push(y):(this.bytesWritten+=y.data.length,m.prototype.push.call(this,{data:y.data,meta:{currentFile:this.currentFile,percent:d?(A+100*(d-C-1))/d:100}}))},R.prototype.openedSource=function(y){this.currentSourceOffset=this.bytesWritten,this.currentFile=y.file.name;var A=this.streamFiles&&!y.file.dir;if(A){var d=g(y,A,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:d.fileRecord,meta:{percent:0}})}else this.accumulate=!0},R.prototype.closedSource=function(y){this.accumulate=!1;var A=this.streamFiles&&!y.file.dir,d=g(y,A,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(d.dirRecord),A)this.push({data:function(C){return O.DATA_DESCRIPTOR+h(C.crc32,4)+h(C.compressedSize,4)+h(C.uncompressedSize,4)}(y),meta:{percent:100}});else for(this.push({data:d.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},R.prototype.flush=function(){for(var y=this.bytesWritten,A=0;A<this.dirRecords.length;A++)this.push({data:this.dirRecords[A],meta:{percent:100}});var d=this.bytesWritten-y,C=function(v,k,N,_,I){var $=c.transformTo("string",I(_));return O.CENTRAL_DIRECTORY_END+"\0\0\0\0"+h(v,2)+h(v,2)+h(k,4)+h(N,4)+h($.length,2)+$}(this.dirRecords.length,d,y,this.zipComment,this.encodeFileName);this.push({data:C,meta:{percent:100}})},R.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},R.prototype.registerPrevious=function(y){this._sources.push(y);var A=this;return y.on("data",function(d){A.processChunk(d)}),y.on("end",function(){A.closedSource(A.previous.streamInfo),A._sources.length?A.prepareNextSource():A.end()}),y.on("error",function(d){A.error(d)}),this},R.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},R.prototype.error=function(y){var A=this._sources;if(!m.prototype.error.call(this,y))return!1;for(var d=0;d<A.length;d++)try{A[d].error(y)}catch{}return!0},R.prototype.lock=function(){m.prototype.lock.call(this);for(var y=this._sources,A=0;A<y.length;A++)y[A].lock()},f.exports=R},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(u,f,b){var h=u("../compressions"),g=u("./ZipFileWorker");b.generateWorker=function(c,m,p){var T=new g(m.streamFiles,p,m.platform,m.encodeFileName),O=0;try{c.forEach(function(R,y){O++;var A=function(k,N){var _=k||N,I=h[_];if(!I)throw new Error(_+" is not a valid compression method !");return I}(y.options.compression,m.compression),d=y.options.compressionOptions||m.compressionOptions||{},C=y.dir,v=y.date;y._compressWorker(A,d).withStreamInfo("file",{name:R,dir:C,date:v,comment:y.comment||"",unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions}).pipe(T)}),T.entriesCount=O}catch(R){T.error(R)}return T}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(u,f,b){function h(){if(!(this instanceof h))return new h;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var g=new h;for(var c in this)typeof this[c]!="function"&&(g[c]=this[c]);return g}}(h.prototype=u("./object")).loadAsync=u("./load"),h.support=u("./support"),h.defaults=u("./defaults"),h.version="3.10.1",h.loadAsync=function(g,c){return new h().loadAsync(g,c)},h.external=u("./external"),f.exports=h},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(u,f,b){var h=u("./utils"),g=u("./external"),c=u("./utf8"),m=u("./zipEntries"),p=u("./stream/Crc32Probe"),T=u("./nodejsUtils");function O(R){return new g.Promise(function(y,A){var d=R.decompressed.getContentWorker().pipe(new p);d.on("error",function(C){A(C)}).on("end",function(){d.streamInfo.crc32!==R.decompressed.crc32?A(new Error("Corrupted zip : CRC32 mismatch")):y()}).resume()})}f.exports=function(R,y){var A=this;return y=h.extend(y||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:c.utf8decode}),T.isNode&&T.isStream(R)?g.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):h.prepareContent("the loaded zip file",R,!0,y.optimizedBinaryString,y.base64).then(function(d){var C=new m(y);return C.load(d),C}).then(function(d){var C=[g.Promise.resolve(d)],v=d.files;if(y.checkCRC32)for(var k=0;k<v.length;k++)C.push(O(v[k]));return g.Promise.all(C)}).then(function(d){for(var C=d.shift(),v=C.files,k=0;k<v.length;k++){var N=v[k],_=N.fileNameStr,I=h.resolve(N.fileNameStr);A.file(I,N.decompressed,{binary:!0,optimizedBinaryString:!0,date:N.date,dir:N.dir,comment:N.fileCommentStr.length?N.fileCommentStr:null,unixPermissions:N.unixPermissions,dosPermissions:N.dosPermissions,createFolders:y.createFolders}),N.dir||(A.file(I).unsafeOriginalName=_)}return C.zipComment.length&&(A.comment=C.zipComment),A})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(u,f,b){var h=u("../utils"),g=u("../stream/GenericWorker");function c(m,p){g.call(this,"Nodejs stream input adapter for "+m),this._upstreamEnded=!1,this._bindStream(p)}h.inherits(c,g),c.prototype._bindStream=function(m){var p=this;(this._stream=m).pause(),m.on("data",function(T){p.push({data:T,meta:{percent:0}})}).on("error",function(T){p.isPaused?this.generatedError=T:p.error(T)}).on("end",function(){p.isPaused?p._upstreamEnded=!0:p.end()})},c.prototype.pause=function(){return!!g.prototype.pause.call(this)&&(this._stream.pause(),!0)},c.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},f.exports=c},{"../stream/GenericWorker":28,"../utils":32}],13:[function(u,f,b){var h=u("readable-stream").Readable;function g(c,m,p){h.call(this,m),this._helper=c;var T=this;c.on("data",function(O,R){T.push(O)||T._helper.pause(),p&&p(R)}).on("error",function(O){T.emit("error",O)}).on("end",function(){T.push(null)})}u("../utils").inherits(g,h),g.prototype._read=function(){this._helper.resume()},f.exports=g},{"../utils":32,"readable-stream":16}],14:[function(u,f,b){f.exports={isNode:typeof Buffer<"u",newBufferFrom:function(h,g){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(h,g);if(typeof h=="number")throw new Error('The "data" argument must not be a number');return new Buffer(h,g)},allocBuffer:function(h){if(Buffer.alloc)return Buffer.alloc(h);var g=new Buffer(h);return g.fill(0),g},isBuffer:function(h){return Buffer.isBuffer(h)},isStream:function(h){return h&&typeof h.on=="function"&&typeof h.pause=="function"&&typeof h.resume=="function"}}},{}],15:[function(u,f,b){function h(I,$,J){var ge,B=c.getTypeOf($),re=c.extend(J||{},T);re.date=re.date||new Date,re.compression!==null&&(re.compression=re.compression.toUpperCase()),typeof re.unixPermissions=="string"&&(re.unixPermissions=parseInt(re.unixPermissions,8)),re.unixPermissions&&16384&re.unixPermissions&&(re.dir=!0),re.dosPermissions&&16&re.dosPermissions&&(re.dir=!0),re.dir&&(I=v(I)),re.createFolders&&(ge=C(I))&&k.call(this,ge,!0);var we=B==="string"&&re.binary===!1&&re.base64===!1;J&&J.binary!==void 0||(re.binary=!we),($ instanceof O&&$.uncompressedSize===0||re.dir||!$||$.length===0)&&(re.base64=!1,re.binary=!0,$="",re.compression="STORE",B="string");var E=null;E=$ instanceof O||$ instanceof m?$:A.isNode&&A.isStream($)?new d(I,$):c.prepareContent(I,$,re.binary,re.optimizedBinaryString,re.base64);var K=new R(I,E,re);this.files[I]=K}var g=u("./utf8"),c=u("./utils"),m=u("./stream/GenericWorker"),p=u("./stream/StreamHelper"),T=u("./defaults"),O=u("./compressedObject"),R=u("./zipObject"),y=u("./generate"),A=u("./nodejsUtils"),d=u("./nodejs/NodejsStreamInputAdapter"),C=function(I){I.slice(-1)==="/"&&(I=I.substring(0,I.length-1));var $=I.lastIndexOf("/");return 0<$?I.substring(0,$):""},v=function(I){return I.slice(-1)!=="/"&&(I+="/"),I},k=function(I,$){return $=$!==void 0?$:T.createFolders,I=v(I),this.files[I]||h.call(this,I,null,{dir:!0,createFolders:$}),this.files[I]};function N(I){return Object.prototype.toString.call(I)==="[object RegExp]"}var _={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(I){var $,J,ge;for($ in this.files)ge=this.files[$],(J=$.slice(this.root.length,$.length))&&$.slice(0,this.root.length)===this.root&&I(J,ge)},filter:function(I){var $=[];return this.forEach(function(J,ge){I(J,ge)&&$.push(ge)}),$},file:function(I,$,J){if(arguments.length!==1)return I=this.root+I,h.call(this,I,$,J),this;if(N(I)){var ge=I;return this.filter(function(re,we){return!we.dir&&ge.test(re)})}var B=this.files[this.root+I];return B&&!B.dir?B:null},folder:function(I){if(!I)return this;if(N(I))return this.filter(function(B,re){return re.dir&&I.test(B)});var $=this.root+I,J=k.call(this,$),ge=this.clone();return ge.root=J.name,ge},remove:function(I){I=this.root+I;var $=this.files[I];if($||(I.slice(-1)!=="/"&&(I+="/"),$=this.files[I]),$&&!$.dir)delete this.files[I];else for(var J=this.filter(function(B,re){return re.name.slice(0,I.length)===I}),ge=0;ge<J.length;ge++)delete this.files[J[ge].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(I){var $,J={};try{if((J=c.extend(I||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:g.utf8encode})).type=J.type.toLowerCase(),J.compression=J.compression.toUpperCase(),J.type==="binarystring"&&(J.type="string"),!J.type)throw new Error("No output type specified.");c.checkSupport(J.type),J.platform!=="darwin"&&J.platform!=="freebsd"&&J.platform!=="linux"&&J.platform!=="sunos"||(J.platform="UNIX"),J.platform==="win32"&&(J.platform="DOS");var ge=J.comment||this.comment||"";$=y.generateWorker(this,J,ge)}catch(B){($=new m("error")).error(B)}return new p($,J.type||"string",J.mimeType)},generateAsync:function(I,$){return this.generateInternalStream(I).accumulate($)},generateNodeStream:function(I,$){return(I=I||{}).type||(I.type="nodebuffer"),this.generateInternalStream(I).toNodejsStream($)}};f.exports=_},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(u,f,b){f.exports=u("stream")},{stream:void 0}],17:[function(u,f,b){var h=u("./DataReader");function g(c){h.call(this,c);for(var m=0;m<this.data.length;m++)c[m]=255&c[m]}u("../utils").inherits(g,h),g.prototype.byteAt=function(c){return this.data[this.zero+c]},g.prototype.lastIndexOfSignature=function(c){for(var m=c.charCodeAt(0),p=c.charCodeAt(1),T=c.charCodeAt(2),O=c.charCodeAt(3),R=this.length-4;0<=R;--R)if(this.data[R]===m&&this.data[R+1]===p&&this.data[R+2]===T&&this.data[R+3]===O)return R-this.zero;return-1},g.prototype.readAndCheckSignature=function(c){var m=c.charCodeAt(0),p=c.charCodeAt(1),T=c.charCodeAt(2),O=c.charCodeAt(3),R=this.readData(4);return m===R[0]&&p===R[1]&&T===R[2]&&O===R[3]},g.prototype.readData=function(c){if(this.checkOffset(c),c===0)return[];var m=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,m},f.exports=g},{"../utils":32,"./DataReader":18}],18:[function(u,f,b){var h=u("../utils");function g(c){this.data=c,this.length=c.length,this.index=0,this.zero=0}g.prototype={checkOffset:function(c){this.checkIndex(this.index+c)},checkIndex:function(c){if(this.length<this.zero+c||c<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+c+"). Corrupted zip ?")},setIndex:function(c){this.checkIndex(c),this.index=c},skip:function(c){this.setIndex(this.index+c)},byteAt:function(){},readInt:function(c){var m,p=0;for(this.checkOffset(c),m=this.index+c-1;m>=this.index;m--)p=(p<<8)+this.byteAt(m);return this.index+=c,p},readString:function(c){return h.transformTo("string",this.readData(c))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var c=this.readInt(4);return new Date(Date.UTC(1980+(c>>25&127),(c>>21&15)-1,c>>16&31,c>>11&31,c>>5&63,(31&c)<<1))}},f.exports=g},{"../utils":32}],19:[function(u,f,b){var h=u("./Uint8ArrayReader");function g(c){h.call(this,c)}u("../utils").inherits(g,h),g.prototype.readData=function(c){this.checkOffset(c);var m=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,m},f.exports=g},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(u,f,b){var h=u("./DataReader");function g(c){h.call(this,c)}u("../utils").inherits(g,h),g.prototype.byteAt=function(c){return this.data.charCodeAt(this.zero+c)},g.prototype.lastIndexOfSignature=function(c){return this.data.lastIndexOf(c)-this.zero},g.prototype.readAndCheckSignature=function(c){return c===this.readData(4)},g.prototype.readData=function(c){this.checkOffset(c);var m=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,m},f.exports=g},{"../utils":32,"./DataReader":18}],21:[function(u,f,b){var h=u("./ArrayReader");function g(c){h.call(this,c)}u("../utils").inherits(g,h),g.prototype.readData=function(c){if(this.checkOffset(c),c===0)return new Uint8Array(0);var m=this.data.subarray(this.zero+this.index,this.zero+this.index+c);return this.index+=c,m},f.exports=g},{"../utils":32,"./ArrayReader":17}],22:[function(u,f,b){var h=u("../utils"),g=u("../support"),c=u("./ArrayReader"),m=u("./StringReader"),p=u("./NodeBufferReader"),T=u("./Uint8ArrayReader");f.exports=function(O){var R=h.getTypeOf(O);return h.checkSupport(R),R!=="string"||g.uint8array?R==="nodebuffer"?new p(O):g.uint8array?new T(h.transformTo("uint8array",O)):new c(h.transformTo("array",O)):new m(O)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(u,f,b){b.LOCAL_FILE_HEADER="PK",b.CENTRAL_FILE_HEADER="PK",b.CENTRAL_DIRECTORY_END="PK",b.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",b.ZIP64_CENTRAL_DIRECTORY_END="PK",b.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(u,f,b){var h=u("./GenericWorker"),g=u("../utils");function c(m){h.call(this,"ConvertWorker to "+m),this.destType=m}g.inherits(c,h),c.prototype.processChunk=function(m){this.push({data:g.transformTo(this.destType,m.data),meta:m.meta})},f.exports=c},{"../utils":32,"./GenericWorker":28}],25:[function(u,f,b){var h=u("./GenericWorker"),g=u("../crc32");function c(){h.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}u("../utils").inherits(c,h),c.prototype.processChunk=function(m){this.streamInfo.crc32=g(m.data,this.streamInfo.crc32||0),this.push(m)},f.exports=c},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(u,f,b){var h=u("../utils"),g=u("./GenericWorker");function c(m){g.call(this,"DataLengthProbe for "+m),this.propName=m,this.withStreamInfo(m,0)}h.inherits(c,g),c.prototype.processChunk=function(m){if(m){var p=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=p+m.data.length}g.prototype.processChunk.call(this,m)},f.exports=c},{"../utils":32,"./GenericWorker":28}],27:[function(u,f,b){var h=u("../utils"),g=u("./GenericWorker");function c(m){g.call(this,"DataWorker");var p=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,m.then(function(T){p.dataIsReady=!0,p.data=T,p.max=T&&T.length||0,p.type=h.getTypeOf(T),p.isPaused||p._tickAndRepeat()},function(T){p.error(T)})}h.inherits(c,g),c.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this.data=null},c.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,h.delay(this._tickAndRepeat,[],this)),!0)},c.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(h.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},c.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var m=null,p=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":m=this.data.substring(this.index,p);break;case"uint8array":m=this.data.subarray(this.index,p);break;case"array":case"nodebuffer":m=this.data.slice(this.index,p)}return this.index=p,this.push({data:m,meta:{percent:this.max?this.index/this.max*100:0}})},f.exports=c},{"../utils":32,"./GenericWorker":28}],28:[function(u,f,b){function h(g){this.name=g||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}h.prototype={push:function(g){this.emit("data",g)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(g){this.emit("error",g)}return!0},error:function(g){return!this.isFinished&&(this.isPaused?this.generatedError=g:(this.isFinished=!0,this.emit("error",g),this.previous&&this.previous.error(g),this.cleanUp()),!0)},on:function(g,c){return this._listeners[g].push(c),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(g,c){if(this._listeners[g])for(var m=0;m<this._listeners[g].length;m++)this._listeners[g][m].call(this,c)},pipe:function(g){return g.registerPrevious(this)},registerPrevious:function(g){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=g.streamInfo,this.mergeStreamInfo(),this.previous=g;var c=this;return g.on("data",function(m){c.processChunk(m)}),g.on("end",function(){c.end()}),g.on("error",function(m){c.error(m)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var g=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),g=!0),this.previous&&this.previous.resume(),!g},flush:function(){},processChunk:function(g){this.push(g)},withStreamInfo:function(g,c){return this.extraStreamInfo[g]=c,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var g in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,g)&&(this.streamInfo[g]=this.extraStreamInfo[g])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var g="Worker "+this.name;return this.previous?this.previous+" -> "+g:g}},f.exports=h},{}],29:[function(u,f,b){var h=u("../utils"),g=u("./ConvertWorker"),c=u("./GenericWorker"),m=u("../base64"),p=u("../support"),T=u("../external"),O=null;if(p.nodestream)try{O=u("../nodejs/NodejsStreamOutputAdapter")}catch{}function R(A,d){return new T.Promise(function(C,v){var k=[],N=A._internalType,_=A._outputType,I=A._mimeType;A.on("data",function($,J){k.push($),d&&d(J)}).on("error",function($){k=[],v($)}).on("end",function(){try{var $=function(J,ge,B){switch(J){case"blob":return h.newBlob(h.transformTo("arraybuffer",ge),B);case"base64":return m.encode(ge);default:return h.transformTo(J,ge)}}(_,function(J,ge){var B,re=0,we=null,E=0;for(B=0;B<ge.length;B++)E+=ge[B].length;switch(J){case"string":return ge.join("");case"array":return Array.prototype.concat.apply([],ge);case"uint8array":for(we=new Uint8Array(E),B=0;B<ge.length;B++)we.set(ge[B],re),re+=ge[B].length;return we;case"nodebuffer":return Buffer.concat(ge);default:throw new Error("concat : unsupported type '"+J+"'")}}(N,k),I);C($)}catch(J){v(J)}k=[]}).resume()})}function y(A,d,C){var v=d;switch(d){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=d,this._mimeType=C,h.checkSupport(v),this._worker=A.pipe(new g(v)),A.lock()}catch(k){this._worker=new c("error"),this._worker.error(k)}}y.prototype={accumulate:function(A){return R(this,A)},on:function(A,d){var C=this;return A==="data"?this._worker.on(A,function(v){d.call(C,v.data,v.meta)}):this._worker.on(A,function(){h.delay(d,arguments,C)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(A){if(h.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new O(this,{objectMode:this._outputType!=="nodebuffer"},A)}},f.exports=y},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(u,f,b){if(b.base64=!0,b.array=!0,b.string=!0,b.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",b.nodebuffer=typeof Buffer<"u",b.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")b.blob=!1;else{var h=new ArrayBuffer(0);try{b.blob=new Blob([h],{type:"application/zip"}).size===0}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);g.append(h),b.blob=g.getBlob("application/zip").size===0}catch{b.blob=!1}}}try{b.nodestream=!!u("readable-stream").Readable}catch{b.nodestream=!1}},{"readable-stream":16}],31:[function(u,f,b){for(var h=u("./utils"),g=u("./support"),c=u("./nodejsUtils"),m=u("./stream/GenericWorker"),p=new Array(256),T=0;T<256;T++)p[T]=252<=T?6:248<=T?5:240<=T?4:224<=T?3:192<=T?2:1;p[254]=p[254]=1;function O(){m.call(this,"utf-8 decode"),this.leftOver=null}function R(){m.call(this,"utf-8 encode")}b.utf8encode=function(y){return g.nodebuffer?c.newBufferFrom(y,"utf-8"):function(A){var d,C,v,k,N,_=A.length,I=0;for(k=0;k<_;k++)(64512&(C=A.charCodeAt(k)))==55296&&k+1<_&&(64512&(v=A.charCodeAt(k+1)))==56320&&(C=65536+(C-55296<<10)+(v-56320),k++),I+=C<128?1:C<2048?2:C<65536?3:4;for(d=g.uint8array?new Uint8Array(I):new Array(I),k=N=0;N<I;k++)(64512&(C=A.charCodeAt(k)))==55296&&k+1<_&&(64512&(v=A.charCodeAt(k+1)))==56320&&(C=65536+(C-55296<<10)+(v-56320),k++),C<128?d[N++]=C:(C<2048?d[N++]=192|C>>>6:(C<65536?d[N++]=224|C>>>12:(d[N++]=240|C>>>18,d[N++]=128|C>>>12&63),d[N++]=128|C>>>6&63),d[N++]=128|63&C);return d}(y)},b.utf8decode=function(y){return g.nodebuffer?h.transformTo("nodebuffer",y).toString("utf-8"):function(A){var d,C,v,k,N=A.length,_=new Array(2*N);for(d=C=0;d<N;)if((v=A[d++])<128)_[C++]=v;else if(4<(k=p[v]))_[C++]=65533,d+=k-1;else{for(v&=k===2?31:k===3?15:7;1<k&&d<N;)v=v<<6|63&A[d++],k--;1<k?_[C++]=65533:v<65536?_[C++]=v:(v-=65536,_[C++]=55296|v>>10&1023,_[C++]=56320|1023&v)}return _.length!==C&&(_.subarray?_=_.subarray(0,C):_.length=C),h.applyFromCharCode(_)}(y=h.transformTo(g.uint8array?"uint8array":"array",y))},h.inherits(O,m),O.prototype.processChunk=function(y){var A=h.transformTo(g.uint8array?"uint8array":"array",y.data);if(this.leftOver&&this.leftOver.length){if(g.uint8array){var d=A;(A=new Uint8Array(d.length+this.leftOver.length)).set(this.leftOver,0),A.set(d,this.leftOver.length)}else A=this.leftOver.concat(A);this.leftOver=null}var C=function(k,N){var _;for((N=N||k.length)>k.length&&(N=k.length),_=N-1;0<=_&&(192&k[_])==128;)_--;return _<0||_===0?N:_+p[k[_]]>N?_:N}(A),v=A;C!==A.length&&(g.uint8array?(v=A.subarray(0,C),this.leftOver=A.subarray(C,A.length)):(v=A.slice(0,C),this.leftOver=A.slice(C,A.length))),this.push({data:b.utf8decode(v),meta:y.meta})},O.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:b.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},b.Utf8DecodeWorker=O,h.inherits(R,m),R.prototype.processChunk=function(y){this.push({data:b.utf8encode(y.data),meta:y.meta})},b.Utf8EncodeWorker=R},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(u,f,b){var h=u("./support"),g=u("./base64"),c=u("./nodejsUtils"),m=u("./external");function p(d){return d}function T(d,C){for(var v=0;v<d.length;++v)C[v]=255&d.charCodeAt(v);return C}u("setimmediate"),b.newBlob=function(d,C){b.checkSupport("blob");try{return new Blob([d],{type:C})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(d),v.getBlob(C)}catch{throw new Error("Bug : can't construct the Blob.")}}};var O={stringifyByChunk:function(d,C,v){var k=[],N=0,_=d.length;if(_<=v)return String.fromCharCode.apply(null,d);for(;N<_;)C==="array"||C==="nodebuffer"?k.push(String.fromCharCode.apply(null,d.slice(N,Math.min(N+v,_)))):k.push(String.fromCharCode.apply(null,d.subarray(N,Math.min(N+v,_)))),N+=v;return k.join("")},stringifyByChar:function(d){for(var C="",v=0;v<d.length;v++)C+=String.fromCharCode(d[v]);return C},applyCanBeUsed:{uint8array:function(){try{return h.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return h.nodebuffer&&String.fromCharCode.apply(null,c.allocBuffer(1)).length===1}catch{return!1}}()}};function R(d){var C=65536,v=b.getTypeOf(d),k=!0;if(v==="uint8array"?k=O.applyCanBeUsed.uint8array:v==="nodebuffer"&&(k=O.applyCanBeUsed.nodebuffer),k)for(;1<C;)try{return O.stringifyByChunk(d,v,C)}catch{C=Math.floor(C/2)}return O.stringifyByChar(d)}function y(d,C){for(var v=0;v<d.length;v++)C[v]=d[v];return C}b.applyFromCharCode=R;var A={};A.string={string:p,array:function(d){return T(d,new Array(d.length))},arraybuffer:function(d){return A.string.uint8array(d).buffer},uint8array:function(d){return T(d,new Uint8Array(d.length))},nodebuffer:function(d){return T(d,c.allocBuffer(d.length))}},A.array={string:R,array:p,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return c.newBufferFrom(d)}},A.arraybuffer={string:function(d){return R(new Uint8Array(d))},array:function(d){return y(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:p,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return c.newBufferFrom(new Uint8Array(d))}},A.uint8array={string:R,array:function(d){return y(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:p,nodebuffer:function(d){return c.newBufferFrom(d)}},A.nodebuffer={string:R,array:function(d){return y(d,new Array(d.length))},arraybuffer:function(d){return A.nodebuffer.uint8array(d).buffer},uint8array:function(d){return y(d,new Uint8Array(d.length))},nodebuffer:p},b.transformTo=function(d,C){if(C=C||"",!d)return C;b.checkSupport(d);var v=b.getTypeOf(C);return A[v][d](C)},b.resolve=function(d){for(var C=d.split("/"),v=[],k=0;k<C.length;k++){var N=C[k];N==="."||N===""&&k!==0&&k!==C.length-1||(N===".."?v.pop():v.push(N))}return v.join("/")},b.getTypeOf=function(d){return typeof d=="string"?"string":Object.prototype.toString.call(d)==="[object Array]"?"array":h.nodebuffer&&c.isBuffer(d)?"nodebuffer":h.uint8array&&d instanceof Uint8Array?"uint8array":h.arraybuffer&&d instanceof ArrayBuffer?"arraybuffer":void 0},b.checkSupport=function(d){if(!h[d.toLowerCase()])throw new Error(d+" is not supported by this platform")},b.MAX_VALUE_16BITS=65535,b.MAX_VALUE_32BITS=-1,b.pretty=function(d){var C,v,k="";for(v=0;v<(d||"").length;v++)k+="\\x"+((C=d.charCodeAt(v))<16?"0":"")+C.toString(16).toUpperCase();return k},b.delay=function(d,C,v){setImmediate(function(){d.apply(v||null,C||[])})},b.inherits=function(d,C){function v(){}v.prototype=C.prototype,d.prototype=new v},b.extend=function(){var d,C,v={};for(d=0;d<arguments.length;d++)for(C in arguments[d])Object.prototype.hasOwnProperty.call(arguments[d],C)&&v[C]===void 0&&(v[C]=arguments[d][C]);return v},b.prepareContent=function(d,C,v,k,N){return m.Promise.resolve(C).then(function(_){return h.blob&&(_ instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(_))!==-1)&&typeof FileReader<"u"?new m.Promise(function(I,$){var J=new FileReader;J.onload=function(ge){I(ge.target.result)},J.onerror=function(ge){$(ge.target.error)},J.readAsArrayBuffer(_)}):_}).then(function(_){var I=b.getTypeOf(_);return I?(I==="arraybuffer"?_=b.transformTo("uint8array",_):I==="string"&&(N?_=g.decode(_):v&&k!==!0&&(_=function($){return T($,h.uint8array?new Uint8Array($.length):new Array($.length))}(_))),_):m.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(u,f,b){var h=u("./reader/readerFor"),g=u("./utils"),c=u("./signature"),m=u("./zipEntry"),p=u("./support");function T(O){this.files=[],this.loadOptions=O}T.prototype={checkSignature:function(O){if(!this.reader.readAndCheckSignature(O)){this.reader.index-=4;var R=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+g.pretty(R)+", expected "+g.pretty(O)+")")}},isSignature:function(O,R){var y=this.reader.index;this.reader.setIndex(O);var A=this.reader.readString(4)===R;return this.reader.setIndex(y),A},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var O=this.reader.readData(this.zipCommentLength),R=p.uint8array?"uint8array":"array",y=g.transformTo(R,O);this.zipComment=this.loadOptions.decodeFileName(y)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var O,R,y,A=this.zip64EndOfCentralSize-44;0<A;)O=this.reader.readInt(2),R=this.reader.readInt(4),y=this.reader.readData(R),this.zip64ExtensibleData[O]={id:O,length:R,value:y}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var O,R;for(O=0;O<this.files.length;O++)R=this.files[O],this.reader.setIndex(R.localHeaderOffset),this.checkSignature(c.LOCAL_FILE_HEADER),R.readLocalPart(this.reader),R.handleUTF8(),R.processAttributes()},readCentralDir:function(){var O;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(c.CENTRAL_FILE_HEADER);)(O=new m({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(O);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var O=this.reader.lastIndexOfSignature(c.CENTRAL_DIRECTORY_END);if(O<0)throw this.isSignature(0,c.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(O);var R=O;if(this.checkSignature(c.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,(O=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(O),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,c.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var y=this.centralDirOffset+this.centralDirSize;this.zip64&&(y+=20,y+=12+this.zip64EndOfCentralSize);var A=R-y;if(0<A)this.isSignature(R,c.CENTRAL_FILE_HEADER)||(this.reader.zero=A);else if(A<0)throw new Error("Corrupted zip: missing "+Math.abs(A)+" bytes.")},prepareReader:function(O){this.reader=h(O)},load:function(O){this.prepareReader(O),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},f.exports=T},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(u,f,b){var h=u("./reader/readerFor"),g=u("./utils"),c=u("./compressedObject"),m=u("./crc32"),p=u("./utf8"),T=u("./compressions"),O=u("./support");function R(y,A){this.options=y,this.loadOptions=A}R.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(y){var A,d;if(y.skip(22),this.fileNameLength=y.readInt(2),d=y.readInt(2),this.fileName=y.readData(this.fileNameLength),y.skip(d),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((A=function(C){for(var v in T)if(Object.prototype.hasOwnProperty.call(T,v)&&T[v].magic===C)return T[v];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+g.pretty(this.compressionMethod)+" unknown (inner file : "+g.transformTo("string",this.fileName)+")");this.decompressed=new c(this.compressedSize,this.uncompressedSize,this.crc32,A,y.readData(this.compressedSize))},readCentralPart:function(y){this.versionMadeBy=y.readInt(2),y.skip(2),this.bitFlag=y.readInt(2),this.compressionMethod=y.readString(2),this.date=y.readDate(),this.crc32=y.readInt(4),this.compressedSize=y.readInt(4),this.uncompressedSize=y.readInt(4);var A=y.readInt(2);if(this.extraFieldsLength=y.readInt(2),this.fileCommentLength=y.readInt(2),this.diskNumberStart=y.readInt(2),this.internalFileAttributes=y.readInt(2),this.externalFileAttributes=y.readInt(4),this.localHeaderOffset=y.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");y.skip(A),this.readExtraFields(y),this.parseZIP64ExtraField(y),this.fileComment=y.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var y=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),y==0&&(this.dosPermissions=63&this.externalFileAttributes),y==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var y=h(this.extraFields[1].value);this.uncompressedSize===g.MAX_VALUE_32BITS&&(this.uncompressedSize=y.readInt(8)),this.compressedSize===g.MAX_VALUE_32BITS&&(this.compressedSize=y.readInt(8)),this.localHeaderOffset===g.MAX_VALUE_32BITS&&(this.localHeaderOffset=y.readInt(8)),this.diskNumberStart===g.MAX_VALUE_32BITS&&(this.diskNumberStart=y.readInt(4))}},readExtraFields:function(y){var A,d,C,v=y.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});y.index+4<v;)A=y.readInt(2),d=y.readInt(2),C=y.readData(d),this.extraFields[A]={id:A,length:d,value:C};y.setIndex(v)},handleUTF8:function(){var y=O.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=p.utf8decode(this.fileName),this.fileCommentStr=p.utf8decode(this.fileComment);else{var A=this.findExtraFieldUnicodePath();if(A!==null)this.fileNameStr=A;else{var d=g.transformTo(y,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(d)}var C=this.findExtraFieldUnicodeComment();if(C!==null)this.fileCommentStr=C;else{var v=g.transformTo(y,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var y=this.extraFields[28789];if(y){var A=h(y.value);return A.readInt(1)!==1||m(this.fileName)!==A.readInt(4)?null:p.utf8decode(A.readData(y.length-5))}return null},findExtraFieldUnicodeComment:function(){var y=this.extraFields[25461];if(y){var A=h(y.value);return A.readInt(1)!==1||m(this.fileComment)!==A.readInt(4)?null:p.utf8decode(A.readData(y.length-5))}return null}},f.exports=R},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(u,f,b){function h(A,d,C){this.name=A,this.dir=C.dir,this.date=C.date,this.comment=C.comment,this.unixPermissions=C.unixPermissions,this.dosPermissions=C.dosPermissions,this._data=d,this._dataBinary=C.binary,this.options={compression:C.compression,compressionOptions:C.compressionOptions}}var g=u("./stream/StreamHelper"),c=u("./stream/DataWorker"),m=u("./utf8"),p=u("./compressedObject"),T=u("./stream/GenericWorker");h.prototype={internalStream:function(A){var d=null,C="string";try{if(!A)throw new Error("No output type specified.");var v=(C=A.toLowerCase())==="string"||C==="text";C!=="binarystring"&&C!=="text"||(C="string"),d=this._decompressWorker();var k=!this._dataBinary;k&&!v&&(d=d.pipe(new m.Utf8EncodeWorker)),!k&&v&&(d=d.pipe(new m.Utf8DecodeWorker))}catch(N){(d=new T("error")).error(N)}return new g(d,C,"")},async:function(A,d){return this.internalStream(A).accumulate(d)},nodeStream:function(A,d){return this.internalStream(A||"nodebuffer").toNodejsStream(d)},_compressWorker:function(A,d){if(this._data instanceof p&&this._data.compression.magic===A.magic)return this._data.getCompressedWorker();var C=this._decompressWorker();return this._dataBinary||(C=C.pipe(new m.Utf8EncodeWorker)),p.createWorkerFrom(C,A,d)},_decompressWorker:function(){return this._data instanceof p?this._data.getContentWorker():this._data instanceof T?this._data:new c(this._data)}};for(var O=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],R=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},y=0;y<O.length;y++)h.prototype[O[y]]=R;f.exports=h},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(u,f,b){(function(h){var g,c,m=h.MutationObserver||h.WebKitMutationObserver;if(m){var p=0,T=new m(A),O=h.document.createTextNode("");T.observe(O,{characterData:!0}),g=function(){O.data=p=++p%2}}else if(h.setImmediate||h.MessageChannel===void 0)g="document"in h&&"onreadystatechange"in h.document.createElement("script")?function(){var d=h.document.createElement("script");d.onreadystatechange=function(){A(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},h.document.documentElement.appendChild(d)}:function(){setTimeout(A,0)};else{var R=new h.MessageChannel;R.port1.onmessage=A,g=function(){R.port2.postMessage(0)}}var y=[];function A(){var d,C;c=!0;for(var v=y.length;v;){for(C=y,y=[],d=-1;++d<v;)C[d]();v=y.length}c=!1}f.exports=function(d){y.push(d)!==1||c||g()}}).call(this,typeof xr<"u"?xr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(u,f,b){var h=u("immediate");function g(){}var c={},m=["REJECTED"],p=["FULFILLED"],T=["PENDING"];function O(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=T,this.queue=[],this.outcome=void 0,v!==g&&d(this,v)}function R(v,k,N){this.promise=v,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof N=="function"&&(this.onRejected=N,this.callRejected=this.otherCallRejected)}function y(v,k,N){h(function(){var _;try{_=k(N)}catch(I){return c.reject(v,I)}_===v?c.reject(v,new TypeError("Cannot resolve promise with itself")):c.resolve(v,_)})}function A(v){var k=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof k=="function")return function(){k.apply(v,arguments)}}function d(v,k){var N=!1;function _(J){N||(N=!0,c.reject(v,J))}function I(J){N||(N=!0,c.resolve(v,J))}var $=C(function(){k(I,_)});$.status==="error"&&_($.value)}function C(v,k){var N={};try{N.value=v(k),N.status="success"}catch(_){N.status="error",N.value=_}return N}(f.exports=O).prototype.finally=function(v){if(typeof v!="function")return this;var k=this.constructor;return this.then(function(N){return k.resolve(v()).then(function(){return N})},function(N){return k.resolve(v()).then(function(){throw N})})},O.prototype.catch=function(v){return this.then(null,v)},O.prototype.then=function(v,k){if(typeof v!="function"&&this.state===p||typeof k!="function"&&this.state===m)return this;var N=new this.constructor(g);return this.state!==T?y(N,this.state===p?v:k,this.outcome):this.queue.push(new R(N,v,k)),N},R.prototype.callFulfilled=function(v){c.resolve(this.promise,v)},R.prototype.otherCallFulfilled=function(v){y(this.promise,this.onFulfilled,v)},R.prototype.callRejected=function(v){c.reject(this.promise,v)},R.prototype.otherCallRejected=function(v){y(this.promise,this.onRejected,v)},c.resolve=function(v,k){var N=C(A,k);if(N.status==="error")return c.reject(v,N.value);var _=N.value;if(_)d(v,_);else{v.state=p,v.outcome=k;for(var I=-1,$=v.queue.length;++I<$;)v.queue[I].callFulfilled(k)}return v},c.reject=function(v,k){v.state=m,v.outcome=k;for(var N=-1,_=v.queue.length;++N<_;)v.queue[N].callRejected(k);return v},O.resolve=function(v){return v instanceof this?v:c.resolve(new this(g),v)},O.reject=function(v){var k=new this(g);return c.reject(k,v)},O.all=function(v){var k=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=v.length,_=!1;if(!N)return this.resolve([]);for(var I=new Array(N),$=0,J=-1,ge=new this(g);++J<N;)B(v[J],J);return ge;function B(re,we){k.resolve(re).then(function(E){I[we]=E,++$!==N||_||(_=!0,c.resolve(ge,I))},function(E){_||(_=!0,c.reject(ge,E))})}},O.race=function(v){var k=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=v.length,_=!1;if(!N)return this.resolve([]);for(var I=-1,$=new this(g);++I<N;)J=v[I],k.resolve(J).then(function(ge){_||(_=!0,c.resolve($,ge))},function(ge){_||(_=!0,c.reject($,ge))});var J;return $}},{immediate:36}],38:[function(u,f,b){var h={};(0,u("./lib/utils/common").assign)(h,u("./lib/deflate"),u("./lib/inflate"),u("./lib/zlib/constants")),f.exports=h},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(u,f,b){var h=u("./zlib/deflate"),g=u("./utils/common"),c=u("./utils/strings"),m=u("./zlib/messages"),p=u("./zlib/zstream"),T=Object.prototype.toString,O=0,R=-1,y=0,A=8;function d(v){if(!(this instanceof d))return new d(v);this.options=g.assign({level:R,method:A,chunkSize:16384,windowBits:15,memLevel:8,strategy:y,to:""},v||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var N=h.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(N!==O)throw new Error(m[N]);if(k.header&&h.deflateSetHeader(this.strm,k.header),k.dictionary){var _;if(_=typeof k.dictionary=="string"?c.string2buf(k.dictionary):T.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(N=h.deflateSetDictionary(this.strm,_))!==O)throw new Error(m[N]);this._dict_set=!0}}function C(v,k){var N=new d(k);if(N.push(v,!0),N.err)throw N.msg||m[N.err];return N.result}d.prototype.push=function(v,k){var N,_,I=this.strm,$=this.options.chunkSize;if(this.ended)return!1;_=k===~~k?k:k===!0?4:0,typeof v=="string"?I.input=c.string2buf(v):T.call(v)==="[object ArrayBuffer]"?I.input=new Uint8Array(v):I.input=v,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new g.Buf8($),I.next_out=0,I.avail_out=$),(N=h.deflate(I,_))!==1&&N!==O)return this.onEnd(N),!(this.ended=!0);I.avail_out!==0&&(I.avail_in!==0||_!==4&&_!==2)||(this.options.to==="string"?this.onData(c.buf2binstring(g.shrinkBuf(I.output,I.next_out))):this.onData(g.shrinkBuf(I.output,I.next_out)))}while((0<I.avail_in||I.avail_out===0)&&N!==1);return _===4?(N=h.deflateEnd(this.strm),this.onEnd(N),this.ended=!0,N===O):_!==2||(this.onEnd(O),!(I.avail_out=0))},d.prototype.onData=function(v){this.chunks.push(v)},d.prototype.onEnd=function(v){v===O&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=g.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},b.Deflate=d,b.deflate=C,b.deflateRaw=function(v,k){return(k=k||{}).raw=!0,C(v,k)},b.gzip=function(v,k){return(k=k||{}).gzip=!0,C(v,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(u,f,b){var h=u("./zlib/inflate"),g=u("./utils/common"),c=u("./utils/strings"),m=u("./zlib/constants"),p=u("./zlib/messages"),T=u("./zlib/zstream"),O=u("./zlib/gzheader"),R=Object.prototype.toString;function y(d){if(!(this instanceof y))return new y(d);this.options=g.assign({chunkSize:16384,windowBits:0,to:""},d||{});var C=this.options;C.raw&&0<=C.windowBits&&C.windowBits<16&&(C.windowBits=-C.windowBits,C.windowBits===0&&(C.windowBits=-15)),!(0<=C.windowBits&&C.windowBits<16)||d&&d.windowBits||(C.windowBits+=32),15<C.windowBits&&C.windowBits<48&&!(15&C.windowBits)&&(C.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new T,this.strm.avail_out=0;var v=h.inflateInit2(this.strm,C.windowBits);if(v!==m.Z_OK)throw new Error(p[v]);this.header=new O,h.inflateGetHeader(this.strm,this.header)}function A(d,C){var v=new y(C);if(v.push(d,!0),v.err)throw v.msg||p[v.err];return v.result}y.prototype.push=function(d,C){var v,k,N,_,I,$,J=this.strm,ge=this.options.chunkSize,B=this.options.dictionary,re=!1;if(this.ended)return!1;k=C===~~C?C:C===!0?m.Z_FINISH:m.Z_NO_FLUSH,typeof d=="string"?J.input=c.binstring2buf(d):R.call(d)==="[object ArrayBuffer]"?J.input=new Uint8Array(d):J.input=d,J.next_in=0,J.avail_in=J.input.length;do{if(J.avail_out===0&&(J.output=new g.Buf8(ge),J.next_out=0,J.avail_out=ge),(v=h.inflate(J,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&B&&($=typeof B=="string"?c.string2buf(B):R.call(B)==="[object ArrayBuffer]"?new Uint8Array(B):B,v=h.inflateSetDictionary(this.strm,$)),v===m.Z_BUF_ERROR&&re===!0&&(v=m.Z_OK,re=!1),v!==m.Z_STREAM_END&&v!==m.Z_OK)return this.onEnd(v),!(this.ended=!0);J.next_out&&(J.avail_out!==0&&v!==m.Z_STREAM_END&&(J.avail_in!==0||k!==m.Z_FINISH&&k!==m.Z_SYNC_FLUSH)||(this.options.to==="string"?(N=c.utf8border(J.output,J.next_out),_=J.next_out-N,I=c.buf2string(J.output,N),J.next_out=_,J.avail_out=ge-_,_&&g.arraySet(J.output,J.output,N,_,0),this.onData(I)):this.onData(g.shrinkBuf(J.output,J.next_out)))),J.avail_in===0&&J.avail_out===0&&(re=!0)}while((0<J.avail_in||J.avail_out===0)&&v!==m.Z_STREAM_END);return v===m.Z_STREAM_END&&(k=m.Z_FINISH),k===m.Z_FINISH?(v=h.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===m.Z_OK):k!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(J.avail_out=0))},y.prototype.onData=function(d){this.chunks.push(d)},y.prototype.onEnd=function(d){d===m.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=g.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},b.Inflate=y,b.inflate=A,b.inflateRaw=function(d,C){return(C=C||{}).raw=!0,A(d,C)},b.ungzip=A},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(u,f,b){var h=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";b.assign=function(m){for(var p=Array.prototype.slice.call(arguments,1);p.length;){var T=p.shift();if(T){if(typeof T!="object")throw new TypeError(T+"must be non-object");for(var O in T)T.hasOwnProperty(O)&&(m[O]=T[O])}}return m},b.shrinkBuf=function(m,p){return m.length===p?m:m.subarray?m.subarray(0,p):(m.length=p,m)};var g={arraySet:function(m,p,T,O,R){if(p.subarray&&m.subarray)m.set(p.subarray(T,T+O),R);else for(var y=0;y<O;y++)m[R+y]=p[T+y]},flattenChunks:function(m){var p,T,O,R,y,A;for(p=O=0,T=m.length;p<T;p++)O+=m[p].length;for(A=new Uint8Array(O),p=R=0,T=m.length;p<T;p++)y=m[p],A.set(y,R),R+=y.length;return A}},c={arraySet:function(m,p,T,O,R){for(var y=0;y<O;y++)m[R+y]=p[T+y]},flattenChunks:function(m){return[].concat.apply([],m)}};b.setTyped=function(m){m?(b.Buf8=Uint8Array,b.Buf16=Uint16Array,b.Buf32=Int32Array,b.assign(b,g)):(b.Buf8=Array,b.Buf16=Array,b.Buf32=Array,b.assign(b,c))},b.setTyped(h)},{}],42:[function(u,f,b){var h=u("./common"),g=!0,c=!0;try{String.fromCharCode.apply(null,[0])}catch{g=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{c=!1}for(var m=new h.Buf8(256),p=0;p<256;p++)m[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;function T(O,R){if(R<65537&&(O.subarray&&c||!O.subarray&&g))return String.fromCharCode.apply(null,h.shrinkBuf(O,R));for(var y="",A=0;A<R;A++)y+=String.fromCharCode(O[A]);return y}m[254]=m[254]=1,b.string2buf=function(O){var R,y,A,d,C,v=O.length,k=0;for(d=0;d<v;d++)(64512&(y=O.charCodeAt(d)))==55296&&d+1<v&&(64512&(A=O.charCodeAt(d+1)))==56320&&(y=65536+(y-55296<<10)+(A-56320),d++),k+=y<128?1:y<2048?2:y<65536?3:4;for(R=new h.Buf8(k),d=C=0;C<k;d++)(64512&(y=O.charCodeAt(d)))==55296&&d+1<v&&(64512&(A=O.charCodeAt(d+1)))==56320&&(y=65536+(y-55296<<10)+(A-56320),d++),y<128?R[C++]=y:(y<2048?R[C++]=192|y>>>6:(y<65536?R[C++]=224|y>>>12:(R[C++]=240|y>>>18,R[C++]=128|y>>>12&63),R[C++]=128|y>>>6&63),R[C++]=128|63&y);return R},b.buf2binstring=function(O){return T(O,O.length)},b.binstring2buf=function(O){for(var R=new h.Buf8(O.length),y=0,A=R.length;y<A;y++)R[y]=O.charCodeAt(y);return R},b.buf2string=function(O,R){var y,A,d,C,v=R||O.length,k=new Array(2*v);for(y=A=0;y<v;)if((d=O[y++])<128)k[A++]=d;else if(4<(C=m[d]))k[A++]=65533,y+=C-1;else{for(d&=C===2?31:C===3?15:7;1<C&&y<v;)d=d<<6|63&O[y++],C--;1<C?k[A++]=65533:d<65536?k[A++]=d:(d-=65536,k[A++]=55296|d>>10&1023,k[A++]=56320|1023&d)}return T(k,A)},b.utf8border=function(O,R){var y;for((R=R||O.length)>O.length&&(R=O.length),y=R-1;0<=y&&(192&O[y])==128;)y--;return y<0||y===0?R:y+m[O[y]]>R?y:R}},{"./common":41}],43:[function(u,f,b){f.exports=function(h,g,c,m){for(var p=65535&h|0,T=h>>>16&65535|0,O=0;c!==0;){for(c-=O=2e3<c?2e3:c;T=T+(p=p+g[m++]|0)|0,--O;);p%=65521,T%=65521}return p|T<<16|0}},{}],44:[function(u,f,b){f.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(u,f,b){var h=function(){for(var g,c=[],m=0;m<256;m++){g=m;for(var p=0;p<8;p++)g=1&g?3988292384^g>>>1:g>>>1;c[m]=g}return c}();f.exports=function(g,c,m,p){var T=h,O=p+m;g^=-1;for(var R=p;R<O;R++)g=g>>>8^T[255&(g^c[R])];return-1^g}},{}],46:[function(u,f,b){var h,g=u("../utils/common"),c=u("./trees"),m=u("./adler32"),p=u("./crc32"),T=u("./messages"),O=0,R=4,y=0,A=-2,d=-1,C=4,v=2,k=8,N=9,_=286,I=30,$=19,J=2*_+1,ge=15,B=3,re=258,we=re+B+1,E=42,K=113,l=1,te=2,ie=3,q=4;function pe(s,se){return s.msg=T[se],se}function ue(s){return(s<<1)-(4<s?9:0)}function w(s){for(var se=s.length;0<=--se;)s[se]=0}function D(s){var se=s.state,Y=se.pending;Y>s.avail_out&&(Y=s.avail_out),Y!==0&&(g.arraySet(s.output,se.pending_buf,se.pending_out,Y,s.next_out),s.next_out+=Y,se.pending_out+=Y,s.total_out+=Y,s.avail_out-=Y,se.pending-=Y,se.pending===0&&(se.pending_out=0))}function L(s,se){c._tr_flush_block(s,0<=s.block_start?s.block_start:-1,s.strstart-s.block_start,se),s.block_start=s.strstart,D(s.strm)}function ne(s,se){s.pending_buf[s.pending++]=se}function Q(s,se){s.pending_buf[s.pending++]=se>>>8&255,s.pending_buf[s.pending++]=255&se}function ce(s,se){var Y,M,F=s.max_chain_length,H=s.strstart,he=s.prev_length,de=s.nice_match,Z=s.strstart>s.w_size-we?s.strstart-(s.w_size-we):0,ye=s.window,be=s.w_mask,Se=s.prev,Re=s.strstart+re,Ie=ye[H+he-1],He=ye[H+he];s.prev_length>=s.good_match&&(F>>=2),de>s.lookahead&&(de=s.lookahead);do if(ye[(Y=se)+he]===He&&ye[Y+he-1]===Ie&&ye[Y]===ye[H]&&ye[++Y]===ye[H+1]){H+=2,Y++;do;while(ye[++H]===ye[++Y]&&ye[++H]===ye[++Y]&&ye[++H]===ye[++Y]&&ye[++H]===ye[++Y]&&ye[++H]===ye[++Y]&&ye[++H]===ye[++Y]&&ye[++H]===ye[++Y]&&ye[++H]===ye[++Y]&&H<Re);if(M=re-(Re-H),H=Re-re,he<M){if(s.match_start=se,de<=(he=M))break;Ie=ye[H+he-1],He=ye[H+he]}}while((se=Se[se&be])>Z&&--F!=0);return he<=s.lookahead?he:s.lookahead}function Me(s){var se,Y,M,F,H,he,de,Z,ye,be,Se=s.w_size;do{if(F=s.window_size-s.lookahead-s.strstart,s.strstart>=Se+(Se-we)){for(g.arraySet(s.window,s.window,Se,Se,0),s.match_start-=Se,s.strstart-=Se,s.block_start-=Se,se=Y=s.hash_size;M=s.head[--se],s.head[se]=Se<=M?M-Se:0,--Y;);for(se=Y=Se;M=s.prev[--se],s.prev[se]=Se<=M?M-Se:0,--Y;);F+=Se}if(s.strm.avail_in===0)break;if(he=s.strm,de=s.window,Z=s.strstart+s.lookahead,ye=F,be=void 0,be=he.avail_in,ye<be&&(be=ye),Y=be===0?0:(he.avail_in-=be,g.arraySet(de,he.input,he.next_in,be,Z),he.state.wrap===1?he.adler=m(he.adler,de,be,Z):he.state.wrap===2&&(he.adler=p(he.adler,de,be,Z)),he.next_in+=be,he.total_in+=be,be),s.lookahead+=Y,s.lookahead+s.insert>=B)for(H=s.strstart-s.insert,s.ins_h=s.window[H],s.ins_h=(s.ins_h<<s.hash_shift^s.window[H+1])&s.hash_mask;s.insert&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[H+B-1])&s.hash_mask,s.prev[H&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=H,H++,s.insert--,!(s.lookahead+s.insert<B)););}while(s.lookahead<we&&s.strm.avail_in!==0)}function Ue(s,se){for(var Y,M;;){if(s.lookahead<we){if(Me(s),s.lookahead<we&&se===O)return l;if(s.lookahead===0)break}if(Y=0,s.lookahead>=B&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+B-1])&s.hash_mask,Y=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),Y!==0&&s.strstart-Y<=s.w_size-we&&(s.match_length=ce(s,Y)),s.match_length>=B)if(M=c._tr_tally(s,s.strstart-s.match_start,s.match_length-B),s.lookahead-=s.match_length,s.match_length<=s.max_lazy_match&&s.lookahead>=B){for(s.match_length--;s.strstart++,s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+B-1])&s.hash_mask,Y=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart,--s.match_length!=0;);s.strstart++}else s.strstart+=s.match_length,s.match_length=0,s.ins_h=s.window[s.strstart],s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+1])&s.hash_mask;else M=c._tr_tally(s,0,s.window[s.strstart]),s.lookahead--,s.strstart++;if(M&&(L(s,!1),s.strm.avail_out===0))return l}return s.insert=s.strstart<B-1?s.strstart:B-1,se===R?(L(s,!0),s.strm.avail_out===0?ie:q):s.last_lit&&(L(s,!1),s.strm.avail_out===0)?l:te}function Ae(s,se){for(var Y,M,F;;){if(s.lookahead<we){if(Me(s),s.lookahead<we&&se===O)return l;if(s.lookahead===0)break}if(Y=0,s.lookahead>=B&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+B-1])&s.hash_mask,Y=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),s.prev_length=s.match_length,s.prev_match=s.match_start,s.match_length=B-1,Y!==0&&s.prev_length<s.max_lazy_match&&s.strstart-Y<=s.w_size-we&&(s.match_length=ce(s,Y),s.match_length<=5&&(s.strategy===1||s.match_length===B&&4096<s.strstart-s.match_start)&&(s.match_length=B-1)),s.prev_length>=B&&s.match_length<=s.prev_length){for(F=s.strstart+s.lookahead-B,M=c._tr_tally(s,s.strstart-1-s.prev_match,s.prev_length-B),s.lookahead-=s.prev_length-1,s.prev_length-=2;++s.strstart<=F&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+B-1])&s.hash_mask,Y=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),--s.prev_length!=0;);if(s.match_available=0,s.match_length=B-1,s.strstart++,M&&(L(s,!1),s.strm.avail_out===0))return l}else if(s.match_available){if((M=c._tr_tally(s,0,s.window[s.strstart-1]))&&L(s,!1),s.strstart++,s.lookahead--,s.strm.avail_out===0)return l}else s.match_available=1,s.strstart++,s.lookahead--}return s.match_available&&(M=c._tr_tally(s,0,s.window[s.strstart-1]),s.match_available=0),s.insert=s.strstart<B-1?s.strstart:B-1,se===R?(L(s,!0),s.strm.avail_out===0?ie:q):s.last_lit&&(L(s,!1),s.strm.avail_out===0)?l:te}function Ee(s,se,Y,M,F){this.good_length=s,this.max_lazy=se,this.nice_length=Y,this.max_chain=M,this.func=F}function Ve(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new g.Buf16(2*J),this.dyn_dtree=new g.Buf16(2*(2*I+1)),this.bl_tree=new g.Buf16(2*(2*$+1)),w(this.dyn_ltree),w(this.dyn_dtree),w(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new g.Buf16(ge+1),this.heap=new g.Buf16(2*_+1),w(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new g.Buf16(2*_+1),w(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Xe(s){var se;return s&&s.state?(s.total_in=s.total_out=0,s.data_type=v,(se=s.state).pending=0,se.pending_out=0,se.wrap<0&&(se.wrap=-se.wrap),se.status=se.wrap?E:K,s.adler=se.wrap===2?0:1,se.last_flush=O,c._tr_init(se),y):pe(s,A)}function xt(s){var se=Xe(s);return se===y&&function(Y){Y.window_size=2*Y.w_size,w(Y.head),Y.max_lazy_match=h[Y.level].max_lazy,Y.good_match=h[Y.level].good_length,Y.nice_match=h[Y.level].nice_length,Y.max_chain_length=h[Y.level].max_chain,Y.strstart=0,Y.block_start=0,Y.lookahead=0,Y.insert=0,Y.match_length=Y.prev_length=B-1,Y.match_available=0,Y.ins_h=0}(s.state),se}function St(s,se,Y,M,F,H){if(!s)return A;var he=1;if(se===d&&(se=6),M<0?(he=0,M=-M):15<M&&(he=2,M-=16),F<1||N<F||Y!==k||M<8||15<M||se<0||9<se||H<0||C<H)return pe(s,A);M===8&&(M=9);var de=new Ve;return(s.state=de).strm=s,de.wrap=he,de.gzhead=null,de.w_bits=M,de.w_size=1<<de.w_bits,de.w_mask=de.w_size-1,de.hash_bits=F+7,de.hash_size=1<<de.hash_bits,de.hash_mask=de.hash_size-1,de.hash_shift=~~((de.hash_bits+B-1)/B),de.window=new g.Buf8(2*de.w_size),de.head=new g.Buf16(de.hash_size),de.prev=new g.Buf16(de.w_size),de.lit_bufsize=1<<F+6,de.pending_buf_size=4*de.lit_bufsize,de.pending_buf=new g.Buf8(de.pending_buf_size),de.d_buf=1*de.lit_bufsize,de.l_buf=3*de.lit_bufsize,de.level=se,de.strategy=H,de.method=Y,xt(s)}h=[new Ee(0,0,0,0,function(s,se){var Y=65535;for(Y>s.pending_buf_size-5&&(Y=s.pending_buf_size-5);;){if(s.lookahead<=1){if(Me(s),s.lookahead===0&&se===O)return l;if(s.lookahead===0)break}s.strstart+=s.lookahead,s.lookahead=0;var M=s.block_start+Y;if((s.strstart===0||s.strstart>=M)&&(s.lookahead=s.strstart-M,s.strstart=M,L(s,!1),s.strm.avail_out===0)||s.strstart-s.block_start>=s.w_size-we&&(L(s,!1),s.strm.avail_out===0))return l}return s.insert=0,se===R?(L(s,!0),s.strm.avail_out===0?ie:q):(s.strstart>s.block_start&&(L(s,!1),s.strm.avail_out),l)}),new Ee(4,4,8,4,Ue),new Ee(4,5,16,8,Ue),new Ee(4,6,32,32,Ue),new Ee(4,4,16,16,Ae),new Ee(8,16,32,32,Ae),new Ee(8,16,128,128,Ae),new Ee(8,32,128,256,Ae),new Ee(32,128,258,1024,Ae),new Ee(32,258,258,4096,Ae)],b.deflateInit=function(s,se){return St(s,se,k,15,8,0)},b.deflateInit2=St,b.deflateReset=xt,b.deflateResetKeep=Xe,b.deflateSetHeader=function(s,se){return s&&s.state?s.state.wrap!==2?A:(s.state.gzhead=se,y):A},b.deflate=function(s,se){var Y,M,F,H;if(!s||!s.state||5<se||se<0)return s?pe(s,A):A;if(M=s.state,!s.output||!s.input&&s.avail_in!==0||M.status===666&&se!==R)return pe(s,s.avail_out===0?-5:A);if(M.strm=s,Y=M.last_flush,M.last_flush=se,M.status===E)if(M.wrap===2)s.adler=0,ne(M,31),ne(M,139),ne(M,8),M.gzhead?(ne(M,(M.gzhead.text?1:0)+(M.gzhead.hcrc?2:0)+(M.gzhead.extra?4:0)+(M.gzhead.name?8:0)+(M.gzhead.comment?16:0)),ne(M,255&M.gzhead.time),ne(M,M.gzhead.time>>8&255),ne(M,M.gzhead.time>>16&255),ne(M,M.gzhead.time>>24&255),ne(M,M.level===9?2:2<=M.strategy||M.level<2?4:0),ne(M,255&M.gzhead.os),M.gzhead.extra&&M.gzhead.extra.length&&(ne(M,255&M.gzhead.extra.length),ne(M,M.gzhead.extra.length>>8&255)),M.gzhead.hcrc&&(s.adler=p(s.adler,M.pending_buf,M.pending,0)),M.gzindex=0,M.status=69):(ne(M,0),ne(M,0),ne(M,0),ne(M,0),ne(M,0),ne(M,M.level===9?2:2<=M.strategy||M.level<2?4:0),ne(M,3),M.status=K);else{var he=k+(M.w_bits-8<<4)<<8;he|=(2<=M.strategy||M.level<2?0:M.level<6?1:M.level===6?2:3)<<6,M.strstart!==0&&(he|=32),he+=31-he%31,M.status=K,Q(M,he),M.strstart!==0&&(Q(M,s.adler>>>16),Q(M,65535&s.adler)),s.adler=1}if(M.status===69)if(M.gzhead.extra){for(F=M.pending;M.gzindex<(65535&M.gzhead.extra.length)&&(M.pending!==M.pending_buf_size||(M.gzhead.hcrc&&M.pending>F&&(s.adler=p(s.adler,M.pending_buf,M.pending-F,F)),D(s),F=M.pending,M.pending!==M.pending_buf_size));)ne(M,255&M.gzhead.extra[M.gzindex]),M.gzindex++;M.gzhead.hcrc&&M.pending>F&&(s.adler=p(s.adler,M.pending_buf,M.pending-F,F)),M.gzindex===M.gzhead.extra.length&&(M.gzindex=0,M.status=73)}else M.status=73;if(M.status===73)if(M.gzhead.name){F=M.pending;do{if(M.pending===M.pending_buf_size&&(M.gzhead.hcrc&&M.pending>F&&(s.adler=p(s.adler,M.pending_buf,M.pending-F,F)),D(s),F=M.pending,M.pending===M.pending_buf_size)){H=1;break}H=M.gzindex<M.gzhead.name.length?255&M.gzhead.name.charCodeAt(M.gzindex++):0,ne(M,H)}while(H!==0);M.gzhead.hcrc&&M.pending>F&&(s.adler=p(s.adler,M.pending_buf,M.pending-F,F)),H===0&&(M.gzindex=0,M.status=91)}else M.status=91;if(M.status===91)if(M.gzhead.comment){F=M.pending;do{if(M.pending===M.pending_buf_size&&(M.gzhead.hcrc&&M.pending>F&&(s.adler=p(s.adler,M.pending_buf,M.pending-F,F)),D(s),F=M.pending,M.pending===M.pending_buf_size)){H=1;break}H=M.gzindex<M.gzhead.comment.length?255&M.gzhead.comment.charCodeAt(M.gzindex++):0,ne(M,H)}while(H!==0);M.gzhead.hcrc&&M.pending>F&&(s.adler=p(s.adler,M.pending_buf,M.pending-F,F)),H===0&&(M.status=103)}else M.status=103;if(M.status===103&&(M.gzhead.hcrc?(M.pending+2>M.pending_buf_size&&D(s),M.pending+2<=M.pending_buf_size&&(ne(M,255&s.adler),ne(M,s.adler>>8&255),s.adler=0,M.status=K)):M.status=K),M.pending!==0){if(D(s),s.avail_out===0)return M.last_flush=-1,y}else if(s.avail_in===0&&ue(se)<=ue(Y)&&se!==R)return pe(s,-5);if(M.status===666&&s.avail_in!==0)return pe(s,-5);if(s.avail_in!==0||M.lookahead!==0||se!==O&&M.status!==666){var de=M.strategy===2?function(Z,ye){for(var be;;){if(Z.lookahead===0&&(Me(Z),Z.lookahead===0)){if(ye===O)return l;break}if(Z.match_length=0,be=c._tr_tally(Z,0,Z.window[Z.strstart]),Z.lookahead--,Z.strstart++,be&&(L(Z,!1),Z.strm.avail_out===0))return l}return Z.insert=0,ye===R?(L(Z,!0),Z.strm.avail_out===0?ie:q):Z.last_lit&&(L(Z,!1),Z.strm.avail_out===0)?l:te}(M,se):M.strategy===3?function(Z,ye){for(var be,Se,Re,Ie,He=Z.window;;){if(Z.lookahead<=re){if(Me(Z),Z.lookahead<=re&&ye===O)return l;if(Z.lookahead===0)break}if(Z.match_length=0,Z.lookahead>=B&&0<Z.strstart&&(Se=He[Re=Z.strstart-1])===He[++Re]&&Se===He[++Re]&&Se===He[++Re]){Ie=Z.strstart+re;do;while(Se===He[++Re]&&Se===He[++Re]&&Se===He[++Re]&&Se===He[++Re]&&Se===He[++Re]&&Se===He[++Re]&&Se===He[++Re]&&Se===He[++Re]&&Re<Ie);Z.match_length=re-(Ie-Re),Z.match_length>Z.lookahead&&(Z.match_length=Z.lookahead)}if(Z.match_length>=B?(be=c._tr_tally(Z,1,Z.match_length-B),Z.lookahead-=Z.match_length,Z.strstart+=Z.match_length,Z.match_length=0):(be=c._tr_tally(Z,0,Z.window[Z.strstart]),Z.lookahead--,Z.strstart++),be&&(L(Z,!1),Z.strm.avail_out===0))return l}return Z.insert=0,ye===R?(L(Z,!0),Z.strm.avail_out===0?ie:q):Z.last_lit&&(L(Z,!1),Z.strm.avail_out===0)?l:te}(M,se):h[M.level].func(M,se);if(de!==ie&&de!==q||(M.status=666),de===l||de===ie)return s.avail_out===0&&(M.last_flush=-1),y;if(de===te&&(se===1?c._tr_align(M):se!==5&&(c._tr_stored_block(M,0,0,!1),se===3&&(w(M.head),M.lookahead===0&&(M.strstart=0,M.block_start=0,M.insert=0))),D(s),s.avail_out===0))return M.last_flush=-1,y}return se!==R?y:M.wrap<=0?1:(M.wrap===2?(ne(M,255&s.adler),ne(M,s.adler>>8&255),ne(M,s.adler>>16&255),ne(M,s.adler>>24&255),ne(M,255&s.total_in),ne(M,s.total_in>>8&255),ne(M,s.total_in>>16&255),ne(M,s.total_in>>24&255)):(Q(M,s.adler>>>16),Q(M,65535&s.adler)),D(s),0<M.wrap&&(M.wrap=-M.wrap),M.pending!==0?y:1)},b.deflateEnd=function(s){var se;return s&&s.state?(se=s.state.status)!==E&&se!==69&&se!==73&&se!==91&&se!==103&&se!==K&&se!==666?pe(s,A):(s.state=null,se===K?pe(s,-3):y):A},b.deflateSetDictionary=function(s,se){var Y,M,F,H,he,de,Z,ye,be=se.length;if(!s||!s.state||(H=(Y=s.state).wrap)===2||H===1&&Y.status!==E||Y.lookahead)return A;for(H===1&&(s.adler=m(s.adler,se,be,0)),Y.wrap=0,be>=Y.w_size&&(H===0&&(w(Y.head),Y.strstart=0,Y.block_start=0,Y.insert=0),ye=new g.Buf8(Y.w_size),g.arraySet(ye,se,be-Y.w_size,Y.w_size,0),se=ye,be=Y.w_size),he=s.avail_in,de=s.next_in,Z=s.input,s.avail_in=be,s.next_in=0,s.input=se,Me(Y);Y.lookahead>=B;){for(M=Y.strstart,F=Y.lookahead-(B-1);Y.ins_h=(Y.ins_h<<Y.hash_shift^Y.window[M+B-1])&Y.hash_mask,Y.prev[M&Y.w_mask]=Y.head[Y.ins_h],Y.head[Y.ins_h]=M,M++,--F;);Y.strstart=M,Y.lookahead=B-1,Me(Y)}return Y.strstart+=Y.lookahead,Y.block_start=Y.strstart,Y.insert=Y.lookahead,Y.lookahead=0,Y.match_length=Y.prev_length=B-1,Y.match_available=0,s.next_in=de,s.input=Z,s.avail_in=he,Y.wrap=H,y},b.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(u,f,b){f.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(u,f,b){f.exports=function(h,g){var c,m,p,T,O,R,y,A,d,C,v,k,N,_,I,$,J,ge,B,re,we,E,K,l,te;c=h.state,m=h.next_in,l=h.input,p=m+(h.avail_in-5),T=h.next_out,te=h.output,O=T-(g-h.avail_out),R=T+(h.avail_out-257),y=c.dmax,A=c.wsize,d=c.whave,C=c.wnext,v=c.window,k=c.hold,N=c.bits,_=c.lencode,I=c.distcode,$=(1<<c.lenbits)-1,J=(1<<c.distbits)-1;e:do{N<15&&(k+=l[m++]<<N,N+=8,k+=l[m++]<<N,N+=8),ge=_[k&$];t:for(;;){if(k>>>=B=ge>>>24,N-=B,(B=ge>>>16&255)===0)te[T++]=65535&ge;else{if(!(16&B)){if(!(64&B)){ge=_[(65535&ge)+(k&(1<<B)-1)];continue t}if(32&B){c.mode=12;break e}h.msg="invalid literal/length code",c.mode=30;break e}re=65535&ge,(B&=15)&&(N<B&&(k+=l[m++]<<N,N+=8),re+=k&(1<<B)-1,k>>>=B,N-=B),N<15&&(k+=l[m++]<<N,N+=8,k+=l[m++]<<N,N+=8),ge=I[k&J];n:for(;;){if(k>>>=B=ge>>>24,N-=B,!(16&(B=ge>>>16&255))){if(!(64&B)){ge=I[(65535&ge)+(k&(1<<B)-1)];continue n}h.msg="invalid distance code",c.mode=30;break e}if(we=65535&ge,N<(B&=15)&&(k+=l[m++]<<N,(N+=8)<B&&(k+=l[m++]<<N,N+=8)),y<(we+=k&(1<<B)-1)){h.msg="invalid distance too far back",c.mode=30;break e}if(k>>>=B,N-=B,(B=T-O)<we){if(d<(B=we-B)&&c.sane){h.msg="invalid distance too far back",c.mode=30;break e}if(K=v,(E=0)===C){if(E+=A-B,B<re){for(re-=B;te[T++]=v[E++],--B;);E=T-we,K=te}}else if(C<B){if(E+=A+C-B,(B-=C)<re){for(re-=B;te[T++]=v[E++],--B;);if(E=0,C<re){for(re-=B=C;te[T++]=v[E++],--B;);E=T-we,K=te}}}else if(E+=C-B,B<re){for(re-=B;te[T++]=v[E++],--B;);E=T-we,K=te}for(;2<re;)te[T++]=K[E++],te[T++]=K[E++],te[T++]=K[E++],re-=3;re&&(te[T++]=K[E++],1<re&&(te[T++]=K[E++]))}else{for(E=T-we;te[T++]=te[E++],te[T++]=te[E++],te[T++]=te[E++],2<(re-=3););re&&(te[T++]=te[E++],1<re&&(te[T++]=te[E++]))}break}}break}}while(m<p&&T<R);m-=re=N>>3,k&=(1<<(N-=re<<3))-1,h.next_in=m,h.next_out=T,h.avail_in=m<p?p-m+5:5-(m-p),h.avail_out=T<R?R-T+257:257-(T-R),c.hold=k,c.bits=N}},{}],49:[function(u,f,b){var h=u("../utils/common"),g=u("./adler32"),c=u("./crc32"),m=u("./inffast"),p=u("./inftrees"),T=1,O=2,R=0,y=-2,A=1,d=852,C=592;function v(E){return(E>>>24&255)+(E>>>8&65280)+((65280&E)<<8)+((255&E)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new h.Buf16(320),this.work=new h.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function N(E){var K;return E&&E.state?(K=E.state,E.total_in=E.total_out=K.total=0,E.msg="",K.wrap&&(E.adler=1&K.wrap),K.mode=A,K.last=0,K.havedict=0,K.dmax=32768,K.head=null,K.hold=0,K.bits=0,K.lencode=K.lendyn=new h.Buf32(d),K.distcode=K.distdyn=new h.Buf32(C),K.sane=1,K.back=-1,R):y}function _(E){var K;return E&&E.state?((K=E.state).wsize=0,K.whave=0,K.wnext=0,N(E)):y}function I(E,K){var l,te;return E&&E.state?(te=E.state,K<0?(l=0,K=-K):(l=1+(K>>4),K<48&&(K&=15)),K&&(K<8||15<K)?y:(te.window!==null&&te.wbits!==K&&(te.window=null),te.wrap=l,te.wbits=K,_(E))):y}function $(E,K){var l,te;return E?(te=new k,(E.state=te).window=null,(l=I(E,K))!==R&&(E.state=null),l):y}var J,ge,B=!0;function re(E){if(B){var K;for(J=new h.Buf32(512),ge=new h.Buf32(32),K=0;K<144;)E.lens[K++]=8;for(;K<256;)E.lens[K++]=9;for(;K<280;)E.lens[K++]=7;for(;K<288;)E.lens[K++]=8;for(p(T,E.lens,0,288,J,0,E.work,{bits:9}),K=0;K<32;)E.lens[K++]=5;p(O,E.lens,0,32,ge,0,E.work,{bits:5}),B=!1}E.lencode=J,E.lenbits=9,E.distcode=ge,E.distbits=5}function we(E,K,l,te){var ie,q=E.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new h.Buf8(q.wsize)),te>=q.wsize?(h.arraySet(q.window,K,l-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(te<(ie=q.wsize-q.wnext)&&(ie=te),h.arraySet(q.window,K,l-te,ie,q.wnext),(te-=ie)?(h.arraySet(q.window,K,l-te,te,0),q.wnext=te,q.whave=q.wsize):(q.wnext+=ie,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=ie))),0}b.inflateReset=_,b.inflateReset2=I,b.inflateResetKeep=N,b.inflateInit=function(E){return $(E,15)},b.inflateInit2=$,b.inflate=function(E,K){var l,te,ie,q,pe,ue,w,D,L,ne,Q,ce,Me,Ue,Ae,Ee,Ve,Xe,xt,St,s,se,Y,M,F=0,H=new h.Buf8(4),he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!E||!E.state||!E.output||!E.input&&E.avail_in!==0)return y;(l=E.state).mode===12&&(l.mode=13),pe=E.next_out,ie=E.output,w=E.avail_out,q=E.next_in,te=E.input,ue=E.avail_in,D=l.hold,L=l.bits,ne=ue,Q=w,se=R;e:for(;;)switch(l.mode){case A:if(l.wrap===0){l.mode=13;break}for(;L<16;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if(2&l.wrap&&D===35615){H[l.check=0]=255&D,H[1]=D>>>8&255,l.check=c(l.check,H,2,0),L=D=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&D)<<8)+(D>>8))%31){E.msg="incorrect header check",l.mode=30;break}if((15&D)!=8){E.msg="unknown compression method",l.mode=30;break}if(L-=4,s=8+(15&(D>>>=4)),l.wbits===0)l.wbits=s;else if(s>l.wbits){E.msg="invalid window size",l.mode=30;break}l.dmax=1<<s,E.adler=l.check=1,l.mode=512&D?10:12,L=D=0;break;case 2:for(;L<16;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if(l.flags=D,(255&l.flags)!=8){E.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){E.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=D>>8&1),512&l.flags&&(H[0]=255&D,H[1]=D>>>8&255,l.check=c(l.check,H,2,0)),L=D=0,l.mode=3;case 3:for(;L<32;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}l.head&&(l.head.time=D),512&l.flags&&(H[0]=255&D,H[1]=D>>>8&255,H[2]=D>>>16&255,H[3]=D>>>24&255,l.check=c(l.check,H,4,0)),L=D=0,l.mode=4;case 4:for(;L<16;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}l.head&&(l.head.xflags=255&D,l.head.os=D>>8),512&l.flags&&(H[0]=255&D,H[1]=D>>>8&255,l.check=c(l.check,H,2,0)),L=D=0,l.mode=5;case 5:if(1024&l.flags){for(;L<16;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}l.length=D,l.head&&(l.head.extra_len=D),512&l.flags&&(H[0]=255&D,H[1]=D>>>8&255,l.check=c(l.check,H,2,0)),L=D=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(ue<(ce=l.length)&&(ce=ue),ce&&(l.head&&(s=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),h.arraySet(l.head.extra,te,q,ce,s)),512&l.flags&&(l.check=c(l.check,te,ce,q)),ue-=ce,q+=ce,l.length-=ce),l.length))break e;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(ue===0)break e;for(ce=0;s=te[q+ce++],l.head&&s&&l.length<65536&&(l.head.name+=String.fromCharCode(s)),s&&ce<ue;);if(512&l.flags&&(l.check=c(l.check,te,ce,q)),ue-=ce,q+=ce,s)break e}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(ue===0)break e;for(ce=0;s=te[q+ce++],l.head&&s&&l.length<65536&&(l.head.comment+=String.fromCharCode(s)),s&&ce<ue;);if(512&l.flags&&(l.check=c(l.check,te,ce,q)),ue-=ce,q+=ce,s)break e}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;L<16;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if(D!==(65535&l.check)){E.msg="header crc mismatch",l.mode=30;break}L=D=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),E.adler=l.check=0,l.mode=12;break;case 10:for(;L<32;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}E.adler=l.check=v(D),L=D=0,l.mode=11;case 11:if(l.havedict===0)return E.next_out=pe,E.avail_out=w,E.next_in=q,E.avail_in=ue,l.hold=D,l.bits=L,2;E.adler=l.check=1,l.mode=12;case 12:if(K===5||K===6)break e;case 13:if(l.last){D>>>=7&L,L-=7&L,l.mode=27;break}for(;L<3;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}switch(l.last=1&D,L-=1,3&(D>>>=1)){case 0:l.mode=14;break;case 1:if(re(l),l.mode=20,K!==6)break;D>>>=2,L-=2;break e;case 2:l.mode=17;break;case 3:E.msg="invalid block type",l.mode=30}D>>>=2,L-=2;break;case 14:for(D>>>=7&L,L-=7&L;L<32;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if((65535&D)!=(D>>>16^65535)){E.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&D,L=D=0,l.mode=15,K===6)break e;case 15:l.mode=16;case 16:if(ce=l.length){if(ue<ce&&(ce=ue),w<ce&&(ce=w),ce===0)break e;h.arraySet(ie,te,q,ce,pe),ue-=ce,q+=ce,w-=ce,pe+=ce,l.length-=ce;break}l.mode=12;break;case 17:for(;L<14;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if(l.nlen=257+(31&D),D>>>=5,L-=5,l.ndist=1+(31&D),D>>>=5,L-=5,l.ncode=4+(15&D),D>>>=4,L-=4,286<l.nlen||30<l.ndist){E.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;L<3;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}l.lens[he[l.have++]]=7&D,D>>>=3,L-=3}for(;l.have<19;)l.lens[he[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,Y={bits:l.lenbits},se=p(0,l.lens,0,19,l.lencode,0,l.work,Y),l.lenbits=Y.bits,se){E.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;Ee=(F=l.lencode[D&(1<<l.lenbits)-1])>>>16&255,Ve=65535&F,!((Ae=F>>>24)<=L);){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if(Ve<16)D>>>=Ae,L-=Ae,l.lens[l.have++]=Ve;else{if(Ve===16){for(M=Ae+2;L<M;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if(D>>>=Ae,L-=Ae,l.have===0){E.msg="invalid bit length repeat",l.mode=30;break}s=l.lens[l.have-1],ce=3+(3&D),D>>>=2,L-=2}else if(Ve===17){for(M=Ae+3;L<M;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}L-=Ae,s=0,ce=3+(7&(D>>>=Ae)),D>>>=3,L-=3}else{for(M=Ae+7;L<M;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}L-=Ae,s=0,ce=11+(127&(D>>>=Ae)),D>>>=7,L-=7}if(l.have+ce>l.nlen+l.ndist){E.msg="invalid bit length repeat",l.mode=30;break}for(;ce--;)l.lens[l.have++]=s}}if(l.mode===30)break;if(l.lens[256]===0){E.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,Y={bits:l.lenbits},se=p(T,l.lens,0,l.nlen,l.lencode,0,l.work,Y),l.lenbits=Y.bits,se){E.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,Y={bits:l.distbits},se=p(O,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,Y),l.distbits=Y.bits,se){E.msg="invalid distances set",l.mode=30;break}if(l.mode=20,K===6)break e;case 20:l.mode=21;case 21:if(6<=ue&&258<=w){E.next_out=pe,E.avail_out=w,E.next_in=q,E.avail_in=ue,l.hold=D,l.bits=L,m(E,Q),pe=E.next_out,ie=E.output,w=E.avail_out,q=E.next_in,te=E.input,ue=E.avail_in,D=l.hold,L=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;Ee=(F=l.lencode[D&(1<<l.lenbits)-1])>>>16&255,Ve=65535&F,!((Ae=F>>>24)<=L);){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if(Ee&&!(240&Ee)){for(Xe=Ae,xt=Ee,St=Ve;Ee=(F=l.lencode[St+((D&(1<<Xe+xt)-1)>>Xe)])>>>16&255,Ve=65535&F,!(Xe+(Ae=F>>>24)<=L);){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}D>>>=Xe,L-=Xe,l.back+=Xe}if(D>>>=Ae,L-=Ae,l.back+=Ae,l.length=Ve,Ee===0){l.mode=26;break}if(32&Ee){l.back=-1,l.mode=12;break}if(64&Ee){E.msg="invalid literal/length code",l.mode=30;break}l.extra=15&Ee,l.mode=22;case 22:if(l.extra){for(M=l.extra;L<M;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}l.length+=D&(1<<l.extra)-1,D>>>=l.extra,L-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;Ee=(F=l.distcode[D&(1<<l.distbits)-1])>>>16&255,Ve=65535&F,!((Ae=F>>>24)<=L);){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if(!(240&Ee)){for(Xe=Ae,xt=Ee,St=Ve;Ee=(F=l.distcode[St+((D&(1<<Xe+xt)-1)>>Xe)])>>>16&255,Ve=65535&F,!(Xe+(Ae=F>>>24)<=L);){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}D>>>=Xe,L-=Xe,l.back+=Xe}if(D>>>=Ae,L-=Ae,l.back+=Ae,64&Ee){E.msg="invalid distance code",l.mode=30;break}l.offset=Ve,l.extra=15&Ee,l.mode=24;case 24:if(l.extra){for(M=l.extra;L<M;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}l.offset+=D&(1<<l.extra)-1,D>>>=l.extra,L-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){E.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(w===0)break e;if(ce=Q-w,l.offset>ce){if((ce=l.offset-ce)>l.whave&&l.sane){E.msg="invalid distance too far back",l.mode=30;break}Me=ce>l.wnext?(ce-=l.wnext,l.wsize-ce):l.wnext-ce,ce>l.length&&(ce=l.length),Ue=l.window}else Ue=ie,Me=pe-l.offset,ce=l.length;for(w<ce&&(ce=w),w-=ce,l.length-=ce;ie[pe++]=Ue[Me++],--ce;);l.length===0&&(l.mode=21);break;case 26:if(w===0)break e;ie[pe++]=l.length,w--,l.mode=21;break;case 27:if(l.wrap){for(;L<32;){if(ue===0)break e;ue--,D|=te[q++]<<L,L+=8}if(Q-=w,E.total_out+=Q,l.total+=Q,Q&&(E.adler=l.check=l.flags?c(l.check,ie,Q,pe-Q):g(l.check,ie,Q,pe-Q)),Q=w,(l.flags?D:v(D))!==l.check){E.msg="incorrect data check",l.mode=30;break}L=D=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;L<32;){if(ue===0)break e;ue--,D+=te[q++]<<L,L+=8}if(D!==(4294967295&l.total)){E.msg="incorrect length check",l.mode=30;break}L=D=0}l.mode=29;case 29:se=1;break e;case 30:se=-3;break e;case 31:return-4;case 32:default:return y}return E.next_out=pe,E.avail_out=w,E.next_in=q,E.avail_in=ue,l.hold=D,l.bits=L,(l.wsize||Q!==E.avail_out&&l.mode<30&&(l.mode<27||K!==4))&&we(E,E.output,E.next_out,Q-E.avail_out)?(l.mode=31,-4):(ne-=E.avail_in,Q-=E.avail_out,E.total_in+=ne,E.total_out+=Q,l.total+=Q,l.wrap&&Q&&(E.adler=l.check=l.flags?c(l.check,ie,Q,E.next_out-Q):g(l.check,ie,Q,E.next_out-Q)),E.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(ne==0&&Q===0||K===4)&&se===R&&(se=-5),se)},b.inflateEnd=function(E){if(!E||!E.state)return y;var K=E.state;return K.window&&(K.window=null),E.state=null,R},b.inflateGetHeader=function(E,K){var l;return E&&E.state&&2&(l=E.state).wrap?((l.head=K).done=!1,R):y},b.inflateSetDictionary=function(E,K){var l,te=K.length;return E&&E.state?(l=E.state).wrap!==0&&l.mode!==11?y:l.mode===11&&g(1,K,te,0)!==l.check?-3:we(E,K,te,te)?(l.mode=31,-4):(l.havedict=1,R):y},b.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(u,f,b){var h=u("../utils/common"),g=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],c=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],p=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];f.exports=function(T,O,R,y,A,d,C,v){var k,N,_,I,$,J,ge,B,re,we=v.bits,E=0,K=0,l=0,te=0,ie=0,q=0,pe=0,ue=0,w=0,D=0,L=null,ne=0,Q=new h.Buf16(16),ce=new h.Buf16(16),Me=null,Ue=0;for(E=0;E<=15;E++)Q[E]=0;for(K=0;K<y;K++)Q[O[R+K]]++;for(ie=we,te=15;1<=te&&Q[te]===0;te--);if(te<ie&&(ie=te),te===0)return A[d++]=20971520,A[d++]=20971520,v.bits=1,0;for(l=1;l<te&&Q[l]===0;l++);for(ie<l&&(ie=l),E=ue=1;E<=15;E++)if(ue<<=1,(ue-=Q[E])<0)return-1;if(0<ue&&(T===0||te!==1))return-1;for(ce[1]=0,E=1;E<15;E++)ce[E+1]=ce[E]+Q[E];for(K=0;K<y;K++)O[R+K]!==0&&(C[ce[O[R+K]]++]=K);if(J=T===0?(L=Me=C,19):T===1?(L=g,ne-=257,Me=c,Ue-=257,256):(L=m,Me=p,-1),E=l,$=d,pe=K=D=0,_=-1,I=(w=1<<(q=ie))-1,T===1&&852<w||T===2&&592<w)return 1;for(;;){for(ge=E-pe,re=C[K]<J?(B=0,C[K]):C[K]>J?(B=Me[Ue+C[K]],L[ne+C[K]]):(B=96,0),k=1<<E-pe,l=N=1<<q;A[$+(D>>pe)+(N-=k)]=ge<<24|B<<16|re|0,N!==0;);for(k=1<<E-1;D&k;)k>>=1;if(k!==0?(D&=k-1,D+=k):D=0,K++,--Q[E]==0){if(E===te)break;E=O[R+C[K]]}if(ie<E&&(D&I)!==_){for(pe===0&&(pe=ie),$+=l,ue=1<<(q=E-pe);q+pe<te&&!((ue-=Q[q+pe])<=0);)q++,ue<<=1;if(w+=1<<q,T===1&&852<w||T===2&&592<w)return 1;A[_=D&I]=ie<<24|q<<16|$-d|0}}return D!==0&&(A[$+D]=E-pe<<24|64<<16|0),v.bits=ie,0}},{"../utils/common":41}],51:[function(u,f,b){f.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(u,f,b){var h=u("../utils/common"),g=0,c=1;function m(F){for(var H=F.length;0<=--H;)F[H]=0}var p=0,T=29,O=256,R=O+1+T,y=30,A=19,d=2*R+1,C=15,v=16,k=7,N=256,_=16,I=17,$=18,J=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ge=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],we=new Array(2*(R+2));m(we);var E=new Array(2*y);m(E);var K=new Array(512);m(K);var l=new Array(256);m(l);var te=new Array(T);m(te);var ie,q,pe,ue=new Array(y);function w(F,H,he,de,Z){this.static_tree=F,this.extra_bits=H,this.extra_base=he,this.elems=de,this.max_length=Z,this.has_stree=F&&F.length}function D(F,H){this.dyn_tree=F,this.max_code=0,this.stat_desc=H}function L(F){return F<256?K[F]:K[256+(F>>>7)]}function ne(F,H){F.pending_buf[F.pending++]=255&H,F.pending_buf[F.pending++]=H>>>8&255}function Q(F,H,he){F.bi_valid>v-he?(F.bi_buf|=H<<F.bi_valid&65535,ne(F,F.bi_buf),F.bi_buf=H>>v-F.bi_valid,F.bi_valid+=he-v):(F.bi_buf|=H<<F.bi_valid&65535,F.bi_valid+=he)}function ce(F,H,he){Q(F,he[2*H],he[2*H+1])}function Me(F,H){for(var he=0;he|=1&F,F>>>=1,he<<=1,0<--H;);return he>>>1}function Ue(F,H,he){var de,Z,ye=new Array(C+1),be=0;for(de=1;de<=C;de++)ye[de]=be=be+he[de-1]<<1;for(Z=0;Z<=H;Z++){var Se=F[2*Z+1];Se!==0&&(F[2*Z]=Me(ye[Se]++,Se))}}function Ae(F){var H;for(H=0;H<R;H++)F.dyn_ltree[2*H]=0;for(H=0;H<y;H++)F.dyn_dtree[2*H]=0;for(H=0;H<A;H++)F.bl_tree[2*H]=0;F.dyn_ltree[2*N]=1,F.opt_len=F.static_len=0,F.last_lit=F.matches=0}function Ee(F){8<F.bi_valid?ne(F,F.bi_buf):0<F.bi_valid&&(F.pending_buf[F.pending++]=F.bi_buf),F.bi_buf=0,F.bi_valid=0}function Ve(F,H,he,de){var Z=2*H,ye=2*he;return F[Z]<F[ye]||F[Z]===F[ye]&&de[H]<=de[he]}function Xe(F,H,he){for(var de=F.heap[he],Z=he<<1;Z<=F.heap_len&&(Z<F.heap_len&&Ve(H,F.heap[Z+1],F.heap[Z],F.depth)&&Z++,!Ve(H,de,F.heap[Z],F.depth));)F.heap[he]=F.heap[Z],he=Z,Z<<=1;F.heap[he]=de}function xt(F,H,he){var de,Z,ye,be,Se=0;if(F.last_lit!==0)for(;de=F.pending_buf[F.d_buf+2*Se]<<8|F.pending_buf[F.d_buf+2*Se+1],Z=F.pending_buf[F.l_buf+Se],Se++,de===0?ce(F,Z,H):(ce(F,(ye=l[Z])+O+1,H),(be=J[ye])!==0&&Q(F,Z-=te[ye],be),ce(F,ye=L(--de),he),(be=ge[ye])!==0&&Q(F,de-=ue[ye],be)),Se<F.last_lit;);ce(F,N,H)}function St(F,H){var he,de,Z,ye=H.dyn_tree,be=H.stat_desc.static_tree,Se=H.stat_desc.has_stree,Re=H.stat_desc.elems,Ie=-1;for(F.heap_len=0,F.heap_max=d,he=0;he<Re;he++)ye[2*he]!==0?(F.heap[++F.heap_len]=Ie=he,F.depth[he]=0):ye[2*he+1]=0;for(;F.heap_len<2;)ye[2*(Z=F.heap[++F.heap_len]=Ie<2?++Ie:0)]=1,F.depth[Z]=0,F.opt_len--,Se&&(F.static_len-=be[2*Z+1]);for(H.max_code=Ie,he=F.heap_len>>1;1<=he;he--)Xe(F,ye,he);for(Z=Re;he=F.heap[1],F.heap[1]=F.heap[F.heap_len--],Xe(F,ye,1),de=F.heap[1],F.heap[--F.heap_max]=he,F.heap[--F.heap_max]=de,ye[2*Z]=ye[2*he]+ye[2*de],F.depth[Z]=(F.depth[he]>=F.depth[de]?F.depth[he]:F.depth[de])+1,ye[2*he+1]=ye[2*de+1]=Z,F.heap[1]=Z++,Xe(F,ye,1),2<=F.heap_len;);F.heap[--F.heap_max]=F.heap[1],function(He,_t){var on,Xt,An,lt,kt,Fo,Pt=_t.dyn_tree,Rt=_t.max_code,Kn=_t.stat_desc.static_tree,Oi=_t.stat_desc.has_stree,Mi=_t.stat_desc.extra_bits,Nn=_t.stat_desc.extra_base,It=_t.stat_desc.max_length,Jt=0;for(lt=0;lt<=C;lt++)He.bl_count[lt]=0;for(Pt[2*He.heap[He.heap_max]+1]=0,on=He.heap_max+1;on<d;on++)It<(lt=Pt[2*Pt[2*(Xt=He.heap[on])+1]+1]+1)&&(lt=It,Jt++),Pt[2*Xt+1]=lt,Rt<Xt||(He.bl_count[lt]++,kt=0,Nn<=Xt&&(kt=Mi[Xt-Nn]),Fo=Pt[2*Xt],He.opt_len+=Fo*(lt+kt),Oi&&(He.static_len+=Fo*(Kn[2*Xt+1]+kt)));if(Jt!==0){do{for(lt=It-1;He.bl_count[lt]===0;)lt--;He.bl_count[lt]--,He.bl_count[lt+1]+=2,He.bl_count[It]--,Jt-=2}while(0<Jt);for(lt=It;lt!==0;lt--)for(Xt=He.bl_count[lt];Xt!==0;)Rt<(An=He.heap[--on])||(Pt[2*An+1]!==lt&&(He.opt_len+=(lt-Pt[2*An+1])*Pt[2*An],Pt[2*An+1]=lt),Xt--)}}(F,H),Ue(ye,Ie,F.bl_count)}function s(F,H,he){var de,Z,ye=-1,be=H[1],Se=0,Re=7,Ie=4;for(be===0&&(Re=138,Ie=3),H[2*(he+1)+1]=65535,de=0;de<=he;de++)Z=be,be=H[2*(de+1)+1],++Se<Re&&Z===be||(Se<Ie?F.bl_tree[2*Z]+=Se:Z!==0?(Z!==ye&&F.bl_tree[2*Z]++,F.bl_tree[2*_]++):Se<=10?F.bl_tree[2*I]++:F.bl_tree[2*$]++,ye=Z,Ie=(Se=0)===be?(Re=138,3):Z===be?(Re=6,3):(Re=7,4))}function se(F,H,he){var de,Z,ye=-1,be=H[1],Se=0,Re=7,Ie=4;for(be===0&&(Re=138,Ie=3),de=0;de<=he;de++)if(Z=be,be=H[2*(de+1)+1],!(++Se<Re&&Z===be)){if(Se<Ie)for(;ce(F,Z,F.bl_tree),--Se!=0;);else Z!==0?(Z!==ye&&(ce(F,Z,F.bl_tree),Se--),ce(F,_,F.bl_tree),Q(F,Se-3,2)):Se<=10?(ce(F,I,F.bl_tree),Q(F,Se-3,3)):(ce(F,$,F.bl_tree),Q(F,Se-11,7));ye=Z,Ie=(Se=0)===be?(Re=138,3):Z===be?(Re=6,3):(Re=7,4)}}m(ue);var Y=!1;function M(F,H,he,de){Q(F,(p<<1)+(de?1:0),3),function(Z,ye,be,Se){Ee(Z),ne(Z,be),ne(Z,~be),h.arraySet(Z.pending_buf,Z.window,ye,be,Z.pending),Z.pending+=be}(F,H,he)}b._tr_init=function(F){Y||(function(){var H,he,de,Z,ye,be=new Array(C+1);for(Z=de=0;Z<T-1;Z++)for(te[Z]=de,H=0;H<1<<J[Z];H++)l[de++]=Z;for(l[de-1]=Z,Z=ye=0;Z<16;Z++)for(ue[Z]=ye,H=0;H<1<<ge[Z];H++)K[ye++]=Z;for(ye>>=7;Z<y;Z++)for(ue[Z]=ye<<7,H=0;H<1<<ge[Z]-7;H++)K[256+ye++]=Z;for(he=0;he<=C;he++)be[he]=0;for(H=0;H<=143;)we[2*H+1]=8,H++,be[8]++;for(;H<=255;)we[2*H+1]=9,H++,be[9]++;for(;H<=279;)we[2*H+1]=7,H++,be[7]++;for(;H<=287;)we[2*H+1]=8,H++,be[8]++;for(Ue(we,R+1,be),H=0;H<y;H++)E[2*H+1]=5,E[2*H]=Me(H,5);ie=new w(we,J,O+1,R,C),q=new w(E,ge,0,y,C),pe=new w(new Array(0),B,0,A,k)}(),Y=!0),F.l_desc=new D(F.dyn_ltree,ie),F.d_desc=new D(F.dyn_dtree,q),F.bl_desc=new D(F.bl_tree,pe),F.bi_buf=0,F.bi_valid=0,Ae(F)},b._tr_stored_block=M,b._tr_flush_block=function(F,H,he,de){var Z,ye,be=0;0<F.level?(F.strm.data_type===2&&(F.strm.data_type=function(Se){var Re,Ie=4093624447;for(Re=0;Re<=31;Re++,Ie>>>=1)if(1&Ie&&Se.dyn_ltree[2*Re]!==0)return g;if(Se.dyn_ltree[18]!==0||Se.dyn_ltree[20]!==0||Se.dyn_ltree[26]!==0)return c;for(Re=32;Re<O;Re++)if(Se.dyn_ltree[2*Re]!==0)return c;return g}(F)),St(F,F.l_desc),St(F,F.d_desc),be=function(Se){var Re;for(s(Se,Se.dyn_ltree,Se.l_desc.max_code),s(Se,Se.dyn_dtree,Se.d_desc.max_code),St(Se,Se.bl_desc),Re=A-1;3<=Re&&Se.bl_tree[2*re[Re]+1]===0;Re--);return Se.opt_len+=3*(Re+1)+5+5+4,Re}(F),Z=F.opt_len+3+7>>>3,(ye=F.static_len+3+7>>>3)<=Z&&(Z=ye)):Z=ye=he+5,he+4<=Z&&H!==-1?M(F,H,he,de):F.strategy===4||ye===Z?(Q(F,2+(de?1:0),3),xt(F,we,E)):(Q(F,4+(de?1:0),3),function(Se,Re,Ie,He){var _t;for(Q(Se,Re-257,5),Q(Se,Ie-1,5),Q(Se,He-4,4),_t=0;_t<He;_t++)Q(Se,Se.bl_tree[2*re[_t]+1],3);se(Se,Se.dyn_ltree,Re-1),se(Se,Se.dyn_dtree,Ie-1)}(F,F.l_desc.max_code+1,F.d_desc.max_code+1,be+1),xt(F,F.dyn_ltree,F.dyn_dtree)),Ae(F),de&&Ee(F)},b._tr_tally=function(F,H,he){return F.pending_buf[F.d_buf+2*F.last_lit]=H>>>8&255,F.pending_buf[F.d_buf+2*F.last_lit+1]=255&H,F.pending_buf[F.l_buf+F.last_lit]=255&he,F.last_lit++,H===0?F.dyn_ltree[2*he]++:(F.matches++,H--,F.dyn_ltree[2*(l[he]+O+1)]++,F.dyn_dtree[2*L(H)]++),F.last_lit===F.lit_bufsize-1},b._tr_align=function(F){Q(F,2,3),ce(F,N,we),function(H){H.bi_valid===16?(ne(H,H.bi_buf),H.bi_buf=0,H.bi_valid=0):8<=H.bi_valid&&(H.pending_buf[H.pending++]=255&H.bi_buf,H.bi_buf>>=8,H.bi_valid-=8)}(F)}},{"../utils/common":41}],53:[function(u,f,b){f.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(u,f,b){(function(h){(function(g,c){if(!g.setImmediate){var m,p,T,O,R=1,y={},A=!1,d=g.document,C=Object.getPrototypeOf&&Object.getPrototypeOf(g);C=C&&C.setTimeout?C:g,m={}.toString.call(g.process)==="[object process]"?function(_){process.nextTick(function(){k(_)})}:function(){if(g.postMessage&&!g.importScripts){var _=!0,I=g.onmessage;return g.onmessage=function(){_=!1},g.postMessage("","*"),g.onmessage=I,_}}()?(O="setImmediate$"+Math.random()+"$",g.addEventListener?g.addEventListener("message",N,!1):g.attachEvent("onmessage",N),function(_){g.postMessage(O+_,"*")}):g.MessageChannel?((T=new MessageChannel).port1.onmessage=function(_){k(_.data)},function(_){T.port2.postMessage(_)}):d&&"onreadystatechange"in d.createElement("script")?(p=d.documentElement,function(_){var I=d.createElement("script");I.onreadystatechange=function(){k(_),I.onreadystatechange=null,p.removeChild(I),I=null},p.appendChild(I)}):function(_){setTimeout(k,0,_)},C.setImmediate=function(_){typeof _!="function"&&(_=new Function(""+_));for(var I=new Array(arguments.length-1),$=0;$<I.length;$++)I[$]=arguments[$+1];var J={callback:_,args:I};return y[R]=J,m(R),R++},C.clearImmediate=v}function v(_){delete y[_]}function k(_){if(A)setTimeout(k,0,_);else{var I=y[_];if(I){A=!0;try{(function($){var J=$.callback,ge=$.args;switch(ge.length){case 0:J();break;case 1:J(ge[0]);break;case 2:J(ge[0],ge[1]);break;case 3:J(ge[0],ge[1],ge[2]);break;default:J.apply(c,ge)}})(I)}finally{v(_),A=!1}}}}function N(_){_.source===g&&typeof _.data=="string"&&_.data.indexOf(O)===0&&k(+_.data.slice(O.length))}})(typeof self>"u"?h===void 0?this:h:self)}).call(this,typeof xr<"u"?xr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(Yl)),Yl.exports}var zf=Lf();const Kl=Bm(zf);function Co(x){const X=[];let u=[],f="",b=!1,h=0;for(;h<x.length;){const g=x[h],c=h+1<x.length?x[h+1]:null;if(g==='"')if(b&&c==='"'){f+='"',h+=2;continue}else{b=!b,h++;continue}if(g===`
`&&!b){u.push(f),X.push(u),u=[],f="",h++,h<x.length&&x[h]==="\r"&&h++;continue}if(g==="\r"&&!b&&c===`
`){u.push(f),X.push(u),u=[],f="",h+=2;continue}if(g===","&&!b){u.push(f),f="",h++;continue}f+=g,h++}return(f||u.length>0)&&(u.push(f),X.push(u)),X}const Vf=async x=>{const X=await Kl.loadAsync(x),u={csvContent:"",cssContent:""},f=Object.keys(X.files).filter(A=>!A.startsWith("__MACOSX/")),b=f.filter(A=>A.endsWith(".csv")),h=f.filter(A=>A.endsWith(".css")),g=f.filter(A=>A.toLowerCase().endsWith(".png"));if(b.length===0)throw new Error("No CSV file found in zip");if(b.length>1)throw new Error("Multiple CSV files found in zip. Please include only one CSV file.");if(h.length===0)throw new Error("No CSS file found in zip");if(h.length>1)throw new Error("Multiple CSS files found in zip. Please include only one CSS file.");const c=X.files[b[0]],m=X.files[h[0]];let p=await c.async("string");u.cssContent=await m.async("string");const T=h[0].replace(".css","").split("/").pop()||"";u.cssFileName=T;const O=p.indexOf("camera_menu_config");if(O!==-1){const A=p.substring(0,O+18+1),C=p.substring(O+18+1).split(`
`);let v=-1;for(let k=0;k<C.length;k++)if(C[k].startsWith("css_file,")){v=k;break}if(v!==-1)C[v]=`css_file,${T}`;else{const k=C.findIndex(N=>N.startsWith("display_name,"));k!==-1?C.splice(k+1,0,`css_file,${T}`):C.unshift(`css_file,${T}`)}p=A+C.join(`
`)}else p=p.trim()+`
camera_menu_config,
css_file,`+T+`
`;if(u.csvContent=p,g.length>0){const d=await X.files[g[0]].async("blob"),C=await Hf(d);u.iconData=C}const R=Co(u.csvContent),y=R.findIndex(A=>A.length>0&&A[0]==="camera_menu_config");if(y>=0){const A=R.slice(y+1);for(const d of A)d.length!==0&&(d[0]==="brand"&&d.length>1?u.brand=d[1].trim():d[0]==="model"&&d.length>1?u.model=d[1].trim():d[0]==="display_name"&&d.length>1&&(u.displayName=d[1].trim()))}return!u.displayName&&u.brand&&u.model&&(u.displayName=`${u.brand} ${u.model}`.trim()),u},Hf=x=>new Promise((X,u)=>{const f=new FileReader;f.onloadend=()=>{const b=f.result.split(",")[1];X(b)},f.onerror=u,f.readAsDataURL(x)}),_f=async(x,X)=>{const u=await Vf(x),f=Object.keys((await Kl.loadAsync(x)).files).find(m=>m.endsWith(".csv"))||"custom",b=`custom-${Date.now()}-${Math.random().toString(36).substring(7)}`;let h=u.brand,g=u.model,c=X==null?void 0:X.trim();if(X&&!h&&!g){const m=X.split(" ");m.length>1?(h=m[0],g=m.slice(1).join(" ")):(h=X,g="")}if(c||(h&&g?c=`${h} ${g}`.trim():c=u.displayName||f.replace(".csv","")),u.csvContent){const m=u.csvContent.indexOf("camera_menu_config");if(m!==-1){const p=u.csvContent.substring(0,m+18+1),O=u.csvContent.substring(m+18+1).split(`
`);let R=-1,y=-1,A=-1;for(let d=0;d<O.length;d++)O[d].startsWith("brand,")?R=d:O[d].startsWith("model,")?y=d:O[d].startsWith("display_name,")&&(A=d);if(h&&(R!==-1?O[R]=`brand,${h}`:O.unshift(`brand,${h}`)),g!==void 0)if(y!==-1)O[y]=`model,${g}`;else{const d=R!==-1?R+1:0;O.splice(d,0,`model,${g}`)}A!==-1?O[A]=`display_name,${c}`:O.push(`display_name,${c}`),u.csvContent=p+O.join(`
`)}else{const p=[];h&&p.push(`brand,${h}`),g!==void 0&&p.push(`model,${g}`),p.push(`display_name,${c}`),u.csvContent=u.csvContent.trim()+`
camera_menu_config,
`+p.join(`
`)+`
`}}return{id:b,displayName:c,brand:h,model:g,csvContent:u.csvContent,cssContent:u.cssContent,cssFileName:u.cssFileName||f.replace(".csv",""),iconData:u.iconData,createdAt:Date.now()}},xm=(x,X="image/png")=>{const u=atob(x),f=new Array(u.length);for(let h=0;h<u.length;h++)f[h]=u.charCodeAt(h);const b=new Uint8Array(f);return new Blob([b],{type:X})},Bf=x=>{const X=[],u=x.indexOf("camera_menu_config");if(u===-1)return X;const b=x.substring(u).split(`
`);for(const h of b)if(h.startsWith("icon:")){const g=h.indexOf(":"),c=h.indexOf(",");if(g!==-1&&c!==-1){const m=h.substring(g+1,c),p=h.substring(c+1).trim();m&&p&&X.push({name:m,base64:p})}}return X},Im=async x=>{const X=new Kl,u=`${x.cssFileName}.csv`,f=`${x.cssFileName}.css`;X.file(u,x.csvContent),X.file(f,x.cssContent);const b=Bf(x.csvContent);if(x.iconData){const m=xm(x.iconData);X.file("icon.png",m)}for(const m of b)try{const p=xm(m.base64);X.file(`${m.name}.png`,p)}catch(p){console.warn(`Failed to add icon ${m.name}:`,p)}const h=await X.generateAsync({type:"blob"}),g=URL.createObjectURL(h),c=document.createElement("a");c.href=g,c.download=`${x.cssFileName}.zip`,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(g)};var jm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Nm=Go.createContext&&Go.createContext(jm),jf=["attr","size","title"];function Uf(x,X){if(x==null)return{};var u=Wf(x,X),f,b;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(x);for(b=0;b<h.length;b++)f=h[b],!(X.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(x,f)&&(u[f]=x[f])}return u}function Wf(x,X){if(x==null)return{};var u={};for(var f in x)if(Object.prototype.hasOwnProperty.call(x,f)){if(X.indexOf(f)>=0)continue;u[f]=x[f]}return u}function Lr(){return Lr=Object.assign?Object.assign.bind():function(x){for(var X=1;X<arguments.length;X++){var u=arguments[X];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(x[f]=u[f])}return x},Lr.apply(this,arguments)}function Lm(x,X){var u=Object.keys(x);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(x);X&&(f=f.filter(function(b){return Object.getOwnPropertyDescriptor(x,b).enumerable})),u.push.apply(u,f)}return u}function zr(x){for(var X=1;X<arguments.length;X++){var u=arguments[X]!=null?arguments[X]:{};X%2?Lm(Object(u),!0).forEach(function(f){Zf(x,f,u[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(u)):Lm(Object(u)).forEach(function(f){Object.defineProperty(x,f,Object.getOwnPropertyDescriptor(u,f))})}return x}function Zf(x,X,u){return X=Gf(X),X in x?Object.defineProperty(x,X,{value:u,enumerable:!0,configurable:!0,writable:!0}):x[X]=u,x}function Gf(x){var X=Qf(x,"string");return typeof X=="symbol"?X:X+""}function Qf(x,X){if(typeof x!="object"||!x)return x;var u=x[Symbol.toPrimitive];if(u!==void 0){var f=u.call(x,X);if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(X==="string"?String:Number)(x)}function Um(x){return x&&x.map((X,u)=>Go.createElement(X.tag,zr({key:u},X.attr),Um(X.child)))}function wo(x){return X=>Go.createElement(Yf,Lr({attr:zr({},x.attr)},X),Um(x.child))}function Yf(x){var X=u=>{var{attr:f,size:b,title:h}=x,g=Uf(x,jf),c=b||u.size||"1em",m;return u.className&&(m=u.className),x.className&&(m=(m?m+" ":"")+x.className),Go.createElement("svg",Lr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,f,g,{className:m,style:zr(zr({color:x.color||u.color},u.style),x.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),h&&Go.createElement("title",null,h),x.children)};return Nm!==void 0?Go.createElement(Nm.Consumer,null,u=>X(u)):X(jm)}function qf(x){return wo({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"},child:[]}]})(x)}function Xf(x){return wo({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"},child:[]}]})(x)}function Jf(x){return wo({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"},child:[]}]})(x)}function Kf(x){return wo({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",clipRule:"evenodd"},child:[]}]})(x)}function $f(x){return wo({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",clipRule:"evenodd"},child:[]}]})(x)}function zm(x){return wo({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"},child:[]}]})(x)}function ep(x){return wo({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",clipRule:"evenodd"},child:[]}]})(x)}function Vr(x){return wo({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"},child:[]}]})(x)}const ql=({isOpen:x,onClose:X,title:u,children:f,footer:b,disabled:h=!1})=>{if(!x)return null;const g=()=>{h||X()},c=m=>{m.stopPropagation()};return le.jsx("div",{className:"modal-overlay",onClick:g,children:le.jsxs("div",{className:"modal-content",onClick:c,children:[le.jsxs("div",{className:"modal-header",children:[le.jsx("h2",{children:u}),le.jsx("button",{className:"modal-close",onClick:X,disabled:h,title:"Close","aria-label":"Close",children:le.jsx(Vr,{})})]}),le.jsx("div",{className:"modal-body",children:f}),b&&le.jsx("div",{className:"modal-footer",children:b})]})})},Vm=Object.assign({"./data/canon5Div.csv":uf,"./data/canonR5ii.csv":cf,"./data/nikonZ6ii.csv":hf,"./data/panasonicS1.csv":mf,"./data/sonyA7Riii.csv":df,"./data/sonyA7iii.csv":gf,"./data/sonyA7iv.csv":ff}),Hm=Object.assign({"./data/canon5Div.css":pf,"./data/canonR5ii.css":Sf,"./data/default.css":yf,"./data/nikonZ6ii.css":vf,"./data/panasonicS1.css":bf,"./data/sonyA7Riii.css":Cf,"./data/sonyA7iii.css":Af,"./data/sonyA7iv.css":wf}),_m=Object.assign({"./data/canon5Div.css":Ff,"./data/canonR5ii.css":Of,"./data/default.css":Mf,"./data/nikonZ6ii.css":kf,"./data/panasonicS1.css":Pf,"./data/sonyA7Riii.css":Rf,"./data/sonyA7iii.css":Tf,"./data/sonyA7iv.css":Df}),$l={},Ca={};Object.keys(Hm).forEach(x=>{const X=x.replace("./data/","").replace(".css","");$l[X]=Hm[x]});Object.keys(_m).forEach(x=>{const X=x.replace("./data/","").replace(".css","");Ca[X]=_m[x]});const Pn=x=>x&&($l[x]||Ca[x])?x:"default",qt={},pt={},ft={},nn={},tn={},kn={};Object.keys(Vm).forEach(x=>{const X=x.replace("./data/","").replace(".csv",""),u=X,f=Vm[x];qt[u]=f;const b=Co(f),h=b.findIndex(g=>g.length>0&&g[0]==="camera_menu_config");if(h>=0){const g=b.slice(h+1);for(const c of g)c.length!==0&&(c[0]==="brand"&&c.length>1?pt[u]=c[1].trim():c[0]==="model"&&c.length>1?ft[u]=c[1].trim():c[0]==="display_name"&&c.length>1?nn[u]=c[1].trim():c[0]==="css_file"&&c.length>1&&(tn[u]=c[1].trim()))}if(!pt[u]&&nn[u]){const g=nn[u].split(" ");g.length>1?(pt[u]=g[0],ft[u]=g.slice(1).join(" ")):(pt[u]=nn[u],ft[u]="")}pt[u]||(pt[u]=X),ft[u]||(ft[u]=X),nn[u]||(nn[u]=`${pt[u]} ${ft[u]}`.trim()),tn[u]?tn[u]=Pn(tn[u]):tn[u]=Pn(X)});const tp=(x,X)=>{const u=X.trim();if(u==="")return;const f=u.split(",").map(h=>h.trim()).filter(h=>h!=="");if(f.length===0)return;let b=x;b.__order__||(b.__order__=[]);for(let h=0;h<f.length;h++){const g=f[h];if(g!=="")if(h===f.length-1)g in b||(b[g]="",Array.isArray(b.__order__)&&b.__order__.push(g));else{if(!(g in b)||typeof b[g]!="object"||b[g]===null){const c={__order__:[]};b[g]=c,Array.isArray(b.__order__)&&!b.__order__.includes(g)&&b.__order__.push(g)}b=b[g],b.__order__||(b.__order__=[])}}},Wm=(x,X,u,f,b,h,g="",c={},m=!1,p,T=[],O=!1,R,y,A,d,C)=>{const v=b.length,k=f===v,N=Array.isArray(X.__order__)?X.__order__:Object.keys(X).filter(_=>_!=="__order__");return N.length===0&&!(O&&k)?le.jsx(le.Fragment,{}):le.jsxs(le.Fragment,{children:[le.jsx("div",{className:`scroll-container level-${f} level`,children:le.jsxs("div",{className:`level-${f} container ${g}`,children:[le.jsx("div",{className:"level-heading",children:u||""}),N.map((_,I)=>{const $=_.match(/<i name="([^"]+)"\/>/),J=$?$[1]:null,ge=_.replace(/<i name="[^"]+"\/>/g,""),re=[...T,ge].join(" > "),we=X[_],E=we&&typeof we=="object"&&we.__help__,K=c[re]!==void 0||E,l=c[re],te=()=>{if(O){h(f,I);return}m&&K&&l&&p?p(l,re):h(f,I)},ie=b[f]===I,q=O&&k&&y===_,pe=O&&k,ue=ne=>{O&&k&&A&&C&&(ne.stopPropagation(),A(_),C(ge))},w=ne=>{C&&C(ne.target.value)},D=ne=>{const Q=ne.currentTarget.value.trim();R&&(Q===""?R.onDeleteItem(f,I):R.onEditText(f,I,Q)),A&&A(null)},L=ne=>{if(ne.key==="Enter"){ne.preventDefault();const Q=ne.currentTarget.value.trim();R&&(Q===""?R.onDeleteItem(f,I):R.onEditText(f,I,Q)),A&&A(null)}else ne.key==="Escape"&&(ne.preventDefault(),A&&A(null))};return le.jsxs("div",{className:`${ie?"selected":""} item-${I} item ${pe?"edit-mode":""}`,onClick:te,children:[le.jsx("span",{className:"index",children:I+1}),le.jsxs("span",{className:"label",onClick:pe?ue:void 0,style:pe?{cursor:"text"}:{},children:[J&&x.icons[J]&&le.jsx("span",{className:"icon",children:le.jsx("img",{alt:J,src:`data:image/png;base64, ${x.icons[J]}`})}),q&&R?le.jsx("input",{type:"text",className:"edit-text-input",value:d??ge,onClick:ne=>ne.stopPropagation(),onChange:w,onBlur:D,onKeyDown:L,autoFocus:!0}):ge]}),le.jsx("div",{className:`${m&&K?"has-help":""}`}),pe&&R&&le.jsxs("div",{className:"edit-controls",onClick:ne=>ne.stopPropagation(),children:[ie&&typeof we=="object"&&we!==null&&le.jsx("button",{className:"edit-add-sub-item",onClick:()=>R.onAddSubItem(f,I),title:"Add sub-item",children:"+"}),le.jsx("button",{className:"edit-delete-item",onClick:()=>R.onDeleteItem(f,I),title:"Delete item",children:le.jsx(Vr,{})})]})]},_)}),O&&k&&R&&le.jsx("div",{className:"edit-add-top-level",children:le.jsx("button",{className:"edit-add-top-level-button",onClick:()=>R.onAddTopLevelItem(),title:"Add item",children:"+ Add Item"})})]},`level-${f}-container`)}),N.map((_,I)=>{const $=X[_];return b[f]===I&&($ instanceof Object&&$!==null||O&&f===v-1)?Wm(x,$ instanceof Object&&$!==null?$:{__order__:[]},_,f+1,b,h,`${g} ${f===0?`category-${I}`:""}`,c,m,p,[...T,_.replace(/<i name="[^"]+"\/>/g,"")],O,R,y,A,d,C):null})]})},np=(x,X)=>(u,f)=>{const b=X.slice();b.splice(u,b.length-u,f),x(b)},op=(x,X)=>{const u=X.reduce(([f,b],h)=>{const c=(Array.isArray(b.__order__)?b.__order__:Object.keys(b).filter(p=>p!=="__order__"))[h];if(!c)return[f,b];const m=c.replace(/<i name="[^"]+"\/>/g,"");return[[...f,le.jsx("div",{className:"crumb",children:m},c),le.jsx("div",{className:"crumb-separator"})],b[c]]},[[],x]);return le.jsx("div",{className:"scroll-container crumb-path",children:le.jsxs("div",{className:"container",children:[le.jsx("div",{className:"crumb-separator"}),u[0]]})})},Zm=(x,X,u,f,b,h)=>{const g=m=>{const p=m.replace(/<i name="[^"]+"\/>/g,"");return le.jsx("span",{children:p})},c=Array.isArray(x.__order__)?x.__order__:Object.keys(x).filter(m=>m!=="__order__");return[...c.map((m,p)=>m.toLowerCase().includes(X.toLowerCase())?le.jsx("div",{onClick:()=>b([...u,p]),children:[...f.map(T=>g(T)),g(m)].map((T,O)=>le.jsxs(le.Fragment,{children:[le.jsx("span",{children:T},O),le.jsx("span",{className:"search-crumb-separator"})]}))},m):null),...c.map((m,p)=>{const T=x[m];return T instanceof Object?Zm(T,X,[...u,p],[...f,m],b):[]})].filter(Boolean)};function ip(){const[x,X]=rt.useState([]),[u,f]=rt.useState(!1),[b,h]=rt.useState(null),[g,c]=rt.useState(!1),[m,p]=rt.useState(""),[T,O]=rt.useState(null),[R,y]=rt.useState(!1),A=rt.useRef(null),[d,C]=rt.useState(!1),[v,k]=rt.useState(""),[N,_]=rt.useState(""),I=async()=>{try{const U=await If();X(U),U.forEach(ee=>{qt[ee.id]=ee.csvContent,nn[ee.id]=ee.displayName,tn[ee.id]=Pn(ee.cssFileName),ee.brand&&(pt[ee.id]=ee.brand),ee.model&&(ft[ee.id]=ee.model);const ve=Co(ee.csvContent),Fe=ve.findIndex(Pe=>Pe.length>0&&Pe[0]==="camera_menu_config");if(Fe>=0){const Pe=ve.slice(Fe+1);for(const Ne of Pe)Ne.length!==0&&(Ne[0]==="brand"&&Ne.length>1?pt[ee.id]=Ne[1].trim():Ne[0]==="model"&&Ne.length>1&&(ft[ee.id]=Ne[1].trim()))}if(!pt[ee.id]){const Pe=ee.displayName.split(" ");Pe.length>1?(pt[ee.id]=Pe[0],ft[ee.id]=Pe.slice(1).join(" ")):(pt[ee.id]=ee.displayName,ft[ee.id]="")}ft[ee.id]||(ft[ee.id]="");const Be=new Blob([ee.cssContent],{type:"text/css"}),Ce=URL.createObjectURL(Be);kn[ee.id]=Ce})}catch(U){console.error("Failed to load custom cameras:",U)}};rt.useEffect(()=>(I(),()=>{Object.values(kn).forEach(U=>{URL.revokeObjectURL(U)})}),[]);const $=U=>{U.type==="application/zip"||U.name.endsWith(".zip")?(O(U),h(null)):h("Please select a ZIP file")},J=U=>{var ve;const ee=(ve=U.target.files)==null?void 0:ve[0];ee&&$(ee)},ge=U=>{U.preventDefault(),U.stopPropagation(),y(!0)},B=U=>{U.preventDefault(),U.stopPropagation(),y(!1)},re=U=>{U.preventDefault(),U.stopPropagation(),y(!1);const ee=U.dataTransfer.files[0];ee&&$(ee)},we=async()=>{if(!T){h("Please select a ZIP file");return}f(!0),h(null);try{const U=await _f(T,m||void 0);await Ir(U),qt[U.id]=U.csvContent,nn[U.id]=U.displayName,tn[U.id]=Pn(U.cssFileName),U.brand&&(pt[U.id]=U.brand),U.model&&(ft[U.id]=U.model);const ee=Co(U.csvContent),ve=ee.findIndex(Ce=>Ce.length>0&&Ce[0]==="camera_menu_config");if(ve>=0){const Ce=ee.slice(ve+1);for(const Pe of Ce)Pe.length!==0&&(Pe[0]==="brand"&&Pe.length>1?pt[U.id]=Pe[1].trim():Pe[0]==="model"&&Pe.length>1&&(ft[U.id]=Pe[1].trim()))}if(!pt[U.id]){const Ce=U.displayName.split(" ");Ce.length>1?(pt[U.id]=Ce[0],ft[U.id]=Ce.slice(1).join(" ")):(pt[U.id]=U.displayName,ft[U.id]="")}ft[U.id]||(ft[U.id]="");const Fe=new Blob([U.cssContent],{type:"text/css"}),Be=URL.createObjectURL(Fe);kn[U.id]=Be,X(Ce=>[...Ce,U]),D(U.id),ne(pe(U.id)),c(!1),O(null),p(""),A.current&&(A.current.value="")}catch(U){h(U instanceof Error?U.message:"Failed to upload camera"),console.error("Upload error:",U)}finally{f(!1)}},E=()=>{u||(c(!1),O(null),p(""),h(null),A.current&&(A.current.value=""))},K=async U=>{try{if(await Nf(U),delete qt[U],delete pt[U],delete ft[U],delete nn[U],delete tn[U],kn[U]&&(URL.revokeObjectURL(kn[U]),delete kn[U]),X(ee=>ee.filter(ve=>ve.id!==U)),w===U){const ee=Object.keys(qt);ee.length>0&&(D(ee[0]),ne(pe(ee[0])))}}catch(ee){console.error("Failed to delete camera:",ee)}},l=async U=>{try{const ee=x.find(ve=>ve.id===U);if(ee){const ve={csvContent:ee.csvContent,cssContent:ee.cssContent,cssFileName:ee.cssFileName,iconData:ee.iconData};await Im(ve)}else{const ve=qt[U];if(!ve){console.error("Camera CSV not found");return}const Fe=Pn(tn[U]||U),Be=Ca[Fe];if(!Be){console.error("Camera CSS not found");return}await Im({csvContent:ve,cssContent:Be,cssFileName:Fe})}}catch(ee){console.error("Failed to download camera:",ee)}},te=()=>{const U=pt[w]||"",ee=ft[w]||"";k(U),_(ee),C(!0)},ie=()=>{C(!1),k(""),_("")},q=async()=>{const U=v.trim(),ee=N.trim(),ve=U&&ee?`${U} ${ee}`.trim():U||ee;if(!ve)return;const Fe=x.find(Ce=>Ce.id===w);if(!!Fe){const Ce={...Fe,displayName:ve,brand:U,model:ee},Ne=Co(Ce.csvContent).findIndex(nt=>nt.length>0&&nt[0]==="camera_menu_config");if(Ne>=0){const nt=Ce.csvContent.substring(0,Ne+18+1),ot=Ce.csvContent.substring(Ne+18+1).split(`
`);let $e=-1,_e=-1,yt=-1;for(let We=0;We<ot.length;We++)ot[We].startsWith("brand,")?$e=We:ot[We].startsWith("model,")?_e=We:ot[We].startsWith("display_name,")&&(yt=We);if(U&&($e!==-1?ot[$e]=`brand,"${U.replace(/"/g,'""')}"`:ot.unshift(`brand,"${U.replace(/"/g,'""')}"`)),ee!==void 0)if(_e!==-1)ot[_e]=`model,"${ee.replace(/"/g,'""')}"`;else{const We=$e!==-1?$e+1:0;ot.splice(We,0,`model,"${ee.replace(/"/g,'""')}"`)}yt!==-1?ot[yt]=`display_name,"${ve.replace(/"/g,'""')}"`:ot.push(`display_name,"${ve.replace(/"/g,'""')}"`),Ce.csvContent=nt+ot.join(`
`)}await Ir(Ce),X(nt=>nt.map(ze=>ze.id===Ce.id?Ce:ze)),qt[Ce.id]=Ce.csvContent,nn[Ce.id]=Ce.displayName,Ce.brand&&(pt[Ce.id]=Ce.brand),Ce.model&&(ft[Ce.id]=Ce.model),ne(pe(Ce.id))}else{const Ce=qt[w],Pe=Pn(tn[w]||w),Ne=Ca[Pe]||"",ze=Co(Ce).findIndex(Je=>Je.length>0&&Je[0]==="camera_menu_config");let ot=Ce;if(ze>=0){const Je=Ce.substring(0,ze+18+1),Oe=Ce.substring(ze+18+1).split(`
`);let Ge=-1,Te=-1,st=-1;for(let mt=0;mt<Oe.length;mt++)Oe[mt].startsWith("brand,")?Ge=mt:Oe[mt].startsWith("model,")?Te=mt:Oe[mt].startsWith("display_name,")&&(st=mt);if(U&&(Ge!==-1?Oe[Ge]=`brand,"${U.replace(/"/g,'""')}"`:Oe.unshift(`brand,"${U.replace(/"/g,'""')}"`)),ee!==void 0)if(Te!==-1)Oe[Te]=`model,"${ee.replace(/"/g,'""')}"`;else{const mt=Ge!==-1?Ge+1:0;Oe.splice(mt,0,`model,"${ee.replace(/"/g,'""')}"`)}st!==-1?Oe[st]=`display_name,"${ve.replace(/"/g,'""')}"`:Oe.push(`display_name,"${ve.replace(/"/g,'""')}"`),ot=Je+Oe.join(`
`)}else{const Je=[];U&&Je.push(`brand,"${U.replace(/"/g,'""')}"`),ee!==void 0&&Je.push(`model,"${ee.replace(/"/g,'""')}"`),Je.push(`display_name,"${ve.replace(/"/g,'""')}"`),ot=Ce.trim()+`
camera_menu_config,
`+Je.map(Wt=>Wt).join(`
`)+`
`}const _e={id:`custom-${Date.now()}-${Math.random().toString(36).substring(7)}`,displayName:ve,brand:U,model:ee,csvContent:ot,cssContent:Ne,cssFileName:Pe,createdAt:Date.now()};await Ir(_e),X(Je=>[...Je,_e]),qt[_e.id]=_e.csvContent,nn[_e.id]=_e.displayName,tn[_e.id]=Pn(_e.cssFileName),_e.brand&&(pt[_e.id]=_e.brand),_e.model&&(ft[_e.id]=_e.model);const yt=new Blob([_e.cssContent],{type:"text/css"}),We=URL.createObjectURL(yt);kn[_e.id]=We,D(_e.id),ne(pe(_e.id))}C(!1),k(""),_("")},pe=U=>{var yt,We,Je,Wt;if(!U)return{data:{},config:{icons:{}},helpMap:{}};const ee={__order__:[]},ve={},Fe={icons:{}},Be=qt[U];if(!Be)return{data:{},config:{icons:{}},helpMap:{}};const Ce=Co(Be);if(Ce.length===0)return{data:{},config:{icons:{}},helpMap:{}};const Pe=Ce.findIndex(Oe=>Oe.length>0&&Oe[0]==="camera_menu_config"),Ne=Pe>=0?Ce.slice(1,Pe):Ce.slice(1),nt=Pe>=0?Ce.slice(Pe+1):[];let ze=[],ot=!1,$e=-1;if(Ne.length>0)for(const Oe of Ne){if(Oe.length===0||Oe.every(st=>st.trim()===""))continue;if(Oe[0]==="camera_menu_config")break;const Ge=Oe.length-1;if((((yt=Oe[Ge])==null?void 0:yt.trim())||"")!==""){let st=!1;for(let mt=Ge-1;mt>0;mt--)if(((We=Oe[mt])==null?void 0:We.trim())===""){st=!0;break}if(st){ot=!0,$e=Ge;break}}}for(const Oe of Ne){if(Oe.length===0||Oe[0]==="camera_menu_config")break;const Ge=Oe;_e(Ge);let Te,st=Ge;$e>0&&$e<Ge.length&&(Te=((Je=Ge[$e])==null?void 0:Je.trim())||void 0,Te&&(st=Ge.slice(0,$e)));const mt=st.join(",");if(mt.trim()!=="")if(ot&&Te){const vt=[];let et=ee;et.__order__||(et.__order__=[]);const bt=st.filter(Rn=>Rn.trim()!=="");for(let Rn=0;Rn<bt.length;Rn++){const Kt=bt[Rn].trim();if(Kt!==""){const Oa=Kt.replace(/<i name="[^"]+"\/>/g,"");vt.push(Oa),Rn<bt.length-1?(et[Kt]||(et[Kt]={__order__:[]}),Array.isArray(et.__order__)&&!et.__order__.includes(Kt)&&et.__order__.push(Kt),et=et[Kt],et.__order__||(et.__order__=[])):(et[Kt]||(et[Kt]={__order__:[]}),Array.isArray(et.__order__)&&!et.__order__.includes(Kt)&&et.__order__.push(Kt),ve[vt.join(" > ")]=Te)}}}else tp(ee,mt);ze=Ge}for(const Oe of nt)if(Oe.length!==0){if(Oe[0]==="brand"&&Oe.length>1)Fe.brand=Oe[1].trim();else if(Oe[0]==="model"&&Oe.length>1)Fe.model=Oe[1].trim();else if(Oe[0]==="display_name"&&Oe.length>1)Fe.displayName=Oe[1].trim();else if(Oe[0]==="css_file"&&Oe.length>1)Fe.cssFile=Oe[1].trim();else if((Wt=Oe[0])!=null&&Wt.startsWith("icon"))if(Oe[0].startsWith("icon:")){const Ge=Oe[0].indexOf(":"),Te=Oe[0].indexOf(",");if(Ge!==-1&&Te!==-1){const st=Oe[0].substring(Ge+1,Te),mt=Oe.length>1?Oe[1]:Oe[0].substring(Te+1);Fe.icons[st]=mt}else if(Ge!==-1&&Oe.length>1){const st=Oe[0].substring(Ge+1);Fe.icons[st]=Oe[1]}}else{const Ge=Oe[0].indexOf(",");Ge!==-1&&Oe.length>1&&(Fe.icons[Oe[0].substring(5,Ge)]=Oe[1]||Oe[0].substring(Ge+1))}}return{data:ee,config:Fe,helpMap:ve};function _e(Oe){var Ge,Te;if(ze.length>0)for(let st=0;st<$e;st++){const mt=((Ge=Oe[st])==null?void 0:Ge.trim())==="",vt=Oe.some((et,bt)=>bt>st&&bt<$e&&(et==null?void 0:et.trim())!=="");mt&&vt&&st<ze.length&&((Te=ze[st])==null?void 0:Te.trim())!==""&&(Oe[st]=ze[st])}}},ue=()=>{const ee=new URLSearchParams(window.location.search).get("camera");return ee&&qt[ee]?ee:Object.keys(qt)[0]||""},[w,D]=rt.useState(ue()),[L,ne]=rt.useState(pe(w)),Q=L.data,ce=L.config,Me=L.helpMap||{},[Ue,Ae]=rt.useState([0,0]),[Ee,Ve]=rt.useState(""),[Xe,xt]=rt.useState(!1),[St,s]=rt.useState(!1),[se,Y]=rt.useState(!1),[M,F]=rt.useState(null),[H,he]=rt.useState(!1),[de,Z]=rt.useState(""),[ye,be]=rt.useState({}),[Se,Re]=rt.useState(!1),[Ie,He]=rt.useState(null),[_t,on]=rt.useState(null),[Xt,An]=rt.useState(""),lt=()=>{setTimeout(()=>{const U=document.activeElement;(!U||!U.closest(".search-group"))&&xt(!1)},200)};rt.useEffect(()=>{const U=Pn(ce.cssFile||tn[w]||w),ee="camera-specific-css";let ve=document.getElementById(ee);ve||(ve=document.createElement("link"),ve.id=ee,ve.rel="stylesheet",document.head.appendChild(ve));const Fe=kn[w]||$l[U];Fe&&(ve.href=Fe)},[w,ce.cssFile]),rt.useEffect(()=>{const U=new URLSearchParams(window.location.search);w?U.set("camera",w):U.delete("camera");const ee=`${window.location.pathname}${U.toString()?`?${U.toString()}`:""}`;window.history.replaceState({},"",ee)},[w]);const kt=np(Ae,Ue),Fo=Object.keys(qt),Pt=U=>x.some(ee=>ee.id===U),Rt=U=>{const ee=pt[U]||"",ve=ft[U]||"";return ee&&ve?`${ee} ${ve}`.trim():nn[U]||U},Kn=Fo.reduce((U,ee)=>{const ve=pt[ee]||"Other";return U[ve]||(U[ve]=[]),U[ve].push(ee),U},{});Object.keys(Kn).forEach(U=>{Kn[U].sort((ee,ve)=>{const Fe=Rt(ee),Be=Rt(ve);return Fe.localeCompare(Be)})});const Oi=(U,ee)=>{const ve=ye[ee]!==void 0?ye[ee]:U;F({text:ve,path:ee}),Z(ve),he(!1),Y(!0)},Mi=()=>{if(!M)return;const U={...Me,...ye};de.trim()?U[M.path]=de:delete U[M.path],be(U),he(!1);const ee={...M,text:de};F(ee)},Nn=()=>{M&&Z(M.text),he(!1)},It=(U,ee)=>{let ve=U;for(const Fe of ee){const Be=Array.isArray(ve.__order__)?ve.__order__:Object.keys(ve).filter(Pe=>Pe!=="__order__");if(Fe>=Be.length)return null;const Ce=Be[Fe];if(ve=ve[Ce],!ve||typeof ve!="object")return null}return ve},Jt=(U,ee,ve)=>{if(!Ie)return;const Fe=Ue.slice(0,U),Be=Fe.length>0?It(Ie,Fe):Ie;if(!Be)return;const Ce=Array.isArray(Be.__order__)?Be.__order__:Object.keys(Be).filter($e=>$e!=="__order__");if(ee>=Ce.length)return;const Pe=Ce[ee],Ne=Be[Pe],nt=Pe.match(/<i name="([^"]+)"\/>/),ze=nt?`<i name="${nt[1]}"/>`:"",ot=ze?`${ze}${ve}`:ve;if(ot!==Pe){const $e=JSON.parse(JSON.stringify(Ie)),_e=Fe.length>0?It($e,Fe):$e;if(!_e)return;const We=(Array.isArray(_e.__order__)?_e.__order__:Object.keys(_e).filter(Je=>Je!=="__order__"))[ee];delete _e[We],_e[ot]=Ne,Array.isArray(_e.__order__)&&(_e.__order__[ee]=ot),He($e),_t===Pe&&on(ot)}},Qo=(U,ee)=>{if(!Ie)return;const ve=Ue.slice(0,U+1),Fe=ve.slice(0,-1),Be=Fe.length>0?It(Ie,Fe):Ie;if(!Be)return;const Ce=Array.isArray(Be.__order__)?Be.__order__:Object.keys(Be).filter($e=>$e!=="__order__");if(ee>=Ce.length)return;const Pe=Ce[ee],Ne=JSON.parse(JSON.stringify(Ie)),nt=Fe.length>0?It(Ne,Fe):Ne;if(!nt)return;let ze=nt[Pe];(typeof ze!="object"||ze===null||Array.isArray(ze))&&(ze={__order__:[]},nt[Pe]=ze),ze.__order__||(ze.__order__=[]);const ot="New Item";ze[ot]={__order__:[]},Array.isArray(ze.__order__)&&ze.__order__.push(ot),He(Ne),Ae(ve)},Oo=()=>{if(!Ie)return;const U=Ue;if(!(U.length>0?It(Ie,U):Ie))return;const ve=JSON.parse(JSON.stringify(Ie)),Fe=U.length>0?It(ve,U):ve;if(!Fe)return;Fe.__order__||(Fe.__order__=[]);const Be="New Item";Fe[Be]={__order__:[]},Array.isArray(Fe.__order__)&&Fe.__order__.push(Be),He(ve),Ae(U)},Hr=(U,ee)=>{if(!Ie)return;const ve=Ue.slice(0,U),Fe=ve.length>0?It(Ie,ve):Ie;if(!Fe)return;const Be=Array.isArray(Fe.__order__)?Fe.__order__:Object.keys(Fe).filter(ze=>ze!=="__order__");if(ee>=Be.length)return;const Ce=Be[ee],Pe=JSON.parse(JSON.stringify(Ie)),Ne=ve.length>0?It(Pe,ve):Pe;if(!Ne)return;delete Ne[Ce],Array.isArray(Ne.__order__)&&(Ne.__order__=Ne.__order__.filter(ze=>ze!==Ce)),He(Pe),(Array.isArray(Ne.__order__)?Ne.__order__:Object.keys(Ne).filter(ze=>ze!=="__order__")).length===0&&ve.length>0?Ae(ve.slice(0,-1)):Ae(ve)},Aa=(U,ee={})=>{const ve=[],Fe=Object.keys(ee).length>0,Be=(Ce,Pe=[])=>{const Ne=Array.isArray(Ce.__order__)?Ce.__order__:Object.keys(Ce).filter(nt=>nt!=="__order__");for(const nt of Ne){const ze=Ce[nt],ot=nt.replace(/<i name="[^"]+"\/>/g,""),$e=[...Pe,ot],_e=$e.join(" > ");if(ze&&typeof ze=="object"&&ze!==null&&!Array.isArray(ze))if(Object.keys(ze).some(We=>We!=="__order__")){const We=$e.map(Je=>`"${Je.replace(/"/g,'""')}"`);if(Fe){const Je=ee[_e]||"";We.push(`"${Je.replace(/"/g,'""')}"`)}ve.push(We.join(",")),Be(ze,$e)}else{const We=$e.map(Je=>`"${Je.replace(/"/g,'""')}"`);if(Fe){const Je=ee[_e]||"";We.push(`"${Je.replace(/"/g,'""')}"`)}ve.push(We.join(","))}else{const yt=$e.map(We=>`"${We.replace(/"/g,'""')}"`);if(Fe){const We=ee[_e]||"";yt.push(`"${We.replace(/"/g,'""')}"`)}ve.push(yt.join(","))}}};return Be(U),ve.join(`
`)},wa=async U=>{try{const ee={...Me,...ye},ve=Aa(U,ee),Fe=x.find(vt=>vt.id===w),Be=!!Fe,Ce=(Fe==null?void 0:Fe.csvContent)||qt[w];if(!Ce)throw new Error("Original camera CSV not found");const Pe=Co(Ce),Ne=Pe.findIndex(vt=>vt.length>0&&vt[0]==="camera_menu_config"),nt=pt[w]||"",ze=ft[w]||"",ot=nn[w]||"",$e=Pn(tn[w]||w);let _e=ot,yt=ze;Be||(_e=`${ot} (Edited)`,yt=ze?`${ze} (Edited)`:"(Edited)");let We="";Ne>=0?We=`
`+Pe.slice(Ne).map(bt=>{if(bt.length>0){if(bt[0]==="display_name"&&!Be)return["display_name",_e];if(bt[0]==="model"&&!Be&&ze)return["model",yt]}return bt}).map(bt=>bt.map(Rn=>`"${Rn.replace(/"/g,'""')}"`).join(",")).join(`
`):(We=`
camera_menu_config,
`,nt&&(We+=`brand,"${nt.replace(/"/g,'""')}"
`),yt&&(We+=`model,"${yt.replace(/"/g,'""')}"
`),_e&&(We+=`display_name,"${_e.replace(/"/g,'""')}"
`),$e&&(We+=`css_file,"${$e.replace(/"/g,'""')}"
`));const Je=ve+We,Wt=Pn($e),Oe=(Fe==null?void 0:Fe.cssContent)||Ca[Wt]||"";let Ge=Fe==null?void 0:Fe.iconData;if(!Ge&&!Be){const vt=pe(w),et=Object.entries(vt.config.icons);et.length>0&&(Ge=et[0][1])}let Te;Be?Te={...Fe,csvContent:Je,cssContent:Oe,cssFileName:Wt,iconData:Ge}:Te={id:`custom-${Date.now()}-${Math.random().toString(36).substring(7)}`,displayName:_e,brand:nt,model:yt,csvContent:Je,cssContent:Oe,cssFileName:Wt,iconData:Ge,createdAt:Date.now()},await Ir(Te),qt[Te.id]=Te.csvContent,nn[Te.id]=Te.displayName,tn[Te.id]=Pn(Te.cssFileName),Te.brand&&(pt[Te.id]=Te.brand),Te.model&&(ft[Te.id]=Te.model),kn[Te.id]&&URL.revokeObjectURL(kn[Te.id]);const st=new Blob([Te.cssContent],{type:"text/css"}),mt=URL.createObjectURL(st);kn[Te.id]=mt,X(Be?vt=>vt.map(et=>et.id===Te.id?Te:et):vt=>[...vt,Te]),D(Te.id),ne(pe(Te.id)),Re(!1),He(null),be({})}catch(ee){console.error("Failed to save edited camera:",ee),alert("Failed to save edited camera. Please try again.")}},ki={onEditText:Jt,onAddSubItem:Qo,onAddTopLevelItem:Oo,onDeleteItem:Hr},Mo=()=>!Se||!Ie?!1:JSON.stringify(Ie)!==JSON.stringify(Q),Fa=Se&&Ie?Ie:Q;return le.jsxs("div",{className:"root",children:[le.jsxs("div",{className:"controls-header",children:[le.jsxs("div",{className:`control-group camera-select-group ${Xe?"hidden":""}`,children:[le.jsxs("div",{className:"camera-select-wrapper has-buttons",children:[le.jsx("select",{className:"camera-select",value:w,onChange:({target:{value:U}})=>{D(U),ne(pe(U))},children:Object.keys(Kn).sort().map(U=>le.jsx("optgroup",{label:U,children:Kn[U].map(ee=>le.jsx("option",{value:ee,children:Rt(ee)},ee))},U))}),le.jsx("div",{className:"camera-select-buttons",children:le.jsx("button",{className:"settings-camera-button",onClick:te,title:"Camera settings","aria-label":"Camera settings",children:le.jsx(Kf,{})})})]}),!Se&&le.jsx("button",{className:"upload-button",onClick:()=>c(!0),title:"Upload camera","aria-label":"Upload camera",children:le.jsx(qf,{})}),le.jsx("button",{className:`help-mode-button ${St?"active":""}`,onClick:()=>{s(!St),St||Re(!1)},title:"Toggle help mode","aria-label":"Toggle help mode",children:le.jsx(ep,{})}),le.jsx("button",{className:`edit-mode-button ${Se?"active":""}`,onClick:()=>{Se?(Re(!1),on(null),An(""),be({})):(s(!1),He(JSON.parse(JSON.stringify(Q))),be({}),Re(!0),on(null),An(""))},title:Se?"Exit edit mode":"Enter edit mode","aria-label":Se?"Exit edit mode":"Enter edit mode",children:Se?le.jsx(Xf,{}):le.jsx(zm,{})}),Se&&le.jsx("button",{className:"save-edit-button",onClick:async()=>{Ie&&await wa(Ie)},disabled:!Mo(),title:"Save edited camera","aria-label":"Save edited camera",children:le.jsx(Jf,{})})]}),!Se&&le.jsxs("div",{className:`control-group search-group ${Xe?"expanded":""}`,children:[le.jsxs("div",{className:"search-container",children:[le.jsx("span",{className:"search-icon",children:le.jsx($f,{})}),le.jsx("input",{className:"search-input",type:"text",placeholder:"Search menu items...",value:Ee,onChange:U=>Ve(U.target.value),onFocus:()=>xt(!0),onBlur:lt}),Ee!==""&&le.jsx("button",{className:"search-clear",onClick:()=>Ve(""),title:"Clear search","aria-label":"Clear search",children:le.jsx(Vr,{})})]}),Ee!==""&&le.jsx("div",{className:"search-results",children:Zm(Q,Ee,[],[],Ae)})]})]}),le.jsx("div",{className:"wrapper",children:le.jsx("div",{className:`menu scroll-container ${Array.from({length:Ue.length}).map((U,ee)=>`level-${ee}-open`).join(" ")}`,children:le.jsxs("div",{className:"container",children:[op(Fa,Ue),Wm(ce,Fa,void 0,0,Ue,kt,"",Me,St,Oi,[],Se,Se?ki:void 0,_t,on,Xt,An),le.jsx("div",{className:"nav-buttons",children:le.jsx("div",{className:"back-button",onClick:()=>Ae(Ue.slice(0,-1))})})]})})}),le.jsxs(ql,{isOpen:g,onClose:E,title:"Upload Camera",disabled:u,footer:le.jsxs(le.Fragment,{children:[le.jsx("button",{className:"modal-cancel-button",onClick:E,disabled:u,title:"Cancel upload",children:"Cancel"}),le.jsx("button",{className:"modal-upload-button",onClick:we,disabled:!T||u,title:"Upload camera",children:u?"Uploading...":"Upload"})]}),children:[le.jsxs("div",{className:"form-group",children:[le.jsx("label",{htmlFor:"camera-name-input",children:"Camera Name"}),le.jsx("input",{id:"camera-name-input",type:"text",className:"camera-name-input",value:m,onChange:U=>p(U.target.value),placeholder:"Enter camera model name",disabled:u})]}),le.jsxs("div",{className:"form-group",children:[le.jsx("label",{children:"ZIP File"}),le.jsxs("div",{className:`drop-area ${R?"dragging":""} ${T?"has-file":""}`,onDragOver:ge,onDragLeave:B,onDrop:re,children:[le.jsx("input",{ref:A,type:"file",accept:".zip",onChange:J,style:{display:"none"},id:"camera-upload-input",disabled:u}),T?le.jsxs("div",{className:"file-selected",children:[le.jsx("span",{className:"file-name",children:T.name}),le.jsx("button",{className:"remove-file-button",onClick:()=>{O(null),A.current&&(A.current.value="")},disabled:u,title:"Remove file","aria-label":"Remove file",children:le.jsx(Vr,{})})]}):le.jsxs("div",{className:"drop-area-content",children:[le.jsx("img",{src:"/camera-menu/assets/UploadLargeIcon.svg",alt:""}),le.jsx("p",{children:"Drag and drop a ZIP file here, or"}),le.jsx("label",{htmlFor:"camera-upload-input",className:"browse-button",children:"Browse"}),le.jsx("p",{className:"file-hint",children:"ZIP file containing CSV, CSS, and optional PNG files"})]})]})]}),b&&le.jsx("div",{className:"upload-error",children:b})]}),M&&le.jsxs(ql,{isOpen:se,onClose:()=>{Y(!1),he(!1),M&&Z(M.text)},title:"Help",footer:H?le.jsxs(le.Fragment,{children:[le.jsx("button",{className:"modal-cancel-button",onClick:Nn,title:"Cancel editing",children:"Cancel"}),le.jsx("button",{className:"modal-upload-button",onClick:Mi,title:"Save help text",children:"Save"})]}):le.jsxs(le.Fragment,{children:[le.jsxs("button",{className:"modal-upload-button",onClick:()=>he(!0),title:"Edit help text",style:{marginRight:"8px"},children:[le.jsx(zm,{style:{marginRight:"4px",display:"inline"}}),"Edit"]}),le.jsx("button",{className:"modal-cancel-button",onClick:()=>Y(!1),title:"Close help",children:"Close"})]}),children:[le.jsx("div",{className:"help-path",children:M.path.replace(/<i name="[^"]+"\/>/g,"")}),H?le.jsx("textarea",{className:"help-text-edit",value:de,onChange:U=>Z(U.target.value),rows:10,style:{width:"100%",padding:"12px",backgroundColor:"#1a1a1a",color:"#fff",border:"1px solid #444",borderRadius:"4px",fontFamily:"inherit",fontSize:"16px",lineHeight:"1.6",resize:"vertical"}}):le.jsx("div",{className:"help-text",children:M.text})]}),le.jsxs(ql,{isOpen:d,onClose:ie,title:"Camera Settings",footer:le.jsx("button",{className:"modal-cancel-button",onClick:ie,title:"Close settings",children:"Close"}),children:[le.jsxs("div",{className:"form-group",children:[le.jsx("label",{htmlFor:"settings-camera-brand-input",children:"Camera Brand"}),le.jsx("input",{id:"settings-camera-brand-input",type:"text",className:"camera-name-input",value:v,onChange:U=>k(U.target.value),placeholder:"Enter camera brand"})]}),le.jsxs("div",{className:"form-group",children:[le.jsx("label",{htmlFor:"settings-camera-model-input",children:"Camera Model"}),le.jsx("input",{id:"settings-camera-model-input",type:"text",className:"camera-name-input",value:N,onChange:U=>_(U.target.value),placeholder:"Enter camera model"})]}),le.jsxs("div",{className:"form-group",children:[le.jsx("button",{className:"modal-upload-button",onClick:q,disabled:!v.trim()||v.trim()===(pt[w]||"")&&N.trim()===(ft[w]||""),style:{width:"100%",marginBottom:"12px"},title:"Rename camera",children:"Rename"}),Pt(w)&&le.jsx("button",{className:"modal-delete-button",onClick:async()=>{confirm("Are you sure you want to delete this camera?")&&(await K(w),C(!1))},style:{width:"100%",marginBottom:"12px"},title:"Delete camera",children:"Delete"}),le.jsx("button",{className:"modal-upload-button",onClick:async()=>{await l(w)},style:{width:"100%"},title:"Download camera",children:"Download"})]})]})]})}lf.createRoot(document.getElementById("root")).render(le.jsx(rt.StrictMode,{children:le.jsx(ip,{})}));
