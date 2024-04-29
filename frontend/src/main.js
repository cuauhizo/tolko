import './assets/main.css'
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'

import App from './App.vue'

const app = createApp(App)

app.use(plugin, defaultConfig(config))

app.mount('#app')
