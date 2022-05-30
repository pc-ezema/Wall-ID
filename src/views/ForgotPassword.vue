<template>
    <section class="login-area">
        <div class="row m-0">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <div class="login-content">
                    <div class="login-form">
                        <div class="col-lg-12 text-center">
                            <h3>Forgot Password?</h3>
                            <p>Enter your registered email below.</p>
                        </div>
                        <form class="form-form-div">
                            <!-- Email Here -->
                            <div>
                                <label for="full name">Email</label>
                                <input type="email" placeholder="Type email" required>
                            </div>

                            <!-- Submit Button Here-->
                            <div class="signup-btn-div text-center">
                                <input type="submit" value="Submit" class="submit-form">
                            </div>

                            <!-- Forgot Password Here -->
                            <div class="forgot-password">
                                <p>Remenber Password? <router-link :to="{name: 'Login'}"><a>Login</a></router-link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-4"></div>
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