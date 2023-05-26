import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import 'ant-design-vue/dist/reset.css';
import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
    state() {
        return {
            colors: {
                primary: '#0da487'
            }
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

const app = createApp(App)
app.use(router)
app.use(Antd)
app.use(store)
app.mount('#app')