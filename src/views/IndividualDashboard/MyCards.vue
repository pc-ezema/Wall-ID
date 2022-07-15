<template>
    <DashboardSidebar/>

      <section class="main_content dashboard_part large_header_bg">
        <DashboardNavbar/>

         <!--Main Content-->
         <div class="main_content_iner overly_inner ">
            <div class="container-fluid p-0 ">
               <!--Breadcrumb-->
               <div class="row">
                   <div class="col-12">
                        <div class="dashboard_header mb-3">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="dashboard_header_title">
                                        <h3>My Cards</h3>
                                        <p><router-link to="/individual-dashboard/id-card-management"><a><i class="bi bi-arrow-left"></i> ID Card Management</a></router-link></p>
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
                            <router-link to="/individual-dashboard/add-card"><a><i class="bi bi-plus-circle-fill"></i> Add ID Card</a></router-link>
                        </h5>
                   </div>
                   <!-- <div class="col-lg-11 filterSelect">
                        <select>
                            <option hidden>Filter</option>
                            <option>Approved</option>
                            <option>Pending</option>
                        </select>
                   </div> -->
                   <div class="col-lg-11 mt-3">
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
                                                <th scope="col">Card Template</th>
                                                <th scope="col">Issued Date</th>
                                                <th scope="col">Role</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="!myidcards || !myidcards.length">
                                            <tr>
                                                <td class="align-enter text-dark font-13" colspan="7">No Approved ID Card.</td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr v-for="(row, index) in myidcards" v-bind:key="index">
                                                <th scope="row">{{ index + 1 }}</th>
                                                <td>{{ row.id_card_number }}</td>
                                                <td>{{ row.name }}</td>
                                                <td><button class="viewCardBtn" data-toggle="modal" data-target="#modalView" @click="sendInfo(row)">View Card</button></td>
                                                <td>{{ row.issued_date }}</td>
                                                <td>{{ row.role }}</td>
                                                <td><a class="a-approved">{{ row.status }}</a></td>
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

         <DashboardFooter/>
      </section>
      

      <div id="back-top" style="display: none;">
         <a title="Go to Top" href="#">
         <i class="ti-angle-up"></i>
         </a>
      </div>

      <!--Box 1-->
    <div class="modal fade" id="modalView" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content viewCardModal">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">ID Card</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div 
                    class="cardTemplate modalCardTemplate" 
                    :style="{
                        'background-color': this.selectedCard.background_color,
                        'width': '330px',
                        'height': '200px',
                        'border-radius': '5px',
                        'padding': '20px 15px'
                    }"
                    >
                        <div class="cardLogo">
                            <img v-bind:src="this.baseURL + this.selectedCard.cardLogo">
                        </div>
                        <div class="cardContent">
                            <p :style="{'color': this.selectedCard.text_color + '!important'}">Holder's Name: {{ this.selectedCard.name}}</p>
                            <p :style="{'color': this.selectedCard.text_color + '!important'}">Job Role: {{ this.selectedCard.role }}</p>
                            <p :style="{'color': this.selectedCard.text_color + '!important'}">ID No: {{ this.selectedCard.id_card_number }}</p>
                            <p :style="{'color': this.selectedCard.text_color + '!important'}">Join Date: {{ this.selectedCard.issued_date }}</p>
                        </div>
                        <div class="cardImage">
                            <img v-bind:src="this.baseURL + this.selectedCard.cardImage">
                        </div>
                        <div class="clear"></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/styleDashboard.css"></style>
<style scoped src="@/assets/css/styleDashboardSupport.css"></style>
<script>
import DashboardSidebar from './DashboardSidebar.vue'
import DashboardNavbar from './DashboardNavbar.vue';
import DashboardFooter from './DashboardFooter.vue';

import axios from 'axios'

export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },

    data() {
        return {
            baseURL: axios.defaults.baseURL.slice(0, -5),
            pagination: {},
            myidcards: [],
            selectedCard: {
                name: "",
                role: "",
                id_card_number: "",
                issued_date: "",
                background_color: "",
                text_color: "",
                cardLogo: "",
                cardImage: ""
            }
        }
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

        loadMyCard() {
            axios.get('id-card-management')
            .then(
                response => {
                    this.prepPagination(response.data);
                    this.myidcards = response.data.data;
                }
            ).catch (
                error => {
                    console.log(error);
                }
            )
        },

        sendInfo(row) {
            this.selectedCard.name = row.name;
            this.selectedCard.role = row.role;
            this.selectedCard.id_card_number = row.id_card_number;
            this.selectedCard.issued_date = row.issued_date;
            this.selectedCard.background_color = row.template.background_color;
            this.selectedCard.text_color = row.template.text_color;
            this.selectedCard.cardLogo = row.template.path;
            this.selectedCard.cardImage = row.path;
        }
    },

    created() {
        this.loadMyCard();
    },
    
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>