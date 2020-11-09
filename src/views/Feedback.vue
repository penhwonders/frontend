<template>
  <v-main class="text-center" style="padding: 10px; padding-top: 50px">
    <v-form>
      <v-container>
        <v-form>
          <v-text-field
            v-model="name"
            label="Topic"
            :rules="[(v) => !!v || 'Please fill in topic']"
            id="id"
            outlined
            autocomplete="off"
          ></v-text-field>
          <v-textarea
            type="text"
            v-model="feedbackText"
            outlined
            label="Feedback"
            :rules="[(v) => !!v || 'Please fill in the feedback']"
            autocomplete="off"
          ></v-textarea>
          <v-btn
            :disabled="feedbackText === '' || name === '' ? true : false"
            large
            color="background primary--text"
            elevation="5"
            @click="submit()"
            >Submit</v-btn
          >
          
        </v-form>
        <AlertNotification v-if="Alert" :isFeedback="true" :title="'Thanks you for your feedback!'"/>
      </v-container>
    </v-form>
  </v-main>
</template>

<script>
import AlertNotification from '../components/AlertNotification'

export default {
  name: "Feedback",
  data() {
    return {
      feedbackText: "",
      name: "",
      Alert: false
    }
  },
  methods: {
    submit() {
      console.log(this.name + this.feedbackText);
      this.feedbackText = ''
      this.name = ''
    }
  },
  components: { AlertNotification }
};
</script>

<style>
</style>