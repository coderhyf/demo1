<template>
  <div>
    <el-container>
      <el-header>
        <div class="title">我是内容哦</div>
        <el-popover
          placement="bottom"
          trigger="hover">
          <div>
            <span class="theme">主题色</span>
            <span class="span1" @click="themeChange('theme1')">
              <i class="el-icon-check" v-if="span1"/>
              <i class="el-icon-close" v-else/>
            </span>
            <span class="span2" @click="themeChange('theme2')">
                   <i class="el-icon-check" v-if="span2"></i>
                   <i class="el-icon-plus" v-else></i>
            </span>
            <span class="span3" @click="themeChange('theme3')">
                    <i class="el-icon-check" v-if="span3"></i>
                    <i class="el-icon-minus" v-else></i>
            </span>
          </div>
          <i slot="reference" class="el-icon-setting"></i>
        </el-popover>
      </el-header>
      <el-container class="contents">
        <!--          导航-->
        <el-aside width="200px">
          <hyf-menu :list="list"/>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HyfMenu from "../components/hyfMenu";
import LeftMenu from "./leftMenu";
import HyfTabg from "../components/hyfTabg";
import HyfTabg1 from "../components/hyfTabg1";


export default {
  name: "Home",
  components: {HyfTabg, HyfTabg1, LeftMenu, HyfMenu},
  data () {
    return {
      span1: false,
      span2: true,
      span3: false,
      list: [
        {
          title: '柱状图',
          key: '/bar',
          id: '1',
        },
        {
          title: '折线图',
          key: '/line',
          id: '2',
        },
        {
          title: '饼图',
          key: '/pie',
          id: '3',
        },
        {
          title: '自定义查询',
          key: '/form',
          id: '4',
        },
        {
          title: '自定义表单拖拽',
          key: '/table',
        },
        {
          title: '自定义进度条带悬浮',
          key: '/jindu',
          id: '6',
        },
        {
          title: '树拖拽',
          key: '/tz',
          id: '7',
        },


        {
          title: 'newIndex',
          key: '/newIndex',
          id: '8',
        },
        {
          title: '图谱',
          key: '/graph',
          id: '8',
        },
        {
          title: '高德demo',
          key: '/chekboxs',
          id: '11',
        },
      ]
    }
  },
  mounted () {
    this.changeGlobal ()
    let theme = localStorage.getItem ('themeTrue')
    if (theme) {
      document.documentElement.setAttribute ('data-theme', theme)
    }

  },
  methods: {
    changeGlobal () {
      let changeBg = localStorage.getItem ('changeBg')
      switch (changeBg) {
        case '1':
          this.span1 = true;
          this.span2 = false;
          this.span3 = false;
          break;
        case '2':
          this.span1 = false;
          this.span2 = true;
          this.span3 = false;
          break
        case '3':
          this.span1 = false;
          this.span2 = false;
          this.span3 = true;
          break
      }
    },
    themeChange (theme = 'theme1') {
      document.documentElement.setAttribute ('data-theme', theme)
      localStorage.setItem ('themeTrue', theme)
      switch (theme) {
        case 'theme1':
          this.span1 = true;
          this.span2 = false;
          this.span3 = false;
          localStorage.setItem ('changeBg', '1')
          localStorage.setItem ('to', '#597EFE')
          this.$store.commit ('BTN_BG', '1')
          break;
        case 'theme2':
          this.span1 = false;
          this.span2 = true;
          this.span3 = false;
          localStorage.setItem ('changeBg', '2')
          localStorage.setItem ('to', '#CF1322')
          this.$store.commit ('BTN_BG', '2')
          break;
        case 'theme3':
          this.span1 = false;
          this.span2 = false;
          this.span3 = true;
          localStorage.setItem ('changeBg', '3')
          localStorage.setItem ('to', '#1890FF')
          this.$store.commit ('BTN_BG', '3')
          break;
      }

    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/mixin";
@import "../scss/variable";

.theme {
  font-size: 15px;
}

.contents {
  height: calc(100vh - 60px);
}

.el-main {
  width: 100%;
  height: 100%;
}

.span1, .span2, .span3 {
  width: 22px;
  height: 22px;
  line-height: 22px;
  background: black;
  color: white;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;

  .el-icon-close {
    color: black;
  }

  .el-icon-plus {
    color: brown;
  }

  .el-icon-minus {
    color: dodgerblue;
  }
}

.span2 {
  background: brown;
}

.span3 {
  background: dodgerblue;
}

.el-header {
  //background: linear-gradient(270deg, #DC060E 0, #483F94 100%);
  @include bg_color($bac1);
  box-shadow: 0 1px 24px 0 rgba(83, 83, 83, 0.12);
  line-height: 60px;
  display: flex;
  justify-content: space-between;

  .title {
    @include fontc($fontc1)
  }

  .el-icon-setting {
    color: white;
  }
}

.el-aside {
  background: linear-gradient(180deg, #2C2F48 0%, #2C2F48 100%);
  box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  height: 100vh;

  a {
    color: white;
    font-size: 15px;
    display: inline-block;
    text-decoration: none;
    margin-top: 20px;
  }
}
</style>
