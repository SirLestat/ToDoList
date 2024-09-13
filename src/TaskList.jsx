import { useTheme } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, FormControlLabel, List, ListItem } from "@mui/material";
import { useState } from "react";
import Form from "./Form";
import Layout from "./Layout";

export default function TaskList({ tasks }) {
  const theme = useTheme();
  return (
    <Box>
      <List >
        {tasks.map((task) => (<ListItem key={task.id}>{task.task}</ListItem>))}
      </List>
    </Box>
  );
}
