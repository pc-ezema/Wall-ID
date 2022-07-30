<template>
  <nav class="sidebar">
    <div class="logo d-flex justify-content-between">
      <router-link to="/individual-dashboard/home"
        ><a class="large_logo"><img src="@/assets/img/logo.png" alt="" /></a
      ></router-link>
      <router-link to="/individual-dashboard/home"
        ><a class="small_logo"
          ><img src="@/assets/img/mini_logo.png" alt="" /></a
      ></router-link>
      <div class="sidebar_close_icon d-lg-none">
        <i class="ti-close"></i>
      </div>
    </div>
    <ul id="sidebar_menu">
      <!--Dashboard-->
      <li class="">
        <router-link to="/individual-dashboard/home" class="menuRouter">
          <a aria-expanded="false">
            <div class="nav_icon_small">
              <img src="@/assets/img/dashAssets/menu-dash.png" />
            </div>
            <div class="nav_title">
              <span>Dashboard</span>
            </div>
          </a>
        </router-link>
      </li>
      <!--ID Card Management-->
      <li class="">
        <router-link to="#" class="has-arrow menuRouter">
          <a aria-expanded="false">
            <div class="nav_icon_small">
              <img src="@/assets/img/dashAssets/menu-card.png" />
            </div>
            <div class="nav_title">
              <span>ID Card Management</span>
            </div>
          </a>
        </router-link>
        <ul>
          <li>
            <router-link
              to="/individual-dashboard/id-card-management"
              class="menuRouter"
              ><a>Overview</a></router-link
            >
          </li>
          <li>
            <router-link to="/individual-dashboard/add-card" class="menuRouter"
              ><a>Add Cards</a></router-link
            >
          </li>
          <li>
            <router-link to="/individual-dashboard/my-cards" class="menuRouter"
              ><a>My Cards</a></router-link
            >
          </li>
          <li>
            <router-link
              to="/individual-dashboard/pending-cards"
              class="menuRouter"
              ><a>Pending Cards</a></router-link
            >
          </li>
        </ul>
      </li>
      <!--Event Management-->
      <li class="">
        <router-link to="#" class="has-arrow menuRouter">
          <a aria-expanded="false">
            <div class="nav_icon_small">
              <img src="@/assets/img/dashAssets/menu-event.png" />
            </div>
            <div class="nav_title">
              <span>Event Management</span>
            </div>
          </a>
        </router-link>
        <ul>
          <li>
            <router-link
              to="/individual-dashboard/event-management"
              class="menuRouter"
              ><a>Overview</a></router-link
            >
          </li>
          <li>
            <router-link
              to="/individual-dashboard/upcoming-event"
              class="menuRouter"
              ><a>Upcoming Event</a></router-link
            >
          </li>
          <li>
            <router-link
              to="/individual-dashboard/event-gallery"
              class="menuRouter"
              ><a>Event Gallery</a></router-link
            >
          </li>
          <li>
            <router-link
              to="/individual-dashboard/create-event"
              class="menuRouter"
              ><a>Create Event</a></router-link
            >
          </li>
          <li>
            <router-link
              to="/individual-dashboard/invitation"
              class="menuRouter"
              ><a>Invitations</a></router-link
            >
          </li>
          <li>
            <router-link
              to="/individual-dashboard/event-history"
              class="menuRouter"
              ><a>History</a></router-link
            >
          </li>
        </ul>
      </li>
      <!--Membership & Subscription-->
      <li class="">
        <router-link to="#" class="has-arrow menuRouter">
          <a aria-expanded="false">
            <div class="nav_icon_small">
              <img src="@/assets/img/dashAssets/menu-member.png" />
            </div>
            <div class="nav_title">
              <span
                >Membership & <br />
                Subscription</span
              >
            </div>
          </a>
        </router-link>
        <ul>
          <li>
            <router-link
              to="/individual-dashboard/membership-subscription"
              class="menuRouter"
              ><a>Overview</a></router-link
            >
          </li>
          <li>
            <router-link
              to="/individual-dashboard/memberships"
              class="menuRouter"
              ><a>Membership</a></router-link
            >
          </li>
          <li>
            <router-link
              to="/individual-dashboard/subscriptions"
              class="menuRouter"
              ><a>Subscription</a></router-link
            >
          </li>
          <li>
            <router-link to="/individual-dashboard/history" class="menuRouter"
              ><a>History</a></router-link
            >
          </li>
        </ul>
      </li>
      <!--Verification-->
      <li class="">
        <router-link to="#" class="has-arrow menuRouter">
          <a aria-expanded="false">
            <div class="nav_icon_small">
              <img src="@/assets/img/dashAssets/menu-verify.png" />
            </div>
            <div class="nav_title">
              <span>Verification</span>
            </div>
          </a>
        </router-link>
        <ul>
          <li>
            <router-link
              to="/individual-dashboard/verification-request"
              class="menuRouter"
              ><a>Verification Request</a></router-link
            >
          </li>
          <li>
            <router-link
              to="/individual-dashboard/view-verification-request"
              class="menuRouter"
              ><a>View Verification Request</a></router-link
            >
          </li>
        </ul>
      </li>
      <!--My Wallet-->
      <!-- <li class="">
                <router-link to="#" class="has-arrow menuRouter">
                    <a aria-expanded="false">
                        <div class="nav_icon_small">
                            <img src="@/assets/img/dashAssets/menu-wallet.png">
                        </div>
                        <div class="nav_title">
                            <span>My Wallet</span>
                        </div>
                    </a>
                </router-link>
               <ul>
                  <li><router-link to="/individual-dashboard/my-wallet" class="menuRouter"><a>Overview</a></router-link></li>
                  <li><router-link to="/individual-dashboard/add-card" class="menuRouter"><a>Add Card</a></router-link></li>
                  <li><router-link to="/individual-dashboard/id-cards" class="menuRouter"><a>ID Cards</a></router-link></li>
                  <li><router-link to="/individual-dashboard/membership-cards" class="menuRouter"><a>Membership Cards</a></router-link></li>
                  <li><router-link to="/individual-dashboard/tickets" class="menuRouter"><a>Tickets</a></router-link></li>
               </ul>
           </li> -->
      <!--Log Out-->
      <li class="">
        <router-link to="#" class="menuRouter">
          <a
            aria-expanded="false"
            href="javascript:void(0)"
            @click="logoutClick"
          >
            <div class="nav_icon_small">
              <img src="@/assets/img/dashAssets/menu-logout.png" />
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
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      axios.post("logout");
      this.$router.replace("/");
    },
  },
};
</script>
