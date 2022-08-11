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
                      <router-link to="/organisation-dashboard/event-management"
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
            <select @change="onChange($event)" v-model="key">
              <option>Filter</option>
              <option value="All">All</option>
              <option Value="Accepted">Accepted</option>
              <option value="Declined">Declined</option>
            </select>
          </div>
          <div v-if="all" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Invited By</th>
                          <th scope="col">Event Start Date</th>
                          <th scope="col">Event Start Time</th>
                          <th scope="col">Invited On</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!invites || !invites.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="8">
                            No Event Invitation.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr v-for="(row, index) in invites"
                          v-bind:key="index" >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.event.name }}</td>
                          <td>{{ row.sender }}</td>
                          <td>{{ getDate(row.event.start_date)}}</td>
                          <td>{{ row.event.start_time}}</td>
                          <td>{{ getDate(row.sent_on) }}</td>
                          <td>
                            <div v-if="row.status == 'pending'">
                              <a href="#" class="status_btn" style="background: yellow" >{{row.status}}</a>
                            </div>
                            <div v-if="row.status == 'approved'">
                              <a href="#" class="status_btn">{{row.status}}</a>
                            </div>
                            <div v-if="row.status == 'declined'">
                              <a href="#" class="status_btn" style="background: red">{{row.status}}</a>
                            </div>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a href="#" title="View" 
                                data-toggle="modal"
                                data-target="#modalView"
                                @click="sendInfo(row)"
                                class="action_btn">
                                <i class="bi bi-eye-fill"></i>
                              </a>
                              <a href="javascript:void(0)"
                                @click="approveInvitation(row.id)" title="Approve" class="action_btn">
                                <i class="bi bi-patch-check"></i>
                              </a>
                              <a href="javascript:void(0)"
                                @click="declineInvitation(row.id)" title="Decline" class="action_btn">
                                <i class="bi bi-x-circle"></i>
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
          <div v-if="accepted" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Invited By</th>
                          <th scope="col">Event Start Date</th>
                          <th scope="col">Event Start Time</th>
                          <th scope="col">Invited On</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!invites || !invites.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="8">
                            No Approved Event Invitation.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr v-for="(row, index) in invites"
                          v-bind:key="index" >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.event.name }}</td>
                          <td>{{ row.sender }}</td>
                          <td>{{ getDate(row.event.start_date)}}</td>
                          <td>{{ row.event.start_time}}</td>
                          <td>{{ getDate(row.sent_on) }}</td>
                          <td>
                            <div v-if="row.status == 'pending'">
                              <a href="#" class="status_btn" style="background: yellow" >{{row.status}}</a>
                            </div>
                            <div v-if="row.status == 'approved'">
                              <a href="#" class="status_btn">{{row.status}}</a>
                            </div>
                            <div v-if="row.status == 'declined'">
                              <a href="#" class="status_btn" style="background: red">{{row.status}}</a>
                            </div>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a href="#" title="View" 
                                data-toggle="modal"
                                data-target="#modalView"
                                @click="sendInfo(row)"
                                class="action_btn">
                                <i class="bi bi-eye-fill"></i>
                              </a>
                              <a href="javascript:void(0)"
                                @click="declineInvitation(row.id)" title="Decline" class="action_btn">
                                <i class="bi bi-x-circle"></i>
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
          <div v-if="declined" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Invited By</th>
                          <th scope="col">Event Start Date</th>
                          <th scope="col">Event Start Time</th>
                          <th scope="col">Invited On</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!invites || !invites.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="8">
                            No Decline Event Invitation.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr v-for="(row, index) in invites"
                          v-bind:key="index" >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.event.name }}</td>
                          <td>{{ row.sender }}</td>
                          <td>{{ getDate(row.event.start_date)}}</td>
                          <td>{{ row.event.start_time}}</td>
                          <td>{{ getDate(row.sent_on) }}</td>
                          <td>
                            <div v-if="row.status == 'pending'">
                              <a href="#" class="status_btn" style="background: yellow" >{{row.status}}</a>
                            </div>
                            <div v-if="row.status == 'approved'">
                              <a href="#" class="status_btn">{{row.status}}</a>
                            </div>
                            <div v-if="row.status == 'declined'">
                              <a href="#" class="status_btn" style="background: red">{{row.status}}</a>
                            </div>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a href="#" title="View" 
                                data-toggle="modal"
                                data-target="#modalView"
                                @click="sendInfo(row)"
                                class="action_btn">
                                <i class="bi bi-eye-fill"></i>
                              </a>
                              <a href="javascript:void(0)"
                                @click="approveInvitation(row.id)" title="Approve" class="action_btn">
                                <i class="bi bi-patch-check"></i>
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

  <div
    class="modal fade"
    id="modalView"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content viewCardModal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">View Event Invitation</h5>
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
          <div class="row"> 
            <div class="col-6">
              <label>Event Name</label>
              <input :value="selected.name" class="new_input" readonly/>
            </div>
            <div class="col-6">
              <label>Event Owner</label>
              <input :value="selected.owner" class="new_input" readonly/>
            </div>
            <div class="col-12">
              <label>Event Description</label>
              <textarea :value="selected.description" class="new_input" readonly></textarea>
            </div>
            <div class="col-6">
              <label>Event Location</label>
              <input :value="selected.location" class="new_input" readonly/>
            </div>
            <div class="col-6">
              <label>Event Type</label>
              <input :value="selected.type" class="new_input" readonly/>
            </div>
            <div class="col-6">
              <label>Event Start Date</label>
              <input :value="getDate(selected.start_date)" class="new_input" readonly/>
            </div>
            <div class="col-6">
              <label>Event Start Time</label>
              <input :value="selected.start_time" class="new_input" readonly/>
            </div>
            <div class="col-6">
              <label>Event End Date</label>
              <input :value="getDate(selected.end_date)" class="new_input" readonly/>
            </div>
            <div class="col-6">
              <label>Event End Time</label>
              <input :value="selected.end_time" class="new_input" readonly/>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      event_id: [],
      username: [],
      invites: [],
      all: true,
      accepted: false,
      declined: false,
      key: 'Filter',
      selected: {
        name: "",
        owner: "",
        description: "",
        location: "",
        type: "",
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: ""
      },
      invite: {
        event_id: "Choose Event ID",
        username: "Choose Username",
      },
    };
  },

  methods: {
    onChange(event) {
      if (this.key == "All") {
        this.all = true;
        this.accepted = false;
        this.declined = false;
        axios
          .get("events/invites", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            this.invites = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (this.key == "Accepted") {
        this.all = false;
        this.accepted = true;
        this.declined = false;
        axios
          .get("events/invites/accepted", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            this.invites = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (this.key == "Declined") {
        this.all = false;
        this.accepted = false;
        this.declined = true;
        axios
          .get("events/invites/declined", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            this.invites = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    getDate(value) {
      return new Date(value).toLocaleDateString("en-US");
    },

    loadAllInvites() {
      axios
        .get("events/invites", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.invites = response.data.data;
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

    sendInfo(row) {
      this.selected.name = row.event.name;
      this.selected.owner = row.sender;
      this.selected.description = row.event.description;
      this.selected.location = row.event.venue;
      this.selected.type = row.event.type;
      this.selected.start_date = row.event.start_date;
      this.selected.start_time = row.event.start_time;
      this.selected.end_date = row.event.end_date;
      this.selected.end_time = row.event.end_time;
    },

    async approveInvitation(data) {
      this.$Progress.start();
      await axios
        .post(
          "events/request/invites/" + data +"/accept",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.loadAllInvites();
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

    async declineInvitation(data) {
      this.$Progress.start();
      await axios
        .post(
          "events/request/invites/" + data +"/decline",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.loadAllInvites();
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

  mounted() {
    this.loadAllInvites();
    this.loadAllEventID();
    this.loadAllUsername();
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
  .new_input {
    width: 100%;
    padding: 10px 8px !important;
    border-radius: 5px !important;
    border: 1px solid #757575 !important;
    display: block;
    font-size: 16px;
    color: #000;
    box-shadow: none !important;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin-bottom: 25px;
  }
</style>