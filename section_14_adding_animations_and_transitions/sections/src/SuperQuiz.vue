<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>The Super Quiz</h1>
            </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <transition name="flip-card" mode="out-in">
                    <component :is="selectedComponent"
                               @onNextQuestionClicked="selectedComponent = 'app-question'"
                               @correctlyAnswered="selectedComponent = 'app-answer'"></component>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
    import Answer from './components/Answer.vue';
    import Question from './components/Question.vue';
    export default {
        data(){
            return {
                selectedComponent: 'app-question'
            };
        },
        components: {
            'app-answer': Answer,
            'app-question': Question
        }
    }
</script>
<style scoped>
    .flip-card {
        border: solid 1px #ccc;
        width: 300px;
    }
    .flip-card-enter {
        transform: rotateY(0deg);
    }
    .flip-card-enter-active {
        animation: flip-in 0.5s ease-out forwards;
    }
    flip-card-leave {
        transform: rotateY(0deg);
    }
    .flip-card-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }
    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }
    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>