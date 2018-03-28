<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          {{ beer.name }}
        </v-card-title>
        <v-card-text>
          {{ beer.description }}               
        </v-card-text>
        <img
          :src="beer.imageUrl"
          alt="Beer mug icon"
          class="mb-5"
        >
        <v-card-actions>
          <v-spacer />          
          <v-btn
            color="primary"
            nuxt
            to="/search"
          >
            Search
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    beer: function() {
      return this.$store.getters.getCurrentBeer;
    },
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  created() {
    this.$store.dispatch('getBeer', this.$route.params.id);
    this.beer = this.$store.getters.getCurrentBeer;
  },
};
</script>