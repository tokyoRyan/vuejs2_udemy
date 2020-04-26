import Vue from 'vue'
import App from './App.vue'
import Assignment from './Assignment.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.filter('to-lowercase', (value) => { return value.toLowerCase() });
// assignment
Vue.filter('append-length', (value) => { return `${value} (${value.length})` });

Vue.mixin({
  created(){
    console.log('Global Mixin - Created Hook');
  }
});

new Vue({
  render: h => h(Assignment),
}).$mount('#app')
