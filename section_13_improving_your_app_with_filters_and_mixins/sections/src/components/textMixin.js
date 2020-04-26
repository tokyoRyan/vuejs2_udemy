export const textMixin = {
    data() {
        return {
            myText: 'Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!',
        };
    },
    computed: {
        reversedText() {
            return this.myText.split("").reverse().join("")
        },
        textWithLength() {
            return `${this.myText} (${this.myText.length})`;
        }
    },
}