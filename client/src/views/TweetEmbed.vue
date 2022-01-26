<template>
<div id="folder">
  <div class="flex justify-between items-center text-lg">
    <h3 class="mb-3 font-bold">Nama Folders</h3>
    <div>
      <router-link to="/folders/add/1" class="p-2"><i class="fas fa-plus"></i></router-link>
      <router-link to="/folders/list/1/1" class="p-2"><i class="far fa-eye-slash"></i></router-link>
    </div>
  </div>
  <hr>
  <div class="my-3">
    <p class="font-medium">1. Deskripsi</p>
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
  <div class="my-3">
    <p class="font-medium">1. Deskripsi</p>
    <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
  <div class="my-3 flex justify-center">
    <router-link to="/folders/view/1/1" class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">1</router-link>
    <router-link to="/folders/view/1/2" class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">2</router-link>
    <router-link to="/folders/view/1/3" class="px-2 py-1 mx-2 rounded-lg bg-sky-500 text-white font-bold">3</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "TweetEmbed",
}
</script>