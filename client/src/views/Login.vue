<template>
<div id="login" class="h-screen w-full flex flex-col justify-center items-center">
  <h1 class="mb-10 text-4xl font-bold text-slate-900">Masuk</h1>
  <form @submit.prevent="doLogin" class="lg:w-1/4 md:w-1/3 w-1/2 mb-5">
    <input type="email" v-model="user.email" name="email" placeholder="Email Address" class="w-full px-3 py-2 rounded-xl drop-shadow-md">
    <input type="password" v-model="user.password" name="password" placeholder="Password" class="w-full px-3 py-2 my-3 rounded-xl drop-shadow-md">
    <button class="w-full py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-900 focus:bg-slate-900">Masuk</button>
  </form>
  <div class="flex items-center mb-3">
    <p class="mr-2">Belum memiliki akun?</p>
    <router-link to="/register" class="px-2 py-1 rounded-xl bg-sky-700 text-white text-sm font-medium hover:bg-sky-900 focus:bg-slate-900">Daftar disini</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    doLogin() {
      this.$store.dispatch('doLogin', this.user)
    }
  },
  created() {
    this.$store.commit("CHANGE_PASSWORD", '')
    this.$store.commit("CHANGE_USER", {})
  }
}
</script>