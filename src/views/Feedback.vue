<template>
  <v-main class="text-center" style="padding: 10px">
    <v-form>
      <v-container>
        <v-form>
          <v-select
            v-model="type"
            :items="items"
            label="Feedback Type"
            outlined
          ></v-select>
          <v-textarea
            v-model="feedback"
            label="Feedback"
            :rules="[(v) => !!v || 'Please fill in the feedback']"
            outlined
          ></v-textarea>
          <v-textarea
            v-model="suggestions"
            outlined
            label="Suggestions for improvement"
          ></v-textarea>
          <v-text-field v-model="name" label="Name" outlined></v-text-field>
          <v-text-field v-model="email" label="Email" outlined></v-text-field>
          <v-btn
            :disabled="feedback === '' ? true : false"
            large
            color="background primary--text"
            elevation="5"
            @click="submit()"
            >Submit</v-btn
          >
        </v-form>
        <AlertNotification
          v-if="Alert"
          :isFeedback="true"
          :title="'Thanks you for your feedback!'"
        />
      </v-container>
    </v-form>
  </v-main>
</template>

<script>
import AlertNotification from "../components/AlertNotification";
import axios from "axios";
import qs from "querystring";
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
      var data = {
        "entry.326955045": this.feedback,
        "entry.1696159737": this.suggestions,
        "entry.485428648": this.name,
        "entry.879531967": this.email,
        "entry.1591633300": this.type,
      };
      console.log(data);
      axios
        .post(
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLScpAzX-cXRqnDFmlEKYsMoQ_kE5G4umikFeuJ21-0v41wQwxw/formResponse",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { AlertNotification },
};
</script>

<style>
</style>