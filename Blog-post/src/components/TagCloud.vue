<template>
  <h3>Tag clouds</h3>
  <div v-for="tag in tags" :key="tag">
    <router-link :to="{ name: 'tag', params: { tag: tag } }">
       <span class="pill"> # {{tag}}</span>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["posts"],
  setup(props) {
    const tags = ref([]);
    const tagSet = new Set();

    props.posts.forEach((post) => {
      post.tags.forEach((tag) => tagSet.add(tag));
    });

    tags.value = [...tagSet];
    
    return { tags };
  },
};
</script>

<style>
</style>