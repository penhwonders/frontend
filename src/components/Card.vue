<template>
  <v-card
    class="mx-2 mb-3 card-outter"
    max-width="450px"
    id="card"
    color="bg"
    elevation="15"
  >
    <v-img
      id="image"
      :src="event.image"
      @load="onImgLoad"
    />
    <div v-if="!isLoaded">
      <v-img
        id="err_img"
        src="../assets/error_image.jpg"
      />
    </div>

    <v-card-title class="card-text">
      {{
        event.title.length >= 73 ? event.title.slice(0, 70) + "..." : event.title
      }}
    </v-card-title>

    <v-card-subtitle class="pb-0">
      <b><v-icon>mdi-account-multiple</v-icon></b>
      {{
        event.hosts.length > 2
          ? event.hosts.slice(0, 2).join(", ") + ", ..."
          : event.hosts.join(", ")
      }}<br>
      <b><v-icon>mdi-clock</v-icon></b> {{ event.time }}<br>
      <b><v-icon>mdi-map-marker</v-icon></b> {{ event.location }}<br>
      <b><v-icon>mdi-layers</v-icon></b> {{ event.categories.join(", ") }}<br>
    </v-card-subtitle>

    <v-card-actions class="card-actions">
      <v-spacer />
      <PopupShare :share-data="shareData" />
      <PopupCard :event="event" />
    </v-card-actions>
  </v-card>
</template>

<script>
import PopupCard from "./PopupCard";
import PopupShare from "./PopupShare";

export default {
  name: "Card",
  props: {
    event: Object,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    onImgLoad() {
      this.isLoaded = true;
    },
  },
  computed: {
    shareData() {
      const url = "https://penhwonders.com/event/" + this.event._id;
      const title = this.event.title;
      const description = this.event.description.slice(0, 70) + "...";
      const hosts = this.event.hosts;
      return { url, title, description, hosts };
    },
  },
  created() {},
  components: { PopupCard, PopupShare },
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

.card-text {
  word-break: normal;
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
</style>
