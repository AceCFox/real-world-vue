import { createStore } from "vuex";
import EventService from '@/services/EventService.js';

export default createStore({
  state: {
    user: {id: 'abc123', name: 'Adam Jahr' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: []
  },
  mutations: {
    ADD_EVENT(state,event){
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
      commit ('ADD_EVENT', event)
      console.log('in createEvent action')
    } 
  },
  getters: {
    catLength: state => {
      return state.categories.length
    }
  },
});
