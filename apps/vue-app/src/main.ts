import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetalert2 from 'vue-sweetalert2';
import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/router/router.js'

const app = createApp(App);

app.use(router)
app.use(VueSweetalert2)
app.mount('#root');
