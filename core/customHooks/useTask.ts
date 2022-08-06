import { useRouter } from 'next/router';
import { useTaskQuery } from '../../api/taskApiSlice';

export const useTask = () => {
  const router = useRouter();
  const id = router.query.id?.toString() ?? '';
  const { data: task } = useTaskQuery(id);
  return { task };
};
