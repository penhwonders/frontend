import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const colorPallete = {
  primary: '#63c6ff',
  secondary: '#358ff0',
  bg: '#262e38',
};

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colorPallete.primary,
        secondary: colorPallete.secondary,
        background: colorPallete.bg,
      },
      dark: {
        primary: colorPallete.primary,
        secondary: colorPallete.secondary,
        background: colorPallete.bg,
      },
    },
  },
});
