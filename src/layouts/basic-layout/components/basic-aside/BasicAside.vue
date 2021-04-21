<template>
  <div class="Basic-Aside">
    <div class="pseudo-aside pseudo-aside-none"></div>
    <aside class="aside aside-static">
      <el-menu>
        <Menu v-for="(menu, index) in routes" :key="index" />
      </el-menu>
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
