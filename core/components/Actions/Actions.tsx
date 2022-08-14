import { TaskProps } from '@/interface/Task.interface';
import React from 'react';
import { FaExternalLinkAlt, FaTrash, FaEdit } from 'react-icons/fa';
import { ActionsWrapper } from './styled';

interface ActionsProps {
  task: TaskProps;
  onPress: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (task: TaskProps) => void;
}
const Actions = ({ task, onPress, onUpdate, onDelete }: ActionsProps) => {
  return (
    <ActionsWrapper>
      <FaExternalLinkAlt
        color="white"
        fontSize={'24px'}
        onClick={() => onPress(task.id)}
      />
      <FaTrash
        color="white"
        fontSize={'24px'}
        onClick={() => onDelete(task.id)}
      />
      <FaEdit color="white" fontSize={'24px'} onClick={() => onUpdate(task)} />
    </ActionsWrapper>
  );
};

export default Actions;
