import './assets/main.css'
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import VueNumberFormat from 'vue-number-format'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'

const app = createApp(App)

app.use(plugin, defaultConfig(config))
app.use(AOS.init())
app.use(VueNumberFormat, {prefix: '$ ', decimal: '.', thousand: ','})
app.mount('#app')
