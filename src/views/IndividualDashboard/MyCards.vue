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
                                                <th scope="col">Issued Date</th>
                                                <th scope="col">Role</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="!myidcards || !myidcards.length">
                                            <tr>
                                                <td class="align-enter text-dark font-13" colspan="6">No Approved ID Card.</td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr v-for="row in myidcards" v-bind:key="row.id">
                                                <th scope="row">{{ row.id }}</th>
                                                <td>{{ row.id_card_number }}</td>
                                                <td>{{ row.name }}</td>
                                                <td>{{ row.issued_date }}</td>
                                                <td>{{ row.role }}</td>
                                                <td><a class="a-approved">{{ row.status }}</a></td>
                                            </tr>
                                            <!-- <tr>
                                                <th scope="row">2</th>
                                                <td>Name Surname</td>
                                                <td>Name Surname</td>
                                                <td>2022-03-15</td>
                                                <td><a class="a-pending">Pending</a></td>
                                                <td>
                                                   <div class="action_btns d-flex">
                                                      <a href="#" title="View" class="action_btn"> <i class="bi bi-eye-fill"></i> </a>
                                                      <a href="#" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a>
                                                  </div>
                                                </td>
                                            </tr> -->
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
            pagination: {},
            myidcards: [],
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

        loadMyCard(page = 1) {
            axios.get('id-card-management' + "?page=" + page)
            .then(
                response => {
                    this.prepPagination(response.data);
                    this.myidcards = response.data.data;

                    console.log(this.myidcards);
                }
            ).catch (
                error => {
                    console.log(error);
                }
            )
        },
    },

    created() {
        this.loadMyCard();
    },
    
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>