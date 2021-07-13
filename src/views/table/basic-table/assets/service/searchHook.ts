import API from "../api/index";
import { ElMessage } from "element-plus";
import { ref } from "vue";
function searchHook(): Record<string, unknown> {
  const data = ref<Array<Record<string, unknown>>>([]),
    page = ref<number>(1),
    pageSize = ref<number>(10),
    loading = ref<boolean>(false),
    total = ref<number>(0);
  const handleSearch = (params: Record<string, unknown>): void => {
    loading.value = true;
    API.getDataApi(params).then((res) => {
      loading.value = false;
      if (res.success) {
        data.value = res.data;
        total.value = res.total;
      } else {
        ElMessage.error(res.msg);
      }
    });
  };
  const handlePageChange = (value: number) => {
    page.value = value;
  };
  const handlePageSizeChange = (size: number) => {
    pageSize.value = size;
  };
  return {
    data,
    page,
    total,
    loading,
    handleSearch,
    handlePageChange,
    handlePageSizeChange,
  };
}
export default searchHook;
