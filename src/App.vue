<template>
  <v-app id="app"> 
    <Navbar />  
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  data() {
    return {
      categorySelect: '',
    }
  },
  components : { Navbar },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#app {
  background: lightgray;
}

::-webkit-scrollbar-track
{
	background-color: #011502;
  border: none;
}

::-webkit-scrollbar
{
	width: 5px;
	background-color: #9EC5AB;
  border: none;
}

::-webkit-scrollbar-thumb
{
	background-color: #9EC5AB;
  border: none;
}
</style>