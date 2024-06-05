
import { CategoriesPage, HomePage, LoginPage, PostPage } from "./components/Page";
import NavBar from "./components/NavBar";
import { PostProvider, SnackbarProvider } from "./context";
import { Grid } from "@mui/material";

function App() {
  const page: string = "HomePage";
  const showPostPage: boolean = true;
  const showCategoriesPage: boolean = true;
  const showLoginPage: boolean = false;

  return (
    // ACT 7 - Rneder SnackbarProvider component
    <SnackbarProvider>
    <PostProvider>
        <Grid
          container
          id="app"
          direction="column"
          height="100vh"
          wrap="nowrap"
        >
          <NavBar />
          <Grid
            container
            item
            wrap="nowrap"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "calc(100vh - 84px)",
            }}
          >
            {page === "HomePage" && <HomePage />}
            {/* ACT 1 - Render PostPage and CategoriesPage components */}
            {/* ACT 2 - Move the following content to a new component called LoginPage and render it*/}
            {/* ACT 4 - Add conditions to render PostPage, LoginPage and CategoriesPage components */}
            { showPostPage ?  <PostPage/> : '' }
          { showCategoriesPage ? <CategoriesPage/> : '' }
          { showLoginPage ? <LoginPage/> : '' }
          </Grid>
        </Grid>
    </PostProvider>
    </SnackbarProvider>
  );
}

export default App;