import { createApp } from 'vue'
import App from './App.vue'

import Toaster from "@meforma/vue-toaster";
import router from './components/router';


import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../src/registerServiceWorker'

createApp(App).use(Toaster).use(VueDatePicker).use(router).use(Toast).use(VueSweetalert2).mount('#app');

