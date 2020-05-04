<template>
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="onServerSelected">Server #{{ server.id }}</li>
</template>

<script>
    import { serverBus } from '../../main.js';
    export default {
        props: {
            server: {type: Object}
        },
        methods: {
            onServerSelected() {
                serverBus.$emit('server-selected', this.server);
            }
        }
    }
</script>

<style>

</style>
