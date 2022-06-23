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
                                        <p><router-link to="/individual-dashboard/add-card"><a><i class="bi bi-arrow-left"></i> Go back</a></router-link></p>
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
                        <form @submit.prevent="createID()">
                            <div class="row">
                                <div class="col-lg-12 mb-3">
                                    <label>Holders Full Name</label>
                                    <input type="text" v-model="id.name" class="input" placeholder="Holders Full Name" required>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label>Date Joined</label>
                                    <input type="date" v-model="id.issued_date" class="input" required>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <label>Select ID Image</label>
                                    <div class="col-ting">
                                        <div class="control-group file-upload" id="file-upload1">
                                            <div class="image-box text-center">
                                                <p>Upload Photo</p>
                                                <img src="" alt="">
                                            </div>
                                            <div class="controls" style="display: none;">
                                                <input type="file" @change="onFileChange" name="contact_image_1" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 text-center mb-3 mt-4">
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
import axios from 'axios';

export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
    
    data() {
        return {
            id: {
                name: "",
                issued_date: "",
                passport: ""
            }
        }
    },

    methods: {
        async createID() {
            let id = this.$route.params.id;

            const fd = new FormData();
            fd.append("organization_id", id);
            fd.append("name", this.id.name);
            fd.append("issued_date", this.id.issued_date);
            fd.append("passport", this.id.passport);

            // this.$wait.start("processing");
            this.$Progress.start();
            
            await axios.post('id-card-management/store', fd)
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
                        this.$router.push('/individual-dashboard/pending-cards');
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
            this.id.passport = e.target.files[0];
        }
    },

    mounted() {
        window.scrollTo(0, 0)

        $(".image-box").click(function(event) {
        var previewImg = $(this).children("img");

        $(this)
            .siblings()
            .children("input")
            .trigger("click");

        $(this)
            .siblings()
            .children("input")
            .change(function() {
                var reader = new FileReader();

                reader.onload = function(e) {
                    var urll = e.target.result;
                    $(previewImg).attr("src", urll);
                    previewImg.parent().css("background", "transparent");
                    previewImg.show();
                    previewImg.siblings("p").hide();
                };
                reader.readAsDataURL(this.files[0]);
            });
        });
    }
}
</script>