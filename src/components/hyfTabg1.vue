<template>
  <el-tabs type="card" v-model="activeNav" @tab-remove="removeTab" @tab-click="tabClick">
    <el-tab-pane v-for="item in tabsItem"
                 :key="item.name"
                 :label="item.title"
                 :name="item.name"
                 :closable="item.closable"
                 :ref="item.ref">
    </el-tab-pane>
  </el-tabs>

</template>
<script>
// import Home from '../components/Home.vue'
export default {
  data() {
    return {
      // 被激活的连接地址
      activePath: '',
      // activeTab: '1', //默认显示的tab
      tabIndex: 1, //tab目前显示数
      tabsItem: [
        {
          title: '首页',
          name: '1',
          closable: false,
          ref: 'tabs',
          // content: Home
        }
      ],
      tabsPath: [
        {
          title: "1",
          path: '/bar'
        }
      ]
    }
  },
  computed: {
    activeNav() { //当前激活的导航
      return this.$route.path
    }
  },
  methods: {
    removeTab(targetName) { //删除Tab
      let tabs = this.tabsItem; //当前显示的tab数组
      let activeName = this.activeTab; //点前活跃的tab

      //如果当前tab正活跃 被删除时执行
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              this.tabClick(nextTab)
            }
          }
        });
      }
      this.activeTab = activeName;
      this.tabsItem = tabs.filter(tab => tab.name !== targetName);
      //在tabsPath中删除当前被删除tab的path
      this.tabsPath = this.tabsPath.filter(item => item.name !== targetName)
    },
    tabClick(thisTab) {
      /*
      * thisTab:当前选中的tabs的实例
      * 通过当前选中tabs的实例获得当前实例的path 重新定位路由
      * */
      let val = this.tabsPath.filter(item => thisTab.name == item.name)
      this.$router.push({
        path: val[0].path
      })
    }
  },
  watch: {
    '$route': function (to) {  //监听路由的变化，动态生成tabs
      let flag = true //判断是否需要新增页面
      const path = to.path
      if (Object.keys(to.meta).length != 0) {
        for (let i = 0; i < this.$refs.tabs.length; i++) {
          if (i != 0) { //首页不判断 如果页面已存在，则直接定位当页面，否则新增tab页面
            if (this.$refs.tabs[i].label == to.meta.name) {
              this.activeTab = this.$refs.tabs[i].name  //定位到已打开页面
              flag = false
              break
            }
          }
        }
        //新增页面
        if (flag) {
          //获得路由元数据的name和组件名
          const thisName = to.meta.title
          const thisComp = to.meta.comp
          //对tabs的当前激活下标和tabs数量进行自加
          let newActiveIndex = ++this.tabIndex + ''
          //动态双向追加tabs
          this.tabsItem.push({
            title: thisName,
            // name: String(newActiveIndex),
            closable: true,
            ref: 'tabs',
            content: thisComp
          })
          this.activeTab = newActiveIndex
          /*
          * 当添加tabs的时候，把当前tabs的name作为key，path作为value存入tabsPath数组中
          * key:tabs的name
          * value:tabs的path
          * {
          *   key: name,
          *   value: path
          * }
          * ///后面需要得到当前tabs的时候可以通过当前tabs的name获得path
          * */
          if (this.tabsPath.indexOf(path) == -1) {
            this.tabsPath.push({
              name: newActiveIndex,
              path: path
            })
          }
        }
      }
    }
  }
}
</script>

