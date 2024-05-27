<template>
    <!-- Inicio CategoryItem.vue -->
    
    <button type="button" class="btn btn-light" v-on:click="selectCategory()" :class="{ active: false }">Category 1</button>
    
    <!-- Fin CategoryItem.vue -->
</template>
<script>
export default {
    name: 'CategoryItem',
    methods: {
        selectCategory(id) {
            
        }
    }
};
</script><!-- Activity 10: Adding click events */ -->
