(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f14b278"],{1264:function(t,e,a){},"23a7":function(t,e,a){"use strict";var i=a("2909"),n=a("5530"),s=a("53ca"),l=(a("a9e3"),a("caad"),a("d81d"),a("b0c0"),a("99af"),a("a434"),a("159b"),a("fb6a"),a("5803"),a("2677")),r=a("cc20"),o=a("80d2"),u=a("d9bd"),c=a("d9f7");e["a"]=l["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(o["F"])(t).every((function(t){return null!=t&&"object"===Object(s["a"])(t)}))}}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},l["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var a=e.size,i=void 0===a?0:a;return t+i}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(o["v"])(e,1024===this.base))},internalArrayValue:function(){return Object(o["F"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var a=e.name,i=void 0===a?"":a,n=e.size,s=void 0===n?0:n,l=t.truncateText(i);return t.showSize?"".concat(l," (").concat(Object(o["v"])(s,1024===t.base),")"):l})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(u["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(o["i"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,a){return t.$createElement(r["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(a,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=l["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(c["d"])(t.data.style,{display:"none"})),t},genInput:function(){var t=l["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,i){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[i],file:a,index:i}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=l["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(n["a"])(Object(n["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(i["a"])(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,a){"use strict";var i=a("8654");e["a"]=i["a"]},"3b02":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",{attrs:{vertical:""}},[a("v-tab",{staticClass:"font-weight-bold",staticStyle:{width:"200px"}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-file-document ")]),t._v(" 變項對照表 ")],1),a("v-tab",{staticClass:"font-weight-bold",staticStyle:{width:"200px"}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-file-delimited ")]),t._v(" 匯入SAV檔 ")],1),a("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[a("v-card",{staticClass:"pb-2",attrs:{tile:"",elevation:"0",color:"rgba(255, 255, 255, 0.0)"}},[a("v-card-title",{staticClass:"font-weight-bold mb-2",attrs:{"primary-title":""}},[t._v(" 匯入變項對照表 ")]),a("v-file-input",{staticClass:"ml-8",attrs:{label:"File input",counter:"","show-size":"","truncate-length":"30"},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.text;return[a("v-chip",{attrs:{small:"",label:"",color:"primary"}},[t._v(" "+t._s(i)+" ")])]}}]),model:{value:t.surveyFile,callback:function(e){t.surveyFile=e},expression:"surveyFile"}}),a("v-card-actions",[a("v-dialog",{attrs:{persistent:"","max-width":"350"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"ml-8",attrs:{color:"success"},on:{click:t.uploadSurveyProblem}},"v-btn",n,!1),i),[t._v(" add ")])]}}]),model:{value:t.surveyDialog,callback:function(e){t.surveyDialog=e},expression:"surveyDialog"}},[a("v-card",{staticClass:"pb-5"},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("h2",{staticClass:"font-weight-bold mt-5 mb-7"},[t._v(" 上傳中，請勿離開這個頁面 ")])]),a("v-row",{staticClass:"my-5",attrs:{justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"secondary",size:48}})],1)],1)],1)],1),a("v-btn",{staticClass:"ml-2",attrs:{color:"error"},on:{click:function(e){t.surveyFile=null}}},[t._v(" clear ")])],1),a("v-alert",{staticClass:"mt-3 ml-4",attrs:{value:"survey"==t.alertPlace,type:t.alertType,dense:"",outlined:""}},[t._v(" "+t._s(t.alertMsg)+" ")])],1)],1),a("v-tab-item",{attrs:{"transparent-body":"",transition:"fade-transition","reverse-transition":"fade-transition"}},[a("v-card",{attrs:{tile:"",elevation:"0",color:"rgba(255, 255, 255, 0.0)"}},[a("v-card-title",{staticClass:"font-weight-bold mb-2",attrs:{"primary-title":""}},[t._v(" 波次選擇 ")]),a("v-select",{staticClass:"mx-8",attrs:{items:t.groupItems,label:"選擇組別(大小月齡)","item-text":"state","item-value":"value",dense:""},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}}),a("v-select",{staticClass:"mx-8",attrs:{items:t.identityItems,label:"選擇身分","item-text":"state","item-value":"value",dense:""},model:{value:t.identity,callback:function(e){t.identity=e},expression:"identity"}}),a("v-select",{staticClass:"mx-8",attrs:{items:t.waveItems,label:"選擇波次","item-text":"wave","item-value":"wave",dense:""},model:{value:t.wave,callback:function(e){t.wave=e},expression:"wave"}}),a("v-card-title",{staticClass:"font-weight-bold mb-2",attrs:{"primary-title":""}},[t._v(" 匯入SAV檔 ")]),a("v-file-input",{staticClass:"mx-8",attrs:{label:"File input",counter:"","show-size":"","truncate-length":"30"},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.text;return[a("v-chip",{attrs:{small:"",label:"",color:"primary"}},[t._v(" "+t._s(i)+" ")])]}}]),model:{value:t.savFile,callback:function(e){t.savFile=e},expression:"savFile"}}),a("v-card-actions",[a("v-dialog",{attrs:{persistent:"","max-width":"350"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"ml-8",attrs:{color:"success"},on:{click:t.uploadSAV}},"v-btn",n,!1),i),[t._v(" add ")])]}}]),model:{value:t.savDialog,callback:function(e){t.savDialog=e},expression:"savDialog"}},[a("v-card",{staticClass:"pb-5"},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("h2",{staticClass:"font-weight-bold mt-5 mb-7"},[t._v(" 上傳中，請勿離開這個頁面 ")])]),a("v-row",{staticClass:"my-5",attrs:{justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"secondary",size:48}})],1)],1)],1)],1),a("v-btn",{staticClass:"ml-2",attrs:{color:"error"},on:{click:function(e){t.group=null,t.wave=null,t.identity=null,t.savFile=null}}},[t._v(" clear ")])],1),a("v-alert",{staticClass:"mt-3 ml-4",attrs:{value:"sav"==t.alertPlace,type:t.alertType,dense:"",outlined:""}},[t._v(" "+t._s(t.alertMsg)+" ")])],1)],1)],1)},n=[],s=(a("4de4"),a("bc3a")),l=a.n(s),r={name:"DataImport",data:function(){return{group:null,wave:null,identity:null,alertPlace:"",alertType:null,alertMsg:"",groupItems:[{state:"大月齡組",value:2},{state:"小月齡組",value:1}],identityItems:[{state:"家長",value:2},{state:"親友",value:3},{state:"教保/教師",value:1}],allWaves:null,savFile:null,surveyFile:null,savDialog:!1,surveyDialog:!1,savStatus:["done","loading","loading"],varStatus:null}},beforeMount:function(){this.fileWave()},computed:{waveItems:function(){var t=this;return null!=this.allWaves?this.allWaves.filter((function(e){return e.age_type===t.group&&e.survey_type===t.identity})):[]}},methods:{fileWave:function(){var t=this,e={url:"/api/fileApp/fileWave",method:"get"};l()(e).then((function(e){t.allWaves=e.data.data.wave}))},uploadSAV:function(){var t=this,e=new FormData;e.append("file",this.savFile),e.append("ageType",this.group),e.append("wave",this.wave),e.append("surveyType",this.identity);var a={url:"/api/fileApp/upload/sav",method:"post",data:e};l()(a).then((function(e){t.alertPlace="sav",t.alertType="success",t.alertMsg=e.data.message,t.savDialog=!1})).catch((function(e){t.alertPlace="sav",t.alertType="error",t.alertMsg=e.response.data.message,t.savDialog=!1}))},uploadSurveyProblem:function(){var t=this,e=new FormData;e.append("file",this.surveyFile);var a={url:"/api/fileApp/upload/surveyProblem",method:"post",data:e};l()(a).then((function(e){t.alertPlace="survey",t.alertType="success",t.alertMsg=e.data.message,t.surveyDialog=!1,t.fileWave()})).catch((function(e){t.alertPlace="survey",t.alertType="error",t.alertMsg=e.response.data.message,t.surveyDialog=!1}))}}},o=r,u=(a("e467"),a("2877")),c=a("6544"),v=a.n(c),d=a("0798"),p=a("8336"),h=a("b0af"),f=a("99d9"),m=a("cc20"),y=a("a523"),g=a("169a"),b=a("23a7"),w=a("132d"),S=a("490a"),C=a("0fd9"),V=a("b974"),_=a("71a3"),x=a("c671"),k=a("fe57"),D=Object(u["a"])(o,i,n,!1,null,"05fa49ba",null);e["default"]=D.exports;v()(D,{VAlert:d["a"],VBtn:p["a"],VCard:h["a"],VCardActions:f["a"],VCardTitle:f["d"],VChip:m["a"],VContainer:y["a"],VDialog:g["a"],VFileInput:b["a"],VIcon:w["a"],VProgressCircular:S["a"],VRow:C["a"],VSelect:V["a"],VTab:_["a"],VTabItem:x["a"],VTabs:k["a"]})},5803:function(t,e,a){},e467:function(t,e,a){"use strict";a("1264")}}]);
//# sourceMappingURL=chunk-6f14b278.4cb9c0fc.js.map