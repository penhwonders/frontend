<template>
  <v-text-field
    v-model="search"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
    @input="filterEventsBySearch"
    clearable
    hint="Search by title, description, location"
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    search: "",
  }),
  methods: {
    filterEventsBySearch() {
      this.$emit("SearchToHome", this.search);
    },
  },
};
</script>