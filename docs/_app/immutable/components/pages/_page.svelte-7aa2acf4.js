import{S as le,i as re,s as ae,k as p,a as B,q as X,l as h,m as g,h as u,c as L,r as z,H as x,n as d,I as oe,b as H,F as f,J as $,u as te,A as ee,K as ie,L as ve,B as be,M as ye,C as ke,D as we,E as Ee,N as Ue,f as G,t as Q,O as Ie,d as ue,g as me,P as De,v as pe,w as he,x as _e,y as ge}from"../../chunks/index-f39b6267.js";import{w as Pe}from"../../chunks/index-2dee0531.js";function Re(l){let e,t,r,s,n,i,o,a,c,b,m,y,_,v,w,D,E,A,U,V,P,j,C,N,T,J;return{c(){e=p("div"),t=p("div"),r=p("figure"),s=p("img"),i=B(),o=p("div"),a=p("div"),c=p("div"),b=p("span"),m=p("i"),_=B(),v=p("div"),w=p("p"),D=X(l[1]),E=B(),A=p("p"),U=X(l[2]),V=B(),P=p("div"),j=X(l[4]),C=B(),N=p("br"),this.h()},l(k){e=h(k,"DIV",{class:!0});var R=g(e);t=h(R,"DIV",{class:!0});var I=g(t);r=h(I,"FIGURE",{class:!0});var M=g(r);s=h(M,"IMG",{src:!0,alt:!0}),M.forEach(u),I.forEach(u),i=L(R),o=h(R,"DIV",{class:!0});var S=g(o);a=h(S,"DIV",{class:!0});var q=g(a);c=h(q,"DIV",{class:!0});var K=g(c);b=h(K,"SPAN",{class:!0});var Y=g(b);m=h(Y,"I",{class:!0}),g(m).forEach(u),Y.forEach(u),K.forEach(u),_=L(q),v=h(q,"DIV",{class:!0});var F=g(v);w=h(F,"P",{class:!0});var O=g(w);D=z(O,l[1]),O.forEach(u),E=L(F),A=h(F,"P",{class:!0});var Z=g(A);U=z(Z,l[2]),Z.forEach(u),F.forEach(u),q.forEach(u),V=L(S),P=h(S,"DIV",{class:!0});var W=g(P);j=z(W,l[4]),C=L(W),N=h(W,"BR",{}),W.forEach(u),S.forEach(u),R.forEach(u),this.h()},h(){x(s.src,n=l[0])||d(s,"src",n),d(s,"alt","Placeholder image"),d(r,"class","image is-4by3"),d(t,"class","card-image"),d(m,"class",y=oe(`mdi mdi-${l[3]} mdi-48px`)+" svelte-1yuy7mq"),d(b,"class","icon light svelte-1yuy7mq"),d(c,"class","media-left media-left-helper svelte-1yuy7mq"),d(w,"class","title is-4 has-text-white"),d(A,"class","subtitle is-6 has-text-white"),d(v,"class","media-content"),d(a,"class","media"),d(P,"class","content has-text-white"),d(o,"class","card-content"),d(e,"class","card is-translucent-black card-helper svelte-1yuy7mq")},m(k,R){H(k,e,R),f(e,t),f(t,r),f(r,s),f(e,i),f(e,o),f(o,a),f(a,c),f(c,b),f(b,m),f(a,_),f(a,v),f(v,w),f(w,D),f(v,E),f(v,A),f(A,U),f(o,V),f(o,P),f(P,j),f(P,C),f(P,N),T||(J=$(e,"click",l[5]),T=!0)},p(k,[R]){R&1&&!x(s.src,n=k[0])&&d(s,"src",n),R&8&&y!==(y=oe(`mdi mdi-${k[3]} mdi-48px`)+" svelte-1yuy7mq")&&d(m,"class",y),R&2&&te(D,k[1]),R&4&&te(U,k[2]),R&16&&te(j,k[4])},i:ee,o:ee,d(k){k&&u(e),T=!1,J()}}}function Se(l,e,t){let{imgUrl:r}=e,{title:s}=e,{subtitle:n}=e,{avatarUrl:i}=e,{description:o}=e,{url:a}=e,{onSelect:c}=e;const b=()=>(c(a),null);return l.$$set=m=>{"imgUrl"in m&&t(0,r=m.imgUrl),"title"in m&&t(1,s=m.title),"subtitle"in m&&t(2,n=m.subtitle),"avatarUrl"in m&&t(3,i=m.avatarUrl),"description"in m&&t(4,o=m.description),"url"in m&&t(6,a=m.url),"onSelect"in m&&t(7,c=m.onSelect)},[r,s,n,i,o,b,a,c]}class Ve extends le{constructor(e){super(),re(this,e,Se,Re,ae,{imgUrl:0,title:1,subtitle:2,avatarUrl:3,description:4,url:6,onSelect:7})}}const Me=""+new URL("../../assets/logo-772af4b6.jpeg",import.meta.url).href,Ae=""+new URL("../../assets/workPlace-bf8d8289.jpeg",import.meta.url).href,Be=""+new URL("../../assets/concierge-b47a2a0e.jpeg",import.meta.url).href,Le=""+new URL("../../assets/office-0f8435bd.jpeg",import.meta.url).href,qe=""+new URL("../../assets/booking-9e3effff.png",import.meta.url).href,ne=[{title:"Book a Space",subtitle:"Reserve a room or desk to work",imgUrl:Ae,avatarUrl:"chair-rolling",url:"https://templates.demo.place.tech/workplace/#/dashboard",description:"View space availability and reserve desks and rooms on the interactive map"},{title:"Concierge",subtitle:"Reserve a room or desk to work",imgUrl:Be,avatarUrl:"account-tie-woman",url:"https://templates.demo.place.tech/concierge/#/day-view?zone_ids=bld-01_lvl-01",description:"View space availability and reserve desks and rooms on the interactive map"},{title:"Office Map",subtitle:"Reserve a room or desk to work",imgUrl:Le,avatarUrl:"map-marker-account-outline",url:"https://templates.demo.place.tech/map-kiosk/#/explore",description:"Main booking tool for employees and agency employees"},{title:"Booking",subtitle:"Reserve a room or desk to work",imgUrl:qe,avatarUrl:"calendar-account-outline",url:"https://templates.demo.place.tech/booking-panel/#/panel/space-0",description:"Main booking tool for employees and agency employees"}];function ce(l){return Object.prototype.toString.call(l)==="[object Date]"}function se(l,e,t,r){if(typeof t=="number"||ce(t)){const s=r-t,n=(t-e)/(l.dt||1/60),i=l.opts.stiffness*s,o=l.opts.damping*n,a=(i-o)*l.inv_mass,c=(n+a)*l.dt;return Math.abs(c)<l.opts.precision&&Math.abs(s)<l.opts.precision?r:(l.settled=!1,ce(t)?new Date(t.getTime()+c):t+c)}else{if(Array.isArray(t))return t.map((s,n)=>se(l,e[n],t[n],r[n]));if(typeof t=="object"){const s={};for(const n in t)s[n]=se(l,e[n],t[n],r[n]);return s}else throw new Error(`Cannot spring ${typeof t} values`)}}function je(l,e={}){const t=Pe(l),{stiffness:r=.15,damping:s=.8,precision:n=.01}=e;let i,o,a,c=l,b=l,m=1,y=0,_=!1;function v(D,E={}){b=D;const A=a={};if(l==null||E.hard||w.stiffness>=1&&w.damping>=1)return _=!0,i=ie(),c=D,t.set(l=b),Promise.resolve();if(E.soft){const U=E.soft===!0?.5:+E.soft;y=1/(U*60),m=0}return o||(i=ie(),_=!1,o=ve(U=>{if(_)return _=!1,o=null,!1;m=Math.min(m+y,1);const V={inv_mass:m,opts:w,settled:!0,dt:(U-i)*60/1e3},P=se(V,c,l,b);return i=U,c=l,t.set(l=P),V.settled&&(o=null),!V.settled})),new Promise(U=>{o.promise.then(()=>{A===a&&U()})})}const w={set:v,update:(D,E)=>v(D(b,l),E),subscribe:t.subscribe,stiffness:r,damping:s,precision:n};return w}function Ce(){const l="(prefers-reduced-motion: no-preference)";return!window.matchMedia(l).matches}function Ge(l,e){let{setter:t}=e,r=je({x:0,y:0,rotation:0,scale:1},{stiffness:.1,damping:.15}),s=Ce();l.style="display: inline-block";const n=r.subscribe(({x:i,y:o,rotation:a,scale:c})=>{l.style.transform=!s&&`translate(${i}px, ${o}px) rotate(${a}deg) scale(${c})`});return{update({isBooped:i,x:o=0,y:a=0,rotation:c=0,scale:b=1,timing:m}){r.set(i?{x:o,y:a,rotation:c,scale:b}:{x:0,y:0,rotation:0,scale:1}),i&&window.setTimeout(()=>t(!1),m)},destroy(){n()}}}function Ne(l){let e,t,r,s,n;const i=l[5].default,o=be(i,l,l[4],null);return{c(){e=p("span"),o&&o.c()},l(a){e=h(a,"SPAN",{});var c=g(e);o&&o.l(c),c.forEach(u)},m(a,c){H(a,e,c),o&&o.m(e,null),r=!0,s||(n=[$(e,"mouseenter",l[3]),$(e,"click",l[3]),ye(t=Ge.call(null,e,{isBooped:l[1],...l[0],setter:l[2]}))],s=!0)},p(a,[c]){o&&o.p&&(!r||c&16)&&ke(o,i,a,a[4],r?Ee(i,a[4],c,null):we(a[4]),null),t&&Ue(t.update)&&c&3&&t.update.call(null,{isBooped:a[1],...a[0],setter:a[2]})},i(a){r||(G(o,a),r=!0)},o(a){Q(o,a),r=!1},d(a){a&&u(e),o&&o.d(a),s=!1,Ie(n)}}}function Fe(l,e,t){let{$$slots:r={},$$scope:s}=e,{boopParams:n}=e,i=!1;function o(c){t(1,i=c)}function a(){t(1,i=!0)}return l.$$set=c=>{"boopParams"in c&&t(0,n=c.boopParams),"$$scope"in c&&t(4,s=c.$$scope)},[n,i,o,a,s,r]}class Oe extends le{constructor(e){super(),re(this,e,Fe,Ne,ae,{boopParams:0})}}function fe(l,e,t){const r=l.slice();return r[6]=e[t].imgUrl,r[7]=e[t].title,r[8]=e[t].subtitle,r[9]=e[t].avatarUrl,r[10]=e[t].description,r[11]=e[t].url,r[13]=t,r}function We(l){let e,t,r,s,n,i,o,a,c,b,m;return{c(){e=p("div"),t=p("div"),r=p("span"),s=p("i"),i=B(),o=p("iframe"),this.h()},l(y){e=h(y,"DIV",{class:!0,style:!0});var _=g(e);t=h(_,"DIV",{class:!0,style:!0});var v=g(t);r=h(v,"SPAN",{class:!0});var w=g(r);s=h(w,"I",{class:!0}),g(s).forEach(u),w.forEach(u),v.forEach(u),i=L(_),o=h(_,"IFRAME",{src:!0}),g(o).forEach(u),_.forEach(u),this.h()},h(){d(s,"class","mdi mdi-48px mdi-close"),d(r,"class","icon has-text-danger"),d(t,"class","is-translucent-black close-button svelte-8otyr1"),d(t,"style",n=`margin-right: ${l[2]}`),x(o.src,a=l[0])||d(o,"src",a),d(e,"class","iframe svelte-8otyr1"),d(e,"style",c=`width: ${l[1]}`)},m(y,_){H(y,e,_),f(e,t),f(t,r),f(r,s),f(e,i),f(e,o),b||(m=$(t,"click",l[5]),b=!0)},p(y,_){_&4&&n!==(n=`margin-right: ${y[2]}`)&&d(t,"style",n),_&1&&!x(o.src,a=y[0])&&d(o,"src",a),_&2&&c!==(c=`width: ${y[1]}`)&&d(e,"style",c)},i:ee,o:ee,d(y){y&&u(e),b=!1,m()}}}function Qe(l){let e,t,r=ne,s=[];for(let i=0;i<r.length;i+=1)s[i]=de(fe(l,r,i));const n=i=>Q(s[i],1,1,()=>{s[i]=null});return{c(){e=p("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=h(i,"DIV",{class:!0});var o=g(e);for(let a=0;a<s.length;a+=1)s[a].l(o);o.forEach(u),this.h()},h(){d(e,"class","columns cards svelte-8otyr1")},m(i,o){H(i,e,o);for(let a=0;a<s.length;a+=1)s[a].m(e,null);t=!0},p(i,o){if(o&8){r=ne;let a;for(a=0;a<r.length;a+=1){const c=fe(i,r,a);s[a]?(s[a].p(c,o),G(s[a],1)):(s[a]=de(c),s[a].c(),G(s[a],1),s[a].m(e,null))}for(me(),a=r.length;a<s.length;a+=1)n(a);ue()}},i(i){if(!t){for(let o=0;o<r.length;o+=1)G(s[o]);t=!0}},o(i){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)Q(s[o]);t=!1},d(i){i&&u(e),De(s,i)}}}function Te(l){let e,t;return e=new Ve({props:{imgUrl:l[6],title:l[7],subtitle:l[8],avatarUrl:l[9],description:l[10],url:l[11],onSelect:l[3]}}),{c(){pe(e.$$.fragment)},l(r){he(e.$$.fragment,r)},m(r,s){_e(e,r,s),t=!0},p:ee,i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){Q(e.$$.fragment,r),t=!1},d(r){ge(e,r)}}}function de(l){let e,t,r,s;return t=new Oe({props:{boopParams:{scale:1.1,timing:200},$$slots:{default:[Te]},$$scope:{ctx:l}}}),{c(){e=p("div"),pe(t.$$.fragment),r=B(),this.h()},l(n){e=h(n,"DIV",{class:!0});var i=g(e);he(t.$$.fragment,i),r=L(i),i.forEach(u),this.h()},h(){d(e,"class","column")},m(n,i){H(n,e,i),_e(t,e,null),f(e,r),s=!0},p(n,i){const o={};i&16384&&(o.$$scope={dirty:i,ctx:n}),t.$set(o)},i(n){s||(G(t.$$.fragment,n),s=!0)},o(n){Q(t.$$.fragment,n),s=!1},d(n){n&&u(e),ge(t)}}}function Xe(l){let e,t,r,s,n,i,o,a,c,b,m,y,_,v,w,D,E,A,U,V,P,j,C,N,T;const J=[Qe,We],k=[];function R(I,M){return I[0]===null?0:1}return _=R(l),v=k[_]=J[_](l),{c(){e=p("div"),t=p("div"),r=B(),s=p("div"),n=p("div"),i=p("figure"),o=p("img"),c=B(),b=p("div"),m=X("General Services Administration"),y=B(),v.c(),w=B(),D=p("div"),E=p("p"),A=X("Made with "),U=p("span"),V=p("span"),P=p("i"),j=X(`
				by WXSD team (wxsd@external.cisco.com)`),this.h()},l(I){e=h(I,"DIV",{class:!0});var M=g(e);t=h(M,"DIV",{class:!0}),g(t).forEach(u),r=L(M),s=h(M,"DIV",{class:!0});var S=g(s);n=h(S,"DIV",{class:!0});var q=g(n);i=h(q,"FIGURE",{class:!0});var K=g(i);o=h(K,"IMG",{src:!0}),K.forEach(u),c=L(q),b=h(q,"DIV",{class:!0});var Y=g(b);m=z(Y,"General Services Administration"),Y.forEach(u),q.forEach(u),y=L(S),v.l(S),w=L(S),D=h(S,"DIV",{class:!0});var F=g(D);E=h(F,"P",{});var O=g(E);A=z(O,"Made with "),U=h(O,"SPAN",{});var Z=g(U);V=h(Z,"SPAN",{class:!0});var W=g(V);P=h(W,"I",{class:!0}),g(P).forEach(u),W.forEach(u),Z.forEach(u),j=z(O,`
				by WXSD team (wxsd@external.cisco.com)`),O.forEach(u),F.forEach(u),S.forEach(u),M.forEach(u),this.h()},h(){d(t,"class","bg-image svelte-8otyr1"),x(o.src,a=Me)||d(o,"src",a),d(i,"class","image is-128x128 mr-4 logo svelte-8otyr1"),d(b,"class","title is-4 has-text-white"),d(n,"class","header is-translucent-black pl-2 svelte-8otyr1"),d(P,"class","mdi mdi-heart "),d(V,"class","icon has-text-danger"),d(D,"class","footer has-text-weight-medium has-text-light svelte-8otyr1"),d(s,"class","contnet"),d(e,"class","app svelte-8otyr1")},m(I,M){H(I,e,M),f(e,t),f(e,r),f(e,s),f(s,n),f(n,i),f(i,o),f(n,c),f(n,b),f(b,m),f(s,y),k[_].m(s,null),f(s,w),f(s,D),f(D,E),f(E,A),f(E,U),f(U,V),f(V,P),f(E,j),C=!0,N||(T=$(i,"click",l[4]),N=!0)},p(I,[M]){let S=_;_=R(I),_===S?k[_].p(I,M):(me(),Q(k[S],1,1,()=>{k[S]=null}),ue(),v=k[_],v?v.p(I,M):(v=k[_]=J[_](I),v.c()),G(v,1),v.m(s,w))},i(I){C||(G(v),C=!0)},o(I){Q(v),C=!1},d(I){I&&u(e),k[_].d(),N=!1,T()}}}function ze(l,e,t){let r=null,s,n;const i=c=>{t(0,r=c)};return window.navigator.userAgent.includes("RoomOS; Cisco Webex Desk Pro")?(s="120rem",n="9.55rem"):(s="110rem",n="8.75rem"),[r,s,n,i,()=>{t(0,r=null)},()=>{t(0,r=null)}]}class Ke extends le{constructor(e){super(),re(this,e,ze,Xe,ae,{})}}export{Ke as default};
