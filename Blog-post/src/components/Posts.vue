<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
export default {
  name: "Posts",
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    console.log(props.posts);
    //  onMounted(()=>{
    //     console.log("component mounted");
    // });mounted(()=>{
        
    // onUnconsole.log("component UNMOUNTED");
    // });
    // onUpdated(()=>{
    //     console.log("component Updated")
    // });
    return {};
  },
};
</script>

<style>
</style>