<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <div class="logo-wrapper">
      <img class="logo" src="./logo.png" width="49" height="49" alt="">
      <span class="title">生活专送</span>
    </div>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .logo-wrapper {
    width: 180px;
    height: 50px;
    background-color: #304156;
    border-bottom: 1px solid #e6e6e6;
    .logo {
      display: inline-block;
    }
    .title {
      display: inline-block;
      height: 50px;
      line-height: 50px;
      color: #fff;
      font-size: 20px;
      vertical-align: top;
      margin-left: 20px;
    }
  }
</style>
