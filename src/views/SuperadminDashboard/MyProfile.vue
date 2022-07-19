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
                                        <h3>My Profile</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Profile Details-->
               <div class="row pd-section">
                   <div class="col-lg-10 mb-4">
                        <div class="profile-img">
                            <img src="@/assets/img/dp.jpg">
                        </div>
                   </div>
                   <div class="col-lg-10 mb-4">
                     <span>Name</span>
                     <p>Admin Admin</p>
                   </div>
                   <div class="col-lg-5 mb-4">
                     <span>Email</span>
                     <p>email@email.com</p>
                   </div>
                   <div class="col-lg-5 mb-4">
                     <span>Phone</span>
                     <p>08012345678</p>
                   </div>
                   <div class="col-lg-5 mb-4">
                     <span>Type</span>
                     <p>Superadmin</p>
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