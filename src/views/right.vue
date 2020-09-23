<template>
  <div class="right">
    <transition
      enter-active-class="animate__animated animate__fadeInUpBig "
    >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/views/right.scss";
</style>
