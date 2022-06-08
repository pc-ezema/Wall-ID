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
                                        <h3>Event Management</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mb-5">
                   <router-link to="/individual-dashboard/upcoming-event" class="innerSerBox innerSerBox11">
                        <a>
                            <div class="text-center">
                                <img src="@/assets/img/dashAssets/innerSerBox11.png" draggable="false">
                                <p>Upcoming Events</p>
                            </div>
                        </a>
                    </router-link>
                    <router-link to="/individual-dashboard/event-gallery" class="innerSerBox innerSerBox22">
                        <a>
                            <div class="text-center">
                                <img src="@/assets/img/dashAssets/innerSerBox22.png" draggable="false">
                                <p>Event Gallery</p>
                            </div>
                        </a>
                    </router-link>
                    <router-link to="/individual-dashboard/create-event" class="innerSerBox innerSerBox33">
                        <a>
                            <div class="text-center">
                                <img src="@/assets/img/dashAssets/innerSerBox33.png" draggable="false">
                                <p>Create Event</p>
                            </div>
                        </a>
                    </router-link>
                    <router-link to="/individual-dashboard/invitation" class="innerSerBox innerSerBox44">
                        <a>
                            <div class="text-center">
                                <img src="@/assets/img/dashAssets/innerSerBox44.png" draggable="false">
                                <p>Invitation</p>
                            </div>
                        </a>
                    </router-link>
                    <router-link to="/individual-dashboard/event-history" class="innerSerBox innerSerBox55">
                        <a>
                            <div class="text-center">
                                <img src="@/assets/img/dashAssets/innerSerBox55.png" draggable="false">
                                <p>History</p>
                            </div>
                        </a>
                    </router-link>
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