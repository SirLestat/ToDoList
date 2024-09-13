import { FormGroup, TextField, useTheme } from "@mui/material";
import { useFormik } from "formik";

import * as Yup from "yup";

const schema = Yup.object().shape({
  task: Yup.string()
    .required("¡Ingresa una tarea valida!")
    .min(3, "La tarea debe tener al menos 3 caracteres")
    .max(100, "La tarea no puede tener mas de 100 caracteres")
    .matches(/^\S.*$/, "La tarea no puede ser solo espacios en blanco"),
});

export default function Form({addTask}) {
  const submitForm = (values) => {
    
    addTask({task: values.task,isComplete: false})
    //localStorage.setItem("task", values.task);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {

      task: "",
   
    },
    onSubmit: submitForm,
    validationSchema: schema,
  });

  const theme = useTheme();
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
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
