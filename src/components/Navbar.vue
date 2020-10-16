<template>
  <nav>
    <!-- Navbar -->
    <v-app-bar color="background" app fixed>
      <v-app-bar-nav-icon
        class="primary--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title 
        class="primary--text"
        caption
        > 
        Facebook Event
      </v-toolbar-title>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer 
      v-model="drawer" 
      color="background" 
      app 
    >
      <v-list>
        <!-- Home button -->
        <v-list-item><v-btn to="/" width="100%" color="primary" text>Home</v-btn></v-list-item>
        <!-- Category button -->
        <v-list-item>
          <v-btn width="100%" color="primary" text @click="categoryToggle = !categoryToggle">Category</v-btn>
        </v-list-item>
        <!-- Category items list -->
        <v-expand-transition>
          <div v-if="categoryToggle">
            <v-list-item
              class="category"
              v-for="cate in category"
              v-bind:key="category.indexOf(cate)"
            >
              <v-btn @click="toView(cate)" width="100%" color="secondary" text>{{cate}} <v-spacer></v-spacer></v-btn>
            </v-list-item>
          </div>
        </v-expand-transition>
        <!-- About button -->
        <v-list-item><v-btn to="/About"  width="100%" color="primary " text>About</v-btn></v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    categoryToggle: false,
    category: [
      "Art",
      "Cooking",
      "Dances",
      "Drinks",
      "Education",
      "Entertainment",
      "Fitness",
      "Food",
      "Kids friendly",
      "Live music",
      "Party",
      "Running",
      "Sport",
      "Yoga",
    ],
  }),
  watch: {
    drawer() {
      this.categoryToggle = false;
    }
  },
  methods: {
    toView(cate) {
      this.$router.push({name: "Category", params:{categorieName : cate}})
    }
  }
};
</script>

<style scoped>
  
</style>
