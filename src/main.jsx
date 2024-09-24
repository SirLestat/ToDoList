import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
