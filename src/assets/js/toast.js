import Vue from 'vue'
import ToastComponent from '@/components/Toast.vue'

const Toast = {}
let toastNode = null // 存储节点元素
const ToastConstructor = Vue.extend(ToastComponent)

Toast.install = function (Vue) {
  Vue.prototype.$toast = function (tips, type, duration = 1500) {
    if (toastNode) {
      // 单例模式
      toastNode.isShow = true
      toastNode.tips = tips
      toastNode.type = type
      setTimeout(() => {
        toastNode.isShow = false
      }, duration)
      return
    }
    toastNode = new ToastConstructor({
      data: {
        isShow: false,
        tips,
        type
      }
    })
    toastNode.$mount() // 挂在实例，为了获取下面的loadingNode.$el
    document.body.appendChild(toastNode.$el)
    toastNode.isShow = true
    setTimeout(() => {
      toastNode.isShow = false
    }, duration)
  };

  ['info', 'success', 'warning', 'error'].forEach(function (type) {
    Vue.prototype.$toast[type] = function (tips, duration = 1500) {
      return Vue.prototype.$toast(tips, type, duration)
    }
  })
}

export default Toast
