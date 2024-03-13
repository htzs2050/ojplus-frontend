import { createStore } from 'vuex'
import theme from './modules/theme'
import auth from './modules/auth'
const store = createStore({
  modules: {
    auth,
    theme,
  },
})

export default store;