<template>
  <div class="base-bread-crumb" :class="[hasHr && 'hr', size]">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(bread, index) in auto ? matches : data"
        :key="index"
        :to="{ path: bread.path }"
      >
        {{ bread.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
interface DataType {
  path: string;
  label: string;
}
export default defineComponent({
  name: "BreadCrumb",
  props: {
    data: {
      type: Array as PropType<DataType[]>,
      default() {
        return [];
      },
    },
    size: {
      type: String,
      default: "md",
    },
    hasHr: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    $route: {
      handler() {
        this.generateMatchedRoutes();
      },
    },
  },
  data() {
    return {
      matches: [] as Array<DataType>,
      auto: this.data.length === 0,
    };
  },
  mounted() {
    this.generateMatchedRoutes();
  },
  methods: {
    generateMatchedRoutes(): void {
      this.matches = this.$route.matched.map((item) => {
        return { path: item.path || "/", label: item.meta.title } as DataType;
      });
    },
  },
});
</script>
<style lang="less" scoped>
.base-bread-crumb {
  font-size: 16px;
  position: relative;
}
.md {
  v-deep(.el-breadcrumb) {
    font-size: 16px;
  }
}
.base {
  v-deep(.el-breadcrumb) {
    font-size: 14px;
  }
}
.lg {
  v-deep(.el-breadcrumb) {
    font-size: 18px;
  }
}
.hr {
  padding-bottom: 0.5em;
  border-bottom: 1px solid #dcdfe6;
}
</style>
