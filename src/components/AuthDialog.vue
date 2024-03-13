<template>
  <el-dialog v-model="store.state.auth.loginVisible" class="loginView" width="45%" center show-close :close-on-click-modal=false>
    <div v-if="false" slot="header"></div>
    <el-row>
      <el-col :sm="0" :md="6" :xl="7">
        <h2 class="text-center">登录以获得完整体验</h2>
        <el-image src="src/assets/img/study2.png" class="inset" fit="contain" />
        <h3 class="text-center">Welcome to Oj++</h3>
        <h4 class="text-center">和谐构建 湘大技术社区</h4>
      </el-col>
      <el-col :sm="24" :md="17" :xl="16" :offset="1">
        <el-tabs v-model="store.state.auth.loginIndex">
          <el-tab-pane label="密码登录" name="1">
            <el-row>
              <el-col :md="16">
                <PwdLoginForm />
              </el-col>
              <el-col :md="8">
                <Questions />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="邮箱登录" name="2">
            <el-row>
              <el-col :md="16">
                <EmailLoginForm />
              </el-col>
              <el-col :md="8">
                <Questions />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="注册账号" name="3">
            <el-row>
              <el-col :md="16">
                <SignupForm />
              </el-col>
              <el-col :md="8">
                <Questions />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane v-if="false" label="找回密码" name="4"></el-tab-pane>
        </el-tabs>
        <el-text>登录或注册即代表您同意<a class="color-primary" href="#"> 用户协议 </a>和<a class="color-primary" href="#"> 隐私政策</a></el-text><br><br>
        <!-- <el-text>开发者QQ: <span class="color-primary-light3">1300207762</span> (20网工周钟华 9:00-19:00)</el-text> -->
        <!-- <h4>Tips: 本站不支持IE浏览器，推荐使用Chrome、Edge、Firefox以获得最佳体验</h4> -->
        <!-- <h4>Tips：为确保您的账户安全，若您长达15天未使用本站，将自动安全登出</h4> -->
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
import PwdLoginForm from "@/components/Form/PwdLogin.vue"
import EmailLoginForm from "@/components/Form/EmailLogin.vue"
import SignupForm from "@/components/Form/Signup.vue"
import Questions from "@/components/Layout/AuthDialogQuestions.vue"

const store = useStore()

</script>
<style>
.loginView {
  border-radius: 25px;
}

.loginView .el-dialog__body {
  padding-top: 0;
}

.loginView .el-tabs__item {
  font-size: 18px;
}

.loginView .el-tabs__content {
  margin-top: 1.5rem;
}

.loginView .inset {
  margin: 2rem 0 1rem;
}

.loginView .el-button {
  border-radius: 10px;
}

.loginView .el-text a {
  text-decoration: none;
}

.loginView .el-text a:hover {
  text-decoration: underline;
}

.loginView .el-input-group__append {
  background-color: initial;
}

.loginView .verificationCodeInput .el-input-group__append {
  width: 4rem;
  color: #00b96b;
}
</style>