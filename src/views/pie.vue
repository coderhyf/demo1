<template>
  <div>
    <el-select v-model="value1" multiple placeholder="请选择" @change="changes">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.value"
        :value="item.label">
      </el-option>
    </el-select>
    <el-button @click="btn1">默认按钮</el-button>
<!--    <hyf-echarts :initData="initData"/>-->
<!--    <el-progress type="circle" :percentage="2" :color="color"></el-progress>-->
<!--    <el-input-->
<!--      placeholder="输入关键字进行过滤"-->
<!--      v-model="filterText">-->
<!--    </el-input>-->

<!--    <el-tree-->
<!--      class="filter-tree"-->
<!--      :data="data"-->
<!--      default-expand-all-->
<!--      :filter-node-method="filterNode"-->
<!--      ref="tree">-->
<!--      <span slot-scope="{ node }" class="custom-tree-node">-->
<!--            <span v-if="!filterText">{{ node.label }}</span>-->
<!--            <span v-if="filterText" v-html="node.label.replace(new RegExp(filterText,'g'),`<span style='color:red'>${filterText}</span>`)" />-->
<!--      </span>-->
<!--    </el-tree>-->
  </div>
</template>

<script>
import hyfEcharts from "../components/hyfEcharts";
import {mapState} from "vuex";

export default {
  name: "bar",
  components: {
    hyfEcharts
  },
  data () {
    return {
      options: [{
        value: '选项1',
        label: '1'
      }, {
        value: '选项2',
        label: '2'
      }, {
        value: '选项3',
        label: '3'
      }, {
        value: '选项4',
        label: '4'
      }, {
        value: '选项5',
        label: '5'
      }],
      value1: [],
      initData: {
        id: 'box2',
        color: ['#E06A47', '#7067D6', '#6598FF', '#8794FD', '#D30A17'],
        total: 100,
        title: '对公客户数(户)',
        data: [
          {
            value: 55, name: '资金类',
            label: {
              color: 'red'
            }
          },
          {value: 20, name: '支付结算类 1000'},
          {value: 10, name: '融资类'},
          {value: 10, name: '代理类'},
          {value: 5, name: '担保承诺类'},
        ]
      },
      // 饼图换肤颜色
      // 黑色主题配echarts
      black: ['#6577FF', '#475FCB', '#6598FF', '#32C4FF', '#3BE0E1'],
      // 红色主题配echarts
      red: ['#E06A47', '#7067D6', '#6598FF', '#8794FD', '#D30A17'],
      color: 'red',
      filterText: '',
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
    }
  },
  watch: {
    btnBg (val) {
      this.echartsColorChange (val)
      switch (val) {
        case '1':
          this.color = 'blue'
          break;
        case '2':
          this.color = 'red'
          break;
        case '3':
          this.color = 'pink'
          break;
      }
    },
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  computed: {
    ...mapState (['btnBg'])
  },
  mounted () {
    let echartsColor = localStorage.getItem ('echarts')
    if (echartsColor) {
      this.initData.color = JSON.parse (echartsColor)
    }
    let bg = localStorage.getItem ('changeBg')
    switch (bg) {
      case '1':
        this.color = 'blue'

        break;
      case '2':
        this.color = 'red'
        break;
      case '3':
        this.color = 'pink'
        break;
    }

  },
  methods: {
    changes(val){
      // console.log (val, '---val')
    },
    btn1(){
      let a = 1
      let a1 = 2
      let a2 = 3
      let a3 = 3
      let a4 =4
      // a \a1\a2\a3\a4 别的接口算好的总数
      console.log (this.value1) // 多选数据的key
      this.value1.forEach(item => {
        if(item.value === '2'){
          let total = a
        }else if(item.value === '1'){
          let total = a1 + a
        }else  if(item.value === '1' && item.value === '2' && item.value ==='3'){
          let total = a1 + a + a2
        }else  if(item.value === '2' && item.value === '3' && item.value ==='4'){
          let total = a1 + a + a2 + a3
        }else if(item.value === '4'){
          let total = a4
        }
      })
      console.log (this.options)
     let state=  this.options.map(r => this.value1.indexOf(r.label) >= 0)
     //  console.log (a ,'aaa----')
      if(state){
        console.log('true')
      }
      // this.options.map(item => {item})

    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    echartsColorChange (key) {
      switch (key) {
        case '1':
          this.initData.color = this.black
          localStorage.setItem ('echarts', JSON.stringify (this.black))
          break;
        case '2':
          this.initData.color = this.red
          localStorage.setItem ('echarts', JSON.stringify (this.red))
          break;
        case '3':
          this.initData.color = this.black
          localStorage.setItem ('echarts', JSON.stringify (this.black))
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/mixin";
@import "../scss/variable";
.el-progress-bar__outer {
  height: 12px !important;
  border: 1px solid #78335f;
  background-color: transparent;
}
.el-progress /deep/ path:first-child {
  @include color($color1)
}
</style>
