<template>
  <div>
    <el-container style="height: 100vh;">
    <el-header>
      <div class="app-header">
        <h2 style="margin: 14px; color: #fff">测试平台</h2>
        <user-avator />
      </div>
    </el-header>
    <el-container class="container">
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view :key="key"/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import UserAvator from './User'
export default {
  name: 'Home',
  components: {
    Sidebar,
    UserAvator
  },
  computed: {
    key() {
      return this.$route.path;
    },
  }
}
</script>

<style>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
