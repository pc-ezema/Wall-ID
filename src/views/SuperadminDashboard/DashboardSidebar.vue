<template>
    <nav class="sidebar">
         <div class="logo d-flex justify-content-between">
            <router-link to="/superadmin-dashboard/home"><a class="large_logo"><img src="@/assets/img/logo.png" alt=""></a></router-link>
            <router-link to="/superadmin-dashboard/home"><a class="small_logo"><img src="@/assets/img/mini_logo.png" alt=""></a></router-link>
            <div class="sidebar_close_icon d-lg-none">
               <i class="ti-close"></i>
            </div>
         </div>
         <ul id="sidebar_menu">
            <!--Dashboard-->
            <li class="">
                <router-link to="/superadmin-dashboard/home" class="menuRouter">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/dashAssets/menu-dash.png">
                        </div>
                        <div class="nav_title">
                            <span>Dashboard</span>
                        </div>
                    </a>
               </router-link>
            </li>
            <!--Users-->
            <li class="">
                <router-link to="#" class="has-arrow menuRouter">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/dashAssets/menu-card.png">
                        </div>
                        <div class="nav_title">
                            <span>Users</span>
                        </div>
                    </a>
                </router-link>
               <ul>
                  <li><router-link to="/superadmin-dashboard/all-users" class="menuRouter"><a>All Users</a></router-link></li>
                  <li><router-link to="/superadmin-dashboard/active-users" class="menuRouter"><a>Active Users</a></router-link></li>
                  <li><router-link to="/superadmin-dashboard/suspended-users" class="menuRouter"><a>Suspended Users</a></router-link></li>
               </ul>
            </li>
            <!--Members-->
            <li class="">
                <router-link to="#" class="has-arrow menuRouter">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/dashAssets/menu-card.png">
                        </div>
                        <div class="nav_title">
                            <span>Members</span>
                        </div>
                    </a>
                </router-link>
                <ul>
                   <li><router-link to="/superadmin-dashboard/all-members" class="menuRouter"><a>All Members</a></router-link></li>
                </ul>
             </li>
             <!--ID Card Management-->
            <li class="">
                <router-link to="#" class="has-arrow menuRouter">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/dashAssets/menu-card.png">
                        </div>
                        <div class="nav_title">
                            <span>ID Card Management</span>
                        </div>
                    </a>
                </router-link>
                <ul>
                   <li><router-link to="/superadmin-dashboard/all-templates" class="menuRouter"><a>All Templates</a></router-link></li>
                   <li><router-link to="/superadmin-dashboard/all-idcards" class="menuRouter"><a>All IDCards</a></router-link></li>
                </ul>
             </li>
            <!--Organisation-->
            <!-- <li class="">
                <router-link to="#" class="has-arrow menuRouter">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/dashAssets/menu-member.png">
                        </div>
                        <div class="nav_title">
                            <span>Organisations</span>
                        </div>
                    </a>
                </router-link>
                <ul>
                   <li><router-link to="/superadmin-dashboard/all-organisations" class="menuRouter"><a>All Organisations</a></router-link></li>
                   <li><router-link to="/superadmin-dashboard/activated-organisations" class="menuRouter"><a>Activated Organisations</a></router-link></li>
                   <li><router-link to="/superadmin-dashboard/suspended-organisations" class="menuRouter"><a>Suspended Organisations</a></router-link></li>
                </ul>
             </li> -->
            <!--Events-->
            <li class="">
                <router-link to="#" class="has-arrow menuRouter">
                    <a aria-expanded="false">
                    <div class="nav_icon_small">
                        <img src="@/assets/img/dashAssets/menu-event.png">
                    </div>
                    <div class="nav_title">
                        <span>Events</span>
                    </div>
                    </a>
                </router-link>
                <ul>
                   <li><router-link to="/superadmin-dashboard/all-events" class="menuRouter"><a>All Events</a></router-link></li>
                   <li><router-link to="/superadmin-dashboard/event-category" class="menuRouter"><a>Event Category</a></router-link></li>
                </ul>
            </li>
            <!--Payment History-->
            <li class="">
                <router-link to="#" class="has-arrow menuRouter">
                    <a aria-expanded="false">
                    <div class="nav_icon_small">
                        <img src="@/assets/img/dashAssets/menu-wallet.png">
                    </div>
                    <div class="nav_title">
                        <span>Payment History</span>
                    </div>
                    </a>
                </router-link>
                <ul>
                   <li><router-link to="/superadmin-dashboard/ticket-payment" class="menuRouter"><a>Ticket Payment</a></router-link></li>
                   <li><router-link to="/superadmin-dashboard/subscription-payment" class="menuRouter"><a>Subscription Payment</a></router-link></li>
                </ul>
            </li>
            <!--verification-->
            <li class="">
                <router-link to="#" class="has-arrow menuRouter">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/dashAssets/menu-member.png">
                        </div>
                        <div class="nav_title">
                            <span>Verification</span>
                        </div>
                    </a>
                </router-link>
                <ul>
                   <li><router-link to="/superadmin-dashboard/all-verifiers" class="menuRouter"><a>All Verifier</a></router-link></li>
                </ul>
             </li>
            <!--Admins-->
            <!-- <li class="">
                <router-link to="#" class="has-arrow menuRouter">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/dashAssets/menu-verify.png">
                        </div>
                        <div class="nav_title">
                            <span>Admins</span>
                        </div>
                    </a>
                </router-link>
               <ul>
                  <li><router-link to="/superadmin-dashboard/all-admins" class="menuRouter"><a>View All</a></router-link></li>
               </ul>
           </li> -->
            <!--Log Out-->
            <li class="">
                <router-link to="#" class="menuRouter">
                    <a aria-expanded="false" href="javascript:void(0)" @click="logoutClick">
                    <div class="nav_icon_small">
                        <img src="@/assets/img/dashAssets/menu-logout.png">
                    </div>
                    <div class="nav_title">
                        <span>Log Out</span>
                    </div>
                    </a>
                </router-link>
            </li>
         </ul>
      </nav>
</template>
<style scoped src="@/assets/css/styleDashboard.css"></style>
<script>
    export default {
        methods: {
            logoutClick() {
                localStorage.removeItem('token');
                this.$store.dispatch('user', null);
                this.$router.push('/');
            }
        },
    }
</script>