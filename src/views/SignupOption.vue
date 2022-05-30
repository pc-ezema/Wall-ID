<template>
    <div class="signup-portal-div">
        <div class="col-md-12 text-center">
            <h3>How are you signing up?</h3>
        </div> 
        <div class="container">
          <div class="row">
                <div class="hover-div g-0">
                    <a href="/signup-individual">
                        <div class="row">
                            <div class="col-sm-5">
                                <img src="@/assets/images/signup-pic.jpg" width="100%" alt="">
                            </div>
                            <div class="col-sm-7 text-sec">
                                <h4>Wall ID For Individual</h4>
                                <p>Open your Wall-ID account today and access your electronic cards anywhere in the world.</p>
                                <p style="float: right; margin-top: -10px;">
                                    <i class="fas fa-arrow-right"></i>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row py-5">
                <div class="hover-div g-0">
                    <a href="/signup-non-individual">
                        <div class="row">
                            <div class="col-sm-5">
                                <img src="@/assets/images/signup-pic2.jpg" width="100%" alt="">
                            </div>
                            <div class="col-sm-7 text-sec">
                                <h4>Wall ID For Non-Individual</h4>
                                <p>Open your Wall-ID account today and access your electronic cards anywhere in the world.</p>
                                <p style="float: right; margin-top: -10px;">
                                    <i class="fas fa-arrow-right"></i>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class=" already text-center">
            <p>Already have a wall-id account? <router-link :to="{name: 'Login'}"><a>Login</a></router-link></p>
        </div> 
    </div>
</template>
<script>
export default {
    mounted(){
        window.scrollTo(0,0)
    }
}
</script>