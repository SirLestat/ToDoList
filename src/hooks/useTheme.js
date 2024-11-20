import { createTheme } from "@mui/material";
import { useState } from "react";

export const useTheme = () => {
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

  return { handleBackground, theme, darkMode };
};
