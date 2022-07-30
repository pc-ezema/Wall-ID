<template>
  <MainHeader />

  <section class="login-area">
    <div class="row m-0">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <div class="login-content">
          <div class="login-form">
            <div class="col-lg-12 text-center">
              <h3>Account Successfully Verified</h3>
              <p>
                Welcome, you made the right decision to join us and we’re
                excited about giving you exceptional services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </section>

  <MainFooter />
</template>
<script>
import MainHeader from "./MainHeader.vue";
import MainFooter from "./MainFooter.vue";

export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/login");
    }, 2500);
    window.scrollTo(0, 0);
  },

  components: { MainHeader, MainFooter, Error },
};
</script>
