import { TaskProps } from 'interface/Task.interface';
import React from 'react';
import { TaskListWrapper } from './styled';

type TaskListProps = {
  tasks: TaskProps[] | undefined;
  isLoading: boolean;
  navigateTo: (id: number) => void;
};

const TaskList = ({ tasks, isLoading, navigateTo }: TaskListProps) => {
  return (
    <TaskListWrapper>
      {tasks?.map((task: TaskProps) => (
        <div>
          <p>{task?.title}</p>
        </div>
      ))}
    </TaskListWrapper>
  );
};

export default TaskList;
