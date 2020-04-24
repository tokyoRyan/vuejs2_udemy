<template>
    <div class="component">
        <h4>You may view the User Details here</h4>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn('Triss')">Reset Name v2</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: {
            name: {
                type: String,
                //required: true,
                default: 'Darya'
            },
            resetFn: {
                type: Function
            },
            userAge: {
                type: Number
            }
        },
        methods: {
            switchName(){
                return this.name.split("").reverse().join("");
            },
            resetName(){
                console.log('emitting event');
                let resetNameValue = 'Triss';
                this.$emit('on-name-reset', resetNameValue);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral !important;
    }
</style>
