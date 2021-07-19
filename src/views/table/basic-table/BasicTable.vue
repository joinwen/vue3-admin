<template>
  <div class="playground">
    <h2>基础表单</h2>
    <base-condition-form
      ref="conditionRef"
      :data="conditions"
      @onSearch="handleSearch"
      @onAdd="handleAdd"
    />
    <base-table
      @onPageChange="handlePageChange"
      @onPageSizeChange="handlePageSizeChange"
      :loading="loading"
      :total="total"
      :columns="columns"
      :data="data"
    />
    <add-basic-table
      :visible="visible"
      :disabled="disabled"
      :handleAddCancel="handleAddCancel"
      :handleAddOk="handleAddOk"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import BaseConditionForm from "@/components/form/BaseConditionForm.vue";
import BaseTable from "@/components/table/BaseTable.vue";
import AddBasicTable from "@/views/table/basic-table/components/AddBasicTable.vue";
import modelHook from "@/views/table/basic-table/assets/model";
import searchHook from "@/views/table/basic-table/assets/service/searchHook";
import API from "./assets/api/index";
import addHook from "@/views/table/basic-table/assets/service/addHook";
export default defineComponent({
  name: "BasicTable",
  components: { AddBasicTable, BaseConditionForm, BaseTable },
  setup() {
    const { columns, conditions } = modelHook();
    const {
      data,
      total,
      loading,
      conditionRef,
      handleSearch,
      handlePageChange,
      handlePageSizeChange,
    } = searchHook(API.getDataApi);
    const {
      visible,
      disabled,
      handleAdd,
      handleAddOk,
      handleAddCancel,
    } = addHook(API.addDataApi);
    onMounted(() => {
      handleSearch();
    });
    return {
      data,
      total,
      loading,
      columns,
      conditions,
      conditionRef,
      handleSearch,
      handlePageChange,
      handlePageSizeChange,

      visible,
      disabled,
      handleAdd,
      handleAddOk,
      handleAddCancel,
    };
  },
});
</script>
<style lang="less" scoped></style>
