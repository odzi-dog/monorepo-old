import{S as t,i as e,s as n,e as o,k as a,c as s,a as l,n as r,d,b as i,H as c,f as u,I as h,V as f,W as v,X as p,Y as m,Z as g,_ as j,$ as b,R as y,t as k,U as w,g as E,a0 as x,w as T,x as _,u as M,a1 as O,a2 as U,r as I,a3 as N,J as R}from"../../chunks/vendor-a4e104ac.js";function D(t,{pending:e,error:n,result:o}){let a;async function s(s){const l=a={};s.preventDefault();const r=new FormData(t);e&&e(r,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:r});if(l!==a)return;e.ok?o(e,t):n?n(e,null,t):console.error(await e.text())}catch(d){if(!n)throw d;n(null,d,t)}}return t.addEventListener("submit",s),{destroy(){t.removeEventListener("submit",s)}}}function F(t,e,n){const o=t.slice();return o[7]=e[n],o[8]=e,o[9]=n,o}function P(t,e){let n,k,w,E,x,T,_,M,I,N,F,P,B,V,$,H,L,S,A,C,J,W,X,Y,Z,q,z,G,K=R;function Q(...t){return e[3](e[7],e[8],e[9],...t)}function tt(){return e[4](e[7],e[8],e[9])}function et(){return e[5](e[7])}return{key:t,first:null,c(){n=o("div"),k=o("form"),w=o("input"),x=a(),T=o("button"),N=a(),F=o("form"),P=o("input"),V=a(),$=o("button"),L=a(),S=o("form"),A=o("button"),X=a(),this.h()},l(t){n=s(t,"DIV",{class:!0});var e=l(n);k=s(e,"FORM",{action:!0,method:!0});var o=l(k);w=s(o,"INPUT",{type:!0,name:!0,class:!0}),x=r(o),T=s(o,"BUTTON",{class:!0,"aria-label":!0}),l(T).forEach(d),o.forEach(d),N=r(e),F=s(e,"FORM",{class:!0,action:!0,method:!0});var a=l(F);P=s(a,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),V=r(a),$=s(a,"BUTTON",{class:!0,"aria-label":!0}),l($).forEach(d),a.forEach(d),L=r(e),S=s(e,"FORM",{action:!0,method:!0});var i=l(S);A=s(i,"BUTTON",{class:!0,"aria-label":!0}),l(A).forEach(d),i.forEach(d),X=r(e),e.forEach(d),this.h()},h(){i(w,"type","hidden"),i(w,"name","done"),w.value=E=e[7].done?"":"true",i(w,"class","svelte-16tkvjn"),i(T,"class","toggle svelte-16tkvjn"),i(T,"aria-label",_="Mark todo as "+(e[7].done?"not done":"done")),i(k,"action",M="/todos/"+e[7].uid+".json?_method=patch"),i(k,"method","post"),i(P,"aria-label","Edit todo"),i(P,"type","text"),i(P,"name","text"),P.value=B=e[7].text,i(P,"class","svelte-16tkvjn"),i($,"class","save svelte-16tkvjn"),i($,"aria-label","Save todo"),i(F,"class","text svelte-16tkvjn"),i(F,"action",H="/todos/"+e[7].uid+".json?_method=patch"),i(F,"method","post"),i(A,"class","delete svelte-16tkvjn"),i(A,"aria-label","Delete todo"),A.disabled=C=e[7].pending_delete,i(S,"action",J="/todos/"+e[7].uid+".json?_method=delete"),i(S,"method","post"),i(n,"class","todo svelte-16tkvjn"),c(n,"done",e[7].done),this.first=n},m(t,o){u(t,n,o),h(n,k),h(k,w),h(k,x),h(k,T),h(n,N),h(n,F),h(F,P),h(F,V),h(F,$),h(n,L),h(n,S),h(S,A),h(n,X),q=!0,z||(G=[f(I=D.call(null,k,{pending:Q,result:e[1]})),f(D.call(null,F,{result:e[1]})),f(W=D.call(null,S,{pending:tt,result:et}))],z=!0)},p(t,o){e=t,(!q||1&o&&E!==(E=e[7].done?"":"true"))&&(w.value=E),(!q||1&o&&_!==(_="Mark todo as "+(e[7].done?"not done":"done")))&&i(T,"aria-label",_),(!q||1&o&&M!==(M="/todos/"+e[7].uid+".json?_method=patch"))&&i(k,"action",M),I&&v(I.update)&&1&o&&I.update.call(null,{pending:Q,result:e[1]}),(!q||1&o&&B!==(B=e[7].text)&&P.value!==B)&&(P.value=B),(!q||1&o&&H!==(H="/todos/"+e[7].uid+".json?_method=patch"))&&i(F,"action",H),(!q||1&o&&C!==(C=e[7].pending_delete))&&(A.disabled=C),(!q||1&o&&J!==(J="/todos/"+e[7].uid+".json?_method=delete"))&&i(S,"action",J),W&&v(W.update)&&1&o&&W.update.call(null,{pending:tt,result:et}),1&o&&c(n,"done",e[7].done)},r(){Z=n.getBoundingClientRect()},f(){p(n),K(),m(n,Z)},a(){K(),K=g(n,Z,O,{duration:200})},i(t){q||(t&&j((()=>{Y||(Y=b(n,U,{start:.7},!0)),Y.run(1)})),q=!0)},o(t){t&&(Y||(Y=b(n,U,{start:.7},!1)),Y.run(0)),q=!1},d(t){t&&d(n),t&&Y&&Y.end(),z=!1,y(G)}}}function B(t){let e,n,c,p,m,g,j,b,y,O,U,R,B=[],V=new Map,$=t[0];const H=t=>t[7].uid;for(let o=0;o<$.length;o+=1){let e=F(t,$,o),n=H(e);V.set(n,B[o]=P(n,e))}return{c(){e=a(),n=o("div"),c=o("h1"),p=k("Todos"),m=a(),g=o("form"),j=o("input"),y=a();for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){w('[data-svelte="svelte-181o7gf"]',document.head).forEach(d),e=r(t),n=s(t,"DIV",{class:!0});var o=l(n);c=s(o,"H1",{});var a=l(c);p=E(a,"Todos"),a.forEach(d),m=r(o),g=s(o,"FORM",{class:!0,action:!0,method:!0});var i=l(g);j=s(i,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),i.forEach(d),y=r(o);for(let e=0;e<B.length;e+=1)B[e].l(o);o.forEach(d),this.h()},h(){document.title="Todos",i(j,"name","text"),i(j,"aria-label","Add todo"),i(j,"placeholder","+ tap to add a todo"),i(j,"class","svelte-16tkvjn"),i(g,"class","new svelte-16tkvjn"),i(g,"action","/todos.json"),i(g,"method","post"),i(n,"class","todos svelte-16tkvjn")},m(o,a){u(o,e,a),u(o,n,a),h(n,c),h(c,p),h(n,m),h(n,g),h(g,j),h(n,y);for(let t=0;t<B.length;t+=1)B[t].m(n,null);O=!0,U||(R=f(b=D.call(null,g,{result:t[2]})),U=!0)},p(t,[e]){if(b&&v(b.update)&&1&e&&b.update.call(null,{result:t[2]}),3&e){$=t[0],I();for(let t=0;t<B.length;t+=1)B[t].r();B=x(B,e,H,1,t,$,V,n,N,P,null,F);for(let t=0;t<B.length;t+=1)B[t].a();T()}},i(t){if(!O){for(let t=0;t<$.length;t+=1)_(B[t]);O=!0}},o(t){for(let e=0;e<B.length;e+=1)M(B[e]);O=!1},d(t){t&&d(e),t&&d(n);for(let e=0;e<B.length;e+=1)B[e].d();U=!1,R()}}}var V=function(t,e,n,o){return new(n||(n=Promise))((function(a,s){function l(t){try{d(o.next(t))}catch(e){s(e)}}function r(t){try{d(o.throw(t))}catch(e){s(e)}}function d(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,r)}d((o=o.apply(t,e||[])).next())}))};const $=({fetch:t})=>V(void 0,void 0,void 0,(function*(){const e=yield t("/todos.json");if(e.ok){return{props:{todos:yield e.json()}}}const{message:n}=yield e.json();return{error:new Error(n)}}));function H(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(a,s){function l(t){try{d(o.next(t))}catch(e){s(e)}}function r(t){try{d(o.throw(t))}catch(e){s(e)}}function d(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,r)}d((o=o.apply(t,e||[])).next())}))};let{todos:a}=e;return t.$$set=t=>{"todos"in t&&n(0,a=t.todos)},[a,function(t){return o(this,void 0,void 0,(function*(){const e=yield t.json();n(0,a=a.map((t=>t.uid===e.uid?e:t)))}))},async(t,e)=>{const o=await t.json();n(0,a=[...a,o]),e.reset()},(t,e,o,s)=>{n(0,e[o].done=!!s.get("done"),a)},(t,e,o)=>n(0,e[o].pending_delete=!0,a),t=>{n(0,a=a.filter((e=>e.uid!==t.uid)))}]}class L extends t{constructor(t){super(),e(this,t,H,B,n,{todos:0})}}export{L as default,$ as load};
