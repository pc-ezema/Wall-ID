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
            <div v-if="message" id="alerttopright" class="alert-timeout alert alert-danger alert-dismissible fade show" role="alert">
                {{ message }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <error v-if="error" :error="error" />
                            
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
                  <input type="tel" v-model="register.phone" required placeholder="Enter phone number" />
                </div>

                <!-- Address Here -->
                <!-- <div class="col-lg-12">
                  <label>Address</label>
                  <textarea
                    v-model="form.username"
                    cols="30"
                    rows="3"
                    placeholder="House addres"
                  ></textarea>
                </div> -->

                <!-- Password Here -->
                <div class="col-lg-12">
                  <label>Password</label>
                  <input type="password" v-model="register.password" required placeholder="*********" />
                </div>

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
                  <input type="submit" value="Sign Up" class="submit-form" />
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
import Error from './Error.vue'

export default {
    components: { MainHeader, MainFooter, Error},
    
    data() {
        return {
            register:{
                firstname: "", 
                lastname: "", 
                username: "", 
                email: "", 
                phone: "", 
                password: "",
            },
            password_confirmation: "",
            message: "",
            error: "",
        }
    },

    methods: {
        async init_register() {
          if (this.register.firstname == '' || this.register.lastname == '' || this.register.username == '' || this.register.email == ''
              || this.register.phone == '' || this.register.password == '') {
              this.error = "Please enter all the needed fields."
              return
          }

          if (this.password_confirmation !== this.register.password) {
              this.error = "Confirm password doesn't match with actual password."
              return
          }

          await axios.post('auth/register', this.register)
          .then(
            response => {
              this.error = "";
              this.message = response.data.message;
              this.register = ""
              this.password_confirmation = ""
            }
          ).catch (
            error => {
                this.message = "";
                this.error = error.response.data.message;
            }
          )

          // this.$router.push('/login');

        }
    },

    mounted() {
        window.scrollTo(0,0)
    },
}
</script>