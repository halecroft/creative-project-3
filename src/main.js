import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import bookData from './books.js'

let data = {
  books: bookData,
  booksToRead: []
}

new Vue({
  router,
  data,
  render: h => h(App),
}).$mount('#app')