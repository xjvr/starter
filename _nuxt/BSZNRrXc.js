import{Y as O,u as p,Z as f,c as _,$ as j,a0 as B,H as M,a1 as R,e as S,K as E,a2 as P,a3 as N,X as V,S as w}from"./ficVX1Iw.js";const z=s=>s==="defer"||s===!1;function x(...s){var g;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[e,d,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=p(),b=d,C=()=>f.value,H=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server??(a.server=!0),a.default??(a.default=C),a.getCachedData??(a.getCachedData=H),a.lazy??(a.lazy=!1),a.immediate??(a.immediate=!0),a.deep??(a.deep=f.deep),a.dedupe??(a.dedupe="cancel");const u=a.getCachedData(e,t),h=u!=null;if(!t._asyncData[e]||!a.immediate){(g=t.payload._errors)[e]??(g[e]=f.errorValue);const c=a.deep?_:j;t._asyncData[e]={data:c(h?u:a.default()),pending:_(!h),error:B(t.payload._errors,e),status:_("idle"),_default:a.default}}const n={...t._asyncData[e]};delete n._default,n.refresh=n.execute=(c={})=>{if(t._asyncDataPromises[e]){if(z(c.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(c._initial||t.isHydrating&&c._initial!==!1){const o=c._initial?u:a.getCachedData(e,t);if(o!=null)return Promise.resolve(o)}n.pending.value=!0,n.status.value="pending";const l=new Promise((o,i)=>{try{o(b(t))}catch(y){i(y)}}).then(async o=>{if(l.cancelled)return t._asyncDataPromises[e];let i=o;a.transform&&(i=await a.transform(o)),a.pick&&(i=F(i,a.pick)),t.payload.data[e]=i,n.data.value=i,n.error.value=f.errorValue,n.status.value="success"}).catch(o=>{if(l.cancelled)return t._asyncDataPromises[e];n.error.value=V(o),n.data.value=w(a.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},n.clear=()=>K(t,e);const D=()=>n.refresh({_initial:!0}),m=a.server!==!1&&t.payload.serverRendered;{const c=M();if(c&&m&&a.immediate&&!c.sp&&(c.sp=[]),c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const i=c._nuxtOnBeforeMountCbs;R(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),S(()=>i.splice(0,i.length))}m&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):c&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(D):a.immediate&&D();const l=N();if(a.watch){const i=E(a.watch,()=>n.refresh());l&&P(i)}const o=t.hook("app:data:refresh",async i=>{(!i||i.includes(e))&&await n.refresh()});l&&P(o)}const v=Promise.resolve(t._asyncDataPromises[e]).then(()=>n);return Object.assign(v,n),v}async function I(s){await new Promise(e=>O(e)),await p().hooks.callHookParallel("app:data:refresh",void 0)}function K(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=f.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=w(s._asyncData[r]._default()),s._asyncData[r].error.value=f.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function F(s,r){const e={};for(const d of r)e[d]=s[d];return e}const U={content:"v3.3.0--nhvu8zFHRy"},X={content:"_content_content",info:"_content_info"},Y={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},info:{type:"data",fields:{}}};export{Y as a,U as c,I as r,X as t,x as u};
