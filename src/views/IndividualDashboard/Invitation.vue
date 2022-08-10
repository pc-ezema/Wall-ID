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
                    <h3>Invitation</h3>
                    <p>
                      <router-link to="/individual-dashboard/event-management"
                        ><a
                          ><i class="bi bi-arrow-left"></i> Event Management</a
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
            <h5>Send Invitation</h5>
          </div>
          <div class="col-lg-11 mt-3">
            <form @submit.prevent="sendInvites()">
              <div class="row justify-content-end">
                <!--Event ID-->
                <div class="col-lg-6 mb-3">
                  <label>Event ID</label>
                  <select class="input" v-model="invite.event_id">
                    <option>Choose Event ID</option>
                    <option
                      v-for="uniqueid in event_id"
                      :key="uniqueid.id"
                      :value="uniqueid.unique_id"
                    >
                      {{ uniqueid.unique_id }}
                    </option>
                  </select>
                </div>
                <!--Receiver username-->
                <div class="col-lg-6 mb-3">
                  <label>Receiver username</label>
                  <select class="input" v-model="invite.username">
                    <option>Choose Username</option>
                    <option
                      v-for="user in username"
                      :key="user.id"
                      :value="user.username"
                    >
                      {{ user.username }}
                    </option>
                  </select>
                </div>
                <!--Button-->
                <div class="col-lg-2 text-center mb-3">
                  <button type="submit" class="button">Send</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-11 secFormHead mt-2">
            <h5>All my invitations</h5>
          </div>
          <div class="col-lg-11 filterSelect">
            <select>
              <option>Filter</option>
              <option>All</option>
              <option>Accepted</option>
              <option>Declined</option>
            </select>
          </div>
          <div class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>
                          <th scope="col">Invited By</th>
                          <th scope="col">Event Start Date</th>
                          <th scope="col">Is Free</th>
                          <th scope="col">Invited On</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Glorious Carnival</td>
                          <td>Name Surname / Username</td>
                          <td>2022-03-15</td>
                          <td>No</td>
                          <td>2022-02-20</td>
                          <td>
                            <a href="#" class="status_btn">Active</a>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a href="#" title="View" class="action_btn">
                                <i class="bi bi-eye-fill"></i>
                              </a>
                              <a href="#" title="Delete" class="action_btn">
                                <i class="bi bi-trash-fill"></i>
                              </a>
                            </div>
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

export default {
  components: { DashboardSidebar, DashboardNavbar, DashboardFooter },

  data() {
    return {
      event_id: [],
      username: [],
      invite: {
        event_id: "Choose Event ID",
        username: "Choose Username",
      },
    };
  },

  methods: {
    loadAllEventID() {
      axios
        .get("events/mine/eventby/uniqueid", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.event_id = response.data.data;
        })
        .catch((error) => {
          this.$notify({
            type: "error",
            title: error.response.data.message,
            duration: 5000,
            speed: 1000,
          });
        });
    },

    loadAllUsername() {
      axios
        .get("users/all/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.username = response.data.data;
        })
        .catch((error) => {
          this.$notify({
            type: "error",
            title: error.response.data.message,
            duration: 5000,
            speed: 1000,
          });
        });
    },

    async sendInvites() {
      this.$Progress.start();

      if (
        this.invite.event_id == "" ||
        this.invite.username == ""
      ) {
        this.$notify({
          type: "error",
          title: "Please enter all the needed fields.",
          duration: 5000,
          speed: 1000,
        });
        this.$Progress.finish();
        return;
      } else {
        this.$wait.start("processing");

        await axios
          .post("events/invite", {
            event_id: this.invite.event_id,
            username: this.invite.username,
          })
          .then((response) => {
            this.$notify({
              type: "success",
              title: response.data.message,
              duration: 5000,
              speed: 1000,
            });
            this.invite.event_id = null;
            this.invite.username = null;
            this.$Progress.finish();
          })
          .catch((error) => {
            this.$notify({
              type: "error",
              title: error.response.data.message,
              duration: 5000,
              speed: 1000,
            });
            this.$Progress.fail();
          });
      }
    },
  },

  mounted() {
    this.loadAllEventID();
    this.loadAllUsername();
    window.scrollTo(0, 0);
  },
};
</script>
