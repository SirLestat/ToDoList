import { Box, FormGroup } from "@mui/material";
import { TaskItem } from "./TaskItem";
import { TaskFilter } from "../Filter/TaskFilter";

export function TaskList({
  checkedTask,
  cleanTasks,
  deleteTask,
  filter,
  remainingTasks,
  setFilter,
  showTask,
  theme,
  themeMode,
}) {
  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        borderRadius: 1,
        transition: "1s",
      }}
    >
      <FormGroup>
        {showTask.map((task) => (
          <TaskItem
            key={task.task}
            task={task}
            theme={theme}
            themeMode={themeMode}
            checkedTask={checkedTask}
            deleteTask={deleteTask}
          />
        ))}
      </FormGroup>
      <TaskFilter
        cleanTasks={cleanTasks}
        filter={filter}
        remainingTasks={remainingTasks}
        setFilter={setFilter}
        theme={theme}
      />
    </Box>
  );
}