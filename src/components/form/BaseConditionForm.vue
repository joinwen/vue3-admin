<!--<template>-->
<!--  <div>-->
<!--    <el-form label-position="left" :inline="inline" :model="form" ref="formRef">-->
<!--      <el-row type="flex" align="center">-->
<!--        <template v-for="(item, index) in data" :key="index">-->
<!--          <el-col-->
<!--            v-if="!item.btn"-->
<!--            :style="{-->
<!--              overflow: item.type === 'date-picker' ? 'auto' : 'inherit',-->
<!--            }"-->
<!--            :stretch-xl="item.span ? item.span.xl : 'auto'"-->
<!--            :stretch-lg="item.span ? item.span.lg : 'auto'"-->
<!--            :stretch-md="item.span ? item.span.md : 'auto'"-->
<!--            :stretch-sm="item.span ? item.span.sm : 'auto'"-->
<!--            :stretch-xs="item.span ? item.span.xs : 'auto'"-->
<!--            :xl="-->
<!--              item.span-->
<!--                ? item.span.xl === 'auto'-->
<!--                  ? undefined-->
<!--                  : item.span.xl-->
<!--                : undefined-->
<!--            "-->
<!--            :lg="-->
<!--              item.span-->
<!--                ? item.span.lg === 'auto'-->
<!--                  ? undefined-->
<!--                  : item.span.lg-->
<!--                : undefined-->
<!--            "-->
<!--            :md="-->
<!--              item.span-->
<!--                ? item.span.md === 'auto'-->
<!--                  ? undefined-->
<!--                  : item.span.md-->
<!--                : undefined-->
<!--            "-->
<!--            :xs="-->
<!--              item.span-->
<!--                ? item.span.xs === 'auto'-->
<!--                  ? undefined-->
<!--                  : item.span.xs-->
<!--                : undefined-->
<!--            "-->
<!--            :span="item.span ? item.span.final : 24"-->
<!--          >-->
<!--            <el-form-item-->
<!--              style="padding-right: 1em"-->
<!--              :label-width="item.labelWidth || null"-->
<!--              :label="item.label"-->
<!--            >-->
<!--              <base-form-list-->
<!--                :type="item.type"-->
<!--                :value="form[item.prop]"-->
<!--                :data="item.data"-->
<!--                :placeholder="item.placeholder"-->
<!--                v-model:newValue="form[item.prop]"-->
<!--                @emit="handleEmit"-->
<!--              />-->
<!--            </el-form-item>-->
<!--          </el-col>-->
<!--          <el-col-->
<!--            :stretch-xl="item.span ? item.span.xl : 'auto'"-->
<!--            :stretch-lg="item.span ? item.span.lg : 'auto'"-->
<!--            :stretch-md="item.span ? item.span.md : 'auto'"-->
<!--            :stretch-sm="item.span ? item.span.sm : 'auto'"-->
<!--            :stretch-xs="item.span ? item.span.xs : 'auto'"-->
<!--            :xl="-->
<!--              item.span-->
<!--                ? item.span.xl === 'auto'-->
<!--                  ? undefined-->
<!--                  : item.span.xl-->
<!--                : undefined-->
<!--            "-->
<!--            :lg="-->
<!--              item.span-->
<!--                ? item.span.lg === 'auto'-->
<!--                  ? undefined-->
<!--                  : item.span.lg-->
<!--                : undefined-->
<!--            "-->
<!--            :md="-->
<!--              item.span-->
<!--                ? item.span.md === 'auto'-->
<!--                  ? undefined-->
<!--                  : item.span.md-->
<!--                : undefined-->
<!--            "-->
<!--            :xs="-->
<!--              item.span-->
<!--                ? item.span.xs === 'auto'-->
<!--                  ? undefined-->
<!--                  : item.span.xs-->
<!--                : undefined-->
<!--            "-->
<!--            :span="item.span ? item.span.final : 24"-->
<!--            v-else-->
<!--            style="min-height: 62px; margin-right: 2em"-->
<!--            :style="{ textAlign: item.align ? item.align : 'left' }"-->
<!--          >-->
<!--            <el-button-->
<!--              :type="item.type"-->
<!--              :icon="item.icon"-->
<!--              @click="onOthers(item)"-->
<!--            >-->
<!--              {{ item.label }}-->
<!--            </el-button>-->
<!--          </el-col>-->
<!--        </template>-->
<!--      </el-row>-->
<!--    </el-form>-->
<!--  </div>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--import { defineComponent, PropType, ref } from "vue";-->
<!--import BaseFormList from "@/components/form/BaseFormList.vue";-->
<!--import { FormItem } from "@/typings/components/form";-->
<!--import { ElForm } from "element-plus";-->
<!--export default defineComponent({-->
<!--  name: "BaseConditionForm",-->
<!--  components: { BaseFormList },-->
<!--  props: {-->
<!--    data: {-->
<!--      type: Array as PropType<Array<FormItem>>,-->
<!--      default() {-->
<!--        return [];-->
<!--      },-->
<!--    },-->
<!--    immediate: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->
<!--    inline: {-->
<!--      type: Boolean,-->
<!--      default: true,-->
<!--    },-->
<!--    submitName: {-->
<!--      type: String,-->
<!--      default: "查询",-->
<!--    },-->
<!--    labelWidth: {-->
<!--      type: String,-->
<!--      default: "80px",-->
<!--    },-->
<!--  },-->
<!--  watch: {-->
<!--    data: {-->
<!--      handler(newVal: Array<FormItem>): void {-->
<!--        newVal.map((item: FormItem) => {-->
<!--          this.form[item.value] = item.default;-->
<!--        });-->
<!--      },-->
<!--    },-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      form: {} as Record<string, any>,-->
<!--      nbsp: " " as string,-->
<!--      formRef: ref<InstanceType<typeof ElForm>>(),-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    this.data.map((item) => {-->
<!--      this.form[item.value] = item.default;-->
<!--    });-->
<!--  },-->
<!--  emits: {-->
<!--    search: (form: Record<string, unknown>) => {-->
<!--      return form;-->
<!--    },-->
<!--    handleSubmit: (form: Record<string, unknown>) => {-->
<!--      return form;-->
<!--    },-->
<!--    handleOthers: (btn: Record<string, unknown>) => {-->
<!--      return btn;-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    handleEmit(): void {-->
<!--      if (this.immediate) {-->
<!--        this.$emit("search", this.form);-->
<!--      }-->
<!--    },-->
<!--    onOthers(btn): void {-->
<!--      if (btn.download) {-->
<!--        // this.exportAsExcel(btn.filename);-->
<!--      }-->
<!--      if (btn.emit) {-->
<!--        this.$emit(btn.emit, this.form);-->
<!--      } else {-->
<!--        this.$emit("handleOthers", btn);-->
<!--      }-->
<!--    },-->
<!--    // exportAsExcel(filename, ele, fix) {-->
<!--    //   ele = ele ? ele : document.querySelector("#tableExcel");-->
<!--    //   fix = fix ? fix : document.querySelector(".el-table__fixed-right");-->
<!--    //   filename = filename ? filename : this.filename;-->
<!--    //   let xlsxParam = { raw: true }, // 导出的内容只做解析，不进行格式转换-->
<!--    //     wb = undefined;-->
<!--    //   if (fix) {-->
<!--    //     import("./lib").then((xlsx) => {-->
<!--    //       xlsx = xlsx.default;-->
<!--    //       wb = xlsx.utils.table_to_book(ele.removeChild(fix));-->
<!--    //     });-->
<!--    //     ele.appendChild(fix);-->
<!--    //   } else {-->
<!--    //     import("./lib").then((xlsx) => {-->
<!--    //       xlsx = xlsx.default;-->
<!--    //       wb = xlsx.utils.table_to_book(ele, xlsxParam);-->
<!--    //     });-->
<!--    //   }-->
<!--    //   var wbout;-->
<!--    //   import("./lib").then((xlsx) => {-->
<!--    //     xlsx = xlsx.default;-->
<!--    //     wbout = xlsx.write(wb, {-->
<!--    //       bookType: "xlsx",-->
<!--    //       bookSST: true,-->
<!--    //       type: "array",-->
<!--    //     });-->
<!--    //     try {-->
<!--    //       FileSaver.saveAs(-->
<!--    //         new Blob([wbout], { type: "application/octet-stream" }),-->
<!--    //         filename-->
<!--    //       );-->
<!--    //     } catch (e) {-->
<!--    //       if (typeof console != "undefined") {-->
<!--    //         console.log(e, wbout);-->
<!--    //       }-->
<!--    //     }-->
<!--    //   });-->
<!--    // },-->

<!--    handleResetFields(): void {-->
<!--      // this.$refs.form.resetFields();-->
<!--      this.formRef.value?.resetFields();-->
<!--    },-->
<!--  },-->
<!--});-->
<!--</script>-->
<!--<style lang="less" scoped></style>-->
