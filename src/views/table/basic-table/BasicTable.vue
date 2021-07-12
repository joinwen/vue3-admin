<template>
  <div>
    <h2>Basic Table</h2>
    <base-table />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseTable from "@/components/table/BaseTable.vue";
export default defineComponent({
  name: "BasicTable",
  components: { BaseTable },
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
});
</script>
<style lang="less" scoped></style>
