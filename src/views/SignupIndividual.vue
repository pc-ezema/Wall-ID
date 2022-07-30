<template>
  <MainHeader />

  <section class="login-area-sign">
    <div class="row m-0">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div class="login-content signup-content-only">
          <div class="login-form">
            <div class="col-lg-12 text-center">
              <h3>Individual Sign Up</h3>
              <p>Fill up the form below to sign up for your Wall-ID account.</p>
            </div>                            
            <form class="form-form-div" @submit.prevent="init_register()">
              <div class="row">
                <!-- First Name Here -->
                <div class="col-lg-6">
                  <label>First Name</label>
                  <input
                    v-model="register.firstname"
                    type="text"
                    placeholder="Enter first name"
                    name="firstname"
                  />
                </div>

                <!-- Last Name Here -->
                <div class="col-lg-6">
                  <label>Last Name</label>
                  <input type="text" v-model="register.lastname" required placeholder="Enter last name" />
                </div>

                <!-- Username Here -->
                <div class="col-lg-12">
                  <label>Username</label>
                  <input
                    v-model="register.username"
                    type="text"
                    required
                    placeholder="Enter your preferred unique username"
                  />
                </div>

                <!-- Email Here -->
                <div class="col-lg-12">
                  <label>Email</label>
                  <input
                    v-model="register.email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <!-- Telephone Number Here -->
                <div class="col-lg-12">
                  <label>Telephone number</label>
                  <input type="tel" v-model="register.phone" @keyup="validatePass" required placeholder="Enter phone number" />
                </div>

                <!-- Password Here -->
                <div class="col-lg-12">
                  <label>Password</label>
                  <input type="password" v-model="register.password" @keyup="validPassword" required placeholder="*********" />
                </div>
                <span style="color: red;">{{validationError}}</span>

                <!-- Confirm Password Here -->
                <div class="col-lg-12">
                  <label>Confirm password</label>
                  <input type="password" v-model="password_confirmation" required placeholder="*********" />
                </div>

                <!-- Accept Privacy Policy -->
                <div class="col-lg-12 accept-terms">
                  By clicking submit, you agree to Wall-ID
                  <a href="#">Terms of Service</a> and
                  <a href="#">Privacy Policy.</a>
                </div>

                <!-- Submit Button Here-->
                <div class="col-lg-12 signup-btn-div text-center mb-3">
                  <input v-if="$wait.is('processing')" value="Signing up..." class="submit-form text-center mb-3" >
                  <input v-else type="submit" value="Sign Up" class="submit-form" />
                </div>
              </div>

              <!-- Alread Have An Account -->
              <div class="already">
                Not an individual?
                <router-link to="signup-organisation"
                  ><a>Sign up as an organisation</a></router-link
                >
              </div>
              <div class="already">
                Already have a wall-id account?
                <router-link :to="{ name: 'Login' }"><a>Login</a></router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-3 p-0"></div>
    </div>
  </section>

  <MainFooter />
</template>
<script>
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'
import axios from 'axios'

export default {
    components: { MainHeader, MainFooter},

    data() {
        return {
            register:{
                firstname: "", 
                lastname: "", 
                username: "", 
                email: "", 
                phone: "", 
                password: ""
            },
            password_confirmation: "",
            validationError: ''
        }
    },

    methods: {
        containsUppercase: function(password) {
            return /[A-Z]/.test(password)
        },
        containsLowercase: function(password) {
            return /[a-z]/.test(password)
        },
        containsNumber: function(password) {
            return /[0-9]/.test(password)
        },
        containsSpecial: function(password) {
            return /[#?!@$%^&*-]/.test(password)
        },

        validPassword(){
            if (!this.containsUppercase(this.register.password)) {
                this.validationError = "Password should contain atleast one upper letter."
                return false
            }
            else if (!this.containsLowercase(this.register.password)) {
                this.validationError = "Password should contain atleast one lowercase letter.";
                return false
            }
            else if (!this.containsNumber(this.register.password)) {
                this.validationError = "Password should contain atleast one number."
                return false
            }
            else if (!this.containsSpecial(this.register.password)) {
                this.validationError = "Password should contain atleast one special character."
                return false
            }
            else{
                this.validationError = ''
                return true
            }

        },
        makeid(length) {
          let result = '';
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          const charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
          }
          return result;
        },

        async init_register() {
          this.$wait.start("processing");
          this.$Progress.start();

          if (this.register.firstname == '' || this.register.lastname == '' || this.register.username == '' || this.register.email == ''
              || this.register.phone == '' || this.register.password == '' || this.validPassword() == false) {
              this.$notify({
                  type: "error",
                  title: "Please enter all the needed fields.",
                  duration: 5000,
                  speed: 1000,
              });
              this.$wait.end("processing");
              this.$Progress.fail();
              return
          }

          else if (this.password_confirmation !== this.register.password) {
              this.$notify({
                  type: "error",
                  title: "Confirm password doesn't match with actual password.",
                  duration: 5000,
                  speed: 1000,
              });
              this.$wait.end("processing");
              this.$Progress.fail();
              return
          }

          else{
            await axios.post('auth/register', {
              firstname: this.register.firstname, 
              lastname: this.register.lastname, 
              username: this.register.username,
              email: this.register.email, 
              phone: this.register.phone, 
              password: this.register.password
            })
            .then(
              response => {
                this.$notify({
                    type: "success",
                    title: response.data.message,
                    duration: 5000,
                    speed: 1000,
                });
                this.$wait.end("processing");
                this.$Progress.finish();

                // go to verification page
                setTimeout(() => {
                  this.$router.push('/email_verification/' + this.makeid(200) + "/" + this.register.email)
                }, 1500);
              }
            ).catch (
              error => {
                if (error.response.status == 422) {
                  for (let i in error.response.data.error) {
                      this.$notify({
                          type: "error",
                          title: error.response.data.error[i][0],
                          duration: 5000,
                          speed: 1000,
                      });
                  } 
                  this.$wait.end("processing");
                  this.$Progress.fail();
                } else {
                  this.$notify({
                      type: "error",
                      title: error.response.data.message,
                      duration: 5000,
                      speed: 1000,
                  });
                  this.$wait.end("processing");
                  this.$Progress.fail();
                }
              }
            )
          }
        }
    },

    mounted() {
        window.scrollTo(0,0)
    },
}
</script>