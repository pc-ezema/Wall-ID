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
import SignupNonIndividual from '../views/SignupNonIndividual.vue'
import Page404 from '../views/Page404.vue'

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
  {path: '/signup-non-individual', name: 'SignupNonIndividual', component: SignupNonIndividual,
    meta: {
      title: 'Signup Non-Individual | WALLID'
    }
  },
  {path: '/:catchAll(.*)', name: 'Page404', component: Page404,
  meta: {
    title: 'Page Not Found | WALLID'
  }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    return {x: 0, y: 0}
  }
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