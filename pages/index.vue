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
      <v-card
        hover
      >
        <v-card-media
          src="beer.jpg"
          alt="Beer mug icon"
          height="200px"
        />
        <v-card-title class="headline">
          Welcome to What Beer
        </v-card-title>
        <v-card-text />
        <v-card-actions>
          <v-btn
            ripple
            color="primary"
            nuxt
            to="/search"
          >
            Search
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
</script>

<style scoped>
img {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>