<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import type { Post } from '@/types/types';

export default defineComponent({
  name: 'PostsList',
  data(): {
    postsList: Array<Post>;
  } {
    return {
      postsList: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
        console.log(response);
        this.postsList = response.data;
      } catch (error) {
        console.error('getPosts error: ', error);
      }
    },
  },
});
</script>

<template>
  <div class="posts-list-component">
    <ul class="post-list">
      <li class="post-item" v-for="post in postsList" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
