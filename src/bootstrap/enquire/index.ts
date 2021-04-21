import enquireUtil from "@/tools/enquire";
import store from "../../store";
const callback = (size: string) => {
  store.commit("SET_SIZE", size);
};
enquireUtil(callback);
