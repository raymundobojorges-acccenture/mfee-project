<template>
  <div class="col-md-6 mt-5">
    <form>
      <input type="text" class="form-control" placeholder="Write a comment" :class="{ 'is-invalid': false }"/>
      <span class="form-text text-danger"> Error </span>
    </form>
  </div>
  <div class="col-md-6">
    <button class="btn btn-primary mt-2" v-on:click="addComment()">Add</button>
  </div>
</template>
<script>
export default {
  name: 'NewComment',
  methods: {
    addComment() {

    }
  }
}
</script>
<!-- Activity 16: Forms -->
