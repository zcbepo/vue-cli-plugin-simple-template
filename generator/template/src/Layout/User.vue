<template>
  <div class="header-username">
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <el-dropdown @command="handleLogout">
      <span class="header-username-dropdown">
        username
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { localStorageUtils, localStorageKeys } from "../utils/localstorage";
export default {
  name: "UserAvator",
  methods: {
    handleLogout(e) {
      switch (e) {
        case "changePwd":
          break;
        case "logout":
          localStorageUtils.remove(localStorageKeys.token);
          this.$router.replace("/login");
          break;
      }
    }
  }
};
</script>

<style scoped>
.header-username {
    display: flex;
    align-items: center;
}
.header-username-dropdown {
    margin-left: 10px;
    cursor: pointer;
    color: #fff;
}
</style>