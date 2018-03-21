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
      beers: ['1', '2', '3'],
    };
  },
  watch: {
    search(val) {
      val && this.querySelections(val);
    },
    select: function(beer) {
      this.$router.push('/beer/' + beer);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.beers.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },
};
</script>