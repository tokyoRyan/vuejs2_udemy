<template>
    <div class="container">
        <app-header :quote-count="quotes.length" :max-quotes="maxQuotes"></app-header>
        <app-new-quote :quotes="quotes" v-on:new-quote="newQuote"></app-new-quote>
        <app-quotes :quotes="quotes" v-on:delete-quote="onDeleteQuote"></app-quotes>
        <div class="alert alert-primary text-center">click on a quote to delete it</div>
    </div>
</template>

<script>
  import Header from './components/Header.vue';
  import NewQuote from './components/NewQuote.vue';
  import Quotes from './components/Quotes.vue';
    export default {
        data: function(){
            return {
                quotes: ['Just a quote, to see something -Max'],
                maxQuotes: 10
            };
        },
        methods: {
            newQuote(value){
                if(this.quotes.length >= this.maxQuotes){
                    alert('Maximum number of quotes reached. Please delete a quote first.');
                    return;
                }
                this.quotes.push(value);
            },
            onDeleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
          'app-header': Header,
          'app-new-quote': NewQuote,
          'app-quotes': Quotes
        }
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Arizonia');
</style>
