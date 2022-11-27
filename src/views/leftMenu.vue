<template>
  <!--  <hyf-menu :list="list"/>-->
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse-transition="true"
           unique-opened :collapse="false" :router="true" :default-openeds="opends"
           background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-submenu index="1" >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item index="/blog/sys/user/userList">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="1-2">
        <i class="el-icon-menu"></i>
        <span slot="title">角色管理</span>
      </el-menu-item>
      <el-menu-item index="1-3">
        <i class="el-icon-menu"></i>
        <span slot="title">许可管理</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>


</template>

<script>
import HyfMenu from "../components/hyfMenu";

export default {
  name: "leftMenu",
  components: {HyfMenu},
  data () {
    return {
      list: [
        {
          path: '/home',
          title: '首页',
        },
        {
          path: '/bar',
          title: '柱状图',
        },
        {
          path: '/line',
          title: '折线图',
        },
        {
          path: '/pie',
          title: '饼图',
        },
        {
          path: '/form',
          title: '自定义查询',
        },
        {
          path: '/table',
          title: '自定义表单拖拽',
        },
        {
          path: '/jindu',
          title: '自定义进度条带悬浮',
        },
        {
          path: '/menu',
          title: '菜单递归',
        },
        {
          path: '/newIndex',
          title: 'newIndex',
        },
      ],
      opends: ['1-1']
    }
  }
}
</script>

<style scoped>

</style>
