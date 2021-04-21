<template>
  <div class="Basic-Header">
    <div class="pseudo-header"></div>
    <header class="header header-fixed"></header>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BasicHeader",
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
  data() {
    return {};
  },
});
</script>
<style lang="less" scoped>
@import "../../../../bootstrap/style/basic-layout";
.Basic-Header {
  .pseudo-header {
    height: @headerHeight;
  }
  .pseudo-header-hidden {
    display: none;
  }
  .header {
    height: @headerHeight;
    background: @headerBg;
  }
  .header-fixed {
    position: fixed;
    top: 0;
    left: @sideWidth;
    right: 0;
  }
  .header-static {
    width: 100%;
  }
}
</style>
