<template>
    <div class="container-fluid no-gutters">
            <div class="row">
               <div class="col-lg-12 p-0 ">
                  <div class="header_iner d-flex justify-content-between align-items-center">
                     <div class="sidebar_icon d-lg-none">
                        <i class="ti-menu"></i>
                     </div>
                     <div class="line_icon open_miniSide d-none d-lg-block">
                        <img src="@/assets/img/line_img.png" style="cursor: pointer;">
                     </div>
                     <div class="header_right d-flex justify-content-between align-items-center">
                        <div class="header_notification_warp d-flex align-items-center">
                           <li>
                              <a class="bell_notification_clicker" href="#"> <img src="@/assets/img/icon/bell.svg" alt="">
                              <span>3</span>
                              </a>
                              <div class="Menu_NOtification_Wrap">
                                 <div class="notification_Header">
                                    <h4>Notifications</h4>
                                 </div>
                                 <div class="Notification_body">
                                    <div class="single_notify d-flex align-items-center">
                                       <div class="notify_content">
                                          <a href="#">
                                             <h5>Notification Title</h5>
                                          </a>
                                          <p>Hello! You've gotten a new notification content.</p>
                                       </div>
                                    </div>
                                    <div class="single_notify d-flex align-items-center">
                                        <div class="notify_content">
                                           <a href="#">
                                              <h5>Notification Title</h5>
                                           </a>
                                           <p>Hello! You've gotten a new notification content.</p>
                                        </div>
                                     </div>
                                     <div class="single_notify d-flex align-items-center">
                                        <div class="notify_content">
                                           <a href="#">
                                              <h5>Notification Title</h5>
                                           </a>
                                           <p>Hello! You've gotten a new notification content.</p>
                                        </div>
                                     </div>
                                 </div>
                              </div>
                           </li>
                        </div>
                        <div class="profile_info">
                           <img src="@/assets/img/client_img.png" alt="#">
                           <div class="profile_info_iner">
                              <div class="profile_author_name">
                                 <p>Organisation</p>
                                 <h5>{{ user.details.name }}</h5>
                              </div>
                              <div class="profile_info_details">
                                 <router-link to="/organisation-dashboard/my-profile"><a>My Profile</a></router-link>
                                 <router-link to="/organisation-dashboard/my-wallet"><a>My Wallet</a></router-link>
                                 <router-link to="/organisation-dashboard/settings"><a>Settings</a></router-link>
                                 <a href="javascript:void(0)" @click="logoutClick">Log Out</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
</template>

<style scoped src="@/assets/css/styleDashboard.css"></style>
<script>
import {mapGetters} from 'vuex';

export default {
   computed: {
      ...mapGetters(['user'])
   },

   methods: {
      logoutClick() {
         localStorage.removeItem('token');
         this.$store.dispatch('user', null);
         this.$router.push('/');
      }
   },

   mounted() {
    window.scrollTo(0, 0);

    let externalScriptJquery = document.createElement("script");
    let externalScriptMetisMenu = document.createElement("script");
    let externalScriptCustom = document.createElement("script");

    externalScriptJquery.setAttribute(
      "src",
      "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    );
    externalScriptMetisMenu.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/metisMenu.js"
    );
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );

    document.head.appendChild(externalScriptJquery);
    document.head.appendChild(externalScriptMetisMenu);
    document.head.appendChild(externalScriptCustom);
  },
};
</script>