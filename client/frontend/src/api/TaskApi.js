import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://task2.zuri.chat/api'

const createRequest = (url) => (url)

export const TasksApi = createApi({
    reducerPath: 'TasksApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: ({ organization_id, page }) => createRequest(`/task/${organization_id}/?page=${page}`)
        }),
        getCategories: builder.query({
            query: (organization_id) => createRequest(`/task/${organization_id}/categories`)
        }),
        getTaskByMe: builder.query({
            query: ({ task_creator, organization_id }) => createRequest(`/task/${task_creator}/?org=${organization_id}/`)
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
    useGetCategoriesQuery,
    useGetTaskByMeQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = TasksApi