import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import customDirectives from '@/directives';

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

customDirectives.forEach(directive => {
  console.log('directive name: ', directive);
  app.directive(directive.name, directive);
});

app.mount('#app');
