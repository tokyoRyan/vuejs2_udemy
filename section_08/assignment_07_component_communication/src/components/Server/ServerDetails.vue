<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <div v-else>
            <p>Server #{{ server.id }} selected, status: {{ server.status }}</p>
            <button @click="onResetStateClick">Set back to normal</button>
        </div>
    </div>
</template>

<script>
    import { serverBus } from '../../main.js';
    export default{
        data: function(){
            return {
                server: null
            };
        },
        methods: {
            onResetStateClick() {
                this.server.status = 'Normal';
            }
        },
        created(){
            serverBus.$on('server-selected', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style>

</style>
