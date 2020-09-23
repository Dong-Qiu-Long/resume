<template>
  <div class="box">
    <ul>
      <li
      v-for="(item,i) in arr"
      :key="i"
      :class="{'active': i == index}"
      @click=" toggle(i)">
        <router-link :to="item.to">{{ item.item}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 1,
      arr: [
        {
          to: '/blogs',
          item: '博客网站',
        },
        {
          to: '/subentry',
          item: '小项目',
        },
        {
          to: '/exercise',
          item: '小练习',
        },
        {
          to: '/practice',
          item: '实习经验',
        },
      ],
    };
  },
  methods: {
    toggle(i) {
      this.index = i;
    },
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/left/right.scss";
</style>
