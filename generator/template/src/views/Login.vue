<template>
  <div class="login">
    <i class="el-icon-eleme login-logo"></i>
    <h1 class="login-title">Project Title</h1>
    <el-form
      class="login-form"
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      :disabled="loading"
    >
      <el-form-item prop="userName">
        <el-input placeholder="account" v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item pros="checked">
        <el-checkbox v-model="loginForm.checked">remember account</el-checkbox>
      </el-form-item>
      <el-button class="login-button" type="primary" :loading="loading" @click="login">login</el-button>
    </el-form>
    <div class="login-copyright">copyright © 2020 simple-template</div>
  </div>
</template>

<script>
import storage from "../utils/storage";
export default {
  name: "login-page",
  data() {
    return {
      to: '/',
      loginForm: {
        checked: false,
        userName: "",
        password: ""
      },
      loginRules: {
        userName: [
          { required: true, message: "请输入账户名称", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入账户密码", trigger: "blur" },
          { min: 6, message: "长度不得少于6个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.to = this.$route.query.redirect || '/'
    this.loginForm.userName = storage.get('username') || ""
    this.loginForm.password = storage.get('password') || ""
    this.loginForm.checked = storage.get('checked') === "true"
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(validated => {
        if (validated) {
          const { userName, password, checked } = this.loginForm;
          this.$store.dispatch("user/login", { userName, password, checked })
            .then(() => this.$router.replace(this.to));
        }
      });
    }
  },
  computed: {
    loading() {
      return this.$store.state.user.fetching;
    }
  }
};
</script>

<style>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../assets/login-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

.login > .login-logo {
  margin-top: 20vh;
  font-size: 50px;
}

.login > .login-title {
  margin-top: 16px;
}

.login-form {
  width: 320px;
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
}

.login-copyright {
  position: absolute;
  bottom: 20px;
  font-size: 15px;
}

.login-button {
  width: 100%;
}
</style>
