import { ref } from "vue";
function addHook(): Record<string, any> {
  const visible = ref(false),
    disabled = ref(false),
    handleAdd = (): void => {
      visible.value = true;
    },
    handleAddOk = (): void => {
      disabled.value = true;
    },
    handleAddCancel = (): void => {
      visible.value = false;
    };
  return {
    visible,
    disabled,
    handleAdd,
    handleAddOk,
    handleAddCancel,
  };
}
export default addHook;
