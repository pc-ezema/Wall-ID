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
                    <h3>Ticket Payment</h3>
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
            <h5>All ticket payment</h5>
          </div>
          <div class="col-lg-11 filterSelect">
            <input type="text" placeholder="Search..." />
          </div>
          <div class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">Ticket ID</th>
                          <th scope="col">Payee Name</th>
                          <th scope="col">Event ID</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Reference</th>
                          <th scope="col">Fee</th>
                          <th scope="col">Channel</th>
                          <th scope="col">IP Address</th>
                        </tr>
                      </thead>
                      <tbody v-if="!tickets || !tickets.length">
                        <tr v-if="loading" >
                          <td colspan="8">
                            <div style="text-align: center"  class="fa-3x">
                                <i class="fas fa-spinner fa-spin"></i>
                            </div>
                          </td>
                        </tr>
                        <tr v-else>
                          <td class="align-enter text-dark font-13" colspan="8">
                            No Ticket Payment
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr v-for="(row, index) in tickets" v-bind:key="index">
                          <th scope="row">{{ row.id }}</th>
                          <td>
                            <span v-if="row.user.type == 'individual'">{{
                              row.user.details.firstname +
                              " " +
                              row.user.details.lastname
                            }}</span>
                            <span v-if="row.user.type == 'organization'">{{
                              row.user.details.name
                            }}</span>
                          </td>
                          <td>
                            <router-link>
                              {{ row.event.id }}
                            </router-link>
                          </td>
                          <td>{{ row.payment.amount }}</td>
                          <td>{{ row.payment.reference }}</td>
                          <td>{{ row.payment.fees }}</td>
                          <td>{{ row.payment.channel }}</td>
                          <td>{{ row.payment.ip_address }}</td>
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
      tickets: [],
      pagination: {},
      loading: false
    };
  },

  methods: {
    loadAllTicketPayments(page = 1) {
      this.loading = true;
      axios
        .get("admin/payments/tickets" + "?page=" + page, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.loading = false;
          this.prepPagination(response.data);
          this.tickets = response.data.data;
        })
        .catch((error) => {
          this.loading = false;
          this.$notify({
            type: "error",
            title: error.response.data.message,
            duration: 5000,
            speed: 1000,
          });
        });
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
  },

  mounted() {
    this.loadAllTicketPayments();
    window.scrollTo(0, 0);
  },
};
</script>
