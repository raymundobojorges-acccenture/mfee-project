import { reactive } from 'vue';

export const store = reactive({
  currentCategoryId: '1',
  setCurrentCategory(categorySelected) {
    this.currentCategoryId = categorySelected;
  },
  posts: []
});
