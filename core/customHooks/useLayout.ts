import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';
import { useTasksQuery } from '../../api/task_query';

export const useLayout = () => {
  const { data: tasks, isLoading } = useTasksQuery();
  const newTaskRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const navigateTo = useCallback((id: number) => {
    router.push(`task/${id}`);
  }, []);

  const submitTask = () => {
    console.log('heree');
    console.log(newTaskRef.current?.value);
  };

  return {
    tasks,
    isLoading,
    newTaskRef,
    navigateTo,
    submitTask,
  };
};
