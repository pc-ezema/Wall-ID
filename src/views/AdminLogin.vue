<template>
  <div class="container-fluid g-0 templateLogin">
    <div class="row justify-content-center p-5">
      <div class="col-xl-5">
        <div class="login-content text-center">
          <img
            src="@/assets/images/logo.png"
            width="170px"
            alt="Wall-ID Logo"
          />
          <p class="form-title">Login to have access to your dashboard</p>
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
          <form class="form-form-div" @submit.prevent="init_login()">
            <!-- Wall ID Number or Email Here -->
            <div>
              <label for="email">Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                v-model="login.email"
              />
            </div>

            <!-- Password Here -->
            <div>
              <label for="password">Password</label>
              <input
                type="password"
                required
                placeholder="*************"
                v-model="login.password"
              />
            </div>

            <!-- Login Button Here -->
            <div>
              <input
                v-if="$wait.is('processing')"
                value="Login..."
                class="submit-form text-center"
              />
              <input v-else type="submit" value="Login" class="submit-form" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="@/assets/css/styleAdminLogin.css"></style>

<script>
import MainHeader from "./MainHeader.vue";
import MainFooter from "./MainFooter.vue";
import axios from "axios";
import Error from "./Error.vue";

export default {
  components: { MainHeader, MainFooter, Error },

  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      error: "",
      message: "",
    };
  },

  methods: {
    async init_login() {
      this.$wait.start("processing");
      this.$Progress.start();

      if (this.login.email == "" || this.login.password == "") {
        this.error = "Please enter all the needed fields.";
        this.isLoading = false;
        return;
      }

      await axios
        .post("auth/admin/login_admin", {
          email: this.login.email,
          password: this.login.password,
        })
        .then((response) => {
          this.error = "";
          this.message = response.data.message;
          this.$wait.end("processing");
          this.$Progress.finish();

          localStorage.setItem("token", response.data.data.tokens.access_token);

          localStorage.setItem(
            "user",
            JSON.stringify(response.data.data.user),
          );

          setTimeout(() => {
            this.$router.push("/superadmin-dashboard/home");
          }, 800);
        })
        .catch((error) => {
          localStorage.removeItem("token");
          this.message = "";
          this.error = error.response.data.message;
          this.$wait.end("processing");
          this.$Progress.fail();
        });
    },
  },
};
</script>
