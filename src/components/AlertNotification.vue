<template>
  <v-dialog
      v-model="dialog"
      scrollable 
      persistent 
      :overlay="false"
      width="330px"
      transition="dialog-transition"
  >
      <v-card v-if="dialog">
          <v-card-title caption style="padding: 25px">
            {{title}}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
              <v-spacer></v-spacer>
              <PopupCard v-if="!isFeedback"/>
              <v-spacer v-if="!isFeedback"></v-spacer>
              <v-btn color="background primary--text" @click="dialog = false">Close</v-btn>
              <v-spacer></v-spacer>
          </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
import PopupCard from './PopupCard'

export default {
    name: 'AlertNotification',
    props: {
        'isFeedback': Boolean,
        'title': String
    },
    data() {
        return {
            dialog: true
        }
    },
    components: { PopupCard }
}
</script>

<style>

</style>