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
                                        <h3>Suspended Users</h3>
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
                        <h5>All suspended users</h5>
                   </div>
                   <div class="col-lg-11 filterSelect">
                        <input type="text" placeholder="Search...">
                   </div>
                   <div class="col-lg-11 mt-3">
                     <div class="white_card card_height_100 mb_30">
                        <div class="white_card_body">
                            <div class="QA_section">
                                <div class="QA_table mb_30">
                                   <table class="table lms_table_active">
                                        <thead>
                                            <tr>
                                                <th scope="col">S/N</th>
                                                <th scope="col">ID Number</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Date Created</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="!users || !users.length">
                                            <tr>
                                                <td class="align-enter text-dark font-13" colspan="9">No Suspended User</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr v-for="(row, index) in users" v-bind:key="index">
                                                <th scope="row">{{ index + 1 }}</th>
                                                <td>{{row.details.id_card_number}}</td>
                                                <td>
                                                    <span v-if="row.details.name">
                                                        {{row.details.name}} 
                                                    </span>
                                                    <span v-else> 
                                                        {{row.details.firstname}}  {{row.details.lastname}}
                                                    </span>
                                                </td>
                                                <td>{{row.email}}</td>
                                                <td>{{row.type}}</td>
                                                <td>{{row.username}}</td>
                                                <td>{{ new Date(row.details.created_at).toLocaleString() }}</td>
                                                <td>
                                                   <a v-if="row.status == 'active'" href="#" class="status_btn">{{row.status}}</a>
                                                   <a v-if="row.status == 'suspended'" href="#" class="status_btn yellow_btn">{{row.status}}</a>
                                                </td>
                                                <td>
                                                    <div class="action_btns d-flex">
                                                        <a href="javascript:void(0)" title="Activate Account" class="action_btn" @click="doAction(row.id, 'active')"> <i class="bi bi-file-check"></i> </a>
                                                        <!-- <a href="#" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a> -->
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
</template>

<style scoped src="@/assets/css/styleDashboard.css"></style>
<script>
import DashboardSidebar from './DashboardSidebar.vue'
import DashboardNavbar from './DashboardNavbar.vue';
import DashboardFooter from './DashboardFooter.vue';
import axios from 'axios';

export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
     data() {
        return {
            users: [],
            pagination: {},
        };
    },

    methods: {
        loadAllSuspendedUsers(page = 1) {
            axios.get('admin/users/suspended' + "?page=" + page)
            .then(
                response => {
                    this.prepPagination(response.data);
                    this.users = response.data.data;                    
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

        confirmAction(status, id) {
            this.$confirm({
                message: `Are you sure you want to ${status} this User?`,
                button: {
                    no: "No",
                    yes: "Yes",
                },
                callback: (confirm) => {
                    if (confirm) {
                        let st = status == "Activate" ? "active" : "suspended";
                        this.doAction(id, st);
                    }
                },
            });
        },

        doAction(id, status) {
            this.$Progress.start();
            axios.get('admin/users/' + id + '/' + status)
            .then(
                response => {
                    this.$Progress.finish();
                    this.$notify({
                        type: "success",
                        title: response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });         
                    
                    this.loadAllSuspendedUsers();
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
        },
    },

    created() 
    {
        this.loadAllSuspendedUsers();
    },

    mounted() {
        this.loadAllSuspendedUsers();
        window.scrollTo(0, 0)
    }
}
</script>