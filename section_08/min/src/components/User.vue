<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" @on-name-reset="onNameReset"
                :resetFn="onNameReset" :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @on-update-user-age="onUserAgeChanged"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import {eventBus} from "../main";

    export default {
        data: function(){
            return {
                name: 'Ryan',
                age: 29
            };
        },
        methods : {
            changeName(){
                this.name = 'Anna';
            },
            onNameReset(value) {
                console.log(value);
                this.name = value;
            },
            onUserAgeChanged(value){
                console.log(`userAge whas changed to: ${value} in child.`);
                this.age = value;
            }
        },
        created() {
            eventBus.$on('on-update-user-age', (event) => {
                console.log(`on-update-user-age: event: ${event}`);
                this.age = event;
            });
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
