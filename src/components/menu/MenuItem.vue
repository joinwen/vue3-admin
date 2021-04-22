<template>
  <el-menu-item @click="handleMenuClick" :disabled="disabled" :index="index">
    <!--    <template #title>-->
    <i v-if="icon" :class="[icon]"></i>
    <span>{{ title }}</span>
    <!--    </template>-->
  </el-menu-item>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuItem",
  props: {
    index: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    badge: {
      type: Number,
      default: null,
    },
  },
  methods: {
    handleMenuClick() {
      let path = this.index;
      this.$router.push({ path: path });
    },
  },
});
</script>
<style lang="less" scoped></style>
