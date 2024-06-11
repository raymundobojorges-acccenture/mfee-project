<template>
  <!-- Activity 3: Render Header components -->
<HeaderPost/>
<div class="row pt-5">
  <!-- Activity 4: Render PostItem component -->
  <PostItem/>
</div>
<div class="alert alert-warning m-3" role="alert">There are not results.</div>
</template>

<style>
.sub-title {
  color: #f0a441;
  font-weight: 300;
}
.create-post {
  height: 20px;
  color: #f0a441;
}
.create-post:hover {
  cursor: pointer;
}
</style>

<script>
import HeaderPost from '../components/HeaderPost.vue';
import PostItem from '../components/PostItem.vue';

export default {
  components:{HeaderPost, PostItem}
}
</script>
