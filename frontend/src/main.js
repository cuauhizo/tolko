import './assets/main.css';
import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import config from '../formkit.config';
import VueNumberFormat from 'vue-number-format';
import { createI18n } from 'vue-i18n';
import { messages } from './lang/messages';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue';

//test

const i18n = createI18n({
  // opciones
  // locale: navigator.language.startsWith('es') ? 'es' : 'en',
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  legacy: false,
});

const app = createApp(App);

app.use(plugin, defaultConfig(config));
app.use(i18n);
AOS.init();
app.use(VueNumberFormat, { prefix: '$ ', decimal: '.', thousand: ',' });
app.mount('#app');
console.log('Este es el nuevo2');
