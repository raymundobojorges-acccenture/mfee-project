<template>
  <div class="col-md-6 mt-5">
    <form>
      <input v-model="formData.comment" type="text" class="form-control" placeholder="Write a comment" :class="{'is-invalid': v$.formData.comment.$invalid}"/>

      <span v-if="v$.formData.comment.$invalid" class="form-text text-danger"> Error </span>
    </form>
  </div>
  <div class="col-md-6">
    <button @click="addComment" class="btn btn-primary mt-2">Add</button>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data() {
    return {
      formData: {
        comment: ""
      }
    }
  },
  validations() {
    return {
      formData: {
        comment: { required }
      }
    }
  },
  setup() {
    return { v$: useVuelidate() };
  },
  methods: {
    addComment(){
      this.v$.$touch();

      if (this.v$.$invalid) {
        console.log("Error in Comment Form");
      } else {
        this.$emit('addComment', { comment: this.formData.comment });
      }

      this.formData.comment = "";
      this.v$.reset();
    }
  },
}
</script>
<!-- Activity 16: Forms -->
