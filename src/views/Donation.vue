<template>
  <v-main class="text-center pa-5">
    <p class="text-h3 py-5">Support us!</p>
    <p class="text-subtitle-1"></p>
    <v-layout justify-center>
      <!-- aba card -->
      <!-- <v-progress-linear v-model="money" height="25">
        <strong>${{ Math.ceil(money) }}/2000</strong>
      </v-progress-linear> -->
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
    <!-- target bar -->

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

<style>
</style>