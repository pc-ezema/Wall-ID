<template>
    <MainHeader/>

    <section class="login-area">
        <div class="row m-0">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <div class="login-content">
                    <div class="login-form">
                        <div class="col-lg-12 text-center">
                            <h3>Verify Your Email Address</h3>
                        </div>
                        <div v-if="message" id="alerttopright" class="alert-timeout alert alert-success alert-dismissible fade show" role="alert">
                            {{ message }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <error v-if="error" :error="error" />
                        <form class="form-form-div" @submit.prevent="resendConfirmationEmail()">
                            <!-- Email Here -->
                            <div>
                                <p>Before proceeding, please check your email <span class="spanner">{{ email }}</span> for a verification link.</p>
                                <p>If you did not receive the email in 15 minutes, please check your spam folder. Or,</p>
                            </div>

                            <!-- Submit Button Here-->
                            <div class="signup-btn-div text-center mt-4">
                                <input type="submit" value="Click Here To Request Another" class="submit-form">
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
    data() {
        return {
            email: "",
            message: "",
            error: "",
        }
    },

    mounted() {
        window.scrollTo(0, 0);
    },

    components: { MainHeader, MainFooter, Error },

    methods: {
        async resendConfirmationEmail() {
            this.$Progress.start();
            await axios.post('auth/resend/emailverification/' + this.email)
            .then(
                response => {
                    this.error = "";
                    this.message = response.data.message;
                    this.$Progress.finish();
                    return
                }
            ).catch (
                error => {
                    this.message = "";
                    this.error = error.response.data.message;
                    this.$Progress.fail();
                }
            )
        }
    },

    created() {
        this.email = this.$route.params.email;
    }
}
</script>