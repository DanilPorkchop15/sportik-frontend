import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/routes'
import '@/assets/scss/main.scss'
import store from '@/store'
import CategoryBar from '@/components/CategoryBarComponent.vue'

const app = createApp(App)

app.component('CategoryBar', CategoryBar)

app.use(router)
app.use(store)

app.mount('#app')
