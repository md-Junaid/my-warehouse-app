(function(e){function t(t){for(var s,l,n=t[0],i=t[1],c=t[2],d=0,m=[];d<n.length;d++)l=n[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},o=[];function l(e){return n.p+"js/"+({about:"about"}[e]||e)+"."+{about:"00f25ad8"}[e]+".js"}function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=r[e]=[t,s]}));t.push(a[2]=s);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.src=l(e);var c=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(d);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",c.name="ChunkLoadError",c.type=s,c.request=o,a[1](c)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/REPO_NAME/",n.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=a("7496"),o=a("f6c4"),l=function(){var e=this,t=e._self._c;return t(r["a"],[t(o["a"],[t("router-view",{staticClass:"gradBackground fullH"})],1)],1)},n=[],i={name:"App",data:()=>({})},c=i,d=(a("9ca8"),a("2877")),u=Object(d["a"])(c,l,n,!1,null,null,null),m=u.exports,p=a("8c4f"),h=a("c6a6"),f=a("8336"),b=a("b0af"),g=a("99d9"),w=a("cc20"),U=a("62ad"),v=a("a523"),y=a("8fea"),j=a("169a"),O=a("ce7e"),I=a("23a7"),x=a("132d"),P=a("0fd9"),_=a("8dd9"),C=a("2fa4"),k=function(){var e=this,t=e._self._c;return t(v["a"],{staticClass:"d-flex justify-center align-center",attrs:{fluid:""}},[t("div",{style:{minWidth:"100%"}},[t(_["a"],{staticClass:"pa-6 rounded-xl",attrs:{elevation:20,"min-width":"100%"}},[t(P["a"],{staticClass:"d-flex justify-space-between"},[t(U["a"],{staticClass:"my-auto text-center",attrs:{cols:"12",sm:"4",md:"3"}},[t("span",{staticClass:"subtitle-1 font-weight-medium my-auto"},[e._v(" Logged In: "),t(w["a"],{staticClass:"ma-2 rounded-xl font-weight-bold title elevation-5",style:{color:"white"},attrs:{label:"",color:"#4158D0"},on:{click:function(t){e.userInfoDialog=!0}}},[t(x["a"],{attrs:{left:""}},[e._v(" mdi-account-circle-outline ")]),t("span",[e._v(" "+e._s(e.getUserName)+" ")])],1),t("UserInfoDialog",{attrs:{dialog:e.userInfoDialog},on:{close:function(t){return e.close()}}})],1)]),!0===e.getUserAdmin?t(U["a"],{attrs:{cols:"12",sm:"6"}},[t(h["a"],{attrs:{items:e.getAllUsers,dense:"","item-text":e=>`${e.name} (${e.email})`,label:"Users","return-object":""},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}}),t("div",{staticClass:"text-center"},[t(f["a"],{style:{color:"#fff"},attrs:{rounded:"",color:"#C850C0",disabled:!e.enableUpload,loading:e.loading},on:{click:function(t){return e.openUploadDialog()}}},[e._v(" Upload data ")])],1)],1):e._e(),t(U["a"],{staticClass:"my-auto text-center",attrs:{cols:"12",sm:"2"}},[t(f["a"],{staticClass:"my-auto",style:{color:"#fff"},attrs:{rounded:"",color:"#4158D0"},on:{click:e.logout}},[e._v("Logout")])],1)],1)],1),t(y["a"],{staticClass:"elevation-20 pa-4 rounded-xl mt-6",attrs:{headers:e.headers,items:e.userItems,"items-per-page":5,loading:e.loading}},[t("template",{slot:"no-data"},[t("p",{staticClass:"title"},[e._v("Sorry Nothing to display here, contact your admin :(")])])],2)],1),t(j["a"],{attrs:{persistent:"",width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(b["a"],[t(g["c"],[e._v("Upload Data for selected user")]),t(O["a"],{staticClass:"mx-4"}),t(g["b"],{staticClass:"pa-6"},[t(I["a"],{attrs:{"show-size":"","prepend-icon":"mdi-paperclip",placeholder:"Select csv file only"},model:{value:e.csv,callback:function(t){e.csv=t},expression:"csv"}})],1),t(g["a"],[t(C["a"]),t(f["a"],{attrs:{color:"secondary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")]),t(f["a"],{attrs:{color:"#4158D0",outlined:""},on:{click:function(t){return e.upload()}}},[e._v(" Upload ")])],1)],1)],1)],1)},E=[],D=(a("14d9"),a("be8c")),M=a("2f62"),A=a("369b"),S=a.n(A),H=a("4bd4"),N=a("8654"),L=function(){var e=this,t=e._self._c;return t(j["a"],{attrs:{persistent:"",width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(b["a"],[t(H["a"],{ref:"updateForm",staticClass:"text-right",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t(g["b"],[t(v["a"],[t(P["a"],[t(U["a"],{attrs:{cols:"12"}},[t(N["a"],{attrs:{label:e.getUserName},model:{value:e.currentName,callback:function(t){e.currentName=t},expression:"currentName"}})],1),t(U["a"],{attrs:{cols:"12"}},[t(N["a"],{attrs:{label:"Email",value:e.getUserEmail,filled:"",readonly:""}})],1),t(U["a"],{attrs:{cols:"12"}},[t(N["a"],{attrs:{label:"Current Password","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.currentPassword,callback:function(t){e.currentPassword=t},expression:"currentPassword"}})],1),t(U["a"],{attrs:{cols:"12"}},[t(N["a"],{attrs:{label:"New Password","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1)],1)],1)],1),t(g["a"],[t(C["a"]),t(f["a"],{attrs:{color:"secondary",text:""},on:{click:function(t){return e.closeDialog()}}},[e._v(" Close ")]),t(f["a"],{attrs:{color:"#4158D0",outlined:"",type:"submit",loading:e.loading}},[e._v(" Update ")])],1)],1)],1)],1)},$=[],q=a("1494"),R={name:"UserInfoDialog",props:["dialog"],data(){return{currentName:"",loading:!1,currentPassword:"",newPassword:"",show:!1}},computed:{...Object(M["b"])(["getUserName","getUserEmail"])},methods:{closeDialog(){this.$emit("close")},async submit(){if(this.loading=!0,this.currentName){const e=Object(q["b"])(Object(q["e"])(),"users/"+Object(D["b"])().currentUser.uid);Object(q["h"])(e,{name:this.currentName}).catch(e=>{this.loading=!1,alert(""+e.message)})}if(this.newPassword){const e=await D["a"].credential(this.getUserEmail,this.currentPassword);await Object(D["c"])(Object(D["b"])().currentUser,e).catch(e=>{alert(""+e.message)}),await Object(D["e"])(Object(D["b"])().currentUser,this.newPassword).catch(e=>{alert(""+e.message)})}this.loading=!1,this.$emit("close"),this.$router.go()}}},T=R,F=Object(d["a"])(T,L,$,!1,null,null,null),z=F.exports,B={name:"Home",data:()=>({enableUpload:!0,loading:!1,csv:null,csvData:[],dialog:!1,userInfoDialog:!1,selectedUser:{},headers:[],userItems:[]}),components:{UserInfoDialog:z},created(){Object(D["b"])().onAuthStateChanged(e=>{this.$store.commit("updateUser",e),e&&this.$store.dispatch("getCurrentUser")})},computed:{...Object(M["b"])(["getUserName","getUserEmail","getUserAdmin","getAllUsers","getEnableUpload","getUploadMessage","getUserItems","getUserItemsHeader","getSelectedUserItems","getSelectedUserItemsHeaders","getLoading"])},watch:{getEnableUpload(e){this.enableUpload=e},getUploadMessage(e){alert(e)},getUserItemsHeader(e){this.headers=[],e.forEach(e=>{this.headers.push({text:e,value:e})})},getUserItems(e){this.userItems=e},selectedUser(e){if(e.id===Object(D["b"])().currentUser.uid)return this.headers=[],this.userItems=this.getUserItems,void this.getUserItemsHeader.forEach(e=>{this.headers.push({text:e,value:e})});this.headers=[],this.userItems=[],this.$store.dispatch("getUserItems",e.email)},getSelectedUserItemsHeaders(e){e.forEach(e=>{this.headers.push({text:e,value:e})})},getSelectedUserItems(e){this.userItems=e},getLoading(e){this.loading=e}},methods:{logout(){Object(D["d"])(Object(D["b"])()).then(()=>{this.$router.push("/login")}).catch(e=>{alert(e.message)})},openUploadDialog(){this.selectedUser.id?this.dialog=!0:alert("Select a user first")},close(){this.userInfoDialog=!1},async upload(){var e=this;if(void 0==this.csv)return alert("Please select a csv file"),void(this.csvData=[]);S.a.parse(this.csv,{header:!0,dynamicTyping:!0,skipEmptyLines:!0,complete(t){e.loading=!1;let a={id:e.selectedUser.id,name:e.selectedUser.name,email:e.selectedUser.email,items:t.data};e.$store.dispatch("uploadAllDocsUser",a),e.dialog=!1}})}}},J=B,W=Object(d["a"])(J,k,E,!1,null,null,null),G=W.exports,K=a("71a3"),V=a("fe57"),Y=function(){var e=this,t=e._self._c;return t(v["a"],{staticClass:"d-flex justify-center align-center",attrs:{fluid:""}},[t("div",{staticClass:"elevation-20",style:{minWidth:"40%"}},[t(V["a"],{style:{borderRadius:"5px"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t(K["a"],{on:{click:function(t){return e.delForm()}}},[e._v("Login")]),t(K["a"],{on:{click:function(t){return e.delForm()}}},[e._v("Register")])],1),t(b["a"],[t(g["b"],[t(H["a"],{ref:"form",staticClass:"text-right",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[1===e.tab?t(N["a"],{attrs:{label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):e._e(),t(N["a"],{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(N["a"],{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",name:"password",label:"Password",type:e.show1?"text":"password",placeholder:"password",rules:[e.passwordRules.required],required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),1===e.tab?t(N["a"],{attrs:{name:"confirmPassword",label:"Confirm Password",placeholder:"confirm password","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",rules:[e.passwordRules.required],required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}):e._e(),t("div",{staticClass:"red--text text-center font-weight-medium subtitle-1"},[e._v(" "+e._s(e.errorMessage))]),0===e.tab?t(f["a"],{style:{color:"#fff"},attrs:{rounded:"",type:"submit",color:"#4158D0"}},[e._v(" Login ")]):e._e(),1===e.tab?t(f["a"],{style:{color:"#fff"},attrs:{rounded:"",type:"submit",color:"#C850C0"}},[e._v(" Register ")]):e._e()],1)],1)],1)],1)])},Q=[],X=a("6a7c"),Z={data(){return{tab:0,name:"",email:"",password:"",confirmPassword:"",show1:!1,errorMessage:"",auth:Object(X["c"])(),emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+/.test(e)||"E-mail must be valid"],passwordRules:{required:e=>!!e||"Password is required"},db:Object(q["e"])()}},methods:{delForm(){this.$refs.form.reset(),this.errorMessage=""},submit(){if(1===this.tab){if(this.password!==this.confirmPassword)return void(this.errorMessage="Password did not match");""!==this.email&&""!==this.name&&""!==this.password&&""!==this.confirmPassword?Object(X["b"])(this.auth,this.email,this.password).then(e=>{const t=e.user,a=Object(q["b"])(this.db,"users/"+t.uid);Object(q["g"])(a,{name:this.name,email:this.email,admin:!1}),this.$router.replace("/")}).catch(e=>{this.errorMessage=e.code.replace("auth/","")}):this.errorMessage="Please fill all the fields"}else Object(X["e"])(this.auth,this.email,this.password).then(e=>{e.user;this.$router.replace("/")}).catch(e=>{this.errorMessage=e.code.replace("auth/","")})}}},ee=Z,te=Object(d["a"])(ee,Y,Q,!1,null,null,null),ae=te.exports;s["a"].use(p["a"]);const se=[{path:"/",name:"Home",component:G},{path:"/login",name:"Login",component:ae},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"f820"))}],re=new p["a"]({mode:"history",base:"/REPO_NAME/",routes:se});re.beforeEach((e,t,a)=>{const s=Object(D["b"])().currentUser,r=e.matched.some(e=>e.meta.requiresAuth);r||s||"/login"===e.path?a():a("/login")});var oe=re;s["a"].use(M["a"]);var le=new M["a"].Store({state:{user:null,userUID:null,userEmail:null,userName:null,userToken:null,userAdmin:!1,userItems:[],userItemsHeader:[],allUsers:[],selectedUserItems:[],selectedUserItemsHeaders:[],uploadMessage:"",enableUpload:!0,loading:!1},getters:{getUserName:e=>e.userName,getUserEmail:e=>e.userEmail,getUserAdmin:e=>e.userAdmin,getAllUsers:e=>e.allUsers,getUploadMessage:e=>e.uploadMessage,getEnableUpload:e=>e.enableUpload,getUserItems:e=>e.userItems,getUserItemsHeader:e=>e.userItemsHeader,getSelectedUserItems:e=>e.selectedUserItems,getSelectedUserItemsHeaders:e=>e.selectedUserItemsHeaders,getLoading:e=>e.loading},mutations:{updateUser(e,t){e.user=t},setProfileInfo(e,t){e.userUID=t.id,e.userEmail=t.data().email,e.userName=t.data().name,e.userAdmin=t.data().admin},mutateAllUsers(e,t){e.allUsers=[],t.forEach(t=>{e.allUsers.push({id:t.id,name:t.data().name,email:t.data().email})})},mutateUploadMessage(e,t){e.uploadMessage=t},mutateEnableUpload(e,t){e.uploadComplete=t},mutateUserItems(e,t){e.userItems=t},mutateUserItemsHeaders(e,t){e.userItemsHeader=t},mutateSelectedUserItems(e,t){e.selectedUserItems=t},mutateSelectedUserItemsHeaders(e,t){e.selectedUserItemsHeaders=t},mutateLoading(e,t){e.loading=t}},actions:{async getCurrentUser({commit:e}){e("mutateLoading",!0);const t=await Object(q["b"])(Object(q["e"])(),"users/"+Object(X["c"])().currentUser.uid),a=await Object(q["c"])(t),s=a.data().admin;s&&!0===s&&this.dispatch("getAllUsers"),this.dispatch("getMyItems"),e("setProfileInfo",a)},async getAllUsers({commit:e}){const t=Object(q["f"])(Object(q["a"])(Object(q["e"])(),"users")),a=await Object(q["d"])(t);e("mutateAllUsers",a)},async getMyItems({commit:e}){const t=await Object(q["b"])(Object(q["e"])(),"customerData/"+Object(X["c"])().currentUser.email),a=await Object(q["c"])(t);a.data()&&(e("mutateUserItems",a.data().items),e("mutateUserItemsHeaders",Object.keys(a.data().items[0]))),e("mutateLoading",!1)},async getUserItems({commit:e},t){e("mutateLoading",!0);const a=await Object(q["b"])(Object(q["e"])(),"customerData/"+t),s=await Object(q["c"])(a);s.data()&&(e("mutateSelectedUserItems",s.data().items),e("mutateSelectedUserItemsHeaders",Object.keys(s.data().items[0]))),e("mutateLoading",!1)},async uploadAllDocsUser({commit:e},t){e("mutateEnableUpload",!1);const a=await Object(q["b"])(Object(q["e"])(),"users/"+Object(X["c"])().currentUser.uid),s=await Object(q["c"])(a),r=s.data().admin;if(r&&!0===r){const a=await Object(q["b"])(Object(q["e"])(),"customerData/"+t.email);Object(q["g"])(a,t).then(()=>{e("mutateUploadMessage","Upload csv complete"),e("mutateEnableUpload",!0)}).catch(t=>{e("mutateUploadMessage","Error! "+t),e("mutateEnableUpload",!0)})}else e("mutateUploadMessage","You are not admin!!"),e("mutateEnableUpload",!0)}},modules:{}}),ne=a("f309");s["a"].use(ne["a"]);var ie=new ne["a"]({}),ce=a("bc7b");const de={apiKey:"AIzaSyBoC_FILMT-nGNhHn9PC7tVf5vezpIJP2o",authDomain:"warehouse-app-b2a42.firebaseapp.com",projectId:"warehouse-app-b2a42",storageBucket:"warehouse-app-b2a42.appspot.com",messagingSenderId:"824873237307",appId:"1:824873237307:web:0ef8a0914d7d22d770951e"},ue=Object(ce["a"])(de);s["a"].config.productionTip=!1,Object(D["b"])().onAuthStateChanged(()=>{ue&&new s["a"]({router:oe,store:le,vuetify:ie,render:e=>e(m)}).$mount("#app")})},9752:function(e,t,a){},"9ca8":function(e,t,a){"use strict";a("9752")}});
//# sourceMappingURL=app.d3f59383.js.map