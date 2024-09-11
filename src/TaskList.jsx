import { useTheme } from "@emotion/react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, List, ListItem } from "@mui/material";

export default function TaskList() {
  const theme = useTheme();
  return (
    <List
      sx={{
        mt: 5,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        transition: "1s",
        borderRadius: 1,
      }}
    >
      <ListItem>
        <FormControlLabel
          control={<Checkbox checked={false} />}
          label="Test 1"
        />
      </ListItem>
      <ListItem>
        <p>Test 2</p>
      </ListItem>
    </List>
  );
}
