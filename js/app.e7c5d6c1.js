(function(t){function e(e){for(var n,r,o=e[0],l=e[1],u=e[2],c=0,d=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},i={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ccaf6062","chunk-2d217357":"01ba9ccd","chunk-2d226caa":"29f8667f","chunk-3077e061":"9b9b3ffd","chunk-67eada60":"f961f784","chunk-6f14b278":"39a39fa0"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1,"chunk-3077e061":1,"chunk-67eada60":1,"chunk-6f14b278":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"a52b6a4e","chunk-2d217357":"31d6cfe0","chunk-2d226caa":"31d6cfe0","chunk-3077e061":"498ac87d","chunk-67eada60":"c6fe3ff2","chunk-6f14b278":"8fb6b534"}[t]+".css",i=l.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],c=u.getAttribute("data-href");if(c===n||c===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],p.parentNode.removeChild(p),a(s)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(t);var d=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:""},scopedSlots:t._u([null!=t.userdata.nickname?{key:"extension",fn:function(){return[null!=t.userdata.nickname?n("v-tabs",{staticClass:"mainTab",staticStyle:{"background-color":"#C6D033"},attrs:{grow:"",light:""},model:{value:t.mainTab,callback:function(e){t.mainTab=e},expression:"mainTab"}},[n("v-tabs-slider",{attrs:{color:"transparent"}}),t._l(t.tabItems,(function(e){return n("v-tab",{key:"Tab_"+e.index,staticClass:"font-weight-bold",attrs:{to:e.path}},[t._v(" "+t._s(e.name)+" ")])}))],2):t._e()]},proxy:!0}:null],null,!0)},[n("span",{staticClass:"circle mx-1",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}}),n("span",{staticClass:"ml-n9 mr-5",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[n("v-img",{staticStyle:{width:"25px"},attrs:{src:a("d89a"),"background-color":"white"}})],1),n("v-app-bar-title",[n("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v(" 臺灣幼兒發展調查資料庫 ")])]),n("v-spacer"),null!=t.userdata.nickname?n("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/Profile")}}},[t._v(" "+t._s(t.userdata.nickname)+" ")]):t._e(),null!=t.userdata.nickname?n("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}):t._e(),null!=t.userdata.nickname?n("v-btn",{attrs:{text:"",to:"/shopcart"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-cart-outline")]),t._v(" 我的資料 ")],1):t._e(),null!=t.userdata.nickname?n("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}):t._e(),null==t.userdata.nickname?n("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{outlined:"",dense:""}},"v-btn",r,!1),a),[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-login")]),n("span",[t._v("Login")])],1)]}}],null,!1,4132772924),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-sheet",[n("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":"",align:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-img",{attrs:{src:a("d89a"),gradient:"to top right, rgba(255,255,255,.33), rgba(255,255,255,.7)"}})],1),n("v-col",{attrs:{cols:"8"}},[n("v-card",{attrs:{elevation:0,tile:""}},[n("v-tabs",{attrs:{grow:""},model:{value:t.loginTab,callback:function(e){t.loginTab=e},expression:"loginTab"}},[n("v-tab",[t._v(" 已有帳號登入 ")]),n("v-tab",[t._v(" 創建新的帳號 ")])],1),n("v-tabs-items",{model:{value:t.loginTab,callback:function(e){t.loginTab=e},expression:"loginTab"}},[n("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[n("v-card",{staticClass:"pa-4"},[n("v-form",{ref:"loginForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}},model:{value:t.loginValid,callback:function(e){t.loginValid=e},expression:"loginValid"}},[n("v-text-field",{attrs:{rules:t.accountRules,label:"Account",outlined:"",required:"",dense:""},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("v-text-field",{attrs:{rules:t.passwordRules,label:"Password","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",outlined:"",required:"",dense:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("v-btn",{attrs:{disabled:!t.loginValid,color:"success",type:"submit",block:""},on:{click:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[t._v(" Login ")]),n("v-alert",{staticClass:"mt-2 mb-n1",attrs:{value:"login"==t.alertPlace,type:t.alertType,dense:"",outlined:""}},[t._v(" "+t._s(t.alertMsg)+" ")])],1)],1)],1),n("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[n("v-card",{staticClass:"pa-4"},[n("v-form",{ref:"registerForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}},model:{value:t.registerValid,callback:function(e){t.registerValid=e},expression:"registerValid"}},[n("v-text-field",{attrs:{rules:t.usernameRules,label:"Username",outlined:"",required:"",dense:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail address",outlined:"",required:"",dense:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{rules:t.passwordRules,label:"Password","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",outlined:"",required:"",dense:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("v-checkbox",{staticClass:"ma-0",attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],required:"",dense:""},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",[t._v(" I agree this "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("a",t._g({attrs:{target:"_blank",href:"https://vuetifyjs.com"},on:{click:function(t){t.stopPropagation()}}},a),[t._v(" Privacy ")])]}}],null,!1,93975965)},[t._v(" Opens in new window ")])],1)]},proxy:!0}],null,!1,685730532),model:{value:t.privacyCheckbox,callback:function(e){t.privacyCheckbox=e},expression:"privacyCheckbox"}}),n("v-btn",{attrs:{disabled:!t.registerValid,color:"success",type:"submit",block:""},on:{click:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[t._v(" Register ")]),n("v-alert",{staticClass:"mt-2 mb-n1",attrs:{value:"register"==t.alertPlace,type:t.alertType,dense:"",outlined:""}},[t._v(" "+t._s(t.alertMsg)+" ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1):t._e(),null!=t.userdata.nickname?n("v-btn",{attrs:{outlined:"",dense:""},on:{click:t.logout}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-logout")]),n("span",[t._v("Logout")])],1):t._e()],1),n("v-main",[n("v-container",{attrs:{fluid:"","background-color":"transparent"}},[n("router-view")],1)],1)],1)},i=[],s=a("5530"),o=(a("4de4"),a("bc3a")),l=a.n(o),u=a("2f62"),c={name:"App",data:function(){return{apiURL:"http://localhost:5000",mainTab:null,loginTab:null,dialog:!1,showPassword:!1,loginValid:!0,registerValid:!0,username:null,account:null,email:null,password:null,alertPlace:"",alertType:null,alertMsg:"",privacyCheckbox:!1,usernameRules:[function(t){return!!t||"Username is required"},function(t){return t&&t.length<15||"Username must be less than 15 characters"}],accountRules:[function(t){return!!t||"Account is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}],allTabItems:[{index:0,name:"最新消息",path:"/",auth:3},{index:1,name:"資料匯入",path:"/DataImport",auth:1},{index:2,name:"資料查詢",path:"/search",auth:2},{index:3,name:"權限管理",path:"/admin",auth:1},{index:6,name:"問題回報",path:"/ProblemReport",auth:2}]}},computed:Object(s["a"])({tabItems:function(){var t=this;return this.allTabItems.filter((function(e){return e.auth>=t.userdata.auth}))}},Object(u["b"])({userdata:function(t){return t.userdata}})),methods:{loadInfo:function(){var t=this,e={url:"/api/personalApp/loadInfo",method:"get"};l()(e).then((function(e){t.$store.commit("loadUserdata",e.data.data)})).catch((function(){t.$store.commit("loadUserdata",{nickname:null,auth:3})}))},login:function(){var t=this;if(this.$refs.loginForm.validate()){var e={url:"/api/loginApp/login",method:"post",data:{username:this.account,password:this.password}};l()(e).then((function(e){t.alertPlace="login",t.alertType="success",t.alertMsg=e.data.message,t.loadInfo(),t.dialog=!1})).catch((function(e){t.alertPlace="login",t.alertType="error",t.alertMsg=e.response.data.message}))}},logout:function(){var t=this,e={url:"/api/loginApp/logout",method:"post"};l()(e).then((function(e){t.alertPlace="",t.loadInfo(),t.$router.push("/")}))},register:function(){var t=this;if(this.$refs.registerForm.validate()){var e={url:"/api/loginApp/register",method:"post",data:{username:this.username,password:this.password,email:this.email}};l()(e).then((function(e){t.alertPlace="register",t.alertType="success",t.alertMsg=e.data.message})).catch((function(e){t.alertPlace="register",t.alertType="error",t.alertMsg=e.response.data.message}))}}}},d=c,p=(a("034f"),a("2877")),m=a("6544"),v=a.n(m),f=a("0798"),h=a("7496"),b=a("40dc"),g=a("bb78"),_=a("8336"),k=a("b0af"),y=a("ac7c"),x=a("62ad"),w=a("a523"),I=a("169a"),V=a("ce7e"),C=a("4bd4"),T=a("132d"),D=a("adda"),S=a("f6c4"),M=a("0fd9"),A=a("8dd9"),O=a("2fa4"),P=a("71a3"),q=a("c671"),j=a("fe57"),$=a("aac8"),R=a("9a96"),U=a("8654"),F=a("3a2f"),E=Object(p["a"])(d,r,i,!1,null,null,null),G=E.exports;v()(E,{VAlert:f["a"],VApp:h["a"],VAppBar:b["a"],VAppBarTitle:g["a"],VBtn:_["a"],VCard:k["a"],VCheckbox:y["a"],VCol:x["a"],VContainer:w["a"],VDialog:I["a"],VDivider:V["a"],VForm:C["a"],VIcon:T["a"],VImg:D["a"],VMain:S["a"],VRow:M["a"],VSheet:A["a"],VSpacer:O["a"],VTab:P["a"],VTabItem:q["a"],VTabs:j["a"],VTabsItems:$["a"],VTabsSlider:R["a"],VTextField:U["a"],VTooltip:F["a"]});a("d3b7"),a("3ca3"),a("ddb0");var L=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"2"}},[a("div",{staticStyle:{position:"sticky",top:"76px"}},[a("v-tabs",{attrs:{vertical:"",left:""}},[a("v-tab",{staticClass:"font-weight-bold",attrs:{to:"/admin/usermanage"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-account")]),t._v(" 使用者權限管理 ")],1),a("v-tab",{staticClass:"font-weight-bold",attrs:{to:"/admin/datamanage"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-clipboard-text-multiple")]),t._v(" 資料權限管理 ")],1)],1)],1)]),a("v-col",{attrs:{cols:"10"}},[a("router-view")],1)],1)],1)},N=[],K={name:"Admin"},z=K,H=Object(p["a"])(z,B,N,!1,null,null,null),J=H.exports;v()(H,{VCol:x["a"],VIcon:T["a"],VRow:M["a"],VTab:P["a"],VTabs:j["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"usermanage"},[a("div",[a("v-card",{attrs:{flat:"",color:"rgba(255, 255, 255, 0.0)"}},[a("v-card-text",[a("v-text-field",{attrs:{label:"關鍵字搜尋-帳戶名稱及信箱","prepend-inner-icon":"mdi-magnify"},model:{value:t.input_user.keyword,callback:function(e){t.$set(t.input_user,"keyword","string"===typeof e?e.trim():e)},expression:"input_user.keyword"}}),a("p",[0===t.blacklist?a("span",[t._v(" 搜尋狀態: "+t._s(t.input_user.option)+" "+t._s(t.input_user.keyword.length?">> "+t.input_user.keyword:"")+" ")]):t._e(),1===t.blacklist?a("span",[t._v(" 搜尋狀態: 黑名單 "+t._s(t.input_user.keyword.length?">> "+t.input_user.keyword:"")+" ")]):t._e(),a("v-btn-toggle",{staticStyle:{float:"right"},attrs:{dense:""},model:{value:t.blacklist,callback:function(e){t.blacklist=e},expression:"blacklist"}},[a("v-btn",[t._v("會員")]),a("v-btn",[t._v("黑名單")])],1)],1),0===t.blacklist?a("div",[a("v-data-table",{staticClass:"elevation-1",staticStyle:{"background-color":"rgba(255, 255, 255, 0.4)"},attrs:{headers:t.headers,items:t.typeMenuUsers,"items-per-page":5,"sort-by":"account"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("會員資料")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-select",{attrs:{items:t.OptionState},model:{value:t.input_user.option,callback:function(e){t.$set(t.input_user,"option",e)},expression:"input_user.option"}}),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("會員等級變更")])]),a("v-card-text",[a("v-text-field",{attrs:{label:"帳戶名稱",readonly:""},model:{value:t.editedItem.account,callback:function(e){t.$set(t.editedItem,"account",e)},expression:"editedItem.account"}}),a("v-text-field",{attrs:{label:"帳戶信箱",readonly:""},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}}),a("v-select",{attrs:{items:t.EditOption,label:"帳戶等級"},model:{value:t.editedItem.state,callback:function(e){t.$set(t.editedItem,"state",e)},expression:"editedItem.state"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[t.userdata.account_name!==n.account?a("span",[0===t.userdata.auth?a("v-btn",{attrs:{text:""},on:{click:function(e){return t.editItem(n,"edit")}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v("編輯 ")],1):t._e(),t._v(" "),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[0===t.userdata.auth||1===t.userdata.auth&&"一般會員"==n.state?a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.editItem(n,"black")}}},"v-btn",i,!1),r),[a("v-icon",[t._v("mdi-account-cancel")])],1):t._e()]}}],null,!0)},[a("span",[t._v("移至黑名單")])])],1):t._e()]}}],null,!1,948905068)})],1):t._e(),1===t.blacklist?a("div",[a("v-data-table",{staticClass:"elevation-1",staticStyle:{"background-color":"rgba(255, 255, 255, 0.4)"},attrs:{headers:t.headers,items:t.titleMenuUsers,"items-per-page":5,"sort-by":"account"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("黑名單")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}})],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.editItem(n,"black")}}},"v-btn",i,!1),r),[a("v-icon",[t._v("mdi-account-arrow-left")])],1)]}}],null,!0)},[a("span",[t._v("從黑名單移出")])])]}}],null,!1,612699332)})],1):t._e(),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[0===t.blacklist?a("v-card-title",{staticClass:"text-h5"},[t._v("您確定將此用戶移至黑名單嗎?")]):t._e(),1===t.blacklist?a("v-card-title",{staticClass:"text-h5"},[t._v("您確定將此用戶移出黑名單嗎?")]):t._e(),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeBlack}},[t._v("取消")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.blackItemConfirm}},[t._v("確定")]),a("v-spacer")],1)],1)],1)],1)],1)],1)])},Q=[],W=(a("a434"),{name:"UserManage",data:function(){return{dialog:!1,dialogDelete:!1,blacklist:0,filterBtnTTip:!1,menuUsers:[[],[]],input_user:{option:"全部會員",keyword:""},OptionState:["全部會員","管理員","一般會員"],EditOption:["管理員","一般會員"],headers:[{text:"帳戶名稱",align:"start",sortable:!1,value:"account"},{text:"帳戶信箱",value:"email"},{text:"帳戶等級",value:"state"},{text:"",value:"actions",sortable:!1}],editedIndex:-1,editedItem:{account:"",email:"",state:""},defaultItem:{account:"",email:"",state:""}}},computed:Object(s["a"])(Object(s["a"])({},Object(u["b"])({userdata:function(t){return t.userdata}})),{},{typeMenuUsers:function(){var t=this;return"全部會員"===this.input_user.option?this.titleMenuUsers:this.titleMenuUsers.filter((function(e){return e.state===t.input_user.option}))},titleMenuUsers:function(){var t=this;return this.input_user.keyword?this.menuUsers[this.blacklist].filter((function(e){return-1!==e.account.toLowerCase().indexOf(t.input_user.keyword.toLowerCase())||-1!==e.email.toLowerCase().indexOf(t.input_user.keyword.toLowerCase())})):this.menuUsers[this.blacklist]}}),watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeBlack()}},methods:{editItem:function(t,e){this.editedIndex=this.menuUsers[this.blacklist].indexOf(t),this.editedItem=Object.assign({},t),"edit"==e?this.dialog=!0:"black"==e&&(this.dialogDelete=!0)},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},blackItemConfirm:function(){0===this.blacklist?(this.editedItem.state="黑名單",l.a.put("/api/adminApp/change_auth",{user:this.editedItem.account,userlevel:"blacklist"}).then((function(t){}))):(this.editedItem.state="一般會員",l.a.put("/api/adminApp/change_auth",{user:this.editedItem.account,userlevel:"member"}).then((function(t){}))),this.menuUsers[(this.blacklist+1)%2].push(this.editedItem),this.menuUsers[this.blacklist].splice(this.editedIndex,1),this.closeBlack()},closeBlack:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){Object.assign(this.menuUsers[0][this.editedIndex],this.editedItem);var t={user:this.editedItem.account,userlevel:""};"管理員"==this.editedItem.state?t.userlevel="admin":"一般會員"==this.editedItem.state?t.userlevel="member":t.userlevel="blacklist",l.a.put("/api/adminApp/change_auth",t),this.close()}},mounted:function(){var t=this;l.a.get("/api/adminApp/user_management",{params:{Identity:"All"}}).then((function(e){for(var a=0;a<e.data.data.length;a++){var n=["管理員","一般會員","黑名單"],r={account:e.data.data[a].account_name,email:e.data.data[a].email,state:n[e.data.data[a].auth-1]};t.menuUsers[0].push(r)}})),l.a.get("/api/adminApp/user_management",{params:{Identity:"blacklist"}}).then((function(e){for(var a=0;a<e.data.data.length;a++){var n={account:e.data.data[a].account_name,email:e.data.data[a].email,state:"黑名單"};t.menuUsers[1].push(n)}}))}}),X=W,Z=a("a609"),tt=a("99d9"),et=a("8fea"),at=a("b974"),nt=a("71d9"),rt=a("2a7f"),it=Object(p["a"])(X,Y,Q,!1,null,null,null),st=it.exports;v()(it,{VBtn:_["a"],VBtnToggle:Z["a"],VCard:k["a"],VCardActions:tt["a"],VCardText:tt["b"],VCardTitle:tt["c"],VDataTable:et["a"],VDialog:I["a"],VDivider:V["a"],VIcon:T["a"],VSelect:at["a"],VSpacer:O["a"],VTextField:U["a"],VToolbar:nt["a"],VToolbarTitle:rt["a"],VTooltip:F["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"datamanage"},[a("v-card",{staticStyle:{"background-color":"rgba(255, 255, 255, 0.0)"},attrs:{flat:""}},[a("v-card-text",[a("v-text-field",{attrs:{label:"關鍵字搜尋-資料名稱","prepend-inner-icon":"mdi-magnify"},model:{value:t.input_data.keyword,callback:function(e){t.$set(t.input_data,"keyword","string"===typeof e?e.trim():e)},expression:"input_data.keyword"}}),t._v(" "),a("v-col",{staticClass:"d-flex",attrs:{cols:"12"}},[a("v-select",{attrs:{items:t.groupofData,label:"月齡組"},model:{value:t.input_data.group,callback:function(e){t.$set(t.input_data,"group",e)},expression:"input_data.group"}}),a("v-select",{attrs:{items:t.monthofData,label:"波次/月齡"},model:{value:t.input_data.month,callback:function(e){t.$set(t.input_data,"month",e)},expression:"input_data.month"}}),a("v-select",{attrs:{items:t.typeofData,label:"問卷類型"},model:{value:t.input_data.type,callback:function(e){t.$set(t.input_data,"type",e)},expression:"input_data.type"}}),a("v-select",{attrs:{items:t.releaseState,label:"釋出狀態"},model:{value:t.input_data.state,callback:function(e){t.$set(t.input_data,"state",e)},expression:"input_data.state"}})],1),a("p",[t._v(" 搜尋狀態: "+t._s(t.input_data.group)+" >> "+t._s(t.input_data.month)+" >> "+t._s(t.input_data.type)+" >> "+t._s(t.input_data.state)+" "+t._s(t.input_data.keyword.length?">> ":"")+" "+t._s(t.input_data.keyword)+" ")]),a("v-data-table",{staticClass:"elevation-1",staticStyle:{"background-color":"rgba(255, 255, 255, 0.4)"},attrs:{headers:t.headers,items:t.titleMenuData,"items-per-page":5,"sort-by":"title"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("問卷資料")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("問卷釋出")])]),a("v-card-text",[a("v-text-field",{attrs:{label:"帳戶名稱",readonly:""},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}}),a("v-switch",{attrs:{flat:"",label:1==t.editedItem.state?"已釋出":"未釋出"},model:{value:t.editedItem.state,callback:function(e){t.$set(t.editedItem,"state",e)},expression:"editedItem.state"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.state",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.state?"已釋出":"未釋出")+" ")]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.editItem(n)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v("編輯 ")],1)]}}])})],1)],1)],1)},lt=[],ut={name:"DataManage",data:function(){return{dialog:!1,menuData:[],input_data:{group:"全部",month:"全部",type:"全部",state:"全部",keyword:""},groupofData:["全部","大月齡組","小月齡組"],monthofData:["全部","M3","M6","M12","M18","M24","M36","M48","M60","M72","G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12"],typeofData:["全部","家長","親友","教保/教師"],releaseState:["全部","已釋出","未釋出"],headers:[{text:"問卷名稱",align:"start",sortable:!1,value:"title"},{text:"釋出狀態",value:"state"},{text:"",value:"actions",sortable:!1}],editedIndex:-1,editedItem:{id:"",title:"",group:"",month:"",type:"",state:""},defaultItem:{id:"",title:"",group:"",month:"",type:"",state:""}}},computed:{typeMenuDataForGroup:function(){var t=this;return"全部"===this.input_data.group?this.menuData:this.menuData.filter((function(e){return e.group===t.input_data.group}))},typeMenuDataForMonth:function(){var t=this;return"全部"===this.input_data.month?this.typeMenuDataForGroup:this.typeMenuDataForGroup.filter((function(e){return e.month===t.input_data.month}))},typeMenuDataForType:function(){var t=this;return"全部"===this.input_data.type?this.typeMenuDataForMonth:this.typeMenuDataForMonth.filter((function(e){return e.type===t.input_data.type}))},typeMenuDataForState:function(){return"全部"===this.input_data.state?this.typeMenuDataForType:"已釋出"===this.input_data.state?this.typeMenuDataForType.filter((function(t){return t.state})):this.typeMenuDataForType.filter((function(t){return!t.state}))},titleMenuData:function(){var t=this;return this.input_data.keyword?this.typeMenuDataForState.filter((function(e){return-1!==e.title.toLowerCase().indexOf(t.input_data.keyword.toLowerCase())})):this.typeMenuDataForState}},watch:{dialog:function(t){t||this.close()}},methods:{editItem:function(t){this.editedIndex=this.menuData.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){Object.assign(this.menuData[this.editedIndex],this.editedItem);var t={DataId:this.editedItem.id,Release:this.editedItem.state?1:0};l.a.put("/api/adminApp/release",t),this.close()}},mounted:function(){var t=this;l.a.get("/api/adminApp/auth",{params:{auth:"All_data"}}).then((function(e){for(var a=["小月齡組","大月齡組"],n=["教保/教師","家長","親友"],r=0;r<e.data.data.length;r++){var i="KIT";i+=1==e.data.data[r].age_type?"3月齡組":"36月齡組";var s={id:e.data.data[r].survey_id,title:i+e.data.data[r].wave+n[e.data.data[r].survey_type-1],group:a[e.data.data[r].age_type-1],month:e.data.data[r].wave,type:n[e.data.data[r].survey_type-1],state:e.data.data[r].release};t.menuData.push(s)}}))}},ct=ut,dt=a("b73d"),pt=Object(p["a"])(ct,ot,lt,!1,null,null,null),mt=pt.exports;v()(pt,{VBtn:_["a"],VCard:k["a"],VCardActions:tt["a"],VCardText:tt["b"],VCardTitle:tt["c"],VCol:x["a"],VDataTable:et["a"],VDialog:I["a"],VDivider:V["a"],VIcon:T["a"],VSelect:at["a"],VSpacer:O["a"],VSwitch:dt["a"],VTextField:U["a"],VToolbar:nt["a"],VToolbarTitle:rt["a"]});var vt=a("0e44");n["a"].use(u["a"]);var ft=new u["a"].Store({plugins:[Object(vt["a"])()],state:{userdata:{username:null}},mutations:{loadUserdata:function(t,e){t.userdata=e}},actions:{},modules:{}});n["a"].use(L["a"]);var ht=[{path:"/",name:"Home",component:function(){return a.e("chunk-67eada60").then(a.bind(null,"bb51"))},meta:{title:"最新消息"}},{path:"/Profile",name:"Profile",component:function(){return a.e("chunk-2d217357").then(a.bind(null,"c66d"))},meta:{title:"個人頁面",requiresAuth:!0,authRequirement:2}},{path:"/DataImport",name:"DataImport",component:function(){return a.e("chunk-6f14b278").then(a.bind(null,"3b02"))},meta:{title:"資料匯入",requiresAuth:!0,authRequirement:1}},{path:"/ContactUs",name:"ContactUs",component:function(){return a.e("chunk-2d226caa").then(a.bind(null,"e9bb"))},meta:{title:"聯繫我們",requiresAuth:!0,authRequirement:3}},{path:"/ProblemReport",name:"ProblemReport",component:function(){return a.e("chunk-3077e061").then(a.bind(null,"8e97"))},meta:{title:"問題回報",requiresAuth:!0,authRequirement:3}},{path:"/About",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))},meta:{title:"About",requiresAuth:!0,authRequirement:3}},{path:"/admin",name:"Admin",component:J,redirect:"/admin/usermanage",children:[{path:"usermanage",component:st,meta:{title:"使用者權限管理",requiresAuth:!0,authRequirement:1}},{path:"datamanage",component:mt,meta:{title:"資料權限管理",requiresAuth:!0,authRequirement:1}}]},{path:"/shopcart",name:"ShopCart",component:function(){return a.e("about").then(a.bind(null,"e5b0"))},meta:{title:"我的資料",requiresAuth:!0,authRequirement:2}},{path:"/search",name:"Search",component:function(){return a.e("about").then(a.bind(null,"2d3b"))},meta:{title:"資料查詢",requiresAuth:!0,authRequirement:2}},{path:"*",redirect:"/"}],bt=new L["a"]({mode:"history",base:"/",routes:ht});bt.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))?ft.state.userdata.auth<=t.meta.authRequirement?a():a({path:"/",query:{redirect:t.fullPath}}):a()}));var gt="KIT System";bt.afterEach((function(t,e){n["a"].nextTick((function(){document.title=t.meta.title||gt}))}));var _t=bt,kt=a("f309");n["a"].use(kt["a"]);var yt=new kt["a"]({theme:{light:!0,themes:{light:{primary:2979125,secondary:13029427,accent:4149637,background:16515013}}}}),xt=a("f9d5"),wt=a.n(xt);a("4413");n["a"].use(wt.a),n["a"].config.productionTip=!1,new n["a"]({router:_t,store:ft,vuetify:yt,render:function(t){return t(G)}}).$mount("#app")},"85ec":function(t,e,a){},d89a:function(t,e,a){t.exports=a.p+"img/KIT_LOGO.4553b57e.png"}});
//# sourceMappingURL=app.e7c5d6c1.js.map