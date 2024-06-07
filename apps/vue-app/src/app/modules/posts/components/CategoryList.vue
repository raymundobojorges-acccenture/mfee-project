<template>
  <div class="btn-group" role="group">
    <div v-for="category in categories">
      <CategoryItem :category="category" @selectCategory="(id) => selectCategoryHandler(id)" />
    </div>
  </div>
</template>
<script>
import CategoryItem from './CategoryItem.vue';
import { globalStore } from '../store/store.js';
import { getCategories } from '../helpers/categories.js';

export default {
  name: 'CategoryList',
  components: {
    CategoryItem
  },
  created() {
    this.getCategories();
  },
  data() {
    return {
      categories: [],
      globalStore
    };
  },
  methods: {
    async getCategories() {
      this.categories = await getCategories();
      this.buildCategories();
    },
    buildCategories() {
      this.categories = [
        {
          id: '1',
          name: 'All'
        },
        ...this.categories
      ];

      this.categories = this.categories.map((category) => ({
        ...category,
        active: category.name === 'All'
      }));
    },
    selectCategoryHandler({ id }) {
      this.categories = this.categories.map((category) => {
        if (category.id === id) return { ...category, active: true };

        return { ...category, active: false };
      });
      globalStore.setCurrentCategory(id);
    }
  }
};
</script>
