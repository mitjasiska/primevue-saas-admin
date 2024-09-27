import './assets/main.css';
import './styles.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import state from '@/state/state';
import Aura from '@/primevue/presets/aura';
import { useThemeConfig } from '@/composables/theme-config'; // set color theme

// set color theme
const { updateColors } = useThemeConfig();
updateColors('primary', state.primaryColor);
updateColors('surface', state.surface);

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura
});

app.mount('#app');
