<template>
  <div class="create">
    <h2 class='header'>Create Blog</h2>
    <form @submit.prevent="handlePostSubmit">
      <label for="title">Title:</label>
      <input type="text" v-model="title" required/>
      <label for="content">Content:</label>
      <textarea
        name="c"
        id="content"
        cols="30"
        rows="10"
        v-model="content"
        required
      ></textarea>
      <label for="tag">Tag (Hit enter to add tags):</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" required/>
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button>Add Post</button>
      <button @click="handlHome">Back to home</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import {useRouter} from 'vue-router';
export default {
  setup() {
    const title = ref("");
    const content = ref("");
    const tag = ref([]);
    const tags = ref([]);
    const rounter = useRouter();
    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    const handlHome = () => {
      rounter.push('/');
    }
    const handlePostSubmit = async () => {
      const newPost = {
        title: title.value,
        body: content.value,
        tags: tags.value,
      };

      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {'content-type': "application/json"},
        body: JSON.stringify(newPost)
      });
      rounter.push('/');

    };
    return { title, content, tag, tags, handleKeyDown, handlePostSubmit, handlHome };
  },
};
</script>

<style>
/* .create{
    width: 500px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #efefef;
    padding: 30px;
    position: relative;

} */
form {
  max-width: 500px;
  text-align: left;
  margin: 0 auto;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #7a7a7a;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "*";
  background: #ff8800;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #9b590d;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
.header {
  position: relative;
  width: 400px;
  margin: 0 auto;
  text-align: center;
}
.header::before {
  content: "";
  background: #4990f3;
  display: block;
  width: 100px;
  height: 2px;
  position: absolute;
  z-index: -1;
  left: 25px;
  top: 15px;
}
.header::after {
  content: "";
  background: #4990f3;
  display: block;
  width: 100px;
  height: 2px;
  position: absolute;
  z-index: -1;
  right: 25px;
  top: 15px;
}
</style>
