<template>
  <!-- Inicio CategoryItem.vue -->
  <button type="button" class="btn btn-light" :class="{ active: false }" @click="selectCategory(1)">Category 1</button>
  <!-- Fin CategoryItem.vue -->
</template>

<script>
export default {
  name: 'CategoryItem',
  methods: {
    selectCategory(id) {
      console.log(id);
    }
  }
};
</script>
