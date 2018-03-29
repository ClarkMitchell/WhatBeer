<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
    >
      <v-card
        hover
        raised
      >
        <v-container
          fluid
          grid-list-xl
        >
          <v-layout row>
            <v-flex xs9>
              <div>
                <v-card-title primary-title>
                  <div class="headline">
                    {{ beer.name }}
                  </div>
                </v-card-title>
                <div class="lineItem">
                  {{ this.beer.brewer.name }}
                </div>
                <div class="lineItem">
                  <p>
                    Overall Score: 
                  </p>
                  <h2
                    class="score"
                    :style="hue"
                  >
                    {{ score }}
                  </h2>
                </div>
                <div class="lineItem">
                  <p>
                    ABV: 
                  </p>
                  <h2>
                    {{ abv }}%
                  </h2>
                </div>
                <div class="lineItem">
                  <p>
                    IBU: 
                  </p>
                  <h2>
                    {{ beer.ibu }}
                  </h2>
                </div>                
              </div>
            </v-flex>
            <v-flex xs5>
              <v-card-media
                :src="beer.imageUrl"
                height="125px"
                contain
              />
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn
            icon
            hover
            @click.native="show = !show"
          >
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{ beer.description }}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    beer: function() {
      return this.$store.getters.getCurrentBeer;
    },
    score: function() {
      return Math.round(this.beer.overallScore);
    },
    abv: function() {
      return Math.floor(this.beer.abv);
    },
    hue: function() {
      const hue = Math.floor(this.score * 0.84);
      return `color: hsl(${hue}, 100%, 50%);`;
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

<style scoped>
.overallScore {
  display: inline;
}

.lineItem p,
h2 {
  display: inline-block;
  margin: 5px;
}
</style>