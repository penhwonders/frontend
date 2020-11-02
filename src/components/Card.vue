<template>
  <v-card
    class="mx-2 mb-3 card-outter"
    max-width="450px"
    id="card"
    color="bg"
    elevation="15"
  >
    <v-img
      class="white--text align-end"
      height="auto"
      v-bind:src="event.image"
    ></v-img>

    <v-card-title>{{ event.title }}</v-card-title>

    <v-card-subtitle class="pb-0">
      <b><v-icon>mdi-account-multiple</v-icon></b> {{ event.hosts.join(", ")
      }}<br />
      <b><v-icon>mdi-clock</v-icon></b> {{ event.time }}<br />
      <b><v-icon>mdi-map-marker</v-icon></b> {{ event.location }}<br />
      <b><v-icon>mdi-layers</v-icon></b> {{ event.categories.join(", ") }}<br />
    </v-card-subtitle>

    <v-card-actions class="card-actions">
      <v-spacer></v-spacer>
      <PopupCard :event="event" />
    </v-card-actions>
  </v-card>
</template>

<script>
import PopupCard from "./PopupCard";

export default {
  name: "Card",
  props: {
    event: Object,
  },
  components: { PopupCard },
};
</script>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}

#card {
  height: 430px;
}

@media only screen and (max-width: 600px) {
  #card {
    height: auto;
  }
}
</style>