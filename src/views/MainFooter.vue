<template>
    <footer class="pb-3 pt-5">
      <div class="footer-widgets pb-4">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3 res-margin">
              <div class="widget">
                <p class="footer-logo">
                  <router-link to="/">
                    <img style="width: 180px" src="@/assets/images/footer_logo.png" alt="Wall-ID" />
                  </router-link>
                </p>
                <div class="footer-social">
                  <a href="#" title="Twitter"><i class="fab fa-twitter fa-fw"></i></a>
                  <a href="#" title="Facebook"><i class="fab fa-facebook-f fa-fw"></i></a>
                  <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                  <a href="#" title="Pinterest"><i class="fab fa-whatsapp fa-fw"></i></a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
              <div class="widget">
                <h6>Useful Links</h6>

                <ul class="footer-menu fw-light">
                  <li><router-link :to="{name: 'Login'}"><a>Login</a></router-link></li>
                  <li><router-link :to="{name: 'Pricing'}"><a>Pricing</a></router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 res-margin">
              <div class="widget">
                <h6>Resources</h6>

                <ul class="footer-menu fw-light">
                  <li><router-link :to="{name: 'Faq'}"><a>FAQs</a></router-link></li>
                  <li><router-link :to="{name: 'Contact'}"><a>Contact</a></router-link></li>
                </ul>
              </div>
            </div>
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
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p class="copyright text-center">
                Copyright &copy; <span id="autodate"></span> Wall-ID. | All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0, 0)
        //Copyright Date
        function newDate() {
          return new Date().getFullYear();
        }
        document.onload = document.getElementById("autodate").innerHTML = newDate();
    }
}
</script>