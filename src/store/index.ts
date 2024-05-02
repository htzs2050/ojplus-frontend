import { createStore } from 'vuex'
import theme from './modules/theme'
import auth from './modules/auth'
import post from './modules/post'
const store = createStore({
  modules: {

    auth,
    theme,
    post,
  },
})

export default store;