<template>
    <div id="app">
        <div>
            <div class="float-right mt-0" >
              <ol class="breadcrumb ">
                <li class="breadcrumb-item active">App.vue</li>
              </ol>
            </div>
            <div class="text-center">
                <h5>
                  <span >{{appName}}</span>
                </h5>
            </div>
        </div><br>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'App',
  data: function (){
      return {
        appName: 'FullStackApp =>Vue,Bootstrap,Router & Spring Boot'
      }
    }
  }

</script>
