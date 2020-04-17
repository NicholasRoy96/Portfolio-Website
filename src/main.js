import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueScrollTo from 'vue-scrollto'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(vueScrollTo)
Vue.use(vueLazyLoad)

new Vue({
  vuetify,
  icons: {
    iconfont: 'mdiSvg',
  },
  render: h => h(App)
}).$mount('#app')
