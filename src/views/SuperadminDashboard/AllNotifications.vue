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
                    <h3>All Notifications</h3>
                    <p>
                      <router-link to="/superadmin-dashboard/home"
                        ><a
                          ><i class="bi bi-arrow-left"></i> Dashboard</a
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
            <h5>All Notifications</h5>
          </div>
          <div class="col-lg-11 mt-3">
            <div class="card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div v-if="!notifications || !notifications.length" class="col-md-12">
                    <div v-if="loading" class="white_box QA_section mb_30">
                        <div style="text-align: center"  class="fa-3x">
                            <i class="fas fa-spinner fa-spin"></i>
                        </div>
                    </div>
                    <div v-else class="white_box QA_section mb_30">
                        <div>
                            No Notification.
                        </div>
                    </div>
                  </div>
                  <div v-else class="col-md-12">
                    <div  v-for="(row, index) in notifications" :key="index">
                        <div v-if="row.status == 'Unread'" class="white_box QA_section mb_10" style="background-color: #f5eff9;">
                            <div class="row">
                                <div class="col-md-2">
                                    <span class="iconNotify">
                                        <div class="actionDiv" id="actionDiv">
                                            <input type="checkbox" class="custom-control-input" name="example-checkbox2" value="option2">
                                        </div>
                                    </span>
                                </div>
                                <div class="col-md-3">
                                    <span class="titleNotify">
                                        <a class="firstTxt">{{row.subject}} - {{row.username}} {{row.email}}</a>
                                        <div class="timeTxt">{{dayDiff(row.created_at)}}</div>
                                    </span>
                                </div>
                                <div class="col-md-7">
                                    <span class="titleNotify">
                                        {{row.message}}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div v-else class="white_box QA_section mb_10">
                            <div class="row">
                                <div class="col-md-2">
                                    <span class="iconNotify">
                                        <div class="actionDiv" id="actionDiv">
                                            <a> <input type="checkbox" class="custom-control-input" name="example-checkbox2" value="option2" checked> Mark as read</a>
                                        </div>
                                    </span>
                                </div>
                                <div class="col-md-3">
                                    <span class="titleNotify">
                                        <a class="firstTxt">{{row.subject}} - {{row.username}} {{row.email}}</a>
                                        <div class="timeTxt">{{dayDiff(row.created_at)}}</div>
                                    </span>
                                </div>
                                <div class="col-md-7">
                                    <span class="titleNotify">
                                        <a class="firstMessage">{{row.message}}</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
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
<script>
import DashboardSidebar from "./DashboardSidebar.vue";
import DashboardNavbar from "./DashboardNavbar.vue";
import DashboardFooter from "./DashboardFooter.vue";
import axios from "axios";
import moment from 'moment';
export default {
  components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
  
  data() {
    return {
      notifications: {},
      loading: true
    };
  },
  
  methods: {
    dayDiff(value) {
      return moment(value).fromNow();
    },

    getNotification() {
      this.loading = true;
      axios
        .get(`/admin/all/notifications`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.loading = false;
          this.notifications = res.data.data;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    }
  },

  mounted() {
    this.getNotification();
    window.scrollTo(0, 0);
  },
};
</script>
