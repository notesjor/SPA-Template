import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

// Vuetify Setup
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify();
const pinia = createPinia();

createApp(App).use(pinia).use(vuetify).mount('#app');