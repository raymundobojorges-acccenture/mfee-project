<template>
  <div class="btn-group" role="group">
    <CategoryItem v-for="category in categories" :key="category.id"/>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';

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
      ]
    };
  },
  created(){}
};
</script>
