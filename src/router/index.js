import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Pricing from "../views/Pricing.vue";
import Faq from "../views/Faq.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import SignupOption from "../views/SignupOption.vue";
import SignupIndividual from "../views/SignupIndividual.vue";
import SignupOrganisation from "../views/SignupOrganisation.vue";
import EmailVerification from "../views/EmailVerification.vue";
import AccountVerified from "../views/AccountVerified.vue";
import Page404 from "../views/Page404.vue";
import AdminLogin from "../views/AdminLogin.vue";

// Individual Dashboard
import IndividualHome from "../views/IndividualDashboard/Home.vue";
import IndividualMyProfile from "../views/IndividualDashboard/MyProfile.vue";
import IndividualDashboardSetting from "../views/IndividualDashboard/DashboardSetting.vue";
//id card management
import IndividualIDCardManagement from "../views/IndividualDashboard/IDCardManagement.vue";
import IndividualAddCard from "../views/IndividualDashboard/AddCard.vue";
import IndividualOrganisationDetails from "../views/IndividualDashboard/OrganisationDetails.vue";
import IndividualCreateID from "../views/IndividualDashboard/CreateID.vue";
import IndividualMyCards from "../views/IndividualDashboard/MyCards.vue";
import IndividualPendingCards from "../views/IndividualDashboard/PendingCards.vue";
//event mamagement
import IndividualEventManagement from "../views/IndividualDashboard/EventManagement.vue";
import IndividualUpcomingEvent from "../views/IndividualDashboard/UpcomingEvent.vue";
import IndividualEventGallery from "../views/IndividualDashboard/EventGallery.vue";
import IndividualCreateEvent from "../views/IndividualDashboard/CreateEvent.vue";
import IndividualInvitation from "../views/IndividualDashboard/Invitation.vue";
import IndividualEventHistory from "../views/IndividualDashboard/EventHistory.vue";
//membership & subscription
import IndividualMembershipAndSubscription from "../views/IndividualDashboard/MembershipAndSubscription.vue";
import IndividualSubscription from "../views/IndividualDashboard/Subscription.vue";
import IndividualAddSubscriptionPlan from "../views/IndividualDashboard/AddSubscriptionPlan.vue";
import IndividualChooseSubscriptionPlan from "../views/IndividualDashboard/ChooseSubscriptionPlan.vue";
import IndividualMembership from "../views/IndividualDashboard/Membership.vue";
import IndividualJoinNewOrganisation from "../views/IndividualDashboard/JoinNewOrganisation.vue";
import IndividualChooseOrganisation from "../views/IndividualDashboard/ChooseOrganisation.vue";
import IndividualMembershipSubscriptionHistory from "../views/IndividualDashboard/MembershipSubscriptionHistory.vue";
// verification
import IndividualVerificationRequest from "../views/IndividualDashboard/VerificationRequest.vue";
import IndividualOrganisationVerifier from "../views/IndividualDashboard/OrganisationVerifier.vue";
import IndividualViewVerificationRequest from "../views/IndividualDashboard/ViewVerificationRequest.vue";
import IndividualVerifier from "../views/IndividualDashboard/Verifier.vue";
import IndividualEventVerifier from "../views/IndividualDashboard/EventVerifier.vue";
// my wallet
/*
import IndividualMyWallet from '../views/IndividualDashboard/MyWallet.vue'
import IndividualIDCard from '../views/IndividualDashboard/IDCard.vue'
import IndividualMembershipCard from '../views/IndividualDashboard/MembershipCard.vue'
import IndividualTicket from '../views/IndividualDashboard/Ticket.vue'
*/

