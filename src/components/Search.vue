<template>
  <v-text-field
    v-model="search"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
    @input="filterEventsBySearch"
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    search: "",
    date: null,
    trip: {
      name: "",
      location: null,
      start: null,
      end: null,
    },
  }),
  methods: {
    filterEventsBySearch() {
      this.$emit("SearchToHome", this.search);
    },
  },
};
</script>