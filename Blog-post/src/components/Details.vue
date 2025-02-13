<template>
  <h2>Details {{ id }}</h2>
  <p v-if="error">{{ error }}</p>
  <div v-if="Object.keys(post).length" class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <Spin />
  </div>
  <button @click="handleClick">Back to Home</button>
</template>

<script>
import getPost from "../compositions/getPost";
import Spin from "../components/spin.vue";
import { useRouter } from "vue-router";
export default {
  name: "Details",
  props: ["id"],
  components: { Spin },
  setup(props) {
    const { post, error, loadData } = getPost(props.id);
    const route = useRouter();
    setTimeout(() => {
      loadData();
    }, 500);
    const handleClick = () => {
      route.push("/");
    };
    return { post, error, handleClick };
  },
};
</script>

<style>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>