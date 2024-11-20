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

  
  const checkedTask = (task) => {
    const updateList = tasks.map((item) =>
      item === task ? { ...item, isComplete: !item.isComplete } : item
    );
    setTasks(updateList);
  };

  
  const showTask = useMemo(
    () =>
      filter === null
        ? tasks
        : tasks.filter((task) => (filter ? task.isComplete : !task.isComplete)),
    [filter, tasks]
  );

  
  const cleanTasks = () => {
    const cleanedTaskList = tasks.filter((task) => !task.isComplete);
    setTasks(cleanedTaskList);
  };


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
