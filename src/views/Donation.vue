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
      <!-- aba card -->

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
    <!-- target bar -->

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

<style>
</style>