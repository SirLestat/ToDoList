import React, { useState } from "react";
import Layout from "./Layout";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleBackground = () => {
    setDarkMode(!darkMode ? true : false);

  const handleIcon = () => {
    
  }
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout image = {darkMode} onClickTheme={handleBackground} />
    </ThemeProvider>
  );
}

export default App;
