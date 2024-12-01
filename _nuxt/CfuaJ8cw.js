import{d as j,a as A,r as w,u as S,o as N,ap as B,aq as E,ar as T,as as U,a5 as L,ah as P,at as I,au as F,L as p,av as O,aw as _,ax as V,ay as z,az as D,p as H,a4 as M,aA as $}from"./BA5rkl3o.js";const G=(...t)=>t.find(c=>c!==void 0);function Q(t){const c=t.componentName||"NuxtLink";function d(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return k(e,t.trailingSlash);const b="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:k(b,t.trailingSlash)}}function R(e){const a=A(),b=H(),f=p(()=>!!e.target&&e.target!=="_self"),o=p(()=>{const s=e.to||e.href||"";return typeof s=="string"&&O(s,{acceptRelative:!0})}),m=P("RouterLink"),h=m&&typeof m!="string"?m.useLink:void 0,g=p(()=>{if(e.external)return!0;const s=e.to||e.href||"";return typeof s=="object"?!1:s===""||o.value}),l=p(()=>{const s=e.to||e.href||"";return g.value?s:d(s,a.resolve)}),i=g.value||h==null?void 0:h({...e,to:l}),y=p(()=>{var s;if(!l.value||o.value)return l.value;if(g.value){const x=typeof l.value=="object"&&"path"in l.value?_(l.value):l.value,C=typeof x=="object"?a.resolve(x).href:x;return d(C,a.resolve)}return typeof l.value=="object"?((s=a.resolve(l.value))==null?void 0:s.href)??null:d(V(b.app.baseURL,l.value),a.resolve)});return{to:l,hasTarget:f,isAbsoluteUrl:o,isExternal:g,href:y,isActive:(i==null?void 0:i.isActive)??p(()=>l.value===a.currentRoute.value.path),isExactActive:(i==null?void 0:i.isExactActive)??p(()=>l.value===a.currentRoute.value.path),route:(i==null?void 0:i.route)??p(()=>a.resolve(l.value)),async navigate(){await z(y.value,{replace:e.replace,external:g.value||f.value})}}}return j({name:c,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:R,setup(e,{slots:a}){const b=A(),{to:f,href:o,navigate:m,isExternal:h,hasTarget:g,isAbsoluteUrl:l}=R(e),i=w(!1),y=w(null),s=r=>{var u;y.value=e.custom?(u=r==null?void 0:r.$el)==null?void 0:u.nextElementSibling:r==null?void 0:r.$el};function x(r){var u,n;return!i.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===r:((u=e.prefetchOn)==null?void 0:u[r])??((n=t.prefetchOn)==null?void 0:n[r]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!K()}async function C(r=S()){if(i.value)return;i.value=!0;const u=typeof f.value=="string"?f.value:h.value?_(f.value):b.resolve(f.value).fullPath,n=h.value?new URL(u,window.location.href).href:u;await Promise.all([r.hooks.callHook("link:prefetch",n).catch(()=>{}),!h.value&&!g.value&&D(f.value,b).catch(()=>{})])}if(x("visibility")){const r=S();let u,n=null;N(()=>{const v=W();B(()=>{u=E(()=>{var q;(q=y==null?void 0:y.value)!=null&&q.tagName&&(n=v.observe(y.value,async()=>{n==null||n(),n=null,await C(r)}))})})}),T(()=>{u&&U(u),n==null||n(),n=null})}return()=>{var n;if(!h.value&&!g.value){const v={ref:s,to:f.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(x("interaction")&&(v.onPointerenter=C.bind(null,void 0),v.onFocus=C.bind(null,void 0)),i.value&&(v.class=e.prefetchedClass||t.prefetchedClass),v.rel=e.rel||void 0),L(P("RouterLink"),v,a.default)}const r=e.target||null,u=G(e.noRel?"":e.rel,t.externalRelAttribute,l.value||g.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:o.value,navigate:m,prefetch:C,get route(){if(!o.value)return;const v=new URL(o.value,window.location.href);return{path:v.pathname,fullPath:v.pathname,get query(){return I(v.search)},hash:v.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o.value}},rel:u,target:r,isExternal:h.value||g.value,isActive:!1,isExactActive:!1}):null:L("a",{ref:y,href:o.value||null,rel:u,target:r},(n=a.default)==null?void 0:n.call(a))}}})}const Y=Q(F);function k(t,c){const d=c==="append"?M:$;return O(t)&&!t.startsWith("http")?t:d(t,!0)}function W(){const t=S();if(t._observer)return t._observer;let c=null;const d=new Map,R=(a,b)=>(c||(c=new IntersectionObserver(f=>{for(const o of f){const m=d.get(o.target);(o.isIntersecting||o.intersectionRatio>0)&&m&&m()}})),d.set(a,b),c.observe(a),()=>{d.delete(a),c.unobserve(a),d.size===0&&(c.disconnect(),c=null)});return t._observer={observe:R}}const J=/2g/;function K(){const t=navigator.connection;return!!(t&&(t.saveData||J.test(t.effectiveType)))}export{Y as _};