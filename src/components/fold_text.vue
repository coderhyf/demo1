<template>
  <div class="wrap">
    <div :class="textOver && !btnFold ? ' over' : ''" ref="divRef">
      <span class="content" ref="spanRef">{{ showContent }}</span>
    </div>
   <div>
     <span class="btn" v-if="textOver" @click="btnFold = !btnFold">{{ btnFold ? "收起" : "展开" }}</span>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textOver: false, //文本是否超出3行
      btnFold: false, //按钮默认显示展开
    };
  },
  props: {
    showContent: {
      type: String,
      default: false,
    },
  },
  created () {
    this.$nextTick (() => {
      // 判断文本是否超过3行
      if (this.$refs.divRef) {
        let descHeight = window.getComputedStyle (this.$refs.divRef).height.replace ("px", "");
        console.log ("descHeight:" + descHeight);
        this.textOver = descHeight > 60;
      }
    });
  },
  mounted () {
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
}

.over {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.btn {
  font-size: 14px;
  color: rgb(75, 75, 216);
  float: right;
  cursor: pointer;
  display: inline-block;
  width: 100px;
  text-align: right;
}
</style>
