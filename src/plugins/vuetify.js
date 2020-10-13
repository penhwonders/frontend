import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const colorPallete = {
    'primary' : '#9EC5AB',
    'secondary' : '#32746D',
    'bg' : '#011502',
    'success' : '#104F55',
    'accent' : '#01200F'
}

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colorPallete.primary,
            secondary: colorPallete.secondary,
            success: colorPallete.success,
            background: colorPallete.bg,
            // background2: colorPallete.bg2
          },
        },
      },
});
