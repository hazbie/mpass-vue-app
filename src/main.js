import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    getImgUrl:function(img) {
      var images = require.context('./images', false, /\.jpg$/)
      return images('./' + img + ".jpg")
    }
  },
})

new Vue({
  render: h => h(App)
}).$mount('#app')
