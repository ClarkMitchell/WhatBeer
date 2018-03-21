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
          {{ params }}
        </v-card-title>
        <v-card-text />
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
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
};
</script>