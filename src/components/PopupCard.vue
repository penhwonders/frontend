<template>
  <v-dialog
    v-model="dialog"
    scrollable
    :overlay="false"
    max-width="600px"
    transition="dialog-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="background" dark v-bind="attrs" v-on="on"> see more </v-btn>
    </template>
    <v-card v-if="dialog">
      <v-card-title>
        {{ event.title }}
      </v-card-title>
      <v-card-text style="white-space: pre-line">
        <v-img width="100%" class="rounded" v-bind:src="event.image"></v-img>
        <br />
        Hosts: <b>{{ event.hosts.join(", ") }}</b>
        <br />
        Time<b>: {{ event.time }}</b>
        <br />
        Location<b>: {{ event.location }}</b>
        <br />
        Categories<b>: {{ event.categories.join(", ") }}</b>
        <br />
        Description:<br />
        {{ event.description }}
        <div v-if="event.location != 'Online event' && event.location != ''">
          <iframe
            width="100%"
            height="280px"
            frameborder="0"
            class="mt-2 rounded"
            v-bind:src="
              'https://www.google.com/maps/embed/v1/place?key=AIzaSyCQMbSQjawwUF2loVgW5NX5HpDp8069-HU&q=' +
              event.location
            "
            allowfullscreen
          >
          </iframe>
          <br />
          <b>Note: Google Maps location here is not always correct </b>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          color="background white--text"
          :href="event.link"
          target="_blank"
        >
          Open in Facebook
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="background" text @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PopupCard",
  props: {
    event: Object,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
</style>