// Organisation Dashboard
import OrganisationHome from "../views/OrganisationDashboard/Home.vue";
import OrganisationMyProfile from "../views/OrganisationDashboard/MyProfile.vue";
import OrganisationDashboardSetting from "../views/OrganisationDashboard/DashboardSetting.vue";
//id card management
import OrganisationIDCardManagement from "../views/OrganisationDashboard/IDCardManagement.vue";
import OrganisationCreateTemplate from "../views/OrganisationDashboard/CreateTemplate.vue";
import OrganisationAddCard from "../views/OrganisationDashboard/AddCard.vue";
import OrganisationCreateCard from "../views/OrganisationDashboard/CreateCard.vue";
import OrganisationCreatedTemplate from "../views/OrganisationDashboard/CreatedTemplate.vue";
import OrganisationEditTemplate from "../views/OrganisationDashboard/EditTemplate.vue";
import OrganisationMemberID from "../views/OrganisationDashboard/MemberID.vue";
// event management
import OrganisationEventManagement from "../views/OrganisationDashboard/EventManagement.vue";
import OrganisationUpcomingEvent from "../views/OrganisationDashboard/UpcomingEvent.vue";
import OrganisationEventGallery from "../views/OrganisationDashboard/EventGallery.vue";
import OrganisationCreateEvent from "../views/OrganisationDashboard/CreateEvent.vue";
import OrganisationInvitation from "../views/OrganisationDashboard/Invitation.vue";
import OrganisationEventHistory from "../views/OrganisationDashboard/EventHistory.vue";
// membership & subscription
import OrganisationMembershipAndSubscription from "../views/OrganisationDashboard/MembershipAndSubscription.vue";
import OrganisationSubscription from "../views/OrganisationDashboard/Subscription.vue";
import OrganisationMembership from "../views/OrganisationDashboard/Membership.vue";
import OrganisationMembershipSubscriptionHistory from "../views/OrganisationDashboard/MembershipSubscriptionHistory.vue";
// verification
import OrganisationVerification from "../views/OrganisationDashboard/Verification.vue";
import OrganisationCreateVerifier from "../views/OrganisationDashboard/CreateVerifier.vue";
import OrganisationAddVerifier from "../views/OrganisationDashboard/AddVerifier.vue";
import OrganisationViewVerifier from "../views/OrganisationDashboard/ViewVerifier.vue";
import OrganisationEventVerifier from "../views/OrganisationDashboard/EventVerifier.vue";
import OrganisationPendingRequest from "../views/OrganisationDashboard/PendingRequest.vue";
// my wallet
/*
import OrganisationMyWallet from '../views/OrganisationDashboard/MyWallet.vue'
import OrganisationAddCard from '../views/OrganisationDashboard/AddCard.vue'
import OrganisationIDCard from '../views/OrganisationDashboard/IDCard.vue'
import OrganisationMembershipCard from '../views/OrganisationDashboard/MembershipCard.vue'
import OrganisationTicket from '../views/OrganisationDashboard/Ticket.vue'
*/

// Superadmin Dashboard
import SuperadminHome from "../views/SuperadminDashboard/Home.vue";
import SuperadminMyProfile from "../views/SuperadminDashboard/MyProfile.vue";
// users
import SuperadminAllUsers from "../views/SuperadminDashboard/AllUsers.vue";
import SuperadminActiveUsers from "../views/SuperadminDashboard/ActiveUsers.vue";
import SuperadminSuspendedUsers from "../views/SuperadminDashboard/SuspendedUsers.vue";
// members
import SuperadminAllMembers from "../views/SuperadminDashboard/AllMembers.vue";
// ID Card Management
import SuperadminAllTemplates from "../views/SuperadminDashboard/AllTemplates.vue";
import SuperadminAllIDCards from "../views/SuperadminDashboard/AllIDCards.vue";
// organisation
import SuperadminAllOrganisations from "../views/SuperadminDashboard/AllOrganisations.vue";
import SuperadminActivatedOrganisations from "../views/SuperadminDashboard/ActivatedOrganisations.vue";
import SuperadminSuspendedOrganisations from "../views/SuperadminDashboard/SuspendedOrganisations.vue";
// events
import SuperadminAllEvents from "../views/SuperadminDashboard/AllEvents.vue";
import SuperadminEventCategory from "../views/SuperadminDashboard/EventCategory.vue";
// payment history
import SuperadminTicketPayment from "../views/SuperadminDashboard/TicketPayment.vue";
import SuperadminSubscriptionPayment from "../views/SuperadminDashboard/SubscriptionPayment.vue";
// verifier
import SuperadminAllVerifiers from "../views/SuperadminDashboard/AllVerifiers.vue";

