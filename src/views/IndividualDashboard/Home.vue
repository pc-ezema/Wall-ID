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
            <div class="dashboard_header mb-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="dashboard_header_title">
                    <h3>
                      {{ getTime() }}, {{ user.details.firstname }}
                      {{ user.details.lastname }}!
                      <input style="color: #a221fc; font-weight: 700;text-align: right; cursor: copy; float: right; border: none; background-color: transparent; resize: none; outline: none;"
                      v-on:focus="$event.target.select()" 
                      ref="clone" 
                      readonly 
                      @click="copy"
                      :value="user.details.id_card_number"/>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Boxes Section-->
        <div class="row mb-3 justify-content-center">
          <!--Box 1-->
          <div class="col-lg-6 mb-4">
            <div class="ser-box serbox1">
              <router-link to="/individual-dashboard/id-card-management">
                <a>
                  <h5>
                    <img
                      src="@/assets/img/dashAssets/serBox1.png"
                      draggable="false"
                    />
                    <span>ID Card Management</span>
                  </h5>
                </a>
              </router-link>
              <p>
                <i
                  class="bi bi-question-circle-fill"
                  data-toggle="modal"
                  data-target="#modalID"
                ></i>
              </p>
            </div>
          </div>
          <!--Box 2-->
          <div class="col-lg-6 mb-4">
            <div class="ser-box serbox2">
              <router-link to="/individual-dashboard/event-management">
                <a>
                  <h5>
                    <img
                      src="@/assets/img/dashAssets/serBox2.png"
                      draggable="false"
                    />
                    <span>Event Management</span>
                  </h5>
                </a>
              </router-link>
              <p>
                <i
                  class="bi bi-question-circle-fill"
                  data-toggle="modal"
                  data-target="#modalEvent"
                ></i>
              </p>
            </div>
          </div>
          <!--Box 3-->
          <div class="col-lg-6 mb-4">
            <div class="ser-box serbox3">
              <router-link to="/individual-dashboard/membership-subscription">
                <a>
                  <h5>
                    <img
                      src="@/assets/img/dashAssets/serBox3.png"
                      draggable="false"
                    />
                    <span>Membership & Subscription</span>
                  </h5>
                </a>
              </router-link>
              <p>
                <i
                  class="bi bi-question-circle-fill"
                  data-toggle="modal"
                  data-target="#modalMember"
                ></i>
              </p>
            </div>
          </div>
          <!--Box 4-->
          <div class="col-lg-6 mb-4">
            <div class="ser-box serbox4">
              <router-link to="/individual-dashboard/verification-request">
                <a>
                  <h5>
                    <img
                      src="@/assets/img/dashAssets/serBox4.png"
                      draggable="false"
                    />
                    <span>Verification</span>
                  </h5>
                </a>
              </router-link>
              <p>
                <i
                  class="bi bi-question-circle-fill"
                  data-toggle="modal"
                  data-target="#modalVerify"
                ></i>
              </p>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-4">
            <div class="white_card card_height_100 mb_30 user_crm_wrapper">
              <div class="row">
                <div class="col-lg-12">
                  <div class="single_crm">
                    <div
                      class="crm_head d-flex align-items-center justify-content-between"
                    >
                      <div class="thumb">
                        <img src="@/assets/img/crm/businessman.svg" />
                      </div>
                    </div>
                    <div class="crm_body">
                      <h4>{{ dashboardstats.myidCard }}</h4>
                      <p>ID Cards</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="single_crm">
                    <div
                      class="crm_head crm_bg_1 d-flex align-items-center justify-content-between"
                    >
                      <div class="thumb">
                        <img src="@/assets/img/crm/customer.svg" />
                      </div>
                    </div>
                    <div class="crm_body">
                      <h4>{{ dashboardstats.totalEvents }}</h4>
                      <p>Events</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="single_crm">
                    <div
                      class="crm_head crm_bg_2 d-flex align-items-center justify-content-between"
                    >
                      <div class="thumb">
                        <img src="@/assets/img/crm/infographic.svg" />
                      </div>
                    </div>
                    <div class="crm_body">
                      <h4>{{ dashboardstats.active_subscriptions }}</h4>
                      <p>Active Subscription</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="white_card mb_30 card_height_100">
              <div class="white_card_header">
                <div
                  class="row align-items-center justify-content-between flex-wrap"
                >
                  <div class="col-lg-4">
                    <div class="main-title">
                      <h3 class="m-0">Recent Stats</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="white_card_body">
                <canvas id="myChart" width="400"></canvas>
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

  <!--Boxes Section Modals-->
  <section>
    <!--Box 1-->
    <div
      class="modal fade"
      id="modalID"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content serboxModal">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              ID Card Management
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Create custom ID cards for your organisation, groups or individual
              use.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--Box 2-->
    <div
      class="modal fade"
      id="modalEvent"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content serboxModal">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Event Management
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Create and manage your events, sell tickets and invite people to
              your event
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--Box 3-->
    <div
      class="modal fade"
      id="modalMember"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content serboxModal">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Membership & Subscription
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Join organisations, request for membership and pay for membership
              subscriptons
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--Box 4-->
    <div
      class="modal fade"
      id="modalVerify"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content serboxModal">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Verification</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Join organisations, request for membership and pay for membership
              subscriptons
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/assets/css/styleDashboard.css"></style>
<script>
import DashboardSidebar from "./DashboardSidebar.vue";
import DashboardNavbar from "./DashboardNavbar.vue";
import DashboardFooter from "./DashboardFooter.vue";
import axios from "axios";

export default {
  components: { DashboardSidebar, DashboardNavbar, DashboardFooter },

  data() {
    return {
      dashboardstats: {},
      user: JSON.parse(localStorage.getItem('user')) || [],
    };
  },

  methods: {
    copy() {
      this.$refs.clone.focus();
      document.execCommand('copy');
      this.$notify({
        type: "success",
        title: "Wall ID Number",
        text: "Copied Successsfully!",
        duration: 5000,
        speed: 1000,
      });
    },

    getTime() {
      const d = new Date();
      const time = d.getHours();

      if (time < 12) {
        return "Good Morning";
      } else if (time >= 12 && time <= 17) {
        return "Good Afternoon";
      } else if (time >= 17 && time <= 24) {
        return "Good Evening";
      }
    },

    getDashboardStats() {
      axios
        .get("individuals/mobileStats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.dashboardstats = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.getDashboardStats();
    this.$notify({
      type: "success",
      title: "Authorization",
      text: "You have been logged in!",
      duration: 5000,
      speed: 1000,
    });
    window.scrollTo(0, 0);

    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["ID Cards", "Events", "Subscription"],
        datasets: [
          {
            label: "Stats",
            data: [1, 5, 20],
            backgroundColor: ["#FF7EA5", "#E6ADFF", "#C388F6"],
            borderColor: ["#FF7EA5", "#E6ADFF", "#C388F6"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
