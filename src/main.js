import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

const user = localStorage.getItem('user')
if(user){
    console.log('store',store)
    const { access_token, expires_in, token_type, } = JSON.parse(user)
    store.dispatch('user/fetchUser',{ access_token, expires_in, token_type, })
}else{
    store.dispatch('user/fetchUser',null)
}

app.use(store)
app.use(router)
app.mount('#app')
