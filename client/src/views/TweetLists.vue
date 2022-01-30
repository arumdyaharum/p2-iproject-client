<template>
<div id="folder_detail">
  <div class="flex justify-between items-center text-lg">
    <h3 class="mb-3 font-bold">{{ folder.name }}</h3>
    <div>
      <router-link :to='"/folders/add/" + $route.params.id' class="p-2"><i class="fas fa-plus"></i></router-link>
      <router-link :to='"/folders/view/" + $route.params.id + "/1"' class="p-2"><i class="far fa-eye"></i></router-link>
    </div>
  </div>
  <hr>
  <TweetList v-for="(tweet, index) in tweets.data" :key="tweet.id" :tweet="tweet" :index="index + ($route.params.page * size) - size" :folderId="$route.params.id" />
  <div class="my-3 flex justify-center">
    <router-link v-for="index in tweets.totalPages" :key="index" :to='"/folders/list/" + folder.id + "/" + index' @click.native="fetchTweets"
    class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">{{ index }}</router-link>
  </div>
</div>
</template>

<script>
import TweetList from '../components/TweetList.vue'
export default {
  name: "TweetLists",
  components: {
    TweetList
  },
  computed: {
    tweets() { return this.$store.state.tweets },
    folder() { return this.$store.state.folder },
    size() { return this.$store.state.size }
  },
  methods: {
    fetchTweets() {
      this.$store.dispatch("fetchTweets", {
        id: this.$route.params.id,
        page: this.$route.params.page
      })
    }
  },
  created() {
    this.$store.dispatch('fetchFolder', this.$route.params.id)
    this.fetchTweets()
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