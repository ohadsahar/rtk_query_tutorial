import { TaskProps } from '../../../interface/Task.interface';
import { ItemText } from '../../../shared/Typogrphay';
import { TaskItemInfoWrapper, TaskWrapper } from './styled';
import Actions from '../Actions/Actions';

type TaskData = {
  task: TaskProps;
  onPress: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (task: TaskProps) => void;
};

const Task = ({ task, onPress, onDelete, onUpdate }: TaskData) => {
  return (
    <TaskWrapper>
      <TaskItemInfoWrapper>
        <ItemText>{task?.title}</ItemText>
      </TaskItemInfoWrapper>
      <Actions
        task={task}
        onPress={onPress}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </TaskWrapper>
  );
};

export default Task;
