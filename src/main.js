// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxiosPlugin from 'vue-axios-plugin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'style/common.css'
import 'highlight.js/styles/vs2015.css'; // 代码高亮样式
// 引入vue-quill-editor
// import VueQuillEditor from 'vue-quill-editor'

// vue-quill-editor的相关样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// // 开启vue-quill-editor插件
// Vue.use(VueQuillEditor)

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import less from 'less'

import loading from 'components/public/loading/loading.js';
Vue.use(loading);
Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxiosPlugin);
// Install Less
Vue.use(less)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
