import './styles.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Aura from '@primevue/themes/aura';
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.directive('styleclass', StyleClass);

app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.app-dark',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
});

app.use(ToastService);

app.mount('#app');
