<template>
  <button type="button" class="btn btn-light" v-on:click="selectCategory(category.id)" :class="{ active: category.active }">{{category.name}}</button>
</template>
<script>
export default {
  name: 'CategoryItem',
  methods: {
    selectCategory(id) {
      return this.$emit('selectCategory', { id });
    }
  },
  emits: {
    selectCategory: ({ id }) => {
      return id;
    }
  },
  props: {
    category: {
      type: {
        active: false,
        id: 0,
        name: null
      },
      required: true
    }
  }
};
</script>
