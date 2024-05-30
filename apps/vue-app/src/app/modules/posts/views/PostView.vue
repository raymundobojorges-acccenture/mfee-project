<template>
  <!-- Activity 3: Render Header components -->
  <HeaderPost />
  <div class="row pt-5">
    <!-- Activity 4: Render PostItem component -->
    <PostItem v-for="(post, index) in postsFiltered" :key="index" :post="post" />
  </div>
  <div class="alert alert-warning m-3" role="alert" v-if="!thereArePosts">There are not results.</div>
</template>

<script>
import HeaderPost from '../components/HeaderPost.vue';
import PostItem from '../components/PostItem.vue';
import { store } from '../store/store';
export default {
  name: 'PostView',
  components: {
    HeaderPost,
    PostItem
  },
  data() {
    return {
      /*   Activity 8: Add v-for directive: Use this array to iterate <PostItem> in the template */
      posts: [],
      store
    };
  },
  computed: {
    thereArePosts() {
      return this.postsFiltered.length > 0;
    },
    postsFiltered() {
      if (this.store.currentCategoryId === '1') {
        return this.store.posts;
      }
      const postFiltered = this.store.posts.filter((post) => post.category.id === this.store.currentCategoryId);
      return postFiltered;
    }
  },
  created() {
    this.store.getPosts();
  }
};
</script>
