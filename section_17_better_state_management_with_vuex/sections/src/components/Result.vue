<template>
    <div>
        <p>Result: {{ normalCounter }}</p>
        <hr>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types.js';
    export default {
        computed: {
             ...mapGetters({normalCounter: types.NORMAL_COUNTER})
        }
    }
</script>

<style scoped>

</style>