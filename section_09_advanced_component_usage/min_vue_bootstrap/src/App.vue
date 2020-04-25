<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <button @click="selectedComponent = 'app-quote'">Quote</button>
        <button @click="selectedComponent = 'app-author'">Author</button>
        <button @click="selectedComponent = 'app-new'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent">
          <p>Lorem very much so ipsum!!!</p>
        </component>
        <!-- <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful quote.</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue'
  import Author from './components/Author.vue'
  import New from './components/New.vue'
  export default {
    data: function(){
      return {
        selectedComponent: 'app-quote',
        quoteTitle: 'The Quote'
      }
    },
    components: {
      'app-quote': Quote,
      'app-author': Author,
      'app-new': New
    }
  }
</script>

<style scoped>
</style>