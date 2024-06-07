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
              <input v-model="formData.image" name="url" id="url" type="text" class="form-control" />
              <span v-if="v$.formData.image.$invalid" class="form-text text-danger"> Error </span>
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
import { createPost, updatePost } from '../helpers/posts.js';
import { required } from '@vuelidate/validators';
import { ref } from 'vue';
import { globalStore } from '../store/store';
import { alerts } from '../helpers/alerts';

export default {
  name: 'PostForm',
  mixins: [alerts],
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
        image: '',
        category: ''
      },
      categories: [],
      globalStore,
      modalTitle: 'Create'
    };
  },
  async created() {
    await this.getCategories();
  },
  unmounted() {
    globalStore.setPostEditing(null);
  },
  validations() {
    return {
      formData: {
        title: { required },
        description: { required },
        image: { required },
        category: { required }
      }
    };
  },
  watch: {
    'globalStore.postEditing'(newValue, oldValue) {
      if (newValue !== null) {
        this.modalTitle = 'Edit';
        this.formData.title = newValue.title;
        this.formData.description = newValue.description;
        this.formData.category = newValue.category.id;
        this.formData.image = newValue.image;
      } else {
        this.modalTitle = 'Create';
      }
    }
  },
  methods: {
    resetForm() {
      for (let key in this.formData) {
        if (this.formData.hasOwnProperty(key)) {
          this.formData[key] = '';
        }
      }
    },
    async getCategories() {
      this.categories = await getCategories();
    },
    async submitForm() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        console.log('El formulario tiene errores');
      } else {
        try {
          if (this.globalStore.postEditing) {
            let newPost = {
              ...this.formData,
              id: this.globalStore.postEditing.id,
              comments: this.globalStore.postEditing.comments,
              category: this.globalStore.postEditing.category
            };
            await updatePost(newPost);
            globalStore.setPostEditing(null);
            this.showAlert('success', 'Post actualizado con éxito');
          } else {
            let newPost = {
              ...this.formData,
              category: this.categories.find((category) => category.id === this.formData.category),
              comments: []
            };
            await createPost(newPost);
            this.showAlert('success', 'Post creado con exito');
          }
        } catch (error) {
          console.log(error);
          this.showAlert('error', 'Error al crear el post');
        }
        globalStore.setRefreshView(true);
        this.resetForm();
        this.$refs.btnCloseModal.click();
      }
    }
  }
};
</script>
