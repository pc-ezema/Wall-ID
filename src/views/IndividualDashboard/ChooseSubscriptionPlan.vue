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
            <h5>Choose a plan subscribe to</h5>
            <div class="row">
              <div class="col-lg-12 mt-2">
                <div class="mb-2" v-for="row in plans" v-bind:key="row.id">
                    <div class="resultDivDisplay">
                      <div class="resultContent">
                        <div class="row">
                          <div class="col-lg-6">
                            <p>Name</p>
                            <h5>{{ row.name }}</h5>
                          </div>
                          <div class="col-lg-6">
                            <p>Payment</p>
                            <h5>{{ row.price }}</h5>
                          </div>
                          <div class="col-lg-6">
                            <p>Description</p>
                            <h5>{{ row.description }}</h5>
                          </div>
                          <div class="col-lg-6">
                            <p>Period</p>
                            <h5>{{ row.validity }} days</h5>
                          </div>
                            <div class="col-12">
                                <button
                                    class="viewCardBtn"
                                    @click="makePayment(row.id)"
                                    >Proceed To Payment</button>
                            </div>
                        </div>
                      </div>
                      <div class="clear"></div>
                    </div>
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
      plans: [],
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

    loadOrganzationPlans(page = 1) {
      let id = this.$route.params.id;

      axios
        .get("individuals/organizations/" + id + "/plans", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          // this.prepPagination(response.data);
          this.plans = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async makePayment(id) {
      this.$Progress.start();

      await axios
        .post(
          "individuals/organizations/subscription/pay",
          {
            subscription_plan_id: id,
          },

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          this.$Progress.finish();
          window.location.href = response.data.data.link;
        })
        .catch((error) => {
          this.$Progress.fail();
          this.$notify({
            type: "error",
            title: error.response.data.message,
            duration: 5000,
            speed: 1000,
          });
        });
    },
  },

  created() {
    this.loadOrganzationPlans();
  },

  mounted() {
    this.loadOrganzationPlans();
    window.scrollTo(0, 0);
  },
};
</script>
