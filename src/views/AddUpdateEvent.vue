<template>
  <v-main class="text-center pa-2">
    <v-container>
      <v-form
        v-model="valid"
        ref="form"
      >
        <v-text-field
          v-model="link"
          type="text"
          :rules="linkRules"
          placeholder="https://www.facebook.com/events/1234567890/"
          persistent-hint
          outlined
          label="Facebook event link(Obsolete)"
        />
        <v-select
          :items="items"
          v-model="value"
          outlined
          :rules="[(v) => !!v || 'It is not that hard to decide ^_^']"
          label="Type"
          menu-props="offset-y"
        />
        <v-btn
          color="background primary--text"
          large
          elevation="5"
          :disabled="true"
          @click="value === 'Add' ? add() : update()"
        >
          Submit(Obsolete)
        </v-btn>
      </v-form>
      <AlertNotification
        :event="event"
        :is-new-event="isNewEvent"
        :is-function="functionCalled"
        :is-feedback="false"
        :dialog="dialog"
        @close="dialog = false"
      />
      <Loading :dialog="loading" />
    </v-container>
  </v-main>
</template>

<script>
// import Axios from "axios";
import AlertNotification from "../components/AlertNotification";
import Loading from "../components/Loading";


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
        (v) => !!v || "You can't leave me empty :( ",
        (v) =>
          /^https:\/\/(www|web)\.facebook\.com\/events\/\d{10,20}\/?$/.test(
            v
          ) || "Please put in a valid link (づ｡◕‿‿◕｡)づ",
      ],
      loading: false,
      functionCalled: "",
      dialog: false,
    };
  },
  methods: {
    // async add() {
    //   this.functionCalled = "add";
    //   this.loading = true;
    //   await Axios.post(apiUrl, {
    //     link: this.link,
    //   })
    //     .then((event) => this.eventAlert(event.data))
    //     .catch((err) => this.eventAlert(err.data));
    // },
    // async update() {
    //   this.functionCalled = "update";
    //   this.loading = true;
    //   await Axios.put(apiUrl, {
    //     link: this.link,
    //   })
    //     .then((event) => this.eventAlert(event.data))
    //     .catch(function (error) {
    //       if (error.response) {
    //         // Request made and server responded
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //       } else if (error.request) {
    //         // The request was made but no response was received
    //         this.eventAlert(error.request);
    //         console.log("Error: "+error.request);
    //       } else {
    //         // Something happened in setting up the request that triggered an Error
    //         console.log("Error: "+error.message);
    //       }
    //     });
    // },
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