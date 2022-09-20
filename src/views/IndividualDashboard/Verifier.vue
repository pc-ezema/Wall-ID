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
                    <h3>Verifier</h3>
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
          <div class="col-lg-11 mt-3">
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
                      <tbody v-if="!myVerifier || !myVerifier.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="6">
                            No Verifier.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in myVerifier"
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
      myVerifier: []
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

    Verifier() {
      axios
        .get("verificaton/verifier", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.myVerifier = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },

  mounted() {
    this.Verifier();
    window.scrollTo(0, 0);
  },
};
</script>
