<template>
<div>
<div id="login" class="h-screen w-full absolute flex flex-col justify-center items-center bg-sky-50">
  <h1 class="mb-10 text-4xl font-bold text-slate-900">Daftar</h1>
  <form @submit.prevent="doRegister" class="lg:w-1/4 md:w-1/3 w-1/2 mb-5">
    <input type="text" v-model="user.username" name="username" placeholder="Username" required class="w-full px-3 py-2 mb-3 rounded-xl drop-shadow-md">
    <input type="email" v-model="user.email" name="email" placeholder="Email Address" required class="w-full px-3 py-2 rounded-xl drop-shadow-md">
    <input type="password" v-model="user.password" name="password" placeholder="Password" required class="w-full px-3 py-2 my-3 rounded-xl drop-shadow-md">
    <button class="w-full py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-900 focus:bg-slate-900">Daftar</button>
  </form>
  <div class="flex items-center mb-3">
    <p class="mr-2">Sudah memiliki akun?</p>
    <router-link to="/login" class="px-2 py-1 rounded-xl bg-sky-700 text-white text-sm font-medium hover:bg-sky-900 focus:bg-slate-900">Masuk disini</router-link>
  </div>
</div>
<div v-show="loading" class="h-screen w-full absolute flex flex-col justify-center items-center">
    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="">
</div>
</div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    doRegister() {
        this.loading = true
        this.$store.dispatch("checkEmail", this.user)
    }
  }
}
</script>