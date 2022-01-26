<template>
<div id="home" class="">
<!-- <div id="home" class="md:block hidden"> -->
  <div class="flex justify-between items-center text-lg">
    <h3 class="mb-3 font-bold">Daftar Folder Tweet Kamu</h3>
    <router-link to="/add" class="p-2"><i class="fas fa-plus"></i></router-link>
  </div>
  <hr>
  <table class="table-auto mt-4 w-full">
    <thead>
      <tr class="bg-sky-500 text-white">
        <th class="py-2">Nama Folder</th>
        <th class="py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-sky-200">
        <td class="p-3">
          <button class="hover:underline focus:underline font-medium">The Sliding Mr. Bones</button>
        </td>
        <td class="px-3 py-2 text-center">
          <button class="px-2 py-1 my-1 mr-2 rounded-lg bg-sky-500 text-white"><i class="fas fa-pen fa-sm"></i></button>
          <button class="px-2 py-1 my-1 rounded-lg bg-sky-500 text-white"><i class="fas fa-trash fa-sm"></i></button>
        </td>
      </tr>
      <tr class="bg-sky-100">
        <td class="p-3">
          <button class="hover:underline focus:underline font-medium">The Sliding Mr. Bones</button>
        </td>
        <td class="px-3 py-2 text-center">
          <button class="px-2 py-1 my-1 mr-2 rounded-lg bg-sky-500 text-white"><i class="fas fa-pen fa-sm"></i></button>
          <button class="px-2 py-1 my-1 rounded-lg bg-sky-500 text-white"><i class="fas fa-trash fa-sm"></i></button>
        </td>
      </tr>
      <tr class="bg-sky-200">
        <td class="p-3">
          <button class="hover:underline focus:underline font-medium">The Sliding Mr. Bones</button>
        </td>
        <td class="px-3 py-2 text-center">
          <button class="px-2 py-1 my-1 mr-2 rounded-lg bg-sky-500 text-white"><i class="fas fa-pen fa-sm"></i></button>
          <button class="px-2 py-1 my-1 rounded-lg bg-sky-500 text-white"><i class="fas fa-trash fa-sm"></i></button>
        </td>
      </tr>
      <TableRow v-for="(folder, index) in folders.data" :key="folder.id" :folder="folder" :index="index" />
    </tbody>
  </table>
  <div class="my-3 flex justify-center">
    <router-link v-for="index in folders.totalPages" :key="index" :to='"/" + index' @click.native="fetchFolders"
    class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">{{ index }}</router-link>
  </div>
</div>
</template>

<script>
import TableRow from '../components/TableRow.vue'
export default {
  name: "FolderLists",
  components: {
    TableRow
  },
  computed: {
    page() { return this.$route.params.page || 1 },
    folders() { return this.$store.state.folders }
  },
  methods: {
    fetchFolders() {
      this.$store.dispatch("fetchFolders", this.page)
    }
  },
  created() {
    this.fetchFolders()
  },
}
</script>