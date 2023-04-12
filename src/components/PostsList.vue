<script setup lang="ts">
import { usePostStore } from '@/stores/PostStore';
import { storeToRefs } from 'pinia';

const postStore = usePostStore();
const { likes, limit, page, postsList, totalPages } = storeToRefs(postStore);
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import type { Post } from '@/types/types';
import ToggleMixin from '@/mixins/ToggleMixin';

export default defineComponent({
  name: 'PostsList',
  mixins: [ToggleMixin],
  // data(): {
  //   postsList: Array<Post>;
  //   page: number;
  //   limit: number;
  //   totalPages: number;
  // } {
  //   return {
  //     postsList: [],
  //     page: 1,
  //     limit: 10,
  //     totalPages: 0,
  //   };
  // },
  mounted() {
    this.getPosts();

    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        console.log(entries);
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.pageEndObserver as HTMLDivElement);
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
    async loadMorePosts() {
      try {
        this.page++;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });

        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.postsList = [...this.postsList, ...response.data];
      } catch (error) {
        console.error('loadMorePosts error: ', error);
      }
    },
    goToPage(pageNumber: number) {
      this.page = pageNumber;
    },
  },
  watch: {
    // page() {
    //   this.getPosts();
    // },
  },
});
</script>

<template>
  <div class="posts-list-component">
    <div class="likes-counter">Likes: {{ likes }}</div>

    <ul class="post-list">
      <li class="post-item" v-for="post in postsList" :key="post.id">
        <div class="post-title">{{ post.id }} - {{ post.title }}</div>
        <div class="post-body">
          {{ post.body }}
        </div>
      </li>
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

    <div ref="pageEndObserver" class="page-end-observer"></div>
  </div>
</template>

<style lang="scss">
.post-list {
  list-style-type: none;
  padding: 0;
}

.post-item {
  margin-bottom: 20px;
  padding: 8px 12px;
  border: 1px solid darkgray;
  border-radius: 6px;
}

.pages-nav-panel {
  margin-top: 40px;
}

.page-controls-list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0;
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

.page-end-observer {
  height: 30px;
}
</style>
