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
                                        <h3>Event Category</h3>
                                        <p><router-link to="/superadmin-dashboard/home"><a><i class="bi bi-arrow-left"></i> Dashboard</a></router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mt-3 secForm">
                   <div class="col-lg-11 secFormHead">
                        <h5>All Event list</h5>
                   </div>
                   <div class="col-lg-11 filterSelect">
                        <button class="btnCreateEvent" data-toggle="modal" data-target="#modalEventCategory">Create</button>
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
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Created At</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="!eventCategories || !eventCategories.length">
                                            <tr>
                                                <td class="align-enter text-dark font-13" colspan="5">No Event Category</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr v-for="(row, index) in eventCategories" v-bind:key="index">
                                                <th scope="row">{{index + 1}}</th>
                                                <td>{{row.name}}</td>
                                                <td>{{row.description}}</td>
                                                <td>{{ new Date(row.created_at).toLocaleString() }}</td>
                                                <td>
                                                   <div class="action_btns d-flex">
                                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#modalEventEditCategory" title="View" class="action_btn" @click="sendInfo(row)"> <i class="bi bi-eye-fill"></i> </a>
                                                      <a href="javascript:void(0)" data-toggle="modal" data-target="#deleteConfirmationModal" title="Delete" class="action_btn" @click="sendInfo(row)"> <i class="bi bi-trash-fill"></i> </a>
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

    <div class="modal fade" id="modalEventCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content viewCardModal">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Add Event Category</h5>
                    <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body eventCategoryForm">
                    <form @submit.prevent="createEventCategory()">
                        <div class="row">
                            <div class="col-lg-12">
                                <input type="text" v-model="form.name" class="input" placeholder="Name">
                            </div>
                            <div class="col-lg-12">
                                <textarea cols="30" v-model="form.description" rows="5" class="input" placeholder="Description"></textarea>
                            </div>
                            <div class="col-lg-12 text-center">
                                <button style="width: 50%" v-if="$wait.is('processing')" type="submit">Creating Event Category...</button>
                                <button v-else type="submit" @close="showModal = false">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalEventEditCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content viewCardModal">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Update Event Category</h5>
                    <button type="button" class="close" id="closeEdit" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body eventCategoryForm">
                    <form @submit.prevent="updateEventCategory()">
                        <div class="row">
                            <input v-model="selectedEventCategory.id" hidden>

                            <div class="col-lg-12">
                                <input type="text" v-model="selectedEventCategory.name" class="input" placeholder="Name">
                            </div>
                            <div class="col-lg-12">
                                <textarea cols="30" v-model="selectedEventCategory.description" rows="5" class="input" placeholder="Description"></textarea>
                            </div>
                            <div class="col-lg-12 text-center">
                                <button style="width: 50%" v-if="$wait.is('processing')" type="submit">Updating Event Category...</button>
                                <button v-else type="submit">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="deleteConfirmationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content viewCardModal">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabelTitle">Delete Event Category</h5>
                <button type="button" class="close" id="closeDelete" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body eventCategoryForm">
                <p>Are you sure you want to delete this event category?</p>
            </div>
            <div class="modal-footer eventCategoryForm">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <form @submit.prevent="deleteEventCategory(this.selectedEventCategory.id)">
                    <button type="submit" style="background-color: red !important; color: white;">Delete</button>
                </form>
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

import axios from 'axios';


export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
    
    data() {
        return {
            eventCategories: [],
            pagination: {},
            form: {
                name: null,
                description: null
            },
            selectedEventCategory: {
                id: "",
                name: "",
                description: "",
            },
        };
    },

    methods: {
        closeModal() {
            document.getElementById('close').click();
        },

        closeEdit()
        {
            document.getElementById('closeEdit').click();
        },

        closeDelete()
        {
            document.getElementById('closeDelete').click();
        },

        loadAllEventCategory() {
            axios.get('admin/events/category/all')
            .then(
                response => {
                    // this.prepPagination(response.data.data);
                    this.eventCategories = response.data.data.data;    
                }
            ).catch (
                error => {
                    this.$notify({
                        type: "error",
                        title: error.response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });
                }
            )
        },

        getResults(page = 1) {
            axios.get('admin/events/category/all?page=' + page)
            .then(
                response => {
                        this.categories = response.data.data;
                }
            );
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

        async createEventCategory() {
            this.$wait.start("processing");
            this.$Progress.start();
            
            await axios.post('admin/events/category/store', {
                name: this.form.name,
                description: this.form.description
            })
            .then(
                response => {
                    this.$wait.end("processing");
                    this.$Progress.finish();
                    this.$notify({
                        type: "success",
                        title: response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });
                    this.loadAllEventCategory();
                    this.closeModal();
                }
            ).catch (
                error => {
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
                        this.closeModal();
                    } else {
                        this.$wait.end("processing");
                        this.$Progress.fail();
                        this.$notify({
                            type: "error",
                            title: error.response.data.message,
                            duration: 5000,
                            speed: 1000,
                        });
                        this.closeModal();
                    }
                }
            )
        },

        sendInfo(row) {
            this.selectedEventCategory.id = row.id;
            this.selectedEventCategory.name = row.name;
            this.selectedEventCategory.description = row.description;
        },

        async updateEventCategory() {
            this.$wait.start("processing");
            this.$Progress.start();
            
            await axios.put('admin/events/category/update/' + this.selectedEventCategory.id, {
                name: this.selectedEventCategory.name,
                description: this.selectedEventCategory.description
            })
            .then(
                response => {
                    this.$wait.end("processing");
                    this.$Progress.finish();
                    this.$notify({
                        type: "success",
                        title: response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });
                    this.loadAllEventCategory();
                    this.closeEdit();
                }
            ).catch (
                error => {
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
                        this.closeEdit();
                    } else {
                        this.$wait.end("processing");
                        this.$Progress.fail();
                        this.$notify({
                            type: "error",
                            title: error.response.data.message,
                            duration: 5000,
                            speed: 1000,
                        });
                        this.closeEdit();
                    }
                }
            )
        },

        async deleteEventCategory(data) {
            this.$Progress.start();
            await axios.delete('admin/events/category/destroy/' + data)
            .then(
                response => {
                    this.$Progress.finish();
                    this.$notify({
                        type: "success",
                        title: response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });
                    this.loadAllEventCategory();
                    this.closeDelete();
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
                    this.closeDelete();
                }
            )
        },

    },

    created() 
    {
        this.loadAllEventCategory();
    },

    mounted() {
        this.loadAllEventCategory();

        window.scrollTo(0, 0)
    }
}
</script>