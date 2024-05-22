import React, { createContext, useState, useCallback, useContext } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

import axios from '../api/axios';
import { Post } from '../types';
import { SnackbarContext } from './SnackbarProvider';

interface PostContextProps {
  posts: Post[] | null;
  getPosts: (category: string) => void;
  deletePost: (postId: string) => void;
}

interface PostProviderProps {
  children: React.JSX.Element;
}

export const PostContext = createContext<PostContextProps>({
  posts: [] || null,
  getPosts: () => {},
  deletePost: () => {}
});

export function PostProvider({ children }: PostProviderProps): React.JSX.Element {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const { createAlert } = useContext(SnackbarContext);

  const getPosts = useCallback((category: string) => {
    axios({
      method: 'get',
      signal: AbortSignal.timeout(5000)
    })
      .then((response: AxiosResponse) => {
        const selectedCategory = response.data.filter((post: Post) => post.category === category);

        const newPosts = category === 'All' ? response.data : selectedCategory;
        setPosts(newPosts);
      })
      .catch((error: AxiosError) => {
        console.error(`${error}`);
        createAlert('error', 'error');
      });
  }, []);

  const deletePost = useCallback(
    (postId: string) => {
      axios({
        method: 'delete',
        url: "http://localhost:3000/posts",
        signal: AbortSignal.timeout(5000)
      })
        .then((response: AxiosResponse) => {
          if (response.status === 200 || response.status === 201) {
            getPosts('All');
            createAlert('success', 'error');
          }
        })
        .catch((error: AxiosError) => {
          console.error(`${error}`);
          createAlert('success', 'error');
        });
    },
    [getPosts]
  );

  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts,
        deletePost
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
