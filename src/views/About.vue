<template>
  <v-main class="text-center" style="padding: 10px; padding-top: 50px">
    <p class="text-h3">Penhwonders</p>
    <br />
    <p class="text-body-1 mx-5">
      Welcome to a renovation of Penhwonders! <br />
      A web application + Automation built by Cambodian college students to help
      your life easier in finding and promoting wonderful events in this amazing
      capital city of Cambodia, Phnom Penh! The events are automatically updated
      from a list of registered facebook pages once everyday at 12:30am by our
      automated web scraping system.
    </p>
    <br />
    <p class="text-h6">Our team</p>
  </v-main>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      teams: {
        oudom: {
          name: "Munyoudoum Pav",
          img: "../",
        },
      },
    };
  },
};
</script>

<style scoped>
</style>