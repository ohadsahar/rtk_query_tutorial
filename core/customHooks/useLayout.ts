import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useTasksQuery } from '../../api/task_query'

export const useLayout = () => {
  const { data: tasks, isLoading } = useTasksQuery()
  const router = useRouter()

  const navigateTo = useCallback((id: number) => {
    router.push(`task/${id}`)
  }, [])

  return {
    tasks,
    isLoading,
    navigateTo
  }
}
