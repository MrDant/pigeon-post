import{r as M,c as n,e as l,i as f,f as o,g as b,D as h,n as _,E as i,G as $,w as g,h as m,H as D,I as U,J as S,K as x,k as A,d as B,L as N,M as V,N as v,O as j,P as R,Q as O,R as T,S as I,o as z,t as C,U as E,V as J,s as L}from"./iA_satXO.js";const P={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},G={class:"text-center py-8"},H={class:"mb-3"},K={__name:"message",setup(e){const t=M(!1);return(r,s)=>{const u=D,c=U;return n(),l("div",G,[f(u,{name:"i-fluent-color:checkmark-circle-48",class:"text-4xl"}),s[5]||(s[5]=o("h2",null,"Avete ricevuto un messaggio !",-1)),o("div",{class:_(["overflow-hidden font-bold text-xl relative transition-all duration-1000",i(t)?" scale-y-100 translate-y-0":" scale-y-0 translate-y-full"])},[o("i",H,[s[1]||(s[1]=b('"')),h(r.$slots,"default"),s[2]||(s[2]=b('"'))]),s[3]||(s[3]=o("div",{class:"absolute bottom-0 right-0 left-0 h-3",style:{background:"linear-gradient(to bottom, transparent, white)"}},null,-1))],2),i(t)?m("",!0):(n(),$(c,{key:0,class:"mt-2",color:"blue",onClick:s[0]||(s[0]=w=>t.value=!0)},{default:g(()=>s[4]||(s[4]=[b(" Aprire il messaggio ")])),_:1}))])}}},Q=S(x.ui.strategy,x.ui.card,P),Z=B({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:r}=N("card",V(e,"ui"),Q),s=v(()=>j(R(t.value.base,t.value.rounded,t.value.divide,t.value.ring,t.value.shadow,t.value.background),e.class));return{ui:t,attrs:r,cardClass:s}}});function q(e,t,r,s,u,c){return n(),$(T(e.$attrs.onSubmit?"form":e.as),O({class:e.cardClass},e.attrs),{default:g(()=>[e.$slots.header?(n(),l("div",{key:0,class:_([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[h(e.$slots,"header")],2)):m("",!0),e.$slots.default?(n(),l("div",{key:1,class:_([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[h(e.$slots,"default")],2)):m("",!0),e.$slots.footer?(n(),l("div",{key:2,class:_([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[h(e.$slots,"footer")],2)):m("",!0)]),_:3},16,["class"])}const F=A(Z,[["render",q]]),W=I("/pigeon.png"),X=I("/christmass-hat.png"),Y=window.setInterval,ee={key:0,class:"h-1 min-h-screen flex items-center flex-1 w-full justify-center"},te={key:0,class:"text-center"},se={key:1,class:"text-center"},ae={class:"relative flex items-center gap-6 py-10 px-6 text-2xl text-slate-600"},oe={class:"border-b-4 border-dotted flex-1 relative"},ne={key:0,src:X,alt:"christmass-hat",class:"absolute top-[10%] left-[65%] w-8"},re={class:"text-slate-600"},ie={key:1,class:"text-center text-slate-600"},le={class:"rounded-full border-2 p-4 inline-block text-3xl my-4",style:{"line-height":"0"}},ue={__name:"[data]",setup(e){const t=v(()=>{const a=J(L().params.data);return a.start=new Date(a.start),a.end=new Date(a.end),a}),r=M(new Date),s=v(()=>r.value.getDay()<26&&r.value.getMonth()==11);z(()=>{Y(()=>r.value=new Date,1e3)});function u(a){return a<10?"0"+a:a}const c=v(()=>t.value.end.getTime()<=r.value.getTime()?100:Math.round((r.value-t.value.start)/(t.value.end-t.value.start)*100)),w=v(()=>{const a=t.value.end-r.value;if(a<=0)return"00:00:00:00";const d=Math.floor(a/(1e3*60*60*24)),p=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),y=Math.floor(a%(1e3*60*60)/(1e3*60)),k=Math.floor(a%(1e3*60)/1e3);return`${d?d+"j":""} ${p?u(p)+"h":""} ${y?u(y)+"m":""} ${u(k)}s`});return(a,d)=>{const p=D,y=K,k=F;return i(t).end?(n(),l("div",ee,[f(k,{class:"shadow container mb-20"},{header:g(()=>[i(c)==100?(n(),l("h1",te," Il vostro piccione è arrivato ! ")):(n(),l("h1",se,"Un piccione è in viaggio !"))]),footer:g(()=>[o("div",re,[i(c)==100?(n(),$(y,{key:0},{default:g(()=>[b(C(i(t).message),1)]),_:1})):(n(),l("div",ie,[o("div",le,[f(p,{name:"i-eos-icons-hourglass"})]),d[1]||(d[1]=o("p",null,"Il vostro piccione arriverà tra :",-1)),o("p",null,C(i(w)),1)]))])]),default:g(()=>[o("div",ae,[f(p,{name:"i-akar-icons-home-alt1"}),o("div",oe,[o("div",{class:"absolute w-20 -translate-x-1/2 top-1/2 -translate-y-1/2 pb-3",style:E({left:i(c)+"%"})},[d[0]||(d[0]=o("img",{src:W,alt:"pigeon"},null,-1)),i(s)?(n(),l("img",ne)):m("",!0)],4)]),f(p,{name:"i-akar-icons-location"})])]),_:1})])):m("",!0)}}};export{ue as default};
