<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'day1', params:{id:'1'}}">Day1</router-link>
      <router-link :to="{name:'day1', params:{id:'3'}}">Day1</router-link> 
      <router-link :to="{name:'day2', params:{id:'2'}}">Day2</router-link>  
    </div>
    <router-view/>
    <router-view name="test"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a {
    margin: 10px;
  }
}
</style>
