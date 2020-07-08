<template>
  <el-menu
    class="app-aside"
    background-color="#004386"
    text-color="rgba(255,255,255,0.65)"
    active-text-color="#fff"
    :default-active="currentRoute"
    :collapse="isCollapse"
    router
    unique-opened
  >
    <el-submenu class="app-aside__submenu" v-for="nav in navs" :key="nav.name" :index="nav.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{nav.meta.title}}</span>
      </template>
      <el-menu-item
        v-for="item in nav.children"
        :key="item.name"
        :index="item.path"
      >{{item.meta.title}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mainRoutes } from "../../router/index";
export default {
  name: "app-aside",
  computed: {
    navs() {
      return mainRoutes;
    },
    currentRoute() {
      return this.$route.path;
    },
    isCollapse() {
      return this.$store.state.app.sidebarCollapse;
    }
  }
};
</script>

<style>
</style>