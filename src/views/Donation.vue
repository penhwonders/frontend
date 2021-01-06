<template>
  <v-main class="text-center pa-5 ">
    <p class="text-h3 py-5">Support us!</p>
    <p class="text-subtitle-1">
      By donating, you help us keep maintaining the server cost and keep the
      website ads free.
    </p>
    <v-layout row wrap justify-center>
        <!-- aba card -->
        <v-card width="350px" dark color="#3b839c" class="ma-5" elevation="15">
            <div class="d-flex flex-no-wrap justify-space-between">
                <div class="pl-2">
                    <v-card-title class="text-caption-2">ABA account<br>Account Name
                        <p class="text-caption-2 ma-2">000 000 000 </p>
                    </v-card-title>
                </div>

                <v-avatar class="ma-3" size="120" tile rounded="15">
                <v-img src="../assets/aba bank.jpg"></v-img>
                </v-avatar>
            </div>
        </v-card>
    </v-layout>
    <!-- target bar -->
    
    <!-- Supporter list -->
    <p class="text-h4  pt-5">Our supporters</p>
  </v-main>
</template>

<script>
export default {
  name: "Donation",
  data() {
    return {
        donationMoney: 0
    };
  },
  computed: {
    donations() {
        var num = 150
        return (num * 100 ) / 5000
    }
  }
};
</script>

<style>
.progressBar {
    max-width: 400px;
}
</style>