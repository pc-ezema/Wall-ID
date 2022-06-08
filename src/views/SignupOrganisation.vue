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
                        <form class="form-form-div">
                            <div class="row">
                                <!-- Company Name Here -->
                                <div class="col-lg-12">
                                    <label>Company Name</label>
                                    <input type="text" required placeholder="Enter your company name">
                                </div>

                                <!-- Email Here -->
                                <div class="col-lg-12">
                                <label>Email</label>
                                <input type="email" required placeholder="Enter your email address">
                                </div>

                                <!-- Telephone Number Here -->
                                <div class="col-lg-12">
                                <label>Telephone number</label>
                                <input type="tel" required placeholder="Enter phone number">
                                </div>

                                <!-- Address Here -->
                                <div class="col-lg-12">
                                    <label>Address</label>
                                    <textarea cols="30" rows="3" required placeholder="House addres"></textarea>
                                </div>

                                <!-- Password Here -->
                                <div class="col-lg-12">
                                    <label>Password</label>
                                    <input type="password" required placeholder="*********">
                                </div>

                                <!-- Confirm Password Here -->
                                <div class="col-lg-12">
                                    <label>Confirm password</label>
                                    <input type="password" required placeholder="*********">
                                </div>

                                <!-- Access type -->
                                <div class="col-lg-12">
                                    <label>Access Type</label>
                                    <select>
                                        <option>Select Type</option>
                                        <option>Free Pass</option>
                                        <option>Restricted</option>
                                    </select>
                                </div>

                                <!-- Accept Privacy Policy -->
                                <div class="col-lg-12 accept-terms">By clicking submit, you agree to Wall-ID <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></div>

                                <!-- Submit Button Here-->
                                <div class="col-lg-12 signup-btn-div text-center mb-3">
                                    <input type="submit" value="Sign Up" class="submit-form">
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
export default {
    mounted() {
        window.scrollTo(0,0)
    },
    components: { MainHeader, MainFooter }
}
</script>