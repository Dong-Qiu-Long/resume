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
          <li>
            <span>HTML</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>CSS</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>JS</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>EX6</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>jQuery</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>BootStrap</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>Webpack</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>gitHap</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>算法</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>Vue</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>Element</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>Lodash</span>
            <div>
              <p></p>
            </div>
          </li>
          <li>
            <span>mock</span>
            <div>
              <p></p>
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
      num: 2,
    };
  },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/left/left.scss";
</style>
