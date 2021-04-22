<template>
  <div class="Basic-Aside">
    <div :class="[pseudoSideClass, 'ease-in-0.25']"></div>
    <aside :class="[sideClass, 'ease-in-0.25']">
      <div class="brand-logo" cursor="pointer">
        <img :src="require('@/assets/site/logo.png')" alt="" />
        <h1 v-if="sideBar">vue3 admin</h1>
      </div>
      <el-scrollbar border-none x-hidden class="scrollbar">
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          :unique-opened="true"
          :collapse="!sideBar"
        >
          <Menu
            v-for="(menu, index) in routes[0].children"
            :key="index"
            :data="menu"
          />
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
    ...mapGetters(["routes", "sideBar", "fixedSideBar"]),
    pseudoSideClass() {
      let classStr = [];
      if (this.sideBar) {
        classStr.push("pseudo-aside");
      } else {
        classStr.push("pseudo-aside-shrink");
      }
      if (!this.fixedSideBar) {
        classStr.push("pseudo-aside-hidden");
      }
      return classStr.join(" ");
    },
    sideClass() {
      let classStr = ["aside"];
      if (this.sideBar) {
        if (this.fixedSideBar) {
          classStr.push("aside-fixed");
        } else {
          classStr.push("aside-static");
        }
      } else {
        if (this.fixedSideBar) {
          classStr.push("aside-fixed-shrink");
        } else {
          classStr.push("aside-static-shrink");
        }
      }
      return classStr.join(" ");
    },
  },
});
</script>
<style lang="less" scoped>
@import "../../../../bootstrap/style/basic-layout";
.Basic-Aside {
  .pseudo-aside {
    width: @sideWidth;
    min-width: @sideWidth;
  }
  .pseudo-aside-shrink {
    width: @sideShrinkWidth;
    min-width: @sideShrinkWidth;
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
    min-width: @sideWidth;
    height: 100%;
  }

  .aside-static-shrink {
    width: @sideShrinkWidth;
    min-width: @sideShrinkWidth;
    height: 100%;
  }

  .aside-fixed {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: @sideWidth;
  }

  .aside-fixed-shrink {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: @sideShrinkWidth;
  }
}
</style>
