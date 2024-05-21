<template>
  <!-- Inicio CategoriesList.vue -->
  <div class="btn-group" role="group">
    <CategoryItem />
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';

export default {
  components: {
    CategoryItem
  }
};
</script>
