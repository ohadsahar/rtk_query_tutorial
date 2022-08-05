import { TaskProps } from '../../../interface/Task.interface'
import { ItemText } from '../../../shared/Typogrphay'

type TaskData = {
  task: TaskProps
  onPress: (id: number) => void
}

const Task = ({ task, onPress }: TaskData) => {
  return <ItemText onClick={() => onPress(task.id)}>{task?.title}</ItemText>
}

export default Task
