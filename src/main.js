import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')