<template>
  <div class="main-menu-box">
    <el-menu
      :default-active="$route.path"
      background-color="#545c64"
      text-color="#fff"
      router>
      <el-menu-item
        v-for="(menu) in menus"
        :key="menu.key"
        :index="menu.path">
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu-box {
  height: 100%;
  min-height: 100vh;
  background-color: #545c64;
  overflow: auto;
}
</style>
