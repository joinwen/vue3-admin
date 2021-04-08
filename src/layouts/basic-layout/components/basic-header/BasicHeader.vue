<template>
  <div class="basic-header">
    <h3>Basic Header</h3>
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
.basic-header {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: yellowgreen;
}
</style>
