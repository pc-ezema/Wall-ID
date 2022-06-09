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
                                        <h3>Members IDs</h3>
                                        <p><router-link to="/organisation-dashboard/id-card-management"><a><i class="bi bi-arrow-left"></i> ID Card Management</a></router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mt-3 secForm">
                   <div class="col-lg-11 secFormHead">
                        <h5>All your members with IDs</h5>
                   </div>
                   <div class="col-lg-11 filterSelect">
                        <select>
                            <option hidden>Filter</option>
                            <option>Approved</option>
                            <option>Declined</option>
                            <option>Pending</option>
                        </select>
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
                                                <th scope="col">Image</th>
                                                <th scope="col">Card Template</th>
                                                <th scope="col">Date Created</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Name Surname</td>
                                                <td><img src="@/assets/img/dp.jpg"></td>
                                                <td><button class="viewCardBtn" data-toggle="modal" data-target="#modalView">View Card</button></td>
                                                <td>09-May-2022</td>
                                                <td><a class="a-approved">Approved</a></td>
                                                <td>
                                                   <div class="action_btns d-flex">
                                                      <a href="#" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a>
                                                  </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Name Surname</td>
                                                <td><img src="@/assets/img/dp.jpg"></td>
                                                <td><button class="viewCardBtn" data-toggle="modal" data-target="#modalView">View Card</button></td>
                                                <td>09-May-2022</td>
                                                <td><a class="a-pending">Pending</a></td>
                                                <td>
                                                   <div class="action_btns d-flex">
                                                      <a href="#" title="Delete" class="action_btn"> <i class="bi bi-trash-fill"></i> </a>
                                                  </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Name Surname</td>
                                                <td><img src="@/assets/img/dp.jpg"></td>
                                                <td><button class="viewCardBtn" data-toggle="modal" data-target="#modalView">View Card</button></td>
                                                <td>09-May-2022</td>
                                                <td><a class="a-declined">Declined</a></td>
                                                <td>
                                                   <div class="action_btns d-flex">
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

      <!--Box 1-->
    <div class="modal fade" id="modalView" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content viewCardModal">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">ID Card</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div 
                       class="cardTemplate modalCardTemplate" 
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