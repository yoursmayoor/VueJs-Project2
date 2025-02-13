import { ref, reactive, computed, watch, watchEffect } from "vue";
const getPost = (id) => {
  const post = ref({});
  const error = ref(null);
  const loadData = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/"+id);
      if (!data.ok) {
        throw new Error("Post details does not exists!!!!");
      }
      post.value = await data.json();
      console.log(post.value)
      
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, loadData };
};

export default getPost;
