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
                    <h3>All Subscription Plan</h3>
                    <p>
                      <router-link to="/individual-dashboard/subscriptions"
                        ><a
                          ><i class="bi bi-arrow-left"></i> Go Back</a
                        ></router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Boxes Section-->
        <div class="row justify-content-center mt-3 secForm">
          <div class="col-lg-11 secFormHead">
            <h5>Choose an organisation to subscribe to</h5>
            <div class="row">
              <div class="col-lg-12 mt-2">
                <div
                  class="mb-2"
                  v-for="row in organization"
                  v-bind:key="row.id"
                >
                  <router-link
                    :to="
                      '/individual-dashboard/choose-subscription-plan/' +
                      row.organization.id
                    "
                  >
                    <div class="resultDivDisplay">
                      <div class="resultPicture">
                        <div class="pictureDiv">
                          <img src="@/assets/img/dp.jpg" />
                        </div>
                      </div>
                      <div class="resultContent">
                        <p>Name</p>
                        <h5>{{ row.organization.name }}</h5>
                        <p>Email</p>
                        <h5>{{ row.organization.user.email }}</h5>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
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
<style scoped src="@/assets/css/styleDashboardSupport.css"></style>
<script>
import DashboardSidebar from "./DashboardSidebar.vue";
import DashboardNavbar from "./DashboardNavbar.vue";
import DashboardFooter from "./DashboardFooter.vue";
import axios from "axios";

export default {
  components: { DashboardSidebar, DashboardNavbar, DashboardFooter },

  data() {
    return {
      pagination: "",
      organization: [],
    };
  },

  methods: {
    prepPagination(data) {
      this.pagination = {
        data: data.data,
        current_page: data.meta.current_page,
        first_item: data.meta.first_item,
        last_item: data.meta.last_item,
        last_page: data.meta.last_page,
        next_page_url: data.meta.next_page_url,
        per_page: data.meta.per_page,
        previous_page_url: data.meta.previous_page_url,
        total: data.meta.total,
      };
    },

    loadOrganizations(page = 1) {
      axios
        .get("individuals/organizations", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.organization = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.loadOrganizations();
  },

  mounted() {
    this.loadOrganizations();
    window.scrollTo(0, 0);
  },
};
</script>
