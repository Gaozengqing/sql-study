// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "reset.css"

//markdown解析
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";


import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

import Prism from "prismjs";

import "prismjs/components/prism-json";

VMdPreview.use(vuepressTheme,{
    Prism,
});



const app = createApp(App)

app.use(VMdPreview);

app.use(createPinia())
app.use(router)

app.mount('#app')
