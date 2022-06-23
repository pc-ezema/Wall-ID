<template>
    <MainHeader/>

    <section class="login-area-sign">
        <div class="row m-0">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 col-md-12">
                <div class="login-content signup-content-only">
                    <div class="login-form">
                        <div class="col-lg-12 text-center">
                            <h3>Organisation Sign Up</h3>
                            <p>Fill up the form below to sign up for your Wall-ID account.</p>
                        </div>
                        <div v-if="message" id="alerttopright" class="alert-timeout alert alert-success alert-dismissible fade show" role="alert">
                            {{ message }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div v-if="notifmsg">
                            <div v-for="(errorArray, idx) in notifmsg" :key="idx">
                                <div v-for="(allErrors, idx) in errorArray" :key="idx" id="alerttopright" class="alert-timeout alert alert-danger alert-dismissible fade show" role="alert">
                                    {{ allErrors }}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                        <error v-if="error" :error="error" />

                        <form class="form-form-div" @submit.prevent="init_register()">
                            <div class="row">
                                <!-- Company Name Here -->
                                <div class="col-lg-12">
                                    <label>Company Name</label>
                                    <input type="text" required v-model="register.name" placeholder="Enter your company name">
                                </div>

                                <!-- Email Here -->
                                <div class="col-lg-12">
                                <label>Email</label>
                                <input type="email" required v-model="register.email" placeholder="Enter your email address">
                                </div>

                                <!-- Telephone Number Here -->
                                <div class="col-lg-12">
                                <label>Telephone number</label>
                                <input type="tel" required v-model="register.phone" placeholder="Enter phone number">
                                </div>

                                <!-- Password Here -->
                                <div class="col-lg-12">
                                    <label>Password</label>
                                    <input type="password" required v-model="register.password" placeholder="*********">
                                </div>

                                <!-- Confirm Password Here -->
                                <div class="col-lg-12">
                                    <label>Confirm password</label>
                                    <input type="password" required v-model="password_confirmation" placeholder="*********">
                                </div>

                                <!-- Access type -->
                                <div class="col-lg-12">
                                    <label>Access Type</label>
                                    <select required v-model="register.type">
                                        <option>Select Type</option>
                                        <option value="0"> Free Pass / Open </option>
                                        <option value="1"> Restricted / Closed </option>
                                    </select>
                                </div>

                                <!-- Accept Privacy Policy -->
                                <div class="col-lg-12 accept-terms">By clicking submit, you agree to Wall-ID <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></div>

                                <!-- Submit Button Here-->
                                <div class="col-lg-12 signup-btn-div text-center mb-3">
                                    <input v-if="$wait.is('processing')" value="Signing up..." class="submit-form text-center mb-3" >
                                    <input v-else type="submit" value="Sign Up" class="submit-form">
                                </div>
                            </div>

                            <!-- Alread Have An Account -->
                            <div class="already">Not an organisation? <router-link to="signup-individual"><a>Sign up as an individual</a></router-link></div>
                            <div class="already">Already have a wall-id account? <router-link :to="{name: 'Login'}"><a>Login</a></router-link></div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </section>

    <MainFooter/>
</template>
<script>
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'
import axios from 'axios'
import Error from './Error.vue'

export default {
    mounted() {
        window.scrollTo(0,0)
    },
    components: { MainHeader, MainFooter, Error},

    data() {
        return {
            register:{
                name: "", 
                email: "", 
                phone: "", 
                password: "",
                type: ""
            },
            password_confirmation: "",
            message: "",
            error: "",
            notifmsg: ""
        }
    },

    methods: {
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

            if (this.register.name == '' || this.register.email == ''
                || this.register.phone == '' || this.register.password == '' || this.register.type == '') {
                this.message = "";
                this.notifmsg = "";
                this.error = "Please enter all the needed fields."
                this.$wait.end("processing");
                this.$Progress.fail();
                return
            }

            if (this.password_confirmation !== this.register.password) {
                this.message = "";
                this.notifmsg = "";
                this.error = "Confirm password doesn't match with actual password."
                this.$wait.end("processing");
                this.$Progress.fail();
                return
            }

            await axios.post('auth/organization/register', {
                name: this.register.name, 
                email: this.register.email, 
                phone: this.register.phone, 
                password: this.register.password,
                type: this.register.type
            })
            .then(
                response => {
                    this.error = "";
                    this.message = response.data.message;
                    this.register = "";
                    this.password_confirmation = "";
                    this.access_type = "";
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
                        this.message = "";
                        this.error = "";
                        this.notifmsg = error.response.data.error;
                        this.$wait.end("processing");
                        this.$Progress.fail();
                    } else {
                        this.message = "";
                        this.notifmsg = "";
                        this.$wait.end("processing");
                        this.$Progress.fail();
                    }
                }
            )
        }
    },

}
</script>