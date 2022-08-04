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
                    <h3>Create Template</h3>
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
          <div class="col-lg-11">
            <div class="id-card-wrapper">
              <div class="id-card">
                <div class="id-card-header" style="background-color: #8604e2;">
                  <div class="header">
                    <img src="https://via.placeholder.com/20x20" /> Organization
                    Name
                  </div>
                </div>
                <div class="profile-row" style="background-color: #8604e2; filter: brightness(90%);">
                  <div class="dp">
                    <div class="dp-arc-outer"></div>
                    <div class="dp-arc-inner"></div>
                    <img src="https://via.placeholder.com/420x420" />
                  </div>
                  <div class="desc" style="padding-top: initial">
                    <div style="">
                      <span>Holder's Name</span>
                      <p></p>
                      <span>Job Role</span>
                      <p></p>
                      <span>ID No</span>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="id-card-footer" style="background-color: #8604e2;">
                  <p style="color: #fff">Join Date:</p>
                </div>
              </div>
            </div>
            <form class="formCardTemp mt-3" @submit.prevent="createTemplate()">
              <div class="row">
                <div class="col-lg-12 mb-4">
                  <label>Background Color</label>
                  <input
                    type="color"
                    v-model="template.background_color"
                    class="inputColor"
                  />
                </div>
                <div class="col-lg-12 mb-4">
                  <label>Text Color</label>
                  <input
                    type="color"
                    v-model="template.text_color"
                    class="inputColor"
                  />
                </div>
                <div class="col-lg-12">
                  <label>Role</label>
                  <input
                    type="text"
                    v-model="template.role"
                    placeholder="Select the role that belong to this template"
                    class="input"
                  />
                  <!-- <select class="input" v-model="template.role">
                    <option hidden>Choose a Role</option>
                    <option
                      v-for="role in membersrole"
                      :key="role.id"
                      :value="role.id"
                    >
                      {{ role.role }}
                    </option>
                  </select> -->
                </div>
                <div class="col-lg-12 mb-2">
                  <label>Logo</label>
                  <input
                    type="file"
                    @change="onFileChange"
                    accept="jpg, jpeg, png, jfif"
                    class="input"
                  />
                </div>
                <div class="col-lg-12">
                  <button type="submit">Create Template</button>
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
      template: {
        background_color: "",
        text_color: "",
        role: "",
        membersrole: []
      },
      logo: "",
    };
  },

  methods: {
    loadMembership() {
      axios
        .get("organizations/members/active", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.membersrole = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async createTemplate() {
      const fd = new FormData();
      fd.append("background_color", this.template.background_color.slice(1));
      fd.append("text_color", this.template.text_color.slice(1));
      fd.append("role", this.template.role);
      fd.append("logo", this.logo);

      this.$Progress.start();

      await axios
        .post("id-card/templates/add", fd, {
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
          setTimeout(() => {
            this.$router.push("/organisation-dashboard/created-template");
          }, 800);
        })
        .catch((error) => {
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
      this.logo = e.target.files[0];
    },
  },

  created() {
    this.loadMembership();
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.id-card-wrapper {
  width: 430px;
}
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
  width: 50px;
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
  color: #fff;
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
