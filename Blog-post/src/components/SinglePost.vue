<template>
  <div class="post">
    <router-link :to="{name: 'Details', params: { id: post.id} }"><h3>{{ post.title }}</h3></router-link>
    <p>{{ snipits }} </p>
    <p v-for="tag in post.tags" :key="tag" class="tag">#{{tag}}</p>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    const snipits = computed(() => {
      if (props.post.body.length > 100) {
        return props.post.body.substring(0, 100) + "....";
      }
      return props.post.body
    });
    // onMounted(()=>{
    //     console.log("component mounted");
    // });
    // onUnmounted(()=>{
    //     console.log("component UNMOUNTED");
    // });
    // onUpdated(()=>{
    //     console.log("component Updated")
    // });
    return { snipits };
  },
};
</script>

<style>
.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #8a8a8a;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
  .tag{
    display: inline;
    font-size: 13px;
    color: #7a7a7a;
    margin-right: 10px;
  }
</style>