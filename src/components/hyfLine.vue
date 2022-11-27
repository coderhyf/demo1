<template>
  <div :id="initData.uuId" :style="{'width':initData.width, 'height':initData.height}"></div>
</template>

<script>
export default {
  props: ['initData'],
  watch: {
    initData: {
      deep: true,
      handler () {
        this.a ()
      }
    }
  },
  mounted () {
    this.a ()

  },
  methods: {
    a () {
      let myChart = this.$echarts.init (document.getElementById (this.initData.uuId));
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {},
        },
        type: 'category',
        legend:{},
        xAxis: {
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 30,  //倾斜的程度
          },
          data: this.initData.data ? this.initData.data : [],
          // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },

        yAxis: {
          splitLine: {    // gird 区域中的分割线
            lineStyle: {
              color: '#E8E8E8',
              width: 1,
              type: 'dashed'
            }
          },
        },
        series: [{
          type: 'line',
          smooth: true, //是否平滑
          showAllSymbol: true,
          tooltip: {
            show: true
          },
          symbol: 'circle', // 设置标记的图形为circle
          // symbolSize:8,
          itemStyle: {
            normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
              color: this.$echarts.graphic.LinearGradient (0, 0, 0, 1, [
                  {
                    offset: 0, color: '#81befd' // 0% 处的颜色
                  },
                  {
                    offset: 0.5, color: '#e4f2ff' // 100% 处的颜色
                  },
                  {
                    offset: 1, color: '#81befd' // 100% 处的颜色
                  }
                ]
              ), //背景渐变色
              lineStyle: {        // 系列级个性化折线样式
                width: 1,
                type: 'solid',
                color: "#0180ff" //折线的颜色
              }
            },
            // emphasis: {
            //   color: '#0180ff',
            //   lineStyle: {        // 系列级个性化折线样式
            //     width: 2,
            //     type: 'dotted',
            //     color: "0180ff"
            //   }
            // }
          },//线条样式
          areaStyle: {normal: {}},
          data: this.initData.series ? this.initData.series : []
        },
        ]
      };
      myChart.setOption (option);

    }
  }
}
</script>
