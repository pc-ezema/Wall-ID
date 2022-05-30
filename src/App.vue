<template>

  <!-- Header Section -->
  <header class="header-menu-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 main-menu-container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <router-link :to="{name: 'Home'}">
              <a class="navbar-brand">
                <img style="width: 170px" src="@/assets/images/logo.png" alt="WALLID">
              </a>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
              <ul class="navbar-nav ml-auto main-menu align-items-center">

                <li class="nav-item">
                  <router-link :to="{name: 'Home'}"><a class="nav-link page-scroll">Home</a></router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'About'}">
                    <a class="nav-link page-scroll">About Us</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'Pricing'}">
                  <a class="nav-link page-scroll">Pricing</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'Faq'}">
                    <a class="nav-link page-scroll">FAQs</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'Contact'}">
                    <a class="nav-link page-scroll">Contact</a>
                  </router-link>
                </li>

              </ul>

                <ul class="nav_btn">
                  <li class="nav-item">
                    <router-link :to="{name: 'Login'}" class="nav-button-link-login"><i class="fa fa-user"></i> <span>Login</span></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{name: 'SignupOption'}" class="nav-button-link-signup"><i class="fas fa-sign-in-alt"></i> <span>Sign Up</span></router-link>
                  </li>
                </ul>
        
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Section Ends -->

  <router-view/>

  <!-- Footer Section -->
  <footer class="pb-3 pt-5">
      <!-- Widgets -->
      <div class="footer-widgets pb-4">
        <div class="container">
          <div class="row">
            <!-- Footer logo -->
            <div class="col-12 col-md-6 col-lg-3 res-margin">
              <div class="widget">
                <p class="footer-logo">
                  <img style="width: 180px" src="@/assets/images/footer_logo.png" alt="Wall-ID" />
                </p>

                <!-- Social links -->
                <div class="footer-social">
                  <a href="#" title="Twitter"><i class="fab fa-twitter fa-fw"></i></a>
                  <a href="#" title="Facebook"><i class="fab fa-facebook-f fa-fw"></i></a>
                  <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                  <a href="#" title="Pinterest"><i class="fab fa-whatsapp fa-fw"></i></a>
                </div>
              </div>
            </div>

            <!-- Useful links -->
            <div class="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
              <div class="widget">
                <h6>Useful Links</h6>

                <ul class="footer-menu fw-light">
                  <li><router-link :to="{name: 'Login'}"><a>Login</a></router-link></li>
                  <li><router-link :to="{name: 'Pricing'}"><a>Pricing</a></router-link></li>
                </ul>
              </div>
            </div>

            <!-- Product help -->
            <div class="col-lg-3 res-margin">
              <div class="widget">
                <h6>Resources</h6>

                <ul class="footer-menu fw-light">
                  <li><router-link :to="{name: 'Faq'}"><a>FAQs</a></router-link></li>
                  <li><router-link :to="{name: 'Contact'}"><a>Contact</a></router-link></li>
                </ul>
              </div>
            </div>

            <!-- Download -->
            <div class="col-lg-3">
              <div class="widget">
                <h6>Subscribe To Stay Updated.</h6>
                <form>
                <div class="row">
                  <div class="col-lg-12">
                    <input type="email" required class="input-email" placeholder="Enter your email">
                  </div>
                  <div class="col-lg-12">
                    <input type="submit" class="submit">
                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Text -->
              <p class="copyright text-center">
                Copyright © 2021 <a href="#" target="_blank">WALLID</a>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
  </footer>
  <!-- Footer Section Ends -->

</template>

<script>
import $ from 'jquery'
export default {
  mounted(){
    window.scrollTo(0,0)
    var $ = require('jquery')
    (function ($) {
        "use strict";
        const $window = $(window);
        $window.on('load', function(){
            $window.on('scroll', function(){
                // navbar fixed
                if ($(this).scrollTop() > 0) {
                    $('.header-menu-area').addClass("fixed-top");
                }else{
                    $('.header-menu-area').removeClass("fixed-top");
                }
            });
        });
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:wght@500;600;700;800;900&display=swap');
html, body{
  font-family: 'Nunito', sans-serif !important;
  overflow-x: hidden !important;
  scroll-behavior: smooth !important;
}
</style>
