import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // baseURL: 'https://tweetfiling.herokuapp.com',
    baseURL: 'http://localhost:3000',
    user: {},
    password: '',
    size: 10,
    folders: {},
    folder: {},
    tweets: {},
    tweet: {}
  },
  mutations: {
    CHANGE_USER(state, payload) {
      state.user = payload
    },
    CHANGE_PASSWORD(state, payload) {
      state.password = payload
    },
    CHANGE_FOLDERS(state, payload) {
      state.folders = payload
    },
    CHANGE_FOLDER(state, payload) {
      state.folder = payload
    },
    CHANGE_TWEETS(state, payload) {
      state.tweets = payload
    },
    CHANGE_TWEET(state, payload) {
      state.tweet = payload
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
    fetchUserById({state, commit}, data) {
      commit("CHANGE_USER", data)
      axios({
        method: 'get',
        url: `${state.baseURL}/users/${state.user.email}`
      })
      .then(res => {
        if(res.data) {
          router.push('/danger').catch(() => { console.log("Danger lagi") })
          this._vm.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        } else {
          router.push('/validate').catch(() => { console.log("Validasi lagi") })
        }
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    sendEmail({state, commit}) {
      axios({
        method: 'post',
        url: `${state.baseURL}/otp`,
        data: { email: state.user.email }
      })
      .then(res => {
        commit('CHANGE_PASSWORD', res.data.password)
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
    },
    fetchTweets({state, commit}, data) {
      axios({
        method: "get",
        url: `${state.baseURL}/tweets/${data.id}?size=${state.size}&page=${data.page}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        commit("CHANGE_TWEETS", res.data)
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    fetchTweet({state, commit}, id) {
      axios({
        method: "get",
        url: `${state.baseURL}/tweets/one/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        commit("CHANGE_TWEET", res.data)
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    doAddTweet({state}, data) {
      axios({
        method: 'post',
        url: `${state.baseURL}/tweets/${data.id}`,
        data: data.data,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        router.push(`/folders/view/${data.id}/1`).catch(() => { console.log("Timeline lagi") })
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    doEditTweet({state}, data) {
      axios({
        method: 'put',
        url: `${state.baseURL}/tweets/${data.tweetId}`,
        data: data.data,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        router.push(`/folders/view/${data.id}/1`).catch(() => { console.log("Timeline lagi") })
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    },
    doDeleteTweet({state, dispatch}, data) {
      axios({
        method: 'delete',
        url: `${state.baseURL}/tweets/${data.tweetId}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        dispatch("fetchTweets", { page: 1, id: data.id })
        router.push(`/folders/view/${data.id}/1`).catch(() => { console.log("Timeline lagi") })
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    }
  },
  modules: {
  }
})
