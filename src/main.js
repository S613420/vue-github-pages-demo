import { createApp } from 'vue'
import CarbonComponentsVue from '@carbon/vue'
import App from './App.vue'
import '@carbon/styles/css/styles.css'

const app = createApp(App)
app.use(CarbonComponentsVue)
app.mount('#app')
