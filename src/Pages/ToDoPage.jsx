import { Container, Box, Typography, useTheme, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { TaskList } from "../components/Task/TaskList";
import { ThemeToggle } from "../components/Theme/ThemeToggle";
import { TaskInput } from "../components/Task/TaskInput";
import { useForm } from "../hooks/useForm";
import { useTasks } from "../hooks/useTasks";

export function ToDoPage({ onClickTheme, themeMode, theme }) {
  const { palette } = useTheme();
  const {
    checkedTask,
    cleanTasks,
    deleteTask,
    filter,
    remainingTasks,
    setFilter,
    setTasks,
    showTask,
    tasks,
  } = useTasks();
  const form = useForm({ setTasks });

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
            ? "url(images/dark-theme2.jpg)"
            : "url(images/light-theme.jpg)",
          height: "300px",
          backgroundSize: { xs: "400%", sm: "300%", lg: "cover" },
          backgroundPosition: {
            xs: "top",
            sm: "center",
            md: "center",
            lg: "center",
          },
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
                <ThemeToggle
                  onClickTheme={onClickTheme}
                  themeMode={themeMode}
                />
              </Box>
            </Box>
            <Paper elevation={15} sx={{ mt: 4 }}>
              <TaskInput formik={form} />
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
