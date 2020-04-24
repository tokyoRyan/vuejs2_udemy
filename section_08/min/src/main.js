import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    changeAge(value){
      this.$emit('on-update-user-age', value);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')