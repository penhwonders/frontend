<template>
  <v-bottom-sheet inset v-model="sheet" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" text v-bind="attrs" v-on="on">
        <v-icon>mdi-calendar</v-icon>
      </v-btn>
    </template>

    <v-sheet rounded>
      <v-row justify="center">
        <v-date-picker 
          v-model="date" 
          :reactive="true"
          elevation="15"
          class="my-6"
          show-current="false"
        >
        </v-date-picker>
      </v-row>
      <v-row justify="center"><v-btn class="mb-6" color="primary" @click="test">search</v-btn></v-row>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "DatePicker",
  data: () => ({
    searchInput: '',
    sheet: false,
    date: new Date().toISOString().substr(0, 10),
  }),
  methods: {
    test(){
      console.log(this.date);
    },
    search() {
      console.log(this.searchInput);
      this.searchInput = ''
    }
  },
};
</script>

<style>
</style>