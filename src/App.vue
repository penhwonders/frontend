<template>
  <v-app id="app">
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import {app} from './firebase'
import { collection, getDocs, getFirestore, query, orderBy } from "firebase/firestore"; 

const db = getFirestore(app);

export default {
  name: "App",
  data() {
    return {
      categorySelect: "",
    };
  },
  async created() {
    const querySnapshot = await getDocs(query(collection(db, "events"), orderBy("start_time")));
    const allEvents = querySnapshot.docs.map(doc => doc.data())
    if (allEvents.length) {
    this.$store.commit("updateAllEvents", allEvents);
    } else {
      this.$store.commit("updateIsError", true);
      return []
    }
  },
  components: { Navbar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
::-webkit-scrollbar-track {
  background-color: #262e38;
  border: none;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #63c6ff;
  border: none;
}

::-webkit-scrollbar-thumb {
  background-color: #63c6ff;
  border: none;
}

:root .v-application .elevation-1 {
  box-shadow: 0 0 1px 2px #262e38,
    /* inner white */ 0 0 10px 5px rgb(144, 171, 224),
    /* middle magenta */ 0 0 6px 5px rgb(99, 198, 255) !important;
}
</style>
