import Vuex from 'vuex';
import axios from 'axios';

const endpoint = 'https://api.ratebeer.com/v1/api/graphql';
const key = 'OupyrrhUWY1od5kLX6MKRp64LNLq5Dq6TKJHXkRa';

const createStore = () => {
    return new Vuex.Store({
        state: {
            beers: [],
            currentBeer: {}
        },
        mutations: {
            setBeers(state, beers) {
                state.beers = beers;
            },
            setCurrentBeer(beer) {
                state.currentBeer = beer;
            }
        },
        actions: {
            async getBeersFromApi({ commit }, beer) {
                let data = await axios({
                    url: endpoint,
                    method: 'post',
                    headers: {
                        'x-api-key': key
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
            }
        },
        getters: {
            getCurrentBeer: state => {
                return state.currentBeer;
            },
            getBeers: state => {
                return state.beers;
            }
        }
    })
}

export default createStore;