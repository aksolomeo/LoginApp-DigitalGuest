import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Welcome from '../components/Welcome'
import Login from '../components/Login'
import SignUp from '../components/SignUpForm'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

// Prevent user from accessing Welcome page if he is not logged in -> re-direct to Login page
router.beforeEach(async (to, from, next) => {

  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else next();

});

export default router;