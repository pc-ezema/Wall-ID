<template>
    <MainHeader/>

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
                            <div v-if="message" id="alerttopright" class="alert-timeout alert alert-success alert-dismissible fade show" role="alert">
                                {{ message }}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <error v-if="error" :error="error" />
                            <form class="form-form-div"  @submit.prevent="init_login()">
                                <!-- Email Here -->
                                <div>
                                    <label>Email</label>
                                    <input type="email" v-model="login.email" required placeholder="Enter your email">
                                </div>

                                <!-- Password Here -->
                                <div>
                                    <label>Password</label>
                                    <input type="password" v-model="login.password" required placeholder="*********">
                                </div>

                                <!-- Submit Button Here-->
                                <div class="signup-btn-div text-center">
                                    <input v-if="$wait.is('processing')" value="Login..." class="submit-form text-center" >
                                    <input v-else type="submit" value="Login" class="submit-form">
                                </div>

                                <!-- Forgot Password Here -->
                                <div class="forgot-password">
                                    <p>Forgot Password? <router-link :to="{name: 'ForgotPassword'}"><a>Click Here</a></router-link></p>
                                </div>

                                <!-- Alread Have An Account -->
                                <div class="already">Don't have an account? <router-link :to="{name: 'SignupOption'}"><a>Sign Up</a></router-link></div>
                            </form>
                        </div>
                    </div>
                </div>
            <div class="col-lg-4"></div>
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
    components: { MainHeader, MainFooter, Error },

    data() {
        return {
            login:{
                email: "", 
                password: "",
            },
            error: "",
            message: "",
        }
    },

    methods: {
        async init_login() {
            this.$wait.start("processing");
            this.$Progress.start();

            if (this.login.email == ''|| this.login.password == '') {
                this.error = "Please enter all the needed fields.";
                this.isLoading = false;
                return
            }
            
            await axios.post('auth/login', this.login)
            .then(
                response => {
                    this.error = "";
                    this.message = response.data.message;
                    this.$wait.end("processing");
                    this.$Progress.finish();

                    localStorage.setItem('token', response.data.data.tokens.access_token);
                
                    this.$store.dispatch('user', response.data.data.user);

                    if(response.data.data.user.type == 'individual'){
                        // go to dashboard page
                        setTimeout(() => {
                            this.$router.push('/individual-dashboard/home');
                        }, 800);
                    } else if(response.data.data.user.type == 'organization'){
                        // go to dashboard page
                        setTimeout(() => {
                            this.$router.push('/organisation-dashboard/home');
                        }, 800);
                    }
                }
            ).catch (
                error => {
                    localStorage.removeItem('token')
                    this.message = "";
                    this.error = error.response.data.message;
                    this.$wait.end("processing");
                    this.$Progress.fail();
                }
            )
        }
    },

    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>