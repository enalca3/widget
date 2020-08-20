import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)

app.use('vue-moment')
app.mount('#app')
