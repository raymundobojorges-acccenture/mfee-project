<template>
  <!-- Activity 3: Render Header components -->
  <HeaderPost />
  <div class="row pt-5">
    <!-- Activity 4: Render PostItem component -->
    <PostItem />
  </div>
  <div class="alert alert-warning m-3" role="alert">There are not results.</div>
</template>

<script>
import HeaderPost from '../components/HeaderPost.vue';
import PostItem from '../components/PostItem.vue';

export default {
  name: 'PostView',
  components: {
    HeaderPost,
    PostItem
  }
};
</script>
