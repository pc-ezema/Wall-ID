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
                    <h3>All Organisation</h3>
                    <p>
                      <router-link
                        to="/individual-dashboard/view-verification-request"
                        ><a
                          ><i class="bi bi-arrow-left"></i> View Requests</a
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
        <div class="row justify-content-center mt-1 secForm">
          <div class="col-lg-11 mt-3">
            <div class="row">
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <label class="mb-1">Search for organisation</label>
                    <input
                      type="text"
                      v-model="searchQuery"
                      class="input searchInput"
                      placeholder="Search for organisation with Email, Name, Username and WallID Number"
                    />
                  </div>
                </div>
              </form>
              <div v-if="loading" style="text-align: center" class="fa-3x">
                  <i class="fas fa-spinner fa-spin"></i>
              </div>
              <div v-else class="mb-2" v-for="row in resultQuery" v-bind:key="row.id">
                <router-link
                  :to="
                    '/individual-dashboard/organisation-verifier/' +
                    row.username +
                    '/' +
                    row.details.id
                  "
                >
                  <div class="resultDivDisplay">
                    <div class="resultPicture">
                      <div class="pictureDiv">
                        <img
                          v-if="row.details.image"
                          v-bind:src="this.baseURL + row.details.image"
                          alt="Profile Picture"
                        />
                        <div v-else class="profilePicture">
                            {{row.details.name.substring(0, 1)}}
                        </div>
                      </div>
                    </div>
                    <div class="resultContent">
                      <p>Name</p>
                      <h5>{{ row.details.name }}</h5>
                      <p>Email</p>
                      <h5>{{ row.email }}</h5>
                    </div>
                    <div class="clear"></div>
                  </div>
                </router-link>
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
      pagination: "",
      search: [],
      searchQuery: null,
      loading: false,
      baseURL: axios.defaults.baseURL.slice(0, -5),
      user: JSON.parse(localStorage.getItem('user')) || [],
    };
  },

  computed: {
    resultQuery() {
      if (this.searchQuery) {
        const value= this.searchQuery.charAt(0).toUpperCase() + this.searchQuery.slice(1);
        return this.search.filter(function(row){
          return row.email.indexOf(value) > -1 ||
                row.details.name.indexOf(value) > -1 ||
                row.details.id_card_number.indexOf(value) > -1 ||
                row.username.indexOf(value) > -1
        })
      } else {
        return this.search;
      }
    },
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

    loadOrganizations(page = 1) {
      this.loading = true;
      axios
        .get("users/organization/get", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.loading = false;
          this.prepPagination(response.data);
          this.search = response.data.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
  },

  mounted() {
    this.loadOrganizations();
    window.scrollTo(0, 0);
  },
};
</script>
