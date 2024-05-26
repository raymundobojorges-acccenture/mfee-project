<template>
  <!-- Inicio CategoryItem.vue -->
  <button type="button" class="btn btn-light" :class="{ active: category.active }" @click="selectCategory(category.id)">
    {{ category.name }}
  </button>
  <!-- Fin CategoryItem.vue -->
</template>

<script>
export default {
  emits: ['selectCategory'],
  name: 'CategoryItem',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectCategory(id) {
      this.$emit('selectCategory', id);
    }
  }
};
</script>
