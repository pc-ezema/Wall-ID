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
                                        <h3>Created Template</h3>
                                        <p><router-link to="/organisation-dashboard/id-card-management"><a><i class="bi bi-arrow-left"></i> ID Card Management</a></router-link></p>
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
                            <router-link to="/organisation-dashboard/create-template"><a><i class="bi bi-plus-circle-fill"></i> Add New Template</a></router-link>
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
                                                <td class="align-enter text-dark font-13" colspan="6">No Template Added</td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr v-for="row in template" v-bind:key="row.id">
                                                <th scope="row">{{ row.id }}</th>
                                                <td>{{ row.role }}</td>
                                                <td><img v-bind:src="`http://localhost:8000${row.path}`"></td>
                                                <td><button class="viewCardBtn" data-toggle="modal" :data-target="'#viewTemplate'+row.id">View Card</button></td>
                                                <!--Box 1-->
                                                <div class="modal fade" :id="'viewTemplate'+row.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                                                v-bind:style="{ 'width' : '330px', 'height' : '200px', 'border-radius' : '5px', 'padding': '20px 15px', 'background-color': row.background_color }">
                                                                    <div class="cardLogo">
                                                                        <img v-bind:src="`http://localhost:8000${row.path}`">
                                                                    </div>
                                                                    <div class="cardContent">
                                                                        <!-- <p :style="{'color': row.text_color + '!important'}">Holder's Name:</p>
                                                                        <p :style="{'color': row.text_color + '!important'}">Job Role:</p>
                                                                        <p :style="{'color': row.text_color + '!important'}">ID No:</p>
                                                                        <p :style="{'color': row.text_color + '!important'}">Join Date:</p> -->
                                                                    </div>
                                                                    <div class="cardImage">
                                                                        <img src="@/assets/img/image2.png">
                                                                    </div>
                                                                    <div class="clear"></div>
                                                                    </div>
                                                                    <div class="col-lg-12 mt-4 text-center">
                                                                        <a href="/organisation-dashboard/edit-template" class="editTemplateBtn">Edit Template</a>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                                <td>{{ new Date(row.created_at).toLocaleString() }}</td>
                                                <td>
                                                   <div class="action_btns d-flex">
                                                      <a href="javascript:void(0)" @click="deleteTemplate(row.id)" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a>
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

         <DashboardFooter/>
      </section>
      

      <div id="back-top" style="display: none;">
         <a title="Go to Top" href="#">
         <i class="ti-angle-up"></i>
         </a>
      </div>

      <!-- <div class="modal fade" id="modalView" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                       style="
                        background-color: #a100ff;
                        width: 330px;
                        height: 200px;
                        border-radius: 5px;
                        padding: 20px 15px;
                       "
                       >
                           <div class="cardLogo">
                               <img src="@/assets/img/image.png">
                           </div>
                           <div class="cardContent">
                               <p style="color: #ffffff !important">Holder's Name:</p>
                               <p style="color: #ffffff !important">Job Role:</p>
                               <p style="color: #ffffff !important">ID No:</p>
                               <p style="color: #ffffff !important">Join Date:</p>
                           </div>
                           <div class="cardImage">
                               <img src="@/assets/img/image2.png">
                           </div>
                           <div class="clear"></div>
                        </div>
                        <div class="col-lg-12 mt-4 text-center">
                            <a href="/organisation-dashboard/edit-template" class="editTemplateBtn">Edit Template</a>
                        </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<style scoped src="@/assets/css/styleDashboard.css"></style>
<style scoped src="@/assets/css/styleDashboardSupport.css"></style>
<script>
import DashboardSidebar from './DashboardSidebar.vue'
import DashboardNavbar from './DashboardNavbar.vue';
import DashboardFooter from './DashboardFooter.vue';
import axios from 'axios';

export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
    mounted() {
        window.scrollTo(0, 0)
    },

    data() {
        return {
            template: []
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

        loadMyTemplate() {
            axios.get('id-card/templates')
            .then(
                response => {
                    this.prepPagination(response.data);
                    this.template = response.data.data;
                }
            ).catch (
                error => {
                    console.log(error);
                }
            )
        },

        deleteTemplate(data) {
            this.$Progress.start();
            axios.delete('id-card/templates/delete/' + data)
            .then(
                response => {
                    this.$Progress.finish();
                    this.$notify({
                        type: "success",
                        title: response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });
                    this.loadMyTemplate;
                }
            ).catch (
                error => {
                    this.$Progress.fail();
                    this.$notify({
                        type: "error",
                        title: error.response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });
                }
            )
        }
    },

    created() {
        this.loadMyTemplate();
    },
}
</script>