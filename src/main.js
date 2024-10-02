import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

store.dispatch('load')
// TODO: синхронизация между вкладок
window.addEventListener('storage', () => {
  store.dispatch('load')
});