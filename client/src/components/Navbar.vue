<template>
<header class="flex justify-between pt-10 mx-10 mb-10">
  <router-link to="/" class="text-2xl font-bold">Tweet Filing</router-link>
  <div class="w-fit flex justify-between items-center">
    <router-link to="/" id="navbar-home" class="px-4 py-2 font-bold hover:underline focus:underline">Beranda</router-link>
    <button @click="doLogout" id="navbar-logout" class="px-4 py-2 font-bold hover:underline focus:underline">Logout</button>
  </div>
</header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    doLogout() {
      localStorage.removeItem("access_token")
      this.$swal({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Sampai jumpa lagi!'
      })
      this.$router.push('/login').catch(() => { console.log("Login lagi") })
    }
  }
}
</script>