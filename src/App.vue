<template>
<div class="home">
  <Input />
  </div>
  
</template>

<script>
import Input from './components/Input.vue'

export default {
  name: 'App',
  components: {
    Input
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
* {
padding:0;
margin:0;
vertical-align:baseline;
list-style:none;
border:0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.home{
  /*DIFERENTES BACKGROUNDS */
    /* background: url(https://wallpapercave.com/wp/wp7110875.jpg); */
    /* background: url(https://wallpaperaccess.com/full/401059.png); */
     /* background: url(https://wallpaperaccess.com/full/85327.png);  */
    background: url(https://cdn.wallpapersafari.com/53/72/cMIO9o.jpg);
    min-height: 100vh;
    background-repeat: round;
    background-position: revert;
    background-size: contain;
    background-attachment: fixed;
}


</style>
