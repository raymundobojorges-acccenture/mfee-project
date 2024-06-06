import { reactive } from 'vue';
import { getPosts } from '../helpers/posts.js';

export const globalStore = reactive({
  currentCategoryId: "1",
  posts: [],

  setCurrentCategory(id) {
    this.currentCategoryId = id;
  },
  async loadPosts() {
    this.posts = await getPosts();
  }
});
/* Activity 15: Using axios */
/* Activity 17: Watcher */
