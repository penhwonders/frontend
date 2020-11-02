import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const colorPallete = {
    'primary' : '#96d7ff',
    'secondary' : "#63c6ff",
    'bg' : '#262e38',
    'success' : '#104F55',
    'accent' : '#01200F'
}

export default new Vuetify({
  theme: {
    dark: localStorage.getItem("dark_theme"),
    themes: {
      light: {
        primary: colorPallete.primary,
        secondary: colorPallete.secondary,
        success: colorPallete.success,
        background: colorPallete.bg,
        // background2: colorPallete.bg2
      },
      dark: {
        primary: "#63c6ff",
        secondary: "#358ff0"
      }
    }
  },
});
