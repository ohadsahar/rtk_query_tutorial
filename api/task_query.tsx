import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../constants/config';
import { TaskProps } from '../interface/Task.interface';

export const tasksAPI = createApi({
  reducerPath: 'tasksAPI',
  baseQuery: fetchBaseQuery({ baseUrl: config.api_url }),
  endpoints: (builder) => ({
    tasks: builder.query<TaskProps[], void>({
      query: () => '/todos',
    }),
    task: builder.query<TaskProps, string>({
      query: (id: string) => `/todos/${id}`,
    }),
    addTask: builder.mutation<'', TaskProps>({
      query: (task: TaskProps) => ({
        url: '/todos',
        method: 'POST',
        body: task,
      }),
    }),
    deleteTask: builder.mutation<0, number>({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
        body: id,
      }),
    }),
  }),
});

export const {
  useTasksQuery,
  useTaskQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
} = tasksAPI;
