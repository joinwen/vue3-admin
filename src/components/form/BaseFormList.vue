<template>
  <div :style="{ display: display }">
    <el-input
      v-if="type === 'input'"
      clearable
      v-model="theValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @change="handleChange"
    >
    </el-input>

    <el-input
      v-if="type === 'input-textarea'"
      clearable
      :disabled="disabled"
      type="textarea"
      v-model="theValue"
      :placeholder="placeholder"
      @change="handleChange"
    >
    </el-input>

    <el-select
      v-if="type === 'select'"
      v-model="theValue"
      :disabled="disabled"
      clearable
      :placeholder="placeholder"
      @change="handleChange"
    >
      <el-option
        v-for="(option, index) in data"
        :label="option.label || option"
        :value="option.value === undefined ? option : option.value"
        :key="index"
      ></el-option>
    </el-select>

    <el-date-picker
      v-if="type === 'date-picker'"
      v-model="theValue"
      :type="dateType"
      :format="dateFormat"
      :value-format="item.format || valueFormat"
      :range-separator="rangeSeparator || null"
      :start-placeholder="startPlaceholder || null"
      :end-placeholder="endPlaceholder || null"
      :placeholder="placeholder"
      @change="handleChange"
    >
    </el-date-picker>
    <base-input-tree
      v-if="type === 'input-tree'"
      :data="data"
      :prop="theValue"
      @change="handleChange"
    />
    <el-button
      v-if="type === 'button'"
      :type="item.buttonType"
      @click="handleClick(item.emit)"
      >{{ item.text }}</el-button
    >
  </div>
</template>
<script lang="ts">
import BaseInputTree from "@/components/input/BaseInputTree.vue";
import { defineComponent, PropType } from "vue";
import { FormItem } from "@/typings/components/form";
export default defineComponent({
  name: "BaseFormList",
  components: { BaseInputTree },
  props: {
    item: {
      type: Object as PropType<FormItem>,
      default: () => {
        return {};
      },
    },
    type: {
      type: String,
      default: "input",
    },
    placeholder: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hidden: {
      type: Function,
      default: () => true,
    },
    dateType: {
      type: String,
      default: "datetimerange",
    },
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD HH:mm:ss",
    },
    valueFormat: {
      type: String,
      default: "yyyy-MM-dd HH:mm:ss",
    },
    display: {
      type: String,
      default: "block",
    },
    rangeSeparator: {
      type: String,
      default: "至",
    },
    startPlaceholder: {
      type: String,
      default: "开始日期",
    },
    endPlaceholder: {
      type: String,
      default: "结束日期",
    },
    newValue: {
      type: [String, Object, Number],
      default: () => {
        return undefined;
      },
    },
    value: null,
  },
  watch: {
    value: {
      handler(newVal: unknown) {
        this.theValue = newVal;
      },
      immediate: true,
    },
  },
  emits: ["update:newValue", "onChange", "onClick"],
  data() {
    return {
      theValue: undefined as unknown,
    };
  },
  methods: {
    handleChange(val: unknown): void {
      this.$emit("update:newValue", val);
      this.$emit("onChange");
    },
    handleClick(emit: string): void {
      this.$emit("onClick", emit);
    },
  },
});
</script>
<style lang="less" scoped></style>
