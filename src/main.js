import { createApp } from 'vue'
import App from './App.vue'

import Toaster from "@meforma/vue-toaster";
import router from './components/router';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(Toaster).use(router).use(VueSweetalert2).mount('#app');

