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
          :rules="[
            (v) => !!v || 'Link is required',
            (v) => /^https:\/\/www\.facebook\.com\/events\/\d{10,20}\/$/.test(v) || 'Link is invalid' 
          ]"
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
      <AlertNotification v-if="Alert" :isFeedback="false" :title="value === 'Add' && value !== null ? 'Event Added!' : 'Event Updated!'"/>
    </v-container>
  </v-main>
</template>

<script>
import Axios from 'axios';
import AlertNotification from '../components/AlertNotification'

//api link

var apiUrl = 'https://wqh9ckdbre.execute-api.ap-southeast-1.amazonaws.com/dev'

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
    };
  },
  methods: {
    async add() {
      await Axios.post(apiUrl, {
        "link" : this.link
      })
        .then((event) => {
          this.event = event.data.body
          console.log(this.event);
        })
        .catch((err) => console.log(err.data))
    },
    update() {
      console.log(this.link);
      console.log(this.value);

      this.link = ''
      this.value = null
    },
  },  
  components: {AlertNotification}
};
</script>

<style>
</style>