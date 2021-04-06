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
    },
    SET_EVENTS(state, events){
      state.events = events;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event) .then(() => {
        commit ('ADD_EVENT', event) 
      })
    },
    fetchEvents({commit}, { perPage, page }) {
      EventService.getEvents(perPage, page)
      .then((response) => {
        commit ('SET_EVENTS', response.data);
        })
      .catch(error => {
        alert(`oh no server request failed! Check the console for details!`)
        console.log('error getting events: ', error)
      })
    } 
  },
  getters: {
    catLength: state => {
      return state.categories.length
    }
  },
});
