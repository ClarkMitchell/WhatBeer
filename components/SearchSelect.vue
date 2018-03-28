<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-select
          label="Search Beers"
          autocomplete
          :loading="loading"
          cache-items
          chips
          :items="items"
          :rules="[() => select.length > 0 || 'You must choose at least one']"
          :search-input.sync="search"
          v-model="select"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: [],
      beers: [],
    };
  },
  watch: {
    search(beer) {
      beer && this.querySelections(beer);
    },
    select: function(beerName) {
      const beer = this.beers.find(beer => beer.name == beerName);
      this.$router.push('/beer/' + beer.id);
    },
  },
  methods: {
    querySelections(beer) {
      this.loading = true;
      this.$store.dispatch('getBeersFromApi', beer);
      this.beers = this.$store.getters.getBeers;
      this.items = this.beers.map(beer => beer.name);
      this.loading = false;
    },
  },
};
</script>