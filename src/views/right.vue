<template>
  <div class="right">
    <router-view></router-view>
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
