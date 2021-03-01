import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import messages from 'vite-plugin-vue-i18n/messages-generated'

const i18n = createI18n({
  legacy: true,
  locale: 'ja',
  messages
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
