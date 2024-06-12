<template>
  <div class="col-md-6 mt-5">
    <form>
      <input type="text" class="form-control" placeholder="Write a comment" :class="{'is-invalid': false}"/>

      <span class="form-text text-danger"> Error </span>
    </form>
  </div>
  <div class="col-md-6">
    <button @click="addComment" class="btn btn-primary mt-2">Add</button>
  </div>
</template>

<script>
export default {
  methods: {
    addComment(){}
  },
}
</script>
<!-- Activity 16: Forms -->
