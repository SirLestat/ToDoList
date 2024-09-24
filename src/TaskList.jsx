import { useTheme } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import { Box, FormControlLabel, IconButton } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import iconCross from "./assets/icon-cross.svg";

export default function TaskList({ tasks, deleteTask, checkedTask }) {
  const theme = useTheme();
  return (
    <Box>
      <FormGroup>
        {tasks.map((task) => (
          <FormControlLabel
            sx={{ ml: "10px" }}
            key={task.task}
            control={
              <Checkbox
                checked={task.isComplete}
                onChange={() => checkedTask(task)}
              />
            }
            label={
              <Box
                sx={{
                  textDecoration: task.isComplete && "line-through",
                }}
              >
                {task.task}{" "}
                <IconButton sx={{}} onClick={() => deleteTask(task)} >
                  <img src={iconCross} alt="cross" />
                </IconButton>
              </Box>
            }
          />
        ))}
      </FormGroup>
    </Box>
  );
}
