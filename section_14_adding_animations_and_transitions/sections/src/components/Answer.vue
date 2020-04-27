<template>
    <div class="">
        <div class="row">
            <div class="col">
                <h4>That's correct!</h4>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-primary" @click="onNextQuestionClicked">Next question</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        methods:{
            onNextQuestionClicked(){
                this.$emit('onNextQuestionClicked');
            }
        }
    }
</script>