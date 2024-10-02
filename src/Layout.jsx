import {
  IconButton,
  Container,
  Box,
  Typography,
  useTheme,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import iconButtonMoon from "./assets/icon-moon.svg";
import iconButtonsun from "./assets/icon-sun.svg";
import Form from "./Form";
import TaskList from "./TaskList";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Layout({ onClickTheme, themeMode, theme }) {
  const { palette } = useTheme();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(null);

  //Reglas para el input
  const schema = Yup.object().shape({
    task: Yup.string()
      .matches(/^\S.*$/, "La tarea no puede ser solo espacios en blanco")
      .max(100, "La tarea no puede tener mas de 100 caracteres")
      .min(3, "La tarea debe tener al menos 3 caracteres")
      .required("¡Ingresa una tarea valida!"),
  });

  // Funcion para agregar tarea, validando que no se repita
  const addTask = (values) => {
    setTasks((task) => {
      const existTask = task.find(
        (item) => item.task.toLowerCase() === values.task.toLowerCase()
      );

      if (existTask) {
        formik.setFieldError("task", "La tarea ya existe");
        return task;
      }

      formik.resetForm();

      return [{ task: values.task, isComplete: false }, ...task];
    });

    //localStorage.setItem("task", values.task);
  };

  const formik = useFormik({
    initialValues: {
      task: "",
      isComplete: false,
    },
    onSubmit: addTask,
    validationSchema: schema,
  });

  //Funcion para borrar la tarea seleccionada
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

  //funcion para aplicar filtros
  const showTask =
    filter === null
      ? tasks
      : tasks.filter((task) => (filter ? task.isComplete : !task.isComplete));

  //Funcion para limpiar todas las tareas completadas
  const cleanTasks = () => {
    const cleanedTaskList = tasks.filter((task) => !task.isComplete);
    setTasks(cleanedTaskList);
  };

  //Contador de tareas no completadas
  const remainingTasks = showTask.filter((task) => !task.isComplete).length;

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
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              pb={2}
              pt={4}
            >
              <Typography
                component="h1"
                fontSize="40px"
                fontWeight="bold"
                letterSpacing={16}
                textTransform="uppercase"
                variant="h3"
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
                      transition: "opacity 1s ease-in-out",
                    }}
                    src={themeMode ? iconButtonsun : iconButtonMoon}
                    alt="themeicon"
                  />
                </IconButton>
              </Box>
            </Box>
            <Paper elevation={15} sx={{ mt: 4 }}>
              <Form formik={formik} />
            </Paper>
            <Paper
              elevation={15}
              sx={{
                mt: "15px",
              }}
            >
              <TaskList
                checkedTask={checkedTask}
                cleanTasks={cleanTasks}
                deleteTask={deleteTask}
                filter={filter}
                remainingTasks={remainingTasks}
                setFilter={setFilter}
                setTasks={setTasks}
                showTask={showTask}
                tasks={tasks}
                theme={theme}
                themeMode={themeMode}
                useTheme={useTheme}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
