import postsApi from '../api/posts/postsApi';

export const getPosts = async () => {
  let posts = [];

  await postsApi
    .get('http://localhost:3031/posts')
    .then(({ data }) => {
      posts = data;
    })
    .catch((e) => console.error(e));

  return posts;
};
export const getPostById = async (id) => {
  let post;

  await postsApi
    .get(`http://localhost:3031/posts/${id}`)
    .then(({ data }) => {
      post = data;
    })
    .catch((e) => console.error(e));

  return post;
};

export const createPost = async (post) => {
  let status;
  await postsApi
    .post(`http://localhost:3031/posts`, post)
    .then(() => {
      status = true;
    })
    .catch((e) => {
      status = false;
      console.error(e);
    });

  return status;
};

export const updatePost = async (post) => {
  let status;
  await postsApi
    .put(`http://localhost:3031/posts/${post.id}`, post)
    .then(() => {
      status = true;
    })
    .catch((e) => {
      status = false;
      console.error(e);
    });

  return status;
};

export const deletePost = async (id) => {
  let status;
  await postsApi
    .delete(`http://localhost:3031/posts/${id}`)
    .then(() => {
      status = true;
    })
    .catch((e) => {
      status = false;
      console.error(e);
    });

  return status;
};
/* Activity 15: Using axios */
