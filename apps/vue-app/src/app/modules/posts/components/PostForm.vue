<template>
  <div class="modal fade" id="createPostModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title">{{ modalTitle }} Post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="form-group pb-3">
              <label>Title</label>
              <input v-model="formData.title" name="title" id="title" type="text" class="form-control" />
              <span v-if="v$.formData.title.$invalid" class="form-text text-danger"> Error </span>
            </div>
            <div class="form-group pb-3">
              <label>Description</label>
              <textarea v-model="formData.description" name="description" id="description" class="form-control" rows="2"></textarea>
              <span v-if="v$.formData.description.$invalid" class="form-text text-danger"> Error </span>
            </div>
            <div class="form-group pb-3">
              <label>Category</label>
              <select v-model="formData.category" name="category" id="category" class="form-select">
                <option v-for="category in this.categories" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
              <span v-if="v$.formData.category.$invalid" class="form-text text-danger"> Error </span>
            </div>
            <div class="form-group">
              <label>URL of the image</label>
              <input v-model="formData.imageUrl" name="url" id="url" type="text" class="form-control" />
              <span v-if="v$.formData.imageUrl.$invalid" class="form-text text-danger"> Error </span>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="btnCloseModal">Cancel</button>
              <button class="btn btn-primary" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { getCategories } from '../helpers/categories.js';
import { createPost } from '../helpers/posts.js';
import { required } from '@vuelidate/validators';
import { ref } from 'vue';

let modalTitle = 'Action';
export default {
  name: 'PostForm',
  setup() {
    const btnCloseModal = ref(null);

    return {
      btnCloseModal
    };
  },
  data() {
    return {
      v$: useVuelidate(),
      formData: {
        title: '',
        description: '',
        imageUrl: '',
        category: ''
      },
      categories: []
    };
  },
  async created() {
    await this.getCategories();
  },
  unmounted() {},
  validations() {
    return {
      formData: {
        title: { required },
        description: { required },
        imageUrl: { required },
        category: { required }
      }
    };
  },
  methods: {
    async getCategories() {
      this.categories = await getCategories();
    },
    async submitForm() {
      
      this.v$.$touch();
      if (this.v$.$invalid) {
        console.log('El formulario tiene errores');
      } else {
        await createPost(this.formData);
        this.$refs.btnCloseModal.click();
      }
    }
  }
};
</script>
