<template>
  <div>
    <!--  柱状图  -->
    <div :id="initData.id" style="width: 400px;height:400px;"></div>
  </div>
</template>

<script>
export default {
  name: "hyfEcharts",
  props:['initData'],
  mounted () {
    this.a ()
  },
  watch:{
    initData:{
      deep:true,
      handler(){
        this.a()
      }
    }
  },
  methods: {
    a () {
      let myChart = this.$echarts.init (document.getElementById (this.initData.id));
       // 指定图表的配置项和数据
      let option = {
        tooltip: {//鼠标悬浮弹窗提示
          trigger: 'item',
          show: true,
          showDelay: 0,
          hideDelay: 0,
          transitionDuration: 0,
          backgroundColor: '#6598FF',
          // borderColor : '#ffffff',
          borderRadius: 8,
          borderWidth: 2,
          padding: 10,
          formatter: (params) => {
            let str1 = `<span style="width: 10px; height: 10px; border-radius: 50%; background: #ffffff; display: inline-block;"></span>`
            let str2 = `<span style="padding-left: 10px; color: #ffffff">${this.initData.time}</span>`
            let str3 = `<span style="padding-left: 10px; color: #ffffff"">${this.initData.amount}:</span>`
            let str4 = `<span style="padding-left: 10px; color: #ffffff"">${params.data}</span>`
            return `${str1}${str2}` + '<br/>' + `${str1}${str3}` + str4;
          }
        },
        xAxis: {
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 30,  //倾斜的程度
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          splitLine:{
            show:false
          }
        },
        series: [
          {
            type: 'bar',      // 类型
            itemStyle: {
              barBorderRadius: [18, 18, 0, 0],
              color: (params) => {
                if (params.dataIndex % 2 === 0) {
                  return this.initData.colorList[0]
                } else {
                  return this.initData.colorList[1]
                }
              }
            },
            barWidth: 15,  // 柱形的宽度
            //
            data: this.initData.data ? this.initData.data : [],
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(167, 204, 255, 0.35)'
            },
            smooth:true
          }
        ]
      };

      myChart.setOption (option);

    }
  }
}
</script>

<style scoped>

</style>
