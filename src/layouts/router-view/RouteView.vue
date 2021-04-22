<script>
import { defineComponent, KeepAlive } from "vue";
export default defineComponent({
  name: "RouteView",
  props: {
    keepAlive: {
      type: Boolean,
      default: true,
    },
  },
  render() {
    const {
      $route: { meta },
    } = this;
    const inKeep = (
      <KeepAlive>
        <router-view />
      </KeepAlive>
    );
    const notKeep = <router-view />;
    if (!meta.keepAlive) {
      return notKeep;
    }
    return this.keepAlive || meta.keepAlive ? inKeep : notKeep;
  },
});
</script>
