import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// Import our custom CSS
import './scss/style.scss'
// import JavaScript plugins individually as needed to keep bundle sizes down:
//import { Tooltip, Toast, Popover } from 'bootstrap';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import store from './store'
 createApp(App).use(store).mount('#app');

//app.config.globalProperties.$store=store;
// Install the store instance as a plugin
 