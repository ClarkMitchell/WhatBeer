<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="~/static/icon-medium.png"
        alt="Beer mug icon"
        class="mb-5"
      >
      <SearchSelect />
    </v-flex>
  </v-layout>
</template>

<script>
import SearchSelect from '~/components/SearchSelect.vue';

export default {
  components: {
    SearchSelect,
  },
};
</script>