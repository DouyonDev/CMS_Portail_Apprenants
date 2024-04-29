"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[4576,9056,3820,7256],{79056:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(51280),l=a(15832),c=a(88496);const m=e=>{const[t,a]=(0,c.useState)(!1);return(0,n.createElement)("div",{className:"cmplz-panel__list__item",style:e.style?e.style:{}},(0,n.createElement)("details",{open:t},(0,n.createElement)("summary",{onClick:e=>(e=>{e.preventDefault(),a(!t)})(e)},e.icon&&(0,n.createElement)(l.default,{name:e.icon}),(0,n.createElement)("h5",{className:"cmplz-panel__list__item__title"},e.summary),(0,n.createElement)("div",{className:"cmplz-panel__list__item__comment"},e.comment),(0,n.createElement)("div",{className:"cmplz-panel__list__item__icons"},e.icons),(0,n.createElement)(l.default,{name:"chevron-down",size:18})),(0,n.createElement)("div",{className:"cmplz-panel__list__item__details"},t&&e.details)))}},54576:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(51280),l=a(88496),c=a(25536),m=a(73820),i=a(47256),r=a(93396),o=a(60312);const s=(0,l.memo)((()=>{const[e,t]=(0,l.useState)(!0),{getFieldValue:a,fields:s}=(0,c.default)(),{privacyStatementsLoaded:p,fetchPrivacyStatementsData:u,privacyStatements:d}=(0,m.default)();return(0,l.useEffect)((()=>{let e="generated"===a("privacy-statement");t(e),!p&&e&&u()}),[s]),!p&&e?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.default,{lines:"3"})):(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",null,e&&0===d.length&&(0,n.createElement)(n.Fragment,null,(0,r.__)("No plugins with suggested statements found.","complianz-gdpr")),!e&&(0,n.createElement)(n.Fragment,null,(0,r.__)("You have chosen to generate your own Privacy Statement, which means the option to add custom text to it is not applicable.","complianz-gdpr")),e&&(0,n.createElement)("div",{className:"cmplz-panel__list"},Array.isArray(d)&&d.map(((e,t)=>(0,n.createElement)(i.default,{key:t,plugin:e,icon:"plugin"}))))))}))},73820:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(30809),l=a(61744);const c=(0,n.Su)(((e,t)=>({privacyStatementsLoaded:!1,privacyStatements:[],fetchPrivacyStatementsData:async()=>{const{privacyStatements:t}=await l.doAction("wp_privacy_policy_data").then((e=>e)).catch((e=>{console.error(e)}));e({privacyStatementsLoaded:!0,privacyStatements:t})}})))},47256:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(51280),l=a(79056),c=a(93396),m=a(15832),i=a(88496),r=a(25536),o=a(24300),s=a.n(o);const p=(0,i.memo)((e=>{const{updateField:t,setChangedField:a,getFieldValue:i}=(0,r.default)();return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.default,{summary:e.plugin.plugin_name,icon:e.icon,icons:(0,n.createElement)(n.Fragment,null,(0,n.createElement)("button",{className:"cmplz-button-icon",onClick:n=>((e,n,l)=>{l.preventDefault();let c=i("custom_privacy_policy_text");c+="<h1>"+e+"</h1>"+n,t("custom_privacy_policy_text",c),a("custom_privacy_policy_text",c)})(e.plugin.plugin_name,e.plugin.policy_text,n)},(0,n.createElement)(m.default,{tooltip:(0,c.__)("Add to annex of Privacy Statement","complianz-gdpr"),name:"plus"})),"na"!==e.plugin.consent_api&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("button",{className:"cmplz-button-icon"},!e.plugin.consent_api&&(0,n.createElement)(m.default,{tooltip:(0,c.__)("Does not conform with the Consent API","complianz-gdpr"),name:"circle",color:"red"}),e.plugin.consent_api&&(0,n.createElement)(m.default,{tooltip:(0,c.__)("Conforms to the Consent API","complianz-gdpr"),name:"circle",color:"green"})))),details:(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"cmplz-details-row",dangerouslySetInnerHTML:{__html:s().sanitize(e.plugin.policy_text)}}))}))}))}}]);