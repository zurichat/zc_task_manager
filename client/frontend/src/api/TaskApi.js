import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://hng-s8o8.onrender.com'

const createRequest = (url) => (url)

export const TasksApi = createApi({
    reducerPath: 'TasksApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: (page, organization_id) => createRequest(`/task/61db3b27eba8adb50ca1399b/?page=${page}`)
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: "/task",
                method: "POST",
                body: JSON.stringify({ ...task, organization_id: '61db3b27eba8adb50ca1399b' })
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