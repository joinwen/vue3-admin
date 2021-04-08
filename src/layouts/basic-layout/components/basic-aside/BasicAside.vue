<template>
  <div class="basic-aside">
    <h3>Basic Aside</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BasicAside",
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
  data() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.basic-aside {
  width: 250px;
  height: 100%;
  overflow: hidden;
  background: #42b983;
}
</style>
