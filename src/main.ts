import { createApp } from "vue";
import routes from "./router";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/tailwind.css";
import "./assets/color.css";



createApp(App).use(routes).mount("#app");
