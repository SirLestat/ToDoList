import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import AppCopy from "./AppCopy.jsx";
import App from "./App.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />

  </StrictMode>
);
