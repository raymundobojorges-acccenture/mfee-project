<template>
  <div class="btn-group" role="group">
    <CategoryItem v-for="category in categories" :key="category.id" @selectCategory="(event) => selectCategory(event)" :category="category"/>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
import { getCategories } from '../helpers/categories.js';
import { store } from '../store/store.js';

export default {
  components:{CategoryItem},

  data() {
    return {
      categories: [],
      store
    };
  },
  created(){
    this.getCategories();
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
    selectCategory(event){
      this.categories = this.categories.map((category) => {
        if (category.id === event.id) {
          store.setCurrentCategory(event.id)
          return { ...category, active: true };
        }
        return { ...category, active: false };
      });

      console.log(this.store.currentCategoryId)
    },
    async getCategories() {
      this.categories = await getCategories();
      this.buildCategories();
    }
  }

  /* Activity 15: Using axios */
};
</script>
