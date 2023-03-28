<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import type { Post } from '@/types/types';

export default defineComponent({
  name: 'PostsList',
  data(): {
    postsList: Array<Post>;
    page: number;
    limit: number;
    totalPages: number;
  } {
    return {
      postsList: [],
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });

        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.postsList = response.data;
      } catch (error) {
        console.error('getPosts error: ', error);
      }
    },
    goToPage(pageNumber: number) {
      this.page = pageNumber;
      this.getPosts();
    },
  },
});
</script>

<template>
  <div class="posts-list-component">
    <ul class="post-list">
      <li class="post-item" v-for="post in postsList" :key="post.id">{{ post.id }} - {{ post.title }}</li>
    </ul>

    <div class="pages-nav-panel">
      <ul class="page-controls-list">
        <li
          class="page-control"
          v-for="pageNumber of totalPages"
          :key="pageNumber"
          :class="{
            'page-control--active': pageNumber === page,
          }"
          @click="goToPage(pageNumber)">
          {{ pageNumber }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.post-list {
  list-style-type: none;
}

.pages-nav-panel {
  margin-top: 40px;
}

.page-controls-list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

.page-control {
  width: 30px;
  margin-right: 4px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;

  &--active {
    border: 1px solid cornflowerblue;
    background-color: lightskyblue;
  }
}
</style>
