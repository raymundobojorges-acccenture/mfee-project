import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "./context/SnackbarProvider";
import Router from "./components/Router";
import { PostProvider } from "./context";

function App() {
  return (
    // Activity 7 - Render SnackbarProvider
    <SnackbarProvider>
    <PostProvider>
      <RouterProvider router={Router} />
    </PostProvider>
    </SnackbarProvider>
  );
}

export default App;
