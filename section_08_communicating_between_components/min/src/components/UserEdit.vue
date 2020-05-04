<template>
    <div class="component">
        <h4>You may edit the User here</h4>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: ['userAge'],
        methods: {
            editAge(){
                let newUserAge = 30;
                //this.$emit('on-update-user-age', newUserAge);
                // or using event bus
                //eventBus.$emit('on-update-user-age', newUserAge);
                // or using methods on eventBus object
                eventBus.changeAge(newUserAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen !important;
    }
</style>
