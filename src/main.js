import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/style.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.min.js'
import '@/assets/themify-icons/themify-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import $ from 'jquery'

createApp(App).use(router).mount('#app')

app.use(AOS.init());

app.mount('#app')
