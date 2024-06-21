<template>
  <div class="col-md-12 col-lg-6">
    <div class="card bg-dark text-white">
      <img :src="post.image" class="card-img" />
      <div @click="goToPostDetail(post.id)" class="card-img-overlay mt-3 ms-3 card-img">
        <div class="card-content">
          <h1 class="display-5">{{ post.title }}</h1>
          <p class="card-text fs-5">
            <em>{{ post.comments.lenght }}</em>
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
          <i @click="editPost" class="fa-solid fa-pen pe-3" data-bs-toggle="modal" data-bs-target="#createPostModal"></i>
          <i @click="deletePost" class="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store/store.js'
import { deletePost } from "../helpers/posts.js";
import { alerts } from '../helpers/alerts.js';

export default {
  mixins: [alerts],
  data() {
    return {
      store,
    }
  },
  props:{
    post:{
      type: {
          id: 0,
          title: null,
          image: null,
          description: null,
          category: {
            id: 0,
            name: null
          },
          comments: []
      },
      required: true
    }
  },
  methods:{
    goToPostDetail(id) {
      this.$router.push({ path: `/post-detail/${id}` });
    },
    editPost(){
      this.store.setPostEditing(this.post);
    },
    async deletePost(){
      this.$swal({
        position: 'top-end',
        icon: 'warning',
        title: 'Do you want to delete this post?',
        showConfirmButton: true,
        showCancelButton: true
      }).then(async (result) => {
        if(result.isConfirmed) {
          try {
            await deletePost(this.post.id);
            this.showAlert('success', 'Post deleted successfully');
            this.store.getPosts();
          } catch(e) {
            this.showAlert('error', 'Could not delete post');
          }
        }
      });

    },
  }
}
</script>

<style>
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
<!-- Activity 10: Adding click events */ -->
<!--Activity 12: Adding events and props */ -->
<!-- Activity 14: Vue router  -->
<!-- Activity 17: Watcher  -->
