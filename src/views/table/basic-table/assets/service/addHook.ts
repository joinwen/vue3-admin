import { ref } from "vue";
import { ElMessage } from "element-plus";
function addHook(
  fn: (data: unknown) => Promise<any>,
  cb?: () => void
): Record<string, any> {
  const visible = ref(false),
    disabled = ref(false),
    addData: Record<string, unknown> = {},
    handleAdd = (): void => {
      visible.value = true;
    },
    handleAddOk = (params: unknown): void => {
      disabled.value = true;
      fn(params).then((res) => {
        if (res.flag) {
          cb && cb();
        } else {
          ElMessage.error(res.msg);
        }
        handleAddCancel();
      });
    },
    handleAddCancel = (): void => {
      visible.value = false;
      disabled.value = false;
    };
  return {
    addData,
    visible,
    disabled,
    handleAdd,
    handleAddOk,
    handleAddCancel,
  };
}
export default addHook;
