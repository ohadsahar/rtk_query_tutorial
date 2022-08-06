import Loading from '@/shared/Loading/Loading';
import { TaskProps } from 'interface/Task.interface';
import React from 'react';
import Task from '../Task/Task';
import { TaskListWrapper } from './styled';

type TaskListProps = {
  tasks: TaskProps[] | undefined;
  isLoading: boolean;
  navigateTo: (id: number) => void;
  deleteCurerntTask: (id: number, index: number) => void;
};

const TaskList = ({
  tasks,
  isLoading,
  navigateTo,
  deleteCurerntTask,
}: TaskListProps) => {
  return (
    <>
      {!isLoading ? (
        <TaskListWrapper>
          {tasks?.map((task: TaskProps, index: number) => (
            <Task
              index={index}
              key={task.id}
              task={task}
              onPress={navigateTo}
              deleteCurerntTask={deleteCurerntTask}
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
