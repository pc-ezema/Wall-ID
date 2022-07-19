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
                                        <h3>Event Category</h3>
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
                        <h5>All Event list</h5>
                   </div>
                   <div class="col-lg-11 filterSelect">
                        <button class="btnCreateEvent" data-toggle="modal" data-target="#modalEventCategory">Create</button>
                   </div>
                   <div class="col-lg-11 mt-3">
                     <div class="white_card card_height_100 mb_30">
                        <div class="white_card_body">
                            <div class="QA_section">
                                <div class="QA_table mb_30">
                                    <table class="table lms_table_active">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"></th>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                   <div class="action_btns d-flex">
                                                      <a href="#" title="View" class="action_btn"> <i class="bi bi-eye-fill"></i> </a>
                                                      <a href="#" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a>
                                                  </div>
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

      <div class="modal fade" id="modalEventCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content viewCardModal">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Add Event Category</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body eventCategoryForm">
                    <form>
                        <div class="row">
                            <div class="col-lg-12">
                                <input type="text" class="input" placeholder="Name">
                            </div>
                            <div class="col-lg-12">
                                <textarea cols="30" rows="5" class="input" placeholder="Description"></textarea>
                            </div>
                            <div class="col-lg-12 text-center">
                                <button type="submit">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
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