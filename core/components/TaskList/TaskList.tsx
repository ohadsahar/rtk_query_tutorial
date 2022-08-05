import React from 'react'
import { TaskProps } from '../../../interface/Task.interface'
import { LoadingTextWrapper } from '../../../shared/Typogrphay'
import { ListWrapper } from '../Layout/styled'
import Task from '../Task/Task'

type TaskListProps = {
  isLoading: boolean;
  tasks?: TaskProps[];
  navigateTo: (id: number) => void;
};

const TaskList = ({ tasks, isLoading, navigateTo }: TaskListProps) => {
  return (
    <div>
      {!isLoading
        ? (
        <ListWrapper>
          {tasks?.map((task: TaskProps, index: number) => (
            <Task task={task} onPress={navigateTo} key={index} />
          ))}
        </ListWrapper>
          )
        : (
        <LoadingTextWrapper>Loading</LoadingTextWrapper>
          )}
    </div>
  )
}

export default TaskList
