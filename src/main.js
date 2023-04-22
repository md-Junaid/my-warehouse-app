import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBoC_FILMT-nGNhHn9PC7tVf5vezpIJP2o",
  authDomain: "warehouse-app-b2a42.firebaseapp.com",
  projectId: "warehouse-app-b2a42",
  storageBucket: "warehouse-app-b2a42.appspot.com",
  messagingSenderId: "824873237307",
  appId: "1:824873237307:web:0ef8a0914d7d22d770951e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

getAuth().onAuthStateChanged(() => {
  if (app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})



