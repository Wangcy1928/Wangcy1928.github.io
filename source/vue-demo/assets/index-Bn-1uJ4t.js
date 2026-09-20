const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PostView-CplwLhau.js","./PostView-D8J8yFs2.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jr(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const on={},Lt=[],it=()=>{},ys=()=>!1,tr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),er=n=>n.startsWith("onUpdate:"),mn=Object.assign,Zr=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},ll=Object.prototype.hasOwnProperty,J=(n,t)=>ll.call(n,t),F=Array.isArray,Et=n=>ke(n)==="[object Map]",Ht=n=>ke(n)==="[object Set]",yi=n=>ke(n)==="[object Date]",H=n=>typeof n=="function",un=n=>typeof n=="string",st=n=>typeof n=="symbol",Z=n=>n!==null&&typeof n=="object",xs=n=>(Z(n)||H(n))&&H(n.then)&&H(n.catch),ws=Object.prototype.toString,ke=n=>ws.call(n),cl=n=>ke(n).slice(8,-1),As=n=>ke(n)==="[object Object]",ni=n=>un(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pe=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},ul=/-\w/g,Nn=rr(n=>n.replace(ul,t=>t.slice(1).toUpperCase())),al=/\B([A-Z])/g,Ut=rr(n=>n.replace(al,"-$1").toLowerCase()),ir=rr(n=>n.charAt(0).toUpperCase()+n.slice(1)),yr=rr(n=>n?`on${ir(n)}`:""),rt=(n,t)=>!Object.is(n,t),Fe=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Es=(n,t,e,r=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:r,value:e})},sr=n=>{const t=parseFloat(n);return isNaN(t)?n:t},fl=n=>{const t=un(n)?Number(n):NaN;return isNaN(t)?n:t};let xi;const or=()=>xi||(xi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ti(n){if(F(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],i=un(r)?gl(r):ti(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(un(n)||Z(n))return n}const dl=/;(?![^(]*\))/g,pl=/:([^]+)/,hl=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function gl(n){const t={};return n.replace(hl,e=>e.startsWith("/*")?"":e).split(dl).forEach(e=>{if(e){const r=e.split(pl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Yt(n){let t="";if(un(n))t=n;else if(F(n))for(let e=0;e<n.length;e++){const r=Yt(n[e]);r&&(t+=r+" ")}else if(Z(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const ml="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vl=Jr(ml);function Ss(n){return!!n||n===""}function bl(n,t,e){if(n.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<n.length;i++)r=Ct(n[i],t[i],e);return r}function wi(n,t,e){if(n.size!==t.size)return!1;const r=Array.from(t),i=new Uint8Array(r.length);for(const s of n){let o=-1;for(let l=0;l<r.length;l++)if(!i[l]&&Ct(s,r[l],e)){o=l;break}if(o<0)return!1;i[o]=1}return!0}function _l(n,t,e){let r=Et(n),i=Et(t);if(r||i||(r=Ht(n),i=Ht(t),r||i))return r&&i?wi(n,t,e):!1;const s=Object.keys(n).length,o=Object.keys(t).length;if(s!==o)return!1;for(const l in n){const c=n.hasOwnProperty(l),f=t.hasOwnProperty(l);if(c&&!f||!c&&f||!Ct(n[l],t[l],e))return!1}return String(n)===String(t)}function Ai(n,t,e,r){e||(e=[new Map,new Map]);const[i,s]=e;if(i.has(n)||s.has(t))return i.get(n)===t&&s.get(t)===n;i.set(n,t),s.set(t,n);const o=r(n,t,e);return i.delete(n),s.delete(t),o}function Ct(n,t,e){if(n===t)return!0;let r=yi(n),i=yi(t);return r||i?r&&i?n.getTime()===t.getTime():!1:(r=st(n),i=st(t),r||i?n===t:(r=F(n),i=F(t),r||i?r&&i?Ai(n,t,e,bl):!1:(r=Z(n),i=Z(t),r||i?!r||!i?!1:Ai(n,t,e,_l):String(n)===String(t))))}function yl(n,t){return n.findIndex(e=>Ct(e,t))}const Cs=n=>!!(n&&n.__v_isRef===!0),At=n=>un(n)?n:n==null?"":F(n)||Z(n)&&(n.toString===ws||!H(n.toString))?Cs(n)?At(n.value):JSON.stringify(n,Ps,2):String(n),Ps=(n,t)=>Cs(t)?Ps(n,t.value):Et(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,i],s)=>(e[xr(r,s)+" =>"]=i,e),{})}:Ht(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>xr(e))}:st(t)?xr(t):Z(t)&&!F(t)&&!As(t)?String(t):t,xr=(n,t="")=>{var e;return st(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _n;class xl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&_n&&(_n.active?(this.parent=_n,this.index=(_n.scopes||(_n.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const r=this.scopes.slice();for(t=0,e=r.length;t<e;t++)r[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}const r=this.effects.slice();for(t=0,e=r.length;t<e;t++)r[t].resume()}}run(t){if(this._active){const e=_n;try{return _n=this,t()}finally{_n=e}}}on(){++this._on===1&&(this.prevScope=_n,_n=this)}off(){if(this._on>0&&--this._on===0){if(_n===this)_n=this.prevScope;else{let t=_n;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(this.effects.length=0,e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(e=0,r=i.length;e<r;e++)i[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function wl(){return _n}let cn;const wr=new WeakSet;class Ts{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_n&&(_n.active?_n.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wr.has(this)&&(wr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ns(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ei(this),js(this);const t=cn,e=Gn;cn=this,Gn=!0;try{return this.fn()}finally{Rs(this),cn=t,Gn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ii(t);this.deps=this.depsTail=void 0,Ei(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Dr(this)&&this.run()}get dirty(){return Dr(this)}}let ks=0,he,ge;function Ns(n,t=!1){if(n.flags|=8,t){n.next=ge,ge=n;return}n.next=he,he=n}function ei(){ks++}function ri(){if(--ks>0)return;if(ge){let t=ge;for(ge=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;he;){let t=he;for(he=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){n||(n=r)}t=e}}if(n)throw n}function js(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rs(n){let t,e=n.depsTail,r=e;for(;r;){const i=r.prevDep;r.version===-1?(r===e&&(e=i),ii(r),Al(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}n.deps=t,n.depsTail=e}function Dr(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Os(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Os(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ye)||(n.globalVersion=ye,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Dr(n))))return;n.flags|=2;const t=n.dep,e=cn,r=Gn;cn=n,Gn=!0;try{js(n);const i=n.fn(n._value);(t.version===0||rt(i,n._value))&&(n.flags|=128,n._value=i,t.version++)}catch(i){throw t.version++,i}finally{cn=e,Gn=r,Rs(n),n.flags&=-3}}function ii(n,t=!1){const{dep:e,prevSub:r,nextSub:i}=n;if(r&&(r.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=r,n.nextSub=void 0),e.subs===n&&(e.subs=r,!r&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)ii(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Al(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Gn=!0;const Ms=[];function gt(){Ms.push(Gn),Gn=!1}function mt(){const n=Ms.pop();Gn=n===void 0?!0:n}function Ei(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=cn;cn=void 0;try{t()}finally{cn=e}}}let ye=0;class El{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class si{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!cn||!Gn||cn===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==cn)e=this.activeLink=new El(cn,this),cn.deps?(e.prevDep=cn.depsTail,cn.depsTail.nextDep=e,cn.depsTail=e):cn.deps=cn.depsTail=e,Is(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const r=e.nextDep;r.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=r),e.prevDep=cn.depsTail,e.nextDep=void 0,cn.depsTail.nextDep=e,cn.depsTail=e,cn.deps===e&&(cn.deps=r)}return e}trigger(t){this.version++,ye++,this.notify(t)}notify(t){ei();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ri()}}}function Is(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Is(r)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Lr=new WeakMap,Bt=Symbol(""),Fr=Symbol(""),xe=Symbol("");function xn(n,t,e){if(Gn&&cn){let r=Lr.get(n);r||Lr.set(n,r=new Map);let i=r.get(e);i||(r.set(e,i=new si),i.map=r,i.key=e),i.track()}}function pt(n,t,e,r,i,s){const o=Lr.get(n);if(!o){ye++;return}const l=c=>{c&&c.trigger()};if(ei(),t==="clear")o.forEach(l);else{const c=F(n),f=c&&ni(e);if(c&&e==="length"){const u=Number(r);o.forEach((d,g)=>{(g==="length"||g===xe||!st(g)&&g>=u)&&l(d)})}else switch((e!==void 0||o.has(void 0))&&l(o.get(e)),f&&l(o.get(xe)),t){case"add":c?f&&l(o.get("length")):(l(o.get(Bt)),Et(n)&&l(o.get(Fr)));break;case"delete":c||(l(o.get(Bt)),Et(n)&&l(o.get(Fr)));break;case"set":Et(n)&&l(o.get(Bt));break}}ri()}function Wt(n){const t=$(n);return t===n||(xn(t,"iterate",xe),Hn(n))?t:ot(n)?St(n)?t.map(e=>Pt(Kn(e))):t.map(Pt):t.map(Kn)}function lr(n){return xn(n=$(n),"iterate",xe),n}function tt(n,t){return ot(n)?Pt(St(n)?Kn(t):t):Kn(t)}const Sl={__proto__:null,[Symbol.iterator](){return Ar(this,Symbol.iterator,n=>tt(this,n))},concat(...n){return Wt(this).concat(...n.map(t=>F(t)?Wt(t):t))},entries(){return Ar(this,"entries",n=>(n[1]=tt(this,n[1]),n))},every(n,t){return ct(this,"every",n,t,void 0,arguments)},filter(n,t){return ct(this,"filter",n,t,e=>e.map(r=>tt(this,r)),arguments)},find(n,t){return ct(this,"find",n,t,e=>tt(this,e),arguments)},findIndex(n,t){return ct(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ct(this,"findLast",n,t,e=>tt(this,e),arguments)},findLastIndex(n,t){return ct(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ct(this,"forEach",n,t,void 0,arguments)},includes(...n){return Er(this,"includes",n)},indexOf(...n){return Er(this,"indexOf",n)},join(n){return Wt(this).join(n)},lastIndexOf(...n){return Er(this,"lastIndexOf",n)},map(n,t){return ct(this,"map",n,t,void 0,arguments)},pop(){return se(this,"pop")},push(...n){return se(this,"push",n)},reduce(n,...t){return Si(this,"reduce",n,t)},reduceRight(n,...t){return Si(this,"reduceRight",n,t)},shift(){return se(this,"shift")},some(n,t){return ct(this,"some",n,t,void 0,arguments)},splice(...n){return se(this,"splice",n)},toReversed(){return Wt(this).toReversed()},toSorted(n){return Wt(this).toSorted(n)},toSpliced(...n){return Wt(this).toSpliced(...n)},unshift(...n){return se(this,"unshift",n)},values(){return Ar(this,"values",n=>tt(this,n))}};function Ar(n,t,e){const r=lr(n),i=r[t]();return r!==n&&!Hn(n)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=e(s.value)),s}),i}const Cl=Array.prototype;function ct(n,t,e,r,i,s){const o=lr(n),l=o!==n&&!Hn(n),c=o[t];if(c!==Cl[t]){const d=c.apply(n,s);return l?Kn(d):d}let f=e;o!==n&&(l?f=function(d,g){return e.call(this,tt(n,d),g,n)}:e.length>2&&(f=function(d,g){return e.call(this,d,g,n)}));const u=c.call(o,f,r);return l&&i?i(u):u}function Si(n,t,e,r){const i=lr(n),s=i!==n&&!Hn(n);let o=e,l=!1;i!==n&&(s?(l=r.length===0,o=function(f,u,d){return l&&(l=!1,f=tt(n,f)),e.call(this,f,tt(n,u),d,n)}):e.length>3&&(o=function(f,u,d){return e.call(this,f,u,d,n)}));const c=i[t](o,...r);return l?tt(n,c):c}function Er(n,t,e){const r=$(n);xn(r,"iterate",xe);const i=r[t](...e);return(i===-1||i===!1)&&ci(e[0])?(e[0]=$(e[0]),r[t](...e)):i}function se(n,t,e=[]){gt(),ei();const r=$(n)[t].apply(n,e);return ri(),mt(),r}const Pl=Jr("__proto__,__v_isRef,__isVue"),Ds=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(st));function Tl(n){st(n)||(n=String(n));const t=$(this);return xn(t,"has",n),t.hasOwnProperty(n)}class Ls{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,r){if(e==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw")return r===(i?s?Fl:qs:s?Bs:Vs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=F(t);if(!i){let c;if(o&&(c=Sl[e]))return c;if(e==="hasOwnProperty")return Tl}const l=Reflect.get(t,e,En(t)?t:r);if((st(e)?Ds.has(e):Pl(e))||(i||xn(t,"get",e),s))return l;if(En(l)){const c=o&&ni(e)?l:l.value;return i&&Z(c)?Br(c):c}return Z(l)?i?Br(l):Ne(l):l}}class Fs extends Ls{constructor(t=!1){super(!1,t)}set(t,e,r,i){let s=t[e];const o=F(t)&&ni(e);if(!this._isShallow){const f=ot(s);if(!Hn(r)&&!ot(r)&&(s=$(s),r=$(r)),!o&&En(s)&&!En(r))return f||(s.value=r),!0}const l=o?Number(e)<t.length:J(t,e),c=Reflect.set(t,e,r,En(t)?t:i);return t===$(i)&&c&&(l?rt(r,s)&&pt(t,"set",e,r):pt(t,"add",e,r)),c}deleteProperty(t,e){const r=J(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&r&&pt(t,"delete",e,void 0),i}has(t,e){const r=Reflect.has(t,e);return(!st(e)||!Ds.has(e))&&xn(t,"has",e),r}ownKeys(t){return xn(t,"iterate",F(t)?"length":Bt),Reflect.ownKeys(t)}}class kl extends Ls{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Nl=new Fs,jl=new kl,Rl=new Fs(!0);const Vr=n=>n,Oe=n=>Reflect.getPrototypeOf(n);function Ol(n,t,e){return function(...r){const i=this.__v_raw,s=$(i),o=Et(s),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,f=i[n](...r),u=e?Vr:t?Pt:Kn;return!t&&xn(s,"iterate",c?Fr:Bt),mn(Object.create(f),{next(){const{value:d,done:g}=f.next();return g?{value:d,done:g}:{value:l?[u(d[0]),u(d[1])]:u(d),done:g}}})}}function Me(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Ml(n,t){const e={get(i){const s=this.__v_raw,o=$(s),l=$(i);n||(rt(i,l)&&xn(o,"get",i),xn(o,"get",l));const{has:c}=Oe(o),f=t?Vr:n?Pt:Kn;if(c.call(o,i))return f(s.get(i));if(c.call(o,l))return f(s.get(l));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!n&&xn($(i),"iterate",Bt),i.size},has(i){const s=this.__v_raw,o=$(s),l=$(i);return n||(rt(i,l)&&xn(o,"has",i),xn(o,"has",l)),i===l?s.has(i):s.has(i)||s.has(l)},forEach(i,s){const o=this,l=o.__v_raw,c=$(l),f=t?Vr:n?Pt:Kn;return!n&&xn(c,"iterate",Bt),l.forEach((u,d)=>i.call(s,f(u),f(d),o))}};return mn(e,n?{add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear")}:{add(i){const s=$(this),o=Oe(s),l=$(i),c=!t&&!Hn(i)&&!ot(i)?l:i;return o.has.call(s,c)||rt(i,c)&&o.has.call(s,i)||rt(l,c)&&o.has.call(s,l)||(s.add(c),pt(s,"add",c,c)),this},set(i,s){!t&&!Hn(s)&&!ot(s)&&(s=$(s));const o=$(this),{has:l,get:c}=Oe(o);let f=l.call(o,i);f||(i=$(i),f=l.call(o,i));const u=c.call(o,i);return o.set(i,s),f?rt(s,u)&&pt(o,"set",i,s):pt(o,"add",i,s),this},delete(i){const s=$(this),{has:o,get:l}=Oe(s);let c=o.call(s,i);c||(i=$(i),c=o.call(s,i)),l&&l.call(s,i);const f=s.delete(i);return c&&pt(s,"delete",i,void 0),f},clear(){const i=$(this),s=i.size!==0,o=i.clear();return s&&pt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ol(i,n,t)}),e}function oi(n,t){const e=Ml(n,t);return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(J(e,i)&&i in r?e:r,i,s)}const Il={get:oi(!1,!1)},Dl={get:oi(!1,!0)},Ll={get:oi(!0,!1)};const Vs=new WeakMap,Bs=new WeakMap,qs=new WeakMap,Fl=new WeakMap;function Vl(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ne(n){return ot(n)?n:li(n,!1,Nl,Il,Vs)}function Hs(n){return li(n,!1,Rl,Dl,Bs)}function Br(n){return li(n,!0,jl,Ll,qs)}function li(n,t,e,r,i){if(!Z(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=i.get(n);if(s)return s;const o=Vl(cl(n));if(o===0)return n;const l=new Proxy(n,o===2?r:e);return i.set(n,l),l}function St(n){return ot(n)?St(n.__v_raw):!!(n&&n.__v_isReactive)}function ot(n){return!!(n&&n.__v_isReadonly)}function Hn(n){return!!(n&&n.__v_isShallow)}function ci(n){return n?!!n.__v_raw:!1}function $(n){const t=n&&n.__v_raw;return t?$(t):n}function Bl(n){return!J(n,"__v_skip")&&Object.isExtensible(n)&&Es(n,"__v_skip",!0),n}const Kn=n=>Z(n)?Ne(n):n,Pt=n=>Z(n)?Br(n):n;function En(n){return n?n.__v_isRef===!0:!1}function Jt(n){return Ks(n,!1)}function ql(n){return Ks(n,!0)}function Ks(n,t){return En(n)?n:new Hl(n,t)}class Hl{constructor(t,e){this.dep=new si,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:$(t),this._value=e?t:Kn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,r=this.__v_isShallow||Hn(t)||ot(t);t=r?t:$(t),rt(t,e)&&(this._rawValue=t,this._value=r?t:Kn(t),this.dep.trigger())}}function Rn(n){return En(n)?n.value:n}const Kl={get:(n,t,e)=>t==="__v_raw"?n:Rn(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const i=n[t];return En(i)&&!En(e)?(i.value=e,!0):Reflect.set(n,t,e,r)}};function Us(n){return St(n)?n:new Proxy(n,Kl)}class Ul{constructor(t,e,r){this.fn=t,this.setter=e,this._value=void 0,this.dep=new si(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ye-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&cn!==this)return Ns(this,!0),!0}get value(){const t=this.dep.track();return Os(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function zl(n,t,e=!1){let r,i;return H(n)?r=n:(r=n.get,i=n.set),new Ul(r,i,e)}const Ie={},He=new WeakMap;let Mt;function Gl(n,t=!1,e=Mt){if(e){let r=He.get(e);r||He.set(e,r=[]),r.push(n)}}function Wl(n,t,e=on){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:l,call:c}=e,f=N=>i?N:Hn(N)||i===!1||i===0?ht(N,1):ht(N);let u,d,g,h,v=!1,b=!1;if(En(n)?(d=()=>n.value,v=Hn(n)):St(n)?(d=()=>f(n),v=!0):F(n)?(b=!0,v=n.some(N=>St(N)||Hn(N)),d=()=>n.map(N=>{if(En(N))return N.value;if(St(N))return f(N);if(H(N))return c?c(N,2):N()})):H(n)?t?d=c?()=>c(n,2):n:d=()=>{if(g){gt();try{g()}finally{mt()}}const N=Mt;Mt=u;try{return c?c(n,3,[h]):n(h)}finally{Mt=N}}:d=it,t&&i){const N=d,U=i===!0?1/0:i;d=()=>ht(N(),U)}const M=wl(),L=()=>{u.stop(),M&&M.active&&Zr(M.effects,u)};if(s&&t){const N=t;t=(...U)=>{const nn=N(...U);return L(),nn}}let T=b?new Array(n.length).fill(Ie):Ie;const O=N=>{if(!(!(u.flags&1)||!u.dirty&&!N))if(t){const U=u.run();if(N||i||v||(b?U.some((nn,tn)=>rt(nn,T[tn])):rt(U,T))){g&&g();const nn=Mt;Mt=u;try{const tn=[U,T===Ie?void 0:b&&T[0]===Ie?[]:T,h];T=U,c?c(t,3,tn):t(...tn)}finally{Mt=nn}}}else u.run()};return l&&l(O),u=new Ts(d),u.scheduler=o?()=>o(O,!1):O,h=N=>Gl(N,!1,u),g=u.onStop=()=>{const N=He.get(u);if(N){if(c)c(N,4);else for(const U of N)U();He.delete(u)}},t?r?O(!0):T=u.run():o?o(O.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function ht(n,t=1/0,e){if(t<=0||!Z(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,En(n))ht(n.value,t,e);else if(F(n))for(let r=0;r<n.length;r++)ht(n[r],t,e);else if(Ht(n)||Et(n))n.forEach(r=>{ht(r,t,e)});else if(As(n)){for(const r in n)ht(n[r],t,e);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&ht(n[r],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function je(n,t,e,r){try{return r?n(...r):n()}catch(i){cr(i,t,e)}}function Un(n,t,e,r){if(H(n)){const i=je(n,t,e,r);return i&&xs(i)&&i.catch(s=>{cr(s,t,e)}),i}if(F(n)){const i=[];for(let s=0;s<n.length;s++)i.push(Un(n[s],t,e,r));return i}}function cr(n,t,e,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||on;if(t){let l=t.parent;const c=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${e}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,c,f)===!1)return}l=l.parent}if(s){gt(),je(s,null,10,[n,c,f]),mt();return}}$l(n,e,i,r,o)}function $l(n,t,e,r=!0,i=!1){if(i)throw n;console.error(n)}const Tn=[];let nt=-1;const Zt=[];let xt=null,Xt=0;const zs=Promise.resolve();let Ke=null;function ur(n){const t=Ke||zs;return n?t.then(this?n.bind(this):n):t}function Xl(n){let t=nt+1,e=Tn.length;for(;t<e;){const r=t+e>>>1,i=Tn[r],s=we(i);s<n||s===n&&i.flags&2?t=r+1:e=r}return t}function ui(n){if(!(n.flags&1)){const t=we(n),e=Tn[Tn.length-1];!e||!(n.flags&2)&&t>=we(e)?Tn.push(n):Tn.splice(Xl(t),0,n),n.flags|=1,Gs()}}function Gs(){Ke||(Ke=zs.then($s))}function Ql(n){if(!F(n))xt&&n.id===-1?xt.splice(Xt+1,0,n):n.flags&1||(Zt.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Zt.push(n[t]);Gs()}function Ci(n,t,e=nt+1){for(;e<Tn.length;e++){const r=Tn[e];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Tn.splice(e,1),e--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ws(n){if(Zt.length){const t=[...new Set(Zt)].sort((e,r)=>we(e)-we(r));if(Zt.length=0,xt){for(let e=0;e<t.length;e++)xt.push(t[e]);return}for(xt=t,Xt=0;Xt<xt.length;Xt++){const e=xt[Xt];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}xt=null,Xt=0}}const we=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $s(n){try{for(nt=0;nt<Tn.length;nt++){const t=Tn[nt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),je(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;nt<Tn.length;nt++){const t=Tn[nt];t&&(t.flags&=-2)}nt=-1,Tn.length=0,Ws(),Ke=null,(Tn.length||Zt.length)&&$s()}}let Ln=null,Xs=null;function Ue(n){const t=Ln;return Ln=n,Xs=n&&n.type.__scopeId||null,t}function Kt(n,t=Ln,e){if(!t||n._n)return n;const r=(...i)=>{r._d&&$e(-1);const s=Ue(t),o=qt.length;let l;try{l=n(...i)}finally{for(let c=qt.length;c>o;c--)jo();Ue(s),r._d&&$e(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Qs(n,t){if(Ln===null)return n;const e=vr(Ln),r=n.dirs||(n.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,l,c=on]=t[i];s&&(H(s)&&(s={mounted:s,updated:s}),s.deep&&ht(o),r.push({dir:s,instance:e,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Nt(n,t,e,r){const i=n.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let c=l.dir[r];c&&(gt(),Un(c,e,8,[n.el,l,n,t]),mt())}}function Ve(n,t){if(wn){let e=wn.provides;const r=wn.parent&&wn.parent.provides;r===e&&(e=wn.provides=Object.create(r)),e[n]=t}}function Wn(n,t,e=!1){const r=Io();if(r||te){let i=te?te._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return e&&H(t)?t.call(r&&r.proxy):t}}const Yl=Symbol.for("v-scx"),Jl=()=>Wn(Yl);function ne(n,t,e){return Ys(n,t,e)}function Ys(n,t,e=on){const{immediate:r,deep:i,flush:s,once:o}=e,l=mn({},e),c=t&&r||!t&&s!=="post";let f;if(Ce){if(s==="sync"){const h=Jl();f=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=it,h.resume=it,h.pause=it,h}}const u=wn;l.call=(h,v,b)=>Un(h,u,v,b);let d=!1;s==="post"?l.scheduler=h=>{jn(h,u&&u.suspense)}:s!=="sync"&&(d=!0,l.scheduler=(h,v)=>{v?h():ui(h)}),l.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const g=Wl(n,t,l);return Ce&&(f?f.push(g):c&&g()),g}function Zl(n,t,e){const r=this.proxy,i=un(n)?n.includes(".")?Js(r,n):()=>r[n]:n.bind(r,r);let s;H(t)?s=t:(s=t.handler,e=t);const o=Re(this),l=Ys(i,s.bind(r),e);return o(),l}function Js(n,t){const e=t.split(".");return()=>{let r=n;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}const nc=Symbol("_vte"),ar=n=>n.__isTeleport,qn=Symbol("_leaveCb"),oe=Symbol("_enterCb");function tc(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pr(()=>{n.isMounted=!0}),hr(()=>{n.isUnmounting=!0}),n}const Bn=[Function,Array],Zs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bn,onEnter:Bn,onAfterEnter:Bn,onEnterCancelled:Bn,onBeforeLeave:Bn,onLeave:Bn,onAfterLeave:Bn,onLeaveCancelled:Bn,onBeforeAppear:Bn,onAppear:Bn,onAfterAppear:Bn,onAppearCancelled:Bn},no=n=>{const t=n.subTree;return t.component?no(t.component):t},ec={name:"BaseTransition",props:Zs,setup(n,{slots:t}){const e=Io(),r=tc();return()=>{const i=t.default&&ro(t.default(),!0),s=i&&i.length?to(i):e.subTree?Gr():void 0;if(!s)return;const o=$(n),{mode:l}=o;if(r.isLeaving)return Sr(s);const c=ze(s);if(!c)return Sr(s);let f=qr(c,o,r,e,d=>f=d);c.type!==kn&&Ae(c,f);let u=e.subTree&&ze(e.subTree);if(u&&u.type!==kn&&!It(u,c)&&no(e).type!==kn){let d=qr(u,o,r,e);if(Ae(u,d),l==="out-in"&&c.type!==kn)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,e.job.flags&8||e.update(),delete d.afterLeave,u=void 0},Sr(s);l==="in-out"&&c.type!==kn?d.delayLeave=(g,h,v)=>{const b=eo(r,u);b[String(u.key)]=u,g[qn]=()=>{h(),g[qn]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{v(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function to(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==kn){t=e;break}}return t}const rc=ec;function eo(n,t){const{leavingVNodes:e}=n;let r=e.get(t.type);return r||(r=Object.create(null),e.set(t.type,r)),r}function qr(n,t,e,r,i){const{appear:s,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:f,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:g,onLeave:h,onAfterLeave:v,onLeaveCancelled:b,onBeforeAppear:M,onAppear:L,onAfterAppear:T,onAppearCancelled:O}=t,N=String(n.key),U=eo(e,n),nn=(K,W)=>{K&&Un(K,r,9,W)},tn=(K,W)=>{const ln=W[1];nn(K,W),F(K)?K.every(j=>j.length<=1)&&ln():K.length<=1&&ln()},yn={mode:o,persisted:l,beforeEnter(K){let W=c;if(!e.isMounted)if(s)W=M||c;else return;K[qn]&&K[qn](!0);const ln=U[N];ln&&It(n,ln)&&ln.el[qn]&&ln.el[qn](),nn(W,[K])},enter(K){if(U[N]===n)return;let W=f,ln=u,j=d;if(!e.isMounted)if(s)W=L||f,ln=T||u,j=O||d;else return;let X=!1;K[oe]=Mn=>{X||(X=!0,Mn?nn(j,[K]):nn(ln,[K]),yn.delayedLeave&&yn.delayedLeave(),K[oe]=void 0)};const vn=K[oe].bind(null,!1);W?tn(W,[K,vn]):vn()},leave(K,W){const ln=String(n.key);if(K[oe]&&K[oe](!0),e.isUnmounting)return W();nn(g,[K]);let j=!1;K[qn]=vn=>{j||(j=!0,W(),vn?nn(b,[K]):nn(v,[K]),K[qn]=void 0,U[ln]===n&&delete U[ln])};const X=K[qn].bind(null,!1);U[ln]=n,h?tn(h,[K,X]):X()},clone(K){const W=qr(K,t,e,r,i);return i&&i(W),W}};return yn}function Sr(n){if(fr(n))return n=Tt(n),n.children=null,n}function ze(n){if(!fr(n))return ar(n.type)&&n.children?to(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&H(e.default))return e.default()}}function Ae(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Ae(ar(e.type)&&ze(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function ro(n,t=!1,e){let r=[],i=0;for(let s=0;s<n.length;s++){let o=n[s];const l=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===Dn?(o.patchFlag&128&&i++,r=r.concat(ro(o.children,t,l))):(t||o.type!==kn)&&r.push(l!=null?Tt(o,{key:l}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function io(n,t){return H(n)?mn({name:n.name},t,{setup:n}):n}function so(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Pi(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Ge=new WeakMap;function me(n,t,e,r,i=!1){if(F(n)){n.forEach((b,M)=>me(b,t&&(F(t)?t[M]:t),e,r,i));return}if(ve(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&me(n,t,e,r.component.subTree);return}const s=r.shapeFlag&4?vr(r.component):r.el,o=i?null:s,{i:l,r:c}=n,f=t&&t.r,u=l.refs===on?l.refs={}:l.refs,d=l.setupState,g=$(d),h=d===on?ys:b=>Pi(u,b)?!1:J(g,b),v=(b,M)=>!(M&&Pi(u,M));if(f!=null&&f!==c){if(Ti(t),un(f))u[f]=null,h(f)&&(d[f]=null);else if(En(f)){const b=t;v(f,b.k)&&(f.value=null),b.k&&(u[b.k]=null)}}if(H(c))je(c,l,12,[o,u]);else{const b=un(c),M=En(c);if(b||M){const L=()=>{if(n.f){const T=b?h(c)?d[c]:u[c]:v()||!n.k?c.value:u[n.k];if(i)F(T)&&Zr(T,s);else if(F(T))T.includes(s)||T.push(s);else if(b)u[c]=[s],h(c)&&(d[c]=u[c]);else{const O=[s];v(c,n.k)&&(c.value=O),n.k&&(u[n.k]=O)}}else b?(u[c]=o,h(c)&&(d[c]=o)):M&&(v(c,n.k)&&(c.value=o),n.k&&(u[n.k]=o))};if(o){const T=()=>{L(),Ge.delete(n)};T.id=-1,Ge.set(n,T),jn(T,e)}else Ti(n),L()}}}function Ti(n){const t=Ge.get(n);t&&(t.flags|=8,Ge.delete(n))}or().requestIdleCallback;or().cancelIdleCallback;const ve=n=>!!n.type.__asyncLoader,fr=n=>n.type.__isKeepAlive;function ic(n,t){oo(n,"a",t)}function sc(n,t){oo(n,"da",t)}function oo(n,t,e=wn){const r=n.__wdc||(n.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(dr(t,r,e),e){let i=e.parent;for(;i&&i.parent;)fr(i.parent.vnode)&&oc(r,t,e,i),i=i.parent}}function oc(n,t,e,r){const i=dr(t,n,r,!0);lo(()=>{Zr(r[t],i)},e)}function dr(n,t,e=wn,r=!1){if(e){const i=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{gt();const l=Re(e),c=Un(t,e,n,o);return l(),mt(),c});return r?i.unshift(s):i.push(s),s}}const vt=n=>(t,e=wn)=>{(!Ce||n==="sp")&&dr(n,(...r)=>t(...r),e)},lc=vt("bm"),pr=vt("m"),cc=vt("bu"),uc=vt("u"),hr=vt("bum"),lo=vt("um"),ac=vt("sp"),fc=vt("rtg"),dc=vt("rtc");function pc(n,t=wn){dr("ec",n,t)}const co="components";function uo(n,t){return fo(co,n,!0,t)||n}const ao=Symbol.for("v-ndc");function hc(n){return un(n)?fo(co,n,!1)||n:n||ao}function fo(n,t,e=!0,r=!1){const i=Ln||wn;if(i){const s=i.type;{const l=Jc(s,!1);if(l&&(l===t||l===Nn(t)||l===ir(Nn(t))))return s}const o=ki(i[n]||s[n],t)||ki(i.appContext[n],t);return!o&&r?s:o}}function ki(n,t){return n&&(n[t]||n[Nn(t)]||n[ir(Nn(t))])}function po(n,t,e,r){let i;const s=e,o=F(n);if(o||un(n)){const l=o&&St(n);let c=!1,f=!1;l&&(c=!Hn(n),f=ot(n),n=lr(n)),i=new Array(n.length);for(let u=0,d=n.length;u<d;u++)i[u]=t(c?f?Pt(Kn(n[u])):Kn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){i=new Array(n);for(let l=0;l<n;l++)i[l]=t(l+1,l,void 0,s)}else if(Z(n))if(n[Symbol.iterator])i=Array.from(n,(l,c)=>t(l,c,void 0,s));else{const l=Object.keys(n);i=new Array(l.length);for(let c=0,f=l.length;c<f;c++){const u=l[c];i[c]=t(n[u],u,c,s)}}else i=[];return i}const Hr=n=>n?Do(n)?vr(n):Hr(n.parent):null,be=mn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Hr(n.parent),$root:n=>Hr(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>go(n),$forceUpdate:n=>n.f||(n.f=()=>{ui(n.update)}),$nextTick:n=>n.n||(n.n=ur.bind(n.proxy)),$watch:n=>Zl.bind(n)}),Cr=(n,t)=>n!==on&&!n.__isScriptSetup&&J(n,t),gc={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:c}=n;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return e[t];case 3:return s[t]}else{if(Cr(r,t))return o[t]=1,r[t];if(i!==on&&J(i,t))return o[t]=2,i[t];if(J(s,t))return o[t]=3,s[t];if(e!==on&&J(e,t))return o[t]=4,e[t];Kr&&(o[t]=0)}}const f=be[t];let u,d;if(f)return t==="$attrs"&&xn(n.attrs,"get",""),f(n);if((u=l.__cssModules)&&(u=u[t]))return u;if(e!==on&&J(e,t))return o[t]=4,e[t];if(d=c.config.globalProperties,J(d,t))return d[t]},set({_:n},t,e){const{data:r,setupState:i,ctx:s}=n;return Cr(i,t)?(i[t]=e,!0):r!==on&&J(r,t)?(r[t]=e,!0):J(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:i,props:s,type:o}},l){let c;return!!(e[l]||n!==on&&l[0]!=="$"&&J(n,l)||Cr(t,l)||J(s,l)||J(r,l)||J(be,l)||J(i.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:J(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ni(n){return F(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Kr=!0;function mc(n){const t=go(n),e=n.proxy,r=n.ctx;Kr=!1,t.beforeCreate&&ji(t.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:l,provide:c,inject:f,created:u,beforeMount:d,mounted:g,beforeUpdate:h,updated:v,activated:b,deactivated:M,beforeDestroy:L,beforeUnmount:T,destroyed:O,unmounted:N,render:U,renderTracked:nn,renderTriggered:tn,errorCaptured:yn,serverPrefetch:K,expose:W,inheritAttrs:ln,components:j,directives:X,filters:vn}=t;if(f&&vc(f,r,null),o)for(const en in o){const Q=o[en];H(Q)&&(r[en]=Q.bind(e))}if(i){const en=i.call(e,e);Z(en)&&(n.data=Ne(en))}if(Kr=!0,s)for(const en in s){const Q=s[en],lt=H(Q)?Q.bind(e,e):H(Q.get)?Q.get.bind(e,e):it,bt=!H(Q)&&H(Q.set)?Q.set.bind(e):it,Xn=An({get:lt,set:bt});Object.defineProperty(r,en,{enumerable:!0,configurable:!0,get:()=>Xn.value,set:Sn=>Xn.value=Sn})}if(l)for(const en in l)ho(l[en],r,e,en);if(c){const en=H(c)?c.call(e):c;Reflect.ownKeys(en).forEach(Q=>{Ve(Q,en[Q])})}u&&ji(u,n,"c");function dn(en,Q){F(Q)?Q.forEach(lt=>en(lt.bind(e))):Q&&en(Q.bind(e))}if(dn(lc,d),dn(pr,g),dn(cc,h),dn(uc,v),dn(ic,b),dn(sc,M),dn(pc,yn),dn(dc,nn),dn(fc,tn),dn(hr,T),dn(lo,N),dn(ac,K),F(W))if(W.length){const en=n.exposed||(n.exposed={});W.forEach(Q=>{Object.defineProperty(en,Q,{get:()=>e[Q],set:lt=>e[Q]=lt,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===it&&(n.render=U),ln!=null&&(n.inheritAttrs=ln),j&&(n.components=j),X&&(n.directives=X),K&&so(n)}function vc(n,t,e=it){F(n)&&(n=Ur(n));for(const r in n){const i=n[r];let s;Z(i)?"default"in i?s=Wn(i.from||r,i.default,!0):s=Wn(i.from||r):s=Wn(i),En(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function ji(n,t,e){Un(F(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function ho(n,t,e,r){let i=r.includes(".")?Js(e,r):()=>e[r];if(un(n)){const s=t[n];H(s)&&ne(i,s)}else if(H(n))ne(i,n.bind(e));else if(Z(n))if(F(n))n.forEach(s=>ho(s,t,e,r));else{const s=H(n.handler)?n.handler.bind(e):t[n.handler];H(s)&&ne(i,s,n)}}function go(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,l=s.get(t);let c;return l?c=l:!i.length&&!e&&!r?c=t:(c={},i.length&&i.forEach(f=>We(c,f,o,!0)),We(c,t,o)),Z(t)&&s.set(t,c),c}function We(n,t,e,r=!1){const{mixins:i,extends:s}=t;s&&We(n,s,e,!0),i&&i.forEach(o=>We(n,o,e,!0));for(const o in t)if(!(r&&o==="expose")){const l=bc[o]||e&&e[o];n[o]=l?l(n[o],t[o]):t[o]}return n}const bc={data:Ri,props:Oi,emits:Oi,methods:fe,computed:fe,beforeCreate:Cn,created:Cn,beforeMount:Cn,mounted:Cn,beforeUpdate:Cn,updated:Cn,beforeDestroy:Cn,beforeUnmount:Cn,destroyed:Cn,unmounted:Cn,activated:Cn,deactivated:Cn,errorCaptured:Cn,serverPrefetch:Cn,components:fe,directives:fe,watch:yc,provide:Ri,inject:_c};function Ri(n,t){return t?n?function(){return mn(H(n)?n.call(this,this):n,H(t)?t.call(this,this):t)}:t:n}function _c(n,t){return fe(Ur(n),Ur(t))}function Ur(n){if(F(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Cn(n,t){return n?[...new Set([].concat(n,t))]:t}function fe(n,t){return n?mn(Object.create(null),n,t):t}function Oi(n,t){return n?F(n)&&F(t)?[...new Set([...n,...t])]:mn(Object.create(null),Ni(n),Ni(t??{})):t}function yc(n,t){if(!n)return t;if(!t)return n;const e=mn(Object.create(null),n);for(const r in t)e[r]=Cn(n[r],t[r]);return e}function mo(){return{app:null,config:{isNativeTag:ys,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xc=0;function wc(n,t){return function(r,i=null){H(r)||(r=mn({},r)),i!=null&&!Z(i)&&(i=null);const s=mo(),o=new WeakSet,l=[];let c=!1;const f=s.app={_uid:xc++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:nu,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(f,...d)):H(u)&&(o.add(u),u(f,...d))),f},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),f},component(u,d){return d?(s.components[u]=d,f):s.components[u]},directive(u,d){return d?(s.directives[u]=d,f):s.directives[u]},mount(u,d,g){if(!c){const h=f._ceVNode||an(r,i);return h.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),n(h,u,g),c=!0,f._container=u,u.__vue_app__=f,vr(h.component)}},onUnmount(u){l.push(u)},unmount(){c&&(Un(l,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(u,d){return s.provides[u]=d,f},runWithContext(u){const d=te;te=f;try{return u()}finally{te=d}}};return f}}let te=null;const Ac=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Nn(t)}Modifiers`]||n[`${Ut(t)}Modifiers`];function Ec(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||on;let i=e;const s=t.startsWith("update:"),o=s&&Ac(r,t.slice(7));o&&(o.trim&&(i=e.map(u=>un(u)?u.trim():u)),o.number&&(i=i.map(sr)));let l,c=r[l=yr(t)]||r[l=yr(Nn(t))];!c&&s&&(c=r[l=yr(Ut(t))]),c&&Un(c,n,6,i);const f=r[l+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Un(f,n,6,i)}}const Sc=new WeakMap;function vo(n,t,e=!1){const r=e?Sc:t.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},l=!1;if(!H(n)){const c=f=>{const u=vo(f,t,!0);u&&(l=!0,mn(o,u))};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!l?(Z(n)&&r.set(n,null),null):(F(s)?s.forEach(c=>o[c]=null):mn(o,s),Z(n)&&r.set(n,o),o)}function gr(n,t){return!n||!tr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),J(n,t[0].toLowerCase()+t.slice(1))||J(n,Ut(t))||J(n,t))}function Mi(n){const{type:t,vnode:e,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:f,renderCache:u,props:d,data:g,setupState:h,ctx:v,inheritAttrs:b}=n,M=Ue(n);let L,T;try{if(e.shapeFlag&4){const N=i||r,U=N;L=et(f.call(U,N,u,d,h,g,v)),T=l}else{const N=t;L=et(N.length>1?N(d,{attrs:l,slots:o,emit:c}):N(d,null)),T=t.props?l:Cc(l)}}catch(N){qt.length=0,cr(N,n,1),L=an(kn)}let O=L;if(T&&b!==!1){const N=Object.keys(T),{shapeFlag:U}=O;N.length&&U&7&&(s&&N.some(er)&&(T=Pc(T,s)),O=Tt(O,T,!1,!0))}if(e.dirs&&(O=Tt(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(e.dirs):e.dirs),e.transition){const N=ar(O.type)&&ze(O)||O;Ae(N,e.transition)}return L=O,Ue(M),L}const Cc=n=>{let t;for(const e in n)(e==="class"||e==="style"||tr(e))&&((t||(t={}))[e]=n[e]);return t},Pc=(n,t)=>{const e={};for(const r in n)(!er(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function Tc(n,t,e){const{props:r,children:i,component:s}=n,{props:o,children:l,patchFlag:c}=t,f=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&c>=0){if(c&1024)return!0;if(c&16)return r?Ii(r,o,f):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(bo(o,r,g)&&!gr(f,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Ii(r,o,f):!0:!!o;return!1}function Ii(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(bo(t,n,s)&&!gr(e,s))return!0}return!1}function bo(n,t,e){const r=n[e],i=t[e];return e==="style"&&Z(r)&&Z(i)?!Ct(r,i):r!==i}function kc({vnode:n,parent:t,suspense:e},r){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.suspense.vnode.el=i.el=r,n=i),i===n)(n=t.vnode).el=r,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=r)}const _o={},yo=()=>Object.create(_o),xo=n=>Object.getPrototypeOf(n)===_o;function Nc(n,t,e,r=!1){const i={},s=yo();n.propsDefaults=Object.create(null),wo(n,t,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);e?n.props=r?i:Hs(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function jc(n,t,e,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,l=$(i),[c]=n.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(gr(n.emitsOptions,g))continue;const h=t[g];if(c)if(J(s,g))h!==s[g]&&(s[g]=h,f=!0);else{const v=Nn(g);i[v]=zr(c,l,v,h,n,!1)}else h!==s[g]&&(s[g]=h,f=!0)}}}else{wo(n,t,i,s)&&(f=!0);let u;for(const d in l)(!t||!J(t,d)&&((u=Ut(d))===d||!J(t,u)))&&(c?e&&(e[d]!==void 0||e[u]!==void 0)&&(i[d]=zr(c,l,d,void 0,n,!0)):delete i[d]);if(s!==l)for(const d in s)(!t||!J(t,d))&&(delete s[d],f=!0)}f&&pt(n.attrs,"set","")}function wo(n,t,e,r){const[i,s]=n.propsOptions;let o=!1,l;if(t)for(let c in t){if(pe(c))continue;const f=t[c];let u;i&&J(i,u=Nn(c))?!s||!s.includes(u)?e[u]=f:(l||(l={}))[u]=f:gr(n.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(s){const c=$(e),f=l||on;for(let u=0;u<s.length;u++){const d=s[u];e[d]=zr(i,c,d,f[d],n,!J(f,d))}}return o}function zr(n,t,e,r,i,s){const o=n[e];if(o!=null){const l=J(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:f}=i;if(e in f)r=f[e];else{const u=Re(i);r=f[e]=c.call(null,t),u()}}else r=c;i.ce&&i.ce._setProp(e,r)}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===Ut(e))&&(r=!0))}return r}const Rc=new WeakMap;function Ao(n,t,e=!1){const r=e?Rc:t.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},l=[];let c=!1;if(!H(n)){const u=d=>{c=!0;const[g,h]=Ao(d,t,!0);mn(o,g),h&&l.push(...h)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return Z(n)&&r.set(n,Lt),Lt;if(F(s))for(let u=0;u<s.length;u++){const d=Nn(s[u]);Di(d)&&(o[d]=on)}else if(s)for(const u in s){const d=Nn(u);if(Di(d)){const g=s[u],h=o[d]=F(g)||H(g)?{type:g}:mn({},g),v=h.type;let b=!1,M=!0;if(F(v))for(let L=0;L<v.length;++L){const T=v[L],O=H(T)&&T.name;if(O==="Boolean"){b=!0;break}else O==="String"&&(M=!1)}else b=H(v)&&v.name==="Boolean";h[0]=b,h[1]=M,(b||J(h,"default"))&&l.push(d)}}const f=[o,l];return Z(n)&&r.set(n,f),f}function Di(n){return n[0]!=="$"&&!pe(n)}const ai=n=>n==="_"||n==="_ctx"||n==="$stable",fi=n=>F(n)?n.map(et):[et(n)],Oc=(n,t,e)=>{if(t._n)return t;const r=Kt((...i)=>fi(t(...i)),e);return r._c=!1,r},Eo=(n,t,e)=>{const r=n._ctx;for(const i in n){if(ai(i))continue;const s=n[i];if(H(s))t[i]=Oc(i,s,r);else if(s!=null){const o=fi(s);t[i]=()=>o}}},So=(n,t)=>{const e=fi(t);n.slots.default=()=>e},Co=(n,t,e)=>{for(const r in t)(e||!ai(r))&&(n[r]=t[r])},Mc=(n,t,e)=>{const r=n.slots=yo();if(n.vnode.shapeFlag&32){const i=t._;i?(Co(r,t,e),e&&Es(r,"_",i,!0)):Eo(t,r)}else t&&So(n,t)},Ic=(n,t,e)=>{const{vnode:r,slots:i}=n;let s=!0,o=on;if(r.shapeFlag&32){const l=t._;l?e&&l===1?s=!1:Co(i,t,e):(s=!t.$stable,Eo(t,i)),o=t}else t&&(So(n,t),o={default:1});if(s)for(const l in i)!ai(l)&&o[l]==null&&delete i[l]},jn=Bc;function Dc(n){return Lc(n)}function Lc(n,t){const e=or();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:c,setText:f,setElementText:u,parentNode:d,nextSibling:g,setScopeId:h=it,insertStaticContent:v}=n,b=(a,p,m,y=null,w=null,_=null,C=void 0,S=null,E=!!p.dynamicChildren)=>{if(a===p)return;a&&!It(a,p)&&(y=x(a),Sn(a,w,_,!0),a=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null),p.dynamicChildren&&a&&a.dynamicChildren&&a.dynamicChildren.hasOnce&&(p.dynamicChildren===Lt&&(p.dynamicChildren=[]),p.dynamicChildren.hasOnce=!0);const{type:A,ref:V,shapeFlag:k}=p;switch(A){case mr:M(a,p,m,y);break;case kn:L(a,p,m,y);break;case Be:a==null&&T(p,m,y,C);break;case Dn:j(a,p,m,y,w,_,C,S,E);break;default:k&1?U(a,p,m,y,w,_,C,S,E):k&6?X(a,p,m,y,w,_,C,S,E):(k&64||k&128)&&A.process(a,p,m,y,w,_,C,S,E,I)}V!=null&&w?me(V,a&&a.ref,_,p||a,!p):V==null&&a&&a.ref!=null&&me(a.ref,null,_,a,!0)},M=(a,p,m,y)=>{if(a==null)r(p.el=l(p.children),m,y);else{const w=p.el=a.el;p.children!==a.children&&f(w,p.children)}},L=(a,p,m,y)=>{a==null?r(p.el=c(p.children||""),m,y):p.el=a.el},T=(a,p,m,y)=>{[a.el,a.anchor]=v(a.children,p,m,y,a.el,a.anchor)},O=({el:a,anchor:p},m,y)=>{let w;for(;a&&a!==p;)w=g(a),r(a,m,y),a=w;r(p,m,y)},N=({el:a,anchor:p})=>{let m;for(;a&&a!==p;)m=g(a),i(a),a=m;i(p)},U=(a,p,m,y,w,_,C,S,E)=>{if(p.type==="svg"?C="svg":p.type==="math"&&(C="mathml"),a==null)nn(p,m,y,w,_,C,S,E);else{const A=a.el&&a.el._isVueCE?a.el:null;try{A&&A._beginPatch(),K(a,p,w,_,C,S,E)}finally{A&&A._endPatch()}}},nn=(a,p,m,y,w,_,C,S)=>{let E,A;const{props:V,shapeFlag:k,transition:D,dirs:q}=a;if(E=a.el=o(a.type,_,V&&V.is,V),k&8?u(E,a.children):k&16&&yn(a.children,E,null,y,w,Pr(a,_),C,S),q&&Nt(a,null,y,"created"),tn(E,a,a.scopeId,C,y),V){for(const sn in V)sn!=="value"&&!pe(sn)&&s(E,sn,null,V[sn],_,y);"value"in V&&s(E,"value",null,V.value,_),(A=V.onVnodeBeforeMount)&&Zn(A,y,a)}q&&Nt(a,null,y,"beforeMount");const G=Fc(w,D);G&&D.beforeEnter(E),r(E,p,m),((A=V&&V.onVnodeMounted)||G||q)&&jn(()=>{try{A&&Zn(A,y,a),G&&D.enter(E),q&&Nt(a,null,y,"mounted")}finally{}},w)},tn=(a,p,m,y,w)=>{if(m&&h(a,m),y)for(let _=0;_<y.length;_++)h(a,y[_]);if(w){let _=w.subTree;if(p===_||No(_.type)&&(_.ssContent===p||_.ssFallback===p)){const C=w.vnode;tn(a,C,C.scopeId,C.slotScopeIds,w.parent)}}},yn=(a,p,m,y,w,_,C,S,E=0)=>{for(let A=E;A<a.length;A++){const V=a[A]=S?dt(a[A]):et(a[A]);b(null,V,p,m,y,w,_,C,S)}},K=(a,p,m,y,w,_,C)=>{const S=p.el=a.el;let{patchFlag:E,dynamicChildren:A,dirs:V}=p;E|=a.patchFlag&16;const k=a.props||on,D=p.props||on;let q;if(m&&jt(m,!1),(q=D.onVnodeBeforeUpdate)&&Zn(q,m,p,a),V&&Nt(p,a,m,"beforeUpdate"),m&&jt(m,!0),A&&(!a.dynamicChildren||a.dynamicChildren.length!==A.length)&&(E=0,C=!1,A=null),(k.innerHTML&&D.innerHTML==null||k.textContent&&D.textContent==null)&&u(S,""),A?W(a.dynamicChildren,A,S,m,y,Pr(p,w),_):C||Q(a,p,S,null,m,y,Pr(p,w),_,!1),E>0){if(E&16)ln(S,k,D,m,w);else if(E&2&&k.class!==D.class&&s(S,"class",null,D.class,w),E&4&&s(S,"style",k.style,D.style,w),E&8){const G=p.dynamicProps;for(let sn=0;sn<G.length;sn++){const rn=G[sn],hn=k[rn],bn=D[rn];(bn!==hn||rn==="value")&&s(S,rn,hn,bn,w,m)}}E&1&&a.children!==p.children&&u(S,p.children)}else!C&&A==null&&ln(S,k,D,m,w);((q=D.onVnodeUpdated)||V)&&jn(()=>{q&&Zn(q,m,p,a),V&&Nt(p,a,m,"updated")},y)},W=(a,p,m,y,w,_,C)=>{for(let S=0;S<p.length;S++){const E=a[S],A=p[S],V=E.el&&(E.type===Dn||!It(E,A)||E.shapeFlag&198)?d(E.el):m;b(E,A,V,null,y,w,_,C,!0)}},ln=(a,p,m,y,w)=>{if(p!==m){if(p!==on)for(const _ in p)!pe(_)&&!(_ in m)&&s(a,_,p[_],null,w,y);for(const _ in m){if(pe(_))continue;const C=m[_],S=p[_];C!==S&&_!=="value"&&s(a,_,S,C,w,y)}"value"in m&&s(a,"value",p.value,m.value,w)}},j=(a,p,m,y,w,_,C,S,E)=>{const A=p.el=a?a.el:l(""),V=p.anchor=a?a.anchor:l("");let{patchFlag:k,dynamicChildren:D,slotScopeIds:q}=p;q&&(S=S?S.concat(q):q),a==null?(r(A,m,y),r(V,m,y),yn(p.children||[],m,V,w,_,C,S,E)):k>0&&k&64&&D&&a.dynamicChildren&&a.dynamicChildren.length===D.length?(W(a.dynamicChildren,D,m,w,_,C,S),(p.key!=null||w&&p===w.subTree)&&Po(a,p,!0)):Q(a,p,m,V,w,_,C,S,E)},X=(a,p,m,y,w,_,C,S,E)=>{p.slotScopeIds=S,a==null?p.shapeFlag&512?w.ctx.activate(p,m,y,C,E):vn(p,m,y,w,_,C,E):Mn(a,p,E)},vn=(a,p,m,y,w,_,C)=>{const S=a.component=Wc(a,y,w);if(fr(a)&&(S.ctx.renderer=I),$c(S,!1,C),S.asyncDep){if(w&&w.registerDep(S,dn,C),!a.el){const E=S.subTree=an(kn);L(null,E,p,m),a.placeholder=E.el}}else dn(S,a,p,m,w,_,C)},Mn=(a,p,m)=>{const y=p.component=a.component;if(Tc(a,p,m))if(y.asyncDep&&!y.asyncResolved){p.el=a.el,en(y,p,m);return}else y.next=p,y.update();else p.el=a.el,y.vnode=p},dn=(a,p,m,y,w,_,C)=>{const S=()=>{if(a.isMounted){let{next:k,bu:D,u:q,parent:G,vnode:sn}=a;{const Yn=To(a);if(Yn){k&&(k.el=sn.el,en(a,k,C)),Yn.asyncDep.then(()=>{jn(()=>{a.isUnmounted||A()},w)});return}}let rn=k,hn;jt(a,!1),k?(k.el=sn.el,en(a,k,C)):k=sn,D&&Fe(D),(hn=k.props&&k.props.onVnodeBeforeUpdate)&&Zn(hn,G,k,sn),jt(a,!0);const bn=Mi(a),Qn=a.subTree;a.subTree=bn,b(Qn,bn,d(Qn.el),x(Qn),a,w,_),k.el=bn.el,rn===null&&kc(a,bn.el),q&&jn(q,w),(hn=k.props&&k.props.onVnodeUpdated)&&jn(()=>Zn(hn,G,k,sn),w)}else{let k;const{el:D,props:q}=p,{bm:G,m:sn,parent:rn,root:hn,type:bn}=a,Qn=ve(p);jt(a,!1),G&&Fe(G),!Qn&&(k=q&&q.onVnodeBeforeMount)&&Zn(k,rn,p),jt(a,!0);{hn.ce&&hn.ce._hasShadowRoot()&&hn.ce._injectChildStyle(bn,a.parent?a.parent.type:void 0);const Yn=a.subTree=Mi(a);b(null,Yn,m,y,a,w,_),p.el=Yn.el}if(sn&&jn(sn,w),!Qn&&(k=q&&q.onVnodeMounted)){const Yn=p;jn(()=>Zn(k,rn,Yn),w)}(p.shapeFlag&256||rn&&ve(rn.vnode)&&rn.vnode.shapeFlag&256)&&a.a&&jn(a.a,w),a.isMounted=!0,p=m=y=null}};a.scope.on();const E=a.effect=new Ts(S);a.scope.off();const A=a.update=E.run.bind(E),V=a.job=E.runIfDirty.bind(E);V.i=a,V.id=a.uid,E.scheduler=()=>ui(V),jt(a,!0),A()},en=(a,p,m)=>{p.component=a;const y=a.vnode.props;a.vnode=p,a.next=null,jc(a,p.props,y,m),Ic(a,p.children,m),gt(),Ci(a),mt()},Q=(a,p,m,y,w,_,C,S,E=!1)=>{const A=a&&a.children,V=a?a.shapeFlag:0,k=p.children,{patchFlag:D,shapeFlag:q}=p;if(D>0){if(D&128){bt(A,k,m,y,w,_,C,S,E);return}else if(D&256){lt(A,k,m,y,w,_,C,S,E);return}}q&8?(V&16&&Vn(A,w,_),k!==A&&u(m,k)):V&16?q&16?bt(A,k,m,y,w,_,C,S,E):Vn(A,w,_,!0):(V&8&&u(m,""),q&16&&yn(k,m,y,w,_,C,S,E))},lt=(a,p,m,y,w,_,C,S,E)=>{a=a||Lt,p=p||Lt;const A=a.length,V=p.length,k=Math.min(A,V);let D;for(D=0;D<k;D++){const q=p[D]=E?dt(p[D]):et(p[D]);b(a[D],q,m,null,w,_,C,S,E)}A>V?Vn(a,w,_,!0,!1,k):yn(p,m,y,w,_,C,S,E,k)},bt=(a,p,m,y,w,_,C,S,E)=>{let A=0;const V=p.length;let k=a.length-1,D=V-1;for(;A<=k&&A<=D;){const q=a[A],G=p[A]=E?dt(p[A]):et(p[A]);if(It(q,G))b(q,G,m,null,w,_,C,S,E);else break;A++}for(;A<=k&&A<=D;){const q=a[k],G=p[D]=E?dt(p[D]):et(p[D]);if(It(q,G))b(q,G,m,null,w,_,C,S,E);else break;k--,D--}if(A>k){if(A<=D){const q=D+1,G=q<V?p[q].el:y;for(;A<=D;)b(null,p[A]=E?dt(p[A]):et(p[A]),m,G,w,_,C,S,E),A++}}else if(A>D)for(;A<=k;)Sn(a[A],w,_,!0),A++;else{const q=A,G=A,sn=new Map;for(A=G;A<=D;A++){const In=p[A]=E?dt(p[A]):et(p[A]);In.key!=null&&sn.set(In.key,A)}let rn,hn=0;const bn=D-G+1;let Qn=!1,Yn=0;const ie=new Array(bn);for(A=0;A<bn;A++)ie[A]=0;for(A=q;A<=k;A++){const In=a[A];if(hn>=bn){Sn(In,w,_,!0);continue}let Jn;if(In.key!=null)Jn=sn.get(In.key);else for(rn=G;rn<=D;rn++)if(ie[rn-G]===0&&It(In,p[rn])){Jn=rn;break}Jn===void 0?Sn(In,w,_,!0):(ie[Jn-G]=A+1,Jn>=Yn?Yn=Jn:Qn=!0,b(In,p[Jn],m,null,w,_,C,S,E),hn++)}const vi=Qn?Vc(ie):Lt;for(rn=vi.length-1,A=bn-1;A>=0;A--){const In=G+A,Jn=p[In],bi=p[In+1],_i=In+1<V?bi.el||ko(bi):y;ie[A]===0?b(null,Jn,m,_i,w,_,C,S,E):Qn&&(rn<0||A!==vi[rn]?Xn(Jn,m,_i,2):rn--)}}},Xn=(a,p,m,y,w=null)=>{const{el:_,type:C,transition:S,children:E,shapeFlag:A}=a;if(A&6){Xn(a.component.subTree,p,m,y);return}if(A&128){a.suspense.move(p,m,y);return}if(A&64){C.move(a,p,m,I);return}if(C===Dn){r(_,p,m);for(let k=0;k<E.length;k++)Xn(E[k],p,m,y);r(a.anchor,p,m);return}if(C===Be){O(a,p,m);return}if(y!==2&&A&1&&S)if(y===0)S.persisted&&!_[qn]?r(_,p,m):(S.beforeEnter(_),r(_,p,m),jn(()=>S.enter(_),w));else{const{leave:k,delayLeave:D,afterLeave:q}=S,G=()=>{a.ctx.isUnmounted?i(_):r(_,p,m)},sn=()=>{const rn=_._isLeaving||!!_[qn];_._isLeaving&&_[qn](!0),S.persisted&&!rn?G():k(_,()=>{G(),q&&q()})};D?D(_,G,sn):sn()}else r(_,p,m)},Sn=(a,p,m,y=!1,w=!1)=>{const{type:_,props:C,ref:S,children:E,dynamicChildren:A,shapeFlag:V,patchFlag:k,dirs:D,cacheIndex:q,memo:G}=a;if((k===-2||A&&A.hasOnce)&&(w=!1),S!=null&&(gt(),me(S,null,m,a,!0),mt()),q!=null&&(!a.ctx||a.ctx===p)&&(p.renderCache[q]=void 0),V&256){p.ctx.deactivate(a);return}const sn=V&1&&D,rn=!ve(a);let hn;if(rn&&(hn=C&&C.onVnodeBeforeUnmount)&&Zn(hn,p,a),V&6)kt(a.component,m,y);else{if(V&128){a.suspense.unmount(m,y);return}sn&&Nt(a,null,p,"beforeUnmount"),V&64?a.type.remove(a,p,m,I,y):A&&!A.hasOnce&&(_!==Dn||k>0&&k&64)?Vn(A,p,m,!1,!0):(_===Dn&&k&384||!w&&V&16)&&Vn(E,p,m),y&&zt(a)}const bn=G!=null&&q==null;(rn&&(hn=C&&C.onVnodeUnmounted)||sn||bn)&&jn(()=>{hn&&Zn(hn,p,a),sn&&Nt(a,null,p,"unmounted"),bn&&(a.el=null)},m)},zt=a=>{const{type:p,el:m,anchor:y,transition:w}=a;if(p===Dn){Gt(m,y);return}if(p===Be){N(a),w&&!w.persisted&&w.afterLeave&&w.afterLeave();return}const _=()=>{i(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(a.shapeFlag&1&&w&&!w.persisted){const{leave:C,delayLeave:S}=w,E=()=>C(m,_);S?S(a.el,_,E):E()}else _()},Gt=(a,p)=>{let m;for(;a!==p;)m=g(a),i(a),a=m;i(p)},kt=(a,p,m)=>{const{bum:y,scope:w,job:_,subTree:C,um:S,m:E,a:A}=a;Li(E),Li(A),y&&Fe(y),w.stop(),_?(_.flags|=8,Sn(C,a,p,m)):a.vnode.el&&C&&(C.transition=a.vnode.transition,Sn(C,a,p,m)),S&&jn(S,p),jn(()=>{a.isUnmounted=!0},p)},Vn=(a,p,m,y=!1,w=!1,_=0)=>{for(let C=_;C<a.length;C++)Sn(a[C],p,m,y,w)},x=a=>{if(a.shapeFlag&6)return x(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const p=g(a.anchor||a.el),m=p&&p[nc];return m?g(m):p};let R=!1;const P=(a,p,m)=>{let y;a==null?p._vnode&&(Sn(p._vnode,null,null,!0),y=p._vnode.component):b(p._vnode||null,a,p,null,null,null,m),p._vnode=a,R||(R=!0,Ci(y),Ws(),R=!1)},I={p:b,um:Sn,m:Xn,r:zt,mt:vn,mc:yn,pc:Q,pbc:W,n:x,o:n};return{render:P,hydrate:void 0,createApp:wc(P)}}function Pr({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function jt({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Fc(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Po(n,t,e=!1){const r=n.children,i=t.children;if(F(r)&&F(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=dt(i[s]),l.el=o.el),!e&&l.patchFlag!==-2&&Po(o,l)),l.type===mr&&(l.patchFlag===-1&&(l=i[s]=dt(l)),l.el=o.el),l.type===kn&&!l.el&&(l.el=o.el)}}function Vc(n){const t=n.slice(),e=[0];let r,i,s,o,l;const c=n.length;for(r=0;r<c;r++){const f=n[r];if(f!==0){if(i=e[e.length-1],n[i]<f){t[r]=i,e.push(r);continue}for(s=0,o=e.length-1;s<o;)l=s+o>>1,n[e[l]]<f?s=l+1:o=l;f<n[e[s]]&&(s>0&&(t[r]=e[s-1]),e[s]=r)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function To(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:To(t)}function Li(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ko(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ko(t.subTree):null}const No=n=>n.__isSuspense;function Bc(n,t){t&&t.pendingBranch?F(n)?t.effects.push(...n):t.effects.push(n):Ql(n)}const Dn=Symbol.for("v-fgt"),mr=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),Be=Symbol.for("v-stc"),qt=[];let Fn=null;function On(n=!1){qt.push(Fn=n?null:[])}function jo(){qt.pop(),Fn=qt[qt.length-1]||null}let Ee=1;function $e(n,t=!1){Ee+=n,n<0&&Fn&&t&&(Fn.hasOnce=!0)}function Ro(n){return n.dynamicChildren=Ee>0?Fn||Lt:null,jo(),Ee>0&&Fn&&Fn.push(n),n}function zn(n,t,e,r,i,s){return Ro(B(n,t,e,r,i,s,!0))}function di(n,t,e,r,i){return Ro(an(n,t,e,r,i,!0))}function Xe(n){return n?n.__v_isVNode===!0:!1}function It(n,t){return n.type===t.type&&n.key===t.key}const Oo=({key:n})=>n??null,qe=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?un(n)||En(n)||H(n)?{i:Ln,r:n,k:t,f:!!e}:n:null);function B(n,t=null,e=null,r=0,i=null,s=n===Dn?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Oo(t),ref:t&&qe(t),scopeId:Xs,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ln};return l?(Qe(c,e),s&128&&n.normalize(c)):e&&(c.shapeFlag|=un(e)?8:16),Ee>0&&!o&&Fn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Fn.push(c),c}const an=qc;function qc(n,t=null,e=null,r=0,i=null,s=!1){if((!n||n===ao)&&(n=kn),Xe(n)){const l=Tt(n,t,!0);return e&&Qe(l,e),Ee>0&&!s&&Fn&&(l.shapeFlag&6?Fn[Fn.indexOf(n)]=l:Fn.push(l)),l.patchFlag=-2,l}if(Zc(n)&&(n=n.__vccOpts),t){t=Hc(t);let{class:l,style:c}=t;l&&!un(l)&&(t.class=Yt(l)),Z(c)&&(ci(c)&&!F(c)&&(c=mn({},c)),t.style=ti(c))}const o=un(n)?1:No(n)?128:ar(n)?64:Z(n)?4:H(n)?2:0;return B(n,t,e,r,i,o,s,!0)}function Hc(n){return n?ci(n)||xo(n)?mn({},n):n:null}function Tt(n,t,e=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:l,transition:c}=n,f=t?Uc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&Oo(f),ref:t&&t.ref?e&&s?F(s)?s.concat(qe(t)):[s,qe(t)]:qe(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Dn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Tt(n.ssContent),ssFallback:n.ssFallback&&Tt(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return c&&r&&Ae(u,c.clone(u)),u}function Mo(n=" ",t=0){return an(mr,null,n,t)}function Kc(n,t){const e=an(Be,null,n);return e.staticCount=t,e}function Gr(n="",t=!1){return t?(On(),di(kn,null,n)):an(kn,null,n)}function et(n){return n==null||typeof n=="boolean"?an(kn):F(n)?an(Dn,null,n.slice()):Xe(n)?dt(n):an(mr,null,String(n))}function dt(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Tt(n)}function Qe(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(F(t))e=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Qe(n,i()),i._c&&(i._d=!0));return}else{e=32;const i=t._;!i&&!xo(t)?t._ctx=Ln:i===3&&Ln&&(Ln.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(H(t)){if(r&65){Qe(n,{default:t});return}t={default:t,_ctx:Ln},e=32}else t=String(t),r&64?(e=16,t=[Mo(t)]):e=8;n.children=t,n.shapeFlag|=e}function Uc(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Yt([t.class,r.class]));else if(i==="style")t.style=ti([t.style,r.style]);else if(tr(i)){const s=t[i],o=r[i];o&&s!==o&&!(F(s)&&s.includes(o))?t[i]=s?[].concat(s,o):o:o==null&&s==null&&!er(i)&&(t[i]=o)}else i!==""&&(t[i]=r[i])}return t}function Zn(n,t,e,r=null){Un(n,t,7,[e,r])}const zc=mo();let Gc=0;function Wc(n,t,e){const r=n.type,i=(t?t.appContext:n.appContext)||zc,s={uid:Gc++,vnode:n,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ao(r,i),emitsOptions:vo(r,i),emit:null,emitted:null,propsDefaults:on,inheritAttrs:r.inheritAttrs,ctx:on,data:on,props:on,attrs:on,slots:on,refs:on,setupState:on,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ec.bind(null,s),n.ce&&n.ce(s),s}let wn=null;const Io=()=>wn||Ln;let Ye,Se;{const n=or(),t=(e,r)=>{let i;return(i=n[e])||(i=n[e]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Ye=t("__VUE_INSTANCE_SETTERS__",e=>wn=e),Se=t("__VUE_SSR_SETTERS__",e=>Ce=e)}const Re=n=>{const t=wn;return Ye(n),n.scope.on(),()=>{n.scope.off(),Ye(t)}},Fi=()=>{wn&&wn.scope.off(),Ye(null)};function Do(n){return n.vnode.shapeFlag&4}let Ce=!1;function $c(n,t=!1,e=!1){t&&Se(t);const{props:r,children:i}=n.vnode,s=Do(n);Nc(n,r,s,t),Mc(n,i,e||t);const o=s?Xc(n,t):void 0;return t&&Se(!1),o}function Xc(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gc);const{setup:r}=e;if(r){gt();const i=n.setupContext=r.length>1?Yc(n):null,s=Re(n),o=je(r,n,0,[n.props,i]),l=xs(o);if(mt(),s(),(l||n.sp)&&!ve(n)&&so(n),l){if(o.then(Fi,Fi),t)return o.then(c=>{Se(!0);try{Vi(n,c,t)}finally{Se(!1)}}).catch(c=>{cr(c,n,0)});n.asyncDep=o}else Vi(n,o)}else Lo(n)}function Vi(n,t,e){H(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Z(t)&&(n.setupState=Us(t)),Lo(n)}function Lo(n,t,e){const r=n.type;n.render||(n.render=r.render||it);{const i=Re(n);gt();try{mc(n)}finally{mt(),i()}}}const Qc={get(n,t){return xn(n,"get",""),n[t]}};function Yc(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Qc),slots:n.slots,emit:n.emit,expose:t}}function vr(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Us(Bl(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in be)return be[e](n)},has(t,e){return e in t||e in be}})):n.proxy}function Jc(n,t=!0){return H(n)?n.displayName||n.name:n.name||t&&n.__name}function Zc(n){return H(n)&&"__vccOpts"in n}const An=(n,t)=>zl(n,t,Ce);function pi(n,t,e){try{$e(-1);const r=arguments.length;return r===2?Z(t)&&!F(t)?Xe(t)?an(n,null,[t]):an(n,t):an(n,null,t):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&Xe(e)&&(e=[e]),an(n,t,e))}finally{$e(1)}}const nu="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wr;const Bi=typeof window<"u"&&window.trustedTypes;if(Bi)try{Wr=Bi.createPolicy("vue",{createHTML:n=>n})}catch{}const Fo=Wr?n=>Wr.createHTML(n):n=>n,tu="http://www.w3.org/2000/svg",eu="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,qi=ft&&ft.createElement("template"),ru={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const i=t==="svg"?ft.createElementNS(tu,n):t==="mathml"?ft.createElementNS(eu,n):e?ft.createElement(n,{is:e}):ft.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>ft.createTextNode(n),createComment:n=>ft.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ft.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,r,i,s){const o=e?e.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{qi.innerHTML=Fo(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=qi.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},_t="transition",le="animation",Pe=Symbol("_vtc"),Vo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},iu=mn({},Zs,Vo),su=n=>(n.displayName="Transition",n.props=iu,n),hi=su((n,{slots:t})=>pi(rc,ou(n),t)),Rt=(n,t=[])=>{F(n)?n.forEach(e=>e(...t)):n&&n(...t)},Hi=n=>n?F(n)?n.some(t=>t.length>1):n.length>1:!1;function ou(n){const t={};for(const j in n)j in Vo||(t[j]=n[j]);if(n.css===!1)return t;const{name:e="v",type:r,duration:i,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:l=`${e}-enter-to`,appearFromClass:c=s,appearActiveClass:f=o,appearToClass:u=l,leaveFromClass:d=`${e}-leave-from`,leaveActiveClass:g=`${e}-leave-active`,leaveToClass:h=`${e}-leave-to`}=n,v=lu(i),b=v&&v[0],M=v&&v[1],{onBeforeEnter:L,onEnter:T,onEnterCancelled:O,onLeave:N,onLeaveCancelled:U,onBeforeAppear:nn=L,onAppear:tn=T,onAppearCancelled:yn=O}=t,K=(j,X,vn,Mn)=>{j._enterCancelled=Mn,Ot(j,X?u:l),Ot(j,X?f:o),vn&&vn()},W=(j,X)=>{j._isLeaving=!1,Ot(j,d),Ot(j,h),Ot(j,g),X&&X()},ln=j=>(X,vn)=>{const Mn=j?tn:T,dn=()=>K(X,j,vn);Rt(Mn,[X,dn]),Ki(()=>{Ot(X,j?c:s),ut(X,j?u:l),Hi(Mn)||Ui(X,r,b,dn)})};return mn(t,{onBeforeEnter(j){Rt(L,[j]),ut(j,s),ut(j,o)},onBeforeAppear(j){Rt(nn,[j]),ut(j,c),ut(j,f)},onEnter:ln(!1),onAppear:ln(!0),onLeave(j,X){j._isLeaving=!0;const vn=()=>W(j,X);ut(j,d),j._enterCancelled?(ut(j,g),Wi(j)):(Wi(j),ut(j,g)),Ki(()=>{j._isLeaving&&(Ot(j,d),ut(j,h),Hi(N)||Ui(j,r,M,vn))}),Rt(N,[j,vn])},onEnterCancelled(j){K(j,!1,void 0,!0),Rt(O,[j])},onAppearCancelled(j){K(j,!0,void 0,!0),Rt(yn,[j])},onLeaveCancelled(j){W(j),Rt(U,[j])}})}function lu(n){if(n==null)return null;if(Z(n))return[Tr(n.enter),Tr(n.leave)];{const t=Tr(n);return[t,t]}}function Tr(n){return fl(n)}function ut(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Pe]||(n[Pe]=new Set)).add(t)}function Ot(n,t){t.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const e=n[Pe];e&&(e.delete(t),e.size||(n[Pe]=void 0))}function Ki(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let cu=0;function Ui(n,t,e,r){const i=n._endId=++cu,s=()=>{i===n._endId&&r()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:l,propCount:c}=uu(n,t);if(!o)return r();const f=o+"end";let u=0;const d=()=>{n.removeEventListener(f,g),s()},g=h=>{h.target===n&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},l+1),n.addEventListener(f,g)}function uu(n,t){const e=window.getComputedStyle(n),r=v=>(e[v]||"").split(", "),i=r(`${_t}Delay`),s=r(`${_t}Duration`),o=zi(i,s),l=r(`${le}Delay`),c=r(`${le}Duration`),f=zi(l,c);let u=null,d=0,g=0;t===_t?o>0&&(u=_t,d=o,g=s.length):t===le?f>0&&(u=le,d=f,g=c.length):(d=Math.max(o,f),u=d>0?o>f?_t:le:null,g=u?u===_t?s.length:c.length:0);const h=u===_t&&/\b(?:transform|all)(?:,|$)/.test(r(`${_t}Property`).toString());return{type:u,timeout:d,propCount:g,hasTransform:h}}function zi(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,r)=>Gi(e)+Gi(n[r])))}function Gi(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Wi(n){return(n?n.ownerDocument:document).body.offsetHeight}function au(n,t,e){const r=n[Pe];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Je=Symbol("_vod"),Bo=Symbol("_vsh"),fu={name:"show",beforeMount(n,{value:t},{transition:e}){n[Je]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):ce(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:r}){!t!=!e&&(r?t?(r.beforeEnter(n),ce(n,!0),r.enter(n)):r.leave(n,()=>{ce(n,!1)}):ce(n,t))},beforeUnmount(n,{value:t}){ce(n,t)}};function ce(n,t){n.style.display=t?n[Je]:"none",n[Bo]=!t}const du=Symbol(""),pu=/(?:^|;)\s*display\s*:/;function hu(n,t,e){const r=n.style,i=un(e);let s=!1;if(e&&!i){if(t)if(un(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();e[l]==null&&de(r,l,"")}else for(const o in t)e[o]==null&&de(r,o,"");for(const o in e){o==="display"&&(s=!0);const l=e[o];l!=null?mu(n,o,!un(t)&&t?t[o]:void 0,l)||de(r,o,l):de(r,o,"")}}else if(i){if(t!==e){const o=r[du];o&&(e+=";"+o),r.cssText=e,s=pu.test(e)}}else t&&n.removeAttribute("style");Je in n&&(n[Je]=s?r.display:"",n[Bo]&&(r.display="none"))}const De=/\s*!important$/;function de(n,t,e){if(F(e))e.forEach(r=>de(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))De.test(e)?n.setProperty(t,e.replace(De,""),"important"):n.setProperty(t,e);else{const r=gu(n,t);De.test(e)?n.setProperty(Ut(r),e.replace(De,""),"important"):n[r]=e}}const $i=["Webkit","Moz","ms"],kr={};function gu(n,t){const e=kr[t];if(e)return e;let r=Nn(t);if(r!=="filter"&&r in n)return kr[t]=r;r=ir(r);for(let i=0;i<$i.length;i++){const s=$i[i]+r;if(s in n)return kr[t]=s}return t}function mu(n,t,e,r){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&un(r)&&e===r}const Xi="http://www.w3.org/1999/xlink";function Qi(n,t,e,r,i,s=vl(t)){r&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Xi,t.slice(6,t.length)):n.setAttributeNS(Xi,t,e):e==null||s&&!Ss(e)?n.removeAttribute(t):n.setAttribute(t,s?"":st(e)?String(e):e)}function Yi(n,t,e,r,i){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Fo(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?n.getAttribute("value")||"":n.value,c=e==null?n.type==="checkbox"?"on":"":String(e);(l!==c||!("_value"in n))&&(n.value=c),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const l=typeof n[t];l==="boolean"?e=Ss(e):e==null&&l==="string"?(e="",o=!0):l==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(i||t)}function Dt(n,t,e,r){n.addEventListener(t,e,r)}function vu(n,t,e,r){n.removeEventListener(t,e,r)}const Ji=Symbol("_vei");function bu(n,t,e,r,i=null){const s=n[Ji]||(n[Ji]={}),o=s[t];if(r&&o)o.value=r;else{const[l,c]=xu(t);if(r){const f=s[t]=Eu(r,i);Dt(n,l,f,c)}else o&&(vu(n,l,o,c),s[t]=void 0)}}const _u=/(Once|Passive|Capture)$/,yu=/^on:?(?:Once|Passive|Capture)$/;function xu(n){let t,e;for(;(e=n.match(_u))&&!yu.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ut(n.slice(2)),t]}let Nr=0;const wu=Promise.resolve(),Au=()=>Nr||(wu.then(()=>Nr=0),Nr=Date.now());function Eu(n,t){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;const i=e.value;if(F(i)){const s=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{s.call(r),r._stopped=!0};const o=i.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const f=o[c];f&&Un(f,t,5,l)}}else Un(i,t,5,[r])};return e.value=n,e.attached=Au(),e}const Zi=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Su=(n,t,e,r,i,s)=>{const o=i==="svg";t==="class"?au(n,r,o):t==="style"?hu(n,e,r):tr(t)?er(t)||bu(n,t,e,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cu(n,t,r,o))?(Yi(n,t,r),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Qi(n,t,r,o,s,t!=="value")):n._isVueCE&&(Pu(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!un(r)))?Yi(n,Nn(t),r,s,t):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),Qi(n,t,r,o))};function Cu(n,t,e,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in n&&Zi(t)&&H(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Zi(t)&&un(e)?!1:t in n}function Pu(n,t){const e=n._def.props;if(!e)return!1;const r=Nn(t);return Array.isArray(e)?e.some(i=>Nn(i)===r):Object.keys(e).some(i=>Nn(i)===r)}const Ze=n=>{const t=n.props["onUpdate:modelValue"]||!1;return F(t)?e=>Fe(t,e):t};function Tu(n){n.target.composing=!0}function ns(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ft=Symbol("_assign"),Le=Symbol("_initialValue");function jr(n,t,e){return t&&(n=n.trim()),e&&(n=sr(n)),n}const ku={created(n,{modifiers:{lazy:t,trim:e,number:r}},i){n.parentNode&&(n.type==="text"?n[Le]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Le]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Ft]=Ze(i);const s=r||i.props&&i.props.type==="number";Dt(n,t?"change":"input",o=>{o.target.composing||n[Ft](jr(n.value,e,s))}),(e||s)&&Dt(n,"change",()=>{n.value=jr(n.value,e,s)}),t||(Dt(n,"compositionstart",Tu),Dt(n,"compositionend",ns),Dt(n,"change",ns))},mounted(n,{value:t,modifiers:{trim:e,number:r}}){const i=t??"",s=n[Le];delete n[Le],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Ft](jr(n.value,e,r)):n.value=i},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:r,trim:i,number:s}},o){if(n[Ft]=Ze(o),n.composing)return;const l=(s||n.type==="number")&&!/^0\d/.test(n.value)?sr(n.value):n.value,c=t??"";if(l===c)return;const f=n.getRootNode();(f instanceof Document||f instanceof ShadowRoot)&&f.activeElement===n&&n.type!=="range"&&(r&&t===e||i&&n.value.trim()===c)||(n.value=c)}},Rf={deep:!0,created(n,{value:t,modifiers:{number:e}},r){n._modelValue=t,Dt(n,"change",()=>{const i=Array.prototype.filter.call(n.options,c=>c.selected).map(c=>e?sr(nr(c)):nr(c)),s=n.multiple,o=s?Ht(n._modelValue)?new Set(i):i:i[0],l=n._pendingValue=[s,s?F(o)?i.slice():i:o];try{n[Ft](o)}finally{ur(()=>{n._pendingValue===l&&(n._pendingValue=void 0)})}}),n[Ft]=Ze(r)},mounted(n,{value:t}){ts(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[Ft]=Ze(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!Nu(t,e[1],e[0]))&&ts(n,t)}};function Nu(n,t,e){if(!e||F(n))return Ct(n,t);if(Ht(n)){if(n.size!==t.length)return!1;for(const r of t)if(!n.has(r))return!1;return!0}return!1}function ts(n,t){const e=n.multiple,r=F(t);if(!(e&&!r&&!Ht(t))){for(let i=0,s=n.options.length;i<s;i++){const o=n.options[i],l=nr(o);if(e)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=t.some(f=>String(f)===String(l)):o.selected=yl(t,l)>-1}else o.selected=t.has(l);else if(Ct(nr(o),t)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function nr(n){return"_value"in n?n._value:n.value}const ju=["ctrl","shift","alt","meta"],Ru={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>ju.some(e=>n[`${e}Key`]&&!t.includes(e))},Ou=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),r=t.join(".");return e[r]||(e[r]=((i,...s)=>{for(let o=0;o<t.length;o++){const l=Ru[t[o]];if(l&&l(i,t))return}return n(i,...s)}))},Mu=mn({patchProp:Su},ru);let es;function Iu(){return es||(es=Dc(Mu))}const Du=((...n)=>{const t=Iu().createApp(...n),{mount:e}=t;return t.mount=r=>{const i=Fu(r);if(!i)return;const s=t._component;!H(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=e(i,!1,Lu(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t});function Lu(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Fu(n){return un(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Qt=typeof document<"u";function qo(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Vu(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&qo(n.default)}const Y=Object.assign;function Rr(n,t){const e={};for(const r in t){const i=t[r];e[r]=$n(i)?i.map(n):n(i)}return e}const _e=()=>{},$n=Array.isArray;function rs(n,t){const e={};for(const r in n)e[r]=r in t?t[r]:n[r];return e}const Ho=/#/g,Bu=/&/g,qu=/\//g,Hu=/=/g,Ku=/\?/g,Ko=/\+/g,Uu=/%5B/g,zu=/%5D/g,Uo=/%5E/g,Gu=/%60/g,zo=/%7B/g,Wu=/%7C/g,Go=/%7D/g,$u=/%20/g;function gi(n){return n==null?"":encodeURI(""+n).replace(Wu,"|").replace(Uu,"[").replace(zu,"]")}function Xu(n){return gi(n).replace(zo,"{").replace(Go,"}").replace(Uo,"^")}function $r(n){return gi(n).replace(Ko,"%2B").replace($u,"+").replace(Ho,"%23").replace(Bu,"%26").replace(Gu,"`").replace(zo,"{").replace(Go,"}").replace(Uo,"^")}function Qu(n){return $r(n).replace(Hu,"%3D")}function Yu(n){return gi(n).replace(Ho,"%23").replace(Ku,"%3F")}function Ju(n){return Yu(n).replace(qu,"%2F")}function Te(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Zu=/\/$/,na=n=>n.replace(Zu,"");function Or(n,t,e="/"){let r,i={},s="",o="";const l=t.indexOf("#");let c=t.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=t.slice(0,c),s=t.slice(c,l>0?l:t.length),i=n(s.slice(1))),l>=0&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=ia(r??t,e),{fullPath:r+s+o,path:r,query:i,hash:Te(o)}}function ta(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function is(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function ea(n,t,e){const r=t.matched.length-1,i=e.matched.length-1;return r>-1&&r===i&&ee(t.matched[r],e.matched[i])&&Wo(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function ee(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Wo(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!ra(n[e],t[e]))return!1;return!0}function ra(n,t){return $n(n)?ss(n,t):$n(t)?ss(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function ss(n,t){return $n(t)?n.length===t.length&&n.every((e,r)=>e===t[r]):n.length===1&&n[0]===t}function ia(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=e.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Xr=(function(n){return n.pop="pop",n.push="push",n})({}),Mr=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function sa(n){if(!n)if(Qt){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),na(n)}const oa=/^[^#]+#/;function la(n,t){return n.replace(oa,"#")+t}function ca(n,t){const e=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:t.behavior,left:r.left-e.left-(t.left||0),top:r.top-e.top-(t.top||0)}}const br=()=>({left:window.scrollX,top:window.scrollY});function ua(n){let t;if("el"in n){const e=n.el,r=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;t=ca(i,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function os(n,t){return(history.state?history.state.position-t:-1)+n}const Qr=new Map;function aa(n,t){Qr.set(n,t)}function fa(n){const t=Qr.get(n);return Qr.delete(n),t}function da(n){return typeof n=="string"||n&&typeof n=="object"}function $o(n){return typeof n=="string"||typeof n=="symbol"}let fn=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Xo=Symbol("");fn.MATCHER_NOT_FOUND+"",fn.NAVIGATION_GUARD_REDIRECT+"",fn.NAVIGATION_ABORTED+"",fn.NAVIGATION_CANCELLED+"",fn.NAVIGATION_DUPLICATED+"";function re(n,t){return Y(new Error,{type:n,[Xo]:!0},t)}function at(n,t){return n instanceof Error&&Xo in n&&(t==null||!!(n.type&t))}const pa=["params","query","hash"];function ha(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of pa)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function ga(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<e.length;++r){const i=e[r].replace(Ko," "),s=i.indexOf("="),o=Te(s<0?i:i.slice(0,s)),l=s<0?null:Te(i.slice(s+1));if(o in t){let c=t[o];$n(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function ls(n){let t="";for(let e in n){const r=n[e];if(e=Qu(e),r==null){r!==void 0&&(t+=(t.length?"&":"")+e);continue}($n(r)?r.map(i=>i&&$r(i)):[r&&$r(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+e,i!=null&&(t+="="+i))})}return t}function ma(n){const t={};for(const e in n){const r=n[e];r!==void 0&&(t[e]=$n(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const va=Symbol(""),cs=Symbol(""),_r=Symbol(""),mi=Symbol(""),Yr=Symbol("");function ue(){let n=[];function t(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function wt(n,t,e,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const f=g=>{g===!1?c(re(fn.NAVIGATION_ABORTED,{from:e,to:t})):g instanceof Error?c(g):da(g)?c(re(fn.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(o&&r.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),l())},u=s(()=>n.call(r&&r.instances[i],t,e,f));let d=Promise.resolve(u);n.length<3&&(d=d.then(f)),d.catch(g=>c(g))})}function Ir(n,t,e,r,i=s=>s()){const s=[];for(const o of n)for(const l in o.components){let c=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(qo(c)){const f=(c.__vccOpts||c)[t];f&&s.push(wt(f,e,r,o,l,i))}else{let f=c();s.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Vu(u)?u.default:u;o.mods[l]=u,o.components[l]=d;const g=(d.__vccOpts||d)[t];return g&&wt(g,e,r,o,l,i)()}))}}return s}function ba(n,t){const e=[],r=[],i=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const l=t.matched[o];l&&(n.matched.find(f=>ee(f,l))?r.push(l):e.push(l));const c=n.matched[o];c&&(t.matched.find(f=>ee(f,c))||i.push(c))}return[e,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _a=()=>location.protocol+"//"+location.host;function Qo(n,t){const{pathname:e,search:r,hash:i}=t,s=n.indexOf("#");if(s>-1){let o=i.includes(n.slice(s))?n.slice(s).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),is(l,"")}return is(e,n)+r+i}function ya(n,t,e,r){let i=[],s=[],o=null;const l=({state:g})=>{const h=Qo(n,location),v=e.value,b=t.value;let M=0;if(g){if(e.value=h,t.value=g,o&&o===v){o=null;return}M=b?g.position-b.position:0}else r(h);i.forEach(L=>{L(e.value,v,{delta:M,type:Xr.pop,direction:M?M>0?Mr.forward:Mr.back:Mr.unknown})})};function c(){o=e.value}function f(g){i.push(g);const h=()=>{const v=i.indexOf(g);v>-1&&i.splice(v,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Y({},g.state,{scroll:br()}),"")}}function d(){for(const g of s)g();s=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:f,destroy:d}}function us(n,t,e,r=!1,i=!1){return{back:n,current:t,forward:e,replaced:r,position:window.history.length,scroll:i?br():null}}function xa(n){const{history:t,location:e}=window,r={value:Qo(n,e)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,f,u){const d=n.indexOf("#"),g=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+c:_a()+n+c;try{t[u?"replaceState":"pushState"](f,"",g),i.value=f}catch(h){console.error(h),e[u?"replace":"assign"](g)}}function o(c,f){s(c,Y({},t.state,us(i.value.back,c,i.value.forward,!0),f,{position:i.value.position}),!0),r.value=c}function l(c,f){const u=Y({},i.value,t.state,{forward:c,scroll:br()});s(u.current,u,!0),s(c,Y({},us(r.value,c,null),{position:u.position+1},f),!1),r.value=c}return{location:r,state:i,push:l,replace:o}}function wa(n){n=sa(n);const t=xa(n),e=ya(n,t.state,t.location,t.replace);function r(s,o=!0){o||e.pauseListeners(),history.go(s)}const i=Y({location:"",base:n,go:r,createHref:la.bind(null,n)},t,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Aa(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),wa(n)}let Vt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var gn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(gn||{});const Ea={type:Vt.Static,value:""},Sa=/[a-zA-Z0-9_]/;function Ca(n){if(!n)return[[]];if(n==="/")return[[Ea]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(h){throw new Error(`ERR (${e})/"${f}": ${h}`)}let e=gn.Static,r=e;const i=[];let s;function o(){s&&i.push(s),s=[]}let l=0,c,f="",u="";function d(){f&&(e===gn.Static?s.push({type:Vt.Static,value:f}):e===gn.Param||e===gn.ParamRegExp||e===gn.ParamRegExpEnd?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Vt.Param,value:f,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function g(){f+=c}for(;l<n.length;){if(c=n[l++],c==="\\"&&e!==gn.ParamRegExp){r=e,e=gn.EscapeNext;continue}switch(e){case gn.Static:c==="/"?(f&&d(),o()):c===":"?(d(),e=gn.Param):g();break;case gn.EscapeNext:g(),e=r;break;case gn.Param:c==="("?e=gn.ParamRegExp:Sa.test(c)?g():(d(),e=gn.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case gn.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:e=gn.ParamRegExpEnd:u+=c;break;case gn.ParamRegExpEnd:d(),e=gn.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:t("Unknown state");break}}return e===gn.ParamRegExp&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),i}const as="[^/]+?",Pa={sensitive:!1,strict:!1,start:!0,end:!0};var Pn=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Pn||{});const Ta=/[.+*?^${}()[\]/\\]/g;function ka(n,t){const e=Y({},Pa,t),r=[];let i=e.start?"^":"";const s=[];for(const f of n){const u=f.length?[]:[Pn.Root];e.strict&&!f.length&&(i+="/");for(let d=0;d<f.length;d++){const g=f[d];let h=Pn.Segment+(e.sensitive?Pn.BonusCaseSensitive:0);if(g.type===Vt.Static)d||(i+="/"),i+=g.value.replace(Ta,"\\$&"),h+=Pn.Static;else if(g.type===Vt.Param){const{value:v,repeatable:b,optional:M,regexp:L}=g;s.push({name:v,repeatable:b,optional:M});const T=L||as;if(T!==as){h+=Pn.BonusCustomRegExp;try{`${T}`}catch(N){throw new Error(`Invalid custom RegExp for param "${v}" (${T}): `+N.message)}}let O=b?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(O=M&&f.length<2?`(?:/${O})`:"/"+O),M&&(O+="?"),i+=O,h+=Pn.Dynamic,M&&(h+=Pn.BonusOptional),b&&(h+=Pn.BonusRepeatable),T===".*"&&(h+=Pn.BonusWildcard)}u.push(h)}r.push(u)}if(e.strict&&e.end){const f=r.length-1;r[f][r[f].length-1]+=Pn.BonusStrict}e.strict||(i+="/?"),e.end?i+="$":e.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,e.sensitive?"":"i");function l(f){const u=f.match(o),d={};if(!u)return null;for(let g=1;g<u.length;g++){const h=u[g]||"",v=s[g-1];d[v.name]=h&&v.repeatable?h.split("/"):h}return d}function c(f){let u="",d=!1;for(const g of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of g)if(h.type===Vt.Static)u+=h.value;else if(h.type===Vt.Param){const{value:v,repeatable:b,optional:M}=h,L=v in f?f[v]:"";if($n(L)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const T=$n(L)?L.join("/"):L;if(!T)if(M)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=T}}return u||"/"}return{re:o,score:r,keys:s,parse:l,stringify:c}}function Na(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=t[e]-n[e];if(r)return r;e++}return n.length<t.length?n.length===1&&n[0]===Pn.Static+Pn.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Pn.Static+Pn.Segment?1:-1:0}function Yo(n,t){let e=0;const r=n.score,i=t.score;for(;e<r.length&&e<i.length;){const s=Na(r[e],i[e]);if(s)return s;e++}if(Math.abs(i.length-r.length)===1){if(fs(r))return 1;if(fs(i))return-1}return i.length-r.length}function fs(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const ja={strict:!1,end:!0,sensitive:!1};function Ra(n,t,e){const r=ka(Ca(n.path),e),i=Y(r,{record:n,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Oa(n,t){const e=[],r=new Map;t=rs(ja,t);function i(d){return r.get(d)}function s(d,g,h){const v=!h,b=ps(d);b.aliasOf=h&&h.record;const M=rs(t,d),L=[b];if("alias"in d){const N=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of N)L.push(ps(Y({},b,{components:h?h.record.components:b.components,path:U,aliasOf:h?h.record:b})))}let T,O;for(const N of L){const{path:U}=N;if(g&&U[0]!=="/"){const nn=g.record.path,tn=nn[nn.length-1]==="/"?"":"/";N.path=g.record.path+(U&&tn+U)}if(T=Ra(N,g,M),h?h.alias.push(T):(O=O||T,O!==T&&O.alias.push(T),v&&d.name&&!hs(T)&&o(d.name)),Jo(T)&&c(T),b.children){const nn=b.children;for(let tn=0;tn<nn.length;tn++)s(nn[tn],T,h&&h.children[tn])}h=h||T}return O?()=>{o(O)}:_e}function o(d){if($o(d)){const g=r.get(d);g&&(r.delete(d),e.splice(e.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=e.indexOf(d);g>-1&&(e.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return e}function c(d){const g=Da(d,e);e.splice(g,0,d),d.record.name&&!hs(d)&&r.set(d.record.name,d)}function f(d,g){let h,v={},b,M;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw re(fn.MATCHER_NOT_FOUND,{location:d});M=h.record.name,v=Y(ds(g.params,h.keys.filter(O=>!O.optional).concat(h.parent?h.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),d.params&&ds(d.params,h.keys.map(O=>O.name))),b=h.stringify(v)}else if(d.path!=null)b=d.path,h=e.find(O=>O.re.test(b)),h&&(v=h.parse(b),M=h.record.name);else{if(h=g.name?r.get(g.name):e.find(O=>O.re.test(g.path)),!h)throw re(fn.MATCHER_NOT_FOUND,{location:d,currentLocation:g});M=h.record.name,v=Y({},g.params,d.params),b=h.stringify(v)}const L=[];let T=h;for(;T;)L.unshift(T.record),T=T.parent;return{name:M,path:b,params:v,matched:L,meta:Ia(L)}}n.forEach(d=>s(d));function u(){e.length=0,r.clear()}return{addRoute:s,resolve:f,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:i}}function ds(n,t){const e={};for(const r of t)r in n&&(e[r]=n[r]);return e}function ps(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Ma(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ma(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const r in n.components)t[r]=typeof e=="object"?e[r]:e;return t}function hs(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ia(n){return n.reduce((t,e)=>Y(t,e.meta),{})}function Da(n,t){let e=0,r=t.length;for(;e!==r;){const s=e+r>>1;Yo(n,t[s])<0?r=s:e=s+1}const i=La(n);return i&&(r=t.lastIndexOf(i,r-1)),r}function La(n){let t=n;for(;t=t.parent;)if(Jo(t)&&Yo(n,t)===0)return t}function Jo({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function gs(n){const t=Wn(_r),e=Wn(mi),r=An(()=>{const c=Rn(n.to);return t.resolve(c)}),i=An(()=>{const{matched:c}=r.value,{length:f}=c,u=c[f-1],d=e.matched;if(!u||!d.length)return-1;const g=d.findIndex(ee.bind(null,u));if(g>-1)return g;const h=ms(c[f-2]);return f>1&&ms(u)===h&&d[d.length-1].path!==h?d.findIndex(ee.bind(null,c[f-2])):g}),s=An(()=>i.value>-1&&Ha(e.params,r.value.params)),o=An(()=>i.value>-1&&i.value===e.matched.length-1&&Wo(e.params,r.value.params));function l(c={}){if(qa(c)){const f=t[Rn(n.replace)?"replace":"push"](Rn(n.to)).catch(_e);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:An(()=>r.value.href),isActive:s,isExactActive:o,navigate:l}}function Fa(n){return n.length===1?n[0]:n}const Va=io({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:gs,setup(n,{slots:t}){const e=Ne(gs(n)),{options:r}=Wn(_r),i=An(()=>({[vs(n.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[vs(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&Fa(t.default(e));return n.custom?s:pi("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},s)}}}),Ba=Va;function qa(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Ha(n,t){for(const e in t){const r=t[e],i=n[e];if(typeof r=="string"){if(r!==i)return!1}else if(!$n(i)||i.length!==r.length||r.some((s,o)=>s.valueOf()!==i[o].valueOf()))return!1}return!0}function ms(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const vs=(n,t,e)=>n??t??e,Ka=io({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const r=Wn(Yr),i=An(()=>n.route||r.value),s=Wn(cs,0),o=An(()=>{let f=Rn(s);const{matched:u}=i.value;let d;for(;(d=u[f])&&!d.components;)f++;return f}),l=An(()=>i.value.matched[o.value]);Ve(cs,An(()=>o.value+1)),Ve(va,l),Ve(Yr,i);const c=Jt();return ne(()=>[c.value,l.value,n.name],([f,u,d],[g,h,v])=>{u&&(u.instances[d]=f,h&&h!==u&&f&&f===g&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),f&&u&&(!h||!ee(u,h)||!g)&&(u.enterCallbacks[d]||[]).forEach(b=>b(f))},{flush:"post"}),()=>{const f=i.value,u=n.name,d=l.value,g=d&&d.components[u];if(!g)return bs(e.default,{Component:g,route:f});const h=d.props[u],v=h?h===!0?f.params:typeof h=="function"?h(f):h:null,M=pi(g,Y({},v,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return bs(e.default,{Component:M,route:f})||M}}});function bs(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Ua=Ka;function za(n){const t=Oa(n.routes,n),e=n.parseQuery||ga,r=n.stringifyQuery||ls,i=n.history,s=ue(),o=ue(),l=ue(),c=ql(yt);let f=yt;Qt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rr.bind(null,x=>""+x),d=Rr.bind(null,Ju),g=Rr.bind(null,Te);function h(x,R){let P,I;return $o(x)?(P=t.getRecordMatcher(x),I=R):I=x,t.addRoute(I,P)}function v(x){const R=t.getRecordMatcher(x);R&&t.removeRoute(R)}function b(){return t.getRoutes().map(x=>x.record)}function M(x){return!!t.getRecordMatcher(x)}function L(x,R){if(R=Y({},R||c.value),typeof x=="string"){const m=Or(e,x,R.path),y=t.resolve({path:m.path},R),w=i.createHref(m.fullPath);return Y(m,y,{params:g(y.params),hash:Te(m.hash),redirectedFrom:void 0,href:w})}let P;if(x.path!=null)P=Y({},x,{path:Or(e,x.path,R.path).path});else{const m=Y({},x.params);for(const y in m)m[y]==null&&delete m[y];P=Y({},x,{params:d(m)}),R.params=d(R.params)}const I=t.resolve(P,R),z=x.hash||"";I.params=u(g(I.params));const a=ta(r,Y({},x,{hash:Xu(z),path:I.path})),p=i.createHref(a);return Y({fullPath:a,hash:z,query:r===ls?ma(x.query):x.query||{}},I,{redirectedFrom:void 0,href:p})}function T(x){return typeof x=="string"?Or(e,x,c.value.path):Y({},x)}function O(x,R){if(f!==x)return re(fn.NAVIGATION_CANCELLED,{from:R,to:x})}function N(x){return tn(x)}function U(x){return N(Y(T(x),{replace:!0}))}function nn(x,R){const P=x.matched[x.matched.length-1];if(P&&P.redirect){const{redirect:I}=P;let z=typeof I=="function"?I(x,R):I;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=T(z):{path:z},z.params={}),Y({query:x.query,hash:x.hash,params:z.path!=null?{}:x.params},z)}}function tn(x,R){const P=f=L(x),I=c.value,z=x.state,a=x.force,p=x.replace===!0,m=nn(P,I);if(m)return tn(Y(T(m),{state:typeof m=="object"?Y({},z,m.state):z,force:a,replace:p}),R||P);const y=P;y.redirectedFrom=R;let w;return!a&&ea(r,I,P)&&(w=re(fn.NAVIGATION_DUPLICATED,{to:y,from:I}),Xn(I,I,!0,!1)),(w?Promise.resolve(w):W(y,I)).catch(_=>at(_)?at(_,fn.NAVIGATION_GUARD_REDIRECT)?_:bt(_):Q(_,y,I)).then(_=>{if(_){if(at(_,fn.NAVIGATION_GUARD_REDIRECT))return tn(Y({replace:p},T(_.to),{state:typeof _.to=="object"?Y({},z,_.to.state):z,force:a}),R||y)}else _=j(y,I,!0,p,z);return ln(y,I,_),_})}function yn(x,R){const P=O(x,R);return P?Promise.reject(P):Promise.resolve()}function K(x){const R=Gt.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(x):x()}function W(x,R){let P;const[I,z,a]=ba(x,R);P=Ir(I.reverse(),"beforeRouteLeave",x,R);for(const m of I)m.leaveGuards.forEach(y=>{P.push(wt(y,x,R))});const p=yn.bind(null,x,R);return P.push(p),Vn(P).then(()=>{P=[];for(const m of s.list())P.push(wt(m,x,R));return P.push(p),Vn(P)}).then(()=>{P=Ir(z,"beforeRouteUpdate",x,R);for(const m of z)m.updateGuards.forEach(y=>{P.push(wt(y,x,R))});return P.push(p),Vn(P)}).then(()=>{P=[];for(const m of a)if(m.beforeEnter)if($n(m.beforeEnter))for(const y of m.beforeEnter)P.push(wt(y,x,R));else P.push(wt(m.beforeEnter,x,R));return P.push(p),Vn(P)}).then(()=>(x.matched.forEach(m=>m.enterCallbacks={}),P=Ir(a,"beforeRouteEnter",x,R,K),P.push(p),Vn(P))).then(()=>{P=[];for(const m of o.list())P.push(wt(m,x,R));return P.push(p),Vn(P)}).catch(m=>at(m,fn.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function ln(x,R,P){l.list().forEach(I=>K(()=>I(x,R,P)))}function j(x,R,P,I,z){const a=O(x,R);if(a)return a;const p=R===yt,m=Qt?history.state:{};P&&(I||p?i.replace(x.fullPath,Y({scroll:p&&m&&m.scroll},z)):i.push(x.fullPath,z)),c.value=x,Xn(x,R,P,p),bt()}let X;function vn(){X||(X=i.listen((x,R,P)=>{if(!kt.listening)return;const I=L(x),z=nn(I,kt.currentRoute.value);if(z){tn(Y(z,{replace:!0,force:!0}),I).catch(_e);return}f=I;const a=c.value;Qt&&aa(os(a.fullPath,P.delta),br()),W(I,a).catch(p=>at(p,fn.NAVIGATION_ABORTED|fn.NAVIGATION_CANCELLED)?p:at(p,fn.NAVIGATION_GUARD_REDIRECT)?(tn(Y(T(p.to),{force:!0}),I).then(m=>{at(m,fn.NAVIGATION_ABORTED|fn.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===Xr.pop&&i.go(-1,!1)}).catch(_e),Promise.reject()):(P.delta&&i.go(-P.delta,!1),Q(p,I,a))).then(p=>{p=p||j(I,a,!1),p&&(P.delta&&!at(p,fn.NAVIGATION_CANCELLED)?i.go(-P.delta,!1):P.type===Xr.pop&&at(p,fn.NAVIGATION_ABORTED|fn.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ln(I,a,p)}).catch(_e)}))}let Mn=ue(),dn=ue(),en;function Q(x,R,P){bt(x);const I=dn.list();return I.length?I.forEach(z=>z(x,R,P)):console.error(x),Promise.reject(x)}function lt(){return en&&c.value!==yt?Promise.resolve():new Promise((x,R)=>{Mn.add([x,R])})}function bt(x){return en||(en=!x,vn(),Mn.list().forEach(([R,P])=>x?P(x):R()),Mn.reset()),x}function Xn(x,R,P,I){const{scrollBehavior:z}=n;if(!Qt||!z)return Promise.resolve();const a=!P&&fa(os(x.fullPath,0))||(I||!P)&&history.state&&history.state.scroll||null;return ur().then(()=>z(x,R,a)).then(p=>p&&ua(p)).catch(p=>Q(p,x,R))}const Sn=x=>i.go(x);let zt;const Gt=new Set,kt={currentRoute:c,listening:!0,addRoute:h,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:M,getRoutes:b,resolve:L,options:n,push:N,replace:U,go:Sn,back:()=>Sn(-1),forward:()=>Sn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:l.add,onError:dn.add,isReady:lt,install(x){x.component("RouterLink",Ba),x.component("RouterView",Ua),x.config.globalProperties.$router=kt,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Rn(c)}),Qt&&!zt&&c.value===yt&&(zt=!0,N(i.location).catch(I=>{}));const R={};for(const I in yt)Object.defineProperty(R,I,{get:()=>c.value[I],enumerable:!0});x.provide(_r,kt),x.provide(mi,Hs(R)),x.provide(Yr,c);const P=x.unmount;Gt.add(x),x.unmount=function(){Gt.delete(x),Gt.size<1&&(f=yt,X&&X(),X=null,c.value=yt,zt=!1,en=!1),P()}}};function Vn(x){return x.reduce((R,P)=>R.then(()=>K(P)),Promise.resolve())}return kt}function Ga(){return Wn(_r)}function Zo(n){return Wn(mi)}const nl=[{id:"2026WUSTACM选拔赛第一场",title:"2026WUSTACM选拔赛第一场",date:"2026-07-14",category:"比赛总结",categories:["比赛总结","校内选拔"],tags:["ACM","2026","复盘"],excerpt:"比赛过程 A题（签到题） 题意： 长度为N的两个整数序列A和B（A，B中元素互不相同），计算： 1.满足A[i] = B[i]的整数i的个数 2.满足A[i] = B[j]且i != j的整数对(i,j)的个数 输入： 第1行包含一个整数N……",content:`## 比赛过程\r
\r
### A题（签到题）\r
**题意**：\r
长度为N的两个整数序列A和B（A，B中元素互不相同），计算：\r
1.满足\`A[i] = B[i]\`的整数i的个数\r
2.满足\`A[i] = B[j]\`且\`i != j\`的整数对\`(i,j)\`的个数\r
**输入**：\r
第1行包含一个整数N（1 <= N <= 1000）\r
第2行包含N个整数\`A[1],A[2],···,A[N]\`\r
第3行包含N个整数\`B[1],B[2],···,B[N]\`\r
**输出**：\r
第1行输出（\`1\`）的答案；\r
第2行输出（\`2\`）的答案。\r
\r
**思路**：遍历出（\`1\`）的个数，使用map映射出出现2次的数，减去（1）的个数便得出（\`2\`）的个数。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <iostream>\r
#include <vector>\r
#include <map>\r
using namespace std;\r
 \r
void solve() {\r
    int n;\r
    cin >> n;\r
    vector<long long> a(n + 1),b(n + 1);\r
    map<long long,int> cnt;\r
    for(int i = 1;i <= n;++i) {\r
        cin >> a[i];\r
        cnt[a[i]]++;\r
    }\r
    for(int i = 1;i <= n;++i) {\r
        cin >> b[i];\r
        cnt[b[i]]++;\r
    }\r
    int ans1 = 0,ans2 = 0;\r
    for(int i = 1;i <= n;++i) {\r
        if(a[i] == b[i]) ans1++;\r
    }\r
    for(const auto& it : cnt) {\r
        if(it.second == 2) ans2++;\r
    }\r
    cout << ans1 << "\\n";\r
    cout << ans2 - ans1 << "\\n";\r
}\r
 \r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int t = 1;\r
    //cin >> t;\r
    while(t--) solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---\r
\r
### H题\r
**题意**：\r
黑板上有若干个数字，所有数字只能为\`1\`、\`2\`和\`3\`。其中：“1”的个数为a，“2”的个数为b，“3”的个数为c。\r
可以选择以下操作：\r
-选择黑板上两个**不同**的数字并擦除，然后写下一个与被擦除数字都不同的新数字。\r
问：是否能通过若干次操作，使得黑板上最终只剩下一种数字？如果可以，具体是哪几种数字可以单独留下？\r
**输入**：\r
第\`1\`行包含一个整数\`t（1 <= t <= 1e5）\`，表示测试用例的数量。\r
每个测试用例包含一行，由三个整数\`a，b，c（1 <= a，b，c <= 100）\`，分别表示“1”，“2”，“3”的初始个数。\r
**输出**：\r
对于每个测试用例，输出一行包含\`3\`个整数（由空格隔开）：三个整数分别代表“1”，“2”，“3”是否可以留下，是就输出“1”，否则输出“0”。\r
\r
**思路**：\r
以留下“1”为例：\r
·**情况1（擦1，2，写3）**：b-=1，c+=1，（b - 1）-（c + 1）=（b - c）- 2（差值奇偶性不变）\r
·**情况2（擦1，3，写2）**：b+=1，c-=1，（b + 1）-（c - 1）=（b - c）+ 2（差值奇偶性不变）\r
·**情况3（擦2，3，写1）**：b-=1，c-=1，（b - 1）-（c - 1）=（b - c）（差值奇偶性不变）\r
核心思路：判断另两种数字的数量之差是否为偶数。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <iostream>\r
#include <cmath>\r
using namespace std;\r
 \r
void solve() {\r
    int a,b,c;\r
    cin >> a >> b >> c;\r
    int p1 = 0,p2 = 0,p3 = 0;\r
    int x1 = abs(b - c),x2 = abs(a - c),x3 = abs(a - b);\r
    if(x1 % 2 == 0) p1 = 1;\r
    if(x2 % 2 == 0) p2 = 1;\r
    if(x3 % 2 == 0) p3 = 1;\r
    cout << p1 << " " << p2 << " " << p3 << "\\n";\r
}\r
 \r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int t = 1;\r
    cin >> t;\r
    while(t--) solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---\r
\r
### C题\r
**题意**：\r
**“美丽数组”**：对于数组\`A\`,满足从数组开头移除若干（可为\`0\`）个元素，并将这些元素按原顺序插入数组末尾，使得到的新数组是非递减有序的（任何长度为\`0\`或\`1\`的数组都是美丽数组）\r
现给定一个初始为空的数组\`a\`，你需要对其处理\`q\`次操作。\r
给定一个整数\`x[i]\`，你需要：\r
-如果可以将\`x[i]\`添加到a的末尾，并且添加后a仍为美丽数组，则将\`x[i]\`添加到末尾；\r
-否则，不做任何操作。\r
**输入**：\r
第1行包含一个整数\`t（1 <= t <= 1e4）\`，表示测试用例的数量。\r
每个测试用例包含两行。第1行包含一个整数\`q（1 <= q <= 2e5）\`，表示操作次数；第\`2\`行包含\`q\`个整数\`x[1],x[2],···,x[q](0 <= x[i] <= 1e9)\`。\r
输入的额外限制：所有测试用例中\`q\`的总和不超过\`2e5\`。\r
**输出**：\r
对于每个测试用例，输出一个仅包含\`q\`个字符的字符串。第i个字符表示在第i次操作中成功添加了整数，否则为\`0\`。\r
\r
**思路**：整个数组显然最多只有一个“下降”位置（a[i] > a[j + 1]的情况），设定P(bool型)为判定符，初始取false，循环数组，更新出现“下降”位置前的最大值Max，当出现首个“下降”位置时，P取反且Max更新为“下降”位置的a[i]；P取反后，显然不能超过该数组的首位元素a[1]（\`1\`基准），新元素必须满足：x >= Max && x <= a[0],满足则加入，更新Max值。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <iostream>\r
#include <vector>\r
#include <string>\r
#include <algorithm>\r
using namespace std;\r
 \r
void solve() {\r
    int n;\r
    cin >> n;\r
    vector<long long> a(n + 1),b(1);\r
    string ans = "1";\r
    for(int i = 1;i <= n;++i) cin >> a[i];\r
    if(n == 1) {\r
        cout << ans << "\\n";\r
        return;\r
    }\r
    b[0] = a[1];\r
    long long Max = a[1];\r
    bool P = false;\r
    for(int i = 2;i <= n;++i) {\r
        if(P == false) {\r
            if(a[i] >= Max) {\r
                Max = max(a[i],Max);\r
                ans += "1";\r
            }   \r
            else if(a[i] <= b[0]) {\r
                ans += "1";\r
                Max = a[i];\r
                P = true;\r
            }\r
            else ans += "0";\r
        }\r
        else if(P == true) {\r
            if(a[i] >= Max && a[i] <= b[0]) {\r
                ans += "1";\r
                Max = max(a[i],Max);\r
            }\r
            else ans += "0";\r
        }\r
    }\r
    cout << ans << "\\n"; \r
}\r
 \r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int t = 1;\r
    cin >> t;\r
    while(t--) solve();\r
    return 0;\r
}\r
\`\`\``,views:0},{id:"序言",title:"序言",date:"2026-07-14",category:"test",categories:["test"],tags:["test"],excerpt:"Test Hello world!",content:`## Test\r
\r
Hello world!`,views:0},{id:"动态规划之背包DP",title:"动态规划之背包DP",date:"2026-07-15",category:"算法",categories:["算法"],tags:["动态规划","01背包","完全背包","多重背包","分组背包"],excerpt:"背包问题是动态规划中最经典，最基础的模型之一。 --- 01背包 问题描述： 有N件物品，每件重量w[i]，价值v[i]，背包容量V。每件物品只能选一次，求最大总价值。 转移方程（一维） 为什么逆序？ 因为每个物品只能用一次。逆序保证dp[……",content:`背包问题是动态规划中最经典，最基础的模型之一。

---

## 1. 01背包

### 问题描述：
有\`N\`件物品，每件重量\`w[i]\`，价值\`v[i]\`，背包容量\`V\`。每件物品**只能选一次**，求最大总价值。

### 转移方程（一维）
\`\`\`cpp
for(int i = 1;i <= N;++i) {
    for(int j = V;j >= w[i];--j)   // 逆序！
        dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
\`\`\`

### **为什么逆序？**
因为每个物品只能用一次。逆序保证\`dp[j - w[i]]\`来自**上一轮**（未选当前物品）的状态，防止一个物品被多次选择。

### 代码模板
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int N,V; // N表示物品数量，V表示背包容量
    cin >> N >> V;
    vector<int> w(N), v(N); // w[i]表示第i个物品的重量，v[i]表示第i个物品的价值
    for(int i = 0;i < N;++i) cin >> w[i] >> v[i];
    vector<int> dp(V + 1,0); // dp[j]表示容量为j的背包所能获得的最大价值
    for(int i = 0;i < N;++i) {
        for(int j = V;j >= w[i];--j) { // 逆序遍历，保证每个物品只能被选择一次
            dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
        }
    }
    cout << dp[V] << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t;
    //cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\`

---

## 2. 完全背包

### 问题描述：
有\`N\`种物品，每种物品有重量\`w[i]\`，价值\`v[i]\`，背包容量\`V\`。每件物品**可以无限次选择**（数量不限），求最大总价值。

### 转移方程（一维）
\`\`\`cpp
for (int i = 1; i <= N; i++)
    for (int j = w[i]; j <= V; j++)   // 顺序！
        dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
\`\`\`

### **为什么顺序？**
因为物品无限，正序遍历允许\`dp[j - w[i]]\`可能已经包含了当前物品，从而实现重复选取。

### 代码模板
\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

void solve() {
    int N,V; // N表示物品数量，V表示背包容量
    cin >> N >> V;
    vector<int> w(N), v(N); // w[i]表示第i个物品的重量，v[i]表示第i个物品的价值
    for(int i = 0;i < N;++i) cin >> w[i] >> v[i];
    vector<int> dp(V + 1,0); // dp[j]表示容量为j的背包所能获得的最大价值
    for(int i = 0;i < N;++i) {
        for(int j = w[i];j <= V;++j) { // 正序遍历，保证每个物品可以被选择多次
            dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
        }
    }
    cout << dp[V] << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t;
    //cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\`

---

## 3. 多重背包

### 问题描述：
有\`N\`种物品，每种物品有重量\`w[i]\`，价值\`v[i]\`，背包容量\`V\`。每件物品**有固定数量**\`s[i]\`件（即最多选是\`s[i]\`次），求最大总价值。

### 二进制拆分优化（核心技巧）
如果直接拆成\`s[i]\`件独立的物品做\`01\`背包，太大。
**二进制拆分**的思想：把\`s[i]\`拆成若干个**\`2\`的幂次**的和，使这些数能够组合出\`0 ~ s[i]\`中任意一个数。
这样每种物品被拆成\`O(log s[i])\`个“新物品”，然后做\`01\`背包。

### 代码模板
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int N,V; 
    cin >> N >> V;
    vector<int> w, v; // 存放拆分后的物品重量和价值
    for(int i = 0;i < N;++i) {
        int wi, vi, s;
        cin >> wi >> vi >> s;
        int k = 1;
        while(s > 0) { // 二进制拆分
            int take = min(k, s); // take表示当前拆分的数量，不能超过剩余数量s
            w.push_back(wi * take);
            v.push_back(vi * take);
            s -= take;
            k <<= 1; // k *= 2
        }
    }
    vector<int> dp(V + 1,0); // dp[j]表示容量为j的背包所能获得的最大价值
    for(int i = 0;i < w.size();++i) {
        for(int j = V;j >= w[i];--j) { // 逆序遍历，保证每个物品只能被选择一次
            dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
        }
    }
    cout << dp[V] << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t;
    //cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\`

---

## 4. 分组背包

### 问题描述：
有\`N\`组物品，每组内有若干件物品,**每组最多只能选一件**。背包容量为\`V\`。每件物品有重量\`w\`和价值\`v\`，求最大总价值。

### 转移方程（一维）
\`\`\`cpp
for (int k = 1; k <= N; k++) {              // 遍历每一组
    for (int j = V; j >= 0; j--) {          // 容量逆序
        for (int i = 0; i < group[k].size(); i++) { // 组内物品
            int weight = group[k][i].w;
            int value = group[k][i].v;
            if (j >= weight) {
                dp[j] = max(dp[j], dp[j - weight] + value);
            }
        }
    }
}
\`\`\`

### 代码模板
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int N,V; // N表示组数，V表示背包容量
    cin >> N >> V;
    vector<int> s(N); // s[i]表示第i组物品的数量
    vector<vector<int>> w(N), v(N); // w[i][j]表示第i组第j个物品的重量，v[i][j]表示第i组第j个物品的价值
    for(int i = 0;i < N;++i) {
        cin >> s[i];
        w[i].resize(s[i]);
        v[i].resize(s[i]);
        for(int j = 0;j < s[i];++j) cin >> w[i][j] >> v[i][j];
    }
    vector<int> dp(V + 1,0); // dp[j]表示容量为j的背包所能获得的最大价值
    for(int i = 0;i < N;++i) {
        for(int j = V;j >= 0;--j) { // 逆序遍历，保证每组物品只能被选择一次
            for(int k = 0;k < s[i];++k) { // 遍历第i组的所有物品
                if(j >= w[i][k]) dp[j] = max(dp[j],dp[j - w[i][k]] + v[i][k]);
            }
        }
    }
    cout << dp[V] << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t;
    //cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\`

---

## **总结**
这四种背包构成了DP中“资源分配”问题的核心骨架：
**·** 01背包是基础，学会它，其他背包是它的变种
**·** 完全背包只是把逆序改成了正序
**·** 多重背包用二进制拆分转化为01背包
**·** 分组背包把容量循环提到组内物品循环之前`,views:0},{id:"动态规划之线性DP",title:"动态规划之线性DP",date:"2026-07-16",category:"算法",categories:["算法"],tags:["动态规划","LIS","LCS","最大子段和"],excerpt:"线性DP是最基础，最常用的动态规划类型，其核心特征为状态转移沿着某个线性方向进行。 --- 在动态规划中，子数组（子串）、子段、子序列、子集是四个极易混淆的概念。 概念 是否连续 是否保持顺序 是否允许为空 子数组（子串） ✅ 必须连续 ✅……",content:`线性DP是最基础，最常用的动态规划类型，其核心特征为**状态转移沿着某个线性方向进行**。

---

在动态规划中，**子数组（子串）、子段、子序列、子集**是四个极易混淆的概念。

<table>
  <thead>
    <tr>
      <th>概念</th>
      <th>是否连续</th>
      <th>是否保持顺序</th>
      <th>是否允许为空</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>子数组（子串）</strong></td>
      <td>✅ 必须连续</td>
      <td>✅ 保持</td>
      <td>❌ 通常非空</td>
    </tr>
    <tr>
      <td><strong>子段</strong></td>
      <td>✅ 必须连续</td>
      <td>✅ 保持</td>
      <td>❌ 通常非空</td>
    </tr>
    <tr>
      <td><strong>子序列</strong></td>
      <td>❌ 可以不连续</td>
      <td>✅ 保持</td>
      <td>✅ 可以为空</td>
    </tr>
    <tr>
      <td><strong>子集</strong></td>
      <td>❌ 不要求连续</td>
      <td>❌ 不要求</td>
      <td>✅ 可以为空</td>
    </tr>
  </tbody>
</table>

---

## 1. 最长上升子序列（LIS）

### 问题描述：
给定一个长度为\`N\`的数组\`a[]\`,求其**严格递增**的最长子序列的长度。

### 法一：DP

### 转移方程：
\`\`\`cpp
dp[i] = max(dp[i],dp[j] + 1) // j < i && a[j] < a[i]
\`\`\`

### 代码模板：
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for(int i = 0;i < n;++i) cin >> nums[i];
    vector<int> dp(n,1); // dp[i]表示以nums[i]结尾的最长上升子序列长度
    int ans = 1; // 最长上升子序列的长度
    for(int i = 0;i < n;++i) {
        for(int j = 0;j < i;++j) {
            if(nums[i] > nums[j]) dp[i] = max(dp[i],dp[j] + 1);
        }
        ans = max(ans,dp[i]);
    }
    cout << ans << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t = 1;
    //cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\`

### 法二：贪心 + 二分

### 核心思想：维护\`tail\`数组，\`tail[len]\`表示为长度为len的上升子序列的最小末尾值。

### 代码模板：
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for(int i = 0;i < n;++i) cin >> nums[i];
    vector<int> tails; // tails[i]表示长度为 i+1 的上升子序列的最小结尾元素
    for(int i = 0;i < n;++i) {
        auto it = lower_bound(tails.begin(),tails.end(),nums[i]);
        if(it == tails.end()) tails.push_back(nums[i]); // 如果nums[i]大于所有结尾元素，则扩展最长上升子序列
        else *it = nums[i]; // 否则更新对应长度的最小结尾元素
    }
    cout << tails.size() << "\\n"; // 最长上升子序列的长度
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t = 1;
    //cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\`

---

## 2. 最长公共子序列（LCS）

### 问题描述：
给定两个字符串\`A\`和\`B\`，求它们的**最长公共子序列**的长度。

### 转移方程：
\`\`\`cpp
if(A[i] == B[j]) dp[i][j] == dp[i - 1][j - 1] + 1;
else dp[i][j] = max(dp[i - 1][j],dp[i][j - 1]);
\`\`\`

### 代码模板：
\`\`\`cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

void solve() {
    string s1,s2;
    cin >> s1 >> s2;
    int n = s1.size(),m = s2.size();
    vector<vector<int>> dp(n + 1,vector<int>(m + 1,0)); // dp[i][j]表示s1前i个字符和s2前j个字符的最长公共子序列长度
    for(int i = 1;i <= n;++i) {
        for(int j = 1;j <= m;++j) {
            if(s1[i - 1] == s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1; // 如果当前字符相同，则最长公共子序列长度加1
            else dp[i][j] = max(dp[i - 1][j],dp[i][j - 1]); // 否则取前一个状态的最大值
        }
    }
    cout << dp[n][m] << "\\n"; // 最长公共子序列的长度
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t = 1;
    //cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\`

---

## 3. 数字三角形（数塔问题）

### 问题描述：
给定一个三角形数字矩阵，从顶部出发，每次只能走到下一层相邻的位置，求路径上数字之和的最大值。

### 转移方程（自底向上）：
\`\`\`cpp
dp[i][j] = a[i][j] + max(dp[i + 1][j],dp[i + 1][j + 1]);
\`\`\`

### 代码模板：
\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<vector<int>> a(n,vector<int>(n,0));
    for(int i = 0;i < n;++i) {
        for(int j = 0;j < i;++j) cin >> a[i][j];
    }
    vector<vector<int>> dp = a;
    for(int i = n - 2;i >= 0;--i) {
        for(int j = 0;j <= i;++j) {
            dp[i][j] = a[i][j] + max(dp[i + 1][j + 1], dp[i + 1][j]);
        }
    }
    cout << dp[0][0] << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    //cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\`

---

## 4. 最大子段和

### 问题描述：
给定一个整数数组，求**连续子数组**的最大和。

### 转移方程：
\`\`\`cpp
dp[i] = max(a[i],dp[i - 1] + a[i]);
\`\`\`

### 代码模板：
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for(int i = 0;i < n;++i) cin >> nums[i];
    int cur = nums[0]; // 以第一个元素结尾的最大和
    int ans = cur; // 全局最大和
    for(int i = 1;i < n;++i) {
        cur = max(cur + nums[i],nums[i]); // 以nums[i]结尾的最大和
        ans = max(ans,cur); // 更新全局最大和
    }
    cout << ans << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t = 1;
    //cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\``,views:0},{id:"2026牛客暑期多校训练营1",title:"2026牛客暑期多校训练营1",date:"2026-07-17",category:"比赛总结",categories:["比赛总结"],tags:["ACM","2026","复盘"],excerpt:"赛后补题 F题 题意： 对于一个 0 到 n-1 的排列 P，定义它的权值为： 给定一个从 0 到 n-1 的排列 P，以及两个整数 k 和 x（0 < k, x < n），构造排列 P'，满足以下两个条件： P'[k] = x（即 P' ……",content:`## 赛后补题

### F题
**题意**：
对于一个 0 到 n-1 的排列 P，定义它的权值为：
\`\`\`cpp
F(P) = sum_{0 <= i < j < n} (P[j] - P[i])
\`\`\`
给定一个从 0 到 n-1 的排列 P，以及两个整数 k 和 x（0 < k, x < n），构造排列 P'，满足以下两个条件：

- P'[k] = x（即 P' 的第 k 个元素为 x，下标从 0 开始）；
- F(P') 与 P'[0] 在模 n 下同余。

---

**输入**：
第一行包含三个整数\`n（1 < n < 2e5）、k\`和\`x（0 < k, x < n）\`。
第二行包含\`n\`个整数\`P[0], P[1], ..., P[n-1]\`，表示给定的\`0\`到\`n-1\`的排列。

**输出**：
如果无解，输出一行包含一个整数 -1。
否则输出一行包含 n 个整数，表示符合条件的排列 P'。

---

**思路**：
设 P' 是 P 循环左移 1 位后的排列，即：
\`\`\`cpp
P'[i] = P[(i+1) % n]
\`\`\`
权值公式可化简为：
\`\`\`cpp
F(P) = sum_{i=0}^{n-1} P[i] * (2*i - n + 1)
\`\`\`
则循环左移 1 位后的权值差为：
\`\`\`cpp
F(P') - F(P) = n * (2*P[0] - n + 1)
\`\`\`
这意味着，无论循环左移（或右移）多少位，排列的权值模 n 始终保持不变。

**代码**：
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k, x;
    cin >> n >> k >> x;
    vector<int> P(n);
    int pos = -1;
    for (int i = 0; i < n; i++) {
        cin >> P[i];
        if (P[i] == x) pos = i;
    }
    int shift = (pos - k + n) % n;
    vector<int> ans(n);
    for (int i = 0; i < n; i++) {
        ans[i] = P[(i + shift) % n];
    }
    for (int i = 0; i < n; i++) {
        cout << ans[i] << " \\n"[i == n - 1];
    }
    return 0;
}
\`\`\`

---

### H题
**题意**：
Alice 和 Bob 进行\`k\`轮石头剪刀布游戏。每轮开始双方各有\`3\`张手牌\`（R/S/P）\`，均可见。
Alice 先出一张，Bob 看到后出一张，然后按规则计分（Alice 胜得\`3\`分，平得\`1\`分，负得\`0\`分）。出牌后丢弃，并各自独立等概率补充一张新牌（R/S/P）。
双方都采取最优策略（Alice 最大化自己的期望总得分，Bob 最小化之）。
给定\`k\`以及初始手牌，求 Alice 的最大期望总得分。

---

**输入**：
第一行包含一个整数\`T（1 <= T <= 1e5）\`，表示测试数据组数。对于每组测试数据：
第一行包含一个整数\`k（1 <= k <= 1e9\`，表示游戏轮数。
第二行包含一个长度为3的字符串，由字符R, S, P组成，表示Alice的初始手牌。
第三行包含一个长度为3的字符串，由字符R, S, P组成，表示Bob的初始手牌。

**输出**：
对于每组测试数据，输出一行包含一个实数，表示Alice的最大期望总得分。
如果你的答案的绝对误差或相对误差不超过10−6，则将被视为正确。

---

**思路**：
每位玩家的手牌用一个三元组 (r, s, p) 表示，其中 r+s+p=3。
所有可能的三元组共有 10 种（组合数 C(5,2)=10）。
联合状态为 (A手牌, B手牌)，共\`100\`种，用编号 idA * 10 + idB 表示。
**状态转移**：从当前状态 s 出发，选定动作 (a,b) 后，下一状态s'的转移概率由补牌组合决定：共\`9\`种等概率组合（Alice 补\`3\`种 × Bob 补\`3\`种）。代码中通过双重循环枚举所有补牌组合，累加 dp[k-1][ns] 并除以 9 得到期望。
由于 k 最大可达 1e9，无法直接迭代到目标轮数。观察到该马尔可夫链是遍历的（所有状态可达），值函数随轮数线性增长：
\`\`\`cpp
dp[k][s]=k⋅ρ+v(s)+o(1)

ld rho = 0.0;
for (int s = 0; s < 100; ++s) rho += (dp[KMAX][s] - dp[KMAX-1][s]);
rho /= 100.0;

v(s) = dp[KMAX][s] - KMAX * rho
\`\`\`
其中 rho 是每轮平均期望得分，v(s) 是状态相关的偏差项。

**代码**：
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;
using ld = long double;
using i64 = long long;

const int KMAX = 2000;

array<array<int,3>, 10> states = {{
    {3,0,0}, {2,1,0}, {2,0,1},
    {1,2,0}, {1,1,1}, {1,0,2},
    {0,3,0}, {0,2,1}, {0,1,2},
    {0,0,3}
}};
map<array<int,3>, int> id;
int score[9];

void init() {
    for (int i = 0; i < 10; ++i) id[states[i]] = i;
    for (int a = 0; a < 3; ++a)
        for (int b = 0; b < 3; ++b) {
            if ((a - b + 3) % 3 == 2) score[a*3+b] = 3;
            else if (a == b) score[a*3+b] = 1;
            else score[a*3+b] = 0;
        }
}

ld dp[KMAX+1][100];

void solve() {
    init();
    for (int k = 1; k <= KMAX; ++k) {
        for (int s = 0; s < 100; ++s) {
            int ia = s / 10, ib = s % 10;
            auto ca = states[ia], cb = states[ib];
            ld best = -1e18;
            for (int a = 0; a < 3; ++a) if (ca[a]) {
                ld worst = 1e18;
                for (int b = 0; b < 3; ++b) if (cb[b]) {
                    ca[a]--; cb[b]--;
                    ld val = score[a*3+b];
                    ld exp = 0.0;
                    for (int da = 0; da < 3; ++da) {
                        for (int db = 0; db < 3; ++db) {
                            ca[da]++; cb[db]++;
                            int nia = id[ca], nib = id[cb];
                            int ns = nia * 10 + nib;
                            exp += dp[k-1][ns];
                            ca[da]--; cb[db]--;
                        }
                    }
                    exp /= 9.0;
                    val += exp;
                    ca[a]++; cb[b]++;
                    worst = min(worst, val);
                }
                best = max(best, worst);
            }
            dp[k][s] = best;
        }
    }
    ld rho = 0.0;
    for (int s = 0; s < 100; ++s) rho += (dp[KMAX][s] - dp[KMAX-1][s]);
    rho /= 100.0;
    ld v[100];
    for (int s = 0; s < 100; ++s)
        v[s] = dp[KMAX][s] - (ld)KMAX * rho;
    int T;
    cin >> T;
    while (T--) {
        i64 k;
        string a, b;
        cin >> k >> a >> b;
        array<int,3> ca = {0,0,0}, cb = {0,0,0};
        for (char c : a) {
            if (c == 'R') ca[0]++;
            else if (c == 'S') ca[1]++;
            else ca[2]++;
        }
        for (char c : b) {
            if (c == 'R') cb[0]++;
            else if (c == 'S') cb[1]++;
            else cb[2]++;
        }
        int s = id[ca] * 10 + id[cb];
        ld ans;
        if (k <= KMAX) {
            ans = dp[k][s];
        } else {
            ans = (ld)k * rho + v[s];
        }
        cout << fixed << setprecision(12) << ans << '\\n';
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    //cin >> t
    while(t--) solve();
    return 0;
}
\`\`\``,views:0},{id:"2026牛客暑期多校训练营2",title:"2026牛客暑期多校训练营2",date:"2026-07-22",category:"比赛总结",categories:["比赛总结"],tags:["ACM","2026","复盘"],excerpt:"赛后补题 F题 题意： 给定一棵大小为n的树及所有边的边权，考虑其每棵子树，对子树中的点赋点权，使得u,v之间的边权等于点权差的绝对值。对每棵子树，求子树内点权极差的最小值。 --- 输入： 第一行包含测试用例数T（1 <= T <= 1e……",content:`## 赛后补题

### F题
**题意**：
给定一棵大小为\`n\`的树及所有边的边权，考虑其每棵子树，对子树中的点赋点权，使得u,v之间的边权等于点权差的绝对值。对每棵子树，求子树内点权极差的最小值。

---

**输入**：
第一行包含测试用例数\`T（1 <= T <= 1e4）\`。对于每组u测试用例：
第一行包含一个整数\`n（3 <= n <= 1e5）\`————树的顶点数。
接下来\`n - 1\`行，第\`i\`行包含三个整数\`u[i]\`,\`v[i]\`和\`w[u[i]][v[i]]（1 <= u[i],v[i] <= n,u[i] != v[i],0 <= w[u[i]][v[i]] <= 5000）\`————树中第i条边的两个端点及其被赋予的值。保证给定的边构成一棵树。
记\`W\`为同一测试用例的\`w[u[i]][v[i]]\`最大值。
**输出**：
对于每组测试用例，输出n个整数，分别代表1，2，···，n各自子树的最小复杂度。

---

**思路**：
**将“极差”转化为“以节点权值为基准的最大偏移量”进行最小化**。
状态定义：
设\`f[u][u]\`表示：在子树\`u\`中，当节点\`u\`的权值相对于某个全局基准值的偏移量为\`i\`时，整个子树中任意节点权值与\`u\`的权值的最大差值的上界的最小可能值。
**·** 偏移量 i 取 [0, 2W]，其中 W 是树中最大的边权。（加10是为了防止越界，实际有效范围是 0 ~ 2W。）
**·** 对于叶子节点（没有子节点），显然最大差值就是\`i\`本身，所以 \`f[u][i] = i\`。
转移方程：
假设当前处理节点\`u\`，合并一个子节点\`v\`，边权为\`w\`。
**·** 如果\`v\`的权值比\`u\`小\`w\`，那么\`v\`相对于基准的偏移量为\`i - w\`，子树的贡献为\`f[v][i-w]\`。
**·** 如果\`v\`的权值比\`u\`大\`w\`，那么偏移量为\`i + w\`，贡献为\`f[v][i+w]\`。
对于子节点 v，我们可以选择两种方案中**较小的**，因为我们要最小化该子树的极差：
\`\`\`cpp
best(v,i) = min(f[v][i - w],f[v][i + w]);
\`\`\`
然后，为了同时满足**所有**子节点，\`u\`的\`f\`值必须取所有子节点的\`best\`的**最大值**（因为必须同时满足每个子节点的限制）：
\`\`\`cpp
f[u][i] = max(f[u][i],best(v,i))；
\`\`\`
初始时，没有子节点时\`f[u][i] = i\`，所以叶子节点的状态正确。随着子节点的合并，\`f[u][i]\`会不断上升，最终表示整棵子树在父节点偏移量为\`i\`时的最小极差。

**代码**：
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

const int INF = 1e9;
const int N = 100100;

int n, W;
vector<pair<int,int>> G[N];
vector<int> f[N];

void dfs(int u, int father) {
    for (int i = 0; i <= 2 * W; ++i) f[u][i] = i;
    for (auto &e : G[u]) {
        int v = e.first, w = e.second;
        if (v == father) continue;
        dfs(v, u);
        for (int i = 0; i <= 2 * W; ++i) {
            if (i >= w && i + w <= 2 * W)
                f[u][i] = max(f[u][i], min(f[v][i - w], f[v][i + w]));
            else if (i >= w)
                f[u][i] = max(f[u][i], f[v][i - w]);
            else
                f[u][i] = max(f[u][i], f[v][i + w]);
        }
    }
}

void solve() {
    cin >> n;
    W = 0;
    for (int i = 1; i < n; ++i) {
        int u, v, w;
        cin >> u >> v >> w;
        G[u].push_back({v, w});
        G[v].push_back({u, w});
        W = max(W, w);
    }
    W += 10;
    for (int i = 1; i <= n; ++i) {
        f[i].resize(2 * W + 5);
        fill(f[i].begin(), f[i].end(), INF);
    }
    dfs(1, 0);
    for (int i = 1; i <= n; ++i) {
        int res = INF;
        for (int j = 0; j <= 2 * W; ++j)
            res = min(res, f[i][j]);
        cout << res << (i == n ? '\\n' : ' ');
    }
    for (int i = 1; i <= n; ++i) G[i].clear();
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int T;
    cin >> T;
    while (T--) solve();
    return 0;
}
\`\`\`

---`,views:0},{id:"图论之Dijkstra",title:"图论之Dijkstra",date:"2026-07-22",category:"算法",categories:["算法"],tags:["图论","最短路","Dijkstra","分层图","A*","双向BFS"],excerpt:"问题描述 给定一个带权有向图（或无向图），求从源点 s 到所有其他点的最短路径长度。 边权 非负：使用 Dijkstra 算法。 边权 可以为负（但无负环）：使用 SPFA 或 Bellman-Ford。 --- 堆优化 Dijkstra ……",content:`## 问题描述

给定一个带权有向图（或无向图），求从源点 \`s\` 到所有其他点的最短路径长度。
- 边权 **非负**：使用 Dijkstra 算法。
- 边权 **可以为负**（但无负环）：使用 SPFA 或 Bellman-Ford。

---

## 堆优化 Dijkstra

### 适用场景
- 边权 **非负**
- 单源最短路
- 时间复杂度：\`O(E log V)\`

### 核心思想
贪心：每次从已确定最短路的点中，取出距离最小的点，用它去松弛相邻点。

### 转移方程（松弛操作）
\`\`\`cpp
if (dist[v] > dist[u] + w) {
    dist[v] = dist[u] + w;
}
\`\`\`

### 代码模板
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P; // first: 距离, second: 节点编号

void solve() {
    int n, m, s, t;
    cin >> n >> m >> s >> t;
    // 1. 建图（邻接表）
    vector<vector<pair<int, ll>>> g(n + 1);
    for (int i = 0; i < m; ++i) {
        int a, b;
        ll v;
        cin >> a >> b >> v;
        g[a].push_back({b, v});
        g[b].push_back({a, v}); // 如果是“有向图”，删掉这一行
    }
    // 2. 初始化距离数组
    const ll INF = 4e18;
    vector<ll> dist(n + 1, INF); // 记录目前已知的、去每个站的最短距离（初始全是问号）
    priority_queue<P, vector<P>, greater<P>> pq; //按距离排序,最近的在最上面
    dist[s] = 0;
    pq.push({0, s});
    // 3. 核心松弛操作
    while (!pq.empty()) {
        auto [d, u] = pq.top(); // 取出最近的距离 及 对应站点
        pq.pop();
        // 如果当前弹出的不是最新记录，跳过（防止旧数据重复处理）
        if (d != dist[u]) continue;
        for (auto [v, w] : g[u]) {
            if (dist[v] > dist[u] + w) { // 找到一条比记录的更近的路
                dist[v] = dist[u] + w; 
                pq.push({dist[v], v});
            }
        }
    }
    // 4. 输出结果
    if (dist[t] == INF) cout << -1 << '\\n';
    else cout << dist[t] << '\\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
\`\`\`

---

## 分层图最短路

### 适用场景
可以**免费/花费**走\`K\`条特殊边，或者状态有多个阶段（如“油量”、“电梯楼层”等）。

### 核心思想
将原图复制\`K+1\`层，层间用权值为\`0\`或特定值的边连接，表示使用一次特殊操作。跑一次 Dijkstra 即可。

### 建图方式（以“K次免费边”为例）
**·** 原图每一条边\`（u,v,w）\`：
    · 同一层内连边：\`（u,v,w），（v,u,w）\`
    · 层间连边：\`（u,v,0），（v,u,0）\`————表示一次免费机会
**·** 节点编号：\`id(u, k) = u + k * n，k\`表示当前层

### 代码模板：
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P;

void solve() {
    int n, m, K, s, t;
    cin >> n >> m >> K >> s >> t;
    vector<vector<pair<int, ll>>> base_g(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        ll w;
        cin >> u >> v >> w;
        base_g[u].push_back({v, w});
        base_g[v].push_back({u, w});
    }
    int N = n * (K + 1);
    vector<vector<pair<int, ll>>> g(N + 1);
    for (int u = 1; u <= n; ++u) {
        for (auto [v, w] : base_g[u]) {
            for (int k = 0; k <= K; ++k) {
                int id_u = u + k * n;
                int id_v = v + k * n;
                // 层内边
                g[id_u].push_back({id_v, w});
                // 层间边（使用一次免费）
                if (k < K) {
                    int id_next = v + (k + 1) * n;
                    g[id_u].push_back({id_next, 0});
                }
            }
        }
    }
    const ll INF = 4e18;
    vector<ll> dist(N + 1, INF);
    priority_queue<P, vector<P>, greater<P>> pq;
    dist[s] = 0;
    pq.push({0, s});
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d != dist[u]) continue;
        for (auto [v, w] : g[u]) {
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    ll ans = INF;
    for (int k = 0; k <= K; ++k) ans = min(ans, dist[t + k * n]);
    cout << (ans == INF ? -1 : ans) << '\\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
\`\`\`

---

## 带限制的最短路

### 适用场景
题目在最短路径基础上增加额外约束，例如：
**·** 求最短路径条数（计数）
**·** 求最大点权和（在最短路径中找点权和最大的）
**·** 多约束最短路

### 核心思想
在\`dist\`数组中增加维度来维护额外状态，转移时同时更新多个约束。

### 代码模板（以求最短路径条数为例）
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P;

void solve() {
    int n, m, s;
    cin >> n >> m >> s;
    vector<vector<pair<int, ll>>> g(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        ll w;
        cin >> u >> v >> w;
        g[u].push_back({v, w});
        g[v].push_back({u, w});
    }
    const ll INF = 4e18;
    vector<ll> dist(n + 1, INF);
    vector<int> cnt(n + 1, 0);
    priority_queue<P, vector<P>, greater<P>> pq;
    dist[s] = 0;
    cnt[s] = 1;
    pq.push({0, s});
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d != dist[u]) continue;
        for (auto [v, w] : g[u]) {
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                cnt[v] = cnt[u];
                pq.push({dist[v], v});
            } else if (dist[v] == dist[u] + w) {
                cnt[v] += cnt[u];
            }
        }
    }
    for (int i = 1; i <= n; ++i) cout << dist[i] << ' ' << cnt[i] << '\\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
\`\`\`

---

## A*算法（K短路）

### 适用场景
**·** 求第 K 短路径
**·** 启发式搜索
**·** 核心公式：\`f(n) = g(n) + h(n)\`
    · \`g(n)\`：从起点到当前点的实际距离
    · \`h(n)\`：从当前点到终点的估计距离（通常为反向图的最短路）

### 核心思想
用优先队列按\`f(n)\`排序，优先扩展估值更小的点。当终点第\`K\`次出队时，即为第\`K\`短路。

### 代码模板
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P;
typedef pair<ll, pair<ll, int>> P3; // {f, {g, u}}

const ll INF = 4e18;

// 预处理反向图最短路
vector<ll> dijkstra(int n, vector<vector<pair<int, ll>>>& g, int s) {
    vector<ll> dist(n + 1, INF);
    priority_queue<P, vector<P>, greater<P>> pq;
    dist[s] = 0;
    pq.push({0, s});
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d != dist[u]) continue;
        for (auto [v, w] : g[u]) {
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}

void solve() {
    int n, m, s, t, K;
    cin >> n >> m >> s >> t >> K;
    vector<vector<pair<int, ll>>> g(n + 1), rg(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        ll w;
        cin >> u >> v >> w;
        g[u].push_back({v, w});
        rg[v].push_back({u, w}); // 反向图
    }
    vector<ll> h = dijkstra(n, rg, t);
    if (h[s] == INF) {
        cout << -1 << '\\n';
        return;
    }
    priority_queue<P3, vector<P3>, greater<P3>> pq;
    pq.push({h[s], {0, s}});
    int cnt = 0;
    while (!pq.empty()) {
        auto [f, cur] = pq.top();
        pq.pop();
        auto [g_val, u] = cur;
        if (u == t) {
            ++cnt;
            if (cnt == K) {
                cout << g_val << '\\n';
                return;
            }
        }
        for (auto [v, w] : g[u]) {
            ll ng = g_val + w;
            ll nf = ng + h[v];
            pq.push({nf, {ng, v}});
        }
    }
    cout << -1 << '\\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
\`\`\`

---

## 双向 Dijkstra

### 适用场景
**·** 起点和终点都确定的单源最短路
**·** 在网格图等大规模图中效果显著
**·** 搜索空间从 \`O(b^d) 降至 O(b^{d/2})\`

### 核心思想
从起点和终点**同时**进行 Dijkstra，每次扩展距离更小的一侧，直到两侧相遇。

### 代码模板
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P;

const ll INF = 4e18;

void solve() {
    int n, m, s, t;
    cin >> n >> m >> s >> t;
    vector<vector<pair<int, ll>>> g(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        ll w;
        cin >> u >> v >> w;
        g[u].push_back({v, w});
        g[v].push_back({u, w});
    }
    vector<ll> dist_s(n + 1, INF), dist_t(n + 1, INF);
    vector<bool> vis_s(n + 1, false), vis_t(n + 1, false);
    priority_queue<P, vector<P>, greater<P>> pq_s, pq_t;
    dist_s[s] = 0;
    dist_t[t] = 0;
    pq_s.push({0, s});
    pq_t.push({0, t});
    ll ans = INF;
    while (!pq_s.empty() && !pq_t.empty()) {
        if (pq_s.top().first <= pq_t.top().first) {
            auto [d, u] = pq_s.top();
            pq_s.pop();
            if (vis_s[u]) continue;
            vis_s[u] = true;
            if (vis_t[u]) ans = min(ans, dist_s[u] + dist_t[u]);
            for (auto [v, w] : g[u]) {
                if (!vis_s[v] && dist_s[v] > dist_s[u] + w) {
                    dist_s[v] = dist_s[u] + w;
                    pq_s.push({dist_s[v], v});
                }
            }
        } 
        else {
            auto [d, u] = pq_t.top();
            pq_t.pop();
            if (vis_t[u]) continue;
            vis_t[u] = true;
            if (vis_s[u]) {
                ans = min(ans, dist_s[u] + dist_t[u]);
            }
            for (auto [v, w] : g[u]) {
                if (!vis_t[v] && dist_t[v] > dist_t[u] + w) {
                    dist_t[v] = dist_t[u] + w;
                    pq_t.push({dist_t[v], v});
                }
            }
        }
    }
    cout << (ans == INF ? -1 : ans) << '\\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
\`\`\``,views:0},{id:"图论之Kruskal",title:"图论之Kruskal",date:"2026-07-22",category:"算法",categories:["算法"],tags:["图论","最小生成树","Kruskal","Prim","重构树","次小生成树"],excerpt:"问题描述 给定一个带权连通图，求一棵生成树，使得树上所有边的权值之和最小，称为最小生成树（MST）。 --- Kruskal 算法 适用场景 边数较少的图（稀疏图） 时间复杂度：O(E log E) 核心思想 贪心 + 并查集：将所有边按权……",content:`## 问题描述

给定一个带权连通图，求一棵生成树，使得树上所有边的权值之和最小，称为**最小生成树（MST）**。

---

## Kruskal 算法

### 适用场景
- 边数较少的图（稀疏图）
- 时间复杂度：\`O(E log E)\`

### 核心思想
贪心 + 并查集：将所有边按权值从小到大排序，依次加入，若两端点不在同一连通块则合并。

### 代码模板
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

// ---------- 并查集（DSU） ----------
struct DSU {
    vector<int> parent, rnk; // parent[i] -> i的父节点, rnk[i] -> 以i为根的树的高度
    DSU(int n = 0) { init(n); }
    void init(int n) {
        parent.resize(n + 1);
        rnk.assign(n + 1, 0);
        for (int i = 1; i <= n; ++i) parent[i] = i;
    }
    int find(int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]); // 路径压缩
    }
    bool unite(int a, int b) {
        a = find(a), b = find(b);
        if (a == b) return false;
        if (rnk[a] < rnk[b]) swap(a, b);
        parent[b] = a;
        if (rnk[a] == rnk[b]) rnk[a]++;
        return true;
    }
};
// ---------- 边结构 ----------
struct Edge {
    int u, v, w;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

void solve() {
    int N, M;
    cin >> N >> M;
    vector<Edge> edges(M);
    for (int i = 0; i < M; ++i) {
        cin >> edges[i].u >> edges[i].v >> edges[i].w;
    }
    sort(edges.begin(), edges.end());
    DSU dsu(N);
    long long ans = 0;
    int cnt = 0;
    for (const Edge& e : edges) {
        if (dsu.unite(e.u, e.v)) {
            ans += e.w;
            cnt++;
            if (cnt == N - 1) break;
        }
    }
    if (cnt == N - 1) {
        cout << ans << '\\n';
    } else {
        cout << "orz\\n"; // 图不连通
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    // cin >> t;
    while (t--) solve();
    return 0;
}
\`\`\`

---

## 最大生成树

### 核心思想
只需将 Kruskal 的排序改为**从大到小**即可。

### 代码模板（仅改变排序方向）
\`\`\`cpp
sort(edges.begin(), edges.end(), [](const Edge& a, const Edge& b) {
    return a.w > b.w; // 从大到小
});
\`\`\`

## 最小生成森林

### 适用场景
图不连通时，Kruskal 跑完得到的就是**最小生成森林**（每个连通块各自的最小生成树）。

### 核心思想
**·** 跑完 Kruskal 后，统计合并次数 cnt。
**·** 如果 cnt < N - 1，说明图不连通，剩余部分构成森林。
**·** 每个连通块内的边权之和即为该块的最小生成树权值。

### 代码模板
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

// ---------- 并查集（DSU） ----------
struct DSU {
    vector<int> parent, rnk; // parent[i] -> i的父节点, rnk[i] -> 以i为根的树高度
    DSU(int n = 0) { init(n); }
    void init(int n) {
        parent.resize(n + 1);
        rnk.assign(n + 1, 0);
        for (int i = 1; i <= n; ++i) parent[i] = i;
    }
    int find(int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]); // 路径压缩
    }
    bool unite(int a, int b) {
        a = find(a), b = find(b);
        if (a == b) return false;
        if (rnk[a] < rnk[b]) swap(a, b);
        parent[b] = a;
        if (rnk[a] == rnk[b]) rnk[a]++;
        return true;
    }
};


struct Edge {
    int u, v, w;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

void solve() {
    int N, M;
    cin >> N >> M;
    vector<Edge> edges(M);
    for (int i = 0; i < M; ++i) {
        cin >> edges[i].u >> edges[i].v >> edges[i].w;
    }
    sort(edges.begin(), edges.end());
    DSU dsu(N);
    vector<bool> used(M, false); // 记录每条边是否被选入森林
    long long total_weight = 0;  // 森林总权值
    int cnt = 0;                 // 已选边数
    for (int i = 0; i < M; ++i) {
        if (dsu.unite(edges[i].u, edges[i].v)) {
            used[i] = true;
            total_weight += edges[i].w;
            cnt++;
            // 注意：不 break！要跑完所有边，形成森林
        }
    }
    // 情况1：图连通 -> 输出最小生成树总权值
    if (cnt == N - 1) {
        cout << "连通，MST总权值 = " << total_weight << '\\n';
    } 
    // 情况2：图不连通 -> 输出最小生成森林信息
    else {
        cout << "图不连通，最小生成森林由 " << (N - cnt) << " 个连通块组成\\n";
        cout << "森林总权值 = " << total_weight << '\\n';

        // 可选：输出每个连通块的信息
        // 统计每个连通块的根节点
        vector<vector<int>> components(N + 1);
        for (int i = 1; i <= N; ++i) {
            components[dsu.find(i)].push_back(i);
        }
        cout << "各连通块节点：\\n";
        for (int i = 1; i <= N; ++i) {
            if (!components[i].empty()) {
                cout << "  块" << i << "：";
                for (int x : components[i]) cout << x << ' ';
                cout << '\\n';
            }
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    // cin >> t; 
    while (t--) solve();
    return 0;
}
\`\`\`

---

## 次小生成树

### 问题描述
求一棵生成树，其权值和**严格大于**最小生成树，且在所有这样的生成树中权值最小。

### 核心思想
**·** 先求出 MST，并记录树边。
**·** 枚举每条**非树边** (u, v, w)，用它替换 MST 中 u 到 v 路径上的最大边，取最小值。
**·** 预处理：DFS / 倍增求 MST 上任意两点路径的最大边和次大边（用于处理严格次小）。

### 代码模板
\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int u, v, w;
    bool in_mst;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

struct DSU {
    vector<int> parent, rnk;
    DSU(int n = 0) { init(n); }
    void init(int n) {
        parent.resize(n + 1);
        rnk.assign(n + 1, 0);
        for (int i = 1; i <= n; ++i) parent[i] = i;
    }
    int find(int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    bool unite(int a, int b) {
        a = find(a), b = find(b);
        if (a == b) return false;
        if (rnk[a] < rnk[b]) swap(a, b);
        parent[b] = a;
        if (rnk[a] == rnk[b]) rnk[a]++;
        return true;
    }
};

const int LOG = 20;
const long long INF = 4e18;

void solve() {
    int N, M;
    cin >> N >> M;
    vector<Edge> edges(M);
    for (int i = 0; i < M; ++i) {
        cin >> edges[i].u >> edges[i].v >> edges[i].w;
        edges[i].in_mst = false;
    }
    sort(edges.begin(), edges.end());
    DSU dsu(N);
    vector<vector<pair<int, int>>> tree(N + 1);
    long long mst_weight = 0;
    int cnt = 0;
    for (auto& e : edges) {
        if (dsu.unite(e.u, e.v)) {
            e.in_mst = true;
            mst_weight += e.w;
            tree[e.u].push_back({e.v, e.w});
            tree[e.v].push_back({e.u, e.w});
            ++cnt;
            if (cnt == N - 1) break;
        }
    }
    // 倍增预处理（略，参考之前完整版）
    // ...
    long long ans = INF;
    for (auto& e : edges) {
        if (e.in_mst) continue;
        // 查询 e.u 到 e.v 路径上的最大边权
        // ans = min(ans, mst_weight - max_w + e.w);
    }
    cout << ans << '\\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    // cin >> t;
    while (t--) solve();
    return 0;
}
\`\`\`

---

## Borůvka 算法

### 适用场景
**·** 求解最小生成树的并行算法
**·** 在某些特定问题中复杂度更低，如完全图 MST
**·** 竞赛中较少直接考察，但可作为优化手段。

### 核心思想
1.初始时每个点都是一个连通块。
2.每一轮，为每个连通块找到连接它的权值最小的边（只考虑连接不同连通块的边）。
3.将所有选中的边加入 MST。
4.重复直到只剩一个连通块。

### 代码模板
\`\`\`cpp
void boruvka() {
    DSU dsu(N);
    int cnt = N;
    while (cnt > 1) {
        vector<int> best(N + 1, -1);
        for (int i = 0; i < M; ++i) {
            int fu = dsu.find(edges[i].u);
            int fv = dsu.find(edges[i].v);
            if (fu == fv) continue;
            if (best[fu] == -1 || edges[i].w < edges[best[fu]].w) {
                best[fu] = i;
            }
            if (best[fv] == -1 || edges[i].w < edges[best[fv]].w) {
                best[fv] = i;
            }
        }
        for (int i = 1; i <= N; ++i) {
            if (best[i] != -1) {
                if (dsu.unite(edges[best[i]].u, edges[best[i]].v)) {
                    ans += edges[best[i]].w;
                    --cnt;
                }
            }
        }
    }
}
\`\`\``,views:0},{id:"2026牛客暑期多校训练营3",title:"2026牛客暑期多校训练营3",date:"2026-07-24",category:"比赛总结",categories:["比赛总结"],tags:["ACM","2026","复盘"],excerpt:"比赛过程 K题 题意： 给定一条由 n 个航点 P 1 , P 2 ,···, P n 组成的路线，汽车沿线段依次行驶。对于每个中间航点 P i （2 u = P i − P i−1 和离开方向向量 v = P i+1 − P i 。根据两……",content:`## 比赛过程

### K题
**题意**：
<p>给定一条由 n 个航点 P<sub>1</sub>, P<sub>2</sub>,···, P<sub>n</sub>组成的路线，汽车沿线段依次行驶。对于每个中间航点 P<sub>i</sub>\`（2 <= i <= n - 1）\`，已知到达方向向量 <b><i>u</i></b> = P<sub>i</sub> − P<sub>i−1</sub> 和离开方向向量 <b><i>v</i></b> = P<sub>i+1</sub> − P<sub>i</sub>。根据两向量的旋转关系输出该点的转向：</p>
<ul>
    <li>若 <b><i>v</i></b> 由 <b><i>u</i></b> <b>逆时针旋转</b>（夹角 0° ~ 180°）→ <b>LEFT</b>；</li>
    <li>若 <b><i>v</i></b> 由 <b><i>u</i></b> <b>顺时针旋转</b> → <b>RIGHT</b>；</li>
    <li>若方向不变 → <b>STRAIGHT</b>。</li>
</ul>

---

**输入**：
每个测试文件包含多组测试数据。第一行包含测试数据的组数\`T（1 <= T <= 500）\`。每组测试数据的格式如下。
每组测试数据的第一行包含一个整数\`n（3 <= n <= 1e5）\`，表示路线上的航点数。
接下来\`n\`行，每行包含两个整数x<sub>i</sub>和y<sub>i</sub>\`（-1e9 <=\` x<sub>i</sub>\`,\`y<sub>i</sub> \`<= 1e9）\`，表示第\`i\`个航点P<sub>i</sub>的坐标，按汽车经过的顺序给出。保证每两个相邻航点互不相同（对所有\`1 <= i <= n - 1\`都有P<sub>i</sub> != P<sub>i+1</sub>），且汽车绝不会掉头（对所有\`2 <= i <= n - 1\`，从P<sub>i</sub>到P<sub>i+1</sub>的方向与从P<sub>i−1</sub>到P<sub>i</sub>的方向不会恰好相反）。
**输出**：
对于每组测试数据，输出中间航点P<sub>2</sub>,P<sub>3</sub>,···,P<sub>n−1</sub>的播报。每个播报是字符串\`LEFT、RIGHT\`或\`STRAIGHT\`之一。

---

**思路**：
观察P<sub>i-1</sub>到P<sub>i + 1</sub>这条直线，利用叉积计算判断P<sub>i</sub>是在该直线的左边、右边或者在该直线上，如果在左边则是向右转\`"RIGHT"\`，反之左转\`"LEFT"\`，若都不是则直行\`"STRAIGHT"\`。

**代码**：
\`\`\`cpp
#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

struct Point{
    long long x,y;
};

void solve() {
    int n;
    cin >> n;
    vector<Point> p(n + 1);
    for(int i = 1;i <= n;++i) cin >> p[i].x >> p[i].y;
    for(int i = 2;i < n;++i) {
        long long dx = p[i + 1].x - p[i - 1].x;
        long long dy = p[i + 1].y - p[i -1].y;
        long long P = dx * (p[i].y - p[i - 1].y) - dy * (p[i].x - p[i - 1].x);
        if(P > 0) cout << "RIGHT ";
        else if (P < 0) cout << "LEFT ";
        else cout << "STRAIGHT ";
    }
    cout << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    cin >> t;
    while(t--) solve();
    return 0;
}
\`\`\`

---

## 赛后补题

### B题
**题意**：
一瓶饮料售价 1 元。每次喝完一瓶饮料，小明以<sup>a</sup>&frasl;<sub>b</sub>的概率获奖，如果获奖，他将得到\`c\`元；否则什么也得不到。他得到的钱可以用来购买更多饮料。每瓶饮料的获奖事件相互独立。小明一开始有\`n\`元，求他恰好喝完\`m\`瓶饮料后花光所有钱的概率。

---

*输入**：  
每个测试文件包含多组测试数据。第一行包含测试数据的组数 T（1 ≤ T ≤ 200000）。  
接下来\`T\`行，每行包含五个整数\`n, m, c, a, b（1 <= n, m, c <= 200000，0 <= a < b < 998244353）\`，表示小明一开始有\`n\`元，每次获奖得到\`c\`元，获奖概率为\`a / b\`。
**输出**：  
输出\`T\`行，每行一个整数：对应答案对\`998244353\`取模的结果。

---

**思路**：  
设获奖概率为\`p = a / b\`，未获奖概率为\`q = 1 - p\`。  
小明共喝了\`m\`瓶，设其中获奖\`k\`次，则总资金变化必须满足最终资金为 0：
\`\`\`cpp
0 = n - m + c * k;
\`\`\`
因此必须有 m ≥ n 且 (m − n) 能被 c 整除，令 k = (m − n) / c。若条件不满足则答案直接为 0。
接下来考虑获奖位置序列的合法性（中途不能提前花光）。  
定义序列 {a<sub>i</sub>}（i = 1..m）表示每瓶喝完后相对资金消耗的“净积累”：
- 若未获奖：净消耗 1 元，记 a<sub>i</sub> = 1；
- 若获奖：净消耗 1 − c 元（花掉 1 元，得到 c 元），记 a<sub>i</sub> = 1 − c。
显然 a<sub>i</sub> ≤ 1，且序列总和为：
\`\`\`cpp
sum(a[i]) = (m - k) * 1 + k * (1 - c) = m - k * c = n
\`\`\`
喝完第 t 瓶后的剩余资金为 n − sum(a[1..t])。  
恰好喝完 m 瓶且中途不提前花光，等价于：
\`\`\`cpp
sum(a[1..t]) < n   (1 <= t < m) 
sum(a[1..m]) == n
\`\`\`
由**Raney 引理**：若整数序列 {a<sub>i</sub>} 满足 a<sub>i</sub> ≤ 1 且总和为正整数 n，则在其 m 个循环移位中，**恰好有 n 个**移位满足所有前缀和严格小于总和 n。  
因此，在所有\`C(m,k)\`个含有\`k\`个\`(1-c)\`和\`(m-k)\`个 1 的序列中，满足“前缀和始终 < n”的序列数量为：
\`\`\`cpp
n / m * C(m, k)   // 注意这里 n/m 是数学上的有理数，实际计算时乘以 n 再乘 m 的逆元
\`\`\`
每种合法获奖序列出现的概率均为 p<sup>k</sup> q<sup>m−k</sup>，故最终概率为：
\`\`\`cpp
ans = (n / m) * C(m, k) * p^k * q^(m-k)
\`\`\`
在模 998244353 意义下预处理阶乘逆元，快速幂计算组合数与概率即可。

**代码**：
\`\`\`cpp
#include <iostream>
#include <vector>
using namespace std;

const long long MOD = 998244353;
const int MAXN = 2000005;

vector<long long> fact(MAXN), invfact(MAXN);

long long mod_pow(long long a, long long b) {
    long long res = 1;
    a %= MOD;
    while (b) {
        if (b & 1) res = res * a % MOD;
        a = a * a % MOD;
        b >>= 1;
    }
    return res;
}

void init() {
    fact[0] = 1;
    for (int i = 1; i < MAXN; ++i) fact[i] = fact[i - 1] * i % MOD;
    invfact[MAXN - 1] = mod_pow(fact[MAXN - 1], MOD - 2);
    for (int i = MAXN - 2; i >= 0; --i)
        invfact[i] = invfact[i + 1] * (i + 1) % MOD;
}

long long C(int n, int k) {
    if (k < 0 || k > n) return 0;
    return fact[n] * invfact[k] % MOD * invfact[n - k] % MOD;
}

void solve() {
    long long n, m, c, a, b;
    cin >> n >> m >> c >> a >> b;
    if (n > m || (m - n) % c != 0) {
        cout << 0 << "\\n";
        return;
    }
    long long k = (m - n) / c;
    if (k > m || k < 0) {
        cout << 0 << "\\n";
        return;
    }
    long long p = a * mod_pow(b, MOD - 2) % MOD;
    long long q = (1 - p + MOD) % MOD;

    long long ans = C(m, k);
    ans = ans * (n % MOD) % MOD;
    ans = ans * mod_pow(m, MOD - 2) % MOD;
    ans = ans * mod_pow(p, k) % MOD;
    ans = ans * mod_pow(q, m - k) % MOD;
    cout << ans << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    init();
    int T;
    cin >> T;
    while (T--) solve();
    return 0;
}
\`\`\`

---

### G题
**题意**：  
给定一个 n &times; m 的数字网格，每个格子中包含一个正整数。  
如果存在两个格子 (r<sub>1</sub>, c<sub>1</sub>) 和 (r<sub>2</sub>, c<sub>2</sub>) 满足 r<sub>1</sub> < r<sub>2</sub> 且 c<sub>1</sub> < c<sub>2</sub>，且这两个格子中的数字相等，那么所有满足 r<sub>1</sub> &le; r &le; r<sub>2</sub> 且 c<sub>1</sub> &le; c &le; c<sub>2</sub> 的格子 (r, c) 都会被标记。  
输出整个网格最终的标记情况（1 表示被标记，0 表示未被标记）。

---

**输入**：  
每个测试文件仅包含一组测试数据。  
第一行包含两个整数 n, m（1 &le; n, m, n&times;m &le; 100000）。  
接下来 n 行，每行包含 m 个整数；其中第 i 行包含 a<sub>i,1</sub>, a<sub>i,2</sub>, …, a<sub>i,m</sub>（1 &le; a<sub>i,j</sub> &le; n&times;m）。
**输出**：  
输出 n 行，每行一个长度为 m，由字符 0 和 1 组成的字符串。

--- 

**思路**：
网格总点数不超过 10<sup>5</sup>，考虑按数值分组处理。
对于同一个数值 v，记录它在每一行出现的最小列和最大列（若该行有出现）。  
对于两行 r<sub>1</sub> < r<sub>2</sub>，设 mn 为第 r<sub>1</sub> 行中该值出现的最小列，mx 为第 r<sub>2</sub> 行中该值出现的最大列。  
若 mn < mx，则存在两个点 (r<sub>1</sub>, mn) 和 (r<sub>2</sub>, mx) 满足条件，因此行区间 [r<sub>1</sub>, r<sub>2</sub>] 和列区间 [mn, mx] 内的所有格子都应被标记一次。用二维差分标记该矩形即可。
若直接枚举行对，当行数较大时可能超时。注意到 n&times;m &le; 10<sup>5</sup>，若 n > m 则将矩阵转置，使得行数 n' &le; &radic;10<sup>5</sup> &approx; 316，此时行对数量最多约 5&times;10<sup>4</sup>，可以接受。最后通过二维前缀和还原每个格子的覆盖次数，输出非零格子为 1。

**代码**：
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

void solve() {
    int n, m;
    cin >> n >> m;
    bool trans = false;
    if (n > m) { // 转置，使行数不超过列数
        trans = true;
        swap(n, m);
    }
    vector<vector<int>> a(n, vector<int>(m));
    if (!trans) {
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < m; ++j)
                cin >> a[i][j];
    } else {
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int x;
                cin >> x;
                a[j][i] = x;
            }
        }
    }
    int maxVal = n * m;
    vector<vector<pair<int, int>>> pos(maxVal + 1);
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < m; ++j)
            pos[a[i][j]].push_back({i, j});
    vector<vector<int>> diff(n + 1, vector<int>(m + 1, 0));
    vector<int> minCol(n, INT_MAX), maxCol(n, -1);
    vector<int> rows;
    for (int v = 1; v <= maxVal; ++v) {
        auto &vec = pos[v];
        if (vec.size() < 2) continue;
        rows.clear();
        for (auto &p : vec) {
            int r = p.first, c = p.second;
            if (minCol[r] == INT_MAX) {
                rows.push_back(r);
                minCol[r] = maxCol[r] = c;
            } else {
                minCol[r] = min(minCol[r], c);
                maxCol[r] = max(maxCol[r], c);
            }
        }
        sort(rows.begin(), rows.end());
        int sz = rows.size();
        for (int i = 0; i < sz; ++i) {
            int r1 = rows[i];
            int mn = minCol[r1];
            for (int j = i + 1; j < sz; ++j) {
                int r2 = rows[j];
                int mx = maxCol[r2];
                if (mn < mx) {
                    diff[r1][mn] += 1;
                    diff[r1][mx + 1] -= 1;
                    diff[r2 + 1][mn] -= 1;
                    diff[r2 + 1][mx + 1] += 1;
                }
            }
        }
        for (int r : rows) {
            minCol[r] = INT_MAX;
            maxCol[r] = -1;
        }
    }
    // 二维前缀和还原覆盖次数
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            if (i) diff[i][j] += diff[i - 1][j];
            if (j) diff[i][j] += diff[i][j - 1];
            if (i && j) diff[i][j] -= diff[i - 1][j - 1];
        }
    }
    if (!trans) {
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j)
                cout << (diff[i][j] > 0 ? "1" : "0");
            cout << "\\n";
        }
    } else {
        // 恢复转置前的输出
        for (int j = 0; j < m; ++j) {
            for (int i = 0; i < n; ++i)
                cout << (diff[i][j] > 0 ? "1" : "0");
            cout << "\\n";
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
\`\`\`

---`,views:0},{id:"2026牛客暑期多校训练营4",title:"2026牛客暑期多校训练营4",date:"2026-07-29",category:"比赛总结",categories:["比赛总结"],tags:["ACM","2026","复盘"],excerpt:`比赛过程 I题 题意： 设 T 1 = "Rounddog"。对于每个整数 i &gt; 1，定义 T i = T i-1 + "g"，其中 + 表示字符串拼接。换句话说，T i 是字符串 "Rounddo" 后面紧跟着恰好 i 个字符 '……`,content:`## 比赛过程\r
\r
### I题\r
**题意**：\r
<p>设 T<sub>1</sub> = "Rounddog"。对于每个整数 i &gt; 1，定义 T<sub>i</sub> = T<sub>i-1</sub> + "g"，其中 + 表示字符串拼接。换句话说，T<sub>i</sub> 是字符串 "Rounddo" 后面紧跟着恰好 i 个字符 'g'。</p>\r
<p>给定一个字符串 S 和一个整数 k。考虑 S 的所有循环移位（字符串 S 的一个循环移位是通过选择一个位置，并将该位置之前的前缀移动到字符串末尾得到的）。你的任务是统计有多少个 S 的循环移位包含 T<sub>k</sub> 作为一个连续子串。</p>\r
\r
---\r
\r
**输入**：\r
第一行包含一个整数 t\`（1 <= t <= 10^5）\`，表示测试用例的数量。\r
对于每个测试用例，第一行包含一个字符串 S\`（1 <= |S| <= 10^5）\`。第二行包含一个整数 k\`（1 <= k <= 100）\`。\r
保证所有测试用例中 |S| 的总和不超过 \`10^5\`，并且 S 只包含大写字母和小写字母。\r
**输出**：\r
对于每个测试用例，输出一个整数，表示包含 T<sub>k</sub> 作为连续子串的循环移位数量。\r
\r
---\r
\r
**思路**：\r
由于循环移位可以通过将字符串复制一份拼接在后面来处理，令 \`t = s + s\`，则 s 的所有循环移位都对应 t 中长度为 sz 的连续子串。\r
目标子串 target = "Rounddo" + k 个 'g'，长度为 \`7 + k\`。\r
在 t 中查找所有 target 的出现位置 pos，对于每个 pos，它对应的循环移位起始位置 i 必须满足：\r
- i ≤ pos（target 起点在移位字符串内）\r
- i + sz - 1 ≥ pos + 7 + k - 1（target 终点在移位字符串内）→ i ≥ pos + 7 + k - sz\r
因此 i 的范围是 \`[max(0, pos + 7 + k - sz), min(sz - 1, pos)]\`。\r
用差分数组 diff 标记所有这些区间，最后做前缀和统计有多少个位置被覆盖，即为答案。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <iostream>\r
#include <vector>\r
#include <string>\r
#include <algorithm>\r
#include <cmath>\r
#include <queue>\r
#include <stack>\r
#include <set>\r
#include <map>\r
#include <unordered_set>\r
#include <unordered_map>\r
#include <numeric>\r
#include <iomanip>\r
#include <utility>\r
#include <tuple>\r
using namespace std;\r
\r
const int MOD = 1e9 + 7;\r
const int INF = 0x3f3f3f3f;\r
const long long LINF = 4e18;\r
using ll = long long;\r
\r
void solve() {\r
    string s;\r
    int k;\r
    cin >> s >> k;\r
    string t = s + s;\r
    int sz = s.size();\r
    string target = "Rounddo" + string(k,'g');\r
    vector<int> diff(sz + 1,0);\r
    auto pos = t.find(target);\r
    while(pos != string::npos) {\r
        int l = max(0,(int)pos + 7 + k - sz);\r
        int r = min(sz - 1,(int)pos);\r
        if(l <= r) {\r
            diff[l]++;\r
            diff[r + 1]--;\r
        }\r
        pos = t.find(target,pos + 1);\r
    }\r
    int ans = 0,cur = 0;\r
    for(int i = 0;i < sz;++i) {\r
        cur += diff[i];\r
        if(cur > 0) ans++;\r
    }\r
    cout << ans << "\\n";\r
}\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int T = 1;\r
    cin >> T;\r
    while (T--) solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---\r
\r
## 赛后补题\r
\r
### B题\r
**题意**：\r
<p>给定一个正整数 p，你的任务是找到三个正整数 x<sub>1</sub>、x<sub>2</sub> 和 q，使得：</p>\r
<ul>\r
    <li>1 ≤ x<sub>1</sub> &lt; q，1 ≤ x<sub>2</sub> &lt; p；</li>\r
    <li>x<sub>1</sub><sup>2</sup> ≡ p (mod q)；</li>\r
    <li>x<sub>2</sub><sup>2</sup> ≡ q (mod p)。</li>\r
</ul>\r
<p>这里，a ≡ b (mod c) 表示 a 除以 c 的余数与 b 除以 c 的余数相同。如果存在多个解，输出任意一组合法的整数 (x<sub>1</sub>, x<sub>2</sub>, q) 即可。如果不存在这样的整数，则报告无法做到。</p>\r
\r
---\r
\r
**输入**：\r
第一行包含一个整数 T\`（1 <= T <= 10^4）\`，表示测试用例的数量。\r
接下来 T 行，每行包含一个整数 p\`（2 <= p <= 10^9）\`。\r
**输出**：\r
对于每个测试用例，输出一行：如果存在解，输出三个整数 x<sub>1</sub>、x<sub>2</sub> 和 q\`（1 <= q <= 10^12，1 <= x1 < q，1 <= x2 < p）\`，用空格分隔；如果不存在解，输出单词 Impossible。\r
\r
---\r
\r
**思路**：\r
构造性解法。令 x<sub>1</sub> = x<sub>2</sub> = x，q = x² − p，验证两个同余条件：\r
1. x<sub>1</sub><sup>2</sup> = x² = q + p ≡ p (mod q) ✓（因为 q + p 模 q 等于 p）\r
2. x<sub>2</sub><sup>2</sup> = x² = q + p，因此 x² mod p = (q + p) mod p = q mod p，即 x<sub>2</sub><sup>2</sup> ≡ q (mod p) ✓\r
\r
接下来选择合适的 x 满足边界条件：\r
- x < p：取 x = ⌈√(2p)⌉，当 p > 2 时 √(2p) < p 成立。\r
- x < q：q = x² − p > x → x² − x − p > 0，当 x ≥ ⌈√(2p)⌉ 时显然成立。\r
- q ≤ 10¹²：x ≈ √(2p) ≤ √(2 × 10⁹) ≈ 44721，x² ≈ 2 × 10⁹ ≤ 10¹²，满足。\r
\r
对于 p = 2 和 p = 3 的小情况直接特判输出。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <bits/stdc++.h>\r
using namespace std;\r
\r
using ll = long long;\r
\r
void solve() {\r
    ll p;\r
    cin >> p;\r
    if (p == 2) {\r
        cout << "12 1 71\\n";\r
        return;\r
    }\r
    if (p == 3) {\r
        cout << "4 1 13\\n";\r
        return;\r
    }\r
    ll x = sqrt(2.0 * p);\r
    while (x * x < 2 * p) ++x;\r
    ll q = x * x - p;\r
    cout << x << ' ' << x << ' ' << q << '\\n';\r
}\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int T;\r
    cin >> T;\r
    while (T--) solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---`,views:0},{id:"2026牛客暑期多校训练营5",title:"2026牛客暑期多校训练营5",date:"2026-08-04",category:"比赛总结",categories:["比赛总结"],tags:["ACM","2026","复盘"],excerpt:"赛后补题 E题 题意： 在数论领域，我们称一个函数 f(n) 是完全积性函数，当且仅当： ∀a·b = n, s.t. f(n) = f(a) · f(b) 这种积性这对 n 的每个非平凡的分解也都成立。也就是说， ∀n = w₁·w₂··……",content:`## 赛后补题\r
\r
### E题 \r
**题意**：\r
<p>在数论领域，我们称一个函数 f(n) 是完全积性函数，当且仅当：</p>\r
<p style="text-align: center;">∀a·b = n, s.t. f(n) = f(a) · f(b)</p>\r
<p>这种积性这对 n 的每个非平凡的分解也都成立。也就是说，</p>\r
<p style="text-align: center;">∀n = w₁·w₂···w<sub>k</sub>, 1 &lt; w<sub>i</sub> &lt; n, s.t. f(n) = f(w₁)·f(w₂)···f(w<sub>k</sub>)</p>\r
<p>古明地恋不喜欢积性，于是她提出了一个完全非积性函数 g(n)，希望满足：</p>\r
<p style="text-align: center;">∀n = w₁·w₂···w<sub>k</sub>, 1 &lt; w<sub>i</sub> &lt; n, s.t. g(n) ≠ g(w₁)·g(w₂)···g(w<sub>k</sub>)</p>\r
<p>为了让问题更简单，古明地恋做了如下定义：</p>\r
<p style="text-align: center;">g(n) = 1, n = 1</p>\r
<p style="text-align: center;">g(n) = mex( { ∏g(w<sub>i</sub>) | n = ∏w<sub>i</sub>, 1 &lt; w<sub>i</sub> &lt; n } ∪ {0} ), n = 2, 3, 4, ···</p>\r
<p>其中 mex(S) 表示集合 S 中未出现过的最小的自然数。</p>\r
<p>古明地恋总是无意识少女，她希望你帮她计算 g 函数的值。具体而言，古明地恋会给你整数 N 以及参数 c（1 ≤ N ≤ 10⁷，1 ≤ c &lt; 998,244,353），你需要告诉她：</p>\r
<p style="text-align: center;">ans = ( ∑<sub>i=1</sub><sup>N</sup> g(i) × c<sup>i</sup> ) mod 998,244,353</p>\r
\r
---\r
\r
**输入**：\r
第一行包含两个整数 N, c\`（1 <= N <= 10^7，1 <= c < 998244353）\`。\r
**输出**：\r
输出一个整数，表示答案。\r
\r
---\r
\r
**思路**：\r
通过手动计算小值可以发现一个关键结论：**g(n) 的值仅由 n 的质因子个数（带重数）Ω(n) 决定**，且 g(n) 等于第 Ω(n) - 1 个质数（第 0 个"质数"定义为 1）。即：\r
\r
- Ω(n) = 1（质数）→ g(n) = 1\r
- Ω(n) = 2 → g(n) = 2\r
- Ω(n) = 3 → g(n) = 3\r
- Ω(n) = 4 → g(n) = 5\r
- Ω(n) = k → g(n) = 第 k-1 个质数\r
\r
**证明思路**：用数学归纳法。假设对于所有质因子个数小于 k 的数，结论成立。考虑 Ω(n) = k 的数 n，其所有非平凡分解对应的各因子质因子个数之和为 k，因此 g 值的乘积恰好是若干质数相乘，其所有可能的乘积值恰好覆盖 1 到 p_{k-1}-1 之间的所有整数，而 p_{k-1} 无法被表示，故 mex 结果为 p_{k-1}。\r
\r
因此，解法为：\r
1. 用线性筛法预处理出 1 到 n 每个数的 Ω(i)（质因子总数，带重数）；\r
2. 同时筛出所有质数，按顺序存入 pri 数组，令 pri[0] = 1，pri[i] = 第 i 个质数；\r
3. 从 n 倒序枚举到 1，维护答案 ans：每次先将 g(i) = pri[Ω(i)-1] 加入 ans，再将 ans 乘以 c。倒序乘 c 的技巧等价于在累加时自动乘上 c^i。\r
\r
时间复杂度 O(N)，空间复杂度 O(N)，可以通过 N = 10⁷ 的数据规模。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <bits/stdc++.h>\r
using namespace std;\r
\r
using ll = long long;\r
const ll MOD = 998244353;\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int n; ll c;\r
    cin >> n >> c;\r
    vector<int> primes;\r
    primes.reserve(n / 10);\r
    vector<int> omega(n + 1, 0); // 质因子总数（带重数）\r
    vector<bool> isComp(n + 1, false);\r
    omega[1] = 1; // 特殊处理，使得索引有效\r
    for (int i = 2; i <= n; ++i) {\r
        if (!isComp[i]) {\r
            primes.push_back(i);\r
            omega[i] = 1; // 质数，因子数为1\r
        }\r
        for (int p : primes) {\r
            if (1LL * i * p > n) break;\r
            isComp[i * p] = true;\r
            omega[i * p] = omega[i] + 1;\r
            if (i % p == 0) break;\r
        }\r
    }\r
    vector<ll> pri(primes.size() + 1);\r
    pri[0] = 1;\r
    for (int i = 0; i < (int)primes.size(); ++i) pri[i + 1] = primes[i];\r
    ll ans = 0;\r
    for (int i = n; i >= 1; --i) {\r
        int idx = omega[i] - 1;\r
        ans = (ans + pri[idx]) % MOD;\r
        ans = ans * c % MOD;\r
    }\r
    cout << ans << '\\n';\r
    return 0;\r
}\r
\`\`\`\r
\r
---`,views:0},{id:"2026牛客暑期多校训练营6",title:"2026牛客暑期多校训练营6",date:"2026-08-09",category:"比赛总结",categories:["比赛总结"],tags:["ACM","2026","复盘"],excerpt:"赛后补题 F题 题意： 在本题中，字母表被定义为小写英文字母从 a 到 z 的一个排列。在字母表 A 下，字母 x 的字典序小于字母 y 当且仅当在 A 中 x 出现在 y 之前。 在字母表 A 下，字符串 s 的字典序小于字符串 t 当且……",content:`## 赛后补题\r
\r
### F题\r
**题意**：\r
<p>在本题中，字母表被定义为小写英文字母从 a 到 z 的一个排列。在字母表 A 下，字母 x 的字典序小于字母 y 当且仅当在 A 中 x 出现在 y 之前。</p>\r
<p>在字母表 A 下，字符串 s 的字典序小于字符串 t 当且仅当满足以下两个条件之一：</p>\r
<ul>\r
<li>s 是 t 的真前缀。</li>\r
<li>存在一个整数 i (1 ≤ i ≤ min(|s|, |t|))，使得对于所有的 1 ≤ j &lt; i 都有 s<sub>j</sub> = t<sub>j</sub>，并且在字母表 A 下 s<sub>i</sub> 的字典序小于 t<sub>i</sub>。</li>\r
</ul>\r
<p>在字母表 A 下，字符串 s 被称为一个 Lyndon 串，当且仅当在 A 下它的字典序严格小于其所有的非空真后缀。</p>\r
<p>给定一个字符串 s。请计算有多少种不同的字母表 A 使得 s 在 A 下是一个 Lyndon 串。由于答案可能很大，请输出其对 2<sup>32</sup> 取模后的余数。</p>\r
\r
---\r
\r
**输入**：\r
每个测试点仅包含一行，给出一个字符串 s（2 ≤ |s| ≤ 2·10⁷）。\r
**输出**：\r
输出一个整数，表示使得 s 在字母表 A 下是 Lyndon 串的不同字母表 A 的数量对 2³² 取模的结果。\r
\r
---\r
\r
**思路**：\r
Lyndon 串的定义是：字符串严格小于它所有的非空真后缀。对于每个后缀 i（从第 i 个字符开始的后缀，2 ≤ i ≤ n），我们需要满足 s < s[i...n]。\r
\r
对于每个后缀 i，计算它与原串的最长公共前缀 lcp（即 Z 函数值 z[i]）：\r
- 如果 z[i] = n - i + 1，说明该后缀是原串的前缀，即 s 是某个串的重复，此时无论什么字母表都不可能满足 s 严格小于该后缀，直接输出 0。\r
- 否则，第一个不同的位置：原串在位置 z[i]+1，后缀在位置 i+z[i]。记 v = s[z[i]+1]，u = s[i+z[i]]。要满足 s < s[i...n]，必须有 v 在字母表中的顺序小于 u，即 v 出现在 u 之前。\r
\r
因此，问题转化为：统计 26 个字母的全排列中，满足所有形如 "v 必须在 u 之前" 的偏序约束的排列数。\r
\r
使用状态压缩 DP 求解：\r
- dp[mask]：已经选了 mask 集合内的字母，满足所有约束条件的排列方案数。\r
- g[j]：bitmask，保存所有必须出现在字母 j 之前的字母集合。\r
- 初始状态：dp[0] = 1。\r
- 转移：枚举每个 mask，对于每个未选的字母 j，如果 mask 包含了 g[j] 的全部位（即 j 的所有前驱约束都已满足），则 dp[mask | (1<<j)] += dp[mask]。\r
- 答案为 dp[(1<<26)-1]。\r
\r
使用 unsigned int 类型，利用无符号整数自然溢出自动完成对 2³² 取模。\r
\r
时间复杂度：Z 函数 O(n)，状压 DP O(2²⁶ × 26)，可以通过。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <bits/stdc++.h>\r
\r
using namespace std;\r
\r
vector<int> z_function_1based(const string& s) {\r
    int n = (int)s.size() - 1;\r
    vector<int> f(n + 1, 0);\r
    if (n == 0) return f;\r
    f[1] = n;\r
    int x = 2;\r
    if (2 <= n) {\r
        while (2 + f[2] <= n && s[1 + f[2]] == s[2 + f[2]]) f[2]++;\r
        x = 2;\r
    }\r
    for (int i = 3; i <= n; ++i) {\r
        if (f[i - x + 1] >= x + f[x] - i) {\r
            f[i] = max(0, x + f[x] - i);\r
            while (i + f[i] <= n && s[1 + f[i]] == s[i + f[i]]) f[i]++;\r
            x = i;\r
        } else {\r
            f[i] = f[i - x + 1];\r
        }\r
    }\r
    return f;\r
}\r
\r
void solve() {\r
    string s;\r
    cin >> s;\r
    s = " " + s;\r
    int n = (int)s.size() - 1;\r
    auto f = z_function_1based(s);\r
\r
    array<int, 26> g{};\r
    const int FULL = 1 << 26;\r
    vector<unsigned int> dp(FULL, 0);\r
\r
    for (int i = 2; i <= n; ++i) {\r
        if (f[i] == n - i + 1) {\r
            cout << 0 << '\\n';\r
            return;\r
        }\r
        int u = s[i + f[i]] - 'a';\r
        int v = s[f[i] + 1] - 'a';\r
        g[u] |= (1 << v);\r
    }\r
\r
    dp[0] = 1;\r
    for (int mask = 0; mask < FULL - 1; ++mask) {\r
        if (dp[mask] == 0) continue;\r
        for (int j = 0; j < 26; ++j) {\r
            if ((mask & (1 << j)) == 0 && (mask & g[j]) == g[j]) {\r
                dp[mask | (1 << j)] += dp[mask];\r
            }\r
        }\r
    }\r
    cout << dp[FULL - 1] << '\\n';\r
}\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---`,views:0},{id:"2026牛客暑期多校训练营7",title:"2026牛客暑期多校训练营7",date:"2026-08-09",category:"比赛总结",categories:["比赛总结"],tags:["ACM","2026","复盘"],excerpt:"比赛过程 D题 题意： 天下第一武道会汇聚了来自世界各地的 n 名武道家。这些选手的编号依次为 1, 2, ..., n。比赛开始前，两位大会工作人员分别提交了一份固定的优先级名单 P 和 Q。每份名单都恰好包含所有选手一次，但选手在两份名……",content:`## 比赛过程\r
\r
### D题\r
**题意**：\r
<p>天下第一武道会汇聚了来自世界各地的 n 名武道家。这些选手的编号依次为 1, 2, ..., n。比赛开始前，两位大会工作人员分别提交了一份固定的优先级名单 P 和 Q。每份名单都恰好包含所有选手一次，但选手在两份名单中的排列顺序可能不同。</p>\r
<p>初始时，P = (p₁, p₂, ..., pₙ)，Q = (q₁, q₂, ..., qₙ)，其中两个序列都是 1, 2, ..., n 的排列。名单提交后，不能再改变其中选手的相对顺序。大会委员会按照以下规则模拟比赛：</p>\r
<p>只要仍有至少两名选手尚未淘汰，就可以进行一场比赛。令 u 和 v 分别为名单 P 和 Q 中第一个尚未淘汰的选手：</p>\r
<ul>\r
<li>如果 u = v，说明两位工作人员提名了同一名选手。由于一名选手不能与自己交手，并且工作人员不能跳过各自名单中的第一名选手，因此模拟将陷入僵局，无法再举行任何比赛。</li>\r
<li>否则，选手 u 和 v 将进行对战。在模拟中，选择一名选手 z ∈ {u, v} 作为败者。选手 z 将被淘汰，因此需要从 P 和 Q 中同时删除 z。两个名单中其余选手的相对顺序保持不变。</li>\r
</ul>\r
<p>在恰好进行了 n-1 场成功的比赛后，只会剩下一名选手。这名选手将成为天下第一武道会的冠军。你支持编号为 x 的选手。请判断是否存在一种比赛结果，使得模拟过程中从不陷入僵局，并最终让选手 x 成为冠军。如果存在，请输出任意一种合法的选手淘汰顺序。</p>\r
\r
---\r
\r
**输入**：\r
第一行包含两个整数 n 和 x（2 ≤ n ≤ 2×10⁵，1 ≤ x ≤ n），分别表示参赛选手的数量以及你希望成为冠军的选手编号。\r
第二行包含 n 个整数 p₁, p₂, ..., pₙ，保证 P 是 1, 2, ..., n 的一个排列。\r
第三行包含 n 个整数 q₁, q₂, ..., qₙ，保证 Q 是 1, 2, ..., n 的一个排列。\r
**输出**：\r
如果无法在模拟不陷入僵局的前提下让选手 x 成为冠军，在一行中输出 NO。\r
否则，首先在一行中输出 YES。第二行输出 n-1 个整数 z₁, z₂, ..., zₙ₋₁，表示在第 i 场比赛中被淘汰的选手。\r
\r
---\r
\r
**思路**：\r
双指针贪心策略。用两个指针 i 和 j 分别指向名单 P 和 Q 中第一个未淘汰的选手，用 used 数组标记已淘汰的选手。\r
\r
核心策略：\r
1. 每次找到 P 和 Q 中第一个未淘汰的选手 u 和 v。\r
2. 如果 u == v：如果此时已经淘汰了 n-1 人（剩下的就是 x），则结束；否则陷入僵局，输出 NO。\r
3. 如果 u != x 且 v != x：比较 u 在 Q 中的位置和 v 在 P 中的位置。如果 u 在 Q 中出现得更早（posQ[u] < posP[v]），说明 u 更容易在后续造成冲突，优先淘汰 u；否则优先淘汰 v。\r
4. 如果其中一个是 x：淘汰另一个非 x 的选手。\r
\r
这样做的目的是尽量推迟 x 的出现，同时避免两个指针指向同一个非 x 选手导致僵局。\r
\r
时间复杂度 O(n)，可以通过 n = 2×10⁵ 的数据规模。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <iostream>\r
#include <vector>\r
using namespace std;\r
\r
void solve() {\r
    int n, x;\r
    cin >> n >> x;\r
    vector<int> p(n), q(n);\r
    vector<int> posP(n + 1), posQ(n + 1);\r
    for (int i = 0; i < n; ++i) {\r
        cin >> p[i];\r
        posP[p[i]] = i;\r
    }\r
    for (int i = 0; i < n; ++i) {\r
        cin >> q[i];\r
        posQ[q[i]] = i;\r
    }\r
    vector<int> ans;\r
    vector<bool> used(n + 1, false);\r
    int i = 0, j = 0;\r
    while (ans.size() < n - 1) {\r
        while (i < n && used[p[i]]) i++;\r
        while (j < n && used[q[j]]) j++;\r
        int u = p[i], v = q[j];\r
        if (u == v) {\r
            if (u == x && ans.size() == n - 1) break;\r
            cout << "NO\\n";\r
            return;\r
        }\r
        if (u != x && v != x) {\r
            if (posQ[u] < posP[v]) {\r
                ans.push_back(u);\r
                used[u] = true;\r
                i++;\r
            } else {\r
                ans.push_back(v);\r
                used[v] = true;\r
                j++;\r
            }\r
        } else if (u != x) {\r
            used[u] = true;\r
            ans.push_back(u);\r
            i++;\r
        } else {\r
            used[v] = true;\r
            ans.push_back(v);\r
            j++;\r
        }\r
    }\r
    if (ans.size() != n - 1) {\r
        cout << "NO\\n";\r
        return;\r
    }\r
    cout << "YES\\n";\r
    for (int val : ans) {\r
        cout << val << " ";\r
    }\r
    cout << "\\n";\r
}\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int t = 1;\r
    // cin >> t;\r
    while (t--) solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---\r
\r
### K题\r
**题意**：\r
<p>在使用 D-Mail 解读了 SERN 秘密数据库中的部分内容后，未来道具研究所发现了一份与时间旅行实验有关的研究机构名单。冈部伦太郎想在一封 D-Mail 中提及这些机构。由于 D-Mail 中能够使用的空间有限，桥田至（桶子）决定为每个机构分配一个简短且唯一的缩写。</p>\r
<p>最初，一个机构的缩写由其名称中每个单词的首字母依次连接而成，字母之间不添加空格。随后，桶子会反复细化每个仍与其他机构共用的缩写。</p>\r
<p>第一次细化某个缩写时，他会将对应机构名称中的第一个单词完整写出，而不再只使用它的首字母。第二次细化时，他还会将第二个单词完整写出，依此类推。</p>\r
<p>例如，Future Gadget Laboratory 的缩写会按照以下过程变化：FGL → FutureGL → FutureGadgetL → FutureGadgetLaboratory。</p>\r
<p>在每一轮中，当前仍与其他机构共用缩写的所有机构都会同时细化其缩写。只有在本轮所有需要细化的缩写都更新完毕后，桶子才会再次检查是否存在冲突。一个缩写一旦变得唯一，就会被永久锁定，此后不再发生变化。</p>\r
<p>如果本轮完整写出的单词只包含一个字母，那么缩写本身不会发生变化。尽管如此，该单词仍会被视为已经处理。如果之后还需要继续细化，桶子将处理下一个单词。</p>\r
<p>可以证明，经过有限轮操作后，所有缩写都会两两不同。请在冈部发送 D-Mail 之前，求出为每个机构分配的最终缩写。</p>\r
\r
---\r
\r
**输入**：\r
第一行包含一个整数 n（1 ≤ n ≤ 20），表示院校的数量。\r
接下来 n 行，每行包含一所院校的完整名称。每个名称由 1 至 20 个单词组成，相邻单词之间恰有一个空格。每个单词由 1 至 20 个英文字母组成。\r
**输出**：\r
输出 n 行，第 i 行包含第 i 个机构的最终缩写。\r
\r
---\r
\r
**思路**：\r
直接模拟整个过程。由于 n ≤ 20 且每个名称最多 20 个单词，数据规模很小，暴力模拟完全可行。\r
\r
具体步骤：\r
1. 用 cnt[i] 记录第 i 个机构已经完整写出了前 cnt[i] 个单词。初始时 cnt[i] = 0。\r
2. suoxie(i) 函数根据 cnt[i] 生成当前缩写：前 cnt[i] 个单词完整写出，后面的单词只取首字母。\r
3. 每一轮：\r
   - 用 map 统计每个缩写对应的机构列表。\r
   - 找到第一个有冲突（对应机构数 > 1）的缩写。\r
   - 将所有有冲突的机构的 cnt 同时加 1。\r
   - 如果没有冲突了，结束循环。\r
4. 输出每个机构的最终缩写。\r
\r
注意：所有冲突机构必须同时更新，不能边遍历边更新。\r
\r
时间复杂度很低，完全在题目限制内。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <iostream>\r
#include <string>\r
#include <vector>\r
#include <map>\r
#include <sstream>\r
using namespace std;\r
\r
const int MAXN = 25;\r
int n;\r
vector<string> name[MAXN];\r
int cnt[MAXN];\r
\r
string suoxie(int i) {\r
    string res;\r
    int sz = name[i].size();\r
    for (int j = 0; j < sz; ++j) {\r
        if (j < cnt[i]) res += name[i][j];\r
        else res += name[i][j][0];\r
    }\r
    return res;\r
}\r
\r
void solve() {\r
    cin >> n;\r
    cin.ignore();\r
    for (int i = 0; i < n; ++i) {\r
        string line;\r
        getline(cin, line);\r
        name[i].clear();\r
        stringstream ss(line);\r
        string word;\r
        while (ss >> word) name[i].push_back(word);\r
        cnt[i] = 0;\r
    }\r
    while (1) {\r
        map<string, vector<int>> mp;\r
        for (int i = 0; i < n; ++i) {\r
            string s = suoxie(i);\r
            mp[s].push_back(i);\r
        }\r
        bool ok = false;\r
        for (auto &p : mp) {\r
            if (p.second.size() > 1) {\r
                ok = true;\r
                for (int idx : p.second) cnt[idx]++;\r
                break;\r
            }\r
        }\r
        if (!ok) break;\r
    }\r
    for (int i = 0; i < n; ++i) {\r
        cout << suoxie(i) << "\\n";\r
    }\r
}\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int t = 1;\r
    // cin >> t;\r
    while (t--) solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---\r
\r
### L题\r
**题意**：\r
<p>Bobo 正在学习取模运算。对于两个正整数 a 和 b，他本应计算 a mod (b+1)。然而，他错误地先进行了取模运算，再加上 1，计算成了 (a mod b) + 1。</p>\r
<p>令人惊讶的是，对于某些 a 和 b，Bobo 的错误计算仍然能够得到正确结果。</p>\r
<p>给定一个正整数 n，请计算满足 1 ≤ a, b ≤ n 且</p>\r
<p style="text-align: center;">(a mod b) + 1 = a mod (b + 1)</p>\r
<p>的有序数对 (a, b) 的数量。</p>\r
<p>其中，x mod y 表示非负整数 x 除以正整数 y 所得到的余数。如果两个数对的第一个分量不同或第二个分量不同，则认为它们是不同的数对。</p>\r
\r
---\r
\r
**输入**：\r
输入仅包含一行，其中包含一个整数 n。保证 1 ≤ n ≤ 10¹²。\r
**输出**：\r
输出一个整数，表示满足要求的有序数对 (a, b) 的数量。\r
\r
---\r
\r
**思路**：\r
\r
设带余除法 a = q·b + r，其中余数满足 0 ≤ r < b。\r
\r
左边：a mod b = r，于是 (a mod b) + 1 = r + 1。\r
右边：a mod (b + 1)。\r
\r
因为 0 ≤ r + 1 ≤ b < b + 1，r + 1 落在模 b + 1 的合法余数区间。\r
条件等式等价于同余式：\r
<p style="text-align: center;">a ≡ r + 1 (mod b + 1)</p>\r
\r
把 a = qb + r 代入：\r
<p style="text-align: center;">qb + r ≡ r + 1 (mod b + 1)</p>\r
消去两边的 r：\r
<p style="text-align: center;">qb ≡ 1 (mod b + 1)</p>\r
\r
注意模性质 b ≡ -1 (mod b + 1)，代入上式：\r
<p style="text-align: center;">-q ≡ 1 (mod b + 1) ⟹ q ≡ -1 (mod b + 1)</p>\r
\r
于是 q 可以写成：\r
<p style="text-align: center;">q = t(b + 1) - 1，t ≥ 1</p>\r
\r
再代回 a = qb + r：\r
<p style="text-align: center;">a = [t(b + 1) - 1] · b + r = t · b(b + 1) - b + r</p>\r
约束条件：0 ≤ r < b。\r
\r
r 的取值范围 0 ≤ r < b，所以 -b + r 的范围是 -b ≤ -b + r ≤ -1。\r
得到：\r
<p style="text-align: center;">t · b(b + 1) - b ≤ a ≤ t · b(b + 1) - 1</p>\r
\r
对固定的 b，t 取正整数，统计区间落在 [1, n] 内的 a 的个数。\r
\r
令 L = b(b + 1)。\r
对于固定 b：\r
1. t 每增加 1，就对应一整段长度为 b 的合法 a。\r
   完整段的数量：k = ⌊n / L⌋，贡献 k · b。\r
2. 剩下余数部分 rₙ = n mod L。\r
   剩余部分合法区间是 [L - b, L - 1]，也就是 [b², L - 1]。\r
   如果 rₙ ≥ b²，则剩余部分贡献 rₙ - b² + 1；否则无贡献。\r
\r
所以对每个 b，总贡献：\r
<p style="text-align: center;">add = k · b + max(0, rₙ - b² + 1)</p>\r
其中 L = b(b + 1)，k = ⌊n / L⌋，rₙ = n mod L。\r
\r
b(b + 1) ≤ n，所以 b 只需要枚举到 √n，总复杂度 O(√n)，n ≤ 10¹² 时可以轻松通过。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <iostream>\r
using namespace std;\r
typedef unsigned long long ull;\r
\r
void solve() {\r
    ull n;\r
    cin >> n;\r
    ull ans = 0;\r
    for (int b = 1; 1ULL * b * b <= n; ++b) {\r
        ull len = 1ULL * b * (b + 1);\r
        ull k = n / len;\r
        ull r = n % len;\r
        ans += k * b;\r
        if (r >= 1ULL * b * b) {\r
            ans += r - 1ULL * b * b + 1;\r
        }\r
    }\r
    cout << ans << "\\n";\r
}\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int t = 1;\r
    // cin >> t;\r
    while (t--) solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---`,views:0},{id:"2026牛客暑期多校训练营8",title:"2026牛客暑期多校训练营8",date:"2026-08-12",category:"比赛总结",categories:["比赛总结"],tags:["ACM","2026","复盘"],excerpt:"比赛过程 B题 题意： 汐与风子在一个浩瀚的数字宇宙中展开了一场智力对决：这个宇宙包含从 1 到 10¹⁰⁰ 的所有整数。对决开始时，汐从中精心选择恰好 n 个互不相同的数字；其余所有数字都归风子所有。 接下来的 n 轮中，两人逐一亮出自己……",content:`## 比赛过程\r
\r
### B题\r
**题意**：\r
<p>汐与风子在一个浩瀚的数字宇宙中展开了一场智力对决：这个宇宙包含从 1 到 10¹⁰⁰ 的所有整数。对决开始时，汐从中精心选择恰好 n 个互不相同的数字；其余所有数字都归风子所有。</p>\r
<p>接下来的 n 轮中，两人逐一亮出自己选择的数字。每一轮都由风子先手，她从自己庞大的数字集合中亮出一个数字，汐必须立即用一个自己尚未打出的数字回应。这里有一条危险的规则：如果风子的数字严格小于汐回应的数字，风子就会立刻获胜。只有当汐的数字小于或等于风子的数字时，这一轮才能安全度过——两个数字都被丢弃，游戏继续。</p>\r
<p>要赢得对决，汐必须撑过全部 n 轮，且风子打出的数字绝不能小于汐回应的数字。</p>\r
<p>更糟的是，在游戏开始前，风子还施加了额外的限制。她交给汐一个包含 m 个指定数字的集合，并宣布汐的初始手牌必须包含其中每一个数字。</p>\r
<p>汐开始思考自己的胜算：在所有大小为 n 且包含这 m 个指定数字的手牌中，有多少副能够保证她拥有必胜策略，无论风子如何巧妙地选择出牌？答案对 998244353 取模。</p>\r
\r
---\r
\r
**输入**：\r
第一行包含测试用例数量 t（1 ≤ t ≤ 1000）。\r
每个测试用例第一行包含两个整数 n 和 m（1 ≤ m ≤ n ≤ 5000）。\r
第二行包含 m 个整数 a₁, a₂, ..., aₘ（1 ≤ aᵢ ≤ 10⁹），表示手牌中必须包含的指定数字，保证无重复。\r
所有测试用例的 n 之和不超过 5000。\r
**输出**：\r
对于每个测试用例，输出一个整数，表示能够保证汐拥有必胜策略的初始手牌数量对 998244353 取模后的结果。\r
\r
---\r
\r
**思路**：\r
\r
**关键结论**：汐的手牌按升序排列为 s₁ < s₂ < ... < sₙ，她有必胜策略当且仅当 sₖ ≤ 2k - 1 对所有 k = 1..n 成立。\r
\r
**推导**：\r
风子可以出的数字是所有不在汐手牌中的数字，按升序记为 t₁ < t₂ < ...。风子的最优策略是按 t₁, t₂, ..., tₙ 的顺序出牌，汐必须用 s₁, s₂, ..., sₙ 贪心回应（用 ≤ 对方数字的最小手牌）。汐要必胜，必须满足 sₖ ≤ tₖ 对所有 k。\r
\r
tₖ 是第 k 个不在手牌中的数字。sₖ ≤ tₖ 等价于：在前 sₖ 个数字中，不在手牌中的数字少于 k 个。前 sₖ 个数字中有 k 个在手牌中，有 sₖ - k 个不在手牌中，因此 sₖ - k < k，即 sₖ ≤ 2k - 1。\r
\r
由此可知，所有手牌数字都必须 ≤ 2n - 1（因为 sₙ ≤ 2n - 1）。若指定数字中有 > 2n - 1 的，或有重复，答案为 0。\r
\r
**DP 计数**：\r
令 N = 2n - 1，从小到大遍历数字 1 到 N。\r
- dp[j]：已选 j 个数字的方案数。\r
- 若数字 i 是必选的，只能选；否则可选或不选。\r
- 在奇数位置 i = 2k - 1 处，必须已选至少 k 个数字（否则第 k 小的数字会 > 2k - 1），因此将 dp[0..k-1] 清零。\r
\r
最终答案为 dp[n]。\r
\r
时间复杂度 O(n²)，所有测试用例 n 之和 ≤ 5000，可以通过。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <iostream>\r
#include <vector>\r
#include <algorithm>\r
using namespace std;\r
\r
using ll = long long;\r
const int MOD = 998244353;\r
\r
void solve() {\r
    int n, m;\r
    cin >> n >> m;\r
    vector<ll> a(m);\r
    for (int i = 0; i < m; ++i) cin >> a[i];\r
    int N = 2 * n - 1;\r
    vector<bool> must(N + 1, false);\r
    bool ok = true;\r
    for (const int& x : a) {\r
        if (x > N) { ok = false; break; }\r
        if (must[x]) { ok = false; break; }\r
        must[x] = true;\r
    }\r
    if (!ok) { cout << "0\\n"; return; }\r
    vector<ll> dp(n + 1, 0), nxt_dp(n + 1, 0);\r
    dp[0] = 1;\r
    for (int i = 1; i <= N; ++i) {\r
        fill(nxt_dp.begin(), nxt_dp.end(), 0);\r
        for (int j = 0; j <= n; ++j) {\r
            if (dp[j] == 0) continue;\r
            if (must[i]) {\r
                if (j < n) nxt_dp[j + 1] = (nxt_dp[j + 1] + dp[j]) % MOD;\r
            } else {\r
                nxt_dp[j] = (nxt_dp[j] + dp[j]) % MOD;\r
                if (j < n) nxt_dp[j + 1] = (nxt_dp[j + 1] + dp[j]) % MOD;\r
            }\r
        }\r
        if (i % 2 == 1) {\r
            int need = (i + 1) / 2;\r
            for (int j = 0; j < need; ++j) nxt_dp[j] = 0;\r
        }\r
        dp.swap(nxt_dp);\r
    }\r
    cout << dp[n] % MOD << "\\n";\r
}\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int t = 1;\r
    cin >> t;\r
    while (t--) solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---\r
\r
### I题\r
**题意**：\r
<p>大豆参加了一场有 2n 名参赛者的比赛，目前比赛已经进入决赛轮。参赛者的编号从 1 到 2n。在决赛轮中，对于每个 i = 1, 2, ..., n，参赛者 2i-1 与参赛者 2i 进行比赛。在每场比赛中，m 分可以以任意方式分配给两名参赛者，但每人获得的分数必须是一个非负实数。</p>\r
<p>决赛轮开始前，参赛者 i 的初始分数为 aᵢ。一名参赛者的最终分数等于其初始分数加上其在本轮中获得的分数。</p>\r
<p>大豆是参赛者 1。他想知道自己最好和最差的最终排名。具体而言，考虑每组中 m 分的所有合法分配方式，他想知道：</p>\r
<ul>\r
<li>最少可能有多少名参赛者的最终分数严格大于他的最终分数，</li>\r
<li>最多可能有多少名参赛者的最终分数严格大于他的最终分数。</li>\r
</ul>\r
\r
---\r
\r
**输入**：\r
第一行包含测试用例数量 t（1 ≤ t ≤ 10⁴）。\r
每个测试用例第一行包含两个整数 n 和 m（1 ≤ n ≤ 2×10⁵，1 ≤ m ≤ 10⁹）。\r
第二行包含 2n 个整数 a₁, a₂, ..., a₂ₙ（1 ≤ aᵢ ≤ 10⁹）。\r
所有测试用例的 n 之和不超过 2×10⁵。\r
**输出**：\r
对于每个测试用例，输出两个整数——最少和最多可能有多少名参赛者的最终分数严格大于大豆的最终分数。\r
\r
---\r
\r
**思路**：\r
\r
大豆是参赛者 1，与参赛者 2 配对。其他配对为 (2i-1, 2i)，i = 2..n。\r
\r
**最少人数（大豆拿全部 m 分）**：\r
大豆最终分数 s = a₁ + m，参赛者 2 得 0 分，最终分数为 a₂。\r
对于其他配对 (u, v)，两人分数和增加 m：\r
- 若 u ≤ s 且 v ≤ s 且 u + v + m ≤ 2s：可以分配使两人都不超过 s，贡献 0。\r
- 否则若 u ≤ s 或 v ≤ s：最多只能让一人不超过 s，另一人必超过 s，贡献 1。\r
- 否则两人初始都 > s，无论怎么分配都超过 s，贡献 2。\r
\r
**最多人数（大豆拿 0 分）**：\r
大豆最终分数 s = a₁，参赛者 2 得全部 m 分，最终分数为 a₂ + m。\r
对于其他配对 (u, v)：\r
- 若 u + m > s 且 v + m > s 且 u + v + m > 2s：可以分配使两人都超过 s，贡献 2。\r
- 否则若 max(u, v) + m > s：至少有一人可以超过 s，贡献 1。\r
- 否则无人能超过 s，贡献 0。\r
\r
时间复杂度 O(n)，可以通过。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <iostream>\r
#include <vector>\r
#include <algorithm>\r
using namespace std;\r
\r
using ll = long long;\r
int n;\r
ll m;\r
\r
int cnt_min(const vector<ll>& a, ll s) {\r
    int cnt = 0;\r
    ll opp = a[1] + m - (s - a[0]);\r
    if (opp > s) cnt++;\r
    for (int i = 2; i < 2 * n; i += 2) {\r
        ll u = a[i], v = a[i + 1];\r
        ll T = u + v + m;\r
        if (u <= s && v <= s && T <= 2 * s) continue;\r
        else if (u <= s || v <= s) cnt++;\r
        else cnt += 2;\r
    }\r
    return cnt;\r
}\r
\r
int cnt_max(const vector<ll>& a, ll s) {\r
    int cnt = 0;\r
    ll opp = a[1] + m - (s - a[0]);\r
    if (opp > s) cnt++;\r
    for (int i = 2; i < 2 * n; i += 2) {\r
        ll u = a[i], v = a[i + 1];\r
        if (u + m > s && v + m > s && u + v + m > 2 * s) cnt += 2;\r
        else if (max(u, v) + m > s) cnt++;\r
    }\r
    return cnt;\r
}\r
\r
void solve() {\r
    cin >> n >> m;\r
    vector<ll> a(2 * n);\r
    for (int i = 0; i < 2 * n; ++i) cin >> a[i];\r
    int Min = cnt_min(a, a[0] + m);\r
    int Max = cnt_max(a, a[0]);\r
    cout << Min << " " << Max << "\\n";\r
}\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int t = 1;\r
    cin >> t;\r
    while (t--) solve();\r
    return 0;\r
}\r
\`\`\`\r
\r
---`,views:0},{id:"2026牛客暑期多校训练营9",title:"2026牛客暑期多校训练营9",date:"2026-08-14",category:"比赛总结",categories:["比赛总结"],tags:["ACM","2026","复盘"],excerpt:"赛后补题 D题 题意： 给定一棵有 n 个结点的树，结点编号为 1 到 n，树根为 1，每条边长度为 1。 有 m 个人。第 i 个人会在第 sᵢ 秒出现在结点 xᵢ，并立刻以每秒 1 单位长度的速度沿最短路向结点 1 移动。 如果某一时刻……",content:`## 赛后补题\r
\r
### D题\r
**题意**：\r
<p>给定一棵有 n 个结点的树，结点编号为 1 到 n，树根为 1，每条边长度为 1。</p>\r
<p>有 m 个人。第 i 个人会在第 sᵢ 秒出现在结点 xᵢ，并立刻以每秒 1 单位长度的速度沿最短路向结点 1 移动。</p>\r
<p>如果某一时刻，有至少两个人处在同一个位置，则这些人会同时消失。位置可以是结点，也可以是边的内部。</p>\r
<p>如果某个人到达结点 1 时没有与其他人相遇，则他成功逃脱，并立刻从树上移出。</p>\r
<p>请问哪些人会成功逃脱。</p>\r
\r
---\r
\r
**输入**：\r
第一行包含两个整数 n, m（1 ≤ n, m ≤ 2×10⁵）。\r
接下来 n-1 行，每行包含两个整数 u, v（1 ≤ u, v ≤ n，u ≠ v），表示树上有一条连接 u 和 v 的边。\r
接下来 m 行，每行包含两个整数 xᵢ, sᵢ（1 ≤ xᵢ ≤ n，0 ≤ sᵢ ≤ 10⁹），表示第 i 个人出现的结点和出现时间。\r
**输出**：\r
输出一个长度为 m 的 01 串。第 i 个字符为 1 表示第 i 个人成功逃脱，为 0 表示消失。\r
\r
---\r
\r
**思路**：\r
\r
**关键观察**：第 i 个人到达根结点 1 的时间为 Tᵢ = sᵢ + depth[xᵢ]。如果两个人的 T 值相同，他们一定会在到达根之前相遇并同时消失。\r
\r
**证明**：设两人到达根的时间均为 T。在时刻 t（两人都已出发后），从 x 出发的人位于距离根 T - t 的位置，从 y 出发的人也位于距离根 T - t 的位置。当两人都进入从 LCA(x, y) 到根的公共路径后（此时 t = T - depth[LCA]），他们处在同一位置，因此相遇消失。\r
\r
**算法**：树上启发式合并（DSU on Tree）。\r
1. BFS 求出每个结点的 parent 和 depth，并得到 BFS 序。\r
2. 按 BFS 序逆序（从叶子到根）处理每个结点 u：\r
   - 维护一个哈希表 mp[T] = 人员列表，表示当前子树中到达根时间为 T 且尚未消失的人。\r
   - 合并所有子结点的哈希表（小的合并到大的，保证复杂度）。\r
   - 将当前结点上的人加入哈希表。\r
   - 若某个 T 对应的人数 ≥ 2，这些人全部标记为 eliminated，并从哈希表中移除（他们已相遇消失，不会继续向上移动）。\r
3. 最终输出 01 串。\r
\r
时间复杂度 O(n log n)，可以通过 n, m ≤ 2×10⁵ 的数据规模。\r
\r
**代码**：\r
\`\`\`cpp\r
#include <bits/stdc++.h>\r
using namespace std;\r
\r
int main() {\r
    ios::sync_with_stdio(false);\r
    cin.tie(nullptr);\r
    int n, m;\r
    cin >> n >> m;\r
    vector<vector<int>> adj(n + 1);\r
    for (int i = 0; i < n - 1; i++) {\r
        int u, v;\r
        cin >> u >> v;\r
        adj[u].push_back(v);\r
        adj[v].push_back(u);\r
    }\r
    vector<int> parent(n + 1, 0), depth(n + 1, 0), order;\r
    queue<int> q;\r
    q.push(1);\r
    vector<bool> vis(n + 1, false);\r
    vis[1] = true;\r
    while (!q.empty()) {\r
        int u = q.front();\r
        q.pop();\r
        order.push_back(u);\r
        for (int v : adj[u]) {\r
            if (!vis[v]) {\r
                vis[v] = true;\r
                parent[v] = u;\r
                depth[v] = depth[u] + 1;\r
                q.push(v);\r
            }\r
        }\r
    }\r
    vector<vector<int>> people_at_node(n + 1);\r
    vector<long long> T_val(m + 1);\r
    vector<bool> eliminated(m + 1, false);\r
    for (int i = 1; i <= m; i++) {\r
        int x, s;\r
        cin >> x >> s;\r
        T_val[i] = (long long)s + depth[x];\r
        people_at_node[x].push_back(i);\r
    }\r
    vector<unordered_map<long long, vector<int>>*> mp(n + 1, nullptr);\r
    for (int idx = (int)order.size() - 1; idx >= 0; --idx) {\r
        int u = order[idx];\r
        if (mp[u] == nullptr) {\r
            mp[u] = new unordered_map<long long, vector<int>>();\r
        }\r
        vector<long long> cand;\r
        for (int v : adj[u]) {\r
            if (v == parent[u]) continue;\r
            if (mp[v] == nullptr) continue;\r
            if (mp[u]->size() < mp[v]->size()) {\r
                swap(mp[u], mp[v]);\r
            }\r
            for (auto &entry : *mp[v]) {\r
                long long T = entry.first;\r
                vector<int> &vec_small = entry.second;\r
                auto it = mp[u]->find(T);\r
                if (it == mp[u]->end()) {\r
                    (*mp[u])[T] = move(vec_small);\r
                } else {\r
                    vector<int> &vec_big = it->second;\r
                    int old_size = (int)vec_big.size();\r
                    vec_big.insert(vec_big.end(),\r
                                   make_move_iterator(vec_small.begin()),\r
                                   make_move_iterator(vec_small.end()));\r
                    vec_small.clear();\r
                    if (old_size < 2 && (int)vec_big.size() >= 2) {\r
                        cand.push_back(T);\r
                    }\r
                }\r
            }\r
            delete mp[v];\r
            mp[v] = nullptr;\r
        }\r
        for (int person : people_at_node[u]) {\r
            long long T = T_val[person];\r
            vector<int> &vec = (*mp[u])[T];\r
            int old_size = (int)vec.size();\r
            vec.push_back(person);\r
            if (old_size < 2 && (int)vec.size() >= 2) {\r
                cand.push_back(T);\r
            }\r
        }\r
        for (long long T : cand) {\r
            auto it = mp[u]->find(T);\r
            if (it != mp[u]->end() && it->second.size() >= 2) {\r
                for (int p : it->second) {\r
                    eliminated[p] = true;\r
                }\r
                mp[u]->erase(it);\r
            }\r
        }\r
    }\r
    string ans;\r
    ans.reserve(m);\r
    for (int i = 1; i <= m; i++) {\r
        ans += (eliminated[i] ? '0' : '1');\r
    }\r
    cout << ans << "\\n";\r
    for (int i = 1; i <= n; i++) {\r
        if (mp[i]) delete mp[i];\r
    }\r
    return 0;\r
}\r
\`\`\`\r
\r
---`,views:0}];function Wa(n,t=120){if(!n)return"";const e=n.replace(/```[\s\S]*?```/g," ").replace(/<[^>]+>/g," ").replace(/!\[[^\]]*\]\([^)]*\)/g," ").replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/`([^`]*)`/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^\s*>\s?/gm,"").replace(/^\s*[-*+]\s+/gm,"").replace(/^\s*\d+\.\s+/gm,"").replace(/[*_~|]/g,"").replace(/\r?\n/g," ").replace(/\s+/g," ").trim();return e.length>t?e.slice(0,t)+"……":e}function $a(){const n=new Date,t=String(n.getMonth()+1).padStart(2,"0"),e=String(n.getDate()).padStart(2,"0");return`${n.getFullYear()}-${t}-${e}`}function Of(n){return Array.isArray(n)?n.map(t=>t.trim()).filter(Boolean):String(n||"").split(/[,，、;；]/).map(t=>t.trim()).filter(Boolean)}const tl="wcy-blog-posts-v1",el="wcy-blog-theme-v1";function Xa(){try{const n=localStorage.getItem(tl);if(n){const t=JSON.parse(n);if(Array.isArray(t)&&t.length)return t}}catch(n){console.warn("读取本地文章数据失败，回退到内置数据：",n)}return nl.map(n=>({...n}))}function Qa(){return localStorage.getItem(el)==="dark"?"dark":"light"}const pn=Ne({posts:Xa(),theme:Qa()});function rl(n){document.documentElement.setAttribute("data-theme",n)}rl(pn.theme);function ae(){localStorage.setItem(tl,JSON.stringify(pn.posts))}function Ya(){localStorage.setItem(el,pn.theme)}function il(){const n=An(()=>[...pn.posts].sort((h,v)=>v.date.localeCompare(h.date)||v.id.localeCompare(h.id))),t=An(()=>{const h=new Map;return pn.posts.forEach(v=>{v.tags.forEach(b=>h.set(b,(h.get(b)||0)+1))}),[...h.entries()].map(([v,b])=>({name:v,count:b})).sort((v,b)=>b.count-v.count||v.name.localeCompare(b.name,"zh-CN"))}),e=An(()=>{const h=new Map;return pn.posts.forEach(v=>{const b=v.category||"未分类";h.set(b,(h.get(b)||0)+1)}),[...h.entries()].map(([v,b])=>({name:v,count:b})).sort((v,b)=>b.count-v.count||v.name.localeCompare(b.name,"zh-CN"))}),r=An(()=>pn.posts.reduce((h,v)=>h+(v.views||0),0));function i(h){return pn.posts.find(v=>v.id===h)}function s(h){const v=h.trim();return pn.posts.some(b=>b.id===v)?`${v}-${Date.now().toString(36)}`:v}function o(h){const v=(h.title||"").trim(),b=(h.content||"").trim(),M=(h.category||"").trim()||"未分类";return{title:v,date:h.date||$a(),category:M,categories:[M],tags:h.tags||[],excerpt:Wa(b),content:b}}function l(h){const v={id:s(h.title),views:0,...o(h)};return pn.posts.push(v),ae(),v}function c(h,v){const b=pn.posts.findIndex(M=>M.id===h);return b===-1?null:(pn.posts[b]={...pn.posts[b],...o(v)},ae(),pn.posts[b])}function f(h){const v=pn.posts.findIndex(b=>b.id===h);return v!==-1?(pn.posts.splice(v,1),ae(),!0):!1}function u(h){const v=i(h);v&&(v.views=(v.views||0)+1,ae())}function d(){pn.posts=nl.map(h=>({...h})),ae()}function g(){pn.theme=pn.theme==="dark"?"light":"dark",rl(pn.theme),Ya()}return{state:pn,sortedPosts:n,tagStats:t,categoryStats:e,totalViews:r,getPost:i,createPost:l,updatePost:c,removePost:f,increaseViews:u,resetPosts:d,toggleTheme:g}}const sl=(n,t)=>{const e=n.__vccOpts||n;for(const[r,i]of t)e[r]=i;return e},Ja={class:"search-modal",role:"dialog","aria-modal":"true","aria-label":"全局搜索"},Za={class:"search-modal-input"},nf={class:"search-results"},tf={key:0,class:"search-empty"},ef=["onClick"],rf={class:"search-result-main"},sf={class:"search-result-title"},of={class:"search-result-excerpt"},lf={class:"search-result-meta"},cf={class:"badge badge-category"},uf={class:"search-modal-foot"},af={__name:"GlobalSearch",setup(n){const{sortedPosts:t}=il(),e=Ga(),r=Zo(),i=Jt(!1),s=Jt(""),o=Jt(null),l=An(()=>{const h=s.value.trim().toLowerCase();return h?t.value.filter(v=>v.title.toLowerCase().includes(h)||(v.category||"").toLowerCase().includes(h)||(v.tags||[]).some(b=>b.toLowerCase().includes(h))||(v.excerpt||"").toLowerCase().includes(h)||(v.content||"").toLowerCase().includes(h)).slice(0,12):t.value.slice(0,8)});function c(){i.value=!0,s.value="",ur(()=>o.value&&o.value.focus())}function f(){i.value=!1}function u(h){e.push(`/post/${encodeURIComponent(h)}`),f()}function d(h){return h?["INPUT","TEXTAREA","SELECT"].includes(h.tagName)||h.isContentEditable:!1}function g(h){(h.ctrlKey||h.metaKey)&&h.key.toLowerCase()==="k"||h.key==="/"&&!i.value&&!h.isComposing&&!d(h.target)?(h.preventDefault(),c()):(h.key==="Escape"||h.keyCode===27)&&i.value&&(h.preventDefault(),f())}return pr(()=>window.addEventListener("keydown",g)),hr(()=>window.removeEventListener("keydown",g)),ne(()=>r.fullPath,()=>f()),(h,v)=>(On(),zn(Dn,null,[B("button",{type:"button",class:"search-trigger","aria-label":"搜索文章",title:"搜索文章（Ctrl+K）",onClick:c},[...v[1]||(v[1]=[B("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[B("circle",{cx:"11",cy:"11",r:"7"}),B("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})],-1)])]),an(hi,{name:"search-fade"},{default:Kt(()=>[i.value?(On(),zn("div",{key:0,class:"search-overlay",onClick:Ou(f,["self"])},[B("div",Ja,[B("div",Za,[v[3]||(v[3]=B("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[B("circle",{cx:"11",cy:"11",r:"7"}),B("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})],-1)),Qs(B("input",{ref_key:"inputRef",ref:o,"onUpdate:modelValue":v[0]||(v[0]=b=>s.value=b),type:"search",placeholder:"搜索文章标题、标签、分类或正文……","aria-label":"搜索关键词"},null,512),[[ku,s.value]]),v[4]||(v[4]=B("kbd",null,"Esc",-1)),B("button",{type:"button",class:"search-close","aria-label":"关闭搜索",title:"关闭（Esc）",onClick:f},[...v[2]||(v[2]=[B("svg",{viewBox:"0 0 24 24",width:"17",height:"17",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},[B("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),B("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),B("ul",nf,[l.value.length?Gr("",!0):(On(),zn("li",tf,"没有找到匹配的文章")),(On(!0),zn(Dn,null,po(l.value,b=>(On(),zn("li",{key:b.id},[B("button",{type:"button",class:"search-result-item",onClick:M=>u(b.id)},[B("span",rf,[B("span",sf,At(b.title),1),B("span",of,At(b.excerpt),1)]),B("span",lf,[B("span",cf,At(b.category),1),B("time",null,At(b.date),1)])],8,ef)]))),128))]),B("div",uf,"共 "+At(Rn(t).length)+" 篇文章 · 点击结果直接跳转 · 按 / 或 Ctrl+K 快速打开",1)])])):Gr("",!0)]),_:1})],64))}},ff=sl(af,[["__scopeId","data-v-c8c9c498"]]),df={class:"site-header"},pf={class:"nav-inner"},hf={class:"nav-right"},gf=["aria-expanded"],mf=["aria-label"],vf={key:0,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},bf={key:1,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},_f={__name:"AppHeader",setup(n){const{state:t,toggleTheme:e}=il(),r=Zo(),i=Jt(!1);ne(()=>r.fullPath,()=>{i.value=!1});const s=[{to:"/",label:"首页",exact:!0},{to:"/about",label:"关于"},{to:"/admin",label:"管理"}];return(o,l)=>{const c=uo("RouterLink");return On(),zn("header",df,[B("nav",pf,[an(c,{to:"/",class:"brand","aria-label":"返回首页"},{default:Kt(()=>[...l[2]||(l[2]=[B("span",{class:"brand-logo"},"</>",-1),B("span",{class:"brand-text"},[B("strong",null,"Wcy的ACM总结"),B("small",null,"功不唐捐，玉汝于成")],-1)])]),_:1}),B("div",hf,[an(ff),B("button",{class:Yt(["menu-toggle",{open:i.value}]),"aria-expanded":i.value,"aria-label":"切换导航菜单",onClick:l[0]||(l[0]=f=>i.value=!i.value)},[...l[3]||(l[3]=[B("span",null,null,-1),B("span",null,null,-1),B("span",null,null,-1)])],10,gf),B("div",{class:Yt(["nav-menu",{open:i.value}])},[(On(),zn(Dn,null,po(s,f=>an(c,{key:f.to,to:f.to,class:Yt(["nav-link",{active:f.exact?Rn(r).path==="/":Rn(r).path.startsWith(f.to)}])},{default:Kt(()=>[Mo(At(f.label),1)]),_:2},1032,["to","class"])),64)),B("button",{class:"theme-toggle","aria-label":Rn(t).theme==="dark"?"切换为亮色模式":"切换为暗黑模式",onClick:l[1]||(l[1]=(...f)=>Rn(e)&&Rn(e)(...f))},[Rn(t).theme==="light"?(On(),zn("svg",vf,[...l[4]||(l[4]=[B("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},null,-1)])])):(On(),zn("svg",bf,[...l[5]||(l[5]=[Kc('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',9)])]))],8,mf)],2)])])])}}},yf={class:"site-footer"},xf={class:"footer-inner"},wf={class:"footer-meta"},Af={__name:"AppFooter",setup(n){const t=new Date().getFullYear();return(e,r)=>(On(),zn("footer",yf,[B("div",xf,[r[0]||(r[0]=B("p",{class:"footer-slogan"},"功不唐捐，玉汝于成",-1)),B("p",wf," © "+At(Rn(t))+" Wcy的ACM总结 · 基于 Vue 3 + Vue Router 构建 ",1),r[1]||(r[1]=B("p",{class:"footer-tech"},"HTML5 语义化 · CSS3 Flex/Grid 响应式 · 原生 JavaScript · localStorage 本地存储",-1))])]))}},Ef={__name:"BackToTop",setup(n){const t=Jt(!1);function e(){t.value=window.scrollY>400}function r(){window.scrollTo({top:0,behavior:"smooth"})}return pr(()=>{window.addEventListener("scroll",e,{passive:!0}),e()}),hr(()=>window.removeEventListener("scroll",e)),(i,s)=>(On(),di(hi,{name:"fab-fade"},{default:Kt(()=>[Qs(B("button",{type:"button",class:"fab fab-top",title:"返回顶部","aria-label":"返回顶部",onClick:r},[...s[0]||(s[0]=[B("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round"},[B("polyline",{points:"18 15 12 9 6 15"})],-1)])],512),[[fu,t.value]])]),_:1}))}},Sf=sl(Ef,[["__scopeId","data-v-306c48f6"]]),Cf={class:"app-shell"},Pf={class:"main-container"},Tf={__name:"App",setup(n){return(t,e)=>{const r=uo("RouterView");return On(),zn("div",Cf,[an(_f),B("main",Pf,[an(r,null,{default:Kt(({Component:i})=>[an(hi,{name:"page",mode:"out-in"},{default:Kt(()=>[(On(),di(hc(i)))]),_:2},1024)]),_:1})]),an(Af),an(Sf)])}}},kf="modulepreload",Nf=function(n,t){return new URL(n,t).href},_s={},$t=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){let o=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=o(e.map(u=>{if(u=Nf(u,r),u in _s)return;_s[u]=!0;const d=u.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(!!r)for(let b=l.length-1;b>=0;b--){const M=l[b];if(M.href===u&&(!d||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":kf,d||(v.as="script"),v.crossOrigin="",v.href=u,f&&v.setAttribute("nonce",f),document.head.appendChild(v),d)return new Promise((b,M)=>{v.addEventListener("load",b),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},jf=[{path:"/",name:"home",component:()=>$t(()=>import("./HomeView-Bu3AvDda.js"),[],import.meta.url),meta:{title:"首页"}},{path:"/post/:id",name:"post",component:()=>$t(()=>import("./PostView-CplwLhau.js"),__vite__mapDeps([0,1]),import.meta.url),props:!0,meta:{title:"文章详情"}},{path:"/about",name:"about",component:()=>$t(()=>import("./AboutView-UMn6LgiW.js"),[],import.meta.url),meta:{title:"关于"}},{path:"/admin",name:"admin",component:()=>$t(()=>import("./AdminView-6nwoBlJO.js"),[],import.meta.url),meta:{title:"文章管理"}},{path:"/admin/new",name:"post-new",component:()=>$t(()=>import("./PostEditView-DHukSEkW.js"),[],import.meta.url),meta:{title:"写文章"}},{path:"/admin/edit/:id",name:"post-edit",component:()=>$t(()=>import("./PostEditView-DHukSEkW.js"),[],import.meta.url),props:!0,meta:{title:"编辑文章"}},{path:"/:pathMatch(.*)*",redirect:"/"}],ol=za({history:Aa(),routes:jf,scrollBehavior(){return{top:0,behavior:"smooth"}}});ol.afterEach(n=>{var t;document.title=(t=n.meta)!=null&&t.title?`${n.meta.title} - Wcy的ACM总结`:"Wcy的ACM总结"});Du(Tf).use(ol).mount("#app");export{Ne as A,$a as B,Ou as C,Of as D,Dn as F,hi as T,sl as _,B as a,an as b,zn as c,po as d,Gr as e,Mo as f,An as g,Jt as h,ne as i,Qs as j,Rf as k,Zo as l,il as m,Yt as n,On as o,Ga as p,di as q,uo as r,Kc as s,At as t,Rn as u,ku as v,Kt as w,pr as x,ur as y,hr as z};
