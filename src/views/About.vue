<template>
  <v-main class="text-center" style="padding: 10px; padding-top: 50px">
    <p class="text-h3">eventCup</p>
    <br />
    <p class="text-body-1 mx-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, excepturi
      voluptatum. Corrupti at minima, sed explicabo odit exercitationem
      assumenda impedit sapiente est, consectetur ducimus ab voluptatum aliquid
      omnis. Ipsa, deleniti?
    </p>
    <br>
    <p class="text-h6">Our team</p>

    
  </v-main>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      teams : {
        oudom: {
          "name" : "Munyoudoum Pav",
          "img" : "../"
        }
      }
    };
  },
};
</script>

<style scoped>
</style>