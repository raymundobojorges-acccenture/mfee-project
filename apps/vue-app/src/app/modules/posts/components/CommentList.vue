<template>
  <div class="container row mt-5 d-flex flex-column align-items-center">
    <p class="text-center fs-5"><strong> Comments </strong></p>
    <CommentItem v-for="comment in comments" :key="comment" :comment="comment" />
    <div v-if="isCommentsEmpty" class="alert alert-warning m-3" role="alert">
      There are not results.
    </div>
    <NewComment
      @addComment="(event) => $emit('addComment', { comment: event.comment })"
    />
  </div>
</template>

<script>
import CommentItem from "./CommentItem.vue";
import NewComment from "./NewComment.vue";

export default {
  components: {
    CommentItem,
    NewComment,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isCommentsEmpty() {
      return !this.comments || this.comments.length === 0;
    },
  }
};
</script>
