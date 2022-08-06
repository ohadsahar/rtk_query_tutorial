import Loading from '@/shared/Loading/Loading';
import { TaskProps } from 'interface/Task.interface';
import React from 'react';
import Task from '../Task/Task';
import { TaskListWrapper } from './styled';

type TaskListProps = {
  tasks: TaskProps[] | undefined;
  isLoading: boolean;
  navigateTo: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (task: TaskProps) => void;
};

const TaskList = ({
  tasks,
  isLoading,
  navigateTo,
  onDelete,
  onUpdate,
}: TaskListProps) => {
  return (
    <>
      {!isLoading ? (
        <TaskListWrapper>
          {tasks?.map((task: TaskProps) => (
            <Task
              key={task.id}
              task={task}
              onPress={navigateTo}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </TaskListWrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TaskList;
