<template>
  <DashboardSidebar />

  <TheLoader v-if="showLoading"/>

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
                        to="/individual-dashboard/membership-subscription"
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
            <h5>
              <router-link to="/individual-dashboard/join-new-organisation"
                ><a
                  ><i class="bi bi-plus-circle-fill"></i> Join New
                  Organisation</a
                ></router-link
              >
            </h5>
          </div>
          <div class="col-lg-11 secFormHead">
            <h5>All Membership</h5>
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
                          <th scope="col">Phone</th>
                          <th scope="col">Role</th>
                          <th scope="col">Date Joined</th>
                          <th scope="col">Membership Status</th>
                        </tr>
                      </thead>
                      <tbody v-if="!membership || !membership.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="6">
                            No Joined Memebership
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in membership"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.organization.name }}</td>
                          <td>{{ row.organization.phone }}</td>
                          <td>{{ row.role }}</td>
                          <td>
                            {{ new Date(row.created_at).toLocaleString() }}
                          </td>
                          <td>
                            <div v-if="row.status == 'approved'">
                              <span class="badge" style="background: green">{{
                                row.status
                              }}</span>
                            </div>
                            <div v-else>
                              <span class="badge" style="background: red">{{
                                row.status
                              }}</span>
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
import TheLoader from '../TheLoader.vue';

import axios from "axios";

export default {
  components: { DashboardSidebar, DashboardNavbar, DashboardFooter, TheLoader },

  data() {
    return {
      pagination: {},
      membership: [],
      showLoading: false
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

    loadMyCard() {
      // this.showLoading = true;
      axios
        .get("individuals/organizations/join-requests", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.membership = response.data.data;
          // this.showLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.loadMyCard();
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
