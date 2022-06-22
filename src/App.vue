<template>
  <notifications position="top right" />
  <router-view />
  <vue-progress-bar />
</template>

<script>
import axios from 'axios';
import { getCurrentInstance } from "vue";

export default {
  setup() {
    const internalInstance = getCurrentInstance();
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    internalInstance.appContext.config.globalProperties.$Progress.start();
    setTimeout(() => {
      internalInstance.appContext.config.globalProperties.$Progress.finish();
    }, 3500);
  },

  async created() {
      const response = await axios.get('user');
      this.$store.dispatch('user',  response.data.data.user);
  },
}
</script>
