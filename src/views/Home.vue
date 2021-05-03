<template>
  <v-container>
    <Search
      v-if="$store.state.searchType == 'search'"
      v-on:SearchToHome="
        (searchData) => {
          search = searchData;
          selectedDates = [];
          selectedCategories = [];
        }
      "
    />
    <DatePicker
      v-if="$store.state.searchType == 'calendar'"
      v-on:DateToHome="
        (dates) => {
          selectedDates = dates;
          selectedCategories = [];
          search = '';
        }
      "
    />
    <SelectCategory
      v-if="$store.state.searchType == 'category'"
      v-on:CategoryToHome="
        (categories) => {
          selectedCategories = categories;
          selectedDates = [];
          search = '';
        }
      "
    />
    <v-layout row wrap justify-start>
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
    <v-layout
      row
      wrap
      justify-start
      v-if="ConstantEvents.length === 0 && isError === false"
    >
      <v-flex xs12 sm6 md4 lg3 xl3 v-for="n in 8" :key="n">
        <v-skeleton-loader
          class="mx-2 mb-3 card-outter"
          max-width="450px"
          type="card, article, actions"
        ></v-skeleton-loader>
      </v-flex>
    </v-layout>
    <v-card v-else-if="isError === true">
      <v-card-text class="text-center">
        <img src="https://img.icons8.com/color/48/000000/error--v3.png" />
        <br />
        <span class="headline">Technical issue!</span><br />
        <span class="text-subtitle-2">
          Please report to us! <br />
          Email: munyoudoum@gmail.com <br />
          FB:
          <a href="https://www.instagram.com/penhwonders/" target="_blank"
            >Penhwonders</a
          >
          <br />
          IG:
          <a href="https://web.facebook.com/penhwonders" target="_blank"
            >Penhwonders</a
          >
        </span>
      </v-card-text>
    </v-card>
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
    isError: false,
  }),
  computed: {
    filteredEvents() {
      if (this.search) {
        return this.ConstantEvents.filter(
          (e) =>
            e.title.toLowerCase().includes(this.search.toLowerCase()) ||
            e.location.toLowerCase().includes(this.search.toLowerCase()) ||
            e.description.toLowerCase().includes(this.search.toLowerCase())
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
      .get("https://v8uk2bk42a.execute-api.ap-southeast-1.amazonaws.com/dev/")
      .then((response) => (this.ConstantEvents = response.data))
      .catch(() => {
        this.isError = true;
      });
  },
  components: { Card, DatePicker, SelectCategory, Search },
};
</script>

<style></style>
