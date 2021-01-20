<template>
  <v-main class="text-center pa-5">
    <p class="text-h3 py-5">Support us!</p>
    <p class="text-subtitle-1"></p>
    <v-layout justify-center>
      <v-card
        max-width="400px"
        dark
        color="#3b839c"
        class="ma-5"
        elevation="15"
      >
        <div class="d-flex">
          <v-card-title>PAV MUNYOUDOUM <br />001 801 735 </v-card-title>

          <v-avatar class="ma-3" size="120" tile>
            <v-img src="../assets/aba bank.jpg"></v-img>
          </v-avatar>
        </div>
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
    <v-chip>Your name can be next!</v-chip>
  </v-main>
</template>

<script>
export default {
  name: "Donation",
  data() {
    return {
      // money: 0,
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