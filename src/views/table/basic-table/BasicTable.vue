<template>
  <div class="Basic-Table">
    <h2>基础表单</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BasicTable",
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
  data() {
    return {};
  },
});
</script>
<style lang="less" scoped></style>
