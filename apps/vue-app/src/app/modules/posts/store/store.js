import { reactive } from 'vue';

export const store = reactive({
  currenCategoryId: 1,
  posts: [],

  setCurrentCategory(id) {
    this.currentCategoryId = id;
  }
});
/* Activity 13: Reactivity API */
/* Activity 15: Using axios */
