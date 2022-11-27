<template>
  <div class="jz">
    vuex数据,在父组件改变: {{ $store.state.sum }}
    <el-button @click="SUM(num)">+</el-button>
    <el-button @click="sum2(num)">-</el-button>
    <h5>state:{{ sum }}</h5>
    <h5>计算属性:{{ jisuan }}</h5>
    <br>
    <el-button type="primary" size="mini" @click="a">路由</el-button>
    <el-button type="primary" size="mini" @click="a1">路由1</el-button>
    <hyf-popconfirm @confirm="confirm" @cancel="cancel"/>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import HyfPopconfirm from "./hyfPopconfirm";

import {handleConfirm} from "../utils/confirm";
import {closeLoading, openLoading} from "../utils/loading";

export default {
  name: "HelloVuex",
  components: {HyfPopconfirm},
  data () {
    return {
      num: 1,
      datas: [
        {name: '1', id: 1},
        {name: '2', id: 2},
      ]
    };
  },
  computed: {
    ...mapState (['sum']),
    ...mapGetters (['jisuan'])
  },
  mounted () {
  },
  methods: {
    // addNum() {
    //   this.$store.commit("SUM", this.num);
    // },
    ...mapMutations (['SUM', 'setMenu']),
    ...mapActions (['sum2', 'sum1']),
    a () {
      this.setMenu (this.datas)
      this.$bus.$emit ('message', 'Hello Word')
    },
    a1 () {
      handleConfirm ('哈哈哈', '警告', 'error', '关闭').then (() => {
        console.log ('222')

        openLoading ()
        setTimeout (() => {
          closeLoading ()
        }, 1000)
      }).catch (() => {
        console.log ('1111')
      })
    },
    confirm () {
      console.log ('2222')
    },
    cancel () {
      console.log ('11111')
    }
  },
};
</script>

<style scoped>

</style>
