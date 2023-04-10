import { createStore } from 'vuex';
import { PostsModule } from '@/store/postsModule';

export default createStore({
  modules: {
    posts: PostsModule,
  },
});
