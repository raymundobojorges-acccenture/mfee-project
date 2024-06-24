<template>
  <button @click="selectCategory(category.id)" type="button" class="btn btn-light" :class="{active: false}">{{ category.name }}</button>
</template>

<script>
export default {
  props: {
    category: {
      type: {
        active: false,
        id: null,
        name: null,
      },
      required: true
    }
  },
  methods:{
    selectCategory(id){
      this.$emit('selectCategory', {id});
    }
  }
}
</script>
