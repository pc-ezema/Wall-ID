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
                                        <h3>All Organisation</h3>
                                        <p><router-link to="/individual-dashboard/id-card-management"><a><i class="bi bi-arrow-left"></i> ID Card Management</a></router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mt-1 secForm">
                   <div class="col-lg-11 mt-3">
                       <div class="row">
                            <form>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <label class="mb-1">Search for organisation</label>
                                        <input type="text" class="input searchInput" placeholder="Search for organisation">
                                        <button type="submit" class="searchButton"><i class="bi bi-search"></i></button>
                                    </div>
                                </div>
                            </form>
                            <div class="col-lg-12 mt-2">
                                <div class="searchResult mb-2">
                                    <p>Search Result <span>(1)</span></p>
                                </div>
                                <router-link to="/individual-dashboard/organisation-verifier">
                                    <div class="resultDivDisplay">
                                        <div class="resultPicture">
                                            <div class="pictureDiv">
                                                <img src="@/assets/img/dp.jpg">
                                            </div>
                                        </div>
                                        <div class="resultContent">
                                            <p>Name</p>
                                            <h5>GreenMouse</h5>
                                            <p>Email</p>
                                            <h5>greenmousedev@email.com</h5>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                </router-link>
                            </div>
                       </div>

                       <!-- Show this page below only if the users select an organisation-->
                       <!--
                       -------
                       check page in OrganisationVerifier.vue
                       -------
                       -->
                        
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
export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>