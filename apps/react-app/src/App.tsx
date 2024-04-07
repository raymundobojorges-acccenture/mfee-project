import { Grid } from '@mui/material';

import { SnackbarProvider } from "./context/SnackbarProvider"; 
import { PostProvider } from "./context";
import HomePage from './components/HomePage/HomePage';
import PostPage from "./components/PostPage/PostPage";
import Header from './components/Header/Header';

function App() {
  return (
    <SnackbarProvider>
      <PostProvider>
        <Grid
          container
          id="app"
          direction="column"
          height="100vh"
          flexWrap="nowrap"
        >
          <Header/>
          <Grid item flexGrow={1}>
            <HomePage/>
            <PostPage/>
          </Grid>
        </Grid>
      </PostProvider>
    </SnackbarProvider>
  );
}

export default App;
