<script lang="ts">
import { defineComponent } from 'vue';
import PostsList from '../components/PostsList.vue';

export default defineComponent({
  components: { PostsList },
});
</script>

<template>
  <div class="posts-view">
    <PostsList></PostsList>
  </div>
</template>
