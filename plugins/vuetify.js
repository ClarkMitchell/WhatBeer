import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#00796B', // a color that is not in the material colors palette
    accent: '#FFAF4A',
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
