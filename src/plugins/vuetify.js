import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const colorPallete = {
  primary: "#63c6ff",
  secondary: "#358ff0",
  bg: "#262e38",
  success: "#104F55",
};

export default new Vuetify({
  theme: {
    dark: localStorage.getItem("dark_theme"),
    themes: {
      light: {
        primary: colorPallete.primary,
        secondary: colorPallete.secondary,
        success: colorPallete.success,
        background: colorPallete.bg,
      },
      dark: {
        primary: colorPallete.primary,
        secondary: colorPallete.secondary,
      },
    },
  },
});
