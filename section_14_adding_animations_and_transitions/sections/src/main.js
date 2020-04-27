import Vue from 'vue'
import App from './App.vue'
import SuperQuiz from "./SuperQuiz.vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(SuperQuiz),
}).$mount('#app')
