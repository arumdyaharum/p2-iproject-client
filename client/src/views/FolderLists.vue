<template>
<div id="home">
  <div class="flex justify-between items-center text-lg">
    <h3 class="mb-3 font-bold">Daftar Folder Tweet Kamu</h3>
    <router-link to="/add" class="p-2"><i class="fas fa-plus"></i></router-link>
  </div>
  <hr>
  <table class="table-auto mt-4 w-full">
    <thead>
      <tr class="bg-sky-500 text-white">
        <th class="py-2">Nama Folder</th>
        <th class="py-2">Jumlah Tweet</th>
        <th class="py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-sky-200">
        <td class="p-3">
          <button class="hover:underline focus:underline font-medium">The Sliding Mr. Bones</button>
        </td>
        <td class="p-3 text-center">1961</td>
        <td class="px-3 py-2 text-center">
          <button class="px-2 py-1 my-1 rounded-lg bg-sky-500 text-white"><i class="fas fa-pen fa-sm"></i></button>
          <button class="px-2 py-1 my-1 rounded-lg bg-sky-500 text-white"><i class="fas fa-trash fa-sm"></i></button>
        </td>
      </tr>
      <tr class="bg-sky-100">
        <td class="p-3">
          <button class="hover:underline focus:underline font-medium">The Sliding Mr. Bones</button>
        </td>
        <td class="p-3 text-center">1961</td>
        <td class="px-3 py-2 text-center">
          <button class="px-2 py-1 my-1  rounded-lg bg-sky-500 text-white"><i class="fas fa-pen fa-sm"></i></button>
          <button class="px-2 py-1 my-1  rounded-lg bg-sky-500 text-white"><i class="fas fa-trash fa-sm"></i></button>
        </td>
      </tr>
      <tr class="bg-sky-200">
        <td class="p-3">
          <button class="hover:underline focus:underline font-medium">The Sliding Mr. Bones</button>
        </td>
        <td class="p-3 text-center">1961</td>
        <td class="px-3 py-2 text-center">
          <button class="px-2 py-1 my-1 rounded-lg bg-sky-500 text-white"><i class="fas fa-pen fa-sm"></i></button>
          <button class="px-2 py-1 my-1  rounded-lg bg-sky-500 text-white"><i class="fas fa-trash fa-sm"></i></button>
        </td>
      </tr>
      <TableRow />
    </tbody>
  </table>
  <div class="my-3 flex justify-center">
    <button class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">1</button>
    <button class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">2</button>
    <button class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">3</button>
  </div>
</div>
</template>

<script>
import TableRow from '../components/TableRow.vue'
export default {
  name: "FolderLists",
  components: {
    TableRow
  }
}
</script>