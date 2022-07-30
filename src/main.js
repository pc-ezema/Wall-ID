import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex";
import "./axios";
import "@/assets/css/style.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/js/bootstrap.min.js";
import "@/assets/themify-icons/themify-icons.css";
import "@/assets/css/metisMenu.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";
import Notifications from "@kyvg/vue3-notification";
import wait from "@meforma/vue-wait-for";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import useVuelidate from "@vuelidate/core";

const options = {
  color: "#228B22",
  failedColor: "#874b4b",
  thickness: "6px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

createApp(App)
  .use(router)
  .use(store)
  .use(Notifications)
  .use(wait)
  .use(VueProgressBar, options, useVuelidate)
  .use(AOS.init())
  .mount("#app");
