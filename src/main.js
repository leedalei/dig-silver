import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/components/SvgIcon'
import Toast from '@/assets/js/toast'
// import VueClipboard from 'vue-clipboard2'
// import Highlight from 'vue-markdown-highlight'
// import 'highlight.js/scss/monokai-sublime.scss'



// Vue.use(Highlight)
// Vue.use(VueClipboard)
Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)

Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
