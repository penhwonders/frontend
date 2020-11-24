<template>
  <v-main class="text-center" style="padding: 10px">
    <v-container>
      <form ref="formElement" @submit.prevent="submit">
        <v-select
          v-model="type"
          :items="items"
          name="Feedback Type"
          label="Feedback Type"
          outlined
        ></v-select>
        <v-textarea
          v-model="feedback"
          name="Feedback"
          label="Feedback"
          :rules="[(v) => !!v || 'Please fill in the feedback']"
          outlined
        ></v-textarea>
        <v-textarea
          v-model="suggestions"
          outlined
          name="Suggestions"
          label="Suggestions for improvement"
        ></v-textarea>
        <v-text-field
          name="Name"
          v-model="name"
          label="Name"
          outlined
        ></v-text-field>
        <v-text-field
          name="Email"
          v-model="email"
          label="Email"
          outlined
        ></v-text-field>
        <v-btn
          type="submit"
          :disabled="feedback === '' ? true : false"
          large
          color="background primary--text"
          elevation="5"
          >Submit</v-btn
        >
      </form>
      <AlertNotification
        v-if="Alert"
        :isFeedback="true"
        :title="'Thanks you for your feedback!'"
      />
    </v-container>
  </v-main>
</template>

<script>
import AlertNotification from "../components/AlertNotification";
import axios from "axios";
// import qs from "querystring";
export default {
  name: "Feedback",
  data() {
    return {
      name: "",
      email: "",
      suggestions: "",
      feedback: "",
      type: "",
      Alert: false,
      items: ["Comments", "Questions", "Bug Reports", "Feature Request"],
    };
  },
  methods: {
    submit() {
      var formElement = this.$refs.formElement;
      var formData = new FormData(formElement);
      // var formData = new FormData(document.forms["form"]);
      // var data = {
      //   "entry.326955045": this.feedback,
      //   "entry.1696159737": this.suggestions,
      //   "entry.485428648": this.name,
      //   "entry.879531967": this.email,
      //   "entry.1591633300": this.type,
      // };
      axios
        .post(
          "https://script.google.com/macros/s/AKfycbwZ_nC0xgdNKkFGBXTDJGN1jUXI7vYByxsg7LyrNNr9rIAV6aY/exec",
          formData
        )
        .then((result) => {
          console.log("res:" + result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  components: { AlertNotification },
};
</script>

<style>
</style>