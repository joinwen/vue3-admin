<template>
  <div class="Basic-Footer">
    <h3 class="tx-center">Basic Footer</h3>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BasicFooter",
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
.Basic-Footer {
  width: 100%;
  min-height: @headerHeight;
  height: @headerHeight;
  background: @footerBg;
}
</style>
