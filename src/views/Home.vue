<template>
  <v-container>
    <v-layout 
      row 
      wrap
      justify-start
    >
      <v-flex xs12 sm6 md4 lg3 xl3 v-for="data in datas" :key="data.id">
        <Card :event="data"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from '../components/Card'

export default {
    name: 'Home',
    computed: {
      datas() {
        return this.$store.state.events
      }
    },
    components: {Card},
}
</script>

<style scoped>

</style>