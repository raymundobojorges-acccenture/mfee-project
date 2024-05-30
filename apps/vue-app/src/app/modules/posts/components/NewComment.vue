<template>
  <div class="col-md-6 mt-5">
    <form>
      <input
        type="text"
        class="form-control"
        placeholder="Write a comment"
        v-model="comment"
        :class="v$.comment.$error === true ? 'is-invalid' : ''"
      />
      <span class="form-text text-danger" v-for="error of v$.comment.$errors" :key="error.$uid">
        {{ error.$message }}
      </span>
    </form>
  </div>
  <div class="col-md-6">
    <button class="btn btn-primary mt-2" @click="addComment()">Add</button>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';

export default {
  name: 'NewComment',
  data() {
    return {
      v$: useVuelidate(),
      comment: null
    };
  },
  validations() {
    return {
      comment: {
        required: helpers.withMessage('Please add a comment.', required),
        $autoDirty: true
      }
    };
  },
  methods: {
    async addComment() {
      const isValid = await this.v$.$validate();

      if (!isValid) {
        this.v$.$touch();
      } else {
        this.$emit('newComment', this.comment);
        this.comment = null;
        this.v$.$reset();
      }
    }
  }
};
</script>
