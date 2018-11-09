<template>
  <div id="app">
    <Nav :title="movieName"></Nav>
    <div class="container">
      <router-view @routerChange='change'/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

<script>
  import Nav from '@/components/Nav.vue'
  export default {
      components:{
          Nav
      },
      data(){
          return{
              movieName:'movie',
          }
      },
      methods:{
          change(val){
              this.movieName = val;
          }
      }
  }
</script>
