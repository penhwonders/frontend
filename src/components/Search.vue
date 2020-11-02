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
  }),
  methods: {
    filterEventsBySearch() {
      this.$emit("SearchToHome", this.search);
    },
  },
};
</script>