<template>
  <!-- Inicio PostItem.vue -->
  <div class="col-md-12 col-lg-6">
    <div class="card bg-dark text-white">
      <img :src="post.image" class="card-img" />
      <div class="card-img-overlay mt-3 ms-3 card-img" @click="goToPostDetail(post.id)">
        <div class="card-content">
          <h1 class="display-5">{{ post.title }}</h1>
          <p class="card-text fs-5">
            <em>{{ post.comments.length }} comments </em>
            <i class="fa-solid fa-comment"></i>
          </p>
          <p class="card-text fs-5">{{ post.description }}</p>
          <p class="card-text fs-5 text-uppercase">
            <strong>{{ post.category.name }}</strong>
          </p>
        </div>
      </div>
      <div class="card-img-overlay card-buttons">
        <div class="d-flex justify-content-end align-items-center ms-4">
          <i class="fa-solid fa-pen pe-3" data-bs-toggle="modal" data-bs-target="#createPostModal" @click="editPost()"></i>
          <i class="fa-solid fa-trash" @click="deletePost()"></i>
        </div>
      </div>
    </div>
  </div>
  <!-- Fin PostItem.vue -->
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToPostDetail(id) {
      this.$router.push({
        name: 'post-detail',
        params: { id }
      });
    },
    editPost() {
      console.log('🚀 ~ editPost ~ editPost:');
    },
    deletePost() {
      console.log('🚀 ~ deletePost ~ deletePost:');
    }
  }
};
</script>

<style scoped>
.col-md-12,
.col-lg-6 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.card {
  border: 0;
  border-radius: 0;
}
.card:hover {
  cursor: pointer;
}
.card-content {
  display: flex;
  justify-content: end;
  flex-direction: column;
  height: 100%;
}
.card-img {
  bottom: 40px;
}
.card-buttons {
  top: 85%;
}
</style>
