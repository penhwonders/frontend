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
        v-if="$store.state.searchType != 'search'"
        icon
        @click="searchType('search')"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        v-if="$store.state.searchType != 'calendar'"
        icon
        @click="searchType('calendar')"
      >
        <v-icon>mdi-calendar</v-icon>
      </v-btn>
      <v-btn
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
        <!-- Category button -->
        <v-list-item>
          <v-btn
            width="100%"
            color="primary"
            text
            @click="categoryToggle = !categoryToggle"
            >Category</v-btn
          >
        </v-list-item>
        <!-- Category items list -->
        <v-expand-transition>
          <div v-if="categoryToggle">
            <v-list-item
              class="category"
              v-for="cate in category"
              v-bind:key="category.indexOf(cate)"
            >
              <v-btn @click="toView(cate)" width="100%" color="secondary" text
                >{{ cate }} <v-spacer></v-spacer
              ></v-btn>
            </v-list-item>
          </div>
        </v-expand-transition>
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
            hint="My eyes are blinded! Please help!"
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
    categoryToggle: false,
    collapseOnScroll: true,
    category: [
      "Art",
      "Causes",
      "Comedy",
      "Crafts",
      "Dances",
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
  }),
  computed: {
    // searchType() {
    //   return this.searchType;
    // },
  },
  watch: {
    drawer() {
      this.categoryToggle = false;
    },
  },
  methods: {
    toView(cate) {
      this.$router.push({ name: "Category", params: { categorieName: cate } });
    },
    saveThemeToLocal() {
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    searchType(type) {
      this.$store.dispatch("updateSearchType", type);
    },
  },
  components: {},
};
</script>

<style scoped>
</style>
