<template>
  <div class="basic-footer">
    <h3>Basic Footer</h3>
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
.basic-footer {
  width: 100%;
  height: 48px;
  overflow: hidden;
  background: burlywood;
}
</style>
