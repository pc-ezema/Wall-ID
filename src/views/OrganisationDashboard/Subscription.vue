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
                    <h3>Subscription</h3>
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
            <h5>All Subscription Plans</h5>
          </div>
          <div class="col-lg-11 filterSelect">
            <button
              class="btnCreateEvent"
              data-toggle="modal"
              data-target="#modalAddSubscription"
            >
              Create
            </button>
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
                          <th scope="col">Price</th>
                          <th scope="col">Validity</th>
                          <th scope="col">Description</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody v-if="!Subscriptions || !Subscriptions.length">
                        <tr v-if="loading" >
                          <td colspan="6">
                            <div style="text-align: center"  class="fa-3x">
                                <i class="fas fa-spinner fa-spin"></i>
                            </div>
                          </td>
                        </tr>
                        <tr v-else>
                          <td class="align-enter text-dark font-13" colspan="6">
                            No Subscription Plan
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr
                          v-for="(row, index) in Subscriptions"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.name }}</td>
                          <td>{{ row.price }}</td>
                          <td>
                            <div v-if="row.validity == '1'">Daily</div>
                            <div v-if="row.validity == '7'">Weekly</div>
                            <div v-if="row.validity == '30'">Monthly</div>
                            <div v-if="row.validity == '90'">Quarterly</div>
                            <div v-if="row.validity == '180'">Semi Annually</div>
                            <div v-if="row.validity == '365'">Annually</div>
                            <div v-if="row.validity == '730'">Biennially</div>
                            <div v-if="row.validity == '1095'">Triennially</div>
                          </td>
                          <td>{{ row.description }}</td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                data-toggle="modal"
                                data-target="#editSubscriptionPlan"
                                title="View"
                                class="action_btn"
                                @click="sendInfo(row)"
                              >
                                <i class="bi bi-eye-fill"></i>
                              </a>
                              <a
                                href="javascript:void(0)"
                                data-toggle="modal"
                                data-target="#deleteSubscriptionPlan"
                                title="Delete"
                                class="action_btn"
                                @click="sendInfo(row)"
                              >
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

  <div
    class="modal fade"
    id="modalAddSubscription"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content viewCardModal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            Add Subscription Plan
          </h5>
          <button
            type="button"
            class="close"
            id="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body eventCategoryForm">
          <form @submit.prevent="createSubscriptionPlan()">
            <div class="row">
              <div class="col-lg-12">
                <input
                  type="text"
                  v-model="form.name"
                  class="input"
                  placeholder="Subscription Name"
                />
              </div>
              <div class="col-lg-12">
                <input
                  type="number"
                  v-model="form.price"
                  class="input"
                  placeholder="Susbcription Price"
                />
              </div>
              <div class="col-lg-12">
                <textarea
                  cols="30"
                  v-model="form.description"
                  rows="5"
                  class="input"
                  placeholder="Subscription Description"
                ></textarea>
              </div>
              <div class="col-lg-12">
                <select class="input" v-model="form.validity">
                    <option>Choose Subscription Plan Validity</option>
                    <option value="1">Daily</option>
                    <option value="7">Weekly</option>
                    <option value="30">Monthly</option>
                    <option value="90">Quarterly</option>
                    <option value="180">Semi Annually</option>
                    <option value="365">Annually</option>
                    <option value="730">Biennially</option>
                    <option value="1095">Triennially</option>
                </select>
              </div>
              <div class="col-lg-12 text-center">
                <button
                  style="width: 50%"
                  v-if="$wait.is('processing')"
                  type="submit"
                >
                  Creating Subscription Plan...
                </button>
                <button v-else type="submit" @close="showModal = false">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="editSubscriptionPlan"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content viewCardModal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            Update Subscription Plan
          </h5>
          <button
            type="button"
            class="close"
            id="closeEdit"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body eventCategoryForm">
          <form @submit.prevent="updateSubscriptionPlan()">
            <div class="row">
              <input v-model="selectedSusbscriptionPlan.id" hidden />

              <div class="col-lg-12">
                <input
                  type="text"
                  v-model="selectedSusbscriptionPlan.name"
                  class="input"
                  placeholder="Subscription Name"
                />
              </div>
              <div class="col-lg-12">
                <input
                  type="number"
                  v-model="selectedSusbscriptionPlan.price"
                  class="input"
                  placeholder="Subscription Price"
                />
              </div>
              <div class="col-lg-12">
                <textarea
                  cols="30"
                  v-model="selectedSusbscriptionPlan.description"
                  rows="5"
                  class="input"
                  placeholder="Subscription Description"
                ></textarea>
              </div>
              <div class="col-lg-12">
                <select class="input" v-model="selectedSusbscriptionPlan.validity">
                    <option v-if="selectedSusbscriptionPlan.validity == '1'" :value="selectedSusbscriptionPlan.validity">Daily</option>
                    <option v-if="selectedSusbscriptionPlan.validity == '7'" :value="selectedSusbscriptionPlan.validity">Weekly</option>
                    <option v-if="selectedSusbscriptionPlan.validity == '30'" :value="selectedSusbscriptionPlan.validity">Monthly</option>
                    <option v-if="selectedSusbscriptionPlan.validity == '90'" :value="selectedSusbscriptionPlan.validity">Quarterly</option>
                    <option v-if="selectedSusbscriptionPlan.validity == '180'" :value="selectedSusbscriptionPlan.validity">Semi Annually</option>
                    <option v-if="selectedSusbscriptionPlan.validity == '365'" :value="selectedSusbscriptionPlan.validity">Annually</option>
                    <option v-if="selectedSusbscriptionPlan.validity == '730'" :value="selectedSusbscriptionPlan.validity">Biennially</option>
                    <option v-if="selectedSusbscriptionPlan.validity == '1095'" :value="selectedSusbscriptionPlan.validity">Triennially</option>
                    <option>Choose Subscription Plan Validity</option>
                    <option value="1">Daily</option>
                    <option value="7">Weekly</option>
                    <option value="30">Monthly</option>
                    <option value="90">Quarterly</option>
                    <option value="180">Semi Annually</option>
                    <option value="365">Annually</option>
                    <option value="730">Biennially</option>
                    <option value="1095">Triennially</option>
                </select>
              </div>
              <div class="col-lg-12 text-center">
                <button
                  style="width: 50%"
                  v-if="$wait.is('processing')"
                  type="submit"
                >
                  Updating Subscription Plan...
                </button>
                <button v-else type="submit">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="deleteSubscriptionPlan"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content viewCardModal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabelTitle">
            Delete Subscription Plan
          </h5>
          <button
            type="button"
            class="close"
            id="closeDelete"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body eventCategoryForm">
          <p>Are you sure you want to delete this subscription plan?</p>
        </div>
        <div class="modal-footer eventCategoryForm">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <form
            @submit.prevent="
              deleteSubscriptionPlan(this.selectedSusbscriptionPlan.id)
            "
          >
            <button
              type="submit"
              style="background-color: red !important; color: white"
            >
              Delete
            </button>
          </form>
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
      Subscriptions: [],
      pagination: {},
      form: {
        name: null,
        price: null,
        description: null,
        validity: "Choose Subscription Plan Validity",
      },
      selectedSusbscriptionPlan: {
        id: null,
        name: null,
        price: null,
        description: null,
        validity: null,
      },
      loading: false
    };
  },

  methods: {
    closeModal() {
      document.getElementById("close").click();
    },

    closeEdit() {
      document.getElementById("closeEdit").click();
    },

    closeDelete() {
      document.getElementById("closeDelete").click();
    },

    loadAllSubscription() 
    {
      this.loading = true;
      axios
        .get("organizations/subscriptions/plans", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.loading = false;
          this.Subscriptions = response.data.data;
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

    async createSubscriptionPlan() {
      this.$wait.start("processing");
      this.$Progress.start();

      await axios
        .post(
          "organizations/subscriptions/plans/store",
          {
            name: this.form.name,
            price: this.form.price,
            description: this.form.description,
            validity: this.form.validity,
          },

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          this.$wait.end("processing");
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.loadAllSubscription();
          this.closeModal();
        })
        .catch((error) => {
          if (error.response.status == 422) {
            this.$wait.end("processing");
            this.$Progress.fail();
            for (let i in error.response.data.error) {
              this.$notify({
                type: "error",
                title: error.response.data.error[i][0],
                duration: 5000,
                speed: 1000,
              });
            }
            this.closeModal();
          } else {
            this.$wait.end("processing");
            this.$Progress.fail();
            this.$notify({
              type: "error",
              title: error.response.data.message,
              duration: 5000,
              speed: 1000,
            });
            this.closeModal();
          }
        });
    },

    sendInfo(row) {
      this.selectedSusbscriptionPlan.id = row.id;
      this.selectedSusbscriptionPlan.name = row.name;
      this.selectedSusbscriptionPlan.price = row.price;
      this.selectedSusbscriptionPlan.description = row.description;
      this.selectedSusbscriptionPlan.validity = row.validity;
    },

    async updateSubscriptionPlan() 
    {
      
      this.$wait.start("processing");
      this.$Progress.start();

      await axios
        .put(
          "organizations/subscriptions/plans/update/" +
            this.selectedSusbscriptionPlan.id,
          {
            name: this.selectedSusbscriptionPlan.name,
            price: this.selectedSusbscriptionPlan.price,
            description: this.selectedSusbscriptionPlan.description,
            // validity: this.selectedSusbscriptionPlan.validity
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          this.$wait.end("processing");
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.loadAllSubscription();
          this.closeEdit();
        })
        .catch((error) => {
          if (error.response.status == 422) {
            this.$wait.end("processing");
            this.$Progress.fail();
            for (let i in error.response.data.error) {
              this.$notify({
                type: "error",
                title: error.response.data.error[i][0],
                duration: 5000,
                speed: 1000,
              });
            }
            this.closeEdit();
          } else {
            this.$wait.end("processing");
            this.$Progress.fail();
            this.$notify({
              type: "error",
              title: error.response.data.message,
              duration: 5000,
              speed: 1000,
            });
            this.closeEdit();
          }
        });
    },

    async deleteSubscriptionPlan(data) {
      this.$Progress.start();
      await axios
        .delete("organizations/subscriptions/plans/delete/" + data, {
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
          this.loadAllSubscription();
          this.closeDelete();
        })
        .catch((error) => {
          this.$Progress.fail();
          this.$notify({
            type: "error",
            title: error.response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.closeDelete();
        });
    },
  },

  mounted() {
    this.loadAllSubscription();
    window.scrollTo(0, 0);
  },
};
</script>
