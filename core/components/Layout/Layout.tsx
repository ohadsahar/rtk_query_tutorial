import { useLayout } from '../../customHooks/useLayout';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

import { HomeWrapper } from './styled';
const Layout = () => {
  const {
    tasks,
    isLoading,
    newTaskRef,
    navigateTo,
    deleteCurerntTask,
    submitTask,
  } = useLayout();

  return (
    <HomeWrapper data-testid="home-wrapper">
      <TaskForm newUserRef={newTaskRef} submitTask={submitTask} />
      <TaskList
        tasks={tasks}
        isLoading={isLoading}
        navigateTo={navigateTo}
        deleteCurerntTask={deleteCurerntTask}
      />
    </HomeWrapper>
  );
};

export default Layout;
