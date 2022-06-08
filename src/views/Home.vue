<template>
  <MainHeader/>
  
  <img class="blob_img" src="@/assets/images/blob.svg" alt="">
  <!-- Welcome Screen -->
  <section class="hero-area hero-bg d-flex align-items-center dot-bg mb-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="hero-content">
              <h1>Tech Driven <span>Identity Management</span> Solution</h1>
              <p class="section__desc pt-3">
                Wall-ID helps individuals, groups and organisations easily manage membership and facilitate access control via a simple mobile application.
              </p>
              <div class="btn-div">
                <router-link to="/signup-option" class="routerLink"><a>Sign Up For Free! <i class="fas fa-sign-in-alt"></i></a></router-link>
              </div>
            <div class="section-btn-box hero-btn-box pt-2">
              <a class="download-btn" href="#"><img src="@/assets/images/btn-app-store.svg" alt="App Store"></a>
              <a class="download-btn" href="#"><img src="@/assets/images/btn-google-playstore.svg" alt="App Store"></a>
            </div>
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-5 phone-design">
          <img class="phone-img" src="@/assets/images/welcome-phone.png" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500">
          <div class="phone-box">
            <img src="@/assets/images/welcome-icon1.png" alt="icon">
            Electronic Wall ID
          </div>
          <div class="phone-box2">
            <img src="@/assets/images/welcome-icon2.png" alt="icon">
            Ticket Management
          </div>
          <div class="clear"></div>
          <div class="phone-box3">
            <img src="@/assets/images/welcome-icon3.png" alt="icon">
            Access Control
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Welcome Screen Ends -->

  <!-- Our Use Case -->
  <section class="use-case">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="row">
            <div class="col-md-12">
              <div class="heading">
                <h1>Some Use Cases</h1>
                <div class="line-hr"></div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta optio tempore totam, ea libero itaque obcaecati non voluptas. Fuga magnam debitis veritatis accusamus ipsa enim odio, impedit adipisci sequi laudantium.</p>
                <div class="dropdown">
                  <a class="btn-download-mobile-app dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Mobile App <i class="fas fa-download"></i>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#"><img src="@/assets/images/btn-app-store.svg" alt="App Store"></a></li>
                    <li><a class="dropdown-item" href="#"><img src="@/assets/images/btn-google-playstore.svg" alt="Google Playstore"></a></li>
                    <li><a class="dropdown-item" href="#"><img src="@/assets/images/btn-direct-download.png" alt="Direct Download"></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="heading-below">
                <img src="@/assets/images/use-case-img.png" alt="image">
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row">
            <div class="col-md-12">
              <div class="box box1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                <img src="@/assets/images/use-case-icon1.png" alt="icon">
                <h4>Electronic ID Wallet</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consectetur eum officiis, nihil voluptatem quam nisi.</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="box box2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                <img src="@/assets/images/use-case-icon2.png" alt="icon">
                <h4>Access Control</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consectetur eum officiis, nihil voluptatem quam nisi.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row">
            <div class="col-md-12">
              <div class="box box3" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
                <img src="@/assets/images/use-case-icon3.png" alt="icon">
                <h4>Ticket Management</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consectetur eum officiis, nihil voluptatem quam nisi.</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="box box4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="2000">
                <img src="@/assets/images/use-case-icon4.png" alt="icon">
                <h4>Membership & Subscription</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consectetur eum officiis, nihil voluptatem quam nisi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Our Use Case Ends -->

  <!-- Feature Content -->
  <section class="feature-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-6">
              <div class="feat-box feat-box1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
                <img src="@/assets/images/icon-feat1.png" alt="icon">
                <h5>User Friendly</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolores modi facere.</p>
                <a href="#">Learn More</a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="feat-box feat-box2" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                <img src="@/assets/images/icon-feat2.png" alt="icon">
                <h5>Secure Electronic ID's</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolores modi facere.</p>
                <a href="#">Learn More</a>
              </div>
              <div class="feat-box" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1200">
                <img src="@/assets/images/icon-feat3.png" alt="icon">
                <h5>24/7 Support</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolores modi facere.</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
          <img class="phone-img" src="@/assets/images/feat-phone.webp" alt="mobile phone" data-aos="zoom" data-aos-duration="1000">
        </div>
      </div>
    </div>
  </section>
  <!-- Feature Content Ends -->

  <!-- For Individual And Organisation -->
  <section class="for-indi-org">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <span class="stroke-text">WALL-ID</span>
          <h2 class="text-lg mb-3 mt-3 fw-bold" style="color: #000; font-weight: 700">Manage Your ID's</h2>
          <p class="text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima saepe atque sint, beatae tempora perspiciatis aperiam ea iure nostrum tempore illum, maxime et esse molestias labore aut recusandae eum!</p>
          <div class="category">
            <h2><i style="color: #000" class="fas fa-check-circle"></i> For Individual</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perspiciatis! Dolorum optio in tempora illum saepe minus iure eum consectetur facilis temporibus voluptatum nihil ipsam impedit, ratione molestias dolore maiores sit, veniam odio animi voluptate.</p>
            <h2><i style="color: #000" class="fas fa-check-circle"></i> For Organisation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda ratione debitis exercitationem animi distinctio tenetur delectus expedita illo accusantium deleniti voluptates eos enim non ipsum pariatur hic.</p>
          </div>
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-4">
          <div class="about-img position-relative">
            <img class="phone-img" src="@/assets/images/individual-organisation.png" data-aos="fade-up" data-aos-duration="2000">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- For Individual And Organisation Ends -->

  <!-- Faq Content -->
  <section class="faq-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <span class="stroke-text" style="font-size: 35px; -webkit-text-stroke-width: 1px;">FAQs</span>
          <h1>Frequently Asked Questions</h1>
          <div class="line-hr"></div>
        </div>
        <div class="col-lg-8 offset-lg-2">
          <div class="accordion" id="accordionExample">
            <!-- Faq 1 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <span>Material types can you work with?</span><i style="float: right !important;" class="fas fa-chevron-down"></i>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.</p>
                </div>
              </div>
            </div>
            <!-- Faq 2 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <span>Is Smart Lock required for instant apps?</span><i style="float: right !important;" class="fas fa-chevron-down"></i>
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.</p>
                </div>
              </div>
            </div>
            <!-- Faq 3 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <span>Can I have multiple activities in a single feature?</span><i style="float: right !important;" class="fas fa-chevron-down"></i>
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.</p>
                </div>
              </div>
            </div>
            <!-- Faq 4 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <span>Can I share resources between features?</span><i style="float: right !important;" class="fas fa-chevron-down"></i>
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 text-center faq-button">
          <router-link :to="{name: 'Faq'}"><button>View More <i class="fas fa-angle-double-right"></i></button></router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- Faq Content Ends -->
  
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
