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
                    <h3>Edit Profile</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Profile Details-->
        <div class="row pd-section secForm editProfileDetail">
          <div class="col-lg-6 mt-3">
            <form>
              <div class="row justify-content-center">
                <div class="col-lg-12 text-center mb-4">
                  <h4>Change Profile Picture</h4>
                  <div class="profile-img-area">
                    <img v-if="!user.details.image" src="@/assets/img/dp.jpg" />
                    <img
                      v-else
                      :src="this.baseURL + user.details.image"
                      alt="Profile Picture"
                    />
                  </div>
                  <form @submit.prevent="upload_image()">
                    <label
                      class="custom-file-upload"
                      title="Upload Profile Picture"
                    >
                      <input type="file" @change="onFileChange" />
                      <i class="bi bi-upload"></i>
                    </label>
                    <button
                      class="deleteProfilePic"
                      style="background-color: #a01cfc"
                      type="submit"
                    >
                      <i class="bi bi-upload"></i> Upload
                    </button>
                  </form>
                </div>
                <hr />
                <form @submit.prevent="update_profile()">
                  <h4>Update Profile</h4>
                  <hr />
                  <div class="col-12 mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      class="input"
                      v-model="firstname"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      class="input"
                      v-model="lastname"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      class="input"
                      v-model="phone"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <!--Button-->
                  <div class="col-12 text-center mb-3">
                    <button
                      v-if="$wait.is('processing')"
                      type="submit"
                      class="button"
                    >
                      Profile Updating...
                    </button>
                    <button v-else type="submit" class="button">
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </form>
          </div>
          <div class="col-lg-6 mt-3">
            <form>
              <div class="row justify-content-center">
                <h4>Change Password</h4>
                <hr />
                <form @submit.prevent="update_password()">
                  <!--New Password-->
                  <div class="col-12 mb-3">
                    <label>New Password</label>
                    <input
                      type="password"
                      class="input"
                      v-model="new_password"
                      placeholder="Enter New Password"
                    />
                  </div>
                  <!--Confirm New Password-->
                  <div class="col-12 mb-3">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      class="input"
                      v-model="new_password_confirmation"
                      placeholder="Re-Enter Password"
                    />
                  </div>
                  <!--Button-->
                  <div class="col-12 text-center mb-3">
                    <button
                      v-if="$wait.is('processing')"
                      type="submit"
                      class="button"
                    >
                      Password Updating...
                    </button>
                    <button v-else type="submit" class="button">
                      Update Password
                    </button>
                  </div>
                </form>
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
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
  data() {
    return {
      baseURL: axios.defaults.baseURL.slice(0, -5),
      firstname: null,
      lastname: null,
      phone: null,
      avatar: "",
      new_password: null,
      new_password_confirmation: null,
    };
  },

  computed: {
    ...mapGetters(["user"]),
  },

  methods: {
    async upload_image() {
      const fd = new FormData();
      fd.append("avatar", this.avatar);

      this.$Progress.start();

      await axios
        .post("/profile/picture", fd, {
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
        })
        .catch((error) => {
          if (error.response.status == 400) {
            this.$Progress.fail();
            for (let i in error.response.data.errors) {
              this.$notify({
                type: "error",
                title: error.response.data.errors[i][0],
                duration: 5000,
                speed: 1000,
              });
            }
          } else {
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
      this.avatar = e.target.files[0];
    },

    async update_profile() {
      this.$wait.start("processing");
      this.$Progress.start();

      await axios
        .post("profile/individual/update", {
          firstname: this.firstname,
          lastname: this.lastname,
          phone: this.phone,
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
        })
        .catch((error) => {
          if (error.response.status == 400) {
            this.$wait.end("processing");
            this.$Progress.fail();
            for (let i in error.response.data.errors) {
              this.$notify({
                type: "error",
                title: error.response.data.errors[i][0],
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

    async update_password() {
      this.$wait.start("processing");
      this.$Progress.start();

      await axios
        .post("profile/password/update", {
          new_password: this.new_password,
          new_password_confirmation: this.new_password_confirmation,
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
          this.new_password = null;
          this.new_password_confirmation = null;
        })
        .catch((error) => {
          if (error.response.status == 400) {
            this.$wait.end("processing");
            this.$Progress.fail();
            for (let i in error.response.data.errors) {
              this.$notify({
                type: "error",
                title: error.response.data.errors[i][0],
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
  },

  mounted() {
    this.firstname = this.user.details.firstname;
    this.lastname = this.user.details.lastname;
    this.phone = this.user.details.phone;
    window.scrollTo(0, 0);
  },
};
</script>
