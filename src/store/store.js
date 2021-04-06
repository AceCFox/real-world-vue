import { createStore } from "vuex";
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'


export default createStore({
  modules:{
    user,
    event
  },
  state: {
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
  },
})
