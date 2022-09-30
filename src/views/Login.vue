<template>
  <!-- <MainHeader /> -->

  <section class="login-area">
    <div class="row m-0">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <div class="login-content">
          <div class="login-form">
            <div class="col-lg-12 text-center">
              <h3>Login</h3>
              <p>Enter your Wall-ID details to continue.</p>
            </div>
            <form class="form-form-div" @submit.prevent="init_login()">
              <!-- Email Here -->
              <div>
                <label>Email</label>
                <input
                  type="email"
                  v-model="login.email"
                  placeholder="Enter your email"
                />
              </div>

              <!-- Password Here -->
              <div>
                <label style="display: inline-block;">Password</label>
                <span class="icon" style="cursor: pointer" @click="switchVisibility()">
                  <!-- <i :class="passwordFieldIcon"></i> -->
                  {{ passwordFieldIcon }}
                </span>
                <input
                  :type="passwordFieldType"
                  @keyup="validPassword"
                  v-model="login.password"
                  placeholder="*********"
                />
              </div>
              <span style="color: red">{{ validationError }}</span>

              <!-- Submit Button Here-->
              <div class="signup-btn-div text-center">
                <input
                  v-if="$wait.is('processing')"
                  value="Login..."
                  class="submit-form text-center"
                />
                <input v-else type="submit" value="Login" class="submit-form" />
              </div>

              <!-- Forgot Password Here -->
              <div class="forgot-password">
                <p>
                  Forgot Password?
                  <router-link :to="{ name: 'ForgotPassword' }"
                    ><a>Click Here</a></router-link
                  >
                </p>
              </div>

              <!-- Alread Have An Account -->
              <div class="already">
                Don't have an account?
                <router-link :to="{ name: 'SignupOption' }"
                  ><a>Sign Up</a></router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </section>

  <!-- <MainFooter /> -->
</template>
<script>
import MainHeader from "./MainHeader.vue";
import MainFooter from "./MainFooter.vue";
import axios from "axios";

export default {
  components: { MainHeader, MainFooter },

  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      validationError: "",
      passwordFieldType: "password",
      passwordFieldIcon: "Show"
    };
  },

  methods: {
    containsUppercase: function (password) {
      return /[A-Z]/.test(password);
    },
    containsLowercase: function (password) {
      return /[a-z]/.test(password);
    },
    containsNumber: function (password) {
      return /[0-9]/.test(password);
    },
    containsSpecial: function (password) {
      return /[#?!@$%^&*-]/.test(password);
    },

    validPassword() {
      if (!this.containsUppercase(this.login.password)) {
        this.validationError =
          "Password should contain atleast one upper letter.";
        return false;
      } else if (!this.containsLowercase(this.login.password)) {
        this.validationError =
          "Password should contain atleast one lowercase letter.";
        return false;
      } else if (!this.containsNumber(this.login.password)) {
        this.validationError = "Password should contain atleast one number.";
        return false;
      } else if (!this.containsSpecial(this.login.password)) {
        this.validationError =
          "Password should contain atleast one special character.";
        return false;
      } else {
        this.validationError = "";
        return true;
      }
    },

    async init_login() {
      this.$Progress.start();

      if (
        this.login.email == "" ||
        this.login.password == "" ||
        this.validPassword() == false
      ) {
        this.$notify({
          type: "error",
          title: "Please enter all the needed fields.",
          duration: 5000,
          speed: 1000,
        });
        this.$Progress.finish();
        return;
      } else {
        this.$wait.start("processing");

        await axios
          .post("auth/login", {
            email: this.login.email,
            password: this.login.password,
          })
          .then((response) => {
            this.validationError = "";
            this.$notify({
              type: "success",
              title: response.data.message,
              duration: 5000,
              speed: 1000,
            });
            this.$wait.end("processing");
            this.$Progress.finish();

            localStorage.setItem(
              "token",
              response.data.data.tokens.access_token,
            );

            localStorage.setItem(
              "user",
              JSON.stringify(response.data.data.user),
            );

            if (response.data.data.user.type == "individual") {
              // go to dashboard page
              setTimeout(() => {
                this.$router.push("/individual-dashboard/home");
              }, 800);
            } else if (response.data.data.user.type == "organization") {
              // go to dashboard page
              setTimeout(() => {
                this.$router.push("/organisation-dashboard/home");
              }, 800);
            } else {
              setTimeout(() => {
                this.$router.push("/superadmin-dashboard/home");
              }, 800);
            }
          })
          .catch((error) => {
            localStorage.removeItem("token");
            this.$wait.end("processing");
            this.$Progress.fail();
            this.$notify({
              type: "error",
              title: error.response.data.message,
              duration: 5000,
              speed: 1000,
            });
          });
      }
    },

    switchVisibility()
    {
      if(this.passwordFieldType === 'password') {
        this.passwordFieldType = "text";
        this.passwordFieldIcon = "Hide";
      } else {
        this.passwordFieldType = "password";
        this.passwordFieldIcon = "Show";
      }
    }
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scooped>
  .icon {
    position: relative;
    float: right;
    top: 45px;
    right: 6px;
  }  
</style>