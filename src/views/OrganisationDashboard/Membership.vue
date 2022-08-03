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
                    <h3>Membership</h3>
                    <p>
                      <router-link
                        to="/organisation-dashboard/membership-subscription"
                        ><a
                          ><i class="bi bi-arrow-left"></i> Membership &
                          Subscription</a
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
            <h5>All Membership</h5>
          </div>
          <div class="col-lg-11 filterSelect">
            <select @change="onChange($event)" v-model="key">
              <option>Filter</option>
              <option value="Pending">Pending</option>
              <option value="Declined">Declined</option>
              <option value="Activated">Activated</option>
              <option value="Deactivated">Deactivated</option>
            </select>
          </div>
          <div v-if="approvedMember" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Role</th>
                          <th scope="col">Date Requested</th>
                          <th scope="col">Membership Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!membership || !membership.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="6">
                            No Approved Member
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in membership"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>
                            {{ row.individual.firstname }}
                            {{ row.individual.lastname }}
                          </td>
                          <td>{{ row.individual.phone }}</td>
                          <td>{{ row.role }}</td>
                          <td>
                            {{ new Date(row.created_at).toLocaleString() }}
                          </td>
                          <td>
                            <span class="badge" style="background: green">{{
                              row.status
                            }}</span>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                @click="DeactivateMember(row.id)"
                                title="Deactivate"
                                class="action_btn"
                              >
                                <i class="bi bi-x-square-fill"></i>
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
          <div v-if="pendingMember" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Role</th>
                          <th scope="col">Date Requested</th>
                          <th scope="col">Membership Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!membership || !membership.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="7">
                            No Pending Membership Request
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in membership"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>
                            {{ row.individual.firstname }}
                            {{ row.individual.lastname }}
                          </td>
                          <td>{{ row.individual.phone }}</td>
                          <td>{{ row.role }}</td>
                          <td>
                            {{
                              new Date(
                                row.individual.created_at
                              ).toLocaleString()
                            }}
                          </td>
                          <td>
                            <span class="badge" style="background: red">{{
                              row.status
                            }}</span>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                @click="approveMember(row.id)"
                                title="Approve"
                                class="action_btn"
                              >
                                <i class="bi bi-check-circle"></i>
                              </a>

                              <a
                                href="javascript:void(0)"
                                @click="DeclineMember(row.id)"
                                title="Decline"
                                class="action_btn"
                              >
                                <i class="bi bi-x-octagon"></i>
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
          <div v-if="deactivateMember" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Role</th>
                          <th scope="col">Date Requested</th>
                          <th scope="col">Membership Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!membership || !membership.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="7">
                            No Deactivated Member
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in membership"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>
                            {{ row.individual.firstname }}
                            {{ row.individual.lastname }}
                          </td>
                          <td>{{ row.individual.phone }}</td>
                          <td>{{ row.role }}</td>
                          <td>
                            {{
                              new Date(
                                row.individual.created_at
                              ).toLocaleString()
                            }}
                          </td>
                          <td>
                            <span class="badge" style="background: red">{{
                              row.status
                            }}</span>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                @click="activateMember(row.id)"
                                title="Approve"
                                class="action_btn"
                              >
                                <i class="bi bi-check-circle"></i>
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
          <div v-if="declineMember" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Role</th>
                          <th scope="col">Date Requested</th>
                          <th scope="col">Membership Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!membership || !membership.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="7">
                            No Pending Membership Request
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in membership"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>
                            {{ row.individual.firstname }}
                            {{ row.individual.lastname }}
                          </td>
                          <td>{{ row.individual.phone }}</td>
                          <td>{{ row.role }}</td>
                          <td>
                            {{
                              new Date(
                                row.individual.created_at
                              ).toLocaleString()
                            }}
                          </td>
                          <td>
                            <span class="badge" style="background: red">{{
                              row.status
                            }}</span>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                @click="approveMember(row.id)"
                                title="Approve"
                                class="action_btn"
                              >
                                <i class="bi bi-check-circle"></i>
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
      pagination: {},
      membership: [],
      approvedMember: false,
      deactivateMember: false,
      declineMember: false,
      pendingMember: true,
      key: "Filter",
    };
  },

  methods: {
    onChange(event) {
      if (this.key == "Activated") {
        this.pendingMember = false;
        this.deactivateMember = false;
        this.declineMember = false;
        this.approvedMember = true;
        axios
          .get("organizations/members/active", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            this.prepPagination(response.data);
            this.membership = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (this.key == "Pending") {
        this.approvedMember = false;
        this.deactivateMember = false;
        this.declineMember = false;
        this.pendingMember = true;
        axios
          .get("organizations/members/requests/get", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            this.prepPagination(response.data);
            this.membership = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (this.key == "Declined") {
        this.approvedMember = false;
        this.deactivateMember = false;
        this.declineMember = true;
        this.pendingMember = false;
        axios
          .get("organizations/members/decline", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            this.prepPagination(response.data);
            this.membership = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (this.key == "Deactivated") {
        this.approvedMember = false;
        this.deactivateMember = true;
        this.declineMember = false;
        this.pendingMember = false;
        axios
          .get("organizations/members/unactive", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            this.prepPagination(response.data);
            this.membership = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
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

    loadMembership(page = 1) {
      axios
        .get("organizations/members/requests/get" + "?page=" + page, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.membership = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async approveMember(data) {
      this.$Progress.start();
      await axios
        .get("organizations/members/requests/approve/" + data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.$Progress.finish();
          this.loadMembership();
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
    },

    async DeclineMember(data) {
      this.$Progress.start();
      await axios 
        .get("organizations/members/requests/decline/" + data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.$Progress.finish();
          this.loadMembership();
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
    },

    async activateMember(data) {
      this.$Progress.start();
      await axios
        .get("organizations/members/activate/" + data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.$Progress.finish();
          this.loadMembership();
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
    },

    async DeactivateMember(data) {
      this.$Progress.start();
      await axios
        .get("organizations/members/deactivate/" + data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.$Progress.finish();
          this.loadMembership();
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
    },
  },

  mounted() {
    this.loadMembership();
    window.scrollTo(0, 0);
  },
};
</script>
