<template>
  <v-text-field
    v-model="search"
    append-icon="mdi-magnify"
    label="Search"
    @input="filterEventsBySearch"
    clearable
    outlined
    hint="Search by Title, Description, Location"
  />
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