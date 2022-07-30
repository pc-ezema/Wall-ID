<template>
  <MainHeader />

  <div class="signup-portal-div">
    <div class="col-md-12 text-center mb-3">
      <h3>Select the category of user you are</h3>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <router-link to="/signup-organisation">
            <div class="signupColumn signupColumnOrganisation">
              <h4>Organisation</h4>
              <p>This account belongs to user with organisations or company.</p>
            </div>
          </router-link>
        </div>
        <div class="col-lg-5">
          <router-link to="/signup-individual">
            <div class="signupColumn signupColumnIndividual">
              <h4>Individual</h4>
              <p>This account is for the regular user.</p>
            </div>
          </router-link>
        </div>
        <div class="col-lg-12 already text-center mt-3">
          <p>
            Already have a Wall-ID account?
            <router-link :to="{ name: 'Login' }"><a>Login</a></router-link>
          </p>
        </div>
      </div>
    </div>
  </div>

  <MainFooter />
</template>
<script>
import MainHeader from "./MainHeader.vue";
import MainFooter from "./MainFooter.vue";
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: { MainHeader, MainFooter },
};
</script>
