(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3077e061"],{1681:function(e,t,n){},"210b":function(e,t,n){},"23a7":function(e,t,n){"use strict";var i=n("2909"),a=n("5530"),s=n("53ca"),o=(n("a9e3"),n("caad"),n("d81d"),n("b0c0"),n("99af"),n("a434"),n("159b"),n("fb6a"),n("5803"),n("2677")),r=n("cc20"),l=n("80d2"),c=n("d9bd"),u=n("d9f7");t["a"]=o["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"===typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(l["F"])(e).every((function(e){return null!=e&&"object"===Object(s["a"])(e)}))}}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var n=t.size,i=void 0===n?0:n;return e+i}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(l["v"])(t,1024===this.base))},internalArrayValue:function(){return Object(l["F"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var e=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var n=t.name,i=void 0===n?"":n,a=t.size,s=void 0===a?0:a,o=e.truncateText(i);return e.showSize?"".concat(o," (").concat(Object(l["v"])(s,1024===e.base),")"):o})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(c["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.multiple?e:e?[e]:[];Object(l["i"])(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(t,n){return e.$createElement(r["a"],{props:{small:e.smallChips},on:{"click:close":function(){var t=e.internalValue;t.splice(n,1),e.internalValue=t}}},[t])})):[]},genControl:function(){var e=o["a"].options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(u["d"])(e.data.style,{display:"none"})),e},genInput:function(){var e=o["a"].options.methods.genInput.call(this);return e.data.attrs.multiple=this.multiple,delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,i){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[i],file:n,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=o["a"].options.methods.genTextFieldSlot.call(this);return t.data.on=Object(a["a"])(Object(a["a"])({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(i["a"])(e.target.files||[]);this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}})},2677:function(e,t,n){"use strict";var i=n("8654");t["a"]=i["a"]},5803:function(e,t,n){},"8e97":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tabs",{attrs:{vertical:""}},[n("v-tab",{staticClass:"font-weight-bold",staticStyle:{width:"200px"}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-comment-question ")]),e._v(" 常見問題 ")],1),n("v-tab",{staticClass:"font-weight-bold"},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-account-question ")]),e._v(" 快速回報 ")],1),n("v-tab-item",{attrs:{transparent:"",transition:"fade-transition","reverse-transition":"fade-transition"}},[n("v-tabs",{attrs:{vertical:""},model:{value:e.questionCategory,callback:function(t){e.questionCategory=t},expression:"questionCategory"}},[e._l(e.commonQuestion,(function(t){return n("v-tab",{key:t.category,staticStyle:{width:"150px"}},[e._v(" "+e._s(t.category)+" ")])})),n("v-tabs-items",{model:{value:e.questionCategory,callback:function(t){e.questionCategory=t},expression:"questionCategory"}},e._l(e.commonQuestion,(function(t){return n("v-tab-item",{key:t.category,attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},e._l(t.problem,(function(t){return n("v-expansion-panels",{key:t.question,staticClass:"px-4",attrs:{focusable:"",tile:""}},[n("v-expansion-panel",{attrs:{accordion:""}},[n("v-expansion-panel-header",[e._v(" "+e._s(t.question)+" ")]),n("v-expansion-panel-content",{staticClass:"mt-3"},[e._v(" "+e._s(t.answer)+" ")])],1)],1)})),1)})),1)],2)],1),n("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[n("v-card",{staticClass:"mx-12",attrs:{tile:"",elevation:"0",color:"rgba(255, 255, 255, 0.0)"}},[n("v-form",{ref:"reportForm",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.quickReport.apply(null,arguments)}},model:{value:e.reportForm,callback:function(t){e.reportForm=t},expression:"reportForm"}},[n("v-text-field",{attrs:{label:"Title",rules:[function(t){return!!t||!!e.report.content||"You have to write at least title or content."}]},model:{value:e.report.title,callback:function(t){e.$set(e.report,"title",t)},expression:"report.title"}}),n("v-textarea",{attrs:{label:"Content",rules:[function(t){return!!t||!!e.report.title||"You have to write at least title or content."}]},model:{value:e.report.content,callback:function(t){e.$set(e.report,"content",t)},expression:"report.content"}}),n("v-file-input",{attrs:{label:"File input",counter:"","show-size":"","truncate-length":"30",rules:[function(e){return!e||e.size<26214400||"File size should be less than 25 MB!"}]},scopedSlots:e._u([{key:"selection",fn:function(t){var i=t.text;return[n("v-chip",{attrs:{small:"",label:"",color:"primary"}},[e._v(" "+e._s(i)+" ")])]}}]),model:{value:e.report.file,callback:function(t){e.$set(e.report,"file",t)},expression:"report.file"}}),n("v-btn",{attrs:{dark:"",block:"",color:"primary",loading:e.loadReport,type:"submit"},on:{click:function(t){return t.preventDefault(),e.quickReport.apply(null,arguments)}}},[e._v(" Send "),n("v-icon",{attrs:{right:""}},[e._v(" mdi-send ")])],1)],1),n("v-alert",{staticClass:"mt-3",attrs:{value:"quickReport"==e.alertPlace,type:e.alertType,dense:"",outlined:""}},[e._v(" "+e._s(e.alertMsg)+" ")])],1)],1)],1)},a=[],s=(n("d3b7"),n("bc3a")),o=n.n(s),r={name:"ProblemReport",data:function(){return{alertPlace:"",alertType:null,alertMsg:"",reportForm:!1,loadReport:!1,questionCategory:null,commonQuestion:[{category:"帳號問題",problem:[{question:"Example question 1",answer:"example answer 1"},{question:"Example question 2",answer:"example answer 2"}]},{category:"介面問題",problem:[{question:"Example question 1",answer:"example answer 1"},{question:"Example question 2",answer:"example answer 2"}]},{category:"伺服器問題",problem:[{question:"Example question 1",answer:"example answer 1"},{question:"Example question 2",answer:"example answer 2"},{question:"Example question 2",answer:"example answer 2"}]}],report:{title:"",content:"",file:null}}},methods:{quickReport:function(){var e=this;if(this.$refs.reportForm.validate()){this.loadReport=!0;var t=new FormData;t.append("file",this.report.file),t.append("title",this.report.title),t.append("content",this.report.content);var n={url:"/api/reportApp/quickReport",method:"post",data:t};o()(n).then((function(t){e.alertPlace="quickReport",e.alertType="success",e.alertMsg=t.data.message,e.savDialog=!1,e.$refs.reportForm.reset()})).catch((function(t){e.alertPlace="quickReport",e.alertType="error",e.alertMsg=t.response.data.message,e.savDialog=!1})).finally((function(){e.loadReport=!1}))}}}},l=r,c=(n("8f0d"),n("2877")),u=n("6544"),p=n.n(u),h=n("0798"),d=n("8336"),f=n("b0af"),v=n("cc20"),m=n("5530"),b=n("4e82"),x=n("3206"),g=n("80d2"),y=n("58df"),w=Object(y["a"])(Object(b["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(x["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(m["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(g["r"])(this))}}),C=n("0789"),k=n("9d65"),$=n("a9ad"),V=Object(y["a"])(k["a"],$["a"],Object(x["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),S=V.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,t){var n=this;e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((function(){return n.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(C["a"],this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(g["r"])(t))])]})))}}),I=n("9d26"),j=n("5607"),O=Object(y["a"])($["a"],Object(x["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),_=O.extend().extend({name:"v-expansion-panel-header",directives:{ripple:j["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(g["r"])(this,"actions")||[this.$createElement(I["a"],this.expandIcon)];return this.$createElement(C["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(m["a"])(Object(m["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(g["r"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),q=(n("0481"),n("210b"),n("604c")),A=n("d9bd"),z=q["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(m["a"])(Object(m["a"])({},q["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(A["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(A["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(i)}}}),B=n("23a7"),P=n("4bd4"),D=n("132d"),F=n("71a3"),R=n("c671"),T=n("fe57"),E=n("aac8"),H=n("8654"),M=(n("a9e3"),n("1681"),Object(y["a"])(H["a"])),N=M.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(m["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},H["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(n,t)+"px"}},genInput:function(){var e=H["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){H["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),G=Object(c["a"])(l,i,a,!1,null,"14aa1817",null);t["default"]=G.exports;p()(G,{VAlert:h["a"],VBtn:d["a"],VCard:f["a"],VChip:v["a"],VExpansionPanel:w,VExpansionPanelContent:S,VExpansionPanelHeader:_,VExpansionPanels:z,VFileInput:B["a"],VForm:P["a"],VIcon:D["a"],VTab:F["a"],VTabItem:R["a"],VTabs:T["a"],VTabsItems:E["a"],VTextField:H["a"],VTextarea:N})},"8f0d":function(e,t,n){"use strict";n("9790")},9790:function(e,t,n){}}]);
//# sourceMappingURL=chunk-3077e061.9b9b3ffd.js.map