import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import moduleA from "./moduleA.js" //自己新建模块

const modules = {
  moduleA,
}

export default new Vuex.Store({
  modules,
})
