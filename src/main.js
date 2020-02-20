import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  icons: {
    iconfont: 'mdiSvg',
  },
  render: h => h(App)
}).$mount('#app')
