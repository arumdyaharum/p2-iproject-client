<template>
<tr class="bg-sky-200">
  <td class="p-3">
    <router-link to="/folders/view/1/1" class="hover:underline focus:underline font-medium">Table Row</router-link>
  </td>
  <td class="p-3 text-center">1961</td>
  <td class="px-3 py-2 text-center">
    <router-link to="/edit/1" class="px-2 py-1 my-1 mr-2 rounded-lg bg-sky-500 text-white"><i class="fas fa-pen fa-sm"></i></router-link>
    <button class="px-2 py-1 my-1 rounded-lg bg-sky-500 text-white"><i class="fas fa-trash fa-sm"></i></button>
  </td>
</tr>
</template>

<script>
export default {
  name: "TableRow",
}
</script>