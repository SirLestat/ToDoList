import { useTheme } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, FormControlLabel, List, ListItem } from "@mui/material";
import { useState } from "react";
import Form from "./Form";
import Layout from "./Layout";
import FormGroup from "@mui/material/FormGroup";

export default function TaskList({ tasks, deleteTask }) {
  const theme = useTheme();
  return (
    <Box>
      <FormGroup>
        {tasks.map((task) => (
          <FormControlLabel
            sx={{ ml: "10px" }}
            key={task.task}
            control={<Checkbox />}
            label={
              <Box>
                {task.task}{" "}
                <Button onClick={() => deleteTask(task)}>X</Button>
              </Box>
            }
          />
        ))}
      </FormGroup>
    </Box>
  );
}
