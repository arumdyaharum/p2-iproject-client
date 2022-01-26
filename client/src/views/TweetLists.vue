<template>
<div id="folder_detail">
  <div class="flex justify-between items-center text-lg">
    <h3 class="mb-3 font-bold">Nama Folders</h3>
    <div>
      <button class="p-2"><i class="fas fa-plus"></i></button>
      <button class="p-2"><i class="far fa-eye"></i></button>
    </div>
  </div>
  <hr>
  <div class="my-3">
      <p class="font-medium">1. Deskripsi</p>
      <p><span class="font-medium">Tema :&nbsp;</span>Dark</p>
      <p class="break-all"><span class="font-medium">Link :&nbsp;</span>https://twitter.com/Interior/status/463440424141459456</p>
      <button class="px-2 py-1 mt-1 rounded-lg bg-sky-500 text-white">Edit</button>
  </div>
  <div class="my-3">
    <p class="font-medium">2. Deskripsi</p>
    <p><span class="font-medium">Tema :&nbsp;</span>Dark</p>
    <p class="break-all"><span class="font-medium">Link :&nbsp;</span>https://twitter.com/Interior/status/463440424141459456</p>
    <button class="px-2 py-1 mt-1 rounded-lg bg-sky-500 text-white">Edit</button>
  </div>
  <div class="my-3">
    <p class="font-medium">3. Deskripsi</p>
    <p><span class="font-medium">Tema :&nbsp;</span>Dark</p>
    <p class="break-all"><span class="font-medium">Link :&nbsp;</span>https://twitter.com/Interior/status/463440424141459456</p>
    <button class="px-2 py-1 mt-1 rounded-lg bg-sky-500 text-white">Edit</button>
  </div>
  <TweetList />
  <div class="my-3 flex justify-center">
    <button class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">1</button>
    <button class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">2</button>
    <button class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">3</button>
  </div>
</div>
</template>

<script>
import TweetList from '../components/TweetList.vue'
export default {
  name: "TweetLists",
  components: {
    TweetList
  }
}
</script>