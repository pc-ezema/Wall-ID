<template>
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
                                <form class="form-form-div">
                                    <!-- Full Name Here -->
                                    <div>
                                        <label for="full name">Full name</label>
                                        <input type="text" required placeholder="Enter your full name">
                                    </div>

                                    <!-- Email Here -->
                                    <div>
                                    <label for="email">Email</label>
                                    <input type="email" required placeholder="myemail@email.com">
                                    </div>

                                    <!-- Telephone Number Here -->
                                    <div>
                                    <label for="phone">Telephone number</label>
                                    <input type="tel" required placeholder="Enter your phone number">
                                    </div>

                                    <!-- Home Address Here -->
                                    <div>
                                        <label for="address">House address</label>
                                        <textarea cols="30" rows="3" required placeholder="House addres"></textarea>
                                    </div>

                                    <!-- Password Here -->
                                    <div>
                                        <label for="password">Password</label>
                                        <input type="password" required placeholder="*********">
                                    </div>

                                    <!-- Retype Password Here -->
                                    <div>
                                        <label for="retype password">Retype password</label>
                                        <input type="password" required placeholder="*********">
                                    </div>

                                    <!-- Accept Privacy Policy -->
                                    <div class="accept-terms">By clicking submit, you agree to Wall-ID <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></div>

                                    <!-- Submit Button Here-->
                                    <div class="signup-btn-div text-center">
                                        <input type="submit" value="Sign Up" class="submit-form">
                                    </div>

                                    <!-- Alread Have An Account -->
                                    <div class="already">Already have a wall-id account? <router-link :to="{name: 'Login'}"><a>Login</a></router-link></div>
                                </form>
                            </div>
                </div>
            </div>
            <div class="col-lg-3 p-0"></div>
        </div>
    </section>
</template>
<script>
export default {
    mounted(){
        window.scrollTo(0,0)
    }
}
</script>