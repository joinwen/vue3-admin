<template>
  <div class="playground">
    <h2>基础表单</h2>
    <base-condition-form :data="conditions" />
    <base-table :columns="columns" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import BaseConditionForm from "@/components/form/BaseConditionForm.vue";
import BaseTable from "@/components/table/BaseTable.vue";
import modelHook from "@/views/table/basic-table/assets/model";
export default defineComponent({
  name: "BasicTable",
  components: { BaseConditionForm, BaseTable },
  setup() {
    const { columns, conditions } = modelHook();
    onMounted(() => {
      console.log("hi");
    });
    return {
      columns,
      conditions,
    };
  },
});
</script>
<style lang="less" scoped></style>
