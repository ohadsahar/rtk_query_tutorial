import { TaskProps } from 'interface/Task.interface';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useTasksQuery,
} from '../../api/task_query';

export const useLayout = () => {
  const { data, isLoading, isSuccess } = useTasksQuery();
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [addTask] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const newTaskRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      console.log(data);
      setTasks(data);
    }
  }, [isLoading, isSuccess, data]);

  const submitTask = useCallback(() => {
    const taskToAdd = newTaskRef.current?.value.trim();
    if (taskToAdd) {
      const uid = Date.now();
      const task: TaskProps = {
        userId: uid,
        id: uid,
        title: taskToAdd,
        completed: false,
      };
      addTask(task);
      if (tasks) {
        setTasks([...tasks, task]);
      }
    }
  }, [tasks]);

  const deleteCurerntTask = useCallback((id: number, index: number) => {
    deleteTask(id);
    const cloneTasks = [...tasks];
    cloneTasks.splice(index, 1);
    setTasks(cloneTasks);
  }, []);

  const navigateTo = useCallback((id: number) => {
    router.push(`task/${id}`);
  }, []);

  return {
    tasks,
    isLoading,
    newTaskRef,
    deleteCurerntTask,
    navigateTo,
    submitTask,
  };
};
