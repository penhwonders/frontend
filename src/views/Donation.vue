<template>
  <v-main class="text-center pa-5">
    <p class="text-h3">Fund our project!</p>

    <v-layout justify-center>
      <!-- aba card -->

      <v-card max-width="400px" dark color="#3b839c" class="ma-2">
        <v-card-title>PAV MUNYOUDOUM<br />001 801 735</v-card-title>

        <v-avatar class="ma-3" size="180" tile>
          <v-img src="../assets/aba bank.jpg"></v-img>
        </v-avatar>
      </v-card>
    </v-layout>
    <p class="text-subtitle-1 mt-2">
      We have worked tirelessly to develop the website while being on school and
      work full time. We hope that you will like and enjoy exploring these
      events, and also have your business's events on the website. Therefore, we
      would really appreciate if you can help us in financial support for
      development, domain, server, and maintenance costs. Thank you very much!
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
          $Any
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
          $5+
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
export default {
  name: "Donation",
  data() {
    return {
      donations: [
        {
          name: "SEAVPOR TENG",
          amount: "$20",
          facebookLink: "https://www.facebook.com/tengseavpor",
        },
        {
          name: "KEVIN HENG",
          amount: "$5",
          facebookLink: "https://www.facebook.com/heng.khevin",
        },
        {
          name: "SOVANNRATANA OUK",
          amount: "$3.98",
          facebookLink: "https://www.facebook.com/seam.dara.121",
        },
        {
          name: "ZANITH TEK",
          amount: "$2.68",
          facebookLink: "https://www.facebook.com/zanithtek",
        },
        {
          name: "SOKHENG KAING",
          amount: "$2.02",
          facebookLink: "https://www.facebook.com/sokheng.kaing",
        },
        {
          name: "VENMEY NARETHMARCH",
          amount: "$1.5",
          facebookLink: "https://www.facebook.com/meyven.narethmarch.1",
        },
        {
          name: "TECHUY LAV",
          amount: "$1",
          facebookLink: "",
        },
        {
          name: "MANETH PAK",
          amount: "$0.99",
          facebookLink: "https://www.facebook.com/nth.much.nth.special",
        },
        {
          name: "VIREAKYUTH NEAK",
          amount: "$0.3",
          facebookLink: "https://www.facebook.com/yuth.neak.9",
        },
        {
          name: "KEOMONNYRATANAK PHOK",
          amount: "$0.25",
          facebookLink: "https://www.facebook.com/HaxorHunter",
        },
        {
          name: "VATANA SAMBATH",
          amount: "$0.2",
          facebookLink: "https://www.facebook.com/zack592",
        },
      ],
    };
  },
};
</script>
