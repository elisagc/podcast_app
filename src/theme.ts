import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    body1: {
      fontWeight: 600,
      fontSize: "0.875rem",
      color: "rgba(255, 255, 255, 0.3)",
    },
    body2: {
      fontWeight: 500,
      fontSize: "1rem",
    },
  },
  palette: {
    mode: "dark",
    background: {
      paper: "#1a1a1a",
    },
  },
});

export default theme;
