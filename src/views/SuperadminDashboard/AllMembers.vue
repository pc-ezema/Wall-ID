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
                                        <h3>All Members</h3>
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
                        <h5>All Members list</h5>
                   </div>
                   <div class="col-lg-11 filterSelect">
                        <input type="text" class="input searchInput" style="width: 100%;" placeholder="Search...">
                        <!-- <select>
                            <option hidden>Filter</option>
                            <option>Activated</option>
                            <option>Suspended</option>
                        </select> -->
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
                                                <th scope="col">Member Name</th>
                                                <th scope="col">Organization Joined</th>
                                                 <th scope="col">Role</th>
                                                <th scope="col">Date Joined</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="!members || !members.length">
                                            <tr>
                                                <td class="align-enter text-dark font-13" colspan="5">No Joined Member</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                             <tr v-for="(row, index) in members" v-bind:key="index">
                                                <th scope="row">{{ index + 1}}</th>
                                                <td>{{row.membership_request_details.individual.firstname}} {{row.membership_request_details.individual.lastname}}</td>
                                                <td>{{row.membership_request_details.organization.name}}</td>
                                                <td>{{row.role}}</td>
                                                <td>{{ new Date(row.created_at).toLocaleString() }}</td>
                                                <td>
                                                   <a v-if="row.status == 'active'" href="#" class="status_btn">Active</a>
                                                   <a v-if="row.status == 'pending'" href="#" class="status_btn yellow_btn">Suspended</a>
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
            members: [],
            pagination: {},
        };
    },

    methods: {
        loadAllMembers(page = 1) {
            axios.get('admin/all/members' + "?page=" + page)
            .then(
                response => {
                    this.prepPagination(response.data);
                    this.members = response.data.data;                    
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
    },

    created() 
    {
        this.loadAllMembers();
    },

    mounted() {
        this.loadAllMembers();

        window.scrollTo(0, 0)
    }
}
</script>