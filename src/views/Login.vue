<template>
    <MainHeader/>

    <section class="login-area">
        <div class="row m-0">
            <div class="col-lg-4"></div>
                <div class="col-lg-4">
                    <div class="login-content">
                        <div class="login-form">
                            <div class="col-lg-12 text-center">
                                <h3>Welcome Back!</h3>
                                <p>Login to your Wall-ID account to continue.</p>
                            </div>
                            <form class="form-form-div">
                                <!-- Wall-ID Number or Email Here -->
                                <div>
                                    <label for="full name">Wall-ID No or Email</label>
                                    <input type="text" required placeholder="Enter your wall-id number or email">
                                </div>

                                <!-- Password Here -->
                                <div>
                                    <label for="password">Password</label>
                                    <input type="password" required placeholder="*********">
                                </div>

                                <!-- Submit Button Here-->
                                <div class="signup-btn-div text-center">
                                    <input type="submit" value="Login" class="submit-form">
                                </div>

                                <!-- Forgot Password Here -->
                                <div class="forgot-password">
                                    <p>Forgot Password? <router-link :to="{name: 'ForgotPassword'}"><a>Click Here</a></router-link></p>
                                </div>

                                <!-- Alread Have An Account -->
                                <div class="already">Don't have a wall-id account? <router-link :to="{name: 'SignupOption'}"><a>Sign Up</a></router-link></div>
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
export default {
    mounted() {
        window.scrollTo(0, 0);
    },
    components: { MainHeader, MainFooter }
}
</script>