<template>
    <div class="">
        <span> {{ question }}</span>
        <br>
        <button class="btn btn-primary"
                v-for="(answer,index) in answers"
                @click="checkAnswer(answer)">{{ answers[index] }}
        </button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                number1: 14,
                number2: 27,
                answers: [10, 10, 10, 10],
                maxNumber: 50
            };
        },
        computed: {
            question() {
                return `What is ${this.number1} minus ${this.number2}`;
            },
        },
        methods: {
            createNumbers() {
                this.number1 = this.randomNumber(this.maxNumber);
                this.number2 = this.randomNumber(this.maxNumber);
                this.answers = [this.number1 - this.number2,
                        this.randomNumber(this.maxNumber),
                        this.randomNumber(this.maxNumber),
                        this.randomNumber(this.maxNumber),];
                this.shuffle(this.answers);
            },
            randomNumber(max) {
                return Math.floor(Math.random() * max);
            },
            shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                //return array;
            },
            checkAnswer(answer){
                if(answer == (this.number1-this.number2)){
                    this.$emit('correctlyAnswered');
                } else {
                    alert('Wrong, try again!');
                }
            },
        },
        created() {
            this.createNumbers();
        }
    }
</script>
