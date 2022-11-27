<template>

  <div :style="{width:width+'px'}" class="processBox" @mouseover="showTip=true" @mouseleave="showTip=false">

    <div :style="{width:width+'px'}" class="bgBox">
      <template v-for="n in cols">
        <span ref="bg" :key="n" :style="{width:colWidth+'px',marginRight:colWidth+'px'}" class="bg"
              style="background-color:#f2f2f2"/>
      </template>

      <div :style="{width:width+'px'}" class="qgBox">
        <template v-for="n in colsActive">
          <el-tooltip v-if="n=== colsActive" v-model="showTip" :manual="true" :key="n" :content="percent+'%'"
                      popper-class="processTip" effect="light" placement="top">
            <span ref="qg" :style="{width:colWidth+'px',marginRight:colWidth+'px',backgroundColor:bgColor}" class="qg"/>
          </el-tooltip>
          <span v-else ref="qg" :key="n" :style="{width:colWidth+'px',marginRight:colWidth+'px',
          backgroundColor:bgColor}" class="qg"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 注：此宽度按cols进行等分！若进度条间距不均衡，可适当修改值。
    width: {
      type: Number,
      default: 600
    },
    // 等分的竖条。如果width比较大，如1920.则这里cols可以设大点。
    cols: {
      type: Number,
      default: 36
    },
    // 百分比
    percent: {
      type: Number,
      default: 0
    },
    // 背景色
    bgColor: {
      type: String,
      default: '#37b588'
    }
  },
  data () {
    return {
      showTip: false
    }
  },
  computed: {
    // 激活的竖条
    colsActive () {
      return parseInt (this.percent / (100 / this.cols))
    },

    // 单个竖条宽度
    colWidth () {
      return (this.width / this.cols / 2)
    }
  }

}
</script>

<style scoped lang="scss">
.processBox {
  padding: 4px 0 4px 8px !important; //因为旋转，导致左，上间距不同。
  box-sizing: content-box;
  border: 1px solid #ddd;

  .qgBox,
  .bgBox {
    display: flex;
    /* 默认就是下面此属性
    flex-wrap:nowrap; //不换行
    justify-content: flex-start ; //左对齐
    */
  }

  .bgBox {
    position: relative;
    height: 14px;
  }

  .qgBox {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bg,
  .qg {

    /* flex: 0  0  auto ; */
    display: inline-block;
    height: 100%;
    transform: skewX(-30deg); //倾斜
  }
}

</style>

<style lang="scss">
// 全局
.processTip {
  position: relative;
  padding: 5px 20px !important;
  border-radius: 1px;

}

</style>
