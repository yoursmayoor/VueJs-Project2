<template>
  <div>Details {{ id }}</div>
  <p v-if="error">{{ error }}</p>
  <p v-if="Object.keys(post).length" class="post">{{ post.body }}</p>
  <div v-else>
    <Spin />
  </div>
</template>

<script>
import getPost from "../compositions/getPost";
import Spin from "../components/spin.vue";
export default {
  name: "Details",
  props: ["id"],
  components: { Spin },
  setup(props) {
    const { post, error, loadData } = getPost(props.id);
    setTimeout(() => {
      loadData();
    }, 1200);

    return { post, error };
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