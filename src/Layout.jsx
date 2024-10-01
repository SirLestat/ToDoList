import {
  ThemeProvider,
  createTheme,
  IconButton,
  Container,
  Box,
  Typography,
  CssBaseline,
  useTheme,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import iconButtonMoon from "./assets/icon-moon.svg";
import iconButtonsun from "./assets/icon-sun.svg";
import Form from "./Form";
import TaskList from "./TaskList";
import { useState } from "react";

export default function Layout({ onClickTheme, themeMode }) {
  const { palette } = useTheme();

  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState(null);

  //Funcion para borrar tareas la tarea seleccionada

  const deleteTask = (deletetask) => {
    const newTasks = tasks.filter((task) => {
      return task !== deletetask;
    });
    setTasks(newTasks);
  };

  //Funcion para marcar tareas como completadas
  const checkedTask = (task) => {
    const updateList = tasks.map((item) =>
      item === task ? { ...item, isComplete: !item.isComplete } : item
    );
    setTasks(updateList);
  };

  return (
    <Box
      sx={{
        backgroundColor: palette.background.default,
        minHeight: "100vh",
        margin: 0,
        transition: "1s ease",
      }}
    >
      <Box
        sx={{
          backgroundImage: themeMode
            ? "url(/images/bg-desktop-dark.jpg)"
            : "url(/images/bg-desktop-light.jpg)",
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "1s ease",
        }}
      />
      <Container maxWidth="sm" sx={{ mt: "-300px" }}>
        <Grid container>
          <Grid size={12} sx={{ color: palette.common.white }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pt={4}
              pb={2}
            >
              <Typography
                variant="h3"
                component="h1"
                textTransform="uppercase"
                fontWeight="bold"
                letterSpacing={16}
                fontSize="40px"
              >
                Todo
              </Typography>
              <Box>
                <IconButton
                  disableTouchRipple={true}
                  onClick={onClickTheme}
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  <img
                    style={{
                      //filter: !themeMode ? "invert(75%)" : "none",
                      transition: "opacity 1s ease-in-out",
                    }}
                    src={themeMode ? iconButtonsun : iconButtonMoon}
                    alt="themeicon"
                  />
                </IconButton>
              </Box>
            </Box>

            <Paper elevation={15} sx={{ mt: 4 }}>
              <Form setTasks={setTasks} />
            </Paper>

            <Paper
              elevation={15}
              sx={{
                mt: "15px",
              }}
            >
              <TaskList
                
                filter={filter}
                themeMode={themeMode}
                tasks={tasks}
                deleteTask={deleteTask}
                checkedTask={checkedTask}
                setFilter={setFilter}
                setTasks={setTasks}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
