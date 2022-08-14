import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/constants/config';
import { TaskProps } from '@/interface/Task.interface';

export const tasksAPI = createApi({
  reducerPath: 'tasksAPI',
  baseQuery: fetchBaseQuery({ baseUrl: config.api_url }),
  tagTypes: ['todos'],
  endpoints: (builder) => ({
    tasks: builder.query<TaskProps[], void>({
      query: () => '/todos',
      providesTags: ['todos'],
    }),
    task: builder.query<TaskProps, string>({
      query: (id: string) => `/todos/${id}`,
      providesTags: ['todos'],
    }),
    addTask: builder.mutation<'', TaskProps>({
      query: (task: TaskProps) => ({
        url: '/todos',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['todos'],
    }),
    updateTask: builder.mutation({
      query: (task: TaskProps) => ({
        url: `/todos/${task.id}`,
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: ['todos'],
    }),
    deleteTask: builder.mutation({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const {
  useTasksQuery,
  useTaskQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksAPI;
