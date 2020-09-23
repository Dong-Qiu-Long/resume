<template>
  <el-row class="left">
      <el-col :span="10">
        <l-left />
      </el-col>
    <el-col :span="10">
      <l-center />
    </el-col>
    <el-col :span="4">
      <l-right />
    </el-col>
  </el-row>
</template>
<script>
import lLeft from '@/components/left/left.vue';
import lCenter from '@/components/left/center.vue';
import lRight from '@/components/left/right.vue';

export default {
  components: {
    lLeft,
    lCenter,
    lRight,
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/views/left.scss";
</style>
