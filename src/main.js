import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import CKEditor from '@ckeditor/ckeditor5-vue'

import { date, currency } from './methods/filters'

import {
    Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule])
})
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VueSweetalert2)
app.use( CKEditor )

app.component('LoadingComponent', Loading)
app.component('VeeForm', Form)
app.component('VeeField', Field)
app.component('ErrorMessage', ErrorMessage)

app.config.globalProperties.$filters = {
    date,
    currency
}

app.mount('#app')
