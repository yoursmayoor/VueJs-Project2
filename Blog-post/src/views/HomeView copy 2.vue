<template>
<div>
  <div v-if="toglePost">
   <Posts :posts="posts"/>
  </div>
   <button @click="toglePost = !toglePost">Show Posts</button>
    <button @click="posts.pop()">Delete Post</button>

</div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive, computed, watch, watchEffect } from "vue";
import Posts from '../components/Posts.vue';

export default {
  name: "HomeView",
  components: {
    Posts
  },
  setup() {
    const posts = ref([
      {title: "Post1", body: "I just wanted to let you know that I've now added a new chapter near the end of the course all about using Vue 3 with Firebase 9. Version 9 of Firebase adopts a more modular & functional approach, which takes advantage of something called 'tree-shaking'. This means that any unused Firebase code is ' shaken' out of our final production bundles, leading to a better performance.", id:1},
      {title: "Post2", body: "post2 body", id:2},
      {title: "Post3", body: "post3 body", id:3},
    ])
    const toglePost = ref(true);

    return {posts, toglePost}
  },
};
</script>
y