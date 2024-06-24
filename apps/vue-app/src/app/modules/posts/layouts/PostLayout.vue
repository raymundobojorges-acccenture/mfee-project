<template>    
   
    <RouterView/>
</template>
<script>
import PostView from '../views/PostView.vue';
import { RouterView } from 'vue-router';
export default {
    name: 'PostLayout',
    components: {
        PostView
    }
};
</script>
