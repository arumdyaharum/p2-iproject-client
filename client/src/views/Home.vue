<template>
<main class="container min-h-screen mx-auto text-sky-700">
  <Navbar />
  <section class="md:flex box-border h-fit mx-10 p-7 rounded-lg bg-white">
    <div class="md:w-1/2 w-full md:pr-5 mb-5">
      <h1 class="md:text-4xl text-3xl mb-10 font-bold">Selamat Datang, {{ user.username }}!</h1>
      <router-view/>
    </div>
    <div class="md:w-1/2 w-full md:pl-5 md:mt-0 mt-5 mb-5">
      <router-view name="second"/>
    </div>
  </section>
</main>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: "Home",
  components: {
    Navbar
  },
  computed: {
    user() { return this.$store.state.user }
  },
  created() {
    const access_token = localStorage.getItem("access_token")
    if(access_token) {
      this.$store.dispatch("fetchUser")
    }
  }
}
</script>