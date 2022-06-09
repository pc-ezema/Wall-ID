import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pricing from '../views/Pricing.vue'
import Faq from '../views/Faq.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import SignupOption from '../views/SignupOption.vue'
import SignupIndividual from '../views/SignupIndividual.vue'
import SignupOrganisation from '../views/SignupOrganisation.vue'
import Page404 from '../views/Page404.vue'

// Individual Dashboard
import IndividualHome from '../views/IndividualDashboard/Home.vue'
import IndividualMyProfile from '../views/IndividualDashboard/MyProfile.vue'
import IndividualDashboardSetting from '../views/IndividualDashboard/DashboardSetting.vue'
//id card management
import IndividualIDCardManagement from '../views/IndividualDashboard/IDCardManagement.vue'
import IndividualAddCard from '../views/IndividualDashboard/AddCard.vue'
import IndividualOrganisationDetails from '../views/IndividualDashboard/OrganisationDetails.vue'
import IndividualCreateID from '../views/IndividualDashboard/CreateID.vue'
import IndividualMyCards from '../views/IndividualDashboard/MyCards.vue'
import IndividualPendingCards from '../views/IndividualDashboard/PendingCards.vue'
//event mamagement
import IndividualEventManagement from '../views/IndividualDashboard/EventManagement.vue'
import IndividualUpcomingEvent from '../views/IndividualDashboard/UpcomingEvent.vue'
import IndividualEventGallery from '../views/IndividualDashboard/EventGallery.vue'
import IndividualCreateEvent from '../views/IndividualDashboard/CreateEvent.vue'
import IndividualInvitation from '../views/IndividualDashboard/Invitation.vue'
import IndividualEventHistory from '../views/IndividualDashboard/EventHistory.vue'
//membership & subscription
import IndividualMembershipAndSubscription from '../views/IndividualDashboard/MembershipAndSubscription.vue'
import IndividualSubscription from '../views/IndividualDashboard/Subscription.vue'
import IndividualAddSubscriptionPlan from '../views/IndividualDashboard/AddSubscriptionPlan.vue'
import IndividualMembership from '../views/IndividualDashboard/Membership.vue'
import IndividualJoinNewOrganisation from '../views/IndividualDashboard/JoinNewOrganisation.vue'
import IndividualChooseOrganisation from '../views/IndividualDashboard/ChooseOrganisation.vue'
import IndividualMembershipSubscriptionHistory from '../views/IndividualDashboard/MembershipSubscriptionHistory.vue'
// verification
import IndividualVerificationRequest from '../views/IndividualDashboard/VerificationRequest.vue'
import IndividualOrganisationVerifier from '../views/IndividualDashboard/OrganisationVerifier.vue'
// my wallet
/*
import IndividualMyWallet from '../views/IndividualDashboard/MyWallet.vue'
import IndividualIDCard from '../views/IndividualDashboard/IDCard.vue'
import IndividualMembershipCard from '../views/IndividualDashboard/MembershipCard.vue'
import IndividualTicket from '../views/IndividualDashboard/Ticket.vue'
*/


// Organisation Dashboard
import OrganisationHome from '../views/OrganisationDashboard/Home.vue'
import OrganisationMyProfile from '../views/OrganisationDashboard/MyProfile.vue'
import OrganisationDashboardSetting from '../views/OrganisationDashboard/DashboardSetting.vue'
//id card management
import OrganisationIDCardManagement from '../views/OrganisationDashboard/IDCardManagement.vue'
import OrganisationCreateTemplate from '../views/OrganisationDashboard/CreateTemplate.vue'
import OrganisationCreatedTemplate from '../views/OrganisationDashboard/CreatedTemplate.vue'
import OrganisationEditTemplate from '../views/OrganisationDashboard/EditTemplate.vue'
import OrganisationMemberID from '../views/OrganisationDashboard/MemberID.vue'
// event management
import OrganisationEventManagement from '../views/OrganisationDashboard/EventManagement.vue'
import OrganisationUpcomingEvent from '../views/OrganisationDashboard/UpcomingEvent.vue'
import OrganisationEventGallery from '../views/OrganisationDashboard/EventGallery.vue'
import OrganisationCreateEvent from '../views/OrganisationDashboard/CreateEvent.vue'
import OrganisationInvitation from '../views/OrganisationDashboard/Invitation.vue'
import OrganisationEventHistory from '../views/OrganisationDashboard/EventHistory.vue'
// membership & subscription
import OrganisationMembershipAndSubscription from '../views/OrganisationDashboard/MembershipAndSubscription.vue'
import OrganisationSubscription from '../views/OrganisationDashboard/Subscription.vue'
import OrganisationMembership from '../views/OrganisationDashboard/Membership.vue'
import OrganisationMembershipSubscriptionHistory from '../views/OrganisationDashboard/MembershipSubscriptionHistory.vue'
// verification
import OrganisationVerification from '../views/OrganisationDashboard/Verification.vue'
import OrganisationCreateVerifier from '../views/OrganisationDashboard/CreateVerifier.vue'
import OrganisationViewVerifier from '../views/OrganisationDashboard/ViewVerifier.vue'
import OrganisationPendingRequest from '../views/OrganisationDashboard/PendingRequest.vue'
// my wallet
/*
import OrganisationMyWallet from '../views/OrganisationDashboard/MyWallet.vue'
import OrganisationAddCard from '../views/OrganisationDashboard/AddCard.vue'
import OrganisationIDCard from '../views/OrganisationDashboard/IDCard.vue'
import OrganisationMembershipCard from '../views/OrganisationDashboard/MembershipCard.vue'
import OrganisationTicket from '../views/OrganisationDashboard/Ticket.vue'
*/

