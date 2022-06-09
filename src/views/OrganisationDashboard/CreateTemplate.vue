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
                                        <h3>Create Template</h3>
                                        <p><router-link to="/organisation-dashboard/id-card-management"><a><i class="bi bi-arrow-left"></i> ID Card Management</a></router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mt-3 secForm">
                   <div class="col-lg-11">
                       <div 
                       class="cardTemplate" 
                       style="
                        background-color: #a100ff;
                        width: 330px;
                        height: 200px;
                        border-radius: 5px;
                        padding: 20px 15px;
                       "
                       >
                           <div class="cardLogo">
                               <img src="@/assets/img/image.png">
                           </div>
                           <div class="cardContent">
                               <p style="color: #ffffff !important">Holder's Name:</p>
                               <p style="color: #ffffff !important">Job Role:</p>
                               <p style="color: #ffffff !important">ID No:</p>
                               <p style="color: #ffffff !important">Join Date:</p>
                           </div>
                           <div class="cardImage">
                               <img src="@/assets/img/image2.png">
                           </div>
                           <div class="clear"></div>
                       </div>

                       <form class="formCardTemp mt-3">
                           <div class="row">
                               <div class="col-lg-12 mb-4">
                                   <label>Custom Color</label>
                                   <input type="color" class="inputColor">
                               </div>
                               <div class="col-lg-12 mb-4">
                                   <label>Text Color</label>
                                   <input type="color" class="inputColor">
                               </div>
                               <div class="col-lg-12">
                                   <label>Role</label>
                                   <input type="text" placeholder="Select the role that belong to this template" class="input">
                               </div>
                               <div class="col-lg-12 mb-2">
                                   <label>Logo</label>
                                   <input type="file" accept="jpg, jpeg, png, jfif" class="input">
                               </div>
                               <div class="col-lg-12">
                                   <button type="submit">Create Template</button>
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