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
                                        <h3>All Users</h3>
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
                        <h5>All registered users</h5>
                   </div>
                   <div class="col-lg-11 filterSelect">
                        <input type="text" placeholder="Search...">
                        <select @change="onChange($event)" v-model="key">
                            <option>Filter</option>
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="suspended">Suspended</option>
                        </select>
                   </div>
                   <div v-if="all" class="col-lg-11 mt-3">
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
                                            </tr>
                                        </thead>
                                        <tbody v-if="!users || !users.length">
                                            <tr>
                                                <td class="align-enter text-dark font-13" colspan="8">No User</td>
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
                                                   <a v-if="row.status = 'active'" href="#" class="status_btn">{{row.status}}</a>
                                                   <a v-else href="#" class="status_btn yellow_btn">{{row.status}}</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div v-if="active" class="col-lg-11 mt-3">
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
                                                <td class="align-enter text-dark font-13" colspan="8">No User</td>
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
                                                   <a v-if="row.status = 'active'" href="#" class="status_btn">{{row.status}}</a>
                                                   <a v-else href="#" class="status_btn yellow_btn">{{row.status}}</a>
                                                </td>
                                                <div class="action_btns d-flex">
                                                    <a href="#" title="View" class="action_btn"> <i class="bi bi-eye-fill"></i> </a>
                                                    <a href="#" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a>
                                                </div>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div v-if="suspended" class="col-lg-11 mt-3">
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
                                                <td class="align-enter text-dark font-13" colspan="8">No User</td>
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
                                                   <a v-if="row.status = 'active'" href="#" class="status_btn">{{row.status}}</a>
                                                   <a v-else href="#" class="status_btn yellow_btn">{{row.status}}</a>
                                                </td>
                                                <div class="action_btns d-flex">
                                                    <a href="#" title="View" class="action_btn"> <i class="bi bi-eye-fill"></i> </a>
                                                    <a href="#" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a>
                                                </div>
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
            all: true,
            active: false,
            suspended: false,
            key: "Filter",
        };
    },

    methods: {
        onChange(event, page = 1) {
            if(this.key == 'all') {
                this.all = true;
                this.active = false;
                this.suspended = false;

                axios.get('admin/allusers' + "?page=" + page)
                .then(
                    response => {
                        this.users = response.data.data;
                        this.prepPagination(response.data);
                    }
                ).catch(
                    error => {
                        this.$notify({
                            type: "error",
                            title: error.response.data.message,
                            duration: 5000,
                            speed: 1000,
                        });
                    }
                )
            }

            if(this.key == 'active') {
                this.all = false;
                this.active = true;
                this.suspended = false;

                axios.get('admin/allactiveusers' + "?page=" + page)
                .then(
                    response => {
                        this.users = response.data.data;
                        this.prepPagination(response.data);
                    }
                ).catch(
                    error => {
                        this.$notify({
                            type: "error",
                            title: error.response.data.message,
                            duration: 5000,
                            speed: 1000,
                        });
                    }
                )
            }
            
            if(this.key == 'suspended') {
                this.all = false;
                this.active = false;
                this.suspended = true;

                axios.get('admin/allsuspendedusers' + "?page=" + page)
                .then(
                    response => {
                        this.users = response.data.data;
                        this.prepPagination(response.data);

                        console.log(response);
                    }
                ).catch(
                    error => {
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

        loadAllUsers(page = 1) {
            axios.get('admin/allusers' + "?page=" + page)
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

        loadUsers(page = 1) {
            axios.get('users' + '/' + this.status + "?page=" + page)
            .then(
                response => {
                    this.users = response.data.data;
                    this.status = undefined;
                    this.prepPagination(response.data);

                    console.log(response);
                }
            ).catch(
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
            this.$spinner.show();
            axios
                .get("/api/admin/users/" + id + "/" + status)
                .then((response) => {
                    console.log(response);

                    for (var i = 0; i < this.users.length; i++) {
                        if (this.users[i].id == id) {
                            this.users[i] = response.data.data;
                        }
                    }
                    this.loadUsers();
                    this.$notify({
                        type: "success",
                        text: response.data.message,
                    });
                })
                .catch((e) => {
                    this.$notify({
                        type: "error",
                        text: e.message,
                    });
                })
                .finally(() => {
                    this.$spinner.hide();
                });
        },
    },

    created() 
    {
        this.loadAllUsers();
    },

    mounted() {
        this.loadAllUsers();

        window.scrollTo(0, 0)
    }
}
</script>