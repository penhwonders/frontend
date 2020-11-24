<template>
  <v-main class="text-center" style="padding: 10px; padding-top: 50px">
    <p class="title">Add and Update new event</p>
    <v-container>
      <v-form v-model="valid">
        <v-text-field
          v-model="link"
          type="text"
          autocomplete="off"
          hint="Ex: https://www.facebook.com/events/702694946989244/"
          :rules="linkRules"
          persistent-hint
          outlined
          label="Facebook event link"
        ></v-text-field>
        <v-select
          :items="items"
          v-model="value"
          outlined
          :rules="[(v) => !!v || 'Item is required']"
          label="Type"
          menu-props="offset-y"
        ></v-select>
        <v-btn
          color="background primary--text"
          large
          elevation="5"
          :disabled="link === '' || value === null ? true : false"
          @click="value === 'Add' ? add() : update()"
          >Submit</v-btn
        >
      </v-form>
      <AlertNotification
        v-if="Alert"
        :data="event"
        :isNewEvent="isNewEvent"
      />
    </v-container>
  </v-main>
</template>

<script>
import Axios from "axios";
import AlertNotification from "../components/AlertNotification";

//api link

var apiUrl = "https://wqh9ckdbre.execute-api.ap-southeast-1.amazonaws.com/dev";

export default {
  name: "AddUpdateEvent",
  data() {
    return {
      valid: true,
      link: "",
      value: null,
      items: ["Add", "Update"],
      Alert: false,
      event: null,
      isNewEvent: false,
      linkRules: [
                    (v) => !!v || 'Link is required',
                    (v) =>
                      /^https:\/\/www|web\.facebook\.com\/events\/\d{10,20}|\/$/.test(v) ||
                      'Link is invalid',
                  ]
    };
  },
  methods: {
    async add() {
      await Axios.post(apiUrl, {
        link: this.link,
      })
        .then((event) => this.eventAlert(event.data))
        .catch(function (error) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    },
    async update() {
      await Axios.put(apiUrl, {
        link: this.link,
      })
        .then((event) => console.log(event.data))
        .catch(function (error) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    },
    eventAlert(event) {
      if(typeof event.body === Object){
        this.isNewEvent = true
      }
      else if(typeof event.body === String){
        this.isNewEvent = false
      }
      console.log(event.body)
      console.log(this.isNewEvent);
      this.event = event
      this.Alert = true
    },
  },
  components: { AlertNotification },
};
</script>

<style>
</style>