import auth from "../middleware/auth";
import guest from "../middleware/guest";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "WALLID",
      metaTags: [
        {
          name: "description",
          content: "WALlID",
        },
        {
          name: "keyword",
          content: "WALLID",
        },
      ],
      meta: {
        middleware: guest,
      },
    },
  },
  {
    path: "/about",
    name: "#About",
    component: About,
    meta: {
      title: "About | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
    meta: {
      title: "Pricing | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
    meta: {
      title: "Faq | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
    meta: {
      title: "Reset Password | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/signup-option",
    name: "SignupOption",
    component: SignupOption,
    meta: {
      title: "Signup Option | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/signup-individual",
    name: "SignupIndividual",
    component: SignupIndividual,
    meta: {
      title: "Signup Individual | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/signup-organisation",
    name: "SignupOrganisation",
    component: SignupOrganisation,
    meta: {
      title: "Signup Organisation | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/email_verification/:random/:email",
    name: "EmailVerification",
    component: EmailVerification,
    meta: {
      title: "Email Verification | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/account/verified",
    name: "AccountVerified",
    component: AccountVerified,
    meta: {
      title: "Account Verified Successfully | WALLID",
      middleware: guest,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "Page404",
    component: Page404,
    meta: {
      title: "Page Not Found | WALLID",
      middleware: guest,
    },
  },

  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
    meta: {
      title: "Admin Login | WALLID",
      middleware: guest,
    },
  },

  // Individual Dashboard
  {
    path: "/individual-dashboard/home",
    name: "IndividualHome",
    component: IndividualHome,
    meta: {
      title: "Dashboard - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/my-profile",
    name: "IndividualMyProfile",
    component: IndividualMyProfile,
    meta: {
      title: "My Profile - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/settings",
    name: "IndividualDashboardSetting",
    component: IndividualDashboardSetting,
    meta: {
      title: "Setting - Individual Dashboard | WALLID",
      middleware: [auth, guest],
    },
  },
  //id card management
  {
    path: "/individual-dashboard/id-card-management",
    name: "IndividualIDCardManagement",
    component: IndividualIDCardManagement,
    meta: {
      title: "ID Card Management - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/add-card",
    name: "IndividualAddCard",
    component: IndividualAddCard,
    meta: {
      title: "Add Card - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/organisation-details/:username",
    name: "IndividualOrganisationDetails",
    component: IndividualOrganisationDetails,
    meta: {
      title: "Organisation Details - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/create-id/:id/:username",
    name: "IndividualCreateID",
    component: IndividualCreateID,
    meta: {
      title: "Create ID - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/my-cards",
    name: "IndividualMyCards",
    component: IndividualMyCards,
    meta: {
      title: "My Cards - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/pending-cards",
    name: "IndividualPendingCards",
    component: IndividualPendingCards,
    meta: {
      title: "Pending Cards - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  //event mamagement
  {
    path: "/individual-dashboard/event-management",
    name: "IndividualEventManagement",
    component: IndividualEventManagement,
    meta: {
      title: "Event Management - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/upcoming-event",
    name: "IndividualUpcomingEvent",
    component: IndividualUpcomingEvent,
    meta: {
      title: "Upcoming Event - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/event-gallery",
    name: "IndividualEventGallery",
    component: IndividualEventGallery,
    meta: {
      title: "Event Gallery - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/create-event",
    name: "IndividualCreateEvent",
    component: IndividualCreateEvent,
    meta: {
      title: "Create Event - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/invitation",
    name: "IndividualInvitation",
    component: IndividualInvitation,
    meta: {
      title: "Invitation - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/event-history",
    name: "IndividualEventHistory",
    component: IndividualEventHistory,
    meta: {
      title: "Event History - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  //membership & subscription
  {
    path: "/individual-dashboard/membership-subscription",
    name: "IndividualMembershipAndSubscription",
    component: IndividualMembershipAndSubscription,
    meta: {
      title: "Membership & Subscription - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/subscriptions",
    name: "IndividualSubscription",
    component: IndividualSubscription,
    meta: {
      title: "Subscription - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/add-subscription-plan",
    name: "IndividualAddSubscriptionPlan",
    component: IndividualAddSubscriptionPlan,
    meta: {
      title: "Add Subscription Plan - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/choose-subscription-plan/:id",
    name: "IndividualAddSubscriptionChoosePlan",
    component: IndividualChooseSubscriptionPlan,
    meta: {
      title: "Choose Subscription Plan - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/memberships",
    name: "IndividualMembership",
    component: IndividualMembership,
    meta: {
      title: "Membership - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/join-new-organisation",
    name: "IndividualJoinNewOrganisation",
    component: IndividualJoinNewOrganisation,
    meta: {
      title: "Join New Organisation - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/choose-organisation/:username",
    name: "IndividualChooseOrganisation",
    component: IndividualChooseOrganisation,
    meta: {
      title: "Choose Organisation - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/history",
    name: "IndividualMembershipSubscriptionHistory",
    component: IndividualMembershipSubscriptionHistory,
    meta: {
      title:
        "Membership & Subscription History - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  //verification
  {
    path: "/individual-dashboard/verification-request",
    name: "IndividualVerificationRequest",
    component: IndividualVerificationRequest,
    meta: {
      title: "Verification Request - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/view-verification-request",
    name: "IndividualViewVerificationRequest",
    component: IndividualViewVerificationRequest,
    meta: {
      title: "View Verification Request - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/verifier",
    name: "IndividualVerifier",
    component: IndividualVerifier,
    meta: {
      title: "Verifier - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/view-verifier-event",
    name: "IndividualViewVerifyEvent",
    component: IndividualEventVerifier,
    meta: {
      title: "View Verifier Event - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/individual-dashboard/organisation-verifier/:username/:id",
    name: "IndividualOrganisationVerifier",
    component: IndividualOrganisationVerifier,
    meta: {
      title: "Organisation Verifier - Individual Dashboard | WALLID",
      middleware: auth,
    },
  },

  // Organisation Dashboard
  {
    path: "/organisation-dashboard/home",
    name: "OrganisationHome",
    component: OrganisationHome,
    meta: {
      title: "Dashboard - Organisation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/my-profile",
    name: "OrganisationMyProfile",
    component: OrganisationMyProfile,
    meta: {
      title: "My Profile - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/settings",
    name: "OrganisationDashboardSetting",
    component: OrganisationDashboardSetting,
    meta: {
      title: "Setting - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  // id card management
  {
    path: "/organisation-dashboard/id-card-management",
    name: "OrganisationIDCardManagement",
    component: OrganisationIDCardManagement,
    meta: {
      title: "ID Card Management - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/add-card",
    name: "OrganisationAddCard",
    component: OrganisationAddCard,
    meta: {
      title: "Add Card - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/create-card/:id/:user_id",
    name: "OrganisationCreateCard",
    component: OrganisationCreateCard,
    meta: {
      title: "Create Card - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/create-template",
    name: "OrganisationCreateTemplate",
    component: OrganisationCreateTemplate,
    meta: {
      title: "Create Template - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/created-template",
    name: "OrganisationCreatedTemplate",
    component: OrganisationCreatedTemplate,
    meta: {
      title: "Created Template - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/edit-template",
    name: "OrganisationEditTemplate",
    component: OrganisationEditTemplate,
    meta: {
      title: "Edit Template - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/member-id",
    name: "OrganisationMemberID",
    component: OrganisationMemberID,
    meta: {
      title: "Member ID - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },

  // event management
  {
    path: "/organisation-dashboard/event-management",
    name: "OrganisationEventManagement",
    component: OrganisationEventManagement,
    meta: {
      title: "Event Management - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/upcoming-event",
    name: "OrganisationUpcomingEvent",
    component: OrganisationUpcomingEvent,
    meta: {
      title: "Upcoming Event - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/event-gallery",
    name: "OrganisationEventGallery",
    component: OrganisationEventGallery,
    meta: {
      title: "Event Gallery - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/create-event",
    name: "OrganisationCreateEvent",
    component: OrganisationCreateEvent,
    meta: {
      title: "Create Event - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/invitation",
    name: "OrganisationInvitation",
    component: OrganisationInvitation,
    meta: {
      title: "Invitation - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/event-history",
    name: "OrganisationEventHistory",
    component: OrganisationEventHistory,
    meta: {
      title: "Event History - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  // membership & subscription
  {
    path: "/organisation-dashboard/membership-subscription",
    name: "OrganisationMembershipAndSubscription",
    component: OrganisationMembershipAndSubscription,
    meta: {
      title: "Membership & Subscription - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/subscriptions",
    name: "OrganisationSubscription",
    component: OrganisationSubscription,
    meta: {
      title: "Subscription - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/memberships",
    name: "OrganisationMembership",
    component: OrganisationMembership,
    meta: {
      title: "Membership - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/history",
    name: "OrganisationMembershipSubscriptionHistory",
    component: OrganisationMembershipSubscriptionHistory,
    meta: {
      title:
        "Membership & Subscription History - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  // verification
  {
    path: "/organisation-dashboard/verification",
    name: "OrganisationVerification",
    component: OrganisationVerification,
    meta: {
      title: "Verification - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/create-verifier",
    name: "OrganisationCreateVerifier",
    component: OrganisationCreateVerifier,
    meta: {
      title: "Create Verifier - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/add-verifier/:id/:user_id",
    name: "OrganisationAddVerifier",
    component: OrganisationAddVerifier,
    meta: {
      title: "Add Verifier - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/view-verifier",
    name: "OrganisationViewVerifier",
    component: OrganisationViewVerifier,
    meta: {
      title: "View Verifier - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/event-verifier",
    name: "OrganisationEventVerifier",
    component: OrganisationEventVerifier,
    meta: {
      title: "Event Verifier - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/organisation-dashboard/pending-request",
    name: "OrganisationPendingRequest",
    component: OrganisationPendingRequest,
    meta: {
      title: "Pending Request - Orgainsation Dashboard | WALLID",
      middleware: auth,
    },
  },

  // Superadmin Dashboard
  {
    path: "/superadmin-dashboard/home",
    name: "SuperadminHome",
    component: SuperadminHome,
    meta: {
      title: "Dashboard - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/superadmin-dashboard/my-profile",
    name: "SuperadminMyProfile",
    component: SuperadminMyProfile,
    meta: {
      title: "My Profile - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  // users
  {
    path: "/superadmin-dashboard/all-users",
    name: "SuperadminAllUsers",
    component: SuperadminAllUsers,
    meta: {
      title: "All Users - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/superadmin-dashboard/active-users",
    name: "SuperadminActiveUsers",
    component: SuperadminActiveUsers,
    meta: {
      title: "Active Users - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/superadmin-dashboard/suspended-users",
    name: "SuperadminSuspendedUsers",
    component: SuperadminSuspendedUsers,
    meta: {
      title: "Suspended Users - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  // members
  {
    path: "/superadmin-dashboard/all-members",
    name: "SuperadminAllMembers",
    component: SuperadminAllMembers,
    meta: {
      title: "All Members - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  // ID Card Management
  {
    path: "/superadmin-dashboard/all-templates",
    name: "SuperadminAllTemplates",
    component: SuperadminAllTemplates,
    meta: {
      title: "All Templates - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/superadmin-dashboard/all-idcards",
    name: "SuperadminAllIDCards",
    component: SuperadminAllIDCards,
    meta: {
      title: "All IDCards - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  // organisations
  {
    path: "/superadmin-dashboard/all-organisations",
    name: "SuperadminAllOrganisations",
    component: SuperadminAllOrganisations,
    meta: {
      title: "All Organisations - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/superadmin-dashboard/activated-organisations",
    name: "SuperadminActivatedOrganisations",
    component: SuperadminActivatedOrganisations,
    meta: {
      title: "Activated Organisations - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/superadmin-dashboard/suspended-organisations",
    name: "SuperadminSuspendedOrganisations",
    component: SuperadminSuspendedOrganisations,
    meta: {
      title: "Suspended Organisations - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  // events
  {
    path: "/superadmin-dashboard/all-events",
    name: "SuperadminAllEvents",
    component: SuperadminAllEvents,
    meta: {
      title: "All Events - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/superadmin-dashboard/event-category",
    name: "SuperadminEventCategory",
    component: SuperadminEventCategory,
    meta: {
      title: "Event Category - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  // payment history
  {
    path: "/superadmin-dashboard/ticket-payment",
    name: "SuperadminTicketPayment",
    component: SuperadminTicketPayment,
    meta: {
      title: "Ticket Payment - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  {
    path: "/superadmin-dashboard/subscription-payment",
    name: "SuperadminSubscriptionPayment",
    component: SuperadminSubscriptionPayment,
    meta: {
      title: "Subscription Payment - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
  // verifiers
  {
    path: "/superadmin-dashboard/all-verifiers",
    name: "SuperadminAllVerifiers",
    component: SuperadminAllVerifiers,
    meta: {
      title: "All Verifiers - Superadmin Dashboard | WALLID",
      middleware: auth,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
