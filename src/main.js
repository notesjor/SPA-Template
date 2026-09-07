import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

// Vuetify Setup
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify({
	icons: {
		defaultSet: 'mdi',
	},
});
const pinia = createPinia();

createApp(App).use(pinia).use(vuetify).mount('#app');