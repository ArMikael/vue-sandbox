import { defineStore } from 'pinia';
import type { Post } from '@/types/types';
import axios from 'axios';

type PostStoreState = {
  page: number;
  postsList: Array<Post>;
  likes: number;
  limit: number;
  totalPages: number;
};

export const usePostStore = defineStore('postStore', {
  state: (): PostStoreState => ({
    page: 1,
    postsList: [],
    likes: 0,
    limit: 10,
    totalPages: 1,
  }),
  getters: {},
  actions: {
    getPage(page: number) {
      this.page = page;
      this.fetchPosts();
    },
    async fetchPosts(): Promise<void> {
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
  },
});
