import { useFormik } from "formik";
import * as Yup from "yup";

export const useForm = ({ setTasks }) => {
  const schema = Yup.object().shape({
    task: Yup.string()
      .matches(/^\S.*$/, "La tarea no puede ser solo espacios en blanco")
      .max(100, "La tarea no puede tener mas de 100 caracteres")
      .min(3, "La tarea debe tener al menos 3 caracteres")
      .required("¡Ingresa una tarea valida!"),
  });
  const addTask = (values) => {
    setTasks((task) => {
      const existTask = task.find(
        (item) => item.task.toLowerCase() === values.task.toLowerCase()
      );

      if (existTask) {
        form.setFieldError("task", "La tarea ya existe");
        return task;
      }

      form.resetForm();

      return [{ task: values.task, isComplete: false }, ...task];
    });
  };
  const form = useFormik({
    initialValues: {
      task: "",
      isComplete: false,
    },
    onSubmit: addTask,
    validationSchema: schema,
  });

  return form;
};
