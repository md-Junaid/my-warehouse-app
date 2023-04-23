(function(e){function t(t){for(var a,i,n=t[0],l=t[1],c=t[2],d=0,m=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},r={app:0},o=[];function i(e){return n.p+"js/"+({about:"about"}[e]||e)+"."+{about:"00f25ad8"}[e]+".js"}function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(e){var t=[],s=r[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=i(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(d);var s=r[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,s[1](c)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/my-warehouse-app/",n.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),r=s("7496"),o=s("f6c4"),i=function(){var e=this,t=e._self._c;return t(r["a"],[t(o["a"],[t("router-view",{staticClass:"gradBackground fullH"})],1)],1)},n=[],l={name:"App",data:()=>({})},c=l,d=(s("9ca8"),s("2877")),u=Object(d["a"])(c,i,n,!1,null,null,null),m=u.exports,p=s("8c4f"),h=s("c6a6"),b=s("8336"),g=s("b0af"),f=s("99d9"),w=s("cc20"),U=s("62ad"),v=s("a523"),y=s("8fea"),j=s("169a"),I=s("ce7e"),O=s("23a7"),x=s("132d"),P=s("0fd9"),_=s("8dd9"),k=s("2fa4"),C=function(){var e=this,t=e._self._c;return t(v["a"],{staticClass:"d-flex justify-center align-center",attrs:{fluid:""}},[t("div",{style:{minWidth:"100%"}},[t(_["a"],{staticClass:"pa-6 rounded-xl",attrs:{elevation:20,"min-width":"100%"}},[t(P["a"],{staticClass:"d-flex justify-space-between"},[t(U["a"],{staticClass:"my-auto text-center",attrs:{cols:"12",sm:"4",md:"3"}},[t("span",{staticClass:"subtitle-1 font-weight-medium my-auto"},[e._v(" Logged In: "),t(w["a"],{staticClass:"ma-2 rounded-xl font-weight-bold title elevation-5",style:{color:"white"},attrs:{label:"",color:"#4158D0"},on:{click:function(t){e.userInfoDialog=!0}}},[t(x["a"],{attrs:{left:""}},[e._v(" mdi-account-circle-outline ")]),t("span",[e._v(" "+e._s(e.getUserName)+" ")])],1),t("UserInfoDialog",{attrs:{dialog:e.userInfoDialog},on:{close:function(t){return e.close()}}})],1)]),!0===e.getUserAdmin?t(U["a"],{attrs:{cols:"12",sm:"6"}},[t(h["a"],{attrs:{items:e.getAllUsers,dense:"","item-text":e=>`${e.name} (${e.email})`,label:"Users","return-object":""},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}}),t("div",{staticClass:"text-center"},[t(b["a"],{style:{color:"#fff"},attrs:{rounded:"",color:"#C850C0",loading:e.loading||e.loadingUpload},on:{click:function(t){return e.openUploadDialog()}}},[e._v(" Upload data ")])],1)],1):e._e(),t(U["a"],{staticClass:"my-auto text-center",attrs:{cols:"12",sm:"2"}},[t(b["a"],{staticClass:"my-auto",style:{color:"#fff"},attrs:{rounded:"",color:"#4158D0"},on:{click:e.logout}},[e._v("Logout")])],1)],1)],1),t(y["a"],{staticClass:"elevation-20 pa-4 rounded-xl mt-6",attrs:{headers:e.headers,items:e.userItems,"items-per-page":5,loading:e.loading}},[t("template",{slot:"no-data"},[t("p",{staticClass:"title"},[e._v("Sorry Nothing to display here, contact your admin :(")])])],2)],1),t(j["a"],{attrs:{persistent:"",width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(g["a"],[t(f["c"],[e._v("Upload Data for selected user")]),t(I["a"],{staticClass:"mx-4"}),t(f["b"],{staticClass:"pa-6"},[t(O["a"],{attrs:{"show-size":"","prepend-icon":"mdi-paperclip",placeholder:"Select csv file only"},model:{value:e.csv,callback:function(t){e.csv=t},expression:"csv"}})],1),t(f["a"],[t(k["a"]),t(b["a"],{attrs:{color:"secondary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")]),t(b["a"],{attrs:{color:"#4158D0",outlined:""},on:{click:function(t){return e.upload()}}},[e._v(" Upload ")])],1)],1)],1)],1)},L=[],D=(s("14d9"),s("be8c")),A=s("1494"),M=s("2f62"),S=s("369b"),E=s.n(S),H=s("4bd4"),N=s("8654"),$=function(){var e=this,t=e._self._c;return t(j["a"],{attrs:{persistent:"",width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(g["a"],[t(H["a"],{ref:"updateForm",staticClass:"text-right",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t(f["b"],[t(v["a"],[t(P["a"],[t(U["a"],{attrs:{cols:"12"}},[t(N["a"],{attrs:{label:e.getUserName},model:{value:e.currentName,callback:function(t){e.currentName=t},expression:"currentName"}})],1),t(U["a"],{attrs:{cols:"12"}},[t(N["a"],{attrs:{label:"Email",value:e.getUserEmail,filled:"",readonly:""}})],1),t(U["a"],{attrs:{cols:"12"}},[t(N["a"],{attrs:{label:"Current Password","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.currentPassword,callback:function(t){e.currentPassword=t},expression:"currentPassword"}})],1),t(U["a"],{attrs:{cols:"12"}},[t(N["a"],{attrs:{label:"New Password","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1)],1)],1)],1),t(f["a"],[t(k["a"]),t(b["a"],{attrs:{color:"secondary",text:""},on:{click:function(t){return e.closeDialog()}}},[e._v(" Close ")]),t(b["a"],{attrs:{color:"#4158D0",outlined:"",type:"submit",loading:e.loading}},[e._v(" Update ")])],1)],1)],1)],1)},q=[],R={name:"UserInfoDialog",props:["dialog"],data(){return{currentName:"",loading:!1,currentPassword:"",newPassword:"",show:!1}},computed:{...Object(M["b"])(["getUserName","getUserEmail"])},methods:{closeDialog(){this.$emit("close")},async submit(){if(this.loading=!0,this.currentName){const e=Object(A["b"])(Object(A["d"])(),"users/"+Object(D["b"])().currentUser.uid);Object(A["h"])(e,{name:this.currentName}).catch(e=>{this.loading=!1,alert(""+e.message)})}if(this.newPassword){const e=await D["a"].credential(this.getUserEmail,this.currentPassword);await Object(D["c"])(Object(D["b"])().currentUser,e).catch(e=>{alert(""+e.message)}),await Object(D["e"])(Object(D["b"])().currentUser,this.newPassword).catch(e=>{alert(""+e.message)})}this.loading=!1,this.$emit("close")}}},T=R,F=Object(d["a"])(T,$,q,!1,null,null,null),z=F.exports;let B,J,W;var G={name:"Home",data:()=>({loading:!1,csv:null,dialog:!1,userInfoDialog:!1,selectedUser:{},headers:[],userItems:[],loadingUpload:!1}),components:{UserInfoDialog:z},created(){Object(D["b"])().onAuthStateChanged(async e=>{if(e){this.$store.commit("mutateLoading",!0);const e=await Object(A["b"])(Object(A["d"])(),"users/"+Object(D["b"])().currentUser.uid);J=Object(A["e"])(e,e=>{e.exists()&&this.$store.commit("setProfileInfo",e)}),this.getMyItems(),this.getAllUsersForAdmin()}})},computed:{...Object(M["b"])(["getUserName","getUserEmail","getUserAdmin","getAllUsers","getUploadMessage","getUserItems","getUserItemsHeader","getSelectedUserItems","getSelectedUserItemsHeaders","getLoading","getUnsubscribeItemsListener","getLoadingUpload"])},watch:{getUploadMessage(e){alert(e)},getUserItemsHeader(e){this.headers=[],e.forEach(e=>{this.headers.push({text:e,value:e})})},getUserItems(e){this.userItems=e},selectedUser(e){if(e.id===Object(D["b"])().currentUser.uid)return this.headers=[],this.userItems=this.getUserItems,void this.getUserItemsHeader.forEach(e=>{this.headers.push({text:e,value:e})});this.headers=[],this.userItems=[],this.$store.dispatch("getUserItems",e.email)},getSelectedUserItemsHeaders(e){e.forEach(e=>{this.headers.push({text:e,value:e})})},getSelectedUserItems(e){this.userItems=e},getLoading(e){this.loading=e},getLoadingUpload(e){this.loadingUpload=e},getUnsubscribeItemsListener(e){this.unsubscribeItems=e}},beforeDestroy(){J(),B(),!0===this.getUserAdmin&&W()},methods:{logout(){Object(D["d"])(Object(D["b"])()).then(()=>{this.$router.push("/login")}).catch(e=>{alert(e.message)})},async getMyItems(){const e=await Object(A["b"])(Object(A["d"])(),"customerData/"+Object(D["b"])().currentUser.email);B=Object(A["e"])(e,e=>{e.exists()&&(this.$store.commit("mutateUserItems",e.data().items),this.$store.commit("mutateUserItemsHeaders",Object.keys(e.data().items[0])))}),this.$store.commit("mutateLoading",!1)},async getAllUsersForAdmin(){const e=await Object(A["b"])(Object(A["d"])(),"users/"+Object(D["b"])().currentUser.uid),t=await Object(A["c"])(e);if(!0===t.data().admin){const e=Object(A["f"])(Object(A["a"])(Object(A["d"])(),"users"));W=Object(A["e"])(e,e=>{this.$store.commit("mutateAllUsers",e)})}},openUploadDialog(){this.selectedUser.id?this.dialog=!0:alert("Select a user first")},close(){this.userInfoDialog=!1},async upload(){var e=this;void 0!=this.csv?E.a.parse(this.csv,{header:!0,dynamicTyping:!0,skipEmptyLines:!0,complete(t){e.loading=!1;let s={id:e.selectedUser.id,name:e.selectedUser.name,email:e.selectedUser.email,items:t.data};e.$store.dispatch("uploadAllDocsUser",s),e.dialog=!1,e.csv=null}}):alert("Please select a csv file")}}},K=G,V=Object(d["a"])(K,C,L,!1,null,null,null),Y=V.exports,Q=s("71a3"),X=s("fe57"),Z=function(){var e=this,t=e._self._c;return t(v["a"],{staticClass:"d-flex justify-center align-center",attrs:{fluid:""}},[t("div",{staticClass:"elevation-20",style:{minWidth:"40%"}},[t(X["a"],{style:{borderRadius:"5px"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t(Q["a"],{on:{click:function(t){return e.delForm()}}},[e._v("Login")]),t(Q["a"],{on:{click:function(t){return e.delForm()}}},[e._v("Register")])],1),t(g["a"],[t(f["b"],[t(H["a"],{ref:"form",staticClass:"text-right",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[1===e.tab?t(N["a"],{attrs:{label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):e._e(),t(N["a"],{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(N["a"],{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",name:"password",label:"Password",type:e.show1?"text":"password",placeholder:"password",rules:[e.passwordRules.required],required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),1===e.tab?t(N["a"],{attrs:{name:"confirmPassword",label:"Confirm Password",placeholder:"confirm password","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",rules:[e.passwordRules.required],required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}):e._e(),t("div",{staticClass:"red--text text-center font-weight-medium subtitle-1"},[e._v(" "+e._s(e.errorMessage))]),0===e.tab?t(b["a"],{style:{color:"#fff"},attrs:{rounded:"",type:"submit",color:"#4158D0"}},[e._v(" Login ")]):e._e(),1===e.tab?t(b["a"],{style:{color:"#fff"},attrs:{rounded:"",type:"submit",color:"#C850C0"}},[e._v(" Register ")]):e._e()],1)],1)],1)],1)])},ee=[],te=s("6a7c"),se={data(){return{tab:0,name:"",email:"",password:"",confirmPassword:"",show1:!1,errorMessage:"",auth:Object(te["c"])(),emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+/.test(e)||"E-mail must be valid"],passwordRules:{required:e=>!!e||"Password is required"},db:Object(A["d"])()}},methods:{delForm(){this.$refs.form.reset(),this.errorMessage=""},submit(){if(1===this.tab){if(this.password!==this.confirmPassword)return void(this.errorMessage="Password did not match");""!==this.email&&""!==this.name&&""!==this.password&&""!==this.confirmPassword?Object(te["b"])(this.auth,this.email,this.password).then(e=>{const t=e.user,s=Object(A["b"])(this.db,"users/"+t.uid);Object(A["g"])(s,{name:this.name,email:this.email,admin:!1}),this.$router.replace("/")}).catch(e=>{this.errorMessage=e.code.replace("auth/","")}):this.errorMessage="Please fill all the fields"}else Object(te["e"])(this.auth,this.email,this.password).then(e=>{e.user;this.$router.replace("/")}).catch(e=>{this.errorMessage=e.code.replace("auth/","")})}}},ae=se,re=Object(d["a"])(ae,Z,ee,!1,null,null,null),oe=re.exports;a["a"].use(p["a"]);const ie=[{path:"/",name:"Home",component:Y},{path:"/login",name:"Login",component:oe},{path:"/about",name:"About",component:()=>s.e("about").then(s.bind(null,"f820"))}],ne=new p["a"]({mode:"history",base:"/my-warehouse-app/",routes:ie});ne.beforeEach((e,t,s)=>{const a=Object(D["b"])().currentUser,r=e.matched.some(e=>e.meta.requiresAuth);r||a||"/login"===e.path?s():s("/login")});var le=ne;a["a"].use(M["a"]);var ce=new M["a"].Store({state:{userUID:null,userEmail:null,userName:null,userToken:null,userAdmin:!1,userItems:[],userItemsHeader:[],unsubscribeItemsListener:null,allUsers:[],selectedUserItems:[],selectedUserItemsHeaders:[],uploadMessage:"",loading:!1,loadingUpload:!1},getters:{getUserName:e=>e.userName,getUserEmail:e=>e.userEmail,getUserAdmin:e=>e.userAdmin,getAllUsers:e=>e.allUsers,getUploadMessage:e=>e.uploadMessage,getUserItems:e=>e.userItems,getUserItemsHeader:e=>e.userItemsHeader,getSelectedUserItems:e=>e.selectedUserItems,getSelectedUserItemsHeaders:e=>e.selectedUserItemsHeaders,getLoading:e=>e.loading,getUnsubscribeItemsListener:e=>e.unsubscribeItemsListener,getLoadingUpload:e=>e.loadingUpload},mutations:{setProfileInfo(e,t){e.userUID=t.id,e.userEmail=t.data().email,e.userName=t.data().name,e.userAdmin=t.data().admin},mutateAllUsers(e,t){e.allUsers=[],t.forEach(t=>{e.allUsers.push({id:t.id,name:t.data().name,email:t.data().email})})},mutateUploadMessage(e,t){e.uploadMessage=t},mutateUserItems(e,t){e.userItems=t},mutateUserItemsHeaders(e,t){e.userItemsHeader=t},mutateSelectedUserItems(e,t){e.selectedUserItems=t},mutateSelectedUserItemsHeaders(e,t){e.selectedUserItemsHeaders=t},mutateLoading(e,t){e.loading=t},mutateunsubscribeItemsListener(e,t){e.unsubscribeItemsListener=t},mutateLoadingUpload(e,t){e.loadingUpload=t}},actions:{async getUserItems({commit:e},t){e("mutateLoading",!0);const s=await Object(A["b"])(Object(A["d"])(),"customerData/"+t),a=await Object(A["c"])(s);a.data()&&(e("mutateSelectedUserItems",a.data().items),e("mutateSelectedUserItemsHeaders",Object.keys(a.data().items[0]))),e("mutateLoading",!1)},async uploadAllDocsUser({commit:e},t){e("mutateLoadingUpload",!0);const s=await Object(A["b"])(Object(A["d"])(),"users/"+Object(te["c"])().currentUser.uid),a=await Object(A["c"])(s),r=a.data().admin;if(r&&!0===r){const s=await Object(A["b"])(Object(A["d"])(),"customerData/"+t.email);Object(A["g"])(s,t).then(()=>{e("mutateUploadMessage","Upload csv complete!! Refresh page to see changes."),e("mutateLoadingUpload",!1)}).catch(t=>{e("mutateUploadMessage","Error! "+t),e("mutateLoadingUpload",!1)})}else e("mutateUploadMessage","You are not admin!!")}},modules:{}}),de=s("f309");a["a"].use(de["a"]);var ue=new de["a"]({}),me=s("bc7b");const pe={apiKey:"AIzaSyBoC_FILMT-nGNhHn9PC7tVf5vezpIJP2o",authDomain:"warehouse-app-b2a42.firebaseapp.com",projectId:"warehouse-app-b2a42",storageBucket:"warehouse-app-b2a42.appspot.com",messagingSenderId:"824873237307",appId:"1:824873237307:web:0ef8a0914d7d22d770951e"},he=Object(me["a"])(pe);a["a"].config.productionTip=!1,Object(D["b"])().onAuthStateChanged(()=>{he&&new a["a"]({router:le,store:ce,vuetify:ue,render:e=>e(m)}).$mount("#app")})},9752:function(e,t,s){},"9ca8":function(e,t,s){"use strict";s("9752")}});
//# sourceMappingURL=app.1cf942f1.js.map