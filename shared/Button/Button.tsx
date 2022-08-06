import React from 'react';
import { ButtonWrapper } from './styled';

type ButtonProps = {
  submitTask: () => void;
  buttonText: string;
};

const Button = ({ submitTask, buttonText }: ButtonProps) => {
  return (
    <ButtonWrapper type="submit" onClick={submitTask}>
      {buttonText}
    </ButtonWrapper>
  );
};

export default Button;
