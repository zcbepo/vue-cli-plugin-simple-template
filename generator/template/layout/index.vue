<template>
  <el-container>
    <el-aside style="width: auto;">
      <app-aside ref="side" />
    </el-aside>
    <el-container>
      <el-header class="app-header" height="48px">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" style="font-size:26px;cursor:pointer" @click="toggleSidebar"></i>
        <AppProfile />
      </el-header>
      <el-main>
        <transition name="main" mode="out-in">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from "./components/aside";
import AppProfile from "./components/profile";
export default {
  name: "layout",
  components: {
    AppAside,
    AppProfile
  },
  mounted() {
    if (window.innerWidth < 800) {
      this.$store.dispatch('app/toggleSidebar', true)
    }
    window.addEventListener('resize', this.handleWindowResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/toggleSidebar', !this.isCollapse)
    },
    handleWindowResize() {
      this.$store.dispatch('app/toggleSidebar', window.innerWidth < 800 ? true : false)
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.app.sidebarCollapse
    }
  }
};
</script>

<style>
.app-aside {
    height: 100vh;
}

.app-aside:not(.el-menu--collapse) {
    width: 200px;
}

.app-aside__submenu > .el-menu > .el-menu-item {
    background-color: #00356A !important;
}

.app-aside__submenu > .el-menu > .el-menu-item.is-active {
    background-color: #1890FF !important;
}

.app-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}
</style>