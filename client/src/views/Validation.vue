<template>
<div id="login" class="h-screen w-full flex flex-col justify-center items-center px-5">
  <h1 class="mb-10 text-4xl font-bold text-slate-900">Validasi Email</h1>
  <p class="mb-5 text-center">Masukkan Kode OTP yang tercantum pada email <span class="font-bold">{{ user.email }}</span></p>
  <form @submit.prevent="doValidate" class="lg:w-1/4 md:w-1/3 w-2/3 mb-5">
    <input type="text" v-model="password" name="otp-code" placeholder="Masukkan Kode OTP" class="w-full px-3 py-2 mb-3 rounded-xl drop-shadow-md">
    <button class="w-full py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-900 focus:bg-slate-900">Masuk</button>
  </form>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      password: ''
    }
  },
  computed: {
    OTP() { return this.$store.state.password },
    user() { return this.$store.state.user }
  },
  methods: {
    doValidate() {
      if(this.password === this.OTP) {
        this.$store.dispatch("doRegister", this.user)
      } else {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Kode OTP Salah'
        })
        this.$router.push('/danger').catch(() => { console.log("Danger lagi") })
      }
    }
  },
  created() {
    this.$store.dispatch("sendEmail")
  },
}
</script>