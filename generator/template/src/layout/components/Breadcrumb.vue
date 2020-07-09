<template>
  <div class="app-breadcrumb">
      <el-breadcrumb>
          <el-breadcrumb-item v-for="item in currentRoute" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script>
export default {
    name: 'app-breadcrumb',
    computed: {
        currentRoute() {
            return this.$route.matched
        }
    }
}
</script>

<style>
.app-breadcrumb {
    padding: 9px 16px;
}
</style>