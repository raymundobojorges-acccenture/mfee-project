<template>
  <div class="col-md-6 mt-5">
    <form>
      <input
        v-model="formData.comment"
        name="comment"
        id="comment"
        type="text"
        class="form-control"
        placeholder="Write a comment"
        :class="{ 'is-invalid': v$.formData.comment.$invalid }"
      />
      <span v-if="v$.formData.comment.$invalid" class="form-text text-danger"> Error </span>
    </form>
  </div>
  <div class="col-md-6">
    <button class="btn btn-primary mt-2" v-on:click="addComment()">Add</button>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  name: 'NewComment',
  data() {
    return {
      v$: useVuelidate(),
      formData: {
        comment: ''
      }
    };
  },
  emits: ['addComment'],
  validations() {
    return {
      formData: {
        comment: { required }
      }
    };
  },
  methods: {
    addComment() {
      if (this.v$.formData.$invalid) return;
      this.$emit('addComment', { comment: this.formData.comment });
      this.formData.comment = null;
      return;
    }
  }
};
</script>
<!-- Activity 16: Forms -->
