<template>
    <MainHeader/>

    <section class="login-area">
        <div class="row m-0">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <div class="login-content">
                    <div class="login-form">
                        <div class="col-lg-12 text-center">
                            <h3>Reset Password</h3>
                            <p>Please enter the code sent to your email to reset your password</p>
                        </div>
                        <div v-if="message" id="alerttopright" class="alert-timeout alert alert-success alert-dismissible fade show" role="alert">
                            {{ message }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <error v-if="error" :error="error" />

                        <form class="form-form-div"  @submit.prevent="resetPassword()">
                            <!-- Email Here -->
                            <div>
                                <label for="code">Code</label>
                                <input type="text" v-model="code" placeholder="Enter Code" required>
                            </div>

                            <div>
                                <label for="password">Password</label>
                                <input type="password" v-model="password" placeholder="Enter Password" required>
                            </div>

                            <div>
                                <label for="re-password">Re-Enter Password</label>
                                <input type="password" v-model="password_confirmation" placeholder="Enter Password Confirmation" required>
                            </div>

                            <!-- Submit Button Here-->
                            <div class="signup-btn-div text-center">
                                <input v-if="$wait.is('processing')" value="Resetting Password..." class="submit-form text-center" >
                                <input v-else type="submit" value="Reset Password" class="submit-form">
                            </div>
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
            code: "",
            password: "",
            password_confirmation: "",
            error: "",
            message: ""
        }
    },

    methods: {
        async resetPassword() {
            this.$wait.start("processing");
            this.$Progress.start();

            if (this.password_confirmation !== this.password) {
                this.message = "";
                this.error = "Confirm password doesn't match with actual password."
                this.$wait.end("processing");
                this.$Progress.fail();
                return
            }

            await axios.post('auth/password/reset', { 
                code: this.code,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
            .then(
                response => {
                    this.error = "";
                    this.message = response.data.message;
                    this.$wait.end("processing");
                    this.$Progress.finish();

                    //  go to login page
                    setTimeout(() => {
                        this.$router.push('/login');
                    }, 2000);
                }
            ).catch (
                error => {
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
    },
    
}
</script>