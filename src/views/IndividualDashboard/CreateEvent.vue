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
                                    <input type="text" class="input" v-model="form.name" placeholder="Enter the name event">
                                </div>
                                <!--Description-->
                            <div class="col-lg-12 mb-3">
                                <label>Description</label>
                                <textarea cols="30" rows="4" v-model="description" class="input" placeholder="Write a little note about the event"></textarea>
                            </div>
                                <!--Event type-->
                                <div class="col-lg-6 mb-3">
                                    <label>Event Type</label>
                                    <select class="input">
                                        <option hidden>Choose Event Category</option>
                                        <option v-for="category in categories" :key="category.id" :value="category.id">
                                            {{category.name}}
                                        </option>
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
                                <!--Venue-->
                                <div class="col-lg-12 mb-3">
                                    <label>Venue</label>
                                    <input type="time" class="input" v-model="venue">
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
                                <div class="col-lg-12 mb-3">
                                    <label>Address</label>
                                    <textarea cols="30" rows="4" v-model="description" class="input" placeholder="Enter the address of the event"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 subHead">
                                    <h5>Time</h5>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label>Time (starts)</label>
                                    <input type="time" class="input" v-model="start_time">
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label>Time (ends)</label>
                                    <input type="time" class="input" v-model="end_time">
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label>Date (starts)</label>
                                    <input type="date" class="input" v-model="form.start_date">
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label>Date (ends)</label>
                                    <input type="date" class="input" v-model="form.end_date">
                                </div>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label>Type</label>
                                <input type="text" class="input" placeholder="Enter type" v-model="form.type">
                            </div>
                            <div class="row">
                                <div class="col-lg-12 subHead">
                                    <h5>Ticket</h5>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <label>Accessibility</label>
                                    <input type="radio" checked v-model="accessibility" value="free"> <span class="radioSpan">Free</span>
                                    <input type="radio" v-model="accessibility" value="paid"> <span class="radioSpan">Paid</span>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <label>Number of tickets</label>
                                    <input type="number" class="input" placeholder="Enter no of tickets">
                                </div>
                            </div>
                            <div class="row" v-if="accessibility === 'paid'">
                                <div class="col-lg-12 subHead">
                                    <h5>Ticket Categories</h5>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <label>Price Type</label>
                                    <input type="radio" checked v-model="priceType" value="single"> <span class="radioSpan">Single</span>
                                    <input type="radio" v-model="priceType" value="multiple"> <span class="radioSpan">Multiple</span>
                                </div>
                                <div v-if="priceType === 'multiple'">
                                    <div class="row" 
                                        v-for="(section, index) in form.ticketCategories"
                                        v-bind:key="'S' + index"
                                        :index="index">
                                        <div class="col-lg-6 mb-3">
                                            <label>Category Name</label>
                                            <input type="number" class="input" placeholder="Enter no of tickets">
                                        </div>
                                        <div class="col-lg-6 mb-3">
                                            <label>Price</label>
                                            <input type="number" class="input" placeholder="Enter no of tickets">
                                        </div>
                                    </div>
                                    <div>
                                        <div class="col-lg-6 mb-3">                                        
                                            <!--          Add Svg Icon-->
                                            <svg
                                                @click="addField(input, form.ticketCategories)"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="ml-2 cursor-pointer"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path
                                                fill="green"
                                                d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                                                />
                                            </svg> Add
                                        </div>
                                        <div class="col-lg-6 mb-3">
                                            <!--          Remove Svg Icon-->
                                            <svg
                                                v-show="phoneNumbers.length > 1"
                                                @click="removeField(index, form.ticketCategories)"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="ml-2 cursor-pointer"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path
                                                fill="#EC4899"
                                                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                                                />
                                            </svg> Remove
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="col-lg-12 mb-3">
                                        <label>Event Ticket Price</label>
                                        <input type="number" class="input" placeholder="Enter no of tickets">
                                    </div>
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
import axios from 'axios';

export default {
    components: { DashboardSidebar, DashboardNavbar, DashboardFooter },
    data() {
        return {
            categories: null,
            accessibility: "free",
            priceType: "single",
            form: {
                id: "",
                name: "",
                type: "",
                venue: "",
                start_date: "",
                end_date: "",
                start_time: "",
                end_time: "",
                price: 0,
                tickets: "",
                description: "",
                isFree: false,
                pricing: "",
                image: "",
                category_id: "",
                venue_image: "",
                ticketCategories: [
                    {
                        name: "",
                        price: 0,
                    },
                ],
            },
        };
    },

    methods: {
        addField(value, fieldType) {
            fieldType.push({ value: "" });
        },

        removeField(index, fieldType) {
            fieldType.splice(index, 1);
        },

        loadAllEventCategory() {
            axios.get('admin/events/category/all')
            .then(
                response => {
                    // this.prepPagination(response.data.data);
                    this.categories = response.data.data.data;    
                }
            ).catch (
                error => {
                    this.$notify({
                        type: "error",
                        title: error.response.data.message,
                        duration: 5000,
                        speed: 1000,
                    });
                }
            )
        },

    },
    
    created() 
    {
        this.loadAllEventCategory();
    },

    mounted() {
        this.loadAllEventCategory();
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