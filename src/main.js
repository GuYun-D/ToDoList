import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    // 配置全局事件总线，就是把vm挂载到vue的原型上，让所有的组件对象都能找到他，调用$on和$emit
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')
