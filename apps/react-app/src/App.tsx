import { Grid } from "@mui/material";

import { CategoriesPage, HomePage, LoginPage, PostPage } from "./components/Page";
// import { PageContainer } from "./components/Page/LoginPage/LoginPage.styles";
import NavBar from "./components/NavBar";

function App() {
  const page: string = "HomePage";
  const showPostPage: boolean = true;
  const showCategoriesPage: boolean = false;
  const showLoginPage: boolean = false;
  return (
    <Grid container id="app" direction="column" height="100vh" wrap="nowrap">
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
          { showPostPage ?  <PostPage/> : '' }
          { showCategoriesPage ? <CategoriesPage/> : '' }
          {/* ACT 2 - Move the following content to a new component called LoginPage and render it*/}
          {/* ACT 4 - Add conditions to render PostPage, LoginPage and CategoriesPage components */}
          { showLoginPage ? <LoginPage/> : '' }
          {/* <PageContainer container>
            Login Page
            <Grid item md={4} xs={4} lg={4}>
              //Form
            </Grid>
          </PageContainer> */}
        </Grid>
      </Grid>
  );
}

export default App;