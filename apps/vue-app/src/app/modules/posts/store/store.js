import { reactive } from 'vue';
import { getPosts } from '../helpers/posts.js';

export const store = reactive({
  currentCategoryId: '1',
  posts: [],
  postEditing: null,

  setCurrentCategory(id) {
    this.currentCategoryId = id;
  },
  setPostEditing(post){
    this.postEditing = post;
  },
  async getPosts() {
    this.posts = await getPosts();
  }
});


/* Activity 13: Reactivity API */
/* Activity 15: Using axios */
/* Activity 17: Watcher */
