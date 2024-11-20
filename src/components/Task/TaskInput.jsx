import { TextField, useTheme } from "@mui/material";

export function TaskInput({ formik }) {
  const theme = useTheme();
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          autoComplete="off"
          name="task"
          label="Nueva tarea"
          variant="filled"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.task}
          error={formik.touched.task && Boolean(formik.errors.task)}
          helperText={formik.touched.task && formik.errors.task}
          sx={{
            
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.background.paper
                : theme.palette.background.default,
            borderRadius: 1,
            transition: " 1s ",
          }}
        />
      </form>
    </div>
  );
}
