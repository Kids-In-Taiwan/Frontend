(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210457"],{b6d1:function(t,r,a){"use strict";a.r(r);var n=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",[a("v-container",[t.success?[a("v-card",{staticStyle:{"background-color":"rgba(255, 255, 255, 0.0)"},attrs:{flat:""}},[a("v-card-title",[t._v(" 信箱認證 ")]),a("v-card-text",[t._v(" 認證信箱成功，回到首頁開始使用。 ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:function(r){return t.$router.push("/")}}},[t._v(" 回到首頁 ")])],1)],1)]:t._e(),t.fail?[a("v-card",{staticStyle:{"background-color":"rgba(255, 255, 255, 0.0)"},attrs:{flat:""}},[a("v-card-title",[t._v(" 信箱認證 ")]),a("v-card-text",[t._v(" 認證信箱失敗，請重新驗證 ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:function(r){return t.$router.push("/")}}},[t._v(" 回到首頁 ")])],1)],1)]:t._e()],2)],1)},c=[],e=a("bc3a"),o=a.n(e),i={name:"Verify",data:function(){return{success:!1,fail:!1}},mounted:function(){var t=this,r={url:"/api/loginApp/user_confirm",method:"post",data:{token:this.$route.params.token}};o()(r).then((function(r){t.success=!0})).catch((function(r){t.errorMsg=r,t.fail=!0}))}},s=i,u=a("2877"),l=a("6544"),d=a.n(l),v=a("8336"),f=a("b0af"),p=a("99d9"),b=a("a523"),_=Object(u["a"])(s,n,c,!1,null,null,null);r["default"]=_.exports;d()(_,{VBtn:v["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VContainer:b["a"]})}}]);
//# sourceMappingURL=chunk-2d210457.6cde96f4.js.map