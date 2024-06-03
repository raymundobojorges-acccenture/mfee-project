<template>
  <div class="btn-group" role="group">
    <div v-for="category in categories">
      <CategoryItem :category="category" @selectCategory="(id) => selectCategoryHandler(id)" />
    </div>
  </div>
</template>
<script>
import CategoryItem from './CategoryItem.vue';
import { categoryStore } from '../store/store.js';
export default {
  name: 'CategoryList',
  components: {
    CategoryItem
  },
  created() {
    this.buildCategories();
  },
  data() {
    return {
      categories: [
        {
          id: 2,
          name: 'Travel'
        },
        {
          id: 3,
          name: 'Lifecycle'
        },
        {
          id: 4,
          name: 'Business'
        },
        {
          id: 5,
          name: 'Work'
        }
      ]
    };
  },
  methods: {
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
      categoryStore.setCurrentCategory(id);
    }
  }
  /* Activity 15: Using axios */
};
</script>
