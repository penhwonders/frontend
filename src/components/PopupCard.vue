<template>
  <v-dialog
    v-model="dialog"
    scrollable 
    :persistent="$vuetify.breakpoint.mobile" 
    :overlay="false"
    max-width="600px"
    transition="dialog-transition"
  >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="background"
        dark
        v-bind="attrs"
        v-on="on"
        >
            see more
        </v-btn>
    </template>
    <v-card>
        <v-card-title>
            {{event.title}}
        </v-card-title>

        <v-img
            class="white--text img-style"
            v-bind:src="event.image"
            justify-center
            align-center
        ></v-img>

        <v-card-subtitle style="margin-top: 10px">
            <b>Hosts</b>: {{event.hosts.join(", ")}}<br>
            <b>Categories</b>: {{event.categories.join(", ")}}<br>
            <b>Time</b>: {{event.time}}<br>
            <b>Location</b>: {{event.location}}<br>
            <b>Description:</b>
        </v-card-subtitle>
        
        <v-card-text style="padding: 20px padding-top:10px" overflow-show>
            {{event.description}}
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
        event: Object
    },
    data () {
      return {
        dialog: false,
      }
    },
}
</script>

<style>
.img-style {
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 3px;
}
</style>