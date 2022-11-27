<template>
  <div class=''>
    <el-tabs
      v-model="activeIndex"
      type="card"
      @tab-click="clickTab"
      @tab-remove="removeTab"
      closable
    >
      <el-tab-pane
        v-for="(item, index) of openTab"
        :key="index"
        :label="item.name"
        :name="item.route"
      >
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>

export default {
  data () {
    return {
      tabg: []
    }
  },
  computed: {
    openTab () {
      return this.$store.state.openTab
    },
    activeIndex: {
      get () {
        return this.$store.state.activeIndex
      },
      set (val) {
        this.$store.commit ('set_active_index', val)
      }
    }
  },
  watch: {
    '$route' (to) {
      let flag = false
      for (let item of this.openTab) {
        if (item.name === to.meta.title) {
          this.$store.commit ('set_active_index', to.path)
          flag = true
          break
        }
      }

      if (!flag) {
        this.$store.commit ('add_tabs', {route: to.path, name: to.meta.title})
        this.$store.commit ('set_active_index', to.path)
      }

    }
  },
  mounted () {
    // 刷新时以当前路由做为tab加入tabs
    // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
    // 当当前路由是首页时，添加首页到store，并设置激活状态
    if (this.$route.path !== '/' && this.$route.path !== '/bar') {
      this.$store.commit ('add_tabs', {route: '/bar', name: '首页'})
      this.$store.commit ('add_tabs', {route: this.$route.path, name: this.$route.meta.title})
      this.$store.commit ('set_active_index', this.$route.path)

    } else {
      this.$store.commit ('add_tabs', {route: '/bar', name: '首页'})
      this.$store.commit ('set_active_index', '/bar')
    }
  },
  methods: {
    // removalRepeat (arr, key) {
    //   let map = new Map ()
    //   for (let i of arr) {
    //     map.set (i[key], i)
    //   }
    //   return arr = [...map.values ()]
    //
    // },
    clickTab () {
      this.$router.push ({path: this.activeIndex})
    },
    removeTab (target) {
      if (target === '/' || target === '/bar') return
      this.$store.commit ('delete_tabs', target)
      if (this.activeIndex === target) {
        // 设置当前激活的路由
        if (this.openTab && this.openTab.length >= 1) {
          this.$store.commit ('set_active_index', this.openTab[this.openTab.length - 1].route)
          this.$router.push ({path: this.activeIndex})
        }
      }
    }
  },
}
</script>


