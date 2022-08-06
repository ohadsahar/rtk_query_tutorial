import { TaskProps } from '../../../interface/Task.interface';
import { ItemText } from '../../../shared/Typogrphay';
import { TaskWrapper } from './styled';

type TaskData = {
  task: TaskProps;
  index: number;
  onPress: (id: number) => void;
  deleteCurerntTask: (id: number, index: number) => void;
};

const Task = ({ task, index, onPress, deleteCurerntTask }: TaskData) => {
  return (
    <TaskWrapper>
      <p onClick={() => onPress(task.id)}>Navigate to current task</p>
      <ItemText onClick={() => deleteCurerntTask(task.id, index)}>
        {task?.title}
      </ItemText>
    </TaskWrapper>
  );
};

export default Task;
