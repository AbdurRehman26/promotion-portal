require('./bootstrap');


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import store from './store';
import FBSignInButton from 'vue-facebook-signin-button'
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';


const options = {
  position: "top-end",
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

require('./route-middleware');


Vue.use(VueSweetalert2, options);
Vue.use(FBSignInButton)
Vue.config.productionTip = false

Vue.use(ArgonDashboard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
