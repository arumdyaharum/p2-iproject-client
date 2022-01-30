<template>
<div id="folder_add_edit">
  <div class="flex justify-between items-center">
    <h3 class="text-lg mb-3 font-bold">{{ folder.name }}</h3>
    <router-link :to='"/folders/view/" + folder.id + "/1"' class="p-2 font-medium hover:underline focus:underline text-right">Kembali ke Timeline</router-link>
  </div>
  <hr>
  <form @submit.prevent="doFormTweet" class="my-3">
    <div class="flex flex-col mb-3">
      <label for="deskripsi" class="mb-2 font-medium">Deskripsi</label>
      <input type="text" v-model="data.description" name="deskripsi" id="deskripsi" placeholder="Deskripsi" class="py-2 px-3 bg-sky-100 placeholder:text-sky-500" />
    </div>
    <div class="flex flex-col mb-3">
      <label for="tema" class="mb-2 font-medium">Tema</label>
      <div class="flex items-center">
        <input type="radio" v-model="data.theme" name="tema" id="tema" value="light" checked /> &nbsp; Light &nbsp; &nbsp; &nbsp; &nbsp;
        <input type="radio" v-model="data.theme" name="tema" id="tema" value="dark" /> &nbsp; Dark
      </div>
    </div>
    <div class="flex flex-col mb-3">
      <label for="link" class="mb-2 font-medium">Link Tweet</label>
      <input type="text" v-model="data.tweetId" name="link" id="link" placeholder="Link Tweet" class="py-2 px-3 bg-sky-100 placeholder:text-sky-500" />
    </div>
    <button class="w-fit px-3 py-2 my-1 rounded-lg bg-sky-500 text-white">{{ page }}</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "FormTweet",
  data() {
    return {
      data: {
        description: '',
        theme: 'light',
        tweetId: ''
      },
      tweet_id: 0
    }
  },
  computed: {
    page() { return this.$route.path.split("/")[2] === "add" ? "Tambah" : "Ubah" },
    folder() { return this.$store.state.folder },
    baseURL() { return this.$store.state.baseURL },
  },
  methods: {
    doFormTweet() {
      if(this.page === "Tambah") {
        this.$store.dispatch("doAddTweet", {id: this.folder.id, data: this.data})
      } else {
        this.$store.dispatch("doEditTweet", {id: this.folder.id, tweetId: +this.tweet_id, data: this.data})
      }
    },
    fetchTweet(id) {
      axios({
        method: "get",
        url: `${this.baseURL}/tweets/one/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        this.data.description = res.data.description
        this.data.theme = res.data.theme
        this.data.tweetId = res.data.tweetId
        this.tweet_id = res.data.id
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    }
  },
  created() {
    this.$store.dispatch("fetchFolder", this.$route.params.id)
    if(this.page === "Ubah") {
      this.fetchTweet(this.$route.params.tweetId)
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