<template>
<tr :class='{"bg-sky-200": this.index % 2 === 0, "bg-sky-100": this.index % 2 !== 0}'>
  <td class="p-3">
    <router-link :to='"/folders/view/" + folder.id + "/1"' class="hover:underline focus:underline font-medium">{{ folder.name }}</router-link>
  </td>
  <td class="px-3 py-2 text-center">
    <router-link :to='"/edit/" + folder.id' class="px-2 py-1 my-1 mr-2 rounded-lg bg-sky-500 text-white"><i class="fas fa-pen fa-sm"></i></router-link>
    <button @click="doDeleteFolder(folder.id)" class="px-2 py-1 my-1 rounded-lg bg-sky-500 text-white"><i class="fas fa-trash fa-sm"></i></button>
  </td>
</tr>
</template>

<script>
export default {
  name: "TableRow",
  props: ["folder", "index"],
  methods: {
    doDeleteFolder(id) {
      this.$swal({
        title: 'Kamu yakin?',
        text: "Kami tidak bisa mengembalikan folder ini!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iya, hapus saja!',
        cancelButtonText: 'Tidak jadi!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("doDeleteFolder", id)
        }
      })
    }
  }
}
</script>