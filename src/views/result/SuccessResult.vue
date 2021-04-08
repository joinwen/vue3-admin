<template>
  <div class="Success-Result">
    <h2>成功页</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SuccessResult",
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
  data() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
