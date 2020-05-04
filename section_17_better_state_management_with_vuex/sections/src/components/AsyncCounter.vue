<template>
    <div>
        <button class="btn btn-secondary"
                @click="increment({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-secondary"
                @click="decrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as types from '../store/types.js';
    export default {
        methods: {
            ...mapActions({increment: types.COUNTER_INCREMENT_ASYNC, decrement: types.COUNTER_DECREMENT_ASYNC})
        },
    }
</script>

<style scoped>
    .btn {
        margin: 5px 5px;
    }
    .btn:first-of-type{ margin-left: 0;}
</style>