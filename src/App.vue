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
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
