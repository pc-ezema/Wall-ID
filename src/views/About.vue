<template>
  <MainHeader/>

  <!-- Breadcrumb -->
  <div class="inner-page-header section-padding style-dark mb-5">
    <div class="container">
      <div class="page-title-inner text-center clearfix">
        <div class="heading-wrapper">
          <h1 class="text-white">About Us</h1>
        </div>
        <ul class="st-breadcrumb mt-5">
          <li><router-link :to="{name: 'Home'}"><a>Home</a></router-link></li>
          <li class="active"><span>About </span></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Breadcrumb Ends -->

  <!-- About Content -->
  <section class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 order-2 order-lg-1">
                <h5 class="section-title-sm">Know About</h5>
                <h2 class="section-title section-title-border-half">Our Philosophy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor didunt laboris nisi ut aliquip
                    ex commodo consequat. duis aute irure dolor in reprehenderivoluptate velit esse cillum dolore fugiat
                    nulla pariatur.Excepteur sint ocaecat cupidatat noproident sunt culpa qui officia deserunt mollit anim
                    id est laborum.</p>
                <p>Sed perspiciatis unde omnisiste natus error sit voluptatem accusantium.doloremque ladantium totam rem aperieaque
                    ipsa quae ab illo inventore.veritatis. et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div class="col-lg-5 align-self-center order-1 order-lg-2 mb-md-50">
                <img class="img-fluid w-100" src="@/assets/images/welcome-phone.webp" alt="about img">
            </div>
        </div>
    </div>
  </section>
  <!-- About Content Ends -->

  <!-- Download Mobile App -->
  <section class="download-mobile">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <h1>Your ID's @ Your <span>Fingertips</span></h1>
          <h5>Download The App!</h5>
          <div class="download-div">
            <a class="download-btn" href="#"><img src="@/assets/images/btn-app-store.svg" alt="App Store"></a>
            <a class="download-btn" href="#"><img src="@/assets/images/btn-google-playstore.svg" alt="App Store"></a>
          </div>
        </div>
        <div class="col-lg-5">
          <img class="phone-img" src="@/assets/images/subscribe-img.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <!-- Download Mobile App Ends -->

  <MainFooter/>
</template>
<script>
import MainHeader from './MainHeader.vue'
import MainFooter from './MainFooter.vue'
export default {
    mounted(){
        window.scrollTo(0,0)
    },
    components:{ MainHeader, MainFooter, }
}
</script>
