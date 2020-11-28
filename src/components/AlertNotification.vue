<template>
  <v-dialog
      v-model="dialog"
      scrollable 
      persistent 
      :overlay="false"
      width="330px"
      transition="dialog-transition"
  >
    <v-card v-if="dialog && isNewEvent === true && isFeedback === false">
        <v-card-title class="justify-center" v-if="isFunction === 'add'">
            Event added
        </v-card-title>
        <v-card-title caption class="justify-center" v-if="isFunction === 'update'">
            Event updated
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <PopupCard :event="event.body"/>
            <v-spacer></v-spacer>
            <v-btn color="background primary--text" @click="close()">Close</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
    <v-card v-else-if="dialog && isNewEvent === false && isFeedback === false">
    <v-card-title class="justify-center">
        {{event.body}}
    </v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="background primary--text" @click="close()">Close</v-btn>
        <v-spacer></v-spacer>
    </v-card-actions>
    </v-card>
    <v-card v-else-if="dialog && isNewEvent === false && isFeedback === true">
        <v-card-title class="justify-center align-center">
            Thanks for your feedback <v-icon class="pl-1">mdi-check-circle</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="background primary--text" @click="close()">Close</v-btn>
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
        'isNewEvent': Boolean,
        'isFunction': String,
        'dialog': Boolean,
        'isFeedback': Boolean
    },
    methods: {
        close() {
            this.$emit('close')
        }
    },
    components: { PopupCard }
}
</script>

<style>

</style>