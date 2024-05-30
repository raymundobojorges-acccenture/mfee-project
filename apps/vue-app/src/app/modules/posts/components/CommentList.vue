<template>
  <div class="container row mt-5 d-flex flex-column align-items-center">
    <p class="text-center fs-5"><strong> Comments </strong></p>
    <!-- Activity 7: Render components: Render CommentItem from /components folder */ -->
    <CommentItem v-for="comment in comments" :key="comment" v-show="thereAreComments" :comment="comment" />
    <div class="alert alert-warning m-3" role="alert" v-show="!thereAreComments">There are not results.</div>
    <!-- Activity 7: Render components: Render NewComment from /components folder */ -->
    <NewComment @newComment="passNewComment($event)" />
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue';
import NewComment from './NewComment.vue';
export default {
  name: 'PostCommentsList',
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  components: {
    CommentItem,
    NewComment
  },
  methods: {
    passNewComment(comment) {
      this.$emit('addNewComment', comment);
    }
  },
  computed: {
    thereAreComments() {
      return this.comments?.length > 0;
    }
  }
};
</script>
