import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";



const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#004d40',
    },
    secondary: {
      main: '#bf360c',
    },
  }
})
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
    
  </StrictMode>
);
