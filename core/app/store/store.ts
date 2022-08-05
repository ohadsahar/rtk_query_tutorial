import { configureStore } from '@reduxjs/toolkit'
import { tasksAPI } from '../../../api/task_query'

const store = configureStore({
  reducer: {
    [tasksAPI.reducerPath]: tasksAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
