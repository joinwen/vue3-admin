<template>
  <div class="Basic-Header">
    <div :class="[generatePseudoHeaderClass, 'ease-in-0.25']"></div>
    <header :class="[generateHeaderClass, 'ease-in-0.25', 'shadow-basic']">
      <span
        class="inline-flex hover:gray-400 ease-in-out-1/60"
        cursor="pointer"
        @click="handleTriggerSideMenu"
      >
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="menu-fold"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"
          ></path>
        </svg>
      </span>
    </header>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useStore, mapGetters } from "vuex";
export default defineComponent({
  name: "BasicHeader",
  setup(props, { attrs, emit, slots }) {
    console.log(props, attrs, emit, slots);
    const store = useStore();
    const handleTriggerSideMenu = () => {
      store.commit("SET_SIDE_BAR", !store.getters.sideBar);
    };
    return {
      handleTriggerSideMenu,
    };
  },
  computed: {
    ...mapGetters(["sideBar", "fixedSideBar", "fixedHeader", "isMobile"]),
    generatePseudoHeaderClass() {
      let classList = ["pseudo-header"];
      if (!this.fixedHeader) {
        classList.push("pseudo-header-hidden");
      }
      return classList.join(" ");
    },
    generateHeaderClass() {
      let classList = ["header"];
      if (this.fixedHeader) {
        classList.push("header-fixed");
        if (!this.sideBar) {
          classList.push("header-fixed-shrink");
        }
      } else {
        classList.push("header-static");
      }
      if (this.isMobile) {
        classList.push("header-mobile");
      }
      return classList.join(" ");
    },
  },
});
</script>
<style lang="less" scoped>
@import "../../../../bootstrap/style/basic-layout";
.Basic-Header {
  .pseudo-header {
    height: @headerHeight;
    min-height: @headerHeight;
  }
  .pseudo-header-hidden {
    display: none;
  }
  .header {
    height: @headerHeight;
    min-height: @headerHeight;
    background: @headerBg;
    align-items: center;
    & > span {
      padding-left: 1rem;
      padding-right: 1rem;
      align-items: center;
      height: @headerHeight;
    }
  }
  .header-fixed {
    position: fixed;
    top: 0;
    left: @sideWidth;
    right: 0;
  }
  .header-fixed-shrink {
    position: fixed;
    top: 0;
    right: 0;
    left: @sideShrinkWidth;
  }
  .header-static {
    width: 100%;
  }
  .header-mobile {
    left: 0;
  }
}
</style>
