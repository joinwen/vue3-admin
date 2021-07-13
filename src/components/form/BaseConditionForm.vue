<template>
  <div>
    <el-form label-position="left" :inline="inline" :model="form" ref="formRef">
      <el-row type="flex" align="center">
        <template v-for="(item, index) in data" :key="index">
          <el-col
            v-if="!item.btn"
            :style="{
              overflow: item.type === 'date-picker' ? 'auto' : 'inherit',
            }"
            :size="size"
            :stretch-xl="item.span ? item.span.xl : 'auto'"
            :stretch-lg="item.span ? item.span.lg : 'auto'"
            :stretch-md="item.span ? item.span.md : 'auto'"
            :stretch-sm="item.span ? item.span.sm : 'auto'"
            :stretch-xs="item.span ? item.span.xs : 'auto'"
            :xl="
              item.span
                ? item.span.xl === 'auto'
                  ? undefined
                  : item.span.xl
                : undefined
            "
            :lg="
              item.span
                ? item.span.lg === 'auto'
                  ? undefined
                  : item.span.lg
                : undefined
            "
            :md="
              item.span
                ? item.span.md === 'auto'
                  ? undefined
                  : item.span.md
                : undefined
            "
            :xs="
              item.span
                ? item.span.xs === 'auto'
                  ? undefined
                  : item.span.xs
                : undefined
            "
            :span="item.span ? item.span.final : 24"
          >
            <el-form-item
              style="padding-right: 1em"
              :label-width="item.labelWidth || null"
              :label="item.label"
            >
              <base-form-list
                :type="item.type"
                :value="form[item.prop]"
                :data="item.data"
                :placeholder="item.placeholder"
                v-model:newValue="form[item.prop]"
                @emit="handleEmit"
              />
            </el-form-item>
          </el-col>
          <el-col
            :size="size"
            :stretch-xl="item.span ? item.span.xl : 'auto'"
            :stretch-lg="item.span ? item.span.lg : 'auto'"
            :stretch-md="item.span ? item.span.md : 'auto'"
            :stretch-sm="item.span ? item.span.sm : 'auto'"
            :stretch-xs="item.span ? item.span.xs : 'auto'"
            :xl="
              item.span
                ? item.span.xl === 'auto'
                  ? undefined
                  : item.span.xl
                : undefined
            "
            :lg="
              item.span
                ? item.span.lg === 'auto'
                  ? undefined
                  : item.span.lg
                : undefined
            "
            :md="
              item.span
                ? item.span.md === 'auto'
                  ? undefined
                  : item.span.md
                : undefined
            "
            :xs="
              item.span
                ? item.span.xs === 'auto'
                  ? undefined
                  : item.span.xs
                : undefined
            "
            :span="item.span ? item.span.final : 24"
            v-else
            style="min-height: 62px; margin-right: 2em"
            :style="{ textAlign: item.align ? item.align : 'left' }"
          >
            <el-button
              :type="item.type"
              :icon="item.icon"
              @click="onOthers(item)"
            >
              {{ item.label }}
            </el-button>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import BaseFormList from "@/components/form/BaseFormList.vue";
import { FormItem } from "@/typings/components/form";
import { ElForm } from "element-plus";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "BaseConditionForm",
  components: { BaseFormList },
  props: {
    data: {
      type: Array as PropType<Array<FormItem>>,
      default: () => {
        return [];
      },
    },
    immediate: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: true,
    },
    submitName: {
      type: String,
      default: "查询",
    },
    labelWidth: {
      type: String,
      default: "80px",
    },
  },
  computed: {
    ...mapGetters(["size"]),
  },
  watch: {
    data: {
      handler(newVal: Array<FormItem>): void {
        newVal.map((item: FormItem) => {
          this.form[item.prop] = item.default;
        });
      },
    },
  },
  data() {
    return {
      form: {} as Record<string, unknown>,
      nbsp: " " as string,
      formRef: ref<InstanceType<typeof ElForm>>(),
    };
  },
  mounted() {
    this.data.map((item) => {
      this.form[item.prop] = item.default;
    });
  },

  methods: {
    handleEmit(): void {
      if (this.immediate) {
        this.$emit("search", this.form);
      }
    },
    onOthers(btn: FormItem): void {
      if (btn.download) {
        // this.exportAsExcel(btn.filename);
      }
      if (btn.emit) {
        this.$emit(btn.emit, this.form);
      } else {
        this.$emit("handleOthers", btn);
      }
    },
    handleResetFields(): void {
      this.formRef?.resetFields();
    },
  },
});
</script>
<style lang="less" scoped>
[size="xl"].el-col[stretch-xl="auto"] {
  max-width: 100%;
  width: auto;
  flex-basis: auto;
}

[size="lg"].el-col[stretch-lg="auto"] {
  max-width: 100%;
  width: auto;
  flex-basis: auto;
}

[size="md"].el-col[stretch-md="auto"] {
  max-width: 100%;
  width: auto;
  flex-basis: auto;
}

[size="sm"].el-col[stretch-sm="auto"] {
  max-width: 100%;
  width: auto;
  flex-basis: auto;
}

[size="xs"].el-col[stretch-xs="auto"] {
  max-width: 100%;
  width: auto;
  flex-basis: auto;
}
</style>
