<template>
  <div style="width: 210px;height: 100%;">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse"
             router :default-active="$route.path" text-color="#fff"
             unique-opened>
      <template v-for="(item,index) of list">
        <el-submenu :index="item.key + ''" v-if="item.children" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span ref="titles" :title="item.title">{{ item.title }}</span>
            </template>

          <hyfMenu :list="item.children"/>   <!--递归调用-->
        </el-submenu>
        <el-menu-item :index="item.key + ''" v-else :key="index" @click="setItem(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>

  </div>
</template>

<script>

export default {
  name: "hyfMenu",
  props: {
    list: Array,
    isCollapse: Boolean
  },
  data () {
    return {
      openMenuItem: '',
      isShowTooltip: true,
    }
  },
  mounted () {
  },
  methods: {
    onMouseOver (str) {
      let parentWidth = this.$refs[titles].parentNode.offsetWidth;
      let contentWidth = this.$refs[titles].offsetWidth;
      // 若子集比中间层更宽 开启tooltip功能
      if (contentWidth > parentWidth) {
        this.isShowTooltip = false;
      } else { // 否则 关掉tooltip功能
        this.isShowTooltip = true;
      }
    },
    setItem (item) {
      localStorage.setItem ('openMenu', JSON.stringify (item))
    }
  }
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  border-right: none;
  background: linear-gradient(180deg, #2C2F48 0%, #2C2F48 100%);
}

.el-menu-item:hover {
  background: #247bb4;
}

/deep/ .el-submenu__title:hover {
  background: #247bb4;
}

.el-menu-item.is-active {
  background: #247bb4;
  color: #fff;
}

</style>
