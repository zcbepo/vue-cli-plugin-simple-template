<template>
  <div class="user-profile">
    <el-badge :value="unreadCount" :max="99" class="item">
      <i class="el-icon-folder" />
    </el-badge>
    <el-avatar class="user-avator" :size="30" :src="require('@/assets/logo.png')"></el-avatar>
    <el-dropdown @command="onCommand">
      <span>
        {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import storage from '../../utils/storage'
export default {
  name: 'app-profile',
  methods: {
    onCommand(index) {
      console.log(index)
      switch(index) {
        case "logout":
          storage.remove("token");
          this.$router.replace("/login");
      }
    }
  },
  computed: {
    unreadCount() {
      return Math.floor(Math.random() * 120)
    },
    userName() {
      return this.$store.state.user.userName
    }
  }
}
</script>

<style>
.user-profile {
  display: flex;
  align-items: center;
}

.user-avator {
  margin: 0 10px 0 40px;
}
</style>