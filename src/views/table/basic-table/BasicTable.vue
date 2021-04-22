<template>
  <div class="Basic-Table p-1 bg-white">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="school" label="学校"> </el-table-column>
      <el-table-column prop="company" label="公司"> </el-table-column>
      <el-table-column prop="gender" label="性别"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "BasicTable",
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
    let tableData = ref([
      {
        date: "2021-01-05",
        name: "fly",
        address: "china shanghai",
        school: "njit",
        company: "hy",
        gender: "male",
        age: 23,
      },
    ]);
    return {
      tableData,
    };
  },
});
</script>
<style lang="less" scoped></style>
