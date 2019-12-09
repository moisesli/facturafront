import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign,faUser,faBook,faHome, faLockOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



library.add(faDollarSign,faUser,faHome,faLockOpen,faBook, faAddressCard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false
Vue.use(BootstrapVue)


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
