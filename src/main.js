import Vue from 'vue'
import Router from 'vue-router'
import Firebase from 'firebase'
import App from './App'
import { prodConfig } from '../../config-javascript-web/prod/config.js'
import { testConfig } from '../../config-javascript-web/test/config.js'
import { config } from '../../config-javascript-web/dev/config.js'
import { routes } from './routes'
import { store } from './store'

// Initialize Firebase
if (process.env.NODE_ENV === 'prod') {
  Firebase.initializeApp(prodConfig)
} else if (process.env.NODE_ENV === 'test') {
  Firebase.initializeApp(testConfig)
} else {
  Firebase.initializeApp(config)
}

// Set-up and use the Vue Router
// Pass in your routes and then
// Set the mode to use history
// removes # from the URL
Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

// Check before each page load whether the page requires authentication/
// if it does check whether the user is signed into the web app or
// redirect to the sign-in page to enable them to sign-in
router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('/sign-in')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

// Wrap the vue instance in a Firebase onAuthStateChanged method
// This stops the execution of the navigation guard 'beforeEach'
// method until the Firebase initialization ends
Firebase.auth().onAuthStateChanged(() => {
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
})
