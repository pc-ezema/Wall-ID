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
                    <h3>Created Template</h3>
                    <p>
                      <router-link
                        to="/organisation-dashboard/id-card-management"
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
          <div class="col-lg-11 secFormHead">
            <h5>
              <router-link to="/organisation-dashboard/create-template"
                ><a
                  ><i class="bi bi-plus-circle-fill"></i> Add New Template</a
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
                          <th scope="col">Role</th>
                          <th scope="col">Logo</th>
                          <th scope="col">Card Template</th>
                          <th scope="col">Date Created</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="!template || !template.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="6">
                            No Template Added
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr v-for="(row, index) in template" v-bind:key="index">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.role }}</td>
                          <td><img v-bind:src="this.baseURL + row.path" /></td>
                          <td>
                            <button
                              class="viewCardBtn"
                              data-toggle="modal"
                              data-target="#viewTemplate"
                              @click="sendInfo(row)"
                            >
                              View Card
                            </button>
                          </td>
                          <td>
                            {{ new Date(row.created_at).toLocaleString() }}
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <a
                                href="javascript:void(0)"
                                @click="deleteTemplate(row.id)"
                                title="Delete"
                                class="action_btn"
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

  <!--Box 1-->
  <div
    class="modal fade"
    id="viewTemplate"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content viewCardModal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            ID Card Template
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
          <div class="id-card-wrapper">
            <div
              class="id-card"
              :style="{
                'background-color': this.selectedTemplate.background_color,
              }"
            >
              <div class="id-card-header" :style="{'background-color': this.selectedTemplate.background_color}">
                <div class="header" :style="{color: this.selectedTemplate.text_color + '!important'}">
                  <img
                    v-bind:src="this.baseURL + this.selectedTemplate.cardLogo"
                    />
                  Organization Name
                </div>
              </div>
              <div class="profile-row" :style="{'background-color': this.selectedTemplate.background_color, 'filter': 'brightness(90%)'}">
                <div class="dp">
                  <div class="dp-arc-outer"></div>
                  <div class="dp-arc-inner"></div>
                  <img src="https://via.placeholder.com/420x420" />
                </div>
                <div class="desc" style="padding-top: initial">
                  <div
                    :style="{
                      color: this.selectedTemplate.text_color + '!important',
                    }"
                  >
                    <span>Holder's Name</span>
                    <p
                      :style="{
                        'font-size': '1.1rem !important',
                        color: this.selectedTemplate.text_color + '!important',
                      }"
                    ></p>
                    <span>Job Role</span>
                    <p
                      :style="{
                        color: this.selectedTemplate.text_color + '!important',
                      }"
                    ></p>
                    <span>ID No</span>
                    <p
                      :style="{
                        color: this.selectedTemplate.text_color + '!important',
                      }"
                    ></p>
                  </div>
                </div>
              </div>
              <div class="id-card-footer" :style="{'background-color': this.selectedTemplate.background_color}">
                <p
                  :style="{
                    color: this.selectedTemplate.text_color + '!important',
                  }"
                >
                  Join Date:
                </p>
              </div>
            </div>
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
  mounted() {
    this.loadMyTemplate();
    window.scrollTo(0, 0);
  },

  data() {
    return {
      baseURL: axios.defaults.baseURL.slice(0, -5),
      template: [],
      selectedTemplate: {
        id: "",
        background_color: "",
        text_color: "",
        cardLogo: "",
      },
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

    loadMyTemplate() {
      axios
        .get("id-card/templates", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.template = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteTemplate(data) {
      this.$Progress.start();
      axios
        .delete("id-card/templates/delete/" + data, {
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
          this.loadMyTemplate();
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

    sendInfo(row) {
      this.selectedTemplate.id = row.id;
      this.selectedTemplate.background_color = row.background_color;
      this.selectedTemplate.text_color = row.text_color;
      this.selectedTemplate.cardLogo = row.path;
    },
  },

};
</script>

<style scoped>
.id-card {
  position: relative;
  height: 15em;
  flex-basis: 100%;
  max-width: 30em;
  margin: auto;
  /* border: 1px solid #8604e2; */
}

.id-card-header {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 30em;
  height: 4em;
  width: 100%;
  margin: auto;
  color: #fff;
  padding: 1em;
  z-index: 999;
}

.id-card-header .header {
  position: absolute;
  right: 20px;
  font-size: 1.2rem;
}
.id-card-header .header img {
  width: 70px;
  margin-right: 1rem;
  margin-top: -0.5rem;
}
.profile-row {
  display: flex;
  align-items: center;
  padding-top: 3rem;
}
.profile-row .dp {
  flex-basis: 30.3%;
  position: relative;
  margin: 24px 24px 24px 24px;
  align-self: center;
}

.profile-row .dp img {
  max-width: 100%;
  border-radius: 50%;
  display: block;
  /* box-shadow: 0px 0px 4px 3px #fff; */
  border: 5px solid #fff;
}
/* .profile-row .desc {
  padding-top: 4rem;
  flex-basis: 70.6%;
} */

.profile-row .desc span {
  font-size: 10px;
}

.profile-row .desc {
  font-family: "Orbitron", sans-serif;
  color: #000;
  /* letter-spacing: 1px; */
}

.profile-row .desc p {
  font-weight: bolder;
  font-size: 1.1rem !important;
}

.id-card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 30em;
  height: 1.5em;
  width: 100%;
  margin: auto;
  color: #fff;
}
.id-card-footer p {
  position: absolute;
  right: 10px;
}
</style>