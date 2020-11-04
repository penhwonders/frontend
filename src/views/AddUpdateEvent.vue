<template>
  <v-main class="text-center" style="padding: 10px; padding-top: 50px;">
      <v-form>
          <p class="title">Add new event</p>
            <v-text-field
                v-model="link"
                style="max-width: 100%;"
                type="text"
                outlined
                label="event link"
            ></v-text-field>
      </v-form>
  </v-main>
</template>

<script>
export default {
    name: 'AddUpdateEvent',
    data() {
        return {
            link: ''
        }
    }
}
</script>

<style>

</style>