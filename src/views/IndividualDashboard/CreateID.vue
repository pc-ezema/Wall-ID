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
                                        <h3>Create ID</h3>
                                        <p><router-link to="/individual-dashboard/id-card-management"><a><i class="bi bi-arrow-left"></i> ID Card Management</a></router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mt-3 secForm">
                   <div class="col-lg-11 secFormHead">
                        <h5>Please input ID card details</h5>
                   </div>
                   <div class="col-lg-11 mt-3">
                        <form>
                            <div class="row justify-content-center">
                                <!--Holders username-->
                                <div class="col-lg-12 mb-3">
                                    <label>Holders Username</label>
                                    <input type="text" class="input" placeholder="Wall ID username">
                                </div>
                                <!--Role-->
                                <div class="col-lg-6 mb-3">
                                    <label>Role</label>
                                    <input type="text" class="input" placeholder="Holders role">
                                </div>
                                <!--Category-->
                                <div class="col-lg-6 mb-3">
                                    <label>Category</label>
                                    <select class="input">
                                        <option hidden>Select Category</option>
                                        <option>Business Card</option>
                                        <option>Health Card</option>
                                        <option>Student Card</option>
                                    </select>
                                </div>
                                <!--Date issued-->
                                <div class="col-lg-6 mb-3">
                                    <label>Date Issued</label>
                                    <input type="date" class="input">
                                </div>
                                <!--Expiry date-->
                                <div class="col-lg-6 mb-3">
                                    <label>Expiry Date</label>
                                    <input type="date" class="input">
                                </div>
                                <!--Layout-->
                                <div class="col-lg-12 mb-3">
                                    <label>Layout</label>
                                    <select class="input">
                                        <option hidden>Choose a layout</option>
                                        <option>Horizontal</option>
                                        <option>Vertical</option>
                                    </select>
                                </div>
                                <!--Template-->
                                <div class="col-lg-12 mb-3">
                                    <label>Template</label>
                                    <div class="accordion" id="showTemplate">
                                        <div class="accordion-item">
                                          <h2 class="accordion-header">
                                            <button class="collapsed template-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              Choose a template
                                            </button>
                                          </h2>
                                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#showTemplate">
                                            <div class="accordion-body">
                                                <div class="template-div">
                                                   <div class="row justify-content-center">
                                                      <div class="col-md-6">
                                                         <!--Template 1-->
                                                         <label class="labelTemp">
                                                            <input checked type="radio" name="template" id="templateOne" />
                                                            <div class="plan-content">
                                                            <h5>Template 1</h5>
                                                            <img src="@/assets/img/dashAssets/template1.png" draggable="false">
                                                            </div>
                                                         </label>
                                                      </div>
                                                      <div class="col-md-6">
                                                         <!--Template 2-->
                                                         <label class="labelTemp">
                                                            <input type="radio" name="template" id="templateTwo" />
                                                            <div class="plan-content">
                                                              <h5>Template 2</h5>
                                                              <img src="@/assets/img/dashAssets/template1.png" draggable="false">
                                                            </div>
                                                          </label>
                                                      </div>
                                                   </div>
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Button-->
                                <div class="col-lg-3 text-center mb-3">
                                    <button type="submit" class="button">Create ID</button>
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