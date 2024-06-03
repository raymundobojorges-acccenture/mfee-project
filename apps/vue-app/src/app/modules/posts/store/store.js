/* Activity 13: Reactivity API */
import { reactive } from 'vue';

export const categoryStore = reactive({
  currenCategoryId: 1,
  posts: [],

  setCurrentCategory(id) {
    this.currentCategoryId = id;
  }
});
