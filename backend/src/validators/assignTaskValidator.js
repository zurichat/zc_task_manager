import {    body } from "express-validator";

import { taskAssignerValMsg, taskAssigneeValMsg, taskForChannelValMsg, taskIdValMsg, assignTaskIdValMsg, createdAtValMsg, updatedAtValMsg } from "./validationMsg.js";

export const createAssigTaskValidator = [
    body("task_assigner", taskAssignerValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_assignee", taskAssigneeValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("for_channel", taskForChannelValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_id", taskIdValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("created_at", createdAtValMsg)
        .notEmpty()
        .isISO8601().toDate()

];

export const updateAssignTaskValidator = [

    body("_id", assignTaskIdValMsg)
        .notEmpty()
        .isString(),

    body("task_assignee", taskAssigneeValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("for_channel", taskForChannelValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

    body("task_id", taskIdValMsg)
        .notEmpty()
        .custom((value) => value.length > 1),

    body("updated_at", updatedAtValMsg)
        .notEmpty()
        .isISO8601().toDate()
];