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
                    <h3>Membership & Subscription History</h3>
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
            <h5>All your active/past membership & subscription</h5>
          </div>
          <div class="col-lg-11 filterSelect">
            <select @change="onChange($event)" v-model="key">
              <option>Filter</option>
              <option value="Active">Active</option>
              <option value="Past">Past</option>
            </select>
          </div>
          <div v-if="active" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Plan Name</th>
                          <th scope="col">Plan Validity</th>
                          <th scope="col">Start Date</th>
                          <th scope="col">Expiry Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!memberactivesubscriptions || !memberactivesubscriptions.length">
                        <tr v-if="loading" >
                          <td colspan="8">
                            <div style="text-align: center"  class="fa-3x">
                                <i class="fas fa-spinner fa-spin"></i>
                            </div>
                          </td>
                        </tr>
                        <tr v-else>
                          <td class="align-enter text-dark font-13" colspan="7">
                            No Active Subscription
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr v-for="(row, index) in memberactivesubscriptions" v-bind:key="index">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.individual.firstname }} {{ row.individual.lastname }}</td>
                          <td>{{ row.subscription_plan.name }}</td>
                          <td>
                            <div v-if="row.subscription_plan.validity == '1'">Daily</div>
                            <div v-if="row.subscription_plan.validity == '7'">Weekly</div>
                            <div v-if="row.subscription_plan.validity == '30'">Monthly</div>
                            <div v-if="row.subscription_plan.validity == '90'">Quarterly</div>
                            <div v-if="row.subscription_plan.validity == '180'">Semi Annually</div>
                            <div v-if="row.subscription_plan.validity == '365'">Annually</div>
                            <div v-if="row.subscription_plan.validity == '730'">Biennially</div>
                            <div v-if="row.subscription_plan.validity == '1095'">Triennially</div>
                          </td>
                          <td>
                            {{ new Date(row.created_at).toLocaleString() }}
                          </td>
                          <td>
                            {{ new Date(row.expiry_date).toLocaleString() }}
                          </td>
                          <td>
                            <a class="a-pending">{{ row.status }}</a>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                data-toggle="modal"
                                data-target="#modalView"
                                @click="showPaymentDetails(row.payment)"
                                title="View Payment Details"
                                class="action_btn"
                              >
                                <i class="bi bi-credit-card"></i>
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
          <div v-if="past" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Plan Name</th>
                          <th scope="col">Plan Validity</th>
                          <th scope="col">Start Date</th>
                          <th scope="col">Expiry Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!pastsubscriptions || !pastsubscriptions.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="7">
                            No Expired Subscription
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr v-for="(row, index) in pastsubscriptions" v-bind:key="index">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.individual.firstname }} {{ row.individual.lastname }}</td>
                          <td>{{ row.subscription_plan.name }}</td>
                          <td>
                            <div v-if="row.subscription_plan.validity == '1'">Daily</div>
                            <div v-if="row.subscription_plan.validity == '7'">Weekly</div>
                            <div v-if="row.subscription_plan.validity == '30'">Monthly</div>
                            <div v-if="row.subscription_plan.validity == '90'">Quarterly</div>
                            <div v-if="row.subscription_plan.validity == '180'">Semi Annually</div>
                            <div v-if="row.subscription_plan.validity == '365'">Annually</div>
                            <div v-if="row.subscription_plan.validity == '730'">Biennially</div>
                            <div v-if="row.subscription_plan.validity == '1095'">Triennially</div>
                          </td>
                          <td>
                            {{ new Date(row.created_at).toLocaleString() }}
                          </td>
                          <td>
                            {{ new Date(row.expiry_date).toLocaleString() }}
                          </td>
                          <td>
                            <a class="a-pending">{{ row.status }}</a>
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                data-toggle="modal"
                                data-target="#modalView"
                                @click="showPaymentDetails(row.payment)"
                                title="View Payment Details"
                                class="action_btn"
                              >
                                <i class="bi bi-credit-card"></i>
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

  <!--Box 1-->
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
          <h5 class="modal-title" id="exampleModalLongTitle">
            View Payment Details
          </h5>
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
          <div class="view_payment">
            <p><b>ID: </b> {{ payment_details.id }}</p>
            <p><b>Payment Reference: </b> {{ payment_details.reference }}</p>
            <p>
              <b>Subscription ID: </b> {{ payment_details.subscription_id }}
            </p>
            <p><b>Amount: </b> {{ payment_details.amount }}</p>
            <p><b>Payment Channel: </b> {{ payment_details.channel }}</p>
            <p>
              <b>Paid At: </b>
              {{ new Date(payment_details.paid_at).toLocaleString() }}
            </p>
            <p style="float: right">
              <a class="a-approved">{{ payment_details.status }}</a>
            </p>
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
      pagination: "",
      memberactivesubscriptions: [],
      pastsubscriptions: [],
      payment_details: {},
      key: "Filter",
      active: true,
      past: false,
      loading: false
    };
  },

  methods: {
    onChange(event) {
      if (this.key == "Active") {
        this.active = true;
        this.past = false;
      }

      if (this.key == "Past") {
        this.past = true;
        this.active = false;
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

    loadActiveSubscription() {
      this.loading = true;
      axios
        .get("organizations/subscriptions/active", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.loading = false;
          this.prepPagination(response.data);
          this.memberactivesubscriptions = response.data.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },

    loadPastSubscription() {
      axios
        .get("organizations/subscriptions/expired", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.pastsubscriptions = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    showPaymentDetails(data) {
      this.payment_details = data;
    },
  },

  mounted() {
    this.loadActiveSubscription();
    this.loadPastSubscription();
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.view_payment p {
  font-weight: 700;
  color: #000;
}
</style>