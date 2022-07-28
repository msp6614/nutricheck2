<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">
  <Nutrition />
</template>

<script>
import Nutrition from './components/Nutrition.vue'

export default {
  name: 'App',
  components: {
    Nutrition
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 /* background-image: url('./assets/i.png'); */
}
@media screen and (max-width: 990px) {
  html,body{
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    overflow-x:hidden;
  }}

html, body {width: auto!important; overflow-x: hidden!important,} 
</style>
