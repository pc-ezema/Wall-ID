<template>
    <!-- Breadcrumb -->
    <div class="inner-page-header section-padding style-dark mb-5">
      <div class="container">
        <div class="page-title-inner text-center clearfix">
          <div class="heading-wrapper">
            <h1 class="text-white">FAQs</h1>
          </div>
          <!-- End Heading -->
          <ul class="st-breadcrumb mt-5">
            <li><router-link :to="{name: 'Home'}"><a>Home</a></router-link></li>
            <li class="active"><span>FAQs</span></li>
          </ul>
          <!-- End Breadcrumb -->
        </div>
        <!-- Page Title Inner -->
      </div>
    </div>
    <!-- Breadcrumb Ends -->

    <!-- Faq Content -->
    <section class="faq section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
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
        </div>
      </div>
    </section>
    <!-- Faq Content Ends -->
</template>
<script>
export default {
    mounted(){
        window.scrollTo(0,0)
    }
}
</script>