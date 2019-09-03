import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Order from './order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  modules:{
    user:User,
    order:Order
  },
  mutations: {

  },
  actions: {

  }
})
