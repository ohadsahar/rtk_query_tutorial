import React from 'react';
import { useTask } from '@/core/customHooks/useTask';
import { TaskTitleWrapper } from '@/shared/Typogrphay';
import { TaskInformationWrapper } from './styled';

const Information = () => {
  const { task } = useTask();
  return (
    <TaskInformationWrapper>
      <TaskTitleWrapper>{task?.id}</TaskTitleWrapper>
      <TaskTitleWrapper>{task?.title}</TaskTitleWrapper>
    </TaskInformationWrapper>
  );
};

export default Information;
