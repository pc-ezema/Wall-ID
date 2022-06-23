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

                       <form class="formCardTemp mt-3" @submit.prevent="createTemplate()">
                           <div class="row">
                               <div class="col-lg-12 mb-4">
                                   <label>Background Color</label>
                                   <input type="color" v-model="template.background_color" class="inputColor">
                               </div>
                               <div class="col-lg-12 mb-4">
                                   <label>Text Color</label>
                                   <input type="color" v-model="template.text_color" class="inputColor">
                               </div>
                               <div class="col-lg-12">
                                   <label>Role</label>
                                   <input type="text" v-model="template.role" placeholder="Select the role that belong to this template" class="input">
                               </div>
                               <div class="col-lg-12 mb-2">
                                   <label>Logo</label>
                                   <input type="file" @change="onFileChange" accept="jpg, jpeg, png, jfif" class="input">
                               </div>
                               <div class="col-lg-12">
                                   <botton v-if="$wait.is('processing')" style="background-image: linear-gradient(180deg, #8604e2, #ac38ff); padding: 12px 5px; 
                                   font-size: 16px; color: #fff; border: none; border-radius: 5px; width: 100%; display: block; text-align: center;">Template Adding...</botton>
                                   <button v-else type="submit">Create Template</button>
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
import axios from 'axios';

export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },

    data() {
        return {
            template:{
                background_color: "", 
                text_color: "",
                role: ""
            },
            logo: ""
        }
    },

    methods: {
        async createTemplate() {
            const fd = new FormData();
            fd.append("background_color", this.template.background_color.slice(1));
            fd.append("text_color", this.template.text_color.slice(1));
            fd.append("role", this.template.role);
            fd.append("logo", this.logo);

            this.$wait.start("processing");
            this.$Progress.start();
            
            await axios.post('id-card/templates/add', fd)
            .then(
                response => {
                    this.$wait.end("processing");
                    this.$Progress.finish();
                    this.$notify({
                        type: "success",
                        title: response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });
                    setTimeout(() => {
                        this.$router.push('/organisation-dashboard/created-template');
                    }, 800);
                }
            ).catch (
                error => {
                    console.log(error)
                    if (error.response.status == 401) {
                        this.$wait.end("processing");
                        this.$Progress.fail();
                        for (let i in error.response.data.error) {
                            this.$notify({
                                type: "error",
                                title: error.response.data.error[i][0],
                                duration: 5000,
                                speed: 1000,
                            });
                        } 
                    } else {
                        this.$wait.end("processing");
                        this.$Progress.fail();
                        this.$notify({
                            type: "error",
                            title: error.response.data.message,
                            duration: 5000,
                            speed: 1000,
                        });
                    }
                }
            )
        },

        onFileChange(e){
            this.logo = e.target.files[0];
        }
    },

    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>