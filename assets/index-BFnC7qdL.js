(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))m(y);new MutationObserver(y=>{for(const S of y)if(S.type==="childList")for(const O of S.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&m(O)}).observe(document,{childList:!0,subtree:!0});function u(y){const S={};return y.integrity&&(S.integrity=y.integrity),y.referrerPolicy&&(S.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?S.credentials="include":y.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function m(y){if(y.ep)return;y.ep=!0;const S=u(y);fetch(y.href,S)}})();function tf(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ql={exports:{}},Cr={},Ul={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hs;function rf(){if(Hs)return Q;Hs=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),O=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),W=Symbol.iterator;function V(p){return p===null||typeof p!="object"?null:(p=W&&p[W]||p["@@iterator"],typeof p=="function"?p:null)}var ye={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,P={};function j(p,k,$){this.props=p,this.context=k,this.refs=P,this.updater=$||ye}j.prototype.isReactComponent={},j.prototype.setState=function(p,k){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,k,"setState")},j.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Re(){}Re.prototype=j.prototype;function Ne(p,k,$){this.props=p,this.context=k,this.refs=P,this.updater=$||ye}var he=Ne.prototype=new Re;he.constructor=Ne,B(he,j.prototype),he.isPureReactComponent=!0;var ae=Array.isArray,xe=Object.prototype.hasOwnProperty,de={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function ze(p,k,$){var X,G={},J=null,re=null;if(k!=null)for(X in k.ref!==void 0&&(re=k.ref),k.key!==void 0&&(J=""+k.key),k)xe.call(k,X)&&!me.hasOwnProperty(X)&&(G[X]=k[X]);var ne=arguments.length-2;if(ne===1)G.children=$;else if(1<ne){for(var ue=Array(ne),Ke=0;Ke<ne;Ke++)ue[Ke]=arguments[Ke+2];G.children=ue}if(p&&p.defaultProps)for(X in ne=p.defaultProps,ne)G[X]===void 0&&(G[X]=ne[X]);return{$$typeof:a,type:p,key:J,ref:re,props:G,_owner:de.current}}function we(p,k){return{$$typeof:a,type:p.type,key:k,ref:p.ref,props:p.props,_owner:p._owner}}function zn(p){return typeof p=="object"&&p!==null&&p.$$typeof===a}function ot(p){var k={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function($){return k[$]})}var bn=/\/+/g;function Ye(p,k){return typeof p=="object"&&p!==null&&p.key!=null?ot(""+p.key):k.toString(36)}function sn(p,k,$,X,G){var J=typeof p;(J==="undefined"||J==="boolean")&&(p=null);var re=!1;if(p===null)re=!0;else switch(J){case"string":case"number":re=!0;break;case"object":switch(p.$$typeof){case a:case c:re=!0}}if(re)return re=p,G=G(re),p=X===""?"."+Ye(re,0):X,ae(G)?($="",p!=null&&($=p.replace(bn,"$&/")+"/"),sn(G,k,$,"",function(Ke){return Ke})):G!=null&&(zn(G)&&(G=we(G,$+(!G.key||re&&re.key===G.key?"":(""+G.key).replace(bn,"$&/")+"/")+p)),k.push(G)),1;if(re=0,X=X===""?".":X+":",ae(p))for(var ne=0;ne<p.length;ne++){J=p[ne];var ue=X+Ye(J,ne);re+=sn(J,k,$,ue,G)}else if(ue=V(p),typeof ue=="function")for(p=ue.call(p),ne=0;!(J=p.next()).done;)J=J.value,ue=X+Ye(J,ne++),re+=sn(J,k,$,ue,G);else if(J==="object")throw k=String(p),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return re}function kn(p,k,$){if(p==null)return p;var X=[],G=0;return sn(p,X,"","",function(J){return k.call($,J,G++)}),X}function He(p){if(p._status===-1){var k=p._result;k=k(),k.then(function($){(p._status===0||p._status===-1)&&(p._status=1,p._result=$)},function($){(p._status===0||p._status===-1)&&(p._status=2,p._result=$)}),p._status===-1&&(p._status=0,p._result=k)}if(p._status===1)return p._result.default;throw p._result}var ge={current:null},z={transition:null},q={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:z,ReactCurrentOwner:de};function T(){throw Error("act(...) is not supported in production builds of React.")}return Q.Children={map:kn,forEach:function(p,k,$){kn(p,function(){k.apply(this,arguments)},$)},count:function(p){var k=0;return kn(p,function(){k++}),k},toArray:function(p){return kn(p,function(k){return k})||[]},only:function(p){if(!zn(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},Q.Component=j,Q.Fragment=u,Q.Profiler=y,Q.PureComponent=Ne,Q.StrictMode=m,Q.Suspense=N,Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Q.act=T,Q.cloneElement=function(p,k,$){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var X=B({},p.props),G=p.key,J=p.ref,re=p._owner;if(k!=null){if(k.ref!==void 0&&(J=k.ref,re=de.current),k.key!==void 0&&(G=""+k.key),p.type&&p.type.defaultProps)var ne=p.type.defaultProps;for(ue in k)xe.call(k,ue)&&!me.hasOwnProperty(ue)&&(X[ue]=k[ue]===void 0&&ne!==void 0?ne[ue]:k[ue])}var ue=arguments.length-2;if(ue===1)X.children=$;else if(1<ue){ne=Array(ue);for(var Ke=0;Ke<ue;Ke++)ne[Ke]=arguments[Ke+2];X.children=ne}return{$$typeof:a,type:p.type,key:G,ref:J,props:X,_owner:re}},Q.createContext=function(p){return p={$$typeof:O,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:S,_context:p},p.Consumer=p},Q.createElement=ze,Q.createFactory=function(p){var k=ze.bind(null,p);return k.type=p,k},Q.createRef=function(){return{current:null}},Q.forwardRef=function(p){return{$$typeof:I,render:p}},Q.isValidElement=zn,Q.lazy=function(p){return{$$typeof:Y,_payload:{_status:-1,_result:p},_init:He}},Q.memo=function(p,k){return{$$typeof:H,type:p,compare:k===void 0?null:k}},Q.startTransition=function(p){var k=z.transition;z.transition={};try{p()}finally{z.transition=k}},Q.unstable_act=T,Q.useCallback=function(p,k){return ge.current.useCallback(p,k)},Q.useContext=function(p){return ge.current.useContext(p)},Q.useDebugValue=function(){},Q.useDeferredValue=function(p){return ge.current.useDeferredValue(p)},Q.useEffect=function(p,k){return ge.current.useEffect(p,k)},Q.useId=function(){return ge.current.useId()},Q.useImperativeHandle=function(p,k,$){return ge.current.useImperativeHandle(p,k,$)},Q.useInsertionEffect=function(p,k){return ge.current.useInsertionEffect(p,k)},Q.useLayoutEffect=function(p,k){return ge.current.useLayoutEffect(p,k)},Q.useMemo=function(p,k){return ge.current.useMemo(p,k)},Q.useReducer=function(p,k,$){return ge.current.useReducer(p,k,$)},Q.useRef=function(p){return ge.current.useRef(p)},Q.useState=function(p){return ge.current.useState(p)},Q.useSyncExternalStore=function(p,k,$){return ge.current.useSyncExternalStore(p,k,$)},Q.useTransition=function(){return ge.current.useTransition()},Q.version="18.3.1",Q}var Bs;function Ql(){return Bs||(Bs=1,Ul.exports=rf()),Ul.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs;function of(){if(Vs)return Cr;Vs=1;var a=Ql(),c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,y=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function O(I,N,H){var Y,W={},V=null,ye=null;H!==void 0&&(V=""+H),N.key!==void 0&&(V=""+N.key),N.ref!==void 0&&(ye=N.ref);for(Y in N)m.call(N,Y)&&!S.hasOwnProperty(Y)&&(W[Y]=N[Y]);if(I&&I.defaultProps)for(Y in N=I.defaultProps,N)W[Y]===void 0&&(W[Y]=N[Y]);return{$$typeof:c,type:I,key:V,ref:ye,props:W,_owner:y.current}}return Cr.Fragment=u,Cr.jsx=O,Cr.jsxs=O,Cr}var $s;function lf(){return $s||($s=1,ql.exports=of()),ql.exports}var Z=lf(),Ho={},Hl={exports:{}},Xe={},Bl={exports:{}},Vl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws;function af(){return Ws||(Ws=1,function(a){function c(z,q){var T=z.length;z.push(q);e:for(;0<T;){var p=T-1>>>1,k=z[p];if(0<y(k,q))z[p]=q,z[T]=k,T=p;else break e}}function u(z){return z.length===0?null:z[0]}function m(z){if(z.length===0)return null;var q=z[0],T=z.pop();if(T!==q){z[0]=T;e:for(var p=0,k=z.length,$=k>>>1;p<$;){var X=2*(p+1)-1,G=z[X],J=X+1,re=z[J];if(0>y(G,T))J<k&&0>y(re,G)?(z[p]=re,z[J]=T,p=J):(z[p]=G,z[X]=T,p=X);else if(J<k&&0>y(re,T))z[p]=re,z[J]=T,p=J;else break e}}return q}function y(z,q){var T=z.sortIndex-q.sortIndex;return T!==0?T:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var S=performance;a.unstable_now=function(){return S.now()}}else{var O=Date,I=O.now();a.unstable_now=function(){return O.now()-I}}var N=[],H=[],Y=1,W=null,V=3,ye=!1,B=!1,P=!1,j=typeof setTimeout=="function"?setTimeout:null,Re=typeof clearTimeout=="function"?clearTimeout:null,Ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(z){for(var q=u(H);q!==null;){if(q.callback===null)m(H);else if(q.startTime<=z)m(H),q.sortIndex=q.expirationTime,c(N,q);else break;q=u(H)}}function ae(z){if(P=!1,he(z),!B)if(u(N)!==null)B=!0,He(xe);else{var q=u(H);q!==null&&ge(ae,q.startTime-z)}}function xe(z,q){B=!1,P&&(P=!1,Re(ze),ze=-1),ye=!0;var T=V;try{for(he(q),W=u(N);W!==null&&(!(W.expirationTime>q)||z&&!ot());){var p=W.callback;if(typeof p=="function"){W.callback=null,V=W.priorityLevel;var k=p(W.expirationTime<=q);q=a.unstable_now(),typeof k=="function"?W.callback=k:W===u(N)&&m(N),he(q)}else m(N);W=u(N)}if(W!==null)var $=!0;else{var X=u(H);X!==null&&ge(ae,X.startTime-q),$=!1}return $}finally{W=null,V=T,ye=!1}}var de=!1,me=null,ze=-1,we=5,zn=-1;function ot(){return!(a.unstable_now()-zn<we)}function bn(){if(me!==null){var z=a.unstable_now();zn=z;var q=!0;try{q=me(!0,z)}finally{q?Ye():(de=!1,me=null)}}else de=!1}var Ye;if(typeof Ne=="function")Ye=function(){Ne(bn)};else if(typeof MessageChannel<"u"){var sn=new MessageChannel,kn=sn.port2;sn.port1.onmessage=bn,Ye=function(){kn.postMessage(null)}}else Ye=function(){j(bn,0)};function He(z){me=z,de||(de=!0,Ye())}function ge(z,q){ze=j(function(){z(a.unstable_now())},q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_continueExecution=function(){B||ye||(B=!0,He(xe))},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return V},a.unstable_getFirstCallbackNode=function(){return u(N)},a.unstable_next=function(z){switch(V){case 1:case 2:case 3:var q=3;break;default:q=V}var T=V;V=q;try{return z()}finally{V=T}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=V;V=z;try{return q()}finally{V=T}},a.unstable_scheduleCallback=function(z,q,T){var p=a.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?p+T:p):T=p,z){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=T+k,z={id:Y++,callback:q,priorityLevel:z,startTime:T,expirationTime:k,sortIndex:-1},T>p?(z.sortIndex=T,c(H,z),u(N)===null&&z===u(H)&&(P?(Re(ze),ze=-1):P=!0,ge(ae,T-p))):(z.sortIndex=k,c(N,z),B||ye||(B=!0,He(xe))),z},a.unstable_shouldYield=ot,a.unstable_wrapCallback=function(z){var q=V;return function(){var T=V;V=q;try{return z.apply(this,arguments)}finally{V=T}}}}(Vl)),Vl}var Qs;function uf(){return Qs||(Qs=1,Bl.exports=af()),Bl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs;function sf(){if(Xs)return Xe;Xs=1;var a=Ql(),c=uf();function u(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,y={};function S(e,n){O(e,n),O(e+"Capture",n)}function O(e,n){for(y[e]=n,e=0;e<n.length;e++)m.add(n[e])}var I=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,H=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Y={},W={};function V(e){return N.call(W,e)?!0:N.call(Y,e)?!1:H.test(e)?W[e]=!0:(Y[e]=!0,!1)}function ye(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,n,t,r){if(n===null||typeof n>"u"||ye(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function P(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){j[e]=new P(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];j[n]=new P(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){j[e]=new P(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){j[e]=new P(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){j[e]=new P(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){j[e]=new P(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){j[e]=new P(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){j[e]=new P(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){j[e]=new P(e,5,!1,e.toLowerCase(),null,!1,!1)});var Re=/[\-:]([a-z])/g;function Ne(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Re,Ne);j[n]=new P(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Re,Ne);j[n]=new P(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Re,Ne);j[n]=new P(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){j[e]=new P(e,1,!1,e.toLowerCase(),null,!1,!1)}),j.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){j[e]=new P(e,1,!1,e.toLowerCase(),null,!0,!0)});function he(e,n,t,r){var o=j.hasOwnProperty(n)?j[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(B(n,t,o,r)&&(t=null),r||o===null?V(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ae=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),de=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),ze=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),zn=Symbol.for("react.provider"),ot=Symbol.for("react.context"),bn=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),sn=Symbol.for("react.suspense_list"),kn=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),z=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,p;function k(e){if(p===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);p=n&&n[1]||""}return`
`+p+e}var $=!1;function X(e,n){if(!e||$)return"";$=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(v){var r=v}Reflect.construct(e,[],n)}else{try{n.call()}catch(v){r=v}e.call(n.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var o=v.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var d=`
`+o[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=s);break}}}finally{$=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function G(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case me:return"Fragment";case de:return"Portal";case we:return"Profiler";case ze:return"StrictMode";case Ye:return"Suspense";case sn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ot:return(e.displayName||"Context")+".Consumer";case zn:return(e._context.displayName||"Context")+".Provider";case bn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kn:return n=e.displayName||null,n!==null?n:J(e.type)||"Memo";case He:n=e._payload,e=e._init;try{return J(e(n))}catch{}}return null}function re(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(n);case 8:return n===ze?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e){var n=ue(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Nr(e){e._valueTracker||(e._valueTracker=Ke(e))}function Xl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ue(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qo(e,n){var t=n.checked;return T({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Yl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ne(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Kl(e,n){n=n.checked,n!=null&&he(e,"checked",n,!1)}function Xo(e,n){Kl(e,n);var t=ne(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Yo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Yo(e,n.type,ne(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Zl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Yo(e,n,t){(n!=="number"||Mr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Vt=Array.isArray;function yt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ne(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Ko(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(u(91));return T({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(u(92));if(Vt(t)){if(1<t.length)throw Error(u(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ne(t)}}function Jl(e,n){var t=ne(n.value),r=ne(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ea(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function na(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?na(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,ta=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $t(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ac=["Webkit","ms","Moz","O"];Object.keys(Wt).forEach(function(e){ac.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Wt[n]=Wt[e]})});function ra(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Wt.hasOwnProperty(e)&&Wt[e]?(""+n).trim():n+"px"}function oa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=ra(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var uc=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Go(e,n){if(n){if(uc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(u(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(u(61))}if(n.style!=null&&typeof n.style!="object")throw Error(u(62))}}function Jo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ei=null;function ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ti=null,bt=null,kt=null;function ia(e){if(e=hr(e)){if(typeof ti!="function")throw Error(u(280));var n=e.stateNode;n&&(n=to(n),ti(e.stateNode,e.type,n))}}function la(e){bt?kt?kt.push(e):kt=[e]:bt=e}function aa(){if(bt){var e=bt,n=kt;if(kt=bt=null,ia(e),n)for(e=0;e<n.length;e++)ia(n[e])}}function ua(e,n){return e(n)}function sa(){}var ri=!1;function ca(e,n,t){if(ri)return e(n,t);ri=!0;try{return ua(e,n,t)}finally{ri=!1,(bt!==null||kt!==null)&&(sa(),aa())}}function Qt(e,n){var t=e.stateNode;if(t===null)return null;var r=to(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var oi=!1;if(I)try{var Xt={};Object.defineProperty(Xt,"passive",{get:function(){oi=!0}}),window.addEventListener("test",Xt,Xt),window.removeEventListener("test",Xt,Xt)}catch{oi=!1}function sc(e,n,t,r,o,i,l,s,d){var v=Array.prototype.slice.call(arguments,3);try{n.apply(t,v)}catch(x){this.onError(x)}}var Yt=!1,Rr=null,Lr=!1,ii=null,cc={onError:function(e){Yt=!0,Rr=e}};function dc(e,n,t,r,o,i,l,s,d){Yt=!1,Rr=null,sc.apply(cc,arguments)}function fc(e,n,t,r,o,i,l,s,d){if(dc.apply(this,arguments),Yt){if(Yt){var v=Rr;Yt=!1,Rr=null}else throw Error(u(198));Lr||(Lr=!0,ii=v)}}function it(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function da(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fa(e){if(it(e)!==e)throw Error(u(188))}function pc(e){var n=e.alternate;if(!n){if(n=it(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return fa(o),e;if(i===r)return fa(o),n;i=i.sibling}throw Error(u(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===t){l=!0,t=o,r=i;break}if(s===r){l=!0,r=o,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,r=o;break}if(s===r){l=!0,r=i,t=o;break}s=s.sibling}if(!l)throw Error(u(189))}}if(t.alternate!==r)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function pa(e){return e=pc(e),e!==null?ha(e):null}function ha(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ha(e);if(n!==null)return n;e=e.sibling}return null}var ma=c.unstable_scheduleCallback,ga=c.unstable_cancelCallback,hc=c.unstable_shouldYield,mc=c.unstable_requestPaint,be=c.unstable_now,gc=c.unstable_getCurrentPriorityLevel,li=c.unstable_ImmediatePriority,va=c.unstable_UserBlockingPriority,jr=c.unstable_NormalPriority,vc=c.unstable_LowPriority,ya=c.unstable_IdlePriority,Ar=null,xn=null;function yc(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Ar,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:xc,bc=Math.log,kc=Math.LN2;function xc(e){return e>>>=0,e===0?32:31-(bc(e)/kc|0)|0}var Fr=64,Ir=4194304;function Kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~o;s!==0?r=Kt(s):(i&=l,i!==0&&(r=Kt(i)))}else l=t&~o,l!==0?r=Kt(l):i!==0&&(r=Kt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-cn(n),o=1<<t,r|=e[t],n&=~o;return r}function wc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-cn(i),s=1<<l,d=o[l];d===-1?(!(s&t)||s&r)&&(o[l]=wc(s,n)):d<=n&&(e.expiredLanes|=s),i&=~s}}function ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ba(){var e=Fr;return Fr<<=1,!(Fr&4194240)&&(Fr=64),e}function ui(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Zt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-cn(n),e[n]=t}function Pc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-cn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function si(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-cn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var te=0;function ka(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xa,ci,wa,Sa,Pa,di=!1,Ur=[],Fn=null,In=null,qn=null,Gt=new Map,Jt=new Map,Un=[],_c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _a(e,n){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Gt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jt.delete(n.pointerId)}}function er(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=hr(n),n!==null&&ci(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Oc(e,n,t,r,o){switch(n){case"focusin":return Fn=er(Fn,e,n,t,r,o),!0;case"dragenter":return In=er(In,e,n,t,r,o),!0;case"mouseover":return qn=er(qn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Gt.set(i,er(Gt.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Jt.set(i,er(Jt.get(i)||null,e,n,t,r,o)),!0}return!1}function Oa(e){var n=lt(e.target);if(n!==null){var t=it(n);if(t!==null){if(n=t.tag,n===13){if(n=da(t),n!==null){e.blockedOn=n,Pa(e.priority,function(){wa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ei=r,t.target.dispatchEvent(r),ei=null}else return n=hr(t),n!==null&&ci(n),e.blockedOn=t,!1;n.shift()}return!0}function za(e,n,t){Hr(e)&&t.delete(n)}function zc(){di=!1,Fn!==null&&Hr(Fn)&&(Fn=null),In!==null&&Hr(In)&&(In=null),qn!==null&&Hr(qn)&&(qn=null),Gt.forEach(za),Jt.forEach(za)}function nr(e,n){e.blockedOn===n&&(e.blockedOn=null,di||(di=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,zc)))}function tr(e){function n(o){return nr(o,e)}if(0<Ur.length){nr(Ur[0],e);for(var t=1;t<Ur.length;t++){var r=Ur[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&nr(Fn,e),In!==null&&nr(In,e),qn!==null&&nr(qn,e),Gt.forEach(n),Jt.forEach(n),t=0;t<Un.length;t++)r=Un[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(t=Un[0],t.blockedOn===null);)Oa(t),t.blockedOn===null&&Un.shift()}var xt=ae.ReactCurrentBatchConfig,Br=!0;function Ec(e,n,t,r){var o=te,i=xt.transition;xt.transition=null;try{te=1,fi(e,n,t,r)}finally{te=o,xt.transition=i}}function Cc(e,n,t,r){var o=te,i=xt.transition;xt.transition=null;try{te=4,fi(e,n,t,r)}finally{te=o,xt.transition=i}}function fi(e,n,t,r){if(Br){var o=pi(e,n,t,r);if(o===null)Ti(e,n,r,Vr,t),_a(e,r);else if(Oc(o,e,n,t,r))r.stopPropagation();else if(_a(e,r),n&4&&-1<_c.indexOf(e)){for(;o!==null;){var i=hr(o);if(i!==null&&xa(i),i=pi(e,n,t,r),i===null&&Ti(e,n,r,Vr,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ti(e,n,r,null,t)}}var Vr=null;function pi(e,n,t,r){if(Vr=null,e=ni(r),e=lt(e),e!==null)if(n=it(e),n===null)e=null;else if(t=n.tag,t===13){if(e=da(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Vr=e,null}function Ea(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gc()){case li:return 1;case va:return 4;case jr:case vc:return 16;case ya:return 536870912;default:return 16}default:return 16}}var Hn=null,hi=null,$r=null;function Ca(){if($r)return $r;var e,n=hi,t=n.length,r,o="value"in Hn?Hn.value:Hn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return $r=o.slice(e,1<r?1-r:void 0)}function Wr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function Ta(){return!1}function Ze(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qr:Ta,this.isPropagationStopped=Ta,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=Ze(wt),rr=T({},wt,{view:0,detail:0}),Tc=Ze(rr),gi,vi,or,Xr=T({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(gi=e.screenX-or.screenX,vi=e.screenY-or.screenY):vi=gi=0,or=e),gi)},movementY:function(e){return"movementY"in e?e.movementY:vi}}),Na=Ze(Xr),Nc=T({},Xr,{dataTransfer:0}),Mc=Ze(Nc),Dc=T({},rr,{relatedTarget:0}),yi=Ze(Dc),Rc=T({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lc=Ze(Rc),jc=T({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ac=Ze(jc),Fc=T({},wt,{data:0}),Ma=Ze(Fc),Ic={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Uc[e])?!!n[e]:!1}function bi(){return Hc}var Bc=T({},rr,{key:function(e){if(e.key){var n=Ic[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bi,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vc=Ze(Bc),$c=T({},Xr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Da=Ze($c),Wc=T({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bi}),Qc=Ze(Wc),Xc=T({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yc=Ze(Xc),Kc=T({},Xr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zc=Ze(Kc),Gc=[9,13,27,32],ki=I&&"CompositionEvent"in window,ir=null;I&&"documentMode"in document&&(ir=document.documentMode);var Jc=I&&"TextEvent"in window&&!ir,Ra=I&&(!ki||ir&&8<ir&&11>=ir),La=" ",ja=!1;function Aa(e,n){switch(e){case"keyup":return Gc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var St=!1;function ed(e,n){switch(e){case"compositionend":return Fa(n);case"keypress":return n.which!==32?null:(ja=!0,La);case"textInput":return e=n.data,e===La&&ja?null:e;default:return null}}function nd(e,n){if(St)return e==="compositionend"||!ki&&Aa(e,n)?(e=Ca(),$r=hi=Hn=null,St=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ra&&n.locale!=="ko"?null:n.data;default:return null}}var td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!td[e.type]:n==="textarea"}function qa(e,n,t,r){la(r),n=Jr(n,"onChange"),0<n.length&&(t=new mi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var lr=null,ar=null;function rd(e){ou(e,0)}function Yr(e){var n=Et(e);if(Xl(n))return e}function od(e,n){if(e==="change")return n}var Ua=!1;if(I){var xi;if(I){var wi="oninput"in document;if(!wi){var Ha=document.createElement("div");Ha.setAttribute("oninput","return;"),wi=typeof Ha.oninput=="function"}xi=wi}else xi=!1;Ua=xi&&(!document.documentMode||9<document.documentMode)}function Ba(){lr&&(lr.detachEvent("onpropertychange",Va),ar=lr=null)}function Va(e){if(e.propertyName==="value"&&Yr(ar)){var n=[];qa(n,ar,e,ni(e)),ca(rd,n)}}function id(e,n,t){e==="focusin"?(Ba(),lr=n,ar=t,lr.attachEvent("onpropertychange",Va)):e==="focusout"&&Ba()}function ld(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yr(ar)}function ad(e,n){if(e==="click")return Yr(n)}function ud(e,n){if(e==="input"||e==="change")return Yr(n)}function sd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var dn=typeof Object.is=="function"?Object.is:sd;function ur(e,n){if(dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!N.call(n,o)||!dn(e[o],n[o]))return!1}return!0}function $a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wa(e,n){var t=$a(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$a(t)}}function Qa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xa(){for(var e=window,n=Mr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Mr(e.document)}return n}function Si(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cd(e){var n=Xa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Qa(t.ownerDocument.documentElement,t)){if(r!==null&&Si(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Wa(t,i);var l=Wa(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dd=I&&"documentMode"in document&&11>=document.documentMode,Pt=null,Pi=null,sr=null,_i=!1;function Ya(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_i||Pt==null||Pt!==Mr(r)||(r=Pt,"selectionStart"in r&&Si(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&ur(sr,r)||(sr=r,r=Jr(Pi,"onSelect"),0<r.length&&(n=new mi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Pt)))}function Kr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var _t={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},Oi={},Ka={};I&&(Ka=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);function Zr(e){if(Oi[e])return Oi[e];if(!_t[e])return e;var n=_t[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ka)return Oi[e]=n[t];return e}var Za=Zr("animationend"),Ga=Zr("animationiteration"),Ja=Zr("animationstart"),eu=Zr("transitionend"),nu=new Map,tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,n){nu.set(e,n),S(n,[e])}for(var zi=0;zi<tu.length;zi++){var Ei=tu[zi],fd=Ei.toLowerCase(),pd=Ei[0].toUpperCase()+Ei.slice(1);Bn(fd,"on"+pd)}Bn(Za,"onAnimationEnd"),Bn(Ga,"onAnimationIteration"),Bn(Ja,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(eu,"onTransitionEnd"),O("onMouseEnter",["mouseout","mouseover"]),O("onMouseLeave",["mouseout","mouseover"]),O("onPointerEnter",["pointerout","pointerover"]),O("onPointerLeave",["pointerout","pointerover"]),S("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S("onBeforeInput",["compositionend","keypress","textInput","paste"]),S("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hd=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function ru(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,fc(r,n,void 0,e),e.currentTarget=null}function ou(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],d=s.instance,v=s.currentTarget;if(s=s.listener,d!==i&&o.isPropagationStopped())break e;ru(o,s,v),i=d}else for(l=0;l<r.length;l++){if(s=r[l],d=s.instance,v=s.currentTarget,s=s.listener,d!==i&&o.isPropagationStopped())break e;ru(o,s,v),i=d}}}if(Lr)throw e=ii,Lr=!1,ii=null,e}function ie(e,n){var t=n[ji];t===void 0&&(t=n[ji]=new Set);var r=e+"__bubble";t.has(r)||(iu(n,e,2,!1),t.add(r))}function Ci(e,n,t){var r=0;n&&(r|=4),iu(t,e,r,n)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Gr]){e[Gr]=!0,m.forEach(function(t){t!=="selectionchange"&&(hd.has(t)||Ci(t,!1,e),Ci(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gr]||(n[Gr]=!0,Ci("selectionchange",!1,n))}}function iu(e,n,t,r){switch(Ea(n)){case 1:var o=Ec;break;case 4:o=Cc;break;default:o=fi}t=o.bind(null,n,t,e),o=void 0,!oi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Ti(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;l=l.return}for(;s!==null;){if(l=lt(s),l===null)return;if(d=l.tag,d===5||d===6){r=i=l;continue e}s=s.parentNode}}r=r.return}ca(function(){var v=i,x=ni(t),w=[];e:{var b=nu.get(e);if(b!==void 0){var E=mi,M=e;switch(e){case"keypress":if(Wr(t)===0)break e;case"keydown":case"keyup":E=Vc;break;case"focusin":M="focus",E=yi;break;case"focusout":M="blur",E=yi;break;case"beforeblur":case"afterblur":E=yi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Mc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Qc;break;case Za:case Ga:case Ja:E=Lc;break;case eu:E=Yc;break;case"scroll":E=Tc;break;case"wheel":E=Zc;break;case"copy":case"cut":case"paste":E=Ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Da}var D=(n&4)!==0,ke=!D&&e==="scroll",h=D?b!==null?b+"Capture":null:b;D=[];for(var f=v,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,h!==null&&(_=Qt(f,h),_!=null&&D.push(fr(f,_,g)))),ke)break;f=f.return}0<D.length&&(b=new E(b,M,null,t,x),w.push({event:b,listeners:D}))}}if(!(n&7)){e:{if(b=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",b&&t!==ei&&(M=t.relatedTarget||t.fromElement)&&(lt(M)||M[En]))break e;if((E||b)&&(b=x.window===x?x:(b=x.ownerDocument)?b.defaultView||b.parentWindow:window,E?(M=t.relatedTarget||t.toElement,E=v,M=M?lt(M):null,M!==null&&(ke=it(M),M!==ke||M.tag!==5&&M.tag!==6)&&(M=null)):(E=null,M=v),E!==M)){if(D=Na,_="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(D=Da,_="onPointerLeave",h="onPointerEnter",f="pointer"),ke=E==null?b:Et(E),g=M==null?b:Et(M),b=new D(_,f+"leave",E,t,x),b.target=ke,b.relatedTarget=g,_=null,lt(x)===v&&(D=new D(h,f+"enter",M,t,x),D.target=g,D.relatedTarget=ke,_=D),ke=_,E&&M)n:{for(D=E,h=M,f=0,g=D;g;g=Ot(g))f++;for(g=0,_=h;_;_=Ot(_))g++;for(;0<f-g;)D=Ot(D),f--;for(;0<g-f;)h=Ot(h),g--;for(;f--;){if(D===h||h!==null&&D===h.alternate)break n;D=Ot(D),h=Ot(h)}D=null}else D=null;E!==null&&lu(w,b,E,D,!1),M!==null&&ke!==null&&lu(w,ke,M,D,!0)}}e:{if(b=v?Et(v):window,E=b.nodeName&&b.nodeName.toLowerCase(),E==="select"||E==="input"&&b.type==="file")var R=od;else if(Ia(b))if(Ua)R=ud;else{R=ld;var A=id}else(E=b.nodeName)&&E.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(R=ad);if(R&&(R=R(e,v))){qa(w,R,t,x);break e}A&&A(e,b,v),e==="focusout"&&(A=b._wrapperState)&&A.controlled&&b.type==="number"&&Yo(b,"number",b.value)}switch(A=v?Et(v):window,e){case"focusin":(Ia(A)||A.contentEditable==="true")&&(Pt=A,Pi=v,sr=null);break;case"focusout":sr=Pi=Pt=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,Ya(w,t,x);break;case"selectionchange":if(dd)break;case"keydown":case"keyup":Ya(w,t,x)}var F;if(ki)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else St?Aa(e,t)&&(U="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(U="onCompositionStart");U&&(Ra&&t.locale!=="ko"&&(St||U!=="onCompositionStart"?U==="onCompositionEnd"&&St&&(F=Ca()):(Hn=x,hi="value"in Hn?Hn.value:Hn.textContent,St=!0)),A=Jr(v,U),0<A.length&&(U=new Ma(U,e,null,t,x),w.push({event:U,listeners:A}),F?U.data=F:(F=Fa(t),F!==null&&(U.data=F)))),(F=Jc?ed(e,t):nd(e,t))&&(v=Jr(v,"onBeforeInput"),0<v.length&&(x=new Ma("onBeforeInput","beforeinput",null,t,x),w.push({event:x,listeners:v}),x.data=F))}ou(w,n)})}function fr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Jr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qt(e,t),i!=null&&r.unshift(fr(e,i,o)),i=Qt(e,n),i!=null&&r.push(fr(e,i,o))),e=e.return}return r}function Ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lu(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var s=t,d=s.alternate,v=s.stateNode;if(d!==null&&d===r)break;s.tag===5&&v!==null&&(s=v,o?(d=Qt(t,i),d!=null&&l.unshift(fr(t,d,s))):o||(d=Qt(t,i),d!=null&&l.push(fr(t,d,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var md=/\r\n?/g,gd=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(md,`
`).replace(gd,"")}function eo(e,n,t){if(n=au(n),au(e)!==n&&t)throw Error(u(425))}function no(){}var Ni=null,Mi=null;function Di(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ri=typeof setTimeout=="function"?setTimeout:void 0,vd=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,yd=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(bd)}:Ri;function bd(e){setTimeout(function(){throw e})}function Li(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),tr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);tr(n)}function Vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var zt=Math.random().toString(36).slice(2),wn="__reactFiber$"+zt,pr="__reactProps$"+zt,En="__reactContainer$"+zt,ji="__reactEvents$"+zt,kd="__reactListeners$"+zt,xd="__reactHandles$"+zt;function lt(e){var n=e[wn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[En]||t[wn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=su(e);e!==null;){if(t=e[wn])return t;e=su(e)}return n}e=t,t=e.parentNode}return null}function hr(e){return e=e[wn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function to(e){return e[pr]||null}var Ai=[],Ct=-1;function $n(e){return{current:e}}function le(e){0>Ct||(e.current=Ai[Ct],Ai[Ct]=null,Ct--)}function oe(e,n){Ct++,Ai[Ct]=e.current,e.current=n}var Wn={},Le=$n(Wn),Be=$n(!1),at=Wn;function Tt(e,n){var t=e.type.contextTypes;if(!t)return Wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function ro(){le(Be),le(Le)}function cu(e,n,t){if(Le.current!==Wn)throw Error(u(168));oe(Le,n),oe(Be,t)}function du(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(u(108,re(e)||"Unknown",o));return T({},t,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,at=Le.current,oe(Le,e),oe(Be,Be.current),!0}function fu(e,n,t){var r=e.stateNode;if(!r)throw Error(u(169));t?(e=du(e,n,at),r.__reactInternalMemoizedMergedChildContext=e,le(Be),le(Le),oe(Le,e)):le(Be),oe(Be,t)}var Cn=null,io=!1,Fi=!1;function pu(e){Cn===null?Cn=[e]:Cn.push(e)}function wd(e){io=!0,pu(e)}function Qn(){if(!Fi&&Cn!==null){Fi=!0;var e=0,n=te;try{var t=Cn;for(te=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Cn=null,io=!1}catch(o){throw Cn!==null&&(Cn=Cn.slice(e+1)),ma(li,Qn),o}finally{te=n,Fi=!1}}return null}var Nt=[],Mt=0,lo=null,ao=0,tn=[],rn=0,ut=null,Tn=1,Nn="";function st(e,n){Nt[Mt++]=ao,Nt[Mt++]=lo,lo=e,ao=n}function hu(e,n,t){tn[rn++]=Tn,tn[rn++]=Nn,tn[rn++]=ut,ut=e;var r=Tn;e=Nn;var o=32-cn(r)-1;r&=~(1<<o),t+=1;var i=32-cn(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Tn=1<<32-cn(n)+o|t<<o|r,Nn=i+e}else Tn=1<<i|t<<o|r,Nn=e}function Ii(e){e.return!==null&&(st(e,1),hu(e,1,0))}function qi(e){for(;e===lo;)lo=Nt[--Mt],Nt[Mt]=null,ao=Nt[--Mt],Nt[Mt]=null;for(;e===ut;)ut=tn[--rn],tn[rn]=null,Nn=tn[--rn],tn[rn]=null,Tn=tn[--rn],tn[rn]=null}var Ge=null,Je=null,se=!1,fn=null;function mu(e,n){var t=un(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function gu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ge=e,Je=Vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ge=e,Je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ut!==null?{id:Tn,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=un(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ge=e,Je=null,!0):!1;default:return!1}}function Ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hi(e){if(se){var n=Je;if(n){var t=n;if(!gu(e,n)){if(Ui(e))throw Error(u(418));n=Vn(t.nextSibling);var r=Ge;n&&gu(e,n)?mu(r,t):(e.flags=e.flags&-4097|2,se=!1,Ge=e)}}else{if(Ui(e))throw Error(u(418));e.flags=e.flags&-4097|2,se=!1,Ge=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function uo(e){if(e!==Ge)return!1;if(!se)return vu(e),se=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Di(e.type,e.memoizedProps)),n&&(n=Je)){if(Ui(e))throw yu(),Error(u(418));for(;n;)mu(e,n),n=Vn(n.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Je=Vn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Je=null}}else Je=Ge?Vn(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=Je;e;)e=Vn(e.nextSibling)}function Dt(){Je=Ge=null,se=!1}function Bi(e){fn===null?fn=[e]:fn.push(e)}var Sd=ae.ReactCurrentBatchConfig;function mr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(u(309));var r=t.stateNode}if(!r)throw Error(u(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(u(284));if(!t._owner)throw Error(u(290,e))}return e}function so(e,n){throw e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function bu(e){var n=e._init;return n(e._payload)}function ku(e){function n(h,f){if(e){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function t(h,f){if(!e)return null;for(;f!==null;)n(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=nt(h,f),h.index=0,h.sibling=null,h}function i(h,f,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,g,_){return f===null||f.tag!==6?(f=Rl(g,h.mode,_),f.return=h,f):(f=o(f,g),f.return=h,f)}function d(h,f,g,_){var R=g.type;return R===me?x(h,f,g.props.children,_,g.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===He&&bu(R)===f.type)?(_=o(f,g.props),_.ref=mr(h,f,g),_.return=h,_):(_=Ro(g.type,g.key,g.props,null,h.mode,_),_.ref=mr(h,f,g),_.return=h,_)}function v(h,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ll(g,h.mode,_),f.return=h,f):(f=o(f,g.children||[]),f.return=h,f)}function x(h,f,g,_,R){return f===null||f.tag!==7?(f=vt(g,h.mode,_,R),f.return=h,f):(f=o(f,g),f.return=h,f)}function w(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Rl(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xe:return g=Ro(f.type,f.key,f.props,null,h.mode,g),g.ref=mr(h,null,f),g.return=h,g;case de:return f=Ll(f,h.mode,g),f.return=h,f;case He:var _=f._init;return w(h,_(f._payload),g)}if(Vt(f)||q(f))return f=vt(f,h.mode,g,null),f.return=h,f;so(h,f)}return null}function b(h,f,g,_){var R=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:s(h,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xe:return g.key===R?d(h,f,g,_):null;case de:return g.key===R?v(h,f,g,_):null;case He:return R=g._init,b(h,f,R(g._payload),_)}if(Vt(g)||q(g))return R!==null?null:x(h,f,g,_,null);so(h,g)}return null}function E(h,f,g,_,R){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(g)||null,s(f,h,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case xe:return h=h.get(_.key===null?g:_.key)||null,d(f,h,_,R);case de:return h=h.get(_.key===null?g:_.key)||null,v(f,h,_,R);case He:var A=_._init;return E(h,f,g,A(_._payload),R)}if(Vt(_)||q(_))return h=h.get(g)||null,x(f,h,_,R,null);so(f,_)}return null}function M(h,f,g,_){for(var R=null,A=null,F=f,U=f=0,Te=null;F!==null&&U<g.length;U++){F.index>U?(Te=F,F=null):Te=F.sibling;var ee=b(h,F,g[U],_);if(ee===null){F===null&&(F=Te);break}e&&F&&ee.alternate===null&&n(h,F),f=i(ee,f,U),A===null?R=ee:A.sibling=ee,A=ee,F=Te}if(U===g.length)return t(h,F),se&&st(h,U),R;if(F===null){for(;U<g.length;U++)F=w(h,g[U],_),F!==null&&(f=i(F,f,U),A===null?R=F:A.sibling=F,A=F);return se&&st(h,U),R}for(F=r(h,F);U<g.length;U++)Te=E(F,h,U,g[U],_),Te!==null&&(e&&Te.alternate!==null&&F.delete(Te.key===null?U:Te.key),f=i(Te,f,U),A===null?R=Te:A.sibling=Te,A=Te);return e&&F.forEach(function(tt){return n(h,tt)}),se&&st(h,U),R}function D(h,f,g,_){var R=q(g);if(typeof R!="function")throw Error(u(150));if(g=R.call(g),g==null)throw Error(u(151));for(var A=R=null,F=f,U=f=0,Te=null,ee=g.next();F!==null&&!ee.done;U++,ee=g.next()){F.index>U?(Te=F,F=null):Te=F.sibling;var tt=b(h,F,ee.value,_);if(tt===null){F===null&&(F=Te);break}e&&F&&tt.alternate===null&&n(h,F),f=i(tt,f,U),A===null?R=tt:A.sibling=tt,A=tt,F=Te}if(ee.done)return t(h,F),se&&st(h,U),R;if(F===null){for(;!ee.done;U++,ee=g.next())ee=w(h,ee.value,_),ee!==null&&(f=i(ee,f,U),A===null?R=ee:A.sibling=ee,A=ee);return se&&st(h,U),R}for(F=r(h,F);!ee.done;U++,ee=g.next())ee=E(F,h,U,ee.value,_),ee!==null&&(e&&ee.alternate!==null&&F.delete(ee.key===null?U:ee.key),f=i(ee,f,U),A===null?R=ee:A.sibling=ee,A=ee);return e&&F.forEach(function(nf){return n(h,nf)}),se&&st(h,U),R}function ke(h,f,g,_){if(typeof g=="object"&&g!==null&&g.type===me&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xe:e:{for(var R=g.key,A=f;A!==null;){if(A.key===R){if(R=g.type,R===me){if(A.tag===7){t(h,A.sibling),f=o(A,g.props.children),f.return=h,h=f;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===He&&bu(R)===A.type){t(h,A.sibling),f=o(A,g.props),f.ref=mr(h,A,g),f.return=h,h=f;break e}t(h,A);break}else n(h,A);A=A.sibling}g.type===me?(f=vt(g.props.children,h.mode,_,g.key),f.return=h,h=f):(_=Ro(g.type,g.key,g.props,null,h.mode,_),_.ref=mr(h,f,g),_.return=h,h=_)}return l(h);case de:e:{for(A=g.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(h,f.sibling),f=o(f,g.children||[]),f.return=h,h=f;break e}else{t(h,f);break}else n(h,f);f=f.sibling}f=Ll(g,h.mode,_),f.return=h,h=f}return l(h);case He:return A=g._init,ke(h,f,A(g._payload),_)}if(Vt(g))return M(h,f,g,_);if(q(g))return D(h,f,g,_);so(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(h,f.sibling),f=o(f,g),f.return=h,h=f):(t(h,f),f=Rl(g,h.mode,_),f.return=h,h=f),l(h)):t(h,f)}return ke}var Rt=ku(!0),xu=ku(!1),co=$n(null),fo=null,Lt=null,Vi=null;function $i(){Vi=Lt=fo=null}function Wi(e){var n=co.current;le(co),e._currentValue=n}function Qi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){fo=e,Vi=Lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&($e=!0),e.firstContext=null)}function on(e){var n=e._currentValue;if(Vi!==e)if(e={context:e,memoizedValue:n,next:null},Lt===null){if(fo===null)throw Error(u(308));Lt=e,fo.dependencies={lanes:0,firstContext:e}}else Lt=Lt.next=e;return n}var ct=null;function Xi(e){ct===null?ct=[e]:ct.push(e)}function wu(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Xi(n)):(t.next=o.next,o.next=t),n.interleaved=t,Mn(e,r)}function Mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xn=!1;function Yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Mn(e,t)}return o=r.interleaved,o===null?(n.next=n,Xi(r)):(n.next=o.next,o.next=n),r.interleaved=n,Mn(e,t)}function po(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,si(e,t)}}function Pu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ho(e,n,t,r){var o=e.updateQueue;Xn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var d=s,v=d.next;d.next=null,l===null?i=v:l.next=v,l=d;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==l&&(s===null?x.firstBaseUpdate=v:s.next=v,x.lastBaseUpdate=d))}if(i!==null){var w=o.baseState;l=0,x=v=d=null,s=i;do{var b=s.lane,E=s.eventTime;if((r&b)===b){x!==null&&(x=x.next={eventTime:E,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var M=e,D=s;switch(b=n,E=t,D.tag){case 1:if(M=D.payload,typeof M=="function"){w=M.call(E,w,b);break e}w=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=D.payload,b=typeof M=="function"?M.call(E,w,b):M,b==null)break e;w=T({},w,b);break e;case 2:Xn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,b=o.effects,b===null?o.effects=[s]:b.push(s))}else E={eventTime:E,lane:b,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(v=x=E,d=w):x=x.next=E,l|=b;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;b=s,s=b.next,b.next=null,o.lastBaseUpdate=b,o.shared.pending=null}}while(!0);if(x===null&&(d=w),o.baseState=d,o.firstBaseUpdate=v,o.lastBaseUpdate=x,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);pt|=l,e.lanes=l,e.memoizedState=w}}function _u(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(u(191,o));o.call(r)}}}var gr={},Sn=$n(gr),vr=$n(gr),yr=$n(gr);function dt(e){if(e===gr)throw Error(u(174));return e}function Ki(e,n){switch(oe(yr,n),oe(vr,e),oe(Sn,gr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Zo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Zo(n,e)}le(Sn),oe(Sn,n)}function At(){le(Sn),le(vr),le(yr)}function Ou(e){dt(yr.current);var n=dt(Sn.current),t=Zo(n,e.type);n!==t&&(oe(vr,e),oe(Sn,t))}function Zi(e){vr.current===e&&(le(Sn),le(vr))}var fe=$n(0);function mo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=[];function Ji(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var go=ae.ReactCurrentDispatcher,el=ae.ReactCurrentBatchConfig,ft=0,pe=null,Pe=null,Ee=null,vo=!1,br=!1,kr=0,Pd=0;function je(){throw Error(u(321))}function nl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!dn(e[t],n[t]))return!1;return!0}function tl(e,n,t,r,o,i){if(ft=i,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,go.current=e===null||e.memoizedState===null?Ed:Cd,e=t(r,o),br){i=0;do{if(br=!1,kr=0,25<=i)throw Error(u(301));i+=1,Ee=Pe=null,n.updateQueue=null,go.current=Td,e=t(r,o)}while(br)}if(go.current=ko,n=Pe!==null&&Pe.next!==null,ft=0,Ee=Pe=pe=null,vo=!1,n)throw Error(u(300));return e}function rl(){var e=kr!==0;return kr=0,e}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?pe.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function ln(){if(Pe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=Ee===null?pe.memoizedState:Ee.next;if(n!==null)Ee=n,Pe=e;else{if(e===null)throw Error(u(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ee===null?pe.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function xr(e,n){return typeof n=="function"?n(e):n}function ol(e){var n=ln(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var r=Pe,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,d=null,v=i;do{var x=v.lane;if((ft&x)===x)d!==null&&(d=d.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var w={lane:x,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};d===null?(s=d=w,l=r):d=d.next=w,pe.lanes|=x,pt|=x}v=v.next}while(v!==null&&v!==i);d===null?l=r:d.next=s,dn(r,n.memoizedState)||($e=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,pe.lanes|=i,pt|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function il(e){var n=ln(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);dn(i,n.memoizedState)||($e=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function zu(){}function Eu(e,n){var t=pe,r=ln(),o=n(),i=!dn(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,ll(Nu.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Ee!==null&&Ee.memoizedState.tag&1){if(t.flags|=2048,wr(9,Tu.bind(null,t,r,o,n),void 0,null),Ce===null)throw Error(u(349));ft&30||Cu(t,n,o)}return o}function Cu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=pe.updateQueue,n===null?(n={lastEffect:null,stores:null},pe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Tu(e,n,t,r){n.value=t,n.getSnapshot=r,Mu(n)&&Du(e)}function Nu(e,n,t){return t(function(){Mu(n)&&Du(e)})}function Mu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!dn(e,t)}catch{return!0}}function Du(e){var n=Mn(e,1);n!==null&&gn(n,e,1,-1)}function Ru(e){var n=Pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:e},n.queue=e,e=e.dispatch=zd.bind(null,pe,e),[n.memoizedState,e]}function wr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=pe.updateQueue,n===null?(n={lastEffect:null,stores:null},pe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Lu(){return ln().memoizedState}function yo(e,n,t,r){var o=Pn();pe.flags|=e,o.memoizedState=wr(1|n,t,void 0,r===void 0?null:r)}function bo(e,n,t,r){var o=ln();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var l=Pe.memoizedState;if(i=l.destroy,r!==null&&nl(r,l.deps)){o.memoizedState=wr(n,t,i,r);return}}pe.flags|=e,o.memoizedState=wr(1|n,t,i,r)}function ju(e,n){return yo(8390656,8,e,n)}function ll(e,n){return bo(2048,8,e,n)}function Au(e,n){return bo(4,2,e,n)}function Fu(e,n){return bo(4,4,e,n)}function Iu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qu(e,n,t){return t=t!=null?t.concat([e]):null,bo(4,4,Iu.bind(null,n,e),t)}function al(){}function Uu(e,n){var t=ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&nl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Hu(e,n){var t=ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&nl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Bu(e,n,t){return ft&21?(dn(t,n)||(t=ba(),pe.lanes|=t,pt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=t)}function _d(e,n){var t=te;te=t!==0&&4>t?t:4,e(!0);var r=el.transition;el.transition={};try{e(!1),n()}finally{te=t,el.transition=r}}function Vu(){return ln().memoizedState}function Od(e,n,t){var r=Jn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},$u(e))Wu(n,t);else if(t=wu(e,n,t,r),t!==null){var o=Ue();gn(t,e,r,o),Qu(t,n,r)}}function zd(e,n,t){var r=Jn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if($u(e))Wu(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(o.hasEagerState=!0,o.eagerState=s,dn(s,l)){var d=n.interleaved;d===null?(o.next=o,Xi(n)):(o.next=d.next,d.next=o),n.interleaved=o;return}}catch{}finally{}t=wu(e,n,o,r),t!==null&&(o=Ue(),gn(t,e,r,o),Qu(t,n,r))}}function $u(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Wu(e,n){br=vo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Qu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,si(e,t)}}var ko={readContext:on,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Ed={readContext:on,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:on,useEffect:ju,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,yo(4194308,4,Iu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return yo(4194308,4,e,n)},useInsertionEffect:function(e,n){return yo(4,2,e,n)},useMemo:function(e,n){var t=Pn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Pn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Od.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:Ru,useDebugValue:al,useDeferredValue:function(e){return Pn().memoizedState=e},useTransition:function(){var e=Ru(!1),n=e[0];return e=_d.bind(null,e[1]),Pn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=pe,o=Pn();if(se){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),Ce===null)throw Error(u(349));ft&30||Cu(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,ju(Nu.bind(null,r,i,e),[e]),r.flags|=2048,wr(9,Tu.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Pn(),n=Ce.identifierPrefix;if(se){var t=Nn,r=Tn;t=(r&~(1<<32-cn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=kr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Pd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Cd={readContext:on,useCallback:Uu,useContext:on,useEffect:ll,useImperativeHandle:qu,useInsertionEffect:Au,useLayoutEffect:Fu,useMemo:Hu,useReducer:ol,useRef:Lu,useState:function(){return ol(xr)},useDebugValue:al,useDeferredValue:function(e){var n=ln();return Bu(n,Pe.memoizedState,e)},useTransition:function(){var e=ol(xr)[0],n=ln().memoizedState;return[e,n]},useMutableSource:zu,useSyncExternalStore:Eu,useId:Vu,unstable_isNewReconciler:!1},Td={readContext:on,useCallback:Uu,useContext:on,useEffect:ll,useImperativeHandle:qu,useInsertionEffect:Au,useLayoutEffect:Fu,useMemo:Hu,useReducer:il,useRef:Lu,useState:function(){return il(xr)},useDebugValue:al,useDeferredValue:function(e){var n=ln();return Pe===null?n.memoizedState=e:Bu(n,Pe.memoizedState,e)},useTransition:function(){var e=il(xr)[0],n=ln().memoizedState;return[e,n]},useMutableSource:zu,useSyncExternalStore:Eu,useId:Vu,unstable_isNewReconciler:!1};function pn(e,n){if(e&&e.defaultProps){n=T({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ul(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:T({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xo={isMounted:function(e){return(e=e._reactInternals)?it(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ue(),o=Jn(e),i=Dn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Yn(e,i,o),n!==null&&(gn(n,e,o,r),po(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ue(),o=Jn(e),i=Dn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Yn(e,i,o),n!==null&&(gn(n,e,o,r),po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ue(),r=Jn(e),o=Dn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Yn(e,o,r),n!==null&&(gn(n,e,r,t),po(n,e,r))}};function Xu(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!ur(t,r)||!ur(o,i):!0}function Yu(e,n,t){var r=!1,o=Wn,i=n.contextType;return typeof i=="object"&&i!==null?i=on(i):(o=Ve(n)?at:Le.current,r=n.contextTypes,i=(r=r!=null)?Tt(e,o):Wn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Ku(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xo.enqueueReplaceState(n,n.state,null)}function sl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Yi(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=on(i):(i=Ve(n)?at:Le.current,o.context=Tt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(ul(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&xo.enqueueReplaceState(o,o.state,null),ho(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ft(e,n){try{var t="",r=n;do t+=G(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function cl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function dl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Nd=typeof WeakMap=="function"?WeakMap:Map;function Zu(e,n,t){t=Dn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Eo||(Eo=!0,Ol=r),dl(e,n)},t}function Gu(e,n,t){t=Dn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){dl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){dl(e,n),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ju(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Nd;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=$d.bind(null,e,n,t),n.then(e,e))}function es(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ns(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Dn(-1,1),n.tag=2,Yn(t,n,1))),t.lanes|=1),e)}var Md=ae.ReactCurrentOwner,$e=!1;function qe(e,n,t,r){n.child=e===null?xu(n,null,t,r):Rt(n,e.child,t,r)}function ts(e,n,t,r,o){t=t.render;var i=n.ref;return jt(n,o),r=tl(e,n,t,r,i,o),t=rl(),e!==null&&!$e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Rn(e,n,o)):(se&&t&&Ii(n),n.flags|=1,qe(e,n,r,o),n.child)}function rs(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Dl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,os(e,n,i,r,o)):(e=Ro(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:ur,t(l,r)&&e.ref===n.ref)return Rn(e,n,o)}return n.flags|=1,e=nt(i,r),e.ref=n.ref,e.return=n,n.child=e}function os(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(ur(i,r)&&e.ref===n.ref)if($e=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return n.lanes=e.lanes,Rn(e,n,o)}return fl(e,n,t,r,o)}function is(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(qt,en),en|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,oe(qt,en),en|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,oe(qt,en),en|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,oe(qt,en),en|=r;return qe(e,n,o,t),n.child}function ls(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function fl(e,n,t,r,o){var i=Ve(t)?at:Le.current;return i=Tt(n,i),jt(n,o),t=tl(e,n,t,r,i,o),r=rl(),e!==null&&!$e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Rn(e,n,o)):(se&&r&&Ii(n),n.flags|=1,qe(e,n,t,o),n.child)}function as(e,n,t,r,o){if(Ve(t)){var i=!0;oo(n)}else i=!1;if(jt(n,o),n.stateNode===null)So(e,n),Yu(n,t,r),sl(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var d=l.context,v=t.contextType;typeof v=="object"&&v!==null?v=on(v):(v=Ve(t)?at:Le.current,v=Tt(n,v));var x=t.getDerivedStateFromProps,w=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function";w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||d!==v)&&Ku(n,l,r,v),Xn=!1;var b=n.memoizedState;l.state=b,ho(n,r,l,o),d=n.memoizedState,s!==r||b!==d||Be.current||Xn?(typeof x=="function"&&(ul(n,t,x,r),d=n.memoizedState),(s=Xn||Xu(n,t,s,r,b,d,v))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),l.props=r,l.state=d,l.context=v,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Su(e,n),s=n.memoizedProps,v=n.type===n.elementType?s:pn(n.type,s),l.props=v,w=n.pendingProps,b=l.context,d=t.contextType,typeof d=="object"&&d!==null?d=on(d):(d=Ve(t)?at:Le.current,d=Tt(n,d));var E=t.getDerivedStateFromProps;(x=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==w||b!==d)&&Ku(n,l,r,d),Xn=!1,b=n.memoizedState,l.state=b,ho(n,r,l,o);var M=n.memoizedState;s!==w||b!==M||Be.current||Xn?(typeof E=="function"&&(ul(n,t,E,r),M=n.memoizedState),(v=Xn||Xu(n,t,v,r,b,M,d)||!1)?(x||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,M,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,M,d)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=M),l.props=r,l.state=M,l.context=d,r=v):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(n.flags|=1024),r=!1)}return pl(e,n,t,r,i,o)}function pl(e,n,t,r,o,i){ls(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&fu(n,t,!1),Rn(e,n,i);r=n.stateNode,Md.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Rt(n,e.child,null,i),n.child=Rt(n,null,s,i)):qe(e,n,s,i),n.memoizedState=r.state,o&&fu(n,t,!0),n.child}function us(e){var n=e.stateNode;n.pendingContext?cu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&cu(e,n.context,!1),Ki(e,n.containerInfo)}function ss(e,n,t,r,o){return Dt(),Bi(o),n.flags|=256,qe(e,n,t,r),n.child}var hl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function cs(e,n,t){var r=n.pendingProps,o=fe.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(fe,o&1),e===null)return Hi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Lo(l,r,0,null),e=vt(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=ml(t),n.memoizedState=hl,e):gl(n,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Dd(e,n,l,r,s,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,s=o.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=nt(o,d),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=nt(s,i):(i=vt(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?ml(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=hl,r}return i=e.child,e=i.sibling,r=nt(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function gl(e,n){return n=Lo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function wo(e,n,t,r){return r!==null&&Bi(r),Rt(n,e.child,null,t),e=gl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Dd(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=cl(Error(u(422))),wo(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Lo({mode:"visible",children:r.children},o,0,null),i=vt(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Rt(n,e.child,null,l),n.child.memoizedState=ml(l),n.memoizedState=hl,i);if(!(n.mode&1))return wo(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(u(419)),r=cl(i,r,void 0),wo(e,n,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=Ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mn(e,o),gn(r,e,o,-1))}return Ml(),r=cl(Error(u(421))),wo(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Wd.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Je=Vn(o.nextSibling),Ge=n,se=!0,fn=null,e!==null&&(tn[rn++]=Tn,tn[rn++]=Nn,tn[rn++]=ut,Tn=e.id,Nn=e.overflow,ut=n),n=gl(n,r.children),n.flags|=4096,n)}function ds(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Qi(e.return,n,t)}function vl(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function fs(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(qe(e,n,r.children,t),r=fe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ds(e,t,n);else if(e.tag===19)ds(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(fe,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&mo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),vl(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&mo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}vl(n,!0,t,null,i);break;case"together":vl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function So(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),pt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=nt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=nt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Rd(e,n,t){switch(n.tag){case 3:us(n),Dt();break;case 5:Ou(n);break;case 1:Ve(n.type)&&oo(n);break;case 4:Ki(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;oe(co,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(oe(fe,fe.current&1),n.flags|=128,null):t&n.child.childLanes?cs(e,n,t):(oe(fe,fe.current&1),e=Rn(e,n,t),e!==null?e.sibling:null);oe(fe,fe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return fs(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(fe,fe.current),r)break;return null;case 22:case 23:return n.lanes=0,is(e,n,t)}return Rn(e,n,t)}var ps,yl,hs,ms;ps=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},yl=function(){},hs=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,dt(Sn.current);var i=null;switch(t){case"input":o=Qo(e,o),r=Qo(e,r),i=[];break;case"select":o=T({},o,{value:void 0}),r=T({},r,{value:void 0}),i=[];break;case"textarea":o=Ko(e,o),r=Ko(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}Go(t,r);var l;t=null;for(v in o)if(!r.hasOwnProperty(v)&&o.hasOwnProperty(v)&&o[v]!=null)if(v==="style"){var s=o[v];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(y.hasOwnProperty(v)?i||(i=[]):(i=i||[]).push(v,null));for(v in r){var d=r[v];if(s=o!=null?o[v]:void 0,r.hasOwnProperty(v)&&d!==s&&(d!=null||s!=null))if(v==="style")if(s){for(l in s)!s.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in d)d.hasOwnProperty(l)&&s[l]!==d[l]&&(t||(t={}),t[l]=d[l])}else t||(i||(i=[]),i.push(v,t)),t=d;else v==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(i=i||[]).push(v,d)):v==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(v,""+d):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(y.hasOwnProperty(v)?(d!=null&&v==="onScroll"&&ie("scroll",e),i||s===d||(i=[])):(i=i||[]).push(v,d))}t&&(i=i||[]).push("style",t);var v=i;(n.updateQueue=v)&&(n.flags|=4)}},ms=function(e,n,t,r){t!==r&&(n.flags|=4)};function Sr(e,n){if(!se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ld(e,n,t){var r=n.pendingProps;switch(qi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(n),null;case 1:return Ve(n.type)&&ro(),Ae(n),null;case 3:return r=n.stateNode,At(),le(Be),le(Le),Ji(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,fn!==null&&(Cl(fn),fn=null))),yl(e,n),Ae(n),null;case 5:Zi(n);var o=dt(yr.current);if(t=n.type,e!==null&&n.stateNode!=null)hs(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(u(166));return Ae(n),null}if(e=dt(Sn.current),uo(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[wn]=n,r[pr]=i,e=(n.mode&1)!==0,t){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<cr.length;o++)ie(cr[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Yl(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":Gl(r,i),ie("invalid",r)}Go(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&eo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&eo(r.textContent,s,e),o=["children",""+s]):y.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ie("scroll",r)}switch(t){case"input":Nr(r),Zl(r,i,!0);break;case"textarea":Nr(r),ea(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=no)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=na(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[wn]=n,e[pr]=r,ps(e,n,!1,!1),n.stateNode=e;e:{switch(l=Jo(t,r),t){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<cr.length;o++)ie(cr[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":Yl(e,r),o=Qo(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=T({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Gl(e,r),o=Ko(e,r),ie("invalid",e);break;default:o=r}Go(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var d=s[i];i==="style"?oa(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ta(e,d)):i==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&$t(e,d):typeof d=="number"&&$t(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(y.hasOwnProperty(i)?d!=null&&i==="onScroll"&&ie("scroll",e):d!=null&&he(e,i,d,l))}switch(t){case"input":Nr(e),Zl(e,r,!1);break;case"textarea":Nr(e),ea(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ne(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=no)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ae(n),null;case 6:if(e&&n.stateNode!=null)ms(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(u(166));if(t=dt(yr.current),dt(Sn.current),uo(n)){if(r=n.stateNode,t=n.memoizedProps,r[wn]=n,(i=r.nodeValue!==t)&&(e=Ge,e!==null))switch(e.tag){case 3:eo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[wn]=n,n.stateNode=r}return Ae(n),null;case 13:if(le(fe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Je!==null&&n.mode&1&&!(n.flags&128))yu(),Dt(),n.flags|=98560,i=!1;else if(i=uo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[wn]=n}else Dt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ae(n),i=!1}else fn!==null&&(Cl(fn),fn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||fe.current&1?_e===0&&(_e=3):Ml())),n.updateQueue!==null&&(n.flags|=4),Ae(n),null);case 4:return At(),yl(e,n),e===null&&dr(n.stateNode.containerInfo),Ae(n),null;case 10:return Wi(n.type._context),Ae(n),null;case 17:return Ve(n.type)&&ro(),Ae(n),null;case 19:if(le(fe),i=n.memoizedState,i===null)return Ae(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)Sr(i,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=mo(e),l!==null){for(n.flags|=128,Sr(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return oe(fe,fe.current&1|2),n.child}e=e.sibling}i.tail!==null&&be()>Ut&&(n.flags|=128,r=!0,Sr(i,!1),n.lanes=4194304)}else{if(!r)if(e=mo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!se)return Ae(n),null}else 2*be()-i.renderingStartTime>Ut&&t!==1073741824&&(n.flags|=128,r=!0,Sr(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=be(),n.sibling=null,t=fe.current,oe(fe,r?t&1|2:t&1),n):(Ae(n),null);case 22:case 23:return Nl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?en&1073741824&&(Ae(n),n.subtreeFlags&6&&(n.flags|=8192)):Ae(n),null;case 24:return null;case 25:return null}throw Error(u(156,n.tag))}function jd(e,n){switch(qi(n),n.tag){case 1:return Ve(n.type)&&ro(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return At(),le(Be),le(Le),Ji(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Zi(n),null;case 13:if(le(fe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));Dt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return le(fe),null;case 4:return At(),null;case 10:return Wi(n.type._context),null;case 22:case 23:return Nl(),null;case 24:return null;default:return null}}var Po=!1,Fe=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,C=null;function It(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ve(e,n,r)}else t.current=null}function bl(e,n,t){try{t()}catch(r){ve(e,n,r)}}var gs=!1;function Fd(e,n){if(Ni=Br,e=Xa(),Si(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,d=-1,v=0,x=0,w=e,b=null;n:for(;;){for(var E;w!==t||o!==0&&w.nodeType!==3||(s=l+o),w!==i||r!==0&&w.nodeType!==3||(d=l+r),w.nodeType===3&&(l+=w.nodeValue.length),(E=w.firstChild)!==null;)b=w,w=E;for(;;){if(w===e)break n;if(b===t&&++v===o&&(s=l),b===i&&++x===r&&(d=l),(E=w.nextSibling)!==null)break;w=b,b=w.parentNode}w=E}t=s===-1||d===-1?null:{start:s,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mi={focusedElem:e,selectionRange:t},Br=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var M=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var D=M.memoizedProps,ke=M.memoizedState,h=n.stateNode,f=h.getSnapshotBeforeUpdate(n.elementType===n.type?D:pn(n.type,D),ke);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(_){ve(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return M=gs,gs=!1,M}function Pr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&bl(n,t,i)}o=o.next}while(o!==r)}}function _o(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function kl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function vs(e){var n=e.alternate;n!==null&&(e.alternate=null,vs(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[wn],delete n[pr],delete n[ji],delete n[kd],delete n[xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ys(e){return e.tag===5||e.tag===3||e.tag===4}function bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ys(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(xl(e,n,t),e=e.sibling;e!==null;)xl(e,n,t),e=e.sibling}function wl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wl(e,n,t),e=e.sibling;e!==null;)wl(e,n,t),e=e.sibling}var Me=null,hn=!1;function Kn(e,n,t){for(t=t.child;t!==null;)ks(e,n,t),t=t.sibling}function ks(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Ar,t)}catch{}switch(t.tag){case 5:Fe||It(t,n);case 6:var r=Me,o=hn;Me=null,Kn(e,n,t),Me=r,hn=o,Me!==null&&(hn?(e=Me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Me.removeChild(t.stateNode));break;case 18:Me!==null&&(hn?(e=Me,t=t.stateNode,e.nodeType===8?Li(e.parentNode,t):e.nodeType===1&&Li(e,t),tr(e)):Li(Me,t.stateNode));break;case 4:r=Me,o=hn,Me=t.stateNode.containerInfo,hn=!0,Kn(e,n,t),Me=r,hn=o;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&bl(t,n,l),o=o.next}while(o!==r)}Kn(e,n,t);break;case 1:if(!Fe&&(It(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ve(t,n,s)}Kn(e,n,t);break;case 21:Kn(e,n,t);break;case 22:t.mode&1?(Fe=(r=Fe)||t.memoizedState!==null,Kn(e,n,t),Fe=r):Kn(e,n,t);break;default:Kn(e,n,t)}}function xs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ad),n.forEach(function(r){var o=Qd.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function mn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,hn=!1;break e;case 3:Me=s.stateNode.containerInfo,hn=!0;break e;case 4:Me=s.stateNode.containerInfo,hn=!0;break e}s=s.return}if(Me===null)throw Error(u(160));ks(i,l,o),Me=null,hn=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(v){ve(o,n,v)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ws(n,e),n=n.sibling}function ws(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mn(n,e),_n(e),r&4){try{Pr(3,e,e.return),_o(3,e)}catch(D){ve(e,e.return,D)}try{Pr(5,e,e.return)}catch(D){ve(e,e.return,D)}}break;case 1:mn(n,e),_n(e),r&512&&t!==null&&It(t,t.return);break;case 5:if(mn(n,e),_n(e),r&512&&t!==null&&It(t,t.return),e.flags&32){var o=e.stateNode;try{$t(o,"")}catch(D){ve(e,e.return,D)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Kl(o,i),Jo(s,l);var v=Jo(s,i);for(l=0;l<d.length;l+=2){var x=d[l],w=d[l+1];x==="style"?oa(o,w):x==="dangerouslySetInnerHTML"?ta(o,w):x==="children"?$t(o,w):he(o,x,w,v)}switch(s){case"input":Xo(o,i);break;case"textarea":Jl(o,i);break;case"select":var b=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var E=i.value;E!=null?yt(o,!!i.multiple,E,!1):b!==!!i.multiple&&(i.defaultValue!=null?yt(o,!!i.multiple,i.defaultValue,!0):yt(o,!!i.multiple,i.multiple?[]:"",!1))}o[pr]=i}catch(D){ve(e,e.return,D)}}break;case 6:if(mn(n,e),_n(e),r&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(D){ve(e,e.return,D)}}break;case 3:if(mn(n,e),_n(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{tr(n.containerInfo)}catch(D){ve(e,e.return,D)}break;case 4:mn(n,e),_n(e);break;case 13:mn(n,e),_n(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(_l=be())),r&4&&xs(e);break;case 22:if(x=t!==null&&t.memoizedState!==null,e.mode&1?(Fe=(v=Fe)||x,mn(n,e),Fe=v):mn(n,e),_n(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!x&&e.mode&1)for(C=e,x=e.child;x!==null;){for(w=C=x;C!==null;){switch(b=C,E=b.child,b.tag){case 0:case 11:case 14:case 15:Pr(4,b,b.return);break;case 1:It(b,b.return);var M=b.stateNode;if(typeof M.componentWillUnmount=="function"){r=b,t=b.return;try{n=r,M.props=n.memoizedProps,M.state=n.memoizedState,M.componentWillUnmount()}catch(D){ve(r,t,D)}}break;case 5:It(b,b.return);break;case 22:if(b.memoizedState!==null){_s(w);continue}}E!==null?(E.return=b,C=E):_s(w)}x=x.sibling}e:for(x=null,w=e;;){if(w.tag===5){if(x===null){x=w;try{o=w.stateNode,v?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=w.stateNode,d=w.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=ra("display",l))}catch(D){ve(e,e.return,D)}}}else if(w.tag===6){if(x===null)try{w.stateNode.nodeValue=v?"":w.memoizedProps}catch(D){ve(e,e.return,D)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;x===w&&(x=null),w=w.return}x===w&&(x=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:mn(n,e),_n(e),r&4&&xs(e);break;case 21:break;default:mn(n,e),_n(e)}}function _n(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ys(t)){var r=t;break e}t=t.return}throw Error(u(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&($t(o,""),r.flags&=-33);var i=bs(e);wl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=bs(e);xl(e,s,l);break;default:throw Error(u(161))}}catch(d){ve(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Id(e,n,t){C=e,Ss(e)}function Ss(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Po;if(!l){var s=o.alternate,d=s!==null&&s.memoizedState!==null||Fe;s=Po;var v=Fe;if(Po=l,(Fe=d)&&!v)for(C=o;C!==null;)l=C,d=l.child,l.tag===22&&l.memoizedState!==null?Os(o):d!==null?(d.return=l,C=d):Os(o);for(;i!==null;)C=i,Ss(i),i=i.sibling;C=o,Po=s,Fe=v}Ps(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,C=i):Ps(e)}}function Ps(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Fe||_o(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Fe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:pn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&_u(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}_u(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var v=n.alternate;if(v!==null){var x=v.memoizedState;if(x!==null){var w=x.dehydrated;w!==null&&tr(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Fe||n.flags&512&&kl(n)}catch(b){ve(n,n.return,b)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function _s(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function Os(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{_o(4,n)}catch(d){ve(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(d){ve(n,o,d)}}var i=n.return;try{kl(n)}catch(d){ve(n,i,d)}break;case 5:var l=n.return;try{kl(n)}catch(d){ve(n,l,d)}}}catch(d){ve(n,n.return,d)}if(n===e){C=null;break}var s=n.sibling;if(s!==null){s.return=n.return,C=s;break}C=n.return}}var qd=Math.ceil,Oo=ae.ReactCurrentDispatcher,Sl=ae.ReactCurrentOwner,an=ae.ReactCurrentBatchConfig,K=0,Ce=null,Se=null,De=0,en=0,qt=$n(0),_e=0,_r=null,pt=0,zo=0,Pl=0,Or=null,We=null,_l=0,Ut=1/0,Ln=null,Eo=!1,Ol=null,Zn=null,Co=!1,Gn=null,To=0,zr=0,zl=null,No=-1,Mo=0;function Ue(){return K&6?be():No!==-1?No:No=be()}function Jn(e){return e.mode&1?K&2&&De!==0?De&-De:Sd.transition!==null?(Mo===0&&(Mo=ba()),Mo):(e=te,e!==0||(e=window.event,e=e===void 0?16:Ea(e.type)),e):1}function gn(e,n,t,r){if(50<zr)throw zr=0,zl=null,Error(u(185));Zt(e,t,r),(!(K&2)||e!==Ce)&&(e===Ce&&(!(K&2)&&(zo|=t),_e===4&&et(e,De)),Qe(e,r),t===1&&K===0&&!(n.mode&1)&&(Ut=be()+500,io&&Qn()))}function Qe(e,n){var t=e.callbackNode;Sc(e,n);var r=qr(e,e===Ce?De:0);if(r===0)t!==null&&ga(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ga(t),n===1)e.tag===0?wd(Es.bind(null,e)):pu(Es.bind(null,e)),yd(function(){!(K&6)&&Qn()}),t=null;else{switch(ka(r)){case 1:t=li;break;case 4:t=va;break;case 16:t=jr;break;case 536870912:t=ya;break;default:t=jr}t=js(t,zs.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function zs(e,n){if(No=-1,Mo=0,K&6)throw Error(u(327));var t=e.callbackNode;if(Ht()&&e.callbackNode!==t)return null;var r=qr(e,e===Ce?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Do(e,r);else{n=r;var o=K;K|=2;var i=Ts();(Ce!==e||De!==n)&&(Ln=null,Ut=be()+500,mt(e,n));do try{Bd();break}catch(s){Cs(e,s)}while(!0);$i(),Oo.current=i,K=o,Se!==null?n=0:(Ce=null,De=0,n=_e)}if(n!==0){if(n===2&&(o=ai(e),o!==0&&(r=o,n=El(e,o))),n===1)throw t=_r,mt(e,0),et(e,r),Qe(e,be()),t;if(n===6)et(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ud(o)&&(n=Do(e,r),n===2&&(i=ai(e),i!==0&&(r=i,n=El(e,i))),n===1))throw t=_r,mt(e,0),et(e,r),Qe(e,be()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(u(345));case 2:gt(e,We,Ln);break;case 3:if(et(e,r),(r&130023424)===r&&(n=_l+500-be(),10<n)){if(qr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ri(gt.bind(null,e,We,Ln),n);break}gt(e,We,Ln);break;case 4:if(et(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-cn(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qd(r/1960))-r,10<r){e.timeoutHandle=Ri(gt.bind(null,e,We,Ln),r);break}gt(e,We,Ln);break;case 5:gt(e,We,Ln);break;default:throw Error(u(329))}}}return Qe(e,be()),e.callbackNode===t?zs.bind(null,e):null}function El(e,n){var t=Or;return e.current.memoizedState.isDehydrated&&(mt(e,n).flags|=256),e=Do(e,n),e!==2&&(n=We,We=t,n!==null&&Cl(n)),e}function Cl(e){We===null?We=e:We.push.apply(We,e)}function Ud(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!dn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function et(e,n){for(n&=~Pl,n&=~zo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-cn(n),r=1<<t;e[t]=-1,n&=~r}}function Es(e){if(K&6)throw Error(u(327));Ht();var n=qr(e,0);if(!(n&1))return Qe(e,be()),null;var t=Do(e,n);if(e.tag!==0&&t===2){var r=ai(e);r!==0&&(n=r,t=El(e,r))}if(t===1)throw t=_r,mt(e,0),et(e,n),Qe(e,be()),t;if(t===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,gt(e,We,Ln),Qe(e,be()),null}function Tl(e,n){var t=K;K|=1;try{return e(n)}finally{K=t,K===0&&(Ut=be()+500,io&&Qn())}}function ht(e){Gn!==null&&Gn.tag===0&&!(K&6)&&Ht();var n=K;K|=1;var t=an.transition,r=te;try{if(an.transition=null,te=1,e)return e()}finally{te=r,an.transition=t,K=n,!(K&6)&&Qn()}}function Nl(){en=qt.current,le(qt)}function mt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,vd(t)),Se!==null)for(t=Se.return;t!==null;){var r=t;switch(qi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ro();break;case 3:At(),le(Be),le(Le),Ji();break;case 5:Zi(r);break;case 4:At();break;case 13:le(fe);break;case 19:le(fe);break;case 10:Wi(r.type._context);break;case 22:case 23:Nl()}t=t.return}if(Ce=e,Se=e=nt(e.current,null),De=en=n,_e=0,_r=null,Pl=zo=pt=0,We=Or=null,ct!==null){for(n=0;n<ct.length;n++)if(t=ct[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}ct=null}return e}function Cs(e,n){do{var t=Se;try{if($i(),go.current=ko,vo){for(var r=pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}vo=!1}if(ft=0,Ee=Pe=pe=null,br=!1,kr=0,Sl.current=null,t===null||t.return===null){_e=1,_r=n,Se=null;break}e:{var i=e,l=t.return,s=t,d=n;if(n=De,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var v=d,x=s,w=x.tag;if(!(x.mode&1)&&(w===0||w===11||w===15)){var b=x.alternate;b?(x.updateQueue=b.updateQueue,x.memoizedState=b.memoizedState,x.lanes=b.lanes):(x.updateQueue=null,x.memoizedState=null)}var E=es(l);if(E!==null){E.flags&=-257,ns(E,l,s,i,n),E.mode&1&&Ju(i,v,n),n=E,d=v;var M=n.updateQueue;if(M===null){var D=new Set;D.add(d),n.updateQueue=D}else M.add(d);break e}else{if(!(n&1)){Ju(i,v,n),Ml();break e}d=Error(u(426))}}else if(se&&s.mode&1){var ke=es(l);if(ke!==null){!(ke.flags&65536)&&(ke.flags|=256),ns(ke,l,s,i,n),Bi(Ft(d,s));break e}}i=d=Ft(d,s),_e!==4&&(_e=2),Or===null?Or=[i]:Or.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var h=Zu(i,d,n);Pu(i,h);break e;case 1:s=d;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zn===null||!Zn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var _=Gu(i,s,n);Pu(i,_);break e}}i=i.return}while(i!==null)}Ms(t)}catch(R){n=R,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function Ts(){var e=Oo.current;return Oo.current=ko,e===null?ko:e}function Ml(){(_e===0||_e===3||_e===2)&&(_e=4),Ce===null||!(pt&268435455)&&!(zo&268435455)||et(Ce,De)}function Do(e,n){var t=K;K|=2;var r=Ts();(Ce!==e||De!==n)&&(Ln=null,mt(e,n));do try{Hd();break}catch(o){Cs(e,o)}while(!0);if($i(),K=t,Oo.current=r,Se!==null)throw Error(u(261));return Ce=null,De=0,_e}function Hd(){for(;Se!==null;)Ns(Se)}function Bd(){for(;Se!==null&&!hc();)Ns(Se)}function Ns(e){var n=Ls(e.alternate,e,en);e.memoizedProps=e.pendingProps,n===null?Ms(e):Se=n,Sl.current=null}function Ms(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=jd(t,n),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Se=null;return}}else if(t=Ld(t,n,en),t!==null){Se=t;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);_e===0&&(_e=5)}function gt(e,n,t){var r=te,o=an.transition;try{an.transition=null,te=1,Vd(e,n,t,r)}finally{an.transition=o,te=r}return null}function Vd(e,n,t,r){do Ht();while(Gn!==null);if(K&6)throw Error(u(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Pc(e,i),e===Ce&&(Se=Ce=null,De=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Co||(Co=!0,js(jr,function(){return Ht(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=an.transition,an.transition=null;var l=te;te=1;var s=K;K|=4,Sl.current=null,Fd(e,t),ws(t,e),cd(Mi),Br=!!Ni,Mi=Ni=null,e.current=t,Id(t),mc(),K=s,te=l,an.transition=i}else e.current=t;if(Co&&(Co=!1,Gn=e,To=o),i=e.pendingLanes,i===0&&(Zn=null),yc(t.stateNode),Qe(e,be()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Eo)throw Eo=!1,e=Ol,Ol=null,e;return To&1&&e.tag!==0&&Ht(),i=e.pendingLanes,i&1?e===zl?zr++:(zr=0,zl=e):zr=0,Qn(),null}function Ht(){if(Gn!==null){var e=ka(To),n=an.transition,t=te;try{if(an.transition=null,te=16>e?16:e,Gn===null)var r=!1;else{if(e=Gn,Gn=null,To=0,K&6)throw Error(u(331));var o=K;for(K|=4,C=e.current;C!==null;){var i=C,l=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var d=0;d<s.length;d++){var v=s[d];for(C=v;C!==null;){var x=C;switch(x.tag){case 0:case 11:case 15:Pr(8,x,i)}var w=x.child;if(w!==null)w.return=x,C=w;else for(;C!==null;){x=C;var b=x.sibling,E=x.return;if(vs(x),x===v){C=null;break}if(b!==null){b.return=E,C=b;break}C=E}}}var M=i.alternate;if(M!==null){var D=M.child;if(D!==null){M.child=null;do{var ke=D.sibling;D.sibling=null,D=ke}while(D!==null)}}C=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,C=l;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,C=h;break e}C=i.return}}var f=e.current;for(C=f;C!==null;){l=C;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,C=g;else e:for(l=f;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_o(9,s)}}catch(R){ve(s,s.return,R)}if(s===l){C=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,C=_;break e}C=s.return}}if(K=o,Qn(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Ar,e)}catch{}r=!0}return r}finally{te=t,an.transition=n}}return!1}function Ds(e,n,t){n=Ft(t,n),n=Zu(e,n,1),e=Yn(e,n,1),n=Ue(),e!==null&&(Zt(e,1,n),Qe(e,n))}function ve(e,n,t){if(e.tag===3)Ds(e,e,t);else for(;n!==null;){if(n.tag===3){Ds(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=Ft(t,e),e=Gu(n,e,1),n=Yn(n,e,1),e=Ue(),n!==null&&(Zt(n,1,e),Qe(n,e));break}}n=n.return}}function $d(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ue(),e.pingedLanes|=e.suspendedLanes&t,Ce===e&&(De&t)===t&&(_e===4||_e===3&&(De&130023424)===De&&500>be()-_l?mt(e,0):Pl|=t),Qe(e,n)}function Rs(e,n){n===0&&(e.mode&1?(n=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):n=1);var t=Ue();e=Mn(e,n),e!==null&&(Zt(e,n,t),Qe(e,t))}function Wd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Rs(e,t)}function Qd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(n),Rs(e,t)}var Ls;Ls=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Be.current)$e=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return $e=!1,Rd(e,n,t);$e=!!(e.flags&131072)}else $e=!1,se&&n.flags&1048576&&hu(n,ao,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;So(e,n),e=n.pendingProps;var o=Tt(n,Le.current);jt(n,t),o=tl(null,n,r,e,o,t);var i=rl();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ve(r)?(i=!0,oo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Yi(n),o.updater=xo,n.stateNode=o,o._reactInternals=n,sl(n,r,e,t),n=pl(null,n,r,!0,i,t)):(n.tag=0,se&&i&&Ii(n),qe(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(So(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Yd(r),e=pn(r,e),o){case 0:n=fl(null,n,r,e,t);break e;case 1:n=as(null,n,r,e,t);break e;case 11:n=ts(null,n,r,e,t);break e;case 14:n=rs(null,n,r,pn(r.type,e),t);break e}throw Error(u(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:pn(r,o),fl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:pn(r,o),as(e,n,r,o,t);case 3:e:{if(us(n),e===null)throw Error(u(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Su(e,n),ho(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Ft(Error(u(423)),n),n=ss(e,n,r,t,o);break e}else if(r!==o){o=Ft(Error(u(424)),n),n=ss(e,n,r,t,o);break e}else for(Je=Vn(n.stateNode.containerInfo.firstChild),Ge=n,se=!0,fn=null,t=xu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Dt(),r===o){n=Rn(e,n,t);break e}qe(e,n,r,t)}n=n.child}return n;case 5:return Ou(n),e===null&&Hi(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Di(r,o)?l=null:i!==null&&Di(r,i)&&(n.flags|=32),ls(e,n),qe(e,n,l,t),n.child;case 6:return e===null&&Hi(n),null;case 13:return cs(e,n,t);case 4:return Ki(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Rt(n,null,r,t):qe(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:pn(r,o),ts(e,n,r,o,t);case 7:return qe(e,n,n.pendingProps,t),n.child;case 8:return qe(e,n,n.pendingProps.children,t),n.child;case 12:return qe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,oe(co,r._currentValue),r._currentValue=l,i!==null)if(dn(i.value,l)){if(i.children===o.children&&!Be.current){n=Rn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var d=s.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=Dn(-1,t&-t),d.tag=2;var v=i.updateQueue;if(v!==null){v=v.shared;var x=v.pending;x===null?d.next=d:(d.next=x.next,x.next=d),v.pending=d}}i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),Qi(i.return,t,n),s.lanes|=t;break}d=d.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(u(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Qi(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}qe(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,jt(n,t),o=on(o),r=r(o),n.flags|=1,qe(e,n,r,t),n.child;case 14:return r=n.type,o=pn(r,n.pendingProps),o=pn(r.type,o),rs(e,n,r,o,t);case 15:return os(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:pn(r,o),So(e,n),n.tag=1,Ve(r)?(e=!0,oo(n)):e=!1,jt(n,t),Yu(n,r,o),sl(n,r,o,t),pl(null,n,r,!0,e,t);case 19:return fs(e,n,t);case 22:return is(e,n,t)}throw Error(u(156,n.tag))};function js(e,n){return ma(e,n)}function Xd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,n,t,r){return new Xd(e,n,t,r)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yd(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bn)return 11;if(e===kn)return 14}return 2}function nt(e,n){var t=e.alternate;return t===null?(t=un(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ro(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")Dl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case me:return vt(t.children,o,i,n);case ze:l=8,o|=8;break;case we:return e=un(12,t,n,o|2),e.elementType=we,e.lanes=i,e;case Ye:return e=un(13,t,n,o),e.elementType=Ye,e.lanes=i,e;case sn:return e=un(19,t,n,o),e.elementType=sn,e.lanes=i,e;case ge:return Lo(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zn:l=10;break e;case ot:l=9;break e;case bn:l=11;break e;case kn:l=14;break e;case He:l=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return n=un(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function vt(e,n,t,r){return e=un(7,e,r,n),e.lanes=t,e}function Lo(e,n,t,r){return e=un(22,e,r,n),e.elementType=ge,e.lanes=t,e.stateNode={isHidden:!1},e}function Rl(e,n,t){return e=un(6,e,null,n),e.lanes=t,e}function Ll(e,n,t){return n=un(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Kd(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ui(0),this.expirationTimes=ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function jl(e,n,t,r,o,i,l,s,d){return e=new Kd(e,n,t,s,d),n===1?(n=1,i===!0&&(n|=8)):n=0,i=un(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yi(i),e}function Zd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function As(e){if(!e)return Wn;e=e._reactInternals;e:{if(it(e)!==e||e.tag!==1)throw Error(u(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(u(171))}if(e.tag===1){var t=e.type;if(Ve(t))return du(e,t,n)}return n}function Fs(e,n,t,r,o,i,l,s,d){return e=jl(t,r,!0,e,o,i,l,s,d),e.context=As(null),t=e.current,r=Ue(),o=Jn(t),i=Dn(r,o),i.callback=n??null,Yn(t,i,o),e.current.lanes=o,Zt(e,o,r),Qe(e,r),e}function jo(e,n,t,r){var o=n.current,i=Ue(),l=Jn(o);return t=As(t),n.context===null?n.context=t:n.pendingContext=t,n=Dn(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Yn(o,n,l),e!==null&&(gn(e,o,l,i),po(e,o,l)),l}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Is(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Al(e,n){Is(e,n),(e=e.alternate)&&Is(e,n)}var qs=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fl(e){this._internalRoot=e}Fo.prototype.render=Fl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));jo(e,n,null,null)},Fo.prototype.unmount=Fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ht(function(){jo(null,e,null,null)}),n[En]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Un.length&&n!==0&&n<Un[t].priority;t++);Un.splice(t,0,e),t===0&&Oa(e)}};function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Us(){}function Gd(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var v=Ao(l);i.call(v)}}var l=Fs(n,r,e,0,null,!1,!1,"",Us);return e._reactRootContainer=l,e[En]=l.current,dr(e.nodeType===8?e.parentNode:e),ht(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var v=Ao(d);s.call(v)}}var d=jl(e,0,!1,null,null,!1,!1,"",Us);return e._reactRootContainer=d,e[En]=d.current,dr(e.nodeType===8?e.parentNode:e),ht(function(){jo(n,d,t,r)}),d}function qo(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var d=Ao(l);s.call(d)}}jo(n,l,e,o)}else l=Gd(t,n,e,o,r);return Ao(l)}xa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Kt(n.pendingLanes);t!==0&&(si(n,t|1),Qe(n,be()),!(K&6)&&(Ut=be()+500,Qn()))}break;case 13:ht(function(){var r=Mn(e,1);if(r!==null){var o=Ue();gn(r,e,1,o)}}),Al(e,1)}},ci=function(e){if(e.tag===13){var n=Mn(e,134217728);if(n!==null){var t=Ue();gn(n,e,134217728,t)}Al(e,134217728)}},wa=function(e){if(e.tag===13){var n=Jn(e),t=Mn(e,n);if(t!==null){var r=Ue();gn(t,e,n,r)}Al(e,n)}},Sa=function(){return te},Pa=function(e,n){var t=te;try{return te=e,n()}finally{te=t}},ti=function(e,n,t){switch(n){case"input":if(Xo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=to(r);if(!o)throw Error(u(90));Xl(r),Xo(r,o)}}}break;case"textarea":Jl(e,t);break;case"select":n=t.value,n!=null&&yt(e,!!t.multiple,n,!1)}},ua=Tl,sa=ht;var Jd={usingClientEntryPoint:!1,Events:[hr,Et,to,la,aa,Tl]},Er={findFiberByHostInstance:lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ef={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pa(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{Ar=Uo.inject(ef),xn=Uo}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jd,Xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Il(n))throw Error(u(200));return Zd(e,n,null,t)},Xe.createRoot=function(e,n){if(!Il(e))throw Error(u(299));var t=!1,r="",o=qs;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=jl(e,1,!1,null,null,t,!1,r,o),e[En]=n.current,dr(e.nodeType===8?e.parentNode:e),new Fl(n)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=pa(n),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return ht(e)},Xe.hydrate=function(e,n,t){if(!Io(n))throw Error(u(200));return qo(null,e,n,!0,t)},Xe.hydrateRoot=function(e,n,t){if(!Il(e))throw Error(u(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=qs;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Fs(n,null,e,1,t??null,o,!1,i,l),e[En]=n.current,dr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Fo(n)},Xe.render=function(e,n,t){if(!Io(n))throw Error(u(200));return qo(null,e,n,!1,t)},Xe.unmountComponentAtNode=function(e){if(!Io(e))throw Error(u(40));return e._reactRootContainer?(ht(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1},Xe.unstable_batchedUpdates=Tl,Xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Io(t))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return qo(e,n,t,!1,r)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var Ys;function cf(){if(Ys)return Hl.exports;Ys=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Hl.exports=sf(),Hl.exports}var Ks;function df(){if(Ks)return Ho;Ks=1;var a=cf();return Ho.createRoot=a.createRoot,Ho.hydrateRoot=a.hydrateRoot,Ho}var ff=df(),Ie=Ql();const An=tf(Ie),pf=({searchTerm:a,setSearchTerm:c})=>Z.jsx("div",{className:"search",children:Z.jsxs("div",{children:[Z.jsx("img",{src:"search.svg",alt:"search"}),Z.jsx("input",{type:"text",placeholder:"Search through thousands of movies",value:a,onChange:u=>c(u.target.value)})]})}),hf=({movie:{title:a,vote_average:c,poster_path:u,release_date:m,original_language:y}})=>Z.jsxs("div",{className:"movie-card",children:[Z.jsx("img",{src:u?`https://image.tmdb.org/t/p/w500/${u}`:"/no-movie.png",alt:a}),Z.jsxs("div",{className:"mt-4",children:[Z.jsx("h3",{children:a}),Z.jsxs("div",{className:"content",children:[Z.jsxs("div",{className:"rating",children:[Z.jsx("img",{src:"star.svg",alt:"Star Icon"}),Z.jsx("p",{children:c?c.toFixed(1):"N/A"})]}),Z.jsx("span",{children:"•"}),Z.jsx("p",{className:"lang",children:y}),Z.jsx("span",{children:"•"}),Z.jsx("p",{className:"year",children:m?m.split("-")[0]:"N/A"})]})]})]});function Oe(a,c){c===void 0&&(c={});var u=c.insertAt;if(a&&typeof document<"u"){var m=document.head||document.getElementsByTagName("head")[0],y=document.createElement("style");y.type="text/css",u==="top"&&m.firstChild?m.insertBefore(y,m.firstChild):m.appendChild(y),y.styleSheet?y.styleSheet.cssText=a:y.appendChild(document.createTextNode(a))}}Oe(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var On=function(){return On=Object.assign||function(a){for(var c,u=1,m=arguments.length;u<m;u++)for(var y in c=arguments[u])Object.prototype.hasOwnProperty.call(c,y)&&(a[y]=c[y]);return a},On.apply(this,arguments)};function $o(a){return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},$o(a)}var mf=/^\s+/,gf=/\s+$/;function L(a,c){if(c=c||{},(a=a||"")instanceof L)return a;if(!(this instanceof L))return new L(a,c);var u=function(m){var y={r:0,g:0,b:0},S=1,O=null,I=null,N=null,H=!1,Y=!1;typeof m=="string"&&(m=function(B){B=B.replace(mf,"").replace(gf,"").toLowerCase();var P,j=!1;if(Wl[B])B=Wl[B],j=!0;else if(B=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(P=vn.rgb.exec(B))?{r:P[1],g:P[2],b:P[3]}:(P=vn.rgba.exec(B))?{r:P[1],g:P[2],b:P[3],a:P[4]}:(P=vn.hsl.exec(B))?{h:P[1],s:P[2],l:P[3]}:(P=vn.hsla.exec(B))?{h:P[1],s:P[2],l:P[3],a:P[4]}:(P=vn.hsv.exec(B))?{h:P[1],s:P[2],v:P[3]}:(P=vn.hsva.exec(B))?{h:P[1],s:P[2],v:P[3],a:P[4]}:(P=vn.hex8.exec(B))?{r:nn(P[1]),g:nn(P[2]),b:nn(P[3]),a:tc(P[4]),format:j?"name":"hex8"}:(P=vn.hex6.exec(B))?{r:nn(P[1]),g:nn(P[2]),b:nn(P[3]),format:j?"name":"hex"}:(P=vn.hex4.exec(B))?{r:nn(P[1]+""+P[1]),g:nn(P[2]+""+P[2]),b:nn(P[3]+""+P[3]),a:tc(P[4]+""+P[4]),format:j?"name":"hex8"}:(P=vn.hex3.exec(B))?{r:nn(P[1]+""+P[1]),g:nn(P[2]+""+P[2]),b:nn(P[3]+""+P[3]),format:j?"name":"hex"}:!1}(m)),$o(m)=="object"&&(jn(m.r)&&jn(m.g)&&jn(m.b)?(W=m.r,V=m.g,ye=m.b,y={r:255*ce(W,255),g:255*ce(V,255),b:255*ce(ye,255)},H=!0,Y=String(m.r).substr(-1)==="%"?"prgb":"rgb"):jn(m.h)&&jn(m.s)&&jn(m.v)?(O=Tr(m.s),I=Tr(m.v),y=function(B,P,j){B=6*ce(B,360),P=ce(P,100),j=ce(j,100);var Re=Math.floor(B),Ne=B-Re,he=j*(1-P),ae=j*(1-Ne*P),xe=j*(1-(1-Ne)*P),de=Re%6,me=[j,ae,he,he,xe,j][de],ze=[xe,j,j,ae,he,he][de],we=[he,he,xe,j,j,ae][de];return{r:255*me,g:255*ze,b:255*we}}(m.h,O,I),H=!0,Y="hsv"):jn(m.h)&&jn(m.s)&&jn(m.l)&&(O=Tr(m.s),N=Tr(m.l),y=function(B,P,j){var Re,Ne,he;function ae(me,ze,we){return we<0&&(we+=1),we>1&&(we-=1),we<1/6?me+6*(ze-me)*we:we<.5?ze:we<2/3?me+(ze-me)*(2/3-we)*6:me}if(B=ce(B,360),P=ce(P,100),j=ce(j,100),P===0)Re=Ne=he=j;else{var xe=j<.5?j*(1+P):j+P-j*P,de=2*j-xe;Re=ae(de,xe,B+1/3),Ne=ae(de,xe,B),he=ae(de,xe,B-1/3)}return{r:255*Re,g:255*Ne,b:255*he}}(m.h,O,N),H=!0,Y="hsl"),m.hasOwnProperty("a")&&(S=m.a));var W,V,ye;return S=oc(S),{ok:H,format:m.format||Y,r:Math.min(255,Math.max(y.r,0)),g:Math.min(255,Math.max(y.g,0)),b:Math.min(255,Math.max(y.b,0)),a:S}}(a);this._originalInput=a,this._r=u.r,this._g=u.g,this._b=u.b,this._a=u.a,this._roundA=Math.round(100*this._a)/100,this._format=c.format||u.format,this._gradientType=c.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=u.ok}function Zs(a,c,u){a=ce(a,255),c=ce(c,255),u=ce(u,255);var m,y,S=Math.max(a,c,u),O=Math.min(a,c,u),I=(S+O)/2;if(S==O)m=y=0;else{var N=S-O;switch(y=I>.5?N/(2-S-O):N/(S+O),S){case a:m=(c-u)/N+(c<u?6:0);break;case c:m=(u-a)/N+2;break;case u:m=(a-c)/N+4}m/=6}return{h:m,s:y,l:I}}function Gs(a,c,u){a=ce(a,255),c=ce(c,255),u=ce(u,255);var m,y,S=Math.max(a,c,u),O=Math.min(a,c,u),I=S,N=S-O;if(y=S===0?0:N/S,S==O)m=0;else{switch(S){case a:m=(c-u)/N+(c<u?6:0);break;case c:m=(u-a)/N+2;break;case u:m=(a-c)/N+4}m/=6}return{h:m,s:y,v:I}}function Js(a,c,u,m){var y=[yn(Math.round(a).toString(16)),yn(Math.round(c).toString(16)),yn(Math.round(u).toString(16))];return m&&y[0].charAt(0)==y[0].charAt(1)&&y[1].charAt(0)==y[1].charAt(1)&&y[2].charAt(0)==y[2].charAt(1)?y[0].charAt(0)+y[1].charAt(0)+y[2].charAt(0):y.join("")}function ec(a,c,u,m){return[yn(ic(m)),yn(Math.round(a).toString(16)),yn(Math.round(c).toString(16)),yn(Math.round(u).toString(16))].join("")}function vf(a,c){c=c===0?0:c||10;var u=L(a).toHsl();return u.s-=c/100,u.s=Wo(u.s),L(u)}function yf(a,c){c=c===0?0:c||10;var u=L(a).toHsl();return u.s+=c/100,u.s=Wo(u.s),L(u)}function bf(a){return L(a).desaturate(100)}function kf(a,c){c=c===0?0:c||10;var u=L(a).toHsl();return u.l+=c/100,u.l=Wo(u.l),L(u)}function xf(a,c){c=c===0?0:c||10;var u=L(a).toRgb();return u.r=Math.max(0,Math.min(255,u.r-Math.round(-c/100*255))),u.g=Math.max(0,Math.min(255,u.g-Math.round(-c/100*255))),u.b=Math.max(0,Math.min(255,u.b-Math.round(-c/100*255))),L(u)}function wf(a,c){c=c===0?0:c||10;var u=L(a).toHsl();return u.l-=c/100,u.l=Wo(u.l),L(u)}function Sf(a,c){var u=L(a).toHsl(),m=(u.h+c)%360;return u.h=m<0?360+m:m,L(u)}function Pf(a){var c=L(a).toHsl();return c.h=(c.h+180)%360,L(c)}function nc(a,c){if(isNaN(c)||c<=0)throw new Error("Argument to polyad must be a positive number");for(var u=L(a).toHsl(),m=[L(a)],y=360/c,S=1;S<c;S++)m.push(L({h:(u.h+S*y)%360,s:u.s,l:u.l}));return m}function _f(a){var c=L(a).toHsl(),u=c.h;return[L(a),L({h:(u+72)%360,s:c.s,l:c.l}),L({h:(u+216)%360,s:c.s,l:c.l})]}function Of(a,c,u){c=c||6,u=u||30;var m=L(a).toHsl(),y=360/u,S=[L(a)];for(m.h=(m.h-(y*c>>1)+720)%360;--c;)m.h=(m.h+y)%360,S.push(L(m));return S}function zf(a,c){c=c||6;for(var u=L(a).toHsv(),m=u.h,y=u.s,S=u.v,O=[],I=1/c;c--;)O.push(L({h:m,s:y,v:S})),S=(S+I)%1;return O}L.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,c,u,m=this.toRgb();return a=m.r/255,c=m.g/255,u=m.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))+.0722*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))},setAlpha:function(a){return this._a=oc(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=Gs(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=Gs(this._r,this._g,this._b),c=Math.round(360*a.h),u=Math.round(100*a.s),m=Math.round(100*a.v);return this._a==1?"hsv("+c+", "+u+"%, "+m+"%)":"hsva("+c+", "+u+"%, "+m+"%, "+this._roundA+")"},toHsl:function(){var a=Zs(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Zs(this._r,this._g,this._b),c=Math.round(360*a.h),u=Math.round(100*a.s),m=Math.round(100*a.l);return this._a==1?"hsl("+c+", "+u+"%, "+m+"%)":"hsla("+c+", "+u+"%, "+m+"%, "+this._roundA+")"},toHex:function(a){return Js(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(c,u,m,y,S){var O=[yn(Math.round(c).toString(16)),yn(Math.round(u).toString(16)),yn(Math.round(m).toString(16)),yn(ic(y))];return S&&O[0].charAt(0)==O[0].charAt(1)&&O[1].charAt(0)==O[1].charAt(1)&&O[2].charAt(0)==O[2].charAt(1)&&O[3].charAt(0)==O[3].charAt(1)?O[0].charAt(0)+O[1].charAt(0)+O[2].charAt(0)+O[3].charAt(0):O.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ce(this._r,255))+"%",g:Math.round(100*ce(this._g,255))+"%",b:Math.round(100*ce(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ce(this._r,255))+"%, "+Math.round(100*ce(this._g,255))+"%, "+Math.round(100*ce(this._b,255))+"%)":"rgba("+Math.round(100*ce(this._r,255))+"%, "+Math.round(100*ce(this._g,255))+"%, "+Math.round(100*ce(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Ef[Js(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var c="#"+ec(this._r,this._g,this._b,this._a),u=c,m=this._gradientType?"GradientType = 1, ":"";if(a){var y=L(a);u="#"+ec(y._r,y._g,y._b,y._a)}return"progid:DXImageTransform.Microsoft.gradient("+m+"startColorstr="+c+",endColorstr="+u+")"},toString:function(a){var c=!!a;a=a||this._format;var u=!1,m=this._a<1&&this._a>=0;return c||!m||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(u=this.toRgbString()),a==="prgb"&&(u=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(u=this.toHexString()),a==="hex3"&&(u=this.toHexString(!0)),a==="hex4"&&(u=this.toHex8String(!0)),a==="hex8"&&(u=this.toHex8String()),a==="name"&&(u=this.toName()),a==="hsl"&&(u=this.toHslString()),a==="hsv"&&(u=this.toHsvString()),u||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return L(this.toString())},_applyModification:function(a,c){var u=a.apply(null,[this].concat([].slice.call(c)));return this._r=u._r,this._g=u._g,this._b=u._b,this.setAlpha(u._a),this},lighten:function(){return this._applyModification(kf,arguments)},brighten:function(){return this._applyModification(xf,arguments)},darken:function(){return this._applyModification(wf,arguments)},desaturate:function(){return this._applyModification(vf,arguments)},saturate:function(){return this._applyModification(yf,arguments)},greyscale:function(){return this._applyModification(bf,arguments)},spin:function(){return this._applyModification(Sf,arguments)},_applyCombination:function(a,c){return a.apply(null,[this].concat([].slice.call(c)))},analogous:function(){return this._applyCombination(Of,arguments)},complement:function(){return this._applyCombination(Pf,arguments)},monochromatic:function(){return this._applyCombination(zf,arguments)},splitcomplement:function(){return this._applyCombination(_f,arguments)},triad:function(){return this._applyCombination(nc,[3])},tetrad:function(){return this._applyCombination(nc,[4])}},L.fromRatio=function(a,c){if($o(a)=="object"){var u={};for(var m in a)a.hasOwnProperty(m)&&(u[m]=m==="a"?a[m]:Tr(a[m]));a=u}return L(a,c)},L.equals=function(a,c){return!(!a||!c)&&L(a).toRgbString()==L(c).toRgbString()},L.random=function(){return L.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},L.mix=function(a,c,u){u=u===0?0:u||50;var m=L(a).toRgb(),y=L(c).toRgb(),S=u/100;return L({r:(y.r-m.r)*S+m.r,g:(y.g-m.g)*S+m.g,b:(y.b-m.b)*S+m.b,a:(y.a-m.a)*S+m.a})},L.readability=function(a,c){var u=L(a),m=L(c);return(Math.max(u.getLuminance(),m.getLuminance())+.05)/(Math.min(u.getLuminance(),m.getLuminance())+.05)},L.isReadable=function(a,c,u){var m,y,S=L.readability(a,c);switch(y=!1,(m=function(O){var I,N;return I=((O=O||{level:"AA",size:"small"}).level||"AA").toUpperCase(),N=(O.size||"small").toLowerCase(),I!=="AA"&&I!=="AAA"&&(I="AA"),N!=="small"&&N!=="large"&&(N="small"),{level:I,size:N}}(u)).level+m.size){case"AAsmall":case"AAAlarge":y=S>=4.5;break;case"AAlarge":y=S>=3;break;case"AAAsmall":y=S>=7}return y},L.mostReadable=function(a,c,u){var m,y,S,O,I=null,N=0;y=(u=u||{}).includeFallbackColors,S=u.level,O=u.size;for(var H=0;H<c.length;H++)(m=L.readability(a,c[H]))>N&&(N=m,I=L(c[H]));return L.isReadable(a,I,{level:S,size:O})||!y?I:(u.includeFallbackColors=!1,L.mostReadable(a,["#fff","#000"],u))};var Wl=L.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Ef=L.hexNames=function(a){var c={};for(var u in a)a.hasOwnProperty(u)&&(c[a[u]]=u);return c}(Wl);function oc(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function ce(a,c){(function(m){return typeof m=="string"&&m.indexOf(".")!=-1&&parseFloat(m)===1})(a)&&(a="100%");var u=function(m){return typeof m=="string"&&m.indexOf("%")!=-1}(a);return a=Math.min(c,Math.max(0,parseFloat(a))),u&&(a=parseInt(a*c,10)/100),Math.abs(a-c)<1e-6?1:a%c/parseFloat(c)}function Wo(a){return Math.min(1,Math.max(0,a))}function nn(a){return parseInt(a,16)}function yn(a){return a.length==1?"0"+a:""+a}function Tr(a){return a<=1&&(a=100*a+"%"),a}function ic(a){return Math.round(255*parseFloat(a)).toString(16)}function tc(a){return nn(a)/255}var rt,Bo,Vo,vn=(Bo="[\\s|\\(]+("+(rt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+rt+")[,|\\s]+("+rt+")\\s*\\)?",Vo="[\\s|\\(]+("+rt+")[,|\\s]+("+rt+")[,|\\s]+("+rt+")[,|\\s]+("+rt+")\\s*\\)?",{CSS_UNIT:new RegExp(rt),rgb:new RegExp("rgb"+Bo),rgba:new RegExp("rgba"+Vo),hsl:new RegExp("hsl"+Bo),hsla:new RegExp("hsla"+Vo),hsv:new RegExp("hsv"+Bo),hsva:new RegExp("hsva"+Vo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function jn(a){return!!vn.CSS_UNIT.exec(a)}var Cf=function(a,c){var u=(typeof a=="string"?parseInt(a):a)||0;if(u>=-5&&u<=5){var m=u,y=parseFloat(c),S=y+m*(y/5)*-1;return(S==0||S<=Number.EPSILON)&&(S=.1),{animationPeriod:S+"s"}}return{animationPeriod:c}},Tf=function(a,c){var u=a||{},m="";switch(c){case"small":m="12px";break;case"medium":m="16px";break;case"large":m="20px";break;default:m=void 0}var y={};if(u.fontSize){var S=u.fontSize;y=function(O,I){var N={};for(var H in O)Object.prototype.hasOwnProperty.call(O,H)&&I.indexOf(H)<0&&(N[H]=O[H]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function"){var Y=0;for(H=Object.getOwnPropertySymbols(O);Y<H.length;Y++)I.indexOf(H[Y])<0&&Object.prototype.propertyIsEnumerable.call(O,H[Y])&&(N[H[Y]]=O[H[Y]])}return N}(u,["fontSize"]),m=S}return{fontSize:m,styles:y}},Nf={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Mf=function(a){var c=a.className,u=a.text,m=a.textColor,y=a.staticText,S=a.style;return u?An.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(c||"").trim(),style:On(On(On({},y&&Nf),m&&{color:m,mixBlendMode:"unset"}),S&&S)},typeof u=="string"&&u.length?u:"loading"):null},lc="rgb(50, 205, 50)";function Df(a,c){c===void 0&&(c=0);var u=[];return function m(y,S){return S===void 0&&(S=0),u.push.apply(u,y),u.length<S&&m(u,S),u.slice(0,S)}(a,c)}Oe(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);L(lc).toRgb();Array.from({length:4},function(a,c){return"--atom-phase".concat(c+1,"-rgb")});Oe(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--commet-phase".concat(c+1,"-color")});Oe(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--OP-annulus-phase".concat(c+1,"-color")});function $l(a){return a&&a.Math===Math&&a}Oe(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);$l(typeof window=="object"&&window)||$l(typeof self=="object"&&self)||$l(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,c){return"--OP-dotted-phase".concat(c+1,"-color")});Oe(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--OP-spokes-phase".concat(c+1,"-color")});Oe(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(a,c){return"--OP-annulus-dual-sectors-phase".concat(c+1,"-color")});Oe(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return["--OP-annulus-track-phase".concat(c+1,"-color"),"--OP-annulus-sector-phase".concat(c+1,"-color")]});Oe(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);var Bt=Array.from({length:4},function(a,c){return"--four-square-phase".concat(c+1,"-color")}),Rf=function(a){var c,u=Tf(a==null?void 0:a.style,a==null?void 0:a.size),m=u.styles,y=u.fontSize,S=a==null?void 0:a.easing,O=Cf(a==null?void 0:a.speedPlus,"1s").animationPeriod,I=function(N){var H={};if(N instanceof Array){for(var Y=Df(N,Bt.length),W=0;W<Y.length&&!(W>=4);W++)H[Bt[W]]=Y[W];return H}try{if(typeof N!="string")throw new Error("Color String expected");for(var V=0;V<Bt.length;V++)H[Bt[V]]=N}catch(ye){for(ye instanceof Error?console.warn("[".concat(ye.message,']: Received "').concat(typeof N,'" instead with value, ').concat(JSON.stringify(N))):console.warn("".concat(JSON.stringify(N)," received in <FourSquare /> indicator cannot be processed. Using default instead!")),V=0;V<Bt.length;V++)H[Bt[V]]=lc}return H}((c=a==null?void 0:a.color)!==null&&c!==void 0?c:"");return An.createElement("span",{className:"rli-d-i-b foursquare-rli-bounding-box",style:On(On(On(On(On({},y&&{fontSize:y}),O&&{"--rli-animation-duration":O}),S&&{"--rli-animation-function":S}),I),m),role:"status","aria-live":"polite","aria-label":"Loading"},An.createElement("span",{className:"rli-d-i-b foursquare-indicator"},An.createElement("span",{className:"squares-container"},An.createElement("span",{className:"square square1"}),An.createElement("span",{className:"square square2"}),An.createElement("span",{className:"square square3"}),An.createElement("span",{className:"square square4"}))),An.createElement(Mf,{text:a==null?void 0:a.text,textColor:a==null?void 0:a.textColor,staticText:!0}))};Oe(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--mosaic-phase".concat(c+1,"-color")});Oe(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--riple-phase".concat(c+1,"-color")});Oe(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--TD-pulsate-phase".concat(c+1,"-color")});Oe(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--TD-brick-stack-phase".concat(c+1,"-color")});Oe(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--TD-bob-phase".concat(c+1,"-color")});Oe(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--TD-bounce-phase".concat(c+1,"-color")});Oe(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--shape-phase".concat(c+1,"-color")});Oe(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--trophySpin-phase".concat(c+1,"-color")});Oe(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--slab-phase".concat(c+1,"-color")});Oe(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(a,c){return"--life-line-phase".concat(c+1,"-color")});function Lf(a,c){var u=Ie.useRef(!1),m=Ie.useRef(),y=Ie.useRef(a),S=Ie.useCallback(function(){return u.current},[]),O=Ie.useCallback(function(){u.current=!1,m.current&&clearTimeout(m.current),m.current=setTimeout(function(){u.current=!0,y.current()},c)},[c]),I=Ie.useCallback(function(){u.current=null,m.current&&clearTimeout(m.current)},[]);return Ie.useEffect(function(){y.current=a},[a]),Ie.useEffect(function(){return O(),I},[c]),[S,I,O]}function jf(a,c,u){u===void 0&&(u=[]);var m=Lf(a,c),y=m[0],S=m[1],O=m[2];return Ie.useEffect(O,u),[y,S]}const rc="https://api.themoviedb.org/3",Af="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzU5MzBhZmY5YTgwYmQzYWZjZGIzNzcwMGZjMmFiZCIsIm5iZiI6MTczODA0MTg3MS41ODcwMDAxLCJzdWIiOiI2Nzk4NmEwZjcwMmY0OTJmNDc4ZjZlYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zoTlqcbUDQnHp1K4DxMvVPt0K0mJI27yFaI2TOq4KRE",Ff={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${Af}`}},If=()=>{const[a,c]=Ie.useState(""),[u,m]=Ie.useState(""),[y,S]=Ie.useState([]),[O,I]=Ie.useState(!1),[N,H]=Ie.useState("");jf(()=>H(a),2e3,[a]);const Y=async(W="")=>{I(!0),m("");try{const V=W?`${rc}/search/movie?query=${encodeURIComponent(W)}`:`${rc}/discover/movie?sort_by=popularity.desc`,ye=await fetch(V,Ff);if(!ye.ok)throw new Error("Failed to fetch movies.");const B=await ye.json();if(B.Response==="False"){m(B.Error||"Failed to fetch movies"),S([]);return}S(B.results||[])}catch(V){console.error(`Error Fetching Movies: ${V}`),m("Oops, we couldn't find that. Try again...")}finally{I(!1)}};return Ie.useEffect(()=>{Y(a)},[N]),Z.jsxs("main",{children:[Z.jsx("div",{className:"pattern"}),Z.jsxs("div",{className:"wrapper",children:[Z.jsxs("header",{children:[Z.jsxs("h1",{children:["KTC ",Z.jsx("span",{className:"text-gradient",children:"+"})]}),Z.jsxs("h1",{children:["Discover",Z.jsx("span",{className:"text-gradient",children:" Movies "}),"That Boggle The Mind"]}),Z.jsx(pf,{searchTerm:a,setSearchTerm:c})]}),Z.jsxs("section",{className:"all-movies",children:[Z.jsx("h2",{className:"mt-[40px]",children:"Popular Movies"}),O?Z.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Z.jsx(Rf,{color:"#fff",size:"medium",text:"",textColor:""})}):u?Z.jsx("p",{className:"text-red-500",children:u}):Z.jsx("ul",{children:y.map(W=>Z.jsx(hf,{movie:W},W.id))})]})]})]})};ff.createRoot(document.getElementById("root")).render(Z.jsx(If,{}));
