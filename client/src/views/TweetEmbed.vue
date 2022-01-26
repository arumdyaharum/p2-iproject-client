<template>
<div id="folder">
  <div class="flex justify-between items-center text-lg">
    <h3 class="mb-3 font-bold">{{ folder.name }}</h3>
    <div>
      <router-link :to='"/folders/add/" + $route.params.id' class="p-2"><i class="fas fa-plus"></i></router-link>
      <router-link :to='"/folders/list/" + $route.params.id + "/1"' class="p-2"><i class="far fa-eye-slash"></i></router-link>
    </div>
  </div>
  <hr>
  <div v-for="(tweet, index) in tweets.data" :key="tweet.id" class="my-3">
    <p class="font-medium">{{ index + 1 + ($route.params.page * size) - size }}. {{ tweet.description }}</p>
    {{ tweet.tweetId }}
  </div>
  <div class="my-3 flex justify-center">
    <router-link v-for="index in tweets.totalPages" :key="index" :to='"/folders/view/" + folder.id + "/" + index' @click.native="fetchTweets"
    class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">{{ index }}</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "TweetEmbed",
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
  }
}
</script>