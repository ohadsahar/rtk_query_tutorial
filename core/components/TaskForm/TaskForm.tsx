import React, { RefObject } from 'react';
import { ButtonWrapper, FormWrapper, InputDiv } from './styled';

type TaskFormProps = {
  newUserRef: RefObject<HTMLInputElement>;
  submitUser: () => void;
};

const TaskForm = ({ newUserRef, submitUser }: TaskFormProps) => {
  return (
    <FormWrapper data-testid="task-form-wrapper">
      <InputDiv type="text" ref={newUserRef} placeholder="Type your task" />
      <ButtonWrapper type="submit" onClick={submitUser}>
        Add Task
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default TaskForm;
