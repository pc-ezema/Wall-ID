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
                    <h3>Create Event</h3>
                    <p>
                      <router-link to="/organisation-dashboard/event-management"
                        ><a
                          ><i class="bi bi-arrow-left"></i> Event Management</a
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
            <h5>About the event</h5>
          </div>
          <div class="col-lg-11 mt-3">
            <form @submit.prevent="createEvent" enctype="multipart/form-data">
              <div class="row">
                <!--Name-->
                <div class="col-lg-12 mb-3">
                  <label>Event Name</label>
                  <input
                    type="text"
                    class="input"
                    v-model="form.name"
                    placeholder="Enter the name event"
                  />
                  <span style="color: red" v-if="error.name">{{
                    error.name[0]
                  }}</span>
                </div>

                <!--Description-->
                <div class="col-lg-12 mb-3">
                  <label>Description</label>
                  <textarea
                    cols="30"
                    rows="4"
                    v-model="form.description"
                    class="input"
                    placeholder="Write a little note about the event"
                  ></textarea>
                  <span style="color: red" v-if="error.description">{{
                    error.description[0]
                  }}</span>
                </div>
                <!--Event type-->
                <div class="col-lg-6 mb-3">
                  <label>Event Category</label>
                  <select class="input" v-model="form.category_id">
                    <option hidden>Choose Event Category</option>
                    <option
                      v-for="category in categories"
                      :key="category.id"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <span style="color: red" v-if="error.category_id"
                    >The category field is required</span
                  >
                </div>
                <!--Visibility-->
                <div class="col-lg-6 mb-3">
                  <label>Event Type</label>
                  <select class="input" v-model="form.type">
                    <option hidden>Choose Event Visibility</option>
                    <option value="open">Open</option>
                    <option value="semi-open">Semi-opened</option>
                    <option value="close">Closed</option>
                  </select>
                  <span style="color: red" v-if="error.type"
                    >The event type field is required</span
                  >
                </div>
                <!--Add photo of event-->
                <div class="col-lg-12 mb-3">
                  <label>Add Photo of Event</label>
                  <div class="col-ting">
                    <div class="control-group file-upload" id="file-upload1">
                      <div class="image-box text-center">
                        <p>Upload Image</p>
                        <img src="" alt="" />
                      </div>
                      <div class="controls" style="display: none">
                        <input
                          type="file"
                          @change="getEventImg($event)"
                          name="contact_image_1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 subHead">
                  <h5>Location</h5>
                </div>
                <!--Venue-->
                <div class="col-lg-12 mb-3">
                  <label>Venue</label>
                  <input type="text" class="input" v-model="form.venue" />
                  <span style="color: red" v-if="error.venue">{{
                    error.venue[0]
                  }}</span>
                </div>
                <!--Add photo of Venue-->
                <div class="col-lg-12 mb-3">
                  <label>Add Photo of Venue</label>
                  <div class="col-ting">
                    <div class="control-group file-upload" id="file-upload1">
                      <div class="image-box text-center">
                        <p>Upload Image</p>
                        <img src="" alt="" />
                      </div>
                      <div class="controls" style="display: none">
                        <input
                          type="file"
                          @change="getVenueImg($event)"
                          name="contact_image_1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-lg-12 mb-3">
                                    <label>Address</label>
                                    <textarea cols="30" rows="4" v-model="description" class="input" placeholder="Enter the address of the event"></textarea>
                                </div> -->
              </div>
              <div class="row">
                <div class="col-lg-12 subHead">
                  <h5>Time</h5>
                </div>
                <div class="col-lg-6 mb-3">
                  <label>Time (starts)</label>
                  <input type="time" class="input" v-model="form.start_time" />
                  <span style="color: red" v-if="error.start_time">{{
                    error.start_time[0]
                  }}</span>
                </div>
                <div class="col-lg-6 mb-3">
                  <label>Time (ends)</label>
                  <input type="time" class="input" v-model="form.end_time" />
                  <span style="color: red" v-if="error.end_time">{{
                    error.end_time[0]
                  }}</span>
                </div>
                <div class="col-lg-6 mb-3">
                  <label>Date (starts)</label>
                  <input type="date" class="input" v-model="form.start_date" />
                  <span style="color: red" v-if="error.start_date">{{
                    error.start_date[0]
                  }}</span>
                </div>
                <div class="col-lg-6 mb-3">
                  <label>Date (ends)</label>
                  <input type="date" class="input" v-model="form.end_date" />
                  <span style="color: red" v-if="error.end_date">{{
                    error.end_date[0]
                  }}</span>
                </div>
              </div>
              <!-- <div class="col-lg-12 mb-3">
                                <label>Type</label>
                                <input type="text" class="input" placeholder="Enter type" v-model="form.type">
                            </div> -->
              <div class="row">
                <div class="col-lg-12 subHead">
                  <h5>Ticket</h5>
                </div>
                <div class="col-lg-12 mb-3">
                  <label>Accessibility</label>
                  <input
                    type="radio"
                    name="isFree"
                    checked
                    v-model="form.isFree"
                    value="true"
                  />
                  <span class="radioSpan">Free</span>
                  <input
                    type="radio"
                    name="isFree"
                    v-model="form.isFree"
                    value="false"
                  />
                  <span class="radioSpan">Paid</span>
                </div>
                <div class="col-lg-12 mb-3">
                  <label>Number of tickets</label>
                  <input
                    v-model="form.tickets"
                    type="number"
                    class="input"
                    placeholder="Enter no of tickets"
                  />
                  <span style="color: red" v-if="error.tickets"
                    >The ticket number field is required</span
                  >
                </div>
              </div>
              <div class="row" v-if="form.isFree == 'false'">
                <div class="col-lg-12 subHead">
                  <h5>Ticket Categories</h5>
                </div>
                <div class="col-lg-12 mb-3">
                  <label>Price Type</label>
                  <input
                    type="radio"
                    name="priceType"
                    v-model="form.pricing"
                    value="single"
                  />
                  <span class="radioSpan">Single</span>
                  <input
                    type="radio"
                    name="priceType"
                    v-model="form.pricing"
                    value="multiple"
                  />
                  <span class="radioSpan">Multiple</span>
                </div>
                <div v-if="form.pricing === 'multiple'">
                  <div
                    class="row"
                    v-for="(section, index) in form.ticketCategories"
                    v-bind:key="'S' + index"
                    :index="index"
                  >
                    <div class="col-lg-6 mb-3">
                      <label>Ticket Name</label>
                      <input
                        type="text"
                        class="input"
                        v-model="form.ticketCategories[index].name"
                        placeholder="Enter ticket name"
                      />
                    </div>
                    <div class="col-lg-6 mb-3">
                      <label>Price</label>
                      <input
                        type="number"
                        class="input"
                        v-model="form.ticketCategories[index].price"
                        placeholder="Enter price of ticket"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-lg-6 mb-3">
                        <!--          Add Svg Icon-->
                        <svg
                          @click="addField(input, form.ticketCategories)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          class="ml-2 cursor-pointer"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            fill="green"
                            d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                          />
                        </svg>
                        Add
                      </div>
                      <div class="col-lg-6 mb-3">
                        <!--          Remove Svg Icon-->
                        <svg
                          @click="removeField(index, form.ticketCategories)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          class="ml-2 cursor-pointer"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            fill="#EC4899"
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                          />
                        </svg>
                        Remove
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="col-lg-12 mb-3">
                    <label>Price</label>
                    <input
                      type="number"
                      v-model="form.price"
                      class="input"
                      placeholder="Enter price of ticket"
                    />
                  </div>
                </div>
              </div>
              <div class="row justify-content-center mt-2">
                <!--Button-->
                <div class="col-lg-3 text-center mb-3">
                  <button
                    v-if="$wait.is('processing')"
                    disabled
                    type="submit"
                    class="button"
                  >
                    Creating Event...
                  </button>
                  <button v-else type="submit" class="button">
                    Create Event
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
      categories: null,
      accessibility: "free",
      priceType: "single",
      form: {
        id: "",
        name: "",
        type: "",
        venue: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: "",
        tickets: "",
        description: "",
        isFree: true,
        price: 0,
        pricing: "",
        image: null,
        category_id: "",
        venue_image: null,
        ticketCategories: [
          {
            name: "",
            price: 0,
          },
        ],
      },
      error: "",
    };
  },

  methods: {
    addField(value, fieldType) {
      fieldType.push({
        name: "",
        price: 0,
      });
    },

    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },

    getEventImg(e) {
      //this.form.image = event.target.files[0]
      let file = e.target.files[0];
      let reader = new FileReader();

      if (file["size"] < 2111775) {
        reader.onloadend = (file) => {
          //console.log('RESULT', reader.result)
          this.form.image = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert("File size can not be bigger than 2 MB");
      }
    },
    getVenueImg(e) {
      let file = e.target.files[0];
      let reader = new FileReader();

      if (file["size"] < 2111775) {
        reader.onloadend = (file) => {
          //console.log('RESULT', reader.result)
          this.form.venue_image = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert("File size can not be bigger than 2 MB");
      }
    },

    async createEvent() {
      //console.log(this.form.ticketCategories)
      const fd = new FormData();
      fd.append("name", this.form.name);
      fd.append("type", this.form.type);
      fd.append("venue", this.form.venue);
      fd.append("start_date", this.form.start_date);
      fd.append("end_date", this.form.end_date);
      fd.append("start_time", this.form.start_time);
      fd.append("end_time", this.form.end_time);
      fd.append("price", this.form.price);
      fd.append("tickets", this.form.tickets);
      fd.append("description", this.form.description);
      fd.append("isFree", this.form.isFree);
      fd.append("pricing", this.form.pricing);
      fd.append("image", this.form.image);
      fd.append("category_id", this.form.category_id);
      fd.append("venue_image", this.form.venue_image);
      fd.append("ticketCategories", this.form.ticketCategories);

      this.$Progress.start();
      this.$wait.start("processing");
      axios
        .post("events", fd, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.$wait.end("processing");
          this.$Progress.finish();
          this.$notify({
            type: "success",
            title: res.data.message,
            duration: 5000,
            speed: 1000,
          });
          setTimeout(() => {
            this.$router.push("/organisation-dashboard/event-gallery");
          }, 1200);
        })
        .catch((err) => {
          console.log(err.response.data);
          this.error = err.response.data.error;
          this.$notify({
            type: "error",
            title: err.response.data.message,
            duration: 5000,
            speed: 1000,
          });
          this.$wait.end("processing");
          this.$Progress.fail();
        });
    },

    loadAllEventCategory() {
      axios
        .get("admin/events/category/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          // this.prepPagination(response.data.data);
          this.categories = response.data.data.data;
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
  },

  created() {
    this.loadAllEventCategory();
  },

  mounted() {
    this.loadAllEventCategory();
    window.scrollTo(0, 0);

    $(".image-box").click(function (event) {
      var previewImg = $(this).children("img");

      $(this).siblings().children("input").trigger("click");

      $(this)
        .siblings()
        .children("input")
        .change(function () {
          var reader = new FileReader();

          reader.onload = function (e) {
            var urll = e.target.result;
            $(previewImg).attr("src", urll);
            previewImg.parent().css("background", "transparent");
            previewImg.show();
            previewImg.siblings("p").hide();
          };
          reader.readAsDataURL(this.files[0]);
        });
    });
  },
};
</script>
