import './assets/main.css'
import './styles.css'
import PrimeVue from 'primevue/config'
import Aura from '@/primevue/presets/aura'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura
})

app.mount('#app')
