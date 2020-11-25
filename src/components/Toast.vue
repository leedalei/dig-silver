<template>
  <transition name="toast">
    <div class="toast" v-show="isShow">
      <p>
        <svg-icon :class="`toast-${type}`" :iconClass="`icon-${type}`" />
        {{ tips }}
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  components: {},
  props: {},
  data() {
    return {
      isShow: false,
      tips: "",
      type: "info",
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  font-size: 16px;
  padding: 0 20px;
  height: 40px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 40px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  &-enter-active,
  &-leave-active {
    transition: all ease 0.5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  &-info {
    color: #fff;
  }
  &-error {
    color: red;
  }
  &-success {
    color: greenyellow;
  }
  &-warning {
    color: yellow;
  }
}
</style>
