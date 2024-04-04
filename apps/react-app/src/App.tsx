import { Grid } from '@mui/material';

import HomePage from './components/HomePage/HomePage'
import PostPage from "./components/PostPage/PostPage"
import Header from './components/Header/Header';


function App() {
  return (
    <Grid container id="app" direction="column" height="100vh" flexWrap="nowrap">
      {/* DONE Activity 2 - Move all Container content to Header component */}
      <Header/>
      <Grid item flexGrow={1}>
        {/* DONE Activity 1 - Render HomePage and PostPage */}
        <HomePage/>
        <PostPage/>
      </Grid>
    </Grid>
  );
}

export default App;
