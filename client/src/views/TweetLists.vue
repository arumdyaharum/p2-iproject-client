<template>
<div id="folder_detail">
  <div class="flex justify-between items-center text-lg">
    <h3 class="mb-3 font-bold">Nama Folders</h3>
    <div>
      <router-link to="/folders/add/1" class="p-2"><i class="fas fa-plus"></i></router-link>
      <router-link to="/folders/view/1/1" class="p-2"><i class="far fa-eye"></i></router-link>
    </div>
  </div>
  <hr>
  <div class="my-3">
      <p class="font-medium">1. Deskripsi</p>
      <p><span class="font-medium">Tema : &nbsp;</span>Dark</p>
      <p class="break-all"><span class="font-medium">Link : &nbsp;</span>https://twitter.com/Interior/status/463440424141459456</p>
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
    <router-link to="/folders/list/1/1" class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">1</router-link>
    <router-link to="/folders/list/1/2" class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">2</router-link>
    <router-link to="/folders/list/1/3" class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">3</router-link>
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