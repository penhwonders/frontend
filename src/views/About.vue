<template>
  <v-main class="text-center" style="padding: 20px">
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
    <v-layout row wrap justify-center>
      <v-card class="card mx-5 my-5 card-outter" elevation="15">
        <v-img
          height="280px"
          width="280px"
          src="../assets/Nel Sokchhunly_A.jpg"
        ></v-img>
        <v-card-title primary-title class="justify-center">
          Sokchhunly Nel
        </v-card-title>
        <v-card-text>
          Frontend Developer <br />
          UI/UX designer
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <a
            class="socialUrl"
            href="https://www.instagram.com/ly_chun_/"
            target="_blank"
            ><v-icon size="30" class="icon">mdi-instagram</v-icon></a
          >
          <v-spacer></v-spacer>
          <a
            class="socialUrl"
            href="https://web.facebook.com/harry.brown.us"
            target="_blank"
            ><v-icon size="30" class="icon">mdi-facebook</v-icon></a
          >
          <v-spacer></v-spacer>
          <a
            class="socialUrl"
            href="https://github.com/Nel-sokchhunly"
            target="_blank"
            ><v-icon size="30" class="icon">mdi-github</v-icon></a
          >
          <v-spacer></v-spacer>
          <a
            class="socialUrl"
            href="https://www.linkedin.com/in/sokchhunly-nel-2926341b9/"
            target="_blank"
            ><v-icon size="30" class="icon">mdi-linkedin</v-icon></a
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-card class="card mx-5 my-5 card-outter" elevation="15">
        <v-img
          eight="280px"
          width="280px"
          src="../assets/Pav Munyoudoum_A.png"
        ></v-img>
        <v-card-title primary-title class="justify-center">
          Munyoudoum Pav
        </v-card-title>
        <v-card-text>
          Backend/Frontend Developer <br />
          Automation
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <a
            class="socialUrl"
            href="https://www.instagram.com/munyoudoum/"
            target="_blank"
            ><v-icon size="30" class="icon">mdi-instagram</v-icon></a
          >
          <v-spacer></v-spacer>
          <a
            class="socialUrl"
            href="https://facebook.com/munyoudoum"
            target="_blank"
            ><v-icon size="30" class="icon">mdi-facebook</v-icon></a
          >
          <v-spacer></v-spacer>
          <a
            class="socialUrl"
            href="https://github.com/munyoudoum"
            target="_blank"
            ><v-icon size="30" class="icon">mdi-github</v-icon></a
          >
          <v-spacer></v-spacer>
          <a
            class="socialUrl"
            href="https://www.linkedin.com/in/munyoudoum/"
            target="_blank"
            ><v-icon size="30" class="icon">mdi-linkedin</v-icon></a
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-main>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style scoped>
.socialUrl {
  text-decoration: none;
  margin: 6px;
}
.icon:hover {
  color: #63c6ff;
}
</style>