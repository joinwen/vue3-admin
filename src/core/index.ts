import { createApp } from "vue";
import App from "../App.vue";
import router from "../router";
import store from "../store";
debugger;
console.log(store);
const app = createApp(App).use(store).use(router);
export default app;
