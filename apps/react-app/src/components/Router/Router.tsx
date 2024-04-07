import { createBrowserRouter } from "react-router-dom";
import Page, { HomePage } from "../Page";
import PostPage from "../PostPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Page page={<HomePage />} />,
  },
  {
    path: "/post/:postId",
    element: <PostPage/>
  }
  // Activity 10 - Render the PostPage component with the dynamic postId and the NotFoundPage component as the default page in case of route errors
]);

export default Router;
