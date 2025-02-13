<template>
  <div class="main1">
    <div class="firstRow">
      <div class="home">
        <h1>Home</h1>
        <button class="createBtn" @click="navigateToCreateBlog">
          Create post
        </button>
      </div>
      <div v-if="posts.length">
        <Posts :posts="posts" />
      </div>
      <div v-else>
        <spin />
      </div>
    </div>
    <div class="secondRow">
      <div v-if="posts.length">
      <TagCloud :posts="posts"/>
      </div>
      <div v-else>
           <spin />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter } from "vue-router";
import Posts from "../components/Posts.vue";
import getPosts from "../compositions/getPosts";
import Spin from "../components/spin.vue";
import TagCloud from "../components/TagCloud.vue";

export default {
  name: "HomeView",
  components: {
    Posts,
    Spin,
    TagCloud
  },
  setup() {
    const { posts, error, loadData } = getPosts();
    setTimeout(() => {
      loadData();
    }, 500);
    const router = useRouter();

    const navigateToCreateBlog = () => {
      router.push("/form");
    };
    return { posts, error, navigateToCreateBlog };
  },
};
</script>
<style>
.main1 {
  display: flex;
  flex-direction: row;
}
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
.secondRow{
  width: 30%;
  padding: 20px;
  border-left: 1px solid #ccc;
  margin-left: 20px;
}
</style>
