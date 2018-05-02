<template>
    <div class="home">
      <div class="float-right mt-0" >
        <ol class="breadcrumb ">
          <li class="breadcrumb-item active">Home.vue</li>
        </ol>
      </div>
      <div class="text-center">
        <h6><span class="border-bottom"> {{msg}} </span></h6>
      </div>
      <div class="container">
        <b-button @click="BackEndService()">Click to get Backend Response</b-button><br><br>
        <div>
          <b-alert :show="responseAlert" variant="success" dismissible> <span >{{response}}</span> </b-alert>
          <b-alert :show="errAlert" variant="danger" dismissible> <span >{{response}}</span> </b-alert>
        </div>
      </div>   
    </div>
  </div>
</template>

<script>
  import {AXIOS} from './http-common.js'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to FullStack Home Page',
      response:'',
      error:'',
      responseAlert:false,
      errAlert:false
    }
  },
  methods:{
    BackEndService: function(){
      AXIOS.get('/hello')
        .then(response=>{
          this.response=response.data
          this.responseAlert=true;
          })
        .catch(e=>{
          this.error=e
          this.errAlert=true
          })
    }
  }
}
</script>