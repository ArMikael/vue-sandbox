import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MainForm from '../components/MainForm.vue';
import PostsView from '@/views/PostsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/form',
      name: 'form',
      component: MainForm,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView,
    },
  ],
});

export default router;
