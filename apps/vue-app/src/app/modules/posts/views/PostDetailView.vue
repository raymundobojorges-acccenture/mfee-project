<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card bg-dark text-white">
        <img :src="post.image" class="card-img" />
        <div class="card-img-overlay">
          <div class="d-flex justify-content-start align-items-center ms-4">
            <i class="fa-solid fa-chevron-left me-2" @click="this.$router.back()"></i>
            <span>View Posts</span>
          </div>
        </div>
        <div class="card-img-overlay text-center title">
          <div class="card-content">
            <h1 class="display-2">
              <strong>{{ post.title }}</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 bg-gray">
      <div class="container m-5">
        <p class="fs-5">{{ post.description }}</p>
        <!-- Activity 7: Render components: Render CommentList from /components folder */ -->
        <CommentList :comments="post.comments" @addNewComment="addComment($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import CommentList from '../components/CommentList.vue';
import { updatePost, getPostById } from '../helpers/posts';
import { alerts } from '../helpers/alerts';

export default {
  props: {
    id: String
  },
  /*   Activity 5: Add created hook */
  components: {
    CommentList
  },
  mixins: [alerts],
  data() {
    return {
      post: {}
    };
  },
  methods: {
    async getPostById(postId) {
      this.post = await getPostById(postId);
    },
    async addComment(comment) {
      const post = {
        ...this.post,
        comments: [...this.post.comments, comment]
      };
      const status = await updatePost(post);
      if (status) {
        this.showAlert('success', 'The comment has been added');
        this.getPostById(this.post.id);
      } else {
        this.showAlert('error', "The comment couldn't be added");
      }
    }
  },
  mounted() {
    this.getPostById(this.id);
  }
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
