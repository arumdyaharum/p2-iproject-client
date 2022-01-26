<template>
<div id="home_add_edit">
  <div class="flex justify-between items-center">
    <h3 class="text-lg mb-3 font-bold">Tambah/Edit Folder</h3>
    <button class="p-2 hover:underline focus:underline font-medium text-right">Kembali ke Daftar Folder</button>
  </div>
  <hr>
  <form class="my-3">
    <div class="flex flex-col mb-3">
      <label for="nama_folder" class="mb-2 font-medium">Nama Folder</label>
      <input type="text" name="nama_folder" id="nama_folder" placeholder="Nama Folder" class="py-2 px-3 bg-sky-100 placeholder:text-sky-500" />
    </div>
    <button class="w-fit px-3 py-2 my-1 rounded-lg bg-sky-500 text-white">Add/Edit</button>
  </form>
</div>
</template>

<script>
export default {
  name: "FormFolder",
}
</script>