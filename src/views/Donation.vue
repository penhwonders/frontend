<template>
  <v-main class="text-center pa-5">
    <p class="text-h3">Support us!</p>
    <p class="text-subtitle-1">
      Why you should donate: <br />
      - We have devoted our time for developing this app for free<br />
      - We also try to keep away from advertisement<br />
      - You have more convenience in finding events in Phnom Penh<br />
      - We help your events' traffic grows <br />
      - You will help our domain/server costs
    </p>
    <v-layout justify-center>
<<<<<<< HEAD
      <!-- aba card -->

=======
>>>>>>> d0ac8dd7ce5ecdf0ddcb004ae9691c1bdb7ad2f8
      <v-card
        max-width="400px"
        dark
        color="#3b839c"
        class="ma-2"
        elevation="1"
      >
        <v-card-title>PAV MUNYOUDOUM<br />001 801 735 </v-card-title>

        <v-avatar class="ma-3" size="120" tile>
          <v-img src="../assets/aba bank.jpg"></v-img>
        </v-avatar>
        <v-progress-linear v-model="money" height="25">
          <strong>$0/2000</strong>
        </v-progress-linear>
      </v-card>
    </v-layout>
    <!-- Donations money cards -->
    <v-layout row wrap justify-center>
      <v-card
        max-width="300"
        elevation="15"
        class="ma-2"
        color="blue-grey lighten-1"
      >
        <v-card-title
          class="justify-center white--text text-h2 donation-card-header font-weight-medium"
        >
          5$
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="custom-color text-body-1 white--text">
          you get to blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah
        </v-card-text>
      </v-card>
    </v-layout>
    <!-- Supporter list -->
    <p class="text-h4 pt-5">Our supporters</p>
    <v-chip large>Your name can be next!</v-chip>
  </v-main>
</template>

<script>
export default {
  name: "Donation",
  data() {
    return {
      money: 0,
    };
  },
};
</script>

<style scoped>
.donation-card-header {
  padding: 1.5em;
}
.custom-color {
  background-color: #16576d;
}
</style>