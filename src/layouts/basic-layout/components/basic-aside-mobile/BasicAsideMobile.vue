<template>
  <div class="Basic-Aside-Mobile">
    <el-drawer
      direction="ltr"
      v-model="drawer"
      :with-header="false"
      size="200px"
      :show-close="false"
    >
      <div class="aside">
        <div class="brand-logo" cursor="pointer">
          <img :src="require('@/assets/site/logo.png')" alt="" />
          <h1>vue3 admin</h1>
        </div>
        <el-scrollbar border-none x-hidden class="scrollbar">
          <el-menu
            class="el-menu-vertical-demo"
            :default-active="$route.path"
            :unique-opened="true"
          >
            <Menu
              v-for="(menu, index) in routes[0].children"
              :key="index"
              :data="menu"
            />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";
import Menu from "@/components/menu/Menu";
export default defineComponent({
  name: "BasicAsideMobile",
  components: { Menu },
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
    let drawer = ref(true);
    return {
      drawer,
    };
  },
  computed: {
    ...mapGetters(["routes"]),
  },
});
</script>
<style lang="less" scoped>
@import "../../../../bootstrap/style/basic-layout";
.Basic-Aside-Mobile {
  :deep(.el-drawer__body) {
    background-color: @sideBg;
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
}
</style>
