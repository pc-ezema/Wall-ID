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
                    <h3>Active Users</h3>
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
            <h5>All active users</h5>
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
                          <th scope="col">S/N</th>
                          <th scope="col">ID Number</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Type</th>
                          <th scope="col">Username</th>
                          <th scope="col">Date Created</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!users || !users.length">
                        <tr v-if="loading" >
                          <td colspan="9">
                            <div style="text-align: center"  class="fa-3x">
                                <i class="fas fa-spinner fa-spin"></i>
                            </div>
                          </td>
                        </tr>
                        <tr v-else>
                          <td class="align-enter text-dark font-13" colspan="9">
                            No Active Users
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr v-for="(row, index) in users" v-bind:key="index">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.details.id_card_number }}</td>
                          <td>
                            <span v-if="row.details.name">
                              {{ row.details.name }}
                            </span>
                            <span v-else>
                              {{ row.details.firstname }}
                              {{ row.details.lastname }}
                            </span>
                          </td>
                          <td>{{ row.email }}</td>
                          <td>{{ row.type }}</td>
                          <td>{{ row.username }}</td>
                          <td>
                            {{
                              new Date(row.details.created_at).toLocaleString()
                            }}
                          </td>
                          <td>
                            <a
                              v-if="row.status == 'active'"
                              href="#"
                              class="status_btn"
                              >{{ row.status }}</a
                            >
                            <a
                              v-if="row.status == 'suspended'"
                              href="#"
                              class="status_btn yellow_btn"
                              >{{ row.status }}</a
                            >
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                data-toggle="modal"
                                data-target="#suspendConfirmationModal"
                                @click="sendInfo(row)"
                                class="action_btn"
                                style="width: auto; background: red; color: #fff; padding: 0px 5px;"
                              >
                                Suspend
                              </a>
                              <a
                                href="javascript:void(0)"
                                data-toggle="modal"
                                data-target="#sendMessage"
                                @click="sendInfo(row)"
                                class="action_btn"
                                style="width: auto; background: blue; color: #fff; padding: 0px 5px; margin-left: 1rem;"
                              >
                                Send Message
                              </a>
                              <!-- <a href="#" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a> -->
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
    id="suspendConfirmationModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content viewCardModal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabelTitle">
            Suspend Account
          </h5>
          <button
            type="button"
            class="btn close"
            id="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body eventCategoryForm">
          <p v-if="this.selected.type == 'organization'">
            Are you sure you want to suspend
            {{ this.selected.orgname }} Account?
          </p>
          <p v-if="this.selected.type == 'individual'">
            Are you sure you want to suspend
            {{ this.selected.indname }} Account?
          </p>
        </div>
        <div class="modal-footer eventCategoryForm">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <form @submit.prevent="doAction(this.selected.id, 'suspended')">
            <button
              type="submit"
              class="btn"
              style="background-color: red !important; color: white"
            >
              Suspend
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="sendMessage"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content viewCardModal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            Send Message
          </h5>
          <button
            type="button"
            class="close"
            id="closeMessage"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body eventCategoryForm">
          <form @submit.prevent="sendMessage(selected.id)">
            <div class="row">
              <div class="col-lg-12">
                <input
                  type="text"
                  v-model="form.subject"
                  class="input"
                  placeholder="Subject"
                />
              </div>
              <div class="col-lg-12">
                <textarea
                  cols="30"
                  v-model="form.message"
                  rows="5"
                  class="input"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="col-lg-12 text-center">
                <button
                  style="width: 50%"
                  v-if="$wait.is('processing')"
                  type="submit"
                >
                  Sending message...
                </button>
                <button v-else type="submit" @close="showModal = false">
                  Send Message
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
      users: [],
      pagination: {},
      selected: {
        id: null,
        type: null,
        indname: null,
        orgname: null,
      },
      form: {
        subject: null,
        message: null,
      },
      loading: false
    };
  },

  methods: {
    closeModal() {
      document.getElementById("close").click();
    },

    closeMessage() 
    {
      document.getElementById("closeMessage").click();
    },

    loadAllActiveUsers(page = 1) {
      this.loading = true;
      axios
        .get("admin/users/active" + "?page=" + page, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.loading = false;
          this.prepPagination(response.data);
          this.users = response.data.data;
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

    sendInfo(row) {
      this.selected.id = row.id;
      this.selected.type = row.type;
      this.selected.indname =
      row.details.firstname + " " + row.details.lastname;
      this.selected.orgname = row.details.name;
    },

    doAction(id, status) {
      this.$Progress.start();
      axios
        .get("admin/users/" + id + "/" + status, {
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

          this.loadAllActiveUsers();
          this.closeModal();
        })
        .catch((error) => {
          this.$Progress.fail();
          this.$notify({
            type: "error",
            title: error.response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.closeModal();
        });
    },

    async sendMessage(id) {
      this.$wait.start("processing");
      this.$Progress.start();

      await axios
        .post(
          "admin/send/message/" + id,
          {
            subject: this.form.subject,
            message: this.form.message,
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
          this.loadAllActiveUsers();
          this.closeMessage();
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
            this.closeMessage();
          } else {
            this.$wait.end("processing");
            this.$Progress.fail();
            this.$notify({
              type: "error",
              title: error.response.data.message,
              duration: 5000,
              speed: 1000,
            });
            this.closeMessage();
          }
        });
    },
  },

  mounted() {
    this.loadAllActiveUsers();
    window.scrollTo(0, 0);
  },
};
</script>
