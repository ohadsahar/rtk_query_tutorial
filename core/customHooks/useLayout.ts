import { TaskProps } from 'interface/Task.interface';
import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useTasksQuery,
  useUpdateTaskMutation,
} from '../../api/taskApiSlice';

export const useLayout = () => {
  const router = useRouter();
  let tasks: TaskProps[] = [];
  const newTaskRef = useRef<HTMLInputElement>(null);
  const { data, isLoading, isSuccess } = useTasksQuery();
  const [addTask] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (!isLoading && isSuccess) {
    tasks = data;
  }

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
      if (newTaskRef.current) {
        newTaskRef.current.value = '';
      }
    }
  }, []);

  const deleteCurerntTask = useCallback((id: number) => {
    deleteTask(id);
  }, []);

  const updateCurrentTask = useCallback((task: TaskProps) => {
    updateTask(task);
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
