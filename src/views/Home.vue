<template>
  <v-container style="max-width: 95%">
    <v-layout row wrap justify-start>
      <v-flex xs12 sm6 md4 lg4 xl4>
        <Search v-on:SearchToHome="(searchData) => (search = searchData)"
      /></v-flex>
      <v-flex xs12 sm6 md4 lg4 xl4
        ><DatePicker v-on:DateToHome="(dates) => (selectedDates = dates)"
      /></v-flex>
      <v-flex xs12 sm6 md4 lg4 xl4
        ><SelectCategory
          v-on:CategoryToHome="
            (categories) => (selectedCategories = categories)
          "
      /></v-flex>
      <v-flex
        xs12
        sm6
        md4
        lg3
        xl3
        v-for="event in filteredEvents"
        :key="event.id"
      >
        <Card :event="event" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from "../components/Card";
import DatePicker from "../components/DatePicker";
import SelectCategory from "../components/SelectCategory";
import Search from "../components/Search";
import axios from "axios";
export default {
  name: "Home",
  data: () => ({
    ConstantEvents: [],
    selectedCategories: [],
    selectedDates: [],
    search: "",
  }),
  computed: {
    filteredEvents() {
      if (this.search) {
        return this.ConstantEvents.filter((e) =>
          e.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else if (this.selectedCategories.length) {
        return this.ConstantEvents.filter((e) =>
          e.categories.some((c) => this.selectedCategories.includes(c))
        );
      } else if (this.selectedDates.length) {
        return this.ConstantEvents.filter((e) =>
          this.selectedDates.some((date) =>
            this.isBetween(
              new Date(date),
              new Date(e.start_time.slice(0, 10)),
              new Date(e.end_time.slice(0, 10))
            )
          )
        );
      } else {
        return this.ConstantEvents;
      }
    },
  },
  methods: {
    isBetween(date, min, max) {
      return date.getTime() >= min.getTime() && date.getTime() <= max.getTime();
    },
  },
  async created() {
    await axios
      .get("https://uexxkpj143.execute-api.ap-southeast-1.amazonaws.com/dev")
      .then((response) => (this.ConstantEvents = response.data))
      .catch((error) => console.log(error));
    this.events = this.ConstantEvents;
  },
  components: { Card, DatePicker, SelectCategory, Search },
};
</script>

<style scoped>
</style>