<template>
  <div>
    <div id="liqiud"></div>
  </div>
</template>

<script>
import "echarts-liquidfill";
export default {
  name: "bar",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.initChart();
  },
  methods: {
    getVal(data, options, arr) {
      options.forEach((e) => {
        if (data.includes(e.value)) {
          arr.push(e.label);
        } else if (e.children) {
          this.getVal(data, e.children, arr);
        }
      });
      return arr;
    },
    initChart() {
      let myLiuqiud = this.$echarts.init(document.getElementById("liqiud"));
      var value = 0.54;
      let option = {
        backgroundColor: "#000", //背景色
        title: {
          text: value + "%",
          textStyle: {
            fontSize: 20,
            fontFamily: "Microsoft Yahei",
            fontWeight: "normal",
            color: "#fff",
          },
          x: "center",
          y: "48%",
        },
        series: [
          {
            type: "liquidFill", //配置echarts图类型
            radius: "60%",
            center: ["50%", "50%"],
            //  shape: 'roundRect',// 设置水球图类型（矩形[rect]，菱形[diamond]，三角形[triangle]，水滴状[pin],箭头[arrow]...） 默认为圆形
            data: [0.5, 0.5], //设置波浪的值
            //waveAnimation:false, //静止的波浪
            backgroundStyle: {
              borderWidth: 1,
              color: "transparent", //水球图内部背景色
            },
            outline: {
              borderDistance: 10,
              itemStyle: {
                borderWidth: 4,
                borderColor: "#5acef2",
              },
            },
            color: [
              //波浪颜色
              {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: "rgba(6, 187, 112, 0.3)", //下
                  },
                  {
                    offset: 0,
                    color: "rgba(11, 201, 199, 0.3)",
                  },
                ],
                globalCoord: false,
              },
              {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: "rgba(6, 187, 112, 1)", //下
                  },
                  {
                    offset: 0,
                    color: "rgba(11, 201, 199, 1)",
                  },
                ],
                globalCoord: false,
              },
            ],
            label: {
              normal: {
                formatter: "",
              },
            },
          },
        ],
      };
      myLiuqiud.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/mixin";
@import "../scss/variable";
</style>
