(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const us=globalThis,ho=us.ShadowRoot&&(us.ShadyCSS===void 0||us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vo=Symbol(),Ei=new WeakMap;let jr=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==vo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ho&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Ei.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ei.set(n,t))}return t}toString(){return this.cssText}};const Su=e=>new jr(typeof e=="string"?e:e+"",void 0,vo),xu=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,a,o)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[o+1],e[0]);return new jr(n,e,vo)},Cu=(e,t)=>{if(ho)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),a=us.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=n.cssText,e.appendChild(s)}},Ti=ho?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Su(n)})(e):e;const{is:Mu,defineProperty:Au,getOwnPropertyDescriptor:Eu,getOwnPropertyNames:Tu,getOwnPropertySymbols:Lu,getPrototypeOf:_u}=Object,Ts=globalThis,Li=Ts.trustedTypes,Pu=Li?Li.emptyScript:"",Iu=Ts.reactiveElementPolyfillSupport,Tn=(e,t)=>e,fs={toAttribute(e,t){switch(t){case Boolean:e=e?Pu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},yo=(e,t)=>!Mu(e,t),_i={attribute:!0,type:String,converter:fs,reflect:!1,useDefault:!1,hasChanged:yo};Symbol.metadata??=Symbol("metadata"),Ts.litPropertyMetadata??=new WeakMap;let Jt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=_i){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),a=this.getPropertyDescriptor(t,s,n);a!==void 0&&Au(this.prototype,t,a)}}static getPropertyDescriptor(t,n,s){const{get:a,set:o}=Eu(this.prototype,t)??{get(){return this[n]},set(i){this[n]=i}};return{get:a,set(i){const c=a?.call(this);o?.call(this,i),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_i}static _$Ei(){if(this.hasOwnProperty(Tn("elementProperties")))return;const t=_u(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Tn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tn("properties"))){const n=this.properties,s=[...Tu(n),...Lu(n)];for(const a of s)this.createProperty(a,n[a])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,a]of n)this.elementProperties.set(s,a)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const a=this._$Eu(n,s);a!==void 0&&this._$Eh.set(a,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const a of s)n.unshift(Ti(a))}else t!==void 0&&n.push(Ti(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Cu(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,s);if(a!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:fs).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,n){const s=this.constructor,a=s._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const o=s.getPropertyOptions(a),i=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:fs;this._$Em=a;const c=i.fromAttribute(n,o.type);this[a]=c??this._$Ej?.get(a)??c,this._$Em=null}}requestUpdate(t,n,s,a=!1,o){if(t!==void 0){const i=this.constructor;if(a===!1&&(o=this[t]),s??=i.getPropertyOptions(t),!((s.hasChanged??yo)(o,n)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:a,wrapped:o},i){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??n??this[t]),o!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,o]of s){const{wrapped:i}=o,c=this[a];i!==!0||this._$AL.has(a)||c===void 0||this.C(a,void 0,o,c)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Jt.elementStyles=[],Jt.shadowRootOptions={mode:"open"},Jt[Tn("elementProperties")]=new Map,Jt[Tn("finalized")]=new Map,Iu?.({ReactiveElement:Jt}),(Ts.reactiveElementVersions??=[]).push("2.1.2");const bo=globalThis,Pi=e=>e,hs=bo.trustedTypes,Ii=hs?hs.createPolicy("lit-html",{createHTML:e=>e}):void 0,Gr="$lit$",ot=`lit$${Math.random().toFixed(9).slice(2)}$`,Jr="?"+ot,Du=`<${Jr}>`,It=document,Dn=()=>It.createComment(""),Rn=e=>e===null||typeof e!="object"&&typeof e!="function",wo=Array.isArray,Ru=e=>wo(e)||typeof e?.[Symbol.iterator]=="function",ta=`[ 	
\f\r]`,hn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Di=/-->/g,Ri=/>/g,yt=RegExp(`>|${ta}(?:([^\\s"'>=/]+)(${ta}*=${ta}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ni=/'/g,Ui=/"/g,Yr=/^(?:script|style|textarea|title)$/i,Zr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),r=Zr(1),Zn=Zr(2),ct=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Oi=new WeakMap,Lt=It.createTreeWalker(It,129);function Xr(e,t){if(!wo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ii!==void 0?Ii.createHTML(t):t}const Nu=(e,t)=>{const n=e.length-1,s=[];let a,o=t===2?"<svg>":t===3?"<math>":"",i=hn;for(let c=0;c<n;c++){const d=e[c];let p,m,g=-1,f=0;for(;f<d.length&&(i.lastIndex=f,m=i.exec(d),m!==null);)f=i.lastIndex,i===hn?m[1]==="!--"?i=Di:m[1]!==void 0?i=Ri:m[2]!==void 0?(Yr.test(m[2])&&(a=RegExp("</"+m[2],"g")),i=yt):m[3]!==void 0&&(i=yt):i===yt?m[0]===">"?(i=a??hn,g=-1):m[1]===void 0?g=-2:(g=i.lastIndex-m[2].length,p=m[1],i=m[3]===void 0?yt:m[3]==='"'?Ui:Ni):i===Ui||i===Ni?i=yt:i===Di||i===Ri?i=hn:(i=yt,a=void 0);const $=i===yt&&e[c+1].startsWith("/>")?" ":"";o+=i===hn?d+Du:g>=0?(s.push(p),d.slice(0,g)+Gr+d.slice(g)+ot+$):d+ot+(g===-2?c:$)}return[Xr(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let Da=class ec{constructor({strings:t,_$litType$:n},s){let a;this.parts=[];let o=0,i=0;const c=t.length-1,d=this.parts,[p,m]=Nu(t,n);if(this.el=ec.createElement(p,s),Lt.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(a=Lt.nextNode())!==null&&d.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(const g of a.getAttributeNames())if(g.endsWith(Gr)){const f=m[i++],$=a.getAttribute(g).split(ot),S=/([.?@])?(.*)/.exec(f);d.push({type:1,index:o,name:S[2],strings:$,ctor:S[1]==="."?Ou:S[1]==="?"?Fu:S[1]==="@"?Bu:_s}),a.removeAttribute(g)}else g.startsWith(ot)&&(d.push({type:6,index:o}),a.removeAttribute(g));if(Yr.test(a.tagName)){const g=a.textContent.split(ot),f=g.length-1;if(f>0){a.textContent=hs?hs.emptyScript:"";for(let $=0;$<f;$++)a.append(g[$],Dn()),Lt.nextNode(),d.push({type:2,index:++o});a.append(g[f],Dn())}}}else if(a.nodeType===8)if(a.data===Jr)d.push({type:2,index:o});else{let g=-1;for(;(g=a.data.indexOf(ot,g+1))!==-1;)d.push({type:7,index:o}),g+=ot.length-1}o++}}static createElement(t,n){const s=It.createElement("template");return s.innerHTML=t,s}};function an(e,t,n=e,s){if(t===ct)return t;let a=s!==void 0?n._$Co?.[s]:n._$Cl;const o=Rn(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=a:n._$Cl=a),a!==void 0&&(t=an(e,a._$AS(e,t.values),a,s)),t}class Uu{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,a=(t?.creationScope??It).importNode(n,!0);Lt.currentNode=a;let o=Lt.nextNode(),i=0,c=0,d=s[0];for(;d!==void 0;){if(i===d.index){let p;d.type===2?p=new Ls(o,o.nextSibling,this,t):d.type===1?p=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(p=new Wu(o,this,t)),this._$AV.push(p),d=s[++c]}i!==d?.index&&(o=Lt.nextNode(),i++)}return Lt.currentNode=It,a}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let Ls=class tc{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,a){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=an(this,t,n),Rn(t)?t===k||t==null||t===""?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==ct&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ru(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==k&&Rn(this._$AH)?this._$AA.nextSibling.data=t:this.T(It.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Da.createElement(Xr(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===a)this._$AH.p(n);else{const o=new Uu(a,this),i=o.u(this.options);o.p(n),this.T(i),this._$AH=o}}_$AC(t){let n=Oi.get(t.strings);return n===void 0&&Oi.set(t.strings,n=new Da(t)),n}k(t){wo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,a=0;for(const o of t)a===n.length?n.push(s=new tc(this.O(Dn()),this.O(Dn()),this,this.options)):s=n[a],s._$AI(o),a++;a<n.length&&(this._$AR(s&&s._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=Pi(t).nextSibling;Pi(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class _s{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,a,o){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=k}_$AI(t,n=this,s,a){const o=this.strings;let i=!1;if(o===void 0)t=an(this,t,n,0),i=!Rn(t)||t!==this._$AH&&t!==ct,i&&(this._$AH=t);else{const c=t;let d,p;for(t=o[0],d=0;d<o.length-1;d++)p=an(this,c[s+d],n,d),p===ct&&(p=this._$AH[d]),i||=!Rn(p)||p!==this._$AH[d],p===k?t=k:t!==k&&(t+=(p??"")+o[d+1]),this._$AH[d]=p}i&&!a&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let Ou=class extends _s{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}},Fu=class extends _s{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==k)}},Bu=class extends _s{constructor(t,n,s,a,o){super(t,n,s,a,o),this.type=5}_$AI(t,n=this){if((t=an(this,t,n,0)??k)===ct)return;const s=this._$AH,a=t===k&&s!==k||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==k&&(s===k||a);a&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Wu=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){an(this,t)}};const Hu={I:Ls},zu=bo.litHtmlPolyfillSupport;zu?.(Da,Ls),(bo.litHtmlVersions??=[]).push("3.3.2");const Qu=(e,t,n)=>{const s=n?.renderBefore??t;let a=s._$litPart$;if(a===void 0){const o=n?.renderBefore??null;s._$litPart$=a=new Ls(t.insertBefore(Dn(),o),o,void 0,n??{})}return a._$AI(e),a};const ko=globalThis;let nn=class extends Jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qu(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ct}};nn._$litElement$=!0,nn.finalized=!0,ko.litElementHydrateSupport?.({LitElement:nn});const Ku=ko.litElementPolyfillSupport;Ku?.({LitElement:nn});(ko.litElementVersions??=[]).push("4.2.2");const nc=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const qu={attribute:!0,type:String,converter:fs,reflect:!1,hasChanged:yo},Vu=(e=qu,t,n)=>{const{kind:s,metadata:a}=n;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),s==="accessor"){const{name:i}=n;return{set(c){const d=t.get.call(this);t.set.call(this,c),this.requestUpdate(i,d,e,!0,c)},init(c){return c!==void 0&&this.C(i,void 0,e,c),c}}}if(s==="setter"){const{name:i}=n;return function(c){const d=this[i];t.call(this,c),this.requestUpdate(i,d,e,!0,c)}}throw Error("Unsupported decorator location: "+s)};function Ps(e){return(t,n)=>typeof n=="object"?Vu(e,t,n):((s,a,o)=>{const i=a.hasOwnProperty(o);return a.constructor.createProperty(o,s),i?Object.getOwnPropertyDescriptor(a,o):void 0})(e,t,n)}function y(e){return Ps({...e,state:!0,attribute:!1})}async function $e(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function ju(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Gu(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Ju(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function ne(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function on(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function Is(e,t,n){if(t.length===0)return;let s=e;for(let o=0;o<t.length-1;o+=1){const i=t[o],c=t[o+1];if(typeof i=="number"){if(!Array.isArray(s))return;s[i]==null&&(s[i]=typeof c=="number"?[]:{}),s=s[i]}else{if(typeof s!="object"||s==null)return;const d=s;d[i]==null&&(d[i]=typeof c=="number"?[]:{}),s=d[i]}}const a=t[t.length-1];if(typeof a=="number"){Array.isArray(s)&&(s[a]=n);return}typeof s=="object"&&s!=null&&(s[a]=n)}function sc(e,t){if(t.length===0)return;let n=e;for(let a=0;a<t.length-1;a+=1){const o=t[a];if(typeof o=="number"){if(!Array.isArray(n))return;n=n[o]}else{if(typeof n!="object"||n==null)return;n=n[o]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function ee(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Zu(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function $o(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Yu(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Yu(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Zu(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?on(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=on(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=ne(t.config??{}),e.configFormOriginal=ne(t.config??{}),e.configRawOriginal=n)}async function Se(e,t){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const n=JSON.stringify(t);let s=e.configSnapshot?.hash;if(s||(await ee(e),s=e.configSnapshot?.hash),!s){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.patch",{raw:n,baseHash:s}),e.configFormDirty=!1,await ee(e)}catch(n){e.lastError=String(n)}finally{e.configSaving=!1}}}async function Ra(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?on(e.configForm):e.configRaw;let n=e.configSnapshot?.hash;if(n||(await ee(e),n=e.configSnapshot?.hash),!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await ee(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Xu(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?on(e.configForm):e.configRaw;let n=e.configSnapshot?.hash;if(n||(await ee(e),n=e.configSnapshot?.hash),!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await ee(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function ep(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function Me(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{});Is(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=on(s))}function Fi(e,t){const n=ne(e.configForm??e.configSnapshot?.config??{});sc(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=on(n))}let Xe=null;function tp(e){Xe=e}function np(e){Xe===e&&(Xe=null)}async function Te(e){return Xe?Xe.showConfirm(e):window.confirm(e)}async function vs(e){if(Xe){await Xe.showAlert(e);return}window.alert(e)}async function ac(e,t=""){return Xe?Xe.showPrompt(e,t):window.prompt(e,t)}function Ds(){return typeof document>"u"?"en":(document.documentElement?.lang?.toLowerCase()??"").startsWith("zh")?"zh":"en"}const sp={tabGroupChat:"Chat",tabGroupControl:"Control",tabGroupAgent:"Agent",tabGroupSettings:"Settings",subtitleAgents:"Manage agent workspaces, tools, and identities.",subtitleOverview:"Gateway status, entry points, and a fast health read.",subtitleChannels:"Manage channels and settings.",subtitleInstances:"Presence beacons from connected clients and nodes.",subtitleSessions:"Inspect active sessions and adjust per-session defaults.",subtitleUsage:"",subtitleCron:"Schedule wakeups and recurring agent runs.",subtitleSkills:"Manage skill availability and API key injection.",subtitleMcp:"Configure MCP servers and tools.",subtitleNodes:"Paired devices, capabilities, and command exposure.",subtitleChat:"Direct gateway chat session for quick interventions.",subtitleDigitalEmployee:"Start templated conversations with domain-specific digital employees.",subtitleAgentSwarm:"Multi-agent swarm collaboration for ops and SRE.",subtitleConfig:"Edit ~/.openclaw/openclaw.json safely.",subtitleEnvVars:"Key-value env vars saved to config.env.vars in ~/.openocta/openocta.json.",subtitleModels:"Configure model providers and API keys.",subtitleDebug:"Gateway snapshots, events, and manual RPC calls.",subtitleLogs:"Live tail of the gateway file logs.",subtitleLlmTrace:"View LLM trace details for sessions.",subtitleSandbox:"Sandbox, command validation, and approval queue.",subtitleApprovals:"Command approval queue; approve or deny by session.",navTitleAgents:"Agents",navTitleOverview:"Overview",navTitleChannels:"Channels",navTitleInstances:"Instances",navTitleSessions:"Sessions",navTitleUsage:"Usage",navTitleCron:"Cron Jobs",navTitleSkills:"Skills",navTitleMcp:"MCP",navTitleNodes:"Nodes",navTitleChat:"Chat",navTitleDigitalEmployee:"Digital Employee",navTitleAgentSwarm:"Agent Swarm",agentSwarmDevBadge:"In Development",navTitleConfig:"Config",navTitleEnvVars:"Env Vars",navTitleModels:"Models",navTitleDebug:"Debug",navTitleLogs:"Logs",navTitleLlmTrace:"LLM Trace",navTitleSandbox:"Security Policy",navTitleApprovals:"Approvals",navTitleControl:"Control",overviewGatewayAccess:"Gateway Access",overviewGatewayAccessSub:"Where the dashboard connects and how it authenticates.",overviewWebSocketUrl:"WebSocket URL",overviewGatewayHost:"Backend Address (IP:Port)",overviewGatewayToken:"Gateway Token",overviewPassword:"Password (not stored)",overviewDefaultSessionKey:"Default Session Key",overviewConnect:"Connect",overviewRefresh:"Refresh",overviewConnectHint:"Click Connect to apply connection changes.",overviewSnapshot:"Snapshot",overviewSnapshotSub:"Latest gateway handshake information.",overviewStatus:"Status",overviewConnected:"Connected",overviewDisconnected:"Disconnected",overviewUptime:"Uptime",overviewTickInterval:"Tick Interval",overviewLastChannelsRefresh:"Last Channels Refresh",overviewChannelsHint:"Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.",overviewInstances:"Instances",overviewInstancesSub:"Presence beacons in the last 5 minutes.",overviewSessions:"Sessions",overviewSessionsSub:"Recent session keys tracked by the gateway.",overviewCron:"Cron",overviewCronNext:"Next wake",overviewCronEnabled:"Enabled",overviewCronDisabled:"Disabled",overviewNotes:"Notes",overviewNotesSub:"Quick reminders for remote control setups.",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"Prefer serve mode to keep the gateway on loopback with tailnet auth.",overviewNoteSessionHygiene:"Session hygiene",overviewNoteSessionHygieneSub:"Use /new or sessions.patch to reset context.",overviewNoteCron:"Cron reminders",overviewNoteCronSub:"Use isolated sessions for recurring runs.",commonLoading:"Loading…",commonRefresh:"Refresh",commonRefreshing:"Refreshing…",commonSaving:"Saving…",commonDelete:"Delete",commonFilter:"Filter",commonOptional:"(optional)",commonInherit:"inherit",commonOffExplicit:"off (explicit)",commonNA:"n/a",commonYes:"Yes",commonNo:"No",chatQueueRemoveConfirm:"Remove this queued message?",cronDeleteConfirm:"Delete this scheduled task?",employeeDeleteConfirm:"Delete this digital employee?",channelsConfigure:"Configure",mcpAddServer:"Add MCP Server",mcpServerName:"Server name",mcpNoServers:"No MCP servers configured.",mcpEnabled:"Enabled",mcpEnabledField:"Enable",mcpDisabled:"Disabled",mcpFormMode:"Form",mcpRawMode:"Raw JSON",mcpCommand:"Command",mcpArgs:"Args",mcpUrl:"URL",mcpService:"Service",mcpServiceUrl:"Service URL",mcpToolPrefix:"Tool Prefix",mcpRawJson:"Raw JSON",mcpDeleteConfirm:"Delete this MCP server?",mcpConnectionTypeStdio:"Command (stdio)",mcpConnectionTypeUrl:"URL",mcpConnectionTypeService:"Service",mcpEnv:"Environment variables",mcpEnvPlaceholder:"KEY=value or $ENV_VAR, one per line",mcpViewList:"List view",mcpViewCard:"Card view",mcpTableName:"Name",mcpTableType:"Type",mcpTableStatus:"Status",mcpTableActions:"Actions",llmTraceSearch:"Search",llmTraceSearchPlaceholder:"Filter by session key…",llmTraceEnabled:"Enabled",llmTraceDisabled:"Disabled",llmTraceActionEnable:"Enable",llmTraceActionDisable:"Disable",llmTraceToggleTooltip:"When enabled, new sessions will record model call Trace details (may impact performance). When disabled, new Trace details will not be recorded.",llmTraceModeActive:"Active",llmTraceModeAll:"All",llmTraceSessionKey:"Session Key",llmTraceSessionId:"Session ID",llmTraceUpdatedAt:"Updated",llmTraceFile:"File",llmTraceFileSize:"Size",llmTraceView:"View",llmTraceBack:"Back",llmTraceDownload:"Download",llmTraceNoEntries:"No trace entries.",sandboxEnabled:"Enabled",sandboxDisabled:"Disabled",sandboxActionEnable:"Enable",sandboxActionDisable:"Disable",sandboxAllowedPaths:"Allowed paths",sandboxNetworkAllow:"Network allowlist",sandboxHooks:"Security hooks",sandboxHookBeforeAgent:"BeforeAgent",sandboxHookBeforeModel:"BeforeModel",sandboxHookAfterModel:"AfterModel",sandboxHookBeforeTool:"BeforeTool",sandboxHookAfterTool:"AfterTool",sandboxHookAfterAgent:"AfterAgent",sandboxHookDescBeforeAgent:"Request validation: session abuse (DoS), long prompts, malicious IPs",sandboxHookDescBeforeModel:"Prompt safety: prompt injection, sensitive data leakage, control chars",sandboxHookDescAfterModel:"Output review: dangerous commands, secret leakage, malicious URLs",sandboxHookDescBeforeTool:"Permission check: tool permission, param validation, path validation",sandboxHookDescAfterTool:"Result review: secret leakage, error sanitization, output truncation",sandboxHookDescAfterAgent:"Audit logging, compliance checks",sandboxValidator:"Command validator",sandboxResourceLimit:"Resource limits",sandboxMaxCPUPercent:"Max CPU %",sandboxMaxMemoryBytes:"Max memory",sandboxMaxDiskBytes:"Max disk",sandboxSecretPatterns:"Secret leakage patterns (regex)",sandboxSecretPatternsHint:"One regex per line. Built-in patterns (API keys, tokens, etc.) are also applied.",sandboxBanCommands:"Ban commands",sandboxBanArguments:"Ban arguments",sandboxBanFragments:"Keyword fuse",sandboxSectionConfig:"Sandbox config",sandboxSectionApprovals:"Approval queue",securitySectionSandbox:"Environment boundary",securitySectionValidator:"命令校验",securitySectionApprovalQueue:"Approval Queue",securitySectionSandboxDesc:"Filesystem + network allowlist and optional resource limits.",securitySectionValidatorDesc:"Command validation rules (ban commands/args/fragments, length limits).",securitySectionApprovalQueueDesc:"Human-in-the-loop approvals for sensitive tool calls; supports session whitelist TTL.",securityApprovalQueueEnabled:"Enable approval queue",securityApprovalTimeoutSeconds:"Approval timeout (seconds)",securityApprovalTimeoutSecondsHint:"Pending approvals become expired after this time (best-effort; used by UI and gateway).",securityApprovalAllow:"Auto-allow commands",securityApprovalAllowHint:"Commands that bypass approval (one per line). Supports glob patterns like 'ls', 'pwd', 'echo *'.",securityApprovalAsk:"Require approval for",securityApprovalAskHint:"Commands that require approval (one per line). Supports glob patterns like 'rm', 'mv *', 'cp *'.",securityApprovalDeny:"Denied commands",securityApprovalDenyHint:"Commands that are always denied (one per line). Supports glob patterns like 'sudo', 'dd', 'mkfs *'.",securityApprovalBlockOnApproval:"Block on approval",securityApprovalBlockOnApprovalHint:"When enabled, the conversation will be blocked until the command is approved. When disabled, an error is returned immediately and the conversation ends.",approvalsList:"Approval queue",approvalsId:"ID",approvalsSessionKey:"Session Key",approvalsSessionId:"Session ID",approvalsCommand:"Command",approvalsTimeout:"Timeout",approvalsTTL:"TTL",approvalsStatus:"Status",approvalsApprove:"Approve",approvalsApproveOnce:"Approve once",approvalsWhitelist:"Whitelist",approvalsWhitelistSession:"Whitelist session",approvalsDeny:"Deny",approvalsExpired:"Expired",approvalsPending:"Pending",approvalsNoEntries:"No approval requests.",approvalsProcessed:"Processed",securityOverviewTitle:"Current status",securityOverviewPreset:"Preset",securityOverviewSandbox:"Environment",securityOverviewCommandPolicy:"Command policy",securityOverviewPendingApprovals:"Pending approvals",securityPresetsTitle:"Quick presets",securityPresetsHint:"One-click apply, overrides current config. See table for scenarios.",securityPresetOff:"All off",securityPresetLoose:"Loose",securityPresetStandard:"Standard",securityPresetStrict:"Strict",securityPresetOffDesc:"Disable all security: sandbox, command policy, and approval queue. Use for quick local testing only.",securityPresetLooseDesc:"Sandbox on, wide paths/network. Only blocks extreme danger (sudo, rm -rf, dd, mkfs). Default: allow. No approval. Best for: local dev, debugging.",securityPresetStandardDesc:"Sandbox on, moderate paths/network. Deny + some require approval (rm, mv, cp). Default: ask. Approval on. Best for: daily use, staging.",securityPresetStrictDesc:"Sandbox on, tight paths/network. Deny + many require approval. Default: deny. Approval on, blocking. Best for: production, compliance.",securitySectionCommandPolicy:"Command policy",securitySectionCommandPolicyDesc:"Unified rules: deny → ask → allow. Unmatched commands use default policy.",securityDefaultPolicy:"Default policy (when no rule matches)",securityDefaultDeny:"Deny",securityDefaultAsk:"Ask",securityDefaultAllow:"Allow",securityRulesList:"Rules",securityRuleAction:"Action",securityRulePattern:"Pattern",securityRuleType:"Type",securityActionDeny:"Deny",securityActionAsk:"Ask",securityActionAllow:"Allow",securityAddRule:"Add rule",securityAdvancedOptions:"Advanced: ban arguments, max length, secret patterns",securityMaxLength:"Max command length",securityResourceCustom:"Custom",securityRulesHint:"One pattern per line. For deny: single word = command (e.g. sudo), with space = fragment (e.g. rm -rf).",securityRulesDenyHint:"Commands/fragments to always deny. Single word = command, multi-word = fragment.",securityRulesAskHint:"Commands that require approval before execution.",securityRulesAllowHint:"Commands that bypass approval (auto-approved).",approvalsViewSession:"View session",approvalsSectionApproved:"Approved",approvalsSectionDenied:"Denied",approvalsSectionWhitelisted:"Session whitelisted",approvalsExpiresIn:"Expires in",approvalsExpiresAt:"Expires at",approvalsTtlPermanent:"Permanent",approvalsReason:"Reason",modelsViewList:"List view",modelsViewCard:"Card view",modelsSearchPlaceholder:"Search by name…",modelsSearchNoMatch:"No providers match your search.",modelsTableName:"Name",modelsTableModel:"Default Model",modelsTableBaseUrl:"Base URL",modelsTableActions:"Actions",modelsAddProvider:"Add Provider",modelsAddCustomProvider:"Add Custom Provider",modelsProviderId:"Provider ID",modelsProviderIdPlaceholder:"e.g. openai, google, anthropic",modelsProviderIdHint:"Lowercase letters, digits, hyphens, underscores. Cannot be changed later.",modelsDisplayName:"Display Name",modelsDisplayNamePlaceholder:"e.g. OpenAI, Google Gemini",modelsDefaultBaseUrl:"Default Base URL",modelsDefaultBaseUrlPlaceholder:"e.g. https://api.openai.com/v1",modelsApiKeyPrefix:"API Key Prefix (optional)",modelsApiKeyPrefixPlaceholder:"e.g. sk-",modelsApiType:"API Type",modelsApiTypeTooltip:"OpenAI: Compatible with OpenAI Chat Completions API. Anthropic: Compatible with Anthropic Messages API.",modelsApiTypeOpenAI:"OpenAI (openai-completions)",modelsApiTypeAnthropic:"Anthropic (anthropic-messages)",modelsEnvVars:"Environment Variables",modelsAddModel:"Add Model",modelsModelId:"Model ID",modelsModelName:"Model Name",modelsContextWindow:"Context window (tokens)",modelsContextWindowPlaceholder:"e.g. 262144",modelsContextWindowHint:"Caps estimated tokens kept in conversation history. Leave empty for default (no trim).",modelsMaxTokens:"Max output tokens",modelsMaxTokensPlaceholder:"e.g. 65536",modelsMaxTokensHint:"Max tokens per model completion. Leave empty to use the runtime default.",modelsModelManagement:"Model Management",modelsNoModels:"No models yet. Click Add Model to add one.",modelsEnvVarConflict:"Environment variable conflict",modelsNoProviders:"No model providers configured.",modelsModels:"models",modelsBaseUrl:"Base URL",modelsApiKey:"API Key",modelsUseAsDefault:"Use",modelsCancelUse:"Cancel use",modelsProviderDeleteConfirm:"Are you sure you want to delete this provider? This action cannot be undone.",modelsSelectModelToUse:"Select model to use",modelsCurrentDefault:"Current default",channelsHealth:"Channel health",channelsHealthSub:"Channel status snapshots from the gateway.",channelsNoSnapshot:"No snapshot yet.",channelsSchemaUnavailable:"Schema unavailable. Use Raw.",channelsConfigSchemaUnavailable:"Channel config schema unavailable.",channelsConfigSaveConfirm:"Saving channel config will interrupt and recreate long-lived connections. Continue?",channelsRuntimeStartErrorTitle:"The channel is enabled but failed to run. Details:",channelsLoadingConfigSchema:"Loading config schema…",commonSave:"Save",commonCreate:"Create",commonReload:"Reload",commonCancel:"Cancel",nativeDialogOK:"OK",channelConfigured:"Configured",channelRunning:"Running",channelLastStart:"Last start",channelLastProbe:"Last probe",channelProbe:"Probe",channelProbeOk:"ok",channelProbeFailed:"failed",channelLinked:"Linked",channelConnected:"Connected",channelLastConnect:"Last connect",channelLastMessage:"Last message",channelAuthAge:"Auth age",channelBaseUrl:"Base URL",channelCredential:"Credential",channelAudience:"Audience",channelMode:"Mode",channelPublicKey:"Public Key",channelLastInbound:"Last inbound",channelActive:"Active",channelGenericSub:"Channel status and configuration.",channelAccounts:"Accounts",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"Link WhatsApp Web and monitor connection health.",channelTelegram:"Telegram",channelTelegramSub:"Bot status and channel configuration.",channelDiscord:"Discord",channelDiscordSub:"Bot status and channel configuration.",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API webhook status and channel configuration.",channelIMessage:"iMessage",channelIMessageSub:"macOS bridge status and channel configuration.",channelSignal:"Signal",channelSignalSub:"signal-cli status and channel configuration.",channelSlack:"Slack",channelSlackSub:"Socket mode status and channel configuration.",channelNostr:"Nostr",channelNostrSub:"Decentralized DMs via Nostr relays (NIP-04).",channelWhatsAppWorking:"Working…",channelShowQr:"Show QR",channelRelink:"Relink",channelWaitForScan:"Wait for scan",channelLogout:"Logout",channelWeWork:"Weixin Work Bot",channelWeWorkSub:"Enterprise WeChat intelligent bot via WebSocket (aibot). Scan to create or paste Bot ID and Secret.",channelWeWorkTransport:"Transport",channelWeWorkBotId:"Bot ID (masked)",channelWeWorkQrStart:"Scan to create bot",channelWeWorkQrWorking:"Working…",channelWeWorkQrStartFailed:"Could not start QR session (missing scode).",channelWeWorkOpenGenPage:"Open scan page",channelWeWorkQrModalTitle:"WeCom bot — scan to create",channelWeWorkQrReplaceWarn:"This gateway already has WeCom bot credentials. Creating again will replace Bot ID and Secret in the form (save to apply).",channelWeWorkQrPreparing:"Preparing QR session…",channelWeWorkQrWaiting:"Waiting for you to finish in WeCom…",channelWeWorkQrSuccessClosing:"Credentials saved. The gateway is reconnecting WebSocket. This dialog will close shortly.",channelWeWorkQrSaveMissingForm:"Could not read channels.wework from the form after scan.",channelWeWorkQrModalCancel:"Cancel",channelWeixin:"WeChat (personal)",channelWeixinSub:"Personal WeChat via Tencent iLink Bot API (long polling). Scan to log in; uses botToken + botId (not WeCom Bot Secret).",channelWeixinTransport:"Transport",channelWeixinBotId:"Bot ID (masked)",channelWeixinQrStart:"Scan to log in",channelWeixinQrWorking:"Working…",channelWeixinQrStartFailed:"Could not start iLink QR session (missing qrcode).",channelWeixinQrModalTitle:"Personal WeChat — scan to log in (iLink)",channelWeixinQrReplaceWarn:"This gateway already has personal WeChat iLink credentials. Scanning again will replace botToken and botId in the form (save applies patch).",channelWeixinQrPreparing:"Fetching QR from iLink…",channelWeixinQrWaiting:"Waiting for you to scan with WeChat…",channelWeixinQrConfirmOnPhone:"Scanned — confirm login on your phone…",channelWeixinQrScanHint:"Use WeChat to scan the QR code. After login, botToken and Bot ID are saved automatically.",channelWeixinOpenScanPage:"Open scan page in browser",channelWeixinQrSuccessClosing:"Credentials saved. The gateway will reconnect the iLink channel. This dialog closes shortly.",channelWeixinQrSaveMissingForm:"Could not read channels.weixin from the form after scan.",channelWeixinQrModalCancel:"Cancel",channelWeixinQrExpired:"The QR code expired. Close and tap “Scan to log in” again.",nostrEditProfile:"Edit Profile",nostrAccount:"Account",nostrUsername:"Username",nostrDisplayName:"Display Name",nostrBio:"Bio",nostrAvatarUrl:"Avatar URL",nostrBannerUrl:"Banner URL",nostrWebsite:"Website",nostrNip05:"NIP-05 Identifier",nostrLud16:"Lightning Address",nostrSavePublish:"Save & Publish",nostrImportRelays:"Import from Relays",nostrHideAdvanced:"Hide Advanced",nostrShowAdvanced:"Show Advanced",nostrUnsavedChanges:"You have unsaved changes",nostrProfilePreview:"Profile picture preview",nostrAdvanced:"Advanced",nostrImporting:"Importing…",nostrNoProfileSet:'No profile set. Click "Edit Profile" to add your name, bio, and avatar.',nostrProfile:"Profile",nostrAbout:"About",nostrName:"Name",instancesTitle:"Connected Instances",instancesSub:"Presence beacons from the gateway and clients.",instancesNoReported:"No instances reported yet.",instancesUnknownHost:"unknown host",instancesLastInput:"Last input",instancesReason:"Reason",instancesScopes:"scopes",sessionsTitle:"Sessions",sessionsSub:"Active session keys and per-session overrides.",sessionsActiveWithin:"Active within (minutes)",sessionsLimit:"Limit",sessionsIncludeGlobal:"Include global",sessionsIncludeUnknown:"Include unknown",sessionsStore:"Store",sessionsKey:"Key",sessionsLabel:"Label",sessionsKind:"Kind",sessionsUpdated:"Updated",sessionsTokens:"Tokens",sessionsThinking:"Thinking",sessionsVerbose:"Verbose",sessionsReasoning:"Reasoning",sessionsActions:"Actions",sessionsNoFound:"No sessions found.",usageNoTimeline:"No timeline data yet.",usageNoData:"No data",usageHours:"Hours",usageMidnight:"Midnight",usage4am:"4am",usage8am:"8am",usageNoon:"Noon",usage4pm:"4pm",usage8pm:"8pm",usageDailyToken:"Daily Token Usage",usageDailyCost:"Daily Cost Usage",usageOutput:"Output",usageInput:"Input",usageCacheWrite:"Cache Write",usageCacheRead:"Cache Read",usageClearFilters:"Clear filters",usageRemoveFilter:"Remove filter",usageDays:"Days",usageHoursLabel:"Hours",usageSession:"Session",usageFiltered:"filtered",usageVisible:"visible",usageExport:"Export",usageActivityByTime:"Activity by Time",usageMosaicSubNoData:"Estimates require session timestamps.",usageTokensUnit:"tokens",usageTimeZoneLocal:"Local",usageTimeZoneUtc:"UTC",usageDayOfWeek:"Day of Week",usageDailyUsage:"Daily Usage",usageTotal:"Total",usageByType:"By Type",usageTokensByType:"Tokens by Type",usageCostByType:"Cost by Type",usageTotalLabel:"Total",usageOverview:"Usage Overview",usageMessages:"Messages",usageToolCalls:"Tool Calls",usageErrors:"Errors",usageAvgTokensMsg:"Avg Tokens / Msg",usageAvgCostMsg:"Avg Cost / Msg",usageSessionsCard:"Sessions",usageThroughput:"Throughput",usageErrorRate:"Error Rate",usageCacheHitRate:"Cache Hit Rate",usageMessagesHint:"Total user + assistant messages in range.",usageToolCallsHint:"Total tool call count across sessions.",usageErrorsHint:"Total message/tool errors in range.",usageAvgTokensMsgHint:"Average tokens per message in this range.",usageSessionsHint:"Distinct sessions in the range.",usageThroughputHint:"Throughput shows tokens per minute over active time. Higher is better.",usageErrorRateHint:"Error rate = errors / total messages. Lower is better.",usageCacheHitRateHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageTopModels:"Top Models",usageTopProviders:"Top Providers",usageTopTools:"Top Tools",usageTopAgents:"Top Agents",usageTopChannels:"Top Channels",usagePeakErrorDays:"Peak Error Days",usagePeakErrorHours:"Peak Error Hours",usageNoModelData:"No model data",usageNoProviderData:"No provider data",usageNoToolCalls:"No tool calls",usageNoAgentData:"No agent data",usageNoChannelData:"No channel data",usageNoErrorData:"No error data",usageShown:"shown",usageTotalSessions:"total",usageAvg:"avg",usageAll:"All",usageRecentlyViewed:"Recently viewed",usageSort:"Sort",usageCost:"Cost",usageErrorsCol:"Errors",usageMessagesCol:"Messages",usageRecent:"Recent",usageTokensCol:"Tokens",usageDescending:"Descending",usageAscending:"Ascending",usageClearSelection:"Clear Selection",usageNoRecentSessions:"No recent sessions",usageNoSessionsInRange:"No sessions in range",usageCopy:"Copy",usageCopySessionName:"Copy session name",usageSelectedCount:"Selected",usageMoreSessions:"more",usageUserAssistant:"user · assistant",usageToolsUsed:"tools used",usageToolResults:"tool results",usageAcrossMessages:"Across messages",usageInRange:"in range",usageCached:"cached",usagePrompt:"prompt",usageCacheHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageErrorHint:"Error rate = errors / total messages. Lower is better.",usageTokensHint:"Average tokens per message in this range.",usageCostHint:"Average cost per message when providers report costs.",usageCostHintMissing:"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.",usageModelMix:"Model Mix",usageDuration:"Duration",usageCloseSessionDetails:"Close session details",usageLoading:"Loading…",usageNoTimelineData:"No timeline data",usageNoDataInRange:"No data in range",usageUsageOverTime:"Usage Over Time",usagePerTurn:"Per Turn",usageCumulative:"Cumulative",usageNoContextData:"No context data",usageSystemPromptBreakdown:"System Prompt Breakdown",usageExpandAll:"Expand all",usageCollapseAll:"Collapse All",usageBaseContextPerMessage:"Base context per message",usageSys:"Sys",usageSkills:"Skills",usageToolsLabel:"Tools",usageFiles:"Files",usageConversation:"Conversation",usageNoMessages:"No messages",usageSearchConversation:"Search conversation",usageClear:"Clear",usageHasTools:"Has tools",usageUser:"User",usageAssistant:"Assistant",usageTool:"Tool",usageToolResult:"Tool result",usageMessagesCount:"messages",usageNoMessagesMatchFilters:"No messages match the filters.",usageTokenUsage:"Token Usage",usageToday:"Today",usage7d:"7d",usage30d:"30d",usageExportSessionsCsv:"Sessions (CSV)",usageExportDailyCsv:"Daily (CSV)",usageSessionsCount:"sessions",usageQueryHintMatch:"{count} of {total} sessions match",usageQueryHintInRange:"{total} sessions in range",usagePageSubtitle:"See where tokens go, when sessions spike, and what drives cost.",usageCalls:"calls",cronScheduler:"Scheduler",cronSchedulerSub:"Gateway-owned cron scheduler status.",cronEnabled:"Enabled",cronJobs:"Jobs",cronNewJob:"New Job",cronNewJobSub:"Create a scheduled wakeup or agent run.",cronName:"Name",cronDescription:"Description",cronAgentId:"Agent ID",cronSchedule:"Schedule",cronEvery:"Every",cronAt:"At",cronCron:"Cron",cronSession:"Session",cronMain:"Main",cronIsolated:"Isolated",cronWakeMode:"Wake mode",cronNextHeartbeat:"Next heartbeat",cronNow:"Now",cronPayload:"Payload",cronSystemEvent:"System event",cronAgentTurn:"Agent turn",cronSystemText:"System text",cronAgentMessage:"Agent message",cronDelivery:"Delivery",cronAnnounceSummary:"Announce summary (default)",cronNoneInternal:"None (internal)",cronChannel:"Channel",cronTo:"To",cronAddJob:"Add job",cronJobsTitle:"Jobs",cronJobsSub:"All scheduled jobs stored in the gateway.",cronNoJobsYet:"No jobs yet.",cronRunHistory:"Run history",cronRunHistorySub:"Latest runs for",cronSelectJob:"(select a job)",cronNoRunsYet:"No runs yet.",cronSelectJobToInspect:"Select a job to inspect run history.",cronRunAt:"Run at",cronUnit:"Unit",cronMinutes:"Minutes",cronHours:"Hours",cronDays:"Days",cronExpression:"Expression",cronTimeoutSeconds:"Timeout (seconds)",cronLast:"last",agentsFiles:"Files",agentsRuntime:"Runtime",agentsWeb:"Web",agentsMemory:"Memory",agentsSessions:"Sessions",agentsUi:"UI",agentsMessaging:"Messaging",agentsAutomation:"Automation",agentsReadFile:"Read file contents",agentsWriteFile:"Create or overwrite files",agentsEdit:"Make precise edits",agentsApplyPatch:"Patch files (OpenAI)",agentsExec:"Run shell commands",agentsProcess:"Manage background processes",agentsWebSearch:"Search the web",agentsWebFetch:"Fetch web content",agentsMemorySearch:"Semantic search",agentsMemoryGet:"Read memory files",agentsSessionsList:"List sessions",agentsSessionsHistory:"Session history",agentsSessionsSend:"Send to session",agentsSessionsSpawn:"Spawn sub-agent",agentsSessionStatus:"Session status",agentsBrowser:"Control web browser",agentsCanvas:"Control canvases",agentsMessage:"Send messages",agentsScheduleTasks:"Schedule tasks",agentsGatewayControl:"Gateway control",agentsNodesDevices:"Nodes + devices",agentsListAgents:"List agents",agentsImageUnderstanding:"Image understanding",agentsNodes:"Nodes",agentsAgents:"Agents",agentsMedia:"Media",agentsTitle:"Agents",agentsConfigured:"configured.",agentsNoFound:"No agents found.",agentsSelectAgent:"Select an agent",agentsSelectAgentSub:"Pick an agent to inspect its workspace and tools.",agentsWorkspaceRouting:"Agent workspace and routing.",agentsProfileMinimal:"Minimal",agentsProfileCoding:"Coding",agentsProfileMessaging:"Messaging",agentsProfileFull:"Full",agentsDefault:"default",agentsSelected:"selected",agentsAllSkills:"all skills",agentsCurrentModel:"Current",agentsInheritDefault:"Inherit default",agentsOverview:"Overview",agentsOverviewSub:"Workspace paths and identity metadata.",agentsWorkspace:"Workspace",agentsPrimaryModel:"Primary Model",agentsIdentityName:"Identity Name",agentsDefaultLabel:"Default",agentsIdentityEmoji:"Identity Emoji",agentsSkillsFilter:"Skills Filter",agentsModelSelection:"Model Selection",agentsPrimaryModelLabel:"Primary model",agentsPrimaryModelDefault:"(default)",agentsFallbacksLabel:"Fallbacks (comma-separated)",agentsReloadConfig:"Reload Config",agentsAgentContext:"Agent Context",agentsContextWorkspaceIdentity:"Workspace, identity, and model configuration.",agentsContextWorkspaceScheduling:"Workspace and scheduling targets.",agentsChannels:"Channels",agentsChannelsSub:"Gateway-wide channel status snapshot.",agentsLoadChannels:"Load channels to see live status.",agentsNoChannels:"No channels found.",agentsConnected:"connected",agentsConfiguredLabel:"configured",agentsEnabled:"enabled",agentsDisabled:"disabled",agentsNoAccounts:"no accounts",agentsNotConfigured:"not configured",agentsScheduler:"Scheduler",agentsSchedulerSub:"Gateway cron status.",agentsNextWake:"Next wake",agentsCronJobs:"Agent Cron Jobs",agentsCronJobsSub:"Scheduled jobs targeting this agent.",agentsNoJobsAssigned:"No jobs assigned.",agentsCoreFiles:"Core Files",agentsCoreFilesSub:"Bootstrap persona, identity, and tool guidance.",agentsLoadWorkspaceFiles:"Load the agent workspace files to edit core instructions.",agentsNoFilesFound:"No files found.",agentsSelectFileToEdit:"Select a file to edit.",agentsReset:"Reset",agentsFileMissingCreate:"This file is missing. Saving will create it in the agent workspace.",agentsUnavailable:"Unavailable",agentsTabOverview:"Overview",agentsTabFiles:"Files",agentsTabTools:"Tools",agentsTabSkills:"Skills",agentsTabChannels:"Channels",agentsTabCron:"Cron Jobs",agentsFallback:"fallback",agentsNever:"never",agentsLastRefresh:"Last refresh",agentsSkillsPanelSub:"Per-agent skill allowlist and workspace skills.",agentsUseAll:"Use All",agentsDisableAll:"Disable All",agentsLoadConfigForSkills:"Load the gateway config to set per-agent skills.",agentsCustomAllowlist:"This agent uses a custom skill allowlist.",agentsAllSkillsEnabled:"All skills are enabled. Disabling any skill will create a per-agent allowlist.",agentsLoadSkillsForAgent:"Load skills for this agent to view workspace-specific entries.",agentsFilter:"Filter",agentsNoSkillsFound:"No skills found.",agentsToolsGlobalAllow:"Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.",agentsProfile:"Profile",agentsSource:"Source",agentsStatus:"Status",agentsUnsaved:"unsaved",agentsQuickPresets:"Quick Presets",agentsInherit:"Inherit",agentsToolsTitle:"Tools",agentsToolsSub:"Per-agent tool profile and overrides.",agentsToolAccess:"Tool Access",agentsToolsSubText:"Profile + per-tool overrides for this agent.",agentsLoadConfigForTools:"Load the gateway config to adjust tool profiles.",agentsExplicitAllowlist:"This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.",agentsEnableAll:"Enable All",agentsEnabledCount:"enabled.",skillsTitle:"Skills",skillsSub:"Bundled, managed, and workspace skills.",skillsSearchPlaceholder:"Search skills",skillsShown:"shown",skillsWorkspace:"Workspace Skills",skillsBuiltIn:"Built-in Skills",skillsInstalled:"Installed Skills",skillsExtra:"Extra Skills",skillsOther:"Other Skills",skillsAdd:"Add",skillsAddSkill:"Add Skill",skillsUploadName:"Skill name (English)",skillsUploadNamePlaceholder:"e.g. my-skill",skillsUploadFile:"File",skillsUploadFileHint:"SKILL.md or .zip containing SKILL.md",skillsUploadSingleHint:"Single file must be SKILL.md",skillsUploadZipHint:"Zip must contain SKILL.md",skillsUploadSubmit:"Upload",skillsUploadSuccess:"Skill uploaded successfully",skillsDelete:"Delete",skillsDeleteConfirm:"Delete this skill?",skillsSource:"Source",skillsPath:"Path",skillsNoDoc:"No documentation available.",skillsEligible:"Eligible",skillsDisabled:"Disabled",skillsRequiresBins:"Requires bins",skillsRequiresEnv:"Requires env",skillsRequiresConfig:"Requires config",skillsMissing:"Missing",nodesTitle:"Nodes",nodesSub:"Paired devices and live links.",nodesNoFound:"No nodes found.",nodesDevices:"Devices",nodesDevicesSub:"Pairing requests + role tokens.",nodesPending:"Pending",nodesPaired:"Paired",nodesNoPairedDevices:"No paired devices.",nodesRoleLabel:"role: ",nodesRoleNone:"role: -",nodesRepairSuffix:" · repair",nodesRequested:"requested ",nodesApprove:"Approve",nodesReject:"Reject",nodesRolesLabel:"roles: ",nodesScopesLabel:"scopes: ",nodesTokensNone:"Tokens: none",nodesTokens:"Tokens",nodesTokenRevoked:"revoked",nodesTokenActive:"active",nodesRotate:"Rotate",nodesRevoke:"Revoke",nodesBindingTitle:"Exec node binding",nodesBindingSub:"Pin agents to a specific node when using ",nodesBindingFormModeHint:"Switch the Config tab to Form mode to edit bindings here.",nodesLoadConfigHint:"Load config to edit bindings.",nodesLoadConfig:"Load config",nodesDefaultBinding:"Default binding",nodesDefaultBindingSub:"Used when agents do not override a node binding.",nodesNodeLabel:"Node",nodesAnyNode:"Any node",nodesNoNodesSystemRun:"No nodes with system.run available.",nodesNoAgentsFound:"No agents found.",nodesExecApprovalsTitle:"Exec approvals",nodesExecApprovalsSub:"Allowlist and approval policy for exec host=gateway/node.",nodesLoadExecApprovalsHint:"Load exec approvals to edit allowlists.",nodesLoadApprovals:"Load approvals",nodesTarget:"Target",nodesTargetSub:"Gateway edits local approvals; node edits the selected node.",nodesHost:"Host",nodesHostGateway:"Gateway",nodesHostNode:"Node",nodesSelectNode:"Select node",nodesNoNodesExecApprovals:"No nodes advertise exec approvals yet.",nodesScope:"Scope",nodesDefaults:"Defaults",nodesSecurity:"Security",nodesSecurityDefaultSub:"Default security mode.",nodesSecurityAgentSubPrefix:"Default: ",nodesMode:"Mode",nodesUseDefaultPrefix:"Use default (",nodesUseDefaultButton:"Use default",nodesSecurityDeny:"Deny",nodesSecurityAllowlist:"Allowlist",nodesSecurityFull:"Full",nodesAsk:"Ask",nodesAskDefaultSub:"Default prompt policy.",nodesAskAgentSubPrefix:"Default: ",nodesAskOff:"Off",nodesAskOnMiss:"On miss",nodesAskAlways:"Always",nodesAskFallback:"Ask fallback",nodesAskFallbackDefaultSub:"Applied when the UI prompt is unavailable.",nodesAskFallbackAgentSubPrefix:"Default: ",nodesFallback:"Fallback",nodesAutoAllowSkills:"Auto-allow skill CLIs",nodesAutoAllowSkillsDefaultSub:"Allow skill executables listed by the Gateway.",nodesAutoAllowSkillsUsingDefault:"Using default (",nodesAutoAllowSkillsOverride:"Override (",nodesEnabled:"Enabled",nodesAllowlist:"Allowlist",nodesAllowlistSub:"Case-insensitive glob patterns.",nodesAddPattern:"Add pattern",nodesNoAllowlistEntries:"No allowlist entries yet.",nodesNewPattern:"New pattern",nodesLastUsedPrefix:"Last used: ",nodesPattern:"Pattern",nodesRemove:"Remove",nodesDefaultAgent:"default agent",nodesAgent:"agent",nodesUsesDefault:"uses default (",nodesOverride:"override: ",nodesBinding:"Binding",nodesChipPaired:"paired",nodesChipUnpaired:"unpaired",nodesConnected:"connected",nodesOffline:"offline",nodesNever:"never",configEnv:"Environment",configUpdate:"Updates",configAgents:"Agents",configAuth:"Authentication",configChannels:"Channels",configMessages:"Messages",configCommands:"Commands",configHooks:"Hooks",configSkills:"Skills",configTools:"Tools",configGateway:"Gateway",configWizard:"Setup Wizard",configMeta:"Metadata",configLogging:"Logging",configBrowser:"Browser",configUi:"UI",configModels:"Models",configBindings:"Bindings",configBroadcast:"Broadcast",configAudio:"Audio",configSession:"Session",configCron:"Cron",configWeb:"Web",configDiscovery:"Discovery",configCanvasHost:"Canvas Host",configTalk:"Talk",configPlugins:"Plugins",configEnvVars:"Environment Variables",configEnvVarsDesc:"Environment variables passed to the gateway process",configUpdatesDesc:"Auto-update settings and release channel",configAgentsDesc:"Agent configurations, models, and identities",configAuthDesc:"API keys and authentication profiles",configChannelsDesc:"Messaging channels (Telegram, Discord, Slack, etc.)",configMessagesDesc:"Message handling and routing settings",configCommandsDesc:"Custom slash commands",configHooksDesc:"Webhooks and event hooks",configSkillsDesc:"Skill packs and capabilities",configToolsDesc:"Tool configurations (browser, search, etc.)",configGatewayDesc:"Gateway server settings (port, auth, binding)",configWizardDesc:"Setup wizard state and history",configMetaDesc:"Gateway metadata and version information",configLoggingDesc:"Log levels and output configuration",configBrowserDesc:"Browser automation settings",configUiDesc:"User interface preferences",configModelsDesc:"AI model configurations and providers",configBindingsDesc:"Key bindings and shortcuts",configBroadcastDesc:"Broadcast and notification settings",configAudioDesc:"Audio input/output settings",configSessionDesc:"Session management and persistence",configCronDesc:"Scheduled tasks and automation",configWebDesc:"Web server and API settings",configDiscoveryDesc:"Service discovery and networking",configCanvasHostDesc:"Canvas rendering and display",configTalkDesc:"Voice and speech settings",configPluginsDesc:"Plugin management and extensions",configSettingsTitle:"Settings",configSearchPlaceholder:"Search settings…",configAllSettings:"All Settings",configForm:"Form",configRaw:"Raw",configUnsavedChanges:"Unsaved changes",configUnsavedChangesLabel:"unsaved changes",configOneUnsavedChange:"1 unsaved change",configNoChanges:"No changes",configApplying:"Applying…",configApply:"Apply",configUpdating:"Updating…",configUpdateButton:"Update",configViewPrefix:"View ",configPendingChange:"pending change",configPendingChanges:"pending changes",configLoadingSchema:"Loading schema…",configFormUnsafeWarning:"Form view can't safely edit some fields. Use Raw to avoid losing config entries.",configRawJson5:"Raw JSON5",configValidityValid:"valid",configValidityInvalid:"invalid",configValidityUnknown:"unknown",configSchemaUnavailable:"Schema unavailable.",configUnsupportedSchema:"Unsupported schema. Use Raw.",configNoSettingsMatchPrefix:'No settings match "',configNoSettingsMatchSuffix:'"',configNoSettingsInSection:"No settings in this section",configUnsupportedSchemaNode:"Unsupported schema node. Use Raw mode.",configSubnavAll:"All",envVarsSection:"Vars (env.vars)",envModelEnvSection:"Model Env (env.modelEnv)",envShellEnvSection:"Shell Env (env.shellEnv)",envVarsKey:"Key",envVarsValue:"Value",envVarsAdd:"Add",envVarsDelete:"Delete",envVarsSave:"Save",envVarsEmpty:"No environment variables. Click Add to create one.",envVarsKeyPlaceholder:"e.g. API_KEY",envVarsValuePlaceholder:"e.g. your-secret-value",debugSnapshots:"Snapshots",debugSnapshotsSub:"Status, health, and heartbeat data.",debugStatus:"Status",debugHealth:"Health",debugLastHeartbeat:"Last heartbeat",debugSecurityAudit:"Security audit",debugManualRpc:"Manual RPC",debugManualRpcSub:"Send a raw gateway method with JSON params.",debugMethod:"Method",debugParams:"Params",debugCall:"Call",debugCritical:"critical",debugWarnings:"warnings",debugNoCritical:"No critical issues",debugInfo:"info",debugSecurityAuditDetails:"Run openclaw security audit --deep for details.",debugModels:"Models",debugModelsSub:"Catalog from models.list.",debugEventLog:"Event Log",debugEventLogSub:"Latest gateway events.",debugNoEvents:"No events yet.",logsTitle:"Logs",logsSub:"Gateway file logs (JSONL).",logsExportFiltered:"Export filtered",logsExportVisible:"Export visible"},ap={tabGroupChat:"聊天",tabGroupControl:"控制",tabGroupAgent:"Agent",tabGroupSettings:"设置",subtitleAgents:"管理代理工作区、工具与身份。",subtitleOverview:"网关状态、入口与健康概览。",subtitleChannels:"管理通道与设置。",subtitleInstances:"已连接客户端与节点的在线状态。",subtitleSessions:"查看活跃会话并调整每会话默认值。",subtitleUsage:"",subtitleCron:"安排唤醒与定时代理任务。",subtitleSkills:"管理技能可用性与 API 密钥注入。",subtitleMcp:"配置 MCP 服务器与工具。",subtitleNodes:"已配对设备、能力与命令。",subtitleChat:"直接与网关聊天进行快速操作。",subtitleDigitalEmployee:"按业务场景切换数字员工模版，一键开启新会话。",subtitleAgentSwarm:"多Agent集群协作，面向运维与 SRE。",subtitleConfig:"安全编辑 ~/.openocta/openocta.json。",subtitleEnvVars:"Key-Value 环境变量，保存至 ~/.openocta/openocta.json 的 env.vars。",subtitleModels:"配置模型厂商与 API 密钥。",subtitleDebug:"网关快照、事件与手动 RPC 调用。",subtitleLogs:"网关日志实时查看。",subtitleLlmTrace:"查看会话的 LLM trace 详情。",subtitleSandbox:"Sandbox、命令校验与审批队列。",subtitleApprovals:"命令审批队列；按会话批准或拒绝。",navTitleAgents:"代理",navTitleOverview:"概览",navTitleChannels:"通道",navTitleInstances:"实例",navTitleSessions:"会话",navTitleUsage:"用量",navTitleCron:"定时任务",navTitleSkills:"技能",navTitleMcp:"MCP",navTitleNodes:"节点",navTitleChat:"聊天",navTitleDigitalEmployee:"数字员工",navTitleAgentSwarm:"Agent Swarm",agentSwarmDevBadge:"开发中",navTitleConfig:"配置",navTitleEnvVars:"环境变量",navTitleModels:"模型",navTitleDebug:"测试",navTitleLogs:"日志",navTitleLlmTrace:"LLM Trace",navTitleSandbox:"安全策略",navTitleApprovals:"审批队列",navTitleControl:"控制",overviewGatewayAccess:"网关访问",overviewGatewayAccessSub:"控制台连接地址与认证方式。",overviewWebSocketUrl:"WebSocket 地址",overviewGatewayHost:"后端地址 (IP:端口)",overviewGatewayToken:"网关令牌 (访问远程需从openocta.json中获取)",overviewPassword:"密码（不保存）",overviewDefaultSessionKey:"默认会话 Key",overviewConnect:"连接",overviewRefresh:"刷新",overviewConnectHint:"点击连接以应用连接变更。",overviewSnapshot:"快照",overviewSnapshotSub:"最近一次网关握手信息。",overviewStatus:"状态",overviewConnected:"已连接",overviewDisconnected:"未连接",overviewUptime:"运行时长",overviewTickInterval:"心跳间隔",overviewLastChannelsRefresh:"最近通道刷新",overviewChannelsHint:"",overviewInstances:"实例",overviewInstancesSub:"过去 5 分钟内的在线实例数。",overviewSessions:"会话",overviewSessionsSub:"网关跟踪的最近会话 Key。",overviewCron:"定时任务",overviewCronNext:"下次执行",overviewCronEnabled:"已启用",overviewCronDisabled:"已禁用",overviewNotes:"说明",overviewNotesSub:"远程控制相关简要提示。",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"建议使用 serve 模式，使网关仅监听本机并由 tailnet 认证。",overviewNoteSessionHygiene:"会话清理",overviewNoteSessionHygieneSub:"使用 /new 或 sessions.patch 重置上下文。",overviewNoteCron:"定时提醒",overviewNoteCronSub:"定时任务请使用独立会话。",commonLoading:"加载中…",commonRefresh:"刷新",commonRefreshing:"刷新中…",commonSaving:"保存中…",commonDelete:"删除",commonFilter:"筛选",commonOptional:"（可选）",commonInherit:"继承",commonOffExplicit:"关闭（显式）",commonNA:"无",commonYes:"是",commonNo:"否",chatQueueRemoveConfirm:"确定移除此排队消息？",cronDeleteConfirm:"确定删除此定时任务？",employeeDeleteConfirm:"确定删除此数字员工？",channelsConfigure:"配置",mcpAddServer:"新增",mcpServerName:"服务器名称",mcpNoServers:"暂无 MCP 服务器配置。",mcpEnabled:"已启用",mcpEnabledField:"启用",mcpDisabled:"已禁用",mcpFormMode:"表单",mcpRawMode:"原始 JSON",mcpCommand:"命令",mcpArgs:"参数",mcpUrl:"URL",mcpService:"服务",mcpServiceUrl:"服务 URL",mcpToolPrefix:"工具前缀",mcpRawJson:"原始 JSON",mcpDeleteConfirm:"确定删除此 MCP 服务器？",mcpConnectionTypeStdio:"命令行 (stdio)",mcpConnectionTypeUrl:"URL",mcpConnectionTypeService:"服务",mcpEnv:"环境变量",mcpEnvPlaceholder:"KEY=value 或 $ENV_VAR，每行一个",mcpViewList:"列表",mcpViewCard:"卡片",mcpTableName:"名称",mcpTableType:"连接类型",mcpTableStatus:"状态",mcpTableActions:"操作",llmTraceSearch:"搜索",llmTraceSearchPlaceholder:"按 session key 筛选…",llmTraceEnabled:"已开启",llmTraceDisabled:"已关闭",llmTraceActionEnable:"开启",llmTraceActionDisable:"关闭",llmTraceToggleTooltip:"开启后，再进行会话会记录模型调用Trace详情，可能会有性能影响。关闭后，不再记录新的模型会话Trace详情。",llmTraceModeActive:"活跃",llmTraceModeAll:"全部",llmTraceSessionKey:"Session Key",llmTraceSessionId:"Session ID",llmTraceUpdatedAt:"更新时间",llmTraceFile:"文件",llmTraceFileSize:"大小",llmTraceView:"查看",llmTraceBack:"返回",llmTraceDownload:"下载",llmTraceNoEntries:"暂无 trace 记录。",sandboxEnabled:"已开启",sandboxDisabled:"已关闭",sandboxActionEnable:"开启",sandboxActionDisable:"关闭",sandboxAllowedPaths:"允许路径",sandboxNetworkAllow:"网络白名单",sandboxHooks:"安全钩子",sandboxHookBeforeAgent:"BeforeAgent",sandboxHookBeforeModel:"BeforeModel",sandboxHookAfterModel:"AfterModel",sandboxHookBeforeTool:"BeforeTool",sandboxHookAfterTool:"AfterTool",sandboxHookAfterAgent:"AfterAgent",sandboxHookDescBeforeAgent:"请求验证：拦截会话滥用（DoS）、过长提示、恶意 IP",sandboxHookDescBeforeModel:"Prompt安全：提示注入、敏感数据泄露、控制字符",sandboxHookDescAfterModel:"输出评测：危险命令、秘密泄露、恶意网址",sandboxHookDescBeforeTool:"权限校验：工具权限、参数校验、路径校验",sandboxHookDescAfterTool:"结果审查：秘密泄露、错误脱敏、输出截断",sandboxHookDescAfterAgent:"审计日志、合规检查",sandboxValidator:"命令校验",sandboxResourceLimit:"资源限制",sandboxMaxCPUPercent:"最大 CPU 利用率 (%)",sandboxMaxMemoryBytes:"最大内存 (Bytes)",sandboxMaxDiskBytes:"最大磁盘 (Bytes)",sandboxSecretPatterns:"脱敏正则检测",sandboxSecretPatternsHint:"每行一个正则。系统内置模式（API Key、令牌等）会一并生效。",sandboxBanCommands:"禁止命令",sandboxBanArguments:"禁止参数",sandboxBanFragments:"关键词熔断",sandboxSectionConfig:"沙箱配置",sandboxSectionApprovals:"审批队列",securitySectionSandbox:"环境边界",securitySectionValidator:"命令校验",securitySectionApprovalQueue:"审批队列",securitySectionSandboxDesc:"自定义约束文件系统/网络访问边界，并可配置资源限制。为安全，即使关闭也会提供一个默认的 sandbox，指定默认目录和危险命令校验。",securitySectionValidatorDesc:"对命令进行校验：禁止命令/参数/片段与长度限制。",securitySectionApprovalQueueDesc:"对敏感工具调用进行人工审批，支持按会话 TTL 免审白名单。",securityApprovalQueueEnabled:"启用审批队列",securityApprovalTimeoutSeconds:"许可过期时间（秒）",securityApprovalTimeoutSecondsHint:"待审批请求超过该时长视为过期。",securityApprovalAllow:"自动允许命令",securityApprovalAllowHint:"无需审批直接执行的命令（每行一个）。支持 glob 模式，如 'ls'、'pwd'、'echo *'。",securityApprovalAsk:"需要审批的命令",securityApprovalAskHint:"需要人工审批的命令（每行一个）。支持 glob 模式，如 'rm'、'mv *'、'cp *'。",securityApprovalDeny:"禁止执行的命令",securityApprovalDenyHint:"始终禁止执行的命令（每行一个）。支持 glob 模式，如 'sudo'、'dd'、'mkfs *'。",securityApprovalBlockOnApproval:"阻塞等待审批",securityApprovalBlockOnApprovalHint:"开启后，页面对话会被阻塞，只有审批通过后才能继续对话。关闭后，直接报错结束对话，Agent 可提示用户有命令需要审批。",approvalsList:"审批队列",approvalsId:"ID",approvalsSessionKey:"Session Key",approvalsSessionId:"Session ID",approvalsCommand:"命令",approvalsTimeout:"超时",approvalsTTL:"TTL",approvalsStatus:"状态",approvalsApprove:"批准",approvalsApproveOnce:"本次放行",approvalsWhitelist:"全部放行",approvalsWhitelistSession:"会话免审",approvalsDeny:"拒绝",approvalsExpired:"已过期",approvalsPending:"待审批",approvalsNoEntries:"暂无审批请求。",approvalsProcessed:"已处理",securityOverviewTitle:"当前状态",securityOverviewPreset:"预设",securityOverviewSandbox:"环境边界",securityOverviewCommandPolicy:"命令策略",securityOverviewPendingApprovals:"待审批",securityPresetsTitle:"快速预设",securityPresetsHint:"一键应用，覆盖当前配置。适用场景见下表。",securityPresetOff:"全部关闭",securityPresetLoose:"宽松",securityPresetStandard:"标准",securityPresetStrict:"严格",securityPresetOffDesc:"关闭所有安全策略：沙箱、命令策略、审批队列。仅适用于快速本地测试。",securityPresetLooseDesc:"沙箱开，路径/网络较宽。仅禁止极端危险命令（sudo、rm -rf、dd、mkfs）。默认放行，无审批。适用：本地开发、调试。",securityPresetStandardDesc:"沙箱开，路径/网络适中。禁止 + 部分需审批（rm、mv、cp）。默认需审批，审批开。适用：日常使用、预发。",securityPresetStrictDesc:"沙箱开，路径/网络收紧。禁止 + 大量需审批。默认拒绝，审批开且阻塞。适用：生产、合规。",securitySectionCommandPolicy:"命令策略",securitySectionCommandPolicyDesc:"统一规则：禁止 → 需审批 → 放行。未命中规则时按默认策略处理。",securityDefaultPolicy:"默认策略（未命中任何规则时）",securityDefaultDeny:"拒绝",securityDefaultAsk:"需审批",securityDefaultAllow:"放行",securityRulesList:"规则列表",securityRuleAction:"动作",securityRulePattern:"模式",securityRuleType:"类型",securityActionDeny:"禁止",securityActionAsk:"需审批",securityActionAllow:"放行",securityAddRule:"添加规则",securityAdvancedOptions:"高级：禁止参数、最大长度、敏感词",securityMaxLength:"最大命令长度",securityResourceCustom:"自定义",securityRulesHint:"每行一个模式。禁止规则：单词为命令（如 sudo），含空格为片段（如 rm -rf）。",securityRulesDenyHint:"始终禁止的命令/片段。单词=命令，多词=片段。",securityRulesAskHint:"需审批后才能执行的命令。",securityRulesAllowHint:"免审批直接放行的命令。",approvalsViewSession:"查看会话",approvalsSectionApproved:"已审批",approvalsSectionDenied:"已拒绝",approvalsSectionWhitelisted:"会话免审",approvalsExpiresIn:"剩余",approvalsExpiresAt:"过期时间",approvalsTtlPermanent:"永久",approvalsReason:"拒绝原因",modelsViewList:"列表",modelsViewCard:"卡片",modelsSearchPlaceholder:"按名称搜索…",modelsSearchNoMatch:"没有匹配的厂商。",modelsTableName:"名称",modelsTableModel:"默认模型",modelsTableBaseUrl:"Base URL",modelsTableActions:"操作",modelsAddProvider:"添加厂商",modelsAddCustomProvider:"添加自定义厂商",modelsProviderId:"厂商 ID",modelsProviderIdPlaceholder:"如 openai, google, anthropic",modelsProviderIdHint:"小写字母、数字、连字符、下划线。创建后不可修改。",modelsDisplayName:"展示名称",modelsDisplayNamePlaceholder:"如 OpenAI, Google Gemini",modelsDefaultBaseUrl:"默认 Base URL",modelsDefaultBaseUrlPlaceholder:"如 https://api.openai.com/v1",modelsApiKeyPrefix:"API Key 前缀（可选）",modelsApiKeyPrefixPlaceholder:"如 sk-",modelsApiType:"API 类型",modelsApiTypeTooltip:`OpenAI：兼容 OpenAI Chat Completions 的端点。默认会请求/v1/chat/completions。
Anthropic：兼容 Anthropic Messages API 的端点，会进行直接请求。`,modelsApiTypeOpenAI:"OpenAI (openai-completions)",modelsApiTypeAnthropic:"Anthropic (anthropic-messages)",modelsEnvVars:"环境变量",modelsAddModel:"添加模型",modelsModelId:"模型 ID",modelsModelName:"模型名称",modelsContextWindow:"上下文窗口（约 token 数）",modelsContextWindowPlaceholder:"如 262144",modelsContextWindowHint:"对话历史估算 token 上限，超出会丢弃较早消息。留空则使用默认（不按此项裁剪）。",modelsMaxTokens:"单次回复最大 token",modelsMaxTokensPlaceholder:"如 65536",modelsMaxTokensHint:"单次模型输出的最大 token。留空则使用运行时默认值。",modelsModelManagement:"模型管理",modelsNoModels:"暂无模型，点击添加模型。",modelsEnvVarConflict:"环境变量冲突",modelsNoProviders:"暂无模型厂商配置。",modelsModels:"模型",modelsBaseUrl:"Base URL",modelsApiKey:"API Key",modelsUseAsDefault:"使用",modelsCancelUse:"取消使用",modelsProviderDeleteConfirm:"确定要删除此厂商吗？此操作无法撤销。",modelsSelectModelToUse:"选择要使用的模型",modelsCurrentDefault:"当前默认",channelsHealth:"通道健康",channelsHealthSub:"网关返回的通道状态快照。",channelsNoSnapshot:"暂无快照。",channelsSchemaUnavailable:"Schema 不可用，请使用 Raw。",channelsConfigSchemaUnavailable:"通道配置 Schema 不可用。",channelsConfigSaveConfirm:"修改/新增渠道配置会导致长连接中断并重新创建，是否继续？",channelsRuntimeStartErrorTitle:"渠道已启用，但后台运行时启动或连接失败：",channelsLoadingConfigSchema:"正在加载配置 Schema…",commonSave:"保存",commonCreate:"创建",commonReload:"重新加载",commonCancel:"取消",nativeDialogOK:"确定",channelConfigured:"已配置",channelRunning:"运行中",channelLastStart:"最近启动",channelLastProbe:"最近探测",channelProbe:"探测",channelProbeOk:"正常",channelProbeFailed:"失败",channelLinked:"已链接",channelConnected:"已连接",channelLastConnect:"最近连接",channelLastMessage:"最近消息",channelAuthAge:"认证时长",channelBaseUrl:"Base URL",channelCredential:"凭证",channelAudience:"受众",channelMode:"模式",channelPublicKey:"公钥",channelLastInbound:"最近入站",channelActive:"活跃",channelGenericSub:"通道状态与配置。",channelAccounts:"账号",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"链接 WhatsApp Web 并监控连接状态。",channelTelegram:"Telegram",channelTelegramSub:"机器人状态与通道配置。",channelDiscord:"Discord",channelDiscordSub:"机器人状态与通道配置。",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API Webhook 状态与通道配置。",channelIMessage:"iMessage",channelIMessageSub:"macOS 桥接状态与通道配置。",channelSignal:"Signal",channelSignalSub:"signal-cli 状态与通道配置。",channelSlack:"Slack",channelSlackSub:"Socket 模式状态与通道配置。",channelNostr:"Nostr",channelNostrSub:"通过 Nostr 中继的分布式私信（NIP-04）。",channelWhatsAppWorking:"处理中…",channelShowQr:"显示二维码",channelRelink:"重新链接",channelWaitForScan:"等待扫码",channelLogout:"登出",channelWeWork:"微信（企业智能机器人）",channelWeWorkSub:"通过企业微信智能机器人 WebSocket 长连接（aibot）收发消息。支持扫码创建或手动填写 Bot ID / Secret。",channelWeWorkTransport:"链路",channelWeWorkBotId:"Bot ID（脱敏）",channelWeWorkQrStart:"扫码快速创建",channelWeWorkQrWorking:"处理中…",channelWeWorkQrStartFailed:"无法开始扫码会话（缺少 scode）。",channelWeWorkOpenGenPage:"打开扫码页",channelWeWorkQrModalTitle:"企业微信智能机器人 — 扫码创建",channelWeWorkQrReplaceWarn:"当前已配置过企业微信智能机器人凭据。再次扫码创建将覆盖表单中的 Bot ID 与 Secret（保存后生效）。",channelWeWorkQrPreparing:"正在获取扫码会话…",channelWeWorkQrWaiting:"等待你在企业微信中完成创建…",channelWeWorkQrSuccessClosing:"凭据已保存，网关正在按新配置重建企业微信 WebSocket 连接。弹框即将自动关闭。",channelWeWorkQrSaveMissingForm:"扫码成功后无法从表单读取 channels.wework，请重试或手动保存配置。",channelWeWorkQrModalCancel:"取消",channelWeixin:"微信（个人）",channelWeixinSub:"个人微信 iLink 智能机器人通道（HTTPS 长轮询）。使用微信扫码登录；凭据为 botToken 与 botId，与企业微信的 Bot Secret 不同。",channelWeixinTransport:"链路",channelWeixinBotId:"Bot ID（脱敏）",channelWeixinQrStart:"扫码登录",channelWeixinQrWorking:"处理中…",channelWeixinQrStartFailed:"无法开始 iLink 扫码（缺少 qrcode）。",channelWeixinQrModalTitle:"个人微信 — iLink 扫码登录",channelWeixinQrReplaceWarn:"已配置过个人微信 iLink 凭据。再次扫码将覆盖表单中的 botToken 与 botId（保存后通过补丁生效）。",channelWeixinQrPreparing:"正在从 iLink 获取二维码…",channelWeixinQrWaiting:"请使用微信扫描二维码…",channelWeixinQrConfirmOnPhone:"已扫码 — 请在手机上确认登录…",channelWeixinQrScanHint:"使用微信扫一扫。登录成功后 botToken、Bot ID 将自动写入配置。",channelWeixinOpenScanPage:"浏览器打开扫码页",channelWeixinQrSuccessClosing:"凭据已保存，网关将按新配置重建 iLink 通道。弹框即将关闭。",channelWeixinQrSaveMissingForm:"扫码成功后无法从表单读取 channels.weixin，请重试或手动保存。",channelWeixinQrModalCancel:"取消",channelWeixinQrExpired:"二维码已失效，请关闭窗口后重新点击「扫码登录」。",nostrEditProfile:"编辑资料",nostrAccount:"账号",nostrUsername:"用户名",nostrDisplayName:"显示名称",nostrBio:"简介",nostrAvatarUrl:"头像 URL",nostrBannerUrl:"横幅 URL",nostrWebsite:"网站",nostrNip05:"NIP-05 标识",nostrLud16:"Lightning 地址",nostrSavePublish:"保存并发布",nostrImportRelays:"从中继导入",nostrHideAdvanced:"隐藏高级",nostrShowAdvanced:"显示高级",nostrUnsavedChanges:"您有未保存的更改",nostrProfilePreview:"头像预览",nostrAdvanced:"高级",nostrImporting:"导入中…",nostrNoProfileSet:"未设置资料。点击「编辑资料」添加姓名、简介与头像。",nostrProfile:"资料",nostrAbout:"关于",nostrName:"名称",instancesTitle:"已连接实例",instancesSub:"网关与客户端的在线状态。",instancesNoReported:"暂无实例上报。",instancesUnknownHost:"未知主机",instancesLastInput:"最近输入",instancesReason:"原因",instancesScopes:"范围",sessionsTitle:"会话",sessionsSub:"活跃会话 Key 及每会话覆盖项。",sessionsActiveWithin:"活跃时间（分钟）",sessionsLimit:"数量上限",sessionsIncludeGlobal:"包含全局",sessionsIncludeUnknown:"包含未知",sessionsStore:"存储",sessionsKey:"Key",sessionsLabel:"标签",sessionsKind:"类型",sessionsUpdated:"更新时间",sessionsTokens:"Token",sessionsThinking:"思考",sessionsVerbose:"详细",sessionsReasoning:"推理",sessionsActions:"操作",sessionsNoFound:"未找到会话。",usageNoTimeline:"暂无时间线数据。",usageNoData:"暂无数据",usageHours:"小时",usageMidnight:"0 点",usage4am:"4 点",usage8am:"8 点",usageNoon:"12 点",usage4pm:"16 点",usage8pm:"20 点",usageDailyToken:"每日 Token 用量",usageDailyCost:"每日费用",usageOutput:"输出",usageInput:"输入",usageCacheWrite:"缓存写入",usageCacheRead:"缓存读取",usageClearFilters:"清除筛选",usageRemoveFilter:"移除筛选",usageDays:"天",usageHoursLabel:"小时",usageSession:"会话",usageFiltered:"已筛选",usageVisible:"当前可见",usageExport:"导出",usageActivityByTime:"按时间活动",usageMosaicSubNoData:"估算需要会话时间戳。",usageTokensUnit:"tokens",usageTimeZoneLocal:"本地",usageTimeZoneUtc:"UTC",usageDayOfWeek:"星期",usageDailyUsage:"每日用量",usageTotal:"合计",usageByType:"按类型",usageTokensByType:"按类型 Token",usageCostByType:"按类型费用",usageTotalLabel:"合计",usageOverview:"用量概览",usageMessages:"消息数",usageToolCalls:"工具调用",usageErrors:"错误数",usageAvgTokensMsg:"平均 Token/条",usageAvgCostMsg:"平均费用/条",usageSessionsCard:"会话",usageThroughput:"吞吐",usageErrorRate:"错误率",usageCacheHitRate:"缓存命中率",usageMessagesHint:"范围内用户+助手消息总数。",usageToolCallsHint:"会话中工具调用总次数。",usageErrorsHint:"范围内消息/工具错误总数。",usageAvgTokensMsgHint:"该范围内每条消息平均 token 数。",usageSessionsHint:"范围内的不同会话数。",usageThroughputHint:"吞吐为活跃时间内每分钟 token 数，越高越好。",usageErrorRateHint:"错误率 = 错误数/总消息数，越低越好。",usageCacheHitRateHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageTopModels:"Top 模型",usageTopProviders:"Top 提供商",usageTopTools:"Top 工具",usageTopAgents:"Top 代理",usageTopChannels:"Top 渠道",usagePeakErrorDays:"错误高峰日",usagePeakErrorHours:"错误高峰时",usageNoModelData:"无模型数据",usageNoProviderData:"无提供商数据",usageNoToolCalls:"无工具调用",usageNoAgentData:"无代理数据",usageNoChannelData:"无渠道数据",usageNoErrorData:"无错误数据",usageShown:"显示",usageTotalSessions:"总计",usageAvg:"平均",usageAll:"全部",usageRecentlyViewed:"最近查看",usageSort:"排序",usageCost:"费用",usageErrorsCol:"错误",usageMessagesCol:"消息",usageRecent:"最近",usageTokensCol:"Token",usageDescending:"降序",usageAscending:"升序",usageClearSelection:"清除选择",usageNoRecentSessions:"无最近会话",usageNoSessionsInRange:"范围内无会话",usageCopy:"复制",usageCopySessionName:"复制会话名",usageSelectedCount:"已选",usageMoreSessions:"更多",usageUserAssistant:"用户 · 助手",usageToolsUsed:"使用工具数",usageToolResults:"工具结果",usageAcrossMessages:"跨消息",usageInRange:"范围内",usageCached:"缓存",usagePrompt:"提示",usageCacheHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageErrorHint:"错误率 = 错误数/总消息数，越低越好。",usageTokensHint:"该范围内每条消息平均 token 数。",usageCostHint:"提供商上报费用时每条消息平均费用。",usageCostHintMissing:"提供商上报费用时每条消息平均费用。部分或全部会话缺少费用数据。",usageModelMix:"模型组合",usageDuration:"时长",usageCloseSessionDetails:"关闭会话详情",usageLoading:"加载中…",usageNoTimelineData:"无时间线数据",usageNoDataInRange:"范围内无数据",usageUsageOverTime:"用量随时间",usagePerTurn:"每轮",usageCumulative:"累计",usageNoContextData:"无上下文数据",usageSystemPromptBreakdown:"系统提示分解",usageExpandAll:"全部展开",usageCollapseAll:"全部折叠",usageBaseContextPerMessage:"每条消息的基础上下文",usageSys:"系统",usageSkills:"技能",usageToolsLabel:"工具",usageFiles:"文件",usageConversation:"对话",usageNoMessages:"无消息",usageSearchConversation:"搜索对话",usageClear:"清除",usageHasTools:"含工具",usageUser:"用户",usageAssistant:"助手",usageTool:"工具",usageToolResult:"工具结果",usageMessagesCount:"条消息",usageNoMessagesMatchFilters:"没有消息符合筛选条件。",usageTokenUsage:"Token 用量",usageToday:"今天",usage7d:"7 天",usage30d:"30 天",usageExportSessionsCsv:"会话 (CSV)",usageExportDailyCsv:"每日 (CSV)",usageSessionsCount:"会话",usageQueryHintMatch:"{count} / {total} 个会话匹配",usageQueryHintInRange:"{total} 个会话在范围内",usagePageSubtitle:"查看 token 消耗、会话高峰与费用驱动因素。",usageCalls:"次",cronScheduler:"调度器",cronSchedulerSub:"网关内置定时调度状态",cronEnabled:"已启用",cronJobs:"任务数",cronNewJob:"新建任务",cronNewJobSub:"创建定时唤醒或代理运行任务",cronName:"名称",cronDescription:"描述",cronAgentId:"Agent ID",cronSchedule:"调度",cronEvery:"每",cronAt:"在",cronCron:"Cron",cronSession:"会话",cronMain:"主会话",cronIsolated:"独立会话",cronWakeMode:"唤醒方式",cronNextHeartbeat:"下次心跳",cronNow:"立即",cronPayload:"负载",cronSystemEvent:"系统事件",cronAgentTurn:"代理轮次",cronSystemText:"系统文本",cronAgentMessage:"Agent 消息",cronDelivery:"投递",cronAnnounceSummary:"公布摘要（默认）",cronNoneInternal:"无（内部）",cronChannel:"通道",cronTo:"发送至",cronAddJob:"添加任务",cronJobsTitle:"任务列表",cronJobsSub:"网关中所有已调度任务",cronNoJobsYet:"暂无任务。",cronRunHistory:"运行历史",cronRunHistorySub:"最近运行：",cronSelectJob:"（选择任务）",cronNoRunsYet:"暂无运行记录。",cronSelectJobToInspect:"选择任务以查看运行历史",cronRunAt:"运行时间",cronUnit:"单位",cronMinutes:"分钟",cronHours:"小时",cronDays:"天",cronExpression:"表达式",cronTimeoutSeconds:"超时（秒）",cronLast:"上次",agentsFiles:"文件",agentsRuntime:"运行时",agentsWeb:"网页",agentsMemory:"记忆",agentsSessions:"会话",agentsUi:"界面",agentsMessaging:"消息",agentsAutomation:"自动化",agentsReadFile:"读取文件内容",agentsWriteFile:"创建或覆盖文件",agentsEdit:"精确编辑",agentsApplyPatch:"应用补丁（OpenAI）",agentsExec:"执行 shell 命令",agentsProcess:"管理后台进程",agentsWebSearch:"网页搜索",agentsWebFetch:"抓取网页内容",agentsMemorySearch:"语义搜索",agentsMemoryGet:"读取记忆文件",agentsSessionsList:"列出会话",agentsSessionsHistory:"会话历史",agentsSessionsSend:"发送到会话",agentsSessionsSpawn:"派生子代理",agentsSessionStatus:"会话状态",agentsBrowser:"控制浏览器",agentsCanvas:"控制画布",agentsMessage:"发送消息",agentsScheduleTasks:"安排任务",agentsGatewayControl:"网关控制",agentsNodesDevices:"节点与设备",agentsListAgents:"列出代理",agentsImageUnderstanding:"图像理解",agentsNodes:"节点",agentsAgents:"代理",agentsMedia:"媒体",agentsTitle:"代理",agentsConfigured:"已配置。",agentsNoFound:"未找到代理。",agentsSelectAgent:"选择代理",agentsSelectAgentSub:"选择一个代理以查看其工作区与工具。",agentsWorkspaceRouting:"代理工作区与路由。",agentsProfileMinimal:"最小",agentsProfileCoding:"编程",agentsProfileMessaging:"消息",agentsProfileFull:"完整",agentsDefault:"默认",agentsSelected:"已选",agentsAllSkills:"全部技能",agentsCurrentModel:"当前",agentsInheritDefault:"继承默认",agentsOverview:"概览",agentsOverviewSub:"工作区路径与身份元数据。",agentsWorkspace:"工作区",agentsPrimaryModel:"主模型",agentsIdentityName:"身份名称",agentsDefaultLabel:"默认",agentsIdentityEmoji:"身份表情",agentsSkillsFilter:"技能筛选",agentsModelSelection:"模型选择",agentsPrimaryModelLabel:"主模型",agentsPrimaryModelDefault:"（默认）",agentsFallbacksLabel:"备选（逗号分隔）",agentsReloadConfig:"重新加载配置",agentsAgentContext:"代理上下文",agentsContextWorkspaceIdentity:"工作区、身份与模型配置。",agentsContextWorkspaceScheduling:"工作区与调度目标。",agentsChannels:"渠道",agentsChannelsSub:"网关渠道状态快照。",agentsLoadChannels:"加载渠道以查看实时状态。",agentsNoChannels:"未找到渠道。",agentsConnected:"已连接",agentsConfiguredLabel:"已配置",agentsEnabled:"已启用",agentsDisabled:"已禁用",agentsNoAccounts:"无账号",agentsNotConfigured:"未配置",agentsScheduler:"调度器",agentsSchedulerSub:"网关定时状态。",agentsNextWake:"下次唤醒",agentsCronJobs:"代理定时任务",agentsCronJobsSub:"针对此代理的定时任务。",agentsNoJobsAssigned:"未分配任务。",agentsCoreFiles:"核心文件",agentsCoreFilesSub:"引导人设、身份与工具指引。",agentsLoadWorkspaceFiles:"加载代理工作区文件以编辑核心说明。",agentsNoFilesFound:"未找到文件。",agentsSelectFileToEdit:"选择要编辑的文件。",agentsReset:"重置",agentsFileMissingCreate:"该文件不存在。保存将在代理工作区中创建。",agentsUnavailable:"不可用",agentsTabOverview:"概览",agentsTabFiles:"文件",agentsTabTools:"工具",agentsTabSkills:"技能",agentsTabChannels:"渠道",agentsTabCron:"定时任务",agentsFallback:"备选",agentsNever:"从未",agentsLastRefresh:"上次刷新",agentsSkillsPanelSub:"每代理技能允许列表与工作区技能。",agentsUseAll:"全部启用",agentsDisableAll:"全部禁用",agentsLoadConfigForSkills:"加载网关配置以设置每代理技能。",agentsCustomAllowlist:"此代理使用自定义技能允许列表。",agentsAllSkillsEnabled:"所有技能已启用。禁用任意技能将创建每代理允许列表。",agentsLoadSkillsForAgent:"加载此代理的技能以查看工作区相关条目。",agentsFilter:"筛选",agentsNoSkillsFound:"未找到技能。",agentsToolsGlobalAllow:"已设置全局 tools.allow。代理覆盖无法启用被全局禁止的工具。",agentsProfile:"配置集",agentsSource:"来源",agentsStatus:"状态",agentsUnsaved:"未保存",agentsQuickPresets:"快捷预设",agentsInherit:"继承",agentsToolsTitle:"工具",agentsToolsSub:"每代理工具配置集与覆盖。",agentsToolAccess:"工具访问",agentsToolsSubText:"此代理的配置集与每工具覆盖。",agentsLoadConfigForTools:"加载网关配置以调整工具配置集。",agentsExplicitAllowlist:"此代理在配置中使用显式允许列表。工具覆盖在配置页管理。",agentsEnableAll:"全部启用",agentsEnabledCount:"已启用。",skillsTitle:"技能",skillsSub:"内置、托管与工作区技能。",skillsSearchPlaceholder:"搜索技能",skillsShown:"条显示",skillsWorkspace:"工作区技能",skillsBuiltIn:"内置技能",skillsInstalled:"已安装技能",skillsExtra:"额外技能",skillsOther:"其他技能",skillsAdd:"新增",skillsAddSkill:"添加技能",skillsUploadName:"技能名称（英文）",skillsUploadNamePlaceholder:"如 my-skill",skillsUploadFile:"文件",skillsUploadFileHint:"SKILL.md 或包含 SKILL.md 的 .zip",skillsUploadSingleHint:"单文件必须为 SKILL.md",skillsUploadZipHint:"压缩包必须包含 SKILL.md",skillsUploadSubmit:"上传",skillsUploadSuccess:"技能上传成功",skillsDelete:"删除",skillsDeleteConfirm:"确定删除此技能？",skillsSource:"来源",skillsPath:"路径",skillsNoDoc:"暂无文档。",skillsEligible:"可用",skillsDisabled:"已禁用",skillsRequiresBins:"需要命令",skillsRequiresEnv:"需要环境变量",skillsRequiresConfig:"需要配置",skillsMissing:"缺失",nodesTitle:"节点",nodesSub:"已配对设备与在线连接。",nodesNoFound:"未找到节点。",nodesDevices:"设备",nodesDevicesSub:"配对请求与角色令牌。",nodesPending:"待处理",nodesPaired:"已配对",nodesNoPairedDevices:"暂无已配对设备。",nodesRoleLabel:"角色：",nodesRoleNone:"角色：-",nodesRepairSuffix:" · 修复",nodesRequested:"请求于 ",nodesApprove:"批准",nodesReject:"拒绝",nodesRolesLabel:"角色：",nodesScopesLabel:"范围：",nodesTokensNone:"令牌：无",nodesTokens:"令牌",nodesTokenRevoked:"已撤销",nodesTokenActive:"有效",nodesRotate:"轮换",nodesRevoke:"撤销",nodesBindingTitle:"Exec 节点绑定",nodesBindingSub:"在使用 ",nodesBindingFormModeHint:"请在 Config 选项卡中切换到表单模式以在此编辑绑定。",nodesLoadConfigHint:"加载配置以编辑绑定。",nodesLoadConfig:"加载配置",nodesDefaultBinding:"默认绑定",nodesDefaultBindingSub:"当代理未覆盖节点绑定时使用。",nodesNodeLabel:"节点",nodesAnyNode:"任意节点",nodesNoNodesSystemRun:"没有支持 system.run 的节点。",nodesNoAgentsFound:"未找到代理。",nodesExecApprovalsTitle:"Exec 审批",nodesExecApprovalsSub:"exec host=gateway/node 的允许列表与审批策略。",nodesLoadExecApprovalsHint:"加载 exec 审批以编辑允许列表。",nodesLoadApprovals:"加载审批",nodesTarget:"目标",nodesTargetSub:"网关编辑本地审批；节点编辑所选节点。",nodesHost:"主机",nodesHostGateway:"网关",nodesHostNode:"节点",nodesSelectNode:"选择节点",nodesNoNodesExecApprovals:"尚无节点提供 exec 审批。",nodesScope:"范围",nodesDefaults:"默认",nodesSecurity:"安全",nodesSecurityDefaultSub:"默认安全模式。",nodesSecurityAgentSubPrefix:"默认：",nodesMode:"模式",nodesUseDefaultPrefix:"使用默认（",nodesUseDefaultButton:"使用默认",nodesSecurityDeny:"拒绝",nodesSecurityAllowlist:"允许列表",nodesSecurityFull:"完全",nodesAsk:"询问",nodesAskDefaultSub:"默认提示策略。",nodesAskAgentSubPrefix:"默认：",nodesAskOff:"关",nodesAskOnMiss:"缺失时",nodesAskAlways:"始终",nodesAskFallback:"询问回退",nodesAskFallbackDefaultSub:"当 UI 提示不可用时应用。",nodesAskFallbackAgentSubPrefix:"默认：",nodesFallback:"回退",nodesAutoAllowSkills:"自动允许技能 CLI",nodesAutoAllowSkillsDefaultSub:"允许网关列出的技能可执行文件。",nodesAutoAllowSkillsUsingDefault:"使用默认（",nodesAutoAllowSkillsOverride:"覆盖（",nodesEnabled:"启用",nodesAllowlist:"允许列表",nodesAllowlistSub:"不区分大小写的 glob 模式。",nodesAddPattern:"添加模式",nodesNoAllowlistEntries:"尚无允许列表条目。",nodesNewPattern:"新模式",nodesLastUsedPrefix:"上次使用：",nodesPattern:"模式",nodesRemove:"移除",nodesDefaultAgent:"默认代理",nodesAgent:"代理",nodesUsesDefault:"使用默认（",nodesOverride:"覆盖：",nodesBinding:"绑定",nodesChipPaired:"已配对",nodesChipUnpaired:"未配对",nodesConnected:"已连接",nodesOffline:"离线",nodesNever:"从未",configEnv:"环境",configUpdate:"更新",configAgents:"代理",configAuth:"认证",configChannels:"通道",configMessages:"消息",configCommands:"命令",configHooks:"钩子",configSkills:"技能",configTools:"工具",configGateway:"网关",configWizard:"设置向导",configMeta:"元数据",configLogging:"日志",configBrowser:"浏览器",configUi:"界面",configModels:"模型",configBindings:"绑定",configBroadcast:"广播",configAudio:"音频",configSession:"会话",configCron:"定时",configWeb:"Web",configDiscovery:"发现",configCanvasHost:"画布主机",configTalk:"语音",configPlugins:"插件",configEnvVars:"环境变量",configEnvVarsDesc:"传入网关进程的环境变量",configUpdatesDesc:"自动更新与发布渠道",configAgentsDesc:"代理配置、模型与身份",configAuthDesc:"API 密钥与认证配置",configChannelsDesc:"消息通道（Telegram、Discord、Slack 等）",configMessagesDesc:"消息处理与路由",configCommandsDesc:"自定义斜杠命令",configHooksDesc:"Webhook 与事件钩子",configSkillsDesc:"技能包与能力",configToolsDesc:"工具配置（浏览器、搜索等）",configGatewayDesc:"网关服务（端口、认证、绑定）",configWizardDesc:"设置向导状态与历史",configMetaDesc:"网关元数据与版本",configLoggingDesc:"日志级别与输出",configBrowserDesc:"浏览器自动化",configUiDesc:"界面偏好",configModelsDesc:"AI 模型与提供商",configBindingsDesc:"快捷键绑定",configBroadcastDesc:"广播与通知",configAudioDesc:"音频输入/输出",configSessionDesc:"会话管理与持久化",configCronDesc:"定时任务与自动化",configWebDesc:"Web 服务与 API",configDiscoveryDesc:"服务发现与网络",configCanvasHostDesc:"画布渲染与显示",configTalkDesc:"语音与朗读",configPluginsDesc:"插件管理",configSettingsTitle:"设置",configSearchPlaceholder:"搜索设置…",configAllSettings:"全部设置",configForm:"表单",configRaw:"原始",configUnsavedChanges:"未保存的更改",configUnsavedChangesLabel:"未保存的更改",configOneUnsavedChange:"1 项未保存的更改",configNoChanges:"无更改",configApplying:"应用中…",configApply:"应用",configUpdating:"更新中…",configUpdateButton:"更新",configViewPrefix:"查看 ",configPendingChange:"项待处理更改",configPendingChanges:"项待处理更改",configLoadingSchema:"正在加载架构…",configFormUnsafeWarning:"表单视图无法安全编辑部分字段，请使用原始模式以免丢失配置项。",configRawJson5:"原始 JSON5",configValidityValid:"有效",configValidityInvalid:"无效",configValidityUnknown:"未知",configSchemaUnavailable:"架构不可用。",configUnsupportedSchema:"不支持的架构，请使用原始模式。",configNoSettingsMatchPrefix:"没有匹配「",configNoSettingsMatchSuffix:"」的设置",configNoSettingsInSection:"本部分暂无设置",configUnsupportedSchemaNode:"不支持的架构节点，请使用原始模式。",configSubnavAll:"全部",envVarsSection:"Vars (env.vars)",envModelEnvSection:"模型环境变量 (env.modelEnv)",envShellEnvSection:"Shell 环境 (env.shellEnv)",envVarsKey:"Key",envVarsValue:"Value",envVarsAdd:"新增",envVarsDelete:"删除",envVarsSave:"保存",envVarsEmpty:"暂无环境变量，点击添加创建。",envVarsKeyPlaceholder:"如 API_KEY",envVarsValuePlaceholder:"如 your-secret-value",debugSnapshots:"快照",debugSnapshotsSub:"状态、健康与心跳数据。",debugStatus:"状态",debugHealth:"健康",debugLastHeartbeat:"最近心跳",debugSecurityAudit:"安全审计",debugManualRpc:"手动 RPC",debugManualRpcSub:"使用 JSON 参数发送原始网关方法。",debugMethod:"方法",debugParams:"参数",debugCall:"调用",debugCritical:"严重",debugWarnings:"警告",debugNoCritical:"无严重问题",debugInfo:"信息",debugSecurityAuditDetails:"运行 openclaw security audit --deep 查看详细信息。",debugModels:"模型",debugModelsSub:"来自 models.list 的目录。",debugEventLog:"事件日志",debugEventLogSub:"最新的网关事件。",debugNoEvents:"暂无事件。",logsTitle:"日志",logsSub:"网关文件日志（JSONL）。",logsExportFiltered:"导出已筛选",logsExportVisible:"导出可见"},op={en:sp,zh:ap};function l(e){return op[Ds()][e]}const ip={env:{label:"configEnvVars",desc:"configEnvVarsDesc"},update:{label:"configUpdate",desc:"configUpdatesDesc"},agents:{label:"configAgents",desc:"configAgentsDesc"},auth:{label:"configAuth",desc:"configAuthDesc"},channels:{label:"configChannels",desc:"configChannelsDesc"},messages:{label:"configMessages",desc:"configMessagesDesc"},commands:{label:"configCommands",desc:"configCommandsDesc"},hooks:{label:"configHooks",desc:"configHooksDesc"},skills:{label:"configSkills",desc:"configSkillsDesc"},tools:{label:"configTools",desc:"configToolsDesc"},gateway:{label:"configGateway",desc:"configGatewayDesc"},wizard:{label:"configWizard",desc:"configWizardDesc"},meta:{label:"configMeta",desc:"configMetaDesc"},logging:{label:"configLogging",desc:"configLoggingDesc"},browser:{label:"configBrowser",desc:"configBrowserDesc"},ui:{label:"configUi",desc:"configUiDesc"},models:{label:"configModels",desc:"configModelsDesc"},bindings:{label:"configBindings",desc:"configBindingsDesc"},broadcast:{label:"configBroadcast",desc:"configBroadcastDesc"},audio:{label:"configAudio",desc:"configAudioDesc"},session:{label:"configSession",desc:"configSessionDesc"},cron:{label:"configCron",desc:"configCronDesc"},web:{label:"configWeb",desc:"configWebDesc"},discovery:{label:"configDiscovery",desc:"configDiscoveryDesc"},canvasHost:{label:"configCanvasHost",desc:"configCanvasHostDesc"},talk:{label:"configTalk",desc:"configTalkDesc"},plugins:{label:"configPlugins",desc:"configPluginsDesc"}};function So(e){const t=ip[e];return t?{label:l(t.label),description:l(t.desc)}:{label:e,description:""}}function Bi(e){return new Promise(t=>setTimeout(t,e))}function lp(e){if(!e||typeof e!="object")return[];const t=[];for(const[n,s]of Object.entries(e))n!=="defaults"&&(!s||typeof s!="object"||Array.isArray(s)||s.enabled===!0&&t.push(n.toLowerCase()));return t}function rp(e,t){const n=t.toLowerCase();return e?.channelLabels?.[n]??e?.channelLabels?.[t]??e?.channelDetailLabels?.[n]??t}function cp(e,t){const n=t.toLowerCase(),s=e?.channels?.[n]??e?.channels?.[t];if(s&&typeof s=="object"&&!Array.isArray(s)){const o=s.lastError;if(typeof o=="string"&&o.trim())return o.trim()}const a=e?.channelAccounts?.[n]??e?.channelAccounts?.[t]??[];for(const o of a){const i=o?.lastError;if(typeof i=="string"&&i.trim())return i.trim()}return""}async function xo(e,t){if(!t.length||!e.client||!e.connected)return[];const n=[350,650,1100],s=new Map;for(const o of n){await Bi(o);for(let c=0;c<60&&e.channelsLoading;c++)await Bi(50);await $e(e,!0);const i=e.channelsSnapshot;for(const c of t){const d=cp(i,c);d&&s.set(c.toLowerCase(),d)}}const a=[];for(const o of t){const i=o.toLowerCase(),c=s.get(i);c&&a.push({id:i,label:rp(e.channelsSnapshot,i),message:c})}return a}async function dp(e,t,n){let s=lp(t);if(n?.onlyChannelIds?.length){const i=new Set(n.onlyChannelIds.map(c=>c.toLowerCase()));s=s.filter(c=>i.has(c))}if(!s.length)return;const a=await xo(e,s);if(!a.length)return;const o=a.map(i=>`${i.label}（${i.id}）
${i.message}`).join(`

—

`);await vs(`${l("channelsRuntimeStartErrorTitle")}

${o}`)}function up(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}const z={messageSquare:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M938.688 96a31.936 31.936 0 0 1 32 32v640a31.936 31.936 0 0 1-32 32H498.24l-206.592 103.296a31.552 31.552 0 0 1-32.064-2.048 31.936 31.936 0 0 1-14.272-26.56V800h-160a31.936 31.936 0 0 1-32-32V128a31.936 31.936 0 0 1 32-32h853.376z m-32 64H117.312v576h160a31.936 31.936 0 0 1 32 32v54.912l167.04-83.52a31.552 31.552 0 0 1 14.336-3.392h416v-576zM298.688 384a31.936 31.936 0 0 1 31.36 25.728l0.448 3.136 0.192 3.136v64a31.936 31.936 0 0 1-63.36 6.272l-0.512-3.136-0.128-3.136v-64a32.448 32.448 0 0 1 14.208-26.624A31.936 31.936 0 0 1 298.688 384zM512 384a31.936 31.936 0 0 1 31.36 25.728l0.448 3.136 0.192 3.136v64a31.936 31.936 0 0 1-63.36 6.272l-0.448-3.136L480 480v-64a32.448 32.448 0 0 1 14.208-26.624A31.936 31.936 0 0 1 512 384z m213.312 0a31.936 31.936 0 0 1 31.36 25.728l0.512 3.136 0.128 3.136v64a31.936 31.936 0 1 1-64 0v-64a32.448 32.448 0 0 1 14.272-26.624 31.936 31.936 0 0 1 17.728-5.376z"
      />
    </svg>
  `,messageSquareActive:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M938.688 96a31.936 31.936 0 0 1 32 32v640a31.936 31.936 0 0 1-32 32H498.24l-206.592 103.296a31.552 31.552 0 0 1-32.064-2.048 31.936 31.936 0 0 1-14.272-26.56V800h-160a31.936 31.936 0 0 1-32-32V128a31.936 31.936 0 0 1 32-32z m-640 288a31.936 31.936 0 0 0-32 32v64l0.128 3.136 0.448 3.136a31.936 31.936 0 0 0 63.36-6.272v-64l-0.128-3.136-0.448-3.136A31.936 31.936 0 0 0 298.688 384zM512 384a31.936 31.936 0 0 0-32 32v64l0.192 3.136 0.448 3.136A31.936 31.936 0 0 0 544 480v-64l-0.192-3.136-0.448-3.136A31.936 31.936 0 0 0 512 384z m213.312 0a31.936 31.936 0 0 0-32 32v64a32.448 32.448 0 0 0 14.272 26.624 31.936 31.936 0 0 0 49.728-26.624v-64l-0.128-3.136-0.448-3.136a31.936 31.936 0 0 0-31.36-25.728z"
      />
    </svg>
  `,barChart:r`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,overviewGrid:r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M288 106.688A181.312 181.312 0 0 1 469.312 288v181.312H288a181.312 181.312 0 0 1 0-362.624zM384 384V288A96 96 0 1 0 288 384H384zM288 554.688h181.312V736A181.312 181.312 0 1 1 288 554.688zM288 640A96 96 0 1 0 384 736V640H288z m448-533.312a181.312 181.312 0 0 1 0 362.624H554.688V288A181.312 181.312 0 0 1 736 106.688zM736 384A96 96 0 1 0 640 288V384h96zM554.688 554.688H736A181.312 181.312 0 1 1 554.688 736V554.688zM640 640v96a96 96 0 1 0 96-96H640z"></path>
    </svg>
  `,link:r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M557.248 346.112l60.352 60.288a298.688 298.688 0 0 1 0 422.4l-15.04 15.104a298.688 298.688 0 1 1-422.4-422.4l60.352 60.352a213.312 213.312 0 1 0 301.696 301.696l15.04-15.104a213.312 213.312 0 0 0 0-301.696l-60.288-60.352 60.288-60.288z m286.656 256.448l-60.352-60.352a213.312 213.312 0 0 0-301.696-301.696l-15.104 15.04a213.312 213.312 0 0 0 0 301.696l60.352 60.352-60.352 60.352-60.352-60.352a298.688 298.688 0 0 1 0-422.4l15.104-15.04a298.688 298.688 0 1 1 422.4 422.4z"></path>
    </svg>
  `,historyClock:r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M512 85.312A426.688 426.688 0 1 1 85.312 512h85.376a341.312 341.312 0 1 0 59.072-192h111.552v85.312h-256v-256h85.376V256A426.048 426.048 0 0 1 512 85.312z m42.688 213.376v195.584l138.304 138.432-60.288 60.352-163.392-163.456V298.688h85.376z"></path>
    </svg>
  `,radio:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M789.312 53.312a31.936 31.936 0 0 1 25.152 51.84L620.544 352h254.08a31.936 31.936 0 0 1 23.552 53.76l-512 554.624a31.936 31.936 0 0 1-54.4-29.888l96-365.184H170.752a31.936 31.936 0 0 1-28.352-46.848l234.624-448a31.872 31.872 0 0 1 28.352-17.152h384z m-65.792 64h-298.88l-201.088 384h245.76a31.872 31.872 0 0 1 30.976 40.192L426.24 822.528 801.6 416H554.688a31.68 31.68 0 0 1-30.784-40.64 31.68 31.68 0 0 1 5.632-11.136l193.92-246.912z"
      />
    </svg>
  `,zapActive:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M376.96 70.464l-234.624 448a31.552 31.552 0 0 0 1.728 32.64 31.936 31.936 0 0 0 26.624 14.208h257.152L331.712 930.56a31.872 31.872 0 0 0 25.984 39.808 31.936 31.936 0 0 0 28.48-9.92l512-554.688a31.744 31.744 0 0 0 6.08-33.92 31.936 31.936 0 0 0-29.568-19.776H620.48l193.984-246.912a31.168 31.168 0 0 0 6.272-25.984 31.936 31.936 0 0 0-31.36-25.792h-384a31.872 31.872 0 0 0-28.416 17.152z"
      />
    </svg>
  `,monitor:r`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M626.56 68.736l2.688 0.192a32 32 0 0 1 5.376 1.024c71.68 19.84 134.912 55.168 189.632 106.112a31.808 31.808 0 0 1 6.912 37.568 94.592 94.592 0 0 0-9.856 42.368c0 26.496 9.408 49.152 28.16 67.84 18.752 18.816 41.344 28.16 67.84 28.16h1.6a31.808 31.808 0 0 1 30.72 22.4 459.776 459.776 0 0 1 11.712 229.952 32 32 0 0 1-34.496 25.472 92.48 92.48 0 0 0-77.44 27.648c-18.688 18.752-28.096 41.344-28.096 67.84 0 23.424 7.552 44.032 22.592 61.888a31.936 31.936 0 0 1-1.408 42.816 451.008 451.008 0 0 1-199.424 121.6 31.936 31.936 0 0 1-39.616-20.864C589.248 886.272 558.784 864 512 864c-46.72 0-77.248 22.272-91.52 66.752a31.936 31.936 0 0 1-39.552 20.928 451.072 451.072 0 0 1-199.424-121.664 31.936 31.936 0 0 1-1.408-42.88c15.04-17.792 22.592-38.4 22.592-61.824 0-26.496-9.408-49.088-28.16-67.84a92.48 92.48 0 0 0-67.84-28.16c-3.2 0-6.4 0.192-9.6 0.512a31.936 31.936 0 0 1-34.432-25.472 459.776 459.776 0 0 1 11.712-229.952 31.808 31.808 0 0 1 30.72-22.4h1.792c26.368 0 48.896-9.344 67.648-28.16 18.752-18.688 28.16-41.344 28.16-67.84 0-14.976-3.328-29.12-9.856-42.368a31.808 31.808 0 0 1 6.912-37.568 451.584 451.584 0 0 1 189.632-106.112 32 32 0 0 1 37.056 16.256c17.792 35.008 46.336 52.48 85.568 52.48s67.776-17.472 85.568-52.48a32 32 0 0 1 26.24-17.344l2.688-0.128z m14.08 70.016c-29.888 42.624-72.704 63.936-128.64 63.936-55.936 0-98.752-21.312-128.64-64A386.112 386.112 0 0 0 259.648 208.64c4.736 15.232 7.04 31.04 7.04 47.424 0 44.16-15.552 81.92-46.848 113.152a153.408 153.408 0 0 1-90.304 45.376 393.664 393.664 0 0 0-8.512 151.36c38.08 3.072 71.04 18.496 98.816 46.336 31.296 31.232 46.912 68.928 46.912 113.088 0 28.672-6.784 54.912-20.416 78.592 37.184 34.048 79.232 59.84 126.208 77.44 10.816-19.392 25.6-36.032 44.288-49.92A155.904 155.904 0 0 1 512 800c35.2 0 67.008 10.496 95.232 31.424 18.688 13.888 33.472 30.528 44.288 49.92a385.088 385.088 0 0 0 126.208-77.44 155.072 155.072 0 0 1-20.416-78.592c0-44.16 15.616-81.92 46.912-113.088 27.776-27.84 60.736-43.264 98.816-46.336a397.888 397.888 0 0 0-8.512-151.36 153.28 153.28 0 0 1-90.304-45.44A154.176 154.176 0 0 1 757.312 256c0-16.384 2.368-32.192 7.104-47.36a386.112 386.112 0 0 0-123.84-69.888zM512 330.688c50.048 0 92.8 17.664 128.192 53.12A174.72 174.72 0 0 1 693.312 512a174.72 174.72 0 0 1-53.12 128.192 174.72 174.72 0 0 1-128.192 53.12 174.72 174.72 0 0 1-128.192-53.12A174.72 174.72 0 0 1 330.688 512c0-50.048 17.664-92.8 53.12-128.192A174.72 174.72 0 0 1 512 330.688z m0 64c-32.384 0-60.032 11.456-82.944 34.368-22.912 22.912-34.368 50.56-34.368 82.944s11.456 60.032 34.368 82.944c22.912 22.912 50.56 34.368 82.944 34.368s60.032-11.456 82.944-34.368c22.912-22.912 34.368-50.56 34.368-82.944s-11.456-60.032-34.368-82.944A113.024 113.024 0 0 0 512 394.688z"
      />
    </svg>
  `,settingsActive:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M626.56 68.736l2.688 0.192a32 32 0 0 1 5.376 1.024c71.68 19.84 134.912 55.168 189.632 106.112a31.808 31.808 0 0 1 6.912 37.568 94.592 94.592 0 0 0-9.856 42.368c0 26.496 9.408 49.152 28.16 67.84 18.752 18.816 41.344 28.16 67.84 28.16h1.6a31.808 31.808 0 0 1 30.72 22.4 459.776 459.776 0 0 1 11.712 229.952 32 32 0 0 1-34.496 25.472 92.48 92.48 0 0 0-77.44 27.648c-18.688 18.752-28.096 41.344-28.096 67.84 0 23.424 7.552 44.032 22.592 61.888a31.936 31.936 0 0 1-1.408 42.816 451.008 451.008 0 0 1-199.424 121.6 31.936 31.936 0 0 1-39.616-20.864C589.248 886.272 558.784 864 512 864c-46.72 0-77.248 22.272-91.52 66.752a31.936 31.936 0 0 1-39.552 20.928 451.072 451.072 0 0 1-199.424-121.664 31.936 31.936 0 0 1-1.408-42.88c15.04-17.792 22.592-38.4 22.592-61.824 0-26.496-9.408-49.088-28.16-67.84a92.48 92.48 0 0 0-67.84-28.16c-3.2 0-6.4 0.192-9.6 0.512a31.936 31.936 0 0 1-34.432-25.472 459.776 459.776 0 0 1 11.712-229.952 31.808 31.808 0 0 1 30.72-22.4h1.792c26.368 0 48.896-9.344 67.648-28.16 18.752-18.688 28.16-41.344 28.16-67.84 0-14.976-3.328-29.12-9.856-42.368a31.808 31.808 0 0 1 6.912-37.568 451.584 451.584 0 0 1 189.632-106.112 32 32 0 0 1 37.056 16.256c17.792 35.008 46.336 52.48 85.568 52.48s67.776-17.472 85.568-52.48a32 32 0 0 1 31.68-17.28zM512 330.688a174.72 174.72 0 0 0-128.192 53.12A174.72 174.72 0 0 0 330.688 512c0 50.048 17.664 92.8 53.12 128.192a174.72 174.72 0 0 0 128.192 53.12 174.72 174.72 0 0 0 128.192-53.12A174.72 174.72 0 0 0 693.312 512a174.72 174.72 0 0 0-53.12-128.192A174.72 174.72 0 0 0 512 330.688z"
      />
    </svg>
  `,bug:r`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M853.312 938.688H170.688A42.688 42.688 0 0 1 128 896V128c0-23.552 19.072-42.688 42.688-42.688h682.624c23.616 0 42.688 19.136 42.688 42.688v768a42.688 42.688 0 0 1-42.688 42.688z m-42.624-85.376V170.688H213.312v682.624h597.376zM341.312 298.688h341.376V384H341.312V298.688z m0 170.624h341.376v85.376H341.312V469.312z m0 170.688h213.376v85.312H341.312V640z"></path>
    </svg>
  `,usageBars:r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M128 512h85.312v384H128V512z m682.688-170.688H896V896h-85.312V341.312z m-341.376-256h85.376V896H469.312V85.312z"></path>
    </svg>
  `,traceBars:r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M213.312 298.688h85.376v426.624H213.312V298.688z m-170.624 128H128v170.624H42.688V426.688zM384 85.312h85.312v768H384v-768z m170.688 85.376H640v768H554.688v-768z m170.624 128h85.376v426.624h-85.376V298.688z m170.688 128h85.312v170.624H896V426.688z"></path>
    </svg>
  `,folder:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,modelCube:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M514.03174601 49.75644445a31.872 31.872 0 0 1 16.256 4.48l362.624 213.312a31.872 31.872 0 0 1 15.808 27.52v2.304a29.44 29.44 0 0 1 0.192 3.648l-0.256 3.2v417.536a31.872 31.872 0 0 1-15.744 27.584l-360.192 211.968a32.128 32.128 0 0 1-36.48 0.64l-1.024-0.768-360.064-211.84a31.872 31.872 0 0 1-15.808-27.52V304.15644445a32 32 0 0 1 0-6.784v-2.304a31.872 31.872 0 0 1 15.808-27.584L497.77574601 54.17244445A31.872 31.872 0 0 1 514.03174601 49.75644445z m-330.688 306.56v347.136L482.03174601 879.13244445V527.00444445L183.34374601 356.31644445z m661.312 0L546.03174601 526.81244445v352.256l298.752-175.68V356.25244445zM514.03174601 118.81244445L210.03174601 297.75644445l303.872 173.824 304.128-173.888L514.03174601 118.87644445z"
      />
    </svg>
  `,modelCubeActive:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M117.248 302.05866667a31.872 31.872 0 0 0 16 24.96L480 525.29066667v408.256l0.192 3.136 0.448 3.072a31.936 31.936 0 0 0 13.568 20.416l-0.896-0.64-360.192-211.968a32 32 0 0 1-3.456-2.304l-3.072-2.752a31.872 31.872 0 0 1-9.28-22.528z m789.376 0.512v417.408a31.872 31.872 0 0 1-15.744 27.584l-360 211.84a31.936 31.936 0 0 0 13.12-25.856V525.09866667l346.752-198.08 3.52-2.304 3.2-2.752a31.872 31.872 0 0 0 9.408-22.72l-0.256 3.328zM512 47.97866667a31.872 31.872 0 0 1 16.256 4.48l362.624 213.312a31.872 31.872 0 0 1 15.808 27.52l-0.064 2.304-0.384-2.56a32 32 0 0 0-0.768-3.072l-1.024-2.944a31.936 31.936 0 0 0-45.44-15.552l-347.136 198.4-346.88-198.4L160 269.22666667a31.552 31.552 0 0 0-28.608 3.52 31.936 31.936 0 0 0-14.208 26.56l0.192-5.888a31.872 31.872 0 0 1 15.808-27.584L495.744 52.39466667A31.872 31.872 0 0 1 512 47.97866667z"
      />
    </svg>
  `,sandbox:r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M597.312 384V170.688h-384v682.624h258.432c13.952 17.792 30.912 33.472 50.304 46.272l59.328 39.04H170.368a42.368 42.368 0 0 1-42.368-42.24V127.552c0-22.848 19.2-42.24 42.752-42.24h469.12l256.128 256V384H597.312zM512 469.312h384V723.2c0 42.24-21.376 81.728-56.96 105.216L704 917.248l-135.04-88.96A126.016 126.016 0 0 1 512 723.2V469.312zM597.312 723.2c0 13.504 6.912 26.24 18.56 33.92l88.128 57.984 88.064-57.984c11.712-7.68 18.56-20.416 18.56-33.92V554.688H597.376v168.448z"></path>
    </svg>
  `,envVars:r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M213.312 298.688a64 64 0 1 1 128 0 64 64 0 0 1-128 0z m64-149.376a149.312 149.312 0 1 0 0 298.688 149.312 149.312 0 0 0 0-298.688z m234.688 192h341.312V256H512v85.312z m170.688 384a64 64 0 1 1 128 0 64 64 0 0 1-128 0z m64-149.312a149.312 149.312 0 1 0 0 298.688 149.312 149.312 0 0 0 0-298.688z m-576 106.688V768H512v-85.312H170.688z"></path>
    </svg>
  `,approvals:r`
    <svg viewBox="0 0 24 24">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  `,users:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M512 96c50.048 0 92.8 17.728 128.192 53.12a174.72 174.72 0 0 1 53.12 128.192 174.72 174.72 0 0 1-53.12 128.256A174.72 174.72 0 0 1 512 458.688a174.72 174.72 0 0 1-128.192-53.12 174.72 174.72 0 0 1-53.12-128.256c0-50.048 17.664-92.8 53.12-128.192A174.72 174.72 0 0 1 512 96z m0 64c-32.384 0-60.032 11.456-82.944 34.368-22.912 22.912-34.368 50.56-34.368 82.944 0 32.448 11.456 60.096 34.368 83.008 22.912 22.912 50.56 34.368 82.944 34.368s60.032-11.52 82.944-34.368c22.912-22.912 34.368-50.56 34.368-83.008 0-32.384-11.456-60.032-34.368-82.944A113.024 113.024 0 0 0 512 160zM639.36 565.376c47.68 0.128 80.448 0.96 98.304 2.368 32.64 2.688 59.2 9.216 79.68 19.648a197.824 197.824 0 0 1 88.576 88.576c10.432 20.48 16.96 47.104 19.648 79.744 1.6 19.84 2.432 58.048 2.432 114.688v25.6a31.936 31.936 0 0 1-32 32H128a31.936 31.936 0 0 1-32-32v-42.048c0.192-47.616 0.96-80.384 2.432-98.24 2.688-32.64 9.216-59.264 19.648-79.744l7.04-12.672a197.12 197.12 0 0 1 81.536-75.904c20.48-10.432 47.04-16.96 79.68-19.648 19.84-1.6 58.112-2.432 114.752-2.432z m-0.512 64H385.152c-46.08 0.128-77.248 0.832-93.568 2.176-24.32 1.984-42.88 6.272-55.872 12.864a135.36 135.36 0 0 0-60.608 60.608l-3.136 7.04a175.68 175.68 0 0 0-9.728 48.832c-1.472 17.408-2.176 51.776-2.24 103.104h704c0-51.328-0.768-85.696-2.24-103.04-1.92-24.32-6.272-42.88-12.864-55.936a135.36 135.36 0 0 0-60.608-60.608c-12.992-6.592-31.616-10.88-55.872-12.864-18.112-1.472-54.592-2.24-109.44-2.24z"
      />
    </svg>
  `,usersActive:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M383.808 149.12a174.72 174.72 0 0 0-53.12 128.192c0 50.112 17.664 92.8 53.12 128.256A174.72 174.72 0 0 0 512 458.688a174.72 174.72 0 0 0 128.192-53.12 174.72 174.72 0 0 0 53.12-128.256 174.72 174.72 0 0 0-53.12-128.192A174.72 174.72 0 0 0 512 96a174.72 174.72 0 0 0-128.192 53.12zM206.656 587.392a197.824 197.824 0 0 0-88.576 88.576c-10.432 20.48-16.96 47.104-19.648 79.744-1.6 19.84-2.432 58.048-2.432 114.688v25.6a31.936 31.936 0 0 0 32 32h768a31.936 31.936 0 0 0 32-32v-25.6c0-56.64-0.832-94.848-2.432-114.688-2.688-32.64-9.216-59.264-19.648-79.744a197.824 197.824 0 0 0-88.576-88.576c-20.48-10.432-47.04-16.96-79.68-19.648-19.84-1.6-58.112-2.432-114.752-2.432H401.088c-56.64 0-94.912 0.832-114.752 2.432-32.64 2.688-59.2 9.216-79.68 19.648z"
      />
    </svg>
  `,menu:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M928 224h-832q-3.2 0-6.272-0.64t-5.952-1.792q-2.944-1.216-5.568-2.944-2.56-1.792-4.8-4.032-2.24-2.176-4.032-4.8-1.728-2.624-2.944-5.568-1.216-2.88-1.792-5.952Q64 195.136 64 192q0-3.2 0.64-6.272t1.792-5.952q1.216-2.944 2.944-5.568 1.792-2.56 4.032-4.8 2.176-2.24 4.8-4.032 2.624-1.728 5.568-2.944 2.88-1.216 5.952-1.792 3.136-0.64 6.272-0.64h832q3.2 0 6.272 0.64t5.952 1.792q2.944 1.216 5.568 2.944 2.56 1.792 4.8 4.032 2.24 2.176 4.032 4.8 1.728 2.624 2.944 5.568 1.216 2.88 1.792 5.952 0.64 3.136 0.64 6.272 0 3.2-0.64 6.272t-1.792 5.952q-1.216 2.944-2.944 5.568-1.792 2.56-4.032 4.8-2.176 2.24-4.8 4.032-2.624 1.728-5.568 2.944-2.88 1.216-5.952 1.792-3.136 0.64-6.272 0.64zM672 544h-576q-3.2 0-6.272-0.64t-5.952-1.792q-2.944-1.216-5.568-2.944-2.56-1.792-4.8-4.032-2.24-2.176-4.032-4.8-1.728-2.624-2.944-5.568-1.216-2.88-1.792-5.952Q64 515.136 64 512q0-3.2 0.64-6.272t1.792-5.952q1.216-2.944 2.944-5.568 1.792-2.56 4.032-4.8 2.176-2.24 4.8-4.032 2.624-1.728 5.568-2.944 2.88-1.216 5.952-1.792 3.136-0.64 6.272-0.64h576q3.2 0 6.272 0.64t5.952 1.792q2.944 1.216 5.568 2.944 2.56 1.792 4.8 4.032 2.24 2.176 4.032 4.8 1.728 2.624 2.944 5.568 1.216 2.88 1.792 5.952 0.64 3.136 0.64 6.272 0 3.2-0.64 6.272t-1.792 5.952q-1.216 2.944-2.944 5.568-1.792 2.56-4.032 4.8-2.176 2.24-4.8 4.032-2.624 1.728-5.568 2.944-2.88 1.216-5.952 1.792-3.136 0.64-6.272 0.64zM928 864h-832q-3.2 0-6.272-0.64t-5.952-1.792q-2.944-1.216-5.568-2.944-2.56-1.792-4.8-4.032-2.24-2.176-4.032-4.8-1.728-2.624-2.944-5.568-1.216-2.88-1.792-5.952Q64 835.136 64 832q0-3.2 0.64-6.272t1.792-5.952q1.216-2.944 2.944-5.568 1.792-2.56 4.032-4.8 2.176-2.24 4.8-4.032 2.624-1.728 5.568-2.944 2.88-1.216 5.952-1.792 3.136-0.64 6.272-0.64h832q3.2 0 6.272 0.64t5.952 1.792q2.944 1.216 5.568 2.944 2.56 1.792 4.8 4.032 2.24 2.176 4.032 4.8 1.728 2.624 2.944 5.568 1.216 2.88 1.792 5.952 0.64 3.136 0.64 6.272 0 3.2-0.64 6.272t-1.792 5.952q-1.216 2.944-2.944 5.568-1.792 2.56-4.032 4.8-2.176 2.24-4.8 4.032-2.624 1.728-5.568 2.944-2.88 1.216-5.952 1.792-3.136 0.64-6.272 0.64zM761.408 390.592q-4.48-4.48-6.976-10.368-2.432-5.888-2.432-12.224 0-3.2 0.64-6.272t1.792-5.952q1.216-2.944 2.944-5.568 1.792-2.56 4.032-4.8 2.176-2.24 4.8-4.032 2.624-1.728 5.568-2.944 2.88-1.216 5.952-1.792 3.136-0.64 6.272-0.64 6.4 0 12.224 2.432 5.888 2.432 10.368 6.976l143.552 143.488q9.6 9.6 9.6 23.104t-9.6 23.04l-143.488 143.616q-4.48 4.48-10.432 6.912-5.888 2.432-12.224 2.432-3.2 0-6.272-0.64t-5.952-1.792q-2.944-1.216-5.568-2.944-2.56-1.792-4.8-4.032-2.24-2.176-4.032-4.8-1.728-2.624-2.944-5.568-1.216-2.88-1.792-5.952-0.64-3.136-0.64-6.272 0-6.4 2.432-12.224 2.432-5.888 6.976-10.368L882.688 512l-121.408-121.344z"
      />
    </svg>
  `,moreHorizontal:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  `,x:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M237.25561051 729.82523262l492.56962212-492.56962211q2.4628482-2.4628482 5.3197522-4.33461238t5.96009193-3.20170206q3.20170205-1.32993788 6.55117598-2.01953603 3.34947324-0.59108336 6.79746126-0.68959679 3.39873029 0.04925706 6.79746058 0.68959746 3.34947324 0.68959747 6.55117598 2.01953468 3.15244567 1.2806815 5.96009261 3.20170274 2.90616106 1.92102124 5.31975153 4.33461305 2.4628482 2.4628482 4.33461306 5.31975153t3.20170273 5.96009262q1.32993788 3.20170205 2.01953468 6.55117596 0.59108336 3.34947324 0.68959747 6.7974606-0.04925706 3.39873029-0.68959679 6.79746126-0.68959747 3.34947324-2.01953603 6.55117597-1.2806815 3.15244567-3.25095912 6.009349-1.87176418 2.85690401-4.28535532 5.27049515L286.51257327 779.08219537q-2.4628482 2.4628482-5.31975221 4.33461239t-5.96009194 3.20170206q-3.20170205 1.32993788-6.55117597 2.01953603-3.34947324 0.59108336-6.79746126 0.68959679-3.39873029-0.04925706-6.7974606-0.68959747-3.34947324-0.68959747-6.55117596-2.01953468-3.15244567-1.2806815-5.96009262-3.20170273Q239.66920233 781.49578585 237.25561118 779.0821947q-2.4628482-2.4628482-4.33461304-5.31975154t-3.20170273-5.9600926q-1.32993788-3.20170205-2.01953468-6.55117598-0.59108336-3.34947324-0.68959748-6.79746058 0.04925706-3.39873029 0.68959679-6.79746126 0.68959747-3.34947324 2.01953603-6.55117598 1.2806815-3.15244567 3.20170207-5.96009193 1.92102124-2.90616106 4.33461237-5.31975221z M729.82523262 779.08219537L237.25561051 286.51257327q-2.4628482-2.4628482-4.33461238-5.31975221t-3.20170206-5.96009194q-1.32993788-3.20170205-2.01953603-6.55117597-0.59108336-3.34947324-0.68959679-6.79746126 0.04925706-3.39873029 0.68959746-6.79746059 0.68959747-3.34947324 2.01953468-6.55117597 1.2806815-3.15244567 3.20170274-5.96009262 1.92102124-2.90616106 4.33461305-5.31975153 2.4628482-2.4628482 5.31975153-4.33461305t5.96009262-3.20170273q3.20170205-1.32993788 6.55117596-2.01953468 3.34947324-0.59108336 6.7974606-0.68959747 3.39873029 0.04925706 6.79746126 0.68959679 3.34947324 0.68959747 6.55117597 2.01953603 3.15244567 1.2806815 5.96009194 3.20170206 2.90616106 1.92102124 5.31975221 4.33461238l492.5696221 492.56962211q2.4628482 2.4628482 4.33461238 5.31975221t3.20170207 5.96009193q1.32993788 3.20170205 2.01953603 6.55117598 0.59108336 3.34947324 0.68959679 6.79746126-0.04925706 3.39873029-0.68959747 6.79746058-0.68959747 3.34947324-2.01953468 6.55117598-1.2806815 3.15244567-3.20170274 5.9600926-1.92102124 2.90616106-4.33461306 5.31975153-2.4628482 2.4628482-5.31975153 4.33461306t-5.96009261 3.20170274q-3.20170205 1.32993788-6.55117597 2.01953468-3.34947324 0.59108336-6.79746058 0.68959747-3.39873029-0.04925706-6.79746126-0.68959679-3.34947324-0.68959747-6.55117598-2.01953603-3.15244567-1.2806815-5.96009193-3.20170207-2.90616106-1.92102124-5.31975221-4.33461238z"
      />
    </svg>
  `,windowMinimise:r`
    <svg viewBox="0 0 24 24">
      <path d="M5 12.5h14" />
    </svg>
  `,windowMaximise:r`
    <svg viewBox="0 0 24 24">
      <rect x="5.5" y="5.5" width="13" height="13" rx="0.5" />
    </svg>
  `,windowRestore:r`
    <svg viewBox="0 0 24 24">
      <path d="M9.5 9.5h9v9h-9z" />
      <path d="M7.5 14.5h-2v-9h9v2" />
    </svg>
  `,windowClose:r`
    <svg viewBox="0 0 24 24">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  `,check:r`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,chevronRight:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  `,copy:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M672.46933334 159.53066667Q568.53333334 55.46666667 421.33333334 55.46666667T170.19733334 159.53066667Q66.13333334 263.46666667 66.13333334 410.66666667t104.064 251.136Q274.13333334 765.86666667 421.33333334 765.86666667q130.88 0 227.648-82.304l5.696 5.76 256 255.936a32 32 0 1 0 45.248-45.312l-256-255.936-5.76-5.696Q776.53333334 541.54666667 776.53333334 410.66666667q0-147.136-104.064-251.136z m-452.48 49.728Q303.31733334 125.86666667 421.33333334 125.86666667t201.408 83.392Q706.13333334 292.71466667 706.13333334 410.66666667q0 117.952-83.392 201.408Q539.28533334 695.46666667 421.33333334 695.46666667q-117.952 0-201.408-83.392Q136.53333334 528.61866667 136.53333334 410.66666667q0-117.952 83.392-201.408z"
      />
    </svg>
  `,brain:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M341.312 117.312c56 0 103.744 19.84 143.36 59.392 10.56 10.56 19.712 21.696 27.392 33.408 7.552-11.712 16.704-22.848 27.264-33.408a195.264 195.264 0 0 1 143.36-59.392h234.624a31.936 31.936 0 0 1 32 32V768a31.936 31.936 0 0 1-32 32H640c-26.496 0-49.152 9.344-67.84 28.16-18.816 18.688-28.16 41.344-28.16 67.84a31.936 31.936 0 0 1-25.728 31.36l-3.136 0.512L512 928a31.936 31.936 0 0 1-32-32c0-26.496-9.344-49.152-28.16-67.84A92.48 92.48 0 0 0 384 800H106.688a31.936 31.936 0 0 1-32-32V149.312a31.936 31.936 0 0 1 32-32h234.624z m0 64H138.688V736H384c36.416 0 68.416 10.624 96 31.808V320c0-38.272-13.568-70.976-40.64-98.048a133.632 133.632 0 0 0-98.048-40.64z m544 0h-202.624c-38.336 0-71.04 13.568-98.048 40.64A133.632 133.632 0 0 0 544 320v447.808A153.28 153.28 0 0 1 640 736h245.312V181.312z"
      />
    </svg>
  `,bookActive:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M341.312 117.312c56 0 103.744 19.84 143.36 59.392 10.56 10.56 19.712 21.696 27.392 33.408 7.552-11.712 16.704-22.848 27.264-33.408a195.264 195.264 0 0 1 143.36-59.392h234.624a31.936 31.936 0 0 1 32 32V768a31.936 31.936 0 0 1-32 32H640c-26.496 0-49.152 9.344-67.84 28.16-18.816 18.688-28.16 41.344-28.16 67.84a31.936 31.936 0 1 1-64 0c0-26.496-9.344-49.152-28.16-67.84A92.48 92.48 0 0 0 384 800H106.688a31.936 31.936 0 0 1-32-32V149.312a31.936 31.936 0 0 1 32-32z"
      />
    </svg>
  `,loader:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,alarmClock:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M512 53.312c126.656 0 234.752 44.8 324.352 134.4C925.888 277.184 970.688 385.28 970.688 512s-44.8 234.752-134.4 324.352C746.816 925.888 638.72 970.688 512 970.688s-234.752-44.8-324.352-134.4C98.112 746.816 53.312 638.72 53.312 512s44.8-234.752 134.4-324.352C277.184 98.112 385.28 53.312 512 53.312z m0 64c-108.992 0-201.984 38.528-279.04 115.648C155.84 310.016 117.312 403.008 117.312 512c0 108.992 38.528 201.984 115.648 279.04 77.056 77.12 170.048 115.648 279.04 115.648 108.992 0 201.984-38.528 279.04-115.648 77.12-77.056 115.648-170.048 115.648-279.04 0-108.992-38.528-201.984-115.648-279.04C713.984 155.84 620.992 117.312 512 117.312zM512.192 224a31.936 31.936 0 0 1 31.36 25.792l0.448 3.072 0.192 3.2v242.88l171.52 171.52a31.68 31.68 0 0 1 6.912 34.88 31.936 31.936 0 0 1-52.224 10.368L489.6 534.848a31.68 31.68 0 0 1-9.408-22.656V256a31.936 31.936 0 0 1 32-32z"
      />
    </svg>
  `,alarmClockActive:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M512 53.312c126.656 0 234.752 44.8 324.352 134.4C925.888 277.184 970.688 385.28 970.688 512s-44.8 234.752-134.4 324.352C746.816 925.888 638.72 970.688 512 970.688s-234.752-44.8-324.352-134.4C98.112 746.816 53.312 638.72 53.312 512s44.8-234.752 134.4-324.352C277.184 98.112 385.28 53.312 512 53.312zM512.192 224a31.936 31.936 0 0 0-32 32v256.192a31.68 31.68 0 0 0 9.344 22.656l180.864 180.864a31.808 31.808 0 0 0 40.448 3.968 31.936 31.936 0 0 0 4.8-49.216l-171.52-171.52V256L544 252.864l-0.448-3.072a31.936 31.936 0 0 0-31.36-25.792z"
      />
    </svg>
  `,wrench:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M682.688 53.312c47.744 0 92.672 11.136 134.656 33.408a31.68 31.68 0 0 1 16.896 31.296 31.68 31.68 0 0 1-9.28 19.584l-139.712 139.712 61.44 61.44L886.4 199.04A31.68 31.68 0 0 1 921.28 192a31.68 31.68 0 0 1 16 14.592c22.272 41.984 33.408 86.912 33.408 134.656 0 79.552-28.16 147.456-84.352 203.648-56.256 56.256-124.16 84.352-203.648 84.352-39.68 0-77.44-7.68-113.088-23.04L214.656 961.28a31.936 31.936 0 0 1-45.312 0L62.72 854.656a31.936 31.936 0 0 1 0-45.312L417.664 454.4a283.264 283.264 0 0 1-23.04-113.088c0-79.488 28.16-147.392 84.416-203.648 56.192-56.192 124.096-84.352 203.648-84.352z m0 64c-61.888 0-114.688 21.888-158.4 65.6a215.808 215.808 0 0 0-65.6 158.4c0 37.184 8.64 72.128 25.92 104.704a31.808 31.808 0 0 1-5.696 37.632L130.56 832l61.44 61.44 348.352-348.352a31.808 31.808 0 0 1 37.632-5.696c32.64 17.28 67.52 25.92 104.704 25.92 61.824 0 114.624-21.824 158.4-65.6a215.808 215.808 0 0 0 65.6-158.4c0-21.76-3.008-42.88-8.96-63.104L769.28 406.656a31.936 31.936 0 0 1-45.248 0L617.344 299.968a31.936 31.936 0 0 1 0-45.248l128.448-128.448a222.656 222.656 0 0 0-63.104-8.96z"
      />
    </svg>
  `,wrenchActive:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M970.688 341.312c0-47.744-11.136-92.672-33.408-134.656a31.808 31.808 0 0 0-40.512-14.592 31.68 31.68 0 0 0-10.368 6.976l-139.712 139.712-61.44-61.44L824.96 137.6a31.808 31.808 0 0 0 2.048-43.008 31.68 31.68 0 0 0-9.664-7.872 283.392 283.392 0 0 0-134.656-33.408c-79.552 0-147.456 28.16-203.648 84.352-56.256 56.256-84.352 124.16-84.352 203.648 0 39.68 7.68 77.44 23.04 113.088L62.72 809.344a31.936 31.936 0 0 0 0 45.312l106.624 106.624a31.936 31.936 0 0 0 45.312 0L569.6 606.336c35.712 15.36 73.344 23.04 113.088 23.04 79.488 0 147.392-28.16 203.648-84.416 56.192-56.192 84.352-124.096 84.352-203.648z"
      />
    </svg>
  `,fileCode:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:r`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:r`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M53.312 512a458.688 458.688 0 1 1 474.112 458.432L512 970.688A458.688 458.688 0 0 1 53.312 512z m577.984 196.544l-11.712 1.152c-34.176 3.328-70.08 4.992-107.584 4.992-41.856 0-81.6-2.048-119.36-6.144 7.424 33.344 16.832 64.448 28.416 93.248 26.048 65.28 54.208 100.032 84.48 104.384l6.464 0.512c32.64 0 62.976-34.944 90.944-104.896 11.52-28.8 20.992-59.904 28.352-93.248z m-495.488-76.8l1.664 4.992a395.648 395.648 0 0 0 254.784 251.456c-10.88-17.92-21.12-38.784-30.656-62.592a679.424 679.424 0 0 1-36.224-126.976A678.912 678.912 0 0 1 198.4 662.4a423.872 423.872 0 0 1-62.592-30.656z m752.384 0l-7.936 4.672a442.688 442.688 0 0 1-54.656 25.984c-38.848 15.552-81.216 27.584-126.976 36.224a678.912 678.912 0 0 1-36.224 126.976 423.872 423.872 0 0 1-30.656 62.592 395.712 395.712 0 0 0 256.448-256.448zM512 373.312c-46.4 0-89.984 2.688-130.688 8A1012.928 1012.928 0 0 0 373.312 512c0 46.4 2.688 89.984 8 130.688A1011.84 1011.84 0 0 0 512 650.688c46.4 0 89.984-2.688 130.688-8A1011.84 1011.84 0 0 0 650.688 512c0-46.4-2.688-89.984-8-130.688A1012.992 1012.992 0 0 0 512 373.312z m-196.48 19.328l-8.128 1.92c-30.336 7.04-58.688 15.872-85.184 26.496-69.952 27.968-104.896 58.24-104.896 90.944 0 32.64 34.944 62.976 104.896 90.944 28.8 11.52 59.904 20.992 93.248 28.352A1103.936 1103.936 0 0 1 309.312 512c0-41.856 2.048-81.6 6.144-119.36z m393.024 0.064l1.152 11.712c3.328 34.176 4.992 70.08 4.992 107.584 0 41.792-2.048 81.536-6.144 119.296a593.92 593.92 0 0 0 93.248-28.352c69.952-27.968 104.896-58.24 104.896-90.944 0-32.64-34.944-62.976-104.896-90.944a596.864 596.864 0 0 0-93.248-28.352zM392.32 135.808l-4.992 1.664a395.648 395.648 0 0 0-251.456 254.784c17.92-10.88 38.784-21.12 62.592-30.656a679.424 679.424 0 0 1 126.976-36.224c8.64-45.76 20.672-88.128 36.224-126.976 9.536-23.808 19.776-44.672 30.656-62.592z m239.488 0l4.672 7.936c9.152 16.064 17.856 34.304 25.984 54.656 15.552 38.848 27.584 81.216 36.224 126.976 45.76 8.64 88.128 20.672 126.976 36.224 23.808 9.536 44.672 19.776 62.592 30.656a395.712 395.712 0 0 0-256.448-256.448zM512 117.312c-32.64 0-62.976 34.944-90.944 104.896-11.52 28.8-20.992 59.904-28.352 93.248 37.696-4.096 77.44-6.144 119.296-6.144 41.792 0 81.536 2.048 119.296 6.144a593.792 593.792 0 0 0-28.352-93.248c-26.048-65.28-54.208-100.032-84.48-104.384L512 117.312z"
      />
    </svg>
  `,globeActive:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M512 53.312a458.688 458.688 0 1 1 0 917.376A458.688 458.688 0 0 1 512 53.312L502.4 53.76c-57.216 4.8-104.128 53.056-140.8 144.64a679.424 679.424 0 0 0-36.224 126.976c-45.76 8.64-88.128 20.672-126.976 36.224C101.76 400.32 53.312 450.432 53.312 512c0 61.568 48.384 111.68 145.088 150.4 38.848 15.552 81.216 27.584 126.976 36.224 8.64 45.76 20.672 88.128 36.224 126.976 38.72 96.704 88.832 145.088 150.4 145.088 61.568 0 111.68-48.384 150.4-145.088 15.552-38.848 27.584-81.216 36.224-126.976a678.912 678.912 0 0 0 126.976-36.224c96.704-38.72 145.088-88.832 145.088-150.4 0-61.568-48.384-111.68-145.088-150.4a679.424 679.424 0 0 0-126.976-36.224A678.912 678.912 0 0 0 662.4 198.4C623.68 101.76 573.568 53.312 512 53.312z m119.296 655.232a596.864 596.864 0 0 1-28.352 93.248c-27.968 69.952-58.24 104.896-90.944 104.896-32.64 0-62.976-34.944-90.944-104.896a596.864 596.864 0 0 1-28.352-93.248c37.696 4.096 77.44 6.144 119.296 6.144 37.504 0 73.408-1.664 107.584-4.992zM512 373.312c46.4 0 89.984 2.688 130.688 8 5.312 40.704 8 84.288 8 130.688 0 46.4-2.688 89.984-8 130.688A1011.84 1011.84 0 0 1 512 650.688a1014.4 1014.4 0 0 1-130.688-8A1012.992 1012.992 0 0 1 373.312 512c0-46.4 2.688-89.984 8-130.688A1012.928 1012.928 0 0 1 512 373.312z m-196.48 19.328c-4.16 37.76-6.208 77.504-6.208 119.36 0 41.792 2.048 81.536 6.144 119.296a593.792 593.792 0 0 1-93.248-28.352C152.256 574.976 117.312 544.704 117.312 512c0-32.64 34.944-62.976 104.896-90.944a589.888 589.888 0 0 1 85.12-26.496z m393.024 0.064c33.344 7.36 64.448 16.768 93.248 28.352 69.952 27.968 104.896 58.24 104.896 90.944 0 32.64-34.944 62.976-104.896 90.944-28.8 11.52-59.904 20.992-93.248 28.352 4.096-37.76 6.144-77.44 6.144-119.296 0-37.504-1.664-73.408-4.992-107.584zM512 117.312c32.64 0 62.976 34.944 90.944 104.896 11.52 28.8 20.992 59.904 28.352 93.248A1103.936 1103.936 0 0 0 512 309.312c-41.856 0-81.6 2.048-119.36 6.144a600.576 600.576 0 0 1 28.416-93.248c27.968-69.952 58.24-104.896 90.944-104.896z"
      />
    </svg>
  `,github:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M512.04403225 71.68085965c-243.27632451 0-440.31914035 197.04281481-440.31914033 440.31914035 0 194.84121945 126.04135348 359.41049837 301.06821162 417.75278408 22.01595665 3.85279213 30.27194053-9.35678207 30.27194157-20.9151595 0-10.45757924-0.55039858-45.13271151-0.55039961-82.00943913-110.63018392 20.36475988-139.25092769-26.96954698-148.05731015-51.73749964-4.95359033-12.65917562-26.4191484-51.73749861-45.13271253-62.19507784-15.41116955-8.25598388-37.42712724-28.62074375-0.55039859-29.17114337 34.67513227-0.55039858 59.4430839 31.92313731 67.69906779 45.13271151 39.6287226 66.59826958 102.92459863 47.88470648 128.24294986 36.32632905 3.85279213-28.62074375 15.41116955-47.88470648 28.07034517-58.89268429-97.9710083-11.00797884-200.34520836-48.98550467-200.34520938-217.40757572 0-47.88470648 17.06236633-87.51342908 45.13271254-118.33576922-4.40319174-11.00797884-19.8143613-56.14069035 4.4031907-116.68457142 0 0 36.87672763-11.55837743 121.0877642 45.13271151 35.22553086-9.90718065 72.6526581-14.86077098 110.07978431-14.86077097 37.42712724 0 74.85425346 4.95359033 110.07978535 14.86077097 84.21103553-57.24148855 121.08776316-45.13271151 121.08776316-45.13271151 24.21755305 60.5438821 8.80638246 105.67659361 4.40319174 116.68457142 28.07034517 30.82234014 45.13271151 69.90066313 45.1327115 118.33576922 0 168.97246963-102.92459863 206.39959687-200.89560694 217.40757572 15.96156917 13.75997278 29.72154195 40.17912118 29.72154196 81.45904055 0 58.89268532-0.55039858 106.22699218-0.55039962 121.08776316 0 11.55837743 8.25598388 25.3183502 30.27194156 20.9151595A441.04566693 441.04566693 0 0 0 952.36317158 512c0-243.27632451-197.04281481-440.31914035-440.31913933-440.31914035z"
      />
    </svg>
  `,image:r`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:r`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,plus:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M169.14285688 472.38095198h685.71428625q3.42857156 0 6.72 0.68571469t6.37714218 1.92q3.15428531 1.30285687 5.96571469 3.15428531 2.74285688 1.92 5.21142844 4.25142938 2.33142844 2.4 4.25142844 5.21142843 1.85142844 2.81142844 3.15428625 5.96571375 1.30285687 3.08571469 1.92 6.37714313 0.68571469 3.36 0.68571375 6.72 0 3.42857156-0.68571375 6.72t-1.92 6.37714312q-1.30285687 3.15428531-3.15428625 5.96571375-1.92 2.74285688-4.25142844 5.21142844-2.4 2.33142844-5.21142844 4.25142938-2.81142844 1.85142844-5.96571469 3.15428531-3.08571469 1.30285687-6.44571375 1.92-3.29142844 0.68571469-6.65142843 0.68571469H169.14285688q-3.42857156 0-6.72000001-0.68571469t-6.37714218-1.92q-3.15428531-1.30285687-5.96571469-3.15428531-2.74285688-1.92-5.21142844-4.25142938-2.33142844-2.4-4.25142844-5.21142844-1.85142844-2.81142844-3.15428625-5.96571375-1.30285687-3.08571469-1.92-6.37714312Q134.85714312 510.02666667 134.85714312 506.66666667q0-3.42857156 0.68571376-6.72t1.92-6.37714312q1.30285687-3.15428531 3.15428625-5.96571375 1.92-2.74285688 4.25142843-5.21142844 2.4-2.33142844 5.21142844-4.25142938 2.81142844-1.85142844 5.96571469-3.15428531 3.08571469-1.30285687 6.37714219-1.92 3.36-0.68571469 6.72-0.68571469z M477.71428531 849.52380979V163.80952355q0-3.42857156 0.68571469-6.72000001t1.92-6.37714218q1.30285687-3.15428531 3.15428531-5.96571469 1.92-2.74285688 4.25142938-5.21142844 2.4-2.33142844 5.21142843-4.25142844 2.81142844-1.85142844 5.96571375-3.15428625 3.08571469-1.30285687 6.37714313-1.92 3.36-0.68571469 6.72-0.68571375 3.42857156 0 6.72 0.68571375t6.37714312 1.92q3.15428531 1.30285687 5.96571375 3.15428625 2.74285688 1.92 5.21142844 4.25142844 2.33142844 2.4 4.25142938 5.21142844 1.85142844 2.81142844 3.15428531 5.96571469 1.30285687 3.08571469 1.92 6.37714218 0.68571469 3.36 0.68571469 6.72v685.71428625q0 3.42857156-0.68571469 6.72t-1.92 6.37714219q-1.30285687 3.15428531-3.15428531 5.96571469-1.92 2.74285688-4.25142938 5.21142844-2.4 2.33142844-5.21142844 4.25142843-2.81142844 1.85142844-5.96571375 3.15428625-3.08571469 1.30285687-6.37714312 1.92-3.36 0.68571469-6.72 0.68571375-3.42857156 0-6.72-0.68571375t-6.37714313-1.92q-3.15428531-1.30285687-5.96571375-3.15428625-2.74285688-1.92-5.21142843-4.25142843-2.33142844-2.4-4.25142938-5.21142844-1.85142844-2.81142844-3.15428531-5.96571469-1.30285687-3.08571469-1.92-6.37714219-0.68571469-3.36-0.68571469-6.72z"
      />
    </svg>
  `,minus:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M169.14285688 472.38095198h685.71428625q3.42857156 0 6.72 0.68571469t6.37714218 1.92q3.15428531 1.30285687 5.96571469 3.15428531 2.74285688 1.92 5.21142844 4.25142938 2.33142844 2.4 4.25142844 5.21142843 1.85142844 2.81142844 3.15428625 5.96571375 1.30285687 3.08571469 1.92 6.37714313 0.68571469 3.36 0.68571375 6.72 0 3.42857156-0.68571375 6.72t-1.92 6.37714312q-1.30285687 3.15428531-3.15428625 5.96571375-1.92 2.74285688-4.25142844 5.21142844-2.4 2.33142844-5.21142844 4.25142938-2.81142844 1.85142844-5.96571469 3.15428531-3.08571469 1.30285687-6.44571375 1.92-3.29142844 0.68571469-6.65142843 0.68571469H169.14285688q-3.42857156 0-6.72000001-0.68571469t-6.37714218-1.92q-3.15428531-1.30285687-5.96571469-3.15428531-2.74285688-1.92-5.21142844-4.25142938-2.33142844-2.4-4.25142844-5.21142844-1.85142844-2.81142844-3.15428625-5.96571375-1.30285687-3.08571469-1.92-6.37714312Q134.85714312 510.02666667 134.85714312 506.66666667q0-3.42857156 0.68571376-6.72t1.92-6.37714312q1.30285687-3.15428531 3.15428625-5.96571375 1.92-2.74285688 4.25142843-5.21142844 2.4-2.33142844 5.21142844-4.25142938 2.81142844-1.85142844 5.96571469-3.15428531 3.08571469-1.30285687 6.37714219-1.92 3.36-0.68571469 6.72-0.68571469z"
      />
    </svg>
  `,chatBubble:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M311.0912 888.5248l-225.792 50.176 50.176-225.792a426.6496 426.6496 0 1 1 175.616 175.616z m-12.4416-376.4736a213.3504 213.3504 0 0 0 426.6496 0H640a128 128 0 1 1-256 0H298.6496z"
      />
    </svg>
  `,documentation:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M128 789.312v-576a128 128 0 0 1 128-128h597.312c23.616 0 42.688 19.136 42.688 42.688v768a42.688 42.688 0 0 1-42.688 42.688h-576A149.312 149.312 0 0 1 128 789.312z m682.688 64v-128H277.312a64 64 0 0 0 0 128h533.376z m-597.376-198.976a148.736 148.736 0 0 1 64-14.336h533.376V170.688H256a42.688 42.688 0 0 0-42.688 42.624v441.024z"
      />
    </svg>
  `,puzzle:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `,download:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  `,trash:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      <line x1="10" y1="11" x2="10" y2="17"/>
      <line x1="14" y1="11" x2="14" y2="17"/>
    </svg>
  `,power:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
      <line x1="12" y1="2" x2="12" y2="12"/>
    </svg>
  `,powerOff:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18.36 6.64A9 9 0 0 1 20.77 15"/>
      <path d="M14.12 14.12A3 3 0 0 1 9 12a3 3 0 0 1 1.12-2.12"/>
      <path d="M6.64 6.64a9 9 0 0 0 12.73 12.73"/>
      <line x1="2" y1="2" x2="22" y2="22"/>
    </svg>
  `,loader2:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  `,send:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M128 554.688h256V469.312H128V78.72a21.312 21.312 0 0 1 31.616-18.688l787.712 433.28a21.312 21.312 0 0 1 0 37.376l-787.712 433.28A21.312 21.312 0 0 1 128 945.28V554.688z"
      />
    </svg>
  `,info:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M506.048 102.016a128 128 0 0 1 139.712-1.536l177.28 112.832H896c23.552 0 42.624 19.136 42.624 42.688v384a42.688 42.688 0 0 1-42.624 42.688h-64.832a113.088 113.088 0 0 1-54.848 104.448l-217.28 130.432c-27.456 16.448-61.504 16-88.32-0.32a85.376 85.376 0 0 1-109.312 3.072L142.08 747.968a85.376 85.376 0 0 1-24.064-104.32 85.312 85.312 0 0 1-32.64-67.2V256c0-23.552 19.072-42.688 42.624-42.688h211.072l167.04-111.36zM178.048 582.208l29.504-25.856a128 128 0 0 1 179.008 10.24l115.264 126.848a128 128 0 0 1 16.896 148.736l213.76-128.192a28.032 28.032 0 0 0 11.84-33.728L555.392 415.808a42.688 42.688 0 0 0-46.976-16.064l-106.048 31.808A128 128 0 0 1 275.2 399.488l-12.544-12.544a85.248 85.248 0 0 1-20.288-88.32h-71.68v277.824l7.424 5.76z m421.952-409.728a42.688 42.688 0 0 0-46.592 0.512l-230.4 153.6 12.416 12.544a42.688 42.688 0 0 0 42.432 10.688l106.048-31.808a128 128 0 0 1 140.928 48.192l165.12 231.104h63.36V298.688h-30.208c-16.256 0-32.128-4.672-45.824-13.376l-177.28-112.832zM263.68 620.608l-68.928 60.288 219.328 172.352 30.08-52.544a42.688 42.688 0 0 0-5.504-49.92L323.392 624a42.688 42.688 0 0 0-59.648-3.392z"
      />
    </svg>
  `,chatPrompt:r`
    <svg viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        stroke="none"
        d="M883.776 346.816l-10.496 24.128a21.568 21.568 0 0 1-39.872 0l-10.496-24.128a186.176 186.176 0 0 0-94.72-96l-32.384-14.464a22.656 22.656 0 0 1 0-41.088l30.592-13.632a186.24 186.24 0 0 0 96-99.2l10.88-26.112a21.632 21.632 0 0 1 40.128 0l10.816 26.048a186.24 186.24 0 0 0 96 99.264l30.656 13.632a22.656 22.656 0 0 1 0 41.088l-32.448 14.4a186.176 186.176 0 0 0-94.656 96zM426.688 128h170.624v85.312H426.688a256 256 0 0 0-256 256c0 154.048 105.024 254.528 341.312 361.856v-105.856h85.312a256 256 0 0 0 256-256h85.376a341.312 341.312 0 0 1-341.376 341.376V960c-213.312-85.312-512-213.312-512-490.688A341.312 341.312 0 0 1 426.688 128z"
      />
    </svg>
  `},pp=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,Xn=/<\s*\/?\s*final\b[^<>]*>/gi,Wi=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function Hi(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const a of e.matchAll(n)){const o=(a.index??0)+a[1].length;t.push({start:o,end:o+a[0].length-a[1].length})}const s=/`+[^`]+`+/g;for(const a of e.matchAll(s)){const o=a.index??0,i=o+a[0].length;t.some(d=>o>=d.start&&i<=d.end)||t.push({start:o,end:i})}return t.sort((a,o)=>a.start-o.start),t}function zi(e,t){return t.some(n=>e>=n.start&&e<n.end)}function mp(e,t){return e.trimStart()}function gp(e,t){if(!e||!pp.test(e))return e;let n=e;if(Xn.test(n)){Xn.lastIndex=0;const c=[],d=Hi(n);for(const p of n.matchAll(Xn)){const m=p.index??0;c.push({start:m,length:p[0].length,inCode:zi(m,d)})}for(let p=c.length-1;p>=0;p--){const m=c[p];m.inCode||(n=n.slice(0,m.start)+n.slice(m.start+m.length))}}else Xn.lastIndex=0;const s=Hi(n);Wi.lastIndex=0;let a="",o=0,i=!1;for(const c of n.matchAll(Wi)){const d=c.index??0,p=c[1]==="/";zi(d,s)||(i?p&&(i=!1):(a+=n.slice(o,d),p||(i=!0)),o=d+c[0].length)}return a+=n.slice(o),mp(a)}function Nn(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function Oe(e){if(!e&&e!==0)return"n/a";const t=Date.now()-e,n=Math.abs(t),s=t<0?"from now":"ago",a=Math.round(n/1e3);if(a<60)return t<0?"in <1m":`${a}s ago`;const o=Math.round(a/60);if(o<60)return`${o}m ${s}`;const i=Math.round(o/60);return i<48?`${i}h ${s}`:`${Math.round(i/24)}d ${s}`}function Na(e){if(!e&&e!==0)return"n/a";if(e<1e3)return`${e}ms`;const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);if(n<60)return`${n}m`;const s=Math.round(n/60);return s<48?`${s}h`:`${Math.round(s/24)}d`}function Ua(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function Qi(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function oc(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function ys(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function na(e){return gp(e)}function fp(e){const t=e.trim();return t?/^https?:\/\//i.test(t)?{imgSrc:`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(t)}`,openPageUrl:t}:t.startsWith("data:")?{imgSrc:t,openPageUrl:null}:{imgSrc:`data:image/png;base64,${t}`,openPageUrl:null}:{imgSrc:"",openPageUrl:null}}function hp(e){const s=e?.channels?.weixin?.credentials,a=typeof s?.botToken=="string"?s.botToken.trim():"",o=typeof s?.botId=="string"?s.botId.trim():"";return a!==""&&o!==""}function vp(e){if(!e.weixinQrModalOpen)return k;const t=e.weixinQrModalImageSrc&&!e.weixinQrModalLoading&&!e.weixinQrModalSuccess&&!e.weixinQrModalError,n=(e.weixinQrModalLoading||e.weixinQrModalPolling)&&!e.weixinQrModalSuccess&&!e.weixinQrModalError;return r`
    <div
      class="channel-panel-overlay channel-panel-overlay--centered"
      style="z-index: 1200;"
      @click=${s=>{s.target.classList.contains("channel-panel-overlay")&&e.onWeixinQrModalClose()}}
    >
      <div class="card channel-panel" style="max-width: 400px; width: 92%;" @click=${s=>s.stopPropagation()}>
        <div class="row" style="justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div class="card-title" style="margin: 0;">${l("channelWeixinQrModalTitle")}</div>
          <button type="button" class="btn btn--icon" aria-label="关闭" @click=${()=>e.onWeixinQrModalClose()}>
            ${z.x}
          </button>
        </div>

        ${e.weixinQrModalReplaceWarn?r`<div class="callout danger" style="margin-bottom: 12px;">
                ${l("channelWeixinQrReplaceWarn")}
              </div>`:k}

        ${e.weixinQrModalError?r`<div class="callout danger" style="margin-bottom: 12px;">
                ${e.weixinQrModalError}
              </div>`:k}

        ${e.weixinQrModalSuccess?r`<div class="callout" style="margin-bottom: 12px;">
                ${l("channelWeixinQrSuccessClosing")}
              </div>`:k}

        ${t?r`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                  <img
                    src=${e.weixinQrModalImageSrc}
                    alt="Weixin QR"
                    referrerpolicy="no-referrer"
                    style="max-width: 220px; height: auto;"
                  />
                  ${e.weixinQrModalScanPageUrl?r`
                          <a
                            class="btn primary"
                            href=${e.weixinQrModalScanPageUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            ${l("channelWeixinOpenScanPage")}
                          </a>
                        `:k}
                  <div class="muted" style="font-size: 12px; text-align: center; max-width: 320px;">
                    ${l("channelWeixinQrScanHint")}
                  </div>
                </div>
              `:k}

        ${n?r`
                <div
                  style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: ${t?"16px":"8px"};"
                >
                  <div
                    class="config-loading__spinner"
                    role="status"
                    aria-label=${e.weixinQrModalLoading?l("channelWeixinQrPreparing"):e.weixinQrModalScanned?l("channelWeixinQrConfirmOnPhone"):l("channelWeixinQrWaiting")}
                  ></div>
                  <div class="muted" style="font-size: 13px; text-align: center;">
                    ${e.weixinQrModalLoading?l("channelWeixinQrPreparing"):e.weixinQrModalScanned?l("channelWeixinQrConfirmOnPhone"):l("channelWeixinQrWaiting")}
                  </div>
                </div>
              `:k}

        <div class="row" style="margin-top: 18px; justify-content: flex-end;">
          <button type="button" class="btn" @click=${()=>e.onWeixinQrModalClose()}>
            ${l("channelWeixinQrModalCancel")}
          </button>
        </div>
      </div>
    </div>
  `}function yp(e){const{props:t,weixin:n,accountCountLabel:s}=e,a=t.snapshot?.channelAccounts?.weixin?.[0],o=a?.probe,i=!!n?.configured||!!a?.configured||hp(t.configForm),c=t.weixinQrModalOpen&&(t.weixinQrModalLoading||t.weixinQrModalPolling)&&!t.weixinQrModalSuccess;return r`
    ${vp(t)}
    <div class="card">
      <div class="card-title">${l("channelWeixin")}</div>
      <div class="card-sub">${l("channelWeixinSub")}</div>
      ${s}

      <div class="account-card-list">
        <div class="account-card">
          <div class="account-card-header">
            <div class="account-card-title">${a?.name||l("channelWeixin")}</div>
            <div class="account-card-id">${a?.appId??a?.accountId??l("commonNA")}</div>
          </div>
          <div class="status-list account-card-status">
            <div>
              <span class="label">${l("channelConfigured")}</span>
              <span>${l(i?"commonYes":"commonNo")}</span>
            </div>
            <div>
              <span class="label">${l("channelWeixinTransport")}</span>
              <span>${o?.transport??"weixin_ilink_poll"}</span>
            </div>
            <div>
              <span class="label">${l("channelWeixinBotId")}</span>
              <span>${a?.appId?a.appId:l("commonNA")}</span>
            </div>
            <div>
              <span class="label">${l("channelRunning")}</span>
              <span>${n?.running?l("commonYes"):l("commonNo")}</span>
            </div>
            <div>
              <span class="label">${l("channelConnected")}</span>
              <span>${(()=>{const d=n?.connected??a?.connected;return l(d===!0?"commonYes":d===!1?"commonNo":"commonNA")})()}</span>
            </div>
            <div>
              <span class="label">${l("channelLastInbound")}</span>
              <span>${a?.lastInboundAt?Oe(a.lastInboundAt):l("commonNA")}</span>
            </div>
          </div>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:k}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${c}
          @click=${()=>t.onWeixinQrStart()}
        >
          ${l(c?"channelWeixinQrWorking":"channelWeixinQrStart")}
        </button>
        <button
          class="btn primary"
          @click=${()=>t.onChannelSelect("weixin")}
        >
          ${l("channelsConfigure")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${l("commonRefresh")}
        </button>
      </div>
    </div>
  `}function Ln(e){const t=e.weworkQrPollTimer;t!=null&&(window.clearInterval(t),e.weworkQrPollTimer=null)}function Co(e){const t=e.weworkQrSuccessCloseTimer;t!=null&&(window.clearTimeout(t),e.weworkQrSuccessCloseTimer=null)}function bp(e){const s=e.configForm?.channels?.wework?.credentials,a=typeof s?.botId=="string"?s.botId.trim():"",o=typeof s?.botSecret=="string"?s.botSecret.trim():"";return!!(a!==""&&o!==""||e.channelsSnapshot?.channels?.wework?.configured||e.channelsSnapshot?.channelAccounts?.wework?.[0]?.configured)}function ic(e){Ln(e),Co(e),e.weworkQrModalOpen=!1,e.weworkQrModalLoading=!1,e.weworkQrModalPolling=!1,e.weworkQrModalSuccess=!1,e.weworkQrModalError=null,e.weworkQrModalReplaceWarn=!1,e.weworkQrModalAuthUrl=null,e.weworkQrModalGenPageUrl=null}async function wp(e,t){if(!e.client||!e.connected){Ln(e),e.weworkQrModalPolling=!1;return}try{const n=await e.client.request("channels.wework.qr.poll",{scode:t,timeoutMs:35e3});if((n.status??"").trim()==="success"&&n.botId&&n.botSecret){Ln(e),Me(e,["channels","wework","credentials","botId"],n.botId),Me(e,["channels","wework","credentials","botSecret"],n.botSecret),Me(e,["channels","wework","enabled"],!0);const o=e.configForm?.channels?.wework;if(!o||typeof o!="object"){e.weworkQrModalError=l("channelWeWorkQrSaveMissingForm"),e.weworkQrModalPolling=!1;return}if(e.lastError=null,await Se(e,{channels:{wework:ne(o)}}),e.lastError){e.weworkQrModalError=e.lastError,e.weworkQrModalPolling=!1;return}const i=await xo(e,["wework"]);if(i.length){e.weworkQrModalError=i.map(c=>`${c.label}: ${c.message}`).join(`
`),e.weworkQrModalPolling=!1;return}e.weworkQrModalPolling=!1,e.weworkQrModalSuccess=!0,e.weworkQrModalAuthUrl=null,e.weworkQrModalGenPageUrl=null,Co(e),e.weworkQrSuccessCloseTimer=window.setTimeout(()=>{e.weworkQrSuccessCloseTimer=null,ic(e),$e(e,!0)},1600)}}catch(n){e.weworkQrModalError=String(n),Ln(e),e.weworkQrModalPolling=!1}}async function kp(e){if(!(!e.client||!e.connected)){Ln(e),Co(e),e.weworkQrModalOpen=!0,e.weworkQrModalReplaceWarn=bp(e),e.weworkQrModalError=null,e.weworkQrModalSuccess=!1,e.weworkQrModalLoading=!0,e.weworkQrModalPolling=!1,e.weworkQrModalAuthUrl=null,e.weworkQrModalGenPageUrl=null;try{await ee(e);const t=await e.client.request("channels.wework.qr.start",{timeoutMs:6e4}),n=t.scode?.trim()??"";if(!n){e.weworkQrModalLoading=!1,e.weworkQrModalError=l("channelWeWorkQrStartFailed");return}e.weworkQrModalLoading=!1,e.weworkQrModalAuthUrl=t.authUrl??null,e.weworkQrModalGenPageUrl=t.genPageUrl??null,e.weworkQrModalPolling=!0,e.weworkQrPollTimer=window.setInterval(()=>{wp(e,n)},2800)}catch(t){e.weworkQrModalLoading=!1,e.weworkQrModalPolling=!1,e.weworkQrModalError=String(t)}}}function $p(e){ic(e)}function Sp(e){const s=e.configForm?.channels?.weixin?.credentials,a=typeof s?.botToken=="string"?s.botToken.trim():"",o=typeof s?.botId=="string"?s.botId.trim():"";return!!(a!==""&&o!==""||e.channelsSnapshot?.channels?.weixin?.configured||e.channelsSnapshot?.channelAccounts?.weixin?.[0]?.configured)}function lc(e){const t=e.weixinQrSuccessCloseTimer;t!=null&&(window.clearTimeout(t),e.weixinQrSuccessCloseTimer=null)}function rc(e){e.weixinQrPollAbort=!0,lc(e),e.weixinQrModalOpen=!1,e.weixinQrModalLoading=!1,e.weixinQrModalPolling=!1,e.weixinQrModalSuccess=!1,e.weixinQrModalError=null,e.weixinQrModalReplaceWarn=!1,e.weixinQrModalImageSrc=null,e.weixinQrModalScanPageUrl=null,e.weixinQrModalScanned=!1,e.weixinQrSessionQrcode="",e.weixinQrSessionBaseUrl="",e.weixinQrSessionBotType=""}async function xp(e){const t=e.weixinQrSessionQrcode.trim();if(!t||!e.client||!e.connected){e.weixinQrModalPolling=!1;return}for(;!e.weixinQrPollAbort&&e.weixinQrModalOpen&&e.weixinQrModalPolling&&e.client&&e.connected;)try{const n=await e.client.request("channels.weixin.qr.poll",{qrcode:t,baseUrl:e.weixinQrSessionBaseUrl||void 0,botType:e.weixinQrSessionBotType||void 0,timeoutMs:45e3}),s=(n.status??"").trim();if(s==="scaned"&&(e.weixinQrModalScanned=!0),s==="expired"){e.weixinQrModalError=l("channelWeixinQrExpired"),e.weixinQrModalPolling=!1;return}if(s==="confirmed"&&n.botToken&&n.botId){Me(e,["channels","weixin","credentials","botToken"],n.botToken),Me(e,["channels","weixin","credentials","botId"],n.botId),n.baseUrl&&Me(e,["channels","weixin","credentials","baseUrl"],n.baseUrl),n.userId&&Me(e,["channels","weixin","credentials","userId"],n.userId),Me(e,["channels","weixin","enabled"],!0);const o=e.configForm?.channels?.weixin;if(!o||typeof o!="object"){e.weixinQrModalError=l("channelWeixinQrSaveMissingForm"),e.weixinQrModalPolling=!1;return}if(e.lastError=null,await Se(e,{channels:{weixin:ne(o)}}),e.lastError){e.weixinQrModalError=e.lastError,e.weixinQrModalPolling=!1;return}const i=await xo(e,["weixin"]);if(i.length){e.weixinQrModalError=i.map(c=>`${c.label}: ${c.message}`).join(`
`),e.weixinQrModalPolling=!1;return}e.weixinQrModalPolling=!1,e.weixinQrModalSuccess=!0,e.weixinQrModalImageSrc=null,e.weixinQrModalScanPageUrl=null,e.weixinQrSuccessCloseTimer=window.setTimeout(()=>{e.weixinQrSuccessCloseTimer=null,rc(e),$e(e,!0)},1600);return}}catch(n){e.weixinQrModalError=String(n),e.weixinQrModalPolling=!1;return}e.weixinQrModalPolling=!1}async function Cp(e){if(!(!e.client||!e.connected)){e.weixinQrPollAbort=!0,lc(e),e.weixinQrModalOpen=!0,e.weixinQrPollAbort=!1,e.weixinQrModalReplaceWarn=Sp(e),e.weixinQrModalError=null,e.weixinQrModalSuccess=!1,e.weixinQrModalLoading=!0,e.weixinQrModalPolling=!1,e.weixinQrModalImageSrc=null,e.weixinQrModalScanPageUrl=null,e.weixinQrModalScanned=!1,e.weixinQrSessionQrcode="",e.weixinQrSessionBaseUrl="",e.weixinQrSessionBotType="";try{await ee(e);const t=await e.client.request("channels.weixin.qr.start",{timeoutMs:6e4}),n=t.qrcode?.trim()??"";if(!n){e.weixinQrModalLoading=!1,e.weixinQrModalError=l("channelWeixinQrStartFailed");return}e.weixinQrSessionQrcode=n,e.weixinQrSessionBaseUrl=(t.baseUrl??"").trim(),e.weixinQrSessionBotType=(t.botType??"").trim();const{imgSrc:s,openPageUrl:a}=fp(t.qrImageContent??"");e.weixinQrModalLoading=!1,e.weixinQrModalImageSrc=s||null,e.weixinQrModalScanPageUrl=a,e.weixinQrModalPolling=!0,xp(e)}catch(t){e.weixinQrModalLoading=!1,e.weixinQrModalPolling=!1,e.weixinQrModalError=String(t)}}}function Mp(e){rc(e)}async function Ap(e,t){await ju(e,t),await $e(e,!0)}async function Ep(e){await Gu(e),await $e(e,!0)}async function Tp(e){await Ju(e),await $e(e,!0)}async function Lp(e){const t=e.configForm?.channels,n=t!=null&&typeof t=="object";if(!(n&&!await Te(l("channelsConfigSaveConfirm")))&&(n?await Se(e,{channels:t}):await Ra(e),await ee(e),await $e(e,!0),!e.lastError)){const s=e.configForm?.channels,a=e.channelsSelectedChannelId?.trim().toLowerCase()||"";await dp(e,s,n&&a?{onlyChannelIds:[a]}:void 0)}}async function _p(e){await ee(e),await $e(e,!0)}function Pp(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...a]=n.split(":");if(!s||a.length===0)continue;const o=s.trim(),i=a.join(":").trim();o&&i&&(t[o]=i)}return t}function cc(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function dc(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function Ip(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=up(n??void 0)}function Dp(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function Rp(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function Np(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function Up(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=cc(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(dc(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.values)}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const o=a?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:o,success:null,fieldErrors:Pp(a?.details)};return}if(!a.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await $e(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function Op(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=cc(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(dc(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({autoMerge:!0})}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const d=a?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:d,success:null};return}const o=a.merged??a.imported??null,i=o?{...t.values,...o}:t.values,c=!!(i.banner||i.website||i.nip05||i.lud16);e.nostrProfileFormState={...t,importing:!1,values:i,error:null,success:a.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:c},a.saved&&await $e(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}function Un(e){return(e??"").trim().toLowerCase()}function Mo(e,t){return Un(e)===Un(t)}function uc(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),a=n.slice(2).join(":");return!s||!a?null:{agentId:s,rest:a}}function Fp(e){const t=(e??"").trim();return t?/^agent:[^:]+:employee:[^:]+:run:.+/i.test(t):!1}function Bp(e){const t=(e??"").trim();return t?/^agent:[^:]+:employee:[^:]+$/i.test(t):!1}const Oa=450;function Fn(e,t=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const n=()=>{const s=e.querySelector(".chat-thread");if(s){const a=getComputedStyle(s).overflowY;if(a==="auto"||a==="scroll"||s.scrollHeight-s.clientHeight>1)return s}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const s=n();if(!s)return;const a=s.scrollHeight-s.scrollTop-s.clientHeight,o=t&&!e.chatHasAutoScrolled;if(!(o||e.chatUserNearBottom||a<Oa)){e.chatNewMessagesBelow=!0;return}o&&(e.chatHasAutoScrolled=!0),s.scrollTop=s.scrollHeight,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const c=o?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const d=n();if(!d)return;const p=d.scrollHeight-d.scrollTop-d.clientHeight;(o||e.chatUserNearBottom||p<Oa)&&(d.scrollTop=d.scrollHeight,e.chatUserNearBottom=!0)},c)})})}function pc(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function Wp(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<Oa,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function Hp(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function Fa(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function zp(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),a=document.createElement("a"),o=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");a.href=s,a.download=`openclaw-logs-${t}-${o}.log`,a.click(),URL.revokeObjectURL(s)}function Qp(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}function Rs(e){const t=(e??"").trim();if(!t)return"";const n=t.match(/^(?:wss?:\/\/)?([^/]+?)(?:\/|$)/);return n?n[1]:t}function Kp(e){const t=Rs(e);return t?`${typeof location<"u"&&location.protocol==="https:"?"wss":"ws"}://${t}`:""}function dn(e){const t=Rs(e);return t?`${typeof location<"u"&&location.protocol==="https:"?"https":"http"}://${t}`:""}async function Ns(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,a]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const o=s;e.debugModels=Array.isArray(o?.models)?o?.models:[],e.debugHeartbeat=a}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function qp(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const Vp=2e3,jp=new Set(["trace","debug","info","warn","error","fatal"]);function Gp(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function Jp(e){if(typeof e!="string")return null;const t=e.toLowerCase();return jp.has(t)?t:null}function Yp(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,a=Jp(n?.logLevelName??n?.level),o=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,i=Gp(o);let c=null;i&&(typeof i.subsystem=="string"?c=i.subsystem:typeof i.module=="string"&&(c=i.module)),!c&&o&&o.length<120&&(c=o);let d=null;return typeof t[1]=="string"?d=t[1]:!i&&typeof t[0]=="string"?d=t[0]:typeof t.message=="string"&&(d=t.message),{raw:e,time:s,level:a,subsystem:c,message:d??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Ao(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),o=(Array.isArray(s.lines)?s.lines.filter(c=>typeof c=="string"):[]).map(Yp),i=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=i?o:[...e.logsEntries,...o].slice(-Vp),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function Us(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function Zp(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{Us(e,{quiet:!0})},5e3))}function Xp(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Eo(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Ao(e,{quiet:!0})},2e3))}function To(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function Lo(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&Ns(e)},3e3))}function _o(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function em(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function tm(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const a=await e.client.request("agent.identity.get",{agentId:s});a&&(e.agentIdentityById={...e.agentIdentityById,[s]:a})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function nm(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function mc(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(a=>a.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}function Po(e){let t=(e??"").trim();return t?(t.toLowerCase().startsWith("local:")&&(t=t.slice(6)),t=t.replaceAll(":","-"),t.trim().toLowerCase()):""}async function un(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function Bn(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function gc(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",at:new Date(n).toISOString()}}if(e.scheduleKind==="every"){const n=ys(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const s=e.everyUnit;return{kind:"every",everyMs:n*(s==="minutes"?6e4:s==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function fc(e){if(e.payloadKind==="systemEvent"){const a=e.payloadText.trim();if(!a)throw new Error("System event text required.");return{kind:"systemEvent",text:a}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t},s=ys(e.timeoutSeconds,0);return s>0&&(n.timeoutSeconds=s),n}function es(e){return String(e).padStart(2,"0")}function sm(e){const t=new Date(e);return Number.isNaN(t.getTime())?"":`${t.getFullYear()}-${es(t.getMonth()+1)}-${es(t.getDate())}T${es(t.getHours())}:${es(t.getMinutes())}`}function am(e,t){const n=e.schedule?.kind??t.scheduleKind,s={...t};if(s.name=e.name??"",s.description=e.description??"",s.agentId=e.agentId??"",s.digitalEmployeeId=Po(e.digitalEmployeeId??""),s.enabled=!!e.enabled,s.sessionTarget=e.sessionTarget??t.sessionTarget,s.wakeMode=e.wakeMode??t.wakeMode,s.scheduleKind=n,n==="at"){const i=Date.parse(e.schedule?.at??"");s.scheduleAt=Number.isFinite(i)?sm(i):""}else if(n==="every"){const i=Number(e.schedule?.everyMs??0),c=6e4,d=36e5,p=864e5;i>0&&i%p===0?(s.everyUnit="days",s.everyAmount=String(Math.max(1,Math.round(i/p)))):i>0&&i%d===0?(s.everyUnit="hours",s.everyAmount=String(Math.max(1,Math.round(i/d)))):(s.everyUnit="minutes",s.everyAmount=String(Math.max(1,Math.round((i||c)/c))))}else s.cronExpr=String(e.schedule?.expr??"").trim()||t.cronExpr,s.cronTz=String(e.schedule?.tz??"").trim();const a=e.payload?.kind??t.payloadKind;s.payloadKind=a,a==="systemEvent"?s.payloadText=String(e.payload?.text??""):s.payloadText=String(e.payload?.message??"");const o=e.delivery?.mode??"none";return s.deliveryMode=o==="announce"?"announce":"none",s.deliveryChannel=e.delivery?.channel??"last",s.deliveryTo=e.delivery?.to??"",s}async function Ki(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=gc(e.cronForm),n=fc(e.cronForm),s=e.cronForm.sessionTarget==="isolated"&&e.cronForm.payloadKind==="agentTurn"&&e.cronForm.deliveryMode?{mode:e.cronForm.deliveryMode==="announce"?"announce":"none",channel:e.cronForm.deliveryChannel.trim()||"last",to:e.cronForm.deliveryTo.trim()||void 0}:void 0,a=e.cronForm.agentId.trim(),o=Po(e.cronForm.digitalEmployeeId.trim()),i={name:e.cronForm.name.trim(),description:e.cronForm.description.trim()||void 0,agentId:a||void 0,digitalEmployeeId:o||void 0,enabled:e.cronForm.enabled,schedule:t,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:n,delivery:s};if(!i.name)throw new Error("Name required.");await e.client.request("cron.add",i),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await Bn(e),await un(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function om(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const n=gc(e.cronForm),s=fc(e.cronForm),a=e.cronForm.sessionTarget==="isolated"&&e.cronForm.payloadKind==="agentTurn"&&e.cronForm.deliveryMode?{mode:e.cronForm.deliveryMode==="announce"?"announce":"none",channel:e.cronForm.deliveryChannel.trim()||"last",to:e.cronForm.deliveryTo.trim()||void 0}:void 0,o={enabled:e.cronForm.enabled,name:e.cronForm.name.trim(),description:e.cronForm.description.trim(),agentId:e.cronForm.agentId.trim()||void 0,digitalEmployeeId:Po(e.cronForm.digitalEmployeeId.trim())||"",schedule:n,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:s,delivery:a};if(!o.name)throw new Error("Name required.");await e.client.request("cron.update",{id:t,patch:o}),await Bn(e),await un(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function qi(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await Bn(e),await un(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function Vi(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await Mn(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function ji(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await Bn(e),await un(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function Mn(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}const hc="openclaw.device.auth.v1";function Io(e){return e.trim()}function im(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}function Do(){try{const e=window.localStorage.getItem(hc);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function vc(e){try{window.localStorage.setItem(hc,JSON.stringify(e))}catch{}}function lm(e){const t=Do();if(!t||t.deviceId!==e.deviceId)return null;const n=Io(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function yc(e){const t=Io(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},s=Do();s&&s.deviceId===e.deviceId&&(n.tokens={...s.tokens});const a={token:e.token,role:t,scopes:im(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=a,vc(n),a}function bc(e){const t=Do();if(!t||t.deviceId!==e.deviceId)return;const n=Io(e.role);if(!t.tokens[n])return;const s={...t,tokens:{...t.tokens}};delete s.tokens[n],vc(s)}const wc={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:ge,n:ps,Gx:Gi,Gy:Ji,a:sa,d:aa,h:rm}=wc,Dt=32,Ro=64,cm=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},ue=(e="")=>{const t=new Error(e);throw cm(t,ue),t},dm=e=>typeof e=="bigint",um=e=>typeof e=="string",pm=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",mt=(e,t,n="")=>{const s=pm(e),a=e?.length,o=t!==void 0;if(!s||o&&a!==t){const i=n&&`"${n}" `,c=o?` of length ${t}`:"",d=s?`length=${a}`:`type=${typeof e}`;ue(i+"expected Uint8Array"+c+", got "+d)}return e},Os=e=>new Uint8Array(e),kc=e=>Uint8Array.from(e),$c=(e,t)=>e.toString(16).padStart(t,"0"),Sc=e=>Array.from(mt(e)).map(t=>$c(t,2)).join(""),Ge={_0:48,_9:57,A:65,F:70,a:97,f:102},Yi=e=>{if(e>=Ge._0&&e<=Ge._9)return e-Ge._0;if(e>=Ge.A&&e<=Ge.F)return e-(Ge.A-10);if(e>=Ge.a&&e<=Ge.f)return e-(Ge.a-10)},xc=e=>{const t="hex invalid";if(!um(e))return ue(t);const n=e.length,s=n/2;if(n%2)return ue(t);const a=Os(s);for(let o=0,i=0;o<s;o++,i+=2){const c=Yi(e.charCodeAt(i)),d=Yi(e.charCodeAt(i+1));if(c===void 0||d===void 0)return ue(t);a[o]=c*16+d}return a},Cc=()=>globalThis?.crypto,mm=()=>Cc()?.subtle??ue("crypto.subtle must be defined, consider polyfill"),On=(...e)=>{const t=Os(e.reduce((s,a)=>s+mt(a).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},gm=(e=Dt)=>Cc().getRandomValues(Os(e)),bs=BigInt,xt=(e,t,n,s="bad number: out of range")=>dm(e)&&t<=e&&e<n?e:ue(s),K=(e,t=ge)=>{const n=e%t;return n>=0n?n:t+n},Mc=e=>K(e,ps),fm=(e,t)=>{(e===0n||t<=0n)&&ue("no inverse n="+e+" mod="+t);let n=K(e,t),s=t,a=0n,o=1n;for(;n!==0n;){const i=s/n,c=s%n,d=a-o*i;s=n,n=c,a=o,o=d}return s===1n?K(a,t):ue("no inverse")},hm=e=>{const t=Lc[e];return typeof t!="function"&&ue("hashes."+e+" not set"),t},oa=e=>e instanceof Pe?e:ue("Point expected"),Ba=2n**256n;class Pe{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,a){const o=Ba;this.X=xt(t,0n,o),this.Y=xt(n,0n,o),this.Z=xt(s,1n,o),this.T=xt(a,0n,o),Object.freeze(this)}static CURVE(){return wc}static fromAffine(t){return new Pe(t.x,t.y,1n,K(t.x*t.y))}static fromBytes(t,n=!1){const s=aa,a=kc(mt(t,Dt)),o=t[31];a[31]=o&-129;const i=Ec(a);xt(i,0n,n?Ba:ge);const d=K(i*i),p=K(d-1n),m=K(s*d+1n);let{isValid:g,value:f}=ym(p,m);g||ue("bad point: y not sqrt");const $=(f&1n)===1n,S=(o&128)!==0;return!n&&f===0n&&S&&ue("bad point: x==0, isLastByteOdd"),S!==$&&(f=K(-f)),new Pe(f,i,1n,K(f*i))}static fromHex(t,n){return Pe.fromBytes(xc(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=sa,n=aa,s=this;if(s.is0())return ue("bad point: ZERO");const{X:a,Y:o,Z:i,T:c}=s,d=K(a*a),p=K(o*o),m=K(i*i),g=K(m*m),f=K(d*t),$=K(m*K(f+p)),S=K(g+K(n*K(d*p)));if($!==S)return ue("bad point: equation left != right (1)");const w=K(a*o),C=K(i*c);return w!==C?ue("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:a}=this,{X:o,Y:i,Z:c}=oa(t),d=K(n*c),p=K(o*a),m=K(s*c),g=K(i*a);return d===p&&m===g}is0(){return this.equals(Xt)}negate(){return new Pe(K(-this.X),this.Y,this.Z,K(-this.T))}double(){const{X:t,Y:n,Z:s}=this,a=sa,o=K(t*t),i=K(n*n),c=K(2n*K(s*s)),d=K(a*o),p=t+n,m=K(K(p*p)-o-i),g=d+i,f=g-c,$=d-i,S=K(m*f),w=K(g*$),C=K(m*$),L=K(f*g);return new Pe(S,w,L,C)}add(t){const{X:n,Y:s,Z:a,T:o}=this,{X:i,Y:c,Z:d,T:p}=oa(t),m=sa,g=aa,f=K(n*i),$=K(s*c),S=K(o*g*p),w=K(a*d),C=K((n+s)*(i+c)-f-$),L=K(w-S),P=K(w+S),U=K($-m*f),R=K(C*L),O=K(P*U),D=K(C*U),u=K(L*P);return new Pe(R,O,u,D)}subtract(t){return this.add(oa(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return Xt;if(xt(t,1n,ps),t===1n)return this;if(this.equals(Rt))return Tm(t).p;let s=Xt,a=Rt;for(let o=this;t>0n;o=o.double(),t>>=1n)t&1n?s=s.add(o):n&&(a=a.add(o));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(Xt))return{x:0n,y:1n};const a=fm(s,ge);K(s*a)!==1n&&ue("invalid inverse");const o=K(t*a),i=K(n*a);return{x:o,y:i}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=Ac(n);return s[31]|=t&1n?128:0,s}toHex(){return Sc(this.toBytes())}clearCofactor(){return this.multiply(bs(rm),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(ps/2n,!1).double();return ps%2n&&(t=t.add(this)),t.is0()}}const Rt=new Pe(Gi,Ji,1n,K(Gi*Ji)),Xt=new Pe(0n,1n,1n,0n);Pe.BASE=Rt;Pe.ZERO=Xt;const Ac=e=>xc($c(xt(e,0n,Ba),Ro)).reverse(),Ec=e=>bs("0x"+Sc(kc(mt(e)).reverse())),We=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=ge;return n},vm=e=>{const n=e*e%ge*e%ge,s=We(n,2n)*n%ge,a=We(s,1n)*e%ge,o=We(a,5n)*a%ge,i=We(o,10n)*o%ge,c=We(i,20n)*i%ge,d=We(c,40n)*c%ge,p=We(d,80n)*d%ge,m=We(p,80n)*d%ge,g=We(m,10n)*o%ge;return{pow_p_5_8:We(g,2n)*e%ge,b2:n}},Zi=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,ym=(e,t)=>{const n=K(t*t*t),s=K(n*n*t),a=vm(e*s).pow_p_5_8;let o=K(e*n*a);const i=K(t*o*o),c=o,d=K(o*Zi),p=i===e,m=i===K(-e),g=i===K(-e*Zi);return p&&(o=c),(m||g)&&(o=d),(K(o)&1n)===1n&&(o=K(-o)),{isValid:p||m,value:o}},Wa=e=>Mc(Ec(e)),No=(...e)=>Lc.sha512Async(On(...e)),bm=(...e)=>hm("sha512")(On(...e)),Tc=e=>{const t=e.slice(0,Dt);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(Dt,Ro),s=Wa(t),a=Rt.multiply(s),o=a.toBytes();return{head:t,prefix:n,scalar:s,point:a,pointBytes:o}},Uo=e=>No(mt(e,Dt)).then(Tc),wm=e=>Tc(bm(mt(e,Dt))),km=e=>Uo(e).then(t=>t.pointBytes),$m=e=>No(e.hashable).then(e.finish),Sm=(e,t,n)=>{const{pointBytes:s,scalar:a}=e,o=Wa(t),i=Rt.multiply(o).toBytes();return{hashable:On(i,s,n),finish:p=>{const m=Mc(o+Wa(p)*a);return mt(On(i,Ac(m)),Ro)}}},xm=async(e,t)=>{const n=mt(e),s=await Uo(t),a=await No(s.prefix,n);return $m(Sm(s,a,n))},Lc={sha512Async:async e=>{const t=mm(),n=On(e);return Os(await t.digest("SHA-512",n.buffer))},sha512:void 0},Cm=(e=gm(Dt))=>e,Mm={getExtendedPublicKeyAsync:Uo,getExtendedPublicKey:wm,randomSecretKey:Cm},ws=8,Am=256,_c=Math.ceil(Am/ws)+1,Ha=2**(ws-1),Em=()=>{const e=[];let t=Rt,n=t;for(let s=0;s<_c;s++){n=t,e.push(n);for(let a=1;a<Ha;a++)n=n.add(t),e.push(n);t=n.double()}return e};let Xi;const el=(e,t)=>{const n=t.negate();return e?n:t},Tm=e=>{const t=Xi||(Xi=Em());let n=Xt,s=Rt;const a=2**ws,o=a,i=bs(a-1),c=bs(ws);for(let d=0;d<_c;d++){let p=Number(e&i);e>>=c,p>Ha&&(p-=o,e+=1n);const m=d*Ha,g=m,f=m+Math.abs(p)-1,$=d%2!==0,S=p<0;p===0?s=s.add(el($,t[g])):n=n.add(el(S,t[f]))}return e!==0n&&ue("invalid wnaf"),{p:n,f:s}},ia="openclaw-device-identity-v1";function za(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function Pc(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),a=new Uint8Array(s.length);for(let o=0;o<s.length;o+=1)a[o]=s.charCodeAt(o);return a}function Lm(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function Ic(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return Lm(new Uint8Array(t))}async function _m(){const e=Mm.randomSecretKey(),t=await km(e);return{deviceId:await Ic(t),publicKey:za(t),privateKey:za(e)}}async function Oo(){try{const n=localStorage.getItem(ia);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const a=await Ic(Pc(s.publicKey));if(a!==s.deviceId){const o={...s,deviceId:a};return localStorage.setItem(ia,JSON.stringify(o)),{deviceId:a,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await _m(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(ia,JSON.stringify(t)),e}async function Pm(e,t){const n=Pc(e),s=new TextEncoder().encode(t),a=await xm(s,n);return za(a)}async function gt(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function Im(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await gt(e)}catch(n){e.devicesError=String(n)}}async function Dm(e,t){if(!(!e.client||!e.connected||!await Te("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await gt(e)}catch(s){e.devicesError=String(s)}}async function Rm(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await Oo(),a=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&yc({deviceId:s.deviceId,role:a,token:n.token,scopes:n.scopes??t.scopes??[]}),await ac("New device token (copy and store securely):",n.token)}await gt(e)}catch(n){e.devicesError=String(n)}}async function Nm(e,t){if(!(!e.client||!e.connected||!await Te(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await Oo();t.deviceId===s.deviceId&&bc({deviceId:s.deviceId,role:t.role}),await gt(e)}catch(s){e.devicesError=String(s)}}function Um(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function Om(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function Fo(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=Um(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);Fm(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function Fm(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=ne(t.file??{}))}async function Bm(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},a=Om(t,{file:s,baseHash:n});if(!a){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(a.method,a.params),e.execApprovalsDirty=!1,await Fo(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function Wm(e,t,n){const s=ne(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Is(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function Hm(e,t){const n=ne(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});sc(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function Dc(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function zm(e,t){if(!e.client||!e.connected)return null;const n=(t.key??"").trim().toLowerCase();if(!n)return null;try{const s={key:n};t.label?.trim()&&(s.label=t.label.trim());const a=await e.client.request("sessions.ensure",s);return a?.ok&&a.key?(await Ie(e,{activeMinutes:10080,limit:5e3,includeLastMessage:!0}),a):null}catch{return null}}async function Qm(e,t){if(!e.client||!e.connected)return null;try{const n={};t?.label?.trim();const s=await e.client.request("sessions.create",n);return s?.ok&&s.key?(await Ie(e,{includeLastMessage:!0}),s):null}catch{return null}}async function Ie(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,a=t?.activeMinutes??ys(e.sessionsFilterActive,0),o=t?.limit??ys(e.sessionsFilterLimit,0),i={includeGlobal:n,includeUnknown:s};a>0&&(i.activeMinutes=a),o>0&&(i.limit=o),t?.includeLastMessage&&(i.includeLastMessage=!0);const c=await e.client.request("sessions.list",i);c&&(e.sessionsResult=c)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function tl(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await Ie(e,{includeLastMessage:!0})}catch(a){e.sessionsError=String(a)}}async function Rc(e,t){if(!(!e.client||!e.connected||e.sessionsLoading||!await Te("确定删除此会话？"))){e.sessionsLoading=!0,e.sessionsError=null;try{await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),e.sessionsLoading=!1,await Ie(e,{includeLastMessage:!0})}catch(s){e.sessionsError=String(s)}finally{e.sessionsLoading=!1}}}async function Km(e,t){if(!e.client||!e.connected||e.sessionsLoading)return;const n=Array.from(new Set(t.filter(o=>o&&o!=="agent.main.main")));if(n.length===0)return;const s=n.length===1?"确定删除此会话？":`确定删除 ${n.length} 个会话？`;if(await Te(`${s}`)){e.sessionsLoading=!0,e.sessionsError=null;try{for(const o of n)await e.client.request("sessions.delete",{key:o,deleteTranscript:!0});e.sessionsLoading=!1,await Ie(e,{includeLastMessage:!0})}catch(o){e.sessionsError=String(o)}finally{e.sessionsLoading=!1}}}async function Ae(e){if(!(!e.client||!e.connected)){e.digitalEmployeesLoading=!0,e.digitalEmployeesError=null;try{const t=await e.client.request("employees.list",{});e.digitalEmployees=t?.employees??[]}catch(t){e.digitalEmployeesError=String(t)}finally{e.digitalEmployeesLoading=!1}}}function Nc(e){let t=e.trim();if(!t)return"";const n=[/\.zip$/i,/\.tar\.gz$/i,/\.tgz$/i,/\.md$/i];for(const s of n)t=t.replace(s,"");return t.trim()||""}async function nl(e){if(!e.client||!e.connected)return;const t=e.digitalEmployeeCreateName?.trim();if(!t){e.digitalEmployeeCreateError="名称不能为空";return}e.digitalEmployeeCreateBusy=!0,e.digitalEmployeeCreateError=null,e.digitalEmployeeSkillUploadError=null;let n;const s=e.digitalEmployeeCreateMcpJson?.trim();if(s)try{const a=JSON.parse(s);a&&typeof a=="object"&&Object.keys(a).length>0&&(n=a)}catch{e.digitalEmployeeCreateError="MCP 配置 JSON 格式无效",e.digitalEmployeeCreateBusy=!1;return}try{const a={name:t,description:e.digitalEmployeeCreateDescription??"",prompt:e.digitalEmployeeCreatePrompt??"",enabled:!0};n&&(a.mcpServers=n);const i=(await e.client.request("employees.create",a))?.id??qm(t),c=e.digitalEmployeeSkillUploadFiles??[],d=e.digitalEmployeeSkillUploadName?.trim();for(let p=0;p<c.length;p++){const m=c[p],g=d&&c.length===1?d:Nc(m.name),f=await Uc(e,i,g,m);if(!f.ok){e.digitalEmployeeCreateError=f.error??"技能文件上传失败";return}}e.digitalEmployeeCreateName="",e.digitalEmployeeCreateDescription="",e.digitalEmployeeCreatePrompt="",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null,await Ae(e)}catch(a){e.digitalEmployeeCreateError=String(a)}finally{e.digitalEmployeeCreateBusy=!1}}function qm(e){const t=e.trim().toLowerCase();if(!t)return"employee";let n="";for(const s of t)s>="a"&&s<="z"||s>="0"&&s<="9"?n+=s:(s==="-"||s==="_"||s===" ")&&(n+="-");return n=n.replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n||"employee"}async function Vm(e,t,n){if(!(!e.client||!e.connected))try{await e.client.request("employees.create",{id:t,enabled:n}),await Ae(e)}catch(s){e.digitalEmployeesError=String(s)}}async function sl(e,t){if(!(!e.client||!e.connected))try{await e.client.request("employees.delete",{id:t}),await Ae(e)}catch(n){e.digitalEmployeesError=String(n)}}async function Qa(e,t){if(!e.client||!e.connected)return null;try{return await e.client.request("employees.get",{id:t})??null}catch{return null}}function la(e){return e.trim().toLowerCase()}function jm(e,t){const n=e.trim()||"employee",s=new Set(t.map(la)),a=`${n} copy`;if(!s.has(la(a)))return a;for(let o=2;o<=99;o++){const i=`${n} copy ${o}`;if(!s.has(la(i)))return i}return`${n} copy ${Date.now()}`}async function Gm(e,t){if(!(!e.client||!e.connected)){e.digitalEmployeesError=null,e.digitalEmployeesLoading=!0;try{const n=await Qa(e,t);if(!n){e.digitalEmployeesError="无法加载员工详情";return}const s=(n.name||n.id||t).trim(),o={name:jm(s||"employee",(e.digitalEmployees??[]).map(i=>i.name||"")),description:n.description??"",prompt:n.prompt??"",enabled:n.enabled!==!1};n.mcpServers&&(o.mcpServers=n.mcpServers),Array.isArray(n.skillIds)&&n.skillIds.length>0&&(o.skillIds=n.skillIds),await e.client.request("employees.create",o),await Ae(e)}catch(n){e.digitalEmployeesError=String(n)}finally{e.digitalEmployeesLoading=!1}}}async function al(e){if(!e.client||!e.connected)return;const t=e.digitalEmployeeEditId?.trim();if(!t){e.digitalEmployeeEditError="员工 ID 不能为空";return}e.digitalEmployeeEditBusy=!0,e.digitalEmployeeEditError=null;let n;const s=e.digitalEmployeeEditMcpJson?.trim();try{if(s){const a=JSON.parse(s);a&&typeof a=="object"&&(n=a)}else n={}}catch{e.digitalEmployeeEditError="MCP 配置 JSON 格式无效",e.digitalEmployeeEditBusy=!1;return}try{const a={id:t,description:e.digitalEmployeeEditDescription??"",prompt:e.digitalEmployeeEditPrompt??"",enabled:e.digitalEmployeeEditEnabled!==!1,mcpServers:n??{},weworkGroupBotKey:e.digitalEmployeeEditWeWorkGroupBotKey?.trim()||void 0};await e.client.request("employees.create",a);for(const i of e.digitalEmployeeEditSkillsToDelete??[])if(!await Jm(e,t,i)){e.digitalEmployeeEditError=`删除技能 ${i} 失败`;return}const o=e.digitalEmployeeEditSkillFilesToUpload??[];for(let i=0;i<o.length;i++){const c=o[i],d=Nc(c.name),p=await Uc(e,t,d,c);if(!p.ok){e.digitalEmployeeEditError=p.error??"技能文件上传失败";return}}e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditId="",e.digitalEmployeeEditName="",e.digitalEmployeeEditDescription="",e.digitalEmployeeEditPrompt="",e.digitalEmployeeEditMcpJson="",e.digitalEmployeeEditSkillNames=[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],await Ae(e)}catch(a){e.digitalEmployeeEditError=String(a)}finally{e.digitalEmployeeEditBusy=!1}}async function Jm(e,t,n){const s=e.settings.gatewayUrl?.trim();if(!s)return!1;const a=dn(s);if(!a)return!1;const o={},i=e.settings?.token?.trim();i&&(o.Authorization=`Bearer ${i}`);try{const c=new URL(`${a.replace(/\/$/,"")}/api/employee-skills/delete`);c.searchParams.set("employeeId",t.trim()),c.searchParams.set("name",n.trim());const d=await fetch(c.toString(),{method:"DELETE",headers:o});if(d.status===401)throw new Error("认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token");const p=await d.json();return d.ok&&p.ok===!0}catch(c){throw(c instanceof Error?c.message:String(c))==="Failed to fetch"?new Error("网络请求失败，请检查网络连接"):c}}async function Uc(e,t,n,s){const a=e.settings.gatewayUrl?.trim();if(!a)return{ok:!1,error:"Gateway URL 未配置"};const o=dn(a);if(!o)return{ok:!1,error:"Gateway URL 无效"};const i=new FormData;i.append("employeeId",t.trim()),n.trim()&&i.append("name",n.trim()),i.append("file",s);const c={},d=e.settings?.token?.trim();d&&(c.Authorization=`Bearer ${d}`);try{const p=await fetch(`${o.replace(/\/$/,"")}/api/employee-skills/upload`,{method:"POST",headers:c,body:i}),m=await p.json();return!p.ok||m.ok===!1?{ok:!1,error:p.status===401?"认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token":m.error??`上传失败 (${p.status})`,template:m.template}:{ok:!0}}catch(p){const m=p instanceof Error?p.message:String(p);return{ok:!1,error:m==="Failed to fetch"?"网络请求失败，请检查网络连接":m}}}async function Bo(e,t){if(!(!e.client||!e.connected)&&!e.llmTraceLoading){e.llmTraceLoading=!0,e.llmTraceError=null;try{const n=t?.mode??e.llmTraceMode,s=await e.client.request("trace.list",{mode:n});s&&(e.llmTraceResult=s)}catch(n){e.llmTraceError=String(n)}finally{e.llmTraceLoading=!1}}}async function Oc(e,t){if(!e.client||!e.connected)return null;try{return(await e.client.request("trace.content",{sessionId:t}))?.content??null}catch{return null}}function Ct(e){const t=e.configForm??e.configSnapshot?.config;if(t&&typeof t=="object"){const n=t.gateway;if(n&&typeof n=="object"){const s=n.llmTrace;e.llmTraceEnabled=!!(s&&typeof s=="object"&&s.enabled===!0);return}}e.llmTraceEnabled=!1}function Ym(e){Bo(e)}function Zm(e,t){e.llmTraceMode=t,Bo(e,{mode:t})}function Xm(e,t){e.llmTraceSearch=t}function eg(e){if(!e.client||!e.connected)return;const t=ne(e.configForm??e.configSnapshot?.config??{});t.gateway||(t.gateway={});const n=t.gateway;n.llmTrace||(n.llmTrace={});const s=n.llmTrace,a=s.enabled!==!0;s.enabled=a,e.llmTraceSaving=!0,e.lastError=null,Se(e,{gateway:t.gateway}).then(()=>ee(e)).then(()=>{Ct(e)}).catch(o=>{e.lastError=String(o)}).finally(()=>{e.llmTraceSaving=!1})}async function tg(e,t){e.llmTraceViewingSessionId=t,e.llmTraceViewContent=null,e.llmTraceViewLoading=!0,e.llmTraceError=null;try{const n=await Oc(e,t);n?e.llmTraceViewContent=n:(e.llmTraceError="Failed to load trace content.",e.llmTraceViewingSessionId=null)}catch(n){e.llmTraceError=String(n),e.llmTraceViewingSessionId=null}finally{e.llmTraceViewLoading=!1}}function ng(e){e.llmTraceViewContent=null,e.llmTraceViewingSessionId=null}async function sg(e,t){try{const n=await Oc(e,t);if(n){const s=new Blob([n],{type:"text/html"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=`${t}.html`,o.click(),URL.revokeObjectURL(a)}else e.llmTraceError="Failed to load trace content."}catch(n){e.llmTraceError=String(n)}}const ag={off:{preset:"off",sandbox:{enabled:!1},commandPolicy:{enabled:!1},approvalQueue:{enabled:!1}},loose:{preset:"loose",sandbox:{enabled:!0,allowedPaths:["/tmp","./workspace","/var/lib/agent/data"],networkAllow:["localhost","127.0.0.1","*"],resourceLimit:{maxCpuPercent:60,maxMemoryBytes:1024**3,maxDiskBytes:1024**3}},commandPolicy:{enabled:!0,defaultPolicy:"allow",deny:["sudo","rm -rf","dd","mkfs"],ask:[],allow:[],banArguments:["--no-preserve-root","/dev/"],maxLength:4096},approvalQueue:{enabled:!1,timeoutSeconds:300,blockOnApproval:!1}},standard:{preset:"standard",sandbox:{enabled:!0,allowedPaths:["/tmp","./workspace","/var/lib/agent/data"],networkAllow:["localhost","127.0.0.1","*.anthropic.com","*.openai.com"],resourceLimit:{maxCpuPercent:60,maxMemoryBytes:1024**3,maxDiskBytes:1024**3}},commandPolicy:{enabled:!0,defaultPolicy:"ask",deny:["sudo","dd","mkfs","rm -rf"],ask:["rm","mv","cp"],allow:["ls","pwd","echo"],banArguments:["--no-preserve-root","/dev/"],maxLength:4096},approvalQueue:{enabled:!0,timeoutSeconds:300,blockOnApproval:!0}},strict:{preset:"strict",sandbox:{enabled:!0,allowedPaths:["./workspace","/tmp"],networkAllow:["localhost","127.0.0.1"],resourceLimit:{maxCpuPercent:60,maxMemoryBytes:512*1024*1024,maxDiskBytes:1024**3}},commandPolicy:{enabled:!0,defaultPolicy:"deny",deny:["sudo","dd","mkfs","rm -rf","rm -r"],ask:["rm","mv","cp","curl","wget"],allow:["ls","pwd","echo","cat"],banArguments:["--no-preserve-root","/dev/","../"],maxLength:4096},approvalQueue:{enabled:!0,timeoutSeconds:300,blockOnApproval:!0}}};function Ka(e){const t=e.configForm??e.configSnapshot?.config;if(!t||typeof t!="object")return null;const n=t.security??{};if(!n||typeof n!="object")return null;const s=n.sandbox??{},a=n.commandPolicy??{},o=n.approvalQueue??{},i=n.validator??{},c=n.preset;let d=a;return!((a?.deny?.length??0)>0||(a?.ask?.length??0)>0||(a?.allow?.length??0)>0)&&(i||o)&&(d={...ig(i,o),...a}),{preset:c,sandbox:s??{},commandPolicy:d??{},approvalQueue:o??{},validator:i??{}}}function ra(e){return Array.isArray(e)?e:[]}function og(e){return{enabled:e?.enabled,defaultPolicy:e?.defaultPolicy??"ask",deny:ra(e?.deny).filter(Boolean),ask:ra(e?.ask).filter(Boolean),allow:ra(e?.allow).filter(Boolean),rules:null,banArguments:e?.banArguments??[],maxLength:e?.maxLength??4096,secretPatterns:e?.secretPatterns??[]}}function ig(e,t){const n=[],s=[],a=[];if(e?.banCommands)for(const o of e.banCommands)o&&n.push(o);if(e?.banFragments)for(const o of e.banFragments)o&&n.push(o);if(t?.deny)for(const o of t.deny)o&&n.push(o);if(t?.allow)for(const o of t.allow)o&&a.push(o);if(t?.ask)for(const o of t.ask)o&&s.push(o);return{enabled:e?.enabled===!0,defaultPolicy:"ask",deny:n,ask:s,allow:a,banArguments:e?.banArguments,maxLength:e?.maxLength??4096,secretPatterns:e?.secretPatterns}}async function lg(e,t){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const n=t.sandbox??{},s=t.commandPolicy??{},a=t.approvalQueue??{},o={preset:t.preset,sandbox:{enabled:n.enabled,allowedPaths:n.allowedPaths,networkAllow:n.networkAllow,root:n.root,resourceLimit:n.resourceLimit,approvalStore:n.approvalStore},commandPolicy:og(s),approvalQueue:{enabled:a.enabled,timeoutSeconds:a.timeoutSeconds??300,blockOnApproval:a.blockOnApproval??!0}};await Se(e,{security:o}),await ee(e)}finally{e.configSaving=!1}}}function Wo(e){const t=Ka(e);return t==null?null:ne(t)}function rg(e,t){if(!e.client||!e.connected)return;const n=ag[t],s=ne(e.configForm??e.configSnapshot?.config??{});(!s.security||typeof s.security!="object")&&(s.security={});const a=s.security;Object.assign(a,n);const o=a.commandPolicy;o&&typeof o=="object"&&(o.rules=null),e.securityForm=ne(n),e.configSaving=!0,e.lastError=null,Se(e,{security:a}).then(()=>ee(e)).finally(()=>{e.configSaving=!1})}function cg(e,t,n,s){Is(t,n,s),e.securityForm=ne(t)}async function dg(e,t){const s=ne(t??{}),a=s.sandbox?.resourceLimit??{};let o=null;if(typeof a.maxMemoryBytes=="string"){const i=ol(a.maxMemoryBytes);i==null&&a.maxMemoryBytes.trim()!==""?o="Invalid max memory format, use e.g. 1G, 512M, 1024":a.maxMemoryBytes=i??void 0}if(!o&&typeof a.maxDiskBytes=="string"){const i=ol(a.maxDiskBytes);i==null&&a.maxDiskBytes.trim()!==""?o="Invalid max disk format, use e.g. 10G, 100G, 10240":a.maxDiskBytes=i??void 0}if(o){e.lastError=o;return}(!a.maxCpuPercent||a.maxCpuPercent<=0)&&(a.maxCpuPercent=60),(typeof a.maxMemoryBytes!="number"||a.maxMemoryBytes<=0)&&(a.maxMemoryBytes=1024**3),(typeof a.maxDiskBytes!="number"||a.maxDiskBytes<=0)&&(a.maxDiskBytes=1024**3),s.sandbox||(s.sandbox={}),s.sandbox.resourceLimit=a,await lg(e,s),e.securityForm=Wo(e)}function ol(e){const t=e.trim();if(!t)return null;const n=t.match(/^(\d+(?:\.\d+)?)(\s*)([kKmMgGtT]?[bB]?)?$/);if(!n)return null;const s=Number.parseFloat(n[1]);if(!Number.isFinite(s))return null;const a=(n[3]??"").toUpperCase();let o=1;switch(a){case"K":case"KB":o=1024;break;case"M":case"MB":o=1024**2;break;case"G":case"GB":o=1024**3;break;case"T":case"TB":o=1024**4;break;default:o=1;break}return Math.round(s*o)}function Fc(e){return!(e.status!=="pending"||e.expired===!0||e.ttlSeconds!=null&&e.ttlSeconds<0)}function Bc(e){const t=e??{storePath:"",entries:[]},n=t.entries??[];return{storePath:t.storePath,entries:n,approved:t.approved??n.filter(s=>s.status==="approved"),pending:t.pending??n.filter(s=>Fc(s)),pendingExpired:t.pendingExpired??n.filter(s=>s.status==="expired"||s.status==="pending"&&s.expired===!0),denied:t.denied??n.filter(s=>s.status==="denied"),whitelisted:t.whitelisted??[]}}function ug(e){return(e.pending??[]).filter(Fc).map(n=>n.id).filter(n=>!!n?.trim())}async function Wn(e){if(!(!e.client||!e.connected)){e.approvalsLoading=!0,e.approvalsError=null;try{const t=await e.client.request("approvals.list",{});e.approvalsResult=Bc(t)}catch(t){e.approvalsError=String(t),e.approvalsResult=null}finally{e.approvalsLoading=!1}}}async function pg(e,t,n){!e.client||!e.connected||(await e.client.request("approvals.approve",{requestId:t,approverId:n}),await Wn(e))}async function mg(e,t,n,s){!e.client||!e.connected||(await e.client.request("approvals.deny",{requestId:t,approverId:n,reason:s??""}),await Wn(e))}async function gg(e,t,n){!e.client||!e.connected||(await e.client.request("approvals.whitelistSession",{requestId:t,approverId:n}),await Wn(e))}function ks(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function pn(e){return e instanceof Error?e.message:String(e)}function fg(e){const t=new Set,n=s=>{const a=(s??"").trim();a&&t.add(a)};for(const s of e?.skills??[]){if(!s.disabled)continue;n(s.skillKey),n(s.name);const a=(s.baseDir??"").replace(/[/\\]+$/,"");if(a){const o=a.split(/[/\\]/).pop();n(o)}}return t}async function sn(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=pn(n)}finally{e.skillsLoading=!1}}}async function hg(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await sn(e),ks(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const a=pn(s);e.skillsError=a,ks(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}async function vg(e,t,n){const s=e.gatewayUrl?dn(e.gatewayUrl):"";if(!s)return{ok:!1,error:"Gateway URL not configured"};const a=new FormData;a.append("name",t.trim()),a.append("file",n);const o={};e.token?.trim()&&(o.Authorization=`Bearer ${e.token.trim()}`);try{const i=await fetch(`${s.replace(/\/$/,"")}/api/skills/upload`,{method:"POST",headers:o,body:a}),c=await i.json();return i.ok?{ok:!0}:{ok:!1,error:i.status===401?"认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token":c.error??`Upload failed (${i.status})`,template:c.template}}catch(i){const c=i instanceof Error?i.message:String(i);return{ok:!1,error:c==="Failed to fetch"?"网络请求失败，请检查网络连接":c}}}async function yg(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.delete",{skillKey:t}),await sn(e,{clearMessages:!0})}catch(n){e.skillsError=pn(n)}finally{e.skillsBusyKey=null}}}async function bg(e,t){if(!e.client||!e.connected)return[];try{return(await e.client.request("skills.listFiles",{skillKey:t}))?.files??[]}catch(n){return e.skillsError=pn(n),[]}}async function il(e,t,n){if(!e.client||!e.connected)return null;try{return(await e.client.request("skills.getFile",{skillKey:t,filePath:n}))?.content??null}catch(s){return e.skillsError=pn(s),null}}async function wg(e,t,n,s){if(!e.client||!e.connected)return!1;e.skillsBusyKey=t,e.skillsError=null;try{return await e.client.request("skills.saveFile",{skillKey:t,filePath:n,content:s}),ks(e,t,{kind:"success",message:"文件保存成功"}),!0}catch(a){const o=pn(a);return e.skillsError=o,ks(e,t,{kind:"error",message:o}),!1}finally{e.skillsBusyKey=null}}const Wc={message:"/message",scheduledTasks:"/scheduled-tasks",cronHistory:"/cron-history",employeeMarket:"/employee-market",skillLibrary:"/skill-library",toolLibrary:"/tool-library",modelLibrary:"/model-library",tutorials:"/tutorials",aboutUs:"/about-us",community:"/community",agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",mcp:"/mcp",nodes:"/nodes",chat:"/chat",digitalEmployee:"/digital-employee",config:"/config",envVars:"/env-vars",models:"/models",debug:"/debug",logs:"/logs",llmTrace:"/llm-trace",sandbox:"/sandbox"},Hc=new Map(Object.entries(Wc).map(([e,t])=>[t,e])),kg={message:"messageSquareActive",scheduledTasks:"alarmClockActive",employeeMarket:"usersActive",skillLibrary:"zapActive",toolLibrary:"wrenchActive",modelLibrary:"modelCubeActive",tutorials:"bookActive",community:"globeActive",config:"settingsActive"};function Hn(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function ln(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function Ft(e,t=""){const n=Hn(t),s=Wc[e];return n?`${n}${s}`:s}function Ho(e,t=""){const n=Hn(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let a=ln(s).toLowerCase();return a.endsWith("/index.html")&&(a="/"),a==="/"?"message":Hc.get(a)??null}function $g(e){let t=ln(e);if(t.endsWith("/index.html")&&(t=ln(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const a=`/${n.slice(s).join("/")}`.toLowerCase();if(Hc.has(a)){const o=n.slice(0,s);return o.length?`/${o.join("/")}`:""}}return`/${n.join("/")}`}function zc(e,t=!1){if(t){const n=kg[e];if(n)return n}switch(e){case"message":return"messageSquare";case"scheduledTasks":return"alarmClock";case"cronHistory":return"historyClock";case"employeeMarket":return"users";case"skillLibrary":return"zap";case"toolLibrary":return"wrench";case"modelLibrary":return"modelCube";case"tutorials":return"book";case"aboutUs":return"info";case"community":return"globe";case"agents":return"folder";case"chat":return"messageSquare";case"digitalEmployee":return"users";case"overview":return"overviewGrid";case"channels":return"link";case"instances":return"radio";case"sessions":return"scrollText";case"usage":return"usageBars";case"cron":return"loader";case"skills":return"zap";case"mcp":return"folder";case"llmTrace":return"traceBars";case"sandbox":return"sandbox";case"nodes":return"monitor";case"config":return"settings";case"envVars":return"envVars";case"models":return"modelCube";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function qa(e){switch(e){case"message":return"消息";case"scheduledTasks":return"定时任务";case"cronHistory":return"运行历史";case"employeeMarket":return"员工市场";case"skillLibrary":return"技能库";case"toolLibrary":return"工具库";case"modelLibrary":return"模型库";case"tutorials":return"教程";case"aboutUs":return"关于我们";case"community":return"社区";case"agents":return l("navTitleAgents");case"overview":return l("navTitleOverview");case"channels":return l("navTitleChannels");case"instances":return l("navTitleInstances");case"sessions":return l("navTitleSessions");case"usage":return l("navTitleUsage");case"cron":return l("navTitleCron");case"skills":return l("navTitleSkills");case"mcp":return l("navTitleMcp");case"llmTrace":return l("navTitleLlmTrace");case"sandbox":return l("navTitleSandbox");case"nodes":return l("navTitleNodes");case"chat":return l("navTitleChat");case"digitalEmployee":return l("navTitleDigitalEmployee");case"config":return l("navTitleConfig");case"envVars":return l("navTitleEnvVars");case"models":return l("navTitleModels");case"debug":return l("navTitleDebug");case"logs":return l("navTitleLogs");default:return l("navTitleControl")}}const Qc="openclaw.control.settings.v1",Sg="edc146993b5ae0b1544c3137cc888f94436cf11e1952cff6";function xg(){const t={gatewayUrl:typeof location<"u"&&location.port==="5173"?"127.0.0.1:18900":typeof location<"u"?location.host:"127.0.0.1:18900",token:Sg,sessionKey:"main",lastActiveSessionKey:"main",theme:"light",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(Qc);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?Rs(s.gatewayUrl.trim()):t.gatewayUrl,token:typeof s.token=="string"&&s.token.trim()?s.token.trim():t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed}}catch{return t}}function Cg(e){localStorage.setItem(Qc,JSON.stringify(e))}const ts=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,Mg=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,ns=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},Ag=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const a=globalThis.document??null;if(!a){t();return}const o=a.documentElement,i=a,c=Mg();if(!!i.startViewTransition&&!c){let p=.5,m=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")p=ts(n.pointerClientX/window.innerWidth),m=ts(n.pointerClientY/window.innerHeight);else if(n?.element){const g=n.element.getBoundingClientRect();g.width>0&&g.height>0&&typeof window<"u"&&(p=ts((g.left+g.width/2)/window.innerWidth),m=ts((g.top+g.height/2)/window.innerHeight))}o.style.setProperty("--theme-switch-x",`${p*100}%`),o.style.setProperty("--theme-switch-y",`${m*100}%`),o.classList.add("theme-transition");try{const g=i.startViewTransition?.(()=>{t()});g?.finished?g.finished.finally(()=>ns(o)):ns(o)}catch{ns(o),t()}return}t(),ns(o)};function Eg(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function zo(e){return e==="system"?Eg():e}function Kc(e){const t=e.querySelector;if(typeof t!="function")return;const n=t.call(e,".content");n instanceof HTMLElement&&(n.scrollTop=0)}function Nt(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,Cg(n),t.theme!==e.theme&&(e.theme=t.theme,Fs(e,zo(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function qc(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&Nt(e,{...e.settings,lastActiveSessionKey:n})}function Tg(e){if(!window.location.search)return;const t=new URLSearchParams(window.location.search),n=t.get("token"),s=t.get("password"),a=t.get("session"),o=t.get("gatewayUrl");let i=!1;if(n!=null&&(t.delete("token"),i=!0),s!=null){const d=s.trim();d&&(e.password=d),t.delete("password"),i=!0}if(a!=null){const d=a.trim();d&&(e.sessionKey=d,Nt(e,{...e.settings,sessionKey:d,lastActiveSessionKey:d}))}if(o!=null){const d=o.trim(),p=d?Rs(d):"";p&&p!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=p),t.delete("gatewayUrl"),i=!0}if(!i)return;const c=new URL(window.location.href);c.search=t.toString(),window.history.replaceState({},"",c.toString())}function Lg(e,t){const n=t==="chat"&&(e.sessionKey?.trim()??"")?"message":t;e.tab!==n&&(e.tab=n,Kc(e)),n==="chat"&&(e.chatHasAutoScrolled=!1),n==="logs"?Eo(e):To(e),n==="debug"?Lo(e):_o(e),Qo(e),Gc(e,n,!1)}function _g(e,t,n){Ag({nextTheme:t,applyTheme:()=>{e.theme=t,Nt(e,{...e.settings,theme:t}),Fs(e,zo(t))},context:n,currentTheme:e.theme})}async function Qo(e){if(e.tab==="overview"&&await Jc(e),e.tab==="channels"&&await Og(e),e.tab==="instances"&&await Dc(e),e.tab==="sessions"&&await Ie(e,{includeLastMessage:!0}),e.tab==="cron"&&(await en(e),await Ae(e)),e.tab==="scheduledTasks"&&(await en(e),await Ae(e)),e.tab==="cronHistory"&&(await en(e),await Ae(e)),e.tab==="skills"&&await sn(e),e.tab==="toolLibrary"&&await ee(e),e.tab==="mcp"&&(await ee(e),Ct(e)),e.tab==="llmTrace"&&(await ee(e),Ct(e),await Bo(e)),e.tab==="sandbox"&&(await ee(e),e.securityForm=Wo(e),await Wn(e)),e.tab==="digitalEmployee"&&await Ae(e),e.tab==="agents"){await mc(e),await ee(e),Ct(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&tm(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(em(e,n),e.agentsPanel==="skills"&&nm(e,n),e.agentsPanel==="channels"&&$e(e,!1),e.agentsPanel==="cron"&&en(e))}e.tab==="nodes"&&(await Us(e),await gt(e),await ee(e),Ct(e),await Fo(e)),(e.tab==="chat"||e.tab==="message")&&(await ee(e),await sd(e),Ae(e),Fn(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await $o(e),await ee(e),Ct(e)),(e.tab==="envVars"||e.tab==="models"||e.tab==="modelLibrary")&&(await ee(e),Ct(e)),e.tab==="debug"&&(await Ns(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Ao(e,{reset:!0}),pc(e,!0))}function Pg(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?Hn(e):$g(window.location.pathname)}function Ig(e){e.theme=e.settings.theme??"light",Fs(e,zo(e.theme))}function Fs(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function Dg(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&Fs(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function Rg(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function Vc(e){if(typeof window>"u")return;const t=new URL(window.location.href),n=t.searchParams.get("session")?.trim()??"";Ho(t.pathname,e.basePath)!=="chat"||!n||(t.pathname=ln(Ft("message",e.basePath)),window.history.replaceState({},"",t.toString()))}function Ng(e,t){if(typeof window>"u")return;Vc(e);let n=Ho(window.location.pathname,e.basePath)??"chat";n==="config"&&(n="overview"),jc(e,n),Gc(e,n,t)}function Ug(e){if(typeof window>"u")return;Vc(e);let t=Ho(window.location.pathname,e.basePath);if(!t)return;t==="config"&&(t="overview");const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,Nt(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),jc(e,t)}function jc(e,t){e.tab!==t&&(e.tab=t,Kc(e)),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Eo(e):To(e),t==="debug"?Lo(e):_o(e),e.connected&&Qo(e)}function Gc(e,t,n){if(typeof window>"u")return;const s=ln(Ft(t,e.basePath)),a=ln(window.location.pathname),o=new URL(window.location.href);(t==="chat"||t==="message")&&e.sessionKey?o.searchParams.set("session",e.sessionKey):o.searchParams.delete("session"),a!==s&&(o.pathname=s),n?window.history.replaceState({},"",o.toString()):window.history.pushState({},"",o.toString())}function Va(e,t,n){if(typeof window>"u")return;const s=new URL(window.location.href);s.searchParams.set("session",t),window.history.replaceState({},"",s.toString())}async function Jc(e){await Promise.all([$e(e,!1),Dc(e),Ie(e,{includeLastMessage:!0}),un(e),Ns(e)])}async function Og(e){await Promise.all([$e(e,!0),$o(e),ee(e)])}async function en(e){await Promise.all([$e(e,!1),un(e),Bn(e)])}const ll=50,Fg=80,Bg=12e4;function Wg(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(a=>{if(!a||typeof a!="object")return null;const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>!!a);return s.length===0?null:s.join(`
`)}function rl(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Wg(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=oc(n,Bg);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function Hg(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function zg(e){if(e.toolStreamOrder.length<=ll)return;const t=e.toolStreamOrder.length-ll,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function Qg(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function ja(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Qg(e)}function Kg(e,t=!1){if(t){ja(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>ja(e),Fg))}function zn(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],ja(e)}const qg=5e3;function Vg(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},qg))}function jg(e,t){if(!t)return;if(t.stream==="compaction"){Vg(e,t);return}if(t.stream!=="tool")return;const n=typeof t.sessionKey=="string"?t.sessionKey:void 0;if(n&&!Mo(n,e.sessionKey)||!n&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId)return;const s=t.data??{},a=typeof s.toolCallId=="string"?s.toolCallId:"";if(!a)return;const o=typeof s.name=="string"?s.name:"tool",i=typeof s.phase=="string"?s.phase:"",c=i==="start"?s.args:void 0,d=i==="update"?rl(s.partialResult):i==="result"?rl(s.result):void 0,p=Date.now();let m=e.toolStreamById.get(a);m?(m.name=o,c!==void 0&&(m.args=c),d!==void 0&&(m.output=d||void 0),m.updatedAt=p):(m={toolCallId:a,runId:t.runId,sessionKey:n,name:o,args:c,output:d||void 0,startedAt:typeof t.ts=="number"?t.ts:p,updatedAt:p,message:{}},e.toolStreamById.set(a,m),e.toolStreamOrder.push(a)),m.message=Hg(m),zg(e),Kg(e,i==="result")}const Gg=/^\[([^\]]+)\]\s*/,Jg=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"],ca=new WeakMap,da=new WeakMap;function Yg(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:Jg.some(t=>e.startsWith(`${t} `))}function ua(e){const t=e.match(Gg);if(!t)return e;const n=t[1]??"";return Yg(n)?e.slice(t[0].length):e}function Ga(e){const t=e,n=typeof t.role=="string"?t.role:"",s=t.content;if(typeof s=="string")return n==="assistant"?na(s):ua(s);if(Array.isArray(s)){const a=s.map(o=>{const i=o;return i.type==="text"&&typeof i.text=="string"?i.text:null}).filter(o=>typeof o=="string");if(a.length>0){const o=a.join(`
`);return n==="assistant"?na(o):ua(o)}}return typeof t.text=="string"?n==="assistant"?na(t.text):ua(t.text):null}function Yc(e){if(!e||typeof e!="object")return Ga(e);const t=e;if(ca.has(t))return ca.get(t)??null;const n=Ga(e);return ca.set(t,n),n}function cl(e){const n=e.content,s=[];if(Array.isArray(n))for(const c of n){const d=c;if(d.type==="thinking"&&typeof d.thinking=="string"){const p=d.thinking.trim();p&&s.push(p)}}if(s.length>0)return s.join(`
`);const a=Xg(e);if(!a)return null;const i=[...a.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(c=>(c[1]??"").trim()).filter(Boolean);return i.length>0?i.join(`
`):null}function Zg(e){if(!e||typeof e!="object")return cl(e);const t=e;if(da.has(t))return da.get(t)??null;const n=cl(e);return da.set(t,n),n}function Xg(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(a=>{const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>typeof a=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function ef(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let dl=!1;function ul(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function tf(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function nf(){dl||(dl=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function Ye(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),ul(t)}return nf(),ul(tf())}const Ja=500;async function it(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:Un(e.sessionKey),limit:Ja});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function sf(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}async function af(e,t,n,s){if(!e.client||!e.connected)return null;const a=t.trim(),o=n&&n.length>0;if(!a&&!o)return null;const i=Date.now(),c=[];if(a&&c.push({type:"text",text:a}),o)for(const m of n)(m.kind??(m.mimeType?.startsWith("image/")?"image":"file"))==="image"?c.push({type:"image",source:{type:"base64",media_type:m.mimeType,data:m.dataUrl}}):c.push({type:"text",text:`[附件] ${m.filename||"file"} (${m.mimeType||"application/octet-stream"})`});e.chatMessages=[...e.chatMessages,{role:"user",content:c,timestamp:i}],e.chatSending=!0,e.lastError=null;const d=Ye();e.chatRunId=d,e.chatStream="",e.chatStreamStartedAt=i;const p=o?n.map(m=>{const g=sf(m.dataUrl);return g?{type:m.kind??(m.mimeType?.startsWith("image/")?"image":"file"),mimeType:g.mimeType,content:g.content,filename:m.filename,sizeBytes:m.sizeBytes}:null}).filter(m=>m!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:Un(e.sessionKey),message:a,deliver:!1,idempotencyKey:d,attachments:p,modelRef:s??void 0}),d}catch(m){const g=String(m);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=g,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+g}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function of(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{const n=Un(e.sessionKey);return await e.client.request("chat.abort",t?{sessionKey:n,runId:t}:{sessionKey:n}),t&&e.chatRunId===t&&(e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null),!0}catch(n){return e.lastError=String(n),!1}}function lf(e,t){if(!t||!Mo(t.sessionKey,e.sessionKey))return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=Ga(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else t.state==="final"||t.state==="aborted"?(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null):t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const Zc=0;async function rf(e){const t=e.sessionKey?.trim();if(!t)return!1;const n=e.sessionsResult?.sessions;if(!Array.isArray(n))return!1;const s=n.some(o=>Mo(o.key,t));if(n.length>0&&s||!s&&Fp(t)||!s&&Bp(t)||n.length===0&&t==="agent.main.main")return!1;const a=n.length>0&&(n.find(o=>o.key&&o.kind!=="global")??n[0])?.key?.trim()||"agent.main.main";return a===t?!1:(e.sessionKey=a,e.applySettings({...e.settings,sessionKey:a,lastActiveSessionKey:a}),e.chatMessage="",e.chatAttachments=[],e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.chatSending=!1,e.resetToolStream(),await e.loadAssistantIdentity(),Va(e,a),!0)}function Xc(e){return e.chatSending||!!e.chatRunId}function cf(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function df(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function ed(e){e.connected&&(e.chatMessage="",await of(e))}function uf(e,t,n,s){const a=t.trim(),o=!!(n&&n.length>0);!a&&!o||(e.chatQueue=[...e.chatQueue,{id:Ye(),sessionKey:e.sessionKey,text:a,createdAt:Date.now(),attachments:o?n?.map(i=>({...i})):void 0,refreshSessions:s}])}async function td(e,t,n){zn(e);const s=await af(e,t,n?.attachments,e.chatModelRef??null),a=!!s;return!a&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!a&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),a&&qc(e,e.sessionKey),a&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),a&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),Fn(e),a&&!e.chatRunId&&nd(e),a&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),a}async function nd(e){if(!e.connected||Xc(e))return;const t=e.chatQueue.findIndex(a=>a.sessionKey===e.sessionKey);if(t===-1)return;const n=e.chatQueue[t];e.chatQueue=[...e.chatQueue.slice(0,t),...e.chatQueue.slice(t+1)],await td(e,n.text,{attachments:n.attachments,refreshSessions:n.refreshSessions})||(e.chatQueue=[n,...e.chatQueue])}function pf(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function mf(e,t,n){if(!e.connected)return;const s=e.chatMessage,a=(t??e.chatMessage).trim(),o=e.chatAttachments??[],i=t==null?o:[],c=i.length>0;if(!a&&!c)return;if(cf(a)){await ed(e);return}const d=n?.refreshSessions??df(a);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),Xc(e)){uf(e,a,i,d);return}await td(e,a,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:c?i:void 0,previousAttachments:t==null?o:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:d})}async function sd(e){const t=e;await Ie(t,{activeMinutes:Zc,includeLastMessage:!0,limit:5e3});const n=await rf(t);await Promise.all([it(t),_t(e)]),n&&!t.lastError&&(t.lastError="该会话已不存在或已删除，已切换到可用会话。"),Fn(e)}const gf=nd;function ff(e){const t=uc(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function hf(e,t){const n=Hn(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function _t(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=ff(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=hf(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const a=await s.json(),o=typeof a.avatarUrl=="string"?a.avatarUrl.trim():"";e.chatAvatarUrl=o||null}catch{e.chatAvatarUrl=null}}const vf={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},yf={name:"",description:"",agentId:"",digitalEmployeeId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"isolated",wakeMode:"now",payloadKind:"agentTurn",payloadText:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",timeoutSeconds:""},bf=50,wf=200,kf="Assistant";function pl(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function Ya(e){const t=pl(e?.name,bf)??kf,n=pl(e?.avatar??void 0,wf)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}function $f(){return Ya(typeof window>"u"?{}:{name:window.__OPENCLAW_ASSISTANT_NAME__,avatar:window.__OPENCLAW_ASSISTANT_AVATAR__})}async function ad(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const a=await e.client.request("agent.identity.get",s);if(!a)return;const o=Ya(a);e.assistantName=o.name,e.assistantAvatar=o.avatar,e.assistantAgentId=o.agentId??null}catch{}}function Za(e){return typeof e=="object"&&e!==null}function Sf(e){if(!Za(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!Za(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const a=typeof e.createdAtMs=="number"?e.createdAtMs:0,o=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!a||!o?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:a,expiresAtMs:o}}function xf(e){if(!Za(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function od(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function Cf(e,t){const n=od(e).filter(s=>s.id!==t.id);return n.push(t),n}function ml(e,t){return od(e).filter(n=>n.id!==t)}const Mf=3e3;async function id(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("approvals.list",{}),n=Bc(t);e.approvalsResult=n;const s=new Set(ug(n)),a=new Set(e.approvalBannerBaselineIds);for(const i of a)s.has(i)||a.delete(i);const o=[...s].filter(i=>!a.has(i));if(!e.approvalBannerPollInitialized){e.approvalBannerPollInitialized=!0,e.approvalBannerBaselineIds=[...s],s.size>0?(e.approvalBannerVisible=!0,e.approvalBannerPendingCount=s.size):e.approvalBannerPendingCount=0;return}if(o.length>0){for(const i of o)a.add(i);e.approvalBannerVisible=!0}e.approvalBannerBaselineIds=[...a],s.size===0?(e.approvalBannerVisible=!1,e.approvalBannerPendingCount=0):e.approvalBannerVisible&&(e.approvalBannerPendingCount=s.size)}catch{}}function Af(e){e.approvalBannerPollInterval==null&&(e.approvalBannerPollInterval=window.setInterval(()=>{id(e)},Mf))}function ld(e){e.approvalBannerPollInterval!=null&&(clearInterval(e.approvalBannerPollInterval),e.approvalBannerPollInterval=null)}function Xa(e){e.approvalBannerVisible=!1,e.approvalBannerPollInitialized=!1,e.approvalBannerBaselineIds=[],e.approvalBannerPendingCount=0}function Ef(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),s=e.token??"",a=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),s];return t==="v2"&&a.push(e.nonce??""),a.join("|")}const rd={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},gl=rd,eo={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(rd));new Set(Object.values(eo));const Tf=4008;class Lf{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>{this.lastSeq=null,this.queueConnect()}),this.ws.addEventListener("message",t=>{this.handleWsMessage(t.data)}),this.ws.addEventListener("close",t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}async handleWsMessage(t){try{if(typeof t=="string"){this.handleMessage(t);return}if(typeof Blob<"u"&&t instanceof Blob){this.handleMessage(await t.text());return}if(t instanceof ArrayBuffer){this.handleMessage(new TextDecoder().decode(t));return}if(ArrayBuffer.isView(t)){const n=t;this.handleMessage(new TextDecoder().decode(n.buffer.slice(0)));return}this.handleMessage(String(t??""))}catch{}}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let a=null,o=!1,i=this.opts.token;if(t){a=await Oo();const m=lm({deviceId:a.deviceId,role:s})?.token;i=m??this.opts.token,o=!!(m&&this.opts.token)}const c=i||this.opts.password?{token:i,password:this.opts.password}:void 0;let d;if(t&&a){const m=Date.now(),g=this.connectNonce??void 0,f=Ef({deviceId:a.deviceId,clientId:this.opts.clientName??gl.CONTROL_UI,clientMode:this.opts.mode??eo.WEBCHAT,role:s,scopes:n,signedAtMs:m,token:i??null,nonce:g}),$=await Pm(a.privateKey,f);d={id:a.deviceId,publicKey:a.publicKey,signature:$,signedAt:m,nonce:g}}const p={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??gl.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??eo.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:d,caps:[],auth:c,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",p).then(m=>{m?.auth?.deviceToken&&a&&yc({deviceId:a.deviceId,role:m.auth.role??s,token:m.auth.deviceToken,scopes:m.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(m)}).catch(m=>{o&&a&&bc({deviceId:a.deviceId,role:s});const g=m instanceof Error?m.message:String(m);this.ws?.close(Tf,g||"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const a=n;if(a.event==="connect.challenge"){const i=a.payload,c=i&&typeof i.nonce=="string"?i.nonce:null;c&&(this.connectNonce=c,this.sendConnect());return}const o=typeof a.seq=="number"?a.seq:null;o!==null&&(this.lastSeq!==null&&o>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:o}),this.lastSeq=o);try{this.opts.onEvent?.(a)}catch(i){console.error("[gateway] event handler error:",i)}return}if(s.type==="res"){const a=n,o=this.pending.get(a.id);if(!o)return;this.pending.delete(a.id),a.ok?o.resolve(a.payload):o.reject(new Error(a.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=Ye(),a={type:"req",id:s,method:t,params:n},o=new Promise((i,c)=>{this.pending.set(s,{resolve:d=>i(d),reject:c})});return this.ws.send(JSON.stringify(a)),o}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function pa(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const a=t.mainKey?.trim()||"main",o=t.defaultAgentId?.trim();return n==="main"||n===a||o&&(n===`agent:${o}:main`||n===`agent:${o}:${a}`)?s:n}function _f(e,t){if(!t?.mainSessionKey)return;const n=pa(e.sessionKey,t),s=pa(e.settings.sessionKey,t),a=pa(e.settings.lastActiveSessionKey,t),o=n||s||e.sessionKey,i={...e.settings,sessionKey:s||o,lastActiveSessionKey:a||o},c=i.sessionKey!==e.settings.sessionKey||i.lastActiveSessionKey!==e.settings.lastActiveSessionKey;o!==e.sessionKey&&(e.sessionKey=o,e.chatMessage="",e.chatAttachments=[],e.chatModelRef=null,e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.chatQueue=[],zn(e)),c&&Nt(e,i)}function cd(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null,e.client?.stop(),e.client=new Lf({url:Kp(e.settings.gatewayUrl),token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",onHello:t=>{e.connected=!0,e.lastError=null,e.hello=t,Df(e,t),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,zn(e),$o(e),ad(e),mc(e),Us(e,{quiet:!0}),gt(e,{quiet:!0}),Qo(e);const n=e;Xa(n),(async()=>(await id(n),Af(n)))()},onClose:({code:t,reason:n})=>{if(e.connected=!1,ld(e),Xa(e),t!==1012){const s=(n??"").trim();s?e.lastError=s:t===1006?e.lastError="连接失败，请检查后端地址和网络连接":e.lastError=`连接断开 (${t})`}},onEvent:t=>Pf(e,t),onGap:({expected:t,received:n})=>{e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`}}),e.client.start()}function Pf(e,t){try{If(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function If(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;jg(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&qc(e,n.sessionKey);const s=lf(e,n);if(s==="final"||s==="error"||s==="aborted"){zn(e),gf(e);const a=n?.runId;a&&e.refreshSessionsAfterChat.has(a)&&(e.refreshSessionsAfterChat.delete(a),s==="final"&&Ie(e,{activeMinutes:Zc,includeLastMessage:!0}))}(s==="final"||s==="aborted")&&it(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&en(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&gt(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=Sf(t.payload);if(n){e.execApprovalQueue=Cf(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=ml(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=xf(t.payload);n&&(e.execApprovalQueue=ml(e.execApprovalQueue,n.id))}}function Df(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&_f(e,n.sessionDefaults)}function Rf(e){e.basePath=Pg(),Tg(e),Ng(e,!0),Ig(e),Dg(e),window.addEventListener("popstate",e.popStateHandler),cd(e),Zp(e),e.tab==="logs"&&Eo(e),e.tab==="debug"&&Lo(e)}function Nf(e){Qp(e)}function Uf(e){window.removeEventListener("popstate",e.popStateHandler),Xp(e),To(e),_o(e),ld(e),Xa(e),Rg(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function Of(e){return e==="chat"||e==="message"}function Ff(e,t){if(Of(e.tab)&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab")||t.has("sessionKey"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading,a=t.has("sessionKey");(a||s)&&Fa(e),Fn(e,n||s||a||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&pc(e,t.has("tab")||t.has("logsAutoFollow"))}function _e(e,t){const n=Ft(t,e.basePath),s=t==="sandbox";return r`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${a=>{a.defaultPrevented||a.button!==0||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||(a.preventDefault(),e.setTab(t))}}
      title=${qa(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${z[zc(t)]}</span>
      <span class="nav-item__text">
        ${qa(t)}
        ${s?r`<span class="nav-badge nav-badge--beta" title="Beta">BETA</span>`:""}
      </span>
    </a>
  `}function Bf(e){e.onboarding;const t=e.onboarding;e.onboarding||e.settings.chatShowThinking;const n=e.onboarding?!0:e.settings.chatFocusMode,s=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,a=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return r`
    <div class="chat-controls">
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${()=>{e.resetToolStream(),sd(e)}}
        title="Refresh chat data"
      >
        ${s}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${n?"active":""}"
        ?disabled=${t}
        @click=${()=>{t||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${n}
        title=${t?"Disabled during onboarding":"Toggle focus mode (hide sidebar + page header)"}
      >
        ${a}
      </button>
    </div>
  `}async function dd(e,t){if(!(!e.client||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const n=t?.startDate??e.usageStartDate,s=t?.endDate??e.usageEndDate,[a,o]=await Promise.all([e.client.request("sessions.usage",{startDate:n,endDate:s,limit:1e3,includeContextWeight:!0}),e.client.request("usage.cost",{startDate:n,endDate:s})]);a&&(e.usageResult=a),o&&(e.usageCostSummary=o)}catch(n){e.usageError=String(n)}finally{e.usageLoading=!1}}}async function Wf(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function Hf(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:500});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}function zf(e){return e.editModalOpen?r`
    <div class="modal-overlay" @click=${e.onEditClose}>
      <div class="modal card" @click=${t=>t.stopPropagation()}>
        <div class="card-title">修改数字员工</div>
        <div class="field" style="margin-top: 12px;">
          <span>名称</span>
          <span class="input"><input type="text" .value=${e.editName} disabled /></span>
          <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称不可修改</div>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>描述</span>
          <span class="textarea"><textarea
            rows="2"
            .value=${e.editDescription}
            @input=${t=>e.onEditDescriptionChange(t.target.value)}
          ></textarea></span>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>Prompt（可选）</span>
          <span class="textarea"><textarea
            rows="4"
            .value=${e.editPrompt}
            @input=${t=>e.onEditPromptChange(t.target.value)}
            placeholder="为该数字员工编写系统提示/人设说明。"
          ></textarea></span>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>企微群机器人 Webhook Key（可选）</span>
          <span class="input"><input
            type="text"
            .value=${e.editWeWorkGroupBotKey}
            @input=${t=>e.onEditWeWorkGroupBotKeyChange(t.target.value)}
            placeholder="填写后该员工的回复将自动发送到企微群机器人"
          /></span>
          <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">在企微群机器人详情页获取 Webhook 地址中的 key 参数</div>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>MCP 配置（可选）</span>
          <div class="row" style="margin-top: 6px; gap: 8px; flex-wrap: wrap;">
            <button
              class="btn ${e.editMcpMode==="builder"?"primary":""}"
              type="button"
              @click=${()=>e.onEditMcpModeChange("builder")}
            >
              点选配置
            </button>
            <button
              class="btn ${e.editMcpMode==="raw"?"primary":""}"
              type="button"
              @click=${()=>e.onEditMcpModeChange("raw")}
            >
              原生 JSON
            </button>
          </div>
          ${e.editMcpMode==="raw"?r`
                  <span class="textarea"><textarea
                    rows="4"
                    style="margin-top: 8px;"
                    .value=${e.editMcpJson}
                    @input=${t=>e.onEditMcpJsonChange(t.target.value)}
                    placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                  ></textarea></span>
                  <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                    与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                  </div>
                `:r`
                  <div class="row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                    <div class="muted" style="font-size: 12px;">
                      可添加多个 MCP；配置完成后可折叠，避免页面过长。
                    </div>
                    <button class="btn btn--sm" type="button" @click=${e.onEditMcpAddItem}>
                      <span class="btn__icon">${z.plus}</span>添加 MCP
                    </button>
                  </div>
                  <div style="margin-top: 8px; display: grid; gap: 10px;">
                    ${e.editMcpItems.map(t=>Ko(t,{onRemoveItem:e.onEditMcpRemoveItem,onCollapsedChange:e.onEditMcpCollapsedChange,onKeyChange:e.onEditMcpKeyChange,onEditModeChange:e.onEditMcpEditModeChange,onConnectionTypeChange:e.onEditMcpConnectionTypeChange,onFormPatch:e.onEditMcpFormPatch,onRawChange:e.onEditMcpRawChange}))}
                  </div>
                `}
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>已有技能</span>
          ${e.editSkillNames.length===0?r`<div class="muted" style="font-size: 12px;">暂无技能</div>`:r`
                  <div class="row" style="flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                    ${e.editSkillNames.map(t=>r`
                          <span
                            class="chip"
                            style="display: inline-flex; align-items: center; gap: 4px;"
                          >
                            ${t}
                            ${e.editSkillsToDelete.includes(t)?r`
                                  <span class="muted" style="font-size: 11px;"
                                    >已标记删除</span
                                  >
                                  <button
                                    type="button"
                                    class="btn btn--sm"
                                    style="padding: 2px 6px; font-size: 11px;"
                                    @click=${()=>e.onEditSkillUndoDelete(t)}
                                  >
                                    撤销
                                  </button>
                                `:r`
                                  <button
                                    type="button"
                                    class="btn btn--sm"
                                    style="padding: 2px 6px; font-size: 11px;"
                                    @click=${()=>e.onEditSkillDelete(t)}
                                  >
                                    删除
                                  </button>
                                `}
                          </span>
                        `)}
                  </div>
                `}
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>新上传技能文件（可多选）</span>
          <input
            type="file"
            accept=".md,.MD,.zip"
            multiple
            @change=${t=>{const n=t.target,s=n.files?Array.from(n.files):[];e.onEditSkillFilesChange(s)}}
          />
          ${e.editSkillFilesToUpload.length>0?r`
                  <div class="row" style="flex-wrap: wrap; gap: 4px; margin-top: 8px;">
                    ${e.editSkillFilesToUpload.map(t=>r`<span class="chip" style="font-size: 12px;"
                          >${t.name}</span
                        >`)}
                  </div>
                `:k}
        </div>
        ${e.editError?r`
                <div class="callout danger" style="margin-top: 12px;">
                  ${e.editError}
                </div>
              `:k}
        <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
          <button class="btn" ?disabled=${e.editBusy} @click=${e.onEditClose}>
            ${l("commonCancel")}
          </button>
          <button
            class="btn primary"
            ?disabled=${e.editBusy}
            @click=${e.onEditSubmit}
          >
            ${e.editBusy?l("commonLoading"):"保存"}
          </button>
        </div>
      </div>
    </div>
  `:k}function Qf(e){if(!e.createModalOpen)return k;const t=pd(e.createName?.trim()??"");return r`
    <div class="modal-overlay" @click=${e.onCreateClose}>
      <div class="modal card" @click=${n=>n.stopPropagation()}>
        <div class="card-title">新增数字员工</div>
        <div class="field" style="margin-top: 12px;">
          <span>名称</span>
          <span class="input"><input
            type="text"
            .value=${e.createName}
            @input=${n=>e.onCreateNameChange(n.target.value)}
            placeholder="如 SRE 运维专家"
          /></span>
          <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称唯一</div>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>描述</span>
          <span class="textarea"><textarea
            rows="2"
            .value=${e.createDescription}
            @input=${n=>e.onCreateDescriptionChange(n.target.value)}
          ></textarea></span>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>Prompt（可选）</span>
          <span class="textarea"><textarea
            rows="4"
            .value=${e.createPrompt}
            @input=${n=>e.onCreatePromptChange(n.target.value)}
            placeholder="为该数字员工编写系统提示/人设说明。"
          ></textarea></span>
        </div>
        <div class="field" style="margin-top: 12px;">
          <button class="btn secondary" type="button" @click=${e.onToggleAdvanced}>
            ${e.advancedOpen?"收起高级配置":"展开高级配置"}
          </button>
        </div>
        ${e.advancedOpen?r`
              <div class="card" style="margin-top: 12px;">
                <div class="card-title" style="font-size: 13px; margin-bottom: 8px;">高级配置</div>
                <div class="list-sub muted" style="font-size: 12px; margin-bottom: 8px;">
                  预估 ID：<code>${t}</code>（基于名称生成，用于专属技能目录
                  ~/.openocta/employee_skills/${t}/...）
                </div>
                <div class="field" style="margin-top: 8px;">
                  <span>MCP 配置（可选）</span>
                  <div class="row" style="margin-top: 6px; gap: 8px; flex-wrap: wrap;">
                    <button
                      class="btn ${e.createMcpMode==="builder"?"primary":""}"
                      type="button"
                      @click=${()=>e.onMcpModeChange("builder")}
                    >
                      点选配置
                    </button>
                    <button
                      class="btn ${e.createMcpMode==="raw"?"primary":""}"
                      type="button"
                      @click=${()=>e.onMcpModeChange("raw")}
                    >
                      原生 JSON
                    </button>
                  </div>
                  ${e.createMcpMode==="raw"?r`
                        <span class="textarea"><textarea
                          rows="4"
                          style="margin-top: 8px;"
                          .value=${e.mcpJson}
                          @input=${n=>e.onMcpJsonChange(n.target.value)}
                          placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                        ></textarea></span>
                        <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                          与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                        </div>
                      `:r`
                        <div class="row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                          <div class="muted" style="font-size: 12px;">
                            可添加多个 MCP；配置完成后可折叠，避免页面过长。
                          </div>
                          <button class="btn btn--sm" type="button" @click=${e.onMcpAddItem}>
                            <span class="btn__icon">${z.plus}</span>添加 MCP
                          </button>
                        </div>
                        <div style="margin-top: 8px; display: grid; gap: 10px;">
                          ${e.mcpItems.map(n=>Ko(n,{onRemoveItem:e.onMcpRemoveItem,onCollapsedChange:e.onMcpCollapsedChange,onKeyChange:e.onMcpKeyChange,onEditModeChange:e.onMcpEditModeChange,onConnectionTypeChange:e.onMcpConnectionTypeChange,onFormPatch:e.onMcpFormPatch,onRawChange:e.onMcpRawChange}))}
                        </div>
                      `}
                </div>
                <div class="field" style="margin-top: 8px;">
                  <span>技能名称（可选）</span>
                  <span class="input"><input
                    type="text"
                    .value=${e.skillUploadName}
                    @input=${n=>e.onSkillUploadNameChange(n.target.value)}
                    placeholder="不填则从文件名推导，如 prometheus-1.0.0.zip → prometheus-1.0.0"
                  /></span>
                </div>
                <div class="field" style="margin-top: 8px;">
                  <span>技能文件（SKILL.md 或 zip，可多选，提交时一并上传）</span>
                  <input
                    type="file"
                    accept=".md,.MD,.zip"
                    multiple
                    @change=${n=>{const s=n.target,a=s.files?Array.from(s.files):[];e.onSkillUploadFilesChange(a)}}
                  />
                </div>
                ${e.skillUploadError?r`
                      <div class="callout danger" style="margin-top: 8px;">
                        ${e.skillUploadError}
                      </div>
                    `:k}
              </div>
            `:k}
        ${e.createError?r`
              <div class="callout danger" style="margin-top: 12px;">
                ${e.createError}
              </div>
            `:k}
        <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
          <button class="btn" ?disabled=${e.createBusy} @click=${e.onCreateClose}>
            ${l("commonCancel")}
          </button>
          <button
            class="btn primary"
            ?disabled=${e.createBusy||!e.createName.trim()}
            @click=${e.onCreateSubmit}
          >
            ${e.createBusy?l("commonLoading"):l("skillsUploadSubmit")}
          </button>
        </div>
      </div>
    </div>
  `}function Kf(e){const t=e.employees??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(i=>[i.name,i.id,i.description].join(" ").toLowerCase().includes(n)):t,a=e.createName?.trim()??"",o=pd(a);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${l("navTitleDigitalEmployee")}</div>
          <div class="card-sub">
            提供不同垂直场景的对话模版，点击任一数字员工即可开启新的会话。
          </div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;" title=${l("mcpViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onCreateOpen}>
            ${l("skillsAdd")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?l("commonLoading"):l("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:k}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>${l("commonFilter")}</span>
          <span class="input"><input
            .value=${e.filter}
            @input=${i=>e.onFilterChange(i.target.value)}
            placeholder="搜索名称/ID/描述"
          /></span>
        </label>
        <div class="muted">${s.length} 个</div>
      </div>

      ${!e.loading&&s.length===0?r`<div class="muted" style="margin-top: 16px;">暂无匹配的数字员工。</div>`:r`
              ${e.viewMode==="list"?r`
                      <div class="list" style="margin-top: 16px;">
                        ${s.map(i=>qf(i,e))}
                      </div>
                    `:r`
                      <div
                        class="employees-card-grid"
                        style="
                          display: grid;
                          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                          gap: 12px;
                          margin-top: 16px;
                        "
                      >
                        ${s.map(i=>Vf(i,e))}
                      </div>
                    `}
            `}

      ${e.createModalOpen?r`
              <div class="modal-overlay" @click=${e.onCreateClose}>
                <div class="modal card" @click=${i=>i.stopPropagation()}>
                  <div class="card-title">新增数字员工</div>
                  <div class="field" style="margin-top: 12px;">
                    <span>名称</span>
                    <span class="input"><input
                      type="text"
                      .value=${e.createName}
                      @input=${i=>e.onCreateNameChange(i.target.value)}
                      placeholder="如 SRE 运维专家"
                    /></span>
                    <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称唯一</div>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>描述</span>
                    <span class="textarea"><textarea
                      rows="2"
                      .value=${e.createDescription}
                      @input=${i=>e.onCreateDescriptionChange(i.target.value)}
                    ></textarea></span>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>Prompt（可选）</span>
                    <span class="textarea"><textarea
                      rows="4"
                      .value=${e.createPrompt}
                      @input=${i=>e.onCreatePromptChange(i.target.value)}
                      placeholder="为该数字员工编写系统提示/人设说明。"
                    ></textarea></span>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <button class="btn secondary" type="button" @click=${e.onToggleAdvanced}>
                      ${e.advancedOpen?"收起高级配置":"展开高级配置"}
                    </button>
                  </div>
                  ${e.advancedOpen?r`
                          <div class="card" style="margin-top: 12px;">
                            <div class="card-title" style="font-size: 13px; margin-bottom: 8px;">
                              高级配置
                            </div>
                            <div class="list-sub muted" style="font-size: 12px; margin-bottom: 8px;">
                              预估 ID：<code>${o}</code>（基于名称生成，用于专属技能目录
                              ~/.openocta/employee_skills/${o}/...）
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>MCP 配置（可选）</span>
                              <div class="row" style="margin-top: 6px; gap: 8px; flex-wrap: wrap;">
                                <button
                                  class="btn ${e.createMcpMode==="builder"?"primary":""}"
                                  type="button"
                                  @click=${()=>e.onMcpModeChange("builder")}
                                >
                                  点选配置
                                </button>
                                <button
                                  class="btn ${e.createMcpMode==="raw"?"primary":""}"
                                  type="button"
                                  @click=${()=>e.onMcpModeChange("raw")}
                                >
                                  原生 JSON
                                </button>
                              </div>
                              ${e.createMcpMode==="raw"?r`
                                      <span class="textarea"><textarea
                                        rows="4"
                                        style="margin-top: 8px;"
                                        .value=${e.mcpJson}
                                        @input=${i=>e.onMcpJsonChange(i.target.value)}
                                        placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                                      ></textarea></span>
                                      <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                                        与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                                      </div>
                                    `:r`
                                      <div class="row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                                        <div class="muted" style="font-size: 12px;">
                                          可添加多个 MCP；配置完成后可折叠，避免页面过长。
                                        </div>
                                        <button class="btn btn--sm" type="button" @click=${e.onMcpAddItem}>
                                          <span class="btn__icon">${z.plus}</span>添加 MCP
                                        </button>
                                      </div>
                                      <div style="margin-top: 8px; display: grid; gap: 10px;">
                                        ${e.mcpItems.map(i=>Ko(i,{onRemoveItem:e.onMcpRemoveItem,onCollapsedChange:e.onMcpCollapsedChange,onKeyChange:e.onMcpKeyChange,onEditModeChange:e.onMcpEditModeChange,onConnectionTypeChange:e.onMcpConnectionTypeChange,onFormPatch:e.onMcpFormPatch,onRawChange:e.onMcpRawChange}))}
                                      </div>
                                    `}
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能名称（可选）</span>
                              <span class="input"><input
                                type="text"
                                .value=${e.skillUploadName}
                                @input=${i=>e.onSkillUploadNameChange(i.target.value)}
                                placeholder="不填则从文件名推导，如 prometheus-1.0.0.zip → prometheus-1.0.0"
                              /></span>
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能文件（SKILL.md 或 zip，可多选，提交时一并上传）</span>
                              <input
                                type="file"
                                accept=".md,.MD,.zip"
                                multiple
                                @change=${i=>{const c=i.target,d=c.files?Array.from(c.files):[];e.onSkillUploadFilesChange(d)}}
                              />
                            </div>
                            ${e.skillUploadError?r`
                                    <div class="callout danger" style="margin-top: 8px;">
                                      ${e.skillUploadError}
                                    </div>
                                  `:k}
                          </div>
                        `:k}
                  ${e.createError?r`
                          <div class="callout danger" style="margin-top: 12px;">
                            ${e.createError}
                          </div>
                        `:k}
                  <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                    <button class="btn" ?disabled=${e.createBusy} @click=${e.onCreateClose}>
                      ${l("commonCancel")}
                    </button>
                    <button
                      class="btn primary"
                      ?disabled=${e.createBusy||!e.createName.trim()}
                      @click=${e.onCreateSubmit}
                    >
                      ${e.createBusy?l("commonLoading"):l("skillsUploadSubmit")}
                    </button>
                  </div>
                </div>
              </div>
            `:k}

      ${k}
    </section>
  `}function qf(e,t){const n=e.name||e.id,s=e.description||(e.builtin?"内置数字员工":"自定义数字员工"),a=typeof e.createdAt=="number"&&e.createdAt>0?new Date(e.createdAt).toLocaleString():e.builtin?"内置":"",o=e.enabled!==!1;return r`
    <div class="list-item list-item--row" style="width: 100%; text-align: left;">
      <div class="list-main">
        <div class="list-title">
          ${n}
          ${e.builtin?r`<span class="chip" style="margin-left: 8px;">内置</span>`:k}
        </div>
        <div class="list-sub">${s}</div>
        <div class="list-sub muted" style="margin-top: 4px;">
          ${a?r`<span>创建时间：${a}</span>`:k}
          <span style="margin-left: 12px;">状态：${o?"启用":"禁用"}</span>
          ${ud(e)}
        </div>
      </div>
      <div class="row" style="gap: 8px; align-items: center; justify-content: flex-end;">
        <button class="btn btn--sm primary" @click=${()=>t.onOpenEmployee(e.id)}>会话</button>
        <button class="btn btn--sm" @click=${()=>t.onCopy(e.id)}>复制</button>
        <button class="btn btn--sm" @click=${()=>t.onEdit(e.id)}>
          修改
        </button>
        <button class="btn btn--sm danger" @click=${()=>t.onDelete(e.id)}>
          ${l("skillsDelete")}
        </button>
      </div>
    </div>
  `}function Vf(e,t){const n=e.name||e.id,s=e.description||(e.builtin?"内置数字员工":"自定义数字员工"),a=typeof e.createdAt=="number"&&e.createdAt>0?new Date(e.createdAt).toLocaleString():e.builtin?"内置":"",o=e.enabled!==!1;return r`
    <div class="skills-server-card" style="cursor: pointer;" @click=${()=>t.onOpenEmployee(e.id)}>
      <div class="skills-server-card__header">
        <div class="skills-server-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div class="skills-server-card__title-row" style="min-width: 0;">
          <span class="skills-server-card__name">${n}</span>
          ${e.builtin?r`<span class="chip" style="font-size: 11px;">内置</span>`:k}
          <span class="chip ${o?"chip-ok":"chip-warn"}" style="font-size: 11px;">
            ${o?"启用":"禁用"}
          </span>
        </div>
      </div>
      <div class="skills-server-card__sub muted" style="font-size: 12px;">
        <div>${s}</div>
        ${a?r`<div style="margin-top: 6px;">创建时间：${a}</div>`:k}
        ${ud(e)}
      </div>
      <div class="skills-server-card__footer" @click=${i=>i.stopPropagation()}>
        <button class="btn btn--sm primary" @click=${()=>t.onOpenEmployee(e.id)}>会话</button>
        <button class="btn btn--sm" @click=${()=>t.onCopy(e.id)}>复制</button>
        <button class="btn btn--sm" @click=${()=>t.onEdit(e.id)}>
          修改
        </button>
        <button class="btn btn--sm danger" @click=${()=>t.onDelete(e.id)}>
          ${l("skillsDelete")}
        </button>
      </div>
    </div>
  `}function ud(e){const t=e.skillNames??e.skillIds??[],n=e.mcpServerKeys??[];if(t.length===0&&n.length===0)return r``;const s=3,a=t.length<=s?t.join(", "):`${t.slice(0,s).join(", ")}....`,o=n.length<=s?n.join(", "):`${n.slice(0,s).join(", ")}....`,i=t.join(", "),c=n.join(", "),d=i&&c?`技能：${i}
MCP：${c}`:i?`技能：${i}`:`MCP：${c}`,p=[];return a&&p.push(`技能：${a}`),o&&p.push(`MCP：${o}`),r`<span
    style="margin-left: 12px; cursor: help; text-decoration: underline dotted;"
    title=${d}
  >
    ${p.join(" | ")}
  </span>`}function pd(e){const t=e.trim().toLowerCase();if(!t)return"employee";let n="";for(const s of t){if(s>="a"&&s<="z"||s>="0"&&s<="9"){n+=s;continue}(s==="-"||s==="_"||s===" ")&&(n+="-")}return n=n.replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n||(n="employee"),n.length>64&&(n=n.slice(0,64)),n}function Ko(e,t){const n=e.key?.trim()?e.key.trim():"未命名 MCP",s=e.editMode==="raw"?"JSON":e.connectionType,a=!!e.rawError,o=!!e.collapsed;return r`
    <details
      class="card"
      style="padding: 10px;"
      ?open=${!o}
      @toggle=${i=>{const c=i.target;t.onCollapsedChange(e.id,!c.open)}}
    >
      <summary class="row" style="cursor: pointer; list-style: none; align-items: center; gap: 8px;">
        <button
          class="btn btn--sm"
          type="button"
          title=${o?"展开":"折叠"}
          @click=${i=>{i.preventDefault(),i.stopPropagation(),t.onCollapsedChange(e.id,!o)}}
        >
          ${o?"▸ 展开":"▾ 折叠"}
        </button>
        <span style="font-weight: 600; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${n}
        </span>
        <span class="chip" style="font-size: 11px;">${s}</span>
        ${a?r`<span class="chip chip-warn" style="font-size: 11px;">有错误</span>`:k}
        <button
          class="btn btn--sm"
          type="button"
          style="margin-left: 6px;"
          @click=${i=>{i.preventDefault(),i.stopPropagation(),t.onRemoveItem(e.id)}}
        >
          删除
        </button>
      </summary>

      <div style="margin-top: 10px;">
        <div class="field">
          <span>Key（唯一）*</span>
          <span class="input"><input
            type="text"
            .value=${e.key}
            placeholder="如 prometheus, filesystem"
            @input=${i=>t.onKeyChange(e.id,i.target.value)}
          /></span>
        </div>

        <div class="row" style="margin-top: 10px; gap: 8px;">
          <button
            class="btn ${e.editMode==="form"?"primary":""}"
            type="button"
            @click=${()=>t.onEditModeChange(e.id,"form")}
          >
            点选配置
          </button>
          <button
            class="btn ${e.editMode==="raw"?"primary":""}"
            type="button"
            @click=${()=>t.onEditModeChange(e.id,"raw")}
          >
            原生 JSON
          </button>
        </div>

        ${e.editMode==="raw"?r`
                <div class="field" style="margin-top: 10px;">
                  <span>JSON</span>
                  <span class="textarea"><textarea
                    rows="6"
                    style="font-family: var(--mono); font-size: 12px;"
                    .value=${e.rawJson}
                    @input=${i=>t.onRawChange(e.id,i.target.value)}
                  ></textarea></span>
                  ${e.rawError?r`<div class="callout danger" style="margin-top: 8px;">${e.rawError}</div>`:k}
                </div>
              `:r`
                <div
                  class="row"
                  style="
                    display: flex;
                    gap: 4px;
                    margin-top: 12px;
                    border-bottom: 1px solid var(--border, #333);
                    padding-bottom: 4px;
                  "
                >
                  <button
                    class="btn ${e.connectionType==="stdio"?"primary":""}"
                    type="button"
                    style="flex: 1; min-width: 0;"
                    @click=${()=>t.onConnectionTypeChange(e.id,"stdio")}
                  >
                    stdio
                  </button>
                  <button
                    class="btn ${e.connectionType==="url"?"primary":""}"
                    type="button"
                    style="flex: 1; min-width: 0;"
                    @click=${()=>t.onConnectionTypeChange(e.id,"url")}
                  >
                    url
                  </button>
                  <button
                    class="btn ${e.connectionType==="service"?"primary":""}"
                    type="button"
                    style="flex: 1; min-width: 0;"
                    @click=${()=>t.onConnectionTypeChange(e.id,"service")}
                  >
                    service
                  </button>
                </div>
                <div style="margin-top: 10px;">
                  ${Jf(e,i=>t.onFormPatch(e.id,i))}
                </div>
              `}
      </div>
    </details>
  `}function jf(e){return!e||typeof e!="object"?"":Object.entries(e).map(([t,n])=>`${t}=${n}`).join(`
`)}function Gf(e){const t={};for(const n of e.split(/\n/)){const s=n.trim();if(!s)continue;const a=s.indexOf("=");if(a>0){const o=s.slice(0,a).trim(),i=s.slice(a+1).trim();o&&(t[o]=i)}}return t}function Jf(e,t){const n=["npx","docker","uv"];if(e.connectionType==="stdio"){let s=(e.draft?.command??"").trim();if(!s&&e.editMode==="raw"&&e.rawJson?.trim())try{const i=JSON.parse(e.rawJson);i&&typeof i.command=="string"&&i.command.trim()&&(s=i.command.trim())}catch{}s=s||"npx";const a=n,o=a.includes(s)?a:[s,...a];return r`
      <div class="field">
        <span>command *</span>
        <span class="select"><select
          @change=${i=>t({command:i.target.value})}
        >
          ${o.map(i=>r`
            <option 
              value=${i} 
              ?selected=${i===s} 
            >
              ${i}
            </option>
          `)}
        </select></span>
      </div>
      <div class="field" style="margin-top: 8px;">
        <span>args</span>
        <span class="input"><input
          type="text"
          .value=${(e.draft?.args??[]).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${i=>{const c=i.target.value;t({args:c.trim()?c.trim().split(/\s+/):[]})}}
        /></span>
      </div>
      <div class="field" style="margin-top: 8px;">
        <span>env</span>
        <span class="textarea"><textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder="KEY=value"
          .value=${jf(e.draft?.env)}
          @input=${i=>{const c=i.target.value;t({env:Gf(c)})}}
        ></textarea></span>
      </div>
    `}return e.connectionType==="url"?r`
      <div class="field">
        <span>url *</span>
        <span class="input"><input
          type="text"
          .value=${e.draft?.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${s=>t({url:s.target.value})}
        /></span>
      </div>
    `:r`
    <div class="field">
      <span>service *</span>
      <span class="input"><input
        type="text"
        .value=${e.draft?.service??""}
        placeholder="prometheus"
        @input=${s=>t({service:s.target.value})}
      /></span>
    </div>
    <div class="field" style="margin-top: 8px;">
      <span>serviceUrl *</span>
      <span class="input"><input
        type="text"
        .value=${e.draft?.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${s=>t({serviceUrl:s.target.value})}
      /></span>
    </div>
  `}const Yf={feishu:{fields:[{path:["credentials","appId"],label:"App ID",required:!0,type:"string",placeholder:"cli_xxx"},{path:["credentials","appSecret"],label:"App Secret",required:!0,type:"string",placeholder:"xxx"},{path:["credentials","domain"],label:"Domain",required:!1,type:"string",placeholder:"open.feishu.cn"},{path:["credentials","encryptKey"],label:"Encrypt Key",required:!1,type:"string"},{path:["credentials","verificationToken"],label:"Verification Token",required:!1,type:"string"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1, user-id-2"}]},dingtalk:{fields:[{path:["credentials","clientId"],label:"Client ID",required:!0,type:"string",placeholder:"your-client-id"},{path:["credentials","clientSecret"],label:"Client Secret",required:!0,type:"string",placeholder:"your-client-secret"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1, user-id-2"}]},weixin:{fields:[{path:["credentials","botToken"],label:"Bot Token",required:!0,type:"string",placeholder:"iLink 扫码登录后的 bot_token",help:"个人微信 iLink 通道凭据（与企业微信的 Bot Secret 不同）。扫码成功后自动写入。"},{path:["credentials","botId"],label:"Bot ID (iLink)",required:!0,type:"string",placeholder:"ilink_bot_id",help:"iLink 侧 Bot ID，可与 openclaw-weixin / openilink 文档中的 ilink_bot_id 对应。"},{path:["credentials","baseUrl"],label:"API Base URL",required:!1,type:"string",placeholder:"https://ilinkai.weixin.qq.com",help:"一般留空；若扫码返回了专属 baseurl 可填在此。"},{path:["credentials","userId"],label:"绑定的微信 userId（可选）",required:!1,type:"string",placeholder:"ilink_user_id",help:"登录账号标识，便于辨认；不影响连接。"},{path:["credentials","botType"],label:"bot_type（可选）",required:!1,type:"string",placeholder:"默认 3",help:"仅在使用非默认扫码参数时填写。"},{path:["credentials","routeTag"],label:"SKRouteTag（可选）",required:!1,type:"string",help:"与服务端路由相关的可选请求头。"},{path:["credentials","getUpdatesBuf"],label:"get_updates_buf（可选）",required:!1,type:"string",help:"长轮询同步游标；高级用法，用于断点续拉（多数场景留空）。"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed peer user IDs",required:!1,type:"string[]",placeholder:"ilink_user_id_1, …",help:"空表示不限制；仅允许列表内用户与 Bot 的对话进入系统。"}]},wework:{fields:[{path:["credentials","botId"],label:"Bot ID",required:!0,type:"string",placeholder:"智能机器人 BotId",help:"企业微信后台或扫码创建后获得，对应长连接 BotID。"},{path:["credentials","botSecret"],label:"Bot Secret",required:!0,type:"string",placeholder:"机器人 Secret",help:"与 Bot ID 配对，请妥善保管。"},{path:["credentials","wsUrl"],label:"WebSocket URL",required:!1,type:"string",placeholder:"wss://openws.work.weixin.qq.com",help:"一般留空使用官方默认地址。"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed user IDs",required:!1,type:"string[]",placeholder:"userid-1, userid-2",help:"空表示不限制；仅允许列表内用户发消息进入系统。"}]},qq:{fields:[{path:["credentials","appId"],label:"App ID",required:!0,type:"string",placeholder:"your-app-id"},{path:["credentials","appSecret"],label:"App Secret",required:!0,type:"string",placeholder:"your-app-secret"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-openid-1"}]}};function Zf(e){const t=e.toLowerCase();return Yf[t]??null}function Xf(e,t){let n=e;for(const s of t){if(n==null||typeof n!="object")return;n=n[s]}return n}function ss(e){const t=(e??"").trim();return t?t.toLowerCase().startsWith("local:")?t.slice(6).trim():t:""}function fl(e){if(e?.builtin)return"内置";const t=(e?.from??"").trim().toLowerCase();return t==="remote"?"远程":"本地"}function eh(e,t){const s=(e.channels??{})[t],a=e[t];return(s&&typeof s=="object"?s:null)??(a&&typeof a=="object"?a:null)??{}}function th(e,t){return e==null?"":t.type==="boolean"?e?"true":"false":t.type==="string[]"?Array.isArray(e)?e.join(", "):typeof e=="string"?e:"":String(e)}function nh(e,t){if(t.type==="boolean")return e==="true"||e==="1"||e.toLowerCase()==="yes";if(t.type==="number"){const n=parseInt(e,10);return isNaN(n)?void 0:n}return t.type==="string[]"?e.trim()?e.split(/,\s*/).map(n=>n.trim()).filter(Boolean):[]:e}function sh(e){const t=Zf(e.channelId),n=e.configValue??{},s=eh(n,e.channelId);if(!t)return r`
      <div class="callout danger">${l("channelsConfigSchemaUnavailable")}</div>
    `;const a=(e.digitalEmployees??[]).slice().sort((f,$)=>{const S=(f.name??f.id??"").toLowerCase(),w=($.name??$.id??"").toLowerCase();return S.localeCompare(w)}),o=String(s.digitalEmployeeId??"").trim(),i=ss(o),c=i&&a.length?a.find(f=>ss(String(f.id??"")).toLowerCase()===i.toLowerCase()):void 0,d=!c&&i&&a.length?a.find(f=>(f.name??"").trim().toLowerCase()===i.toLowerCase()):void 0,p=c??d,m=i!==""&&!p&&e.digitalEmployeesLoading!==!0,g=ss(String(p?.id??o));return r`
    <div class="config-form">
      <div class="field">
        <span>数字员工</span>
        <span class="select"><select
          .value=${g}
          ?disabled=${e.disabled}
          @change=${f=>e.onPatch(["channels",e.channelId,"digitalEmployeeId"],f.target.value)}
        >
          <option value="" ?selected=${g===""}>（不选择）</option>
          ${a.map(f=>{const $=ss(String(f.id??"")),S=fl(f),w=f.name?`${f.name}（${$} · ${S}）`:`${$}（${S}）`;return r`<option value=${$} ?selected=${$===g}>${w}</option>`})}
          ${m?r`<option value=${i} ?selected=${i===g}>—（已删除：${i}）</option>`:k}
        </select></span>
        <div class="muted" style="font-size: 12px; margin-top: 6px; line-height: 1.35;">
          选择后，该渠道进入的对话会使用该数字员工的人设与技能；若数字员工被删除，会回退为普通会话并提示你修改配置。
        </div>
        ${p?r`<div class="row" style="margin-top: 8px; gap: 8px; flex-wrap: wrap;">
                <span class="chip">${fl(p)}</span>
                ${p.type?r`<span class="chip">${String(p.type).trim()||"其它"}</span>`:r`<span class="chip">其它</span>`}
              </div>`:k}
      </div>
      ${m?r`<div class="callout danger" style="margin-top: 12px;">
              当前渠道已配置的数字员工（${i}）不存在（可能已被删除）。请将“数字员工”改为有效项或清空后保存。
            </div>`:k}
      ${t.fields.map(f=>{const $=Xf(s,f.path),S=th($,f),w=["channels",e.channelId,...f.path];return r`
          <div class="field">
            <span>
              ${f.label}
              ${f.required?r`<span style="color: var(--danger-color);">*</span>`:""}
            </span>
            ${f.type==="boolean"?r`
                  <div class="row" style="align-items: center; gap: 8px;">
                    <span class="checkbox"><input
                      type="checkbox"
                      ?checked=${$===!0}
                      ?disabled=${e.disabled}
                      @change=${C=>e.onPatch(w,C.target.checked)}
                    /></span>
                  </div>
                `:r`
                  <span class="input"><input
                    type="${f.type==="number"?"number":"text"}"
                    .value=${S}
                    placeholder=${f.placeholder??""}
                    ?disabled=${e.disabled}
                    @input=${C=>{const L=C.target.value;e.onPatch(w,nh(L,f))}}
                  /></span>
                `}
            ${f.help?r`<div class="muted" style="font-size: 12px; margin-top: 4px; line-height: 1.35;">
                  ${f.help}
                </div>`:k}
          </div>
        `})}
    </div>
  `}function ah(e){const{channelId:t,props:n}=e,s=n.configSaving;return r`
    <div>
      ${sh({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,digitalEmployees:n.digitalEmployees,digitalEmployeesLoading:n.digitalEmployeesLoading,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?l("commonSaving"):l("commonSave")}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          ${l("commonReload")}
        </button>
      </div>
    </div>
  `}const oh={wework:"微信",weixin:"个人微信",dingtalk:"钉钉",feishu:"飞书",qq:"QQ"};function ih(e){const t=e.selectedChannelId;if(!t)return k;const n=oh[t.toLowerCase()]??t.charAt(0).toUpperCase()+t.slice(1);return r`
    <div
      class="channel-panel-overlay"
      @click=${s=>{s.target.classList.contains("channel-panel-overlay")&&e.onChannelSelect(null)}}
    >
      <div class="channel-panel card" @click=${s=>s.stopPropagation()}>
        <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
          <div class="card-title">${n} ${l("configSettingsTitle")}</div>
          <button class="btn btn--icon" type="button" aria-label="关闭" @click=${()=>e.onChannelSelect(null)}>
            ${z.x}
          </button>
        </div>
        <div class="channel-panel-content">
          ${ah({channelId:t,props:e})}
        </div>
      </div>
    </div>
  `}function lh(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const a=s[e],o=typeof a?.configured=="boolean"&&a.configured,i=typeof a?.running=="boolean"&&a.running,c=typeof a?.connected=="boolean"&&a.connected,p=(n.channelAccounts?.[e]??[]).some(m=>m.configured||m.running||m.connected);return o||i||c||p}function rh(e,t){return t?.[e]?.length??0}function md(e,t){const n=rh(e,t);return n<2?k:r`<div class="account-count">${l("channelAccounts")} (${n})</div>`}function ch(e){return`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(e)}`}function dh(e){const s=e?.channels?.wework?.credentials,a=typeof s?.botId=="string"?s.botId.trim():"",o=typeof s?.botSecret=="string"?s.botSecret.trim():"";return a!==""&&o!==""}function uh(e){if(!e.weworkQrModalOpen)return k;const t=e.weworkQrModalAuthUrl&&!e.weworkQrModalLoading&&!e.weworkQrModalSuccess&&!e.weworkQrModalError,n=(e.weworkQrModalLoading||e.weworkQrModalPolling)&&!e.weworkQrModalSuccess&&!e.weworkQrModalError;return r`
    <div
      class="channel-panel-overlay channel-panel-overlay--centered"
      style="z-index: 1200;"
      @click=${s=>{s.target.classList.contains("channel-panel-overlay")&&e.onWeWorkQrModalClose()}}
    >
      <div class="card channel-panel" style="max-width: 400px; width: 92%;" @click=${s=>s.stopPropagation()}>
        <div class="row" style="justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div class="card-title" style="margin: 0;">${l("channelWeWorkQrModalTitle")}</div>
          <button type="button" class="btn btn--icon" aria-label="关闭" @click=${()=>e.onWeWorkQrModalClose()}>
            ${z.x}
          </button>
        </div>

        ${e.weworkQrModalReplaceWarn?r`<div class="callout danger" style="margin-bottom: 12px;">
                ${l("channelWeWorkQrReplaceWarn")}
              </div>`:k}

        ${e.weworkQrModalError?r`<div class="callout danger" style="margin-bottom: 12px;">
                ${e.weworkQrModalError}
              </div>`:k}

        ${e.weworkQrModalSuccess?r`<div class="callout" style="margin-bottom: 12px;">
                ${l("channelWeWorkQrSuccessClosing")}
              </div>`:k}

        ${t?r`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                  <img
                    src=${ch(e.weworkQrModalAuthUrl)}
                    alt="WeCom QR"
                    referrerpolicy="no-referrer"
                  />
                  ${e.weworkQrModalGenPageUrl?r`
                          <a
                            class="btn primary"
                            href=${e.weworkQrModalGenPageUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            ${l("channelWeWorkOpenGenPage")}
                          </a>
                        `:k}
                </div>
              `:k}

        ${n?r`
                <div
                  style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: ${t?"16px":"8px"};"
                >
                  <div
                    class="config-loading__spinner"
                    role="status"
                    aria-label=${e.weworkQrModalLoading?l("channelWeWorkQrPreparing"):l("channelWeWorkQrWaiting")}
                  ></div>
                  <div class="muted" style="font-size: 13px; text-align: center;">
                    ${e.weworkQrModalLoading?l("channelWeWorkQrPreparing"):l("channelWeWorkQrWaiting")}
                  </div>
                </div>
              `:k}

        <div class="row" style="margin-top: 18px; justify-content: flex-end;">
          <button type="button" class="btn" @click=${()=>e.onWeWorkQrModalClose()}>
            ${l("channelWeWorkQrModalCancel")}
          </button>
        </div>
      </div>
    </div>
  `}function ph(e){const{props:t,wework:n,accountCountLabel:s}=e,a=t.snapshot?.channelAccounts?.wework?.[0],o=a?.probe,i=!!n?.configured||!!a?.configured||dh(t.configForm),c=t.weworkQrModalOpen&&(t.weworkQrModalLoading||t.weworkQrModalPolling)&&!t.weworkQrModalSuccess;return r`
    ${uh(t)}
    <div class="card">
      <div class="card-title">${l("channelWeWork")}</div>
      <div class="card-sub">${l("channelWeWorkSub")}</div>
      ${s}

      <div class="account-card-list">
        <div class="account-card">
          <div class="account-card-header">
            <div class="account-card-title">${a?.name||l("channelWeWork")}</div>
            <div class="account-card-id">${a?.appId??a?.accountId??l("commonNA")}</div>
          </div>
          <div class="status-list account-card-status">
            <div>
              <span class="label">${l("channelConfigured")}</span>
              <span>${l(i?"commonYes":"commonNo")}</span>
            </div>
            <div>
              <span class="label">${l("channelWeWorkTransport")}</span>
              <span>${o?.transport??"wecom_aibot_ws"}</span>
            </div>
            <div>
              <span class="label">${l("channelWeWorkBotId")}</span>
              <span>${a?.appId?a.appId:l("commonNA")}</span>
            </div>
            <div>
              <span class="label">${l("channelRunning")}</span>
              <span>${n?.running?l("commonYes"):l("commonNo")}</span>
            </div>
            <div>
              <span class="label">${l("channelConnected")}</span>
              <span>${(()=>{const d=n?.connected??a?.connected;return l(d===!0?"commonYes":d===!1?"commonNo":"commonNA")})()}</span>
            </div>
            <div>
              <span class="label">${l("channelLastInbound")}</span>
              <span>${a?.lastInboundAt?Oe(a.lastInboundAt):l("commonNA")}</span>
            </div>
          </div>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:k}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${c}
          @click=${()=>t.onWeWorkQrStart()}
        >
          ${l(c?"channelWeWorkQrWorking":"channelWeWorkQrStart")}
        </button>
        <button
          class="btn primary"
          @click=${()=>t.onChannelSelect("wework")}
        >
          ${l("channelsConfigure")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${l("commonRefresh")}
        </button>
      </div>
    </div>
  `}function mh(e){const t=e.snapshot?.channels,n=t?.wework??void 0,s=t?.weixin??void 0,o=gh(e.snapshot).map((i,c)=>({key:i,enabled:lh(i,e),order:c})).toSorted((i,c)=>i.enabled!==c.enabled?i.enabled?-1:1:i.order-c.order);return r`
    <section class="grid grid-cols-2">
      ${o.map(i=>fh(i.key,e,{wework:n,weixin:s,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    ${ih(e)}

    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${l("channelsHealth")}</div>
          <div class="card-sub">${l("channelsHealthSub")}</div>
        </div>
        <div class="muted">${e.lastSuccessAt?Oe(e.lastSuccessAt):l("commonNA")}</div>
      </div>
      ${e.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:k}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):l("channelsNoSnapshot")}
      </pre>
    </section>
  `}function gh(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["wework","weixin","dingtalk","feishu","qq"]}function fh(e,t,n){const s=md(e,n.channelAccounts);switch(e){case"wework":return ph({props:t,wework:n.wework,accountCountLabel:s});case"weixin":return yp({props:t,weixin:n.weixin,accountCountLabel:s});default:return hh(e,t,n.channelAccounts??{})}}function hh(e,t,n){const s=yh(t.snapshot,e),a=t.snapshot?.channels?.[e],o=typeof a?.configured=="boolean"?a.configured:void 0,i=typeof a?.running=="boolean"?a.running:void 0,c=typeof a?.connected=="boolean"?a.connected:void 0,d=typeof a?.lastError=="string"?a.lastError:void 0,p=n[e]??[],m=md(e,n);return r`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">${l("channelGenericSub")}</div>
      ${m}

      ${p.length>0?r`
            <div class="account-card-list">
              ${p.map(g=>$h(g))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${l("channelConfigured")}</span>
                <span>${o==null?l("commonNA"):l(o?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${l("channelRunning")}</span>
                <span>${i==null?l("commonNA"):l(i?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${l("channelConnected")}</span>
                <span>${c==null?l("commonNA"):l(c?"commonYes":"commonNo")}</span>
              </div>
            </div>
          `}

      ${d?r`<div class="callout danger" style="margin-top: 12px;">
            ${d}
          </div>`:k}

      <div class="row" style="margin-top: 12px;">
        <button class="btn primary" @click=${()=>t.onChannelSelect(e)}>
          ${l("channelsConfigure")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${l("commonRefresh")}
        </button>
      </div>
    </div>
  `}function vh(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function yh(e,t){return vh(e)[t]?.label??e?.channelLabels?.[t]??t}const bh=600*1e3;function gd(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<bh:!1}function wh(e){return e.running?"commonYes":gd(e)?"channelActive":"commonNo"}function kh(e){return e.connected===!0?"commonYes":e.connected===!1?"commonNo":gd(e)?"channelActive":"commonNA"}function $h(e){const t=wh(e),n=kh(e);return r`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">${l("channelRunning")}</span>
          <span>${l(t)}</span>
        </div>
        <div>
          <span class="label">${l("channelConfigured")}</span>
          <span>${e.configured?l("commonYes"):l("commonNo")}</span>
        </div>
        <div>
          <span class="label">${l("channelConnected")}</span>
          <span>${l(n)}</span>
        </div>
        <div>
          <span class="label">${l("channelLastInbound")}</span>
          <span>${e.lastInboundAt?Oe(e.lastInboundAt):l("commonNA")}</span>
        </div>
        ${e.lastError?r`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:k}
      </div>
    </div>
  `}const{I:Sh}=Hu,hl=e=>e,xh=e=>e.strings===void 0,vl=()=>document.createComment(""),vn=(e,t,n)=>{const s=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=s.insertBefore(vl(),a),i=s.insertBefore(vl(),a);n=new Sh(o,i,e,e.options)}else{const o=n._$AB.nextSibling,i=n._$AM,c=i!==e;if(c){let d;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(d=e._$AU)!==i._$AU&&n._$AP(d)}if(o!==a||c){let d=n._$AA;for(;d!==o;){const p=hl(d).nextSibling;hl(s).insertBefore(d,a),d=p}}}return n},bt=(e,t,n=e)=>(e._$AI(t,n),e),Ch={},fd=(e,t=Ch)=>e._$AH=t,Mh=e=>e._$AH,ma=e=>{e._$AR(),e._$AA.remove()};const qo={CHILD:2},Bs=e=>(...t)=>({_$litDirective$:e,values:t});let Ws=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const _n=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),_n(s,t);return!0},$s=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},hd=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Th(t)}};function Ah(e){this._$AN!==void 0?($s(this),this._$AM=e,hd(this)):this._$AM=e}function Eh(e,t=!1,n=0){const s=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(s))for(let o=n;o<s.length;o++)_n(s[o],!1),$s(s[o]);else s!=null&&(_n(s,!1),$s(s));else _n(this,e)}const Th=e=>{e.type==qo.CHILD&&(e._$AP??=Eh,e._$AQ??=Ah)};class Lh extends Ws{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),hd(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(_n(this,t),$s(this))}setValue(t){if(xh(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const ga=new WeakMap,_h=Bs(class extends Lh{render(e){return k}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),k}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=ga.get(t);n===void 0&&(n=new WeakMap,ga.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?ga.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const yl=(e,t,n)=>{const s=new Map;for(let a=t;a<=n;a++)s.set(e[a],a);return s},Ph=Bs(class extends Ws{constructor(e){if(super(e),e.type!==qo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const a=[],o=[];let i=0;for(const c of e)a[i]=s?s(c,i):i,o[i]=n(c,i),i++;return{values:o,keys:a}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const a=Mh(e),{values:o,keys:i}=this.dt(t,n,s);if(!Array.isArray(a))return this.ut=i,o;const c=this.ut??=[],d=[];let p,m,g=0,f=a.length-1,$=0,S=o.length-1;for(;g<=f&&$<=S;)if(a[g]===null)g++;else if(a[f]===null)f--;else if(c[g]===i[$])d[$]=bt(a[g],o[$]),g++,$++;else if(c[f]===i[S])d[S]=bt(a[f],o[S]),f--,S--;else if(c[g]===i[S])d[S]=bt(a[g],o[S]),vn(e,d[S+1],a[g]),g++,S--;else if(c[f]===i[$])d[$]=bt(a[f],o[$]),vn(e,a[g],a[f]),f--,$++;else if(p===void 0&&(p=yl(i,$,S),m=yl(c,g,f)),p.has(c[g]))if(p.has(c[f])){const w=m.get(i[$]),C=w!==void 0?a[w]:null;if(C===null){const L=vn(e,a[g]);bt(L,o[$]),d[$]=L}else d[$]=bt(C,o[$]),vn(e,a[g],C),a[w]=null;$++}else ma(a[f]),f--;else ma(a[g]),g++;for(;$<=S;){const w=vn(e,d[S+1]);bt(w,o[$]),d[$++]=w}for(;g<=f;){const w=a[g++];w!==null&&ma(w)}return this.ut=i,fd(e,d),ct}});class to extends Ws{constructor(t){if(super(t),this.it=k,t.type!==qo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===k||t==null)return this._t=void 0,this.it=t;if(t===ct)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}to.directiveName="unsafeHTML",to.resultType=1;const dt=Bs(to);const{entries:vd,setPrototypeOf:bl,isFrozen:Ih,getPrototypeOf:Dh,getOwnPropertyDescriptor:Rh}=Object;let{freeze:we,seal:De,create:no}=Object,{apply:so,construct:ao}=typeof Reflect<"u"&&Reflect;we||(we=function(t){return t});De||(De=function(t){return t});so||(so=function(t,n){for(var s=arguments.length,a=new Array(s>2?s-2:0),o=2;o<s;o++)a[o-2]=arguments[o];return t.apply(n,a)});ao||(ao=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return new t(...s)});const as=ke(Array.prototype.forEach),Nh=ke(Array.prototype.lastIndexOf),wl=ke(Array.prototype.pop),yn=ke(Array.prototype.push),Uh=ke(Array.prototype.splice),ms=ke(String.prototype.toLowerCase),fa=ke(String.prototype.toString),ha=ke(String.prototype.match),bn=ke(String.prototype.replace),Oh=ke(String.prototype.indexOf),Fh=ke(String.prototype.trim),Re=ke(Object.prototype.hasOwnProperty),ye=ke(RegExp.prototype.test),wn=Bh(TypeError);function ke(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return so(e,t,s)}}function Bh(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return ao(e,n)}}function Z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ms;bl&&bl(e,null);let s=t.length;for(;s--;){let a=t[s];if(typeof a=="string"){const o=n(a);o!==a&&(Ih(t)||(t[s]=o),a=o)}e[a]=!0}return e}function Wh(e){for(let t=0;t<e.length;t++)Re(e,t)||(e[t]=null);return e}function He(e){const t=no(null);for(const[n,s]of vd(e))Re(e,n)&&(Array.isArray(s)?t[n]=Wh(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=He(s):t[n]=s);return t}function kn(e,t){for(;e!==null;){const s=Rh(e,t);if(s){if(s.get)return ke(s.get);if(typeof s.value=="function")return ke(s.value)}e=Dh(e)}function n(){return null}return n}const kl=we(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),va=we(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ya=we(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Hh=we(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ba=we(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),zh=we(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),$l=we(["#text"]),Sl=we(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),wa=we(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),xl=we(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),os=we(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Qh=De(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Kh=De(/<%[\w\W]*|[\w\W]*%>/gm),qh=De(/\$\{[\w\W]*/gm),Vh=De(/^data-[\-\w.\u00B7-\uFFFF]+$/),jh=De(/^aria-[\-\w]+$/),yd=De(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Gh=De(/^(?:\w+script|data):/i),Jh=De(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),bd=De(/^html$/i),Yh=De(/^[a-z][.\w]*(-[.\w]+)+$/i);var Cl=Object.freeze({__proto__:null,ARIA_ATTR:jh,ATTR_WHITESPACE:Jh,CUSTOM_ELEMENT:Yh,DATA_ATTR:Vh,DOCTYPE_NAME:bd,ERB_EXPR:Kh,IS_ALLOWED_URI:yd,IS_SCRIPT_OR_DATA:Gh,MUSTACHE_EXPR:Qh,TMPLIT_EXPR:qh});const $n={element:1,text:3,progressingInstruction:7,comment:8,document:9},Zh=function(){return typeof window>"u"?null:window},Xh=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(s=n.getAttribute(a));const o="dompurify"+(s?"#"+s:"");try{return t.createPolicy(o,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Ml=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function wd(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Zh();const t=G=>wd(G);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==$n.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,a=s.currentScript,{DocumentFragment:o,HTMLTemplateElement:i,Node:c,Element:d,NodeFilter:p,NamedNodeMap:m=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:g,DOMParser:f,trustedTypes:$}=e,S=d.prototype,w=kn(S,"cloneNode"),C=kn(S,"remove"),L=kn(S,"nextSibling"),P=kn(S,"childNodes"),U=kn(S,"parentNode");if(typeof i=="function"){const G=n.createElement("template");G.content&&G.content.ownerDocument&&(n=G.content.ownerDocument)}let R,O="";const{implementation:D,createNodeIterator:u,createDocumentFragment:b,getElementsByTagName:x}=n,{importNode:M}=s;let E=Ml();t.isSupported=typeof vd=="function"&&typeof U=="function"&&D&&D.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:T,ERB_EXPR:N,TMPLIT_EXPR:_,DATA_ATTR:I,ARIA_ATTR:H,IS_SCRIPT_OR_DATA:q,ATTR_WHITESPACE:Y,CUSTOM_ELEMENT:X}=Cl;let{IS_ALLOWED_URI:B}=Cl,Q=null;const W=Z({},[...kl,...va,...ya,...ba,...$l]);let J=null;const he=Z({},[...Sl,...wa,...xl,...os]);let oe=Object.seal(no(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Le=null,re=null;const ve=Object.seal(no(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Qe=!0,Ke=!0,ft=!1,di=!0,Ht=!1,Kn=!0,ht=!1,Ks=!1,qs=!1,zt=!1,qn=!1,Vn=!1,ui=!0,pi=!1;const fu="user-content-";let Vs=!0,gn=!1,Qt={},Fe=null;const js=Z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let mi=null;const gi=Z({},["audio","video","img","source","image","track"]);let Gs=null;const fi=Z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),jn="http://www.w3.org/1998/Math/MathML",Gn="http://www.w3.org/2000/svg",qe="http://www.w3.org/1999/xhtml";let Kt=qe,Js=!1,Ys=null;const hu=Z({},[jn,Gn,qe],fa);let Jn=Z({},["mi","mo","mn","ms","mtext"]),Yn=Z({},["annotation-xml"]);const vu=Z({},["title","style","font","a","script"]);let fn=null;const yu=["application/xhtml+xml","text/html"],bu="text/html";let de=null,qt=null;const wu=n.createElement("form"),hi=function(A){return A instanceof RegExp||A instanceof Function},Zs=function(){let A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(qt&&qt===A)){if((!A||typeof A!="object")&&(A={}),A=He(A),fn=yu.indexOf(A.PARSER_MEDIA_TYPE)===-1?bu:A.PARSER_MEDIA_TYPE,de=fn==="application/xhtml+xml"?fa:ms,Q=Re(A,"ALLOWED_TAGS")?Z({},A.ALLOWED_TAGS,de):W,J=Re(A,"ALLOWED_ATTR")?Z({},A.ALLOWED_ATTR,de):he,Ys=Re(A,"ALLOWED_NAMESPACES")?Z({},A.ALLOWED_NAMESPACES,fa):hu,Gs=Re(A,"ADD_URI_SAFE_ATTR")?Z(He(fi),A.ADD_URI_SAFE_ATTR,de):fi,mi=Re(A,"ADD_DATA_URI_TAGS")?Z(He(gi),A.ADD_DATA_URI_TAGS,de):gi,Fe=Re(A,"FORBID_CONTENTS")?Z({},A.FORBID_CONTENTS,de):js,Le=Re(A,"FORBID_TAGS")?Z({},A.FORBID_TAGS,de):He({}),re=Re(A,"FORBID_ATTR")?Z({},A.FORBID_ATTR,de):He({}),Qt=Re(A,"USE_PROFILES")?A.USE_PROFILES:!1,Qe=A.ALLOW_ARIA_ATTR!==!1,Ke=A.ALLOW_DATA_ATTR!==!1,ft=A.ALLOW_UNKNOWN_PROTOCOLS||!1,di=A.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ht=A.SAFE_FOR_TEMPLATES||!1,Kn=A.SAFE_FOR_XML!==!1,ht=A.WHOLE_DOCUMENT||!1,zt=A.RETURN_DOM||!1,qn=A.RETURN_DOM_FRAGMENT||!1,Vn=A.RETURN_TRUSTED_TYPE||!1,qs=A.FORCE_BODY||!1,ui=A.SANITIZE_DOM!==!1,pi=A.SANITIZE_NAMED_PROPS||!1,Vs=A.KEEP_CONTENT!==!1,gn=A.IN_PLACE||!1,B=A.ALLOWED_URI_REGEXP||yd,Kt=A.NAMESPACE||qe,Jn=A.MATHML_TEXT_INTEGRATION_POINTS||Jn,Yn=A.HTML_INTEGRATION_POINTS||Yn,oe=A.CUSTOM_ELEMENT_HANDLING||{},A.CUSTOM_ELEMENT_HANDLING&&hi(A.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(oe.tagNameCheck=A.CUSTOM_ELEMENT_HANDLING.tagNameCheck),A.CUSTOM_ELEMENT_HANDLING&&hi(A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(oe.attributeNameCheck=A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),A.CUSTOM_ELEMENT_HANDLING&&typeof A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(oe.allowCustomizedBuiltInElements=A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ht&&(Ke=!1),qn&&(zt=!0),Qt&&(Q=Z({},$l),J=[],Qt.html===!0&&(Z(Q,kl),Z(J,Sl)),Qt.svg===!0&&(Z(Q,va),Z(J,wa),Z(J,os)),Qt.svgFilters===!0&&(Z(Q,ya),Z(J,wa),Z(J,os)),Qt.mathMl===!0&&(Z(Q,ba),Z(J,xl),Z(J,os))),A.ADD_TAGS&&(typeof A.ADD_TAGS=="function"?ve.tagCheck=A.ADD_TAGS:(Q===W&&(Q=He(Q)),Z(Q,A.ADD_TAGS,de))),A.ADD_ATTR&&(typeof A.ADD_ATTR=="function"?ve.attributeCheck=A.ADD_ATTR:(J===he&&(J=He(J)),Z(J,A.ADD_ATTR,de))),A.ADD_URI_SAFE_ATTR&&Z(Gs,A.ADD_URI_SAFE_ATTR,de),A.FORBID_CONTENTS&&(Fe===js&&(Fe=He(Fe)),Z(Fe,A.FORBID_CONTENTS,de)),A.ADD_FORBID_CONTENTS&&(Fe===js&&(Fe=He(Fe)),Z(Fe,A.ADD_FORBID_CONTENTS,de)),Vs&&(Q["#text"]=!0),ht&&Z(Q,["html","head","body"]),Q.table&&(Z(Q,["tbody"]),delete Le.tbody),A.TRUSTED_TYPES_POLICY){if(typeof A.TRUSTED_TYPES_POLICY.createHTML!="function")throw wn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof A.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw wn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');R=A.TRUSTED_TYPES_POLICY,O=R.createHTML("")}else R===void 0&&(R=Xh($,a)),R!==null&&typeof O=="string"&&(O=R.createHTML(""));we&&we(A),qt=A}},vi=Z({},[...va,...ya,...Hh]),yi=Z({},[...ba,...zh]),ku=function(A){let F=U(A);(!F||!F.tagName)&&(F={namespaceURI:Kt,tagName:"template"});const V=ms(A.tagName),ie=ms(F.tagName);return Ys[A.namespaceURI]?A.namespaceURI===Gn?F.namespaceURI===qe?V==="svg":F.namespaceURI===jn?V==="svg"&&(ie==="annotation-xml"||Jn[ie]):!!vi[V]:A.namespaceURI===jn?F.namespaceURI===qe?V==="math":F.namespaceURI===Gn?V==="math"&&Yn[ie]:!!yi[V]:A.namespaceURI===qe?F.namespaceURI===Gn&&!Yn[ie]||F.namespaceURI===jn&&!Jn[ie]?!1:!yi[V]&&(vu[V]||!vi[V]):!!(fn==="application/xhtml+xml"&&Ys[A.namespaceURI]):!1},Be=function(A){yn(t.removed,{element:A});try{U(A).removeChild(A)}catch{C(A)}},vt=function(A,F){try{yn(t.removed,{attribute:F.getAttributeNode(A),from:F})}catch{yn(t.removed,{attribute:null,from:F})}if(F.removeAttribute(A),A==="is")if(zt||qn)try{Be(F)}catch{}else try{F.setAttribute(A,"")}catch{}},bi=function(A){let F=null,V=null;if(qs)A="<remove></remove>"+A;else{const ce=ha(A,/^[\r\n\t ]+/);V=ce&&ce[0]}fn==="application/xhtml+xml"&&Kt===qe&&(A='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+A+"</body></html>");const ie=R?R.createHTML(A):A;if(Kt===qe)try{F=new f().parseFromString(ie,fn)}catch{}if(!F||!F.documentElement){F=D.createDocument(Kt,"template",null);try{F.documentElement.innerHTML=Js?O:ie}catch{}}const me=F.body||F.documentElement;return A&&V&&me.insertBefore(n.createTextNode(V),me.childNodes[0]||null),Kt===qe?x.call(F,ht?"html":"body")[0]:ht?F.documentElement:me},wi=function(A){return u.call(A.ownerDocument||A,A,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null)},Xs=function(A){return A instanceof g&&(typeof A.nodeName!="string"||typeof A.textContent!="string"||typeof A.removeChild!="function"||!(A.attributes instanceof m)||typeof A.removeAttribute!="function"||typeof A.setAttribute!="function"||typeof A.namespaceURI!="string"||typeof A.insertBefore!="function"||typeof A.hasChildNodes!="function")},ki=function(A){return typeof c=="function"&&A instanceof c};function Ve(G,A,F){as(G,V=>{V.call(t,A,F,qt)})}const $i=function(A){let F=null;if(Ve(E.beforeSanitizeElements,A,null),Xs(A))return Be(A),!0;const V=de(A.nodeName);if(Ve(E.uponSanitizeElement,A,{tagName:V,allowedTags:Q}),Kn&&A.hasChildNodes()&&!ki(A.firstElementChild)&&ye(/<[/\w!]/g,A.innerHTML)&&ye(/<[/\w!]/g,A.textContent)||A.nodeType===$n.progressingInstruction||Kn&&A.nodeType===$n.comment&&ye(/<[/\w]/g,A.data))return Be(A),!0;if(!(ve.tagCheck instanceof Function&&ve.tagCheck(V))&&(!Q[V]||Le[V])){if(!Le[V]&&xi(V)&&(oe.tagNameCheck instanceof RegExp&&ye(oe.tagNameCheck,V)||oe.tagNameCheck instanceof Function&&oe.tagNameCheck(V)))return!1;if(Vs&&!Fe[V]){const ie=U(A)||A.parentNode,me=P(A)||A.childNodes;if(me&&ie){const ce=me.length;for(let xe=ce-1;xe>=0;--xe){const je=w(me[xe],!0);je.__removalCount=(A.__removalCount||0)+1,ie.insertBefore(je,L(A))}}}return Be(A),!0}return A instanceof d&&!ku(A)||(V==="noscript"||V==="noembed"||V==="noframes")&&ye(/<\/no(script|embed|frames)/i,A.innerHTML)?(Be(A),!0):(Ht&&A.nodeType===$n.text&&(F=A.textContent,as([T,N,_],ie=>{F=bn(F,ie," ")}),A.textContent!==F&&(yn(t.removed,{element:A.cloneNode()}),A.textContent=F)),Ve(E.afterSanitizeElements,A,null),!1)},Si=function(A,F,V){if(ui&&(F==="id"||F==="name")&&(V in n||V in wu))return!1;if(!(Ke&&!re[F]&&ye(I,F))){if(!(Qe&&ye(H,F))){if(!(ve.attributeCheck instanceof Function&&ve.attributeCheck(F,A))){if(!J[F]||re[F]){if(!(xi(A)&&(oe.tagNameCheck instanceof RegExp&&ye(oe.tagNameCheck,A)||oe.tagNameCheck instanceof Function&&oe.tagNameCheck(A))&&(oe.attributeNameCheck instanceof RegExp&&ye(oe.attributeNameCheck,F)||oe.attributeNameCheck instanceof Function&&oe.attributeNameCheck(F,A))||F==="is"&&oe.allowCustomizedBuiltInElements&&(oe.tagNameCheck instanceof RegExp&&ye(oe.tagNameCheck,V)||oe.tagNameCheck instanceof Function&&oe.tagNameCheck(V))))return!1}else if(!Gs[F]){if(!ye(B,bn(V,Y,""))){if(!((F==="src"||F==="xlink:href"||F==="href")&&A!=="script"&&Oh(V,"data:")===0&&mi[A])){if(!(ft&&!ye(q,bn(V,Y,"")))){if(V)return!1}}}}}}}return!0},xi=function(A){return A!=="annotation-xml"&&ha(A,X)},Ci=function(A){Ve(E.beforeSanitizeAttributes,A,null);const{attributes:F}=A;if(!F||Xs(A))return;const V={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:J,forceKeepAttr:void 0};let ie=F.length;for(;ie--;){const me=F[ie],{name:ce,namespaceURI:xe,value:je}=me,Vt=de(ce),ea=je;let pe=ce==="value"?ea:Fh(ea);if(V.attrName=Vt,V.attrValue=pe,V.keepAttr=!0,V.forceKeepAttr=void 0,Ve(E.uponSanitizeAttribute,A,V),pe=V.attrValue,pi&&(Vt==="id"||Vt==="name")&&(vt(ce,A),pe=fu+pe),Kn&&ye(/((--!?|])>)|<\/(style|title|textarea)/i,pe)){vt(ce,A);continue}if(Vt==="attributename"&&ha(pe,"href")){vt(ce,A);continue}if(V.forceKeepAttr)continue;if(!V.keepAttr){vt(ce,A);continue}if(!di&&ye(/\/>/i,pe)){vt(ce,A);continue}Ht&&as([T,N,_],Ai=>{pe=bn(pe,Ai," ")});const Mi=de(A.nodeName);if(!Si(Mi,Vt,pe)){vt(ce,A);continue}if(R&&typeof $=="object"&&typeof $.getAttributeType=="function"&&!xe)switch($.getAttributeType(Mi,Vt)){case"TrustedHTML":{pe=R.createHTML(pe);break}case"TrustedScriptURL":{pe=R.createScriptURL(pe);break}}if(pe!==ea)try{xe?A.setAttributeNS(xe,ce,pe):A.setAttribute(ce,pe),Xs(A)?Be(A):wl(t.removed)}catch{vt(ce,A)}}Ve(E.afterSanitizeAttributes,A,null)},$u=function G(A){let F=null;const V=wi(A);for(Ve(E.beforeSanitizeShadowDOM,A,null);F=V.nextNode();)Ve(E.uponSanitizeShadowNode,F,null),$i(F),Ci(F),F.content instanceof o&&G(F.content);Ve(E.afterSanitizeShadowDOM,A,null)};return t.sanitize=function(G){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},F=null,V=null,ie=null,me=null;if(Js=!G,Js&&(G="<!-->"),typeof G!="string"&&!ki(G))if(typeof G.toString=="function"){if(G=G.toString(),typeof G!="string")throw wn("dirty is not a string, aborting")}else throw wn("toString is not a function");if(!t.isSupported)return G;if(Ks||Zs(A),t.removed=[],typeof G=="string"&&(gn=!1),gn){if(G.nodeName){const je=de(G.nodeName);if(!Q[je]||Le[je])throw wn("root node is forbidden and cannot be sanitized in-place")}}else if(G instanceof c)F=bi("<!---->"),V=F.ownerDocument.importNode(G,!0),V.nodeType===$n.element&&V.nodeName==="BODY"||V.nodeName==="HTML"?F=V:F.appendChild(V);else{if(!zt&&!Ht&&!ht&&G.indexOf("<")===-1)return R&&Vn?R.createHTML(G):G;if(F=bi(G),!F)return zt?null:Vn?O:""}F&&qs&&Be(F.firstChild);const ce=wi(gn?G:F);for(;ie=ce.nextNode();)$i(ie),Ci(ie),ie.content instanceof o&&$u(ie.content);if(gn)return G;if(zt){if(qn)for(me=b.call(F.ownerDocument);F.firstChild;)me.appendChild(F.firstChild);else me=F;return(J.shadowroot||J.shadowrootmode)&&(me=M.call(s,me,!0)),me}let xe=ht?F.outerHTML:F.innerHTML;return ht&&Q["!doctype"]&&F.ownerDocument&&F.ownerDocument.doctype&&F.ownerDocument.doctype.name&&ye(bd,F.ownerDocument.doctype.name)&&(xe="<!DOCTYPE "+F.ownerDocument.doctype.name+`>
`+xe),Ht&&as([T,N,_],je=>{xe=bn(xe,je," ")}),R&&Vn?R.createHTML(xe):xe},t.setConfig=function(){let G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Zs(G),Ks=!0},t.clearConfig=function(){qt=null,Ks=!1},t.isValidAttribute=function(G,A,F){qt||Zs({});const V=de(G),ie=de(A);return Si(V,ie,F)},t.addHook=function(G,A){typeof A=="function"&&yn(E[G],A)},t.removeHook=function(G,A){if(A!==void 0){const F=Nh(E[G],A);return F===-1?void 0:Uh(E[G],F,1)[0]}return wl(E[G])},t.removeHooks=function(G){E[G]=[]},t.removeAllHooks=function(){E=Ml()},t}var oo=wd();function Vo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Bt=Vo();function kd(e){Bt=e}var Pn={exec:()=>null};function te(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(a,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(be.caret,"$1"),n=n.replace(a,i),s},getRegex:()=>new RegExp(n,t)};return s}var ev=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),be={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},tv=/^(?:[ \t]*(?:\n|$))+/,nv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,sv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Qn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,av=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,jo=/(?:[*+-]|\d{1,9}[.)])/,$d=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Sd=te($d).replace(/bull/g,jo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ov=te($d).replace(/bull/g,jo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Go=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,iv=/^[^\n]+/,Jo=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,lv=te(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Jo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),rv=te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,jo).getRegex(),Hs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Yo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,cv=te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Yo).replace("tag",Hs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),xd=te(Go).replace("hr",Qn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hs).getRegex(),dv=te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",xd).getRegex(),Zo={blockquote:dv,code:nv,def:lv,fences:sv,heading:av,hr:Qn,html:cv,lheading:Sd,list:rv,newline:tv,paragraph:xd,table:Pn,text:iv},Al=te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Qn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hs).getRegex(),uv={...Zo,lheading:ov,table:Al,paragraph:te(Go).replace("hr",Qn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Al).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hs).getRegex()},pv={...Zo,html:te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Yo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Pn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:te(Go).replace("hr",Qn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Sd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},mv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,gv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Cd=/^( {2,}|\\)\n(?!\s*$)/,fv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,zs=/[\p{P}\p{S}]/u,Xo=/[\s\p{P}\p{S}]/u,Md=/[^\s\p{P}\p{S}]/u,hv=te(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Xo).getRegex(),Ad=/(?!~)[\p{P}\p{S}]/u,vv=/(?!~)[\s\p{P}\p{S}]/u,yv=/(?:[^\s\p{P}\p{S}]|~)/u,bv=te(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ev?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Ed=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,wv=te(Ed,"u").replace(/punct/g,zs).getRegex(),kv=te(Ed,"u").replace(/punct/g,Ad).getRegex(),Td="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",$v=te(Td,"gu").replace(/notPunctSpace/g,Md).replace(/punctSpace/g,Xo).replace(/punct/g,zs).getRegex(),Sv=te(Td,"gu").replace(/notPunctSpace/g,yv).replace(/punctSpace/g,vv).replace(/punct/g,Ad).getRegex(),xv=te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Md).replace(/punctSpace/g,Xo).replace(/punct/g,zs).getRegex(),Cv=te(/\\(punct)/,"gu").replace(/punct/g,zs).getRegex(),Mv=te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Av=te(Yo).replace("(?:-->|$)","-->").getRegex(),Ev=te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Av).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ss=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Tv=te(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ss).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ld=te(/^!?\[(label)\]\[(ref)\]/).replace("label",Ss).replace("ref",Jo).getRegex(),_d=te(/^!?\[(ref)\](?:\[\])?/).replace("ref",Jo).getRegex(),Lv=te("reflink|nolink(?!\\()","g").replace("reflink",Ld).replace("nolink",_d).getRegex(),El=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ei={_backpedal:Pn,anyPunctuation:Cv,autolink:Mv,blockSkip:bv,br:Cd,code:gv,del:Pn,emStrongLDelim:wv,emStrongRDelimAst:$v,emStrongRDelimUnd:xv,escape:mv,link:Tv,nolink:_d,punctuation:hv,reflink:Ld,reflinkSearch:Lv,tag:Ev,text:fv,url:Pn},_v={...ei,link:te(/^!?\[(label)\]\((.*?)\)/).replace("label",Ss).getRegex(),reflink:te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ss).getRegex()},io={...ei,emStrongRDelimAst:Sv,emStrongLDelim:kv,url:te(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",El).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:te(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",El).getRegex()},Pv={...io,br:te(Cd).replace("{2,}","*").getRegex(),text:te(io.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},is={normal:Zo,gfm:uv,pedantic:pv},Sn={normal:ei,gfm:io,breaks:Pv,pedantic:_v},Iv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Tl=e=>Iv[e];function Je(e,t){if(t){if(be.escapeTest.test(e))return e.replace(be.escapeReplace,Tl)}else if(be.escapeTestNoEncode.test(e))return e.replace(be.escapeReplaceNoEncode,Tl);return e}function Ll(e){try{e=encodeURI(e).replace(be.percentDecode,"%")}catch{return null}return e}function _l(e,t){let n=e.replace(be.findPipe,(o,i,c)=>{let d=!1,p=i;for(;--p>=0&&c[p]==="\\";)d=!d;return d?"|":" |"}),s=n.split(be.splitPipe),a=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(be.slashPipe,"|");return s}function xn(e,t,n){let s=e.length;if(s===0)return"";let a=0;for(;a<s&&e.charAt(s-a-1)===t;)a++;return e.slice(0,s-a)}function Dv(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Pl(e,t,n,s,a){let o=t.href,i=t.title||null,c=e[1].replace(a.other.outputLinkReplace,"$1");s.state.inLink=!0;let d={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:i,text:c,tokens:s.inlineTokens(c)};return s.state.inLink=!1,d}function Rv(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let a=s[1];return t.split(`
`).map(o=>{let i=o.match(n.other.beginningSpace);if(i===null)return o;let[c]=i;return c.length>=a.length?o.slice(a.length):o}).join(`
`)}var xs=class{options;rules;lexer;constructor(e){this.options=e||Bt}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:xn(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Rv(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=xn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:xn(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=xn(t[0],`
`).split(`
`),s="",a="",o=[];for(;n.length>0;){let i=!1,c=[],d;for(d=0;d<n.length;d++)if(this.rules.other.blockquoteStart.test(n[d]))c.push(n[d]),i=!0;else if(!i)c.push(n[d]);else break;n=n.slice(d);let p=c.join(`
`),m=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${p}`:p,a=a?`${a}
${m}`:m;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(m,o,!0),this.lexer.state.top=g,n.length===0)break;let f=o.at(-1);if(f?.type==="code")break;if(f?.type==="blockquote"){let $=f,S=$.raw+`
`+n.join(`
`),w=this.blockquote(S);o[o.length-1]=w,s=s.substring(0,s.length-$.raw.length)+w.raw,a=a.substring(0,a.length-$.text.length)+w.text;break}else if(f?.type==="list"){let $=f,S=$.raw+`
`+n.join(`
`),w=this.list(S);o[o.length-1]=w,s=s.substring(0,s.length-f.raw.length)+w.raw,a=a.substring(0,a.length-$.raw.length)+w.raw,n=S.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:a}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,a={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let o=this.rules.other.listItemRegex(n),i=!1;for(;e;){let d=!1,p="",m="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;p=t[0],e=e.substring(p.length);let g=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,w=>" ".repeat(3*w.length)),f=e.split(`
`,1)[0],$=!g.trim(),S=0;if(this.options.pedantic?(S=2,m=g.trimStart()):$?S=t[1].length+1:(S=t[2].search(this.rules.other.nonSpaceChar),S=S>4?1:S,m=g.slice(S),S+=t[1].length),$&&this.rules.other.blankLine.test(f)&&(p+=f+`
`,e=e.substring(f.length+1),d=!0),!d){let w=this.rules.other.nextBulletRegex(S),C=this.rules.other.hrRegex(S),L=this.rules.other.fencesBeginRegex(S),P=this.rules.other.headingBeginRegex(S),U=this.rules.other.htmlBeginRegex(S);for(;e;){let R=e.split(`
`,1)[0],O;if(f=R,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),O=f):O=f.replace(this.rules.other.tabCharGlobal,"    "),L.test(f)||P.test(f)||U.test(f)||w.test(f)||C.test(f))break;if(O.search(this.rules.other.nonSpaceChar)>=S||!f.trim())m+=`
`+O.slice(S);else{if($||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(g)||P.test(g)||C.test(g))break;m+=`
`+f}!$&&!f.trim()&&($=!0),p+=R+`
`,e=e.substring(R.length+1),g=O.slice(S)}}a.loose||(i?a.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(i=!0)),a.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(m),loose:!1,text:m,tokens:[]}),a.raw+=p}let c=a.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let d of a.items){if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),d.task){if(d.text=d.text.replace(this.rules.other.listReplaceTask,""),d.tokens[0]?.type==="text"||d.tokens[0]?.type==="paragraph"){d.tokens[0].raw=d.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),d.tokens[0].text=d.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}}let p=this.rules.other.listTaskCheckbox.exec(d.raw);if(p){let m={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};d.checked=m.checked,a.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=m.raw+d.tokens[0].raw,d.tokens[0].text=m.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(m)):d.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):d.tokens.unshift(m)}}if(!a.loose){let p=d.tokens.filter(g=>g.type==="space"),m=p.length>0&&p.some(g=>this.rules.other.anyLine.test(g.raw));a.loose=m}}if(a.loose)for(let d of a.items){d.loose=!0;for(let p of d.tokens)p.type==="text"&&(p.type="paragraph")}return a}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:a}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=_l(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let i of s)this.rules.other.tableAlignRight.test(i)?o.align.push("right"):this.rules.other.tableAlignCenter.test(i)?o.align.push("center"):this.rules.other.tableAlignLeft.test(i)?o.align.push("left"):o.align.push(null);for(let i=0;i<n.length;i++)o.header.push({text:n[i],tokens:this.lexer.inline(n[i]),header:!0,align:o.align[i]});for(let i of a)o.rows.push(_l(i,o.header.length).map((c,d)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[d]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=xn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Dv(t[2],"()");if(o===-2)return;if(o>-1){let i=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],a=o[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),Pl(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[s.toLowerCase()];if(!a){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Pl(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let a=[...s[0]].length-1,o,i,c=a,d=0,p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+a);(s=p.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(i=[...o].length,s[3]||s[4]){c+=i;continue}else if((s[5]||s[6])&&a%3&&!((a+i)%3)){d+=i;continue}if(c-=i,c>0)continue;i=Math.min(i,i+c+d);let m=[...s[0]][0].length,g=e.slice(0,a+s.index+m+i);if(Math.min(a,i)%2){let $=g.slice(1,-1);return{type:"em",raw:g,text:$,tokens:this.lexer.inlineTokens($)}}let f=g.slice(2,-2);return{type:"strong",raw:g,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),a=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&a&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let a;do a=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(a!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Ne=class lo{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Bt,this.options.tokenizer=this.options.tokenizer||new xs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:be,block:is.normal,inline:Sn.normal};this.options.pedantic?(n.block=is.pedantic,n.inline=Sn.pedantic):this.options.gfm&&(n.block=is.gfm,this.options.breaks?n.inline=Sn.breaks:n.inline=Sn.gfm),this.tokenizer.rules=n}static get rules(){return{block:is,inline:Sn}}static lex(t,n){return new lo(n).lex(t)}static lexInline(t,n){return new lo(n).inlineTokens(t)}lex(t){t=t.replace(be.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(be.tabCharGlobal,"    ").replace(be.spaceLine,""));t;){let a;if(this.options.extensions?.block?.some(i=>(a=i.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let i=n.at(-1);a.raw.length===1&&i!==void 0?i.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+a.raw,i.text+=`
`+a.text,this.inlineQueue.at(-1).src=i.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let i=n.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+a.raw,i.text+=`
`+a.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},n.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let o=t;if(this.options.extensions?.startBlock){let i=1/0,c=t.slice(1),d;this.options.extensions.startBlock.forEach(p=>{d=p.call({lexer:this},c),typeof d=="number"&&d>=0&&(i=Math.min(i,d))}),i<1/0&&i>=0&&(o=t.substring(0,i+1))}if(this.state.top&&(a=this.tokenizer.paragraph(o))){let i=n.at(-1);s&&i?.type==="paragraph"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+a.raw,i.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(a),s=o.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let i=n.at(-1);i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+a.raw,i.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):n.push(a);continue}if(t){let i="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,a=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)o=a[2]?a[2].length:0,s=s.slice(0,a.index+o)+"["+"a".repeat(a[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let i=!1,c="";for(;t;){i||(c=""),i=!1;let d;if(this.options.extensions?.inline?.some(m=>(d=m.call({lexer:this},t,n))?(t=t.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);let m=n.at(-1);d.type==="text"&&m?.type==="text"?(m.raw+=d.raw,m.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(t,s,c)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),n.push(d);continue}let p=t;if(this.options.extensions?.startInline){let m=1/0,g=t.slice(1),f;this.options.extensions.startInline.forEach($=>{f=$.call({lexer:this},g),typeof f=="number"&&f>=0&&(m=Math.min(m,f))}),m<1/0&&m>=0&&(p=t.substring(0,m+1))}if(d=this.tokenizer.inlineText(p)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(c=d.raw.slice(-1)),i=!0;let m=n.at(-1);m?.type==="text"?(m.raw+=d.raw,m.text+=d.text):n.push(d);continue}if(t){let m="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return n}},Cs=class{options;parser;constructor(e){this.options=e||Bt}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(be.notSpaceStart)?.[0],a=e.replace(be.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Je(s)+'">'+(n?a:Je(a,!0))+`</code></pre>
`:"<pre><code>"+(n?a:Je(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let i=0;i<e.items.length;i++){let c=e.items[i];s+=this.listitem(c)}let a=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+a+o+`>
`+s+"</"+a+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let a=0;a<e.header.length;a++)n+=this.tablecell(e.header[a]);t+=this.tablerow({text:n});let s="";for(let a=0;a<e.rows.length;a++){let o=e.rows[a];n="";for(let i=0;i<o.length;i++)n+=this.tablecell(o[i]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Je(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),a=Ll(e);if(a===null)return s;e=a;let o='<a href="'+e+'"';return t&&(o+=' title="'+Je(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let a=Ll(e);if(a===null)return Je(n);e=a;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${Je(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Je(e.text)}},ti=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Ue=class ro{options;renderer;textRenderer;constructor(t){this.options=t||Bt,this.options.renderer=this.options.renderer||new Cs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ti}static parse(t,n){return new ro(n).parse(t)}static parseInline(t,n){return new ro(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let a=t[s];if(this.options.extensions?.renderers?.[a.type]){let i=a,c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(i.type)){n+=c||"";continue}}let o=a;switch(o.type){case"space":{n+=this.renderer.space(o);break}case"hr":{n+=this.renderer.hr(o);break}case"heading":{n+=this.renderer.heading(o);break}case"code":{n+=this.renderer.code(o);break}case"table":{n+=this.renderer.table(o);break}case"blockquote":{n+=this.renderer.blockquote(o);break}case"list":{n+=this.renderer.list(o);break}case"checkbox":{n+=this.renderer.checkbox(o);break}case"html":{n+=this.renderer.html(o);break}case"def":{n+=this.renderer.def(o);break}case"paragraph":{n+=this.renderer.paragraph(o);break}case"text":{n+=this.renderer.text(o);break}default:{let i='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return n}parseInline(t,n=this.renderer){let s="";for(let a=0;a<t.length;a++){let o=t[a];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=c||"";continue}}let i=o;switch(i.type){case"escape":{s+=n.text(i);break}case"html":{s+=n.html(i);break}case"link":{s+=n.link(i);break}case"image":{s+=n.image(i);break}case"checkbox":{s+=n.checkbox(i);break}case"strong":{s+=n.strong(i);break}case"em":{s+=n.em(i);break}case"codespan":{s+=n.codespan(i);break}case"br":{s+=n.br(i);break}case"del":{s+=n.del(i);break}case"text":{s+=n.text(i);break}default:{let c='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return s}},An=class{options;block;constructor(e){this.options=e||Bt}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Ne.lex:Ne.lexInline}provideParser(){return this.block?Ue.parse:Ue.parseInline}},Nv=class{defaults=Vo();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ue;Renderer=Cs;TextRenderer=ti;Lexer=Ne;Tokenizer=xs;Hooks=An;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let a=s;for(let o of a.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of a.rows)for(let i of o)n=n.concat(this.walkTokens(i.tokens,t));break}case"list":{let a=s;n=n.concat(this.walkTokens(a.items,t));break}default:{let a=s;this.defaults.extensions?.childTokens?.[a.type]?this.defaults.extensions.childTokens[a.type].forEach(o=>{let i=a[o].flat(1/0);n=n.concat(this.walkTokens(i,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let o=t.renderers[a.name];o?t.renderers[a.name]=function(...i){let c=a.renderer.apply(this,i);return c===!1&&(c=o.apply(this,i)),c}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[a.level];o?o.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),n.renderer){let a=this.defaults.renderer||new Cs(this.defaults);for(let o in n.renderer){if(!(o in a))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let i=o,c=n.renderer[i],d=a[i];a[i]=(...p)=>{let m=c.apply(a,p);return m===!1&&(m=d.apply(a,p)),m||""}}s.renderer=a}if(n.tokenizer){let a=this.defaults.tokenizer||new xs(this.defaults);for(let o in n.tokenizer){if(!(o in a))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let i=o,c=n.tokenizer[i],d=a[i];a[i]=(...p)=>{let m=c.apply(a,p);return m===!1&&(m=d.apply(a,p)),m}}s.tokenizer=a}if(n.hooks){let a=this.defaults.hooks||new An;for(let o in n.hooks){if(!(o in a))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let i=o,c=n.hooks[i],d=a[i];An.passThroughHooks.has(o)?a[i]=p=>{if(this.defaults.async&&An.passThroughHooksRespectAsync.has(o))return(async()=>{let g=await c.call(a,p);return d.call(a,g)})();let m=c.call(a,p);return d.call(a,m)}:a[i]=(...p)=>{if(this.defaults.async)return(async()=>{let g=await c.apply(a,p);return g===!1&&(g=await d.apply(a,p)),g})();let m=c.apply(a,p);return m===!1&&(m=d.apply(a,p)),m}}s.hooks=a}if(n.walkTokens){let a=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(i){let c=[];return c.push(o.call(this,i)),a&&(c=c.concat(a.call(this,i))),c}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ne.lex(e,t??this.defaults)}parser(e,t){return Ue.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},a={...this.defaults,...s},o=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=e),a.async)return(async()=>{let i=a.hooks?await a.hooks.preprocess(t):t,c=await(a.hooks?await a.hooks.provideLexer():e?Ne.lex:Ne.lexInline)(i,a),d=a.hooks?await a.hooks.processAllTokens(c):c;a.walkTokens&&await Promise.all(this.walkTokens(d,a.walkTokens));let p=await(a.hooks?await a.hooks.provideParser():e?Ue.parse:Ue.parseInline)(d,a);return a.hooks?await a.hooks.postprocess(p):p})().catch(o);try{a.hooks&&(t=a.hooks.preprocess(t));let i=(a.hooks?a.hooks.provideLexer():e?Ne.lex:Ne.lexInline)(t,a);a.hooks&&(i=a.hooks.processAllTokens(i)),a.walkTokens&&this.walkTokens(i,a.walkTokens);let c=(a.hooks?a.hooks.provideParser():e?Ue.parse:Ue.parseInline)(i,a);return a.hooks&&(c=a.hooks.postprocess(c)),c}catch(i){return o(i)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Je(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Ut=new Nv;function ae(e,t){return Ut.parse(e,t)}ae.options=ae.setOptions=function(e){return Ut.setOptions(e),ae.defaults=Ut.defaults,kd(ae.defaults),ae};ae.getDefaults=Vo;ae.defaults=Bt;ae.use=function(...e){return Ut.use(...e),ae.defaults=Ut.defaults,kd(ae.defaults),ae};ae.walkTokens=function(e,t){return Ut.walkTokens(e,t)};ae.parseInline=Ut.parseInline;ae.Parser=Ue;ae.parser=Ue.parse;ae.Renderer=Cs;ae.TextRenderer=ti;ae.Lexer=Ne;ae.lexer=Ne.lex;ae.Tokenizer=xs;ae.Hooks=An;ae.parse=ae;ae.options;ae.setOptions;ae.use;ae.walkTokens;ae.parseInline;Ue.parse;Ne.lex;ae.setOptions({gfm:!0,breaks:!0});const Il=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul"],Dl=["class","href","rel","target","title","start"];let Rl=!1;const Uv=14e4,Ov=4e4,Fv=200,ka=5e4,Pt=new Map;function Bv(e){const t=Pt.get(e);return t===void 0?null:(Pt.delete(e),Pt.set(e,t),t)}function Nl(e,t){if(Pt.set(e,t),Pt.size<=Fv)return;const n=Pt.keys().next().value;n&&Pt.delete(n)}function Wv(){Rl||(Rl=!0,oo.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function ut(e){const t=e.trim();if(!t)return"";if(Wv(),t.length<=ka){const i=Bv(t);if(i!==null)return i}const n=oc(t,Uv),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>Ov){const c=`<pre class="code-block">${Hv(`${n.text}${s}`)}</pre>`,d=oo.sanitize(c,{ALLOWED_TAGS:Il,ALLOWED_ATTR:Dl});return t.length<=ka&&Nl(t,d),d}const a=ae.parse(`${n.text}${s}`),o=oo.sanitize(a,{ALLOWED_TAGS:Il,ALLOWED_ATTR:Dl});return t.length<=ka&&Nl(t,o),o}function Hv(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const zv=1500,Qv=2e3,Pd="Copy as markdown",Kv="Copied",qv="Copy failed";async function Vv(e){if(!e)return!1;try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.setAttribute("readonly",""),document.body.appendChild(t);try{return t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy")}finally{document.body.removeChild(t)}}function ls(e,t){e.title=t,e.setAttribute("aria-label",t)}function jv(e){const t=e.label??Pd;return r`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const a=await Vv(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!a){s.dataset.error="1",ls(s,qv),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,ls(s,t))},Qv);return}s.dataset.copied="1",ls(s,Kv),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,ls(s,t))},zv)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${z.copy}</span>
        <span class="chat-copy-btn__icon-check">${z.check}</span>
      </span>
    </button>
  `}function Gv(e){return jv({text:()=>e,label:Pd})}function Id(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",a=t.content,o=Array.isArray(a)?a:null,i=Array.isArray(o)&&o.some(g=>{const f=g,$=(typeof f.type=="string"?f.type:"").toLowerCase();return $==="toolresult"||$==="tool_result"}),c=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||i||c)&&(n="toolResult");let d=[];typeof t.content=="string"?d=[{type:"text",text:t.content}]:Array.isArray(t.content)?d=t.content.map(g=>({type:g.type||"text",text:g.text,name:g.name,args:g.args||g.arguments})):typeof t.text=="string"&&(d=[{type:"text",text:t.text}]);const p=typeof t.timestamp=="number"?t.timestamp:Date.now(),m=typeof t.id=="string"?t.id:void 0;return{role:n,content:d,timestamp:p,id:m}}function ni(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function Dd(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const Jv={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},Yv={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}}},Zv={fallback:Jv,tools:Yv},Rd=Zv,Ul=Rd.fallback??{icon:"puzzle"},Xv=Rd.tools??{};function ey(e){return(e??"tool").trim()}function ty(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function ny(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function Nd(e){if(e!=null){if(typeof e=="string"){const t=e.trim();if(!t)return;const n=t.split(/\r?\n/)[0]?.trim()??"";return n?n.length>160?`${n.slice(0,157)}…`:n:void 0}if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e)){const t=e.map(s=>Nd(s)).filter(s=>!!s);if(t.length===0)return;const n=t.slice(0,3).join(", ");return t.length>3?`${n}…`:n}}}function sy(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function ay(e,t){for(const n of t){const s=sy(e,n),a=Nd(s);if(a)return a}}function oy(e){if(!e||typeof e!="object")return;const t=e,n=typeof t.path=="string"?t.path:void 0;if(!n)return;const s=typeof t.offset=="number"?t.offset:void 0,a=typeof t.limit=="number"?t.limit:void 0;return s!==void 0&&a!==void 0?`${n}:${s}-${s+a}`:n}function iy(e){if(!e||typeof e!="object")return;const t=e;return typeof t.path=="string"?t.path:void 0}function ly(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function ry(e){const t=ey(e.name),n=t.toLowerCase(),s=Xv[n],a=s?.icon??Ul.icon??"puzzle",o=s?.title??ty(t),i=s?.label??t,c=e.args&&typeof e.args=="object"?e.args.action:void 0,d=typeof c=="string"?c.trim():void 0,p=ly(s,d),m=ny(p?.label??d);let g;n==="read"&&(g=oy(e.args)),!g&&(n==="write"||n==="edit"||n==="attach")&&(g=iy(e.args));const f=p?.detailKeys??s?.detailKeys??Ul.detailKeys??[];return!g&&f.length>0&&(g=ay(e.args,f)),!g&&e.meta&&(g=e.meta),g&&(g=dy(g)),{name:t,icon:a,title:o,label:i,verb:m,detail:g}}function cy(e){const t=[];if(e.verb&&t.push(e.verb),e.detail&&t.push(e.detail),t.length!==0)return t.join(" · ")}function dy(e){return e&&e.replace(/\/Users\/[^/]+/g,"~").replace(/\/home\/[^/]+/g,"~")}const uy=80,py=2,Ol=100;function my(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function gy(e){const t=e.split(`
`),n=t.slice(0,py),s=n.join(`
`);return s.length>Ol?s.slice(0,Ol)+"…":n.length<t.length?s+"…":s}function fy(e){const t=e,n=hy(t.content),s=[];for(const a of n){const o=(typeof a.type=="string"?a.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(o)||typeof a.name=="string"&&a.arguments!=null)&&s.push({kind:"call",name:a.name??"tool",args:vy(a.arguments??a.args)})}for(const a of n){const o=(typeof a.type=="string"?a.type:"").toLowerCase();if(o!=="toolresult"&&o!=="tool_result")continue;const i=yy(a),c=typeof a.name=="string"?a.name:"tool";s.push({kind:"result",name:c,text:i})}if(Dd(e)&&!s.some(a=>a.kind==="result")){const a=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"Tool Output",o=Yc(e)??void 0;s.push({kind:"result",name:a,text:o})}return s}function Ud(e,t,n){const s=ry({name:e.name,args:e.args}),a=cy(s),o=!!(n?.suppressResultOutput&&e.kind==="result"),i=!!e.text?.trim(),c=i&&!o,d=!!t,p=d?()=>{if(i){t(my(e.text));return}const w=`## ${s.label}

${a?`**Command:** \`${a}\`

`:""}*No output — tool completed successfully.*`;t(w)}:void 0,m=e.text?.length??0,g=c&&m<=uy,f=c&&!g,$=c&&g,S=!i;return r`
    <div
      class="chat-tool-card ${d?"chat-tool-card--clickable":""}"
      @click=${p}
      role=${d?"button":k}
      tabindex=${d?"0":k}
      @keydown=${d?w=>{w.key!=="Enter"&&w.key!==" "||(w.preventDefault(),p?.())}:k}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${z[s.icon]}</span>
          <span>${s.label}</span>
        </div>
        ${d?r`<span class="chat-tool-card__action">${i?"View":""} ${z.check}</span>`:k}
        ${S&&!d?r`<span class="chat-tool-card__status">${z.check}</span>`:k}
      </div>
      ${a?r`<div class="chat-tool-card__detail">${a}</div>`:k}
      ${S?r`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:k}
      ${f?r`<div class="chat-tool-card__preview mono">${gy(e.text)}</div>`:k}
      ${$?r`<div class="chat-tool-card__inline mono">${e.text}</div>`:k}
    </div>
  `}function hy(e){return Array.isArray(e)?e.filter(Boolean):[]}function vy(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function yy(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function Od(e){const t=e,n=[t.durationMs,t.elapsedMs,t.latencyMs,t.thinkingMs,t.metrics?.durationMs];for(const s of n){if(typeof s=="number"&&Number.isFinite(s)&&s>0)return s;if(typeof s=="string"){const a=Number(s);if(Number.isFinite(a)&&a>0)return a}}return null}function Fd(e){if(!Number.isFinite(e)||e<=0)return"";if(e<1e3)return`${Math.round(e)}ms`;if(e<6e4)return`${(e/1e3).toFixed(e<1e4?1:0)}s`;const t=Math.floor(e/6e4),n=Math.round(e%6e4/1e3);return`${t}m${n.toString().padStart(2,"0")}s`}function by(e){const n=e.content,s=[];if(Array.isArray(n))for(const a of n){if(typeof a!="object"||a===null)continue;const o=a;if(o.type==="image"){const i=o.source;if(i?.type==="base64"&&typeof i.data=="string"){const c=i.data,d=i.media_type||"image/png",p=c.startsWith("data:")?c:`data:${d};base64,${c}`;s.push({url:p})}else typeof o.url=="string"&&s.push({url:o.url})}else if(o.type==="image_url"){const i=o.image_url;typeof i?.url=="string"&&s.push({url:i.url})}}return s}function wy(e){return r`
    <div class="chat-group assistant">
      ${si("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function ky(e,t,n,s){const a=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),o=s?.name??"Assistant";return r`
    <div class="chat-group assistant">
      ${si("assistant",s)}
      <div class="chat-group-messages">
        ${Wd({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${o}</span>
          <span class="chat-group-timestamp">${a}</span>
        </div>
      </div>
    </div>
  `}function $y(e,t){const n=ni(e.role),s=t.assistantName??"Assistant",a=n==="user"?"You":n==="assistant"?s:n==="tool"?"Tool":n,o=n==="user"?"user":n==="assistant"?"assistant":"other",i=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),c=n==="assistant"?Od(e.messages[e.messages.length-1]?.message):null,d=c?Fd(c):"";return r`
    <div class="chat-group ${o}">
      ${si(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((p,m)=>Wd(p.message,{isStreaming:e.isStreaming&&m===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${i}</span>
          ${d?r`<span class="chat-group-duration muted">思考 ${d}</span>`:k}
        </div>
      </div>
    </div>
  `}function si(e,t){const n=ni(e),s=t?.name?.trim()||"Assistant",a=t?.avatar?.trim()||"",o=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",i=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return a&&n==="assistant"?Sy(a)?r`<img
        class="chat-avatar ${i}"
        src="${a}"
        alt="${s}"
      />`:r`<div class="chat-avatar ${i}">${a}</div>`:r`<div class="chat-avatar ${i}">${o}</div>`}function Sy(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function Bd(e){return e.length===0?k:r`
    <div class="chat-message-images">
      ${e.map(t=>r`
          <img
            src=${t.url}
            alt=${t.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function xy(e){const t=[];for(const n of e)n.kind!=="result"||!n.text?.trim()||t.push(n.text.trim());return t.length>0?t.join(`

---

`):null}function rs(e){return e.replace(/\s+/g," ").trim()}function Cy(e){return e.split(/\n\n---\n\n/).map(t=>t.replace(/^###[^\n]+\n+/,"").trim()).join(`

`).trim()}function My(e){return e.filter(t=>t.kind==="result"&&t.text?.trim()).map(t=>t.text.trim()).join(`

`)}function Ay(e,t){const n=(e??"").trim(),s=xy(t)?.trim()??"";if(!n&&!s)return null;if(!s)return n||null;if(!n)return s;const a=My(t),o=Cy(s),i=a&&(n===a||rs(n)===rs(a)||a.includes(n)||n.includes(a)),c=n===o||rs(n)===rs(o);return i||c?s:`${n}

---

${s}`}function Ey(e){const t=e.currentTarget;if(t.disabled)return;e.stopPropagation();const s=!(t.getAttribute("aria-expanded")==="true");t.setAttribute("aria-expanded",String(s));const a=t.closest(".chat-tool-result-block"),o=a?.querySelector(".chat-tool-result-body");o&&(o.hidden=!s),a?.classList.toggle("chat-tool-result-block--open",s)}function Ty(e,t,n,s,a,o){const i=Ay(n,e),c=!!i?.trim()||t.length>0||!!s?.trim(),d=e.length?e.map(p=>Ud(p,o,{suppressResultOutput:!0})):r`<div class="chat-tool-result-placeholder muted">工具输出</div>`;return r`
    <div class="chat-tool-result-block">
      <div class="chat-tool-result-main chat-bubble fade-in ${a.isStreaming?"streaming":""}">
        <div class="chat-tool-result-row">
          <button
            type="button"
            class="btn btn--icon chat-tool-result-toggle"
            aria-expanded="false"
            aria-label=${c?"展开工具输出详情":"无详情可展开"}
            title=${c?"展开工具输出":"无输出正文"}
            ?disabled=${!c}
            @click=${Ey}
          >
            ${z.chevronRight}
          </button>
          <div class="chat-tool-result-tools">${d}</div>
        </div>
      </div>
      ${c?r`
              <div class="chat-tool-result-body" hidden>
                ${a.showReasoning&&s?r`
                        <details class="chat-thinking" open>
                          <summary class="chat-thinking__summary">思考过程</summary>
                          <div class="chat-thinking__content">
                            ${dt(ut(s))}
                          </div>
                        </details>
                      `:k}
                ${Bd(t)}
                ${i?.trim()?r`<div class="chat-text">${dt(ut(i))}</div>`:k}
              </div>
            `:k}
    </div>
  `}function Wd(e,t,n){const s=e,a=typeof s.role=="string"?s.role:"unknown",o=Dd(e)||a.toLowerCase()==="toolresult"||a.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",i=fy(e),c=i.length>0,d=by(e),p=d.length>0,m=Yc(e),g=t.showReasoning&&a==="assistant"?Zg(e):null,f=m?.trim()?m:null,$=g?ef(g):null,S=a==="assistant"?Od(e):null,w=S?Fd(S):"",C=f,L=a==="assistant"&&!!C?.trim(),P=["chat-bubble",L?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return o?Ty(i,d,C,$,t,n):!C&&!c&&!p?k:r`
    <div class="${P}">
      ${L?Gv(C):k}
      ${Bd(d)}
      ${$?r`
              <details class="chat-thinking">
                <summary class="chat-thinking__summary">
                  思考过程${w?r`<span class="muted"> · ${w}</span>`:k}
                </summary>
                <div class="chat-thinking__content">
                  ${dt(ut($))}
                </div>
              </details>
            `:k}
      ${C?r`<div class="chat-text">${dt(ut(C))}</div>`:k}
      ${i.map(U=>Ud(U,n))}
    </div>
  `}function Ly(e){return r`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${z.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?r`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?r`<div class="sidebar-markdown">${dt(ut(e.content))}</div>`:r`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var _y=Object.defineProperty,Py=Object.getOwnPropertyDescriptor,Qs=(e,t,n,s)=>{for(var a=s>1?void 0:s?Py(t,n):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,n,a):i(a))||a);return s&&a&&_y(t,n,a),a};let rn=class extends nn{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,a=(e.clientX-this.startX)/n;let o=this.startRatio+a;o=Math.max(this.minRatio,Math.min(this.maxRatio,o)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:o},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return k}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};rn.styles=xu`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;Qs([Ps({type:Number})],rn.prototype,"splitRatio",2);Qs([Ps({type:Number})],rn.prototype,"minRatio",2);Qs([Ps({type:Number})],rn.prototype,"maxRatio",2);rn=Qs([nc("resizable-divider")],rn);const Iy=5e3;function Dy(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function Fl(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function Ry(e){return e?e.active?r`
      <div class="callout info compaction-indicator compaction-indicator--active">
        ${z.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<Iy?r`
        <div class="callout success compaction-indicator compaction-indicator--complete">
          ${z.check} Context compacted
        </div>
      `:k:k}function Hd(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function zd(e){return e.startsWith("image/")?"image":"file"}function Ny(e,t){const n=e.target,s=n?.files?Array.from(n.files):[];if(!s.length||!t.onAttachmentsChange)return;const a=t.attachments??[],o=i=>new Promise(c=>{const d=new FileReader;d.addEventListener("load",()=>{const p=d.result;c({id:Hd(),dataUrl:p,mimeType:i.type||"application/octet-stream",filename:i.name,sizeBytes:i.size,kind:zd(i.type||"")})}),d.readAsDataURL(i)});Promise.all(s.map(o)).then(i=>{t.onAttachmentsChange?.([...a,...i])}),n&&(n.value="")}function Uy(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let a=0;a<n.length;a++){const o=n[a];o.type.startsWith("image/")&&s.push(o)}if(s.length!==0){e.preventDefault();for(const a of s){const o=a.getAsFile();if(!o)continue;const i=new FileReader;i.addEventListener("load",()=>{const c=i.result,d={id:Hd(),dataUrl:c,mimeType:o.type,filename:o.name,sizeBytes:o.size,kind:"image"},p=t.attachments??[];t.onAttachmentsChange?.([...p,d])}),i.readAsDataURL(o)}}}function Oy(e){const t=e.attachments??[];return t.length===0?k:r`
    <div class="chat-attachments">
      ${t.map(n=>r`
          <div class="chat-attachment">
            ${(n.kind??zd(n.mimeType))==="image"?r`
                    <img
                      src=${n.dataUrl}
                      alt=${n.filename||"Attachment preview"}
                      class="chat-attachment__img"
                    />
                  `:r`
                    <div class="chat-attachment__file">
                      <div class="mono">${n.filename||"file"}</div>
                      <div class="muted" style="font-size: 12px;">
                        ${n.mimeType}${n.sizeBytes?` · ${Dy(n.sizeBytes)}`:""}
                      </div>
                    </div>
                  `}
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(a=>a.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${z.x}
            </button>
          </div>
        `)}
    </div>
  `}function Fy(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),o=e.sessions?.sessions?.find(D=>D.key===e.sessionKey)?.reasoningLevel??"off",i=e.showThinking&&o!=="off",c={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},d=(e.attachments?.length??0)>0,p=e.draft.trim().length>0,m=e.connected&&(p||d),g=e.connected?d?"添加消息（也可继续粘贴图片）…":"输入消息（回车发送，Shift+回车换行，可粘贴图片）":"Connect to the gateway to start chatting…",f=e.splitRatio??.6,$=!!(e.sidebarOpen&&e.onCloseSidebar),S=!e.loading&&(Array.isArray(e.messages)?e.messages.length===0:!0)&&!e.stream,w=["你能告诉我你有哪些技能吗？","帮我生成一份最近 15 分钟 MySQL 告警分析报告","帮我梳理一个排查思路，并给出优先级"],C=S?r`
        <div class="chat-empty__title">您好，有什么可以帮助您？</div>
      `:k,L=S?r`
        <div class="chat-empty-prompts">
          <div class="chat-empty-prompts__title">选一个试试</div>
          <div class="chat-empty__prompts">
            ${w.map(D=>r`
                <button
                  class="btn chat-empty__prompt"
                  type="button"
                  ?disabled=${!e.connected}
                  @click=${()=>{e.onDraftChange(D),e.onSend()}}
                >
                  ${z.chatPrompt} ${D}
                </button>
              `)}
          </div>
        </div>
      `:k,P=r`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?r`
              <div class="muted">Loading chat…</div>
            `:k}
      ${Ph(Wy(e),D=>D.key,D=>D.kind==="reading-indicator"?wy(c):D.kind==="stream"?ky(D.text,D.startedAt,e.onOpenSidebar,c):D.kind==="group"?$y(D,{onOpenSidebar:e.onOpenSidebar,showReasoning:i,assistantName:e.assistantName,assistantAvatar:c.avatar}):k)}
      ${C}
    </div>
  `,U=e.conversationOnly??!0,R=!U,O=e.queue.filter(D=>D.sessionKey===e.sessionKey);return r`
    <section class="chat ${S?"chat-empty":""} ${e.focusMode?"chat--focus":""}">
      ${e.onConversationOnlyChange?r`
              <button
                type="button"
                class="chat-brain-toggle ${R?"chat-brain-toggle--active":""}"
                aria-pressed=${R?"true":"false"}
                aria-label=${R?"隐藏工具调用，仅显示对话":"显示工具调用（输入输出默认折叠）"}
                title=${R?"仅对话":"显示工具调用"}
                @click=${()=>e.onConversationOnlyChange?.(!U)}
              >
                ${z.brain}
              </button>
            `:k}

      ${e.disabledReason?r`<div class="callout">${e.disabledReason}</div>`:k}

      ${e.error?r`<div class="callout danger">${e.error}</div>`:k}

      ${Ry(e.compactionStatus)}

      ${e.focusMode?r`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${z.x}
            </button>
          `:k}

      <div
        class="chat-split-container ${$?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${$?`0 0 ${f*100}%`:"1 1 100%"}"
        >
          ${P}
        </div>

        ${$?r`
              <resizable-divider
                .splitRatio=${f}
                @resize=${D=>e.onSplitRatioChange?.(D.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${Ly({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:k}
      </div>

      ${O.length?r`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${O.length})</div>
              <div class="chat-queue__list">
                ${O.map(D=>r`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${D.text||(D.attachments?.length?`Image (${D.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${async()=>{e.confirmQueueRemove&&!await Te(l("chatQueueRemoveConfirm"))||e.onQueueRemove(D.id)}}
                      >
                        ${z.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:k}

      ${e.showNewMessages?r`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${z.arrowDown}
            </button>
          `:k}

      <div class="chat-compose">
        ${Oy(e)}
        <div class="chat-compose__inner">
          <label class="field chat-compose__field">
            <span>Message</span>
            <span class="textarea"><textarea
            ${_h(D=>D&&Fl(D))}
            .value=${e.draft}
            ?disabled=${!e.connected}
            @keydown=${D=>{D.key==="Enter"&&(D.isComposing||D.keyCode===229||D.shiftKey||e.connected&&(D.preventDefault(),t&&m&&e.onSend()))}}
            @input=${D=>{const u=D.target;Fl(u),e.onDraftChange(u.value)}}
            @paste=${D=>Uy(D,e)}
            placeholder=${g}
          ></textarea></span>
        </label>
          <div class="chat-compose__row">
          <div class="chat-compose__meta">
            <button
              class="btn btn--icon chat-compose__add-file"
              type="button"
              aria-label="添加文件"
              title="添加文件"
              ?disabled=${!e.connected||!e.onAttachmentsChange}
              @click=${()=>{document.getElementById("chat-file-input")?.click()}}
            >
              ${z.plus}
            </button>
            <input
              id="chat-file-input"
              type="file"
              multiple
              accept="image/*,*/*"
              style="display:none"
              @change=${D=>Ny(D,e)}
            />
            ${e.onModelRefChange?r`
                    <label class="field chat-compose__model-select">
                      <span class="select small"><select
                        aria-label="大模型"
                        .value=${e.modelRef??""}
                        ?disabled=${!e.connected}
                        @change=${D=>{const u=D.target.value.trim(),b=e.defaultModelRef??"";e.onModelRefChange?.(u===""||u===b?null:u)}}
                      >
                        ${(e.modelOptions??[{value:"",label:"默认"}]).map(D=>r`<option value=${D.value}>${D.label}</option>`)}
                      </select></span>
                    </label>
                  `:k}
          </div>
          <div class="chat-compose__actions">
            <button
              class="btn chat-compose__secondary"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"停止":"新会话"}
            </button>
            <button
              class="btn chat-compose__send"
              type="button"
              aria-label="发送"
              title="发送 (Enter)"
              ?disabled=${!m}
              @click=${e.onSend}
            >
              ${n?z.loader2:z.send}
            </button>
          </div>
          </div>
        </div>
      </div>

      ${L}
    </section>
  `}function By(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const a=Id(s.message),o=ni(a.role),i=a.timestamp||Date.now();!n||n.role!==o?(n&&t.push(n),n={kind:"group",key:`group:${o}:${s.key}`,role:o,messages:[{message:s.message,key:s.key}],timestamp:i,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function Wy(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],a=e.conversationOnly??!0,o=Math.max(0,n.length-Ja);o>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${Ja} messages (${o} hidden).`,timestamp:Date.now()}});for(let i=o;i<n.length;i++){const c=n[i],d=Id(c);!e.showThinking&&d.role.toLowerCase()==="toolresult"||a&&d.role==="toolResult"||t.push({kind:"message",key:Bl(c,i),message:c})}if(e.showThinking&&!a)for(let i=0;i<s.length;i++)t.push({kind:"message",key:Bl(s[i],i+n.length),message:s[i]});if(e.stream!==null){const i=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:i,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:i})}return By(t)}function Bl(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const a=typeof n.id=="string"?n.id:"";if(a)return`msg:${a}`;const o=typeof n.messageId=="string"?n.messageId:"";if(o)return`msg:${o}`;const i=typeof n.timestamp=="number"?n.timestamp:null,c=typeof n.role=="string"?n.role:"unknown";return i!=null?`msg:${c}:${i}:${t}`:`msg:${c}:${t}`}function et(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function Qd(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(et(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function mn(e){return e.filter(t=>typeof t=="string").join(".")}function Ee(e,t){const n=mn(e),s=t[n];if(s)return s;const a=n.split(".");for(const[o,i]of Object.entries(t)){if(!o.includes("*"))continue;const c=o.split(".");if(c.length!==a.length)continue;let d=!0;for(let p=0;p<a.length;p+=1)if(c[p]!=="*"&&c[p]!==a[p]){d=!1;break}if(d)return i}}function ze(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function Hy(e){const t=mn(e).toLowerCase();return t.includes("token")||t.includes("password")||t.includes("secret")||t.includes("apikey")||t.endsWith("key")}function zy(e){const t=mn(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const Qy={en:{"meta.lastTouchedVersion":"Auto-set when OpenClaw writes the config.","meta.lastTouchedAt":"ISO timestamp of the last config write (auto-set).","update.channel":'Update channel for git + npm installs ("stable", "beta", or "dev").',"update.checkOnStart":"Check for npm updates when the gateway starts (default: true).","gateway.remote.url":"Remote Gateway WebSocket URL (ws:// or wss://).","gateway.remote.tlsFingerprint":"Expected sha256 TLS fingerprint for the remote gateway (pin to avoid MITM).","gateway.remote.sshTarget":"Remote gateway over SSH (tunnels the gateway port to localhost). Format: user@host or user@host:port.","gateway.remote.sshIdentity":"Optional SSH identity file path (passed to ssh -i).","agents.list.*.skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].identity.avatar":"Avatar image path (relative to the agent workspace only) or a remote URL/data URL.","discovery.mdns.mode":'mDNS broadcast mode ("minimal" default, "full" includes cliPath/sshPort, "off" disables mDNS).',"gateway.auth.token":"Required by default for gateway access (unless using Tailscale Serve identity); required for non-loopback binds.","gateway.auth.password":"Required for Tailscale funnel.","gateway.controlUi.basePath":"Optional URL prefix where the Control UI is served (e.g. /openclaw).","gateway.controlUi.root":"Optional filesystem root for Control UI assets (defaults to dist/control-ui).","gateway.controlUi.allowedOrigins":"Allowed browser origins for Control UI/WebChat websocket connections (full origins only, e.g. https://control.example.com).","gateway.controlUi.allowInsecureAuth":"Allow Control UI auth over insecure HTTP (token-only; not recommended).","gateway.controlUi.dangerouslyDisableDeviceAuth":"DANGEROUS. Disable Control UI device identity checks (token/password only).","gateway.http.endpoints.chatCompletions.enabled":"Enable the OpenAI-compatible `POST /v1/chat/completions` endpoint (default: false).","gateway.reload.mode":'Hot reload strategy for config changes ("hybrid" recommended).',"gateway.reload.debounceMs":"Debounce window (ms) before applying config changes.","gateway.nodes.browser.mode":'Node browser routing ("auto" = pick single connected browser node, "manual" = require node param, "off" = disable).',"gateway.nodes.browser.node":"Pin browser routing to a specific node id or name (optional).","gateway.nodes.allowCommands":"Extra node.invoke commands to allow beyond the gateway defaults (array of command strings).","gateway.nodes.denyCommands":"Commands to block even if present in node claims or default allowlist.","nodeHost.browserProxy.enabled":"Expose the local browser control server via node proxy.","nodeHost.browserProxy.allowProfiles":"Optional allowlist of browser profile names exposed via the node proxy.","diagnostics.flags":'Enable targeted diagnostics logs by flag (e.g. ["telegram.http"]). Supports wildcards like "telegram.*" or "*".',"diagnostics.cacheTrace.enabled":"Log cache trace snapshots for embedded agent runs (default: false).","diagnostics.cacheTrace.filePath":"JSONL output path for cache trace logs (default: $OPENCLAW_STATE_DIR/logs/cache-trace.jsonl).","diagnostics.cacheTrace.includeMessages":"Include full message payloads in trace output (default: true).","diagnostics.cacheTrace.includePrompt":"Include prompt text in trace output (default: true).","diagnostics.cacheTrace.includeSystem":"Include system prompt in trace output (default: true).","tools.exec.applyPatch.enabled":"Experimental. Enables apply_patch for OpenAI models when allowed by tool policy.","tools.exec.applyPatch.allowModels":'Optional allowlist of model ids (e.g. "gpt-5.2" or "openai/gpt-5.2").',"tools.exec.notifyOnExit":"When true (default), backgrounded exec sessions enqueue a system event and request a heartbeat on exit.","tools.exec.pathPrepend":"Directories to prepend to PATH for exec runs (gateway/sandbox).","tools.exec.safeBins":"Allow stdin-only safe binaries to run without explicit allowlist entries.","tools.message.allowCrossContextSend":"Legacy override: allow cross-context sends across all providers.","tools.message.crossContext.allowWithinProvider":"Allow sends to other channels within the same provider (default: true).","tools.message.crossContext.allowAcrossProviders":"Allow sends across different providers (default: false).","tools.message.crossContext.marker.enabled":"Add a visible origin marker when sending cross-context (default: true).","tools.message.crossContext.marker.prefix":'Text prefix for cross-context markers (supports "{channel}").',"tools.message.crossContext.marker.suffix":'Text suffix for cross-context markers (supports "{channel}").',"tools.message.broadcast.enabled":"Enable broadcast action (default: true).","tools.web.search.enabled":"Enable the web_search tool (requires a provider API key).","tools.web.search.provider":'Search provider ("brave" or "perplexity").',"tools.web.search.apiKey":"Brave Search API key (fallback: BRAVE_API_KEY env var).","tools.web.search.maxResults":"Default number of results to return (1-10).","tools.web.search.timeoutSeconds":"Timeout in seconds for web_search requests.","tools.web.search.cacheTtlMinutes":"Cache TTL in minutes for web_search results.","tools.web.search.perplexity.apiKey":"Perplexity or OpenRouter API key (fallback: PERPLEXITY_API_KEY or OPENROUTER_API_KEY env var).","tools.web.search.perplexity.baseUrl":"Perplexity base URL override (default: https://openrouter.ai/api/v1 or https://api.perplexity.ai).","tools.web.search.perplexity.model":'Perplexity model override (default: "perplexity/sonar-pro").',"tools.web.fetch.enabled":"Enable the web_fetch tool (lightweight HTTP fetch).","tools.web.fetch.maxChars":"Max characters returned by web_fetch (truncated).","tools.web.fetch.maxCharsCap":"Hard cap for web_fetch maxChars (applies to config and tool calls).","tools.web.fetch.timeoutSeconds":"Timeout in seconds for web_fetch requests.","tools.web.fetch.cacheTtlMinutes":"Cache TTL in minutes for web_fetch results.","tools.web.fetch.maxRedirects":"Maximum redirects allowed for web_fetch (default: 3).","tools.web.fetch.userAgent":"Override User-Agent header for web_fetch requests.","tools.web.fetch.readability":"Use Readability to extract main content from HTML (fallbacks to basic HTML cleanup).","tools.web.fetch.firecrawl.enabled":"Enable Firecrawl fallback for web_fetch (if configured).","tools.web.fetch.firecrawl.apiKey":"Firecrawl API key (fallback: FIRECRAWL_API_KEY env var).","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL (e.g. https://api.firecrawl.dev or custom endpoint).","tools.web.fetch.firecrawl.onlyMainContent":"When true, Firecrawl returns only the main content (default: true).","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge (ms) for cached results when supported by the API.","tools.web.fetch.firecrawl.timeoutSeconds":"Timeout in seconds for Firecrawl requests.","channels.slack.allowBots":"Allow bot-authored messages to trigger Slack replies (default: false).","channels.slack.thread.historyScope":'Scope for Slack thread history context ("thread" isolates per thread; "channel" reuses channel history).',"channels.slack.thread.inheritParent":"If true, Slack thread sessions inherit the parent channel transcript (default: false).","channels.mattermost.botToken":"Bot token from Mattermost System Console -> Integrations -> Bot Accounts.","channels.mattermost.baseUrl":"Base URL for your Mattermost server (e.g., https://chat.example.com).","channels.mattermost.chatmode":'Reply to channel messages on mention ("oncall"), on trigger chars (">" or "!") ("onchar"), or on every message ("onmessage").',"channels.mattermost.oncharPrefixes":'Trigger prefixes for onchar mode (default: [">", "!"]).',"channels.mattermost.requireMention":"Require @mention in channels before responding (default: true).","auth.profiles":"Named auth profiles (provider + mode + optional email).","auth.order":"Ordered auth profile IDs per provider (used for automatic failover).","auth.cooldowns.billingBackoffHours":"Base backoff (hours) when a profile fails due to billing/insufficient credits (default: 5).","auth.cooldowns.billingBackoffHoursByProvider":"Optional per-provider overrides for billing backoff (hours).","auth.cooldowns.billingMaxHours":"Cap (hours) for billing backoff (default: 24).","auth.cooldowns.failureWindowHours":"Failure window (hours) for backoff counters (default: 24).","agents.defaults.bootstrapMaxChars":"Max characters of each workspace bootstrap file injected into the system prompt before truncation (default: 20000).","agents.defaults.repoRoot":"Optional repository root shown in the system prompt runtime line (overrides auto-detect).","agents.defaults.envelopeTimezone":'Timezone for message envelopes ("utc", "local", "user", or an IANA timezone string).',"agents.defaults.envelopeTimestamp":'Include absolute timestamps in message envelopes ("on" or "off").',"agents.defaults.envelopeElapsed":'Include elapsed time in message envelopes ("on" or "off").',"agents.defaults.models":"Configured model catalog (keys are full provider/model IDs).","agents.defaults.memorySearch":"Vector search over MEMORY.md and memory/*.md (per-agent overrides supported).","agents.defaults.memorySearch.sources":'Sources to index for memory search (default: ["memory"]; add "sessions" to include session transcripts).',"agents.defaults.memorySearch.extraPaths":"Extra paths to include in memory search (directories or .md files; relative paths resolved from workspace).","agents.defaults.memorySearch.experimental.sessionMemory":"Enable experimental session transcript indexing for memory search (default: false).","agents.defaults.memorySearch.provider":'Embedding provider ("openai", "gemini", "voyage", or "local").',"agents.defaults.memorySearch.remote.baseUrl":"Custom base URL for remote embeddings (OpenAI-compatible proxies or Gemini overrides).","agents.defaults.memorySearch.remote.apiKey":"Custom API key for the remote embedding provider.","agents.defaults.memorySearch.remote.headers":"Extra headers for remote embeddings (merged; remote overrides OpenAI headers).","agents.defaults.memorySearch.remote.batch.enabled":"Enable batch API for memory embeddings (OpenAI/Gemini; default: true).","agents.defaults.memorySearch.remote.batch.wait":"Wait for batch completion when indexing (default: true).","agents.defaults.memorySearch.remote.batch.concurrency":"Max concurrent embedding batch jobs for memory indexing (default: 2).","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"Polling interval in ms for batch status (default: 2000).","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"Timeout in minutes for batch indexing (default: 60).","agents.defaults.memorySearch.local.modelPath":"Local GGUF model path or hf: URI (node-llama-cpp).","agents.defaults.memorySearch.fallback":'Fallback provider when embeddings fail ("openai", "gemini", "local", or "none").',"agents.defaults.memorySearch.store.path":"SQLite index path (default: ~/.openclaw/memory/{agentId}.sqlite).","agents.defaults.memorySearch.store.vector.enabled":"Enable sqlite-vec extension for vector search (default: true).","agents.defaults.memorySearch.store.vector.extensionPath":"Optional override path to sqlite-vec extension library (.dylib/.so/.dll).","agents.defaults.memorySearch.query.hybrid.enabled":"Enable hybrid BM25 + vector search for memory (default: true).","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Weight for vector similarity when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.textWeight":"Weight for BM25 text relevance when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Multiplier for candidate pool size (default: 4).","agents.defaults.memorySearch.cache.enabled":"Cache chunk embeddings in SQLite to speed up reindexing and frequent updates (default: true).",memory:"Memory backend configuration (global).","memory.backend":'Memory backend ("builtin" for OpenClaw embeddings, "qmd" for QMD sidecar).',"memory.citations":'Default citation behavior ("auto", "on", or "off").',"memory.qmd.command":"Path to the qmd binary (default: resolves from PATH).","memory.qmd.includeDefaultMemory":"Whether to automatically index MEMORY.md + memory/**/*.md (default: true).","memory.qmd.paths":"Additional directories/files to index with QMD (path + optional glob pattern).","memory.qmd.paths.path":"Absolute or ~-relative path to index via QMD.","memory.qmd.paths.pattern":"Glob pattern relative to the path root (default: **/*.md).","memory.qmd.paths.name":"Optional stable name for the QMD collection (default derived from path).","memory.qmd.sessions.enabled":"Enable QMD session transcript indexing (experimental, default: false).","memory.qmd.sessions.exportDir":"Override directory for sanitized session exports before indexing.","memory.qmd.sessions.retentionDays":"Retention window for exported sessions before pruning (default: unlimited).","memory.qmd.update.interval":"How often the QMD sidecar refreshes indexes (duration string, default: 5m).","memory.qmd.update.debounceMs":"Minimum delay between successive QMD refresh runs (default: 15000).","memory.qmd.update.onBoot":"Run QMD update once on gateway startup (default: true).","memory.qmd.update.embedInterval":"How often QMD embeddings are refreshed (duration string, default: 60m). Set to 0 to disable periodic embed.","memory.qmd.limits.maxResults":"Max QMD results returned to the agent loop (default: 6).","memory.qmd.limits.maxSnippetChars":"Max characters per snippet pulled from QMD (default: 700).","memory.qmd.limits.maxInjectedChars":"Max total characters injected from QMD hits per turn.","memory.qmd.limits.timeoutMs":"Per-query timeout for QMD searches (default: 4000).","memory.qmd.scope":"Session/channel scope for QMD recall (same syntax as session.sendPolicy; default: direct-only).","agents.defaults.memorySearch.cache.maxEntries":"Optional cap on cached embeddings (best-effort).","agents.defaults.memorySearch.sync.onSearch":"Lazy sync: schedule a reindex on search after changes.","agents.defaults.memorySearch.sync.watch":"Watch memory files for changes (chokidar).","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Minimum appended bytes before session transcripts trigger reindex (default: 100000).","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Minimum appended JSONL lines before session transcripts trigger reindex (default: 50).","plugins.enabled":"Enable plugin/extension loading (default: true).","plugins.allow":"Optional allowlist of plugin ids; when set, only listed plugins load.","plugins.deny":"Optional denylist of plugin ids; deny wins over allowlist.","plugins.load.paths":"Additional plugin files or directories to load.","plugins.slots":"Select which plugins own exclusive slots (memory, etc.).","plugins.slots.memory":'Select the active memory plugin by id, or "none" to disable memory plugins.',"plugins.entries":"Per-plugin settings keyed by plugin id (enable/disable + config payloads).","plugins.entries.*.enabled":"Overrides plugin enable/disable for this entry (restart required).","plugins.entries.*.config":"Plugin-defined config payload (schema is provided by the plugin).","plugins.installs":"CLI-managed install metadata (used by `openclaw plugins update` to locate install sources).","plugins.installs.*.source":'Install source ("npm", "archive", or "path").',"plugins.installs.*.spec":"Original npm spec used for install (if source is npm).","plugins.installs.*.sourcePath":"Original archive/path used for install (if any).","plugins.installs.*.installPath":"Resolved install directory (usually ~/.openclaw/extensions/<id>).","plugins.installs.*.version":"Version recorded at install time (if available).","plugins.installs.*.installedAt":"ISO timestamp of last install/update.","agents.list.*.identity.avatar":"Agent avatar (workspace-relative path, http(s) URL, or data URI).","agents.defaults.model.primary":"Primary model (provider/model).","agents.defaults.model.fallbacks":"Ordered fallback models (provider/model). Used when the primary model fails.","agents.defaults.imageModel.primary":"Optional image model (provider/model) used when the primary model lacks image input.","agents.defaults.imageModel.fallbacks":"Ordered fallback image models (provider/model).","agents.defaults.cliBackends":"Optional CLI backends for text-only fallback (claude-cli, etc.).","agents.defaults.humanDelay.mode":'Delay style for block replies ("off", "natural", "custom").',"agents.defaults.humanDelay.minMs":"Minimum delay in ms for custom humanDelay (default: 800).","agents.defaults.humanDelay.maxMs":"Maximum delay in ms for custom humanDelay (default: 2500).","commands.native":"Register native commands with channels that support it (Discord/Slack/Telegram).","commands.nativeSkills":"Register native skill commands (user-invocable skills) with channels that support it.","commands.text":"Allow text command parsing (slash commands only).","commands.bash":"Allow bash chat command (`!`; `/bash` alias) to run host shell commands (default: false; requires tools.elevated).","commands.bashForegroundMs":"How long bash waits before backgrounding (default: 2000; 0 backgrounds immediately).","commands.config":"Allow /config chat command to read/write config on disk (default: false).","commands.debug":"Allow /debug chat command for runtime-only overrides (default: false).","commands.restart":"Allow /restart and gateway restart tool actions (default: false).","commands.useAccessGroups":"Enforce access-group allowlists/policies for commands.","commands.ownerAllowFrom":`Explicit owner allowlist for owner-only tools/commands. Use channel-native IDs (optionally prefixed like "whatsapp:+15551234567"). '*' is ignored.`,"session.dmScope":'DM session scoping: "main" keeps continuity; "per-peer", "per-channel-peer", or "per-account-channel-peer" isolates DM history (recommended for shared inboxes/multi-account).',"session.identityLinks":"Map canonical identities to provider-prefixed peer IDs for DM session linking (example: telegram:123456).","channels.telegram.configWrites":"Allow Telegram to write config in response to channel events/commands (default: true).","channels.slack.configWrites":"Allow Slack to write config in response to channel events/commands (default: true).","channels.mattermost.configWrites":"Allow Mattermost to write config in response to channel events/commands (default: true).","channels.discord.configWrites":"Allow Discord to write config in response to channel events/commands (default: true).","channels.whatsapp.configWrites":"Allow WhatsApp to write config in response to channel events/commands (default: true).","channels.signal.configWrites":"Allow Signal to write config in response to channel events/commands (default: true).","channels.imessage.configWrites":"Allow iMessage to write config in response to channel events/commands (default: true).","channels.msteams.configWrites":"Allow Microsoft Teams to write config in response to channel events/commands (default: true).","channels.discord.commands.native":'Override native commands for Discord (bool or "auto").',"channels.discord.commands.nativeSkills":'Override native skill commands for Discord (bool or "auto").',"channels.telegram.commands.native":'Override native commands for Telegram (bool or "auto").',"channels.telegram.commands.nativeSkills":'Override native skill commands for Telegram (bool or "auto").',"channels.slack.commands.native":'Override native commands for Slack (bool or "auto").',"channels.slack.commands.nativeSkills":'Override native skill commands for Slack (bool or "auto").',"session.agentToAgent.maxPingPongTurns":"Max reply-back turns between requester and target (0–5).","channels.telegram.customCommands":"Additional Telegram bot menu commands (merged with native; conflicts ignored).","messages.ackReaction":"Emoji reaction used to acknowledge inbound messages (empty disables).","messages.ackReactionScope":'When to send ack reactions ("group-mentions", "group-all", "direct", "all").',"messages.inbound.debounceMs":"Debounce window (ms) for batching rapid inbound messages from the same sender (0 to disable).","channels.telegram.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.telegram.allowFrom=["*"].',"channels.telegram.streamMode":"Draft streaming mode for Telegram replies (off | partial | block). Separate from block streaming; requires private topics + sendMessageDraft.","channels.telegram.draftChunk.minChars":'Minimum chars before emitting a Telegram draft update when channels.telegram.streamMode="block" (default: 200).',"channels.telegram.draftChunk.maxChars":'Target max size for a Telegram draft update chunk when channels.telegram.streamMode="block" (default: 800; clamped to channels.telegram.textChunkLimit).',"channels.telegram.draftChunk.breakPreference":"Preferred breakpoints for Telegram draft chunks (paragraph | newline | sentence). Default: paragraph.","channels.telegram.retry.attempts":"Max retry attempts for outbound Telegram API calls (default: 3).","channels.telegram.retry.minDelayMs":"Minimum retry delay in ms for Telegram outbound calls.","channels.telegram.retry.maxDelayMs":"Maximum retry delay cap in ms for Telegram outbound calls.","channels.telegram.retry.jitter":"Jitter factor (0-1) applied to Telegram retry delays.","channels.telegram.network.autoSelectFamily":"Override Node autoSelectFamily for Telegram (true=enable, false=disable).","channels.telegram.timeoutSeconds":"Max seconds before Telegram API requests are aborted (default: 500 per grammY).","channels.whatsapp.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.whatsapp.allowFrom=["*"].',"channels.whatsapp.selfChatMode":"Same-phone setup (bot uses your personal WhatsApp number).","channels.whatsapp.debounceMs":"Debounce window (ms) for batching rapid consecutive messages from the same sender (0 to disable).","channels.signal.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.signal.allowFrom=["*"].',"channels.imessage.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.imessage.allowFrom=["*"].',"channels.bluebubbles.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.bluebubbles.allowFrom=["*"].',"channels.discord.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.discord.dm.allowFrom=["*"].',"channels.discord.retry.attempts":"Max retry attempts for outbound Discord API calls (default: 3).","channels.discord.retry.minDelayMs":"Minimum retry delay in ms for Discord outbound calls.","channels.discord.retry.maxDelayMs":"Maximum retry delay cap in ms for Discord outbound calls.","channels.discord.retry.jitter":"Jitter factor (0-1) applied to Discord retry delays.","channels.discord.maxLinesPerMessage":"Soft max line count per Discord message (default: 17).","channels.discord.intents.presence":"Enable the Guild Presences privileged intent. Must also be enabled in the Discord Developer Portal. Allows tracking user activities (e.g. Spotify). Default: false.","channels.discord.intents.guildMembers":"Enable the Guild Members privileged intent. Must also be enabled in the Discord Developer Portal. Default: false.","channels.discord.pluralkit.enabled":"Resolve PluralKit proxied messages and treat system members as distinct senders.","channels.discord.pluralkit.token":"Optional PluralKit token for resolving private systems or members.","channels.slack.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.slack.dm.allowFrom=["*"].'},zh:{"meta.lastTouchedVersion":"OpenClaw 写入配置时自动设置。","meta.lastTouchedAt":"最后一次配置写入的 ISO 时间戳（自动设置）。","update.channel":'git + npm 安装的更新渠道（"stable"、"beta" 或 "dev"）。',"update.checkOnStart":"网关启动时检查 npm 更新（默认：true）。","gateway.remote.url":"远程网关 WebSocket URL（ws:// 或 wss://）。","gateway.remote.tlsFingerprint":"远程网关的预期 sha256 TLS 指纹（固定以避免中间人攻击）。","gateway.remote.sshTarget":"通过 SSH 的远程网关（将网关端口隧道到 localhost）。格式：user@host 或 user@host:port。","gateway.remote.sshIdentity":"可选的 SSH 身份文件路径（传递给 ssh -i）。","agents.list.*.skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].identity.avatar":"头像图片路径（仅相对于代理工作区）或远程 URL/data URL。","discovery.mdns.mode":'mDNS 广播模式（"minimal" 默认，"full" 包含 cliPath/sshPort，"off" 禁用 mDNS）。',"gateway.auth.token":"默认情况下网关访问所需（除非使用 Tailscale Serve 身份）；非回环绑定需要。","gateway.auth.password":"Tailscale funnel 需要。","gateway.controlUi.basePath":"控制台 UI 服务的可选 URL 前缀（例如 /openclaw）。","gateway.controlUi.root":"控制台 UI 资源的可选文件系统根目录（默认为 dist/control-ui）。","gateway.controlUi.allowedOrigins":"控制台 UI/WebChat websocket 连接允许的浏览器来源（仅完整来源，例如 https://control.example.com）。","gateway.controlUi.allowInsecureAuth":"允许通过不安全 HTTP 进行控制台 UI 认证（仅令牌；不推荐）。","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险。禁用控制台 UI 设备身份检查（仅令牌/密码）。","gateway.http.endpoints.chatCompletions.enabled":"启用 OpenAI 兼容的 `POST /v1/chat/completions` 端点（默认：false）。","gateway.reload.mode":'配置更改的热重载策略（推荐 "hybrid"）。',"gateway.reload.debounceMs":"应用配置更改前的防抖窗口（毫秒）。","gateway.nodes.browser.mode":'节点浏览器路由（"auto" = 选择单个连接的浏览器节点，"manual" = 需要节点参数，"off" = 禁用）。',"gateway.nodes.browser.node":"将浏览器路由固定到特定节点 id 或名称（可选）。","gateway.nodes.allowCommands":"允许的额外 node.invoke 命令，超出网关默认值（命令字符串数组）。","gateway.nodes.denyCommands":"即使存在于节点声明或默认允许列表中也要阻止的命令。","nodeHost.browserProxy.enabled":"通过节点代理暴露本地浏览器控制服务器。","nodeHost.browserProxy.allowProfiles":"通过节点代理暴露的浏览器配置集名称的可选允许列表。","diagnostics.flags":'按标志启用目标诊断日志（例如 ["telegram.http"]）。支持通配符，如 "telegram.*" 或 "*"。',"diagnostics.cacheTrace.enabled":"记录嵌入代理运行的缓存跟踪快照（默认：false）。","diagnostics.cacheTrace.filePath":"缓存跟踪日志的 JSONL 输出路径（默认：$OPENCLAW_STATE_DIR/logs/cache-trace.jsonl）。","diagnostics.cacheTrace.includeMessages":"在跟踪输出中包含完整消息负载（默认：true）。","diagnostics.cacheTrace.includePrompt":"在跟踪输出中包含提示文本（默认：true）。","diagnostics.cacheTrace.includeSystem":"在跟踪输出中包含系统提示（默认：true）。","tools.exec.applyPatch.enabled":"实验性。在工具策略允许时，为 OpenAI 模型启用 apply_patch。","tools.exec.applyPatch.allowModels":'模型 id 的可选允许列表（例如 "gpt-5.2" 或 "openai/gpt-5.2"）。',"tools.exec.notifyOnExit":"当为 true（默认）时，后台 exec 会话在退出时排队系统事件并请求心跳。","tools.exec.pathPrepend":"为 exec 运行前置到 PATH 的目录（网关/沙箱）。","tools.exec.safeBins":"允许仅 stdin 的安全二进制文件在没有显式允许列表条目的情况下运行。","tools.message.allowCrossContextSend":"遗留覆盖：允许跨所有提供方的跨上下文发送。","tools.message.crossContext.allowWithinProvider":"允许发送到同一提供方内的其他通道（默认：true）。","tools.message.crossContext.allowAcrossProviders":"允许跨不同提供方发送（默认：false）。","tools.message.crossContext.marker.enabled":"发送跨上下文时添加可见的来源标记（默认：true）。","tools.message.crossContext.marker.prefix":'跨上下文标记的文本前缀（支持 "{channel}"）。',"tools.message.crossContext.marker.suffix":'跨上下文标记的文本后缀（支持 "{channel}"）。',"tools.message.broadcast.enabled":"启用广播操作（默认：true）。","tools.web.search.enabled":"启用 web_search 工具（需要提供方 API 密钥）。","tools.web.search.provider":'搜索提供方（"brave" 或 "perplexity"）。',"tools.web.search.apiKey":"Brave Search API 密钥（回退：BRAVE_API_KEY 环境变量）。","tools.web.search.maxResults":"默认返回的结果数（1-10）。","tools.web.search.timeoutSeconds":"web_search 请求的超时（秒）。","tools.web.search.cacheTtlMinutes":"web_search 结果的缓存 TTL（分钟）。","tools.web.search.perplexity.apiKey":"Perplexity 或 OpenRouter API 密钥（回退：PERPLEXITY_API_KEY 或 OPENROUTER_API_KEY 环境变量）。","tools.web.search.perplexity.baseUrl":"Perplexity base URL 覆盖（默认：https://openrouter.ai/api/v1 或 https://api.perplexity.ai）。","tools.web.search.perplexity.model":'Perplexity 模型覆盖（默认："perplexity/sonar-pro"）。',"tools.web.fetch.enabled":"启用 web_fetch 工具（轻量级 HTTP 获取）。","tools.web.fetch.maxChars":"web_fetch 返回的最大字符数（截断）。","tools.web.fetch.maxCharsCap":"web_fetch maxChars 的硬上限（适用于配置和工具调用）。","tools.web.fetch.timeoutSeconds":"web_fetch 请求的超时（秒）。","tools.web.fetch.cacheTtlMinutes":"web_fetch 结果的缓存 TTL（分钟）。","tools.web.fetch.maxRedirects":"web_fetch 允许的最大重定向数（默认：3）。","tools.web.fetch.userAgent":"覆盖 web_fetch 请求的 User-Agent 头。","tools.web.fetch.readability":"使用 Readability 从 HTML 中提取主要内容（回退到基本 HTML 清理）。","tools.web.fetch.firecrawl.enabled":"启用 Firecrawl 回退用于 web_fetch（如果已配置）。","tools.web.fetch.firecrawl.apiKey":"Firecrawl API 密钥（回退：FIRECRAWL_API_KEY 环境变量）。","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL（例如 https://api.firecrawl.dev 或自定义端点）。","tools.web.fetch.firecrawl.onlyMainContent":"当为 true 时，Firecrawl 仅返回主要内容（默认：true）。","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge（毫秒），用于 API 支持时的缓存结果。","tools.web.fetch.firecrawl.timeoutSeconds":"Firecrawl 请求的超时（秒）。","channels.slack.allowBots":"允许机器人撰写的消息触发 Slack 回复（默认：false）。","channels.slack.thread.historyScope":'Slack 线程历史上下文的范围（"thread" 隔离每个线程；"channel" 重用通道历史）。',"channels.slack.thread.inheritParent":"如果为 true，Slack 线程会话继承父通道转录（默认：false）。","channels.mattermost.botToken":"来自 Mattermost 系统控制台 -> 集成 -> 机器人账户的机器人令牌。","channels.mattermost.baseUrl":"您的 Mattermost 服务器的 Base URL（例如，https://chat.example.com）。","channels.mattermost.chatmode":'在提及（"oncall"）、触发字符（">" 或 "!"）（"onchar"）或每条消息（"onmessage"）时回复通道消息。',"channels.mattermost.oncharPrefixes":'onchar 模式的触发前缀（默认：[">", "!"]）。',"channels.mattermost.requireMention":"在回复前要求在通道中 @提及（默认：true）。","auth.profiles":"命名的认证配置集（提供方 + 模式 + 可选电子邮件）。","auth.order":"每个提供方的有序认证配置集 ID（用于自动故障转移）。","auth.cooldowns.billingBackoffHours":"当配置集因计费/积分不足而失败时的基本退避（小时）（默认：5）。","auth.cooldowns.billingBackoffHoursByProvider":"每个提供方的计费退避可选覆盖（小时）。","auth.cooldowns.billingMaxHours":"计费退避的上限（小时）（默认：24）。","auth.cooldowns.failureWindowHours":"退避计数器的故障窗口（小时）（默认：24）。","agents.defaults.bootstrapMaxChars":"在截断前注入系统提示的每个工作区引导文件的最大字符数（默认：20000）。","agents.defaults.repoRoot":"在系统提示运行时行中显示的可选仓库根目录（覆盖自动检测）。","agents.defaults.envelopeTimezone":'消息信封的时区（"utc"、"local"、"user" 或 IANA 时区字符串）。',"agents.defaults.envelopeTimestamp":'在消息信封中包含绝对时间戳（"on" 或 "off"）。',"agents.defaults.envelopeElapsed":'在消息信封中包含经过时间（"on" 或 "off"）。',"agents.defaults.models":"配置的模型目录（键是完整的提供方/模型 ID）。","agents.defaults.memorySearch":"对 MEMORY.md 和 memory/*.md 的向量搜索（支持每个代理的覆盖）。","agents.defaults.memorySearch.sources":'记忆搜索的索引来源（默认：["memory"]；添加 "sessions" 以包含会话转录）。',"agents.defaults.memorySearch.extraPaths":"记忆搜索中包含的额外路径（目录或 .md 文件；相对路径从工作区解析）。","agents.defaults.memorySearch.experimental.sessionMemory":"启用实验性会话转录索引用于记忆搜索（默认：false）。","agents.defaults.memorySearch.provider":'嵌入提供方（"openai"、"gemini"、"voyage" 或 "local"）。',"agents.defaults.memorySearch.remote.baseUrl":"远程嵌入的自定义 base URL（OpenAI 兼容代理或 Gemini 覆盖）。","agents.defaults.memorySearch.remote.apiKey":"远程嵌入提供方的自定义 API 密钥。","agents.defaults.memorySearch.remote.headers":"远程嵌入的额外请求头（合并；远程覆盖 OpenAI 请求头）。","agents.defaults.memorySearch.remote.batch.enabled":"启用记忆嵌入的批处理 API（OpenAI/Gemini；默认：true）。","agents.defaults.memorySearch.remote.batch.wait":"索引时等待批处理完成（默认：true）。","agents.defaults.memorySearch.remote.batch.concurrency":"记忆索引的最大并发嵌入批处理作业数（默认：2）。","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"批处理状态轮询间隔（毫秒）（默认：2000）。","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"批处理索引的超时（分钟）（默认：60）。","agents.defaults.memorySearch.local.modelPath":"本地 GGUF 模型路径或 hf: URI（node-llama-cpp）。","agents.defaults.memorySearch.fallback":'嵌入失败时的回退提供方（"openai"、"gemini"、"local" 或 "none"）。',"agents.defaults.memorySearch.store.path":"SQLite 索引路径（默认：~/.openclaw/memory/{agentId}.sqlite）。","agents.defaults.memorySearch.store.vector.enabled":"启用 sqlite-vec 扩展用于向量搜索（默认：true）。","agents.defaults.memorySearch.store.vector.extensionPath":"sqlite-vec 扩展库的可选覆盖路径（.dylib/.so/.dll）。","agents.defaults.memorySearch.query.hybrid.enabled":"启用混合 BM25 + 向量搜索用于记忆（默认：true）。","agents.defaults.memorySearch.query.hybrid.vectorWeight":"合并结果时向量相似度的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.textWeight":"合并结果时 BM25 文本相关性的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"候选池大小的倍数（默认：4）。","agents.defaults.memorySearch.cache.enabled":"在 SQLite 中缓存块嵌入以加速重新索引和频繁更新（默认：true）。",memory:"记忆后端配置（全局）。","memory.backend":'记忆后端（"builtin" 用于 OpenClaw 嵌入，"qmd" 用于 QMD 侧车）。',"memory.citations":'默认引用行为（"auto"、"on" 或 "off"）。',"memory.qmd.command":"qmd 可执行文件的路径（默认：从 PATH 解析）。","memory.qmd.includeDefaultMemory":"是否自动索引 MEMORY.md + memory/**/*.md（默认：true）。","memory.qmd.paths":"使用 QMD 索引的额外目录/文件（路径 + 可选 glob 模式）。","memory.qmd.paths.path":"通过 QMD 索引的绝对或 ~ 相对路径。","memory.qmd.paths.pattern":"相对于路径根的 Glob 模式（默认：**/*.md）。","memory.qmd.paths.name":"QMD 集合的可选稳定名称（默认从路径派生）。","memory.qmd.sessions.enabled":"启用 QMD 会话转录索引（实验性，默认：false）。","memory.qmd.sessions.exportDir":"索引前清理会话导出的覆盖目录。","memory.qmd.sessions.retentionDays":"修剪前导出会话的保留窗口（默认：无限制）。","memory.qmd.update.interval":"QMD 侧车刷新索引的频率（持续时间字符串，默认：5m）。","memory.qmd.update.debounceMs":"连续 QMD 刷新运行之间的最小延迟（默认：15000）。","memory.qmd.update.onBoot":"在网关启动时运行一次 QMD 更新（默认：true）。","memory.qmd.update.embedInterval":"QMD 嵌入刷新的频率（持续时间字符串，默认：60m）。设置为 0 以禁用定期嵌入。","memory.qmd.limits.maxResults":"返回到代理循环的最大 QMD 结果数（默认：6）。","memory.qmd.limits.maxSnippetChars":"从 QMD 拉取的每个片段的最大字符数（默认：700）。","memory.qmd.limits.maxInjectedChars":"每轮从 QMD 命中注入的最大总字符数。","memory.qmd.limits.timeoutMs":"QMD 搜索的每次查询超时（默认：4000）。","memory.qmd.scope":"QMD 召回会话/通道范围（与 session.sendPolicy 相同的语法；默认：仅直接）。","agents.defaults.memorySearch.cache.maxEntries":"缓存嵌入的可选上限（尽力而为）。","agents.defaults.memorySearch.sync.onSearch":"懒同步：在更改后搜索时安排重新索引。","agents.defaults.memorySearch.sync.watch":"监听记忆文件的更改（chokidar）。","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话转录触发重新索引前的最小追加字节数（默认：100000）。","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话转录触发重新索引前的最小追加 JSONL 行数（默认：50）。","plugins.enabled":"启用插件/扩展加载（默认：true）。","plugins.allow":"插件 id 的可选允许列表；设置时，仅加载列出的插件。","plugins.deny":"插件 id 的可选拒绝列表；拒绝优先于允许列表。","plugins.load.paths":"要加载的额外插件文件或目录。","plugins.slots":"选择哪些插件拥有独占槽位（记忆等）。","plugins.slots.memory":'按 id 选择活动记忆插件，或 "none" 以禁用记忆插件。',"plugins.entries":"按插件 id 键控的每个插件设置（启用/禁用 + 配置负载）。","plugins.entries.*.enabled":"覆盖此条目的插件启用/禁用（需要重启）。","plugins.entries.*.config":"插件定义的配置负载（模式由插件提供）。","plugins.installs":"CLI 管理的安装元数据（由 `openclaw plugins update` 用于定位安装来源）。","plugins.installs.*.source":'安装来源（"npm"、"archive" 或 "path"）。',"plugins.installs.*.spec":"用于安装的原始 npm 规格（如果来源是 npm）。","plugins.installs.*.sourcePath":"用于安装的原始存档/路径（如果有）。","plugins.installs.*.installPath":"解析的安装目录（通常是 ~/.openclaw/extensions/<id>）。","plugins.installs.*.version":"安装时记录的版本（如果可用）。","plugins.installs.*.installedAt":"最后一次安装/更新的 ISO 时间戳。","agents.list.*.identity.avatar":"代理头像（工作区相对路径、http(s) URL 或 data URI）。","agents.defaults.model.primary":"主模型（提供方/模型）。","agents.defaults.model.fallbacks":"有序回退模型（提供方/模型）。当主模型失败时使用。","agents.defaults.imageModel.primary":"当主模型缺少图像输入时使用的可选图像模型（提供方/模型）。","agents.defaults.imageModel.fallbacks":"有序回退图像模型（提供方/模型）。","agents.defaults.cliBackends":"用于仅文本回退的可选 CLI 后端（claude-cli 等）。","agents.defaults.humanDelay.mode":'块回复的延迟样式（"off"、"natural"、"custom"）。',"agents.defaults.humanDelay.minMs":"自定义 humanDelay 的最小延迟（毫秒）（默认：800）。","agents.defaults.humanDelay.maxMs":"自定义 humanDelay 的最大延迟（毫秒）（默认：2500）。","commands.native":"向支持它的通道注册原生命令（Discord/Slack/Telegram）。","commands.nativeSkills":"向支持它的通道注册原生技能命令（用户可调用的技能）。","commands.text":"允许文本命令解析（仅斜杠命令）。","commands.bash":"允许 bash 聊天命令（`!`；`/bash` 别名）运行主机 shell 命令（默认：false；需要 tools.elevated）。","commands.bashForegroundMs":"bash 在后台化之前等待的时间（默认：2000；0 立即后台化）。","commands.config":"允许 /config 聊天命令在磁盘上读取/写入配置（默认：false）。","commands.debug":"允许 /debug 聊天命令进行仅运行时覆盖（默认：false）。","commands.restart":"允许 /restart 和网关重启工具操作（默认：false）。","commands.useAccessGroups":"强制执行访问组允许列表/策略用于命令。","commands.ownerAllowFrom":`仅所有者工具/命令的显式所有者允许列表。使用通道原生 ID（可选前缀，如 "whatsapp:+15551234567"）。'*' 被忽略。`,"session.dmScope":'私信会话范围："main" 保持连续性；"per-peer"、"per-channel-peer" 或 "per-account-channel-peer" 隔离私信历史（推荐用于共享收件箱/多账户）。',"session.identityLinks":"将规范身份映射到提供方前缀的对等 ID 用于私信会话链接（示例：telegram:123456）。","channels.telegram.configWrites":"允许 Telegram 响应通道事件/命令写入配置（默认：true）。","channels.slack.configWrites":"允许 Slack 响应通道事件/命令写入配置（默认：true）。","channels.mattermost.configWrites":"允许 Mattermost 响应通道事件/命令写入配置（默认：true）。","channels.discord.configWrites":"允许 Discord 响应通道事件/命令写入配置（默认：true）。","channels.whatsapp.configWrites":"允许 WhatsApp 响应通道事件/命令写入配置（默认：true）。","channels.signal.configWrites":"允许 Signal 响应通道事件/命令写入配置（默认：true）。","channels.imessage.configWrites":"允许 iMessage 响应通道事件/命令写入配置（默认：true）。","channels.msteams.configWrites":"允许 Microsoft Teams 响应通道事件/命令写入配置（默认：true）。","channels.discord.commands.native":'覆盖 Discord 的原生命令（bool 或 "auto"）。',"channels.discord.commands.nativeSkills":'覆盖 Discord 的原生技能命令（bool 或 "auto"）。',"channels.telegram.commands.native":'覆盖 Telegram 的原生命令（bool 或 "auto"）。',"channels.telegram.commands.nativeSkills":'覆盖 Telegram 的原生技能命令（bool 或 "auto"）。',"channels.slack.commands.native":'覆盖 Slack 的原生命令（bool 或 "auto"）。',"channels.slack.commands.nativeSkills":'覆盖 Slack 的原生技能命令（bool 或 "auto"）。',"session.agentToAgent.maxPingPongTurns":"请求者和目标之间的最大回复轮数（0–5）。","channels.telegram.customCommands":"额外的 Telegram 机器人菜单命令（与原生命令合并；冲突被忽略）。","messages.ackReaction":"用于确认入站消息的表情符号反应（空则禁用）。","messages.ackReactionScope":'何时发送确认反应（"group-mentions"、"group-all"、"direct"、"all"）。',"messages.inbound.debounceMs":"批处理来自同一发送者的快速入站消息的防抖窗口（毫秒）（0 以禁用）。","channels.telegram.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.telegram.allowFrom=["*"]。',"channels.telegram.streamMode":"Telegram 回复的草稿流模式（off | partial | block）。与块流分离；需要私有主题 + sendMessageDraft。","channels.telegram.draftChunk.minChars":'当 channels.telegram.streamMode="block" 时，发出 Telegram 草稿更新前的最小字符数（默认：200）。',"channels.telegram.draftChunk.maxChars":'当 channels.telegram.streamMode="block" 时，Telegram 草稿更新块的目标最大大小（默认：800；限制为 channels.telegram.textChunkLimit）。',"channels.telegram.draftChunk.breakPreference":"Telegram 草稿块的首选断点（paragraph | newline | sentence）。默认：paragraph。","channels.telegram.retry.attempts":"出站 Telegram API 调用的最大重试次数（默认：3）。","channels.telegram.retry.minDelayMs":"Telegram 出站调用的最小重试延迟（毫秒）。","channels.telegram.retry.maxDelayMs":"Telegram 出站调用的最大重试延迟上限（毫秒）。","channels.telegram.retry.jitter":"应用于 Telegram 重试延迟的抖动因子（0-1）。","channels.telegram.network.autoSelectFamily":"覆盖 Telegram 的 Node autoSelectFamily（true=启用，false=禁用）。","channels.telegram.timeoutSeconds":"Telegram API 请求中止前的最大秒数（默认：500 per grammY）。","channels.whatsapp.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.whatsapp.allowFrom=["*"]。',"channels.whatsapp.selfChatMode":"同手机设置（机器人使用您的个人 WhatsApp 号码）。","channels.whatsapp.debounceMs":"批处理来自同一发送者的快速连续消息的防抖窗口（毫秒）（0 以禁用）。","channels.signal.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.signal.allowFrom=["*"]。',"channels.imessage.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.imessage.allowFrom=["*"]。',"channels.bluebubbles.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.bluebubbles.allowFrom=["*"]。',"channels.discord.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.discord.dm.allowFrom=["*"]。',"channels.discord.retry.attempts":"出站 Discord API 调用的最大重试次数（默认：3）。","channels.discord.retry.minDelayMs":"Discord 出站调用的最小重试延迟（毫秒）。","channels.discord.retry.maxDelayMs":"Discord 出站调用的最大重试延迟上限（毫秒）。","channels.discord.retry.jitter":"应用于 Discord 重试延迟的抖动因子（0-1）。","channels.discord.maxLinesPerMessage":"每个 Discord 消息的软最大行数（默认：17）。","channels.discord.intents.presence":"启用 Guild Presences 特权意图。还必须在 Discord 开发者门户中启用。允许跟踪用户活动（例如 Spotify）。默认：false。","channels.discord.intents.guildMembers":"启用 Guild Members 特权意图。还必须在 Discord 开发者门户中启用。默认：false。","channels.discord.pluralkit.enabled":"解析 PluralKit 代理消息并将系统成员视为不同的发送者。","channels.discord.pluralkit.token":"用于解析私有系统或成员的可选 PluralKit 令牌。","channels.slack.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.slack.dm.allowFrom=["*"]。'}};function tt(e,t){const n=Ds(),s=Qy[n];for(const a of zy(e)){const o=s[a];if(o)return o}return t}function Ky(e){const t=mn(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const qy={en:{"meta.lastTouchedVersion":"Config Last Touched Version","meta.lastTouchedAt":"Config Last Touched At","update.channel":"Update Channel","update.checkOnStart":"Update Check on Start","diagnostics.enabled":"Diagnostics Enabled","diagnostics.flags":"Diagnostics Flags","diagnostics.otel.enabled":"OpenTelemetry Enabled","diagnostics.otel.endpoint":"OpenTelemetry Endpoint","diagnostics.otel.protocol":"OpenTelemetry Protocol","diagnostics.otel.headers":"OpenTelemetry Headers","diagnostics.otel.serviceName":"OpenTelemetry Service Name","diagnostics.otel.traces":"OpenTelemetry Traces Enabled","diagnostics.otel.metrics":"OpenTelemetry Metrics Enabled","diagnostics.otel.logs":"OpenTelemetry Logs Enabled","diagnostics.otel.sampleRate":"OpenTelemetry Trace Sample Rate","diagnostics.otel.flushIntervalMs":"OpenTelemetry Flush Interval (ms)","diagnostics.cacheTrace.enabled":"Cache Trace Enabled","diagnostics.cacheTrace.filePath":"Cache Trace File Path","diagnostics.cacheTrace.includeMessages":"Cache Trace Include Messages","diagnostics.cacheTrace.includePrompt":"Cache Trace Include Prompt","diagnostics.cacheTrace.includeSystem":"Cache Trace Include System","agents.list.*.identity.avatar":"Identity Avatar","agents.list.*.skills":"Agent Skill Filter","gateway.remote.url":"Remote Gateway URL","gateway.remote.sshTarget":"Remote Gateway SSH Target","gateway.remote.sshIdentity":"Remote Gateway SSH Identity","gateway.remote.token":"Remote Gateway Token","gateway.remote.password":"Remote Gateway Password","gateway.remote.tlsFingerprint":"Remote Gateway TLS Fingerprint","gateway.auth.token":"Gateway Token","gateway.auth.password":"Gateway Password","tools.media.image.enabled":"Enable Image Understanding","tools.media.image.maxBytes":"Image Understanding Max Bytes","tools.media.image.maxChars":"Image Understanding Max Chars","tools.media.image.prompt":"Image Understanding Prompt","tools.media.image.timeoutSeconds":"Image Understanding Timeout (sec)","tools.media.image.attachments":"Image Understanding Attachment Policy","tools.media.image.models":"Image Understanding Models","tools.media.image.scope":"Image Understanding Scope","tools.media.models":"Media Understanding Shared Models","tools.media.concurrency":"Media Understanding Concurrency","tools.media.audio.enabled":"Enable Audio Understanding","tools.media.audio.maxBytes":"Audio Understanding Max Bytes","tools.media.audio.maxChars":"Audio Understanding Max Chars","tools.media.audio.prompt":"Audio Understanding Prompt","tools.media.audio.timeoutSeconds":"Audio Understanding Timeout (sec)","tools.media.audio.language":"Audio Understanding Language","tools.media.audio.attachments":"Audio Understanding Attachment Policy","tools.media.audio.models":"Audio Understanding Models","tools.media.audio.scope":"Audio Understanding Scope","tools.media.video.enabled":"Enable Video Understanding","tools.media.video.maxBytes":"Video Understanding Max Bytes","tools.media.video.maxChars":"Video Understanding Max Chars","tools.media.video.prompt":"Video Understanding Prompt","tools.media.video.timeoutSeconds":"Video Understanding Timeout (sec)","tools.media.video.attachments":"Video Understanding Attachment Policy","tools.media.video.models":"Video Understanding Models","tools.media.video.scope":"Video Understanding Scope","tools.links.enabled":"Enable Link Understanding","tools.links.maxLinks":"Link Understanding Max Links","tools.links.timeoutSeconds":"Link Understanding Timeout (sec)","tools.links.models":"Link Understanding Models","tools.links.scope":"Link Understanding Scope","tools.profile":"Tool Profile","tools.alsoAllow":"Tool Allowlist Additions","agents.list[].tools.profile":"Agent Tool Profile","agents.list[].tools.alsoAllow":"Agent Tool Allowlist Additions","tools.byProvider":"Tool Policy by Provider","agents.list[].tools.byProvider":"Agent Tool Policy by Provider","tools.exec.applyPatch.enabled":"Enable apply_patch","tools.exec.applyPatch.allowModels":"apply_patch Model Allowlist","tools.exec.notifyOnExit":"Exec Notify On Exit","tools.exec.approvalRunningNoticeMs":"Exec Approval Running Notice (ms)","tools.exec.host":"Exec Host","tools.exec.security":"Exec Security","tools.exec.ask":"Exec Ask","tools.exec.node":"Exec Node Binding","tools.exec.pathPrepend":"Exec PATH Prepend","tools.exec.safeBins":"Exec Safe Bins","tools.message.allowCrossContextSend":"Allow Cross-Context Messaging","tools.message.crossContext.allowWithinProvider":"Allow Cross-Context (Same Provider)","tools.message.crossContext.allowAcrossProviders":"Allow Cross-Context (Across Providers)","tools.message.crossContext.marker.enabled":"Cross-Context Marker","tools.message.crossContext.marker.prefix":"Cross-Context Marker Prefix","tools.message.crossContext.marker.suffix":"Cross-Context Marker Suffix","tools.message.broadcast.enabled":"Enable Message Broadcast","tools.web.search.enabled":"Enable Web Search Tool","tools.web.search.provider":"Web Search Provider","tools.web.search.apiKey":"Brave Search API Key","tools.web.search.maxResults":"Web Search Max Results","tools.web.search.timeoutSeconds":"Web Search Timeout (sec)","tools.web.search.cacheTtlMinutes":"Web Search Cache TTL (min)","tools.web.fetch.enabled":"Enable Web Fetch Tool","tools.web.fetch.maxChars":"Web Fetch Max Chars","tools.web.fetch.timeoutSeconds":"Web Fetch Timeout (sec)","tools.web.fetch.cacheTtlMinutes":"Web Fetch Cache TTL (min)","tools.web.fetch.maxRedirects":"Web Fetch Max Redirects","tools.web.fetch.userAgent":"Web Fetch User-Agent","gateway.controlUi.basePath":"Control UI Base Path","gateway.controlUi.root":"Control UI Assets Root","gateway.controlUi.allowedOrigins":"Control UI Allowed Origins","gateway.controlUi.allowInsecureAuth":"Allow Insecure Control UI Auth","gateway.controlUi.dangerouslyDisableDeviceAuth":"Dangerously Disable Control UI Device Auth","gateway.http.endpoints.chatCompletions.enabled":"OpenAI Chat Completions Endpoint","gateway.reload.mode":"Config Reload Mode","gateway.reload.debounceMs":"Config Reload Debounce (ms)","gateway.nodes.browser.mode":"Gateway Node Browser Mode","gateway.nodes.browser.node":"Gateway Node Browser Pin","gateway.nodes.allowCommands":"Gateway Node Allowlist (Extra Commands)","gateway.nodes.denyCommands":"Gateway Node Denylist","nodeHost.browserProxy.enabled":"Node Browser Proxy Enabled","nodeHost.browserProxy.allowProfiles":"Node Browser Proxy Allowed Profiles","skills.load.watch":"Watch Skills","skills.load.watchDebounceMs":"Skills Watch Debounce (ms)","agents.defaults.workspace":"Workspace","agents.defaults.repoRoot":"Repo Root","agents.defaults.bootstrapMaxChars":"Bootstrap Max Chars","agents.defaults.envelopeTimezone":"Envelope Timezone","agents.defaults.envelopeTimestamp":"Envelope Timestamp","agents.defaults.envelopeElapsed":"Envelope Elapsed","agents.defaults.memorySearch":"Memory Search","agents.defaults.memorySearch.enabled":"Enable Memory Search","agents.defaults.memorySearch.sources":"Memory Search Sources","agents.defaults.memorySearch.extraPaths":"Extra Memory Paths","agents.defaults.memorySearch.experimental.sessionMemory":"Memory Search Session Index (Experimental)","agents.defaults.memorySearch.provider":"Memory Search Provider","agents.defaults.memorySearch.remote.baseUrl":"Remote Embedding Base URL","agents.defaults.memorySearch.remote.apiKey":"Remote Embedding API Key","agents.defaults.memorySearch.remote.headers":"Remote Embedding Headers","agents.defaults.memorySearch.remote.batch.concurrency":"Remote Batch Concurrency","agents.defaults.memorySearch.model":"Memory Search Model","agents.defaults.memorySearch.fallback":"Memory Search Fallback","agents.defaults.memorySearch.local.modelPath":"Local Embedding Model Path","agents.defaults.memorySearch.store.path":"Memory Search Index Path","agents.defaults.memorySearch.store.vector.enabled":"Memory Search Vector Index","agents.defaults.memorySearch.store.vector.extensionPath":"Memory Search Vector Extension Path","agents.defaults.memorySearch.chunking.tokens":"Memory Chunk Tokens","agents.defaults.memorySearch.chunking.overlap":"Memory Chunk Overlap Tokens","agents.defaults.memorySearch.sync.onSessionStart":"Index on Session Start","agents.defaults.memorySearch.sync.onSearch":"Index on Search (Lazy)","agents.defaults.memorySearch.sync.watch":"Watch Memory Files","agents.defaults.memorySearch.sync.watchDebounceMs":"Memory Watch Debounce (ms)","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Session Delta Bytes","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Session Delta Messages","agents.defaults.memorySearch.query.maxResults":"Memory Search Max Results","agents.defaults.memorySearch.query.minScore":"Memory Search Min Score","agents.defaults.memorySearch.query.hybrid.enabled":"Memory Search Hybrid","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Memory Search Vector Weight","agents.defaults.memorySearch.query.hybrid.textWeight":"Memory Search Text Weight","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Memory Search Hybrid Candidate Multiplier","agents.defaults.memorySearch.cache.enabled":"Memory Search Embedding Cache","agents.defaults.memorySearch.cache.maxEntries":"Memory Search Embedding Cache Max Entries",memory:"Memory","memory.backend":"Memory Backend","memory.citations":"Memory Citations Mode","memory.qmd.command":"QMD Binary","memory.qmd.includeDefaultMemory":"QMD Include Default Memory","memory.qmd.paths":"QMD Extra Paths","memory.qmd.paths.path":"QMD Path","memory.qmd.paths.pattern":"QMD Path Pattern","memory.qmd.paths.name":"QMD Path Name","memory.qmd.sessions.enabled":"QMD Session Indexing","memory.qmd.sessions.exportDir":"QMD Session Export Directory","memory.qmd.sessions.retentionDays":"QMD Session Retention (days)","memory.qmd.update.interval":"QMD Update Interval","memory.qmd.update.debounceMs":"QMD Update Debounce (ms)","memory.qmd.update.onBoot":"QMD Update on Startup","memory.qmd.update.embedInterval":"QMD Embed Interval","memory.qmd.limits.maxResults":"QMD Max Results","memory.qmd.limits.maxSnippetChars":"QMD Max Snippet Chars","memory.qmd.limits.maxInjectedChars":"QMD Max Injected Chars","memory.qmd.limits.timeoutMs":"QMD Search Timeout (ms)","memory.qmd.scope":"QMD Surface Scope","auth.profiles":"Auth Profiles","auth.order":"Auth Profile Order","auth.cooldowns.billingBackoffHours":"Billing Backoff (hours)","auth.cooldowns.billingBackoffHoursByProvider":"Billing Backoff Overrides","auth.cooldowns.billingMaxHours":"Billing Backoff Cap (hours)","auth.cooldowns.failureWindowHours":"Failover Window (hours)","agents.defaults.models":"Models","agents.defaults.model.primary":"Primary Model","agents.defaults.model.fallbacks":"Model Fallbacks","agents.defaults.imageModel.primary":"Image Model","agents.defaults.imageModel.fallbacks":"Image Model Fallbacks","agents.defaults.humanDelay.mode":"Human Delay Mode","agents.defaults.humanDelay.minMs":"Human Delay Min (ms)","agents.defaults.humanDelay.maxMs":"Human Delay Max (ms)","agents.defaults.cliBackends":"CLI Backends","commands.native":"Native Commands","commands.nativeSkills":"Native Skill Commands","commands.text":"Text Commands","commands.bash":"Allow Bash Chat Command","commands.bashForegroundMs":"Bash Foreground Window (ms)","commands.config":"Allow /config","commands.debug":"Allow /debug","commands.restart":"Allow Restart","commands.useAccessGroups":"Use Access Groups","commands.ownerAllowFrom":"Command Owners","ui.seamColor":"Accent Color","ui.assistant.name":"Assistant Name","ui.assistant.avatar":"Assistant Avatar","browser.evaluateEnabled":"Browser Evaluate Enabled","browser.snapshotDefaults":"Browser Snapshot Defaults","browser.snapshotDefaults.mode":"Browser Snapshot Mode","browser.remoteCdpTimeoutMs":"Remote CDP Timeout (ms)","browser.remoteCdpHandshakeTimeoutMs":"Remote CDP Handshake Timeout (ms)","session.dmScope":"DM Session Scope","session.agentToAgent.maxPingPongTurns":"Agent-to-Agent Ping-Pong Turns","messages.ackReaction":"Ack Reaction Emoji","messages.ackReactionScope":"Ack Reaction Scope","messages.inbound.debounceMs":"Inbound Message Debounce (ms)","talk.apiKey":"Talk API Key","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram Custom Commands","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram Bot Token","channels.telegram.dmPolicy":"Telegram DM Policy","channels.telegram.streamMode":"Telegram Draft Stream Mode","channels.telegram.draftChunk.minChars":"Telegram Draft Chunk Min Chars","channels.telegram.draftChunk.maxChars":"Telegram Draft Chunk Max Chars","channels.telegram.draftChunk.breakPreference":"Telegram Draft Chunk Break Preference","channels.telegram.retry.attempts":"Telegram Retry Attempts","channels.telegram.retry.minDelayMs":"Telegram Retry Min Delay (ms)","channels.telegram.retry.maxDelayMs":"Telegram Retry Max Delay (ms)","channels.telegram.retry.jitter":"Telegram Retry Jitter","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API Timeout (seconds)","channels.telegram.capabilities.inlineButtons":"Telegram Inline Buttons","channels.whatsapp.dmPolicy":"WhatsApp DM Policy","channels.whatsapp.selfChatMode":"WhatsApp Self-Phone Mode","channels.whatsapp.debounceMs":"WhatsApp Message Debounce (ms)","channels.signal.dmPolicy":"Signal DM Policy","channels.imessage.dmPolicy":"iMessage DM Policy","channels.bluebubbles.dmPolicy":"BlueBubbles DM Policy","channels.discord.dm.policy":"Discord DM Policy","channels.discord.retry.attempts":"Discord Retry Attempts","channels.discord.retry.minDelayMs":"Discord Retry Min Delay (ms)","channels.discord.retry.maxDelayMs":"Discord Retry Max Delay (ms)","channels.discord.retry.jitter":"Discord Retry Jitter","channels.discord.maxLinesPerMessage":"Discord Max Lines Per Message","channels.discord.intents.presence":"Discord Presence Intent","channels.discord.intents.guildMembers":"Discord Guild Members Intent","channels.discord.pluralkit.enabled":"Discord PluralKit Enabled","channels.discord.pluralkit.token":"Discord PluralKit Token","channels.slack.dm.policy":"Slack DM Policy","channels.slack.allowBots":"Slack Allow Bot Messages","channels.discord.token":"Discord Bot Token","channels.slack.botToken":"Slack Bot Token","channels.slack.appToken":"Slack App Token","channels.slack.userToken":"Slack User Token","channels.slack.userTokenReadOnly":"Slack User Token Read Only","channels.slack.thread.historyScope":"Slack Thread History Scope","channels.slack.thread.inheritParent":"Slack Thread Parent Inheritance","channels.mattermost.botToken":"Mattermost Bot Token","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost Chat Mode","channels.mattermost.oncharPrefixes":"Mattermost Onchar Prefixes","channels.mattermost.requireMention":"Mattermost Require Mention","channels.signal.account":"Signal Account","channels.imessage.cliPath":"iMessage CLI Path","agents.list[].skills":"Agent Skill Filter","agents.list[].identity.avatar":"Agent Avatar","discovery.mdns.mode":"mDNS Discovery Mode","plugins.enabled":"Enable Plugins","plugins.allow":"Plugin Allowlist","plugins.deny":"Plugin Denylist","plugins.load.paths":"Plugin Load Paths","plugins.slots":"Plugin Slots","plugins.slots.memory":"Memory Plugin","plugins.entries":"Plugin Entries","plugins.entries.*.enabled":"Plugin Enabled","plugins.entries.*.config":"Plugin Config","plugins.installs":"Plugin Install Records","plugins.installs.*.source":"Plugin Install Source","plugins.installs.*.spec":"Plugin Install Spec","plugins.installs.*.sourcePath":"Plugin Install Source Path","plugins.installs.*.installPath":"Plugin Install Path","plugins.installs.*.version":"Plugin Install Version","plugins.installs.*.installedAt":"Plugin Install Time"},zh:{"meta.lastTouchedVersion":"配置最后触及版本","meta.lastTouchedAt":"配置最后触及时间","update.channel":"更新渠道","update.checkOnStart":"启动时检查更新","diagnostics.enabled":"诊断已启用","diagnostics.flags":"诊断标志","diagnostics.otel.enabled":"OpenTelemetry 已启用","diagnostics.otel.endpoint":"OpenTelemetry 端点","diagnostics.otel.protocol":"OpenTelemetry 协议","diagnostics.otel.headers":"OpenTelemetry 请求头","diagnostics.otel.serviceName":"OpenTelemetry 服务名","diagnostics.otel.traces":"OpenTelemetry 链路已启用","diagnostics.otel.metrics":"OpenTelemetry 指标已启用","diagnostics.otel.logs":"OpenTelemetry 日志已启用","diagnostics.otel.sampleRate":"OpenTelemetry 采样率","diagnostics.otel.flushIntervalMs":"OpenTelemetry 刷新间隔（毫秒）","diagnostics.cacheTrace.enabled":"缓存追踪已启用","diagnostics.cacheTrace.filePath":"缓存追踪文件路径","diagnostics.cacheTrace.includeMessages":"缓存追踪包含消息","diagnostics.cacheTrace.includePrompt":"缓存追踪包含提示","diagnostics.cacheTrace.includeSystem":"缓存追踪包含系统","agents.list.*.identity.avatar":"身份头像","agents.list.*.skills":"代理技能筛选","gateway.remote.url":"远程网关 URL","gateway.remote.sshTarget":"远程网关 SSH 目标","gateway.remote.sshIdentity":"远程网关 SSH 身份","gateway.remote.token":"远程网关令牌","gateway.remote.password":"远程网关密码","gateway.remote.tlsFingerprint":"远程网关 TLS 指纹","gateway.auth.token":"网关令牌(访问远程服务需要从~/.openocta/openocta.json中获取)","gateway.auth.password":"网关密码","tools.media.image.enabled":"启用图像理解","tools.media.image.maxBytes":"图像理解最大字节","tools.media.image.maxChars":"图像理解最大字符","tools.media.image.prompt":"图像理解提示","tools.media.image.timeoutSeconds":"图像理解超时（秒）","tools.media.image.attachments":"图像理解附件策略","tools.media.image.models":"图像理解模型","tools.media.image.scope":"图像理解范围","tools.media.models":"媒体理解共享模型","tools.media.concurrency":"媒体理解并发数","tools.media.audio.enabled":"启用音频理解","tools.media.audio.maxBytes":"音频理解最大字节","tools.media.audio.maxChars":"音频理解最大字符","tools.media.audio.prompt":"音频理解提示","tools.media.audio.timeoutSeconds":"音频理解超时（秒）","tools.media.audio.language":"音频理解语言","tools.media.audio.attachments":"音频理解附件策略","tools.media.audio.models":"音频理解模型","tools.media.audio.scope":"音频理解范围","tools.media.video.enabled":"启用视频理解","tools.media.video.maxBytes":"视频理解最大字节","tools.media.video.maxChars":"视频理解最大字符","tools.media.video.prompt":"视频理解提示","tools.media.video.timeoutSeconds":"视频理解超时（秒）","tools.media.video.attachments":"视频理解附件策略","tools.media.video.models":"视频理解模型","tools.media.video.scope":"视频理解范围","tools.links.enabled":"启用链接理解","tools.links.maxLinks":"链接理解最大数量","tools.links.timeoutSeconds":"链接理解超时（秒）","tools.links.models":"链接理解模型","tools.links.scope":"链接理解范围","tools.profile":"工具配置集","tools.alsoAllow":"工具允许列表附加","agents.list[].tools.profile":"代理工具配置集","agents.list[].tools.alsoAllow":"代理工具允许列表附加","tools.byProvider":"按提供方的工具策略","agents.list[].tools.byProvider":"代理按提供方的工具策略","tools.exec.applyPatch.enabled":"启用 apply_patch","tools.exec.applyPatch.allowModels":"apply_patch 模型允许列表","tools.exec.notifyOnExit":"Exec 退出时通知","tools.exec.approvalRunningNoticeMs":"Exec 审批运行提示（毫秒）","tools.exec.host":"Exec 主机","tools.exec.security":"Exec 安全","tools.exec.ask":"Exec 询问","tools.exec.node":"Exec 节点绑定","tools.exec.pathPrepend":"Exec PATH 前置","tools.exec.safeBins":"Exec 安全二进制","tools.message.allowCrossContextSend":"允许跨上下文发送","tools.message.crossContext.allowWithinProvider":"允许跨上下文（同提供方）","tools.message.crossContext.allowAcrossProviders":"允许跨上下文（跨提供方）","tools.message.crossContext.marker.enabled":"跨上下文标记","tools.message.crossContext.marker.prefix":"跨上下文标记前缀","tools.message.crossContext.marker.suffix":"跨上下文标记后缀","tools.message.broadcast.enabled":"启用消息广播","tools.web.search.enabled":"启用网页搜索工具","tools.web.search.provider":"网页搜索提供方","tools.web.search.apiKey":"Brave 搜索 API 密钥","tools.web.search.maxResults":"网页搜索最大结果数","tools.web.search.timeoutSeconds":"网页搜索超时（秒）","tools.web.search.cacheTtlMinutes":"网页搜索缓存 TTL（分钟）","tools.web.fetch.enabled":"启用网页抓取工具","tools.web.fetch.maxChars":"网页抓取最大字符","tools.web.fetch.timeoutSeconds":"网页抓取超时（秒）","tools.web.fetch.cacheTtlMinutes":"网页抓取缓存 TTL（分钟）","tools.web.fetch.maxRedirects":"网页抓取最大重定向","tools.web.fetch.userAgent":"网页抓取 User-Agent","gateway.controlUi.basePath":"控制台 UI 基础路径","gateway.controlUi.root":"控制台 UI 资源根目录","gateway.controlUi.allowedOrigins":"控制台 UI 允许来源","gateway.controlUi.allowInsecureAuth":"允许控制台 UI 非安全认证","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险：禁用控制台 UI 设备认证","gateway.http.endpoints.chatCompletions.enabled":"OpenAI 对话补全端点","gateway.reload.mode":"配置重载模式","gateway.reload.debounceMs":"配置重载防抖（毫秒）","gateway.nodes.browser.mode":"网关节点浏览器模式","gateway.nodes.browser.node":"网关节点浏览器固定","gateway.nodes.allowCommands":"网关节点允许列表（额外命令）","gateway.nodes.denyCommands":"网关节点拒绝列表","nodeHost.browserProxy.enabled":"节点浏览器代理已启用","nodeHost.browserProxy.allowProfiles":"节点浏览器代理允许配置集","skills.load.watch":"监听技能","skills.load.watchDebounceMs":"技能监听防抖（毫秒）","agents.defaults.workspace":"工作区","agents.defaults.repoRoot":"仓库根目录","agents.defaults.bootstrapMaxChars":"引导最大字符","agents.defaults.envelopeTimezone":"信封时区","agents.defaults.envelopeTimestamp":"信封时间戳","agents.defaults.envelopeElapsed":"信封耗时","agents.defaults.memorySearch":"记忆搜索","agents.defaults.memorySearch.enabled":"启用记忆搜索","agents.defaults.memorySearch.sources":"记忆搜索来源","agents.defaults.memorySearch.extraPaths":"记忆搜索额外路径","agents.defaults.memorySearch.experimental.sessionMemory":"记忆搜索会话索引（实验）","agents.defaults.memorySearch.provider":"记忆搜索提供方","agents.defaults.memorySearch.remote.baseUrl":"远程嵌入 Base URL","agents.defaults.memorySearch.remote.apiKey":"远程嵌入 API 密钥","agents.defaults.memorySearch.remote.headers":"远程嵌入请求头","agents.defaults.memorySearch.remote.batch.concurrency":"远程批处理并发数","agents.defaults.memorySearch.model":"记忆搜索模型","agents.defaults.memorySearch.fallback":"记忆搜索回退","agents.defaults.memorySearch.local.modelPath":"本地嵌入模型路径","agents.defaults.memorySearch.store.path":"记忆搜索索引路径","agents.defaults.memorySearch.store.vector.enabled":"记忆搜索向量索引","agents.defaults.memorySearch.store.vector.extensionPath":"记忆搜索向量扩展路径","agents.defaults.memorySearch.chunking.tokens":"记忆分块词数","agents.defaults.memorySearch.chunking.overlap":"记忆分块重叠词数","agents.defaults.memorySearch.sync.onSessionStart":"会话开始时建索引","agents.defaults.memorySearch.sync.onSearch":"搜索时建索引（懒加载）","agents.defaults.memorySearch.sync.watch":"监听记忆文件","agents.defaults.memorySearch.sync.watchDebounceMs":"记忆监听防抖（毫秒）","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话增量字节","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话增量消息","agents.defaults.memorySearch.query.maxResults":"记忆搜索最大结果数","agents.defaults.memorySearch.query.minScore":"记忆搜索最低分","agents.defaults.memorySearch.query.hybrid.enabled":"记忆搜索混合模式","agents.defaults.memorySearch.query.hybrid.vectorWeight":"记忆搜索向量权重","agents.defaults.memorySearch.query.hybrid.textWeight":"记忆搜索文本权重","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"记忆搜索混合候选倍数","agents.defaults.memorySearch.cache.enabled":"记忆搜索嵌入缓存","agents.defaults.memorySearch.cache.maxEntries":"记忆搜索嵌入缓存最大条数",memory:"记忆","memory.backend":"记忆后端","memory.citations":"记忆引用模式","memory.qmd.command":"QMD 可执行文件","memory.qmd.includeDefaultMemory":"QMD 包含默认记忆","memory.qmd.paths":"QMD 额外路径","memory.qmd.paths.path":"QMD 路径","memory.qmd.paths.pattern":"QMD 路径模式","memory.qmd.paths.name":"QMD 路径名称","memory.qmd.sessions.enabled":"QMD 会话索引","memory.qmd.sessions.exportDir":"QMD 会话导出目录","memory.qmd.sessions.retentionDays":"QMD 会话保留（天）","memory.qmd.update.interval":"QMD 更新间隔","memory.qmd.update.debounceMs":"QMD 更新防抖（毫秒）","memory.qmd.update.onBoot":"QMD 启动时更新","memory.qmd.update.embedInterval":"QMD 嵌入间隔","memory.qmd.limits.maxResults":"QMD 最大结果数","memory.qmd.limits.maxSnippetChars":"QMD 最大片段字符","memory.qmd.limits.maxInjectedChars":"QMD 最大注入字符","memory.qmd.limits.timeoutMs":"QMD 搜索超时（毫秒）","memory.qmd.scope":"QMD 作用范围","auth.profiles":"认证配置集","auth.order":"认证配置顺序","auth.cooldowns.billingBackoffHours":"计费退避（小时）","auth.cooldowns.billingBackoffHoursByProvider":"计费退避覆盖","auth.cooldowns.billingMaxHours":"计费退避上限（小时）","auth.cooldowns.failureWindowHours":"故障窗口（小时）","agents.defaults.models":"模型","agents.defaults.model.primary":"主模型","agents.defaults.model.fallbacks":"模型回退","agents.defaults.imageModel.primary":"图像模型","agents.defaults.imageModel.fallbacks":"图像模型回退","agents.defaults.humanDelay.mode":"人工延迟模式","agents.defaults.humanDelay.minMs":"人工延迟最小（毫秒）","agents.defaults.humanDelay.maxMs":"人工延迟最大（毫秒）","agents.defaults.cliBackends":"CLI 后端","commands.native":"原生命令","commands.nativeSkills":"原生技能命令","commands.text":"文本命令","commands.bash":"允许 Bash 聊天命令","commands.bashForegroundMs":"Bash 前台窗口（毫秒）","commands.config":"允许 /config","commands.debug":"允许 /debug","commands.restart":"允许重启","commands.useAccessGroups":"使用访问组","commands.ownerAllowFrom":"命令所有者","ui.seamColor":"强调色","ui.assistant.name":"助手名称","ui.assistant.avatar":"助手头像","browser.evaluateEnabled":"浏览器执行已启用","browser.snapshotDefaults":"浏览器快照默认","browser.snapshotDefaults.mode":"浏览器快照模式","browser.remoteCdpTimeoutMs":"远程 CDP 超时（毫秒）","browser.remoteCdpHandshakeTimeoutMs":"远程 CDP 握手超时（毫秒）","session.dmScope":"私信会话范围","session.agentToAgent.maxPingPongTurns":"代理间乒乓轮数","messages.ackReaction":"确认反应表情","messages.ackReactionScope":"确认反应范围","messages.inbound.debounceMs":"入站消息防抖（毫秒）","talk.apiKey":"语音 API 密钥","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram 自定义命令","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram 机器人令牌","channels.telegram.dmPolicy":"Telegram 私信策略","channels.telegram.streamMode":"Telegram 草稿流模式","channels.telegram.draftChunk.minChars":"Telegram 草稿块最小字符","channels.telegram.draftChunk.maxChars":"Telegram 草稿块最大字符","channels.telegram.draftChunk.breakPreference":"Telegram 草稿块断行偏好","channels.telegram.retry.attempts":"Telegram 重试次数","channels.telegram.retry.minDelayMs":"Telegram 重试最小延迟（毫秒）","channels.telegram.retry.maxDelayMs":"Telegram 重试最大延迟（毫秒）","channels.telegram.retry.jitter":"Telegram 重试抖动","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API 超时（秒）","channels.telegram.capabilities.inlineButtons":"Telegram 内联按钮","channels.whatsapp.dmPolicy":"WhatsApp 私信策略","channels.whatsapp.selfChatMode":"WhatsApp 自聊模式","channels.whatsapp.debounceMs":"WhatsApp 消息防抖（毫秒）","channels.signal.dmPolicy":"Signal 私信策略","channels.imessage.dmPolicy":"iMessage 私信策略","channels.bluebubbles.dmPolicy":"BlueBubbles 私信策略","channels.discord.dm.policy":"Discord 私信策略","channels.discord.retry.attempts":"Discord 重试次数","channels.discord.retry.minDelayMs":"Discord 重试最小延迟（毫秒）","channels.discord.retry.maxDelayMs":"Discord 重试最大延迟（毫秒）","channels.discord.retry.jitter":"Discord 重试抖动","channels.discord.maxLinesPerMessage":"Discord 每消息最大行数","channels.discord.intents.presence":"Discord 在线状态意图","channels.discord.intents.guildMembers":"Discord 频道成员意图","channels.discord.pluralkit.enabled":"Discord PluralKit 已启用","channels.discord.pluralkit.token":"Discord PluralKit 令牌","channels.slack.dm.policy":"Slack 私信策略","channels.slack.allowBots":"Slack 允许机器人消息","channels.discord.token":"Discord 机器人令牌","channels.slack.botToken":"Slack 机器人令牌","channels.slack.appToken":"Slack 应用令牌","channels.slack.userToken":"Slack 用户令牌","channels.slack.userTokenReadOnly":"Slack 用户令牌只读","channels.slack.thread.historyScope":"Slack 线程历史范围","channels.slack.thread.inheritParent":"Slack 线程继承父级","channels.mattermost.botToken":"Mattermost 机器人令牌","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost 聊天模式","channels.mattermost.oncharPrefixes":"Mattermost 触发前缀","channels.mattermost.requireMention":"Mattermost 需要 @ 提及","channels.signal.account":"Signal 账号","channels.imessage.cliPath":"iMessage CLI 路径","agents.list[].skills":"代理技能筛选","agents.list[].identity.avatar":"代理头像","discovery.mdns.mode":"mDNS 发现模式","plugins.enabled":"启用插件","plugins.allow":"插件允许列表","plugins.deny":"插件拒绝列表","plugins.load.paths":"插件加载路径","plugins.slots":"插件槽位","plugins.slots.memory":"记忆插件","plugins.entries":"插件条目","plugins.entries.*.enabled":"插件已启用","plugins.entries.*.config":"插件配置","plugins.installs":"插件安装记录","plugins.installs.*.source":"插件安装来源","plugins.installs.*.spec":"插件安装规格","plugins.installs.*.sourcePath":"插件安装源路径","plugins.installs.*.installPath":"插件安装路径","plugins.installs.*.version":"插件安装版本","plugins.installs.*.installedAt":"插件安装时间"}};function nt(e,t){const n=Ds(),s=qy[n];for(const a of Ky(e)){const o=s[a];if(o)return o}return t}const Vy=new Set(["title","description","default","nullable"]);function jy(e){return Object.keys(e??{}).filter(n=>!Vy.has(n)).length===0}function co(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const Ot={chevronDown:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:r`
    ${z.plus}
  `,minus:r`
    ${z.minus}
  `,trash:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function pt(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:i,onPatch:c}=e,d=e.showLabel??!0,p=et(t),m=Ee(s,a),g=nt(s,m?.label??t.title??ze(String(s.at(-1)))),f=tt(s,m?.help??t.description??""),$=mn(s);if(o.has($))return r`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">${l("configUnsupportedSchemaNode")}</div>
    </div>`;if(t.anyOf||t.oneOf){const w=(t.anyOf??t.oneOf??[]).filter(O=>!(O.type==="null"||Array.isArray(O.type)&&O.type.includes("null")));if(w.length===1)return pt({...e,schema:w[0]});const C=O=>{if(O.const!==void 0)return O.const;if(O.enum&&O.enum.length===1)return O.enum[0]},L=w.map(C),P=L.every(O=>O!==void 0);if(P&&L.length>0&&L.length<=5){const O=n??t.default;return r`
        <div class="cfg-field">
          ${d?r`<label class="cfg-field__label">${g}</label>`:k}
          ${f?r`<div class="cfg-field__help">${f}</div>`:k}
          <div class="cfg-segmented">
            ${L.map(D=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${D===O||String(D)===String(O)?"active":""}"
                ?disabled=${i}
                @click=${()=>c(s,D)}
              >
                ${String(D)}
              </button>
            `)}
          </div>
        </div>
      `}if(P&&L.length>5)return Hl({...e,options:L,value:n??t.default});const U=new Set(w.map(O=>et(O)).filter(Boolean)),R=new Set([...U].map(O=>O==="integer"?"number":O));if([...R].every(O=>["string","number","boolean"].includes(O))){const O=R.has("string"),D=R.has("number");if(R.has("boolean")&&R.size===1)return pt({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(O||D)return Wl({...e,inputType:D&&!O?"number":"text"})}}if(t.enum){const S=t.enum;if(S.length<=5){const w=n??t.default;return r`
        <div class="cfg-field">
          ${d?r`<label class="cfg-field__label">${g}</label>`:k}
          ${f?r`<div class="cfg-field__help">${f}</div>`:k}
          <div class="cfg-segmented">
            ${S.map(C=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${C===w||String(C)===String(w)?"active":""}"
                ?disabled=${i}
                @click=${()=>c(s,C)}
              >
                ${String(C)}
              </button>
            `)}
          </div>
        </div>
      `}return Hl({...e,options:S,value:n??t.default})}if(p==="object")return Yy(e);if(p==="array")return Zy(e);if(p==="boolean"){const S=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return r`
      <label class="cfg-toggle-row ${i?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${g}</span>
          ${f?r`<span class="cfg-toggle-row__help">${f}</span>`:k}
        </div>
        <div class="cfg-toggle">
          <span class="checkbox"><input
            type="checkbox"
            .checked=${S}
            ?disabled=${i}
            @change=${w=>c(s,w.target.checked)}
          /><span class="cfg-toggle__track"></span></span>
        </div>
      </label>
    `}return p==="number"||p==="integer"?Jy(e):p==="string"?Wl({...e,inputType:"text"}):r`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported type: ${p}. Use Raw mode.</div>
    </div>
  `}function Wl(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:i,inputType:c}=e,d=e.showLabel??!0,p=Ee(s,a),m=nt(s,p?.label??t.title??ze(String(s.at(-1)))),g=tt(s,p?.help??t.description??""),f=p?.sensitive??Hy(s),$=p?.placeholder??(f?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),S=n??"";return r`
    <div class="cfg-field">
      ${d?r`<label class="cfg-field__label">${m}</label>`:k}
      ${g?r`<div class="cfg-field__help">${g}</div>`:k}
      <div class="cfg-input-wrap">
        <span class="input"><input
          type=${f?"password":c}
          class="cfg-input"
          placeholder=${$}
          .value=${S==null?"":String(S)}
          ?disabled=${o}
          @input=${w=>{const C=w.target.value;if(c==="number"){if(C.trim()===""){i(s,void 0);return}const L=Number(C);i(s,Number.isNaN(L)?C:L);return}i(s,C)}}
          @change=${w=>{if(c==="number")return;const C=w.target.value;i(s,C.trim())}}
        /></span>
        ${t.default!==void 0?r`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${o}
            @click=${()=>i(s,t.default)}
          >↺</button>
        `:k}
      </div>
    </div>
  `}function Gy(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:i}=e,c=e.showLabel??!0,d=Ee(s,a),p=nt(s,d?.label??t.title??ze(String(s.at(-1)))),m=tt(s,d?.help??t.description??""),g=n??t.default;let f;if(typeof g=="string")try{f=JSON.stringify(JSON.parse(g),null,2)}catch{f=g}else f=co(g);return r`
    <div class="cfg-field">
      ${c?r`<label class="cfg-field__label">${p}</label>`:k}
      ${m?r`<div class="cfg-field__help">${m}</div>`:k}
      <div class="cfg-input-wrap cfg-input-wrap--textarea">
        <span class="textarea"><textarea
          class="cfg-textarea cfg-textarea--json"
          rows="6"
          placeholder="{}"
          .value=${f}
          ?disabled=${o}
          @input=${$=>{const S=$.target.value;if(S.trim()===""){i(s,void 0);return}try{i(s,JSON.parse(S))}catch{}}}
          @change=${$=>{const S=$.target.value.trim();if(!S){i(s,void 0);return}try{i(s,JSON.parse(S))}catch{const w=$.target;w.value=co(n??t.default)}}}
        ></textarea></span>
        ${t.default!==void 0?r`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${o}
            @click=${()=>i(s,t.default)}
          >↺</button>
        `:k}
      </div>
    </div>
  `}function Jy(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:i}=e,c=e.showLabel??!0,d=Ee(s,a),p=nt(s,d?.label??t.title??ze(String(s.at(-1)))),m=tt(s,d?.help??t.description??""),g=n??t.default??"",f=typeof g=="number"?g:0;return r`
    <div class="cfg-field">
      ${c?r`<label class="cfg-field__label">${p}</label>`:k}
      ${m?r`<div class="cfg-field__help">${m}</div>`:k}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          aria-label="减少"
          ?disabled=${o}
          @click=${()=>i(s,f-1)}
        >${Ot.minus}</button>
        <span class="input"><input
          type="number"
          class="cfg-number__input"
          .value=${g==null?"":String(g)}
          ?disabled=${o}
          @input=${$=>{const S=$.target.value,w=S===""?void 0:Number(S);i(s,w)}}
        /></span>
        <button
          type="button"
          class="cfg-number__btn"
          aria-label="增加"
          ?disabled=${o}
          @click=${()=>i(s,f+1)}
        >${Ot.plus}</button>
      </div>
    </div>
  `}function Hl(e){const{schema:t,value:n,path:s,hints:a,disabled:o,options:i,onPatch:c}=e,d=e.showLabel??!0,p=Ee(s,a),m=nt(s,p?.label??t.title??ze(String(s.at(-1)))),g=tt(s,p?.help??t.description??""),f=n??t.default,$=i.findIndex(w=>w===f||String(w)===String(f)),S="__unset__";return r`
    <div class="cfg-field">
      ${d?r`<label class="cfg-field__label">${m}</label>`:k}
      ${g?r`<div class="cfg-field__help">${g}</div>`:k}
      <span class="select"><select
        class="cfg-select"
        ?disabled=${o}
        .value=${$>=0?String($):S}
        @change=${w=>{const C=w.target.value;c(s,C===S?void 0:i[Number(C)])}}
      >
        <option value=${S}>Select...</option>
        ${i.map((w,C)=>r`
          <option value=${String(C)}>${String(w)}</option>
        `)}
      </select></span>
    </div>
  `}function Yy(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:i,onPatch:c}=e,d=t.properties??{};if(Object.keys(d).length===0&&t.additionalProperties===!0)return Gy({schema:{...t,format:"json"},value:n,path:s,hints:a,disabled:i,showLabel:e.showLabel,onPatch:c});const m=Ee(s,a),g=nt(s,m?.label??t.title??ze(String(s.at(-1)))),f=tt(s,m?.help??t.description??""),$=n??t.default,S=$&&typeof $=="object"&&!Array.isArray($)?$:{},C=Object.entries(d).toSorted((R,O)=>{const D=Ee([...s,R[0]],a)?.order??0,u=Ee([...s,O[0]],a)?.order??0;return D!==u?D-u:R[0].localeCompare(O[0])}),L=new Set(Object.keys(d)),P=t.additionalProperties,U=!!P&&typeof P=="object";return s.length===1?r`
      <div class="cfg-fields">
        ${C.map(([R,O])=>pt({schema:O,value:S[R],path:[...s,R],hints:a,unsupported:o,disabled:i,onPatch:c}))}
        ${U?zl({schema:P,value:S,path:s,hints:a,unsupported:o,disabled:i,reservedKeys:L,onPatch:c}):k}
      </div>
    `:r`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${g}</span>
        <span class="cfg-object__chevron">${Ot.chevronDown}</span>
      </summary>
      ${f?r`<div class="cfg-object__help">${f}</div>`:k}
      <div class="cfg-object__content">
        ${C.map(([R,O])=>pt({schema:O,value:S[R],path:[...s,R],hints:a,unsupported:o,disabled:i,onPatch:c}))}
        ${U?zl({schema:P,value:S,path:s,hints:a,unsupported:o,disabled:i,reservedKeys:L,onPatch:c}):k}
      </div>
    </details>
  `}function Zy(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:i,onPatch:c}=e,d=e.showLabel??!0,p=Ee(s,a),m=nt(s,p?.label??t.title??ze(String(s.at(-1)))),g=tt(s,p?.help??t.description??""),f=Array.isArray(t.items)?t.items[0]:t.items;if(!f)return r`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${m}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;const $=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return r`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${d?r`<span class="cfg-array__label">${m}</span>`:k}
        <span class="cfg-array__count">${$.length} item${$.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${i}
          @click=${()=>{const S=[...$,Qd(f)];c(s,S)}}
        >
          <span class="cfg-array__add-icon">${Ot.plus}</span>
          Add
        </button>
      </div>
      ${g?r`<div class="cfg-array__help">${g}</div>`:k}

      ${$.length===0?r`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:r`
        <div class="cfg-array__items">
          ${$.map((S,w)=>r`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${w+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${i}
                  @click=${()=>{const C=[...$];C.splice(w,1),c(s,C)}}
                >
                  ${Ot.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${pt({schema:f,value:S,path:[...s,w],hints:a,unsupported:o,disabled:i,showLabel:!1,onPatch:c})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function zl(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:i,reservedKeys:c,onPatch:d}=e,p=jy(t),m=Object.entries(n??{}).filter(([g])=>!c.has(g));return r`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${i}
          @click=${()=>{const g={...n};let f=1,$=`custom-${f}`;for(;$ in g;)f+=1,$=`custom-${f}`;g[$]=p?{}:Qd(t),d(s,g)}}
        >
          <span class="cfg-map__add-icon">${Ot.plus}</span>
          Add Entry
        </button>
      </div>

      ${m.length===0?r`
              <div class="cfg-map__empty">No custom entries.</div>
            `:r`
        <div class="cfg-map__items">
          ${m.map(([g,f])=>{const $=[...s,g],S=co(f);return r`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <span class="input"><input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${g}
                    ?disabled=${i}
                    @change=${w=>{const C=w.target.value.trim();if(!C||C===g)return;const L={...n};C in L||(L[C]=L[g],delete L[g],d(s,L))}}
                  /></span>
                </div>
                <div class="cfg-map__item-value">
                  ${p?r`
                        <span class="textarea"><textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${S}
                          ?disabled=${i}
                          @change=${w=>{const C=w.target,L=C.value.trim();if(!L){d($,void 0);return}try{d($,JSON.parse(L))}catch{C.value=S}}}
                        ></textarea></span>
                      `:pt({schema:t,value:f,path:$,hints:a,unsupported:o,disabled:i,showLabel:!1,onPatch:d})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${i}
                  @click=${()=>{const w={...n};delete w[g],d(s,w)}}
                >
                  ${Ot.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const Ql={env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function Kl(e){return Ql[e]??Ql.default}function Xy(e,t,n){if(!n)return!0;const s=n.toLowerCase(),a=So(e);return e.toLowerCase().includes(s)||a&&(a.label.toLowerCase().includes(s)||a.description.toLowerCase().includes(s))?!0:En(t,s)}function En(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(s=>String(s).toLowerCase().includes(t)))return!0;if(e.properties){for(const[s,a]of Object.entries(e.properties))if(s.toLowerCase().includes(t)||En(a,t))return!0}if(e.items){const s=Array.isArray(e.items)?e.items:[e.items];for(const a of s)if(a&&En(a,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&En(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const s of n)if(s&&En(s,t))return!0}return!1}function eb(e){if(!e.schema)return r`
      <div class="muted">${l("configSchemaUnavailable")}</div>
    `;const t=e.schema,n=e.value??{};if(et(t)!=="object"||!t.properties)return r`
      <div class="callout danger">${l("configUnsupportedSchema")}</div>
    `;const s=new Set(e.unsupportedPaths??[]),a=t.properties,o=e.searchQuery??"",i=e.activeSection,c=e.activeSubsection??null,p=Object.entries(a).toSorted((g,f)=>{const $=Ee([g[0]],e.uiHints)?.order??50,S=Ee([f[0]],e.uiHints)?.order??50;return $!==S?$-S:g[0].localeCompare(f[0])}).filter(([g,f])=>!(i&&g!==i||o&&!Xy(g,f,o)));let m=null;if(i&&c&&p.length===1){const g=p[0]?.[1];g&&et(g)==="object"&&g.properties&&g.properties[c]&&(m={sectionKey:i,subsectionKey:c,schema:g.properties[c]})}return p.length===0?r`
      <div class="config-empty">
        <div class="config-empty__icon">${z.search}</div>
        <div class="config-empty__text">
          ${o?`${l("configNoSettingsMatchPrefix")}${o}${l("configNoSettingsMatchSuffix")}`:l("configNoSettingsInSection")}
        </div>
      </div>
    `:r`
    <div class="config-form config-form--modern">
      ${m?(()=>{const{sectionKey:g,subsectionKey:f,schema:$}=m,S=Ee([g,f],e.uiHints),w=nt([g,f],S?.label??$.title??ze(f)),C=tt([g,f],S?.help??$.description??""),L=n[g],P=L&&typeof L=="object"?L[f]:void 0,U=`config-section-${g}-${f}`;return r`
              <section class="config-section-card" id=${U}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Kl(g)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${w}</h3>
                    ${C?r`<p class="config-section-card__desc">${C}</p>`:k}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${pt({schema:$,value:P,path:[g,f],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():p.map(([g,f])=>{const $=So(g),S=$.label||$.description?$:{label:g.charAt(0).toUpperCase()+g.slice(1),description:f.description??""};return r`
              <section class="config-section-card" id="config-section-${g}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Kl(g)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${S.label}</h3>
                    ${S.description?r`<p class="config-section-card__desc">${S.description}</p>`:k}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${pt({schema:f,value:n[g],path:[g],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const tb=new Set(["title","description","default","nullable"]);function nb(e){return Object.keys(e??{}).filter(n=>!tb.has(n)).length===0}function Kd(e){const t=e.filter(a=>a!=null),n=t.length!==e.length,s=[];for(const a of t)s.some(o=>Object.is(o,a))||s.push(a);return{enumValues:s,nullable:n}}function sb(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:In(e,[])}function In(e,t){const n=new Set,s={...e},a=mn(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const c=ab(e,t);return c||{schema:e,unsupportedPaths:[a]}}const o=Array.isArray(e.type)&&e.type.includes("null"),i=et(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=i??e.type,s.nullable=o||e.nullable,s.enum){const{enumValues:c,nullable:d}=Kd(s.enum);s.enum=c,d&&(s.nullable=!0),c.length===0&&n.add(a)}if(i==="object"){const c=e.properties??{},d={};for(const[m,g]of Object.entries(c)){const f=In(g,[...t,m]);f.schema&&(d[m]=f.schema);for(const $ of f.unsupportedPaths)n.add($)}s.properties=d;const p=Object.keys(c).length===0;if(e.additionalProperties===!0)p||n.add(a);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!nb(e.additionalProperties)){const m=In(e.additionalProperties,[...t,"*"]);s.additionalProperties=m.schema??e.additionalProperties,m.unsupportedPaths.length>0&&n.add(a)}}else if(i==="array"){const c=Array.isArray(e.items)?e.items[0]:e.items;if(!c)n.add(a);else{const d=In(c,[...t,"*"]);s.items=d.schema??c,d.unsupportedPaths.length>0&&n.add(a)}}else i!=="string"&&i!=="number"&&i!=="integer"&&i!=="boolean"&&!s.enum&&n.add(a);return{schema:s,unsupportedPaths:Array.from(n)}}function ab(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],a=[];let o=!1;for(const c of n){if(!c||typeof c!="object")return null;if(Array.isArray(c.enum)){const{enumValues:d,nullable:p}=Kd(c.enum);s.push(...d),p&&(o=!0);continue}if("const"in c){if(c.const==null){o=!0;continue}s.push(c.const);continue}if(et(c)==="null"){o=!0;continue}a.push(c)}if(s.length>0&&a.length===0){const c=[];for(const d of s)c.some(p=>Object.is(p,d))||c.push(d);return{schema:{...e,enum:c,nullable:o,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(a.length===1){const c=In(a[0],t);return c.schema&&(c.schema.nullable=o||c.schema.nullable),c}const i=new Set(["string","number","integer","boolean"]);return a.length>0&&s.length===0&&a.every(c=>c.type&&i.has(String(c.type)))?{schema:{...e,nullable:o},unsupportedPaths:[]}:null}const uo={all:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function ql(){return[{key:"env",label:l("configEnv")},{key:"update",label:l("configUpdate")},{key:"agents",label:l("configAgents")},{key:"auth",label:l("configAuth")},{key:"channels",label:l("configChannels")},{key:"messages",label:l("configMessages")},{key:"commands",label:l("configCommands")},{key:"hooks",label:l("configHooks")},{key:"skills",label:l("configSkills")},{key:"tools",label:l("configTools")},{key:"gateway",label:l("configGateway")},{key:"wizard",label:l("configWizard")},{key:"meta",label:l("configMeta")},{key:"logging",label:l("configLogging")},{key:"browser",label:l("configBrowser")},{key:"ui",label:l("configUi")},{key:"models",label:l("configModels")},{key:"bindings",label:l("configBindings")},{key:"broadcast",label:l("configBroadcast")},{key:"audio",label:l("configAudio")},{key:"session",label:l("configSession")},{key:"cron",label:l("configCron")},{key:"web",label:l("configWeb")},{key:"discovery",label:l("configDiscovery")},{key:"canvasHost",label:l("configCanvasHost")},{key:"talk",label:l("configTalk")},{key:"plugins",label:l("configPlugins")}]}const Vl="__all__";function jl(e){return uo[e]??uo.default}function ob(e,t){const n=So(e);return n||{label:t?.title??ze(e),description:t?.description??""}}function ib(e){const{key:t,schema:n,uiHints:s}=e;if(!n||et(n)!=="object"||!n.properties)return[];const a=Object.entries(n.properties).map(([o,i])=>{const c=Ee([t,o],s),d=nt([t,o],c?.label??i.title??ze(o)),p=tt([t,o],c?.help??i.description??""),m=c?.order??50;return{key:o,label:d,description:p,order:m}});return a.sort((o,i)=>o.order!==i.order?o.order-i.order:o.key.localeCompare(i.key)),a}function lb(e,t){if(!e||!t)return[];const n=[];function s(a,o,i){if(a===o)return;if(typeof a!=typeof o){n.push({path:i,from:a,to:o});return}if(typeof a!="object"||a===null||o===null){a!==o&&n.push({path:i,from:a,to:o});return}if(Array.isArray(a)&&Array.isArray(o)){JSON.stringify(a)!==JSON.stringify(o)&&n.push({path:i,from:a,to:o});return}const c=a,d=o,p=new Set([...Object.keys(c),...Object.keys(d)]);for(const m of p)s(c[m],d[m],i?`${i}.${m}`:m)}return s(e,t,""),n}function Gl(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function rb(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=sb(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,a=n.schema?.properties??{},o=ql().filter(D=>D.key in a),i=new Set(ql().map(D=>D.key)),c=Object.keys(a).filter(D=>!i.has(D)).map(D=>({key:D,label:D.charAt(0).toUpperCase()+D.slice(1)})),d=[...o,...c],p=e.activeSection&&n.schema&&et(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,m=e.activeSection?ob(e.activeSection,p):null,g=e.activeSection?ib({key:e.activeSection,schema:p,uiHints:e.uiHints}):[],f=e.formMode==="form"&&!!e.activeSection&&g.length>0,$=e.activeSubsection===Vl,S=e.searchQuery||$?null:e.activeSubsection??g[0]?.key??null,w=e.formMode==="form"?lb(e.originalValue,e.formValue):[],C=e.formMode==="raw"&&e.raw!==e.originalRaw,L=e.formMode==="form"?w.length>0:C,P=!!e.formValue&&!e.loading&&!!n.schema,U=e.connected&&!e.saving&&L&&(e.formMode==="raw"?!0:P),R=e.connected&&!e.applying&&!e.updating&&L&&(e.formMode==="raw"?!0:P),O=e.connected&&!e.applying&&!e.updating;return r`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">${l("configSettingsTitle")}</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--accent":t==="invalid"?"pill--danger":""}"
            >${l(t==="valid"?"configValidityValid":t==="invalid"?"configValidityInvalid":"configValidityUnknown")}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg
            class="config-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <span class="input"><input
            type="text"
            class="config-search__input"
            placeholder=${l("configSearchPlaceholder")}
            .value=${e.searchQuery}
            @input=${D=>e.onSearchChange(D.target.value)}
          /></span>
          ${e.searchQuery?r`
                <button
                  class="config-search__clear"
                  type="button"
                  aria-label="清空搜索"
                  @click=${()=>e.onSearchChange("")}
                >
                  ${z.x}
                </button>
              `:k}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${uo.all}</span>
            <span class="config-nav__label">${l("configAllSettings")}</span>
          </button>
          ${d.map(D=>r`
              <button
                class="config-nav__item ${e.activeSection===D.key?"active":""}"
                @click=${()=>e.onSectionChange(D.key)}
              >
                <span class="config-nav__icon"
                  >${jl(D.key)}</span
                >
                <span class="config-nav__label">${D.label}</span>
              </button>
            `)}
        </nav>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${L?r`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?l("configUnsavedChanges"):w.length===1?l("configOneUnsavedChange"):`${w.length} ${l("configUnsavedChangesLabel")}`}</span
                  >
                `:r`
                    <span class="config-status muted">${l("configNoChanges")}</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?l("commonLoading"):l("commonReload")}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!U}
              @click=${e.onSave}
            >
              ${e.saving?l("commonSaving"):l("commonSave")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!R}
              @click=${e.onApply}
            >
              ${e.applying?l("configApplying"):l("configApply")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!O}
              @click=${e.onUpdate}
            >
              ${e.updating?l("configUpdating"):l("configUpdateButton")}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${L&&e.formMode==="form"?r`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >${l("configViewPrefix")}${w.length}
                    ${w.length===1?l("configPendingChange"):l("configPendingChanges")}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${w.map(D=>r`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${D.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${Gl(D.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${Gl(D.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:k}
        ${m&&e.formMode==="form"?r`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${jl(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${m.label}
                  </div>
                  ${m.description?r`<div class="config-section-hero__desc">
                        ${m.description}
                      </div>`:k}
                </div>
              </div>
            `:k}
        ${f?r`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${S===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(Vl)}
                >
                  ${l("configSubnavAll")}
                </button>
                ${g.map(D=>r`
                    <button
                      class="config-subnav__item ${S===D.key?"active":""}"
                      title=${D.description||D.label}
                      @click=${()=>e.onSubsectionChange(D.key)}
                    >
                      ${D.label}
                    </button>
                  `)}
              </div>
            `:k}

        <!-- Form content -->
        <div class="config-content ${e.formMode==="raw"?"config-content--raw":""}">
          ${e.formMode==="form"?r`
                ${e.schemaLoading?r`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>${l("configLoadingSchema")}</span>
                        </div>
                      `:eb({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:S})}
                ${s?r`
                        <div class="callout danger" style="margin-top: 12px">
                          ${l("configFormUnsafeWarning")}
                        </div>
                      `:k}
              `:r`
                <label class="field config-raw-field">
                  <span>${l("configRawJson5")}</span>
                  <span class="textarea"><textarea
                    .value=${e.raw}
                    @input=${D=>e.onRawChange(D.target.value)}
                  ></textarea></span>
                </label>
              `}
        </div>

        ${e.issues.length>0?r`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:k}
      </main>
    </div>
  `}function cb(e,t,n,s){const a=Object.entries(e),o=(d,p)=>{const m=Object.keys(e),g=Object.values(e);m[d]=p;const f={};m.forEach(($,S)=>{f[$]=g[S]??""}),n(f)},i=(d,p)=>{const m=Object.keys(e),g=[...Object.values(e)];g[d]=p;const f={};m.forEach(($,S)=>{f[$]=g[S]??""}),n(f)},c=d=>{const p=Object.keys(e).filter((f,$)=>$!==d),m=Object.values(e).filter((f,$)=>$!==d),g={};p.forEach((f,$)=>{g[f]=m[$]??""}),n(g)};return r`
    ${a.length===0?r`
          <p class="env-vars__empty">${l("envVarsEmpty")}</p>
          <button class="btn btn--bg-content" ?disabled=${!t} @click=${s}>
            ${l("envVarsAdd")}
          </button>
        `:r`
          <table class="env-vars__table">
            <thead>
              <tr>
                <th>${l("envVarsKey")}</th>
                <th>${l("envVarsValue")}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${a.map(([d,p],m)=>r`
                  <tr>
                    <td>
                      <span class="input"><input
                        class="env-vars__input"
                        type="text"
                        .value=${d}
                        placeholder=${l("envVarsKeyPlaceholder")}
                        ?disabled=${!t}
                        @input=${g=>{const f=g.target;o(m,f.value)}}
                      /></span>
                    </td>
                    <td>
                      <span class="input"><input
                        class="env-vars__input"
                        type="text"
                        .value=${p}
                        placeholder=${l("envVarsValuePlaceholder")}
                        ?disabled=${!t}
                        @input=${g=>{const f=g.target;i(m,f.value)}}
                      /></span>
                    </td>
                    <td>
                      <button
                        class="btn small btn--ghost env-vars__delete"
                        ?disabled=${!t}
                        @click=${()=>c(m)}
                        title=${l("envVarsDelete")}
                      >
                        ${l("envVarsDelete")}
                      </button>
                    </td>
                  </tr>
                `)}
            </tbody>
          </table>
          <button class="btn btn--bg-content env-vars__add" ?disabled=${!t} @click=${s}>
            ${l("envVarsAdd")}
          </button>
        `}
  `}function db(e){const{vars:t,dirty:n,loading:s,saving:a,connected:o,onVarsChange:i,onSave:c,onReload:d}=e,p=o&&n&&!a&&!s,m=()=>{i({...t,"":""})};return r`
    <div class="env-vars">
      <div class="env-vars__toolbar">
        <button
          class="btn btn--bg-content"
          ?disabled=${s||!o}
          @click=${d}
          title=${l("overviewRefresh")}
        >
          ${s?"…":l("overviewRefresh")}
        </button>
        <button
          class="btn btn--primary"
          ?disabled=${!p}
          @click=${c}
          title=${l("envVarsSave")}
        >
          ${a?"…":l("envVarsSave")}
        </button>
      </div>
      ${n?r`<p class="env-vars__dirty">${l("configUnsavedChanges")}</p>`:k}

      <div class="env-vars__sections">
        <section class="env-vars__section card" style="margin-bottom: 16px;">
          <h3 class="card-title" style="margin-bottom: 8px;">${l("envVarsSection")}</h3>
          <p class="muted" style="font-size: 12px; margin-bottom: 12px;">${l("configEnvVarsDesc")}</p>
          <div class="env-vars__list">
            ${cb(t,o,i,m)}
          </div>
        </section>
      </div>
    </div>
  `}function ub(e){return e?`${Nn(e)} (${Oe(e)})`:"n/a"}function pb(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function mb(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function gb(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${Nn(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${Na(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function At(e){let t=(e??"").trim();return t?(t.toLowerCase().startsWith("local:")&&(t=t.slice(6)),t=t.replaceAll(":","-"),t.trim().toLowerCase()):""}function fb(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(a=>s.has(a)?!1:(s.add(a),!0))}function hb(e,t){if(t==="last")return l("cronLast");const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function vb(e){if(!e)return"n/a";const t=new Date(e);if(Number.isNaN(t.getTime()))return"n/a";const n=s=>String(s).padStart(2,"0");return`${t.getFullYear()}/${t.getMonth()+1}/${t.getDate()} ${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}`}function yb(e){return r`
    <section class="stack cron-config-stack">
      <div class="card">
        <div class="card-title">${l("cronScheduler")}</div>
        <div class="card-sub">${l("cronSchedulerSub")}</div>
        <div class="stat-grid">
          <div class="stat">
            <div class="stat-label">${l("cronEnabled")}</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?l("commonYes"):l("commonNo"):l("commonNA")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${l("cronJobs")}</div>
            <div class="stat-value">${e.status?.jobs??l("commonNA")}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${l("overviewCronNext")}</div>
            <div class="stat-value">${vb(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        ${e.error?r`<div class="muted" style="margin-top: 12px;">${e.error}</div>`:k}
      </div>
    </section>

    <section class="card cron-jobs-card">
      ${e.jobs.length===0?r`
              <div class="muted">${l("cronNoJobsYet")}</div>
            `:r`
            <div class="list">
              ${e.jobs.map(t=>Sb(t,e))}
            </div>
          `}
    </section>
    ${e.addModalOpen?bb(e):k}
    ${e.editModalOpen&&e.editJobId?wb(e,e.editJobId):k}
  `}function bb(e){return r`
    <div class="modal-overlay" @click=${e.onCloseAddModal}>
      <div
        class="modal card emp-detail-modal emp-detail-modal--large cron-config-modal"
        @click=${t=>t.stopPropagation()}
      >
        <div class="emp-detail-modal__header">
          <div class="emp-detail-header" style="flex: 1; min-width: 0;">
            <h1 class="emp-detail-title" style="margin: 0;">${l("cronNewJob")}</h1>
            <div class="emp-detail-summary cron-config-modal__sub">${l("cronNewJobSub")}</div>
          </div>
          <button
            class="emp-detail-modal__close"
            type="button"
            aria-label=${l("commonCancel")}
            @click=${e.onCloseAddModal}
          >
            ${z.x}
          </button>
        </div>
        <div class="cron-config-modal__body">
          ${e.error?r`<div class="callout danger">${e.error}</div>`:k}
          ${qd(e)}
        </div>
        <div class="modal__actions cron-config-modal__actions">
          <button class="btn" @click=${e.onCloseAddModal}>${l("commonCancel")}</button>
          <button
            class="btn primary"
            ?disabled=${e.busy||e.form.payloadKind==="agentTurn"&&!e.form.payloadText.trim()}
            @click=${e.onAdd}
          >
            ${e.busy?l("commonSaving"):l("cronAddJob")}
          </button>
        </div>
      </div>
    </div>
  `}function wb(e,t){return r`
    <div class="modal-overlay" @click=${e.onCloseEditModal??(()=>{})}>
      <div
        class="modal card emp-detail-modal emp-detail-modal--large cron-config-modal"
        @click=${n=>n.stopPropagation()}
      >
        <div class="emp-detail-modal__header">
          <div class="emp-detail-header" style="flex: 1; min-width: 0;">
            <h1 class="emp-detail-title" style="margin: 0;">编辑定时任务</h1>
            <div class="emp-detail-summary cron-config-modal__sub">修改后将立即保存到本地任务配置。</div>
          </div>
          <button
            class="emp-detail-modal__close"
            type="button"
            aria-label=${l("commonCancel")}
            @click=${e.onCloseEditModal??(()=>{})}
          >
            ${z.x}
          </button>
        </div>
        <div class="cron-config-modal__body">
          ${e.error?r`<div class="callout danger">${e.error}</div>`:k}
          ${qd(e)}
        </div>
        <div class="modal__actions cron-config-modal__actions">
          <button class="btn" @click=${e.onCloseEditModal??(()=>{})}>${l("commonCancel")}</button>
          <button
            class="btn primary"
            ?disabled=${e.busy||e.form.payloadKind==="agentTurn"&&!e.form.payloadText.trim()}
            @click=${()=>e.onUpdate?.(t)}
          >
            ${e.busy?l("commonSaving"):"保存修改"}
          </button>
        </div>
      </div>
    </div>
  `}function qd(e){const t=fb(e),n=(e.digitalEmployees??[]).slice().sort((c,d)=>{const p=(c.name??c.id??"").toLowerCase(),m=(d.name??d.id??"").toLowerCase();return p.localeCompare(m)}),s=At(e.form.digitalEmployeeId??""),a=!!e.editModalOpen&&!!e.editJobId,o=s&&n.length?n.find(c=>At(c.id??"").toLowerCase()===s.toLowerCase()):void 0,i=s!==""&&!o&&!e.digitalEmployeesLoading;return r`
    <div class="form-grid">
      <label class="field">
        <span>${l("cronName")}</span>
        <span class="input"><input
          .value=${e.form.name}
          @input=${c=>e.onFormChange({name:c.target.value})}
        /></span>
      </label>
      <label class="field">
        <span>${l("cronDescription")}</span>
        <span class="input"><input
          .value=${e.form.description}
          @input=${c=>e.onFormChange({description:c.target.value})}
        /></span>
      </label>
      <label class="field">
        <span>${l("cronAgentId")}</span>
        <span class="input"><input
          .value=${e.form.agentId}
          @input=${c=>e.onFormChange({agentId:c.target.value})}
          placeholder="default"
        /></span>
      </label>
      <label class="field">
        <span>数字员工</span>
        <span class="select"><select
          @change=${async c=>{const d=c.target,p=At(d.value??""),m=At(e.form.digitalEmployeeId??"");if(a&&m&&!p&&!await Te(`你正在移除该定时任务绑定的数字员工（${m}）。

移除后：后续触发将不再使用该数字员工会话上下文。

确认移除吗？`)){d.value=m;return}e.onFormChange({digitalEmployeeId:p})}}
        >
          <option value="" ?selected=${!s}>（不选择）</option>
          ${n.map(c=>{const d=At(c.id??"");return r`<option value=${d} ?selected=${d===s}>${c.name?`${c.name}（${d}）`:d}</option>`})}
          ${i?r`<option value=${s} ?selected=${!0}>—（已删除：${s}）</option>`:k}
        </select></span>
      </label>
      <label class="field checkbox">
        <span>${l("cronEnabled")}</span>
        <span class="checkbox"><input
          type="checkbox"
          .checked=${e.form.enabled}
          @change=${c=>e.onFormChange({enabled:c.target.checked})}
        /></span>
      </label>
      <label class="field">
        <span>${l("cronSchedule")}</span>
        <span class="select"><select
          .value=${e.form.scheduleKind}
          @change=${c=>e.onFormChange({scheduleKind:c.target.value})}
        >
          <option value="every">${l("cronEvery")}</option>
          <option value="at">${l("cronAt")}</option>
          <option value="cron">${l("cronCron")}</option>
        </select></span>
      </label>
    </div>
    ${i?r`<div class="callout danger" style="margin-top: 12px;">
            该定时任务已配置的数字员工（${s}）不存在（可能已被删除）。请将“数字员工”改为有效项或清空后保存。
          </div>`:k}
    ${$b(e)}
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>${l("cronSession")}</span>
        <span class="select"><select
          .value=${e.form.sessionTarget}
          @change=${c=>e.onFormChange({sessionTarget:c.target.value})}
        >
          <option value="main">${l("cronMain")}</option>
          <option value="isolated">${l("cronIsolated")}</option>
        </select></span>
      </label>
      <label class="field">
        <span>${l("cronWakeMode")}</span>
        <span class="select"><select
          .value=${e.form.wakeMode}
          @change=${c=>e.onFormChange({wakeMode:c.target.value})}
        >
          <option value="next-heartbeat">${l("cronNextHeartbeat")}</option>
          <option value="now">${l("cronNow")}</option>
        </select></span>
      </label>
      <label class="field">
        <span>${l("cronPayload")}</span>
        <span class="select"><select
          .value=${e.form.payloadKind}
          @change=${c=>e.onFormChange({payloadKind:c.target.value})}
        >
          <option value="systemEvent">${l("cronSystemEvent")}</option>
          <option value="agentTurn">${l("cronAgentTurn")}</option>
        </select></span>
      </label>
    </div>
    <label class="field" style="margin-top: 12px;">
      <span>
        ${e.form.payloadKind==="systemEvent"?l("cronSystemText"):l("cronAgentMessage")}${e.form.payloadKind==="agentTurn"?r`<span style="color: var(--danger-color);"> *</span>`:k}
      </span>
      <span class="textarea"><textarea
        .value=${e.form.payloadText}
        @input=${c=>e.onFormChange({payloadText:c.target.value})}
        rows="4"
        ?required=${e.form.payloadKind==="agentTurn"}
      ></textarea></span>
    </label>
    ${e.form.payloadKind==="agentTurn"?r`
            <div class="form-grid" style="margin-top: 12px;">
              <label class="field">
                <span>${l("cronDelivery")}</span>
                <span class="select"><select
                  .value=${e.form.deliveryMode}
                  @change=${c=>e.onFormChange({deliveryMode:c.target.value})}
                >
                  <option value="announce">${l("cronAnnounceSummary")}</option>
                  <option value="none">${l("cronNoneInternal")}</option>
                </select></span>
              </label>
              <label class="field">
                <span>${l("cronTimeoutSeconds")}</span>
                <span class="input"><input
                  .value=${e.form.timeoutSeconds}
                  @input=${c=>e.onFormChange({timeoutSeconds:c.target.value})}
                /></span>
              </label>
              ${e.form.deliveryMode==="announce"?r`
                      <label class="field">
                        <span>${l("cronChannel")}</span>
                        <span class="select"><select
                          .value=${e.form.deliveryChannel||"last"}
                          @change=${c=>e.onFormChange({deliveryChannel:c.target.value})}
                        >
                          ${t.map(c=>r`<option value=${c}>
                                ${hb(e,c)}
                              </option>`)}
                        </select></span>
                      </label>
                      <label class="field">
                        <span>${l("cronTo")}</span>
                        <span class="input"><input
                          .value=${e.form.deliveryTo}
                          @input=${c=>e.onFormChange({deliveryTo:c.target.value})}
                          placeholder="+1555… or chat id"
                        /></span>
                      </label>
                    `:k}
            </div>
          `:k}
  `}function kb(e){e.runsJobId==null||e.jobs.find(n=>n.id===e.runsJobId);const t=e.runs.toSorted((n,s)=>s.ts-n.ts);return r`
    <section class="stack cron-config-stack cron-config-stack-history">
      <div class="card">
        ${e.jobs.length===0?k:r`
                <label class="field">
                  <span>${l("agentsTabCron")}</span>
                  <span class="select"><select @change=${n=>{const s=n.target.value;s&&e.onLoadRuns(s)}}>
                    <option value="" ?selected=${e.runsJobId==null}>${l("cronSelectJob")}</option>
                    ${e.jobs.map(n=>r`<option value=${n.id} ?selected=${e.runsJobId===n.id}>
                          ${n.name}
                        </option>`)}
                  </select></span>
                </label>
              `}
        ${e.runsJobId==null?e.jobs.length===0?r`<div class="muted" style="margin-top: 12px">${l("cronNoJobsYet")}</div>`:r`<div class="muted" style="margin-top: 12px">${l("cronSelectJobToInspect")}</div>`:t.length===0?r`<div class="muted" style="margin-top: 12px">${l("cronNoRunsYet")}</div>`:r`
                  <div class="list" style="margin-top: 12px;">
                    ${t.map(n=>Ab(n,e.basePath))}
                  </div>
                `}
      </div>
    </section>
  `}function $b(e){const t=e.form;return t.scheduleKind==="at"?r`
      <label class="field" style="margin-top: 12px;">
        <span>${l("cronRunAt")}</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?r`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>${l("cronEvery")}</span>
          <span class="input"><input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          /></span>
        </label>
        <label class="field">
          <span>${l("cronUnit")}</span>
          <span class="select"><select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">${l("cronMinutes")}</option>
            <option value="hours">${l("cronHours")}</option>
            <option value="days">${l("cronDays")}</option>
          </select></span>
        </label>
      </div>
    `:r`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>${l("cronExpression")}</span>
        <span class="input"><input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        /></span>
      </label>
      <label class="field">
        <span>Timezone (optional)</span>
        <span class="input"><input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        /></span>
      </label>
    </div>
  `}function Sb(e,t,n){const a=`list-item list-item-clickable cron-job${t.runsJobId===e.id?" list-item-selected":""}`;return r`
    <div
      class=${a}
      @click=${()=>{{t.onShowHistory?.(e.id);return}}}
    >
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${gb(e)}</div>
        ${Cb(e)}
        ${xb(e,t)}
        ${e.agentId?r`<div class="muted cron-job-agent">Agent: ${e.agentId}</div>`:k}
      </div>
      <div class="list-meta">
        ${Mb(e)}
      </div>
      <div class="cron-job-footer">
        <div class="chip-row cron-job-chips">
          <span class=${`chip ${e.enabled?"chip-ok":"chip-danger"}`}>
            ${e.enabled?"enabled":"disabled"}
          </span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
        <div class="row cron-job-actions">
          ${r`
                <button
                  class="btn"
                  ?disabled=${t.busy}
                  @click=${o=>{o.stopPropagation(),t.onOpenEditModal?.(e)}}
                >
                  Edit
                </button>
              `}
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"Disable":"Enable"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),t.onRun(e)}}
          >
            Run
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation();{t.onShowHistory?.(e.id);return}}}
          >
            History
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${async o=>{o.stopPropagation(),!(t.confirmRemove&&!await Te(l("cronDeleteConfirm")))&&t.onRemove(e)}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `}function xb(e,t){const n=At(e.digitalEmployeeId??"");if(!n)return k;const a=(t.digitalEmployees??[]).find(i=>At(i.id??"").toLowerCase()===n.toLowerCase());if(!a)return r`<div class="cron-job-detail">
      <span class="cron-job-detail-label">数字员工</span>
      <span class="muted cron-job-detail-value">—（已删除：${n}，建议移除该配置）</span>
    </div>`;const o=a.name?`${a.name}（${n}）`:n;return r`<div class="cron-job-detail">
    <span class="cron-job-detail-label">数字员工</span>
    <span class="muted cron-job-detail-value">${o}</span>
  </div>`}function Cb(e){if(e.payload.kind==="systemEvent")return r`<div class="cron-job-detail">
      <span class="cron-job-detail-label">System</span>
      <span class="muted cron-job-detail-value">${e.payload.text}</span>
    </div>`;const t=e.delivery,n=t?.channel||t?.to?` (${t.channel??"last"}${t.to?` -> ${t.to}`:""})`:"";return r`
    <div class="cron-job-detail">
      <span class="cron-job-detail-label">Prompt</span>
      <span class="muted cron-job-detail-value">${e.payload.message}</span>
    </div>
    ${t?r`<div class="cron-job-detail">
            <span class="cron-job-detail-label">Delivery</span>
            <span class="muted cron-job-detail-value">${t.mode}${n}</span>
          </div>`:k}
  `}function Jl(e){return typeof e!="number"||!Number.isFinite(e)?"n/a":Oe(e)}function Mb(e){const t=e.state?.lastStatus??"n/a",n=t==="ok"?"cron-job-status-ok":t==="error"?"cron-job-status-error":t==="skipped"?"cron-job-status-skipped":"cron-job-status-na",s=e.state?.nextRunAtMs,a=e.state?.lastRunAtMs;return r`
    <div class="cron-job-state">
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Status</span>
        <span class=${`cron-job-status-pill ${n}`}>${t}</span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Next</span>
        <span class="cron-job-state-value" title=${Nn(s)}>
          ${Jl(s)}
        </span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Last</span>
        <span class="cron-job-state-value" title=${Nn(a)}>
          ${Jl(a)}
        </span>
      </div>
    </div>
  `}function Ab(e,t){const n=typeof e.sessionKey=="string"&&e.sessionKey.trim().length>0?`${Ft("message",t)}?session=${encodeURIComponent(e.sessionKey)}`:null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${Nn(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${n?r`<div><a class="session-link" href=${n}>Open run chat</a></div>`:k}
        ${e.error?r`<div class="muted">${e.error}</div>`:k}
      </div>
    </div>
  `}function Eb(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,a=n?.warn??0,o=n?.info??0,i=s>0?"danger":a>0?"warn":"success",c=s>0?`${s} ${l("debugCritical")}`:a>0?`${a} ${l("debugWarnings")}`:l("debugNoCritical");return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">${l("debugSnapshots")}</div>
            <div class="card-sub">${l("debugSnapshotsSub")}</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?l("commonRefreshing"):l("commonRefresh")}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">${l("debugStatus")}</div>
            ${n?r`<div class="callout ${i}" style="margin-top: 8px;">
                  ${l("debugSecurityAudit")}: ${c}${o>0?` · ${o} ${l("debugInfo")}`:""}. ${l("debugSecurityAuditDetails")}
                </div>`:k}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${l("debugHealth")}</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${l("debugLastHeartbeat")}</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${l("debugManualRpc")}</div>
        <div class="card-sub">${l("debugManualRpcSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${l("debugMethod")}</span>
            <span class="input"><input
              .value=${e.callMethod}
              @input=${d=>e.onCallMethodChange(d.target.value)}
              placeholder="system-presence"
            /></span>
          </label>
          <label class="field">
            <span>${l("debugParams")} (JSON)</span>
            <span class="textarea"><textarea
              .value=${e.callParams}
              @input=${d=>e.onCallParamsChange(d.target.value)}
              rows="6"
            ></textarea></span>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>${l("debugCall")}</button>
        </div>
        ${e.callError?r`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:k}
        ${e.callResult?r`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:k}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${l("debugModels")}</div>
      <div class="card-sub">${l("debugModelsSub")}</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${l("debugEventLog")}</div>
      <div class="card-sub">${l("debugEventLogSub")}</div>
      ${e.eventLog.length===0?r`
              <div class="muted" style="margin-top: 12px">${l("debugNoEvents")}</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(d=>r`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${d.event}</div>
                      <div class="list-sub">${new Date(d.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${mb(d.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function ai(e){return typeof window>"u"?"":e?.trim()?dn(e):""}async function Wt(e,t,n){const s=ai(t),a=s?`${s}${e.startsWith("/")?"":"/"}${e}`:e,o={Accept:"application/json"};n?.trim()&&(o.Authorization=`Bearer ${n.trim()}`);try{const i=await fetch(a,{headers:o});if(!i.ok){if(i.status===401)throw new Error("认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token");if((i.headers.get("Content-Type")??"").toLowerCase().includes("application/json")){const p=await i.json(),m=(p?.error??"").trim(),g=(p?.detail??"").trim();throw new Error(m?g?`${m}（${g}）`:m:`Gateway API ${i.status} for ${e}`)}const d=await i.text();throw new Error(`Gateway API ${i.status} for ${e}: ${d}`)}return await i.json()}catch(i){if(i instanceof Error){const c=i.message==="Failed to fetch"?"网络请求失败，请检查网络连接":i.message;throw new Error(c)}throw i}}function lt(e,t){const n=(e??"").trim();if(!n)return;if(n.startsWith("http://")||n.startsWith("https://"))return n;const s=n.startsWith("/uploads/")||n.startsWith("/")?`/api/v1/site${n}`:n,a=ai(t);return a?`${a}${s.startsWith("/")?"":"/"}${s}`:s}function oi(e){const t=new URLSearchParams;for(const[s,a]of Object.entries(e)){if(!a)continue;const o=a.trim();o&&t.set(s,o)}const n=t.toString();return n?`?${n}`:""}async function $a(e,t){return await Wt(`/api/v1/employees${oi(e)}`,t?.gatewayHost,t?.token)}async function Tb(e,t){return await Wt(`/api/v1/employees/${encodeURIComponent(String(e))}`,t?.gatewayHost,t?.token)}async function Lb(e,t){return await Wt(`/api/v1/mcps${oi(e)}`,t?.gatewayHost,t?.token)}async function _b(e,t){return await Wt(`/api/v1/mcps/${encodeURIComponent(String(e))}`,t?.gatewayHost,t?.token)}async function Pb(e,t){return await Wt(`/api/v1/skills${oi(e)}`,t?.gatewayHost,t?.token)}async function Ib(e,t){return await Wt(`/api/v1/skills/${encodeURIComponent(e)}`,t?.gatewayHost,t?.token)}async function Db(e){return await Wt("/api/v1/edu/categories",e?.gatewayHost,e?.token)}async function Sa(e,t){const n=ai(t?.gatewayHost),s=n?`${n}/api/v1/install`:"/api/v1/install",a={"Content-Type":"application/json",Accept:"application/json"};t?.token?.trim()&&(a.Authorization=`Bearer ${t.token.trim()}`);try{const o=await fetch(s,{method:"POST",headers:a,body:JSON.stringify(e)}),i=await o.json();if(!o.ok)throw o.status===401?new Error("认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token"):new Error(i?.error??`安装失败: ${o.status}`);return i}catch(o){const i=o instanceof Error?o.message:String(o),c=i==="Failed to fetch"?"网络请求失败，请检查网络连接":i;throw new Error(c)}}function Yt(e){const t=(e??"").trim();return t||"其它"}function Vd(e){return(e??"").trim().toLowerCase()}function Rb(e,t){const n=Vd(t),s=(e??[]).filter(i=>n?`${i.name??""} ${i.description??""}`.toLowerCase().includes(n):!0),a=new Map;a.set("__all__",s.length);for(const i of s){const c=Yt(i.category);a.set(c,(a.get(c)??0)+1)}return{orderedCategories:["__all__",...Array.from(a.keys()).filter(i=>i!=="__all__").sort((i,c)=>i.localeCompare(c,"zh-Hans-CN"))],counts:a}}function jd(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}const Yl=3;function Zl(e,t){const n=jd(e),a=t!=="__all__"?n.filter(c=>c!==t):n;if(a.length===0)return null;const o=a.slice(0,Yl),i=a.length>Yl;return r`
    <div class="market-card-meta">
      ${o.map(c=>r`<span class="market-card-chip">${c}</span>`)}
      ${i?r`<span class="market-card-chip market-card-chip--muted">...</span>`:k}
    </div>
  `}function Nb(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),o=a.match(/\r?\n\s*---\s*\r?\n?/);return o?a.slice(o.index+o[0].length).trimStart():e}function Ub(e){const t=(e??"").trim().toLowerCase();return t?t==="open"?"开放":t==="paid"?"收费":t==="private"?"私有":e??"":""}function Gd(e,t){const n=String(t.id);return typeof t.id=="string"&&n.startsWith("local:")||(e.installedIds?.has(n)??!1)||(e.installedRemoteIds?.has(n)??!1)}function Ob(e,t){const n=String(t.id);return typeof t.id=="string"&&n.startsWith("local:")?n.replace(/^local:/,""):e.remoteToLocalMap?.[n]??""}function Xl(e,t){const n=Gd(e,t),s=String(t.id),a=e.installingId===s;return n?k:e.onInstall?r`
      <button
        class="btn small"
        type="button"
        ?disabled=${a}
        @click=${o=>{o.stopPropagation(),e.onInstall(t.id,t.category)}}
      >
        ${a?"安装中":"安装"}
      </button>
    `:r`
    <a
      class="btn small"
      href=${`/api/v1/employees/${t.id}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
      @click=${o=>o.stopPropagation()}
    >
      安装
    </a>
  `}function Fb(e,t){const n=Gd(e,t),s=Ob(e,t);return n?r`
      <div class="market-card-actions">
        ${e.onEdit&&s?r`<button class="btn primary" type="button" @click=${()=>e.onEdit(s)}>编辑</button>`:k}
        ${e.onOpenEmployee&&s?r`<button class="btn" type="button" @click=${()=>e.onOpenEmployee(s)}>开始会话</button>`:k}
        ${e.onDelete&&s?r`
              <button
                class="btn"
                type="button"
                @click=${async()=>{await Te(l("employeeDeleteConfirm"))&&e.onDelete(s)}}
              >
                删除
              </button>
            `:k}
      </div>
    `:e.onInstall?r`
      <button
        class="btn primary"
        type="button"
        ?disabled=${e.installingId===String(t.id)}
        @click=${()=>{e.onInstall(t.id,t.category)}}
      >
        ${e.installingId===String(t.id)?"安装中":"安装"}
      </button>
    `:r`
    <a
      class="btn primary"
      href=${`/api/v1/employees/${t.id}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
    >
      安装
    </a>
  `}function Bb(e){const t=(e.category??"").trim()||"__all__",n=Vd(e.query),s=(e.items??[]).filter(f=>n?`${f.name??""} ${f.description??""}`.toLowerCase().includes(n):!0),a=t==="__all__"?s:s.filter(f=>Yt(f.category)===t),o=new Map;for(const f of a){const $=Yt(f.category),S=o.get($)??[];S.push(f),o.set($,S)}const i=t==="__all__"?Array.from(o.entries()).sort((f,$)=>f[0].localeCompare($[0],"zh-Hans-CN")).map(([f,$])=>({title:f==="其它"?"其它":f,items:$})):[{title:t,items:a}],c=!e.error||(e.items?.length??0)>0,d=r`
    <div class="emp-toolbar__actions">
      <div class="emp-search">
        <span class="input"><input
          class="emp-search__input"
          type="text"
          placeholder="搜索"
          .value=${e.query}
          ?disabled=${e.loading}
          @input=${f=>e.onQueryChange(f.target.value)}
        /></span>
        <span class="emp-search__icon" aria-hidden="true">${z.search}</span>
      </div>
      <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
      ${e.onAdd?r`<button class="btn primary" @click=${e.onAdd}>新增</button>`:k}
    </div>
  `,p=s.filter(f=>{const $=String(f.id);return typeof f.id=="string"&&$.startsWith("local:")||(e.installedIds?.has($)??!1)||(e.installedRemoteIds?.has($)??!1)}),m=!e.loading&&!(a.length===0&&p.length===0),g=c||p.length>0||m;return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            ${e.error?r`<div class="callout danger">${e.error}</div>`:k}
            ${g?r`
                  <div class="emp-main__body">
                    ${c?d:k}
                    ${p.length===0?k:r`
                        <div class="emp-installed-section">
                          <h3 class="emp-section__title">已安装 (${p.length})</h3>
                          <div class="emp-grid emp-installed-grid">
                            ${p.map(f=>{const $=e.selectedId===f.id,S=lt(f.logo_url);return r`
                                <div class="emp-card-wrap ${$?"active":""}">
                                  <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(f.id)}>
                                    <div class="emp-card__icon ${S?"":"emp-card__icon--default"}">
                                      ${S?r`<img src=${S} alt="" />`:r`
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                          <circle cx="12" cy="7" r="4"/>
                                        </svg>
                                      `}
                                    </div>
                                    <div class="emp-card__actions">
                                      ${Xl(e,f)}
                                    </div>
                                    <h3 class="emp-card__title">${f.name}</h3>
                                    <p class="emp-card__desc">${f.description??"暂无描述"}</p>
                                    ${Zl(f.tags,t)}
                                  </div>
                                </div>
                              `})}
                          </div>
                        </div>
                      `}
                    ${m?r`
                          <div class="emp-sections">
                            ${i.map(f=>f.items.length>0?r`
                                      <div class="emp-section">
                                        <div class="emp-section__header">
                                          <h3 class="emp-section__title">${f.title}</h3>
                                        </div>
                                        <div class="emp-grid">
                                          ${f.items.map($=>{const S=e.selectedId===$.id,w=lt($.logo_url);return r`
                                              <div class="emp-card-wrap ${S?"active":""}">
                                                <div class="emp-card emp-card-btn" @click=${()=>e.onSelect($.id)}>
                                                  <div class="emp-card__icon ${w?"":"emp-card__icon--default"}">
                                                    ${w?r`<img src=${w} alt="" />`:r`
                                                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                            <circle cx="12" cy="7" r="4"/>
                                                          </svg>
                                                        `}
                                                  </div>
                                                  <div class="emp-card__actions">
                                                    ${Xl(e,$)}
                                                  </div>
                                                  <h3 class="emp-card__title">${$.name}</h3>
                                                  <p class="emp-card__desc">${$.description??"暂无描述"}</p>
                                                  ${Zl($.tags,t)}
                                                </div>
                                              </div>
                                            `})}
                                        </div>
                                      </div>
                                    `:k)}
                          </div>
                        `:k}
                  </div>
                `:k}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:a.length===0&&p.length===0?r`<div class="emp-empty">暂无匹配的数字员工</div>`:k}
          </div>
        </div>

        ${e.selectedDetail?r`
              <div class="modal-overlay" @click=${e.onDetailClose} role="dialog" aria-modal="true" aria-labelledby="emp-detail-title">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${f=>f.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      <div class="emp-detail-title-wrap">
                        ${(()=>{const f=lt(e.selectedDetail.logo_url);return f?r`<div class="emp-detail-logo"><img src=${f} alt="" /></div>`:r`
                              <div class="emp-detail-logo emp-detail-logo--default">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                  <circle cx="12" cy="7" r="4"/>
                                </svg>
                              </div>
                            `})()}
                        <h1 id="emp-detail-title" class="emp-detail-title">${e.selectedDetail.name}</h1>
                        <div class="emp-detail-tags">
                          <span class="badge ghost">${Ub(e.selectedDetail.status)}</span>
                          ${(()=>{const f=Yt(e.selectedDetail.category),$=t!=="__all__"&&f===t;return(e.selectedDetail.category??"").trim()&&!$?r`<span class="badge ghost">${f}</span>`:k})()}
                          ${(()=>{const f=Yt(e.selectedDetail.category),S=jd(e.selectedDetail.tags).filter(w=>{const C=Yt(w);return!(C===f||t!=="__all__"&&C===t)});return S.length>0?S.map(w=>r`<span class="badge ghost">${w}</span>`):k})()}
                        </div>
                      </div>
                      <article class="emp-detail-summary">${e.selectedDetail.description??""}</article>
                      <div class="emp-detail-meta-row">
                        ${Fb(e,e.selectedDetail)}
                      </div>
                    </div>
                    <button
                      class="emp-detail-modal__close"
                      type="button"
                      aria-label="关闭"
                      @click=${e.onDetailClose}
                    >
                      ${z.x}
                    </button>
                  </div>

                  <div class="emp-detail-modal__body">
                    ${e.selectedDetail.readme?r`<div class="emp-detail-markdown emp-detail-content">${dt(ut(Nb(e.selectedDetail.readme)))}</div>`:r`<div class="emp-detail-content-empty">无 README</div>`}
                  </div>
                </div>
              </div>
            `:k}
      </section>
    </main>
  `}function Wb(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function wt(e,t){return t?r`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:k}function Hb(e){const t=e.execApprovalQueue[0];if(!t)return k;const n=t.request,s=t.expiresAtMs-Date.now(),a=s>0?`expires in ${Wb(s)}`:"expired",o=e.execApprovalQueue.length;return r`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${a}</div>
          </div>
          ${o>1?r`<div class="exec-approval-queue">${o} pending</div>`:k}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${wt("Host",n.host)}
          ${wt("Agent",n.agentId)}
          ${wt("Session",n.sessionKey)}
          ${wt("CWD",n.cwd)}
          ${wt("Resolved",n.resolvedPath)}
          ${wt("Security",n.security)}
          ${wt("Ask",n.ask)}
        </div>
        ${e.execApprovalError?r`<div class="exec-approval-error">${e.execApprovalError}</div>`:k}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function zb(e){const{pendingGatewayUrl:t}=e;return t?r`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:k}function Qb(e){const{model:t,promptValue:n,onPromptInput:s,onConfirm:a,onCancel:o}=e;if(!t)return k;const i=t.kind==="prompt";return r`
    <div
      class="channel-panel-overlay channel-panel-overlay--centered"
      style="z-index: 10000;"
      role="dialog"
      aria-modal="true"
      aria-labelledby="native-dialog-title"
      @click=${c=>{c.target.classList.contains("channel-panel-overlay")&&(t.kind==="alert"?a():o())}}
    >
      <div class="card channel-panel" style="max-width: 420px; width: 92%;" @click=${c=>c.stopPropagation()}>
        <div class="card-title" id="native-dialog-title" style="margin-bottom: 12px; white-space: pre-wrap;">
          ${t.message}
        </div>
        ${i?r`
                <div class="field" style="margin-bottom: 14px;">
                  <span class="input" style="display: block;">
                    <input
                      type="text"
                      data-native-dialog-input
                      .value=${n}
                      @input=${c=>s(c.target.value)}
                      @keydown=${c=>{c.key==="Enter"&&(c.preventDefault(),a())}}
                    />
                  </span>
                </div>
              `:k}
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          ${t.kind==="alert"?r`
                  <button type="button" class="btn primary" @click=${a}>${l("nativeDialogOK")}</button>
                `:r`
                  <button type="button" class="btn" @click=${o}>${l("commonCancel")}</button>
                  <button type="button" class="btn primary" @click=${a}>${l("nativeDialogOK")}</button>
                `}
        </div>
      </div>
    </div>
  `}const er=["trace","debug","info","warn","error","fatal"];function Kb(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function qb(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function Vb(e){const t=e.filterText.trim().toLowerCase(),n=er.some(o=>!e.levelFilters[o]),s=e.entries.filter(o=>o.level&&!e.levelFilters[o.level]?!1:qb(o,t)),a=t||n?"filtered":"visible";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${l("logsTitle")}</div>
          <div class="card-sub">${l("logsSub")}</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?l("commonLoading"):l("commonRefresh")}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(o=>o.raw),a)}
          >
            ${l(a==="filtered"?"logsExportFiltered":"logsExportVisible")}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <span class="input"><input
            .value=${e.filterText}
            @input=${o=>e.onFilterTextChange(o.target.value)}
            placeholder="Search logs"
          /></span>
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <span class="checkbox"><input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${o=>e.onToggleAutoFollow(o.target.checked)}
          /></span>
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${er.map(o=>r`
            <label class="chip log-chip ${o}">
              <span class="checkbox"><input
                type="checkbox"
                .checked=${e.levelFilters[o]}
                @change=${i=>e.onLevelToggle(o,i.target.checked)}
              /></span>
              <span>${o}</span>
            </label>
          `)}
      </div>

      ${e.file?r`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:k}
      ${e.truncated?r`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:k}
      ${e.error?r`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:k}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?r`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(o=>r`
                <div class="log-row">
                  <div class="log-time mono">${Kb(o.time)}</div>
                  <div class="log-level ${o.level??""}">${o.level??""}</div>
                  <div class="log-subsystem mono">${o.subsystem??""}</div>
                  <div class="log-message mono">${o.message??o.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function jb(e){const t=e1(e),n=i1(e);return r`
    ${r1(n)}
    ${l1(t)}
    ${Gb(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${l("nodesTitle")}</div>
          <div class="card-sub">${l("nodesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?l("commonLoading"):l("commonRefresh")}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?r`
                <div class="muted">${l("nodesNoFound")}</div>
              `:e.nodes.map(s=>y1(s))}
      </div>
    </section>
  `}function Gb(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${l("nodesDevices")}</div>
          <div class="card-sub">${l("nodesDevicesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?l("commonLoading"):l("commonRefresh")}
        </button>
      </div>
      ${e.devicesError?r`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:k}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?r`
              <div class="muted" style="margin-bottom: 8px;">${l("nodesPending")}</div>
              ${n.map(a=>Jb(a,e))}
            `:k}
        ${s.length>0?r`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">${l("nodesPaired")}</div>
              ${s.map(a=>Yb(a,e))}
            `:k}
        ${n.length===0&&s.length===0?r`
                <div class="muted">${l("nodesNoPairedDevices")}</div>
              `:k}
      </div>
    </section>
  `}function Jb(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?Oe(e.ts):l("commonNA"),a=e.role?.trim()?`${l("nodesRoleLabel")}${e.role}`:l("nodesRoleNone"),o=e.isRepair?l("nodesRepairSuffix"):"",i=e.remoteIp?` · ${e.remoteIp}`:"";return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${i}</div>
        <div class="muted" style="margin-top: 6px;">
          ${a} · ${l("nodesRequested")}${s}${o}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            ${l("nodesApprove")}
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            ${l("nodesReject")}
          </button>
        </div>
      </div>
    </div>
  `}function Yb(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",a=`${l("nodesRolesLabel")}${Ua(e.roles)}`,o=`${l("nodesScopesLabel")}${Ua(e.scopes)}`,i=Array.isArray(e.tokens)?e.tokens:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${a} · ${o}</div>
        ${i.length===0?r`
                <div class="muted" style="margin-top: 6px">${l("nodesTokensNone")}</div>
              `:r`
              <div class="muted" style="margin-top: 10px;">${l("nodesTokens")}</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${i.map(c=>Zb(e.deviceId,c,t))}
              </div>
            `}
      </div>
    </div>
  `}function Zb(e,t,n){const s=t.revokedAtMs?l("nodesTokenRevoked"):l("nodesTokenActive"),a=`${l("nodesScopesLabel")}${Ua(t.scopes)}`,o=Oe(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return r`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${a} · ${o}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          ${l("nodesRotate")}
        </button>
        ${t.revokedAtMs?k:r`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                ${l("nodesRevoke")}
              </button>
            `}
      </div>
    </div>
  `}const rt="__defaults__",tr=[{value:"deny",labelKey:"nodesSecurityDeny"},{value:"allowlist",labelKey:"nodesSecurityAllowlist"},{value:"full",labelKey:"nodesSecurityFull"}],Xb=[{value:"off",labelKey:"nodesAskOff"},{value:"on-miss",labelKey:"nodesAskOnMiss"},{value:"always",labelKey:"nodesAskAlways"}];function e1(e){const t=e.configForm,n=f1(e.nodes),{defaultBinding:s,agents:a}=v1(t),o=!!t,i=e.configSaving||e.configFormMode==="raw";return{ready:o,disabled:i,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:a,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function nr(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function t1(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function n1(e){const t=e?.defaults??{};return{security:nr(t.security),ask:t1(t.ask),askFallback:nr(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function s1(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach(a=>{if(!a||typeof a!="object")return;const o=a,i=typeof o.id=="string"?o.id.trim():"";if(!i)return;const c=typeof o.name=="string"?o.name.trim():void 0,d=o.default===!0;s.push({id:i,name:c||void 0,isDefault:d})}),s}function a1(e,t){const n=s1(e),s=Object.keys(t?.agents??{}),a=new Map;n.forEach(i=>a.set(i.id,i)),s.forEach(i=>{a.has(i)||a.set(i,{id:i})});const o=Array.from(a.values());return o.length===0&&o.push({id:"main",isDefault:!0}),o.sort((i,c)=>{if(i.isDefault&&!c.isDefault)return-1;if(!i.isDefault&&c.isDefault)return 1;const d=i.name?.trim()?i.name:i.id,p=c.name?.trim()?c.name:c.id;return d.localeCompare(p)}),o}function o1(e,t){return e===rt?rt:e&&t.some(n=>n.id===e)?e:rt}function i1(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=n1(t),a=a1(e.configForm,t),o=h1(e.nodes),i=e.execApprovalsTarget;let c=i==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;i==="node"&&c&&!o.some(g=>g.id===c)&&(c=null);const d=o1(e.execApprovalsSelectedAgent,a),p=d!==rt?(t?.agents??{})[d]??null:null,m=Array.isArray(p?.allowlist)?p.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:d,selectedAgent:p,agents:a,allowlist:m,target:i,targetNodeId:c,targetNodes:o,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function l1(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${l("nodesBindingTitle")}</div>
          <div class="card-sub">
            ${l("nodesBindingSub")}<span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?l("commonSaving"):l("commonSave")}
        </button>
      </div>

      ${e.formMode==="raw"?r`
              <div class="callout warn" style="margin-top: 12px">
                ${l("nodesBindingFormModeHint")}
              </div>
            `:k}

      ${e.ready?r`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">${l("nodesDefaultBinding")}</div>
                  <div class="list-sub">${l("nodesDefaultBindingSub")}</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>${l("nodesNodeLabel")}</span>
                    <span class="select"><select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const o=s.target.value.trim();e.onBindDefault(o||null)}}
                    >
                      <option value="" ?selected=${n===""}>${l("nodesAnyNode")}</option>
                      ${e.nodes.map(s=>r`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select></span>
                  </label>
                  ${t?k:r`
                          <div class="muted">${l("nodesNoNodesSystemRun")}</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?r`
                      <div class="muted">${l("nodesNoAgentsFound")}</div>
                    `:e.agents.map(s=>g1(s,e))}
            </div>
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${l("nodesLoadConfigHint")}</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?l("commonLoading"):l("nodesLoadConfig")}
            </button>
          </div>`}
    </section>
  `}function r1(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${l("nodesExecApprovalsTitle")}</div>
          <div class="card-sub">
            ${l("nodesExecApprovalsSub")}
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?l("commonSaving"):l("commonSave")}
        </button>
      </div>

      ${c1(e)}

      ${t?r`
            ${d1(e)}
            ${u1(e)}
            ${e.selectedScope===rt?k:p1(e)}
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${l("nodesLoadExecApprovalsHint")}</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?l("commonLoading"):l("nodesLoadApprovals")}
            </button>
          </div>`}
    </section>
  `}function c1(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return r`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${l("nodesTarget")}</div>
          <div class="list-sub">
            ${l("nodesTargetSub")}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${l("nodesHost")}</span>
            <span class="select"><select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const i=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||i)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>${l("nodesHostGateway")}</option>
              <option value="node" ?selected=${e.target==="node"}>${l("nodesHostNode")}</option>
            </select></span>
          </label>
          ${e.target==="node"?r`
                <label class="field">
                  <span>${l("nodesNodeLabel")}</span>
                  <span class="select"><select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const o=s.target.value.trim();e.onSelectTarget("node",o||null)}}
                  >
                    <option value="" ?selected=${n===""}>${l("nodesSelectNode")}</option>
                    ${e.targetNodes.map(s=>r`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select></span>
                </label>
              `:k}
        </div>
      </div>
      ${e.target==="node"&&!t?r`
              <div class="muted">${l("nodesNoNodesExecApprovals")}</div>
            `:k}
    </div>
  `}function d1(e){return r`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">${l("nodesScope")}</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===rt?"active":""}"
          @click=${()=>e.onSelectScope(rt)}
        >
          ${l("nodesDefaults")}
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return r`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function u1(e){const t=e.selectedScope===rt,n=e.defaults,s=e.selectedAgent??{},a=t?["defaults"]:["agents",e.selectedScope],o=typeof s.security=="string"?s.security:void 0,i=typeof s.ask=="string"?s.ask:void 0,c=typeof s.askFallback=="string"?s.askFallback:void 0,d=t?n.security:o??"__default__",p=t?n.ask:i??"__default__",m=t?n.askFallback:c??"__default__",g=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,f=g??n.autoAllowSkills,$=g==null;return r`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${l("nodesSecurity")}</div>
          <div class="list-sub">
            ${t?l("nodesSecurityDefaultSub"):`${l("nodesSecurityAgentSubPrefix")}${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${l("nodesMode")}</span>
            <span class="select"><select
              ?disabled=${e.disabled}
              @change=${S=>{const C=S.target.value;!t&&C==="__default__"?e.onRemove([...a,"security"]):e.onPatch([...a,"security"],C)}}
            >
              ${t?k:r`<option value="__default__" ?selected=${d==="__default__"}>
                    ${l("nodesUseDefaultPrefix")}${n.security})
                  </option>`}
              ${tr.map(S=>r`<option
                    value=${S.value}
                    ?selected=${d===S.value}
                  >
                    ${l(S.labelKey)}
                  </option>`)}
            </select></span>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${l("nodesAsk")}</div>
          <div class="list-sub">
            ${t?l("nodesAskDefaultSub"):`${l("nodesAskAgentSubPrefix")}${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${l("nodesMode")}</span>
            <span class="select"><select
              ?disabled=${e.disabled}
              @change=${S=>{const C=S.target.value;!t&&C==="__default__"?e.onRemove([...a,"ask"]):e.onPatch([...a,"ask"],C)}}
            >
              ${t?k:r`<option value="__default__" ?selected=${p==="__default__"}>
                    ${l("nodesUseDefaultPrefix")}${n.ask})
                  </option>`}
              ${Xb.map(S=>r`<option
                    value=${S.value}
                    ?selected=${p===S.value}
                  >
                    ${l(S.labelKey)}
                  </option>`)}
            </select></span>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${l("nodesAskFallback")}</div>
          <div class="list-sub">
            ${t?l("nodesAskFallbackDefaultSub"):`${l("nodesAskFallbackAgentSubPrefix")}${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${l("nodesFallback")}</span>
            <span class="select"><select
              ?disabled=${e.disabled}
              @change=${S=>{const C=S.target.value;!t&&C==="__default__"?e.onRemove([...a,"askFallback"]):e.onPatch([...a,"askFallback"],C)}}
            >
              ${t?k:r`<option value="__default__" ?selected=${m==="__default__"}>
                    ${l("nodesUseDefaultPrefix")}${n.askFallback})
                  </option>`}
              ${tr.map(S=>r`<option
                    value=${S.value}
                    ?selected=${m===S.value}
                  >
                    ${l(S.labelKey)}
                  </option>`)}
            </select></span>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${l("nodesAutoAllowSkills")}</div>
          <div class="list-sub">
            ${t?l("nodesAutoAllowSkillsDefaultSub"):$?`${l("nodesAutoAllowSkillsUsingDefault")}${n.autoAllowSkills?"on":"off"}).`:`${l("nodesAutoAllowSkillsOverride")}${f?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${l("nodesEnabled")}</span>
            <span class="checkbox"><input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${f}
              @change=${S=>{const w=S.target;e.onPatch([...a,"autoAllowSkills"],w.checked)}}
            /></span>
          </label>
          ${!t&&!$?r`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...a,"autoAllowSkills"])}
              >
                ${l("nodesUseDefaultButton")}
              </button>`:k}
        </div>
      </div>
    </div>
  `}function p1(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return r`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">${l("nodesAllowlist")}</div>
        <div class="card-sub">${l("nodesAllowlistSub")}</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        ${l("nodesAddPattern")}
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?r`
              <div class="muted">${l("nodesNoAllowlistEntries")}</div>
            `:n.map((s,a)=>m1(e,s,a))}
    </div>
  `}function m1(e,t,n){const s=t.lastUsedAt?Oe(t.lastUsedAt):l("nodesNever"),a=t.lastUsedCommand?Qi(t.lastUsedCommand,120):null,o=t.lastResolvedPath?Qi(t.lastResolvedPath,120):null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:l("nodesNewPattern")}</div>
        <div class="list-sub">${l("nodesLastUsedPrefix")}${s}</div>
        ${a?r`<div class="list-sub mono">${a}</div>`:k}
        ${o?r`<div class="list-sub mono">${o}</div>`:k}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${l("nodesPattern")}</span>
          <span class="input"><input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${i=>{const c=i.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],c.value)}}
          /></span>
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          ${l("nodesRemove")}
        </button>
      </div>
    </div>
  `}function g1(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,a=t.nodes.length>0;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?l("nodesDefaultAgent"):l("nodesAgent")} ·
          ${n==="__default__"?`${l("nodesUsesDefault")}${t.defaultBinding??"any"})`:`${l("nodesOverride")}${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${l("nodesBinding")}</span>
          <span class="select"><select
            ?disabled=${t.disabled||!a}
            @change=${o=>{const c=o.target.value.trim();t.onBindAgent(e.index,c==="__default__"?null:c)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              ${l("nodesUseDefaultButton")}
            </option>
            ${t.nodes.map(o=>r`<option
                  value=${o.id}
                  ?selected=${n===o.id}
                >
                  ${o.label}
                </option>`)}
          </select></span>
        </label>
      </div>
    </div>
  `}function f1(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(c=>String(c)==="system.run"))continue;const o=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!o)continue;const i=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():o;t.push({id:o,label:i===o?o:`${i} · ${o}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function h1(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(c=>String(c)==="system.execApprovals.get"||String(c)==="system.execApprovals.set"))continue;const o=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!o)continue;const i=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():o;t.push({id:o,label:i===o?o:`${i} · ${o}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function v1(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},a=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,o=e.agents??{},i=Array.isArray(o.list)?o.list:[];if(i.length===0)return{defaultBinding:a,agents:[t]};const c=[];return i.forEach((d,p)=>{if(!d||typeof d!="object")return;const m=d,g=typeof m.id=="string"?m.id.trim():"";if(!g)return;const f=typeof m.name=="string"?m.name.trim():void 0,$=m.default===!0,w=(m.tools??{}).exec??{},C=typeof w.node=="string"&&w.node.trim()?w.node.trim():null;c.push({id:g,name:f||void 0,index:p,isDefault:$,binding:C})}),c.length===0&&c.push(t),{defaultBinding:a,agents:c}}function y1(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),a=Array.isArray(e.caps)?e.caps:[],o=Array.isArray(e.commands)?e.commands:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${l(n?"nodesChipPaired":"nodesChipUnpaired")}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${l(t?"nodesConnected":"nodesOffline")}
          </span>
          ${a.slice(0,12).map(i=>r`<span class="chip">${String(i)}</span>`)}
          ${o.slice(0,8).map(i=>r`<span class="chip">${String(i)}</span>`)}
        </div>
      </div>
    </div>
  `}function b1(e){const t=e.hello?.snapshot,n=Na(t?.uptimeMs),s=e.hello?.policy?.tickIntervalMs,a=typeof s=="number"&&Number.isFinite(s)&&s>0?Na(s):"n/a",o=(()=>{if(e.connected||!e.lastError)return null;const c=e.lastError.toLowerCase();if(!(c.includes("unauthorized")||c.includes("connect failed")))return null;const p=!!e.settings.token.trim(),m=!!e.password.trim();return!p&&!m?r`
        <div class="muted" style="margin-top: 8px">
          This gateway requires auth. Add a token or password, then click Connect.
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → open the Control UI<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="Open Control UI auth docs"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:r`
      <div class="muted" style="margin-top: 8px">
        Auth failed. Update the token or password in Control UI settings, then click Connect.
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="Open Control UI auth docs"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),i=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const d=e.lastError.toLowerCase();return!d.includes("secure context")&&!d.includes("device identity required")?null:r`
      <div class="muted" style="margin-top: 8px">
        This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open
        <span class="mono">http://127.0.0.1:18900</span> on the gateway host.
        <div style="margin-top: 6px">
          If you must stay on HTTP, set
          <span class="mono">gateway.controlUi.allowInsecureAuth: true</span> (token-only).
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Open Tailscale Serve docs"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="Open Insecure HTTP docs"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})();return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${l("overviewGatewayAccess")}</div>
        <div class="card-sub">${l("overviewGatewayAccessSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${l("overviewGatewayHost")}</span>
            <span class="input"><input
              .value=${e.settings.gatewayUrl}
              @input=${c=>{const d=c.target.value;e.onSettingsChange({...e.settings,gatewayUrl:d})}}
              placeholder="127.0.0.1:18900"
            /></span>
          </label>
          <label class="field">
            <span>${l("overviewGatewayToken")}</span>
            <span class="input"><input
              .value=${e.settings.token}
              @input=${c=>{const d=c.target.value;e.onSettingsChange({...e.settings,token:d})}}
              placeholder="OPENCLAW_GATEWAY_TOKEN"
            /></span>
          </label>
          <label class="field">
            <span>${l("overviewPassword")}</span>
            <span class="input"><input
              type="password"
              .value=${e.password}
              @input=${c=>{const d=c.target.value;e.onPasswordChange(d)}}
              placeholder="system or shared password"
            /></span>
          </label>
          <label class="field">
            <span>${l("overviewDefaultSessionKey")}</span>
            <span class="input"><input
              .value=${e.settings.sessionKey}
              @input=${c=>{const d=c.target.value;e.onSessionKeyChange(d)}}
            /></span>
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn primary" @click=${()=>e.onConnect()}>${l("overviewConnect")}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${l("overviewRefresh")}</button>
          <span class="muted">${l("overviewConnectHint")}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${l("overviewSnapshot")}</div>
        <div class="card-sub">${l("overviewSnapshotSub")}</div>
        <div class="stat-grid">
          <div class="stat">
            <div class="stat-label">${l("overviewStatus")}</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?l("overviewConnected"):l("overviewDisconnected")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${l("overviewUptime")}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${l("overviewTickInterval")}</div>
            <div class="stat-value">${a}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${l("overviewLastChannelsRefresh")}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?Oe(e.lastChannelsRefresh):"n/a"}
            </div>
          </div>
        </div>
        ${e.lastError?r`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${o??""}
              ${i??""}
            </div>`:r`
                <div class="callout" style="margin-top: 14px">
                  ${l("overviewChannelsHint")}
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3">
      <div class="card stat-card">
        <div class="stat-label">${l("overviewInstances")}</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">${l("overviewInstancesSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${l("overviewSessions")}</div>
        <div class="stat-value">${e.sessionsCount??"n/a"}</div>
        <div class="muted">${l("overviewSessionsSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${l("overviewCron")}</div>
        <div class="stat-value">
          ${e.cronEnabled==null?"n/a":e.cronEnabled?l("overviewCronEnabled"):l("overviewCronDisabled")}
        </div>
        <div class="muted">${l("overviewCronNext")} ${ub(e.cronNext)}</div>
      </div>
    </section>

    <section class="card">
      <div class="card-title">${l("overviewNotes")}</div>
      <div class="card-sub">${l("overviewNotesSub")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${l("overviewNoteTailscale")}</div>
          <div class="muted">${l("overviewNoteTailscaleSub")}</div>
        </div>
        <div>
          <div class="note-title">${l("overviewNoteSessionHygiene")}</div>
          <div class="muted">${l("overviewNoteSessionHygieneSub")}</div>
        </div>
        <div>
          <div class="note-title">${l("overviewNoteCron")}</div>
          <div class="muted">${l("overviewNoteCronSub")}</div>
        </div>
      </div>
    </section>
  `}const w1=["","off","minimal","low","medium","high","xhigh"],k1=["","off","on"];function $1(){return[{value:"",label:l("commonInherit")},{value:"off",label:l("commonOffExplicit")},{value:"on",label:"on"}]}const S1=["","off","on","stream"];function x1(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function Jd(e){return x1(e)==="zai"}function C1(e){return Jd(e)?k1:w1}function sr(e,t){return t?e.includes(t)?[...e]:[...e,t]:[...e]}function M1(e,t){return t?e.some(n=>n.value===t)?[...e]:[...e,{value:t,label:`${t} (custom)`}]:[...e]}function A1(e,t){return!t||!e||e==="off"?e:"on"}function E1(e,t){return e?t&&e==="on"?"low":e:null}function T1(e){const t=e.result?.sessions??[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${l("sessionsTitle")}</div>
          <div class="card-sub">${l("sessionsSub")}</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?l("commonLoading"):l("commonRefresh")}
          </button>
          <button
            class="btn secondary"
            ?disabled=${e.loading||t.length===0}
            @click=${e.onBulkModeToggle}
          >
            ${e.bulkMode?"完成":"批量删除"}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>${l("sessionsActiveWithin")}</span>
          <span class="input"><input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          /></span>
        </label>
        <label class="field">
          <span>${l("sessionsLimit")}</span>
          <span class="input"><input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          /></span>
        </label>
        <label class="field checkbox">
          <span>${l("sessionsIncludeGlobal")}</span>
          <span class="checkbox"><input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          /></span>
        </label>
        <label class="field checkbox">
          <span>${l("sessionsIncludeUnknown")}</span>
          <span class="checkbox"><input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          /></span>
        </label>
      </div>

      ${e.bulkMode&&t.length>0?r`
              <div class="row" style="margin-top: 12px; justify-content: space-between;">
                <div class="muted">已选 ${e.selectedKeys.length} 个会话</div>
                <div class="row" style="gap: 8px;">
                  <button
                    class="btn"
                    ?disabled=${e.loading}
                    @click=${()=>e.onSelectAll(t.map(n=>n.key).filter(n=>n&&n!=="agent.main.main"))}
                  >
                    全部选择
                  </button>
                  <button
                    class="btn"
                    ?disabled=${e.loading||e.selectedKeys.length===0}
                    @click=${e.onClearSelection}
                  >
                    全部不选
                  </button>
                  <button
                    class="btn"
                    ?disabled=${e.loading||e.selectedKeys.length===0}
                    @click=${()=>e.onBulkDelete(e.selectedKeys)}
                  >
                    删除已选
                  </button>
                </div>
              </div>
            `:k}

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:k}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`${l("sessionsStore")}: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          ${e.bulkMode?r`<div></div>`:k}
          <div>${l("sessionsKey")}</div>
          <div>${l("sessionsLabel")}</div>
          <div>${l("sessionsKind")}</div>
          <div>${l("sessionsUpdated")}</div>
          <div>${l("sessionsTokens")}</div>
          <div>${l("sessionsThinking")}</div>
          <div>${l("sessionsVerbose")}</div>
          <div>${l("sessionsReasoning")}</div>
          <div>${l("sessionsActions")}</div>
        </div>
        ${t.length===0?r`
                <div class="muted">${l("sessionsNoFound")}</div>
              `:t.map(n=>L1(n,e.basePath,e.onPatch,e.onDelete,e.loading,e.bulkMode,e.selectedKeys,e.onSelectionChange))}
      </div>
    </section>
  `}function L1(e,t,n,s,a,o,i,c){const d=e.updatedAt?Oe(e.updatedAt):"n/a",p=e.thinkingLevel??"",m=Jd(e.modelProvider),g=A1(p,m),f=sr(C1(e.modelProvider),g),$=e.verboseLevel??"",S=M1($1(),$),w=e.reasoningLevel??"",C=sr(S1,w),L=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,P=typeof e.label=="string"?e.label.trim():"",U=!!(L&&L!==e.key&&L!==P),R=e.kind!=="global",O=R?`${Ft("message",t)}?session=${encodeURIComponent(e.key)}`:null,D=e.key==="agent.main.main",u=i.includes(e.key);return r`
    <div class="table-row">
      ${o?r`
              <div>
                <span class="checkbox"><input
                  type="checkbox"
                  .checked=${u}
                  ?disabled=${a||D}
                  @change=${b=>c(e.key,b.target.checked)}
                /></span>
              </div>
            `:k}
      <div class="mono session-key-cell">
        ${R?r`<a href=${O} class="session-link">${e.key}</a>`:e.key}
        ${U?r`<span class="muted session-key-display-name">${L}</span>`:k}
      </div>
      <div>
        <span class="input small"><input
          .value=${e.label??""}
          ?disabled=${a}
          placeholder=${l("commonOptional")}
          @change=${b=>{const x=b.target.value.trim();n(e.key,{label:x||null})}}
        /></span>
      </div>
      <div>${e.kind}</div>
      <div>${d}</div>
      <div>${pb(e)}</div>
      <div>
        <span class="select small"><select
          .value=${g}
          ?disabled=${a}
          @change=${b=>{const x=b.target.value;n(e.key,{thinkingLevel:E1(x,m)})}}
        >
          ${f.map(b=>r`<option value=${b} ?selected=${b===g}>${b||l("commonInherit")}</option>`)}
        </select></span>
      </div>
      <div>
        <span class="select small"><select
          .value=${$}
          ?disabled=${a}
          @change=${b=>{const x=b.target.value;n(e.key,{verboseLevel:x||null})}}
        >
          ${S.map(b=>r`<option value=${b.value} ?selected=${b.value===$}>${b.label}</option>`)}
        </select></span>
      </div>
      <div>
        <span class="select small"><select
          .value=${w}
          ?disabled=${a}
          @change=${b=>{const x=b.target.value;n(e.key,{reasoningLevel:x||null})}}
        >
          ${C.map(b=>r`<option value=${b} ?selected=${b===w}>${b||l("commonInherit")}</option>`)}
        </select></span>
      </div>
      <div>
        <button class="btn small" ?disabled=${a} @click=${()=>s(e.key)}>
          ${l("commonDelete")}
        </button>
      </div>
    </div>
  `}const Yd=r`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
  </svg>
`;function ar(e,t,n){const s=lt(t,e);return r`
    <div class="emp-card__icon ${!s&&!n?"emp-card__icon--default":""}">
      ${s?r`<img src=${s} alt="" loading="lazy" decoding="async" />`:n||Yd}
    </div>
  `}function tn(e){const t=(e??"").trim();return t||"其它"}function _1(e){const t=new Map;for(const n of e){const s=tn(n.categoryCn);t.set(s,(t.get(s)??0)+1)}return[...t.entries()].sort((n,s)=>s[1]-n[1]).map(([n,s])=>({name:n,count:s}))}function P1(e,t,n){const s=(t??"").trim().toLowerCase(),a=(n??"").trim()||"__all__",o=(e??[]).filter(d=>!(s&&!`${d.name??""} ${d.description??""} ${d.folder??""}`.toLowerCase().includes(s)||a!=="__all__"&&(d.status??"").trim().toLowerCase()!==a)),i=new Map;i.set("__all__",o.length);for(const d of o){const p=tn(d.categoryCn);i.set(p,(i.get(p)??0)+1)}return{orderedCategories:["__all__",...Array.from(i.keys()).filter(d=>d!=="__all__").sort((d,p)=>d.localeCompare(p,"zh-Hans-CN"))],counts:i}}function Cn(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function I1(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),o=a.match(/\r?\n\s*---\s*\r?\n?/);return o?a.slice(o.index+o[0].length).trimStart():e}function or(e){const t=(e??"").trim().toLowerCase();return t?t==="open"?"开放":t==="paid"?"付费":t==="private"?"私有":e??"":""}function ir(e,t,n,s,a,o){return n?e.onToggleEnabled?r`
          <div class="market-card-actions">
            <div
              class=${`switch${s?" is-checked":""}`}
              @click=${i=>{i.stopPropagation(),e.onToggleEnabled(t,!s)}}
            >
              <input
                type="checkbox"
                class="switch__input"
                ?checked=${s}
                aria-label=${s?"禁用":"启用"}
              />
              <span class="switch__core"></span>
            </div>
          </div>
        `:k:e.onInstall?r`
      <button
        class="btn small"
        type="button"
        ?disabled=${a}
        @click=${i=>{i.stopPropagation(),e.onInstall(t,o)}}
      >
        ${a?"安装中":"安装"}
      </button>
    `:r`
    <a
      class="btn small"
      href=${`/api/v1/skills/${encodeURIComponent(t)}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
      @click=${i=>i.stopPropagation()}
    >
      安装
    </a>
  `}function xa(e,t,n,s,a,o){return n?r`
      <div class="market-card-actions">
        ${e.onSkillEditOpen?r`
              <button
                class="btn primary"
                type="button"
                @click=${i=>{i.stopPropagation(),e.onSkillEditOpen(t)}}
              >
                编辑
              </button>
            `:k}
        ${e.onToggleEnabled?r`
              <button
                class="btn"
                type="button"
                @click=${i=>{i.stopPropagation(),e.onToggleEnabled(t,!s)}}
              >
                ${s?"禁用":"启用"}
              </button>
            `:k}
        ${e.onDelete?r`
              <button
                class="btn"
                type="button"
                @click=${async i=>{i.stopPropagation(),await Te(l("skillsDeleteConfirm"))&&e.onDelete(t)}}
              >
                删除
              </button>
            `:k}
      </div>
    `:e.onInstall?r`
      <button
        class="btn primary"
        type="button"
        ?disabled=${a}
        @click=${i=>{i.stopPropagation(),e.onInstall(t,o)}}
      >
        ${a?"安装中":"安装"}
      </button>
    `:r`
    <a
      class="btn primary"
      href=${`/api/v1/skills/${encodeURIComponent(t)}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
      @click=${i=>i.stopPropagation()}
    >
      安装
    </a>
  `}function lr(e,t,n,s){const o=s&&s!=="__all__"?e.filter(i=>i!==s):e;return r`
    <div class="market-card-meta">
      ${n?r`<span class="market-card-chip">${n}</span>`:r`<span class="market-card-chip market-card-chip--muted">未标注</span>`}
      ${o.slice(0,3).map(i=>r`<span class="market-card-chip">${i}</span>`)}
      ${t.length>0?r`<span class="market-card-chip">OS: ${t.join("/")}</span>`:k}
    </div>
  `}function D1(e){const t=_1(e.items),n=e.selectedCategory||"__all__",s=e.selectedStatus||"__all__",a=(e.query??"").trim().toLowerCase(),o=e.items.filter(w=>{if(a&&!`${w.name??""} ${w.description??""} ${w.folder??""}`.toLowerCase().includes(a))return!1;const C=n==="__all__"?!0:tn(w.categoryCn)===n,L=s==="__all__"?!0:(w.status??"").trim().toLowerCase()===s;return C&&L}),i=new Map;for(const w of o){const C=tn(w.categoryCn),L=i.get(C)??[];L.push(w),i.set(C,L)}const c=n==="__all__"?t.map(w=>w.name).filter(w=>i.has(w)).map(w=>({name:w,items:i.get(w)??[]})):[{name:n,items:i.get(n)??[]}],d=!e.error||e.items.length>0,p=r`
    <div class="emp-toolbar__actions">
      <div class="emp-search">
        <span class="input"><input
          class="emp-search__input"
          type="text"
          placeholder="搜索技能"
          .value=${e.query}
          ?disabled=${e.loading}
          @input=${w=>e.onQueryChange(w.target.value)}
        /></span>
        <span class="emp-search__icon" aria-hidden="true">${z.search}</span>
      </div>
      <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
      <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddClick}>${l("skillsAdd")}</button>
    </div>
  `,m=(e.items??[]).filter(w=>e.installedKeys?.has(w.folder)??!1?a?`${w.name??""} ${w.description??""} ${w.folder??""}`.toLowerCase().includes(a):!0:!1),g=!e.loading&&!(c.length===0&&m.length===0),f=d||m.length>0||g,$=!!e.selectedFolder,S=()=>e.onDetailClose?e.onDetailClose():e.onSelect("");return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            ${e.error?r`<div class="callout danger">${e.error}</div>`:k}
            ${e.installSuccess?r`<div class="callout success">${e.installSuccess}</div>`:k}
            ${f?r`
                  <div class="emp-main__body">
                    ${d?p:k}
                    ${m.length===0?k:r`
                        <div class="emp-installed-section">
                          <h3 class="emp-section__title">已安装 (${m.length})</h3>
                          <div class="emp-grid emp-installed-grid">
                            ${m.map(w=>{const C=e.selectedFolder===w.folder,L=e.disabledKeys?.has(w.folder)??!1,P=!L,U=e.installingFolder===w.folder,R=Cn(w.tags),O=Cn(w.os),D=or(w.status);return r`
                                <div class="emp-card-wrap ${C?"active":""} ${L?"is-disabled":""}">
                                  <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(w.folder)}>
                                    ${ar(e.gatewayHost,w.logo_url,w.emoji)}
                                    <div class="emp-card__actions">
                                      ${ir(e,w.folder,!0,P,U,w.categoryCn)}
                                    </div>
                                    <h3 class="emp-card__title">${w.name||w.folder}</h3>
                                    <p class="emp-card__desc">${w.description??w.folder??"暂无描述"}</p>
                                    ${lr(R,O,D,n)}
                                  </div>
                                </div>
                              `})}
                          </div>
                        </div>
                      `}
                    ${g?r`
                          <div class="emp-sections">
                            ${c.map(w=>r`
                                <div class="emp-section">
                                  <div class="emp-section__header">
                                    <h3 class="emp-section__title">${w.name}</h3>
                                  </div>
                                  <div class="emp-grid">
                                    ${w.items.map(C=>{const L=e.selectedFolder===C.folder,P=e.installedKeys&&e.installedKeys.size>0?e.installedKeys.has(C.folder):!1,U=e.disabledKeys?.has(C.folder)??!1,R=!U,O=e.installingFolder===C.folder,D=Cn(C.tags),u=Cn(C.os),b=or(C.status);return r`
                                        <div class="emp-card-wrap ${L?"active":""} ${U?"is-disabled":""}">
                                          <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(C.folder)}>
                                            ${ar(e.gatewayHost,C.logo_url,C.emoji)}
                                            <div class="emp-card__actions">
                                              ${ir(e,C.folder,P,R,O,C.categoryCn)}
                                            </div>
                                            <h3 class="emp-card__title">${C.name||C.folder}</h3>
                                            <p class="emp-card__desc">${C.description??C.folder??"暂无描述"}</p>
                                            ${lr(D,u,b,n)}
                                          </div>
                                        </div>
                                      `})}
                                  </div>
                                </div>
                              `)}
                          </div>
                        `:k}
                  </div>
                `:k}

            ${e.addModalOpen?r`
                  <div class="modal-overlay" @click=${e.onAddClose}>
                    <div class="modal card" @click=${w=>w.stopPropagation()}>
                      <div class="card-title">${l("skillsAddSkill")}</div>
                      <div class="field" style="margin-top: 12px;">
                        <span>${l("skillsUploadName")}</span>
                        <span class="input"><input
                          type="text"
                          .value=${e.uploadName}
                          @input=${w=>e.onUploadNameChange(w.target.value)}
                          placeholder=${l("skillsUploadNamePlaceholder")}
                          pattern="[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}"
                          ?disabled=${e.uploadFiles.length>1}
                        /></span>
                        ${e.uploadFiles.length>1?r`
                              <div class="muted" style="margin-top: 4px; font-size: 0.9em;">
                                已选择多个压缩包：将自动从每个文件名提取技能名称（此处无需填写）。
                              </div>
                            `:k}
                      </div>
                      <div class="field" style="margin-top: 12px;">
                        <span>${l("skillsUploadFile")}</span>
                        <input
                          type="file"
                          accept=".md,.zip"
                          multiple
                          @change=${w=>{const C=w.target,L=C.files?Array.from(C.files):[];e.onUploadFilesChange(L)}}
                        />
                        <div class="muted" style="margin-top: 4px; font-size: 0.9em;">
                          ${l("skillsUploadFileHint")}
                        </div>
                        ${e.uploadFiles.length>0?r`
                              <div class="row" style="flex-wrap: wrap; gap: 4px; margin-top: 8px;">
                                ${e.uploadFiles.map(w=>r`<span class="chip" style="font-size: 12px;">${w.name}</span>`)}
                              </div>
                            `:k}
                      </div>
                      ${e.uploadError?r`
                            <div class="callout danger" style="margin-top: 12px;">
                              ${e.uploadError}
                            </div>
                          `:k}
                      ${e.uploadTemplate?r`
                            <details class="muted" style="margin-top: 12px;">
                              <summary>Template</summary>
                              <pre
                                style="
                                  margin-top: 8px;
                                  padding: 12px;
                                  background: var(--bg-content, #f5f5f5);
                                  border-radius: 6px;
                                  overflow: auto;
                                  max-height: 200px;
                                  font-size: 0.85em;
                                  white-space: pre-wrap;
                                "
                              >${e.uploadTemplate}</pre>
                            </details>
                          `:k}
                      <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                        <button class="btn" ?disabled=${e.uploadBusy} @click=${e.onAddClose}>
                          ${l("commonCancel")}
                        </button>
                        <button
                          class="btn primary"
                          ?disabled=${e.uploadBusy||e.uploadFiles.length===0||e.uploadFiles.length===1&&!e.uploadName.trim()}
                          @click=${e.onUploadSubmit}
                        >
                          ${e.uploadBusy?l("commonLoading"):l("skillsUploadSubmit")}
                        </button>
                      </div>
                    </div>
                  </div>
                `:k}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:c.length===0&&m.length===0?r`<div class="emp-empty">暂无匹配的技能</div>`:k}
          </div>
        </div>

        ${$?r`
              <div class="modal-overlay" @click=${S} role="dialog" aria-modal="true">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${w=>w.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      ${(()=>{const w=e.items.find(L=>L.folder===e.selectedFolder),C=lt(e.selectedDetail?.logo_url??w?.logo_url,e.gatewayHost);return r`
                          <div class="emp-detail-title-wrap">
                            ${C?r`<div class="emp-detail-logo"><img src=${C} alt="" /></div>`:r`
                                  <div class="emp-detail-logo emp-detail-logo--default">${Yd}</div>
                                `}
                            <h1 id="emp-detail-title" class="emp-detail-title" style="margin: 0;">
                              ${w?.name||e.selectedFolder}
                            </h1>
                            <div class="emp-detail-tags">
                              ${(()=>{if(!w)return k;const L=tn(w.categoryCn),P=n&&n!=="__all__"&&L===n,R=Cn(w.tags).filter(O=>{const D=tn(O);return!(D===L||n&&n!=="__all__"&&D===n)});return r`
                                  ${L&&!P?r`<span class="badge ghost">${L}</span>`:k}
                                  ${R.map(O=>r`<span class="badge ghost">${O}</span>`)}
                                `})()}
                            </div>
                          </div>
                          ${w?.description?r`<article class="emp-detail-summary">${w.description}</article>`:k}
                        `})()}
                      <div class="emp-detail-meta-row">
                        ${(()=>{const w=e.selectedFolder??"",C=e.installedKeys?.has(w)??!1,P=!(e.disabledKeys?.has(w)??!1);return C?xa(e,w,!0,P,!1):e.onInstall?xa(e,w,!1,!1,e.installingFolder===w):xa(e,w,!1,!1,!1)})()}
                      </div>
                    </div>
                    <button
                      class="emp-detail-modal__close"
                      type="button"
                      aria-label="关闭"
                      @click=${S}
                    >
                      ${z.x}
                    </button>
                  </div>
                  <div class="emp-detail-modal__body">
                    ${e.selectedDetail?.content?r`<div class="emp-detail-markdown emp-detail-content">${dt(ut(I1(e.selectedDetail.content)))}</div>`:r`<div class="emp-detail-content-empty">无 README</div>`}
                  </div>
                </div>
              </div>
            `:k}

        ${e.skillEditModalOpen?N1(e):k}
      </section>
    </main>
  `}function R1(e){const t=[];for(const s of e){const a=s.split("/");let o=t;for(let i=0;i<a.length;i++){const c=a[i],d=i===a.length-1,p=o.find(m=>m.name===c);if(p)o=p.children;else{const m={name:c,path:d?s:null,children:[]};o.push(m),d||(o=m.children)}}}const n=s=>{s.sort((a,o)=>{const i=a.path===null,c=o.path===null;return i!==c?i?-1:1:a.name.localeCompare(o.name)}),s.forEach(a=>n(a.children))};return n(t),t}function Zd(e,t,n,s=0){return r`
    <div style="display: flex; flex-direction: column;">
      ${e.map(a=>{const o=s*10+8;if(a.path===null)return r`
            <div style="display: flex; flex-direction: column;">
              <div
                style="
                  padding: 3px 8px 3px ${o}px;
                  font-size: 13px;
                  line-height: 1.6;
                  cursor: pointer;
                  user-select: none;
                  color: var(--text-main);
                  display: flex;
                  align-items: center;
                  gap: 4px;
                "
                @click=${c=>{c.stopPropagation();const d=c.currentTarget,p=d.querySelector("span[data-tree-icon]"),m=d.nextElementSibling;if(m){const g=m.style.display==="none";m.style.display=g?"block":"none",p&&(p.textContent=g?"▾":"▸")}}}
              >
                <span data-tree-icon style="display:inline-block;width:12px;text-align:center;color:var(--text-muted);font-size:11px;">▾</span>
                <span style="font-weight: 500;">${a.name}</span>
              </div>
              <div style="display: block;">
                ${Zd(a.children,t,n,s+1)}
              </div>
            </div>
          `;const i=t===a.path;return r`
          <div
            style="
              padding: 3px 8px 3px ${o}px;
              margin: 0 4px;
              border-radius: 3px;
              cursor: pointer;
              font-size: 13px;
              line-height: 1.6;
              font-family: var(--mono);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              ${i?"background: var(--primary-light, #e6f2ff); color: var(--primary, #0066cc);":"color: var(--text-main);"}
            "
            @click=${()=>n(a.path)}
            title=${a.path}
          >
            ${a.name}
          </div>
        `})}
    </div>
  `}function N1(e){const t=e.skillEditSkillKey??"",n=e.skillEditFiles??[],s=e.skillEditSelectedFile,a=e.skillEditContent??"",o=e.skillEditLoading??!1,i=e.skillEditSaving??!1,c=e.skillEditError,d=e.skillEditSyntaxError,p=s&&!o&&!i,m=n.filter(f=>!f.split("/").some($=>$.startsWith("."))),g=R1(m);return r`
    <div class="modal-overlay" @click=${e.onSkillEditClose} role="dialog" aria-modal="true">
      <div
        class="modal card"
        style="
          position: relative;
          width: min(1200px, 96vw);
          height: min(840px, 92vh);
          max-width: 96vw;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
        "
        @click=${f=>f.stopPropagation()}
      >
        <div
          class="row"
          style="
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            border-bottom: 1px solid var(--border, #e5e5e5);
            flex-shrink: 0;
          "
        >
          <div class="card-title" style="margin: 0;">编辑技能：${t}</div>
          <button class="btn btn--icon" type="button" aria-label="关闭" @click=${e.onSkillEditClose}>
            ${z.x}
          </button>
        </div>

        ${e.skillEditSuccessMessage?r`
              <div
                style="
                  position: absolute;
                  top: 12px;
                  right: 56px;
                  padding: 8px 16px;
                  border-radius: 6px;
                  background: #dcfce7;
                  color: #166534;
                  font-size: 13px;
                  font-weight: 500;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                  z-index: 10;
                  pointer-events: none;
                "
              >
                ${e.skillEditSuccessMessage}
              </div>
            `:k}

        <div class="row" style="flex: 1; min-height: 0; overflow: hidden; align-items: stretch;">
          <!-- File tree -->
          <div
            style="
              width: 250px;
              flex-shrink: 0;
              border-right: 1px solid var(--border, #e5e5e5);
              overflow: auto;
              padding: 0;
              background: var(--bg-subtle, #fafafa);
            "
          >
            ${o&&m.length===0?r`<div class="muted" style="padding: 8px;">加载中...</div>`:Zd(g,s??null,f=>e.onSkillEditFileSelect?.(f))}
          </div>

          <!-- Editor -->
          <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden;">
            ${o?r`<div class="muted" style="padding: 24px;">加载中...</div>`:r`
                  <textarea
                    style="
                      flex: 1;
                      min-height: 0;
                      width: 100%;
                      resize: none;
                      border: none;
                      outline: none;
                      padding: 12px;
                      font-family: var(--mono);
                      font-size: 13px;
                      line-height: 1.6;
                      background: transparent;
                      color: var(--text-main);
                    "
                    .value=${a}
                    ?disabled=${!s||i}
                    @input=${f=>e.onSkillEditContentChange?.(f.target.value)}
                  ></textarea>
                `}
          </div>
        </div>

        <div
          class="row"
          style="
            justify-content: space-between;
            align-items: center;
            padding: 12px 20px;
            border-top: 1px solid var(--border, #e5e5e5);
            flex-shrink: 0;
            gap: 12px;
          "
        >
          <div style="flex: 1; min-width: 0;">
            ${d?r`<div class="callout danger" style="padding: 8px 12px; font-size: 13px;">${d}</div>`:c?r`<div class="callout danger" style="padding: 8px 12px; font-size: 13px;">${c}</div>`:k}
          </div>
          <div class="row" style="gap: 8px; flex-shrink: 0;">
            <button class="btn" ?disabled=${i} @click=${e.onSkillEditClose}>取消</button>
            <button
              class="btn primary"
              ?disabled=${!p}
              @click=${async()=>{e.onSkillEditSave&&await e.onSkillEditSave()}}
            >
              ${i?"保存中...":"保存"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `}const U1=Bs(class extends Ws{constructor(){super(...arguments),this.key=k}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(fd(e),this.key=t),n}});function O1(e){return{prometheus:"Prometheus",elasticsearch:"Elasticsearch",filesystem:"Filesystem"}[e.toLowerCase()]??e.charAt(0).toUpperCase()+e.slice(1)}function Xd(e){return!e||typeof e!="object"?"":Object.entries(e).map(([t,n])=>`${t}=${n}`).join(`
`)}function F1(e,t,n,s){if(n==="raw")return!s;const a=e,o=t??"stdio";return o==="stdio"?!!a?.command?.trim():o==="url"?!!a?.url?.trim():o==="service"?!!a?.service?.trim()&&!!a?.serviceUrl?.trim():!1}function eu(e){const t={};for(const n of e.split(/\n/)){const s=n.trim();if(!s)continue;const a=s.indexOf("=");if(a>0){const o=s.slice(0,a).trim(),i=s.slice(a+1).trim();o&&(t[o]=i)}}return t}const B1=["npx","docker","uv"];function tu(e){const n=(e??"").trim()||"npx",s=B1;return s.includes(n)?{value:n,options:s}:{value:n,options:[n,...s.filter(a=>a!==n)]}}function nu(e,t,n,s){const a=`${n}\0${e}\0${t.join("\0")}`;return U1(a,r`
      <select @change=${o=>s(o.target.value)}>
        ${t.map(o=>r`<option value=${o} ?selected=${o===e}>${o}</option>`)}
      </select>
    `)}function W1(e,t,n){if(e==="stdio"){const{value:s,options:a}=tu(t?.command);return r`
      <div class="field">
        <span>${l("mcpCommand")} *</span>
        <span class="select">
          ${nu(s,a,"mcp-add",o=>n({command:o}))}
        </span>
      </div>
      <div class="field">
        <span>${l("mcpArgs")}</span>
        <span class="input"><input
          type="text"
          .value={(draft?.args ?? []).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${o=>{const i=o.target.value;n({args:i.trim()?i.trim().split(/\s+/):[]})}}
        /></span>
      </div>
      <div class="field">
        <span>${l("mcpEnv")}</span>
        <span class="textarea"><textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder=${l("mcpEnvPlaceholder")}
          .value=${Xd(t?.env)}
          @input=${o=>{const i=o.target.value;n({env:eu(i)})}}
        ></textarea></span>
      </div>
    `}return e==="url"?r`
      <div class="field">
        <span>${l("mcpUrl")} *</span>
        <span class="input"><input
          type="text"
          .value=${t?.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${s=>n({url:s.target.value})}
        /></span>
      </div>
    `:r`
    <div class="field">
      <span>${l("mcpService")} *</span>
      <span class="input"><input
        type="text"
        .value=${t?.service??""}
        placeholder="prometheus"
        @input=${s=>n({service:s.target.value})}
      /></span>
    </div>
    <div class="field">
      <span>${l("mcpServiceUrl")} *</span>
      <span class="input"><input
        type="text"
        .value=${t?.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${s=>n({serviceUrl:s.target.value})}
      /></span>
    </div>
  `}function H1(e,t,n,s){if(e==="stdio"){const{value:a,options:o}=tu(t.command);return r`
      <div class="field">
        <span>${l("mcpCommand")} *</span>
        <span class="select">
          ${nu(a,o,`mcp-edit:${n}`,i=>s(n,{command:i}))}
        </span>
      </div>
      <div class="field">
        <span>${l("mcpArgs")}</span>
        <span class="input"><input
          type="text"
          .value=${(t.args??[]).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${i=>{const c=i.target.value;s(n,{args:c.trim()?c.trim().split(/\s+/):[]})}}
        /></span>
      </div>
      <div class="field">
        <span>${l("mcpEnv")}</span>
        <span class="textarea"><textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder=${l("mcpEnvPlaceholder")}
          .value=${Xd(t.env)}
          @input=${i=>{const c=i.target.value;s(n,{env:eu(c)})}}
        ></textarea></span>
      </div>
    `}return e==="url"?r`
      <div class="field">
        <span>${l("mcpUrl")} *</span>
        <span class="input"><input
          type="text"
          .value=${t.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${a=>s(n,{url:a.target.value})}
        /></span>
      </div>
    `:r`
    <div class="field">
      <span>${l("mcpService")} *</span>
      <span class="input"><input
        type="text"
        .value=${t.service??""}
        placeholder="prometheus"
        @input=${a=>s(n,{service:a.target.value})}
      /></span>
    </div>
    <div class="field">
      <span>${l("mcpServiceUrl")} *</span>
      <span class="input"><input
        type="text"
        .value=${t.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${a=>s(n,{serviceUrl:a.target.value})}
      /></span>
    </div>
  `}function z1(e){return O1(e)}function Q1(e){if(!e.open)return k;const{serverKey:t,entry:n}=e;return r`
    <div class="modal-overlay" @click=${e.onCancel}>
      <div class="modal card" style="max-width: 560px;" @click=${s=>s.stopPropagation()}>
        <div class="card-title">${z1(t)} ${l("configSettingsTitle")}</div>
        <div class="row" style="margin-bottom: 12px; gap: 8px;">
          <button
            class="btn ${e.editMode==="form"?"primary":""}"
            @click=${()=>e.onEditModeChange("form")}
          >
            ${l("mcpFormMode")}
          </button>
          <button
            class="btn ${e.editMode==="raw"?"primary":""}"
            @click=${()=>{e.onEditModeChange("raw"),e.onRawChange(t,JSON.stringify(n,null,2))}}
          >
            ${l("mcpRawMode")}
          </button>
        </div>
        ${e.editMode==="form"?r`
                <div class="config-form">
                  <div class="field">
                    <div class="row" style="align-items: center; gap: 8px; flex-wrap: nowrap;">
                      <span>${l("mcpEnabledField")}</span>
                      <span class="checkbox"><input
                        type="checkbox"
                        ?checked=${n.enabled!==!1}
                        @change=${s=>e.onFormPatch(t,{enabled:s.target.checked})}
                      /></span>
                    </div>
                  </div>
                  <div class="mcp-connection-tabs" style="display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--border, #333); padding-bottom: 4px;">
                    <button
                      type="button"
                      class="btn ${(e.editConnectionType??"stdio")==="stdio"?"primary":""}"
                      style="flex: 1; min-width: 0;"
                      @click=${()=>e.onEditConnectionTypeChange("stdio")}
                    >
                      ${l("mcpConnectionTypeStdio")}
                    </button>
                    <button
                      type="button"
                      class="btn ${(e.editConnectionType??"stdio")==="url"?"primary":""}"
                      style="flex: 1; min-width: 0;"
                      @click=${()=>e.onEditConnectionTypeChange("url")}
                    >
                      ${l("mcpConnectionTypeUrl")}
                    </button>
                    <button
                      type="button"
                      class="btn ${(e.editConnectionType??"stdio")==="service"?"primary":""}"
                      style="flex: 1; min-width: 0;"
                      @click=${()=>e.onEditConnectionTypeChange("service")}
                    >
                      ${l("mcpConnectionTypeService")}
                    </button>
                  </div>
                  <div class="mcp-connection-fields" style="margin-bottom: 12px;">
                    ${H1(e.editConnectionType==="stdio"||e.editConnectionType==="url"||e.editConnectionType==="service"?e.editConnectionType:"stdio",n,t,e.onFormPatch)}
                  </div>
                  <div class="field">
                    <span>${l("mcpToolPrefix")}</span>
                    <span class="input"><input
                      type="text"
                      .value=${n.toolPrefix??""}
                      placeholder="Optional"
                      @input=${s=>e.onFormPatch(t,{toolPrefix:s.target.value})}
                    /></span>
                  </div>
                </div>
              `:r`
                <div class="field">
                  <span>${l("mcpRawJson")}</span>
                  <span class="textarea"><textarea
                    style="min-height: 200px; font-family: var(--mono);"
                    .value=${e.rawJson}
                    @input=${s=>e.onRawChange(t,s.target.value)}
                  ></textarea></span>
                  ${e.rawError?r`<div class="callout danger" style="margin-top: 8px;">${e.rawError}</div>`:k}
                </div>
              `}
        <div class="row" style="margin-top: 16px; gap: 8px;">
          <button
            class="btn primary"
            ?disabled=${e.saving||!e.formDirty&&e.editMode==="form"}
            @click=${e.onSave}
          >
            ${e.saving?l("commonSaving"):l("commonSave")}
          </button>
          <button class="btn" ?disabled=${e.saving} @click=${e.onCancel}>
            ${l("commonCancel")}
          </button>
        </div>
      </div>
    </div>
  `}const Ca=r`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="4" y="4" width="8" height="8" rx="1"/>
    <rect x="12" y="12" width="8" height="8" rx="1"/>
  </svg>
`;function Zt(e){const t=(e??"").trim();return t||"其它"}function su(e){return(e??"").trim().toLowerCase()}function au(e){const t=(e??"").trim().toLowerCase();return t?t==="open"?"开放":t==="paid"?"收费":t==="private"?"私有":e??"":""}function ou(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Ma(e,t){if(!e)return;const n=typeof t=="string"?Number(t):t;return e.get(t)??e.get(String(t))??(Number.isFinite(n)?e.get(n):void 0)}function K1(e,t){const n=su(t),s=(e??[]).filter(i=>n?`${i.name??""} ${i.description??""}`.toLowerCase().includes(n):!0),a=new Map;a.set("__all__",s.length);for(const i of s){const c=Zt(i.category);a.set(c,(a.get(c)??0)+1)}return{orderedCategories:["__all__",...Array.from(a.keys()).filter(i=>i!=="__all__").sort((i,c)=>i.localeCompare(c,"zh-Hans-CN"))],counts:a}}function q1(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),o=a.match(/\r?\n\s*---\s*\r?\n?/);return o?a.slice(o.index+o[0].length).trimStart():e}function rr(e,t,n,s,a){return n?e.onToggleEnabled?r`
          <div class="market-card-actions">
            <div
              class=${`switch${s?" is-checked":""}`}
              @click=${o=>{o.stopPropagation(),e.onToggleEnabled(n,!s)}}
            >
              <input
                type="checkbox"
                class="switch__input"
                ?checked=${s}
                aria-label=${s?"禁用":"启用"}
              />
              <span class="switch__core"></span>
            </div>
          </div>
        `:k:e.onInstall?r`
      <button
        class="btn small"
        type="button"
        ?disabled=${a}
        @click=${o=>{o.stopPropagation(),e.onInstall(t.id,t.category)}}
      >
        ${a?"安装中":"安装"}
      </button>
    `:r`
    <a
      class="btn small"
      href=${`/api/v1/mcps/${t.id}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
      @click=${o=>o.stopPropagation()}
    >
      安装
    </a>
  `}function V1(e,t,n,s,a){return n?r`
      <div class="market-card-actions">
        ${e.onEdit?r`
              <button
                class="btn primary"
                type="button"
                @click=${o=>{o.stopPropagation(),e.onEdit(n)}}
              >
                编辑
              </button>
            `:k}
        ${e.onToggleEnabled?r`
              <button
                class="btn"
                type="button"
                @click=${o=>{o.stopPropagation(),e.onToggleEnabled(n,!s)}}
              >
                ${s?"禁用":"启用"}
              </button>
            `:k}
        ${e.onDelete?r`
              <button
                class="btn"
                type="button"
                @click=${async o=>{o.stopPropagation(),await Te(l("mcpDeleteConfirm"))&&e.onDelete(n)}}
              >
                删除
              </button>
            `:k}
      </div>
    `:e.onInstall?r`
      <button
        class="btn primary"
        type="button"
        ?disabled=${a}
        @click=${o=>{o.stopPropagation(),e.onInstall(t.id,t.category)}}
      >
        ${a?"安装中":"安装"}
      </button>
    `:r`
    <a
      class="btn primary"
      href=${`/api/v1/mcps/${t.id}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
      @click=${o=>o.stopPropagation()}
    >
      安装
    </a>
  `}function cr(e,t){const n=ou(e.tags),s=au(e.status),a=t!=="__all__"?n.filter(o=>o!==t).slice(0,3):n.slice(0,3);return r`
    <div class="market-card-meta">
      ${s?r`<span class="market-card-chip">${s}</span>`:k}
      ${a.map(o=>r`<span class="market-card-chip">${o}</span>`)}
    </div>
  `}function j1(e){const t=(e.category??"").trim()||"__all__",n=su(e.query),s=(e.items??[]).filter(w=>n?`${w.name??""} ${w.description??""}`.toLowerCase().includes(n):!0),a=new Map;a.set("__all__",s.length);for(const w of s){const C=Zt(w.category);a.set(C,(a.get(C)??0)+1)}[...Array.from(a.keys()).filter(w=>w!=="__all__").sort((w,C)=>w.localeCompare(C,"zh-Hans-CN"))];const o=t==="__all__"?s:s.filter(w=>Zt(w.category)===t),i=new Map;for(const w of o){const C=Zt(w.category),L=i.get(C)??[];L.push(w),i.set(C,L)}const c=t==="__all__"?Array.from(i.entries()).sort((w,C)=>w[0].localeCompare(C[0],"zh-Hans-CN")).map(([w,C])=>({title:w==="其它"?"其它":w,items:C})):[{title:t,items:o}],d=!e.error||(e.items?.length??0)>0,p=r`
    <div class="emp-toolbar__actions">
      <div class="emp-search">
        <span class="input"><input
          class="emp-search__input"
          type="text"
          placeholder="搜索 MCP 名称或描述..."
          .value=${e.query}
          ?disabled=${e.loading}
          @input=${w=>e.onQueryChange(w.target.value)}
        /></span>
        <span class="emp-search__icon" aria-hidden="true">${z.search}</span>
      </div>
      <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
      ${e.onAddServer?r`
            <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddServer}>
              ${l("mcpAddServer")}
            </button>
          `:k}
    </div>
  `,m=s.filter(w=>e.installedRemoteIds?.has(String(w.id))),g=!e.loading&&!(o.length===0&&m.length===0),f=d||m.length>0||g,$=e.selectedDetail!==null,S=()=>e.onDetailClose?e.onDetailClose():e.onSelect(-1);return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            ${e.addModalOpen&&e.onAddClose?r`
                    <div class="modal-overlay" @click=${e.onAddClose}>
                      <div class="modal card" style="max-width: 520px;" @click=${w=>w.stopPropagation()}>
                        <div class="card-title">${l("mcpAddServer")}</div>
                        <div class="field" style="margin-top: 12px;">
                          <span>${l("mcpServerName")} *</span>
                          <span class="input"><input
                            type="text"
                            .value=${e.addName??""}
                            @input=${w=>e.onAddNameChange?.(w.target.value)}
                            placeholder="prometheus, my-mcp"
                          /></span>
                        </div>
                        <div class="row" style="margin: 12px 0; gap: 8px;">
                          <button
                            class="btn ${(e.addEditMode??"form")==="form"?"primary":""}"
                            @click=${()=>e.onAddEditModeChange?.("form")}
                          >
                            ${l("mcpFormMode")}
                          </button>
                          <button
                            class="btn ${(e.addEditMode??"form")==="raw"?"primary":""}"
                            @click=${()=>e.onAddEditModeChange?.("raw")}
                          >
                            ${l("mcpRawMode")}
                          </button>
                        </div>
                        ${(e.addEditMode??"form")==="form"?r`
                                <div class="config-form" id="tool-library-mcp-add-form">
                                  <div class="mcp-connection-tabs" style="display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--border, #333); padding-bottom: 4px;">
                                    <button
                                      type="button"
                                      class="btn ${(e.addConnectionType??"stdio")==="stdio"?"primary":""}"
                                      style="flex: 1; min-width: 0;"
                                      @click=${()=>e.onAddConnectionTypeChange?.("stdio")}
                                    >
                                      ${l("mcpConnectionTypeStdio")}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn ${(e.addConnectionType??"stdio")==="url"?"primary":""}"
                                      style="flex: 1; min-width: 0;"
                                      @click=${()=>e.onAddConnectionTypeChange?.("url")}
                                    >
                                      ${l("mcpConnectionTypeUrl")}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn ${(e.addConnectionType??"stdio")==="service"?"primary":""}"
                                      style="flex: 1; min-width: 0;"
                                      @click=${()=>e.onAddConnectionTypeChange?.("service")}
                                    >
                                      ${l("mcpConnectionTypeService")}
                                    </button>
                                  </div>
                                  <div class="mcp-connection-fields" style="margin-bottom: 12px;">
                                    ${W1(e.addConnectionType==="stdio"||e.addConnectionType==="url"||e.addConnectionType==="service"?e.addConnectionType:"stdio",e.addDraft,w=>e.onAddFormPatch?.(w))}
                                  </div>
                                  <div class="field">
                                    <span>${l("mcpToolPrefix")}</span>
                                    <span class="input"><input
                                      type="text"
                                      .value=${e.addDraft?.toolPrefix??""}
                                      placeholder="Optional"
                                      @input=${w=>e.onAddFormPatch?.({toolPrefix:w.target.value})}
                                    /></span>
                                  </div>
                                </div>
                              `:r`
                                <div class="field">
                                  <span>${l("mcpRawJson")}</span>
                                  <span class="textarea"><textarea
                                    style="min-height: 180px; font-family: var(--mono);"
                                    .value=${e.addRawJson??"{}"}
                                    @input=${w=>e.onAddRawChange?.(w.target.value)}
                                  ></textarea></span>
                                  ${e.addRawError?r`<div class="callout danger" style="margin-top: 8px;">${e.addRawError}</div>`:k}
                                </div>
                              `}
                        <div class="row" style="margin-top: 16px; gap: 8px; justify-content: flex-end;">
                          <button class="btn" @click=${e.onAddClose}>${l("commonCancel")}</button>
                          <button
                            class="btn primary"
                            ?disabled=${e.saving||!(e.addName??"").trim()||!F1(e.addDraft,e.addConnectionType??"stdio",e.addEditMode??"form",e.addRawError??null)}
                            @click=${e.onAddSubmit}
                          >
                            ${e.saving?l("commonSaving"):l("mcpAddServer")}
                          </button>
                        </div>
                      </div>
                    </div>
                  `:k}

            ${e.error?r`<div class="callout danger">${e.error}</div>`:k}
            ${f?r`
                  <div class="emp-main__body">
                    ${d?p:k}
                    ${m.length===0?k:r`
                        <div class="emp-installed-section">
                          <h3 class="emp-section__title">已安装 (${m.length})</h3>
                          <div class="emp-grid emp-installed-grid">
                            ${m.map(w=>{const C=e.selectedId===w.id,L=lt(w.logo_url),P=Ma(e.installedMcpMap,w.id),U=P?e.disabledMcpKeys?.has(P)??!1:!1,R=!U,O=e.installingId===w.id;return r`
                                <div class="emp-card-wrap ${C?"active":""} ${U?"is-disabled":""}">
                                  <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(w.id)}>
                                    <div class="emp-card__icon ${L?"":"emp-card__icon--default"}">
                                      ${L?r`<img src=${L} alt="" />`:Ca}
                                    </div>
                                    <div class="emp-card__actions">
                                      ${rr(e,w,P,R,O)}
                                    </div>
                                    <h3 class="emp-card__title">${w.name}</h3>
                                    <p class="emp-card__desc">${w.description??"暂无描述"}</p>
                                    ${cr(w,t)}
                                  </div>
                                </div>
                              `})}
                          </div>
                        </div>
                      `}
                    ${g?r`
                          <div class="emp-sections">
                            ${c.map(w=>w.items.length>0?r`
                                      <div class="emp-section">
                                        <div class="emp-section__header">
                                          <h3 class="emp-section__title">${w.title}</h3>
                                        </div>
                                        <div class="emp-grid">
                                          ${w.items.map(C=>{const L=e.selectedId===C.id,P=lt(C.logo_url),U=e.installedRemoteIds?.has(String(C.id))??!1,R=Ma(e.installedMcpMap,C.id),O=R?e.disabledMcpKeys?.has(R)??!1:!1,D=!O,u=e.installingId===C.id;return r`
                                              <div class="emp-card-wrap ${L?"active":""} ${O?"is-disabled":""}">
                                                <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(C.id)}>
                                                  <div class="emp-card__icon ${P?"":"emp-card__icon--default"}">
                                                    ${P?r`<img src=${P} alt="" />`:Ca}
                                                  </div>
                                                  <div class="emp-card__actions">
                                                    ${rr(e,C,U?R:void 0,D,u)}
                                                  </div>
                                                  <h3 class="emp-card__title">${C.name}</h3>
                                                  <p class="emp-card__desc">${C.description??"暂无描述"}</p>
                                                  ${cr(C,t)}
                                                </div>
                                              </div>
                                            `})}
                                        </div>
                                      </div>
                                    `:k)}
                          </div>
                        `:k}
                  </div>
                `:k}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:o.length===0&&m.length===0?r`<div class="emp-empty">暂无匹配的 MCP</div>`:k}
          </div>
        </div>

        ${$&&e.selectedDetail?r`
              <div class="modal-overlay" @click=${S} role="dialog" aria-modal="true">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${w=>w.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      <div class="emp-detail-title-wrap">
                        ${(()=>{const w=lt(e.selectedDetail.logo_url);return w?r`<div class="emp-detail-logo"><img src=${w} alt="" /></div>`:r`
                                <div class="emp-detail-logo emp-detail-logo--default">
                                  ${Ca}
                                </div>
                              `})()}
                        <h1 id="emp-detail-title" class="emp-detail-title" style="margin: 0;">
                          ${e.selectedDetail.name??`#${e.selectedDetail.id}`}
                        </h1>
                        <div class="emp-detail-tags">
                          ${(e.selectedDetail.status??"").trim()?r`<span class="badge ghost">${au(e.selectedDetail.status)}</span>`:k}
                          ${(()=>{const w=Zt(e.selectedDetail.category);return ou(e.selectedDetail.tags).filter(P=>{const U=Zt(P);return!(U===w||t!=="__all__"&&U===t)}).map(P=>r`<span class="badge ghost">${P}</span>`)})()}
                        </div>
                      </div>
                      <article class="emp-detail-summary">${e.selectedDetail.description??""}</article>
                      <div class="emp-detail-meta-row">
                        ${(()=>{const w=e.selectedDetail?.id??0,C=e.installedRemoteIds?.has(String(w))??!1,L=Ma(e.installedMcpMap,w),U=!(L?e.disabledMcpKeys?.has(L)??!1:!1),R=e.installingId===w;return V1(e,e.selectedDetail,C?L:void 0,U,R)})()}
                      </div>
                    </div>
                    <button
                      class="emp-detail-modal__close"
                      type="button"
                      aria-label="关闭"
                      @click=${S}
                    >
                      ${z.x}
                    </button>
                  </div>
                  <div class="emp-detail-modal__body">
                    ${e.selectedDetail.readme?r`<div class="emp-detail-markdown emp-detail-content">${dt(ut(q1(e.selectedDetail.readme)))}</div>`:r`<div class="emp-detail-content-empty">无 README</div>`}
                  </div>
                </div>
              </div>
            `:k}
      </section>
    </main>
  `}const G1={"octa-icon-plane":r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M90.13043452 377.09544508c-22.77942152-7.61803576-22.92879507-19.86664342 0.44811963-27.63405274l831.56093128-277.16208183c23.00348185-7.69272253 36.22301554 5.22806406 29.79996512 27.78342628L714.36128303 931.64366807c-6.64710971 23.00348185-19.86664342 23.82503433-29.57590582 1.8671653L528.16751578 581.21400265 789.57071869 232.65150353 441.00821957 494.05470644 90.13043452 377.09544508z"></path>
    </svg>
  `,"octa-icon-grass":r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M952.29397921 288.6152692v110.1301066A286.2326018 286.2326018 0 0 1 665.98589397 684.9024952H556.0067532v220.18473081H467.91776337V596.8889888l0.83031668-44.00675217a286.2326018 286.2326018 0 0 1 285.32680272-264.191484h198.21909644zM247.73303257 112.51277399a308.34920303 308.34920303 0 0 1 292.49771502 210.74932081 329.40903935 329.40903935 0 0 0-115.6403876 229.62014183H379.904258A308.19823721 308.19823721 0 0 1 71.63053737 244.608516V112.51277399h176.1024952z"></path>
    </svg>
  `,"octa-icon-cap":r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M512 139.10412991L68.76629523 397.63601824l443.23370477 258.53188835 369.34031453-215.41158053v270.81579361H955.23370477V397.63601824L512 139.10412991zM216.48975736 563.46874307V730.06129683A368.77044236 368.77044236 0 0 0 512 877.78475897a368.77044236 368.77044236 0 0 0 295.51024264-147.72346214V563.53206229L512 735.88665421 216.48975736 563.53206229z"></path>
    </svg>
  `,"octa-icon-combat":r`
    <svg viewBox="0 0 1024 1024">
      <path fill="currentColor" stroke="none" d="M290.12480029 558.97600016l158.36159955 158.4383997-63.2831997 63.35999985 63.35999985 63.35999985-63.35999985 63.3600009-110.82240015-110.8992003-126.7199997 126.7199997-63.35999985-63.35999985 126.7199997-126.7199997-110.8992003-110.82240015 63.35999985-63.35999985 63.35999985 63.2831997 63.28320075-63.35999985zM108.79999999 92.80000001l158.89919955 0.1536003 529.38240075 529.3823997 63.35999985-63.2831997 63.35999985 63.35999985-110.82240015 110.82240015 126.7199997 126.7199997-63.35999985 63.35999985-126.7199997-126.7199997-110.8992003 110.8992003-63.35999985-63.3600009 63.35999985-63.35999985L108.79999999 251.00800031l-0.1536003-158.2080003z m647.73119985 0l158.66880015 0.1536003 0.07680015 157.82399955-181.5551997 181.5551997-158.43840075-158.4383997 181.24800015-181.09439985z"></path>
    </svg>
  `};function J1(e){const t=(e??"").trim();return t?G1[t]??null:null}function Y1(e){return(e??"").trim().toLowerCase()}function cs(e,t){return t?(e??"").toLowerCase().includes(t):!0}function Z1(e){const t=(e??"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-");return t?`tutorials-category-${t}`:""}function X1(e){const t=(e??"").trim();if(!t)return null;try{const n=new URL(t),s=n.hostname.toLowerCase();if(!s.includes("bilibili.com")&&!s.includes("b23.tv"))return null;const a=n.pathname,o=a.match(/\/video\/(BV[0-9A-Za-z]+)/i);if(o)return`https://player.bilibili.com/player.html?bvid=${o[1]}&high_quality=1`;const i=a.match(/\/video\/av(\d+)/i);return i?`https://player.bilibili.com/player.html?aid=${i[1]}&high_quality=1`:null}catch{return null}}function e2(e,t){const n=(t??"").trim();if(!n)return null;for(const s of e??[])for(const a of s.courses??[]){const o=(a.link??"").trim();if((a.course_type??"").trim().toLowerCase()==="standalone"&&o===n)return{category:s,course:a,lesson:{id:a.id,title:a.title,duration:a.duration,link:a.link,sort_order:a.sort_order,created_at:a.created_at,updated_at:a.updated_at}};for(const c of a.lessons??[])if((c.link??"").trim()===n)return{category:s,course:a,lesson:c}}return null}const t2=[{role:"SRE工程师",name:"邓雪",avatar:"/img/avatar/dengxue.png",desc:"用上OpenOcta后，服务器巡检、告警排查全交给智能体，深夜再也不用爬起来处理故障，值班轻松了不止一倍"},{role:"DBA工程师",name:"许知意",avatar:"/img/avatar/xuzhiyi.png",desc:"数据库巡检、慢SQL分析、备份校验都能自动执行，高危操作还有审批拦截，工作更稳更省心，效率直接拉满"},{role:"测试工程师",name:"杨雅琪",avatar:"/img/avatar/yangyaqi.png",desc:"自动化测试脚本批量生成、环境一键巡检、测试数据自动准备，迭代更快，加班次数少了一大半"},{role:"安全工程师",name:"孙梦佳",avatar:"/img/avatar/sunmengjia.png",desc:"安全基线检查、漏洞扫描、日志审计智能体自动跑，异常行为实时告警，安全合规省心又可控"}];function n2(e){const t=[...e.categories??[]].sort((p,m)=>(p.sort_order??0)-(m.sort_order??0)||p.name.localeCompare(m.name,"zh-Hans-CN")),n=e.selectedCategoryId&&t.some(p=>p.id===e.selectedCategoryId)?e.selectedCategoryId:t[0]?.id??null,s=n?t.find(p=>p.id===n)??null:null,a=Y1(e.query),o=(s?.courses??[]).slice().sort((p,m)=>(p.sort_order??0)-(m.sort_order??0)||p.title.localeCompare(m.title,"zh-Hans-CN")).filter(p=>cs(p.title??"",a)?!0:(p.lessons??[]).some(m=>cs(m.title??"",a))),i=e.playingLink?X1(e.playingLink):null,c=e2(t,e.playingLink),d=r`
    <div class="emp-toolbar__actions">
      <div class="emp-search">
        <span class="input"><input
          class="emp-search__input"
          type="text"
          placeholder="搜索课程/课时"
          .value=${e.query}
          ?disabled=${e.loading}
          @input=${p=>e.onQueryChange(p.target.value)}
        /></span>
        <span class="emp-search__icon" aria-hidden="true">${z.search}</span>
      </div>
      <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
    </div>
  `;return r`
    <main class="tutorials-page">
      <div class="tutorials-board">
        <div class="tutorials-board__header">
          <div class="tutorials-board__title-wrap">
            <h2 class="tutorials-board__title">OpenOcta 教程</h2>
          </div>
          ${d}
        </div>
        <div class="tutorials-board__body">
          <aside class="tutorials-categories">
            ${t.length===0?r`<button class="tutorials-category" disabled>暂无分类</button>`:t.map(p=>{const m=n===p.id,g=J1(p.icon_class),f=(p.name??"").trim().slice(0,1)||"教",$=Z1(p.accent);return r`
                    <button
                      class="tutorials-category ${$} ${m?"active":""}"
                      type="button"
                      ?disabled=${e.loading}
                      @click=${()=>e.onSelectCategory(p.id)}
                    >
                      <span class="tutorials-category__icon" aria-hidden="true">
                        ${g?r`<span class="tutorials-category__icon-svg">${g}</span>`:f}
                      </span>
                      <span class="tutorials-category__label">${p.name}</span>
                    </button>
                  `})}
          </aside>

          <div class="tutorials-content">
            ${e.error?r`<div class="callout danger" style="margin-bottom: 16px;">${e.error}</div>`:k}

            ${s?o.length?r`
                      <div class="tutorials-card">
                        ${o.map(p=>{const m=(p.course_type??"").trim().toLowerCase()==="standalone",f=(p.lessons??[]).slice().sort((w,C)=>(w.sort_order??0)-(C.sort_order??0)||w.title.localeCompare(C.title,"zh-Hans-CN")).map((w,C)=>({...w,sequence:C+1})).filter(w=>cs(w.title??"",a)||cs(p.title??"",a)),$=m&&f.length===0?[{id:p.id,title:p.title,duration:p.duration,link:p.link,sequence:1}]:f;return r`
                      <details ?open=${!0} class="tutorials-course">
                        <summary class="tutorials-course__summary">
                          <span class="tutorials-course__title-row">
                            <span class="tutorials-course__caret" aria-hidden="true"></span>
                            <span class="tutorials-course__title">${p.title}</span>
                          </span>
                        </summary>

                      <div class="tutorials-lessons">
                        ${$.map(w=>{const C=String(w.sequence).padStart(2,"0"),L=!!(w.link??"").trim();return r`
                            <div
                              class="tutorials-lesson ${L?"tutorials-lesson--clickable":"tutorials-lesson--disabled"}"
                              @click=${()=>{L&&e.onLessonClick(w.link)}}
                              role=${L?"button":"none"}
                              tabindex=${L?0:k}
                              @keydown=${U=>{L&&(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),e.onLessonClick(w.link))}}
                            >
                              <span class="tutorials-lesson__index">${C}</span>
                              <span class="tutorials-lesson__title">${w.title}</span>
                              ${(w.duration??"").trim()?r`<span class="tutorials-lesson__duration">${w.duration}</span>`:k}
                            </div>
                          `})}
                      </div>
                    </details>
                  `})}
                      </div>
                    `:r`<div class="emp-empty">没有匹配的课程/课时</div>`:r`<div class="emp-empty">暂无分类数据，请点击“刷新”。</div>`}
          </div>
        </div>
      </div>

      <aside class="tutorials-outcomes">
        <h3 class="tutorials-outcomes__title">看看Ta们的学习成果</h3>
        <div class="tutorials-outcomes__list">
          ${t2.map(p=>r`
              <div class="tutorials-outcomes__card">
                <div class="tutorials-outcomes__card-header">
                  <span class="tutorials-outcomes__avatar"><img src=${p.avatar} alt=${p.name} /></span>
                  <div class="tutorials-outcomes__card-info">
                    <span class="tutorials-outcomes__role">${p.role}</span>
                    <span class="tutorials-outcomes__name">${p.name}</span>
                  </div>
                </div>
                <p class="tutorials-outcomes__desc">${p.desc}</p>
              </div>
            `)}
        </div>
      </aside>

      ${e.playingLink?r`
            <div class="modal-overlay" @click=${e.onPlayingClose} role="dialog" aria-modal="true" aria-labelledby="tutorial-detail-title">
              <div class="modal card emp-detail-modal emp-detail-modal--large tutorials-detail-modal" @click=${p=>p.stopPropagation()}>
                <div class="emp-detail-modal__header tutorials-detail-modal__header">
                  <div class="emp-detail-header tutorials-detail-modal__header-main">
                    <h1 id="tutorial-detail-title" class="emp-detail-title tutorials-detail-modal__title">
                      ${c?.lesson.title??"教程详情"}
                    </h1>
                  </div>
                  <div class="tutorials-detail-modal__actions">
                    <a
                      class="tutorials-detail-modal__link"
                      href=${e.playingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      @click=${p=>p.stopPropagation()}
                    >
                      在哔哩哔哩打开
                    </a>
                    <button
                      class="emp-detail-modal__close"
                      type="button"
                      aria-label="关闭"
                      @click=${e.onPlayingClose}
                    >
                      ${z.x}
                    </button>
                  </div>
                </div>
                <div class="emp-detail-modal__body tutorials-detail-modal__body">
                  ${i?r`
                        <div class="tutorials-video-context tutorials-detail-video-context">
                          <div class="tutorials-video-wrap tutorials-detail-video-wrap">
                            <iframe
                              src=${i}
                              scrolling="no"
                              border="0"
                              frameborder="no"
                              framespacing="0"
                              allowfullscreen="true"
                              title=${c?.lesson.title??"B站视频播放"}
                            ></iframe>
                          </div>
                        </div>
                      `:r`
                        <div class="callout info">该教程暂不支持内嵌播放，请点击“打开原链接”查看详情。</div>
                      `}
                </div>
              </div>
            </div>
          `:k}
    </main>
  `}async function s2(e){const t=dn(e.gatewayHost.trim());if(!t)return{ok:!1,detail:"未配置网关地址（Gateway URL）"};const n=`${t.replace(/\/$/,"")}/api/desktop/uninstall`,s={"Content-Type":"application/json",Accept:"application/json"},a=(e.token??"").trim();a&&(s.Authorization=`Bearer ${a}`,s["X-Gateway-Token"]=a);let o;try{o=await fetch(n,{method:"POST",headers:s,body:JSON.stringify({mode:e.mode})})}catch(c){return{ok:!1,detail:c instanceof Error?c.message:String(c)}}let i={};try{i=await o.json()}catch{}return o.ok?i.ok===!1?{ok:!1,message:i.message,detail:i.detail,httpStatus:o.status}:{ok:!0,message:i.message,detail:i.detail}:{ok:!1,message:i.message??i.error??(o.status===401?"网关令牌无效或未提供":`请求失败（HTTP ${o.status}）`),detail:i.detail,httpStatus:o.status}}async function a2(e){const t=dn(e.gatewayHost.trim());if(!t)return{ok:!1,detail:"未配置网关地址（Gateway URL）"};const n=`${t.replace(/\/$/,"")}/api/desktop/clear-workspace`,s={"Content-Type":"application/json",Accept:"application/json"},a=(e.token??"").trim();a&&(s.Authorization=`Bearer ${a}`,s["X-Gateway-Token"]=a);let o;try{o=await fetch(n,{method:"POST",headers:s,body:JSON.stringify({})})}catch(c){return{ok:!1,detail:c instanceof Error?c.message:String(c)}}let i={};try{i=await o.json()}catch{}return o.ok?i.ok===!1?{ok:!1,message:i.message,detail:i.detail,httpStatus:o.status}:{ok:!0,message:i.message,detail:i.detail}:{ok:!1,message:i.message??i.error??(o.status===401?"网关令牌无效或未提供":`请求失败（HTTP ${o.status}）`),detail:i.detail,httpStatus:o.status}}const dr="_shell",o2="d",iu="openocta.shell";function i2(e){const t=(e??"").trim();if(!t)return null;try{const n=new URL(t);return n.protocol!=="http:"&&n.protocol!=="https:"?null:n.href}catch{return null}}function l2(){if(typeof window>"u")return;const e=new URL(window.location.href),t=e.searchParams.get(dr);if(t){if(t===o2)try{window.sessionStorage.setItem(iu,"desktop")}catch{}e.searchParams.delete(dr),window.history.replaceState(window.history.state,"",e.toString())}}function r2(){if(typeof window>"u")return"browser";try{return window.sessionStorage.getItem(iu)==="desktop"?"desktop":"browser"}catch{return"browser"}}function po(){return r2()==="desktop"}async function Aa(e,t){const n=i2(e);if(!n)return;if(po()){if(typeof window<"u"&&window.runtime?.BrowserOpenURL){window.runtime.BrowserOpenURL(n);return}const a=window.open(n,"_blank");if(a){try{a.opener=null}catch{}return}}const s=window.open(n,"_blank");if(s){try{s.opener=null}catch{}return}window.location.assign(n)}function c2(e){const t=e.basePath?`${e.basePath}/wechat.png`:"/wechat.png";return r`
    <div class="card">
      <div class="card-title">邮箱</div>
      <div class="card-sub">OpenOcta官方邮箱</div>
      <a href="mailto:sales@databuff.com" style="display:inline-flex;margin-top:20px;">sales@databuff.com</a>
    </div>

    <div class="card">
      <div class="card-title">微信小助手</div>
      <div class="card-sub">微信扫码添加小助手，加入交流群</div>
      <img style="display:block;margin-top:20px;" src=${t} width="200" height="200" alt="OpenOcta 微信群二维码" loading="lazy" />
    </div>

    <div class="card">
      <div class="card-title">版权声明</div>
      <p>本仓库遵循 <strong>GPLv3</strong> 开源限制。</p>
      <p>你可以基于 OpenOcta 的源代码进行二次开发，但是需要遵守以下规定：</p>
      <ul class="about-list">
        <li>不能替换和修改 OpenOcta 的 Logo 和版权信息；</li>
        <li>二次开发后的衍生作品必须遵守 GPLv3 的开源义务。</li>
      </ul>
      <p>如需商业授权，请联系：<strong>sales@databuff.com</strong>。</p>
    </div>

    <div class="card">
      <div class="card-title">清理文稿与数据</div>
      <p class="muted">
        删除<strong>默认工作区</strong>目录下的全部文件与文件夹（通常为
        <code>~/.openocta/workspace</code>；Windows 为 <code>%APPDATA%&#92;openocta&#92;workspace</code>）。不会删除配置文件与其它状态目录内容。需本机网关处理该请求。
      </p>
      ${e.clearWorkspaceError?r`<p class="about-uninstall-api-error" role="alert">${e.clearWorkspaceError}</p>`:k}
      <button
        type="button"
        class="btn btn--danger-outline"
        ?disabled=${e.clearWorkspaceLoading}
        @click=${e.onClearWorkspace}
      >
        <span class="btn__icon" aria-hidden="true">${z.folder}</span>
        ${e.clearWorkspaceLoading?r`<span>正在清理…</span>`:r`<span>清理文稿与数据</span>`}
      </button>
    </div>

    <div class="card">
      <div class="card-title">卸载 OpenOcta</div>
      <p class="muted">
        在桌面应用或本机已连接网关时，可选择仅删除程序或一并清除本地数据目录。操作将安排在数秒后执行；桌面版在确认成功后会自动退出应用，请先保存工作。
      </p>
      <button type="button" class="btn btn--danger-outline" @click=${e.onOpenUninstallModal}>
        <span class="btn__icon" aria-hidden="true">${z.trash}</span>
        卸载 OpenOcta
      </button>
    </div>

      ${e.uninstallModalOpen?r`
            <div
              class="modal-overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-uninstall-title"
              @click=${e.onCloseUninstallModal}
            >
              <div class="modal card about-uninstall-modal" @click=${n=>n.stopPropagation()}>
                <h3 id="about-uninstall-title" class="modal__title">卸载 OpenOcta</h3>
                <p class="muted small">
                  请确认已配置正确的 <strong>Gateway URL</strong> 与 <strong>Token</strong>（与 Overview 一致）。卸载任务在进程退出后由系统脚本删除文件。
                </p>

                <fieldset class="about-uninstall-fieldset">
                  <legend class="visually-hidden">卸载方式</legend>

                  <div class="about-uninstall-options">
                    <div
                      class="about-uninstall-card ${e.uninstallMode==="program"?"about-uninstall-card--selected":""}"
                    >
                      <label class="about-uninstall-mode-label">
                        <span class="radio"><input
                          type="radio"
                          name="oo-uninstall-mode"
                          value="program"
                          ?checked=${e.uninstallMode==="program"}
                          ?disabled=${e.uninstallLoading}
                          @change=${()=>e.onUninstallModeChange("program")}
                        /></span>
                        <span class="about-uninstall-mode-title">仅卸载程序</span>
                      </label>
                      <p>
                        删除已安装的应用（例如 macOS 下的 <code>OpenOcta.app</code>，Windows 下安装目录中的程序文件）。
                      </p>
                      <p class="about-uninstall-note">
                        <strong>不会删除</strong>本地配置与数据目录（默认 <code>~/.openocta</code>，Windows 为
                        <code>%APPDATA%&#92;openocta</code> 等）。
                      </p>
                    </div>

                    <div
                      class="about-uninstall-card about-uninstall-card--warn ${e.uninstallMode==="full"?"about-uninstall-card--selected":""}"
                    >
                      <label class="about-uninstall-mode-label">
                        <span class="radio"><input
                          type="radio"
                          name="oo-uninstall-mode"
                          value="full"
                          ?checked=${e.uninstallMode==="full"}
                          ?disabled=${e.uninstallLoading}
                          @change=${()=>e.onUninstallModeChange("full")}
                        /></span>
                        <span class="about-uninstall-mode-title">全部卸载</span>
                      </label>
                      <p>删除应用程序<strong>以及</strong>本地状态目录（配置、会话、日志、缓存等）。</p>
                      <p class="about-uninstall-note danger">
                        此操作<strong>不可恢复</strong>，请确认已备份重要数据。
                      </p>
                    </div>
                  </div>
                </fieldset>

                ${e.uninstallError?r`<p class="about-uninstall-api-error" role="alert">${e.uninstallError}</p>`:k}

                <div class="modal__actions">
                  <button
                    type="button"
                    class="btn"
                    ?disabled=${e.uninstallLoading}
                    @click=${e.onCloseUninstallModal}
                  >
                    取消
                  </button>
                  <button
                    type="button"
                    class="btn btn--danger-outline"
                    ?disabled=${e.uninstallLoading}
                    @click=${e.onConfirmUninstall}
                  >
                    ${e.uninstallLoading?r`<span>正在请求…</span>`:r`<span>确认卸载</span>`}
                  </button>
                </div>
              </div>
            </div>
          `:k}
  `}function d2(e){return e==null?"—":new Date(e).toLocaleString()}function u2(e){if(e==null||e<0)return"—";if(e===0)return"0 B";const t=["B","KB","MB","GB"];let n=0,s=e;for(;s>=1024&&n<t.length-1;)s/=1024,n++;return`${s.toFixed(n>0?2:0)} ${t[n]}`}function p2(e,t){if(!t.trim())return e;const n=t.trim().toLowerCase();return e.filter(s=>s.sessionKey.toLowerCase().includes(n)||s.sessionId.toLowerCase().includes(n))}function m2(e){const t="<style>html,body{overflow-y:auto!important;overflow-x:auto!important;min-height:100%;}</style>";return e.includes("</head>")?e.replace("</head>",`${t}</head>`):e.includes("<body")?e.replace("<body",`<head>${t}</head><body`):t+e}function g2(e){if(e.viewingSessionId!=null)return r`
      <section class="card llm-trace-detail">
        <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
          <button type="button" class="btn btn--sm" @click=${e.onBack}>
            ← ${l("llmTraceBack")}
          </button>
          <span class="muted" style="font-size: 14px;">${e.viewingSessionId}</span>
        </div>
        ${e.viewLoading?r`<div class="muted" style="padding: 24px; text-align: center;">${l("commonLoading")}</div>`:e.viewContent?r`
                <div class="llm-trace-iframe-wrap">
                  <iframe
                    class="llm-trace-iframe"
                    srcdoc=${m2(e.viewContent)}
                    sandbox="allow-same-origin allow-scripts"
                    title=${e.viewingSessionId??"Trace"}
                  ></iframe>
                </div>
              `:r`<div class="callout danger">${e.error??l("commonNA")}</div>`}
      </section>
    `;const n=e.result?.entries??[],s=p2(n,e.search);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${l("navTitleLlmTrace")}</div>
          <div class="card-sub">${l("subtitleLlmTrace")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;">
            <button
              type="button"
              class="btn ${e.mode==="active"?"primary":""}"
              style="padding: 6px 12px;"
              @click=${()=>e.onModeChange("active")}
            >
              ${l("llmTraceModeActive")}
            </button>
            <button
              type="button"
              class="btn ${e.mode==="all"?"primary":""}"
              style="padding: 6px 12px;"
              @click=${()=>e.onModeChange("all")}
            >
              ${l("llmTraceModeAll")}
            </button>
          </div>
          <button
            type="button"
            class="btn ${e.enabled?"btn-ok":""}"
            ?disabled=${e.saving}
            @click=${e.onToggleEnabled}
            title=${l("llmTraceToggleTooltip")}
          >
            ${e.enabled?l("llmTraceActionDisable"):l("llmTraceActionEnable")}
          </button>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?l("commonLoading"):l("commonRefresh")}
          </button>
        </div>
      </div>

      <div class="row" style="margin-top: 16px; gap: 12px; align-items: center;">
        <div class="field" style="flex: 1; min-width: 200px;">
          <span>${l("llmTraceSearch")}</span>
          <span class="input"><input
            type="text"
            .value=${e.search}
            placeholder=${l("llmTraceSearchPlaceholder")}
            @input=${a=>e.onSearchChange(a.target.value)}
          /></span>
        </div>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:k}

      <div class="llm-trace-table mcp-table table" style="margin-top: 16px;">
        <div class="mcp-table-head table-head">
          <div>${l("llmTraceSessionKey")}</div>
          <div>${l("llmTraceSessionId")}</div>
          <div>${l("llmTraceUpdatedAt")}</div>
          <div>${l("llmTraceFile")}</div>
          <div>${l("llmTraceFileSize")}</div>
          <div class="llm-trace-actions-col">${l("mcpTableActions")}</div>
        </div>
        ${s.length===0?r`
                <div class="muted" style="padding: 24px; text-align: center;">
                  ${e.loading?l("commonLoading"):l("llmTraceNoEntries")}
                </div>
              `:s.map(a=>r`
                  <div class="mcp-table-row table-row">
                    <div class="mcp-table-cell mono" style="font-size: 12px; max-width: 200px; overflow: hidden; text-overflow: ellipsis;" title=${a.sessionKey}>
                      ${a.sessionKey}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px; max-width: 180px; overflow: hidden; text-overflow: ellipsis;" title=${a.sessionId}>
                      ${a.sessionId}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${d2(a.updatedAt)}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px;">
                      ${a.file}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${u2(a.fileSize)}
                    </div>
                    <div class="mcp-table-cell llm-trace-actions-col row" style="gap: 6px; justify-content: flex-end;">
                      ${a.file!=="-"?r`
                              <button
                                class="btn btn--sm"
                                @click=${()=>e.onView(a.sessionId)}
                              >
                                ${l("llmTraceView")}
                              </button>
                              <button
                                class="btn btn--sm"
                                @click=${()=>e.onDownload(a.sessionId)}
                              >
                                ${l("llmTraceDownload")}
                              </button>
                            `:k}
                    </div>
                  </div>
                `)}
      </div>
    </section>
  `}function ur(e){return e==null||e===0?"—":new Date(e).toLocaleString()}function pr(e){return e==null?"—":e<0?l("approvalsTtlPermanent"):e<60?`${e}s`:e<3600?`${Math.floor(e/60)}m`:`${Math.floor(e/3600)}h`}function mr(e){return{pending:l("approvalsPending"),approved:l("approvalsSectionApproved"),denied:l("approvalsSectionDenied"),expired:l("approvalsExpired"),whitelisted:l("approvalsSectionWhitelisted"),whitelist_expired:l("approvalsExpired")}[e]??e}function f2(e){return[...e].sort((t,n)=>{const s=a=>{const o=a.status==="pending",i=a.status==="expired"||a.expired===!0,c=a.status==="denied";return o&&!i?0:a.status==="approved"&&!i?1:i?2:c?3:1};return s(t)-s(n)})}function h2(e){const t=e.approvalsResult,n=t?.whitelisted??[],s=f2([...t?.entries??[]]);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${l("navTitleApprovals")}</div>
          <div class="card-sub">${l("subtitleApprovals")}</div>
        </div>
        <button class="btn primary" ?disabled=${e.approvalsLoading} @click=${e.onApprovalsRefresh}>
          ${e.approvalsLoading?l("commonLoading"):l("commonRefresh")}
        </button>
      </div>

      ${e.approvalsError?r`<div class="callout danger" style="margin-top: 16px;">${e.approvalsError}</div>`:k}

      <!-- 审批队列：已审批 + 待审批 合并，有效期的放最上面 -->
      <div style="margin-top: 20px;">
        <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${l("approvalsList")} (${s.length})</div>
        ${s.length===0&&!e.approvalsLoading?r`<div class="muted" style="padding: 24px; text-align: center;">${l("approvalsNoEntries")}</div>`:r`
              <div class="mcp-table table approvals-queue-table">
                <div class="mcp-table-head table-head">
                  <div>${l("approvalsCommand")}</div>
                  <div>${l("approvalsStatus")}</div>
                  <div>${l("approvalsExpiresAt")}</div>
                  <div>${l("approvalsTTL")}</div>
                  <div style="text-align: right;">${l("mcpTableActions")}</div>
                </div>
                ${s.map(a=>{const o=a.sessionKey??a.sessionId,i=o?`${e.pathForTab("sessions")}?key=${encodeURIComponent(o)}`:"",c=a.status==="pending"&&!a.expired,d=a.expiresAt??a.timeoutAt;return r`
                    <div class="mcp-table-row table-row">
                      <div class="mcp-table-cell mono" style="max-width: 240px; overflow: hidden; text-overflow: ellipsis;" title=${a.command}>${a.command}</div>
                      <div class="mcp-table-cell">${mr(a.status)}${a.approver?` · ${a.approver}`:""}</div>
                      <div class="mcp-table-cell muted" style="font-size: 12px;">${ur(d)}</div>
                      <div class="mcp-table-cell muted" style="font-size: 12px;">${a.ttlSeconds!=null?pr(a.ttlSeconds):"—"}</div>
                      <div class="mcp-table-cell approvals-actions-cell">
                        <button class="btn btn--sm btn-ok" ?disabled=${!c} @click=${()=>c&&e.onApprove(a.id)}>${l("approvalsApproveOnce")}</button>
                        <button class="btn btn--sm" ?disabled=${!c} @click=${()=>c&&e.onWhitelistSession(a.id)}>${l("approvalsWhitelistSession")}</button>
                        <button class="btn btn--sm" style="color: var(--danger);" ?disabled=${!c} @click=${()=>c&&e.onDeny(a.id)}>${l("approvalsDeny")}</button>
                        ${i?r`<a class="btn btn--sm" href="${i}">${l("approvalsViewSession")}</a>`:k}
                      </div>
                    </div>
                  `})}
              </div>
            `}
      </div>

      <!-- 会话免审：独立模块 -->
      ${n.length>0?r`
        <div style="margin-top: 24px;">
          <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${l("approvalsSectionWhitelisted")} (${n.length})</div>
          <div class="mcp-table table">
            <div class="mcp-table-head table-head">
              <div>${l("approvalsSessionId")}</div>
              <div>${l("approvalsStatus")}</div>
              <div>${l("approvalsExpiresAt")}</div>
              <div>${l("approvalsTTL")}</div>
            </div>
            ${n.map(a=>r`
              <div class="mcp-table-row table-row">
                <div class="mcp-table-cell mono" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">${a.sessionId}</div>
                <div class="mcp-table-cell">${mr(a.status)}</div>
                <div class="mcp-table-cell muted" style="font-size: 12px;">${a.expiresAt?ur(a.expiresAt):l("approvalsTtlPermanent")}</div>
                <div class="mcp-table-cell muted" style="font-size: 12px;">${a.ttlSeconds!=null?a.ttlSeconds<0?l("approvalsTtlPermanent"):pr(a.ttlSeconds):"—"}</div>
              </div>
            `)}
          </div>
        </div>
      `:k}
    </section>
  `}function at(e){return Array.isArray(e)?e:[]}function kt(e){return at(e).filter(Boolean).join(`
`)}function $t(e){return(e||"").split(`
`).map(t=>t.trim()).filter(Boolean)}const v2=[{label:"512M",bytes:512*1024*1024},{label:"1G",bytes:1024*1024*1024},{label:"2G",bytes:2*1024*1024*1024},{label:"4G",bytes:4*1024*1024*1024}];function y2(e){const t=e.security??{},n=t.sandbox??{},s=t.commandPolicy??{},a=t.approvalQueue??{},o=n.enabled===!0,i=s.enabled===!0,c=a.enabled===!0,d=kt(at(n.allowedPaths)),p=kt(at(n.networkAllow)),m=n.resourceLimit??{},g=m.maxCpuPercent??"",f=m.maxMemoryBytes??"",$=m.maxDiskBytes??"",S=s.defaultPolicy??"ask",w=at(s.deny),C=at(s.ask),L=at(s.allow),P=kt(w),U=kt(C),R=kt(L);function O(T,N,_){e.onPatch(["commandPolicy","deny"],$t(T)),e.onPatch(["commandPolicy","ask"],$t(N)),e.onPatch(["commandPolicy","allow"],$t(_))}const D=kt(at(s.banArguments)),u=s.maxLength??"",b=kt(at(s.secretPatterns)),x=a.timeoutSeconds??"",M=a.blockOnApproval!==!1,E=T=>{switch(T){case"off":return l("securityPresetOff");case"loose":return l("securityPresetLoose");case"standard":return l("securityPresetStandard");case"strict":return l("securityPresetStrict");default:return T}};return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${l("navTitleSandbox")}</div>
          <div class="card-sub">${l("subtitleSandbox")}</div>
        </div>
      </div>

      <!-- Overview card -->
      <div class="security-overview-card" style="margin-top: 20px; padding: 20px; background: var(--bg-content, #f8fafc); border-radius: 12px; border: 1px solid var(--border, #e2e8f0);">
        <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${l("securityOverviewTitle")}</div>
        <div class="row" style="flex-wrap: wrap; gap: 24px;">
          <div>
            <div class="muted" style="font-size: 12px;">${l("securityOverviewPreset")}</div>
            <div style="font-size: 16px; font-weight: 600;">${E(t.preset??"standard")}</div>
          </div>
          <div>
            <div class="muted" style="font-size: 12px;">${l("securityOverviewSandbox")}</div>
            <div style="font-size: 16px; font-weight: 600; color: ${o?"var(--accent, #16a34a)":"var(--text-secondary)"};">${l(o?"sandboxEnabled":"sandboxDisabled")}</div>
          </div>
          <div>
            <div class="muted" style="font-size: 12px;">${l("securityOverviewCommandPolicy")}</div>
            <div style="font-size: 16px; font-weight: 600; color: ${i?"var(--accent, #16a34a)":"var(--text-secondary)"};">${l(i?"sandboxEnabled":"sandboxDisabled")}</div>
          </div>
          <div>
            <div class="muted" style="font-size: 12px;">${l("securityOverviewPendingApprovals")}</div>
            <div style="font-size: 16px; font-weight: 600; color: ${e.pendingApprovalsCount>0?"var(--danger, #dc2626)":"var(--text-secondary)"};">${e.pendingApprovalsCount}</div>
          </div>
        </div>
      </div>

      <!-- Quick presets -->
      <div style="margin-top: 20px;">
        <div class="card-sub" style="margin-bottom: 8px; font-size: 14px;">${l("securityPresetsTitle")}</div>
        <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${l("securityPresetsHint")}</div>
        <div class="row" style="flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
          ${["off","loose","standard","strict"].map(T=>r`
              <button
                type="button"
                class="btn ${t.preset===T?"primary":""}"
                ?disabled=${e.saving}
                @click=${()=>e.onPresetApply(T)}
              >
                ${E(T)}
              </button>
            `)}
        </div>
        <div class="muted" style="font-size: 12px; line-height: 1.5;">
          <div style="margin-bottom: 4px;"><strong>${E("off")}</strong>：${l("securityPresetOffDesc")}</div>
          <div style="margin-bottom: 4px;"><strong>${E("loose")}</strong>：${l("securityPresetLooseDesc")}</div>
          <div style="margin-bottom: 4px;"><strong>${E("standard")}</strong>：${l("securityPresetStandardDesc")}</div>
          <div><strong>${E("strict")}</strong>：${l("securityPresetStrictDesc")}</div>
        </div>
      </div>

      <div class="sandbox-sections" style="margin-top: 24px;">
        <!-- Environment boundary (collapsed by default) -->
        <details class="sandbox-details">
          <summary class="sandbox-summary">
            <span>${l("securitySectionSandbox")}</span>
            <span class="security-help" title=${l("securitySectionSandboxDesc")}>❕</span>
          </summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${l("securitySectionSandboxDesc")}</div>
            <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
              <button type="button" class="btn ${o?"btn-ok":""}" ?disabled=${e.saving} @click=${()=>e.onPatch(["sandbox","enabled"],!o)}>
                ${l(o?"sandboxActionDisable":"sandboxActionEnable")}
              </button>
              <span class="muted" style="font-size: 13px;">${l(o?"sandboxEnabled":"sandboxDisabled")}</span>
            </div>
            <div class="sandbox-form-center">
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${l("sandboxAllowedPaths")}</span>
                <span class="textarea"><textarea rows="3" .value=${d} placeholder="/tmp&#10;./workspace" @input=${T=>e.onPatch(["sandbox","allowedPaths"],$t(T.target.value))}></textarea></span>
              </div>
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${l("sandboxNetworkAllow")}</span>
                <span class="textarea"><textarea rows="2" .value=${p} placeholder="localhost&#10;127.0.0.1" @input=${T=>e.onPatch(["sandbox","networkAllow"],$t(T.target.value))}></textarea></span>
              </div>
              <div style="margin: 24px 0;">
                <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${l("sandboxResourceLimit")}</div>
                <div class="row" style="flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                  ${v2.map(T=>r`
                      <button
                        type="button"
                        class="btn btn--sm"
                        @click=${()=>{e.onPatch(["sandbox","resourceLimit","maxMemoryBytes"],T.bytes),e.onPatch(["sandbox","resourceLimit","maxDiskBytes"],T.bytes)}}
                      >
                        ${T.label}
                      </button>
                    `)}
                  <span class="muted" style="font-size: 13px; align-self: center;">${l("securityResourceCustom")}</span>
                </div>
                <div class="row" style="flex-wrap: wrap; gap: 12px;">
                  <div class="field" style="flex: 1 1 120px; min-width: 0;">
                    <span style="font-size: 14px;">${l("sandboxMaxCPUPercent")}</span>
                    <span class="input"><input type="text" .value=${String(g)} placeholder="60" @input=${T=>e.onPatch(["sandbox","resourceLimit","maxCpuPercent"],Ea(T.target.value))} /></span>
                  </div>
                  <div class="field" style="flex: 1 1 160px; min-width: 0;">
                    <span style="font-size: 14px;">${l("sandboxMaxMemoryBytes")}</span>
                    <span class="input"><input type="text" .value=${String(f)} placeholder="1G" @input=${T=>e.onPatch(["sandbox","resourceLimit","maxMemoryBytes"],T.target.value.trim()||void 0)} /></span>
                  </div>
                  <div class="field" style="flex: 1 1 160px; min-width: 0;">
                    <span style="font-size: 14px;">${l("sandboxMaxDiskBytes")}</span>
                    <span class="input"><input type="text" .value=${String($)} placeholder="1G" @input=${T=>e.onPatch(["sandbox","resourceLimit","maxDiskBytes"],T.target.value.trim()||void 0)} /></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="gap: 8px; margin-top: 16px;">
              <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>${e.saving?l("commonLoading"):l("commonSave")}</button>
            </div>
          </div>
        </details>

        <!-- Command policy -->
        <details class="sandbox-details" style="margin-top: 16px;">
          <summary class="sandbox-summary">
            <span>${l("securitySectionCommandPolicy")}</span>
            <span class="security-help" title=${l("securitySectionCommandPolicyDesc")}>❕</span>
          </summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${l("securitySectionCommandPolicyDesc")}</div>
            <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
              <button type="button" class="btn ${i?"btn-ok":""}" ?disabled=${e.saving} @click=${()=>e.onPatch(["commandPolicy","enabled"],!i)}>
                ${l(i?"sandboxActionDisable":"sandboxActionEnable")}
              </button>
              <span class="muted" style="font-size: 13px;">${l(i?"sandboxEnabled":"sandboxDisabled")}</span>
            </div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${l("securityDefaultPolicy")}</span>
              <div class="row" style="gap: 16px; margin-top: 8px;">
                ${["deny","ask","allow"].map(T=>r`
                    <label class="row" style="align-items: center; gap: 6px; cursor: pointer;">
                      <span class="radio"><input type="radio" name="defaultPolicy" .checked=${S===T} @change=${()=>e.onPatch(["commandPolicy","defaultPolicy"],T)} /></span>
                      <span>${l(T==="deny"?"securityDefaultDeny":T==="ask"?"securityDefaultAsk":"securityDefaultAllow")}</span>
                    </label>
                  `)}
              </div>
            </div>
            <div class="card-sub" style="margin-bottom: 8px; font-size: 14px;">${l("securityRulesList")}</div>
            <div class="muted" style="font-size: 12px; margin-bottom: 12px;">${l("securityRulesHint")}</div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${l("securityActionDeny")}</span>
              <span class="textarea"><textarea rows="3" .value=${P} placeholder="sudo&#10;dd&#10;mkfs&#10;rm -rf" @input=${T=>O(T.target.value,U,R)}></textarea></span>
              <div class="muted" style="font-size: 12px; margin-top: 4px;">${l("securityRulesDenyHint")}</div>
            </div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${l("securityActionAsk")}</span>
              <span class="textarea"><textarea rows="3" .value=${U} placeholder="rm&#10;mv&#10;cp" @input=${T=>O(P,T.target.value,R)}></textarea></span>
              <div class="muted" style="font-size: 12px; margin-top: 4px;">${l("securityRulesAskHint")}</div>
            </div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${l("securityActionAllow")}</span>
              <span class="textarea"><textarea rows="3" .value=${R} placeholder="ls&#10;pwd&#10;echo" @input=${T=>O(P,U,T.target.value)}></textarea></span>
              <div class="muted" style="font-size: 12px; margin-top: 4px;">${l("securityRulesAllowHint")}</div>
            </div>
            <details style="margin-top: 16px;">
              <summary class="muted" style="font-size: 13px; cursor: pointer;">${l("securityAdvancedOptions")}</summary>
              <div style="margin-top: 12px;">
                <div class="field" style="margin-bottom: 12px;">
                  <span style="font-size: 14px;">${l("sandboxBanArguments")}</span>
                  <span class="textarea"><textarea rows="2" .value=${D} placeholder="--no-preserve-root&#10;/dev/" @input=${T=>e.onPatch(["commandPolicy","banArguments"],$t(T.target.value))}></textarea></span>
                </div>
                <div class="field" style="margin-bottom: 12px;">
                  <span style="font-size: 14px;">${l("securityMaxLength")}</span>
                  <span class="input"><input type="text" .value=${String(u)} placeholder="4096" @input=${T=>e.onPatch(["commandPolicy","maxLength"],Ea(T.target.value))} /></span>
                </div>
                <div class="field">
                  <span style="font-size: 14px;">${l("sandboxSecretPatterns")}</span>
                  <span class="textarea"><textarea rows="2" style="font-family: var(--mono);" .value=${b} placeholder="sk-[a-zA-Z0-9]{48}" @input=${T=>e.onPatch(["commandPolicy","secretPatterns"],$t(T.target.value))}></textarea></span>
                </div>
              </div>
            </details>
            <div class="row" style="gap: 8px; margin-top: 16px;">
              <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>${e.saving?l("commonLoading"):l("commonSave")}</button>
            </div>
          </div>
        </details>

        <!-- Approval settings -->
        <details class="sandbox-details" style="margin-top: 16px;">
          <summary class="sandbox-summary">
            <span>${l("securitySectionApprovalQueue")}</span>
            <span class="security-help" title=${l("securitySectionApprovalQueueDesc")}>❕</span>
          </summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${l("securitySectionApprovalQueueDesc")}</div>
            <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
              <button type="button" class="btn ${c?"btn-ok":""}" ?disabled=${e.saving} @click=${()=>e.onPatch(["approvalQueue","enabled"],!c)}>
                ${l(c?"sandboxActionDisable":"sandboxActionEnable")}
              </button>
              <span class="muted" style="font-size: 13px;">${l(c?"sandboxEnabled":"sandboxDisabled")}</span>
            </div>
            ${c?r`
                  <div class="row" style="align-items: flex-start; gap: 8px; margin-bottom: 16px;">
                    <span class="checkbox"><input type="checkbox" id="blockOnApproval" .checked=${M} ?disabled=${e.saving} @input=${T=>e.onPatch(["approvalQueue","blockOnApproval"],T.target.checked)} /></span>
                    <label for="blockOnApproval" style="font-size: 14px; cursor: pointer;">${l("securityApprovalBlockOnApproval")} <span class="muted" style="font-size: 12px;">${l("securityApprovalBlockOnApprovalHint")}</span></label>
                  </div>
                  <div class="field" style="margin-bottom: 16px;">
                    <span style="font-size: 14px;">${l("securityApprovalTimeoutSeconds")}</span>
                    <span class="input"><input type="text" .value=${String(x)} placeholder="300" @input=${T=>e.onPatch(["approvalQueue","timeoutSeconds"],Ea(T.target.value))} /></span>
                    <div class="muted" style="font-size: 12px; margin-top: 4px;">${l("securityApprovalTimeoutSecondsHint")}</div>
                  </div>
                `:k}
            <div class="row" style="gap: 8px; margin-bottom: 20px;">
              <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>${e.saving?l("commonLoading"):l("commonSave")}</button>
            </div>

            <!-- Approval queue list (full: pending, approved, denied, whitelisted) -->
            ${h2({approvalsLoading:e.approvalsLoading,approvalsResult:e.approvalsResult,approvalsError:e.approvalsError,onApprovalsRefresh:e.onApprovalsRefresh,onApprove:e.onApprove,onDeny:e.onDeny,onWhitelistSession:e.onWhitelistSession,pathForTab:e.pathForTab})}
          </div>
        </details>
      </div>
    </section>
  `}function Ea(e){const t=parseInt(e.trim(),10);return Number.isNaN(t)?void 0:t}const Ce=[{id:"anthropic",label:"Anthropic",envKey:"ANTHROPIC_API_KEY",defaultModel:"claude-sonnet-4-5-20250929",baseUrl:"(官方)",defaultApi:"anthropic-messages"},{id:"openai",label:"OpenAI",envKey:"OPENAI_API_KEY",defaultModel:"gpt-4",baseUrl:"(官方)",defaultApi:"openai-completions"},{id:"openrouter",label:"OpenRouter",envKey:"OPENROUTER_API_KEY",defaultModel:"auto",baseUrl:"https://openrouter.ai/api/v1",defaultApi:"openai-completions"},{id:"litellm",label:"LiteLLM",envKey:"LITELLM_API_KEY",defaultModel:"",baseUrl:"http://localhost:4000",defaultApi:"openai-completions"},{id:"moonshot",label:"Moonshot",envKey:"MOONSHOT_API_KEY",defaultModel:"kimi-k2.5",baseUrl:"https://api.moonshot.ai/v1",defaultApi:"openai-completions"},{id:"moonshot-cn",label:"Moonshot-CN",envKey:"MOONSHOT_API_KEY",defaultModel:"kimi-k2.5",baseUrl:"https://api.moonshot.cn/v1",defaultApi:"openai-completions"},{id:"kimi-coding",label:"Kimi Coding",envKey:"KIMI_API_KEY",defaultModel:"k2p5",baseUrl:"https://api.moonshot.ai/anthropic",defaultApi:"anthropic-messages"},{id:"opencode",label:"OpenCode",envKey:"OPENCODE_API_KEY",defaultModel:"claude-opus-4-6",baseUrl:"https://opencode.ai/zen/v1",defaultApi:"openai-completions"},{id:"zai",label:"Z.ai (智谱)",envKey:"ZAI_API_KEY",defaultModel:"glm-5",baseUrl:"https://api.z.ai/api/paas/v4",defaultApi:"openai-completions"},{id:"xai",label:"xAI (Grok)",envKey:"XAI_API_KEY",defaultModel:"grok-3-mini",baseUrl:"https://api.x.ai/v1",defaultApi:"openai-completions"},{id:"together",label:"Together AI",envKey:"TOGETHER_API_KEY",defaultModel:"meta-llama/Llama-3.3-70B-Instruct-Turbo",baseUrl:"https://api.together.xyz/v1",defaultApi:"openai-completions"},{id:"venice",label:"Venice AI",envKey:"VENICE_API_KEY",defaultModel:"falcon-3.1-70b",baseUrl:"https://api.venice.ai/api/v1",defaultApi:"openai-completions"},{id:"synthetic",label:"Synthetic",envKey:"SYNTHETIC_API_KEY",defaultModel:"hf:MiniMaxAI/MiniMax-M2.1",baseUrl:"https://api.synthetic.new/anthropic",defaultApi:"anthropic-messages"},{id:"qianfan",label:"千帆 (百度)",envKey:"QIANFAN_API_KEY",defaultModel:"deepseek-v3-2-251201",baseUrl:"https://qianfan.baidubce.com/v2",defaultApi:"openai-completions"},{id:"huggingface",label:"Hugging Face",envKey:"HUGGINGFACE_HUB_TOKEN",defaultModel:"",baseUrl:"https://router.huggingface.co/v1",defaultApi:"openai-completions"},{id:"xiaomi",label:"小米 Mimo",envKey:"XIAOMI_API_KEY",defaultModel:"mimo-v2-flash",baseUrl:"https://api.xiaomimimo.com/anthropic",defaultApi:"anthropic-messages"},{id:"minimax",label:"MiniMax",envKey:"MINIMAX_API_KEY",defaultModel:"MiniMax-M2.7",baseUrl:"https://api.minimax.io/anthropic",defaultApi:"anthropic-messages"},{id:"mistral",label:"Mistral",envKey:"MISTRAL_API_KEY",defaultModel:"mistral-large-latest",baseUrl:"https://api.mistral.ai/v1",defaultApi:"openai-completions"},{id:"groq",label:"Groq",envKey:"GROQ_API_KEY",defaultModel:"llama-3.3-70b-versatile",baseUrl:"https://api.groq.com/openai/v1",defaultApi:"openai-completions"},{id:"cerebras",label:"Cerebras",envKey:"CEREBRAS_API_KEY",defaultModel:"llama-4-scout-17b-16e-instruct",baseUrl:"https://api.cerebras.ai/v1",defaultApi:"openai-completions"},{id:"deepseek",label:"DeepSeek",envKey:"DEEPSEEK_API_KEY",defaultModel:"deepseek-chat",baseUrl:"https://api.deepseek.com/v1",defaultApi:"openai-completions"},{id:"ollama",label:"Ollama",envKey:"OLLAMA_API_KEY",defaultModel:"llama3.3",baseUrl:"http://127.0.0.1:11434/v1",defaultApi:"openai-completions"},{id:"vllm",label:"vLLM",envKey:"VLLM_API_KEY",defaultModel:"",baseUrl:"http://127.0.0.1:8000/v1",defaultApi:"openai-completions"},{id:"vercel-ai-gateway",label:"Vercel AI Gateway",envKey:"AI_GATEWAY_API_KEY",defaultModel:"",baseUrl:"https://api.vercel.ai/v1",defaultApi:"openai-completions"},{id:"bailian",label:"百炼 (阿里云)",envKey:"DASHSCOPE_API_KEY",defaultModel:"qwen3.5-flash",baseUrl:"https://dashscope.aliyuncs.com/compatible-mode/v1",defaultApi:"openai-completions"}];function ii(e){if(!e||typeof e!="string")return null;const t=e.trim().split("/",2);return t.length===2?{provider:t[0].trim(),modelId:t[1].trim()}:{provider:"anthropic",modelId:e.trim()}}function le(e){return`./provider/${e}`}const st={anthropic:le("anthropic.png"),openai:le("openai.png"),openrouter:le("openrouter.png"),cerebras:le("cerebras.png"),deepseek:le("deepseek.png"),groq:le("groq.png"),grok:le("grok.png"),mistral:le("mistral.png"),ollama:le("ollama.png"),litellm:le("litellm.png"),kimi:le("kimi.png"),minimax:le("minimax.png"),together:le("together.png"),vercel:le("vercel.png"),vllm:le("vllm.png"),qianfan:le("qianfan.png"),zhipu:le("zhipu.png"),bailian:le("bailian.png"),mimo:le("mimo.png"),huggingface:le("huggingface.png"),qwen:le("qwen.png"),venice:le("venice.png"),synthetic:le("synthetic.png"),opencode:le("opencode.png")},b2={anthropic:"anthropic",openai:"openai",openrouter:"openrouter",cerebras:"cerebras",deepseek:"deepseek",groq:"groq",xai:"grok",mistral:"mistral",ollama:"ollama",litellm:"litellm",moonshot:"kimi","moonshot-cn":"kimi","kimi-coding":"kimi",minimax:"minimax",together:"together","vercel-ai-gateway":"vercel",vllm:"vllm",qianfan:"qianfan",zai:"zhipu",bailian:"bailian",xiaomi:"mimo",huggingface:"huggingface",venice:"venice",synthetic:"synthetic",opencode:"opencode"},w2={"api.openai.com":"openai","openai.com":"openai","api.anthropic.com":"anthropic","anthropic.com":"anthropic","openrouter.ai":"openrouter","api.cerebras.ai":"cerebras","cerebras.ai":"cerebras","api.deepseek.com":"deepseek","deepseek.com":"deepseek","api.groq.com":"groq","groq.com":"groq","api.x.ai":"grok","x.ai":"grok","api.mistral.ai":"mistral","mistral.ai":"mistral",litellm:"litellm","api.moonshot.ai":"kimi","api.moonshot.cn":"kimi","moonshot.ai":"kimi","moonshot.cn":"kimi","api.minimax.io":"minimax","minimax.io":"minimax","api.together.xyz":"together","together.xyz":"together","api.vercel.ai":"vercel","vercel.com":"vercel","aip.baidubce.com":"qianfan","qianfan.baidubce.com":"qianfan","api.z.ai":"zhipu","z.ai":"zhipu","dashscope.aliyuncs.com":"bailian","api.xiaomimimo.com":"mimo","router.huggingface.co":"huggingface","huggingface.co":"huggingface","api.venice.ai":"venice","venice.ai":"venice","api.synthetic.new":"synthetic","synthetic.new":"synthetic","opencode.ai":"opencode"},gr={openai:"openai",anthropic:"anthropic",openrouter:"openrouter",cerebras:"cerebras",deepseek:"deepseek",groq:"groq",grok:"grok",xai:"grok",mistral:"mistral",ollama:"ollama",litellm:"litellm",moonshot:"kimi",moonshotcn:"kimi",kimi:"kimi",kimicoding:"kimi",minimax:"minimax",minimaxai:"minimax",together:"together",togetherai:"together",vercel:"vercel",vercelaigateway:"vercel",v0:"vercel",vllm:"vllm",huggingface:"huggingface",zai:"zhipu",zhipu:"zhipu",venice:"venice",veniceai:"venice",synthetic:"synthetic",opencode:"opencode",qianfan:"qianfan",bailian:"bailian",aliyun:"bailian",xiaomi:"mimo",xiaomimimo:"mimo",qwen:"qwen",千帆:"qianfan",百度:"qianfan",智谱:"zhipu",百炼:"bailian",阿里云:"bailian",阿里:"bailian",通义:"qwen",小米:"mimo",mimo:"mimo"};function k2(e){return e.toLowerCase().replace(/[\s\-_./()（）]/g,"")}function $2(e){let t=e.toLowerCase().trim();return t.startsWith("www.")&&(t=t.slice(4)),t}function S2(e){return!!(/^(\d{1,3}\.){3}\d{1,3}$/.test(e)||e.startsWith("[")||e.includes(":"))}function x2(e){if(!e||e==="(官方)")return null;try{const t=new URL(e),n=$2(t.hostname);return S2(n)||n==="localhost"?null:n}catch{return null}}function fr(e){if(!e)return null;const t=k2(e);if(!t)return null;const n=gr[t];if(n)return n;for(const[s,a]of Object.entries(gr))if(s.length>=2&&t.includes(s))return a;return null}function lu(e,t,n,s){if(s){const c=b2[s.id];if(c&&st[c])return st[c]}const a=x2(n||"");if(a){const c=w2[a];if(c&&st[c])return st[c]}const o=fr(e);if(o&&st[o])return st[o];const i=fr(t);return i&&st[i]?st[i]:null}function Ze(e,t){const n=Ce.find(s=>s.id===e);return n?n.label:t?.displayName??e}function Ms(e,t,n,s){const a=s.trim().toLowerCase();return!a||e.toLowerCase().includes(a)||n&&(n.label.toLowerCase().includes(a)||n.id.toLowerCase().includes(a))?!0:(t?.displayName??"").toLowerCase().includes(a)}function mo(e,t){const n=Ce.find(a=>a.id===e),s=t?.models??[];return s.length>0?s:n?.defaultModel?[{id:n.defaultModel,name:n.defaultModel}]:[]}function go(e,t,n,s){const a=lu(e,t,n,s);return a?r`<img src=${a} alt="" class="provider-logo" loading="lazy" decoding="async" />`:z.modelCube}function C2(e){const t=ii(e.defaultModelRef),n=e.providerSearchQuery??"",s=Ce.filter(c=>Ms(c.id,e.providers?.[c.id],c,n)),a=Object.entries(e.providers??{}).filter(([c,d])=>Ce.some(p=>p.id===c)?!1:Ms(c,d,void 0,n)),i=n.trim().length>0&&s.length===0&&a.length===0;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${l("navTitleModels")}</div>
          <div class="card-sub">${l("subtitleModels")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center; flex-wrap: wrap;">
          <div class="emp-search">
            <span class="input"><input
              style="padding-left:30px;"
              class="emp-search__input"
              type="text"
              placeholder=${l("modelsSearchPlaceholder")}
              .value=${e.providerSearchQuery}
              ?disabled=${e.loading}
              @input=${c=>e.onProviderSearchChange(c.target.value)}
            /></span>
            <span class="emp-search__icon" aria-hidden="true">${z.search}</span>
          </div>
          <div class="row" style="gap: 4px;" title=${l("modelsViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddProvider}>
            ${l("modelsAddProvider")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?l("commonLoading"):l("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.defaultModelRef?r`
            <div class="callout" style="margin-top: 12px;">
              <strong>${l("modelsCurrentDefault")}:</strong> ${e.defaultModelRef}
            </div>
          `:k}

      <div class="models-provider-list" style="margin-top: 16px;">
        ${i?r`<p class="muted" style="margin: 12px 0 0; font-size: 14px;">${l("modelsSearchNoMatch")}</p>`:e.viewMode==="list"?r`
              <div class="models-table table" style="margin-top: 0;">
                <div class="models-table-head table-head">
                  <div>${l("modelsTableName")}</div>
                  <div>${l("modelsTableModel")}</div>
                  <div>${l("modelsTableBaseUrl")}</div>
                  <div>${l("modelsTableActions")}</div>
                </div>
                ${s.map(c=>{const d=e.providers?.[c.id],p=!!d,m=p?d?.models?.[0]?.id??c.defaultModel??"(需指定)":null,g=p&&m&&m!=="(需指定)",f=g&&t?.provider===c.id;return r`
                    <div
                      class="models-table-row table-row ${e.selectedProvider===c.id?"list-item-selected":""}"
                      style="cursor: pointer;"
                      @click=${()=>e.onSelect(e.selectedProvider===c.id?null:c.id)}
                    >
                      <div class="models-table-cell" style="font-weight: 500;">
                        ${c.label}
                        ${f?r`<span class="muted" style="font-size: 12px;"> (${l("modelsCurrentDefault")})</span>`:k}
                      </div>
                      <div class="models-table-cell muted" style="font-size: 13px;">${p?m:"-"}</div>
                      <div class="models-table-cell muted" style="font-size: 12px;">${d?.baseUrl??c.baseUrl}</div>
                      <div class="models-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${$=>$.stopPropagation()}>
                        ${g?r`
                              <button
                                class="btn btn--sm ${f?"btn-ok":"primary"}"
                                ?disabled=${e.saving}
                                @click=${$=>{$.stopPropagation(),e.onUseModelClick(c.id)}}
                              >
                                ${l("modelsUseAsDefault")}
                              </button>
                            `:r`<button class="btn btn--sm" disabled>${l("modelsUseAsDefault")}</button>`}
                        <button
                          class="btn btn--sm"
                          ?disabled=${e.saving}
                          @click=${$=>{$.stopPropagation(),e.onSelect(e.selectedProvider===c.id?null:c.id)}}
                        >
                          ${l("channelsConfigure")}
                        </button>
                        ${p?r`
                              <button
                                class="btn btn--sm ${f?"btn-ok":""}"
                                ?disabled=${e.saving||!f}
                                @click=${$=>{$.stopPropagation(),e.onCancelUse(c.id)}}
                              >
                                ${l("modelsCancelUse")}
                              </button>
                            `:k}
                      </div>
                    </div>
                  `})}
                ${a.map(([c,d])=>{const p=d.models?.[0]?.id,m=!!p,g=m&&t?.provider===c;return r`
                      <div
                        class="models-table-row table-row ${e.selectedProvider===c?"list-item-selected":""}"
                        style="cursor: pointer;"
                        @click=${()=>e.onSelect(e.selectedProvider===c?null:c)}
                      >
                        <div class="models-table-cell" style="font-weight: 500;">${Ze(c,d)}</div>
                        <div class="models-table-cell muted" style="font-size: 13px;">
                          ${m?p:(d.models?.length??0)+" "+l("modelsModels")}
                        </div>
                        <div class="models-table-cell muted" style="font-size: 12px;">${d.baseUrl??l("commonNA")}</div>
                        <div class="models-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${f=>f.stopPropagation()}>
                          ${m?r`
                                <button
                                  class="btn btn--sm ${g?"btn-ok":"primary"}"
                                  ?disabled=${e.saving}
                                  @click=${f=>{f.stopPropagation(),e.onUseModelClick(c)}}
                                >
                                  ${l("modelsUseAsDefault")}
                                </button>
                              `:r`<button class="btn btn--sm" disabled>${l("modelsUseAsDefault")}</button>`}
                          <button
                            class="btn btn--sm"
                            ?disabled=${e.saving}
                            @click=${f=>{f.stopPropagation(),e.onSelect(e.selectedProvider===c?null:c)}}
                          >
                            ${l("channelsConfigure")}
                          </button>
                          <button
                            class="btn btn--sm ${g?"btn-ok":""}"
                            ?disabled=${e.saving||!g}
                            @click=${f=>{f.stopPropagation(),e.onCancelUse(c)}}
                          >
                            ${l("modelsCancelUse")}
                          </button>
                        </div>
                      </div>
                    `})}
              </div>
            `:r`
              <div class="models-card-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px;">
                ${s.map(c=>{const d=e.providers?.[c.id],p=!!d,m=p?d?.models?.[0]?.id??c.defaultModel??"(需指定)":null,g=p&&m&&m!=="(需指定)",f=g&&t?.provider===c.id;return r`
                    <div
                      class="models-provider-card ${e.selectedProvider===c.id?"list-item-selected":""}"
                      style="cursor: pointer;"
                      @click=${()=>e.onSelect(e.selectedProvider===c.id?null:c.id)}
                    >
                      <div class="models-provider-card__header">
                        <div class="models-provider-card__icon">
                          ${go(c.id,d?.displayName,d?.baseUrl,c)}
                        </div>
                        <div class="models-provider-card__title-row" style="min-width: 0;">
                          <span class="models-provider-card__name">${c.label}</span>
                          ${p?r`<span class="chip" style="font-size: 11px;">${m}</span>`:k}
                        </div>
                      </div>
                      <div class="models-provider-card__meta muted" style="font-size: 12px;">${d?.baseUrl??c.baseUrl}</div>
                      <div class="models-provider-card__footer" @click=${$=>$.stopPropagation()}>
                        ${g?r`
                              <button
                                class="btn btn--sm ${f?"btn-ok":"primary"}"
                                ?disabled=${e.saving}
                                @click=${$=>{$.stopPropagation(),e.onUseModelClick(c.id)}}
                              >
                                ${l("modelsUseAsDefault")}
                              </button>
                            `:r`<button class="btn btn--sm" disabled>${l("modelsUseAsDefault")}</button>`}
                        <button
                          class="btn btn--sm"
                          ?disabled=${e.saving}
                          @click=${$=>{$.stopPropagation(),e.onSelect(e.selectedProvider===c.id?null:c.id)}}
                        >
                          ${l("channelsConfigure")}
                        </button>
                        ${p?r`
                              <button
                                class="btn btn--sm ${f?"btn-ok":""}"
                                ?disabled=${e.saving||!f}
                                @click=${$=>{$.stopPropagation(),e.onCancelUse(c.id)}}
                              >
                                ${l("modelsCancelUse")}
                              </button>
                            `:k}
                      </div>
                    </div>
                  `})}
                ${a.map(([c,d])=>{const p=d.models?.[0]?.id,m=!!p,g=m&&t?.provider===c;return r`
                      <div
                        class="models-provider-card ${e.selectedProvider===c?"list-item-selected":""}"
                        style="cursor: pointer;"
                        @click=${()=>e.onSelect(e.selectedProvider===c?null:c)}
                      >
                        <div class="models-provider-card__header">
                          <div class="models-provider-card__icon">
                            ${go(c,d.displayName,d.baseUrl)}
                          </div>
                          <div class="models-provider-card__title-row" style="min-width: 0;">
                            <span class="models-provider-card__name">${Ze(c,d)}</span>
                            ${m?r`<span class="chip" style="font-size: 11px;">${p}</span>`:r`<span class="chip" style="font-size: 11px;">${d.models?.length??0} ${l("modelsModels")}</span>`}
                          </div>
                        </div>
                        <div class="models-provider-card__meta muted" style="font-size: 12px;">${d.baseUrl??l("commonNA")}</div>
                        <div class="models-provider-card__footer" @click=${f=>f.stopPropagation()}>
                          ${m?r`
                                <button
                                  class="btn btn--sm ${g?"btn-ok":"primary"}"
                                  ?disabled=${e.saving}
                                  @click=${f=>{f.stopPropagation(),e.onUseModelClick(c)}}
                                >
                                  ${l("modelsUseAsDefault")}
                                </button>
                              `:r`<button class="btn btn--sm" disabled>${l("modelsUseAsDefault")}</button>`}
                          <button
                            class="btn btn--sm"
                            ?disabled=${e.saving}
                            @click=${f=>{f.stopPropagation(),e.onSelect(e.selectedProvider===c?null:c)}}
                          >
                            ${l("channelsConfigure")}
                          </button>
                          <button
                            class="btn btn--sm ${g?"btn-ok":""}"
                            ?disabled=${e.saving||!g}
                            @click=${f=>{f.stopPropagation(),e.onCancelUse(c)}}
                          >
                            ${l("modelsCancelUse")}
                          </button>
                        </div>
                      </div>
                    `})}
              </div>
            `}
    </section>

    ${ru(e)}
  `}function ru(e){const t=ii(e.defaultModelRef),n=e.formProviders??e.providers,s=e.selectedProvider?Ce.find(o=>o.id===e.selectedProvider):void 0,a=e.selectedProvider?n?.[e.selectedProvider]:void 0;return r`
    ${e.addProviderModalOpen?r`
          <div class="channel-panel-overlay" @click=${e.onAddProviderModalClose}>
            <div class="channel-panel card" style="max-width: 480px;" @click=${o=>o.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${l("modelsAddCustomProvider")}</div>
                <button class="btn btn--icon" type="button" aria-label="关闭" @click=${e.onAddProviderModalClose}>
                  ${z.x}
                </button>
              </div>
              <div class="channel-panel-content">
                <div class="config-form">
                  <div class="field">
                    <span>${l("modelsProviderId")} *</span>
                    <span class="input"><input
                      type="text"
                      .value=${e.addProviderForm.providerId}
                      placeholder=${l("modelsProviderIdPlaceholder")}
                      @input=${o=>e.onAddProviderFormChange({providerId:o.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9_-]/g,"")})}
                    /></span>
                    <small class="muted" style="font-size: 11px;">${l("modelsProviderIdHint")}</small>
                  </div>
                  <div class="field">
                    <span>${l("modelsDisplayName")} *</span>
                    <span class="input"><input
                      type="text"
                      .value=${e.addProviderForm.displayName}
                      placeholder=${l("modelsDisplayNamePlaceholder")}
                      @input=${o=>e.onAddProviderFormChange({displayName:o.target.value})}
                    /></span>
                  </div>
                  <div class="field">
                    <span>${l("modelsDefaultBaseUrl")}</span>
                    <span class="input"><input
                      type="text"
                      .value=${e.addProviderForm.baseUrl}
                      placeholder=${l("modelsDefaultBaseUrlPlaceholder")}
                      @input=${o=>e.onAddProviderFormChange({baseUrl:o.target.value})}
                    /></span>
                  </div>
                  <div class="field">
                    <span>${l("modelsApiKey")}</span>
                    <span class="input"><input
                      type="password"
                      .value=${e.addProviderForm.apiKey}
                      placeholder="sk-... or $ENV_VAR"
                      @input=${o=>e.onAddProviderFormChange({apiKey:o.target.value})}
                    /></span>
                  </div>
                  <div class="field">
                    <span>${l("modelsApiKeyPrefix")}</span>
                    <span class="input"><input
                      type="text"
                      .value=${e.addProviderForm.apiKeyPrefix}
                      placeholder=${l("modelsApiKeyPrefixPlaceholder")}
                      @input=${o=>e.onAddProviderFormChange({apiKeyPrefix:o.target.value})}
                    /></span>
                  </div>
                </div>
                <div class="row" style="margin-top: 16px; gap: 8px;">
                  <button class="btn" @click=${e.onAddProviderModalClose}>${l("commonCancel")}</button>
                  <button
                    class="btn primary"
                    ?disabled=${!e.addProviderForm.providerId.trim()||!e.addProviderForm.displayName.trim()}
                    @click=${e.onAddProviderSubmit}
                  >
                    ${l("commonCreate")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `:k}

    ${e.useModelModalOpen&&e.useModelModalProvider?r`
          <div class="channel-panel-overlay" style="z-index: 165;" @click=${e.onUseModelModalClose}>
            <div class="channel-panel card" style="max-width: 400px;" @click=${o=>o.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${Ze(e.useModelModalProvider,n?.[e.useModelModalProvider])} - ${l("modelsSelectModelToUse")}</div>
                <button class="btn btn--icon" type="button" aria-label="关闭" @click=${e.onUseModelModalClose}>
                  ${z.x}
                </button>
              </div>
              <div class="channel-panel-content">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${mo(e.useModelModalProvider,n?.[e.useModelModalProvider]).map(o=>{const i=t?.provider===e.useModelModalProvider&&t?.modelId===o.id;return r`
                        <li style="padding: 10px 0; border-bottom: 1px solid var(--border-color, #eee);">
                          <button
                            class="btn ${i?"btn-ok":""}"
                            style="width: 100%; justify-content: flex-start; text-align: left;"
                            ?disabled=${e.saving}
                            @click=${()=>e.onUseModel(e.useModelModalProvider,o.id)}
                          >
                            <code>${o.id}</code> ${o.name?`- ${o.name}`:""}
                          </button>
                        </li>
                      `})}
                </ul>
              </div>
            </div>
          </div>
        `:k}

    ${e.addModelModalOpen&&e.selectedProvider?r`
          <div class="channel-panel-overlay" style="z-index: 160;" @click=${e.onAddModelModalClose}>
            <div class="channel-panel card" style="max-width: 400px;" @click=${o=>o.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${Ze(e.selectedProvider,n?.[e.selectedProvider])} - ${l("modelsAddModel")}</div>
                <button class="btn btn--icon" type="button" aria-label="关闭" @click=${e.onAddModelModalClose}>
                  ${z.x}
                </button>
              </div>
              <div class="channel-panel-content">
                <div class="config-form">
                  <div class="field">
                    <span>${l("modelsModelId")} *</span>
                    <span class="input"><input
                      type="text"
                      .value=${e.addModelForm.modelId}
                      placeholder=${e.selectedProvider==="ollama"?"e.g. llama3.3:latest":"e.g. qwen3-max"}
                      @input=${o=>e.onAddModelFormChange({modelId:o.target.value})}
                    /></span>
                    ${e.selectedProvider==="ollama"?r`<small style="font-size: 11px; color: var(--color-warning, #d97706);">
                          模型 ID 必须与本地 Ollama 执行 <code>ollama list</code> 命令显示的 NAME 完全一致
                        </small>`:k}
                  </div>
                  <div class="field">
                    <span>${l("modelsModelName")} *</span>
                    <span class="input"><input
                      type="text"
                      .value=${e.addModelForm.modelName}
                      placeholder="e.g. Qwen3 Max"
                      @input=${o=>e.onAddModelFormChange({modelName:o.target.value})}
                    /></span>
                  </div>
                  <div class="field">
                    <span>${l("modelsContextWindow")}</span>
                    <span class="input"><input
                      type="number"
                      step="1"
                      min="1"
                      .value=${e.addModelForm.contextWindow}
                      placeholder=${l("modelsContextWindowPlaceholder")}
                      @input=${o=>(()=>{const i=o.target.value.trim();return i===""?e.onAddModelFormChange({contextWindow:""}):/^\d+$/.test(i)?e.onAddModelFormChange({contextWindow:i}):e.onAddModelFormChange({contextWindow:""})})()}
                    /></span>
                    <small class="muted" style="font-size: 11px;">${l("modelsContextWindowHint")}</small>
                  </div>
                  <div class="field">
                    <span>${l("modelsMaxTokens")}</span>
                    <span class="input"><input
                      type="number"
                      step="1"
                      min="1"
                      .value=${e.addModelForm.maxTokens}
                      placeholder=${l("modelsMaxTokensPlaceholder")}
                      @input=${o=>(()=>{const i=o.target.value.trim();return i===""?e.onAddModelFormChange({maxTokens:""}):/^\d+$/.test(i)?e.onAddModelFormChange({maxTokens:i}):e.onAddModelFormChange({maxTokens:""})})()}
                    /></span>
                    <small class="muted" style="font-size: 11px;">${l("modelsMaxTokensHint")}</small>
                  </div>
                </div>
                <div class="row" style="margin-top: 16px; gap: 8px;">
                  <button class="btn" @click=${e.onAddModelModalClose}>${l("commonCancel")}</button>
                  <button
                    class="btn primary"
                    ?disabled=${!e.addModelForm.modelId.trim()||!e.addModelForm.modelName.trim()}
                    @click=${()=>e.onAddModelSubmit(e.selectedProvider)}
                  >
                    ${l("modelsAddModel")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `:k}

    ${e.selectedProvider&&(n?.[e.selectedProvider]??Ce.find(o=>o.id===e.selectedProvider))?r`
            <div class="channel-panel-overlay" @click=${o=>{o.target.classList.contains("channel-panel-overlay")&&e.onCancel()}}>
              <div class="channel-panel card" @click=${o=>o.stopPropagation()}>
                <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                  <div class="row" style="gap: 10px; align-items: center; min-width: 0;">
                    <div class="models-provider-card__icon" style="width: 24px; height: 24px; flex-shrink: 0;">
                      ${go(e.selectedProvider,a?.displayName,a?.baseUrl,s)}
                    </div>
                    <div class="card-title">
                      ${Ze(e.selectedProvider,a)} ${l("configSettingsTitle")}
                    </div>
                  </div>
                  <button class="btn btn--icon" type="button" aria-label="关闭" @click=${e.onCancel}>
                    ${z.x}
                  </button>
                </div>
                <div class="channel-panel-content text-primary">
                  ${e.saveError?r`<div class="callout" style="margin-bottom: 12px; color: var(--color-error, #c00);">${l("modelsEnvVarConflict")}: ${e.saveError}</div>`:k}
                  <div class="config-form">
                    <div class="field">
                      <span>${l("modelsBaseUrl")}</span>
                      <span class="input"><input
                        type="text"
                        .value=${n?.[e.selectedProvider]?.baseUrl??Ce.find(o=>o.id===e.selectedProvider)?.baseUrl??""}
                        placeholder=${Ce.find(o=>o.id===e.selectedProvider)?.baseUrl??""}
                        @input=${o=>e.onPatch(e.selectedProvider,{baseUrl:o.target.value})}
                      /></span>
                    </div>
                    <div class="field">
                      <span>${l("modelsApiKey")}</span>
                      <span class="input"><input
                        type="password"
                        .value=${n?.[e.selectedProvider]?.apiKey??""}
                        placeholder="sk-... or $ENV_VAR"
                        @input=${o=>e.onPatch(e.selectedProvider,{apiKey:o.target.value})}
                      /></span>
                    </div>
                    ${Ce.some(o=>o.id===e.selectedProvider)?k:r`
                          <div class="field">
                            <span>${l("modelsDisplayName")}</span>
                            <span class="input"><input
                              type="text"
                              .value=${n?.[e.selectedProvider]?.displayName??""}
                              placeholder=${e.selectedProvider}
                              @input=${o=>e.onPatch(e.selectedProvider,{displayName:o.target.value})}
                            /></span>
                          </div>
                        `}
                    <div class="field">
                      <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>${l("modelsApiType")}</span>
                        <span
                          class="muted"
                          style="cursor: help; font-size: 12px;"
                          title=${l("modelsApiTypeTooltip")}
                        >?</span>
                      </div>
                      <span class="select"><select
                        .value=${n?.[e.selectedProvider]?.api??Ce.find(o=>o.id===e.selectedProvider)?.defaultApi??"openai-completions"}
                        @change=${o=>e.onPatch(e.selectedProvider,{api:o.target.value})}
                      >
                        <option value="openai-completions">${l("modelsApiTypeOpenAI")}</option>
                        <option value="anthropic-messages">${l("modelsApiTypeAnthropic")}</option>
                      </select></span>
                      <p class="text-placeholder" style="font-size: 12px; margin-bottom: 0; margin-top: 6px; line-height: 1.5;">
                        ${l("modelsApiTypeTooltip")}
                      </p>
                    </div>
                  </div>

                  <div style="margin-top: 16px;">
                    <div class="row" style="justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <strong>${l("modelsModelManagement")}</strong>
                      <button
                        class="btn btn--sm primary"
                        ?disabled=${e.saving}
                        @click=${()=>e.onAddModel(e.selectedProvider)}
                      >
                        <span class="btn__icon">${z.plus}</span>${l("modelsAddModel")}
                      </button>
                    </div>
                    ${(n?.[e.selectedProvider]?.models??[]).length===0?r`<p class="muted" style="font-size: 13px;">${l("modelsNoModels")}</p>`:r`
                          <ul style="list-style: none; padding: 0; margin: 0;">
                            ${(n?.[e.selectedProvider]?.models??[]).map(o=>{const i=`${e.selectedProvider}/${o.id}`,c=e.modelEnv?.[i]??{},d=Object.entries(c);return r`
                                <li style="padding: 8px 0; border-bottom: 1px solid var(--border-color, #eee);">
                                  <div class="row" style="justify-content: space-between; align-items: center;">
                                    <span><code>${o.id}</code> ${o.name?`- ${o.name}`:""}</span>
                                    <button
                                      class="btn btn--sm"
                                      ?disabled=${e.saving}
                                      @click=${()=>e.onRemoveModel(e.selectedProvider,o.id)}
                                    >
                                      ${l("commonDelete")}
                                    </button>
                                  </div>
                                  <div class="row" style="gap: 10px; margin-top: 8px; flex-wrap: wrap; align-items: flex-end;">
                                    <div class="field" style="flex: 1; min-width: 120px; margin: 0;">
                                      <span style="font-size: 11px;">${l("modelsContextWindow")}</span>
                                      <span class="input"><input
                                        type="number"
                                        step="1"
                                        min="1"
                                        style="font-size: 12px; padding: 6px 8px;"
                                        .value=${o.contextWindow!=null?String(o.contextWindow):""}
                                        placeholder=${l("modelsContextWindowPlaceholder")}
                                        @input=${p=>{const m=p.target.value.trim();if(!m){e.onPatchModel(e.selectedProvider,o.id,{contextWindow:null});return}if(!/^\d+$/.test(m)){e.onPatchModel(e.selectedProvider,o.id,{contextWindow:null});return}const g=Number(m);Number.isFinite(g)&&g>0&&e.onPatchModel(e.selectedProvider,o.id,{contextWindow:g})}}
                                      /></span>
                                    </div>
                                    <div class="field" style="flex: 1; min-width: 120px; margin: 0;">
                                      <span style="font-size: 11px;">${l("modelsMaxTokens")}</span>
                                      <span class="input"><input
                                        type="number"
                                        step="1"
                                        min="1"
                                        style="font-size: 12px; padding: 6px 8px;"
                                        .value=${o.maxTokens!=null?String(o.maxTokens):""}
                                        placeholder=${l("modelsMaxTokensPlaceholder")}
                                        @input=${p=>{const m=p.target.value.trim();if(!m){e.onPatchModel(e.selectedProvider,o.id,{maxTokens:null});return}if(!/^\d+$/.test(m)){e.onPatchModel(e.selectedProvider,o.id,{maxTokens:null});return}const g=Number(m);Number.isFinite(g)&&g>0&&e.onPatchModel(e.selectedProvider,o.id,{maxTokens:g})}}
                                      /></span>
                                    </div>
                                  </div>
                                  <div style="margin-top: 6px; font-size: 12px;">
                                    ${d.length===0?r`
                                          <button
                                            class="btn btn--sm"
                                            style="font-size: 11px; margin-top: 4px;"
                                            @click=${()=>e.onPatchModelEnv(e.selectedProvider,o.id,{__new__:""})}
                                          >
                                            <span class="btn__icon">${z.plus}</span>${l("modelsEnvVars")}
                                          </button>
                                        `:r`
                                          <div style="margin-top: 4px;">
                                            ${d.map(([p,m])=>r`
                                              <div class="row" style="gap: 6px; align-items: center; margin-top: 4px;">
                                                <span class="input small"><input
                                                  type="text"
                                                  style="flex: 1; font-size: 11px; padding: 4px;"
                                                  placeholder=${l("envVarsKeyPlaceholder")}
                                                  .value=${p==="__new__"?"":p}
                                                  @input=${g=>{const f=g.target.value,$={...c};delete $[p],f&&($[f]=m),e.onPatchModelEnv(e.selectedProvider,o.id,$)}}
                                                /></span>
                                                <span class="input small"><input
                                                  type="text"
                                                  style="flex: 1; font-size: 11px; padding: 4px;"
                                                  placeholder=${l("envVarsValuePlaceholder")}
                                                  .value=${m}
                                                  @input=${g=>{const f={...c};f[p]=g.target.value,e.onPatchModelEnv(e.selectedProvider,o.id,f)}}
                                                /></span>
                                                <button
                                                  class="btn btn--sm"
                                                  type="button"
                                                  style="font-size: 11px;"
                                                  aria-label=${l("envVarsDelete")}
                                                  title=${l("envVarsDelete")}
                                                  @click=${()=>{const g={...c};delete g[p],e.onPatchModelEnv(e.selectedProvider,o.id,g)}}
                                                >
                                                  ${z.x}
                                                </button>
                                              </div>
                                            `)}
                                            <button
                                              class="btn btn--sm"
                                              style="margin-top: 4px; font-size: 11px;"
                                              @click=${()=>{const p={...c,__new__:""};e.onPatchModelEnv(e.selectedProvider,o.id,p)}}
                                            >
                                              <span class="btn__icon">${z.plus}</span>${l("modelsEnvVars")}
                                            </button>
                                          </div>
                                        `}
                                  </div>
                                </li>
                              `})}
                          </ul>
                        `}
                  </div>

                  <div class="row" style="margin-top: 16px; gap: 8px;">
                    <button
                      class="btn primary"
                      ?disabled=${e.saving}
                      @click=${e.onSave}
                    >
                      ${e.saving?l("commonSaving"):l("commonSave")}
                    </button>
                    ${Ce.some(o=>o.id===e.selectedProvider)?k:r`
                          <button
                            class="btn btn--danger"
                            type="button"
                            ?disabled=${e.saving}
                            @click=${e.onDeleteProvider}
                          >
                            ${l("commonDelete")}
                          </button>
                        `}
                    <button class="btn" type="button" aria-label="关闭" ?disabled=${e.saving} @click=${e.onCancel}>
                      ${l("commonCancel")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `:k}
  `}const M2=["__all__","public","local"];function A2(e){const t=e.split(".");return t.length!==4?!1:t.every(n=>{if(!/^\d+$/.test(n))return!1;const s=Number(n);return Number.isInteger(s)&&s>=0&&s<=255})}function E2(e){const t=e.replace(/^\[/,"").replace(/\]$/,"");return t.includes(":")&&/^[0-9a-f:.]+$/i.test(t)}function fo(e,t){const n=e?.baseUrl?.trim();return n||(t?.baseUrl?.trim()??"")}function hr(e,t){const n=fo(e,t);if(n==="(官方)")return"public";if(!n)return"local";try{const a=new URL(n).hostname.trim().toLowerCase();return!a||a==="localhost"||A2(a)||E2(a)?"local":"public"}catch{return"local"}}function cu(e,t,n){const s=ii(n),a=Ce.filter(i=>Ms(i.id,e?.[i.id],i,t)).map(i=>{const c=e?.[i.id],d=mo(i.id,c);return{key:i.id,provider:c,builtin:i,displayName:Ze(i.id,c),baseUrl:fo(c,i),category:hr(c,i),modelCount:d.length,previewModel:d[0]?.id??null,isDefault:s?.provider===i.id&&d.some(p=>p.id===s?.modelId)}}),o=Object.entries(e??{}).filter(([i,c])=>Ce.some(d=>d.id===i)?!1:Ms(i,c,void 0,t)).sort(([i,c],[d,p])=>Ze(i,c).localeCompare(Ze(d,p),"zh-Hans-CN")).map(([i,c])=>{const d=mo(i,c);return{key:i,provider:c,displayName:Ze(i,c),baseUrl:fo(c),category:hr(c),modelCount:d.length,previewModel:d[0]?.id??null,isDefault:s?.provider===i&&d.some(p=>p.id===s?.modelId)}});return[...a,...o]}function T2(e,t){const n=cu(e,t,null),s=new Map;return s.set("__all__",n.length),s.set("public",n.filter(a=>a.category==="public").length),s.set("local",n.filter(a=>a.category==="local").length),{orderedCategories:M2,counts:s}}function L2(e){return e==="public"?"公有模型":"本地模型"}function _2(e,t,n,s,a){const o=e.baseUrl||"未配置 Base URL",i=e.modelCount>0,c=lu(e.key,e.displayName,e.baseUrl,e.builtin),d=c!==null;return r`
    <div class="emp-card-wrap ${t===e.key?"active":""}">
      <div class="emp-card emp-card-btn" @click=${()=>n(e.key)}>
        <div class="emp-card__icon emp-card__icon--default" aria-hidden="true">
          ${d?r`<img src="${c}" alt="${e.displayName}" class="provider-logo" />`:z.modelCube}
        </div>
        <div class="emp-card__actions models-provider-actions">
          ${i?e.isDefault?r`
                <button
                  class="btn btn--sm"
                  @click=${p=>{p.stopPropagation(),a(e.key)}}
                >取消默认</button>
                <span class="market-card-chip market-card-chip--state">默认模型</span>
              `:r`
                <button
                  class="btn btn--sm"
                  @click=${p=>{p.stopPropagation(),s(e.key)}}
                >设为默认</button>
              `:k}
        </div>
        <h3 class="emp-card__title">${e.displayName}</h3>
        <p class="emp-card__desc">${o}</p>
      </div>
    </div>
  `}function P2(e){const t=cu(e.providers,e.providerSearchQuery,e.defaultModelRef),n=e.selectedCategory??"__all__",s=n==="__all__"?t:t.filter(d=>d.category===n),a=s.filter(d=>d.category==="public"),o=s.filter(d=>d.category==="local"),i=n==="__all__"?[{title:"公有模型",items:a},{title:"本地模型",items:o}]:[{title:L2(n),items:s}],c=!e.loading||t.length>0;return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            ${c?r`
                  <div class="emp-main__body">
                    <div class="emp-toolbar__actions">
                      <div class="emp-search">
                        <span class="input"><input
                          class="emp-search__input"
                          type="text"
                          placeholder="搜索"
                          .value=${e.providerSearchQuery}
                          ?disabled=${e.loading}
                          @input=${d=>e.onProviderSearchChange(d.target.value)}
                        /></span>
                        <span class="emp-search__icon" aria-hidden="true">${z.search}</span>
                      </div>
                      <button class="btn" type="button" ?disabled=${e.loading} @click=${e.onRefresh}>
                        刷新
                      </button>
                      <button class="btn primary" type="button" ?disabled=${e.loading} @click=${e.onAddProvider}>
                        添加
                      </button>
                    </div>
                    <div class="emp-sections">
                      ${i.map(d=>d.items.length===0?k:r`
                              <div class="emp-section">
                                <div class="emp-section__header">
                                  <h3 class="emp-section__title">${d.title}</h3>
                                </div>
                                <div class="emp-grid">
                                  ${d.items.map(p=>_2(p,e.selectedProvider,m=>e.onSelect(e.selectedProvider===m?null:m),e.onUseModelClick,e.onCancelUse))}
                                </div>
                              </div>
                            `)}
                    </div>
                  </div>
                `:k}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:s.length===0?r`<div class="emp-empty">暂无匹配的模型厂商</div>`:k}
          </div>
        </div>
      </section>
    </main>

    ${ru(e)}
  `}const I2=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),As=e=>e.trim().toLowerCase(),D2=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},Mt=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},li=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),a=s.indexOf(":");if(a>0){const o=s.slice(0,a),i=s.slice(a+1);return{key:o,value:i,raw:s}}return{value:s,raw:s}}),R2=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),vr=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},yr=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},N2=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),U2=(e,t)=>{const n=As(t.value??"");if(!n)return!0;if(!t.key)return R2(e).some(a=>a.includes(n));switch(As(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return vr(e).some(a=>a.includes(n));case"model":return yr(e).some(a=>a.includes(n));case"tool":return N2(e).some(a=>a.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const a=D2(n);return a.test(e.key)||(e.sessionId?a.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return yr(e).length>0;case"provider":return vr(e).length>0;default:return!0}case"mintokens":{const a=Mt(n);return a===null?!0:(e.usage?.totalTokens??0)>=a}case"maxtokens":{const a=Mt(n);return a===null?!0:(e.usage?.totalTokens??0)<=a}case"mincost":{const a=Mt(n);return a===null?!0:(e.usage?.totalCost??0)>=a}case"maxcost":{const a=Mt(n);return a===null?!0:(e.usage?.totalCost??0)<=a}case"minmessages":{const a=Mt(n);return a===null?!0:(e.usage?.messageCounts?.total??0)>=a}case"maxmessages":{const a=Mt(n);return a===null?!0:(e.usage?.messageCounts?.total??0)<=a}default:return!0}},O2=(e,t)=>{const n=li(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const o of n){if(!o.key)continue;const i=As(o.key);if(!I2.has(i)){s.push(`Unknown filter: ${o.key}`);continue}if(o.value===""&&s.push(`Missing value for ${o.key}`),i==="has"){const c=new Set(["tools","errors","context","usage","model","provider"]);o.value&&!c.has(As(o.value))&&s.push(`Unknown has:${o.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(i)&&o.value&&Mt(o.value)===null&&s.push(`Invalid number for ${o.key}`)}return{sessions:e.filter(o=>n.every(i=>U2(o,i))),warnings:s}};function F2(e){const t=e.split(`
`),n=new Map,s=[];for(const c of t){const d=/^\[Tool:\s*([^\]]+)\]/.exec(c.trim());if(d){const p=d[1];n.set(p,(n.get(p)??0)+1);continue}c.trim().startsWith("[Tool Result]")||s.push(c)}const a=Array.from(n.entries()).toSorted((c,d)=>d[1]-c[1]),o=a.reduce((c,[,d])=>c+d,0),i=a.length>0?`Tools: ${a.map(([c,d])=>du(c,d)).join(", ")}; ${o} calls`:"";return{tools:a,summary:i,cleanContent:s.join(`
`).trim()}}function du(e,t){return`${e} (${t})`}const B2=4;function St(e){return Math.round(e/B2)}function j(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function W2(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function gs(e){return Ds()==="zh"?`还有 ${e} 项`:`${e} ${l("usageMoreSessions")}`}function H2(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const a of e){const o=a.usage;if(!o?.messageCounts||o.messageCounts.total===0)continue;const i=o.firstActivity??a.updatedAt,c=o.lastActivity??a.updatedAt;if(!i||!c)continue;const d=Math.min(i,c),p=Math.max(i,c),g=Math.max(p-d,1)/6e4;let f=d;for(;f<p;){const $=new Date(f),S=ri($,t),w=ci($,t),C=Math.min(w.getTime(),p),P=Math.max((C-f)/6e4,0)/g;n[S]+=o.messageCounts.errors*P,s[S]+=o.messageCounts.total*P,f=C+1}}return s.map((a,o)=>{const i=n[o],c=a>0?i/a:0;return{hour:o,rate:c,errors:i,msgs:a}}).filter(a=>a.msgs>0&&a.errors>0).toSorted((a,o)=>o.rate-a.rate).slice(0,5).map(a=>({label:W2(a.hour),value:`${(a.rate*100).toFixed(2)}%`,sub:`${Math.round(a.errors)} ${l("usageErrors").toLowerCase()} · ${Math.round(a.msgs)} ${l("usageMessagesCount")}`}))}const z2=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function ri(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function Q2(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function ci(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function K2(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let a=0,o=!1;for(const c of e){const d=c.usage;if(!d||!d.totalTokens||d.totalTokens<=0)continue;a+=d.totalTokens;const p=d.firstActivity??c.updatedAt,m=d.lastActivity??c.updatedAt;if(!p||!m)continue;o=!0;const g=Math.min(p,m),f=Math.max(p,m),S=Math.max(f-g,1)/6e4;let w=g;for(;w<f;){const C=new Date(w),L=ri(C,t),P=Q2(C,t),U=ci(C,t),R=Math.min(U.getTime(),f),D=Math.max((R-w)/6e4,0)/S;n[L]+=d.totalTokens*D,s[P]+=d.totalTokens*D,w=R+1}}const i=z2.map((c,d)=>({label:c,tokens:s[d]}));return{hasData:o,totalTokens:a,hourTotals:n,weekdayTotals:i}}function q2(e,t,n,s){const a=K2(e,t);if(!a.hasData)return r`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">${l("usageActivityByTime")}</div>
            <div class="usage-mosaic-sub">${l("usageMosaicSubNoData")}</div>
          </div>
          <div class="usage-mosaic-total">${j(0)} ${l("usageTokensUnit")}</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">${l("usageNoTimeline")}</div>
      </div>
    `;const o=Math.max(...a.hourTotals,1),i=Math.max(...a.weekdayTotals.map(c=>c.tokens),1);return r`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">${l("usageActivityByTime")}</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${l(t==="utc"?"usageTimeZoneUtc":"usageTimeZoneLocal")}.
          </div>
        </div>
        <div class="usage-mosaic-total">${j(a.totalTokens)} ${l("usageTokensUnit")}</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">${l("usageDayOfWeek")}</div>
          <div class="usage-daypart-grid">
            ${a.weekdayTotals.map(c=>{const d=Math.min(c.tokens/i,1),p=c.tokens>0?`rgba(36, 186, 81, ${.12+d*.6})`:"transparent";return r`
                <div class="usage-daypart-cell" style="background: ${p};">
                  <div class="usage-daypart-label">${c.label}</div>
                  <div class="usage-daypart-value">${j(c.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>${l("usageHours")}</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${a.hourTotals.map((c,d)=>{const p=Math.min(c/o,1),m=c>0?`rgba(36, 186, 81, ${.08+p*.7})`:"transparent",g=`${d}:00 · ${j(c)} ${l("usageTokensUnit")}`,f=p>.7?"rgba(36, 186, 81, 0.6)":"rgba(36, 186, 81, 0.2)",$=n.includes(d);return r`
                <div
                  class="usage-hour-cell ${$?"selected":""}"
                  style="background: ${m}; border-color: ${f};"
                  title="${g}"
                  @click=${S=>s(d,S.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>${l("usageMidnight")}</span>
            <span>${l("usage4am")}</span>
            <span>${l("usage8am")}</span>
            <span>${l("usageNoon")}</span>
            <span>${l("usage4pm")}</span>
            <span>${l("usage8pm")}</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low → High token density
          </div>
        </div>
      </div>
    </div>
  `}function se(e,t=2){return`$${e.toFixed(t)}`}function Ta(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function V2(e){return!e||e<=0?"0s":e>=6e4?`${Math.round(e/6e4)}m`:e>=1e3?`${Math.round(e/1e3)}s`:`${Math.round(e)}ms`}function uu(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,a]=t,o=new Date(Date.UTC(Number(n),Number(s)-1,Number(a)));return Number.isNaN(o.valueOf())?null:o}function pu(e){const t=uu(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function j2(e){const t=uu(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}function mu(e){if(!e||e<=0)return"—";const t=Math.round(e/1e3),n=t%60,s=Math.floor(t/60)%60,a=Math.floor(t/3600);return a>0?`${a}h ${s}m`:s>0?`${s}m ${n}s`:`${n}s`}function La(e,t,n="text/plain"){const s=new Blob([t],{type:n}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=e,o.click(),URL.revokeObjectURL(a)}function G2(e){return e.includes('"')||e.includes(",")||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}function Es(e){return e.map(t=>t==null?"":G2(String(t))).join(",")}const jt=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),Gt=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},J2=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,a=new Map,o=new Map,i=new Map,c=new Map,d=new Map,p=new Map,m=new Map,g={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const f of e){const $=f.usage;if($){if($.messageCounts&&(n.total+=$.messageCounts.total,n.user+=$.messageCounts.user,n.assistant+=$.messageCounts.assistant,n.toolCalls+=$.messageCounts.toolCalls,n.toolResults+=$.messageCounts.toolResults,n.errors+=$.messageCounts.errors),$.toolUsage)for(const S of $.toolUsage.tools)s.set(S.name,(s.get(S.name)??0)+S.count);if($.modelUsage&&$.modelUsage.length>0){let S=!1;for(const w of $.modelUsage){const C=w.provider&&w.provider!=="unknown"?w.provider:f.modelProvider??f.providerOverride??"unknown",L=w.model&&w.model!=="unknown"?w.model:f.model??f.modelOverride??"unknown",P=w.totals.totalTokens===0&&$.totalTokens>0&&!S?{input:$.input,output:$.output,cacheRead:$.cacheRead,cacheWrite:$.cacheWrite,totalTokens:$.totalTokens,totalCost:$.totalCost,inputCost:$.inputCost??0,outputCost:$.outputCost??0,cacheReadCost:$.cacheReadCost??0,cacheWriteCost:$.cacheWriteCost??0,missingCostEntries:$.missingCostEntries??0}:w.totals;w.totals.totalTokens===0&&$.totalTokens>0&&(S=!0);const U=`${C}::${L}`,R=a.get(U)??{provider:C,model:L,count:0,totals:jt()};R.count+=w.count,Gt(R.totals,P),a.set(U,R);const O=o.get(C)??{provider:C,model:void 0,count:0,totals:jt()};O.count+=w.count,Gt(O.totals,P),o.set(C,O)}}else if($.totalTokens>0){const S=f.modelProvider??f.providerOverride??"unknown",w=f.model??f.modelOverride??"unknown",C=`${S}::${w}`,L=a.get(C)??{provider:S,model:w,count:0,totals:jt()};L.count+=1,Gt(L.totals,$),a.set(C,L);const P=o.get(S)??{provider:S,model:void 0,count:0,totals:jt()};P.count+=1,Gt(P.totals,$),o.set(S,P)}if($.latency){const{count:S,avgMs:w,minMs:C,maxMs:L,p95Ms:P}=$.latency;S>0&&(g.count+=S,g.sum+=w*S,g.min=Math.min(g.min,C),g.max=Math.max(g.max,L),g.p95Max=Math.max(g.p95Max,P))}if(f.agentId){const S=i.get(f.agentId)??jt();Gt(S,$),i.set(f.agentId,S)}if(f.channel){const S=c.get(f.channel)??jt();Gt(S,$),c.set(f.channel,S)}for(const S of $.dailyBreakdown??[]){const w=d.get(S.date)??{date:S.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};w.tokens+=S.tokens,w.cost+=S.cost,d.set(S.date,w)}for(const S of $.dailyMessageCounts??[]){const w=d.get(S.date)??{date:S.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};w.messages+=S.total,w.toolCalls+=S.toolCalls,w.errors+=S.errors,d.set(S.date,w)}for(const S of $.dailyLatency??[]){const w=p.get(S.date)??{date:S.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};w.count+=S.count,w.sum+=S.avgMs*S.count,w.min=Math.min(w.min,S.minMs),w.max=Math.max(w.max,S.maxMs),w.p95Max=Math.max(w.p95Max,S.p95Ms),p.set(S.date,w)}for(const S of $.dailyModelUsage??[]){const w=S.provider&&S.provider!=="unknown"?S.provider:f.modelProvider??f.providerOverride??"unknown",C=S.model&&S.model!=="unknown"?S.model:f.model??f.modelOverride??"unknown",L=`${S.date}::${w}::${C}`,P=m.get(L)??{date:S.date,provider:w,model:C,tokens:0,cost:0,count:0};P.tokens+=S.tokens,P.cost+=S.cost,P.count+=S.count,m.set(L,P)}}}return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce((f,$)=>f+$,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([f,$])=>({name:f,count:$})).toSorted((f,$)=>$.count-f.count)},byModel:Array.from(a.values()).toSorted((f,$)=>$.totals.totalCost-f.totals.totalCost),byProvider:Array.from(o.values()).toSorted((f,$)=>$.totals.totalCost-f.totals.totalCost),byAgent:Array.from(i.entries()).map(([f,$])=>({agentId:f,totals:$})).toSorted((f,$)=>$.totals.totalCost-f.totals.totalCost),byChannel:Array.from(c.entries()).map(([f,$])=>({channel:f,totals:$})).toSorted((f,$)=>$.totals.totalCost-f.totals.totalCost),latency:g.count>0?{count:g.count,avgMs:g.sum/g.count,minMs:g.min===Number.POSITIVE_INFINITY?0:g.min,maxMs:g.max,p95Ms:g.p95Max}:void 0,dailyLatency:Array.from(p.values()).map(f=>({date:f.date,count:f.count,avgMs:f.count?f.sum/f.count:0,minMs:f.min===Number.POSITIVE_INFINITY?0:f.min,maxMs:f.max,p95Ms:f.p95Max})).toSorted((f,$)=>f.date.localeCompare($.date)),modelDaily:Array.from(m.values()).toSorted((f,$)=>f.date.localeCompare($.date)||$.cost-f.cost),daily:Array.from(d.values()).toSorted((f,$)=>f.date.localeCompare($.date))}},Y2=(e,t,n)=>{let s=0,a=0;for(const m of e){const g=m.usage?.durationMs??0;g>0&&(s+=g,a+=1)}const o=a?s/a:0,i=t&&s>0?t.totalTokens/(s/6e4):void 0,c=t&&s>0?t.totalCost/(s/6e4):void 0,d=n.messages.total?n.messages.errors/n.messages.total:0,p=n.daily.filter(m=>m.messages>0&&m.errors>0).map(m=>({date:m.date,errors:m.errors,messages:m.messages,rate:m.errors/m.messages})).toSorted((m,g)=>g.rate-m.rate||g.errors-m.errors)[0];return{durationSumMs:s,durationCount:a,avgDurationMs:o,throughputTokensPerMin:i,throughputCostPerMin:c,errorRate:d,peakErrorDay:p}},Z2=e=>{const t=[Es(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(Es([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},X2=e=>{const t=[Es(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(Es([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},e0=(e,t,n)=>{const s=e.trim();if(!s)return[];const a=s.length?s.split(/\s+/):[],o=a.length?a[a.length-1]:"",[i,c]=o.includes(":")?[o.slice(0,o.indexOf(":")),o.slice(o.indexOf(":")+1)]:["",""],d=i.toLowerCase(),p=c.toLowerCase(),m=P=>{const U=new Set;for(const R of P)R&&U.add(R);return Array.from(U)},g=m(t.map(P=>P.agentId)).slice(0,6),f=m(t.map(P=>P.channel)).slice(0,6),$=m([...t.map(P=>P.modelProvider),...t.map(P=>P.providerOverride),...n?.byProvider.map(P=>P.provider)??[]]).slice(0,6),S=m([...t.map(P=>P.model),...n?.byModel.map(P=>P.model)??[]]).slice(0,6),w=m(n?.tools.tools.map(P=>P.name)??[]).slice(0,6);if(!d)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const C=[],L=(P,U)=>{for(const R of U)(!p||R.toLowerCase().includes(p))&&C.push({label:`${P}:${R}`,value:`${P}:${R}`})};switch(d){case"agent":L("agent",g);break;case"channel":L("channel",f);break;case"provider":L("provider",$);break;case"model":L("model",S);break;case"tool":L("tool",w);break;case"has":["errors","tools","context","usage","model","provider"].forEach(P=>{(!p||P.includes(p))&&C.push({label:`has:${P}`,value:`has:${P}`})});break}return C},t0=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},Et=e=>e.trim().toLowerCase(),n0=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),a=s[s.length-1]??"",o=t.includes(":")?t.split(":")[0]:null,i=a.includes(":")?a.split(":")[0]:null;return a.endsWith(":")&&o&&i===o?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},br=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(a=>a!==t);return s.length?`${s.join(" ")} `:""},wr=(e,t,n)=>{const s=Et(t),o=[...li(e).filter(i=>Et(i.key??"")!==s).map(i=>i.raw),...n.map(i=>`${t}:${i}`)];return o.length?`${o.join(" ")} `:""};function fe(e,t){return t===0?0:e/t*100}function s0(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:fe(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:fe(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:fe(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:fe(e.cacheWriteCost||0,t)},totalCost:t}}function a0(e,t,n,s,a,o,i,c){if(!(e.length>0||t.length>0||n.length>0))return k;const p=n.length===1?s.find(S=>S.key===n[0]):null,m=p?(p.label||p.key).slice(0,20)+((p.label||p.key).length>20?"…":""):n.length===1?n[0].slice(0,8)+"…":`${n.length} ${l("usageSessionsCount")}`,g=p?p.label||p.key:n.length===1?n[0]:n.join(", "),f=e.length===1?e[0]:`${e.length} days`,$=t.length===1?`${t[0]}:00`:`${t.length} hours`;return r`
    <div class="active-filters">
      ${e.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">${l("usageDays")}: ${f}</span>
              <button
                class="filter-chip-remove"
                type="button"
                @click=${a}
                title=${l("usageRemoveFilter")}
                aria-label=${l("usageRemoveFilter")}
              >
                ${z.x}
              </button>
            </div>
          `:k}
      ${t.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">${l("usageHoursLabel")}: ${$}</span>
              <button
                class="filter-chip-remove"
                type="button"
                @click=${o}
                title=${l("usageRemoveFilter")}
                aria-label=${l("usageRemoveFilter")}
              >
                ${z.x}
              </button>
            </div>
          `:k}
      ${n.length>0?r`
            <div class="filter-chip" title="${g}">
              <span class="filter-chip-label">${l("usageSession")}: ${m}</span>
              <button
                class="filter-chip-remove"
                type="button"
                @click=${i}
                title=${l("usageRemoveFilter")}
                aria-label=${l("usageRemoveFilter")}
              >
                ${z.x}
              </button>
            </div>
          `:k}
      ${(e.length>0||t.length>0)&&n.length>0?r`
            <button class="btn small" @click=${c}>
              ${l("usageClearFilters")}
            </button>
          `:k}
    </div>
  `}function o0(e,t,n,s,a,o){if(!e.length)return r`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">${l("usageDailyUsage")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${l("usageNoData")}</div>
      </div>
    `;const i=n==="tokens",c=e.map(g=>i?g.totalTokens:g.totalCost),d=Math.max(...c,i?1:1e-4),p=e.length>30?12:e.length>20?18:e.length>14?24:32,m=e.length<=14;return r`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>a("total")}
          >
            ${l("usageTotal")}
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>a("by-type")}
          >
            ${l("usageByType")}
          </button>
        </div>
        <div class="card-title">${l(i?"usageDailyToken":"usageDailyCost")}</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${p}px">
          ${e.map((g,f)=>{const S=c[f]/d*100,w=t.includes(g.date),C=pu(g.date),L=e.length>20?String(parseInt(g.date.slice(8),10)):C,P=e.length>20?"font-size: 8px":"",U=s==="by-type"?i?[{value:g.output,class:"output"},{value:g.input,class:"input"},{value:g.cacheWrite,class:"cache-write"},{value:g.cacheRead,class:"cache-read"}]:[{value:g.outputCost??0,class:"output"},{value:g.inputCost??0,class:"input"},{value:g.cacheWriteCost??0,class:"cache-write"},{value:g.cacheReadCost??0,class:"cache-read"}]:[],R=s==="by-type"?i?[`Output ${j(g.output)}`,`Input ${j(g.input)}`,`Cache write ${j(g.cacheWrite)}`,`Cache read ${j(g.cacheRead)}`]:[`Output ${se(g.outputCost??0)}`,`Input ${se(g.inputCost??0)}`,`Cache write ${se(g.cacheWriteCost??0)}`,`Cache read ${se(g.cacheReadCost??0)}`]:[],O=i?j(g.totalTokens):se(g.totalCost);return r`
              <div
                class="daily-bar-wrapper ${w?"selected":""}"
                @click=${D=>o(g.date,D.shiftKey)}
              >
                ${s==="by-type"?r`
                        <div
                          class="daily-bar"
                          style="height: ${S.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const D=U.reduce((u,b)=>u+b.value,0)||1;return U.map(u=>r`
                                <div
                                  class="cost-segment ${u.class}"
                                  style="height: ${u.value/D*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:r`
                        <div class="daily-bar" style="height: ${S.toFixed(1)}%"></div>
                      `}
                ${m?r`<div class="daily-bar-total">${O}</div>`:k}
                <div class="daily-bar-label" style="${P}">${L}</div>
                <div class="daily-bar-tooltip">
                  <strong>${j2(g.date)}</strong><br />
                  ${j(g.totalTokens)} ${l("usageTokensUnit")}<br />
                  ${se(g.totalCost)}
                  ${R.length?r`${R.map(D=>r`<div>${D}</div>`)}`:k}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function i0(e,t){const n=s0(e),s=t==="tokens",a=e.totalTokens||1,o={output:fe(e.output,a),input:fe(e.input,a),cacheWrite:fe(e.cacheWrite,a),cacheRead:fe(e.cacheRead,a)};return r`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${l(s?"usageTokensByType":"usageCostByType")}</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?o.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?j(e.output):se(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?o.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?j(e.input):se(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?o.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?j(e.cacheWrite):se(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?o.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?j(e.cacheRead):se(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>${l("usageOutput")} ${s?j(e.output):se(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>${l("usageInput")} ${s?j(e.input):se(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>${l("usageCacheWrite")} ${s?j(e.cacheWrite):se(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>${l("usageCacheRead")} ${s?j(e.cacheRead):se(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        ${l("usageTotalLabel")}: ${s?j(e.totalTokens):se(e.totalCost)}
      </div>
    </div>
  `}function Tt(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-list">
                ${t.map(s=>r`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?r`<span class="usage-list-sub">${s.sub}</span>`:k}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function kr(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-error-list">
                ${t.map(s=>r`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?r`<div class="usage-error-sub">${s.sub}</div>`:k}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function l0(e,t,n,s,a,o,i){if(!e)return k;const c=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,d=t.messages.total?e.totalCost/t.messages.total:0,p=e.input+e.cacheRead,m=p>0?e.cacheRead/p:0,g=p>0?`${(m*100).toFixed(1)}%`:"—",f=n.errorRate*100,$=n.throughputTokensPerMin!==void 0?`${j(Math.round(n.throughputTokensPerMin))} tok/min`:"—",S=n.throughputCostPerMin!==void 0?`${se(n.throughputCostPerMin,4)} / min`:"—",w=n.durationCount>0?V2(n.avgDurationMs):"—",C=l("usageCacheHitRateHint"),L=l("usageErrorRateHint"),P=l("usageThroughputHint"),U=l("usageTokensHint"),R=l(s?"usageCostHintMissing":"usageCostHint"),O=t.daily.filter(E=>E.messages>0&&E.errors>0).map(E=>{const T=E.errors/E.messages;return{label:pu(E.date),value:`${(T*100).toFixed(2)}%`,sub:`${E.errors} ${l("usageErrors").toLowerCase()} · ${E.messages} ${l("usageMessagesCount")} · ${j(E.tokens)}`,rate:T}}).toSorted((E,T)=>T.rate-E.rate).slice(0,5).map(({rate:E,...T})=>T),D=t.byModel.filter(E=>(E.count??0)>0||(E.totals?.totalTokens??0)>0).slice(0,5).map(E=>({label:E.model??"unknown",value:se(E.totals.totalCost),sub:`${j(E.totals.totalTokens)} · ${E.count} ${l("usageMessagesCount")}`})),u=t.byProvider.filter(E=>(E.count??0)>0||(E.totals?.totalTokens??0)>0).slice(0,5).map(E=>({label:E.provider??"unknown",value:se(E.totals.totalCost),sub:`${j(E.totals.totalTokens)} · ${E.count} ${l("usageMessagesCount")}`})),b=t.tools.tools.slice(0,6).map(E=>({label:E.name,value:`${E.count}`,sub:l("usageCalls")})),x=t.byAgent.slice(0,5).map(E=>({label:E.agentId,value:se(E.totals.totalCost),sub:j(E.totals.totalTokens)})),M=t.byChannel.slice(0,5).map(E=>({label:E.channel,value:se(E.totals.totalCost),sub:j(E.totals.totalTokens)}));return r`
    <section class="card">
      <div class="card-title">${l("usageOverview")}</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${l("usageMessages")}
            <span class="usage-summary-hint" title=${l("usageMessagesHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} ${l("usageUser").toLowerCase()} · ${t.messages.assistant} ${l("usageAssistant").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${l("usageToolCalls")}
            <span class="usage-summary-hint" title=${l("usageToolCallsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} ${l("usageToolsUsed")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${l("usageErrors")}
            <span class="usage-summary-hint" title=${l("usageErrorsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} ${l("usageToolResults")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${l("usageAvgTokensMsg")}
            <span class="usage-summary-hint" title=${U}>?</span>
          </div>
          <div class="usage-summary-value">${j(c)}</div>
          <div class="usage-summary-sub">${l("usageAcrossMessages")} ${t.messages.total||0} ${l("usageMessagesCount")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${l("usageAvgCostMsg")}
            <span class="usage-summary-hint" title=${R}>?</span>
          </div>
          <div class="usage-summary-value">${se(d,4)}</div>
          <div class="usage-summary-sub">${se(e.totalCost)} ${l("usageTotalLabel").toLowerCase()}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${l("usageSessionsCard")}
            <span class="usage-summary-hint" title=${l("usageSessionsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${o}</div>
          <div class="usage-summary-sub">${l("usageInRange")} ${i}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${l("usageThroughput")}
            <span class="usage-summary-hint" title=${P}>?</span>
          </div>
          <div class="usage-summary-value">${$}</div>
          <div class="usage-summary-sub">${S}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${l("usageErrorRate")}
            <span class="usage-summary-hint" title=${L}>?</span>
          </div>
          <div class="usage-summary-value ${f>5?"bad":f>1?"warn":"good"}">${f.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} ${l("usageErrors").toLowerCase()} · ${w} ${l("usageAvg")} ${l("usageSession").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${l("usageCacheHitRate")}
            <span class="usage-summary-hint" title=${C}>?</span>
          </div>
          <div class="usage-summary-value ${m>.6?"good":m>.3?"warn":"bad"}">${g}</div>
          <div class="usage-summary-sub">
            ${j(e.cacheRead)} ${l("usageCached")} · ${j(p)} ${l("usagePrompt")}
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${Tt(l("usageTopModels"),D,l("usageNoModelData"))}
        ${Tt(l("usageTopProviders"),u,l("usageNoProviderData"))}
        ${Tt(l("usageTopTools"),b,l("usageNoToolCalls"))}
        ${Tt(l("usageTopAgents"),x,l("usageNoAgentData"))}
        ${Tt(l("usageTopChannels"),M,l("usageNoChannelData"))}
        ${kr(l("usagePeakErrorDays"),O,l("usageNoErrorData"))}
        ${kr(l("usagePeakErrorHours"),a,l("usageNoErrorData"))}
      </div>
    </section>
  `}function r0(e,t,n,s,a,o,i,c,d,p,m,g,f,$,S){const w=_=>f.includes(_),C=_=>{const I=_.label||_.key;return I.startsWith("agent:")&&I.includes("?token=")?I.slice(0,I.indexOf("?token=")):I},L=async _=>{const I=C(_);try{await navigator.clipboard.writeText(I)}catch{}},P=_=>{const I=[];return w("channel")&&_.channel&&I.push(`channel:${_.channel}`),w("agent")&&_.agentId&&I.push(`agent:${_.agentId}`),w("provider")&&(_.modelProvider||_.providerOverride)&&I.push(`provider:${_.modelProvider??_.providerOverride}`),w("model")&&_.model&&I.push(`model:${_.model}`),w("messages")&&_.usage?.messageCounts&&I.push(`msgs:${_.usage.messageCounts.total}`),w("tools")&&_.usage?.toolUsage&&I.push(`tools:${_.usage.toolUsage.totalCalls}`),w("errors")&&_.usage?.messageCounts&&I.push(`errors:${_.usage.messageCounts.errors}`),w("duration")&&_.usage?.durationMs&&I.push(`dur:${mu(_.usage.durationMs)}`),I},U=_=>{const I=_.usage;if(!I)return 0;if(n.length>0&&I.dailyBreakdown&&I.dailyBreakdown.length>0){const H=I.dailyBreakdown.filter(q=>n.includes(q.date));return s?H.reduce((q,Y)=>q+Y.tokens,0):H.reduce((q,Y)=>q+Y.cost,0)}return s?I.totalTokens??0:I.totalCost??0},R=[...e].toSorted((_,I)=>{switch(a){case"recent":return(I.updatedAt??0)-(_.updatedAt??0);case"messages":return(I.usage?.messageCounts?.total??0)-(_.usage?.messageCounts?.total??0);case"errors":return(I.usage?.messageCounts?.errors??0)-(_.usage?.messageCounts?.errors??0);case"cost":return U(I)-U(_);default:return U(I)-U(_)}}),O=o==="asc"?R.toReversed():R,D=O.reduce((_,I)=>_+U(I),0),u=O.length?D/O.length:0,b=O.reduce((_,I)=>_+(I.usage?.messageCounts?.errors??0),0),x=new Set(t),M=O.filter(_=>x.has(_.key)),E=M.length,T=new Map(O.map(_=>[_.key,_])),N=i.map(_=>T.get(_)).filter(_=>!!_);return r`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">${l("usageSessionsCard")}</div>
        <div class="sessions-card-count">
          ${e.length} ${l("usageShown")}${$!==e.length?` · ${$} ${l("usageTotalSessions")}`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?j(u):se(u)} ${l("usageAvg")}</span>
          <span>${b} ${l("usageErrors").toLowerCase()}</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${c==="all"?"active":""}"
            @click=${()=>g("all")}
          >
            ${l("usageAll")}
          </button>
          <button
            class="toggle-btn ${c==="recent"?"active":""}"
            @click=${()=>g("recent")}
          >
            ${l("usageRecentlyViewed")}
          </button>
        </div>
        <label class="sessions-sort">
          <span>${l("usageSort")}</span>
          <span class="select"><select
            @change=${_=>p(_.target.value)}
          >
            <option value="cost" ?selected=${a==="cost"}>${l("usageCost")}</option>
            <option value="errors" ?selected=${a==="errors"}>${l("usageErrorsCol")}</option>
            <option value="messages" ?selected=${a==="messages"}>${l("usageMessagesCol")}</option>
            <option value="recent" ?selected=${a==="recent"}>${l("usageRecent")}</option>
            <option value="tokens" ?selected=${a==="tokens"}>${l("usageTokensCol")}</option>
          </select></span>
        </label>
        <button
          class="btn small"
          @click=${()=>m(o==="desc"?"asc":"desc")}
          title=${l(o==="desc"?"usageDescending":"usageAscending")}
        >
          ${o==="desc"?"↓":"↑"}
        </button>
        ${E>0?r`
                <button class="btn small sessions-clear-btn" @click=${S}>
                  ${l("usageClearSelection")}
                </button>
              `:k}
      </div>
      ${c==="recent"?N.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">${l("usageNoRecentSessions")}</div>
              `:r`
                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
                  ${N.map(_=>{const I=U(_),H=x.has(_.key),q=C(_),Y=P(_);return r`
                      <div
                        class="session-bar-row ${H?"selected":""}"
                        @click=${X=>d(_.key,X.shiftKey)}
                        title="${_.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${q}</div>
                          ${Y.length>0?r`<div class="session-bar-meta">${Y.join(" · ")}</div>`:k}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${l("usageCopySessionName")}
                            @click=${X=>{X.stopPropagation(),L(_)}}
                          >
                            ${l("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?j(I):se(I)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              `:e.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">${l("usageNoSessionsInRange")}</div>
              `:r`
                <div class="session-bars">
                  ${O.slice(0,50).map(_=>{const I=U(_),H=t.includes(_.key),q=C(_),Y=P(_);return r`
                      <div
                        class="session-bar-row ${H?"selected":""}"
                        @click=${X=>d(_.key,X.shiftKey)}
                        title="${_.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${q}</div>
                          ${Y.length>0?r`<div class="session-bar-meta">${Y.join(" · ")}</div>`:k}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${l("usageCopySessionName")}
                            @click=${X=>{X.stopPropagation(),L(_)}}
                          >
                            ${l("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?j(I):se(I)}</div>
                        </div>
                      </div>
                    `})}
                  ${e.length>50?r`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">${gs(e.length-50)}</div>`:k}
                </div>
              `}
      ${E>1?r`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">${l("usageSelectedCount")} (${E})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${M.map(_=>{const I=U(_),H=C(_),q=P(_);return r`
                      <div
                        class="session-bar-row selected"
                        @click=${Y=>d(_.key,Y.shiftKey)}
                        title="${_.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${H}</div>
                          ${q.length>0?r`<div class="session-bar-meta">${q.join(" · ")}</div>`:k}
                        </div>
                  <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${l("usageCopySessionName")}
                            @click=${Y=>{Y.stopPropagation(),L(_)}}
                          >
                            ${l("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?j(I):se(I)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              </div>
            `:k}
    </div>
  `}function c0(){return k}function d0(e){const t=e.usage;if(!t)return r`
      <div class="muted">No usage data for this session.</div>
    `;const n=i=>i?new Date(i).toLocaleString():"—",s=[];e.channel&&s.push(`channel:${e.channel}`),e.agentId&&s.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&s.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&s.push(`model:${e.model}`);const a=t.toolUsage?.tools.slice(0,6).map(i=>({label:i.name,value:`${i.count}`,sub:l("usageCalls")}))??[],o=t.modelUsage?.slice(0,6).map(i=>({label:i.model??"unknown",value:se(i.totals.totalCost),sub:j(i.totals.totalTokens)}))??[];return r`
    ${s.length>0?r`<div class="usage-badges">${s.map(i=>r`<span class="usage-badge">${i}</span>`)}</div>`:k}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">${l("usageMessages")}</div>
        <div class="session-summary-value">${t.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.user??0} ${l("usageUser").toLowerCase()} · ${t.messageCounts?.assistant??0} ${l("usageAssistant").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${l("usageToolCalls")}</div>
        <div class="session-summary-value">${t.toolUsage?.totalCalls??0}</div>
        <div class="session-summary-meta">${t.toolUsage?.uniqueTools??0} ${l("usageToolsLabel").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${l("usageErrors")}</div>
        <div class="session-summary-value">${t.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.toolResults??0} ${l("usageToolResults")}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${l("usageDuration")}</div>
        <div class="session-summary-value">${mu(t.durationMs)}</div>
        <div class="session-summary-meta">${n(t.firstActivity)} → ${n(t.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${Tt(l("usageTopTools"),a,l("usageNoToolCalls"))}
      ${Tt(l("usageModelMix"),o,l("usageNoModelData"))}
    </div>
  `}function u0(e,t,n,s,a,o,i,c,d,p,m,g,f,$,S,w,C,L,P,U,R,O,D){const u=e.label||e.key,b=u.length>50?u.slice(0,50)+"…":u,x=e.usage;return r`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">${b}</div>
        </div>
        <div class="session-detail-stats">
          ${x?r`
            <span><strong>${j(x.totalTokens)}</strong> ${l("usageTokensUnit")}</span>
            <span><strong>${se(x.totalCost)}</strong></span>
          `:k}
        </div>
        <button
          class="session-close-btn"
          type="button"
          @click=${D}
          title=${l("usageCloseSessionDetails")}
          aria-label=${l("usageCloseSessionDetails")}
        >
          ${z.x}
        </button>
      </div>
      <div class="session-detail-content">
        ${d0(e)}
        <div class="session-detail-row">
          ${p0(t,n,s,a,o,i,c,d,p)}
        </div>
        <div class="session-detail-bottom">
          ${g0(m,g,f,$,S,w,C,L,P,U)}
          ${m0(e.contextWeight,x,R,O)}
        </div>
      </div>
    </div>
  `}function p0(e,t,n,s,a,o,i,c,d){if(t)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${l("usageLoading")}</div>
      </div>
    `;if(!e||e.points.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${l("usageNoTimelineData")}</div>
      </div>
    `;let p=e.points;if(i||c||d&&d.length>0){const T=i?new Date(i+"T00:00:00").getTime():0,N=c?new Date(c+"T23:59:59").getTime():1/0;p=e.points.filter(_=>{if(_.timestamp<T||_.timestamp>N)return!1;if(d&&d.length>0){const I=new Date(_.timestamp),H=`${I.getFullYear()}-${String(I.getMonth()+1).padStart(2,"0")}-${String(I.getDate()).padStart(2,"0")}`;return d.includes(H)}return!0})}if(p.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${l("usageNoDataInRange")}</div>
      </div>
    `;let m=0,g=0,f=0,$=0,S=0,w=0;p=p.map(T=>(m+=T.totalTokens,g+=T.cost,f+=T.output,$+=T.input,S+=T.cacheRead,w+=T.cacheWrite,{...T,cumulativeTokens:m,cumulativeCost:g}));const C=400,L=80,P={top:16,right:10,bottom:20,left:40},U=C-P.left-P.right,R=L-P.top-P.bottom,O=n==="cumulative",D=n==="per-turn"&&a==="by-type",u=f+$+S+w,b=p.map(T=>O?T.cumulativeTokens:D?T.input+T.output+T.cacheRead+T.cacheWrite:T.totalTokens),x=Math.max(...b,1),M=Math.max(2,Math.min(8,U/p.length*.7)),E=Math.max(1,(U-M*p.length)/(p.length-1||1));return r`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 13px;">${l("usageUsageOverTime")}</div>
        <div class="timeseries-controls">
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${O?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              ${l("usagePerTurn")}
            </button>
            <button
              class="toggle-btn ${O?"active":""}"
              @click=${()=>s("cumulative")}
            >
              ${l("usageCumulative")}
            </button>
          </div>
          ${O?k:r`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${a==="total"?"active":""}"
                      @click=${()=>o("total")}
                    >
                      ${l("usageTotal")}
                    </button>
                    <button
                      class="toggle-btn ${a==="by-type"?"active":""}"
                      @click=${()=>o("by-type")}
                    >
                      ${l("usageByType")}
                    </button>
                  </div>
                `}
        </div>
      </div>
      <svg viewBox="0 0 ${C} ${L+15}" class="timeseries-svg" style="width: 100%; height: auto;">
        <!-- Y axis -->
        <line x1="${P.left}" y1="${P.top}" x2="${P.left}" y2="${P.top+R}" stroke="var(--border)" />
        <!-- X axis -->
        <line x1="${P.left}" y1="${P.top+R}" x2="${C-P.right}" y2="${P.top+R}" stroke="var(--border)" />
        <!-- Y axis labels -->
        <text x="${P.left-4}" y="${P.top+4}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">${j(x)}</text>
        <text x="${P.left-4}" y="${P.top+R}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">0</text>
        <!-- X axis labels (first and last) -->
        ${p.length>0?Zn`
          <text x="${P.left}" y="${P.top+R+12}" text-anchor="start" style="font-size: 8px; fill: var(--text-muted)">${new Date(p[0].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
          <text x="${C-P.right}" y="${P.top+R+12}" text-anchor="end" style="font-size: 8px; fill: var(--text-muted)">${new Date(p[p.length-1].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
        `:k}
        <!-- Bars -->
        ${p.map((T,N)=>{const _=b[N],I=P.left+N*(M+E),H=_/x*R,q=P.top+R-H,X=[new Date(T.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${j(_)} ${l("usageTokensUnit")}`];D&&(X.push(`Output ${j(T.output)}`),X.push(`Input ${j(T.input)}`),X.push(`Cache write ${j(T.cacheWrite)}`),X.push(`Cache read ${j(T.cacheRead)}`));const B=X.join(" · ");if(!D)return Zn`<rect x="${I}" y="${q}" width="${M}" height="${H}" class="ts-bar" rx="1" style="cursor: pointer;"><title>${B}</title></rect>`;const Q=[{value:T.output,class:"output"},{value:T.input,class:"input"},{value:T.cacheWrite,class:"cache-write"},{value:T.cacheRead,class:"cache-read"}];let W=P.top+R;return Zn`
            ${Q.map(J=>{if(J.value<=0||_<=0)return k;const he=H*(J.value/_);return W-=he,Zn`<rect x="${I}" y="${W}" width="${M}" height="${he}" class="ts-bar ${J.class}" rx="1"><title>${B}</title></rect>`})}
          `})}
      </svg>
      <div class="timeseries-summary">${p.length} ${l("usageMessagesCount")} · ${j(m)} ${l("usageTokensUnit")} · ${se(g)}</div>
      ${D?r`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px;">${l("usageTokensByType")}</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${fe(f,u).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${fe($,u).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${fe(w,u).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${fe(S,u).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${j(f)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${j($)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${j(w)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${j(S)}
                  </div>
                </div>
                <div class="cost-breakdown-total">${l("usageTotalLabel")}: ${j(u)}</div>
              </div>
            `:k}
    </div>
  `}function m0(e,t,n,s){if(!e)return r`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">${l("usageNoContextData")}</div>
      </div>
    `;const a=St(e.systemPrompt.chars),o=St(e.skills.promptChars),i=St(e.tools.listChars+e.tools.schemaChars),c=St(e.injectedWorkspaceFiles.reduce((U,R)=>U+R.injectedChars,0)),d=a+o+i+c;let p="";if(t&&t.totalTokens>0){const U=t.input+t.cacheRead;U>0&&(p=`~${Math.min(d/U*100,100).toFixed(0)}% of input`)}const m=e.skills.entries.toSorted((U,R)=>R.blockChars-U.blockChars),g=e.tools.entries.toSorted((U,R)=>R.summaryChars+R.schemaChars-(U.summaryChars+U.schemaChars)),f=e.injectedWorkspaceFiles.toSorted((U,R)=>R.injectedChars-U.injectedChars),$=4,S=n,w=S?m:m.slice(0,$),C=S?g:g.slice(0,$),L=S?f:f.slice(0,$),P=m.length>$||g.length>$||f.length>$;return r`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 13px;">${l("usageSystemPromptBreakdown")}</div>
        ${P?r`<button class="context-expand-btn" @click=${s}>
                ${l(S?"usageCollapseAll":"usageExpandAll")}
              </button>`:k}
      </div>
      <p class="context-weight-desc">${p||l("usageBaseContextPerMessage")}</p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${fe(a,d).toFixed(1)}%" title="System: ~${j(a)}"></div>
        <div class="context-segment skills" style="width: ${fe(o,d).toFixed(1)}%" title="Skills: ~${j(o)}"></div>
        <div class="context-segment tools" style="width: ${fe(i,d).toFixed(1)}%" title="Tools: ~${j(i)}"></div>
        <div class="context-segment files" style="width: ${fe(c,d).toFixed(1)}%" title="Files: ~${j(c)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${j(a)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${j(o)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${j(i)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${j(c)}</span>
      </div>
      <div class="context-total">${l("usageTotalLabel")}: ~${j(d)}</div>
      <div class="context-breakdown-grid">
        ${m.length>0?(()=>{const U=m.length-w.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${l("usageSkills")} (${m.length})</div>
                    <div class="context-breakdown-list">
                      ${w.map(R=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${R.name}</span>
                            <span class="muted">~${j(St(R.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${U>0?r`<div class="context-breakdown-more">${gs(U)}</div>`:k}
                  </div>
                `})():k}
        ${g.length>0?(()=>{const U=g.length-C.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${l("usageToolsLabel")} (${g.length})</div>
                    <div class="context-breakdown-list">
                      ${C.map(R=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${R.name}</span>
                            <span class="muted">~${j(St(R.summaryChars+R.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${U>0?r`<div class="context-breakdown-more">${gs(U)}</div>`:k}
                  </div>
                `})():k}
        ${f.length>0?(()=>{const U=f.length-L.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${l("usageFiles")} (${f.length})</div>
                    <div class="context-breakdown-list">
                      ${L.map(R=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${R.name}</span>
                            <span class="muted">~${j(St(R.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${U>0?r`<div class="context-breakdown-more">${gs(U)}</div>`:k}
                  </div>
                `})():k}
      </div>
    </div>
  `}function g0(e,t,n,s,a,o,i,c,d,p){if(t)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">${l("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${l("usageLoading")}</div>
      </div>
    `;if(!e||e.length===0)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">${l("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${l("usageNoMessages")}</div>
      </div>
    `;const m=a.query.trim().toLowerCase(),g=e.map(L=>{const P=F2(L.content),U=P.cleanContent||L.content;return{log:L,toolInfo:P,cleanContent:U}}),f=Array.from(new Set(g.flatMap(L=>L.toolInfo.tools.map(([P])=>P)))).toSorted((L,P)=>L.localeCompare(P)),$=g.filter(L=>!(a.roles.length>0&&!a.roles.includes(L.log.role)||a.hasTools&&L.toolInfo.tools.length===0||a.tools.length>0&&!L.toolInfo.tools.some(([U])=>a.tools.includes(U))||m&&!L.cleanContent.toLowerCase().includes(m))),S=a.roles.length>0||a.tools.length>0||a.hasTools||m?`${$.length} of ${e.length}`:`${e.length}`,w=new Set(a.roles),C=new Set(a.tools);return r`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>${l("usageConversation")} <span style="font-weight: normal; color: var(--text-muted);">(${S} ${l("usageMessagesCount")})</span></span>
        <button class="btn small" @click=${s}>
          ${l(n?"usageCollapseAll":"usageExpandAll")}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <span class="select"><select
          multiple
          size="4"
          @change=${L=>o(Array.from(L.target.selectedOptions).map(P=>P.value))}
        >
          <option value="user" ?selected=${w.has("user")}>${l("usageUser")}</option>
          <option value="assistant" ?selected=${w.has("assistant")}>${l("usageAssistant")}</option>
          <option value="tool" ?selected=${w.has("tool")}>${l("usageTool")}</option>
          <option value="toolResult" ?selected=${w.has("toolResult")}>${l("usageToolResult")}</option>
        </select></span>
        <span class="select"><select
          multiple
          size="4"
          @change=${L=>i(Array.from(L.target.selectedOptions).map(P=>P.value))}
        >
          ${f.map(L=>r`<option value=${L} ?selected=${C.has(L)}>${L}</option>`)}
        </select></span>
        <label class="usage-filters-inline" style="gap: 6px;">
          <span class="checkbox"><input
            type="checkbox"
            .checked=${a.hasTools}
            @change=${L=>c(L.target.checked)}
          /></span>
          ${l("usageHasTools")}
        </label>
        <span class="input"><input
          type="text"
          placeholder=${l("usageSearchConversation")}
          .value=${a.query}
          @input=${L=>d(L.target.value)}
        /></span>
        <button class="btn small" @click=${p}>
          ${l("usageClear")}
        </button>
      </div>
      <div class="session-logs-list">
        ${$.map(L=>{const{log:P,toolInfo:U,cleanContent:R}=L,O=P.role==="user"?"user":"assistant",D=P.role==="user"?l("usageUser"):P.role==="assistant"?l("usageAssistant"):l("usageTool");return r`
          <div class="session-log-entry ${O}">
            <div class="session-log-meta">
              <span class="session-log-role">${D}</span>
              <span>${new Date(P.timestamp).toLocaleString()}</span>
              ${P.tokens?r`<span>${j(P.tokens)}</span>`:k}
            </div>
            <div class="session-log-content">${R}</div>
            ${U.tools.length>0?r`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${U.summary}</summary>
                      <div class="session-log-tools-list">
                        ${U.tools.map(([u,b])=>r`
                            <span class="session-log-tools-pill">${du(u,b)}</span>
                          `)}
                      </div>
                    </details>
                  `:k}
          </div>
        `})}
        ${$.length===0?r`
                <div class="muted" style="padding: 12px">${l("usageNoMessagesMatchFilters")}</div>
              `:k}
      </div>
    </div>
  `}function f0(e){if(e.loading&&!e.totals)return r`
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">${l("usageTokenUsage")}</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: var(--accent-subtle);
                border-radius: 4px;
                font-size: 12px;
                color: var(--accent);
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid var(--accent);
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                ${l("usageLoading")}
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="date"><input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text-regular); font-size: 13px; opacity: 0.6;" /></span>
              <span style="color: var(--text-muted);">to</span>
              <span class="date"><input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text-regular); font-size: 13px; opacity: 0.6;" /></span>
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,a=[...e.sessions].toSorted((B,Q)=>{const W=t?B.usage?.totalTokens??0:B.usage?.totalCost??0;return(t?Q.usage?.totalTokens??0:Q.usage?.totalCost??0)-W}),o=e.selectedDays.length>0?a.filter(B=>{if(B.usage?.activityDates?.length)return B.usage.activityDates.some(J=>e.selectedDays.includes(J));if(!B.updatedAt)return!1;const Q=new Date(B.updatedAt),W=`${Q.getFullYear()}-${String(Q.getMonth()+1).padStart(2,"0")}-${String(Q.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(W)}):a,i=(B,Q)=>{if(Q.length===0)return!0;const W=B.usage,J=W?.firstActivity??B.updatedAt,he=W?.lastActivity??B.updatedAt;if(!J||!he)return!1;const oe=Math.min(J,he),Le=Math.max(J,he);let re=oe;for(;re<=Le;){const ve=new Date(re),Qe=ri(ve,e.timeZone);if(Q.includes(Qe))return!0;const Ke=ci(ve,e.timeZone);re=Math.min(Ke.getTime(),Le)+1}return!1},c=e.selectedHours.length>0?o.filter(B=>i(B,e.selectedHours)):o,d=O2(c,e.query),p=d.sessions,m=d.warnings,g=e0(e.queryDraft,a,e.aggregates),f=li(e.query),$=B=>{const Q=Et(B);return f.filter(W=>Et(W.key??"")===Q).map(W=>W.value).filter(Boolean)},S=B=>{const Q=new Set;for(const W of B)W&&Q.add(W);return Array.from(Q)},w=S(a.map(B=>B.agentId)).slice(0,12),C=S(a.map(B=>B.channel)).slice(0,12),L=S([...a.map(B=>B.modelProvider),...a.map(B=>B.providerOverride),...e.aggregates?.byProvider.map(B=>B.provider)??[]]).slice(0,12),P=S([...a.map(B=>B.model),...e.aggregates?.byModel.map(B=>B.model)??[]]).slice(0,12),U=S(e.aggregates?.tools.tools.map(B=>B.name)??[]).slice(0,12),R=e.selectedSessions.length===1?e.sessions.find(B=>B.key===e.selectedSessions[0])??p.find(B=>B.key===e.selectedSessions[0]):null,O=B=>B.reduce((Q,W)=>(W.usage&&(Q.input+=W.usage.input,Q.output+=W.usage.output,Q.cacheRead+=W.usage.cacheRead,Q.cacheWrite+=W.usage.cacheWrite,Q.totalTokens+=W.usage.totalTokens,Q.totalCost+=W.usage.totalCost,Q.inputCost+=W.usage.inputCost??0,Q.outputCost+=W.usage.outputCost??0,Q.cacheReadCost+=W.usage.cacheReadCost??0,Q.cacheWriteCost+=W.usage.cacheWriteCost??0,Q.missingCostEntries+=W.usage.missingCostEntries??0),Q),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),D=B=>e.costDaily.filter(W=>B.includes(W.date)).reduce((W,J)=>(W.input+=J.input,W.output+=J.output,W.cacheRead+=J.cacheRead,W.cacheWrite+=J.cacheWrite,W.totalTokens+=J.totalTokens,W.totalCost+=J.totalCost,W.inputCost+=J.inputCost??0,W.outputCost+=J.outputCost??0,W.cacheReadCost+=J.cacheReadCost??0,W.cacheWriteCost+=J.cacheWriteCost??0,W),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0});let u,b;const x=a.length;if(e.selectedSessions.length>0){const B=p.filter(Q=>e.selectedSessions.includes(Q.key));u=O(B),b=B.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(u=D(e.selectedDays),b=p.length):e.selectedHours.length>0||n?(u=O(p),b=p.length):(u=e.totals,b=x);const M=e.selectedSessions.length>0?p.filter(B=>e.selectedSessions.includes(B.key)):n||e.selectedHours.length>0?p:e.selectedDays.length>0?o:a,E=J2(M,e.aggregates),T=e.selectedSessions.length>0?(()=>{const B=p.filter(W=>e.selectedSessions.includes(W.key)),Q=new Set;for(const W of B)for(const J of W.usage?.activityDates??[])Q.add(J);return Q.size>0?e.costDaily.filter(W=>Q.has(W.date)):e.costDaily})():e.costDaily,N=Y2(M,u,E),_=!e.loading&&!e.totals&&e.sessions.length===0,I=(u?.missingCostEntries??0)>0||(u?u.totalTokens>0&&u.totalCost===0&&u.input+u.output+u.cacheRead+u.cacheWrite>0:!1),H=[{label:l("usageToday"),days:1},{label:l("usage7d"),days:7},{label:l("usage30d"),days:30}],q=B=>{const Q=new Date,W=new Date;W.setDate(W.getDate()-(B-1)),e.onStartDateChange(Ta(W)),e.onEndDateChange(Ta(Q))},Y=(B,Q,W)=>{if(W.length===0)return k;const J=$(B),he=new Set(J.map(re=>Et(re))),oe=W.length>0&&W.every(re=>he.has(Et(re))),Le=J.length;return r`
      <details
        class="usage-filter-select"
        @toggle=${re=>{const ve=re.currentTarget;if(!ve.open)return;const Qe=Ke=>{Ke.composedPath().includes(ve)||(ve.open=!1,window.removeEventListener("click",Qe,!0))};window.addEventListener("click",Qe,!0)}}
      >
        <summary>
          <span>${Q}</span>
          ${Le>0?r`<span class="usage-filter-badge">${Le}</span>`:r`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn small"
              @click=${re=>{re.preventDefault(),re.stopPropagation(),e.onQueryDraftChange(wr(e.queryDraft,B,W))}}
              ?disabled=${oe}
            >
              Select All
            </button>
            <button
              class="btn small"
              @click=${re=>{re.preventDefault(),re.stopPropagation(),e.onQueryDraftChange(wr(e.queryDraft,B,[]))}}
              ?disabled=${Le===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${W.map(re=>{const ve=he.has(Et(re));return r`
                <label class="usage-filter-option">
                  <span class="checkbox"><input
                    type="checkbox"
                    .checked=${ve}
                    @change=${Qe=>{const Ke=Qe.target,ft=`${B}:${re}`;e.onQueryDraftChange(Ke.checked?n0(e.queryDraft,ft):br(e.queryDraft,ft))}}
                  /></span>
                  <span>${re}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},X=Ta(new Date);return r`
    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?r`
                  <span class="usage-refresh-indicator">Loading</span>
                `:k}
          ${_?r`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:k}
        </div>
        <div class="usage-header-metrics">
          ${u?r`
                <span class="usage-metric-badge">
                  <strong>${j(u.totalTokens)}</strong> ${l("usageTokensUnit")}
                </span>
                <span class="usage-metric-badge">
                  <strong>${se(u.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${b}</strong>
                  session${b!==1?"s":""}
                </span>
              `:k}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${B=>{const Q=B.currentTarget;if(!Q.open)return;const W=J=>{J.composedPath().includes(Q)||(Q.open=!1,window.removeEventListener("click",W,!0))};window.addEventListener("click",W,!0)}}
          >
            <summary class="usage-export-button">${l("usageExport")} ▾</summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>La(`openclaw-usage-sessions-${X}.csv`,Z2(p),"text/csv")}
                  ?disabled=${p.length===0}
                >
                  ${l("usageExportSessionsCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>La(`openclaw-usage-daily-${X}.csv`,X2(T),"text/csv")}
                  ?disabled=${T.length===0}
                >
                  ${l("usageExportDailyCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>La(`openclaw-usage-${X}.json`,JSON.stringify({totals:u,sessions:p,daily:T,aggregates:E},null,2),"application/json")}
                  ?disabled=${p.length===0&&T.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${a0(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${H.map(B=>r`
                <button class="btn small" @click=${()=>q(B.days)}>
                  ${B.label}
                </button>
              `)}
          </div>
          <span class="date"><input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${B=>e.onStartDateChange(B.target.value)}
          /></span>
          <span style="color: var(--text-muted);">to</span>
          <span class="date"><input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${B=>e.onEndDateChange(B.target.value)}
          /></span>
          <span class="select"><select
            title="Time zone"
            .value=${e.timeZone}
            @change=${B=>e.onTimeZoneChange(B.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select></span>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn small"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <span class="input"><input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${B=>e.onQueryDraftChange(B.target.value)}
            @keydown=${B=>{B.key==="Enter"&&(B.preventDefault(),e.onApplyQuery())}}
          /></span>
          <div class="usage-query-actions">
            <button
              class="btn small"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?r`<button class="btn small" @click=${e.onClearQuery}>${l("usageClear")}</button>`:k}
            <span class="usage-query-hint">
              ${n?l("usageQueryHintMatch").replace("{count}",String(p.length)).replace("{total}",String(x)):l("usageQueryHintInRange").replace("{total}",String(x))}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${Y("agent","Agent",w)}
          ${Y("channel","Channel",C)}
          ${Y("provider","Provider",L)}
          ${Y("model","Model",P)}
          ${Y("tool","Tool",U)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${f.length>0?r`
                <div class="usage-query-chips">
                  ${f.map(B=>{const Q=B.raw;return r`
                      <span class="usage-query-chip">
                        ${Q}
                        <button
                          type="button"
                          title="Remove filter"
                          aria-label="Remove filter"
                          @click=${()=>e.onQueryDraftChange(br(e.queryDraft,Q))}
                        >
                          ${z.x}
                        </button>
                      </span>
                    `})}
                </div>
              `:k}
        ${g.length>0?r`
                <div class="usage-query-suggestions">
                  ${g.map(B=>r`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(t0(e.queryDraft,B.value))}
                      >
                        ${B.label}
                      </button>
                    `)}
                </div>
              `:k}
        ${m.length>0?r`
                <div class="callout warning" style="margin-top: 8px;">
                  ${m.join(" · ")}
                </div>
              `:k}
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:k}

      ${e.sessionsLimitReached?r`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:k}
    </section>

    ${l0(u,E,N,I,H2(M,e.timeZone),b,x)}

    ${q2(M,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${o0(T,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${u?i0(u,e.chartMode):k}
        </div>
      </div>
      <div class="usage-grid-right">
        ${r0(p,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,x,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${R?u0(R,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):c0()}
  `}function h0(e){e.mcpAddModalOpen=!0,e.mcpAddName="",e.mcpAddDraft={enabled:!0,command:"npx"},e.mcpAddConnectionType="stdio",e.mcpAddEditMode="form",e.mcpAddRawJson=JSON.stringify({enabled:!0},null,2),e.mcpAddRawError=null}function v0(e){e.mcpAddModalOpen=!1,e.mcpAddName="",e.mcpAddRawError=null}function y0(e,t){e.mcpAddName=t}function b0(e,t){e.mcpAddDraft={...e.mcpAddDraft,...t}}function w0(e,t){e.mcpAddConnectionType=t}function k0(e,t){e.mcpAddRawJson=t;try{const n=JSON.parse(t);e.mcpAddDraft=n,e.mcpAddRawError=null}catch{e.mcpAddRawError="Invalid JSON"}}function $0(e,t){e.mcpAddEditMode=t,t==="raw"&&(e.mcpAddRawJson=JSON.stringify(e.mcpAddDraft,null,2))}async function S0(e){const t=e.mcpAddName?.trim();if(!t)return;const n=t.toLowerCase().replace(/\s+/g,"-");if(e.mcpAddEditMode==="raw")try{e.mcpAddDraft=JSON.parse(e.mcpAddRawJson)}catch{e.mcpAddRawError="Invalid JSON";return}else{const c=e.mcpAddConnectionType,d=e.mcpAddDraft;if(c==="stdio"&&!d.command?.trim()||c==="url"&&!d.url?.trim()||c==="service"&&(!d.service?.trim()||!d.serviceUrl?.trim()))return}!e.configForm&&e.configSnapshot?.config&&(e.configForm=ne(e.configSnapshot.config));const s=ne(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={});const o=e.mcpAddDraft.enabled,i=typeof o=="boolean"?o:!0;a.servers[n]={...e.mcpAddDraft,enabled:i},e.configForm=s,e.configFormDirty=!0,await Se(e,{mcp:s.mcp}),e.mcpAddModalOpen=!1,e.mcpAddName=""}function x0(e){return!e||e.command?"stdio":e.url?"url":e.service&&e.serviceUrl?"service":"stdio"}function ds(e){return!e||typeof e!="object"?!1:typeof e.command=="string"&&e.command.trim()!==""||typeof e.url=="string"&&e.url.trim()!==""||typeof e.service=="string"&&e.service.trim()!==""&&typeof e.serviceUrl=="string"&&e.serviceUrl.trim()!==""}function C0(e,t,n){const s=d=>t[d]??n[d];if(ds(s(e)))return{key:e,entry:s(e)};const a=e.toLowerCase();for(const d of new Set([...Object.keys(t),...Object.keys(n)]))if(d.toLowerCase()===a&&ds(s(d)))return{key:d,entry:s(d)};const o=Object.keys(n);if(o.length===1&&ds(n[o[0]])){const d=o[0];return{key:d,entry:n[d]}}const i=e.toLowerCase(),c=o.filter(d=>d.toLowerCase().includes(i)||i.includes(d.toLowerCase()));if(c.length===1&&ds(n[c[0]])){const d=c[0];return{key:d,entry:n[d]}}return{key:e,entry:s(e)}}function M0(e,t,n){if(e.mcpRawError=null,!t){e.mcpSelectedKey=null;return}!e.configForm&&e.configSnapshot?.config&&(e.configForm=ne(e.configSnapshot.config));const s=e.configSnapshot?.config?.mcp?.servers??{},a=e.configForm?.mcp?.servers??{},{key:o,entry:i}=C0(t,a,s);if(e.mcpSelectedKey=o,e.configForm&&s[o]!==void 0){const d=e.configForm;d.mcp||(d.mcp={servers:{}}),d.mcp.servers||(d.mcp.servers={});const p=s[o];d.mcp.servers[o],d.mcp.servers[o]=ne(p)}const c=e.configForm?.mcp?.servers?.[o]??s[o]??i;e.mcpRawJson=c?JSON.stringify(c,null,2):"{}",e.mcpEditConnectionType=x0(c)}function A0(e,t){e.mcpEditConnectionType=t}function E0(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={}),a.servers[t]||(a.servers[t]={}),a.servers[t]={...a.servers[t],enabled:n},e.configForm=s,e.configFormDirty=!0,Se(e,{mcp:s.mcp})}function T0(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={});const o=a.servers[t]??{};a.servers[t]={...o,...n},e.configForm=s,e.configFormDirty=!0,e.mcpFormDirty=!0}function L0(e,t,n){e.mcpRawJson=n;try{const s=JSON.parse(n),a=ne(e.configForm??e.configSnapshot?.config??{});a.mcp||(a.mcp={servers:{}});const o=a.mcp;o.servers||(o.servers={}),o.servers[t]=s,e.configForm=a,e.configFormDirty=!0,e.mcpRawError=null}catch{e.mcpRawError="Invalid JSON"}}function _0(e){if(!e.mcpSelectedKey)return;if(e.mcpEditMode==="raw")try{JSON.parse(e.mcpRawJson)}catch{e.mcpRawError="Invalid JSON";return}const t={mcp:{servers:e.configForm?.mcp?e.configForm.mcp.servers:{}}};Se(e,t),e.mcpFormDirty=!1,e.mcpSelectedKey=null}function P0(e){e.mcpSelectedKey=null,e.mcpRawError=null,e.mcpFormDirty&&ee(e)}async function I0(e,t){const n=(t??"").trim();if(n){if(e.client&&e.connected){let s=e.configSnapshot?.hash;if(s||(await ee(e),s=e.configSnapshot?.hash),!s){e.lastError="Config hash missing; reload and retry.";return}e.configSaving=!0,e.lastError=null;try{await e.client.request("mcp.servers.delete",{serverKey:n,baseHash:s}),e.configFormDirty=!1,await ee(e)}catch(a){e.lastError=String(a)}finally{e.configSaving=!1}}else{const a=(e.configForm??e.configSnapshot?.config)?.mcp;a?.servers&&n in a.servers&&await Se(e,{mcp:{servers:{[n]:null}}})}(e.mcpSelectedKey===n||e.mcpSelectedKey===t)&&(e.mcpSelectedKey=null)}}function cn(e,t){e.modelsSelectedProvider=t,e.modelLibrarySelectedProvider=t}function $r(e){ee(e)}function Sr(e){e.modelsAddProviderModalOpen=!0,e.modelsAddProviderForm={providerId:"",displayName:"",baseUrl:"",apiKey:"",apiKeyPrefix:""}}function xr(e){e.modelsAddProviderModalOpen=!1}function Cr(e,t){e.modelsAddProviderForm={...e.modelsAddProviderForm,...t}}function Mr(e){const{providerId:t,displayName:n,baseUrl:s,apiKey:a,apiKeyPrefix:o}=e.modelsAddProviderForm;if(!t.trim()||!n.trim())return;const i=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9_-]/g,"");if(!i)return;!e.configForm&&e.configSnapshot?.config&&(e.configForm=ne(e.configSnapshot.config));const c=ne(e.configForm??e.configSnapshot?.config??{});c.models||(c.models={mode:"merge",providers:{}});const d=c.models;if(d.providers||(d.providers={}),d.providers[i]){e.modelsAddProviderModalOpen=!1,cn(e,i);return}d.providers[i]={displayName:n.trim(),baseUrl:s.trim()||void 0,apiKey:a.trim()||void 0,apiKeyPrefix:o.trim()||void 0,api:"openai-completions"},e.configForm=c,e.configFormDirty=!0,e.modelsFormDirty=!0,e.modelsAddProviderModalOpen=!1,cn(e,i)}function Ar(e,t){cn(e,t)}function Er(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{});s.models||(s.models={mode:"merge",providers:{}});const a=s.models;a.providers||(a.providers={});const o=a.providers[t]??{};a.providers[t]={...o,...n},e.configForm=s,e.configFormDirty=!0,e.modelsFormDirty=!0}function Tr(e){const t=e.trim();if(!t)return;const n=Number(t);if(!(!Number.isFinite(n)||n<=0||!Number.isInteger(n)))return n}function Lr(e,t){e.modelsAddModelModalOpen=!0,e.modelsAddModelForm={modelId:"",modelName:"",contextWindow:"",maxTokens:""}}function _r(e){e.modelsAddModelModalOpen=!1}function Pr(e,t){e.modelsAddModelForm={...e.modelsAddModelForm,...t}}function Ir(e,t){const{modelId:n,modelName:s,contextWindow:a,maxTokens:o}=e.modelsAddModelForm;if(!n.trim()||!s.trim())return;const i=ne(e.configForm??e.configSnapshot?.config??{});i.models||(i.models={mode:"merge",providers:{}});const c=i.models;c.providers||(c.providers={});const d=c.providers[t]??{},p=d.models??[];if(p.some($=>$.id===n.trim())){e.modelsAddModelModalOpen=!1;return}const m=Tr(a),g=Tr(o),f={id:n.trim(),name:s.trim()};m!==void 0&&(f.contextWindow=m),g!==void 0&&(f.maxTokens=g),c.providers[t]={...d,models:[...p,f]},e.configForm=i,e.configFormDirty=!0,e.modelsFormDirty=!0,e.modelsAddModelModalOpen=!1}function Dr(e,t,n,s){const a=ne(e.configForm??e.configSnapshot?.config??{});a.models||(a.models={mode:"merge",providers:{}});const o=a.models;o.providers||(o.providers={});const i=o.providers[t];if(!i?.models?.length)return;const c=i.models.map(d=>{if(d.id!==n)return d;const p={...d};return"contextWindow"in s&&(s.contextWindow==null?delete p.contextWindow:p.contextWindow=s.contextWindow),"maxTokens"in s&&(s.maxTokens==null?delete p.maxTokens:p.maxTokens=s.maxTokens),p});o.providers[t]={...i,models:c},e.configForm=a,e.configFormDirty=!0,e.modelsFormDirty=!0}function Rr(e,t,n,s){const a=ne(e.configForm??e.configSnapshot?.config??{});a.env||(a.env={vars:{},modelEnv:{}});const o=a.env;o.modelEnv||(o.modelEnv={});const i=`${t}/${n}`;o.modelEnv[i]={...s},e.configForm=a,e.configFormDirty=!0,e.modelsFormDirty=!0}function Nr(e,t,n){const s=ne(e.configForm??e.configSnapshot?.config??{}),a=s.models?.providers;if(!a)return;const o=a[t];if(!o?.models)return;const i=`${t}/${n}`;s.agents?.defaults?.model?.primary===i&&s.agents?.defaults?.model&&delete s.agents.defaults.model.primary,a[t]={...o,models:o.models.filter(p=>p.id!==n)};const d=`${t}/${n}`;if(s.env?.modelEnv?.[d]){const p={...s.env.modelEnv};delete p[d],s.env.modelEnv=p}e.configForm=s,e.configFormDirty=!0,e.modelsFormDirty=!0}function D0(e){const t={};for(const n of Object.values(e)){const s=n.envVars??{};for(const[a,o]of Object.entries(s))if(!(!a||a==="__new__")){if(t[a]!==void 0&&t[a]!==o)return{__conflict:a};t[a]=o}}return t}function R0(e){const t=e.envVars??{},n={};for(const[s,a]of Object.entries(t))s&&s!=="__new__"&&(n[s]=a);return{...e,envVars:Object.keys(n).length?n:void 0}}function Ur(e){e.modelsSaveError=null;const t=e.configForm?.models?.providers??{},n=D0(t);if(n.__conflict){e.modelsSaveError=n.__conflict;return}const a={...e.configForm?.env?.vars??{},...n},o={};for(const[$,S]of Object.entries(t)){let w=R0(S);const C=Ce.find(L=>L.id===$);if(C&&((!w.baseUrl||w.baseUrl.trim()==="")&&(w={...w,baseUrl:C.baseUrl}),!w.api||w.api.trim()==="")){const L=C.defaultApi??"openai-completions";w={...w,api:L}}o[$]=w}const c={models:{...e.configForm?.models&&typeof e.configForm.models=="object"&&!Array.isArray(e.configForm.models)?e.configForm.models:{},providers:o}};e.configForm?.agents&&(c.agents=e.configForm.agents);const p=e.configForm?.env?.modelEnv??{},g=e.configFormOriginal?.env?.modelEnv??{},f={};for(const[$,S]of Object.entries(p)){if(!S||typeof S!="object")continue;const w={};for(const[C,L]of Object.entries(S))C&&C!=="__new__"&&(w[C]=L);Object.keys(w).length>0?f[$]=w:f[$]=null}for(const $ of Object.keys(g))$ in p||(f[$]=null);c.env={vars:a,modelEnv:f},Se(e,c),e.modelsFormDirty=!1,cn(e,null)}function Or(e){cn(e,null),e.modelsSaveError=null,e.modelsFormDirty&&(e.modelsFormDirty=!1,e.configFormDirty=!1,ee(e))}function Fr(e,t){e.modelsUseModelModalOpen=!0,e.modelsUseModelModalProvider=t}function Br(e){e.modelsUseModelModalOpen=!1,e.modelsUseModelModalProvider=null}function Wr(e,t,n){const s=`${t}/${n}`,a=ne(e.configForm??e.configSnapshot?.config??{});Is(a,["agents","defaults","model","primary"],s),e.configForm=a,e.configFormDirty=!0,Se(e,{agents:a.agents}),e.modelsUseModelModalOpen=!1,e.modelsUseModelModalProvider=null}function Hr(e,t){const s=e.configForm?.agents?.defaults?.model,a=s&&typeof s=="object"&&!Array.isArray(s)?s.primary:void 0,o=typeof a=="string"?a:null;if(!o||!o.startsWith(t+"/"))return;const i={agents:{defaults:{model:{primary:null}}}},c=ne(e.configForm??e.configSnapshot?.config??{}),m=c.agents?.defaults?.model;m&&typeof m=="object"&&!Array.isArray(m)&&delete m.primary,e.configForm=c,e.configFormDirty=!0,Se(e,i)}async function zr(e){const t=e.modelsSelectedProvider;if(!t||!e.client||!e.connected||!await Te(l("modelsProviderDeleteConfirm")))return;const s=e.configForm??e.configSnapshot?.config??{},o=(s.models?.providers??{})[t]?.models??[],i=s.env?.modelEnv??{},c=s.agents?.defaults?.model?.primary,d={[t]:null},p={};for(const g of o)p[`${t}/${g.id}`]=null;for(const g of Object.keys(i))g.startsWith(t+"/")&&(p[g]=null);const m={models:{providers:d}};Object.keys(p).length>0&&(m.env={modelEnv:p}),c&&c.startsWith(t+"/")&&(m.agents={defaults:{model:{primary:null}}}),await Se(e,m),!e.lastError&&cn(e,null)}function gu(e){const t=(e??"").toLowerCase(),n="agent:main:employee:",s="agent:main:employee-";if(t.startsWith(n)){const a=e.slice(n.length),o=a.indexOf(":");return o>=0?a.slice(0,o):a}return t.startsWith(s)&&e.slice(s.length).split(/[:/-]/)[0]||null}function N0(e){return(e??"").trim().toLowerCase()||"default"}function U0(e,t){const n=`agent:main:employee:${t}`;for(const s of e)if((s.key??"").trim().toLowerCase()===n)return s.key;for(const s of e){const a=gu(s.key);if(a&&a.toLowerCase()===t)return s.key}return null}async function Qr(e,t){const n=N0(t);await Ie(e,{activeMinutes:10080,limit:5e3,includeLastMessage:!0});const s=e.sessionsResult?.sessions??[],a=U0(s,n),o=a??`agent:main:employee:${n}`,i=!a;if(i){const c=e.digitalEmployees.find(p=>(p.id??"").trim().toLowerCase()===n),d=c?.name&&String(c.name).trim()?String(c.name).trim():`数字员工 · ${n}`;await zm(e,{key:o,label:d})}else await Ie(e,{activeMinutes:10080,limit:5e3,includeLastMessage:!0});e.sessionKey=o,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:o,lastActiveSessionKey:o}),await e.loadAssistantIdentity(),await it(e),await _t(e),e.setTab("message"),i&&e.handleSendChat("当前已开启数字员工会话。请以你配置的人设（如有）向用户打招呼，保持你的语气、风格和情绪。用 1～3 句话问候并询问用户想做什么。",{refreshSessions:!0})}function O0(e,t,n,s){const a=[t,n,s],o=c=>{if(c!=null){if(typeof c=="string"){const d=c.trim();d&&a.push(d);return}(typeof c=="number"||typeof c=="boolean")&&a.push(String(c))}};o(e.label),o(e.displayName),o(e.sessionId),o(e.derivedTitle),o(e.kind),o(e.channel),o(e.subject),o(e.groupChannel),o(e.space),o(e.chatType),o(e.lastChannel),o(e.lastTo),o(e.lastMessagePreview);const i=e.origin;if(i&&typeof i=="object"&&!Array.isArray(i))for(const c of Object.values(i))o(c);return a.join("").toLowerCase()}function F0(e,t){const n=t.trim().toLowerCase();return n?n.split(/\s+/).filter(Boolean).every(a=>e.includes(a)):!0}const Kr=132,qr=6;function B0(e){let n=e.bottom+qr;return n+Kr>window.innerHeight-8&&(n=Math.max(8,e.top-Kr-qr)),{top:n,right:window.innerWidth-e.right}}function W0(e,t){const n=e.sessionOverflow;if(!n)return k;const s=n.key,a=s==="agent.main.main",o=()=>{e.sessionOverflow=null},i=()=>{const c=Ft("message",t),d=new URL(c,window.location.origin);return d.searchParams.set("session",s),d.toString()};return r`
    <div class="session-overflow-backdrop" @click=${o}></div>
    <div
      class="session-overflow-flyout"
      style="top: ${n.top}px; right: ${n.right}px;"
      role="menu"
      aria-label="会话操作"
      @click=${c=>c.stopPropagation()}
    >
      <button
        type="button"
        role="menuitem"
        class="session-item__overflow-item"
        @click=${()=>{o(),e.sessionEditingKey=s}}
      >
        重命名
      </button>
      <button
        type="button"
        role="menuitem"
        class="session-item__overflow-item"
        @click=${async()=>{o();const c=i();try{await navigator.clipboard.writeText(c),await vs("会话链接已复制到剪贴板")}catch{await ac("无法自动复制，请手动复制链接：",c)}}}
      >
        分享链接
      </button>
      <button
        type="button"
        role="menuitem"
        class="session-item__overflow-item"
        ?disabled=${a}
        @click=${async()=>{if(o(),a)return;const c=e.sessionKey===s;if(await Rc(e,s),c){const d=e.sessionsResult?.sessions?.[0]?.key??"agent.main.main";e.sessionKey=d,e.chatMessage="",e.chatAttachments=[],e.chatModelRef=null,e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.applySettings({...e.settings,sessionKey:d,lastActiveSessionKey:d}),await Promise.all([it(e),_t(e)])}}}
      >
        删除
      </button>
    </div>
  `}let _a=null;const Vr=e=>{_a&&clearTimeout(_a),_a=window.setTimeout(()=>{dd(e)},400)},H0=/^data:/i,z0=/^https?:\/\//i;function Pa(e){if(!e?.agents)return null;const n=e.agents.defaults;if(!n?.model)return null;const s=n.model;if(typeof s=="string"&&s)return s;if(s&&typeof s=="object"&&!Array.isArray(s)){const a=s.primary;return typeof a=="string"&&a?a:null}return null}function Q0(e){const t=e.agentsList?.agents??[],s=uc(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",o=t.find(c=>c.id===s)?.identity,i=o?.avatarUrl??o?.avatar;if(i)return H0.test(i)||z0.test(i)?i:o?.avatarUrl}function K0(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,a=e.connected?null:"Disconnected from gateway.",o=e.tab==="chat"||e.tab==="message",i=o&&(e.settings.chatFocusMode||e.onboarding),c=e.onboarding?!1:e.settings.chatShowThinking,d=Q0(e),p=e.chatAvatarUrl??d??null,m=e.configForm??e.configSnapshot?.config,g=e.configSnapshot?.config?.models?.providers??{},f=e.configForm?.env?.modelEnv??{},$=Pa(e.configSnapshot?.config),S=Hn(e.basePath??""),w=e.tab==="scheduledTasks"||e.tab==="cronHistory"||e.tab==="cron",C=e.tab==="message",L=e.tab==="employeeMarket"||e.tab==="skillLibrary"||e.tab==="toolLibrary"||e.tab==="modelLibrary"||e.tab==="tutorials",P=e.tab==="config"||e.tab==="envVars"||e.tab==="debug"||e.tab==="logs"||e.tab==="models"||e.tab==="overview"||e.tab==="channels"||e.tab==="sessions"||e.tab==="usage"||e.tab==="sandbox"||e.tab==="llmTrace"||e.tab==="aboutUs",R=(C||w||P)&&e.settings.navCollapsed,O=r`
    <div class="nav__footer">
      <button
        class="nav__toggle"
        type="button"
        title=${e.settings.navCollapsed?"展开侧栏":"收起侧栏"}
        aria-label=${e.settings.navCollapsed?"展开侧栏":"收起侧栏"}
        aria-expanded=${String(!e.settings.navCollapsed)}
        @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
      >
        <span
          class="nav__toggle-icon ${e.settings.navCollapsed?"nav__toggle-icon--expand":"nav__toggle-icon--collapse"}"
          aria-hidden="true"
        >
          ${z.menu}
        </span>
      </button>
    </div>
  `,D=["shell",o?"shell--chat":"",L?"shell--catalog":"",e.tab==="tutorials"?"shell--tutorials":"",i?"shell--chat-focus":"",R?"shell--nav-collapsed":"",e.onboarding?"shell--onboarding":"",e.isWindowsDesktop?"shell--windows-desktop":"",e.isWindowMaximised?"shell--window-maximised":""].filter(Boolean).join(" ");return r`
    <div class="${D}">
      <header class="topbar">
        ${e.approvalBannerVisible?r`
                <div class="approval-banner" role="status">
                  <span class="approval-banner__icon" aria-hidden="true">${z.zap}</span>
                  <span class="approval-banner__text">
                    有
                    ${e.approvalBannerPendingCount}
                    条敏感命令待人工审批
                  </span>
                  <button
                    type="button"
                    class="btn btn--sm approval-banner__action"
                    @click=${()=>e.setTab("sandbox")}
                  >
                    去处理
                  </button>
                  <button
                    type="button"
                    class="btn btn--icon approval-banner__close"
                    aria-label="关闭提示"
                    title="关闭（仍有新待审批时会再次提示）"
                    @click=${()=>e.dismissApprovalBanner()}
                  >
                    ${z.x}
                  </button>
                </div>
              `:k}
        <div class="topbar__main" @dblclick=${u=>e.handleTopbarDoubleClick(u)}>
        <div class="topbar-left">
          <div class="brand">
            <div class="brand-logo">
              <img
                src=${S?`${S}/logo_h.png`:"/logo_h.png"}
                alt="OpenOcta"
              />
            </div>
          </div>
          <span class="topbar-version">${e.configSchemaVersion??"---"}</span>
        </div>
        <nav class="top-tabs" aria-label="Primary navigation">
          ${[{tab:"message",label:"消息"},{tab:"scheduledTasks",label:"定时任务"},{tab:"employeeMarket",label:"员工市场"},{tab:"skillLibrary",label:"技能库"},{tab:"toolLibrary",label:"工具库"},{tab:"modelLibrary",label:"模型"},{tab:"tutorials",label:"教程"},{tab:"config",label:"配置"}].map(u=>{const b=u.tab,x=b==="scheduledTasks"?w:b==="config"?P:!!(b&&e.tab===b&&!u.href),M=b?zc(b,x):"globe",E=r`<span class="nav-item__icon" aria-hidden="true">${z[M]}</span>`;if(u.href){const T=String(u.href);return r`
                <button
                  type="button"
                  class="top-tab top-tab--link topbar__no-drag"
                  @click=${()=>{Aa(T,{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
                >
                  ${E}
                  <span class="top-tab__label">${u.label}</span>
                </button>
              `}return r`
              <button
                class="top-tab topbar__no-drag ${x?"top-tab--active":""}"
                @click=${()=>e.setTab(b==="config"?"overview":b)}
                type="button"
              >
                ${E}
                <span class="top-tab__label">${u.label}</span>
              </button>
            `})}
        </nav>
        <div class="topbar-status">
          <div class="pill pill--link topbar__no-drag">
            <button
              type="button"
              title="打开 GitHub 仓库"
              class="topbar-link topbar__no-drag"
              @click=${()=>{Aa("https://github.com/openocta/openocta.git",{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
            >
              <span class="topbar-link__icon" aria-hidden="true">${z.github}</span>
              <span class="topbar-link__label">GitHub</span>
            </button>
          </div>
        </div>
        ${e.isWindowsDesktop?r`
                <div class="window-controls topbar__no-drag" aria-label="窗口控制">
                  <button
                    type="button"
                    class="window-control"
                    aria-label="最小化窗口"
                    title="最小化"
                    @click=${()=>e.handleWindowMinimise()}
                  >
                    ${z.windowMinimise}
                  </button>
                  <button
                    type="button"
                    class="window-control"
                    aria-label=${e.isWindowMaximised?"还原窗口":"最大化窗口"}
                    title=${e.isWindowMaximised?"还原":"最大化"}
                    @click=${()=>e.handleWindowToggleMaximise()}
                  >
                    ${e.isWindowMaximised?z.windowRestore:z.windowMaximise}
                  </button>
                  <button
                    type="button"
                    class="window-control window-control--close"
                    aria-label="关闭窗口"
                    title="关闭"
                    @click=${()=>e.handleWindowClose()}
                  >
                    ${z.windowClose}
                  </button>
                </div>
              `:k}
        </div>
      </header>
      ${e.tab==="tutorials"?k:r`<aside
            class="nav ${L?"nav--catalog":""} ${C?"nav--massage":""} ${w||P?"nav--grouped":""} ${R?"nav--collapsed":""}"
            @scroll=${()=>{e.sessionOverflow&&(e.sessionOverflow=null)}}
          >
        ${C?r`
                <div class="session-sidebar">
                  <div class="session-search">
                    <span class="input">
                      <input
                        class="session-search__input"
                        type="search"
                        autocomplete="off"
                        spellcheck="false"
                        placeholder="搜索名称、标签或预览…"
                        aria-label="搜索会话"
                        .value=${e.sessionSidebarQuery}
                        @input=${u=>{e.sessionSidebarQuery=u.target.value}}
                      />
                    </span>
                    <span class="session-search__icon" aria-hidden="true">${z.search}</span>
                  </div>
                  <button
                    class="session-new btn primary"
                    type="button"
                    @click=${async()=>{const u=await Qm(e);u?.key&&(e.sessionKey=u.key,e.chatMessage="",e.chatAttachments=[],e.chatModelRef=null,e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:u.key,lastActiveSessionKey:u.key}),e.loadAssistantIdentity(),await Promise.all([it(e),_t(e)]))}}
                  >
                    <span class="session-new__icon" aria-hidden="true">${z.plus}</span>
                    <span>新消息</span>
                  </button>

                  <div class="session-list">
                    ${(()=>{const u=e.sessionSidebarQuery,b=(e.sessionsResult?.sessions??[]).map(M=>{const E=M,T=E.key??E.sessionId??"",N=T.toLowerCase().startsWith("custom:"),_=N?null:gu(T),I=_?e.digitalEmployees?.find(W=>W.id===_):null,H=E.origin,q=I?.name||H&&(H.label||H.from||H.to)||E.label||E.displayName||E.sessionId||T||"会话",Y=E.lastMessagePreview?.trim()||"",X=O0(E,T,q,Y),B=typeof E.kind=="string"?E.kind:"",Q=typeof E.label=="string"?E.label:"";return{key:T,isCustom:N,emp:I,displayName:q,subtitle:Y,haystack:X,kind:B,labelDraft:Q}});return(u.trim()?b.filter(M=>F0(M.haystack,u)):b).map(({key:M,isCustom:E,emp:T,displayName:N,subtitle:_,kind:I,labelDraft:H})=>{const q=M&&e.sessionKey===M,Y=E,X=e.sessionEditingKey===M,B=I==="global",Q=async W=>{if(!M){e.sessionEditingKey=null;return}await tl(e,M,{label:W.trim()||null}),e.sessionEditingKey=null};return r`
                          <div
                            class="session-item ${q?"session-item--active":""} ${Y?"session-item--editable":""}"
                            role="button"
                            tabindex="0"
                            @click=${async W=>{const J=W.target;J.closest(".session-item__overflow")||J.closest(".session-item__edit")||J.closest("input")||(e.sessionOverflow=null,M&&(e.sessionKey=M,e.chatMessage="",e.chatAttachments=[],e.chatModelRef=null,e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:M,lastActiveSessionKey:M}),Va(e,M),await Promise.all([it(e),_t(e)])))}}
                            @dblclick=${W=>{Y&&(W.stopPropagation(),e.sessionEditingKey=M)}}
                            @keydown=${W=>{W.key==="Enter"&&!X&&(W.preventDefault(),W.currentTarget.click())}}
                          >
                            <span class="session-item__icon" aria-hidden="true">
                              ${T?r`<span class="session-item__icon-emp">${T.name?.slice(0,1)||"?"}</span>`:r`<span class="session-item__icon-default">${z.chatBubble}</span>`}
                            </span>
                            <div class="session-item__body">
                              ${X?r`
                                    <span class="input"><input
                                      class="session-item__input"
                                      type="text"
                                      .value=${H}
                                      @blur=${W=>Q(W.target.value)}
                                      @keydown=${W=>{W.key==="Enter"&&(W.preventDefault(),Q(W.target.value)),W.key==="Escape"&&(e.sessionEditingKey=null)}}
                                      @click=${W=>W.stopPropagation()}
                                    /></span>
                                  `:r`<span class="session-item__text">${N}</span>`}
                              ${!X&&_?r`<span class="session-item__sub muted">${_}</span>`:k}
                            </div>
                            ${B?k:r`
                                    <div class="session-item__overflow">
                                      <button
                                        type="button"
                                        class="btn small session-item__overflow-btn"
                                        aria-label="会话操作"
                                        aria-haspopup="menu"
                                        aria-expanded=${e.sessionOverflow?.key===M?"true":"false"}
                                        @click=${W=>{W.stopPropagation();const he=W.currentTarget.getBoundingClientRect(),oe=B0(he);e.sessionOverflow?.key===M?e.sessionOverflow=null:e.sessionOverflow={key:M,...oe}}}
                                      >
                                        ${z.moreHorizontal}
                                      </button>
                                    </div>
                                  `}
                          </div>
                        `})})()}
                  </div>
                </div>
                <div class="nav--massage__footer">
                  <button
                    class="session-sidebar__toggle"
                    type="button"
                    title=${e.settings.navCollapsed?"展开侧栏":"收起侧栏"}
                    aria-label=${e.settings.navCollapsed?"展开侧栏":"收起侧栏"}
                    aria-expanded=${String(!e.settings.navCollapsed)}
                    @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
                  >
                    <span
                      class="session-sidebar__toggle-icon ${e.settings.navCollapsed?"session-sidebar__toggle-icon--expand":"session-sidebar__toggle-icon--collapse"}"
                      aria-hidden="true"
                    >
                      ${z.menu}
                    </span>
                  </button>
                </div>
              `:w?r`
                  <div class="nav-group-list">
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">定时任务</span>
                      </button>
                      <div class="nav-group__items">
                        ${_e(e,"scheduledTasks")}
                        ${_e(e,"cronHistory")}
                      </div>
                    </div>
                  </div>
                  ${O}
                `:P?r`
                    <div class="nav-group-list">
                      <div class="nav-group">
                        <button class="nav-label nav-label--static" type="button">
                          <span class="nav-label__text">控制</span>
                        </button>
                        <div class="nav-group__items">
                          ${_e(e,"overview")}
                          ${_e(e,"channels")}
                          ${_e(e,"sessions")}
                          ${_e(e,"usage")}
                        </div>
                      </div>
                      <div class="nav-group">
                        <button class="nav-label nav-label--static" type="button">
                          <span class="nav-label__text">Agent</span>
                        </button>
                        <div class="nav-group__items">
                          ${_e(e,"sandbox")}
                          ${_e(e,"llmTrace")}
                        </div>
                      </div>
                      <div class="nav-group">
                        <button class="nav-label nav-label--static" type="button">
                          <span class="nav-label__text">配置</span>
                        </button>
                        <div class="nav-group__items">
                          ${_e(e,"config")}
                          ${_e(e,"envVars")}
                          ${_e(e,"logs")}
                        </div>
                      </div>
                      <div class="nav-group">
                        <button class="nav-label nav-label--static" type="button">
                          <span class="nav-label__text">资源</span>
                        </button>
                        <div class="nav-group__items">
                          <button
                            type="button"
                            class="nav-item"
                            title="打开在线文档"
                            @click=${()=>{Aa("https://databuff.yuque.com/org-wiki-databuff-spr8e6/lqn7on",{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
                          >
                            <span class="nav-item__icon" aria-hidden="true">${z.documentation}</span>
                            <span class="nav-item__text">在线文档</span>
                          </button>
                          ${_e(e,"aboutUs")}
                        </div>
                      </div>
                    </div>
                    ${O}
                  `:e.tab==="employeeMarket"?(()=>{const{orderedCategories:u,counts:b}=Rb(e.employeeMarketItems,e.employeeMarketQuery),x=(e.employeeMarketCategory??"").trim()||"__all__";return r`
                      <div class="nav-group">
                        <div class="nav-group__items">
                          <div class="emp-categories">
                          ${u.map(M=>{const E=M==="__all__"?"全部":M,T=x===M,N=b.get(M)??0;return r`
                              <button
                                class="emp-cat ${T?"active":""}"
                                type="button"
                                ?disabled=${e.employeeMarketLoading}
                                @click=${()=>e.employeeMarketCategory=M}
                              >
                                <span class="emp-cat__name">${E}</span>
                                <span class="emp-cat__count">${N}</span>
                              </button>
                            `})}
                          </div>
                        </div>
                      </div>
                    `})():e.tab==="skillLibrary"?(()=>{const{orderedCategories:u,counts:b}=P1(e.skillLibraryItems,e.skillLibraryQuery,e.skillLibraryStatus??""),x=(e.skillLibraryCategory??"").trim()||"__all__";return r`
                        <div class="nav-group">
                          <div class="nav-group__items">
                            <div class="emp-categories">
                            ${u.map(M=>{const E=M==="__all__"?"全部":M,T=x===M,N=b.get(M)??0;return r`
                                <button
                                  class="emp-cat ${T?"active":""}"
                                  type="button"
                                  ?disabled=${e.skillLibraryLoading}
                                  @click=${()=>e.skillLibraryCategory=M}
                                >
                                  <span class="emp-cat__name">${E}</span>
                                  <span class="emp-cat__count">${N}</span>
                                </button>
                              `})}
                            </div>
                          </div>
                        </div>
                      `})():e.tab==="toolLibrary"?(()=>{const{orderedCategories:u,counts:b}=K1(e.toolLibraryItems,e.toolLibraryQuery),x=(e.toolLibraryCategory??"").trim()||"__all__";return r`
                          <div class="nav-group">
                            <div class="nav-group__items">
                              <div class="emp-categories">
                              ${u.map(M=>{const E=M==="__all__"?"全部":M,T=x===M,N=b.get(M)??0;return r`
                                  <button
                                    class="emp-cat ${T?"active":""}"
                                    type="button"
                                    ?disabled=${e.toolLibraryLoading}
                                    @click=${()=>e.toolLibraryCategory=M}
                                  >
                                    <span class="emp-cat__name">${E}</span>
                                    <span class="emp-cat__count">${N}</span>
                                  </button>
                                `})}
                              </div>
                            </div>
                          </div>
                        `})():e.tab==="modelLibrary"?(()=>{const{orderedCategories:u,counts:b}=T2(g,e.modelsProviderSearchQuery),x=e.modelLibraryCategory??"__all__";return r`
                            <div class="nav-group">
                              <div class="nav-group__items">
                                <div class="emp-categories">
                                  ${u.map(M=>{const E=M==="__all__"?"全部":M==="public"?"公有模型":"本地模型",T=x===M,N=b.get(M)??0;return r`
                                      <button
                                        class="emp-cat ${T?"active":""}"
                                        type="button"
                                        ?disabled=${e.configLoading}
                                        @click=${()=>e.modelLibraryCategory=M}
                                      >
                                        <span class="emp-cat__name">${E}</span>
                                        <span class="emp-cat__count">${N}</span>
                                      </button>
                                    `})}
                                </div>
                              </div>
                            </div>
                          `})():e.tab==="tutorials"?r`<div class="nav-empty"></div>`:r`<div class="nav-empty"></div>`}
      </aside>`}
      <main class="content ${o?"content--chat":""} ${L?"content--catalog":""} ${e.tab==="tutorials"?"content--tutorials":""} ${e.tab==="llmTrace"&&e.llmTraceViewingSessionId!=null?"content--llm-trace-detail":""}">
        ${L||C?k:r`
              <section class="content-header">
                <div>
                  <div class="page-title">${qa(e.tab)}</div>
                  ${e.tab==="cron"||e.tab==="scheduledTasks"?r`<div class="page-summary">网关中所有已调度任务</div>`:e.tab==="cronHistory"?r`<div class="page-summary">选择任务以查看运行历史</div>`:k}
                </div>
                <div class="page-meta">
                  ${e.tab==="cron"||e.tab==="scheduledTasks"?r`
                          <button class="btn" ?disabled=${e.cronLoading} @click=${()=>e.loadCron()}>
                            ${e.cronLoading?l("commonRefreshing"):l("commonRefresh")}
                          </button>
                          <button class="btn primary" @click=${()=>e.cronAddModalOpen=!0}>
                            新建任务
                          </button>
                        `:k}
                  ${e.lastError?r`<div class="pill danger">${e.lastError}</div>`:k}
                  ${o?Bf(e):k}
                </div>
              </section>
            `}

        ${e.tab==="overview"?b1({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:u=>e.applySettings(u),onPasswordChange:u=>e.password=u,onSessionKeyChange:u=>{e.sessionKey=u,e.chatMessage="",e.chatAttachments=[],e.chatModelRef=null,e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.applySettings({...e.settings,sessionKey:u,lastActiveSessionKey:u}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):k}

        ${e.tab==="channels"?mh({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,digitalEmployees:e.digitalEmployees,digitalEmployeesLoading:e.digitalEmployeesLoading,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,weworkQrModalOpen:e.weworkQrModalOpen,weworkQrModalLoading:e.weworkQrModalLoading,weworkQrModalPolling:e.weworkQrModalPolling,weworkQrModalSuccess:e.weworkQrModalSuccess,weworkQrModalError:e.weworkQrModalError,weworkQrModalReplaceWarn:e.weworkQrModalReplaceWarn,weworkQrModalAuthUrl:e.weworkQrModalAuthUrl,weworkQrModalGenPageUrl:e.weworkQrModalGenPageUrl,weixinQrModalOpen:e.weixinQrModalOpen,weixinQrModalLoading:e.weixinQrModalLoading,weixinQrModalPolling:e.weixinQrModalPolling,weixinQrModalSuccess:e.weixinQrModalSuccess,weixinQrModalError:e.weixinQrModalError,weixinQrModalReplaceWarn:e.weixinQrModalReplaceWarn,weixinQrModalImageSrc:e.weixinQrModalImageSrc,weixinQrModalScanPageUrl:e.weixinQrModalScanPageUrl,weixinQrModalScanned:e.weixinQrModalScanned,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,selectedChannelId:e.channelsSelectedChannelId,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:u=>$e(e,u),onChannelSelect:u=>{e.channelsSelectedChannelId=u,u&&!e.digitalEmployeesLoading&&(e.digitalEmployees?.length??0)===0&&Ae(e)},onWhatsAppStart:u=>e.handleWhatsAppStart(u),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onWeWorkQrStart:()=>e.handleWeWorkQrStart(),onWeWorkQrModalClose:()=>e.handleWeWorkQrModalClose(),onWeixinQrStart:()=>e.handleWeixinQrStart(),onWeixinQrModalClose:()=>e.handleWeixinQrModalClose(),onConfigPatch:(u,b)=>Me(e,u,b),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(u,b)=>e.handleNostrProfileEdit(u,b),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(u,b)=>e.handleNostrProfileFieldChange(u,b),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):k}

        ${e.tab==="sessions"?T1({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,bulkMode:e.sessionsBulkMode,selectedKeys:e.sessionsSelectedKeys,onFiltersChange:u=>{e.sessionsFilterActive=u.activeMinutes,e.sessionsFilterLimit=u.limit,e.sessionsIncludeGlobal=u.includeGlobal,e.sessionsIncludeUnknown=u.includeUnknown},onRefresh:()=>Ie(e,{includeLastMessage:!0}),onPatch:(u,b)=>tl(e,u,b),onDelete:u=>Rc(e,u),onBulkModeToggle:()=>{const u=!e.sessionsBulkMode;e.sessionsBulkMode=u,u||(e.sessionsSelectedKeys=[])},onSelectionChange:(u,b)=>{!u||u==="agent.main.main"||(b?e.sessionsSelectedKeys.includes(u)||(e.sessionsSelectedKeys=[...e.sessionsSelectedKeys,u]):e.sessionsSelectedKeys=e.sessionsSelectedKeys.filter(x=>x!==u))},onSelectAll:u=>{const b=u.filter(x=>x&&x!=="agent.main.main");e.sessionsSelectedKeys=Array.from(new Set(b))},onClearSelection:()=>{e.sessionsSelectedKeys=[]},onBulkDelete:async u=>{const b=u.filter(x=>x&&x!=="agent.main.main");b.length!==0&&(await Km(e,b),e.sessionsSelectedKeys=[],e.sessionsBulkMode=!1)}}):k}

        ${e.tab==="usage"?f0({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:u=>{e.usageStartDate=u,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Vr(e)},onEndDateChange:u=>{e.usageEndDate=u,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Vr(e)},onRefresh:()=>dd(e),onTimeZoneChange:u=>{e.usageTimeZone=u},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:u=>{e.usageLogFilterRoles=u},onLogFilterToolsChange:u=>{e.usageLogFilterTools=u},onLogFilterHasToolsChange:u=>{e.usageLogFilterHasTools=u},onLogFilterQueryChange:u=>{e.usageLogFilterQuery=u},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(u,b)=>{if(b&&e.usageSelectedHours.length>0){const x=Array.from({length:24},(N,_)=>_),M=e.usageSelectedHours[e.usageSelectedHours.length-1],E=x.indexOf(M),T=x.indexOf(u);if(E!==-1&&T!==-1){const[N,_]=E<T?[E,T]:[T,E],I=x.slice(N,_+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...I])]}}else e.usageSelectedHours.includes(u)?e.usageSelectedHours=e.usageSelectedHours.filter(x=>x!==u):e.usageSelectedHours=[...e.usageSelectedHours,u]},onQueryDraftChange:u=>{e.usageQueryDraft=u,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:u=>{e.usageSessionSort=u},onSessionSortDirChange:u=>{e.usageSessionSortDir=u},onSessionsTabChange:u=>{e.usageSessionsTab=u},onToggleColumn:u=>{e.usageVisibleColumns.includes(u)?e.usageVisibleColumns=e.usageVisibleColumns.filter(b=>b!==u):e.usageVisibleColumns=[...e.usageVisibleColumns,u]},onSelectSession:(u,b)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[u,...e.usageRecentSessions.filter(x=>x!==u)].slice(0,8),b&&e.usageSelectedSessions.length>0){const x=e.usageChartMode==="tokens",E=[...e.usageResult?.sessions??[]].toSorted((I,H)=>{const q=x?I.usage?.totalTokens??0:I.usage?.totalCost??0;return(x?H.usage?.totalTokens??0:H.usage?.totalCost??0)-q}).map(I=>I.key),T=e.usageSelectedSessions[e.usageSelectedSessions.length-1],N=E.indexOf(T),_=E.indexOf(u);if(N!==-1&&_!==-1){const[I,H]=N<_?[N,_]:[_,N],q=E.slice(I,H+1),Y=[...new Set([...e.usageSelectedSessions,...q])];e.usageSelectedSessions=Y}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===u?e.usageSelectedSessions=[]:e.usageSelectedSessions=[u];e.usageSelectedSessions.length===1&&(Wf(e,e.usageSelectedSessions[0]),Hf(e,e.usageSelectedSessions[0]))},onSelectDay:(u,b)=>{if(b&&e.usageSelectedDays.length>0){const x=(e.usageCostSummary?.daily??[]).map(N=>N.date),M=e.usageSelectedDays[e.usageSelectedDays.length-1],E=x.indexOf(M),T=x.indexOf(u);if(E!==-1&&T!==-1){const[N,_]=E<T?[E,T]:[T,E],I=x.slice(N,_+1),H=[...new Set([...e.usageSelectedDays,...I])];e.usageSelectedDays=H}}else e.usageSelectedDays.includes(u)?e.usageSelectedDays=e.usageSelectedDays.filter(x=>x!==u):e.usageSelectedDays=[u]},onChartModeChange:u=>{e.usageChartMode=u},onDailyChartModeChange:u=>{e.usageDailyChartMode=u},onTimeSeriesModeChange:u=>{e.usageTimeSeriesMode=u},onTimeSeriesBreakdownChange:u=>{e.usageTimeSeriesBreakdownMode=u},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}}):k}

        ${e.tab==="cron"||e.tab==="scheduledTasks"?yb({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,addModalOpen:e.cronAddModalOpen,editModalOpen:e.cronEditModalOpen,editJobId:e.cronEditJobId,digitalEmployees:e.digitalEmployees,digitalEmployeesLoading:e.digitalEmployeesLoading,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(u=>u.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:u=>e.cronForm={...e.cronForm,...u},onRefresh:()=>e.loadCron(),onOpenAddModal:()=>e.cronAddModalOpen=!0,onCloseAddModal:()=>e.cronAddModalOpen=!1,onOpenEditModal:u=>{e.cronForm=am(u,e.cronForm),e.cronEditJobId=u.id,e.cronEditModalOpen=!0,e.digitalEmployeesLoading||Ae(e)},onCloseEditModal:()=>{e.cronEditModalOpen=!1,e.cronEditJobId=null},onAdd:async()=>{await Ki(e),e.cronError||(e.cronAddModalOpen=!1)},onUpdate:async u=>{await om(e,u),e.cronError||(e.cronEditModalOpen=!1,e.cronEditJobId=null)},onToggle:(u,b)=>qi(e,u,b),onRun:u=>Vi(e,u),onRemove:u=>ji(e,u),confirmRemove:e.tab==="scheduledTasks",onLoadRuns:u=>Mn(e,u),onShowHistory:u=>{e.setTab("cronHistory"),Mn(e,u)}}):k}

        ${e.tab==="cronHistory"?kb({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,digitalEmployees:e.digitalEmployees,digitalEmployeesLoading:e.digitalEmployeesLoading,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(u=>u.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:u=>e.cronForm={...e.cronForm,...u},onRefresh:()=>e.loadCron(),onAdd:()=>Ki(e),onToggle:(u,b)=>qi(e,u,b),onRun:u=>Vi(e,u),onRemove:u=>ji(e,u),confirmRemove:!0,onLoadRuns:u=>Mn(e,u),onShowHistory:u=>{e.setTab("cronHistory"),Mn(e,u)}}):k}

        ${e.tab==="employeeMarket"?(()=>{const u=async()=>{e.employeeMarketLoading=!0,e.employeeMarketError=null;try{e.employeeMarketItems=await $a({q:e.employeeMarketQuery},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});const b=e.employeeMarketItems,x=new Set,M={};for(const E of b)if(E.installed&&E.localId){const T=String(E.id);(typeof E.id!="string"||!T.startsWith("local:"))&&(x.add(T),M[T]=E.localId)}e.employeeMarketInstalledRemoteIds=x,e.employeeMarketRemoteToLocal=M}catch(b){e.employeeMarketError=b?.message?String(b.message):String(b)}finally{e.employeeMarketLoading=!1}};return!e.employeeMarketLoadedOnce&&!e.employeeMarketLoading&&(e.employeeMarketLoadedOnce=!0,queueMicrotask(()=>{u()})),Bb({loading:e.employeeMarketLoading,error:e.employeeMarketError,query:e.employeeMarketQuery,category:e.employeeMarketCategory,items:e.employeeMarketItems,selectedId:e.employeeMarketSelectedId,selectedDetail:e.employeeMarketSelectedDetail,onQueryChange:b=>e.employeeMarketQuery=b,onCategoryChange:b=>e.employeeMarketCategory=b,onRefresh:async()=>{await u()},onSelect:async b=>{e.employeeMarketSelectedId=b,e.employeeMarketSelectedDetail=null,e.employeeMarketError=null;try{e.employeeMarketSelectedDetail=await Tb(b,{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(x){e.employeeMarketError=x?.message?String(x.message):String(x)}},onDetailClose:()=>{e.employeeMarketSelectedId=null,e.employeeMarketSelectedDetail=null},onAdd:()=>{e.digitalEmployeeCreateModalOpen=!0,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null},onInstall:async(b,x)=>{const M=String(b);e.employeeMarketInstallingId=M,e.employeeMarketError=null;try{const E=await Sa({kind:"employee",id:M,type:x??void 0,category:x??void 0},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});e.employeeMarketInstalledRemoteIds=new Set([...e.employeeMarketInstalledRemoteIds,M]),E?.id&&(e.employeeMarketRemoteToLocal={...e.employeeMarketRemoteToLocal,[M]:E.id}),await u()}catch(E){e.employeeMarketError=E?.message??String(E)}finally{e.employeeMarketInstallingId=null}},onDelete:async b=>{if(e.employeeMarketError=null,e.digitalEmployeesError=null,await sl(e,b),e.digitalEmployeesError)e.employeeMarketError=e.digitalEmployeesError;else{const x=Object.entries(e.employeeMarketRemoteToLocal).filter(([,E])=>E===b).map(([E])=>E),M={...e.employeeMarketRemoteToLocal};for(const E of x)delete M[E];e.employeeMarketRemoteToLocal=M,e.employeeMarketInstalledRemoteIds=new Set([...e.employeeMarketInstalledRemoteIds].filter(E=>!x.includes(E))),await u(),e.employeeMarketSelectedId=null,e.employeeMarketSelectedDetail=null}},onOpenEmployee:async b=>{await Qr(e,b)},onEdit:async b=>{const x=e.digitalEmployees.find(T=>T.id===b),M=await Qa(e,b);if(!M){e.employeeMarketError="无法加载员工详情";return}const E=T=>{const N=[];if(!T||typeof T!="object")return N;for(const[_,I]of Object.entries(T)){const H=String(_??"").trim();if(!H)continue;const q=I,Y=q&&typeof q=="object"&&!Array.isArray(q),X=Y&&typeof q.url=="string"&&q.url.trim()?"url":Y&&typeof q.service=="string"&&q.service.trim()?"service":"stdio",B=Y&&(X==="stdio"&&typeof q.command=="string"&&q.command.trim()||X==="url"&&typeof q.url=="string"&&q.url.trim()||X==="service"&&typeof q.service=="string"&&q.service.trim()&&typeof q.serviceUrl=="string"&&q.serviceUrl.trim());N.push({id:Ye(),key:H,editMode:B?"form":"raw",connectionType:X,draft:B?q:{command:"npx",args:[],env:{}},rawJson:Y?JSON.stringify(q,null,2):"{}",rawError:null,collapsed:!0})}return N};e.digitalEmployeeEditModalOpen=!0,e.digitalEmployeeEditId=M.id,e.digitalEmployeeEditName=M.name||M.id,e.digitalEmployeeEditDescription=M.description??"",e.digitalEmployeeEditPrompt=M.prompt??"",e.digitalEmployeeEditMcpJson=M.mcpServers&&Object.keys(M.mcpServers).length>0?JSON.stringify(M.mcpServers,null,2):"",e.digitalEmployeeEditMcpMode="builder",e.digitalEmployeeEditMcpItems=E(M.mcpServers),e.digitalEmployeeEditSkillNames=x?.skillNames??x?.skillIds??M.skillIds??[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],e.digitalEmployeeEditEnabled=M.enabled!==!1,e.digitalEmployeeEditError=null},installedIds:new Set(e.employeeMarketItems.filter(b=>typeof b.id=="string"&&String(b.id).startsWith("local:")).map(b=>String(b.id))),installedRemoteIds:e.employeeMarketInstalledRemoteIds,remoteToLocalMap:e.employeeMarketRemoteToLocal,installingId:e.employeeMarketInstallingId})})():k}

        ${e.tab==="employeeMarket"&&e.digitalEmployeeCreateModalOpen?(()=>{const u=async()=>{e.employeeMarketLoading=!0,e.employeeMarketError=null;try{e.employeeMarketItems=await $a({q:e.employeeMarketQuery},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(b){e.employeeMarketError=b?.message?String(b.message):String(b)}finally{e.employeeMarketLoading=!1}};return Qf({createModalOpen:e.digitalEmployeeCreateModalOpen,createName:e.digitalEmployeeCreateName,createDescription:e.digitalEmployeeCreateDescription,createPrompt:e.digitalEmployeeCreatePrompt,createError:e.digitalEmployeeCreateError,createBusy:e.digitalEmployeeCreateBusy,advancedOpen:e.digitalEmployeeAdvancedOpen,createMcpMode:e.digitalEmployeeCreateMcpMode,mcpJson:e.digitalEmployeeCreateMcpJson,mcpItems:e.digitalEmployeeCreateMcpItems??[],skillUploadName:e.digitalEmployeeSkillUploadName,skillUploadFiles:e.digitalEmployeeSkillUploadFiles??[],skillUploadError:e.digitalEmployeeSkillUploadError,onMcpJsonChange:b=>e.digitalEmployeeCreateMcpJson=b,onMcpModeChange:b=>e.digitalEmployeeCreateMcpMode=b,onMcpAddItem:()=>{const b=e.digitalEmployeeCreateMcpItems??[];e.digitalEmployeeCreateMcpItems=[...b,{id:Ye(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onMcpRemoveItem:b=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).filter(x=>x.id!==b)},onMcpCollapsedChange:(b,x)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(M=>M.id===b?{...M,collapsed:x}:M)},onMcpKeyChange:(b,x)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(M=>M.id===b?{...M,key:x}:M)},onMcpEditModeChange:(b,x)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(M=>M.id===b?{...M,editMode:x}:M)},onMcpConnectionTypeChange:(b,x)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(M=>M.id===b?{...M,connectionType:x}:M)},onMcpFormPatch:(b,x)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(M=>M.id===b?{...M,draft:{...M.draft??{},...x??{}}}:M)},onMcpRawChange:(b,x)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(M=>M.id===b?{...M,rawJson:x,rawError:null}:M)},onCreateClose:()=>{e.digitalEmployeeCreateBusy||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeCreateError=null,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null)},onCreateNameChange:b=>e.digitalEmployeeCreateName=b,onCreateDescriptionChange:b=>e.digitalEmployeeCreateDescription=b,onCreatePromptChange:b=>e.digitalEmployeeCreatePrompt=b,onToggleAdvanced:()=>e.digitalEmployeeAdvancedOpen=!e.digitalEmployeeAdvancedOpen,onSkillUploadNameChange:b=>e.digitalEmployeeSkillUploadName=b,onSkillUploadFilesChange:b=>e.digitalEmployeeSkillUploadFiles=b??[],onCreateSubmit:async()=>{if(e.digitalEmployeeCreateMcpMode==="builder"){const b=e.digitalEmployeeCreateMcpItems??[],x={},M=new Set;let E=null;const T=b.map(N=>({...N,rawError:null}));for(let N=0;N<T.length;N++){const _=T[N],I=_.key?.trim()??"";if(I){if(M.has(I)){E??=`MCP key 重复：${I}`;continue}if(M.add(I),_.editMode==="raw"){const H=_.rawJson?.trim()??"";if(!H)continue;try{const q=JSON.parse(H);if(!q||typeof q!="object"||Array.isArray(q)){_.rawError="JSON 必须是对象",E??=`MCP ${I} 的 JSON 无效`;continue}x[I]=q}catch{_.rawError="JSON 格式无效",E??=`MCP ${I} 的 JSON 无效`;continue}}else{const H=_.draft??{};if(_.connectionType==="stdio"&&!H.command?.trim()){E??=`MCP ${I} 缺少 command`;continue}if(_.connectionType==="url"&&!H.url?.trim()){E??=`MCP ${I} 缺少 url`;continue}if(_.connectionType==="service"&&(!H.service?.trim()||!H.serviceUrl?.trim())){E??=`MCP ${I} 缺少 service/serviceUrl`;continue}x[I]=H}}}if(e.digitalEmployeeCreateMcpItems=T,e.digitalEmployeeCreateMcpJson=Object.keys(x).length>0?JSON.stringify(x,null,2):"",E){e.digitalEmployeeCreateError=E;return}}await nl(e),e.digitalEmployeeCreateError||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeAdvancedOpen=!1,u())}})})():k}

        ${e.tab==="skillLibrary"?(()=>{const u=async()=>{e.skillLibraryLoading=!0,e.skillLibraryError=null;try{const b=e.skillLibraryStatus&&e.skillLibraryStatus!=="__all__"?e.skillLibraryStatus:void 0;e.skillLibraryItems=await Pb({q:e.skillLibraryQuery,status:b},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(b){e.skillLibraryError=b?.message?String(b.message):String(b)}finally{e.skillLibraryLoading=!1}};return!e.skillLibraryLoadedOnce&&!e.skillLibraryLoading&&(e.skillLibraryLoadedOnce=!0,queueMicrotask(()=>{u()})),D1({loading:e.skillLibraryLoading,error:e.skillLibraryError,installSuccess:e.skillLibraryInstallSuccess,gatewayHost:e.settings?.gatewayUrl?.trim(),query:e.skillLibraryQuery,selectedCategory:e.skillLibraryCategory,selectedStatus:e.skillLibraryStatus,items:e.skillLibraryItems,selectedFolder:e.skillLibrarySelectedFolder,selectedDetail:e.skillLibrarySelectedDetail,installedKeys:new Set([...(e.skillsReport?.skills??[]).map(b=>b.skillKey),...(e.skillLibraryItems??[]).filter(b=>b.installed).map(b=>b.folder)]),disabledKeys:fg(e.skillsReport),installingFolder:e.skillLibraryInstallingFolder,onInstall:async(b,x)=>{e.skillLibraryInstallingFolder=b,e.skillLibraryError=null,e.skillLibraryInstallSuccess=null;try{const M=await Sa({kind:"skill",id:b,type:x,category:x},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});await sn(e),await u();const E=M?.id??b,T=(M?.type??M?.category??x??"").trim();e.skillLibraryInstallSuccess=T?`安装成功：${E}（${T}）`:`安装成功：${E}`,setTimeout(()=>{e.skillLibraryInstallSuccess=null},5e3)}catch(M){e.skillLibraryError=M?.message??String(M)}finally{e.skillLibraryInstallingFolder=null}},onDelete:async b=>{e.skillLibraryError=null,await yg(e,b),e.skillsError?e.skillLibraryError=e.skillsError:(await u(),e.skillLibrarySelectedFolder=null,e.skillLibrarySelectedDetail=null)},onToggleEnabled:async(b,x)=>{e.skillLibraryError=null,await hg(e,b,x),e.skillsError?e.skillLibraryError=e.skillsError:await u()},onQueryChange:b=>e.skillLibraryQuery=b,onCategoryChange:b=>e.skillLibraryCategory=b,onStatusChange:b=>e.skillLibraryStatus=b,onRefresh:async()=>{await u()},onSelect:async b=>{if(e.skillLibrarySelectedFolder=b||null,e.skillLibrarySelectedDetail=null,e.skillLibraryError=null,!!b)try{e.skillLibrarySelectedDetail=await Ib(b,{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(x){e.skillLibraryError=x?.message?String(x.message):String(x)}},onDetailClose:()=>{e.skillLibrarySelectedFolder=null,e.skillLibrarySelectedDetail=null},addModalOpen:e.skillsAddModalOpen,uploadName:e.skillsUploadName,uploadFiles:e.skillsUploadFiles,uploadError:e.skillsUploadError,uploadTemplate:e.skillsUploadTemplate,uploadBusy:e.skillsUploadBusy,onAddClick:()=>{e.skillsAddModalOpen=!0,e.skillsUploadName="",e.skillsUploadFiles=[],e.skillsUploadError=null,e.skillsUploadTemplate=null},onAddClose:()=>{e.skillsAddModalOpen=!1,e.skillsUploadName="",e.skillsUploadFiles=[],e.skillsUploadError=null,e.skillsUploadTemplate=null},onUploadNameChange:b=>e.skillsUploadName=b,onUploadFilesChange:b=>e.skillsUploadFiles=b??[],onUploadSubmit:async()=>{const b=e.skillsUploadFiles??[],x=e.skillsUploadName?.trim()??"";if(b.length===0)return;e.skillsUploadBusy=!0,e.skillsUploadError=null,e.skillLibraryError=null;const M=e.settings?.gatewayUrl?.trim();if(!M){e.skillsUploadError="Gateway URL 未配置",e.skillsUploadBusy=!1;return}const E={gatewayUrl:M,token:e.settings?.token?.trim()};try{for(let T=0;T<b.length;T++){const N=b[T],_=b.length>1?N.name.replace(/\.(zip|md)$/i,"").replace(/[^a-zA-Z0-9_-]/g,"-"):x||N.name.replace(/\.(zip|md)$/i,"").replace(/[^a-zA-Z0-9_-]/g,"-");if(!_){e.skillsUploadError="技能名称不能为空";break}const I=await vg(E,_,N);if(!I.ok){e.skillsUploadError=I.error??"上传失败",e.skillsUploadTemplate=I.template??null;break}}e.skillsUploadError||(e.skillsAddModalOpen=!1,e.skillsUploadName="",e.skillsUploadFiles=[],e.skillsUploadTemplate=null,await sn(e))}finally{e.skillsUploadBusy=!1}},skillEditModalOpen:e.skillLibraryEditModalOpen,skillEditSkillKey:e.skillLibraryEditSkillKey,skillEditFiles:e.skillLibraryEditFiles,skillEditSelectedFile:e.skillLibraryEditSelectedFile,skillEditContent:e.skillLibraryEditContent,skillEditLoading:e.skillLibraryEditLoading,skillEditSaving:e.skillLibraryEditSaving,skillEditError:e.skillLibraryEditError,skillEditSyntaxError:e.skillLibraryEditSyntaxError,skillEditSuccessMessage:e.skillLibraryEditSuccessMessage,onSkillEditOpen:async b=>{e.skillLibraryEditModalOpen=!0,e.skillLibraryEditSkillKey=b,e.skillLibraryEditFiles=[],e.skillLibraryEditSelectedFile=null,e.skillLibraryEditContent="",e.skillLibraryEditOriginalContent="",e.skillLibraryEditLoading=!0,e.skillLibraryEditError=null,e.skillLibraryEditSyntaxError=null;const x=await bg(e,b),M=x.filter(T=>!T.split("/").some(N=>N.startsWith("."))),E=M.find(T=>T==="SKILL.md")||M[0];if(e.skillLibraryEditFiles=x,e.skillLibraryEditLoading=!1,E){e.skillLibraryEditSelectedFile=E,e.skillLibraryEditLoading=!0;const T=await il(e,b,E);e.skillLibraryEditContent=T??"",e.skillLibraryEditOriginalContent=T??"",e.skillLibraryEditLoading=!1}},onSkillEditClose:()=>{e.skillLibraryEditModalOpen=!1,e.skillLibraryEditSkillKey=null,e.skillLibraryEditFiles=[],e.skillLibraryEditSelectedFile=null,e.skillLibraryEditContent="",e.skillLibraryEditOriginalContent="",e.skillLibraryEditError=null,e.skillLibraryEditSyntaxError=null,e.skillLibraryEditSuccessMessage=null},onSkillEditFileSelect:async b=>{if(e.skillLibraryEditSaving)return;e.skillLibraryEditSelectedFile=b,e.skillLibraryEditLoading=!0,e.skillLibraryEditError=null,e.skillLibraryEditSyntaxError=null;const x=await il(e,e.skillLibraryEditSkillKey,b);e.skillLibraryEditContent=x??"",e.skillLibraryEditOriginalContent=x??"",e.skillLibraryEditLoading=!1},onSkillEditContentChange:b=>{e.skillLibraryEditContent=b,e.skillLibraryEditSyntaxError=null},onSkillEditSave:async()=>{const b=e.skillLibraryEditSkillKey,x=e.skillLibraryEditSelectedFile;if(!b||!x)return;if(x.toLowerCase().endsWith(".json"))try{JSON.parse(e.skillLibraryEditContent)}catch(T){e.skillLibraryEditSyntaxError=`JSON 语法错误: ${T.message}`;return}e.skillLibraryEditSaving=!0,e.skillLibraryEditError=null,e.skillLibraryEditSyntaxError=null;const E=await wg(e,b,x,e.skillLibraryEditContent);e.skillLibraryEditSaving=!1,E&&(e.skillLibraryEditOriginalContent=e.skillLibraryEditContent,await sn(e),await u(),e.skillLibraryEditSuccessMessage="保存成功",window.setTimeout(()=>{e.skillLibraryEditSuccessMessage=null},2e3))}})})():k}

        ${e.tab==="toolLibrary"?(()=>{const u=async()=>{e.toolLibraryLoading=!0,e.toolLibraryError=null;try{e.toolLibraryItems=await Lb({q:e.toolLibraryQuery},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});const M=e.toolLibraryItems,E=new Set,T=new Map;for(const N of M)N.installed&&N.serverKey&&(E.add(String(N.id)),T.set(N.id,N.serverKey),T.set(String(N.id),N.serverKey));e.toolLibraryInstalledRemoteIds=E,e.toolLibraryInstalledMcpMap=T}catch(M){e.toolLibraryError=M?.message?String(M.message):String(M)}finally{e.toolLibraryLoading=!1}};!e.toolLibraryLoadedOnce&&!e.toolLibraryLoading&&(e.toolLibraryLoadedOnce=!0,queueMicrotask(()=>{u()}));const b=e.configSnapshot?.config?.mcp?.servers??{},x=new Set;for(const[M,E]of Object.entries(b))E?.enabled===!1&&x.add(M);return j1({loading:e.toolLibraryLoading,error:e.toolLibraryError,query:e.toolLibraryQuery,category:e.toolLibraryCategory,onCategoryChange:M=>e.toolLibraryCategory=M,items:e.toolLibraryItems,addModalOpen:e.mcpAddModalOpen,addName:e.mcpAddName,addDraft:e.mcpAddDraft??{},addConnectionType:e.mcpAddConnectionType,addEditMode:e.mcpAddEditMode,addRawJson:e.mcpAddRawJson,addRawError:e.mcpAddRawError,saving:e.configSaving,onAddServer:()=>h0(e),onAddClose:()=>v0(e),onAddNameChange:M=>y0(e,M),onAddFormPatch:M=>b0(e,M),onAddRawChange:M=>k0(e,M),onAddConnectionTypeChange:M=>w0(e,M),onAddEditModeChange:M=>$0(e,M),onAddSubmit:async()=>{await S0(e),await ee(e)},selectedId:e.toolLibrarySelectedId,selectedDetail:e.toolLibrarySelectedDetail,installedRemoteIds:e.toolLibraryInstalledRemoteIds,disabledMcpKeys:x,installingId:e.toolLibraryInstallingId,installedMcpMap:e.toolLibraryInstalledMcpMap,onInstall:async(M,E)=>{if(typeof M=="number"){e.toolLibraryInstallingId=M,e.toolLibraryError=null;try{const T=await Sa({kind:"mcp",id:String(M),type:E,category:E},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});if(T?.id){e.toolLibraryInstalledRemoteIds=new Set([...e.toolLibraryInstalledRemoteIds,String(M)]);const N=new Map(e.toolLibraryInstalledMcpMap);N.set(M,T.id),N.set(String(M),T.id),e.toolLibraryInstalledMcpMap=N}await ee(e),await u()}catch(T){e.toolLibraryError=T?.message??String(T)}finally{e.toolLibraryInstallingId=null}}},onDelete:async M=>{e.toolLibraryError=null,await I0(e,M),e.lastError&&(e.toolLibraryError=e.lastError);let E=null;for(const[T,N]of e.toolLibraryInstalledMcpMap)if(N===M){E=T;break}if(E!=null){e.toolLibraryInstalledRemoteIds=new Set([...e.toolLibraryInstalledRemoteIds].filter(N=>N!==String(E)));const T=new Map(e.toolLibraryInstalledMcpMap);T.delete(E),e.toolLibraryInstalledMcpMap=T}await u(),e.toolLibrarySelectedId=null,e.toolLibrarySelectedDetail=null},onToggleEnabled:async(M,E)=>{e.toolLibraryError=null,E0(e,M,E),await u()},onEdit:M=>{(async()=>(e.client&&e.connected&&await ee(e),M0(e,M),e.toolLibraryMcpEditModalOpen=!0,e.toolLibraryMcpEditServerKey=e.mcpSelectedKey??M))()},onQueryChange:M=>e.toolLibraryQuery=M,onRefresh:async()=>{await u()},onSelect:async M=>{if(e.toolLibrarySelectedId=M,e.toolLibrarySelectedDetail=null,e.toolLibraryError=null,!(typeof M=="number"&&M<0))try{e.toolLibrarySelectedDetail=await _b(M,{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(E){e.toolLibraryError=E?.message?String(E.message):String(E)}},onDetailClose:()=>{e.toolLibrarySelectedId=null,e.toolLibrarySelectedDetail=null}})})():k}

        ${e.tab==="tutorials"?(()=>{const u=async()=>{e.tutorialsLoading=!0,e.tutorialsError=null;try{e.tutorialCategories=await Db({gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()}),!e.tutorialsSelectedCategoryId&&e.tutorialCategories.length?e.tutorialsSelectedCategoryId=e.tutorialCategories[0]?.id??null:e.tutorialsSelectedCategoryId&&(e.tutorialCategories.some(x=>x.id===e.tutorialsSelectedCategoryId)||(e.tutorialsSelectedCategoryId=e.tutorialCategories[0]?.id??null))}catch(b){e.tutorialsError=b?.message?String(b.message):String(b)}finally{e.tutorialsLoading=!1}};return!e.tutorialsLoadedOnce&&!e.tutorialsLoading&&(e.tutorialsLoadedOnce=!0,queueMicrotask(()=>{u()})),n2({loading:e.tutorialsLoading,error:e.tutorialsError,categories:e.tutorialCategories,query:e.tutorialsQuery,selectedCategoryId:e.tutorialsSelectedCategoryId,playingLink:e.tutorialsPlayingLink,onQueryChange:b=>e.tutorialsQuery=b,onSelectCategory:b=>e.tutorialsSelectedCategoryId=b,onLessonClick:b=>{e.tutorialsPlayingLink=b},onPlayingClose:()=>e.tutorialsPlayingLink=null,onRefresh:async()=>{await u()}})})():k}

        ${e.tab==="aboutUs"?c2({basePath:S,clearWorkspaceLoading:e.aboutClearWorkspaceLoading,clearWorkspaceError:e.aboutClearWorkspaceError,onClearWorkspace:async()=>{if(!await Te(`将删除本机默认工作区目录内的全部内容（macOS / Linux 一般为 ~/.openocta/workspace，Windows 一般为 %APPDATA%&#92;openocta&#92;workspace）。

此操作不可恢复，请先备份重要文稿。是否继续？`))return;const b=e.settings?.gatewayUrl?.trim();if(!b){e.aboutClearWorkspaceError="请先在 Overview 中配置 Gateway URL。";return}e.aboutClearWorkspaceLoading=!0,e.aboutClearWorkspaceError=null;try{const x=await a2({gatewayHost:b,token:e.settings?.token?.trim()??""});if(!x.ok){e.aboutClearWorkspaceError=[x.message,x.detail].filter(Boolean).join(" — ");return}await vs(x.message??"已清空默认工作区。")}catch(x){e.aboutClearWorkspaceError=x instanceof Error?x.message:String(x)}finally{e.aboutClearWorkspaceLoading=!1}},uninstallModalOpen:e.aboutUninstallModalOpen,uninstallMode:e.aboutUninstallMode,uninstallLoading:e.aboutUninstallLoading,uninstallError:e.aboutUninstallError,onOpenUninstallModal:()=>{e.aboutUninstallModalOpen=!0,e.aboutUninstallError=null,e.aboutUninstallMode="program"},onCloseUninstallModal:()=>{e.aboutUninstallModalOpen=!1,e.aboutUninstallError=null},onUninstallModeChange:u=>{e.aboutUninstallMode=u},onConfirmUninstall:async()=>{const u=e.settings?.gatewayUrl?.trim();if(!u){e.aboutUninstallError="请先在 Overview 中配置 Gateway URL。";return}e.aboutUninstallLoading=!0,e.aboutUninstallError=null;try{const b=e.settings?.token?.trim()??"",x=await s2({gatewayHost:u,token:b,mode:e.aboutUninstallMode});if(!x.ok){e.aboutUninstallError=[x.message,x.detail].filter(Boolean).join(" — ");return}e.aboutUninstallModalOpen=!1,await vs(x.message??"已安排卸载，桌面应用将自动退出。");try{window.close()}catch{}}catch(b){e.aboutUninstallError=b instanceof Error?b.message:String(b)}finally{e.aboutUninstallLoading=!1}}}):k}

        ${e.tab==="llmTrace"?g2({loading:e.llmTraceLoading,result:e.llmTraceResult,error:e.llmTraceError,mode:e.llmTraceMode,search:e.llmTraceSearch,enabled:e.llmTraceEnabled,saving:e.llmTraceSaving,viewContent:e.llmTraceViewContent,viewingSessionId:e.llmTraceViewingSessionId,viewLoading:e.llmTraceViewLoading,onRefresh:()=>Ym(e),onModeChange:u=>Zm(e,u),onSearchChange:u=>Xm(e,u),onToggleEnabled:()=>eg(e),onView:u=>tg(e,u),onBack:()=>ng(e),onDownload:u=>sg(e,u)}):k}

        ${e.tab==="sandbox"?y2({security:e.securityForm??Ka(e)??{},saving:e.configSaving,pendingApprovalsCount:e.approvalsResult?.pending?.length??0,onPresetApply:u=>rg(e,u),onPatch:(u,b)=>{e.securityForm||(e.securityForm=Wo(e)??{}),cg(e,e.securityForm,u,b)},onSave:()=>dg(e,e.securityForm??Ka(e)??{}),pathForTab:u=>Ft(u,e.basePath),approvalsLoading:e.approvalsLoading,approvalsResult:e.approvalsResult,approvalsError:e.approvalsError,onApprovalsRefresh:()=>Wn(e),onApprove:u=>pg(e,u,"ui"),onDeny:(u,b)=>mg(e,u,"ui",b),onWhitelistSession:u=>gg(e,u,"ui")}):k}

        ${e.tab==="nodes"?jb({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>Us(e),onDevicesRefresh:()=>gt(e),onDeviceApprove:u=>Im(e,u),onDeviceReject:u=>Dm(e,u),onDeviceRotate:(u,b,x)=>Rm(e,{deviceId:u,role:b,scopes:x}),onDeviceRevoke:(u,b)=>Nm(e,{deviceId:u,role:b}),onLoadConfig:()=>ee(e),onLoadExecApprovals:()=>{const u=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Fo(e,u)},onBindDefault:u=>{u?Me(e,["tools","exec","node"],u):Fi(e,["tools","exec","node"])},onBindAgent:(u,b)=>{const x=["agents","list",u,"tools","exec","node"];b?Me(e,x,b):Fi(e,x)},onSaveBindings:()=>Ra(e),onExecApprovalsTargetChange:(u,b)=>{e.execApprovalsTarget=u,e.execApprovalsTargetNodeId=b,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:u=>{e.execApprovalsSelectedAgent=u},onExecApprovalsPatch:(u,b)=>Wm(e,u,b),onExecApprovalsRemove:u=>Hm(e,u),onSaveExecApprovals:()=>{const u=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Bm(e,u)}}):k}

        ${o?Fy({sessionKey:e.sessionKey,onSessionKeyChange:u=>{e.sessionKey=u,e.chatMessage="",e.chatAttachments=[],e.chatModelRef=null,e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:u,lastActiveSessionKey:u}),e.loadAssistantIdentity(),it(e),_t(e),Va(e,u)},thinkingLevel:e.chatThinkingLevel,showThinking:c,modelRef:e.chatModelRef,defaultModelRef:Pa(m),modelOptions:(()=>{const u=m,b=Pa(m),x=new Set,M=[],E=u?.agents?.defaults?.models;if(E&&typeof E=="object")for(const[N,_]of Object.entries(E)){const I=N.trim();if(!I||x.has(I))continue;x.add(I);const H=_&&typeof _=="object"&&"alias"in _&&typeof _.alias=="string"?_.alias.trim():"",q=H&&H!==I?`${H} (${I})`:I;M.push({value:I,label:q})}const T=u?.models?.providers;if(T&&typeof T=="object")for(const[N,_]of Object.entries(T)){const I=_&&typeof _=="object"?_.models:void 0;if(Array.isArray(I))for(const H of I){const q=H?.id?.trim();if(!q)continue;const Y=`${N}/${q}`;if(x.has(Y))continue;x.add(Y);const X=H.name&&H.name!==q?`${H.name} (${Y})`:Y;M.push({value:Y,label:X})}}return M.unshift({value:"",label:b?`默认 (${b})`:"默认"}),M})(),onModelRefChange:u=>e.chatModelRef=u,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,assistantAvatarUrl:p,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:a,error:e.lastError,sessions:e.sessionsResult,focusMode:i,onRefresh:()=>(e.resetToolStream(),Promise.all([it(e),_t(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:u=>e.handleChatScroll(u),onDraftChange:u=>e.chatMessage=u,attachments:e.chatAttachments,onAttachmentsChange:u=>e.chatAttachments=u,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:u=>e.removeQueuedMessage(u),confirmQueueRemove:e.tab==="message",onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow,onScrollToBottom:()=>e.scrollToBottom(),conversationOnly:e.chatConversationOnly,onConversationOnlyChange:u=>{e.chatConversationOnly=u},sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:u=>e.handleOpenSidebar(u),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:u=>e.handleSplitRatioChange(u),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):k}

        ${e.tab==="digitalEmployee"?Kf({loading:e.digitalEmployeesLoading,employees:e.digitalEmployees,error:e.digitalEmployeesError,filter:e.digitalEmployeesFilter,viewMode:e.digitalEmployeesViewMode,onRefresh:()=>Ae(e),createModalOpen:e.digitalEmployeeCreateModalOpen,createName:e.digitalEmployeeCreateName,createDescription:e.digitalEmployeeCreateDescription,createPrompt:e.digitalEmployeeCreatePrompt,createError:e.digitalEmployeeCreateError,createBusy:e.digitalEmployeeCreateBusy,advancedOpen:e.digitalEmployeeAdvancedOpen,createMcpMode:e.digitalEmployeeCreateMcpMode,mcpJson:e.digitalEmployeeCreateMcpJson,mcpItems:e.digitalEmployeeCreateMcpItems??[],onFilterChange:u=>{e.digitalEmployeesFilter=u},onViewModeChange:u=>{e.digitalEmployeesViewMode=u},onCopy:async u=>{await Gm(e,u)},onMcpJsonChange:u=>{e.digitalEmployeeCreateMcpJson=u},onMcpModeChange:u=>{e.digitalEmployeeCreateMcpMode=u},onMcpAddItem:()=>{const u=e.digitalEmployeeCreateMcpItems??[];e.digitalEmployeeCreateMcpItems=[...u,{id:Ye(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onMcpRemoveItem:u=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).filter(b=>b.id!==u)},onMcpCollapsedChange:(u,b)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(x=>x.id===u?{...x,collapsed:b}:x)},onMcpKeyChange:(u,b)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(x=>x.id===u?{...x,key:b}:x)},onMcpEditModeChange:(u,b)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(x=>x.id===u?{...x,editMode:b}:x)},onMcpConnectionTypeChange:(u,b)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(x=>x.id===u?{...x,connectionType:b}:x)},onMcpFormPatch:(u,b)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(x=>x.id===u?{...x,draft:{...x.draft??{},...b??{}}}:x)},onMcpRawChange:(u,b)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(x=>x.id===u?{...x,rawJson:b,rawError:null}:x)},skillUploadName:e.digitalEmployeeSkillUploadName,skillUploadFiles:e.digitalEmployeeSkillUploadFiles??[],skillUploadError:e.digitalEmployeeSkillUploadError,onCreateOpen:()=>{e.digitalEmployeeCreateModalOpen=!0,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null},onCreateClose:()=>{e.digitalEmployeeCreateBusy||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeCreateError=null,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null)},onCreateNameChange:u=>{e.digitalEmployeeCreateName=u},onCreateDescriptionChange:u=>{e.digitalEmployeeCreateDescription=u},onCreatePromptChange:u=>{e.digitalEmployeeCreatePrompt=u},onCreateSubmit:async()=>{if(e.digitalEmployeeCreateMcpMode==="builder"){const u=e.digitalEmployeeCreateMcpItems??[],b={},x=new Set;let M=null;const E=u.map(T=>({...T,rawError:null}));for(let T=0;T<E.length;T++){const N=E[T],_=N.key?.trim()??"";if(_){if(x.has(_)){M??=`MCP key 重复：${_}`;continue}if(x.add(_),N.editMode==="raw"){const I=N.rawJson?.trim()??"";if(!I)continue;try{const H=JSON.parse(I);if(!H||typeof H!="object"||Array.isArray(H)){N.rawError="JSON 必须是对象",M??=`MCP ${_} 的 JSON 无效`;continue}b[_]=H}catch{N.rawError="JSON 格式无效",M??=`MCP ${_} 的 JSON 无效`;continue}}else{const I=N.draft??{};if(N.connectionType==="stdio"&&!I.command?.trim()){M??=`MCP ${_} 缺少 command`;continue}if(N.connectionType==="url"&&!I.url?.trim()){M??=`MCP ${_} 缺少 url`;continue}if(N.connectionType==="service"&&(!I.service?.trim()||!I.serviceUrl?.trim())){M??=`MCP ${_} 缺少 service/serviceUrl`;continue}b[_]=I}}}if(e.digitalEmployeeCreateMcpItems=E,e.digitalEmployeeCreateMcpJson=Object.keys(b).length>0?JSON.stringify(b,null,2):"",M){e.digitalEmployeeCreateError=M;return}}await nl(e),e.digitalEmployeeCreateError||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeAdvancedOpen=!1)},onToggleAdvanced:()=>{e.digitalEmployeeAdvancedOpen=!e.digitalEmployeeAdvancedOpen},onSkillUploadNameChange:u=>{e.digitalEmployeeSkillUploadName=u},onSkillUploadFilesChange:u=>{e.digitalEmployeeSkillUploadFiles=u??[]},onOpenEmployee:async u=>{await Qr(e,u)},onToggleEnabled:(u,b)=>Vm(e,u,b),onDelete:u=>sl(e,u),onEdit:async u=>{const b=e.digitalEmployees.find(E=>E.id===u),x=await Qa(e,u);if(!x){e.digitalEmployeesError="无法加载员工详情";return}const M=E=>{const T=[];if(!E||typeof E!="object")return T;for(const[N,_]of Object.entries(E)){const I=String(N??"").trim();if(!I)continue;const H=_,q=H&&typeof H=="object"&&!Array.isArray(H),Y=q&&typeof H.url=="string"&&H.url.trim()?"url":q&&typeof H.service=="string"&&H.service.trim()?"service":"stdio",X=q&&(Y==="stdio"&&typeof H.command=="string"&&H.command.trim()||Y==="url"&&typeof H.url=="string"&&H.url.trim()||Y==="service"&&typeof H.service=="string"&&H.service.trim()&&typeof H.serviceUrl=="string"&&H.serviceUrl.trim());T.push({id:Ye(),key:I,editMode:X?"form":"raw",connectionType:Y,draft:X?H:{command:"npx",args:[],env:{}},rawJson:q?JSON.stringify(H,null,2):"{}",rawError:null,collapsed:!0})}return T};e.digitalEmployeeEditModalOpen=!0,e.digitalEmployeeEditId=x.id,e.digitalEmployeeEditName=x.name||x.id,e.digitalEmployeeEditDescription=x.description??"",e.digitalEmployeeEditPrompt=x.prompt??"",e.digitalEmployeeEditMcpJson=x.mcpServers&&Object.keys(x.mcpServers).length>0?JSON.stringify(x.mcpServers,null,2):"",e.digitalEmployeeEditMcpMode="builder",e.digitalEmployeeEditMcpItems=M(x.mcpServers),e.digitalEmployeeEditSkillNames=b?.skillNames??b?.skillIds??x.skillIds??[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],e.digitalEmployeeEditEnabled=x.enabled!==!1,e.digitalEmployeeEditWeWorkGroupBotKey=x.weworkGroupBotKey??"",e.digitalEmployeeEditError=null},editModalOpen:e.digitalEmployeeEditModalOpen,editId:e.digitalEmployeeEditId,editName:e.digitalEmployeeEditName,editDescription:e.digitalEmployeeEditDescription,editPrompt:e.digitalEmployeeEditPrompt,editMcpJson:e.digitalEmployeeEditMcpJson,editMcpMode:e.digitalEmployeeEditMcpMode,editMcpItems:e.digitalEmployeeEditMcpItems??[],editWeWorkGroupBotKey:e.digitalEmployeeEditWeWorkGroupBotKey,onEditMcpModeChange:u=>{e.digitalEmployeeEditMcpMode=u},onEditMcpAddItem:()=>{const u=e.digitalEmployeeEditMcpItems??[];e.digitalEmployeeEditMcpItems=[...u,{id:Ye(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onEditMcpRemoveItem:u=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).filter(b=>b.id!==u)},onEditMcpCollapsedChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,collapsed:b}:x)},onEditMcpKeyChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,key:b}:x)},onEditMcpEditModeChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,editMode:b}:x)},onEditMcpConnectionTypeChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,connectionType:b}:x)},onEditMcpFormPatch:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,draft:{...x.draft??{},...b??{}}}:x)},onEditMcpRawChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,rawJson:b,rawError:null}:x)},editSkillNames:e.digitalEmployeeEditSkillNames??[],editSkillFilesToUpload:e.digitalEmployeeEditSkillFilesToUpload??[],editSkillsToDelete:e.digitalEmployeeEditSkillsToDelete??[],editError:e.digitalEmployeeEditError,editBusy:e.digitalEmployeeEditBusy,onEditClose:()=>{e.digitalEmployeeEditBusy||(e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditError=null,e.digitalEmployeeEditMcpMode="raw",e.digitalEmployeeEditMcpItems=[])},onEditDescriptionChange:u=>{e.digitalEmployeeEditDescription=u},onEditPromptChange:u=>{e.digitalEmployeeEditPrompt=u},onEditWeWorkGroupBotKeyChange:u=>{e.digitalEmployeeEditWeWorkGroupBotKey=u},onEditMcpJsonChange:u=>{e.digitalEmployeeEditMcpJson=u},onEditSkillFilesChange:u=>{e.digitalEmployeeEditSkillFilesToUpload=u??[]},onEditSkillDelete:u=>{const b=e.digitalEmployeeEditSkillsToDelete??[];b.includes(u)||(e.digitalEmployeeEditSkillsToDelete=[...b,u])},onEditSkillUndoDelete:u=>{e.digitalEmployeeEditSkillsToDelete=(e.digitalEmployeeEditSkillsToDelete??[]).filter(b=>b!==u)},onEditSubmit:async()=>{if(e.digitalEmployeeEditMcpMode==="builder"){const u=e.digitalEmployeeEditMcpItems??[],b={},x=new Set;let M=null;const E=u.map(T=>({...T,rawError:null}));for(let T=0;T<E.length;T++){const N=E[T],_=N.key?.trim()??"";if(_){if(x.has(_)){M??=`MCP key 重复：${_}`;continue}if(x.add(_),N.editMode==="raw"){const I=N.rawJson?.trim()??"";if(!I)continue;try{const H=JSON.parse(I);if(!H||typeof H!="object"||Array.isArray(H)){N.rawError="JSON 必须是对象",M??=`MCP ${_} 的 JSON 无效`;continue}b[_]=H}catch{N.rawError="JSON 格式无效",M??=`MCP ${_} 的 JSON 无效`;continue}}else{const I=N.draft??{};if(N.connectionType==="stdio"&&!I.command?.trim()){M??=`MCP ${_} 缺少 command`;continue}if(N.connectionType==="url"&&!I.url?.trim()){M??=`MCP ${_} 缺少 url`;continue}if(N.connectionType==="service"&&(!I.service?.trim()||!I.serviceUrl?.trim())){M??=`MCP ${_} 缺少 service/serviceUrl`;continue}b[_]=I}}}if(e.digitalEmployeeEditMcpItems=E,e.digitalEmployeeEditMcpJson=Object.keys(b).length>0?JSON.stringify(b,null,2):"",M){e.digitalEmployeeEditError=M;return}}await al(e),e.digitalEmployeeEditError||(e.digitalEmployeeEditModalOpen=!1)}}):k}

        ${e.tab==="envVars"?db({vars:e.configForm?.env?.vars??e.configSnapshot?.config?.env?.vars??{},dirty:e.configFormDirty,loading:e.configLoading,saving:e.configSaving,connected:e.connected,onVarsChange:u=>{Me(e,["env","vars"],u)},onSave:async()=>{const b=e.configForm?.env?.vars??{},x={};for(const[T,N]of Object.entries(b))T.trim()&&(x[T.trim()]=N);Me(e,["env","vars"],x);const E={...e.configForm?.env??e.configSnapshot?.config?.env??{},vars:x};await Se(e,{env:E})},onReload:()=>ee(e)}):k}

        ${e.tab==="config"?rb({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:u=>{e.configRaw=u},onFormModeChange:u=>e.configFormMode=u,onFormPatch:(u,b)=>Me(e,u,b),onSearchChange:u=>e.configSearchQuery=u,onSectionChange:u=>{e.configActiveSection=u,e.configActiveSubsection=null},onSubsectionChange:u=>e.configActiveSubsection=u,onReload:()=>ee(e),onSave:()=>Ra(e),onApply:()=>Xu(e),onUpdate:()=>ep(e)}):k}

        ${e.tab==="modelLibrary"?P2({providers:g,formProviders:e.configForm?.models?.providers,modelEnv:f,defaultModelRef:$,loading:e.configLoading,saving:e.configSaving,selectedCategory:e.modelLibraryCategory,selectedProvider:e.modelLibrarySelectedProvider,providerSearchQuery:e.modelsProviderSearchQuery,viewMode:e.modelsViewMode,formDirty:e.modelsFormDirty,addProviderModalOpen:e.modelsAddProviderModalOpen,addProviderForm:e.modelsAddProviderForm,addModelModalOpen:e.modelsAddModelModalOpen,addModelForm:e.modelsAddModelForm,useModelModalOpen:e.modelsUseModelModalOpen,useModelModalProvider:e.modelsUseModelModalProvider,saveError:e.modelsSaveError,onRefresh:()=>$r(e),onAddProvider:()=>Sr(e),onAddProviderModalClose:()=>xr(e),onAddProviderFormChange:u=>Cr(e,u),onAddProviderSubmit:()=>Mr(e),onSelect:u=>Ar(e,u),onProviderSearchChange:u=>e.modelsProviderSearchQuery=u,onViewModeChange:u=>e.modelsViewMode=u,onPatch:(u,b)=>Er(e,u,b),onAddModel:u=>Lr(e),onAddModelModalClose:()=>_r(e),onAddModelFormChange:u=>Pr(e,u),onAddModelSubmit:u=>Ir(e,u),onRemoveModel:(u,b)=>Nr(e,u,b),onPatchModel:(u,b,x)=>Dr(e,u,b,x),onPatchModelEnv:(u,b,x)=>Rr(e,u,b,x),onSave:()=>Ur(e),onCancel:()=>Or(e),onUseModelClick:u=>Fr(e,u),onUseModelModalClose:()=>Br(e),onUseModel:(u,b)=>Wr(e,u,b),onCancelUse:u=>Hr(e,u),onDeleteProvider:()=>zr(e)}):k}

        ${e.tab==="models"?C2({providers:g,modelEnv:f,defaultModelRef:$,loading:e.configLoading,saving:e.configSaving,selectedProvider:e.modelsSelectedProvider,providerSearchQuery:e.modelsProviderSearchQuery,viewMode:e.modelsViewMode,formDirty:e.modelsFormDirty,addProviderModalOpen:e.modelsAddProviderModalOpen,addProviderForm:e.modelsAddProviderForm,addModelModalOpen:e.modelsAddModelModalOpen,addModelForm:e.modelsAddModelForm,useModelModalOpen:e.modelsUseModelModalOpen,useModelModalProvider:e.modelsUseModelModalProvider,saveError:e.modelsSaveError,onRefresh:()=>$r(e),onAddProvider:()=>Sr(e),onAddProviderModalClose:()=>xr(e),onAddProviderFormChange:u=>Cr(e,u),onAddProviderSubmit:()=>Mr(e),onSelect:u=>Ar(e,u),onProviderSearchChange:u=>e.modelsProviderSearchQuery=u,onViewModeChange:u=>e.modelsViewMode=u,onPatch:(u,b)=>Er(e,u,b),onAddModel:u=>Lr(e),onAddModelModalClose:()=>_r(e),onAddModelFormChange:u=>Pr(e,u),onAddModelSubmit:u=>Ir(e,u),onRemoveModel:(u,b)=>Nr(e,u,b),onPatchModel:(u,b,x)=>Dr(e,u,b,x),onPatchModelEnv:(u,b,x)=>Rr(e,u,b,x),onSave:()=>Ur(e),onCancel:()=>Or(e),onUseModelClick:u=>Fr(e,u),onUseModelModalClose:()=>Br(e),onUseModel:(u,b)=>Wr(e,u,b),onCancelUse:u=>Hr(e,u),onDeleteProvider:()=>zr(e)}):k}

        ${e.tab==="debug"?Eb({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:u=>e.debugCallMethod=u,onCallParamsChange:u=>e.debugCallParams=u,onRefresh:()=>Ns(e),onCall:()=>qp(e)}):k}

        ${e.tab==="logs"?Vb({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:u=>e.logsFilterText=u,onLevelToggle:(u,b)=>{e.logsLevelFilters={...e.logsLevelFilters,[u]:b}},onToggleAutoFollow:u=>e.logsAutoFollow=u,onRefresh:()=>Ao(e,{reset:!0}),onExport:(u,b)=>e.exportLogs(u,b),onScroll:u=>e.handleLogsScroll(u)}):k}
      </main>
      ${Hb(e)}
      ${zb(e)}
      ${e.toolLibraryMcpEditModalOpen&&e.toolLibraryMcpEditServerKey?(()=>{const u=e.toolLibraryMcpEditServerKey,b=e.configForm??e.configSnapshot?.config,x=e.configSnapshot?.config,M=b?.mcp,E=x?.mcp,T=M?.servers?.[u]??E?.servers?.[u]??{};return Q1({open:!0,serverKey:u,entry:T,editMode:e.mcpEditMode,editConnectionType:e.mcpEditConnectionType,formDirty:e.mcpFormDirty,rawJson:e.mcpRawJson,rawError:e.mcpRawError,saving:e.configSaving,onFormPatch:(N,_)=>T0(e,N,_),onRawChange:(N,_)=>L0(e,N,_),onEditModeChange:N=>e.mcpEditMode=N,onEditConnectionTypeChange:N=>A0(e,N),onSave:()=>{_0(e),e.toolLibraryMcpEditModalOpen=!1,e.toolLibraryMcpEditServerKey="",ee(e)},onCancel:()=>{P0(e),e.toolLibraryMcpEditModalOpen=!1,e.toolLibraryMcpEditServerKey=""}})})():k}
      ${e.digitalEmployeeEditModalOpen?zf({editModalOpen:!0,editId:e.digitalEmployeeEditId,editName:e.digitalEmployeeEditName,editDescription:e.digitalEmployeeEditDescription,editPrompt:e.digitalEmployeeEditPrompt,editMcpJson:e.digitalEmployeeEditMcpJson,editMcpMode:e.digitalEmployeeEditMcpMode,editMcpItems:e.digitalEmployeeEditMcpItems??[],onEditMcpModeChange:u=>{e.digitalEmployeeEditMcpMode=u},onEditMcpAddItem:()=>{const u=e.digitalEmployeeEditMcpItems??[];e.digitalEmployeeEditMcpItems=[...u,{id:Ye(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onEditMcpRemoveItem:u=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).filter(b=>b.id!==u)},onEditMcpCollapsedChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,collapsed:b}:x)},onEditMcpKeyChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,key:b}:x)},onEditMcpEditModeChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,editMode:b}:x)},onEditMcpConnectionTypeChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,connectionType:b}:x)},onEditMcpFormPatch:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,draft:{...x.draft??{},...b??{}}}:x)},onEditMcpRawChange:(u,b)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(x=>x.id===u?{...x,rawJson:b,rawError:null}:x)},editSkillNames:e.digitalEmployeeEditSkillNames??[],editSkillFilesToUpload:e.digitalEmployeeEditSkillFilesToUpload??[],editSkillsToDelete:e.digitalEmployeeEditSkillsToDelete??[],editWeWorkGroupBotKey:e.digitalEmployeeEditWeWorkGroupBotKey,editError:e.digitalEmployeeEditError,editBusy:e.digitalEmployeeEditBusy,onEditClose:()=>{e.digitalEmployeeEditBusy||(e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditError=null,e.digitalEmployeeEditMcpMode="raw",e.digitalEmployeeEditMcpItems=[])},onEditDescriptionChange:u=>{e.digitalEmployeeEditDescription=u},onEditPromptChange:u=>{e.digitalEmployeeEditPrompt=u},onEditWeWorkGroupBotKeyChange:u=>{e.digitalEmployeeEditWeWorkGroupBotKey=u},onEditMcpJsonChange:u=>{e.digitalEmployeeEditMcpJson=u},onEditSkillFilesChange:u=>{e.digitalEmployeeEditSkillFilesToUpload=u??[]},onEditSkillDelete:u=>{const b=e.digitalEmployeeEditSkillsToDelete??[];b.includes(u)||(e.digitalEmployeeEditSkillsToDelete=[...b,u])},onEditSkillUndoDelete:u=>{e.digitalEmployeeEditSkillsToDelete=(e.digitalEmployeeEditSkillsToDelete??[]).filter(b=>b!==u)},onEditSubmit:async()=>{if(e.digitalEmployeeEditMcpMode==="builder"){const u=e.digitalEmployeeEditMcpItems??[],b={},x=new Set;let M=null;const E=u.map(T=>({...T,rawError:null}));for(let T=0;T<E.length;T++){const N=E[T],_=N.key?.trim()??"";if(_){if(x.has(_)){M??=`MCP key 重复：${_}`;continue}if(x.add(_),N.editMode==="raw"){const I=N.rawJson?.trim()??"";if(!I)continue;try{const H=JSON.parse(I);if(!H||typeof H!="object"||Array.isArray(H)){N.rawError="JSON 必须是对象",M??=`MCP ${_} 的 JSON 无效`;continue}b[_]=H}catch{N.rawError="JSON 格式无效",M??=`MCP ${_} 的 JSON 无效`;continue}}else{const I=N.draft??{};if(N.connectionType==="stdio"&&!I.command?.trim()){M??=`MCP ${_} 缺少 command`;continue}if(N.connectionType==="url"&&!I.url?.trim()){M??=`MCP ${_} 缺少 url`;continue}if(N.connectionType==="service"&&(!I.service?.trim()||!I.serviceUrl?.trim())){M??=`MCP ${_} 缺少 service/serviceUrl`;continue}b[_]=I}}}if(e.digitalEmployeeEditMcpItems=E,e.digitalEmployeeEditMcpJson=Object.keys(b).length>0?JSON.stringify(b,null,2):"",M){e.digitalEmployeeEditError=M;return}}await al(e),e.digitalEmployeeEditError||(e.digitalEmployeeEditModalOpen=!1,Ae(e),e.tab==="employeeMarket"&&(e.employeeMarketError=null,$a({q:e.employeeMarketQuery},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()}).then(u=>e.employeeMarketItems=u)))}}):k}
    </div>
    ${Qb({model:e.nativeDialog,promptValue:e.nativePromptInput,onPromptInput:u=>e.handleNativePromptInput(u),onConfirm:()=>e.handleNativeDialogConfirm(),onCancel:()=>e.handleNativeDialogCancel()})}
    ${W0(e,S)}
  `}var q0=Object.defineProperty,V0=Object.getOwnPropertyDescriptor,v=(e,t,n,s)=>{for(var a=s>1?void 0:s?V0(t,n):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,n,a):i(a))||a);return s&&a&&q0(t,n,a),a};const Ia=$f();l2();function j0(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let h=class extends nn{constructor(){super(...arguments),this.settings=xg(),this.password="",this.tab="message",this.onboarding=j0(),this.isDesktopShell=po(),this.isWindowsDesktop=!1,this.isWindowMaximised=!1,this.connected=!1,this.theme=this.settings.theme??"light",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=Ia.name,this.assistantAvatar=Ia.avatar,this.assistantAgentId=Ia.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatModelRef=null,this.chatQueue=[],this.chatAttachments=[],this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="raw",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.weworkQrModalOpen=!1,this.weworkQrModalLoading=!1,this.weworkQrModalPolling=!1,this.weworkQrModalSuccess=!1,this.weworkQrModalError=null,this.weworkQrModalReplaceWarn=!1,this.weworkQrModalAuthUrl=null,this.weworkQrModalGenPageUrl=null,this.weixinQrModalOpen=!1,this.weixinQrModalLoading=!1,this.weixinQrModalPolling=!1,this.weixinQrModalSuccess=!1,this.weixinQrModalError=null,this.weixinQrModalReplaceWarn=!1,this.weixinQrModalImageSrc=null,this.weixinQrModalScanPageUrl=null,this.weixinQrModalScanned=!1,this.nativeDialog=null,this.nativePromptInput="",this.weworkQrPollTimer=null,this.weworkQrSuccessCloseTimer=null,this.weixinQrPollAbort=!1,this.weixinQrSuccessCloseTimer=null,this.weixinQrSessionQrcode="",this.weixinQrSessionBaseUrl="",this.weixinQrSessionBotType="",this.nativeResolveConfirm=null,this.nativeResolveAlert=null,this.nativeResolvePrompt=null,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.channelsSelectedChannelId=null,this.mcpSelectedKey=null,this.mcpViewMode="card",this.mcpEditMode="form",this.mcpEditConnectionType="stdio",this.mcpFormDirty=!1,this.mcpRawJson="",this.mcpRawError=null,this.mcpAddModalOpen=!1,this.mcpAddName="",this.mcpAddDraft={},this.mcpAddConnectionType="stdio",this.mcpAddEditMode="form",this.mcpAddRawJson="{}",this.mcpAddRawError=null,this.llmTraceLoading=!1,this.llmTraceResult=null,this.llmTraceError=null,this.llmTraceMode="active",this.llmTraceSearch="",this.llmTraceEnabled=!1,this.llmTraceSaving=!1,this.llmTraceViewContent=null,this.llmTraceViewingSessionId=null,this.llmTraceViewLoading=!1,this.securityForm=null,this.approvalsLoading=!1,this.approvalsResult=null,this.approvalsError=null,this.approvalBannerVisible=!1,this.approvalBannerPollInitialized=!1,this.approvalBannerBaselineIds=[],this.approvalBannerPendingCount=0,this.modelsSelectedProvider=null,this.modelsProviderSearchQuery="",this.modelsViewMode="card",this.modelsFormDirty=!1,this.modelsAddProviderModalOpen=!1,this.modelsAddProviderForm={providerId:"",displayName:"",baseUrl:"",apiKey:"",apiKeyPrefix:""},this.modelsAddModelModalOpen=!1,this.modelsAddModelForm={modelId:"",modelName:"",contextWindow:"",maxTokens:""},this.modelsUseModelModalOpen=!1,this.modelsUseModelModalProvider=null,this.modelsSaveError=null,this.modelLibraryCategory="__all__",this.modelLibrarySelectedProvider=null,this.skillsSelectedSkillKey=null,this.skillsSkillDocContent=null,this.skillsSkillDocLoading=!1,this.skillsSkillDocError=null,this.skillsViewMode="card",this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionEditingKey=null,this.sessionOverflow=null,this.sessionSidebarQuery="",this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.sessionsBulkMode=!1,this.sessionsSelectedKeys=[],this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...yf},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.cronAddModalOpen=!1,this.cronEditModalOpen=!1,this.cronEditJobId=null,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.skillsAddModalOpen=!1,this.skillsUploadName="",this.skillsUploadFiles=[],this.skillsUploadError=null,this.skillsUploadTemplate=null,this.skillsUploadBusy=!1,this.digitalEmployeesLoading=!1,this.digitalEmployeesError=null,this.digitalEmployeesFilter="",this.digitalEmployeesViewMode="list",this.digitalEmployees=[],this.digitalEmployeeCreateModalOpen=!1,this.digitalEmployeeCreateName="",this.digitalEmployeeCreateDescription="",this.digitalEmployeeCreatePrompt="",this.digitalEmployeeCreateError=null,this.digitalEmployeeCreateBusy=!1,this.digitalEmployeeAdvancedOpen=!1,this.digitalEmployeeCreateMcpMode="builder",this.digitalEmployeeCreateMcpJson="",this.digitalEmployeeCreateMcpItems=[],this.digitalEmployeeSkillUploadName="",this.digitalEmployeeSkillUploadFiles=[],this.digitalEmployeeSkillUploadError=null,this.digitalEmployeeSkillUploadBusy=!1,this.digitalEmployeeEditModalOpen=!1,this.digitalEmployeeEditId="",this.digitalEmployeeEditName="",this.digitalEmployeeEditDescription="",this.digitalEmployeeEditPrompt="",this.digitalEmployeeEditMcpJson="",this.digitalEmployeeEditMcpMode="raw",this.digitalEmployeeEditMcpItems=[],this.digitalEmployeeEditSkillNames=[],this.digitalEmployeeEditSkillFilesToUpload=[],this.digitalEmployeeEditSkillsToDelete=[],this.digitalEmployeeEditEnabled=!0,this.digitalEmployeeEditWeWorkGroupBotKey="",this.digitalEmployeeEditError=null,this.digitalEmployeeEditBusy=!1,this.employeeMarketLoadedOnce=!1,this.employeeMarketLoading=!1,this.employeeMarketError=null,this.employeeMarketQuery="",this.employeeMarketCategory="__all__",this.employeeMarketViewMode="card",this.employeeMarketItems=[],this.employeeMarketSelectedId=null,this.employeeMarketSelectedDetail=null,this.employeeMarketInstalledRemoteIds=new Set,this.employeeMarketRemoteToLocal={},this.employeeMarketInstallingId=null,this.skillLibraryLoadedOnce=!1,this.skillLibraryLoading=!1,this.skillLibraryError=null,this.skillLibraryQuery="",this.skillLibraryCategory="__all__",this.skillLibraryStatus="__all__",this.skillLibraryItems=[],this.skillLibrarySelectedFolder=null,this.skillLibrarySelectedDetail=null,this.skillLibraryInstallingFolder=null,this.skillLibraryInstallSuccess=null,this.skillLibraryEditModalOpen=!1,this.skillLibraryEditSkillKey=null,this.skillLibraryEditFiles=[],this.skillLibraryEditSelectedFile=null,this.skillLibraryEditContent="",this.skillLibraryEditOriginalContent="",this.skillLibraryEditLoading=!1,this.skillLibraryEditSaving=!1,this.skillLibraryEditError=null,this.skillLibraryEditSyntaxError=null,this.skillLibraryEditSuccessMessage=null,this.toolLibraryLoadedOnce=!1,this.toolLibraryLoading=!1,this.toolLibraryError=null,this.toolLibraryQuery="",this.toolLibraryCategory="__all__",this.toolLibraryItems=[],this.toolLibrarySelectedId=null,this.toolLibrarySelectedDetail=null,this.toolLibraryInstalledRemoteIds=new Set,this.toolLibraryInstalledMcpMap=new Map,this.toolLibraryInstallingId=null,this.toolLibraryMcpEditModalOpen=!1,this.toolLibraryMcpEditServerKey="",this.tutorialsLoadedOnce=!1,this.tutorialsLoading=!1,this.tutorialsError=null,this.tutorialCategories=[],this.tutorialsQuery="",this.tutorialsSelectedCategoryId=null,this.tutorialsPlayingLink=null,this.aboutUninstallModalOpen=!1,this.aboutUninstallMode="program",this.aboutUninstallLoading=!1,this.aboutUninstallError=null,this.aboutClearWorkspaceLoading=!1,this.aboutClearWorkspaceError=null,this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...vf},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.approvalBannerPollInterval=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.chatConversationOnly=!0,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>Ug(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null,this.desktopWindowResizeHandler=null,this.sessionOverflowEscapeHandler=e=>{if(e.key==="Escape"){if(this.nativeDialog){this.nativeDialog.kind==="alert"?this.handleNativeDialogConfirm():this.handleNativeDialogCancel();return}this.sessionOverflow&&(this.sessionOverflow=null)}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),tp(this),document.addEventListener("keydown",this.sessionOverflowEscapeHandler),Rf(this),this.initialiseDesktopWindowChrome()}firstUpdated(){Nf(this)}disconnectedCallback(){np(this),document.removeEventListener("keydown",this.sessionOverflowEscapeHandler),this.teardownDesktopWindowChrome(),Uf(this),super.disconnectedCallback()}updated(e){Ff(this,e)}connect(){cd(this)}handleChatScroll(e){Wp(this,e)}handleLogsScroll(e){Hp(this,e)}exportLogs(e,t){zp(e,t)}resetToolStream(){zn(this)}resetChatScroll(){Fa(this)}scrollToBottom(){Fa(this),Fn(this,!0)}async loadAssistantIdentity(){await ad(this)}applySettings(e){Nt(this,e)}setTab(e){Lg(this,e)}setTheme(e,t){_g(this,e,t)}async loadOverview(){await Jc(this)}async loadCron(){await en(this)}async handleAbortChat(){await ed(this)}removeQueuedMessage(e){pf(this,e)}async handleSendChat(e,t){await mf(this,e,t)}async handleWhatsAppStart(e){await Ap(this,e)}async handleWhatsAppWait(){await Ep(this)}async handleWhatsAppLogout(){await Tp(this)}async handleWeWorkQrStart(){await kp(this)}handleWeWorkQrModalClose(){$p(this)}async handleWeixinQrStart(){await Cp(this)}handleWeixinQrModalClose(){Mp(this)}async handleChannelConfigSave(){await Lp(this)}async handleChannelConfigReload(){await _p(this)}handleNostrProfileEdit(e,t){Ip(this,e,t)}handleNostrProfileCancel(){Dp(this)}handleNostrProfileFieldChange(e,t){Rp(this,e,t)}async handleNostrProfileSave(){await Up(this)}async handleNostrProfileImport(){await Op(this)}handleNostrProfileToggleAdvanced(){Np(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}dismissApprovalBanner(){this.approvalBannerVisible=!1}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,Nt(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}showConfirm(e){return new Promise(t=>{this.nativeResolveConfirm=t,this.nativeDialog={kind:"confirm",message:e}})}showAlert(e){return new Promise(t=>{this.nativeResolveAlert=t,this.nativeDialog={kind:"alert",message:e}})}showPrompt(e,t=""){return new Promise(n=>{this.nativePromptInput=t,this.nativeResolvePrompt=n,this.nativeDialog={kind:"prompt",message:e,defaultValue:t}})}handleNativeDialogConfirm(){const e=this.nativeDialog;e&&(e.kind==="alert"?this.nativeResolveAlert?.():e.kind==="confirm"?this.nativeResolveConfirm?.(!0):this.nativeResolvePrompt?.(this.nativePromptInput),this.clearNativeDialogState())}handleNativeDialogCancel(){const e=this.nativeDialog;e&&(e.kind==="confirm"?this.nativeResolveConfirm?.(!1):e.kind==="prompt"&&this.nativeResolvePrompt?.(null),this.clearNativeDialogState())}handleNativePromptInput(e){this.nativePromptInput=e}async refreshWindowMaximised(){if(!this.isWindowsDesktop){this.isWindowMaximised=!1;return}try{const e=await this.getDesktopRuntime()?.WindowIsMaximised?.();this.isWindowMaximised=!!e}catch{this.isWindowMaximised=!1}}handleWindowMinimise(){this.isWindowsDesktop&&this.getDesktopRuntime()?.WindowMinimise?.()}handleWindowToggleMaximise(){this.isWindowsDesktop&&(this.getDesktopRuntime()?.WindowToggleMaximise?.(),window.setTimeout(()=>{this.refreshWindowMaximised()},60))}handleWindowClose(){this.isWindowsDesktop&&this.getDesktopRuntime()?.Quit?.()}handleTopbarDoubleClick(e){!this.isWindowsDesktop||e.composedPath().find(n=>n instanceof Element)?.closest(".topbar__no-drag")||this.handleWindowToggleMaximise()}clearNativeDialogState(){this.nativeDialog=null,this.nativePromptInput="",this.nativeResolveConfirm=null,this.nativeResolveAlert=null,this.nativeResolvePrompt=null}getDesktopRuntime(){return window.runtime??null}async initialiseDesktopWindowChrome(){if(this.isDesktopShell=po(),!!this.isDesktopShell)try{const e=(await this.getDesktopRuntime()?.Environment?.())?.platform??"";if(this.isWindowsDesktop=e==="windows",!this.isWindowsDesktop){this.isWindowMaximised=!1;return}await this.refreshWindowMaximised(),this.desktopWindowResizeHandler||(this.desktopWindowResizeHandler=()=>{this.refreshWindowMaximised()},window.addEventListener("resize",this.desktopWindowResizeHandler))}catch{this.isWindowsDesktop=!1,this.isWindowMaximised=!1}}teardownDesktopWindowChrome(){this.desktopWindowResizeHandler&&(window.removeEventListener("resize",this.desktopWindowResizeHandler),this.desktopWindowResizeHandler=null)}render(){return K0(this)}};v([y()],h.prototype,"settings",2);v([y()],h.prototype,"password",2);v([y()],h.prototype,"tab",2);v([y()],h.prototype,"onboarding",2);v([y()],h.prototype,"isDesktopShell",2);v([y()],h.prototype,"isWindowsDesktop",2);v([y()],h.prototype,"isWindowMaximised",2);v([y()],h.prototype,"connected",2);v([y()],h.prototype,"theme",2);v([y()],h.prototype,"themeResolved",2);v([y()],h.prototype,"hello",2);v([y()],h.prototype,"lastError",2);v([y()],h.prototype,"eventLog",2);v([y()],h.prototype,"assistantName",2);v([y()],h.prototype,"assistantAvatar",2);v([y()],h.prototype,"assistantAgentId",2);v([y()],h.prototype,"sessionKey",2);v([y()],h.prototype,"chatLoading",2);v([y()],h.prototype,"chatSending",2);v([y()],h.prototype,"chatMessage",2);v([y()],h.prototype,"chatMessages",2);v([y()],h.prototype,"chatToolMessages",2);v([y()],h.prototype,"chatStream",2);v([y()],h.prototype,"chatStreamStartedAt",2);v([y()],h.prototype,"chatRunId",2);v([y()],h.prototype,"compactionStatus",2);v([y()],h.prototype,"chatAvatarUrl",2);v([y()],h.prototype,"chatThinkingLevel",2);v([y()],h.prototype,"chatModelRef",2);v([y()],h.prototype,"chatQueue",2);v([y()],h.prototype,"chatAttachments",2);v([y()],h.prototype,"sidebarOpen",2);v([y()],h.prototype,"sidebarContent",2);v([y()],h.prototype,"sidebarError",2);v([y()],h.prototype,"splitRatio",2);v([y()],h.prototype,"nodesLoading",2);v([y()],h.prototype,"nodes",2);v([y()],h.prototype,"devicesLoading",2);v([y()],h.prototype,"devicesError",2);v([y()],h.prototype,"devicesList",2);v([y()],h.prototype,"execApprovalsLoading",2);v([y()],h.prototype,"execApprovalsSaving",2);v([y()],h.prototype,"execApprovalsDirty",2);v([y()],h.prototype,"execApprovalsSnapshot",2);v([y()],h.prototype,"execApprovalsForm",2);v([y()],h.prototype,"execApprovalsSelectedAgent",2);v([y()],h.prototype,"execApprovalsTarget",2);v([y()],h.prototype,"execApprovalsTargetNodeId",2);v([y()],h.prototype,"execApprovalQueue",2);v([y()],h.prototype,"execApprovalBusy",2);v([y()],h.prototype,"execApprovalError",2);v([y()],h.prototype,"pendingGatewayUrl",2);v([y()],h.prototype,"configLoading",2);v([y()],h.prototype,"configRaw",2);v([y()],h.prototype,"configRawOriginal",2);v([y()],h.prototype,"configValid",2);v([y()],h.prototype,"configIssues",2);v([y()],h.prototype,"configSaving",2);v([y()],h.prototype,"configApplying",2);v([y()],h.prototype,"updateRunning",2);v([y()],h.prototype,"applySessionKey",2);v([y()],h.prototype,"configSnapshot",2);v([y()],h.prototype,"configSchema",2);v([y()],h.prototype,"configSchemaVersion",2);v([y()],h.prototype,"configSchemaLoading",2);v([y()],h.prototype,"configUiHints",2);v([y()],h.prototype,"configForm",2);v([y()],h.prototype,"configFormOriginal",2);v([y()],h.prototype,"configFormDirty",2);v([y()],h.prototype,"configFormMode",2);v([y()],h.prototype,"configSearchQuery",2);v([y()],h.prototype,"configActiveSection",2);v([y()],h.prototype,"configActiveSubsection",2);v([y()],h.prototype,"channelsLoading",2);v([y()],h.prototype,"channelsSnapshot",2);v([y()],h.prototype,"channelsError",2);v([y()],h.prototype,"channelsLastSuccess",2);v([y()],h.prototype,"whatsappLoginMessage",2);v([y()],h.prototype,"whatsappLoginQrDataUrl",2);v([y()],h.prototype,"whatsappLoginConnected",2);v([y()],h.prototype,"whatsappBusy",2);v([y()],h.prototype,"weworkQrModalOpen",2);v([y()],h.prototype,"weworkQrModalLoading",2);v([y()],h.prototype,"weworkQrModalPolling",2);v([y()],h.prototype,"weworkQrModalSuccess",2);v([y()],h.prototype,"weworkQrModalError",2);v([y()],h.prototype,"weworkQrModalReplaceWarn",2);v([y()],h.prototype,"weworkQrModalAuthUrl",2);v([y()],h.prototype,"weworkQrModalGenPageUrl",2);v([y()],h.prototype,"weixinQrModalOpen",2);v([y()],h.prototype,"weixinQrModalLoading",2);v([y()],h.prototype,"weixinQrModalPolling",2);v([y()],h.prototype,"weixinQrModalSuccess",2);v([y()],h.prototype,"weixinQrModalError",2);v([y()],h.prototype,"weixinQrModalReplaceWarn",2);v([y()],h.prototype,"weixinQrModalImageSrc",2);v([y()],h.prototype,"weixinQrModalScanPageUrl",2);v([y()],h.prototype,"weixinQrModalScanned",2);v([y()],h.prototype,"nativeDialog",2);v([y()],h.prototype,"nativePromptInput",2);v([y()],h.prototype,"nostrProfileFormState",2);v([y()],h.prototype,"nostrProfileAccountId",2);v([y()],h.prototype,"channelsSelectedChannelId",2);v([y()],h.prototype,"mcpSelectedKey",2);v([y()],h.prototype,"mcpViewMode",2);v([y()],h.prototype,"mcpEditMode",2);v([y()],h.prototype,"mcpEditConnectionType",2);v([y()],h.prototype,"mcpFormDirty",2);v([y()],h.prototype,"mcpRawJson",2);v([y()],h.prototype,"mcpRawError",2);v([y()],h.prototype,"mcpAddModalOpen",2);v([y()],h.prototype,"mcpAddName",2);v([y()],h.prototype,"mcpAddDraft",2);v([y()],h.prototype,"mcpAddConnectionType",2);v([y()],h.prototype,"mcpAddEditMode",2);v([y()],h.prototype,"mcpAddRawJson",2);v([y()],h.prototype,"mcpAddRawError",2);v([y()],h.prototype,"llmTraceLoading",2);v([y()],h.prototype,"llmTraceResult",2);v([y()],h.prototype,"llmTraceError",2);v([y()],h.prototype,"llmTraceMode",2);v([y()],h.prototype,"llmTraceSearch",2);v([y()],h.prototype,"llmTraceEnabled",2);v([y()],h.prototype,"llmTraceSaving",2);v([y()],h.prototype,"llmTraceViewContent",2);v([y()],h.prototype,"llmTraceViewingSessionId",2);v([y()],h.prototype,"llmTraceViewLoading",2);v([y()],h.prototype,"securityForm",2);v([y()],h.prototype,"approvalsLoading",2);v([y()],h.prototype,"approvalsResult",2);v([y()],h.prototype,"approvalsError",2);v([y()],h.prototype,"approvalBannerVisible",2);v([y()],h.prototype,"approvalBannerPollInitialized",2);v([y()],h.prototype,"approvalBannerBaselineIds",2);v([y()],h.prototype,"approvalBannerPendingCount",2);v([y()],h.prototype,"modelsSelectedProvider",2);v([y()],h.prototype,"modelsProviderSearchQuery",2);v([y()],h.prototype,"modelsViewMode",2);v([y()],h.prototype,"modelsFormDirty",2);v([y()],h.prototype,"modelsAddProviderModalOpen",2);v([y()],h.prototype,"modelsAddProviderForm",2);v([y()],h.prototype,"modelsAddModelModalOpen",2);v([y()],h.prototype,"modelsAddModelForm",2);v([y()],h.prototype,"modelsUseModelModalOpen",2);v([y()],h.prototype,"modelsUseModelModalProvider",2);v([y()],h.prototype,"modelsSaveError",2);v([y()],h.prototype,"modelLibraryCategory",2);v([y()],h.prototype,"modelLibrarySelectedProvider",2);v([y()],h.prototype,"skillsSelectedSkillKey",2);v([y()],h.prototype,"skillsSkillDocContent",2);v([y()],h.prototype,"skillsSkillDocLoading",2);v([y()],h.prototype,"skillsSkillDocError",2);v([y()],h.prototype,"skillsViewMode",2);v([y()],h.prototype,"presenceLoading",2);v([y()],h.prototype,"presenceEntries",2);v([y()],h.prototype,"presenceError",2);v([y()],h.prototype,"presenceStatus",2);v([y()],h.prototype,"agentsLoading",2);v([y()],h.prototype,"agentsList",2);v([y()],h.prototype,"agentsError",2);v([y()],h.prototype,"agentsSelectedId",2);v([y()],h.prototype,"agentsPanel",2);v([y()],h.prototype,"agentFilesLoading",2);v([y()],h.prototype,"agentFilesError",2);v([y()],h.prototype,"agentFilesList",2);v([y()],h.prototype,"agentFileContents",2);v([y()],h.prototype,"agentFileDrafts",2);v([y()],h.prototype,"agentFileActive",2);v([y()],h.prototype,"agentFileSaving",2);v([y()],h.prototype,"agentIdentityLoading",2);v([y()],h.prototype,"agentIdentityError",2);v([y()],h.prototype,"agentIdentityById",2);v([y()],h.prototype,"agentSkillsLoading",2);v([y()],h.prototype,"agentSkillsError",2);v([y()],h.prototype,"agentSkillsReport",2);v([y()],h.prototype,"agentSkillsAgentId",2);v([y()],h.prototype,"sessionsLoading",2);v([y()],h.prototype,"sessionsResult",2);v([y()],h.prototype,"sessionEditingKey",2);v([y()],h.prototype,"sessionOverflow",2);v([y()],h.prototype,"sessionSidebarQuery",2);v([y()],h.prototype,"sessionsError",2);v([y()],h.prototype,"sessionsFilterActive",2);v([y()],h.prototype,"sessionsFilterLimit",2);v([y()],h.prototype,"sessionsIncludeGlobal",2);v([y()],h.prototype,"sessionsIncludeUnknown",2);v([y()],h.prototype,"sessionsBulkMode",2);v([y()],h.prototype,"sessionsSelectedKeys",2);v([y()],h.prototype,"usageLoading",2);v([y()],h.prototype,"usageResult",2);v([y()],h.prototype,"usageCostSummary",2);v([y()],h.prototype,"usageError",2);v([y()],h.prototype,"usageStartDate",2);v([y()],h.prototype,"usageEndDate",2);v([y()],h.prototype,"usageSelectedSessions",2);v([y()],h.prototype,"usageSelectedDays",2);v([y()],h.prototype,"usageSelectedHours",2);v([y()],h.prototype,"usageChartMode",2);v([y()],h.prototype,"usageDailyChartMode",2);v([y()],h.prototype,"usageTimeSeriesMode",2);v([y()],h.prototype,"usageTimeSeriesBreakdownMode",2);v([y()],h.prototype,"usageTimeSeries",2);v([y()],h.prototype,"usageTimeSeriesLoading",2);v([y()],h.prototype,"usageSessionLogs",2);v([y()],h.prototype,"usageSessionLogsLoading",2);v([y()],h.prototype,"usageSessionLogsExpanded",2);v([y()],h.prototype,"usageQuery",2);v([y()],h.prototype,"usageQueryDraft",2);v([y()],h.prototype,"usageSessionSort",2);v([y()],h.prototype,"usageSessionSortDir",2);v([y()],h.prototype,"usageRecentSessions",2);v([y()],h.prototype,"usageTimeZone",2);v([y()],h.prototype,"usageContextExpanded",2);v([y()],h.prototype,"usageHeaderPinned",2);v([y()],h.prototype,"usageSessionsTab",2);v([y()],h.prototype,"usageVisibleColumns",2);v([y()],h.prototype,"usageLogFilterRoles",2);v([y()],h.prototype,"usageLogFilterTools",2);v([y()],h.prototype,"usageLogFilterHasTools",2);v([y()],h.prototype,"usageLogFilterQuery",2);v([y()],h.prototype,"cronLoading",2);v([y()],h.prototype,"cronJobs",2);v([y()],h.prototype,"cronStatus",2);v([y()],h.prototype,"cronError",2);v([y()],h.prototype,"cronForm",2);v([y()],h.prototype,"cronRunsJobId",2);v([y()],h.prototype,"cronRuns",2);v([y()],h.prototype,"cronBusy",2);v([y()],h.prototype,"cronAddModalOpen",2);v([y()],h.prototype,"cronEditModalOpen",2);v([y()],h.prototype,"cronEditJobId",2);v([y()],h.prototype,"skillsLoading",2);v([y()],h.prototype,"skillsReport",2);v([y()],h.prototype,"skillsError",2);v([y()],h.prototype,"skillsFilter",2);v([y()],h.prototype,"skillEdits",2);v([y()],h.prototype,"skillsBusyKey",2);v([y()],h.prototype,"skillMessages",2);v([y()],h.prototype,"skillsAddModalOpen",2);v([y()],h.prototype,"skillsUploadName",2);v([y()],h.prototype,"skillsUploadFiles",2);v([y()],h.prototype,"skillsUploadError",2);v([y()],h.prototype,"skillsUploadTemplate",2);v([y()],h.prototype,"skillsUploadBusy",2);v([y()],h.prototype,"digitalEmployeesLoading",2);v([y()],h.prototype,"digitalEmployeesError",2);v([y()],h.prototype,"digitalEmployeesFilter",2);v([y()],h.prototype,"digitalEmployeesViewMode",2);v([y()],h.prototype,"digitalEmployees",2);v([y()],h.prototype,"digitalEmployeeCreateModalOpen",2);v([y()],h.prototype,"digitalEmployeeCreateName",2);v([y()],h.prototype,"digitalEmployeeCreateDescription",2);v([y()],h.prototype,"digitalEmployeeCreatePrompt",2);v([y()],h.prototype,"digitalEmployeeCreateError",2);v([y()],h.prototype,"digitalEmployeeCreateBusy",2);v([y()],h.prototype,"digitalEmployeeAdvancedOpen",2);v([y()],h.prototype,"digitalEmployeeCreateMcpMode",2);v([y()],h.prototype,"digitalEmployeeCreateMcpJson",2);v([y()],h.prototype,"digitalEmployeeCreateMcpItems",2);v([y()],h.prototype,"digitalEmployeeSkillUploadName",2);v([y()],h.prototype,"digitalEmployeeSkillUploadFiles",2);v([y()],h.prototype,"digitalEmployeeSkillUploadError",2);v([y()],h.prototype,"digitalEmployeeSkillUploadBusy",2);v([y()],h.prototype,"digitalEmployeeEditModalOpen",2);v([y()],h.prototype,"digitalEmployeeEditId",2);v([y()],h.prototype,"digitalEmployeeEditName",2);v([y()],h.prototype,"digitalEmployeeEditDescription",2);v([y()],h.prototype,"digitalEmployeeEditPrompt",2);v([y()],h.prototype,"digitalEmployeeEditMcpJson",2);v([y()],h.prototype,"digitalEmployeeEditMcpMode",2);v([y()],h.prototype,"digitalEmployeeEditMcpItems",2);v([y()],h.prototype,"digitalEmployeeEditSkillNames",2);v([y()],h.prototype,"digitalEmployeeEditSkillFilesToUpload",2);v([y()],h.prototype,"digitalEmployeeEditSkillsToDelete",2);v([y()],h.prototype,"digitalEmployeeEditEnabled",2);v([y()],h.prototype,"digitalEmployeeEditWeWorkGroupBotKey",2);v([y()],h.prototype,"digitalEmployeeEditError",2);v([y()],h.prototype,"digitalEmployeeEditBusy",2);v([y()],h.prototype,"employeeMarketLoadedOnce",2);v([y()],h.prototype,"employeeMarketLoading",2);v([y()],h.prototype,"employeeMarketError",2);v([y()],h.prototype,"employeeMarketQuery",2);v([y()],h.prototype,"employeeMarketCategory",2);v([y()],h.prototype,"employeeMarketViewMode",2);v([y()],h.prototype,"employeeMarketItems",2);v([y()],h.prototype,"employeeMarketSelectedId",2);v([y()],h.prototype,"employeeMarketSelectedDetail",2);v([y()],h.prototype,"employeeMarketInstalledRemoteIds",2);v([y()],h.prototype,"employeeMarketRemoteToLocal",2);v([y()],h.prototype,"employeeMarketInstallingId",2);v([y()],h.prototype,"skillLibraryLoadedOnce",2);v([y()],h.prototype,"skillLibraryLoading",2);v([y()],h.prototype,"skillLibraryError",2);v([y()],h.prototype,"skillLibraryQuery",2);v([y()],h.prototype,"skillLibraryCategory",2);v([y()],h.prototype,"skillLibraryStatus",2);v([y()],h.prototype,"skillLibraryItems",2);v([y()],h.prototype,"skillLibrarySelectedFolder",2);v([y()],h.prototype,"skillLibrarySelectedDetail",2);v([y()],h.prototype,"skillLibraryInstallingFolder",2);v([y()],h.prototype,"skillLibraryInstallSuccess",2);v([y()],h.prototype,"skillLibraryEditModalOpen",2);v([y()],h.prototype,"skillLibraryEditSkillKey",2);v([y()],h.prototype,"skillLibraryEditFiles",2);v([y()],h.prototype,"skillLibraryEditSelectedFile",2);v([y()],h.prototype,"skillLibraryEditContent",2);v([y()],h.prototype,"skillLibraryEditOriginalContent",2);v([y()],h.prototype,"skillLibraryEditLoading",2);v([y()],h.prototype,"skillLibraryEditSaving",2);v([y()],h.prototype,"skillLibraryEditError",2);v([y()],h.prototype,"skillLibraryEditSyntaxError",2);v([y()],h.prototype,"skillLibraryEditSuccessMessage",2);v([y()],h.prototype,"toolLibraryLoadedOnce",2);v([y()],h.prototype,"toolLibraryLoading",2);v([y()],h.prototype,"toolLibraryError",2);v([y()],h.prototype,"toolLibraryQuery",2);v([y()],h.prototype,"toolLibraryCategory",2);v([y()],h.prototype,"toolLibraryItems",2);v([y()],h.prototype,"toolLibrarySelectedId",2);v([y()],h.prototype,"toolLibrarySelectedDetail",2);v([y()],h.prototype,"toolLibraryInstalledRemoteIds",2);v([y()],h.prototype,"toolLibraryInstalledMcpMap",2);v([y()],h.prototype,"toolLibraryInstallingId",2);v([y()],h.prototype,"toolLibraryMcpEditModalOpen",2);v([y()],h.prototype,"toolLibraryMcpEditServerKey",2);v([y()],h.prototype,"tutorialsLoadedOnce",2);v([y()],h.prototype,"tutorialsLoading",2);v([y()],h.prototype,"tutorialsError",2);v([y()],h.prototype,"tutorialCategories",2);v([y()],h.prototype,"tutorialsQuery",2);v([y()],h.prototype,"tutorialsSelectedCategoryId",2);v([y()],h.prototype,"tutorialsPlayingLink",2);v([y()],h.prototype,"aboutUninstallModalOpen",2);v([y()],h.prototype,"aboutUninstallMode",2);v([y()],h.prototype,"aboutUninstallLoading",2);v([y()],h.prototype,"aboutUninstallError",2);v([y()],h.prototype,"aboutClearWorkspaceLoading",2);v([y()],h.prototype,"aboutClearWorkspaceError",2);v([y()],h.prototype,"debugLoading",2);v([y()],h.prototype,"debugStatus",2);v([y()],h.prototype,"debugHealth",2);v([y()],h.prototype,"debugModels",2);v([y()],h.prototype,"debugHeartbeat",2);v([y()],h.prototype,"debugCallMethod",2);v([y()],h.prototype,"debugCallParams",2);v([y()],h.prototype,"debugCallResult",2);v([y()],h.prototype,"debugCallError",2);v([y()],h.prototype,"logsLoading",2);v([y()],h.prototype,"logsError",2);v([y()],h.prototype,"logsFile",2);v([y()],h.prototype,"logsEntries",2);v([y()],h.prototype,"logsFilterText",2);v([y()],h.prototype,"logsLevelFilters",2);v([y()],h.prototype,"logsAutoFollow",2);v([y()],h.prototype,"logsTruncated",2);v([y()],h.prototype,"logsCursor",2);v([y()],h.prototype,"logsLastFetchAt",2);v([y()],h.prototype,"logsLimit",2);v([y()],h.prototype,"logsMaxBytes",2);v([y()],h.prototype,"logsAtBottom",2);v([y()],h.prototype,"chatNewMessagesBelow",2);v([y()],h.prototype,"chatConversationOnly",2);h=v([nc("openclaw-app")],h);
//# sourceMappingURL=index-Bw-QMXZl.js.map
