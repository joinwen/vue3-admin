<template>
  <section class="basic-layout h-full">
    <aside class="aside">
      <basic-aside />
    </aside>
    <section class="h-full">
      <header class="header">
        <basic-header />
      </header>
      <main class="main">
        <div class="main-section">
          <basic-main />
          <footer class="footer">
            <basic-footer />
          </footer>
        </div>
      </main>
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
.basic-layout {
  .aside {
    position: fixed;
    top: 0;
    bottom: 0;
  }
  section {
    margin-left: 250px;
    position: relative;

    .header {
      position: fixed;
      height: 64px;
      top: 0;
      left: 250px;
      right: 0;
      z-index: 100;
    }
    .main {
      padding-top: 64px;
      height: 100%;
      box-sizing: border-box;

      .main-section {
        position: relative;
        height: 100%;

        .footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
      }
    }
  }
}
</style>
