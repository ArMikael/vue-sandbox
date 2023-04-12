import { defineStore } from 'pinia';
import type { Post } from '@/types/types';

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
});
