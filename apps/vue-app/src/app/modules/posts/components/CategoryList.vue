<template>
  <!-- Inicio CategoriesList.vue -->
  <div class="btn-group" role="group">
    <CategoryItem v-for="category in categories" :key="category.id" @select-category="selectCategory($event)" :category="category" />
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
import { store } from '../store/store';
import { getCategories } from '../helpers/categories';

export default {
  components: {
    CategoryItem
  },
  data() {
    return {
      /*   Activity 8: Add v-for directive: Use this array to iterate <CategoryItem> in the template */
      categories: [],
      store
    };
  },
  methods: {
    selectCategory(id) {
      this.categories = this.categories.map((category) => ({
        ...category,
        active: category.id === id
      }));

      this.store.setCurrentCategory(id);
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
    async getCategories() {
      this.categories = await getCategories();

      this.buildCategories();
    }
  },

  created() {
    this.getCategories();
  }
};
</script>
