<template>
  <v-card
    class="mx-2 mb-3 card-outter"
    max-width="450px"
    id="card"
    color="bg"
    elevation={premium}
    ><span v-if="event.location == 'Factory Phnom Penh'"></span>
    <v-img id="image" v-bind:src="event.image"></v-img>
    <v-card-title>{{
      event.title.length >= 46 ? event.title.slice(0, 46) + "..." : event.title
    }}</v-card-title>

    <v-card-subtitle class="pb-0">
      <b><v-icon>mdi-account-multiple</v-icon></b>
      {{
        event.hosts.length > 2
          ? event.hosts.slice(0, 2).join(", ") + ", ..."
          : event.hosts.join(", ")
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
  computed: {
    premium() {
      return event.location == "Factory Phnom Penh" ? "15" : "14";
    },
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
  height: 450px;
}

@media only screen and (max-width: 600px) {
  #card {
    height: auto;
  }
}
@media only screen and (min-width: 600px) {
  #image {
    max-height: 50%;
  }
}
:root .v-application .elevation-15 {
  box-shadow: 0 0 6px 3px #fff, /* inner white */ 0 0 10px 6px #f0f,
    /* middle magenta */ 0 0 14px 9px #0ff !important;
}
</style>