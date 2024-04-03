import { useContext, useEffect, useState } from 'react';
import CreatePostButton from '../CreatePostButton';
import CategoryButtonGroup from '../CategoryButtonGroup';
import PostList from '../PostList';
import { Post } from '../../types';

import { PostContext } from '../../context';
import Loading from '../Loading';

function HomePage() {
  const {
    posts,
    getPosts, 
    deletePost
  } = useContext(PostContext);

  const [categorySelected, setCategorySelected] = useState('All');

  const handleOpenForm = (defaultValues?: Post) => {
    console.log(defaultValues);
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
    </>
  );
}

export default HomePage;