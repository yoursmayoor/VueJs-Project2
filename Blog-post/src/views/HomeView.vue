<template>
  <div>
    <div class="home">
      <h1>Home</h1>
      <button class="createBtn" @click="navigateToCreateBlog">Create post</button>
    </div>
    <div v-if="posts.length">
      <Posts :posts="posts" />
    </div>
    <div v-else>
      <spin />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter } from "vue-router";
import Posts from "../components/Posts.vue";
import getPosts from "../compositions/getPosts";
import Spin from "../components/spin.vue";

export default {
  name: "HomeView",
  components: {
    Posts,
    Spin,
  },
  setup() {
    const { posts, error, loadData } = getPosts();
    setTimeout(() => {
      loadData();
    }, 1000);
    const router = useRouter();

    const navigateToCreateBlog = () => {
      router.push("/form");
    };
    return { posts, error, navigateToCreateBlog };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.createBtn {
  font-size: 24px;
  font-weight: bold;
}
</style>
