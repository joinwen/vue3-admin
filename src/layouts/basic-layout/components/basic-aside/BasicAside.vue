<template>
  <div class="Basic-Aside">
    <div class="pseudo-aside pseudo-aside-none"></div>
    <aside class="aside aside-static">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>导航四</template>
        </el-menu-item>
      </el-menu>
    </aside>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "BasicAside",
  components: {},
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
  computed: {
    ...mapGetters(["routes"]),
  },
});
</script>
<style lang="less" scoped>
@import "../../../../bootstrap/style/basic-layout";
.Basic-Aside {
  .pseudo-aside {
    width: @sideWidth;
  }
  .pseudo-aside-hidden {
    display: none;
  }
  .aside {
    background: @sideBg;
  }
  .aside-static {
    width: @sideWidth;
    height: 100%;
  }
  .aside-fixed {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: @sideWidth;
  }
}
</style>
