<template>
  <MainHeader/>

    <!-- Breadcrumb -->
    <div class="inner-page-header section-padding style-dark mb-5">
      <div class="container">
        <div class="page-title-inner text-center clearfix">
          <div class="heading-wrapper">
            <h1 class="text-white">Contact Us</h1>
          </div>
          <!-- End Heading -->
          <ul class="st-breadcrumb mt-5">
            <li><router-link :to="{name: 'Home'}"><a>Home</a></router-link></li>
            <li class="active"><span>Contact Us</span></li>
          </ul>
          <!-- End Breadcrumb -->
        </div>
        <!-- Page Title Inner -->
      </div>
    </div>
    <!-- Breadcrumb -->

    <!-- Contact Content -->
    <section id="contact-us" class="contact-us section my-5">
      <div class="container">
        <div class="contact-head">
          <div class="inner-content">
            <div class="row align-items-center">

                <div class="col-lg-4 col-12">
                    <div class="contact-info">
                    <div class="single-head">
                    <h3 class="inner-title">Contact Info</h3>
                    <div class="single-info">
                    <i class="fas fa-map-marked-alt"></i>
                    <ul>
                    <span class="fw-bold">Location</span>
                    <li>76/A, Lorem ipsum dolor sit amet. <br> Lorem, ipsum.</li>
                    </ul>
                    </div>
                    <div class="single-info">
                    <i class="fas fa-phone"></i>
                    <ul>
                    <span class="fw-bold">Call Us</span>
                    <li><a href="tel:+">+1 234 5678 908</a></li>
                    <li><a href="tel:+">+1 234 5678 908</a></li>
                    </ul>
                    </div>
                    <div class="single-info">
                    <i class="fas fa-envelope"></i>
                    <ul>
                    <span class="fw-bold">Mail Us</span>
                    <li><a href="mailto:"><span class="__cf_email__">example@gmail.com</span></a></li>
                    </ul>
                    </div>

                    </div>
                    </div>
                    </div>

              <div class="col-lg-8 col-12">
                <div class="form-main">
                  <h3 class="inner-title left">Contact Form</h3>
                  <form class="form" method="post">
                    <div class="row">
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Your Subject"
                            required="required"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            required="required"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <input
                            name="phone"
                            type="text"
                            placeholder="Your Phone"
                            required="required"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group message">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group button">
                          <button type="submit" class="btn theme-btn pl-3">
                            Submit Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Content Ends -->

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