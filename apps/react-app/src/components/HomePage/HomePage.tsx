import { useContext, useState, useEffect } from "react";
import CategoryButtonGroup from "../CategoryButtonGroup";
import CreatePostButton from "../CreatePostButton";
import PostList from "../PostList";
import { Post } from "../../types";
import { PostContext } from "../../context";
import Loading from "../Loading";
import Form from "../Form";

function HomePage() {
  const [categorySelected, setCategorySelected] = useState("All");
  const {
    posts,
    getPosts
  } = useContext(PostContext);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpenForm = (defaultValues?: Post) => {
    setOpen(true);
    if (defaultValues) setSelectedPost(defaultValues);
  };

  const handleSelectCategory = (category: string) => {
      //DONE Activity 6 - Use the useState hook to handle the state of categorySelected

    setCategorySelected(category);
  };

  useEffect(() => {
    getPosts(categorySelected);
  }, [categorySelected, getPosts]);

  // DONE Activity 6 - Use the useEffect hook to call the getPosts function only when the component is rendered for the first time

  if (!posts) return <Loading />;

  return (
    <>
      {/* DONE Activity 1 - Render CreatePostButton, CategoryButtonGroup and PostList */}
      {/* DONE Activity 3 - Send handleOpenForm prop */}
      <CreatePostButton handleOpenForm={handleOpenForm} />
      {/* DONE Activity 3 - Send categorySelected and handleSelectCategory props */}
      <CategoryButtonGroup categorySelected={categorySelected} handleSelectCategory={handleSelectCategory} />
      <PostList posts={posts} handleOpenForm={handleOpenForm} />
      <Form
        open={open}
        post={selectedPost}
        categorySelected={categorySelected}
        setOpen={setOpen}
        setSelectedPost={setSelectedPost}
      />
    </>
  );
}

export default HomePage;
