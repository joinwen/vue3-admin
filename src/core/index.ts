import { createApp } from "vue";
import App from "../App.vue";
import router from "../router";
import store from "../store";
export default createApp(App).use(store).use(router);
