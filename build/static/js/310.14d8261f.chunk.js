"use strict";(self.webpackChunkFredericton_Association_of_Malayalees=self.webpackChunkFredericton_Association_of_Malayalees||[]).push([[310],{628:e=>{e.exports=function(e,n,t,r,o,a,i,s){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,r,o,a,i,s],l=0;(c=new Error(n.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},8310:(e,n,t)=>{t.d(n,{A:()=>ae});var r=t(1097),o=t.n(r),a=t(2483),i=t(8168),s=t(8587);t(628);function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function l(e,n){return Object.keys(n).reduce((function(t,r){var o,l=t,f=l[c(r)],d=l[r],v=(0,s.A)(l,[c(r),r].map(u)),p=n[r],m=function(e,n,t){var r=(0,a.useRef)(void 0!==e),o=(0,a.useState)(n),i=o[0],s=o[1],c=void 0!==e,u=r.current;return r.current=c,!c&&u&&i!==n&&s(n),[c?e:i,(0,a.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.apply(void 0,[e].concat(r)),s(e)}),[t])]}(d,f,e[p]),h=m[0],y=m[1];return(0,i.A)({},v,((o={})[r]=h,o[p]=y,o))}),e)}function f(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function d(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function v(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}f.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0,v.__suppressDeprecationWarning=!0;const p=function(e){const n=(0,a.useRef)(e);return(0,a.useEffect)((()=>{n.current=e}),[e]),n};function m(e){const n=p(e);return(0,a.useCallback)((function(){return n.current&&n.current(...arguments)}),[n])}var h=t(3068),y=t(6723);const w=(b="h4",a.forwardRef(((e,n)=>(0,y.jsx)("div",{...e,ref:n,className:o()(e.className,b)}))));var b;w.displayName="DivStyledAsH4";const g=a.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:a=w,...i}=e;return r=(0,h.oU)(r,"alert-heading"),(0,y.jsx)(a,{ref:n,className:o()(t,r),...i})}));g.displayName="AlertHeading";const E=g;"undefined"!==typeof t.g&&t.g.navigator&&t.g.navigator.product,new WeakMap;var x=t(4812);const _=["onKeyDown"];const k=a.forwardRef(((e,n)=>{let{onKeyDown:t}=e,r=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,_);const[o]=(0,x.Am)(Object.assign({tagName:"a"},r)),a=m((e=>{o.onKeyDown(e),null==t||t(e)}));return(i=r.href)&&"#"!==i.trim()&&"button"!==r.role?(0,y.jsx)("a",Object.assign({ref:n},r,{onKeyDown:t})):(0,y.jsx)("a",Object.assign({ref:n},r,o,{onKeyDown:a}));var i}));k.displayName="Anchor";const C=k,N=a.forwardRef(((e,n)=>{let{className:t,bsPrefix:r,as:a=C,...i}=e;return r=(0,h.oU)(r,"alert-link"),(0,y.jsx)(a,{ref:n,className:o()(t,r),...i})}));N.displayName="AlertLink";const j=N;var D=t(3097);function A(e){var n=function(e){return e&&e.ownerDocument||document}(e);return n&&n.defaultView||window}var L=/([A-Z])/g;var O=/^ms-/;function R(e){return function(e){return e.replace(L,"-$1").toLowerCase()}(e).replace(O,"-ms-")}var S=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const P=function(e,n){var t="",r="";if("string"===typeof n)return e.style.getPropertyValue(R(n))||function(e,n){return A(e).getComputedStyle(e,n)}(e).getPropertyValue(R(n));Object.keys(n).forEach((function(o){var a=n[o];a||0===a?!function(e){return!(!e||!S.test(e))}(o)?t+=R(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(R(o))})),r&&(t+="transform: "+r+";"),e.style.cssText+=";"+t},F=!("undefined"===typeof window||!window.document||!window.document.createElement);var M=!1,T=!1;try{var K={get passive(){return M=!0},get once(){return T=M=!0}};F&&(window.addEventListener("test",K,K),window.removeEventListener("test",K,!0))}catch(ie){}const H=function(e,n,t,r){if(r&&"boolean"!==typeof r&&!T){var o=r.once,a=r.capture,i=t;!T&&o&&(i=t.__once||function e(r){this.removeEventListener(n,e,a),t.call(this,r)},t.__once=i),e.addEventListener(n,i,M?r:a)}e.addEventListener(n,t,r)};const U=function(e,n,t,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(n,t,o),t.__once&&e.removeEventListener(n,t.__once,o)};const V=function(e,n,t,r){return H(e,n,t,r),function(){U(e,n,t,r)}};function W(e,n,t){void 0===t&&(t=5);var r=!1,o=setTimeout((function(){r||function(e,n,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(n,t,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),n+t),a=V(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function I(e,n,t,r){null==t&&(t=function(e){var n=P(e,"transitionDuration")||"",t=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*t}(e)||0);var o=W(e,t,r),a=V(e,"transitionend",n);return function(){o(),a()}}function B(e,n){const t=P(e,n)||"",r=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*r}function X(e,n){const t=B(e,"transitionDuration"),r=B(e,"transitionDelay"),o=I(e,(t=>{t.target===e&&(o(),n(t))}),t+r)}const Y=e=>e&&"function"!==typeof e?n=>{e.current=n}:e;const Z=function(e,n){return(0,a.useMemo)((()=>function(e,n){const t=Y(e),r=Y(n);return e=>{t&&t(e),r&&r(e)}}(e,n)),[e,n])};var $=t(9998);const q=a.forwardRef(((e,n)=>{let{onEnter:t,onEntering:r,onEntered:o,onExit:i,onExiting:s,onExited:c,addEndListener:u,children:l,childRef:f,...d}=e;const v=(0,a.useRef)(null),p=Z(v,f),m=e=>{var n;p((n=e)&&"setState"in n?$.findDOMNode(n):null!=n?n:null)},h=e=>n=>{e&&v.current&&e(v.current,n)},w=(0,a.useCallback)(h(t),[t]),b=(0,a.useCallback)(h(r),[r]),g=(0,a.useCallback)(h(o),[o]),E=(0,a.useCallback)(h(i),[i]),x=(0,a.useCallback)(h(s),[s]),_=(0,a.useCallback)(h(c),[c]),k=(0,a.useCallback)(h(u),[u]);return(0,y.jsx)(D.Ay,{ref:n,...d,onEnter:w,onEntered:g,onEntering:b,onExit:E,onExited:_,onExiting:x,addEndListener:k,nodeRef:v,children:"function"===typeof l?(e,n)=>l(e,{...n,ref:m}):a.cloneElement(l,{ref:m})})})),z={[D.ns]:"show",[D._K]:"show"},G=a.forwardRef(((e,n)=>{let{className:t,children:r,transitionClasses:i={},onEnter:s,...c}=e;const u={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...c},l=(0,a.useCallback)(((e,n)=>{!function(e){e.offsetHeight}(e),null==s||s(e,n)}),[s]);return(0,y.jsx)(q,{ref:n,addEndListener:X,...u,onEnter:l,childRef:r.ref,children:(e,n)=>a.cloneElement(r,{...n,className:o()("fade",t,r.props.className,z[e],i[e])})})}));G.displayName="Fade";const J=G;var Q=t(6405),ee=t.n(Q);const ne={"aria-label":ee().string,onClick:ee().func,variant:ee().oneOf(["white"])},te=a.forwardRef(((e,n)=>{let{className:t,variant:r,"aria-label":a="Close",...i}=e;return(0,y.jsx)("button",{ref:n,type:"button",className:o()("btn-close",r&&"btn-close-".concat(r),t),"aria-label":a,...i})}));te.displayName="CloseButton",te.propTypes=ne;const re=te,oe=a.forwardRef(((e,n)=>{const{bsPrefix:t,show:r=!0,closeLabel:a="Close alert",closeVariant:i,className:s,children:c,variant:u="primary",onClose:f,dismissible:d,transition:v=J,...p}=l(e,{show:"onClose"}),w=(0,h.oU)(t,"alert"),b=m((e=>{f&&f(!1,e)})),g=!0===v?J:v,E=(0,y.jsxs)("div",{role:"alert",...g?void 0:p,ref:n,className:o()(s,w,u&&"".concat(w,"-").concat(u),d&&"".concat(w,"-dismissible")),children:[d&&(0,y.jsx)(re,{onClick:b,"aria-label":a,variant:i}),c]});return g?(0,y.jsx)(g,{unmountOnExit:!0,...p,ref:void 0,in:r,children:E}):r?E:null}));oe.displayName="Alert";const ae=Object.assign(oe,{Link:j,Heading:E})}}]);
//# sourceMappingURL=310.14d8261f.chunk.js.map