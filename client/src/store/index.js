import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL: 'http://localhost:3000',
    user: {},
    size: 2,
    folders: {},
    folder: {}
  },
  mutations: {
    CHANGE_USER(state, payload) {
      state.user = payload
    },
    CHANGE_FOLDERS(state, payload) {
      state.folders = payload
    },
    CHANGE_FOLDER(state, payload) {
      state.folder = payload
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
        router.push('/login').catch(() => { console.log("Login lagi") })
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
        router.push('/').catch(() => { console.log("Home lagi") })
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
    },
    fetchFolders({state, commit}, page) {
      axios({
        method: "get",
        url: `${state.baseURL}/folders?size=${state.size}&page=${page}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        commit("CHANGE_FOLDERS", res.data)
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    fetchFolder ({state, commit}, id) {
      axios({
        method: "get",
        url: `${state.baseURL}/folders/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        commit("CHANGE_FOLDER", res.data)
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    doAddFolder({state}, name) {
      axios({
        method: "post",
        url: `${state.baseURL}/folders`,
        data: { name },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        router.push('/').catch(() => { console.log("Home lagi") })
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    doEditFolder({state}, data) {
      axios({
        method: "put",
        url: `${state.baseURL}/folders/${data.id}`,
        data: { name: data.name },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        router.push('/').catch(() => { console.log("Home lagi") })
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    doDeleteFolder({state, dispatch}, id) {
      axios({
        method: "delete",
        url: `${state.baseURL}/folders/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        dispatch("fetchFolders")
        router.push('/').catch(() => { console.log("Home lagi") })
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    }
  },
  modules: {
  }
})
