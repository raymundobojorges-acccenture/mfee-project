<template>
  <div class="btn-group" role="group">
    <CategoryItem v-for="category in categories" :key="category.id" @selectCategory="(event) => selectCategory(event)" :category="category"/>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
import { store } from '../store/store.js';

export default {
  components:{CategoryItem},

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
      ],
      store
    };
  },
  created(){
    this.buildCategories();
  },
  methods: {
    buildCategories() {
      this.categories = [
        {
          id: 1,
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

    }
  }
};
</script>
