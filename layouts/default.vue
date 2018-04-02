<template>
  <v-app>
    <v-toolbar
      fixed
      app
      dark
      class="primary"
    >
      <v-toolbar-title>WhatBeer</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <SearchSelect class="my-3"/>        
        <nuxt />
        <v-flex
          text-xs-center
          class="mx-auto"
        >
          <img
            src="~/static/icon-medium.png"
            alt="Beer mug icon"
            class="my-5"
          >
        </v-flex>
      </v-container>
    </v-content>
    <v-footer
      fixed
      app
      class="primary"
    >
      <span class="white--text">
        &copy; 2018 - 
        <a href="https://clarkmitchell.github.io">
          Clark Mitchell
        </a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import SearchSelect from '~/components/SearchSelect.vue';

export default {
  data() {
    return {
      drawer: false,
      items: [
        { icon: 'home', title: 'Home', to: '/' },
        { icon: 'search', title: 'Search', to: '/search' },
      ],
      rightDrawer: false,
      title: 'What Beer',
    };
  },
  components: {
    SearchSelect,
  },
};
</script>
