<template>
  <router-view />
</template>

<script>
import axios from 'axios'

export default {
  async created() {
      const response = await axios.get('user');

      this.$store.dispatch('user',  response.data.data.user);

  },

}
</script>
