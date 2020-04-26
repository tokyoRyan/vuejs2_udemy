<template>
    <div class="row new-quote">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label>Quote</label>
                <textarea rows="3" v-model="quote"></textarea>
            </div>
            <div class="col">
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function(){
            return { quote: '' };
        },
        methods: {
            createNew(event){
                this.$emit('new-quote', this.quote);
            }
        }
    }
</script>

<style scoped>

</style>