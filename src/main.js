import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

// Create a new Pinia instance
const pinia = createPinia();

// Create a new Vue app
const app = createApp(App);

// Use Pinia with the app
app.use(pinia);

// Mount the app
app.use(router).mount('#app');




