import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://zuri-chat-task-manager.onrender.com'

const createRequest = (url) => (url)

export const TasksApi = createApi({
    reducerPath: 'TasksApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => createRequest(`/task`)
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: "/tasks",
                method: "POST",
                body: task
            })
        }),
        updateTask: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/tasks/${id}`,
                method: "PUT",
                body: rest
            })
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE"
            })
        })
    })
})

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = TasksApi