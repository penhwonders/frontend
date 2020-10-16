<template>
  <v-card
    class="mx-2 mb-3 card-outter"
    max-width="450"
    id="card"
    color="primary"
  >
    <v-img
      class="white--text align-end"
      height="auto"
      v-bind:src="event.image"
    ></v-img>

    <v-card-title>{{event.title}}</v-card-title>

    <v-card-subtitle class="pb-0">
      <b>Hosts</b>: {{event.hosts.join(", ")}}<br>
      <b>Categories</b>: {{event.categories.join(", ")}}<br>
      <b>Time</b>: {{event.time}}<br>
      <b>Location</b>: {{event.location}}<br>
    </v-card-subtitle>

    <v-card-actions class="card-actions">
      <v-spacer></v-spacer>
      <PopupCard :event="event"/>
    </v-card-actions>
    
  </v-card>
</template>

<script>
import PopupCard from './PopupCard'

export default {
    name: 'Card',
    props: {
      event: Object,
    },
    components: {PopupCard}
}
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