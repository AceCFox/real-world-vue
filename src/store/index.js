import { createStore } from "vuex";

export default createStore({
  state: {
    user: {id: 'abc123', name: 'Adam Jahr' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    }
  },
});
