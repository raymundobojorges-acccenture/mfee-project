import { createBrowserRouter } from "react-router-dom";
import Page, { CategoriesPage, HomePage, PostPage, LoginPage, NotFoundPage } from "../components/Page";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute route={<Page page={<HomePage />} />} />,
  },
  // ACT 10 - Render PostPage component inside a private route and mark postID as a params
  // ACT 10 - Render CategoriesPage component inside a private route
  // ACT 10 - Render LoginPage component inside a private route
  // ACT 10 - Render NotFoundPage component for undefined routes
  {
    path : "/post/:postID",
    element: <PrivateRoute route={<Page page={<PostPage/>} />} />
  },
  {
    path : "/categories",
    element: <PrivateRoute route={<Page page={<CategoriesPage/>} />} />
  },
  {
    path : "/login",
    element: <PrivateRoute route={<Page page={<LoginPage/>} />} />
  },
  {
    path : "*",
    element: <PrivateRoute route={<Page page={<NotFoundPage/>} />} />
  },      
]);

export default Router;
