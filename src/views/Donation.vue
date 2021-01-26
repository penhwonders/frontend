<template>
  <v-main class="text-center pa-5">
    <p class="text-h3">Support us!</p>

    <v-layout justify-center>
      <!-- aba card -->

      <v-card max-width="400px" dark color="#3b839c" class="ma-2">
        <v-card-title>PAV MUNYOUDOUM<br />001 801 735 </v-card-title>

        <v-avatar class="ma-3" size="180" tile>
          <v-img src="../assets/aba bank.jpg"></v-img>
        </v-avatar>
      </v-card>
    </v-layout>
    <p class="text-subtitle-1">
      Why you should donate: <br />
      - We have devoted our time to develop this app for free<br />
      - We try to keep away from advertisement<br />
      - You have more convenience in finding events in Phnom Penh<br />
      - We help your events' traffic grows <br />
      - You will help our domain/server costs
    </p>
    <p class="text-h3">Benefits</p>
    <!-- Donations money cards -->
    <v-layout row wrap justify-center>
      <v-card
        width="300"
        elevation="15"
        class="ma-2 rounded-lg"
        color="blue-grey lighten-1"
      >
        <v-card-title
          class="justify-center white--text text-h2 font-weight-medium ma-15"
        >
          $5+
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="background text-body-1 white--text">
          - Support our work <br />
          - Get your name on our page<br />
          ------------
        </v-card-text>
      </v-card>
      <v-card width="300" class="ma-2 rounded-lg" color="primary" elevation="1">
        <v-card-title
          class="justify-center white--text text-h2 font-weight-medium ma-15"
        >
          $15+
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="background text-body-1 white--text">
          - Support our work <br />
          - Get your name on our page <br />
          - Get a glowing effect on 1 event
        </v-card-text>
      </v-card>
    </v-layout>
    <!-- Supporter list -->
    <p class="text-h4 pt-5">Our Supporters</p>
    <v-chip
      v-for="donation in donations"
      :key="donation.name"
      :href="donation.facebookLink !== null ? donation.facebookLink : false"
      target="_blank"
      pill
      class="ma-2"
    >
      <v-avatar left
        ><v-icon color="primary">mdi-account-circle</v-icon></v-avatar
      >
      {{ donation.name + " " + donation.amount }}
    </v-chip>
    <v-chip pill>
      <v-avatar left
        ><v-icon color="primary">mdi-account-circle</v-icon></v-avatar
      >
      Please support us!
    </v-chip>
  </v-main>
</template>

<script>
import donationData from "../jsonData/donationData.json";

export default {
  name: "Donation",
  data() {
    return {
      money: 0,
      donations: donationData,
    };
  },
};
</script>
