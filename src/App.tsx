import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GuardRoute from "./components/Guard";
import { PATH_EPISODE, PATH_SEARCH } from "./contants";
import { PlayerProvider } from "./context/PlayerContext";
import { PodcastProvider } from "./context/PodcastContext";
import PodcastEpisodes from "./pages/PodcastEpisodes";
import PodcastSearch from "./pages/PodcastSearch";
import theme from "./theme";
import Footer from "./views/Footer";
import Header from "./views/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <PodcastProvider>
          <PlayerProvider>
            <div id="main-container">
              <div id="content">
                <Header />
                <GuardRoute>
                  <Routes>
                    <Route path={PATH_SEARCH} element={<PodcastSearch />} />
                    <Route path={PATH_EPISODE} element={<PodcastEpisodes />} />
                    <Route path="*" element={<Navigate to={PATH_SEARCH} />} />
                  </Routes>
                </GuardRoute>
              </div>
            </div>
            <Footer />
          </PlayerProvider>
        </PodcastProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
