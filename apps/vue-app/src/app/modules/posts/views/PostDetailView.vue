<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card bg-dark text-white">
        <img :src="post.image" class="card-img" />
        <div class="card-img-overlay">
          <div class="d-flex justify-content-start align-items-center ms-4" @click="$router.go(-1);">
            <i class="fa-solid fa-chevron-left me-2"></i>
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
        <CommentList @addComment="(event) => updatePost(event)" :comments="post.comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import CommentList from '../components/CommentList.vue';
import { getPostById, updatePost } from '../helpers/posts';

export default {
  components:{
    CommentList
  },
  data() {
      return{
      id: {
        type: String
      },
      post: {
        title: "",
        description: "",
        image: "",
        category: {
          id: "",
          name: ""
        },
        comments: [],
        id: ""
      }
    }
  },
  created(){
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getPostById();
  },
  methods: {
    async getPostById () {
      this.post = await getPostById(this.id);
    },
    async updatePost(event) {
      this.post.comments.push(event.comment)
      updatePost(this.post);
    }
  }
  /*   Activity 5: Add created hook */
  /*   Activity 16: Forms */
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
