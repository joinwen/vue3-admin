<template>
  <div class="Basic-Aside">
    <div class="pseudo-aside pseudo-aside-none"></div>
    <aside class="aside aside-static">
      <div class="brand-logo" cursor="pointer">
        <img :src="require('@/assets/site/logo.png')" alt="" />
        <h1>vue3 admin</h1>
      </div>
      <el-scrollbar border-none x-hidden class="scrollbar">
        <el-menu class="el-menu-vertical-demo">
          <Menu v-for="(menu, index) in routes" :key="index" :data="menu" />
        </el-menu>
      </el-scrollbar>
    </aside>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Menu from "@/components/menu/Menu.vue";
export default defineComponent({
  name: "BasicAside",
  components: { Menu },
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
    .brand-logo {
      display: flex;
      height: @headerHeight;
      align-items: center;
      justify-content: center;
      color: @menuColorActive;
      img {
        width: 32px;
        height: 32px;
        margin-right: 0.5rem;
      }
      h1 {
        font-size: 18px;
      }
    }
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
