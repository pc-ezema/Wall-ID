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
                                        <h3>Organisation Details</h3>
                                        <p><router-link to="/individual-dashboard/verification-request"><a><i class="bi bi-arrow-left"></i> Go back</a></router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mt-1 secForm">
                   <div class="col-lg-11 mt-3">
                        <div class="row showOrgDtl">
                            <div class="col-lg-12 text-center">
                                <div class="orgPicture">
                                    <img src="@/assets/img/dp.jpg">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="txtCnt">
                                    <h5>Name</h5>
                                    <p>Greenmouse Technologies</p>
                                </div>
                                <div class="txtCnt">
                                    <h5>Email</h5>
                                    <p>greenmousedev@gmail.com</p>
                                </div>
                                <div class="txtCnt">
                                    <h5>About</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse sed dolorum, praesentium nulla itaque repellat tempore officia laboriosam neque soluta unde, adipisci vero ipsa inventore nesciunt laudantium eos obcaecati? Quae est dolores delectus, odit voluptates dolore tenetur accusamus doloribus illo officiis illum tempora non similique, facere modi quisquam in iusto cum, necessitatibus vero adipisci rem quia molestias magnam? Quasi dolores iure necessitatibus, quo modi fugit aliquam, adipisci omnis exercitationem esse corporis placeat officiis repudiandae? Incidunt ex, maiores eaque nihil sequi ut voluptates porro consequuntur dolor aspernatur soluta harum velit exercitationem atque quibusdam laborum quas, tenetur culpa quo voluptatem explicabo.</p>
                                </div>
                                <div class="txtCnt">
                                    <h5>Registered Date</h5>
                                    <p>18-May-2022</p>
                                </div>
                                <div class="txtCnt">
                                    <router-link to="/individual-dashboard/create-id" class="btnRouter"><button>Send Request</button></router-link>
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