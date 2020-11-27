<template>
  <div id="app" :class="theme">
    <button class="p-2 border-2 rounded text-base" @click="handleChange">
      改变主题
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
  },
}
</script>

<style scoped lang="scss"></style>
