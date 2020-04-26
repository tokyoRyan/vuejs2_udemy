<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <h1>Filters & Mixins</h1>
        <p>{{ text | to-uppercase | to-lowercase }}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './components/List.vue';
  import {fruitMixin} from "./components/fruitMixin";
  export default{
    data(){
      return {
        text: 'Hello there!',
      };
    },
    filters: {
      'to-uppercase': (value) => {
        return value.toUpperCase();
      }
    },
    mixins: [fruitMixin],
    components: {
      'app-list': List
    },
    created() {
      console.log('crated (App)');
    }
  }
</script>

<style>

</style>
