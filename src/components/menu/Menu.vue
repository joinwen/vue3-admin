<template>
  <div v-if="!data.hidden">
    <menu-item
      v-if="!data.children || data.children.length == 0"
      :index="data.path"
      :icon="data.meta ? data.meta.icon : undefined"
      :title="data.meta ? data.meta.title : undefined"
    />
    <menu-item
      v-if="data.children && data.children.length == 1"
      :index="data.children[0].path"
      :icon="data.children[0].meta ? data.children[0].meta.icon : undefined"
      :title="data.children[0].meta ? data.children[0].meta.title : undefined"
    />
    <template v-if="data.children && data.children.length > 1">
      <el-submenu :index="data.path" :key="data.name">
        <template #title>
          <i v-if="data.meta && data.meta.icon" :class="[data.meta.icon]"></i>
          <span>{{ data.meta.title }}</span>
        </template>
        <Menu
          :key="index"
          v-for="(menu, index) in data.children"
          :data="menu"
        />
      </el-submenu>
    </template>
  </div>
</template>
<script lang="ts">
import MenuItem from "./MenuItem.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Menu",
  components: { MenuItem },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
});
</script>
<style lang="less" scoped></style>
