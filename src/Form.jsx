import { TextField, useTheme } from "@mui/material";

export default function Form() {
  const theme = useTheme();
  return (
    <div>
      <TextField
        id="filled-basic"
        label="Nueva tarea"
        variant="filled"
        fullWidth
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.paper
              : theme.palette.background.default,
          borderRadius: 1,
        }}
      />
    </div>
  );
}
