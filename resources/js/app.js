require('./bootstrap');


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import store from './store';
import FBSignInButton from 'vue-facebook-signin-button'

require('./route-middleware');


Vue.use(FBSignInButton)
Vue.config.productionTip = false

Vue.use(ArgonDashboard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
