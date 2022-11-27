<template>
  <div>
    <hyfLine :initData="initData"/>
    <div style="text-align: center;margin-top:8%;position:relative;">
      <div style="">
        <el-progress
          type="circle"
          :percentage="10"
          stroke-width="8"
          color="#2264FF"
          class="bigCircle"
        ></el-progress>
      </div>
      <div style="position:absolute;top:9%;bottom:0;left:0;right:0;">
        <el-progress
          id="circle_two"
          type="circle"
          :percentage="30"

          stroke-width="8"
          color="#FF6469"
          class="smallCircle"
        ></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

import hyfLine from "../components/hyfLine";

export default {
  components: {
    hyfLine
  },
  data () {
    return {
      arr:[1,2,3,4,5,6,7,8,9,10],
      ws: '200',
      num: 1,
      initData: {
        uuId: 'box4',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        series: [399, 2, 3, 444, 5, 66, 238, 9, 10, 111, 122, 200],
        // color: 'rgba(118,113,227,0.3)', // 线
        // color1: 'rgba(118,113,227,1)', // 上背景
        // color2: 'rgba(118,113,227,0.3)', // 下背景
        width: '200px',
        height:'200px'
      },
      black: {
        color: 'rgba(112,147,255,0.3)', // 线
        color1: 'rgba(112,147,255,1)', // 上背景
        color2: 'rgba(112,147,255,0.3)', // 下背景
      },
      red: {
        color: 'rgba(118,113,227,0.3)', // 线
        color1: 'rgba(118,113,227,1)', // 上背景
        color2: 'rgba(118,113,227,0.3)', // 下背景
      },
      red1: {
        color: 'rgba(167, 204, 255,0.3)', // 线
        color1: 'rgba(167, 204, 255,1)', // 上背景
        color2: 'rgba(167, 204, 255,0.3)', // 下背景
      },
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: 'auto',
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: '16:9',
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [{
          //类型
          type: "video/mp4",
          //url地址
          src: require ('@/assets/yue.mp4')
        }],
        //你的封面地址
        poster: '',
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true
        }
      }
    }
  },
  watch: {
    btnBg (val) {
      this.echartsColorChange (val)
    }
  },
  computed: {
    ...mapState (['btnBg'])
  },
  mounted () {
    let echartsColor = JSON.parse (localStorage.getItem ('lineChange'))
    if (echartsColor) {
      this.initData.color = echartsColor.color
      this.initData.color1 = echartsColor.color1
      this.initData.color2 = echartsColor.color2
    }
    console.log (this.arr.splice(0,5))
    console.log (this.arr.splice(0,5))
    console.log (this.arr.splice(0,4))
  },
  methods: {
    gb () {
      return index === 2;
      this.num++
      console.log (this.num)
      switch (this.num) {
        case 1:
          this.initData.width = '200px'
          this.ws = '200'
          break;
        case 2:
          this.initData.width = '500px'
          this.ws = '500'
          break;
        case 3:
          this.initData.width = '600px'
          this.ws = '600'
          break;
      }
    },
    echartsColorChange (key) {
      switch (key) {
        case '1':
          this.initData.color = this.black.color
          this.initData.color1 = this.black.color1
          this.initData.color2 = this.black.color2
          localStorage.setItem ('lineChange', JSON.stringify (this.black))
          break;
        case '2':
          this.initData.color = this.red.color
          this.initData.color1 = this.red.color1
          this.initData.color2 = this.red.color2
          localStorage.setItem ('lineChange', JSON.stringify (this.red))
          break;
        case '3':
          this.initData.color = this.red1.color
          this.initData.color1 = this.red1.color1
          this.initData.color2 = this.red1.color2
          localStorage.setItem ('lineChange', JSON.stringify (this.red1))
          break;
      }
    }
  }
}
</script>

<style scoped>
.actives{
  max-width: 33%;
}
.demo {
  display: inline-block;
  width: 300px;
  height: 338px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  margin-right: 4px;
}

.demo:hover {
  display: block;
}
</style>
