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
  let post = [];

  await postsApi
    .get(`http://localhost:3031/posts/${id}`)
    .then(({ data }) => {
      post = data;
    })
    .catch((e) => console.error(e));

  return post;
};

export const createPost = async (post) => {
  await postsApi
    .post('http://localhost:3031/posts', post)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((e) => console.error(e));
};

export const updatePost = async (post) => {
  return await postsApi
    .put(`http://localhost:3031/posts/${post.id}`, post)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => console.error(e));
};

export const deletePost = async (id) => {
  await postsApi
    .delete(`http://localhost:3031/posts/${id}`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((e) => console.error(e));
};
