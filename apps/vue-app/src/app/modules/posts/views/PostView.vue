<template>
<HeaderPost/>
<div class="row pt-5">
  <PostItem v-for="post in postsFiltered" :key="post.id" :post="post"/>
</div>
<div v-if="!thereAreposts" class="alert alert-warning m-3" role="alert">There are not results.</div>
</template>

<script>
import HeaderPost from '../components/HeaderPost.vue';
import PostItem from '../components/PostItem.vue';
import { store } from '../store/store.js';

export default {
  components:{HeaderPost, PostItem},
  data() {
    return {
      posts: [],
      store
    };
  },
  computed:{
    thereAreposts(){
      return this.postsFiltered.length >= 0;
    },
    postsFiltered() {
      if(this.store.currentCategoryId === '1')
        return this.store.posts;

      return this.store.posts.filter((post) => post.category.id === this.store.currentCategoryId)
    }
  },
  created(){
    this.store.getPosts();
    //this.getPosts();
  },
  methods: {
    async getPosts() {
      this.posts = this.store.getPosts();
    }
  }
}
</script>

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
