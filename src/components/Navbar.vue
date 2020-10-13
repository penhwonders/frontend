<template>
  <nav>
    <v-app-bar color="background" dense app>
      <v-app-bar-nav-icon
        class="primary--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="primary--text"> Facebook Event </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer 
        v-model="drawer" 
        color="background" 
        app 
        temporary
      >
        <v-list>
          <v-list-item><v-btn width="100%" color="primary" text>Home</v-btn></v-list-item>
          <v-list-item>
            <v-btn width="100%" color="primary" text @click="categoryToggle = !categoryToggle">Category</v-btn>
          </v-list-item>
          <!-- Category items -->
          <div v-if="categoryToggle">
            <v-list-item
              v-for="cate in category"
              v-bind:key="category.indexOf(cate)"
            >
              <v-btn color="secondary" text>{{cate}}</v-btn>
            </v-list-item>
          </div>
          <v-list-item><v-btn width="100%" color="primary" text>About</v-btn></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-main>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    categoryToggle: false,
    category: [
      "sport",
      "dances",
      "food",
      "cooking",
      "live music",
      "yoga",
      "running",
      "entertainment",
      "kids friendly",
      "drinks",
      "education",
      "art",
      "party",
    ],
  }),
};
</script>

<style scoped>

</style>
