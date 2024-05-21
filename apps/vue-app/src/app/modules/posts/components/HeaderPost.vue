<template>
  <!-- Inicio HeaderPosts.vue -->
  <div class="container pt-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h6 class="sub-title">[ {{ title }} ]</h6>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <h1 class="display-1">{{ subtitle }}</h1>
      </div>
      <div class="col-12 d-flex justify-content-end p-2">
        <i class="fa-solid fa-square-pen fa-2xl create-post" data-bs-toggle="modal" data-bs-target="#createPostModal"></i>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <CategoryList />
      </div>
    </div>
  </div>
  <!-- Fin HeaderPosts.vue -->
  <PostForm />
</template>

<script>
import CategoryList from './CategoryList.vue';
import PostForm from './PostForm.vue';
export default {
  components: {
    CategoryList,
    PostForm
  },
  data() {
    return {
      title: 'Making your Life Easier',
      subtitle: 'Discovering the World'
    };
  }
};
</script>

<style scoped>
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
