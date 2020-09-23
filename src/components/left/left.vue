<template>
  <div class="box">
    <el-row class="introduce">
      <el-col class="picture" :span="12">
        <img src="./oneModule.jpg" alt />
      </el-col>
      <el-col class="name" :span="12">
        <ul>
          <li>
            <span>姓名:</span>
            <span>董秋龙</span>
          </li>
          <li>
            <span>性别:</span>
            <span>男</span>
          </li>
          <li>
            <span>年龄:</span>
            <span>20</span>
          </li>
          <li>
            <span>出生年月:</span>
            <span>2000.09</span>
          </li>
          <li>
            <span>政治面貌:</span>
            <span>团员</span>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row class="skill">
      <h4>专业技能</h4>
      <div class="skill-dist">
        <ul>
          <li v-for="item in skils" :key="item.name">
            <span>{{item.name}}</span>
            <div>
              <p :style="{transition: 'all 2s', width:item.plan}"></p>
            </div>
          </li>
        </ul>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      self: false,
      skils: [
        {
          name: 'HTML',
          plan: '0px',
          width: '95%',
        },
        {
          name: 'CSS',
          plan: '0px',
          width: '95%',
        },
        {
          name: 'JS',
          plan: '0px',
          width: '85%',
        },
        {
          name: 'EX6',
          plan: '0px',
          width: '75%',
        },
        {
          name: 'JQuery',
          plan: '0px',
          width: '85%',
        },
        {
          name: 'Bootstrap',
          plan: '0px',
          width: '90%',
        },
        {
          name: 'Webpack',
          plan: '0px',
          width: '70%',
        },
        {
          name: 'gitHap',
          plan: '0px',
          width: '74%',
        },
        {
          name: 'Element',
          plan: '0px',
          width: '72%',
        },
        {
          name: 'Vue',
          plan: '0px',
          width: '85%',
        },
        {
          name: 'Lodash',
          plan: '0px',
          width: '65%',
        },
        {
          name: 'Mock',
          plan: '0px',
          width: '60%',
        },
        {
          name: 'Moment',
          plan: '0px',
          width: '56%',
        },
      ],
    };
  },
  mounted() {
    this.skils.forEach((item) => {
      /*eslint-disable*/
     setTimeout(function(){
       item.plan = item.width;
     },200)
     });
  },
};

</script>
<style lang='scss' scoped>
@import "@/assets/css/left/left.scss";
</style>
