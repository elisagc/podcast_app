import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PodcastSearch from "./pages/PodcastSearch";
import PodcastView from "./pages/PodcastView";
import theme from "./theme";
import Footer from "./views/Footer";
import Header from "./views/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/podcast-search",
      element: <PodcastSearch />,
    },
    {
      path: "/podcast-view",
      element: <PodcastView />,
    },
    {
      path: "*",
      element: <Navigate to={"/podcast-search"} />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="main-container">
        <div id="content">
          <Header />
          <RouterProvider router={router} />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
