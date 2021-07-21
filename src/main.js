import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import initialHydrogen from "@/components/initialHydrogen";
import terminalHydrogen from "@/components/terminalHydrogen";
import twoHydrogen from "@/components/twoHydrogen";
import horizontal from "@/components/horizontal";
import vertical from "@/components/vertical";

Vue.config.productionTip = false

import Notify from 'mdbvue/lib/components/Notify'
Vue.use(Notify);

Vue.component("initialHydrogen", initialHydrogen);
Vue.component("terminalHydrogen", terminalHydrogen);
Vue.component("twoHydrogen", twoHydrogen);
Vue.component("horizontal", horizontal);
Vue.component("vertical", vertical);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
