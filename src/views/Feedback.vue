<template>
  <v-main class="text-center pa-2">
    <v-container>
      <form
        ref="formElement"
        @submit.prevent="submit"
      >
        <v-select
          v-model="type"
          :items="items"
          name="Feedback Type"
          label="Feedback Type"
          outlined
        />
        <v-textarea
          v-model="feedback"
          name="Feedback"
          label="Feedback *"
          :rules="[(v) => v.length >= 100 || 'Feedback must be at least 100 characters']"
          outlined
        />
        <v-textarea
          v-model="suggestions"
          outlined
          name="Suggestions"
          label="Suggestions for improvement"
        />
        <v-text-field
          name="Name"
          v-model="name"
          label="Name"
          outlined
        />
        <v-text-field
          name="Email"
          v-model="email"
          label="Email"
          outlined
        />
        <v-btn
          type="submit"
          :disabled="feedback === '' ? true : false"
          large
          color="background primary--text"
          elevation="5"
        >
          Submit
        </v-btn>
      </form>
      <AlertNotification
        :is-new-event="false"
        :is-function="''"
        :is-feedback="true"
        :dialog="dialog"
        @close="dialog = false"
      />
      <Loading :dialog="loading" />
    </v-container>
  </v-main>
</template>

<script>
import AlertNotification from "../components/AlertNotification";
import Loading from "../components/Loading";
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
      dialog: false,
      loading: false,
      items: ["Comments", "Questions", "Bug Reports", "Feature Request"],
    };
  },
  methods: {
    submit() {
      this.loading = true;
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
          console.log(result);
          this.loading = false;
          this.dialog = true;
          this.name = "";
          this.email = "";
          this.suggestions = "";
          this.feedback = "";
          this.type = "";
          this.$refs.formElement.resetValidation();
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  components: { AlertNotification, Loading },
};
</script>

<style>
</style>