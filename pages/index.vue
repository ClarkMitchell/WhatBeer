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
        <v-card-title class="headline">Welcome to What Beer</v-card-title>
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
</script>
