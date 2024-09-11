import React, { useState } from "react";
import Layout from "./Layout";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { LightMode } from "@mui/icons-material";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleBackground = () => {
    setDarkMode(!darkMode ? true : false);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#AD49E1",
      },
      background: {
        default: darkMode ? "#181824" : "#fafafa",
        paper: darkMode ? "#25273c" : "#fafafa",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout themeMode={darkMode} onClickTheme={handleBackground} />
    </ThemeProvider>
  );
}

export default App;
