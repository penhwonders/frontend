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
        <v-img
          class="img-style"
          v-bind:src="event.image"
          justify-center
          align-center
        ></v-img>
        <br />
        Hosts: <b>{{ event.hosts.join(", ") }}</b
        ><br />
        Time<b>: {{ event.time }}</b
        ><br />
        Location<b>: {{ event.location }}</b
        ><br />
        Categories<b>: {{ event.categories.join(", ") }}</b
        ><br />
        Description:<br />
        {{ event.description }}
        <iframe
          v-if="event.location != 'Online Event'"
          width="100%"
          height="280px"
          frameborder="0"
          style="border: 0; margin-top: 8px"
          v-bind:src="
            'https://www.google.com/maps/embed/v1/place?key=AIzaSyCQMbSQjawwUF2loVgW5NX5HpDp8069-HU&q=' +
            event.location
          "
          allowfullscreen
        >
        </iframe>
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
        <v-btn
          color="background"
          style="font-weight: 600"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
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
.img-style {
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 3px;
}
</style>