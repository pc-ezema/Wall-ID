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
                    <h3>View Verifier</h3>
                    <p>
                      <router-link to="/organisation-dashboard/verification"
                        ><a
                          ><i class="bi bi-arrow-left"></i> Verification</a
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
            <h5>All verifiers</h5>
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
                          <th scope="col">Request Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!myVerifiers || !myVerifiers.length">
                        <tr v-if="loading" >
                          <td colspan="7">
                            <div style="text-align: center"  class="fa-3x">
                                <i class="fas fa-spinner fa-spin"></i>
                            </div>
                          </td>
                        </tr>
                        <tr v-else>
                          <td class="align-center text-dark font-13" colspan="7">
                            No Verifiers.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in myVerifiers"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.name }}</td>
                          <td>{{ row.created_by_individual.phone }}</td>
                          <td>{{ row.role }}</td>
                          <td>{{ getDate(row.created_at) }}</td>
                          <td>
                            <a class="tbl-btn btn-enable">{{ row.status }}</a>
                          </td>
                          <td>
                            <button
                              data-toggle="modal"
                              data-target="#modalView"
                              @click="sendInfo(row)"
                              class="tbl-btn btn-enable"
                            >
                              Assign Event
                            </button>
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
          <h5 class="modal-title" id="exampleModalLongTitle">Assign Event</h5>
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
          <form @submit.prevent="assignEvent(this.selectedVerifier.id)">
            <div class="row">
              <div class="col-lg-12">
                <label>Select Event</label>
                <select class="input" v-model="unique_id">
                  <option>Choose Event</option>
                  <option
                    v-for="uniqueid in event_id"
                    :key="uniqueid.id"
                    :value="uniqueid.unique_id"
                  >
                    {{ uniqueid.unique_id }} - {{ uniqueid.name}}
                  </option>
                </select>
              </div>
              <div class="col-lg-12 text-center">
                <button
                  style="width: 50%; background-color: #8604e2 !important;"
                  v-if="$wait.is('processing')"
                  type="submit"
                  class="tbl-btn btn-enable"
                >
                  Assigning Event...
                </button>
                <button v-else type="submit" class="tbl-btn btn-enable" style="width: 50%; background-color: #8604e2 !important;">
                  Assign Event
                </button>
              </div>
            </div>
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
      pagination: {},
      myVerifiers: [],
      selectedVerifier: {},
      unique_id: "Choose Event ID",
      event_id: [],
      loading: false
    };
  },

  methods: {
    getDate(value) {
      return new Date(value).toLocaleDateString("en-US");
    },

    loadAllEventID() 
    {
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

    closeModal() {
      document.getElementById("close").click();
    },

    prepPagination(data) 
    {
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

    Verifiers() 
    {
      this.loading = true;
      axios
        .get("verificaton/organization/verifiers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.loading = false;
          this.prepPagination(response.data);
          this.myVerifiers = response.data.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },

    sendInfo(row) {
      this.selectedVerifier = row
    },

    async assignEvent(id)
    {
      this.$wait.start("processing");
      this.$Progress.start();

      await axios
        .post(
          "verificaton/organization/assign/event/" + id,
          {
            event_id: this.unique_id
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
          this.closeModal();
          this.loadAllEventID();
          this.Verifiers();
          setTimeout(() => {
            this.$router.push(
              "/organisation-dashboard/event-verifier"
            );
          }, 1000);
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
    }
  },

  mounted() {
    this.loadAllEventID();
    this.Verifiers();
    window.scrollTo(0, 0);
  },
};
</script>
