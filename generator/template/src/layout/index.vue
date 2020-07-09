<template>
  <el-container style="height: 100%;">
    <el-aside class="hiddien-scrollbar" style="width: auto;">
      <app-aside ref="side" />
    </el-aside>
    <el-container>
      <el-header class="app-header" height="48px">
        <i
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          style="font-size:26px;cursor:pointer"
          @click="toggleSidebar"
        ></i>
        <app-profile />
      </el-header>
      <app-breadcrumb :showShadow="showShadow" />
      <el-main ref="main" @scroll.native="handleScroll($event)" class="custom-scrollbar">
        <div class="app-main-page">
          <transition name="main" mode="out-in">
            <router-view />
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from "./components/Aside";
import AppProfile from "./components/Profile";
import AppBreadcrumb from "./components/Breadcrumb";
export default {
  name: "layout",
  components: {
    AppAside,
    AppProfile,
    AppBreadcrumb
  },
  data() {
    return {
      showShadow: false
    }
  },
  mounted() {
    if (window.innerWidth < 800) {
      this.$store.dispatch("app/toggleSidebar", true);
    }
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("app/toggleSidebar", !this.isCollapse);
    },
    handleWindowResize() {
      this.$store.dispatch(
        "app/toggleSidebar",
        window.innerWidth < 800 ? true : false
      );
    },
    handleScroll(e) {
      this.showShadow = e.target.scrollTop >= 16
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.app.sidebarCollapse;
    }
  }
};
</script>

<style>
.el-aside {
  box-shadow: 1px 0 6px rgba(0, 67, 134, .2);
}

.app-aside {
  height: 100vh;
}

.app-aside:not(.el-menu--collapse) {
  width: 200px;
}

.app-aside__submenu > .el-menu > .el-menu-item {
  background-color: #00356a !important;
}

.app-aside__submenu > .el-menu > .el-menu-item.is-active {
  background-color: #1890ff !important;
}

.app-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .15);
}

.el-main {
  background-color: #F0F2F5;
}

.app-main-page {
  background-color: #fff;
  padding: 16px;
  box-sizing: border-box;
}
</style>
