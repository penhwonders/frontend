<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="200px"
  >
    <template #activator="{ on, attrs }">
      <v-combobox
        v-model="dates"
        multiple
        chips
        label="Select multiple dates"
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        v-on="on"
        clearable
        append-icon
        readonly
        @input="filterEventsByDates"
      />
    </template>
    <v-date-picker
      elevation="10"
      color="primary"
      v-model="dates"
      multiple
      scrollable
      @click:date="filterEventsByDates"
    />
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    dates: [],
    menu: false,
  }),
  methods: {
    filterEventsByDates() {
      this.$emit("DateToHome", this.dates);
    },
  },
};
</script>

<style></style>
