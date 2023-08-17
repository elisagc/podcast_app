import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    body1: {
      fontWeight: 500,
      fontSize: "1rem",
    },
    body2: {
      fontWeight: 600,
      fontSize: "0.875rem",
      color: "#5a5a5a",
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
