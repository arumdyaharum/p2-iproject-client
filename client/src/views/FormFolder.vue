<template>
<div id="home_add_edit">
  <div class="flex justify-between items-center">
    <h3 class="text-lg mb-3 font-bold">{{ page }} Folder</h3>
    <router-link to="/" class="p-2 hover:underline focus:underline font-medium text-right">Kembali ke Daftar Folder</router-link>
  </div>
  <hr>
  <form @submit.prevent="doFolder" class="my-3">
    <div class="flex flex-col mb-3">
      <label for="nama_folder" class="mb-2 font-medium">Nama Folder</label>
      <input type="text" v-model="name" name="nama_folder" id="nama_folder" placeholder="Nama Folder" class="py-2 px-3 bg-sky-100 placeholder:text-sky-500" />
    </div>
    <button class="w-fit px-3 py-2 my-1 rounded-lg bg-sky-500 text-white">{{ page }}</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "FormFolder",
  data(){
    return {
      name:  ''
    }
  },
  computed: {
    page() { return this.$route.path === '/add' ? "Tambah" : "Ubah" },
    baseURL() { return this.$store.state.baseURL },
  },
  methods: {
    doFolder() {
      if(this.page === 'Tambah') {
        this.$store.dispatch("doAddFolder", this.name)
      } else {
        this.$store.dispatch("doEditFolder", {name: this.name, id: this.$route.params.id})
      }
      this.name = ''
    },
    fetchFolder(id) {
      axios({
        method: "get",
        url: `${this.baseURL}/folders/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        this.name = res.data.name
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    }
  },
  created() {
    if(this.$route.params.id) {
      this.fetchFolder(this.$route.params.id)
    }
  },
  beforeRouteEnter(_, _1, next) {
    next(vm => {
      if(!vm.$store.state.folders.data) {
        vm.$router.push('/').catch(() => { console.log("Home lagi") })
      }
    })
  }
}
</script>