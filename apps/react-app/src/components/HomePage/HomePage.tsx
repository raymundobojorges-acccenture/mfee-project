import { useContext } from "react";
import CategoryButtonGroup from "../CategoryButtonGroup";
import CreatePostButton from "../CreatePostButton";
import PostList from "../PostList";
import { Post } from "../../types";
import { PostContext } from "../../context";
import Loading from "../Loading";

function HomePage() {
  const categorySelected = "All";
  const {
    posts,
    // getPosts
  } = useContext(PostContext);

  const handleOpenForm = (defaultValues?: Post) => {
    console.log(defaultValues);
  };

  const handleSelectCategory = (category: string) => {
    console.log(category);
  };
  // const handleSelectCategory = (category: string) => {
  // getPosts(category)
  // Activity 6 - Use the useState hook to handle the state of categorySelected
  // };

  // Activity 6 - Use the useEffect hook to call the getPosts function only when the component is rendered for the first time

  if (!posts) return <Loading />;

  return (
    <>
      {/* DONE Activity 1 - Render CreatePostButton, CategoryButtonGroup and PostList */}
      {/* DONE Activity 3 - Send handleOpenForm prop */}
      <CreatePostButton handleOpenForm={handleOpenForm} />
      {/* DONE Activity 3 - Send categorySelected and handleSelectCategory props */}
      <CategoryButtonGroup categorySelected={categorySelected} handleSelectCategory={handleSelectCategory} />
      <PostList posts={posts} handleOpenForm={handleOpenForm} />
    </>
  );
}

export default HomePage;
