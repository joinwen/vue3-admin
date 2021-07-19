<template>
  <div class="Add-Basic-Table">
    <el-dialog title="添加" v-model="theVisible" @close="onAddCancel">
      <el-form :model="form" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="username" />
        </el-form-item>
        <el-form-item prop="age">
          <el-input-number v-model="form.age" placeholder="age" />
        </el-form-item>
        <el-form-item prop="description">
          <el-input
            v-model="form.description"
            placeholder="description"
          ></el-input>
        </el-form-item>
        <el-form-item prop="hobby">
          <el-input v-model="form.hobby" placeholder="hobby"></el-input>
        </el-form-item>
        <el-form-item prop="weight">
          <el-input v-model="form.weight" placeholder="weight"></el-input>
        </el-form-item>
        <el-form-item prop="height">
          <el-input v-model="form.height" placeholder="height"></el-input>
        </el-form-item>
        <el-form-item prop="status">
          <el-select v-model="form.status">
            <el-option :value="1" label="主" />
            <el-option :value="2" label="备" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onAddOk" :disabled="disabled"
            >确定</el-button
          >
          <el-button @click="onAddCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { ref, toRefs, watch, defineComponent, PropType } from "vue";
import { AddFormItemType } from "@/typings/table/basic-table/index";
export default defineComponent({
  name: "AddBasicTable",
  components: {},
  setup(props) {
    const { visible, handleAddOk, handleAddCancel } = toRefs(props);
    const theVisible = ref(false);
    const form = ref<AddFormItemType>({} as AddFormItemType);
    const formRef = ref(null);
    const onAddOk = () => {
      handleAddOk(form);
    };
    const onAddCancel = () => {
      formRef.value.resetFields();
      handleAddCancel();
    };
    watch(
      visible,
      (val) => {
        theVisible.value = val;
      },
      { immediate: true }
    );
    return {
      theVisible,
      form,
      formRef,
      onAddOk,
      onAddCancel,
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    handleAddOk: {
      type: Function,
    },
    handleAddCancel: {
      type: Function as PropType<() => void>,
    },
    handleAdd: {
      type: Function,
    },
    disabled: {
      type: Boolean,
    },
  },
  methods: {},
});
</script>
<style lang="less" scoped></style>
