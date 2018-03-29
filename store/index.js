import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            beers: [],
            currentBeer: {}
        },
        mutations: {
            setBeers(state, beers) {
                state.beers = [...(new Set(state.beers.concat(beers)))];
            },
            setCurrentBeer(state, beer) {
                state.currentBeer = beer;
            }
        },
        actions: {
            async getBeersFromApi({ commit }, beer) {
                let data = await axios({
                    url: process.env.BASE_URL,
                    method: 'post',
                    headers: {
                        'x-api-key': process.env.API_KEY
                    },
                    data: {
                      query: `
                        query {
                            beerSearch(query: "${beer}") {
                                items {
                                    id,
                                    name,
                                    description,
                                }
                            }
                        }
                        `
                    }
                });
                commit('setBeers', data.data.data.beerSearch.items);
            },
            async getBeer({ commit }, id) {
                let data = await axios({
                    url: process.env.BASE_URL,
                    method: 'post',
                    headers: {
                        'x-api-key': process.env.API_KEY
                    },
                    data: {
                        query:`
                            query {
                                beer(id: ${id}) {
                                    name,
                                    id,
                                    description,
                                    abv,
                                    ibu,
                                    overallScore,
                                    imageUrl,
                                    brewer {
                                        name
                                    }
                                }
                            }
                        `
                    }
                });
                commit('setCurrentBeer', data.data.data.beer);
            }
        },
        getters: {
            getCurrentBeer: state => {
                return state.currentBeer;
            },
            getBeers: state => {
                return state.beers;
            },
        }
    })
}

export default createStore;