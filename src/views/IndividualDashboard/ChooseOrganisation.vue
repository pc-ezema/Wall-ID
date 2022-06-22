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
                                        <h3>Organisation Details</h3>
                                        <p><router-link to="/individual-dashboard/memberships"><a><i class="bi bi-arrow-left"></i> Go back</a></router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mt-1 secForm">
                   <div class="col-lg-11 mt-3">
                        <div class="row showOrgDtl">
                            <div class="col-lg-12 text-center">
                                <div class="orgPicture">
                                    <img src="@/assets/img/dp.jpg">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="txtCnt">
                                    <h5>Name</h5>
                                    <p>{{organization.details.name}}</p>
                                </div>
                                <div class="txtCnt">
                                    <h5>Email</h5>
                                    <p>{{organization.email}}</p>
                                </div>
                                <div class="txtCnt">
                                    <h5>Username</h5>
                                    <p>{{organization.username}}</p> 
                                </div>
                                <div class="txtCnt">
                                    <h5>Registered Date</h5>
                                    <p>{{ new Date(organization.details.created_at).toLocaleString()}}</p>
                                </div>
                                <div class="txtCnt selectRoles">
                                    <form @submit.prevent="sendJoinRequest()">
                                        <label>Roles (?)</label>
                                        <select required v-model="role">
                                            <optgroup label="-- Select Roles --">  
                                                <option value="Senior Staff">Senior Staff</option>
                                                <option value="Junior Staff">Junior Staff</option>
                                            </optgroup>
                                        </select>
                                        <span>If your role is not available, please contact your organisation.</span>
                                        <div class="txtCnt mt-5">
                                            <button v-if="$wait.is('processing')" type="button">Request Processing</button>
                                            <button v-else type="submit">Send Request</button>
                                        </div>
                                    </form>
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
import axios from 'axios';

export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
    data() {
        return {
            organization: {},
            role: "",
        }
    },

    mounted() {
        window.scrollTo(0, 0);
    },

    methods: {
        displayOrganization() {
            let username = this.$route.params.username;

            console.log(username);

            axios.get('users/organization/get', {
                params: {
                    username: username
                }
            }).then(
                response => {
                    this.organization = response.data.data[0];
                }
            ).catch (
                error => {
                    console.log(error);
                }
            )
        },

        sendJoinRequest() {
            this.$wait.start("processing");
            this.$Progress.start();

            axios.post('individuals/organizations/join-request', {
                name: this.organization.username,
                role: this.role
            }).then(
                response => {
                    this.$wait.end("processing");
                    this.$Progress.finish();
                    this.$notify({
                        type: "success",
                        title: response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });
                    setTimeout(() => {
                        this.$router.push('/individual-dashboard/memberships');
                    }, 6000);
                }
            ).catch (
                error => {
                    this.$wait.end("processing");
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
        this.displayOrganization();
    },

}
</script>