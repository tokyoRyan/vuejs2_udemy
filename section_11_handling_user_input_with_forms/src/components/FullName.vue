<template>
    <div class="full-name">
        <div class="form-group">
            <label for="fistName">First Name</label>
            <input type="text" class="form-control" id="fistName"
                   :value="firstName" @input="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName"
                   :value="lastName" @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {

        },
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                return this.value.split(" ")[1];
            }
        },
        methods: {
            nameChanged(isFirst, event){
                let name = '';
                if(isFirst){
                    name = event.target.value + ' ' + this.lastName;
                } else {
                    name = this.firstName + ' ' + event.target.value;
                }
                this.$emit('input', name);
            }
        }
    }
</script>

<style scoped>

</style>