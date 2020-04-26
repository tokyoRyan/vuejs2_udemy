<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <h1>Directives Exercise</h1>
                <button class="btn btn-primary" v-my-on:click="onClick">Click Me</button>
                <hr>
                <div class="small-box" v-my-on:mouseenter="mouseEnter"
                v-my-on:mouseleave="mouseExit"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            onClick(){
                 console.log('inside of onClick()');
            },
            mouseEnter(){
                console.log('mouse entered');
            },
            mouseExit(){
                console.log('mouse exit');
            }
        },
        directives: {
            'my-on':{
                bind(el, binding, vnode){
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        }
    }
</script>

<style scoped>
    .small-box {
        width: 100px;
        height: 100px;
        background-color: lightgreen
    }
</style>