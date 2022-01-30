<template>
<div class="my-3">
  <p class="font-medium">{{ index + 1 }}. {{ tweet.description }}</p>
  <p><span class="font-medium">Tema :&nbsp;</span>{{ tweet.theme }}</p>
  <p class="break-all mb-1"><span class="font-medium">Tweet ID :&nbsp;</span>{{ tweet.tweetId }}</p>
  <router-link :to='"/folders/edit/"+ folderId + "/" + tweet.id' class="px-2 py-1 my-1 mr-2 rounded-lg bg-sky-500 text-white"><i class="fas fa-pen fa-sm"></i></router-link>
  <button @click="doDeleteTweet(tweet.id)" class="px-2 py-1 my-1 rounded-lg bg-sky-500 text-white"><i class="fas fa-trash fa-sm"></i></button>
</div>
</template>

<script>
export default {
  name: "TweetList",
  props: ["tweet", "index", "folderId"],
  methods: {
    doDeleteTweet(id) {
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
          this.$store.dispatch("doDeleteTweet", {id: +this.folderId, tweetId: id})
        }
      })
    }
  }
}
</script>