<template>
  <section class="Basic-Layout h-m-full">
    <basic-aside class="aside" />
    <section class="main">
      <basic-header class="main-header" />
      <basic-main class="main-main" />
      <basic-footer class="main-footer" />
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BasicAside from "@/layouts/basic-layout/components/basic-aside/BasicAside.vue";
import BasicHeader from "@/layouts/basic-layout/components/basic-header/BasicHeader.vue";
import BasicMain from "@/layouts/basic-layout/components/basic-main/BasicMain.vue";
import BasicFooter from "@/layouts/basic-layout/components/basic-footer/BasicFooter.vue";
export default defineComponent({
  name: "BasicLayout",
  components: { BasicFooter, BasicMain, BasicHeader, BasicAside },
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
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
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;

    .main-main {
      flex: 1 1 auto;
    }
  }
}
</style>
