<template>
<div id="folder_add_edit">
  <div class="flex justify-between items-center">
    <h3 class="text-lg mb-3 font-bold">Nama Folders</h3>
    <router-link to="/folders/view/1/1" class="p-2 font-medium hover:underline focus:underline text-right">Kembali ke Timeline</router-link>
  </div>
  <hr>
  <form class="my-3">
    <div class="flex flex-col mb-3">
      <label for="deskripsi" class="mb-2 font-medium">Deskripsi</label>
      <input type="text" name="deskripsi" id="deskripsi" placeholder="Deskripsi" class="py-2 px-3 bg-sky-100 placeholder:text-sky-500" />
    </div>
    <div class="flex flex-col mb-3">
      <label for="tema" class="mb-2 font-medium">Tema</label>
      <div class="flex items-center">
        <input type="radio" name="tema" id="tema" value="light" checked /> &nbsp; Light &nbsp; &nbsp; &nbsp; &nbsp;
        <input type="radio" name="tema" id="tema" value="dark" /> &nbsp; Dark
      </div>
    </div>
    <div class="flex flex-col mb-3">
      <label for="link" class="mb-2 font-medium">Link Tweet</label>
      <input type="text" name="link" id="link" placeholder="Link Tweet" class="py-2 px-3 bg-sky-100 placeholder:text-sky-500" />
    </div>
    <button class="w-fit px-3 py-2 my-1 rounded-lg bg-sky-500 text-white">Add/Edit</button>
  </form>
</div>
</template>

<script>
export default {
  name: "FormTweet",
}
</script>