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
                    <h3>My Cards</h3>
                    <p>
                      <router-link to="/individual-dashboard/id-card-management"
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
              <router-link to="/individual-dashboard/add-card"
                ><a
                  ><i class="bi bi-plus-circle-fill"></i> Add ID Card</a
                ></router-link
              >
            </h5>
          </div>
          <div class="col-lg-11 filterSelect">
            <select @change="onChange($event)" v-model="key">
              <option>Filter</option>
              <option value="Approved">Approved/Active</option>
              <option value="Disapproved">Disapproved</option>
            </select>
          </div>
          <div v-if="approved" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">ID Number</th>
                          <th scope="col">Name</th>
                          <th scope="col">ID Card</th>
                          <th scope="col">Issued Date</th>
                          <th scope="col">Role</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody v-if="!myidcards || !myidcards.length">
                        <tr v-if="loading" >
                          <td colspan="7">
                            <div style="text-align: center"  class="fa-3x">
                                <i class="fas fa-spinner fa-spin"></i>
                            </div>
                          </td>
                        </tr>
                        <tr v-else>
                          <td class="align-enter text-dark font-13" colspan="7">
                            No Approved ID Card.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in myidcards"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.created_by_individual.id_card_number }}</td>
                          <td>{{ row.name }}</td>
                          <td>
                            <button
                              class="viewCardBtn"
                              data-toggle="modal"
                              data-target="#modalView"
                              @click="sendInfo(row)"
                            >
                              View Card
                            </button>
                          </td>
                          <td>{{ row.issued_date }}</td>
                          <td>{{ row.role }}</td>
                          <td>
                            <a class="a-approved">{{ row.status }}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="disapproved" class="col-lg-11 mt-3">
            <div class="white_card card_height_100 mb_30">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">ID Number</th>
                          <th scope="col">Name</th>
                          <th scope="col">ID Card</th>
                          <th scope="col">Issued Date</th>
                          <th scope="col">Role</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody v-if="!mydeapprovedidcards || !mydeapprovedidcards.length">
                        <tr>
                          <td class="align-enter text-dark font-13" colspan="7">
                            No Deapproved ID Card.
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr
                          v-for="(row, index) in mydeapprovedidcards"
                          v-bind:key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ row.created_by_individual.id_card_number }}</td>
                          <td>{{ row.name }}</td>
                          <td>
                            <button
                              class="viewCardBtn"
                              data-toggle="modal"
                              data-target="#DisactivateView"
                              @click="sendInfo(row)"
                            >
                              View Card
                            </button>
                          </td>
                          <td>{{ row.issued_date }}</td>
                          <td>{{ row.role }}</td>
                          <td>
                            <a class="a-approved">{{ row.status }}</a>
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
    id="modalView"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content viewCardModal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">ID Card</h5>
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
                'background-color': this.selectedCard.background_color,
              }"
            >
              <div class="id-card-header" :style="{'background-color': this.selectedCard.background_color}">
                <div class="header" :style="{color: this.selectedCard.text_color + '!important'}">
                  <img
                    v-bind:src="this.baseURL + this.selectedCard.cardLogo" />{{ this.selectedCard.organization }}
                </div>
              </div>
              <div class="profile-row" :style="{'background-color': this.selectedCard.background_color, 'filter': 'brightness(90%)'}">
                <div class="dp">
                  <div class="dp-arc-outer"></div>
                  <div class="dp-arc-inner"></div>
                  <img
                    v-bind:src="this.baseURL + this.selectedCard.cardImage"
                  />
                </div>
                <div class="desc" style="padding-top: initial">
                  <div
                    :style="{
                      color: this.selectedCard.text_color + '!important',
                    }"
                  >
                    <span>Holder's Name</span>
                    <p
                      :style="{
                        'font-size': '1.1rem !important',
                        color: this.selectedCard.text_color + '!important',
                      }"
                    >
                      {{ this.selectedCard.name }}
                    </p>
                    <span>Job Role</span>
                    <p
                      :style="{
                        color: this.selectedCard.text_color + '!important',
                      }"
                    >
                      {{ this.selectedCard.role }}
                    </p>
                    <span>ID No</span>
                    <p
                      :style="{
                        color: this.selectedCard.text_color + '!important',
                      }"
                    >
                      {{ this.selectedCard.id_card_number }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="id-card-footer" :style="{'background-color': this.selectedCard.background_color}">
                <p
                  :style="{
                    color: this.selectedCard.text_color + '!important',
                  }"
                >
                  Join Date: {{ this.selectedCard.issued_date }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="DisactivateView"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content viewCardModal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">ID Card Deactivated</h5>
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
                'background-color': this.selectedCard.background_color,
              }"
            >
            <div class="centered" :style="{'background-color': this.selectedCard.background_color}">
              <p>Deactivated</p>
              </div>
              <div class="id-card-header" :style="{'background-color': this.selectedCard.background_color}">
                <div class="header" :style="{color: this.selectedCard.text_color + '!important'}">
                  <img
                    v-bind:src="this.baseURL + this.selectedCard.cardLogo" />{{ this.selectedCard.organization }}
                </div>
              </div>
              <div class="profile-row" :style="{'background-color': this.selectedCard.background_color, 'filter': 'brightness(90%)'}">
                <div class="dp">
                  <div class="dp-arc-outer"></div>
                  <div class="dp-arc-inner"></div>
                  <img
                    v-bind:src="this.baseURL + this.selectedCard.cardImage"
                  />
                </div>
                <div class="desc" style="padding-top: initial">
                  <div
                    :style="{
                      color: this.selectedCard.text_color + '!important',
                    }"
                  >
                    <span>Holder's Name</span>
                    <p
                      :style="{
                        'font-size': '1.1rem !important',
                        color: this.selectedCard.text_color + '!important',
                      }"
                    >
                      {{ this.selectedCard.name }}
                    </p>
                    <span>Job Role</span>
                    <p
                      :style="{
                        color: this.selectedCard.text_color + '!important',
                      }"
                    >
                      {{ this.selectedCard.role }}
                    </p>
                    <span>ID No</span>
                    <p
                      :style="{
                        color: this.selectedCard.text_color + '!important',
                      }"
                    >
                      {{ this.selectedCard.id_card_number }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="id-card-footer" :style="{'background-color': this.selectedCard.background_color}">
                <p
                  :style="{
                    color: this.selectedCard.text_color + '!important',
                  }"
                >
                  Join Date: {{ this.selectedCard.issued_date }}
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

  data() {
    return {
      baseURL: axios.defaults.baseURL.slice(0, -5),
      pagination: {},
      myidcards: [],
      mydeapprovedidcards: [],
      disapproved: false,
      approved: true,
      key: "Filter",
      selectedCard: {
        name: "",
        role: "",
        id_card_number: "",
        issued_date: "",
        background_color: "",
        text_color: "",
        cardLogo: "",
        cardImage: "",
        organization: null,
      },
      loading: false
    };
  },

  methods: {
    onChange(event) {
      if (this.key == "Approved") {
        this.approved = true;
        this.disapproved = false;
      }

      if (this.key == "Disapproved") {
        this.approved = false;
        this.disapproved = true;
      }
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

    loadMyCard() {
      this.loading = true;
      axios
        .get("id-card-management")
        .then((response) => {
          this.loading = false;
          this.prepPagination(response.data);
          this.myidcards = response.data.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },

    loadDeapprovedCard()
    {
      axios
        .get("id-card-management/deactivate/id-card", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.prepPagination(response.data);
          this.mydeapprovedidcards = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sendInfo(row) {
      this.selectedCard.name = row.name;
      this.selectedCard.role = row.role;
      this.selectedCard.id_card_number = row.created_by_individual.id_card_number;
      this.selectedCard.issued_date = row.issued_date;
      this.selectedCard.background_color = row.template.background_color;
      this.selectedCard.text_color = row.template.text_color;
      this.selectedCard.cardLogo = row.template.path;
      this.selectedCard.cardImage = row.path;
      this.selectedCard.organization = row.created_by_organization.name;
    },
  },

  mounted() {
    this.loadMyCard();
    this.loadDeapprovedCard();
    window.scrollTo(0, 0);
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
  /* background-color: red; */
}

.centered {
  position: absolute;
  opacity: 0.5;
  z-index: 99999;
  height: 15em;
  flex-basis: 100%;
  max-width: 30em;
  width: 100%;
  margin: auto;
  /* transform: rotate(-20deg); */
}

.centered p {
  position: absolute;
  top: 42%;
  left: 3%;
  /* transform: translate(-50%, -50%); */
  font-size: 80px;
  transform: rotate(-20deg);
  color: #000;
}

@media only screen and (max-width: 767px) {
  .centered p {
    top: 45%;
    font-size: 60px;
  }
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