<template>
  <MainHeader />

  <section class="login-area">
    <div class="row m-0">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <div class="login-content">
          <div class="login-form">
            <div class="col-lg-12 text-center">
              <h3>Forgot Password</h3>
              <p>Please enter your email to reset your password</p>
            </div>
            <div
              v-if="message"
              id="alerttopright"
              class="alert-timeout alert alert-success alert-dismissible fade show"
              role="alert"
            >
              {{ message }}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <error v-if="error" :error="error" />

            <form class="form-form-div" @submit.prevent="resetPasswordEmail()">
              <!-- Email Here -->
              <div>
                <label for="full name">Email</label>
                <input
                  type="email"
                  v-model="email"
                  placeholder="Enter email"
                  required
                />
              </div>

              <!-- Submit Button Here-->
              <div class="signup-btn-div text-center">
                <input
                  v-if="$wait.is('processing')"
                  value="Sending Reset Password Code..."
                  class="submit-form text-center"
                />
                <input
                  v-else
                  type="submit"
                  value="Send email"
                  class="submit-form"
                />
              </div>

              <!-- Forgot Password Here -->
              <div class="forgot-password">
                <p>
                  Remenber Password?
                  <router-link :to="{ name: 'Login' }"
                    ><a>Login</a></router-link
                  >
                </p>
              </div>
            </form>
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
import axios from "axios";
import Error from "./Error.vue";

export default {
  components: { MainHeader, MainFooter, Error },

  data() {
    return {
      email: "",
      error: "",
      message: "",
    };
  },

  methods: {
    async resetPasswordEmail() {
      this.$wait.start("processing");
      this.$Progress.start();

      await axios
        .post("auth/password/email", {
          email: this.email,
        })
        .then((response) => {
          this.error = "";
          this.message = response.data.message;
          this.$wait.end("processing");
          this.$Progress.finish();

          //  go to reset password page
          setTimeout(() => {
            this.$router.push("/reset-password");
          }, 2000);
        })
        .catch((error) => {
          this.message = "";
          this.error = error.response.data.message;
          this.$wait.end("processing");
          this.$Progress.fail();
        });
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
