import { TaskProps } from '../../../interface/Task.interface';
import { ItemText } from '../../../shared/Typogrphay';
import { TaskWrapper } from './styled';

type TaskData = {
  task: TaskProps;
  onPress: (id: number) => void;
};

const Task = ({ task, onPress }: TaskData) => {
  return (
    <TaskWrapper>
      <ItemText onClick={() => onPress(task.id)}>{task?.title}</ItemText>
    </TaskWrapper>
  );
};

export default Task;
