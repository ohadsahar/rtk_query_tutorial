import Button from '@/shared/Button/Button';
import React, { RefObject } from 'react';
import { FormWrapper, InputDiv } from './styled';

type TaskFormProps = {
  newUserRef: RefObject<HTMLInputElement>;
  submitTask: () => void;
};

const TaskForm = ({ newUserRef, submitTask }: TaskFormProps) => {
  return (
    <FormWrapper
      data-testid="task-form-wrapper"
      onSubmit={(event: React.SyntheticEvent) => event.preventDefault()}
    >
      <InputDiv type="text" ref={newUserRef} placeholder="Type your task" />
      <Button submitTask={submitTask} buttonText="Add Task" />
    </FormWrapper>
  );
};

export default TaskForm;
