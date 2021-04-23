<template>
  <section class="Basic-Layout h-m-full">
    <basic-aside class="aside" v-if="!isMobile" />
    <basic-aside-mobile v-if="isMobile" />
    <section class="main">
      <basic-header class="main-header" />
      <basic-main class="main-main" />
      <basic-footer class="main-footer" />
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import BasicAside from "@/layouts/basic-layout/components/basic-aside/BasicAside.vue";
import BasicHeader from "@/layouts/basic-layout/components/basic-header/BasicHeader.vue";
import BasicMain from "@/layouts/basic-layout/components/basic-main/BasicMain.vue";
import BasicFooter from "@/layouts/basic-layout/components/basic-footer/BasicFooter.vue";
import BasicAsideMobile from "@/layouts/basic-layout/components/basic-aside-mobile/BasicAsideMobile.vue";
export default defineComponent({
  name: "BasicLayout",
  components: {
    BasicFooter,
    BasicMain,
    BasicHeader,
    BasicAside,
    BasicAsideMobile,
  },
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  data() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.Basic-Layout {
  display: flex;
  flex-direction: row;
  .aside {
  }
  .main {
    min-width: 0;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    .main-header {
      z-index: 1;
    }
    .main-main {
      flex: 1 1 auto;
    }
  }
}
</style>
