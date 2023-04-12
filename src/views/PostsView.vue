<script lang="ts">
import { defineComponent } from 'vue';
import PostList from '../components/PostList.vue';

export default defineComponent({
  components: { PostList },
});
</script>

<template>
  <div class="posts-view">
    <PostList></PostList>
  </div>
</template>
