<template>
<div id="danger" class="h-screen w-full flex flex-col justify-center items-center">
  <h1 class="mb-5 text-4xl font-bold text-slate-900">Maaf!</h1>
  <p class="mb-5">kami tidak dapat melanjutkan proses pendaftaran Anda</p>
  <router-link to="/register" class="py-2 px-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-900 focus:bg-slate-900">Kembali ke Daftar</router-link>
</div>
</template>

<script>
export default {
  name: "Danger",
}
</script>