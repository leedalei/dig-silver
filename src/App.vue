<template>
  <div id="app" :class="theme">
    <button class="p-2 border-2 rounded text-base" @click="handleChange">
      改变主题
    </button>
    <router-view />
    <button
      class="fixed right-0 bottom-0 px-12 py-4 border-solid border-2 border-blue-400 rounded-full outline-none"
      @click="backTop"
    >
      回到顶部
    </button>
    <nav-bar />
  </div>
</template>

<script>
import { scrollTo } from "./common/utils"
import NavBar from "./components/NavBar"

export default {
  name: "App",
  components: {
    NavBar,
  },
  props: {},
  data() {
    return {
      theme: "light",
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    handleChange() {
      if (this.theme === "light") {
        this.theme = "dark"
      } else {
        this.theme = "light"
      }
    },
    backTop() {
      const e = document.documentElement || document.body
      scrollTo(e)
    },
  },
}
</script>

<style scoped lang="scss">
#app {
  height: 1000px;
  @apply text-center;
}
</style>
