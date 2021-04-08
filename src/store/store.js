import { createStore } from "vuex";
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notification.js'
import * as categories from '@/store/modules/categories.js'

export default createStore({
  modules:{
    user,
    event,
    notification,
    categories
  },
  state: {
  },
})
