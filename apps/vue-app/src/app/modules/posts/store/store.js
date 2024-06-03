import { reactive } from 'vue';

export const categoryStore = reactive({
  currenCategoryId: 1,
  posts: [],

  setCurrentCategory(id) {
    this.currentCategoryId = id;
  }
});
/* Activity 15: Using axios */
