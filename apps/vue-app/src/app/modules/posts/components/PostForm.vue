<template>
  <div class="modal fade" id="createPostModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title">{{ action }} Post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="reset()"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group pb-3">
              <label>Title</label>
              <input type="text" class="form-control" v-model="post.title" :class="v$.post.title.$error === true ? 'is-invalid' : ''" />
              <span class="form-text text-danger" v-for="error of v$.post.title.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <div class="form-group pb-3">
              <label>Description</label>
              <textarea
                class="form-control"
                rows="2"
                v-model="post.description"
                :class="v$.post.description.$error === true ? 'is-invalid' : ''"
              ></textarea>
              <span class="form-text text-danger" v-for="error of v$.post.description.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <div class="form-group pb-3">
              <label>Category</label>
              <select class="form-select" v-model="post.categoryId" :class="v$.post.categoryId.$error === true ? 'is-invalid' : ''">
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
              <span class="form-text text-danger" v-for="error of v$.post.categoryId.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <div class="form-group">
              <label>URL of the image</label>
              <input type="text" class="form-control" v-model="post.image" :class="v$.post.image.$error === true ? 'is-invalid' : ''" />
              <span class="form-text text-danger" v-for="error of v$.post.image.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="btnCloseModal" @click="reset()">Cancel</button>
          <button class="btn btn-primary" @click="submit()">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import { getCategories } from '../helpers/categories';
import { store } from '../store/store';
import { createPost, updatePost } from '../helpers/posts';
import { alerts } from '../helpers/alerts';

export default {
  /*   Activity 5: Add created hook */
  /*   Activity 6: Add unmounted hook */
  mixins: [alerts],
  data() {
    return {
      v$: useVuelidate(),
      action: 'Create',
      post: {
        id: null,
        title: null,
        description: null,
        categoryId: null,
        image: null,
        comments: []
      },
      categories: [],
      store
    };
  },
  validations() {
    return {
      post: {
        title: {
          required: helpers.withMessage('Title field is required.', required),
          $autoDirty: true
        },
        description: {
          required: helpers.withMessage('Description field is required.', required),
          $autoDirty: true
        },
        categoryId: {
          required: helpers.withMessage('Category field is required.', required),
          $autoDirty: true
        },
        image: {
          required: helpers.withMessage('Image field is required.', required),
          $autoDirty: true
        }
      }
    };
  },
  methods: {
    async submit() {
      const isValid = await this.v$.$validate();

      if (!isValid) {
        this.v$.$touch();
      } else {
        const { title, description, categoryId, image, comments } = this.post;
        const [categorySelected] = this.categories.filter(({ id }) => id === categoryId);
        const post = {
          title,
          description,
          image,
          category: categorySelected,
          comments: comments ? comments : []
        };
        console.log('🚀 ~ submit ~ post:', post);

        this.savePost(post);
      }
    },
    async savePost(post) {
      let status;

      if (this.action === 'Edit') {
        status = await updatePost({ ...post, id: this.post.id });
      } else {
        status = await createPost(post);
      }

      if (status) {
        this.showAlert('success', 'The post has been saved');
        this.store.getPosts();
      } else {
        this.showAlert('error', "The post couldn't be saved");
      }

      this.action = 'Create';
      this.$refs.btnCloseModal.click();
    },
    async getCategories() {
      this.categories = await getCategories();
    },
    reset() {
      this.post = {
        id: null,
        title: null,
        description: null,
        categoryId: null,
        image: null
      };
      this.v$.$reset();
    }
  },
  watch: {
    'store.postEditing'(newValue) {
      if (newValue) {
        console.log('🚀 ~ newValue:', newValue);
        this.action = 'Edit';

        const { id, title, description, image, category, comments } = newValue;

        this.post = {
          id,
          title,
          description,
          image,
          categoryId: category.id,
          comments
        };
      } else {
        this.action = 'Create';
      }
    }
  },
  created() {
    this.getCategories();
  },
  unmounted() {
    this.store.setPostEditing(null);
  }
};
</script>
