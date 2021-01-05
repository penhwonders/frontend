<template>
  <v-main class="text-center pa-2">
    <p class="title">Add/Update new events</p>
    <v-container>
      <v-form v-model="valid" ref="form">
        <v-text-field
          v-model="link"
          type="text"
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
          :disabled="!valid"
          @click="value === 'Add' ? add() : update()"
          >Submit</v-btn
        >
      </v-form>
      <AlertNotification
        :event="event"
        :isNewEvent="isNewEvent"
        :isFunction="functionCalled"
        :isFeedback="false"
        :dialog="dialog"
        @close="dialog = false"
      />
      <Loading :dialog="loading" />
    </v-container>
  </v-main>
</template>

<script>
import Axios from "axios";
import AlertNotification from "../components/AlertNotification";
import Loading from "../components/Loading";

//api link

let apiUrl = "https://wqh9ckdbre.execute-api.ap-southeast-1.amazonaws.com/dev";

export default {
  name: "AddUpdateEvent",
  data() {
    return {
      valid: false,
      link: "",
      value: null,
      items: ["Add", "Update"],
      Alert: false,
      event: null,
      isNewEvent: false,
      linkRules: [
        (v) => !!v || "Link is required",
        (v) =>
          /^https:\/\/www|web\.facebook\.com\/events\/\d{10,20}|\/$/.test(v) ||
          "Link is invalid",
      ],
      loading: false,
      functionCalled: "",
      dialog: false,
    };
  },
  methods: {
    async add() {
      this.functionCalled = "add";
      this.loading = true;
      await Axios.post(apiUrl, {
        link: this.link,
      })
        .then((event) => this.eventAlert(event.data))
        .catch((err) => this.eventAlert(err.data));
    },
    async update() {
      this.functionCalled = "update";
      this.loading = true;
      await Axios.put(apiUrl, {
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
    eventAlert(event) {
      if (typeof event.body === "object") {
        this.isNewEvent = true;
      } else if (typeof event.body === "string") {
        this.isNewEvent = false;
      }
      this.event = event;
      this.loading = false;
      this.dialog = true;
      this.link = "";
      this.value = null;
      this.$refs.form.resetValidation();
    },
  },
  components: { AlertNotification, Loading },
};
</script>

<style>
</style>