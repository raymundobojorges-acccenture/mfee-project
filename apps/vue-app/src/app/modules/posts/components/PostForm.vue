<template>
  <div class="modal fade" id="createPostModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title">{{ action }} Post</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="resetForm()"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit()">
            <div class="form-group pb-3">
              <label>Title</label>
              <input v-model="formData.title" type="text" class="form-control" />
              <span v-if="v$.formData.title.$invalid" class="form-text text-danger">
                Error
              </span>
            </div>
            <div class="form-group pb-3">
              <label>Description</label>
              <textarea
                v-model="formData.description"
                class="form-control"
                rows="2"
              ></textarea>
              <span v-if="v$.formData.description.$invalid" class="form-text text-danger">
                Error
              </span>
            </div>
            <div class="form-group pb-3">
              <label>Category</label>
              <select v-model="formData.categoryId" class="form-select">
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
              <span v-if="v$.formData.categoryId.$invalid" class="form-text text-danger">
                Error
              </span>
            </div>
            <div class="form-group">
              <label>URL of the image</label>
              <input v-model="formData.image" type="text" class="form-control" />
              <span v-if="v$.formData.image.$invalid" class="form-text text-danger">
                Error
              </span>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                ref="btnCloseModal"
                @click="resetForm()"
              >
                Cancel
              </button>
              <button class="btn btn-primary" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { getCategories } from "../helpers/categories.js";
import { createPost, updatePost } from "../helpers/posts.js";
import { store } from '../store/store.js';

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      action: "Create",
      modalTitle: "Action",
      categories: [],
      formData: {
        id: "",
        title: "",
        description: "",
        categoryId: "",
        image: "",
        comments: [],
      },
      store,
    };
  },
  validations() {
    return {
      formData: {
        title: { required },
        description: { required },
        categoryId: { required },
        image: { required },
      },
    };
  },
  watch: {
    'store.postEditing'(newValue) {
      if(newValue) {
        this.action = 'Edit';
        this.formData.id = newValue.id;
        this.formData.title = newValue.title;
        this.formData.description = newValue.description;
        this.formData.image = newValue.image;
        this.formData.comments = newValue.comments;
        this.formData.categoryId = newValue.category.id;
      }
      else {
        this.action = 'Create'
      }
    }
  },
  created() {
    this.getCategories();
  },
  unmounted() {
    console.log('unmount')
    this.store.setPostEditing(null);
  },
  methods: {
    async getCategories() {
      this.categories = await getCategories();
    },
    async handleSubmit() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        console.log("Error in Post Form");
      } else {
        let post = {
          id: this.formData.id != "" ? this.formData.id : Date.now().toString(),
          title: this.formData.title,
          description: this.formData.description,
          image: this.formData.image,
          category: {
            id: this.formData.categoryId,
            name: this.categories.find((category) => category.id === this.formData.categoryId).name,
          },
          comments: this.formData.comments,
        };

        if (this.store.postEditing) {
          await updatePost(post);
        }
        else {
          await createPost(post);
        }
        this.store.getPosts();
        this.resetForm();
      }
    },
    resetForm() {
      this.$refs.btnCloseModal.click();

      this.formData = {
        id: "",
        title: "",
        description: "",
        categoryId: "",
        image: "",
        comments: [],
      };
    }
  },
};
</script>
