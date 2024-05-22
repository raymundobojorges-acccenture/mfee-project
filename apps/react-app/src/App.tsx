import { Grid } from '@mui/material';

import HomePage from './components/HomePage';
import PostPage from './components/PostPage';
import Header from './components/Header/Header';
import { Container } from './components/Header/Header.styles';
import { PostProvider, SnackbarProvider } from './context';

function App() {
  return (
    <SnackbarProvider>
      <PostProvider>
        <Grid container id="app" direction="column" height="100vh" flexWrap="nowrap">
          <Container container>
            <Header />
          </Container>
          <Grid item flexGrow={1}>
            <HomePage />
            <PostPage />
          </Grid>
        </Grid>
      </PostProvider>
    </SnackbarProvider>
  );
}

export default App;
