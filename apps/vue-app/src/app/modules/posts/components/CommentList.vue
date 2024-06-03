<template>
    <div class="container row mt-5 d-flex flex-column align-items-center">
    
        <p class="text-center fs-5"><strong> Comments </strong></p>
    
        <CommentItem v-for="comment in comments" :comment="comment" />
    
        <div class="alert alert-warning m-3" role="alert" v-if="areCommentsEmpty">There are not results.</div>
    
    
        <NewComment/>
    
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
    data() {
        return {
            /*   Activity 8: Add v-for directive: Use this array to iterate <CommentItem> in the template */
            comments: ['1st comment', '2do comment', '3td comment']
        };
    },
    computed: {
        areCommentsEmpty() {
            return this.comments.length === 0;
        }
    }
  /*   Activity 9: Create computed properties: Create a computed property that validates if comments array has elements */
};
</script>
