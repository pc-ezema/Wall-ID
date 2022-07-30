<template>
  <DashboardSidebar />

  <section class="main_content dashboard_part large_header_bg">
    <DashboardNavbar />

    <!--Main Content-->
    <div class="main_content_iner overly_inner">
      <div class="container-fluid p-0">
        <!--Breadcrumb-->
        <div class="row">
          <div class="col-12">
            <div class="dashboard_header mb-3">
              <div class="row">
                <div class="col-lg-12">
                  <div class="dashboard_header_title">
                    <h3>Verification</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Boxes Section-->
        <div class="row justify-content-center mb-5">
          <router-link
            to="/organisation-dashboard/create-verifier"
            class="innerSerBox innerSerBox11"
          >
            <a>
              <div class="text-center">
                <img
                  src="@/assets/img/dashAssets/innerSerBox66.png"
                  draggable="false"
                />
                <p>Create Verifier</p>
              </div>
            </a>
          </router-link>
          <router-link
            to="/organisation-dashboard/view-verifier"
            class="innerSerBox innerSerBox22"
          >
            <a>
              <div class="text-center">
                <img
                  src="@/assets/img/dashAssets/innerSerBox666.png"
                  draggable="false"
                />
                <p>View Verifier</p>
              </div>
            </a>
          </router-link>
          <router-link
            to="/organisation-dashboard/pending-request"
            class="innerSerBox innerSerBox4"
          >
            <a>
              <div class="text-center">
                <img
                  src="@/assets/img/dashAssets/innerSerBox55.png"
                  draggable="false"
                />
                <p>Pending Request</p>
              </div>
            </a>
          </router-link>
        </div>
      </div>
    </div>

    <DashboardFooter />
  </section>

  <div id="back-top" style="display: none">
    <a title="Go to Top" href="#">
      <i class="ti-angle-up"></i>
    </a>
  </div>
</template>

<style scoped src="@/assets/css/styleDashboard.css"></style>
<script>
import DashboardSidebar from "./DashboardSidebar.vue";
import DashboardNavbar from "./DashboardNavbar.vue";
import DashboardFooter from "./DashboardFooter.vue";
export default {
  components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
