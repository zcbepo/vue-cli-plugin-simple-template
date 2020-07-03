<template>
  <el-menu default-active="page1" style="height:100%" router>
    <template v-for="menu in menus">
      <el-submenu v-if="menu.children" :key="menu.title" :index="menu.route">
        <template slot="title">
          <span>{{menu.title}}</span>
        </template>
        <el-menu-item v-for="submenu in menu.children" :key="submenu.title" :index="submenu.route">
          <span>{{submenu.title}}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :key="menu.title" :index="menu.route">
        <span slot="title">{{menu.title}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: "sidebar",
  mounted() {
    this.$store.dispatch("getMenus");
  },
  computed: {
    menus() {
      return this.$store.state.menus;
    }
  }
};
</script>

<style>
</style>