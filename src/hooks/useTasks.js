import { useMemo, useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(null);

  const deleteTask = (deletetask) => {
    const newTasks = tasks.filter((task) => {
      return task !== deletetask;
    });
    setTasks(newTasks);
  };

  //Funcion para marcar tareas como completadas
  const checkedTask = (task) => {
    const updateList = tasks.map((item) =>
      item === task ? { ...item, isComplete: !item.isComplete } : item
    );
    setTasks(updateList);
  };

  //funcion para aplicar filtros
  const showTask = useMemo(
    () =>
      filter === null
        ? tasks
        : tasks.filter((task) => (filter ? task.isComplete : !task.isComplete)),
    [filter, tasks]
  );

  //Funcion para limpiar todas las tareas completadas
  const cleanTasks = () => {
    const cleanedTaskList = tasks.filter((task) => !task.isComplete);
    setTasks(cleanedTaskList);
  };

  //Contador de tareas no completadas
  const remainingTasks = showTask.filter((task) => !task.isComplete).length;

  return {
    tasks,
    setTasks,
    filter,
    setFilter,
    deleteTask,
    checkedTask,
    showTask,
    cleanTasks,
    remainingTasks,
  };
};
