(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Ef(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function pb(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var t=function s(){var o=!1;try{o=this instanceof s}catch{}return o?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var o=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return r[s]}})}),t}var Zp={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE;function zR(){if(VE)return Jl;VE=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:h,ref:o!==void 0?o:null,props:u}}return Jl.Fragment=e,Jl.jsx=t,Jl.jsxs=t,Jl}var LE;function BR(){return LE||(LE=1,Zp.exports=zR()),Zp.exports}var z=BR(),Jp={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE;function FR(){if(UE)return Oe;UE=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=R&&I[R]||I["@@iterator"],typeof I=="function"?I:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,ie={};function Y(I,M,se){this.props=I,this.context=M,this.refs=ie,this.updater=se||L}Y.prototype.isReactComponent={},Y.prototype.setState=function(I,M){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,M,"setState")},Y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function de(){}de.prototype=Y.prototype;function ge(I,M,se){this.props=I,this.context=M,this.refs=ie,this.updater=se||L}var ce=ge.prototype=new de;ce.constructor=ge,q(ce,Y.prototype),ce.isPureReactComponent=!0;var ye=Array.isArray,re={H:null,A:null,T:null,S:null,V:null},fe=Object.prototype.hasOwnProperty;function O(I,M,se,ne,me,Ce){return se=Ce.ref,{$$typeof:r,type:I,key:M,ref:se!==void 0?se:null,props:Ce}}function A(I,M){return O(I.type,M,void 0,void 0,void 0,I.props)}function D(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function C(I){var M={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return M[se]})}var P=/\/+/g;function x(I,M){return typeof I=="object"&&I!==null&&I.key!=null?C(""+I.key):M.toString(36)}function b(){}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(b,b):(I.status="pending",I.then(function(M){I.status==="pending"&&(I.status="fulfilled",I.value=M)},function(M){I.status==="pending"&&(I.status="rejected",I.reason=M)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function te(I,M,se,ne,me){var Ce=typeof I;(Ce==="undefined"||Ce==="boolean")&&(I=null);var Se=!1;if(I===null)Se=!0;else switch(Ce){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(I.$$typeof){case r:case e:Se=!0;break;case E:return Se=I._init,te(Se(I._payload),M,se,ne,me)}}if(Se)return me=me(I),Se=ne===""?"."+x(I,0):ne,ye(me)?(se="",Se!=null&&(se=Se.replace(P,"$&/")+"/"),te(me,M,se,"",function(lr){return lr})):me!=null&&(D(me)&&(me=A(me,se+(me.key==null||I&&I.key===me.key?"":(""+me.key).replace(P,"$&/")+"/")+Se)),M.push(me)),1;Se=0;var ft=ne===""?".":ne+":";if(ye(I))for(var Ge=0;Ge<I.length;Ge++)ne=I[Ge],Ce=ft+x(ne,Ge),Se+=te(ne,M,se,Ce,me);else if(Ge=w(I),typeof Ge=="function")for(I=Ge.call(I),Ge=0;!(ne=I.next()).done;)ne=ne.value,Ce=ft+x(ne,Ge++),Se+=te(ne,M,se,Ce,me);else if(Ce==="object"){if(typeof I.then=="function")return te(Z(I),M,se,ne,me);throw M=String(I),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return Se}function j(I,M,se){if(I==null)return I;var ne=[],me=0;return te(I,ne,"","",function(Ce){return M.call(se,Ce,me++)}),ne}function $(I){if(I._status===-1){var M=I._result;M=M(),M.then(function(se){(I._status===0||I._status===-1)&&(I._status=1,I._result=se)},function(se){(I._status===0||I._status===-1)&&(I._status=2,I._result=se)}),I._status===-1&&(I._status=0,I._result=M)}if(I._status===1)return I._result.default;throw I._result}var ae=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function le(){}return Oe.Children={map:j,forEach:function(I,M,se){j(I,function(){M.apply(this,arguments)},se)},count:function(I){var M=0;return j(I,function(){M++}),M},toArray:function(I){return j(I,function(M){return M})||[]},only:function(I){if(!D(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Oe.Component=Y,Oe.Fragment=t,Oe.Profiler=o,Oe.PureComponent=ge,Oe.StrictMode=s,Oe.Suspense=m,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return re.H.useMemoCache(I)}},Oe.cache=function(I){return function(){return I.apply(null,arguments)}},Oe.cloneElement=function(I,M,se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var ne=q({},I.props),me=I.key,Ce=void 0;if(M!=null)for(Se in M.ref!==void 0&&(Ce=void 0),M.key!==void 0&&(me=""+M.key),M)!fe.call(M,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&M.ref===void 0||(ne[Se]=M[Se]);var Se=arguments.length-2;if(Se===1)ne.children=se;else if(1<Se){for(var ft=Array(Se),Ge=0;Ge<Se;Ge++)ft[Ge]=arguments[Ge+2];ne.children=ft}return O(I.type,me,void 0,void 0,Ce,ne)},Oe.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},Oe.createElement=function(I,M,se){var ne,me={},Ce=null;if(M!=null)for(ne in M.key!==void 0&&(Ce=""+M.key),M)fe.call(M,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(me[ne]=M[ne]);var Se=arguments.length-2;if(Se===1)me.children=se;else if(1<Se){for(var ft=Array(Se),Ge=0;Ge<Se;Ge++)ft[Ge]=arguments[Ge+2];me.children=ft}if(I&&I.defaultProps)for(ne in Se=I.defaultProps,Se)me[ne]===void 0&&(me[ne]=Se[ne]);return O(I,Ce,void 0,void 0,null,me)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(I){return{$$typeof:p,render:I}},Oe.isValidElement=D,Oe.lazy=function(I){return{$$typeof:E,_payload:{_status:-1,_result:I},_init:$}},Oe.memo=function(I,M){return{$$typeof:y,type:I,compare:M===void 0?null:M}},Oe.startTransition=function(I){var M=re.T,se={};re.T=se;try{var ne=I(),me=re.S;me!==null&&me(se,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(le,ae)}catch(Ce){ae(Ce)}finally{re.T=M}},Oe.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},Oe.use=function(I){return re.H.use(I)},Oe.useActionState=function(I,M,se){return re.H.useActionState(I,M,se)},Oe.useCallback=function(I,M){return re.H.useCallback(I,M)},Oe.useContext=function(I){return re.H.useContext(I)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(I,M){return re.H.useDeferredValue(I,M)},Oe.useEffect=function(I,M,se){var ne=re.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ne.useEffect(I,M)},Oe.useId=function(){return re.H.useId()},Oe.useImperativeHandle=function(I,M,se){return re.H.useImperativeHandle(I,M,se)},Oe.useInsertionEffect=function(I,M){return re.H.useInsertionEffect(I,M)},Oe.useLayoutEffect=function(I,M){return re.H.useLayoutEffect(I,M)},Oe.useMemo=function(I,M){return re.H.useMemo(I,M)},Oe.useOptimistic=function(I,M){return re.H.useOptimistic(I,M)},Oe.useReducer=function(I,M,se){return re.H.useReducer(I,M,se)},Oe.useRef=function(I){return re.H.useRef(I)},Oe.useState=function(I){return re.H.useState(I)},Oe.useSyncExternalStore=function(I,M,se){return re.H.useSyncExternalStore(I,M,se)},Oe.useTransition=function(){return re.H.useTransition()},Oe.version="19.1.1",Oe}var jE;function Tf(){return jE||(jE=1,Jp.exports=FR()),Jp.exports}var ve=Tf();const He=Ef(ve);var em={exports:{}},eu={},tm={exports:{}},nm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zE;function qR(){return zE||(zE=1,function(r){function e(j,$){var ae=j.length;j.push($);e:for(;0<ae;){var le=ae-1>>>1,I=j[le];if(0<o(I,$))j[le]=$,j[ae]=I,ae=le;else break e}}function t(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var $=j[0],ae=j.pop();if(ae!==$){j[0]=ae;e:for(var le=0,I=j.length,M=I>>>1;le<M;){var se=2*(le+1)-1,ne=j[se],me=se+1,Ce=j[me];if(0>o(ne,ae))me<I&&0>o(Ce,ne)?(j[le]=Ce,j[me]=ae,le=me):(j[le]=ne,j[se]=ae,le=se);else if(me<I&&0>o(Ce,ae))j[le]=Ce,j[me]=ae,le=me;else break e}}return $}function o(j,$){var ae=j.sortIndex-$.sortIndex;return ae!==0?ae:j.id-$.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],y=[],E=1,R=null,w=3,L=!1,q=!1,ie=!1,Y=!1,de=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function ye(j){for(var $=t(y);$!==null;){if($.callback===null)s(y);else if($.startTime<=j)s(y),$.sortIndex=$.expirationTime,e(m,$);else break;$=t(y)}}function re(j){if(ie=!1,ye(j),!q)if(t(m)!==null)q=!0,fe||(fe=!0,x());else{var $=t(y);$!==null&&te(re,$.startTime-j)}}var fe=!1,O=-1,A=5,D=-1;function C(){return Y?!0:!(r.unstable_now()-D<A)}function P(){if(Y=!1,fe){var j=r.unstable_now();D=j;var $=!0;try{e:{q=!1,ie&&(ie=!1,ge(O),O=-1),L=!0;var ae=w;try{t:{for(ye(j),R=t(m);R!==null&&!(R.expirationTime>j&&C());){var le=R.callback;if(typeof le=="function"){R.callback=null,w=R.priorityLevel;var I=le(R.expirationTime<=j);if(j=r.unstable_now(),typeof I=="function"){R.callback=I,ye(j),$=!0;break t}R===t(m)&&s(m),ye(j)}else s(m);R=t(m)}if(R!==null)$=!0;else{var M=t(y);M!==null&&te(re,M.startTime-j),$=!1}}break e}finally{R=null,w=ae,L=!1}$=void 0}}finally{$?x():fe=!1}}}var x;if(typeof ce=="function")x=function(){ce(P)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,Z=b.port2;b.port1.onmessage=P,x=function(){Z.postMessage(null)}}else x=function(){de(P,0)};function te(j,$){O=de(function(){j(r.unstable_now())},$)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function(j){switch(w){case 1:case 2:case 3:var $=3;break;default:$=w}var ae=w;w=$;try{return j()}finally{w=ae}},r.unstable_requestPaint=function(){Y=!0},r.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ae=w;w=j;try{return $()}finally{w=ae}},r.unstable_scheduleCallback=function(j,$,ae){var le=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?le+ae:le):ae=le,j){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=ae+I,j={id:E++,callback:$,priorityLevel:j,startTime:ae,expirationTime:I,sortIndex:-1},ae>le?(j.sortIndex=ae,e(y,j),t(m)===null&&j===t(y)&&(ie?(ge(O),O=-1):ie=!0,te(re,ae-le))):(j.sortIndex=I,e(m,j),q||L||(q=!0,fe||(fe=!0,x()))),j},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(j){var $=w;return function(){var ae=w;w=$;try{return j.apply(this,arguments)}finally{w=ae}}}}(nm)),nm}var BE;function HR(){return BE||(BE=1,tm.exports=qR()),tm.exports}var rm={exports:{}},Jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FE;function GR(){if(FE)return Jt;FE=1;var r=Tf();function e(m){var y="https://react.dev/errors/"+m;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,y,E){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:R==null?null:""+R,children:m,containerInfo:y,implementation:E}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,y){if(m==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Jt.createPortal=function(m,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(m,y,null,E)},Jt.flushSync=function(m){var y=h.T,E=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=y,s.p=E,s.d.f()}},Jt.preconnect=function(m,y){typeof m=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(m,y))},Jt.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Jt.preinit=function(m,y){if(typeof m=="string"&&y&&typeof y.as=="string"){var E=y.as,R=p(E,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,L=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(m,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:R,integrity:w,fetchPriority:L}):E==="script"&&s.d.X(m,{crossOrigin:R,integrity:w,fetchPriority:L,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Jt.preinitModule=function(m,y){if(typeof m=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=p(y.as,y.crossOrigin);s.d.M(m,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(m)},Jt.preload=function(m,y){if(typeof m=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,R=p(E,y.crossOrigin);s.d.L(m,E,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Jt.preloadModule=function(m,y){if(typeof m=="string")if(y){var E=p(y.as,y.crossOrigin);s.d.m(m,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(m)},Jt.requestFormReset=function(m){s.d.r(m)},Jt.unstable_batchedUpdates=function(m,y){return m(y)},Jt.useFormState=function(m,y,E){return h.H.useFormState(m,y,E)},Jt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Jt.version="19.1.1",Jt}var qE;function mb(){if(qE)return rm.exports;qE=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),rm.exports=GR(),rm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE;function KR(){if(HE)return eu;HE=1;var r=HR(),e=Tf(),t=mb();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function h(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function m(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),n;if(d===l)return p(f),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var _=!1,T=f.child;T;){if(T===a){_=!0,a=f,l=d;break}if(T===l){_=!0,l=f,a=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===a){_=!0,a=d,l=f;break}if(T===l){_=!0,l=d,a=f;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function y(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=y(n),i!==null)return i;n=n.sibling}return null}var E=Object.assign,R=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),ge=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function x(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var b=Symbol.for("react.client.reference");function Z(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===b?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case q:return"Fragment";case Y:return"Profiler";case ie:return"StrictMode";case re:return"Suspense";case fe:return"SuspenseList";case D:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case L:return"Portal";case ce:return(n.displayName||"Context")+".Provider";case ge:return(n._context.displayName||"Context")+".Consumer";case ye:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return i=n.displayName||null,i!==null?i:Z(n.type)||"Memo";case A:i=n._payload,n=n._init;try{return Z(n(i))}catch{}}return null}var te=Array.isArray,j=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},le=[],I=-1;function M(n){return{current:n}}function se(n){0>I||(n.current=le[I],le[I]=null,I--)}function ne(n,i){I++,le[I]=n.current,n.current=i}var me=M(null),Ce=M(null),Se=M(null),ft=M(null);function Ge(n,i){switch(ne(Se,i),ne(Ce,n),ne(me,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?cE(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=cE(i),n=hE(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}se(me),ne(me,n)}function lr(){se(me),se(Ce),se(Se)}function Ti(n){n.memoizedState!==null&&ne(ft,n);var i=me.current,a=hE(i,n.type);i!==a&&(ne(Ce,n),ne(me,a))}function Mr(n){Ce.current===n&&(se(me),se(Ce)),ft.current===n&&(se(ft),$l._currentValue=ae)}var Ts=Object.prototype.hasOwnProperty,bs=r.unstable_scheduleCallback,Ss=r.unstable_cancelCallback,Go=r.unstable_shouldYield,Gu=r.unstable_requestPaint,xn=r.unstable_now,Zf=r.unstable_getCurrentPriorityLevel,Ko=r.unstable_ImmediatePriority,Sa=r.unstable_UserBlockingPriority,As=r.unstable_NormalPriority,Jf=r.unstable_LowPriority,Aa=r.unstable_IdlePriority,Yo=r.log,Ku=r.unstable_setDisableYieldValue,dt=null,$e=null;function En(n){if(typeof Yo=="function"&&Ku(n),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(dt,n)}catch{}}var Wt=Math.clz32?Math.clz32:ws,Yu=Math.log,ed=Math.LN2;function ws(n){return n>>>=0,n===0?32:31-(Yu(n)/ed|0)|0}var Rs=256,Is=4194304;function Xn(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function wa(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?f=Xn(l):(_&=T,_!==0?f=Xn(_):a||(a=T&~n,a!==0&&(f=Xn(a))))):(T=l&~d,T!==0?f=Xn(T):_!==0?f=Xn(_):a||(a=l&~n,a!==0&&(f=Xn(a)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:f}function Cs(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function $o(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qo(){var n=Rs;return Rs<<=1,(Rs&4194048)===0&&(Rs=256),n}function Xo(){var n=Is;return Is<<=1,(Is&62914560)===0&&(Is=4194304),n}function Vr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Lr(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Wo(n,i,a,l,f,d){var _=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,N=n.expirationTimes,F=n.hiddenUpdates;for(a=_&~a;0<a;){var Q=31-Wt(a),J=1<<Q;T[Q]=0,N[Q]=-1;var H=F[Q];if(H!==null)for(F[Q]=null,Q=0;Q<H.length;Q++){var G=H[Q];G!==null&&(G.lane&=-536870913)}a&=~J}l!==0&&ur(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(_&~i))}function ur(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-Wt(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function Zo(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-Wt(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}function bi(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ra(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Si(){var n=$.p;return n!==0?n:(n=window.event,n===void 0?32:OE(n.type))}function $u(n,i){var a=$.p;try{return $.p=n,i()}finally{$.p=a}}var at=Math.random().toString(36).slice(2),Ot="__reactFiber$"+at,St="__reactProps$"+at,Pn="__reactContainer$"+at,Jo="__reactEvents$"+at,td="__reactListeners$"+at,Ai="__reactHandles$"+at,Qu="__reactResources$"+at,Ds="__reactMarker$"+at;function wi(n){delete n[Ot],delete n[St],delete n[Jo],delete n[td],delete n[Ai]}function Ur(n){var i=n[Ot];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Pn]||a[Ot]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=mE(n);n!==null;){if(a=n[Ot])return a;n=mE(n)}return i}n=a,a=n.parentNode}return null}function cr(n){if(n=n[Ot]||n[Pn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function hr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function ln(n){var i=n[Qu];return i||(i=n[Qu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gt(n){n[Ds]=!0}var el=new Set,Ia={};function Wn(n,i){jr(n,i),jr(n+"Capture",i)}function jr(n,i){for(Ia[n]=i,n=0;n<i.length;n++)el.add(i[n])}var Xu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wu={},Os={};function Zu(n){return Ts.call(Os,n)?!0:Ts.call(Wu,n)?!1:Xu.test(n)?Os[n]=!0:(Wu[n]=!0,!1)}function Ri(n,i,a){if(Zu(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function fr(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function qt(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}var Ns,Ju;function zr(n){if(Ns===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Ns=i&&i[1]||"",Ju=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ns+n+Ju}var Ca=!1;function Da(n,i){if(!n||Ca)return"";Ca=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(G){var H=G}Reflect.construct(n,[],J)}else{try{J.call()}catch(G){H=G}n.call(J.prototype)}}else{try{throw Error()}catch(G){H=G}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var N=_.split(`
`),F=T.split(`
`);for(f=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;f<F.length&&!F[f].includes("DetermineComponentFrameRoot");)f++;if(l===N.length||f===F.length)for(l=N.length-1,f=F.length-1;1<=l&&0<=f&&N[l]!==F[f];)f--;for(;1<=l&&0<=f;l--,f--)if(N[l]!==F[f]){if(l!==1||f!==1)do if(l--,f--,0>f||N[l]!==F[f]){var Q=`
`+N[l].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=l&&0<=f);break}}}finally{Ca=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?zr(a):""}function tl(n){switch(n.tag){case 26:case 27:case 5:return zr(n.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 15:return Da(n.type,!1);case 11:return Da(n.type.render,!1);case 1:return Da(n.type,!0);case 31:return zr("Activity");default:return""}}function Oa(n){try{var i="";do i+=tl(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function un(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nl(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nd(n){var i=nl(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Na(n){n._valueTracker||(n._valueTracker=nd(n))}function rl(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=nl(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function xs(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var rd=/[\n"\\]/g;function At(n){return n.replace(rd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Tn(n,i,a,l,f,d,_,T){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),i!=null?_==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+un(i)):n.value!==""+un(i)&&(n.value=""+un(i)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),i!=null?Ii(n,_,un(i)):a!=null?Ii(n,_,un(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+un(T):n.removeAttribute("name")}function Ps(n,i,a,l,f,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+un(a):"",i=i!=null?""+un(i):a,T||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_)}function Ii(n,i,a){i==="number"&&xs(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Br(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+un(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function We(n,i,a){if(i!=null&&(i=""+un(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+un(a):""}function ks(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(te(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=un(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function kn(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ms=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ec(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Ms.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function il(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&ec(n,f,l)}else for(var d in i)i.hasOwnProperty(d)&&ec(n,d,i[d])}function sl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xa(n){return sd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Fr=null;function Mn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var qr=null,Hr=null;function al(n){var i=cr(n);if(i&&(n=i.stateNode)){var a=n[St]||null;e:switch(n=i.stateNode,i.type){case"input":if(Tn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+At(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=l[St]||null;if(!f)throw Error(s(90));Tn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&rl(l)}break e;case"textarea":We(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Br(n,!!a.multiple,i,!1)}}}var dr=!1;function tc(n,i,a){if(dr)return n(i,a);dr=!0;try{var l=n(i);return l}finally{if(dr=!1,(qr!==null||Hr!==null)&&($c(),qr&&(i=qr,n=Hr,Hr=qr=null,al(i),n)))for(i=0;i<n.length;i++)al(n[i])}}function Vs(n,i){var a=n.stateNode;if(a===null)return null;var l=a[St]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vn=!1;if(Zn)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Vn=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Vn=!1}var pr=null,Ci=null,Gr=null;function ol(){if(Gr)return Gr;var n,i=Ci,a=i.length,l,f="value"in pr?pr.value:pr.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var _=a-n;for(l=1;l<=_&&i[a-l]===f[d-l];l++);return Gr=f.slice(n,1<l?1-l:void 0)}function mr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function gr(){return!0}function ll(){return!1}function Lt(n){function i(a,l,f,d,_){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gr:ll,this.isPropagationStopped=ll,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),i}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=Lt(Ke),Us=E({},Ke,{view:0,detail:0}),nc=Lt(Us),ka,Ma,yr,js=E({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yr&&(yr&&n.type==="mousemove"?(ka=n.screenX-yr.screenX,Ma=n.screenY-yr.screenY):Ma=ka=0,yr=n),ka)},movementY:function(n){return"movementY"in n?n.movementY:Ma}}),Ln=Lt(js),rc=E({},js,{dataTransfer:0}),ad=Lt(rc),zs=E({},Us,{relatedTarget:0}),Va=Lt(zs),ul=E({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),La=Lt(ul),ic=E({},Ke,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ua=Lt(ic),od=E({},Ke,{data:0}),cl=Lt(od),Bs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ac={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ac[n])?!!i[n]:!1}function Fs(){return hl}var oc=E({},Us,{key:function(n){if(n.key){var i=Bs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=mr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(n){return n.type==="keypress"?mr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?mr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ja=Lt(oc),lc=E({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fl=Lt(lc),Kr=E({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),uc=Lt(Kr),cc=E({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),hc=Lt(cc),fc=E({},js,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),za=Lt(fc),cn=E({},Ke,{newState:0,oldState:0}),dc=Lt(cn),pc=[9,13,27,32],vr=Zn&&"CompositionEvent"in window,c=null;Zn&&"documentMode"in document&&(c=document.documentMode);var g=Zn&&"TextEvent"in window&&!c,v=Zn&&(!vr||c&&8<c&&11>=c),S=" ",U=!1;function K(n,i){switch(n){case"keyup":return pc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ue=!1;function Nt(n,i){switch(n){case"compositionend":return oe(i);case"keypress":return i.which!==32?null:(U=!0,S);case"textInput":return n=i.data,n===S&&U?null:n;default:return null}}function je(n,i){if(Ue)return n==="compositionend"||!vr&&K(n,i)?(n=ol(),Gr=Ci=pr=null,Ue=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var Ut={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xt(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ut[n.type]:i==="textarea"}function Yr(n,i,a,l){qr?Hr?Hr.push(l):Hr=[l]:qr=l,i=eh(i,"onChange"),0<i.length&&(a=new Pa("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var Ht=null,_r=null;function dl(n){sE(n,0)}function mc(n){var i=hr(n);if(rl(i))return n}function Ry(n,i){if(n==="change")return i}var Iy=!1;if(Zn){var ld;if(Zn){var ud="oninput"in document;if(!ud){var Cy=document.createElement("div");Cy.setAttribute("oninput","return;"),ud=typeof Cy.oninput=="function"}ld=ud}else ld=!1;Iy=ld&&(!document.documentMode||9<document.documentMode)}function Dy(){Ht&&(Ht.detachEvent("onpropertychange",Oy),_r=Ht=null)}function Oy(n){if(n.propertyName==="value"&&mc(_r)){var i=[];Yr(i,_r,n,Mn(n)),tc(dl,i)}}function g1(n,i,a){n==="focusin"?(Dy(),Ht=i,_r=a,Ht.attachEvent("onpropertychange",Oy)):n==="focusout"&&Dy()}function y1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return mc(_r)}function v1(n,i){if(n==="click")return mc(i)}function _1(n,i){if(n==="input"||n==="change")return mc(i)}function E1(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bn=typeof Object.is=="function"?Object.is:E1;function pl(n,i){if(bn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!Ts.call(i,f)||!bn(n[f],i[f]))return!1}return!0}function Ny(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xy(n,i){var a=Ny(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ny(a)}}function Py(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Py(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ky(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=xs(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=xs(n.document)}return i}function cd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var T1=Zn&&"documentMode"in document&&11>=document.documentMode,Ba=null,hd=null,ml=null,fd=!1;function My(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fd||Ba==null||Ba!==xs(l)||(l=Ba,"selectionStart"in l&&cd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ml&&pl(ml,l)||(ml=l,l=eh(hd,"onSelect"),0<l.length&&(i=new Pa("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Ba)))}function qs(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Fa={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionrun:qs("Transition","TransitionRun"),transitionstart:qs("Transition","TransitionStart"),transitioncancel:qs("Transition","TransitionCancel"),transitionend:qs("Transition","TransitionEnd")},dd={},Vy={};Zn&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Hs(n){if(dd[n])return dd[n];if(!Fa[n])return n;var i=Fa[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Vy)return dd[n]=i[a];return n}var Ly=Hs("animationend"),Uy=Hs("animationiteration"),jy=Hs("animationstart"),b1=Hs("transitionrun"),S1=Hs("transitionstart"),A1=Hs("transitioncancel"),zy=Hs("transitionend"),By=new Map,pd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pd.push("scrollEnd");function Jn(n,i){By.set(n,i),Wn(i,[n])}var Fy=new WeakMap;function Un(n,i){if(typeof n=="object"&&n!==null){var a=Fy.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Oa(i)},Fy.set(n,i),i)}return{value:n,source:i,stack:Oa(i)}}var jn=[],qa=0,md=0;function gc(){for(var n=qa,i=md=qa=0;i<n;){var a=jn[i];jn[i++]=null;var l=jn[i];jn[i++]=null;var f=jn[i];jn[i++]=null;var d=jn[i];if(jn[i++]=null,l!==null&&f!==null){var _=l.pending;_===null?f.next=f:(f.next=_.next,_.next=f),l.pending=f}d!==0&&qy(a,f,d)}}function yc(n,i,a,l){jn[qa++]=n,jn[qa++]=i,jn[qa++]=a,jn[qa++]=l,md|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function gd(n,i,a,l){return yc(n,i,a,l),vc(n)}function Ha(n,i){return yc(n,null,null,i),vc(n)}function qy(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&i!==null&&(f=31-Wt(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=a|536870912),d):null}function vc(n){if(50<zl)throw zl=0,bp=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Ga={};function w1(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(n,i,a,l){return new w1(n,i,a,l)}function yd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $r(n,i){var a=n.alternate;return a===null?(a=Sn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Hy(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function _c(n,i,a,l,f,d){var _=0;if(l=n,typeof n=="function")yd(n)&&(_=1);else if(typeof n=="string")_=IR(n,a,me.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case D:return n=Sn(31,a,i,f),n.elementType=D,n.lanes=d,n;case q:return Gs(a.children,f,d,i);case ie:_=8,f|=24;break;case Y:return n=Sn(12,a,i,f|2),n.elementType=Y,n.lanes=d,n;case re:return n=Sn(13,a,i,f),n.elementType=re,n.lanes=d,n;case fe:return n=Sn(19,a,i,f),n.elementType=fe,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case de:case ce:_=10;break e;case ge:_=9;break e;case ye:_=11;break e;case O:_=14;break e;case A:_=16,l=null;break e}_=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return i=Sn(_,a,i,f),i.elementType=n,i.type=l,i.lanes=d,i}function Gs(n,i,a,l){return n=Sn(7,n,l,i),n.lanes=a,n}function vd(n,i,a){return n=Sn(6,n,null,i),n.lanes=a,n}function _d(n,i,a){return i=Sn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var Ka=[],Ya=0,Ec=null,Tc=0,zn=[],Bn=0,Ks=null,Qr=1,Xr="";function Ys(n,i){Ka[Ya++]=Tc,Ka[Ya++]=Ec,Ec=n,Tc=i}function Gy(n,i,a){zn[Bn++]=Qr,zn[Bn++]=Xr,zn[Bn++]=Ks,Ks=n;var l=Qr;n=Xr;var f=32-Wt(l)-1;l&=~(1<<f),a+=1;var d=32-Wt(i)+f;if(30<d){var _=f-f%5;d=(l&(1<<_)-1).toString(32),l>>=_,f-=_,Qr=1<<32-Wt(i)+f|a<<f|l,Xr=d+n}else Qr=1<<d|a<<f|l,Xr=n}function Ed(n){n.return!==null&&(Ys(n,1),Gy(n,1,0))}function Td(n){for(;n===Ec;)Ec=Ka[--Ya],Ka[Ya]=null,Tc=Ka[--Ya],Ka[Ya]=null;for(;n===Ks;)Ks=zn[--Bn],zn[Bn]=null,Xr=zn[--Bn],zn[Bn]=null,Qr=zn[--Bn],zn[Bn]=null}var hn=null,pt=null,qe=!1,$s=null,Er=!1,bd=Error(s(519));function Qs(n){var i=Error(s(418,""));throw vl(Un(i,n)),bd}function Ky(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[Ot]=n,i[St]=l,a){case"dialog":ke("cancel",i),ke("close",i);break;case"iframe":case"object":case"embed":ke("load",i);break;case"video":case"audio":for(a=0;a<Fl.length;a++)ke(Fl[a],i);break;case"source":ke("error",i);break;case"img":case"image":case"link":ke("error",i),ke("load",i);break;case"details":ke("toggle",i);break;case"input":ke("invalid",i),Ps(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Na(i);break;case"select":ke("invalid",i);break;case"textarea":ke("invalid",i),ks(i,l.value,l.defaultValue,l.children),Na(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||uE(i.textContent,a)?(l.popover!=null&&(ke("beforetoggle",i),ke("toggle",i)),l.onScroll!=null&&ke("scroll",i),l.onScrollEnd!=null&&ke("scrollend",i),l.onClick!=null&&(i.onclick=th),i=!0):i=!1,i||Qs(n)}function Yy(n){for(hn=n.return;hn;)switch(hn.tag){case 5:case 13:Er=!1;return;case 27:case 3:Er=!0;return;default:hn=hn.return}}function gl(n){if(n!==hn)return!1;if(!qe)return Yy(n),qe=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Up(n.type,n.memoizedProps)),a=!a),a&&pt&&Qs(n),Yy(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){pt=tr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}pt=null}}else i===27?(i=pt,Hi(n.type)?(n=Fp,Fp=null,pt=n):pt=i):pt=hn?tr(n.stateNode.nextSibling):null;return!0}function yl(){pt=hn=null,qe=!1}function $y(){var n=$s;return n!==null&&(gn===null?gn=n:gn.push.apply(gn,n),$s=null),n}function vl(n){$s===null?$s=[n]:$s.push(n)}var Sd=M(null),Xs=null,Wr=null;function Di(n,i,a){ne(Sd,i._currentValue),i._currentValue=a}function Zr(n){n._currentValue=Sd.current,se(Sd)}function Ad(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function wd(n,i,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var _=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var N=0;N<i.length;N++)if(T.context===i[N]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Ad(d.return,a,n),l||(_=null);break e}d=T.next}}else if(f.tag===18){if(_=f.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Ad(_,a,n),_=null}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===n){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}}function _l(n,i,a,l){n=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var _=f.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=f.type;bn(f.pendingProps.value,_.value)||(n!==null?n.push(T):n=[T])}}else if(f===ft.current){if(_=f.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push($l):n=[$l])}f=f.return}n!==null&&wd(i,n,a,l),i.flags|=262144}function bc(n){for(n=n.firstContext;n!==null;){if(!bn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ws(n){Xs=n,Wr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Zt(n){return Qy(Xs,n)}function Sc(n,i){return Xs===null&&Ws(n),Qy(n,i)}function Qy(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Wr===null){if(n===null)throw Error(s(308));Wr=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Wr=Wr.next=i;return a}var R1=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},I1=r.unstable_scheduleCallback,C1=r.unstable_NormalPriority,Pt={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rd(){return{controller:new R1,data:new Map,refCount:0}}function El(n){n.refCount--,n.refCount===0&&I1(C1,function(){n.controller.abort()})}var Tl=null,Id=0,$a=0,Qa=null;function D1(n,i){if(Tl===null){var a=Tl=[];Id=0,$a=Dp(),Qa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Id++,i.then(Xy,Xy),i}function Xy(){if(--Id===0&&Tl!==null){Qa!==null&&(Qa.status="fulfilled");var n=Tl;Tl=null,$a=0,Qa=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function O1(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var Wy=j.S;j.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&D1(n,i),Wy!==null&&Wy(n,i)};var Zs=M(null);function Cd(){var n=Zs.current;return n!==null?n:nt.pooledCache}function Ac(n,i){i===null?ne(Zs,Zs.current):ne(Zs,i.pool)}function Zy(){var n=Cd();return n===null?null:{parent:Pt._currentValue,pool:n}}var bl=Error(s(460)),Jy=Error(s(474)),wc=Error(s(542)),Dd={then:function(){}};function ev(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Rc(){}function tv(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Rc,Rc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,rv(n),n;default:if(typeof i.status=="string")i.then(Rc,Rc);else{if(n=nt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,rv(n),n}throw Sl=i,bl}}var Sl=null;function nv(){if(Sl===null)throw Error(s(459));var n=Sl;return Sl=null,n}function rv(n){if(n===bl||n===wc)throw Error(s(483))}var Oi=!1;function Od(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ni(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function xi(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Qe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=vc(n),qy(n,null,a),i}return yc(n,l,i,a),vc(n)}function Al(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,Zo(n,a)}}function xd(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Pd=!1;function wl(){if(Pd){var n=Qa;if(n!==null)throw n}}function Rl(n,i,a,l){Pd=!1;var f=n.updateQueue;Oi=!1;var d=f.firstBaseUpdate,_=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var N=T,F=N.next;N.next=null,_===null?d=F:_.next=F,_=N;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==_&&(T===null?Q.firstBaseUpdate=F:T.next=F,Q.lastBaseUpdate=N))}if(d!==null){var J=f.baseState;_=0,Q=F=N=null,T=d;do{var H=T.lane&-536870913,G=H!==T.lane;if(G?(ze&H)===H:(l&H)===H){H!==0&&H===$a&&(Pd=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Re=n,Te=T;H=i;var et=a;switch(Te.tag){case 1:if(Re=Te.payload,typeof Re=="function"){J=Re.call(et,J,H);break e}J=Re;break e;case 3:Re.flags=Re.flags&-65537|128;case 0:if(Re=Te.payload,H=typeof Re=="function"?Re.call(et,J,H):Re,H==null)break e;J=E({},J,H);break e;case 2:Oi=!0}}H=T.callback,H!==null&&(n.flags|=64,G&&(n.flags|=8192),G=f.callbacks,G===null?f.callbacks=[H]:G.push(H))}else G={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(F=Q=G,N=J):Q=Q.next=G,_|=H;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;G=T,T=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);Q===null&&(N=J),f.baseState=N,f.firstBaseUpdate=F,f.lastBaseUpdate=Q,d===null&&(f.shared.lanes=0),zi|=_,n.lanes=_,n.memoizedState=J}}function iv(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function sv(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)iv(a[n],i)}var Xa=M(null),Ic=M(0);function av(n,i){n=si,ne(Ic,n),ne(Xa,i),si=n|i.baseLanes}function kd(){ne(Ic,si),ne(Xa,Xa.current)}function Md(){si=Ic.current,se(Xa),se(Ic)}var Pi=0,Ne=null,Ze=null,wt=null,Cc=!1,Wa=!1,Js=!1,Dc=0,Il=0,Za=null,N1=0;function yt(){throw Error(s(321))}function Vd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!bn(n[a],i[a]))return!1;return!0}function Ld(n,i,a,l,f,d){return Pi=d,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,j.H=n===null||n.memoizedState===null?qv:Hv,Js=!1,d=a(l,f),Js=!1,Wa&&(d=lv(i,a,l,f)),ov(n),d}function ov(n){j.H=Mc;var i=Ze!==null&&Ze.next!==null;if(Pi=0,wt=Ze=Ne=null,Cc=!1,Il=0,Za=null,i)throw Error(s(300));n===null||jt||(n=n.dependencies,n!==null&&bc(n)&&(jt=!0))}function lv(n,i,a,l){Ne=n;var f=0;do{if(Wa&&(Za=null),Il=0,Wa=!1,25<=f)throw Error(s(301));if(f+=1,wt=Ze=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}j.H=U1,d=i(a,l)}while(Wa);return d}function x1(){var n=j.H,i=n.useState()[0];return i=typeof i.then=="function"?Cl(i):i,n=n.useState()[0],(Ze!==null?Ze.memoizedState:null)!==n&&(Ne.flags|=1024),i}function Ud(){var n=Dc!==0;return Dc=0,n}function jd(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function zd(n){if(Cc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Cc=!1}Pi=0,wt=Ze=Ne=null,Wa=!1,Il=Dc=0,Za=null}function pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ne.memoizedState=wt=n:wt=wt.next=n,wt}function Rt(){if(Ze===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Ze.next;var i=wt===null?Ne.memoizedState:wt.next;if(i!==null)wt=i,Ze=n;else{if(n===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));Ze=n,n={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},wt===null?Ne.memoizedState=wt=n:wt=wt.next=n}return wt}function Bd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(n){var i=Il;return Il+=1,Za===null&&(Za=[]),n=tv(Za,n,i),i=Ne,(wt===null?i.memoizedState:wt.next)===null&&(i=i.alternate,j.H=i===null||i.memoizedState===null?qv:Hv),n}function Oc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Cl(n);if(n.$$typeof===ce)return Zt(n)}throw Error(s(438,String(n)))}function Fd(n){var i=null,a=Ne.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Bd(),Ne.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=C;return i.index++,a}function Jr(n,i){return typeof i=="function"?i(n):i}function Nc(n){var i=Rt();return qd(i,Ze,n)}function qd(n,i,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var _=f.next;f.next=d.next,d.next=_}i.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{i=f.next;var T=_=null,N=null,F=i,Q=!1;do{var J=F.lane&-536870913;if(J!==F.lane?(ze&J)===J:(Pi&J)===J){var H=F.revertLane;if(H===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),J===$a&&(Q=!0);else if((Pi&H)===H){F=F.next,H===$a&&(Q=!0);continue}else J={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},N===null?(T=N=J,_=d):N=N.next=J,Ne.lanes|=H,zi|=H;J=F.action,Js&&a(d,J),d=F.hasEagerState?F.eagerState:a(d,J)}else H={lane:J,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},N===null?(T=N=H,_=d):N=N.next=H,Ne.lanes|=J,zi|=J;F=F.next}while(F!==null&&F!==i);if(N===null?_=d:N.next=T,!bn(d,n.memoizedState)&&(jt=!0,Q&&(a=Qa,a!==null)))throw a;n.memoizedState=d,n.baseState=_,n.baseQueue=N,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Hd(n){var i=Rt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var _=f=f.next;do d=n(d,_.action),_=_.next;while(_!==f);bn(d,i.memoizedState)||(jt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function uv(n,i,a){var l=Ne,f=Rt(),d=qe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!bn((Ze||f).memoizedState,a);_&&(f.memoizedState=a,jt=!0),f=f.queue;var T=fv.bind(null,l,f,n);if(Dl(2048,8,T,[n]),f.getSnapshot!==i||_||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,Ja(9,xc(),hv.bind(null,l,f,a,i),null),nt===null)throw Error(s(349));d||(Pi&124)!==0||cv(l,i,a)}return a}function cv(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ne.updateQueue,i===null?(i=Bd(),Ne.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function hv(n,i,a,l){i.value=a,i.getSnapshot=l,dv(i)&&pv(n)}function fv(n,i,a){return a(function(){dv(i)&&pv(n)})}function dv(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!bn(n,a)}catch{return!0}}function pv(n){var i=Ha(n,2);i!==null&&Cn(i,n,2)}function Gd(n){var i=pn();if(typeof n=="function"){var a=n;if(n=a(),Js){En(!0);try{a()}finally{En(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:n},i}function mv(n,i,a,l){return n.baseState=a,qd(n,Ze,typeof l=="function"?l:Jr)}function P1(n,i,a,l,f){if(kc(n))throw Error(s(485));if(n=i.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};j.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,gv(i,d)):(d.next=a.next,i.pending=a.next=d)}}function gv(n,i){var a=i.action,l=i.payload,f=n.state;if(i.isTransition){var d=j.T,_={};j.T=_;try{var T=a(f,l),N=j.S;N!==null&&N(_,T),yv(n,i,T)}catch(F){Kd(n,i,F)}finally{j.T=d}}else try{d=a(f,l),yv(n,i,d)}catch(F){Kd(n,i,F)}}function yv(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){vv(n,i,l)},function(l){return Kd(n,i,l)}):vv(n,i,a)}function vv(n,i,a){i.status="fulfilled",i.value=a,_v(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,gv(n,a)))}function Kd(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,_v(i),i=i.next;while(i!==l)}n.action=null}function _v(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Ev(n,i){return i}function Tv(n,i){if(qe){var a=nt.formState;if(a!==null){e:{var l=Ne;if(qe){if(pt){t:{for(var f=pt,d=Er;f.nodeType!==8;){if(!d){f=null;break t}if(f=tr(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){pt=tr(f.nextSibling),l=f.data==="F!";break e}}Qs(l)}l=!1}l&&(i=a[0])}}return a=pn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ev,lastRenderedState:i},a.queue=l,a=zv.bind(null,Ne,l),l.dispatch=a,l=Gd(!1),d=Wd.bind(null,Ne,!1,l.queue),l=pn(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,a=P1.bind(null,Ne,f,d,a),f.dispatch=a,l.memoizedState=n,[i,a,!1]}function bv(n){var i=Rt();return Sv(i,Ze,n)}function Sv(n,i,a){if(i=qd(n,i,Ev)[0],n=Nc(Jr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Cl(i)}catch(_){throw _===bl?wc:_}else l=i;i=Rt();var f=i.queue,d=f.dispatch;return a!==i.memoizedState&&(Ne.flags|=2048,Ja(9,xc(),k1.bind(null,f,a),null)),[l,d,n]}function k1(n,i){n.action=i}function Av(n){var i=Rt(),a=Ze;if(a!==null)return Sv(i,a,n);Rt(),i=i.memoizedState,a=Rt();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function Ja(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=Bd(),Ne.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function xc(){return{destroy:void 0,resource:void 0}}function wv(){return Rt().memoizedState}function Pc(n,i,a,l){var f=pn();l=l===void 0?null:l,Ne.flags|=n,f.memoizedState=Ja(1|i,xc(),a,l)}function Dl(n,i,a,l){var f=Rt();l=l===void 0?null:l;var d=f.memoizedState.inst;Ze!==null&&l!==null&&Vd(l,Ze.memoizedState.deps)?f.memoizedState=Ja(i,d,a,l):(Ne.flags|=n,f.memoizedState=Ja(1|i,d,a,l))}function Rv(n,i){Pc(8390656,8,n,i)}function Iv(n,i){Dl(2048,8,n,i)}function Cv(n,i){return Dl(4,2,n,i)}function Dv(n,i){return Dl(4,4,n,i)}function Ov(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Nv(n,i,a){a=a!=null?a.concat([n]):null,Dl(4,4,Ov.bind(null,i,n),a)}function Yd(){}function xv(n,i){var a=Rt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Vd(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function Pv(n,i){var a=Rt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Vd(i,l[1]))return l[0];if(l=n(),Js){En(!0);try{n()}finally{En(!1)}}return a.memoizedState=[l,i],l}function $d(n,i,a){return a===void 0||(Pi&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=V_(),Ne.lanes|=n,zi|=n,a)}function kv(n,i,a,l){return bn(a,i)?a:Xa.current!==null?(n=$d(n,a,l),bn(n,i)||(jt=!0),n):(Pi&42)===0?(jt=!0,n.memoizedState=a):(n=V_(),Ne.lanes|=n,zi|=n,i)}function Mv(n,i,a,l,f){var d=$.p;$.p=d!==0&&8>d?d:8;var _=j.T,T={};j.T=T,Wd(n,!1,i,a);try{var N=f(),F=j.S;if(F!==null&&F(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var Q=O1(N,l);Ol(n,i,Q,In(n))}else Ol(n,i,l,In(n))}catch(J){Ol(n,i,{then:function(){},status:"rejected",reason:J},In())}finally{$.p=d,j.T=_}}function M1(){}function Qd(n,i,a,l){if(n.tag!==5)throw Error(s(476));var f=Vv(n).queue;Mv(n,f,i,ae,a===null?M1:function(){return Lv(n),a(l)})}function Vv(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:ae},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Lv(n){var i=Vv(n).next.queue;Ol(n,i,{},In())}function Xd(){return Zt($l)}function Uv(){return Rt().memoizedState}function jv(){return Rt().memoizedState}function V1(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=In();n=Ni(a);var l=xi(i,n,a);l!==null&&(Cn(l,i,a),Al(l,i,a)),i={cache:Rd()},n.payload=i;return}i=i.return}}function L1(n,i,a){var l=In();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},kc(n)?Bv(i,a):(a=gd(n,i,a,l),a!==null&&(Cn(a,n,l),Fv(a,i,l)))}function zv(n,i,a){var l=In();Ol(n,i,a,l)}function Ol(n,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(kc(n))Bv(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,T=d(_,a);if(f.hasEagerState=!0,f.eagerState=T,bn(T,_))return yc(n,i,f,0),nt===null&&gc(),!1}catch{}finally{}if(a=gd(n,i,f,l),a!==null)return Cn(a,n,l),Fv(a,i,l),!0}return!1}function Wd(n,i,a,l){if(l={lane:2,revertLane:Dp(),action:l,hasEagerState:!1,eagerState:null,next:null},kc(n)){if(i)throw Error(s(479))}else i=gd(n,a,l,2),i!==null&&Cn(i,n,2)}function kc(n){var i=n.alternate;return n===Ne||i!==null&&i===Ne}function Bv(n,i){Wa=Cc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Fv(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,Zo(n,a)}}var Mc={readContext:Zt,use:Oc,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt},qv={readContext:Zt,use:Oc,useCallback:function(n,i){return pn().memoizedState=[n,i===void 0?null:i],n},useContext:Zt,useEffect:Rv,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Pc(4194308,4,Ov.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Pc(4194308,4,n,i)},useInsertionEffect:function(n,i){Pc(4,2,n,i)},useMemo:function(n,i){var a=pn();i=i===void 0?null:i;var l=n();if(Js){En(!0);try{n()}finally{En(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=pn();if(a!==void 0){var f=a(i);if(Js){En(!0);try{a(i)}finally{En(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=L1.bind(null,Ne,n),[l.memoizedState,n]},useRef:function(n){var i=pn();return n={current:n},i.memoizedState=n},useState:function(n){n=Gd(n);var i=n.queue,a=zv.bind(null,Ne,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Yd,useDeferredValue:function(n,i){var a=pn();return $d(a,n,i)},useTransition:function(){var n=Gd(!1);return n=Mv.bind(null,Ne,n.queue,!0,!1),pn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=Ne,f=pn();if(qe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),nt===null)throw Error(s(349));(ze&124)!==0||cv(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,Rv(fv.bind(null,l,d,n),[n]),l.flags|=2048,Ja(9,xc(),hv.bind(null,l,d,a,i),null),a},useId:function(){var n=pn(),i=nt.identifierPrefix;if(qe){var a=Xr,l=Qr;a=(l&~(1<<32-Wt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Dc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=N1++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:Xd,useFormState:Tv,useActionState:Tv,useOptimistic:function(n){var i=pn();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Wd.bind(null,Ne,!0,a),a.dispatch=i,[n,i]},useMemoCache:Fd,useCacheRefresh:function(){return pn().memoizedState=V1.bind(null,Ne)}},Hv={readContext:Zt,use:Oc,useCallback:xv,useContext:Zt,useEffect:Iv,useImperativeHandle:Nv,useInsertionEffect:Cv,useLayoutEffect:Dv,useMemo:Pv,useReducer:Nc,useRef:wv,useState:function(){return Nc(Jr)},useDebugValue:Yd,useDeferredValue:function(n,i){var a=Rt();return kv(a,Ze.memoizedState,n,i)},useTransition:function(){var n=Nc(Jr)[0],i=Rt().memoizedState;return[typeof n=="boolean"?n:Cl(n),i]},useSyncExternalStore:uv,useId:Uv,useHostTransitionStatus:Xd,useFormState:bv,useActionState:bv,useOptimistic:function(n,i){var a=Rt();return mv(a,Ze,n,i)},useMemoCache:Fd,useCacheRefresh:jv},U1={readContext:Zt,use:Oc,useCallback:xv,useContext:Zt,useEffect:Iv,useImperativeHandle:Nv,useInsertionEffect:Cv,useLayoutEffect:Dv,useMemo:Pv,useReducer:Hd,useRef:wv,useState:function(){return Hd(Jr)},useDebugValue:Yd,useDeferredValue:function(n,i){var a=Rt();return Ze===null?$d(a,n,i):kv(a,Ze.memoizedState,n,i)},useTransition:function(){var n=Hd(Jr)[0],i=Rt().memoizedState;return[typeof n=="boolean"?n:Cl(n),i]},useSyncExternalStore:uv,useId:Uv,useHostTransitionStatus:Xd,useFormState:Av,useActionState:Av,useOptimistic:function(n,i){var a=Rt();return Ze!==null?mv(a,Ze,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Fd,useCacheRefresh:jv},eo=null,Nl=0;function Vc(n){var i=Nl;return Nl+=1,eo===null&&(eo=[]),tv(eo,n,i)}function xl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Lc(n,i){throw i.$$typeof===R?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Gv(n){var i=n._init;return i(n._payload)}function Kv(n){function i(V,k){if(n){var B=V.deletions;B===null?(V.deletions=[k],V.flags|=16):B.push(k)}}function a(V,k){if(!n)return null;for(;k!==null;)i(V,k),k=k.sibling;return null}function l(V){for(var k=new Map;V!==null;)V.key!==null?k.set(V.key,V):k.set(V.index,V),V=V.sibling;return k}function f(V,k){return V=$r(V,k),V.index=0,V.sibling=null,V}function d(V,k,B){return V.index=B,n?(B=V.alternate,B!==null?(B=B.index,B<k?(V.flags|=67108866,k):B):(V.flags|=67108866,k)):(V.flags|=1048576,k)}function _(V){return n&&V.alternate===null&&(V.flags|=67108866),V}function T(V,k,B,X){return k===null||k.tag!==6?(k=vd(B,V.mode,X),k.return=V,k):(k=f(k,B),k.return=V,k)}function N(V,k,B,X){var pe=B.type;return pe===q?Q(V,k,B.props.children,X,B.key):k!==null&&(k.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===A&&Gv(pe)===k.type)?(k=f(k,B.props),xl(k,B),k.return=V,k):(k=_c(B.type,B.key,B.props,null,V.mode,X),xl(k,B),k.return=V,k)}function F(V,k,B,X){return k===null||k.tag!==4||k.stateNode.containerInfo!==B.containerInfo||k.stateNode.implementation!==B.implementation?(k=_d(B,V.mode,X),k.return=V,k):(k=f(k,B.children||[]),k.return=V,k)}function Q(V,k,B,X,pe){return k===null||k.tag!==7?(k=Gs(B,V.mode,X,pe),k.return=V,k):(k=f(k,B),k.return=V,k)}function J(V,k,B){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=vd(""+k,V.mode,B),k.return=V,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case w:return B=_c(k.type,k.key,k.props,null,V.mode,B),xl(B,k),B.return=V,B;case L:return k=_d(k,V.mode,B),k.return=V,k;case A:var X=k._init;return k=X(k._payload),J(V,k,B)}if(te(k)||x(k))return k=Gs(k,V.mode,B,null),k.return=V,k;if(typeof k.then=="function")return J(V,Vc(k),B);if(k.$$typeof===ce)return J(V,Sc(V,k),B);Lc(V,k)}return null}function H(V,k,B,X){var pe=k!==null?k.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return pe!==null?null:T(V,k,""+B,X);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===pe?N(V,k,B,X):null;case L:return B.key===pe?F(V,k,B,X):null;case A:return pe=B._init,B=pe(B._payload),H(V,k,B,X)}if(te(B)||x(B))return pe!==null?null:Q(V,k,B,X,null);if(typeof B.then=="function")return H(V,k,Vc(B),X);if(B.$$typeof===ce)return H(V,k,Sc(V,B),X);Lc(V,B)}return null}function G(V,k,B,X,pe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return V=V.get(B)||null,T(k,V,""+X,pe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case w:return V=V.get(X.key===null?B:X.key)||null,N(k,V,X,pe);case L:return V=V.get(X.key===null?B:X.key)||null,F(k,V,X,pe);case A:var xe=X._init;return X=xe(X._payload),G(V,k,B,X,pe)}if(te(X)||x(X))return V=V.get(B)||null,Q(k,V,X,pe,null);if(typeof X.then=="function")return G(V,k,B,Vc(X),pe);if(X.$$typeof===ce)return G(V,k,B,Sc(k,X),pe);Lc(k,X)}return null}function Re(V,k,B,X){for(var pe=null,xe=null,_e=k,be=k=0,Bt=null;_e!==null&&be<B.length;be++){_e.index>be?(Bt=_e,_e=null):Bt=_e.sibling;var Fe=H(V,_e,B[be],X);if(Fe===null){_e===null&&(_e=Bt);break}n&&_e&&Fe.alternate===null&&i(V,_e),k=d(Fe,k,be),xe===null?pe=Fe:xe.sibling=Fe,xe=Fe,_e=Bt}if(be===B.length)return a(V,_e),qe&&Ys(V,be),pe;if(_e===null){for(;be<B.length;be++)_e=J(V,B[be],X),_e!==null&&(k=d(_e,k,be),xe===null?pe=_e:xe.sibling=_e,xe=_e);return qe&&Ys(V,be),pe}for(_e=l(_e);be<B.length;be++)Bt=G(_e,V,be,B[be],X),Bt!==null&&(n&&Bt.alternate!==null&&_e.delete(Bt.key===null?be:Bt.key),k=d(Bt,k,be),xe===null?pe=Bt:xe.sibling=Bt,xe=Bt);return n&&_e.forEach(function(Qi){return i(V,Qi)}),qe&&Ys(V,be),pe}function Te(V,k,B,X){if(B==null)throw Error(s(151));for(var pe=null,xe=null,_e=k,be=k=0,Bt=null,Fe=B.next();_e!==null&&!Fe.done;be++,Fe=B.next()){_e.index>be?(Bt=_e,_e=null):Bt=_e.sibling;var Qi=H(V,_e,Fe.value,X);if(Qi===null){_e===null&&(_e=Bt);break}n&&_e&&Qi.alternate===null&&i(V,_e),k=d(Qi,k,be),xe===null?pe=Qi:xe.sibling=Qi,xe=Qi,_e=Bt}if(Fe.done)return a(V,_e),qe&&Ys(V,be),pe;if(_e===null){for(;!Fe.done;be++,Fe=B.next())Fe=J(V,Fe.value,X),Fe!==null&&(k=d(Fe,k,be),xe===null?pe=Fe:xe.sibling=Fe,xe=Fe);return qe&&Ys(V,be),pe}for(_e=l(_e);!Fe.done;be++,Fe=B.next())Fe=G(_e,V,be,Fe.value,X),Fe!==null&&(n&&Fe.alternate!==null&&_e.delete(Fe.key===null?be:Fe.key),k=d(Fe,k,be),xe===null?pe=Fe:xe.sibling=Fe,xe=Fe);return n&&_e.forEach(function(jR){return i(V,jR)}),qe&&Ys(V,be),pe}function et(V,k,B,X){if(typeof B=="object"&&B!==null&&B.type===q&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var pe=B.key;k!==null;){if(k.key===pe){if(pe=B.type,pe===q){if(k.tag===7){a(V,k.sibling),X=f(k,B.props.children),X.return=V,V=X;break e}}else if(k.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===A&&Gv(pe)===k.type){a(V,k.sibling),X=f(k,B.props),xl(X,B),X.return=V,V=X;break e}a(V,k);break}else i(V,k);k=k.sibling}B.type===q?(X=Gs(B.props.children,V.mode,X,B.key),X.return=V,V=X):(X=_c(B.type,B.key,B.props,null,V.mode,X),xl(X,B),X.return=V,V=X)}return _(V);case L:e:{for(pe=B.key;k!==null;){if(k.key===pe)if(k.tag===4&&k.stateNode.containerInfo===B.containerInfo&&k.stateNode.implementation===B.implementation){a(V,k.sibling),X=f(k,B.children||[]),X.return=V,V=X;break e}else{a(V,k);break}else i(V,k);k=k.sibling}X=_d(B,V.mode,X),X.return=V,V=X}return _(V);case A:return pe=B._init,B=pe(B._payload),et(V,k,B,X)}if(te(B))return Re(V,k,B,X);if(x(B)){if(pe=x(B),typeof pe!="function")throw Error(s(150));return B=pe.call(B),Te(V,k,B,X)}if(typeof B.then=="function")return et(V,k,Vc(B),X);if(B.$$typeof===ce)return et(V,k,Sc(V,B),X);Lc(V,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,k!==null&&k.tag===6?(a(V,k.sibling),X=f(k,B),X.return=V,V=X):(a(V,k),X=vd(B,V.mode,X),X.return=V,V=X),_(V)):a(V,k)}return function(V,k,B,X){try{Nl=0;var pe=et(V,k,B,X);return eo=null,pe}catch(_e){if(_e===bl||_e===wc)throw _e;var xe=Sn(29,_e,null,V.mode);return xe.lanes=X,xe.return=V,xe}finally{}}}var to=Kv(!0),Yv=Kv(!1),Fn=M(null),Tr=null;function ki(n){var i=n.alternate;ne(kt,kt.current&1),ne(Fn,n),Tr===null&&(i===null||Xa.current!==null||i.memoizedState!==null)&&(Tr=n)}function $v(n){if(n.tag===22){if(ne(kt,kt.current),ne(Fn,n),Tr===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Tr=n)}}else Mi()}function Mi(){ne(kt,kt.current),ne(Fn,Fn.current)}function ei(n){se(Fn),Tr===n&&(Tr=null),se(kt)}var kt=M(0);function Uc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Bp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Zd(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jd={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=In(),f=Ni(l);f.payload=i,a!=null&&(f.callback=a),i=xi(n,f,l),i!==null&&(Cn(i,n,l),Al(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=In(),f=Ni(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=xi(n,f,l),i!==null&&(Cn(i,n,l),Al(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=In(),l=Ni(a);l.tag=2,i!=null&&(l.callback=i),i=xi(n,l,a),i!==null&&(Cn(i,n,a),Al(i,n,a))}};function Qv(n,i,a,l,f,d,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!pl(a,l)||!pl(f,d):!0}function Xv(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&Jd.enqueueReplaceState(i,i.state,null)}function ea(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=E({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var jc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Wv(n){jc(n)}function Zv(n){console.error(n)}function Jv(n){jc(n)}function zc(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function e_(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ep(n,i,a){return a=Ni(a),a.tag=3,a.payload={element:null},a.callback=function(){zc(n,i)},a}function t_(n){return n=Ni(n),n.tag=3,n}function n_(n,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){e_(i,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){e_(i,a,l),typeof f!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function j1(n,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&_l(i,a,f,!0),a=Fn.current,a!==null){switch(a.tag){case 13:return Tr===null?Ap():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Dd?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Rp(n,l,f)),!1;case 22:return a.flags|=65536,l===Dd?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Rp(n,l,f)),!1}throw Error(s(435,a.tag))}return Rp(n,l,f),Ap(),!1}if(qe)return i=Fn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==bd&&(n=Error(s(422),{cause:l}),vl(Un(n,a)))):(l!==bd&&(i=Error(s(423),{cause:l}),vl(Un(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=Un(l,a),f=ep(n.stateNode,l,f),xd(n,f),mt!==4&&(mt=2)),!1;var d=Error(s(520),{cause:l});if(d=Un(d,a),jl===null?jl=[d]:jl.push(d),mt!==4&&(mt=2),i===null)return!0;l=Un(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=ep(a.stateNode,l,n),xd(a,n),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Bi===null||!Bi.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=t_(f),n_(f,n,a,l),xd(a,f),!1}a=a.return}while(a!==null);return!1}var r_=Error(s(461)),jt=!1;function Gt(n,i,a,l){i.child=n===null?Yv(i,null,a,l):to(i,n.child,a,l)}function i_(n,i,a,l,f){a=a.render;var d=i.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return Ws(i),l=Ld(n,i,a,_,d,f),T=Ud(),n!==null&&!jt?(jd(n,i,f),ti(n,i,f)):(qe&&T&&Ed(i),i.flags|=1,Gt(n,i,l,f),i.child)}function s_(n,i,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!yd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,a_(n,i,d,l,f)):(n=_c(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!lp(n,f)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:pl,a(_,l)&&n.ref===i.ref)return ti(n,i,f)}return i.flags|=1,n=$r(d,l),n.ref=i.ref,n.return=i,i.child=n}function a_(n,i,a,l,f){if(n!==null){var d=n.memoizedProps;if(pl(d,l)&&n.ref===i.ref)if(jt=!1,i.pendingProps=l=d,lp(n,f))(n.flags&131072)!==0&&(jt=!0);else return i.lanes=n.lanes,ti(n,i,f)}return tp(n,i,a,l,f)}function o_(n,i,a){var l=i.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=i.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return l_(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ac(i,d!==null?d.cachePool:null),d!==null?av(i,d):kd(),$v(i);else return i.lanes=i.childLanes=536870912,l_(n,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ac(i,d.cachePool),av(i,d),Mi(),i.memoizedState=null):(n!==null&&Ac(i,null),kd(),Mi());return Gt(n,i,f,a),i.child}function l_(n,i,a,l){var f=Cd();return f=f===null?null:{parent:Pt._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&Ac(i,null),kd(),$v(i),n!==null&&_l(n,i,l,!0),null}function Bc(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function tp(n,i,a,l,f){return Ws(i),a=Ld(n,i,a,l,void 0,f),l=Ud(),n!==null&&!jt?(jd(n,i,f),ti(n,i,f)):(qe&&l&&Ed(i),i.flags|=1,Gt(n,i,a,f),i.child)}function u_(n,i,a,l,f,d){return Ws(i),i.updateQueue=null,a=lv(i,l,a,f),ov(n),l=Ud(),n!==null&&!jt?(jd(n,i,d),ti(n,i,d)):(qe&&l&&Ed(i),i.flags|=1,Gt(n,i,a,d),i.child)}function c_(n,i,a,l,f){if(Ws(i),i.stateNode===null){var d=Ga,_=a.contextType;typeof _=="object"&&_!==null&&(d=Zt(_)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Jd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Od(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?Zt(_):Ga,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Zd(i,a,_,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Jd.enqueueReplaceState(d,d.state,null),Rl(i,l,d,f),wl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var T=i.memoizedProps,N=ea(a,T);d.props=N;var F=d.context,Q=a.contextType;_=Ga,typeof Q=="object"&&Q!==null&&(_=Zt(Q));var J=a.getDerivedStateFromProps;Q=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||F!==_)&&Xv(i,d,l,_),Oi=!1;var H=i.memoizedState;d.state=H,Rl(i,l,d,f),wl(),F=i.memoizedState,T||H!==F||Oi?(typeof J=="function"&&(Zd(i,a,J,l),F=i.memoizedState),(N=Oi||Qv(i,a,N,l,H,F,_))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=_,l=N):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Nd(n,i),_=i.memoizedProps,Q=ea(a,_),d.props=Q,J=i.pendingProps,H=d.context,F=a.contextType,N=Ga,typeof F=="object"&&F!==null&&(N=Zt(F)),T=a.getDerivedStateFromProps,(F=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==J||H!==N)&&Xv(i,d,l,N),Oi=!1,H=i.memoizedState,d.state=H,Rl(i,l,d,f),wl();var G=i.memoizedState;_!==J||H!==G||Oi||n!==null&&n.dependencies!==null&&bc(n.dependencies)?(typeof T=="function"&&(Zd(i,a,T,l),G=i.memoizedState),(Q=Oi||Qv(i,a,Q,l,H,G,N)||n!==null&&n.dependencies!==null&&bc(n.dependencies))?(F||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,N),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,N)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=N,l=Q):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,Bc(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=to(i,n.child,null,f),i.child=to(i,null,a,f)):Gt(n,i,a,f),i.memoizedState=d.state,n=i.child):n=ti(n,i,f),n}function h_(n,i,a,l){return yl(),i.flags|=256,Gt(n,i,a,l),i.child}var np={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rp(n){return{baseLanes:n,cachePool:Zy()}}function ip(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=qn),n}function f_(n,i,a){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=n!==null&&n.memoizedState===null?!1:(kt.current&2)!==0),_&&(f=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,n===null){if(qe){if(f?ki(i):Mi(),qe){var T=pt,N;if(N=T){e:{for(N=T,T=Er;N.nodeType!==8;){if(!T){T=null;break e}if(N=tr(N.nextSibling),N===null){T=null;break e}}T=N}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ks!==null?{id:Qr,overflow:Xr}:null,retryLane:536870912,hydrationErrors:null},N=Sn(18,null,null,0),N.stateNode=T,N.return=i,i.child=N,hn=i,pt=null,N=!0):N=!1}N||Qs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Bp(T)?i.lanes=32:i.lanes=536870912,null;ei(i)}return T=l.children,l=l.fallback,f?(Mi(),f=i.mode,T=Fc({mode:"hidden",children:T},f),l=Gs(l,f,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,f=i.child,f.memoizedState=rp(a),f.childLanes=ip(n,_,a),i.memoizedState=np,l):(ki(i),sp(i,T))}if(N=n.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(d)i.flags&256?(ki(i),i.flags&=-257,i=ap(n,i,a)):i.memoizedState!==null?(Mi(),i.child=n.child,i.flags|=128,i=null):(Mi(),f=l.fallback,T=i.mode,l=Fc({mode:"visible",children:l.children},T),f=Gs(f,T,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,to(i,n.child,null,a),l=i.child,l.memoizedState=rp(a),l.childLanes=ip(n,_,a),i.memoizedState=np,i=f);else if(ki(i),Bp(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var F=_.dgst;_=F,l=Error(s(419)),l.stack="",l.digest=_,vl({value:l,source:null,stack:null}),i=ap(n,i,a)}else if(jt||_l(n,i,a,!1),_=(a&n.childLanes)!==0,jt||_){if(_=nt,_!==null&&(l=a&-a,l=(l&42)!==0?1:bi(l),l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==N.retryLane))throw N.retryLane=l,Ha(n,l),Cn(_,n,l),r_;T.data==="$?"||Ap(),i=ap(n,i,a)}else T.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=N.treeContext,pt=tr(T.nextSibling),hn=i,qe=!0,$s=null,Er=!1,n!==null&&(zn[Bn++]=Qr,zn[Bn++]=Xr,zn[Bn++]=Ks,Qr=n.id,Xr=n.overflow,Ks=i),i=sp(i,l.children),i.flags|=4096);return i}return f?(Mi(),f=l.fallback,T=i.mode,N=n.child,F=N.sibling,l=$r(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&65011712,F!==null?f=$r(F,f):(f=Gs(f,T,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,T=n.child.memoizedState,T===null?T=rp(a):(N=T.cachePool,N!==null?(F=Pt._currentValue,N=N.parent!==F?{parent:F,pool:F}:N):N=Zy(),T={baseLanes:T.baseLanes|a,cachePool:N}),f.memoizedState=T,f.childLanes=ip(n,_,a),i.memoizedState=np,l):(ki(i),a=n.child,n=a.sibling,a=$r(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(_=i.deletions,_===null?(i.deletions=[n],i.flags|=16):_.push(n)),i.child=a,i.memoizedState=null,a)}function sp(n,i){return i=Fc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Fc(n,i){return n=Sn(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function ap(n,i,a){return to(i,n.child,null,a),n=sp(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function d_(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Ad(n.return,i,a)}function op(n,i,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function p_(n,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Gt(n,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&d_(n,a,i);else if(n.tag===19)d_(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(ne(kt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Uc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),op(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Uc(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}op(i,!0,a,null,d);break;case"together":op(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ti(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),zi|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(_l(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=$r(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=$r(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function lp(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&bc(n)))}function z1(n,i,a){switch(i.tag){case 3:Ge(i,i.stateNode.containerInfo),Di(i,Pt,n.memoizedState.cache),yl();break;case 27:case 5:Ti(i);break;case 4:Ge(i,i.stateNode.containerInfo);break;case 10:Di(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ki(i),i.flags|=128,null):(a&i.child.childLanes)!==0?f_(n,i,a):(ki(i),n=ti(n,i,a),n!==null?n.sibling:null);ki(i);break;case 19:var f=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(_l(n,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return p_(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ne(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,o_(n,i,a);case 24:Di(i,Pt,n.memoizedState.cache)}return ti(n,i,a)}function m_(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)jt=!0;else{if(!lp(n,a)&&(i.flags&128)===0)return jt=!1,z1(n,i,a);jt=(n.flags&131072)!==0}else jt=!1,qe&&(i.flags&1048576)!==0&&Gy(i,Tc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")yd(l)?(n=ea(l,n),i.tag=1,i=c_(null,i,l,n,a)):(i.tag=0,i=tp(null,i,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===ye){i.tag=11,i=i_(null,i,l,n,a);break e}else if(f===O){i.tag=14,i=s_(null,i,l,n,a);break e}}throw i=Z(l)||l,Error(s(306,i,""))}}return i;case 0:return tp(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=ea(l,i.pendingProps),c_(n,i,l,f,a);case 3:e:{if(Ge(i,i.stateNode.containerInfo),n===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Nd(n,i),Rl(i,l,null,a);var _=i.memoizedState;if(l=_.cache,Di(i,Pt,l),l!==d.cache&&wd(i,[Pt],a,!0),wl(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=h_(n,i,l,a);break e}else if(l!==f){f=Un(Error(s(424)),i),vl(f),i=h_(n,i,l,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(pt=tr(n.firstChild),hn=i,qe=!0,$s=null,Er=!0,a=Yv(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(yl(),l===f){i=ti(n,i,a);break e}Gt(n,i,l,a)}i=i.child}return i;case 26:return Bc(n,i),n===null?(a=_E(i.type,null,i.pendingProps,null))?i.memoizedState=a:qe||(a=i.type,n=i.pendingProps,l=nh(Se.current).createElement(a),l[Ot]=i,l[St]=n,Yt(l,a,n),gt(l),i.stateNode=l):i.memoizedState=_E(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Ti(i),n===null&&qe&&(l=i.stateNode=gE(i.type,i.pendingProps,Se.current),hn=i,Er=!0,f=pt,Hi(i.type)?(Fp=f,pt=tr(l.firstChild)):pt=f),Gt(n,i,i.pendingProps.children,a),Bc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&qe&&((f=l=pt)&&(l=pR(l,i.type,i.pendingProps,Er),l!==null?(i.stateNode=l,hn=i,pt=tr(l.firstChild),Er=!1,f=!0):f=!1),f||Qs(i)),Ti(i),f=i.type,d=i.pendingProps,_=n!==null?n.memoizedProps:null,l=d.children,Up(f,d)?l=null:_!==null&&Up(f,_)&&(i.flags|=32),i.memoizedState!==null&&(f=Ld(n,i,x1,null,null,a),$l._currentValue=f),Bc(n,i),Gt(n,i,l,a),i.child;case 6:return n===null&&qe&&((n=a=pt)&&(a=mR(a,i.pendingProps,Er),a!==null?(i.stateNode=a,hn=i,pt=null,n=!0):n=!1),n||Qs(i)),null;case 13:return f_(n,i,a);case 4:return Ge(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=to(i,null,l,a):Gt(n,i,l,a),i.child;case 11:return i_(n,i,i.type,i.pendingProps,a);case 7:return Gt(n,i,i.pendingProps,a),i.child;case 8:return Gt(n,i,i.pendingProps.children,a),i.child;case 12:return Gt(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Di(i,i.type,l.value),Gt(n,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ws(i),f=Zt(f),l=l(f),i.flags|=1,Gt(n,i,l,a),i.child;case 14:return s_(n,i,i.type,i.pendingProps,a);case 15:return a_(n,i,i.type,i.pendingProps,a);case 19:return p_(n,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},n===null?(a=Fc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=$r(n.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return o_(n,i,a);case 24:return Ws(i),l=Zt(Pt),n===null?(f=Cd(),f===null&&(f=nt,d=Rd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),i.memoizedState={parent:l,cache:f},Od(i),Di(i,Pt,f)):((n.lanes&a)!==0&&(Nd(n,i),Rl(i,null,null,a),wl()),f=n.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Di(i,Pt,l)):(l=d.cache,Di(i,Pt,l),l!==f.cache&&wd(i,[Pt],a,!0))),Gt(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ni(n){n.flags|=4}function g_(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!AE(i)){if(i=Fn.current,i!==null&&((ze&4194048)===ze?Tr!==null:(ze&62914560)!==ze&&(ze&536870912)===0||i!==Tr))throw Sl=Dd,Jy;n.flags|=8192}}function qc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Xo():536870912,n.lanes|=i,so|=i)}function Pl(n,i){if(!qe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ut(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function B1(n,i,a){var l=i.pendingProps;switch(Td(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(i),null;case 1:return ut(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Zr(Pt),lr(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(gl(i)?ni(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$y())),ut(i),null;case 26:return a=i.memoizedState,n===null?(ni(i),a!==null?(ut(i),g_(i,a)):(ut(i),i.flags&=-16777217)):a?a!==n.memoizedState?(ni(i),ut(i),g_(i,a)):(ut(i),i.flags&=-16777217):(n.memoizedProps!==l&&ni(i),ut(i),i.flags&=-16777217),null;case 27:Mr(i),a=Se.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&ni(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ut(i),null}n=me.current,gl(i)?Ky(i):(n=gE(f,l,a),i.stateNode=n,ni(i))}return ut(i),null;case 5:if(Mr(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&ni(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ut(i),null}if(n=me.current,gl(i))Ky(i);else{switch(f=nh(Se.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[Ot]=i,n[St]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;e:switch(Yt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ni(i)}}return ut(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&ni(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(n=Se.current,gl(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,f=hn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[Ot]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||uE(n.nodeValue,a)),n||Qs(i)}else n=nh(n).createTextNode(l),n[Ot]=i,i.stateNode=n}return ut(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=gl(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ot]=i}else yl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ut(i),f=!1}else f=$y(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ei(i),i):(ei(i),null)}if(ei(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),qc(i,i.updateQueue),ut(i),null;case 4:return lr(),n===null&&Pp(i.stateNode.containerInfo),ut(i),null;case 10:return Zr(i.type),ut(i),null;case 19:if(se(kt),f=i.memoizedState,f===null)return ut(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)Pl(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=Uc(n),d!==null){for(i.flags|=128,Pl(f,!1),n=d.updateQueue,i.updateQueue=n,qc(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Hy(a,n),a=a.sibling;return ne(kt,kt.current&1|2),i.child}n=n.sibling}f.tail!==null&&xn()>Kc&&(i.flags|=128,l=!0,Pl(f,!1),i.lanes=4194304)}else{if(!l)if(n=Uc(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,qc(i,n),Pl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!qe)return ut(i),null}else 2*xn()-f.renderingStartTime>Kc&&a!==536870912&&(i.flags|=128,l=!0,Pl(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(n=f.last,n!==null?n.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=xn(),i.sibling=null,n=kt.current,ne(kt,l?n&1|2:n&1),i):(ut(i),null);case 22:case 23:return ei(i),Md(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ut(i),i.subtreeFlags&6&&(i.flags|=8192)):ut(i),a=i.updateQueue,a!==null&&qc(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&se(Zs),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Zr(Pt),ut(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function F1(n,i){switch(Td(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Zr(Pt),lr(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Mr(i),null;case 13:if(ei(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));yl()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return se(kt),null;case 4:return lr(),null;case 10:return Zr(i.type),null;case 22:case 23:return ei(i),Md(),n!==null&&se(Zs),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Zr(Pt),null;case 25:return null;default:return null}}function y_(n,i){switch(Td(i),i.tag){case 3:Zr(Pt),lr();break;case 26:case 27:case 5:Mr(i);break;case 4:lr();break;case 13:ei(i);break;case 19:se(kt);break;case 10:Zr(i.type);break;case 22:case 23:ei(i),Md(),n!==null&&se(Zs);break;case 24:Zr(Pt)}}function kl(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==f)}}catch(T){tt(i,i.return,T)}}function Vi(n,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,f=i;var N=a,F=T;try{F()}catch(Q){tt(f,N,Q)}}}l=l.next}while(l!==d)}}catch(Q){tt(i,i.return,Q)}}function v_(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{sv(i,a)}catch(l){tt(n,n.return,l)}}}function __(n,i,a){a.props=ea(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){tt(n,i,l)}}function Ml(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){tt(n,i,f)}}function br(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){tt(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){tt(n,i,f)}else a.current=null}function E_(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){tt(n,n.return,f)}}function up(n,i,a){try{var l=n.stateNode;uR(l,n.type,a,i),l[St]=i}catch(f){tt(n,n.return,f)}}function T_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Hi(n.type)||n.tag===4}function cp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||T_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Hi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hp(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=th));else if(l!==4&&(l===27&&Hi(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(hp(n,i,a),n=n.sibling;n!==null;)hp(n,i,a),n=n.sibling}function Hc(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(l===27&&Hi(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Hc(n,i,a),n=n.sibling;n!==null;)Hc(n,i,a),n=n.sibling}function b_(n){var i=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Yt(i,l,a),i[Ot]=n,i[St]=a}catch(d){tt(n,n.return,d)}}var ri=!1,vt=!1,fp=!1,S_=typeof WeakSet=="function"?WeakSet:Set,zt=null;function q1(n,i){if(n=n.containerInfo,Vp=lh,n=ky(n),cd(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,T=-1,N=-1,F=0,Q=0,J=n,H=null;t:for(;;){for(var G;J!==a||f!==0&&J.nodeType!==3||(T=_+f),J!==d||l!==0&&J.nodeType!==3||(N=_+l),J.nodeType===3&&(_+=J.nodeValue.length),(G=J.firstChild)!==null;)H=J,J=G;for(;;){if(J===n)break t;if(H===a&&++F===f&&(T=_),H===d&&++Q===l&&(N=_),(G=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=G}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lp={focusedElem:n,selectionRange:a},lh=!1,zt=i;zt!==null;)if(i=zt,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,zt=n;else for(;zt!==null;){switch(i=zt,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=i,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Re=ea(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Re,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Te){tt(a,a.return,Te)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)zp(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":zp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,zt=n;break}zt=i.return}}function A_(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Li(n,a),l&4&&kl(5,a);break;case 1:if(Li(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(_){tt(a,a.return,_)}else{var f=ea(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(_){tt(a,a.return,_)}}l&64&&v_(a),l&512&&Ml(a,a.return);break;case 3:if(Li(n,a),l&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{sv(n,i)}catch(_){tt(a,a.return,_)}}break;case 27:i===null&&l&4&&b_(a);case 26:case 5:Li(n,a),i===null&&l&4&&E_(a),l&512&&Ml(a,a.return);break;case 12:Li(n,a);break;case 13:Li(n,a),l&4&&I_(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=Z1.bind(null,a),gR(n,a))));break;case 22:if(l=a.memoizedState!==null||ri,!l){i=i!==null&&i.memoizedState!==null||vt,f=ri;var d=vt;ri=l,(vt=i)&&!d?Ui(n,a,(a.subtreeFlags&8772)!==0):Li(n,a),ri=f,vt=d}break;case 30:break;default:Li(n,a)}}function w_(n){var i=n.alternate;i!==null&&(n.alternate=null,w_(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&wi(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ot=null,mn=!1;function ii(n,i,a){for(a=a.child;a!==null;)R_(n,i,a),a=a.sibling}function R_(n,i,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:vt||br(a,i),ii(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||br(a,i);var l=ot,f=mn;Hi(a.type)&&(ot=a.stateNode,mn=!1),ii(n,i,a),Hl(a.stateNode),ot=l,mn=f;break;case 5:vt||br(a,i);case 6:if(l=ot,f=mn,ot=null,ii(n,i,a),ot=l,mn=f,ot!==null)if(mn)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(a.stateNode)}catch(d){tt(a,i,d)}else try{ot.removeChild(a.stateNode)}catch(d){tt(a,i,d)}break;case 18:ot!==null&&(mn?(n=ot,pE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),Zl(n)):pE(ot,a.stateNode));break;case 4:l=ot,f=mn,ot=a.stateNode.containerInfo,mn=!0,ii(n,i,a),ot=l,mn=f;break;case 0:case 11:case 14:case 15:vt||Vi(2,a,i),vt||Vi(4,a,i),ii(n,i,a);break;case 1:vt||(br(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&__(a,i,l)),ii(n,i,a);break;case 21:ii(n,i,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,ii(n,i,a),vt=l;break;default:ii(n,i,a)}}function I_(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Zl(n)}catch(a){tt(i,i.return,a)}}function H1(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new S_),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new S_),i;default:throw Error(s(435,n.tag))}}function dp(n,i){var a=H1(n);i.forEach(function(l){var f=J1.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function An(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,_=i,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Hi(T.type)){ot=T.stateNode,mn=!1;break e}break;case 5:ot=T.stateNode,mn=!1;break e;case 3:case 4:ot=T.stateNode.containerInfo,mn=!0;break e}T=T.return}if(ot===null)throw Error(s(160));R_(d,_,f),ot=null,mn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)C_(i,n),i=i.sibling}var er=null;function C_(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:An(i,n),wn(n),l&4&&(Vi(3,n,n.return),kl(3,n),Vi(5,n,n.return));break;case 1:An(i,n),wn(n),l&512&&(vt||a===null||br(a,a.return)),l&64&&ri&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=er;if(An(i,n),wn(n),l&512&&(vt||a===null||br(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Ds]||d[Ot]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Yt(d,l,a),d[Ot]=n,gt(d),l=d;break e;case"link":var _=bE("link","href",f).get(l+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}d=f.createElement(l),Yt(d,l,a),f.head.appendChild(d);break;case"meta":if(_=bE("meta","content",f).get(l+(a.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}d=f.createElement(l),Yt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ot]=n,gt(d),l=d}n.stateNode=l}else SE(f,n.type,n.stateNode);else n.stateNode=TE(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?SE(f,n.type,n.stateNode):TE(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&up(n,n.memoizedProps,a.memoizedProps)}break;case 27:An(i,n),wn(n),l&512&&(vt||a===null||br(a,a.return)),a!==null&&l&4&&up(n,n.memoizedProps,a.memoizedProps);break;case 5:if(An(i,n),wn(n),l&512&&(vt||a===null||br(a,a.return)),n.flags&32){f=n.stateNode;try{kn(f,"")}catch(G){tt(n,n.return,G)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,up(n,f,a!==null?a.memoizedProps:f)),l&1024&&(fp=!0);break;case 6:if(An(i,n),wn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(G){tt(n,n.return,G)}}break;case 3:if(sh=null,f=er,er=rh(i.containerInfo),An(i,n),er=f,wn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Zl(i.containerInfo)}catch(G){tt(n,n.return,G)}fp&&(fp=!1,D_(n));break;case 4:l=er,er=rh(n.stateNode.containerInfo),An(i,n),wn(n),er=l;break;case 12:An(i,n),wn(n);break;case 13:An(i,n),wn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_p=xn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,dp(n,l)));break;case 22:f=n.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,F=ri,Q=vt;if(ri=F||f,vt=Q||N,An(i,n),vt=Q,ri=F,wn(n),l&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||N||ri||vt||ta(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){N=a=i;try{if(d=N.stateNode,f)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=N.stateNode;var J=N.memoizedProps.style,H=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){tt(N,N.return,G)}}}else if(i.tag===6){if(a===null){N=i;try{N.stateNode.nodeValue=f?"":N.memoizedProps}catch(G){tt(N,N.return,G)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,dp(n,a))));break;case 19:An(i,n),wn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,dp(n,l)));break;case 30:break;case 21:break;default:An(i,n),wn(n)}}function wn(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(T_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=cp(n);Hc(n,d,f);break;case 5:var _=a.stateNode;a.flags&32&&(kn(_,""),a.flags&=-33);var T=cp(n);Hc(n,T,_);break;case 3:case 4:var N=a.stateNode.containerInfo,F=cp(n);hp(n,F,N);break;default:throw Error(s(161))}}catch(Q){tt(n,n.return,Q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function D_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;D_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Li(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)A_(n,i.alternate,i),i=i.sibling}function ta(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Vi(4,i,i.return),ta(i);break;case 1:br(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&__(i,i.return,a),ta(i);break;case 27:Hl(i.stateNode);case 26:case 5:br(i,i.return),ta(i);break;case 22:i.memoizedState===null&&ta(i);break;case 30:ta(i);break;default:ta(i)}n=n.sibling}}function Ui(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:Ui(f,d,a),kl(4,d);break;case 1:if(Ui(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(F){tt(l,l.return,F)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var N=f.shared.hiddenCallbacks;if(N!==null)for(f.shared.hiddenCallbacks=null,f=0;f<N.length;f++)iv(N[f],T)}catch(F){tt(l,l.return,F)}}a&&_&64&&v_(d),Ml(d,d.return);break;case 27:b_(d);case 26:case 5:Ui(f,d,a),a&&l===null&&_&4&&E_(d),Ml(d,d.return);break;case 12:Ui(f,d,a);break;case 13:Ui(f,d,a),a&&_&4&&I_(f,d);break;case 22:d.memoizedState===null&&Ui(f,d,a),Ml(d,d.return);break;case 30:break;default:Ui(f,d,a)}i=i.sibling}}function pp(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&El(a))}function mp(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&El(n))}function Sr(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)O_(n,i,a,l),i=i.sibling}function O_(n,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Sr(n,i,a,l),f&2048&&kl(9,i);break;case 1:Sr(n,i,a,l);break;case 3:Sr(n,i,a,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&El(n)));break;case 12:if(f&2048){Sr(n,i,a,l),n=i.stateNode;try{var d=i.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(N){tt(i,i.return,N)}}else Sr(n,i,a,l);break;case 13:Sr(n,i,a,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?Sr(n,i,a,l):Vl(n,i):d._visibility&2?Sr(n,i,a,l):(d._visibility|=2,no(n,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&pp(_,i);break;case 24:Sr(n,i,a,l),f&2048&&mp(i.alternate,i);break;default:Sr(n,i,a,l)}}function no(n,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,_=i,T=a,N=l,F=_.flags;switch(_.tag){case 0:case 11:case 15:no(d,_,T,N,f),kl(8,_);break;case 23:break;case 22:var Q=_.stateNode;_.memoizedState!==null?Q._visibility&2?no(d,_,T,N,f):Vl(d,_):(Q._visibility|=2,no(d,_,T,N,f)),f&&F&2048&&pp(_.alternate,_);break;case 24:no(d,_,T,N,f),f&&F&2048&&mp(_.alternate,_);break;default:no(d,_,T,N,f)}i=i.sibling}}function Vl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,f=l.flags;switch(l.tag){case 22:Vl(a,l),f&2048&&pp(l.alternate,l);break;case 24:Vl(a,l),f&2048&&mp(l.alternate,l);break;default:Vl(a,l)}i=i.sibling}}var Ll=8192;function ro(n){if(n.subtreeFlags&Ll)for(n=n.child;n!==null;)N_(n),n=n.sibling}function N_(n){switch(n.tag){case 26:ro(n),n.flags&Ll&&n.memoizedState!==null&&DR(er,n.memoizedState,n.memoizedProps);break;case 5:ro(n);break;case 3:case 4:var i=er;er=rh(n.stateNode.containerInfo),ro(n),er=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Ll,Ll=16777216,ro(n),Ll=i):ro(n));break;default:ro(n)}}function x_(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Ul(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,k_(l,n)}x_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)P_(n),n=n.sibling}function P_(n){switch(n.tag){case 0:case 11:case 15:Ul(n),n.flags&2048&&Vi(9,n,n.return);break;case 3:Ul(n);break;case 12:Ul(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Gc(n)):Ul(n);break;default:Ul(n)}}function Gc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,k_(l,n)}x_(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Vi(8,i,i.return),Gc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Gc(i));break;default:Gc(i)}n=n.sibling}}function k_(n,i){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:Vi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:El(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,zt=l;else e:for(a=n;zt!==null;){l=zt;var f=l.sibling,d=l.return;if(w_(l),l===a){zt=null;break e}if(f!==null){f.return=d,zt=f;break e}zt=d}}}var G1={getCacheForType:function(n){var i=Zt(Pt),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},K1=typeof WeakMap=="function"?WeakMap:Map,Qe=0,nt=null,Pe=null,ze=0,Xe=0,Rn=null,ji=!1,io=!1,gp=!1,si=0,mt=0,zi=0,na=0,yp=0,qn=0,so=0,jl=null,gn=null,vp=!1,_p=0,Kc=1/0,Yc=null,Bi=null,Kt=0,Fi=null,ao=null,oo=0,Ep=0,Tp=null,M_=null,zl=0,bp=null;function In(){if((Qe&2)!==0&&ze!==0)return ze&-ze;if(j.T!==null){var n=$a;return n!==0?n:Dp()}return Si()}function V_(){qn===0&&(qn=(ze&536870912)===0||qe?Qo():536870912);var n=Fn.current;return n!==null&&(n.flags|=32),qn}function Cn(n,i,a){(n===nt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(lo(n,0),qi(n,ze,qn,!1)),Lr(n,a),((Qe&2)===0||n!==nt)&&(n===nt&&((Qe&2)===0&&(na|=a),mt===4&&qi(n,ze,qn,!1)),Ar(n))}function L_(n,i,a){if((Qe&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&n.expiredLanes)===0||Cs(n,i),f=l?Q1(n,i):wp(n,i,!0),d=l;do{if(f===0){io&&!l&&qi(n,i,0,!1);break}else{if(a=n.current.alternate,d&&!Y1(a)){f=wp(n,i,!1),d=!1;continue}if(f===2){if(d=i,n.errorRecoveryDisabledLanes&d)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var T=n;f=jl;var N=T.current.memoizedState.isDehydrated;if(N&&(lo(T,_).flags|=256),_=wp(T,_,!1),_!==2){if(gp&&!N){T.errorRecoveryDisabledLanes|=d,na|=d,f=4;break e}d=gn,gn=f,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}f=_}if(d=!1,f!==2)continue}}if(f===1){lo(n,0),qi(n,i,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:qi(l,i,qn,!ji);break e;case 2:gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=_p+300-xn(),10<f)){if(qi(l,i,qn,!ji),wa(l,0,!0)!==0)break e;l.timeoutHandle=fE(U_.bind(null,l,a,gn,Yc,vp,i,qn,na,so,ji,d,2,-0,0),f);break e}U_(l,a,gn,Yc,vp,i,qn,na,so,ji,d,0,-0,0)}}break}while(!0);Ar(n)}function U_(n,i,a,l,f,d,_,T,N,F,Q,J,H,G){if(n.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Yl={stylesheets:null,count:0,unsuspend:CR},N_(i),J=OR(),J!==null)){n.cancelPendingCommit=J(G_.bind(null,n,i,d,a,l,f,_,T,N,Q,1,H,G)),qi(n,d,_,!F);return}G_(n,i,d,a,l,f,_,T,N)}function Y1(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!bn(d(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function qi(n,i,a,l){i&=~yp,i&=~na,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var d=31-Wt(f),_=1<<d;l[d]=-1,f&=~_}a!==0&&ur(n,a,i)}function $c(){return(Qe&6)===0?(Bl(0),!1):!0}function Sp(){if(Pe!==null){if(Xe===0)var n=Pe.return;else n=Pe,Wr=Xs=null,zd(n),eo=null,Nl=0,n=Pe;for(;n!==null;)y_(n.alternate,n),n=n.return;Pe=null}}function lo(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,hR(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Sp(),nt=n,Pe=a=$r(n.current,null),ze=i,Xe=0,Rn=null,ji=!1,io=Cs(n,i),gp=!1,so=qn=yp=na=zi=mt=0,gn=jl=null,vp=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-Wt(l),d=1<<f;i|=n[f],l&=~d}return si=i,gc(),a}function j_(n,i){Ne=null,j.H=Mc,i===bl||i===wc?(i=nv(),Xe=3):i===Jy?(i=nv(),Xe=4):Xe=i===r_?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Rn=i,Pe===null&&(mt=1,zc(n,Un(i,n.current)))}function z_(){var n=j.H;return j.H=Mc,n===null?Mc:n}function B_(){var n=j.A;return j.A=G1,n}function Ap(){mt=4,ji||(ze&4194048)!==ze&&Fn.current!==null||(io=!0),(zi&134217727)===0&&(na&134217727)===0||nt===null||qi(nt,ze,qn,!1)}function wp(n,i,a){var l=Qe;Qe|=2;var f=z_(),d=B_();(nt!==n||ze!==i)&&(Yc=null,lo(n,i)),i=!1;var _=mt;e:do try{if(Xe!==0&&Pe!==null){var T=Pe,N=Rn;switch(Xe){case 8:Sp(),_=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(i=!0);var F=Xe;if(Xe=0,Rn=null,uo(n,T,N,F),a&&io){_=0;break e}break;default:F=Xe,Xe=0,Rn=null,uo(n,T,N,F)}}$1(),_=mt;break}catch(Q){j_(n,Q)}while(!0);return i&&n.shellSuspendCounter++,Wr=Xs=null,Qe=l,j.H=f,j.A=d,Pe===null&&(nt=null,ze=0,gc()),_}function $1(){for(;Pe!==null;)F_(Pe)}function Q1(n,i){var a=Qe;Qe|=2;var l=z_(),f=B_();nt!==n||ze!==i?(Yc=null,Kc=xn()+500,lo(n,i)):io=Cs(n,i);e:do try{if(Xe!==0&&Pe!==null){i=Pe;var d=Rn;t:switch(Xe){case 1:Xe=0,Rn=null,uo(n,i,d,1);break;case 2:case 9:if(ev(d)){Xe=0,Rn=null,q_(i);break}i=function(){Xe!==2&&Xe!==9||nt!==n||(Xe=7),Ar(n)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:ev(d)?(Xe=0,Rn=null,q_(i)):(Xe=0,Rn=null,uo(n,i,d,7));break;case 5:var _=null;switch(Pe.tag){case 26:_=Pe.memoizedState;case 5:case 27:var T=Pe;if(!_||AE(_)){Xe=0,Rn=null;var N=T.sibling;if(N!==null)Pe=N;else{var F=T.return;F!==null?(Pe=F,Qc(F)):Pe=null}break t}}Xe=0,Rn=null,uo(n,i,d,5);break;case 6:Xe=0,Rn=null,uo(n,i,d,6);break;case 8:Sp(),mt=6;break e;default:throw Error(s(462))}}X1();break}catch(Q){j_(n,Q)}while(!0);return Wr=Xs=null,j.H=l,j.A=f,Qe=a,Pe!==null?0:(nt=null,ze=0,gc(),mt)}function X1(){for(;Pe!==null&&!Go();)F_(Pe)}function F_(n){var i=m_(n.alternate,n,si);n.memoizedProps=n.pendingProps,i===null?Qc(n):Pe=i}function q_(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=u_(a,i,i.pendingProps,i.type,void 0,ze);break;case 11:i=u_(a,i,i.pendingProps,i.type.render,i.ref,ze);break;case 5:zd(i);default:y_(a,i),i=Pe=Hy(i,si),i=m_(a,i,si)}n.memoizedProps=n.pendingProps,i===null?Qc(n):Pe=i}function uo(n,i,a,l){Wr=Xs=null,zd(i),eo=null,Nl=0;var f=i.return;try{if(j1(n,f,i,a,ze)){mt=1,zc(n,Un(a,n.current)),Pe=null;return}}catch(d){if(f!==null)throw Pe=f,d;mt=1,zc(n,Un(a,n.current)),Pe=null;return}i.flags&32768?(qe||l===1?n=!0:io||(ze&536870912)!==0?n=!1:(ji=n=!0,(l===2||l===9||l===3||l===6)&&(l=Fn.current,l!==null&&l.tag===13&&(l.flags|=16384))),H_(i,n)):Qc(i)}function Qc(n){var i=n;do{if((i.flags&32768)!==0){H_(i,ji);return}n=i.return;var a=B1(i.alternate,i,si);if(a!==null){Pe=a;return}if(i=i.sibling,i!==null){Pe=i;return}Pe=i=n}while(i!==null);mt===0&&(mt=5)}function H_(n,i){do{var a=F1(n.alternate,n);if(a!==null){a.flags&=32767,Pe=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Pe=n;return}Pe=n=a}while(n!==null);mt=6,Pe=null}function G_(n,i,a,l,f,d,_,T,N){n.cancelPendingCommit=null;do Xc();while(Kt!==0);if((Qe&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=md,Wo(n,a,d,_,T,N),n===nt&&(Pe=nt=null,ze=0),ao=i,Fi=n,oo=a,Ep=d,Tp=f,M_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,eR(As,function(){return X_(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,f=$.p,$.p=2,_=Qe,Qe|=4;try{q1(n,i,a)}finally{Qe=_,$.p=f,j.T=l}}Kt=1,K_(),Y_(),$_()}}function K_(){if(Kt===1){Kt=0;var n=Fi,i=ao,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var l=$.p;$.p=2;var f=Qe;Qe|=4;try{C_(i,n);var d=Lp,_=ky(n.containerInfo),T=d.focusedElem,N=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&Py(T.ownerDocument.documentElement,T)){if(N!==null&&cd(T)){var F=N.start,Q=N.end;if(Q===void 0&&(Q=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(Q,T.value.length);else{var J=T.ownerDocument||document,H=J&&J.defaultView||window;if(H.getSelection){var G=H.getSelection(),Re=T.textContent.length,Te=Math.min(N.start,Re),et=N.end===void 0?Te:Math.min(N.end,Re);!G.extend&&Te>et&&(_=et,et=Te,Te=_);var V=xy(T,Te),k=xy(T,et);if(V&&k&&(G.rangeCount!==1||G.anchorNode!==V.node||G.anchorOffset!==V.offset||G.focusNode!==k.node||G.focusOffset!==k.offset)){var B=J.createRange();B.setStart(V.node,V.offset),G.removeAllRanges(),Te>et?(G.addRange(B),G.extend(k.node,k.offset)):(B.setEnd(k.node,k.offset),G.addRange(B))}}}}for(J=[],G=T;G=G.parentNode;)G.nodeType===1&&J.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var X=J[T];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}lh=!!Vp,Lp=Vp=null}finally{Qe=f,$.p=l,j.T=a}}n.current=i,Kt=2}}function Y_(){if(Kt===2){Kt=0;var n=Fi,i=ao,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var l=$.p;$.p=2;var f=Qe;Qe|=4;try{A_(n,i.alternate,i)}finally{Qe=f,$.p=l,j.T=a}}Kt=3}}function $_(){if(Kt===4||Kt===3){Kt=0,Gu();var n=Fi,i=ao,a=oo,l=M_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Kt=5:(Kt=0,ao=Fi=null,Q_(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Bi=null),Ra(a),i=i.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=j.T,f=$.p,$.p=2,j.T=null;try{for(var d=n.onRecoverableError,_=0;_<l.length;_++){var T=l[_];d(T.value,{componentStack:T.stack})}}finally{j.T=i,$.p=f}}(oo&3)!==0&&Xc(),Ar(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===bp?zl++:(zl=0,bp=n):zl=0,Bl(0)}}function Q_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,El(i)))}function Xc(n){return K_(),Y_(),$_(),X_()}function X_(){if(Kt!==5)return!1;var n=Fi,i=Ep;Ep=0;var a=Ra(oo),l=j.T,f=$.p;try{$.p=32>a?32:a,j.T=null,a=Tp,Tp=null;var d=Fi,_=oo;if(Kt=0,ao=Fi=null,oo=0,(Qe&6)!==0)throw Error(s(331));var T=Qe;if(Qe|=4,P_(d.current),O_(d,d.current,_,a),Qe=T,Bl(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{$.p=f,j.T=l,Q_(n,i)}}function W_(n,i,a){i=Un(a,i),i=ep(n.stateNode,i,2),n=xi(n,i,2),n!==null&&(Lr(n,2),Ar(n))}function tt(n,i,a){if(n.tag===3)W_(n,n,a);else for(;i!==null;){if(i.tag===3){W_(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Bi===null||!Bi.has(l))){n=Un(a,n),a=t_(2),l=xi(i,a,2),l!==null&&(n_(a,l,i,n),Lr(l,2),Ar(l));break}}i=i.return}}function Rp(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new K1;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(gp=!0,f.add(a),n=W1.bind(null,n,i,a),i.then(n,n))}function W1(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,nt===n&&(ze&a)===a&&(mt===4||mt===3&&(ze&62914560)===ze&&300>xn()-_p?(Qe&2)===0&&lo(n,0):yp|=a,so===ze&&(so=0)),Ar(n)}function Z_(n,i){i===0&&(i=Xo()),n=Ha(n,i),n!==null&&(Lr(n,i),Ar(n))}function Z1(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Z_(n,a)}function J1(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Z_(n,a)}function eR(n,i){return bs(n,i)}var Wc=null,co=null,Ip=!1,Zc=!1,Cp=!1,ra=0;function Ar(n){n!==co&&n.next===null&&(co===null?Wc=co=n:co=co.next=n),Zc=!0,Ip||(Ip=!0,nR())}function Bl(n,i){if(!Cp&&Zc){Cp=!0;do for(var a=!1,l=Wc;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Wt(42|n)+1)-1,d&=f&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,nE(l,d))}else d=ze,d=wa(l,l===nt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Cs(l,d)||(a=!0,nE(l,d));l=l.next}while(a);Cp=!1}}function tR(){J_()}function J_(){Zc=Ip=!1;var n=0;ra!==0&&(cR()&&(n=ra),ra=0);for(var i=xn(),a=null,l=Wc;l!==null;){var f=l.next,d=eE(l,i);d===0?(l.next=null,a===null?Wc=f:a.next=f,f===null&&(co=a)):(a=l,(n!==0||(d&3)!==0)&&(Zc=!0)),l=f}Bl(n)}function eE(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var _=31-Wt(d),T=1<<_,N=f[_];N===-1?((T&a)===0||(T&l)!==0)&&(f[_]=$o(T,i)):N<=i&&(n.expiredLanes|=T),d&=~T}if(i=nt,a=ze,a=wa(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===i&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Ss(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Cs(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&Ss(l),Ra(a)){case 2:case 8:a=Sa;break;case 32:a=As;break;case 268435456:a=Aa;break;default:a=As}return l=tE.bind(null,n),a=bs(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&Ss(l),n.callbackPriority=2,n.callbackNode=null,2}function tE(n,i){if(Kt!==0&&Kt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Xc()&&n.callbackNode!==a)return null;var l=ze;return l=wa(n,n===nt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(L_(n,l,i),eE(n,xn()),n.callbackNode!=null&&n.callbackNode===a?tE.bind(null,n):null)}function nE(n,i){if(Xc())return null;L_(n,i,!0)}function nR(){fR(function(){(Qe&6)!==0?bs(Ko,tR):J_()})}function Dp(){return ra===0&&(ra=Qo()),ra}function rE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:xa(""+n)}function iE(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function rR(n,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var d=rE((f[St]||null).action),_=l.submitter;_&&(i=(i=_[St]||null)?rE(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var T=new Pa("action","action",null,l,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ra!==0){var N=_?iE(f,_):new FormData(f);Qd(a,{pending:!0,data:N,method:f.method,action:d},null,N)}}else typeof d=="function"&&(T.preventDefault(),N=_?iE(f,_):new FormData(f),Qd(a,{pending:!0,data:N,method:f.method,action:d},d,N))},currentTarget:f}]})}}for(var Op=0;Op<pd.length;Op++){var Np=pd[Op],iR=Np.toLowerCase(),sR=Np[0].toUpperCase()+Np.slice(1);Jn(iR,"on"+sR)}Jn(Ly,"onAnimationEnd"),Jn(Uy,"onAnimationIteration"),Jn(jy,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(b1,"onTransitionRun"),Jn(S1,"onTransitionStart"),Jn(A1,"onTransitionCancel"),Jn(zy,"onTransitionEnd"),jr("onMouseEnter",["mouseout","mouseover"]),jr("onMouseLeave",["mouseout","mouseover"]),jr("onPointerEnter",["pointerout","pointerover"]),jr("onPointerLeave",["pointerout","pointerover"]),Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function sE(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var T=l[_],N=T.instance,F=T.currentTarget;if(T=T.listener,N!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=F;try{d(f)}catch(Q){jc(Q)}f.currentTarget=null,d=N}else for(_=0;_<l.length;_++){if(T=l[_],N=T.instance,F=T.currentTarget,T=T.listener,N!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=F;try{d(f)}catch(Q){jc(Q)}f.currentTarget=null,d=N}}}}function ke(n,i){var a=i[Jo];a===void 0&&(a=i[Jo]=new Set);var l=n+"__bubble";a.has(l)||(aE(i,n,2,!1),a.add(l))}function xp(n,i,a){var l=0;i&&(l|=4),aE(a,n,l,i)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function Pp(n){if(!n[Jc]){n[Jc]=!0,el.forEach(function(a){a!=="selectionchange"&&(aR.has(a)||xp(a,!1,n),xp(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Jc]||(i[Jc]=!0,xp("selectionchange",!1,i))}}function aE(n,i,a,l){switch(OE(i)){case 2:var f=PR;break;case 8:f=kR;break;default:f=Yp}a=f.bind(null,i,a,n),f=void 0,!Vn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function kp(n,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===f)break;if(_===4)for(_=l.return;_!==null;){var N=_.tag;if((N===3||N===4)&&_.stateNode.containerInfo===f)return;_=_.return}for(;T!==null;){if(_=Ur(T),_===null)return;if(N=_.tag,N===5||N===6||N===26||N===27){l=d=_;continue e}T=T.parentNode}}l=l.return}tc(function(){var F=d,Q=Mn(a),J=[];e:{var H=By.get(n);if(H!==void 0){var G=Pa,Re=n;switch(n){case"keypress":if(mr(a)===0)break e;case"keydown":case"keyup":G=ja;break;case"focusin":Re="focus",G=Va;break;case"focusout":Re="blur",G=Va;break;case"beforeblur":case"afterblur":G=Va;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=uc;break;case Ly:case Uy:case jy:G=La;break;case zy:G=hc;break;case"scroll":case"scrollend":G=nc;break;case"wheel":G=za;break;case"copy":case"cut":case"paste":G=Ua;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=fl;break;case"toggle":case"beforetoggle":G=dc}var Te=(i&4)!==0,et=!Te&&(n==="scroll"||n==="scrollend"),V=Te?H!==null?H+"Capture":null:H;Te=[];for(var k=F,B;k!==null;){var X=k;if(B=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||B===null||V===null||(X=Vs(k,V),X!=null&&Te.push(ql(k,X,B))),et)break;k=k.return}0<Te.length&&(H=new G(H,Re,null,a,Q),J.push({event:H,listeners:Te}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",H&&a!==Fr&&(Re=a.relatedTarget||a.fromElement)&&(Ur(Re)||Re[Pn]))break e;if((G||H)&&(H=Q.window===Q?Q:(H=Q.ownerDocument)?H.defaultView||H.parentWindow:window,G?(Re=a.relatedTarget||a.toElement,G=F,Re=Re?Ur(Re):null,Re!==null&&(et=u(Re),Te=Re.tag,Re!==et||Te!==5&&Te!==27&&Te!==6)&&(Re=null)):(G=null,Re=F),G!==Re)){if(Te=Ln,X="onMouseLeave",V="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(Te=fl,X="onPointerLeave",V="onPointerEnter",k="pointer"),et=G==null?H:hr(G),B=Re==null?H:hr(Re),H=new Te(X,k+"leave",G,a,Q),H.target=et,H.relatedTarget=B,X=null,Ur(Q)===F&&(Te=new Te(V,k+"enter",Re,a,Q),Te.target=B,Te.relatedTarget=et,X=Te),et=X,G&&Re)t:{for(Te=G,V=Re,k=0,B=Te;B;B=ho(B))k++;for(B=0,X=V;X;X=ho(X))B++;for(;0<k-B;)Te=ho(Te),k--;for(;0<B-k;)V=ho(V),B--;for(;k--;){if(Te===V||V!==null&&Te===V.alternate)break t;Te=ho(Te),V=ho(V)}Te=null}else Te=null;G!==null&&oE(J,H,G,Te,!1),Re!==null&&et!==null&&oE(J,et,Re,Te,!0)}}e:{if(H=F?hr(F):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var pe=Ry;else if(xt(H))if(Iy)pe=_1;else{pe=y1;var xe=g1}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?F&&sl(F.elementType)&&(pe=Ry):pe=v1;if(pe&&(pe=pe(n,F))){Yr(J,pe,a,Q);break e}xe&&xe(n,H,F),n==="focusout"&&F&&H.type==="number"&&F.memoizedProps.value!=null&&Ii(H,"number",H.value)}switch(xe=F?hr(F):window,n){case"focusin":(xt(xe)||xe.contentEditable==="true")&&(Ba=xe,hd=F,ml=null);break;case"focusout":ml=hd=Ba=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,My(J,a,Q);break;case"selectionchange":if(T1)break;case"keydown":case"keyup":My(J,a,Q)}var _e;if(vr)e:{switch(n){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Ue?K(n,a)&&(be="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(v&&a.locale!=="ko"&&(Ue||be!=="onCompositionStart"?be==="onCompositionEnd"&&Ue&&(_e=ol()):(pr=Q,Ci="value"in pr?pr.value:pr.textContent,Ue=!0)),xe=eh(F,be),0<xe.length&&(be=new cl(be,n,null,a,Q),J.push({event:be,listeners:xe}),_e?be.data=_e:(_e=oe(a),_e!==null&&(be.data=_e)))),(_e=g?Nt(n,a):je(n,a))&&(be=eh(F,"onBeforeInput"),0<be.length&&(xe=new cl("onBeforeInput","beforeinput",null,a,Q),J.push({event:xe,listeners:be}),xe.data=_e)),rR(J,n,F,a,Q)}sE(J,i)})}function ql(n,i,a){return{instance:n,listener:i,currentTarget:a}}function eh(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Vs(n,a),f!=null&&l.unshift(ql(n,f,d)),f=Vs(n,i),f!=null&&l.push(ql(n,f,d))),n.tag===3)return l;n=n.return}return[]}function ho(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function oE(n,i,a,l,f){for(var d=i._reactName,_=[];a!==null&&a!==l;){var T=a,N=T.alternate,F=T.stateNode;if(T=T.tag,N!==null&&N===l)break;T!==5&&T!==26&&T!==27||F===null||(N=F,f?(F=Vs(a,d),F!=null&&_.unshift(ql(a,F,N))):f||(F=Vs(a,d),F!=null&&_.push(ql(a,F,N)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var oR=/\r\n?/g,lR=/\u0000|\uFFFD/g;function lE(n){return(typeof n=="string"?n:""+n).replace(oR,`
`).replace(lR,"")}function uE(n,i){return i=lE(i),lE(n)===i}function th(){}function Je(n,i,a,l,f,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||kn(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&kn(n,""+l);break;case"className":fr(n,"class",l);break;case"tabIndex":fr(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fr(n,a,l);break;case"style":il(n,l,d);break;case"data":if(i!=="object"){fr(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=xa(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Je(n,i,"name",f.name,f,null),Je(n,i,"formEncType",f.formEncType,f,null),Je(n,i,"formMethod",f.formMethod,f,null),Je(n,i,"formTarget",f.formTarget,f,null)):(Je(n,i,"encType",f.encType,f,null),Je(n,i,"method",f.method,f,null),Je(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=xa(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=th);break;case"onScroll":l!=null&&ke("scroll",n);break;case"onScrollEnd":l!=null&&ke("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=xa(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":ke("beforetoggle",n),ke("toggle",n),Ri(n,"popover",l);break;case"xlinkActuate":qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ri(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=id.get(a)||a,Ri(n,a,l))}}function Mp(n,i,a,l,f,d){switch(a){case"style":il(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?kn(n,l):(typeof l=="number"||typeof l=="bigint")&&kn(n,""+l);break;case"onScroll":l!=null&&ke("scroll",n);break;case"onScrollEnd":l!=null&&ke("scrollend",n);break;case"onClick":l!=null&&(n.onclick=th);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ia.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),d=n[St]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Ri(n,a,l)}}}function Yt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",n),ke("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,d,_,a,null)}}f&&Je(n,i,"srcSet",a.srcSet,a,null),l&&Je(n,i,"src",a.src,a,null);return;case"input":ke("invalid",n);var T=d=_=f=null,N=null,F=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":f=Q;break;case"type":_=Q;break;case"checked":N=Q;break;case"defaultChecked":F=Q;break;case"value":d=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,i));break;default:Je(n,i,l,Q,a,null)}}Ps(n,d,T,N,F,_,f,!1),Na(n);return;case"select":ke("invalid",n),l=_=d=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:Je(n,i,f,T,a,null)}i=d,a=_,n.multiple=!!l,i!=null?Br(n,!!l,i,!1):a!=null&&Br(n,!!l,a,!0);return;case"textarea":ke("invalid",n),d=f=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Je(n,i,_,T,a,null)}ks(n,l,f,d),Na(n);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(n,i,N,l,a,null)}return;case"dialog":ke("beforetoggle",n),ke("toggle",n),ke("cancel",n),ke("close",n);break;case"iframe":case"object":ke("load",n);break;case"video":case"audio":for(l=0;l<Fl.length;l++)ke(Fl[l],n);break;case"image":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"embed":case"source":case"link":ke("error",n),ke("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in a)if(a.hasOwnProperty(F)&&(l=a[F],l!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,F,l,a,null)}return;default:if(sl(i)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&Mp(n,i,Q,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Je(n,i,T,l,a,null))}function uR(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,_=null,T=null,N=null,F=null,Q=null;for(G in a){var J=a[G];if(a.hasOwnProperty(G)&&J!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":N=J;default:l.hasOwnProperty(G)||Je(n,i,G,null,l,J)}}for(var H in l){var G=l[H];if(J=a[H],l.hasOwnProperty(H)&&(G!=null||J!=null))switch(H){case"type":d=G;break;case"name":f=G;break;case"checked":F=G;break;case"defaultChecked":Q=G;break;case"value":_=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:G!==J&&Je(n,i,H,G,l,J)}}Tn(n,_,T,N,F,Q,d,f);return;case"select":G=_=T=H=null;for(d in a)if(N=a[d],a.hasOwnProperty(d)&&N!=null)switch(d){case"value":break;case"multiple":G=N;default:l.hasOwnProperty(d)||Je(n,i,d,null,l,N)}for(f in l)if(d=l[f],N=a[f],l.hasOwnProperty(f)&&(d!=null||N!=null))switch(f){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==N&&Je(n,i,f,d,l,N)}i=T,a=_,l=G,H!=null?Br(n,!!a,H,!1):!!l!=!!a&&(i!=null?Br(n,!!a,i,!0):Br(n,!!a,a?[]:"",!1));return;case"textarea":G=H=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Je(n,i,T,null,l,f)}for(_ in l)if(f=l[_],d=a[_],l.hasOwnProperty(_)&&(f!=null||d!=null))switch(_){case"value":H=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Je(n,i,_,f,l,d)}We(n,H,G);return;case"option":for(var Re in a)if(H=a[Re],a.hasOwnProperty(Re)&&H!=null&&!l.hasOwnProperty(Re))switch(Re){case"selected":n.selected=!1;break;default:Je(n,i,Re,null,l,H)}for(N in l)if(H=l[N],G=a[N],l.hasOwnProperty(N)&&H!==G&&(H!=null||G!=null))switch(N){case"selected":n.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Je(n,i,N,H,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in a)H=a[Te],a.hasOwnProperty(Te)&&H!=null&&!l.hasOwnProperty(Te)&&Je(n,i,Te,null,l,H);for(F in l)if(H=l[F],G=a[F],l.hasOwnProperty(F)&&H!==G&&(H!=null||G!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:Je(n,i,F,H,l,G)}return;default:if(sl(i)){for(var et in a)H=a[et],a.hasOwnProperty(et)&&H!==void 0&&!l.hasOwnProperty(et)&&Mp(n,i,et,void 0,l,H);for(Q in l)H=l[Q],G=a[Q],!l.hasOwnProperty(Q)||H===G||H===void 0&&G===void 0||Mp(n,i,Q,H,l,G);return}}for(var V in a)H=a[V],a.hasOwnProperty(V)&&H!=null&&!l.hasOwnProperty(V)&&Je(n,i,V,null,l,H);for(J in l)H=l[J],G=a[J],!l.hasOwnProperty(J)||H===G||H==null&&G==null||Je(n,i,J,H,l,G)}var Vp=null,Lp=null;function nh(n){return n.nodeType===9?n:n.ownerDocument}function cE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hE(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Up(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var jp=null;function cR(){var n=window.event;return n&&n.type==="popstate"?n===jp?!1:(jp=n,!0):(jp=null,!1)}var fE=typeof setTimeout=="function"?setTimeout:void 0,hR=typeof clearTimeout=="function"?clearTimeout:void 0,dE=typeof Promise=="function"?Promise:void 0,fR=typeof queueMicrotask=="function"?queueMicrotask:typeof dE<"u"?function(n){return dE.resolve(null).then(n).catch(dR)}:fE;function dR(n){setTimeout(function(){throw n})}function Hi(n){return n==="head"}function pE(n,i){var a=i,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var _=n.ownerDocument;if(a&1&&Hl(_.documentElement),a&2&&Hl(_.body),a&4)for(a=_.head,Hl(a),_=a.firstChild;_;){var T=_.nextSibling,N=_.nodeName;_[Ds]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&_.rel.toLowerCase()==="stylesheet"||a.removeChild(_),_=T}}if(f===0){n.removeChild(d),Zl(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Zl(i)}function zp(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zp(a),wi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function pR(n,i,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ds])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=tr(n.nextSibling),n===null)break}return null}function mR(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=tr(n.nextSibling),n===null))return null;return n}function Bp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function gR(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Fp=null;function mE(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function gE(n,i,a){switch(i=nh(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function Hl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);wi(n)}var Hn=new Map,yE=new Set;function rh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ai=$.d;$.d={f:yR,r:vR,D:_R,C:ER,L:TR,m:bR,X:AR,S:SR,M:wR};function yR(){var n=ai.f(),i=$c();return n||i}function vR(n){var i=cr(n);i!==null&&i.tag===5&&i.type==="form"?Lv(i):ai.r(n)}var fo=typeof document>"u"?null:document;function vE(n,i,a){var l=fo;if(l&&typeof i=="string"&&i){var f=At(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),yE.has(f)||(yE.add(f),n={rel:n,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Yt(i,"link",n),gt(i),l.head.appendChild(i)))}}function _R(n){ai.D(n),vE("dns-prefetch",n,null)}function ER(n,i){ai.C(n,i),vE("preconnect",n,i)}function TR(n,i,a){ai.L(n,i,a);var l=fo;if(l&&n&&i){var f='link[rel="preload"][as="'+At(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+At(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+At(a.imageSizes)+'"]')):f+='[href="'+At(n)+'"]';var d=f;switch(i){case"style":d=po(n);break;case"script":d=mo(n)}Hn.has(d)||(n=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Hn.set(d,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(Gl(d))||i==="script"&&l.querySelector(Kl(d))||(i=l.createElement("link"),Yt(i,"link",n),gt(i),l.head.appendChild(i)))}}function bR(n,i){ai.m(n,i);var a=fo;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+At(l)+'"][href="'+At(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=mo(n)}if(!Hn.has(d)&&(n=E({rel:"modulepreload",href:n},i),Hn.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Kl(d)))return}l=a.createElement("link"),Yt(l,"link",n),gt(l),a.head.appendChild(l)}}}function SR(n,i,a){ai.S(n,i,a);var l=fo;if(l&&n){var f=ln(l).hoistableStyles,d=po(n);i=i||"default";var _=f.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(Gl(d)))T.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Hn.get(d))&&qp(n,a);var N=_=l.createElement("link");gt(N),Yt(N,"link",n),N._p=new Promise(function(F,Q){N.onload=F,N.onerror=Q}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ih(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:T},f.set(d,_)}}}function AR(n,i){ai.X(n,i);var a=fo;if(a&&n){var l=ln(a).hoistableScripts,f=mo(n),d=l.get(f);d||(d=a.querySelector(Kl(f)),d||(n=E({src:n,async:!0},i),(i=Hn.get(f))&&Hp(n,i),d=a.createElement("script"),gt(d),Yt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function wR(n,i){ai.M(n,i);var a=fo;if(a&&n){var l=ln(a).hoistableScripts,f=mo(n),d=l.get(f);d||(d=a.querySelector(Kl(f)),d||(n=E({src:n,async:!0,type:"module"},i),(i=Hn.get(f))&&Hp(n,i),d=a.createElement("script"),gt(d),Yt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function _E(n,i,a,l){var f=(f=Se.current)?rh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=po(a.href),a=ln(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=po(a.href);var d=ln(f).hoistableStyles,_=d.get(n);if(_||(f=f.ownerDocument||f,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,_),(d=f.querySelector(Gl(n)))&&!d._p&&(_.instance=d,_.state.loading=5),Hn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Hn.set(n,a),d||RR(f,n,a,_.state))),i&&l===null)throw Error(s(528,""));return _}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=mo(a),a=ln(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function po(n){return'href="'+At(n)+'"'}function Gl(n){return'link[rel="stylesheet"]['+n+"]"}function EE(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function RR(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Yt(i,"link",a),gt(i),n.head.appendChild(i))}function mo(n){return'[src="'+At(n)+'"]'}function Kl(n){return"script[async]"+n}function TE(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+At(a.href)+'"]');if(l)return i.instance=l,gt(l),l;var f=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),gt(l),Yt(l,"style",f),ih(l,a.precedence,n),i.instance=l;case"stylesheet":f=po(a.href);var d=n.querySelector(Gl(f));if(d)return i.state.loading|=4,i.instance=d,gt(d),d;l=EE(a),(f=Hn.get(f))&&qp(l,f),d=(n.ownerDocument||n).createElement("link"),gt(d);var _=d;return _._p=new Promise(function(T,N){_.onload=T,_.onerror=N}),Yt(d,"link",l),i.state.loading|=4,ih(d,a.precedence,n),i.instance=d;case"script":return d=mo(a.src),(f=n.querySelector(Kl(d)))?(i.instance=f,gt(f),f):(l=a,(f=Hn.get(d))&&(l=E({},a),Hp(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),gt(f),Yt(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ih(l,a.precedence,n));return i.instance}function ih(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===i)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function qp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Hp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var sh=null;function bE(n,i,a){if(sh===null){var l=new Map,f=sh=new Map;f.set(a,l)}else f=sh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[Ds]||d[Ot]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=n+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function SE(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function IR(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function AE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Yl=null;function CR(){}function DR(n,i,a){if(Yl===null)throw Error(s(475));var l=Yl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=po(a.href),d=n.querySelector(Gl(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=ah.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,gt(d);return}d=n.ownerDocument||n,a=EE(a),(f=Hn.get(f))&&qp(a,f),d=d.createElement("link"),gt(d);var _=d;_._p=new Promise(function(T,N){_.onload=T,_.onerror=N}),Yt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=ah.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function OR(){if(Yl===null)throw Error(s(475));var n=Yl;return n.stylesheets&&n.count===0&&Gp(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&Gp(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function ah(){if(this.count--,this.count===0){if(this.stylesheets)Gp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var oh=null;function Gp(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,oh=new Map,i.forEach(NR,n),oh=null,ah.call(n))}function NR(n,i){if(!(i.state.loading&4)){var a=oh.get(n);if(a)var l=a.get(null);else{a=new Map,oh.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var _=f[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}f=i.instance,_=f.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,f),a.set(_,f),this.count++,l=ah.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var $l={$$typeof:ce,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function xR(n,i,a,l,f,d,_,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.hiddenUpdates=Vr(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function wE(n,i,a,l,f,d,_,T,N,F,Q,J){return n=new xR(n,i,a,_,T,N,F,J),i=1,d===!0&&(i|=24),d=Sn(3,null,null,i),n.current=d,d.stateNode=n,i=Rd(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Od(d),n}function RE(n){return n?(n=Ga,n):Ga}function IE(n,i,a,l,f,d){f=RE(f),l.context===null?l.context=f:l.pendingContext=f,l=Ni(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=xi(n,l,i),a!==null&&(Cn(a,n,i),Al(a,n,i))}function CE(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Kp(n,i){CE(n,i),(n=n.alternate)&&CE(n,i)}function DE(n){if(n.tag===13){var i=Ha(n,67108864);i!==null&&Cn(i,n,67108864),Kp(n,67108864)}}var lh=!0;function PR(n,i,a,l){var f=j.T;j.T=null;var d=$.p;try{$.p=2,Yp(n,i,a,l)}finally{$.p=d,j.T=f}}function kR(n,i,a,l){var f=j.T;j.T=null;var d=$.p;try{$.p=8,Yp(n,i,a,l)}finally{$.p=d,j.T=f}}function Yp(n,i,a,l){if(lh){var f=$p(l);if(f===null)kp(n,i,l,uh,a),NE(n,l);else if(VR(f,n,i,a,l))l.stopPropagation();else if(NE(n,l),i&4&&-1<MR.indexOf(n)){for(;f!==null;){var d=cr(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Xn(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var N=1<<31-Wt(_);T.entanglements[1]|=N,_&=~N}Ar(d),(Qe&6)===0&&(Kc=xn()+500,Bl(0))}}break;case 13:T=Ha(d,2),T!==null&&Cn(T,d,2),$c(),Kp(d,2)}if(d=$p(l),d===null&&kp(n,i,l,uh,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else kp(n,i,l,null,a)}}function $p(n){return n=Mn(n),Qp(n)}var uh=null;function Qp(n){if(uh=null,n=Ur(n),n!==null){var i=u(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=h(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return uh=n,null}function OE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zf()){case Ko:return 2;case Sa:return 8;case As:case Jf:return 32;case Aa:return 268435456;default:return 32}default:return 32}}var Xp=!1,Gi=null,Ki=null,Yi=null,Ql=new Map,Xl=new Map,$i=[],MR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function NE(n,i){switch(n){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Ql.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(i.pointerId)}}function Wl(n,i,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=cr(i),i!==null&&DE(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function VR(n,i,a,l,f){switch(i){case"focusin":return Gi=Wl(Gi,n,i,a,l,f),!0;case"dragenter":return Ki=Wl(Ki,n,i,a,l,f),!0;case"mouseover":return Yi=Wl(Yi,n,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return Ql.set(d,Wl(Ql.get(d)||null,n,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Xl.set(d,Wl(Xl.get(d)||null,n,i,a,l,f)),!0}return!1}function xE(n){var i=Ur(n.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){n.blockedOn=i,$u(n.priority,function(){if(a.tag===13){var l=In();l=bi(l);var f=Ha(a,l);f!==null&&Cn(f,a,l),Kp(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ch(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=$p(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Fr=l,a.target.dispatchEvent(l),Fr=null}else return i=cr(a),i!==null&&DE(i),n.blockedOn=a,!1;i.shift()}return!0}function PE(n,i,a){ch(n)&&a.delete(i)}function LR(){Xp=!1,Gi!==null&&ch(Gi)&&(Gi=null),Ki!==null&&ch(Ki)&&(Ki=null),Yi!==null&&ch(Yi)&&(Yi=null),Ql.forEach(PE),Xl.forEach(PE)}function hh(n,i){n.blockedOn===i&&(n.blockedOn=null,Xp||(Xp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,LR)))}var fh=null;function kE(n){fh!==n&&(fh=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fh===n&&(fh=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(Qp(l||a)===null)continue;break}var d=cr(a);d!==null&&(n.splice(i,3),i-=3,Qd(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function Zl(n){function i(N){return hh(N,n)}Gi!==null&&hh(Gi,n),Ki!==null&&hh(Ki,n),Yi!==null&&hh(Yi,n),Ql.forEach(i),Xl.forEach(i);for(var a=0;a<$i.length;a++){var l=$i[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<$i.length&&(a=$i[0],a.blockedOn===null);)xE(a),a.blockedOn===null&&$i.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],_=f[St]||null;if(typeof d=="function")_||kE(a);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,_=d[St]||null)T=_.formAction;else if(Qp(f)!==null)continue}else T=_.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),kE(a)}}}function Wp(n){this._internalRoot=n}dh.prototype.render=Wp.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=In();IE(a,l,n,i,null,null)},dh.prototype.unmount=Wp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;IE(n.current,2,null,n,null,null),$c(),i[Pn]=null}};function dh(n){this._internalRoot=n}dh.prototype.unstable_scheduleHydration=function(n){if(n){var i=Si();n={blockedOn:null,target:n,priority:i};for(var a=0;a<$i.length&&i!==0&&i<$i[a].priority;a++);$i.splice(a,0,n),a===0&&xE(n)}};var ME=e.version;if(ME!=="19.1.1")throw Error(s(527,ME,"19.1.1"));$.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(i),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var UR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ph=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ph.isDisabled&&ph.supportsFiber)try{dt=ph.inject(UR),$e=ph}catch{}}return eu.createRoot=function(n,i){if(!o(n))throw Error(s(299));var a=!1,l="",f=Wv,d=Zv,_=Jv,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=wE(n,1,!1,null,null,a,l,f,d,_,T,null),n[Pn]=i.current,Pp(n),new Wp(i)},eu.hydrateRoot=function(n,i,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=Wv,_=Zv,T=Jv,N=null,F=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(F=a.formState)),i=wE(n,1,!0,i,a??null,l,f,d,_,T,N,F),i.context=RE(null),a=i.current,l=In(),l=bi(l),f=Ni(l),f.callback=null,xi(a,f,l),a=l,i.current.lanes=a,Lr(i,a),Ar(i),n[Pn]=i.current,Pp(n),new dh(i)},eu.version="19.1.1",eu}var GE;function YR(){if(GE)return em.exports;GE=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),em.exports=KR(),em.exports}var $R=YR();const QR=Ef($R),XR="modulepreload",WR=function(r){return"/"+r},KE={},gs=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let m=function(y){return Promise.all(y.map(E=>Promise.resolve(E).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=h?.nonce||h?.getAttribute("nonce");o=m(t.map(y=>{if(y=WR(y),y in KE)return;KE[y]=!0;const E=y.endsWith(".css"),R=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${R}`))return;const w=document.createElement("link");if(w.rel=E?"stylesheet":XR,E||(w.as="script"),w.crossOrigin="",w.href=y,p&&w.setAttribute("nonce",p),document.head.appendChild(w),E)return new Promise((L,q)=>{w.addEventListener("load",L),w.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${y}`)))})}))}function u(h){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=h,window.dispatchEvent(p),!p.defaultPrevented)throw h}return o.then(h=>{for(const p of h||[])p.status==="rejected"&&u(p.reason);return e().catch(u)})};var ZR=mb();const JR=()=>{};var YE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},eI=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},yb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,m=o+2<r.length,y=m?r[o+2]:0,E=u>>2,R=(u&3)<<4|p>>4;let w=(p&15)<<2|y>>6,L=y&63;m||(L=64,h||(w=64)),s.push(t[E],t[R],t[w],t[L])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(gb(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):eI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const R=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||y==null||R==null)throw new tI;const w=u<<2|p>>4;if(s.push(w),y!==64){const L=p<<4&240|y>>2;if(s.push(L),R!==64){const q=y<<6&192|R;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(r){const e=gb(r);return yb.encodeByteArray(e,!0)},qh=function(r){return nI(r).replace(/\./g,"")},vb=function(r){try{return yb.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=()=>rI().__FIREBASE_DEFAULTS__,sI=()=>{if(typeof process>"u"||typeof YE>"u")return;const r=YE.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},aI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&vb(r[1]);return e&&JSON.parse(e)},bf=()=>{try{return JR()||iI()||sI()||aI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_b=r=>bf()?.emulatorHosts?.[r],vg=r=>{const e=_b(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Eb=()=>bf()?.config,Tb=r=>bf()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sf(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[qh(JSON.stringify(t)),qh(JSON.stringify(h)),""].join(".")}const cu={};function lI(){const r={prod:[],emulator:[]};for(const e of Object.keys(cu))cu[e]?r.emulator.push(e):r.prod.push(e);return r}function uI(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let $E=!1;function Af(r,e){if(typeof window>"u"||typeof document>"u"||!ys(window.location.host)||cu[r]===e||cu[r]||$E)return;cu[r]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=lI().prod.length>0;function h(){const w=document.getElementById(s);w&&w.remove()}function p(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,L){w.setAttribute("width","24"),w.setAttribute("id",L),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function y(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{$E=!0,h()},w}function E(w,L){w.setAttribute("id",L),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function R(){const w=uI(s),L=t("text"),q=document.getElementById(L)||document.createElement("span"),ie=t("learnmore"),Y=document.getElementById(ie)||document.createElement("a"),de=t("preprendIcon"),ge=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ce=w.element;p(ce),E(Y,ie);const ye=y();m(ge,de),ce.append(ge,q,Y,ye),document.body.appendChild(ce)}u?(q.innerText="Preview backend disconnected.",ge.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ge.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",R):R()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function hI(){const r=bf()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function pI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mI(){const r=on();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function gI(){return!hI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sb(){try{return typeof indexedDB=="object"}catch{return!1}}function Ab(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}function yI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class Qn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=vI,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,va.prototype.create)}}class va{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?_I(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Qn(o,p,s)}}function _I(r,e){return r.replace(EI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const EI=/\{\$([^}]+)}/g;function TI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ca(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(QE(u)&&QE(h)){if(!ca(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function QE(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function iu(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function su(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function bI(r,e){const t=new SI(r,e);return t.subscribe.bind(t)}class SI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");AI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=im),o.error===void 0&&(o.error=im),o.complete===void 0&&(o.complete=im);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function im(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(r){return r&&r._delegate?r._delegate:r}class Yn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new oI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(II(e))try{this.getOrInitializeService({instanceIdentifier:ia})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ia){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ia){return this.instances.has(e)}getOptions(e=ia){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ia){return this.component?this.component.multipleInstances?e:ia:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(r){return r===ia?void 0:r}function II(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const DI={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},OI=Me.INFO,NI={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},xI=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=NI[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wf{constructor(e){this.name=e,this._logLevel=OI,this._logHandler=xI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const PI=(r,e)=>e.some(t=>r instanceof t);let XE,WE;function kI(){return XE||(XE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MI(){return WE||(WE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wb=new WeakMap,xm=new WeakMap,Rb=new WeakMap,sm=new WeakMap,_g=new WeakMap;function VI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(rs(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&wb.set(t,r)}).catch(()=>{}),_g.set(e,r),e}function LI(r){if(xm.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});xm.set(r,e)}let Pm={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return xm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Rb.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function UI(r){Pm=r(Pm)}function jI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(am(this),e,...t);return Rb.set(s,e.sort?e.sort():[e]),rs(s)}:MI().includes(r)?function(...e){return r.apply(am(this),e),rs(wb.get(this))}:function(...e){return rs(r.apply(am(this),e))}}function zI(r){return typeof r=="function"?jI(r):(r instanceof IDBTransaction&&LI(r),PI(r,kI())?new Proxy(r,Pm):r)}function rs(r){if(r instanceof IDBRequest)return VI(r);if(sm.has(r))return sm.get(r);const e=zI(r);return e!==r&&(sm.set(r,e),_g.set(e,r)),e}const am=r=>_g.get(r);function Ib(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=rs(h);return s&&h.addEventListener("upgradeneeded",m=>{s(rs(h.result),m.oldVersion,m.newVersion,rs(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const BI=["get","getKey","getAll","getAllKeys","count"],FI=["put","add","delete","clear"],om=new Map;function ZE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(om.get(e))return om.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=FI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||BI.includes(t)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let y=m.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[t](...p),o&&m.done]))[0]};return om.set(e,u),u}UI(r=>({...r,get:(e,t,s)=>ZE(e,t)||r.get(e,t,s),has:(e,t)=>!!ZE(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(HI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function HI(r){return r.getComponent()?.type==="VERSION"}const km="@firebase/app",JE="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new wf("@firebase/app"),GI="@firebase/app-compat",KI="@firebase/analytics-compat",YI="@firebase/analytics",$I="@firebase/app-check-compat",QI="@firebase/app-check",XI="@firebase/auth",WI="@firebase/auth-compat",ZI="@firebase/database",JI="@firebase/data-connect",eC="@firebase/database-compat",tC="@firebase/functions",nC="@firebase/functions-compat",rC="@firebase/installations",iC="@firebase/installations-compat",sC="@firebase/messaging",aC="@firebase/messaging-compat",oC="@firebase/performance",lC="@firebase/performance-compat",uC="@firebase/remote-config",cC="@firebase/remote-config-compat",hC="@firebase/storage",fC="@firebase/storage-compat",dC="@firebase/firestore",pC="@firebase/ai",mC="@firebase/firestore-compat",gC="firebase",yC="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="[DEFAULT]",vC={[km]:"fire-core",[GI]:"fire-core-compat",[YI]:"fire-analytics",[KI]:"fire-analytics-compat",[QI]:"fire-app-check",[$I]:"fire-app-check-compat",[XI]:"fire-auth",[WI]:"fire-auth-compat",[ZI]:"fire-rtdb",[JI]:"fire-data-connect",[eC]:"fire-rtdb-compat",[tC]:"fire-fn",[nC]:"fire-fn-compat",[rC]:"fire-iid",[iC]:"fire-iid-compat",[sC]:"fire-fcm",[aC]:"fire-fcm-compat",[oC]:"fire-perf",[lC]:"fire-perf-compat",[uC]:"fire-rc",[cC]:"fire-rc-compat",[hC]:"fire-gcs",[fC]:"fire-gcs-compat",[dC]:"fire-fst",[mC]:"fire-fst-compat",[pC]:"fire-vertex","fire-js":"fire-js",[gC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=new Map,_C=new Map,Vm=new Map;function eT(r,e){try{r.container.addComponent(e)}catch(t){di.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ar(r){const e=r.name;if(Vm.has(e))return di.debug(`There were multiple attempts to register component ${e}.`),!1;Vm.set(e,r);for(const t of Hh.values())eT(t,r);for(const t of _C.values())eT(t,r);return!0}function vs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function fn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},is=new va("app","Firebase",EC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=yC;function Cb(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Mm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw is.create("bad-app-name",{appName:String(o)});if(t||(t=Eb()),!t)throw is.create("no-options");const u=Hh.get(o);if(u){if(ca(t,u.options)&&ca(s,u.config))return u;throw is.create("duplicate-app",{appName:o})}const h=new CI(o);for(const m of Vm.values())h.addComponent(m);const p=new TC(t,s,h);return Hh.set(o,p),p}function xu(r=Mm){const e=Hh.get(r);if(!e&&r===Mm&&Eb())return Cb();if(!e)throw is.create("no-app",{appName:r});return e}function an(r,e,t){let s=vC[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),di.warn(h.join(" "));return}ar(new Yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="firebase-heartbeat-database",SC=1,Eu="firebase-heartbeat-store";let lm=null;function Db(){return lm||(lm=Ib(bC,SC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Eu)}catch(t){console.warn(t)}}}}).catch(r=>{throw is.create("idb-open",{originalErrorMessage:r.message})})),lm}async function AC(r){try{const t=(await Db()).transaction(Eu),s=await t.objectStore(Eu).get(Ob(r));return await t.done,s}catch(e){if(e instanceof Qn)di.warn(e.message);else{const t=is.create("idb-get",{originalErrorMessage:e?.message});di.warn(t.message)}}}async function tT(r,e){try{const s=(await Db()).transaction(Eu,"readwrite");await s.objectStore(Eu).put(e,Ob(r)),await s.done}catch(t){if(t instanceof Qn)di.warn(t.message);else{const s=is.create("idb-set",{originalErrorMessage:t?.message});di.warn(s.message)}}}function Ob(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=1024,RC=30;class IC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new DC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>RC){const o=OC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){di.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nT(),{heartbeatsToSend:t,unsentEntries:s}=CC(this._heartbeatsCache.heartbeats),o=qh(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return di.warn(e),""}}}function nT(){return new Date().toISOString().substring(0,10)}function CC(r,e=wC){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),rT(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),rT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class DC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sb()?Ab().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await AC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rT(r){return qh(JSON.stringify({version:2,heartbeats:r})).length}function OC(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(r){ar(new Yn("platform-logger",e=>new qI(e),"PRIVATE")),ar(new Yn("heartbeat",e=>new IC(e),"PRIVATE")),an(km,JE,r),an(km,JE,"esm2020"),an("fire-js","")}NC("");function Nb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xC=Nb,xb=new va("auth","Firebase",Nb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new wf("@firebase/auth");function PC(r,...e){Gh.logLevel<=Me.WARN&&Gh.warn(`Auth (${_a}): ${r}`,...e)}function Dh(r,...e){Gh.logLevel<=Me.ERROR&&Gh.error(`Auth (${_a}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(r,...e){throw Tg(r,...e)}function sr(r,...e){return Tg(r,...e)}function Eg(r,e,t){const s={...xC(),[e]:t};return new va("auth","Firebase",s).create(e,{appName:r.name})}function hi(r){return Eg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kC(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&$n(r,"argument-error"),Eg(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tg(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return xb.create(r,...e)}function Ae(r,e,...t){if(!r)throw Tg(e,...t)}function ui(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Dh(e),new Error(e)}function pi(r,e){r||ui(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){return typeof self<"u"&&self.location?.href||""}function MC(){return iT()==="http:"||iT()==="https:"}function iT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MC()||dI()||"connection"in navigator)?navigator.onLine:!0}function LC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t){this.shortDelay=e,this.longDelay=t,pi(t>e,"Short delay should be less than long delay!"),this.isMobile=cI()||pI()}get(){return VC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(r,e){pi(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zC=new Pu(3e4,6e4);function vi(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function _i(r,e,t,s,o={}){return kb(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Nu({key:r.config.apiKey,...h}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:m,...u};return fI()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&ys(r.emulatorConfig.host)&&(y.credentials="include"),Pb.fetch()(await Mb(r,r.config.apiHost,t,p),y)})}async function kb(r,e,t){r._canInitEmulator=!1;const s={...UC,...e};try{const o=new FC(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw mh(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,y]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw mh(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw mh(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw mh(r,"user-disabled",h);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Eg(r,E,y);$n(r,E)}}catch(o){if(o instanceof Qn)throw o;$n(r,"network-request-failed",{message:String(o)})}}async function ku(r,e,t,s,o={}){const u=await _i(r,e,t,s,o);return"mfaPendingCredential"in u&&$n(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function Mb(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?bg(r.config,o):`${r.config.apiScheme}://${o}`;return jC.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function BC(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(sr(this.auth,"network-request-failed")),zC.get())})}}function mh(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=sr(r,e,s);return o.customData._tokenResponse=t,o}function sT(r){return r!==void 0&&r.enterprise!==void 0}class qC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return BC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HC(r,e){return _i(r,"GET","/v2/recaptchaConfig",vi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(r,e){return _i(r,"POST","/v1/accounts:delete",e)}async function Kh(r,e){return _i(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KC(r,e=!1){const t=lt(r),s=await t.getIdToken(e),o=Sg(s);Ae(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:hu(um(o.auth_time)),issuedAtTime:hu(um(o.iat)),expirationTime:hu(um(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function um(r){return Number(r)*1e3}function Sg(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Dh("JWT malformed, contained fewer than 3 sections"),null;try{const o=vb(t);return o?JSON.parse(o):(Dh("Failed to decode base64 JWT payload"),null)}catch(o){return Dh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function aT(r){const e=Sg(r);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Qn&&YC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function YC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hu(this.lastLoginAt),this.creationTime=hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(r){const e=r.auth,t=await r.getIdToken(),s=await Tu(r,Kh(e,{idToken:t}));Ae(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?Vb(o.providerUserInfo):[],h=XC(r.providerData,u),p=r.isAnonymous,m=!(r.email&&o.passwordHash)&&!h?.length,y=p?m:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Um(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,E)}async function QC(r){const e=lt(r);await Yh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XC(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Vb(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(r,e){const t=await kb(r,{},async()=>{const s=Nu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await Mb(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&ys(r.emulatorConfig.host)&&(m.credentials="include"),Pb.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZC(r,e){return _i(r,"POST","/v2/accounts:revokeToken",vi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=aT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await WC(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new To;return s&&(Ae(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Ae(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Ae(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return ui("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(r,e){Ae(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class rr{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new $C(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Um(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Tu(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return KC(this,e)}reload(){return QC(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Yh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await Tu(this,GC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,p=t.tenantId??void 0,m=t._redirectEventId??void 0,y=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:R,emailVerified:w,isAnonymous:L,providerData:q,stsTokenManager:ie}=t;Ae(R&&ie,e,"internal-error");const Y=To.fromJSON(this.name,ie);Ae(typeof R=="string",e,"internal-error"),Xi(s,e.name),Xi(o,e.name),Ae(typeof w=="boolean",e,"internal-error"),Ae(typeof L=="boolean",e,"internal-error"),Xi(u,e.name),Xi(h,e.name),Xi(p,e.name),Xi(m,e.name),Xi(y,e.name),Xi(E,e.name);const de=new rr({uid:R,auth:e,email:o,emailVerified:w,displayName:s,isAnonymous:L,photoURL:h,phoneNumber:u,tenantId:p,stsTokenManager:Y,createdAt:y,lastLoginAt:E});return q&&Array.isArray(q)&&(de.providerData=q.map(ge=>({...ge}))),m&&(de._redirectEventId=m),de}static async _fromIdTokenResponse(e,t,s=!1){const o=new To;o.updateFromServerResponse(t);const u=new rr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Yh(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Ae(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Vb(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,p=new To;p.updateFromIdToken(s);const m=new rr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Um(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=new Map;function ci(r){pi(r instanceof Function,"Expected a class definition");let e=oT.get(r);return e?(pi(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,oT.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lb.type="NONE";const lT=Lb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(r,e,t){return`firebase:${r}:${e}:${t}`}class bo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Oh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Oh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Kh(this.auth,{idToken:e}).catch(()=>{});return t?rr._fromGetAccountInfoResponse(this.auth,t,e):null}return rr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new bo(ci(lT),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||ci(lT);const h=Oh(s,e.config.apiKey,e.name);let p=null;for(const y of t)try{const E=await y._get(h);if(E){let R;if(typeof E=="string"){const w=await Kh(e,{idToken:E}).catch(()=>{});if(!w)break;R=await rr._fromGetAccountInfoResponse(e,w,E)}else R=rr._fromJSON(e,E);y!==u&&(p=R),u=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new bo(u,e,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async y=>{if(y!==u)try{await y._remove(h)}catch{}})),new bo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ub(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qb(e))return"Blackberry";if(Hb(e))return"Webos";if(jb(e))return"Safari";if((e.includes("chrome/")||zb(e))&&!e.includes("edge/"))return"Chrome";if(Fb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function Ub(r=on()){return/firefox\//i.test(r)}function jb(r=on()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zb(r=on()){return/crios\//i.test(r)}function Bb(r=on()){return/iemobile/i.test(r)}function Fb(r=on()){return/android/i.test(r)}function qb(r=on()){return/blackberry/i.test(r)}function Hb(r=on()){return/webos/i.test(r)}function Ag(r=on()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function JC(r=on()){return Ag(r)&&!!window.navigator?.standalone}function eD(){return mI()&&document.documentMode===10}function Gb(r=on()){return Ag(r)||Fb(r)||Hb(r)||qb(r)||/windows phone/i.test(r)||Bb(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(r,e=[]){let t;switch(r){case"Browser":t=uT(on());break;case"Worker":t=`${uT(on())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_a}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(r,e={}){return _i(r,"GET","/v2/passwordPolicy",vi(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=6;class iD{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??rD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cT(this),this.idTokenSubscription=new cT(this),this.beforeStateQueue=new tD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ci(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await bo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Kh(this,{idToken:e}),s=await rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(fn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=s?._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===h)&&p?.user&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(hi(this));const t=e?lt(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ci(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nD(this),t=new iD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new va("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ZC(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ci(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await bo.create(this,[ci(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&PC(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ei(r){return lt(r)}class cT{constructor(e){this.auth=e,this.observer=null,this.addObserver=bI(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aD(r){Rf=r}function Yb(r){return Rf.loadJS(r)}function oD(){return Rf.recaptchaEnterpriseScript}function lD(){return Rf.gapiScript}function uD(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class cD{constructor(){this.enterprise=new hD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class hD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fD="recaptcha-enterprise",$b="NO_RECAPTCHA";class dD{constructor(e){this.type=fD,this.auth=Ei(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{HC(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new qC(m);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,h(y.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;sT(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(y=>{h(y)}).catch(()=>{h($b)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cD().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&sT(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=oD();m.length!==0&&(m+=p),Yb(m).then(()=>{o(p,u,h)}).catch(y=>{h(y)})}}).catch(p=>{h(p)})})}}async function hT(r,e,t,s=!1,o=!1){const u=new dD(r);let h;if(o)h=$b;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function $h(r,e,t,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await hT(r,e,t,t==="getOobCode");return s(r,u)}else return s(r,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await hT(r,e,t,t==="getOobCode");return s(r,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(r,e){const t=vs(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ca(u,e??{}))return o;$n(o,"already-initialized")}return t.initialize({options:e})}function mD(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(ci);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function Qb(r,e,t){const s=Ei(r);Ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Xb(e),{host:h,port:p}=gD(e),m=p===null?"":`:${p}`,y={url:`${u}//${h}${m}/`},E=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ae(ca(y,s.config.emulator)&&ca(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,ys(h)?(Sf(`${u}//${h}${m}`),Af("Auth",!0)):yD()}function Xb(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function gD(r){const e=Xb(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:fT(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:fT(h)}}}function fT(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function yD(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ui("not implemented")}_getIdTokenResponse(e){return ui("not implemented")}_linkToIdToken(e,t){return ui("not implemented")}_getReauthenticationResolver(e){return ui("not implemented")}}async function vD(r,e){return _i(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(r,e){return ku(r,"POST","/v1/accounts:signInWithPassword",vi(r,e))}async function ED(r,e){return _i(r,"POST","/v1/accounts:sendOobCode",vi(r,e))}async function TD(r,e){return ED(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD(r,e){return ku(r,"POST","/v1/accounts:signInWithEmailLink",vi(r,e))}async function SD(r,e){return ku(r,"POST","/v1/accounts:signInWithEmailLink",vi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends wg{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new bu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new bu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $h(e,t,"signInWithPassword",_D);case"emailLink":return bD(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $h(e,s,"signUpPassword",vD);case"emailLink":return SD(e,{idToken:t,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(r,e){return ku(r,"POST","/v1/accounts:signInWithIdp",vi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD="http://localhost";class ha extends wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ha(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new ha(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,So(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:AD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RD(r){const e=iu(su(r)).link,t=e?iu(su(e)).deep_link_id:null,s=iu(su(r)).deep_link_id;return(s?iu(su(s)).link:null)||s||t||e||r}class Rg{constructor(e){const t=iu(su(e)),s=t.apiKey??null,o=t.oobCode??null,u=wD(t.mode??null);Ae(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=RD(e);try{return new Rg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(e,t){return bu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Rg.parseLink(t);return Ae(s,"argument-error"),bu._fromEmailAndCode(e,s.code,s.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Ig{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Mu{constructor(){super("facebook.com")}static credential(e){return ha._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wi.credential(e.oauthAccessToken)}catch{return null}}}Wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Mu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ha._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return li.credential(t,s)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Mu{constructor(){super("github.com")}static credential(e){return ha._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zi.credentialFromTaggedObject(e)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zi.credential(e.oauthAccessToken)}catch{return null}}}Zi.GITHUB_SIGN_IN_METHOD="github.com";Zi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Mu{constructor(){super("twitter.com")}static credential(e,t){return ha._fromParams({providerId:Ji.PROVIDER_ID,signInMethod:Ji.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ji.credentialFromTaggedObject(e)}static credentialFromError(e){return Ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ji.credential(t,s)}catch{return null}}}Ji.TWITTER_SIGN_IN_METHOD="twitter.com";Ji.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ID(r,e){return ku(r,"POST","/v1/accounts:signUp",vi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await rr._fromIdTokenResponse(e,s,o),h=dT(s);return new fa({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=dT(s);return new fa({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function dT(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends Qn{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Qh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Qh(e,t,s,o)}}function Wb(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Qh._fromErrorAndOperation(r,u,e,s):u})}async function CD(r,e,t=!1){const s=await Tu(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return fa._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DD(r,e,t=!1){const{auth:s}=r;if(fn(s.app))return Promise.reject(hi(s));const o="reauthenticate";try{const u=await Tu(r,Wb(s,o,e,r),t);Ae(u.idToken,s,"internal-error");const h=Sg(u.idToken);Ae(h,s,"internal-error");const{sub:p}=h;return Ae(r.uid===p,s,"user-mismatch"),fa._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&$n(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(r,e,t=!1){if(fn(r.app))return Promise.reject(hi(r));const s="signIn",o=await Wb(r,s,e),u=await fa._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function OD(r,e){return Zb(Ei(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(r){const e=Ei(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ND(r,e,t){const s=Ei(r);await $h(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",TD)}async function xD(r,e,t){if(fn(r.app))return Promise.reject(hi(r));const s=Ei(r),h=await $h(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ID).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Jb(r),m}),p=await fa._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function PD(r,e,t){return fn(r.app)?Promise.reject(hi(r)):OD(lt(r),Lo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Jb(r),s})}function kD(r,e,t,s){return lt(r).onIdTokenChanged(e,t,s)}function MD(r,e,t){return lt(r).beforeAuthStateChanged(e,t)}function VD(r,e,t,s){return lt(r).onAuthStateChanged(e,t,s)}function LD(r){return lt(r).signOut()}const Xh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xh,"1"),this.storage.removeItem(Xh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=1e3,jD=10;class tS extends eS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);eD()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,jD):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},UD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tS.type="LOCAL";const zD=tS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS extends eS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nS.type="SESSION";const rS=nS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new If(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async y=>y(t.origin,u)),m=await BD(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}If.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const y=Cg("",20);o.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const w=R;if(w.data.eventId===y)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(w.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){return window}function qD(r){Rr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(){return typeof Rr().WorkerGlobalScope<"u"&&typeof Rr().importScripts=="function"}async function HD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GD(){return navigator?.serviceWorker?.controller||null}function KD(){return iS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="firebaseLocalStorageDb",YD=1,Wh="firebaseLocalStorage",aS="fbase_key";class Vu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Cf(r,e){return r.transaction([Wh],e?"readwrite":"readonly").objectStore(Wh)}function $D(){const r=indexedDB.deleteDatabase(sS);return new Vu(r).toPromise()}function jm(){const r=indexedDB.open(sS,YD);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Wh,{keyPath:aS})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Wh)?e(s):(s.close(),await $D(),e(await jm()))})})}async function pT(r,e,t){const s=Cf(r,!0).put({[aS]:e,value:t});return new Vu(s).toPromise()}async function QD(r,e){const t=Cf(r,!1).get(e),s=await new Vu(t).toPromise();return s===void 0?null:s.value}function mT(r,e){const t=Cf(r,!0).delete(e);return new Vu(t).toPromise()}const XD=800,WD=3;class oS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>WD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=If._getInstance(KD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await HD(),!this.activeServiceWorker)return;this.sender=new FD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jm();return await pT(e,Xh,"1"),await mT(e,Xh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>pT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>QD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Cf(o,!1).getAll();return new Vu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oS.type="LOCAL";const ZD=oS;new Pu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(r,e){return e?ci(e):(Ae(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg extends wg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JD(r){return Zb(r.auth,new Dg(r),r.bypassAuthState)}function eO(r){const{auth:e,user:t}=r;return Ae(t,e,"internal-error"),DD(t,new Dg(r),r.bypassAuthState)}async function tO(r){const{auth:e,user:t}=r;return Ae(t,e,"internal-error"),CD(t,new Dg(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JD;case"linkViaPopup":case"linkViaRedirect":return tO;case"reauthViaPopup":case"reauthViaRedirect":return eO;default:$n(this.auth,"internal-error")}}resolve(e){pi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new Pu(2e3,1e4);async function rO(r,e,t){if(fn(r.app))return Promise.reject(sr(r,"operation-not-supported-in-this-environment"));const s=Ei(r);kC(r,e,Ig);const o=lS(s,t);return new aa(s,"signInViaPopup",e,o).executeNotNull()}class aa extends uS{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,aa.currentPopupAction&&aa.currentPopupAction.cancel(),aa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){pi(this.filter.length===1,"Popup operations only handle one event");const e=Cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,aa.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nO.get())};e()}}aa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO="pendingRedirect",Nh=new Map;class sO extends uS{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Nh.get(this.auth._key());if(!e){try{const s=await aO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Nh.set(this.auth._key(),e)}return this.bypassAuthState||Nh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aO(r,e){const t=uO(e),s=lO(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function oO(r,e){Nh.set(r._key(),e)}function lO(r){return ci(r._redirectPersistence)}function uO(r){return Oh(iO,r.config.apiKey,r.name)}async function cO(r,e,t=!1){if(fn(r.app))return Promise.reject(hi(r));const s=Ei(r),o=lS(s,e),h=await new sO(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=600*1e3;class fO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!cS(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(sr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hO&&this.cachedEventUids.clear(),this.cachedEventUids.has(gT(e))}saveEventToCache(e){this.cachedEventUids.add(gT(e)),this.lastProcessedEventTime=Date.now()}}function gT(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function cS({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function dO(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cS(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pO(r,e={}){return _i(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gO=/^https?/;async function yO(r){if(r.config.emulator)return;const{authorizedDomains:e}=await pO(r);for(const t of e)try{if(vO(t))return}catch{}$n(r,"unauthorized-domain")}function vO(r){const e=Lm(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!gO.test(t))return!1;if(mO.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=new Pu(3e4,6e4);function yT(){const r=Rr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function EO(r){return new Promise((e,t)=>{function s(){yT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yT(),t(sr(r,"network-request-failed"))},timeout:_O.get()})}if(Rr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Rr().gapi?.load)s();else{const o=uD("iframefcb");return Rr()[o]=()=>{gapi.load?s():t(sr(r,"network-request-failed"))},Yb(`${lD()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw xh=null,e})}let xh=null;function TO(r){return xh=xh||EO(r),xh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=new Pu(5e3,15e3),SO="__/auth/iframe",AO="emulator/auth/iframe",wO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IO(r){const e=r.config;Ae(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?bg(e,AO):`https://${r.config.authDomain}/${SO}`,s={apiKey:e.apiKey,appName:r.name,v:_a},o=RO.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Nu(s).slice(1)}`}async function CO(r){const e=await TO(r),t=Rr().gapi;return Ae(t,r,"internal-error"),e.open({where:document.body,url:IO(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wO,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=sr(r,"network-request-failed"),p=Rr().setTimeout(()=>{u(h)},bO.get());function m(){Rr().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OO=500,NO=600,xO="_blank",PO="http://localhost";class vT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kO(r,e,t,s=OO,o=NO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...DO,width:s.toString(),height:o.toString(),top:u,left:h},y=on().toLowerCase();t&&(p=zb(y)?xO:t),Ub(y)&&(e=e||PO,m.scrollbars="yes");const E=Object.entries(m).reduce((w,[L,q])=>`${w}${L}=${q},`,"");if(JC(y)&&p!=="_self")return MO(e||"",p),new vT(null);const R=window.open(e||"",p,E);Ae(R,r,"popup-blocked");try{R.focus()}catch{}return new vT(R)}function MO(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO="__/auth/handler",LO="emulator/auth/handler",UO=encodeURIComponent("fac");async function _T(r,e,t,s,o,u){Ae(r.config.authDomain,r,"auth-domain-config-required"),Ae(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:_a,eventId:o};if(e instanceof Ig){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",TI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,R]of Object.entries({}))h[E]=R}if(e instanceof Mu){const E=e.getScopes().filter(R=>R!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const m=await r._getAppCheckToken(),y=m?`#${UO}=${encodeURIComponent(m)}`:"";return`${jO(r)}?${Nu(p).slice(1)}${y}`}function jO({config:r}){return r.emulator?bg(r,LO):`https://${r.authDomain}/${VO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="webStorageSupport";class zO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rS,this._completeRedirectFn=cO,this._overrideRedirectResult=oO}async _openPopup(e,t,s,o){pi(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await _T(e,t,s,Lm(),o);return kO(e,u,Cg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await _T(e,t,s,Lm(),o);return qD(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(pi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await CO(e),s=new fO(e);return t.register("authEvent",o=>(Ae(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cm,{type:cm},o=>{const u=o?.[0]?.[cm];u!==void 0&&t(!!u),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gb()||jb()||Ag()}}const BO=zO;var ET="@firebase/auth",TT="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HO(r){ar(new Yn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;Ae(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kb(r)},y=new sD(s,o,u,m);return mD(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ar(new Yn("auth-internal",e=>{const t=Ei(e.getProvider("auth").getImmediate());return(s=>new FO(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(ET,TT,qO(r)),an(ET,TT,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=300,KO=Tb("authIdTokenMaxAge")||GO;let bT=null;const YO=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>KO)return;const o=t?.token;bT!==o&&(bT=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $O(r=xu()){const e=vs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=pD(r,{popupRedirectResolver:BO,persistence:[ZD,zD,rS]}),s=Tb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=YO(u.toString());MD(t,h,()=>h(t.currentUser)),kD(t,p=>h(p))}}const o=_b("auth");return o&&Qb(t,`http://${o}`),t}function QO(){return document.getElementsByTagName("head")?.[0]??document}aD({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=sr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",QO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HO("Browser");var XO="firebase",WO="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(XO,WO,"app");var ST=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ss,hS;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,A){function D(){}D.prototype=A.prototype,O.D=A.prototype,O.prototype=new D,O.prototype.constructor=O,O.C=function(C,P,x){for(var b=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)b[Z-2]=arguments[Z];return A.prototype[P].apply(C,b)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,A,D){D||(D=0);var C=Array(16);if(typeof A=="string")for(var P=0;16>P;++P)C[P]=A.charCodeAt(D++)|A.charCodeAt(D++)<<8|A.charCodeAt(D++)<<16|A.charCodeAt(D++)<<24;else for(P=0;16>P;++P)C[P]=A[D++]|A[D++]<<8|A[D++]<<16|A[D++]<<24;A=O.g[0],D=O.g[1],P=O.g[2];var x=O.g[3],b=A+(x^D&(P^x))+C[0]+3614090360&4294967295;A=D+(b<<7&4294967295|b>>>25),b=x+(P^A&(D^P))+C[1]+3905402710&4294967295,x=A+(b<<12&4294967295|b>>>20),b=P+(D^x&(A^D))+C[2]+606105819&4294967295,P=x+(b<<17&4294967295|b>>>15),b=D+(A^P&(x^A))+C[3]+3250441966&4294967295,D=P+(b<<22&4294967295|b>>>10),b=A+(x^D&(P^x))+C[4]+4118548399&4294967295,A=D+(b<<7&4294967295|b>>>25),b=x+(P^A&(D^P))+C[5]+1200080426&4294967295,x=A+(b<<12&4294967295|b>>>20),b=P+(D^x&(A^D))+C[6]+2821735955&4294967295,P=x+(b<<17&4294967295|b>>>15),b=D+(A^P&(x^A))+C[7]+4249261313&4294967295,D=P+(b<<22&4294967295|b>>>10),b=A+(x^D&(P^x))+C[8]+1770035416&4294967295,A=D+(b<<7&4294967295|b>>>25),b=x+(P^A&(D^P))+C[9]+2336552879&4294967295,x=A+(b<<12&4294967295|b>>>20),b=P+(D^x&(A^D))+C[10]+4294925233&4294967295,P=x+(b<<17&4294967295|b>>>15),b=D+(A^P&(x^A))+C[11]+2304563134&4294967295,D=P+(b<<22&4294967295|b>>>10),b=A+(x^D&(P^x))+C[12]+1804603682&4294967295,A=D+(b<<7&4294967295|b>>>25),b=x+(P^A&(D^P))+C[13]+4254626195&4294967295,x=A+(b<<12&4294967295|b>>>20),b=P+(D^x&(A^D))+C[14]+2792965006&4294967295,P=x+(b<<17&4294967295|b>>>15),b=D+(A^P&(x^A))+C[15]+1236535329&4294967295,D=P+(b<<22&4294967295|b>>>10),b=A+(P^x&(D^P))+C[1]+4129170786&4294967295,A=D+(b<<5&4294967295|b>>>27),b=x+(D^P&(A^D))+C[6]+3225465664&4294967295,x=A+(b<<9&4294967295|b>>>23),b=P+(A^D&(x^A))+C[11]+643717713&4294967295,P=x+(b<<14&4294967295|b>>>18),b=D+(x^A&(P^x))+C[0]+3921069994&4294967295,D=P+(b<<20&4294967295|b>>>12),b=A+(P^x&(D^P))+C[5]+3593408605&4294967295,A=D+(b<<5&4294967295|b>>>27),b=x+(D^P&(A^D))+C[10]+38016083&4294967295,x=A+(b<<9&4294967295|b>>>23),b=P+(A^D&(x^A))+C[15]+3634488961&4294967295,P=x+(b<<14&4294967295|b>>>18),b=D+(x^A&(P^x))+C[4]+3889429448&4294967295,D=P+(b<<20&4294967295|b>>>12),b=A+(P^x&(D^P))+C[9]+568446438&4294967295,A=D+(b<<5&4294967295|b>>>27),b=x+(D^P&(A^D))+C[14]+3275163606&4294967295,x=A+(b<<9&4294967295|b>>>23),b=P+(A^D&(x^A))+C[3]+4107603335&4294967295,P=x+(b<<14&4294967295|b>>>18),b=D+(x^A&(P^x))+C[8]+1163531501&4294967295,D=P+(b<<20&4294967295|b>>>12),b=A+(P^x&(D^P))+C[13]+2850285829&4294967295,A=D+(b<<5&4294967295|b>>>27),b=x+(D^P&(A^D))+C[2]+4243563512&4294967295,x=A+(b<<9&4294967295|b>>>23),b=P+(A^D&(x^A))+C[7]+1735328473&4294967295,P=x+(b<<14&4294967295|b>>>18),b=D+(x^A&(P^x))+C[12]+2368359562&4294967295,D=P+(b<<20&4294967295|b>>>12),b=A+(D^P^x)+C[5]+4294588738&4294967295,A=D+(b<<4&4294967295|b>>>28),b=x+(A^D^P)+C[8]+2272392833&4294967295,x=A+(b<<11&4294967295|b>>>21),b=P+(x^A^D)+C[11]+1839030562&4294967295,P=x+(b<<16&4294967295|b>>>16),b=D+(P^x^A)+C[14]+4259657740&4294967295,D=P+(b<<23&4294967295|b>>>9),b=A+(D^P^x)+C[1]+2763975236&4294967295,A=D+(b<<4&4294967295|b>>>28),b=x+(A^D^P)+C[4]+1272893353&4294967295,x=A+(b<<11&4294967295|b>>>21),b=P+(x^A^D)+C[7]+4139469664&4294967295,P=x+(b<<16&4294967295|b>>>16),b=D+(P^x^A)+C[10]+3200236656&4294967295,D=P+(b<<23&4294967295|b>>>9),b=A+(D^P^x)+C[13]+681279174&4294967295,A=D+(b<<4&4294967295|b>>>28),b=x+(A^D^P)+C[0]+3936430074&4294967295,x=A+(b<<11&4294967295|b>>>21),b=P+(x^A^D)+C[3]+3572445317&4294967295,P=x+(b<<16&4294967295|b>>>16),b=D+(P^x^A)+C[6]+76029189&4294967295,D=P+(b<<23&4294967295|b>>>9),b=A+(D^P^x)+C[9]+3654602809&4294967295,A=D+(b<<4&4294967295|b>>>28),b=x+(A^D^P)+C[12]+3873151461&4294967295,x=A+(b<<11&4294967295|b>>>21),b=P+(x^A^D)+C[15]+530742520&4294967295,P=x+(b<<16&4294967295|b>>>16),b=D+(P^x^A)+C[2]+3299628645&4294967295,D=P+(b<<23&4294967295|b>>>9),b=A+(P^(D|~x))+C[0]+4096336452&4294967295,A=D+(b<<6&4294967295|b>>>26),b=x+(D^(A|~P))+C[7]+1126891415&4294967295,x=A+(b<<10&4294967295|b>>>22),b=P+(A^(x|~D))+C[14]+2878612391&4294967295,P=x+(b<<15&4294967295|b>>>17),b=D+(x^(P|~A))+C[5]+4237533241&4294967295,D=P+(b<<21&4294967295|b>>>11),b=A+(P^(D|~x))+C[12]+1700485571&4294967295,A=D+(b<<6&4294967295|b>>>26),b=x+(D^(A|~P))+C[3]+2399980690&4294967295,x=A+(b<<10&4294967295|b>>>22),b=P+(A^(x|~D))+C[10]+4293915773&4294967295,P=x+(b<<15&4294967295|b>>>17),b=D+(x^(P|~A))+C[1]+2240044497&4294967295,D=P+(b<<21&4294967295|b>>>11),b=A+(P^(D|~x))+C[8]+1873313359&4294967295,A=D+(b<<6&4294967295|b>>>26),b=x+(D^(A|~P))+C[15]+4264355552&4294967295,x=A+(b<<10&4294967295|b>>>22),b=P+(A^(x|~D))+C[6]+2734768916&4294967295,P=x+(b<<15&4294967295|b>>>17),b=D+(x^(P|~A))+C[13]+1309151649&4294967295,D=P+(b<<21&4294967295|b>>>11),b=A+(P^(D|~x))+C[4]+4149444226&4294967295,A=D+(b<<6&4294967295|b>>>26),b=x+(D^(A|~P))+C[11]+3174756917&4294967295,x=A+(b<<10&4294967295|b>>>22),b=P+(A^(x|~D))+C[2]+718787259&4294967295,P=x+(b<<15&4294967295|b>>>17),b=D+(x^(P|~A))+C[9]+3951481745&4294967295,O.g[0]=O.g[0]+A&4294967295,O.g[1]=O.g[1]+(P+(b<<21&4294967295|b>>>11))&4294967295,O.g[2]=O.g[2]+P&4294967295,O.g[3]=O.g[3]+x&4294967295}s.prototype.u=function(O,A){A===void 0&&(A=O.length);for(var D=A-this.blockSize,C=this.B,P=this.h,x=0;x<A;){if(P==0)for(;x<=D;)o(this,O,x),x+=this.blockSize;if(typeof O=="string"){for(;x<A;)if(C[P++]=O.charCodeAt(x++),P==this.blockSize){o(this,C),P=0;break}}else for(;x<A;)if(C[P++]=O[x++],P==this.blockSize){o(this,C),P=0;break}}this.h=P,this.o+=A},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var A=1;A<O.length-8;++A)O[A]=0;var D=8*this.o;for(A=O.length-8;A<O.length;++A)O[A]=D&255,D/=256;for(this.u(O),O=Array(16),A=D=0;4>A;++A)for(var C=0;32>C;C+=8)O[D++]=this.g[A]>>>C&255;return O};function u(O,A){var D=p;return Object.prototype.hasOwnProperty.call(D,O)?D[O]:D[O]=A(O)}function h(O,A){this.h=A;for(var D=[],C=!0,P=O.length-1;0<=P;P--){var x=O[P]|0;C&&x==A||(D[P]=x,C=!1)}this.g=D}var p={};function m(O){return-128<=O&&128>O?u(O,function(A){return new h([A|0],0>A?-1:0)}):new h([O|0],0>O?-1:0)}function y(O){if(isNaN(O)||!isFinite(O))return R;if(0>O)return Y(y(-O));for(var A=[],D=1,C=0;O>=D;C++)A[C]=O/D|0,D*=4294967296;return new h(A,0)}function E(O,A){if(O.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(O.charAt(0)=="-")return Y(E(O.substring(1),A));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var D=y(Math.pow(A,8)),C=R,P=0;P<O.length;P+=8){var x=Math.min(8,O.length-P),b=parseInt(O.substring(P,P+x),A);8>x?(x=y(Math.pow(A,x)),C=C.j(x).add(y(b))):(C=C.j(D),C=C.add(y(b)))}return C}var R=m(0),w=m(1),L=m(16777216);r=h.prototype,r.m=function(){if(ie(this))return-Y(this).m();for(var O=0,A=1,D=0;D<this.g.length;D++){var C=this.i(D);O+=(0<=C?C:4294967296+C)*A,A*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(q(this))return"0";if(ie(this))return"-"+Y(this).toString(O);for(var A=y(Math.pow(O,6)),D=this,C="";;){var P=ye(D,A).g;D=de(D,P.j(A));var x=((0<D.g.length?D.g[0]:D.h)>>>0).toString(O);if(D=P,q(D))return x+C;for(;6>x.length;)x="0"+x;C=x+C}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function q(O){if(O.h!=0)return!1;for(var A=0;A<O.g.length;A++)if(O.g[A]!=0)return!1;return!0}function ie(O){return O.h==-1}r.l=function(O){return O=de(this,O),ie(O)?-1:q(O)?0:1};function Y(O){for(var A=O.g.length,D=[],C=0;C<A;C++)D[C]=~O.g[C];return new h(D,~O.h).add(w)}r.abs=function(){return ie(this)?Y(this):this},r.add=function(O){for(var A=Math.max(this.g.length,O.g.length),D=[],C=0,P=0;P<=A;P++){var x=C+(this.i(P)&65535)+(O.i(P)&65535),b=(x>>>16)+(this.i(P)>>>16)+(O.i(P)>>>16);C=b>>>16,x&=65535,b&=65535,D[P]=b<<16|x}return new h(D,D[D.length-1]&-2147483648?-1:0)};function de(O,A){return O.add(Y(A))}r.j=function(O){if(q(this)||q(O))return R;if(ie(this))return ie(O)?Y(this).j(Y(O)):Y(Y(this).j(O));if(ie(O))return Y(this.j(Y(O)));if(0>this.l(L)&&0>O.l(L))return y(this.m()*O.m());for(var A=this.g.length+O.g.length,D=[],C=0;C<2*A;C++)D[C]=0;for(C=0;C<this.g.length;C++)for(var P=0;P<O.g.length;P++){var x=this.i(C)>>>16,b=this.i(C)&65535,Z=O.i(P)>>>16,te=O.i(P)&65535;D[2*C+2*P]+=b*te,ge(D,2*C+2*P),D[2*C+2*P+1]+=x*te,ge(D,2*C+2*P+1),D[2*C+2*P+1]+=b*Z,ge(D,2*C+2*P+1),D[2*C+2*P+2]+=x*Z,ge(D,2*C+2*P+2)}for(C=0;C<A;C++)D[C]=D[2*C+1]<<16|D[2*C];for(C=A;C<2*A;C++)D[C]=0;return new h(D,0)};function ge(O,A){for(;(O[A]&65535)!=O[A];)O[A+1]+=O[A]>>>16,O[A]&=65535,A++}function ce(O,A){this.g=O,this.h=A}function ye(O,A){if(q(A))throw Error("division by zero");if(q(O))return new ce(R,R);if(ie(O))return A=ye(Y(O),A),new ce(Y(A.g),Y(A.h));if(ie(A))return A=ye(O,Y(A)),new ce(Y(A.g),A.h);if(30<O.g.length){if(ie(O)||ie(A))throw Error("slowDivide_ only works with positive integers.");for(var D=w,C=A;0>=C.l(O);)D=re(D),C=re(C);var P=fe(D,1),x=fe(C,1);for(C=fe(C,2),D=fe(D,2);!q(C);){var b=x.add(C);0>=b.l(O)&&(P=P.add(D),x=b),C=fe(C,1),D=fe(D,1)}return A=de(O,P.j(A)),new ce(P,A)}for(P=R;0<=O.l(A);){for(D=Math.max(1,Math.floor(O.m()/A.m())),C=Math.ceil(Math.log(D)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),x=y(D),b=x.j(A);ie(b)||0<b.l(O);)D-=C,x=y(D),b=x.j(A);q(x)&&(x=w),P=P.add(x),O=de(O,b)}return new ce(P,O)}r.A=function(O){return ye(this,O).h},r.and=function(O){for(var A=Math.max(this.g.length,O.g.length),D=[],C=0;C<A;C++)D[C]=this.i(C)&O.i(C);return new h(D,this.h&O.h)},r.or=function(O){for(var A=Math.max(this.g.length,O.g.length),D=[],C=0;C<A;C++)D[C]=this.i(C)|O.i(C);return new h(D,this.h|O.h)},r.xor=function(O){for(var A=Math.max(this.g.length,O.g.length),D=[],C=0;C<A;C++)D[C]=this.i(C)^O.i(C);return new h(D,this.h^O.h)};function re(O){for(var A=O.g.length+1,D=[],C=0;C<A;C++)D[C]=O.i(C)<<1|O.i(C-1)>>>31;return new h(D,O.h)}function fe(O,A){var D=A>>5;A%=32;for(var C=O.g.length-D,P=[],x=0;x<C;x++)P[x]=0<A?O.i(x+D)>>>A|O.i(x+D+1)<<32-A:O.i(x+D);return new h(P,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,hS=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,ss=h}).apply(typeof ST<"u"?ST:typeof self<"u"?self:typeof window<"u"?window:{});var gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fS,au,dS,Ph,zm,pS,mS,gS;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof gh=="object"&&gh];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(c,g){if(g)e:{var v=s;c=c.split(".");for(var S=0;S<c.length-1;S++){var U=c[S];if(!(U in v))break e;v=v[U]}c=c[c.length-1],S=v[c],g=g(S),g!=S&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var v=0,S=!1,U={next:function(){if(!S&&v<c.length){var K=v++;return{value:g(K,c[K]),done:!1}}return S=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,v){return c.call.apply(c.bind,arguments)}function R(c,g,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,S),c.apply(g,U)}}return function(){return c.apply(g,arguments)}}function w(c,g,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:R,w.apply(null,arguments)}function L(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function q(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,U,K){for(var oe=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)oe[Ue-2]=arguments[Ue];return g.prototype[U].apply(S,oe)}}function ie(c){const g=c.length;if(0<g){const v=Array(g);for(let S=0;S<g;S++)v[S]=c[S];return v}return[]}function Y(c,g){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(m(S)){const U=c.length||0,K=S.length||0;c.length=U+K;for(let oe=0;oe<K;oe++)c[U+oe]=S[oe]}else c.push(S)}}class de{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ge(c){return/^[\s\xa0]*$/.test(c)}function ce(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function ye(c){return ye[" "](c),c}ye[" "]=function(){};var re=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function fe(c,g,v){for(const S in c)g.call(v,c[S],S,c)}function O(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function A(c){const g={};for(const v in c)g[v]=c[v];return g}const D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,g){let v,S;for(let U=1;U<arguments.length;U++){S=arguments[U];for(v in S)c[v]=S[v];for(let K=0;K<D.length;K++)v=D[K],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function P(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function x(c){p.setTimeout(()=>{throw c},0)}function b(){var c=le;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Z{constructor(){this.h=this.g=null}add(g,v){const S=te.get();S.set(g,v),this.h?this.h.next=S:this.g=S,this.h=S}}var te=new de(()=>new j,c=>c.reset());class j{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let $,ae=!1,le=new Z,I=()=>{const c=p.Promise.resolve(void 0);$=()=>{c.then(M)}};var M=()=>{for(var c;c=b();){try{c.h.call(c.g)}catch(v){x(v)}var g=te;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ae=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};p.addEventListener("test",v,g),p.removeEventListener("test",v,g)}catch{}return c}();function Ce(c,g){if(ne.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(re){e:{try{ye(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Se[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ce.aa.h.call(this)}}q(Ce,ne);var Se={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ft="closure_listenable_"+(1e6*Math.random()|0),Ge=0;function lr(c,g,v,S,U){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!S,this.ha=U,this.key=++Ge,this.da=this.fa=!1}function Ti(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Mr(c){this.src=c,this.g={},this.h=0}Mr.prototype.add=function(c,g,v,S,U){var K=c.toString();c=this.g[K],c||(c=this.g[K]=[],this.h++);var oe=bs(c,g,S,U);return-1<oe?(g=c[oe],v||(g.fa=!1)):(g=new lr(g,this.src,K,!!S,U),g.fa=v,c.push(g)),g};function Ts(c,g){var v=g.type;if(v in c.g){var S=c.g[v],U=Array.prototype.indexOf.call(S,g,void 0),K;(K=0<=U)&&Array.prototype.splice.call(S,U,1),K&&(Ti(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function bs(c,g,v,S){for(var U=0;U<c.length;++U){var K=c[U];if(!K.da&&K.listener==g&&K.capture==!!v&&K.ha==S)return U}return-1}var Ss="closure_lm_"+(1e6*Math.random()|0),Go={};function Gu(c,g,v,S,U){if(Array.isArray(g)){for(var K=0;K<g.length;K++)Gu(c,g[K],v,S,U);return null}return v=Ku(v),c&&c[ft]?c.K(g,v,y(S)?!!S.capture:!1,U):xn(c,g,v,!1,S,U)}function xn(c,g,v,S,U,K){if(!g)throw Error("Invalid event type");var oe=y(U)?!!U.capture:!!U,Ue=Aa(c);if(Ue||(c[Ss]=Ue=new Mr(c)),v=Ue.add(g,v,S,oe,K),v.proxy)return v;if(S=Zf(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)me||(U=oe),U===void 0&&(U=!1),c.addEventListener(g.toString(),S,U);else if(c.attachEvent)c.attachEvent(As(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Zf(){function c(v){return g.call(c.src,c.listener,v)}const g=Jf;return c}function Ko(c,g,v,S,U){if(Array.isArray(g))for(var K=0;K<g.length;K++)Ko(c,g[K],v,S,U);else S=y(S)?!!S.capture:!!S,v=Ku(v),c&&c[ft]?(c=c.i,g=String(g).toString(),g in c.g&&(K=c.g[g],v=bs(K,v,S,U),-1<v&&(Ti(K[v]),Array.prototype.splice.call(K,v,1),K.length==0&&(delete c.g[g],c.h--)))):c&&(c=Aa(c))&&(g=c.g[g.toString()],c=-1,g&&(c=bs(g,v,S,U)),(v=-1<c?g[c]:null)&&Sa(v))}function Sa(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ft])Ts(g.i,c);else{var v=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(v,S,c.capture):g.detachEvent?g.detachEvent(As(v),S):g.addListener&&g.removeListener&&g.removeListener(S),(v=Aa(g))?(Ts(v,c),v.h==0&&(v.src=null,g[Ss]=null)):Ti(c)}}}function As(c){return c in Go?Go[c]:Go[c]="on"+c}function Jf(c,g){if(c.da)c=!0;else{g=new Ce(g,this);var v=c.listener,S=c.ha||c.src;c.fa&&Sa(c),c=v.call(S,g)}return c}function Aa(c){return c=c[Ss],c instanceof Mr?c:null}var Yo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ku(c){return typeof c=="function"?c:(c[Yo]||(c[Yo]=function(g){return c.handleEvent(g)}),c[Yo])}function dt(){se.call(this),this.i=new Mr(this),this.M=this,this.F=null}q(dt,se),dt.prototype[ft]=!0,dt.prototype.removeEventListener=function(c,g,v,S){Ko(this,c,g,v,S)};function $e(c,g){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new ne(g,c);else if(g instanceof ne)g.target=g.target||c;else{var U=g;g=new ne(S,c),C(g,U)}if(U=!0,v)for(var K=v.length-1;0<=K;K--){var oe=g.g=v[K];U=En(oe,S,!0,g)&&U}if(oe=g.g=c,U=En(oe,S,!0,g)&&U,U=En(oe,S,!1,g)&&U,v)for(K=0;K<v.length;K++)oe=g.g=v[K],U=En(oe,S,!1,g)&&U}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],S=0;S<v.length;S++)Ti(v[S]);delete c.g[g],c.h--}}this.F=null},dt.prototype.K=function(c,g,v,S){return this.i.add(String(c),g,!1,v,S)},dt.prototype.L=function(c,g,v,S){return this.i.add(String(c),g,!0,v,S)};function En(c,g,v,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,K=0;K<g.length;++K){var oe=g[K];if(oe&&!oe.da&&oe.capture==v){var Ue=oe.listener,Nt=oe.ha||oe.src;oe.fa&&Ts(c.i,oe),U=Ue.call(Nt,S)!==!1&&U}}return U&&!S.defaultPrevented}function Wt(c,g,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:p.setTimeout(c,g||0)}function Yu(c){c.g=Wt(()=>{c.g=null,c.i&&(c.i=!1,Yu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ed extends se{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Yu(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(c){se.call(this),this.h=c,this.g={}}q(ws,se);var Rs=[];function Is(c){fe(c.g,function(g,v){this.g.hasOwnProperty(v)&&Sa(g)},c),c.g={}}ws.prototype.N=function(){ws.aa.N.call(this),Is(this)},ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xn=p.JSON.stringify,wa=p.JSON.parse,Cs=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function $o(){}$o.prototype.h=null;function Qo(c){return c.h||(c.h=c.i())}function Xo(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lr(){ne.call(this,"d")}q(Lr,ne);function Wo(){ne.call(this,"c")}q(Wo,ne);var ur={},Zo=null;function bi(){return Zo=Zo||new dt}ur.La="serverreachability";function Ra(c){ne.call(this,ur.La,c)}q(Ra,ne);function Si(c){const g=bi();$e(g,new Ra(g))}ur.STAT_EVENT="statevent";function $u(c,g){ne.call(this,ur.STAT_EVENT,c),this.stat=g}q($u,ne);function at(c){const g=bi();$e(g,new $u(g,c))}ur.Ma="timingevent";function Ot(c,g){ne.call(this,ur.Ma,c),this.size=g}q(Ot,ne);function St(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},g)}function Pn(){this.g=!0}Pn.prototype.xa=function(){this.g=!1};function Jo(c,g,v,S,U,K){c.info(function(){if(c.g)if(K)for(var oe="",Ue=K.split("&"),Nt=0;Nt<Ue.length;Nt++){var je=Ue[Nt].split("=");if(1<je.length){var Ut=je[0];je=je[1];var xt=Ut.split("_");oe=2<=xt.length&&xt[1]=="type"?oe+(Ut+"="+je+"&"):oe+(Ut+"=redacted&")}}else oe=null;else oe=K;return"XMLHTTP REQ ("+S+") [attempt "+U+"]: "+g+`
`+v+`
`+oe})}function td(c,g,v,S,U,K,oe){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+U+"]: "+g+`
`+v+`
`+K+" "+oe})}function Ai(c,g,v,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ds(c,v)+(S?" "+S:"")})}function Qu(c,g){c.info(function(){return"TIMEOUT: "+g})}Pn.prototype.info=function(){};function Ds(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var U=S[1];if(Array.isArray(U)&&!(1>U.length)){var K=U[0];if(K!="noop"&&K!="stop"&&K!="close")for(var oe=1;oe<U.length;oe++)U[oe]=""}}}}return Xn(v)}catch{return g}}var wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ur={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cr;function hr(){}q(hr,$o),hr.prototype.g=function(){return new XMLHttpRequest},hr.prototype.i=function(){return{}},cr=new hr;function ln(c,g,v,S){this.j=c,this.i=g,this.l=v,this.R=S||1,this.U=new ws(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gt}function gt(){this.i=null,this.g="",this.h=!1}var el={},Ia={};function Wn(c,g,v){c.L=1,c.v=ks(Tn(g)),c.m=v,c.P=!0,jr(c,null)}function jr(c,g){c.F=Date.now(),Os(c),c.A=Tn(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),al(v.i,"t",S),c.C=0,v=c.j.J,c.h=new gt,c.g=hc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new ed(w(c.Y,c,c.g),c.O)),g=c.U,v=c.g,S=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Rs[0]=U.toString()),U=Rs);for(var K=0;K<U.length;K++){var oe=Gu(v,U[K],S||g.handleEvent,!1,g.h||g);if(!oe)break;g.g[oe.key]=oe}g=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Si(),Jo(c.i,c.u,c.A,c.l,c.R,c.m)}ln.prototype.ca=function(c){c=c.target;const g=this.M;g&&Ln(c)==3?g.j():this.Y(c)},ln.prototype.Y=function(c){try{if(c==this.g)e:{const xt=Ln(this.g);var g=this.g.Ba();const Yr=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||rc(this.g)))){this.J||xt!=4||g==7||(g==8||0>=Yr?Si(3):Si(2)),Ri(this);var v=this.g.Z();this.X=v;t:if(Xu(this)){var S=rc(this.g);c="";var U=S.length,K=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),fr(this);var oe="";break t}this.h.i=new p.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!(K&&g==U-1)});S.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,td(this.i,this.u,this.A,this.l,this.R,xt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Nt=this.g;if((Ue=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ge(Ue)){var je=Ue;break t}}je=null}if(v=je)Ai(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ns(this,v);else{this.o=!1,this.s=3,at(12),qt(this),fr(this);break e}}if(this.P){v=!0;let Ht;for(;!this.J&&this.C<oe.length;)if(Ht=Wu(this,oe),Ht==Ia){xt==4&&(this.s=4,at(14),v=!1),Ai(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==el){this.s=4,at(15),Ai(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Ai(this.i,this.l,Ht,null),Ns(this,Ht);if(Xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||oe.length!=0||this.h.h||(this.s=1,at(16),v=!1),this.o=this.o&&v,!v)Ai(this.i,this.l,oe,"[Invalid Chunked Response]"),qt(this),fr(this);else if(0<oe.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Fs(Ut),Ut.M=!0,at(11))}}else Ai(this.i,this.l,oe,null),Ns(this,oe);xt==4&&qt(this),this.o&&!this.J&&(xt==4?lc(this.j,this):(this.o=!1,Os(this)))}else ad(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),qt(this),fr(this)}}}catch{}finally{}};function Xu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Wu(c,g){var v=c.C,S=g.indexOf(`
`,v);return S==-1?Ia:(v=Number(g.substring(v,S)),isNaN(v)?el:(S+=1,S+v>g.length?Ia:(g=g.slice(S,S+v),c.C=S+v,g)))}ln.prototype.cancel=function(){this.J=!0,qt(this)};function Os(c){c.S=Date.now()+c.I,Zu(c,c.I)}function Zu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=St(w(c.ba,c),g)}function Ri(c){c.B&&(p.clearTimeout(c.B),c.B=null)}ln.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Qu(this.i,this.A),this.L!=2&&(Si(),at(17)),qt(this),this.s=2,fr(this)):Zu(this,this.S-c)};function fr(c){c.j.G==0||c.J||lc(c.j,c)}function qt(c){Ri(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Is(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Ns(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||tl(v.h,c))){if(!c.K&&tl(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var U=S;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ja(v),La(v);else break e;hl(v),at(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=St(w(v.Za,v),6e3));if(1>=Da(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Kr(v,11)}else if((c.K||v.g==c)&&ja(v),!ge(g))for(U=v.Da.g.parse(g),g=0;g<U.length;g++){let je=U[g];if(v.T=je[0],je=je[1],v.G==2)if(je[0]=="c"){v.K=je[1],v.ia=je[2];const Ut=je[3];Ut!=null&&(v.la=Ut,v.j.info("VER="+v.la));const xt=je[4];xt!=null&&(v.Aa=xt,v.j.info("SVER="+v.Aa));const Yr=je[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(S=1.5*Yr,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const Ht=c.g;if(Ht){const _r=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_r){var K=S.h;K.g||_r.indexOf("spdy")==-1&&_r.indexOf("quic")==-1&&_r.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Oa(K,K.h),K.h=null))}if(S.D){const dl=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;dl&&(S.ya=dl,We(S.I,S.D,dl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var oe=c;if(S.qa=cc(S,S.J?S.ia:null,S.W),oe.K){un(S.h,oe);var Ue=oe,Nt=S.L;Nt&&(Ue.I=Nt),Ue.B&&(Ri(Ue),Os(Ue)),S.g=oe}else ac(S);0<v.i.length&&Ua(v)}else je[0]!="stop"&&je[0]!="close"||Kr(v,7);else v.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Kr(v,7):ul(v):je[0]!="noop"&&v.l&&v.l.ta(je),v.v=0)}}Si(4)}catch{}}var Ju=class{constructor(c,g){this.g=c,this.map=g}};function zr(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ca(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Da(c){return c.h?1:c.g?c.g.size:0}function tl(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Oa(c,g){c.g?c.g.add(g):c.h=g}function un(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}zr.prototype.cancel=function(){if(this.i=nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function nl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return ie(c.i)}function nd(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var g=[],v=c.length,S=0;S<v;S++)g.push(c[S]);return g}g=[],v=0;for(S in c)g[v++]=c[S];return g}function Na(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const S in c)g[v++]=S;return g}}}function rl(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Na(c),S=nd(c),U=S.length,K=0;K<U;K++)g.call(void 0,S[K],v&&v[K],c)}var xs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rd(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),U=null;if(0<=S){var K=c[v].substring(0,S);U=c[v].substring(S+1)}else K=c[v];g(K,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function At(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof At){this.h=c.h,Ps(this,c.j),this.o=c.o,this.g=c.g,Ii(this,c.s),this.l=c.l;var g=c.i,v=new Fr;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Br(this,v),this.m=c.m}else c&&(g=String(c).match(xs))?(this.h=!1,Ps(this,g[1]||"",!0),this.o=kn(g[2]||""),this.g=kn(g[3]||"",!0),Ii(this,g[4]),this.l=kn(g[5]||"",!0),Br(this,g[6]||"",!0),this.m=kn(g[7]||"")):(this.h=!1,this.i=new Fr(null,this.h))}At.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Ms(g,il,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ms(g,il,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Ms(v,v.charAt(0)=="/"?id:sl,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Ms(v,xa)),c.join("")};function Tn(c){return new At(c)}function Ps(c,g,v){c.j=v?kn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ii(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Br(c,g,v){g instanceof Fr?(c.i=g,tc(c.i,c.h)):(v||(g=Ms(g,sd)),c.i=new Fr(g,c.h))}function We(c,g,v){c.i.set(g,v)}function ks(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function kn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ms(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,ec),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ec(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var il=/[#\/\?@]/g,sl=/[#\?:]/g,id=/[#\?]/g,sd=/[#\?@]/g,xa=/#/g;function Fr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Mn(c){c.g||(c.g=new Map,c.h=0,c.i&&rd(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=Fr.prototype,r.add=function(c,g){Mn(this),this.i=null,c=dr(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function qr(c,g){Mn(c),g=dr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Hr(c,g){return Mn(c),g=dr(c,g),c.g.has(g)}r.forEach=function(c,g){Mn(this),this.g.forEach(function(v,S){v.forEach(function(U){c.call(g,U,S,this)},this)},this)},r.na=function(){Mn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let S=0;S<g.length;S++){const U=c[S];for(let K=0;K<U.length;K++)v.push(g[S])}return v},r.V=function(c){Mn(this);let g=[];if(typeof c=="string")Hr(this,c)&&(g=g.concat(this.g.get(dr(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},r.set=function(c,g){return Mn(this),this.i=null,c=dr(this,c),Hr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function al(c,g,v){qr(c,g),0<v.length&&(c.i=null,c.g.set(dr(c,g),ie(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var S=g[v];const K=encodeURIComponent(String(S)),oe=this.V(S);for(S=0;S<oe.length;S++){var U=K;oe[S]!==""&&(U+="="+encodeURIComponent(String(oe[S]))),c.push(U)}}return this.i=c.join("&")};function dr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function tc(c,g){g&&!c.j&&(Mn(c),c.i=null,c.g.forEach(function(v,S){var U=S.toLowerCase();S!=U&&(qr(this,S),al(this,U,v))},c)),c.j=g}function Vs(c,g){const v=new Pn;if(p.Image){const S=new Image;S.onload=L(Vn,v,"TestLoadImage: loaded",!0,g,S),S.onerror=L(Vn,v,"TestLoadImage: error",!1,g,S),S.onabort=L(Vn,v,"TestLoadImage: abort",!1,g,S),S.ontimeout=L(Vn,v,"TestLoadImage: timeout",!1,g,S),p.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function Zn(c,g){const v=new Pn,S=new AbortController,U=setTimeout(()=>{S.abort(),Vn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(K=>{clearTimeout(U),K.ok?Vn(v,"TestPingServer: ok",!0,g):Vn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),Vn(v,"TestPingServer: error",!1,g)})}function Vn(c,g,v,S,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),S(v)}catch{}}function Ls(){this.g=new Cs}function pr(c,g,v){const S=v||"";try{rl(c,function(U,K){let oe=U;y(U)&&(oe=Xn(U)),g.push(S+K+"="+encodeURIComponent(oe))})}catch(U){throw g.push(S+"type="+encodeURIComponent("_badmap")),U}}function Ci(c){this.l=c.Ub||null,this.j=c.eb||!1}q(Ci,$o),Ci.prototype.g=function(){return new Gr(this.l,this.j)},Ci.prototype.i=function(c){return function(){return c}}({});function Gr(c,g){dt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Gr,dt),r=Gr.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,gr(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||p).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,gr(this)),this.g&&(this.readyState=3,gr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ol(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function ol(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?mr(this):gr(this),this.readyState==3&&ol(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,mr(this))},r.Qa=function(c){this.g&&(this.response=c,mr(this))},r.ga=function(){this.g&&mr(this)};function mr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,gr(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function gr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ll(c){let g="";return fe(c,function(v,S){g+=S,g+=":",g+=v,g+=`\r
`}),g}function Lt(c,g,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=ll(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):We(c,g,v))}function Ke(c){dt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ke,dt);var Pa=/^https?$/i,Us=["POST","PUT"];r=Ke.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cr.g(),this.v=this.o?Qo(this.o):Qo(cr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(K){nc(this,K);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var U in S)v.set(U,S[U]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const K of S.keys())v.set(K,S.get(K));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(K=>K.toLowerCase()=="content-type"),U=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Us,g,void 0))||S||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,oe]of v)this.g.setRequestHeader(K,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{js(this),this.u=!0,this.g.send(c),this.u=!1}catch(K){nc(this,K)}};function nc(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,ka(c),yr(c)}function ka(c){c.A||(c.A=!0,$e(c,"complete"),$e(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,$e(this,"complete"),$e(this,"abort"),yr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),Ke.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ma(this):this.bb())},r.bb=function(){Ma(this)};function Ma(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Ln(c)!=4||c.Z()!=2)){if(c.u&&Ln(c)==4)Wt(c.Ea,0,c);else if($e(c,"readystatechange"),Ln(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var S;if(S=oe===0){var U=String(c.D).match(xs)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),S=!Pa.test(U?U.toLowerCase():"")}v=S}if(v)$e(c,"complete"),$e(c,"success");else{c.m=6;try{var K=2<Ln(c)?c.g.statusText:""}catch{K=""}c.l=K+" ["+c.Z()+"]",ka(c)}}finally{yr(c)}}}}function yr(c,g){if(c.g){js(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||$e(c,"ready");try{v.onreadystatechange=S}catch{}}}function js(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Ln(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),wa(g)}};function rc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ad(c){const g={};c=(c.g&&2<=Ln(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(ge(c[S]))continue;var v=P(c[S]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const K=g[U]||[];g[U]=K,K.push(v)}O(g,function(S){return S.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Va(c){this.Aa=0,this.i=[],this.j=new Pn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zs("baseRetryDelayMs",5e3,c),this.cb=zs("retryDelaySeedMs",1e4,c),this.Wa=zs("forwardChannelMaxRetries",2,c),this.wa=zs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new zr(c&&c.concurrentRequestLimit),this.Da=new Ls,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Va.prototype,r.la=8,r.G=1,r.connect=function(c,g,v,S){at(0),this.W=c,this.H=g||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=cc(this,null,this.W),Ua(this)};function ul(c){if(ic(c),c.G==3){var g=c.U++,v=Tn(c.I);if(We(v,"SID",c.K),We(v,"RID",g),We(v,"TYPE","terminate"),Bs(c,v),g=new ln(c,c.j,g),g.L=2,g.v=ks(Tn(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=g.v,v=!0),v||(g.g=hc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Os(g)}uc(c)}function La(c){c.g&&(Fs(c),c.g.cancel(),c.g=null)}function ic(c){La(c),c.u&&(p.clearTimeout(c.u),c.u=null),ja(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Ua(c){if(!Ca(c.h)&&!c.s){c.s=!0;var g=c.Ga;$||I(),ae||($(),ae=!0),le.add(g,c),c.B=0}}function od(c,g){return Da(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=St(w(c.Ga,c,g),fl(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new ln(this,this.j,c);let K=this.o;if(this.S&&(K?(K=A(K),C(K,this.S)):K=this.S),this.m!==null||this.O||(U.H=K,K=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=sc(this,U,g),v=Tn(this.I),We(v,"RID",c),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Bs(this,v),K&&(this.O?g="headers="+encodeURIComponent(String(ll(K)))+"&"+g:this.m&&Lt(v,this.m,K)),Oa(this.h,U),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",g),We(v,"SID","null"),U.T=!0,Wn(U,v,null)):Wn(U,v,g),this.G=2}}else this.G==3&&(c?cl(this,c):this.i.length==0||Ca(this.h)||cl(this))};function cl(c,g){var v;g?v=g.l:v=c.U++;const S=Tn(c.I);We(S,"SID",c.K),We(S,"RID",v),We(S,"AID",c.T),Bs(c,S),c.m&&c.o&&Lt(S,c.m,c.o),v=new ln(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=sc(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Oa(c.h,v),Wn(v,S,g)}function Bs(c,g){c.H&&fe(c.H,function(v,S){We(g,S,v)}),c.l&&rl({},function(v,S){We(g,S,v)})}function sc(c,g,v){v=Math.min(c.i.length,v);var S=c.l?w(c.l.Na,c.l,c):null;e:{var U=c.i;let K=-1;for(;;){const oe=["count="+v];K==-1?0<v?(K=U[0].g,oe.push("ofs="+K)):K=0:oe.push("ofs="+K);let Ue=!0;for(let Nt=0;Nt<v;Nt++){let je=U[Nt].g;const Ut=U[Nt].map;if(je-=K,0>je)K=Math.max(0,U[Nt].g-100),Ue=!1;else try{pr(Ut,oe,"req"+je+"_")}catch{S&&S(Ut)}}if(Ue){S=oe.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,S}function ac(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;$||I(),ae||($(),ae=!0),le.add(g,c),c.v=0}}function hl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=St(w(c.Fa,c),fl(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,oc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=St(w(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),La(this),oc(this))};function Fs(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function oc(c){c.g=new ln(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Tn(c.qa);We(g,"RID","rpc"),We(g,"SID",c.K),We(g,"AID",c.T),We(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(g,"TO",c.ja),We(g,"TYPE","xmlhttp"),Bs(c,g),c.m&&c.o&&Lt(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=ks(Tn(g)),v.m=null,v.P=!0,jr(v,c)}r.Za=function(){this.C!=null&&(this.C=null,La(this),hl(this),at(19))};function ja(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function lc(c,g){var v=null;if(c.g==g){ja(c),Fs(c),c.g=null;var S=2}else if(tl(c.h,g))v=g.D,un(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var U=c.B;S=bi(),$e(S,new Ot(S,v)),Ua(c)}else ac(c);else if(U=g.s,U==3||U==0&&0<g.X||!(S==1&&od(c,g)||S==2&&hl(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),U){case 1:Kr(c,5);break;case 4:Kr(c,10);break;case 3:Kr(c,6);break;default:Kr(c,2)}}}function fl(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function Kr(c,g){if(c.j.info("Error code "+g),g==2){var v=w(c.fb,c),S=c.Xa;const U=!S;S=new At(S||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Ps(S,"https"),ks(S),U?Vs(S.toString(),v):Zn(S.toString(),v)}else at(2);c.G=0,c.l&&c.l.sa(g),uc(c),ic(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function uc(c){if(c.G=0,c.ka=[],c.l){const g=nl(c.h);(g.length!=0||c.i.length!=0)&&(Y(c.ka,g),Y(c.ka,c.i),c.h.i.length=0,ie(c.i),c.i.length=0),c.l.ra()}}function cc(c,g,v){var S=v instanceof At?Tn(v):new At(v);if(S.g!="")g&&(S.g=g+"."+S.g),Ii(S,S.s);else{var U=p.location;S=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var K=new At(null);S&&Ps(K,S),g&&(K.g=g),U&&Ii(K,U),v&&(K.l=v),S=K}return v=c.D,g=c.ya,v&&g&&We(S,v,g),We(S,"VER",c.la),Bs(c,S),S}function hc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Ke(new Ci({eb:v})):new Ke(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fc(){}r=fc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function za(){}za.prototype.g=function(c,g){return new cn(c,g)};function cn(c,g){dt.call(this),this.g=new Va(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ge(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ge(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new vr(this)}q(cn,dt),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){ul(this.g)},cn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Xn(c),c=v);g.i.push(new Ju(g.Ya++,c)),g.G==3&&Ua(g)},cn.prototype.N=function(){this.g.l=null,delete this.j,ul(this.g),delete this.g,cn.aa.N.call(this)};function dc(c){Lr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}q(dc,Lr);function pc(){Wo.call(this),this.status=1}q(pc,Wo);function vr(c){this.g=c}q(vr,fc),vr.prototype.ua=function(){$e(this.g,"a")},vr.prototype.ta=function(c){$e(this.g,new dc(c))},vr.prototype.sa=function(c){$e(this.g,new pc)},vr.prototype.ra=function(){$e(this.g,"b")},za.prototype.createWebChannel=za.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,gS=function(){return new za},mS=function(){return bi()},pS=ur,zm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wi.NO_ERROR=0,wi.TIMEOUT=8,wi.HTTP_ERROR=6,Ph=wi,Ur.COMPLETE="complete",dS=Ur,Xo.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",dt.prototype.listen=dt.prototype.K,au=Xo,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,fS=Ke}).apply(typeof gh<"u"?gh:typeof self<"u"?self:typeof window<"u"?window:{});const AT="@firebase/firestore",wT="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new wf("@firebase/firestore");function go(){return da.logLevel}function he(r,...e){if(da.logLevel<=Me.DEBUG){const t=e.map(Og);da.debug(`Firestore (${Uo}): ${r}`,...t)}}function mi(r,...e){if(da.logLevel<=Me.ERROR){const t=e.map(Og);da.error(`Firestore (${Uo}): ${r}`,...t)}}function Co(r,...e){if(da.logLevel<=Me.WARN){const t=e.map(Og);da.warn(`Firestore (${Uo}): ${r}`,...t)}}function Og(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,yS(r,s,t)}function yS(r,e,t){let s=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw mi(s),new Error(s)}function Ye(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||yS(e,o,s)}function De(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tn.UNAUTHENTICATED))}shutdown(){}}class JO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eN{constructor(e){this.t=e,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new as;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new as,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new as)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string",31837,{l:s}),new vS(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new tn(e)}}class tN{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nN{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new tN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(tn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0,3512);const s=u=>{u.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,he("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new RT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new RT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=iN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ve(r,e){return r<e?-1:r>e?1:0}function Bm(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return hm(o)===hm(u)?Ve(o,u):hm(o)?1:-1}return Ve(r.length,e.length)}const sN=55296,aN=57343;function hm(r){const e=r.charCodeAt(0);return e>=sN&&e<=aN}function Do(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="__name__";class wr{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return wr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=wr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ve(e.length,t.length)}static compareSegments(e,t){const s=wr.isNumericId(e),o=wr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?wr.extractNumericId(e).compare(wr.extractNumericId(t)):Bm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ss.fromString(e.substring(4,e.length-2))}}class it extends wr{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const oN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends wr{construct(e,t,s){return new Qt(e,t,s)}static isValidIdentifier(e){return oN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===IT}static keyField(){return new Qt([IT])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ue(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ue(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ue(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new ue(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(it.fromString(e))}static fromName(e){return new Ee(it.fromString(e).popFirst(5))}static empty(){return new Ee(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new it(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(r,e,t){if(!t)throw new ue(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function lN(r,e,t,s){if(e===!0&&s===!0)throw new ue(W.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function CT(r){if(!Ee.isDocumentKey(r))throw new ue(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function DT(r){if(Ee.isDocumentKey(r))throw new ue(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ES(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Df(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we(12329,{type:typeof r})}function fi(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ue(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Df(r);throw new ue(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Lu(r,e){if(!ES(r))throw new ue(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ue(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=-62135596800,NT=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*NT);return new st(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<OT)throw new ue(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/NT}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lu(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-OT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:Dt("string",st._jsonSchemaVersion),seconds:Dt("number"),nanoseconds:Dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new st(0,0))}static max(){return new Ie(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=-1;function uN(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(s===1e9?new st(t+1,0):new st(t,s));return new ls(o,Ee.empty(),e)}function cN(r){return new ls(r.readTime,r.key,Su)}class ls{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ls(Ie.min(),Ee.empty(),Su)}static max(){return new ls(Ie.max(),Ee.empty(),Su)}}function hN(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(r.documentKey,e.documentKey),t!==0?t:Ve(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==fN)throw r;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,s)=>{t(e)})}static reject(e){return new ee((t,s)=>{s(e)})}static waitFor(e){return new ee((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},m=>s(m))}),h=!0,u===o&&t()})}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next(o=>o?ee.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new ee((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const y=m;t(e[y]).next(E=>{h[y]=E,++p,p===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new ee((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function pN(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Of.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=-1;function Nf(r){return r==null}function Zh(r){return r===0&&1/r==-1/0}function mN(r){return typeof r=="number"&&Number.isInteger(r)&&!Zh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="";function gN(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=xT(e)),e=yN(r.get(t),e);return xT(e)}function yN(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case TS:t+="";break;default:t+=u}}return t}function xT(r){return r+TS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function _s(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function bS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.comparator=e,this.root=t||$t.EMPTY}insert(e,t){return new ht(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$t.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yh(this.root,e,this.comparator,!1)}getReverseIterator(){return new yh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yh(this.root,e,this.comparator,!0)}}class yh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $t{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??$t.RED,this.left=o??$t.EMPTY,this.right=u??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new $t(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return $t.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new $t(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kT(this.data.getIterator())}getIteratorFrom(e){return new kT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Mt(this.comparator);return t.data=e,t}}class kT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new Nn([])}unionWith(e){let t=new Mt(Qt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new SS("Invalid base64 string: "+u):u}}(e);return new Xt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const vN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function us(r){if(Ye(!!r,39018),typeof r=="string"){let e=0;const t=vN.exec(r);if(Ye(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_t(r.seconds),nanos:_t(r.nanos)}}function _t(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function cs(r){return typeof r=="string"?Xt.fromBase64String(r):Xt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="server_timestamp",wS="__type__",RS="__previous_value__",IS="__local_write_time__";function Pg(r){return(r?.mapValue?.fields||{})[wS]?.stringValue===AS}function xf(r){const e=r.mapValue.fields[RS];return Pg(e)?xf(e):e}function Au(r){const e=us(r.mapValue.fields[IS].timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t,s,o,u,h,p,m,y,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=y,this.isUsingEmulator=E}}const Jh="(default)";class wu{constructor(e,t){this.projectId=e,this.database=t||Jh}static empty(){return new wu("","")}get isDefaultDatabase(){return this.database===Jh}isEqual(e){return e instanceof wu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="__type__",EN="__max__",vh={mapValue:{}},DS="__vector__",ef="value";function hs(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Pg(r)?4:bN(r)?9007199254740991:TN(r)?10:11:we(28295,{value:r})}function xr(r,e){if(r===e)return!0;const t=hs(r);if(t!==hs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Au(r).isEqual(Au(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=us(o.timestampValue),p=us(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return cs(o.bytesValue).isEqual(cs(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return _t(o.geoPointValue.latitude)===_t(u.geoPointValue.latitude)&&_t(o.geoPointValue.longitude)===_t(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return _t(o.integerValue)===_t(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=_t(o.doubleValue),p=_t(u.doubleValue);return h===p?Zh(h)===Zh(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return Do(r.arrayValue.values||[],e.arrayValue.values||[],xr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(PT(h)!==PT(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!xr(h[m],p[m])))return!1;return!0}(r,e);default:return we(52216,{left:r})}}function Ru(r,e){return(r.values||[]).find(t=>xr(t,e))!==void 0}function Oo(r,e){if(r===e)return 0;const t=hs(r),s=hs(e);if(t!==s)return Ve(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=_t(u.integerValue||u.doubleValue),m=_t(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,e);case 3:return MT(r.timestampValue,e.timestampValue);case 4:return MT(Au(r),Au(e));case 5:return Bm(r.stringValue,e.stringValue);case 6:return function(u,h){const p=cs(u),m=cs(h);return p.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let y=0;y<p.length&&y<m.length;y++){const E=Ve(p[y],m[y]);if(E!==0)return E}return Ve(p.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Ve(_t(u.latitude),_t(h.latitude));return p!==0?p:Ve(_t(u.longitude),_t(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return VT(r.arrayValue,e.arrayValue);case 10:return function(u,h){const p=u.fields||{},m=h.fields||{},y=p[ef]?.arrayValue,E=m[ef]?.arrayValue,R=Ve(y?.values?.length||0,E?.values?.length||0);return R!==0?R:VT(y,E)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===vh.mapValue&&h===vh.mapValue)return 0;if(u===vh.mapValue)return 1;if(h===vh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),y=h.fields||{},E=Object.keys(y);m.sort(),E.sort();for(let R=0;R<m.length&&R<E.length;++R){const w=Bm(m[R],E[R]);if(w!==0)return w;const L=Oo(p[m[R]],y[E[R]]);if(L!==0)return L}return Ve(m.length,E.length)}(r.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function MT(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ve(r,e);const t=us(r),s=us(e),o=Ve(t.seconds,s.seconds);return o!==0?o:Ve(t.nanos,s.nanos)}function VT(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Oo(t[o],s[o]);if(u)return u}return Ve(t.length,s.length)}function No(r){return Fm(r)}function Fm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=us(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return cs(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Ee.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Fm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Fm(t.fields[h])}`;return o+"}"}(r.mapValue):we(61005,{value:r})}function kh(r){switch(hs(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xf(r);return e?16+kh(e):16;case 5:return 2*r.stringValue.length;case 6:return cs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+kh(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return _s(s.fields,(u,h)=>{o+=u.length+kh(h)}),o}(r.mapValue);default:throw we(13486,{value:r})}}function LT(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function qm(r){return!!r&&"integerValue"in r}function kg(r){return!!r&&"arrayValue"in r}function UT(r){return!!r&&"nullValue"in r}function jT(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Mh(r){return!!r&&"mapValue"in r}function TN(r){return(r?.mapValue?.fields||{})[CS]?.stringValue===DS}function fu(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return _s(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=fu(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fu(r.arrayValue.values[t]);return e}return{...r}}function bN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===EN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Mh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fu(t)}setAll(e){let t=Qt.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=fu(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Mh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Mh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){_s(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new vn(fu(this.value))}}function OS(r){const e=[];return _s(r.fields,(t,s)=>{const o=new Qt([t]);if(Mh(s)){const u=OS(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new rn(e,0,Ie.min(),Ie.min(),Ie.min(),vn.empty(),0)}static newFoundDocument(e,t,s,o){return new rn(e,1,t,Ie.min(),s,o,0)}static newNoDocument(e,t){return new rn(e,2,t,Ie.min(),Ie.min(),vn.empty(),0)}static newUnknownDocument(e,t){return new rn(e,3,t,Ie.min(),Ie.min(),vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){this.position=e,this.inclusive=t}}function zT(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=Ee.comparator(Ee.fromName(h.referenceValue),t.key):s=Oo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function BT(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!xr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t="asc"){this.field=e,this.dir=t}}function SN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{}class Ct extends NS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new wN(e,t,s):t==="array-contains"?new CN(e,s):t==="in"?new DN(e,s):t==="not-in"?new ON(e,s):t==="array-contains-any"?new NN(e,s):new Ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new RN(e,s):new IN(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Oo(t,this.value)):t!==null&&hs(this.value)===hs(t)&&this.matchesComparison(Oo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class or extends NS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new or(e,t)}matches(e){return xS(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xS(r){return r.op==="and"}function PS(r){return AN(r)&&xS(r)}function AN(r){for(const e of r.filters)if(e instanceof or)return!1;return!0}function Hm(r){if(r instanceof Ct)return r.field.canonicalString()+r.op.toString()+No(r.value);if(PS(r))return r.filters.map(e=>Hm(e)).join(",");{const e=r.filters.map(t=>Hm(t)).join(",");return`${r.op}(${e})`}}function kS(r,e){return r instanceof Ct?function(s,o){return o instanceof Ct&&s.op===o.op&&s.field.isEqual(o.field)&&xr(s.value,o.value)}(r,e):r instanceof or?function(s,o){return o instanceof or&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&kS(h,o.filters[p]),!0):!1}(r,e):void we(19439)}function MS(r){return r instanceof Ct?function(t){return`${t.field.canonicalString()} ${t.op} ${No(t.value)}`}(r):r instanceof or?function(t){return t.op.toString()+" {"+t.getFilters().map(MS).join(" ,")+"}"}(r):"Filter"}class wN extends Ct{constructor(e,t,s){super(e,t,s),this.key=Ee.fromName(s.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class RN extends Ct{constructor(e,t){super(e,"in",t),this.keys=VS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class IN extends Ct{constructor(e,t){super(e,"not-in",t),this.keys=VS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function VS(r,e){return(e.arrayValue?.values||[]).map(t=>Ee.fromName(t.referenceValue))}class CN extends Ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kg(t)&&Ru(t.arrayValue,this.value)}}class DN extends Ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ru(this.value.arrayValue,t)}}class ON extends Ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ru(this.value.arrayValue,t)}}class NN extends Ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ru(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.Te=null}}function FT(r,e=null,t=[],s=[],o=null,u=null,h=null){return new xN(r,e,t,s,o,u,h)}function Mg(r){const e=De(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Hm(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Nf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>No(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>No(s)).join(",")),e.Te=t}return e.Te}function Vg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!SN(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!kS(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!BT(r.startAt,e.startAt)&&BT(r.endAt,e.endAt)}function Gm(r){return Ee.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PN(r,e,t,s,o,u,h,p){return new Bo(r,e,t,s,o,u,h,p)}function Pf(r){return new Bo(r)}function qT(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function LS(r){return r.collectionGroup!==null}function du(r){const e=De(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Mt(Qt.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(y=>{y.isInequality()&&(p=p.add(y.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Iu(u,s))}),t.has(Qt.keyField().canonicalString())||e.Ie.push(new Iu(Qt.keyField(),s))}return e.Ie}function Ir(r){const e=De(r);return e.Ee||(e.Ee=kN(e,du(r))),e.Ee}function kN(r,e){if(r.limitType==="F")return FT(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Iu(o.field,u)});const t=r.endAt?new tf(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new tf(r.startAt.position,r.startAt.inclusive):null;return FT(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Km(r,e){const t=r.filters.concat([e]);return new Bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ym(r,e,t){return new Bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function kf(r,e){return Vg(Ir(r),Ir(e))&&r.limitType===e.limitType}function US(r){return`${Mg(Ir(r))}|lt:${r.limitType}`}function yo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>MS(o)).join(", ")}]`),Nf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>No(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>No(o)).join(",")),`Target(${s})`}(Ir(r))}; limitType=${r.limitType})`}function Mf(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Ee.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of du(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,m){const y=zT(h,p,m);return h.inclusive?y<=0:y<0}(s.startAt,du(s),o)||s.endAt&&!function(h,p,m){const y=zT(h,p,m);return h.inclusive?y>=0:y>0}(s.endAt,du(s),o))}(r,e)}function MN(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function jS(r){return(e,t)=>{let s=!1;for(const o of du(r)){const u=VN(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function VN(r,e,t){const s=r.field.isKeyField()?Ee.comparator(e.key,t.key):function(u,h,p){const m=h.data.field(u),y=p.data.field(u);return m!==null&&y!==null?Oo(m,y):we(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return bS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=new ht(Ee.comparator);function gi(){return LN}const zS=new ht(Ee.comparator);function ou(...r){let e=zS;for(const t of r)e=e.insert(t.key,t);return e}function BS(r){let e=zS;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function oa(){return pu()}function FS(){return pu()}function pu(){return new Ea(r=>r.toString(),(r,e)=>r.isEqual(e))}const UN=new ht(Ee.comparator),jN=new Mt(Ee.comparator);function Le(...r){let e=jN;for(const t of r)e=e.add(t);return e}const zN=new Mt(Ve);function BN(){return zN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zh(e)?"-0":e}}function qS(r){return{integerValue:""+r}}function FN(r,e){return mN(e)?qS(e):Lg(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this._=void 0}}function qN(r,e,t){return r instanceof nf?function(o,u){const h={fields:{[wS]:{stringValue:AS},[IS]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Pg(u)&&(u=xf(u)),u&&(h.fields[RS]=u),{mapValue:h}}(t,e):r instanceof Cu?GS(r,e):r instanceof Du?KS(r,e):function(o,u){const h=HS(o,u),p=HT(h)+HT(o.Ae);return qm(h)&&qm(o.Ae)?qS(p):Lg(o.serializer,p)}(r,e)}function HN(r,e,t){return r instanceof Cu?GS(r,e):r instanceof Du?KS(r,e):t}function HS(r,e){return r instanceof rf?function(s){return qm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class nf extends Vf{}class Cu extends Vf{constructor(e){super(),this.elements=e}}function GS(r,e){const t=YS(e);for(const s of r.elements)t.some(o=>xr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Du extends Vf{constructor(e){super(),this.elements=e}}function KS(r,e){let t=YS(e);for(const s of r.elements)t=t.filter(o=>!xr(o,s));return{arrayValue:{values:t}}}class rf extends Vf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function HT(r){return _t(r.integerValue||r.doubleValue)}function YS(r){return kg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function GN(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Cu&&o instanceof Cu||s instanceof Du&&o instanceof Du?Do(s.elements,o.elements,xr):s instanceof rf&&o instanceof rf?xr(s.Ae,o.Ae):s instanceof nf&&o instanceof nf}(r.transform,e.transform)}class KN{constructor(e,t){this.version=e,this.transformResults=t}}class Cr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cr}static exists(e){return new Cr(void 0,e)}static updateTime(e){return new Cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Lf{}function $S(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new XS(r.key,Cr.none()):new Uu(r.key,r.data,Cr.none());{const t=r.data,s=vn.empty();let o=new Mt(Qt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Es(r.key,s,new Nn(o.toArray()),Cr.none())}}function YN(r,e,t){r instanceof Uu?function(o,u,h){const p=o.value.clone(),m=KT(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof Es?function(o,u,h){if(!Vh(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=KT(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(QS(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function mu(r,e,t,s){return r instanceof Uu?function(u,h,p,m){if(!Vh(u.precondition,h))return p;const y=u.value.clone(),E=YT(u.fieldTransforms,m,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(r,e,t,s):r instanceof Es?function(u,h,p,m){if(!Vh(u.precondition,h))return p;const y=YT(u.fieldTransforms,m,h),E=h.data;return E.setAll(QS(u)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(r,e,t,s):function(u,h,p){return Vh(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function $N(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=HS(s.transform,o||null);u!=null&&(t===null&&(t=vn.empty()),t.set(s.field,u))}return t||null}function GT(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Do(s,o,(u,h)=>GN(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Uu extends Lf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Es extends Lf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function QS(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function KT(r,e,t){const s=new Map;Ye(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,HN(h,p,t[o]))}return s}function YT(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,qN(u,h,e))}return s}class XS extends Lf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QN extends Lf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&YN(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=mu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=mu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=FS();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const m=$S(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ie.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(t,s)=>GT(t,s))&&Do(this.baseMutations,e.baseMutations,(t,s)=>GT(t,s))}}class Ug{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ye(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return UN}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Ug(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,Be;function JN(r){switch(r){case W.OK:return we(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return we(15467,{code:r})}}function WS(r){if(r===void 0)return mi("GRPC error has no .code"),W.UNKNOWN;switch(r){case It.OK:return W.OK;case It.CANCELLED:return W.CANCELLED;case It.UNKNOWN:return W.UNKNOWN;case It.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case It.INTERNAL:return W.INTERNAL;case It.UNAVAILABLE:return W.UNAVAILABLE;case It.UNAUTHENTICATED:return W.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case It.NOT_FOUND:return W.NOT_FOUND;case It.ALREADY_EXISTS:return W.ALREADY_EXISTS;case It.PERMISSION_DENIED:return W.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case It.ABORTED:return W.ABORTED;case It.OUT_OF_RANGE:return W.OUT_OF_RANGE;case It.UNIMPLEMENTED:return W.UNIMPLEMENTED;case It.DATA_LOSS:return W.DATA_LOSS;default:return we(39323,{code:r})}}(Be=It||(It={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=new ss([4294967295,4294967295],0);function $T(r){const e=e2().encode(r),t=new hS;return t.update(e),new Uint8Array(t.digest())}function QT(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ss([t,s],0),new ss([o,u],0)]}class jg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new lu(`Invalid padding: ${t}`);if(s<0)throw new lu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new lu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new lu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ss.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ss.fromNumber(s)));return o.compare(t2)===1&&(o=new ss([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=$T(e),[s,o]=QT(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new jg(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.ge===0)return;const t=$T(e),[s,o]=QT(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class lu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ju.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Uf(Ie.min(),o,new ht(Ve),gi(),Le())}}class ju{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ju(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class ZS{constructor(e,t){this.targetId=e,this.Ce=t}}class JS{constructor(e,t,s=Xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class XT{constructor(){this.ve=0,this.Fe=WT(),this.Me=Xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),t=Le(),s=Le();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we(38017,{changeType:u})}}),new ju(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=WT()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class n2{constructor(e){this.Ge=e,this.ze=new Map,this.je=gi(),this.Je=_h(),this.He=_h(),this.Ye=new ht(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:we(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Gm(u))if(s===0){const h=new Ee(u.path);this.et(t,h,rn.newNoDocument(h,Ie.min()))}else Ye(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const p=this.ut(e),m=p?this.ct(p,e,h):1;if(m!==0){this.it(t);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=cs(s).toUint8Array()}catch(m){if(m instanceof SS)return Co("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new jg(h,o,u)}catch(m){return Co(m instanceof lu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const p=this.ot(h);if(p){if(u.current&&Gm(p.target)){const m=new Ee(p.target.path);this.It(m).has(h)||this.Et(h,m)||this.et(h,m,rn.newNoDocument(m,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Le();this.He.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const y=this.ot(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new Uf(e,t,this.Ye,this.je,s);return this.je=gi(),this.Je=_h(),this.He=_h(),this.Ye=new ht(Ve),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new XT,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Mt(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Mt(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new XT),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _h(){return new ht(Ee.comparator)}function WT(){return new ht(Ee.comparator)}const r2={asc:"ASCENDING",desc:"DESCENDING"},i2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},s2={and:"AND",or:"OR"};class a2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $m(r,e){return r.useProto3Json||Nf(e)?e:{value:e}}function sf(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eA(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function o2(r,e){return sf(r,e.toTimestamp())}function Dr(r){return Ye(!!r,49232),Ie.fromTimestamp(function(t){const s=us(t);return new st(s.seconds,s.nanos)}(r))}function zg(r,e){return Qm(r,e).canonicalString()}function Qm(r,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function tA(r){const e=it.fromString(r);return Ye(aA(e),10190,{key:e.toString()}),e}function Xm(r,e){return zg(r.databaseId,e.path)}function fm(r,e){const t=tA(e);if(t.get(1)!==r.databaseId.projectId)throw new ue(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ue(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new Ee(rA(t))}function nA(r,e){return zg(r.databaseId,e)}function l2(r){const e=tA(r);return e.length===4?it.emptyPath():rA(e)}function Wm(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function rA(r){return Ye(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ZT(r,e,t){return{name:Xm(r,e),fields:t.value.mapValue.fields}}function u2(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Ye(E===void 0||typeof E=="string",58123),Xt.fromBase64String(E||"")):(Ye(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Xt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(y){const E=y.code===void 0?W.UNKNOWN:WS(y.code);return new ue(E,y.message||"")}(h);t=new JS(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=fm(r,s.document.name),u=Dr(s.document.updateTime),h=s.document.createTime?Dr(s.document.createTime):Ie.min(),p=new vn({mapValue:{fields:s.document.fields}}),m=rn.newFoundDocument(o,u,h,p),y=s.targetIds||[],E=s.removedTargetIds||[];t=new Lh(y,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=fm(r,s.document),u=s.readTime?Dr(s.readTime):Ie.min(),h=rn.newNoDocument(o,u),p=s.removedTargetIds||[];t=new Lh([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=fm(r,s.document),u=s.removedTargetIds||[];t=new Lh([],u,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new ZN(o,u),p=s.targetId;t=new ZS(p,h)}}return t}function c2(r,e){let t;if(e instanceof Uu)t={update:ZT(r,e.key,e.value)};else if(e instanceof XS)t={delete:Xm(r,e.key)};else if(e instanceof Es)t={update:ZT(r,e.key,e.data),updateMask:_2(e.fieldMask)};else{if(!(e instanceof QN))return we(16599,{Vt:e.type});t={verify:Xm(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof nf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Cu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Du)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof rf)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw we(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:o2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:we(27497)}(r,e.precondition)),t}function h2(r,e){return r&&r.length>0?(Ye(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?Dr(o.updateTime):Dr(u);return h.isEqual(Ie.min())&&(h=Dr(u)),new KN(h,o.transformResults||[])}(t,e))):[]}function f2(r,e){return{documents:[nA(r,e.path)]}}function d2(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=nA(r,o);const u=function(y){if(y.length!==0)return sA(or.create(y,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(y){if(y.length!==0)return y.map(E=>function(w){return{field:vo(w.field),direction:g2(w.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=$m(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ft:t,parent:o}}function p2(r){let e=l2(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ye(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(R){const w=iA(R);return w instanceof or&&PS(w)?w.getFilters():[w]}(t.where));let h=[];t.orderBy&&(h=function(R){return R.map(w=>function(q){return new Iu(_o(q.field),function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(w))}(t.orderBy));let p=null;t.limit&&(p=function(R){let w;return w=typeof R=="object"?R.value:R,Nf(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(R){const w=!!R.before,L=R.values||[];return new tf(L,w)}(t.startAt));let y=null;return t.endAt&&(y=function(R){const w=!R.before,L=R.values||[];return new tf(L,w)}(t.endAt)),PN(e,o,h,u,p,"F",m,y)}function m2(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function iA(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=_o(t.unaryFilter.field);return Ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return Ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=_o(t.unaryFilter.field);return Ct.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=_o(t.unaryFilter.field);return Ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}}(r):r.fieldFilter!==void 0?function(t){return Ct.create(_o(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return or.create(t.compositeFilter.filters.map(s=>iA(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}}(t.compositeFilter.op))}(r):we(30097,{filter:r})}function g2(r){return r2[r]}function y2(r){return i2[r]}function v2(r){return s2[r]}function vo(r){return{fieldPath:r.canonicalString()}}function _o(r){return Qt.fromServerFormat(r.fieldPath)}function sA(r){return r instanceof Ct?function(t){if(t.op==="=="){if(jT(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(UT(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jT(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(UT(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:y2(t.op),value:t.value}}}(r):r instanceof or?function(t){const s=t.getFilters().map(o=>sA(o));return s.length===1?s[0]:{compositeFilter:{op:v2(t.op),filters:s}}}(r):we(54877,{filter:r})}function _2(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function aA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,s,o,u=Ie.min(),h=Ie.min(),p=Xt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.yt=e}}function T2(r){const e=p2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ym(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(){this.Cn=new S2}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(ls.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(ls.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class S2{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Mt(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Mt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},oA=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(oA,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xo(0)}static cr(){return new xo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="LruGarbageCollector",A2=1048576;function t0([r,e],[t,s]){const o=Ve(r,t);return o===0?Ve(e,s):o}class w2{constructor(e){this.Ir=e,this.buffer=new Mt(t0),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();t0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class R2{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(e0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zo(t)?he(e0,"Ignoring IndexedDB error during garbage collection: ",t):await jo(t)}await this.Vr(3e5)})}}class I2{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Of.ce);const s=new w2(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(JT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),JT):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,p,m,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o))).next(R=>(s=R,p=Date.now(),this.removeTargets(e,s,t))).next(R=>(u=R,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(y=Date.now(),go()<=Me.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${R} documents in `+(y-m)+`ms
Total Duration: ${y-E}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function C2(r,e){return new I2(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.changes=new Ea(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&mu(s.mutation,o,Nn.empty(),st.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=oa();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=ou();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=oa();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=gi();const h=pu(),p=function(){return pu()}();return t.forEach((m,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Es)?u=u.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),mu(E.mutation,y,E.mutation.getFieldMask(),st.now())):h.set(y.key,Nn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>p.set(y,new O2(E,h.get(y)??null))),p))}recalculateAndSaveOverlays(e,t){const s=pu();let o=new ht((h,p)=>h-p),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const y=t.get(m);if(y===null)return;let E=s.get(m)||Nn.empty();E=p.applyToLocalView(y,E),s.set(m,E);const R=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,R)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),y=m.key,E=m.value,R=FS();E.forEach(w=>{if(!u.has(w)){const L=$S(t.get(w),s.get(w));L!==null&&R.set(w,L),u=u.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,R))}return ee.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return Ee.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):LS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):ee.resolve(oa());let p=Su,m=u;return h.next(y=>ee.forEach(y,(E,R)=>(p<R.largestBatchId&&(p=R.largestBatchId),u.get(E)?ee.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{m=m.insert(E,w)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,m,y,Le())).next(E=>({batchId:p,changes:BS(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next(s=>{let o=ou();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ou();return this.indexManager.getCollectionParents(e,u).next(p=>ee.forEach(p,m=>{const y=function(R,w){return new Bo(w,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(E=>{E.forEach((R,w)=>{h=h.insert(R,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((m,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,rn.newInvalidDocument(E)))});let p=ou();return h.forEach((m,y)=>{const E=u.get(m);E!==void 0&&mu(E.mutation,y,Nn.empty(),st.now()),Mf(t,y)&&(p=p.insert(m,y))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Dr(o.createTime)}}(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:T2(o.bundledQuery),readTime:Dr(o.readTime)}}(t)),ee.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.overlays=new ht(Ee.comparator),this.qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=oa();return ee.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),ee.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const o=oa(),u=t.length+1,h=new Ee(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,y=m.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ht((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=oa(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const p=oa(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((y,E)=>p.set(y,E)),!(p.size()>=o)););return ee.resolve(p)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new WN(t,s));let u=this.qr.get(t);u===void 0&&(u=Le(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.Qr=new Mt(Ft.$r),this.Ur=new Mt(Ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ft(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Ft(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new Ee(new it([])),s=new Ft(t,e),o=new Ft(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Ee(new it([])),s=new Ft(t,e),o=new Ft(t,e+1);let u=Le();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Ft(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ft{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Ee.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||Ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Mt(Ft.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new XN(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Zr=this.Zr.add(new Ft(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ee.resolve(h)}lookupMutationBatch(e,t){return ee.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return ee.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?xg:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ft(t,0),o=new Ft(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const p=this.Xr(h.Yr);u.push(p)}),ee.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Mt(Ve);return t.forEach(o=>{const u=new Ft(o,0),h=new Ft(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],p=>{s=s.add(p.Yr)})}),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;Ee.isDocumentKey(u)||(u=u.child(""));const h=new Ft(new Ee(u),0);let p=new Mt(Ve);return this.Zr.forEachWhile(m=>{const y=m.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(p=p.add(m.Yr)),!0)},h),ee.resolve(this.ti(p))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ye(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(t.mutations,o=>{const u=new Ft(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Ft(t,0),o=this.Zr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.ri=e,this.docs=function(){return new ht(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():rn.newInvalidDocument(t))}getEntries(e,t){let s=gi();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():rn.newInvalidDocument(o))}),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=gi();const h=t.path,p=new Ee(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:y,value:{document:E}}=m.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||hN(cN(E),s)<=0||(o.has(E.key)||Mf(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return ee.resolve(u)}getAllFromCollectionGroup(e,t,s,o){we(9500)}ii(e,t){return ee.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new L2(this)}getSize(e){return ee.resolve(this.size)}}class L2 extends D2{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),ee.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.persistence=e,this.si=new Ea(t=>Mg(t),Vg),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.oi=0,this._i=new Bg,this.targetCount=0,this.ai=xo.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ee.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new xo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Pr(t),ee.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),ee.waitFor(u).next(()=>o)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),ee.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.ui={},this.overlays={},this.ci=new Of(0),this.li=!1,this.li=!0,this.hi=new k2,this.referenceDelegate=e(this),this.Pi=new U2(this),this.indexManager=new b2,this.remoteDocumentCache=function(o){return new V2(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new E2(t),this.Ii=new x2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new P2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new M2(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const o=new j2(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return ee.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class j2 extends dN{constructor(e){super(),this.currentSequenceNumber=e}}class Fg{constructor(e){this.persistence=e,this.Ri=new Bg,this.Vi=null}static mi(e){return new Fg(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,s=>{const o=Ee.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,Ie.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return ee.or([()=>ee.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class af{constructor(e,t){this.persistence=e,this.pi=new Ea(s=>gN(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=C2(this,t)}static mi(e,t){return new af(e,t)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return ee.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?ee.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(p=>{p||(s++,u.removeEntry(h,Ie.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=kh(e.data.value)),t}br(e,t,s){return ee.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return ee.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new qg(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return gI()?8:pN(on())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new z2;return this.Ss(e,t,h).next(p=>{if(u.result=p,this.Vs)return this.bs(e,t,h,p.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(go()<=Me.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(go()<=Me.DEBUG&&he("QueryEngine","Query:",yo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(go()<=Me.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ir(t))):ee.resolve())}ys(e,t){if(qT(t))return ee.resolve(null);let s=Ir(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Ym(t,null,"F"),s=Ir(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.ps.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const y=this.Ds(t,p);return this.Cs(t,y,h,m.readTime)?this.ys(e,Ym(t,null,"F")):this.vs(e,y,t,m)}))})))}ws(e,t,s,o){return qT(t)||o.isEqual(Ie.min())?ee.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?ee.resolve(null):(go()<=Me.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(t)),this.vs(e,h,t,uN(o,Su)).next(p=>p))})}Ds(e,t){let s=new Mt(jS(e));return t.forEach((o,u)=>{Mf(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return go()<=Me.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",yo(t)),this.ps.getDocumentsMatchingQuery(e,t,ls.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="LocalStore",F2=3e8;class q2{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new ht(Ve),this.xs=new Ea(u=>Mg(u),Vg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function H2(r,e,t,s){return new q2(r,e,t,s)}async function uA(r,e){const t=De(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Le();for(const y of o){h.push(y.batchId);for(const E of y.mutations)m=m.add(E.key)}for(const y of u){p.push(y.batchId);for(const E of y.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(s,m).next(y=>({Ls:y,removedBatchIds:h,addedBatchIds:p}))})})}function G2(r,e){const t=De(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(p,m,y,E){const R=y.batch,w=R.keys();let L=ee.resolve();return w.forEach(q=>{L=L.next(()=>E.getEntry(m,q)).next(ie=>{const Y=y.docVersions.get(q);Ye(Y!==null,48541),ie.version.compareTo(Y)<0&&(R.applyToRemoteDocument(ie,y),ie.isValidDocument()&&(ie.setReadTime(y.commitVersion),E.addEntry(ie)))})}),L.next(()=>p.mutationQueue.removeMutationBatch(m,R))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Le();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(m=m.add(p.batch.mutations[y].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function cA(r){const e=De(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function K2(r,e){const t=De(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const p=[];e.targetChanges.forEach((E,R)=>{const w=o.get(R);if(!w)return;p.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,R).next(()=>t.Pi.addMatchingKeys(u,E.addedDocuments,R)));let L=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?L=L.withResumeToken(Xt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):E.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(E.resumeToken,s)),o=o.insert(R,L),function(ie,Y,de){return ie.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-ie.snapshotVersion.toMicroseconds()>=F2?!0:de.addedDocuments.size+de.modifiedDocuments.size+de.removedDocuments.size>0}(w,L,E)&&p.push(t.Pi.updateTargetData(u,L))});let m=gi(),y=Le();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),p.push(Y2(u,h,e.documentUpdates).next(E=>{m=E.ks,y=E.qs})),!s.isEqual(Ie.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next(R=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(E)}return ee.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,y)).next(()=>m)}).then(u=>(t.Ms=o,u))}function Y2(r,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=gi();return t.forEach((p,m)=>{const y=u.get(p);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ie.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):he(Hg,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",m.version)}),{ks:h,qs:o}})}function $2(r,e){const t=De(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=xg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Q2(r,e){const t=De(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,ee.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new ns(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function Zm(r,e,t){const s=De(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!zo(h))throw h;he(Hg,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function n0(r,e,t){const s=De(r);let o=Ie.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,y,E){const R=De(m),w=R.xs.get(E);return w!==void 0?ee.resolve(R.Ms.get(w)):R.Pi.getTargetData(y,E)}(s,h,Ir(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?u:Le())).next(p=>(X2(s,MN(e),p),{documents:p,Qs:u})))}function X2(r,e,t){let s=r.Os.get(e)||Ie.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class r0{constructor(){this.activeTargetIds=BN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class W2{constructor(){this.Mo=new r0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new r0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="ConnectivityMonitor";class s0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(i0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(i0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eh=null;function Jm(){return Eh===null?Eh=function(){return 268435456+Math.round(2147483648*Math.random())}():Eh++,"0x"+Eh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="RestConnection",J2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ex{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Jh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Jm(),p=this.zo(e,t.toUriEncodedString());he(dm,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:y}=new URL(p),E=ys(y);return this.Jo(e,p,m,s,E).then(R=>(he(dm,`Received RPC '${e}' ${h}: `,R),R),R=>{throw Co(dm,`RPC '${e}' ${h} failed with error: `,R,"url: ",p,"request:",s),R})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=J2[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="WebChannelConnection";class nx extends ex{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Jm();return new Promise((p,m)=>{const y=new fS;y.setWithCredentials(!0),y.listenOnce(dS.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Ph.NO_ERROR:const R=y.getResponseJson();he(en,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(R)),p(R);break;case Ph.TIMEOUT:he(en,`RPC '${e}' ${h} timed out`),m(new ue(W.DEADLINE_EXCEEDED,"Request time out"));break;case Ph.HTTP_ERROR:const w=y.getStatus();if(he(en,`RPC '${e}' ${h} failed with status:`,w,"response text:",y.getResponseText()),w>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const q=L?.error;if(q&&q.status&&q.message){const ie=function(de){const ge=de.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ge)>=0?ge:W.UNKNOWN}(q.status);m(new ue(ie,q.message))}else m(new ue(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ue(W.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{he(en,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);he(en,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",E,s,15)})}T_(e,t,s){const o=Jm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=gS(),p=mS(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const E=u.join("");he(en,`Creating RPC '${e}' stream ${o}: ${E}`,m);const R=h.createWebChannel(E,m);this.I_(R);let w=!1,L=!1;const q=new tx({Yo:Y=>{L?he(en,`Not sending because RPC '${e}' stream ${o} is closed:`,Y):(w||(he(en,`Opening RPC '${e}' stream ${o} transport.`),R.open(),w=!0),he(en,`RPC '${e}' stream ${o} sending:`,Y),R.send(Y))},Zo:()=>R.close()}),ie=(Y,de,ge)=>{Y.listen(de,ce=>{try{ge(ce)}catch(ye){setTimeout(()=>{throw ye},0)}})};return ie(R,au.EventType.OPEN,()=>{L||(he(en,`RPC '${e}' stream ${o} transport opened.`),q.o_())}),ie(R,au.EventType.CLOSE,()=>{L||(L=!0,he(en,`RPC '${e}' stream ${o} transport closed`),q.a_(),this.E_(R))}),ie(R,au.EventType.ERROR,Y=>{L||(L=!0,Co(en,`RPC '${e}' stream ${o} transport errored. Name:`,Y.name,"Message:",Y.message),q.a_(new ue(W.UNAVAILABLE,"The operation could not be completed")))}),ie(R,au.EventType.MESSAGE,Y=>{if(!L){const de=Y.data[0];Ye(!!de,16349);const ge=de,ce=ge?.error||ge[0]?.error;if(ce){he(en,`RPC '${e}' stream ${o} received error:`,ce);const ye=ce.status;let re=function(A){const D=It[A];if(D!==void 0)return WS(D)}(ye),fe=ce.message;re===void 0&&(re=W.INTERNAL,fe="Unknown error status: "+ye+" with message "+ce.message),L=!0,q.a_(new ue(re,fe)),R.close()}else he(en,`RPC '${e}' stream ${o} received:`,de),q.u_(de)}}),ie(p,pS.STAT_EVENT,Y=>{Y.stat===zm.PROXY?he(en,`RPC '${e}' stream ${o} detected buffering proxy`):Y.stat===zm.NOPROXY&&he(en,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{q.__()},0),q}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function pm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(r){return new a2(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="PersistentStream";class fA{constructor(e,t,s,o,u,h,p,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hA(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(mi(t.toString()),mi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new ue(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return he(a0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(he(a0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rx extends fA{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=u2(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ie.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?Dr(h.readTime):Ie.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Wm(this.serializer),t.addTarget=function(u,h){let p;const m=h.target;if(p=Gm(m)?{documents:f2(u,m)}:{query:d2(u,m).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=eA(u,h.resumeToken);const y=$m(u,h.expectedCount);y!==null&&(p.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ie.min())>0){p.readTime=sf(u,h.snapshotVersion.toTimestamp());const y=$m(u,h.expectedCount);y!==null&&(p.expectedCount=y)}return p}(this.serializer,e);const s=m2(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Wm(this.serializer),t.removeTarget=e,this.q_(t)}}class ix extends fA{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=h2(e.writeResults,e.commitTime),s=Dr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Wm(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>c2(this.serializer,s))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{}class ax extends sx{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ue(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,Qm(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ue(W.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Ho(e,Qm(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ue(W.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ox{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mi(t),this.aa=!1):he("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="RemoteStore";class lx{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{Ta(this)&&(he(pa,"Restarting streams for network reachability change."),await async function(m){const y=De(m);y.Ea.add(4),await zu(y),y.Ra.set("Unknown"),y.Ea.delete(4),await zf(y)}(this))})}),this.Ra=new ox(s,o)}}async function zf(r){if(Ta(r))for(const e of r.da)await e(!0)}async function zu(r){for(const e of r.da)await e(!1)}function dA(r,e){const t=De(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),$g(t)?Yg(t):Fo(t).O_()&&Kg(t,e))}function Gg(r,e){const t=De(r),s=Fo(t);t.Ia.delete(e),s.O_()&&pA(t,e),t.Ia.size===0&&(s.O_()?s.L_():Ta(t)&&t.Ra.set("Unknown"))}function Kg(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fo(r).Y_(e)}function pA(r,e){r.Va.Ue(e),Fo(r).Z_(e)}function Yg(r){r.Va=new n2({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Fo(r).start(),r.Ra.ua()}function $g(r){return Ta(r)&&!Fo(r).x_()&&r.Ia.size>0}function Ta(r){return De(r).Ea.size===0}function mA(r){r.Va=void 0}async function ux(r){r.Ra.set("Online")}async function cx(r){r.Ia.forEach((e,t)=>{Kg(r,e)})}async function hx(r,e){mA(r),$g(r)?(r.Ra.ha(e),Yg(r)):r.Ra.set("Unknown")}async function fx(r,e,t){if(r.Ra.set("Online"),e instanceof JS&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.Va.removeTarget(p))}(r,e)}catch(s){he(pa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await of(r,s)}else if(e instanceof Lh?r.Va.Ze(e):e instanceof ZS?r.Va.st(e):r.Va.tt(e),!t.isEqual(Ie.min()))try{const s=await cA(r.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.Va.Tt(h);return p.targetChanges.forEach((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const E=u.Ia.get(y);E&&u.Ia.set(y,E.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,y)=>{const E=u.Ia.get(m);if(!E)return;u.Ia.set(m,E.withResumeToken(Xt.EMPTY_BYTE_STRING,E.snapshotVersion)),pA(u,m);const R=new ns(E.target,m,y,E.sequenceNumber);Kg(u,R)}),u.remoteSyncer.applyRemoteEvent(p)}(r,t)}catch(s){he(pa,"Failed to raise snapshot:",s),await of(r,s)}}async function of(r,e,t){if(!zo(e))throw e;r.Ea.add(1),await zu(r),r.Ra.set("Offline"),t||(t=()=>cA(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{he(pa,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await zf(r)})}function gA(r,e){return e().catch(t=>of(r,t,e))}async function Bf(r){const e=De(r),t=fs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xg;for(;dx(e);)try{const o=await $2(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,px(e,o)}catch(o){await of(e,o)}yA(e)&&vA(e)}function dx(r){return Ta(r)&&r.Ta.length<10}function px(r,e){r.Ta.push(e);const t=fs(r);t.O_()&&t.X_&&t.ea(e.mutations)}function yA(r){return Ta(r)&&!fs(r).x_()&&r.Ta.length>0}function vA(r){fs(r).start()}async function mx(r){fs(r).ra()}async function gx(r){const e=fs(r);for(const t of r.Ta)e.ea(t.mutations)}async function yx(r,e,t){const s=r.Ta.shift(),o=Ug.from(s,e,t);await gA(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Bf(r)}async function vx(r,e){e&&fs(r).X_&&await async function(s,o){if(function(h){return JN(h)&&h!==W.ABORTED}(o.code)){const u=s.Ta.shift();fs(s).B_(),await gA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Bf(s)}}(r,e),yA(r)&&vA(r)}async function o0(r,e){const t=De(r);t.asyncQueue.verifyOperationInProgress(),he(pa,"RemoteStore received new credentials");const s=Ta(t);t.Ea.add(3),await zu(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await zf(t)}async function _x(r,e){const t=De(r);e?(t.Ea.delete(2),await zf(t)):e||(t.Ea.add(2),await zu(t),t.Ra.set("Unknown"))}function Fo(r){return r.ma||(r.ma=function(t,s,o){const u=De(t);return u.sa(),new rx(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:ux.bind(null,r),t_:cx.bind(null,r),r_:hx.bind(null,r),H_:fx.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),$g(r)?Yg(r):r.Ra.set("Unknown")):(await r.ma.stop(),mA(r))})),r.ma}function fs(r){return r.fa||(r.fa=function(t,s,o){const u=De(t);return u.sa(),new ix(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:mx.bind(null,r),r_:vx.bind(null,r),ta:gx.bind(null,r),na:yx.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Bf(r)):(await r.fa.stop(),r.Ta.length>0&&(he(pa,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new as,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new Qg(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xg(r,e){if(mi("AsyncQueue",`${e}: ${r}`),zo(r))return new ue(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Ee.comparator(t.key,s.key):(t,s)=>Ee.comparator(t.key,s.key),this.keyedMap=ou(),this.sortedSet=new ht(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.ga=new ht(Ee.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Po{constructor(e,t,s,o,u,h,p,m,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new Po(e,t,Ao.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Tx{constructor(){this.queries=u0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=De(t),u=o.queries;o.queries=u0(),u.forEach((h,p)=>{for(const m of p.Sa)m.onError(s)})})(this,new ue(W.ABORTED,"Firestore shutting down"))}}function u0(){return new Ea(r=>US(r),kf)}async function _A(r,e){const t=De(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new Ex,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=Xg(h,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Wg(t)}async function EA(r,e){const t=De(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function bx(r,e){const t=De(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.Sa)p.Fa(o)&&(s=!0);h.wa=o}}s&&Wg(t)}function Sx(r,e,t){const s=De(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function Wg(r){r.Ca.forEach(e=>{e.next()})}var eg,c0;(c0=eg||(eg={})).Ma="default",c0.Cache="cache";class TA{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==eg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.key=e}}class SA{constructor(e){this.key=e}}class Ax{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=jS(e),this.tu=new Ao(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new l0,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,R)=>{const w=o.get(E),L=Mf(this.query,R)?R:null,q=!!w&&this.mutatedKeys.has(w.key),ie=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let Y=!1;w&&L?w.data.isEqual(L.data)?q!==ie&&(s.track({type:3,doc:L}),Y=!0):this.su(w,L)||(s.track({type:2,doc:L}),Y=!0,(m&&this.eu(L,m)>0||y&&this.eu(L,y)<0)&&(p=!0)):!w&&L?(s.track({type:0,doc:L}),Y=!0):w&&!L&&(s.track({type:1,doc:w}),Y=!0,(m||y)&&(p=!0)),Y&&(L?(h=h.add(L),u=ie?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:p,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((E,R)=>function(L,q){const ie=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:Y})}};return ie(L)-ie(q)}(E.type,R.type)||this.eu(E.doc,R.doc)),this.ou(s),o=o??!1;const p=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,y=m!==this.Za;return this.Za=m,h.length!==0||y?{snapshot:new Po(this.query,e.tu,u,h,e.mutatedKeys,m===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new l0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new SA(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new bA(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Zg="SyncEngine";class wx{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Rx{constructor(e){this.key=e,this.hu=!1}}class Ix{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ea(p=>US(p),kf),this.Iu=new Map,this.Eu=new Set,this.du=new ht(Ee.comparator),this.Au=new Map,this.Ru=new Bg,this.Vu={},this.mu=new Map,this.fu=xo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Cx(r,e,t=!0){const s=DA(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await AA(s,e,t,!0),o}async function Dx(r,e){const t=DA(r);await AA(t,e,!0,!1)}async function AA(r,e,t,s){const o=await Q2(r.localStore,Ir(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await Ox(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&dA(r.remoteStore,o),p}async function Ox(r,e,t,s,o){r.pu=(R,w,L)=>async function(ie,Y,de,ge){let ce=Y.view.ru(de);ce.Cs&&(ce=await n0(ie.localStore,Y.query,!1).then(({documents:O})=>Y.view.ru(O,ce)));const ye=ge&&ge.targetChanges.get(Y.targetId),re=ge&&ge.targetMismatches.get(Y.targetId)!=null,fe=Y.view.applyChanges(ce,ie.isPrimaryClient,ye,re);return f0(ie,Y.targetId,fe.au),fe.snapshot}(r,R,w,L);const u=await n0(r.localStore,e,!0),h=new Ax(e,u.Qs),p=h.ru(u.documents),m=ju.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),y=h.applyChanges(p,r.isPrimaryClient,m);f0(r,t,y.au);const E=new wx(e,t,h);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),y.snapshot}async function Nx(r,e,t){const s=De(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!kf(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Zm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Gg(s.remoteStore,o.targetId),tg(s,o.targetId)}).catch(jo)):(tg(s,o.targetId),await Zm(s.localStore,o.targetId,!0))}async function xx(r,e){const t=De(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Gg(t.remoteStore,s.targetId))}async function Px(r,e,t){const s=zx(r);try{const o=await function(h,p){const m=De(h),y=st.now(),E=p.reduce((L,q)=>L.add(q.key),Le());let R,w;return m.persistence.runTransaction("Locally write mutations","readwrite",L=>{let q=gi(),ie=Le();return m.Ns.getEntries(L,E).next(Y=>{q=Y,q.forEach((de,ge)=>{ge.isValidDocument()||(ie=ie.add(de))})}).next(()=>m.localDocuments.getOverlayedDocuments(L,q)).next(Y=>{R=Y;const de=[];for(const ge of p){const ce=$N(ge,R.get(ge.key).overlayedDocument);ce!=null&&de.push(new Es(ge.key,ce,OS(ce.value.mapValue),Cr.exists(!0)))}return m.mutationQueue.addMutationBatch(L,y,de,p)}).next(Y=>{w=Y;const de=Y.applyToLocalDocumentSet(R,ie);return m.documentOverlayCache.saveOverlays(L,Y.batchId,de)})}).then(()=>({batchId:w.batchId,changes:BS(R)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let y=h.Vu[h.currentUser.toKey()];y||(y=new ht(Ve)),y=y.insert(p,m),h.Vu[h.currentUser.toKey()]=y}(s,o.batchId,t),await Bu(s,o.changes),await Bf(s.remoteStore)}catch(o){const u=Xg(o,"Failed to persist write");t.reject(u)}}async function wA(r,e){const t=De(r);try{const s=await K2(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ye(h.hu,14607):o.removedDocuments.size>0&&(Ye(h.hu,42227),h.hu=!1))}),await Bu(t,s,e)}catch(s){await jo(s)}}function h0(r,e,t){const s=De(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=De(h);m.onlineState=p;let y=!1;m.queries.forEach((E,R)=>{for(const w of R.Sa)w.va(p)&&(y=!0)}),y&&Wg(m)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kx(r,e,t){const s=De(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new ht(Ee.comparator);h=h.insert(u,rn.newNoDocument(u,Ie.min()));const p=Le().add(u),m=new Uf(Ie.min(),new Map,new ht(Ve),h,p);await wA(s,m),s.du=s.du.remove(u),s.Au.delete(e),Jg(s)}else await Zm(s.localStore,e,!1).then(()=>tg(s,e,t)).catch(jo)}async function Mx(r,e){const t=De(r),s=e.batch.batchId;try{const o=await G2(t.localStore,e);IA(t,s,null),RA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Bu(t,o)}catch(o){await jo(o)}}async function Vx(r,e,t){const s=De(r);try{const o=await function(h,p){const m=De(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return m.mutationQueue.lookupMutationBatch(y,p).next(R=>(Ye(R!==null,37113),E=R.keys(),m.mutationQueue.removeMutationBatch(y,R))).next(()=>m.mutationQueue.performConsistencyCheck(y)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(y,E,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>m.localDocuments.getDocuments(y,E))})}(s.localStore,e);IA(s,e,t),RA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Bu(s,o)}catch(o){await jo(o)}}function RA(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function IA(r,e,t){const s=De(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function tg(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||CA(r,s)})}function CA(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Gg(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Jg(r))}function f0(r,e,t){for(const s of t)s instanceof bA?(r.Ru.addReference(s.key,e),Lx(r,s)):s instanceof SA?(he(Zg,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||CA(r,s.key)):we(19791,{wu:s})}function Lx(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(he(Zg,"New document in limbo: "+t),r.Eu.add(s),Jg(r))}function Jg(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new Ee(it.fromString(e)),s=r.fu.next();r.Au.set(s,new Rx(t)),r.du=r.du.insert(t,s),dA(r.remoteStore,new ns(Ir(Pf(t.path)),s,"TargetPurposeLimboResolution",Of.ce))}}async function Bu(r,e,t){const s=De(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((p,m)=>{h.push(s.pu(m,e,t).then(y=>{if((y||t)&&s.isPrimaryClient){const E=y?!y.fromCache:t?.targetChanges.get(m.targetId)?.current;s.sharedClientState.updateQueryState(m.targetId,E?"current":"not-current")}if(y){o.push(y);const E=qg.As(m.targetId,y);u.push(E)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(m,y){const E=De(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>ee.forEach(y,w=>ee.forEach(w.Es,L=>E.persistence.referenceDelegate.addReference(R,w.targetId,L)).next(()=>ee.forEach(w.ds,L=>E.persistence.referenceDelegate.removeReference(R,w.targetId,L)))))}catch(R){if(!zo(R))throw R;he(Hg,"Failed to update sequence numbers: "+R)}for(const R of y){const w=R.targetId;if(!R.fromCache){const L=E.Ms.get(w),q=L.snapshotVersion,ie=L.withLastLimboFreeSnapshotVersion(q);E.Ms=E.Ms.insert(w,ie)}}}(s.localStore,u))}async function Ux(r,e){const t=De(r);if(!t.currentUser.isEqual(e)){he(Zg,"User change. New user:",e.toKey());const s=await uA(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(p=>{p.forEach(m=>{m.reject(new ue(W.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Bu(t,s.Ls)}}function jx(r,e){const t=De(r),s=t.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let o=Le();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const p=t.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function DA(r){const e=De(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=wA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kx.bind(null,e),e.Pu.H_=bx.bind(null,e.eventManager),e.Pu.yu=Sx.bind(null,e.eventManager),e}function zx(r){const e=De(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vx.bind(null,e),e}class lf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return H2(this.persistence,new B2,e.initialUser,this.serializer)}Cu(e){return new lA(Fg.mi,this.serializer)}Du(e){return new W2}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lf.provider={build:()=>new lf};class Bx extends lf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ye(this.persistence.referenceDelegate instanceof af,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new R2(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new lA(s=>af.mi(s,t),this.serializer)}}class ng{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>h0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ux.bind(null,this.syncEngine),await _x(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tx}()}createDatastore(e){const t=jf(e.databaseInfo.databaseId),s=function(u){return new nx(u)}(e.databaseInfo);return function(u,h,p,m){return new ax(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new lx(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>h0(this.syncEngine,t,0),function(){return s0.v()?new s0:new Z2}())}createSyncEngine(e,t){return function(o,u,h,p,m,y,E){const R=new Ix(o,u,h,p,m,y);return E&&(R.gu=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const s=De(t);he(pa,"RemoteStore shutting down."),s.Ea.add(5),await zu(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ng.provider={build:()=>new ng};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="FirestoreClient";class Fx{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=tn.UNAUTHENTICATED,this.clientId=Ng.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{he(ds,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(he(ds,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new as;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Xg(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function mm(r,e){r.asyncQueue.verifyOperationInProgress(),he(ds,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await uA(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function d0(r,e){r.asyncQueue.verifyOperationInProgress();const t=await qx(r);he(ds,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>o0(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>o0(e.remoteStore,o)),r._onlineComponents=e}async function qx(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){he(ds,"Using user provided OfflineComponentProvider");try{await mm(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Co("Error using user provided cache. Falling back to memory cache: "+t),await mm(r,new lf)}}else he(ds,"Using default OfflineComponentProvider"),await mm(r,new Bx(void 0));return r._offlineComponents}async function NA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(he(ds,"Using user provided OnlineComponentProvider"),await d0(r,r._uninitializedComponentsProvider._online)):(he(ds,"Using default OnlineComponentProvider"),await d0(r,new ng))),r._onlineComponents}function Hx(r){return NA(r).then(e=>e.syncEngine)}async function rg(r){const e=await NA(r),t=e.eventManager;return t.onListen=Cx.bind(null,e.syncEngine),t.onUnlisten=Nx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Dx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xx.bind(null,e.syncEngine),t}function Gx(r,e,t={}){const s=new as;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,y){const E=new OA({next:w=>{E.Nu(),h.enqueueAndForget(()=>EA(u,R));const L=w.docs.has(p);!L&&w.fromCache?y.reject(new ue(W.UNAVAILABLE,"Failed to get document because the client is offline.")):L&&w.fromCache&&m&&m.source==="server"?y.reject(new ue(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(w)},error:w=>y.reject(w)}),R=new TA(Pf(p.path),E,{includeMetadataChanges:!0,qa:!0});return _A(u,R)}(await rg(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="firestore.googleapis.com",m0=!0;class g0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PA,this.ssl=m0}else this.host=e.host,this.ssl=e.ssl??m0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=oA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<A2)throw new ue(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xA(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ff{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ZO;switch(s.type){case"firstParty":return new nN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=p0.get(t);s&&(he("ComponentProvider","Removing Datastore"),p0.delete(t),s.terminate())}(this),Promise.resolve()}}function kA(r,e,t,s={}){r=fi(r,Ff);const o=ys(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&(Sf(`https://${p}`),Af("Firestore",!0)),u.host!==PA&&u.host!==p&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:s};if(!ca(m,h)&&(r._setSettings(m),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=tn.MOCK_USER;else{y=bb(s.mockUserToken,r._app?.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new ue(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new tn(R)}r._authCredentials=new JO(new vS(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ba(this.firestore,e,this._query)}}class Et{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Lu(t,Et._jsonSchema))return new Et(e,s||null,new Ee(it.fromString(t.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:Dt("string",Et._jsonSchemaVersion),referencePath:Dt("string")};class os extends ba{constructor(e,t,s){super(e,t,Pf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new Ee(e))}withConverter(e){return new os(this.firestore,e,this._path)}}function qo(r,e,...t){if(r=lt(r),_S("collection","path",e),r instanceof Ff){const s=it.fromString(e,...t);return DT(s),new os(r,null,s)}{if(!(r instanceof Et||r instanceof os))throw new ue(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return DT(s),new os(r.firestore,null,s)}}function qf(r,e,...t){if(r=lt(r),arguments.length===1&&(e=Ng.newId()),_S("doc","path",e),r instanceof Ff){const s=it.fromString(e,...t);return CT(s),new Et(r,null,new Ee(s))}{if(!(r instanceof Et||r instanceof os))throw new ue(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return CT(s),new Et(r.firestore,r instanceof os?r.converter:null,new Ee(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="AsyncQueue";class v0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hA(this,"async_queue_retry"),this._c=()=>{const s=pm();s&&he(y0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=pm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=pm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new as;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zo(e))throw e;he(y0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,mi("INTERNAL UNHANDLED ERROR: ",_0(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Qg.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:_0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function _0(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class ko extends Ff{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new v0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new v0(e),this._firestoreClient=void 0,await e}}}function Kx(r,e){const t=typeof r=="object"?r:xu(),s=typeof r=="string"?r:Jh,o=vs(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=vg("firestore");u&&kA(o,...u)}return o}function ey(r){if(r._terminated)throw new ue(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Yx(r),r._firestoreClient}function Yx(r){const e=r._freezeSettings(),t=function(o,u,h,p){return new _N(o,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,xA(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Fx(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(Xt.fromBase64String(e))}catch(t){throw new ue(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Kn(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lu(e,Kn._jsonSchema))return Kn.fromBase64String(e.bytes)}}Kn._jsonSchemaVersion="firestore/bytes/1.0",Kn._jsonSchema={type:Dt("string",Kn._jsonSchemaVersion),bytes:Dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Or._jsonSchemaVersion}}static fromJSON(e){if(Lu(e,Or._jsonSchema))return new Or(e.latitude,e.longitude)}}Or._jsonSchemaVersion="firestore/geoPoint/1.0",Or._jsonSchema={type:Dt("string",Or._jsonSchemaVersion),latitude:Dt("number"),longitude:Dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Nr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lu(e,Nr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Nr(e.vectorValues);throw new ue(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nr._jsonSchemaVersion="firestore/vectorValue/1.0",Nr._jsonSchema={type:Dt("string",Nr._jsonSchemaVersion),vectorValues:Dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=/^__.*__$/;class Qx{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Es(e,this.data,this.fieldMask,t,this.fieldTransforms):new Uu(e,this.data,t,this.fieldTransforms)}}class MA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Es(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function VA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:r})}}class ny{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ny({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return uf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(VA(this.Ac)&&$x.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Xx{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||jf(e)}Cc(e,t,s,o=!1){return new ny({Ac:e,methodName:t,Dc:s,path:Qt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ry(r){const e=r._freezeSettings(),t=jf(r._databaseId);return new Xx(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Wx(r,e,t,s,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);iy("Data must be an object, but it was:",h,s);const p=LA(s,h);let m,y;if(u.merge)m=new Nn(h.fieldMask),y=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const R of u.mergeFields){const w=ig(e,R,t);if(!h.contains(w))throw new ue(W.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);jA(E,w)||E.push(w)}m=new Nn(E),y=h.fieldTransforms.filter(R=>m.covers(R.field))}else m=null,y=h.fieldTransforms;return new Qx(new vn(p),m,y)}class Gf extends ty{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gf}}function Zx(r,e,t,s){const o=r.Cc(1,e,t);iy("Data must be an object, but it was:",o,s);const u=[],h=vn.empty();_s(s,(m,y)=>{const E=sy(e,m,t);y=lt(y);const R=o.yc(E);if(y instanceof Gf)u.push(E);else{const w=Fu(y,R);w!=null&&(u.push(E),h.set(E,w))}});const p=new Nn(u);return new MA(h,p,o.fieldTransforms)}function Jx(r,e,t,s,o,u){const h=r.Cc(1,e,t),p=[ig(e,s,t)],m=[o];if(u.length%2!=0)throw new ue(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<u.length;w+=2)p.push(ig(e,u[w])),m.push(u[w+1]);const y=[],E=vn.empty();for(let w=p.length-1;w>=0;--w)if(!jA(y,p[w])){const L=p[w];let q=m[w];q=lt(q);const ie=h.yc(L);if(q instanceof Gf)y.push(L);else{const Y=Fu(q,ie);Y!=null&&(y.push(L),E.set(L,Y))}}const R=new Nn(y);return new MA(E,R,h.fieldTransforms)}function eP(r,e,t,s=!1){return Fu(t,r.Cc(s?4:3,e))}function Fu(r,e){if(UA(r=lt(r)))return iy("Unsupported field value:",e,r),LA(r,e);if(r instanceof ty)return function(s,o){if(!VA(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=Fu(p,o.wc(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=lt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return FN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=st.fromDate(s);return{timestampValue:sf(o.serializer,u)}}if(s instanceof st){const u=new st(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sf(o.serializer,u)}}if(s instanceof Or)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Kn)return{bytesValue:eA(o.serializer,s._byteString)};if(s instanceof Et){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:zg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Nr)return function(h,p){return{mapValue:{fields:{[CS]:{stringValue:DS},[ef]:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw p.Sc("VectorValues must only contain numeric values.");return Lg(p.serializer,y)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${Df(s)}`)}(r,e)}function LA(r,e){const t={};return bS(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(r,(s,o)=>{const u=Fu(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function UA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof st||r instanceof Or||r instanceof Kn||r instanceof Et||r instanceof ty||r instanceof Nr)}function iy(r,e,t){if(!UA(t)||!ES(t)){const s=Df(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function ig(r,e,t){if((e=lt(e))instanceof Hf)return e._internalPath;if(typeof e=="string")return sy(r,e);throw uf("Field path arguments must be of type string or ",r,!1,void 0,t)}const tP=new RegExp("[~\\*/\\[\\]]");function sy(r,e,t){if(e.search(tP)>=0)throw uf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Hf(...e.split("."))._internalPath}catch{throw uf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function uf(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new ue(W.INVALID_ARGUMENT,p+r+m)}function jA(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ay("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nP extends zA{data(){return super.data()}}function ay(r,e){return typeof e=="string"?sy(r,e):e instanceof Hf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ue(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oy{}class BA extends oy{}function iP(r,e,...t){let s=[];e instanceof oy&&s.push(e),s=s.concat(t),function(u){const h=u.filter(m=>m instanceof uy).length,p=u.filter(m=>m instanceof ly).length;if(h>1||h>0&&p>0)throw new ue(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class ly extends BA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ly(e,t,s)}_apply(e){const t=this._parse(e);return FA(e._query,t),new ba(e.firestore,e.converter,Km(e._query,t))}_parse(e){const t=ry(e.firestore);return function(u,h,p,m,y,E,R){let w;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ue(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){b0(R,E);const q=[];for(const ie of R)q.push(T0(m,u,ie));w={arrayValue:{values:q}}}else w=T0(m,u,R)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||b0(R,E),w=eP(p,h,R,E==="in"||E==="not-in");return Ct.create(y,E,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class uy extends oy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uy(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:or.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const m of p)FA(h,m),h=Km(h,m)}(e._query,t),new ba(e.firestore,e.converter,Km(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cy extends BA{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new cy(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ue(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Iu(u,h)}(e._query,this._field,this._direction);return new ba(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Bo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function sP(r,e="asc"){const t=e,s=ay("orderBy",r);return cy._create(s,t)}function T0(r,e,t){if(typeof(t=lt(t))=="string"){if(t==="")throw new ue(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!LS(e)&&t.indexOf("/")!==-1)throw new ue(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!Ee.isDocumentKey(s))throw new ue(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return LT(r,new Ee(s))}if(t instanceof Et)return LT(r,t._key);throw new ue(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Df(t)}.`)}function b0(r,e){if(!Array.isArray(r)||r.length===0)throw new ue(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FA(r,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class aP{convertValue(e,t="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return _s(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){const t=e.fields?.[ef].arrayValue?.values?.map(s=>_t(s.doubleValue));return new Nr(t)}convertGeoPoint(e){return new Or(_t(e.latitude),_t(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=xf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Au(e));default:return null}}convertTimestamp(e){const t=us(e);return new st(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Ye(aA(s),9688,{name:e});const o=new wu(s.get(1),s.get(3)),u=new Ee(s.popFirst(5));return o.isEqual(t)||mi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class uu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ua extends zA{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Uh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ay("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ua._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ua._jsonSchemaVersion="firestore/documentSnapshot/1.0",ua._jsonSchema={type:Dt("string",ua._jsonSchemaVersion),bundleSource:Dt("string","DocumentSnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class Uh extends ua{data(e={}){return super.data(e)}}class wo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new uu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Uh(this._firestore,this._userDataWriter,s.key,s,new uu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new Uh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new uu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new Uh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new uu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return p.type!==0&&(y=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),E=h.indexOf(p.doc.key)),{type:lP(p.type),doc:m,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ng.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(r){r=fi(r,Et);const e=fi(r.firestore,ko);return Gx(ey(e),r._key).then(t=>GA(e,r,t))}wo._jsonSchemaVersion="firestore/querySnapshot/1.0",wo._jsonSchema={type:Dt("string",wo._jsonSchemaVersion),bundleSource:Dt("string","QuerySnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class qA extends aP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,t)}}function cP(r,e,t,...s){r=fi(r,Et);const o=fi(r.firestore,ko),u=ry(o);let h;return h=typeof(e=lt(e))=="string"||e instanceof Hf?Jx(u,"updateDoc",r._key,e,t,s):Zx(u,"updateDoc",r._key,e),HA(o,[h.toMutation(r._key,Cr.exists(!0))])}function qu(r,e){const t=fi(r.firestore,ko),s=qf(r),o=oP(r.converter,e);return HA(t,[Wx(ry(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Cr.exists(!1))]).then(()=>s)}function hP(r,...e){r=lt(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||E0(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(E0(e[s])){const m=e[s];e[s]=m.next?.bind(m),e[s+1]=m.error?.bind(m),e[s+2]=m.complete?.bind(m)}let u,h,p;if(r instanceof Et)h=fi(r.firestore,ko),p=Pf(r._key.path),u={next:m=>{e[s]&&e[s](GA(h,r,m))},error:e[s+1],complete:e[s+2]};else{const m=fi(r,ba);h=fi(m.firestore,ko),p=m._query;const y=new qA(h);u={next:E=>{e[s]&&e[s](new wo(h,y,m,E))},error:e[s+1],complete:e[s+2]},rP(r._query)}return function(y,E,R,w){const L=new OA(w),q=new TA(E,L,R);return y.asyncQueue.enqueueAndForget(async()=>_A(await rg(y),q)),()=>{L.Nu(),y.asyncQueue.enqueueAndForget(async()=>EA(await rg(y),q))}}(ey(h),p,o,u)}function HA(r,e){return function(s,o){const u=new as;return s.asyncQueue.enqueueAndForget(async()=>Px(await Hx(s),o,u)),u.promise}(ey(r),e)}function GA(r,e,t){const s=t.docs.get(e._key),o=new qA(r);return new ua(r,o,e._key,s,new uu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Uo=o})(_a),ar(new Yn("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new ko(new eN(s.getProvider("auth-internal")),new rN(h,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wu(y.options.projectId,E)}(h,o),h);return u={useFetchStreams:t,...u},p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),an(AT,wT,e),an(AT,wT,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="type.googleapis.com/google.protobuf.Int64Value",dP="type.googleapis.com/google.protobuf.UInt64Value";function KA(r,e){const t={};for(const s in r)r.hasOwnProperty(s)&&(t[s]=e(r[s]));return t}function cf(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(e=>cf(e));if(typeof r=="function"||typeof r=="object")return KA(r,e=>cf(e));throw new Error("Data cannot be encoded in JSON: "+r)}function Mo(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case fP:case dP:{const e=Number(r.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+r);return e}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(e=>Mo(e)):typeof r=="function"||typeof r=="object"?KA(r,e=>Mo(e)):r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _n extends Qn{constructor(e,t,s){super(`${hy}/${e}`,t||""),this.details=s,Object.setPrototypeOf(this,_n.prototype)}}function pP(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function hf(r,e){let t=pP(r),s=t,o;try{const u=e&&e.error;if(u){const h=u.status;if(typeof h=="string"){if(!S0[h])return new _n("internal","internal");t=S0[h],s=h}const p=u.message;typeof p=="string"&&(s=p),o=u.details,o!==void 0&&(o=Mo(o))}}catch{}return t==="ok"?null:new _n(t,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,t,s,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,fn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||t.get().then(u=>this.auth=u,()=>{}),this.messaging||s.get().then(u=>this.messaging=u,()=>{}),this.appCheck||o?.get().then(u=>this.appCheck=u,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="us-central1",gP=/^data: (.*?)(?:\n|$)/;function yP(r){let e=null;return{promise:new Promise((t,s)=>{e=setTimeout(()=>{s(new _n("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{e&&clearTimeout(e)}}}class vP{constructor(e,t,s,o,u=sg,h=(...p)=>fetch(...p)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new mP(e,t,s,o),this.cancelAllRequests=new Promise(p=>{this.deleteService=()=>Promise.resolve(p())});try{const p=new URL(u);this.customDomain=p.origin+(p.pathname==="/"?"":p.pathname),this.region=sg}catch{this.customDomain=null,this.region=u}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function _P(r,e,t){const s=ys(e);r.emulatorOrigin=`http${s?"s":""}://${e}:${t}`,s&&(Sf(r.emulatorOrigin),Af("Functions",!0))}function EP(r,e,t){const s=o=>bP(r,e,o,{});return s.stream=(o,u)=>AP(r,e,o,u),s}async function TP(r,e,t,s){t["Content-Type"]="application/json";let o;try{o=await s(r,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let u=null;try{u=await o.json()}catch{}return{status:o.status,json:u}}async function YA(r,e){const t={},s=await r.contextProvider.getContext(e.limitedUseAppCheckTokens);return s.authToken&&(t.Authorization="Bearer "+s.authToken),s.messagingToken&&(t["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=s.appCheckToken),t}function bP(r,e,t,s){const o=r._url(e);return SP(r,o,t,s)}async function SP(r,e,t,s){t=cf(t);const o={data:t},u=await YA(r,s),h=s.timeout||7e4,p=yP(h),m=await Promise.race([TP(e,o,u,r.fetchImpl),p.promise,r.cancelAllRequests]);if(p.cancel(),!m)throw new _n("cancelled","Firebase Functions instance was deleted.");const y=hf(m.status,m.json);if(y)throw y;if(!m.json)throw new _n("internal","Response is not valid JSON object.");let E=m.json.data;if(typeof E>"u"&&(E=m.json.result),typeof E>"u")throw new _n("internal","Response is missing data field.");return{data:Mo(E)}}function AP(r,e,t,s){const o=r._url(e);return wP(r,o,t,s||{})}async function wP(r,e,t,s){t=cf(t);const o={data:t},u=await YA(r,s);u["Content-Type"]="application/json",u.Accept="text/event-stream";let h;try{h=await r.fetchImpl(e,{method:"POST",body:JSON.stringify(o),headers:u,signal:s?.signal})}catch(w){if(w instanceof Error&&w.name==="AbortError"){const q=new _n("cancelled","Request was cancelled.");return{data:Promise.reject(q),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(q)}}}}}}const L=hf(0,null);return{data:Promise.reject(L),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(L)}}}}}}let p,m;const y=new Promise((w,L)=>{p=w,m=L});s?.signal?.addEventListener("abort",()=>{const w=new _n("cancelled","Request was cancelled.");m(w)});const E=h.body.getReader(),R=RP(E,p,m,s?.signal);return{stream:{[Symbol.asyncIterator](){const w=R.getReader();return{async next(){const{value:L,done:q}=await w.read();return{value:L,done:q}},async return(){return await w.cancel(),{done:!0,value:void 0}}}}},data:y}}function RP(r,e,t,s){const o=(h,p)=>{const m=h.match(gP);if(!m)return;const y=m[1];try{const E=JSON.parse(y);if("result"in E){e(Mo(E.result));return}if("message"in E){p.enqueue(Mo(E.message));return}if("error"in E){const R=hf(0,E);p.error(R),t(R);return}}catch(E){if(E instanceof _n){p.error(E),t(E);return}}},u=new TextDecoder;return new ReadableStream({start(h){let p="";return m();async function m(){if(s?.aborted){const y=new _n("cancelled","Request was cancelled");return h.error(y),t(y),Promise.resolve()}try{const{value:y,done:E}=await r.read();if(E){p.trim()&&o(p.trim(),h),h.close();return}if(s?.aborted){const w=new _n("cancelled","Request was cancelled");h.error(w),t(w),await r.cancel();return}p+=u.decode(y,{stream:!0});const R=p.split(`
`);p=R.pop()||"";for(const w of R)w.trim()&&o(w.trim(),h);return m()}catch(y){const E=y instanceof _n?y:hf(0,null);h.error(E),t(E)}}},cancel(){return r.cancel()}})}const A0="@firebase/functions",w0="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="auth-internal",CP="app-check-internal",DP="messaging-internal";function OP(r){const e=(t,{instanceIdentifier:s})=>{const o=t.getProvider("app").getImmediate(),u=t.getProvider(IP),h=t.getProvider(DP),p=t.getProvider(CP);return new vP(o,u,h,p,s)};ar(new Yn(hy,e,"PUBLIC").setMultipleInstances(!0)),an(A0,w0,r),an(A0,w0,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(r=xu(),e=sg){const s=vs(lt(r),hy).getImmediate({identifier:e}),o=vg("functions");return o&&$A(s,...o),s}function $A(r,e,t){_P(lt(r),e,t)}function xP(r,e,t){return EP(lt(r),e)}OP();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="firebasestorage.googleapis.com",PP="storageBucket",kP=120*1e3,MP=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Qn{constructor(e,t,s=0){super(gm(e),`Firebase Storage: ${t} (${gm(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pr;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pr||(Pr={}));function gm(r){return"storage/"+r}function VP(){const r="An unknown error occurred, please check the error payload for server response.";return new kr(Pr.UNKNOWN,r)}function LP(){return new kr(Pr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UP(){return new kr(Pr.CANCELED,"User canceled the upload/download.")}function jP(r){return new kr(Pr.INVALID_URL,"Invalid URL '"+r+"'.")}function zP(r){return new kr(Pr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function R0(r){return new kr(Pr.INVALID_ARGUMENT,r)}function XA(){return new kr(Pr.APP_DELETED,"The Firebase app was deleted.")}function BP(r){return new kr(Pr.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=ir.makeFromUrl(e,t)}catch{return new ir(e,"")}if(s.path==="")return s;throw zP(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(ye){ye.path.charAt(ye.path.length-1)==="/"&&(ye.path_=ye.path_.slice(0,-1))}const h="(/(.*))?$",p=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function y(ye){ye.path_=decodeURIComponent(ye.path)}const E="v[A-Za-z0-9_]+",R=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",L=new RegExp(`^https?://${R}/${E}/b/${o}/o${w}`,"i"),q={bucket:1,path:3},ie=t===QA?"(?:storage.googleapis.com|storage.cloud.google.com)":t,Y="([^?#]*)",de=new RegExp(`^https?://${ie}/${o}/${Y}`,"i"),ce=[{regex:p,indices:m,postModify:u},{regex:L,indices:q,postModify:y},{regex:de,indices:{bucket:1,path:2},postModify:y}];for(let ye=0;ye<ce.length;ye++){const re=ce[ye],fe=re.regex.exec(e);if(fe){const O=fe[re.indices.bucket];let A=fe[re.indices.path];A||(A=""),s=new ir(O,A),re.postModify(s);break}}if(s==null)throw jP(e);return s}}class FP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(r,e,t){let s=1,o=null,u=null,h=!1,p=0;function m(){return p===2}let y=!1;function E(...Y){y||(y=!0,e.apply(null,Y))}function R(Y){o=setTimeout(()=>{o=null,r(L,m())},Y)}function w(){u&&clearTimeout(u)}function L(Y,...de){if(y){w();return}if(Y){w(),E.call(null,Y,...de);return}if(m()||h){w(),E.call(null,Y,...de);return}s<64&&(s*=2);let ce;p===1?(p=2,ce=0):ce=(s+Math.random())*1e3,R(ce)}let q=!1;function ie(Y){q||(q=!0,w(),!y&&(o!==null?(Y||(p=2),clearTimeout(o),R(0)):Y||(p=1)))}return R(0),u=setTimeout(()=>{h=!0,ie(!0)},t),ie}function HP(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(r){return r!==void 0}function I0(r,e,t,s){if(s<e)throw R0(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>t)throw R0(`Invalid value for '${r}'. Expected ${t} or less.`)}function KP(r){const e=encodeURIComponent;let t="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var ff;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(ff||(ff={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=e.indexOf(r)!==-1;return t||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,t,s,o,u,h,p,m,y,E,R,w=!0,L=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=h,this.callback_=p,this.errorCallback_=m,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=R,this.retry=w,this.isUsingEmulator=L,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((q,ie)=>{this.resolve_=q,this.reject_=ie,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Th(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const h=p=>{const m=p.loaded,y=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,y)};this.progressCallback_!==null&&u.addUploadProgressListener(h),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(h),this.pendingConnection_=null;const p=u.getErrorCode()===ff.NO_ERROR,m=u.getStatus();if(!p||YP(m,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===ff.ABORT;s(!1,new Th(!1,null,E));return}const y=this.successCodes_.indexOf(m)!==-1;s(!0,new Th(y,u))})},t=(s,o)=>{const u=this.resolve_,h=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(p,p.getResponse());GP(m)?u(m):u()}catch(m){h(m)}else if(p!==null){const m=VP();m.serverResponse=p.getErrorText(),this.errorCallback_?h(this.errorCallback_(p,m)):h(m)}else if(o.canceled){const m=this.appDelete_?XA():UP();h(m)}else{const m=LP();h(m)}};this.canceled_?t(!1,new Th(!1,null,!0)):this.backoffId_=qP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Th{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function QP(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function XP(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WP(r,e){e&&(r["X-Firebase-GMPID"]=e)}function ZP(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function JP(r,e,t,s,o,u,h=!0,p=!1){const m=KP(r.urlParams),y=r.url+m,E=Object.assign({},r.headers);return WP(E,e),QP(E,t),XP(E,u),ZP(E,s),new $P(y,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function tk(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t){this._service=e,t instanceof ir?this._location=t:this._location=ir.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new df(e,t)}get root(){const e=new ir(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tk(this._location.path)}get storage(){return this._service}get parent(){const e=ek(this._location.path);if(e===null)return null;const t=new ir(this._location.bucket,e);return new df(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw BP(e)}}function C0(r,e){const t=e?.[PP];return t==null?null:ir.makeFromBucketSpec(t,r)}function nk(r,e,t,s={}){r.host=`${e}:${t}`;const o=ys(e);o&&(Sf(`https://${r.host}/b`),Af("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(r._overrideAuthToken=typeof u=="string"?u:bb(u,r.app.options.projectId))}class rk{constructor(e,t,s,o,u,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=h,this._bucket=null,this._host=QA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kP,this._maxUploadRetryTime=MP,this._requests=new Set,o!=null?this._bucket=ir.makeFromBucketSpec(o,this._host):this._bucket=C0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ir.makeFromBucketSpec(this._url,e):this._bucket=C0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){I0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){I0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new df(this,e)}_makeRequest(e,t,s,o,u=!0){if(this._deleted)return new FP(XA());{const h=JP(e,this._appId,s,o,t,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const D0="@firebase/storage",O0="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="storage";function ik(r=xu(),e){r=lt(r);const s=vs(r,WA).getImmediate({identifier:e}),o=vg("storage");return o&&ZA(s,...o),s}function ZA(r,e,t,s={}){nk(r,e,t,s)}function sk(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new rk(t,s,o,e,_a)}function ak(){ar(new Yn(WA,sk,"PUBLIC").setMultipleInstances(!0)),an(D0,O0,""),an(D0,O0,"esm2020")}ak();var ag,N0,Kf=function(){var r=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(r&&r.responseStart>0&&r.responseStart<performance.now())return r},JA=function(r){if(document.readyState==="loading")return"loading";var e=Kf();if(e){if(r<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||r<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||r<e.domComplete)return"dom-content-loaded"}return"complete"},ok=function(r){var e=r.nodeName;return r.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},fy=function(r,e){var t="";try{for(;r&&r.nodeType!==9;){var s=r,o=s.id?"#"+s.id:ok(s)+(s.classList&&s.classList.value&&s.classList.value.trim()&&s.classList.value.trim().length?"."+s.classList.value.trim().replace(/\s+/g,"."):"");if(t.length+o.length>(e||100)-1)return t||o;if(t=t?o+">"+t:o,s.id)break;r=s.parentNode}}catch{}return t},ew=-1,lk=function(){return ew},Hu=function(r){addEventListener("pageshow",function(e){e.persisted&&(ew=e.timeStamp,r(e))},!0)},dy=function(){var r=Kf();return r&&r.activationStart||0},ps=function(r,e){var t=Kf(),s="navigate";return lk()>=0?s="back-forward-cache":t&&(document.prerendering||dy()>0?s="prerender":document.wasDiscarded?s="restore":t.type&&(s=t.type.replace(/_/g,"-"))),{name:r,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:s}},Ho=function(r,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(r)){var s=new PerformanceObserver(function(o){Promise.resolve().then(function(){e(o.getEntries())})});return s.observe(Object.assign({type:r,buffered:!0},t||{})),s}}catch{}},ms=function(r,e,t,s){var o,u;return function(h){e.value>=0&&(h||s)&&((u=e.value-(o||0))||o===void 0)&&(o=e.value,e.delta=u,e.rating=function(p,m){return p>m[1]?"poor":p>m[0]?"needs-improvement":"good"}(e.value,t),r(e))}},py=function(r){requestAnimationFrame(function(){return requestAnimationFrame(function(){return r()})})},Yf=function(r){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&r()})},my=function(r){var e=!1;return function(){e||(r(),e=!0)}},Eo=-1,x0=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},pf=function(r){document.visibilityState==="hidden"&&Eo>-1&&(Eo=r.type==="visibilitychange"?r.timeStamp:0,uk())},P0=function(){addEventListener("visibilitychange",pf,!0),addEventListener("prerenderingchange",pf,!0)},uk=function(){removeEventListener("visibilitychange",pf,!0),removeEventListener("prerenderingchange",pf,!0)},tw=function(){return Eo<0&&(Eo=x0(),P0(),Hu(function(){setTimeout(function(){Eo=x0(),P0()},0)})),{get firstHiddenTime(){return Eo}}},gy=function(r){document.prerendering?addEventListener("prerenderingchange",function(){return r()},!0):r()},k0=[1800,3e3],ck=function(r,e){e=e||{},gy(function(){var t,s=tw(),o=ps("FCP"),u=Ho("paint",function(h){h.forEach(function(p){p.name==="first-contentful-paint"&&(u.disconnect(),p.startTime<s.firstHiddenTime&&(o.value=Math.max(p.startTime-dy(),0),o.entries.push(p),t(!0)))})});u&&(t=ms(r,o,k0,e.reportAllChanges),Hu(function(h){o=ps("FCP"),t=ms(r,o,k0,e.reportAllChanges),py(function(){o.value=performance.now()-h.timeStamp,t(!0)})}))})},M0=[.1,.25],hk=function(r,e){(function(t,s){s=s||{},ck(my(function(){var o,u=ps("CLS",0),h=0,p=[],m=function(E){E.forEach(function(R){if(!R.hadRecentInput){var w=p[0],L=p[p.length-1];h&&R.startTime-L.startTime<1e3&&R.startTime-w.startTime<5e3?(h+=R.value,p.push(R)):(h=R.value,p=[R])}}),h>u.value&&(u.value=h,u.entries=p,o())},y=Ho("layout-shift",m);y&&(o=ms(t,u,M0,s.reportAllChanges),Yf(function(){m(y.takeRecords()),o(!0)}),Hu(function(){h=0,u=ps("CLS",0),o=ms(t,u,M0,s.reportAllChanges),py(function(){return o()})}),setTimeout(o,0))}))})(function(t){var s=function(o){var u,h={};if(o.entries.length){var p=o.entries.reduce(function(y,E){return y&&y.value>E.value?y:E});if(p&&p.sources&&p.sources.length){var m=(u=p.sources).find(function(y){return y.node&&y.node.nodeType===1})||u[0];m&&(h={largestShiftTarget:fy(m.node),largestShiftTime:p.startTime,largestShiftValue:p.value,largestShiftSource:m,largestShiftEntry:p,loadState:JA(p.startTime)})}}return Object.assign(o,{attribution:h})}(t);r(s)},e)},nw=0,ym=1/0,bh=0,fk=function(r){r.forEach(function(e){e.interactionId&&(ym=Math.min(ym,e.interactionId),bh=Math.max(bh,e.interactionId),nw=bh?(bh-ym)/7+1:0)})},rw=function(){return ag?nw:performance.interactionCount||0},dk=function(){"interactionCount"in performance||ag||(ag=Ho("event",fk,{type:"event",buffered:!0,durationThreshold:0}))},nr=[],gu=new Map,iw=0,pk=function(){var r=Math.min(nr.length-1,Math.floor((rw()-iw)/50));return nr[r]},sw=[],mk=function(r){if(sw.forEach(function(o){return o(r)}),r.interactionId||r.entryType==="first-input"){var e=nr[nr.length-1],t=gu.get(r.interactionId);if(t||nr.length<10||r.duration>e.latency){if(t)r.duration>t.latency?(t.entries=[r],t.latency=r.duration):r.duration===t.latency&&r.startTime===t.entries[0].startTime&&t.entries.push(r);else{var s={id:r.interactionId,latency:r.duration,entries:[r]};gu.set(s.id,s),nr.push(s)}nr.sort(function(o,u){return u.latency-o.latency}),nr.length>10&&nr.splice(10).forEach(function(o){return gu.delete(o.id)})}}},yy=function(r){var e=self.requestIdleCallback||self.setTimeout,t=-1;return r=my(r),document.visibilityState==="hidden"?r():(t=e(r),Yf(r)),t},V0=[200,500],gk=function(r,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},gy(function(){var t;dk();var s,o=ps("INP"),u=function(p){yy(function(){p.forEach(mk);var m=pk();m&&m.latency!==o.value&&(o.value=m.latency,o.entries=m.entries,s())})},h=Ho("event",u,{durationThreshold:(t=e.durationThreshold)!==null&&t!==void 0?t:40});s=ms(r,o,V0,e.reportAllChanges),h&&(h.observe({type:"first-input",buffered:!0}),Yf(function(){u(h.takeRecords()),s(!0)}),Hu(function(){iw=rw(),nr.length=0,gu.clear(),o=ps("INP"),s=ms(r,o,V0,e.reportAllChanges)}))}))},Ro=[],es=[],og=0,vy=new WeakMap,Io=new Map,lg=-1,yk=function(r){Ro=Ro.concat(r),aw()},aw=function(){lg<0&&(lg=yy(vk))},vk=function(){Io.size>10&&Io.forEach(function(h,p){gu.has(p)||Io.delete(p)});var r=nr.map(function(h){return vy.get(h.entries[0])}),e=es.length-50;es=es.filter(function(h,p){return p>=e||r.includes(h)});for(var t=new Set,s=0;s<es.length;s++){var o=es[s];ow(o.startTime,o.processingEnd).forEach(function(h){t.add(h)})}var u=Ro.length-1-50;Ro=Ro.filter(function(h,p){return h.startTime>og&&p>u||t.has(h)}),lg=-1};sw.push(function(r){r.interactionId&&r.target&&!Io.has(r.interactionId)&&Io.set(r.interactionId,r.target)},function(r){var e,t=r.startTime+r.duration;og=Math.max(og,r.processingEnd);for(var s=es.length-1;s>=0;s--){var o=es[s];if(Math.abs(t-o.renderTime)<=8){(e=o).startTime=Math.min(r.startTime,e.startTime),e.processingStart=Math.min(r.processingStart,e.processingStart),e.processingEnd=Math.max(r.processingEnd,e.processingEnd),e.entries.push(r);break}}e||(e={startTime:r.startTime,processingStart:r.processingStart,processingEnd:r.processingEnd,renderTime:t,entries:[r]},es.push(e)),(r.interactionId||r.entryType==="first-input")&&vy.set(r,e),aw()});var ow=function(r,e){for(var t,s=[],o=0;t=Ro[o];o++)if(!(t.startTime+t.duration<r)){if(t.startTime>e)break;s.push(t)}return s},_k=function(r,e){N0||(N0=Ho("long-animation-frame",yk)),gk(function(t){var s=function(o){var u=o.entries[0],h=vy.get(u),p=u.processingStart,m=h.processingEnd,y=h.entries.sort(function(Y,de){return Y.processingStart-de.processingStart}),E=ow(u.startTime,m),R=o.entries.find(function(Y){return Y.target}),w=R&&R.target||Io.get(u.interactionId),L=[u.startTime+u.duration,m].concat(E.map(function(Y){return Y.startTime+Y.duration})),q=Math.max.apply(Math,L),ie={interactionTarget:fy(w),interactionTargetElement:w,interactionType:u.name.startsWith("key")?"keyboard":"pointer",interactionTime:u.startTime,nextPaintTime:q,processedEventEntries:y,longAnimationFrameEntries:E,inputDelay:p-u.startTime,processingDuration:m-p,presentationDelay:Math.max(q-m,0),loadState:JA(u.startTime)};return Object.assign(o,{attribution:ie})}(t);r(s)},e)},L0=[2500,4e3],vm={},Ek=function(r,e){(function(t,s){s=s||{},gy(function(){var o,u=tw(),h=ps("LCP"),p=function(E){s.reportAllChanges||(E=E.slice(-1)),E.forEach(function(R){R.startTime<u.firstHiddenTime&&(h.value=Math.max(R.startTime-dy(),0),h.entries=[R],o())})},m=Ho("largest-contentful-paint",p);if(m){o=ms(t,h,L0,s.reportAllChanges);var y=my(function(){vm[h.id]||(p(m.takeRecords()),m.disconnect(),vm[h.id]=!0,o(!0))});["keydown","click"].forEach(function(E){addEventListener(E,function(){return yy(y)},{once:!0,capture:!0})}),Yf(y),Hu(function(E){h=ps("LCP"),o=ms(t,h,L0,s.reportAllChanges),py(function(){h.value=performance.now()-E.timeStamp,vm[h.id]=!0,o(!0)})})}})})(function(t){var s=function(o){var u={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:o.value};if(o.entries.length){var h=Kf();if(h){var p=h.activationStart||0,m=o.entries[o.entries.length-1],y=m.url&&performance.getEntriesByType("resource").filter(function(q){return q.name===m.url})[0],E=Math.max(0,h.responseStart-p),R=Math.max(E,y?(y.requestStart||y.startTime)-p:0),w=Math.max(R,y?y.responseEnd-p:0),L=Math.max(w,m.startTime-p);u={element:fy(m.element),timeToFirstByte:E,resourceLoadDelay:R-E,resourceLoadDuration:w-R,elementRenderDelay:L-w,navigationEntry:h,lcpEntry:m},m.url&&(u.url=m.url),y&&(u.lcpResourceEntry=y)}}return Object.assign(o,{attribution:u})}(t);r(s)},e)};const lw="@firebase/installations",_y="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=1e4,cw=`w:${_y}`,hw="FIS_v2",Tk="https://firebaseinstallations.googleapis.com/v1",bk=3600*1e3,Sk="installations",Ak="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ma=new va(Sk,Ak,wk);function fw(r){return r instanceof Qn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw({projectId:r}){return`${Tk}/projects/${r}/installations`}function pw(r){return{token:r.token,requestStatus:2,expiresIn:Ik(r.expiresIn),creationTime:Date.now()}}async function mw(r,e){const s=(await e.json()).error;return ma.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function gw({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function Rk(r,{refreshToken:e}){const t=gw(r);return t.append("Authorization",Ck(e)),t}async function yw(r){const e=await r();return e.status>=500&&e.status<600?r():e}function Ik(r){return Number(r.replace("s","000"))}function Ck(r){return`${hw} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=dw(r),o=gw(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:hw,appId:r.appId,sdkVersion:cw},p={method:"POST",headers:o,body:JSON.stringify(h)},m=await yw(()=>fetch(s,p));if(m.ok){const y=await m.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:pw(y.authToken)}}else throw await mw("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=/^[cdef][\w-]{21}$/,ug="";function xk(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=Pk(r);return Nk.test(t)?t:ug}catch{return ug}}function Pk(r){return Ok(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=new Map;function Ew(r,e){const t=$f(r);Tw(t,e),kk(t,e)}function Tw(r,e){const t=_w.get(r);if(t)for(const s of t)s(e)}function kk(r,e){const t=Mk();t&&t.postMessage({key:r,fid:e}),Vk()}let la=null;function Mk(){return!la&&"BroadcastChannel"in self&&(la=new BroadcastChannel("[Firebase] FID Change"),la.onmessage=r=>{Tw(r.data.key,r.data.fid)}),la}function Vk(){_w.size===0&&la&&(la.close(),la=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="firebase-installations-database",Uk=1,ga="firebase-installations-store";let _m=null;function Ey(){return _m||(_m=Ib(Lk,Uk,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ga)}}})),_m}async function mf(r,e){const t=$f(r),o=(await Ey()).transaction(ga,"readwrite"),u=o.objectStore(ga),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&Ew(r,e.fid),e}async function bw(r){const e=$f(r),s=(await Ey()).transaction(ga,"readwrite");await s.objectStore(ga).delete(e),await s.done}async function Qf(r,e){const t=$f(r),o=(await Ey()).transaction(ga,"readwrite"),u=o.objectStore(ga),h=await u.get(t),p=e(h);return p===void 0?await u.delete(t):await u.put(p,t),await o.done,p&&(!h||h.fid!==p.fid)&&Ew(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(r){let e;const t=await Qf(r.appConfig,s=>{const o=jk(s),u=zk(r,o);return e=u.registrationPromise,u.installationEntry});return t.fid===ug?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function jk(r){const e=r||{fid:xk(),registrationStatus:0};return Sw(e)}function zk(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ma.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Bk(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Fk(r)}:{installationEntry:e}}async function Bk(r,e){try{const t=await Dk(r,e);return mf(r.appConfig,t)}catch(t){throw fw(t)&&t.customData.serverCode===409?await bw(r.appConfig):await mf(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Fk(r){let e=await U0(r.appConfig);for(;e.registrationStatus===1;)await vw(100),e=await U0(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Ty(r);return s||t}return e}function U0(r){return Qf(r,e=>{if(!e)throw ma.create("installation-not-found");return Sw(e)})}function Sw(r){return qk(r)?{fid:r.fid,registrationStatus:0}:r}function qk(r){return r.registrationStatus===1&&r.registrationTime+uw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk({appConfig:r,heartbeatServiceProvider:e},t){const s=Gk(r,t),o=Rk(r,t),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:cw,appId:r.appId}},p={method:"POST",headers:o,body:JSON.stringify(h)},m=await yw(()=>fetch(s,p));if(m.ok){const y=await m.json();return pw(y)}else throw await mw("Generate Auth Token",m)}function Gk(r,{fid:e}){return`${dw(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(r,e=!1){let t;const s=await Qf(r.appConfig,u=>{if(!Aw(u))throw ma.create("not-registered");const h=u.authToken;if(!e&&$k(h))return u;if(h.requestStatus===1)return t=Kk(r,e),u;{if(!navigator.onLine)throw ma.create("app-offline");const p=Xk(u);return t=Yk(r,p),p}});return t?await t:s.authToken}async function Kk(r,e){let t=await j0(r.appConfig);for(;t.authToken.requestStatus===1;)await vw(100),t=await j0(r.appConfig);const s=t.authToken;return s.requestStatus===0?by(r,e):s}function j0(r){return Qf(r,e=>{if(!Aw(e))throw ma.create("not-registered");const t=e.authToken;return Wk(t)?{...e,authToken:{requestStatus:0}}:e})}async function Yk(r,e){try{const t=await Hk(r,e),s={...e,authToken:t};return await mf(r.appConfig,s),t}catch(t){if(fw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await bw(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await mf(r.appConfig,s)}throw t}}function Aw(r){return r!==void 0&&r.registrationStatus===2}function $k(r){return r.requestStatus===2&&!Qk(r)}function Qk(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+bk}function Xk(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function Wk(r){return r.requestStatus===1&&r.requestTime+uw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(r){const e=r,{installationEntry:t,registrationPromise:s}=await Ty(e);return s?s.catch(console.error):by(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(r,e=!1){const t=r;return await eM(t),(await by(t,e)).token}async function eM(r){const{registrationPromise:e}=await Ty(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(r){if(!r||!r.options)throw Em("App Configuration");if(!r.name)throw Em("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Em(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Em(r){return ma.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="installations",nM="installations-internal",rM=r=>{const e=r.getProvider("app").getImmediate(),t=tM(e),s=vs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},iM=r=>{const e=r.getProvider("app").getImmediate(),t=vs(e,ww).getImmediate();return{getId:()=>Zk(t),getToken:o=>Jk(t,o)}};function sM(){ar(new Yn(ww,rM,"PUBLIC")),ar(new Yn(nM,iM,"PRIVATE"))}sM();an(lw,_y);an(lw,_y,"esm2020");const z0="@firebase/performance",cg="0.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=cg,aM="FB-PERF-TRACE-START",oM="FB-PERF-TRACE-STOP",hg="FB-PERF-TRACE-MEASURE",Iw="_wt_",Cw="_fp",Dw="_fcp",Ow="_fid",Nw="_lcp",lM="lcp_element",xw="_inp",uM="inp_interactionTarget",Pw="_cls",cM="cls_largestShiftTarget",kw="@firebase/performance/config",Mw="@firebase/performance/configexpire",hM="performance",Vw="Performance";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},nn=new va(hM,Vw,fM);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new wf(Vw);yi.logLevel=Me.INFO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tm,Lw;class Vt{constructor(e){if(this.window=e,!e)throw nn.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay),this.onLCP=Ek,this.onINP=_k,this.onCLS=hk}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,t,s){!this.performance||!this.performance.measure||this.performance.measure(e,t,s)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!yI()?(yi.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):Sb()?!0:(yi.info("IndexedDB is not supported by current browser"),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver(o=>{for(const u of o.getEntries())t(u)}).observe({entryTypes:[e]})}static getInstance(){return Tm===void 0&&(Tm=new Vt(Lw)),Tm}}function dM(r){Lw=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uw;function pM(r){const e=r.getId();return e.then(t=>{Uw=t}),e}function Sy(){return Uw}function mM(r){const e=r.getToken();return e.then(t=>{}),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(r,e){const t=r.length-e.length;if(t<0||t>1)throw nn.create("invalid String merger input");const s=[];for(let o=0;o<r.length;o++)s.push(r.charAt(o)),e.length>o&&s.push(e.charAt(o));return s.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bm;class dn{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=B0("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=B0("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12,this.logMaxFlushSize=40}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return bm===void 0&&(bm=new dn),bm}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yu;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.VISIBLE=1]="VISIBLE",r[r.HIDDEN=2]="HIDDEN"})(yu||(yu={}));const gM=["firebase_","google_","ga_"],yM=new RegExp("^[a-zA-Z]\\w*$"),vM=40,_M=100;function EM(){const r=Vt.getInstance().navigator;return r?.serviceWorker?r.serviceWorker.controller?2:3:1}function TM(){switch(Vt.getInstance().document.visibilityState){case"visible":return yu.VISIBLE;case"hidden":return yu.HIDDEN;default:return yu.UNKNOWN}}function bM(){const e=Vt.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function SM(r){return r.length===0||r.length>vM?!1:!gM.some(t=>r.startsWith(t))&&!!r.match(yM)}function AM(r){return r.length!==0&&r.length<=_M}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(r){const e=r.options?.appId;if(!e)throw nn.create("no app id");return e}function wM(r){const e=r.options?.projectId;if(!e)throw nn.create("no project id");return e}function RM(r){const e=r.options?.apiKey;if(!e)throw nn.create("no api key");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM="0.0.1",Dn={loggingEnabled:!0},CM="FIREBASE_INSTALLATIONS_AUTH";function DM(r,e){const t=OM();return t?(F0(t),Promise.resolve()):PM(r,e).then(F0).then(s=>NM(s),()=>{})}function OM(){const r=Vt.getInstance().localStorage;if(!r)return;const e=r.getItem(Mw);if(!e||!kM(e))return;const t=r.getItem(kw);if(t)try{return JSON.parse(t)}catch{return}}function NM(r){const e=Vt.getInstance().localStorage;!r||!e||(e.setItem(kw,JSON.stringify(r)),e.setItem(Mw,String(Date.now()+dn.getInstance().configTimeToLive*60*60*1e3)))}const xM="Could not fetch config, will use default configs";function PM(r,e){return mM(r.installations).then(t=>{const s=wM(r.app),o=RM(r.app),u=`https://firebaseremoteconfig.googleapis.com/v1/projects/${s}/namespaces/fireperf:fetch?key=${o}`,h=new Request(u,{method:"POST",headers:{Authorization:`${CM} ${t}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:t,app_id:jw(r.app),app_version:Rw,sdk_version:IM})});return fetch(h).then(p=>{if(p.ok)return p.json();throw nn.create("RC response not ok")})}).catch(()=>{yi.info(xM)})}function F0(r){if(!r)return r;const e=dn.getInstance(),t=r.entries||{};return t.fpr_enabled!==void 0?e.loggingEnabled=String(t.fpr_enabled)==="true":e.loggingEnabled=Dn.loggingEnabled,t.fpr_log_source?e.logSource=Number(t.fpr_log_source):Dn.logSource&&(e.logSource=Dn.logSource),t.fpr_log_endpoint_url?e.logEndPointUrl=t.fpr_log_endpoint_url:Dn.logEndPointUrl&&(e.logEndPointUrl=Dn.logEndPointUrl),t.fpr_log_transport_key?e.transportKey=t.fpr_log_transport_key:Dn.transportKey&&(e.transportKey=Dn.transportKey),t.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(t.fpr_vc_network_request_sampling_rate):Dn.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=Dn.networkRequestsSamplingRate),t.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(t.fpr_vc_trace_sampling_rate):Dn.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=Dn.tracesSamplingRate),t.fpr_log_max_flush_size?e.logMaxFlushSize=Number(t.fpr_log_max_flush_size):Dn.logMaxFlushSize&&(e.logMaxFlushSize=Dn.logMaxFlushSize),e.logTraceAfterSampling=q0(e.tracesSamplingRate),e.logNetworkAfterSampling=q0(e.networkRequestsSamplingRate),r}function kM(r){return Number(r)>Date.now()}function q0(r){return Math.random()<=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ay=1,Sm;function zw(r){return Ay=2,Sm=Sm||VM(r),Sm}function MM(){return Ay===3}function VM(r){return LM().then(()=>pM(r.installations)).then(e=>DM(r,e)).then(()=>H0(),()=>H0())}function LM(){const r=Vt.getInstance().document;return new Promise(e=>{if(r&&r.readyState!=="complete"){const t=()=>{r.readyState==="complete"&&(r.removeEventListener("readystatechange",t),e())};r.addEventListener("readystatechange",t)}else e()})}function H0(){Ay=3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=10*1e3,UM=5.5*1e3,jM=1e3,Fw=3,zM=65536,BM=new TextEncoder;let jh=Fw,Gn=[],G0=!1;function FM(){G0||(wy(UM),G0=!0)}function wy(r){setTimeout(()=>{jh<=0||(Gn.length>0&&qM(),wy(Bw))},r)}function qM(){const r=Gn.splice(0,jM),e=fg(r);HM(e).then(()=>{jh=Fw}).catch(()=>{Gn=[...r,...Gn],jh--,yi.info(`Tries left: ${jh}.`),wy(Bw)})}function fg(r){const e=r.map(s=>({source_extension_json_proto3:s.message,event_time_ms:String(s.eventTime)})),t={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:dn.getInstance().logSource,log_event:e};return JSON.stringify(t)}function HM(r){const e=dn.getInstance().getFlTransportFullUrl();return BM.encode(r).length<=zM&&navigator.sendBeacon&&navigator.sendBeacon(e,r)?Promise.resolve():fetch(e,{method:"POST",body:r})}function GM(r){if(!r.eventTime||!r.message)throw nn.create("invalid cc log");Gn=[...Gn,r]}function KM(r){return(...e)=>{const t=r(...e);GM({message:t,eventTime:Date.now()})}}function YM(){const r=dn.getInstance().getFlTransportFullUrl();for(;Gn.length>0;){const e=Gn.splice(-dn.getInstance().logMaxFlushSize),t=fg(e);if(!(navigator.sendBeacon&&navigator.sendBeacon(r,t))){Gn=[...Gn,...e];break}}if(Gn.length>0){const e=fg(Gn);fetch(r,{method:"POST",body:e}).catch(()=>{yi.info("Failed flushing queued events.")})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;function qw(r,e){vu||(vu={send:KM(XM),flush:YM}),vu.send(r,e)}function Sh(r){const e=dn.getInstance();!e.instrumentationEnabled&&r.isAuto||!e.dataCollectionEnabled&&!r.isAuto||Vt.getInstance().requiredApisAvailable()&&(MM()?Am(r):zw(r.performanceController).then(()=>Am(r),()=>Am(r)))}function $M(){vu&&vu.flush()}function Am(r){if(!Sy())return;const e=dn.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||qw(r,1)}function QM(r){const e=dn.getInstance();if(!e.instrumentationEnabled)return;const t=r.url,s=e.logEndPointUrl.split("?")[0],o=e.flTransportEndpointUrl.split("?")[0];t===s||t===o||!e.loggingEnabled||!e.logNetworkAfterSampling||qw(r,0)}function XM(r,e){return e===0?WM(r):ZM(r)}function WM(r){const e={url:r.url,http_method:r.httpMethod||0,http_response_code:200,response_payload_bytes:r.responsePayloadBytes,client_start_time_us:r.startTimeUs,time_to_response_initiated_us:r.timeToResponseInitiatedUs,time_to_response_completed_us:r.timeToResponseCompletedUs},t={application_info:Hw(r.performanceController.app),network_request_metric:e};return JSON.stringify(t)}function ZM(r){const e={name:r.name,is_auto:r.isAuto,client_start_time_us:r.startTimeUs,duration_us:r.durationUs};Object.keys(r.counters).length!==0&&(e.counters=r.counters);const t=r.getAttributes();Object.keys(t).length!==0&&(e.custom_attributes=t);const s={application_info:Hw(r.performanceController.app),trace_metric:e};return JSON.stringify(s)}function Hw(r){return{google_app_id:jw(r),app_instance_id:Sy(),web_app_info:{sdk_version:Rw,page_url:Vt.getInstance().getUrl(),service_worker_status:EM(),visibility_state:TM(),effective_connection_type:bM()},application_process_state:0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(r,e){const t=e;if(!t||t.responseStart===void 0)return;const s=Vt.getInstance().getTimeOrigin(),o=Math.floor((t.startTime+s)*1e3),u=t.responseStart?Math.floor((t.responseStart-t.startTime)*1e3):void 0,h=Math.floor((t.responseEnd-t.startTime)*1e3),p=t.name&&t.name.split("?")[0],m={performanceController:r,url:p,responsePayloadBytes:t.transferSize,startTimeUs:o,timeToResponseInitiatedUs:u,timeToResponseCompletedUs:h};QM(m)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=100,eV="_",tV=[Cw,Dw,Ow,Nw,Pw,xw];function nV(r,e){return r.length===0||r.length>JM?!1:e&&e.startsWith(Iw)&&tV.indexOf(r)>-1||!r.startsWith(eV)}function rV(r){const e=Math.floor(r);return e<r&&yi.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t,s=!1,o){this.performanceController=e,this.name=t,this.isAuto=s,this.state=1,this.customAttributes={},this.counters={},this.api=Vt.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${aM}-${this.randomId}-${this.name}`,this.traceStopMark=`${oM}-${this.randomId}-${this.name}`,this.traceMeasure=o||`${hg}-${this.randomId}-${this.name}`,o&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw nn.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw nn.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Sh(this)}record(e,t,s){if(e<=0)throw nn.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw nn.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(t*1e3),this.startTimeUs=Math.floor(e*1e3),s&&s.attributes&&(this.customAttributes={...s.attributes}),s&&s.metrics)for(const o of Object.keys(s.metrics))isNaN(Number(s.metrics[o]))||(this.counters[o]=Math.floor(Number(s.metrics[o])));Sh(this)}incrementMetric(e,t=1){this.counters[e]===void 0?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){if(nV(e,this.name))this.counters[e]=rV(t??0);else throw nn.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const s=SM(e),o=AM(t);if(s&&o){this.customAttributes[e]=t;return}if(!s)throw nn.create("invalid attribute name",{attributeName:e});if(!o)throw nn.create("invalid attribute value",{attributeValue:t})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return{...this.customAttributes}}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(t.duration*1e3),this.startTimeUs=Math.floor((t.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,t,s,o,u){const h=Vt.getInstance().getUrl();if(!h)return;const p=new Ou(e,Iw+h,!0),m=Math.floor(Vt.getInstance().getTimeOrigin()*1e3);p.setStartTime(m),t&&t[0]&&(p.setDuration(Math.floor(t[0].duration*1e3)),p.putMetric("domInteractive",Math.floor(t[0].domInteractive*1e3)),p.putMetric("domContentLoadedEventEnd",Math.floor(t[0].domContentLoadedEventEnd*1e3)),p.putMetric("loadEventEnd",Math.floor(t[0].loadEventEnd*1e3)));const y="first-paint",E="first-contentful-paint";if(s){const R=s.find(L=>L.name===y);R&&R.startTime&&p.putMetric(Cw,Math.floor(R.startTime*1e3));const w=s.find(L=>L.name===E);w&&w.startTime&&p.putMetric(Dw,Math.floor(w.startTime*1e3)),u&&p.putMetric(Ow,Math.floor(u*1e3))}this.addWebVitalMetric(p,Nw,lM,o.lcp),this.addWebVitalMetric(p,Pw,cM,o.cls),this.addWebVitalMetric(p,xw,uM,o.inp),Sh(p),$M()}static addWebVitalMetric(e,t,s,o){o&&(e.putMetric(t,Math.floor(o.value*1e3)),o.elementAttribution&&e.putAttribute(s,o.elementAttribution))}static createUserTimingTrace(e,t){const s=new Ou(e,t,!1,t);Sh(s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh={},Y0=!1,Gw;function $0(r){Sy()&&(setTimeout(()=>sV(r),0),setTimeout(()=>iV(r),0),setTimeout(()=>aV(r),0))}function iV(r){const e=Vt.getInstance(),t=e.getEntriesByType("resource");for(const s of t)K0(r,s);e.setupObserver("resource",s=>K0(r,s))}function sV(r){const e=Vt.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>wm(r)):e.document.addEventListener("unload",()=>wm(r)),e.document.addEventListener("visibilitychange",()=>{e.document.visibilityState==="hidden"&&wm(r)}),e.onFirstInputDelay&&e.onFirstInputDelay(t=>{Gw=t}),e.onLCP(t=>{zh.lcp={value:t.value,elementAttribution:t.attribution?.element}}),e.onCLS(t=>{zh.cls={value:t.value,elementAttribution:t.attribution?.largestShiftTarget}}),e.onINP(t=>{zh.inp={value:t.value,elementAttribution:t.attribution?.interactionTarget}})}function aV(r){const e=Vt.getInstance(),t=e.getEntriesByType("measure");for(const s of t)Q0(r,s);e.setupObserver("measure",s=>Q0(r,s))}function Q0(r,e){const t=e.name;t.substring(0,hg.length)!==hg&&Ou.createUserTimingTrace(r,t)}function wm(r){if(!Y0){Y0=!0;const e=Vt.getInstance(),t=e.getEntriesByType("navigation"),s=e.getEntriesByType("paint");setTimeout(()=>{Ou.createOobTrace(r,t,s,zh,Gw)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}_init(e){this.initialized||(e?.dataCollectionEnabled!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),e?.instrumentationEnabled!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),Vt.getInstance().requiredApisAvailable()?Ab().then(t=>{t&&(FM(),zw(this).then(()=>$0(this),()=>$0(this)),this.initialized=!0)}).catch(t=>{yi.info(`Environment doesn't support IndexedDB: ${t}`)}):yi.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){dn.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return dn.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){dn.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return dn.getInstance().dataCollectionEnabled}}const lV="[DEFAULT]";function uV(r=xu()){return r=lt(r),vs(r,"performance").getImmediate()}const cV=(r,{options:e})=>{const t=r.getProvider("app").getImmediate(),s=r.getProvider("installations-internal").getImmediate();if(t.name!==lV)throw nn.create("FB not default");if(typeof window>"u")throw nn.create("no window");dM(window);const o=new oV(t,s);return o._init(e),o};function hV(){ar(new Yn("performance",cV,"PUBLIC")),an(z0,cg),an(z0,cg,"esm2020")}hV();const fV={us:{apiKey:"...",authDomain:"claimso-us.firebaseapp.com",projectId:"claimso-us"},europe:{apiKey:"...",authDomain:"claimso-europe.firebaseapp.com",projectId:"claimso-europe"},apac:{apiKey:"...",authDomain:"claimso-apac.firebaseapp.com",projectId:"claimso-apac"}};let Rm=null;class dV{constructor(){if(Rm)return Rm;const e=this.detectRegion(),t=fV[e];if(!t||!t.projectId){console.error(`FATAL: Firebase config for region "${e}" is missing.`);return}const s=Cb(t,"claimso-global-app");this.globalClient.auth=$O(s),this.globalClient.db=Kx(s),this.functions=NP(s,e),this.globalClient.storage=ik(s),this.globalClient.perf=uV(s),this.region=e,this.projectId=t.projectId,console.log(`Claimso Global Client initialized for project ${this.projectId} in region ${this.region}`),Rm=this}detectRegion(){try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone;if(e.startsWith("Europe/"))return"europe";if(e.startsWith("Asia/"))return"apac"}catch(e){console.warn("Could not determine timezone, defaulting to 'us'.",e)}return"us"}connectToEmulators(){console.warn("DEV MODE: Connecting to local Firebase Emulators. Make sure they are running!"),kA(this.globalClient.db,"localhost",8080),$A(this.functions,"localhost",5001),Qb(this.globalClient.auth,"http://localhost:9099"),ZA(this.globalClient.storage,"localhost",9199)}getFunction(e){return xP(this.functions,e)}}const rt=new dV,dg=async r=>{const e=await uP(qf(rt.globalClient.db,"users",r));return e.exists()?e.data():null},Kw=async r=>await rt.getFunction("updateUserSyncPreference")({isEnabled:r}),Yw=async(r,e,t)=>{const s=qf(rt.globalClient.db,"users",r,"purchases",e),o={...t,missingInfo:[]};await cP(s,o)},pV=async(r,e)=>await rt.getFunction("archivePurchase")({purchaseId:r,reason:e}),mV=async(r,e,t={})=>{const o=await rt.getFunction("getProtectionQuotes")({category:r,region:rt.region,productInfo:e,preferences:t});return{...o.data,quotes:o.data.quotes.map(u=>({...u,validUntil:Date.now()+900*1e3}))}},gV=Object.freeze(Object.defineProperty({__proto__:null,archivePurchaseInService:pV,getProtectionQuotes:mV,getUserData:dg,globalClient:rt,updatePurchase:Yw,updateUserSyncPreference:Kw},Symbol.toStringTag,{value:"Module"})),yV=()=>{const[r,e]=ve.useState(null),[t,s]=ve.useState(null),[o,u]=ve.useState(!0);return ve.useEffect(()=>{const m=VD(rt.auth,async y=>{if(y){e(y);const E=await dg(y.uid);s(E)}else e(null),s(null);u(!1)});return()=>m()},[]),{user:r,userData:t,isLoading:o,logout:async()=>{try{await LD(rt.auth),console.log("User logged out successfully.")}catch(m){console.error("Error logging out:",m.message)}},refetchUserData:async()=>{if(r){const m=await dg(r.uid);s(m)}}}},vV=r=>{const[e,t]=ve.useState([]),[s,o]=ve.useState(!0),[u,h]=ve.useState(null);return ve.useEffect(()=>{if(!r){t([]),o(!1),h(null);return}o(!0),h(null);const p=qf(rt.db,"users",r),m=qo(p,"purchases"),y=iP(m,sP("purchaseDate","desc")),E=hP(y,R=>{const w=R.docs.map(L=>{const q=L.data();return q.purchaseDate&&q.purchaseDate.toDate&&(q.purchaseDate=q.purchaseDate.toDate()),q.returnEligibleUntil&&q.returnEligibleUntil.toDate&&(q.returnEligibleUntil=q.returnEligibleUntil.toDate()),q.protectionEnds&&q.protectionEnds.toDate&&(q.protectionEnds=q.protectionEnds.toDate()),{id:L.id,...q}});t(w),o(!1)},R=>{console.error("Failed to fetch purchases:",R),h("Failed to load purchases. Please try again."),o(!1)});return()=>E()},[r]),{purchases:e,isLoading:s,error:u}},Xf=(r={})=>{const e=rt.auth.currentUser;if(!e)return console.error("SIMULATION: No user logged in."),null;const t=new Date,s=new Date;s.setDate(t.getDate()+30);const o=new Date;return o.setMonth(t.getMonth()+12),{userId:e.uid,name:"Simulated Product",price:"99.99",retailer:"sim-mart.com",purchaseDate:t,returnExpires:s,warrantyExpires:o,category:"electronics",missingInfo:[],lifecycleStatus:"active",...r}},_V=async()=>{const r=Xf({name:"Simulated 4K Monitor (Price Drop)",postPurchaseType:"price_drop",originalPrice:250,currentPrice:199.99,price:"250.00"});r&&(await qu(qo(rt.db,"users",r.userId,"purchases"),r),console.log("SIMULATION: 'Price Drop' purchase created."))},EV=async()=>{const r=Xf({name:"Simulated Smart Watch (Warranty)",postPurchaseType:"warranty"});r&&(await qu(qo(rt.db,"users",r.userId,"purchases"),r),console.log("SIMULATION: 'Warranty' purchase created."))},TV=async()=>{const r=Xf({name:"Simulated High-End Camera (Missing Info)",postPurchaseType:"warranty",missingInfo:[{field:"serialNumber",prompt:"Please enter the camera's Serial Number.",importance:"high"},{field:"receiptPhoto",prompt:"Upload a photo of your receipt.",importance:"medium"}]});r&&(await qu(qo(rt.db,"users",r.userId,"purchases"),r),console.log("SIMULATION: 'Missing Info' purchase created."))},bV=async()=>{const r=Xf({name:"Simulated Old Phone (Archived)",postPurchaseType:"archived",lifecycleStatus:"archived_sold"});r&&(await qu(qo(rt.db,"users",r.userId,"purchases"),r),console.log("SIMULATION: 'Archived' purchase created."))},sn=({variant:r="primary",onClick:e,disabled:t=!1,type:s="button",children:o,className:u="",style:h={},elevation:p=0,...m})=>{let y="";switch(r){case"primary":y="btn-primary";break;case"secondary":y="btn-secondary";break;case"danger":y="btn-danger";break;default:y="btn-primary"}const E=p>0?`elevation-${p}`:"",R=`${y} ${E} ${u}`.trim();return z.jsx("button",{type:s,onClick:e,disabled:t,className:R,style:h,...m,children:o})},SV=()=>{const r={position:"fixed",bottom:"10px",left:"10px",backgroundColor:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(10px)",border:"1px solid var(--border-color)",borderRadius:"12px",padding:"10px",zIndex:9999,display:"flex",flexDirection:"column",gap:"8px",boxShadow:"0 4px 20px rgba(0,0,0,0.4)"},e={color:"white",fontWeight:"600",fontSize:"14px",textAlign:"center",margin:"0 0 5px 0",borderBottom:"1px solid var(--border-color)",paddingBottom:"5px"};return z.jsxs("div",{style:r,children:[z.jsx("h3",{style:e,children:"🔧 Debug Panel"}),z.jsx(sn,{onClick:_V,variant:"secondary",style:{fontSize:"11px",padding:"4px 8px"},children:"+ Price Drop Item"}),z.jsx(sn,{onClick:EV,variant:"secondary",style:{fontSize:"11px",padding:"4px 8px"},children:"+ Warranty Item"}),z.jsx(sn,{onClick:TV,variant:"secondary",style:{fontSize:"11px",padding:"4px 8px"},children:"+ Missing Info Item"}),z.jsx(sn,{onClick:bV,variant:"secondary",style:{fontSize:"11px",padding:"4px 8px"},children:"+ Archived Item"})]})};class X0 extends Error{constructor(e,t,s={}){super(t),this.name="PaymentError",this.code=e,this.details=s}}class AV{constructor(){this.correlationId=null}generateCorrelationId(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}async createCheckoutSession(e){this.correlationId=this.generateCorrelationId(),console.log("SERVICE: Creating Stripe Checkout session...");const{auth:t,region:s}=rt,o=rt.auth.currentUser?.uid,u=rt.auth.currentUser?.email;if(!o||!u)throw new X0("AUTH_REQUIRED","User must be signed in to make a purchase.");try{const p=await rt.getFunction("createCheckoutSession")({userId:o,userEmail:u,plan:e,correlationId:this.correlationId});if(!p.data.url)throw new Error("Stripe Checkout URL was not returned from the backend.");return p.data}catch(h){throw await this._logClientError("create_checkout_session",h),new Error("Could not prepare the secure checkout page. Please try again.")}}_handlePaymentError(e){const s={COMPLIANCE_FAILED:"Payment cannot be processed due to regional requirements.",FRAUD_DETECTED:"This transaction has been flagged for security review.","functions/invalid-argument":"Missing required information for payment.","functions/internal":"An internal server error occurred. Please try again later."}[e.code]||"An unexpected error occurred during payment processing.";return new X0(e.code,s,{correlationId:this.correlationId,originalError:e})}async _logClientError(e,t){try{await qu(qo(rt.globalClient.db,"client_errors"),{operation:e,error:{code:t.code,message:t.message},correlationId:this.correlationId,timestamp:new Date,userAgent:navigator.userAgent,url:window.location.href,region:rt.region,projectId:rt.projectId})}catch(s){console.error("Failed to log client error:",s)}}}const W0=new AV,wV=({purchase:r,onAction:e})=>{const t=p=>{},s=p=>{};let o,u=!1,h="View Details";if(r.missingInfo&&r.missingInfo.length>0)o=z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[z.jsx("span",{className:"text-secondary",style:{fontSize:"12px",color:"var(--accent-danger)"},children:"Action Required"}),z.jsx(sn,{onClick:()=>e(r,"add_missing_info"),variant:"primary",style:{padding:"6px 12px",fontSize:"12px",lineHeight:"1.2",height:"30px"},children:"Add Info"})]});else switch(r.postPurchaseType){case"price_drop":r.originalPrice&&r.currentPrice&&r.originalPrice-r.currentPrice,o=z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[z.jsxs("span",{className:"text-secondary",style:{fontSize:"12px"},children:["Savings: ",z.jsx("span",{style:{color:"#50E3C2",fontWeight:"700"},children:s()})]}),z.jsx(sn,{onClick:()=>e(r,"price_drop"),variant:"primary",style:{padding:"6px 12px",fontSize:"12px",lineHeight:"1.2",height:"30px"},children:"Claim"})]});break;case"warranty":const p=r.missingInfo&&r.missingInfo.length>0;o=z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[z.jsx("span",{className:"text-secondary",style:{fontSize:"12px"},children:p?"Details needed to file claim":`Warranty until ${t(r.warrantyExpires)}`}),z.jsx(sn,{onClick:()=>e(),variant:"primary",style:{padding:"6px 12px",fontSize:"12px",lineHeight:"1.2",height:"30px"},children:p?"Complete to Claim":"File a Claim"})]});break;default:u=!0,o=z.jsx("p",{className:"text-tertiary",style:{fontSize:"12px"},children:"Details unavailable."});break}return z.jsxs("div",{className:"dark-glass",style:{width:"260px",flexShrink:0,marginRight:"var(--spacing-4)",display:"flex",flexDirection:"column"},children:[z.jsxs("div",{style:{padding:"var(--spacing-4)",borderBottom:"0"},children:[" ",z.jsx("h4",{style:{margin:"0 0 var(--spacing-2) 0",fontSize:"14px",lineHeight:"1.3",fontWeight:"600"},className:"text-primary",children:r.name||"Unknown Product"}),z.jsx("p",{style:{margin:"0",fontSize:"12px"},className:"text-secondary",children:r.retailer||"Unknown Retailer"})]}),z.jsx("div",{style:{padding:"var(--spacing-3)",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center"},children:o}),u&&z.jsx("div",{style:{padding:"var(--spacing-2)",borderTop:"1px solid var(--border-color)",marginTop:"auto"},children:z.jsx(sn,{onClick:()=>e(r,"view_details"),variant:"primary",style:{width:"100%"},children:h})})]})},Im=()=>z.jsxs("div",{className:"skeleton-card",style:{flexShrink:0,marginRight:"var(--spacing-3)"},children:[z.jsx("div",{className:"skeleton skeleton-text",style:{width:"80%"}}),z.jsx("div",{className:"skeleton skeleton-text-short",style:{width:"50%"}}),z.jsx("div",{className:"skeleton skeleton-button",style:{marginTop:"auto"}})]}),Z0=({title:r,items:e,emptyMessage:t,onCardAction:s,isLoading:o})=>z.jsxs("div",{children:[z.jsx("h3",{style:{fontSize:"14px",color:"var(--text-primary)",marginBottom:"var(--spacing-3)",fontWeight:"600",textAlign:"center"},children:r}),z.jsx("div",{style:{display:"flex",overflowX:"auto",padding:"0 var(--spacing-2) var(--spacing-3) var(--spacing-2)",scrollbarWidth:"none"},children:o?z.jsxs(z.Fragment,{children:[z.jsx(Im,{}),z.jsx(Im,{}),z.jsx(Im,{})]}):e.length===0?z.jsx("div",{className:"dark-glass flex-center",style:{padding:"var(--spacing-4)",height:"90px",borderRadius:"12px",width:"100%"},children:z.jsx("p",{className:"text-tertiary",style:{fontSize:"12px",textAlign:"center"},children:t})}):e.map(u=>z.jsx(wV,{purchase:u,onAction:s},u.id))})]}),$w=({name:r,size:e=18,color:t,style:s={}})=>z.jsx("span",{className:"material-symbols-outlined",style:{fontSize:`${e}px`,color:t||"inherit",cursor:"inherit",...s},children:r}),Qw=({isOpen:r,onClose:e,children:t,theme:s="dark",customStyles:o={}})=>{const u=ve.useRef(null),h=s==="light"?"light-glass":"dark-glass";if(ve.useEffect(()=>{if(!r)return;const m=y=>{u.current&&!u.current.contains(y.target)&&e()};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[r,e]),!r)return null;const p={position:"fixed",top:"65px",right:"var(--spacing-4)"};return z.jsx("div",{ref:u,className:h,style:{...p,...o,zIndex:1e3,minWidth:"180px",animation:"fadeInPop 0.15s ease-out forwards",boxShadow:"0 4px 12px rgba(0,0,0,0.25)"},children:t})},RV=({isOpen:r,onClose:e,onAction:t,anchorEl:s})=>{if(!r)return null;const[o,u]=ve.useState({top:0,left:0,opacity:0});ve.useEffect(()=>{if(s){const y=s.getBoundingClientRect();u({top:y.bottom+window.scrollY+4,left:y.left+window.scrollX-160,opacity:1})}},[s]);const h=s?{...o,position:"fixed",minWidth:"200px",transition:"opacity 0.1s ease-in-out"}:{},p=y=>{t(y),e()},m=[{text:"Add/Edit Details",action:"edit_details",icon:"edit"},{text:"Archive Purchase...",action:"archive",icon:"archive"}];return z.jsx(Qw,{isOpen:r,onClose:e,customStyles:h,children:z.jsx("ul",{style:{listStyle:"none",margin:0,padding:"var(--spacing-2) 0"},children:m.map(y=>z.jsx("li",{children:z.jsxs("button",{onClick:()=>p(y.action),style:{background:"none",border:"none",color:"var(--text-primary)",width:"100%",padding:"var(--spacing-2) var(--spacing-4)",textAlign:"left",display:"flex",alignItems:"center",gap:"var(--spacing-3)",cursor:"pointer"},className:"popover-menu-item",children:[z.jsx($w,{name:y.icon,size:20,color:"var(--text-secondary)"}),z.jsx("span",{style:{fontSize:"14px"},children:y.text})]})},y.action))})})},Xw=document.createElement("style");Xw.innerHTML=`
  .popover-menu-item:hover {
    background-color: var(--accent-secondary);
  }
`;document.head.appendChild(Xw);const IV=({purchase:r,onAction:e})=>{const[t,s]=ve.useState(!1),o=ve.useRef(null),u=h=>{e(r,h)};return z.jsx("div",{style:{display:"flex",alignItems:"center",padding:"var(--spacing-3) 0",borderBottom:"1px solid var(--border-color)",gap:"var(--spacing-3)"},children:z.jsxs("div",{style:{flexShrink:0,display:"flex",alignItems:"center",gap:"var(--spacing-2)"},children:[z.jsx(sn,{onClick:()=>u("buy_again"),variant:"primary",disabled:!r.productUrl,style:{padding:"4px 10px",fontSize:"11px",whiteSpace:"nowrap"},children:"Buy Again"}),z.jsx("button",{ref:o,onClick:()=>s(!0),style:{background:"none",border:"none",padding:"var(--spacing-2)",cursor:"pointer",borderRadius:"50%"},className:"popover-menu-item","aria-label":"Manage purchase",children:z.jsx($w,{name:"more_vert",color:"var(--text-secondary)"})}),z.jsx(RV,{isOpen:t,onClose:()=>s(!1),onAction:u,anchorEl:o.current})]})})},CV=({items:r,emptyMessage:e,onItemAction:t})=>z.jsx("div",{style:{height:"100%",display:"flex",flexDirection:"column",overflowY:"auto"},children:r.length===0?z.jsx("div",{className:"elevation-1",style:{backgroundColor:"var(--md3-surface)",padding:"var(--md3-spacing-4)",borderRadius:"12px",textAlign:"center",color:"var(--md3-on-surface-variant)",fontSize:"13px",display:"flex",alignItems:"center",justifyContent:"left",lineHeight:"1.3",flexGrow:1},children:z.jsx("p",{children:e})}):z.jsx("div",{style:{overflowY:"auto",maxHeight:"200px",paddingRight:"var(--md3-spacing-2)"},children:r.map(s=>z.jsx(IV,{purchase:s,onAction:t},s.id))})});var Ah={exports:{}};/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Ww=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],gf=Ww.join(","),Zw=typeof Element>"u",ya=Zw?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,yf=!Zw&&Element.prototype.getRootNode?function(r){var e;return r==null||(e=r.getRootNode)===null||e===void 0?void 0:e.call(r)}:function(r){return r?.ownerDocument},vf=function r(e,t){var s;t===void 0&&(t=!0);var o=e==null||(s=e.getAttribute)===null||s===void 0?void 0:s.call(e,"inert"),u=o===""||o==="true",h=u||t&&e&&r(e.parentNode);return h},DV=function(e){var t,s=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return s===""||s==="true"},Jw=function(e,t,s){if(vf(e))return[];var o=Array.prototype.slice.apply(e.querySelectorAll(gf));return t&&ya.call(e,gf)&&o.unshift(e),o=o.filter(s),o},e1=function r(e,t,s){for(var o=[],u=Array.from(e);u.length;){var h=u.shift();if(!vf(h,!1))if(h.tagName==="SLOT"){var p=h.assignedElements(),m=p.length?p:h.children,y=r(m,!0,s);s.flatten?o.push.apply(o,y):o.push({scopeParent:h,candidates:y})}else{var E=ya.call(h,gf);E&&s.filter(h)&&(t||!e.includes(h))&&o.push(h);var R=h.shadowRoot||typeof s.getShadowRoot=="function"&&s.getShadowRoot(h),w=!vf(R,!1)&&(!s.shadowRootFilter||s.shadowRootFilter(h));if(R&&w){var L=r(R===!0?h.children:R.children,!0,s);s.flatten?o.push.apply(o,L):o.push({scopeParent:h,candidates:L})}else u.unshift.apply(u,h.children)}}return o},t1=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},ts=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||DV(e))&&!t1(e)?0:e.tabIndex},OV=function(e,t){var s=ts(e);return s<0&&t&&!t1(e)?0:s},NV=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},n1=function(e){return e.tagName==="INPUT"},xV=function(e){return n1(e)&&e.type==="hidden"},PV=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(s){return s.tagName==="SUMMARY"});return t},kV=function(e,t){for(var s=0;s<e.length;s++)if(e[s].checked&&e[s].form===t)return e[s]},MV=function(e){if(!e.name)return!0;var t=e.form||yf(e),s=function(p){return t.querySelectorAll('input[type="radio"][name="'+p+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=s(window.CSS.escape(e.name));else try{o=s(e.name)}catch(h){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",h.message),!1}var u=kV(o,e.form);return!u||u===e},VV=function(e){return n1(e)&&e.type==="radio"},LV=function(e){return VV(e)&&!MV(e)},UV=function(e){var t,s=e&&yf(e),o=(t=s)===null||t===void 0?void 0:t.host,u=!1;if(s&&s!==e){var h,p,m;for(u=!!((h=o)!==null&&h!==void 0&&(p=h.ownerDocument)!==null&&p!==void 0&&p.contains(o)||e!=null&&(m=e.ownerDocument)!==null&&m!==void 0&&m.contains(e));!u&&o;){var y,E,R;s=yf(o),o=(y=s)===null||y===void 0?void 0:y.host,u=!!((E=o)!==null&&E!==void 0&&(R=E.ownerDocument)!==null&&R!==void 0&&R.contains(o))}}return u},J0=function(e){var t=e.getBoundingClientRect(),s=t.width,o=t.height;return s===0&&o===0},jV=function(e,t){var s=t.displayCheck,o=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var u=ya.call(e,"details>summary:first-of-type"),h=u?e.parentElement:e;if(ya.call(h,"details:not([open]) *"))return!0;if(!s||s==="full"||s==="legacy-full"){if(typeof o=="function"){for(var p=e;e;){var m=e.parentElement,y=yf(e);if(m&&!m.shadowRoot&&o(m)===!0)return J0(e);e.assignedSlot?e=e.assignedSlot:!m&&y!==e.ownerDocument?e=y.host:e=m}e=p}if(UV(e))return!e.getClientRects().length;if(s!=="legacy-full")return!0}else if(s==="non-zero-area")return J0(e);return!1},zV=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var s=0;s<t.children.length;s++){var o=t.children.item(s);if(o.tagName==="LEGEND")return ya.call(t,"fieldset[disabled] *")?!0:!o.contains(e)}return!0}t=t.parentElement}return!1},_f=function(e,t){return!(t.disabled||vf(t)||xV(t)||jV(t,e)||PV(t)||zV(t))},pg=function(e,t){return!(LV(t)||ts(t)<0||!_f(e,t))},BV=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},FV=function r(e){var t=[],s=[];return e.forEach(function(o,u){var h=!!o.scopeParent,p=h?o.scopeParent:o,m=OV(p,h),y=h?r(o.candidates):p;m===0?h?t.push.apply(t,y):t.push(p):s.push({documentOrder:u,tabIndex:m,item:o,isScope:h,content:y})}),s.sort(NV).reduce(function(o,u){return u.isScope?o.push.apply(o,u.content):o.push(u.content),o},[]).concat(t)},r1=function(e,t){t=t||{};var s;return t.getShadowRoot?s=e1([e],t.includeContainer,{filter:pg.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:BV}):s=Jw(e,t.includeContainer,pg.bind(null,t)),FV(s)},i1=function(e,t){t=t||{};var s;return t.getShadowRoot?s=e1([e],t.includeContainer,{filter:_f.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):s=Jw(e,t.includeContainer,_f.bind(null,t)),s},sa=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return ya.call(e,gf)===!1?!1:pg(t,e)},qV=Ww.concat("iframe").join(","),Bh=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return ya.call(e,qV)===!1?!1:_f(t,e)};const HV=Object.freeze(Object.defineProperty({__proto__:null,focusable:i1,getTabIndex:ts,isFocusable:Bh,isTabbable:sa,tabbable:r1},Symbol.toStringTag,{value:"Module"}));/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function mg(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,s=Array(e);t<e;t++)s[t]=r[t];return s}function GV(r){if(Array.isArray(r))return mg(r)}function KV(r,e,t){return(e=WV(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function YV(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function $V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eb(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,s)}return t}function tb(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?eb(Object(t),!0).forEach(function(s){KV(r,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):eb(Object(t)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(t,s))})}return r}function QV(r){return GV(r)||YV(r)||ZV(r)||$V()}function XV(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var s=t.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function WV(r){var e=XV(r,"string");return typeof e=="symbol"?e:e+""}function ZV(r,e){if(r){if(typeof r=="string")return mg(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?mg(r,e):void 0}}var nb={activateTrap:function(e,t){if(e.length>0){var s=e[e.length-1];s!==t&&s._setPausedState(!0)}var o=e.indexOf(t);o===-1||e.splice(o,1),e.push(t)},deactivateTrap:function(e,t){var s=e.indexOf(t);s!==-1&&e.splice(s,1),e.length>0&&!e[e.length-1]._isManuallyPaused()&&e[e.length-1]._setPausedState(!1)}},JV=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},e4=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},_u=function(e){return e?.key==="Tab"||e?.keyCode===9},t4=function(e){return _u(e)&&!e.shiftKey},n4=function(e){return _u(e)&&e.shiftKey},rb=function(e){return setTimeout(e,0)},tu=function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),o=1;o<t;o++)s[o-1]=arguments[o];return typeof e=="function"?e.apply(void 0,s):e},wh=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},r4=[],i4=function(e,t){var s=t?.document||document,o=t?.trapStack||r4,u=tb({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:t4,isKeyBackward:n4},t),h={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},p,m=function(b,Z,te){return b&&b[Z]!==void 0?b[Z]:u[te||Z]},y=function(b,Z){var te=typeof Z?.composedPath=="function"?Z.composedPath():void 0;return h.containerGroups.findIndex(function(j){var $=j.container,ae=j.tabbableNodes;return $.contains(b)||te?.includes($)||ae.find(function(le){return le===b})})},E=function(b){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},te=Z.hasFallback,j=te===void 0?!1:te,$=Z.params,ae=$===void 0?[]:$,le=u[b];if(typeof le=="function"&&(le=le.apply(void 0,QV(ae))),le===!0&&(le=void 0),!le){if(le===void 0||le===!1)return le;throw new Error("`".concat(b,"` was specified but was not a node, or did not return a node"))}var I=le;if(typeof le=="string"){try{I=s.querySelector(le)}catch(M){throw new Error("`".concat(b,'` appears to be an invalid selector; error="').concat(M.message,'"'))}if(!I&&!j)throw new Error("`".concat(b,"` as selector refers to no known node"))}return I},R=function(){var b=E("initialFocus",{hasFallback:!0});if(b===!1)return!1;if(b===void 0||b&&!Bh(b,u.tabbableOptions))if(y(s.activeElement)>=0)b=s.activeElement;else{var Z=h.tabbableGroups[0],te=Z&&Z.firstTabbableNode;b=te||E("fallbackFocus")}else b===null&&(b=E("fallbackFocus"));if(!b)throw new Error("Your focus-trap needs to have at least one focusable element");return b},w=function(){if(h.containerGroups=h.containers.map(function(b){var Z=r1(b,u.tabbableOptions),te=i1(b,u.tabbableOptions),j=Z.length>0?Z[0]:void 0,$=Z.length>0?Z[Z.length-1]:void 0,ae=te.find(function(M){return sa(M)}),le=te.slice().reverse().find(function(M){return sa(M)}),I=!!Z.find(function(M){return ts(M)>0});return{container:b,tabbableNodes:Z,focusableNodes:te,posTabIndexesFound:I,firstTabbableNode:j,lastTabbableNode:$,firstDomTabbableNode:ae,lastDomTabbableNode:le,nextTabbableNode:function(se){var ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,me=Z.indexOf(se);return me<0?ne?te.slice(te.indexOf(se)+1).find(function(Ce){return sa(Ce)}):te.slice(0,te.indexOf(se)).reverse().find(function(Ce){return sa(Ce)}):Z[me+(ne?1:-1)]}}}),h.tabbableGroups=h.containerGroups.filter(function(b){return b.tabbableNodes.length>0}),h.tabbableGroups.length<=0&&!E("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(h.containerGroups.find(function(b){return b.posTabIndexesFound})&&h.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},L=function(b){var Z=b.activeElement;if(Z)return Z.shadowRoot&&Z.shadowRoot.activeElement!==null?L(Z.shadowRoot):Z},q=function(b){if(b!==!1&&b!==L(document)){if(!b||!b.focus){q(R());return}b.focus({preventScroll:!!u.preventScroll}),h.mostRecentlyFocusedNode=b,JV(b)&&b.select()}},ie=function(b){var Z=E("setReturnFocus",{params:[b]});return Z||(Z===!1?!1:b)},Y=function(b){var Z=b.target,te=b.event,j=b.isBackward,$=j===void 0?!1:j;Z=Z||wh(te),w();var ae=null;if(h.tabbableGroups.length>0){var le=y(Z,te),I=le>=0?h.containerGroups[le]:void 0;if(le<0)$?ae=h.tabbableGroups[h.tabbableGroups.length-1].lastTabbableNode:ae=h.tabbableGroups[0].firstTabbableNode;else if($){var M=h.tabbableGroups.findIndex(function(ft){var Ge=ft.firstTabbableNode;return Z===Ge});if(M<0&&(I.container===Z||Bh(Z,u.tabbableOptions)&&!sa(Z,u.tabbableOptions)&&!I.nextTabbableNode(Z,!1))&&(M=le),M>=0){var se=M===0?h.tabbableGroups.length-1:M-1,ne=h.tabbableGroups[se];ae=ts(Z)>=0?ne.lastTabbableNode:ne.lastDomTabbableNode}else _u(te)||(ae=I.nextTabbableNode(Z,!1))}else{var me=h.tabbableGroups.findIndex(function(ft){var Ge=ft.lastTabbableNode;return Z===Ge});if(me<0&&(I.container===Z||Bh(Z,u.tabbableOptions)&&!sa(Z,u.tabbableOptions)&&!I.nextTabbableNode(Z))&&(me=le),me>=0){var Ce=me===h.tabbableGroups.length-1?0:me+1,Se=h.tabbableGroups[Ce];ae=ts(Z)>=0?Se.firstTabbableNode:Se.firstDomTabbableNode}else _u(te)||(ae=I.nextTabbableNode(Z))}}else ae=E("fallbackFocus");return ae},de=function(b){var Z=wh(b);if(!(y(Z,b)>=0)){if(tu(u.clickOutsideDeactivates,b)){p.deactivate({returnFocus:u.returnFocusOnDeactivate});return}tu(u.allowOutsideClick,b)||b.preventDefault()}},ge=function(b){var Z=wh(b),te=y(Z,b)>=0;if(te||Z instanceof Document)te&&(h.mostRecentlyFocusedNode=Z);else{b.stopImmediatePropagation();var j,$=!0;if(h.mostRecentlyFocusedNode)if(ts(h.mostRecentlyFocusedNode)>0){var ae=y(h.mostRecentlyFocusedNode),le=h.containerGroups[ae].tabbableNodes;if(le.length>0){var I=le.findIndex(function(M){return M===h.mostRecentlyFocusedNode});I>=0&&(u.isKeyForward(h.recentNavEvent)?I+1<le.length&&(j=le[I+1],$=!1):I-1>=0&&(j=le[I-1],$=!1))}}else h.containerGroups.some(function(M){return M.tabbableNodes.some(function(se){return ts(se)>0})})||($=!1);else $=!1;$&&(j=Y({target:h.mostRecentlyFocusedNode,isBackward:u.isKeyBackward(h.recentNavEvent)})),q(j||h.mostRecentlyFocusedNode||R())}h.recentNavEvent=void 0},ce=function(b){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;h.recentNavEvent=b;var te=Y({event:b,isBackward:Z});te&&(_u(b)&&b.preventDefault(),q(te))},ye=function(b){(u.isKeyForward(b)||u.isKeyBackward(b))&&ce(b,u.isKeyBackward(b))},re=function(b){e4(b)&&tu(u.escapeDeactivates,b)!==!1&&(b.preventDefault(),p.deactivate())},fe=function(b){var Z=wh(b);y(Z,b)>=0||tu(u.clickOutsideDeactivates,b)||tu(u.allowOutsideClick,b)||(b.preventDefault(),b.stopImmediatePropagation())},O=function(){if(h.active)return nb.activateTrap(o,p),h.delayInitialFocusTimer=u.delayInitialFocus?rb(function(){q(R())}):q(R()),s.addEventListener("focusin",ge,!0),s.addEventListener("mousedown",de,{capture:!0,passive:!1}),s.addEventListener("touchstart",de,{capture:!0,passive:!1}),s.addEventListener("click",fe,{capture:!0,passive:!1}),s.addEventListener("keydown",ye,{capture:!0,passive:!1}),s.addEventListener("keydown",re),p},A=function(){if(h.active)return s.removeEventListener("focusin",ge,!0),s.removeEventListener("mousedown",de,!0),s.removeEventListener("touchstart",de,!0),s.removeEventListener("click",fe,!0),s.removeEventListener("keydown",ye,!0),s.removeEventListener("keydown",re),p},D=function(b){var Z=b.some(function(te){var j=Array.from(te.removedNodes);return j.some(function($){return $===h.mostRecentlyFocusedNode})});Z&&q(R())},C=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(D):void 0,P=function(){C&&(C.disconnect(),h.active&&!h.paused&&h.containers.map(function(b){C.observe(b,{subtree:!0,childList:!0})}))};return p={get active(){return h.active},get paused(){return h.paused},activate:function(b){if(h.active)return this;var Z=m(b,"onActivate"),te=m(b,"onPostActivate"),j=m(b,"checkCanFocusTrap");j||w(),h.active=!0,h.paused=!1,h.nodeFocusedBeforeActivation=L(s),Z?.();var $=function(){j&&w(),O(),P(),te?.()};return j?(j(h.containers.concat()).then($,$),this):($(),this)},deactivate:function(b){if(!h.active)return this;var Z=tb({onDeactivate:u.onDeactivate,onPostDeactivate:u.onPostDeactivate,checkCanReturnFocus:u.checkCanReturnFocus},b);clearTimeout(h.delayInitialFocusTimer),h.delayInitialFocusTimer=void 0,A(),h.active=!1,h.paused=!1,P(),nb.deactivateTrap(o,p);var te=m(Z,"onDeactivate"),j=m(Z,"onPostDeactivate"),$=m(Z,"checkCanReturnFocus"),ae=m(Z,"returnFocus","returnFocusOnDeactivate");te?.();var le=function(){rb(function(){ae&&q(ie(h.nodeFocusedBeforeActivation)),j?.()})};return ae&&$?($(ie(h.nodeFocusedBeforeActivation)).then(le,le),this):(le(),this)},pause:function(b){return h.active?(h.manuallyPaused=!0,this._setPausedState(!0,b)):this},unpause:function(b){return h.active?(h.manuallyPaused=!1,o[o.length-1]!==this?this:this._setPausedState(!1,b)):this},updateContainerElements:function(b){var Z=[].concat(b).filter(Boolean);return h.containers=Z.map(function(te){return typeof te=="string"?s.querySelector(te):te}),h.active&&w(),P(),this}},Object.defineProperties(p,{_isManuallyPaused:{value:function(){return h.manuallyPaused}},_setPausedState:{value:function(b,Z){if(h.paused===b)return this;if(h.paused=b,b){var te=m(Z,"onPause"),j=m(Z,"onPostPause");te?.(),A(),P(),j?.()}else{var $=m(Z,"onUnpause"),ae=m(Z,"onPostUnpause");$?.(),w(),O(),P(),ae?.()}return this}}}),p.updateContainerElements(e),p};const s4=Object.freeze(Object.defineProperty({__proto__:null,createFocusTrap:i4},Symbol.toStringTag,{value:"Module"})),a4=pb(s4),o4=pb(HV);var ib;function l4(){if(ib)return Ah.exports;ib=1;function r(O){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},r(O)}var e,t;function s(O,A){if(!(O instanceof A))throw new TypeError("Cannot call a class as a function")}function o(O,A){for(var D=0;D<A.length;D++){var C=A[D];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(O,q(C.key),C)}}function u(O,A,D){return A&&o(O.prototype,A),Object.defineProperty(O,"prototype",{writable:!1}),O}function h(O,A,D){return A=E(A),p(O,y()?Reflect.construct(A,D||[],E(O).constructor):A.apply(O,D))}function p(O,A){if(A&&(r(A)=="object"||typeof A=="function"))return A;if(A!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(O)}function m(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function y(){try{var O=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(y=function(){return!!O})()}function E(O){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(A){return A.__proto__||Object.getPrototypeOf(A)},E(O)}function R(O,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(A&&A.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),A&&w(O,A)}function w(O,A){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(D,C){return D.__proto__=C,D},w(O,A)}function L(O,A,D){return(A=q(A))in O?Object.defineProperty(O,A,{value:D,enumerable:!0,configurable:!0,writable:!0}):O[A]=D,O}function q(O){var A=ie(O,"string");return r(A)=="symbol"?A:A+""}function ie(O,A){if(r(O)!="object"||!O)return O;var D=O[Symbol.toPrimitive];if(D!==void 0){var C=D.call(O,A);if(r(C)!="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(A==="string"?String:Number)(O)}var Y=Tf(),de=a4,ge=de.createFocusTrap,ce=o4,ye=ce.isFocusable,re=parseInt((e=(t=/^(\d+)\./.exec(Y.version))===null||t===void 0?void 0:t[1])!==null&&e!==void 0?e:0,10),fe=function(O){function A(D){var C;s(this,A),C=h(this,A,[D]),L(C,"getNodeForOption",function(b){var Z,te=(Z=this.internalOptions[b])!==null&&Z!==void 0?Z:this.originalOptions[b];if(typeof te=="function"){for(var j=arguments.length,$=new Array(j>1?j-1:0),ae=1;ae<j;ae++)$[ae-1]=arguments[ae];te=te.apply(void 0,$)}if(te===!0&&(te=void 0),!te){if(te===void 0||te===!1)return te;throw new Error("`".concat(b,"` was specified but was not a node, or did not return a node"))}var le=te;if(typeof te=="string"){var I;if(le=(I=this.getDocument())===null||I===void 0?void 0:I.querySelector(te),!le)throw new Error("`".concat(b,"` as selector refers to no known node"))}return le}),C.handleDeactivate=C.handleDeactivate.bind(C),C.handlePostDeactivate=C.handlePostDeactivate.bind(C),C.handleClickOutsideDeactivates=C.handleClickOutsideDeactivates.bind(C),C.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:C.handleDeactivate,onPostDeactivate:C.handlePostDeactivate,clickOutsideDeactivates:C.handleClickOutsideDeactivates},C.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var P=D.focusTrapOptions;for(var x in P)if(Object.prototype.hasOwnProperty.call(P,x)){if(x==="returnFocusOnDeactivate"||x==="onDeactivate"||x==="onPostDeactivate"||x==="checkCanReturnFocus"||x==="clickOutsideDeactivates"){C.originalOptions[x]=P[x];continue}C.internalOptions[x]=P[x]}return C.outsideClick=null,C.focusTrapElements=D.containerElements||[],C.updatePreviousElement(),C}return R(A,O),u(A,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document<"u"?document:void 0)}},{key:"getReturnFocusNode",value:function(){var C=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return C||(C===!1?!1:this.previouslyFocusedElement)}},{key:"updatePreviousElement",value:function(){var C=this.getDocument();C&&(this.previouslyFocusedElement=C.activeElement)}},{key:"deactivateTrap",value:function(){!this.focusTrap||!this.focusTrap.active||this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(C){var P=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,C):this.originalOptions.clickOutsideDeactivates;return P&&(this.outsideClick={target:C.target,allowDeactivation:P}),P}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var C=this,P=function(){var b=C.getReturnFocusNode(),Z=!!(C.originalOptions.returnFocusOnDeactivate&&b!==null&&b!==void 0&&b.focus&&(!C.outsideClick||C.outsideClick.allowDeactivation&&!ye(C.outsideClick.target,C.internalOptions.tabbableOptions))),te=C.internalOptions.preventScroll,j=te===void 0?!1:te;Z&&b.focus({preventScroll:j}),C.originalOptions.onPostDeactivate&&C.originalOptions.onPostDeactivate.call(null),C.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(P,P):P()}},{key:"setupFocusTrap",value:function(){if(this.focusTrap)this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause());else{var C=this.focusTrapElements.some(Boolean);C&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(C){if(this.focusTrap){C.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var P=!C.active&&this.props.active,x=C.active&&!this.props.active,b=!C.paused&&this.props.paused,Z=C.paused&&!this.props.paused;if(P&&(this.updatePreviousElement(),this.focusTrap.activate()),x){this.deactivateTrap();return}b&&this.focusTrap.pause(),Z&&this.focusTrap.unpause()}else C.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var C=this,P=this.props.children?Y.Children.only(this.props.children):void 0;if(P){if(P.type&&P.type===Y.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var x=function(te){var j=C.props.containerElements;P&&(re>=19?typeof P.props.ref=="function"?P.props.ref(te):P.props.ref&&(P.props.ref.current=te):typeof P.ref=="function"?P.ref(te):P.ref&&(P.ref.current=te)),C.focusTrapElements=j||[te]},b=Y.cloneElement(P,{ref:x});return b}return null}}])}(Y.Component);return fe.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:ge},Ah.exports=fe,Ah.exports.FocusTrap=fe,Ah.exports}var u4=l4();const c4=Ef(u4),Cm=({isOpen:r,onClose:e,children:t,title:s,customWidth:o="380px",theme:u="dark"})=>{if(!r)return null;const h=u==="light"?"light-glass":"dark-glass";return z.jsx(c4,{active:r,children:z.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},onClick:e,children:z.jsxs("div",{className:h,style:{width:o,maxWidth:"90vw",padding:"var(--spacing-5)"},onClick:p=>p.stopPropagation(),role:"dialog","aria-modal":"true",children:[s&&z.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"var(--spacing-4)"},className:"text-primary",children:s}),t]})})})},h4=({onGoogleLogin:r})=>z.jsxs("div",{className:"flex-col",style:{gap:"var(--spacing-3)"},children:[z.jsxs(sn,{onClick:r,variant:"secondary",style:{width:"100%"},children:[z.jsx("img",{src:"https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_18dp.png",alt:"Google logo",style:{marginRight:"var(--spacing-2)"}}),"Sign in with Google"]}),z.jsx("div",{className:"text-tertiary",style:{fontSize:"11px",textAlign:"center",margin:"var(--spacing-2) 0"},children:"or"})]}),iL=async r=>{if(!navigator.clipboard){console.warn("Clipboard API not available.");const e=document.createElement("textarea");e.value=r,e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{return document.execCommand("copy"),console.log("Text copied to clipboard (fallback)."),document.body.removeChild(e),!0}catch(t){return console.error("Unable to copy text (fallback):",t),document.body.removeChild(e),!1}}try{return await navigator.clipboard.writeText(r),console.log("Text copied to clipboard (Clipboard API)."),!0}catch(e){return console.error("Failed to copy text (Clipboard API):",e),!1}},sL=r=>{switch(r?.toLowerCase()){case"amazon":return"https://www.amazon.com/gp/help/customer/contact-us";case"amazon.in":return"https://www.amazon.in/gp/help/customer/contact-us";default:return`https://www.google.com/search?q=${encodeURIComponent(r)} customer support chat`}},aL=r=>`https://www.google.com/search?q=${encodeURIComponent(r)}`,f4=r=>{typeof chrome<"u"&&chrome.tabs&&chrome.tabs.create?chrome.tabs.create({url:r,active:!0}):window.open(r,"_blank","noopener,noreferrer")},d4=r=>{if(!r)return"User";if(r.firstName&&typeof r.firstName=="string"&&r.firstName.trim()){const e=r.firstName.trim();return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}if(r.displayName&&typeof r.displayName=="string"&&r.displayName.trim()){const s=r.displayName.trim().split(" ")[0];return s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()}if(r.email&&typeof r.email=="string"&&r.email.trim()){let t=r.email.trim().split("@")[0];t=t.replace(/[^a-zA-Z\.\_\-]/g,"");const o=t.split(/[\.\_\-]/)[0];if(o)return o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()}return"User"},oL=()=>{const r=Intl.DateTimeFormat().resolvedOptions().timeZone;return r.includes("Asia/Kolkata")?"IN":r.includes("Asia/Dubai")||r.includes("Asia/Riyadh")?"AE":"US"},p4=ve.lazy(()=>gs(()=>import("./PriceDropAssistModal-Diuo_aBk.js"),[])),m4=ve.lazy(()=>gs(()=>import("./ClaimTypeChoiceModal-BTqpj-Zv.js"),[])),g4=ve.lazy(()=>gs(()=>import("./UserSettings-DSDCFv3U.js"),[])),y4=ve.lazy(()=>gs(()=>import("./MissingInfoModal-CFnanuGC.js"),[])),v4=ve.lazy(()=>gs(()=>import("./ArchivePurchaseModal-9LjTZ7V5.js"),[])),_4=ve.lazy(()=>gs(()=>import("./ProtectPage-BBr7tfSO.js"),[])),E4=ve.lazy(()=>gs(()=>import("./CheckoutModal-BSRtt5zI.js"),[])),oi=He.memo(()=>z.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100px",width:"100%",flexDirection:"column",gap:"12px"},children:[z.jsxs("div",{style:{fontSize:"24px",fontWeight:"800",letterSpacing:"2px",display:"flex",alignItems:"center",gap:"2px",color:"var(--text-primary)"},children:[z.jsx("span",{children:"CLAIMS"}),z.jsx("div",{style:{width:"24px",height:"24px",border:"3px solid var(--input-border)",borderTop:"3px solid var(--color-primary)",borderRadius:"50%",animation:"spinO 1s linear infinite",display:"inline-block"}})]}),z.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontWeight:"500"},children:"Loading your dashboard..."})]})),Rh=He.memo(({type:r,placeholder:e,value:t,onChange:s,required:o,disabled:u,autoComplete:h,style:p={}})=>z.jsx("input",{type:r,placeholder:e,value:t,onChange:s,required:o,disabled:u,autoComplete:h,style:{padding:"12px 16px",borderRadius:"8px",border:"1px solid var(--input-border)",backgroundColor:"var(--input-bg)",color:"var(--text-primary)",fontSize:"14px",fontFamily:"inherit",transition:"border-color 0.15s ease",outline:"none",width:"100%",boxSizing:"border-box",...p},onFocus:m=>{m.target.style.borderColor="var(--color-primary)"},onBlur:m=>{m.target.style.borderColor="var(--input-border)"}})),T4=He.memo(({type:r,message:e,onDismiss:t})=>z.jsxs("div",{style:{width:"100%",padding:"12px 16px",borderRadius:"8px",marginBottom:"16px",backgroundColor:r==="error"?"var(--alert-error-bg)":"var(--alert-success-bg)",border:`1px solid ${r==="error"?"var(--alert-error-border)":"var(--alert-success-border)"}`,color:r==="error"?"var(--alert-error-text)":"var(--alert-success-text)",fontSize:"13px",fontWeight:"500",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsx("span",{children:e}),t&&z.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"inherit",cursor:"pointer",fontSize:"16px",padding:"0",marginLeft:"8px"},children:"×"})]}));function b4(){const{user:r,userData:e,isLoading:t,logout:s,refetchUserData:o}=yV(),{purchases:u}=vV(r?.uid),[h,p]=ve.useState({email:"",password:"",firstName:"",isRegisterView:!1,showForgotPassword:!1}),[m,y]=ve.useState({authError:"",authSuccess:"",isLoading:!1,theme:localStorage.getItem("claimso-theme")||"dark"}),[E,R]=ve.useState({isPriceDropModalOpen:!1,isClaimTypeModalOpen:!1,isMissingInfoModalOpen:!1,isArchiveModalOpen:!1,selectedPurchaseForModal:null,isUserSettingsPopoverOpen:!1,isDeleteConfirmModalOpen:!1}),[w,L]=ve.useState("dashboard"),[q,ie]=ve.useState(null),[Y,de]=ve.useState(!1),[ge,ce]=ve.useState(()=>localStorage.getItem("claimso-calendar-synced")==="true"),ye=ve.useCallback(I=>{p(M=>({...M,...I}))},[]),re=ve.useCallback(I=>{ve.startTransition(()=>{y(M=>({...M,...I}))})},[]),fe=ve.useCallback(I=>{R(M=>({...M,...I}))},[]);ve.useEffect(()=>{requestAnimationFrame(()=>{const M=document.documentElement;m.theme==="dark"?(M.style.setProperty("--text-primary","#ffffff"),M.style.setProperty("--text-secondary","rgba(255, 255, 255, 0.7)"),M.style.setProperty("--bg-primary","#0a0a0a"),M.style.setProperty("--bg-secondary","#1a1a1a"),M.style.setProperty("--input-bg","rgba(255, 255, 255, 0.04)"),M.style.setProperty("--input-border","rgba(255, 255, 255, 0.08)"),M.style.setProperty("--color-primary","#3b82f6"),M.style.setProperty("--alert-error-bg","rgba(239, 68, 68, 0.1)"),M.style.setProperty("--alert-error-border","rgba(239, 68, 68, 0.2)"),M.style.setProperty("--alert-error-text","#ef4444"),M.style.setProperty("--alert-success-bg","rgba(34, 197, 94, 0.1)"),M.style.setProperty("--alert-success-border","rgba(34, 197, 94, 0.2)"),M.style.setProperty("--alert-success-text","#22c55e")):(M.style.setProperty("--text-primary","#1f2937"),M.style.setProperty("--text-secondary","rgba(31, 41, 55, 0.7)"),M.style.setProperty("--bg-primary","#ffffff"),M.style.setProperty("--bg-secondary","#f8fafc"),M.style.setProperty("--input-bg","rgba(31, 41, 55, 0.04)"),M.style.setProperty("--input-border","rgba(31, 41, 55, 0.08)"),M.style.setProperty("--color-primary","#3b82f6"),M.style.setProperty("--alert-error-bg","rgba(239, 68, 68, 0.1)"),M.style.setProperty("--alert-error-border","rgba(239, 68, 68, 0.2)"),M.style.setProperty("--alert-error-text","#dc2626"),M.style.setProperty("--alert-success-bg","rgba(34, 197, 94, 0.1)"),M.style.setProperty("--alert-success-border","rgba(34, 197, 94, 0.2)"),M.style.setProperty("--alert-success-text","#16a34a")),document.body.setAttribute("data-theme",m.theme),localStorage.setItem("claimso-theme",m.theme)})},[m.theme]),ve.useEffect(()=>{if(m.authError||m.authSuccess){const I=setTimeout(()=>{re({authError:"",authSuccess:""})},5e3);return()=>clearTimeout(I)}},[m.authError,m.authSuccess,re]);const O=ve.useCallback(I=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(I),[]),A=ve.useCallback(I=>I.length>=6,[]),D=ve.useCallback(()=>{ye({email:"",password:"",firstName:""}),re({authError:"",authSuccess:""})},[ye,re]),C=ve.useCallback(async I=>{if(I.preventDefault(),!O(h.email)){re({authError:"Please enter a valid email address"});return}if(!A(h.password)){re({authError:"Password must be at least 6 characters"});return}re({isLoading:!0,authError:""});try{await PD(rt.auth,h.email,h.password),re({authSuccess:"Welcome back!"}),D()}catch(M){re({authError:{"auth/user-not-found":"No account found with this email","auth/wrong-password":"Incorrect password","auth/too-many-requests":"Too many attempts. Try again later","auth/user-disabled":"Account disabled"}[M.code]||"Login failed. Please try again"})}finally{re({isLoading:!1})}},[h.email,h.password,O,A,re,D]),P=ve.useCallback(async I=>{if(I.preventDefault(),!h.firstName.trim()){re({authError:"Please enter your first name"});return}if(!O(h.email)){re({authError:"Please enter a valid email address"});return}if(!A(h.password)){re({authError:"Password must be at least 6 characters"});return}re({isLoading:!0,authError:""});try{const M=await xD(rt.auth,h.email,h.password);await saveUserFirstName(M.user.uid,h.firstName),await o(),re({authSuccess:"Account created successfully!"}),D()}catch(M){re({authError:{"auth/email-already-in-use":"Account with this email already exists","auth/weak-password":"Password is too weak"}[M.code]||"Registration failed. Please try again"})}finally{re({isLoading:!1})}},[h,O,A,re,D,o]),x=ve.useCallback(async()=>{re({isLoading:!0,authError:""});try{const I=new li;await rO(rt.auth,I),re({authSuccess:"Google login successful!"}),D()}catch(I){I.code!=="auth/popup-closed-by-user"&&re({authError:"Google login failed. Please try again"})}finally{re({isLoading:!1})}},[re,D]),b=ve.useCallback(async I=>{if(I.preventDefault(),!O(h.email)){re({authError:"Please enter a valid email address"});return}re({isLoading:!0,authError:""});try{await ND(rt.auth,h.email),re({authSuccess:"Password reset email sent!"}),ye({showForgotPassword:!1})}catch(M){const se=M.code==="auth/user-not-found"?"No account found with this email":"Failed to send reset email";re({authError:se})}finally{re({isLoading:!1})}},[h.email,O,re,ye]),Z=ve.useCallback(async(I,M)=>{re({isLoading:!0,authError:""});const se={...M,purchaseId:I.id,purchaseName:I.name};try{const{url:ne}=await W0.createCheckoutSession(se);window.location.href=ne}catch(ne){console.error("Error creating checkout session:",ne),re({isLoading:!1,authError:"Could not connect to secure checkout. Please try again."})}},[W0,re]),te=ve.useCallback(()=>{re({theme:m.theme==="light"?"dark":"light"})},[m.theme,re]);ve.useCallback((I,M)=>{switch(fe({selectedPurchaseForModal:I}),M){case"add_missing_info":fe({isMissingInfoModalOpen:!0});break;case"price_drop":fe({isPriceDropModalOpen:!0});break;case"file_claim":fe({isClaimTypeModalOpen:!0});break;default:console.warn(`Unhandled carousel action type: ${M}`)}},[fe]);const j=ve.useCallback((I,M)=>{switch(fe({selectedPurchaseForModal:I}),M){case"buy_again":I.productUrl&&f4(I.productUrl);break;case"edit_details":fe({isMissingInfoModalOpen:!0});break;case"archive":fe({isArchiveModalOpen:!0});break;default:console.warn(`Unhandled vault action type: ${M}`)}},[fe]),$=ve.useCallback(async()=>{console.log("Toggle clicked. Current state:",ge);const I=!ge;console.log("Setting optimistic UI state to:",I),ce(I);try{I===!0?console.log("Attempting to ENABLE sync..."):(console.log("Attempting to DISABLE sync..."),await Kw(r.uid,!1),localStorage.setItem("claimso-calendar-synced","false"),re({authSuccess:"Calendar sync paused for new items."}),console.log("Successfully disabled sync."))}catch(M){console.error("Error in handleCalendarSyncToggle:",M),console.log("Reverting UI state due to error. Setting back to:",!I),ce(!I),re({isLoading:!1,authError:M.message||"An unexpected error occurred."})}},[ge,r,u,re,ce]),ae=ve.useMemo(()=>({priceDrops:u.filter(I=>I.postPurchaseType==="price_drop"),claimsoAssist:u.filter(I=>I.postPurchaseType==="warranty"),all:u}),[u]),le=ve.useMemo(()=>({initial:r?.email?r.email.charAt(0).toUpperCase():"?",firstName:d4({...r,...e})}),[r,e]);return t?z.jsx("div",{style:{height:"580px",width:"400px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--bg-primary)",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:z.jsx(oi,{})}):z.jsxs("div",{className:"viewport-container",style:{backgroundColor:"var(--bg-primary)",color:"var(--text-primary)",minHeight:"580px",width:"400px",display:"flex",flexDirection:"column",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',overflow:"hidden"},children:[z.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",borderBottom:"1px solid var(--input-border)",backgroundColor:"var(--bg-secondary)",height:"56px",flexShrink:0,zIndex:100},children:[z.jsx("h1",{style:{margin:0,fontSize:"20px",fontWeight:"800",background:"linear-gradient(135deg, var(--color-primary), #8b5cf6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"-0.5px"},children:"CLAIMSO"}),r&&z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[z.jsxs("span",{style:{fontSize:"14px",color:"var(--text-secondary)",fontWeight:"500"},children:["Hi, ",le.firstName,"!"]}),z.jsx(sn,{onClick:()=>fe({isUserSettingsPopoverOpen:!0}),variant:"secondary",style:{width:"36px",height:"36px",padding:0,borderRadius:"50%",minWidth:"auto",fontSize:"14px",fontWeight:"600",backgroundColor:"var(--color-primary)",color:"white",border:"none"},children:le.initial})]})]}),z.jsx("main",{style:{height:"auto",minHeight:"524px",display:"flex",flexDirection:"column",backgroundColor:"var(--bg-primary)",overflowY:"auto",overflowX:"hidden"},children:r?z.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[z.jsxs("div",{style:{display:"flex",flexShrink:0,borderBottom:"1px solid var(--input-border)",padding:"4px 20px 0 20px",backgroundColor:"var(--bg-secondary)"},children:[z.jsx("button",{onClick:()=>L("dashboard"),className:`tab-button ${w==="dashboard"?"active":""}`,children:"Dashboard"}),z.jsx("button",{onClick:()=>L("protect"),className:`tab-button ${w==="protect"?"active":""}`,children:"Protect"}),z.jsx("button",{onClick:()=>L("vault"),className:`tab-button ${w==="vault"?"active":""}`,children:"Vault"})]}),z.jsxs("div",{className:"tab-content",style:{flexGrow:1,overflowY:"auto",padding:"20px"},children:[w==="dashboard"&&z.jsxs(z.Fragment,{children:[z.jsx("div",{style:{height:"180px",marginBottom:"20px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)",borderRadius:"px",backgroundColor:"var(--bg-secondary)",border:"1px solid var(--input-border)"},children:z.jsx(Z0,{title:"Price Drops",items:ae.priceDrops||[]})}),z.jsx("div",{style:{height:"180px",marginBottom:"20px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)",borderRadius:"12px",backgroundColor:"var(--bg-secondary)",border:"1px solid var(--input-border)"},children:z.jsx(Z0,{title:"Warranty Shield",items:ae.claimsoAssist||[]})})]}),w==="protect"&&z.jsx(ve.Suspense,{fallback:z.jsx(oi,{}),children:z.jsx(_4,{purchase:u.find(I=>I.postPurchaseType==="warranty"),onSelectPlan:Z})}),w==="vault"&&z.jsx(ve.Suspense,{fallback:z.jsx(oi,{}),children:z.jsx(CV,{items:ae.all||[],onItemAction:j,emptyMessage:"Your purchase vault is empty. Items will appear here after you make a purchase."})})]})]}):z.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",padding:"24px",maxWidth:"340px",margin:"0 auto"},children:[(m.authError||m.authSuccess)&&z.jsx(T4,{type:m.authError?"error":"success",message:m.authError||m.authSuccess,onDismiss:()=>re({authError:"",authSuccess:""})}),z.jsx("div",{style:{width:"100%",marginBottom:"16px"},children:z.jsx(h4,{onGoogleLogin:x,disabled:m.isLoading})}),z.jsxs("div",{style:{width:"100%",display:"flex",alignItems:"center",margin:"16px 0",gap:"12px"},children:[z.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"var(--input-border)"}}),z.jsx("span",{style:{fontSize:"12px",color:"var(--text-secondary)",fontWeight:"500"},children:"or continue with email"}),z.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"var(--input-border)"}})]}),h.showForgotPassword?z.jsx("form",{onSubmit:b,style:{width:"100%"},children:z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[z.jsxs("div",{style:{textAlign:"center",marginBottom:"8px"},children:[z.jsx("h2",{style:{margin:"0 0 4px 0",fontSize:"22px",fontWeight:"700",color:"var(--text-primary)"},children:"Reset Password"}),z.jsx("p",{style:{margin:0,fontSize:"13px",color:"var(--text-secondary)"},children:"Enter your email to receive a reset link"})]}),z.jsx(Rh,{type:"email",placeholder:"Email address",value:h.email,onChange:I=>ye({email:I.target.value}),required:!0,disabled:m.isLoading,autoComplete:"email"}),z.jsx(sn,{type:"submit",disabled:m.isLoading,style:{width:"100%",height:"42px"},children:m.isLoading?"Sending...":"Send Reset Email"}),z.jsx(sn,{type:"button",variant:"secondary",onClick:()=>ye({showForgotPassword:!1}),disabled:m.isLoading,style:{width:"100%",height:"42px"},children:"Back to Login"})]})}):z.jsx("form",{onSubmit:h.isRegisterView?P:C,style:{width:"100%"},children:z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[z.jsxs("div",{style:{textAlign:"center",marginBottom:"8px"},children:[z.jsx("h2",{style:{margin:"0 0 4px 0",fontSize:"22px",fontWeight:"700",color:"var(--text-primary)"},children:h.isRegisterView?"Create Account":"Welcome Back"}),z.jsx("p",{style:{margin:0,fontSize:"13px",color:"var(--text-secondary)"},children:h.isRegisterView?"Start tracking your purchases":"Sign in to your dashboard"})]}),h.isRegisterView&&z.jsx(Rh,{type:"text",placeholder:"First name",value:h.firstName,onChange:I=>ye({firstName:I.target.value}),required:!0,disabled:m.isLoading,autoComplete:"given-name"}),z.jsx(Rh,{type:"email",placeholder:"Email address",value:h.email,onChange:I=>ye({email:I.target.value}),required:!0,disabled:m.isLoading,autoComplete:"email"}),z.jsx(Rh,{type:"password",placeholder:"Password",value:h.password,onChange:I=>ye({password:I.target.value}),required:!0,disabled:m.isLoading,autoComplete:h.isRegisterView?"new-password":"current-password"}),z.jsx(sn,{type:"submit",disabled:m.isLoading,style:{width:"100%",height:"42px"},children:m.isLoading?"Please wait...":h.isRegisterView?"Create Account":"Sign In"}),!h.isRegisterView&&z.jsx("button",{type:"button",onClick:()=>ye({showForgotPassword:!0}),disabled:m.isLoading,style:{background:"none",border:"none",color:"var(--color-primary)",textDecoration:"underline",cursor:"pointer",fontSize:"12px",textAlign:"center",padding:"4px"},children:"Forgot your password?"}),z.jsxs("div",{style:{textAlign:"center",paddingTop:"8px"},children:[z.jsx("span",{style:{fontSize:"12px",color:"var(--text-secondary)"},children:h.isRegisterView?"Already have an account?":"Don't have an account?"}),z.jsx("button",{type:"button",onClick:()=>{ve.startTransition(()=>{ye({isRegisterView:!h.isRegisterView}),re({authError:"",authSuccess:""})})},disabled:m.isLoading,style:{background:"none",border:"none",color:"var(--color-primary)",textDecoration:"underline",cursor:"pointer",fontSize:"12px",marginLeft:"4px",padding:"2px",fontWeight:"600"},children:h.isRegisterView?"Sign in":"Create account"})]})]})})]})}),E.selectedPurchaseForModal&&E.isPriceDropModalOpen&&z.jsx(Cm,{theme:m.theme,isOpen:!0,onClose:()=>fe({isPriceDropModalOpen:!1,selectedPurchaseForModal:null}),title:"Price Drop Claim",customWidth:"380px",children:z.jsx(ve.Suspense,{fallback:z.jsx(oi,{}),children:z.jsx(p4,{purchase:E.selectedPurchaseForModal,onClose:()=>fe({isPriceDropModalOpen:!1,selectedPurchaseForModal:null})})})}),E.selectedPurchaseForModal&&E.isClaimTypeModalOpen&&z.jsx(Cm,{theme:m.theme,isOpen:!0,onClose:()=>fe({isClaimTypeModalOpen:!1,selectedPurchaseForModal:null}),title:"Claim Type",customWidth:"320px",children:z.jsx(ve.Suspense,{fallback:z.jsx(oi,{}),children:z.jsx(m4,{purchase:E.selectedPurchaseForModal,onClose:()=>fe({isClaimTypeModalOpen:!1,selectedPurchaseForModal:null})})})}),z.jsx(Qw,{theme:m.theme,isOpen:E.isUserSettingsPopoverOpen,onClose:()=>fe({isUserSettingsPopoverOpen:!1}),children:z.jsx(ve.Suspense,{fallback:z.jsx(oi,{}),children:z.jsx(g4,{userEmail:r?.email,onLogout:s,onToggleTheme:te,currentTheme:m.theme,isCalendarSynced:ge,onCalendarSyncToggle:$,onOpenDeleteConfirm:()=>{fe({isUserSettingsPopoverOpen:!1,isDeleteConfirmModalOpen:!0})}})})}),E.isDeleteConfirmModalOpen&&ZR.createPortal(z.jsx(Cm,{isOpen:!0,onClose:()=>fe({isDeleteConfirmModalOpen:!1}),title:"Delete Calendar Alerts?",theme:m.theme,customWidth:"380px",children:z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"4px"},children:[z.jsxs("div",{style:{textAlign:"center"},children:[z.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",backgroundColor:"var(--alert-error-bg)",border:"2px solid var(--alert-error-border)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px auto",fontSize:"20px"},children:"⚠️"}),z.jsx("p",{style:{margin:0,fontSize:"14px",color:"var(--text-primary)",fontWeight:"500",lineHeight:"1.4"},children:"This will permanently delete all calendar alerts and sync settings. This action cannot be undone."})]}),z.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[z.jsx(sn,{onClick:()=>fe({isDeleteConfirmModalOpen:!1}),variant:"secondary",style:{minWidth:"80px",height:"36px"},children:"Cancel"}),z.jsx(sn,{onClick:()=>{fe({isDeleteConfirmModalOpen:!1}),ce(!1),localStorage.setItem("claimso-calendar-synced","false"),re({authSuccess:"Calendar alerts deleted successfully."})},variant:"danger",style:{minWidth:"80px",height:"36px"},children:"Delete"})]})]})}),document.body),E.selectedPurchaseForModal&&E.isMissingInfoModalOpen&&z.jsx(ve.Suspense,{fallback:z.jsx(oi,{}),children:z.jsx(y4,{isOpen:!0,onClose:()=>fe({isMissingInfoModalOpen:!1,selectedPurchaseForModal:null}),purchase:E.selectedPurchaseForModal,onSave:(I,M)=>{r?.uid&&Yw(r.uid,I,M)}})}),E.selectedPurchaseForModal&&E.isArchiveModalOpen&&z.jsx(ve.Suspense,{fallback:z.jsx(oi,{}),children:z.jsx(v4,{isOpen:!0,onClose:()=>fe({isArchiveModalOpen:!1,selectedPurchaseForModal:null}),purchase:E.selectedPurchaseForModal,onConfirm:async I=>{const M=E.selectedPurchaseForModal;fe({isArchiveModalOpen:!1,selectedPurchaseForModal:null}),re({isLoading:!0,authSuccess:"",authError:""});try{const{archivePurchaseInService:se}=await gs(async()=>{const{archivePurchaseInService:ne}=await Promise.resolve().then(()=>gV);return{archivePurchaseInService:ne}},void 0);await se(M.id,I),re({isLoading:!1,authSuccess:"Purchase successfully archived!"})}catch{re({isLoading:!1,authError:"Could not archive purchase."})}}})}),Y&&q&&z.jsx(ve.Suspense,{fallback:z.jsx(oi,{}),children:z.jsx(E4,{isOpen:!0,onClose:()=>{de(!1),ie(null)},plan:q,purchase:u.find(I=>I.postPurchaseType==="warranty")})}),z.jsx("style",{jsx:!0,children:`
        @keyframes spinO {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes accordionPulse {
          0% { 
            border-color: rgba(59, 130, 246, 0.3);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(59, 130, 246, 0.2);
          }
          50% { 
            border-color: rgba(59, 130, 246, 0.5);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.4);
            transform: scale(1.002);
          }
          100% { 
            border-color: rgba(59, 130, 246, 0.3);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(59, 130, 246, 0.2);
          }
        }
        
        /* Enhanced pulse effect for dark mode with lighter colors */
        [data-theme="dark"] .accordion-pulse {
          animation: accordionPulseDark 3s ease-in-out infinite;
        }
        
        @keyframes accordionPulseDark {
          0% { 
            border-color: rgba(59, 130, 246, 0.4);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.25);
          }
          50% { 
            border-color: rgba(59, 130, 246, 0.6);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.5);
            transform: scale(1.003);
          }
          100% { 
            border-color: rgba(59, 130, 246, 0.4);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.25);
          }
        }
        
        /* Light-mode pulse (red) */
@keyframes accordionPulseLight {
          0% { 
            border-color: rgba(59, 130, 246, 0.4);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.25);
          }
          50% { 
            border-color: rgba(59, 130, 246, 0.6);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.5);
            transform: scale(1.003);
          }
          100% { 
            border-color: rgba(59, 130, 246, 0.4);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.25);
          }
        }

/* Light theme uses the red pulse */
[data-theme="light"] .accordion-pulse {
  animation: accordionPulseLight 3s ease-in-out infinite;
}

/* Dark theme keeps the blue pulse */
[data-theme="dark"] .accordion-pulse {
  animation: accordionPulseDark 3s ease-in-out infinite;
}
        /* Optimize viewport for performance */
        .viewport-container {
          will-change: transform;
          contain: layout style paint;
          transform: translateZ(0);
        }
        
        /* Smooth transitions with hardware acceleration */
        * {
          transition: background-color 0.12s ease, color 0.12s ease, border-color 0.12s ease;
        }
        
        /* Optimize button interactions */
        button {
          transition: all 0.12s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        button:hover:not(:disabled) {
          transform: translateY(-1px);
        }
        
        button:active:not(:disabled) {
          transform: translateY(0);
        }
        
        /* Enhanced input focus with better performance */
        input {
          will-change: border-color;
        }
        
        input:focus {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
        }
        
        /* Optimized scrolling with better visibility */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--bg-secondary);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--input-border);
          border-radius: 4px;
          border: 1px solid var(--bg-secondary);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--text-secondary);
        }
        
        /* Optimize text rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        
        /* Performance optimizations for scrollable areas */
        [style*="overflow-y: auto"] {
          -webkit-overflow-scrolling: touch;
          transform: translateZ(0);
          will-change: scroll-position;
        }
        
        /* Reduce layout thrashing with better containment */
        main {
          contain: layout style;
        }
        
        /* Optimize modal animations */
        [role="dialog"] {
          will-change: opacity, transform;
        }
        
        /* Ensure no overlap with proper z-index stacking and contained shadows */
        .accordion-pulse {
          position: relative;
          z-index: 1;
          margin: 0; /* Remove any margin that might cause shadows to overlap */
        }
        
        /* Enhanced visual separation between sections with contained shadows */
        .viewport-container > main > div > div {
          isolation: isolate;
        }
        
        /* Ensure perfect 20px spacing between sections */
        .viewport-container > main > div > div:not(:last-child) {
          margin-bottom: 20px !important;
        }
        
        /* Last section (Purchase Vault) has no bottom margin - container padding handles bottom space */
        .viewport-container > main > div > div:last-child {
          margin-bottom: 0 !important;
        }
        
        /* Smooth accordion expansion/collapse */
        .accordion-pulse > * {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Ensure shadows don't extend beyond containers and perfect spacing is maintained */
        .viewport-container > main > div {
          overflow: visible; /* Allow shadows to show but contained within spacing */
        }
        
        /* Light mode shadow refinements */
        [data-theme="light"] .viewport-container > main > div > div {
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04) !important;
        }
        
        /* Dark mode shadow refinements */
        [data-theme="dark"] .viewport-container > main > div > div {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
        }
        .tab-button {
          padding: 12px 16px;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          transition: color 0.2s ease;
        }
        .tab-button:hover {
          color: var(--text-primary);
        }
        .tab-button.active {
          color: var(--text-primary);
        }
        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--color-primary);
        }
        .tab-content {
          /* Add any styling for the content area if needed */
        }
      `}),z.jsx(SV,{})]})}var s1="basil",S4=function(e){return e===3?"v3":e},a1="https://js.stripe.com",A4="".concat(a1,"/").concat(s1,"/stripe.js"),w4=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,R4=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;var I4=function(e){return w4.test(e)||R4.test(e)},C4=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a1,'"]')),t=0;t<e.length;t++){var s=e[t];if(I4(s.src))return s}return null},sb=function(e){var t="",s=document.createElement("script");s.src="".concat(A4).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(s),s},D4=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"7.7.0",startTime:t})},nu=null,Ih=null,Ch=null,O4=function(e){return function(t){e(new Error("Failed to load Stripe.js",{cause:t}))}},N4=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))}},x4=function(e){return nu!==null?nu:(nu=new Promise(function(t,s){if(typeof window>"u"||typeof document>"u"){t(null);return}if(window.Stripe){t(window.Stripe);return}try{var o=C4();if(!(o&&e)){if(!o)o=sb(e);else if(o&&Ch!==null&&Ih!==null){var u;o.removeEventListener("load",Ch),o.removeEventListener("error",Ih),(u=o.parentNode)===null||u===void 0||u.removeChild(o),o=sb(e)}}Ch=N4(t,s),Ih=O4(s),o.addEventListener("load",Ch),o.addEventListener("error",Ih)}catch(h){s(h);return}}),nu.catch(function(t){return nu=null,Promise.reject(t)}))},P4=function(e,t,s){if(e===null)return null;var o=t[0],u=o.match(/^pk_test/),h=S4(e.version),p=s1;u&&h!==p&&console.warn("Stripe.js@".concat(h," was loaded on the page, but @stripe/stripe-js@").concat("7.7.0"," expected Stripe.js@").concat(p,". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));var m=e.apply(void 0,t);return D4(m,s),m},ru,o1=!1,l1=function(){return ru||(ru=x4(null).catch(function(e){return ru=null,Promise.reject(e)}),ru)};Promise.resolve().then(function(){return l1()}).catch(function(r){o1||console.warn(r)});var k4=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];o1=!0;var o=Date.now();return l1().then(function(u){return P4(u,t,o)})},Dm={exports:{}},Om,ab;function M4(){if(ab)return Om;ab=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Om=r,Om}var Nm,ob;function V4(){if(ob)return Nm;ob=1;var r=M4();function e(){}function t(){}return t.resetWarningCache=e,Nm=function(){function s(h,p,m,y,E,R){if(R!==r){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}s.isRequired=s;function o(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return u.PropTypes=u,u},Nm}var lb;function L4(){return lb||(lb=1,Dm.exports=V4()()),Dm.exports}var U4=L4();const ct=Ef(U4);function ub(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,s)}return t}function cb(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ub(Object(t),!0).forEach(function(s){u1(r,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ub(Object(t)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(t,s))})}return r}function Fh(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Fh=function(e){return typeof e}:Fh=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fh(r)}function u1(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function j4(r,e){if(r==null)return{};var t={},s=Object.keys(r),o,u;for(u=0;u<s.length;u++)o=s[u],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function z4(r,e){if(r==null)return{};var t=j4(r,e),s,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(o=0;o<u.length;o++)s=u[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(t[s]=r[s])}return t}function c1(r,e){return B4(r)||F4(r,e)||q4(r,e)||H4()}function B4(r){if(Array.isArray(r))return r}function F4(r,e){var t=r&&(typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"]);if(t!=null){var s=[],o=!0,u=!1,h,p;try{for(t=t.call(r);!(o=(h=t.next()).done)&&(s.push(h.value),!(e&&s.length===e));o=!0);}catch(m){u=!0,p=m}finally{try{!o&&t.return!=null&&t.return()}finally{if(u)throw p}}return s}}function q4(r,e){if(r){if(typeof r=="string")return hb(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return hb(r,e)}}function hb(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,s=new Array(e);t<e;t++)s[t]=r[t];return s}function H4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var On=function(e,t,s){var o=!!s,u=He.useRef(s);He.useEffect(function(){u.current=s},[s]),He.useEffect(function(){if(!o||!e)return function(){};var h=function(){u.current&&u.current.apply(u,arguments)};return e.on(t,h),function(){e.off(t,h)}},[o,t,e,u])},gg=function(e){var t=He.useRef(e);return He.useEffect(function(){t.current=e},[e]),t.current},Vo=function(e){return e!==null&&Fh(e)==="object"},G4=function(e){return Vo(e)&&typeof e.then=="function"},K4=function(e){return Vo(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},fb="[object Object]",Y4=function r(e,t){if(!Vo(e)||!Vo(t))return e===t;var s=Array.isArray(e),o=Array.isArray(t);if(s!==o)return!1;var u=Object.prototype.toString.call(e)===fb,h=Object.prototype.toString.call(t)===fb;if(u!==h)return!1;if(!u&&!s)return e===t;var p=Object.keys(e),m=Object.keys(t);if(p.length!==m.length)return!1;for(var y={},E=0;E<p.length;E+=1)y[p[E]]=!0;for(var R=0;R<m.length;R+=1)y[m[R]]=!0;var w=Object.keys(y);if(w.length!==p.length)return!1;var L=e,q=t,ie=function(de){return r(L[de],q[de])};return w.every(ie)},h1=function(e,t,s){return Vo(e)?Object.keys(e).reduce(function(o,u){var h=!Vo(t)||!Y4(e[u],t[u]);return s.includes(u)?(h&&console.warn("Unsupported prop change: options.".concat(u," is not a mutable property.")),o):h?cb(cb({},o||{}),{},u1({},u,e[u])):o},null):null},f1="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",db=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f1;if(e===null||K4(e))return e;throw new Error(t)},$4=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f1;if(G4(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(o){return db(o,t)})};var s=db(e,t);return s===null?{tag:"empty"}:{tag:"sync",stripe:s}},Q4=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:"react-stripe-js",version:"3.8.1"}),e.registerAppInfo({name:"react-stripe-js",version:"3.8.1",url:"https://stripe.com/docs/stripe-js/react"}))},Wf=He.createContext(null);Wf.displayName="ElementsContext";var d1=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},p1=function(e){var t=e.stripe,s=e.options,o=e.children,u=He.useMemo(function(){return $4(t)},[t]),h=He.useState(function(){return{stripe:u.tag==="sync"?u.stripe:null,elements:u.tag==="sync"?u.stripe.elements(s):null}}),p=c1(h,2),m=p[0],y=p[1];He.useEffect(function(){var w=!0,L=function(ie){y(function(Y){return Y.stripe?Y:{stripe:ie,elements:ie.elements(s)}})};return u.tag==="async"&&!m.stripe?u.stripePromise.then(function(q){q&&w&&L(q)}):u.tag==="sync"&&!m.stripe&&L(u.stripe),function(){w=!1}},[u,m,s]);var E=gg(t);He.useEffect(function(){E!==null&&E!==t&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[E,t]);var R=gg(s);return He.useEffect(function(){if(m.elements){var w=h1(s,R,["clientSecret","fonts"]);w&&m.elements.update(w)}},[s,R,m.elements]),He.useEffect(function(){Q4(m.stripe)},[m.stripe]),He.createElement(Wf.Provider,{value:m},o)};p1.propTypes={stripe:ct.any,options:ct.object};var X4=function(e){var t=He.useContext(Wf);return d1(t,e)},lL=function(){var e=X4("calls useElements()"),t=e.elements;return t};ct.func.isRequired;var m1=He.createContext(null);m1.displayName="CheckoutSdkContext";var W4=function(e,t){if(!e)throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(t," in an <CheckoutProvider> provider."));return e},Z4=He.createContext(null);Z4.displayName="CheckoutContext";ct.any,ct.shape({fetchClientSecret:ct.func.isRequired,elementsOptions:ct.object}).isRequired;var yg=function(e){var t=He.useContext(m1),s=He.useContext(Wf);if(t&&s)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return t?W4(t,e):d1(s,e)},J4=["mode"],eL=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Tt=function(e,t){var s="".concat(eL(e),"Element"),o=function(m){var y=m.id,E=m.className,R=m.options,w=R===void 0?{}:R,L=m.onBlur,q=m.onFocus,ie=m.onReady,Y=m.onChange,de=m.onEscape,ge=m.onClick,ce=m.onLoadError,ye=m.onLoaderStart,re=m.onNetworksChange,fe=m.onConfirm,O=m.onCancel,A=m.onShippingAddressChange,D=m.onShippingRateChange,C=yg("mounts <".concat(s,">")),P="elements"in C?C.elements:null,x="checkoutSdk"in C?C.checkoutSdk:null,b=He.useState(null),Z=c1(b,2),te=Z[0],j=Z[1],$=He.useRef(null),ae=He.useRef(null);On(te,"blur",L),On(te,"focus",q),On(te,"escape",de),On(te,"click",ge),On(te,"loaderror",ce),On(te,"loaderstart",ye),On(te,"networkschange",re),On(te,"confirm",fe),On(te,"cancel",O),On(te,"shippingaddresschange",A),On(te,"shippingratechange",D),On(te,"change",Y);var le;ie&&(e==="expressCheckout"?le=ie:le=function(){ie(te)}),On(te,"ready",le),He.useLayoutEffect(function(){if($.current===null&&ae.current!==null&&(P||x)){var M=null;if(x)switch(e){case"payment":M=x.createPaymentElement(w);break;case"address":if("mode"in w){var se=w.mode,ne=z4(w,J4);if(se==="shipping")M=x.createShippingAddressElement(ne);else if(se==="billing")M=x.createBillingAddressElement(ne);else throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.")}else throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");break;case"expressCheckout":M=x.createExpressCheckoutElement(w);break;case"currencySelector":M=x.createCurrencySelectorElement();break;case"taxId":M=x.createTaxIdElement(w);break;default:throw new Error("Invalid Element type ".concat(s,". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))}else P&&(M=P.create(e,w));$.current=M,j(M),M&&M.mount(ae.current)}},[P,x,w]);var I=gg(w);return He.useEffect(function(){if($.current){var M=h1(w,I,["paymentRequest"]);M&&"update"in $.current&&$.current.update(M)}},[w,I]),He.useLayoutEffect(function(){return function(){if($.current&&typeof $.current.destroy=="function")try{$.current.destroy(),$.current=null}catch{}}},[]),He.createElement("div",{id:y,className:E,ref:ae})},u=function(m){yg("mounts <".concat(s,">"));var y=m.id,E=m.className;return He.createElement("div",{id:y,className:E})},h=t?u:o;return h.propTypes={id:ct.string,className:ct.string,onChange:ct.func,onBlur:ct.func,onFocus:ct.func,onReady:ct.func,onEscape:ct.func,onClick:ct.func,onLoadError:ct.func,onLoaderStart:ct.func,onNetworksChange:ct.func,onConfirm:ct.func,onCancel:ct.func,onShippingAddressChange:ct.func,onShippingRateChange:ct.func,options:ct.object},h.displayName=s,h.__elementType=e,h},bt=typeof window>"u",tL=He.createContext(null);tL.displayName="EmbeddedCheckoutProviderContext";var uL=function(){var e=yg("calls useStripe()"),t=e.stripe;return t};Tt("auBankAccount",bt);var cL=Tt("card",bt);Tt("cardNumber",bt);Tt("cardExpiry",bt);Tt("cardCvc",bt);Tt("fpxBank",bt);Tt("iban",bt);Tt("idealBank",bt);Tt("p24Bank",bt);Tt("epsBank",bt);Tt("payment",bt);Tt("expressCheckout",bt);Tt("currencySelector",bt);Tt("paymentRequestButton",bt);Tt("linkAuthentication",bt);Tt("address",bt);Tt("shippingAddress",bt);Tt("paymentMethodMessaging",bt);Tt("affirmMessage",bt);Tt("afterpayClearpayMessage",bt);Tt("taxId",bt);const nL=k4("pk_test_51RptiDIRziOr78KomqODnvUBcXPl42eu914ecZxD0j7kSujSVLCepSLLAKyqzUK4ksV8zjZsbo9DYvfebBESJ3yR00cG9ADEfN");QR.createRoot(document.getElementById("root")).render(z.jsx(He.StrictMode,{children:z.jsx(p1,{stripe:nL,children:z.jsx(b4,{})})}));export{sn as B,cL as C,$w as I,Cm as M,aL as a,mV as b,iL as c,lL as d,oL as e,sL as g,z as j,f4 as o,W0 as p,ve as r,uL as u};
