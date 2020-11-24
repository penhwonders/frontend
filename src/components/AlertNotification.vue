<template>
  <v-dialog
      v-model="dialog"
      scrollable 
      persistent 
      :overlay="false"
      width="330px"
      transition="dialog-transition"
  >
      <v-card v-if="dialog && isNewEvent === true">
            <v-card-title caption style="padding: 25px">
                Event added
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <PopupCard :event="event.body"/>
                <v-spacer></v-spacer>
                <v-btn color="background primary--text" @click="dialog = false">Close</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
      </v-card>
      <v-card v-else-if="dialog && isNewEvent === false">
        <v-card-title caption style="padding: 25px">
            {{event.body}}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
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
        'event': Object,
        'isNewEvent': Boolean
    },
    data() {
        return {
            dialog: true
        }
    },
    destroyed() {
        this.$parent.Alert = false
    },
    components: { PopupCard }
}
</script>

<style>

</style>