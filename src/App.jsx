import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToDoPage } from "./Pages/ToDoPage";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { darkMode, handleBackground, theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToDoPage
        themeMode={darkMode}
        onClickTheme={handleBackground}
        theme={theme}
      />
    </ThemeProvider>
  );
}

export default App;
