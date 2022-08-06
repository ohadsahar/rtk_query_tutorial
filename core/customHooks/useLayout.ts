import { TaskProps } from 'interface/Task.interface';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useTasksQuery,
  useUpdateTaskMutation,
} from '../../api/taskApiSlice';

export const useLayout = () => {
  const { data, isLoading } = useTasksQuery();
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [addTask] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const newTaskRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    setTasks(data ?? []);
  }, [data]);

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

  const deleteCurerntTask = useCallback((id: number) => {
    deleteTask(id);
  }, []);

  const updateCurrentTask = useCallback((task: TaskProps) => {
    const updatedTask = { ...task, title: 'new update task' };
    updateTask(updatedTask);
  }, []);

  const navigateTo = useCallback((id: number) => {
    router.push(`task/${id}`);
  }, []);

  return {
    tasks,
    isLoading,
    newTaskRef,
    deleteCurerntTask,
    updateCurrentTask,
    navigateTo,
    submitTask,
  };
};
