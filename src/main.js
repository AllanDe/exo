import Vue from 'vue'
import App from './App.vue'
import router from './router'
import antd from 'ant-design-vue';
Vue.config.productionTip = false

import 'ant-design-vue/dist/antd.css';
Vue.use(antd)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
