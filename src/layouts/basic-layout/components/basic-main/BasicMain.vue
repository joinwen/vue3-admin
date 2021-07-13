<template>
  <div class="Basic-Main">
    <div class="m-2">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
export default defineComponent({
  name: "BasicMain",
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
  },
  computed: {
    ...mapGetters(["nickname", "size"]),
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    ...mapMutations(["SET_NICKNAME", "SET_SIZE"]),
    handleTrigger() {
      this.visible = !this.visible;
      this.SET_NICKNAME("ok");
      this.SET_SIZE("bigger");
    },
  },
});
</script>
<style lang="less" scoped>
@import "../../../../bootstrap/style/basic-layout";
.Basic-Main {
  background-color: @mainBg;
}
</style>
