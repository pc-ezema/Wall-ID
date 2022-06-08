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
                                        <h3>Create Verifier</h3>
                                        <p><router-link to="/organisation-dashboard/verification"><a><i class="bi bi-arrow-left"></i> Verification</a></router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mt-3 secForm">
                   <div class="col-lg-11 secFormHead">
                        <h5>Please input verifier details</h5>
                   </div>
                   <div class="col-lg-11 mt-3">
                        <form>
                            <div class="row justify-content-center">
                               <!--Name-->
                               <div class="col-lg-6 mb-3">
                                 <label>Name</label>
                                 <input type="text" class="input" placeholder="Enter name">
                                </div>
                                <!--Username-->
                                <div class="col-lg-6 mb-3">
                                    <label>Username</label>
                                    <input type="text" class="input" placeholder="Enter username">
                                </div>
                                <!--Phone number-->
                                <div class="col-lg-6 mb-3">
                                    <label>Phone Number</label>
                                    <input type="tel" class="input" placeholder="Enter phone number">
                                </div>
                                <!--Date joined-->
                                <div class="col-lg-6 mb-3">
                                    <label>Date Joined</label>
                                    <input type="date" class="input" value="2022-04-01" min="2022-04-01">
                                </div>
                                <!--Button-->
                                <div class="col-lg-3 text-center mb-3">
                                    <button type="submit" class="button">Create Verifier</button>
                                </div>
                            </div>
                        </form>
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
export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>