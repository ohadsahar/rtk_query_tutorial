import { TaskProps } from 'interface/Task.interface';
import React from 'react';
import Task from '../Task/Task';
import { TaskListWrapper } from './styled';

type TaskListProps = {
  tasks: TaskProps[] | undefined;
  isLoading: boolean;
  navigateTo: (id: number) => void;
};

const TaskList = ({ tasks, isLoading, navigateTo }: TaskListProps) => {
  return (
    <>
      {!isLoading ? (
        <TaskListWrapper>
          {tasks?.map((task: TaskProps) => (
            <Task task={task} onPress={navigateTo} />
          ))}
        </TaskListWrapper>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default TaskList;
