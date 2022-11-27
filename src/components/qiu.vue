<template>
  <div style="width: 382px;">
    <div style="">
      <span class="title">XX排名情况</span>
      <span class="dateTime">2020-05-26 08:00</span>
    </div>
    <div style="position:relative;">
      <div style="width:150px;height:140px;">
        <el-row type="flex" align="middle" justify="center" style="height:40px;"><span class="targetNum">12</span><span class="totalNum">/12</span></el-row>
        <el-row type="flex" align="middle" justify="center" style="height:40px;"><span>达标/总数</span></el-row>
        <el-row type="flex" align="middle" justify="center" style="height:40px;"><span class="isTarget">达标</span></el-row>
      </div>
      <div class="waterCircle">
        <div class="container" :class="{ warning: parseInt(usingRate) > 60, standard: parseInt(usingRate) > 80 }">
          <div class="wave"></div>
          <div class="wave-mask" :style="`top: ${40 - parseInt(usingRate)}px`"></div>
        </div>
      </div>
      <div style="position:absolute;top:30px;left:226px;">
        <div style="width:70px;">
          <el-row type="flex" align="middle" justify="center"><span class="totalNum">100</span><span style="font-size:14px;">%</span></el-row>
          <el-row type="flex" align="middle" justify="center"><div style="font-size:14px;">达标率</div></el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usingRate: 65, // 根据实际接口传来的值不同，会设置不同的颜色样式
    };
  },
  mounted() {
    this.getDataSource();
  },
  methods: {
    getDataSource() {
      // 调接口，得到实际的 usingRate值
    }
  },
};
</script>


<style lang="scss" scoped>
.title{
  display: inline-block;
  padding: 10px 0px 0px 10px;
  font-size: 16px;
  height: 26px;
  font-weight: bold;
}
.dateTime{
  display: inline-block;
  padding:0px 0px 20px 120px;
  color: #01E401;
  font-weight:bold;
  transform: skew(-20deg);
}
.waterQualitySpan{
  display: inline-block;
  width: 50px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.targetNum{
  color: #12f4ff;
  font-size: 30px;
}
.totalNum{
  font-size: 30px;
}
.isTarget{
  display: inline-block;
  background: #12f4ff;
  width: 65px;
  text-align: center;
  height: 25px;
  line-height: 25px;
  border-radius: 12px;
  color: black;
}
/* ========================================  波纹 start  =========================================================== */
.waterCircle{
  position: absolute;
  top: 60px;
  left: 260px;
}
.container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px dashed red;
  background: rgba(2, 47, 79, 0.8);
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  .wave {
    position: relative;
    width: 100px;
    height: 100px;
    background-image: linear-gradient(-180deg, #aaff80 13%, #67c23a 91%);
    border-radius: 50%;
  }
  // 波纹效果
  .wave-mask {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    left: 50%;
    border-radius: 40%;
    background-color: rgba(2, 47, 79, 1);
    transform: translate(-50%, -70%) rotate(0);
    animation: toRotate 10s linear -5s infinite;
    z-index: 20;
  }
  &.warning {
    border: 2px dashed #e6a23c;
    .wave {
      background-image: linear-gradient(-180deg, #f0c78a 13%, #e6a23c 91%);
    }
    &.standard {
      border: 2px dashed #12f4ff;
      .wave {
        background-image: linear-gradient(-180deg, #12f4ff 13%, #12f4ff 91%);
      }
    }
  }
}
.using-slider {
  width: 400px;
  margin: 0 auto;
}

@keyframes toRotate {
  50% {
    transform: translate(-50%, -70%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}
/* ========================================  波纹 end  =========================================================== */

</style>