const routes = [
  {path: '/', name: 'Home', component: Home,
    meta: {
      title: 'WALLID',
      metaTags: [
        {
          name: 'description',
          content: 'WALlID'
        },
        {
          name: 'keyword',
          content: 'WALLID'
        }
      ]
    }
  },
  {path: '/about', name: 'About', component: About,
    meta: {
      title: 'About | WALLID'
    }
  },
  {path: '/pricing', name: 'Pricing', component: Pricing,
    meta: {
      title: 'Pricing | WALLID'
    }
  },
  {path: '/faq', name: 'Faq', component: Faq,
    meta: {
      title: 'Faq | WALLID'
    }
  },
  {path: '/contact', name: 'Contact', component: Contact,
    meta: {
      title: 'Contact | WALLID'
    }
  },
  {path: '/login', name: 'Login', component: Login,
    meta: {
      title: 'Login | WALLID'
    }
  },
  {path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword,
    meta: {
      title: 'Forgot Password | WALLID'
    }
  },
  {path: '/signup-option', name: 'SignupOption', component: SignupOption,
    meta: {
      title: 'Signup Option | WALLID'
    }
  },
  {path: '/signup-individual', name: 'SignupIndividual', component: SignupIndividual,
    meta: {
      title: 'Signup Individual | WALLID'
    }
  },
  {path: '/signup-organisation', name: 'SignupOrganisation', component: SignupOrganisation,
    meta: {
      title: 'Signup Organisation | WALLID'
    }
  },
  {path: '/:catchAll(.*)', name: 'Page404', component: Page404,
  meta: {
    title: 'Page Not Found | WALLID'
  }
  },

  // Individual Dashboard
  {path: '/individual-dashboard/home', name: 'IndividualHome', component: IndividualHome,
    meta: {
      title: 'Dashboard - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/my-profile', name: 'IndividualMyProfile', component: IndividualMyProfile,
    meta: {
      title: 'My Profile - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/settings', name: 'IndividualDashboardSetting', component: IndividualDashboardSetting,
    meta: {
      title: 'Setting - Individual Dashboard | WALLID'
    }
  },
  //id card management
  {path: '/individual-dashboard/id-card-management', name: 'IndividualIDCardManagement', component: IndividualIDCardManagement,
    meta: {
      title: 'ID Card Management - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/add-card', name: 'IndividualAddCard', component: IndividualAddCard,
    meta: {
      title: 'Add Card - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/organisation-details', name: 'IndividualOrganisationDetails', component: IndividualOrganisationDetails,
     meta: {
       title: 'Organisation Details - Individual Dashboard | WALLID'
     }
 },
  {path: '/individual-dashboard/create-id', name: 'IndividualCreateID', component: IndividualCreateID,
     meta: {
       title: 'Create ID - Individual Dashboard | WALLID'
    }
   },
  {path: '/individual-dashboard/my-cards', name: 'IndividualMyCards', component: IndividualMyCards,
    meta: {
      title: 'My Cards - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/pending-cards', name: 'IndividualPendingCards', component: IndividualPendingCards,
    meta: {
      title: 'Pending Cards - Individual Dashboard | WALLID'
    }
  },
  //event mamagement
  {path: '/individual-dashboard/event-management', name: 'IndividualEventManagement', component: IndividualEventManagement,
    meta: {
      title: 'Event Management - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/upcoming-event', name: 'IndividualUpcomingEvent', component: IndividualUpcomingEvent,
    meta: {
      title: 'Upcoming Event - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/event-gallery', name: 'IndividualEventGallery', component: IndividualEventGallery,
    meta: {
      title: 'Event Gallery - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/create-event', name: 'IndividualCreateEvent', component: IndividualCreateEvent,
    meta: {
      title: 'Create Event - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/invitation', name: 'IndividualInvitation', component: IndividualInvitation,
    meta: {
      title: 'Invitation - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/event-history', name: 'IndividualEventHistory', component: IndividualEventHistory,
    meta: {
      title: 'Event History - Individual Dashboard | WALLID'
    }
  },
  //membership & subscription
  {path: '/individual-dashboard/membership-subscription', name: 'IndividualMembershipAndSubscription', component: IndividualMembershipAndSubscription,
    meta: {
      title: 'Membership & Subscription - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/subscriptions', name: 'IndividualSubscription', component: IndividualSubscription,
    meta: {
      title: 'Subscription - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/add-subscription-plan', name: 'IndividualAddSubscriptionPlan', component: IndividualAddSubscriptionPlan,
    meta: {
      title: 'Add Subscription Plan - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/memberships', name: 'IndividualMembership', component: IndividualMembership,
    meta: {
      title: 'Membership - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/join-new-organisation', name: 'IndividualJoinNewOrganisation', component: IndividualJoinNewOrganisation,
    meta: {
      title: 'Join New Organisation - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/choose-organisation', name: 'IndividualChooseOrganisation', component: IndividualChooseOrganisation,
    meta: {
      title: 'Choose Organisation - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/history', name: 'IndividualMembershipSubscriptionHistory', component: IndividualMembershipSubscriptionHistory,
    meta: {
      title: 'Membership & Subscription History - Individual Dashboard | WALLID'
    }
  },
  //verification
  {path: '/individual-dashboard/verification-request', name: 'IndividualVerificationRequest', component: IndividualVerificationRequest,
    meta: {
      title: 'Verification Request - Individual Dashboard | WALLID'
    }
  },
  {path: '/individual-dashboard/organisation-verifier', name: 'IndividualOrganisationVerifier', component: IndividualOrganisationVerifier,
    meta: {
      title: 'Organisation Verifier - Individual Dashboard | WALLID'
    }
  },


   // Organisation Dashboard
   {path: '/organisation-dashboard/home', name: 'OrganisationHome', component: OrganisationHome,
    meta: {
      title: 'Dashboard - Organisation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/my-profile', name: 'OrganisationMyProfile', component: OrganisationMyProfile,
    meta: {
      title: 'My Profile - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/settings', name: 'OrganisationDashboardSetting', component: OrganisationDashboardSetting,
    meta: {
      title: 'Setting - Orgainsation Dashboard | WALLID'
    }
  },
  // id card management
  {path: '/organisation-dashboard/id-card-management', name: 'OrganisationIDCardManagement', component: OrganisationIDCardManagement,
    meta: {
      title: 'ID Card Management - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/create-template', name: 'OrganisationCreateTemplate', component: OrganisationCreateTemplate,
    meta: {
      title: 'Create Template - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/created-template', name: 'OrganisationCreatedTemplate', component: OrganisationCreatedTemplate,
    meta: {
      title: 'Created Template - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/edit-template', name: 'OrganisationEditTemplate', component: OrganisationEditTemplate,
    meta: {
      title: 'Edit Template - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/member-id', name: 'OrganisationMemberID', component: OrganisationMemberID,
    meta: {
      title: 'Member ID - Orgainsation Dashboard | WALLID'
    }
  },
  // event management
  {path: '/organisation-dashboard/event-management', name: 'OrganisationEventManagement', component: OrganisationEventManagement,
    meta: {
      title: 'Event Management - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/upcoming-event', name: 'OrganisationUpcomingEvent', component: OrganisationUpcomingEvent,
    meta: {
      title: 'Upcoming Event - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/event-gallery', name: 'OrganisationEventGallery', component: OrganisationEventGallery,
    meta: {
      title: 'Event Gallery - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/create-event', name: 'OrganisationCreateEvent', component: OrganisationCreateEvent,
    meta: {
      title: 'Create Event - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/invitation', name: 'OrganisationInvitation', component: OrganisationInvitation,
    meta: {
      title: 'Invitation - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/event-history', name: 'OrganisationEventHistory', component: OrganisationEventHistory,
    meta: {
      title: 'Event History - Orgainsation Dashboard | WALLID'
    }
  },
  // membership & subscription
  {path: '/organisation-dashboard/membership-subscription', name: 'OrganisationMembershipAndSubscription', component: OrganisationMembershipAndSubscription,
    meta: {
      title: 'Membership & Subscription - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/subscriptions', name: 'OrganisationSubscription', component: OrganisationSubscription,
    meta: {
      title: 'Subscription - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/memberships', name: 'OrganisationMembership', component: OrganisationMembership,
    meta: {
      title: 'Membership - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/history', name: 'OrganisationMembershipSubscriptionHistory', component: OrganisationMembershipSubscriptionHistory,
    meta: {
      title: 'Membership & Subscription History - Orgainsation Dashboard | WALLID'
    }
  },
  // verification
  {path: '/organisation-dashboard/verification', name: 'OrganisationVerification', component: OrganisationVerification,
    meta: {
      title: 'Verification - Orgainsation Dashboard | WALLID'
    }
  },
  {path: '/organisation-dashboard/create-verifier', name: 'OrganisationCreateVerifier', component: OrganisationCreateVerifier,
    meta: {
      title: 'Create Verifier - Orgainsation Dashboard | WALLID'
    }
  },
  {path
    : '/organisation-dashboard/view-verifier', name: 'OrganisationViewVerifier', component: OrganisationViewVerifier,
    meta: {
      title: 'View Verifier - Orgainsation Dashboard | WALLID'
    }
  },
  {path
    : '/organisation-dashboard/pending-request', name: 'OrganisationPendingRequest', component: OrganisationPendingRequest,
    meta: {
      title: 'Pending Request - Orgainsation Dashboard | WALLID'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));
  next();
});