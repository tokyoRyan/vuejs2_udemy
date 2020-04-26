<template>
    <div class="quotes row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';
    export default {
        props: {
            quotes: { type: Array }
        },
        methods: {
            deleteQuote(index){
                this.$emit('delete-quote', index);
            }
        },
        components : {
            'app-quote': Quote
        },
    }
</script>

<style scoped>
    .quotes {
        font-family: Arizonia, cursive;
    }
</style>