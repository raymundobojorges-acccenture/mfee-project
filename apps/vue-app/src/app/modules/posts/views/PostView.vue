<template>
  <HeaderPost />
  {{ categorySelected }}
  <div class="row pt-5">
    <PostItem v-for="post in postsFiltered" :post="post" />
  </div>

  <div class="alert alert-warning m-3" role="alert" v-if="thereAreposts">There are not results.</div>
</template>

<script>
import HeaderPost from '../components/HeaderPost.vue';
import PostItem from '../components/PostItem.vue';
import { globalStore } from '../store/store.js';

export default {
  name: 'PostView',
  components: {
    HeaderPost,
    PostItem
  },
  data() {
    return {
      posts: [],
      globalStore
    };
  },
  async created() {
    await this.globalStore.loadPosts();
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      this.posts = this.globalStore.posts;
    }
  },
  computed: {
    thereAreposts() {
      return this.postsFiltered.length === 0;
    },
    postsFiltered() {
      if (this.globalStore.currentCategoryId != '1') {
        return this.posts.filter((post) => post.category.id == this.globalStore.currentCategoryId);
      } else {
        return this.posts;
      }
    },
    categorySelected() {
      return this.globalStore.currentCategoryId;
    }
  }
};
</script>
