<template>
  <notifications position="top right" />
  <router-view />
  <vue-progress-bar />
</template>

<script>
import axios from "axios";
import { getCurrentInstance } from "vue";

export default {
  name: "App",

  setup() {
    const internalInstance = getCurrentInstance();
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    internalInstance.appContext.config.globalProperties.$Progress.start();
    setTimeout(() => {
      internalInstance.appContext.config.globalProperties.$Progress.finish();
    }, 3500);
  },

};
</script>
