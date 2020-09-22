<template>
  <div id="app">
    <div id="nav">
      <el-row class="boxs">
        <el-col :span='12'>
          <my-left/>
        </el-col>
        <el-col :span='12'>
          <my-right/>
        </el-col>
      </el-row>
     <video src="./assets/img/bg.mp4" autoplay loop></video>
    </div>
  </div>
</template>
<script>
import myLeft from '@/views/left.vue';
import myRight from '@/views/right.vue';

export default {
  components: {
    myLeft,
    myRight,
  },
};
</script>
<style lang="scss">
@import 'assets/css/App/initializa.css';
html,body,#app,#nav {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
video{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  opacity: 0.6;
  z-index: -10;
}
body{
  overflow: hidden;
  background: #2c3e50;
}
.boxs{
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  width: 1400px;
  height: 680px;
  box-sizing: border-box;
  overflow: hidden;
  // border:1px solid #fff;
  &>div{
    width: 49%;
    height: 100%;
  }
}
</style>
