<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card bg-dark text-white">
        <img src="https://cdn.pixabay.com/photo/2017/02/22/17/06/wave-2089959_960_720.jpg" class="card-img" />
        <div class="card-img-overlay">
          <div class="d-flex justify-content-start align-items-center ms-4" v-on:click="goBack()">
            <i class="fa-solid fa-chevron-left me-2"></i>
            <span>View Posts</span>
          </div>
        </div>
        <div class="card-img-overlay text-center title">
          <div class="card-content">
            <h1 class="display-2">
              <strong>{{ this.post.title }}</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 bg-gray">
      <div class="container m-5">
        <p class="fs-5">{{ this.post.description ?? '' }}</p>
        <CommentList :comments="this.post.comments" @addComment="(comment) => addCommentHandler(comment)" />
      </div>
    </div>
  </div>
</template>

<script>
import CommentList from '../components/CommentList.vue';
import { getPostById, updatePost } from '../helpers/posts';
export default {
  components: {
    CommentList
  },
  data() {
    return {
      post: {
        imageUrl: null,
        title: null,
        description: null
      }
    };
  },
  created() {
    this.postId = this.$route.params.id;
  },
  async mounted() {
    await this.getPost();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async getPost() {
      let postId = this.$route.params.id;
      this.post = await getPostById(postId);
    },
    async addCommentHandler(data) {
      this.post.comments.push(data.comment);
      this.post = await updatePost(this.post);
    }
  }
  /* Activity 17: Watcher */
};
</script>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.bg-gray {
  background-color: #e7e7e7;
}
.title {
  top: 40px;
}
</style>
