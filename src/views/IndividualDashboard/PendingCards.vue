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
                    <h3>Pending Cards</h3>
                    <p>
                      <router-link to="/individual-dashboard/id-card-management"
                        ><a
                          ><i class="bi bi-arrow-left"></i> ID Card
                          Management</a
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
          <div class="col-lg-11 filterSelect">
            <select @change="onChange($event)" v-model="key">
              <option>Filter</option>
              <option value="Individual">Individual</option>
              <option value="Organization">Organization</option>
            </select>
          </div>

          <div v-if="organization" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">ID Number</th>
                          <th scope="col">Name</th>
                          <th scope="col">Issued Date</th>
                          <th scope="col">Role</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody
                        v-if="!mypendingorgidcards || !mypendingorgidcards.length"
                      >
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="7">
                            No Pending ID Card From Organization.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in mypendingorgidcards"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.created_by_individual.id_card_number }}</td>
                          <td>{{ row.name }}</td>
                          <td>{{ row.issued_date }}</td>
                          <td>{{ row.role }}</td>
                          <td>
                            <a class="a-pending">{{ row.status }}</a>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                @click="approveIDCard(row.id)"
                                title="Approve"
                                class="action_btn"
                              >
                                <i class="bi bi-patch-check"></i>
                              </a>

                              <a
                                href="javascript:void(0)"
                                @click="declineIDCard(row.id)"
                                title="Decline"
                                class="action_btn"
                              >
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
          <div v-if="individual" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">ID Number</th>
                          <th scope="col">Name</th>
                          <th scope="col">Issued Date</th>
                          <th scope="col">Role</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody
                        v-if="!mypendingidcards || !mypendingidcards.length"
                      >
                        <tr v-if="loading" >
                          <td colspan="6">
                            <div style="text-align: center"  class="fa-3x">
                                <i class="fas fa-spinner fa-spin"></i>
                            </div>
                          </td>
                        </tr>
                        <tr v-else>
                          <td class="align-enter text-dark font-13" colspan="6">
                            No Pending ID Card.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in mypendingidcards"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.created_by_individual.id_card_number }}</td>
                          <td>{{ row.name }}</td>
                          <td>{{ row.issued_date }}</td>
                          <td>{{ row.role }}</td>
                          <td>
                            <a class="a-pending">{{ row.status }}</a>
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
      mypendingidcards: [],
      mypendingorgidcards: [],
      organization: false,
      individual: true,
      key: "Filter",
      loading: false
    };
  },

  methods: {
    onChange(event) {
      if (this.key == "Individual") {
        this.organization = false;
        this.individual = true;
      }

      if (this.key == "Organization") {
        this.individual = false;
        this.organization = true;
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

    loadIndPendingCard(page = 1) {
      this.loading = true;
      axios
        .get(
          "id-card-management/pending/id-card/individual" + "?page=" + page,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          this.loading = false;
          this.prepPagination(response.data);
          this.mypendingidcards = response.data.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },

    loadingOrgPendingCard(page =1) {
      axios
        .get("id-card-management/pending/id-card/organization", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.mypendingorgidcards = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async approveIDCard(data) {
      this.$Progress.start();
      await axios
        .post(
          "id-card-management/process/id-card/organization/" + data,
          {
            status: "Approved",
          },

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
          this.loadIndPendingCard();
          this.loadingOrgPendingCard();
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

    async declineIDCard(data) {
      this.$Progress.start();
      await axios
        .post(
          "id-card-management/process/id-card/organization/" + data,
          {
            status: "Declined",
          },
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
          this.loadIndPendingCard();
          this.loadingOrgPendingCard();
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
    this.loadIndPendingCard();
    this.loadingOrgPendingCard();
    window.scrollTo(0, 0);
  },
};
</script>
