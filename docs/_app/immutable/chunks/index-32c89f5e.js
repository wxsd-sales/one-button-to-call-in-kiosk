function y(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function q(){return Object.create(null)}function g(t){t.forEach(z)}function B(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function ft(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function Q(t){return Object.keys(t).length===0}function R(t,...n){if(t==null)return y;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function dt(t,n,e){t.$$.on_destroy.push(R(n,e))}function _t(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=n.dirty[u]|r[u];return s}return n.dirty|r}return n.dirty}function mt(t,n,e,i,r,s){if(r){const c=D(n,e,i,s);t.p(c,r)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function yt(t){return t==null?"":t}function gt(t){return t&&B(t.destroy)?t.destroy:y}const O=typeof window<"u";let xt=O?()=>window.performance.now():()=>Date.now(),T=O?t=>requestAnimationFrame(t):y;const _=new Set;function F(t){_.forEach(n=>{n.c(t)||(_.delete(n),n.f())}),_.size!==0&&T(F)}function bt(t){let n;return _.size===0&&T(F),{promise:new Promise(e=>{_.add(n={c:t,f:e})}),abort(){_.delete(n)}}}let v=!1;function W(){v=!0}function U(){v=!1}function V(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&o.push(f)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const l=n[o].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:V(1,r,x=>n[e[x]].claim_order,l))-1;i[o]=e[f]+1;const a=f+1;e[a]=o,r=Math.max(a,r)}const s=[],c=[];let u=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(s.push(n[o-1]);u>=o;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);s.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<s.length&&c[o].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(c[o],f)}}function Y(t,n){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function wt(t,n,e){v&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Z(t){t.parentNode.removeChild(t)}function $t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function tt(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function Et(){return j(" ")}function vt(){return j("")}function Nt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function At(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,n,e,i,r=!1){et(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const o=e(u);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const o=e(u);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function it(t,n,e,i){return H(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||s.push(u.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function St(t,n,e){return it(t,n,e,tt)}function rt(t,n){return H(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function jt(t){return rt(t," ")}function kt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Ct(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n,e){t.classList[e?"add":"remove"](n)}let p;function m(t){p=t}function k(){if(!p)throw new Error("Function called outside component initialization");return p}function qt(t){k().$$.on_mount.push(t)}function Lt(t){k().$$.after_update.push(t)}function Pt(t){k().$$.on_destroy.push(t)}const h=[],L=[],$=[],P=[],I=Promise.resolve();let A=!1;function G(){A||(A=!0,I.then(J))}function zt(){return G(),I}function S(t){$.push(t)}const N=new Set;let w=0;function J(){const t=p;do{for(;w<h.length;){const n=h[w];w++,m(n),ct(n.$$)}for(m(null),h.length=0,w=0;L.length;)L.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];N.has(e)||(N.add(e),e())}$.length=0}while(h.length);for(;P.length;)P.pop()();A=!1,N.clear(),m(t)}function ct(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const E=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Dt(){d.r||g(d.c),d=d.p}function ot(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Tt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function lt(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:c,after_update:u}=t.$$;r&&r.m(n,e),i||S(()=>{const o=s.map(z).filter(B);c?c.push(...o):g(o),t.$$.on_mount=[]}),u.forEach(S)}function ut(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(h.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,r,s,c,u=[-1]){const o=p;m(t);const l=t.$$={fragment:null,ctx:null,props:s,update:y,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:n.target||o.$$.root};c&&c(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,x,...C)=>{const M=C.length?C[0]:x;return l.ctx&&r(l.ctx[a],l.ctx[a]=M)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](M),f&&st(t,a)),x}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){W();const a=nt(n.target);l.fragment&&l.fragment.l(a),a.forEach(Z)}else l.fragment&&l.fragment.c();n.intro&&ot(t.$$.fragment),lt(t,n.target,n.anchor,n.customElement),U(),J()}m(o)}class It{$destroy(){ut(this,1),this.$destroy=y}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{y as A,_t as B,mt as C,pt as D,ht as E,Y as F,dt as G,ft as H,yt as I,Nt as J,xt as K,bt as L,gt as M,B as N,g as O,Pt as P,$t as Q,Mt as R,It as S,Et as a,wt as b,jt as c,Dt as d,vt as e,ot as f,Bt as g,Z as h,Ht as i,Lt as j,tt as k,St as l,nt as m,At as n,qt as o,Ct as p,j as q,rt as r,at as s,Ot as t,kt as u,Tt as v,Ft as w,lt as x,ut as y,zt as z};
