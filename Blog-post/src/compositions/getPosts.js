import { ref, reactive, computed, watch, watchEffect } from "vue";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const loadData = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw new Error("Data is not loaded!!!!");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, loadData };
};

export default getPosts;
