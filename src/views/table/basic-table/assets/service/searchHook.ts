import { ElMessage } from "element-plus";
import { ref, Ref } from "vue";
import BaseConditionForm from "@/components/form/BaseConditionForm.vue";
function searchHook(
  fn: (params: Record<string, unknown>) => Promise<any>
): Record<string, Ref<string | number> | any> {
  const data = ref<Array<Record<string, unknown>>>([]),
    page = ref<number>(1),
    pageSize = ref<number>(10),
    loading = ref<boolean>(false),
    total = ref<number>(0),
    conditionRef = ref<InstanceType<typeof BaseConditionForm>>();
  const handleSearch = (): void => {
    loading.value = true;
    const params: Record<string, unknown> | undefined =
      conditionRef.value?.form;
    fn({
      ...params,
      page: page.value,
      pageSize: pageSize.value,
    }).then((res) => {
      loading.value = false;
      if (res.flag) {
        data.value = res.content;
        total.value = res.total;
      } else {
        ElMessage.error(res.msg);
      }
    });
  };
  const handlePageChange = (value: number) => {
    page.value = value;
    handleSearch();
  };
  const handlePageSizeChange = (size: number) => {
    pageSize.value = size;
    handleSearch();
  };
  return {
    data,
    page,
    total,
    loading,
    conditionRef,
    handleSearch,
    handlePageChange,
    handlePageSizeChange,
  };
}
export default searchHook;
