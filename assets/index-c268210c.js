(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function m(){}function qt(t,e){for(const n in e)t[n]=e[n];return t}function bt(t){return t()}function ut(){return Object.create(null)}function $(t){t.forEach(bt)}function et(t){return typeof t=="function"}function V(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Vt(t){return Object.keys(t).length===0}function At(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function J(t,e,n){t.$$.on_destroy.push(At(e,n))}function Kt(t,e,n,r){if(t){const o=$t(t,e,n,r);return t[0](o)}}function $t(t,e,n,r){return t[1]&&r?qt(n.ctx.slice(),t[1](r(e))):n.ctx}function Xt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const c=[],i=Math.max(e.dirty.length,o.length);for(let s=0;s<i;s+=1)c[s]=e.dirty[s]|o[s];return c}return e.dirty|o}return e.dirty}function Zt(t,e,n,r,o,c){if(o){const i=$t(e,n,r,c);t.p(i,o)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function P(t,e,n){return t.set(n),e}function I(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function Ct(){return z(" ")}function E(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function H(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Jt(t){return Array.from(t.childNodes)}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function lt(t,e,n){t.classList[n?"add":"remove"](e)}let D;function w(t){D=t}function Yt(){if(!D)throw new Error("Function called outside component initialization");return D}function Wt(t){Yt().$$.on_mount.push(t)}const N=[],at=[],O=[],ft=[],te=Promise.resolve();let Q=!1;function ee(){Q||(Q=!0,te.then(Ft))}function Y(t){O.push(t)}const K=new Set;let C=0;function Ft(){if(C!==0)return;const t=D;do{try{for(;C<N.length;){const e=N[C];C++,w(e),ne(e.$$)}}catch(e){throw N.length=0,C=0,e}for(w(null),N.length=0,C=0;at.length;)at.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];K.has(n)||(K.add(n),n())}O.length=0}while(N.length);for(;ft.length;)ft.pop()();Q=!1,K.clear(),w(t)}function ne(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}const L=new Set;let v;function re(){v={r:0,c:[],p:v}}function oe(){v.r||$(v.c),v=v.p}function b(t,e){t&&t.i&&(L.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(L.has(t))return;L.add(t),v.c.push(()=>{L.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Nt(t){t&&t.c()}function nt(t,e,n,r){const{fragment:o,after_update:c}=t.$$;o&&o.m(e,n),r||Y(()=>{const i=t.$$.on_mount.map(bt).filter(et);t.$$.on_destroy?t.$$.on_destroy.push(...i):$(i),t.$$.on_mount=[]}),c.forEach(Y)}function rt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function se(t,e){t.$$.dirty[0]===-1&&(N.push(t),ee(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(t,e,n,r,o,c,i,s=[-1]){const a=D;w(t);const u=t.$$={fragment:null,ctx:[],props:c,update:m,not_equal:o,bound:ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ut(),dirty:s,skip_bound:!1,root:e.target||a.$$.root};i&&i(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(l,d,...p)=>{const g=p.length?p[0]:d;return u.ctx&&o(u.ctx[l],u.ctx[l]=g)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](g),f&&se(t,l)),d}):[],u.update(),f=!0,$(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const l=Jt(e.target);u.fragment&&u.fragment.l(l),l.forEach(y)}else u.fragment&&u.fragment.c();e.intro&&b(t.$$.fragment),nt(t,e.target,e.anchor,e.customElement),Ft()}w(a)}class st{$destroy(){rt(this,1),this.$destroy=m}$on(e,n){if(!et(n))return m;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const F=[];function ce(t,e){return{subscribe:ct(t,e).subscribe}}function ct(t,e=m){let n;const r=new Set;function o(s){if(V(t,s)&&(t=s,n)){const a=!F.length;for(const u of r)u[1](),F.push(u,t);if(a){for(let u=0;u<F.length;u+=2)F[u][0](F[u+1]);F.length=0}}}function c(s){o(s(t))}function i(s,a=m){const u=[s,a];return r.add(u),r.size===1&&(n=e(o)||m),s(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:o,update:c,subscribe:i}}function ie(t,e,n){const r=!Array.isArray(t),o=r?[t]:t,c=e.length<2;return ce(n,i=>{let s=!1;const a=[];let u=0,f=m;const l=()=>{if(u)return;f();const p=e(r?a[0]:a,i);c?i(p):f=et(p)?p:m},d=o.map((p,g)=>At(p,Rt=>{a[g]=Rt,u&=~(1<<g),s&&l()},()=>{u|=1<<g}));return s=!0,l(),function(){$(d),f()}})}var R=(t,e)=>Array(Math.abs(e)+1).join(t);function Tt(t){return t!==null&&typeof t=="object"&&typeof t.name=="string"}function Mt(t){return t!==null&&typeof t=="object"&&typeof t.step=="number"&&typeof t.alt=="number"}var kt=[0,2,4,-1,1,3,5],wt=kt.map(t=>Math.floor(t*7/12));function Gt(t){const{step:e,alt:n,oct:r,dir:o=1}=t,c=kt[e]+7*n;if(r===void 0)return[o*c];const i=r-wt[e]-4*n;return[o*c,o*i]}var ue=[3,0,4,1,5,2,6];function le(t){const[e,n,r]=t,o=ue[ae(e)],c=Math.floor((e+1)/7);if(n===void 0)return{step:o,alt:c,dir:r};const i=n+4*c+wt[o];return{step:o,alt:c,oct:i,dir:r}}function ae(t){const e=(t+1)%7;return e<0?7+e:e}var St={empty:!0,name:"",pc:"",acc:""},dt=new Map,fe=t=>"CDEFGAB".charAt(t),de=t=>t<0?R("b",-t):R("#",t),pe=t=>t[0]==="b"?-t.length:t.length;function M(t){const e=JSON.stringify(t),n=dt.get(e);if(n)return n;const r=typeof t=="string"?ye(t):Mt(t)?M(ve(t)):Tt(t)?M(t.name):St;return dt.set(e,r),r}var me=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function he(t){const e=me.exec(t);return[e[1].toUpperCase(),e[2].replace(/x/g,"##"),e[3],e[4]]}function ge(t){return M(le(t))}var _e=(t,e)=>(t%e+e)%e,X=[0,2,4,5,7,9,11];function ye(t){const e=he(t);if(e[0]===""||e[3]!=="")return St;const n=e[0],r=e[1],o=e[2],c=(n.charCodeAt(0)+3)%7,i=pe(r),s=o.length?+o:void 0,a=Gt({step:c,alt:i,oct:s}),u=n+r+o,f=n+r,l=(X[c]+i+120)%12,d=s===void 0?_e(X[c]+i,12)-12*99:X[c]+i+12*(s+1),p=d>=0&&d<=127?d:null,g=s===void 0?null:Math.pow(2,(d-69)/12)*440;return{empty:!1,acc:r,alt:i,chroma:l,coord:a,freq:g,height:d,letter:n,midi:p,name:u,oct:s,pc:f,step:c}}function ve(t){const{step:e,alt:n,oct:r}=t,o=fe(e);if(!o)return"";const c=o+de(n);return r||r===0?c+r:c}var W={empty:!0,name:"",acc:""},be="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Ae="(AA|A|P|M|m|d|dd)([-+]?\\d+)",$e=new RegExp("^"+be+"|"+Ae+"$");function Ee(t){const e=$e.exec(`${t}`);return e===null?["",""]:e[1]?[e[1],e[2]]:[e[4],e[3]]}var pt={};function tt(t){return typeof t=="string"?pt[t]||(pt[t]=Ce(t)):Mt(t)?tt(Ne(t)):Tt(t)?tt(t.name):W}var mt=[0,2,4,5,7,9,11],Dt="PMMPPMM";function Ce(t){const e=Ee(t);if(e[0]==="")return W;const n=+e[0],r=e[1],o=(Math.abs(n)-1)%7,c=Dt[o];if(c==="M"&&r==="P")return W;const i=c==="M"?"majorable":"perfectable",s=""+n+r,a=n<0?-1:1,u=n===8||n===-8?n:a*(o+1),f=Fe(i,r),l=Math.floor((Math.abs(n)-1)/7),d=a*(mt[o]+f+12*l),p=(a*(mt[o]+f)%12+12)%12,g=Gt({step:o,alt:f,oct:l,dir:a});return{empty:!1,name:s,num:n,q:r,step:o,alt:f,dir:a,type:i,simple:u,semitones:d,chroma:p,coord:g,oct:l}}function Fe(t,e){return e==="M"&&t==="majorable"||e==="P"&&t==="perfectable"?0:e==="m"&&t==="majorable"?-1:/^A+$/.test(e)?e.length:/^d+$/.test(e)?-1*(t==="perfectable"?e.length:e.length+1):0}function Ne(t){const{step:e,alt:n,oct:r=0,dir:o}=t;if(!o)return"";const c=e+1+7*r,i=c===0?e+1:c,s=o<0?"-":"",a=Dt[e]==="M"?"majorable":"perfectable";return s+i+Te(a,n)}function Te(t,e){return e===0?t==="majorable"?"M":"P":e===-1&&t==="majorable"?"m":e>0?R("A",e):R("d",t==="perfectable"?e:e+1)}function xt(t,e){const n=M(t),r=Array.isArray(e)?e:tt(e).coord;if(n.empty||!r||r.length<2)return"";const o=n.coord,c=o.length===1?[o[0]+r[0]]:[o[0]+r[0],o[1]+r[1]];return ge(c).name}var Me=Math.log(2),ke=Math.log(440);function Pt(t){const e=12*(Math.log(t)-ke)/Me+69;return Math.round(e*100)/100}var we="C C# D D# E F F# G G# A A# B".split(" "),Ge="C Db D Eb E F Gb G Ab A Bb B".split(" ");function k(t,e={}){if(isNaN(t)||t===-1/0||t===1/0)return"";t=Math.round(t);const r=(e.sharps===!0?we:Ge)[t%12];if(e.pitchClass)return r;const o=Math.floor(t/12)-1;return r+o}var Se=["C","D","E","F","G","A","B"],Ot=t=>t.name,Lt=t=>t.map(M).filter(e=>!e.empty);function De(t){return t===void 0?Se.slice():Array.isArray(t)?Lt(t).map(Ot):[]}var h=M,xe=t=>h(t).name,Pe=t=>h(t).pc,Oe=t=>h(t).acc,Le=t=>h(t).oct,Be=t=>h(t).midi,je=t=>h(t).freq,Ie=t=>h(t).chroma;function ze(t){return k(t)}function He(t){return k(Pt(t))}function Re(t){return k(Pt(t),{sharps:!0})}function qe(t){return k(t,{sharps:!0})}var x=xt,Ve=xt,Bt=t=>e=>x(e,t),Ke=Bt,jt=t=>e=>x(t,e),Xe=jt;function It(t,e){return x(t,[e,0])}var Ze=It;function Ue(t,e){return x(t,[0,e])}var it=(t,e)=>t.height-e.height,Je=(t,e)=>e.height-t.height;function zt(t,e){return e=e||it,Lt(t).sort(e).map(Ot)}function Qe(t){return zt(t,it).filter((e,n,r)=>n===0||e!==r[n-1])}var Ye=t=>{const e=h(t);return e.empty?"":k(e.midi||e.chroma,{sharps:e.alt>0,pitchClass:e.midi===null})};function We(t,e){const n=h(t);if(n.empty)return"";const r=h(e||k(n.midi||n.chroma,{sharps:n.alt<0,pitchClass:!0}));if(r.empty||r.chroma!==n.chroma)return"";if(n.oct===void 0)return r.pc;const o=n.chroma-n.alt,c=r.chroma-r.alt,i=o>11||c<0?-1:o<0||c>11?1:0,s=n.oct+i;return r.pc+s}var q={names:De,get:h,name:xe,pitchClass:Pe,accidentals:Oe,octave:Le,midi:Be,ascending:it,descending:Je,sortedNames:zt,sortedUniqNames:Qe,fromMidi:ze,fromMidiSharps:qe,freq:je,fromFreq:He,fromFreqSharps:Re,chroma:Ie,transpose:x,tr:Ve,transposeBy:Bt,trBy:Ke,transposeFrom:jt,trFrom:Xe,transposeFifths:It,transposeOctaves:Ue,trFifths:Ze,simplify:Ye,enharmonic:We};const Z=ct([]),B=ct([]),tn=ie(B,t=>t.map(q.freq)),_=new AudioContext,en=20,ht=0,j=new Map;function Ht(t){S(t);try{const e=_.createOscillator();j.set(t,e),_.createGain().gain.setValueAtTime(0,_.currentTime),e.addEventListener("ended",S),e.type="sine",e.frequency.setValueAtTime(t,_.currentTime);const r=new PannerNode(_);r.refDistance=1,r.positionZ.setValueAtTime(_.currentTime,_.currentTime+ht),r.positionZ.linearRampToValueAtTime(en,_.currentTime+ht),e.connect(r).connect(_.destination),e.start(_.currentTime)}catch(e){console.info(e),S(t)}}function S(t){j.has(t)&&(j.get(t).stop(),j.delete(t))}function nn(t){let e,n,r,o;const c=t[7].default,i=Kt(c,t,t[6],null);return{c(){e=T("button"),i&&i.c(),H(e,"class","svelte-11vc9t6"),lt(e,"playing",t[1].includes(t[0]))},m(s,a){A(s,e,a),i&&i.m(e,null),n=!0,r||(o=[E(e,"mousedown",t[3]),E(e,"mouseup",t[2]),E(e,"keydown",t[4]),E(e,"keyup",t[5]),E(e,"touchstart",t[3],{passive:!0}),E(e,"touchend",t[2],{passive:!0})],r=!0)},p(s,[a]){i&&i.p&&(!n||a&64)&&Zt(i,c,s,s[6],n?Xt(c,s[6],a,null):Ut(s[6]),null),(!n||a&3)&&lt(e,"playing",s[1].includes(s[0]))},i(s){n||(b(i,s),n=!0)},o(s){G(i,s),n=!1},d(s){s&&y(e),i&&i.d(s),r=!1,$(o)}}}function rn(t,e,n){let r;J(t,tn,l=>n(1,r=l));let{$$slots:o={},$$scope:c}=e,{pulseHz:i}=e;function s(){S(i)}function a(){Ht(i)}function u(l){l.key==="Enter"&&a()}function f(l){l.key==="Enter"&&s()}return t.$$set=l=>{"pulseHz"in l&&n(0,i=l.pulseHz),"$$scope"in l&&n(6,c=l.$$scope)},[i,r,s,a,u,f,c,o]}class on extends st{constructor(e){super(),ot(this,e,rn,nn,V,{pulseHz:0})}}const sn={a:"C3",w:"C#3",s:"D3",e:"D#3",d:"E3",f:"F3",t:"F#3",g:"G3",y:"G#3",h:"A3",u:"A#3",j:"B3",k:"C4",o:"C#4",l:"D4",p:"D#4",";":"E4","[":"F4","'":"F#4","]":"G4","\\":"G#4",z:"C5",x:"C#5",c:"D5",v:"D#5",b:"E5",n:"F5",m:"F#5",",":"G5",".":"G#5","/":"A5",1:"C6",2:"C#6",3:"D6",4:"D#6",5:"E6",6:"F6",7:"F#6",8:"G6",9:"G#6",0:"A6","-":"A#6","=":"B6"},cn={a:"C2",w:"C#2",s:"D2",e:"D#2",d:"E2",f:"F2",t:"F#2",g:"G2",y:"G#2",h:"A2",u:"A#2",j:"B2",k:"C3",o:"C#3",l:"D3",p:"D#3",";":"E3","[":"F3","'":"F#3","]":"G3","\\":"G#3",z:"A3",x:"A#3",c:"B3",v:"C4",b:"C#4",n:"D4",m:"D#4",",":"E4",".":"F4","/":"F#4",1:"G4",2:"G#4",3:"A4",4:"A#4",5:"B4",6:"C5",7:"C#5",8:"D5",9:"D#5",0:"E5","-":"F5","=":"F#5"},U={max:sn,real:cn};function gt(t,e,n){const r=t.slice();return r[4]=e[n],r}function _t(t){let e=t[4]+"",n,r;return{c(){n=z(e),r=z(" ")},m(o,c){A(o,n,c),A(o,r,c)},p(o,c){c&1&&e!==(e=o[4]+"")&&Qt(n,e)},d(o){o&&y(n),o&&y(r)}}}function un(t){let e,n,r=t[0],o=[];for(let c=0;c<r.length;c+=1)o[c]=_t(gt(t,r,c));return{c(){e=T("div"),n=T("strong");for(let c=0;c<o.length;c+=1)o[c].c();H(n,"class","svelte-kf75hh"),H(e,"class","svelte-kf75hh")},m(c,i){A(c,e,i),I(e,n);for(let s=0;s<o.length;s+=1)o[s].m(n,null)},p(c,[i]){if(i&1){r=c[0];let s;for(s=0;s<r.length;s+=1){const a=gt(c,r,s);o[s]?o[s].p(a,i):(o[s]=_t(a),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:m,o:m,d(c){c&&y(e),Et(o,c)}}}function ln(t,e,n){let r,o;J(t,B,s=>n(0,r=s)),J(t,Z,s=>n(1,o=s));let c=s=>{const a=s.key;if(o.indexOf(a)===-1){const u=U.real[a];P(Z,o=[...o,a],o),P(B,r=[...r,u].filter(f=>!!f),r),Ht(q.freq(u))}},i=s=>{const a=U.real[s.key];P(Z,o=[...o.filter(()=>!s.key)],o),P(B,r=[...r.filter(()=>!U.real[s.key])].filter(u=>!!u),r),S(q.freq(a))};return Wt(async()=>{document.addEventListener("keydown",c),document.addEventListener("keyup",i)}),[r]}class an extends st{constructor(e){super(),ot(this,e,ln,un,V,{})}}function yt(t,e,n){const r=t.slice();return r[5]=e[n][0],r[6]=e[n][1],r}function fn(t){let e=t[5]+"",n;return{c(){n=z(e)},m(r,o){A(r,n,o)},p:m,d(r){r&&y(n)}}}function vt(t){let e,n,r,o;return n=new on({props:{pulseHz:t[6],$$slots:{default:[fn]},$$scope:{ctx:t}}}),{c(){e=T("li"),Nt(n.$$.fragment),r=Ct()},m(c,i){A(c,e,i),nt(n,e,null),I(e,r),o=!0},p(c,i){const s={};i&512&&(s.$$scope={dirty:i,ctx:c}),n.$set(s)},i(c){o||(b(n.$$.fragment,c),o=!0)},o(c){G(n.$$.fragment,c),o=!1},d(c){c&&y(e),rt(n)}}}function dn(t){let e,n,r,o,c;n=new an({});let i=t[0],s=[];for(let u=0;u<i.length;u+=1)s[u]=vt(yt(t,i,u));const a=u=>G(s[u],1,1,()=>{s[u]=null});return{c(){e=T("main"),Nt(n.$$.fragment),r=Ct(),o=T("ol");for(let u=0;u<s.length;u+=1)s[u].c();H(o,"class","svelte-17yb10d")},m(u,f){A(u,e,f),nt(n,e,null),I(e,r),I(e,o);for(let l=0;l<s.length;l+=1)s[l].m(o,null);c=!0},p(u,[f]){if(f&1){i=u[0];let l;for(l=0;l<i.length;l+=1){const d=yt(u,i,l);s[l]?(s[l].p(d,f),b(s[l],1)):(s[l]=vt(d),s[l].c(),b(s[l],1),s[l].m(o,null))}for(re(),l=i.length;l<s.length;l+=1)a(l);oe()}},i(u){if(!c){b(n.$$.fragment,u);for(let f=0;f<i.length;f+=1)b(s[f]);c=!0}},o(u){G(n.$$.fragment,u),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)G(s[f]);c=!1},d(u){u&&y(e),rt(n),Et(s,u)}}}function pn(t){let e=new AudioContext;e.createGain().connect(e.destination);let r=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];return[[0,1,2,3,4,5,6].map(i=>r.map(s=>{let a=`${s}${i}`;return[a,q.freq(a)]})).reduce((i,s)=>[...i,...s],[])]}class mn extends st{constructor(e){super(),ot(this,e,pn,dn,V,{})}}new mn({target:document.getElementById("app")});