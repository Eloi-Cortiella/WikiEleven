//IMPORTAR ELS CSS PRINCIPAL
import './assets/main.css'

//IMPORTAR MODULS I ALTRES COSES
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue);
app.use(router)

app.mount('#app')
