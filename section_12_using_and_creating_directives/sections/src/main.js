import Vue from 'vue'
import App from './App.vue'
import Assignment from './Assignment';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //el.style.backgroundColor = binding.value;

    let delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg === 'background'){
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  render: h => h(Assignment),
}).$mount('#app')
