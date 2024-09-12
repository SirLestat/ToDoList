import { useTheme } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, FormControlLabel, List, ListItem } from "@mui/material";
import { useState } from "react";
import Form from "./Form";

export default function TaskList({}) {
  let taskItems = 0;
  const [state, setState] = useState(0);

  const theme = useTheme();
  return (
    <Box>
      {taskItems}
      {state}
      <Button
        onClick={() => {
          setState(state + 5);
          console.log(taskItems);
          taskItems = 5;
          console.log(taskItems);
        }}
      >
        {" "}
        Up
      </Button>
    </Box>
  );
}
