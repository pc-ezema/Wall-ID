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
                    <h3>Create Card</h3>
                    <p>
                      <router-link to="/organisation-dashboard/add-card"
                        ><a
                          ><i class="bi bi-arrow-left"></i> Search Member</a
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
              {{ individual.individual.firstname }}
              {{ individual.individual.lastname }} details
            </h5>
          </div>
          <div class="col-lg-11 mt-3">
            <form @submit.prevent="createCard()">
              <div class="row justify-content-center">
                <!--Name-->
                <div class="col-lg-6 mb-3">
                  <label>Full Name</label>
                  <input
                    type="text"
                    class="input"
                    :value="
                      individual.individual.firstname +
                      ' ' +
                      individual.individual.lastname
                    "
                    placeholder="Enter name"
                    readonly
                  />
                </div>
                <!--Username-->
                <div class="col-lg-6 mb-3">
                  <label>Username</label>
                  <input
                    type="text"
                    class="input"
                    :value="individual.individual.user.name"
                    placeholder="Enter username"
                    readonly
                  />
                </div>
                <!--Phone number-->
                <div class="col-lg-6 mb-3">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    class="input"
                    :value="individual.individual.phone"
                    placeholder="Enter phone number"
                    readonly
                  />
                </div>
                <!--Date joined-->
                <div class="col-lg-6 mb-3">
                  <label>Date Joined</label>
                  <input
                    type="text"
                    class="input"
                    :value="individual.created_at"
                    placeholder="Enter username"
                    readonly
                  />
                </div>
                <!--Passport-->
                <div class="col-12 mb-3">
                  <label>Passport</label>
                  <input type="file" class="input" @change="onFileChange" />
                </div>
                <!--Button-->
                <div class="col-lg-3 text-center mb-3">
                  <button
                    v-if="$wait.is('processing')"
                    type="button"
                    class="button"
                  >
                    Creating Card...
                  </button>
                  <button v-else type="submit" class="button">
                    Create Card
                  </button>
                </div>
              </div>
            </form>
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
      individual: {},
      passport: "",
    };
  },

  methods: {
    displayIndividual() {
      let id = this.$route.params.id;

      axios
        .get(
          "organizations/members",
          {
            params: {
              id: id,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          this.individual = response.data.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },

    createCard() {
      let user_id = this.$route.params.user_id;

      const fd = new FormData();
      fd.append("passport", this.passport);
      fd.append("user_id", user_id);

      this.$wait.start("processing");
      this.$Progress.start();

      axios
        .post("id-card-management/organization/create", fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.$wait.end("processing");
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: response.data.message,
            duration: 5000,
            speed: 1000,
          });
          setTimeout(() => {
            this.$router.push("/organisation-dashboard/member-id");
          }, 6000);
        })
        .catch((error) => {
          console.log(error);

          if (error.response.status == 401) {
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
          } else {
            this.$wait.end("processing");
            this.$Progress.fail();
            this.$notify({
              type: "error",
              title: error.response.data.message,
              duration: 5000,
              speed: 1000,
            });
          }
        });
    },

    onFileChange(e) {
      this.passport = e.target.files[0];
    },
  },

  created() {
    this.displayIndividual();
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
