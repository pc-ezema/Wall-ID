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
                    <h3>All Organisations</h3>
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
            <h5>All Organisations list</h5>
          </div>
          <div class="col-lg-11 filterSelect">
            <input
              type="text"
              class="input searchInput"
              style="width: 100%"
              placeholder="Search..."
            />
            <!-- <select>
                            <option hidden>Filter</option>
                            <option>Activated</option>
                            <option>Suspended</option>
                        </select> -->
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
                          <th scope="col">ID Card Number</th>
                          <th scope="col">Name</th>
                          <th scope="col">Date Created</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!organizations || !organizations.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="9">
                            No Registered Organization
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr
                          v-for="(row, index) in organizations"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.id_card_number }}</td>
                          <td>{{ row.name }}</td>
                          <td>
                            {{ new Date(row.created_at).toLocaleString() }}
                          </td>
                          <td>
                            <a
                              v-if="row.status == 1"
                              href="#"
                              class="status_btn"
                              >Active</a
                            >
                            <a
                              v-if="row.status == 0"
                              href="#"
                              class="status_btn yellow_btn"
                              >Suspended</a
                            >
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                v-if="row.status == 0"
                                href="javascript:void(0)"
                                title="Activate Account"
                                class="action_btn"
                                @click="doAction(row.id, 1)"
                              >
                                <i class="bi bi-file-check"></i>
                              </a>
                              <a
                                v-if="row.status == 1"
                                href="javascript:void(0)"
                                @click="doAction(row.id, 0)"
                                title="Suspend Account"
                                class="action_btn"
                              >
                                <i
                                  class="bi bi-file-excel"
                                  style="color: red"
                                ></i>
                              </a>
                              <!-- <a href="#" title="View" class="action_btn"> <i class="bi bi-eye-fill"></i> </a>
                                                        <a href="#" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a> -->
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
      organizations: [],
      pagination: {},
      all: true,
      active: false,
      suspended: false,
      key: "Filter",
      status: null,
    };
  },

  methods: {
    loadAllOrganizations(page = 1) {
      axios
        .get("admin/organizations" + "?page=" + page, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.organizations = response.data.data;
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

    confirmAction(status, id) {
      this.$confirm({
        message: `Are you sure you want to ${status} this User?`,
        button: {
          no: "No",
          yes: "Yes",
        },
        callback: (confirm) => {
          if (confirm) {
            let st = status == "Activate" ? "active" : "suspended";
            this.doAction(id, st);
          }
        },
      });
    },

    doAction(id, status) {
      this.$Progress.start();
      axios
        .get("admin/organizations/" + id + "/" + status, {
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

          this.loadAllUsers();
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

  created() {
    this.loadAllOrganizations();
  },

  mounted() {
    this.loadAllOrganizations();

    window.scrollTo(0, 0);
  },
};
</script>
