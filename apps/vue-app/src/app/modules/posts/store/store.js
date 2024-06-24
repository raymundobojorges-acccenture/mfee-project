import { reactive } from 'vue';
import { getPosts } from '../helpers/posts.js';

export const globalStore = reactive({
  currentCategoryId: '1',
  posts: [],
  postEditing: null,
  refreshView: false,
  setCurrentCategory(id) {
    this.currentCategoryId = id;
  },
  setPostEditing(post) {
    this.postEditing = post;
  },
  setRefreshView(refresh) {
    this.refreshView = refresh;
  },
  async loadPosts() {
    this.posts = await getPosts();
  }
});
