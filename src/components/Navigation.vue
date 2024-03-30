<template>

  <el-affix>
    <div>
      <el-row class="border-bottom nav">
        <el-col :xs="0" :sm="0" :md="5"></el-col>
        <el-col :xs="24" :sm="24" :md="4">
          <el-menu :default-active="props.activeIndex" mode="horizontal" :ellipsis="false">
<!--                    <el-menu>-->
            <div class="flex-grow"></div>
            <el-menu-item size="large" index="Home">
              <router-link to="/home">首页</router-link>

            </el-menu-item>

            <el-menu-item size="large">
              <router-link to="/paste"> 题库</router-link>
            </el-menu-item>
            <el-menu-item size="large" index="3">问答</el-menu-item>
            <themeSwitch class="h-100 ps-1"></themeSwitch>

            <div class="flex-grow"></div>
          </el-menu>
        </el-col>
        <el-col :xs="0" :sm="0" :md="7">
          <!-- <div class="flex-grow"></div> -->
          <search class="vertical-center h-100 m-auto"></search>
          <!-- <div class="flex-grow"></div> -->
        </el-col>
        <el-col :xs="0" :sm="0" :md="3" :offset="1">
          <div class="flex-grow"></div>
          <el-row class="h-100">
            <el-col :span="3" class="vertical-center">
              <el-dropdown>
                <el-badge is-dot class="item">
                  <el-icon size="18">
                    <Bell />
                  </el-icon>
                </el-badge>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <el-icon>
                        <Message />
                      </el-icon>
                      <el-badge is-dot class="item">
                        <el-text>
                          用户消息
                        </el-text>
                      </el-badge>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                      <el-icon>
                        <Tickets />
                      </el-icon>
                      <el-text>
                        系统公告
                      </el-text>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                      <el-icon>
                        <MuteNotification />
                      </el-icon>
                      <el-text>
                        全部已读
                      </el-text>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>
            <el-col :span="16" class="vertical-center">
              <el-space v-if="store.getters['auth/isRefreshExpired']">
                <avatar :qq="store.state.auth.qq" :icon="UserFilled" />
                <div class="text-center">
                  <el-text>未登录</el-text><br>
                  <el-link @click="openLoginView" :underline="false">登录/注册</el-link>
                </div>
              </el-space>
              <el-dropdown>
                <el-space v-if="!store.getters['auth/isRefreshExpired']">
                  <avatar :qq="store.state.auth.qq" :icon="UserFilled" />
                  <div class="text-center">
                    <el-text>{{ store.state.auth.nickname }}</el-text><br>
                    <el-tag class="ml-2" type="success" size="small">Level 2</el-tag>
                  </div>
                </el-space>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <el-icon>
                        <User />
                      </el-icon>
                      <el-text>
                        个人信息
                      </el-text>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                      <el-icon>
                        <Lock />
                      </el-icon>
                      <el-text>
                        账号安全
                      </el-text>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                      <el-icon>
                        <SwitchButton />
                      </el-icon>
<!--                      <el-text>-->
                      <el-text :onclick="logout">
                        <!--                    <el-text>-->
                        登出
                      </el-text>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>
          </el-row>
          <!--        <div class="flex-grow"></div>-->
        </el-col>
      </el-row>
    </div>

  </el-affix>
  <router-view/>
</template>
    
<script setup lang="ts">
import themeSwitch from "@/components/Button/ThemeSwitch.vue";
import search from "@/components/Form/Search.vue";
import avatar from "@/components/TheAvatar.vue"
import Paste from "@/views/paste/Paste.vue";
import { Bell } from '@element-plus/icons-vue'
import { UserFilled } from '@element-plus/icons-vue'
import { User } from '@element-plus/icons-vue'
import { Lock } from '@element-plus/icons-vue'
import { SwitchButton } from '@element-plus/icons-vue'
import { Message } from '@element-plus/icons-vue'
import { Tickets } from '@element-plus/icons-vue'
import { MuteNotification } from '@element-plus/icons-vue'
import { useStore } from "vuex";
const store = useStore()
import { ref } from 'vue'
//fix
// import Component from 'vue-class-component'
// import Home from "../views/home/Home.vue";   //都用的@
const openLoginView = () => {
  store.commit('auth/toggleLoginViewVisible')
}
const logout = () => {
  store.commit("auth/clearToken")
}
const props = defineProps({
  activeIndex: String,

})



</script>
    
<style scoped>
/*<style>*/
.nav {


  background-color: var(--el-bg-color);
}

.el-menu--horizontal.el-menu {
  border-bottom: none;
}

.el-menu-item {
  text-align: center;
  font-size: 16px;
}
</style>
    