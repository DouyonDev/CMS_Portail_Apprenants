(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10044bd1"],{"0c37":function(e,t,a){"use strict";a("88a8")},"0d3d":function(e,t,a){e.exports=a.p+"img/info-alert.svg"},"3bb8":function(e,t,a){"use strict";a("bf5e")},4181:function(e,t,a){"use strict";a("770d")},"72ca":function(e,t,a){"use strict";a("ab77")},"73ca":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{class:e.featureClass},[t("cky-connect-success"),t("cky-popper",{attrs:{position:e.position,isScrollable:e.isScrollable}},[t("div",{staticClass:"cky-feature-content"},[e._t("default")],2),t("template",{slot:"content"},[t("div",{staticClass:"cky-feature-disabled-notice",attrs:{"data-target":e.target}},[t("div",{staticClass:"cky-feature-disabled-notice-content"},[e.options.account.connected?e._e():[t("p",[e._v(" "+e._s(e.description)+" ")]),t("button",{staticClass:"cky-button",on:{click:function(t){return e.handleNavigate()}}},[e._v(" "+e._s(e.$i18n.__("Connect to Web App","cookie-law-info"))+" ")])]],2)])])],2)],1)},n=[],i=a("c068"),c=a("919d"),o=a("2f62"),l={name:"CkyFeature",mixins:[i["a"]],components:{CkyConnectSuccess:c["a"]},props:{disabled:{type:Boolean,default:!1},name:{type:String,default:""},target:{type:String},requiredPlan:{type:String},position:{type:String,default:"right"},description:{type:String,required:!0,default:""},isScrollable:{type:Boolean,default:!1}},data(){return{hover:!1,hoverInner:!1}},mounted(){},computed:{featureClass(){return{"cky-feature":!0,"cky-feature-disabled":!0===this.disabled,"cky-feature-position-center":"center"===this.position,"cky-feature-position-left":"left"===this.position}},...Object(o["d"])("settings",["options","info"]),connected(){return!!this.options.account.connected}},methods:{handleNavigate(){document.body.classList.remove("cky-app-modal-open"),this.$router.push("dashboard/plans")}}},r=l,d=(a("3bb8"),a("2877")),u=Object(d["a"])(r,s,n,!1,null,null,null);t["a"]=u.exports},"770d":function(e,t,a){},"88a8":function(e,t,a){},a655:function(e){e.exports=JSON.parse('{"notice":{"elements":{"title":"","description":"","privacyLink":"","buttons":{"elements":{"accept":"","reject":"","settings":"","readMore":"","donotSell":""}},"closeButton":""}},"categoryPreview":{"elements":{"buttons":{"elements":{"save":""}}}},"preferenceCenter":{"elements":{"title":"","description":"","showMore":"","showLess":"","category":{"elements":{"alwaysEnabled":"","enable":"","disable":""}},"buttons":{"elements":{"accept":"","save":"","reject":""}},"closeButton":""}},"optoutPopup":{"elements":{"title":"","description":"","optOption":{"elements":{"title":"","enable":"","disable":""}},"gpcOption":{"elements":{"description":""}},"showLess":"","showMore":"","buttons":{"elements":{"cancel":"","confirm":""}},"closeButton":""}},"revisitConsent":{"elements":{"title":""}},"auditTable":{"elements":{"headers":{"elements":{"id":"","duration":"","description":""}},"message":""}},"videoPlaceholder":{"elements":{"title":""}}}')},ab77:function(e,t,a){},ad98:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return e.$route.params.language?t("div",[t("transition",{attrs:{name:"fade"}},[t("router-view")],1)],1):t("div",{staticClass:"cky-section cky-zero--padding cky-zero--margin"},[t("div",{staticClass:"cky-section-header cky-align-center"},[t("div",{staticClass:"cky-section-title"},[t("h3",[e._v(e._s(e.$i18n.__("Languages","cookie-law-info")))])]),t("div",{staticClass:"cky-section-header-actions cky-align-center"},[t("button",{staticClass:"cky-button",attrs:{id:"cky-add-language-btn",disabled:e.disableAddLanguageBtn},on:{click:e.openLanguageModal}},[e._v(" + "+e._s(e.$i18n.__("Add Language","cookie-law-info"))+" ")]),e.showConnectPopup?t("cky-feature",{attrs:{description:e.$i18n.__("Add more languages by connecting to the CookieYes web app.","cookie-law-info"),target:"cky-add-language-btn",name:"custom_branding"}},[t("button",{staticClass:"cky-button-no-style"})]):e._e()],1)]),t("div",{staticClass:"cky-section-content"},[t("div",{staticClass:"cky-row"},[t("div",{staticClass:"cky-col-12"},[t("div",{staticClass:"cky-consent-language-lists"},[t("table",{staticClass:"wp-list-table cky-table"},[t("thead",[t("tr",[t("th",[e._v(e._s(e.$i18n.__("Language List","cookie-law-info")))]),t("th",[e._v(e._s(e.$i18n.__("Language Code","cookie-law-info")))]),t("th"),t("th")])]),e.loading?t("tbody",[t("tr",[t("td",[t("p",{staticClass:"cky-loading-text"},[t("cky-loader"),e._v(" "+e._s(e.$i18n.__("Loading languages","cookie-law-info"))+" ")],1)])])]):t("tbody",e._l(e.selectedLanguages,(function(a){return t("tr",{key:a.code},[t("td",[e._v(e._s(a.name))]),t("td",{staticClass:"cky-language-table-col"},[e._v(" "+e._s(a.code)+" ")]),t("td",[e.defaultLanguage==a.code?t("div",{staticClass:"cky-align-center"},[t("cky-badge",{attrs:{title:e.$i18n.__("Default","cookie-law-info"),type:"info"}})],1):e._e()]),t("td",{staticClass:"cky-language-table-col-actions"},[t("div",{staticClass:"cky-row"},[t("div",{staticClass:"cky-col"},[t("div",{staticClass:"cky-justify-end"},[t("router-link",{attrs:{to:"languages/edit/"+a.code,custom:""},scopedSlots:e._u([{key:"default",fn:function({navigate:a}){return[t("a",{staticClass:"cky-button cky-button-secondary cky-button-small cky-button-icon",on:{click:a}},[t("cky-icon",{attrs:{icon:"editAlt",width:"13"}}),e._v(" "+e._s(e.$i18n.__("Edit Content","cookie-law-info"))+" ")],1)]}}],null,!0)}),t("div",{staticClass:"cky-languages-more-actions",attrs:{disabled:e.defaultLanguage==a.code}},[t("button",{staticClass:"cky-button cky-button-secondary",attrs:{"data-type":"icon"}},[e._v(" ... ")]),t("div",{staticClass:"cky-languages-more-actions-list"},[t("ul",[t("li",[e.defaultLanguage===a.code?t("cky-popper",{attrs:{content:e.$i18n.__("You can't delete the default language.","cookie-law-info")}},[t("a",{class:{"cky-disabled":e.defaultLanguage==a.code},on:{click:function(t){return e.deleteLanguage(a)}}},[e._v(e._s(e.$i18n.__("Delete","cookie-law-info"))+" ")])]):t("a",{on:{click:function(t){return e.deleteLanguage(a)}}},[e._v(e._s(e.$i18n.__("Delete","cookie-law-info"))+" ")])],1),t("li",[t("a",{class:{"cky-disabled":e.defaultLanguage==a.code},on:{click:function(t){return e.setDefault(a,"default")}}},[e._v(e._s(e.$i18n.__("Set as default","cookie-law-info")))])])])])])],1)])])])])})),0)])])])])]),t("cky-language-selector",{ref:"ckyLanguageSelector"})],1)},n=[],i=a("73ca"),c=a("a655"),o=function(){var e=this,t=e._self._c;return t("cky-modal",{ref:"ckyLanguagesModal",staticClass:"cky-app-modal-languages",on:{close:e.closeLanguageModal},scopedSlots:e._u([{key:"header",fn:function(){return[t("h4",[e._v(e._s(e.$i18n.__("Add language","cookie-law-info")))])]},proxy:!0},{key:"body",fn:function(){return[t("div",{staticClass:"cky-row"},[t("div",{staticClass:"cky-col-12"},[t("cky-dropdown",{ref:"languageSelector",staticClass:"cky-dropdown-languages",attrs:{sticky:!0,text:e.$i18n.__("Select prefered language(s)","cookie-law-info"),active:!0},on:{ckyToggleDropDown:e.toggleDropDown}},[t("div",{staticClass:"cky-dropdown-search-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],ref:"ckySearchInput",staticClass:"cky-form-control",attrs:{type:"text",placeholder:e.$i18n.__("Search...","cookie-law-info")},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})]),t("ul",e._l(e.filterLanguages,(function(s){return t("li",{key:s.code},[t("div",{staticClass:"cky-form-group cky-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.tempSelectedLanguages,expression:"tempSelectedLanguages"}],class:{"cky-disable-option":e.disableLabel(s.code)},attrs:{type:"checkbox",id:"cky-checkbox-language-"+s.code,disabled:e.disableCheckBox(s.code)},domProps:{value:s.code,checked:Array.isArray(e.tempSelectedLanguages)?e._i(e.tempSelectedLanguages,s.code)>-1:e.tempSelectedLanguages},on:{change:function(t){var a=e.tempSelectedLanguages,n=t.target,i=!!n.checked;if(Array.isArray(a)){var c=s.code,o=e._i(a,c);n.checked?o<0&&(e.tempSelectedLanguages=a.concat([c])):o>-1&&(e.tempSelectedLanguages=a.slice(0,o).concat(a.slice(o+1)))}else e.tempSelectedLanguages=i}}}),t("label",{class:{"cky-label":!0,"cky-disable-option":e.disableLabel(s.code)},attrs:{for:"cky-checkbox-language-"+s.code}},[e._v(e._s(s.name)+" ("+e._s(s.code)+")")]),t("cky-feature",{class:{"cky-hide-tooltip":e.disableTooltip(s.code)},attrs:{name:"custom_branding",isScrollable:!0,description:e.$i18n.__("Add more languages by connecting to the CookieYes web app.","cookie-law-info")}},[t("button",{staticClass:"cky-button-no-style"})])],1),!e.isTranslated(s.code)&&e.isAdded(s.code)?t("span",{staticClass:"cky-language-notice"},[t("img",{attrs:{src:a("d645"),alt:"alert-icon"}}),t("span",{staticClass:"cky-notice-inner"},[e._v(" "+e._s(e.$i18n.__("Translations not available","cookie-law-info"))+" ")])]):e._e()])})),0)])],1)]),t("div",{staticClass:"cky-row"},[t("div",{staticClass:"cky-col-12"},[t("Transition",[!e.checkIfTranslated&&e.visible?t("cky-notice",{staticStyle:{"margin-top":"15px"},attrs:{type:"warning"}},[t("div",{staticClass:"cky-align-top"},[t("img",{attrs:{src:a("afb7"),alt:"alert-icon"}}),t("span",[e._v(" "+e._s(e.$i18n.__("Translations are not available for the selected language, so the banner content will be displayed in English unless you manually add translations for this language.","cookie-law-info"))+" ")])])]):e.checkIfTranslated&&e.getTempSelectedLanguageCount?t("cky-notice",{staticStyle:{"margin-top":"15px"},attrs:{type:"info"}},[t("div",{staticClass:"cky-align-top"},[t("img",{attrs:{src:a("0d3d"),alt:"alert-icon"}}),t("span",{domProps:{innerHTML:e._s(e.externalSourceWarning)}})])]):e._e()],1)],1)])]},proxy:!0},{key:"footer",fn:function(){return[t("div",{staticClass:"cky-app-modal-actions cky-justify-end"},[t("div",{staticClass:"cky-action-languages cky-actions-group cky-justify-end"},[t("button",{staticClass:"cky-button cky-button-secondary",on:{click:e.close}},[e._v(" Cancel ")]),t("button",{staticClass:"cky-button cky-button-primary",attrs:{disabled:e.disabled},on:{click:e.addSelectedLanguages}},[e._v(" Add ")])])])]},proxy:!0}])})},l=[],r=a("8a80"),d=a("c2c9"),u=a("f61e"),g=a("462b"),p={name:"CkyLanguageSelector",components:{CkyModal:r["a"],CkyDropdown:d["a"],CkyNotice:g["a"],CkyFeature:i["a"]},data(){return{searchText:"",tempSelectedLanguages:[],languages:{},currentTab:"layout",searchLanguages:[],filteredLanguages:[],visible:!0,externalSourceWarning:this.$i18n.__("By clicking <b>Add</b>, the translations for the selected language, sourced externally from the CookieYes web app, will be downloaded to the plugin.","cookie-law-info")}},methods:{showIcon(e){return!!e.icon},async open(){await this.$refs.ckyLanguagesModal.show(),this.$refs.ckySearchInput.focus(),this.searchText="",this.getConfiguredLanguages()},close(){this.$refs.ckyLanguagesModal.close()},closeLanguageModal(){this.tempSelectedLanguages=this.selectedLanguages},getAvailableLanguages(){this.languages=this.$store.state.languages.available},getConfiguredLanguages(){this.tempSelectedLanguages=this.selectedLanguages},async addSelectedLanguages(){try{this.$store.dispatch("languages/setSelected",this.tempSelectedLanguages),await this.$store.dispatch("languages/saveSelected"),this.close(),await this.purgeCache(),await this.$store.dispatch("banners/reInit"),await this.$store.dispatch("cookies/reInit")}catch(e){console.log(e),this.$root.$emit("triggerNotification",{type:"error",message:this.$i18n.__("Problem occurred while adding languages. Please try again later!","cookie-law-info")})}},isTranslated(e="en"){const t=u["a"].getTranslatedLanguages();return t.includes(e)},isAdded(e="en"){const t=this.tempSelectedLanguages;return t.includes(e)},isExist(e="en"){const t=this.selectedLanguages;return t.includes(e)},disableCheckBox(e){const t=this.tempSelectedLanguages,a=this.selectedLanguages;return!!a.includes(e)||!(t.length<2||t.includes(e))},disableLabel(e){return this.tempSelectedLanguages.length>=2&&!this.tempSelectedLanguages.includes(e)&&!this.selectedLanguages.includes(e)},disableTooltip(e){return!(this.tempSelectedLanguages.length>=2&&!this.tempSelectedLanguages.includes(e))},toggleDropDown(){this.visible=!this.visible}},computed:{currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()},selectedLanguages:function(){return this.$store.state.languages.selected},filterLanguages(){if(this.languages.length>0){let e=[],t=[],a=[];return this.languages.forEach(a=>{this.selectedLanguages.includes(a.code)?e.push(a):t.push(a)}),a=e.concat(t),a.filter(e=>e.name.toLowerCase().includes(this.searchText.toLowerCase()))}return[]},disabled(){const e=this.tempSelectedLanguages.filter(e=>!this.selectedLanguages.includes(e));return!e.length},checkIfTranslated(){let e=!0;return this.tempSelectedLanguages.forEach(t=>{if(!1===this.isTranslated(t))return e=!1,!1}),e},getTempSelectedLanguageCount(){return this.tempSelectedLanguages.length>1}},watch:{},mounted(){this.getAvailableLanguages(),this.getConfiguredLanguages()}},y=p,h=(a("0c37"),a("2877")),f=Object(h["a"])(y,o,l,!1,null,null,null),k=f.exports,b=a("1f3d"),m=function(){var e=this,t=e._self._c;return t("span",{class:e.badgeClass},[e._v(e._s(e.title))])},v=[],_={name:"CkyBadge",props:{type:{type:String,default:"success"},title:{type:String,default:""}},computed:{badgeClass(){return{"cky-badge":!0,"cky-badge-info":"info"===this.type,"cky-badge-error":"error"===this.type,"cky-badge-success":"success"===this.type,"cky-badge-warning":"warning"===this.type}}}},L=_,C=Object(h["a"])(L,m,v,!1,null,null,null),w=C.exports,S=a("c4aa"),$=a("9e47"),x=a("2f62"),T={name:"Languages",components:{CkyFeature:i["a"],CkyLanguageSelector:k,CkyIcon:b["a"],CkyBadge:w,CkyLoader:$["a"]},data(){return{tempSelectedLanguages:[],languages:{},isLanguageModalVisible:!1,currentTab:"layout",loading:!0,defaultContent:c}},methods:{loadBanner:async function(){try{await S["a"].getActiveBanner()}catch(e){console.error(e)}},showIcon(e){return!!e.icon},openLanguageModal(){this.$refs.ckyLanguageSelector.open()},loadEditPage:function(e){const t=this.$router.getRouteByName("edit");this.$router.push({name:t.name,query:{cky_lang:e.code}})},deleteLanguage:async function(e){if(e.code!==this.defaultLanguage&&confirm(this.$i18n.__("Are you sure you want to delete this language?","cookie-law-info"))){let t=e.code;if(t){let e=await u["a"].deleteLanguage(t);await S["a"].save(),e?this.$root.$emit("triggerNotification",{type:"success",message:this.$i18n.__("Successfully deleted the language","cookie-law-info")}):this.$root.$emit("triggerNotification",{type:"error",message:this.$i18n.__("Failed","cookie-law-info")})}}},setDefault:async function(e){await this.$store.dispatch("languages/setDefault",e.code),await this.$store.dispatch("languages/setCurrent",e.code),await this.$store.dispatch("languages/saveDefault")}},computed:{...Object(x["d"])("languages",["default","selected","available"]),showConnectPopup:function(){return u["a"].getLanguageDetails(this.available,this.selected).length>=2},currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()},availableLanguages:function(){return this.available},selectedLanguages:function(){return u["a"].getLanguageDetails(this.available,this.selected)},defaultLanguage:function(){return this.default},banner(){return this.$store.state.banners.current},disableAddLanguageBtn:function(){return u["a"].getLanguageDetails(this.available,this.selected).length>=2}},async created(){this.loading=!0,await this.loadBanner(),this.loading=!1}},A=T,D=(a("4181"),Object(h["a"])(A,s,n,!1,null,null,null));t["default"]=D.exports},afb7:function(e,t,a){e.exports=a.p+"img/warning.svg"},bf5e:function(e,t,a){},c2c9:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}],staticClass:"cky-dropdown",class:{open:e.visible}},[t("button",{staticClass:"cky-button-icon cky-dropdown-anchor",attrs:{disabled:e.disabled},domProps:{innerHTML:e._s(e.text)},on:{click:function(t){return e.toggle()}}}),t("div",{staticClass:"cky-dropdown-content",on:{click:function(t){return e.hide()}}},[e._t("default")],2)])},n=[],i={name:"CkyDropdown",props:{text:{type:String,default:""},disabled:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},data(){return{visible:!1}},methods:{toggle(){this.visible=!this.visible,this.$emit("ckyToggleDropDown")},hide(){this.sticky||(this.visible=!1)}},mounted(){this.visible=this.active}},c=i,o=(a("72ca"),a("2877")),l=Object(o["a"])(c,s,n,!1,null,null,null);t["a"]=l.exports},d645:function(e,t,a){e.exports=a.p+"img/action-alert.svg"}}]);