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
                                        <h3>Edit Profile</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Profile Details-->
               <div class="row pd-section secForm editProfileDetail">
                   <div class="col-lg-11 mt-3">
                    <form>
                        <div class="row justify-content-center">
                            <div class="col-lg-12 text-center mb-4">
                                <h4>Change Profile Picture</h4>
                                <div class="profile-img-area">
                                    <img src="@/assets/img/dp.jpg">
                                </div>
                                <label class="custom-file-upload" title="Upload Profile Picture">
                                    <input type="file"/>
                                    <i class="bi bi-upload"></i>
                                </label>
                                <button class="deleteProfilePic" type="submit"><i class="bi bi-trash3-fill"></i> Delete Picture</button>
                            </div>
                            <!--Event ID-->
                            <div class="col-lg-6 mb-3">
                                <label>First Name</label>
                                <input type="text" class="input" placeholder="Enter first name">
                            </div>
                            <!--Receiver username-->
                            <div class="col-lg-6 mb-3">
                                <label>Last Name</label>
                                <input type="text" class="input" placeholder="Enter last name">
                            </div>
                            <!--Button-->
                            <div class="col-lg-2 text-center mb-3">
                                <button type="submit" class="button">Update Profile</button>
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