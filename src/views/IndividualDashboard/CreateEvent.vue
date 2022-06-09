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
                                        <h3>Create Event</h3>
                                        <p><router-link to="/individual-dashboard/event-management"><a><i class="bi bi-arrow-left"></i> Event Management</a></router-link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               <!--Boxes Section-->
               <div class="row justify-content-center mt-3 secForm">
                   <div class="col-lg-11 secFormHead">
                        <h5>About the event</h5>
                   </div>
                   <div class="col-lg-11 mt-3">
                        <form>
                            <div class="row">
                                <!--Name-->
                                <div class="col-lg-12 mb-3">
                                    <label>Event Name</label>
                                    <input type="text" class="input" placeholder="Enter the name event">
                                </div>
                                <!--Description-->
                                <div class="col-lg-12 mb-3">
                                    <label>Description</label>
                                    <textarea cols="30" rows="4" class="input" placeholder="Write a little note about the event"></textarea>
                                </div>
                                <!--Event type-->
                                <div class="col-lg-6 mb-3">
                                    <label>Event Type</label>
                                    <select class="input">
                                        <option hidden>Choose Event Category</option>
                                        <option>New Vibe</option>
                                        <option>Live Concert</option>
                                        <option>Religion</option>
                                        <option>Entertainment</option>
                                    </select>
                                </div>
                                <!--Visibility-->
                                <div class="col-lg-6 mb-3">
                                    <label>Visibility</label>
                                    <select class="input">
                                        <option hidden>Choose Event Visibility</option>
                                        <option>Open</option>
                                        <option>Semi-opened</option>
                                        <option>Closed</option>
                                    </select>
                                </div>
                                <!--Add photo of event-->
                                <div class="col-lg-12 mb-3">
                                    <label>Add Photo of Event</label>
                                    <div class="col-ting">
                                        <div class="control-group file-upload" id="file-upload1">
                                            <div class="image-box text-center">
                                                <p>Upload Image</p>
                                                <img src="" alt="">
                                            </div>
                                            <div class="controls" style="display: none;">
                                                <input type="file" name="contact_image_1"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 subHead">
                                    <h5>Location</h5>
                                </div>
                                <!--Add photo of Venue-->
                                <div class="col-lg-12 mb-3">
                                    <label>Add Photo of Venue</label>
                                    <div class="col-ting">
                                        <div class="control-group file-upload" id="file-upload1">
                                            <div class="image-box text-center">
                                                <p>Upload Image</p>
                                                <img src="" alt="">
                                            </div>
                                            <div class="controls" style="display: none;">
                                                <input type="file" name="contact_image_1"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Address-->
                                <div class="col-lg-12 mb-3">
                                    <label>Address</label>
                                    <textarea cols="30" rows="4" class="input" placeholder="Enter the address of the event"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 subHead">
                                    <h5>Time</h5>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label>Time (starts)</label>
                                    <input type="time" class="input">
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label>Time (ends)</label>
                                    <input type="time" class="input">
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label>Date (starts)</label>
                                    <input type="date" class="input">
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label>Date (ends)</label>
                                    <input type="date" class="input">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 subHead">
                                    <h5>Ticket</h5>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <label>Accessibility</label>
                                    <input type="radio" checked name="ticket" id="free"> <span class="radioSpan">Free</span>
                                    <input type="radio" name="ticket" id="paid"> <span class="radioSpan">Paid</span>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <label>Number of tickets</label>
                                    <input type="number" class="input" placeholder="Enter no of tickets">
                                </div>
                            </div>
                            <div class="row justify-content-center mt-2">
                                <!--Button-->
                                <div class="col-lg-3 text-center mb-3">
                                    <button type="submit" class="button">Create Event</button>
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