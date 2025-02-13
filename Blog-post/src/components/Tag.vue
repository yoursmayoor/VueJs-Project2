<template>
<div>
    <p v-if="error">{{error}}</p>
    <div v-if="posts.length">
        <Posts :posts="postWithTags" />
    </div>
    <div v-else>
        <Spin />
    </div>
<button @click="handlHome">Back to home</button>
</div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import Posts from "../components/Posts.vue";
import getPosts from "../compositions/getPosts";
import Spin from "../components/spin.vue";
import { computed } from 'vue';

export default {
  components: { Posts, Spin },
setup() {
    const { posts, error, loadData } = getPosts();
      loadData();
    const router = useRoute();
    const home = useRouter();
    const handlHome = () => {
        home.push('/')
    }
    const postWithTags = computed(() => {
        return posts.value.filter(p => p.tags.includes(router.params.tag))
    })
    return { posts, error, postWithTags, handlHome };
  },
}
</script>


<style>

</style>