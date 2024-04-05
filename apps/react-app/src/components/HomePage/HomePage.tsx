import { useContext, useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

import CreatePostButton from '../CreatePostButton';
import CategoryButtonGroup from '../CategoryButtonGroup';
import PostList from '../PostList';
import { Post } from '../../types';
import { PostContext } from '../../context';
import Loading from '../Loading';
import Form from "../Form";

function HomePage() {
  const {
    posts,
    getPosts, 
    deletePost
  } = useContext(PostContext);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [open, setOpen] = useState(false);

  const [categorySelected, setCategorySelected] = useState('All');

  const handleOpenForm = (defaultValues?: Post) => {
    setOpen(true);
    if (defaultValues) setSelectedPost(defaultValues);
  };

  const handleSelectCategory = (category: string) => {
    setCategorySelected(category);
 };

  useEffect(() => {
    getPosts(categorySelected);
  }, [categorySelected]);

  if (!posts) return <Loading />;


  return (
    <>
      <CreatePostButton handleOpenForm={handleOpenForm} />
      <CategoryButtonGroup categorySelected={categorySelected} handleCategorySelect={handleSelectCategory} />
      <PostList posts={posts} handleOpenForm={handleOpenForm} />
      <Form
        open={open}
        post={selectedPost}
        setOpen={setOpen}
        setSelectedPost={setSelectedPost}
      />
    </>
  );
}

export default HomePage;