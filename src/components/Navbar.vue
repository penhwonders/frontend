<template>
  <v-card>
    <!-- Navbar -->
    <v-app-bar
      min-width="150px"
      color="background"
      app
      fixed
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
    >
      <v-app-bar-nav-icon
        class="primary--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="primary--text" caption>
        Jol Leng
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        dark
        v-if="$store.state.searchType != 'search'"
        icon
        @click="searchType('search')"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        dark
        v-if="$store.state.searchType != 'calendar'"
        icon
        @click="searchType('calendar')"
      >
        <v-icon>mdi-calendar</v-icon>
      </v-btn>
      <v-btn
        dark
        v-if="$store.state.searchType != 'category'"
        icon
        @click="searchType('category')"
      >
        <v-icon>mdi-layers</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" color="background" app>
      <v-list>
        <!-- Home button -->
        <v-list-item
          ><v-btn to="/" width="100%" color="primary" text
            >Home</v-btn
          ></v-list-item
        >
        <!-- About button -->
        <v-list-item
          ><v-btn to="/About" width="100%" color="primary " text
            >About</v-btn
          ></v-list-item
        >
        <v-list-item>
          <v-switch
            dark
            v-model="$vuetify.theme.dark"
            label="Dark Mode"
            persistent-hint
            @click="saveThemeToLocal"
          ></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    collapseOnScroll: true,
  }),
  watch: {
    drawer() {
      this.categoryToggle = false;
    },
  },
  methods: {
    saveThemeToLocal() {
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    searchType(type) {
      this.$store.dispatch("updateSearchType", type);
      if (this.$router.currentRoute.name != "Home") {
        this.$router.push({ name: "Home" });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    },
  },
  components: {},
};
</script>

<style scoped>
</style>
