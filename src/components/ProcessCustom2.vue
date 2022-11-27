<template>
  <div :style="{width:width+'px'}" class="processBox">
    <div :style="{width:width+'px'}" class="bgBox">
      <template v-for="n in cols">
        <span :key="n" :style="{width:colWidth+'px',marginRight:colWidth+'px',backgroundColor:bgColor}"/>
      </template>
      <div :style="{width:width+'px'}" class="qgBox">
        <template v-for="n in colsActive">
          <div :key="n" :style="{width:colWidth+'px',marginRight:colWidth+'px',backgroundColor:itemColor}"/>
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
    // item
    itemColor: {
      type: String,
      default: '#37b588'
    },
    // 背景色
    bgColor: {
      type: String,
      default: '#ebebeb'
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

  .qgBox,
  .bgBox {
    display: flex;
  }

  .bgBox {
    position: relative;
    height: 14px;
  }

  .qgBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

}

</style>
