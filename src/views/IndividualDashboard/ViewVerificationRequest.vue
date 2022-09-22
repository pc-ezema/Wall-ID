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
                    <h3>View Verification Requests</h3>
                    <!-- <p><router-link to="/individual-dashboard/id-card-management"><a><i class="bi bi-arrow-left"></i> ID Card Management</a></router-link></p> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Boxes Section-->
        <div class="row justify-content-center mt-3 secForm">
          <div class="col-lg-11 secFormHead">
            <h5>
              <router-link to="/individual-dashboard/verification-request"
                ><a
                  ><i class="bi bi-plus-circle-fill"></i> Send Request</a
                ></router-link
              >
            </h5>
          </div>
          <div class="col-lg-11 filterSelect">
              <select @change="onChange($event)" v-model="key">
                  <option hidden>Filter</option>
                  <option value="Pending">Pending</option>
                  <option value="Decline">Decline</option>
                  <option value="PendingFromOrg">Pending From Organization</option>
              </select>
          </div>
          <div v-if="pendingrequest" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Role</th>
                          <th scope="col">Organization Name</th>
                          <th scope="col">Request Date</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody v-if="!myRequest || !myRequest.length">
                        <tr v-if="loading" >
                          <td colspan="6">
                            <div style="text-align: center"  class="fa-3x">
                                <i class="fas fa-spinner fa-spin"></i>
                            </div>
                          </td>
                        </tr>
                        <tr v-else>
                          <td class="align-enter text-dark font-13" colspan="6">
                            No Verification Request.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in myRequest"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.name }}</td>
                          <td>{{ row.role }}</td>
                          <td>{{ row.organization.name }}</td>
                          <td>{{ row.created_at }}</td>
                          <td>
                            <span v-if="row.status == 'Pending'">
                              <a class="a-pending">{{ row.status }}</a>
                            </span>
                            <span v-else-if="row.status == 'Approved'">
                              <a class="a-approved">{{ row.status }}</a>
                            </span>
                            <span v-else>
                              <a style="background: red; color: #fff">{{
                                row.status
                              }}</a>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="pendingrequestfromorg" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Role</th>
                          <th scope="col">Organization Name</th>
                          <th scope="col">Request Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!RequestFromOrg || !RequestFromOrg.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="6">
                            No Verification Request From Organization.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in RequestFromOrg"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.name }}</td>
                          <td>{{ row.role }}</td>
                          <td>{{ row.organization.name }}</td>
                          <td>{{ row.created_at }}</td>
                          <td>
                            <span v-if="row.status == 'Pending'">
                              <a class="a-pending">{{ row.status }}</a>
                            </span>
                            <span v-else-if="row.status == 'Approved'">
                              <a class="a-approved">{{ row.status }}</a>
                            </span>
                            <span v-else>
                              <a style="background: red; color: #fff">{{
                                row.status
                              }}</a>
                            </span>
                          </td>
                          <td>
                            <button
                              @click="declineRequest(row.id)"
                              class="tbl-btn btn-disable"
                            >
                              Decline
                            </button>
                            <button
                              @click="approveRequest(row.id)"
                              class="tbl-btn btn-enable"
                            >
                              Approve
                            </button>
                            <!-- <button class="tbl-btn btn-delete">Delete</button> -->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="generaldeclinerequest" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Role</th>
                          <th scope="col">Organization Name</th>
                          <th scope="col">Request Date</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody v-if="!requestDeclined || !requestDeclined.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="6">
                            No Decline Request.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in requestDeclined"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.name }}</td>
                          <td>{{ row.role }}</td>
                          <td>{{ row.organization.name }}</td>
                          <td>{{ row.created_at }}</td>
                          <td>
                            <span v-if="row.status == 'Pending'">
                              <a class="a-pending">{{ row.status }}</a>
                            </span>
                            <span v-else-if="row.status == 'Approved'">
                              <a class="a-approved">{{ row.status }}</a>
                            </span>
                            <span v-else>
                              <a style="background: red; color: #fff">{{
                                row.status
                              }}</a>
                            </span>
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
      pagination: {},
      myRequest: [],
      RequestFromOrg: [],
      requestDeclined: [],
      pendingrequest: true,
      pendingrequestfromorg: false,
      generaldeclinerequest: false,
      key: "",
      loading: false
    };
  },

  methods: {
    onChange(event) {
      if (this.key == "Pending") {
        this.pendingrequest = true;
        this.generaldeclinerequest = false;
        this.pendingrequestfromorg = false;
      }

      if (this.key == "PendingFromOrg") {
        this.pendingrequest = false;
        this.generaldeclinerequest = false;
        this.pendingrequestfromorg = true;
      }

      if (this.key == "Decline") {
        this.pendingrequest = false;
        this.generaldeclinerequest = true;
        this.pendingrequestfromorg = false;
      }
    },

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

    MyRequest() {
      this.loading = true;
      axios
        .get("verificaton/view-request", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.loading = false;
          this.prepPagination(response.data);
          this.myRequest = response.data.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },

    PendingFromOrganization()
    {
      axios
        .get("verificaton/view-request-from-org", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.RequestFromOrg = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    DeclineRequest()
    {
      axios
        .get("verificaton/decline/request", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.requestDeclined = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async approveRequest(data) {
      this.$Progress.start();

      await axios
        .post("verificaton/organization/approve/" + data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.MyRequest();
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

    async declineRequest(data) {
      this.$Progress.start();

      await axios
        .post("verificaton/organization/decline/" + data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.MyRequest();
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
    this.MyRequest();
    this.PendingFromOrganization();
    this.DeclineRequest();
    window.scrollTo(0, 0);
  },
};
</script>
