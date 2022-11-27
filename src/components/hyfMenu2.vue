<template>
  <div>
    <el-menu  class="el-menu-vertical-demo"
              router :default-active="$route.path" text-color="#fff"
              unique-opened>
      <template v-for="menu in menuData">
        <el-submenu :key="menu.index" :index="menu.index" v-if="menu.children">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
          </template>
          <menu-tree :menuData="menu.children"></menu-tree>
        </el-submenu>
        <el-menu-item :key="menu.index" :index="menu.index" v-else>
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>

  </div>
</template>

<script>
export default {
  props: ['menuData'],
  name: 'MenuTree'
}
</script>
