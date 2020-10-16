<template>
  <v-container>
    <v-layout 
      row 
      wrap
      justify-start
      v-if="events.length != 0"
    >
      <v-flex 
        xs12 sm6 md4 lg3 xl3 
        v-for="event in events" 
        :key="event.id"
      >
        <Card :event="event"/>
      </v-flex>
    </v-layout>
    <v-card
      color="primary mx-auto"
      class="grey--text"
      style="text-align: center"
      v-else
    >
      <v-card-subtitle
        justify-center
      >
        <v-btn class="text-wrap" disabled text color="primary">There is currently no available content.</v-btn>
      </v-card-subtitle>  
    </v-card>
  </v-container>
</template>

<script>
import Card from '../components/Card'

export default {
    name: 'Category',
    data() {
      return {
        categorieName: '',
      }
    },
    components: {Card},
    computed: {
      events() {
        return this.$store.state.events.filter(event => event.categories.includes(this.categorieName))
      }
    },
    created() {
      this.categorieName = this.$route.params.categorieName
    },
    watch:{
      $route (to, from){
        if(to != from) {
          this.categorieName = this.$route.params.categorieName
        }
      }
    }
}
</script>

<style>

</style>