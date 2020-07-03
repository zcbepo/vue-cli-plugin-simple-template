<template>
  <div class="login-background">
    <el-card class="login-card">
      <div class="login-header">SIMPLE TEMPLATE</div>
      <el-form class="login-form" label-width="60px">
        <el-form-item label="用户名">
          <el-input style="width:340px" v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input style="width:340px" v-model="password" show-password></el-input>
        </el-form-item>
        <el-button class="login-button" type="primary" @click="login">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from "../network/modules/common";
import { localStorageKeys, localStorageUtils } from '../utils/localstorage';
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      from: "/",
    };
  },
  mounted() {
    const redirect = this.$route.redirect
    if (redirect) this.from = redirect
  },
  methods: {
    login() {
      login(this.username, this.password)
        .then(response => {
          if (response.data) {
            const token = response.data.token
            localStorageUtils.set(localStorageKeys.token, token)
            this.$router.replace(this.from)
          }
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
</script>

<style scoped>
.login-background {
  width: 100%;
  height: 100%;
  background-image: url(https://miro.medium.com/max/1400/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-card {
  width: 480px;
}

.login-header {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}

.login-button {
  width: 280px;
  margin-top: 10px;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
