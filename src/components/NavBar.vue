<template>
  <div class="flex items-center justify-center bg-red-300 p-6">
    <nav class="flex items-center justify-between flex-wrap w-full container">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span
          class="font-semibold text-sm tracking-tight ml-4 pl-4 border-l border-white"
          >Good afternoon</span
        >
      </div>
      <div class="flex flex-wrap">
        <a
          class="text-white rounded py-1 px-4 cursor-pointer"
          style="background: #0007ff"
          >Write</a
        >
        <img
          src="https://secure.gravatar.com/avatar/32a82c21335fafd4bd8e069b6d74aa5c"
          alt="ava"
          class="w-8 h-8 rounded-full ml-5"
        />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
