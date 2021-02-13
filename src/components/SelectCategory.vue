<template>
  <v-select
    v-model="selectedCategories"
    :items="category"
    label="Select categories"
    multiple
    chips
    deletable-chips
    prepend-icon="mdi-layers"
    clearable
    @change="filterEventsByCategories"
    menu-props="offset-y"
  >
  </v-select>
</template>

<script>
export default {
  data: () => ({
    category: [
      "Art",
      "Causes",
      "Comedy",
      "Crafts",
      "Dance",
      "Drinks",
      "Education",
      "Entertainment",
      "Film",
      "Fitness",
      "Food",
      "Games",
      "Health",
      "Home",
      "Literature",
      "Music",
      "Networking",
      "Party",
      "Religion",
      "Shopping",
      "Sports",
      "Theatre",
      "Wellness",
      "Other",
    ],
    selectedCategories: [],
  }),
  methods: {
    filterEventsByCategories() {
      this.$emit("CategoryToHome", this.selectedCategories);
    },
  },
};
</script>