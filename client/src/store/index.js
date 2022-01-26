import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL: 'http://localhost:3000',
    user: {}
  },
  mutations: {
    CHANGE_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    doRegister({state}, data) {
      axios({
        method: "post",
        url: `${state.baseURL}/register`,
        data
      })
      .then(() => {
        router.push('/login')
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    doLogin({state, dispatch}, data) {
      axios({
        method: "post",
        url: `${state.baseURL}/login`,
        data
      })
      .then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        dispatch("fetchUser")
        router.push('/')
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    fetchUser({state, commit}) {
      axios({
        method: 'get',
        url: `${state.baseURL}/users`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        commit("CHANGE_USER", res.data)
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    }
  },
  modules: {
  }
})
