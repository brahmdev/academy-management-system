import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import VueFormWizard from 'vue-form-wizard'
import store from './store'
import '!style-loader!css-loader!less-loader!./theme/index.less'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueFormWizard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

