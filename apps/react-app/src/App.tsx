
//import { CategoriesPage, HomePage, LoginPage, PostPage } from "./components/Page";
//import NavBar from "./components/NavBar";
import { PostProvider, AuthProvider } from "./context";
//import { Grid } from "@mui/material";

import { RouterProvider } from "react-router-dom";

import Router from "./Router";

function App() {
  /*const page: string = "HomePage";
  const showPostPage: boolean = true;
  const showCategoriesPage: boolean = true;
  const showLoginPage: boolean = true;*/

  return (
    // ACT 7 - Rneder SnackbarProvider component
    <AuthProvider>
      {/* ACT 7 - Rneder SnackbarProvider component */}
      <PostProvider>
        <RouterProvider router={Router} />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;