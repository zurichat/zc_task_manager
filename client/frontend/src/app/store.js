import { configureStore } from "@reduxjs/toolkit";
import { TasksApi } from "../api/TaskApi";

export default configureStore({
    reducer: {
        [TasksApi.reducerPath]: TasksApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(TasksApi.middleware)
})