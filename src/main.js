import Vue from 'vue'
import App from './App'
import router from './router'

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Notifications from 'vue-notification'

Vue.use(firestorePlugin);
Vue.use(Notifications);

// Initialize Cloud Firestore
firebase.initializeApp({
  apiKey: 'AIzaSyCdHEEQKgyvLUZXQ37I87vyhwka2MrNbqk',
  authDomain: 'loginapp-af703.firebaseapp.com',
  databaseURL: 'https://loginapp-af703.firebaseio.com',
  projectId: 'loginapp-af703',
  storageBucket: 'loginapp-af703.appspot.com',
  messagingSenderId: 'G-FT9CVW3KF7'
});

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App }
});

