<template>
  <v-app id="app">
    <Navbar />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components : { Navbar }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>