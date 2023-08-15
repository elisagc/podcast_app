import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PodcastSearch from "./pages/PodcastSearch";
import PodcastCollection from "./pages/PodcastCollection";
import theme from "./theme";
import Footer from "./views/Footer";
import Header from "./views/Header";
import { PodcastProvider } from "./context/PodcastContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <PodcastProvider>
          <div id="main-container">
            <div id="content">
              <Header />
              <Routes>
                <Route path="/podcast-search" element={<PodcastSearch />} />
                <Route
                  path="/podcast-collection"
                  element={<PodcastCollection />}
                />
                <Route path="*" element={<Navigate to="/podcast-search" />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </PodcastProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
