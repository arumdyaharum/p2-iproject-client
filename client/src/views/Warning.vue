<template>
<div id="warning" class="h-screen w-full flex flex-col justify-center items-center">
  <h1 class="mb-5 text-4xl font-bold text-slate-900">Email Anda Mencurigakan!</h1>
  <p class="mb-5">Apakah Anda tetap ingin melanjutkan pendaftaran ini?</p>
  <div class="flex justify-center">
    <router-link to="/validate" class="py-2 px-3 mr-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-900 focus:bg-red-900">Lanjutkan</router-link>
    <router-link to="/register" class="py-2 px-3 ml-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-900 focus:bg-slate-900">Kembali</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "Warning",
}
</script>