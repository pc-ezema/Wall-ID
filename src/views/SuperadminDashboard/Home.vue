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
                    <h3>Good Afternoon, Admin</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Boxes Section-->
        <div class="row mb-3 justify-content-center">
          <div class="col-lg-3 mb-4">
            <div class="admin-box serbox1">
              <router-link to="#">
                <a>
                  <h5>Total Users</h5>
                </a>
                <p>{{ dashboardstats.totalUser }}</p>
                <p class="clear"></p>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 mb-4">
            <div class="admin-box serbox2">
              <router-link to="#">
                <a>
                  <h5>Total Individuals</h5>
                </a>
                <p>{{ dashboardstats.totalIndividualActive }}</p>
                <p class="clear"></p>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 mb-4">
            <div class="admin-box serbox3">
              <router-link to="#">
                <a>
                  <h5>Total Organisations</h5>
                </a>
                <p>{{ dashboardstats.totalOrganizationActive }}</p>
                <p class="clear"></p>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 mb-4">
            <div class="admin-box serbox4">
              <router-link to="#">
                <a>
                  <h5>Number of Events</h5>
                </a>
                <p>{{ dashboardstats.totalOrganizationActive }}</p>
                <p class="clear"></p>
              </router-link>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-xl-12 mb-4">
            <div class="secForm tableAdminHome">
              <div class="col-lg-12 secFormHead">
                <h5>Latest Individual Users</h5>
              </div>
              <div class="col-lg-12 mt-3">
                <div class="white_card card_height_100 mb_30">
                  <div class="white_card_body">
                    <div class="QA_section">
                      <div class="QA_table mb_30">
                        <table class="table lms_table_active">
                          <thead>
                            <tr>
                              <th scope="col">S/N</th>
                              <th scope="col">Name</th>
                              <th scope="col">Date Created</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(row, index) in dashboardstats.firstFiveIndividual" v-bind:key="index">
                              <th scope="row">{{ index + 1 }}</th>
                              <td>{{ row.firstname }} {{ row.lastname }}</td>
                              <td>{{ getDate(row.created_at) }}</td>
                              <td>
                                <a href="#" class="status_btn">Active</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 mb-4">
            <div class="secForm tableAdminHome">
              <div class="col-lg-12 secFormHead">
                <h5>Latest Organization Users</h5>
              </div>
              <div class="col-lg-12 mt-3">
                <div class="white_card card_height_100 mb_30">
                  <div class="white_card_body">
                    <div class="QA_section">
                      <div class="QA_table mb_30">
                        <table class="table lms_table_active">
                          <thead>
                            <tr>
                              <th scope="col">S/N</th>
                              <th scope="col">Name</th>
                              <th scope="col">Date Created</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(row, index) in dashboardstats.firstFiveOrganization" v-bind:key="index">
                              <th scope="row">{{ index + 1 }}</th>
                              <td>{{ row.name }}</td>
                              <td>{{ getDate(row.created_at) }}</td>
                              <td>
                                <a href="#" class="status_btn">Active</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="secForm tableAdminHome">
            <div class="col-lg-4">
              <div class="main-title">
                <h3 class="m-0">Recent Stats</h3>
              </div>
            </div>
            <div class="white_card_body">
              <canvas id="myChart" height="100"></canvas>
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
      dashboardstats: {},
      user: this.$store.state.user,
    };
  },

  methods: {
    getDate(value) {
      return new Date(value).toLocaleDateString("en-US");
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
        .get("admin/mobileStats", {
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

    getUser() {
      this.user = this.$store.state.user;
    },
  },

  mounted() {
    this.getDashboardStats();
    window.scrollTo(0, 0);

    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Total Users", "Individuals", "Organisations", "Events"],
        datasets: [
          {
            label: "Stats",
            data: [1100, 600, 500, 356],
            backgroundColor: ["#FFEAC6", "#D8E1FF", "#FFE0FF", "#D9FFDF"],
            borderColor: ["#A221FC", "#A221FC", "#A221FC", "#A221FC"],
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
