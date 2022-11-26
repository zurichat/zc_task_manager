import {  body } from "express-validator";

import { taskIdValMsg, taskTitleValMsg, taskDeadlineValMsg, taskCategoryValMsg, taskDescriptionValMsg, taskCreatorValMsg, taskStatusValMsg, createdAtValMsg, updatedAtValMsg } from "./validationMsg.js";

export const createTaskValidator = [
    body("task_title", taskTitleValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_descriptions", taskDescriptionValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_deadline", taskDeadlineValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_creator", taskCreatorValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_category", taskCategoryValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_status", taskStatusValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value === "created" || value === "assigned" || value === "completed"),

    body("created_at", createdAtValMsg)
        .notEmpty()
        .isISO8601().toDate()

];

export const updateTaskValidator = [

    body("_id", taskIdValMsg)
        .notEmpty()
        .isString(),

    body("task_title", taskTitleValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_descriptions", taskDescriptionValMsg)
        .notEmpty()
        .toString()
        .custom((value) => value.length > 1),

    body("task_deadline", taskDeadlineValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_creator", taskCreatorValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_category", taskCategoryValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_status", taskStatusValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value === "created" || value === "assigned" || value === "completed"),

    body("updated_at", updatedAtValMsg)
        .notEmpty()
        .isISO8601().toDate()
];