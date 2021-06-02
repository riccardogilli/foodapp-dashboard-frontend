(function(t){function e(e){for(var r,c,o=e[0],i=e[1],u=e[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var p=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-app-bar-title",[t._v(t._s(t.title))]),a("v-spacer")],1),a("v-main",[a("router-view")],1)],1)},s=[],c={name:"App",data:function(){return{title:"Food game Dashboard",items:[{title:"Dashboard",icon:"mdi-view-dashboard",route:"/"},{title:"Recipes",icon:"mdi-food-apple-outline",route:"recipes"},{title:"Application status",icon:"mdi-desktop-mac",route:"appstatus"}]}}},o=c,i=a("2877"),u=a("6544"),p=a.n(u),l=a("7496"),d=a("40dc"),v=a("bb78"),f=a("f6c4"),h=a("2fa4"),m=Object(i["a"])(o,n,s,!1,null,null,null),b=m.exports;p()(m,{VApp:l["a"],VAppBar:d["a"],VAppBarTitle:v["a"],VMain:f["a"],VSpacer:h["a"]});var _=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("Dashboard")]),a("app-status-bar",{attrs:{"app-status":t.appStatus,link:"appstatus"}}),a("v-row",[a("v-col",[a("v-card",{attrs:{link:"",to:"recipes"}},[a("v-card-title",[t._v("5")]),a("v-card-text",[t._v("Recipes")])],1)],1)],1)],1)},O=[],V=a("5530"),g=a("2f62"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",["ok"===t.appStatus.status?a("v-col",[a("v-card",{attrs:{color:"success",dark:"",to:t.link}},[a("v-card-title",[t._v("OK")]),a("v-card-text",[t._v(" It's all running smoothly ")])],1)],1):t._e(),"ko"===t.appStatus.status?a("v-col",[a("v-card",{attrs:{color:"error",dark:"",to:t.link}},[a("v-card-title",[t._v("KO")]),a("v-card-text",[t._v(" There's something wrong with the application"),a("br"),t._v(" "+t._s(t.appStatus.msg)+" ")])],1)],1):t._e()],1)},x=[],k={name:"AppStatusBar",props:["appStatus","link"]},w=k,A=a("b0af"),y=a("99d9"),C=a("62ad"),R=a("0fd9"),E=Object(i["a"])(w,j,x,!1,null,"20d416ea",null),T=E.exports;p()(E,{VCard:A["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:C["a"],VRow:R["a"]});var P={name:"Home",components:{AppStatusBar:T},computed:Object(V["a"])({},Object(g["c"])(["appStatus"])),data:function(){return{timer:null}},methods:Object(V["a"])({},Object(g["b"])(["fetchAppStatus"])),beforeRouteEnter:function(t,e,a){a((function(t){return t.fetchAppStatus()}))},created:function(){var t=this;this.timer=setInterval((function(){t.fetchAppStatus()}),5e3)},destroyed:function(){clearInterval(this.timer)}},U=P,$=a("a523"),B=Object(i["a"])(U,S,O,!1,null,null,null),I=B.exports;p()(B,{VCard:A["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:C["a"],VContainer:$["a"],VRow:R["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("Users")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.users,"items-per-page":15},scopedSlots:t._u([{key:"item.actions",fn:function(e){var r=e.item;return[a("v-btn",{attrs:{icon:"","x-small":""},on:{click:function(e){return t.blockUser(r.id)}}},[a("v-icon",[t._v(" mdi-block-helper ")])],1)]}}])})],1)},M=[],N={name:"Users",computed:Object(V["a"])({},Object(g["c"])(["users"])),data:function(){return{headers:[{text:"Nickname",value:"nickname"},{text:"Actions",sortable:!1,value:"actions"}]}},methods:Object(V["a"])(Object(V["a"])({},Object(g["b"])(["fetchUsers"])),{},{blockUser:function(t){console.log(t)}}),beforeRouteEnter:function(t,e,a){a((function(t){return t.fetchUsers()}))}},F=N,H=a("8336"),J=a("8fea"),K=a("132d"),q=Object(i["a"])(F,D,M,!1,null,"799651bc",null),z=q.exports;p()(q,{VBtn:H["a"],VContainer:$["a"],VDataTable:J["a"],VIcon:K["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("Recipes")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.recipes,"items-per-page":15}})],1)},L=[],Q={name:"Recipes",computed:Object(V["a"])({},Object(g["c"])(["recipes"])),data:function(){return{headers:[{text:"Name",value:"name"},{text:"Ingredients"},{text:"Steps to reproduce"},{text:"Actions"}]}},methods:Object(V["a"])({},Object(g["b"])(["fetchRecipes"])),beforeRouteEnter:function(t,e,a){a((function(t){return t.fetchRecipes()}))}},W=Q,X=Object(i["a"])(W,G,L,!1,null,"15a89162",null),Y=X.exports;p()(X,{VContainer:$["a"],VDataTable:J["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("Application status")]),a("app-status-bar",{attrs:{"app-status":t.appStatus}}),a("v-row",t._l(t.appStatus.services,(function(e){return a("v-col",{key:e.slug,attrs:{cols:"3"}},[a("service-card",{attrs:{service:e,"open-edit":t.openEdit}})],1)})),1),a("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.service.name))]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Number of pods",required:"",hint:"Note that the change won't be immediate.","persistent-hint":""},model:{value:t.service.desiredPods,callback:function(e){t.$set(t.service,"desiredPods",e)},expression:"service.desiredPods"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"blue darken-1"},on:{click:function(e){return t.save()}}},[t._v("Save")])],1)],1)],1)],1)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:t.color,dark:""}},[a("v-card-title",[t._v(t._s(t.service.name))]),a("v-card-title",[t._v(" "+t._s(t.service.activePods)+" / "+t._s(t.service.desiredPods)+" active pods "),t.service.scalable?a("v-btn",{staticClass:"ml-3",attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.openEdit(t.service)}}},[a("v-icon",[t._v(" mdi-pencil-circle ")])],1):t._e()],1)],1)},at=[],rt={name:"ServiceCard",props:["service","openEdit"],computed:{color:function(){return"ok"===this.service.status?"success":"error"}}},nt=rt,st=Object(i["a"])(nt,et,at,!1,null,"6cad97c5",null),ct=st.exports;p()(st,{VBtn:H["a"],VCard:A["a"],VCardTitle:y["c"],VIcon:K["a"]});var ot={name:"AppStatus",components:{ServiceCard:ct,AppStatusBar:T},data:function(){return{dialog:!1,service:{},timer:null}},computed:Object(V["a"])({},Object(g["c"])(["appStatus"])),methods:Object(V["a"])(Object(V["a"])({},Object(g["b"])(["fetchAppStatus","updateApp"])),{},{openEdit:function(t){this.dialog=!0,this.service=t},save:function(){this.updateApp(this.service),this.dialog=!1}}),beforeRouteEnter:function(t,e,a){a((function(t){return t.fetchAppStatus()}))},created:function(){var t=this;this.timer=setInterval((function(){t.fetchAppStatus()}),2e3)},destroyed:function(){clearInterval(this.timer)}},it=ot,ut=a("169a"),pt=a("8654"),lt=Object(i["a"])(it,Z,tt,!1,null,"92979634",null),dt=lt.exports;p()(lt,{VBtn:H["a"],VCard:A["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:C["a"],VContainer:$["a"],VDialog:ut["a"],VRow:R["a"],VSpacer:h["a"],VTextField:pt["a"]}),r["a"].use(_["a"]);var vt=[{path:"/",name:"Home",component:dt},{path:"/users",name:"Users",component:z},{path:"/recipes",name:"Ricette",component:Y},{path:"/appstatus",name:"AppStatus",component:I}],ft=new _["a"]({mode:"history",base:"/",routes:vt}),ht=ft,mt=a("bc3a"),bt=a.n(mt);r["a"].use(g["a"]);var _t=new g["a"].Store({state:{users:[],recipes:[],appStatus:{}},mutations:{setUsers:function(t,e){t.users=e},setRecipes:function(t,e){t.recipes=e},setAppStatus:function(t,e){t.appStatus=e}},actions:{fetchUsers:function(t){bt.a.get("http://localhost:5000/users").then((function(e){t.commit("setUsers",e.data)}))},fetchRecipes:function(t){bt.a.get("http://localhost:5000/recipes").then((function(e){t.commit("setRecipes",e.data)}))},fetchAppStatus:function(t){bt.a.get("http://localhost:5000/appstatus").then((function(e){t.commit("setAppStatus",e.data)}))},updateApp:function(t,e){bt.a.post("http://localhost:5000/appstatus",e).then(t.dispatch("fetchAppStatus"))}},modules:{}}),St=a("f309");r["a"].use(St["a"]);var Ot=new St["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ht,store:_t,vuetify:Ot,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.7ea1200b.js.map