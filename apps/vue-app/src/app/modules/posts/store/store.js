import { reactive } from 'vue';
import { getPosts } from '../helpers/posts.js';

export const store = reactive({
  currentCategoryId: '1',
  posts: [],

  setCurrentCategory(id) {
    //debugger
    this.currentCategoryId = id;
  },
  async getPosts() {
    this.posts = await getPosts();
  }
});


/* Activity 13: Reactivity API */
/* Activity 15: Using axios */
/* Activity 17: Watcher */
