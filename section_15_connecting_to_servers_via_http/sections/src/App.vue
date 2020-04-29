<template>
  <div class="container">
    <div class="row">
        <div class="col">
          <h1>HTTP</h1>
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" v-model="user.username">
          </div>
          <div class="form-group">
            <label>E-Mail</label>
            <input type="text" class="form-control" v-model="user.email">
          </div>
          <button class="btn btn-primary" @click.prevent="submit">Submit</button>
          <hr>
          <button class="btn btn-primary" @click.prevent="fetchData">Get Data</button>
          <br>
          <br>
          <ul class="list-group">
            <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return {
        test : '',
        user: {
          username: 'TRTR',
          email: 'steigpa1@students.zhaw.ch'
        },
        users: []
      }
    },
    methods: {
      submit(){
        //console.log(this.user);
        this.sendFormData(this.user);
      },
      fetchData(){
        axios.get('/data.json')
        .then((response) => {
          console.log('inside of fetchData()');
          console.log(response.data);
          const resultArray = [];
          for (let key in response.data){
            resultArray.push(response.data[key])
          }
          this.users = resultArray;
        });
      },
      sendFormData(userObj){
        axios.post('data.json', userObj).
        then((response) => {
          console.log('POST REQUEST response received!');
          console.log(response);
        });
      }
    },
  }
</script>

<style>
</style>
