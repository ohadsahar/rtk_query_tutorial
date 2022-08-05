import { useLayout } from '../../customHooks/useLayout'
import TaskList from '../TaskList/TaskList'
import { HomeWrapper } from './styled'

const Layout = () => {
  const { tasks, isLoading, navigateTo } = useLayout()
  return (
    <HomeWrapper data-testid="home-wrapper">
      <TaskList tasks={tasks} isLoading={isLoading} navigateTo={navigateTo} />
    </HomeWrapper>
  )
}

export default Layout
