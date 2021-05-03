<template>
  <v-card>
    <!-- Navbar -->
    <v-app-bar
      min-width="150px"
      class="rounded-tl-0"
      color="background"
      app
      fixed
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
    >
      <v-app-bar-nav-icon
        class="primary--text"
        @click="drawer = !drawer"
        v-if="navbarIcon() == true"
      >
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon
        class="primary--text"
        @click="drawer = !drawer"
        v-else
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="primary--text" caption>
        <router-link style="text-decoration: none; color: inherit" to="/"
          >Penhwonders</router-link
        >
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
    <v-navigation-drawer
      style="height: 100%"
      v-model="drawer"
      color="background"
      app
      justify-space-between
    >
      <v-list>
        <!-- Home button -->
        <v-list-item
          ><v-btn to="/" width="100%" color="primary" text
            >Home</v-btn
          ></v-list-item
        >
        <!-- Add and Update event button -->
        <v-list-item
          ><v-btn to="/AddUpdateEvent" width="100%" color="primary" text
            >Add/Update new events</v-btn
          ></v-list-item
        >
        <!-- Feedback button -->
        <v-list-item
          ><v-btn to="/Feedback" width="100%" color="primary" text
            >Feedback</v-btn
          ></v-list-item
        >
        <!-- About button -->
        <v-list-item
          ><v-btn to="/About" width="100%" color="primary" text
            >About</v-btn
          ></v-list-item
        >
        <!-- Donation button -->
        <v-list-item>
          <v-btn to="/Donation" width="100%" color="primary" text
            >Support Us<v-icon class="ml-2">mdi-heart</v-icon>
          </v-btn>
        </v-list-item>
        <!-- Dark mode switch -->
        <v-list-item>
          <v-spacer></v-spacer>
          <v-switch
            inset
            dark
            v-model="$vuetify.theme.dark"
            label="Dark Mode"
            persistent-hint
            @click="saveThemeToLocal"
          ></v-switch>
          <v-spacer></v-spacer>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="ma-3">
          <div>
            <v-chip color="secondary"> @penhwonders </v-chip>
            <v-btn
              href="https://www.instagram.com/penhwonders/"
              target="_blank"
              icon
              dark
              class="mx-2"
              ><v-icon large class="icon">mdi-instagram</v-icon>
            </v-btn>

            <v-btn
              icon
              dark
              href="https://web.facebook.com/penhwonders"
              target="_blank"
              ><v-icon large class="icon">mdi-facebook</v-icon></v-btn
            >
          </div>
          <div class="text-center">
            <router-link to="/Policy">Our policy</router-link>
          </div>
        </div>
      </template>
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
    navbarIcon() {
      if (this.drawer == false) {
        return true;
      } else {
        return false;
      }
    },
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
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
  components: {},
};
</script>

<style scoped>
.donation-btn {
  position: absolute;
  bottom: 0;
}
</style>
