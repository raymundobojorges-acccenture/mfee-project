<template>
  <div class="container row mt-5 d-flex flex-column align-items-center">
    <p class="text-center fs-5"><strong> Comments </strong></p>

    <CommentItem v-for="comment in comments" :comment="comment" />

    <div class="alert alert-warning m-3" role="alert" v-if="areCommentsEmpty">There are not results.</div>

    <NewComment @addComment="(comment) => addCommentHandler(comment)" />
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue';
import NewComment from './NewComment.vue';

export default {
  components: {
    CommentItem,
    NewComment
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  computed: {
    areCommentsEmpty() {
      return !this.comments || this.comments.length === 0;
    }
  },
  methods: {
    addCommentHandler(data) {
      this.$emit('addComment', { comment: data.comment });
    }
  }
};
</script>
