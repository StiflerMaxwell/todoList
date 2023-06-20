import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// Import our custom CSS
import './scss/style.scss'

// import JavaScript plugins individually as needed to keep bundle sizes down:
//import { Tooltip, Toast, Popover } from 'bootstrap';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App).mount('#app')
