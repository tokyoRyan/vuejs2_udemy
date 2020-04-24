<template>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <app-header></app-header>
                </div>
            </div>
            <hr>
            <div class="row">
                <app-servers></app-servers>
                <app-server-details></app-server-details>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12">
                    <app-footer></app-footer>
                </div>
            </div>
        </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    export default {
        name: 'App',
        components: {
            'app-servers' : Servers,
            'app-server-details': ServerDetails,
            'app-header': Header,
            'app-footer': Footer
        }
    }
</script>

<style>
</style>
