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
                                        <h3>My Wallet</h3>
                                        <p>You can now store and view all your e-cards and tickets here in your Wall-ID Wallet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mb-5 mt-2">
                  <div class="col-md-5 mb-3">
                     <router-link to="/individual-dashboard/add-card">
                        <a>
                           <div class="text-center innerSerBoxCol innerSerBox11">
                              <p>+ Add Card</p>
                           </div>
                        </a>
                     </router-link>
                  </div>
                  <div class="col-md-5 mb-3">
                     <router-link to="/individual-dashboard/id-cards">
                        <a>
                           <div class="text-center innerSerBoxCol innerSerBox55">
                              <p>ID Cards</p>
                           </div>
                        </a>
                     </router-link>
                  </div>
                  <div class="col-md-5 mb-3">
                     <router-link to="/individual-dashboard/membership-cards">
                        <a>
                           <div class="text-center innerSerBoxCol innerSerBox3">
                              <p>Membership Cards</p>
                           </div>
                        </a>
                     </router-link>
                  </div>
                  <div class="col-md-5 mb-3">
                     <router-link to="/individual-dashboard/tickets">
                        <a>
                           <div class="text-center innerSerBoxCol innerSerBox22">
                              <p>Tickets</p>
                           </div>
                        </a>
                     </router-link>
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