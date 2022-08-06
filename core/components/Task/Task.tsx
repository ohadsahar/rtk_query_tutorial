import { TaskProps } from '../../../interface/Task.interface';
import { ItemText } from '../../../shared/Typogrphay';
import { TaskWrapper } from './styled';

type TaskData = {
  task: TaskProps;
  onPress: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (task: TaskProps) => void;
};

const Task = ({ task, onPress, onDelete, onUpdate }: TaskData) => {
  return (
    <TaskWrapper>
      <p onClick={() => onPress(task.id)}>Navigate to current task</p>
      <p onClick={() => onUpdate(task)}> Test updateing</p>
      <ItemText onClick={() => onDelete(task.id)}>
        For delete press: {task?.title}{' '}
      </ItemText>
    </TaskWrapper>
  );
};

export default Task;
