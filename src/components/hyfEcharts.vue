<template>
  <div>
<!--  饼图  -->
    <div :id="initData.id" style="width: 300px;height:300px;"></div>
  </div>
</template>

<script>
export default {
  name: "hyfEcharts",
  props:['initData'],
  data () {
    return {
      n:100
    }
  },
  watch:{
    initData:{
      deep:true,
      handler(){
        this.a()
      }
    }
  },
  mounted () {
    this.a ()
  },
  methods: {
    a () {
      let myChart = this.$echarts.init (document.getElementById (this.initData.id));
      let option = {
        tooltip: {
          // trigger: 'item'
          show:false
        },
        title: {
          text: `total${this.initData.total}`+ '\n\r' + `{active|${this.initData.title}}`,
          //标题位置
          left: "center",
          top: "center",
          //标题样式
          textStyle: {
            rich: {
              total:{
                fontSize: 24,
                color: "#333333",
                fontWeight:'bold'
              },
              active: {
                fontSize: 12,
                color: "#919191",
                lineHeight:30,
              },
            }
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '40%'],
            label: {
              alignTo: 'edge',
              formatter: '{name|{b}}\n{value|{c}户}',
              minMargin: 10,
              edgeDistance: 20,
              lineHeight: 35,
              rich: { value: { fontSize: 10, color: '#999999' } }
            },

            color: this.initData.color ? this.initData.color : ['#E06A47','#7067D6', '#6598FF','#8794FD','#D30A17'],
            itemStyle: {
              borderRadius: 4,
              borderColor: '#fff',
              borderWidth: 2
            },
            data: this.initData.data ? this.initData.data : []
          }
        ]
      }
      myChart.setOption (option);

    }
  }
}
</script>

<style scoped>

</style>
