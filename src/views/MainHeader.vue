<template>
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
</template>

<script>
import $ from 'jquery'
export default {
    mounted() {
        window.scrollTo(0, 0)
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