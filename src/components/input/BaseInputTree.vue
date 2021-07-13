<template>
  <div>
    <div id="base-input-tree">
      <el-input class="el-input" v-model="theProp.label" placeholder="请选择" />
      <el-tree
        :class="['el-input-tree', !visible && 'hidden']"
        :data="data"
        :props="{ label: 'title' }"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import InputTreeItem from "@/typings/components/input";
export default defineComponent({
  name: "BaseInputTree",
  props: {
    data: {
      type: Array as PropType<Array<Record<string, unknown>>>,
      default: () => {
        return [];
      },
    },
    prop: {
      type: Object as PropType<InputTreeItem>,
      default: () => {
        return {
          label: "",
          value: undefined,
        };
      },
    },
  },
  watch: {
    prop: {
      handler(newVal) {
        this.theProp = newVal;
      },
    },
  },
  data() {
    return {
      visible: false as boolean,
      theProp: {
        label: "",
        value: undefined,
      } as InputTreeItem,
    };
  },
  mounted() {
    const container: Element | null = document.querySelector(
      "#base-input-tree"
    );
    if (container) {
      container.addEventListener("click", (e) => {
        e.stopPropagation();
        this.visible = !this.visible;
      });
    }
    document.addEventListener("click", () => {
      this.visible = false;
    });
  },
  methods: {
    handleFocus() {
      this.visible = true;
    },
    handleBlur() {
      this.visible = false;
    },
    handleNodeClick(node: {
      id: number | string;
      title: string;
      [any: string]: unknown;
    }) {
      this.theProp.value = node.id;
      this.theProp.label = node.title;
      this.visible = false;
      this.$emit("change", this.theProp);
    },
  },
});
</script>
<style lang="less" scoped>
#base-input-tree {
  position: relative;
}
.el-input {
  caret-color: transparent;
  ::v-deep(.el-input__inner) {
    cursor: pointer;
  }
}
.el-input-tree {
  position: absolute;
  z-index: 1111;
  width: 100%;
  box-shadow: 0 0 9px 0px #e0e0e0;
  transition: all 0.1s ease-in-out;
}
.hidden {
  visibility: hidden;
}
</style>
