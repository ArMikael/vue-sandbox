<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ToggleMixin from '@/mixins/ToggleMixin';

import { usePostStore } from '@/stores/PostStore';
import { defineComponent, onMounted } from 'vue';
import { ref } from 'vue';
const postStore = usePostStore();

const { likes, page, postsList, totalPages } = storeToRefs(postStore);

postStore.fetchPosts();

const goToPage = (pageNumber: number) => {
  postStore.getPage(pageNumber);
};

const pageEndObserver = ref(null);

onMounted(() => {
  const options = {
    rootMargin: '0px',
    threshold: 1.0,
  };

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entries[0].isIntersecting && page < totalPages) {
      console.log(entries);
      // this.loadMorePosts();
    }
  };
  const observer = new IntersectionObserver(callback, options);
  // observer.observe(pageEndObserver as HTMLDivElement);
});

defineComponent({
  name: 'PostsList',
  mixins: [ToggleMixin],
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

    <div>{{ postsList.length }}</div>

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
