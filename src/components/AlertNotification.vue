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
          <v-card v-if="isNewEvent === true">
            <v-card-title caption style="padding: 25px">
                Event added
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <PopupCard :event="data"/>
                <v-spacer></v-spacer>
                <v-btn color="background primary--text" @click="dialog = false">Close</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
          <v-card v-else>
            <v-card-title caption style="padding: 25px">
                {{data.body}}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="background primary--text" @click="dialog = false">Close</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
      </v-card>
  </v-dialog>
</template>

<script>
import PopupCard from './PopupCard'

export default {
    name: 'AlertNotification',
    props: {
        'data': Object,
        'isNewEvent': Boolean
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